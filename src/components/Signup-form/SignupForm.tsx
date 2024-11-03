"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getDictionary } from "@/utils/dictionaries";
import Dictionary from "@/utils/dictionaries";

interface SignupProps {
  locale: "en" | "fr";
}

const SignupForm = ({locale} : SignupProps) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/user/profile");
    }
  }, [status, router]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    }).then((response) => {
      if (response.ok) {
        signIn();
      }
    });
  };

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

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>{i18n ? i18n.signup.title : "loading..."}</h1>
        <input type="text" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="******" />
        <input type="submit" value={i18n ? i18n.signup.submit : "loading..."} />
      </form>
    </div>
  );
};

export default SignupForm;