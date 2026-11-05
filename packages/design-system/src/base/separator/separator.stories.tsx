import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Separator } from "./index";

const meta = {
  title: "Base/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A subtle engraved rule between related regions.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => (
    <div>
      <p>First section</p>
      <Separator />
      <p>Second section</p>
    </div>
  ),
};
export const Vertical: StoryObj = {
  render: () => (
    <div className="rf-row">
      <span>Previous</span>
      <Separator orientation="vertical" />
      <span>Next</span>
    </div>
  ),
};
