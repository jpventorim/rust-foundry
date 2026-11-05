import { defineConfig } from "@rstest/core";

export default defineConfig({
  testEnvironment: "node",
  tools: {
    swc: {
      jsc: {
        transform: {
          react: { runtime: "automatic" },
        },
      },
    },
  },
});
