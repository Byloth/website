import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: "it-IT",
    title: "Byloth's Website",
    description: "My personal static-generated website; based on Vue.js & VitePress.",  

    lastUpdated: true,

    srcDir: "./src",
    outDir: "./dist",
    themeConfig: {
      footer: {
        message: "Rilasciato con Licenza CC BY-SA 4.0",
        copyright: 'Copyright © 2014-2022 Matteo Bilotta'
      }
    }
});