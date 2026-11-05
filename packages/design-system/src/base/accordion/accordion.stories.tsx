import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Accordion } from "./index";

const meta = {
  title: "Base/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Expandable rules with animated height, readable headings, and button semantics.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Accordion
      items={[
        {
          value: "movement",
          title: "Movement",
          content: "Move up to your speed on your turn.",
        },
        {
          value: "actions",
          title: "Actions",
          content: "Choose an action, then resolve its effects.",
        },
      ]}
    />
  ),
};
export const Expanded: StoryObj = {
  render: () => (
    <Accordion
      defaultValue={["movement"]}
      items={[
        {
          value: "movement",
          title: "Movement",
          content: "Move up to your speed on your turn.",
        },
        {
          value: "actions",
          title: "Actions",
          content: "Choose an action, then resolve its effects.",
        },
      ]}
    />
  ),
};
