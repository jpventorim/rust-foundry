import { defineGlobalStyles } from "@pandacss/dev";

export const tabsStyles = defineGlobalStyles({
  ".rf-tabs": { minWidth: "0" },
  ".rf-tabs-list": {
    display: "flex",
    gap: "8px",
    minWidth: "0",
    overflowX: "auto",
    padding: "8px 8px 10px",
    border: "2px solid #16191a",
    borderRadius: "2px",
    background: "var(--rf-iron-texture)",
    boxShadow: "inset 0 1px 0 #626466, inset 0 -4px 0 #191c1d, 0 2px 0 #17191a",
    scrollbarWidth: "thin",
    scrollbarColor: "#b19a70 #242829",
  },
  ".rf-tab": {
    position: "relative",
    flex: "0 0 auto",
    minHeight: "48px",
    minWidth: "44px",
    padding: "10px 22px",
    border: "1px solid #24160e",
    borderRadius: "2px",
    background: "var(--rf-wood-texture)",
    color: "var(--rf-wood-ink, #fff0cb)",
    fontFamily: "Georgia, serif",
    fontSize: "15px",
    fontWeight: "700",
    lineHeight: "1.4",
    whiteSpace: "nowrap",
    textShadow: "0 1px 0 #28190e",
    boxShadow:
      "inset 0 1px 0 #977044, inset 0 -3px 0 #332015, 0 2px 2px #101112",
    cursor: "pointer",
    transition: "background-color 160ms, color 160ms, box-shadow 160ms",
    "&::before": {
      content: '""',
      position: "absolute",
      insetInlineStart: "7px",
      top: "calc(50% - 2px)",
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      backgroundColor: "#181b1b",
      boxShadow: "0 1px 0 #a48a5c",
      pointerEvents: "none",
    },
  },
  ".rf-tab:hover:not([data-disabled]):not([data-active])": {
    background: "linear-gradient(#f2c98316, #f2c98316), var(--rf-wood-texture)",
    boxShadow:
      "inset 0 1px 0 #ba915b, inset 0 -3px 0 #332015, 0 2px 2px #101112",
  },
  ".rf-tab[data-active]": {
    background: "var(--rf-paper-texture)",
    borderColor: "#c2a363",
    color: "#302310",
    textShadow: "none",
    boxShadow:
      "inset 0 1px 0 #fff6d8, inset 0 -4px 0 #b78028, 0 2px 2px #101112",
  },
  ".rf-tabs-list .rf-tab:focus-visible": {
    outline: "3px solid var(--rf-focus)",
    outlineOffset: "2px",
    boxShadow: "0 0 0 5px #fff3d4",
    zIndex: "1",
  },
  ".rf-tabs-list .rf-tab[data-active]:focus-visible": {
    boxShadow: "inset 0 -4px 0 #b78028, 0 0 0 5px #fff3d4",
  },
  ".rf-tab[data-disabled], .rf-tab:disabled": {
    color: "#b5a58d",
    background: "linear-gradient(#1b171a70, #1b171a70), var(--rf-wood-texture)",
    textShadow: "none",
    boxShadow: "inset 0 1px 0 #655542, inset 0 -3px 0 #28221d",
    cursor: "not-allowed",
  },
  ".rf-tab-panel": {
    marginTop: "16px",
    padding: "4px",
    animation: "rf-reveal 220ms var(--rf-ease)",
  },
  ".rf-tab-panel[hidden]": { display: "none" },
  ".rf-tabs[data-orientation=vertical] .rf-tabs-list": {
    flexDirection: "column",
    alignItems: "stretch",
  },
  "@media (max-width: 480px)": {
    ".rf-tabs-list": { gap: "6px" },
    ".rf-tab": { paddingInline: "18px" },
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-tab": { transition: "none" },
    ".rf-tab-panel": { animation: "none" },
  },
  "@media (forced-colors: active)": {
    ".rf-tabs-list": { borderColor: "CanvasText" },
    ".rf-tab": { borderColor: "ButtonText", textShadow: "none" },
    ".rf-tab[data-active]": {
      borderColor: "Highlight",
      outline: "2px solid Highlight",
      outlineOffset: "-4px",
    },
    ".rf-tab[data-disabled]": { color: "GrayText" },
    ".rf-tabs-list .rf-tab:focus-visible": {
      outline: "3px solid Highlight",
      outlineOffset: "2px",
    },
  },
});
