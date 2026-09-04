


function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-medium mb-2">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              I'm Asefa Kidanu
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a software engineering student and web developer
              passionate about building modern and user-friendly web
              applications.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I enjoy working with both frontend and backend technologies.
              My main focus is creating responsive interfaces with React
              and building reliable backend systems using Node.js,
              Express.js and PostgreSQL.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h4 className="text-blue-500 text-3xl font-bold mb-2">
                React
              </h4>
              <p className="text-gray-400">
                Modern frontend development
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h4 className="text-blue-500 text-3xl font-bold mb-2">
                Node.js
              </h4>
              <p className="text-gray-400">
                Backend development
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h4 className="text-blue-500 text-3xl font-bold mb-2">
                REST API
              </h4>
              <p className="text-gray-400">
                API development and integration
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h4 className="text-blue-500 text-3xl font-bold mb-2">
                PostgreSQL
              </h4>
              <p className="text-gray-400">
                Database development
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;