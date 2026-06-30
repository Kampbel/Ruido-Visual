"use client";
import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    finished: false,
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-30T20:00:00-05:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft((prev) => ({ ...prev, finished: true }));
        return true; // stop timer
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
        finished: false,
      });
      return false;
    };

    const isDone = updateTimer();
    if (isDone) return;

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="documental" className="py-16 md:py-32 bg-atmo-galeria overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-sm text-secondary uppercase tracking-widest font-semibold">Estreno Exclusivo</span>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-white italic mt-2">Renacer en Tacones</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-white/70 mt-4 leading-relaxed">
              El viaje cinematográfico hacia el corazón de la transformación está a punto de comenzar. Sigue el cronómetro en tiempo real hacia el gran estreno de nuestro documental insignia.
            </p>
          </ScrollReveal>
        </div>

        {/* Countdown Card Container */}
        <ScrollReveal className="reveal-scale max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 md:p-12 border border-outline-variant/20 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-secondary/20 blur-3xl"></div>

            {timeLeft.finished ? (
              <div className="text-center py-6 animate-fade-in select-none">
                <span className="px-4 py-2 rounded-full text-xs font-bold bg-[#ecb2ff]/20 text-primary border border-primary/30">
                  ¡YA DISPONIBLE!
                </span>
                <h3 className="font-display text-4xl text-white mt-4 italic">Mira el documental completo</h3>
                <p className="text-on-surface-variant mt-2 max-w-md mx-auto">
                  El viaje hacia la metamorfosis de Diego ya está disponible en exclusiva.
                </p>
                <div className="mt-8 relative aspect-video max-w-2xl mx-auto rounded-2xl overflow-hidden glass-panel border border-outline-variant/30 group">
                  <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        play_arrow
                      </span>
                    </button>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/portada.png" className="w-full h-full object-cover" alt="Portada del documental" />
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-lg uppercase tracking-wider text-[#FFD700] mb-8 font-semibold">
                  El estreno comienza en
                </h3>

                {/* Grid values */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                  {/* Days */}
                  <div className="flex flex-col items-center p-4 bg-surface-container-lowest/60 rounded-2xl border border-outline-variant/10 shadow-lg">
                    <span className="font-display text-5xl md:text-6xl text-white font-bold tracking-tight">
                      {timeLeft.days}
                    </span>
                    <span className="text-xs uppercase text-on-surface-variant tracking-wider mt-2 font-semibold font-sans">
                      Días
                    </span>
                  </div>
                  {/* Hours */}
                  <div className="flex flex-col items-center p-4 bg-surface-container-lowest/60 rounded-2xl border border-outline-variant/10 shadow-lg">
                    <span className="font-display text-5xl md:text-6xl text-primary font-bold tracking-tight">
                      {timeLeft.hours}
                    </span>
                    <span className="text-xs uppercase text-on-surface-variant tracking-wider mt-2 font-semibold font-sans">
                      Horas
                    </span>
                  </div>
                  {/* Minutes */}
                  <div className="flex flex-col items-center p-4 bg-surface-container-lowest/60 rounded-2xl border border-outline-variant/10 shadow-lg">
                    <span className="font-display text-5xl md:text-6xl text-secondary font-bold tracking-tight">
                      {timeLeft.minutes}
                    </span>
                    <span className="text-xs uppercase text-on-surface-variant tracking-wider mt-2 font-semibold font-sans">
                      Minutos
                    </span>
                  </div>
                  {/* Seconds */}
                  <div className="flex flex-col items-center p-4 bg-surface-container-lowest/60 rounded-2xl border border-outline-variant/10 shadow-lg">
                    <span className="font-display text-5xl md:text-6xl text-[#e9c400] font-bold tracking-tight">
                      {timeLeft.seconds}
                    </span>
                    <span className="text-xs uppercase text-on-surface-variant tracking-wider mt-2 font-semibold font-sans">
                      Segundos
                    </span>
                  </div>
                </div>

                {/* Time Detail */}
                <p className="text-xs text-on-surface-variant/80 mt-8">
                  Estreno programado para el <span className="text-white font-semibold">Martes 30 de junio de 2026</span> a las{" "}
                  <span className="text-white font-semibold">8:00 PM (Hora de Lima)</span>.
                </p>

                {/* Subscribe Form */}
                <div className="mt-8 max-w-md mx-auto">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("¡Te has suscrito con éxito! Te enviaremos una notificación antes del estreno.");
                      e.target.reset();
                    }}
                    className="flex gap-2 p-1.5 rounded-full bg-surface-container border border-outline-variant/30"
                  >
                    <input
                      type="email"
                      placeholder="Tu correo electrónico"
                      required
                      className="flex-1 bg-transparent px-4 py-2 text-sm text-white focus:outline-none focus:ring-0 placeholder-on-surface-variant/50"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-full font-semibold text-xs text-white hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                      style={{ background: "linear-gradient(135deg, #bd00ff, #ff4b89)" }}
                    >
                      Notificarme
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
