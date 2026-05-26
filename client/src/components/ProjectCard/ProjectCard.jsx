import "./ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  problem,
  technology,
  imageUrl,
  githubUrl,
  demoUrl,
}) => {
  return (
    <div className="project-card bg-gray-900 rounded-xl overflow-hidden flex flex-col border border-gray-800 hover:border-gray-600">
      <div className="relative w-full h-48 bg-gray-800">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="project-placeholder flex items-center justify-center h-full text-gray-500 text-sm">
            Screenshot coming soon
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3">{description}</p>
        {problem && (
          <p className="text-gray-500 text-sm mb-4">
            <span className="text-gray-300 font-medium">
              Problem it solves:{" "}
            </span>
            {problem}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {technology.map((tech) => (
            <span
              key={tech}
              className="tech-badge px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 text-sm border border-gray-600 rounded hover:border-white hover:text-white transition"
            >
              GitHub
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 text-sm bg-blue-600 rounded hover:bg-blue-500 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
