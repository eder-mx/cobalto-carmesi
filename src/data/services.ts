export type IconName =
  | 'calendar'
  | 'message-circle'
  | 'phone'
  | 'arrow-up-right'
  | 'arrow-right'
  | 'check'
  | 'plus'
  | 'menu'
  | 'x'
  | 'compass'
  | 'film'
  | 'camera'
  | 'aperture'
  | 'sparkles'
  | 'video'
  | 'award'
  | 'shield-check'
  | 'layers'
  | 'eye'
  | 'sliders'
  | 'users'
  | 'clock'
  | 'map-pin';

export interface ServiceItem {
  id: string;
  code: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  priorityTier: 'prioritario' | 'estrategico' | 'complementario';
  categoryTag: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  idealFor: string[];
  includes: string[];
  scopeNotes?: string;
  href: string;
  ctaLabel: string;
  icon: IconName;
  featuredOnHome: boolean;
}

export const services: ServiceItem[] = [
  {
    id: 'marca-personal',
    code: 'A',
    priorityTier: 'prioritario',
    categoryTag: 'Servicio Prioritario · Consultoría y Dirección',
    title: 'Consultoría y Gestión de Marca Personal',
    shortTitle: 'Marca Personal',
    summary:
      'Construcción de posicionamiento, narrativa, presencia e imagen para profesionistas, líderes y rostros visibles.',
    description:
      'Acompañamiento estratégico y creativo para definir qué proyectas, cómo comunicas tu valor y con qué sistema visual y narrativo sostienes tu reputación pública.',
    idealFor: [
      'Profesionistas independientes, médicos, arquitectos, abogados y consultores.',
      'Directivos, fundadores y líderes de opinión que representan a su firma.',
      'Perfiles que ya tienen trayectoria real pero cuya presencia digital no refleja su nivel actual.',
    ],
    includes: [
      'Diagnóstico de identidad, narrativa y posicionamiento actual',
      'Arquitectura de mensaje, tono de comunicación y pilares temáticos',
      'Dirección de imagen, retrato editorial y universo visual del perfil',
      'Guía de presencia digital y estructura de piezas clave de autoridad',
    ],
    href: '/marca-personal',
    ctaLabel: 'Explorar Marca Personal',
    icon: 'compass',
    featuredOnHome: true,
  },
  {
    id: 'creacion-de-contenido',
    code: 'B',
    priorityTier: 'prioritario',
    categoryTag: 'Servicio Prioritario · Estrategia y Producción',
    title: 'Creación de Contenido Estratégico para Redes Sociales',
    shortTitle: 'Creación de Contenido',
    summary:
      'Conceptualización, guion, producción y edición de contenido alineado con objetivos de marca y comunicación.',
    description:
      'Desarrollamos contenido con intención estratégica, dirección en cámara y factura audiovisual cuidada para marcas y negocios que buscan diferenciarse del contenido genérico.',
    idealFor: [
      'Empresas y marcas comerciales que necesitan contenido con dirección creativa real.',
      'Negocios que quieren elevar el nivel estético y narrativo de sus Reels, TikToks y piezas verticales.',
      'Equipos internos que requieren una estructura clara de guiones, rodaje y postproducción.',
    ],
    includes: [
      'Estrategia de temas, ángulos narrativos y calendario de rodaje',
      'Escritura de guiones y escaletas con enfoque en retención y claridad',
      'Dirección en set, iluminación cinematográfica y captura de audio limpio',
      'Edición rítmica, corrección de color y entrega optimizada por formato',
    ],
    scopeNotes:
      'Nuestro alcance se centra en la estrategia creativa, guionización, dirección y producción audiovisual. No operamos como agencia de community management automatizado ni gestionamos pauta publicitaria.',
    href: '/creacion-de-contenido',
    ctaLabel: 'Explorar Creación de Contenido',
    icon: 'film',
    featuredOnHome: true,
  },
  {
    id: 'fotografia-empresas',
    code: 'C',
    priorityTier: 'estrategico',
    categoryTag: 'Servicio Estratégico · Imagen Corporativa y Comercial',
    title: 'Fotografía para Empresas y Negocios',
    shortTitle: 'Fotografía para Empresas',
    summary:
      'Fotografía corporativa, de producto, espacios, equipo y campaña para elevar la percepción de valor de tu empresa.',
    description:
      'Construimos bancos de imagen propios con iluminación de estudio, dirección de arte y narrativa visual para sitios web, catálogos, prensa y comunicación comercial.',
    idealFor: [
      'Empresas que necesitan renovar su sitio web, presentación comercial o catálogo con fotografía propia.',
      'Clínicas, despachos, restaurantes, hoteles y marcas de producto.',
      'Equipos directivos y operativos que requieren retrato corporativo coherente.',
    ],
    includes: [
      'Retrato corporativo y editorial de directivos y equipos de trabajo',
      'Fotografía de producto, gastronomía y detalle comercial con iluminación controlada',
      'Registro arquitectónico de instalaciones, consultorios, oficinas y espacios',
      'Selección curada, retoque de alta precisión y entrega para web e impreso',
    ],
    href: '/fotografia#empresas',
    ctaLabel: 'Ver Fotografía para Empresas',
    icon: 'camera',
    featuredOnHome: true,
  },
  {
    id: 'fotografia-particulares',
    code: 'D',
    priorityTier: 'estrategico',
    categoryTag: 'Servicio Estratégico · Retrato y Autor',
    title: 'Sesiones Fotográficas para Particulares',
    shortTitle: 'Sesiones Particulares',
    summary:
      'Retrato personal, editorial, artístico, familiar o de pareja con dirección cercana y estética de estudio.',
    description:
      'Sesiones diseñadas para personas que buscan retratos con carácter, dirección de pose paso a paso y un tratamiento de luz inspirado en el retrato editorial.',
    idealFor: [
      'Personas que desean un retrato personal o editorial con dirección profesional.',
      'Parejas y familias que buscan conservar una sesión sobria y atemporal.',
      'Perfiles creativos, artistas o graduados que requieren fotografías con sello de autor.',
    ],
    includes: [
      'Definición previa de concepto, estilo, vestuario y atmósfera de luz',
      'Dirección personalizada durante toda la sesión (en estudio o locación)',
      'Iluminación con carácter de claroscuro o luz natural controlada',
      'Galería de selección y entrega de fotografías editadas en alta resolución',
    ],
    href: '/fotografia#sesiones-particulares',
    ctaLabel: 'Ver Sesiones Particulares',
    icon: 'aperture',
    featuredOnHome: true,
  },
  {
    id: 'eventos-sociales',
    code: 'E',
    priorityTier: 'complementario',
    categoryTag: 'Línea Especializada · Cobertura Documental y Editorial',
    title: 'Fotografía y Video para Eventos Sociales y XV Años',
    shortTitle: 'Eventos Sociales y XV Años',
    summary:
      'Cobertura fotográfica y audiovisual con mirada documental, estética cinematográfica y sesiones previas o posteriores.',
    description:
      'Documentamos celebraciones familiares, bodas y XV años evitando los clichés artificiales, priorizando la emoción genuina, la composición cuidada y el recuerdo perdurable.',
    idealFor: [
      'Familias y festejadas de XV años que buscan una narrativa actual y elegante.',
      'Parejas y anfitriones de eventos sociales que valoran la discreción y el criterio visual.',
      'Celebraciones que requieren tanto sesión formal de estudio/locación como crónica del evento.',
    ],
    includes: [
      'Reunión previa para alinear momentos clave, tiempos y estilo visual',
      'Sesión fotográfica o audiovisual previa (Save the Date / Trash the Dress / Estudio)',
      'Cobertura continua durante ceremonia y recepción con equipo profesional',
      'Película documental del evento, piezas cortas (highlights) y galería fotográfica',
    ],
    href: '/eventos-sociales',
    ctaLabel: 'Explorar Eventos Sociales',
    icon: 'sparkles',
    featuredOnHome: false,
  },
  {
    id: 'produccion-y-drones',
    code: 'F',
    priorityTier: 'complementario',
    categoryTag: 'Especialidad Técnica · Producción y Aérea',
    title: 'Producción Audiovisual y Tomas con Drones',
    shortTitle: 'Producción Audiovisual y Drones',
    summary:
      'Piezas institucionales, comerciales y cinematografía aérea con dron para dimensionar proyectos, espacios y marcas.',
    description:
      'Integramos rodaje en tierra y tomas aéreas estabilizadas para desarrollos inmobiliarios, industria, turismo, arquitectura, eventos corporativos y campañas comerciales.',
    idealFor: [
      'Desarrollos arquitectónicos, inmobiliarios, industriales y turísticos.',
      'Empresas que requieren un video institucional o comercial con alto valor de producción.',
      'Proyectos que necesitan integrar perspectiva aérea con narrativa en tierra.',
    ],
    includes: [
      'Planeación técnica de rodaje, scouting y evaluación de condiciones de vuelo',
      'Captura aérea en alta definición y cinematografía en tierra',
      'Diseño sonoro, montaje narrativo y etalonaje (corrección de color)',
      'Versiones maestras para web, presentaciones comerciales y formatos verticales',
    ],
    href: '/creacion-de-contenido#produccion-y-drones',
    ctaLabel: 'Ver Producción y Drones',
    icon: 'video',
    featuredOnHome: true,
  },
  {
    id: 'formacion-y-mentoria',
    code: 'G',
    priorityTier: 'complementario',
    categoryTag: 'Transferencia de Criterio · Capacitación',
    title: 'Formación, Mentoría y Capacitación Creativa',
    shortTitle: 'Formación y Mentoría',
    summary:
      'Entrenamiento práctico en comunicación frente a cámara, criterio visual y producción de contenido para personas y equipos.',
    description:
      'Compartimos la metodología del estudio a través de sesiones de mentoría individual o talleres para equipos internos que necesitan comunicar y producir con mayor autonomía.',
    idealFor: [
      'Profesionistas que quieren ganar seguridad, dicción y estructura al hablar frente a cámara.',
      'Equipos internos de marketing o comunicación que buscan elevar su estándar técnico.',
      'Creadores que desean estructurar su flujo de trabajo desde la idea hasta la edición.',
    ],
    includes: [
      'Diagnóstico de habilidades actuales o capacidades del equipo interno',
      'Entrenamiento en expresión frente a cámara, estructura de discurso y presencia',
      'Fundamentos prácticos de iluminación, encuadre, audio y flujo de producción',
      'Retroalimentación directa sobre piezas reales liderada por Dirección Creativa',
    ],
    href: '/marca-personal#formacion-y-mentoria',
    ctaLabel: 'Conocer Formación y Mentoría',
    icon: 'award',
    featuredOnHome: true,
  },
];

export const homeFeaturedServices = services.filter((service) => service.featuredOnHome);
export const priorityServices = services.filter((service) => service.priorityTier === 'prioritario');
export const complementaryServices = services.filter((service) => service.priorityTier !== 'prioritario');
