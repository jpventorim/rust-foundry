import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { TextField } from "./index";

const meta = {
  title: "Base/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A labeled single-line input with linked help and error messages.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => (
    <TextField
      label="Character name"
      placeholder="e.g. Mira Vale"
      description="The name shown to your party."
    />
  ),
};
export const ValidationError: StoryObj = {
  render: () => (
    <TextField
      label="Character name"
      defaultValue=""
      required
      error="Enter a name before continuing."
    />
  ),
};
export const Disabled: StoryObj = {
  render: () => (
    <TextField label="Character name" defaultValue="Mira Vale" disabled />
  ),
};
