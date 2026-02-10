import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "it-IT",
  title: "Byloth's Website",
  description: "My personal static-generated website; based on Vue.js & VitePress. 🌐",

  lastUpdated: true,

  srcDir: "./src",
  cacheDir: "./cache",
  outDir: "./dist",

  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../src", import.meta.url)),
        "@theme": fileURLToPath(new URL("./theme", import.meta.url))
      }
    }
  }
});
