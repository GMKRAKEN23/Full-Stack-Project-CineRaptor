import { getMovieByPath } from "@/utils/movieClient";
import { notFound } from "next/navigation";
import MovieDetails from "@/components/Movie-details/MovieDetails";
import SimilarMovies from "@/components/Similar-movies/SimilarMovies";
import { Suspense } from "react";

export const dynamic = "force-static";
export const revalidate = 3600;

interface MoviesIdPageProps {
    params: Promise<{
        id: string;
        locale: string;
    }>;
}

export default async function MoviesIdPage({ params }: MoviesIdPageProps) {
    // Résolution de la promesse pour obtenir les valeurs de id et locale
    const { id, locale } = await params;

    // Appel à l'API pour récupérer les informations du film
    const movie = await getMovieByPath(`/movie/${id}`, [], locale);

    // Si le film n'existe pas, afficher une page 404
    if (!movie.original_title) {
        return notFound();
    }

    return (
        <div>
            <MovieDetails movie={movie} locale={locale} />
            <Suspense fallback={<p>Loading ...</p>}>
                <SimilarMovies movieId={movie.id} locale={locale} />
            </Suspense>
        </div>
    );
}
