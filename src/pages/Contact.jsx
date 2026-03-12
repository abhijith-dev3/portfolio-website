import { useState } from "react";
import { motion } from "framer-motion";
console.log(motion)
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail, HiOutlineClipboard, HiCheck } from "react-icons/hi";

const socials = [
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/abhijith-s8a", color: "#0077B5" },
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/abhijith-dev3", color: "#ffffff" },
  { name: "Twitter / X", icon: <FaTwitter />, link: "https://x.com/Abhijith_dev12", color: "#1DA1F2" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/_kair._o_/", color: "#E1306C" },
];

export default function Contact() {
  const email = "abhijith4389@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-[#0a0a0a] text-[#e8e4dc] min-h-screen pt-20">

      {/* Header */}
      <section className="px-8 md:px-16 pt-16 pb-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.span
            className="text-xs tracking-[4px] text-[#f5a623]/60 uppercase block mb-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            06 — Contact
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-black text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            Let's Build<br />
            <span className="text-[#f5a623]">Something.</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact body */}
      <section className="px-8 md:px-16 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Left — message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-white/40 text-lg leading-relaxed mb-8 max-w-md">
              I'm open to junior roles, freelance projects, or just a conversation about
              code. Reach out — I reply to everything.
            </p>

            {/* Email block */}
            <div className="border border-white/8 rounded-xl p-6 mb-6 group hover:border-[#f5a623]/20 transition-colors duration-300">
              <p className="text-xs text-white/25 tracking-widest uppercase mb-3">Email</p>
              <p className="text-white text-lg font-medium mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
                {email}
              </p>
              <div className="flex gap-3">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 px-4 py-2 bg-[#f5a623] text-black text-sm font-bold rounded hover:bg-white transition-colors duration-300"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  <HiOutlineMail className="text-base" />
                  Send Mail
                </a>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-4 py-2 border border-white/10 text-white/50 text-sm rounded hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  {copied
                    ? <><HiCheck className="text-base text-[#f5a623]" /> Copied!</>
                    : <><HiOutlineClipboard className="text-base" /> Copy</>
                  }
                </button>
              </div>
            </div>

            <p className="text-white/20 text-xs">Usually responds within 24 hours.</p>
          </motion.div>

          {/* Right — socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-xs text-white/25 tracking-widest uppercase mb-6">Find me on</p>
            <div className="flex flex-col gap-3">
              {socials.map(({ name, icon, link, color }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-white/5 rounded-xl px-6 py-4 hover:border-[#f5a623]/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl" style={{ color }}>{icon}</span>
                    <span className="text-sm text-white/50 group-hover:text-white transition-colors duration-300">{name}</span>
                  </div>
                  <span className="text-white/15 group-hover:text-[#f5a623]/60 transition-colors duration-300 text-sm">↗</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer strip */}
      <div className="border-t border-white/5 px-8 md:px-16 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/20 text-xs">
            Built with React + Tailwind · 2025
          </span>
          <span className="text-white/10 text-xs" style={{ fontFamily: 'Syne, sans-serif' }}>
            abhijith<span className="text-[#f5a623]/30">.</span>dev
          </span>
        </div>
      </div>
    </div>
  );
}
