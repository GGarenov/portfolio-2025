import React from "react";
import developerPhoto from "../../public/assets/images/developer-photo.JPEG";

const HeroSection = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-8 bg-gray-900">
      <img
        src={developerPhoto}
        alt="Developer portrait"
        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-6 shadow-lg shadow-gray-800/40 border-4 border-gray-800"
      />
      <h1 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold mb-2 leading-tight text-gray-100">
        Georgi Garenov
      </h1>
      <p className="text-base xs:text-lg sm:text-xl text-teal-400 font-medium mb-4">
        Junior Front-End Developer
      </p>
      <p className="text-sm xs:text-base sm:text-lg text-gray-400 max-w-xl mb-6">
        Passionate about turning ideas into fast, accessible, and intuitive web
        apps. I build with the MERN stack and love creating seamless
        front-to-back experiences. Whether it’s React on the frontend or Node
        and MongoDB on the backend—I focus on clean code, teamwork, and
        delivering real value. Let’s create something impactful together!
      </p>
      <a
        href="/projects"
        onClick={handleScroll}
        aria-label="Scroll to Projects section"
        className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg shadow-teal-900/40 hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 active:scale-95 select-none cursor-pointer text-base sm:text-lg"
        tabIndex={0}
      >
        View Projects
      </a>
    </section>
  );
};

export default HeroSection;
