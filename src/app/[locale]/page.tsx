import Genres from "@/components/Genres/Genres";
import Popular from "@/components/Popular/Popular";

export const revalidate = 86400;

interface HomeProps{
  params: {
    locale: "en" | "fr"; 
    isLiked: boolean;
     onLikeToggle: () => void; 
  }
}

export default function Home({params: {locale, isLiked, onLikeToggle}}: HomeProps) {
  return (
    <div className="m-6 px-10">
    < Popular locale={locale}  isLiked={isLiked} onLikeToggle={onLikeToggle}
    />
    < Genres locale={locale} />
    </div>
  );
}