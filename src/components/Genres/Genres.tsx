import { getMovieByPath } from "@/utils/movieClient";
import Link from "next/link";
import { getDictionary } from "@/utils/dictionaries";

interface Genre {
    id: string;
    name: string;
}

interface GenresProps {
    locale: string;
}

export default async function Genres({ locale }: GenresProps) {
    const { genres }: { genres: Genre[] } = await getMovieByPath("/genre/movie/list", [], locale);
    const i18n = await getDictionary(locale);
    return (
        <div>
            <h2 className="font-semibold text-lg font-montserrat my-4">{i18n.genre.title}</h2>
            <div className="flex gap-5 flex-wrap">
                {genres.map((genre) => (
                    <div key={genre.id} className="py-1 bg-white text-black text-center text-sm font-semibold flex-[0_0_calc(20%-20px)]">
                        <Link href={`/${locale}/movies/genres/${genre.id}`}>
                            <p>{genre.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
