// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { NuxtConfig } from "nuxt/schema";

declare module "nuxt/schema" {
  interface NuxtConfig {
    layers?: string[];
  }
}
