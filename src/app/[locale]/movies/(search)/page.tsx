import SearchResults from "./SearchResults";

interface MoviePageProps extends LikeToggleProps {
    params: {
        id: string;
        locale: "en" | "fr"; 
    };
    searchParams: Record<string, string | undefined>;
}

interface LikeToggleProps {
    isLiked: boolean;
    onLikeToggle: () => void;
}

export default function MoviesPage({ params, searchParams, isLiked, onLikeToggle }: MoviePageProps) {
    const { id: genreId, locale } = params;

    return (
        <SearchResults 
            searchParams={searchParams} 
            locale={locale} 
            genreId={genreId} 
            isLiked={isLiked} 
            onLikeToggle={onLikeToggle} 
        />
    );
}
