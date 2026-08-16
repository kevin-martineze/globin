/**
 * Engagement models (brief §7).
 *
 * No prices: the brief is explicit that pricing is not published yet and that
 * the page should ask for an evaluation instead. `note` carries the client's own
 * provisional wording for how a project gets defined.
 */
export interface Engagement {
  id: string;
  kicker: string;
  name: string;
  summary: string;
  items: string[];
}

export const engagements: Engagement[] = [
  {
    id: 'proyecto',
    kicker: 'Modalidad A',
    name: 'Proyectos puntuales',
    summary: 'Para cuando hay algo concreto que construir, con un inicio y un final definidos.',
    items: [
      'Sitio web',
      'Tienda online',
      'Aplicación móvil',
      'Sistema interno',
      'API o integración',
      'Automatización',
      'Migración o despliegue cloud',
    ],
  },
  {
    id: 'acompanamiento',
    kicker: 'Modalidad B',
    name: 'Acompañamiento mensual',
    summary: 'Para cuando la solución ya está viva y necesita evolucionar mes a mes.',
    items: [
      'Mantenimiento',
      'Soporte técnico',
      'Nuevas funcionalidades',
      'Monitoreo',
      'Mejoras de rendimiento',
      'Gestión de infraestructura',
      'Asesoría tecnológica',
    ],
  },
];

export const engagementNote =
  'Cada proyecto se define de acuerdo con su alcance, complejidad, prioridades y necesidades de acompañamiento. Por eso empezamos con una evaluación y no con una tarifa.';
