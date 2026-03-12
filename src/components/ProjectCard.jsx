import { motion } from "framer-motion";
console.log(motion)
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaFigma, FaCode } from "react-icons/fa";

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
      whileHover={{ scale: 1.03, rotate: 0.5 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group bg-white border border-[#00D4AA]/20 hover:border-[#00D4AA]/50 
                 rounded-xl shadow-sm hover:shadow-lg overflow-hidden flex flex-col z-10 
                 transition-all duration-300"
    >
      {/* Teal top bar */}
      <div className="w-full h-1 bg-[#00D4AA]"></div>

      <div className="p-5 flex flex-col items-center">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-[1.02] transition-transform duration-300"
        />

        <h3 className="font-semibold text-lg mb-2 text-center text-[#0F172A]">
          {project.name}
        </h3>

        {/* Project Description */}
        {project.description && (
          <p className="text-sm text-[#475569] text-center mb-3 leading-relaxed">
            {project.description}
          </p>
        )}

        {/* Tech Icons */}
        <div className="flex flex-wrap gap-3 justify-center mb-4">
          {project.tech.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center w-14">
              <div className="flex justify-center items-center text-2xl mb-1">
                {techIcons[item] || <FaCode className="text-gray-600" />}
              </div>
              <span className="text-xs text-center text-[#475569]">{item}</span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 mt-auto pt-2 border-t border-gray-100 w-full justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-[#0F3460] hover:text-[#00D4AA] transition-colors duration-200"
          >
            Code ↗
          </a>
          {project.liveLink && project.liveLink !== "https://blog.com" ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[#00D4AA] hover:text-[#0F3460] transition-colors duration-200"
            >
              Live ↗
            </a>
          ) : (
            <span className="text-sm font-medium text-gray-300 cursor-not-allowed">
              Live (coming soon)
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
