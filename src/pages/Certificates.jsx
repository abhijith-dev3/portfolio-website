import React from "react";
import { motion } from "framer-motion";
console.log(motion)
import CertificateCard from "../components/CertificateCard";
import frontend from "../assets/images/frontend.png"
import javascript from "../assets/images/javascript.png";
import webdesign from "../assets/images/webdesign.png"
import uxui from "../assets/images/uxui.png";
import javascriptrs from "../assets/images/pdf/javascriptrs.pdf";
import webdesignrs from "../assets/images/pdf/webdesignrs.pdf";
import uxrs from "../assets/images/pdf/uxrs.pdf";


export default function Certificates() {
  const certificates = [
    {
      name: "Meta Frontend-developer",
      logo: frontend,
      link: "https://coursera.org/share/740fc3863a9e449da5e7180fde464f38",
    },
    {
      name: "JavaScript Algorithms",
      logo: javascript,
      link: javascriptrs,
    },
    {
      name: "Responsive Web-design",
      logo: webdesign,
      link: webdesignrs,
    },
    {
      name: "UX/UI Design",
      logo: uxui,
      link: uxrs
    },
    // Add more...
  ];

  // Motion variants for container & cards
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }, // stagger the card animations
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen px-8 md:px-20 pt-24 relative overflow-hidden 
                        bg-gradient-to-br from-[#f0f4f8] to-[#dbeafe]">

      {/* Background Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#A5B4FC]/20 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-32 -right-10 w-96 h-96 bg-[#3B82F6]/10 rounded-full animate-pulse z-0"></div>

      {/* Section Heading */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-widest text-[#1E3A8A] mb-2">CERTIFICATES</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-2">
          Things I’ve Achieved
        </h1>
        <p className="text-lg md:text-xl text-[#475569]">
          Verified courses and achievements that showcase my skills and growth.
        </p>
      </motion.div>

      {/* Certificates Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certificates.map((cert) => (
          <motion.div key={cert.name} variants={cardVariant}>
            <CertificateCard certificate={cert} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
