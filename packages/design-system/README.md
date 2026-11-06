# @rust-foundry/ui

An internal React design-system package. Start with [DESIGN.md](./DESIGN.md) for
the living visual direction and open questions. This iteration contains 19 base
components; higher-level Library components are intentionally deferred.
The [second-pass review](./design-review.md) records the three rounds per component
and integrated validation, including the cohesion and light/dark theme pass.
The current palette uses `gold` in place of the initial
`brass` tone, and primary buttons default to `ruby`.

From the repository root:

```sh
bun install --frozen-lockfile
bun run storybook         # http://localhost:6006
bun run build:storybook   # Static component catalog
bun run build:ui          # ESM library, declarations, and generated Panda CSS
bun run test              # Build catalog; audit every story and test interactions
```

Install the test browser once with `bun x --cwd packages/design-system playwright
install chromium`. Run `bun run --cwd packages/design-system styles:watch` alongside
Storybook when changing Panda styles or tokens; component/story edits hot reload.

Use the built workspace package in React:

```tsx
import {
  Button,
  Panel,
  TextField,
  Textarea,
  ThemeProvider,
} from "@rust-foundry/ui";
import "@rust-foundry/ui/styles.css";

export function Example() {
  return (
    <ThemeProvider theme="light" className="rf-workbench">
      <Panel>
        <div className="rf-stack">
          <TextField label="Name" />
          <Textarea label="Notes" />
          <Button>Save changes</Button>
        </div>
      </Panel>
    </ThemeProvider>
  );
}
```

Build with `bun run build:ui` before resolving its exports in a consuming app.
Panda generates the stylesheet; consumers do not need Panda at runtime. React,
React DOM, Base UI, and Lucide remain external dependencies rather than copies
embedded in the library bundle. The package is private until a release is approved.

`ThemeProvider` accepts `light` or `dark`. Nested providers remain independent;
Select, Dialog, Popover, and Tooltip portals inherit their originating theme.
The provider supplies tokens; `rf-workbench` additionally paints the timber canvas
and fills at least the viewport height. Choose the theme in Storybook's toolbar.

TextField, Textarea, and Select accept `surface="auto"` (default), `"mounted"`, or
`"integrated"`. Auto fields integrate into a parchment Panel and retain their own
backing elsewhere. Use mounted for a separate insert or integrated when the
parent supplies the writing surface. Panel also supports `material="wood"` and
`material="leather"`. For a plain paper area, combine `rf-surface-paper` and
`rf-paper-surface`; `rf-surface-wood` supplies a timber area with ivory ink.

**Design system / Compositions** shows paper, timber, leather, nested panels,
validation, and compact forms. **Design system / Themes** shows each theme,
side-by-side materials, mixed-theme overlays, and an interactive switcher. These
forms are story fixtures, not higher-level library components.

Each `src/base/<component>/` folder has `index.tsx`, `styles.ts`, a `.stories.tsx`,
and a `.test.ts` file. Base UI primitives keep their behavior and state props;
the wrappers add theme styles and required labels. `Textarea`, `Panel`, `Badge`,
and `Alert` use semantic HTML because Base UI does not supply those primitives.

Rstest launches Chromium against the built Storybook. Tests run axe with its
default rules on every story in both themes, and verify keyboard controls, focus
trapping and restoration, open overlays, nested theme isolation, theme switching,
integrated fields, reduced motion, forced colors, and mobile overflow. Set
`RF_CAPTURE_STORIES=1` to capture each story under `test-results/stories/`.
Automated tests
are a baseline; screen-reader and product-context reviews remain necessary.
