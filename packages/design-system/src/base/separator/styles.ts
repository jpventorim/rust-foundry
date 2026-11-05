import { defineGlobalStyles } from "@pandacss/dev";

export const separatorStyles = defineGlobalStyles({
  ".rf-separator": {
    height: "1px",
    margin: "16px 0",
    border: "0",
    background:
      "linear-gradient(90deg, transparent, var(--rf-border) 15%, var(--rf-border) 85%, transparent)",
    boxShadow: "0 1px 0 #fff7",
  },
  '.rf-separator[data-orientation="vertical"]': {
    height: "auto",
    alignSelf: "stretch",
    width: "1px",
    margin: "0 12px",
    background: "var(--rf-border)",
  },
});
