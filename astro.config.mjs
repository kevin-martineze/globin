// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO(brief): point at the production domain before launch — the sitemap,
  // canonical URLs and the og:image URL are all built from this.
  site: 'https://globin.example.com',
  // /estilo is the internal style guide — it ships with the site so the client
  // and any new developer can see the system, but it is not a page to index.
  integrations: [sitemap({ filter: (page) => !page.includes('/estilo') })],
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
