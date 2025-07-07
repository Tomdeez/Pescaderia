"use client";
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Navegación',
      links: [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Productos', href: '#productos' },
        { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
        { label: 'Contacto', href: '#contacto' },
      ],
    },
    {
      title: 'Productos',
      links: [
        { label: 'Pescados Frescos', href: '#productos' },
        { label: 'Mariscos', href: '#productos' },
        { label: 'Especialidades', href: '#productos' },
        { label: 'Productos Premium', href: '#productos' },
      ],
    },
    {
      title: 'Horarios',
      content: [
        'Lunes a Viernes: 8:00 - 20:00',
        'Sábados: 8:00 - 14:00',
        'Domingos: Cerrado',
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo y Descripción */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <Image
                  src="/imagenes/dg logo.jpg"
                  alt="Estrellita de Mar Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="font-playfair text-xl font-bold">
                  Estrellita de Mar
                </span>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Ofrecemos la mejor selección de productos del mar, 
              garantizando frescura y calidad premium en cada entrega.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-accent transition-colors duration-300"
                aria-label="Síguenos en Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-accent transition-colors duration-300"
                aria-label="Síguenos en Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,2.2c3.2,0,3.6,0,4.9,0.1c3.3,0.1,4.8,1.7,4.9,4.9c0.1,1.3,0.1,1.6,0.1,4.8c0,3.2,0,3.6-0.1,4.8c-0.1,3.2-1.7,4.8-4.9,4.9c-1.3,0.1-1.6,0.1-4.9,0.1c-3.2,0-3.6,0-4.8-0.1c-3.3-0.1-4.8-1.7-4.9-4.9c-0.1-1.3-0.1-1.6-0.1-4.8c0-3.2,0-3.6,0.1-4.8c0.1-3.2,1.7-4.8,4.9-4.9C8.4,2.2,8.8,2.2,12,2.2z M12,0C8.7,0,8.3,0,7.1,0.1c-4.4,0.2-6.8,2.6-7,7C0,8.3,0,8.7,0,12s0,3.7,0.1,4.9c0.2,4.4,2.6,6.8,7,7C8.3,24,8.7,24,12,24s3.7,0,4.9-0.1c4.4-0.2,6.8-2.6,7-7C24,15.7,24,15.3,24,12s0-3.7-0.1-4.9c-0.2-4.4-2.6-6.8-7-7C15.7,0,15.3,0,12,0z M12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8z M12,16c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S14.2,16,12,16z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-accent transition-colors duration-300"
                aria-label="Síguenos en WhatsApp"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>
            </div>
          </div>

          {/* Secciones de Enlaces */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-playfair text-lg font-bold mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links?.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {section.content?.map((text, index) => (
                  <li key={index} className="text-white/80">
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contacto */}
          <div>
            <h3 className="font-playfair text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-4 text-white/80">
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-accent transition-colors duration-300"
                >
                  +123 456 7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@estrellitademar.com"
                  className="hover:text-accent transition-colors duration-300"
                >
                  info@estrellitademar.com
                </a>
              </li>
              <li>Av. del Mar 123,</li>
              <li>Ciudad del Mar, CP 12345</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60">
          <p>
            © {currentYear} Estrellita de Mar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}; 