/**
 * House 42 Ticker
 * Design: NBA scoreboard-inspired horizontal scrolling ticker
 * Shows performance metrics and agency highlights
 */

const items = [
  "MÍDIA PAGA DE PERFORMANCE",
  "★ R$10M+ EM RECEITA GERADA",
  "GOOGLE ADS",
  "★ ROAS MÉDIO 935%",
  "TIKTOK ADS",
  "★ +180 CAMPANHAS ATIVAS",
  "CRIAÇÃO DE CONTEÚDO",
  "★ GESTÃO DE PROJETOS",
  "RESULTADOS REAIS",
  "★ HOUSE 42",
  "MÍDIA PAGA DE PERFORMANCE",
  "★ R$10M+ EM RECEITA GERADA",
  "GOOGLE ADS",
  "★ ROAS MÉDIO 935%",
  "TIKTOK ADS",
  "★ +180 CAMPANHAS ATIVAS",
  "CRIAÇÃO DE CONTEÚDO",
  "★ GESTÃO DE PROJETOS",
  "RESULTADOS REAIS",
  "★ HOUSE 42",
];

export default function Ticker() {
  return (
    <div className="bg-[#D0021B] py-3 overflow-hidden relative">
      <div className="ticker-track flex gap-12 whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-condensed font-700 text-sm tracking-[0.2em] uppercase text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
