export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  runtimeConfig: {
    oauthGithubClientId: "",
    oauthGithubClientSecret: "",
  },

  nitro: {
    storage: {
      db: {
        driver: "fs",
        base: "./.data",
      },
    },
  },
  modules: ["nuxt-auth-utils"],
});
