"use client";
import InicioSection from "./components/InicioSection";
import SobreNosotrosSection from "./components/SobreNosotrosSection";
import ProductosSection from "./components/ProductosSection";
import DistribuidoraSection from "./components/DistribuidoraSection";
import ContactoSection from "./components/ContactoSection";

export default function LandingPage() {
  return (
    <main>
      <InicioSection />
      <SobreNosotrosSection />
      <ProductosSection />
      <DistribuidoraSection />
      <ContactoSection />
    </main>
  );
} 