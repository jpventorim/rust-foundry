import { defineConfig } from "@rstest/core";

export default defineConfig({
  testEnvironment: "node",
  // The empty app shell has no frontend behavior to test yet.
  passWithNoTests: true,
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
