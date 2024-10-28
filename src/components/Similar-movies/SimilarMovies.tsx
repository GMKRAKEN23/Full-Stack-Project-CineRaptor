import { getMovieByPath } from "@/utils/movieClient"
import MediaCard from "../Media-card/MediaCard"

export default async function SimilarMovies({movieId, locale}){
    const { results } = await getMovieByPath(`/movie/${movieId}/similar`, [], locale)
    return(
        <div className="flex justify-center">
            <div className="flex justify-center gap-5 mt-5 mb-8 w-48 ">
                {results.slice(0, 6).map((movie)=> (
                    <MediaCard media={movie} key={movie.id} locale={locale}/>
                ))}
            </div>
        </div>
    )
}