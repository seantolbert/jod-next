import { AtSymbolIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Footer() {
  return (
    <footer className="p-5 flex justify-between items-center">
      <div className="text-sm flex">
        <AtSymbolIcon className="w-5 h-5" />
        2023 Jungles of Dorado
      </div>
      <div className="flex gap-5">
        <Link href="#">Instagram</Link>
        <Link href="/about">Contact</Link>
      </div>
    </footer>
  );
}
export default Footer;
