import React from "react";
import { motion } from "framer-motion";
console.log(motion)
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
} from "react-icons/fa";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  const frontendSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
  ];

  const toolsSkills = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "VS Code", icon: <FaCode /> },
  ];

  const learningSkills = [
    { name: "Next.js", icon: <FaReact /> },
    { name: "TypeScript", icon: <FaJs /> },
    { name: "Backend Basics", icon: <FaCode /> },
  ];

  const categories = [
    {
      title: "Frontend",
      skills: frontendSkills,
      bg: "bg-white",
      border: "border-[#00D4AA]/30",
      topBar: "bg-[#00D4AA]",
    },
    {
      title: "Tools / Workflow",
      skills: toolsSkills,
      bg: "bg-white",
      border: "border-[#00D4AA]/30",
      topBar: "bg-[#0F3460]",
    },
    {
      title: "Learning / Exploring",
      skills: learningSkills,
      bg: "bg-white",
      border: "border-[#00D4AA]/30",
      topBar: "bg-[#00D4AA]/70",
    },
  ];

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
    <section className="relative min-h-screen px-8 md:px-20 pt-24 pb-20 bg-white overflow-hidden">

      {/* Decorative Bubbles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#00D4AA]/10 rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-10 w-96 h-96 bg-[#0F3460]/10 rounded-full animate-pulse pointer-events-none z-0"></div>

      {/* Teal label */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-[4px] text-[#00D4AA] font-semibold mb-3 text-center"
      >
        SKILLS
      </motion.p>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 text-center"
      >
        What I work with
      </motion.h1>

      {/* Teal accent line */}
      <div className="w-12 h-0.5 bg-[#00D4AA] mx-auto mb-4"></div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-[#475569] mb-12 text-center"
      >
        Technologies and tools I use to build modern web applications.
      </motion.p>

      {/* Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-10 relative"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={cardVariant}
            className={`${cat.bg} border ${cat.border} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 z-10`}
          >
            {/* Teal top bar accent */}
            <div className={`${cat.topBar} h-1 w-full`}></div>
            <div className="p-6 flex flex-col">
              <h3 className="text-[#0F172A] font-semibold mb-4 text-center text-lg md:text-xl">
                {cat.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {cat.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center italic text-[#00D4AA] font-medium"
      >
        Always learning. Always improving.
      </motion.p>

    </section>
  );
}
