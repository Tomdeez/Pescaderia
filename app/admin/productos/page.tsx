'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../../../utils/supabaseClient';

interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  disponibilidad: 'En Stock' | 'Bajo Pedido' | 'Temporada';
}

export default function ProductosAdmin() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filtro, setFiltro] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');
  const [categorias, setCategorias] = useState<string[]>([]);

  useEffect(() => {
    async function cargarProductos() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('productos')
          .select('*')
          .order('id');
          
        if (error) throw error;
        
        setProductos(data || []);
        
        // Extraer categorías únicas
        if (data) {
          const uniqueCategorias = [...new Set(data.map(p => p.categoria))];
          setCategorias(uniqueCategorias);
        }
      } catch (err) {
        console.error('Error al cargar productos:', err);
        setError('No se pudieron cargar los productos');
      } finally {
        setLoading(false);
      }
    }
    
    cargarProductos();
  }, []);

  // Filtrar productos
  const productosFiltrados = productos.filter(producto => {
    const coincideBusqueda = 
      producto.titulo.toLowerCase().includes(filtro.toLowerCase()) || 
      producto.descripcion.toLowerCase().includes(filtro.toLowerCase());
      
    const coincideCategoria = 
      categoriaFiltro === '' || producto.categoria === categoriaFiltro;
      
    return coincideBusqueda && coincideCategoria;
  });

  // Eliminar producto
  async function eliminarProducto(id: number) {
    if (!confirm('¿Estás seguro de eliminar este producto?')) return;
    
    try {
      const { error } = await supabase
        .from('productos')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      setProductos(productos.filter(p => p.id !== id));
    } catch (err) {
      console.error('Error al eliminar:', err);
      alert('No se pudo eliminar el producto');
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Link href="/admin" className="text-blue-600 hover:text-blue-800">
              ← Volver al panel
            </Link>
            <h1 className="text-2xl font-bold mt-2">Gestión de Productos</h1>
          </div>
          <Link 
            href="/admin/nuevo-producto"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Nuevo producto
          </Link>
        </div>
        
        {/* Filtros */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="buscar" className="block text-sm font-medium text-gray-700 mb-1">
                Buscar productos
              </label>
              <input
                type="text"
                id="buscar"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Buscar por nombre o descripción..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
              />
            </div>
            
            <div className="md:w-1/4">
              <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">
                Filtrar por categoría
              </label>
              <select
                id="categoria"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={categoriaFiltro}
                onChange={(e) => setCategoriaFiltro(e.target.value)}
              >
                <option value="">Todas las categorías</option>
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Lista de productos */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {loading ? (
            <div className="p-6 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-500">Cargando productos...</p>
            </div>
          ) : error ? (
            <div className="p-6 text-center text-red-500">
              {error}
              <button 
                onClick={() => window.location.reload()} 
                className="block mx-auto mt-2 text-blue-600 hover:underline"
              >
                Reintentar
              </button>
            </div>
          ) : productosFiltrados.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No se encontraron productos
              {filtro || categoriaFiltro ? (
                <button 
                  onClick={() => {
                    setFiltro('');
                    setCategoriaFiltro('');
                  }}
                  className="block mx-auto mt-2 text-blue-600 hover:underline"
                >
                  Limpiar filtros
                </button>
              ) : (
                <Link 
                  href="/admin/nuevo-producto"
                  className="block mx-auto mt-2 text-blue-600 hover:underline"
                >
                  Añadir el primer producto
                </Link>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Imagen
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Título
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoría
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Disponibilidad
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {productosFiltrados.map((producto) => (
                    <tr key={producto.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {producto.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-10 w-10 rounded-md bg-gray-200 overflow-hidden">
                          <img
                            src={producto.imagen}
                            alt={producto.titulo}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/imagenes/pesfrescohielo.jpg';
                            }}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {producto.titulo}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {producto.descripcion}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {producto.categoria}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          producto.disponibilidad === 'En Stock'
                            ? 'bg-green-100 text-green-800'
                            : producto.disponibilidad === 'Bajo Pedido'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {producto.disponibilidad}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          href={`/admin/editar-producto/${producto.id}`}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          Editar
                        </Link>
                        <button
                          onClick={() => eliminarProducto(producto.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
