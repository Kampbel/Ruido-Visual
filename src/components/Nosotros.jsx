import ScrollReveal from "./ScrollReveal";

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-16 md:py-32 overflow-hidden bg-atmo-resena">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-sm uppercase tracking-widest text-secondary font-semibold">Quiénes Somos</span>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-primary mt-2">Renacer en Tacones</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed">
              Creamos narrativas visuales que trascienden la pantalla. Somos una productora audiovisual comprometida con historias que importan.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Objetivo */}
          <ScrollReveal className="reveal-left">
            <div className="glass-panel rounded-2xl p-8 md:p-10 h-full card-glow">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #bd00ff 0%, #ff4b89 100%)" }}
                >
                  <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    flag
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#FFD700] italic">Nuestro Objetivo</h3>
              </div>
              <h4 className="text-xl text-white font-semibold mb-4">El Arte como Puente Social</h4>
              <p className="text-white/80 leading-relaxed">
                Renacer en Tacones busca humanizar la escena LGBTQ+ más allá del espectáculo. Nuestra misión es capturar el alma de Diego, explorando la vulnerabilidad y la fuerza que habita bajo el maquillaje. A través de un relato cinematográfico incluyente, el documental funciona como una herramienta cultural para sensibilizar al público general y dignificar las historias que nacen desde la resiliencia y el deseo de transformación.
              </p>
            </div>
          </ScrollReveal>

          {/* Visión */}
          <ScrollReveal className="reveal-right">
            <div className="glass-panel rounded-2xl p-8 md:p-10 h-full card-glow">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #bd00ff 0%, #ff4b89 100%)" }}
                >
                  <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    visibility
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#FFD700] italic">Nuestra Visión</h3>
              </div>
              <h4 className="text-xl text-white font-semibold mb-4">Trascendencia Audiovisual</h4>
              <p className="text-white/80 leading-relaxed">
                Queremos consolidar este proyecto como un referente del cine documental independiente en América Latina. Buscamos visibilizar el arte drag no como una máscara, sino como un canalizador de superación personal frente al duelo. Creemos en la potencia de la imagen en movimiento para generar empatía y derribar prejuicios sociales de manera estética, íntima y transformadora.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Decorative quote */}
        <ScrollReveal className="mt-16 text-center reveal">
          <blockquote className="font-display text-2xl md:text-3xl italic text-primary/60 max-w-3xl mx-auto">
            "El cine es el espejo donde la sociedad se atreve a verse sin filtros."
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
