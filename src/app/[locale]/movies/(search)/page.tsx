import SearchResults from "./SearchResults";

export default function MoviesPage({searchParams, locale} ){
    return(
        <SearchResults searchParams={searchParams} locale={locale}/>
    )
}