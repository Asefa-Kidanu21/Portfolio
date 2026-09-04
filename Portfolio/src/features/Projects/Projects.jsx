import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">
            What I've Built
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;