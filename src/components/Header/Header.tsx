import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaUser } from "react-icons/fa";
import MovieSearch from "../MovieSearch/MovieSearch";
import LanguageSelector from "../Language-selector/LanguageSelector";
import Link from "next/link";
import { getDictionary } from "@/utils/dictionaries";
import LogoSVG from "../Logo/Logo";

interface PopularProps {
  locale: "en" | "fr";
}

export default async function Header({ locale }: PopularProps) {
  const i18n = await getDictionary(locale);

  return (
    <Disclosure as="header" className="bg-white shadow">
      <div className="mx-auto max-w-8xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="relative z-10 flex lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <Link href={`/${locale}`}>
                <div className="flex justify-center items-center">
                  <LogoSVG />
                  <h1 className="font-semibold tracking-widest hidden md:block">
                    <span className="uppercase text-sky-500 font-bold text-lg">
                      C
                    </span>
                    ine
                    <span className="uppercase font-bold text-sky-500 ">r</span>
                    aptor
                  </h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="search movie" className="sr-only">
                Search
              </label>
              <div className="relative">
                <MovieSearch locale={locale} />
              </div>
            </div>
          </div>
          <div className="relative z-10 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
            <Link href={`/${locale}/signup`}>
              <p className="ml-4 tracking-wider text-gray-900">{i18n.signup.title}</p>
            </Link>
            <Link href={`/${locale}/user/profile`}>
              <FaUser
                aria-hidden="true"
                className="ml-4 h-5 w-5 text-sky-500"
              />
            </Link>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-4 flex-shrink-0">
              <div>
                <MenuButton className="relative flex bg-white ">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <LanguageSelector />
                </MenuButton>
              </div>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="flex items-center px-4">
            <div className="ml-3 space-y-2 w-full">
              <div className="hover:bg-gray-100 w-full py-1.5">
                <Link href={`/${locale}/signup`}>
                  <p className="tracking-wider pl-2 text-gray-900">{i18n.signup.title}</p>
                </Link>
              </div>
              <div className="hover:bg-gray-100 w-full py-1.5">
                <Link href={`/${locale}/user/profile`}>
                  <FaUser aria-hidden="true" className="h-6 w-6 text-sky-500 pl-2" />
                </Link>
              </div>
              <div className="hover:bg-gray-100 w-full py-1.5 pl-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
