import { defineConfig } from "@rstest/core";

export default defineConfig({
  testEnvironment: "node",
  include: ["src/**/*.test.ts", "tests/**/*.test.ts"],
  testTimeout: 30000,
  hookTimeout: 30000,
  pool: { maxWorkers: 2 },
});
