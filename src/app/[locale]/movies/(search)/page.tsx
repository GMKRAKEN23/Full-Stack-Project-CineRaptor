import SearchResults from "./SearchResults";

interface GenreIdPageProps {
    params: {
        id: string; 
    };
    searchParams: Record<string, string | undefined>;
    locale: "en" | "fr"; 
    genreId: string;
    isLiked: boolean;
    onLikeToggle: () => void; 
  }

export default function MoviesPage({searchParams, locale, genreId, isLiked, onLikeToggle}: GenreIdPageProps ){
    return(
        <SearchResults searchParams={searchParams} locale={locale} genreId={genreId} isLiked={isLiked} onLikeToggle={onLikeToggle}/>
    )
}