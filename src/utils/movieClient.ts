import "server-only";

export const getMovieByPath = (path : string, params: Array<{key: string; value: string}> = [], language: string = "fr-FR") => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);
  url.searchParams.append("api_key", process.env.TMDB_API_KEY!);
  url.searchParams.append("language", language);
  params
  .filter((param) => param.value)
  .forEach((param) => {
    if (typeof param.value === 'string') {
        url.searchParams.append(param.key, param.value);
        
    }
});
  return fetch(url).then((res) => res.json());
};

export const getHydrateMovies = async (movieIds: string[], language: string= "fr") => {
  const moviesPromises = movieIds.map((movieId) => getMovieByPath(`/movie/${movieId}`, [], language));

  const movies = await Promise.all(moviesPromises);

  return movies
}