use std::sync::Arc;

use image::{GenericImageView, Pixel};
use krilla::{
    Document,
    geom::{Size, Transform},
    image::{BitsPerComponent, CustomImage, Image, ImageColorspace},
    page::PageSettings,
};

use crate::{DocumentLayout, Error, ImageItem};

// Unlike Image::from_rgba8 in Krilla 0.8, include the dimensions in the hash.
// Cloning shares channels, and Krilla computes the content hash once at creation.
#[derive(Clone, Hash)]
struct Bitmap {
    size: (u32, u32),
    rgb: Arc<Vec<u8>>,
    alpha: Arc<Vec<u8>>,
}

impl CustomImage for Bitmap {
    fn color_channel(&self) -> &[u8] {
        &self.rgb
    }
    fn alpha_channel(&self) -> Option<&[u8]> {
        Some(&self.alpha)
    }
    fn bits_per_component(&self) -> BitsPerComponent {
        BitsPerComponent::Eight
    }
    fn size(&self) -> (u32, u32) {
        self.size
    }
    fn icc_profile(&self) -> Option<&[u8]> {
        None
    }
    fn color_space(&self) -> ImageColorspace {
        ImageColorspace::Rgb
    }
}

fn points(mm: f64) -> f32 {
    (mm * 72.0 / 25.4) as f32
}

/// Export a previously calculated layout, embedding each source image once.
///
/// Pixels are converted to RGBA8, retaining transparency. Repeated copies share
/// an image resource. No full-page bitmap or DPI-based resampling is performed.
/// Sources must have the same order, identifiers, dimensions, quantities, and
/// print widths as the layout inputs; their pixel contents may be replaced.
///
/// # Errors
/// Returns [`Error::LayoutMismatch`] for incompatible sources, or an error if
/// PDF serialization fails.
pub fn render_pdf<I>(items: &[ImageItem<'_, I>], layout: &DocumentLayout) -> Result<Vec<u8>, Error>
where
    I: GenericImageView + ?Sized,
    I::Pixel: Pixel<Subpixel = u8>,
{
    if !layout.matches(items) {
        return Err(Error::LayoutMismatch);
    }
    let images: Vec<_> = items
        .iter()
        .map(|item| {
            // Krilla's custom-image decoder uses u32 channel byte counts.
            let pixel_count = item.image.width().checked_mul(item.image.height());
            let color_count = pixel_count
                .and_then(|count| count.checked_mul(3))
                .ok_or_else(|| {
                    Error::InvalidInput("image exceeds pdf channel size limits".into())
                })?;
            let rgb_capacity = usize::try_from(color_count)
                .map_err(|_| Error::InvalidInput("image exceeds addressable memory".into()))?;
            let mut rgb = Vec::new();
            let mut alpha = Vec::new();
            rgb.try_reserve_exact(rgb_capacity)
                .map_err(|_| Error::InvalidInput("cannot allocate image pixel buffer".into()))?;
            alpha
                .try_reserve_exact(rgb_capacity / 3)
                .map_err(|_| Error::InvalidInput("cannot allocate image alpha buffer".into()))?;
            for y in 0..item.image.height() {
                for x in 0..item.image.width() {
                    let pixel = item.image.get_pixel(x, y).to_rgba();
                    rgb.extend_from_slice(&pixel.0[..3]);
                    alpha.push(pixel.0[3]);
                }
            }
            Image::from_custom(
                Bitmap {
                    size: item.image.dimensions(),
                    rgb: Arc::new(rgb),
                    alpha: Arc::new(alpha),
                },
                true,
            )
            .map_err(Error::ImageEmbedding)
        })
        .collect::<Result<_, Error>>()?;
    let mut document = Document::new();
    for page_layout in layout.pages() {
        let settings = PageSettings::from_wh(
            points(page_layout.size.width_mm),
            points(page_layout.size.height_mm),
        )
        .ok_or_else(|| {
            Error::InvalidInput("page size cannot be represented in pdf points".into())
        })?;
        let mut page = document.start_page_with(settings);
        let mut surface = page.surface();
        for placement in &page_layout.placements {
            let x = points(placement.x_mm);
            let y = points(placement.y_mm);
            let w = points(placement.width_mm);
            let h = points(placement.height_mm);
            let (transform, width, height) = if placement.rotated {
                (Transform::from_row(0.0, 1.0, -1.0, 0.0, x + w, y), h, w)
            } else {
                (Transform::from_translate(x, y), w, h)
            };
            let size = Size::from_wh(width, height).ok_or_else(|| {
                Error::InvalidInput("image size cannot be represented in pdf points".into())
            })?;
            surface.push_transform(&transform);
            surface.draw_image(images[placement.source_index].clone(), size);
            surface.pop();
        }
        surface.finish();
        page.finish();
    }
    Ok(document.finish()?)
}
