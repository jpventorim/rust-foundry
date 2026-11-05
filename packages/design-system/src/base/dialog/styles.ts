import { defineGlobalStyles } from "@pandacss/dev";

export const dialogStyles = defineGlobalStyles({
  ".rf-dialog-backdrop": {
    position: "fixed",
    inset: "0",
    zIndex: "200",
    background: "#171a17b8",
    backdropFilter: "blur(4px)",
    transition: "opacity 200ms",
  },
  ".rf-dialog-backdrop:is([data-starting-style], [data-ending-style])": {
    opacity: "0",
  },
  ".rf-dialog": {
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: "201",
    transform: "translate(-50%, -50%)",
    width: "min(480px, calc(100vw - 32px))",
    maxHeight: "calc(100dvh - 48px)",
    overflowY: "auto",
    boxShadow: "inset 0 0 0 4px #fff4, 0 24px 100px #0006",
    transition: "opacity 200ms, transform 200ms var(--rf-ease)",
  },
  ".rf-dialog:is([data-starting-style], [data-ending-style])": {
    opacity: "0",
    transform: "translate(-50%, -46%) scale(0.96)",
  },
  ".rf-dialog-content": {
    marginTop: "20px",
  },
});
