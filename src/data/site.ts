/**
 * Facts that are the same in every language.
 *
 * Anything with words in it lives in `src/i18n/` instead — this file is phone
 * numbers, addresses and URLs, which do not get translated. Keeping the two
 * apart is what stops a translation from quietly changing a contact detail.
 */
export interface SiteConfig {
  name: string;
  shortName: string;

  /**
   * Country only, deliberately.
   *
   * The brief places the company in Barranquilla, Atlántico, but the page sells
   * to clients anywhere, and a street-level address makes a remote software
   * firm read as a local supplier. The country stays because it is the part
   * that builds trust — who invoices you, in which time zone — and because the
   * JSON-LD needs somewhere to point.
   */
  country: string;
  /** ISO 3166-1 alpha-2, for structured data. */
  countryCode: string;

  phone: string;
  /** Digits only, country code included, no `+` — this goes into a wa.me URL. */
  whatsapp: string;
  email: string;

  social: Record<'instagram' | 'linkedin' | 'github', string>;
  /** Handles as the client writes them, shown next to the links. */
  handles: Record<'instagram' | 'linkedin' | 'github', string>;

  /** Anchor for the primary call to action — structural, not a channel. */
  ctaHref: string;
}

export const site: SiteConfig = {
  name: 'Globin',
  shortName: 'Globin',

  country: 'Colombia',
  countryCode: 'CO',

  phone: '+57 317 145 1152',
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

  ctaHref: '#contacto',
};

/** WhatsApp deep link. Returns null when no number is on file, so callers skip it. */
export const whatsappLink = (message: string): string | null =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}` : null;

/** Prefilled email link, or null while no address is on file. */
export const mailtoLink = (subject: string): string | null =>
  site.email ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}` : null;
