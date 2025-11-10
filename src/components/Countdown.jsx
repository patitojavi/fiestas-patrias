import { useEffect, useMemo, useState } from "react";

function getNextSept18(now = new Date()) {
  const y = now.getFullYear();
  const targetThisYear = new Date(y, 8, 18); 
  targetThisYear.setHours(0, 0, 0, 0);
  if (now <= targetThisYear) return targetThisYear;

  const nextYear = new Date(y + 1, 8, 18);
  nextYear.setHours(0, 0, 0, 0);
  return nextYear;
}

function diffParts(now, target) {
  const ms = Math.max(0, target.getTime() - now.getTime());
  const dayMS = 1000 * 60 * 60 * 24;
  const hourMS = 1000 * 60 * 60;
  const minMS = 1000 * 60;

  const days = Math.floor(ms / dayMS);
  const hours = Math.floor((ms % dayMS) / hourMS);
  const minutes = Math.floor((ms % hourMS) / minMS);
  const seconds = Math.floor((ms % minMS) / 1000);

  const totalDays = Math.ceil(ms / dayMS);
  return { totalDays, days, hours, minutes, seconds };
}

const nf = new Intl.NumberFormat("es-CL");

export default function Countdown() {
  const target = useMemo(() => getNextSept18(), []);
  const [now, setNow] = useState(() => new Date());
  const [parts, setParts] = useState(() => diffParts(new Date(), target));

  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setNow(n);
      setParts(diffParts(n, target));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const { totalDays, days, hours, minutes, seconds } = parts;


  const isToday =
    new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() ===
    new Date(target.getFullYear(), target.getMonth(), target.getDate()).getTime();

  return (
    <div className="text-center">
      <p className="text-blue-900 font-semibold mb-2">
        Próxima celebración:{" "}
        <span className="underline decoration-[var(--rojo)] decoration-4 underline-offset-4">
          {target.toLocaleDateString("es-CL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </p>


      <div className="inline-flex items-center gap-4 mb-6" aria-live="polite">
        <div className="rounded-2xl bg-gradient-to-b from-white to-blue-50 festive-border px-8 py-6">
          <div className="text-6xl md:text-7xl font-black text-blue-900 leading-none">
            {isToday ? "🎉" : nf.format(totalDays)}
          </div>
          <div className="mt-1 text-sm uppercase tracking-widest text-blue-800">
            {isToday ? "¡YA ES 18!" : "días totales"}
          </div>
        </div>
        <div className="text-left">
          <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900">
            {isToday ? "¡A celebrar Fiestas Patrias! 🇨🇱" : "¡Se vienen las Fiestas Patrias!"}
          </h3>
          <p className="text-blue-800/90 mt-1 max-w-md">
            {isToday
              ? "SALUUUUD! 🥳🍷🌭🎊"
              : "¡Que no falte la empaná!"}
          </p>
        </div>
      </div>


      <div className="bg-white/90 festive-border p-5 card-hover">

        <p className="text-xl md:text-2xl font-black text-blue-900 tracking-wide tabular-nums">
          {isToday
            ? "¡Es hoy! 🇨🇱"
            : `Faltan ${nf.format(days)} días con ${nf.format(hours)} horas y ${nf.format(
                minutes
              )} minutos con ${nf.format(seconds)} segundos`}
        </p>
      </div>
    </div>
  );
}
