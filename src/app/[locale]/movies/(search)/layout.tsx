import SearchSideBar from "@/components/Search-SideBar/SearchSideBar"
import { getMovieByPath } from "@/utils/movieClient"

export default async function MovieSearchLayout({children, locale } : {children : React.ReactNode}){

    const {genres} = await getMovieByPath("/genre/movie/list", [], locale);

    return(
        <div>
        <SearchSideBar genres={genres} locale={locale}/>
        <div>{children}</div>
        </div>
    )
}