import { defineGlobalStyles } from "@pandacss/dev";

export const foundationStyles = defineGlobalStyles({
  ":root": {
    "--rf-ink": "token(colors.ink)",
    "--rf-muted": "token(colors.muted)",
    "--rf-paper": "token(colors.paper)",
    "--rf-paper-light": "token(colors.paperLight)",
    "--rf-border": "token(colors.border)",
    "--rf-brass": "token(colors.brass)",
    "--rf-ruby": "token(colors.ruby)",
    "--rf-emerald": "token(colors.emerald)",
    "--rf-sapphire": "token(colors.sapphire)",
    "--rf-focus": "token(colors.focus)",
    "--rf-radius": "8px",
    "--rf-font-body": '"Segoe UI", ui-sans-serif, system-ui, sans-serif',
    "--rf-font-display": 'Georgia, "Times New Roman", serif',
    "--rf-ease": "cubic-bezier(0.2, 0.8, 0.2, 1)",
    "--rf-shadow": "0 2px 0 #ad936b, 0 5px 12px #36250f1a",
  },
  ".rf-theme": {
    color: "var(--rf-ink)",
    fontFamily: "var(--rf-font-body)",
    fontSize: "15px",
    lineHeight: "1.6",
    colorScheme: "light",
    WebkitFontSmoothing: "antialiased",
  },
  ".rf-theme *, .rf-theme *::before, .rf-theme *::after": {
    boxSizing: "border-box",
  },
  ".rf-theme :is(button, input, textarea)": {
    font: "inherit",
  },
  ".rf-theme :is(button, a, input, textarea, [tabindex]):focus-visible": {
    outline: "3px solid var(--rf-focus)",
    outlineOffset: "4px",
  },
  '.rf-theme [data-tone="brass"]': {
    "--rf-accent": "var(--rf-brass)",
    "--rf-tint": "#f3dfb2",
    "--rf-bright": "#e5ba60",
  },
  '.rf-theme [data-tone="ruby"]': {
    "--rf-accent": "var(--rf-ruby)",
    "--rf-tint": "#f8dce0",
    "--rf-bright": "#de6170",
  },
  '.rf-theme [data-tone="emerald"]': {
    "--rf-accent": "var(--rf-emerald)",
    "--rf-tint": "#d6e9d5",
    "--rf-bright": "#58b882",
  },
  '.rf-theme [data-tone="sapphire"]': {
    "--rf-accent": "var(--rf-sapphire)",
    "--rf-tint": "#dce8f5",
    "--rf-bright": "#67a9e0",
  },
  '.rf-theme [data-tone="neutral"]': {
    "--rf-accent": "#5d5042",
    "--rf-tint": "#e9dfcd",
    "--rf-bright": "#b8a58b",
  },
  ".rf-stack": {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  ".rf-row": {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
  },
  ".rf-spread": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
  },
  ".rf-title": {
    margin: "0",
    font: "700 1.5rem/1.2 var(--rf-font-display)",
    letterSpacing: "-0.025em",
  },
  ".rf-muted": {
    color: "var(--rf-muted)",
  },
  ".rf-hint": {
    fontSize: "0.82rem",
    color: "var(--rf-muted)",
    lineHeight: "1.5",
  },
  ".rf-label": {
    fontWeight: "650",
    fontSize: "0.84rem",
    letterSpacing: "0.01em",
  },
  ".rf-error": {
    fontSize: "0.82rem",
    color: "#9c2331",
    fontWeight: "600",
  },
  ".rf-eyebrow": {
    color: "var(--rf-muted)",
    fontSize: "0.7rem",
    letterSpacing: "0.17em",
    textTransform: "uppercase",
    fontWeight: "750",
  },
  ".rf-field": {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
    minWidth: "0",
  },
  ".rf-positioner": {
    zIndex: "100",
    maxWidth: "calc(100vw - 24px)",
  },
  ".rf-popup": {
    background: "var(--rf-paper-light)",
    color: "var(--rf-ink)",
    border: "1px solid #ac9066",
    borderRadius: "7px",
    boxShadow: "inset 0 0 0 3px #e4cfa650, 0 12px 32px #231b1433",
    transformOrigin: "var(--transform-origin)",
    transition: "opacity 160ms, transform 160ms var(--rf-ease)",
  },
  ".rf-popup:is([data-starting-style], [data-ending-style])": {
    opacity: "0",
    transform: "translateY(-6px) scale(0.97)",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-theme *, .rf-theme *::before, .rf-theme *::after, .rf-dialog-backdrop":
      {
        animation: "none !important",
        transition: "none !important",
        scrollBehavior: "auto !important",
      },
  },
});
