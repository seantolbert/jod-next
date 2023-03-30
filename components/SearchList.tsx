"use client";

import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { useSearchParams } from "next/navigation";

function SearchList({ searchResults }: any) {
  const queryString = useSearchParams();
  const queryParams = new URLSearchParams(queryString);

console.log(decodeURIComponent(queryString?.toString()))

  return (
    <>
      <div>Search: {}</div>
      <div>
        results:
        {searchResults.map((result: any) => (
          // filteredResults.map((result) => (
          <div
            key={result._id}
            className="text-center text-2xl font-merriweather"
          >
            {result.title}
          </div>
        ))}
      </div>
    </>
  );
}
export default SearchList;
