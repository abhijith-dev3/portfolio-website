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
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isHome
          ? "bg-[#1E3A8A]/20 backdrop-blur-md text-white"
          : "bg-white border-b border-gray-200 text-[#0F172A]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-20 h-16">
        {/* Logo */}
        <div className={`text-xl font-bold`}>
          <span
            className={`${
              isHome ? "text-[#A5B4FC]" : "text-[#1E3A8A]"
            }`}
          >
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
                  ? "text-[#A5B4FC]"
                  : isHome
                  ? "hover:text-[#A5B4FC] transition-colors duration-300"
                  : "hover:text-[#1E3A8A] transition-colors duration-300"
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
            className="text-2xl focus:outline-none"
          >
            {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={`md:hidden bg-white text-[#0F172A] border-t border-gray-200 flex flex-col items-center py-4 space-y-4`}
        >
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#A5B4FC] font-semibold"
                  : "hover:text-[#1E3A8A] transition-colors duration-300"
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
