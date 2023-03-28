"use client";

import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";
import urlFor from "@/lib/urlFor";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 pb-24">
      {posts.map((post) => (
        <ClientSideRoute route={`/blog/${post.slug.current}`} key={post._id}>
          <div className="group flex flex-col cursor-pointer">
            <div className="relative w-full h-72 drop-shadow-xl">
              <Image
                className="object-cover lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
              />
            </div>
            <div>{post.title}</div>
            {new Date(post._createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            <div>{post.description}</div>
          </div>
        </ClientSideRoute>
      ))}
    </div>
  );
}
export default BlogList;
