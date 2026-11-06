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
          ink: { value: "#30291f" },
          muted: { value: "#655640" },
          paper: { value: "#f4ecd9" },
          paperLight: { value: "#fbf5e8" },
          border: { value: "#b5a080" },
          gold: { value: "#e3b958" },
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
