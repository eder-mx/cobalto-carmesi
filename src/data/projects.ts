export type ProjectCategory =
  | 'Marca Personal'
  | 'Creación de Contenido'
  | 'Fotografía Comercial'
  | 'Dirección Creativa';

export interface ProjectCase {
  id: string;
  slug: string;
  title: string;
  clientLabel: string;
  category: ProjectCategory;
  secondaryTags: string[];
  aspectRatio: '4/5' | '16/9';
  /**
   * Los 5 puntos obligatorios de la estructura narrativa de casos (CA-PORT-01):
   * 1. Contexto
   * 2. Necesidad
   * 3. Alcance real ejecutado
   * 4. Aportación del estudio
   * 5. Muestra visual / Desenlace cualitativo
   */
  narrative: {
    contexto: string;
    necesidad: string;
    alcanceEjecutado: string;
    aportacionEstudio: string;
    muestraVisual: string;
  };
  visualPoster: {
    alt: string;
    caption: string;
    paletteMood: 'cobalt' | 'crimson' | 'chiaroscuro';
    mediaStatus: 'CURADURIA_EN_PROCESO';
  };
  featuredOnHome: boolean;
}

/**
 * CASOS REALES DEL ESTUDIO (CA-PORT-01 / CA-PORT-02)
 * -----------------------------------------------------------------
 * Estructura estrictamente los proyectos autorizados en el Documento Maestro
 * sin inventar métricas porcentuales, premios ni testimonios no verificados.
 */
export const projects: ProjectCase[] = [
  {
    id: 'PORT-01',
    slug: 'angie-mesta',
    title: 'Angie Mesta · Posicionamiento y Narrativa Visual',
    clientLabel: 'Angie Mesta',
    category: 'Marca Personal',
    secondaryTags: ['Dirección de Imagen', 'Estrategia de Contenido', 'Retrato Editorial'],
    aspectRatio: '4/5',
    narrative: {
      contexto:
        'Perfil profesional con trayectoria consolidada que requería alinear su proyección digital con su nivel real de experiencia y cercanía humana.',
      necesidad:
        'Ordenar su discurso público, definir una estética reconocible y producir piezas audiovisuales y fotográficas que transmitieran autoridad sin perder calidez.',
      alcanceEjecutado:
        'Consultoría de identidad verbal y visual, dirección de sesión fotográfica editorial y producción de cápsulas estratégicas para redes sociales.',
      aportacionEstudio:
        'Construcción de un sistema visual sobrio y coherente, dirección escénica frente a cámara y estructura narrativa enfocada en generar confianza profesional.',
      muestraVisual:
        'Serie de retrato editorial con iluminación controlada y piezas verticales de autoridad (material visual en proceso de curaduría final para publicación web).',
    },
    visualPoster: {
      alt: 'Composición editorial en claroscuro para el caso de marca personal de Angie Mesta por Cobalto Carmesí Studios',
      caption: 'Retrato editorial y dirección de contenido · Curaduría visual del estudio',
      paletteMood: 'cobalt',
      mediaStatus: 'CURADURIA_EN_PROCESO',
    },
    featuredOnHome: true,
  },
  {
    id: 'PORT-02',
    slug: 'h-centro-hidrofacial',
    title: 'H Centro Hidrofacial · Imagen Comercial y Contenido',
    clientLabel: 'H Centro Hidrofacial',
    category: 'Creación de Contenido',
    secondaryTags: ['Fotografía para Empresas', 'Producción Audiovisual', 'Estética Clínica'],
    aspectRatio: '16/9',
    narrative: {
      contexto:
        'Centro especializado en cuidado facial y bienestar que necesitaba reflejar higiene, tecnología y sofisticación en sus canales digitales.',
      necesidad:
        'Superar la comunicación genérica del sector belleza mediante fotografía y video propios que mostraran la experiencia real del servicio, el espacio y el equipo.',
      alcanceEjecutado:
        'Dirección de fotografía de instalaciones y procedimientos, creación de contenido audiovisual para redes sociales y estandarización del lenguaje visual de la marca.',
      aportacionEstudio:
        'Traducción de un servicio clínico y sensorial a una narrativa visual limpia, luminosa y confiable que respalda el valor percibido de cada tratamiento.',
      muestraVisual:
        'Registro audiovisual de experiencia en cabina, detalle técnico y retrato corporativo del equipo (selección de fotogramas en curaduría final).',
    },
    visualPoster: {
      alt: 'Dirección de arte y producción audiovisual comercial para H Centro Hidrofacial por Cobalto Carmesí Studios',
      caption: 'Producción audiovisual comercial y fotografía de espacios · Archivo del estudio',
      paletteMood: 'chiaroscuro',
      mediaStatus: 'CURADURIA_EN_PROCESO',
    },
    featuredOnHome: true,
  },
  {
    id: 'PORT-03',
    slug: 'durambene',
    title: 'Durambene · Dirección Visual e Identidad de Producto',
    clientLabel: 'Durambene',
    category: 'Fotografía Comercial',
    secondaryTags: ['Dirección de Arte', 'Contenido de Marca', 'Fotografía de Producto'],
    aspectRatio: '4/5',
    narrative: {
      contexto:
        'Marca comercial enfocada en proyectar solidez, carácter y diferenciación dentro de su categoría frente a competidores con comunicación estandarizada.',
      necesidad:
        'Construir un banco de imagen y piezas de comunicación que destacaran los atributos tangibles del producto con una atmósfera visual propia.',
      alcanceEjecutado:
        'Conceptualización visual, fotografía comercial con iluminación de estudio y desarrollo de piezas gráficas y audiovisuales para ecosistemas digitales.',
      aportacionEstudio:
        'Aplicación de contraste dramático, cuidado en texturas y dirección de arte para elevar la presencia comercial de la marca.',
      muestraVisual:
        'Serie de fotografía comercial de producto y piezas de campaña digital (activos visuales en revisión de archivo para despliegue).',
    },
    visualPoster: {
      alt: 'Fotografía comercial y dirección de arte para Durambene ejecutada por Cobalto Carmesí Studios',
      caption: 'Fotografía comercial con iluminación de estudio · Cobalto Carmesí Studios',
      paletteMood: 'crimson',
      mediaStatus: 'CURADURIA_EN_PROCESO',
    },
    featuredOnHome: true,
  },
  {
    id: 'PORT-04',
    slug: 'direccion-creativa-evolucion-estudio',
    title: 'Archivo Editorial · Evolución Sefirot a Cobalto Carmesí Studios',
    clientLabel: 'Cobalto Carmesí Studios',
    category: 'Dirección Creativa',
    secondaryTags: ['Rebranding', 'Dirección Cinematográfica', 'Criterio Visual'],
    aspectRatio: '16/9',
    narrative: {
      contexto:
        'Consolidación de años de experiencia en producción audiovisual, fotografía y estrategia bajo una nueva identidad con mayor madurez conceptual.',
      necesidad:
        'Articular en una sola firma la profundidad estratégica (azul cobalto) y la fuerza expresiva (carmesí) bajo un estándar arquitectónico e inspirado en el claroscuro.',
      alcanceEjecutado:
        'Definición de manifiesto editorial, arquitectura de servicios prioritarios y sistema visual de alta precisión dirigido por Darío Ilescas Cruz.',
      aportacionEstudio:
        'Metodología propia donde cada proyecto —desde marca personal hasta cine aéreo y cobertura documental— responde a objetivos de posicionamiento reales.',
      muestraVisual:
        'Sistema de identidad visual, dirección de luz en claroscuro y curaduría transversal del estudio.',
    },
    visualPoster: {
      alt: 'Manifiesto visual en azul cobalto y carmesí sobre fondo de claroscuro de Cobalto Carmesí Studios',
      caption: 'Dirección Creativa · Darío Ilescas Cruz · Cobalto Carmesí Studios',
      paletteMood: 'cobalt',
      mediaStatus: 'CURADURIA_EN_PROCESO',
    },
    featuredOnHome: false,
  },
];

export const projectCategories: ('Todos' | ProjectCategory)[] = [
  'Todos',
  'Marca Personal',
  'Creación de Contenido',
  'Fotografía Comercial',
  'Dirección Creativa',
];

export const homeFeaturedProjects = projects.filter((project) => project.featuredOnHome);
