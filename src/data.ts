import { Category, VerbTense } from "./types";

export const categories: Category[] = [
  { id: 'animales', emoji: '🐾', name: 'Animales', subcats: [
    { id: 'domesticos', emoji: '🏠', name: 'Domésticos', keys: ['Perro', 'Gato', 'Conejo', 'Ratón', 'Tortuga', 'Pollo'] },
    { id: 'salvajes', emoji: '🌿', name: 'Salvajes', keys: ['León', 'Tigre', 'Elefante', 'Mono', 'Serpiente', 'Cocodrilo', 'Lobo', 'Zorro', 'Jirafa', 'Cebra', 'Oso'] },
    { id: 'marinos', emoji: '🌊', name: 'Marinos', keys: ['Pez', 'Delfín', 'Ballena'] },
    { id: 'insectos', emoji: '🦋', name: 'Insectos', keys: ['Mariposa', 'Abeja', 'Araña'] },
    { id: 'aves', emoji: '🦅', name: 'Aves', keys: ['Pájaro', 'Pingüino', 'Águila'] }
  ]},
  { id: 'verbos', emoji: '🔵', name: 'Verbos esenciales', subcats: [
    { id: 'ser_estar', emoji: '✨', name: 'Ser y estar', keys: ['Ser', 'Estar', 'Vivir'] },
    { id: 'movimiento', emoji: '🚶', name: 'Movimiento', keys: ['Ir', 'Venir', 'Correr', 'Nadar', 'Bailar'] },
    { id: 'cotidianos', emoji: '🛠️', name: 'Acciones cotidianas', keys: ['Hacer', 'Tener', 'Comer', 'Beber', 'Dormir', 'Trabajar', 'Estudiar', 'Comprar', 'Vender'] },
    { id: 'sentidos', emoji: '👁️', name: 'Sentidos', keys: ['Ver', 'Escuchar'] },
    { id: 'comunicar', emoji: '🗣️', name: 'Comunicación', keys: ['Hablar', 'Leer', 'Escribir', 'Cantar', 'Poder', 'Querer', 'Saber', 'Jugar'] }
  ]},
  { id: 'comida', emoji: '🍎', name: 'Comida y bebida', subcats: [
    { id: 'frutas', emoji: '🍓', name: 'Frutas', keys: ['Manzana', 'Banana', 'Naranja', 'Fresa', 'Uva'] },
    { id: 'verduras', emoji: '🥦', name: 'Verduras', keys: ['Tomate', 'Papa', 'Cebolla', 'Ajo'] },
    { id: 'proteinas', emoji: '🥩', name: 'Carnes y proteínas', keys: ['Carne', 'Pollo', 'Pescado', 'Huevo', 'Queso'] },
    { id: 'bebidas', emoji: '🥤', name: 'Bebidas', keys: ['Agua', 'Café', 'Jugo', 'Vino', 'Cerveza', 'Leche'] },
    { id: 'dulces', emoji: '🍰', name: 'Postres y dulces', keys: ['Chocolate', 'Helado', 'Pastel', 'Pan', 'Arroz'] }
  ]},
  { id: 'casa', emoji: '🏠', name: 'Casa y hogar', subcats: [
    { id: 'habitaciones', emoji: '🚪', name: 'Habitaciones', keys: ['Cocina', 'Baño', 'Dormitorio', 'Sala', 'Garaje', 'Jardín'] },
    { id: 'muebles', emoji: '🪑', name: 'Muebles', keys: ['Silla', 'Mesa', 'Cama', 'Sofá', 'Armario'] },
    { id: 'electro', emoji: '📺', name: 'Electrodomésticos', keys: ['Televisión', 'Nevera', 'Microondas', 'Lavadora'] },
    { id: 'objetos', emoji: '💡', name: 'Objetos del hogar', keys: ['Espejo', 'Lámpara', 'Llave', 'Alfombra', 'Toalla'] }
  ]},
  { id: 'familia', emoji: '👨‍👩‍👧', name: 'Familia', subcats: [
    { id: 'directa', emoji: '👨‍👩‍👧', name: 'Familia directa', keys: ['Madre', 'Padre', 'Hijo', 'Hija', 'Hermano', 'Hermana', 'Bebé'] },
    { id: 'extendida', emoji: '👴', name: 'Familia extendida', keys: ['Abuelo', 'Abuela', 'Nieto', 'Nieta', 'Tío', 'Tía', 'Primo'] },
    { id: 'pareja', emoji: '💑', name: 'Pareja y amigos', keys: ['Esposo', 'Esposa', 'Novio', 'Novia', 'Amigo', 'Vecino'] }
  ]},
  { id: 'colores', emoji: '🎨', name: 'Colores', subcats: [
    { id: 'basicos', emoji: '🎨', name: 'Colores básicos', keys: ['Rojo', 'Azul', 'Verde', 'Amarillo', 'Naranja', 'Morado', 'Rosa', 'Blanco', 'Negro', 'Gris', 'Marrón'] },
    { id: 'tonos', emoji: '🩵', name: 'Tonos y matices', keys: ['Celeste', 'Turquesa', 'Violeta', 'Beige'] },
    { id: 'metalicos', emoji: '🌟', name: 'Metálicos', keys: ['Dorado', 'Plateado'] }
  ]},
  { id: 'numeros', emoji: '🔢', name: 'Números y cantidades', subcats: [
    { id: 'del1al10', emoji: '🔟', name: 'Del 1 al 10', keys: ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez'] },
    { id: 'del11al100', emoji: '💯', name: 'Del 11 al 100', keys: ['Once', 'Doce', 'Veinte', 'Treinta', 'Cincuenta', 'Cien', 'Mil'] },
    { id: 'ordinales', emoji: '🥇', name: 'Ordinales', keys: ['Primero', 'Segundo', 'Tercero'] },
    { id: 'cantidades', emoji: '📦', name: 'Cantidades', keys: ['Mucho', 'Poco', 'Nada', 'Todo', 'Medio'] }
  ]},
  { id: 'tiempo', emoji: '📅', name: 'Tiempo y fechas', subcats: [
    { id: 'dias', emoji: '🗓️', name: 'Días de la semana', keys: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] },
    { id: 'meses', emoji: '📆', name: 'Meses', keys: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'] },
    { id: 'partes_dia', emoji: '🌅', name: 'Partes del día', keys: ['Hoy', 'Ayer', 'Mañana', 'Tarde', 'Noche'] }
  ]},
  { id: 'clima', emoji: '🌦️', name: 'Clima y naturaleza', subcats: [
    { id: 'fenomenos', emoji: '⛈️', name: 'Fenómenos', keys: ['Sol', 'Lluvia', 'Nieve', 'Viento', 'Nube', 'Tormenta'] },
    { id: 'paisajes', emoji: '⛰️', name: 'Paisajes', keys: ['Montaña', 'Bosque', 'Desierto', 'Isla'] },
    { id: 'agua', emoji: '🌊', name: 'Cuerpos de agua', keys: ['Mar', 'Río', 'Playa', 'Lago'] }
  ]},
  { id: 'cuerpo', emoji: '🧍', name: 'Cuerpo humano', subcats: [
    { id: 'cara', emoji: '😊', name: 'Cara y cabeza', keys: ['Cabeza', 'Cara', 'Ojos', 'Nariz', 'Boca', 'Oreja', 'Cuello'] },
    { id: 'tronco', emoji: '🫀', name: 'Tronco y órganos', keys: ['Pecho', 'Espalda', 'Estómago', 'Corazón', 'Cerebro'] },
    { id: 'extremidades', emoji: '🦵', name: 'Extremidades', keys: ['Hombro', 'Brazo', 'Mano', 'Dedo', 'Pierna', 'Pie'] }
  ]},
  { id: 'transporte', emoji: '🚌', name: 'Transporte y viajes', subcats: [
    { id: 'terrestres', emoji: '🚗', name: 'Vehículos', keys: ['Carro', 'Autobús', 'Tren', 'Metro', 'Bicicleta', 'Moto'] },
    { id: 'infraestructura', emoji: '🛣️', name: 'Infraestructura', keys: ['Aeropuerto', 'Estación', 'Ruta', 'Puente'] },
    { id: 'documentos', emoji: 'Passport', name: 'Documentos', keys: ['Pasaporte', 'Boleto', 'Maleta', 'Viaje'] }
  ]},
  { id: 'ciudad', emoji: '🏙️', name: 'Ciudad y lugares', subcats: [
    { id: 'publicos', emoji: '🏛️', name: 'Edificios públicos', keys: ['Hospital', 'Banco', 'Iglesia', 'Museo', 'Escuela', 'Universidad', 'Cine'] },
    { id: 'comercios', emoji: '🛒', name: 'Comercios', keys: ['Supermercado', 'Restaurante', 'Hotel', 'Farmacia'] },
    { id: 'espacios', emoji: '⛲', name: 'Espacios', keys: ['Ciudad', 'Calle', 'Plaza', 'Parque', 'Playa'] }
  ]},
  { id: 'trabajo', emoji: '💼', name: 'Trabajo y profesiones', subcats: [
    { id: 'salud_prof', emoji: '🏥', name: 'Salud', keys: ['Médico', 'Enfermero', 'Dentista'] },
    { id: 'educacion', emoji: '🎓', name: 'Educación', keys: ['Profesor'] },
    { id: 'seguridad', emoji: '👮', name: 'Seguridad', keys: ['Policía', 'Bombero', 'Piloto'] },
    { id: 'oficina', emoji: '💼', name: 'Oficina y negocios', keys: ['Empresario', 'Abogado', 'Ingeniero', 'Gerente'] }
  ]},
  { id: 'escuela', emoji: '🎓', name: 'Escuela y estudio', subcats: [
    { id: 'utiles', emoji: '🎒', name: 'Útiles', keys: ['Libro', 'Cuaderno', 'Lápiz', 'Bolígrafo', 'Borrador', 'Mochila'] },
    { id: 'materias', emoji: '📐', name: 'Materias', keys: ['Matemática', 'Historia', 'Ciencias', 'Idioma', 'Arte'] }
  ]},
  { id: 'emociones', emoji: '😊', name: 'Emociones', subcats: [
    { id: 'positivas', emoji: '😄', name: 'Positivas', keys: ['Feliz', 'Emocionado', 'Orgulloso', 'Calma', 'Amor', 'Alegría'] },
    { id: 'negativas', emoji: '😢', name: 'Negativas', keys: ['Triste', 'Enojado', 'Asustado', 'Miedo', 'Nervioso', 'Dolor'] }
  ]},
  { id: 'ropa', emoji: '🛍️', name: 'Ropa y moda', subcats: [
    { id: 'prendas', emoji: '👕', name: 'Prendas', keys: ['Camisa', 'Camiseta', 'Pantalón', 'Vestido', 'Falda', 'Abrigo', 'Suéter'] },
    { id: 'calzado', emoji: '👟', name: 'Calzado y Acc', keys: ['Zapato', 'Sandalia', 'Bota', 'Calcetín', 'Gorra', 'Gafas', 'Reloj'] }
  ]},
  { id: 'salud', emoji: '💊', name: 'Salud y medicina', subcats: [
    { id: 'bienestar', emoji: '🤒', name: 'Bienestar y síntomas', keys: ['Dolor', 'Fiebre', 'Tos', 'Resfriado', 'Salud', 'Enfermedad'] },
    { id: 'cuidado', emoji: '💊', name: 'Cuidado médico', keys: ['Medicina', 'Farmacia', 'Hospital', 'Receta', 'Vacuna'] }
  ]},
  { id: 'ocio', emoji: '🎉', name: 'Ocio y deportes', subcats: [
    { id: 'deportes', emoji: '⚽', name: 'Deportes', keys: ['Deporte', 'Fútbol', 'Baloncesto', 'Tenis', 'Natación', 'Ciclismo'] },
    { id: 'cultura', emoji: '🎨', name: 'Cultura y hobbies', keys: ['Música', 'Película', 'Libro', 'Baile', 'Fotografía', 'Cocina'] }
  ]},
  { id: 'tecnologia', emoji: '💻', name: 'Tecnología', subcats: [
    { id: 'dispositivos', emoji: '📱', name: 'Dispositivos', keys: ['Celular', 'Computadora', 'Tablet', 'Cámara'] },
    { id: 'virtual', emoji: '🌐', name: 'Internet y Redes', keys: ['Internet', 'Correo', 'Red social', 'Contraseña', 'Aplicación'] }
  ]},
  { id: 'frases', emoji: '🗣️', name: 'Frases cotidianas', subcats: [
    { id: 'saludos', emoji: '👋', name: 'Saludos', keys: ['Buenos días', 'Buenas tardes', 'Buenas noches', 'Hola', 'Adiós', 'Hasta luego'] },
    { id: 'cortesia', emoji: '🙏', name: 'Cortesía', keys: ['Por favor', 'Gracias', 'De nada', 'Lo siento', '¿Cómo estás?', 'Estoy bien'] }
  ]},
  { id: 'conectores', emoji: '🔗', name: 'Conectores', subcats: [
    { id: 'causa', emoji: '❓', name: 'Causa y efecto', keys: ['Porque', 'Por eso', 'Por lo tanto', 'Dado que'] },
    { id: 'contraste', emoji: '↔️', name: 'Contraste', keys: ['Pero', 'Sin embargo', 'Aunque', 'A pesar de'] }
  ]},
  { id: 'preposiciones', emoji: '📍', name: 'Preposiciones', subcats: [
    { id: 'lugar_prep', emoji: '🗺️', name: 'Lugar', keys: ['En', 'Sobre', 'Bajo', 'Dentro de', 'Fuera de', 'Cerca de', 'Lejos de'] },
    { id: 'tiempo_prep', emoji: '⏱️', name: 'Tiempo', keys: ['Antes de', 'Después de', 'Durante', 'Desde', 'Hasta'] }
  ]},
  { id: 'adverbios', emoji: '⏱️', name: 'Adverbios', subcats: [
    { id: 'adv_tiempo', emoji: '🕐', name: 'Tiempo', keys: ['Siempre', 'Nunca', 'Jamás', 'Ahora', 'Antes', 'Después', 'Ainda'] },
    { id: 'adv_lugar', emoji: '📍', name: 'Lugar', keys: ['Aquí', 'Ahí', 'Allí', 'Adentro', 'Afuera'] }
  ]},
  { id: 'pronombres', emoji: '🔄', name: 'Pronombres', subcats: [
    { id: 'personales', emoji: '👤', name: 'Personales', keys: ['Yo', 'Tú', 'Él', 'Ella', 'Nosotros', 'Ellos', 'Ellas', 'Ustedes'] },
    { id: 'posesivos', emoji: '🙋', name: 'Posesivos', keys: ['Mío', 'Tuyo', 'Suyo', 'Nuestro', 'Mía', 'Nuestra'] }
  ]},
  { id: 'interrogativos', emoji: '❓', name: 'Interrogativos', subcats: [
    { id: 'preguntas_bas', emoji: '🔍', name: 'Preguntas', keys: ['¿Qué?', '¿Quién?', '¿Dónde?', '¿Cuándo?', '¿Cómo?', '¿Por qué?', '¿Cuánto?'] }
  ]},
  { id: 'conjunciones', emoji: '🧩', name: 'Conjunciones', subcats: [
    { id: 'coordinantes', emoji: '➕', name: 'Coordinantes', keys: ['Y', 'O', 'Ni...ni', 'Pero', 'Sino'] }
  ]},
  { id: 'adjetivos', emoji: '🎭', name: 'Adjetivos calificativos', subcats: [
    { id: 'tamano', emoji: '📏', name: 'Tamaño y forma', keys: ['Grande', 'Pequeño', 'Alto', 'Bajo', 'Largo', 'Corto'] },
    { id: 'cualidad', emoji: '✨', name: 'Cualidad física', keys: ['Bonito', 'Feo', 'Limpio', 'Sucio', 'Nuevo', 'Viejo'] }
  ]},
  { id: 'cuantificadores', emoji: '🔢', name: 'Cuantificadores', subcats: [
    { id: 'indefinidos', emoji: '🔍', name: 'Indefinidos', keys: ['Algo', 'Alguien', 'Alguno', 'Ninguno', 'Nadie', 'Nada', 'Todo'] }
  ]}
];

export const flashcardData: Record<string, { es: string; pt: string; emoji: string }[]> = {
  animales: [
    { es: 'Perro', pt: 'Cachorro', emoji: '🐶' },
    { es: 'Gato', pt: 'Gato', emoji: '🐱' },
    { es: 'Pájaro', pt: 'Pássaro', emoji: '🐦' },
    { es: 'Pez', pt: 'Peixe', emoji: '🐟' },
    { es: 'Caballo', pt: 'Cavalo', emoji: '🐴' },
    { es: 'Vaca', pt: 'Vaca', emoji: '🐄' },
    { es: 'Cerdo', pt: 'Porco', emoji: '🐷' },
    { es: 'Oveja', pt: 'Ovelha', emoji: '🐑' },
    { es: 'Pollo', pt: 'Frango', emoji: '🐔' },
    { es: 'León', pt: 'Leão', emoji: '🦁' },
    { es: 'Tigre', pt: 'Tigre', emoji: '🐯' },
    { es: 'Elefante', pt: 'Elefante', emoji: '🐘' },
    { es: 'Mono', pt: 'Macaco', emoji: '🐒' },
    { es: 'Serpiente', pt: 'Cobra', emoji: '🐍' },
    { es: 'Cocodrilo', pt: 'Crocodilo', emoji: '🐊' },
    { es: 'Tortuga', pt: 'Tartaruga', emoji: '🐢' },
    { es: 'Conejo', pt: 'Coelho', emoji: '🐰' },
    { es: 'Ratón', pt: 'Rato', emoji: '🐭' },
    { es: 'Oso', pt: 'Urso', emoji: '🐻' },
    { es: 'Lobo', pt: 'Lobo', emoji: '🐺' },
    { es: 'Zorro', pt: 'Raposa', emoji: '🦊' },
    { es: 'Jirafa', pt: 'Girafa', emoji: '🦒' },
    { es: 'Cebra', pt: 'Zebra', emoji: '🦓' },
    { es: 'Pingüino', pt: 'Pinguim', emoji: '🐧' },
    { es: 'Delfín', pt: 'Golfinho', emoji: '🐬' },
    { es: 'Ballena', pt: 'Baleia', emoji: '🐋' },
    { es: 'Mariposa', pt: 'Borboleta', emoji: '🦋' },
    { es: 'Abeja', pt: 'Abelha', emoji: '🐝' },
    { es: 'Araña', pt: 'Aranha', emoji: '🕷️' },
    { es: 'Águila', pt: 'Águia', emoji: '🦅' }
  ],
  verbos: [
    { es: 'Ser', pt: 'Ser', emoji: '✨' },
    { es: 'Estar', pt: 'Estar', emoji: '📍' },
    { es: 'Tener', pt: 'Ter', emoji: '🤲' },
    { es: 'Hacer', pt: 'Fazer', emoji: '🛠' },
    { es: 'Ir', pt: 'Ir', emoji: '🚶' },
    { es: 'Poder', pt: 'Poder', emoji: '💪' },
    { es: 'Querer', pt: 'Querer', emoji: '❤️' },
    { es: 'Saber', pt: 'Saber', emoji: '🧠' },
    { es: 'Hablar', pt: 'Falar', emoji: '🗣️' },
    { es: 'Comer', pt: 'Comer', emoji: '🍽️' },
    { es: 'Beber', pt: 'Beber', emoji: '🥤' },
    { es: 'Dormir', pt: 'Dormir', emoji: '😴' },
    { es: 'Trabajar', pt: 'Trabalhar', emoji: '💼' },
    { es: 'Estudiar', pt: 'Estudar', emoji: '📚' },
    { es: 'Comprar', pt: 'Comprar', emoji: '🛍️' },
    { es: 'Vender', pt: 'Vender', emoji: '💰' },
    { es: 'Vivir', pt: 'Viver', emoji: '🏡' },
    { es: 'Venir', pt: 'Vir', emoji: '👋' },
    { es: 'Ver', pt: 'Ver', emoji: '👁️' },
    { es: 'Escuchar', pt: 'Ouvir', emoji: '👂' },
    { es: 'Leer', pt: 'Ler', emoji: '📖' },
    { es: 'Escribir', pt: 'Escrever', emoji: '✏️' },
    { es: 'Jugar', pt: 'Jogar', emoji: '🎮' },
    { es: 'Correr', pt: 'Correr', emoji: '🏃' },
    { es: 'Nadar', pt: 'Nadar', emoji: '🏊' },
    { es: 'Cantar', pt: 'Cantar', emoji: '🎤' },
    { es: 'Bailar', pt: 'Dançar', emoji: '💃' },
    { es: 'Abrir', pt: 'Abrir', emoji: '🚪' },
    { es: 'Cerrar', pt: 'Fechar', emoji: '🔒' },
    { es: 'Dar', pt: 'Dar', emoji: '🎁' }
  ],
  comida: [
    { es: 'Pan', pt: 'Pão', emoji: '🍞' },
    { es: 'Arroz', pt: 'Arroz', emoji: '🍚' },
    { es: 'Carne', pt: 'Carne', emoji: '🥩' },
    { es: 'Pollo', pt: 'Frango', emoji: '🍗' },
    { es: 'Pescado', pt: 'Peixe', emoji: '🐟' },
    { es: 'Huevo', pt: 'Ovo', emoji: '🥚' },
    { es: 'Leche', pt: 'Leite', emoji: '🥛' },
    { es: 'Queso', pt: 'Queijo', emoji: '🧀' },
    { es: 'Mantequilla', pt: 'Manteiga', emoji: '🧈' },
    { es: 'Azúcar', pt: 'Açúcar', emoji: '🍬' },
    { es: 'Sal', pt: 'Sal', emoji: '🧂' },
    { es: 'Aceite', pt: 'Óleo', emoji: '🫙' },
    { es: 'Agua', pt: 'Água', emoji: '💧' },
    { es: 'Café', pt: 'Café', emoji: '☕' },
    { es: 'Jugo', pt: 'Suco', emoji: '🥤' },
    { es: 'Vino', pt: 'Vinho', emoji: '🍷' },
    { es: 'Cerveza', pt: 'Cerveja', emoji: '🍺' },
    { es: 'Manzana', pt: 'Maçã', emoji: '🍎' },
    { es: 'Banana', pt: 'Banana', emoji: '🍌' },
    { es: 'Naranja', pt: 'Laranja', emoji: '🍊' },
    { es: 'Fresa', pt: 'Morango', emoji: '🍓' },
    { es: 'Uva', pt: 'Uva', emoji: '🍇' },
    { es: 'Tomate', pt: 'Tomate', emoji: '🍅' },
    { es: 'Papa', pt: 'Batata', emoji: '🥔' },
    { es: 'Cebolla', pt: 'Cebola', emoji: '🧅' },
    { es: 'Ajo', pt: 'Alho', emoji: '🧄' },
    { es: 'Chocolate', pt: 'Chocolate', emoji: '🍫' },
    { es: 'Helado', pt: 'Sorvete', emoji: '🍦' },
    { es: 'Pastel', pt: 'Bolo', emoji: '🎂' },
    { es: 'Sopa', pt: 'Sopa', emoji: '🍲' }
  ],
  casa: [
    { es: 'Casa', pt: 'Casa', emoji: '🏠' },
    { es: 'Puerta', pt: 'Porta', emoji: '🚪' },
    { es: 'Ventana', pt: 'Janela', emoji: '🪟' },
    { es: 'Pared', pt: 'Parede', emoji: '🧱' },
    { es: 'Techo', pt: 'Teto', emoji: '🏚️' },
    { es: 'Piso', pt: 'Chão', emoji: '⬛' },
    { es: 'Cocina', pt: 'Cozinha', emoji: '🍳' },
    { es: 'Baño', pt: 'Banheiro', emoji: '🚿' },
    { es: 'Dormitorio', pt: 'Quarto', emoji: '🛏️' },
    { es: 'Sala', pt: 'Sala', emoji: '🛋️' },
    { es: 'Jardín', pt: 'Jardim', emoji: '🌿' },
    { es: 'Garaje', pt: 'Garagem', emoji: '🚗' },
    { es: 'Silla', pt: 'Cadeira', emoji: '🪑' },
    { es: 'Mesa', pt: 'Mesa', emoji: '🪑' },
    { es: 'Cama', pt: 'Cama', emoji: '🛏️' },
    { es: 'Sofá', pt: 'Sofá', emoji: '🛋️' },
    { es: 'Armario', pt: 'Armário', emoji: '🗄️' },
    { es: 'Espejo', pt: 'Espelho', emoji: '🪞' },
    { es: 'Lámpara', pt: 'Lâmpada', emoji: '💡' },
    { es: 'Televisión', pt: 'Televisão', emoji: '📺' },
    { es: 'Nevera', pt: 'Geladeira', emoji: '🧊' },
    { es: 'Microondas', pt: 'Micro-ondas', emoji: '📦' },
    { es: 'Lavadora', pt: 'Máquina de lavar', emoji: '🌀' },
    { es: 'Llave', pt: 'Chave', emoji: '🔑' },
    { es: 'Alfombra', pt: 'Tapete', emoji: '🪷' },
    { es: 'Toalla', pt: 'Toalha', emoji: '🏊' }
  ],
  familia: [
    { es: 'Madre', pt: 'Mãe', emoji: '👩' },
    { es: 'Padre', pt: 'Pai', emoji: '👨' },
    { es: 'Hijo', pt: 'Filho', emoji: '👦' },
    { es: 'Hija', pt: 'Filha', emoji: '👧' },
    { es: 'Hermano', pt: 'Irmão', emoji: '👱‍♂️' },
    { es: 'Hermana', pt: 'Irmã', emoji: '👱‍♀️' },
    { es: 'Abuelo', pt: 'Avô', emoji: '👴' },
    { es: 'Abuela', pt: 'Avó', emoji: '👵' },
    { es: 'Nieto', pt: 'Neto', emoji: '👦' },
    { es: 'Nieta', pt: 'Neta', emoji: '👧' },
    { es: 'Tío', pt: 'Tio', emoji: '🧔' },
    { es: 'Tía', pt: 'Tia', emoji: '👩' },
    { es: 'Primo', pt: 'Primo', emoji: '🧑' },
    { es: 'Esposo', pt: 'Marido', emoji: '💍' },
    { es: 'Esposa', pt: 'Esposa', emoji: '👰' },
    { es: 'Bebé', pt: 'Bebê', emoji: '👶' }
  ],
  colores: [
    { es: 'Rojo', pt: 'Vermelho', emoji: '🔴' },
    { es: 'Azul', pt: 'Azul', emoji: '🔵' },
    { es: 'Verde', pt: 'Verde', emoji: '🟢' },
    { es: 'Amarillo', pt: 'Amarelo', emoji: '🟡' },
    { es: 'Naranja', pt: 'Laranja', emoji: '🟠' },
    { es: 'Morado', pt: 'Roxo', emoji: '🟣' },
    { es: 'Rosa', pt: 'Rosa', emoji: '🌸' },
    { es: 'Blanco', pt: 'Branco', emoji: '⬜' },
    { es: 'Negro', pt: 'Preto', emoji: '⬛' },
    { es: 'Gris', pt: 'Cinza', emoji: '🩶' },
    { es: 'Marrón', pt: 'Marrom', emoji: '🟫' },
    { es: 'Celeste', pt: 'Azul-claro', emoji: '🩵' },
    { es: 'Dorado', pt: 'Dourado', emoji: '🌟' },
    { es: 'Plateado', pt: 'Prateado', emoji: '🪙' }
  ],
  numeros: [
    { es: 'Uno', pt: 'Um', emoji: '1️⃣' },
    { es: 'Dos', pt: 'Dois', emoji: '2️⃣' },
    { es: 'Tres', pt: 'Três', emoji: '3️⃣' },
    { es: 'Cuatro', pt: 'Quatro', emoji: '4️⃣' },
    { es: 'Cinco', pt: 'Cinco', emoji: '5️⃣' },
    { es: 'Seis', pt: 'Seis', emoji: '6️⃣' },
    { es: 'Siete', pt: 'Sete', emoji: '7️⃣' },
    { es: 'Ocho', pt: 'Oito', emoji: '8️⃣' },
    { es: 'Nueve', pt: 'Nove', emoji: '9️⃣' },
    { es: 'Diez', pt: 'Dez', emoji: '🔟' },
    { es: 'Once', pt: 'Onze', emoji: '1️⃣1️⃣' },
    { es: 'Doce', pt: 'Doze', emoji: '🕛' },
    { es: 'Veinte', pt: 'Vinte', emoji: '✌️' },
    { es: 'Cincuenta', pt: 'Cinquenta', emoji: '5️⃣0️⃣' },
    { es: 'Cien', pt: 'Cem', emoji: '💯' },
    { es: 'Mil', pt: 'Mil', emoji: '🔢' },
    { es: 'Primero', pt: 'Primeiro', emoji: '🥇' },
    { es: 'Segundo', pt: 'Segundo', emoji: '🥈' },
    { es: 'Tercero', pt: 'Terceiro', emoji: '🥉' },
    { es: 'Mucho', pt: 'Muito', emoji: '📦' },
    { es: 'Poco', pt: 'Pouco', emoji: '🤏' },
    { es: 'Nada', pt: 'Nada', emoji: '0️⃣' },
    { es: 'Todo', pt: 'Tudo', emoji: '🌐' },
    { es: 'Medio', pt: 'Metade', emoji: '➗' }
  ],
  tiempo: [
    { es: 'Hoy', pt: 'Hoje', emoji: '📅' },
    { es: 'Ayer', pt: 'Ontem', emoji: '⬅️' },
    { es: 'Mañana', pt: 'Amanhã', emoji: '➡️' },
    { es: 'Semana', pt: 'Semana', emoji: '🗓️' },
    { es: 'Mes', pt: 'Mês', emoji: '📆' },
    { es: 'Año', pt: 'Ano', emoji: '🎆' },
    { es: 'Hora', pt: 'Hora', emoji: '⏰' },
    { es: 'Minuto', pt: 'Minuto', emoji: '⏱️' },
    { es: 'Segundo', pt: 'Segundo', emoji: '⚡' },
    { es: 'Lunes', pt: 'Segunda-feira', emoji: '1️⃣' },
    { es: 'Martes', pt: 'Terça-feira', emoji: '2️⃣' },
    { es: 'Miércoles', pt: 'Quarta-feira', emoji: '3️⃣' },
    { es: 'Jueves', pt: 'Quinta-feira', emoji: '4️⃣' },
    { es: 'Viernes', pt: 'Sexta-feira', emoji: '5️⃣' },
    { es: 'Sábado', pt: 'Sábado', emoji: '🎉' },
    { es: 'Domingo', pt: 'Domingo', emoji: '☀️' },
    { es: 'Enero', pt: 'Janeiro', emoji: '❄️' },
    { es: 'Febrero', pt: 'Fevereiro', emoji: '💝' },
    { es: 'Marzo', pt: 'Março', emoji: '🌱' },
    { es: 'Diciembre', pt: 'Dezembro', emoji: '🎄' }
  ],
  clima: [
    { es: 'Sol', pt: 'Sol', emoji: '☀️' },
    { es: 'Lluvia', pt: 'Chuva', emoji: '🌧️' },
    { es: 'Nieve', pt: 'Neve', emoji: '❄️' },
    { es: 'Viento', pt: 'Vento', emoji: '💨' },
    { es: 'Nube', pt: 'Nuvem', emoji: '☁️' },
    { es: 'Tormenta', pt: 'Tempestade', emoji: '⛈️' },
    { es: 'Mar', pt: 'Mar', emoji: '🌊' },
    { es: 'Río', pt: 'Rio', emoji: '🏞️' },
    { es: 'Playa', pt: 'Praia', emoji: '🏖️' },
    { es: 'Montaña', pt: 'Montanha', emoji: '⛰️' },
    { es: 'Bosque', pt: 'Floresta', emoji: '🌲' },
    { es: 'Isla', pt: 'Ilha', emoji: '🏝️' }
  ],
  cuerpo: [
    { es: 'Cabeza', pt: 'Cabeça', emoji: '🗣️' },
    { es: 'Cara', pt: 'Rosto', emoji: '😊' },
    { es: 'Ojos', pt: 'Olhos', emoji: '👀' },
    { es: 'Nariz', pt: 'Nariz', emoji: '👃' },
    { es: 'Boca', pt: 'Boca', emoji: '👄' },
    { es: 'Oreja', pt: 'Orelha', emoji: '👂' },
    { es: 'Cuello', pt: 'Pescoço', emoji: '🧣' },
    { es: 'Hombro', pt: 'Ombro', emoji: '💪' },
    { es: 'Brazo', pt: 'Braço', emoji: '🦾' },
    { es: 'Mano', pt: 'Mão', emoji: '✋' },
    { es: 'Dedo', pt: 'Dedo', emoji: '☝️' },
    { es: 'Pecho', pt: 'Peito', emoji: '🫀' },
    { es: 'Espalda', pt: 'Costas', emoji: '🔙' },
    { es: 'Estómago', pt: 'Estômago', emoji: '🤰' },
    { es: 'Pierna', pt: 'Perna', emoji: '🦵' },
    { es: 'Pie', pt: 'Pé', emoji: '🦶' },
    { es: 'Corazón', pt: 'Coração', emoji: '❤️' },
    { es: 'Cerebro', pt: 'Cérebro', emoji: '🧠' }
  ],
  transporte: [
    { es: 'Carro', pt: 'Carro', emoji: '🚗' },
    { es: 'Autobús', pt: 'Ônibus', emoji: '🚌' },
    { es: 'Tren', pt: 'Trem', emoji: '🚂' },
    { es: 'Metro', pt: 'Metrô', emoji: '🚇' },
    { es: 'Avión', pt: 'Avião', emoji: '✈️' },
    { es: 'Barco', pt: 'Barco', emoji: '🚢' },
    { es: 'Bicicleta', pt: 'Bicicleta', emoji: '🚲' },
    { es: 'Moto', pt: 'Moto', emoji: '🏍️' },
    { es: 'Aeropuerto', pt: 'Aeroporto', emoji: '🛫' },
    { es: 'Estación', pt: 'Estação', emoji: '🏛️' },
    { es: 'Pasaporte', pt: 'Passaporte', emoji: '🛂' },
    { es: 'Boleto', pt: 'Passagem', emoji: '🎫' },
    { es: 'Maleta', pt: 'Mala', emoji: '🧳' },
    { es: 'Viaje', pt: 'Viagem', emoji: '🗺️' }
  ],
  ciudad: [
    { es: 'Ciudad', pt: 'Cidade', emoji: '🏙️' },
    { es: 'Calle', pt: 'Rua', emoji: '🛣️' },
    { es: 'Plaza', pt: 'Praça', emoji: ' Fountain' },
    { es: 'Parque', pt: 'Parque', emoji: '🌳' },
    { es: 'Supermercado', pt: 'Supermercado', emoji: '🛒' },
    { es: 'Restaurante', pt: 'Restaurante', emoji: '🍽️' },
    { es: 'Hospital', pt: 'Hospital', emoji: '🏥' },
    { es: 'Farmacia', pt: 'Farmácia', emoji: '💊' },
    { es: 'Banco', pt: 'Banco', emoji: '🏦' },
    { es: 'Iglesia', pt: 'Igreja', emoji: '⛪' },
    { es: 'Museo', pt: 'Museu', emoji: '🏛️' },
    { es: 'Hotel', pt: 'Hotel', emoji: '🏨' },
    { es: 'Playa', pt: 'Praia', emoji: '🏖️' },
    { es: 'Cine', pt: 'Cinema', emoji: '🎬' }
  ],
  trabajo: [
    { es: 'Médico', pt: 'Médico', emoji: '👨‍⚕️' },
    { es: 'Enfermero', pt: 'Enfermeiro', emoji: '🧑‍⚕️' },
    { es: 'Profesor', pt: 'Professor', emoji: '👨‍🏫' },
    { es: 'Abogado', pt: 'Advogado', emoji: '⚖️' },
    { es: 'Ingeniero', pt: 'Engenheiro', emoji: '🧑‍💻' },
    { es: 'Policía', pt: 'Policial', emoji: '👮' },
    { es: 'Bombero', pt: 'Bombeiro', emoji: '🧑‍🚒' },
    { es: 'Piloto', pt: 'Piloto', emoji: '🧑‍✈️' },
    { es: 'Empresario', pt: 'Empresário', emoji: '💼' },
    { es: 'Dentista', pt: 'Dentista', emoji: '🦷' }
  ],
  escuela: [
    { es: 'Libro', pt: 'Livro', emoji: '📚' },
    { es: 'Cuaderno', pt: 'Caderno', emoji: '📓' },
    { es: 'Lápiz', pt: 'Lápis', emoji: '✏️' },
    { es: 'Bolígrafo', pt: 'Caneta', emoji: '🖊️' },
    { es: 'Borrador', pt: 'Borracha', emoji: '🧹' },
    { es: 'Mochila', pt: 'Mochila', emoji: '🎒' },
    { es: 'Matemática', pt: 'Matemática', emoji: '➕' },
    { es: 'Historia', pt: 'História', emoji: '📜' },
    { es: 'Ciencias', pt: 'Ciências', emoji: '🔬' },
    { es: 'Idioma', pt: 'Idioma', emoji: '🗣️' },
    { es: 'Arte', pt: 'Arte', emoji: '🎨' }
  ],
  emociones: [
    { es: 'Feliz', pt: 'Feliz', emoji: '😊' },
    { es: 'Triste', pt: 'Triste', emoji: '😢' },
    { es: 'Enojado', pt: 'Bravo', emoji: '😠' },
    { es: 'Asustado', pt: 'Assustado', emoji: '😱' },
    { es: 'Calma', pt: 'Calma', emoji: '😌' },
    { es: 'Amor', pt: 'Amor', emoji: '❤️' },
    { es: 'Alegría', pt: 'Alegria', emoji: '🎉' },
    { es: 'Dolor', pt: 'Dor', emoji: '💔' },
    { es: 'Nervioso', pt: 'Nervoso', emoji: '😰' },
    { es: 'Cansado', pt: 'Cansado', emoji: '😴' },
    { es: 'Orgulloso', pt: 'Orgulhoso', emoji: '😤' },
    { es: 'Miedo', pt: 'Medo', emoji: '😨' }
  ],
  ropa: [
    { es: 'Camisa', pt: 'Camisa', emoji: '👔' },
    { es: 'Camiseta', pt: 'Camiseta', emoji: '👕' },
    { es: 'Pantalón', pt: 'Calça', emoji: '👖' },
    { es: 'Vestido', pt: 'Vestido', emoji: '👗' },
    { es: 'Falda', pt: 'Saia', emoji: '🩱' },
    { es: 'Zapato', pt: 'Sapato', emoji: '👟' },
    { es: 'Sandalia', pt: 'Sandália', emoji: '🩴' },
    { es: 'Bota', pt: 'Bota', emoji: '👢' },
    { es: 'Calcetín', pt: 'Meia', emoji: '🧦' },
    { es: 'Abrigo', pt: 'Casaco', emoji: '🧥' },
    { es: 'Suéter', pt: 'Suéter', emoji: '🧶' },
    { es: 'Gorra', pt: 'Boné', emoji: '🧢' },
    { es: 'Gafas', pt: 'Óculos', emoji: '👓' },
    { es: 'Reloj', pt: 'Relógio', emoji: '⌚' }
  ],
  salud: [
    { es: 'Dolor', pt: 'Dor', emoji: '😣' },
    { es: 'Fiebre', pt: 'Febre', emoji: '🌡️' },
    { es: 'Tos', pt: 'Tosse', emoji: '😷' },
    { es: 'Resfriado', pt: 'Resfriado', emoji: '🤧' },
    { es: 'Salud', pt: 'Saúde', emoji: '❤️‍🩹' },
    { es: 'Enfermedad', pt: 'Doença', emoji: '🤒' },
    { es: 'Medicina', pt: 'Remédio', emoji: '💊' },
    { es: 'Farmacia', pt: 'Farmácia', emoji: '💊' },
    { es: 'Hospital', pt: 'Hospital', emoji: '🏥' },
    { es: 'Receta', pt: 'Receita', emoji: '📋' },
    { es: 'Vacuna', pt: 'Vacina', emoji: '💉' }
  ],
  ocio: [
    { es: 'Deporte', pt: 'Esporte', emoji: '⚽' },
    { es: 'Fútbol', pt: 'Futebol', emoji: '⚽' },
    { es: 'Baloncesto', pt: 'Basquete', emoji: '🏀' },
    { es: 'Tenis', pt: 'Tênis', emoji: '🎾' },
    { es: 'Natación', pt: 'Natação', emoji: '🏊' },
    { es: 'Ciclismo', pt: 'Ciclismo', emoji: '🚲' },
    { es: 'Música', pt: 'Música', emoji: '🎵' },
    { es: 'Película', pt: 'Filme', emoji: '🎬' },
    { es: 'Libro', pt: 'Livro', emoji: '📚' },
    { es: 'Baile', pt: 'Dança', emoji: '💃' },
    { es: 'Fotografía', pt: 'Fotografia', emoji: '📸' },
    { es: 'Cocina', pt: 'Culinária', emoji: '👨‍🍳' }
  ],
  tecnologia: [
    { es: 'Celular', pt: 'Celular', emoji: '📱' },
    { es: 'Computadora', pt: 'Computador', emoji: '💻' },
    { es: 'Tablet', pt: 'Tablet', emoji: '📱' },
    { es: 'Cámara', pt: 'Câmera', emoji: '📷' },
    { es: 'Internet', pt: 'Internet', emoji: '🌐' },
    { es: 'Correo', pt: 'E-mail', emoji: '📧' },
    { es: 'Red social', pt: 'Rede social', emoji: '📲' },
    { es: 'Contraseña', pt: 'Senha', emoji: '🔐' },
    { es: 'Aplicación', pt: 'Aplicativo', emoji: '📲' }
  ],
  frases: [
    { es: 'Buenos días', pt: 'Bom dia', emoji: '🌅' },
    { es: 'Buenas tardes', pt: 'Boa tarde', emoji: '🌇' },
    { es: 'Buenas noches', pt: 'Boa noite', emoji: '🌙' },
    { es: 'Hola', pt: 'Olá', emoji: '👋' },
    { es: 'Adiós', pt: 'Tchau', emoji: '👋' },
    { es: 'Hasta luego', pt: 'Até logo', emoji: '👋' },
    { es: 'Por favor', pt: 'Por favor', emoji: '🙏' },
    { es: 'Gracias', pt: 'Obrigado/a', emoji: '😊' },
    { es: 'De nada', pt: 'De nada', emoji: '😄' },
    { es: 'Lo siento', pt: 'Desculpe', emoji: '😔' },
    { es: '¿Cómo estás?', pt: 'Como vai você?', emoji: '🤝' },
    { es: 'Estoy bien', pt: 'Estou bem', emoji: '😊' }
  ],
  conectores: [
    { es: 'Porque', pt: 'Porque', emoji: '❓' },
    { es: 'Por eso', pt: 'Por isso', emoji: '➡️' },
    { es: 'Por lo tanto', pt: 'Portanto', emoji: '⚖️' },
    { es: 'Dado que', pt: 'Dado que', emoji: '📌' },
    { es: 'Pero', pt: 'Mas', emoji: '↔️' },
    { es: 'Sin embargo', pt: 'No entanto', emoji: '🚧' },
    { es: 'Aunque', pt: 'Embora', emoji: '🌀' },
    { es: 'A pesar de', pt: 'Apesar de', emoji: '💪' }
  ],
  preposiciones: [
    { es: 'En', pt: 'Em', emoji: '📍' },
    { es: 'Sobre', pt: 'Sobre', emoji: '🇺🇦' },
    { es: 'Bajo', pt: 'Sob', emoji: '⬇️' },
    { es: 'Dentro de', pt: 'Dentro de', emoji: '📦' },
    { es: 'Fuera de', pt: 'Fora de', emoji: '🚪' },
    { es: 'Cerca de', pt: 'Perto de', emoji: '📌' },
    { es: 'Lejos de', pt: 'Longe de', emoji: '🗺️' },
    { es: 'Antes de', pt: 'Antes de', emoji: '⏮️' },
    { es: 'Después de', pt: 'Depois de', emoji: '⏭️' },
    { es: 'Durante', pt: 'Durante', emoji: '⏱️' },
    { es: 'Desde', pt: 'Desde', emoji: '🕐' },
    { es: 'Hasta', pt: 'Até', emoji: '🏁' }
  ],
  adverbios: [
    { es: 'Siempre', pt: 'Sempre', emoji: '♾️' },
    { es: 'Nunca', pt: 'Nunca', emoji: '🚫' },
    { es: 'Jamás', pt: 'Jamais', emoji: '❌' },
    { es: 'Ahora', pt: 'Agora', emoji: '⏰' },
    { es: 'Antes', pt: 'Antes', emoji: '⏮️' },
    { es: 'Después', pt: 'Depois', emoji: '⏭️' },
    { es: 'Ainda', pt: 'Ainda', emoji: '⏳' },
    { es: 'Aquí', pt: 'Aqui', emoji: '📍' },
    { es: 'Ahí', pt: 'Aí', emoji: '👉' },
    { es: 'Allí', pt: 'Lá', emoji: '🗺️' },
    { es: 'Adentro', pt: 'Lá dentro', emoji: '🏠' },
    { es: 'Afuera', pt: 'Lá fora', emoji: '🌿' }
  ],
  pronombres: [
    { es: 'Yo', pt: 'Eu', emoji: '👤' },
    { es: 'Tú', pt: 'Você', emoji: '👉' },
    { es: 'Él', pt: 'Ele', emoji: '👨' },
    { es: 'Ella', pt: 'Ela', emoji: '👩' },
    { es: 'Nosotros', pt: 'Nós', emoji: '👥' },
    { es: 'Ellos', pt: 'Eles', emoji: '👥' },
    { es: 'Ellas', pt: 'Elas', emoji: '👥' },
    { es: 'Ustedes', pt: 'Vocês', emoji: '👫' },
    { es: 'Mío', pt: 'Meu', emoji: '🙋' },
    { es: 'Tuyo', pt: 'Seu', emoji: '👆' },
    { es: 'Suyo', pt: 'Dele', emoji: '👈' },
    { es: 'Nuestro', pt: 'Nosso', emoji: '🤲' },
    { es: 'Mía', pt: 'Minha', emoji: '🙋‍♀️' },
    { es: 'Nuestra', pt: 'Nossa', emoji: '👐' }
  ],
  interrogativos: [
    { es: '¿Qué?', pt: 'O quê?', emoji: '❓' },
    { es: '¿Quién?', pt: 'Quem?', emoji: '👤' },
    { es: '¿Dónde?', pt: 'Onde?', emoji: '📍' },
    { es: '¿Cuándo?', pt: 'Quando?', emoji: '📅' },
    { es: '¿Cómo?', pt: 'Como?', emoji: '🤔' },
    { es: '¿Por qué?', pt: 'Por quê?', emoji: '🔍' },
    { es: '¿Cuánto?', pt: 'Quanto?', emoji: '🔢' }
  ],
  conjunciones: [
    { es: 'Y', pt: 'E', emoji: '➕' },
    { es: 'O', pt: 'Ou', emoji: '🔀' },
    { es: 'Ni...ni', pt: 'Nem...nem', emoji: '❌' },
    { es: 'Pero', pt: 'Mas', emoji: '↔️' },
    { es: 'Sino', pt: 'Mas sim', emoji: '🔄' }
  ],
  adjetivos: [
    { es: 'Grande', pt: 'Grande', emoji: '🐘' },
    { es: 'Pequeño', pt: 'Pequeno', emoji: '🐭' },
    { es: 'Alto', pt: 'Alto', emoji: '🏔️' },
    { es: 'Bajo', pt: 'Baixo', emoji: '🏕️' },
    { es: 'Largo', pt: 'Longo', emoji: '📏' },
    { es: 'Corto', pt: 'Curto', emoji: '✂️' },
    { es: 'Bonito', pt: 'Bonito', emoji: '😍' },
    { es: 'Feo', pt: 'Feio', emoji: '😣' },
    { es: 'Limpio', pt: 'Limpo', emoji: '✨' },
    { es: 'Sucio', pt: 'Sujo', emoji: '🗑️' },
    { es: 'Nuevo', pt: 'Novo', emoji: '🆕' },
    { es: 'Viejo', pt: 'Velho', emoji: '🏚️' }
  ],
  cuantificadores: [
    { es: 'Algo', pt: 'Algo', emoji: '🔍' },
    { es: 'Alguien', pt: 'Alguém', emoji: '👤' },
    { es: 'Alguno', pt: 'Algum', emoji: '☝️' },
    { es: 'Ninguno', pt: 'Nenhum', emoji: '0️⃣' },
    { es: 'Nadie', pt: 'Ninguém', emoji: '👻' },
    { es: 'Nada', pt: 'Nada', emoji: '❌' },
    { es: 'Todo', pt: 'Tudo', emoji: '🌐' }
  ]
};

export const modulo3Categories: Category[] = [
  { id: 'superlativos', emoji: '⭐', name: 'Superlativos', subcats: [
    { id: 'sup_absoluto_sint', emoji: '🔝', name: 'Superlativo absoluto sintético', keys: ['Fácil', 'Difícil', 'Feliz', 'Lindo', 'Simpático', 'Veloz', 'Fiel', 'Barato', 'Amigo', 'Amável', 'Pobre', 'Agradável', 'Antigo', 'Belo', 'Caro'] },
    { id: 'sup_casos', emoji: '⚡', name: 'Casos especiales', keys: ['Grande', 'Pequeno', 'Bom/boa', 'Mau/má'] },
    { id: 'sup_relativo', emoji: '🏆', name: 'Superlativo relativo', keys: ['o más grande', 'o más pequeño', 'o mejor', 'o peor'] }
  ]},
  { id: 'fazendo_malas', emoji: '🧳', name: 'Fazendo as Malas', subcats: [
    { id: 'farmacia', emoji: '💊', name: 'Farmácia', keys: ['Curita', 'Bandita', 'Analgésico', 'Antiácido', 'Remedio para el mareo', 'Algodón', 'Gasa', 'Mertiolate'] },
    { id: 'vestuario', emoji: '👕', name: 'Vestuário', keys: ['Abrigo', 'Buzo', 'Saco', 'Blazer', 'Remera', 'Camiseta', 'Suéter', 'Traje', 'Jean', 'Calza', 'Pijama', 'Bikini', 'Short', 'Zapato', 'Zapatillas'] },
    { id: 'variedade', emoji: '🎒', name: 'Variedade', keys: ['Documentos personales', 'Lapicera', 'Agenda', 'Dinero', 'Cámara fotográfica', 'Pila', 'Libros'] },
    { id: 'higiene', emoji: '🧴', name: 'Higiene e beleza', keys: ['Pasta de dientes', 'Cepillo de dientes', 'Colonia', 'Perfume', 'Desodorante', 'Shampoo', 'Acondicionador', 'Jabón', 'Toalla'] }
  ]},
  { id: 'futuro_m3', emoji: '🔮', name: 'Futuro', type: 'verbos', verbs: ['Estudar', 'Entender', 'Dividir', 'Dizer', 'Fazer', 'Trazer'] },
  { id: 'no_hotel', emoji: '🏨', name: 'No Hotel', subcats: [
    { id: 'hotel_personal', emoji: '👔', name: 'Personal y habitaciones', keys: ['Gerente', 'Recepcionista', 'Camareira', 'Porteiro', 'Reserva', 'Diária', 'Estadia', 'Suíte'] },
    { id: 'hotel_amenidades', emoji: '🛏️', name: 'Camas, ropa y amenities', keys: ['Lençol', 'Cobertor', 'Travesseiro', 'Fronha', 'Piscina', 'Garagem'] }
  ]},
  { id: 'locais_refeicoes', emoji: '🍽️', name: 'Locais de Refeições', subcats: [
    { id: 'tipos_local', emoji: '🏪', name: 'Tipos de locales', keys: ['Rodízio', 'Churrascaria', 'Pizzaria', 'Lanchonete', 'Café', 'Padaria', 'Comida a quilo'] },
    { id: 'formas_pag', emoji: '💳', name: 'Formas de pagamento', keys: ['À vista', 'Dinnheiro', 'Cartão de crédito', 'Cheque', 'Sem juros'] }
  ]},
  { id: 'foto1_compras', emoji: '🛍️', name: 'Compras, pagamentos e preços', subcats: [
    { id: 'f1_caracteristicas', emoji: '📺', name: 'Pedir información de características', keys: [
      'Por favor, eu quero informação sobre essa TV.',
      'Quais são as características/vantagens desse som?',
      'Tem outras cores?',
      'Tem outro tamanho?',
      'Tem tamanho maior?',
      'Tem de malha?'
    ] },
    { id: 'f1_pagamento', emoji: '💳', name: 'Pedir información sobre formas de pago', keys: [
      'Aceitam cartão de crédito?',
      'Posso pagar con cartão de crédito/de débito?',
      'Posso pagar em prestações?',
      'Tem juros?',
      'Em quantas parcelas posso pagar?'
    ] },
    { id: 'f1_preco', emoji: '💰', name: 'Perguntar o preço', keys: [
      'Quanto custa...?',
      'Qual é o preço...?',
      'Quanto é aquele...?'
    ] },
    { id: 'f1_pedir', emoji: '☕', name: 'Pedir objeto, serviço, etc.', keys: [
      'Por favor, dois cafés.',
      'Por favor, um guaraná e uma torrada.',
      'Eu quero trocar este par de sapatos.',
      'Eu gostaria de trocar esta camiseta.'
    ] }
  ]},
  { id: 'foto2_locais_pag', emoji: '🏪', name: 'Diferentes locais de refeições e formas de pagamento', subcats: [
    { id: 'f2_locais', emoji: '🍽️', name: 'Diferentes locais de refeições', keys: [
      'Rodízio', 'Churrascaria', 'Pizzaria', 'Cantina', 'Trattoria', 'Lanchonete / Lancheria', 'Café', 'Boteco', 'Padaria', 'Bar', 'Comida a quilo'
    ] },
    { id: 'f2_formas', emoji: '💳', name: 'Formas de pagamento', keys: [
      'À vista', 'A prazo', 'Em prestações', 'Em parcelas', 'Em (x) mensais', 'Dinheiro', 'Com cheque', 'Com cartão de crédito', 'Com débito automático', 'Com vale refeição', 'Com descontos', 'Sem descontos', 'Com juros', 'Sem juros'
    ] }
  ]},
  { id: 'foto3_restaurante', emoji: '🍷', name: 'Vocabulário: Restaurante', subcats: [
    { id: 'f3_comida_serv', emoji: '🍽️', name: 'Comida e serviço', keys: [
      'Couvert', 'Tira-gosto', 'Os petiscos', 'O aperitivo', 'A entrada', 'A sobremesa', 'A conta', 'A gorjeta', 'O C.C.'
    ] },
    { id: 'f3_atend', emoji: '🤵', name: 'Atendimento', keys: [
      'O garçom', 'A garçonete', 'O cardápio', 'A lista de vinhos'
    ] },
    { id: 'f3_ponto_carne', emoji: '🥩', name: 'Ponto da carne', keys: [
      'Bem-passado', 'Malpassado', 'Ao ponto'
    ] },
    { id: 'f3_utensilios', emoji: '🍴', name: 'Utensílios e mesa', keys: [
      'A baixela', 'A louça', 'Os talheres', 'O garfo', 'A faca', 'A colher', 'O copo', 'A taça', 'O cálice', 'A xícara', 'O bule', 'O açucareiro', 'A toalha de mesa', 'O guardanapo', 'Os pratos', 'Prato fundo', 'Prato raso', 'Prato de sobremesa', 'A travessa'
    ] }
  ]},
  { id: 'foto4_almoco_jantar', emoji: '🍲', name: 'Vocabulário: Almoço / Jantar', subcats: [
    { id: 'f4_bebidas', emoji: '🥤', name: 'Bebidas', keys: [
      'Vinho tinto ou blanco', 'Água com gás', 'Cerveja', 'Suco', 'Água mineral', 'Cachaça', 'Caipirinha', 'Champanha', 'Refrigerante', 'Guaraná', 'Coca', 'Soda', 'Laranja', 'Uva', 'Sprite'
    ] },
    { id: 'f4_entradas_acomp', emoji: '🥗', name: 'Entradas e acompanhamentos', keys: [
      'Tira-gosto', 'Torta (salgada ou doce)'
    ] },
    { id: 'f4_saladas_verd', emoji: '🥦', name: 'Saladas e verduras', keys: [
      'Alface', 'Tomate', 'Cenoura', 'Cebola', 'Milho', 'Beterraba', 'Palmito', 'Repolho', 'Rúcula', 'Escarola', 'Agrião', 'Couve-flor', 'Brócolis', 'Alcachofra', 'Abóbora', 'Abobrinha', 'Berinjela', 'Pimentão', 'Batata', 'Batata-doce', 'Inhame', 'Lentilha', 'Ervilha', 'Grão-de-bico', 'Alho-poró', 'Espinafre', 'Chicória', 'Nabo', 'Rabanete', 'Acelga', 'Salsinha'
    ] },
    { id: 'f4_prato_acomp', emoji: '🍚', name: 'Pratos e acompanhamentos', keys: [
      'Arroz com feijão', 'Batata frita'
    ] },
    { id: 'f4_carnes_princ', emoji: '🥩', name: 'Carnes e pratos principaux', keys: [
      'Carne', 'Assada', 'Churrasco', 'Filé', 'Bife', 'Porco', 'Peixe', 'Peixe frito', 'Peixe à milanesa', 'Peixe ensopado', 'Frango', 'Frango grelhado', 'Frango ao forno', 'Frango ensopado', 'Frango empanado', 'Frango à milanesa', 'Frango cozido'
    ] },
    { id: 'f4_massas', emoji: '🍝', name: 'Massas', keys: [
      'Macarrão', 'Nhoque', 'Ravioli', 'Lasanha', 'Pizza', 'Panqueca'
    ] },
    { id: 'f4_outros', emoji: '🍳', name: 'Outros pratos', keys: [
      'Fritada'
    ] },
    { id: 'f4_sobremesas', emoji: '🍰', name: 'Sobremesas', keys: [
      'Sorvetes', 'Bolos', 'Docinhos'
    ] }
  ]},
  { id: 'foto5_cafe_lanche', emoji: '🥐', name: 'Café da manhã / Merenda / Lanche', subcats: [
    { id: 'f5_bebidas', emoji: '☕', name: 'Bebidas', keys: [
      'Café', 'Café com leite', 'Chá', 'Chá com leite', 'Chimarrão', 'Iogurte', 'Vitamina', 'Suco', 'Achocolatado'
    ] },
    { id: 'f5_paes_lanches', emoji: '🍞', name: 'Pães e lanches', keys: [
      'Torradas', 'Pão', 'Manteiga', 'Geleia', 'Sanduíche de queijo e presunto', 'Bolo', 'Biscoito e bolachas', 'Croassã', 'Pão doce', 'Ovos e bacon', 'Sucrilhos'
    ] },
    { id: 'f5_frutas', emoji: '🍓', name: 'Frutas', keys: [
      'Melancia', 'Melão', 'Laranja', 'Banana', 'Manga', 'Mamão', 'Uva', 'Maçã', 'Morango', 'Abacaxi', 'Abacate', 'Ameixa', 'Açaí', 'Amora', 'Cajá', 'Caju', 'Carambola', 'Cereja', 'Figo', 'Goiaba', 'Graviola', 'Groselha', 'Jabuticaba', 'Jaca', 'Kiwi', 'Marmelo', 'Mexerica', 'Framboesa', 'Mirtilo', 'Acerola', 'Maracujá', 'Pêra', 'Pitanga', 'Pomelo'
    ] }
  ]},
  { id: 'conjuncoes_m3', emoji: '🔗', name: 'Conjunções', subcats: [
    { id: 'conj_lista', emoji: '📝', name: 'Frases de ligação', keys: [
      'Para que', 'Embora', 'Desde que', 'Caso que', 'Mesmo que'
    ] }
  ]}
];

export const modulo3FlashcardData: Record<string, { es: string; pt: string; emoji: string }[]> = {
  superlativos: [
    { es: 'Fácil', pt: 'Facílimo', emoji: '😌' },
    { es: 'Difícil', pt: 'Dificílimo', emoji: '😰' },
    { es: 'Feliz', pt: 'Felicíssimo', emoji: '&#x1F604;' },
    { es: 'Lindo', pt: 'Lindíssimo', emoji: '😍' },
    { es: 'Simpático', pt: 'Simpaticíssimo', emoji: '😊' },
    { es: 'Veloz', pt: 'Velocíssimo', emoji: '⚡' },
    { es: 'Fiel', pt: 'Fidelíssimo', emoji: '🤝' },
    { es: 'Barato', pt: 'Baratíssimo', emoji: '💰' },
    { es: 'Amigo', pt: 'Amicíssimo', emoji: '👫' },
    { es: 'Amável', pt: 'Amabilíssimo', emoji: '💗' },
    { es: 'Pobre', pt: 'Paupérrimo', emoji: '😔' },
    { es: 'Agradável', pt: 'Agradabilíssimo', emoji: '😁' },
    { es: 'Antigo', pt: 'Antiquíssimo', emoji: '🏛️' },
    { es: 'Belo', pt: 'Belíssimo', emoji: '✨' },
    { es: 'Caro', pt: 'Caríssimo', emoji: '💎' },
    { es: 'Grande', pt: 'Grandíssimo / Máximo', emoji: '🐘' },
    { es: 'Pequeno', pt: 'Pequeníssimo / Mínimo', emoji: '🐭' },
    { es: 'Bom/boa', pt: 'Ótimo / Boníssimo', emoji: '👍' },
    { es: 'Mau/má', pt: 'Péssimo', emoji: '👎' },
    { es: 'o más grande', pt: 'o maior', emoji: '🏆' },
    { es: 'o más pequeño', pt: 'o menor', emoji: '🔽' },
    { es: 'o mejor', pt: 'o melhor', emoji: '⭐' },
    { es: 'o peor', pt: 'o pior', emoji: '💔' }
  ],
  fazendo_malas: [
    { es: 'Curita', pt: 'Bandaid', emoji: '🩹' },
    { es: 'Bandita', pt: 'Bandaid', emoji: '🩹' },
    { es: 'Analgésico', pt: 'Analgésico', emoji: '💊' },
    { es: 'Antiácido', pt: 'Antiácido', emoji: '🧪' },
    { es: 'Remedio para el mareo', pt: 'Remédio para enjoo', emoji: '🤢' },
    { es: 'Algodón', pt: 'Algodão', emoji: '☁️' },
    { es: 'Gasa', pt: 'Gaze', emoji: '🩹' },
    { es: 'Mertiolate', pt: 'Mertiolate', emoji: '🔴' },
    { es: 'Abrigo', pt: 'Agasalho', emoji: '🧥' },
    { es: 'Buzo', pt: 'Agasalho', emoji: '🧥' },
    { es: 'Saco', pt: 'Paletó', emoji: '👔' },
    { es: 'Blazer', pt: 'Jaqueta', emoji: '👔' },
    { es: 'Remera', pt: 'Camisa', emoji: '👕' },
    { es: 'Camiseta', pt: 'Camiseta', emoji: '👕' },
    { es: 'Suéter', pt: 'Suéter', emoji: '🧶' },
    { es: 'Traje', pt: 'Terno', emoji: '🤵' },
    { es: 'Jean', pt: 'Calça jean', emoji: '👖' },
    { es: 'Calza', pt: 'Calça legging', emoji: '🩱' },
    { es: 'Pijama', pt: 'Pijama', emoji: '🌙' },
    { es: 'Bikini', pt: 'Biquíni', emoji: '🩱' },
    { es: 'Short', pt: 'Short', emoji: '🩳' },
    { es: 'Zapato', pt: 'Sapato', emoji: '👠' },
    { es: 'Zapatillas', pt: 'Tênis', emoji: '👟' },
    { es: 'Documentos personales', pt: 'Documentos pessoais', emoji: '🪪' },
    { es: 'Lapicera', pt: 'Caneta', emoji: '🖊️' },
    { es: 'Agenda', pt: 'Agenda', emoji: '📅' },
    { es: 'Dinero', pt: 'Dinheiro', emoji: '💵' },
    { es: 'Cámara fotográfica', pt: 'Máquina fotográfica', emoji: '📷' },
    { es: 'Pila', pt: 'Pilha', emoji: '🔋' },
    { es: 'Libros', pt: 'Livros', emoji: '📚' },
    { es: 'Pasta de dientes', pt: 'Creme dental', emoji: '🦷' },
    { es: 'Cepillo de dientes', pt: 'Escova de dentes', emoji: '🪥' },
    { es: 'Colonia', pt: 'Colônia', emoji: '🌸' },
    { es: 'Perfume', pt: 'Perfume', emoji: '🌹' },
    { es: 'Desodorante', pt: 'Desodorante', emoji: '💨' },
    { es: 'Shampoo', pt: 'Shampoo', emoji: 'Shower' },
    { es: 'Acondicionador', pt: 'Condicionador', emoji: 'Shower' },
    { es: 'Jabón', pt: 'Sabonete', emoji: '🧼' },
    { es: 'Toalla', pt: 'Toalha', emoji: '🏊' }
  ],
  no_hotel: [
    { es: 'Gerente', pt: 'Gerente', emoji: '💼' },
    { es: 'Recepcionista', pt: 'Recepcionista', emoji: '🛎️' },
    { es: 'Camareira', pt: 'Camareira', emoji: '🧹' },
    { es: 'Portero', pt: 'Porteiro', emoji: '🚪' },
    { es: 'Reserva', pt: 'Reserva', emoji: '📋' },
    { es: 'Tarifa diaria', pt: 'Diária', emoji: '💵' },
    { es: 'Estadía', pt: 'Estadia', emoji: '🗓️' },
    { es: 'Suite', pt: 'Suíte', emoji: '👑' },
    { es: 'Sábana', pt: 'Lençol', emoji: '🛌' },
    { es: 'Frazada', pt: 'Cobertor', emoji: '🧣' },
    { es: 'Almohada', pt: 'Travesseiro', emoji: '😴' },
    { es: 'Funda de almohada', pt: 'Fronha', emoji: '🌙' },
    { es: 'Pileta', pt: 'Piscina', emoji: '🏊' },
    { es: 'Garaje', pt: 'Garagem', emoji: '🚗' }
  ],
  locais_refeicoes: [
    { es: 'Tenedor libre', pt: 'Rodízio', emoji: '🍖' },
    { es: 'Parrilla', pt: 'Churrascaria', emoji: '🥩' },
    { es: 'Pizzería', pt: 'Pizzaria', emoji: '🍕' },
    { es: 'Sandwichería', pt: 'Lanchonete', emoji: '🥪' },
    { es: 'Café', pt: 'Café', emoji: '☕' },
    { es: 'Panadería', pt: 'Padaria', emoji: '🥐' },
    { es: 'Comida al peso', pt: 'Comida a quilo', emoji: '⚖️' },
    { es: 'Al contado', pt: 'À vista', emoji: '💵' },
    { es: 'Efectivo', pt: 'Dinheiro', emoji: '💵' },
    { es: 'Tarjeta de crédito', pt: 'Cartão de crédito', emoji: '💳' },
    { es: 'Cheque', pt: 'Cheque', emoji: '📝' },
    { es: 'Sin intereses', pt: 'Sem juros', emoji: '✅' }
  ],
  foto1_compras: [
    { es: 'Por favor, quiero información sobre esa televisión.', pt: 'Por favor, eu quero informação sobre essa TV.', emoji: '📺' },
    { es: '¿Cuáles son las características/ventajas de ese sonido?', pt: 'Quais são as características/vantagens desse som?', emoji: '🔊' },
    { es: '¿Tiene otros colores?', pt: 'Tem outras cores?', emoji: '🎨' },
    { es: '¿Tiene otro talle / tamaño?', pt: 'Tem outro tamanho?', emoji: '📏' },
    { es: '¿Tiene un talle / tamaño más grande?', pt: 'Tem tamanho maior?', emoji: '📈' },
    { es: '¿Tiene de lana / punto?', pt: 'Tem de malha?', emoji: '🧶' },
    { es: '¿Aceptan tarjeta de crédito?', pt: 'Aceitam cartão de crédito?', emoji: '💳' },
    { es: '¿Puedo pagar con tarjeta de crédito/débito?', pt: 'Posso pagar com cartão de crédito/de débito?', emoji: '💳' },
    { es: '¿Puedo pagar en cuotas?', pt: 'Posso pagar em prestações?', emoji: '📈' },
    { es: '¿Tiene recargo / intereses?', pt: 'Tem juros?', emoji: '💵' },
    { es: '¿En cuántas cuotas puedo pagar?', pt: 'Em quantas parcelas posso pagar?', emoji: '📊' },
    { es: '¿Cuánto cuesta...?', pt: 'Quanto custa...?', emoji: '💰' },
    { es: '¿Cuál es el precio...?', pt: 'Qual é o preço...?', emoji: '🏷️' },
    { es: '¿Cuánto sale aquel...?', pt: 'Quanto é aquele...?', emoji: '🔍' },
    { es: 'Por favor, dos cafés.', pt: 'Por favor, dois cafés.', emoji: '☕' },
    { es: 'Por favor, un guaraná y una tostada.', pt: 'Por favor, um guaraná e uma torrada.', emoji: '🥪' },
    { es: 'Quiero cambiar este par de zapatos.', pt: 'Eu quero trocar este par de sapatos.', emoji: '👟' },
    { es: 'Me gustaría cambiar esta camiseta.', pt: 'Eu gostaria de trocar esta camiseta.', emoji: '👕' }
  ],
  foto2_locais_pag: [
    { es: 'Tenedor libre (rodizio)', pt: 'Rodízio', emoji: '🍖' },
    { es: 'Parrilla', pt: 'Churrascaria', emoji: '🥩' },
    { es: 'Pizzería', pt: 'Pizzaria', emoji: '🍕' },
    { es: 'Cantina', pt: 'Cantina', emoji: '🏺' },
    { es: 'Trattoria / Restaurante italiano', pt: 'Trattoria', emoji: '🍝' },
    { es: 'Sandwichería / Local de comida rápida', pt: 'Lanchonete / Lancheria', emoji: '🥪' },
    { es: 'Café', pt: 'Café', emoji: '☕' },
    { es: 'Boteco (bar tradicional brasileño)', pt: 'Boteco', emoji: '🍺' },
    { es: 'Panadería', pt: 'Padaria', emoji: '🍞' },
    { es: 'Bar', pt: 'Bar', emoji: '🍹' },
    { es: 'Comida al peso', pt: 'Comida a quilo', emoji: '⚖️' },
    { es: 'Al contado / en efectivo', pt: 'À vista', emoji: '💵' },
    { es: 'A plazo', pt: 'A prazo', emoji: '⏳' },
    { es: 'En cuotas mensuales / prestaciones', pt: 'Em prestações', emoji: '📈' },
    { es: 'En cuotas / fraccionado', pt: 'Em parcelas', emoji: '📊' },
    { es: 'En (x) mensualidades', pt: 'Em (x) mensais', emoji: '📅' },
    { es: 'Dinero', pt: 'Dinheiro', emoji: '💵' },
    { es: 'Con cheque', pt: 'Com cheque', emoji: '📝' },
    { es: 'Con tarjeta de crédito', pt: 'Com cartão de crédito', emoji: '💳' },
    { es: 'Con débito automático', pt: 'Com débito automático', emoji: '💸' },
    { es: 'Con vale de comida', pt: 'Com vale refeição', emoji: '🎟️' },
    { es: 'Con descuentos', pt: 'Com descontos', emoji: '🏷️' },
    { es: 'Sin descuentos', pt: 'Sem descontos', emoji: '❌' },
    { es: 'Con intereses', pt: 'Com juros', emoji: '📈' },
    { es: 'Sin intereses', pt: 'Sem juros', emoji: '✅' }
  ],
  foto3_restaurante: [
    { es: 'Servicio de mesa / bocadillo de bienvenida', pt: 'Couvert', emoji: '🍞' },
    { es: 'Bocadillo / Aperitivo', pt: 'Tira-gosto', emoji: '🍤' },
    { es: 'Bocaditos / Tapas', pt: 'Os petiscos', emoji: '🍟' },
    { es: 'El aperitivo', pt: 'O aperitivo', emoji: '🍹' },
    { es: 'La entrada', pt: 'A entrada', emoji: '🥗' },
    { es: 'El postre', pt: 'A sobremesa', emoji: '🍰' },
    { es: 'La cuenta', pt: 'A conta', emoji: '📝' },
    { es: 'La propina', pt: 'A gorjeta', emoji: '💵' },
    { es: 'Servicio / cubierto', pt: 'O C.C.', emoji: '🍽️' },
    { es: 'El mozo / camarero', pt: 'O garçom', emoji: '🤵' },
    { es: 'La moza / camarera', pt: 'A garçonete', emoji: '👩‍💼' },
    { es: 'El menú / la carta', pt: 'O cardápio', emoji: '📜' },
    { es: 'La carta de vinos', pt: 'A lista de vinhos', emoji: '🍷' },
    { es: 'Bien cocido', pt: 'Bem-passado', emoji: '🥩' },
    { es: 'Jugoso / poco cocido', pt: 'Malpassado', emoji: '🥩' },
    { es: 'A punto', pt: 'Ao ponto', emoji: '🥩' },
    { es: 'La vajilla fina', pt: 'A baixela', emoji: '🍽️' },
    { es: 'La vajilla', pt: 'A louça', emoji: '🥣' },
    { es: 'Los cubiertos', pt: 'Os talheres', emoji: '🍴' },
    { es: 'El tenedor', pt: 'O garfo', emoji: '🍴' },
    { es: 'El cuchillo', pt: 'A faca', emoji: '🔪' },
    { es: 'La cuchara', pt: 'A colher', emoji: '🥄' },
    { es: 'El vaso', pt: 'O copo', emoji: '🥛' },
    { es: 'La copa', pt: 'A taça', emoji: '🍷' },
    { es: 'Cáliz / copa de licor', pt: 'O cálice', emoji: '🥃' },
    { es: 'La taza', pt: 'A xícara', emoji: '☕' },
    { es: 'La tetera / cafetera de mesa', pt: 'O bule', emoji: '🫖' },
    { es: 'El azucarero', pt: 'O açucareiro', emoji: '🧂' },
    { es: 'El mantel', pt: 'A toalha de mesa', emoji: '🧺' },
    { es: 'La servilleta', pt: 'O guardanapo', emoji: '🧻' },
    { es: 'Los platos', pt: 'Os pratos', emoji: '🍽️' },
    { es: 'Plato hondo', pt: 'Prato fundo', emoji: '🍜' },
    { es: 'Plato llano / playo', pt: 'Prato raso', emoji: '🍽️' },
    { es: 'Plato de postre', pt: 'Prato de sobremesa', emoji: '🍰' },
    { es: 'La fuente / bandeja grande', pt: 'A travessa', emoji: '🥘' }
  ],
  foto4_almoco_jantar: [
    { es: 'Vino tinto o blanco', pt: 'Vinho tinto ou branco', emoji: '🍷' },
    { es: 'Agua con gas', pt: 'Água com gás', emoji: '💧' },
    { es: 'Cerveza', pt: 'Cerveja', emoji: '🍺' },
    { es: 'Jugo', pt: 'Suco', emoji: '🥤' },
    { es: 'Agua mineral', pt: 'Água mineral', emoji: '🥤' },
    { es: 'Cachaça', pt: 'Cachaça', emoji: '🥃' },
    { es: 'Caipiriña', pt: 'Caipirinha', emoji: '🍹' },
    { es: 'Champagne / Champaña', pt: 'Champanha', emoji: '🥂' },
    { es: 'Gaseosa', pt: 'Refrigerante', emoji: '🥤' },
    { es: 'Guaraná (gaseosa típica)', pt: 'Guaraná', emoji: '🥫' },
    { es: 'Coca', pt: 'Coca', emoji: '🥤' },
    { es: 'Soda (gaseosa de lima-limón)', pt: 'Soda', emoji: '🥤' },
    { es: 'Gaseosa de naranja', pt: 'Laranja', emoji: '🍊' },
    { es: 'Gaseosa de uva', pt: 'Uva', emoji: '🍇' },
    { es: 'Sprite', pt: 'Sprite', emoji: '🥤' },
    { es: 'Bocadillo de acompañamiento', pt: 'Tira-gosto', emoji: '🍤' },
    { es: 'Tarta (salada o dulce)', pt: 'Torta (salgada ou doce)', emoji: '🥧' },
    { es: 'Lechuga', pt: 'Alface', emoji: '🥬' },
    { es: 'Tomate', pt: 'Tomate', emoji: '🍅' },
    { es: 'Zanahoria', pt: 'Cenoura', emoji: '🥕' },
    { es: 'Cebolla', pt: 'Cebola', emoji: '🧅' },
    { es: 'Maíz / Choclo', pt: 'Milho', emoji: '🌽' },
    { es: 'Remolacha', pt: 'Beterraba', emoji: '🍠' },
    { es: 'Palmito', pt: 'Palmito', emoji: '🌴' },
    { es: 'Repollo', pt: 'Repolho', emoji: '🥬' },
    { es: 'Rúcula', pt: 'Rúcula', emoji: '🥬' },
    { es: 'Escarola', pt: 'Escarola', emoji: '🥬' },
    { es: 'Berro', pt: 'Agrião', emoji: '🌱' },
    { es: 'Coliflor', pt: 'Couve-flor', emoji: '🥦' },
    { es: 'Brócoli', pt: 'Brócolis', emoji: '🥦' },
    { es: 'Alcachofa', pt: 'Alcachofra', emoji: '🌿' },
    { es: 'Calabaza / Zapallo', pt: 'Abóbora', emoji: '🎃' },
    { es: 'Zucchini / Zapallito italiano', pt: 'Abobrinha', emoji: '🥒' },
    { es: 'Berenjena', pt: 'Berinjela', emoji: '🍆' },
    { es: 'Pimiento / Morrón', pt: 'Pimentão', emoji: '🫑' },
    { es: 'Papa', pt: 'Batata', emoji: '🥔' },
    { es: 'Batata dulce / Camote', pt: 'Batata-doce', emoji: '🍠' },
    { es: 'Ñame', pt: 'Inhame', emoji: '🥔' },
    { es: 'Lenteja', pt: 'Lentilha', emoji: '🍲' },
    { es: 'Arvejas / Guisantes', pt: 'Ervilha', emoji: '🟢' },
    { es: 'Garbanzo', pt: 'Grão-de-bico', emoji: '🧆' },
    { es: 'Puerro', pt: 'Alho-poró', emoji: '🥗' },
    { es: 'Espinaca', pt: 'Espinafre', emoji: '🥬' },
    { es: 'Chicoria', pt: 'Chicória', emoji: '🥬' },
    { es: 'Nabo', pt: 'Nabo', emoji: '🥕' },
    { es: 'Rabanito', pt: 'Rabanete', emoji: '🍒' },
    { es: 'Acelga', pt: 'Acelga', emoji: '🥬' },
    { es: 'Perejil', pt: 'Salsinha', emoji: '🌿' },
    { es: 'Arroz con porotos / frijoles', pt: 'Arroz com feijão', emoji: '🍛' },
    { es: 'Papas fritas', pt: 'Batata frita', emoji: '🍟' },
    { es: 'Carne', pt: 'Carne', emoji: '🥩' },
    { es: 'Carne asada', pt: 'Assada', emoji: '🍖' },
    { es: 'Asado / Barbacoa', pt: 'Churrasco', emoji: '🍖' },
    { es: 'Filete de lomo / carne tierna', pt: 'Filé', emoji: '🥩' },
    { es: 'Bife / Filete', pt: 'Bife', emoji: '🥩' },
    { es: 'Cerdo', pt: 'Porco', emoji: '🐷' },
    { es: 'Peixe (Pescado)', pt: 'Peixe', emoji: '🐟' },
    { es: 'Pescado frito', pt: 'Peixe frito', emoji: '🐟' },
    { es: 'Pescado a la milanesa', pt: 'Peixe à milanesa', emoji: '🐟' },
    { es: 'Pescado guisado / ensopado', pt: 'Peixe ensopado', emoji: '🍲' },
    { es: 'Frango (Pollo)', pt: 'Frango', emoji: '🍗' },
    { es: 'Pollo a la plancha / grillé', pt: 'Frango grelhado', emoji: '🍗' },
    { es: 'Pollo al horno', pt: 'Frango ao forno', emoji: '🍗' },
    { es: 'Pollo guisado / ensopado', pt: 'Frango ensopado', emoji: '🍲' },
    { es: 'Pollo empanado', pt: 'Frango empanado', emoji: '🍗' },
    { es: 'Pollo a la milanesa', pt: 'Frango à milanesa', emoji: '🍗' },
    { es: 'Pollo cocinado / hervido', pt: 'Frango cozido', emoji: '🍲' },
    { es: 'Fideos / Pasta', pt: 'Macarrão', emoji: '🍝' },
    { es: 'Ñoquis', pt: 'Nhoque', emoji: '🍝' },
    { es: 'Ravioles', pt: 'Ravioli', emoji: '🥟' },
    { es: 'Lasaña', pt: 'Lasanha', emoji: '🧀' },
    { es: 'Pizza', pt: 'Pizza', emoji: '🍕' },
    { es: 'Panqueque', pt: 'Panqueca', emoji: '🥞' },
    { es: 'Fritada / Tortilla', pt: 'Fritada', emoji: '🍳' },
    { es: 'Helados', pt: 'Sorvetes', emoji: '🍦' },
    { es: 'Tortas / Pasteles', pt: 'Bolos', emoji: '🍰' },
    { es: 'Dulces / Bombones', pt: 'Docinhos', emoji: '🍬' }
  ],
  foto5_cafe_lanche: [
    { es: 'Café', pt: 'Café', emoji: '☕' },
    { es: 'Café con leche', pt: 'Café com leite', emoji: '🥛' },
    { es: 'Té', pt: 'Chá', emoji: '🫖' },
    { es: 'Té con leche', pt: 'Chá com leite', emoji: '🥛' },
    { es: 'Mate (bebida típica del sur)', pt: 'Chimarrão', emoji: '🧉' },
    { es: 'Yogur', pt: 'Iogurte', emoji: '🥛' },
    { es: 'Licuado (ej. licuado de frutas)', pt: 'Vitamina', emoji: '🥤' },
    { es: 'Jugo', pt: 'Suco', emoji: '🥤' },
    { es: 'Chocolatada', pt: 'Achocolatado', emoji: '🥛' },
    { es: 'Tostadas', pt: 'Torradas', emoji: '🍞' },
    { es: 'Pan', pt: 'Pão', emoji: '🍞' },
    { es: 'Manteca / Mantequilla', pt: 'Manteiga', emoji: '🧈' },
    { es: 'Mermelada / Jalea', pt: 'Geleia', emoji: '🫙' },
    { es: 'Sándwich de queso y jamón', pt: 'Sanduíche de queijo e presunto', emoji: '🥪' },
    { es: 'Bizcochuelo / Budín / Torta', pt: 'Bolo', emoji: '🍰' },
    { es: 'Galletitas dulces y saladas', pt: 'Biscoito e bolachas', emoji: '🍪' },
    { es: 'Medialuna / Cruasán', pt: 'Croassã', emoji: '🥐' },
    { es: 'Factura / Pan dulce', pt: 'Pão doce', emoji: '🥐' },
    { es: 'Huevos con panceta / bacon', pt: 'Ovos e bacon', emoji: '🍳' },
    { es: 'Cereales', pt: 'Sucrilhos', emoji: '🥣' },
    { es: 'Sandía', pt: 'Melancia', emoji: '🍉' },
    { es: 'Melón', pt: 'Melão', emoji: '🍈' },
    { es: 'Naranja', pt: 'Laranja', emoji: '🍊' },
    { es: 'Plátano / Banana', pt: 'Banana', emoji: '🍌' },
    { es: 'Mango', pt: 'Manga', emoji: '🥭' },
    { es: 'Papaya', pt: 'Mamão', emoji: '🥭' },
    { es: 'Uva', pt: 'Uva', emoji: '🍇' },
    { es: 'Manzana', pt: 'Maçã', emoji: '🍎' },
    { es: 'Frutilla / Fresa', pt: 'Morango', emoji: '🍓' },
    { es: 'Ananá / Piña', pt: 'Abacaxi', emoji: '💖' },
    { es: 'Palta / Aguacate', pt: 'Abacate', emoji: '🥑' },
    { es: 'Ciruela', pt: 'Ameixa', emoji: '🍒' },
    { es: 'Acaí', pt: 'Açaí', emoji: '🍧' },
    { es: 'Mora', pt: 'Amora', emoji: '🪻' },
    { es: 'Cajá (fruta tropical)', pt: 'Cajá', emoji: '🟡' },
    { es: 'Caju (marañón)', pt: 'Caju', emoji: '🍎' },
    { es: 'Carambola (fruta estrella)', pt: 'Carambola', emoji: '⭐' },
    { es: 'Cereza', pt: 'Cereja', emoji: '🍒' },
    { es: 'Higo', pt: 'Figo', emoji: '🪔' },
    { es: 'Guayaba', pt: 'Goiaba', emoji: '🔴' },
    { es: 'Guanábana', pt: 'Graviola', emoji: '🟢' },
    { es: 'Grosella', pt: 'Groselha', emoji: '🔴' },
    { es: 'Jabuticaba', pt: 'Jabuticaba', emoji: '🟣' },
    { es: 'Yaca', pt: 'Jaca', emoji: '🟢' },
    { es: 'Kiwi', pt: 'Kiwi', emoji: '🥝' },
    { es: 'Membrillo', pt: 'Marmelo', emoji: '🍐' },
    { es: 'Mandarina', pt: 'Mexerica', emoji: '🍊' },
    { es: 'Frambuesa', pt: 'Framboesa', emoji: '🍓' },
    { es: 'Arándano', pt: 'Mirtilo', emoji: '🫐' },
    { es: 'Acerola', pt: 'Acerola', emoji: '🍒' },
    { es: 'Maracuyá', pt: 'Maracujá', emoji: '🟡' },
    { es: 'Pera', pt: 'Pêra', emoji: '🍐' },
    { es: 'Pitanga', pt: 'Pitanga', emoji: '🔴' },
    { es: 'Pomelo', pt: 'Pomelo', emoji: '🍊' }
  ],
  conjuncoes_m3: [
    { es: 'Para que', pt: 'Para que', emoji: '🎯' },
    { es: 'Aunque / Con tal de que', pt: 'Embora', emoji: '🤷' },
    { es: 'Siempre que / Desde que', pt: 'Desde que', emoji: '⏳' },
    { es: 'En caso de que', pt: 'Caso que', emoji: '💡' },
    { es: 'Incluso si / Aunque', pt: 'Mesmo que', emoji: '💪' }
  ]
};

export const futuroM3Verbs: Record<string, string[]> = {
  'Estudar': ['estudarei', 'estudará', 'estudaremos', 'estudarão'],
  'Entender': ['entenderei', 'entenderá', 'entenderemos', 'entenderão'],
  'Dividir': ['dividirei', 'dividirá', 'dividiremos', 'dividirão'],
  'Dizer': ['direi', 'dirá', 'diremos', 'dirão'],
  'Fazer': ['farei', 'fará', 'faremos', 'farão'],
  'Trazer': ['trarei', 'trará', 'traremos', 'trarão']
};

export const PERSONS = ['Eu', 'Você / Ele / Ela', 'Nós', 'Vocês / Eles / Elas'];

export const verbTenses: VerbTense[] = [
  { id: 'presente', emoji: '☀️', name: 'Presente', desc: 'Presente do Indicativo' },
  { id: 'perf_simples', emoji: '⏪', name: 'Pretérito Perfeito', desc: 'Ação concluída no passado' },
  { id: 'imperf', emoji: '🌊', name: 'Pretérito Imperfeito', desc: 'Ação contínua no pasado' },
  { id: 'futuro', emoji: '🔮', name: 'Futuro do Presente', desc: 'Ação futura ou hipotética' },
  { id: 'subj_presente', emoji: '🤔', name: 'Subjuntivo Presente', desc: 'Presente do Subjuntivo' },
  { id: 'imperativo', emoji: '📢', name: 'Imperativo', desc: 'Ordens e pedidos' }
];

export const verbConjugations: Record<string, Record<string, string[]>> = {
  'Amar': {
    presente: ['amo', 'ama', 'amamos', 'amam'],
    perf_simples: ['amei', 'amou', 'amamos', 'amaram'],
    imperf: ['amava', 'amava', 'amávamos', 'amavam'],
    futuro: ['amarei', 'amará', 'amaremos', 'amarão'],
    subj_presente: ['ame', 'ame', 'amemos', 'amem'],
    imperativo: ['—', 'ama', 'amemos', 'amem']
  },
  'Beber': {
    presente: ['bebo', 'bebe', 'bebemos', 'bebem'],
    perf_simples: ['bebi', 'bebeu', 'bebemos', 'beberam'],
    imperf: ['bebia', 'bebia', 'bebíamos', 'bebiam'],
    futuro: ['beberei', 'beberá', 'beberemos', 'beberão'],
    subj_presente: ['beba', 'beba', 'bebamos', 'bebam'],
    imperativo: ['—', 'bebe', 'bebamos', 'bebam']
  },
  'Comer': {
    presente: ['como', 'come', 'comemos', 'comem'],
    perf_simples: ['comi', 'comeu', 'comemos', 'comeram'],
    imperf: ['comia', 'comia', 'comíamos', 'comiam'],
    futuro: ['comerei', 'comerá', 'comeremos', 'comerão'],
    subj_presente: ['coma', 'coma', 'comamos', 'comam'],
    imperativo: ['—', 'come', 'comamos', 'comam']
  },
  'Dar': {
    presente: ['dou', 'dá', 'damos', 'dão'],
    perf_simples: ['dei', 'deu', 'demos', 'deram'],
    imperf: ['dava', 'dava', 'dávamos', 'davam'],
    futuro: ['darei', 'dará', 'daremos', 'darão'],
    subj_presente: ['dê', 'dê', 'demos', 'deem'],
    imperativo: ['—', 'dá', 'demos', 'deem']
  },
  'Dizer': {
    presente: ['digo', 'diz', 'dizemos', 'dizem'],
    perf_simples: ['disse', 'disse', 'dissemos', 'disseram'],
    imperf: ['dizia', 'dizia', 'dizíamos', 'diziam'],
    futuro: ['direi', 'dirá', 'diremos', 'dirão'],
    subj_presente: ['diga', 'diga', 'digamos', 'digam'],
    imperativo: ['—', 'diz', 'digamos', 'digam']
  },
  'Dormir': {
    presente: ['durmo', 'dorme', 'dormimos', 'dormem'],
    perf_simples: ['dormi', 'dormiu', 'dormimos', 'dormiram'],
    imperf: ['dormia', 'dormia', 'dormíamos', 'dormiam'],
    futuro: ['dormirei', 'dormirá', 'dormiremos', 'dormirão'],
    subj_presente: ['durma', 'durma', 'durmamos', 'durmam'],
    imperativo: ['—', 'dorme', 'durmamos', 'durmam']
  },
  'Estar': {
    presente: ['estou', 'está', 'estamos', 'estão'],
    perf_simples: ['estive', 'esteve', 'estivemos', 'estiveram'],
    imperf: ['estava', 'estava', 'estávamos', 'estavam'],
    futuro: ['estarei', 'estará', 'estaremos', 'estarão'],
    subj_presente: ['esteja', 'esteja', 'estejamos', 'estejam'],
    imperativo: ['—', 'está', 'estejamos', 'estejam']
  },
  'Falar': {
    presente: ['falo', 'fala', 'falamos', 'falam'],
    perf_simples: ['falei', 'falou', 'falamos', 'falaram'],
    imperf: ['falava', 'falava', 'falávamos', 'falavam'],
    futuro: ['falarei', 'fará', 'falaremos', 'falarão'],
    subj_presente: ['fale', 'fale', 'falemos', 'falem'],
    imperativo: ['—', 'fala', 'falemos', 'falem']
  },
  'Fazer': {
    presente: ['faço', 'faz', 'fazemos', 'fazem'],
    perf_simples: ['fiz', 'fez', 'fizemos', 'fizeram'],
    imperf: ['fazia', 'fazia', 'fazíamos', 'faziam'],
    futuro: ['farei', 'fará', 'faremos', 'farão'],
    subj_presente: ['faça', 'faça', 'façamos', 'façam'],
    imperativo: ['—', 'faz', 'façamos', 'façam']
  },
  'Ir': {
    presente: ['vou', 'vai', 'vamos', 'vão'],
    perf_simples: ['fui', 'foi', 'fomos', 'foram'],
    imperf: ['ia', 'ia', 'íamos', 'iam'],
    futuro: ['irei', 'irá', 'iremos', 'irão'],
    subj_presente: ['vá', 'vá', 'vamos', 'vão'],
    imperativo: ['—', 'vai', 'vamos', 'vão']
  },
  'Poder': {
    presente: ['posso', 'pode', 'podemos', 'podem'],
    perf_simples: ['pude', 'pôde', 'pudemos', 'puderam'],
    imperf: ['podia', 'podia', 'podíamos', 'podiam'],
    futuro: ['poderei', 'poderá', 'poderemos', 'poderão'],
    subj_presente: ['possa', 'possa', 'possamos', 'possam'],
    imperativo: ['—', 'pode', 'possamos', 'possam']
  },
  'Querer': {
    presente: ['quero', 'quer', 'queremos', 'querem'],
    perf_simples: ['quis', 'quis', 'quisemos', 'quiseram'],
    imperf: ['queria', 'queria', 'queríamos', 'queriam'],
    futuro: ['quererei', 'quererá', 'quereremos', 'quererão'],
    subj_presente: ['queira', 'queira', 'queiramos', 'queiram'],
    imperativo: ['—', 'quer', 'queiramos', 'queiram']
  },
  'Saber': {
    presente: ['sei', 'sabe', 'sabemos', 'sabem'],
    perf_simples: ['soube', 'soube', 'soubemos', 'souberam'],
    imperf: ['sabia', 'sabia', 'sabíamos', 'sabiam'],
    futuro: ['saberei', 'saberá', 'saberemos', 'saberão'],
    subj_presente: ['saiba', 'saiba', 'saibamos', 'saibam'],
    imperativo: ['—', 'sabe', 'saibamos', 'saibam']
  },
  'Ser': {
    presente: ['sou', 'é', 'somos', 'são'],
    perf_simples: ['fui', 'foi', 'fomos', 'foram'],
    imperf: ['era', 'era', 'éramos', 'eram'],
    futuro: ['serei', 'será', 'seremos', 'serão'],
    subj_presente: ['seja', 'seja', 'sejamos', 'sejam'],
    imperativo: ['—', 'sê', 'sejamos', 'sejam']
  },
  'Ter': {
    presente: ['tenho', 'tem', 'temos', 'têm'],
    perf_simples: ['tive', 'teve', 'tivemos', 'tiveram'],
    imperf: ['tinha', 'tinha', 'tínhamos', 'tinham'],
    futuro: ['terei', 'terá', 'teremos', 'terão'],
    subj_presente: ['tenha', 'tenha', 'tenhamos', 'tenham'],
    imperativo: ['—', 'tem', 'tenhamos', 'tenham']
  }
};
