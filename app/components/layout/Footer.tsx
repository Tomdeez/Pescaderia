"use client";
import { motion } from "framer-motion";

interface Enlace {
  href: string;
  label: string;
}

const enlaces: Enlace[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#sobre-nosotros", label: "Sobre Nosotros" },
  { href: "#distribuidora", label: "Distribuidora" },
  { href: "#contacto", label: "Contacto" },
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer
      className="w-full bg-gradient-to-br from-sky-100 to-emerald-100 border-t border-sky-200"
      aria-label="Pie de página de Estrellita de Mar"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        {/* Sección izquierda: Marca y descripción */}
        <div className="flex-1 mb-6 md:mb-0">
          <span className="block text-2xl md:text-3xl font-extrabold text-sky-800 mb-2 select-none">Estrellita de Mar</span>
          <p className="text-sky-700 text-base max-w-xs">Pescados y mariscos frescos de calidad premium en San Nicolás.</p>
        </div>

        {/* Sección central: Navegación */}
        <nav aria-label="Navegación principal" className="flex-1 flex flex-col items-start md:items-center mb-6 md:mb-0">
          <ul className="flex flex-col md:flex-row gap-3 md:gap-6">
            {enlaces.map((enlace) => (
              <motion.li
                key={enlace.href}
                whileHover={{ scale: 1.08, x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className=""
              >
                <a
                  href={enlace.href}
                  className="text-sky-800 hover:text-emerald-600 font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus:ring-2 focus:ring-emerald-400 px-1 py-0.5 rounded"
                  aria-label={`Ir a la sección ${enlace.label}`}
                >
                  {enlace.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Sección derecha: Contacto */}
        <div className="flex-1 flex flex-col items-start md:items-end gap-2">
          <div className="flex items-center gap-2">
            {/* WhatsApp */}
            <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
            <a href="https://wa.me/TU_NUMERO" target="_blank" rel="noopener noreferrer" className="text-sky-800 hover:text-emerald-600 font-medium transition-colors focus-visible:outline-none focus:ring-2 focus:ring-emerald-400" aria-label="Contactar por WhatsApp">+54 9 336 123-4567</a>
          </div>
          <div className="flex items-center gap-2">
            {/* Teléfono */}
            <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"/></svg>
            <a href="tel:+543361234567" className="text-sky-800 hover:text-emerald-600 font-medium transition-colors focus-visible:outline-none focus:ring-2 focus:ring-emerald-400" aria-label="Llamar por teléfono">(336) 123-4567</a>
          </div>
          <div className="flex items-center gap-2">
            {/* Email */}
            <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-8 0V8a4 4 0 018 0v4"/></svg>
            <a href="mailto:info@estrellitademar.com" className="text-sky-800 hover:text-emerald-600 font-medium transition-colors focus-visible:outline-none focus:ring-2 focus:ring-emerald-400" aria-label="Enviar email">info@estrellitademar.com</a>
          </div>
        </div>
      </div>
      {/* Línea final copyright */}
      <div className="w-full border-t border-sky-200 text-center py-4 text-sky-600 text-sm bg-gradient-to-br from-sky-100 to-emerald-100 select-none">
        © {year} Estrellita de Mar. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer; 