import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), "index.html"),
        venue: resolve(process.cwd(), "venue/index.html"),
        industry: resolve(process.cwd(), "industry/index.html"),
        volunteer: resolve(process.cwd(), "volunteer/index.html")
      }
    }
  }
});
