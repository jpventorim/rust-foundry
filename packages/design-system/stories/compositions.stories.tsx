import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Panel } from "../src/base/panel";
import { Select } from "../src/base/select";
import { TextField } from "../src/base/text-field";
import { Textarea } from "../src/base/textarea";
import { ReferenceForm } from "./reference-form";

export default {
  title: "Design system/Compositions",
  parameters: { controls: { disable: true } },
} satisfies Meta;

export const Validation: StoryObj = {
  render: () => (
    <section className="rf-context-scene">
      <h1 className="rf-title">Errors on a shared surface</h1>
      <p className="rf-muted">
        Errors retain their labels, messages, and visible marks.
      </p>
      <Panel className="rf-stack">
        <TextField label="Name" error="Enter a name." />
        <Textarea label="Notes" error="Enter some notes." />
        <Select
          label="Language"
          error="Choose a language."
          items={[
            { value: "common", label: "Common" },
            { value: "elvish", label: "Elvish" },
          ]}
        />
      </Panel>
    </section>
  ),
};

export const OnPaper: StoryObj = {
  render: () => (
    <section className="rf-context-scene">
      <h1 className="rf-title">Controls on paper</h1>
      <p className="rf-muted">
        One writing surface supplies the backing for the fields.
      </p>
      <div className="rf-surface-paper rf-paper-surface">
        <ReferenceForm />
      </div>
    </section>
  ),
};
export const OnTimber: StoryObj = {
  render: () => (
    <section className="rf-context-scene">
      <h1 className="rf-title">Controls on timber</h1>
      <p className="rf-muted">Mounted controls keep their own paper inserts.</p>
      <Panel material="wood">
        <ReferenceForm surface="mounted" />
      </Panel>
    </section>
  ),
};
export const NestedPanel: StoryObj = {
  render: () => (
    <section className="rf-context-scene">
      <h1 className="rf-title">Form inside a panel</h1>
      <p className="rf-muted">
        The panel owns the frame. Its fields integrate with the paper.
      </p>
      <Panel>
        <ReferenceForm />
      </Panel>
    </section>
  ),
};
export const CompactForm: StoryObj = {
  render: () => (
    <section className="rf-context-scene rf-context-compact">
      <h1 className="rf-title">Compact form</h1>
      <p className="rf-muted">The same controls at a narrow width.</p>
      <Panel>
        <ReferenceForm />
      </Panel>
    </section>
  ),
};
export const OnLeather: StoryObj = {
  render: () => (
    <section className="rf-context-scene">
      <h1 className="rf-title">Controls on leather</h1>
      <p className="rf-muted">
        Light paper inserts remain readable on the dark backing.
      </p>
      <Panel material="leather">
        <ReferenceForm />
      </Panel>
    </section>
  ),
};
