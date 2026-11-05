import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Tabs } from "./index";

const meta = {
  title: "Base/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Ledger dividers for related views, navigated with arrow keys.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Tabs
      label="Notes navigation"
      items={[
        { value: "notes", label: "Notes", content: "Your collected notes." },
        {
          value: "history",
          label: "History",
          content: "Nothing has been forgotten.",
        },
        {
          value: "locked",
          label: "Locked",
          content: "Hidden content",
          disabled: true,
        },
      ]}
    />
  ),
};
export const SecondTab: StoryObj = {
  render: () => (
    <Tabs
      label="Notes navigation"
      defaultValue="history"
      items={[
        { value: "notes", label: "Notes", content: "Your collected notes." },
        {
          value: "history",
          label: "History",
          content: "Nothing has been forgotten.",
        },
      ]}
    />
  ),
};
