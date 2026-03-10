import React, { useState } from "react";
import { motion } from "framer-motion";
console.log(motion)
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaClipboard,
} from "react-icons/fa";

export default function Contact() {
  const email = "abhijith4389@gmail.com";
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/abhijith-s8a",
      color: "text-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/abhijith-dev3",
      color: "text-[#0F172A]",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://x.com/Abhijith_dev12",
      color: "text-[#1DA1F2]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/_kair._o_/",
      color: "text-[#E1306C]",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      action: () => window.open(`mailto:${email}`),
      color: "text-[#00D4AA]",
    },
    {
      name: "Copy Email",
      icon: <FaClipboard />,
      action: copyEmail,
      color: "text-[#0F3460]",
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen px-8 md:px-20 py-24 bg-white relative overflow-hidden flex flex-col md:flex-row gap-12 md:gap-16">

      {/* Decorative Bubbles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#00D4AA]/10 rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-10 w-96 h-96 bg-[#0F3460]/10 rounded-full animate-pulse pointer-events-none z-0"></div>

      {/* Left Side */}
      <motion.div
        className="flex-1 flex flex-col justify-center relative z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs uppercase tracking-[4px] text-[#00D4AA] font-semibold mb-3">
          CONTACT
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
          Let's Build Something
          <span className="text-[#00D4AA]"> Together!</span>
        </h1>
        {/* Teal accent line */}
        <div className="w-12 h-0.5 bg-[#00D4AA] mb-5"></div>
        <p className="text-lg text-[#475569] max-w-lg">
          Reach out through social media or email. I'm always open for
          projects, collaborations, or just a friendly hello! 💌
        </p>

        {/* Email display */}
        <div className="mt-8 flex items-center gap-3 bg-[#f8fafc] border border-[#00D4AA]/20 rounded-lg px-4 py-3 w-fit">
          <FaEnvelope className="text-[#00D4AA]" />
          <span className="text-sm text-[#475569] font-medium">{email}</span>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="flex-1 flex flex-col gap-6 relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          variants={cardVariant}
          className="text-xs uppercase tracking-[4px] text-[#00D4AA] font-semibold"
        >
          CONNECT ON SOCIALS
        </motion.p>

        <motion.div
          variants={cardVariant}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {contacts.map((c) => (
            <motion.button
              key={c.name}
              variants={cardVariant}
              onClick={() => {
                if (c.link) window.open(c.link, "_blank");
                else if (c.action) c.action();
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="group flex flex-col items-center gap-2 p-5 bg-white border border-[#00D4AA]/20 
                         hover:border-[#00D4AA]/60 rounded-xl shadow-sm hover:shadow-md 
                         transition-all duration-300 cursor-pointer w-full overflow-hidden relative"
            >
              {/* Teal top bar on hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-[#00D4AA] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className={`text-3xl ${c.color} transition-transform duration-200 group-hover:scale-110`}>
                {c.icon}
              </div>
              <span className="text-sm text-[#475569] font-medium">{c.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Mail Button */}
        <motion.button
          variants={cardVariant}
          onClick={() => {
            navigator.clipboard.writeText(email);
            window.open(`mailto:${email}`);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
          }}
          className="bg-[#0F3460] hover:bg-[#00D4AA] text-white px-10 py-4 rounded-lg font-semibold 
                     text-lg transition-all duration-300 shadow-lg mt-2 hover:scale-105 
                     hover:shadow-[0_0_24px_rgba(0,212,170,0.35)] w-full md:w-auto"
        >
          {isCopied ? "Email Copied! ✅" : "📬 Mail Me"}
        </motion.button>
      </motion.div>
    </section>
  );
}
