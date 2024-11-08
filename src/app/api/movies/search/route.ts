import { getMovieByPath } from "@/utils/movieClient";

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const language = searchParams.get("language") || "fr-FR";  

  console.log("Received query:", query);
  console.log("Using language:", language);

  if (!query) {
    return new Response(JSON.stringify({ error: "Query parameter is required" }), { status: 400 });
  }

  try {
    const searchResults = await getMovieByPath("/search/movie", [
      { key: "query", value: query },
    ], language); 

    console.log("Search Results:", searchResults);

    return new Response(JSON.stringify(searchResults), { status: 200 });
  } catch (error) {
    console.error("Error fetching movies:", error);
    return new Response(JSON.stringify({ error: "Error fetching movies" }), { status: 500 });
  }
}
