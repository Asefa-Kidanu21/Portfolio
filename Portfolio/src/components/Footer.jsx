import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
        bg-gray-100 dark:bg-gray-950
        border-t border-gray-200 dark:border-gray-800
        text-gray-600 dark:text-gray-400
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Asefa<span className="text-blue-500">.</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Asefa Kidanu. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>

            <a
              href="mailto:your-email@example.com"
              className="hover:text-blue-500 transition"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl" />
            </a>

            <a
              href="#home"
              className="text-sm hover:text-blue-500 transition"
            >
              Top ↑
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;