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
          "A sliding iron bolt on a wood mounting block for an immediately applied on/off setting. The bolt position and underlined engraving show its state.",
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
export const DisabledOn: StoryObj = {
  render: () => <Switch label="Enable ambient sound" disabled defaultChecked />,
};
