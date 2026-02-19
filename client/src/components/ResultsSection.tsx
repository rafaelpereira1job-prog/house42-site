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


    </section>
  );
}
