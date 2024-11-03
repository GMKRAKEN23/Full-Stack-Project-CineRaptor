"use client";

import { signOut } from "next-auth/react";
import { getDictionary } from "@/utils/dictionaries";
import { useEffect, useState } from "react";
import Dictionary from "@/utils/dictionaries";

interface MovieSearchProps {
    locale: "en" | "fr";
 }

export default function LogoutButton({locale}: MovieSearchProps){

    const [i18n, setI18n] = useState<Dictionary | null>(null);

    useEffect(() => {
        async function loadDictionary() {
            try {
                const dictionary = await getDictionary(locale);
                setI18n(dictionary);
            } catch (error) {
                console.error("Erreur for loading dictionnaries:", error);
            }
        }
    
        if (locale === "en" || locale === "fr") {
            loadDictionary();
        } else {
            console.error(`Locale invalided: ${locale}`);
        }
    }, [locale]);

    return(
        <div>
            <button onClick={()=> signOut({callbackUrl: "/"})}>{i18n ? i18n.logoutButton.logout : "loading..."}</button>
        </div>
    )
}