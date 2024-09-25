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

  themeConfig: {
    footer: {
      message: `Rilasciato sotto
<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer nofollow">
  Licenza CC BY-SA 4.0</a>.`,
      copyright: `Copyright © 2014-${new Date().getFullYear()}
<a href="https://github.com/Byloth">
  Matteo Bilotta</a>.`
    }
  },
  vite: {
    resolve: {
      alias: { "@": fileURLToPath(new URL("../src", import.meta.url)) }
    }
  }
});
