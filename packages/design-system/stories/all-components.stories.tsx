import { Feather } from "lucide-react";
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
import { darkTheme, lightTheme } from "../src/theme/contracts";
import { useTheme } from "../src/theme/provider";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="rf-codex-section rf-paper-surface">
      <div className="rf-codex-heading">
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
  { name: "Candle gold", color: "#e3b958", texture: "var(--rf-gold-texture)" },
  { name: "Ruby wax", color: "#912e38" },
  { name: "Forest enamel", color: "#236044" },
  { name: "Sapphire ink", color: "#2a537e" },
];

function AllComponents() {
  const theme = useTheme() === "dark" ? darkTheme : lightTheme;
  const materialSwatches = [
    swatches[0],
    {
      name: "Sawn oak",
      color: theme["--rf-wood-color"],
      texture: "var(--rf-wood-texture)",
    },
    {
      name: "Coarse iron",
      color: theme["--rf-iron-color"],
      texture: "var(--rf-iron-texture)",
    },
    ...swatches.slice(1),
    {
      name: "Warm parchment",
      color: theme["--rf-paper"],
      texture: "var(--rf-paper-texture)",
    },
  ];
  return (
    <div className="rf-codex">
      <header className="rf-codex-header">
        <h1>Design system</h1>
        <p>
          Base components inspired by medieval tabletop materials: wood grain,
          coarse iron, leather, and fibrous paper.
        </p>
      </header>
      <Section
        title="Materials and colors"
        description="Sawn timber, fibrous paper, coarse iron, and vivid paint."
      >
        <div className="rf-swatch-grid">
          {materialSwatches.map((swatch) => (
            <div key={swatch.name}>
              <div
                className="rf-swatch"
                style={{
                  background:
                    "texture" in swatch ? swatch.texture : swatch.color,
                }}
              />
              <span className="rf-swatch-name">{swatch.name}</span>
              <span className="rf-swatch-code">{swatch.color}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section
        title="Actions and identity"
        description="Buttons, status labels, and avatars."
      >
        <div className="rf-demo-grid">
          <Specimen name="Button">
            <div className="rf-row">
              <Button>
                <Feather size={16} aria-hidden="true" />
                Save note
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
        title="Form controls"
        description="Text entry, selection, range, and progress controls."
      >
        <div className="rf-demo-grid">
          <Specimen name="Text field">
            <TextField
              label="Name"
              placeholder="Enter a name"
              description="Shown next to your notes."
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
            <Textarea label="Notes" placeholder="Enter notes" />
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
        title="Surfaces and navigation"
        description="Panels, alerts, separators, tabs, and accordions."
      >
        <div className="rf-demo-grid">
          <Specimen name="Panel">
            <Panel>
              <h4 className="rf-title">Panel</h4>
              <p className="rf-muted">A framed surface for related content.</p>
            </Panel>
          </Specimen>
          <Specimen name="Alert">
            <Alert title="Your changes are safe" tone="emerald">
              Your changes have been saved.
            </Alert>
          </Specimen>
          <Specimen name="Separator">
            <p className="rf-muted">Note title</p>
            <Separator />
            <p className="rf-muted">Second section content.</p>
          </Specimen>
          <Specimen name="Tabs">
            <Tabs
              label="Page sections"
              items={[
                {
                  value: "notes",
                  label: "Notes",
                  content: "Notes for the selected item.",
                },
                {
                  value: "history",
                  label: "History",
                  content: "Changes to the selected item.",
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
                  title: "Section details",
                  content: "Content for the selected section.",
                },
                {
                  value: "more",
                  title: "Additional details",
                  content: "Additional section content.",
                },
              ]}
            />
          </Specimen>
        </div>
      </Section>
      <Section title="Overlays" description="Dialogs, popovers, and tooltips.">
        <div className="rf-demo-grid">
          <Specimen name="Dialog">
            <Dialog
              trigger={<Button>Open a dialog</Button>}
              title="Edit note"
              description="Enter a title for this note."
            >
              <TextField label="Note title" placeholder="Note title" />
            </Dialog>
          </Specimen>
          <Specimen name="Popover">
            <Popover
              trigger={<Button variant="outline">Read the details</Button>}
              title="Details"
              description="Additional information about the selected item."
            />
          </Specimen>
          <Specimen name="Tooltip">
            <Tooltip content="Save your current changes">
              <Button variant="ghost">Save changes</Button>
            </Tooltip>
          </Specimen>
        </div>
      </Section>
    </div>
  );
}

export default {
  title: "Design system/All components",
  parameters: { layout: "fullscreen", controls: { disable: true } },
} satisfies Meta;
export const Default: StoryObj = { render: () => <AllComponents /> };
