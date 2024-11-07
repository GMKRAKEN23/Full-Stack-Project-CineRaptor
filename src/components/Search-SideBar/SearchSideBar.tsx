"use client";

import { notFound, useSelectedLayoutSegment, useParams } from "next/navigation";
import Form from "@/components/Search-SideBar/Form/Form";
import { useEffect, useState } from "react";
import { getDictionary } from "@/utils/dictionaries";
import Dictionary from "@/utils/dictionaries";

interface Genre {
    id: number;  
    name: string; 
}

interface SearchSideBarProps {
    genres: Genre[]; 
    locale: "en" | "fr";
}

export default function SearchSideBar({genres, locale} : SearchSideBarProps){
    const segment = useSelectedLayoutSegment();
    const {id} = useParams<{id: string}>();

    const getSideBarTitle = () => {
        if(!segment){
            return 'Films';
        }

        const genre = genres.find((genre) => genre.id === Number(id));
        if(!genre){
            return notFound();
        }
        return genre.name;
    }

    const [i18n, setI18n] = useState<Dictionary | null>(null);

    useEffect(() => {
        async function loadDictionary() {
            try {
                const dictionary = await getDictionary(locale);
                setI18n(dictionary);
            } catch (error) {
                console.error("Error for loading dictionnaries", error);
            }
        }
    
        if (locale === "en" || locale === "fr") {
            loadDictionary();
        } else {
            console.error(`Locale invalided: ${locale}`);
        }
    }, [locale]);

    const title = getSideBarTitle();

    return(
        <>
        <div className="mx-4 mb-4 flex flex-col sm:justify-normal sm:items-start justify-center items-center">
            <h1 className="text-xl text-sky-500 font-semibold mb-5">{i18n ? i18n.genreFilter.text : "loading..."} &quot;{title}&quot;</h1>
            <Form locale={locale as "en" | "fr"}/>
        </div>
        </>
    )
}