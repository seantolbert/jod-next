import urlFor from "@/lib/urlFor";
import Image from "next/image";
// import {Masonry} from "masonry-layout";
// import { InstagramIcon } from "@heroicons/react/24/solid";

type Props = {
  photos: GalleryImage[];
};

function Gallery({ photos }: Props) {
  // console.log(photos);

  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
      {photos.map((photo) => (
        <div className="w-full h-full mb-4 group relative" key={photo.id}>
          <img
            src={urlFor(photo.image).url()}
            alt={photo.title}
            // width={}
            className="w-full h-full group-hover:scale-105 transition-transform duration-150"
          />
          
        </div>
      ))}
    </div>
  );
}
export default Gallery;
