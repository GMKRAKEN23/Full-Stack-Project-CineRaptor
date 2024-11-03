import { getMovieByPath } from "@/utils/movieClient";
import Link from "next/link";
import { getDictionary } from "@/utils/dictionaries";

type Locale = "en" | "fr";

interface Genre {
    id: string;
    name: string;
}

interface GenresProps {
    locale: Locale;
}

export default async function Genres({ locale }: GenresProps) {
    const { genres }: { genres: Genre[] } = await getMovieByPath("/genre/movie/list", [], locale);
    const i18n = await getDictionary(locale);

    return (
        <div>
            <h2 className="font-semibold text-lg font-montserrat my-4 text-center md:text-start tracking-wider">
                {i18n.genre.title}
            </h2>
            
            {/* Responsive grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {genres.map((genre) => (
                    <div key={genre.id} className="py-1 bg-sky-600 text-black text-center text-sm font-semibold rounded-md">
                        <Link href={`/${locale}/movies/genres/${genre.id}`}>
                            <p className="text-white">{genre.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
    
}
