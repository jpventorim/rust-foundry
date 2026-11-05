import { BookOpen, Feather, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import type { Meta, StoryObj } from "storybook-react-rsbuild";
import { Accordion } from "../src/base/accordion";
import { Alert } from "../src/base/alert";
import { Avatar } from "../src/base/avatar";
import { Badge } from "../src/base/badge";
import { Button } from "../src/base/button";
import { Checkbox } from "../src/base/checkbox";
import { Dialog } from "../src/base/dialog";
import { Panel } from "../src/base/panel";
import { Popover } from "../src/base/popover";
import { Progress } from "../src/base/progress";
import { RadioGroup } from "../src/base/radio-group";
import { Select } from "../src/base/select";
import { Separator } from "../src/base/separator";
import { Slider } from "../src/base/slider";
import { Switch } from "../src/base/switch";
import { Tabs } from "../src/base/tabs";
import { TextField } from "../src/base/text-field";
import { Textarea } from "../src/base/textarea";
import { Tooltip } from "../src/base/tooltip";

function Section({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="rf-codex-section">
      <div className="rf-codex-heading">
        <span aria-hidden="true">{number}.</span>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function Specimen({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="rf-demo-label">{name}</h3>
      {children}
    </div>
  );
}

const swatches = [
  { name: "Old brass", color: "#775014" },
  { name: "Ruby wax", color: "#912e38" },
  { name: "Forest enamel", color: "#236044" },
  { name: "Sapphire ink", color: "#2a537e" },
  { name: "Warm parchment", color: "#f3e8cf" },
];

function AllComponents() {
  return (
    <div className="rf-codex">
      <header className="rf-codex-header">
        <div className="rf-row">
          <BookOpen size={20} aria-hidden="true" />
          <span className="rf-eyebrow">Foundry / The component codex</span>
        </div>
        <h1>Made for the table.</h1>
        <p>
          Honest materials. A little magic. A tactile collection of building
          blocks for the stories we tell together.
        </p>
        <div className="rf-codex-meta">
          <span>Volume I · Base components</span>
          <span>19 building blocks</span>
          <span>First edition · Work in progress</span>
        </div>
      </header>
      <Section
        number="I"
        title="The material palette"
        description="Parchment, patinated brass, and richly colored enamel."
      >
        <div className="rf-swatch-grid">
          {swatches.map((swatch) => (
            <div key={swatch.name}>
              <div className="rf-swatch" style={{ background: swatch.color }} />
              <span className="rf-swatch-name">{swatch.name}</span>
              <span className="rf-swatch-code">{swatch.color}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section
        number="II"
        title="Small but mighty"
        description="Actions, identity, and a few useful marks in the margin."
      >
        <div className="rf-demo-grid">
          <Specimen name="Button">
            <div className="rf-row">
              <Button>
                <Feather size={16} aria-hidden="true" />
                Begin a story
              </Button>
              <Button variant="outline">Secondary</Button>
            </div>
          </Specimen>
          <Specimen name="Badge">
            <div className="rf-row">
              <Badge tone="emerald">Available</Badge>
              <Badge tone="ruby">Requires attention</Badge>
            </div>
          </Specimen>
          <Specimen name="Avatar">
            <div className="rf-row">
              <Avatar name="Mira Vale" />
              <span className="rf-muted">Mira Vale</span>
            </div>
          </Specimen>
        </div>
      </Section>
      <Section
        number="III"
        title="Put quill to parchment"
        description="Readable labels, recessed fields, and reassuringly solid controls."
      >
        <div className="rf-demo-grid">
          <Specimen name="Text field">
            <TextField
              label="Name"
              placeholder="What shall we call you?"
              description="A name to remember."
            />
          </Specimen>
          <Specimen name="Select">
            <Select
              label="Language"
              defaultValue="common"
              items={[
                { value: "common", label: "Common" },
                { value: "elvish", label: "Elvish" },
                { value: "dwarvish", label: "Dwarvish" },
              ]}
            />
          </Specimen>
          <Specimen name="Textarea">
            <Textarea
              label="Notes"
              placeholder="Every good tale starts somewhere…"
            />
          </Specimen>
          <Specimen name="Checkbox">
            <Checkbox label="Keep these notes private" defaultChecked />
          </Specimen>
          <Specimen name="Switch">
            <Switch label="Enable ambient sound" defaultChecked />
          </Specimen>
          <Specimen name="Radio group">
            <RadioGroup
              label="Visibility"
              defaultValue="party"
              items={[
                { value: "private", label: "Private" },
                { value: "party", label: "Party" },
              ]}
            />
          </Specimen>
          <Specimen name="Slider">
            <Slider label="Ambient volume" defaultValue={40} />
          </Specimen>
          <Specimen name="Progress">
            <Progress label="Preparing your workspace" value={65} />
          </Specimen>
        </div>
      </Section>
      <Section
        number="IV"
        title="A place for everything"
        description="Surfaces and navigation that keep the page calm and organized."
      >
        <div className="rf-demo-grid">
          <Specimen name="Panel">
            <Panel>
              <h4 className="rf-title">A quiet surface</h4>
              <p className="rf-muted">Compose something useful here.</p>
            </Panel>
          </Specimen>
          <Specimen name="Alert">
            <Alert title="Your changes are safe" tone="emerald">
              Nothing left to save. Keep creating.
            </Alert>
          </Specimen>
          <Specimen name="Separator">
            <p className="rf-muted">A new chapter</p>
            <Separator />
            <p className="rf-muted">A little breathing room.</p>
          </Specimen>
          <Specimen name="Tabs">
            <Tabs
              label="Page sections"
              items={[
                {
                  value: "notes",
                  label: "Notes",
                  content: "A place for your thoughts.",
                },
                {
                  value: "history",
                  label: "History",
                  content: "The story so far.",
                },
              ]}
            />
          </Specimen>
          <Specimen name="Accordion">
            <Accordion
              headingLevel={4}
              items={[
                {
                  value: "details",
                  title: "A little more detail",
                  content: "Open when needed. Quiet when not.",
                },
                {
                  value: "more",
                  title: "One more thing",
                  content: "Every control has a keyboard path.",
                },
              ]}
            />
          </Specimen>
        </div>
      </Section>
      <Section
        number="V"
        title="Just a little more"
        description="Contextual layers, with focus managed and a clear way back."
      >
        <div className="rf-demo-grid">
          <Specimen name="Dialog">
            <Dialog
              trigger={<Button>Open a dialog</Button>}
              title="A moment of pause"
              description="A sheet of parchment above the table."
            >
              <TextField label="Note title" placeholder="A new chapter" />
            </Dialog>
          </Specimen>
          <Specimen name="Popover">
            <Popover
              trigger={<Button variant="outline">Read the details</Button>}
              title="Close at hand"
              description="Useful context belongs beside the thing it explains."
            />
          </Specimen>
          <Specimen name="Tooltip">
            <Tooltip content="Save your current changes">
              <Button variant="ghost">Save changes</Button>
            </Tooltip>
          </Specimen>
        </div>
      </Section>
      <footer className="rf-codex-footer">
        <ShieldCheck size={18} aria-hidden="true" />
        <span>Keyboard first. Motion when welcome. Room for your story.</span>
      </footer>
    </div>
  );
}

export default {
  title: "Design system/All components",
  parameters: { layout: "fullscreen", controls: { disable: true } },
} satisfies Meta;
export const Default: StoryObj = { render: () => <AllComponents /> };
