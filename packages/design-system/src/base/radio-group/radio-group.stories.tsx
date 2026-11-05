import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { RadioGroup } from "./index";

const meta = {
  title: "Base/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A stamped gold peg seats in one iron-ringed wooden socket. Use arrow keys to move between available choices; labels also select their peg.",
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
        { value: "archived", label: "Archived (unavailable)", disabled: true },
        { value: "public", label: "Public" },
      ]}
    />
  ),
};
export const Disabled: StoryObj = {
  render: () => (
    <RadioGroup
      label="Visibility (locked)"
      disabled
      defaultValue="private"
      items={[
        { value: "private", label: "Private" },
        { value: "public", label: "Public" },
      ]}
    />
  ),
};
export const NarrowLabels: StoryObj = {
  render: () => (
    <div style={{ width: "240px", maxWidth: "100%" }}>
      <RadioGroup
        label="Who may read this record?"
        defaultValue="invited"
        items={[
          { value: "invited", label: "Only people explicitly invited to read" },
          {
            value: "everyone",
            label: "Everyone with access to this workspace",
          },
          {
            value: "unavailable",
            label: "Public access is currently unavailable",
            disabled: true,
          },
        ]}
      />
    </div>
  ),
};
