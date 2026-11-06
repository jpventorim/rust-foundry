import { defineGlobalStyles } from "@pandacss/dev";

export const accordionStyles = defineGlobalStyles({
  ".rf-accordion": {
    display: "grid",
    gap: "12px",
    minWidth: "0",
  },
  ".rf-accordion-item": {
    minWidth: "0",
    border: "1px solid #30251e",
    borderBottomWidth: "4px",
    borderRadius: "2px",
    background: "var(--rf-wood-texture)",
    boxShadow: "var(--rf-depth-mounted)",
  },
  ".rf-accordion-header": {
    margin: "0",
    font: "inherit",
  },
  ".rf-accordion-trigger": {
    position: "relative",
    display: "flex",
    gap: "16px",
    width: "100%",
    minHeight: "60px",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 14px 14px 50px",
    background: "var(--rf-wood-texture)",
    border: "0",
    borderTop: "1px solid #d4b58a66",
    borderBottom: "2px solid #261a15",
    color: "var(--rf-wood-ink, #fff0d2)",
    fontFamily: "Georgia, serif",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "1.5",
    textAlign: "left",
    cursor: "pointer",
    boxShadow: "inset 0 -3px 0 #21171155",
  },
  ".rf-accordion-trigger::before": {
    content: '""',
    position: "absolute",
    inset: "-2px auto -3px 12px",
    width: "21px",
    border: "1px solid #1b2021",
    borderRadius: "2px 1px 2px 1px",
    background:
      "radial-gradient(circle at 50% 10px, #a1a29a 0 1px, #171d20 1.5px 3px, transparent 3.5px), radial-gradient(circle at 50% calc(100% - 10px), #a1a29a 0 1px, #171d20 1.5px 3px, transparent 3.5px), var(--rf-iron-texture)",
    boxShadow: "1px 0 0 #a9afa64d, 2px 1px 2px #0006",
    pointerEvents: "none",
  },
  ".rf-accordion-trigger:hover:not([data-disabled])": {
    boxShadow: "inset 0 0 0 1px #e3b95899, inset 0 -3px 0 #21171155",
  },
  ".rf-accordion-trigger > span": {
    minWidth: "0",
    overflowWrap: "anywhere",
  },
  ".rf-accordion-keeper": {
    display: "grid",
    flex: "0 0 30px",
    width: "30px",
    height: "30px",
    placeItems: "center",
    border: "1px solid #1b2021",
    borderRadius: "2px",
    background: "var(--rf-iron-texture)",
    color: "var(--rf-iron-ink, #fff4df)",
    boxShadow: "inset 0 1px 0 #a9afa666, 1px 2px 0 #21171199",
  },
  ".rf-accordion-keeper svg": {
    transition: "transform 200ms var(--rf-ease)",
  },
  ".rf-accordion-trigger[data-panel-open] .rf-accordion-keeper svg": {
    transform: "rotate(180deg)",
  },
  ".rf-accordion-trigger[data-panel-open] .rf-accordion-keeper": {
    borderBottom: "3px solid #e3b958",
  },
  ".rf-accordion-trigger:focus-visible": {
    outline: "2px solid #e3b958",
    outlineOffset: "-5px",
  },
  ".rf-accordion-trigger[data-disabled]": {
    cursor: "not-allowed",
    color: "#e3d5bd",
    borderTopColor: "#99866e66",
    boxShadow: "inset 0 0 0 1px #99866e88, inset 0 -3px 0 #21171155",
  },
  ".rf-accordion-trigger[data-disabled] .rf-accordion-keeper": {
    color: "#c5c1b7",
    boxShadow: "inset 0 1px 0 #a9afa633",
  },
  ".rf-accordion-panel": {
    height: "var(--accordion-panel-height)",
    overflow: "hidden",
    transition: "height 220ms var(--rf-ease)",
  },
  ".rf-accordion-panel:is([data-starting-style], [data-ending-style])": {
    height: "0",
  },
  ".rf-accordion-panel > div": {
    margin: "0 8px 6px 12px",
    padding: "20px 20px 24px 25px",
    border: "1px solid var(--rf-border)",
    borderTop: "0",
    borderLeft: "3px solid #b9a27c",
    background: "var(--rf-paper-texture)",
    color: "var(--rf-paper-ink)",
    lineHeight: "1.6",
    overflowWrap: "anywhere",
    boxShadow: "var(--rf-depth-paper)",
    "--rf-ink": "var(--rf-paper-ink)",
    "--rf-muted": "var(--rf-paper-muted)",
    "--rf-focus": "var(--rf-paper-focus)",
    "--rf-error": "var(--rf-paper-error)",
  },
  ".rf-accordion-panel > div > :first-child": {
    marginTop: "0",
  },
  ".rf-accordion-panel > div > :last-child": {
    marginBottom: "0",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-accordion-panel, .rf-accordion-keeper svg": {
      transition: "none",
    },
    ".rf-accordion-trigger[data-panel-open] .rf-accordion-keeper svg": {
      transform: "none",
    },
  },
  "@media (forced-colors: active)": {
    ".rf-accordion-item, .rf-accordion-trigger, .rf-accordion-keeper, .rf-accordion-panel > div":
      {
        background: "Canvas",
        color: "CanvasText",
        borderColor: "CanvasText",
        boxShadow: "none",
      },
    ".rf-accordion-trigger::before": {
      display: "none",
    },
    ".rf-accordion-trigger:focus-visible": {
      outline: "2px solid Highlight",
    },
    ".rf-accordion-trigger[data-panel-open] .rf-accordion-keeper": {
      borderBottom: "3px solid Highlight",
    },
    ".rf-accordion-trigger[data-disabled], .rf-accordion-trigger[data-disabled] .rf-accordion-keeper":
      {
        color: "GrayText",
        boxShadow: "none",
      },
  },
});
