import Genres from "@/components/Genres/Genres";
import Popular from "@/components/Popular/Popular";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="m-6">
    < Popular />
    < Genres />
    </div>
  );
}