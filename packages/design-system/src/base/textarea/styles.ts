import { defineGlobalStyles } from "@pandacss/dev";

export const textareaStyles = defineGlobalStyles({
  ".rf-textarea-field": {
    minWidth: "0",
  },
  ".rf-textarea-tablet": {
    minWidth: "0",
    padding: "6px",
    border: "1px solid #33251c",
    borderBottomWidth: "3px",
    borderRadius: "1px",
    background: "var(--rf-wood-texture)",
    boxShadow: "inset 0 1px 0 #ffffff24, 1px 3px 0 #30271e24",
  },
  ".rf-textarea": {
    display: "block",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "100%",
    minWidth: "0",
    minHeight: "144px",
    padding: "12px 16px",
    border: "1px solid #a28b68",
    borderBottomWidth: "3px",
    borderRadius: "1px",
    font: "inherit",
    fontSize: "15px",
    lineHeight: "24px",
    color: "#30271e",
    background:
      "repeating-linear-gradient(transparent 0 23px, #66554118 23px 24px) 0 12px / 100% 24px, var(--rf-paper-texture)",
    boxShadow: "inset 2px 0 0 #fff8, 0 1px 0 #241a14",
    resize: "vertical",
    transition: "border-color 160ms",
  },
  ".rf-textarea::placeholder": {
    color: "#665541",
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
    ".rf-textarea": { transition: "none" },
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
    ".rf-textarea::placeholder": { color: "GrayText" },
    '.rf-textarea:hover:not(:disabled):not([aria-invalid="true"])': {
      borderColor: "CanvasText",
    },
    ".rf-textarea:disabled": {
      color: "GrayText",
      borderColor: "GrayText",
      background: "Canvas",
    },
    ".rf-textarea:focus-visible": { outlineColor: "Highlight" },
    '.rf-textarea[aria-invalid="true"]': {
      borderStyle: "dashed",
      borderColor: "CanvasText",
      boxShadow: "none",
    },
  },
});
