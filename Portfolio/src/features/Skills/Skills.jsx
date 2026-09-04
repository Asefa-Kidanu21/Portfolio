

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "REST APIs",
    "JWT Authentication",
    "Git & GitHub",
  ];

  return (
    <section
      id="skills"
      className="bg-gray-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">
            What I Work With
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-200">
                {skill}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;