"use client";

import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  results: SearchResults[];
};

function SearchList() {
  const [text, setText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const query = groq`
        *[_type in ['post', 'galleryImage', 'project']
        && (
          title match $searchText || 
          body.children.text match $searchText ||
          description match $searchText ||
          categories[]->{title} match $searchText
        )
        ]{
          _type,
          _id,
          title,
          description,
          categories[]->{title}
        } | order(_createdAt desc)
      `;

      const params = { searchText: `*${searchText}*` };

      const results = await client.fetch(query, params);
      setResults(results);
    };

    search();
  }, [searchText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(text);
  };

  return (
    <div className="h-full flex flex-col justify-between items-center">
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
      </form>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {results.length > 0 &&
          results.map((result) => {
            if (result._type === "post") {
              return (
                <div
                  key={result._id}
                  className="w-full h-64 border-2 border-black p-2 relative flex items-end"
                >
                  <div className="absolute right-0 top-0 bg-black bg-opacity-20 rounded-lg backdrop-blur-lg text-white uppercase text-sm">
                    {result._type}
                  </div>

                  <div className="">
                    <Image
                      src={urlFor(result.MainImage).url()}
                      alt={`${result._type} Image`}
                      // fill
                      // loading="lazy"
                      className="object-cover lg:object-center"
                      onLoad={(e) => {
                        e.target.style.opacity = "1";
                      }}
                    />
                  </div>

                  <div>{result.title}</div>
                </div>
              );
            } else if (result._type === "galleryImage") {
              return (
                <div
                  key={result._id}
                  className="w-full h-64 border-2 border-black p-2 relative items-end"
                >
                  <div className="absolute right-0 top-0 p-1 m-2 bg-black bg-opacity-20 rounded-lg backdrop-blur-lg text-white uppercase text-sm">
                    gallery
                  </div>
                  <div>{result.title}</div>
                </div>
              );
            } else {
              return (
                <div
                  key={result._id}
                  className="w-full h-64 border-2 border-black p-2"
                >
                  Project
                  {result.title}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
export default SearchList;
