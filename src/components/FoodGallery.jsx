import empanada from "../assets/empanada.jpg";
import anticucho from "../assets/anticucho.jpg";
import mote from "../assets/mote.jpg";
import choripan from "../assets/choripan.jpg";

const foods = [
  { src: empanada, name: "Empanada" },
  { src: anticucho, name: "Anticuchos" },
  { src: mote, name: "Mote con Huesillos" },
  { src: choripan, name: "Choripán" },
];

export default function FoodGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {foods.map((f) => (
        <figure
          key={f.name}
          className="bg-white/90 festive-border p-3 text-center card-hover"
        >
          <img
            src={f.src}
            alt={f.name}
            className="w-24 h-24 object-contain mx-auto animate-floaty"
            draggable="false"
          />
          <figcaption className="mt-2 text-blue-900 font-semibold">{f.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
