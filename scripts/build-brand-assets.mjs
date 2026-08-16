/**
 * Derives every brand asset the site needs from the single logo master.
 *
 *   node scripts/build-brand-assets.mjs
 *
 * Run it whenever `src/assets/brand/globin-logo.png` is replaced. The outputs
 * are committed rather than generated at build time: they change only when the
 * logo does, and keeping them in the repo means a clone builds without needing
 * this script to have run.
 *
 * The master arrived as an opaque 400x400 PNG with the dark background baked in.
 * That is fine on the page background but wrong in the header, where the logo
 * sits over the hero gradient and the baked square would show as a dark tile.
 * So the alpha channel is reconstructed from the distance to the background
 * colour: the artwork stays opaque, the soft drop shadow fades out the way it
 * was drawn, and no hard cut-out halo appears.
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const master = resolve(root, 'src/assets/brand/globin-logo.png');

/** Background colour baked into the master, sampled from its corners. */
const BG = { r: 9, g: 16, b: 22 };
/** How fast a pixel becomes opaque as it separates from the background. */
const ALPHA_GAIN = 5;

/** Page background, so the opaque assets (favicons, share card) match the site. */
const INK = '#091016';

async function transparentMark() {
  const { data, info } = await sharp(master).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const distance = Math.max(
      Math.abs(data[i] - BG.r),
      Math.abs(data[i + 1] - BG.g),
      Math.abs(data[i + 2] - BG.b),
    );
    data[i + 3] = Math.min(255, distance * ALPHA_GAIN);
  }

  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toBuffer();
}

/*
 * Note on the single-colour variant: it cannot be derived here, and the attempt
 * was removed rather than shipped. Thresholding the alpha produces a filled
 * blob — the mark's ribbons read only through shading, so a flat silhouette
 * loses every internal edge. A real monochrome lockup has to decide where the
 * negative space goes, which is a drawing decision, not an image operation.
 */

async function main() {
  const mark = await transparentMark();

  await sharp(mark).toFile(resolve(root, 'src/assets/brand/globin-mark.png'));

  // Favicons. The dark plate is deliberate: a transparent favicon disappears
  // against the browser's own dark chrome.
  for (const size of [32, 180, 192, 512]) {
    const name = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}.png`;
    await sharp({
      create: { width: size, height: size, channels: 4, background: INK },
    })
      .composite([
        {
          input: await sharp(mark)
            .resize(Math.round(size * 0.96), Math.round(size * 0.96))
            .toBuffer(),
          gravity: 'center',
        },
      ])
      .png()
      .toFile(resolve(root, 'public', name));
  }

  // Share card. No text: the only typeface that would be on-brand is the
  // self-hosted variable font, which this renderer cannot embed, and a share
  // card set in whatever font the machine happens to have is worse than one
  // that is purely the mark. Title and description come from the meta tags.
  const cardSize = 420;
  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: INK },
  })
    .composite([
      {
        input: await sharp(mark).resize(cardSize, cardSize).toBuffer(),
        top: Math.round((630 - cardSize) / 2),
        left: Math.round((1200 - cardSize) / 2),
      },
    ])
    .png()
    .toFile(resolve(root, 'public/og-image.png'));

  console.log('brand assets written');
}

await main();
