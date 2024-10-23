import Link from "next/link";
import Image from "next/image";

interface MediaCardProps {
  mediaId?: string;
}

export default function MediaCard({ media }: MediaCardProps) {
  return (
    <div className=" shadow-md min-w-48 rounded-md z-0">
        <Link href={`/movies/${media.id}`} className="">
          <div className="w-full h-64 relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${media.poster_path}`}
              alt={media.title}
              fill
              className="rounded-t-md "
            />
          </div>
          <div className="px-5 py-2.5 relative bg-white">
            <p className="w-8 h-8 absolute border border-black -top-4  rounded-full z-10 bg-white flex justify-center items-center">{media.vote_average.toFixed(1)}</p>
            <h3 className="font-semibold my-2 text-base">{media.title}</h3>
            <p className="text-xs">Le {new Date(media.release_date).toLocaleDateString('fr-FR')}</p>
          </div>
        </Link>
    </div>
  );
}
