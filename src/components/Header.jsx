import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md shadow-lg border-b border-gray-800">
      <nav className="w-full flex flex-col items-center justify-center py-2 px-2 sm:px-4">
        <div className="text-2xl font-bold text-teal-400 tracking-tight mb-2">
          Georgi Garenov · Front-End Developer
        </div>
        <ul className="flex space-x-4 sm:space-x-6 justify-center">
          <li>
            <a
              href="#hero"
              className="text-gray-100 hover:text-teal-400 transition-colors font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-100 hover:text-teal-400 transition-colors font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-100 hover:text-teal-400 transition-colors font-medium"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-100 hover:text-teal-400 transition-colors font-medium"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-100 hover:text-teal-400 transition-colors font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
