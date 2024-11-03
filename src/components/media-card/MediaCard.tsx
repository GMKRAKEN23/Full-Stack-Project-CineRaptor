import Link from "next/link";
import Image from "next/image";
import Like from "@/components/Media-card/Like/Like"

interface MediaCardProps{
  locale: string;
  media: Media;
}

interface Media{
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function MediaCard({ media, locale } : MediaCardProps) {
  return (
<div className="shadow-lg rounded-lg w-60 md:w-48 z-0 flex flex-col"> 
  <Link href={`/${locale}/movies/${media.id}`}>
    <div className="w-full h-64 relative">
      <Like mediaId={media.id} />
      <Image
        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.poster_path}`}
        alt={media.title}
        fill
        className="rounded-t-md"
      />
    </div>
  </Link>
  <div className="flex flex-col justify-between flex-grow px-5 py-2.5 relative bg-white rounded-b-lg"> 
    <div className="flex flex-col flex-grow">
      <p className="w-8 h-8 absolute border border-black -top-4 rounded-full z-10 bg-white flex justify-center items-center">
        {media.vote_average.toFixed(1)}
      </p>
      <h3 className="font-semibold my-2 text-base">{media.title}</h3>
    </div>
    <p className="text-xs ">Le {new Date(media.release_date).toLocaleDateString('fr-FR')}</p>
  </div>
</div>

  );
}
