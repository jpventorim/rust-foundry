import { defineGlobalStyles } from "@pandacss/dev";

export const sliderStyles = defineGlobalStyles({
  ".rf-slider": {
    width: "100%",
    minWidth: "0",
  },
  ".rf-slider-heading": {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: "12px",
  },
  ".rf-slider-heading .rf-label": {
    minWidth: "0",
    overflowWrap: "anywhere",
  },
  ".rf-slider-value": {
    flexShrink: "0",
    minWidth: "3ch",
    paddingInline: "6px",
    color: "var(--rf-ink, #30271e)",
    background: "var(--rf-paper-texture)",
    border: "1px solid var(--rf-border, #b9a27c)",
    borderBottomWidth: "2px",
    fontVariantNumeric: "tabular-nums",
    fontWeight: "700",
    textAlign: "center",
  },
  ".rf-slider-control": {
    display: "flex",
    alignItems: "center",
    position: "relative",
    minHeight: "52px",
    marginInline: "22px",
    touchAction: "none",
    userSelect: "none",
    cursor: "pointer",
  },
  ".rf-slider-track": {
    position: "relative",
    width: "100%",
    height: "26px",
    border: "1px solid #281b14",
    borderBottomWidth: "3px",
    borderRadius: "1px",
    background:
      "repeating-linear-gradient(90deg, #f3e8cfb3 0 1px, transparent 1px 10%), var(--rf-wood-texture)",
    backgroundSize: "100% 5px, auto, auto, auto",
    backgroundRepeat: "no-repeat, repeat, repeat, repeat",
    boxShadow: "0 2px 0 #30271e33",
    isolation: "isolate",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: "8px -1px 7px",
      background: "var(--rf-iron-texture)",
      borderBlock: "1px solid #1d2528",
      boxShadow: "0 1px 0 #ad9c7b",
      zIndex: "-1",
    },
  },
  ".rf-slider-indicator": {
    "&::after": {
      content: '""',
      position: "absolute",
      insetInline: "0",
      top: "10px",
      height: "3px",
      background: "#e3b958",
    },
  },
  ".rf-slider-thumb": {
    width: "44px",
    height: "44px",
    background: "transparent",
    border: "0",
    borderRadius: "0",
    cursor: "grab",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: "5px 7px",
      background: "var(--rf-iron-texture)",
      border: "1px solid #20292b",
      borderBottom: "3px solid #e3b958",
      borderRadius: "2px",
      boxShadow: "inset 0 1px 0 #9ba3a4, 2px 2px 0 #1c171c66",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      inset: "14px 15px",
      background:
        "repeating-linear-gradient(90deg, #c6c6b9 0 1px, #20292b 1px 3px, transparent 3px 5px)",
      pointerEvents: "none",
    },
  },
  ".rf-slider-thumb[data-dragging]": {
    cursor: "grabbing",
  },
  ".rf-slider-thumb[data-dragging]::before": {
    borderColor: "#e3b958",
    boxShadow: "inset 0 1px 0 #9ba3a4, 1px 1px 0 #1c171c66",
  },
  ".rf-slider-thumb:focus-visible::before, .rf-slider-thumb:has(:focus-visible)::before":
    {
      outline: "3px solid var(--rf-focus, #204f91)",
      outlineOffset: "3px",
    },
  ".rf-slider[data-disabled] .rf-slider-control, .rf-slider[data-disabled] .rf-slider-thumb":
    {
      cursor: "not-allowed",
    },
  ".rf-slider[data-disabled] .rf-slider-thumb::before": {
    borderBottomColor: "#b9a27c",
    boxShadow: "inset 0 1px 0 #9ba3a4",
  },
  ".rf-slider[data-disabled] .rf-slider-indicator::after": {
    background: "#b9a27c",
  },
  '.rf-slider[data-orientation="vertical"] .rf-slider-control': {
    width: "52px",
    height: "200px",
    marginInline: "0",
    marginBlock: "22px",
    justifyContent: "center",
  },
  '.rf-slider[data-orientation="vertical"] .rf-slider-track': {
    width: "26px",
    height: "100%",
    background:
      "repeating-linear-gradient(0deg, #f3e8cfb3 0 1px, transparent 1px 10%), var(--rf-wood-texture)",
    backgroundSize: "5px 100%, auto, auto, auto",
  },
  '.rf-slider[data-orientation="vertical"] .rf-slider-track::before': {
    inset: "-1px 7px -1px 8px",
    borderBlock: "0",
    borderInline: "1px solid #1d2528",
  },
  '.rf-slider[data-orientation="vertical"] .rf-slider-indicator::after': {
    insetInlineStart: "10px",
    insetInlineEnd: "auto",
    top: "0",
    width: "3px",
    height: "100%",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-slider-thumb, .rf-slider-thumb::before, .rf-slider-indicator": {
      transition: "none",
      animation: "none",
    },
  },
  "@media (forced-colors: active)": {
    ".rf-slider-value, .rf-slider-track, .rf-slider-track::before, .rf-slider-thumb::before":
      {
        background: "Canvas",
        color: "CanvasText",
        borderColor: "CanvasText",
        boxShadow: "none",
      },
    ".rf-slider-indicator::after, .rf-slider-thumb::after": {
      background: "Highlight",
      forcedColorAdjust: "none",
    },
    ".rf-slider-thumb:focus-visible::before, .rf-slider-thumb:has(:focus-visible)::before":
      {
        outlineColor: "Highlight",
      },
    ".rf-slider[data-disabled] .rf-slider-thumb::before": {
      borderColor: "GrayText",
    },
    ".rf-slider[data-disabled] .rf-slider-indicator::after": {
      background: "GrayText",
    },
  },
});
