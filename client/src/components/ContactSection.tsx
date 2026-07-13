/**
 * House 42 Contact Section
 * Design: Dark Sport Luxury — contact form with red accent
 */

import { useState } from "react";
import { Send, MapPin, Mail } from "lucide-react";
import { toast } from "sonner";

// ⬇️ TROQUE "SEU_ID_AQUI" PELO CÓDIGO DO SEU FORM NO FORMSPREE
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgqezzd";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const toastStyle = { background: "#111", border: "1px solid #D0021B", color: "#fff" };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nome: form.name,
          email: form.email,
          empresa: form.company,
          budget: form.budget,
          mensagem: form.message,
          _subject: `Novo contato pelo site: ${form.name}`,
        }),
      });

      if (!response.ok) throw new Error("Falha no envio");

      toast.success("Mensagem enviada! Entraremos em contato em breve.", { style: toastStyle });
      setForm({ name: "", email: "", company: "", budget: "", message: "" });
    } catch {
      toast.error("Não foi possível enviar. Tente novamente ou escreva para contato@house42.com.br", { style: toastStyle });
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full bg-[#111] border border-[#1a1a1a] text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-[#D0021B] transition-colors placeholder:text-[#444]";

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0021B] to-transparent" />

      {/* Watermark */}
      <div className="watermark-42 right-[-5%] bottom-0">42</div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#D0021B]" />
            <span className="font-condensed font-600 text-sm tracking-[0.3em] uppercase text-[#D0021B]">
              Vamos jogar juntos
            </span>
          </div>
          <h2 className="font-display text-white leading-none" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            ENTRE EM<br />
            <span className="text-[#D0021B]">CONTATO</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <p className="font-body text-[#888] text-base leading-relaxed">
              Pronto para transformar seu negócio? Fale com nosso time e descubra como a House 42 pode ser seu centro de diagnósticos.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D0021B]/10 border border-[#D0021B]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-[#D0021B]" />
                </div>
                <div>
                  <div className="font-condensed font-700 text-white text-sm tracking-wide mb-0.5">Email</div>
                  <div className="font-body text-[#777] text-sm">contato@house42.com.br</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#D0021B]/10 border border-[#D0021B]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-[#D0021B]" />
                </div>
                <div>
                  <div className="font-condensed font-700 text-white text-sm tracking-wide mb-0.5">Localização</div>
                  <div className="font-body text-[#777] text-sm">Everywhere</div>
                </div>
              </div>
            </div>

            {/* Highlight box */}
            <div className="bg-[#D0021B]/5 border border-[#D0021B]/20 p-6">
              <div className="font-condensed font-700 text-white text-lg tracking-wide mb-2">
                Resposta em 24h
              </div>
              <p className="font-body text-[#888] text-sm leading-relaxed">
                Nossa equipe está pronta para analisar seu projeto e apresentar uma proposta personalizada.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-condensed font-600 text-xs tracking-widest uppercase text-[#555] block mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-condensed font-600 text-xs tracking-widest uppercase text-[#555] block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-condensed font-600 text-xs tracking-widest uppercase text-[#555] block mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nome da empresa"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-condensed font-600 text-xs tracking-widest uppercase text-[#555] block mb-2">
                    Budget Mensal
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>Selecione</option>
                    <option value="até 5k">Até R$ 5.000</option>
                    <option value="5k-20k">R$ 5.000 – R$ 20.000</option>
                    <option value="20k-50k">R$ 20.000 – R$ 50.000</option>
                    <option value="50k+">Acima de R$ 50.000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-condensed font-600 text-xs tracking-widest uppercase text-[#555] block mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Conte sobre seu projeto, objetivos e desafios..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-h42 btn-h42-solid w-full justify-center mt-2 disabled:opacity-60"
              >
                <span className="flex items-center gap-2">
                  {sending ? "Enviando..." : "Enviar Mensagem"}
                  <Send size={15} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
