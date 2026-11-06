import { defineGlobalStyles } from "@pandacss/dev";

export const textFieldStyles = defineGlobalStyles({
  ".rf-text-field": {
    gap: "8px",
    maxWidth: "100%",
  },
  ".rf-text-field-frame": {
    minWidth: "0",
    padding: "3px",
    border: "1px solid var(--rf-wood-edge)",
    borderRadius: "2px 1px 2px 1px",
    background: "var(--rf-wood-texture)",
    boxShadow: "var(--rf-depth-mounted)",
  },
  ".rf-text-field-input": {
    display: "block",
    boxSizing: "border-box",
    width: "100%",
    minWidth: "0",
    minHeight: "44px",
    padding: "10px 12px",
    border: "1px solid var(--rf-control-edge)",
    borderBottomColor: "#d4bd91",
    borderRadius: "1px",
    color: "var(--rf-paper-ink)",
    caretColor: "var(--rf-ink)",
    background: "var(--rf-paper-texture)",
    boxShadow: "var(--rf-depth-inset)",
    "--rf-ink": "var(--rf-paper-ink)",
    "--rf-muted": "var(--rf-paper-muted)",
    "--rf-focus": "var(--rf-paper-focus)",
    "--rf-error": "var(--rf-paper-error)",
  },
  ".rf-theme .rf-text-field-input": {
    fontSize: "max(16px, 1em)",
    lineHeight: "1.5",
  },
  ".rf-text-field-input::placeholder": {
    color: "var(--rf-paper-muted)",
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
    color: "var(--rf-error)",
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
    '.rf-text-field[data-surface] .rf-text-field-input[aria-invalid="true"]': {
      borderColor: "CanvasText",
      borderStyle: "dashed",
      boxShadow: "none",
    },
  },
  '.rf-text-field[data-surface="integrated"] .rf-text-field-frame': {
    background: "transparent",
    padding: "0",
    border: "0",
    boxShadow: "none",
  },
  ':where(.rf-paper-surface) .rf-text-field[data-surface="auto"] .rf-text-field-frame':
    {
      background: "transparent",
      padding: "0",
      border: "0",
      boxShadow: "none",
    },
  '.rf-text-field[data-surface="integrated"] .rf-text-field-input': {
    background: "transparent",
    border: "0",
    borderBottom: "1px solid var(--rf-control-edge)",
    borderRadius: "0",
    boxShadow: "inset 0 -1px 0 #fff2",
  },
  ':where(.rf-paper-surface) .rf-text-field[data-surface="auto"] .rf-text-field-input':
    {
      background: "transparent",
      border: "0",
      borderBottom: "1px solid var(--rf-control-edge)",
      borderRadius: "0",
      boxShadow: "inset 0 -1px 0 #fff2",
    },
  '.rf-text-field[data-surface] .rf-text-field-input[aria-invalid="true"]': {
    borderBottom: "2px solid var(--rf-paper-error)",
    boxShadow: "inset 2px 0 0 var(--rf-paper-error)",
  },
  ".rf-text-field[data-surface] .rf-text-field-input:disabled": {
    color: "var(--rf-paper-muted)",
    borderBottomStyle: "dashed",
  },
  ".rf-text-field[data-surface] .rf-text-field-input[readonly]": {
    borderBottomStyle: "dashed",
  },
});
