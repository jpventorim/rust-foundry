import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Button } from "../button";
import { Tooltip } from "./index";

const meta = {
  title: "Base/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Supplementary help on hover or focus. Essential information must also exist outside a tooltip.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Tooltip content="Save your current changes">
      <Button variant="outline">Save changes</Button>
    </Tooltip>
  ),
};
