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
          "Raised enamel actions with a brass edge. Text always names the action.",
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
      <div className="rf-row">
        <Button>Brass</Button>
        <Button tone="ruby">Ruby</Button>
        <Button tone="emerald">Emerald</Button>
        <Button tone="sapphire">Sapphire</Button>
      </div>
      <div className="rf-row">
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button size="sm">Compact</Button>
      </div>
    </div>
  ),
};
export const Disabled: StoryObj = {
  render: () => <Button disabled>Unavailable</Button>,
};
