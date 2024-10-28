import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../Media-card/MediaCard";

export default async function Popular({locale}){

    const { results } = await getMovieByPath("/movie/popular", [], locale)
    const popularMovies = results.slice( 0, 6);
    return(
        <div>
            <h2 className="font-semibold text-lg font-montserrat my-4">Les plus populaires</h2>
            <div className="flex  gap-10 flex-wrap">
                {popularMovies.map((movie) => (
                    <MediaCard key={movie.id} media={movie} />
                ))}
            </div>
        </div>
    )
}