import SearchResults from "../../SearchResults";

export default function GenreIdPage({params, searchParams, locale }){
    return<SearchResults searchParams={searchParams} genreId={params.id} locale={locale}/>
}