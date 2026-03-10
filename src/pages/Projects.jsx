import React, { useState } from "react";
import { motion } from "framer-motion";
console.log(motion)
import ProjectCard from "../components/ProjectCard";
import f1 from "../assets/images/f1.png";
import commerce from "../assets/images/commerce.png";
import movie from "../assets/images/movie.png";

const allProjects = [
  {
    name: "F1-UI-Simulator🚗",
    type: "Frontend",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "https://github.com/abhijith-dev3/F1-UI-simulator.git",
    liveLink: "https://f1-ui-simulator.netlify.app/",
    image: f1,
  },
  {
    name: "React-E-commerce🛒",
    type: "Frontend",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "https://github.com/abhijith-dev3/React-E-commerce-Project.git",
    liveLink: "https://react-e-commerce31.netlify.app/",
    image: commerce,
  },
  {
    name: "Movie Explorer🎬",
    type: "Frontend",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "https://github.com/abhijith-dev3/movie-explorer.git",
    liveLink: "https://blog.com",
    image: movie,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = allProjects.filter(
    (p) => filter === "All" || p.type === filter
  );

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen px-8 md:px-20 py-16 bg-white relative overflow-hidden">

      {/* Decorative Bubbles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#00D4AA]/10 rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-10 w-96 h-96 bg-[#0F3460]/10 rounded-full animate-pulse pointer-events-none z-0"></div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-xs uppercase tracking-[4px] text-[#00D4AA] font-semibold mb-3 mt-10">
          PROJECTS
        </p>
        <h2 className="text-4xl font-bold text-[#0F172A] mb-4">What I Build</h2>
        <div className="w-12 h-0.5 bg-[#00D4AA] mx-auto mb-4"></div>
        <p className="text-lg text-[#475569]">
          Some of my recent projects — showcasing frontend & fullstack skills.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "Frontend", "Fullstack"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setFilter(tab)}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 border
              ${
                filter === tab
                  ? "bg-[#0F3460] text-white border-[#0F3460] shadow-md"
                  : "bg-white text-[#0F172A] border-[#00D4AA]/30 hover:border-[#00D4AA] hover:text-[#00D4AA]"
              }`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10"
      >
        {filteredProjects.map((project, idx) => (
          <motion.div key={idx} variants={cardVariant}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
