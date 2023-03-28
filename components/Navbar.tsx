import Image from "next/image";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between space-x-2 font-bold px-10">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            height={50}
            width={50}
            src="https://i.imgur.com/yU4OwzD.png"
            alt="logo"
          />
        </Link>
        <h1>Jungles of Dorado</h1>
      </div>


<div></div>

    </nav>
  );
};
export default Navbar;
