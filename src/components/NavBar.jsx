export default function NavBar() {
  const link =
    "px-3 py-2 rounded-md text-sm font-semibold text-white hover:bg-white/15 transition";
  return (
    <nav className="bg-blue-900/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-12">
        <a href="#inicio" className="text-white font-extrabold">18 Sept 🇨🇱</a>
        <div className="flex gap-1">
          <a href="#sobre" className={link}>Sobre el 18</a>
          <a href="#tradiciones" className={link}>Tradiciones</a>
          <a href="#gastronomia" className={link}>Gastronomía</a>
          <a href="#faq" className={link}>FAQ</a>
          <a href="#privacidad" className={link}>Privacidad</a>
          <a href="#contacto" className={link}>Contacto</a>
        </div>
      </div>
    </nav>
  );
}
