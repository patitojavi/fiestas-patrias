import FoodGallery from "../components/FoodGallery.jsx";



export default function Gastronomia() {
  return (
    <section className="mt-10 festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
        Comidas típicas de Fiestas Patrias
      </h2>

      <p className="text-blue-900/90 leading-relaxed mb-4 text-center">
        Algunos clásicos y una galería con imágenes.
      </p>

      <div className="grid md:grid-cols-2 gap-4 text-blue-900/90 mb-6">
        <div className="bg-white/80 p-4 rounded-xl border border-blue-100">
          <h3 className="font-bold text-blue-900">Empanada de pino</h3>
          <p>Masa horneada con pino, aceituna y huevo.</p>
        </div>
        <div className="bg-white/80 p-4 rounded-xl border border-blue-100">
          <h3 className="font-bold text-blue-900">Anticuchos</h3>
          <p>Brochetas a la parrilla de carne y verduras.</p>
        </div>
        <div className="bg-white/80 p-4 rounded-xl border border-blue-100">
          <h3 className="font-bold text-blue-900">Mote con huesillos</h3>
          <p>Bebida dulce con duraznos deshidratados y mote.</p>
        </div>
        <div className="bg-white/80 p-4 rounded-xl border border-blue-100">
          <h3 className="font-bold text-blue-900">Choripán</h3>
          <p>Pan con chorizo, a veces con pebre.</p>
        </div>
      </div>

      <FoodGallery />
    </section>
  );
}
