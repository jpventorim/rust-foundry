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
          "Hinged timber rails with forged iron straps open onto bound paper. Includes keyboard navigation, configurable heading levels, and reduced-motion states.",
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

export const BoundFolio: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <h2 className="rf-title">A bound folio</h2>
      <Accordion
        headingLevel={3}
        multiple
        defaultValue={["binding", "paper"]}
        items={[
          {
            value: "binding",
            title:
              "A long section heading follows the width of its timber rail",
            content: (
              <p>
                The paper sits beneath its wooden cover, with room for readable
                notes and a <a href="#paper">linked reference</a>.
              </p>
            ),
          },
          {
            value: "paper",
            title: "A second opened sheet",
            content: "Several sections can remain open for comparison.",
          },
          {
            value: "sealed",
            title: "Sealed section — unavailable",
            content: "This section is currently unavailable.",
            disabled: true,
          },
        ]}
      />
    </div>
  ),
};
