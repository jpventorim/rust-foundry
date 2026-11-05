import { defineGlobalStyles } from "@pandacss/dev";

export const checkboxStyles = defineGlobalStyles({
  ".rf-choice": {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    minHeight: "44px",
    fontSize: "0.87rem",
    width: "fit-content",
  },
  ".rf-choice:has([data-disabled])": {
    cursor: "not-allowed",
    color: "#786b57",
  },
  ".rf-checkbox, .rf-radio": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "23px",
    height: "23px",
    flex: "0 0 auto",
    border: "1px solid #9c8055",
    borderRadius: "4px",
    background: "var(--rf-paper-light)",
    boxShadow: "inset 0 2px 3px #33230e1a, 0 1px 0 #fff",
    transition: "background 160ms, transform 160ms",
  },
  ".rf-checkbox[data-checked], .rf-radio[data-checked]": {
    borderColor: "var(--rf-emerald)",
    background: "var(--rf-emerald)",
    color: "#fff",
  },
  ".rf-checkbox-indicator": {
    display: "flex",
    animation: "rf-stamp 200ms var(--rf-ease)",
  },
  ".rf-checkbox[data-indeterminate]": {
    background: "var(--rf-emerald)",
    color: "white",
  },
  ".rf-checkbox[data-indeterminate] .rf-checkbox-indicator svg": {
    display: "none",
  },
  ".rf-checkbox[data-indeterminate] .rf-checkbox-indicator::after": {
    content: '""',
    height: "2px",
    width: "11px",
    background: "currentColor",
  },
});
