import React from "react";
import SearchResults from "../../SearchResults";

interface GenreIdPageProps {
  params: Promise<{ id: string; locale: "en" | "fr" }>;  // params est maintenant une promesse
  searchParams: Promise<Record<string, string | undefined>>;  // searchParams est également une promesse
}

export default async function GenreIdPage({
  params,
  searchParams,
}: GenreIdPageProps) {
  const { id, locale } = await params;  // Attente de la résolution de params
  const resolvedSearchParams = await searchParams;  // Attente de la résolution de searchParams

  console.log("Genre ID:", id);
  console.log("Locale:", locale);
  console.log("Search Params:", resolvedSearchParams);

  // Validation des valeurs attendues
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
