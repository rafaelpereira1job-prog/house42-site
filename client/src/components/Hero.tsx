/**
 * House 42 Hero Section
 * Design: Dark Sport Luxury — fullscreen with arena background, red spotlights
 * Typography: Bebas Neue display, DM Sans body
 * Image: Generated NBA-inspired arena with red spotlights
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/PuMT0qMreoSCGZfod7tJ70/sandbox/uQve9Gqi0qRPKbRKtF1aLP-img-1_1771444994000_na1fn_aG91c2U0Mi1oZXJvLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUHVNVDBxTXJlb1NDR1pmb2Q3dEo3MC9zYW5kYm94L3VRdmU5R3FpMHFSUEtiUkt0RjFhTFAtaW1nLTFfMTc3MTQ0NDk5NDAwMF9uYTFmbl9hRzkxYzJVME1pMW9aWEp2TFdKbi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fFEb4gn5d5irU8u7SGPUzQdZMoIhW5FCRxW3pjTRWilUuEV8MWYPIeaduNxlhOKw7WMh3yXC0mzm0Kqes9unWdBJXCpMNE68E5nxi~QwC49mCSA4YJuRVtI9Jha8Q3q43c1sYc4CwQQi7BvCDo2ubW9MQcx3jufPNrIJDGMPcDZHo3okqJ2IZsZJISi3Ics0g2ky5iy0noo5I~yhv3Q25n9ogTPnBN1gC9iHU2vBn1iGO~-Y37zPYfSPWMfQQ2ICh5aViL3ihdyRMeFkFta2jedvu4MY6MNqB4u3ALNzJOcRvrlNqaQnpioCRLTTq9oldkP6t0c6APqQNMMMVbmU0w__";

const stats = [
  { value: "R$10M+", label: "Em receita gerada" },
  { value: "935%", label: "ROAS médio" },
  { value: "180+", label: "Campanhas ativas" },
  { value: "9+", label: "Anos de experiência" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const el = document.querySelector("#performance");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundPosition: "center 30%" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/50 to-[#080808]" />

      {/* Watermark 42 */}
      <div className="watermark-42 right-[-2%] top-1/2 -translate-y-1/2 select-none pointer-events-none">
        42
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-8 h-0.5 bg-[#D0021B]" />
            <span className="font-condensed font-600 text-sm tracking-[0.3em] uppercase text-[#D0021B]">
              Performance Media Agency
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`font-display text-white leading-none mb-6 transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
          >
            JOGUE PARA
            <br />
            <span className="text-[#D0021B] glow-red-text">VENCER.</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`font-body text-[#aaa] text-lg md:text-xl max-w-xl leading-relaxed mb-10 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Mídia paga de alta performance para marcas que não aceitam resultados mediocres. Estratégia, dados e criatividade no mesmo time.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-h42 btn-h42-solid"
            >
              <span className="flex items-center gap-2">
                Começar Agora <ArrowRight size={16} />
              </span>
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#results");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-h42"
            >
              <span>Ver Resultados</span>
            </button>
          </div>

          {/* Stats bar */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#1a1a1a] transition-all duration-700 delay-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-stat font-700 text-white" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                  {stat.value}
                </span>
                <span className="font-body text-xs text-[#666] uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#555] hover:text-[#D0021B] transition-colors"
      >
        <span className="font-condensed text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
