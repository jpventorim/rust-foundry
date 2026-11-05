import { defineGlobalStyles } from "@pandacss/dev";

export const textFieldStyles = defineGlobalStyles({
  ".rf-input, .rf-select-trigger": {
    width: "100%",
    minHeight: "44px",
    padding: "10px 12px",
    border: "1px solid #a28c67",
    borderRadius: "5px",
    color: "var(--rf-ink)",
    background:
      "linear-gradient(#00000004, transparent 9px), var(--rf-paper-light)",
    boxShadow: "inset 0 2px 3px #35230b15, 0 1px 0 #fff8",
    transition: "border-color 180ms, box-shadow 180ms",
  },
  ".rf-input::placeholder": {
    color: "#7d6a53",
    opacity: "1",
  },
  ".rf-input:hover:not(:disabled), .rf-select-trigger:hover:not([data-disabled])":
    {
      borderColor: "var(--rf-brass)",
    },
  '.rf-input[aria-invalid="true"]': {
    border: "2px solid var(--rf-ruby)",
  },
  ".rf-input:disabled, .rf-select-trigger[data-disabled]": {
    background: "#e5ddcd",
    cursor: "not-allowed",
    color: "#786b57",
  },
});
