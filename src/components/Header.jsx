import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md shadow-lg border-b border-gray-800">
      <nav className="w-full flex flex-col items-center justify-center py-2 px-2 sm:px-4">
        <div className="text-2xl font-bold text-teal-400 tracking-tight mb-2">
          My Portfolio
        </div>
        <ul className="flex space-x-4 sm:space-x-6 justify-center">
          <li>
            <Link
              to="/"
              className="text-gray-100 hover:text-teal-400 transition-colors font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-100 hover:text-teal-400 transition-colors font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-gray-100 hover:text-teal-400 transition-colors font-medium"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="text-gray-100 hover:text-teal-400 transition-colors font-medium"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-100 hover:text-teal-400 transition-colors font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
