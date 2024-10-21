import Link from "next/link";
import Image from "next/image";

interface MediaCardProps {
  mediaId?: string;
}

export default function MediaCard({ mediaId }: MediaCardProps) {
  return (
    <div>
        <Link href={`/movies/${mediaId}`}>
          <div>
            <Image
              src="https://image.tmdb.org/t/p/w500/hYQs5RPHiWctoYqvI8baHiIqdd8.jpg"
              alt="media title"
              width={500}
              height={750}
            />
          </div>
          <div>
            <h2>Creed II</h2>
            <p>Le 01/03/2023</p>
          </div>
        </Link>
    </div>
  );
}
