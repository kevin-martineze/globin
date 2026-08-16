# Globin

Landing page for Globin — a software firm in Barranquilla, Colombia, in its
founding stage. Built with Astro, static output.

The client brief in [`docs/brief-globin.md`](docs/brief-globin.md) is the source
of truth for everything the page says. Open items are tracked in
[`docs/pendientes.md`](docs/pendientes.md).

**Stack:** Astro 7 (static) · Tailwind CSS 4 · GSAP 3 (ScrollTrigger, SplitText)
· Lenis smooth scroll · self-hosted variable fonts (Archivo, Inter, JetBrains
Mono).

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output in dist/
pnpm preview    # serve the production build locally
pnpm check      # astro check — types and template diagnostics
```

The project is on pnpm. `sharp` is an explicit devDependency (Astro's image
pipeline fails the build without it) and `esbuild` is allowlisted in
`pnpm-workspace.yaml`, since pnpm blocks dependency build scripts by default.

If the dev server reports that another instance is already running, use
`npx astro dev stop` (or `astro dev --background` plus `astro dev status` /
`astro dev logs`).

## The page

One long scroll, composed in [`src/pages/index.astro`](src/pages/index.astro)
and nowhere else — read that file to know what the site says and in what order.

| # | Section | Component | Comes from |
| --- | --- | --- | --- |
| — | Hero | `Hero.astro` | brief §9 + `textures.heroRibbons` |
| — | Attribute ticker | `Marquee.astro` | brief §10 |
| 01 | Problem + solution | `Approach.astro` | brief §9, §4 |
| 02 | Services | `Services.astro` | `data/services.ts` |
| 03 | Differentiators | `Differentiators.astro` | `data/differentiators.ts` |
| 04 | Process | `Process.astro` | `data/process.ts` |
| 05 | Engagement models | `Engagements.astro` | `data/engagements.ts` |
| 06 | FAQ | `Faq.astro` | `data/faq.ts` |
| 07 | Closing CTA | `CtaBand.astro` | brief §9 |

Section indices are contiguous and each `id` matches an entry in `nav`
(`src/data/site.ts`). Break either and the anchor scroll silently stops working.

### What is deliberately absent

The brief rules out inventing clients, testimonials, figures or case studies,
and it leaves several facts undecided. So the page has no testimonial section, no
metrics counter, no client logos, no team section and no prices — the brief has
no material for any of them. Pricing is replaced by the client's own line: every
project is scoped by its own complexity, so the ask is an evaluation, not a
quote.

The page also names no city. The brief places the company in Barranquilla, but
it sells to clients anywhere and a street-level address makes a remote firm read
as a local supplier, so only the country survives — in the copy and in the
JSON-LD alike. See the note on `country` in `src/data/site.ts`.

Each FAQ entry carries a `source` field naming the section of the brief it comes
from. It is never rendered; it exists so the page can be audited against the
document.

## Design system

All of it is `@theme` in [`src/styles/global.css`](src/styles/global.css) —
Tailwind 4, so there is no `tailwind.config.js` to keep in sync.

**Colour.** Sampled from the logo, which is what the brief's direction (§11)
resolves to: dark background, one vibrant primary, one accent. The sphere's teal
averages `#389888` and the backdrop it was rendered on is `#091016` — a cool
blue-black, not a green one. `ink-950` *is* that backdrop colour, which is why
the mark sits on the page with no visible plate around it.

The logo has exactly two colours, teal and silver, and the palette keeps it that
way: `brand-accent` is the teal lifted in luminance so it survives at button
size, and `brand-spark` is the ribbons' silver, used to mark things rather than
fill them. A third colour would be a colour the brand does not have.

Components reference roles and never a raw hex, so resampling the `@theme` block
is the whole rebrand.

**Type.** Four registers. `.display` for oversized headlines (Archivo pushed wide
on its width axis), `.display-tight` for card titles, `.eyebrow` for section
labels, and JetBrains Mono for micro-text only — indices, technical asides, the
bracketed notices. Body copy is Inter. The mono is the brief's "elementos de
código, usados con moderación"; it never sets a paragraph.

**Layout.** `.shell` (max 96rem plus a fluid gutter) is the only container.
`.hairline` is every border on the page, so contrast is tuned in one place.
`.card` is the one card treatment, declared once because six sections use it and
drift between them is what makes a page look assembled rather than designed.
`.grid-lines` is the engineering grid — two gradients, no image — always behind a
mask, because a full-bleed grid competes with the type.

Run the dev server and open `/estilo` for the whole system rendered from the real
tokens. It is `noindex` and excluded from the sitemap.

## Animation

[`src/lib/motion.ts`](src/lib/motion.ts) is the only file that touches GSAP.
Components stay declarative and opt into behaviour with attributes:

| Attribute | Effect |
| --- | --- |
| `data-split` | Headline lines rise out of a clipping mask |
| `data-reveal="up\|fade\|scale\|left"` | Enter animation, with `data-reveal-delay` |
| `data-parallax="12"` | Scroll-linked vertical drift, value is % of travel |
| `data-marquee="30"` | Seamless ticker; the track must be duplicated in markup |
| `data-rail` | Pinned horizontal scroll section (≥1024px only) |
| `data-count="120"` | Number counts up when scrolled into view |
| `data-autoplay-video` | Video plays only while on screen |

Elements carrying `data-reveal` or `data-split` start at `opacity: 0`. If
anything in the boot sequence throws, `motion.ts` adds `no-motion` to `<html>`,
which restores full opacity — a JavaScript failure can never leave the page
blank. `prefers-reduced-motion` is honoured throughout, including the CSS-only
node pulse in the hero.

Lenis owns the scroll position, so ScrollTrigger reads from it and GSAP's ticker
drives the RAF loop; anchor links are routed through Lenis too. Changing any of
that makes pinned sections drift a frame behind the content.

The process section is the one pinned rail: on desktop it holds still while the
four phases travel sideways, and below 1024px it degrades to a swipeable list
with scroll snapping.

## The contact form

`ContactForm.astro` never posts anywhere. The site is static output, so there is
no server to receive a POST, and a third-party form service would add a
dependency, a privacy surface and one more place for a lead to get lost.

Instead the form composes a plain-text message from its fields and hands it to
WhatsApp (`wa.me`) or to the mail client, depending on which submit button was
pressed. Nothing is stored, and the visitor sees the message before sending it —
so the form cannot fail silently the way a POST to a dead endpoint does.

Details worth keeping if it is ever rewritten:

- The channel comes from `SubmitEvent.submitter`. Keyboard submission reports no
  submitter, so WhatsApp is the fallback — it is the primary action.
- `form.reportValidity()` drives validation. The browser's own bubbles are
  localised and screen-reader aware; a custom layer would be worse.
- The `wa.me` and `mailto` bases are rendered into `data-` attributes rather
  than inlined into the script, so `src/data/site.ts` stays the only place the
  contact details live.
- `window.open` is called inside the submit handler, which keeps it a user
  gesture and out of the pop-up blocker.
- `<noscript>` exposes both channels directly, so the block is never a dead
  form.

## Brand assets

The logo master is `src/assets/brand/globin-logo.png`, exactly as the client
supplied it: an opaque 400×400 PNG with a dark backdrop baked in. Everything else
is derived from it by

```bash
node scripts/build-brand-assets.mjs
```

which writes `src/assets/brand/globin-mark.png` (the mark with a reconstructed
alpha channel), the four favicons in `public/`, and `public/og-image.png`. The
outputs are committed rather than built on the fly: they change only when the
logo does, and a fresh clone should not need the script to have run.

The alpha is reconstructed by measuring each pixel's distance from the baked
background colour, so the soft drop shadow fades out the way it was drawn
instead of leaving a hard cut-out halo. The master itself must never be placed
in the layout — over the hero gradient its dark square shows as a tile. Use
`brand.mark` from `src/data/media.ts`.

Re-run the script after replacing the master, and check the result over the hero
gradient: a visible dark box around the mark means the background colour
constant in the script no longer matches the new file.

**Still missing:** a higher-resolution master (400px is the ceiling today) and a
single-colour version of the mark. The silhouette cannot be derived — the
ribbons read only through shading, so a flat threshold collapses into a blob.
That one needs drawing.

### Backdrops

Two generated renders live in `src/assets/textures/` and are registered as
`textures` in `src/data/media.ts`:

- `hero-ribbons.jpg` (1376×768) — the hero backdrop. Its left ~45% is empty by
  design, which is where the headline goes.
- `node-grid.jpg` (1024×1024) — the process section. It nearly tiles but not
  exactly, so it is used as a single `object-cover` layer, never repeated.

Both are decorative: `alt=""` plus `aria-hidden`, and their alt strings in the
registry are empty on purpose.

Two things to preserve when touching the hero. **No blend mode on the render** —
`mix-blend-screen` was tried and it lifted the blacks and turned the silver
ribbons grey-green. And the **veils live outside `[data-hero-media]`**, so they
hold still while the render drifts under them; the left-to-right veil is what
guarantees headline contrast at every viewport width, rather than hoping the
ribbons fall somewhere harmless.

## Adding a section

1. Put the content in a new `src/data/<thing>.ts`, typed and exported as a plain
   array. Copy does not live in markup.
2. Build `src/components/<Thing>.astro` around `Section.astro`, which supplies
   the numbered eyebrow, the split headline and the spacing.
3. Compose it in `src/pages/index.astro`, keeping the indices contiguous.
4. Add the anchor to `nav` in `src/data/site.ts`.

## Before launch

See [`docs/pendientes.md`](docs/pendientes.md) for the full list. The two that
block a launch: contact channels, and the production domain in
`astro.config.mjs` — the sitemap, the canonical URLs and the `og:image` URL are
all built from it.
