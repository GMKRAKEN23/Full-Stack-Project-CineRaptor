import { getMovieByPath } from "@/utils/movieClient";
import { notFound } from "next/navigation";
import MovieDetails from "@/components/Movie-details/MovieDetails";

export const dynamic = "force-static";
export const revalidate = 3600;

export default async function MoviesPage( {params}){

    const movie = await getMovieByPath(`/movie/${params.id}`)

    if(!movie.original_title){
        return notFound();
    }

    return(
        <div>
            <MovieDetails movie={movie} />
        </div>
    )
}