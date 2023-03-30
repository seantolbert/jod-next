import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import AboutClient from "@/components/AboutClient";

const query = groq`
  *[_id == 'b6f748a6-d7d2-4201-8f98-21be761ed158']
`;

async function AboutPage() {
  const aboutContent = await client.fetch(query);

  return (
    <>
      <AboutClient content={aboutContent[0]} />
    </>
  );
}
export default AboutPage;
