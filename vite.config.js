import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "Toast",
      fileName: "toast",
    },
  },
});
