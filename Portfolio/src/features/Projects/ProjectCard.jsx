

function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition duration-300">

      {/* Project Image */}
      <div className="h-48 bg-gray-800 flex items-center justify-center">
        <span className="text-gray-500">
          Project Image
        </span>
      </div>

      {/* Project Content */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="px-3 py-1 text-sm bg-gray-800 text-blue-400 rounded-full"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:border-blue-500 hover:text-blue-500 transition"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
          >
            Live Demo
          </a>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;