import Flag from "../components/Flag";
import Countdown from "../components/Countdown";



export default function Home() {
  return (
    <>
      <header className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <Flag />
            <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white drop-shadow">
              ¿Cuántos <span className="whitespace-nowrap">días</span> faltan para el{" "}
              <span className="whitespace-nowrap">18 de septiembre?</span>
            </h1>
            <Flag />
          </div>
        </div>
      </header>

      <section className="festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover">
        <Countdown />
      </section>

    </>
  );
}
