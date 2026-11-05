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
        component:
          "A fibrous field note attached by an iron keeper. Opens from a named trigger and returns focus when dismissed.",
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

export const LongNote: StoryObj = {
  render: () => (
    <Popover
      defaultOpen
      trigger={<Button variant="outline">Read field note</Button>}
      title="A longer note from the workshop"
      description="The sheet stays within the available space. Scroll to read the rest."
    >
      {[
        "Keep the working notes beside the tools they describe. Leave enough room for a clear heading and legible writing.",
        "The keeper holds the sheet at its edge. Its small iron pin takes the strain while the paper remains easy to replace.",
        "Read each measurement before marking the timber. A short pause at the table saves a longer repair later.",
        "Keep the edge of the writing surface clear. Tools and loose offcuts belong beside the note rather than across its words.",
        "When a note grows longer than the space around it, the paper can be read by scrolling without moving the surrounding work.",
        "Close the sheet with its iron plate or press Escape to return to the control that opened it.",
      ].map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </Popover>
  ),
};
