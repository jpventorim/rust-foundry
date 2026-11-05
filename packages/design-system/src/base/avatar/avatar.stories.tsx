import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Avatar } from "./index";

const meta = {
  title: "Base/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A brass-framed identity mark with a named initials fallback.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = { render: () => <Avatar name="Mira Vale" /> };
export const Sizes: StoryObj = {
  render: () => (
    <div className="rf-row">
      <Avatar name="Mira Vale" size="sm" />
      <Avatar name="Mira Vale" />
      <Avatar name="Mira Vale" size="lg" />
    </div>
  ),
};
export const ImageFailure: StoryObj = {
  render: () => <Avatar name="Mira Vale" src="data:image/png;base64,invalid" />,
};
