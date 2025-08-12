'use client';

import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';

interface WhatsappButtonProps {
  phone?: string;
  message?: string;
}

export const WhatsappButton = ({ phone, message }: WhatsappButtonProps) => {
  const handleWhatsappClick = () => {
    const fallbackPhone = '5493364010667';
    const cleanPhone = (phone || fallbackPhone).replace(/[^\d]/g, '');
    const defaultMessage = 'Hola %F0%9F%91%8B%2C quiero hacer un pedido para retirar en local. Mi nombre es%3A ';
    const encodedMessage = message ? encodeURIComponent(message) : defaultMessage;
    
    // Crear la URL de WhatsApp Web
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    
    // Abrir WhatsApp Web en nueva pestaña
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleWhatsappClick}
      className="
        fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50
        w-16 h-16 md:w-16 md:h-16
        bg-green-500 hover:bg-green-600
        rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        hover:scale-105
        flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2
        group
        border-2 border-white
      "
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      {/* Texto explicativo para pantallas grandes */}
      <span className="absolute -top-10 right-0 bg-white px-3 py-1 rounded-lg shadow-md text-sm 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      hidden md:block whitespace-nowrap font-medium text-green-700">
        Contactar por WhatsApp
      </span>
      
      {/* Etiqueta para accesibilidad en móviles */}
      <span className="sr-only">Contactar por WhatsApp</span>
      
      {/* Logo de WhatsApp */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
      </svg>
    </button>
  );
}; 