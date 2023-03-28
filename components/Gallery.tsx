"use client";
/* eslint-disable @next/next/no-img-element */

import urlFor from "@/lib/urlFor";
import Link from "next/link";

type Props = {
  photos: GalleryImage[];
};

function Gallery({ photos }: Props) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
      {photos.map((photo) => {
        console.log(photo.link);

        return (
          <Link
            href={photo.link === undefined ? "#" : photo.link}
            target={photo.link === undefined ? "" : "_blank"}
            key={photo._id}
          >
            <div
              className={`w-full h-full mb-4 group relative ${
                photo.link === undefined ? "cursor-auto" : "cursor-pointer"
              }`}
            >
              <img
                src={urlFor(photo.image).url()}
                alt={photo.title}
                className="group-hover:scale-105 transition-transform duration-150"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default Gallery;
