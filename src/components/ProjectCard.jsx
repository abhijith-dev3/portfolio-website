import { motion } from "framer-motion";
console.log(motion);
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaFigma, FaCode, FaNodeJs } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const techIcons = {
  React: <FaReact style={{ color: "#61DAFB" }} />,
  JavaScript: <FaJs style={{ color: "#F7DF1E" }} />,
  HTML: <FaHtml5 style={{ color: "#E34F26" }} />,
  CSS: <FaCss3Alt style={{ color: "#1572B6" }} />,
  Git: <FaGitAlt style={{ color: "#F05032" }} />,
  GitHub: <FaGithub style={{ color: "#e8e4dc" }} />,
  Tailwind: <SiTailwindcss style={{ color: "#06B6D4" }} />,
  Figma: <FaFigma style={{ color: "#F24E1E" }} />,
  VSCode: <FaCode style={{ color: "#007ACC" }} />,
  "Node.js": <FaNodeJs style={{ color: "#68A063" }} />,
  Express: <SiExpress style={{ color: "#e8e4dc" }} />,
  MongoDB: <SiMongodb style={{ color: "#4DB33D" }} />,
};

export default function ProjectCard({ project }) {
  return (
    <div
      className="group border border-white/5 rounded-xl overflow-hidden
                 hover:border-[#f5a623]/20 transition-all duration-300
                 flex flex-col bg-[#111111] hover:-translate-y-1"
    >
      {/* ── Image hero ── */}
      <div
        className="relative w-full overflow-hidden bg-white/5"
        style={{ aspectRatio: "16/9" }}
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover opacity-70
                     group-hover:opacity-90 group-hover:scale-105
                     transition-all duration-500"
        />

        {/* fade into card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

        {/* type badge */}
        {project.type && (
          <span
            className="absolute top-3 left-3 text-[10px] tracking-widest uppercase
                       px-2.5 py-1 rounded-full bg-black/60 text-white/60
                       backdrop-blur-sm border border-white/8"
          >
            {project.type}
          </span>
        )}
      </div>

      {/* ── Body ── */}
      <div className="p-6 flex flex-col flex-1 gap-3">

        {/* title */}
        <h3
          className="text-lg font-black text-white leading-tight"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {project.emoji && <span className="mr-1">{project.emoji}</span>}
          {project.name}
        </h3>

        {/* description */}
        {project.description && (
          <p className="text-white/40 text-sm leading-relaxed">
            {project.description}
          </p>
        )}

        {/* tech pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <div
              key={t}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full
                         border border-white/8 bg-white/3"
            >
              <span className="text-sm leading-none">
                {techIcons[t] ?? <FaCode style={{ color: "#888" }} />}
              </span>
              <span className="text-[11px] text-white/40">{t}</span>
            </div>
          ))}
        </div>

        {/* links */}
        <div className="flex items-center gap-5 mt-auto pt-4 border-t border-white/5">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40
                         hover:text-white transition-colors duration-200"
            >
              <FaGithub className="text-sm" />
              Source
            </a>
          )}

          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#f5a623]/60
                         hover:text-[#f5a623] transition-colors duration-200"
            >
              <HiExternalLink className="text-sm" />
              Live demo
            </a>
          ) : (
            <span className="text-xs text-white/15 cursor-default">
              Live coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
