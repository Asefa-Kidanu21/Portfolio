
import Portfolio from '../../assets/Images/portfolio.jpg'
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 text-white flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <p className="text-blue-500 text-lg font-medium mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Asefa
              <span className="text-blue-500"> Kidanu</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mt-4">
              Software Engineering Student
              <span className="text-blue-500"> & Web Developer</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mt-6 max-w-xl">
              I build modern, responsive and user-friendly web applications
              using React, JavaScript, Node.js, Express.js and PostgreSQL.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-gray-600 hover:border-blue-500 hover:text-blue-500 rounded-lg font-medium transition"
              >
                Contact Me
              </a>

            <a
             href="/resume.pdf"
             target="_blank"
             rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-600 hover:border-blue-500 hover:text-blue-500 rounded-lg font-medium transition"
            >
           View Resume
           </a>
              
              
            </div>
          </div>

          {/* Right Side - Profile */}
          <div className="flex justify-center">
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full"></div>

              {/* Placeholder */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500/50 bg-gray-800 flex items-center justify-center overflow-hidden">

                <span className="text-gray-500 text-lg">
                  <img
                    src={Portfolio}
                    alt="Asefa Kidanu"
                    
                  />
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;