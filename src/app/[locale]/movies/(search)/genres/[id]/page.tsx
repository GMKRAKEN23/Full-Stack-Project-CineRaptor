import React from "react";
import SearchResults from "../../SearchResults";

interface GenreIdPageProps {
  params: {
      id: string; // ID du genre
      locale: string; // Locale, par exemple 'fr'
  };
  searchParams: Record<string, string | undefined>; // Paramètres de recherche
}

export default function GenreIdPage({ params, searchParams }: GenreIdPageProps) {
  const { id, locale } = params; // Déstructuration correcte

  // Vérifiez que les paramètres sont correctement récupérés
  console.log("Genre ID:", id); // Pour déboguer
  console.log("Locale:", locale); // Pour déboguer
  console.log("Search Params:", searchParams); // Pour déboguer

  // Vérifiez que la locale et genreId ne sont pas vides
  if (!locale) {
      console.error("Locale est manquant.");
      return <div>Erreur: Locale manquante.</div>; // Afficher un message d'erreur
  }

  if (!id) {
      console.error("Genre ID est manquant.");
      return <div>Erreur: Genre ID manquant.</div>; // Afficher un message d'erreur
  }

  // Passer le genre ID et la locale à SearchResults
  return (
      <SearchResults 
          searchParams={searchParams} 
          genreId={id} 
          locale={locale} 
      />
  );
}
