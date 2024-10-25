import SearchResults from "../../SearchResults";

export default function GenreIdPage({params, searchParams}){
    return(
       <SearchResults searchParams={searchParams} genreId={params.id} />
    )
}