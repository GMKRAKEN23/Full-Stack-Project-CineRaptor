import Genres from "@/components/Genres/Genres";
import Popular from "@/components/Popular/Popular";

export const revalidate = 86400;

interface HomeProps {
  params: Promise<{ locale: "en" | "fr"; isLiked: boolean }>;
}

export default async function Home({ params }: HomeProps) {
  // Résoudre la promesse pour récupérer les valeurs de params
  const { locale, isLiked } = await params;

  return (
    <div className="m-6 px-10">
      <Popular locale={locale} isLiked={isLiked} />
      <Genres locale={locale} />
    </div>
  );
}
