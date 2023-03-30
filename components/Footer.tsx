import { AtSymbolIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="p-5 flex justify-between items-center text-sm">
      <div className="flex">
        <AtSymbolIcon className="w-5 h-5" />
        2023 Jungles of Dorado
      </div>
      <Link href="http://tolbert.me" rel="noopener noreferrer" target="_blank">
        <Image
          className="w-auto h-auto"
          height={15}
          width={15}
          src="https://i.imgur.com/oJAIFkU.png"
          alt="logo"
        />
      </Link>
      <div className="flex gap-5">
        <Link href="#">Instagram</Link>
        <Link href="/about">Contact</Link>
      </div>
    </footer>
  );
}
export default Footer;
