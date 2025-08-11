export interface MenuDia {
  dia: string;
  imagenes: string[];
}

// Edita las rutas según los nombres reales en `public/images/`.
// Se aceptan nombres con espacios como "martes 2.jpg".
export const menuDelDia: MenuDia[] = [
  { dia: 'Lunes', imagenes: ['/imagenes/lunes.jpg'] },
  { dia: 'Martes', imagenes: ['/imagenes/martes.jpg', '/imagenes/martes 2.jpg'] },
  { dia: 'Miércoles', imagenes: ['/imagenes/miercoles.jpg'] },
  { dia: 'Jueves', imagenes: ['/imagenes/jueves.jpg'] },
  { dia: 'Viernes', imagenes: ['/imagenes/viernes.jpg'] },
  { dia: 'Sábado', imagenes: ['/imagenes/sabado.jpg'] },
];


