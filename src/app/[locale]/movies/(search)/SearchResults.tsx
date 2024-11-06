import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "@/components/MediaCard/MediaCard";


interface SearchResultsProps {
    searchParams: Record<string, string | undefined>;
    genreId: string;
    locale: "en" | "fr";
    isLiked: boolean;
    onLikeToggle: () => void; 
}

interface Movie {
    id: string;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
}

interface MovieResponse {
    results: Movie[];
}

export default async function SearchResults({ searchParams, genreId, locale, isLiked, onLikeToggle}: SearchResultsProps) {

    const { results }: MovieResponse = await getMovieByPath("/discover/movie", [
        { key: "sort_by", value: searchParams.sort_by || "popularity.desc" },
        { key: "release_date.gte", value: searchParams["release_date.gte"] || "" },
        { key: "release_date.lte", value: searchParams["release_date.lte"] || "" },
        { key: "with_genres", value: genreId || "" },
    ]);

    return (
        <div className="flex flex-wrap gap-8 justify-center sm:justify-normal">
            {results
                .filter((movie) => movie.poster_path)
                .map((movie) => (
                    <div
                        key={movie.id} 
                        className="flex justify-center"
                    > 
                    <MediaCard media={movie} locale={locale} isLiked={isLiked} onLikeToggle={onLikeToggle}/>
                    </div>
                ))}
        </div>
    );
}
