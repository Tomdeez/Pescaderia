export interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  disponibilidad: 'En Stock' | 'Bajo Pedido' | 'Temporada';
}

export const productos: Producto[] = [
  {
    id: 1,
    titulo: 'Salmón Fresco Selecto',
    descripcion: 'Salmón noruego de la más alta calidad, ideal para preparaciones en crudo o cocidas.',
    imagen: '/imagenes/pesfrescohielo.jpg',
    categoria: 'Pescados',
    disponibilidad: 'En Stock',
  },
  {
    id: 2,
    titulo: 'Langostinos Patagónicos',
    descripcion: 'Langostinos salvajes de la Patagonia, perfectos para parrilla o preparaciones gourmet.',
    imagen: '/imagenes/langostinos.jpg',
    categoria: 'Mariscos',
    disponibilidad: 'Bajo Pedido',
  },
  {
    id: 3,
    titulo: 'Pulpo Gallego',
    descripcion: 'Pulpo certificado de las rías gallegas, textura tierna y sabor excepcional.',
    imagen: '/imagenes/picadamar.jpg',
    categoria: 'Mariscos',
    disponibilidad: 'Temporada',
  },
  {
    id: 4,
    titulo: 'Camarones Selectos',
    descripcion: 'Camarones frescos seleccionados, perfectos para cócteles y entradas.',
    imagen: '/imagenes/camaron.jpg',
    categoria: 'Mariscos',
    disponibilidad: 'En Stock',
  },
]; 