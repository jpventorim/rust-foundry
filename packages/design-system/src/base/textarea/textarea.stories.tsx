import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Textarea } from "./index";

const meta = {
  title: "Base/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A plain multiline composition input with the same field language.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Textarea
      label="Notes"
      placeholder="Put quill to parchment…"
      description="A few words are enough."
    />
  ),
};
export const ValidationError: StoryObj = {
  render: () => (
    <Textarea
      label="Notes"
      error="Keep your notes under 500 characters."
      defaultValue="A rather long tale…"
    />
  ),
};
export const Disabled: StoryObj = {
  render: () => (
    <Textarea
      label="Notes"
      defaultValue="These notes are read-only."
      disabled
    />
  ),
};
