import { pluginReact } from "@rsbuild/plugin-react";
import { defineConfig } from "@rslib/core";

export default defineConfig({
  plugins: [pluginReact()],
  source: { entry: { index: "./src/index.ts" } },
  lib: [{ format: "esm", dts: false }],
  output: {
    target: "web",
    copy: [{ from: "./styled-system/styles.css", to: "styles.css" }],
  },
});
