'use client';

import { useState } from 'react';
import { CardProducto } from '@components/ui/CardProducto';

const productos = [
  {
    id: 1,
    titulo: 'Salmón Fresco Premium',
    descripcion: 'Salmón noruego de la más alta calidad, ideal para preparaciones en crudo o cocidas.',
    imagen: '/imagenes/pesfrescohielo.jpg',
    precio: 'Consultar',
    categoria: 'Pescados',
    disponibilidad: 'En Stock' as const,
  },
  {
    id: 2,
    titulo: 'Langostinos Patagónicos',
    descripcion: 'Langostinos salvajes de la Patagonia, perfectos para parrilla o preparaciones gourmet.',
    imagen: '/imagenes/langostinos.jpg',
    precio: 'Consultar',
    categoria: 'Mariscos',
    disponibilidad: 'Bajo Pedido' as const,
  },
  {
    id: 3,
    titulo: 'Pulpo Gallego',
    descripcion: 'Pulpo certificado de las rías gallegas, textura tierna y sabor excepcional.',
    imagen: '/imagenes/picadamar.jpg',
    precio: 'Consultar',
    categoria: 'Mariscos',
    disponibilidad: 'Temporada' as const,
  },
  {
    id: 4,
    titulo: 'Camarones Premium',
    descripcion: 'Camarones frescos seleccionados, perfectos para cócteles y entradas.',
    imagen: '/imagenes/camaron.jpg',
    precio: 'Consultar',
    categoria: 'Mariscos',
    disponibilidad: 'En Stock' as const,
  },
];

const categorias = ['Todos', 'Pescados', 'Mariscos'];

const ProductosSection = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const productosFiltrados = categoriaActiva === 'Todos'
    ? productos
    : productos.filter(p => p.categoria === categoriaActiva);

  return (
    <section id="productos" className="section-padding bg-background-alt">
      <div className="container-custom">
        <div className="section-title">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Nuestros Productos
          </span>
          <h2 className="text-gradient">Selección Premium del Mar</h2>
          <p>
            Descubre nuestra cuidadosa selección de productos del mar, 
            donde la calidad y la frescura son nuestra prioridad.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center space-x-4 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaActiva(categoria)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                categoriaActiva === categoria
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary hover:bg-primary/5'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className="reveal">
              <CardProducto {...producto} />
            </div>
          ))}
        </div>

        {/* Nota de Calidad */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-xl p-6 shadow-lg">
            <p className="text-text-light">
              <span className="font-semibold text-primary">Nota:</span>{' '}
              Todos nuestros productos son seleccionados diariamente para garantizar 
              la máxima frescura y calidad. Los precios pueden variar según el mercado 
              y la temporada.
            </p>
          </div>
        </div>
      </div>

      {/* Script para animaciones de scroll */}
      <script dangerouslySetInnerHTML={{
        __html: `
          function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            reveals.forEach((reveal) => {
              var windowHeight = window.innerHeight;
              var elementTop = reveal.getBoundingClientRect().top;
              var elementVisible = 150;
              if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
              }
            });
          }
          window.addEventListener("scroll", reveal);
          reveal();
        `
      }} />
    </section>
  );
};

export default ProductosSection; 