'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '../../../../utils/supabaseClient';

interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  disponibilidad: 'En Stock' | 'Bajo Pedido' | 'Temporada';
}

export default function EditarProducto({ params }: { params: { id: string } }) {
  const router = useRouter();
  const productId = parseInt(params.id);
  
  const [formData, setFormData] = useState<Producto>({
    id: productId,
    titulo: '',
    descripcion: '',
    imagen: '',
    categoria: '',
    disponibilidad: 'En Stock'
  });
  
  const [loading, setLoading] = useState(false);
  const [loadingProduct, setLoadingProduct] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos del producto
  useEffect(() => {
    async function cargarProducto() {
      try {
        const { data, error } = await supabase
          .from('productos')
          .select('*')
          .eq('id', productId)
          .single();
        
        if (error) {
          throw error;
        }
        
        if (data) {
          setFormData(data);
        } else {
          throw new Error(`No se encontró el producto con ID ${productId}`);
        }
      } catch (err: any) {
        setError(err.message || 'Error al cargar el producto');
      } finally {
        setLoadingProduct(false);
      }
    }
    
    cargarProducto();
  }, [productId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validar datos
      if (!formData.titulo || !formData.descripcion || !formData.imagen || !formData.categoria) {
        throw new Error('Por favor completa todos los campos obligatorios');
      }

      // Actualizar el producto
      const { error: updateError } = await supabase
        .from('productos')
        .update({
          titulo: formData.titulo,
          descripcion: formData.descripcion,
          imagen: formData.imagen,
          categoria: formData.categoria,
          disponibilidad: formData.disponibilidad
        })
        .eq('id', productId);

      if (updateError) {
        throw updateError;
      }

      // Redirigir a la página de administración
      router.push('/admin');
    } catch (err: any) {
      setError(err.message || 'Error al actualizar el producto');
    } finally {
      setLoading(false);
    }
  };

  if (loadingProduct) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-6">
          <div className="flex items-center">
            <Link 
              href="/admin" 
              className="text-blue-600 hover:text-blue-800 mr-2"
            >
              ← Volver
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Editar Producto</h1>
          </div>
          <p className="text-gray-600 mt-1">ID: {productId}</p>
        </header>

        <div className="bg-white shadow rounded-lg p-6">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
                  Título *
                </label>
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">
                  Descripción *
                </label>
                <textarea
                  name="descripcion"
                  id="descripcion"
                  rows={3}
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="imagen" className="block text-sm font-medium text-gray-700 mb-1">
                  Ruta de imagen *
                </label>
                <input
                  type="text"
                  name="imagen"
                  id="imagen"
                  value={formData.imagen}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                {formData.imagen && (
                  <div className="mt-2 border rounded p-2 inline-block">
                    <img 
                      src={formData.imagen} 
                      alt="Vista previa" 
                      className="h-20 w-auto object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/imagenes/picadamar.jpg';
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">
                    Categoría *
                  </label>
                  <input
                    type="text"
                    name="categoria"
                    id="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="disponibilidad" className="block text-sm font-medium text-gray-700 mb-1">
                    Disponibilidad
                  </label>
                  <select
                    name="disponibilidad"
                    id="disponibilidad"
                    value={formData.disponibilidad}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="En Stock">En Stock</option>
                    <option value="Bajo Pedido">Bajo Pedido</option>
                    <option value="Temporada">Temporada</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end space-x-3">
                <Link
                  href="/admin"
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </Link>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 bg-blue-600 text-white rounded-md ${
                    loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                >
                  {loading ? 'Guardando...' : 'Guardar Cambios'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
