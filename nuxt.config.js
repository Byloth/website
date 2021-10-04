const PRODUCTION = process.env.NODE_ENV === "production";

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  modern: PRODUCTION ? "client" : false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "%s @ Byloth's Website",
    meta: [],
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
        crossorigin: true
      },

      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
      },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Material+Icons"
      },

      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Icons" },

      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },

  loading: { color: "#FFD600" },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/scss/main.import.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@/plugins/init.client.ts",
    "@/plugins/errors-handler.client.ts",

    "@/plugins/globals/mdc.client.ts",
    "@/plugins/globals/time.client.ts",

    "@/plugins/refresh-dialog.client.ts",
    "@/plugins/vue-scroll-animator.client.ts"
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/google-analytics",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/sitemap"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: { baseUrl: "https://www.byloth.net" },

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: { },

  generate: {
    routes: async function()
    {
      const { $content } = require("@nuxt/content");
      const files = await $content("posts")
        .only(["path"])
        .fetch();

      return files.map((file) => file.path === "/index" ? "/" : file.path);
    }
  },

  googleAnalytics: {
    id: ["UA-55278628-1", "G-B7SZ4CRWXT"],
    disabled: true
  },

  pwa: {
    manifest: {
      name: "Byloth's Website",
      short_name: "Byloth",

      start_url: "/",

      background_color: "#35363A",
      theme_color: "#004BA0",

      lang: "it"
    }
  },

  sitemap: { hostname: "https://www.byloth.net" },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: { }
};
