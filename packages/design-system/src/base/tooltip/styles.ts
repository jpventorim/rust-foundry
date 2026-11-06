import { defineGlobalStyles } from "@pandacss/dev";

export const tooltipStyles = defineGlobalStyles({
  ".rf-tooltip": {
    position: "relative",
    boxSizing: "border-box",
    maxWidth: "min(280px, calc(100vw - 32px), var(--available-width, 280px))",
    padding: "8px 12px 9px",
    background: "var(--rf-iron-texture)",
    color: "var(--rf-iron-ink, #fff4df)",
    border: "1px solid #788184",
    borderBottom: "3px solid #20292c",
    borderRadius: "1px 2px 1px 0",
    fontSize: "0.875rem",
    lineHeight: "1.5",
    fontWeight: "500",
    whiteSpace: "normal",
    overflowWrap: "anywhere",
    boxShadow: "var(--rf-depth-overlay)",
    transition: "opacity 140ms ease-out",
  },
  ".rf-tooltip::before": {
    content: '""',
    position: "absolute",
    inset: "3px auto 3px 3px",
    width: "1px",
    background: "#abb2b333",
    pointerEvents: "none",
  },
  ".rf-tooltip:is([data-starting-style], [data-ending-style])": {
    opacity: "0",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-tooltip": {
      transition: "none",
    },
  },
  "@media (forced-colors: active)": {
    ".rf-tooltip": {
      background: "Canvas",
      color: "CanvasText",
      borderColor: "CanvasText",
      boxShadow: "none",
    },
    ".rf-tooltip::before": {
      display: "none",
    },
  },
});
