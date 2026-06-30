import ScrollReveal from "./ScrollReveal";

export default function Recorrido() {
  return (
    <section id="recorrido" className="py-16 md:py-32 bg-atmo-colaboradores overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <ScrollReveal>
              <span className="text-sm text-secondary uppercase tracking-widest font-semibold">Contexto y Escenario</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl text-white font-display italic mt-2">
                El Recorrido del Orgullo 2026
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <p className="max-w-md text-white/80 text-sm leading-relaxed">
              El corazón de <span className="text-primary font-semibold">Renacer en Tacones</span> late en las calles de Lima. Capturamos la verdad de la marcha del orgullo LGBTI+ 2026, un recorrido histórico de resiliencia y visibilidad.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Organic Styled Map */}
          <ScrollReveal className="lg:col-span-7 reveal-left">
            <div className="organic-map-container aspect-[4/3] w-full group relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Recorrido Marcha del Orgullo Lima 2026"
                className="organic-map"
                src="/img/mapa_recorrido.jpg"
                loading="lazy"
              />
              {/* Inline Helper Hint */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface/80 backdrop-blur-md px-4 py-2 rounded-xl border border-outline-variant/30 text-center text-xs text-white/90 pointer-events-none transition-opacity duration-300 opacity-100 group-hover:opacity-0 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary">touch_app</span>
                <span>Pasa el cursor por encima para ver el mapa en su color original</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Stepper/Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Details Card */}
            <ScrollReveal className="reveal-right">
              <div className="glass-panel rounded-2xl p-6 border border-outline-variant/20 space-y-4">
                <div className="flex items-center gap-3 text-[#FFD700]">
                  <span className="material-symbols-outlined">calendar_today</span>
                  <span className="font-semibold text-sm">Sábado 27 de junio, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                  <span className="font-semibold text-sm">3:00 p.m.</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <span className="material-symbols-outlined">location_on</span>
                  <span className="font-semibold text-sm">Partida: Av. De La Peruanidad, Jesús María</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Route Timeline Stepper */}
            <ScrollReveal className="reveal-right stagger-1">
              <div className="relative pl-6 border-l border-outline-variant/40 space-y-6">
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-secondary shadow-[0_0_10px_rgba(255,75,137,0.5)]"></div>
                  <h4 className="text-white font-semibold">1. Concentración y Salida</h4>
                  <p className="text-xs text-on-surface-variant mt-1">Av. De La Peruanidad (Jesús María) - Campo de Marte. Punto de partida oficial.</p>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(189,0,255,0.5)]"></div>
                  <h4 className="text-white font-semibold">2. Eje Av. Guzmán Blanco</h4>
                  <p className="text-xs text-on-surface-variant mt-1">Hacia Plaza Bolognesi. El avance inicial tiñe de colores las avenidas.</p>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-tertiary shadow-[0_0_10px_rgba(233,196,0,0.5)]"></div>
                  <h4 className="text-white font-semibold">3. Av. Alfonso Ugarte</h4>
                  <p className="text-xs text-on-surface-variant mt-1">Vía principal hacia la Plaza Dos de Mayo. Columnas de carros alegóricos y colectivos.</p>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary-container shadow-[0_0_10px_rgba(189,0,255,0.5)]"></div>
                  <h4 className="text-white font-semibold">4. Av. Nicolás de Piérola</h4>
                  <p className="text-xs text-on-surface-variant mt-1">Ingreso al centro histórico hacia Av. Garcilaso de la Vega.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Collaborative Badges */}
            <ScrollReveal className="reveal-right stagger-2 flex items-center gap-4 pt-4 border-t border-outline-variant/20 flex-wrap">
              <span className="text-xs text-on-surface-variant">Organizan:</span>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-surface-container text-white border border-outline-variant/30">
                Colectivo Marcha del Orgullo
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-surface-container text-[#FFD700] border border-outline-variant/30">
                InterPride
              </span>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
