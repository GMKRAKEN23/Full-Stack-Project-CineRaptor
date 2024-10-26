import Link from "next/link";
import Image from "next/image";

export default function MovieSearchResults({ movieResults }) {
    return (
        <div className="absolute z-[200] top-11 bg-white p-2.5 shadow-xl">
            {movieResults.map((movie) => (
                <div key={movie.id} className="border-b border-gray-200 my-4">
                    <Link href={`/movies/${movie.id}`} className="flex items-center py-4">
                        <Image
                            width={90}
                            height={50}
                            alt={movie.title}
                            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${movie.backdrop_path}`}
                        />
                        <p className="pl-2">{movie.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}