import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { roboto, montserrat } from "@/app/fonts/fonts";
import "./globals.css";
import { availableLocales } from "@/utils/i18n";
import AuthProvider from "@/components/Auth-provider/AuthProvider";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
  title: "cineRaptor",
  description: "MovieApp in Next.js",
};

export function generateStaticParams() {
  return availableLocales.map((locale) => ({
    locale,
  }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "fr" }>; 
}) {
  const { locale } = await params; 

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
        <Footer/>
      </body>
    </html>
  );
}
