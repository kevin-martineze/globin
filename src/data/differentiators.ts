/**
 * The five claims the brief asks the landing to make (§9), each backed by the
 * corresponding differentiator in §5. The headline is the client's own wording;
 * the body paraphrases the brief and adds nothing to it.
 */
export interface Differentiator {
  title: string;
  body: string;
}

export const differentiators: Differentiator[] = [
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
];
