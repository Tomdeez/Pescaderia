'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [preferencias, setPreferencias] = useState({
    ofertas: true,
    novedades: false,
    recetas: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validación básica
    if (!email || !email.includes('@')) {
      setError('Por favor ingrese un correo electrónico válido');
      setLoading(false);
      return;
    }

    // Simular envío (aquí se implementaría la lógica real de envío)
    setTimeout(() => {
      console.log('Suscripción:', { 
        email, 
        preferencias: Object.entries(preferencias)
          .filter(([_, value]) => value)
          .map(([key]) => key) 
      });
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  const handlePreferenciasChange = (tipo: keyof typeof preferencias) => {
    setPreferencias(prev => ({
      ...prev,
      [tipo]: !prev[tipo]
    }));
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div 
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Información y beneficios */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <motion.span 
                  className="text-sky-600 font-semibold mb-2 inline-block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  No te pierdas nada
                </motion.span>
                
                <motion.h2 
                  className="text-3xl font-bold text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Recibe nuestras ofertas y novedades
                </motion.h2>
              </div>

              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Suscríbete a nuestras alertas para recibir información sobre:
              </motion.p>

              <ul className="space-y-3">
                {[
                  {
                    title: 'Ofertas semanales',
                    description: 'Productos con descuento y promociones especiales',
                    icon: '🔥'
                  },
                  {
                    title: 'Productos de temporada',
                    description: 'Te avisamos cuando llega pescado fresco de temporada',
                    icon: '🌊'
                  },
                  {
                    title: 'Menús especiales',
                    description: 'Novedades en nuestro menú del día',
                    icon: '🍽️'
                  }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  >
                    <span className="flex-shrink-0 text-xl">{item.icon}</span>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Formulario */}
            <div className="lg:w-1/2 w-full">
              {submitted ? (
                <motion.div 
                  className="text-center p-6 bg-green-50 rounded-xl border border-green-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="text-xl font-medium text-green-800 mb-2">¡Suscripción exitosa!</h3>
                  <p className="text-green-700">Gracias por suscribirte a nuestras alertas.</p>
                  <p className="text-green-600 text-sm mt-4">
                    Hemos enviado un correo de confirmación a {email}
                  </p>
                  <button
                    type="button"
                    className="mt-4 text-sky-600 hover:text-sky-800 underline text-sm"
                    onClick={() => {
                      setSubmitted(false);
                      setEmail('');
                    }}
                  >
                    Volver al formulario
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-6">Suscríbete ahora</h3>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      placeholder="tu@correo.com"
                      required
                      aria-describedby="email-error"
                    />
                    {error && (
                      <p id="email-error" className="text-red-600 text-sm mt-1">
                        {error}
                      </p>
                    )}
                  </div>
                  
                  <fieldset className="mb-6">
                    <legend className="text-sm font-medium text-gray-700 mb-2">
                      ¿Qué te gustaría recibir?
                    </legend>
                    
                    <div className="space-y-3">
                      {[
                        { id: 'ofertas', label: 'Ofertas semanales y promociones' },
                        { id: 'novedades', label: 'Novedades de productos' },
                        { id: 'recetas', label: 'Recetas y consejos de preparación' },
                      ].map((option) => (
                        <div key={option.id} className="flex items-center">
                          <input
                            id={option.id}
                            type="checkbox"
                            checked={preferencias[option.id as keyof typeof preferencias]}
                            onChange={() => handlePreferenciasChange(option.id as keyof typeof preferencias)}
                            className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                          />
                          <label htmlFor={option.id} className="ml-2 text-sm text-gray-700">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                  
                  <div className="flex flex-col gap-3">
                    <motion.button
                      type="submit"
                      className={`w-full bg-sky-600 text-white font-medium py-3 px-4 rounded-lg transition-all flex justify-center ${
                        loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-sky-700'
                      }`}
                      disabled={loading}
                      whileHover={!loading ? { scale: 1.02 } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        'Suscribirme'
                      )}
                    </motion.button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      No compartimos tus datos con terceros. Puedes darte de baja en cualquier momento.
                    </p>
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
