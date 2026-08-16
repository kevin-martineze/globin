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
 * Generated backdrops. Decorative — they carry no information the copy does not
 * already state — so they ship with `alt=""` plus `aria-hidden`, and the alt
 * strings here stay empty on purpose.
 *
 * A ribbon render for the hero was tried and dropped: the built backdrop it
 * would have replaced (gradient, grid, animated node graph) reads better, and
 * it costs no image weight. The render is kept in `media-source/gemini/` in
 * case a section ever wants it.
 */
export const textures = {
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
