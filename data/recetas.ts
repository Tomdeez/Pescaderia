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
    id: "pescado-plancha-express",
    titulo: "Pescado a la Plancha Express",
    descripcion: "En solo 15 minutos, disfruta de un filete de pescado dorado y jugoso. Condimentado con ajo, perejil y limón para una comida saludable y deliciosa.",
    emoji: "⚡",
    complexity: "Rápida",
    tiempo: "15 minutos",
    ingredientes: ["Filete de pescado blanco", "Ajo", "Perejil", "Limón", "Aceite de oliva", "Sal y pimienta"],
    instrucciones: [
      "Sazonar el pescado con sal y pimienta",
      "Calentar una plancha con aceite de oliva",
      "Cocinar el pescado 3-4 minutos por lado",
      "Agregar ajo picado y perejil",
      "Servir con limón fresco"
    ],
    categoria: "Pescado",
    calorias: "180 kcal",
    dificultad: 1
  },
  {
    id: "salmon-horno-verduras",
    titulo: "Salmón al Horno con Verduras",
    descripcion: "Una receta completa y nutritiva que combina salmón fresco con vegetales de temporada. Perfecta para una cena familiar balanceada.",
    emoji: "🍽️",
    complexity: "Intermedia",
    tiempo: "35 minutos",
    ingredientes: ["Salmón fresco", "Brócoli", "Zanahorias", "Limón", "Hierbas provenzales", "Aceite de oliva"],
    instrucciones: [
      "Precalentar el horno a 200°C",
      "Preparar las verduras en una bandeja",
      "Sazonar el salmón con hierbas y limón",
      "Hornear 20-25 minutos",
      "Servir caliente"
    ],
    categoria: "Salmón",
    calorias: "320 kcal",
    dificultad: 2
  },
  {
    id: "ceviche-langostinos",
    titulo: "Ceviche Gourmet de Langostinos",
    descripcion: "Una experiencia gastronómica única con langostinos frescos, marinados en jugos cítricos y acompañados de especias aromáticas.",
    emoji: "👨‍🍳",
    complexity: "Gourmet",
    tiempo: "45 minutos",
    ingredientes: ["Langostinos frescos", "Lima", "Limón", "Cebolla morada", "Cilantro", "Ají limo", "Camote"],
    instrucciones: [
      "Cocinar los langostinos en agua hirviendo",
      "Preparar el marinado con jugos cítricos",
      "Cortar la cebolla en juliana fina",
      "Marinar los langostinos por 30 minutos",
      "Servir con camote y choclo"
    ],
    categoria: "Mariscos",
    calorias: "250 kcal",
    dificultad: 4
  },
  {
    id: "atun-parrilla",
    titulo: "Atún a la Parrilla con Salsa Teriyaki",
    descripcion: "Atún fresco a la parrilla con una salsa teriyaki casera. Una opción perfecta para los amantes del sushi y la cocina asiática.",
    emoji: "🔥",
    complexity: "Intermedia",
    tiempo: "25 minutos",
    ingredientes: ["Atún fresco", "Salsa de soja", "Miel", "Jengibre", "Ajo", "Sésamo"],
    instrucciones: [
      "Preparar la salsa teriyaki",
      "Marinar el atún por 15 minutos",
      "Calentar la parrilla a fuego alto",
      "Cocinar 2-3 minutos por lado",
      "Servir con sésamo tostado"
    ],
    categoria: "Atún",
    calorias: "280 kcal",
    dificultad: 3
  },
  {
    id: "camarones-ajo",
    titulo: "Camarones al Ajo y Limón",
    descripcion: "Camarones frescos salteados con ajo, limón y hierbas aromáticas. Una receta rápida y llena de sabor mediterráneo.",
    emoji: "🦐",
    complexity: "Rápida",
    tiempo: "12 minutos",
    ingredientes: ["Camarones pelados", "Ajo", "Limón", "Perejil", "Mantequilla", "Vino blanco"],
    instrucciones: [
      "Derretir mantequilla en sartén",
      "Agregar ajo picado fino",
      "Cocinar camarones 2-3 minutos",
      "Agregar vino blanco y limón",
      "Terminar con perejil fresco"
    ],
    categoria: "Mariscos",
    calorias: "220 kcal",
    dificultad: 1
  },
  {
    id: "merluza-papillote",
    titulo: "Merluza en Papillote con Hierbas",
    descripcion: "Merluza cocinada al vapor en papillote con hierbas frescas y vegetales. Una técnica que preserva todos los nutrientes y sabores.",
    emoji: "📄",
    complexity: "Intermedia",
    tiempo: "30 minutos",
    ingredientes: ["Merluza", "Eneldo", "Limón", "Verduras mixtas", "Papel aluminio", "Aceite de oliva"],
    instrucciones: [
      "Preparar el papillote con papel aluminio",
      "Colocar verduras en la base",
      "Agregar la merluza con hierbas",
      "Cerrar el papillote herméticamente",
      "Hornear a 180°C por 20 minutos"
    ],
    categoria: "Pescado",
    calorias: "190 kcal",
    dificultad: 2
  },
  {
    id: "langosta-termidor",
    titulo: "Langosta Thermidor Clásica",
    descripcion: "Una receta clásica francesa con langosta fresca, salsa bechamel y queso gratinado. Una experiencia gastronómica de alto nivel.",
    emoji: "🦞",
    complexity: "Gourmet",
    tiempo: "60 minutos",
    ingredientes: ["Langosta viva", "Mantequilla", "Harina", "Leche", "Mostaza", "Parmesano", "Cognac"],
    instrucciones: [
      "Cocinar la langosta en agua con sal",
      "Preparar la salsa bechamel",
      "Extraer la carne de la langosta",
      "Mezclar con la salsa y mostaza",
      "Gratinar con queso parmesano"
    ],
    categoria: "Mariscos",
    calorias: "450 kcal",
    dificultad: 5
  },
  {
    id: "trucha-limones",
    titulo: "Trucha con Limones Confitados",
    descripcion: "Trucha fresca con limones confitados y hierbas aromáticas. Una combinación perfecta de sabores ácidos y frescos.",
    emoji: "🐟",
    complexity: "Intermedia",
    tiempo: "40 minutos",
    ingredientes: ["Trucha entera", "Limones", "Tomillo", "Romero", "Aceite de oliva", "Sal marina"],
    instrucciones: [
      "Preparar los limones confitados",
      "Limpiar y sazonar la trucha",
      "Rellenar con hierbas y limón",
      "Hornear a 180°C por 25 minutos",
      "Servir con limones confitados"
    ],
    categoria: "Pescado",
    calorias: "240 kcal",
    dificultad: 3
  },
  {
    id: "ostras-gratinadas",
    titulo: "Ostras Gratinadas con Queso",
    descripcion: "Ostras frescas gratinadas con una mezcla de quesos y hierbas. Un aperitivo elegante y delicioso.",
    emoji: "🦪",
    complexity: "Rápida",
    tiempo: "18 minutos",
    ingredientes: ["Ostras frescas", "Queso parmesano", "Pan rallado", "Perejil", "Mantequilla", "Ajo"],
    instrucciones: [
      "Abrir las ostras cuidadosamente",
      "Preparar la mezcla de queso y pan",
      "Colocar sobre las ostras",
      "Gratinar en horno alto por 8 minutos",
      "Servir inmediatamente"
    ],
    categoria: "Mariscos",
    calorias: "180 kcal",
    dificultad: 2
  },
  {
    id: "bacalao-patatas",
    titulo: "Bacalao con Patatas y Aceitunas",
    descripcion: "Bacalao fresco con patatas doradas y aceitunas negras. Una receta mediterránea llena de sabores tradicionales.",
    emoji: "🥔",
    complexity: "Intermedia",
    tiempo: "45 minutos",
    ingredientes: ["Bacalao fresco", "Patatas", "Aceitunas negras", "Ajo", "Aceite de oliva", "Pimentón"],
    instrucciones: [
      "Cortar patatas en rodajas",
      "Dorar patatas en aceite de oliva",
      "Agregar ajo y pimentón",
      "Colocar bacalao sobre patatas",
      "Hornear hasta que esté dorado"
    ],
    categoria: "Pescado",
    calorias: "310 kcal",
    dificultad: 2
  },
  {
    id: "pulpo-parrilla",
    titulo: "Pulpo a la Parrilla con Paprika",
    descripcion: "Pulpo tierno a la parrilla con paprika ahumada y aceite de oliva. Una receta que destaca la textura única del pulpo.",
    emoji: "🐙",
    complexity: "Gourmet",
    tiempo: "90 minutos",
    ingredientes: ["Pulpo fresco", "Paprika ahumada", "Aceite de oliva", "Limón", "Ajo", "Perejil"],
    instrucciones: [
      "Cocinar el pulpo en agua con sal",
      "Enfriar y cortar en trozos",
      "Marinar con paprika y aceite",
      "Asar en parrilla caliente",
      "Servir con limón y perejil"
    ],
    categoria: "Mariscos",
    calorias: "280 kcal",
    dificultad: 4
  },
  {
    id: "sardinas-horno",
    titulo: "Sardinas al Horno con Hierbas",
    descripcion: "Sardinas frescas al horno con hierbas mediterráneas. Una opción económica y nutritiva rica en omega-3.",
    emoji: "🐟",
    complexity: "Rápida",
    tiempo: "20 minutos",
    ingredientes: ["Sardinas frescas", "Orégano", "Tomillo", "Limón", "Aceite de oliva", "Sal marina"],
    instrucciones: [
      "Limpiar y sazonar las sardinas",
      "Colocar en bandeja con hierbas",
      "Agregar rodajas de limón",
      "Hornear a 200°C por 15 minutos",
      "Servir caliente"
    ],
    categoria: "Pescado",
    calorias: "200 kcal",
    dificultad: 1
  },
  {
    id: "merluza-sarten",
    titulo: "Merluza a la Sartén con Limón",
    descripcion: "Filetes de merluza dorados a la sartén con limón y hierbas. Una receta súper rápida y deliciosa.",
    emoji: "🍳",
    complexity: "Rápida",
    tiempo: "10 minutos",
    ingredientes: ["Filetes de merluza", "Limón", "Perejil", "Aceite de oliva", "Sal y pimienta", "Mantequilla"],
    instrucciones: [
      "Sazonar los filetes con sal y pimienta",
      "Calentar aceite y mantequilla en sartén",
      "Cocinar filetes 3-4 minutos por lado",
      "Agregar jugo de limón y perejil",
      "Servir inmediatamente"
    ],
    categoria: "Pescado",
    calorias: "160 kcal",
    dificultad: 1
  },
  {
    id: "salmon-rosado-papillote",
    titulo: "Salmón Rosado en Papillote Express",
    descripcion: "Salmón rosado cocinado al vapor en papillote con verduras. Una técnica que preserva todos los nutrientes.",
    emoji: "📄",
    complexity: "Rápida",
    tiempo: "15 minutos",
    ingredientes: ["Salmón rosado", "Verduras mixtas", "Limón", "Eneldo", "Aceite de oliva", "Papel aluminio"],
    instrucciones: [
      "Preparar el papillote con papel aluminio",
      "Colocar verduras en la base",
      "Agregar salmón con hierbas y limón",
      "Cerrar herméticamente",
      "Hornear a 180°C por 12 minutos"
    ],
    categoria: "Salmón",
    calorias: "220 kcal",
    dificultad: 1
  },
  {
    id: "pollo-mar-plancha",
    titulo: "Pollo de Mar a la Plancha",
    descripcion: "Pollo de mar fresco a la plancha con hierbas aromáticas. Una opción ligera y llena de sabor.",
    emoji: "🐟",
    complexity: "Rápida",
    tiempo: "12 minutos",
    ingredientes: ["Pollo de mar", "Hierbas provenzales", "Ajo", "Limón", "Aceite de oliva", "Sal marina"],
    instrucciones: [
      "Sazonar el pollo de mar con hierbas",
      "Calentar plancha con aceite de oliva",
      "Cocinar 2-3 minutos por lado",
      "Agregar ajo picado y limón",
      "Servir con hierbas frescas"
    ],
    categoria: "Pescado",
    calorias: "180 kcal",
    dificultad: 1
  },
  {
    id: "atun-sarten-rapido",
    titulo: "Atún a la Sartén en 8 Minutos",
    descripcion: "Atún fresco cocinado rápidamente a la sartén. Perfecto para cuando tienes poco tiempo pero quieres algo delicioso.",
    emoji: "⚡",
    complexity: "Rápida",
    tiempo: "8 minutos",
    ingredientes: ["Atún fresco", "Salsa de soja", "Sésamo", "Aceite de oliva", "Jengibre", "Ajo"],
    instrucciones: [
      "Marinar atún con salsa de soja y jengibre",
      "Calentar sartén con aceite",
      "Cocinar atún 2 minutos por lado",
      "Espolvorear sésamo tostado",
      "Servir inmediatamente"
    ],
    categoria: "Atún",
    calorias: "250 kcal",
    dificultad: 1
  },
  {
    id: "merluza-horno-rapida",
    titulo: "Merluza al Horno Express",
    descripcion: "Filetes de merluza al horno con hierbas y limón. Una receta que no falla y está lista en minutos.",
    emoji: "🔥",
    complexity: "Rápida",
    tiempo: "18 minutos",
    ingredientes: ["Filetes de merluza", "Limón", "Tomillo", "Aceite de oliva", "Sal y pimienta", "Mantequilla"],
    instrucciones: [
      "Precalentar horno a 200°C",
      "Sazonar filetes con hierbas",
      "Colocar en bandeja con limón",
      "Hornear por 15 minutos",
      "Servir con mantequilla derretida"
    ],
    categoria: "Pescado",
    calorias: "170 kcal",
    dificultad: 1
  },
  {
    id: "salmon-rosado-sarten",
    titulo: "Salmón Rosado a la Sartén",
    descripcion: "Salmón rosado dorado a la sartén con hierbas y limón. Una receta clásica que siempre funciona.",
    emoji: "🍳",
    complexity: "Rápida",
    tiempo: "14 minutos",
    ingredientes: ["Salmón rosado", "Eneldo", "Limón", "Aceite de oliva", "Sal y pimienta", "Mantequilla"],
    instrucciones: [
      "Sazonar salmón con sal y pimienta",
      "Calentar aceite y mantequilla",
      "Cocinar 3-4 minutos por lado",
      "Agregar eneldo y jugo de limón",
      "Servir con rodajas de limón"
    ],
    categoria: "Salmón",
    calorias: "280 kcal",
    dificultad: 1
  },
  {
    id: "pollo-mar-horno",
    titulo: "Pollo de Mar al Horno con Hierbas",
    descripcion: "Pollo de mar al horno con hierbas mediterráneas. Una opción saludable y llena de sabor.",
    emoji: "🌿",
    complexity: "Rápida",
    tiempo: "20 minutos",
    ingredientes: ["Pollo de mar", "Orégano", "Tomillo", "Limón", "Aceite de oliva", "Sal marina"],
    instrucciones: [
      "Precalentar horno a 180°C",
      "Sazonar con hierbas y limón",
      "Colocar en bandeja con aceite",
      "Hornear por 18 minutos",
      "Servir con hierbas frescas"
    ],
    categoria: "Pescado",
    calorias: "190 kcal",
    dificultad: 1
  },
  {
    id: "atun-plancha-rapido",
    titulo: "Atún a la Plancha Express",
    descripcion: "Atún fresco a la plancha con hierbas y limón. Una receta que destaca el sabor natural del pescado.",
    emoji: "⚡",
    complexity: "Rápida",
    tiempo: "10 minutos",
    ingredientes: ["Atún fresco", "Hierbas provenzales", "Limón", "Aceite de oliva", "Sal y pimienta", "Ajo"],
    instrucciones: [
      "Sazonar atún con hierbas y sal",
      "Calentar plancha con aceite",
      "Cocinar 2-3 minutos por lado",
      "Agregar ajo picado y limón",
      "Servir inmediatamente"
    ],
    categoria: "Atún",
    calorias: "240 kcal",
    dificultad: 1
  }
];

export const categorias = ["Todas", "Rápida", "Intermedia", "Gourmet"]; 