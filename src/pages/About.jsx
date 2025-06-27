import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 bg-gray-900 text-gray-100 font-sans">
      <div className="w-full max-w-2xl bg-gray-900 rounded-xl shadow-lg p-6 md:p-10 flex flex-col gap-8">
        <header>
          <h1 className="text-4xl font-bold mb-2 text-teal-400">About Me</h1>
          <h2 className="text-xl font-semibold text-gray-100 mb-4">
            Short Biography
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            I’m a passionate front-end developer with 2 years of hands-on coding
            experience, focused on building fast, accessible, and user-friendly
            web applications. What started as a curiosity about how the web
            works has grown into a deep enthusiasm for crafting elegant and
            maintainable interfaces.
          </p>
        </header>
        <section>
          <h3 className="text-lg font-semibold text-gray-100 mb-2">
            Background & Interests
          </h3>
          <p className="text-base text-gray-400 mb-2">
            With a foundation in computer science and a GitHub portfolio full of
            real-world projects, I’ve developed a strong understanding of modern
            web development practices. I enjoy building with the MERN stack and
            thrive in collaborative environments where clean code and good UX
            matter.
          </p>
          <h3 className="text-lg font-semibold text-gray-100 mb-2">
            I’m especially interested in:
          </h3>

          <ul className="list-disc list-inside text-gray-400 text-base pl-2 mb-2">
            <li>UI/UX design and accessibility</li>
            <li>Open source contributions</li>
            <li>Building side projects and prototypes</li>
            <li>Exploring new JavaScript frameworks</li>
          </ul>
        </section>
        <section>
          <h3 className="text-lg font-semibold text-gray-100 mb-2">
            Currently Learning
          </h3>
          <ul className="list-disc list-inside text-gray-400 text-base pl-2 mb-2">
            <li>TypeScript for safer, scalable code</li>
            <li>Framer Motion for advanced UI animations</li>
            <li>Testing with React Testing Library</li>
            <li>PostgreSQL</li>
          </ul>
        </section>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <a
            href="/Georgi_Garenov_Resume.pdf"
            download
            className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg shadow-teal-900/40 hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 active:scale-95 select-none cursor-pointer text-base sm:text-lg"
            aria-label="Download Resume PDF"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
