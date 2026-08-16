# Working on this repo

Read [`README.md`](README.md) first — it documents the design system, the motion
layer and the file layout. This file covers the rules that are easy to break.

## The one rule

Nothing on the page may be invented. No headline, statistic, testimonial, price,
client logo or credential without a source in
[`docs/brief-globin.md`](docs/brief-globin.md) — the brief bans fabricated
clients, testimonials, figures and case studies in as many words. Where the brief
is silent, leave the value empty and let the component skip the block. Visible
placeholder text is written in `[brackets]` so it cannot ship by accident, and
open values in `src/data/` carry a `TODO(brief)` comment.
[`docs/pendientes.md`](docs/pendientes.md) tracks what is still missing.

## Conventions

- **Content lives in `src/data/*.ts`**, never in markup. Components render.
- **Colour is referenced by role**, never as a raw hex or a stock Tailwind
  colour. The palette in `@theme` is sampled from the logo and may be resampled
  when the identity is finalised; components that use tokens survive that
  untouched, components with hardcoded colour do not. The brand has two colours,
  teal and silver — resist adding a third.
- **Tailwind 4**: there is no `tailwind.config.js`. Design tokens go in the
  `@theme` block of `src/styles/global.css`.
- **`src/lib/motion.ts` is the only file that imports GSAP.** Components opt
  into animation with `data-*` attributes. Adding a GSAP import elsewhere breaks
  the guarantee that everything animatable is auditable in one file.
- **Anchors**: a section's `id`, the `index` prop, and the `nav` entry in
  `src/data/site.ts` have to stay in step. A mismatch makes the anchor scroll do
  nothing, silently.
- **Images** go through `astro:assets` from `src/assets/`, registered once in
  `src/data/media.ts` with their alt text. `public/` is for files that must ship
  byte-for-byte (favicon, PDFs, video).
- **Comments explain why**, not what. The existing ones are the reference.
- Page copy is Spanish; code, comments and docs are English (the brief and the
  pending-items list are the exception — they are the client's own documents).
- **Tone** follows the brief (§10): clear before technical. Where a technical
  register is useful it goes in a second line, small and in mono, the way the
  service cards do it — never as the first thing the reader meets.

## Accessibility floor

Not optional, and cheap to keep if never dropped: skip link intact, one `<h1>`
per page, decorative images `alt=""` + `aria-hidden`, focus ring never removed
(`brand-warm`, chosen to survive on photos), `prefers-reduced-motion` honoured
by anything new in `motion.ts`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.
Run `pnpm check` before handing work over.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
