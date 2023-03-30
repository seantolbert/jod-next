import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import ProjectList from "@/components/ProjectList";

const query = groq`
  * [_type=='project'] | order(_createdAt desc)
`;

async function ProjectPage() {
  const projects = await client.fetch(query);

  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
}
export default ProjectPage;
