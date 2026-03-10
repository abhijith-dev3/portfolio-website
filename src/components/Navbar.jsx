import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHome
          ? "bg-[#1A1A2E]/30 backdrop-blur-md text-white border-b border-[#00D4AA]/10"
          : "bg-white border-b border-gray-200 text-[#0F172A]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-20 h-16">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className={isHome ? "text-[#00D4AA]" : "text-[#00D4AA]"}>
            A
          </span>
          bhijith Dev
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 font-medium">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? `text-[#00D4AA] border-b-2 border-[#00D4AA] pb-0.5`
                  : isHome
                  ? "text-white/75 hover:text-[#00D4AA] transition-colors duration-300"
                  : "text-[#334155] hover:text-[#00D4AA] transition-colors duration-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`text-2xl focus:outline-none ${isHome ? "text-white" : "text-[#0F172A]"}`}
          >
            {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#16213E] text-white border-t border-[#00D4AA]/20 flex flex-col items-center py-4 space-y-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#00D4AA] font-semibold"
                  : "text-white/75 hover:text-[#00D4AA] transition-colors duration-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
