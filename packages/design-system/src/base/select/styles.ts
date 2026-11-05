import { defineGlobalStyles } from "@pandacss/dev";

export const selectStyles = defineGlobalStyles({
  ".rf-select-trigger": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    cursor: "pointer",
    textAlign: "left",
  },
  ".rf-select-trigger[data-popup-open] svg": {
    transform: "rotate(180deg)",
  },
  ".rf-select-trigger svg": {
    transition: "transform 200ms",
  },
  ".rf-select-popup": {
    minWidth: "var(--anchor-width)",
    maxHeight: "var(--available-height)",
    overflow: "auto",
  },
  ".rf-select-list": {
    padding: "5px",
  },
  ".rf-select-item": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    padding: "10px 12px",
    minHeight: "44px",
    borderRadius: "3px",
    cursor: "default",
    outline: "none",
  },
  ".rf-select-item[data-highlighted]": {
    background: "#e6d4aa",
    color: "#30271e",
  },
  ".rf-select-item[data-selected]": {
    color: "#184b35",
    fontWeight: "700",
  },
  ".rf-select-item[data-disabled]": {
    color: "#80735f",
  },
});
