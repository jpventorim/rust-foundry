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
