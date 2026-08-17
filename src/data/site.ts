/**
 * Single source of truth for brand + contact strings.
 *
 * Every value comes from `docs/brief-globin.md`. Empty strings are open
 * questions with the client (the brief lists "canales concretos de contacto"
 * as pending), and every consumer treats an empty value as "do not render
 * this" — a plausible-looking placeholder that ships is worse than a visible
 * gap.
 *
 * The explicit type matters, and `as const` is deliberately not used: it would
 * narrow the pending fields to the literal type `''`, and TypeScript would then
 * reject the `site.phone && …` guards in the components as unreachable.
 */
export interface SiteConfig {
  name: string;
  shortName: string;

  /** Tagline chosen in the brief (§12) for the first version. */
  tagline: string;
  /** Meta description + footer paragraph. */
  description: string;
  /** Positioning paragraph, brief §12. */
  positioning: string;

  /**
   * Country only, deliberately.
   *
   * The brief places the company in Barranquilla, Atlántico, but the page sells
   * to clients anywhere, and a street-level address makes a remote software
   * firm read as a local supplier. The country stays because it is the part
   * that builds trust — who invoices you, in which time zone, in which
   * language — and because the JSON-LD needs somewhere to point.
   */
  country: string;
  /** Coverage note — brief §1: clients in Colombia and other countries. */
  coverage: string;

  phone: string;
  /** Digits only, country code included, no `+` — this goes into a wa.me URL. */
  whatsapp: string;
  email: string;

  social: Record<'instagram' | 'linkedin' | 'github', string>;
  /** Handles as the client writes them, shown next to the links. */
  handles: Record<'instagram' | 'linkedin' | 'github', string>;

  /** Primary CTA, brief §8. */
  cta: string;
  /** Anchors to the closing contact block — structural, not a channel. */
  ctaHref: string;
  /** Secondary CTA, brief §8. Only rendered when a WhatsApp number exists. */
  ctaSecondary: string;
}

export const site: SiteConfig = {
  name: 'Globin',
  shortName: 'Globin',

  tagline: 'Ingenio digital para problemas reales',
  description:
    'Empresa de software. Desarrollamos aplicaciones, plataformas web, automatizaciones e infraestructura cloud a la medida de tu empresa, y te acompañamos desde la idea hasta la evolución del producto.',
  positioning:
    'Globin es una empresa tecnológica colombiana que crea software y soluciones digitales a la medida para ayudar a empresas de distintos sectores a modernizar sus procesos, automatizar operaciones y crecer con tecnología confiable.',

  country: 'Colombia',
  coverage: 'Trabajamos en remoto con clientes en Colombia y otros países.',

  phone: '+57 317 145 1152',
  // Digits only, with country code and no `+`, because that is the format wa.me
  // expects. The display version above is the one people read.
  whatsapp: '573171451152',
  email: 'globinadmin@gmail.com',

  social: {
    instagram: '', // TODO(brief)
    linkedin: '', // TODO(brief)
    github: '', // TODO(brief)
  },
  handles: {
    instagram: '', // TODO(brief)
    linkedin: '', // TODO(brief)
    github: '', // TODO(brief)
  },

  cta: 'Cuéntanos tu proyecto',
  ctaHref: '#contacto',
  ctaSecondary: 'Hablar por WhatsApp',
};

/** WhatsApp deep link. Returns null when no number is on file, so callers skip it. */
export const whatsappLink = (message: string): string | null =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}` : null;

/** Prefilled email link, or null while no address is on file. */
export const mailtoLink = (subject: string): string | null =>
  site.email ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}` : null;

/**
 * Section navigation. Each `href` must match the `id` of a section composed in
 * `src/pages/index.astro`; a mismatch makes the Lenis anchor scroll silently do
 * nothing, so the two lists move together.
 */
export const nav: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Preguntas', href: '#preguntas' },
];

/**
 * Every section on the page, in order, for the index rail that tracks scroll.
 *
 * A superset of `nav`: the rail is a map of where you are, so it lists blocks
 * the header menu has no room for. Both lists point at the same `id`s, and an
 * entry here without a matching section leaves a rail item that never lights up.
 */
export const sections: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Enfoque', href: '#enfoque' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Compromisos', href: '#diferenciadores' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
];
