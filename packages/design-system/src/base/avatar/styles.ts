import { defineGlobalStyles } from "@pandacss/dev";

export const avatarStyles = defineGlobalStyles({
  ".rf-avatar": {
    position: "relative",
    display: "inline-flex",
    verticalAlign: "middle",
    flex: "0 0 auto",
    boxSizing: "border-box",
    width: "52px",
    height: "52px",
    padding: "4px",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #1b2326",
    borderRadius: "47% 49% 46% 48%",
    overflow: "hidden",
    color: "var(--rf-paper-ink)",
    background: "var(--rf-iron-texture)",
    boxShadow: "inset 0 1px 0 var(--rf-edge-light), var(--rf-depth-mounted)",
    "&::after": {
      content: '""',
      position: "absolute",
      inset: "4px",
      border: "1px solid #1b2326",
      borderRadius: "50%",
      boxShadow: "inset 0 2px 3px #0006",
      pointerEvents: "none",
    },
    "--rf-ink": "var(--rf-paper-ink)",
    "--rf-muted": "var(--rf-paper-muted)",
    "--rf-focus": "var(--rf-paper-focus)",
    "--rf-error": "var(--rf-paper-error)",
  },
  '.rf-avatar[data-size="sm"]': {
    width: "36px",
    height: "36px",
    padding: "3px",
    "&::after": {
      inset: "3px",
    },
    "& .rf-avatar-fallback": {
      fontSize: "12px",
    },
  },
  '.rf-avatar[data-size="lg"]': {
    width: "72px",
    height: "72px",
    padding: "5px",
    "&::after": {
      inset: "5px",
    },
    "& .rf-avatar-fallback": {
      fontSize: "26px",
    },
  },
  ".rf-avatar-image": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    display: "block",
  },
  ".rf-avatar-fallback": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background: "var(--rf-paper-texture)",
    font: "700 18px var(--rf-font-display)",
    lineHeight: "1",
  },
  "@media (forced-colors: active)": {
    ".rf-avatar": {
      background: "Canvas",
      borderColor: "CanvasText",
      boxShadow: "none",
      "&::after": {
        borderColor: "CanvasText",
        boxShadow: "none",
      },
    },
    ".rf-avatar-fallback": {
      background: "Canvas",
      color: "CanvasText",
    },
  },
});
