"use client";

import { useState, useEffect} from "react";
import { DebounceInput } from "react-debounce-input";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";
import { getDictionary } from "@/utils/dictionaries";
import Dictionary from "@/utils/dictionaries";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface MovieSearchProps {
   locale: "en" | "fr";
}

interface Movie{
  backdrop_path: string,
}

export default function MovieSearch({locale} : MovieSearchProps) {
  const [movieResults, setMovieResults] = useState([]);

  const [i18n, setI18n] = useState<Dictionary | null>(null);

  const updateMovieSearch = async (query: string) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    setMovieResults(results.filter((movie: Movie) => movie.backdrop_path));
  };

  useEffect(() => {
    async function loadDictionary() {
        try {
            const dictionary = await getDictionary(locale);
            setI18n(dictionary);
        } catch (error) {
            console.error("Error for loading dictionnaries:", error);
        }
    }

    if (locale === "en" || locale === "fr") {
        loadDictionary();
    } else {
        console.error(`Locale invalided: ${locale}`);
    }
}, [locale]);

  return (
    <div className="relative">
        <DebounceInput
            min={2}
            debounceTimeout={500}
            onChange={(e) => updateMovieSearch(e.target.value)}
            placeholder={i18n ? i18n.searchBarHeader.title : "Loading..."}
            className="block w-full relative rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset focus:outline-none ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
        <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-3 h-full w-5 text-gray-400"
                />
             {movieResults.length > 0 && (
        <MovieSearchResults movieResults={movieResults} locale={locale}/>
      )}
    </div>
);
};
