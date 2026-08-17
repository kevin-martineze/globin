/**
 * Text that exists in both of the site's registers.
 *
 * The brief (§10) contrasts two ways of saying the same thing: "implementamos
 * arquitecturas cloud escalables con microservicios y pipelines CI/CD" versus
 * "preparamos tu solución para crecer, desplegar cambios con seguridad y
 * mantenerse estable a medida que aumentan tus usuarios". It asks for the
 * second by default and allows the first for whoever wants it.
 *
 * The page takes that literally: every dual string ships in both voices and a
 * switch decides which one is on screen. It is the one differentiator the brief
 * names first — the client should not have to speak technical to work with
 * Globin — demonstrated instead of claimed.
 *
 * Rules for writing the pair:
 *
 *  - Same claim, different vocabulary. The technical voice explains *how*; it
 *    never promises anything the simple voice did not.
 *  - No technology brand names. The brief names capabilities (backend, APIs,
 *    contenedores, CI/CD, ambientes escalables, monitoreo), never products, and
 *    naming a stack the company has not committed to would be inventing.
 *  - Both are real copy. Neither is a stub, and neither is filler for the other.
 */
export interface Dual {
  /** For someone who runs a business. The default. */
  simple: string;
  /** For someone who builds software. */
  tecnico: string;
}

/** The two registers, in order, for anything that has to render the switch. */
export const registers = [
  { id: 'simple', label: 'En simple' },
  { id: 'tecnico', label: 'En técnico' },
] as const;

export type RegisterId = (typeof registers)[number]['id'];
