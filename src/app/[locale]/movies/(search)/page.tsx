import SearchResults from "./SearchResults";

interface MoviesPageProps {
    searchParams: Record<string, string | undefined>
    locale: string;
}

export default function MoviesPage({searchParams, locale}: MoviesPageProps ){
    return(
        <SearchResults searchParams={searchParams} locale={locale}/>
    )
}