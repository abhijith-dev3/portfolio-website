import React from "react";
import { motion } from "framer-motion";
import { SiTailwindcss } from "react-icons/si";
console.log(motion)
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaFigma, FaCode, } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const techIcons = {
    React: <FaReact className="text-blue-500" />,
    JavaScript: <FaJs className="text-yellow-400" />,
    HTML: <FaHtml5 className="text-orange-600" />,
    CSS: <FaCss3Alt className="text-blue-600" />,
    Git: <FaGitAlt className="text-orange-500" />,
    GitHub: <FaGithub className="text-gray-800" />,
    Tailwind: <SiTailwindcss className="text-cyan-400" />,
    Figma: <FaFigma className="text-pink-500" />,
    VSCode: <FaCode className="text-gray-600" />,
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center z-10"
    >
      <img 
        src={project.image} 
        alt={project.name} 
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold text-lg mb-2 text-center">{project.name}</h3>
      <div className="flex flex-wrap gap-3 justify-center mb-3">
        {project.tech.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center w-16 h-16">
            <div className="flex justify-center items-center w-full h-full text-3xl">
              {techIcons[item] || <FaCode className="text-gray-600" />}
            </div>
            <span className="text-sm mt-1 text-center">{item}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.link} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">Code</a>
        <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-sm text-green-600 hover:underline">Live</a>
      </div>
    </motion.div>
  );
}
