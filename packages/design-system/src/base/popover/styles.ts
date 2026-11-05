import { defineGlobalStyles } from "@pandacss/dev";

export const popoverStyles = defineGlobalStyles({
  ".rf-popover": {
    width: "min(320px, calc(100vw - 32px))",
    padding: "20px",
  },
  ".rf-popover .rf-title": {
    fontSize: "1.15rem",
  },
});
