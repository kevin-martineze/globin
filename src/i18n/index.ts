import type { Content } from './types';
import { es } from './es';
import { en } from './en';

export type Lang = 'es' | 'en';

export const defaultLang: Lang = 'es';
export const languages: Lang[] = ['es', 'en'];

const content: Record<Lang, Content> = { es, en };

/** Narrow whatever Astro hands back — `currentLocale` is `string | undefined`. */
export function toLang(value: string | undefined): Lang {
  return value === 'en' ? 'en' : defaultLang;
}

/** The whole translation for a language. Components call this once. */
export function useContent(value: string | undefined): Content {
  return content[toLang(value)];
}

/**
 * Path for a language. Spanish is the default locale and ships unprefixed, so
 * it is `/` while English is `/en/`.
 *
 * The trailing slash matters: the build emits directories, and linking to
 * `/en` costs every visitor a redirect.
 */
export function localePath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

/** The other language, for the switch. There are only two. */
export function otherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

export type { Content } from './types';
