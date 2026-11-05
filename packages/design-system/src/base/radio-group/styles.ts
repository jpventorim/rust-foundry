import { defineGlobalStyles } from "@pandacss/dev";

export const radioGroupStyles = defineGlobalStyles({
  ".rf-radio": {
    borderRadius: "50%",
  },
  ".rf-radio-indicator": {
    width: "9px",
    height: "9px",
    background: "#fff7dd",
    borderRadius: "50%",
    animation: "rf-stamp 180ms var(--rf-ease)",
  },
  ".rf-radio-group": {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px 20px",
  },
});
