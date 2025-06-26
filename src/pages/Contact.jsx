import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 bg-gray-900 text-gray-100 font-sans">
      <div className="w-full max-w-xl bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-teal-400 mb-2">Contact</h1>
        <p className="text-lg text-gray-400 mb-6 text-center max-w-md">
          Let's connect! You can find me on these platforms:
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex flex-col items-center gap-2 px-6 py-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 active:scale-95 select-none cursor-pointer w-full sm:w-auto"
          >
            <Github className="w-8 h-8 text-teal-400" />
            <span className="text-base text-gray-100 font-semibold">
              GitHub
            </span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex flex-col items-center gap-2 px-6 py-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 active:scale-95 select-none cursor-pointer w-full sm:w-auto"
          >
            <Linkedin className="w-8 h-8 text-teal-400" />
            <span className="text-base text-gray-100 font-semibold">
              LinkedIn
            </span>
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="flex flex-col items-center gap-2 px-6 py-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 active:scale-95 select-none cursor-pointer w-full sm:w-auto"
          >
            <Mail className="w-8 h-8 text-teal-400" />
            <span className="text-base text-gray-100 font-semibold">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
