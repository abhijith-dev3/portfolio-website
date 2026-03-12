import { Link } from "react-router-dom";
import { motion } from "framer-motion";
console.log(motion)
import profileImg from "../assets/profileImg.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: i * 0.12 }
  }),
};

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-[#e8e4dc] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 pt-20 overflow-hidden">

        {/* Background: large ghost text */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-black text-white/[0.03] select-none pointer-events-none leading-none"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          DEV
        </div>

        {/* Amber glow blob */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#f5a623]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl">

          {/* Status pill */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8"
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-pulse" />
            <span className="text-xs text-white/40 tracking-[3px] uppercase">Available for opportunities</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.95] tracking-tight mb-8"
            style={{ fontFamily: 'Syne, sans-serif' }}
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
          >
            <span className="block text-white">Abhijith.</span>
            <span className="block text-[#f5a623]">Frontend</span>
            <span className="block text-white/30">Developer.</span>
          </motion.h1>

          {/* Sub line */}
          <motion.p
            className="text-base md:text-lg text-white/40 max-w-md leading-relaxed mb-12"
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
          >
            I build things for the web — clean interfaces, honest code,
            and experiences that actually work. Currently levelling up
            into full-stack and DevOps territory.
          </motion.p>

          {/* CTA row */}
          <motion.div
            className="flex flex-wrap gap-4 items-center"
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
          >
            <Link
              to="/projects"
              className="px-7 py-3.5 bg-[#f5a623] text-black font-bold text-sm rounded hover:bg-white transition-colors duration-300"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              See My Work →
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 border border-white/15 text-white/70 text-sm font-medium rounded hover:border-white/40 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-7 py-3.5 border border-[#f5a623]/30 text-[#f5a623]/70 text-sm font-medium rounded hover:border-[#f5a623] hover:text-[#f5a623] transition-all duration-300"
            >
              Resume ↓
            </a>
          </motion.div>

          {/* Stat row */}
          <motion.div
            className="flex gap-10 mt-16 border-t border-white/5 pt-10"
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
          >
            {[
              { n: "3+", label: "Projects shipped" },
              { n: "4", label: "Certificates earned" },
              { n: "1yr+", label: "Self-taught journey" },
            ].map(({ n, label }) => (
              <div key={label}>
                <div className="text-3xl font-black text-[#f5a623]" style={{ fontFamily: 'Syne, sans-serif' }}>{n}</div>
                <div className="text-xs text-white/30 mt-1 tracking-wide">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Profile image — floated right, subtle */}
        <motion.div
          className="absolute right-16 bottom-16 hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-full bg-[#f5a623]/10 blur-2xl" />
            <img
              src={profileImg}
              alt="Abhijith"
              className="relative w-full h-full rounded-full object-cover border border-white/10"
            />
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-16 flex items-center gap-3 text-white/20 text-xs tracking-widest"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-8 bg-white/20" />
          SCROLL
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section className="px-8 md:px-16 py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <span className="text-xs tracking-[4px] text-[#f5a623]/60 uppercase mb-4 block">01 — About</span>
            <h2 className="text-5xl font-black text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Who<br />I Am
            </h2>
            <div className="w-10 h-px bg-[#f5a623] mb-8" />
            <p className="text-white/50 leading-relaxed mb-4">
              I'm a self-taught frontend developer from Kerala, India. What started
              as curiosity about how websites work turned into a genuine obsession
              with building them well — and then obsessing about the backend and
              infrastructure too.
            </p>
            <p className="text-white/50 leading-relaxed mb-4">
              My stack right now is <span className="text-white/80">React, JavaScript, Tailwind, and Node.js</span>.
              I'm actively learning TypeScript, Docker, and Next.js — not because
              it's trendy but because I want to ship production-grade work.
            </p>
            <p className="text-white/50 leading-relaxed">
              I'm looking for my first real role — one where I can write real code,
              get real feedback, and grow fast.
            </p>
          </motion.div>

          {/* Right — skill highlights grid */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            {[
              { area: "Frontend", items: "React · Tailwind · JS · HTML · CSS" },
              { area: "Backend", items: "Node.js · Express · MongoDB" },
              { area: "DevOps", items: "Git · GitHub · Docker · CI/CD" },
              { area: "Design", items: "Figma · UX Principles · Responsive" },
              { area: "Learning", items: "TypeScript · Next.js · Rust · AI" },
              { area: "Soft Skills", items: "Self-driven · Collaborative · Fast learner" },
            ].map(({ area, items }) => (
              <div key={area} className="border border-white/5 rounded-lg p-4 hover:border-[#f5a623]/30 transition-colors duration-300 group">
                <div className="text-[#f5a623] text-xs font-bold mb-2 tracking-wider uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>{area}</div>
                <div className="text-white/35 text-xs leading-relaxed group-hover:text-white/50 transition-colors duration-300">{items}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS TEASER ── */}
      <section className="px-8 md:px-16 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <span className="text-xs tracking-[4px] text-[#f5a623]/60 uppercase mb-4 block">02 — Work</span>
              <h2 className="text-4xl font-black text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                Selected Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-sm text-[#f5a623] border-b border-[#f5a623]/40 pb-0.5 hover:border-[#f5a623] transition-colors duration-300 self-start md:self-auto"
            >
              View all →
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                n: "01", name: "F1-UI-Simulator", tag: "UI · Mock Data",
                desc: "F1 themed dashboard UI with simulated data — built to practice component architecture.",
                link: "https://f1-ui-simulator.netlify.app/"
              },
              {
                n: "02", name: "React E-Commerce", tag: "React · Cart",
                desc: "Learning project: product listing and add-to-cart flow. No backend — pure frontend state practice.",
                link: "https://react-e-commerce31.netlify.app/"
              },
              {
                n: "03", name: "Movie Explorer", tag: "React · API",
                desc: "Browse and search movies. Genre filters and detail pages — live link coming soon.",
                link: null
              },
            ].map(({ n, name, tag, desc, link }) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="group border border-white/5 rounded-lg p-6 hover:border-[#f5a623]/20 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[#f5a623]/30 text-xs font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{n}</span>
                  <span className="text-[10px] text-white/25 border border-white/10 rounded px-2 py-0.5">{tag}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{name}</h3>
                <p className="text-white/35 text-sm leading-relaxed flex-1 mb-6">{desc}</p>
                {link ? (
                  <a href={link} target="_blank" rel="noreferrer"
                    className="text-xs text-[#f5a623]/60 group-hover:text-[#f5a623] transition-colors duration-300">
                    Live demo ↗
                  </a>
                ) : (
                  <span className="text-xs text-white/20">Coming soon</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
