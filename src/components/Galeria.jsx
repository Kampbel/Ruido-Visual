import ScrollReveal from "./ScrollReveal";

export default function Galeria() {
  return (
    <section id="galeria" className="py-16 md:py-32 bg-atmo-galeria">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <ScrollReveal>
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">Mundo Visual</span>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl text-white italic mt-2">Una ventana al brillo</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Una crónica visual que captura la estética, el misticismo y la magia técnica que dan forma a Renacer en Tacones en cada toma.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
          {/* Main vertical card spanning 2 columns and 2 rows */}
          <ScrollReveal className="md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl relative group gallery-item reveal-scale stagger-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Escena amplia"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src="/img/tomas/Copia de DSC00778.JPG"
              loading="lazy"
            />
          </ScrollReveal>

          {/* Top-right card spanning 2 columns */}
          <ScrollReveal className="md:col-span-2 overflow-hidden rounded-2xl relative group gallery-item reveal-scale stagger-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Primer plano ojo"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src="/img/tomas/Copia de DSC00783.JPG"
              loading="lazy"
            />
          </ScrollReveal>

          {/* Bottom-right card 1 */}
          <ScrollReveal className="overflow-hidden rounded-2xl relative group gallery-item reveal-scale stagger-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Tacones"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src="/img/tomas/Copia de DSC00787.JPG"
              loading="lazy"
            />
          </ScrollReveal>

          {/* Bottom-right card 2 */}
          <ScrollReveal className="overflow-hidden rounded-2xl relative group gallery-item reveal-scale stagger-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Backstage"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src="/img/tomas/Copia de DSC00791.JPG"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
