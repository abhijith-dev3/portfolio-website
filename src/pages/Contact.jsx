import React, { useState } from "react";
import { motion } from "framer-motion";
console.log(motion);
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
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/abhijith-dev3",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://x.com/Abhijith_dev12",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/_kair._o_/",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      action: () => window.open(`mailto:${email}`),
    },
    {
      name: "Copy Email",
      icon: <FaClipboard />,
      action: copyEmail,
    },
  ];

  // Framer Motion Variants
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
    <section className="min-h-screen px-8 md:px-20 py-24 bg-gradient-to-br from-[#f0f4f8] to-[#dbeafe] relative overflow-hidden flex flex-col md:flex-row gap-12 md:gap-16">
      
      {/* Decorative shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#A5B4FC]/20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-32 -right-10 w-96 h-96 bg-[#3B82F6]/10 rounded-full animate-pulse"></div>

      {/* Left Side */}
      <motion.div
        className="flex-1 flex flex-col justify-center relative z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-widest text-[#1E3A8A] mb-2">
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
          Let’s Build Something Together!
        </h1>
        <p className="text-lg md:text-xl text-[#475569] max-w-lg">
          Reach out through social media or email. I’m always open for
          projects, collaborations, or just a friendly hello! 💌
        </p>
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
          className="text-sm uppercase tracking-widest text-[#1E3A8A] mb-2"
        >
          Connect on socials
        </motion.p>

        <motion.div
          variants={cardVariant}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6"
        >
          {contacts.map((c) => (
            <motion.button
              key={c.name}
              variants={cardVariant}
              onClick={() => {
                if (c.link) {
                  window.open(c.link, "_blank");
                } else if (c.action) {
                  c.action();
                }
              }}
              className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform cursor-pointer w-full"
            >
              <div className="text-4xl text-[#0F172A] hover:text-[#A5B4FC] transition">
                {c.icon}
              </div>
              <span className="text-sm text-[#475569] font-medium">
                {c.name}
              </span>
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
          className="bg-gradient-to-r from-[#A5B4FC] to-[#6B21A8] text-white px-10 py-4 rounded-lg font-medium text-lg hover:opacity-90 transition shadow-xl mt-6 hover:scale-105 w-full md:w-auto"
        >
          {isCopied ? "Email Copied! ✅" : "Mail Me"}
        </motion.button>
      </motion.div>
    </section>
  );
}
