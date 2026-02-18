/**
 * House 42 Founder Section
 * Design: Dark Sport Luxury — founder profile with photo
 * Showcases the leader behind the agency
 */

import { useEffect, useRef, useState } from "react";
import { Award, Target, Users } from "lucide-react";

const FOUNDER_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663366711629/PJHMDVjhZWNspxPt.jpg";

const achievements = [
  { icon: Award, label: "5+ anos em Performance Marketing" },
  { icon: Target, label: "340% ROAS médio em campanhas" },
  { icon: Users, label: "Liderou 50+ projetos de sucesso" },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function FounderSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative py-24 md:py-32 bg-[#080808] overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0021B] to-transparent" />

      <div ref={ref} className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Photo */}
          <div className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img
                src={FOUNDER_IMG}
                alt="Marcelo - Fundador House 42"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
            </div>
            {/* Red border accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D0021B]/30 -z-10" />
            {/* Corner accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-[#D0021B]" />
          </div>

          {/* Right: Content */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#D0021B]" />
              <span className="font-condensed font-600 text-sm tracking-[0.3em] uppercase text-[#D0021B]">
                Conheça o Fundador
              </span>
            </div>

            <h2 className="font-display text-white leading-none mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              RAFAEL<br />
              <span className="text-[#D0021B]">PEREIRA</span>
            </h2>

            <p className="font-condensed font-600 text-[#D0021B] text-lg tracking-wide mb-6">
              Fundador & Publicitário
            </p>

            <p className="font-body text-[#888] text-base leading-relaxed mb-8">
              Com 9+ anos de experiência em mídia paga e marketing, Rafael trabalhou com grandes marcas como Autoglass, Piccadilly, Bibi, iPlace e muitas outras. Formado em Publicidade e Propaganda pela Unisinos, sua missão é ser um centro de diagnóstico para transformar negócios.
            </p>

            <p className="font-body text-[#777] text-sm leading-relaxed mb-10">
              "Cansado de ver agências aceitarem projetos em que não acreditavam, criei a House 42 para trabalhar apenas com projetos que conseguimos mover os ponteiros. Gente boa + perseguir a perfeição + acreditar no que faz."
            </p>

            {/* Achievements */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#D0021B]/10 border border-[#D0021B]/30 flex items-center justify-center flex-shrink-0">
                  <Award size={16} className="text-[#D0021B]" />
                </div>
                <span className="font-body text-[#ccc] text-sm">
                  9+ anos em Mídia Paga e Marketing
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#D0021B]/10 border border-[#D0021B]/30 flex items-center justify-center flex-shrink-0">
                  <Target size={16} className="text-[#D0021B]" />
                </div>
                <span className="font-body text-[#ccc] text-sm">
                  Trabalhou com 20+ marcas de diferentes segmentos
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#D0021B]/10 border border-[#D0021B]/30 flex items-center justify-center flex-shrink-0">
                  <Users size={16} className="text-[#D0021B]" />
                </div>
                <span className="font-body text-[#ccc] text-sm">
                  Formado em Publicidade e Propaganda (Unisinos)
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-[#1a1a1a]">
              <p className="font-body text-[#666] text-sm mb-4">
                Quer conversar com Rafael sobre sua estratégia de transformação?
              </p>
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-h42 btn-h42-solid text-sm"
              >
                <span>Agendar Conversa</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
