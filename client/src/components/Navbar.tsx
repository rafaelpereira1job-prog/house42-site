/**
 * House 42 Navbar
 * Design: Dark Sport Luxury — sticky nav with red accent on scroll
 * Font: Bebas Neue (logo) + Barlow Condensed (links)
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Performance", href: "#performance" },
  { label: "Serviços", href: "#services" },
  { label: "Resultados", href: "#results" },
  { label: "Times", href: "#teams" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#D0021B] flex items-center justify-center font-display text-white text-xl leading-none">
              42
            </div>
            <span className="font-display text-white text-2xl tracking-widest group-hover:text-[#D0021B] transition-colors">
              HOUSE 42
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-condensed font-600 text-sm tracking-widest uppercase text-[#999] hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D0021B] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-h42 btn-h42-solid text-sm py-2.5 px-5"
            >
              <span>Fale Conosco</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-[#1a1a1a]">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-condensed font-700 text-lg tracking-widest uppercase text-[#ccc] hover:text-[#D0021B] transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-h42 btn-h42-solid mt-2 w-full justify-center"
            >
              <span>Fale Conosco</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
