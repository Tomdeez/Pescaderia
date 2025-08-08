import { useState, useEffect } from 'react';

interface ValidationErrors {
  hasErrors: boolean;
  messages: string[];
}

interface UseCarritoValidationProps {
  carrito: { [id: number]: number };
  productos: any[]; // Ajusta el tipo según tu interfaz de productos
}

export const useCarritoValidation = ({ carrito, productos }: UseCarritoValidationProps) => {
  const [errors, setErrors] = useState<ValidationErrors>({ hasErrors: false, messages: [] });

  useEffect(() => {
    const newErrors: string[] = [];

    // Validar que haya productos seleccionados
    if (Object.keys(carrito).length === 0) {
      newErrors.push("Debe seleccionar al menos un producto");
    }

    // Validar cantidades máximas por producto
    Object.entries(carrito).forEach(([id, cantidad]) => {
      const producto = productos.find(p => p.id === Number(id));
      if (producto) {
        if (cantidad > 50) {
          newErrors.push(`La cantidad máxima para ${producto.titulo} es 50 unidades`);
        }
        if (producto.disponibilidad === 'Bajo Pedido' && cantidad > 20) {
          newErrors.push(`Los productos bajo pedido tienen un límite de 20 unidades (${producto.titulo})`);
        }
      }
    });

    // Validar cantidad total de productos
    const cantidadTotal = Object.values(carrito).reduce((sum, cantidad) => sum + cantidad, 0);
    if (cantidadTotal > 100) {
      newErrors.push("El pedido no puede exceder las 100 unidades en total");
    }

    setErrors({
      hasErrors: newErrors.length > 0,
      messages: newErrors
    });
  }, [carrito, productos]);

  return errors;
};