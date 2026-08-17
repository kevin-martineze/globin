import type { Content } from './types';

/**
 * English.
 *
 * A translation of the brief's claims, not a rewrite of them: the same promises
 * in the same order, and nothing here that the Spanish side does not say. Where
 * the brief bans something — invented clients, figures, testimonials, published
 * prices — the ban travels with the translation.
 *
 * Anchors (`href`) stay in Spanish on purpose: they are the same page ids in
 * both languages, so a section renamed here cannot silently break the other
 * language's index rail.
 */
export const en: Content = {
  htmlLang: 'en',
  ogLocale: 'en_US',

  meta: {
    tagline: 'Digital ingenuity for real problems',
    description:
      'Software company. We build applications, web platforms, automations and cloud infrastructure tailored to your business, and stay with you from the first idea to the product’s evolution.',
  },

  nav: [
    { label: 'Services', href: '#servicios' },
    { label: 'How we work', href: '#proceso' },
    { label: 'Engagements', href: '#modalidades' },
    { label: 'FAQ', href: '#preguntas' },
  ],

  sections: [
    { label: 'Start', href: '#inicio' },
    { label: 'Approach', href: '#enfoque' },
    { label: 'Services', href: '#servicios' },
    { label: 'Commitments', href: '#diferenciadores' },
    { label: 'Process', href: '#proceso' },
    { label: 'Engagements', href: '#modalidades' },
    { label: 'FAQ', href: '#preguntas' },
    { label: 'Contact', href: '#contacto' },
  ],

  actions: {
    primary: 'Tell us about your project',
    whatsapp: 'Chat on WhatsApp',
    email: 'Send us an email',
    services: 'See what we build',
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    homeLabel: 'Globin — home',
  },

  hero: {
    kicker: {
      left: 'Software and technology solutions',
      right: 'Clients in any country',
    },
    headline: 'Digital solutions built with <em>ingenuity</em> to grow your business',
    standfirst:
      'At Globin we design and build software, mobile apps, automations and cloud solutions shaped around what your company actually needs.',
  },

  approach: {
    label: 'Where it starts',
    problem:
      'Does your company still lean on manual processes, disconnected tools, or systems that no longer keep up with what you need?',
    answerLabel: 'The answer',
    solution:
      'We study your situation, propose a workable solution and build the technology your business needs.',
    detail:
      'No unnecessary complexity: we understand the problem first, then decide what to build, at what scope and in what order.',
    promise:
      'We help small and medium companies turn manual processes into digital solutions that scale.',
    symptoms: [
      'Manual work that repeats every single day',
      'Information scattered across tools that never talk to each other',
      'Slow processes, with errors that are hard to trace',
      'Systems that no longer match the size of the business',
    ],
  },

  services: {
    label: 'Services',
    title: 'What we build',
    intro:
      'A broad offering, grouped into six areas. Most projects combine several of them: almost no business problem fits in a single category.',
    items: [
      {
        id: 'software-a-medida',
        name: 'Custom software',
        summary:
          'Applications and platforms designed around your company’s actual processes, goals and constraints.',
        detail: 'Internal systems · management platforms · digital products',
        icon: 'blocks',
        featured: true,
      },
      {
        id: 'aplicaciones-moviles',
        name: 'Mobile apps',
        summary:
          'Apps for Android, iOS or both, with a consistent experience and room to grow.',
        detail: 'Android · iOS · cross-platform',
        icon: 'device',
        featured: true,
      },
      {
        id: 'web-ecommerce',
        name: 'Web platforms and ecommerce',
        summary:
          'Websites, company portals, digital platforms and online stores, built to bring in customers or to make your operations easier.',
        detail: 'Corporate sites · portals · online stores',
        icon: 'window',
      },
      {
        id: 'automatizacion',
        name: 'Automation and integrations',
        summary:
          'We digitise repetitive work and connect your tools, so there are fewer errors, less wasted time, and one place to look for information.',
        detail: 'Backend · APIs · system integrations',
        icon: 'flow',
      },
      {
        id: 'cloud-devops',
        name: 'Cloud and DevOps',
        summary:
          'We get your solution ready to grow, to ship changes safely, and to stay stable as your user numbers climb.',
        detail: 'Cloud · servers · containers · CI/CD · scalable environments',
        icon: 'cloud',
      },
      {
        id: 'soporte-evolucion',
        name: 'Support and evolution',
        summary:
          'Launch is not the end: maintenance, improvements, monitoring and continuous development so the solution keeps up with the business.',
        detail: 'Corrective maintenance · monitoring · new features',
        icon: 'pulse',
      },
    ],
  },

  differentiators: {
    label: 'Commitments',
    title: 'Well-considered technology,<br />clear communication',
    intro:
      'Support from beginning to end. These are the commitments we work under on every project.',
    items: [
      {
        title: 'We understand before we build',
        body: 'We learn the context of your business first, and propose after. You do not need to master the technology to work with us — that part is our job.',
      },
      {
        title: 'We prioritise what creates value',
        body: 'Technology has to connect to concrete outcomes: saving time, reducing errors, improving service, selling more, or making decisions easier.',
      },
      {
        title: 'We communicate straight',
        body: 'We recommend what you actually need, even when the right option is simpler or cheaper than the one you had in mind.',
      },
      {
        title: 'We design for growth',
        body: 'It is not only about coding features, but about building solutions that are useful and maintainable, and that fit your budget and your priorities.',
      },
      {
        title: 'We stay after launch',
        body: 'We keep working with you after deployment: support, maintenance, measurement, and evolving the product as the business changes.',
      },
    ],
  },

  process: {
    label: 'Process',
    title: 'From the idea<br />to the product',
    intro:
      'We work iteratively and in the open. We agree priorities with you, show progress often, and adjust the solution as we understand the problem better.',
    note: 'We fit the framework to the size of each project. On smaller ones, a simpler process is usually the better call.',
    phases: [
      {
        index: '01',
        title: 'We understand what you need',
        body: 'A first conversation to understand the business, the users, the problem and the goals. Out of it come the real needs, the risks and the constraints to work within.',
        stages: ['Discovery', 'Analysis'],
      },
      {
        index: '02',
        title: 'We design the solution',
        body: 'We define the initial scope, the technical approach, the stages, the timeline and the budget. Then we order the work by priority and increments, so what matters lands first.',
        stages: ['Proposal', 'Planning'],
      },
      {
        index: '03',
        title: 'We build and validate',
        body: 'We build and deliver in parts, not all at once. Every increment is demonstrated and validated with you, so corrections happen early instead of at the end.',
        stages: ['Iterative development', 'Review'],
      },
      {
        index: '04',
        title: 'We launch, and stay',
        body: 'We deploy to the right environment and stay with it: support, maintenance, measurement and evolution as the business changes.',
        stages: ['Launch', 'Ongoing support'],
      },
    ],
  },

  engagements: {
    label: 'Engagements',
    title: 'Two ways<br />to work together',
    intro:
      'A project with a start and an end, or continuous support. Many companies begin with the first and carry on with the second.',
    note: 'Every project is scoped by its own complexity, priorities and support needs. That is why we start with an evaluation rather than a price list.',
    items: [
      {
        id: 'proyecto',
        kicker: 'Engagement A',
        name: 'Fixed projects',
        summary: 'For when there is something specific to build, with a defined start and end.',
        items: [
          'Website',
          'Online store',
          'Mobile app',
          'Internal system',
          'API or integration',
          'Automation',
          'Cloud migration or deployment',
        ],
      },
      {
        id: 'acompanamiento',
        kicker: 'Engagement B',
        name: 'Monthly support',
        summary: 'For when the solution is already live and needs to evolve month by month.',
        items: [
          'Maintenance',
          'Technical support',
          'New features',
          'Monitoring',
          'Performance improvements',
          'Infrastructure management',
          'Technology advice',
        ],
      },
    ],
  },

  faq: {
    label: 'Frequently asked',
    title: 'What people<br />usually ask us',
    items: [
      {
        question: 'Do you work with companies outside Colombia?',
        answer:
          'Yes. Globin is a Colombian company and works with clients both in Colombia and abroad. Projects are coordinated remotely, with meetings arranged around your time zone.',
        source: '§1 Información general',
      },
      {
        question: 'How much does a project cost?',
        answer:
          'Every project is scoped by its own complexity, priorities and support needs, so we do not publish fixed prices. The first step is an evaluation of what you need; the proposal with stages, timeline and budget follows from there.',
        source: '§7 Alcance y modalidades',
      },
      {
        question: 'Can I start with something small?',
        answer:
          'Yes. We recommend what you actually need, even when the right option is simpler or cheaper than the one you had in mind. Starting with what creates value and growing from there is usually better.',
        source: '§5 Diferenciadores — Sinceridad',
      },
      {
        question: 'Do I need to be technical to work with you?',
        answer:
          'No. We learn the context of your business first and translate the technical side into decisions you can make with confidence. We explain the technical detail whenever you want it, not as a requirement to move forward.',
        source: '§5 Diferenciadores — Empatía · §10 Tono',
      },
      {
        question: 'I already have a system. Can you maintain or improve it?',
        answer:
          'Yes. We work both on new solutions and on existing software that needs maintenance, integrations with other tools, or evolution towards new features.',
        source: '§4 Público objetivo · §3 Servicios',
      },
      {
        question: 'What is the work like during the project?',
        answer:
          'Iterative and transparent: we agree priorities with you, show progress often, and adjust the solution as we understand the problem better. We fit the framework to the size of the project rather than imposing a rigid process.',
        source: '§6 Metodología',
      },
      {
        question: 'What happens after launch?',
        answer:
          'We can keep supporting the solution with maintenance, monitoring, performance improvements, infrastructure management and new features, under the monthly support engagement.',
        source: '§7 Alcance y modalidades',
      },
    ],
  },

  closing: {
    label: 'Next step',
    question: 'Have an idea, a problem, or a process you want to improve?',
    answer:
      'Tell us what you need and we will help you work out the next step. The initial evaluation commits you to nothing.',
    channels: { whatsapp: 'WhatsApp', email: 'Email' },
    coverage: 'We work remotely with clients in Colombia and abroad.',
  },

  form: {
    kicker: 'Tell us about your project',
    name: 'Name *',
    namePlaceholder: 'What should we call you',
    company: 'Company',
    companyOptional: 'Optional',
    need: 'What do you need?',
    needUnsure: 'I am not sure yet',
    needOther: 'Something else',
    message: 'Tell us a little more *',
    messagePlaceholder: 'The problem you want to solve, or what you would like to build.',
    sendWhatsapp: 'Send on WhatsApp',
    sendEmail: 'Send by email',
    privacy:
      'The form sends nothing on its own: it composes the message and opens it in WhatsApp or your email client so you can review it before sending. We store no data.',
    noscript: 'This form needs JavaScript to compose the message. Write to us directly on',
    greeting: 'Hello Globin.',
    iAm: (name) => `I am ${name}.`,
    iAmFrom: (name, company) => `I am ${name}, from ${company}.`,
    interestedIn: 'I am interested in:',
    emailSubject: 'I would like to tell you about my project',
    prefilled: 'Hello Globin, I would like to tell you about my project.',
  },

  footer: {
    navLabel: 'Navigation',
    contactLabel: 'Contact',
    rights: 'All rights reserved.',
  },

  attributes: [
    'Ingenuity',
    'Trust',
    'Closeness',
    'Technical judgement',
    'Straight talk',
    'Curiosity',
    'Resourcefulness',
  ],

  language: { label: 'Language', switchTo: 'Español' },
};
