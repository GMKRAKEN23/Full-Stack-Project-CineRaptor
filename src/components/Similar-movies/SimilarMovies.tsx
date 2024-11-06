import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../MediaCard/MediaCard";

interface SimilarMoviesProps{
    locale: string,
    movieId: number;
    isLiked: boolean;
    onLikeToggle: () => void; 
}

interface Movie{
    id: string,
    title: string,
    poster_path: string,
    vote_average: number,
    release_date: string,
}

export default async function SimilarMovies({movieId, locale, isLiked, onLikeToggle} : SimilarMoviesProps){
    const { results } = await getMovieByPath(`/movie/${movieId}/similar`, [], locale)
    return(
        <div className="flex justify-center">
            <div className="flex justify-center flex-wrap gap-5 mt-5 mb-8  ">
                {results.slice(0, 6).map((movie: Movie)=> (
                    <MediaCard media={movie} key={movie.id} locale={locale} isLiked={isLiked} onLikeToggle={onLikeToggle}/>
                ))}
            </div>
        </div>
    )
}