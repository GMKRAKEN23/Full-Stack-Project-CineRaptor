"use client";

import { useSession, signIn} from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getDictionary } from "@/utils/dictionaries";
import Dictionary from "@/utils/dictionaries";
import LogoSVG from "../Logo/Logo";
import Link from "next/link";

interface SignupProps {
  locale: "en" | "fr";
}

export default function SignupForm({locale} : SignupProps) {

   const { status } = useSession();
    const router = useRouter();
  
    useEffect(() => {
      console.log( status);
      if (status === "authenticated") {
        router.push("/user/profile");
      }
    }, [status, router]);
  
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
    
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });
    
      if (response.ok) {
        const result = await signIn("credentials", {
          redirect: false, 
          email: formData.get("email"),
          password: formData.get("password"),
        });
    
        if (result?.ok) {
          router.push("/user/profile");
        } else {
          console.error("Error for authentification after signup");
        }
      } else {
        console.error("Error for signup");
      }
    };

    
  const [i18n, setI18n] = useState<Dictionary | null>(null);

  useEffect(() => {
      async function loadDictionary() {
          try {
              const dictionary = await getDictionary(locale);
              setI18n(dictionary);
          } catch (error) {
              console.error("Error for loading dictionnaries", error);
          }
      }
  
      if (locale === "en" || locale === "fr") {
          loadDictionary();
      } else {
          console.error(`Locale invalided: ${locale}`);
      }
  }, [locale]);

  return (
    <>
    <div className="min-h-screen bg-white sm:bg-neutral-200">


      <div className="flex sm:h-full flex-1 sm:shadow-md shadow-sky-100 flex-col justify-center px-6 py-12 lg:px-8 sm:mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] bg-white rounded-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <Link href={`/${locale}`}>
            <LogoSVG width={110} height={110}/>
          </Link>
          <h2 className="text-center text-2xl/9 font-bold tracking-widest text-gray-900">
          {i18n ? i18n.signup.title : "loading..."}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                E-mail 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@hotmail.com"
                  required
                  autoComplete="email"
                  className="block  w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                   {i18n ? i18n.signup.password : "loading..."}
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none placeholder:text-gray-400  sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                {i18n ? i18n.signup.submit : "loading..."}
              </button>
            </div>
          </form>
        </div>
      </div>    
      </div>
    </>
  )
}