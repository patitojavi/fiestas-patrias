import Flag from "./components/Flag";
import Countdown from "./components/Countdown";
import FoodGallery from "./components/FoodGallery";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--azul)] via-white to-[var(--rojo)]">

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


        <section
          aria-hidden="true"
          className="mt-12 h-3 w-full rounded-full bg-gradient-to-r from-[var(--rojo)] via-white to-[var(--azul)]"
        />
      </main>


<footer className="py-6 mt-auto bg-white/90 backdrop-blur-sm festive-border">
  <div className="max-w-5xl mx-auto px-4 text-center text-sm text-blue-900">
    <p className="mb-3">
      © 2024 Celebrando Fiestas Patrias. Todos los derechos reservados.
    </p>

    <div className="flex justify-center gap-6">
      {/* GitHub */}
      <a
        href="https://github.com/patitojavi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-900 hover:text-[var(--rojo)] transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.76.08-.75.08-.75 1.22.09 1.87 1.25 1.87 1.25 1.08 1.84 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.33-5.48-5.92 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.82 5.61-5.5 5.91.43.38.82 1.12.82 2.26v3.35c0 .32.21.69.83.57A12 12 0 0 0 12 0Z" />
        </svg>
        <span className="font-semibold">GitHub</span>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/potitojavii/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-900 hover:text-[var(--rojo)] transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.6.1 4.6.3 3.8.6c-.9.3-1.7.8-2.5 1.6-.8.8-1.3 1.6-1.6 2.5-.3.8-.5 1.8-.6 3.2C-.1 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.4.3 2.4.6 3.2.3.9.8 1.7 1.6 2.5.8.8 1.6 1.3 2.5 1.6.8.3 1.8.5 3.2.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.4-.1 2.4-.3 3.2-.6.9-.3 1.7-.8 2.5-1.6.8-.8 1.3-1.6 1.6-2.5.3-.8.5-1.8.6-3.2.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.4-.3-2.4-.6-3.2-.3-.9-.8-1.7-1.6-2.5-.8-.8-1.6-1.3-2.5-1.6-.8-.3-1.8-.5-3.2-.6C15.7 0 15.3 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8m0 10.2a4 4 0 1 1 0-8.1 4 4 0 0 1 0 8.1zm6.4-11.5a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8z" />
        </svg>
        <span className="font-semibold">Instagram</span>
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}
