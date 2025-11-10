export default function Contacto() {
  return (
    <section className="mt-10 festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Contacto</h2>
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
  );
}
