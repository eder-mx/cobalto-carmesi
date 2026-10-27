# VALIDATION.md · Requisitos y Criterios de Aceptación (Cobalto Carmesí Studios)

**Status:** Ready for Review  
**Version:** 1.0  
**Last updated:** 2026-10-23  
**Fuente canónica:** [`inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md) (Sección 12 y restricciones transversales)

> Este documento establece la matriz oficial de validación y criterios de aceptación para el proyecto web de **Cobalto Carmesí Studios** (Modo Lite: Astro + Tailwind CSS).  
> **Regla de gobernanza:** Un resultado `PASS` de QA constituye evidencia técnica de validación, pero **no autoriza la publicación por sí solo** sin la aprobación final del propietario/cliente.

---

## 1. Criterios de Aceptación del Producto (Sección 12 del Documento Maestro)

### 1.1 Diseño Responsivo y Adaptabilidad (`CA-RESP`)
- [ ] **CA-RESP-01:** Diseño adaptable y verificado en celular (móvil), tableta y escritorio sin desbordamientos horizontales ni pérdida de jerarquía visual.
- [ ] **CA-RESP-02:** El diseño de `Inicio` en móvil y escritorio respeta los 8 bloques estructurales y textos definidos en la Sección 6 del Documento Maestro.
- [ ] **CA-RESP-03:** La integración de reserva de Google Calendar prioriza abrir la página pública de citas desde los CTAs; solo se incrustará bloque embebido si se comprueba que mejora la experiencia móvil.

### 1.2 Editabilidad y Gestión de Contenido (`CA-EDIT`)
- [ ] **CA-EDIT-01:** El contenido del sitio (servicios, casos de portafolio, fotografías, textos y datos de contacto) está estructurado de forma modular y editable en el proyecto Astro (colecciones de contenido / archivos de datos centralizados) sin requerir reescritura de componentes visuales.
- [ ] **CA-EDIT-02:** Entrega de accesos administrativos, instrucciones claras de actualización y definición del alcance de mantenimiento (Entregable 7, Sección 13).

### 1.3 Rendimiento y Medios (`CA-PERF`)
- [ ] **CA-PERF-01:** Imágenes optimizadas en formatos modernos, dimensiones adecuadas y atributos de carga.
- [ ] **CA-PERF-02:** Videos con imagen de portada (poster) de respaldo para carga inicial y carga diferida (*lazy loading*) cuando proceda.
- [ ] **CA-PERF-03:** Prohibido incluir videos pesados o animaciones intrusivas que bloqueen la lectura o el contenido principal (Sección 10).

### 1.4 Accesibilidad (`CA-A11Y`)
- [ ] **CA-A11Y-01:** Navegación completa y funcional mediante teclado (orden de foco lógico y estados `:focus-visible` claros en menús, botones y enlaces).
- [ ] **CA-A11Y-02:** Contraste cromático legible en todas las combinaciones de texto sobre fondos cobalto, carmesí y neutros.
- [ ] **CA-A11Y-03:** Textos alternativos (`alt`) útiles y descriptivos en imágenes editoriales, retratos y piezas de portafolio.

### 1.5 SEO On-Page e Indexación (`CA-SEO`)
- [ ] **CA-SEO-01:** Títulos (`<title>`), metadescripciones (`<meta name="description">`) y jerarquía de encabezados (`H1` único por vista, `H2`, `H3`) únicos y coherentes en cada una de las 8 páginas del sitio.
- [ ] **CA-SEO-02:** Página de `Inicio` configurada con la propuesta base:
  - **Título:** `Cobalto Carmesí | Marca personal y creación de contenido`
  - **Metadescripción:** `Arquitectura de marca personal, fotografía y producción audiovisual para comunicar tu valor. Agenda una videollamada con Cobalto Carmesí Studios.`
- [ ] **CA-SEO-03:** Generación de `sitemap.xml` y revisión técnica de directivas de indexación (`robots.txt`, etiquetas canónicas).
- [ ] **CA-SEO-04:** Mapa de redirecciones de las URLs relevantes desde `https://sefirot.com.mx/` en caso de cambio o migración de dominio (Sección 11).

### 1.6 Conversiones, Integraciones y Medición (`CA-CONV`)
- [ ] **CA-CONV-01:** Implementación de rastreo de eventos para medir clics hacia:
  1. Agenda de Google Calendar.
  2. Enlaces de WhatsApp.
  3. Enlaces de llamada telefónica (`tel:`).
- [ ] **CA-CONV-02:** Distinción clara en analítica entre **clic al enlace de agenda** y **reserva confirmada** (midiendo esta última únicamente si la integración con Google Calendar lo permite técnicamente).
- [ ] **CA-CONV-03:** Alineación documental de que las solicitudes calificadas y el avance comercial se miden mediante seguimiento interno; el tráfico web por sí solo no se reporta como conversión.
- [ ] **CA-CONV-04:** Mensajes prellenados de WhatsApp configurados según contexto:
  - General / Marca personal: *«Hola, me interesa trabajar mi marca personal y crear contenido con Cobalto Carmesí. Me gustaría conversar sobre mi proyecto.»*
  - Adaptados específicamente en páginas de `Fotografía` y `Eventos sociales`.
- [ ] **CA-CONV-05:** Si se incorpora un formulario complementario, solicita únicamente nombre, contacto y descripción breve del proyecto (sin formularios extensos ni campo obligatorio de presupuesto).

### 1.7 Cumplimiento Legal y Privacidad (`CA-LEGAL`)
- [ ] **CA-LEGAL-01:** Aviso de privacidad y cláusulas de tratamiento de datos personales publicados y adecuados a la operación real del estudio (`[POR DEFINIR]` texto legal definitivo antes de publicar).
- [ ] **CA-LEGAL-02:** No publicar domicilio particular en ninguna sección del sitio ni en metadatos locales.

### 1.8 Integridad Comercial, Editorial y de Marca (`CA-COMM`)
- [ ] **CA-COMM-01:** **Cero precios públicos:** Ausencia total de precios, rangos de inversión, descuentos, promociones o paquetes tarifados en toda la web.
- [ ] **CA-COMM-02:** **Cero elementos ficticios:** Ausencia total de contadores inventados, métricas sin contexto, testimonios ficticios o textos residuales de plantilla en inglés (ej. *«Brand New Features»*, *«Ultimate Solution»*).
- [ ] **CA-COMM-03:** **Cero pendientes visibles en producción:** Ningún marcador `[POR DEFINIR]` o `[PENDIENTE]`, dato ficticio ni botón sin destino válido puede estar visible al publicar.
- [ ] **CA-COMM-04:** **Jerarquía de servicios respetada:** Arquitectura de marca personal y creación de contenido encabezan la experiencia y la primera pantalla; drones y eventos sociales operan como capacidades complementarias y no dominan el hero de `Inicio`.
- [ ] **CA-COMM-05:** **Portafolio verificado:** Cada caso publicado cuenta con autorización de uso, piezas finales aprobadas y explica contexto, necesidad, alcance real, aportación del estudio y muestra final (sin presentar propuestas para prospectos como trabajos terminados).

### 1.9 Verificación Pre-Lanzamiento y Migración (`CA-LAUNCH`)
- [ ] **CA-LAUNCH-01:** Verificación funcional extremo a extremo de todos los enlaces de navegación, reservas en Google Calendar (zona horaria, confirmación y acceso a videollamada), enlaces de WhatsApp y llamadas telefónicas tanto en dispositivos móviles como en escritorio antes de publicar.
- [ ] **CA-LAUNCH-02:** Respaldo completo del sitio y configuración actual de `https://sefirot.com.mx/` antes de intervenir, preservando correos electrónicos y servicios asociados al dominio.

---

## 2. Estado de Validación por Fase (Modo Lite)

| Fase | Entregable / Alcance | Responsable | Estado | Evidencia / Observaciones |
|---|---|---|---|---|
| **Fase 0 · Estructuración (Actual)** | Estructura de carpetas (`docs/00-project`, `01-strategy`, `02-content`, `03-design`, `05-development`, `inputs/`), `PRODUCT.md`, `AGENTS.md`, `VALIDATION.md` | `discovery-audit-analyst` / `product-strategist` | **PASS (Ready for Review)** | Creados y sincronizados con Documento Maestro el 2026-10-23. Sin código frontend generado. |
| **Fase 1 · Estrategia y Contenido** | Sitemap detallado, arquitectura de páginas y textos definitivos por vista | `product-strategist` / `content-conversion-specialist` | **PENDING** | Base avanzada en Documento Maestro (Secciones 4 a 8). |
| **Fase 2 · Diseño UX/UI** | Sistema visual (Cobalto/Carmesí), diseño de `Inicio` (móvil/escritorio) y plantillas de servicios, casos y contacto | `product-designer` | **PENDING** | Dirección visual definida en Sección 10. |
| **Fase 3 · Desarrollo Frontend** | Implementación en Astro + Tailwind CSS, contenido editable, SEO y eventos de medición | `frontend-engineer` | **PENDING** | Bloqueado en esta fase por restricción explícita de Discovery. |
| **Fase 4 · QA y Lanzamiento** | Auditoría responsiva, accesibilidad, enlaces y migración desde `sefirot.com.mx` | `qa-engineer` / `devops-engineer` | **PENDING** | Requiere resolución previa de los campos `[POR DEFINIR]` de la Sección 9 y 14. |

---

## 3. Bloqueadores Actuales para Lanzamiento (`[POR DEFINIR]`)

Ninguno de estos puntos impide avanzar en diseño o desarrollo local, pero **bloquean el pase a producción (`CA-COMM-03` y `CA-LAUNCH-01`)**:

1. **WhatsApp comercial:** `[POR DEFINIR]`
2. **Teléfono para llamadas:** `[POR DEFINIR]`
3. **Correo comercial:** `[POR DEFINIR]`
4. **URL pública de reserva de citas en Google Calendar:** `[POR DEFINIR]`
5. **URL oficial de Instagram y otras redes sociales:** `[POR DEFINIR]`
6. **Texto comercial de ubicación y cobertura:** `[POR DEFINIR]`
7. **Dominio público definitivo de Cobalto Carmesí Studios:** `[POR DEFINIR]`
8. **Permisos y selección final de casos de portafolio (*Angie Mesta*, *H Centro Hidrofacial*, *Durambene*, archivo *Sefirot*):** `[POR DEFINIR]`
9. **Activos gráficos definitivos (logotipo, fotografías y video hero de marca personal):** `[POR DEFINIR]`
10. **Texto legal del Aviso de Privacidad:** `[POR DEFINIR]`
