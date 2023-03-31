import SearchList from "@/components/SearchList";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

function SearchPage() {
  return (
    <>
      <SearchList />
    </>
  );
}
export default SearchPage;
