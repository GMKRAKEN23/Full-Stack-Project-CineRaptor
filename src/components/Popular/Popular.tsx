import { getMovieByPath } from "@/utils/movieClient"
import MediaCard from "../media-card/MediaCard"

export default async function Popular(){

    const { results } = await getMovieByPath("/movie/popular")
    const popularMovies = results.slice( 0, 6);
    return(
        <div>
            <h2 className="font-semibold text-lg font-montserrat my-4">Les plus populaires</h2>
            <div className="flex space-x-10">
                {popularMovies.map((movie) => (
                    <MediaCard key={movie.id} media={movie} />
                ))}
            </div>
        </div>
    )
}