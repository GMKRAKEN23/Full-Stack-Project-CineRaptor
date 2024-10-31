import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton,} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaUser } from "react-icons/fa";
import MovieSearch from '../MovieSearch/MovieSearch';
import LanguageSelector from '../Language-selector/LanguageSelector';
import Link from 'next/link';

interface HeaderProps{
  locale: string,
}

export default function Header({locale}: HeaderProps) {

  return (
    <Disclosure as="header" className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="relative z-10 flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
             <Link href="/">
                <h1>Cineraptor</h1>
             </Link>
            </div>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="search movie" className="sr-only">
                Search
              </label>
              <div className="relative">
                <MovieSearch locale={locale as "en" | "fr"}/>
              </div>
            </div>
          </div>
          <div className="relative z-10 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
            <button
              type="button"
              className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <FaUser aria-hidden="true" className="h-5 w-5 text-indigo-500" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-4 flex-shrink-0">
              <div>
                <MenuButton className="relative flex bg-white ">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <LanguageSelector/>
                </MenuButton>
              </div>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="flex items-center px-4">
            <div className="ml-3">
                          <button
              type="button"
              className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute -inset-1.5" />
              <FaUser aria-hidden="true" className="h-6 w-6" />
            </button>
            </div>

          </div>
          <div className="mt-3 space-y-1 px-2">

            {/* add FR*/}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
