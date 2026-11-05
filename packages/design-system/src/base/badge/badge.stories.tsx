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
          "Quiet status markers. Meaning is written in text rather than color alone.",
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
      <Badge tone="brass">Featured</Badge>
      <Badge tone="ruby">Danger</Badge>
      <Badge tone="emerald">Available</Badge>
      <Badge tone="sapphire">Information</Badge>
      <Badge>Neutral</Badge>
    </div>
  ),
};
