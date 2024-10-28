import { getMovieByPath } from "@/utils/movieClient";
import Image from "next/image";

export default async function MovieCredits({ movieId, locale}) {
  const { cast } = await getMovieByPath(`/movie/${movieId}/credits`, [], locale);
  return (
    <div className="flex gap-6">
      {cast.slice(0, 4).map((person) => (
        <div
          key={person.id}
          className="flex flex-col items-center mt-2"
        >
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w185${person.profile_path}`}
              alt={person.name}
              width={90}
              height={90}
              className="object-cover"
            />
          <p className="text-xs mb-0 font-bold mt-2">{person.name}</p>
        </div>
      ))}
    </div>
  );
}
