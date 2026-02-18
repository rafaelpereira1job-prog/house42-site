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

export default function ManifestoSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative bg-[#080808] py-24 md:py-32 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0021B] to-transparent" />

      <div ref={ref} className="container relative z-10">
        {/* Big statement */}
        <div className={`mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-[#D0021B]" />
            <span className="font-condensed font-600 text-sm tracking-[0.3em] uppercase text-[#D0021B]">
              Quem Somos
            </span>
          </div>

          <div className="max-w-4xl">
            <p className="font-display text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              HOUSE 42:
              <span className="text-[#D0021B]"> UM CENTRO DE DIAGNÓSTICOS</span>
            </p>
            <p className="font-body text-[#777] text-lg leading-relaxed max-w-2xl mb-6">
              House vem da icônica série de TV, onde um médico renomado recebia os casos mais complexos. Assim como ele, somos uma casa de diagnósticos — entendemos a fundo como ser um agente transformador no seu negócio e levá-lo para o próximo nível.
            </p>
            <p className="font-body text-[#777] text-lg leading-relaxed max-w-2xl">
              42 é a resposta final do supercomputador do Guia do Mochileiro das Galáxias para "Qual é a resposta para tudo?". Talvez não consigamos chegar ao 42 sempre, mas é um lembrete para buscar sempre a melhor resposta. Gente boa + perseguir a perfeição + acreditar no que faz. Essa é a House 42.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "0ms" }}>
            <div className="font-display text-[#D0021B]/20 text-8xl leading-none mb-4 select-none">01</div>
            <div className="absolute top-8 left-0"><div className="w-8 h-0.5 bg-[#D0021B] mb-4" /></div>
            <h3 className="font-condensed font-700 text-white text-xl tracking-wide mb-3 mt-2">Gente Boa</h3>
            <p className="font-body text-[#777] text-sm leading-relaxed">Trabalhamos com profissionais que compartilham nossos valores. Cada projeto é único, então curamos os melhores talentos para sua demanda.</p>
          </div>
          <div className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "150ms" }}>
            <div className="font-display text-[#D0021B]/20 text-8xl leading-none mb-4 select-none">02</div>
            <div className="absolute top-8 left-0"><div className="w-8 h-0.5 bg-[#D0021B] mb-4" /></div>
            <h3 className="font-condensed font-700 text-white text-xl tracking-wide mb-3 mt-2">Perseguir a Perfeição</h3>
            <p className="font-body text-[#777] text-sm leading-relaxed">Não aceitamos resultados mediocres. Cada detalhe importa, desde a estratégia até a execução. Buscamos sempre mover os ponteiros.</p>
          </div>
          <div className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "300ms" }}>
            <div className="font-display text-[#D0021B]/20 text-8xl leading-none mb-4 select-none">03</div>
            <div className="absolute top-8 left-0"><div className="w-8 h-0.5 bg-[#D0021B] mb-4" /></div>
            <h3 className="font-condensed font-700 text-white text-xl tracking-wide mb-3 mt-2">Acreditar no Que Faz</h3>
            <p className="font-body text-[#777] text-sm leading-relaxed">Só trabalhamos com projetos em que realmente acreditamos. Isso garante dedicação total e resultados que transformam negócios.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
