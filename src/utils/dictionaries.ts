type Locale = 'en' | 'fr';

interface SimpleEntry {
    title: string;
    login: string;
    logout: string;
    submit: string;
    emailPlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    password: string;
}

interface FormEntry {
    filter: string;
    release_date: string;
    du: string;
    at: string;
    sort_by: string;
    popularity: string;
    note: string;
    number_of_notes: string;
}

export default interface Dictionary {
    popular: SimpleEntry;
    genre: SimpleEntry;
    searchBarHeader: SimpleEntry;
    form: FormEntry;
    header: SimpleEntry;
    logoutButton: SimpleEntry;
    profilPage: SimpleEntry;
    signup: SimpleEntry;
    login: SimpleEntry;
}

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    en: () => import("../dictionaries/en.json").then((module) => module.default as Dictionary),
    fr: () => import("../dictionaries/fr.json").then((module) => module.default as Dictionary),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => dictionaries[locale]();
