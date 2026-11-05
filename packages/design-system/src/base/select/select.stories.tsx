import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Select } from "./index";

const meta = {
  title: "Base/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A keyboard-operable listbox with selected, highlighted, and disabled options.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Select
      label="Language"
      defaultValue="common"
      items={[
        { value: "common", label: "Common" },
        { value: "elvish", label: "Elvish" },
        { value: "dwarvish", label: "Dwarvish" },
      ]}
    />
  ),
};
export const Placeholder: StoryObj = {
  render: () => (
    <Select
      label="Language"
      items={[
        { value: "common", label: "Common" },
        { value: "elvish", label: "Elvish" },
      ]}
    />
  ),
};
export const Disabled: StoryObj = {
  render: () => (
    <Select
      label="Language"
      defaultValue="common"
      disabled
      items={[{ value: "common", label: "Common" }]}
    />
  ),
};
