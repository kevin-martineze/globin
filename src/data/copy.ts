import type { Dual } from './dual';

/**
 * The page's long-form copy, in both registers.
 *
 * Section-level content lives with its own data file (services, process…);
 * what is here is the copy that belongs to no list: the hero, the opening
 * argument and the closing block.
 *
 * The simple voice is the brief's own wording wherever the brief supplies it
 * (§9 gives the hero headline and standfirst verbatim). The technical voice is
 * the same claims in the vocabulary of §3.
 */

export const hero = {
  headline: {
    simple: 'Soluciones digitales con <em>ingenio</em> para hacer crecer tu negocio',
    tecnico: 'Software a medida, integraciones y cloud para operaciones que tienen que <em>escalar</em>',
  } satisfies Dual,
  standfirst: {
    simple:
      'En Globin diseñamos y desarrollamos software, aplicaciones móviles, automatizaciones y soluciones cloud adaptadas a las necesidades reales de tu empresa.',
    tecnico:
      'Aplicaciones y plataformas a medida, servicios backend, APIs e integraciones entre sistemas, automatización de procesos e infraestructura en la nube con entrega continua.',
  } satisfies Dual,
} as const;

export const approach = {
  /** The question the brief opens the argument with (§9). */
  problem: {
    simple:
      '¿Tu empresa depende demasiado de procesos manuales, herramientas desconectadas o sistemas que ya no responden a tus necesidades?',
    tecnico:
      '¿Operas sobre procesos manuales, herramientas sin integrar y sistemas que ya no dan el rendimiento ni la mantenibilidad que necesitas?',
  } satisfies Dual,
  solution: {
    simple:
      'Analizamos tu situación, proponemos una solución viable y construimos la tecnología que tu negocio necesita.',
    tecnico:
      'Levantamos procesos y datos, definimos una arquitectura viable para tu contexto y la construimos por incrementos.',
  } satisfies Dual,
  detail: {
    simple:
      'Sin complicaciones innecesarias: primero entendemos el problema y después decidimos qué hay que construir, con qué alcance y en qué orden.',
    tecnico:
      'Sin sobreingeniería: primero el dominio y las restricciones, después las decisiones técnicas, el alcance y el orden de entrega.',
  } satisfies Dual,
  /** The value proposition, brief §2. */
  promise: {
    simple:
      'Ayudamos a pequeñas y medianas empresas a convertir sus procesos manuales en soluciones digitales escalables.',
    tecnico:
      'Convertimos procesos manuales en sistemas digitales mantenibles, integrados y preparados para crecer.',
  } satisfies Dual,
} as const;

/**
 * The four symptoms are the brief's own description of the target client (§4):
 * "tareas manuales, información dispersa, falta de automatización, procesos
 * lentos y dificultad para escalar".
 */
export const symptoms: Dual[] = [
  {
    simple: 'Tareas manuales que se repiten todos los días',
    tecnico: 'Trabajo repetitivo sin automatizar ni programar',
  },
  {
    simple: 'Información dispersa entre herramientas que no se hablan',
    tecnico: 'Datos duplicados en sistemas sin integrar ni sincronizar',
  },
  {
    simple: 'Procesos lentos y con errores difíciles de rastrear',
    tecnico: 'Procesos sin trazabilidad ni validación en el punto de entrada',
  },
  {
    simple: 'Sistemas que ya no responden al tamaño del negocio',
    tecnico: 'Sistemas sin margen de escalado ni ruta de mantenimiento',
  },
];

/** Standfirsts that belong to a section rather than to its list of items. */
export const sectionIntros = {
  services: {
    simple:
      'Una oferta amplia, agrupada en seis frentes. La mayoría de los proyectos combina más de uno: casi ningún problema de negocio cabe en una sola categoría.',
    tecnico:
      'Seis frentes que en la práctica se combinan. Un mismo proyecto suele tocar producto, integraciones e infraestructura a la vez.',
  } satisfies Dual,
  differentiators: {
    simple:
      'Acompañamiento de principio a fin. Estos son los compromisos con los que trabajamos en cada proyecto.',
    tecnico:
      'Acompañamiento de principio a fin. Estos son los criterios con los que tomamos decisiones técnicas en cada proyecto.',
  } satisfies Dual,
  engagements: {
    simple:
      'Un proyecto con inicio y final, o un acompañamiento continuo. Muchas empresas empiezan por el primero y siguen con el segundo.',
    tecnico:
      'Alcance cerrado o iteración continua. Lo habitual es construir en la primera modalidad y mantener y evolucionar en la segunda.',
  } satisfies Dual,
} as const;

export const closing = {
  question: '¿Tienes una idea, un problema o un proceso que quieras mejorar?',
  answer: {
    simple:
      'Cuéntanos qué necesitas y te ayudamos a identificar el siguiente paso. La evaluación inicial no compromete a nada.',
    tecnico:
      'Cuéntanos el contexto técnico y el objetivo de negocio, y te devolvemos un siguiente paso concreto. La evaluación inicial no compromete a nada.',
  } satisfies Dual,
} as const;
