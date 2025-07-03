"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Sección Contacto de la landing page
export default function ContactoSection() {
  // Estado del formulario
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: ""
  });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(false);
  const [error, setError] = useState("");

  // Validación básica
  const validar = () => {
    if (!form.nombre.trim()) return "El nombre es obligatorio.";
    if (!form.telefono.trim()) return "El teléfono es obligatorio.";
    if (!form.mensaje.trim()) return "El mensaje es obligatorio.";
    return "";
  };

  // Manejar cambios en los campos
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const err = validar();
    if (err) {
      setError(err);
      return;
    }
    setEnviando(true);
    setExito(false);
    try {
      // Reemplazar la URL por la de tu webhook de n8n
      // const webhookUrl = "https://tu-n8n-webhook-url";
      const webhookUrl = "https://tu-n8n-webhook-url";
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      setExito(true);
      setForm({ nombre: "", telefono: "", email: "", mensaje: "" });
    } catch (e) {
      setError("Ocurrió un error al enviar. Por favor, intentá nuevamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-[#F1F1F1]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#003049] mb-6 text-center">
        Contacto e Información
      </h2>
      <p className="text-lg md:text-xl text-slate-700 mb-8 text-center max-w-2xl mx-auto">
        Consultanos cualquier duda o solicitá información sobre nuestros productos y servicios. ¡Te respondemos a la brevedad!
      </p>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        {/* Imagen decorativa */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            src="/imagenes/camaron.jpg"
            alt="Camarones frescos para contacto y pedidos"
            width={400}
            height={320}
            className="rounded-2xl shadow-lg object-cover w-full max-w-xs md:max-w-sm h-56 md:h-80 border border-sky-100"
            priority
          />
        </div>
        {/* Formulario y contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-white rounded-3xl shadow-2xl py-12 px-4 sm:px-6 lg:px-8"
        >
          {/* Título y subtítulo */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-3 text-center">Contacto e Información</h2>
          <p className="text-lg text-sky-800 mb-8 text-center">Consultanos cualquier duda o solicitá información sobre nuestros productos y servicios.</p>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off" noValidate>
            <div>
              <label htmlFor="nombre" className="block text-sky-900 font-semibold mb-1">Nombre y Apellido *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                aria-label="Nombre y Apellido"
                className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none bg-sky-50 text-sky-900 placeholder-sky-400 transition"
                placeholder="Ej: Juan Pérez"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sky-900 font-semibold mb-1">Teléfono *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
                aria-label="Teléfono"
                className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none bg-sky-50 text-sky-900 placeholder-sky-400 transition"
                placeholder="Ej: 11 2345-6789"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sky-900 font-semibold mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                aria-label="Email"
                className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none bg-sky-50 text-sky-900 placeholder-sky-400 transition"
                placeholder="Ej: juan@email.com (opcional)"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sky-900 font-semibold mb-1">Mensaje / Pedido *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                required
                aria-label="Mensaje o Pedido"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none bg-sky-50 text-sky-900 placeholder-sky-400 transition resize-none"
                placeholder="Contanos qué necesitás, productos, cantidades, etc."
              />
            </div>

            {/* Mensajes de error o éxito */}
            {error && <div className="text-red-600 text-sm font-medium text-center">{error}</div>}
            {exito && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-600 text-base font-semibold text-center">Gracias por contactarnos. Te responderemos a la brevedad.</motion.div>}

            {/* Botón de envío */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={enviando}
              className={`w-full py-3 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 ${
                enviando
                  ? "bg-sky-300 text-white cursor-not-allowed"
                  : "bg-sky-600 hover:bg-sky-700 text-white"
              }`}
              aria-label="Enviar Consulta"
            >
              {enviando ? (
                <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              )}
              Enviar Consulta
            </motion.button>
          </form>

          {/* Botón secundario WhatsApp */}
          <div className="mt-8 text-center">
            <motion.a
              href="https://wa.me/TU_NUMERO"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-7 py-3 rounded-lg shadow-lg transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              aria-label="Contactar por WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
              Contactar por WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 