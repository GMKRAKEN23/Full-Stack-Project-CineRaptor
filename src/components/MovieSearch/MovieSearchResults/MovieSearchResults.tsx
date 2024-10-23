import Link from "next/link";
import Image from "next/image";

export default function MovieSearchResults({ movieResults }) {
    return (
        <div className="absolute z-[200] top-11 bg-white p-2.5">
            {movieResults.map((movie) => (
                <div key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>
                        <Image
                            width={90}
                            height={50}
                            alt={movie.title}
                            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${movie.backdrop_path}`}
                        />
                        <p>{movie.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
