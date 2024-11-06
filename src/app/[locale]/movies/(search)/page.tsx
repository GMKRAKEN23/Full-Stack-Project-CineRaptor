import SearchResults from "./SearchResults";

interface MoviePageProps {
    params: {
        id: string;
        locale: "en" | "fr"; 
    };
    searchParams: Record<string, string | undefined>;
    isLiked: boolean;
}

export default function MoviesPage({ params, searchParams, isLiked}: MoviePageProps) {
    const { id: genreId, locale } = params;

    return (
        <SearchResults 
            searchParams={searchParams} 
            locale={locale} 
            genreId={genreId} 
            isLiked={isLiked} 
        />
    );
}
