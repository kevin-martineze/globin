/**
 * Services shown on the landing.
 *
 * The brief lists eight services (§3) but asks the page to show four to six,
 * grouped so a non-technical reader recognises their own problem (§9). These
 * six are that grouping: "Backend, APIs e integraciones" is folded into
 * automation, since both are the same promise to the client — systems that talk
 * to each other — and "Consultoría tecnológica" lives in the engagement models
 * instead, where the brief already places "asesoría tecnológica".
 *
 * Each card carries two registers, which is the brief's tone rule (§10): a
 * `summary` in the client's language, and a `detail` line with the technical
 * vocabulary for the reader who wants it.
 */
import type { Dual } from './dual';

export interface Service {
  id: string;
  name: string;
  /** The promise in both registers — see src/data/dual.ts. */
  summary: Dual;
  /** Scope tag, always shown. Mono, small, the same in either register. */
  detail: string;
  /** Key of the inline SVG drawn in Services.astro. */
  icon: 'blocks' | 'device' | 'window' | 'flow' | 'cloud' | 'pulse';
  /** Two cards lead the grid; the brief asks for uneven prominence (§9). */
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'software-a-medida',
    name: 'Software a medida',
    summary: {
      simple:
        'Aplicaciones y plataformas diseñadas según los procesos, objetivos y necesidades específicas de tu empresa.',
      tecnico:
        'Modelo de datos y reglas de negocio derivados de tus procesos, sobre una base mantenible a la que se le añaden módulos sin reescribir lo anterior.',
    },
    detail: 'Sistemas internos · plataformas de gestión · productos digitales',
    icon: 'blocks',
    featured: true,
  },
  {
    id: 'aplicaciones-moviles',
    name: 'Aplicaciones móviles',
    summary: {
      simple:
        'Apps para Android, iOS o ambas plataformas, con una experiencia coherente y preparada para crecer.',
      tecnico:
        'Android, iOS o ambas según el caso, con una arquitectura de aplicación que soporta crecer en funcionalidades sin rehacerse.',
    },
    detail: 'Android · iOS · multiplataforma',
    icon: 'device',
    featured: true,
  },
  {
    id: 'web-ecommerce',
    name: 'Plataformas web y ecommerce',
    summary: {
      simple:
        'Sitios web, portales empresariales, plataformas digitales y tiendas en línea orientadas a captar clientes o facilitar tus operaciones.',
      tecnico:
        'Sitios, portales y tiendas en línea con foco en rendimiento y posicionamiento, integrados con los sistemas que ya usas.',
    },
    detail: 'Sitios corporativos · portales · tiendas en línea',
    icon: 'window',
  },
  {
    id: 'automatizacion',
    name: 'Automatización e integraciones',
    summary: {
      simple:
        'Digitalizamos las tareas repetitivas y conectamos tus herramientas para reducir errores, ahorrar tiempo y tener la información en un solo lugar.',
      tecnico:
        'Servicios backend, APIs e integraciones entre sistemas: sincronización de datos, tareas programadas y flujos que eliminan el paso manual.',
    },
    detail: 'Backend · APIs · integraciones entre sistemas',
    icon: 'flow',
  },
  {
    id: 'cloud-devops',
    name: 'Cloud y DevOps',
    summary: {
      simple:
        'Preparamos tu solución para crecer, desplegar cambios con seguridad y mantenerse estable a medida que aumentan tus usuarios.',
      tecnico:
        'Nube, servidores y contenedores, pipelines de integración y despliegue continuo, ambientes separados por entorno y monitoreo.',
    },
    detail: 'Nube · servidores · contenedores · CI/CD · ambientes escalables',
    icon: 'cloud',
  },
  {
    id: 'soporte-evolucion',
    name: 'Soporte y evolución',
    summary: {
      simple:
        'El lanzamiento no es el final: mantenimiento, mejoras, monitoreo y desarrollo continuo para que la solución siga acompañando al negocio.',
      tecnico:
        'Mantenimiento correctivo, monitoreo, mejoras de rendimiento y desarrollo continuo posteriores al lanzamiento.',
    },
    detail: 'Mantenimiento correctivo · monitoreo · nuevas funcionalidades',
    icon: 'pulse',
  },
];
