import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  site: "https://cf-dans-v2.netlify.app/", //TODO - switch out to actual domain
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
