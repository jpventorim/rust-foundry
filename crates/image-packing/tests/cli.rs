#![cfg(feature = "cli")]

use image::{Rgb, RgbImage};
use std::process::Command;

#[test]
fn writes_a_multi_page_pdf_from_independent_quantities() {
    let dir = tempfile::tempdir().unwrap();
    let first = dir.path().join("first image.png");
    let second = dir.path().join("second.jpg");
    let output = dir.path().join("layout.pdf");
    RgbImage::from_pixel(190, 277, Rgb([220, 20, 30]))
        .save(&first)
        .unwrap();
    RgbImage::from_pixel(190, 277, Rgb([20, 180, 40]))
        .save(&second)
        .unwrap();
    let result = Command::new(env!("CARGO_BIN_EXE_image-packing"))
        .arg("--item")
        .arg(&first)
        .arg("2")
        .arg("--item")
        .arg(&second)
        .arg("1")
        .args(["--width-mm", "190", "--output"])
        .arg(&output)
        .output()
        .unwrap();
    assert!(
        result.status.success(),
        "{}",
        String::from_utf8_lossy(&result.stderr)
    );
    let pdf = lopdf::Document::load(&output).unwrap();
    assert_eq!(pdf.get_pages().len(), 3);
}

#[test]
fn invalid_input_fails_without_creating_a_pdf() {
    let dir = tempfile::tempdir().unwrap();
    let output = dir.path().join("layout.pdf");
    for args in [
        vec!["--item", "missing.png", "0"],
        vec!["--item", "missing.png", "abc"],
        vec!["--item", "missing.png", "1"],
        vec!["--item", "missing.png"],
    ] {
        let result = Command::new(env!("CARGO_BIN_EXE_image-packing"))
            .args(args)
            .arg("--output")
            .arg(&output)
            .output()
            .unwrap();
        assert!(!result.status.success());
        assert!(!output.exists());
        assert!(!result.stderr.is_empty());
    }
}

#[test]
fn border_is_added_before_packing_and_export() {
    let dir = tempfile::tempdir().unwrap();
    let input = dir.path().join("image.png");
    let output = dir.path().join("bordered.pdf");
    RgbImage::from_pixel(10, 20, Rgb([255, 80, 30]))
        .save(&input)
        .unwrap();
    let result = Command::new(env!("CARGO_BIN_EXE_image-packing"))
        .arg("--item")
        .arg(&input)
        .arg("1")
        .arg("--output")
        .arg(&output)
        .output()
        .unwrap();
    assert!(
        result.status.success(),
        "{}",
        String::from_utf8_lossy(&result.stderr)
    );
    let pdf = lopdf::Document::load(&output).unwrap();
    assert!(
        pdf.objects
            .values()
            .filter_map(|o| o.as_stream().ok())
            .any(
                |s| s.dict.get(b"Width").and_then(|o| o.as_i64()).ok() == Some(16)
                    && s.dict.get(b"Height").and_then(|o| o.as_i64()).ok() == Some(26)
            )
    );
    let page_id = *pdf.get_pages().values().next().unwrap();
    let operations = lopdf::content::Content::decode(&pdf.get_page_content(page_id).unwrap())
        .unwrap()
        .operations;
    let matrix = operations.iter().find(|op| op.operator == "cm").unwrap();
    // The outer 16 x 26 pixels, including the border, determine the print size.
    let values: Vec<_> = matrix
        .operands
        .iter()
        .map(|v| v.as_float().unwrap())
        .collect();
    assert!((values[0].hypot(values[1]) - 16.0 * 72.0 / 300.0).abs() < 0.001);
    assert!((values[2].hypot(values[3]) - 26.0 * 72.0 / 300.0).abs() < 0.001);
}

#[test]
fn rotation_is_always_enabled_without_a_flag() {
    let dir = tempfile::tempdir().unwrap();
    let input = dir.path().join("wide.png");
    let output = dir.path().join("rotated.pdf");
    RgbImage::new(250, 100).save(&input).unwrap();
    let result = Command::new(env!("CARGO_BIN_EXE_image-packing"))
        .arg("--item")
        .arg(&input)
        .arg("1")
        .args(["--width-mm", "250", "--output"])
        .arg(&output)
        .output()
        .unwrap();
    assert!(
        result.status.success(),
        "{}",
        String::from_utf8_lossy(&result.stderr)
    );
    assert_eq!(lopdf::Document::load(output).unwrap().get_pages().len(), 1);
}
