import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import portfolioImage from '../../assets/Images/Portfolio2.png'

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-white dark:bg-gray-950
        text-gray-900 dark:text-white
        flex items-center
        pt-20
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="animate-[fadeInUp_0.8s_ease-out]">

            <p className="text-blue-500 text-lg font-medium mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Asefa
              <span className="text-blue-500"> Kidanu</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mt-4">
              Software Engineering Student
              <span className="text-blue-500">
                {" "} & Web Developer
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mt-6 max-w-xl">
              I build modern, responsive and user-friendly web applications
              using React, JavaScript, Node.js, Express.js and PostgreSQL.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="
                  px-6 py-3
                  bg-blue-600
                  hover:bg-blue-700
                  hover:-translate-y-1
                  text-white
                  rounded-lg
                  font-medium
                  transition-all duration-300
                "
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="
                  px-6 py-3
                  border border-gray-300 dark:border-gray-600
                  text-gray-800 dark:text-gray-300
                  hover:border-blue-500
                  hover:text-blue-500
                  hover:-translate-y-1
                  rounded-lg
                  font-medium
                  transition-all duration-300
                "
              >
                Contact Me
              </a>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-8">

              {/* GitHub */}
              <a
                href="https://github.com/Asefa-Kidanu21"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-600 dark:text-gray-400
                  hover:text-blue-500
                  hover:-translate-y-1
                  transition-all duration-300
                "
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/asefa-kidanu/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-600 dark:text-gray-400
                  hover:text-blue-500
                  hover:-translate-y-1
                  transition-all duration-300
                "
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>

              {/* Email */}
              <a
                href="mailto:asefakidanu21@example.com"
                className="
                  text-gray-600 dark:text-gray-400
                  hover:text-blue-500
                  hover:-translate-y-1
                  transition-all duration-300
                "
                aria-label="Email"
              >
                <FaEnvelope className="text-2xl" />
              </a>

            </div>

          </div>

          {/* Right Side / Photo */}
          <div className="flex justify-center animate-[fadeIn_1s_ease-out]">

            <div className="relative">

              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full"></div>

              <div
                className="
                  relative
                  w-64 h-64
                  md:w-80 md:h-80
                  rounded-full
                  border-4 border-blue-500/50
                  bg-gray-200 dark:bg-gray-800
                  flex items-center justify-center
                  overflow-hidden
                "
              >
                <span className="text-gray-500 dark:text-gray-400 text-lg">
                  <img src={portfolioImage} alt="" />
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