"use client";

import { signOut } from "next-auth/react";
import { getDictionary } from "@/utils/dictionaries";
import { useEffect, useState } from "react";
import Dictionary from "@/utils/dictionaries";
import { CiLogout } from "react-icons/ci";

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
                console.error("Error for loading dictionnaries:", error);
            }
        }
    
        if (locale === "en" || locale === "fr") {
            loadDictionary();
        } else {
            console.error(`Locale invalided: ${locale}`);
        }
    }, [locale]);

    return(
        <div className="bg-white px-3 py-1.5 rounded-md text-sky-500 shadow-md flex justify-center items-center">
            <CiLogout />
            <button onClick={()=> signOut({callbackUrl: "/"})} className="pl-2 tracking-wider">{i18n ? i18n.logoutButton.logout : "loading..."}</button>
            
        </div>
    )
}