import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "it-IT",
  title: "Byloth's Website",
  description: "My personal static-generated website; based on Vue.js & VitePress. 🌐",
  head: [
    // All browsers
    ["link", { rel: "icon", href: "/favicons/bylothink-16x16.png", sizes: "16x16", type: "image.png" }],
    ["link", { rel: "icon", href: "/favicons/bylothink-32x32.png", sizes: "32x32", type: "image.png" }],

    // Google & Android
    ["link", { rel: "icon", href: "/favicons/bylothink-48x48.png", sizes: "48x48", type: "image.png" }],
    ["link", { rel: "icon", href: "/favicons/bylothink-192x192.png", sizes: "192x192", type: "image.png" }],

    // iPad
    ["link", { rel: "apple-touch-icon", href: "/favicons/bylothink-167x167.png", sizes: "167x167", type: "image.png" }],

    // iPhone
    ["link", { rel: "apple-touch-icon", href: "/favicons/bylothink-180x180.png", sizes: "180x180", type: "image.png" }],

    // Mastodon verification
    ["link", { rel: "me", href: "https://mastodon.uno/@byloth" }]
  ],

  lastUpdated: true,

  srcDir: "./src",
  cacheDir: "./cache",
  outDir: "./dist",

  themeConfig: {
    logo: "/favicons/bylothink-32x32.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/Byloth" },
      { icon: "mastodon", link: "ttps://mastodon.uno/@byloth" },
      { icon: "instagram", link: "https://www.instagram.com/byloth_dev/" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/byloth/" },
      { icon: "spotify", link: "https://open.spotify.com/user/21q4g5zjmgfv5qctquiqawkgq" },
      { icon: "steam", link: "https://steamcommunity.com/id/byloth/" }
    ],
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
