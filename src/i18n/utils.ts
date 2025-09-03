// src/i18n/utils.ts
import en from '../translations/en.json';
import fr from '../translations/fr.json';
import de from '../translations/de.json';
import es from '../translations/es.json';

const dictionaries = { en, fr, de, es } as const;

function getNested(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

export function useTranslations(locale: string | undefined) {
  // ✅ fix typing issue: explicitly cast to keyof typeof dictionaries
  const lang: keyof typeof dictionaries =
    locale && locale in dictionaries ? (locale as keyof typeof dictionaries) : 'en';

  return function t(key: string): any {
    return getNested(dictionaries[lang], key)
        ?? getNested(dictionaries['en'], key)
        ?? key;
  };
}
