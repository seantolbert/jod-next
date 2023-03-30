import SearchList from "@/components/SearchList";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const query = groq`
*[_type in ['post', 'galleryImage', 'project']] {
  ...,
  categories[]->
} | order(_createdAt desc)
`

async function SearchPage() {
  const searchResults = await client.fetch(query);

  return (
    <>
      <SearchList searchResults={searchResults}/>
    </>
  );
}
export default SearchPage;
