import SearchSideBar from "@/components/Search-SideBar/SearchSideBar"
import { getMovieByPath } from "@/utils/movieClient"

export default async function MovieSearchLayout({children}){

    const {genres} = await getMovieByPath("/genre/movie/list");

    return(
        <div>
        <SearchSideBar genres={genres} />
        <div>{children}</div>
        </div>
    )
}