/**
 * How we work.
 *
 * The brief describes eight stages (§6) and asks the landing to show them as
 * four (§9). `stages` keeps the original eight visible inside each block, so
 * the summary never hides the detail — a reader who wants the full method sees
 * it without a second page.
 *
 * Deliberately not framed as "Scrum": the brief warns against promising a rigid
 * framework, since a smaller project may be better off with something simpler.
 */
export interface Phase {
  /** Two-digit marker, shown in mono. */
  index: string;
  title: string;
  body: string;
  /** The underlying stages from the brief's eight-step method. */
  stages: string[];
}

export const processIntro =
  'Trabajamos de forma iterativa y transparente. Validamos las prioridades contigo, mostramos avances frecuentes y ajustamos la solución a medida que entendemos mejor el problema.';

export const phases: Phase[] = [
  {
    index: '01',
    title: 'Entendemos tu necesidad',
    body: 'Una primera reunión para comprender el negocio, los usuarios, el problema y los objetivos. De ahí salen las necesidades reales, los riesgos y las restricciones con las que hay que contar.',
    stages: ['Descubrimiento', 'Análisis'],
  },
  {
    index: '02',
    title: 'Diseñamos la solución',
    body: 'Definimos el alcance inicial, la solución técnica, las etapas, los tiempos y el presupuesto. Después organizamos el trabajo por prioridades e incrementos, para que lo importante llegue primero.',
    stages: ['Propuesta', 'Planeación'],
  },
  {
    index: '03',
    title: 'Construimos y validamos',
    body: 'Construimos y entregamos por partes, no de una sola vez. Cada avance se demuestra y se valida contigo, así que las correcciones ocurren temprano y no al final.',
    stages: ['Desarrollo iterativo', 'Revisión'],
  },
  {
    index: '04',
    title: 'Lanzamos y seguimos acompañando',
    body: 'Desplegamos la solución en el ambiente que corresponda y seguimos ahí: soporte, mantenimiento, medición y evolución a medida que el negocio cambia.',
    stages: ['Lanzamiento', 'Acompañamiento'],
  },
];
