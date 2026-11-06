import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Panel } from "../panel";
import { TextField } from "./index";

const meta = {
  title: "Base/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A writable paper inset held by a cut timber frame and iron edge. Persistent labels and linked help and error messages accompany the Base UI input.",
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
      description="Use a name your party will recognize."
      error="Enter a name before continuing."
    />
  ),
};
export const Disabled: StoryObj = {
  render: () => (
    <TextField
      label="Character name"
      defaultValue="Mira Vale"
      description="Editing is unavailable while this record is locked."
      disabled
    />
  ),
};

export const ReadOnly: StoryObj = {
  render: () => (
    <TextField
      label="Record reference"
      defaultValue="RF-2408"
      description="This reference can be selected and copied."
      readOnly
    />
  ),
};

export const NarrowLayout: StoryObj = {
  render: () => (
    <div style={{ width: "240px", maxWidth: "100%" }}>
      <TextField
        label="A longer record title on a narrow writing surface"
        defaultValue="Notes from the northern crossing"
        description="Long labels and explanations wrap while the writing frame stays inside its container."
        error="Choose a shorter title before saving this record."
      />
    </div>
  ),
};

export const InPanel: StoryObj = {
  render: () => (
    <Panel>
      <TextField
        label="Name"
        description="This field shares the panel backing."
      />
    </Panel>
  ),
};
