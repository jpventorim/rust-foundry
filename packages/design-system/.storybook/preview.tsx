import type { Preview } from "storybook-react-rsbuild";
import { ThemeProvider } from "../src/theme/provider";
import "../styled-system/styles.css";
import "../stories/storybook.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Material theme",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "light" },
  parameters: {
    layout: "fullscreen",
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
      <ThemeProvider
        theme={context.globals.theme === "dark" ? "dark" : "light"}
        className="rf-workbench"
      >
        <main className="rf-story">
          {!context.title.startsWith("Design system/") && (
            <header className="rf-story-header">
              <p className="rf-eyebrow">Base component / {context.name}</p>
              <h1 className="rf-title">{context.title.replace("Base/", "")}</h1>
            </header>
          )}
          <Story />
        </main>
      </ThemeProvider>
    ),
  ],
};

export default preview;
