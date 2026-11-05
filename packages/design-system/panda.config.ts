import { defineConfig } from "@pandacss/dev";
import { globalCss, keyframes } from "./src/theme";

export default defineConfig({
  preflight: false,
  include: ["./src/**/*.{ts,tsx}", "./stories/**/*.tsx"],
  exclude: ["./src/**/*.test.ts"],
  outdir: "styled-system",
  globalCss,
  theme: {
    extend: {
      tokens: {
        colors: {
          ink: { value: "#30271e" },
          muted: { value: "#665541" },
          paper: { value: "#f3e8cf" },
          paperLight: { value: "#fff8e8" },
          border: { value: "#b9a27c" },
          brass: { value: "#775014" },
          ruby: { value: "#912e38" },
          emerald: { value: "#236044" },
          sapphire: { value: "#2a537e" },
          focus: { value: "#204f91" },
        },
        fonts: {
          body: { value: '"Segoe UI", ui-sans-serif, system-ui, sans-serif' },
          display: { value: 'Georgia, "Times New Roman", serif' },
        },
      },
      keyframes,
    },
  },
});
