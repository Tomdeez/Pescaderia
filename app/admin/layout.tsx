'use client';

import { useState, useEffect, ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Contraseña simple para el panel
  const ADMIN_PASSWORD = 'pescaderia2024';

  // Función simplificada para inicio de sesión
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  // Versión simplificada sin localStorage
  return (
    <div>
      {!isAuthenticated ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
              <p className="text-gray-600">Ingresa tu contraseña para continuar</p>
            </div>

            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <div className="fixed top-0 right-0 p-4 z-50">
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-white border border-gray-300 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-100 text-sm"
            >
              Cerrar sesión
            </button>
          </div>
          {children}
        </div>
      )}
    </div>
  );
}