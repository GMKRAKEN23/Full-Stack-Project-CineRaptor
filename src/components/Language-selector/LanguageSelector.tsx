"use client";

import { useCurrentLanguage } from "@/hooks/useCurrentLanguage";
import { availableLocales } from "@/utils/i18n";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const currentLanguage = useCurrentLanguage();

    useEffect(() => {
        // Fermer la liste déroulante lorsque la langue actuelle change
        setIsOpen(false);
    }, [currentLanguage]);

    return (
        <div className="relative">
            <p
                className="cursor-pointer uppercase"
                onClick={() => setIsOpen((currentOpen) => !currentOpen)}
            >
                {currentLanguage}
            </p>
            <ul
                className={`absolute right-0 mt-2 w-auto origin-top-right rounded-md bg-white py-1 shadow-lg  ring-1 ring-black ring-opacity-5 transition-transform duration-150 ease-in-out ${
                    isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 hidden'
                }`}
            >
                {availableLocales
                    .filter((locale) => locale !== currentLanguage)
                    .map((locale) => (
                        <li key={locale}>
                            <Link href={`/${locale}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 uppercase">
                                {locale}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
