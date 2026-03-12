import { motion } from "framer-motion";
console.log(motion)
import frontend from "../assets/images/frontend.png";
import javascript from "../assets/images/javascript.png";
import webdesign from "../assets/images/webdesign.png";
import uxui from "../assets/images/uxui.png";
import javascriptrs from "../assets/images/pdf/javascriptrs.pdf";
import webdesignrs from "../assets/images/pdf/webdesignrs.pdf";
import uxrs from "../assets/images/pdf/uxrs.pdf";

const certificates = [
  {
    n: "01",
    name: "Meta Frontend Developer",
    issuer: "Meta / Coursera",
    logo: frontend,
    link: "https://coursera.org/share/740fc3863a9e449da5e7180fde464f38",
  },
  {
    n: "02",
    name: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    logo: javascript,
    link: javascriptrs,
  },
  {
    n: "03",
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    logo: webdesign,
    link: webdesignrs,
  },
  {
    n: "04",
    name: "UX/UI Design",
    issuer: "Google / Coursera",
    logo: uxui,
    link: uxrs,
  },
];

export default function Certificates() {
  return (
    <div className="bg-[#0a0a0a] text-[#e8e4dc] min-h-screen pt-20">

      {/* Header */}
      <section className="px-8 md:px-16 pt-16 pb-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.span
            className="text-xs tracking-[4px] text-[#f5a623]/60 uppercase block mb-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            05 — Certificates
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-black text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            Things I've<br />
            <span className="text-[#f5a623]">Achieved</span>
          </motion.h1>
        </div>
      </section>

      {/* Certs grid */}
      <section className="px-8 md:px-16 py-16">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map(({ n, name, issuer, logo, link }, i) => (
            <motion.a
              key={n}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-white/5 rounded-xl p-6 hover:border-[#f5a623]/25 transition-all duration-300 flex flex-col"
            >
              {/* Number */}
              <span className="text-[#f5a623]/20 text-xs font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>{n}</span>

              {/* Logo */}
              <div className="flex-1 flex items-center justify-center py-4 mb-6">
                <img
                  src={logo}
                  alt={name}
                  className="max-h-24 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="text-sm font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{name}</h3>
                <p className="text-xs text-white/30 mb-4">{issuer}</p>
                <span className="text-xs text-[#f5a623]/50 group-hover:text-[#f5a623] transition-colors duration-300">
                  View certificate →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
