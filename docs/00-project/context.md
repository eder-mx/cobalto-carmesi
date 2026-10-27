# Project Context · Cobalto Carmesí Studios

**Status:** Ready for Review  
**Version:** 1.0  
**Last updated:** 2026-10-23  
**Author / Role:** `discovery-audit-analyst` (V3.2)  
**Approved by:** Darío Ilescas Cruz (Decisiones base aprobadas en encargo inicial; documento sujeto a revisión formal)  
**Canonical sources:** [`inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md), [`PRODUCT.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/PRODUCT.md), [`VALIDATION.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/VALIDATION.md)

---

## 1. Negocio / cliente

- **Marca actual (`FACT` / `DECISION`):** **Cobalto Carmesí Studios** (evolución y rebranding estratégico de *Sefirot*).
- **Director creativo y autoridad de negocio (`FACT`):** **Darío Ilescas Cruz**.
- **Antecedente operativo (`CLIENT-PROVIDED`):** El estudio operaba bajo la marca *Sefirot* (`https://sefirot.com.mx/`), originalmente orientada a grabación con drones, imagen aérea y supervisión de obra.
- **Naturaleza actual del estudio (`DECISION`):** Estudio creativo especializado en **arquitectura de marca personal** y **creación de contenido** para clientes de alto valor, integrando estrategia, narrativa, dirección creativa, fotografía y producción audiovisual.
- **Modelo comercial (`DECISION`):** Propuestas personalizadas a medida tras diagnóstico en conversación comercial. El catálogo describe capacidades; las cantidades, frecuencias, duración, canales y entregables específicos se pactan por proyecto.
- **Dominio público definitivo (`PENDING`):** `[POR DEFINIR]` (actualmente existe `https://sefirot.com.mx/` como referencia de migración).
- **Ubicación y cobertura (`PENDING`):** `[POR DEFINIR]` (confirmar texto comercial público; prohibido publicar domicilio particular).

---

## 2. Problema / oportunidad

- **Desalineación del sitio legado (`CLIENT-PROVIDED` — Auditoría en Documento Maestro, Sección 11):** El sitio anterior (`https://sefirot.com.mx/`) presenta una mezcla desordenada de mensajes de consultoría, marketing, imagen aérea y supervisión de obra; incluye cifras de servicios sin explicación ni contexto, textos genéricos residuales de plantilla en inglés (*«Brand New Features»*, *«Ultimate Solution»*) y un portafolio correspondiente a etapas anteriores.
- **Oportunidad de reposicionamiento (`DECISION`):** Transicionar de la percepción técnica/operativa de grabación con drones (*Sefirot*) hacia una firma de **alto valor estratégico, editorial y cinematográfico** (*Cobalto Carmesí Studios*), donde la arquitectura de marca personal y la creación de contenido lideren la oferta, desplazando drones y eventos sociales a un rol estrictamente complementario.

---

## 3. Objetivo del proyecto

Elevar la percepción pública del estudio, explicar con claridad su trabajo estratégico en arquitectura de marca personal y creación de contenido, demostrar su capacidad creativa y criterio visual con trabajo real, y conducir al visitante hacia una conversación comercial calificada.

- **Resultados estratégicos a los que se orienta el servicio (`CLIENT-PROVIDED`):** Posicionamiento, estatus percibido y conversiones. Se presentan como objetivos estratégicos del trabajo conjunto, **nunca como promesas de ventas garantizadas ni viralidad**.
- **Conversión principal (`DECISION`):** Reserva de una videollamada mediante una página pública de citas de **Google Calendar** (`[POR DEFINIR]` URL pública).
- **Conversiones secundarias (`DECISION`):** Inicio de conversación por **WhatsApp** con mensaje prellenado contextualizado (`[POR DEFINIR]` número confirmado) y **llamada telefónica** directa (`[POR DEFINIR]` teléfono confirmado).

---

## 4. Audiencia

### 4.1 Audiencia Principal (`CLIENT-PROVIDED` / `DECISION`)
Empresarios, directivos, profesionales, especialistas, consultores, artistas y creadores de distintos sectores que buscan invertir en su marca personal. La segmentación se define por **necesidad, ambición y disposición a invertir**, sin restringir el estudio a una sola profesión o industria.

**Necesidades clave que aborda la comunicación (`HYPOTHESIS` — hipótesis de comunicación basadas en el servicio; prohibido atribuirlas como testimonios de clientes):**
1. Que su presencia pública refleje el nivel real de su experiencia.
2. Encontrar una diferenciación clara y un discurso propio.
3. Convertir conocimientos e historias en contenido relevante.
4. Proyectar autoridad y una imagen consistente.
5. Mejorar su comunicación y desenvolvimiento frente a cámara.
6. Generar confianza y abrir conversaciones con potencial comercial.

### 4.2 Audiencias Secundarias (`CLIENT-PROVIDED` / `DECISION`)
| Público | Necesidad | Ruta recomendada en el sitio |
|---|---|---|
| **Empresas** | Contenido, fotografía y producción que acompañen su comunicación corporativa y comercial | `Fotografía` / `Creación de contenido` (Contenido para empresas) |
| **Particulares** | Sesiones fotográficas con concepto visual y dirección artística | `Fotografía` |
| **Organizadores de eventos sociales** | Fotografía y video de celebraciones (incluidos XV años) con enfoque en protagonistas y momentos clave | `Eventos sociales` |
| **Clientes que requieren imagen aérea** | Tomas con drones integradas a una producción audiovisual comercial, institucional o de cobertura | `Producción audiovisual y drones` (vía Servicios en `Inicio`, `Fotografía`/`Contenido` o Footer) |

---

## 5. Alcance actual (Modo Lite V3.2)

- **Metodología de ejecución:** Flujo compacto `pyme-template` V3.2 en **Modo Lite**, priorizando trazabilidad directa hacia diseño e implementación sin burocracia innecesaria.
- **Stack tecnológico aprobado (`DECISION`):** Desarrollo web estático/híbrido con **Astro + Tailwind CSS**, estructurando contenido editable (servicios, casos, fotografías, textos y contactos) mediante colecciones o archivos de datos modulares.
- **Arquitectura de 8 páginas aprobada (`DECISION`):**
  1. `Inicio` (estructurado en 8 bloques narrativos definidos en Sección 6 del Documento Maestro).
  2. `Marca personal` (servicio prioritario A).
  3. `Creación de contenido` (servicio prioritario B).
  4. `Fotografía` (integra contenido/fotografía para empresas C y sesiones particulares D).
  5. `Eventos sociales` (servicio complementario E).
  6. `Proyectos` (portafolio editorial verificado).
  7. `El estudio` (visión, dirección creativa de Darío Ilescas Cruz, equipo y capacidades integradas como formación/mentoría G y producción/drones F).
  8. `Contacto` (agenda en Google Calendar, WhatsApp y teléfono).
- **Jerarquía de navegación (`DECISION`):**
  - *Menú principal:* `Marca personal` · `Contenido` · `Fotografía` · `Proyectos` · `El estudio` + CTA destacado: `Agendar videollamada`.
  - *Accesos secundarios:* `Eventos sociales` y `Producción audiovisual y drones` accesibles desde el bloque de Servicios complementarios en `Inicio` y en el pie de página (`Footer`).
- **Entregables comprometidos (Sección 13 del Documento Maestro):**
  1. Evaluación técnica del sitio existente y propuesta de reutilización o reconstrucción (`docs/00-project/discovery.md`).
  2. Mapa del sitio y distribución de contenidos (`docs/01-strategy/` y `docs/02-content/`).
  3. Diseño de `Inicio` en móvil y escritorio con los textos provistos (`docs/03-design/`).
  4. Plantillas de servicios, casos y contacto (`docs/03-design/` y `src/`).
  5. Implementación de agenda, WhatsApp, teléfono y medición de clics (`src/` y `docs/06-seo-analytics/`).
  6. Migración y revisión técnica desde `sefirot.com.mx` (`docs/08-devops/`).
  7. Accesos administrativos, instrucciones de actualización y alcance de mantenimiento (`docs/05-development/`).

---

## 6. Restricciones

- **Cero precios ni paquetes públicos (`CA-COMM-01`):** Prohibido publicar precios, rangos de inversión, descuentos, promociones o paquetes tarifados. Ninguna cantidad o frecuencia de producción descrita en propuestas previas se convierte en paquete público.
- **Cero promesas de ventas garantizadas ni viralidad (`CA-COMM-02`):** El posicionamiento, estatus percibido y conversiones se comunican como objetivos estratégicos, nunca como resultados garantizados.
- **Cero datos ficticios o residuales (`CA-COMM-02` / `CA-COMM-03`):** Prohibido publicar testimonios inventados, contadores sin sustento, métricas sin evidencia causal, propuestas a prospectos presentadas como casos realizados, textos de plantilla en inglés o marcadores `[POR DEFINIR]` en producción.
- **Alcance de servicios de contenido (`CLIENT-PROVIDED`):** Publicación, *community management*, pauta publicitaria y seguimiento comercial solo se incluyen bajo contratación expresa; no deben presentarse como inclusiones automáticas de Creación de contenido.
- **Subordinación visual de drones y eventos (`CA-COMM-04`):** El hero de `Inicio` y la narrativa principal no deben estar dominados por drones, supervisión de obra ni eventos sociales.
- **Fricción mínima de contacto (`CA-CONV-05`):** No incluir formularios extensos ni exigir campo de presupuesto para contactar. Si se añade formulario complementario, solo debe pedir nombre, contacto y descripción breve del proyecto.
- **Privacidad y seguridad (`CA-LEGAL-01` / `CA-LEGAL-02`):** Prohibido publicar domicilio particular. Se requiere Aviso de Privacidad real antes de salir a producción.
- **Restricción de Fase 0 (`AGENTS.md`):** Prohibido generar código frontend en `src/` o modificar `inputs/` durante la fase de Discovery.

---

## 7. Estado actual

- **Fase activa:** **Fase 0 · Estructuración y Discovery** completada en artefactos base (`PRODUCT.md`, `AGENTS.md`, `VALIDATION.md`, `docs/00-project/context.md`, `facts.md`, `decisions.md`, `discovery.md`), lista para transición a **Fase 1 · Estrategia y Arquitectura de Contenido** (`product-strategist` + `content-conversion-specialist`).
- **Estado de activos en `inputs/`:** Se cuenta con el documento rector [`inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md). Las demás subcarpetas de `inputs/` (`brand`, `content`, `media`, `references`, `analytics`, `technical`, `legal`) contienen únicamente sus archivos `README.md` de plantilla (sin activos gráficos ni exportaciones cargadas aún).
- **Verificación en vivo de `https://sefirot.com.mx/`:** `NOT VERIFIED` en vivo desde el entorno de ejecución (acceso externo restringido por permisos de herramienta); la auditoría se sustenta en la evidencia documental provista en la Sección 11 del Documento Maestro.

---

## 8. Preguntas abiertas (`[POR DEFINIR]`)

Ninguna de estas preguntas impide avanzar hacia Estrategia, Contenido, Diseño o Desarrollo local (Sección 14 del Documento Maestro), pero **bloquean la publicación final**:

1. **Datos de contacto oficiales:** ¿Cuáles son el número de WhatsApp comercial (con código de país), el número telefónico para llamadas y el correo comercial definitivo? (`[POR DEFINIR]`)
2. **Agenda de Google Calendar:** ¿Cuál es la URL pública de reserva de citas configurada con disponibilidad, duración y zona horaria? (`[POR DEFINIR]`)
3. **Presencia social y ubicación:** ¿Cuáles son las URLs oficiales de Instagram, Facebook u otras redes a enlazar, y cuál es el texto comercial exacto de ubicación y cobertura geográfica? (`[POR DEFINIR]`)
4. **Dominio y arquitectura para capacidad F (Drones):** ¿Cuál será el dominio público final de Cobalto Carmesí Studios para ejecutar las redirecciones desde `sefirot.com.mx`? Además, dado que el sitemap tiene 8 páginas definidas (Sección 5) pero la Sección 6 (Bloque 6) pide enlazar cada servicio complementario a su página correspondiente, ¿*Producción audiovisual y drones* (F) vivirá como sección anclada dentro de `Fotografía`/`Creación de contenido`/`El estudio` o como ruta dedicada? (`[POR DEFINIR]` — a resolver en Fase 1 por `product-strategist`).
5. **Elegibilidad del portafolio:** ¿Con qué piezas finales aprobadas, alcance confirmado y permisos de uso se cuenta para *Angie Mesta*, *H Centro Hidrofacial*, *Durambene* y el *Archivo Sefirot*? (`[POR DEFINIR]`)
6. **Activos visuales e identidad gráfica:** ¿Cuándo se incorporarán en `inputs/brand/` e `inputs/media/` el logotipo oficial, definiciones cromáticas exactas (códigos hex/RGB de cobalto, carmesí y neutros) y las fotografías/videos reales para el hero y páginas internas? (`[POR DEFINIR]`)
7. **Cumplimiento legal y analítica:** ¿Cuál es el texto definitivo del Aviso de Privacidad y qué herramienta de analítica (ej. GA4, Plausible, GTM) se utilizará para registrar los eventos de clic? (`[POR DEFINIR]`)
