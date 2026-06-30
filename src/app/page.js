import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Equipo from "@/components/Equipo";
import Proyectos from "@/components/Proyectos";
import Countdown from "@/components/Countdown";
import Recorrido from "@/components/Recorrido";
import Galeria from "@/components/Galeria";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Equipo />
        <Proyectos />
        <Countdown />
        <Recorrido />
        <Galeria />
      </main>
      <Footer />
    </>
  );
}
