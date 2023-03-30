"use client";

type Props = {
  projects: Project[];
};

function ProjectList({ projects }: Props) {
  return (
    <div>
      {projects.map((project) => (
        <div key={project._id} className="flex gap-5 justify-center">
          <div>{project.title}</div>-<div>{project.description}</div>
        </div>
      ))}
      <div></div>
    </div>
  );
}
export default ProjectList;
