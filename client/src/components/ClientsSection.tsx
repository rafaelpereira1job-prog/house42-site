/**
 * House 42 Clients Section
 * Design: Dark Sport Luxury — showcase of trusted brands
 * Displays client logos/names and testimonial
 */

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const clients = [
  "Autoglass",
  "Piccadilly",
  "Alô Bebê",
  "Bibi",
  "iPlace",
  "Hocks",
  "Comsul",
  "Telagro",
  "Half",
  "NPX Náutica",
  "Intensidade Máxima",
  "Grupo A",
  "Enter Tech",
  "FluidStance",
  "Pals Socks",
  "The Body Shop",
  "Safira",
  "Joias Vip",
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

export default function ClientsSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative py-24 md:py-32 bg-[#080808] overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0021B] to-transparent" />

      <div ref={ref} className="container relative z-10">
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#D0021B]" />
            <span className="font-condensed font-600 text-sm tracking-[0.3em] uppercase text-[#D0021B]">
              Confiança Comprovada
            </span>
            <div className="w-8 h-0.5 bg-[#D0021B]" />
          </div>
          <h2 className="font-display text-white leading-none mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
            MARCAS QUE<br />
            <span className="text-[#D0021B]">CONFIARAM</span>
          </h2>
          <p className="font-body text-[#777] text-base max-w-2xl mx-auto leading-relaxed">
            Ao longo de 9+ anos, Rafael trabalhou com marcas de diferentes segmentos, desde e-commerce até B2B, sempre entregando resultados que movem os ponteiros.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
          {clients.map((client, i) => (
            <div
              key={client}
              className={`bg-[#111] border border-[#1a1a1a] p-6 flex items-center justify-center min-h-[120px] hover:border-[#D0021B]/50 transition-all duration-300 group cursor-pointer transition-all duration-700 ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="font-condensed font-700 text-white text-center text-sm tracking-wide group-hover:text-[#D0021B] transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className={`bg-[#111] border border-[#D0021B]/20 p-8 md:p-12 relative transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Quote mark */}
          <div className="absolute top-4 left-6 text-[#D0021B]/10 text-6xl font-display leading-none">"</div>

          <div className="flex items-start gap-4 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={18} className="fill-[#D0021B] text-[#D0021B]" />
            ))}
          </div>

          <p className="font-body text-[#ccc] text-lg leading-relaxed mb-6 max-w-3xl">
            Trabalhando com tanta gente e negócios inspiradores, quis trazer uma pequena inovação para o ramo, mas que possibilite uma grande mudança na linha final. Esse diferencial da House 42 está diretamente ligado aos nossos valores: <span className="text-[#D0021B] font-semibold">gente boa + perseguir a perfeição + acreditar no que faz</span>.
          </p>

          <div>
            <div className="font-condensed font-700 text-white text-lg tracking-wide">Rafael Pereira</div>
            <div className="font-body text-[#666] text-sm">Dono, House 42</div>
          </div>
        </div>
      </div>
    </section>
  );
}
