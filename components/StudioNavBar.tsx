import Link from "next/link";

import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

function StudioNavBar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5 text-white">
        <Link href="/" className="flex gap-2 group">
          <ChevronDoubleLeftIcon className="w-6 h-6 group-hover:text-cyan-400 transition-colors duration-150" />
          Go to Website
        </Link>

        <div className="hidden md:flex gap-2 items-center group">
          <p className="font-bold">Have a question?</p>
          <p className="text-sm">
            contact me at <span className="font-bold group-hover:text-cyan-400 transition-colors duration-150">sean@tolbert.me</span>
          </p>
        </div>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}
export default StudioNavBar;
