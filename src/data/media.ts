/**
 * Image registry.
 *
 * Every image is imported here once, alongside its alt text, and components
 * reference the entry. Two reasons: alt text gets written once by whoever knows
 * what the image shows instead of being improvised at each call site, and
 * swapping an image is a one-line change in this file rather than a grep.
 *
 * Imports go through `astro:assets`, so Astro emits the responsive webp/avif
 * variants at build time. Files live in `src/assets/` for that reason — assets
 * dropped in `public/` are copied verbatim and skip the whole pipeline.
 *
 * Decorative images (background texture, anything the copy already describes)
 * take `alt=""` plus `aria-hidden="true"` instead of a description.
 */
import mark from '../assets/brand/globin-mark.png';
import heroRibbons from '../assets/textures/hero-ribbons.jpg';
import nodeGrid from '../assets/textures/node-grid.jpg';

export type MediaEntry = {
  src: ImageMetadata;
  alt: string;
};

export const brand = {
  /**
   * The mark with a reconstructed alpha channel — see
   * scripts/build-brand-assets.mjs. The master (globin-logo.png) has the dark
   * backdrop baked in and must not be used in the layout: over the hero
   * gradient it would show as a dark tile.
   *
   * Alt text is just the company name: the mark is the link to the homepage,
   * so what a screen reader needs is the destination, not a description of the
   * artwork.
   */
  mark: { src: mark, alt: 'Globin' },
} as const satisfies Record<string, MediaEntry>;

/**
 * Generated backdrops. Both are purely decorative — they carry no information
 * the copy does not already state — so they ship with `alt=""` plus
 * `aria-hidden`, and the alt strings here stay empty on purpose.
 *
 * Both are 3D renders in the brand's own language: teal ribbons, silver
 * ribbons, a sparse node network. They are the one thing worth generating
 * rather than drawing in CSS — organic depth of field does not come out of a
 * gradient.
 */
export const textures = {
  /**
   * Hero backdrop, 1376x768. The left ~45% is deliberately empty so the
   * headline sits on darkness rather than on ribbons. It upscales past its
   * native width on large displays; the grain overlay and the veil hide it,
   * and the subject is soft enough that no edge gives it away.
   */
  heroRibbons: { src: heroRibbons, alt: '' },
  /**
   * Node network, 1024x1024. Measured, it very nearly tiles but not exactly —
   * opposite edges differ about a third as much as two random columns do,
   * which is close enough to look repeating and far enough to show a seam. So
   * it is used as one non-repeating cover layer, never as `background-repeat`.
   */
  nodeGrid: { src: nodeGrid, alt: '' },
} as const satisfies Record<string, MediaEntry>;

/** TODO(brief): photography, if any is ever supplied. */
export const photos: Record<string, MediaEntry> = {};
