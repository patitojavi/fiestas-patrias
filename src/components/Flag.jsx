
export default function Flag({ mirrored = false, size = 56 }) {

  const w = size * 1.6;
  const h = size;       

  return (
    <div
      className={`animate-wave ${
        mirrored ? "scale-x-[-1]" : ""
      }`}
      style={{ width: w, height: h }}
      aria-label="Bandera de Chile"
      role="img"
      title="Bandera de Chile"
    >

      <div className="w-full h-full rounded-md overflow-hidden shadow-md">

        <div className="w-full h-1/2 bg-white relative">

          <div className="absolute left-0 top-0 h-full aspect-square bg-[var(--azul)] grid place-items-center">
            {/* estrella simple */}
            <span className="text-white text-xl select-none">★</span>
          </div>
        </div>

        <div className="w-full h-1/2 bg-[var(--rojo)]" />
      </div>
    </div>
  );
}
