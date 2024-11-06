import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "CineRaptor",
      credentials: {
        email: { label: "E-mail", type: "text", placeholder: "E-mail" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "*********",
        },
      },
      async authorize(credentials) {
        const response = await fetch("/api/login", {
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
  theme: {
    colorScheme: 'light', 
    brandColor: '#000000', 
    buttonText: '#FFF', 
  },
});

export { handler as GET, handler as POST };