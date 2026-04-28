export interface Activity {
  id: string;
  title: string;
  description: string;
  price?: number;
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  mainImage: string;
  galleryImages: string[];
  maxVisitors: number;
  duration: string;
  pricePerPerson: number;
  rating: number;
  reviews: number;
  tourOperator: {
    name: string;
    experience: string;
    avatar: string;
  };
  activities: Activity[];
  description: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  popularityBadge?: string;
}

export const destinations: Destination[] = [
  {
    id: 'glaciar-chuecon',
    name: 'Cataratas de Pillones y Bosque de Piedras de Imata',
    location: 'Arequipa, Perú',
    mainImage: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f',
    galleryImages: [
      'https://images.unsplash.com/photo-1589553416260-f586c8f1514f',
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
      'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7',
    ],
    maxVisitors: 8,
    duration: '1 día de duración',
    pricePerPerson: 159,
    rating: 4.93,
    reviews: 45,
    tourOperator: {
      name: 'Aventuras Andinas',
      experience: '5 años de experiencia operando tours',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    activities: [
      {
        id: 'A1',
        title: 'Degustación y preparación de quesos locales',
        description: 'Visitar una quesería cercana para aprender el proceso de elaboración de quesos típicos de la región, como el queso fresco de Imata.',
      },
      {
        id: 'A2',
        title: 'Pesca en los riachuelos cercanos',
        description: 'Realizar pesca recreativa de trucha en los ríos de la zona, aprendiendo técnicas tradicionales de los lugareños.',
      },
      {
        id: 'A3',
        title: 'Noche de cuentos y leyendas',
        description: 'Escuchar leyendas de los Andes narradas por lugareños al calor de una fogata, mientras se disfruta de una infusión caliente de hierbas locales.',
      },
    ],
    description: 'Relájate y explora dos de los destinos más impresionantes de Arequipa. La excursión incluye transporte desde Arequipa, guías especializados, tiempo libre para explorar y disfrutar de un picnic junto a las cataratas. El Bosque de Piedras ofrece un paisaje surrealista con formaciones geológicas únicas, mientras que las Cataratas de Pillones son perfectas para los amantes de la fotografía y la naturaleza.',
    features: [
      {
        title: 'Naturaleza en su máxima expresión',
        description: 'Descubre paisajes impresionantes en las alturas de Arequipa con vistas panorámicas y formaciones rocosas únicas.',
        icon: 'mountain',
      },
      {
        title: 'Guías expertos y transporte seguro',
        description: 'Nuestro equipo profesional te acompañará para asegurarte una experiencia educativa y segura.',
        icon: 'user-check',
      },
      {
        title: 'Paz y Aventura',
        description: 'Explora la serenidad del Bosque de Piedras de Imata y la emoción de las Cataratas de Pillones.',
        icon: 'compass',
      },
    ],
    popularityBadge: 'Favorito entre turistas',
  },
  {
    id: 'dunas-joya',
    name: 'Dunas de la Joya',
    location: 'Arequipa, Perú',
    mainImage: 'https://images.unsplash.com/photo-1682686580391-615b1e32be5c',
    galleryImages: [
      'https://images.unsplash.com/photo-1682686580391-615b1e32be5c',
      'https://images.unsplash.com/photo-1682686580186-b55d0f3339b7',
      'https://images.unsplash.com/photo-1682686580950-960d1d513532',
      'https://images.unsplash.com/photo-1682686580824-d4b4f0c1b05c',
    ],
    maxVisitors: 6,
    duration: '1 día de duración',
    pricePerPerson: 189,
    rating: 4.87,
    reviews: 32,
    tourOperator: {
      name: 'Desert Adventures',
      experience: '8 años de experiencia en turismo de aventura',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    activities: [
      {
        id: 'A1',
        title: 'Sandboarding en las dunas',
        description: 'Experimenta la emoción del sandboarding en las majestuosas dunas del desierto de La Joya.',
      },
      {
        id: 'A2',
        title: 'Safari fotográfico al atardecer',
        description: 'Captura momentos únicos durante un safari fotográfico al atardecer, con las mejores vistas del desierto.',
      },
      {
        id: 'A3',
        title: 'Cena bajo las estrellas',
        description: 'Disfruta de una cena tradicional mientras observas el cielo estrellado del desierto.',
      },
    ],
    description: 'Vive una aventura única en las impresionantes Dunas de la Joya, donde el desierto se encuentra con el cielo. Experimenta la emoción del sandboarding, disfruta de vistas panorámicas y termina el día con una inolvidable cena bajo las estrellas.',
    features: [
      {
        title: 'Aventura en el desierto',
        description: 'Experimenta la emoción del sandboarding y los paseos en vehículos todoterreno.',
        icon: 'wind',
      },
      {
        title: 'Fotografía espectacular',
        description: 'Captura momentos únicos durante el atardecer y el amanecer en el desierto.',
        icon: 'camera',
      },
      {
        title: 'Experiencia gastronómica',
        description: 'Degusta platos tradicionales bajo el cielo estrellado del desierto.',
        icon: 'utensils',
      },
    ],
    popularityBadge: 'Aventura destacada',
  },
  {
    id: 'lagunas-mejia',
    name: 'Santuario Nacional Lagunas de Mejía',
    location: 'Arequipa, Perú',
    mainImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    galleryImages: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
      'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b',
    ],
    maxVisitors: 10,
    duration: '1 día de duración',
    pricePerPerson: 145,
    rating: 4.89,
    reviews: 28,
    tourOperator: {
      name: 'EcoTours Perú',
      experience: '10 años especializados en ecoturismo',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    activities: [
      {
        id: 'A1',
        title: 'Observación de aves',
        description: 'Observa más de 200 especies de aves en su hábitat natural con guías especializados.',
      },
      {
        id: 'A2',
        title: 'Recorrido fotográfico',
        description: 'Captura la belleza natural de las lagunas y su diversa vida silvestre.',
      },
      {
        id: 'A3',
        title: 'Taller de conservación',
        description: 'Aprende sobre la importancia de la conservación de humedales y su biodiversidad.',
      },
    ],
    description: 'El Santuario Nacional Lagunas de Mejía es un paraíso para los amantes de la naturaleza y la observación de aves. Este humedal costero alberga una increíble diversidad de especies y ofrece paisajes únicos para la fotografía.',
    features: [
      {
        title: 'Biodiversidad única',
        description: 'Observa más de 200 especies de aves y aprende sobre el ecosistema de humedales.',
        icon: 'bird',
      },
      {
        title: 'Conservación activa',
        description: 'Participa en actividades de conservación y aprende sobre la importancia de los humedales.',
        icon: 'leaf',
      },
      {
        title: 'Fotografía natural',
        description: 'Captura momentos únicos en un entorno natural privilegiado.',
        icon: 'camera',
      },
    ],
    popularityBadge: 'Destino ecológico',
  },
  {
    id: 'cueva-lechuzas',
    name: 'Cueva de las Lechuzas',
    location: 'Huánuco, Perú',
    mainImage: 'https://images.unsplash.com/photo-1499892477393-f675706cbe6e',
    galleryImages: [
      'https://images.unsplash.com/photo-1499892477393-f675706cbe6e',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    ],
    maxVisitors: 12,
    duration: '1 día de duración',
    pricePerPerson: 135,
    rating: 4.85,
    reviews: 42,
    tourOperator: {
      name: 'Selva Adventures',
      experience: '7 años explorando la selva peruana',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    activities: [
      {
        id: 'A1',
        title: 'Exploración de la cueva',
        description: 'Adéntrate en la misteriosa Cueva de las Lechuzas con guías expertos.',
      },
      {
        id: 'A2',
        title: 'Observación de aves nocturnas',
        description: 'Observa el comportamiento de las lechuzas y otras aves nocturnas en su hábitat natural.',
      },
      {
        id: 'A3',
        title: 'Senderismo en la selva',
        description: 'Explora los senderos circundantes y descubre la rica biodiversidad de la zona.',
      },
    ],
    description: 'La Cueva de las Lechuzas es una maravilla natural que alberga una importante colonia de guácharos. Esta experiencia única te permite adentrarte en una cueva habitada por aves nocturnas y descubrir los misterios de la selva peruana.',
    features: [
      {
        title: 'Aventura subterránea',
        description: 'Explora una de las cuevas más impresionantes de la selva peruana.',
        icon: 'mountain',
      },
      {
        title: 'Vida nocturna silvestre',
        description: 'Observa aves nocturnas en su hábitat natural.',
        icon: 'moon',
      },
      {
        title: 'Biodiversidad única',
        description: 'Descubre la rica flora y fauna de la selva alta.',
        icon: 'leaf',
      },
    ],
    popularityBadge: 'Experiencia única',
  },
  {
    id: 'lagunas-pichgacocha',
    name: '5 Lagunas de Pichgacocha',
    location: 'Huánuco, Perú',
    mainImage: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d',
    galleryImages: [
      'https://images.unsplash.com/photo-1580136579312-94651dfd596d',
      'https://images.unsplash.com/photo-1580136579202-9c2addcd8c53',
      'https://images.unsplash.com/photo-1580136579396-919f1df087c4',
      'https://images.unsplash.com/photo-1580136579481-c75f2e022c8c',
    ],
    maxVisitors: 8,
    duration: '2 días de duración',
    pricePerPerson: 259,
    rating: 4.92,
    reviews: 35,
    tourOperator: {
      name: 'Mountain Explorers',
      experience: '12 años en trekking de alta montaña',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    activities: [
      {
        id: 'A1',
        title: 'Trekking a las lagunas',
        description: 'Recorre los senderos que conectan las cinco hermosas lagunas de origen glaciar.',
      },
      {
        id: 'A2',
        title: 'Campamento de altura',
        description: 'Experimenta una noche bajo las estrellas en un campamento de altura.',
      },
      {
        id: 'A3',
        title: 'Fotografía paisajística',
        description: 'Captura los impresionantes paisajes de la cordillera Huayhuash.',
      },
    ],
    description: 'Las 5 Lagunas de Pichgacocha ofrecen una de las experiencias de trekking más espectaculares de la cordillera Huayhuash. Durante dos días, explorarás paisajes de ensueño y acamparás bajo un cielo estrellado.',
    features: [
      {
        title: 'Paisajes de altura',
        description: 'Explora cinco lagunas glaciares en un entorno de alta montaña.',
        icon: 'mountain',
      },
      {
        title: 'Aventura completa',
        description: 'Combina trekking, campamento y fotografía en una experiencia única.',
        icon: 'tent',
      },
      {
        title: 'Guías especializados',
        description: 'Acompañamiento de expertos en montañismo y primeros auxilios.',
        icon: 'user-check',
      },
    ],
    popularityBadge: 'Trekking premium',
  },
  {
    id: 'tingo-maria',
    name: 'Parque Nacional de Tingo María',
    location: 'Huánuco, Perú',
    mainImage: 'https://images.unsplash.com/photo-1596395819057-e37d1122dc4c',
    galleryImages: [
      'https://images.unsplash.com/photo-1596395819057-e37d1122dc4c',
      'https://images.unsplash.com/photo-1596395819123-4e421d457d24',
      'https://images.unsplash.com/photo-1596395819188-f5c8f0a6df3b',
      'https://images.unsplash.com/photo-1596395819277-8c1b8d940d3f',
    ],
    maxVisitors: 10,
    duration: '1 día de duración',
    pricePerPerson: 175,
    rating: 4.88,
    reviews: 56,
    tourOperator: {
      name: 'Selva Tours',
      experience: '15 años explorando la selva alta',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    activities: [
      {
        id: 'A1',
        title: 'Visita a la Bella Durmiente',
        description: 'Explora la famosa formación montañosa que da nombre al parque.',
      },
      {
        id: 'A2',
        title: 'Cascadas y pozas naturales',
        description: 'Visita cascadas y refréscate en pozas naturales cristalinas.',
      },
      {
        id: 'A3',
        title: 'Observación de flora y fauna',
        description: 'Descubre la biodiversidad única de la selva alta peruana.',
      },
    ],
    description: 'El Parque Nacional de Tingo María es un tesoro natural que combina selva, montaña y agua. Conocido por la silueta de la Bella Durmiente, ofrece experiencias únicas en contacto con la naturaleza.',
    features: [
      {
        title: 'Biodiversidad excepcional',
        description: 'Explora uno de los parques nacionales más diversos del Perú.',
        icon: 'leaf',
      },
      {
        title: 'Aventura natural',
        description: 'Combina senderismo, natación y observación de vida silvestre.',
        icon: 'compass',
      },
      {
        title: 'Cultura local',
        description: 'Conoce las tradiciones y leyendas de la selva alta.',
        icon: 'book',
      },
    ],
    popularityBadge: 'Destino natural',
  },
  {
    id: 'cerro-sechin',
    name: 'Complejo Arqueológico Cerro Sechín',
    location: 'Ancash, Perú',
    mainImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    galleryImages: [
      'https://images.unsplash.com/photo-1526392060635-9d6019884377',
      'https://images.unsplash.com/photo-1526392060698-44e68ae10403',
      'https://images.unsplash.com/photo-1526392060766-3283a6f36e83',
      'https://images.unsplash.com/photo-1526392060855-8d17cc3c2907',
    ],
    maxVisitors: 15,
    duration: '1 día de duración',
    pricePerPerson: 129,
    rating: 4.86,
    reviews: 48,
    tourOperator: {
      name: 'Historia Viva',
      experience: '20 años en turismo arqueológico',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    activities: [
      {
        id: 'A1',
        title: 'Visita guiada al complejo',
        description: 'Recorre el sitio arqueológico con guías especializados en la cultura Sechín.',
      },
      {
        id: 'A2',
        title: 'Taller de arqueología',
        description: 'Participa en un taller práctico sobre técnicas arqueológicas.',
      },
      {
        id: 'A3',
        title: 'Museo de sitio',
        description: 'Explora el museo que alberga importantes hallazgos del complejo.',
      },
    ],
    description: 'El Complejo Arqueológico Cerro Sechín es uno de los sitios más importantes de la cultura Sechín. Sus famosos monolitos grabados narran la historia de una de las civilizaciones más antiguas del Perú.',
    features: [
      {
        title: 'Historia milenaria',
        description: 'Descubre una de las culturas más antiguas de América.',
        icon: 'book',
      },
      {
        title: 'Arte lítico',
        description: 'Observa los famosos monolitos grabados con escenas rituales.',
        icon: 'chisel',
      },
      {
        title: 'Experiencia educativa',
        description: 'Aprende sobre arqueología y conservación patrimonial.',
        icon: 'graduation-cap',
      },
    ],
    popularityBadge: 'Patrimonio cultural',
  },
  {
    id: 'chavin-huantar',
    name: 'Monumento Arqueológico Chavín de Huántar',
    location: 'Ancash, Perú',
    mainImage: 'https://images.unsplash.com/photo-1531816458010-fb7685eecbcb',
    galleryImages: [
      'https://images.unsplash.com/photo-1531816458010-fb7685eecbcb',
      'https://images.unsplash.com/photo-1531816457140-1f10d64f64f0',
      'https://images.unsplash.com/photo-1531816458179-4347ba0f2504',
      'https://images.unsplash.com/photo-1531816458255-803b859e10c2',
    ],
    maxVisitors: 12,
    duration: '1 día de duración',
    pricePerPerson: 185,
    rating: 4.94,
    reviews: 67,
    tourOperator: {
      name: 'Andes Heritage',
      experience: '18 años en turismo arqueológico',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    activities: [
      {
        id: 'A1',
        title: 'Exploración del templo',
        description: 'Visita el templo principal y sus galerías subterráneas.',
      },
      {
        id: 'A2',
        title: 'Museo Nacional Chavín',
        description: 'Conoce las piezas más importantes de la cultura Chavín.',
      },
      {
        id: 'A3',
        title: 'Ritual andino',
        description: 'Participa en una ceremonia tradicional de pago a la tierra.',
      },
    ],
    description: 'Chavín de Huántar es uno de los sitios arqueológicos más importantes del Perú. Este centro ceremonial pre-inca te transportará a una época de rituales y misterios andinos.',
    features: [
      {
        title: 'Arquitectura monumental',
        description: 'Explora uno de los centros ceremoniales más importantes de América.',
        icon: 'building',
      },
      {
        title: 'Arte lítico',
        description: 'Admira el famoso Lanzón Monolítico y las Cabezas Clavas.',
        icon: 'chisel',
      },
      {
        title: 'Experiencia mística',
        description: 'Conecta con la espiritualidad andina ancestral.',
        icon: 'sun',
      },
    ],
    popularityBadge: 'Patrimonio UNESCO',
  },
  {
    id: 'laguna-69',
    name: 'Laguna 69',
    location: 'Ancash, Perú',
    mainImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306',
    galleryImages: [
      'https://images.unsplash.com/photo-1551632811-561732d1e306',
      'https://images.unsplash.com/photo-1551632810-7e4b1adc2571',
      'https://images.unsplash.com/photo-1551632811-561732d1e306',
      'https://images.unsplash.com/photo-1551632810-7e4b1adc2571',
    ],
    maxVisitors: 10,
    duration: '1 día de duración',
    pricePerPerson: 165,
    rating: 4.91,
    reviews: 89,
    tourOperator: {
      name: 'Huascarán Adventures',
      experience: '15 años en trekking de altura',
      avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    activities: [
      {
        id: 'A1',
        title: 'Trekking a la laguna',
        description: 'Ascenso guiado hasta la espectacular Laguna 69.',
      },
      {
        id: 'A2',
        title: 'Fotografía de paisajes',
        description: 'Captura los impresionantes paisajes de la Cordillera Blanca.',
      },
      {
        id: 'A3',
        title: 'Picnic de altura',
        description: 'Disfruta de un almuerzo con vistas a la laguna turquesa.',
      },
    ],
    description: 'La Laguna 69 es una de las joyas naturales del Parque Nacional Huascarán. Su agua turquesa y el imponente marco de nevados la convierten en uno de los destinos de trekking más espectaculares de los Andes.',
    features: [
      {
        title: 'Belleza natural',
        description: 'Contempla una de las lagunas más hermosas de la Cordillera Blanca.',
        icon: 'mountain',
      },
      {
        title: 'Aventura de altura',
        description: 'Realiza un trekking desafiante con vistas espectaculares.',
        icon: 'hiking',
      },
      {
        title: 'Fotografía escénica',
        description: 'Captura paisajes únicos de los Andes peruanos.',
        icon: 'camera',
      },
    ],
    popularityBadge: 'Trekking favorito',
  },
];