export default function Privacidad() {
  return (
    <section className="mt-10 festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Política de Privacidad</h2>
      <p className="text-blue-900/90 leading-relaxed">
        Este sitio puede mostrar anuncios de terceros (p. ej., Google AdSense) que usan cookies...
        Puedes administrar la personalización en la configuración de anuncios de Google.
      </p>
      <ul className="list-disc pl-6 mt-3 text-blue-900/90">
        <li>No recopilamos información personal identificable directamente.</li>
        <li>Proveedores de anuncios pueden usar identificadores anónimos.</li>
        <li>Puedes bloquear o borrar cookies desde tu navegador.</li>
      </ul>
    </section>
  );
}
