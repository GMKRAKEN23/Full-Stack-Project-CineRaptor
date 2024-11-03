// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { getDictionary } from "@/utils/dictionaries";
import { NextApiRequest, NextApiResponse } from "next";

interface LocaleContext extends NextApiRequest {
  locale: 'en' | 'fr'; 
}

const handler = async (req: LocaleContext, res: NextApiResponse) => {
  const locale = req.headers["accept-language"]?.startsWith("fr") ? "fr" : "en";
  const dictionary = await getDictionary(locale);

  return NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: dictionary.login.title,
        credentials: {
          email: {
            label: dictionary.login.emailPlaceholder,
            type: "text",
            placeholder: dictionary.login.emailPlaceholder,
          },
          password: {
            label: dictionary.login.passwordLabel,
            type: "password",
            placeholder: dictionary.login.passwordPlaceholder,
          },
        },
        async authorize(credentials) {
          const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          const user = await response.json();

          return user || null;
        },
      }),
    ],
  });
};

export { handler as GET, handler as POST };
