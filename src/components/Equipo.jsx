"use client";
import { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const teamMembers = [
  {
    name: "Kristel Zapata",
    role: "Director & Visionario",
    quote: "Cada cuadro cuenta una historia",
    image: "/img/Kristel_zapata.webp",
  },
  {
    name: "Josué Valenzuela",
    role: "Producción General",
    quote: "La producción es el alma invisible",
    image: "/img/Josue.webp",
  },
  {
    name: "Andrea Belleza",
    role: "Dirección de Arte",
    quote: "El arte visual define el tono",
    image: "/img/Andrea_beleza.webp",
  },
  {
    name: "Alejandra Aparicio",
    role: "Asistente de Producción",
    quote: "Cada detalle cuenta",
    image: "/img/Alejandra_Aparicio.webp",
  },
  {
    name: "Pedro Roalcaba",
    role: "Asistente de Producción",
    quote: "Siempre en movimiento",
    image: "/img/Pedro_Roalcaba.webp",
  },
  {
    name: "Brayan Carrión",
    role: "Iluminación",
    quote: "La luz lo es todo",
    image: "/img/Brayan_carrion.webp",
  },
  {
    name: "Freddy Gonzáles",
    role: "Camarógrafo",
    quote: "El lente nunca miente",
    image: "/img/Fredy_gonzales.webp",
  },
];

export default function Equipo() {
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  
  const trackRef = useRef(null);
  const gap = 24; // 24px gap

  const updateLayout = () => {
    if (window.innerWidth >= 1024) {
      setVisibleCount(3);
    } else if (window.innerWidth >= 640) {
      setVisibleCount(2);
    } else {
      setVisibleCount(1);
    }
    if (trackRef.current && trackRef.current.children.length > 0) {
      setCardWidth(trackRef.current.children[0].getBoundingClientRect().width);
    }
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    // Extra timeout to ensure DOM is settled
    const timer = setTimeout(updateLayout, 100);
    return () => {
      window.removeEventListener("resize", updateLayout);
      clearTimeout(timer);
    };
  }, []);

  const getMaxIndex = () => {
    return Math.max(0, teamMembers.length - visibleCount);
  };

  const handlePrev = () => {
    const maxIdx = getMaxIndex();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIdx));
  };

  const handleNext = () => {
    const maxIdx = getMaxIndex();
    setCurrentIndex((prev) => (prev < maxIdx ? prev + 1 : 0));
  };

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      const maxIdx = getMaxIndex();
      setCurrentIndex((prev) => (prev < maxIdx ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, visibleCount]);

  // Drag Support
  const getPositionX = (e) => {
    return e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
  };

  const dragStart = (e) => {
    setIsDragging(true);
    setStartX(getPositionX(e));
    setPaused(true);
  };

  const dragMove = (e) => {
    if (!isDragging) return;
    const currentX = getPositionX(e);
    setDragOffset(currentX - startX);
  };

  const dragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    setPaused(false);
    
    const endX = e.type.includes("touch") ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - startX;
    const threshold = 50;
    const maxIdx = getMaxIndex();

    if (diff < -threshold && currentIndex < maxIdx) {
      setCurrentIndex((prev) => prev + 1);
    } else if (diff > threshold && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    setDragOffset(0);
  };

  // Calculate current translation
  const maxIdx = getMaxIndex();
  const clampedIndex = Math.min(currentIndex, maxIdx);
  const translation = -clampedIndex * (cardWidth + gap) + dragOffset;

  return (
    <section id="equipo" className="py-16 md:py-32 bg-atmo-colaboradores">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <ScrollReveal>
              <span className="text-sm text-tertiary uppercase tracking-widest font-semibold">El Equipo</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl text-white font-display italic">Las mentes detrás del renacer</h2>
            </ScrollReveal>
          </div>
          <div className="flex items-center gap-4">
            <ScrollReveal>
              <p className="max-w-sm text-white/80 hidden md:block text-sm">
                Profesionales apasionados que transforman ideas en experiencias audiovisuales inolvidables.
              </p>
            </ScrollReveal>
            {/* Carousel Arrows */}
            <ScrollReveal className="flex gap-2">
              <button
                onClick={handlePrev}
                aria-label="Anterior"
                className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-primary hover:text-white hover:bg-primary-container transition-all magnetic-btn"
              >
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <button
                onClick={handleNext}
                aria-label="Siguiente"
                className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-primary hover:text-white hover:bg-primary-container transition-all magnetic-btn"
              >
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </ScrollReveal>
          </div>
        </div>

        {/* Carousel Track */}
        <ScrollReveal>
          <div
            id="team-carousel"
            className="relative overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(${translation}px)`,
                cursor: isDragging ? "grabbing" : "grab",
                transition: isDragging ? "none" : "transform 0.5s ease-out",
              }}
              onMouseDown={dragStart}
              onTouchStart={dragStart}
              onMouseMove={dragMove}
              onTouchMove={dragMove}
              onMouseUp={dragEnd}
              onMouseLeave={dragEnd}
              onTouchEnd={dragEnd}
            >
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="carousel-card flex-shrink-0 w-[280px] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group card-glow select-none"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-xl mb-4 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                      src={member.image}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-xs italic">"{member.quote}"</p>
                    </div>
                  </div>
                  <h3 className="text-xl text-primary font-display">{member.name}</h3>
                  <p className="uppercase text-xs text-on-surface-variant tracking-wider mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Carousel Dots */}
        <ScrollReveal className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === clampedIndex ? "bg-primary w-6" : "bg-outline-variant/40 w-2"
              }`}
              aria-label={`Ir al slide ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
