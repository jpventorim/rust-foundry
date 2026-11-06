# Rust Foundry

Pack one or more images, each with an independent quantity, into a multi-page
PDF using `image`, `bin-packing`, and `krilla`. The `image-packing` package contains
the library and an optional `clap` CLI for development and validation. Library
users do not compile CLI dependencies unless they enable the `cli` feature.
The package is independent of the existing Tauri + React application.

## CLI

Requires Rust 1.99 or newer.

```sh
cargo run -p image-packing --features cli -- \
  --item photo.png 4 \
  --item logo.jpg 2 \
  --output layout.pdf
```

Repeat `--item IMAGE QUANTITY` for each input. Quote paths containing spaces.
PNG and JPEG decoding are enabled. The result is one PDF with enough A4 pages
for every copy.

```sh
cargo run -p image-packing --features cli -- \
  --item photo.png 12 \
  --output layout.pdf \
  --dpi 300 \
  --orientation landscape \
  --margin-mm 10 \
  --spacing-mm 2 \
  --width-mm 50
```

Defaults: A4 portrait, 300 DPI, zero paper margins, zero gaps between images. The CLI always allows
90-degree image rotation and adds a black border before packing (3 pixels by default).
Use `--margin-mm N` to change the margin on all four edges, for example
`--margin-mm 5`. Zero margins allow image borders to align with the PDF page edges.
Printing to those edges requires a printer and paper mode that support borderless printing.
Image borders can touch for cutting after printing. Use `--spacing-mm N` to add
a gap when needed. Borders remain part of each image; they do not overlap.
`--width-mm` sets the print width of **every** input, preserving aspect ratios
and overriding DPI sizing. The library also supports individual print widths.
Run with `--help` for all options. Errors exit unsuccessfully. Generation finishes
before writing the destination; an existing output file is overwritten on success.

The CLI adds an opaque black border outside each image before packing to
visualize image bounds during validation. Set `--border-px N` to change its
thickness (default `3`), or use `--border-px 0` for no border. With the default,
each image grows by 6 pixels in both dimensions; its original pixels and transparency stay
inside the border. At 300 DPI the border prints 0.254 mm thick. Packing includes
the border, and `--width-mm`, when supplied, sets the total bordered width.

## Library

Use `crates/image-packing` as a path dependency from another project.

```rust
use image_packing::{ImageItem, LayoutOptions, compose};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let photo = image::open("photo.png")?;
    let logo = image::open("logo.jpg")?;
    let items = [
        ImageItem::new("photo", &photo, 4).with_width_mm(60.0),
        ImageItem::new("logo", &logo, 2).with_width_mm(30.0),
    ];
    let output = compose(&items, &LayoutOptions::default())?;
    std::fs::write("layout.pdf", &output.pdf)?;
    for (index, page) in output.layout.pages().iter().enumerate() {
        println!("Page {}: {} images", index + 1, page.placements.len());
    }
    Ok(())
}
```

Inputs borrow `GenericImageView` values, including `ImageBuffer`, subimages, and
`DynamicImage`. A batch has one view type, with 8-bit pixel channels. Use
`DynamicImage` for mixed RGB/RGBA sources. Export normalizes to RGBA8, including
when a `DynamicImage` holds higher bit depths. ICC/profile preservation and print
color management are outside the current API.

Call `layout(&items, &options)` to inspect placements without exporting, then
`render_pdf(&items, &layout)` to obtain PDF bytes. Layouts are immutable. Export
checks source order, identifiers, pixel dimensions, quantities, and print widths;
pixel contents may change while reusing a layout.

`LayoutOptions` accepts custom page dimensions, A4 portrait, or
`PageSize::A4.rotated()` for landscape. Each placement records its source index
and identifier, zero-based copy index, top-left coordinates, physical dimensions,
and clockwise quarter-turn flag. The containing page gives its page index.
Duplicate source identifiers are supported.

## Physical sizing

PDF pages have physical dimensions, rather than a fixed pixel resolution. DPI
determines image size when no explicit print width is supplied:

`width_mm = pixel_width / dpi × 25.4`

A 600-pixel-wide image at 300 DPI prints 50.8 mm wide. A4 stays 210 × 297 mm at
any DPI. Export retains source pixel dimensions and transparency, shares image
resources for repeated copies, and never flattens entire pages to bitmaps.
Print at actual size / 100% to preserve physical dimensions.

Packing compares five deterministic MaxRects heuristics, each using whole-document
packing and packing one page at a time. Results are ranked by fewest pages first,
then by the most occupied space on earlier pages, so small images fill available
gaps instead of spreading across the document. Whole-document candidates are
retained because greedily filling a page can increase the total page count.
Integer micrometres are used internally: available space rounds down,
while image rectangles and gaps round up. Export retains exact aspect ratios.
Rounding adds less than 0.001 mm per dimension. The search does not guarantee
the minimum page count or preserve input order. Cropping, stretching, and
automatic shrinking are never performed.

Empty inputs, zero quantities, invalid configuration, and images too large for
an empty printable page return typed errors. Reduce the print width, change page
size/orientation, or allow rotation to accommodate an oversized image.

## Design system

`packages/design-system` is the `@rust-foundry/ui` Bun workspace package. It holds
19 base components, each in its own folder with implementation, Panda CSS styles,
Storybook stories, and Rstest browser tests. Higher-level Library components will
be added only after their requirements are defined.

The [design direction](packages/design-system/DESIGN.md) is a living guide to
materials, palette, typography, motion, and accessibility. The component catalog
has **Base** and **Design system / All components** sections.

```sh
bun run storybook       # Component catalog at http://localhost:6006
bun run build:storybook # Build the static catalog
bun run build:ui        # Build the ESM package, types, and generated Panda CSS
```

Before the first browser test, install Chromium:

```sh
cd packages/design-system
bun x playwright install chromium
```

The package [README](packages/design-system/README.md) covers consuming the package
and iterating on styles. This does not add the design system to the desktop shell.

## Development

The frontend is an empty, unstyled React shell with no starter branding or demo
commands. The desktop icons are transparent placeholders required by Tauri's
Windows build tooling. Replace them before distributing the app.

The frontend uses React, TypeScript 7, Rsbuild, Rstest, and Biome. Install Node.js
22.12 or newer and Bun, then run:

```sh
bun install --frozen-lockfile
bun run dev          # Frontend at http://localhost:1420
bun run typecheck    # App and tooling configuration
bun run lint         # Biome checks and Clippy for both Rust projects; warnings fail
bun run format       # Format frontend/configuration and both Rust projects
bun run format:check # Check formatting without writing
bun run check        # Lint, type checking, and frontend tests
bun run test         # Build Storybook; Rstest browser interactions and axe audits
bun run test:watch   # Rstest watch mode against the last built Storybook
bun run build       # Type checking and production output in dist/
bun run preview     # Serve the production build
bun run tauri dev   # Desktop app (requires Tauri platform prerequisites)
bun run tauri build # Package the desktop app
```

Rsbuild keeps port 1420 fixed for Tauri and uses `TAURI_DEV_HOST` for mobile
development connections and hot reload. It injects the frontend entry into
`index.html`; static files in `public/` are copied to `dist/`.
Rstest checks every design-system story with axe in light and dark themes and tests
keyboard interactions, themed overlays, theme switching, and responsive compositions.
[DESIGN.md](packages/design-system/DESIGN.md) defines
the shared material and theme rules. Biome uses the
recommended lint preset and respects Git ignores; vendored skills and generated
output are excluded.

Rust checks:

```sh
cargo test --workspace
cargo test --workspace --all-features
cargo fmt --all --check
cargo clippy --workspace --all-targets --all-features -- -D warnings
cargo clippy --manifest-path src-tauri/Cargo.toml --all-targets --all-features -- -D warnings
```

Tests cover quantities, pagination, sizing, spacing, rotation, transparency,
resource reuse, validation, and CLI file-to-file execution. The Tauri app in
`src-tauri` stays a separate Cargo project with its own lockfile; use the existing
Bun scripts for that app.

Rust coding guidance is vendored in `.agents/skills/rust-skills`, together with
its upstream license and reference rules.
Vercel's React best-practices skill is vendored in
`.agents/skills/react-best-practices` from
[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices).
