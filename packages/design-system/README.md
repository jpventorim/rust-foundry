# @rust-foundry/ui

An internal React design-system package. Start with [design.md](./design.md) for
the living visual direction and open questions. This iteration contains 19 base
components; higher-level Library components are intentionally deferred.

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
import { Button, TextField } from "@rust-foundry/ui";
import "@rust-foundry/ui/styles.css";

export function Example() {
  return (
    <div className="rf-theme">
      <TextField label="Name" />
      <Button>Save changes</Button>
    </div>
  );
}
```

Build with `bun run build:ui` before resolving its exports in a consuming app.
Panda generates the stylesheet; consumers do not need Panda at runtime. React,
React DOM, Base UI, and Lucide remain external dependencies rather than copies
embedded in the library bundle. The package is private until a release is approved.

Each `src/base/<component>/` folder has `index.tsx`, `styles.ts`, a `.stories.tsx`,
and a `.test.ts` file. Base UI primitives keep their behavior and state props;
the wrappers add theme styles and required labels. `Textarea`, `Panel`, `Badge`,
and `Alert` use semantic HTML because Base UI does not supply those primitives.

Rstest launches Chromium against the built Storybook. Tests run axe with its
default rules on every story, and verify keyboard controls, focus trapping and
restoration, open overlays, reduced motion, and mobile overflow. Automated tests
are a baseline; screen-reader and product-context reviews remain necessary.
