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
    image: f1
  },
  {
    name: "React-E-commerce🛒 ",
    type: "Frontend",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "https://github.com/abhijith-dev3/React-E-commerce-Project.git",
    liveLink: "https://react-e-commerce31.netlify.app/",
    image: commerce
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

  // Framer Motion Variants
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
    <section className="min-h-screen px-8 md:px-20 py-16 bg-gradient-to-br from-[#f0f4f8] to-[#dbeafe] relative overflow-hidden">

      {/* Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#A5B4FC]/20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-32 -right-10 w-96 h-96 bg-[#3B82F6]/10 rounded-full animate-pulse z-0"></div>

      {/* Section Heading with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-sm uppercase tracking-wider text-[#1E3A8A] mb-2 mt-10">Projects</p>
        <h2 className="text-4xl font-bold text-[#0F172A] mb-2">What I Build</h2>
        <p className="text-lg text-[#475569]">
          Some of my recent projects — showcasing frontend & fullstack skills.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        {["All", "Frontend", "Fullstack"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setFilter(tab)}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg font-medium transition
              ${filter === tab ? "bg-[#1E3A8A] text-white" : "bg-gray-100 text-[#0F172A] hover:bg-gray-200"}`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Project Cards Grid with Scroll Animation */}
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
