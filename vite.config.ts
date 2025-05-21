import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: "docs",
    assetsDir: "assets",
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/styles/vars" as *;\n`,
      },
    },
  },
});
