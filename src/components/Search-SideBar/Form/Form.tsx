import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary } from "@/utils/dictionaries";
import Dictionary from "@/utils/dictionaries";

interface FormProps {
    locale: "en" | "fr";
}

export default function Form({ locale }: FormProps) {
    const router = useRouter();
    const pathname = usePathname();

    const [i18n, setI18n] = useState<Dictionary | null>(null);

    useEffect(() => {
        async function loadDictionary() {
            try {
                const dictionary = await getDictionary(locale);
                setI18n(dictionary);
            } catch (error) {
                console.error("Error for loading dictionaries", error);
            }
        }

        if (locale === "en" || locale === "fr") {
            loadDictionary();
        } else {
            console.error(`Locale invalide: ${locale}`);
        }
    }, [locale]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const searchParams = new URLSearchParams();
        searchParams.append("sort_by", form.get("sort") as string);
        searchParams.append("release_date.gte", form.get("fromDate") as string);
        searchParams.append("release_date.lte", form.get("toDate") as string);

        router.push(`${pathname}?${searchParams.toString()}`);
    };

    if (!i18n) return <p>Chargement...</p>;

    return (
        <form onSubmit={handleSubmit} className="shadow-lg bg-white mr-2 w-72">
            <h2 className="text-black text-md py-2.5 font-semibold px-4 m-0 border-b border-gray-200 tracking-widest">{i18n.form.filter}</h2>
            <div className="pt-0 pr-4 pl-4 border-b border-gray-200">
                <h3 className="font-montserrat font-light mt-4 text-sm tracking-wider">{i18n.form.release_date}</h3>
                <div className="pt-0 pr-4 pb-3 pl-4 flex justify-center items-center mt-3">
                    <p className="mr-3 font-light w-16">{i18n.form.from}</p>
                    <input type="date" name="fromDate" className="w-full font-light border border-gray-200 pr-1 pt-1 pb-1 pl-2 rounded-md focus:boder-sky-500"/>
                </div>
                <div className="pt-0 pr-4 pb-3 pl-4 flex justify-center items-center mt-3">
                    <p className="mr-3 font-light w-16">{i18n.form.to}</p>
                    <input type="date" name="toDate" className="w-full font-light border border-gray-200 pr-1 pt-1 pb-1 pl-2 rounded-md focus:boder-sky-500" defaultValue={new Date().toISOString().substring(0, 10)} />
                </div>
            </div>
            <div className="pt-0 pr-4 pb-3 pl-4">
                <h3 className="font-montserrat font-light mt-4 text-sm tracking-wider">{i18n.form.sort_by}</h3>
                <select name="sort" className="mt-4 w-full p-2">
                    <option value="popularity.desc">{i18n.form.popularity}</option>
                    <option value="vote_average.desc">{i18n.form.rating}</option>
                    <option value="cote_count.desc">{i18n.form.number_of_ratings}</option>
                </select>
            </div>
            <input type="submit" value={i18n.form.search} className="cursor-pointer tracking-wider p-1.5 w-full bg-gray-100 hover:bg-sky-600 hover:text-white transition duration-200 ease-in-out mt-2" />
        </form>
    );
}
