import { motion } from "framer-motion";
console.log(motion)
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub,
  FaFigma, FaCode, FaNodeJs, FaDocker,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const allSkills = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "VS Code", icon: <FaCode />, color: "#007ACC" },
];

const categories = [
  {
    num: "01",
    title: "Frontend",
    status: "Strong",
    statusColor: "text-[#f5a623]",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind"],
    desc: "Where I spend most of my time. Comfortable building responsive UIs, managing state, and thinking in components.",
  },
  {
    num: "02",
    title: "Backend & DB",
    status: "Learning",
    statusColor: "text-white/40",
    skills: ["Node.js", "MongoDB", "Docker"],
    desc: "Building foundational knowledge. Can spin up a basic Express API, connect to MongoDB, and understand Docker containers.",
  },
  {
    num: "03",
    title: "Tools",
    status: "Comfortable",
    statusColor: "text-[#f5a623]/70",
    skills: ["Git", "GitHub", "Figma", "VS Code"],
    desc: "Daily drivers. Version control, design handoff, and the tools that keep a project organized.",
  },
  {
    num: "04",
    title: "Exploring",
    status: "In Progress",
    statusColor: "text-white/30",
    skills: ["TypeScript", "Next.js"],
    desc: "Actively learning. TypeScript for safer code, Next.js for production-grade React with SSR.",
  },
];

export default function Skills() {
  const doubled = [...allSkills, ...allSkills];

  return (
    <div className="bg-[#0a0a0a] text-[#e8e4dc] min-h-screen pt-20">

      {/* Header */}
      <section className="px-8 md:px-16 pt-16 pb-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.span
            className="text-xs tracking-[4px] text-[#f5a623]/60 uppercase block mb-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            03 — Skills
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-black text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            What I<br />
            <span className="text-[#f5a623]">Work With</span>
          </motion.h1>
        </div>
      </section>

      {/* Marquee ticker */}
      <div className="py-8 border-b border-white/5 overflow-hidden">
        <div className="flex marquee-track gap-10 whitespace-nowrap">
          {doubled.map((skill, i) => (
            <div key={i} className="flex items-center gap-2.5 shrink-0">
              <span style={{ color: skill.color }} className="text-xl opacity-70">{skill.icon}</span>
              <span className="text-sm text-white/30 font-medium">{skill.name}</span>
              <span className="text-white/10 ml-4">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category breakdown */}
      <section className="px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {categories.map(({ num, title, status, statusColor, skills, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border border-white/5 rounded-xl p-8 hover:border-[#f5a623]/20 transition-all duration-400"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[#f5a623]/25 text-xs font-bold tracking-widest" style={{ fontFamily: 'Syne, sans-serif' }}>{num}</span>
                  <span className={`text-xs font-medium ${statusColor}`}>{status}</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed mb-6">{desc}</p>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => {
                    const match = allSkills.find(sk => sk.name === s);
                    return (
                      <div key={s} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/8 bg-white/3 hover:border-[#f5a623]/30 transition-colors duration-300">
                        {match && (
                          <span style={{ color: match.color }} className="text-sm opacity-70">{match.icon}</span>
                        )}
                        <span className="text-xs text-white/50">{s}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-[#f5a623]/40 text-sm mt-16 italic"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            Always learning. Always improving.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
