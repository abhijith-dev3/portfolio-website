import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "../assets/profileImg.svg";
console.log(motion)

const scrollFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] text-white overflow-hidden">

      {/* Teal glow orbs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="w-96 h-96 bg-[#00D4AA]/8 rounded-full absolute -top-24 -left-24 blur-3xl animate-pulse"></div>
        <div className="w-72 h-72 bg-[#00D4AA]/6 rounded-full absolute top-1/2 right-1/4 blur-2xl animate-pulse"></div>
        <div className="w-64 h-64 bg-[#00D4AA]/5 rounded-full absolute -bottom-16 -right-12 blur-3xl animate-pulse"></div>
      </motion.div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-8 md:px-20 pt-16 min-h-screen gap-8">

        {/* Left Side: Intro */}
        <div className="flex-1 max-w-3xl">
          <motion.div
            className="inline-flex items-center gap-2 bg-[#00D4AA]/10 border border-[#00D4AA]/30 rounded-full px-4 py-1.5 mb-6 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollFadeUp}
          >
            <span className="text-[#00D4AA] text-sm font-medium">Hi, I'm Abhijith 👋</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-[56px] font-bold leading-tight mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollFadeUp}
          >
            Aspiring{" "}
            <span className="text-[#00D4AA]">
              Full-Stack
            </span>
            <br />
            Software Engineer
          </motion.h1>

          <motion.p
            className="text-lg text-[#94A3B8] mb-10 max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollFadeUp}
          >
            Passionate about software engineering, AI, DevOps, and modern web technologies — continuously learning to build scalable, high-performance systems.
          </motion.p>

          <motion.div
            className="flex gap-5 flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollFadeUp}
          >
            <Link
              to="/projects"
              className="bg-[#00D4AA] text-[#0F1923] px-7 py-3.5 rounded-lg font-bold hover:opacity-90 transition shadow-[0_0_24px_rgba(0,212,170,0.4)] hover:scale-105 transform"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="border-2 border-[#00D4AA]/50 text-white px-7 py-3.5 rounded-lg font-semibold hover:border-[#00D4AA] hover:bg-[#00D4AA]/10 transition hover:scale-105 transform"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Teal glow ring behind image */}
            <div className="absolute inset-0 rounded-full bg-[#00D4AA]/20 blur-xl scale-110"></div>
            <img
              src={profileImg}
              alt="Abhijith"
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-[#00D4AA]/40 shadow-[0_0_40px_rgba(0,212,170,0.2)] object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <motion.section
        className="mt-8 px-8 md:px-0 py-20 bg-[#0D1B35]/80 backdrop-blur-sm rounded-3xl border border-[#00D4AA]/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollFadeUp}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">

          {/* Left Side: Intro */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#00D4AA]"></div>
              <span className="text-[#00D4AA] text-sm font-semibold tracking-widest uppercase">About Me</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Who I Am</h2>
            <p className="text-[#94A3B8] mb-4 leading-relaxed">
              I'm Abhijith, an aspiring Full-Stack Software Engineer with a passion for building scalable, efficient, and elegant web applications. My journey began with curiosity for technology and grew into a deep love for problem-solving and creating meaningful solutions.
            </p>
            <p className="text-[#94A3B8] mb-4 leading-relaxed">
              My expertise spans across <span className="font-semibold text-[#00D4AA]">React, JavaScript, CSS, NodeJS, MongoDB, and modern DevOps tools</span>. I enjoy designing clean UI/UX experiences, writing optimized code, and continuously learning the latest technologies.
            </p>
            <p className="text-[#94A3B8] leading-relaxed">
              I thrive in collaborative environments, love tackling challenging projects, and aspire to contribute to software that makes a real impact.
            </p>
          </div>

          {/* Right Side: Skills & Highlights */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[
              { title: "Frontend Development", desc: "React, Tailwind, JavaScript, HTML, CSS" },
              { title: "Backend & Database", desc: "NodeJS, Express, MongoDB, SQL" },
              { title: "DevOps & Tools", desc: "Git, GitHub, Docker, CI/CD" },
              { title: "Soft Skills", desc: "Problem-Solving, Collaboration, Communication" },
              { title: "Learning Focus", desc: "AI, Rust, Flutter, Advanced Backend" },
              { title: "Achievements", desc: "Projects, Certificates" },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                className="bg-[#1A1A2E]/80 border border-[#00D4AA]/15 p-5 rounded-xl hover:border-[#00D4AA]/40 transition-all duration-300"
                whileHover={{ scale: 1.04, borderColor: "rgba(0,212,170,0.4)" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="text-[#00D4AA] font-semibold mb-2 text-sm">{skill.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Teaser */}
      <motion.div
        className="px-8 md:px-20 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollFadeUp}
      >
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Some of My Work</h2>
        <div className="w-12 h-0.5 bg-[#00D4AA] mx-auto mb-6"></div>
        <p className="text-[#94A3B8] text-lg text-center max-w-2xl mx-auto">
          Check out my projects to see how I translate ideas into code and bring concepts to life with elegant design and clean architecture.
        </p>
      </motion.div>

    </div>
  );
}
