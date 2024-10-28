import { NextResponse } from "next/server";
import { getLocaleUrlToRedirect } from "./utils/i18n";

export function middleware(request){
    const newLocaleURL = getLocaleUrlToRedirect(request);

    if(newLocaleURL){
        return NextResponse.redirect(newLocaleURL);
    }
}

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};