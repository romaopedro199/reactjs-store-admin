import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-expect-error - Temporarily ignoring missing declaration file for 'path'.
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @ts-expect-error - Temporarily ignoring missing declaration file for 'path'.
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
