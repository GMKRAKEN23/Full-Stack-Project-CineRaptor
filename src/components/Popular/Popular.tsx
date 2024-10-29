import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../Media-card/MediaCard";
import { getDictionary } from "@/utils/dictionaries";

interface PopularProps{
    locale: string;
}

interface Movie{
    id: number;
    title: string;
    poster_path: string;
    vote_average: number; 
    release_date: string;
}

export default async function Popular({locale} : PopularProps){
    const { results } = await getMovieByPath("/movie/popular", [], locale)
    const popularMovies = results.slice( 0, 6);
    const i18n = await getDictionary(locale);
    return(
        <div>
            <h2 className="font-semibold text-lg font-montserrat my-4">{i18n.popular.title}</h2>
            <div className="flex gap-10 flex-wrap">
                {popularMovies.map((movie: Movie) => (
                    <MediaCard key={movie.id} media={movie} locale={locale}/>
                ))}
            </div>
        </div>
    )
}