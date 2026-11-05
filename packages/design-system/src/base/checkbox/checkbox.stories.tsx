import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Checkbox } from "./index";

const meta = {
  title: "Base/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A square seal for independent selections. Supports mixed and disabled states.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => <Checkbox label="Keep my notes private" />,
};
export const Checked: StoryObj = {
  render: () => <Checkbox label="Keep my notes private" defaultChecked />,
};
export const Indeterminate: StoryObj = {
  render: () => <Checkbox label="Some items selected" indeterminate />,
};
export const Disabled: StoryObj = {
  render: () => <Checkbox label="Keep my notes private" disabled />,
};
