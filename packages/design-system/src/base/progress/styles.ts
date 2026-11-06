import { defineGlobalStyles } from "@pandacss/dev";

export const progressStyles = defineGlobalStyles({
  ".rf-progress": {
    width: "100%",
    minWidth: "0",
  },
  ".rf-progress-heading": {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "12px",
    padding: "0 0 6px",
    background: "transparent",
    color: "var(--rf-ink)",
    border: "0",
    borderBottom: "0",
    marginInline: "0",
  },
  ".rf-progress-heading .rf-label": {
    minWidth: "0",
    overflowWrap: "anywhere",
  },
  ".rf-progress-value": {
    marginInlineStart: "auto",
    flexShrink: "0",
    fontSize: "0.78rem",
    fontWeight: "700",
    fontVariantNumeric: "tabular-nums",
  },
  ".rf-progress-complete": {
    display: "none",
  },
  ".rf-progress[data-complete] .rf-progress-complete": {
    display: "inline",
  },
  ".rf-progress-channel": {
    position: "relative",
    padding: "7px 13px 9px",
    background: "var(--rf-wood-texture)",
    border: "1px solid #39291f",
    borderBottom: "3px solid #39291f",
    borderRadius: "1px",
    boxShadow: "inset 0 1px 0 var(--rf-edge-light), var(--rf-depth-mounted)",
    "&::before": {
      content: '""',
      position: "absolute",
      insetBlock: "-2px",
      insetInlineStart: "2px",
      width: "6px",
      background:
        "radial-gradient(circle at center 5px, #d5c6a7 0 1px, #182126 1px 2px, transparent 2.5px), radial-gradient(circle at center calc(100% - 5px), #d5c6a7 0 1px, #182126 1px 2px, transparent 2.5px), var(--rf-iron-texture)",
      border: "1px solid #20292c",
      boxShadow: "inset 0 1px 0 #88918a",
      pointerEvents: "none",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      insetBlock: "-2px",
      insetInlineEnd: "2px",
      width: "6px",
      background:
        "radial-gradient(circle at center 5px, #d5c6a7 0 1px, #182126 1px 2px, transparent 2.5px), radial-gradient(circle at center calc(100% - 5px), #d5c6a7 0 1px, #182126 1px 2px, transparent 2.5px), var(--rf-iron-texture)",
      border: "1px solid #20292c",
      boxShadow: "inset 0 1px 0 #88918a",
      pointerEvents: "none",
    },
  },
  ".rf-progress-track": {
    position: "relative",
    height: "16px",
    overflow: "hidden",
    background: "var(--rf-iron-texture)",
    outline: "1px solid #1d2629",
    boxShadow: "inset 0 2px 0 #151d22, 0 1px 0 #c99d6d",
    "&::after": {
      content: '""',
      position: "absolute",
      inset: "0",
      background:
        "repeating-linear-gradient(90deg, transparent 0 calc(10% - 1px), #fff4df99 calc(10% - 1px) 10%) bottom / 100% 4px no-repeat",
      pointerEvents: "none",
    },
  },
  ".rf-progress-indicator": {
    position: "relative",
    overflow: "hidden",
    height: "100%",
    background:
      "var(--rf-iron-grain), linear-gradient(0deg, #00000018, transparent 45%, #ffffff28), var(--rf-accent)",
    boxShadow: "inset 0 1px 0 #fff7, inset 0 -2px 0 #0004",
    transition: "width 400ms var(--rf-ease)",
    "&::after": {
      content: '""',
      position: "absolute",
      insetBlock: "0",
      insetInlineEnd: "0",
      width: "2px",
      background: "#fff0d2",
      boxShadow: "-1px 0 0 #30271e80",
    },
  },
  ".rf-progress[data-indeterminate] .rf-progress-indicator": {
    width: "30%",
    animation: "rf-loading 1.5s ease-in-out infinite alternate",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-progress-indicator": {
      transition: "none",
    },
    ".rf-progress[data-indeterminate] .rf-progress-indicator": {
      animation: "none",
      transform: "none",
      width: "40%",
      marginInline: "30%",
    },
  },
  "@media (forced-colors: active)": {
    ".rf-progress-heading": {
      background: "Canvas",
      color: "CanvasText",
      borderColor: "CanvasText",
    },
    ".rf-progress-channel, .rf-progress-track": {
      background: "Canvas",
      borderColor: "CanvasText",
      outlineColor: "CanvasText",
      boxShadow: "none",
    },
    ".rf-progress-channel::before, .rf-progress-channel::after, .rf-progress-track::after, .rf-progress-indicator::after":
      {
        display: "none",
      },
    ".rf-progress-indicator": {
      forcedColorAdjust: "none",
      background: "Highlight",
      boxShadow: "none",
    },
  },
});
