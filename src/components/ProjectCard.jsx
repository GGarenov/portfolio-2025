import React from "react";

const ProjectCard = ({ title, description, tech, image, liveDemo, github }) => {
  return (
    <article className="bg-gray-800 rounded-xl shadow-lg flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl duration-300">
      <img
        src={image}
        alt={title + " screenshot"}
        className="w-full h-48 object-cover object-top sm:h-56 md:h-48 lg:h-40 xl:h-48"
      />
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="text-2xl font-bold text-gray-100 mb-1">{title}</h3>
        <p className="text-gray-400 text-base flex-1">{description}</p>
        <ul className="flex flex-wrap gap-2 mb-2">
          {tech.map((tag) => (
            <li
              key={tag}
              className="px-3 py-1 bg-teal-700/60 text-teal-200 rounded-full text-xs font-semibold tracking-wide"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex gap-3 mt-2">
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-lg shadow-teal-900/40 hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 active:scale-95 select-none cursor-pointer text-sm sm:text-base"
            aria-label={`Live demo for ${title}`}
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-gray-700 text-teal-300 font-semibold rounded-lg shadow hover:bg-gray-600 hover:text-teal-200 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 active:scale-95 select-none cursor-pointer text-sm sm:text-base"
            aria-label={`GitHub repo for ${title}`}
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
