import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";


import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Tradiciones from "./pages/Tradiciones";
import Gastronomia from "./pages/Gastronomia";
import FAQ from "./pages/FAQ";
import Privacidad from "./pages/Privacidad";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/tradiciones" element={<Tradiciones />} />
        <Route path="/gastronomia" element={<Gastronomia />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}
