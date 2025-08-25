'use client';

import { useState, useEffect } from 'react';
import CardProducto from '../ui/CardProducto';
import { supabase } from '../../../utils/supabaseClient';
import ProductSkeleton from '../ui/ProductSkeleton';

// Interfaz para los productos (igual a la que ya tenías)
interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  disponibilidad: 'En Stock' | 'Bajo Pedido' | 'Temporada';
}

const ProductosSection = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todos');
  const [categorias, setCategorias] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar productos desde Supabase
  useEffect(() => {
    async function cargarProductos() {
      try {
        setLoading(true);
        
        let query = supabase
          .from('productos')
          .select('*')
        
        // Filtrar por categoría si no es 'Todos'
        if (categoriaSeleccionada !== 'Todos') {
          query = query.eq('categoria', categoriaSeleccionada);
        }
        
        const { data, error } = await query.order('id');
        
        if (error) {
          console.error('Error cargando productos:', error);
          setError('No se pudieron cargar los productos. Por favor, inténtelo de nuevo más tarde.');
          setLoading(false);
          return;
        }
        
        setProductos(data || []);
        setLoading(false);
      } catch (err) {
        console.error('Error inesperado:', err);
        setError('Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.');
        setLoading(false);
      }
    }
    
    cargarProductos();
  }, [categoriaSeleccionada]);

  // Cargar categorías únicas
  useEffect(() => {
    async function cargarCategorias() {
      try {
        const { data, error } = await supabase
          .from('productos')
          .select('categoria')
          .order('categoria');
        
        if (error) {
          console.error('Error cargando categorías:', error);
          return;
        }
        
        // Extraer categorías únicas
        const categoriasUnicas = [...new Set(data.map(item => item.categoria))];
        setCategorias(['Todos', ...categoriasUnicas]);
      } catch (err) {
        console.error('Error cargando categorías:', err);
      }
    }
    
    cargarCategorias();
  }, []);

  // Manejar cambio de categoría
  const handleCategoriaChange = (categoria: string) => {
    setCategoriaSeleccionada(categoria);
  };

  // Renderizar productos o skeletons mientras cargan
  const renderProductos = () => {
    if (loading) {
      return Array.from({ length: 6 }).map((_, index) => (
        <ProductSkeleton key={index} />
      ));
    }

    if (error) {
      return (
        <div className="col-span-full text-center py-8">
          <p className="text-red-500">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-sky-600 text-white px-4 py-2 rounded"
          >
            Intentar nuevamente
          </button>
        </div>
      );
    }

    if (productos.length === 0) {
      return (
        <div className="col-span-full text-center py-8">
          <p>No hay productos disponibles en esta categoría.</p>
        </div>
      );
    }

    return productos.map(producto => (
      <CardProducto key={producto.id} producto={producto} />
    ));
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h2>

        {/* Filtro de categorías */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => handleCategoriaChange(categoria)}
              className={`px-4 py-2 rounded-full transition ${
                categoriaSeleccionada === categoria
                  ? 'bg-sky-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderProductos()}
        </div>
      </div>
    </section>
  );
};

export default ProductosSection;
