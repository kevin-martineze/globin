import type { Content } from './types';

/**
 * Spanish — the default language and the one the brief is written in.
 *
 * Every claim traces to `docs/brief-globin.md`. Where the brief supplies the
 * wording (§9 gives the hero verbatim, §7 the engagement note), it is used as
 * written rather than paraphrased.
 */
export const es: Content = {
  htmlLang: 'es',
  ogLocale: 'es_ES',

  meta: {
    tagline: 'Ingenio digital para problemas reales',
    description:
      'Empresa de software. Desarrollamos aplicaciones, plataformas web, automatizaciones e infraestructura cloud a la medida de tu empresa, y te acompañamos desde la idea hasta la evolución del producto.',
  },

  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Cómo trabajamos', href: '#proceso' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Preguntas', href: '#preguntas' },
  ],

  sections: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Enfoque', href: '#enfoque' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Compromisos', href: '#diferenciadores' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Preguntas', href: '#preguntas' },
    { label: 'Contacto', href: '#contacto' },
  ],

  actions: {
    primary: 'Cuéntanos tu proyecto',
    whatsapp: 'Hablar por WhatsApp',
    email: 'Escribirnos por correo',
    services: 'Conocer nuestros servicios',
    skipToContent: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    homeLabel: 'Globin — inicio',
  },

  hero: {
    kicker: {
      left: 'Software y soluciones tecnológicas',
      right: 'Clientes en cualquier país',
    },
    headline: 'Soluciones digitales con <em>ingenio</em> para hacer crecer tu negocio',
    standfirst:
      'En Globin diseñamos y desarrollamos software, aplicaciones móviles, automatizaciones y soluciones cloud adaptadas a las necesidades reales de tu empresa.',
  },

  approach: {
    label: 'El punto de partida',
    problem:
      '¿Tu empresa depende demasiado de procesos manuales, herramientas desconectadas o sistemas que ya no responden a tus necesidades?',
    answerLabel: 'La respuesta',
    solution:
      'Analizamos tu situación, proponemos una solución viable y construimos la tecnología que tu negocio necesita.',
    detail:
      'Sin complicaciones innecesarias: primero entendemos el problema y después decidimos qué hay que construir, con qué alcance y en qué orden.',
    promise:
      'Ayudamos a pequeñas y medianas empresas a convertir sus procesos manuales en soluciones digitales escalables.',
    symptoms: [
      'Tareas manuales que se repiten todos los días',
      'Información dispersa entre herramientas que no se hablan',
      'Procesos lentos y con errores difíciles de rastrear',
      'Sistemas que ya no responden al tamaño del negocio',
    ],
  },

  services: {
    label: 'Servicios',
    title: 'Lo que construimos',
    intro:
      'Una oferta amplia, agrupada en seis frentes. La mayoría de los proyectos combina más de uno: casi ningún problema de negocio cabe en una sola categoría.',
    items: [
      {
        id: 'software-a-medida',
        name: 'Software a medida',
        summary:
          'Aplicaciones y plataformas diseñadas según los procesos, objetivos y necesidades específicas de tu empresa.',
        detail: 'Sistemas internos · plataformas de gestión · productos digitales',
        icon: 'blocks',
        featured: true,
      },
      {
        id: 'aplicaciones-moviles',
        name: 'Aplicaciones móviles',
        summary:
          'Apps para Android, iOS o ambas plataformas, con una experiencia coherente y preparada para crecer.',
        detail: 'Android · iOS · multiplataforma',
        icon: 'device',
        featured: true,
      },
      {
        id: 'web-ecommerce',
        name: 'Plataformas web y ecommerce',
        summary:
          'Sitios web, portales empresariales, plataformas digitales y tiendas en línea orientadas a captar clientes o facilitar tus operaciones.',
        detail: 'Sitios corporativos · portales · tiendas en línea',
        icon: 'window',
      },
      {
        id: 'automatizacion',
        name: 'Automatización e integraciones',
        summary:
          'Digitalizamos las tareas repetitivas y conectamos tus herramientas para reducir errores, ahorrar tiempo y tener la información en un solo lugar.',
        detail: 'Backend · APIs · integraciones entre sistemas',
        icon: 'flow',
      },
      {
        id: 'cloud-devops',
        name: 'Cloud y DevOps',
        summary:
          'Preparamos tu solución para crecer, desplegar cambios con seguridad y mantenerse estable a medida que aumentan tus usuarios.',
        detail: 'Nube · servidores · contenedores · CI/CD · ambientes escalables',
        icon: 'cloud',
      },
      {
        id: 'soporte-evolucion',
        name: 'Soporte y evolución',
        summary:
          'El lanzamiento no es el final: mantenimiento, mejoras, monitoreo y desarrollo continuo para que la solución siga acompañando al negocio.',
        detail: 'Mantenimiento correctivo · monitoreo · nuevas funcionalidades',
        icon: 'pulse',
      },
    ],
  },

  differentiators: {
    label: 'Compromisos',
    title: 'Tecnología bien pensada,<br />comunicación clara',
    intro:
      'Acompañamiento de principio a fin. Estos son los compromisos con los que trabajamos en cada proyecto.',
    items: [
      {
        title: 'Entendemos antes de construir',
        body: 'Primero entendemos el contexto de tu negocio y luego proponemos. No necesitas dominar la tecnología para trabajar con nosotros: esa parte nos toca a nosotros.',
      },
      {
        title: 'Priorizamos lo que genera valor',
        body: 'La tecnología tiene que conectarse con resultados concretos: ahorrar tiempo, reducir errores, mejorar la atención, vender más o facilitar decisiones.',
      },
      {
        title: 'Comunicamos con transparencia',
        body: 'Recomendamos lo que realmente necesitas, incluso cuando la opción adecuada es más sencilla o más económica que la que tenías en mente.',
      },
      {
        title: 'Diseñamos para crecer',
        body: 'No se trata solo de programar funcionalidades, sino de construir soluciones útiles y mantenibles, que se adapten a tu presupuesto y a tus prioridades.',
      },
      {
        title: 'Acompañamos después del lanzamiento',
        body: 'Seguimos contigo tras el despliegue: soporte, mantenimiento, medición y evolución del producto a medida que el negocio cambia.',
      },
    ],
  },

  process: {
    label: 'Proceso',
    title: 'De la idea<br />al producto',
    intro:
      'Trabajamos de forma iterativa y transparente. Validamos las prioridades contigo, mostramos avances frecuentes y ajustamos la solución a medida que entendemos mejor el problema.',
    note: 'Adaptamos el marco de trabajo al tamaño de cada proyecto. En proyectos pequeños, un proceso más simple suele ser la mejor decisión.',
    phases: [
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
    ],
  },

  engagements: {
    label: 'Modalidades',
    title: 'Dos formas<br />de trabajar juntos',
    intro:
      'Un proyecto con inicio y final, o un acompañamiento continuo. Muchas empresas empiezan por el primero y siguen con el segundo.',
    note: 'Cada proyecto se define de acuerdo con su alcance, complejidad, prioridades y necesidades de acompañamiento. Por eso empezamos con una evaluación y no con una tarifa.',
    items: [
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
    ],
  },

  faq: {
    label: 'Preguntas frecuentes',
    title: 'Lo que suelen<br />preguntarnos',
    items: [
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
    ],
  },

  closing: {
    label: 'Siguiente paso',
    question: '¿Tienes una idea, un problema o un proceso que quieras mejorar?',
    answer:
      'Cuéntanos qué necesitas y te ayudamos a identificar el siguiente paso. La evaluación inicial no compromete a nada.',
    channels: { whatsapp: 'WhatsApp', email: 'Correo' },
    coverage: 'Trabajamos en remoto con clientes en Colombia y otros países.',
  },

  form: {
    kicker: 'Cuéntanos tu proyecto',
    name: 'Nombre *',
    namePlaceholder: 'Cómo te llamas',
    company: 'Empresa',
    companyOptional: 'Opcional',
    need: '¿Qué necesitas?',
    needUnsure: 'Todavía no lo tengo claro',
    needOther: 'Otra cosa',
    message: 'Cuéntanos un poco más *',
    messagePlaceholder: 'Qué problema quieres resolver, o qué te gustaría construir.',
    sendWhatsapp: 'Enviar por WhatsApp',
    sendEmail: 'Enviar por correo',
    privacy:
      'El formulario no envía nada por su cuenta: arma el mensaje y lo abre en WhatsApp o en tu correo para que lo revises antes de mandarlo. No guardamos ningún dato.',
    noscript: 'Este formulario necesita JavaScript para armar el mensaje. Escríbenos directo por',
    greeting: 'Hola Globin.',
    iAm: (name) => `Soy ${name}.`,
    iAmFrom: (name, company) => `Soy ${name}, de ${company}.`,
    interestedIn: 'Me interesa:',
    emailSubject: 'Quiero contarles sobre mi proyecto',
    prefilled: 'Hola Globin, quiero contarles sobre mi proyecto.',
  },

  footer: {
    navLabel: 'Navegación',
    contactLabel: 'Contacto',
    rights: 'Todos los derechos reservados.',
  },

  attributes: [
    'Ingenio',
    'Confianza',
    'Cercanía',
    'Criterio técnico',
    'Sinceridad',
    'Curiosidad',
    'Capacidad de resolver',
  ],

  language: { label: 'Idioma', switchTo: 'English' },
};
