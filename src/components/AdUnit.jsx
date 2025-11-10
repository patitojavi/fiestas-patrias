import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT } from "../config/adsense";

/**
 * AdSense <ins> wrapper para React.
 * Props:
 * - slot: string (requerido) -> tu data-ad-slot (ID del bloque de anuncio)
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
    const el = ref.current;
    if (!el || !slot) return;


    if (el.getAttribute("data-adsbygoogle-status")) return;

    const pushAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {

      }
    };

    const script = document.querySelector(
      'script[src*="pagead/js/adsbygoogle.js"]'
    );

    const alreadyLoaded = Boolean(window.adsbygoogle?.loaded);

    if (script) {
      if (alreadyLoaded) {
        script.dataset.loaded = "true";
        pushAd();
      } else if (script.dataset.loaded !== "true") {
        const onLoad = () => {
          script.dataset.loaded = "true";
          pushAd();
        };
        script.addEventListener("load", onLoad, { once: true });
        return () => script.removeEventListener("load", onLoad);
      }
    } else {

      const s = document.createElement("script");
      s.async = true;
      s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
        ADSENSE_CLIENT
      )}`;
      s.crossOrigin = "anonymous";
      s.onload = pushAd;
      document.head.appendChild(s);
    }


    if (alreadyLoaded) pushAd();
  }, [slot, format, layout]);

  return (
    <div className="my-6">
      {showLabel && (
        <div className="text-xs uppercase tracking-wider font-semibold text-blue-900 mb-2">
          Publicidad
        </div>
      )}

      <div className={`festive-border bg-white/90 p-2 ${className}`}>


        <ins
          ref={ref}
          className="adsbygoogle block mx-auto"
          style={{
            display: "block",
            textAlign: "center",

            minHeight: format === "fluid" ? 140 : 90,
          }}
          data-ad-client={ADSENSE_CLIENT}      
          data-ad-slot={String(slot || "")}     
          data-ad-format={format}              
          data-full-width-responsive="true"
          {...(format === "fluid" && layout
            ? { "data-ad-layout": layout }   
            : {})}
        />
      </div>

      <noscript>
        <div className="text-sm text-blue-900/80">
          Activa JavaScript para ver anuncios.
        </div>
      </noscript>
    </div>
  );
}
