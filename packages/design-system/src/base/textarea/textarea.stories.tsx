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
          "A vertically resizable writing sheet set into a timber tablet. Persistent labels and linked help or errors accompany the native textarea.",
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
      description="Write across several lines. Drag the lower corner to make more room."
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
      defaultValue="These notes are unavailable for editing."
      disabled
    />
  ),
};

export const ReadOnly: StoryObj = {
  render: () => (
    <Textarea
      label="Notes"
      defaultValue="These notes can be selected and copied."
      description="This sheet is read-only."
      readOnly
    />
  ),
};

export const Narrow: StoryObj = {
  render: () => (
    <div style={{ width: "100%", maxWidth: 280 }}>
      <Textarea
        label="Notes on a narrow sheet"
        description="The writing surface fits its available space."
        defaultValue="A short first line.\nA second thought."
      />
    </div>
  ),
};
