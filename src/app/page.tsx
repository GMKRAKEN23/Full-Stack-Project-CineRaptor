import Genres from "@/components/Genres/Genres";
import Popular from "@/components/Popular/Popular";

const revalidate = 86400;

export default function Home() {
  return (
    <div className="m-6">
    < Popular />
    < Genres />
    </div>
  );
}