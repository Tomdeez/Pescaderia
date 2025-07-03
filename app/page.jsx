"use client";

import HeroSection from "./components/HeroSection";
import SobreNosotrosSection from "./components/SobreNosotrosSection";
import ProductosSection from "./components/ProductosSection";
import DistribuidoraSection from "./components/DistribuidoraSection";
import ContactoSection from "./components/ContactoSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <main>
        <SobreNosotrosSection />
        <ProductosSection />
        <DistribuidoraSection />
        <ContactoSection />
      </main>
    </>
  );
}
