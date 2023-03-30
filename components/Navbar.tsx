"use client";

import Image from "next/image";
import Link from "next/link";
import { Bars4Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";
import Router from "next/router";

// import useSanitySearch from "@/hooks/useSanitySearch";

function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const [query, setQuery] = useState<string>("");
  // const [options, setOptions] = useState<SearchOptions>({ limit: 10 });
  // const { results, isLoading, error } = useSanitySearch(query, options);
  const path = usePathname();
  const { width } = useWindowSize();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    router.push(`/search?${encodeURIComponent(query)}`);
  };

  const navOptions = [
    { name: "Home", route: "/" },
    { name: "Blog", route: "/blog" },
    { name: "Projects", route: "/projects" },
    { name: "About", route: "/about" },
  ];

  return (
    <nav className="flex items-center py-8">
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex gap-2">
          <Link href="/">
            <Image
              height={50}
              width={50}
              src="https://i.imgur.com/yU4OwzD.png"
              alt="logo"
            />
          </Link>
          {searchOpen || (
            <h1 className="font-merriweather text-2xl flex items-center gap-2">
              Jungles <span className="italic text-sm font-bold">of</span>{" "}
              Dorado
            </h1>
          )}
        </div>
        <div className="flex gap-6">
          {/*  */}
          {/* search */}
          {searchOpen && (
            <form onSubmit={handleSearchSubmit} className="relative group">
              <input
                type="text"
                className="bg-transparent transition-transform duration-100 pb-2 outline-none"
                onChange={handleInputChange}
                value={query}
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="w-full h-0.5 absolute bottom-0 bg-black rounded-full origin-right"
              />
            </form>
          )}
          {/*  */}

          <button onClick={() => setSearchOpen(!searchOpen)}>
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>

          {width < 720 ? (
            <button onClick={() => setIsOpen(!isOpen)}>
              <Bars4Icon className="w-7 h-7" />
            </button>
          ) : (
            <ul className="flex gap-5">
              {navOptions.map((option, key) => (
                <li
                  key={key}
                  className={`text-gray-500 pb-2 ${
                    path === option.route &&
                    "border-b-4 border-b-gray-800 text-gray-800 rounded"
                  }`}
                >
                  <Link href={option.route}>{option.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/*  */}
      {/* mobile nav at the bottom */}
      {/*  */}

      {width < 720 && (
        <div
          className={`fixed bottom-0 w-full flex bg-[#eae7d3] z-10 ${
            isOpen ? "translate-y-0" : "translate-y-28"
          } transition-transform duration-200`}
        >
          <ul className="flex justify-evenly items-center w-full py-5">
            {navOptions.map((option, key) => (
              <li key={key}>
                <Link
                  href={option.route}
                  className={`${
                    path === option.route &&
                    "border-b-4 border-b-gray-700 rounded pb-2"
                  }`}
                >
                  {option.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
