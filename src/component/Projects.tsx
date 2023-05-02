import { api } from "../utils/api";
import Project from "./Project";

export default function Projects() {
  const { data: projects, isLoading, isError } = api.project.all.useQuery();

  if (isLoading) return <div>Loading projects</div>;
  if (isError) return <div>Error fetching projects</div>;
  return (
    <>
      <div className="lg:grid-cols grid">
        {projects.length
          ? projects.map((project, index) => {
              console.log("index is", index);
              return <Project key={index} project={project} />;
            })
          : "Projects coming soon!"}
      </div>
    </>
  );
}
