import SearchResults from "./SearchResults";

interface MoviePageProps {
  params: Promise<{
    id: string;
    locale: "en" | "fr";
    isLiked: boolean;
  }>;
  searchParams: Promise<Record<string, string | undefined>>;
}

export default async function MoviesPage({
  params,
  searchParams,
}: MoviePageProps) {
  const { id: genreId, locale, isLiked } = await params;
  const resolvedSearchParams = await searchParams;

  return (
    <SearchResults
      searchParams={resolvedSearchParams}
      locale={locale}
      genreId={genreId}
      isLiked={isLiked}
    />
  );
}
