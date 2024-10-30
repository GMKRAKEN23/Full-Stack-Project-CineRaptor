import SearchResults from "./SearchResults";

interface GenreIdPageProps {
    params: {
        id: string; 
    };
    searchParams: Record<string, string | undefined>;
    locale: string; 
    genreId: string;
  }

export default function MoviesPage({searchParams, locale, genreId}: GenreIdPageProps ){
    return(
        <SearchResults searchParams={searchParams} locale={locale} genreId={genreId}/>
    )
}