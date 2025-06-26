import React from "react";
import { skillsData } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 md:px-8 lg:px-12 bg-gray-900 text-gray-100 font-sans"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-100">
          My Skills & Tech Stack
        </h2>

        {skillsData.map((category) => (
          <div className="mb-12" key={category.category}>
            <h3 className="text-2xl font-semibold text-gray-300 mb-6 border-b border-gray-700 pb-2">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-2">
                    {skill.icon ? (
                      <skill.icon size={36} className="text-teal-400" />
                    ) : (
                      <span className="text-gray-400 text-sm">Icon</span>
                    )}
                  </div>
                  <p className="text-lg font-medium text-gray-100">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
