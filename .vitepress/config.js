import { resolve } from "path";
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
        "@": resolve(__dirname, "../src"),
        "@theme": resolve(__dirname, "./theme")
      }
    }
  }
});
