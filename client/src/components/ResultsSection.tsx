/**
 * House 42 Results Section
 * Design: Dark Sport Luxury — scoreboard-style metrics with animated counters
 * Red background section for maximum impact
 */

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 10, suffix: "M+", prefix: "R$", label: "Em receita gerada para clientes", decimals: 0 },
  { value: 935, suffix: "%", prefix: "", label: "ROAS médio nas campanhas", decimals: 0 },
  { value: 180, suffix: "+", prefix: "", label: "Campanhas ativas simultaneamente", decimals: 0 },
  { value: 4.2, suffix: "M+", prefix: "", label: "Impressões entregues por mês", decimals: 1 },
  { value: 9, suffix: "+", prefix: "", label: "Anos de experiência em performance", decimals: 0 },
];

const cases = [
  {
    client: "E-commerce de Moda",
    result: "+420% ROAS",
    period: "em 90 dias",
    desc: "Reestruturação completa das campanhas Meta Ads com foco em remarketing dinâmico.",
  },
  {
    client: "SaaS B2B",
    result: "-62% CPL",
    period: "em 60 dias",
    desc: "Otimização de funil no Google Ads com segmentação por intenção de compra.",
  },
  {
    client: "Clínica de Saúde",
    result: "+280% Leads",
    period: "em 45 dias",
    desc: "Estratégia omnichannel integrando Meta, Google e TikTok Ads.",
  },
];

function AnimatedCounter({ target, suffix, prefix, decimals }: {
  target: number; suffix: string; prefix: string; decimals: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  );
}

function useInView(threshold = 0.1) {
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

export default function ResultsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="results" className="relative overflow-hidden">
      {/* Metrics block — red background */}
      <div className="bg-[#D0021B] py-20 relative overflow-hidden">
        {/* Watermark */}
        <div className="watermark-42 right-[-5%] top-1/2 -translate-y-1/2" style={{ color: "rgba(0,0,0,0.08)" }}>
          42
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-white/40" />
              <span className="font-condensed font-600 text-sm tracking-[0.3em] uppercase text-white/70">
                Números que falam
              </span>
              <div className="w-8 h-0.5 bg-white/40" />
            </div>
            <h2 className="font-display text-white leading-none" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
              RESULTADOS<br />QUE PROVAM
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="font-stat font-700 text-white mb-2" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                  <AnimatedCounter
                    target={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                    decimals={metric.decimals}
                  />
                </div>
                <div className="font-body text-white/60 text-sm leading-snug max-w-[160px] mx-auto">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cases block */}
      <div className="bg-[#080808] py-20">
        <div ref={ref} className="container">
          <div className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#D0021B]" />
              <span className="font-condensed font-600 text-sm tracking-[0.3em] uppercase text-[#D0021B]">
                Cases de Sucesso
              </span>
            </div>
            <h2 className="font-display text-white leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
              HISTÓRIAS<br />
              <span className="text-[#D0021B]">REAIS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <div
                key={c.client}
                className={`card-h42 p-8 transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="font-condensed font-600 text-xs tracking-widest uppercase text-[#555] mb-3">
                  {c.client}
                </div>
                <div className="font-stat font-700 text-[#D0021B] mb-1" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                  {c.result}
                </div>
                <div className="font-condensed text-[#555] text-sm mb-4">{c.period}</div>
                <p className="font-body text-[#777] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
