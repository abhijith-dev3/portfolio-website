import { motion } from "framer-motion";
console.log(motion);
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaJs } from "react-icons/fa";
import f1 from "../assets/images/f1.png";
import commerce from "../assets/images/commerce.png";
import note from "../assets/images/notes.png";
import ProjectCard from "../components/ProjectCard";
import habit from "../assets/images/habit.png"

const projects = [
  {
    name: "Note App",
    emoji: "📝",
    type: "Full Stack App",
    description:
      "Full-stack note-taking application with CRUD functionality, allowing users to create, update, and delete notes with persistent storage and clean UI.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/abhijith-dev3/Note-App.git",
    liveLink: "https://note-app-theta-topaz.vercel.app/",
    image: note,
  },
  {
  name: "Habit Tracker",
  emoji: "🌤️",
  type: "Full Stack App",
  description:
    "Full-stack habit tracking application that allows users to create, manage, and monitor daily habits with progress tracking and persistent database storage, featuring a clean and responsive UI.",
  tech: ["React", "Node.js", "Express", "MongoDB"],
  link: "https://github.com/abhijith-dev3/FULL-STACK-HABIT-TRACKER.git",
  liveLink: "https://full-stack-habit-tracker.vercel.app/",
  image: habit
},
  {
    name: "F1-UI-Simulator",
    emoji: "🚗",
    type: "FrontEnd UI",
    description:
      "F1 themed dashboard UI — built to practise component architecture and layout design. Uses mock/static data, no live API.",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "https://github.com/abhijith-dev3/F1-UI-simulator.git",
    liveLink: "https://f1-ui-simulator.netlify.app/",
    image: f1,
  },
  {
    name: "React E-Commerce",
    emoji: "🛒",
    type: "FrontEnd UI",
    description:
      "Learning project focused on React state management — product listing, add-to-cart flow, and responsive design. Frontend only, no backend or payments.",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "https://github.com/abhijith-dev3/React-E-commerce-Project.git",
    liveLink: "https://react-e-commerce31.netlify.app/",
    image: commerce,
  }
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
            style={{ fontFamily: "Syne, sans-serif" }}
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

      {/* Project grid */}
      <section className="px-8 md:px-16 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
