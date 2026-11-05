import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Badge } from "./index";

const meta = {
  title: "Base/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Small fibrous paper markers with a crimped painted binding. Status is written in dark ink; tone colors the binding.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => <Badge tone="emerald">Available</Badge>,
};
export const Tones: StoryObj = {
  render: () => (
    <div className="rf-row">
      <Badge tone="gold">Featured</Badge>
      <Badge tone="ruby">Danger</Badge>
      <Badge tone="emerald">Available</Badge>
      <Badge tone="sapphire">Information</Badge>
      <Badge>Neutral</Badge>
    </div>
  ),
};

export const BesideHeading: StoryObj = {
  render: () => (
    <h2
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
      }}
    >
      Workshop inventory <Badge tone="gold">Featured</Badge>
    </h2>
  ),
};

export const LongStatus: StoryObj = {
  render: () => (
    <div style={{ width: 160, maxWidth: "100%" }}>
      <Badge tone="sapphire">Awaiting inspection by the guild master</Badge>
    </div>
  ),
};
