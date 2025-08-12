'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export const AnimatedButton = ({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
  onClick,
}: AnimatedButtonProps) => {
  // Estilos base según la variante
  const baseStyles = {
    primary: 'bg-sky-600 hover:bg-sky-700 text-white shadow-md',
    secondary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-md',
    outline: 'bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-800 shadow-sm',
  };

  // Animaciones
  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' },
    tap: { scale: 0.98 },
  };

  // Componentes necesarios para link externo vs interno
  const commonProps = {
    className: `${baseStyles[variant]} px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center gap-2 ${className}`,
    onClick,
  };

  // Verificar si es un link externo o interno
  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        {...commonProps}
      >
        {children}
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </motion.a>
    );
  }

  // Para links internos
  return (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        {...commonProps}
      >
        {children}
      </motion.a>
    </Link>
  );
};

export default AnimatedButton;
