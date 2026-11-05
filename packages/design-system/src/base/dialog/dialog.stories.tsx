import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Button } from "../button";
import { TextField } from "../text-field";
import { Dialog } from "./index";

const meta = {
  title: "Base/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A modal parchment with a title, description, focus trap, Escape dismissal, and focus restoration.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Dialog
      trigger={<Button>Open dialog</Button>}
      title="A moment of pause"
      description="Your place is saved while this dialog is open."
    >
      <TextField label="Note title" placeholder="A new chapter" />
      <p className="rf-hint">Press Escape or the close button to return.</p>
    </Dialog>
  ),
};
