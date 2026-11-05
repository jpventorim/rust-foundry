use image::{DynamicImage, Rgb, RgbImage, Rgba, RgbaImage};
use image_packing::{Error, ImageItem, LayoutOptions, PageSize, compose, layout, render_pdf};

#[test]
fn zero_spacing_allows_images_to_touch_and_can_be_overridden() {
    let image = RgbImage::new(105, 297);
    let items = [ImageItem::new("half-page", &image, 2).with_width_mm(105.0)];
    let result = layout(&items, &LayoutOptions::default()).unwrap();
    assert_eq!(result.pages().len(), 1);
    let mut placements = result.pages()[0].placements.iter().collect::<Vec<_>>();
    placements.sort_by(|a, b| a.x_mm.total_cmp(&b.x_mm));
    assert!((placements[0].x_mm + placements[0].width_mm - placements[1].x_mm).abs() < 1e-8);
    let spaced = layout(
        &items,
        &LayoutOptions {
            spacing_mm: 1.0,
            ..Default::default()
        },
    )
    .unwrap();
    assert_eq!(spaced.pages().len(), 2);
}

#[test]
fn small_copies_fill_earlier_pages_without_increasing_page_count() {
    // Dimensions of the user's two PNGs, including the validation borders.
    let small = RgbaImage::new(242, 360);
    let big = RgbaImage::new(1187, 1778);
    let items = [
        ImageItem::new("small", &small, 40),
        ImageItem::new("big", &big, 10),
    ];
    let options = LayoutOptions {
        allow_rotation: true,
        margin_mm: 10.0,
        spacing_mm: 2.0,
        ..Default::default()
    };
    let result = layout(&items, &options).unwrap();
    // Three large rectangles cannot share a page, even with rotation: their
    // minimum widths preclude side-by-side placement and minimum heights total >277 mm.
    assert_eq!(result.pages().len(), 5);
    assert_eq!(result, layout(&items, &options).unwrap());
    for page in result.pages() {
        for (index, p) in page.placements.iter().enumerate() {
            assert!(p.x_mm >= 10.0 && p.y_mm >= 10.0);
            assert!(p.x_mm + p.width_mm <= 200.0 + 1e-8);
            assert!(p.y_mm + p.height_mm <= 287.0 + 1e-8);
            for q in &page.placements[index + 1..] {
                assert!(
                    p.x_mm + p.width_mm + 2.0 <= q.x_mm + 1e-8
                        || q.x_mm + q.width_mm + 2.0 <= p.x_mm + 1e-8
                        || p.y_mm + p.height_mm + 2.0 <= q.y_mm + 1e-8
                        || q.y_mm + q.height_mm + 2.0 <= p.y_mm + 1e-8
                );
            }
        }
    }
    let small_counts: Vec<_> = result
        .pages()
        .iter()
        .map(|p| p.placements.iter().filter(|p| p.source_index == 0).count())
        .collect();
    assert_eq!(small_counts.iter().sum::<usize>(), 40);
    assert!(
        small_counts[0] >= 20,
        "earlier pages should fill before later pages: {small_counts:?}"
    );
    assert!(
        small_counts[2..].iter().all(|count| *count == 0),
        "all small copies should fit on the first two pages: {small_counts:?}"
    );
    assert_eq!(
        result
            .pages()
            .iter()
            .flat_map(|p| &p.placements)
            .filter(|p| p.source_index == 1)
            .count(),
        10
    );
}

#[test]
fn independent_quantities_span_pages_without_overlap_or_missing_copies() {
    let a = RgbImage::new(100, 100);
    let b = RgbImage::new(40, 60);
    // Repeated IDs must not merge demands.
    let items = [
        ImageItem::new("same", &a, 7).with_width_mm(90.0),
        ImageItem::new("same", &b, 5).with_width_mm(40.0),
    ];
    let options = LayoutOptions {
        margin_mm: 10.0,
        spacing_mm: 2.0,
        ..Default::default()
    };
    let result = layout(&items, &options).unwrap();
    assert!(result.pages().len() > 1);
    assert_eq!(result, layout(&items, &options).unwrap());
    let mut copies = [Vec::new(), Vec::new()];
    for page in result.pages() {
        assert_eq!(page.size, PageSize::A4);
        for (index, p) in page.placements.iter().enumerate() {
            copies[p.source_index].push(p.copy_index);
            assert!(p.x_mm >= 10.0 && p.y_mm >= 10.0);
            assert!(p.x_mm + p.width_mm <= 200.0 + 1e-8);
            assert!(p.y_mm + p.height_mm <= 287.0 + 1e-8);
            for q in &page.placements[index + 1..] {
                let separated = p.x_mm + p.width_mm + 2.0 <= q.x_mm + 1e-8
                    || q.x_mm + q.width_mm + 2.0 <= p.x_mm + 1e-8
                    || p.y_mm + p.height_mm + 2.0 <= q.y_mm + 1e-8
                    || q.y_mm + q.height_mm + 2.0 <= p.y_mm + 1e-8;
                assert!(separated, "placements must retain the configured gap");
            }
        }
    }
    for (indices, quantity) in copies.iter_mut().zip([7, 5]) {
        indices.sort_unstable();
        assert_eq!(*indices, (0..quantity).collect::<Vec<_>>());
    }
}

#[test]
fn dpi_sets_print_size_and_explicit_width_overrides_it() {
    let image = DynamicImage::new_rgb8(600, 300);
    let options = LayoutOptions::default();
    let a = layout(&[ImageItem::new("a", &image, 1)], &options).unwrap();
    let p = &a.pages()[0].placements[0];
    assert!((p.width_mm - 50.8).abs() < 1e-8);
    assert!((p.height_mm - 25.4).abs() < 1e-8);
    let b = layout(
        &[ImageItem::new("b", &image, 1).with_width_mm(80.0)],
        &options,
    )
    .unwrap();
    assert!((b.pages()[0].placements[0].height_mm - 40.0).abs() < 1e-8);
}

#[test]
fn rotation_allows_an_otherwise_oversized_image() {
    let image = RgbaImage::from_pixel(250, 100, Rgba([200, 40, 80, 128]));
    let items = [ImageItem::new("wide", &image, 1).with_width_mm(250.0)];
    assert!(matches!(
        layout(
            &items,
            &LayoutOptions {
                allow_rotation: false,
                ..Default::default()
            }
        ),
        Err(Error::ImageTooLarge { .. })
    ));
    let output = compose(&items, &LayoutOptions::default()).unwrap();
    let p = &output.layout.pages()[0].placements[0];
    assert!(p.rotated);
    assert!((p.width_mm - 100.0).abs() < 1e-8);
    assert!((p.height_mm - 250.0).abs() < 1e-8);
    let pdf = lopdf::Document::load_mem(&output.pdf).unwrap();
    assert!(
        pdf.objects
            .values()
            .filter_map(|o| o.as_stream().ok())
            .any(|s| s.dict.has(b"SMask")),
        "alpha must survive PDF export"
    );
}

#[test]
fn exact_printable_area_fits_without_trailing_spacing() {
    let image = RgbImage::new(190, 277);
    let options = LayoutOptions {
        margin_mm: 10.0,
        ..Default::default()
    };
    let result = layout(
        &[ImageItem::new("full", &image, 2).with_width_mm(190.0)],
        &options,
    )
    .unwrap();
    assert_eq!(result.pages().len(), 2);
    assert!(result.pages().iter().all(|p| p.placements.len() == 1));
}

#[test]
fn pdf_has_all_pages_physical_a4_size_and_reuses_images() {
    let image = RgbImage::from_pixel(190, 277, Rgb([255, 80, 0]));
    let output = compose(
        &[ImageItem::new("full", &image, 3).with_width_mm(190.0)],
        &LayoutOptions::default(),
    )
    .unwrap();
    let pdf = lopdf::Document::load_mem(&output.pdf).unwrap();
    assert_eq!(pdf.get_pages().len(), 3);
    for (_, id) in pdf.get_pages() {
        let page = pdf.get_dictionary(id).unwrap();
        let media = page.get(b"MediaBox").unwrap().as_array().unwrap();
        assert!((media[2].as_float().unwrap() - 595.2756).abs() < 0.01);
        assert!((media[3].as_float().unwrap() - 841.8898).abs() < 0.01);
    }
    // Krilla may create a separate alpha resource; only one color image exists.
    let rgb_images = pdf
        .objects
        .values()
        .filter_map(|o| o.as_stream().ok())
        .filter(|s| s.dict.get(b"Subtype").and_then(|o| o.as_name()).ok() == Some(b"Image"))
        .filter(|s| s.dict.get(b"Width").and_then(|o| o.as_i64()).ok() == Some(190))
        .count();
    assert!(
        (1..=2).contains(&rgb_images),
        "copies should reuse image resources"
    );
}

#[test]
fn rejects_invalid_inputs_and_layout_mismatches() {
    let image = RgbImage::new(10, 10);
    let items = [ImageItem::new("a", &image, 1)];
    assert!(layout::<RgbImage>(&[], &LayoutOptions::default()).is_err());
    assert!(layout(&[ImageItem::new("a", &image, 0)], &LayoutOptions::default()).is_err());
    assert!(
        layout(
            &[ImageItem::new("a", &RgbImage::new(0, 0), 1)],
            &LayoutOptions::default()
        )
        .is_err()
    );
    for value in [0.0, -1.0, f64::NAN, f64::INFINITY] {
        assert!(
            layout(
                &items,
                &LayoutOptions {
                    dpi: value,
                    ..Default::default()
                }
            )
            .is_err()
        );
        assert!(
            layout(
                &[ImageItem::new("a", &image, 1).with_width_mm(value)],
                &LayoutOptions::default()
            )
            .is_err()
        );
    }
    for value in [-1.0, f64::NAN, f64::INFINITY, 1e20] {
        assert!(
            layout(
                &items,
                &LayoutOptions {
                    spacing_mm: value,
                    ..Default::default()
                }
            )
            .is_err()
        );
    }
    assert!(
        layout(
            &items,
            &LayoutOptions {
                margin_mm: 110.0,
                ..Default::default()
            }
        )
        .is_err()
    );
    let result = layout(&items, &LayoutOptions::default()).unwrap();
    assert!(matches!(
        render_pdf(&[ImageItem::new("changed", &image, 1)], &result),
        Err(Error::LayoutMismatch)
    ));
}

#[test]
fn landscape_and_custom_pages_are_supported() {
    let image = RgbImage::new(10, 10);
    for size in [
        PageSize::A4.rotated(),
        PageSize {
            width_mm: 100.0,
            height_mm: 100.0,
        },
    ] {
        let result = layout(
            &[ImageItem::new("a", &image, 1)],
            &LayoutOptions {
                page_size: size,
                ..Default::default()
            },
        )
        .unwrap();
        assert_eq!(result.pages()[0].size, size);
    }
}

#[test]
fn images_with_identical_bytes_but_different_dimensions_are_distinct() {
    let pixels: Vec<u8> = (0..8).flat_map(|i| [i * 30, 60, 120, 255]).collect();
    let wide = RgbaImage::from_raw(4, 2, pixels.clone()).unwrap();
    let tall = RgbaImage::from_raw(2, 4, pixels).unwrap();
    let output = compose(
        &[
            ImageItem::new("wide", &wide, 1),
            ImageItem::new("tall", &tall, 1),
        ],
        &LayoutOptions::default(),
    )
    .unwrap();
    let pdf = lopdf::Document::load_mem(&output.pdf).unwrap();
    let dimensions: Vec<_> = pdf
        .objects
        .values()
        .filter_map(|o| o.as_stream().ok())
        .filter(|s| s.dict.get(b"Subtype").and_then(|o| o.as_name()).ok() == Some(b"Image"))
        .map(|s| {
            (
                s.dict.get(b"Width").unwrap().as_i64().unwrap(),
                s.dict.get(b"Height").unwrap().as_i64().unwrap(),
            )
        })
        .collect();
    assert!(
        dimensions.contains(&(4, 2)) && dimensions.contains(&(2, 4)),
        "different image shapes must remain distinct: {dimensions:?}"
    );
}
