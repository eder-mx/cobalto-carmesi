export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'servicios' | 'proceso' | 'cotizacion';
}

/**
 * PREGUNTAS FRECUENTES CANÓNICAS (Sección 7 del Documento Maestro / site-copy-and-messaging.md)
 * Cero precios públicos, cero paquetes cerrados, enfoque consultivo a medida.
 */
export const faqs: FAQItem[] = [
  {
    id: 'faq-alcance-servicios',
    question: '¿Qué tipo de proyectos realizan en Cobalto Carmesí Studios?',
    answer:
      'Desarrollamos proyectos donde la estrategia y la imagen trabajan juntas: consultoría y gestión de marca personal, creación de contenido estratégico para redes sociales, fotografía para empresas y sesiones particulares, cobertura fotográfica y audiovisual para eventos sociales y XV años, producción audiovisual con drones y formación creativa.',
    category: 'servicios',
  },
  {
    id: 'faq-precios-cotizacion',
    question: '¿Por qué no publican precios fijos ni paquetes cerrados en el sitio web?',
    answer:
      'Cada marca, profesionista o evento tiene objetivos, tiempos y requerimientos de producción distintos. En lugar de ofrecer paquetes rígidos que incluyan elementos que no necesitas o se queden cortos en dirección creativa, realizamos una breve conversación de diagnóstico para enviarte una propuesta a la medida de tu proyecto.',
    category: 'cotizacion',
  },
  {
    id: 'faq-redes-alcance',
    question: '¿Llevan la administración diaria de redes sociales o pauta publicitaria?',
    answer:
      'Nuestro enfoque está en el alto valor estratégico y creativo: conceptualización, narrativa, guionización, dirección en set, fotografía y producción audiovisual para redes sociales. No operamos como agencia de community management masivo (respuesta de mensajes o publicaciones automáticas de relleno) ni administramos presupuesto de pauta publicitaria.',
    category: 'servicios',
  },
  {
    id: 'faq-proceso-inicio',
    question: '¿Cómo es el proceso para iniciar un proyecto con el estudio?',
    answer:
      'El primer paso es agendar una videollamada de diagnóstico o escribirnos por WhatsApp. En esa sesión conocemos tu contexto, definimos qué necesitas comunicar y determinamos el alcance técnico y creativo ideal. A partir de ahí, te presentamos una propuesta clara con entregables, cronograma y etapas de producción.',
    category: 'proceso',
  },
  {
    id: 'faq-preparacion-camara',
    question: '¿Qué pasa si nunca he estado frente a cámara o no sé cómo posar?',
    answer:
      'Es completamente normal y forma parte central de nuestro trabajo. Tanto en sesiones fotográficas como en rodajes de contenido o marca personal, te guiamos paso a paso en postura, intención, ritmo de voz y expresión para que el resultado se sienta auténtico, seguro y profesional.',
    category: 'proceso',
  },
];
