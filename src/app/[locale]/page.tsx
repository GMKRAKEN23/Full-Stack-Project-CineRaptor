import Genres from "@/components/Genres/Genres";
import Popular from "@/components/Popular/Popular";

export const revalidate = 86400;

interface HomeProps{
  params: {
    locale: "en" | "fr"; 
  }
}

export default function Home({params: {locale}}: HomeProps) {
  return (
    <div className="m-6 px-10">
    < Popular locale={locale}/>
    < Genres locale={locale} />
    </div>
  );
}