import { Playfair_Display, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-label",
  display: "swap",
});

export const metadata = {
  title: "Renacer en Tacones — Productora Audiovisual",
  description: "Creamos narrativas visuales que trascienden la pantalla. Somos una productora audiovisual comprometida con historias que importan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        {/* Load Material Symbols Outlined */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      </head>
      <body className={`${playfair.variable} ${plusJakarta.variable} ${spaceGrotesk.variable} bg-surface text-on-surface font-body overflow-x-hidden selection:bg-primary-container selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
