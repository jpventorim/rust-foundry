import { defineGlobalStyles } from "@pandacss/dev";

export const textFieldStyles = defineGlobalStyles({
  ".rf-text-field": {
    gap: "8px",
    maxWidth: "100%",
  },
  ".rf-text-field-frame": {
    minWidth: "0",
    padding: "3px 5px 4px",
    border: "2px solid #293235",
    borderRadius: "2px 1px 2px 1px",
    background: "var(--rf-wood-texture)",
    boxShadow: "0 2px 0 #261d15, inset 0 1px 0 #b4956a70",
  },
  ".rf-text-field-input": {
    display: "block",
    boxSizing: "border-box",
    width: "100%",
    minWidth: "0",
    minHeight: "44px",
    padding: "10px 12px",
    border: "1px solid #9b8058",
    borderBottomColor: "#d4bd91",
    borderRadius: "1px 2px 1px 1px",
    color: "var(--rf-ink)",
    caretColor: "var(--rf-ink)",
    background: "var(--rf-paper-texture)",
    boxShadow: "inset 0 2px 0 #5a41232b, 0 1px 0 #e6cca070",
  },
  ".rf-theme .rf-text-field-input": {
    fontSize: "max(16px, 1em)",
    lineHeight: "1.5",
  },
  ".rf-text-field-input::placeholder": {
    color: "#6d5b46",
    opacity: "1",
  },
  '.rf-text-field-input:hover:not(:disabled):not([readonly]):not([aria-invalid="true"])':
    {
      borderColor: "#6f5636",
    },
  '.rf-text-field-input[aria-invalid="true"]': {
    borderColor: "var(--rf-ruby)",
    boxShadow: "inset 3px 0 0 var(--rf-ruby), inset 0 2px 0 #5a41232b",
  },
  ".rf-text-field-input:disabled": {
    background: "var(--rf-paper-grain), #e0d7c4",
    cursor: "not-allowed",
    color: "#655743",
    WebkitTextFillColor: "#655743",
    opacity: "1",
    borderStyle: "dashed",
    boxShadow: "none",
  },
  ".rf-text-field-input[readonly]": {
    background: "var(--rf-paper-grain), #ece0c7",
  },
  ".rf-theme .rf-text-field-input:focus-visible": {
    outline: "3px solid var(--rf-focus)",
    outlineOffset: "6px",
  },
  ".rf-text-field > :is(.rf-label, .rf-hint, .rf-error)": {
    overflowWrap: "anywhere",
  },
  ".rf-text-field > .rf-error": {
    color: "var(--rf-ruby)",
    borderLeft: "3px solid currentColor",
    paddingLeft: "8px",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-text-field-input": {
      transition: "none",
    },
  },
  "@media (forced-colors: active)": {
    ".rf-text-field-frame": {
      background: "Canvas",
      borderColor: "CanvasText",
      boxShadow: "none",
    },
    '.rf-text-field-input, .rf-text-field-input:is(:disabled, [readonly], [aria-invalid="true"])':
      {
        background: "Canvas",
        color: "CanvasText",
        caretColor: "CanvasText",
        borderColor: "CanvasText",
        boxShadow: "none",
      },
    ".rf-text-field-input::placeholder": {
      color: "GrayText",
    },
    ".rf-text-field-input:disabled": {
      color: "GrayText",
      WebkitTextFillColor: "GrayText",
      borderColor: "GrayText",
    },
    ".rf-theme .rf-text-field-input:focus-visible": {
      outlineColor: "Highlight",
    },
    '.rf-text-field-input[aria-invalid="true"], .rf-text-field > .rf-error': {
      borderColor: "CanvasText",
      color: "CanvasText",
    },
  },
});
