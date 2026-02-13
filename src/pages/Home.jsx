import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileImg from "../assets/profileImg.svg"; // ✅ Make sure path is correct

console.log(motion);

const scrollFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#6B21A8] text-white overflow-hidden">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-8 md:px-20 pt-16 min-h-screen gap-8">
        
        {/* Left Side: Intro */}
        <div className="flex-1 max-w-3xl">
          <motion.p
            className="text-sm text-[#CBD5E1] mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollFadeUp}
          >
            Hi, I'm Abhijith 👋
          </motion.p>

          <motion.h1
            className="text-4xl md:text-[56px] sm:text-5xl font-bold leading-tight mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollFadeUp}
          >
            Aspiring{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A5B4FC] to-[#FFFFFF]">
              Full-Stack Software Engineer
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-[#A5B4FC] mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollFadeUp}
          >
            Passionate about software engineering, AI, DevOps, and modern web technologies — continuously learning to build scalable, high-performance systems.
          </motion.p>

          <motion.div
            className="flex gap-6 flex-wrap sm:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollFadeUp}
          >
            <Link
              to="/projects"
              className="bg-[#A5B4FC] text-[#1E1B4B] px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition shadow-md hover:scale-105 transform"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="border border-white text-white px-7 py-3.5 rounded-lg font-medium hover:bg-white hover:text-black transition shadow-md hover:scale-105 transform"
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
          <img
            src={profileImg}
            alt="Abhijith"
            className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </motion.div>
      </section>

      {/* Decorative Circles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="w-96 h-96 bg-white/5 rounded-full absolute -top-24 -left-24 animate-pulse-slow blur-3xl"></div>
        <div className="w-72 h-72 bg-white/5 rounded-full absolute -bottom-24 -right-12 animate-pulse-slow"></div>
      </motion.div>

      {/* About Me Section */}
      <motion.section
        className="mt-16 px-8 md:px-0 py-20 bg-[#1E40AF] rounded-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scrollFadeUp}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          
          {/* Left Side: Intro */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-lg text-[#A5B4FC] mb-4">
              I’m Abhijith, an aspiring Full-Stack Software Engineer with a passion for building scalable, efficient, and elegant web applications. My journey began with curiosity for technology and grew into a deep love for problem-solving and creating meaningful solutions.
            </p>
            <p className="text-lg text-[#A5B4FC] mb-4">
              My expertise spans across <span className="font-semibold">React, JavaScript, CSS, NodeJS, MongoDB, and modern DevOps tools</span>. I enjoy designing clean UI/UX experiences, writing optimized code, and continuously learning the latest technologies to stay ahead in the fast-evolving web landscape.
            </p>
            <p className="text-lg text-[#A5B4FC]">
              I thrive in collaborative environments, love tackling challenging projects, and aspire to contribute to software that makes a real impact.
            </p>
          </div>

          {/* Right Side: Skills & Highlights */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 gap-6">
            {[
              { title: "Frontend Development", desc: "React, Tailwind, JavaScript, HTML, CSS" },
              { title: "Backend & Database(In progress)", desc: "NodeJS, Express, MongoDB, SQL" },
              { title: "DevOps & Tools", desc: "Git, GitHub, Docker, CI/CD" },
              { title: "Soft Skills", desc: "Problem-Solving, Collaboration, Communication" },
              { title: "Learning Focus", desc: "AI, Rust, Flutter, Advanced Backend" },
              { title: "Achievements", desc: "Projects, Certificates" },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                className="bg-[#1E3A8A]/60 p-5 rounded-xl shadow-md hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="text-white font-semibold mb-2">{skill.title}</h3>
                <p className="text-[#CBD5E1] text-sm">{skill.desc}</p>
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
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Some of My Work</h2>
        <p className="text-lg text-[#A5B4FC] text-center max-w-2xl mx-auto">
          Check out my projects to see how I translate ideas into code and bring concepts to life with elegant design and clean architecture.
        </p>
      </motion.div>
    </div>
  );
}
