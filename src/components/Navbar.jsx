import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-16 h-16">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-[#f5a623] group-hover:scale-150 transition-transform duration-300" />
          <span style={{ fontFamily: 'Syne, sans-serif' }} className="text-lg font-bold text-white tracking-tight">
            abhijith<span className="text-[#f5a623]">.</span>dev
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link, i) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? "text-[#f5a623]" : "text-white/50 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="text-[#f5a623]/40 text-xs mr-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                    0{i + 1}.
                  </span>
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-[#f5a623]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            download
            className="ml-2 px-4 py-1.5 border border-[#f5a623]/60 text-[#f5a623] text-sm font-medium rounded hover:bg-[#f5a623] hover:text-black transition-all duration-300"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl text-white focus:outline-none"
        >
          {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-white/5 flex flex-col items-start px-8 py-6 gap-5">
          {links.map((link, i) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium flex items-center gap-3 transition-colors duration-200 ${
                  isActive ? "text-[#f5a623]" : "text-white/60 hover:text-white"
                }`
              }
            >
              <span className="text-[#f5a623]/40 text-xs" style={{ fontFamily: 'Syne, sans-serif' }}>0{i + 1}.</span>
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
