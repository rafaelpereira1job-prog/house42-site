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
            className="flex items-center gap-2 group"
          >
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/PuMT0qMreoSCGZfod7tJ70/sandbox/R5L052uAsRNXXrzdxxFB9J-img-1_1771448521000_na1fn_aG91c2U0Mi1sb2dv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUHVNVDBxTXJlb1NDR1pmb2Q3dEo3MC9zYW5kYm94L1I1TDA1MnVBc1JOWFhyemR4eEZCOUotaW1nLTFfMTc3MTQ0ODUyMTAwMF9uYTFmbl9hRzkxYzJVME1pMXNiMmR2LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kNF5lpjStnKnn3mlxAHE2O5M-azLuwazmOMVtco6~2w4ruh0TehR90LFSiXBjbJqz-d7C4y4pCDmPjNTMS6cMFbtJF0e4TIBl7cRhFOqdxz3g0hmfAYxkf18lKsyDmP82IdvDREcVPyflbvr78-~Xx8KpBkvoDyk1EMIykJMBHSrES4bwMPXAenOA2xv~wKv4xIoTvfR8Trwon6xYTbkHdTkes52M5F3u0b8cIHG87JTpnEnXwfFtazSXGMTphQLEukFIB11dzuC0RnfMZ6jid9pobV4kg5ZC-9swU6D4ius-l0KiZD9kmA9krrI8-tA-y8V8DhJNI2-120iv9DFKQ__"
              alt="House 42 Logo"
              className="h-10 w-auto group-hover:opacity-80 transition-opacity"
            />
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
