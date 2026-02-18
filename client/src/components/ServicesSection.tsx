/**
 * House 42 Services Section
 * Design: Dark Sport Luxury — grid of service cards with hover effects
 * Covers: Paid Media (core) + Creative + Project Management
 */

import { useEffect, useRef, useState } from "react";
import { Megaphone, Film, Image, ClipboardList, LineChart, Users } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    tag: "Core",
    title: "Mídia Paga",
    desc: "Gestão completa de campanhas de tráfego pago em todas as plataformas. Estratégia, execução e otimização contínua com foco em ROAS.",
    highlight: true,
    items: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads"],
  },
  {
    icon: LineChart,
    tag: "Core",
    title: "Analytics & BI",
    desc: "Dashboards personalizados, atribuição de conversão e análise profunda de dados para decisões mais inteligentes.",
    highlight: false,
    items: ["Google Analytics 4", "Data Studio", "UTM Tracking", "Pixel Setup"],
  },
  {
    icon: Film,
    tag: "Criação",
    title: "Produção de Vídeo",
    desc: "Criação de vídeos para ads, reels e conteúdo orgânico. Roteiro, gravação e edição com foco em conversão.",
    highlight: false,
    items: ["Vídeos para Ads", "Reels & TikToks", "Motion Graphics", "Edição Profissional"],
  },
  {
    icon: Image,
    tag: "Criação",
    title: "Design & Criativo",
    desc: "Peças criativas de alta performance para campanhas pagas. Banners, carrosséis, stories e criativos que convertem.",
    highlight: false,
    items: ["Banners para Ads", "Carrosséis", "Stories & Reels", "Identidade Visual"],
  },
  {
    icon: ClipboardList,
    tag: "Gestão",
    title: "Gestão de Projetos",
    desc: "Coordenação completa de projetos pontuais com metodologia ágil. Entrega no prazo, dentro do escopo e do budget.",
    highlight: false,
    items: ["Planejamento", "Gestão Ágil", "Relatórios", "Alinhamento de Times"],
  },
  {
    icon: Users,
    tag: "Gestão",
    title: "Consultoria Estratégica",
    desc: "Diagnóstico completo da sua operação de marketing digital e plano de ação para escalar resultados.",
    highlight: false,
    items: ["Auditoria de Conta", "Plano de Mídia", "Treinamento de Time", "Mentoria"],
  },
];

const tagColors: Record<string, string> = {
  Core: "#D0021B",
  Criação: "#555",
  Gestão: "#333",
};

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

export default function ServicesSection() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0021B] to-transparent" />

      <div ref={ref} className="container relative z-10">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#D0021B]" />
            <span className="font-condensed font-600 text-sm tracking-[0.3em] uppercase text-[#D0021B]">
              O que fazemos
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-white leading-none" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
              NOSSOS<br />
              <span className="text-[#D0021B]">SERVIÇOS</span>
            </h2>
            <p className="font-body text-[#777] text-base max-w-sm leading-relaxed">
              Performance é o nosso core, mas temos times especializados para projetos pontuais de criação e gestão.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`card-h42 p-8 relative overflow-hidden transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${service.highlight ? "border-[#D0021B]/40" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Tag */}
              <div
                className="inline-flex items-center px-2 py-0.5 text-[10px] font-condensed font-700 tracking-widest uppercase text-white mb-4"
                style={{ backgroundColor: tagColors[service.tag] }}
              >
                {service.tag}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 flex items-center justify-center mb-5 ${
                service.highlight ? "bg-[#D0021B]" : "bg-[#1a1a1a] border border-[#D0021B]/20"
              }`}>
                <service.icon size={22} className={service.highlight ? "text-white" : "text-[#D0021B]"} />
              </div>

              <h3 className="font-condensed font-700 text-white text-xl tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="font-body text-[#777] text-sm leading-relaxed mb-5">
                {service.desc}
              </p>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="font-condensed text-xs tracking-wide text-[#555] border border-[#1f1f1f] px-2 py-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Highlight glow */}
              {service.highlight && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D0021B]/10 blur-2xl pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0021B] to-transparent" />
    </section>
  );
}
