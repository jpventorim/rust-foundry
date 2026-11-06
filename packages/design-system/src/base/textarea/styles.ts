import { defineGlobalStyles } from "@pandacss/dev";

export const textareaStyles = defineGlobalStyles({
  ".rf-textarea-field": {
    minWidth: "0",
  },
  ".rf-textarea-tablet": {
    minWidth: "0",
    padding: "9px 3px 3px",
    border: "1px solid var(--rf-wood-edge)",
    borderBottomWidth: "3px",
    borderRadius: "1px",
    background: "var(--rf-wood-texture)",
    boxShadow: "var(--rf-depth-mounted)",
    position: "relative",
  },
  ".rf-textarea": {
    display: "block",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "100%",
    minWidth: "0",
    minHeight: "144px",
    padding: "12px",
    border: "1px solid var(--rf-control-edge)",
    borderBottomWidth: "1px",
    borderRadius: "1px",
    font: "inherit",
    fontSize: "16px",
    lineHeight: "24px",
    color: "var(--rf-paper-ink)",
    background:
      "repeating-linear-gradient(transparent 0 23px, var(--rf-rule) 23px 24px) 0 12px / 100% 24px, var(--rf-paper-texture)",
    boxShadow: "var(--rf-depth-paper)",
    resize: "vertical",
    transition: "border-color 160ms",
    "--rf-ink": "var(--rf-paper-ink)",
    "--rf-muted": "var(--rf-paper-muted)",
    "--rf-focus": "var(--rf-paper-focus)",
    "--rf-error": "var(--rf-paper-error)",
    caretColor: "var(--rf-paper-ink)",
    colorScheme: "light",
  },
  ".rf-textarea::placeholder": {
    color: "var(--rf-paper-muted)",
    opacity: "1",
  },
  '.rf-textarea:hover:not(:disabled):not([aria-invalid="true"])': {
    borderColor: "#665541",
  },
  ".rf-textarea:focus-visible": {
    outline: "3px solid #204f91",
    outlineOffset: "2px",
  },
  '.rf-textarea[aria-invalid="true"]': {
    borderColor: "#912e38",
    boxShadow: "inset 3px 0 0 #912e38, 0 1px 0 #241a14",
  },
  ".rf-textarea:disabled": {
    color: "#665541",
    cursor: "not-allowed",
    background: "var(--rf-paper-grain), #e5ddcd",
    borderColor: "#a28b68",
    opacity: "1",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-textarea": {
      transition: "none",
    },
  },
  "@media (forced-colors: active)": {
    ".rf-textarea-tablet": {
      background: "Canvas",
      borderColor: "CanvasText",
      boxShadow: "none",
    },
    ".rf-textarea": {
      background: "Canvas",
      color: "CanvasText",
      borderColor: "CanvasText",
      boxShadow: "none",
    },
    ".rf-textarea::placeholder": {
      color: "GrayText",
    },
    '.rf-textarea:hover:not(:disabled):not([aria-invalid="true"])': {
      borderColor: "CanvasText",
    },
    ".rf-textarea:disabled": {
      color: "GrayText",
      borderColor: "GrayText",
      background: "Canvas",
    },
    ".rf-textarea:focus-visible": {
      outlineColor: "Highlight",
    },
    '.rf-textarea[aria-invalid="true"]': {
      borderStyle: "dashed",
      borderColor: "CanvasText",
      boxShadow: "none",
    },
    ".rf-textarea-tablet::before, .rf-textarea-tablet::after": {
      display: "none",
    },
    '.rf-textarea-field[data-surface] .rf-textarea[aria-invalid="true"]': {
      borderColor: "CanvasText",
      borderStyle: "dashed",
      boxShadow: "none",
    },
  },
  ".rf-textarea-tablet::before": {
    content: '""',
    position: "absolute",
    top: "-3px",
    width: "9px",
    height: "17px",
    zIndex: "1",
    background: "var(--rf-iron-texture)",
    border: "1px solid #222a2c",
    boxShadow: "inset 0 1px 0 var(--rf-edge-light), var(--rf-shadow-contact)",
    pointerEvents: "none",
    left: "14px",
  },
  ".rf-textarea-tablet::after": {
    content: '""',
    position: "absolute",
    top: "-3px",
    width: "9px",
    height: "17px",
    zIndex: "1",
    background: "var(--rf-iron-texture)",
    border: "1px solid #222a2c",
    boxShadow: "inset 0 1px 0 var(--rf-edge-light), var(--rf-shadow-contact)",
    pointerEvents: "none",
    right: "14px",
  },
  '.rf-textarea-field[data-surface="integrated"] .rf-textarea-tablet': {
    padding: "0",
    background: "transparent",
    border: "0",
    boxShadow: "none",
  },
  ':where(.rf-paper-surface) .rf-textarea-field[data-surface="auto"] .rf-textarea-tablet':
    {
      padding: "0",
      background: "transparent",
      border: "0",
      boxShadow: "none",
    },
  '.rf-textarea-field[data-surface="integrated"] .rf-textarea-tablet::before, .rf-textarea-field[data-surface="integrated"] .rf-textarea-tablet::after':
    {
      display: "none",
    },
  ':where(.rf-paper-surface) .rf-textarea-field[data-surface="auto"] .rf-textarea-tablet::before, :where(.rf-paper-surface) .rf-textarea-field[data-surface="auto"] .rf-textarea-tablet::after':
    {
      display: "none",
    },
  '.rf-textarea-field[data-surface="integrated"] .rf-textarea': {
    background:
      "repeating-linear-gradient(transparent 0 23px, var(--rf-rule) 23px 24px) 0 12px / 100% 24px",
    border: "0",
    borderBottom: "1px solid var(--rf-control-edge)",
    boxShadow: "none",
  },
  ':where(.rf-paper-surface) .rf-textarea-field[data-surface="auto"] .rf-textarea':
    {
      background:
        "repeating-linear-gradient(transparent 0 23px, var(--rf-rule) 23px 24px) 0 12px / 100% 24px",
      border: "0",
      borderBottom: "1px solid var(--rf-control-edge)",
      boxShadow: "none",
    },
  '.rf-textarea-field[data-surface] .rf-textarea[aria-invalid="true"]': {
    borderBottom: "2px solid var(--rf-paper-error)",
    boxShadow: "inset 2px 0 0 var(--rf-paper-error)",
  },
  ".rf-textarea-field[data-surface] .rf-textarea:disabled": {
    color: "var(--rf-paper-muted)",
    borderBottomStyle: "dashed",
  },
  ".rf-textarea-field[data-surface] .rf-textarea[readonly]": {
    borderBottomStyle: "dashed",
  },
});
