import Flag from "./components/Flag";
import Countdown from "./components/Countdown";
import FoodGallery from "./components/FoodGallery";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--azul)] via-white to-[var(--rojo)]">
      {/* Cabecera con bandera animada */}
      <header className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <Flag />
            <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white drop-shadow">
              ¿Cuántos dias faltan para el <span className="whitespace-nowrap">18 de septiembre?</span>
            </h1>
            <Flag />
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-5xl mx-auto px-4 pb-16">
        <section className="festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover">
          <Countdown />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
            Comidas típicas de Fiestas Patrias
          </h2>
          <FoodGallery />
        </section>

        {/* Franja inferior decorativa */}
        <section
          aria-hidden="true"
          className="mt-12 h-3 w-full rounded-full bg-gradient-to-r from-[var(--rojo)] via-white to-[var(--azul)]"
        />
      </main>

      {/* Pie simple */}
      <footer className=" py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-blue-900">
          © 2024 Celebrando Fiestas Patrias. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
