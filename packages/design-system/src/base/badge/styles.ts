import { defineGlobalStyles } from "@pandacss/dev";

export const badgeStyles = defineGlobalStyles({
  ".rf-badge": {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    maxWidth: "100%",
    border: "1px solid color-mix(in srgb, var(--rf-accent) 45%, white)",
    borderRadius: "4px",
    background: "var(--rf-tint)",
    color: "var(--rf-accent)",
    padding: "3px 9px",
    fontSize: "0.68rem",
    fontWeight: "750",
    letterSpacing: "0.045em",
    textTransform: "uppercase",
    boxShadow: "inset 0 1px 0 #fff9",
  },
});
