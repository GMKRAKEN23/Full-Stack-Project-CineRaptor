import React from "react";
import SearchResults from "../../SearchResults";

interface GenreIdPageProps {
  params: {
    id: string;
    locale: "en" | "fr";
  };
  isLiked: boolean;
  searchParams: Record<string, string | undefined>;
}

const GenreIdPage: React.FC<GenreIdPageProps> = ({ params, searchParams, isLiked }) => {
  const { id, locale } = params;

  console.log("Genre ID:", id);
  console.log("Locale:", locale);
  console.log("Search Params:", searchParams);

  if (!locale) {
    console.error("Locale is missing.");
    return <div>Error: Locale is missing..</div>;
  }

  if (!id) {
    console.error("Gender ID is missing.");
    return <div>Error: Gender ID is missing.</div>;
  }

  return (
    <SearchResults
      searchParams={searchParams}
      genreId={id}
      locale={locale}
      isLiked={isLiked}
    />
  );
}

export default GenreIdPage
