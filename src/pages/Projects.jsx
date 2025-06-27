import React from "react";
import { projectData } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 md:px-8 lg:px-12 bg-gray-900 text-gray-100 font-sans min-h-[70vh]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-teal-400">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
