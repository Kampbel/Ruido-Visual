import ScrollReveal from "./ScrollReveal";

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-16 md:py-32 bg-atmo-resena">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-sm uppercase tracking-widest text-tertiary font-semibold">Nuestro Trabajo</span>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl text-white italic mt-2">Proyectos</h2>
          </ScrollReveal>
        </div>

        {/* Proyecto: Renacer en Tacones */}
        <ScrollReveal className="reveal-scale">
          <div className="glass-panel rounded-3xl overflow-hidden card-glow">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Renacer en Tacones — Documental"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  src="/portada.png"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/60 hidden md:block"></div>
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse"
                    style={{ background: "linear-gradient(135deg, #bd00ff, #ff4b89)", color: "#fff" }}
                  >
                    En Producción
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest text-tertiary mb-2 font-semibold font-sans">
                  Proyecto Documental
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-primary italic mb-4">El Universo de Isabella Caoba</h3>
                <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base">
                  La historia sigue a Diego, un joven de Lima Norte profundamente ligado a la iglesia católica que, tras perder a su madre durante la pandemia, cae en una crisis espiritual absoluta. En su búsqueda por sanar, descubre el arte drag y da vida a Isabella Caoba: un personaje que transforma el escenario en su nuevo hogar y el maquillaje en una armadura de resiliencia. A través de este renacimiento, Diego transmuta su dolor en arte y encuentra en la comunidad drag a su familia elegida.
                </p>

                <div className="flex flex-wrap gap-2.5 mb-8">
                  <span className="px-3 py-1 rounded-full text-xs border border-outline-variant/40 text-on-surface-variant font-sans">
                    Cine Documental
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs border border-outline-variant/40 text-on-surface-variant font-sans">
                    Identidad & Arte Drag
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs border border-outline-variant/40 text-on-surface-variant font-sans">
                    Lima Norte
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs border border-outline-variant/40 text-on-surface-variant font-sans">
                    Resiliencia
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between border-t border-outline-variant/20 pt-6">
                  <div>
                    <a
                      href="#documental"
                      className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold magnetic-btn w-fit text-sm"
                      style={{ background: "linear-gradient(135deg, #bd00ff 0%, #ff4b89 100%)", color: "#ffffff" }}
                    >
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        play_arrow
                      </span>
                      Ver documental
                    </a>
                  </div>

                  {/* Social Links Row */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase text-on-surface-variant tracking-wider font-semibold">Sigue:</span>
                    <div className="flex gap-2">
                      {/* Spotify */}
                      <a
                        href="https://open.spotify.com/intl-es/artist/7mDUIRzBtKpgaQs4i6U940?si=cC-ZWggBTqe63rVAzc44vg&nd=1&dlsi=83bdb2407ae8418e"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Spotify"
                        className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary hover:text-white hover:bg-[#1DB954] hover:border-transparent transition-all duration-300"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.31c-.22.36-.685.474-1.045.255-2.905-1.775-6.565-2.175-10.87-1.192-.41.094-.82-.164-.915-.575-.094-.41.164-.82.575-.915 4.71-1.077 8.745-.623 12.005 1.373.36.22.474.685.255 1.054zm1.465-3.26c-.276.45-.86.595-1.31.32-3.325-2.045-8.395-2.635-12.32-1.445-.505.15-1.035-.14-1.185-.645-.15-.505.14-1.035.645-1.185 4.5-.136 10.07.495 13.85 2.82.45.276.595.86.32 1.335zm.105-3.385c-3.99-2.37-10.57-2.59-14.37-1.435-.615.185-1.26-.17-1.445-.785-.185-.615.17-1.26.785-1.445 4.37-1.325 11.62-1.065 16.21 1.66.55.33.73 1.04.4 1.59-.33.55-1.04.73-1.59.4z" />
                        </svg>
                      </a>
                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/renacerentacones?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                        className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary hover:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent transition-all duration-300"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      {/* TikTok */}
                      <a
                        href="https://www.tiktok.com/@ruidovisual10?is_from_webapp=1&sender_device=pc"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="TikTok"
                        className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary hover:text-white hover:bg-[#000000] hover:border-transparent transition-all duration-300"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.52-4.06-1.39-.77-.57-1.39-1.33-1.85-2.2v8.28c-.02 2.23-.74 4.51-2.42 6.01-1.89 1.8-4.72 2.23-7.05 1.58-2.61-.74-4.79-2.97-5.26-5.69-.64-3.51 1.34-7.25 4.84-8.08 1.05-.27 2.15-.27 3.22-.05v4.11c-.81-.24-1.7-.22-2.48.16-1.24.54-1.92 1.94-1.63 3.28.27 1.29 1.5 2.22 2.8 2.14 1.48-.02 2.6-1.28 2.6-2.77V0z" />
                        </svg>
                      </a>
                      {/* Kick */}
                      <a
                        href="https://kick.com/taconesendirecto"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Kick"
                        className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary hover:text-black hover:bg-[#53fc18] hover:border-transparent transition-all duration-300"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
