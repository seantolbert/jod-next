import Gallery from "@/components/Gallery";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { previewData } from "next/headers";

const query = groq`
  *[_type=='galleryImage'] {
    ...,
    categories[]->
  } | order(_craetedAt desc)
`;

export const revalidate = 300;

export default async function HomePage() {
  const photos = await client.fetch(query);

  return <Gallery photos={photos} />;
}
