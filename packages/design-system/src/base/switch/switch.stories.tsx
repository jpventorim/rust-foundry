import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Switch } from "./index";

const meta = {
  title: "Base/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A sliding brass latch for an immediately applied on/off setting.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => <Switch label="Enable ambient sound" />,
};
export const On: StoryObj = {
  render: () => <Switch label="Enable ambient sound" defaultChecked />,
};
export const Disabled: StoryObj = {
  render: () => <Switch label="Enable ambient sound" disabled />,
};
