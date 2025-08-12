import dynamic from 'next/dynamic';
import { WhatsappButton } from "@components/ui/WhatsappButton";
import { Suspense } from 'react';
import { HeroSection } from "@components/sections/HeroSection";
import SkipToContent from '@components/ui/SkipToContent';

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

const MenuDelDiaSection = dynamic(() => import("@components/sections/MenuDelDiaSection"), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

const PromocionesSection = dynamic(() => import("@components/sections/PromocionesSection"), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

export default function LandingPage() {
  return (
    <>
      {/* Enlace de accesibilidad para saltar al contenido principal */}
      <SkipToContent />
      
      <HeroSection />
      <main id="main-content" role="main" className="flex-grow">
        <article className="flex flex-col gap-16">
          <section 
            id="productos" 
            className="bg-slate-50"
            aria-label="Sección de Productos"
            tabIndex={-1} // Permite que la sección sea enfocada al navegar
          >
            <Suspense fallback={<LoadingSpinner />}>
              <ProductosSection />
            </Suspense>
          </section>

          <section 
            id="menu"
            aria-label="Sección de Menú del día"
            tabIndex={-1}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <MenuDelDiaSection />
            </Suspense>
          </section>
          
          <section 
            id="recetas"
            aria-label="Sección de Recetas"
            tabIndex={-1}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <RecetasSection />
            </Suspense>
          </section>
          
          {/* Sección de promociones */}
          <section
            id="ofertas"
            aria-label="Promociones"
            tabIndex={-1}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <PromocionesSection />
            </Suspense>
          </section>
          
          <section 
            id="distribuidora"
            aria-label="Sección de Distribuidora"
            tabIndex={-1}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <DistribuidoraSection />
            </Suspense>
          </section>
          
          <section 
            id="contacto" 
            className="bg-slate-50"
            aria-label="Sección de Contacto"
            tabIndex={-1}
          >
            <Suspense fallback={<LoadingSpinner />}>
              <ContactoSection />
            </Suspense>
          </section>
        </article>
      </main>
      <WhatsappButton />
    </>
  );
} 