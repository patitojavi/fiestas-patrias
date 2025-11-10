import NavBar from "../components/NavBar";

export default function MainLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--azul)] via-white to-[var(--rojo)] flex flex-col">
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 pb-16 w-full">{children}</main>
      <footer className="py-6 mt-auto bg-white/90 backdrop-blur-sm festive-border">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-blue-900">
          <p>© {year} Celebrando Fiestas Patrias. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
