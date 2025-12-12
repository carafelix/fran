import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from 'unocss/astro'

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
  site: "https://barebones.superwebthemes.com",
});
