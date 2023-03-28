"use client";

import Image from "next/image";
import Link from "next/link";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center max-w-7xl py-8">
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
          <h1 className="font-merriweather text-2xl flex items-center gap-2">
            Jungles <span className="italic text-sm font-bold">of</span> Dorado
          </h1>
        </div>

        <button onClick={() => setIsOpen(!isOpen)}>
          <Bars4Icon className="w-7 h-7" />
        </button>
      </div>

      <div
        className={`fixed bottom-0 w-full flex bg-[#eae7d3] z-10 ${
          isOpen ? "translate-y-0" : "translate-y-28"
        } transition-transform duration-200`}
      >
        <ul className="flex justify-evenly items-center w-full py-5">
          <li>
            <Link
              href="/"
              className={`${
                router === "/" && "border-b-4 border-b-gray-700 rounded pb-2"
              }`}
            >
              {/* <HomeIcon className="w-6 h-6" /> */}
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`${
                router === "/blog" &&
                "border-b-4 border-b-gray-700 rounded pb-2"
              }`}
            >
              {/* <PencilIcon className="w-6 h-6" /> */}
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                router === "/about" &&
                "border-b-4 border-b-gray-700 rounded pb-2"
              }`}
            >
              {/* <UserIcon className="w-6 h-6" /> */}
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${
                router === "/projects" &&
                "border-b-4 border-b-gray-700 rounded pb-2"
              }`}
            >
              {/* <Link href="/projects">Project</Link> */}
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
