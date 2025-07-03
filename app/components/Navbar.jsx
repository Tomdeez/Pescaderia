"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#sobre-nosotros", label: "Sobre Nosotros" },
  { href: "#distribuidora", label: "Distribuidora" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#003049] text-white shadow transition-all">
      <nav className="w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl md:text-3xl font-extrabold text-white select-none"
            aria-label="Ir al inicio"
          >
            <span className="text-3xl md:text-4xl">🐟</span>
            <span>Estrellita de Mar</span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-7 items-center h-full">
            {links.map((link) => (
              <li key={link.href} className="flex items-center h-full">
                <a
                  href={link.href}
                  className="relative font-semibold px-3 py-2 text-lg transition-colors duration-200 outline-none focus:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 focus:ring-offset-[#003049] hover:text-[#F77F00] focus:text-[#F77F00] after:content-[''] after:block after:h-0.5 after:bg-[#F77F00] after:scale-x-0 hover:after:scale-x-100 focus:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                  aria-label={`Ir a la sección ${link.label}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Botón CTA */}
            <li className="ml-4">
              <a
                href="#productos"
                className="rounded-lg px-4 py-2 text-base font-semibold bg-[#F77F00] text-white shadow hover:bg-[#e76b00] focus:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 transition"
                aria-label="Solicitar Cotización"
              >
                Solicitar Cotización
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu: panel lateral animado */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-[#003049] text-white backdrop-blur shadow-lg border-l border-[#F77F00] transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <button
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
        >
          <span className="block w-6 h-0.5 bg-white rotate-45 absolute" style={{ top: '14px' }} />
          <span className="block w-6 h-0.5 bg-white -rotate-45 absolute" style={{ top: '14px' }} />
        </button>
        <ul className="flex flex-col gap-4 px-8 pt-20">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block font-semibold px-2 py-3 text-lg transition-colors duration-200 outline-none focus:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 focus:ring-offset-[#003049] hover:text-[#F77F00] focus:text-[#F77F00] after:content-[''] after:block after:h-0.5 after:bg-[#F77F00] after:scale-x-0 hover:after:scale-x-100 focus:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                aria-label={`Ir a la sección ${link.label}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* Botón CTA mobile */}
          <li className="mt-6">
            <a
              href="#productos"
              className="rounded-lg px-4 py-2 text-base font-semibold bg-[#F77F00] text-white shadow hover:bg-[#e76b00] focus:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 transition block text-center"
              aria-label="Solicitar Cotización"
              onClick={() => setOpen(false)}
            >
              Solicitar Cotización
            </a>
          </li>
        </ul>
      </aside>
    </header>
  );
} 