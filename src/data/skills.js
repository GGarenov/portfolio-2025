// src/data/skills.js
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiRedux,
  SiFirebase,
  SiVite,
  SiRender,
  SiFramer,
  SiAngular,
  SiGoogleauthenticator,
  SiOpenai,
  SiPostman,
  SiNotion,
  SiGithubcopilot,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { RiClaudeFill } from "react-icons/ri";

export const skillsData = [
  {
    category: "Core Web Technologies",
    items: [
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    category: "Front-End Frameworks & Tools",
    items: [
      { name: "React", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "Vite", icon: SiVite },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Angular", icon: SiAngular },
    ],
  },
  {
    category: "Back-End & Databases",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
    ],
  },
  {
    category: "Authentication & APIs",
    items: [
      { name: "Firebase", icon: SiFirebase },
      { name: "Google OAuth", icon: SiGoogleauthenticator },
      { name: "Email JS", icon: SiOpenai }, // Closest generic icon for EmailJS
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    category: "Deployment & Dev Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: IoLogoVercel },
      { name: "Render", icon: SiRender },
    ],
  },
  {
    category: "Productivity & AI Tools",
    items: [
      { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "ChatGPT", icon: SiOpenai },
      { name: "Notebook LM", icon: SiNotion }, // Using Notion icon as a placeholder
      { name: "Claude", icon: RiClaudeFill }, // Using Notion icon as a placeholder
    ],
  },
];
