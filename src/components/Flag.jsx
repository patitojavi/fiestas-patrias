export default function Flag({ mirrored = false, size }) {

  const style = size
    ? { width: size * 1.6, height: 'auto' }
    : undefined;

  return (
    <div
      className={`animate-wave ${mirrored ? 'scale-x-[-1]' : ''} shrink-0 rounded-md shadow-md overflow-hidden`}
      style={style}
      aria-label="Bandera de Chile"
      role="img"
      title="Bandera de Chile"
    >
      <svg
        viewBox="0 0 16 10"          // relación 1.6:1
        className={`${size ? '' : 'w-[clamp(32px,10vw,80px)]'} h-auto block`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="16" height="5" fill="#ffffff" />
        <rect x="0" y="0" width="5" height="5" fill="var(--azul)" />
        <polygon
          points="2.5,1.2 2.9,2.2 4,2.2 3.1,2.8 3.4,3.8 2.5,3.2 1.6,3.8 1.9,2.8 1,2.2 2.1,2.2"
          fill="#ffffff"
        />
        <rect x="0" y="5" width="16" height="5" fill="var(--rojo)" />
      </svg>
    </div>
  );
}
