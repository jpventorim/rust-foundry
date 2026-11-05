import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Alert } from "./index";

const meta = {
  title: "Base/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A semantic notification. Ruby errors are alerts; informational messages use status.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Alert title="Changes saved" tone="emerald">
      Your notes are safe.
    </Alert>
  ),
};
export const ValidationError: StoryObj = {
  render: () => (
    <Alert title="Unable to save" tone="ruby">
      Check your connection and try again.
    </Alert>
  ),
};
export const Information: StoryObj = {
  render: () => (
    <Alert title="A useful reminder">
      You can navigate every control with a keyboard.
    </Alert>
  ),
};

export const NoticeTones: StoryObj = {
  render: () => (
    <div className="rf-stack">
      <Alert title="Changes saved" tone="emerald">
        Your notes are safe.
      </Alert>
      <Alert title="Unable to save" tone="ruby">
        Check your connection and try again.
      </Alert>
      <Alert title="A useful reminder" tone="sapphire">
        You can navigate every control with a keyboard.
      </Alert>
      <Alert title="Please review" tone="gold">
        Review your changes before continuing.
      </Alert>
      <Alert title="No changes" tone="neutral">
        There are no new updates to display.
      </Alert>
    </div>
  ),
};

export const NarrowNotice: StoryObj = {
  render: () => (
    <div style={{ width: "280px", maxWidth: "100%" }}>
      <Alert title="Your changes need another look" tone="ruby">
        A longer message remains readable when the notice shares a narrow column
        with other content.
      </Alert>
    </div>
  ),
};
