// https://nuxt.com/docs/api/configuration/nuxt-config
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
        // usa caminho absoluto para garantir que funciona em dev e prod
        base: join(__dirname, ".data"),
        mkdirs: true, // cria pastas automaticamente
      },
    },
    prerender: {
      crawlLinks: false,
      failOnError: false,
    }, // no routes to prerender
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
      serverDir: ".netlify/functions",
    },
  },
  image: {
    provider: "filerobot",
    filerobot: {
      baseURL: "https://nuxt-chat-ai.netlify.app",
    },
    dir: "./public",
    // permite proxy de github avatars
  },
});
