import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "@/components/MediaCard/MediaCard";
import { getDictionary } from "@/utils/dictionaries";

interface PopularProps {
    locale: "en" | "fr";
    isLiked: boolean; 
  }

interface Movie{
    id: string;
    title: string;
    poster_path: string;
    vote_average: number; 
    release_date: string;
}

export default async function Popular({locale, isLiked} : PopularProps){
    const { results } = await getMovieByPath("/movie/popular", [], locale)
    const popularMovies = results.slice( 0, 6);
    const i18n = await getDictionary(locale);

    return(
        <div>
            <h2 className="font-semibold text-lg font-montserrat my-4 text-center md:text-start tracking-wider">{i18n.popular.title}</h2>
            <div className="flex gap-10 flex-wrap md:justify-start justify-center">
                {popularMovies.map((movie: Movie) => (
                    <MediaCard key={movie.id} media={movie} locale={locale} isLiked={isLiked}/>
                ))}
            </div>
        </div>
    )
}