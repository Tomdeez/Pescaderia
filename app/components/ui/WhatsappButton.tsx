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
        fixed bottom-6 right-6 z-50
        w-14 h-14 md:w-16 md:h-16
        bg-green-500 hover:bg-green-600
        rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        hover:scale-105
        flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2
        group
      "
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <ChatBubbleLeftEllipsisIcon 
        className="
          w-6 h-6 md:w-8 md:h-8 
          text-white
          transition-transform duration-300
          group-hover:scale-110
        " 
      />
    </button>
  );
}; 