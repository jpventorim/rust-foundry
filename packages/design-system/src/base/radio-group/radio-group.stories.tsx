import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { RadioGroup } from "./index";

const meta = {
  title: "Base/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Mutually exclusive choices with arrow-key navigation.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => (
    <RadioGroup
      label="Visibility"
      defaultValue="party"
      items={[
        { value: "private", label: "Private" },
        { value: "party", label: "Party" },
        { value: "public", label: "Public" },
      ]}
    />
  ),
};
export const Disabled: StoryObj = {
  render: () => (
    <RadioGroup
      label="Visibility"
      disabled
      defaultValue="private"
      items={[
        { value: "private", label: "Private" },
        { value: "public", label: "Public" },
      ]}
    />
  ),
};
