/**
 * House 42 Footer
 * Design: Dark Sport Luxury — minimal footer with brand identity
 */

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080808] border-t border-[#111]">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#D0021B] flex items-center justify-center font-display text-white text-xl leading-none">
                42
              </div>
              <span className="font-display text-white text-2xl tracking-widest">HOUSE 42</span>
            </div>
            <p className="font-body text-[#666] text-sm leading-relaxed max-w-xs mb-6">
              Agência de mídia paga de performance. Resultados reais, estratégias vencedoras. Jogue para vencer.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D0021B] rounded-full animate-pulse" />
              <span className="font-condensed text-xs tracking-widest uppercase text-[#555]">
                São Paulo, Brasil
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="font-condensed font-700 text-white text-sm tracking-widest uppercase mb-5">
              Navegação
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Início", href: "#hero" },
                { label: "Performance", href: "#performance" },
                { label: "Serviços", href: "#services" },
                { label: "Resultados", href: "#results" },
                { label: "Times", href: "#teams" },
                { label: "Contato", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="font-body text-sm text-[#666] hover:text-[#D0021B] transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-condensed font-700 text-white text-sm tracking-widest uppercase mb-5">
              Serviços
            </div>
            <div className="flex flex-col gap-3">
              {[
                "Mídia Paga",
                "Meta Ads",
                "Google Ads",
                "TikTok Ads",
                "Produção de Vídeo",
                "Design Criativo",
                "Gestão de Projetos",
              ].map((s) => (
                <span key={s} className="font-body text-sm text-[#666]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#111]">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-body text-xs text-[#444]">
            © {year} House 42. Todos os direitos reservados.
          </span>
          <span className="font-condensed text-xs tracking-widest uppercase text-[#333]">
            Performance · Criação · Gestão
          </span>
        </div>
      </div>
    </footer>
  );
}
