import { defineGlobalStyles } from "@pandacss/dev";

export const switchStyles = defineGlobalStyles({
  ".rf-switch": {
    display: "inline-flex",
    alignItems: "center",
    width: "44px",
    height: "25px",
    flex: "0 0 auto",
    padding: "3px",
    borderRadius: "20px",
    border: "1px solid #8b7a5e",
    background: "#ada18a",
    boxShadow: "inset 0 2px 4px #30271e40",
    transition: "background 200ms",
  },
  ".rf-switch[data-checked]": {
    background: "var(--rf-emerald)",
    borderColor: "#1a5035",
  },
  ".rf-switch-thumb": {
    width: "17px",
    height: "17px",
    borderRadius: "50%",
    background: "linear-gradient(#fff8df, #d4bc88)",
    boxShadow: "0 1px 3px #0006, inset 0 1px 0 #fff",
    transition: "transform 220ms var(--rf-ease)",
  },
  ".rf-switch[data-checked] .rf-switch-thumb": {
    transform: "translateX(18px)",
  },
  ".rf-switch[data-disabled]": {
    opacity: "0.55",
  },
});
