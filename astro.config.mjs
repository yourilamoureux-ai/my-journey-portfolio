// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";
import { fileURLToPath } from 'url'; // <-- Add this import for aliases

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: Remember to replace this with your final URL
  site: "https://your-final-website-url.com",

  // This is the internationalization configuration
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "de", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  
  integrations: [preact(), icon(), sitemap({
    filter: (page) =>
      !page.includes("/blog/tags") &&
      !page.includes("/blog/techs"),
  }),],

  vite: {
    plugins: [tailwindcss()],
    // This adds the '@/` shortcut for your 'src/' folder
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },
});