import { defineGlobalStyles } from "@pandacss/dev";

export const switchStyles = defineGlobalStyles({
  ".rf-switch-choice": {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    minHeight: "44px",
    cursor: "pointer",
  },
  ".rf-switch": {
    position: "relative",
    display: "inline-block",
    width: "92px",
    height: "44px",
    flex: "0 0 auto",
    padding: "0",
    borderRadius: "2px",
    border: "2px solid #392315",
    background: "var(--rf-wood-texture)",
    backgroundSize: "160px 80px, auto, auto",
    boxShadow:
      "inset 0 1px 0 #d8a46870, inset 0 -3px 0 #1b100b70, 1px 2px 0 #24170d70",
    cursor: "pointer",
  },
  ".rf-switch::before": {
    content: "''",
    position: "absolute",
    inset: "11px 8px 14px",
    border: "1px solid #171c1d",
    background: "#171b1b",
    boxShadow: "inset 0 2px 3px #0009, 0 1px 0 #d5a77050",
  },
  ".rf-switch-keeper": {
    position: "absolute",
    top: "8px",
    left: "12px",
    width: "10px",
    height: "23px",
    zIndex: "2",
    border: "1px solid #171b1d",
    borderRadius: "1px",
    background:
      "radial-gradient(circle at 50% 3px, #c0c7c8 0 1px, #171c1d 1px 2px, transparent 2px), radial-gradient(circle at 50% 18px, #c0c7c8 0 1px, #171c1d 1px 2px, transparent 2px), var(--rf-iron-texture)",
    boxShadow: "inset 1px 0 0 #ffffff35, 1px 1px 1px #0008",
    pointerEvents: "none",
  },
  ".rf-switch-keeper-end": { left: "66px" },
  ".rf-switch-thumb": {
    position: "absolute",
    top: "13px",
    left: "11px",
    width: "46px",
    height: "11px",
    borderRadius: "1px",
    border: "1px solid #171c1d",
    background:
      "linear-gradient(180deg, #ffffff20, transparent 45%, #0005), var(--rf-iron-texture)",
    boxShadow: "inset 0 2px 0 #c5cacc70, 0 2px 2px #0009",
    transition: "transform 200ms var(--rf-ease)",
  },
  ".rf-switch-thumb::after": {
    content: "''",
    position: "absolute",
    left: "19px",
    top: "-8px",
    width: "10px",
    height: "25px",
    zIndex: "3",
    border: "1px solid #161b1d",
    borderRadius: "2px 2px 1px 1px",
    background:
      "repeating-linear-gradient(0deg, transparent 0 5px, #11181a80 5px 6px, #ffffff30 6px 7px), var(--rf-iron-texture)",
    boxShadow: "inset 2px 0 0 #d3d8db60, 2px 2px 1px #0009",
  },
  ".rf-switch[data-checked] .rf-switch-thumb": {
    transform: "translateX(20px)",
  },
  ".rf-switch-state": {
    position: "absolute",
    bottom: "0px",
    left: "5px",
    color: "var(--rf-wood-ink)",
    fontSize: "9px",
    lineHeight: "12px",
    fontWeight: "800",
    letterSpacing: "0.08em",
    pointerEvents: "none",
  },
  ".rf-switch-state-off": {
    textDecoration: "underline",
    textUnderlineOffset: "2px",
  },
  ".rf-switch-state-on": { left: "auto", right: "5px", fontWeight: "600" },
  ".rf-switch[data-checked] .rf-switch-state-off": {
    fontWeight: "600",
    textDecoration: "none",
  },
  ".rf-switch[data-checked] .rf-switch-state-on": {
    fontWeight: "800",
    textDecoration: "underline",
    textUnderlineOffset: "2px",
  },
  ".rf-switch:focus-visible": {
    outline: "3px solid var(--rf-focus)",
    outlineOffset: "4px",
  },
  ".rf-switch:not([data-disabled]):hover": { borderColor: "#bd9564" },
  ".rf-switch:not([data-disabled]):active .rf-switch-thumb::after": {
    boxShadow: "inset 1px 0 0 #d3d8db50, 1px 1px 0 #0009",
  },
  ".rf-switch[data-disabled]": { opacity: "0.55", cursor: "not-allowed" },
  ".rf-switch-choice:has([data-disabled])": { cursor: "not-allowed" },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-switch-thumb": { transition: "none" },
  },
  "@media (forced-colors: active)": {
    ".rf-switch, .rf-switch-keeper, .rf-switch-thumb, .rf-switch-thumb::after":
      {
        background: "Canvas",
        borderColor: "ButtonText",
        boxShadow: "none",
      },
    ".rf-switch::before": {
      background: "Canvas",
      borderColor: "ButtonText",
      boxShadow: "none",
    },
    ".rf-switch .rf-switch-state": { color: "ButtonText", opacity: "1" },
    ".rf-switch[data-checked] .rf-switch-thumb::after": {
      background: "Highlight",
    },
    ".rf-switch[data-disabled]": { opacity: "1", borderColor: "GrayText" },
    ".rf-switch:focus-visible": { outlineColor: "Highlight" },
  },
});
