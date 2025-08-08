export interface Beneficio {
  icono: string;
  titulo: string;
  descripcion: string;
}

export const beneficios: Beneficio[] = [
  { 
    icono: "🚚", 
    titulo: "24h Entrega en el día", 
    descripcion: "Entrega rápida y segura en San Nicolás y zona metropolitana" 
  },
  { 
    icono: "❄️", 
    titulo: "100% Garantía de Frescura", 
    descripcion: "Cadena de frío garantizada desde el origen hasta tu mesa" 
  },
  { 
    icono: "⭐", 
    titulo: "Calidad Certificada", 
    descripcion: "Selección diaria y certificación de calidad en todos nuestros productos" 
  }
]; 