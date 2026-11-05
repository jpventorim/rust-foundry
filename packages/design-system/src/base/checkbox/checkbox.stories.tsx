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
          "An inlaid check seated in a timber and forged-iron socket. Supports mixed and disabled states with a full 44px interaction target.",
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
export const DisabledChecked: StoryObj = {
  render: () => (
    <Checkbox label="Keep my notes private" disabled defaultChecked />
  ),
};
export const DisabledIndeterminate: StoryObj = {
  render: () => <Checkbox label="Some items selected" disabled indeterminate />,
};
export const WrappingLabel: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 240 }}>
      <Checkbox label="Keep my notes private and include all attached documents" />
    </div>
  ),
};
