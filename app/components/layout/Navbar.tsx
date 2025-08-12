"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks, navLinksCompact } from '@data/navLinks';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        role="navigation"
        aria-label="Principal"
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-sky-950 shadow-xl py-1'
            : 'bg-sky-950 shadow-lg py-2 border-b border-sky-900'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <div className="flex items-center space-x-2">
                <Image
                  src="/imagenes/Claro sin txt.png"
                  alt="Isotipo Estrellita de Mar"
                  width={50}
                  height={50}
                  priority
                  sizes="50px"
                  className="rounded-full bg-white shadow-md"
                />
                <span className={`font-playfair text-base lg:text-lg font-bold transition-colors duration-300 text-white drop-shadow-lg whitespace-nowrap`}>
                  Estrellita de Mar
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {/* Enlaces compactos para pantallas medianas */}
              <div className="md:flex lg:hidden items-center space-x-1">
                {navLinksCompact.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs uppercase tracking-wide font-semibold transition-colors duration-300 hover:text-amber-300 text-white px-1 whitespace-nowrap drop-shadow-sm`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {/* Enlaces completos para pantallas grandes */}
              <div className="hidden lg:flex items-center space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm uppercase tracking-wide font-semibold transition-colors duration-300 hover:text-amber-300 text-white px-1 whitespace-nowrap drop-shadow-sm`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link
                href="#contacto"
                className={`px-3 py-1.5 rounded-lg text-xs lg:text-sm uppercase tracking-wide font-bold transition-all duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg border border-white/30'
                    : 'bg-amber-500 hover:bg-amber-600 text-sky-950 shadow-lg border border-white/30'
                }`}
              >
                PEDIR POR WHATSAPP
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-10 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Abrir menú de navegación"
            >
              <div className="space-y-2">
                <span
                  className={`block w-8 h-0.5 transform transition duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                  } bg-white`}
                />
                <span
                  className={`block w-8 h-0.5 transition duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  } bg-white`}
                />
                <span
                  className={`block w-8 h-0.5 transform transition duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  } bg-white`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-nav"
            className={`fixed inset-0 bg-sky-950/98 backdrop-blur-md transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base uppercase tracking-wide font-medium text-white hover:text-amber-300 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contacto"
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium uppercase tracking-wide rounded-lg transition-all duration-300 shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PEDIR POR WHATSAPP
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};