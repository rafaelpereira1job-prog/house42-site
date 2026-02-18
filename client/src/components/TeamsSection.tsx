/**
 * House 42 Teams Section
 * Design: Dark Sport Luxury — team cards with arena background
 * Shows the three squads: Performance, Creative, Project Management
 */

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Palette, Briefcase } from "lucide-react";

const TEAM_BG = "https://private-us-east-1.manuscdn.com/sessionFile/PuMT0qMreoSCGZfod7tJ70/sandbox/uQve9Gqi0qRPKbRKtF1aLP-img-5_1771444995000_na1fn_aG91c2U0Mi10ZWFtLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUHVNVDBxTXJlb1NDR1pmb2Q3dEo3MC9zYW5kYm94L3VRdmU5R3FpMHFSUEtiUkt0RjFhTFAtaW1nLTVfMTc3MTQ0NDk5NTAwMF9uYTFmbl9hRzkxYzJVME1pMTBaV0Z0TFdKbi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YzHXocjygas9n3G7F2clFd0XuyA6-7l6Ea5~XsmGraM4ui66yU0GrPmqSWpUULB7VSagU1vIECSyK5-RkgLMz1-LBFdXjtGpNPNQThOBUZWKEr8MiA4VEqpHC-lSji8CCUzZ7hTio-BIvHvRE7F1XuhU9RDxNGjKw~vokYaV7uMrS0CmKG3odggd-dQHOILHYsv4NCojF03L4uRIuMTaXKY3ScDsime9JMnZ3P9oYZXvKP3loJlz~mra4RuA3Ju4fiNzChkA2sJtSuSPg-lq9oD6rxNi3A7IP6stkuNdt4MbCkFOpVH9ZmBhgf0uN1MO1D94lZDMfNen0xw9CU80sw__";

const CREATIVE_BG = "https://private-us-east-1.manuscdn.com/sessionFile/PuMT0qMreoSCGZfod7tJ70/sandbox/uQve9Gqi0qRPKbRKtF1aLP-img-3_1771444991000_na1fn_aG91c2U0Mi1jcmVhdGl2ZS1zZWN0aW9u.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUHVNVDBxTXJlb1NDR1pmb2Q3dEo3MC9zYW5kYm94L3VRdmU5R3FpMHFSUEtiUkt0RjFhTFAtaW1nLTNfMTc3MTQ0NDk5MTAwMF9uYTFmbl9hRzkxYzJVME1pMWpjbVZoZEdsMlpTMXpaV04wYVc5dS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kk~YtyHFRivWcps8xKVUsHU8hplr3u6bw5JkxPykfGLyFngxAQMtpveKxpiScbvsaWNul0p~jtblutIqit9QCz0sVdDMLAb1ynuUo5W~c-kLIMV4WZS21rjW8gZf~W082DFaZdIgqN8tMf1~eNRdeD7v37ZbflUMBmDoqaGU2h~4gsOghqWJun-6zNGGS2lasGuGyWhRS~HYXbcuqD45x8MEpgIgudS9Bu1FiEYSN1i0SVkMdkWmVOKPMOGebeNXOKFZghMwLz6WFN5VkQpyvj8T5fCzQonF9jSbgJbo6cEKWheZx5CAHlCIoLnNlRsCr7Th8GRalJF0aubBf~QFfw__";

const teams = [
  {
    number: "01",
    name: "Time de Performance",
    role: "Core Squad",
    icon: TrendingUp,
    bg: TEAM_BG,
    desc: "Especialistas em tráfego pago que vivem e respiram métricas. Cada membro é certificado nas principais plataformas e obcecado por ROAS.",
    skills: ["Meta Ads", "Google Ads", "TikTok Ads", "Analytics", "CRO"],
    highlight: true,
  },
  {
    number: "02",
    name: "Time Criativo",
    role: "Creative Squad",
    icon: Palette,
    bg: CREATIVE_BG,
    desc: "Designers, videomakers e redatores que criam peças que convertem. Criativos pensados para performance, não só para estética.",
    skills: ["Design de Ads", "Produção de Vídeo", "Copywriting", "Motion", "UGC"],
    highlight: false,
  },
  {
    number: "03",
    name: "Gestores de Projetos",
    role: "Operations Squad",
    icon: Briefcase,
    bg: TEAM_BG,
    desc: "PMs experientes que garantem que cada projeto seja entregue no prazo, dentro do escopo e com a qualidade que o cliente espera.",
    skills: ["Gestão Ágil", "Scrum", "Relatórios", "Alinhamento", "Processos"],
    highlight: false,
  },
];

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

export default function TeamsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="teams" className="relative py-24 md:py-32 bg-[#080808] overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0021B] to-transparent" />

      {/* Watermark */}
      <div className="watermark-42 left-1/2 -translate-x-1/2 top-0 opacity-50">42</div>

      <div ref={ref} className="container relative z-10">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#D0021B]" />
            <span className="font-condensed font-600 text-sm tracking-[0.3em] uppercase text-[#D0021B]">
              Nossos Times
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-white leading-none" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
              OS SQUADS<br />
              <span className="text-[#D0021B]">DA HOUSE 42</span>
            </h2>
            <p className="font-body text-[#777] text-base max-w-sm leading-relaxed">
              Três times especializados, um único objetivo: entregar resultados que superam expectativas.
            </p>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {teams.map((team, i) => (
            <div
              key={team.name}
              className={`group relative overflow-hidden transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${team.highlight ? "md:col-span-1" : ""}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={team.bg}
                  alt={team.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111]" />
                {/* Number */}
                <div className="absolute top-4 left-4 font-display text-white/20 text-6xl leading-none">
                  {team.number}
                </div>
                {/* Icon */}
                <div className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center ${
                  team.highlight ? "bg-[#D0021B]" : "bg-[#1a1a1a] border border-[#333]"
                }`}>
                  <team.icon size={18} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 border border-t-0 transition-colors duration-300 ${
                team.highlight
                  ? "bg-[#111] border-[#D0021B]/40 group-hover:border-[#D0021B]"
                  : "bg-[#111] border-[#1a1a1a] group-hover:border-[#D0021B]/50"
              }`}>
                <div className="font-condensed font-600 text-xs tracking-widest uppercase text-[#D0021B] mb-1">
                  {team.role}
                </div>
                <h3 className="font-condensed font-700 text-white text-xl tracking-wide mb-3">
                  {team.name}
                </h3>
                <p className="font-body text-[#777] text-sm leading-relaxed mb-4">
                  {team.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {team.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-condensed text-xs tracking-wide text-[#555] border border-[#1f1f1f] px-2 py-0.5 group-hover:border-[#D0021B]/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-[#666] text-base mb-6">
            Quer fazer parte de um dos times?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-h42"
          >
            <span>Fale com a gente</span>
          </button>
        </div>
      </div>
    </section>
  );
}
