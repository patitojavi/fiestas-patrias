import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkBase =
    "px-3 py-2 rounded-lg text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70";
  const active = ({ isActive }) =>
    `${linkBase} ${isActive ? "bg-white/70 text-blue-900" : "text-white hover:bg-white/30 hover:text-blue-900"}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-blue-900/70 border-b border-blue-800">

      <nav
        className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between"
        aria-label="Principal"
      >
        <Link
          to="/"
          className="text-white font-extrabold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-lg"
        >
          Fiestas Patrias
        </Link>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:bg-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menú</span>
          {!open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>

        <div className="hidden md:flex gap-2">
          <NavLink to="/" className={active} end>Inicio</NavLink>
          <NavLink to="/sobre" className={active}>Sobre</NavLink>
          <NavLink to="/tradiciones" className={active}>Tradiciones</NavLink>
          <NavLink to="/gastronomia" className={active}>Gastronomía</NavLink>
          <NavLink to="/faq" className={active}>FAQ</NavLink>
          <NavLink to="/privacidad" className={active}>Privacidad</NavLink>
          <NavLink to="/contacto" className={active}>Contacto</NavLink>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-3 pt-1 flex flex-col gap-1 bg-blue-900/70 border-t border-blue-800">
          <NavLink to="/" className={active} end onClick={() => setOpen(false)}>
            Inicio
          </NavLink>
          <NavLink to="/sobre" className={active} onClick={() => setOpen(false)}>
            Sobre
          </NavLink>
          <NavLink to="/tradiciones" className={active} onClick={() => setOpen(false)}>
            Tradiciones
          </NavLink>
          <NavLink to="/gastronomia" className={active} onClick={() => setOpen(false)}>
            Gastronomía
          </NavLink>
          <NavLink to="/faq" className={active} onClick={() => setOpen(false)}>
            FAQ
          </NavLink>
          <NavLink to="/privacidad" className={active} onClick={() => setOpen(false)}>
            Privacidad
          </NavLink>
          <NavLink to="/contacto" className={active} onClick={() => setOpen(false)}>
            Contacto
          </NavLink>
        </div>
      </div>
    </header>
  );
}
