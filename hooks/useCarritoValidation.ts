import { useState, useEffect } from 'react';

interface ValidationErrors {
  hasErrors: boolean;
  messages: string[];
}

import type { Producto } from '@data/productos';

interface UseCarritoValidationProps {
  carrito: { [id: number]: number };
  productos: Producto[];
}

export const useCarritoValidation = ({ carrito, productos }: UseCarritoValidationProps) => {
  const [errors, setErrors] = useState<ValidationErrors>({ hasErrors: false, messages: [] });

  useEffect(() => {
    const newErrors: string[] = [];

    // Validar que haya productos seleccionados
    if (Object.keys(carrito).length === 0) {
      newErrors.push("Debe seleccionar al menos un producto");
    }

    // Límites de negocio
    const MAX_POR_PRODUCTO = 50;
    const MAX_POR_PRODUCTO_BAJO_PEDIDO = 20;
    const MAX_TOTAL = 100;

    // Validar cantidades por producto
    Object.entries(carrito).forEach(([id, cantidad]) => {
      const producto = productos.find(p => p.id === Number(id));
      if (producto) {
        if (cantidad > MAX_POR_PRODUCTO) {
          newErrors.push(`La cantidad máxima para ${producto.titulo} es ${MAX_POR_PRODUCTO} unidades`);
        }
        if (producto.disponibilidad === 'Bajo Pedido' && cantidad > MAX_POR_PRODUCTO_BAJO_PEDIDO) {
          newErrors.push(`Los productos bajo pedido tienen un límite de ${MAX_POR_PRODUCTO_BAJO_PEDIDO} unidades (${producto.titulo})`);
        }
      }
    });

    // Validar cantidad total de productos
    const cantidadTotal = Object.values(carrito).reduce((sum, cantidad) => sum + cantidad, 0);
    if (cantidadTotal > MAX_TOTAL) {
      newErrors.push(`El pedido no puede exceder las ${MAX_TOTAL} unidades en total`);
    }

    setErrors({
      hasErrors: newErrors.length > 0,
      messages: newErrors
    });
  }, [carrito, productos]);

  return errors;
};