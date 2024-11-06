import React from "react";
import SearchResults from "../../SearchResults";

interface GenreIdPageProps {
  params: {
    id: string;
    locale: "en" | "fr";
  };
  isLiked: boolean;
  onLikeToggle: () => void;
  searchParams: Record<string, string | undefined>;
}

export default function GenreIdPage({ params, searchParams, isLiked, onLikeToggle}: GenreIdPageProps) {
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
      onLikeToggle={onLikeToggle}
    />
  );
}
