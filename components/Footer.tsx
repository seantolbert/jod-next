import Link from "next/link";

function Footer() {
  return (
    <footer className="p-5 flex justify-between items-center">
      <div className="text-sm">Jungles of Dorado 2023</div>
      <div className="flex gap-5">
        <Link href="#">Instagram</Link>
        <Link href="/about">Contact</Link>
      </div>
    </footer>
  );
}
export default Footer;
