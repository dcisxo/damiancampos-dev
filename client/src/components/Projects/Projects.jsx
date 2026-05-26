import { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { getProjects } from "../../api/projects";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch(() => setError("Failed to load projects."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SectionWrapper title="Projects">
      {loading && (
        <p className="text-center text-gray-400">Loading projects...</p>
      )}
      {error && <p className="text-center text-red-400">{error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              description={project.description}
              problem={project.problem}
              technology={project.technology}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
};

export default Projects;
