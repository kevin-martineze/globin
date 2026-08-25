/**
 * The shape of every translation.
 *
 * One interface, two files that implement it (`es.ts`, `en.ts`). TypeScript is
 * the whole translation workflow here: adding a key to the Spanish file breaks
 * the build until the English file has it too, which is the only reliable way
 * to keep a two-language site from quietly drifting into one and a half.
 *
 * Only translatable copy lives here. Facts that are the same in every language
 * — phone number, email, social URLs, image files — stay in `src/data/`.
 */

export interface Service {
  id: string;
  name: string;
  summary: string;
  /**
   * The technical register, in mono and always second. Written as
   * `term · term · term`: Services.astro splits on the separator and sets the
   * terms as a list, so the middot is structure, not punctuation.
   */
  detail: string;
  /** Two services lead the sheet; the brief asks for uneven prominence (§9). */
  featured?: boolean;
}

export interface Phase {
  index: string;
  title: string;
  body: string;
  /** The underlying stages from the brief's eight-step method. */
  stages: string[];
}

export interface Engagement {
  id: string;
  kicker: string;
  name: string;
  summary: string;
  items: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  /** Section of docs/brief-globin.md the answer comes from. Never rendered. */
  source: string;
}

export interface Content {
  /** BCP 47 tag for `<html lang>` and `og:locale`. */
  htmlLang: string;
  ogLocale: string;

  meta: {
    tagline: string;
    description: string;
  };

  nav: { label: string; href: string }[];
  /** Superset of `nav`, for the index rail. Same `href`s. */
  sections: { label: string; href: string }[];

  actions: {
    primary: string;
    whatsapp: string;
    email: string;
    services: string;
    skipToContent: string;
    openMenu: string;
    homeLabel: string;
  };

  hero: {
    kicker: { left: string; right: string };
    /** `<em>` marks the brand word; it renders upright in the accent colour. */
    headline: string;
    standfirst: string;
  };

  approach: {
    label: string;
    problem: string;
    answerLabel: string;
    solution: string;
    detail: string;
    promise: string;
    symptoms: string[];
  };

  services: {
    label: string;
    title: string;
    intro: string;
    items: Service[];
  };

  differentiators: {
    label: string;
    title: string;
    intro: string;
    items: { title: string; body: string }[];
  };

  process: {
    label: string;
    title: string;
    intro: string;
    note: string;
    phases: Phase[];
  };

  engagements: {
    label: string;
    title: string;
    intro: string;
    note: string;
    items: Engagement[];
  };

  faq: {
    label: string;
    title: string;
    items: FaqItem[];
  };

  closing: {
    label: string;
    question: string;
    answer: string;
    channels: { whatsapp: string; email: string };
    coverage: string;
  };

  form: {
    kicker: string;
    name: string;
    namePlaceholder: string;
    company: string;
    companyOptional: string;
    need: string;
    needUnsure: string;
    needOther: string;
    message: string;
    messagePlaceholder: string;
    sendWhatsapp: string;
    sendEmail: string;
    privacy: string;
    noscript: string;
    /** Assembled into the message the client receives. */
    greeting: string;
    iAm: (name: string) => string;
    iAmFrom: (name: string, company: string) => string;
    interestedIn: string;
    emailSubject: string;
    prefilled: string;
  };

  footer: {
    navLabel: string;
    contactLabel: string;
    rights: string;
  };

  /** Brand attributes for the ticker, brief §10. */
  attributes: string[];

  language: {
    label: string;
    /** Shown on the switch for the *other* language. */
    switchTo: string;
  };
}
