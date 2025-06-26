// src/data/skills.js
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { IoLogoVercel } from "react-icons/io5";

export const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: FaJs },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [{ name: "React", icon: FaReact }],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: IoLogoVercel },
    ],
  },
];
