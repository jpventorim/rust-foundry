import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Panel } from "./index";

const meta = {
  title: "Base/Panel",
  component: Panel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A composition surface with parchment and leather materials.",
      },
    },
  },
} satisfies Meta;
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Panel>
      <h2 className="rf-title">A blank page</h2>
      <p className="rf-muted">A place to compose your next interface.</p>
    </Panel>
  ),
};
export const Leather: StoryObj = {
  render: () => (
    <Panel material="leather">
      <h2 className="rf-title">Leather-bound</h2>
      <p className="rf-muted">
        Warm stitching, a dark grain, and readable ivory ink.
      </p>
    </Panel>
  ),
};
