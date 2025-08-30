// src/i18n/utils.ts
import en from '../translations/en.json';
import fr from '../translations/fr.json';
import de from '../translations/de.json';
import es from '../translations/es.json';

const dictionaries = { en, fr, de, es };

export function useTranslations(locale: string | undefined) {
  const lang = locale && locale in dictionaries ? locale as keyof typeof dictionaries : 'en';

  return function t(key: string): any {
    // This performs a direct lookup of the full key (e.g., "nav.home")
    // It tries the current language, falls back to English, or returns the key if not found.
    return dictionaries[lang][key as keyof {}] || dictionaries['en'][key as keyof {}] || key;
  };
}