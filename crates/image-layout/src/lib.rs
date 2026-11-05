//! Pack borrowed images into physical page layouts and export them as PDF.
//!
//! ```
//! use image::{Rgb, RgbImage};
//! use image_layout::{ImageItem, LayoutOptions, compose};
//! let image = RgbImage::from_pixel(600, 400, Rgb([20, 80, 180]));
//! let items = [ImageItem::new("photo", &image, 8)];
//! let output = compose(&items, &LayoutOptions::default())?;
//! assert!(output.pdf.starts_with(b"%PDF-"));
//! # Ok::<(), image_layout::Error>(())
//! ```

#![forbid(unsafe_code)]
#![warn(missing_docs)]

mod layout;
mod pdf;

pub use layout::{DocumentLayout, LayoutOptions, PageLayout, PageSize, Placement, layout};
pub use pdf::render_pdf;

use image::{GenericImageView, Pixel};

/// A borrowed image with an independent quantity and optional print width.
///
/// A batch uses one view type. For mixed RGB/RGBA images, use `DynamicImage`.
/// Export converts pixels to RGBA8; no image is resized or cropped.
#[derive(Debug, Clone)]
pub struct ImageItem<'a, I: ?Sized> {
    /// Identifier recorded in placement metadata; need not be unique.
    pub id: String,
    /// Borrowed source pixels.
    pub image: &'a I,
    /// Positive number of copies to place.
    pub quantity: usize,
    /// Optional width in millimetres, preserving the source aspect ratio.
    pub width_mm: Option<f64>,
}

impl<'a, I: ?Sized> ImageItem<'a, I> {
    /// Create an item sized from its pixels and the layout's DPI.
    pub fn new(id: impl Into<String>, image: &'a I, quantity: usize) -> Self {
        Self {
            id: id.into(),
            image,
            quantity,
            width_mm: None,
        }
    }

    /// Set an explicit print width, overriding DPI for this item's size.
    #[must_use]
    pub fn with_width_mm(mut self, width: f64) -> Self {
        self.width_mm = Some(width);
        self
    }
}

/// Failures during validation, packing, or PDF generation.
#[derive(Debug, thiserror::Error)]
#[non_exhaustive]
pub enum Error {
    /// Invalid dimensions, quantity, DPI, or configuration.
    #[error("invalid input: {0}")]
    InvalidInput(String),
    /// One item cannot fit an empty page, including allowed rotation.
    #[error("image {id:?} ({width_mm:.3} x {height_mm:.3} mm) cannot fit the printable page")]
    ImageTooLarge {
        /// Source identifier.
        id: String,
        /// Print width.
        width_mm: f64,
        /// Print height.
        height_mm: f64,
    },
    /// The packing backend failed.
    #[error("packing failed: {0}")]
    Packing(#[from] bin_packing::BinPackingError),
    /// A solver result omitted requested items.
    #[error("packing could not place every requested copy")]
    IncompleteLayout,
    /// The export inputs differ from those used to calculate the layout.
    #[error(
        "images do not match the layout's source dimensions, quantities, identifiers, or print sizes"
    )]
    LayoutMismatch,
    /// An image could not be embedded by Krilla.
    #[error("image embedding failed: {0}")]
    ImageEmbedding(String),
    /// Krilla could not serialize the PDF.
    #[error("pdf generation failed: {0}")]
    Pdf(#[from] krilla::error::KrillaError),
}

/// PDF bytes and inspectable placement metadata.
#[derive(Debug, Clone)]
pub struct PdfOutput {
    /// Complete PDF document ready to save or send.
    pub pdf: Vec<u8>,
    /// Physical page dimensions and placements.
    pub layout: DocumentLayout,
}

/// Calculate a layout and export it as a multi-page PDF.
///
/// # Errors
/// Returns an error for empty input, invalid configuration, oversized images,
/// unsuccessful packing, or PDF serialization failure.
pub fn compose<I>(items: &[ImageItem<'_, I>], options: &LayoutOptions) -> Result<PdfOutput, Error>
where
    I: GenericImageView + ?Sized,
    I::Pixel: Pixel<Subpixel = u8>,
{
    let layout = layout(items, options)?;
    let pdf = render_pdf(items, &layout)?;
    Ok(PdfOutput { pdf, layout })
}
