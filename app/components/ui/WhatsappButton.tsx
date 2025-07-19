'use client';

import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';

interface WhatsappButtonProps {
  phone: string;
  message: string;
}

export const WhatsappButton = ({ phone, message }: WhatsappButtonProps) => {
  const handleWhatsappClick = () => {
    // Limpiar el número de teléfono (remover espacios, guiones, etc.)
    const cleanPhone = phone.replace(/[^\d]/g, '');
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
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