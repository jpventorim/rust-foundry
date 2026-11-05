import process from "node:process";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: { index: "./src/main.tsx" },
  },
  html: {
    template: "./index.html",
  },
  server: {
    host: host || "localhost",
    port: 1420,
    strictPort: true,
  },
  dev: {
    // Tauri mobile devices connect to the host's development server for HMR.
    client: host ? { host, port: 1420, protocol: "ws" } : undefined,
  },
  tools: {
    rspack: {
      watchOptions: { ignored: ["**/src-tauri/**", "**/target/**"] },
    },
  },
});
