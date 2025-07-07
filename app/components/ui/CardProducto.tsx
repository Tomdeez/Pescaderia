import Image from 'next/image';
import Link from 'next/link';

interface CardProductoProps {
  imagen: string;
  titulo: string;
  descripcion: string;
  precio?: string;
  categoria: string;
  disponibilidad: 'En Stock' | 'Bajo Pedido' | 'Temporada';
}

export const CardProducto = ({
  imagen,
  titulo,
  descripcion,
  precio,
  categoria,
  disponibilidad,
}: CardProductoProps) => {
  const disponibilidadColor = {
    'En Stock': 'bg-green-100 text-green-800',
    'Bajo Pedido': 'bg-yellow-100 text-yellow-800',
    'Temporada': 'bg-blue-100 text-blue-800',
  }[disponibilidad];

  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Imagen */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imagen}
          alt={titulo}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              {categoria}
            </span>
            <h3 className="font-playfair text-xl font-bold text-primary mt-1">
              {titulo}
            </h3>
          </div>
          {precio && (
            <span className="font-montserrat text-lg font-semibold text-primary">
              {precio}
            </span>
          )}
        </div>

        <p className="text-text-light mb-4 line-clamp-2">{descripcion}</p>

        <div className="flex items-center justify-between">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${disponibilidadColor}`}
          >
            {disponibilidad}
          </span>

          <Link
            href="#contacto"
            className="text-primary font-medium hover:text-accent transition-colors duration-300"
          >
            Consultar →
          </Link>
        </div>
      </div>

      {/* Overlay con efecto hover */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none" />
    </article>
  );
}; 