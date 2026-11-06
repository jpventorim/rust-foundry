import { defineGlobalStyles } from "@pandacss/dev";

export const panelStyles = defineGlobalStyles({
  ".rf-panel": {
    "--rf-muted": "var(--rf-paper-muted)",
    position: "relative",
    isolation: "isolate",
    minWidth: "0",
    minHeight: "72px",
    padding: "28px",
    border: "2px solid #271a13",
    borderRadius: "3px",
    color: "var(--rf-paper-ink)",
    background: "var(--rf-wood-texture)",
    boxShadow: "inset 0 1px 0 var(--rf-edge-light), var(--rf-depth-mounted)",
    overflowWrap: "anywhere",
    "&:focus-visible": {
      outline: "3px solid var(--rf-focus)",
      outlineOffset: "4px",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      zIndex: "-1",
      inset: "8px 9px 10px 8px",
      border: "1px solid #b49a70",
      borderRadius: "1px 2px 1px 0",
      background: "var(--rf-paper-texture)",
      boxShadow: "var(--rf-depth-paper)",
      pointerEvents: "none",
    },
    "--rf-ink": "var(--rf-paper-ink)",
    "--rf-focus": "var(--rf-paper-focus)",
    "--rf-error": "var(--rf-paper-error)",
  },
  ".rf-panel-joinery": {
    position: "absolute",
    inset: "-2px",
    pointerEvents: "none",
    "& > span": {
      position: "absolute",
      width: "24px",
      height: "24px",
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
      "&:nth-child(1)": {
        top: "0",
        left: "0",
      },
      "&:nth-child(2)": {
        top: "0",
        right: "0",
        transform: "rotate(90deg)",
      },
      "&:nth-child(3)": {
        bottom: "0",
        right: "0",
        transform: "rotate(180deg)",
      },
      "&:nth-child(4)": {
        bottom: "0",
        left: "0",
        transform: "rotate(270deg)",
      },
    },
  },
  '.rf-panel[data-material="leather"]': {
    "--rf-muted": "#e4ccb0",
    color: "#fff0d5",
    background:
      'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23170f0c%22%20stroke-width%3D%22.8%22%20opacity%3D%22.45%22%3E%3Cpath%20d%3D%22m0%208%2010%203%205-8%2013%203%204%209%2013-3%208%207%2011-4M0%2029l12-4%208%206%2011-4%208%208%2015-5%2010%206M0%2049l9-5%2012%208%2012-6%209%208%2012-6%2010%204M10%2011l2%2014m16-19%203%2021m14-15-6%2023m14-16%201%2011M12%2025%209%2044m11-13%201%2021m18-17-6%2011m21-16v18M9%2044l1%2020m23-18-1%2018m22-16-1%2016%22%2F%3E%3C%2Fg%3E%3Cg%20fill%3D%22%23bd9670%22%20opacity%3D%22.18%22%3E%3Cellipse%20cx%3D%2221%22%20cy%3D%2218%22%20rx%3D%225%22%20ry%3D%222%22%2F%3E%3Cellipse%20cx%3D%2244%22%20cy%3D%2243%22%20rx%3D%226%22%20ry%3D%222%22%2F%3E%3Cellipse%20cx%3D%224%22%20cy%3D%2236%22%20rx%3D%223%22%20ry%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"), var(--rf-iron-grain), #493126',
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
      background:
        'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23170f0c%22%20stroke-width%3D%22.8%22%20opacity%3D%22.45%22%3E%3Cpath%20d%3D%22m0%208%2010%203%205-8%2013%203%204%209%2013-3%208%207%2011-4M0%2029l12-4%208%206%2011-4%208%208%2015-5%2010%206M0%2049l9-5%2012%208%2012-6%209%208%2012-6%2010%204M10%2011l2%2014m16-19%203%2021m14-15-6%2023m14-16%201%2011M12%2025%209%2044m11-13%201%2021m18-17-6%2011m21-16v18M9%2044l1%2020m23-18-1%2018m22-16-1%2016%22%2F%3E%3C%2Fg%3E%3Cg%20fill%3D%22%23bd9670%22%20opacity%3D%22.18%22%3E%3Cellipse%20cx%3D%2221%22%20cy%3D%2218%22%20rx%3D%225%22%20ry%3D%222%22%2F%3E%3Cellipse%20cx%3D%2244%22%20cy%3D%2243%22%20rx%3D%226%22%20ry%3D%222%22%2F%3E%3Cellipse%20cx%3D%224%22%20cy%3D%2236%22%20rx%3D%223%22%20ry%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"), #302018',
      pointerEvents: "none",
    },
    "& > .rf-panel-joinery": {
      display: "none",
    },
    "--rf-ink": "#fff0d5",
    "--rf-error": "#ffb5bd",
    "--rf-focus": "#b1d8ff",
  },
  "@media (max-width: 480px)": {
    ".rf-panel": {
      padding: "28px 26px",
    },
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
      "&::after": {
        display: "none",
      },
      "&:focus-visible": {
        outlineColor: "Highlight",
      },
    },
    ".rf-panel-joinery": {
      display: "none",
    },
  },
  '.rf-panel[data-material="wood"]': {
    "--rf-ink": "var(--rf-wood-ink)",
    "--rf-muted": "#dfceb4",
    "--rf-focus": "#b1d8ff",
    "--rf-error": "#ffb5bd",
    color: "var(--rf-wood-ink)",
    background: "var(--rf-wood-texture)",
  },
  '.rf-panel[data-material="wood"]::before': {
    display: "none",
  },
});
