import { defineGlobalStyles } from "@pandacss/dev";

export const alertStyles = defineGlobalStyles({
  ".rf-alert": {
    padding: "14px 16px",
    border: "1px solid var(--rf-accent)",
    borderLeftWidth: "4px",
    borderRadius: "5px",
    color: "var(--rf-accent)",
    background: "var(--rf-tint)",
    fontSize: "0.87rem",
    boxShadow: "inset 0 1px 0 #fffa",
  },
});
