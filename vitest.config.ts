import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    dir: "./src/test",
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
