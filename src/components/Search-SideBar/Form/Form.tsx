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
                console.error("Erreur lors du chargement du dictionnaire:", error);
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
        <form onSubmit={handleSubmit} className="shadow-lg max-w-72">
            <h2 className="text-black text-lg py-2.5 px-4 m-0 border-b border-black">{i18n.form.filter}</h2>
            <div className="pt-0 pr-4 pb-3 pl-4">
                <h3 className="font-montserrat font-light mt-4 text-sm">{i18n.form.release_date}</h3>
                <div className="pt-0 pr-4 pb-3 pl-4 flex justify-center items-center mt-3">
                    <p className="mr-3">{i18n.form.du}</p>
                    <input type="date" name="fromDate" />
                </div>
                <div className="pt-0 pr-4 pb-3 pl-4 flex justify-center items-center mt-3">
                    <p className="mr-3">{i18n.form.at}</p>
                    <input type="date" name="toDate" defaultValue={new Date().toISOString().substring(0, 10)} />
                </div>
            </div>
            <div className="pt-0 pr-4 pb-3 pl-4">
                <h3 className="font-montserrat font-light mt-4 text-sm">{i18n.form.sort_by}</h3>
                <select name="sort">
                    <option value="popularity.desc">{i18n.form.popularity}</option>
                    <option value="vote_average.desc">{i18n.form.note}</option>
                    <option value="cote_count.desc">{i18n.form.number_of_notes}</option>
                </select>
            </div>
            <input type="submit" value="Rechercher" className="border border-black cursor-pointer p-1.5 w-full" />
        </form>
    );
}
