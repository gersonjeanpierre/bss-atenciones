import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
const repo = "pangeaco";

export default defineConfig({
  base: `/${repo}/`,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
