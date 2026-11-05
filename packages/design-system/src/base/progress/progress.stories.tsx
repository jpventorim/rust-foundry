import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Progress } from "./index";

const meta = {
  title: "Base/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A filled enamel track with visible and accessible progress values.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => <Progress label="Preparing your workspace" value={65} />,
};
export const Tones: StoryObj = {
  render: () => (
    <div className="rf-stack">
      <Progress label="Ruby" value={35} tone="ruby" />
      <Progress label="Sapphire" value={75} tone="sapphire" />
      <Progress label="Brass" value={90} tone="brass" />
    </div>
  ),
};
export const Indeterminate: StoryObj = {
  render: () => <Progress label="Loading your notes" value={null} />,
};
export const Complete: StoryObj = {
  render: () => <Progress label="Preparation complete" value={100} />,
};
