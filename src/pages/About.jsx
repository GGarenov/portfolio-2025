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
            I am a passionate front-end developer with a love for building
            clean, accessible, and performant web experiences. My journey began
            with curiosity for how things work on the web, and has grown into a
            drive to create elegant, user-focused interfaces.
          </p>
        </header>
        <section>
          <h3 className="text-lg font-semibold text-gray-100 mb-2">
            Background & Interests
          </h3>
          <p className="text-base text-gray-400 mb-2">
            My background includes a mix of computer science studies and
            hands-on project work. I enjoy collaborating with others, learning
            new technologies, and solving real-world problems through code.
          </p>
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
          </ul>
        </section>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="/resume.pdf"
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
