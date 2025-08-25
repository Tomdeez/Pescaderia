'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '../../../utils/supabaseClient';

export default function NuevoProducto() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    imagen: '',
    categoria: '',
    disponibilidad: 'En Stock' as 'En Stock' | 'Bajo Pedido' | 'Temporada'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

      // Obtener el último ID para generar uno nuevo
      const { data: lastProduct, error: idError } = await supabase
        .from('productos')
        .select('id')
        .order('id', { ascending: false })
        .limit(1);

      if (idError) {
        throw idError;
      }

      // Generar nuevo ID (último + 1 o empezar en 1)
      const newId = lastProduct && lastProduct.length > 0 ? lastProduct[0].id + 1 : 1;

      // Insertar el nuevo producto
      const { error: insertError } = await supabase
        .from('productos')
        .insert([
          {
            id: newId,
            ...formData
          }
        ]);

      if (insertError) {
        throw insertError;
      }

      // Redirigir a la página de administración
      router.push('/admin');
    } catch (err: any) {
      setError(err.message || 'Error al crear el producto');
    } finally {
      setLoading(false);
    }
  };

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
            <h1 className="text-2xl font-bold text-gray-900">Nuevo Producto</h1>
          </div>
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
                  Ruta de imagen * (ejemplo: /imagenes/pesfrescohielo.jpg)
                </label>
                <input
                  type="text"
                  name="imagen"
                  id="imagen"
                  value={formData.imagen}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="/imagenes/ejemplo.jpg"
                  required
                />
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
                    placeholder="Mar, Río, Empanados..."
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
                  {loading ? 'Guardando...' : 'Guardar Producto'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
