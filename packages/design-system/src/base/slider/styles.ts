import { defineGlobalStyles } from "@pandacss/dev";

export const sliderStyles = defineGlobalStyles({
  ".rf-slider": {
    width: "100%",
  },
  ".rf-slider-value": {
    fontVariantNumeric: "tabular-nums",
    fontWeight: "700",
    color: "var(--rf-brass)",
  },
  ".rf-slider-control": {
    display: "flex",
    alignItems: "center",
    height: "44px",
    touchAction: "none",
    userSelect: "none",
  },
  ".rf-slider-track": {
    width: "100%",
    height: "8px",
    borderRadius: "8px",
    background: "#c4b391",
    boxShadow: "inset 0 2px 3px #30271e40, 0 1px 0 #fff",
  },
  ".rf-slider-indicator": {
    background: "linear-gradient(#b58a39, #8f631b)",
    borderRadius: "8px",
  },
  ".rf-slider-thumb": {
    width: "24px",
    height: "24px",
    background: "linear-gradient(135deg, #fff3cd, #c29143)",
    borderRadius: "5px",
    border: "1px solid #7e5c27",
    boxShadow: "inset 0 0 0 3px #fff4, 0 2px 3px #30271e40",
    transition: "box-shadow 150ms",
  },
  ".rf-slider-thumb[data-dragging]": {
    boxShadow: "0 0 0 6px #9b6d2526, 0 2px 3px #30271e40",
  },
  ".rf-slider[data-disabled] .rf-slider-control": {
    opacity: "0.6",
  },
});
