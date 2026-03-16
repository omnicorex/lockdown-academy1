import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { siteConfig } from "./src/config/site";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: siteConfig.url,

  vite: {
    plugins: [tailwindcss()]
  },

  server: {
    host: true
  },

  adapter: cloudflare()
});