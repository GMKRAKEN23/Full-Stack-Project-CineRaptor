import { defaultLocale } from "@/utils/i18n";
import { useParams } from "next/navigation";

export function useCurrentLanguage(){
    const params = useParams();

    return params.locale || defaultLocale;
}