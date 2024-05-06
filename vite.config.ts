import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  root: "./",
  build: {
    outDir: "nicolasvycas.github.io",
  },
  plugins: [react()],
  publicDir: "assets",
});
