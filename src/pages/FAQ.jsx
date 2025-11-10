export default function FAQ() {
  return (
    <section className="mt-10 festive-border bg-white/90 backdrop-blur p-6 md:p-10 card-hover">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Preguntas frecuentes</h2>
      <div className="space-y-4 text-blue-900/90">
        <details className="bg-white/80 p-4 rounded-xl border border-blue-100">
          <summary className="font-semibold cursor-pointer">¿Por qué cambia el conteo si ya pasó el 18?</summary>
          <p>La cuenta regresiva siempre apunta al próximo 18 de septiembre. ¡Nunca dejamos de esperar!</p>
        </details>
        <details className="bg-white/80 p-4 rounded-xl border border-blue-100">
          <summary className="font-semibold cursor-pointer">¿Qué zona horaria usa?</summary>
          <p>Usa la zona horaria de tu dispositivo. Para mayor precisión en Chile, asegúrate de tener configurada la zona "America/Santiago".</p>
        </details>
        {/* --- Aquí están las nuevas preguntas --- */}
        <details className="bg-white/80 p-4 rounded-xl border border-blue-100">
          <summary className="font-semibold cursor-pointer">¿Qué se celebra exactamente?</summary>
          <p>El 18 de septiembre se conmemora el aniversario de la Primera Junta Nacional de Gobierno de Chile, realizada en 1810. Es el inicio del proceso de independencia del país.</p>
        </details>
        <details className="bg-white/80 p-4 rounded-xl border border-blue-100">
          <summary className="font-semibold cursor-pointer">¿El 19 también es feriado?</summary>
          <p>¡Sí! El 19 de septiembre se celebran las Glorias del Ejército de Chile, y también es feriado irrenunciable.</p>
        </details>
      </div>
    </section>
  );
}