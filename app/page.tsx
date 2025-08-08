import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { HeroSection } from "@components/sections/HeroSection";

const LoadingSpinner = dynamic(() => import("@components/ui/LoadingSpinner"));

// Lazy load sections with better loading states
const ProductosSection = dynamic(() => import("@components/sections/ProductosSection"), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

const RecetasSection = dynamic(() => import("@components/sections/RecetasSection"), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

const DistribuidoraSection = dynamic(() => import("@components/sections/DistribuidoraSection"), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

const ContactoSection = dynamic(() => import("@components/sections/ContactoSection"), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <main role="main" className="flex-grow">
        <article className="flex flex-col gap-16">
          <section 
            id="productos" 
            className="bg-slate-50"
            aria-label="Sección de Productos"
          >
            <Suspense fallback={<LoadingSpinner />}>
              <ProductosSection />
            </Suspense>
          </section>
          
          <section 
            id="recetas"
            aria-label="Sección de Recetas"
          >
            <Suspense fallback={<LoadingSpinner />}>
              <RecetasSection />
            </Suspense>
          </section>
          
          <section 
            id="distribuidora"
            aria-label="Sección de Distribuidora"
          >
            <Suspense fallback={<LoadingSpinner />}>
              <DistribuidoraSection />
            </Suspense>
          </section>
          
          <section 
            id="contacto" 
            className="bg-slate-50"
            aria-label="Sección de Contacto"
          >
            <Suspense fallback={<LoadingSpinner />}>
              <ContactoSection />
            </Suspense>
          </section>
        </article>
      </main>
    </>
  );
} 