"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-[#FFD700]/10 h-20 transition-all duration-300 ${
          scrolled ? "bg-surface/95 shadow-lg" : "bg-surface/80"
        }`}
      >
        <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto h-full">
          <div className="font-display text-2xl text-primary italic">Renacer en Tacones</div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm uppercase tracking-widest text-white border-b-2 border-[#FFD700] pb-1 font-semibold">
              Inicio
            </a>
            <a href="#nosotros" className="text-sm text-[#d4c0d7] hover:text-white transition-colors">
              Nosotros
            </a>
            <a href="#equipo" className="text-sm text-[#d4c0d7] hover:text-white transition-colors">
              Equipo
            </a>
            <a href="#proyectos" className="text-sm text-[#d4c0d7] hover:text-white transition-colors">
              Proyectos
            </a>
            <a href="#recorrido" className="text-sm text-[#d4c0d7] hover:text-white transition-colors">
              Recorrido
            </a>
            <a href="#galeria" className="text-sm text-[#d4c0d7] hover:text-white transition-colors">
              Galería
            </a>
          </nav>
          
          <a
            href="#documental"
            className="px-5 py-2 bg-primary-container text-white rounded-full hidden md:inline-flex items-center justify-center glow-hover font-semibold text-sm transition-all"
          >
            Ver Documental
          </a>
          
          <button
            className="md:hidden p-3 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-surface/98 backdrop-blur-2xl transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-xl">
          <a
            href="#inicio"
            onClick={() => setMenuOpen(false)}
            className="text-white font-display italic hover:text-primary transition-colors"
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            onClick={() => setMenuOpen(false)}
            className="text-white font-display italic hover:text-primary transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#equipo"
            onClick={() => setMenuOpen(false)}
            className="text-white font-display italic hover:text-primary transition-colors"
          >
            Equipo
          </a>
          <a
            href="#proyectos"
            onClick={() => setMenuOpen(false)}
            className="text-white font-display italic hover:text-primary transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#recorrido"
            onClick={() => setMenuOpen(false)}
            className="text-white font-display italic hover:text-primary transition-colors"
          >
            Recorrido
          </a>
          <a
            href="#galeria"
            onClick={() => setMenuOpen(false)}
            className="text-white font-display italic hover:text-primary transition-colors"
          >
            Galería
          </a>
          
          <a
            href="#documental"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-6 py-3 bg-primary-container text-white rounded-full inline-flex items-center justify-center font-semibold text-sm"
          >
            Ver Documental
          </a>
        </nav>
      </div>
    </>
  );
}
