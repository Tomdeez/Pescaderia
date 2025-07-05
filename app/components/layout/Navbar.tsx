"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// Paleta personalizada
const NAV_BG = "bg-[#003049]/80 backdrop-blur-md";
const NAV_HOVER = "hover:text-[#669BBC]";
const NAV_LINK = "text-white";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Catálogo", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Focus trap para accesibilidad en menú mobile
  useEffect(() => {
    if (open && menuRef.current) {
      const focusableEls = menuRef.current.querySelectorAll<HTMLElement>(
        'a, button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];
      const handleTab = (e: KeyboardEvent) => {
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
          setOpen(false);
          btnRef.current?.focus();
        }
      };
      menuRef.current.addEventListener("keydown", handleTab);
      firstEl?.focus();
      return () => menuRef.current?.removeEventListener("keydown", handleTab);
    }
  }, [open]);

  // useCallback para evitar recrear la función en cada render
  const handleNavClick = useCallback(() => setOpen(false), []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#003049]/80 backdrop-blur-md shadow-lg"
      role="navigation"
      aria-label="Barra de navegación principal"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2 text-xl font-bold text-white focus-visible:outline-none focus:ring-2 focus:ring-[#669BBC] rounded-lg px-2 py-1"
          aria-label="Ir al inicio"
        >
          <StarIcon className="w-7 h-7 text-[#669BBC]" aria-hidden="true" />
          <span className="hidden sm:inline">Estrellita de Mar</span>
        </a>
        {/* Menú desktop */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-lg font-semibold ${NAV_LINK} px-3 py-2 rounded-lg transition-colors duration-200 ${NAV_HOVER} focus-visible:outline-none focus:ring-2 focus:ring-[#669BBC]`}
              aria-label={`Ir a ${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Botón hamburguesa mobile */}
        <button
          ref={btnRef}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg focus-visible:outline-none focus:ring-2 focus:ring-[#669BBC]"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <XMarkIcon className="w-7 h-7 text-white" aria-hidden="true" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-white" aria-hidden="true" />
          )}
        </button>
      </div>
      {/* Menú lateral mobile animado */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={open ? menuRef : null}
            id="menu-mobile"
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end md:hidden"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.nav
              className="w-72 max-w-full h-full bg-[#003049]/95 shadow-lg p-8 flex flex-col gap-6"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300, transition: { delay: 0.05 } }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              tabIndex={-1}
              aria-label="Menú móvil"
            >
              <a
                href="#inicio"
                className="flex items-center gap-2 text-xl font-bold text-white mb-4 focus-visible:outline-none focus:ring-2 focus:ring-[#669BBC] rounded-lg px-2 py-1"
                aria-label="Ir al inicio"
                onClick={handleNavClick}
              >
                <StarIcon className="w-7 h-7 text-[#669BBC]" aria-hidden="true" />
                <span>Estrellita de Mar</span>
              </a>
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-semibold text-white px-4 py-3 rounded-lg transition-colors duration-200 ${NAV_HOVER} focus-visible:outline-none focus:ring-2 focus:ring-[#669BBC]`}
                    aria-label={`Ir a ${link.label}`}
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 