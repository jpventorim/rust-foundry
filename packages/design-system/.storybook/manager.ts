import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "Foundry · The component codex",
    colorPrimary: "#d6ad62",
    colorSecondary: "#d6ad62",
    appBg: "#191d1c",
    appContentBg: "#f3e8cf",
    appBorderColor: "#46483c",
    textColor: "#eee2c9",
    barBg: "#222724",
    fontBase: '"Segoe UI", sans-serif',
    fontCode: '"Cascadia Code", monospace',
  }),
});
