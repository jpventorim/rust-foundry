import { defineGlobalStyles } from "@pandacss/dev";

export const panelStyles = defineGlobalStyles({
  ".rf-panel": {
    position: "relative",
    padding: "24px",
    border: "1px solid var(--rf-border)",
    borderRadius: "var(--rf-radius)",
    color: "var(--rf-ink)",
    background:
      "radial-gradient(ellipse at top left, #fff8, transparent 65%), repeating-linear-gradient(0deg, #80603203 0 1px, transparent 1px 4px), var(--rf-paper)",
    boxShadow:
      "inset 0 0 0 3px #fff5, inset 0 0 0 4px #ae926c33, var(--rf-shadow)",
  },
  '.rf-panel[data-material="leather"]': {
    color: "#f7ead3",
    background:
      "radial-gradient(ellipse at top, #724d35, transparent 80%), repeating-linear-gradient(45deg, #00000008 0 1px, transparent 1px 3px), #3b2b23",
    borderColor: "#a38154",
    boxShadow:
      "inset 0 0 0 5px #302018, inset 0 0 0 6px #c3a57570, 0 5px 14px #0002",
  },
  '.rf-panel[data-material="leather"] .rf-muted': {
    color: "#e4ccb0",
  },
  "@media (max-width: 480px)": {
    ".rf-panel": {
      padding: "18px",
    },
  },
});
