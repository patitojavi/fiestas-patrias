import { useEffect, useRef } from "react";

/**
 * AdSense <ins> wrapper para React.
 * Props:
 * - slot: string (requerido) -> tu data-ad-slot
 * - format: "auto" | "fluid" (por defecto "auto")
 * - layout: e.g. "in-article" (solo cuando format="fluid")
 * - className: clases adicionales de Tailwind
 * - showLabel: boolean (muestra "Publicidad")
 */
export default function AdUnit({
  slot,
  format = "auto",
  layout,
  className = "",
  showLabel = true,
}) {
  const ref = useRef(null);

  useEffect(() => {
    // Evita múltiples push en el mismo <ins>
    const el = ref.current;
    if (!el) return;
    // Si AdSense ya marcó el elemento, no reenviar
    if (el.getAttribute("data-adsbygoogle-status")) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Silencioso: en local o con AdBlock es normal
      // console.debug("AdSense push error:", e);
    }
  }, []);

  return (
    <div className={`my-6`}>
      {showLabel && (
        <div className="text-xs uppercase tracking-wider font-semibold text-blue-900 mb-2">
          Publicidad
        </div>
      )}

      <div className={`festive-border bg-white/90 p-2 ${className}`}>
        <ins
          ref={ref}
          className="adsbygoogle block mx-auto"
          style={{ display: "block", textAlign: "center", minHeight: 90 }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"    /* <-- tu ca-pub */
          data-ad-slot={slot}                         /* <-- tu slot numérico */
          data-ad-format={format}
          data-full-width-responsive="true"
          {...(format === "fluid" && layout
            ? { "data-ad-layout": layout }
            : {})}
        />
      </div>

      {/* Fallback mínimo por si hay AdBlock o aún no aprueban */}
      <noscript>
        <div className="text-sm text-blue-900/80">
          Activa JavaScript para ver anuncios.
        </div>
      </noscript>
    </div>
  );
}
