import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../Media-card/MediaCard";

interface SimilarMoviesProps{
    locale: string,
    movieId: number;
}

interface Movie{
    id: number,
    title: string,
    poster_path: string,
    vote_average: number,
    release_date: string,
}

export default async function SimilarMovies({movieId, locale} : SimilarMoviesProps){
    const { results } = await getMovieByPath(`/movie/${movieId}/similar`, [], locale)
    return(
        <div className="flex justify-center">
            <div className="flex justify-center gap-5 mt-5 mb-8 w-48 ">
                {results.slice(0, 6).map((movie: Movie)=> (
                    <MediaCard media={movie} key={movie.id} locale={locale}/>
                ))}
            </div>
        </div>
    )
}