import React from "react";
import SearchResults from "../../SearchResults";

interface GenreIdPageProps {
  params: Promise<{ id: string; locale: "en" | "fr" }>;  
  searchParams: Promise<Record<string, string | undefined>>;  
}

export default async function GenreIdPage({
  params,
  searchParams,
}: GenreIdPageProps) {
  const { id, locale } = await params;  
  const resolvedSearchParams = await searchParams; 

  console.log("Genre ID:", id);
  console.log("Locale:", locale);
  console.log("Search Params:", resolvedSearchParams);

  if (!locale) {
    console.error("Locale is missing.");
    return <div>Error: Locale is missing..</div>;
  }

  if (!id) {
    console.error("Genre ID is missing.");
    return <div>Error: Genre ID is missing.</div>;
  }

  return (
    <SearchResults
      searchParams={resolvedSearchParams}
      genreId={id}
      locale={locale}
    />
  );
}
