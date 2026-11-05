use bin_packing::two_d::{
    RectDemand2D, Sheet2D, SheetLayout2D, TwoDAlgorithm, TwoDOptions, TwoDProblem, solve_2d,
};
use image::GenericImageView;

use crate::{Error, ImageItem};

// Conservative quantization: round items/gaps up and available space down.
const UNITS_PER_MM: f64 = 1000.0;
const MAX_UNITS: f64 = (1u32 << 30) as f64;

/// Physical page dimensions in millimetres.
#[derive(Debug, Clone, Copy, PartialEq)]
pub struct PageSize {
    /// Page width.
    pub width_mm: f64,
    /// Page height.
    pub height_mm: f64,
}

impl PageSize {
    /// A4 portrait: 210 by 297 mm.
    pub const A4: Self = Self {
        width_mm: 210.0,
        height_mm: 297.0,
    };

    /// Swap width and height.
    #[must_use]
    pub const fn rotated(self) -> Self {
        Self {
            width_mm: self.height_mm,
            height_mm: self.width_mm,
        }
    }
}

/// Layout configuration, validated by [`layout`].
#[derive(Debug, Clone, PartialEq)]
pub struct LayoutOptions {
    /// Physical paper dimensions; defaults to A4 portrait.
    pub page_size: PageSize,
    /// Pixels per inch used when an item has no explicit print width.
    pub dpi: f64,
    /// Equal margins on all four edges, in millimetres.
    pub margin_mm: f64,
    /// Minimum distance between image rectangles, in millimetres.
    pub spacing_mm: f64,
    /// Allow clockwise quarter-turns to improve packing.
    pub allow_rotation: bool,
}

impl Default for LayoutOptions {
    fn default() -> Self {
        Self {
            page_size: PageSize::A4,
            dpi: 300.0,
            margin_mm: 10.0,
            spacing_mm: 2.0,
            allow_rotation: false,
        }
    }
}

/// One requested copy, positioned from the page's top-left corner.
#[derive(Debug, Clone, PartialEq)]
pub struct Placement {
    /// Zero-based input index, disambiguating repeated identifiers.
    pub source_index: usize,
    /// Caller-supplied source identifier.
    pub source_id: String,
    /// Zero-based copy index, unique across the whole document for this source.
    pub copy_index: usize,
    /// Left edge in millimetres.
    pub x_mm: f64,
    /// Top edge in millimetres.
    pub y_mm: f64,
    /// Width after rotation, in millimetres.
    pub width_mm: f64,
    /// Height after rotation, in millimetres.
    pub height_mm: f64,
    /// Whether the source is rotated 90 degrees clockwise.
    pub rotated: bool,
}

/// A physical page and the copies placed on it.
#[derive(Debug, Clone, PartialEq)]
pub struct PageLayout {
    /// Page dimensions in millimetres.
    pub size: PageSize,
    /// Placements belonging to this page.
    pub placements: Vec<Placement>,
}

#[derive(Debug, Clone, PartialEq)]
pub(crate) struct Source {
    id: String,
    pixels: (u32, u32),
    quantity: usize,
    width_mm: Option<f64>,
}

impl Source {
    fn from_item<I: GenericImageView + ?Sized>(item: &ImageItem<'_, I>) -> Self {
        Self {
            id: item.id.clone(),
            pixels: item.image.dimensions(),
            quantity: item.quantity,
            width_mm: item.width_mm,
        }
    }
}

/// A validated, immutable layout reusable for PDF export.
#[derive(Debug, Clone, PartialEq)]
pub struct DocumentLayout {
    pages: Vec<PageLayout>,
    sources: Vec<Source>,
}

impl DocumentLayout {
    /// Pages in PDF order. Page indices are zero-based.
    pub fn pages(&self) -> &[PageLayout] {
        &self.pages
    }

    pub(crate) fn matches<I: GenericImageView + ?Sized>(&self, items: &[ImageItem<'_, I>]) -> bool {
        self.sources.len() == items.len()
            && self.sources.iter().zip(items).all(|(source, item)| {
                source.id == item.id
                    && source.pixels == item.image.dimensions()
                    && source.quantity == item.quantity
                    && source.width_mm == item.width_mm
            })
    }
}

fn invalid(message: &str) -> Error {
    Error::InvalidInput(message.into())
}

fn units(mm: f64, round_up: bool) -> Result<u32, Error> {
    let units = mm * UNITS_PER_MM;
    if !units.is_finite() || !(0.0..=MAX_UNITS / 2.0).contains(&units) {
        return Err(invalid(
            "dimensions must be finite, non-negative, and within packing limits",
        ));
    }
    // Float-to-integer conversion is bounded above and below before casting.
    Ok(if round_up {
        units.ceil()
    } else {
        units.floor()
    } as u32)
}

fn denser(candidate: &[SheetLayout2D], best: &[SheetLayout2D]) -> bool {
    candidate.len() < best.len()
        || (candidate.len() == best.len()
            && candidate
                .iter()
                .map(|page| page.used_area)
                .cmp(best.iter().map(|page| page.used_area))
                .is_gt())
}

fn pack(problem: TwoDProblem) -> Result<Vec<SheetLayout2D>, Error> {
    let mut best: Option<Vec<SheetLayout2D>> = None;
    for algorithm in [
        TwoDAlgorithm::MaxRectsBestShortSideFit,
        TwoDAlgorithm::MaxRects,
        TwoDAlgorithm::MaxRectsBestLongSideFit,
        TwoDAlgorithm::MaxRectsBottomLeft,
        TwoDAlgorithm::MaxRectsContactPoint,
    ] {
        let options = TwoDOptions {
            algorithm,
            seed: Some(0),
            ..Default::default()
        };
        // Keep whole-document candidates: filling one page greedily can otherwise
        // increase the page count for the remaining images.
        let global = solve_2d(problem.clone(), options.clone())?;
        if !global.unplaced.is_empty() {
            return Err(Error::IncompleteLayout);
        }
        let mut single_page = problem.clone();
        single_page.sheets[0].quantity = Some(1);
        let mut compact = Vec::new();
        loop {
            let result = solve_2d(single_page.clone(), options.clone())?;
            if result.layouts.is_empty() {
                return Err(Error::IncompleteLayout);
            }
            compact.extend(result.layouts);
            if result.unplaced.is_empty() {
                break;
            }
            single_page.demands = result.unplaced;
        }
        for mut candidate in [global.layouts, compact] {
            // Prefer fewer pages, then concentrate occupied area on earlier pages.
            candidate.sort_by_key(|page| std::cmp::Reverse(page.used_area));
            if best
                .as_ref()
                .is_none_or(|current| denser(&candidate, current))
            {
                best = Some(candidate);
            }
        }
    }
    best.ok_or(Error::IncompleteLayout)
}

/// Pack every requested copy across as many pages as necessary.
///
/// Sizes use integer micrometres internally, conservatively rounded to prevent
/// overlaps or clipping. Metadata retains the exact image aspect ratio.
/// Compares deterministic MaxRects strategies, minimizing page count first and
/// maximizing occupied area on earlier pages second. Optimality is not guaranteed.
///
/// # Errors
/// Rejects empty input, non-positive quantities/DPI/print sizes, invalid margins,
/// empty images, oversized items, and backend packing failures.
pub fn layout<I: GenericImageView + ?Sized>(
    items: &[ImageItem<'_, I>],
    options: &LayoutOptions,
) -> Result<DocumentLayout, Error> {
    if items.is_empty() {
        return Err(invalid("at least one image is required"));
    }
    if !options.dpi.is_finite() || options.dpi <= 0.0 {
        return Err(invalid("dpi must be finite and positive"));
    }
    units(options.page_size.width_mm, false)?;
    units(options.page_size.height_mm, false)?;
    units(options.margin_mm, true)?;
    let gap = units(options.spacing_mm, true)?;
    let available_w = units(options.page_size.width_mm - 2.0 * options.margin_mm, false)?;
    let available_h = units(options.page_size.height_mm - 2.0 * options.margin_mm, false)?;
    if available_w == 0 || available_h == 0 {
        return Err(invalid("margins leave no printable area"));
    }
    let mut demands = Vec::with_capacity(items.len());
    let mut sizes = Vec::with_capacity(items.len());
    for (index, item) in items.iter().enumerate() {
        let (pixels_w, pixels_h) = item.image.dimensions();
        if pixels_w == 0 || pixels_h == 0 || item.quantity == 0 {
            return Err(invalid("images and quantities must be non-zero"));
        }
        let width = item
            .width_mm
            .unwrap_or(f64::from(pixels_w) * 25.4 / options.dpi);
        let height = width * f64::from(pixels_h) / f64::from(pixels_w);
        if width <= 0.0 || height <= 0.0 {
            return Err(invalid("print dimensions must be positive"));
        }
        let w = units(width, true)?;
        let h = units(height, true)?;
        let fits = w <= available_w && h <= available_h;
        let rotated_fits = options.allow_rotation && h <= available_w && w <= available_h;
        if !fits && !rotated_fits {
            return Err(Error::ImageTooLarge {
                id: item.id.clone(),
                width_mm: width,
                height_mm: height,
            });
        }
        sizes.push((width, height));
        // Padding on the right/bottom guarantees spacing for arbitrary layouts.
        // Enlarge the bin by the same gap so no extra gap is needed at page edges.
        demands.push(RectDemand2D {
            name: index.to_string(),
            width: w + gap,
            height: h + gap,
            quantity: item.quantity,
            can_rotate: options.allow_rotation,
        });
    }
    let sheets = pack(TwoDProblem {
        sheets: vec![Sheet2D {
            name: "page".into(),
            width: available_w + gap,
            height: available_h + gap,
            cost: 1.0,
            quantity: None,
            kerf: 0,
            edge_kerf_relief: false,
        }],
        demands,
    })?;
    let mut copies = vec![0; items.len()];
    let mut pages = Vec::with_capacity(sheets.len());
    for sheet in sheets {
        let mut placements = Vec::with_capacity(sheet.placements.len());
        for placed in sheet.placements {
            let index = placed
                .name
                .parse::<usize>()
                .map_err(|_| Error::IncompleteLayout)?;
            let item = items.get(index).ok_or(Error::IncompleteLayout)?;
            let (w, h) = sizes[index];
            let (width_mm, height_mm) = if placed.rotated { (h, w) } else { (w, h) };
            placements.push(Placement {
                source_index: index,
                source_id: item.id.clone(),
                copy_index: copies[index],
                x_mm: options.margin_mm + f64::from(placed.x) / UNITS_PER_MM,
                y_mm: options.margin_mm + f64::from(placed.y) / UNITS_PER_MM,
                width_mm,
                height_mm,
                rotated: placed.rotated,
            });
            copies[index] += 1;
        }
        pages.push(PageLayout {
            size: options.page_size,
            placements,
        });
    }
    if copies
        .iter()
        .zip(items)
        .any(|(count, item)| *count != item.quantity)
    {
        return Err(Error::IncompleteLayout);
    }
    Ok(DocumentLayout {
        pages,
        sources: items.iter().map(Source::from_item).collect(),
    })
}
