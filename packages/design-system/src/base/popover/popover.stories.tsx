import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Button } from "../button";
import { Popover } from "./index";

const meta = {
  title: "Base/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A small contextual sheet, opened by a named trigger.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Popover
      trigger={<Button variant="outline">Open details</Button>}
      title="A useful detail"
      description="Context stays close to the control that needs it."
    >
      <p className="rf-hint">Press Escape to close.</p>
    </Popover>
  ),
};
