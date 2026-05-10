import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line, RiDownloadLine } from "@remixicon/react";

const navLinks = [
  { label: "About", href: "#About" },
  { label: "Experience", href: "#Experience" },
  { label: "Projects", href: "#Projects" },
  { label: "Contact", href: "#Footer" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add blur/border on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1M6ErnBafdNNSSFVMl4Wx0RP2VkeeWzhf/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-20 py-4 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(15,17,23,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <a href="#" onClick={closeMenu}>
        <span
          className="text-xl font-bold tracking-wide"
          style={{
            background: "linear-gradient(135deg, #fff 60%, #a5b4fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Siddhant.
        </span>
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            <li
              className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white cursor-pointer"
            >
              {link.label}
            </li>
          </a>
        ))}

        {/* Resume Button */}
        <li>
          <button
            onClick={handleResumeClick}
            className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(99,102,241,0.15)",
              border: "1px solid rgba(99,102,241,0.4)",
              color: "#a5b4fc",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(99,102,241,0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(99,102,241,0.15)";
            }}
          >
            <RiDownloadLine size={14} />
            Resume
          </button>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-gray-300 hover:text-white transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <RiCloseLine size={28} /> : <RiMenu2Line size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full flex flex-col items-center gap-4 py-6 md:hidden"
          style={{
            background: "rgba(15,17,23,0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { handleResumeClick(); closeMenu(); }}
            className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl mt-1"
            style={{
              background: "rgba(99,102,241,0.2)",
              border: "1px solid rgba(99,102,241,0.4)",
              color: "#a5b4fc",
            }}
          >
            <RiDownloadLine size={14} />
            View Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
