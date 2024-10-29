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
        <div>
        <SearchSideBar genres={genres} locale={locale}/>
        <div>{children}</div>
        </div>
    )
}