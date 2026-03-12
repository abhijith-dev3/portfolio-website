import { motion } from "framer-motion";
console.log(motion)
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaJs } from "react-icons/fa";
import f1 from "../assets/images/f1.png";
import commerce from "../assets/images/commerce.png";
import movie from "../assets/images/movie.png";

const techIcons = {
  React: <FaReact style={{ color: "#61DAFB" }} />,
  JavaScript: <FaJs style={{ color: "#F7DF1E" }} />,
  Tailwind: <SiTailwindcss style={{ color: "#06B6D4" }} />,
};

const projects = [
  {
    n: "01",
    name: "F1-UI-Simulator",
    emoji: "🚗",
    type: "UI Practice",
    description:
      "F1 themed dashboard UI — built to practise component architecture and layout design. Uses mock/static data, no live API.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/abhijith-dev3/F1-UI-simulator.git",
    live: "https://f1-ui-simulator.netlify.app/",
    image: f1,
  },
  {
    n: "02",
    name: "React E-Commerce",
    emoji: "🛒",
    type: "Learning Project",
    description:
      "Learning project focused on React state management — product listing, add-to-cart flow, and responsive design. Frontend only, no backend or payments.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/abhijith-dev3/React-E-commerce-Project.git",
    live: "https://react-e-commerce31.netlify.app/",
    image: commerce,
  },
  {
    n: "03",
    name: "Movie Explorer",
    emoji: "🎬",
    type: "API Integration",
    description:
      "Browse and search movies with genre filters and detail pages. Built to practise working with external APIs and dynamic routing.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/abhijith-dev3/movie-explorer.git",
    live: null,
    image: movie,
  },
];

export default function Projects() {
  return (
    <div className="bg-[#0a0a0a] text-[#e8e4dc] min-h-screen pt-20">

      {/* Header */}
      <section className="px-8 md:px-16 pt-16 pb-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.span
            className="text-xs tracking-[4px] text-[#f5a623]/60 uppercase block mb-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            04 — Projects
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-black text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            What I<br />
            <span className="text-[#f5a623]">Build</span>
          </motion.h1>
          <motion.p
            className="text-white/35 text-base mt-4 max-w-lg"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            A small but honest collection. Each one taught me something specific —
            listed alongside what it actually is, not what sounds impressive.
          </motion.p>
        </div>
      </section>

      {/* Project list */}
      <section className="px-8 md:px-16 py-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          {projects.map(({ n, name, emoji, type, description, tech, github, live, image }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-white/5 rounded-xl overflow-hidden hover:border-[#f5a623]/20 transition-all duration-400 grid md:grid-cols-[1fr_300px]"
            >
              {/* Left: info */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-[#f5a623]/25 text-xs font-bold tracking-widest" style={{ fontFamily: 'Syne, sans-serif' }}>{n}</span>
                    <span className="text-[10px] text-white/25 border border-white/8 rounded px-2 py-0.5 uppercase tracking-wider">{type}</span>
                  </div>
                  <h2 className="text-2xl font-black text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {emoji} {name}
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-md">{description}</p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {tech.map((t) => (
                      <div key={t} className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/8 bg-white/3">
                        <span className="text-sm">{techIcons[t]}</span>
                        <span className="text-xs text-white/40">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-5">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors duration-200"
                  >
                    <FaGithub className="text-base" />
                    Source
                  </a>
                  {live ? (
                    <a
                      href={live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs text-[#f5a623]/60 hover:text-[#f5a623] transition-colors duration-200"
                    >
                      <HiExternalLink className="text-base" />
                      Live demo
                    </a>
                  ) : (
                    <span className="text-xs text-white/15">Live coming soon</span>
                  )}
                </div>
              </div>

              {/* Right: image */}
              <div className="relative overflow-hidden border-l border-white/5">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
