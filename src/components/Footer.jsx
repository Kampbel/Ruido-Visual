export default function Footer() {
  return (
    <>
      {/* Redes Sociales Grid */}
      <section className="py-12" style={{ background: "linear-gradient(to bottom, #1d0c25, #18071f)" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl text-primary mb-6 font-display italic">Sigue la transformación</h2>
          <div className="flex justify-center gap-6">
            <a
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary hover:text-white hover:bg-primary-container transition-all"
              href="https://www.instagram.com/renacerentacones?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary hover:text-white hover:bg-primary-container transition-all"
              href="#"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary hover:text-white hover:bg-primary-container transition-all"
              href="https://www.tiktok.com/@ruidovisual10?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.52-4.06-1.39-.77-.57-1.39-1.33-1.85-2.2v8.28c-.02 2.23-.74 4.51-2.42 6.01-1.89 1.8-4.72 2.23-7.05 1.58-2.61-.74-4.79-2.97-5.26-5.69-.64-3.51 1.34-7.25 4.84-8.08 1.05-.27 2.15-.27 3.22-.05v4.11c-.81-.24-1.7-.22-2.48.16-1.24.54-1.92 1.94-1.63 3.28.27 1.29 1.5 2.22 2.8 2.14 1.48-.02 2.6-1.28 2.6-2.77V0z" />
              </svg>
            </a>
            <a
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary hover:text-black hover:bg-[#53fc18] transition-all"
              href="https://kick.com/taconesendirecto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kick"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer corporativo */}
      <footer className="border-t border-outline-variant/20 py-12 bg-atmo-footer">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="italic text-primary font-display text-xl">Renacer en Tacones</div>
            <p className="text-on-surface-variant text-sm">
              © 2025 Renacer en Tacones. Narrativas que transforman.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="https://www.instagram.com/renacerentacones?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-secondary transition-colors"
            >
              Instagram
            </a>
            <a href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
              YouTube
            </a>
            <a
              href="https://www.tiktok.com/@ruidovisual10?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-secondary transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://kick.com/taconesendirecto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-secondary transition-colors"
            >
              Kick
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
