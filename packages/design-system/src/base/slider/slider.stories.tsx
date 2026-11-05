import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Slider } from "./index";

const meta = {
  title: "Base/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A single brass thumb with a visible label and a numeric readout.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => <Slider label="Ambient volume" defaultValue={40} />,
};
export const Disabled: StoryObj = {
  render: () => <Slider label="Ambient volume" defaultValue={40} disabled />,
};
export const Stepped: StoryObj = {
  render: () => (
    <Slider label="Grid size" defaultValue={5} min={1} max={10} step={1} />
  ),
};
