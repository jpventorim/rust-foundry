import { defineGlobalStyles } from "@pandacss/dev";

export const buttonStyles = defineGlobalStyles({
  ".rf-button": {
    appearance: "none",
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    minHeight: "44px",
    padding: "10px 18px",
    border: "1px solid #0005",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#fffaf0",
    fontWeight: "700",
    fontSize: "0.87rem",
    background:
      "linear-gradient(#ffffff17, #00000018), var(--rf-accent, var(--rf-brass))",
    boxShadow:
      "inset 0 1px 0 #ffffff66, inset 0 0 0 2px #ffffff12, 0 3px 0 #30271ecc, 0 6px 10px #30271e21",
    textShadow: "0 1px 1px #0005",
    transition:
      "transform 160ms var(--rf-ease), box-shadow 160ms var(--rf-ease), filter 160ms",
  },
  ".rf-button:hover:not(:disabled, [data-disabled])": {
    transform: "translateY(-2px)",
    filter: "brightness(1.08)",
    boxShadow:
      "inset 0 1px 0 #ffffff66, 0 5px 0 #30271ecc, 0 8px 14px #30271e26",
  },
  ".rf-button:active:not(:disabled, [data-disabled])": {
    transform: "translateY(2px)",
    boxShadow: "inset 0 2px 3px #0003, 0 1px 0 #30271ecc",
  },
  '.rf-button[data-variant="outline"]': {
    background: "linear-gradient(#fff9, #fff0), var(--rf-paper)",
    color: "var(--rf-accent)",
    borderColor: "var(--rf-accent)",
    textShadow: "none",
    boxShadow: "inset 0 1px 0 #fff, 0 2px 0 var(--rf-border)",
  },
  '.rf-button[data-variant="ghost"]': {
    color: "var(--rf-accent)",
    background: "transparent",
    borderColor: "transparent",
    boxShadow: "none",
    textShadow: "none",
  },
  '.rf-button[data-variant="ghost"]:hover:not(:disabled, [data-disabled])': {
    background: "#79542110",
    boxShadow: "none",
  },
  '.rf-button[data-size="sm"]': {
    padding: "6px 12px",
    fontSize: "0.78rem",
  },
  ".rf-button:is(:disabled, [data-disabled])": {
    cursor: "not-allowed",
    boxShadow: "none",
    background: "#ded5c3",
    color: "#786b57",
    borderColor: "#b9ad96",
    textShadow: "none",
  },
  "@media (prefers-reduced-motion: reduce)": {
    ".rf-button:hover:not(:disabled, [data-disabled]), .rf-button:active:not(:disabled, [data-disabled])":
      {
        transform: "none",
      },
  },
  "@media (forced-colors: active)": {
    ".rf-button, .rf-panel, .rf-input, .rf-checkbox, .rf-radio, .rf-switch, .rf-progress-track":
      {
        borderColor: "ButtonText",
      },
  },
});
