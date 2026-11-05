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
          "Painted enamel travels through an iron measuring channel held in timber. Paper labels show progress, completion, or ongoing work.",
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
      <Progress label="Gold" value={90} tone="gold" />
      <Progress label="Emerald" value={55} tone="emerald" />
      <Progress label="Neutral" value={45} tone="neutral" />
    </div>
  ),
};
export const Indeterminate: StoryObj = {
  render: () => <Progress label="Loading your notes" value={null} />,
};
export const Complete: StoryObj = {
  render: () => <Progress label="Preparation complete" value={100} />,
};
export const Empty: StoryObj = {
  render: () => <Progress label="Waiting to begin" value={0} />,
};
export const CustomRange: StoryObj = {
  render: () => <Progress label="Pages prepared" value={6} max={12} />,
};
export const Narrow: StoryObj = {
  render: () => (
    <div style={{ width: "190px", maxWidth: "100%" }}>
      <Progress
        label="Preparing the collected workshop instructions"
        value={null}
        tone="sapphire"
      />
    </div>
  ),
};
