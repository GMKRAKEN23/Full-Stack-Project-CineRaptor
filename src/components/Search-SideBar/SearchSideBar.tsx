"use client";

import { notFound, useSelectedLayoutSegment, useParams } from "next/navigation";
import Form from "@/components/Search-SideBar/Form/Form";

interface Genre {
    id: number;  
    name: string; 
}

interface SearchSideBarProps {
    genres: Genre[]; 
    locale: string;
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
    const title = getSideBarTitle();
    return(
        <>
        <div className="m-4">
            <h1 className="text-lg text-red-500 font-semibold mb-5">Tous les &quot;{title}&quot;</h1>
            <Form locale={locale as "en" | "fr"}/>
        </div>
        </>
    )
}