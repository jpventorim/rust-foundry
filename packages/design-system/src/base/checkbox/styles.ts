import { defineGlobalStyles } from "@pandacss/dev";

export const checkboxStyles = defineGlobalStyles({
  ".rf-checkbox-choice": {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    minHeight: "44px",
    maxWidth: "100%",
    width: "fit-content",
    fontSize: "0.9375rem",
    lineHeight: "1.6",
    cursor: "pointer",
  },
  ".rf-checkbox-choice > span": {
    minWidth: "0",
    overflowWrap: "anywhere",
  },
  ".rf-checkbox-choice:has(.rf-checkbox[data-disabled])": {
    cursor: "not-allowed",
  },
  ".rf-checkbox": {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 44px",
    width: "44px",
    height: "44px",
    padding: "0",
    border: "0",
    borderRadius: "2px",
    background: "transparent",
    cursor: "inherit",
    isolation: "isolate",
    WebkitTapHighlightColor: "transparent",
  },
  ".rf-checkbox::before": {
    content: '""',
    position: "absolute",
    width: "30px",
    height: "30px",
    boxSizing: "border-box",
    border: "3px solid #30383a",
    borderRadius: "2px",
    background: "var(--rf-wood-texture)",
    boxShadow: "inset 0 1px 0 var(--rf-edge-light), var(--rf-depth-mounted)",
    pointerEvents: "none",
  },
  ".rf-checkbox:hover:not([data-disabled])::before": {
    borderColor: "#697274",
  },
  ".rf-checkbox:focus-visible": {
    outline: "3px solid var(--rf-focus)",
    outlineOffset: "2px",
  },
  ".rf-checkbox:active:not([data-disabled]) .rf-checkbox-indicator": {
    transform: "translateY(1px)",
    boxShadow: "inset 0 2px 2px #6a451e80, 0 1px 0 #fff0b866",
  },
  ".rf-checkbox[data-disabled]::before": {
    borderColor: "#62635c",
    boxShadow: "inset 0 1px 0 #ab8260, 0 1px 0 #201b17",
  },
  ".rf-checkbox[data-disabled] .rf-checkbox-indicator": {
    background: "var(--rf-paper-texture)",
    color: "var(--rf-paper-ink)",
    borderColor: "#81715b",
    boxShadow: "inset 0 1px 0 #fff8e8, inset 0 -1px 0 #b9a27c",
    "--rf-ink": "var(--rf-paper-ink)",
    "--rf-muted": "var(--rf-paper-muted)",
    "--rf-focus": "var(--rf-paper-focus)",
    "--rf-error": "var(--rf-paper-error)",
  },
  ".rf-checkbox::after": {
    content: '""',
    position: "absolute",
    width: "20px",
    height: "20px",
    border: "1px solid #191f21",
    borderRadius: "1px",
    background: "var(--rf-iron-texture)",
    boxShadow: "inset 0 2px 3px #0009, 0 1px 0 #ab826080",
    pointerEvents: "none",
  },
  ".rf-checkbox-indicator": {
    "--rf-on-accent": "#30220f",
    zIndex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    boxSizing: "border-box",
    border: "1px solid #8a6326",
    borderRadius: "1px",
    background: "var(--rf-gold-texture)",
    color: "var(--rf-on-accent)",
    boxShadow: "inset 0 1px 0 #fff0b8, inset 0 -2px 0 #a27732, 0 1px 2px #0008",
    transition:
      "transform 160ms var(--rf-ease), box-shadow 160ms var(--rf-ease)",
    pointerEvents: "none",
  },
  ".rf-checkbox[data-indeterminate] .rf-checkbox-indicator svg": {
    display: "none",
  },
  ".rf-checkbox-indicator svg": {
    flexShrink: "0",
    filter: "drop-shadow(0 1px 0 #fff0b8)",
  },
  ".rf-checkbox[data-indeterminate] .rf-checkbox-indicator::after": {
    content: '""',
    width: "11px",
    height: "3px",
    background: "currentColor",
    boxShadow: "0 1px 0 #fff0b8",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-checkbox-indicator": {
      transition: "none",
    },
    ".rf-checkbox:active:not([data-disabled]) .rf-checkbox-indicator": {
      transform: "none",
    },
  },
  "@media (forced-colors: active)": {
    ".rf-checkbox::before, .rf-checkbox::after": {
      background: "Canvas",
      borderColor: "ButtonText",
      boxShadow: "none",
    },
    ".rf-checkbox-indicator": {
      background: "Highlight",
      color: "HighlightText",
      borderColor: "Highlight",
      boxShadow: "none",
      forcedColorAdjust: "none",
    },
    ".rf-checkbox:focus-visible": {
      outlineColor: "Highlight",
    },
    ".rf-checkbox:hover:not([data-disabled])::before": {
      borderColor: "ButtonText",
    },
    ".rf-checkbox-indicator svg": {
      filter: "none",
    },
    ".rf-checkbox[data-disabled]::before": {
      borderColor: "GrayText",
      boxShadow: "none",
    },
    ".rf-checkbox[data-disabled] .rf-checkbox-indicator": {
      background: "Canvas",
      color: "GrayText",
      borderColor: "GrayText",
      boxShadow: "none",
    },
    ".rf-checkbox[data-indeterminate] .rf-checkbox-indicator::after": {
      boxShadow: "none",
    },
  },
});
