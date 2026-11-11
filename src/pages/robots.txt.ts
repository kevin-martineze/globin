import type { APIRoute } from 'astro';

/**
 * Built from `site` instead of shipping a static file in `public/`, so the
 * sitemap URL follows the same domain resolution as canonical and og:image
 * (see astro.config.mjs) and never drifts from it.
 *
 * Nothing is disallowed on purpose: /estilo is kept out of results with a
 * `noindex` meta, and a crawler blocked here could never read that meta.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site);
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemap.href}`, ''].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
