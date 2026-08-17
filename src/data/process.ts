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
import type { Dual } from './dual';

export interface Phase {
  /** Two-digit marker, shown in mono. */
  index: string;
  title: string;
  body: Dual;
  /** The underlying stages from the brief's eight-step method. */
  stages: string[];
}

export const processIntro: Dual = {
  simple:
    'Trabajamos de forma iterativa y transparente. Validamos las prioridades contigo, mostramos avances frecuentes y ajustamos la solución a medida que entendemos mejor el problema.',
  tecnico:
    'Entrega incremental con validación en cada ciclo. Las prioridades se acuerdan contigo, los avances se demuestran y el alcance se ajusta conforme el dominio se entiende mejor.',
};

export const phases: Phase[] = [
  {
    index: '01',
    title: 'Entendemos tu necesidad',
    body: {
      simple:
        'Una primera reunión para comprender el negocio, los usuarios, el problema y los objetivos. De ahí salen las necesidades reales, los riesgos y las restricciones con las que hay que contar.',
      tecnico:
        'Levantamiento del dominio: procesos, actores, datos y sistemas existentes. De ahí salen los requisitos, los riesgos técnicos y las restricciones de integración.',
    },
    stages: ['Descubrimiento', 'Análisis'],
  },
  {
    index: '02',
    title: 'Diseñamos la solución',
    body: {
      simple:
        'Definimos el alcance inicial, la solución técnica, las etapas, los tiempos y el presupuesto. Después organizamos el trabajo por prioridades e incrementos, para que lo importante llegue primero.',
      tecnico:
        'Definición de alcance, arquitectura, etapas y estimación. El trabajo se ordena en incrementos priorizados por valor y por riesgo, no por comodidad de implementación.',
    },
    stages: ['Propuesta', 'Planeación'],
  },
  {
    index: '03',
    title: 'Construimos y validamos',
    body: {
      simple:
        'Construimos y entregamos por partes, no de una sola vez. Cada avance se demuestra y se valida contigo, así que las correcciones ocurren temprano y no al final.',
      tecnico:
        'Entregas incrementales con demostración y validación al cierre de cada ciclo. Las correcciones entran mientras el cambio sigue siendo barato.',
    },
    stages: ['Desarrollo iterativo', 'Revisión'],
  },
  {
    index: '04',
    title: 'Lanzamos y seguimos acompañando',
    body: {
      simple:
        'Desplegamos la solución en el ambiente que corresponda y seguimos ahí: soporte, mantenimiento, medición y evolución a medida que el negocio cambia.',
      tecnico:
        'Despliegue en el ambiente que corresponda, monitoreo, soporte y evolución continua conforme cambian los requisitos.',
    },
    stages: ['Lanzamiento', 'Acompañamiento'],
  },
];
