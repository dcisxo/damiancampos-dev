import projectsData from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import "./Projects.css";

const Projects = () => {
  return (
    <SectionWrapper title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            problem={project.problem}
            technology={project.technology}
            imagePath={project.imagePath}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
