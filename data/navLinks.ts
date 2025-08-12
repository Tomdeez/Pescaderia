export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#productos', label: 'Productos' },
  { href: '#menu', label: 'Menú del día' },
  { href: '#recetas', label: 'Recetas' },
  { href: '#ofertas', label: 'Promociones' },
  { href: '#distribuidora', label: 'Distribución' },
  { href: '#contacto', label: 'Contacto' },
]; 

// Versión abreviada para pantallas pequeñas
export const navLinksCompact: NavLink[] = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#productos', label: 'Productos' },
  { href: '#menu', label: 'Menú' },
  { href: '#recetas', label: 'Recetas' },
  { href: '#ofertas', label: 'Ofertas' },
  { href: '#distribuidora', label: 'Distribución' },
  { href: '#contacto', label: 'Contacto' },
];