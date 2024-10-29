import SearchResults from "../../SearchResults";

interface GenreIdPageProps {
    params: {
        id: string;
    };
    searchParams: Record<string, string | string[]>;
    locale: string;
}

export default function GenreIdPage({params, searchParams, locale } : GenreIdPageProps){
    return(
    <SearchResults searchParams={searchParams} genreId={params.id} locale={locale}/>
    )
}