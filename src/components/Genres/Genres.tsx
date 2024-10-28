import { getMovieByPath } from "@/utils/movieClient";
import Link from "next/link";

export default async function Genres({locale}) {
  const { genres } = await getMovieByPath("/genre/movie/list", [], locale);

  return (
    <div>
      <h2 className="font-semibold text-lg font-montserrat my-4">Parcourir par genres</h2>
      <div className="flex gap-5 flex-wrap">
        {genres.map((genre) => (
          <div key={genre.id} className="py-1 bg-white text-black text-center text-sm font-semibold flex-[0_0_calc(20%-20px)]">
            <Link href={`/movies/genres/${genre.id}`}>
              <p>{genre.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
