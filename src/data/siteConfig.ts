export type WhatsAppContextKey =
  | 'inicio'
  | 'marca-personal'
  | 'creacion-de-contenido'
  | 'fotografia'
  | 'eventos-sociales'
  | 'proyectos'
  | 'el-estudio'
  | 'contacto';

export interface NavItem {
  label: string;
  href: string;
}

/**
 * CAPA CENTRAL DE CONFIGURACIÓN EDITABLE (CA-EDIT-01 / CA-COMM-03)
 * -----------------------------------------------------------------
 * Todos los datos operativos pendientes de confirmación por el cliente
 * están centralizados aquí con estado explícito `POR_DEFINIR`.
 * Ningún texto crudo "[POR DEFINIR]" ni dato ficticio se expone en la interfaz pública.
 */
export const siteConfig = {
  brand: {
    name: 'Cobalto Carmesí Studios',
    shortName: 'Cobalto Carmesí',
    legalTransitionNote:
      'Cobalto Carmesí Studios es la evolución estratégica y creativa de Sefirot.',
    tagline:
      'Estudio creativo de imagen, contenido y producción audiovisual para marcas, empresas y profesionistas.',
    positioningStatement:
      'Un estudio creativo donde estrategia, estética y narrativa trabajan juntas para construir presencia, reputación y deseo.',
    creativeDirector: {
      name: 'Darío Ilescas Cruz',
      role: 'Director Creativo',
      bioSummary:
        'Lidera la visión estratégica, narrativa y estética de Cobalto Carmesí Studios, integrando dirección creativa, producción audiovisual, fotografía y formación de criterio.',
    },
    locationScope: 'Puebla, México · Cobertura según alcance del proyecto',
  },

  seo: {
    siteUrl: 'https://cobaltocarmesi.com',
    defaultTitle:
      'Cobalto Carmesí Studios | Estudio Creativo de Imagen, Contenido y Producción Audiovisual',
    defaultDescription:
      'Estudio creativo liderado por Darío Ilescas Cruz. Consultoría de marca personal, creación de contenido estratégico, fotografía corporativa y producción audiovisual.',
    locale: 'es_MX',
  },

  /**
   * Integraciones y canales de contacto.
   * Cuando el cliente confirme los datos definitivos, basta con actualizar los valores `value`
   * en este bloque para activar los enlaces directos en todo el sitio sin tocar componentes.
   */
  integrations: {
    googleCalendar: {
      status: 'POR_DEFINIR' as const,
      bookingUrl: '', // Ejemplo al confirmar: 'https://calendar.app.google/...'
      embedUrl: '',   // Ejemplo al confirmar: 'https://calendar.google.com/calendar/appointments/schedules/...'
      fallbackHref: '/contacto#agendar',
      durationLabel: 'Videollamada de diagnóstico · 30 a 45 min · Google Meet',
    },
    whatsapp: {
      status: 'POR_DEFINIR' as const,
      phoneDigits: '', // Ejemplo al confirmar: '522221234567' (sin signo + ni espacios)
      displayLabel: 'Atención directa por WhatsApp',
    },
    phone: {
      status: 'POR_DEFINIR' as const,
      phoneDigits: '', // Ejemplo al confirmar: '+522221234567'
      displayNumber: '', // Ejemplo al confirmar: '+52 (222) ...'
      fallbackHref: '/contacto#llamada-directa',
      fallbackLabel: 'Solicitar llamada telefónica',
    },
    email: {
      status: 'POR_DEFINIR' as const,
      address: '', // Ejemplo al confirmar: 'contacto@cobaltocarmesi.com'
      fallbackLabel: 'Canal directo mediante formulario y agenda',
    },
    social: {
      status: 'POR_DEFINIR' as const,
      instagram: '',
      facebook: '',
      tiktok: '',
      youtube: '',
      linkedin: '',
    },
  },

  navigation: {
    main: [
      { label: 'Marca Personal', href: '/marca-personal' },
      { label: 'Creación de Contenido', href: '/creacion-de-contenido' },
      { label: 'Fotografía', href: '/fotografia' },
      { label: 'Proyectos', href: '/proyectos' },
      { label: 'El Estudio', href: '/el-estudio' },
    ] satisfies NavItem[],
    complementary: [
      { label: 'Eventos Sociales y XV Años', href: '/eventos-sociales' },
      { label: 'Producción Audiovisual y Drones', href: '/creacion-de-contenido#produccion-y-drones' },
      { label: 'Formación y Mentoría', href: '/marca-personal#formacion-y-mentoria' },
      { label: 'Fotografía para Empresas', href: '/fotografia#empresas' },
      { label: 'Sesiones Particulares', href: '/fotografia#sesiones-particulares' },
    ] satisfies NavItem[],
    legal: [
      { label: 'Aviso de Privacidad', href: '/privacidad' },
      { label: 'Contacto y Agenda', href: '/contacto' },
    ] satisfies NavItem[],
  },

  /**
   * Mensajes prellenados por contexto (CA-CONV-04 / Sección 1.4 de site-copy-and-messaging.md)
   */
  whatsappMessages: {
    inicio:
      'Hola, equipo de Cobalto Carmesí Studios. Visitando su sitio web me interesó conocer cómo podemos trabajar juntos en un proyecto. ¿Me pueden orientar sobre el siguiente paso?',
    'marca-personal':
      'Hola, equipo de Cobalto Carmesí Studios. Me interesa recibir información sobre Consultoría y Gestión de Marca Personal y conocer su disponibilidad para diagnóstico.',
    'creacion-de-contenido':
      'Hola, equipo de Cobalto Carmesí Studios. Busco apoyo estratégico y producción audiovisual para la creación de contenido de mi marca o empresa. ¿Podemos conversar?',
    fotografia:
      'Hola, equipo de Cobalto Carmesí Studios. Me gustaría cotizar un proyecto de fotografía (corporativa / sesión particular) y conocer cómo trabajan.',
    'eventos-sociales':
      'Hola, equipo de Cobalto Carmesí Studios. Me interesa consultar disponibilidad de fecha para la cobertura fotográfica y de video de un evento social.',
    proyectos:
      'Hola, equipo de Cobalto Carmesí Studios. Vi su portafolio en la web y me gustaría platicar sobre un proyecto similar para mi marca.',
    'el-estudio':
      'Hola, equipo de Cobalto Carmesí Studios. Conocí la propuesta del estudio liderado por Darío Ilescas Cruz y me gustaría conversar sobre un proyecto.',
    contacto:
      'Hola, equipo de Cobalto Carmesí Studios. Les escribo desde la página de contacto de su sitio web para conversar sobre un proyecto.',
  } satisfies Record<WhatsAppContextKey, string>,
};

/**
 * Devuelve el enlace activo de Google Calendar o el fallback interno hacia la sección de agenda.
 */
export function getCalendarUrl(customFallback = '/contacto#agendar'): string {
  const { bookingUrl } = siteConfig.integrations.googleCalendar;
  return bookingUrl && bookingUrl.trim().length > 0 ? bookingUrl : customFallback;
}

/**
 * Indica si el enlace de Google Calendar apunta a una URL externa confirmada.
 */
export function isExternalCalendarUrl(): boolean {
  const { bookingUrl } = siteConfig.integrations.googleCalendar;
  return Boolean(bookingUrl && bookingUrl.trim().length > 0);
}

/**
 * Construye la URL de WhatsApp con el mensaje prellenado correspondiente a la página actual (CA-CONV-04).
 * Si el teléfono aún está pendiente de confirmación por el cliente, utiliza el endpoint oficial
 * `https://api.whatsapp.com/send?text=...` para preservar el mensaje prellenado sin inventar un número.
 */
export function getWhatsAppUrl(context: WhatsAppContextKey = 'inicio', customMessage?: string): string {
  const message = customMessage ?? siteConfig.whatsappMessages[context] ?? siteConfig.whatsappMessages.inicio;
  const encodedText = encodeURIComponent(message);
  const digits = siteConfig.integrations.whatsapp.phoneDigits.replace(/\D/g, '');

  if (digits.length > 0) {
    return `https://wa.me/${digits}?text=${encodedText}`;
  }

  return `https://api.whatsapp.com/send?text=${encodedText}`;
}

/**
 * Devuelve el href para llamadas telefónicas (tel: si está confirmado, o ancla de solicitud de llamada si está pendiente).
 */
export function getPhoneHref(): string {
  const { phoneDigits, fallbackHref } = siteConfig.integrations.phone;
  return phoneDigits && phoneDigits.trim().length > 0 ? `tel:${phoneDigits.trim()}` : fallbackHref;
}
