// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Absolute base for the sitemap, the canonical links and the og:image URL.
 *
 * Resolved at build time instead of hardcoded, in this order:
 *
 *  1. `SITE_URL` — set this once the real domain is bought and it wins
 *     everywhere. It is the only thing that has to change at that point.
 *  2. `VERCEL_PROJECT_PRODUCTION_URL` — injected by Vercel. It always points at
 *     the production domain, including inside preview builds, which is what
 *     canonical and og:image must reference; using the per-deployment URL here
 *     would have every preview claim to be the canonical page.
 *  3. localhost, for a plain local build.
 *
 * Truthiness, not `??`: a variable that exists but is empty is normal in CI, and
 * `??` would pass the empty string straight through to Astro, which then fails
 * the build on an invalid `site`.
 */
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

// https://astro.build/config
export default defineConfig({
  site,
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
