"use client";

import { HeroSection } from "@components/sections/HeroSection";
import { SobreNosotrosSection } from "@components/sections/SobreNosotrosSection";
import { ProductosSection } from "@components/sections/ProductosSection";
import { DistribuidoraSection } from "@components/sections/DistribuidoraSection";
import { ContactoSection } from "@components/sections/ContactoSection";

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