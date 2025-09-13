// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/",
    pageTransition: { name: "page", mode: "out-in" }
  },
  compatibilityDate: "2025-07-15",
  components: [
    { path: "@/components" },
    {
      global: true,
      path: "@/components/globals",
      pathPrefix: false
    }
  ],
  devtools: { enabled: true },
  modules: [
    "@byloth/nuxt-vuert-module",
    "@pinia/nuxt"
  ],
  typescript: {
    typeCheck: true,
    tsConfig: {
      compilerOptions: { noUncheckedIndexedAccess: false }
    }
  }
});
