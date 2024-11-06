import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { roboto, montserrat } from "@/app/fonts/fonts";
import "./globals.css";
import { availableLocales } from "@/utils/i18n";
import AuthProvider from "@/components/Auth-provider/AuthProvider";

// Metadata for the page
export const metadata: Metadata = {
  title: "cineRaptor",
  description: "MovieApp in Next.js",
};

// Generate static params for locales
export function generateStaticParams() {
  return availableLocales.map((locale) => ({
    locale,
  }));
}

// RootLayout function
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "fr" }>; // Make params a promise
}) {
  const { locale } = await params; // Resolve params promise

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="256x256" />
      </head>
      <body className={`${roboto.variable} ${montserrat.variable} antialiased bg-neutral-200`}>
        <Header locale={locale} />
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
