import { defineGlobalStyles } from "@pandacss/dev";

export const alertStyles = defineGlobalStyles({
  ".rf-alert": {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    padding: "24px 24px 20px",
    border: "1px solid var(--rf-paper-edge)",
    borderRadius: "1px 3px 2px 1px",
    color: "var(--rf-paper-ink)",
    background: "var(--rf-paper-texture)",
    fontSize: "0.94rem",
    lineHeight: "1.6",
    boxShadow: "var(--rf-depth-paper)",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "7px",
      left: "9px",
      width: "6px",
      height: "6px",
      border: "1px solid #252b2c",
      borderRadius: "45% 40% 50% 40%",
      background: "var(--rf-iron-texture)",
      boxShadow: "inset 0 1px 0 #ffffff60, 0 1px 1px #30271e80",
      pointerEvents: "none",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: "7px",
      right: "9px",
      width: "6px",
      height: "6px",
      border: "1px solid #252b2c",
      borderRadius: "40% 50% 40% 45%",
      background: "var(--rf-iron-texture)",
      boxShadow: "inset 0 1px 0 #ffffff60, 0 1px 1px #30271e80",
      pointerEvents: "none",
    },
    "--rf-ink": "var(--rf-paper-ink)",
    "--rf-muted": "var(--rf-paper-muted)",
    "--rf-focus": "var(--rf-paper-focus)",
    "--rf-error": "var(--rf-paper-error)",
  },
  ".rf-alert-seal": {
    display: "grid",
    placeItems: "center",
    flexShrink: "0",
    width: "34px",
    height: "34px",
    marginTop: "1px",
    border: "2px solid #30271e70",
    borderRadius: "44% 49% 42% 47%",
    color: "var(--rf-on-accent)",
    background:
      "var(--rf-iron-grain), linear-gradient(145deg, #ffffff14, transparent 55%, #00000024), var(--rf-accent)",
    boxShadow:
      "inset 0 0 0 2px #ffffff20, inset 0 -2px 2px #00000038, 0 2px 1px #30271e45",
  },
  ".rf-alert-seal svg": {
    width: "23px",
    height: "23px",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  ".rf-alert-copy": {
    minWidth: "0",
    flex: "1",
    overflowWrap: "anywhere",
  },
  ".rf-alert-title": {
    display: "block",
    paddingBottom: "6px",
    borderBottom: "1px solid #8c70434d",
    fontFamily: "var(--rf-font-display)",
    fontSize: "1.06rem",
    lineHeight: "1.35",
    fontWeight: "700",
  },
  ".rf-alert-description": {
    paddingTop: "6px",
  },
  ".rf-alert-description > :first-child": {
    marginTop: "0",
  },
  ".rf-alert-description > :last-child": {
    marginBottom: "0",
  },
  "@media (max-width: 480px)": {
    ".rf-alert": {
      gap: "10px",
      padding: "23px 14px 16px",
    },
    ".rf-alert-seal": {
      width: "30px",
      height: "30px",
    },
  },
  "@media (forced-colors: active)": {
    ".rf-alert": {
      borderColor: "CanvasText",
      background: "Canvas",
      color: "CanvasText",
      boxShadow: "none",
    },
    ".rf-alert::before, .rf-alert::after": {
      display: "none",
    },
    ".rf-alert-seal": {
      borderColor: "CanvasText",
      color: "CanvasText",
      background: "Canvas",
      boxShadow: "none",
    },
    ".rf-alert-title": {
      borderColor: "CanvasText",
    },
  },
});
