import skills from "../../data/skills";

function Skills() {
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <Icon className="text-5xl text-blue-500 group-hover:scale-110 transition-transform duration-300" />

                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-gray-200">
                  {skill.name}
                </h3>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Skills;