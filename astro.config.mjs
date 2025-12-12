import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({ injectReset: true }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  site: "https://fran735.cl",
});
