// @ts-check
// @ts-ignore
import { defineConfig } from "astro/config";
// @ts-ignore
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
