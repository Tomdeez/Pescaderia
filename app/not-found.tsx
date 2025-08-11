'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-sky-900">Página no encontrada</h1>
        <p className="text-gray-600">La página que buscás no existe o fue movida.</p>
        <Link href="#inicio" className="btn-primary">Volver al inicio</Link>
      </div>
    </section>
  );
}


