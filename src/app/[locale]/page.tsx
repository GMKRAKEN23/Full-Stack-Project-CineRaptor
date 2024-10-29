import Genres from "@/components/Genres/Genres";
import Popular from "@/components/Popular/Popular";

export const revalidate = 86400;

interface HomeProps{
  params: {
    locale: string;
  }
}

export default function Home({params: {locale}}: HomeProps) {
  return (
    <div className="m-6">
    < Popular locale={locale}/>
    < Genres locale={locale} />
    </div>
  );
}