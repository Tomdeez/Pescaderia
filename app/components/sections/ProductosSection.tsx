'use client';

import { useState, useEffect } from 'react';
import { CardProducto } from '../ui/CardProducto'; // Importación nombrada correcta
import ProductSkeleton from '../ui/ProductSkeleton';
import { supabase } from '../../../utils/supabaseClient';

// Interfaz para los productos
interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  disponibilidad: 'En Stock' | 'Bajo Pedido' | 'Temporada';
}

// Constantes para la paginación
const PRODUCTOS_POR_PAGINA = 6; // Número de productos por página

const ProductosSection = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [productosMostrados, setProductosMostrados] = useState<Producto[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todos');
  const [categorias, setCategorias] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalProductos, setTotalProductos] = useState(0);
  const [cargandoMas, setCargandoMas] = useState(false);
  
  // Para compatibilidad con CardProducto que espera onSumar y onRestar
  const [cantidades, setCantidades] = useState<{[key: number]: number}>({});
  
  const handleSumar = (productoId: number) => {
    setCantidades({
      ...cantidades,
      [productoId]: (cantidades[productoId] || 0) + 1
    });
  };
  
  const handleRestar = (productoId: number) => {
    if ((cantidades[productoId] || 0) > 0) {
      setCantidades({
        ...cantidades,
        [productoId]: (cantidades[productoId] || 0) - 1
      });
    }
  };

  // Cargar productos desde Supabase
  useEffect(() => {
    async function cargarProductos() {
      try {
        setLoading(true);
        setPaginaActual(1); // Reiniciar paginación al cambiar categoría
        
        let query = supabase
          .from('productos')
          .select('*', { count: 'exact' })
        
        // Filtrar por categoría si no es 'Todos'
        if (categoriaSeleccionada !== 'Todos') {
          query = query.eq('categoria', categoriaSeleccionada);
        }
        
        // Primera carga limitada a PRODUCTOS_POR_PAGINA
        const { data, error, count } = await query
          .order('id')
          .range(0, PRODUCTOS_POR_PAGINA - 1);
        
        if (error) {
          console.error('Error cargando productos:', error);
          setError('No se pudieron cargar los productos. Por favor, inténtelo de nuevo más tarde.');
          setLoading(false);
          return;
        }
        
        setProductos(data || []);
        setProductosMostrados(data || []);
        setTotalProductos(count || 0);
        setLoading(false);
      } catch (err) {
        console.error('Error inesperado:', err);
        setError('Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.');
        setLoading(false);
      }
    }
    
    cargarProductos();
  }, [categoriaSeleccionada]);

  // Función para cargar más productos
  const cargarMasProductos = async () => {
    try {
      setCargandoMas(true);
      const siguientePagina = paginaActual + 1;
      const desde = (siguientePagina - 1) * PRODUCTOS_POR_PAGINA;
      const hasta = desde + PRODUCTOS_POR_PAGINA - 1;
      
      let query = supabase
        .from('productos')
        .select('*')
      
      // Filtrar por categoría si no es 'Todos'
      if (categoriaSeleccionada !== 'Todos') {
        query = query.eq('categoria', categoriaSeleccionada);
      }
      
      const { data, error } = await query
        .order('id')
        .range(desde, hasta);
      
      if (error) {
        console.error('Error cargando más productos:', error);
        setCargandoMas(false);
        return;
      }
      
      // Añadir los nuevos productos a los que ya se están mostrando
      setProductosMostrados([...productosMostrados, ...(data || [])]);
      setPaginaActual(siguientePagina);
      setCargandoMas(false);
    } catch (err) {
      console.error('Error al cargar más productos:', err);
      setCargandoMas(false);
    }
  };

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
        const categoriasUnicas = [...new Set(data?.map(item => item.categoria) || [])];
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

    if (productosMostrados.length === 0) {
      return (
        <div className="col-span-full text-center py-8">
          <p>No hay productos disponibles en esta categoría.</p>
        </div>
      );
    }

    return productosMostrados.map(producto => (
      <CardProducto 
        key={producto.id}
        titulo={producto.titulo}
        descripcion={producto.descripcion}
        imagen={producto.imagen}
        categoria={producto.categoria}
        disponibilidad={producto.disponibilidad}
        cantidad={cantidades[producto.id] || 0}
        onSumar={() => handleSumar(producto.id)}
        onRestar={() => handleRestar(producto.id)}
      />
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

        {/* Botón Ver Más */}
        {!loading && !error && productosMostrados.length > 0 && productosMostrados.length < totalProductos && (
          <div className="flex justify-center mt-10">
            <button
              onClick={cargarMasProductos}
              disabled={cargandoMas}
              className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg font-medium transition-all flex items-center"
            >
              {cargandoMas ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Cargando...
                </>
              ) : (
                <>
                  Ver más productos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductosSection;