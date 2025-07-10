"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#productos', label: 'Productos' },
    { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '#distribuidora', label: 'Distribución' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-xl py-2'
          : 'bg-black/20 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center space-x-2">
              <Image
                src="/imagenes/Oscuro sin txt.png"
                alt="Isotipo Estrellita de Mar"
                width={90}
                height={90}
                className="rounded-full bg-white shadow-xl"
              />
              <span className={`font-playfair text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white drop-shadow-lg'
              }`}>
                Estrellita de Mar
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-wider font-semibold transition-colors duration-300 hover:scale-105 transform ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-primary' 
                    : 'text-white hover:text-accent drop-shadow-lg'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className={`px-6 py-2 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-105 transform ${
                isScrolled
                  ? 'bg-primary hover:bg-primary-light text-white shadow-lg'
                  : 'bg-accent hover:bg-accent-light text-white shadow-xl'
              }`}
            >
              Hacer Pedido
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-2">
              <span
                className={`block w-8 h-0.5 transform transition duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                } ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}
              />
              <span
                className={`block w-8 h-0.5 transition duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                } ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}
              />
              <span
                className={`block w-8 h-0.5 transform transition duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                } ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white/98 backdrop-blur-md transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-semibold text-gray-600 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="px-8 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hacer Pedido
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}; 