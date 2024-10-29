"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Form(){
    const router = useRouter();
    const pathname = usePathname();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const searchParams =new URLSearchParams();
        searchParams.append("sort_by", form.get('sort') as string);
        searchParams.append("release_date.gte", form.get('fromDate') as string);
        searchParams.append("release_date.lte", form.get('toDate') as string);
        
        router.push(`${pathname}?${searchParams.toString()}`);
    }

    return(
        <form onSubmit={handleSubmit} className="shadow-lg max-w-72">
            <h2 className="text-black text-lg py-2.5 px-4 m-0 border-b border-black">Filter</h2>
            <div className="pt-0 pr-4 pb-3 pl-4">
                <h3 className="font-montserrat font-light mt-4 text-sm">Date de sortie</h3>
                <div className="pt-0 pr-4 pb-3 pl-4 flex justify-center items-center mt-3">
                    <p className="mr-3">Du</p>
                    <input type="date" name="fromDate" />
                </div>
                <div className="pt-0 pr-4 pb-3 pl-4 flex justify-center items-center mt-3">
                    <p className="mr-3">au</p>
                    <input type="date" name="toDate" defaultValue={new Date().toISOString().substring(0, 10)} />
                </div>
            </div>
            <div className="pt-0 pr-4 pb-3 pl-4">
               <h3 className="font-montserrat font-light mt-4 text-sm">Trier par</h3>
               <select name="sort">
                <option value="popularity.desc">Popularité</option>
                <option value="vote_average.desc">Note</option>
                <option value="cote_count.desc">Nombre de notes</option>
               </select>
            </div>
            <input type="submit" value="Rechercher" className="border border-black cursor-pointer p-1.5  w-full"/>
        </form>
    )
}