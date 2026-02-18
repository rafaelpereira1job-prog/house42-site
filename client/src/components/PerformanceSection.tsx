/**
 * House 42 Performance Section
 * Design: Dark Sport Luxury — feature section for paid media
 * Background: Generated data visualization image
 */

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Target, BarChart3, ArrowRight } from "lucide-react";

const PERF_BG = "https://private-us-east-1.manuscdn.com/sessionFile/PuMT0qMreoSCGZfod7tJ70/sandbox/uQve9Gqi0qRPKbRKtF1aLP-img-2_1771444988000_na1fn_aG91c2U0Mi1wZXJmb3JtYW5jZS1zZWN0aW9u.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUHVNVDBxTXJlb1NDR1pmb2Q3dEo3MC9zYW5kYm94L3VRdmU5R3FpMHFSUEtiUkt0RjFhTFAtaW1nLTJfMTc3MTQ0NDk4ODAwMF9uYTFmbl9hRzkxYzJVME1pMXdaWEptYjNKdFlXNWpaUzF6WldOMGFXOXUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pXZ0q2cf~MjaXqY56XFY9HY49jJ50WJSd8dlePB1t0TLzAvcEQjac7rSW-Mm9NRoXTVS8KqP-fLAQ21zprJt-oIWE04RdD72vXG0WwiK1exWM-FNP5sCuFgPzMckRKqAfrt0zmMci6XoL0YqZHzXCKaa7ueb2IkU4~I4R7MQjuBJwzaQzL4sNd7JHQ4F1X6iVw20B4o2bzKzpPQ5Z0bldww~6v1N9acZfLT2gdrqx2HGuYFkEKE25TwUnWnZw81K~eSQC2ZPOyxP3jdAZQ8dkvecgFLWJNN3CqEJXCdPoxHPBYU3NLq5AE5wGoO7ZlllgaIafs6RG1B-wWZ~gEfDgA__";

const platforms = [
  { name: "Meta Ads", icon: "M", color: "#1877F2" },
  { name: "Google Ads", icon: "G", color: "#4285F4" },
  { name: "TikTok Ads", icon: "T", color: "#ff0050" },
  { name: "LinkedIn Ads", icon: "in", color: "#0A66C2" },
  { name: "Pinterest Ads", icon: "P", color: "#E60023" },
  { name: "YouTube Ads", icon: "▶", color: "#FF0000" },
];

const features = [
  {
    icon: Target,
    title: "Estratégia Inteligente",
    desc: "Planejamento de funil com segmentação avançada. Cada real tem um objetivo claro e mensurável.",
  },
  {
    icon: BarChart3,
    title: "Otimização Contínua",
    desc: "Testes A/B sistemáticos e ajustes em tempo real para escalar o que funciona.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Sustentável",
    desc: "ROAS em alta com manutenção de eficiência. Sabemos quando acelerar e quando preservar.",
  },
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

export default function PerformanceSection() {
  const { ref, inView } = useInView();

  return (
    <section id="performance" className="relative py-24 md:py-32 overflow-hidden bg-[#080808]">
      {/* Watermark */}
      <div className="watermark-42 left-[-5%] top-0">42</div>

      <div ref={ref} className="container relative z-10">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#D0021B]" />
            <span className="font-condensed font-600 text-sm tracking-[0.3em] uppercase text-[#D0021B]">
              Core Business
            </span>
          </div>
          <h2 className="font-display text-white leading-none mb-4" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            MÍDIA PAGA<br />
            <span className="text-[#D0021B]">DE PERFORMANCE</span>
          </h2>
          <p className="font-body text-[#888] text-lg max-w-2xl leading-relaxed">
            Gerenciamos campanhas de tráfego pago com foco absoluto em resultados mensuráveis. Cada decisão é orientada por dados, cada centavo é otimizado para retorno máximo.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className={`relative transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src={PERF_BG}
                alt="Performance Media"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 to-transparent" />
              {/* Overlay stat */}
              <div className="absolute bottom-6 left-6 bg-[#D0021B] px-4 py-3">
                <div className="font-stat font-700 text-white text-3xl">935%</div>
                <div className="font-condensed text-white/80 text-xs tracking-widest uppercase">ROAS Médio</div>
              </div>
            </div>
            {/* Red border accent */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#D0021B]/30 -z-10" />
          </div>

          {/* Right: Features */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {features.map((feat) => (
              <div key={feat.title} className="card-h42 p-6">
                <div className="w-10 h-10 bg-[#D0021B]/10 border border-[#D0021B]/30 flex items-center justify-center mb-4">
                  <feat.icon size={20} className="text-[#D0021B]" />
                </div>
                <h3 className="font-condensed font-700 text-white text-lg tracking-wide mb-2">
                  {feat.title}
                </h3>
                <p className="font-body text-[#777] text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms */}
        <div className={`transition-all duration-700 delay-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-condensed font-600 text-xs tracking-[0.3em] uppercase text-[#555] mb-6 text-center">
            Plataformas que dominamos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 bg-[#111] border border-[#1a1a1a] px-5 py-3 hover:border-[#D0021B]/50 transition-colors"
              >
                <span className="font-stat font-700 text-white text-sm" style={{ color: p.color }}>
                  {p.icon}
                </span>
                <span className="font-condensed font-600 text-[#ccc] text-sm tracking-wide">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
