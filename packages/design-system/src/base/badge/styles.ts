import { defineGlobalStyles } from "@pandacss/dev";

export const badgeStyles = defineGlobalStyles({
  ".rf-badge": {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "middle",
    boxSizing: "border-box",
    gap: "4px",
    minWidth: "0",
    maxWidth: "100%",
    overflowWrap: "anywhere",
    border: "1px solid #b9a27c",
    borderRadius: "1px 2px 1px 0",
    background: "var(--rf-paper-texture, #f3e8cf)",
    color: "#30271e",
    paddingBlock: "3px",
    paddingInline: "13px 8px",
    fontSize: "0.75rem",
    fontWeight: "700",
    lineHeight: "1.35",
    letterSpacing: "0.015em",
    boxShadow: "1px 1px 0 #b9a27c, 0 2px 1px #30271e18",
    "&::before": {
      content: '""',
      position: "absolute",
      insetBlock: "-2px",
      insetInlineStart: "3px",
      width: "5px",
      background: "var(--rf-paper-grain, none), var(--rf-accent, #665541)",
      clipPath:
        "polygon(0 0, 50% 1px, 100% 0, 100% 100%, 50% calc(100% - 2px), 0 100%)",
      pointerEvents: "none",
    },
    "@media (forced-colors: active)": {
      background: "Canvas",
      color: "CanvasText",
      borderColor: "CanvasText",
      boxShadow: "none",
      "&::before": {
        background: "CanvasText",
      },
    },
  },
});
