import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

export function Accordion({
  items,
  headingLevel = 2,
  ...props
}: Omit<ComponentProps<typeof BaseAccordion.Root>, "children" | "className"> & {
  items: readonly {
    value: string;
    title: string;
    content: ReactNode;
    disabled?: boolean;
  }[];
  headingLevel?: 2 | 3 | 4;
}) {
  const Heading = `h${headingLevel}` as "h2" | "h3" | "h4";
  return (
    <BaseAccordion.Root {...props} className="rf-accordion">
      {items.map((item) => (
        <BaseAccordion.Item
          value={item.value}
          key={item.value}
          disabled={item.disabled}
          className="rf-accordion-item"
        >
          <BaseAccordion.Header
            render={<Heading />}
            className="rf-accordion-header"
          >
            <BaseAccordion.Trigger className="rf-accordion-trigger">
              <span>{item.title}</span>
              <span className="rf-accordion-keeper" aria-hidden="true">
                <ChevronDown size={17} />
              </span>
            </BaseAccordion.Trigger>
          </BaseAccordion.Header>
          <BaseAccordion.Panel className="rf-accordion-panel">
            <div>{item.content}</div>
          </BaseAccordion.Panel>
        </BaseAccordion.Item>
      ))}
    </BaseAccordion.Root>
  );
}
