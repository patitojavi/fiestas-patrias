import Flag from "./components/Flag";
import Countdown from "./components/Countdown";
import FoodGallery from "./components/FoodGallery";
import NavBar from "./components/NavBar";
import AdUnit from "./components/AdUnit";
import { ADSENSE_SLOTS } from "./config/adsense";

export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--azul)] via-white to-[var(--rojo)]">
      <NavBar />

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

      <main className="max-w-5xl mx-auto px-4 pb-16">
        {/* CONTADOR */}
        <section className="festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover">
          <Countdown />
        </section>
        <AdUnit slot={ADSENSE_SLOTS.heroBanner} format="auto" />

        {/* SOBRE EL 18 */}
        <section
          id="sobre"
          className="mt-10 festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            ¿Qué celebramos el 18 de septiembre?
          </h2>
          <p className="text-blue-900/90 leading-relaxed">
            En Chile, el 18 de septiembre conmemora la Primera Junta Nacional de Gobierno (1810),
            hito que marca el inicio del proceso de independencia. Más allá del hecho histórico,
            las Fiestas Patrias son una celebración cultural que reúne a familias y comunidades en torno a
            tradiciones como la cueca, las ramadas y la gastronomía típica. Esta página ofrece una cuenta
            regresiva y, además, información práctica para celebrar de forma informada, segura y con sentido
            de identidad.
          </p>
        </section>

        {/* TRADICIONES */}
        <section
          id="tradiciones"
          className="mt-10 festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Tradiciones y actividades</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-900/90">
            <li>
              <strong>Cueca:</strong> baile nacional. Muchas comunas organizan concursos y clases abiertas.
            </li>
            <li>
              <strong>Ramadas y fondas:</strong> espacios para bailar, comer y compartir en familia.
            </li>
            <li>
              <strong>Juegos típicos:</strong> volantines, emboque, tirar la cuerda, carrera de sacos, palo
              encebado.
            </li>
            <li>
              <strong>Desfiles y actos cívicos:</strong> instancia educativa para valorar la historia y los
              símbolos.
            </li>
            <li>
              <strong>Asados y encuentros:</strong> momento de convivencia, con foco en la seguridad y el
              autocuidado.
            </li>
          </ul>
        </section>
          <AdUnit
          slot={ADSENSE_SLOTS.inArticle}
          format="fluid"
          layout="in-article"
        />

        {/* GASTRONOMÍA + GALERÍA (UNIFICADAS) */}
        <section
          id="gastronomia"
          className="mt-10 festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover"
        >
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
            Comidas típicas de Fiestas Patrias
          </h2>

          {/* Intro + destacados breves */}
          <p className="text-blue-900/90 leading-relaxed mb-4 text-center">
            Además del contador, aquí destacamos algunos clásicos y una galería con imágenes.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-blue-900/90 mb-6">
            <div className="bg-white/80 p-4 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-900">Empanada de pino</h3>
              <p>
                Masa horneada con pino (carne, cebolla, especias), aceituna, huevo y, a veces, pasas.
              </p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-900">Anticuchos</h3>
              <p>Brochetas a la parrilla con trozos de carne, longaniza y verduras.</p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-900">Mote con huesillos</h3>
              <p>Bebida dulce con duraznos deshidratados y mote de trigo.</p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-900">Choripán</h3>
              <p>Pan con chorizo a la parrilla, muchas veces acompañado de pebre.</p>
            </div>
          </div>

          {/* Galería de imágenes */}
          <FoodGallery />
        </section>

        {/* Separador decorativo */}
        <section
          aria-hidden="true"
          className="mt-12 h-3 w-full rounded-full bg-gradient-to-r from-[var(--rojo)] via-white to-[var(--azul)]"
          role="presentation"
        />

        {/* FAQ */}
        <section
          id="faq"
          className="mt-10 festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Preguntas frecuentes</h2>
          <div className="space-y-4 text-blue-900/90">
            <details className="bg-white/80 p-4 rounded-xl border border-blue-100">
              <summary className="font-semibold cursor-pointer">
                ¿Por qué cambia el conteo si ya pasó el 18?
              </summary>
              <p>
                El contador apunta siempre al próximo 18 de septiembre. Si la fecha ya pasó este año,
                comienza la cuenta para el siguiente.
              </p>
            </details>
            <details className="bg-white/80 p-4 rounded-xl border border-blue-100">
              <summary className="font-semibold cursor-pointer">¿Qué zona horaria usa?</summary>
              <p>
                Usa la zona horaria local del dispositivo. Si necesitas precisión para Chile
                (America/Santiago), podemos integrar una librería de fechas.
              </p>
            </details>
            <details className="bg-white/80 p-4 rounded-xl border border-blue-100">
              <summary className="font-semibold cursor-pointer">
                ¿Puedo sugerir contenido o corregir datos?
              </summary>
              <p>¡Sí! Escríbeme en la sección de contacto con tus sugerencias o fuentes.</p>
            </details>
          </div>
        </section>

        {/* CRÉDITOS Y FUENTES */}
        <section className="mt-10 festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Créditos y fuentes</h2>
          <p className="text-blue-900/90">
            Este sitio fue creado con fines informativos y de celebración cultural. Para ampliar
            información histórica y cultural, revisa sitios oficiales y materiales educativos chilenos.
          </p>
          <ul className="list-disc pl-6 mt-3 text-blue-900/90">
            <li>Biblioteca Nacional de Chile (historia y patrimonio cultural).</li>
            <li>Sitios de municipalidades y ministerios con programas de Fiestas Patrias.</li>
            <li>Compilaciones gastronómicas chilenas y recetarios tradicionales.</li>
          </ul>
        </section>

        {/* PRIVACIDAD */}
        <section
          id="privacidad"
          className="mt-10 festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Política de Privacidad</h2>
          <p className="text-blue-900/90 leading-relaxed">
            Este sitio utiliza cookies y tecnologías similares para mejorar la experiencia de
            navegación. Podemos mostrar anuncios de terceros (por ejemplo, Google AdSense) que usan
            cookies para mostrar anuncios basados en tus visitas previas a este y/u otros sitios.
            Puedes inhabilitar la publicidad personalizada visitando la{" "}
            <a
              className="text-[var(--azul)] underline"
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Configuración de anuncios de Google
            </a>
            . Para más detalles sobre cómo Google usa los datos, consulta la{" "}
            <a
              className="text-[var(--azul)] underline"
              href="https://policies.google.com/technologies/partner-sites?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              política de socios
            </a>
            .
          </p>
          <ul className="list-disc pl-6 mt-3 text-blue-900/90">
            <li>No recopilamos información personal identificable directamente.</li>
            <li>Los proveedores de anuncios pueden usar cookies o identificadores anónimos.</li>
            <li>Puedes bloquear o borrar cookies desde la configuración de tu navegador.</li>
          </ul>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          className="mt-10 festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Contacto</h2>
          <p className="text-blue-900/90">¿Tienes sugerencias o encontraste un error? Escríbeme:</p>
          <ul className="mt-2 text-blue-900/90">
            <li>
              GitHub:{" "}
              <a
                className="text-[var(--azul)] underline"
                href="https://github.com/patitojavi"
                target="_blank"
                rel="noopener noreferrer"
              >
                patitojavi
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                className="text-[var(--azul)] underline"
                href="https://www.instagram.com/potitojavii/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @potitojavii
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="py-6 mt-auto bg-white/90 backdrop-blur-sm festive-border">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-blue-900">
          <p>© {year} Celebrando Fiestas Patrias. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
