import SearchSideBar from "@/components/Search-SideBar/SearchSideBar";
import { getMovieByPath } from "@/utils/movieClient";

interface MovieSearchLayoutProps{
    children: React.ReactNode;
    params: {
        locale: string;
    }
}

export default async function MovieSearchLayout({children,  params: { locale }}: MovieSearchLayoutProps){

    const {genres} = await getMovieByPath("/genre/movie/list", [], locale);

    return(
        <div className="flex ml-8 mt-8 flex-col lg:flex-row">
        <SearchSideBar genres={genres} locale={locale}/>
        <div className="flex my-4 flex-wrap">{children}</div>
        </div>
    )
}