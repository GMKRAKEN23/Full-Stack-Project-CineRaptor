"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";

interface MovieSearchProps {
  locale: string; 
}

interface Movie{
  backdrop_path: string,
}

export default function MovieSearch({locale} : MovieSearchProps) {
  const [movieResults, setMovieResults] = useState([]);

  const updateMovieSearch = async (query: string) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    setMovieResults(results.filter((movie: Movie) => movie.backdrop_path));
  };

  return (
    <div className="relative">
        <DebounceInput
            min={2}
            debounceTimeout={500}
            onChange={(e) => updateMovieSearch(e.target.value)}
            placeholder="Recherche un titre"
            className="block w-full relative rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
             {movieResults.length > 0 && (
        <MovieSearchResults movieResults={movieResults} locale={locale}/>
      )}
    </div>
);
};
