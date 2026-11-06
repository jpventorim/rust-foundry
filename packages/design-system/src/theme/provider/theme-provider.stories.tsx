import { useState } from "react";
import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { ReferenceForm } from "../../../stories/reference-form";
import { Button } from "../../base/button";
import { Dialog } from "../../base/dialog";
import { Panel } from "../../base/panel";
import { Popover } from "../../base/popover";
import { Tooltip } from "../../base/tooltip";
import type { Theme } from "./index";
import { ThemeProvider } from "./index";

function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <section className="rf-context-scene">
      <h1 className="rf-title">Theme switcher</h1>
      <p className="rf-muted">
        Material tones change without replacing the form or changing its
        dimensions.
      </p>
      <ThemeProvider
        theme={theme}
        className="rf-workbench rf-theme-sample rf-theme-switcher"
      >
        <div className="rf-stack">
          <Button
            onClick={() =>
              setTheme((previous) => (previous === "light" ? "dark" : "light"))
            }
          >
            Use {theme === "light" ? "dark" : "light"} theme
          </Button>
          <Panel>
            <ReferenceForm />
          </Panel>
        </div>
      </ThemeProvider>
    </section>
  );
}

function ThemeComparison({ overlays = false }: { overlays?: boolean }) {
  return (
    <section className="rf-context-scene">
      <h1 className="rf-title">
        {overlays ? "Overlay themes" : "Light and dark materials"}
      </h1>
      <p className="rf-muted">
        The construction stays consistent. Material tones change with the theme.
      </p>
      <div className="rf-theme-comparison">
        {(["light", "dark"] as const).map((theme) => (
          <ThemeProvider
            key={theme}
            theme={theme}
            className="rf-workbench rf-theme-sample"
          >
            <section aria-label={`${theme} theme`}>
              <h2 className="rf-title">
                {theme === "light" ? "Light theme" : "Dark theme"}
              </h2>
              <Panel>
                {overlays ? (
                  <div className="rf-stack">
                    <Dialog
                      trigger={<Button>Open dialog</Button>}
                      title="Edit note"
                      description="Fields and overlays retain their originating theme."
                    >
                      <ReferenceForm />
                    </Dialog>
                    <Popover
                      trigger={<Button variant="outline">Open details</Button>}
                      title="Details"
                      description="This paper belongs to the same material theme."
                    />
                    <Tooltip content="Save changes">
                      <Button variant="ghost">Save changes</Button>
                    </Tooltip>
                  </div>
                ) : (
                  <ReferenceForm />
                )}
              </Panel>
            </section>
          </ThemeProvider>
        ))}
      </div>
    </section>
  );
}

export default {
  title: "Design system/Themes",
  parameters: { controls: { disable: true } },
} satisfies Meta;
export const Light: StoryObj = {
  globals: { theme: "light" },
  render: () => (
    <section className="rf-context-scene">
      <h1 className="rf-title">Light theme</h1>
      <p className="rf-muted">Pale timber, warm paper, and coarse iron.</p>
      <Panel>
        <ReferenceForm />
      </Panel>
    </section>
  ),
};
export const Dark: StoryObj = {
  globals: { theme: "dark" },
  render: () => (
    <section className="rf-context-scene">
      <h1 className="rf-title">Dark theme</h1>
      <p className="rf-muted">Dark timber, muted parchment, and coarse iron.</p>
      <Panel>
        <ReferenceForm />
      </Panel>
    </section>
  ),
};
export const SideBySide: StoryObj = { render: () => <ThemeComparison /> };
export const Portals: StoryObj = { render: () => <ThemeComparison overlays /> };
export const Switcher: StoryObj = { render: () => <ThemeSwitcher /> };
