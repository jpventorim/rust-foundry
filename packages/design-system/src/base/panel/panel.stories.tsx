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
          "A fibrous writing sheet fitted into a timber frame with forged corner brackets, or a stitched hide cover with a bound spine.",
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
        A cut hide cover, saddle stitching, and readable ivory ink.
      </p>
    </Panel>
  ),
};

export const Narrow: StoryObj = {
  render: () => (
    <div
      style={{ width: "280px", maxWidth: "100%", display: "grid", gap: "24px" }}
    >
      <Panel>
        <h2 className="rf-title">Writing tablet</h2>
        <p className="rf-muted">
          Timber, iron, and paper retain their edges on a narrow table.
        </p>
      </Panel>
      <Panel material="leather">
        <h2 className="rf-title">Bound cover</h2>
        <p className="rf-muted">
          Small lettering remains clear against the hide.
        </p>
      </Panel>
    </div>
  ),
};

export const LayeredMaterials: StoryObj = {
  render: () => (
    <Panel material="leather">
      <h2 className="rf-title">A bound writing surface</h2>
      <p className="rf-muted">Ivory lettering on the outer hide.</p>
      <Panel>
        <h3 className="rf-title">An inset sheet</h3>
        <p className="rf-muted">Dark ink returns on the inner paper.</p>
      </Panel>
    </Panel>
  ),
};
