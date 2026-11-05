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
