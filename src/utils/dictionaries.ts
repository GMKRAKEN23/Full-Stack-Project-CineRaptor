type Locale = 'en' | 'fr';

interface DictionaryEntry {
    title: string; // Propriété que chaque entrée doit avoir
}

interface Dictionary {
    [key: string]: DictionaryEntry; 
}

const dictionnaries: Record<Locale, () => Promise<Dictionary>> = {
    en: () => import("../dictionaries/en.json").then((module) => module.default),
    fr: () => import("../dictionaries/fr.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => dictionnaries[locale]();