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
  dificultad: number;
}

export const recetas: Receta[] = [
  // RECETAS RÁPIDAS
  {
    id: "merluza-provenzal",
    titulo: "Merluza a la Provenzal",
    descripcion: "Merluza con hierbas provenzales, clásico argentino.",
    emoji: "🌿",
    complexity: "Rápida",
    tiempo: "20 minutos",
    ingredientes: ["Medallón de Merluza y Provenzal", "Limón", "Aceite", "Perejil"],
    instrucciones: ["Precalentá horno 200°C", "Colocá en fuente aceitada", "Horneá 15-20 min", "Serví con limón"],
    categoria: "Merluza",
    calorias: "220 kcal",
    dificultad: 1
  },
  {
    id: "langostinos-parrilla",
    titulo: "Langostinos a la Parrilla",
    descripcion: "Langostinos frescos con chimichurri.",
    emoji: "🔥",
    complexity: "Rápida",
    tiempo: "15 minutos",
    ingredientes: ["Langostinos frescos", "Chimichurri", "Limón", "Aceite"],
    instrucciones: ["Limpiá langostinos", "Condimentá", "Parrilla 2-3 min por lado", "Serví con chimichurri"],
    categoria: "Langostinos",
    calorias: "180 kcal",
    dificultad: 1
  },
  {
    id: "calamar-romana",
    titulo: "Calamar a la Romana",
    descripcion: "Calamar rebozado estilo romano.",
    emoji: "🦑",
    complexity: "Rápida",
    tiempo: "25 minutos",
    ingredientes: ["Anillas de calamar", "Harina", "Huevo", "Pan rallado", "Aceite"],
    instrucciones: ["Secá calamar", "Pasa por harina, huevo y pan", "Fríe hasta dorar", "Serví con limón"],
    categoria: "Calamar",
    calorias: "280 kcal",
    dificultad: 2
  },
  {
    id: "atun-tartare",
    titulo: "Tartare de Atún",
    descripcion: "Atún fresco con aguacate y cítricos.",
    emoji: "🥑",
    complexity: "Rápida",
    tiempo: "20 minutos",
    ingredientes: ["Atún filete fresco", "Aguacate", "Cebolla morada", "Limón", "Sésamo"],
    instrucciones: ["Picá atún en cubitos", "Mezclá con aguacate", "Agregá cebolla y limón", "Decorá con sésamo"],
    categoria: "Atún",
    calorias: "250 kcal",
    dificultad: 2
  },
  {
    id: "vieiras-horno",
    titulo: "Vieiras al Horno",
    descripcion: "Vieiras gratinadas con pan rallado.",
    emoji: "🐚",
    complexity: "Rápida",
    tiempo: "20 minutos",
    ingredientes: ["Vieiras 1/2 valva", "Pan rallado", "Manteca", "Ajo", "Queso rallado"],
    instrucciones: ["Precalentá horno 200°C", "Prepará mezcla de pan y manteca", "Gratiná 10-12 min"],
    categoria: "Vieiras",
    calorias: "200 kcal",
    dificultad: 2
  },
  {
    id: "camarones-cocktail",
    titulo: "Cóctel de Camarones",
    descripcion: "Cóctel estilo argentino.",
    emoji: "🍤",
    complexity: "Rápida",
    tiempo: "15 minutos",
    ingredientes: ["Camarones pelados", "Salsa golf", "Palta", "Huevo duro", "Lechuga"],
    instrucciones: ["Cocé camarones", "Prepará salsa golf", "Armá en copa", "Serví con limón"],
    categoria: "Camarones",
    calorias: "200 kcal",
    dificultad: 1
  },
  {
    id: "trucha-limón",
    titulo: "Trucha al Limón",
    descripcion: "Trucha salmonada con limón y eneldo.",
    emoji: "🍋",
    complexity: "Rápida",
    tiempo: "20 minutos",
    ingredientes: ["Trucha salmonada", "Limón", "Eneldo", "Manteca", "Aceite"],
    instrucciones: ["Calentá sartén", "Condimentá trucha", "Cocina 3-4 min por lado", "Agregá manteca y limón"],
    categoria: "Trucha",
    calorias: "240 kcal",
    dificultad: 1
  },
  {
    id: "cornalitos-fritos",
    titulo: "Cornalitos Fritos",
    descripcion: "Cornalitos crocantes para picada.",
    emoji: "🍺",
    complexity: "Rápida",
    tiempo: "20 minutos",
    ingredientes: ["Cornalitos", "Harina", "Sal", "Aceite", "Limón"],
    instrucciones: ["Lavá y secá", "Pasa por harina", "Fríe en aceite caliente", "Serví con limón"],
    categoria: "Cornalitos",
    calorias: "200 kcal",
    dificultad: 1
  },
  {
    id: "milanesa-merluza",
    titulo: "Milanesa de Merluza",
    descripcion: "Milanesa rebozada clásica argentina.",
    emoji: "🥩",
    complexity: "Rápida",
    tiempo: "20 minutos",
    ingredientes: ["Milanesa de Merluza Rebozada", "Limón", "Papa frita", "Ensalada"],
    instrucciones: ["Calentá aceite", "Fríe hasta dorar", "Escurrí", "Serví con guarnición"],
    categoria: "Merluza",
    calorias: "300 kcal",
    dificultad: 1
  },
  {
    id: "escabeche-calamar",
    titulo: "Escabeche de Calamar",
    descripcion: "Escabeche artesanal para picada.",
    emoji: "🦑",
    complexity: "Rápida",
    tiempo: "10 minutos",
    ingredientes: ["Escabeche Calamar artesanal", "Pan tostado", "Limón", "Perejil"],
    instrucciones: ["Serví escabeche", "Tostá pan", "Decorá con perejil", "Acompañá con limón"],
    categoria: "Escabeches",
    calorias: "180 kcal",
    dificultad: 1
  },

  // RECETAS INTERMEDIAS
  {
    id: "bacalao-patatas",
    titulo: "Bacalao con Patatas",
    descripcion: "Bacalao noruego con patatas al horno.",
    emoji: "🥔",
    complexity: "Intermedia",
    tiempo: "45 minutos",
    ingredientes: ["Bacalao noruego", "Patatas", "Cebolla", "Ajo", "Aceite"],
    instrucciones: ["Cortá patatas en rodajas", "Colocá en fuente", "Agregá bacalao encima", "Horneá 35-40 min"],
    categoria: "Bacalao",
    calorias: "320 kcal",
    dificultad: 2
  },
  {
    id: "surubi-parrilla",
    titulo: "Surubí a la Parrilla",
    descripcion: "Surubí de río con hierbas provenzales.",
    emoji: "🐟",
    complexity: "Intermedia",
    tiempo: "30 minutos",
    ingredientes: ["Surubí rodajas", "Hierbas provenzales", "Limón", "Aceite", "Manteca"],
    instrucciones: ["Condimentá con hierbas", "Pincelá con aceite", "Parrilla 8-10 min por lado", "Agregá manteca"],
    categoria: "Surubí",
    calorias: "280 kcal",
    dificultad: 2
  },
  {
    id: "abadejo-verdura",
    titulo: "Abadejo con Verduras",
    descripcion: "Abadejo al horno con verduras de estación.",
    emoji: "🥬",
    complexity: "Intermedia",
    tiempo: "35 minutos",
    ingredientes: ["Abadejo filete", "Verduras primavera", "Cebolla", "Ajo", "Hierbas"],
    instrucciones: ["Precalentá horno 180°C", "Prepará verduras", "Colocá abadejo encima", "Horneá 25-30 min"],
    categoria: "Abadejo",
    calorias: "260 kcal",
    dificultad: 2
  },
  {
    id: "almejas-pasta",
    titulo: "Pasta con Almejas",
    descripcion: "Pasta fresca con almejas en salsa de vino.",
    emoji: "🍝",
    complexity: "Intermedia",
    tiempo: "25 minutos",
    ingredientes: ["Fideos frescos", "Almejas peladas", "Ajo", "Vino blanco", "Perejil"],
    instrucciones: ["Cocé pasta al dente", "Salteá ajo", "Agregá almejas y vino", "Incorporá pasta", "Terminá con perejil"],
    categoria: "Almejas",
    calorias: "380 kcal",
    dificultad: 2
  },
  {
    id: "langostinos-rebozados",
    titulo: "Langostinos Rebozados",
    descripcion: "Langostinos con salsa de mostaza y miel.",
    emoji: "🍯",
    complexity: "Intermedia",
    tiempo: "25 minutos",
    ingredientes: ["Langostinos Rebozados", "Mostaza", "Miel", "Limón", "Perejil"],
    instrucciones: ["Precalentá horno 200°C", "Colocá en fuente", "Horneá 15-20 min", "Prepará salsa"],
    categoria: "Langostinos",
    calorias: "280 kcal",
    dificultad: 2
  },
  {
    id: "pascualina-casera",
    titulo: "Pascualina Casera",
    descripcion: "Pascualina de acelga con huevo.",
    emoji: "🥧",
    complexity: "Intermedia",
    tiempo: "60 minutos",
    ingredientes: ["Pascualina casera", "Huevos duros", "Acelga", "Queso rallado", "Nuez moscada"],
    instrucciones: ["Precalentá horno 180°C", "Prepará relleno", "Armá en capas", "Agregá huevos", "Horneá 45-50 min"],
    categoria: "Extras",
    calorias: "320 kcal",
    dificultad: 3
  },
  {
    id: "ravioles-salsa-blanca",
    titulo: "Ravioles con Salsa Blanca",
    descripcion: "Ravioles caseros con salsa blanca artesanal.",
    emoji: "🥟",
    complexity: "Intermedia",
    tiempo: "30 minutos",
    ingredientes: ["Ravioles caseros", "Salsa Blanca artesanal", "Queso rallado", "Nuez moscada"],
    instrucciones: ["Cocé ravioles", "Calentá salsa", "Agregá nuez moscada", "Mezclá", "Serví con queso"],
    categoria: "Extras",
    calorias: "420 kcal",
    dificultad: 2
  },
  {
    id: "empanadas-pescado",
    titulo: "Empanadas de Pescado",
    descripcion: "Empanadas de pescado con verduras.",
    emoji: "🥟",
    complexity: "Intermedia",
    tiempo: "45 minutos",
    ingredientes: ["Tapas de Empanadas", "Filete de pescado", "Cebolla", "Morrón", "Huevo duro"],
    instrucciones: ["Cocé pescado", "Salteá cebolla y morrón", "Mezclá con pescado", "Armá empanadas", "Horneá"],
    categoria: "Empanadas",
    calorias: "280 kcal",
    dificultad: 2
  },
  {
    id: "sopa-mariscos",
    titulo: "Sopa de Mariscos",
    descripcion: "Sopa casera de mariscos con verduras.",
    emoji: "🍲",
    complexity: "Intermedia",
    tiempo: "50 minutos",
    ingredientes: ["Almejas peladas", "Camarones", "Verduras primavera", "Caldo de pescado", "Ajo"],
    instrucciones: ["Prepará sofrito", "Agregá caldo y verduras", "Incorporá mariscos", "Cociná a fuego medio"],
    categoria: "Sopas",
    calorias: "220 kcal",
    dificultad: 2
  },
  {
    id: "cazuela-mariscos",
    titulo: "Cazuela de Mariscos",
    descripcion: "Cazuela abundante con diferentes mariscos.",
    emoji: "🥘",
    complexity: "Intermedia",
    tiempo: "45 minutos",
    ingredientes: ["Mejillones", "Camarones", "Pescado en cubos", "Caldo de pescado", "Verduras"],
    instrucciones: ["Prepará sofrito", "Agregá caldo", "Incorporá mariscos en orden", "Cociná a fuego medio"],
    categoria: "Mariscos",
    calorias: "300 kcal",
    dificultad: 3
  },

  // RECETAS GOURMET
  {
    id: "salmon-costra-hierbas",
    titulo: "Salmón en Costra de Hierbas",
    descripcion: "Salmón premium con costra de hierbas y reducción de vino.",
    emoji: "✨",
    complexity: "Gourmet",
    tiempo: "50 minutos",
    ingredientes: ["Salmón premium fresco", "Hierbas finas", "Pan rallado", "Mostaza Dijon", "Vino blanco"],
    instrucciones: ["Prepará costra", "Sellá salmón", "Pincelá con mostaza", "Cubrí con hierbas", "Horneá"],
    categoria: "Salmón",
    calorias: "380 kcal",
    dificultad: 4
  },
  {
    id: "lubina-mar-tierra",
    titulo: "Lubina Mar y Tierra",
    descripcion: "Lubina con panceta crocante y vegetales glaseados.",
    emoji: "🌊",
    complexity: "Gourmet",
    tiempo: "55 minutos",
    ingredientes: ["Lubina fresca premium", "Panceta ahumada", "Espárragos", "Puré de coliflor", "Vino blanco"],
    instrucciones: ["Prepará puré", "Glaseá verduras", "Crocantizá panceta", "Cocina lubina", "Armá plato"],
    categoria: "Pescado",
    calorias: "420 kcal",
    dificultad: 4
  },
  {
    id: "degustacion-mariscos",
    titulo: "Degustación de Mariscos",
    descripcion: "Tres preparaciones diferentes de mariscos premium.",
    emoji: "👨‍🍳",
    complexity: "Gourmet",
    tiempo: "70 minutos",
    ingredientes: ["Vieiras frescas", "Langostinos jumbo", "Pulpo español", "Risotto negro", "Espuma de azafrán"],
    instrucciones: ["Prepará risotto", "Marcá vieiras", "Cocina langostinos", "Termina pulpo", "Montá plato"],
    categoria: "Mariscos",
    calorias: "460 kcal",
    dificultad: 5
  },
  {
    id: "centolla-moderna",
    titulo: "Centolla en Texturas",
    descripcion: "Interpretación moderna con diferentes texturas.",
    emoji: "🦀",
    complexity: "Gourmet",
    tiempo: "65 minutos",
    ingredientes: ["Centolla fresca", "Palta", "Mango", "Caviar de wasabi", "Crema agria"],
    instrucciones: ["Prepará centolla en tres cocciones", "Puré de palta ahumada", "Cortá cítricos", "Armá por capas"],
    categoria: "Mariscos",
    calorias: "380 kcal",
    dificultad: 5
  },
  {
    id: "atun-parrilla-gourmet",
    titulo: "Atún a la Parrilla Gourmet",
    descripcion: "Atún fresco con costra de sésamo y salsa de jengibre.",
    emoji: "🔥",
    complexity: "Gourmet",
    tiempo: "40 minutos",
    ingredientes: ["Atún filete fresco", "Sésamo negro y blanco", "Jengibre", "Salsa de soja", "Miel"],
    instrucciones: ["Marcá atún en sésamo", "Parrilla 2 min por lado", "Prepará salsa", "Cortá en rodajas", "Serví"],
    categoria: "Atún",
    calorias: "320 kcal",
    dificultad: 4
  },
  {
    id: "merluza-salsa-azafran",
    titulo: "Merluza con Salsa de Azafrán",
    descripcion: "Merluza en salsa de azafrán con risotto de parmesano.",
    emoji: "🌾",
    complexity: "Gourmet",
    tiempo: "60 minutos",
    ingredientes: ["Medallón de Merluza", "Azafrán", "Arroz arborio", "Parmesano", "Caldo de pescado"],
    instrucciones: ["Prepará risotto", "Cocina merluza", "Prepará salsa", "Montá plato", "Decorá"],
    categoria: "Merluza",
    calorias: "450 kcal",
    dificultad: 4
  },
  {
    id: "langostinos-tempura",
    titulo: "Langostinos en Tempura",
    descripcion: "Langostinos en tempura con salsa agridulce.",
    emoji: "🍤",
    complexity: "Gourmet",
    tiempo: "45 minutos",
    ingredientes: ["Langostinos frescos", "Harina de tempura", "Agua helada", "Salsa agridulce", "Wasabi"],
    instrucciones: ["Prepará masa tempura", "Rebozá langostinos", "Fríe en aceite caliente", "Serví con salsa"],
    categoria: "Langostinos",
    calorias: "380 kcal",
    dificultad: 4
  },
  {
    id: "calamar-relleno",
    titulo: "Calamar Relleno Gourmet",
    descripcion: "Calamar relleno de arroz salvaje y mariscos.",
    emoji: "🦑",
    complexity: "Gourmet",
    tiempo: "75 minutos",
    ingredientes: ["Calamar entero", "Arroz salvaje", "Mariscos variados", "Salsa de tinta", "Hierbas"],
    instrucciones: ["Prepará relleno", "Rellená calamar", "Cocina en salsa", "Cortá en rodajas", "Serví"],
    categoria: "Calamar",
    calorias: "420 kcal",
    dificultad: 5
  },
  {
    id: "vieiras-salsa-vanilla",
    titulo: "Vieiras con Salsa de Vainilla",
    descripcion: "Vieiras con salsa de vainilla y puré de coliflor.",
    emoji: "🌿",
    complexity: "Gourmet",
    tiempo: "55 minutos",
    ingredientes: ["Vieiras frescas", "Vainilla", "Coliflor", "Manteca", "Leche de coco"],
    instrucciones: ["Prepará puré", "Marcá vieiras", "Prepará salsa", "Montá plato", "Decorá"],
    categoria: "Vieiras",
    calorias: "360 kcal",
    dificultad: 4
  },
  {
    id: "bacalao-bacalao",
    titulo: "Bacalao Confitado",
    descripcion: "Bacalao confitado en aceite de oliva con patatas.",
    emoji: "🫒",
    complexity: "Gourmet",
    tiempo: "90 minutos",
    ingredientes: ["Bacalao noruego", "Aceite de oliva", "Patatas", "Ajo", "Hierbas"],
    instrucciones: ["Confitá bacalao", "Prepará patatas", "Montá plato", "Decorá", "Serví"],
    categoria: "Bacalao",
    calorias: "480 kcal",
    dificultad: 5
  }
];

export const categorias = [
  "Todas", "Rápida", "Intermedia", "Gourmet",
  "Merluza", "Langostinos", "Calamar", "Atún", "Vieiras", "Bacalao", "Surubí",
  "Camarones", "Trucha", "Abadejo", "Cornalitos", "Empanadas", "Extras", "Sopas", "Escabeches"
];
