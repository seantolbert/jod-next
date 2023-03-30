import { useState, useEffect } from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

const useSanitySearch = ({ query }: any, options = {}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);

    const groqQuery = groq`
    *[_type in ['post', 'galleryImage', 'project']] {
        ...,
        categories[]->,
    } | order(_createdAt desc)
        `;

    const search = async () => {
      try {
        const data: SearchResults = await client.fetch(groqQuery);
        setResults(data.results);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    search();
  }, [query, options]);

  return { results, isLoading, error };
};

export default useSanitySearch;
