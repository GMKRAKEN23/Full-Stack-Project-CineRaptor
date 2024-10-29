import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "@/components/Media-card/MediaCard";

interface SearchResultsProps {
    searchParams: Record<string, string | undefined>;
    genreId: string;
    locale: string;
}

export default async function SearchResults({searchParams, genreId, locale} : SearchResultsProps){

    const { results } = await getMovieByPath("/discover/movie", [
        { key: "sort_by", value: searchParams.sort_by },
        { key: "release_date.gte", value: searchParams["release_date.gte"] },
        { key: "release_date.lte", value: searchParams["release_date.lte"] },
        { key: "with_genres", value: genreId },
      ]);

    return(
        <div className="flex flex-wrap gap-8">
            {results
                .filter((movie) => movie.poster_path)
                .map((movie) => (
                <MediaCard key={movie.id} media={movie} locale={locale}/>
            ))}
        </div>
    )
}