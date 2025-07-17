// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  modules: ["@nuxt/eslint", "@nuxt/image"],

  layers: [fileURLToPath(new URL("./layers/auth", import.meta.url))],

  nitro: {
    preset: "netlify",
    storage: {
      db: {
        driver: "fs",
        base: "./.data",
        mkdirs: true,
      },
    },
    prerender: {
      crawlLinks: false,
      failOnError: false,
      ignore: ["/api/**"],
      routes: [], // no routes to prerender
    },
    routeRules: {
      "/api/**": { prerender: false },
    },
    // 1) Diz ao Nitro para NÃO tentar bundlar estes módulos
    externals: {
      // 'external' = fica como require/import nativo em runtime
      // external: ["@prisma/client", ".prisma/client"],
      // limpa o inline (se tinha a
      inline: ["@prisma/client", ".prisma/client"],
    },
    // Dá ao Nitro o mesmo layout de pastas que o Netlify espera
    output: {
      // Onde os assets estáticos vão (equivalente a "publish" no netlify.toml)
      publicDir: ".netlify/public",
      // Onde as Netlify Functions vão (equivalente a "functions" no netlify.toml)
      // serverDir: ".netlify/functions",
    },
  },
});
