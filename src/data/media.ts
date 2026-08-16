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

/** TODO(brief): photography, if any is ever supplied. */
export const photos: Record<string, MediaEntry> = {};
