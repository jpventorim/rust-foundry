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
          "An opened wood-backed folio with a fibrous sheet, iron binding, focus trap, Escape dismissal, and focus restoration.",
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

export const LongContent: StoryObj = {
  render: () => (
    <Dialog
      trigger={<Button>Open long dialog</Button>}
      title="A folio with room for a longer heading"
      description="The sheet scrolls within its frame so every field remains reachable on a narrow screen."
    >
      {[
        "First",
        "Second",
        "Third",
        "Fourth",
        "Fifth",
        "Sixth",
        "Seventh",
        "Eighth",
      ].map((page) => (
        <p key={page}>
          <strong>{page} page. </strong>
          Each page has a little more to say. Keep reading to reach the writing
          field, or use the close clasp or Escape to return to the table.
        </p>
      ))}
      <TextField
        label="Final note"
        placeholder="Write at the foot of the sheet"
      />
    </Dialog>
  ),
};
