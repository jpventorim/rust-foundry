# Foundry UI — design direction

Status: first iteration, open for revision. This document records the direction;
it is not a finished brand. Update it alongside visual changes and user feedback.

## Intent

Build the feeling of sitting at a real tabletop: a well-loved notebook, a brass
clasp, colored enamel, and a pen within reach. The interface should invite play
without competing with character names, rules, maps, and other dense content.

This iteration contains **base components only**. These are general composition
tools, mostly backed by Base UI. Do not invent RPG product features. Higher-level
Library components will be designed from actual product requirements.

## Material language

- **Parchment:** warm ivory, very subtle paper grain, softly lit edges. The main
  reading surface. Texture must never interfere with text.
- **Leather:** a secondary, optional surface with fine grain and inset stitching.
  Use sparingly. Pair it with ivory text rather than dark text.
- **Brass:** the default action material, small borders, thumb controls, and
  engraved separators. Slightly aged, not mirror-polished gold.
- **Enamel and sealing wax:** vibrant ruby, emerald, and sapphire accents. Small
  areas of saturated color feel richer than a screen full of loud colors.
- **Depth:** pressed inputs sit below the page; buttons sit above it. Shadows and
  highlights explain affordance. Avoid fake rivets everywhere or ornamental clutter.

## Palette

| Token      | Value     | Role                                        |
| ---------- | --------- | ------------------------------------------- |
| ink        | `#30271e` | Body text                                   |
| muted      | `#665541` | Secondary text                              |
| paper      | `#f3e8cf` | Main parchment                              |
| paperLight | `#fff8e8` | Input and overlay surfaces                  |
| border     | `#b9a27c` | Material edge; not the sole focus indicator |
| brass      | `#775014` | Primary actions and warm emphasis           |
| ruby       | `#912e38` | Destructive actions and errors              |
| emerald    | `#236044` | Positive states and confirmation            |
| sapphire   | `#2a537e` | Information and cool emphasis               |
| focus      | `#204f91` | Explicit keyboard focus ring                |

Panda CSS owns the palette in `panda.config.ts`. Colors are semantic choices, not
meaning by themselves. Always pair status colors with readable words or symbols.
Consumers import the generated stylesheet once and wrap their interface in
`rf-theme`; overlays apply that scope themselves because they render in portals.

## Typography and composition

Use Georgia for short headings: human, bookish, and available without a network
request. Use the system sans-serif stack for controls, descriptions, and long
content. Do not use blackletter, faux runes, or distressed body text. Small uppercase
labels belong to section markers and badges, not paragraphs.

Body text is 15px with a 1.6 line height. Controls aim for at least 44px target
height. Use an 8px spacing rhythm with smaller 4px steps for tightly related parts.
Keep corners modest: 4–8px for most surfaces, circles for identity marks. Let
space and hierarchy carry the layout before adding decoration.

## Motion

Motion should behave like small physical objects: an enamel button lifts on
hover and presses down on activation; a latch slides; a folded section unfolds;
a contextual sheet settles into place. Aim for 140–240ms transitions and a
slightly slower 400ms progress change. No ambient particle effects or continual
decorative loops. Indeterminate progress may move while work is happening.

Respect `prefers-reduced-motion`: remove animation and transform-based feedback,
keep focus and state differences visible, and make indeterminate progress static.
Do not make interaction depend on animation completing. Check forced-colors mode.

## Accessibility contract

- Base UI owns keyboard behavior and ARIA for interactive primitives. Preserve
  its semantics when styling and composing; never substitute a clickable div.
- Every input has a persistent label. Help and errors are linked to their input.
  A placeholder is an example, never the label.
- Use visible focus rings. Dialogs trap focus, close with Escape, and restore it.
  Popovers and tooltips must work without a mouse.
- Use meaningful text for buttons and statuses. Decorative icons are hidden from
  assistive technology. Tooltips provide extra context, never essential instructions.
- Maintain WCAG AA text contrast and a practical 44px target size. Check the
  rendered result with axe, including open overlays and narrow viewports.
- Axe cannot certify all accessibility. Manually review screen-reader output,
  zoom, high contrast, motion preferences, and labels in the eventual product.

## Package structure

`src/base/<component>/` holds one implementation, its Panda styles, stories, and
tests. Shared tokens and motion live in `src/theme/` and `panda.config.ts`.
`stories/all-components.stories.tsx` is the full visual specimen. Base UI does not
include Panel, Badge, Alert, or a standalone Textarea, so those use semantic HTML
as composition building blocks. They are still base components, not product features.

Storybook categories: **Design system** for the complete specimen, **Base** for
individual primitives. Reserve **Library** for approved compositions later.

## Questions for the next iteration

1. Is the material balance right: more parchment, more leather, or less texture?
2. Should brass or a cooler jewel color be the dominant action color?
3. How strong should the tabletop influence be in everyday forms and dense tools?
4. Do we need a dark material theme, or is the light reading surface sufficient?
5. Which additional base primitives do actual workflows require next?
6. What name, symbol, and voice should become the actual brand?

## Decisions so far

- Separate package; the desktop app stays an empty shell.
- Panda CSS, Base UI, TypeScript 7, Storybook with Rsbuild, and Rstest.
- Co-locate each component with its stories, tests, and material styles.
- No speculative character, quest, dice, inventory, or resource components.
- No remote fonts, stock art, or generated assets required to render the system.
