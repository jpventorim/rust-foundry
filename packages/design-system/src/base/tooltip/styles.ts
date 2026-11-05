import { defineGlobalStyles } from "@pandacss/dev";

export const tooltipStyles = defineGlobalStyles({
  ".rf-tooltip": {
    maxWidth: "min(280px, calc(100vw - 32px))",
    padding: "8px 12px",
    background: "#292e27",
    color: "#fff4dc",
    border: "1px solid #c7a368",
    borderRadius: "4px",
    fontSize: "0.8rem",
    boxShadow: "0 4px 12px #0003",
    transformOrigin: "var(--transform-origin)",
    transition: "opacity 140ms, transform 140ms",
  },
  ".rf-tooltip:is([data-starting-style], [data-ending-style])": {
    opacity: "0",
    transform: "scale(0.95)",
  },
});
