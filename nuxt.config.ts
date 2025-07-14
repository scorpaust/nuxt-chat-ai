// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  modules: ["@nuxt/eslint", "@nuxt/image"],

  nitro: {
    storage: {
      db: {
        driver: "fs",
        base: "./.data",
        mkdirs: true,
      },
    },
    externals: {
      inline: ["@prisma/client", ".prisma/client"],
    },
    prerender: {
      // desliga o crawler automático de links
      crawlLinks: false,
      // opcional: não falha o build se houver erro de prerender
      failOnError: false,
    },
  },

  routeRules: {
    "/": {
      prerender: true,
    },
  },
});
