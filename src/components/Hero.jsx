export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 hero-grain">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 cinematic-gradient z-20"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Renacer en tacones"
          className="w-full h-full object-cover"
          src="/portada.png"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex flex-col items-start gap-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#FFD700] font-bold hero-anim-1">Una Odisea Visual</span>
          <h1 className="font-display text-6xl md:text-[112px] leading-tight italic neon-text neon-pulse hero-anim-2">
            Renacer<br />
            <span className="text-white font-black ml-8" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
              en tacones
            </span>
          </h1>
          <p className="text-lg text-white max-w-lg hero-anim-3" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
            Un viaje cinematográfico hacia el corazón de la transformación. Descubre el arte, la lucha y el brillo eterno que reside bajo las luces de neón.
          </p>
          <div className="flex gap-4 mt-6 hero-anim-4">
            <a
              href="#documental"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold magnetic-btn"
              style={{ background: "linear-gradient(135deg, #bd00ff 0%, #ff4b89 100%)", color: "#ffffff" }}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                play_arrow
              </span>
              Ver documental
            </a>
            <a
              href="#nosotros"
              className="px-6 py-3 border-2 border-[#FFD700] text-[#FFD700] rounded-full font-semibold hover:bg-[#FFD700]/10 magnetic-btn"
            >
              Descubre más
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-80 scroll-bounce">
        <span className="text-[10px] tracking-widest uppercase text-white font-semibold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        <span className="material-symbols-outlined text-primary text-sm">expand_more</span>
      </div>
    </section>
  );
}
