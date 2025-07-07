'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { HeroSection } from "@components/sections/HeroSection";

// Lazy load sections
const SobreNosotrosSection = dynamic(() => import("@components/sections/SobreNosotrosSection"), {
  loading: () => <div className="h-96 flex items-center justify-center">Cargando...</div>
});

const ProductosSection = dynamic(() => import("@components/sections/ProductosSection"), {
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
          <section id="sobre-nosotros">
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
              <SobreNosotrosSection />
            </Suspense>
          </section>
          
          <section id="productos" className="bg-slate-50">
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Cargando...</div>}>
              <ProductosSection />
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