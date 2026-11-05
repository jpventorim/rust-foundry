import { mergeRsbuildConfig } from "@rsbuild/core";
import type { StorybookConfig } from "storybook-react-rsbuild";

const config: StorybookConfig = {
  framework: "storybook-react-rsbuild",
  stories: ["../src/**/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  core: { disableTelemetry: true },
  rsbuildFinal: (config) =>
    mergeRsbuildConfig(config, {
      tools: {
        swc: { jsc: { transform: { react: { runtime: "automatic" } } } },
      },
    }),
};

export default config;
