import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between space-x-2 font-bold px-5 max-w-7xl py-5">
      <div className="flex items-center space-x-2">
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

      <div>
        <ul className="flex gap-5">
          <li>
            <Link href="/blog">Posts</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Project</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
