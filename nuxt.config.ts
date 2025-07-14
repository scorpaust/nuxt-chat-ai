// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  modules: ["@nuxt/eslint", "@nuxt/image"],

  nitro: {
    preset: "netlify",
    storage: {
      db: {
        driver: "fs",
        base: "./.data",
        mkdirs: true,
      },
    },
    // 1) Diz ao Nitro para NÃO tentar bundlar estes módulos
    externals: {
      // 'external' = fica como require/import nativo em runtime
      // external: ["@prisma/client", ".prisma/client"],
      // limpa o inline (se tinha algo)
      inline: ["@prisma/client"],
    },

    // 2) Desliga o prerender automático (ou ajusta para não falhar)
    prerender: {
      // opcionalmente, se quiseres manter prerender, mas ignorar erros:
      failOnError: false,
      crawlLinks: false,
    },

    // Dá ao Nitro o mesmo layout de pastas que o Netlify espera
    output: {
      // Onde os assets estáticos vão (equivalente a "publish" no netlify.toml)
      publicDir: ".netlify/public",
      // Onde as Netlify Functions vão (equivalente a "functions" no netlify.toml)
      // serverDir: ".netlify/functions",
    },
  },

  routeRules: {
    "/": {
      prerender: false,
    },
  },
});
