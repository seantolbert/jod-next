"use client";

import Image from "next/image";
import urlFor from "@/lib/urlFor";

function AboutClient({ content }: any) {
  return (
    <div className="flex flex-col md:flex-row items-center px-5">
      <div className="w-1/2 h-1/2 z-10 text-2xl md:text-3xl bg-transparent md:backdrop-blur-lg rounded-lg lin">
        <div className="text-green font-thin">{content.excerpt}</div>
        <div className="text-sm text-center py-5">{content.email}</div>
      </div>
      <div className="w-1/2">
        <Image
          src={urlFor(content.image).url()}
          alt="Jungles of Dorado Map"
          width={500}
          height={500}
          className="object-cover lg:object-center w-full h-full"
        />
      </div>
    </div>
  );
}
export default AboutClient;
