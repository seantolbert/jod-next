import BlogList from "@/components/BlogList";
import PreviewBlogList from "@/components/PreviewBlogList";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { previewData } from "next/headers";

const query = groq`
  *[_type=='post'] {
    ...,
    categories[]->,
  } | order(_createdAt desc)
`;

export const revalidate = 60;

async function BlogIndexPage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}

export default BlogIndexPage;
