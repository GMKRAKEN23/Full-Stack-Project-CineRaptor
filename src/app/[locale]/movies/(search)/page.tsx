import SearchResults from "./SearchResults";

interface MoviePageProps {
    params: Promise<{
        id: string;
        locale: "en" | "fr";
    }>;
    searchParams: Record<string, string | undefined>;
}

export default async function MoviesPage({
    params,
    searchParams,
}: MoviePageProps) {
    const { id: genreId, locale } = await params;

    return (
        <SearchResults
            searchParams={searchParams}
            locale={locale}
            genreId={genreId}
        />
    );
}
