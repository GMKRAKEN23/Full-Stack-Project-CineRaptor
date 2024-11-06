import { getMovieByPath } from "@/utils/movieClient";

export async function GET(request: Request): Promise<Response> {
  // Récupérer les paramètres de la requête
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  // Si le paramètre "query" est manquant ou vide, retourner une erreur
  if (!query || query.trim() === "") {
    return new Response(
      JSON.stringify({ error: "Query parameter is missing or empty" }),
      { status: 400 }
    );
  }

  try {
    // Effectuer la recherche via l'API externe avec le paramètre "query"
    const searchResults = await getMovieByPath("/search/movie", [
      {
        key: "query",
        value: query,
      },
    ]);

    // Retourner les résultats de la recherche
    return new Response(JSON.stringify(searchResults), { status: 200 });
  } catch (error) {
    // Gérer les erreurs d'API
    console.error("Error fetching search results:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch search results" }),
      { status: 500 }
    );
  }
}
