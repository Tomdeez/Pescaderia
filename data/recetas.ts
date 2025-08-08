export interface Receta {
  id: string;
  titulo: string;
  descripcion: string;
  emoji: string;
  complexity: "Rápida" | "Intermedia" | "Gourmet";
  tiempo: string;
  ingredientes: string[];
  instrucciones: string[];
  categoria: string;
  calorias?: string;
  dificultad: number; // 1-5
}

export const recetas: Receta[] = [
  {
    id: "salmon-costra-hierbas",
    titulo: "Salmón en Costra de Hierbas Finas",
    descripcion: "Un plato elegante de salmón premium con costra de hierbas y reducción de vino blanco. Perfecto para ocasiones especiales.",
    emoji: "✨",
    complexity: "Gourmet",
    tiempo: "50 minutos",
    ingredientes: [
      "Salmón premium fresco",
      "Hierbas finas (tomillo, romero, eneldo)",
      "Pan rallado de masa madre",
      "Mostaza Dijon",
      "Vino blanco",
      "Manteca clarificada",
      "Echalotes",
      "Crema",
      "Sal marina en escamas",
      "Pimienta de molinillo"
    ],
    instrucciones: [
      "Prepará la costra mezclando hierbas, pan rallado y manteca",
      "Sellá el salmón por el lado de la piel",
      "Pincelá con mostaza Dijon",
      "Cubrí con la mezcla de hierbas",
      "Horneá a 180°C hasta el punto deseado",
      "Prepará la salsa con echalotes y vino",
      "Serví con la reducción de vino y decorá con hierbas frescas"
    ],
    categoria: "Salmón",
    calorias: "380 kcal",
    dificultad: 4
  },
  {
    id: "lubina-mar-y-tierra",
    titulo: "Lubina Mar y Tierra",
    descripcion: "Una creación especial que combina lubina fresca con panceta crocante y vegetales glaseados. Un plato que une lo mejor del mar y la tierra.",
    emoji: "🌊",
    complexity: "Gourmet",
    tiempo: "55 minutos",
    ingredientes: [
      "Lubina fresca premium",
      "Panceta ahumada",
      "Espárragos",
      "Zanahorias baby",
      "Puré de coliflor",
      "Manteca de hierbas",
      "Vino blanco",
      "Aceite de oliva extra virgen",
      "Brotes frescos",
      "Sal y pimienta en granos"
    ],
    instrucciones: [
      "Prepará el puré de coliflor con manteca",
      "Glaseá las verduras baby",
      "Crocantizá la panceta",
      "Cociná la lubina a la plancha",
      "Armá el plato en capas",
      "Decorá con brotes y aceite de hierbas",
      "Serví con la salsa de vino reducido"
    ],
    categoria: "Pescado",
    calorias: "420 kcal",
    dificultad: 4
  },
  {
    id: "degustacion-mariscos",
    titulo: "Degustación de Mariscos del Chef",
    descripcion: "Un plato de autor que presenta tres preparaciones diferentes de mariscos premium. Una experiencia gastronómica completa.",
    emoji: "👨‍🍳",
    complexity: "Gourmet",
    tiempo: "70 minutos",
    ingredientes: [
      "Vieiras frescas",
      "Langostinos jumbo",
      "Pulpo español",
      "Risotto negro",
      "Espuma de azafrán",
      "Salsa de manteca cítrica",
      "Hierbas frescas",
      "Microgreens",
      "Aceite de trufa",
      "Sales gourmet variadas"
    ],
    instrucciones: [
      "Prepará el risotto con tinta de calamar",
      "Marcá las vieiras hasta dorar",
      "Cociná los langostinos en manteca de hierbas",
      "Terminá el pulpo a la parrilla",
      "Montá el plato con las tres preparaciones",
      "Agregá la espuma de azafrán",
      "Decorá con microgreens y aceite de trufa"
    ],
    categoria: "Mariscos",
    calorias: "460 kcal",
    dificultad: 5
  },
  {
    id: "centolla-moderna",
    titulo: "Centolla en Texturas",
    descripcion: "Una interpretación moderna de la centolla que juega con diferentes texturas y temperaturas. Un plato sofisticado que sorprende.",
    emoji: "🦀",
    complexity: "Gourmet",
    tiempo: "65 minutos",
    ingredientes: [
      "Centolla fresca",
      "Palta",
      "Mango",
      "Pepino",
      "Caviar de wasabi",
      "Crema agria",
      "Cítricos variados",
      "Brotes de cilantro",
      "Aceite de coco",
      "Chips de plátano"
    ],
    instrucciones: [
      "Prepará la centolla en tres cocciones",
      "Hacé un puré de palta ahumada",
      "Cortá los cítricos en supremas",
      "Armá la presentación por capas",
      "Agregá los elementos crocantes",
      "Decorá con caviar y brotes",
      "Serví con la salsa de cítricos"
    ],
    categoria: "Mariscos",
    calorias: "380 kcal",
    dificultad: 5
  },
  {
    id: "pescado-plancha-simple",
    titulo: "Pescado a la Plancha Simple",
    descripcion: "Un pescado doradito y jugoso, ideal para principiantes. Con ajo, perejil y limón, imposible que salga mal.",
    emoji: "⚡",
    complexity: "Rápida",
    tiempo: "15 minutos",
    ingredientes: ["Filete de pescado blanco", "Ajo", "Perejil", "Limón", "Aceite", "Sal y pimienta"],
    instrucciones: [
      "Condimentá el pescado con sal y pimienta",
      "Calentá la plancha con un chorrito de aceite",
      "Cocinalo 3-4 minutos de cada lado",
      "Agregale ajo picado y perejil",
      "Servilo con limón"
    ],
    categoria: "Pescado",
    calorias: "180 kcal",
    dificultad: 1
  },
  {
    id: "salmon-horno-verduras",
    titulo: "Salmón al Horno con Verduritas",
    descripcion: "Una receta completa que combina salmón con verduras. Perfecta para una cena en familia.",
    emoji: "🍽️",
    complexity: "Intermedia",
    tiempo: "35 minutos",
    ingredientes: ["Salmón fresco", "Brócoli", "Zanahorias", "Limón", "Condimentos", "Aceite"],
    instrucciones: [
      "Precalentá el horno a 200°C",
      "Prepará las verduras en una fuente",
      "Condimentá el salmón",
      "Horneá todo por 20-25 minutos",
      "Servilo calentito"
    ],
    categoria: "Salmón",
    calorias: "320 kcal",
    dificultad: 2
  },
  {
    id: "rabas-caseras",
    titulo: "Rabas Caseras Tiernitas",
    descripcion: "Rabas caseras crocantes por fuera y tiernas por dentro. El secreto está en la preparación previa.",
    emoji: "🦑",
    complexity: "Intermedia",
    tiempo: "40 minutos",
    ingredientes: ["Anillos de calamar", "Harina", "Huevo", "Limón", "Sal", "Pimienta", "Aceite para freír"],
    instrucciones: [
      "Secá bien los anillos de calamar",
      "Pasalos por harina, huevo y harina de nuevo",
      "Calentá bien el aceite",
      "Freílos hasta que estén doraditos",
      "Servilos con limón y sal"
    ],
    categoria: "Mariscos",
    calorias: "280 kcal",
    dificultad: 3
  },
  {
    id: "pescado-milanesa",
    titulo: "Milanesas de Pescado Caseras",
    descripcion: "Milanesas de pescado súper crocantes. Una opción más liviana que las de carne y muy rica.",
    emoji: "🐟",
    complexity: "Rápida",
    tiempo: "25 minutos",
    ingredientes: ["Filetes de merluza", "Pan rallado", "Huevo", "Ajo y perejil", "Sal y pimienta", "Aceite"],
    instrucciones: [
      "Condimentá los filetes con sal y pimienta",
      "Pasalos por huevo con ajo y perejil",
      "Empanalos con pan rallado",
      "Frielos en aceite caliente",
      "Servilos con limón"
    ],
    categoria: "Pescado",
    calorias: "250 kcal",
    dificultad: 2
  },
  {
    id: "pescado-al-roquefort",
    titulo: "Pescado con Salsa de Roquefort",
    descripcion: "Un plato más elaborado pero fácil de hacer. La salsa de roquefort le da un toque especial.",
    emoji: "👨‍🍳",
    complexity: "Intermedia",
    tiempo: "30 minutos",
    ingredientes: ["Filetes de pescado blanco", "Queso roquefort", "Crema", "Cebolla", "Manteca", "Sal y pimienta"],
    instrucciones: [
      "Salteá la cebolla en manteca",
      "Agregá la crema y el roquefort",
      "Colocá los filetes en una fuente",
      "Cubrí con la salsa",
      "Horneá por 15-20 minutos"
    ],
    categoria: "Pescado",
    calorias: "320 kcal",
    dificultad: 3
  },
  {
    id: "cornalitos-fritos",
    titulo: "Cornalitos Fritos Crocantes",
    descripcion: "Un clásico de la costa argentina. Crocantes y sabrosos, ideales como entrada o picada.",
    emoji: "🐠",
    complexity: "Rápida",
    tiempo: "20 minutos",
    ingredientes: ["Cornalitos frescos", "Harina", "Sal", "Pimienta", "Aceite para freír", "Limón"],
    instrucciones: [
      "Lavá y secá bien los cornalitos",
      "Pasalos por harina con sal y pimienta",
      "Freílos en aceite bien caliente",
      "Escurrí sobre papel absorbente",
      "Serví con limón"
    ],
    categoria: "Pescado",
    calorias: "200 kcal",
    dificultad: 1
  },
  {
    id: "cazuela-mariscos",
    titulo: "Cazuela de Mariscos Casera",
    descripcion: "Una cazuela abundante y sabrosa con diferentes mariscos. Ideal para compartir en familia.",
    emoji: "🥘",
    complexity: "Intermedia",
    tiempo: "45 minutos",
    ingredientes: ["Mejillones", "Camarones", "Pescado en cubos", "Caldo de pescado", "Verduras", "Condimentos"],
    instrucciones: [
      "Prepará un sofrito con las verduras",
      "Agregá el caldo y los condimentos",
      "Incorporá los mariscos en orden",
      "Cociná a fuego medio",
      "Servila bien caliente"
    ],
    categoria: "Mariscos",
    calorias: "300 kcal",
    dificultad: 3
  },
  {
    id: "brochettes-mar",
    titulo: "Brochettes Mixtas de Mar",
    descripcion: "Brochettes variadas con pescados y mariscos. Una opción diferente para la parrilla.",
    emoji: "🍖",
    complexity: "Intermedia",
    tiempo: "35 minutos",
    ingredientes: ["Pescado en cubos", "Camarones", "Calamar", "Morrones", "Cebolla", "Condimentos"],
    instrucciones: [
      "Cortá los pescados y mariscos en trozos",
      "Armá las brochettes alternando con verduras",
      "Pincelalas con aceite y condimentos",
      "Cocinalas en la parrilla",
      "Dalas vuelta con cuidado"
    ],
    categoria: "Mariscos",
    calorias: "250 kcal",
    dificultad: 2
  },
  {
    id: "empanadas-atun",
    titulo: "Empanadas de Atún Caseras",
    descripcion: "Empanadas de atún súper fáciles y ricas. Ideales para cuando no tenés mucho tiempo.",
    emoji: "🥟",
    complexity: "Rápida",
    tiempo: "30 minutos",
    ingredientes: ["Tapas de empanadas", "Atún al natural", "Cebolla", "Morrón", "Huevo duro", "Condimentos"],
    instrucciones: [
      "Picá la cebolla y el morrón",
      "Mezclá con el atún y el huevo",
      "Armá las empanadas",
      "Pintá con huevo",
      "Hornealas hasta que estén doradas"
    ],
    categoria: "Atún",
    calorias: "180 kcal",
    dificultad: 1
  },
  {
    id: "tarta-atun",
    titulo: "Tarta de Atún Fácil",
    descripcion: "Una tarta rápida y rica que no falla. Perfecta para una cena informal.",
    emoji: "🥧",
    complexity: "Rápida",
    tiempo: "40 minutos",
    ingredientes: ["Masa de tarta", "Atún al natural", "Cebolla", "Huevos", "Queso rallado", "Condimentos"],
    instrucciones: [
      "Rehogá la cebolla",
      "Mezclá con el atún y huevos batidos",
      "Poné en la tarta",
      "Cubrí con queso rallado",
      "Horneá hasta que esté dorada"
    ],
    categoria: "Atún",
    calorias: "220 kcal",
    dificultad: 1
  },
  {
    id: "pescado-cerveza",
    titulo: "Pescado a la Cerveza",
    descripcion: "Pescado con una marinada de cerveza que lo hace súper tierno. Una receta diferente y rica.",
    emoji: "🍺",
    complexity: "Intermedia",
    tiempo: "35 minutos",
    ingredientes: ["Filetes de pescado", "Cerveza rubia", "Ajo", "Perejil", "Limón", "Condimentos"],
    instrucciones: [
      "Mariná el pescado en cerveza",
      "Prepará una salsa con ajo y perejil",
      "Colocá todo en una fuente",
      "Horneá a temperatura media",
      "Servilo con la salsa"
    ],
    categoria: "Pescado",
    calorias: "240 kcal",
    dificultad: 2
  },
  {
    id: "ensalada-mar",
    titulo: "Ensalada de Mar Simple",
    descripcion: "Una ensalada fresca con mariscos. Perfecta para el verano o como entrada.",
    emoji: "🥗",
    complexity: "Rápida",
    tiempo: "20 minutos",
    ingredientes: ["Camarones cocidos", "Palmitos", "Huevo duro", "Lechuga", "Tomate", "Mayonesa"],
    instrucciones: [
      "Cortá las verduras",
      "Mezclá con los camarones",
      "Agregá palmitos y huevo",
      "Condimentá a gusto",
      "Servila fría"
    ],
    categoria: "Mariscos",
    calorias: "180 kcal",
    dificultad: 1
  }
];

export const categorias = ["Todas", "Rápida", "Intermedia", "Gourmet"];