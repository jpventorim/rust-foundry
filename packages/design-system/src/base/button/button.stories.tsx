import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Button } from "./index";

const meta = {
  title: "Base/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Wood-grained painted action plates press into a firm iron backing. Ruby is the primary action; gold plates carry dark lettering.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => <Button>Begin adventure</Button>,
};
export const Variants: StoryObj = {
  render: () => (
    <div className="rf-stack">
      {(["solid", "outline", "ghost"] as const).map((variant) => (
        <div className="rf-row" key={variant}>
          {(["ruby", "emerald", "sapphire", "gold", "neutral"] as const).map(
            (tone) => (
              <Button key={tone} tone={tone} variant={variant}>
                {tone} {variant}
              </Button>
            ),
          )}
        </div>
      ))}
      <div className="rf-row">
        <Button size="sm">Compact action</Button>
        <Button tone="gold" size="sm">
          Gold compact action
        </Button>
      </div>
    </div>
  ),
};
export const Disabled: StoryObj = {
  render: () => (
    <div className="rf-row">
      <Button disabled>Unavailable</Button>
      <Button variant="outline" disabled>
        Outline unavailable
      </Button>
      <Button variant="ghost" disabled>
        Ghost unavailable
      </Button>
    </div>
  ),
};
export const Narrow: StoryObj = {
  render: () => (
    <div style={{ width: "190px", maxWidth: "100%" }}>
      <Button>Confirm and continue to the next chapter</Button>
    </div>
  ),
};
