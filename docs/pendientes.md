# Pendientes

Lo que falta para que la landing quede lista, en orden de bloqueo. La fuente de
verdad del contenido es [`brief-globin.md`](brief-globin.md); aquí solo se
registra lo que ese documento deja abierto.

## Bloquea el lanzamiento

- [x] **Canales de contacto.** WhatsApp `+57 317 145 1152` y correo
      `globinadmin@gmail.com`, en `src/data/site.ts`. El bloque de cierre suma un
      formulario que arma el mensaje y lo abre en WhatsApp o en el correo, sin
      backend y sin guardar nada.
- [ ] **Dominio.** Se compra, se apunta en Vercel y se define la variable de
      entorno `SITE_URL` con la URL final. Ya no hace falta tocar código: de esa
      variable salen el sitemap, las URLs canónicas y la imagen para compartir.
      Mientras no exista, el build en Vercel usa solo el dominio `.vercel.app`.
- [x] **Logo.** Integrado. El master está en `src/assets/brand/globin-logo.png` y
      `scripts/build-brand-assets.mjs` deriva de él la marca transparente, los
      favicons y la tarjeta para compartir.

## Piezas gráficas pendientes

El primer intento con Gemini está en `media-source/gemini/` (fuera del control de
versiones). No sirvió: las tres entregas son JPEG, o sea sin canal alfa — el
tablero de transparencia de una de ellas está pintado como píxeles —, vienen
como collage o como mockup de presentación en lugar de piezas sueltas, están a
1376×768 y el logo aparece **redibujado**, no es la marca real. Una de ellas,
además, inventa tarjetas de caso de éxito con cifras ("EMPRESA A · INCREMENTO
30 %"), que es justo lo que el brief prohíbe.

Qué hace falta, una pieza por generación:

- [ ] **Master del logo en alta.** Hoy el techo son 400 px. Lo ideal es el
      archivo original de quien lo diseñó (vector o PNG grande con alfa real),
      no una regeneración: cualquier redibujo deja de ser la misma marca.
- [ ] **Versión de un solo color.** No se puede derivar por código: las cintas
      solo se leen por sombreado, así que una silueta plana se convierte en una
      mancha. Hay que dibujar dónde va el espacio negativo.
- [x] **Fondo abstracto del hero.** Entregado, montado y descartado: el fondo
      construido en código (degradado, rejilla, grafo de nodos animado) se ve
      mejor y no pesa nada. El render queda en `media-source/gemini/` por si
      alguna sección lo pide.
- [x] **Textura de red.** Entregada y montada en la sección de proceso
      (`node-grid.jpg`). No tilea del todo, así que va como capa única a
      `object-cover` en lugar de repetida.

## Mejora la conversión

- [ ] **Colores y tipografías definitivos.** La paleta ya está muestreada del
      logo (teal #389888, fondo #091016). Si la identidad define otros valores,
      se resamplea el bloque `@theme` de `src/styles/global.css` y nada más: los
      componentes solo referencian roles.
- [ ] **Equipo.** El brief deja pendiente "nombre y perfil de los fundadores".
      Con nombres, rol y foto se puede añadir la sección de equipo, que el propio
      brief nombra como señal de confianza (§9).
- [ ] **Tecnologías utilizadas.** También listada como señal de confianza, pero
      el brief no nombra ninguna. Con la lista real se añade una franja de stack;
      inventarla no es opción.
- [ ] **Redes sociales.** Instagram, LinkedIn y GitHub están vacíos en
      `site.social`; el footer omite cada uno mientras no tenga URL.
- [ ] **Política de privacidad y tratamiento de datos.** El formulario no guarda
      ni transmite nada por su cuenta: arma el texto y lo abre en WhatsApp o en
      el correo del visitante, así que la web no recoge datos personales. Pero
      Globin sí los recibe y los conserva en esas conversaciones, y eso ya es
      tratamiento de datos bajo la Ley 1581 de 2012. Hace falta la política antes
      de operar en serio, no antes de publicar la página.

## Decisión tomada: sin ciudad en la página

La landing ya no nombra Barranquilla ni Atlántico. El brief los recoge, pero el
objetivo comercial es atraer clientes de cualquier lugar y una dirección a nivel
de calle hace que una empresa remota parezca un proveedor local. Se mantiene
"Colombia" en el footer, en el bloque de cierre y en el JSON-LD
(`addressCountry: 'CO'`, `areaServed: 'Worldwide'`): es la parte que genera
confianza y la que sostiene el dato estructurado.

Contrapartida: se pierde el posicionamiento en búsquedas tipo "empresa de
software Barranquilla". Si se quiere recuperar, no hace falta tocar la landing —
una página `/contacto` con la dirección completa o el perfil de Google Business
cubren esa vía.

## Decisiones abiertas del brief

Ninguna bloquea el desarrollo, pero cada una cambia el copy si se resuelve:

- Nombre final: Globin o Goblin.
- Segmento prioritario para la primera etapa comercial.
- Países e idiomas de atención inicial. Hoy la página está solo en español; si se
  suma inglés, Astro trae enrutado i18n y habría que duplicar `src/data/`.
- Tiempo de respuesta al cliente. En cuanto se defina, es una pregunta frecuente
  más y un argumento fuerte en el bloque de cierre.
- Proceso de cotización y condiciones de soporte y mantenimiento.
- Servicios con mayor prioridad — hoy destacan "Software a medida" y
  "Aplicaciones móviles"; cambiarlo es mover la bandera `featured` en
  `services.items` dentro de `src/i18n/es.ts` y `src/i18n/en.ts`.
- Portafolio público futuro. El brief prohíbe inventar clientes, testimonios,
  cifras o casos de éxito, así que esa sección no existe hasta que haya material
  real.

## Ideas para cuando haya material

- Casos de éxito, cuando existan y estén autorizados por el cliente.
- Tarjeta para compartir con el nombre y la tagline compuestos sobre el logo.
  Hoy es solo la marca sobre fondo plano, porque el texto tendría que ir con la
  tipografía real y eso pide una pieza de fondo (ver piezas pendientes).
- Medir cuántas conversaciones llegan por el formulario frente al botón directo.
  Si el formulario apenas se usa, sobra; si domina, vale la pena pedirle un
  campo más (presupuesto o plazo).
