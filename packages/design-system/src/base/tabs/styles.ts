import { defineGlobalStyles } from "@pandacss/dev";

export const tabsStyles = defineGlobalStyles({
  ".rf-tabs-list": {
    display: "flex",
    gap: "4px",
    borderBottom: "1px solid var(--rf-border)",
    overflowX: "auto",
    padding: "5px 5px 0",
  },
  ".rf-tab": {
    flex: "0 0 auto",
    minHeight: "44px",
    padding: "10px 17px",
    background: "#ded0b4",
    border: "1px solid #b5a07b",
    borderBottom: "none",
    borderRadius: "6px 6px 0 0",
    color: "#5c4b34",
    fontWeight: "650",
    cursor: "pointer",
    transition: "background 160ms, color 160ms",
  },
  ".rf-tab[data-active]": {
    background: "var(--rf-paper-light)",
    color: "#3f2c10",
    boxShadow: "inset 0 3px 0 #aa792c",
  },
  ".rf-tab:disabled": {
    color: "#8c7d64",
    cursor: "not-allowed",
  },
  ".rf-tab-panel": {
    padding: "20px 4px 4px",
    animation: "rf-reveal 220ms var(--rf-ease)",
  },
  ".rf-tab-panel[hidden]": {
    display: "none",
  },
  "@media (max-width: 480px)": {
    ".rf-tabs-list": {
      gap: "2px",
    },
    ".rf-tab": {
      paddingInline: "12px",
    },
  },
});
