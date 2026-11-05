import { defineGlobalStyles } from "@pandacss/dev";

export const buttonStyles = defineGlobalStyles({
  ".rf-button": {
    appearance: "none",
    position: "relative",
    isolation: "isolate",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    boxSizing: "border-box",
    maxWidth: "100%",
    overflowWrap: "anywhere",
    textAlign: "center",
    minHeight: "44px",
    minWidth: "44px",
    padding: "10px 22px",
    border: "2px solid #20282b",
    borderRadius: "3px",
    cursor: "pointer",
    color: "var(--rf-on-accent, #fff4df)",
    fontWeight: "700",
    fontSize: "0.87rem",
    lineHeight: "1.4",
    background:
      "var(--rf-wood-grain), linear-gradient(180deg, #ffffff0a, #00000014), var(--rf-accent, #912e38)",
    boxShadow:
      "inset 0 1px 0 #ffffff45, inset 0 -2px 0 #00000040, 0 4px 0 #20282b, 0 5px 0 #101719, 1px 6px 2px #17120f40",
    textShadow: "0 1px 0 #00000050",
    transition:
      "transform 160ms var(--rf-ease), box-shadow 160ms var(--rf-ease), background-color 160ms",
  },
  ".rf-button::before": {
    content: '""',
    position: "absolute",
    inset: "3px",
    pointerEvents: "none",
    border: "1px solid #ffffff25",
    borderBottomColor: "#00000040",
    borderRadius: "1px",
  },
  ".rf-button:hover:not(:disabled, [data-disabled])": {
    boxShadow:
      "inset 0 1px 0 #ffffff70, inset 0 -2px 0 #00000040, inset 0 0 0 2px #ffffff16, 0 4px 0 #20282b, 0 5px 0 #101719, 1px 6px 2px #17120f40",
  },
  ".rf-button:active:not(:disabled, [data-disabled])": {
    transform: "translateY(3px)",
    boxShadow:
      "inset 0 2px 0 #00000050, inset 0 0 0 1px #00000024, 0 1px 0 #20282b, 0 2px 0 #101719",
  },
  '.rf-button[data-variant="outline"]': {
    background: "var(--rf-paper-texture)",
    color: "var(--rf-ink)",
    borderColor: "#593b2b",
    textShadow: "none",
    boxShadow:
      "inset 0 1px 0 #fff8, inset 0 0 0 2px var(--rf-accent), 0 4px 0 #38261c, 0 5px 0 #201910",
  },
  '.rf-button[data-variant="outline"]:hover:not(:disabled, [data-disabled])': {
    boxShadow:
      "inset 0 1px 0 #fff8, inset 0 0 0 3px var(--rf-accent), 0 4px 0 #38261c, 0 5px 0 #201910",
  },
  '.rf-button[data-variant="outline"]:active:not(:disabled, [data-disabled])': {
    boxShadow:
      "inset 0 2px 0 #593b2b40, inset 0 0 0 2px var(--rf-accent), 0 1px 0 #38261c, 0 2px 0 #201910",
  },
  '.rf-button[data-tone="gold"]': {
    textShadow: "none",
  },
  '.rf-button[data-variant="ghost"]': {
    color: "var(--rf-ink)",
    background: "transparent",
    borderColor: "transparent",
    boxShadow: "none",
    textShadow: "none",
  },
  '.rf-button[data-variant="ghost"]::before': {
    borderColor: "transparent",
  },
  '.rf-button[data-variant="ghost"]:hover:not(:disabled, [data-disabled])': {
    background: "var(--rf-paper-texture)",
    borderColor: "#665541",
    boxShadow: "inset 0 -2px 0 #b9a27c",
  },
  '.rf-button[data-variant="ghost"]:active:not(:disabled, [data-disabled])': {
    transform: "translateY(1px)",
    background: "var(--rf-paper-texture)",
    borderColor: "#665541",
    boxShadow: "inset 0 2px 0 #66554140",
  },
  ".rf-button:focus-visible": {
    outline: "3px solid var(--rf-focus, #204f91)",
    outlineOffset: "4px",
  },
  ".rf-button:focus-visible::after": {
    content: '""',
    position: "absolute",
    inset: "-5px",
    border: "2px solid #fff8e8",
    borderRadius: "4px",
    pointerEvents: "none",
  },
  '.rf-button[data-size="sm"]': {
    padding: "6px 14px",
    fontSize: "0.78rem",
  },
  ".rf-button:is(:disabled, [data-disabled])": {
    cursor: "not-allowed",
    boxShadow: "inset 0 1px 0 #fff8, 0 1px 0 #665541",
    background: "var(--rf-paper-grain), #ded5c3",
    color: "#665541",
    borderColor: "#8a7a63",
    textShadow: "none",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-button": { transition: "none" },
    ".rf-button:active:not(:disabled, [data-disabled]), .rf-button[data-variant=ghost]:active:not(:disabled, [data-disabled])":
      { transform: "none" },
  },
  "@media (forced-colors: active)": {
    ".rf-button, .rf-button[data-variant]": {
      background: "ButtonFace",
      color: "ButtonText",
      borderColor: "ButtonText",
      boxShadow: "none",
      textShadow: "none",
    },
    ".rf-button::before, .rf-button::after": { display: "none" },
    ".rf-button[data-variant]:is(:hover, :active):not(:disabled, [data-disabled])":
      {
        background: "ButtonFace",
        boxShadow: "none",
        borderColor: "Highlight",
      },
    ".rf-button:focus-visible": { outlineColor: "Highlight" },
    ".rf-button:is(:disabled, [data-disabled])": {
      color: "GrayText",
      borderColor: "GrayText",
    },
  },
});
