# Foundry UI — design direction

Status: second iteration. A living design brief, not a finished brand.

## The table, not the dashboard

Build objects assembled on a medieval writing table: sawn wood, fibrous paper,
stitched hide, wax, and coarse forged iron. A control needs a plausible material,
construction, and moving part. Texture and cast shadows explain that object.

This package contains **base components only**. Higher-level Library components
will follow actual requirements. Do not invent RPG product features.

## Feedback defining this pass

- Retire the muddy brown “old brass” primary color. Bright candle gold is an
  accent; saturated jewel colors provide painted actions and status seals.
- Replace soft, inflated cards with layered, framed material objects.
- Wood has visible grain and cut edges. Paper has fibers and imperfect edges.
  Iron is dark, pitted, irregular, and matte, never polished chrome.
- Switches are mechanical latches, alerts are posted notices, accordions unfold
  from bindings, and tabs are tangible ledger markers held in a rail.
- Every component must participate in this language, not just the showcase.
- Showcase copy names the design system, its material inspiration, and component
  categories directly. No invented slogans, volume labels, or promotional subtitles.

## Material contract

**Wood:** directional grain, visible cut edges, firm corners. Useful for frames,
rails, bases, and moving pieces. Avoid orange plastic finishes and large glowing
gradients. Grain must never obscure text.

**Iron:** charcoal/blue-gray with fine pits, scratches, and narrow edge highlights.
Use it for straps, keepers, brackets, and frames. Fasteners must serve construction.
Avoid chrome and decorative rivet spam.

**Paper:** warm, fibrous, readable, with offset layers, fold marks, or slight edge
irregularity. No pillow-like inner glow or softly raised slab.

**Leather:** dark grained hide, a cut edge, restrained stitching, and ivory ink.
Useful for bindings and tabs. Do not mistake a dark flat rectangle for leather.

**Wax and paint:** ruby, emerald, sapphire, and small gold accents give vibrancy.
Write status meaning as well as coloring it. Gold is never a brown blanket over
all the controls.

Shared deterministic vector textures live in `src/theme/materials.ts`. Panda
exposes `--rf-wood-texture`, `--rf-iron-texture`, `--rf-paper-texture`, and
`--rf-gold-texture`, plus the corresponding grain layers. No downloads or runtime
image effects are needed. Component styles remain in their own folders.

## Palette

| Token         | Value     | Role                                        |
| ------------- | --------- | ------------------------------------------- |
| ink           | `#30271e` | Body text on paper                          |
| muted         | `#665541` | Secondary text on paper                     |
| paper         | `#f3e8cf` | Main writing surface                        |
| paperLight    | `#fff8e8` | Lighter paper and inputs                    |
| border        | `#b9a27c` | Paper and cut-edge detail                   |
| gold          | `#e3b958` | Candle-gold accents, with dark lettering    |
| ruby          | `#912e38` | Red paint, destructive actions, error seals |
| emerald       | `#236044` | Green paint, positive states, confirmation  |
| sapphire      | `#2a537e` | Blue paint, information, cool emphasis      |
| focus         | `#204f91` | Focus against pale surfaces                 |
| iron material | `#3b4548` | Coarse iron, ivory lettering                |
| wood material | `#593b2b` | Timber frames, ivory lettering              |

Panda owns these tokens in `panda.config.ts`. Tones are `gold`, `ruby`, `emerald`,
`sapphire`, and `neutral`. The unpublished package's old `brass` tone is retired.
Each tone supplies `--rf-on-accent`. Gold fills need dark text. Small gold text
on pale paper fails readability; use dark ink instead. Disabled labels stay legible.

## Physical vocabulary

| Component  | Construction direction                                   |
| ---------- | -------------------------------------------------------- |
| Button     | Painted wooden/iron action plate with a mechanical press |
| Badge      | Cloth, paper, or wax marker with a written status        |
| Panel      | Timber-framed writing surface or bound hide              |
| Separator  | A physical rule, seam, or forged divider                 |
| Avatar     | Portrait/initials medallion in a coarse frame            |
| Alert      | Posted paper notice with fasteners and a status seal     |
| TextField  | Writable paper inset with a definite frame               |
| Textarea   | Writing tablet or ruled paper inset                      |
| Checkbox   | A peg, seal, or iron check in a framed socket            |
| Switch     | Sliding iron bolt with keepers, grip, and end positions  |
| RadioGroup | Mutually exclusive pegs or stamped circular selections   |
| Select     | Framed selection label with a paper list beneath         |
| Slider     | Carriage traveling along a graduated mechanical rail     |
| Tabs       | Ledger labels in a binding or coarse iron rail           |
| Accordion  | Sections unfolding from physical rails or hinged covers  |
| Dialog     | Opened folio or framed sheet above the table             |
| Popover    | Small attached field note with a physical attachment     |
| Tooltip    | Readable label with a restrained material edge           |
| Progress   | Painted fill traveling through a constructed channel     |

## Typography and layout

Georgia is for short headings; system sans-serif is for controls and dense copy.
No blackletter, faux runes, or distressed body text. Body text is 15px with a 1.6
line height. Aim for 44px targets and an 8px spacing rhythm with 4px subdivisions.
Physical detail must not clip focus, cover labels, or cause mobile page overflow.

## Motion

Move parts according to construction: bolts travel through keepers, buttons press
into backing, folded paper opens below its binding, carriages follow rails. Avoid
floating, wobbling, bouncing, and unexplained scale transforms. Most motion takes
140–240ms; progress may take 400ms. Only indeterminate work may loop.

Reduced motion removes animation and transform feedback while keeping focus and
state obvious. Interaction must never wait for an animation to finish.

## Accessibility contract

- Preserve Base UI behavior and semantics. Never replace controls with clickable
  divs. Texture must not hide focus, errors, or disabled state.
- Persistent labels and linked help/errors are required. Decorative fasteners and
  icons stay hidden from assistive technology. Placeholders are not labels.
- Dialogs trap focus, close with Escape, and restore it. Popovers and tooltips work
  without a mouse; essential information is never tooltip-only.
- Status meaning is written as well as colored. Maintain WCAG AA text contrast,
  readable disabled labels, practical targets, and explicit focus rings.
- Audit every story with axe, open overlays, keyboard interaction, reduced motion,
  narrow layouts, and forced colors. Later product and screen-reader review is
  still needed; automated checks cannot certify accessibility.

## Iteration method

One agent owns each base component for three rounds: (1) physical form and
construction, (2) critique and refinement of materials, mechanics, states, and
accessibility, and (3) final details and targeted verification. Shared material
integration, visual review, and browser verification happen centrally.
`design-review.md` records decisions and findings.

Storybook retains **Base** and **Design system / All components**. The desktop app
stays an empty shell. No new product components are in scope.

## Still open

1. What balance of wood, paper, and iron works in dense everyday tools?
2. Which jewel color should dominate primary actions?
3. Is leather a core material or occasional binding detail?
4. Is a full dark material theme needed?
5. Which additional base primitives do real workflows require next?
6. What name, symbol, and voice should become the final brand?
