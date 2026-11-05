import { defineGlobalStyles } from "@pandacss/dev";

export const avatarStyles = defineGlobalStyles({
  ".rf-avatar": {
    display: "inline-flex",
    flex: "0 0 auto",
    width: "52px",
    height: "52px",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid #ae8542",
    borderRadius: "50%",
    overflow: "hidden",
    color: "#fff1cf",
    background: "radial-gradient(at 30% 20%, #54716a, #233e37)",
    boxShadow: "0 0 0 1px #634922, inset 0 2px 6px #0005, 0 2px 0 #fff8",
  },
  '.rf-avatar[data-size="sm"]': {
    width: "36px",
    height: "36px",
    borderWidth: "2px",
  },
  '.rf-avatar[data-size="lg"]': {
    width: "72px",
    height: "72px",
  },
  ".rf-avatar-image": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  ".rf-avatar-fallback": {
    font: "700 1.1em var(--rf-font-display)",
  },
});
