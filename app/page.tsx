import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { HeroSection } from "@components/sections/HeroSection";

// Lazy load sections
const ProductosSection = dynamic(() => import("@components/sections/ProductosSection"), {
  loading: () => <div className="h-96 flex items-center justify-center">Cargando...</div>
});

const RecetasSection = dynamic(() => import("@components/sections/RecetasSection"), {
  loading: () => <div className="h-96 flex items-center justify-center">Cargando...</div>
});

const DistribuidoraSection = dynamic(() => import("@components/sections/DistribuidoraSection"), {
  loading: () => <div className="h-96 flex items-center justify-center">Cargando...</div>
});

const ContactoSection = dynamic(() => import("@components/sections/ContactoSection"), {
  loading: () => <div className="h-96 flex items-center justify-center">Cargando...</div>
});

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <main>
        <article className="flex flex-col gap-16">
          <section id="productos" className="bg-slate-50">
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
              <ProductosSection />
            </Suspense>
          </section>
          
          <section id="recetas">
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
              <RecetasSection />
            </Suspense>
          </section>
          
          <section id="distribuidora">
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
              <DistribuidoraSection />
            </Suspense>
          </section>
          
          <section id="contacto" className="bg-slate-50">
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
              <ContactoSection />
            </Suspense>
          </section>
        </article>
      </main>
    </>
  );
} 