"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// Componente Navbar premium para Estrellita de Mar
export default function Navbar() {
  // Estado para el menú mobile
  const [menuAbierto, setMenuAbierto] = useState(false);
  // Ref para el menú mobile (focus trap)
  const menuRef = useRef(null);
  // Ref para el botón hamburguesa
  const btnRef = useRef(null);

  // Links de navegación
  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Sobre Nosotros", href: "#sobre-nosotros" },
    { label: "Distribuidora", href: "#distribuidora" },
    { label: "Contacto", href: "#contacto" },
  ];

  // WhatsApp link para cotización
  const whatsappLink =
    "https://wa.me/5491122334455?text=Hola,%20quiero%20solicitar%20una%20cotización";

  // Focus trap para el menú mobile
  useEffect(() => {
    if (menuAbierto && menuRef.current) {
      const focusableEls = menuRef.current.querySelectorAll(
        'a, button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];
      const handleTab = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstEl) {
              e.preventDefault();
              lastEl.focus();
            }
          } else {
            if (document.activeElement === lastEl) {
              e.preventDefault();
              firstEl.focus();
            }
          }
        } else if (e.key === "Escape") {
          setMenuAbierto(false);
          btnRef.current?.focus();
        }
      };
      menuRef.current.addEventListener("keydown", handleTab);
      firstEl?.focus();
      return () => menuRef.current?.removeEventListener("keydown", handleTab);
    }
  }, [menuAbierto]);

  // Cierra el menú al navegar
  const handleNavClick = () => setMenuAbierto(false);

  return (
    // Navbar principal
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-shadow font-sans"
      role="navigation"
      aria-label="Barra de navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo a la izquierda */}
        <Link
          href="#inicio"
          className="flex items-center gap-2 text-2xl font-extrabold text-[#003049] tracking-tight focus:outline-none focus:ring-2 focus:ring-[#F77F00] rounded-lg px-2 py-1"
          aria-label="Ir al inicio"
          tabIndex={0}
        >
          <span className="text-2xl">🐟</span>
          <span className="hidden sm:inline">Estrellita de Mar</span>
        </Link>

        {/* Links de navegación (desktop) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-semibold text-[#003049] px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-[#F1F1F1] hover:text-[#F77F00] focus:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2"
              tabIndex={0}
              aria-label={`Ir a ${link.label}`}
            >
              {link.label}
            </a>
          ))}
          {/* Botón destacado de cotización */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 rounded-lg bg-[#F77F00] text-white font-bold text-lg shadow hover:bg-[#e76b00] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2"
            tabIndex={0}
            aria-label="Solicitar cotización por WhatsApp"
          >
            Solicitar Cotización
          </a>
        </div>

        {/* Botón hamburguesa (mobile) */}
        <button
          ref={btnRef}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          aria-controls="menu-mobile"
          onClick={() => setMenuAbierto((v) => !v)}
          tabIndex={0}
        >
          {/* Ícono hamburguesa animado */}
          <span className="sr-only">Menú</span>
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-[#003049] transition-transform duration-300 ${
                menuAbierto ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-[#003049] transition-opacity duration-300 ${
                menuAbierto ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-[#003049] transition-transform duration-300 ${
                menuAbierto ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Menú lateral mobile */}
      {menuAbierto && (
        <div
          ref={menuRef}
          id="menu-mobile"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Panel lateral */}
          <nav
            className="w-72 max-w-full h-full bg-white shadow-lg p-8 flex flex-col gap-6 animate-slide-in-right"
            tabIndex={-1}
            aria-label="Menú móvil"
          >
            {/* Logo en el menú mobile */}
            <Link
              href="#inicio"
              className="flex items-center gap-2 text-xl font-extrabold text-[#003049] mb-4 focus:outline-none focus:ring-2 focus:ring-[#F77F00] rounded-lg px-2 py-1"
              aria-label="Ir al inicio"
              tabIndex={0}
              onClick={handleNavClick}
            >
              <span className="text-2xl">🐟</span>
              <span>Estrellita de Mar</span>
            </Link>
            {/* Links de navegación mobile */}
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold text-[#003049] px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-[#F1F1F1] hover:text-[#F77F00] focus:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2"
                  tabIndex={0}
                  aria-label={`Ir a ${link.label}`}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* Botón destacado mobile */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-5 py-3 rounded-lg bg-[#F77F00] text-white font-bold text-lg shadow hover:bg-[#e76b00] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2"
              tabIndex={0}
              aria-label="Solicitar cotización por WhatsApp"
              onClick={handleNavClick}
            >
              Solicitar Cotización
            </a>
          </nav>
        </div>
      )}
      {/* Animación para el menú lateral */}
      <style jsx global>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </nav>
  );
} 