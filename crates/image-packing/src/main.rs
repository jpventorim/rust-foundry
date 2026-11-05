use std::{ffi::OsString, path::PathBuf, process::ExitCode};

use anyhow::{Context, Result, bail};
use clap::{ArgAction, Parser, ValueEnum};
use image_packing::{ImageItem, LayoutOptions, PageSize, compose};

#[derive(Debug, Clone, Copy, ValueEnum)]
enum Orientation {
    Portrait,
    Landscape,
}

#[derive(Debug, Parser)]
#[command(
    version,
    about = "Pack images with independent quantities into an A4 PDF"
)]
struct Args {
    /// Image path and positive copy count. Repeat for each input image.
    #[arg(long, num_args = 2, value_names = ["IMAGE", "QUANTITY"], action = ArgAction::Append, required = true)]
    item: Vec<OsString>,
    /// Destination PDF path.
    #[arg(short, long)]
    output: PathBuf,
    /// Pixels per inch used to determine physical image sizes.
    #[arg(long, default_value_t = 300.0)]
    dpi: f64,
    /// Page orientation.
    #[arg(long, value_enum, default_value = "portrait")]
    orientation: Orientation,
    /// Margin on each page edge, in millimetres.
    #[arg(long, default_value_t = LayoutOptions::default().margin_mm)]
    margin_mm: f64,
    /// Minimum gap between images, in millimetres.
    #[arg(long, default_value_t = LayoutOptions::default().spacing_mm)]
    spacing_mm: f64,
    /// Print width for every input, preserving aspect ratios and overriding DPI sizing.
    #[arg(long)]
    width_mm: Option<f64>,
    /// Black border thickness in source pixels; use 0 for no border.
    #[arg(long, default_value_t = 3)]
    border_px: u32,
}

fn with_border(image: image::DynamicImage, border: u32) -> Result<image::DynamicImage> {
    if border == 0 {
        return Ok(image);
    }
    let padding = border
        .checked_mul(2)
        .context("border thickness is too large")?;
    let width = image
        .width()
        .checked_add(padding)
        .context("bordered image is too wide")?;
    let height = image
        .height()
        .checked_add(padding)
        .context("bordered image is too tall")?;
    let mut bordered = image::RgbaImage::from_pixel(width, height, image::Rgba([0, 0, 0, 255]));
    image::imageops::replace(
        &mut bordered,
        &image.to_rgba8(),
        i64::from(border),
        i64::from(border),
    );
    Ok(image::DynamicImage::ImageRgba8(bordered))
}

fn run(args: Args) -> Result<()> {
    let mut inputs = Vec::with_capacity(args.item.len() / 2);
    for [path, quantity] in args.item.as_chunks::<2>().0 {
        let path = PathBuf::from(path);
        let quantity = quantity
            .to_str()
            .context("quantity must be a positive integer")?
            .parse::<usize>()
            .context("quantity must be a positive integer")?;
        if quantity == 0 {
            bail!("quantity for {} must be positive", path.display());
        }
        let image = image::ImageReader::open(&path)
            .with_context(|| format!("cannot open image {}", path.display()))?
            .with_guessed_format()
            .context("cannot identify image format")?
            .decode()
            .with_context(|| format!("cannot decode image {}", path.display()))?;
        let image = with_border(image, args.border_px)?;
        inputs.push((path, image, quantity));
    }
    let items: Vec<_> = inputs
        .iter()
        .map(|(path, image, quantity)| {
            let mut item = ImageItem::new(path.to_string_lossy(), image, *quantity);
            item.width_mm = args.width_mm;
            item
        })
        .collect();
    let page_size = match args.orientation {
        Orientation::Portrait => PageSize::A4,
        Orientation::Landscape => PageSize::A4.rotated(),
    };
    let output = compose(
        &items,
        &LayoutOptions {
            page_size,
            dpi: args.dpi,
            margin_mm: args.margin_mm,
            spacing_mm: args.spacing_mm,
            allow_rotation: true,
        },
    )?;
    std::fs::write(&args.output, &output.pdf)
        .with_context(|| format!("cannot write pdf {}", args.output.display()))?;
    eprintln!(
        "Saved {} page(s) to {}",
        output.layout.pages().len(),
        args.output.display()
    );
    Ok(())
}

fn main() -> ExitCode {
    match run(Args::parse()) {
        Ok(()) => ExitCode::SUCCESS,
        Err(error) => {
            eprintln!("error: {error:#}");
            ExitCode::FAILURE
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn border_is_three_pixels_and_preserves_source_transparency() {
        let source = image::RgbaImage::from_pixel(7, 11, image::Rgba([20, 80, 120, 50]));
        let bordered = with_border(source.clone().into(), 3).unwrap().to_rgba8();
        assert_eq!(bordered.dimensions(), (13, 17));
        for (x, y, pixel) in bordered.enumerate_pixels() {
            if (3..10).contains(&x) && (3..14).contains(&y) {
                assert_eq!(*pixel, *source.get_pixel(x - 3, y - 3));
            } else {
                assert_eq!(*pixel, image::Rgba([0, 0, 0, 255]));
            }
        }
    }

    #[test]
    fn border_thickness_is_configurable_and_checked() {
        let source = image::RgbaImage::from_pixel(7, 11, image::Rgba([20, 80, 120, 50]));
        for border in [0, 1, 7] {
            let bordered = with_border(source.clone().into(), border)
                .unwrap()
                .to_rgba8();
            assert_eq!(bordered.dimensions(), (7 + 2 * border, 11 + 2 * border));
            for (x, y, pixel) in bordered.enumerate_pixels() {
                if (border..border + 7).contains(&x) && (border..border + 11).contains(&y) {
                    assert_eq!(*pixel, *source.get_pixel(x - border, y - border));
                } else {
                    assert_eq!(*pixel, image::Rgba([0, 0, 0, 255]));
                }
            }
        }
        assert!(with_border(source.into(), u32::MAX).is_err());
    }
}
