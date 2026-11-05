import { defineGlobalStyles } from "@pandacss/dev";

export const accordionStyles = defineGlobalStyles({
  ".rf-accordion": {
    border: "1px solid var(--rf-border)",
    borderRadius: "6px",
    background: "#fff7e44d",
    overflow: "hidden",
  },
  ".rf-accordion-item + .rf-accordion-item": {
    borderTop: "1px solid var(--rf-border)",
  },
  ".rf-accordion-header": {
    margin: "0",
    font: "inherit",
  },
  ".rf-accordion-trigger": {
    display: "flex",
    width: "100%",
    minHeight: "48px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    background: "transparent",
    border: "0",
    color: "var(--rf-ink)",
    fontWeight: "650",
    textAlign: "left",
    cursor: "pointer",
  },
  ".rf-accordion-trigger:hover": {
    background: "#9770390d",
  },
  ".rf-accordion-trigger svg": {
    transition: "transform 220ms var(--rf-ease)",
    flex: "0 0 auto",
  },
  ".rf-accordion-trigger[data-panel-open] svg": {
    transform: "rotate(180deg)",
  },
  ".rf-accordion-trigger:focus-visible": {
    outlineOffset: "-4px",
  },
  ".rf-accordion-panel": {
    height: "var(--accordion-panel-height)",
    overflow: "hidden",
    transition: "height 240ms var(--rf-ease), opacity 240ms",
  },
  ".rf-accordion-panel:is([data-starting-style], [data-ending-style])": {
    height: "0",
    opacity: "0",
  },
  ".rf-accordion-panel > div": {
    padding: "0 16px 16px",
    color: "var(--rf-muted)",
  },
});
