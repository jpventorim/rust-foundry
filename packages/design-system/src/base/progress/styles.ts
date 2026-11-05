import { defineGlobalStyles } from "@pandacss/dev";

export const progressStyles = defineGlobalStyles({
  ".rf-progress": {
    width: "100%",
  },
  ".rf-progress-value": {
    fontSize: "0.78rem",
    fontWeight: "650",
  },
  ".rf-progress-track": {
    marginTop: "7px",
    height: "13px",
    overflow: "hidden",
    background: "#b4a78d",
    border: "1px solid #9b896a",
    borderRadius: "4px",
    boxShadow: "inset 0 2px 3px #30271e50, 0 1px 0 #fff9",
  },
  ".rf-progress-indicator": {
    height: "100%",
    borderRadius: "2px",
    background:
      "linear-gradient(#ffffff40, transparent 50%, #0003), var(--rf-accent)",
    boxShadow: "inset 0 1px 0 #fff7, inset -1px 0 0 #fff4",
    transition: "width 400ms var(--rf-ease)",
  },
  ".rf-progress[data-indeterminate] .rf-progress-indicator": {
    width: "30%",
    animation: "rf-loading 1.5s ease-in-out infinite alternate",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-progress[data-indeterminate] .rf-progress-indicator": {
      width: "100%",
      opacity: "0.5",
    },
  },
  "@media (forced-colors: active)": {
    ".rf-progress-indicator, .rf-checkbox[data-checked], .rf-radio[data-checked], .rf-switch[data-checked]":
      {
        forcedColorAdjust: "none",
        background: "Highlight",
        color: "HighlightText",
      },
  },
});
