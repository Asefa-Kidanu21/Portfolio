

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white">
          Asefa<span className="text-blue-500">Kidanu</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-300 hover:text-blue-500 transition">
            Home
          </a>

          <a href="#about" className="text-gray-300 hover:text-blue-500 transition">
            About
          </a>

          <a href="#skills" className="text-gray-300 hover:text-blue-500 transition">
            Skills
          </a>

          <a href="#projects" className="text-gray-300 hover:text-blue-500 transition">
            Projects
          </a>

          <a href="#contact" className="text-gray-300 hover:text-blue-500 transition">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-5 space-y-4 bg-gray-950">
          <a href="#home" className="block text-gray-300 hover:text-blue-500">
            Home
          </a>

          <a href="#about" className="block text-gray-300 hover:text-blue-500">
            About
          </a>

          <a href="#skills" className="block text-gray-300 hover:text-blue-500">
            Skills
          </a>

          <a href="#projects" className="block text-gray-300 hover:text-blue-500">
            Projects
          </a>

          <a href="#contact" className="block text-gray-300 hover:text-blue-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;