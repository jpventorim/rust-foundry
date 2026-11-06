import { defineGlobalStyles } from "@pandacss/dev";

export const radioGroupStyles = defineGlobalStyles({
  ".rf-radio-field": {
    display: "grid",
    gap: "8px",
    minWidth: "0",
  },
  ".rf-radio-label": {
    color: "var(--rf-ink)",
    fontSize: "var(--rf-label-size)",
    fontWeight: "600",
    lineHeight: "1.6",
    overflowWrap: "anywhere",
  },
  ".rf-radio-group": {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px 20px",
    minWidth: "0",
  },
  ".rf-radio-choice": {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    minHeight: "44px",
    maxWidth: "100%",
    color: "var(--rf-ink)",
    fontSize: "0.9375rem",
    lineHeight: "1.6",
    cursor: "pointer",
  },
  ".rf-radio-choice > span": {
    minWidth: "0",
    overflowWrap: "anywhere",
  },
  ".rf-radio-choice:has(.rf-radio[data-disabled])": {
    color: "var(--rf-muted)",
    cursor: "not-allowed",
  },
  ".rf-radio": {
    position: "relative",
    isolation: "isolate",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 44px",
    width: "44px",
    height: "44px",
    padding: "0",
    border: "0",
    borderRadius: "50%",
    background: "transparent",
    cursor: "inherit",
    WebkitTapHighlightColor: "transparent",
  },
  ".rf-radio::before": {
    content: '""',
    position: "absolute",
    width: "32px",
    height: "32px",
    boxSizing: "border-box",
    border: "3px solid #293236",
    borderRadius: "50%",
    background: "var(--rf-wood-texture)",
    boxShadow: "inset 0 1px 0 var(--rf-edge-light), var(--rf-depth-mounted)",
    pointerEvents: "none",
  },
  ".rf-radio::after": {
    content: '""',
    position: "absolute",
    width: "20px",
    height: "20px",
    boxSizing: "border-box",
    border: "1px solid #161e20",
    borderRadius: "50%",
    background: "var(--rf-iron-texture)",
    boxShadow: "inset 0 3px 3px #000b, 0 1px 0 #b5916980",
    pointerEvents: "none",
  },
  ".rf-radio:hover:not([data-disabled])::before": {
    borderColor: "#697578",
  },
  ".rf-radio:focus-visible": {
    outline: "3px solid var(--rf-focus)",
    outlineOffset: "2px",
  },
  ".rf-radio-indicator": {
    zIndex: "1",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "19px",
    height: "19px",
    boxSizing: "border-box",
    border: "1px solid #815f28",
    borderRadius: "50%",
    background: "var(--rf-gold-texture)",
    boxShadow: "inset 0 1px 0 #fff1bf, inset 0 -2px 0 #a3782d, 0 2px 2px #0009",
    transition:
      "transform 160ms var(--rf-ease), box-shadow 160ms var(--rf-ease)",
    pointerEvents: "none",
  },
  ".rf-radio-indicator::after": {
    content: '""',
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: "#30271e",
    boxShadow: "0 1px 0 #fff1bf",
  },
  ".rf-radio:active:not([data-disabled]) .rf-radio-indicator": {
    transform: "translateY(1px)",
    boxShadow: "inset 0 2px 2px #6a451e80, 0 1px 0 #fff1bf66",
  },
  ".rf-radio[data-disabled]::before": {
    borderColor: "#62635c",
    boxShadow: "inset 0 1px 0 #ba9066, 0 1px 0 #171e21",
  },
  ".rf-radio[data-disabled] .rf-radio-indicator": {
    background: "var(--rf-paper-texture)",
    borderColor: "#81715b",
    boxShadow: "inset 0 1px 0 #fff8e8, inset 0 -1px 0 #b9a27c",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-radio-indicator": {
      transition: "none",
    },
    ".rf-radio:active:not([data-disabled]) .rf-radio-indicator": {
      transform: "none",
    },
  },
  "@media (forced-colors: active)": {
    ".rf-radio-choice, .rf-radio-label": {
      color: "CanvasText",
    },
    ".rf-radio::before, .rf-radio::after": {
      background: "Canvas",
      borderColor: "ButtonText",
      boxShadow: "none",
    },
    ".rf-radio-indicator": {
      background: "Highlight",
      borderColor: "Highlight",
      boxShadow: "none",
      forcedColorAdjust: "none",
    },
    ".rf-radio-indicator::after": {
      background: "HighlightText",
      boxShadow: "none",
    },
    ".rf-radio:focus-visible": {
      outlineColor: "Highlight",
    },
    ".rf-radio:hover:not([data-disabled])::before": {
      borderColor: "ButtonText",
    },
    ".rf-radio-choice:has(.rf-radio[data-disabled])": {
      color: "GrayText",
    },
    ".rf-radio[data-disabled]::before, .rf-radio[data-disabled]::after": {
      borderColor: "GrayText",
    },
    ".rf-radio[data-disabled] .rf-radio-indicator": {
      background: "Canvas",
      borderColor: "GrayText",
      boxShadow: "none",
    },
    ".rf-radio[data-disabled] .rf-radio-indicator::after": {
      background: "GrayText",
    },
  },
});
