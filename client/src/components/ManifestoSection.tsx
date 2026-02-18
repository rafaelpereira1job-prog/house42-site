/**
 * House 42 Manifesto Section
 * Design: Dark Sport Luxury — bold statement section
 * Full-width red background with powerful copy
 */

import { useEffect, useRef, useState } from "react";

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

const values = [
  {
    number: "01",
    title: "Dados Acima de Tudo",
    desc: "Cada decisão é baseada em dados reais. Sem achismos, sem suposições. Apenas o que os números provam.",
  },
  {
    number: "02",
    title: "Resultados, Não Desculpas",
    desc: "Assumimos responsabilidade total pelos resultados. Se não está funcionando, mudamos a estratégia.",
  },
  {
    number: "03",
    title: "Transparência Total",
    desc: "Você sabe exatamente onde cada centavo está sendo investido e qual retorno está gerando.",
  },
];

export default function ManifestoSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-[#080808] py-24 md:py-32 overflow-hidden">
      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0021B] to-transparent" />

      <div ref={ref} className="container relative z-10">
        {/* Big statement */}
        <div className={`mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-[#D0021B]" />
            <span className="font-condensed font-600 text-sm tracking-[0.3em] uppercase text-[#D0021B]">
              Nosso Manifesto
            </span>
          </div>

          <div className="max-w-4xl">
            <p className="font-display text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              "NA NBA, O TIME QUE VENCE NÃO É O QUE TENTA MAIS.
              <span className="text-[#D0021B]"> É O QUE EXECUTA MELHOR."</span>
            </p>
            <p className="font-body text-[#777] text-lg leading-relaxed max-w-2xl">
              Na House 42, aplicamos essa mentalidade ao marketing digital. Não acreditamos em volume por volume — acreditamos em precisão, estratégia e execução impecável. Cada campanha é uma jogada calculada para maximizar o retorno.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={v.number}
              className={`relative transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Number */}
              <div className="font-display text-[#D0021B]/20 text-8xl leading-none mb-4 select-none">
                {v.number}
              </div>
              <div className="absolute top-8 left-0">
                <div className="w-8 h-0.5 bg-[#D0021B] mb-4" />
              </div>
              <h3 className="font-condensed font-700 text-white text-xl tracking-wide mb-3 mt-2">
                {v.title}
              </h3>
              <p className="font-body text-[#777] text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
