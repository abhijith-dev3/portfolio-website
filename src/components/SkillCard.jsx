import React from "react";
import { motion } from "framer-motion";
console.log(motion)

export default function SkillCard({ name, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col items-center gap-2 p-3 w-28 h-28 bg-white border border-gray-200 hover:border-[#00D4AA]/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
    >
      {React.cloneElement(icon, {
        className: "w-10 h-10 text-[#0F172A] hover:text-[#00D4AA] transition-colors duration-300",
      })}
      <span className="text-[#0F172A] font-medium text-sm text-center">{name}</span>
    </motion.div>
  );
}
