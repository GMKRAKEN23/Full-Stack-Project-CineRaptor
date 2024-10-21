import Link from "next/link";
import Image from "next/image";

interface MediaCardProps {
  mediaId?: string;
}

export default function MediaCard({ mediaId }: MediaCardProps) {
  return (
    <div className=" shadow-md min-w-52">
        <Link href={`/movies/${mediaId}`} className="">
          <div className="w-full h-72 relative ">
            <Image
              src="https://image.tmdb.org/t/p/w500/hYQs5RPHiWctoYqvI8baHiIqdd8.jpg"
              alt="media title"
              fill
              className="rounded-t-md  "
            />
          </div>
          <div className="px-5 py-2.5 ">
            <h2 className="font-semibold my-2 text-base">Creed II</h2>
            <p className="text-xs">Le 01/03/2023</p>
          </div>
        </Link>
    </div>
  );
}
