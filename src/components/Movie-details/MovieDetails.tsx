import Image from "next/image";
import MovieCredits from "../Movie-credits/MovieCredits";

export default function MovieDetails({ movie }){
  return (
    <div className="relative w-full min-h-[60vh]">
      <div className="absolute inset-0 z-10">
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#041226] bg-opacity-75"></div>
      </div>

      <div className="relative z-20 flex justify-center gap-12 py-12">
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w342${movie.poster_path}`}
          width={250}
          height={400}
          alt={movie.title}
          className="flex-shrink-0"
        />
        
        <div className="flex flex-col flex-[0.6] text-white font-montserrat">
          <h1 className="font-bold text-2xl m-0">
            {movie.title}{" "}
            <span className="text-base text-gray-400">
              ({new Date(movie.release_date).toLocaleDateString("fr-FR")})
            </span>
          </h1>
          <p className="text-xs my-2">
            Production:{" "} 
            <span>
                {movie.production_companies
                .map((company) => company.name)
                .join(", ")
                }
            </span>
          </p>
          <h2 className="text-white text-sm font-bold my-3">Synopsis</h2>
          <p className="text-sm leading-6 font-light line-clamp-5">{movie.overview}</p>
          <div className="mt-auto">
            <MovieCredits movieId={movie.id}/>
          </div>
        </div>
      </div>
    </div>
  );
};
