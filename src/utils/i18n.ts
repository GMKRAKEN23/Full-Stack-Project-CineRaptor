import Negotiator from "negotiator";
import {match} from "@formatjs/intl-localematcher"
import { NextRequest } from "next/server";

export const availableLocales = ["en", "fr"];
export const defaultLocale = "fr"; 

export const getPreferredLocale = (request: NextRequest) => {
    const headers = {"accept-language": request.headers.get('accept-language') || ""};
    const languages = new Negotiator({ headers }).languages();

    return match(languages, availableLocales, defaultLocale);
}

export const getLocaleUrlToRedirect = (request: NextRequest) => {
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = availableLocales.every(
      (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
    );
  
    if (pathnameIsMissingLocale) {
      const locale = getPreferredLocale(request);
  
      return new URL(`/${locale}/${pathname}`, request.url);
    }
};