import type { Preview } from "storybook-react-rsbuild";
import "../styled-system/styles.css";
import "../stories/storybook.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: { expanded: true },
    options: { storySort: { order: ["Design system", "Base", "Library"] } },
    a11y: { test: "error" },
    backgrounds: { disable: true },
    docs: {
      description: {
        component:
          "Tactile tabletop components. All interactive examples support keyboard navigation and respect reduced motion.",
      },
    },
  },
  decorators: [
    (Story, context) => (
      <main className="rf-theme rf-story">
        {!context.title.startsWith("Design system/") && (
          <header className="rf-story-header">
            <p className="rf-eyebrow">Base component / {context.name}</p>
            <h1 className="rf-title">{context.title.replace("Base/", "")}</h1>
          </header>
        )}
        <Story />
      </main>
    ),
  ],
};

export default preview;
