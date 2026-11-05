import { defineGlobalStyles } from "@pandacss/dev";

const hideGrain = `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g fill="none" stroke="#170f0c" stroke-width=".8" opacity=".45"><path d="m0 8 10 3 5-8 13 3 4 9 13-3 8 7 11-4M0 29l12-4 8 6 11-4 8 8 15-5 10 6M0 49l9-5 12 8 12-6 9 8 12-6 10 4M10 11l2 14m16-19 3 21m14-15-6 23m14-16 1 11M12 25 9 44m11-13 1 21m18-17-6 11m21-16v18M9 44l1 20m23-18-1 18m22-16-1 16"/></g><g fill="#bd9670" opacity=".18"><ellipse cx="21" cy="18" rx="5" ry="2"/><ellipse cx="44" cy="43" rx="6" ry="2"/><ellipse cx="4" cy="36" rx="3" ry="2"/></g></svg>')}")`;

export const panelStyles = defineGlobalStyles({
  ".rf-panel": {
    "--rf-muted": "#665541",
    position: "relative",
    isolation: "isolate",
    minWidth: "0",
    minHeight: "72px",
    padding: "32px",
    border: "2px solid #271a13",
    borderRadius: "3px",
    color: "var(--rf-ink)",
    background: "var(--rf-wood-texture)",
    boxShadow:
      "inset 0 1px 0 #ae8861, inset 2px 0 0 #916747, inset -2px -3px 0 #302016, 0 3px 0 #241a14",
    overflowWrap: "anywhere",
    "&:focus-visible": {
      outline: "3px solid var(--rf-focus)",
      outlineOffset: "4px",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      zIndex: "-1",
      inset: "12px 13px 14px 12px",
      border: "1px solid #b49a70",
      borderRadius: "1px 2px 1px 0",
      background: "var(--rf-paper-texture)",
      boxShadow:
        "-1px -1px 0 #291a13, 1px 2px 0 #d5c39f, 2px 3px 0 #a78c61, 3px 4px 0 #302016",
      pointerEvents: "none",
    },
  },
  ".rf-panel-joinery": {
    position: "absolute",
    inset: "-2px",
    pointerEvents: "none",
    "& > span": {
      position: "absolute",
      width: "30px",
      height: "30px",
      background: "var(--rf-iron-texture)",
      clipPath: "polygon(0 0, 100% 0, 96% 30%, 33% 33%, 30% 96%, 0 100%)",
      boxShadow: "inset 1px 1px 0 #768082, inset -1px -1px 0 #171e20",
      "&::before": {
        content: '""',
        position: "absolute",
        top: "3px",
        left: "19px",
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        background: "#171e20",
        boxShadow:
          "0 1px 0 #929b96, -15px 15px 0 #171e20, -15px 16px 0 #929b96",
      },
      "&:nth-child(1)": { top: "0", left: "0" },
      "&:nth-child(2)": { top: "0", right: "0", transform: "rotate(90deg)" },
      "&:nth-child(3)": {
        bottom: "0",
        right: "0",
        transform: "rotate(180deg)",
      },
      "&:nth-child(4)": { bottom: "0", left: "0", transform: "rotate(270deg)" },
    },
  },
  '.rf-panel[data-material="leather"]': {
    "--rf-muted": "#e4ccb0",
    color: "#fff0d5",
    background: `${hideGrain}, var(--rf-iron-grain), #493126`,
    borderColor: "#211711",
    borderRadius: "5px 3px 4px 3px",
    boxShadow:
      "inset 3px 0 0 #896245, inset -2px -3px 0 #251810, 0 3px 0 #211711",
    "&::before": {
      inset: "9px",
      border: "1px dashed #c49a6d",
      borderRadius: "2px",
      background: "transparent",
      boxShadow: "0 0 0 1px #2d1c16",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: "3px",
      bottom: "3px",
      left: "15px",
      width: "5px",
      borderLeft: "1px solid #211711",
      borderRight: "1px solid #936f50",
      background: `${hideGrain}, #302018`,
      pointerEvents: "none",
    },
    "& > .rf-panel-joinery": { display: "none" },
  },
  "@media (max-width: 480px)": {
    ".rf-panel": { padding: "28px 26px" },
  },
  "@media (forced-colors: active)": {
    '.rf-panel, .rf-panel[data-material="leather"]': {
      "--rf-muted": "CanvasText",
      color: "CanvasText",
      background: "Canvas",
      border: "2px solid CanvasText",
      boxShadow: "none",
      "&::before": {
        background: "none",
        borderColor: "CanvasText",
        boxShadow: "none",
      },
      "&::after": { display: "none" },
      "&:focus-visible": { outlineColor: "Highlight" },
    },
    ".rf-panel-joinery": { display: "none" },
  },
});
