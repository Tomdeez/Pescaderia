'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../../utils/supabaseClient';

interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  disponibilidad: 'En Stock' | 'Bajo Pedido' | 'Temporada';
}

interface Promocion {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  activa: boolean;
}

export default function AdminPage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [totalProductos, setTotalProductos] = useState(0);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [promocionesActivas, setPromocionesActivas] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos básicos
  useEffect(() => {
    async function cargarDatos() {
      try {
        setLoading(true);
        
        // Obtener los 5 productos más recientes para mostrar en el panel
        const { data: productosRecientes, error: errorProductos } = await supabase
          .from('productos')
          .select('id, titulo, categoria, disponibilidad')
          .order('id', { ascending: false })
          .limit(5);
        
        if (errorProductos) throw errorProductos;
        
        // Obtener el total de productos
        const { count, error: errorCount } = await supabase
          .from('productos')
          .select('*', { count: 'exact', head: true });
        
        if (errorCount) throw errorCount;
        
        // Obtener categorías únicas
        const { data: dataCategories, error: errorCategories } = await supabase
          .from('productos')
          .select('categoria')
          .order('categoria');
        
        if (errorCategories) throw errorCategories;
        
        // Obtener número de promociones activas
        const { count: countPromociones, error: errorPromociones } = await supabase
          .from('promociones')
          .select('*', { count: 'exact', head: true })
          .eq('activa', true);
          
        if (errorPromociones) {
          console.error('Error al cargar promociones:', errorPromociones);
          // No lanzamos excepción aquí para que no se interrumpa la carga de otros datos
        } else {
          setPromocionesActivas(countPromociones || 0);
        }
        
        const categoriasUnicas = [...new Set(dataCategories?.map(item => item.categoria))];
        
        setProductos(productosRecientes || []);
        setTotalProductos(count || 0);
        setCategorias(categoriasUnicas || []);
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar datos:', err);
        setLoading(false);
      }
    }
    
    cargarDatos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
            <Link 
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
            >
              Volver al sitio
            </Link>
          </div>
          <p className="text-gray-600 mt-2">Gestiona tus productos y promociones</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Panel de Productos */}
          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-blue-500">
            <h2 className="text-xl font-medium mb-4">Gestión de Productos</h2>
            
            <div className="mb-6">
              <Link 
                href="/admin/productos"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Ver todos los productos
              </Link>
            </div>
            
            {/* Vista previa de productos */}
            <div className="bg-blue-50 rounded-md p-4">
              <h3 className="text-sm font-medium text-blue-800 mb-2">Productos recientes:</h3>
              
              {loading ? (
                <p className="text-sm text-gray-500">Cargando productos...</p>
              ) : productos.length > 0 ? (
                <ul className="text-sm divide-y divide-blue-100">
                  {productos.map(producto => (
                    <li key={producto.id} className="py-2 flex justify-between">
                      <span className="font-medium">{producto.titulo}</span>
                      <span className="text-blue-800">{producto.categoria}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No se encontraron productos</p>
              )}
              
              <div className="mt-3 text-right">
                <Link 
                  href="/admin/nuevo-producto" 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  + Añadir nuevo producto
                </Link>
              </div>
            </div>
          </div>
          
          {/* Panel de Promociones */}
          <div className="bg-white shadow rounded-lg p-6 border-t-4 border-green-500">
            <h2 className="text-xl font-medium mb-4">Gestión de Promociones</h2>
            
            <div className="mb-6">
              <Link 
                href="/admin/promociones"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                </svg>
                Gestionar promociones
              </Link>
            </div>
            
            <div className="bg-green-50 rounded-md p-4">
              <h3 className="text-sm font-medium text-green-800 mb-2">Funciones disponibles:</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Crear nuevas promociones</li>
                <li>Programar promociones por fecha</li>
                <li>Promociones para categorías específicas</li>
                <li>Visualizar estadísticas de promociones</li>
              </ul>
              
              <div className="mt-3 text-right">
                <Link 
                  href="/admin/nueva-promocion" 
                  className="text-green-600 hover:text-green-800 text-sm font-medium"
                >
                  + Añadir nueva promoción
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Panel de Estadísticas */}
        <div className="mt-6 bg-white shadow rounded-lg p-6 border-t-4 border-purple-500">
          <h2 className="text-xl font-medium mb-4">Resumen</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-purple-50 p-4 rounded-md text-center">
              <div className="text-2xl font-bold text-purple-700">
                {loading ? '...' : totalProductos}
              </div>
              <div className="text-sm text-purple-600">Productos</div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md text-center">
              <div className="text-2xl font-bold text-blue-700">{categorias.length}</div>
              <div className="text-sm text-blue-600">Categorías</div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-md text-center">
              <div className="text-2xl font-bold text-green-700">
                {loading ? '...' : promocionesActivas}
              </div>
              <div className="text-sm text-green-600">Promociones activas</div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-md text-center">
              <div className="text-2xl font-bold text-yellow-700">0</div>
              <div className="text-sm text-yellow-600">Visitas hoy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}