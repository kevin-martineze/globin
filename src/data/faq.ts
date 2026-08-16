/**
 * Frequently asked questions.
 *
 * The brief names an FAQ as one of the trust signals available while there are
 * no clients or case studies to show (§9). Every answer here is traceable to a
 * section of the brief — the `source` field records which, so a reviewer can
 * check the page against the document without guessing.
 *
 * Questions the brief cannot answer yet are not here: response times, quoting
 * process and support conditions are all still open decisions.
 */
export interface FaqItem {
  question: string;
  answer: string;
  /** Section of docs/brief-globin.md the answer comes from. */
  source: string;
}

export const faq: FaqItem[] = [
  {
    question: '¿Trabajan con empresas de otros países?',
    answer:
      'Sí. Globin es una empresa colombiana y atiende clientes tanto en Colombia como en otros países. El trabajo se coordina en remoto, con reuniones acordadas según tu huso horario.',
    source: '§1 Información general',
  },
  {
    question: '¿Cuánto cuesta un proyecto?',
    answer:
      'Cada proyecto se define de acuerdo con su alcance, complejidad, prioridades y necesidades de acompañamiento, así que no publicamos precios fijos. El primer paso es una evaluación de lo que necesitas; a partir de ahí llega la propuesta con etapas, tiempos y presupuesto.',
    source: '§7 Alcance y modalidades',
  },
  {
    question: '¿Puedo empezar con algo pequeño?',
    answer:
      'Sí. Recomendamos lo que realmente necesitas, incluso cuando la opción adecuada es más sencilla o más económica que la que tenías en mente. Es preferible empezar por lo que genera valor y crecer desde ahí.',
    source: '§5 Diferenciadores — Sinceridad',
  },
  {
    question: '¿Necesito saber de tecnología para trabajar con ustedes?',
    answer:
      'No. Primero entendemos el contexto de tu negocio y traducimos la parte técnica a decisiones que puedas tomar con criterio. Explicamos lo técnico cuando quieras conocerlo, no como requisito para avanzar.',
    source: '§5 Diferenciadores — Empatía · §10 Tono',
  },
  {
    question: 'Ya tengo un sistema. ¿Pueden mantenerlo o mejorarlo?',
    answer:
      'Sí. Trabajamos tanto con soluciones nuevas como con software existente que necesita mantenimiento, integraciones con otras herramientas o evolución hacia nuevas funcionalidades.',
    source: '§4 Público objetivo · §3 Servicios',
  },
  {
    question: '¿Cómo es el trabajo durante el proyecto?',
    answer:
      'Iterativo y transparente: validamos las prioridades contigo, mostramos avances con frecuencia y ajustamos la solución a medida que entendemos mejor el problema. Adaptamos el marco de trabajo al tamaño del proyecto en lugar de imponer un proceso rígido.',
    source: '§6 Metodología',
  },
  {
    question: '¿Qué pasa después del lanzamiento?',
    answer:
      'Podemos seguir acompañando la solución con soporte, mantenimiento, monitoreo, mejoras de rendimiento, gestión de infraestructura y nuevas funcionalidades, bajo la modalidad de acompañamiento mensual.',
    source: '§7 Alcance y modalidades',
  },
];
