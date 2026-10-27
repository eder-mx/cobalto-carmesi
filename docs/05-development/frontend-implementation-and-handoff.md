# Implementación Frontend y Handoff a QA · Cobalto Carmesí Studios

- **Artefacto:** `docs/05-development/frontend-implementation-and-handoff.md`
- **Versión:** `1.0`
- **Estado:** `Ready for Review` (Listo para validación de QA y revisión de propietario)
- **Autor / Rol:** `frontend-engineer`
- **Fecha:** `2026-10-26`
- **Metodología:** `pyme-template` V3.2 (Modo Lite)

---

## 1. Fuentes Canónicas y Evidencia Utilizada

La implementación en `src/` y `public/` traduce estrictamente las decisiones y especificaciones vigentes sin inventar datos, métricas, precios ni canales no confirmados:

1. **Gobernanza y Marco del Proyecto:**
   - [`AGENTS.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/AGENTS.md)
   - [`PRODUCT.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/PRODUCT.md)
   - [`VALIDATION.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/VALIDATION.md) (Criterios de Aceptación `CA-*`)
2. **Descubrimiento y Hechos Verificados:**
   - [`docs/00-project/discovery-and-audit.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/00-project/discovery-and-audit.md)
   - [`docs/00-project/verified-facts-and-pending-data.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/00-project/verified-facts-and-pending-data.md)
   - [`docs/00-project/decisions.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/00-project/decisions.md) (`DEC-001` a `DEC-007`)
3. **Estrategia, Contenido y Diseño:**
   - [`docs/01-strategy/site-strategy-and-architecture.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/01-strategy/site-strategy-and-architecture.md)
   - [`docs/02-content/site-copy-and-messaging.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/02-content/site-copy-and-messaging.md)
   - [`docs/03-design/design-foundations-and-tokens.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/03-design/design-foundations-and-tokens.md)
   - [`docs/03-design/page-specs-and-components.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/03-design/page-specs-and-components.md)
4. **Activos Base de Marca (Solo Lectura Preservada):**
   - `inputs/brand/` y `inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md` se mantuvieron intactos (solo lectura).

---

## 2. Arquitectura Frontend y Archivos Creados

### 2.1 Configuración Base y Estilos (`Astro 5 + Tailwind CSS + Sitemap`)
- [`package.json`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/package.json): Scripts `dev`, `build`, `preview` y `astro` con dependencias `astro`, `@astrojs/tailwind`, `@astrojs/sitemap` y `tailwindcss`.
- [`astro.config.mjs`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/astro.config.mjs): Configurado con `site: 'https://cobaltocarmesi.com'` e integración `@astrojs/sitemap` para generación automática de `sitemap-index.xml` / `sitemap-0.xml` (`CA-SEO-03`).
- [`tailwind.config.mjs`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/tailwind.config.mjs): Mapeo exacto de la paleta Dark-First en claroscuro (`charcoal`, `cobalt`, `crimson`, `ivory`, `slate`, `paper`) y las dos familias tipográficas aprobadas (`Cabinet Grotesk` en `font-display` y `Satoshi` en `font-sans`), **sin fuente monoespaciada** (`DEC-006`).
- [`src/styles/global.css`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/styles/global.css): Declaración `@font-face` local con `font-display: swap` hacia `/fonts/CabinetGrotesk-Variable.woff2` y `/fonts/Satoshi-Variable.woff2`, tokens CSS, utilidades `.btn-primary` / `.btn-secondary` con área táctil mínima de `48px`, `focus-visible` accesible en `#3B6EF6` y soporte `@media (prefers-reduced-motion: reduce)`.
- [`public/robots.txt`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/public/robots.txt): Reglas de indexación limpias y referencia al sitemap.

### 2.2 Activos Públicos de Marca y Pósters Editoriales (`public/`)
- [`public/brand/logo-cobalto-horizontal.svg`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/public/brand/logo-cobalto-horizontal.svg): Versión optimizada para fondos oscuros (`#090B10` / `#11151E`) derivada de los vectores de `inputs/brand/` sin alterar los archivos originales.
- [`public/brand/logo-cobalto-isotipo.svg`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/public/brand/logo-cobalto-isotipo.svg): Isotipo oficial para favicon e identidad compacta.
- [`public/brand/logo-cobalto-monocromo.svg`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/public/brand/logo-cobalto-monocromo.svg): Versión monocromática clara (`#F4F5F8`).
- `public/media/portfolio/`: Pósters vectoriales en claroscuro con dimensiones explícitas (`width`/`height`) para los casos reales (`case-angie-mesta.svg`, `case-h-centro-hidrofacial.svg`, `case-durambene.svg`, `case-cobalto-evolucion.svg`) mientras concluye la curaduría fotográfica final.

### 2.3 Capa de Datos Editable (`src/data/` — Cumplimiento de `CA-EDIT-01`)
Toda la información comercial, de servicios, casos de portafolio, FAQs e integraciones pendientes vive desacoplada del marcado visual:
- [`src/data/siteConfig.ts`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/data/siteConfig.ts): Centraliza metadatos SEO, información de Dirección Creativa (Darío Ilescas Cruz), estados `POR_DEFINIR` de integraciones (`googleCalendar`, `whatsapp`, `phone`, `email`, `social`), los 8 mensajes prellenados de WhatsApp por contexto (`CA-CONV-04`) y los helpers `getCalendarUrl()`, `isExternalCalendarUrl()`, `getWhatsAppUrl()` y `getPhoneHref()`.
- [`src/data/services.ts`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/data/services.ts): Define las 7 líneas del catálogo (`A` a `G`), destacando explícitamente las 2 líneas prioritarias (`Consultoría y Gestión de Marca Personal` y `Creación de Contenido Estratégico para Redes Sociales`) sobre las estratégicas y complementarias (`CA-CAT-01`, `CA-CAT-02`, `CA-CAT-03`).
- [`src/data/projects.ts`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/data/projects.ts): Estructura los casos reales autorizados (`Angie Mesta`, `H Centro Hidrofacial`, `Durambene` y el caso institucional de evolución `Sefirot → Cobalto Carmesí Studios`) con los **5 puntos obligatorios** (`contexto`, `necesidad`, `alcanceEjecutado`, `aportacionEstudio`, `muestraVisual` — `CA-PORT-01`).
- [`src/data/faqs.ts`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/data/faqs.ts): Preguntas frecuentes canónicas sobre alcance, cotización a medida sin paquetes cerrados, límites de redes sociales y preparación frente a cámara.

### 2.4 Layout y Componentes Reutilizables (`src/layouts/` y `src/components/`)
- [`src/layouts/Layout.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/layouts/Layout.astro): Preload de fuentes WOFF2, SEO on-page único por página (`title`, `description`, `canonical`, OpenGraph), enlace `Saltar al contenido principal` (`skip-link`), e instrumentación global de eventos de clic (`cobalto_cta_click` en `window.dataLayer` y CustomEvent `cobalto:track` — `CA-SEO-04`).
- [`src/components/ui/Icon.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/components/ui/Icon.astro): Sistema de iconografía lineal geométrica unificada (`viewBox="0 0 24 24"`, `stroke-width="1.5"`, `stroke="currentColor"`).
- [`src/components/global/Navbar.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/components/global/Navbar.astro): Navegación principal sticky con CTA primario `Agendar videollamada` y drawer móvil accesible por teclado (`aria-expanded`, `aria-controls`, cierre con `Escape`).
- [`src/components/global/Footer.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/components/global/Footer.astro): Pie arquitectónico con mención de evolución `Sefirot → Cobalto Carmesí Studios`, crédito a Darío Ilescas Cruz, enlaces a servicios prioritarios y complementarios, canales directos y enlace a `/privacidad` (cero domicilio particular).
- [`src/components/ui/FloatingWhatsApp.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/components/ui/FloatingWhatsApp.astro): Acceso flotante discreto (en superficies carbón/cobalto, sin verde saturado intrusivo) con mensaje prellenado contextual según la página activa (`CA-CONV-04`).
- [`src/components/sections/ConversionCalendarBlock.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/components/sections/ConversionCalendarBlock.astro): Bloque maestro de cierre comercial con jerarquía de conversión hacia Google Calendar (primario), WhatsApp contextual (secundario) y opción telefónica (terciario).
- [`src/components/cards/ServiceCard.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/components/cards/ServiceCard.astro): Tarjeta arquitectónica con borde `1px`, etiqueta categórica en `Satoshi` uppercase (sin numeración técnica `01 //`) y lista de alcances.
- [`src/components/cards/ProjectCard.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/components/cards/ProjectCard.astro): Tarjeta de caso de estudio con `loading="lazy"`, `aspect-[16/10]`, `alt` descriptivo y desglose de los 5 puntos narrativos.
- [`src/components/ui/FAQAccordion.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/components/ui/FAQAccordion.astro): Acordeón accesible (`aria-expanded`, `aria-controls`, `role="region"`).
- [`src/components/forms/ContactFormMinimal.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/components/forms/ContactFormMinimal.astro): Formulario de **3 campos estrictos** (`Nombre`, `Teléfono o correo`, `Breve descripción del proyecto` — `CA-CONV-05`), con `<label for>` visibles, validación cliente accesible (`aria-invalid`, `role="alert"`) y puente directo hacia WhatsApp con el resumen estructurado.

### 2.5 Páginas Implementadas (`src/pages/`)
1. [`src/pages/index.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/pages/index.astro): Los **8 bloques obligatorios** en orden (`CA-HOME-01`): Hero, Manifiesto de Posicionamiento, Servicios Destacados (2 prioritarios + 5 complementarios), Por qué elegir el estudio (5 argumentos + respaldo de Darío Ilescas Cruz), Casos destacados, Método en 4 pasos, Preguntas Frecuentes y Cierre de conversión.
2. [`src/pages/marca-personal.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/pages/marca-personal.astro): Servicio Prioritario 1 (`Consultoría y Gestión de Marca Personal`) + subsección anclada `#formacion-y-mentoria` (`Formación, Mentoría y Capacitación Creativa`).
3. [`src/pages/creacion-de-contenido.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/pages/creacion-de-contenido.astro): Servicio Prioritario 2 (`Creación de Contenido Estratégico para Redes Sociales`), nota explícita de exclusión de community management masivo / pauta (`CA-CAT-03`) + subsección anclada `#produccion-y-drones` (`Producción Audiovisual y Tomas con Drones`).
4. [`src/pages/fotografia.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/pages/fotografia.astro): Arquitectura de doble vía con `#empresas` (`Fotografía para Empresas y Negocios`) y `#sesiones-particulares` (`Sesiones Fotográficas para Particulares`).
5. [`src/pages/eventos-sociales.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/pages/eventos-sociales.astro): Cobertura fotográfica y de video para Eventos Sociales y XV Años con enfoque documental y editorial + CTA de consulta de disponibilidad de fecha.
6. [`src/pages/proyectos.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/pages/proyectos.astro): Portafolio filtrable por categoría con los casos reales en formato de 5 puntos (`CA-PORT-01`) y bloque editorial de respaldo y confidencialidad (`CA-PORT-02`).
7. [`src/pages/el-estudio.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/pages/el-estudio.astro): Narrativa de evolución `Sefirot → Cobalto Carmesí Studios`, los 4 pilares de filosofía, liderazgo creativo de **Darío Ilescas Cruz**, los 5 principios operativos y ancla `#formacion` (`CA-ABOUT-01`, `CA-ABOUT-02`).
8. [`src/pages/contacto.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/pages/contacto.astro): Hub de conversión con tarjeta protagonista de Google Calendar (`#agendar` / `#agenda`), WhatsApp contextual, llamada telefónica (`#llamada-directa`), el formulario de 3 campos (`ContactFormMinimal`) y FAQs (`CA-CONV-01` a `CA-CONV-05`).
9. [`src/pages/privacidad.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/pages/privacidad.astro): Aviso de Privacidad alineado con los datos reales recabados y cero exposición de domicilio particular (`CA-LEGAL-01`, `CA-LEGAL-02`).

---

## 3. Guía Rápida para Activar Datos `[POR DEFINIR]` Cuando el Cliente los Confirme

Para conectar los canales definitivos sin tocar componentes ni páginas, edita únicamente [`src/data/siteConfig.ts`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/data/siteConfig.ts):

1. **Google Calendar (`siteConfig.integrations.googleCalendar`):**
   - Colocar la URL pública de citas en `bookingUrl` (para enlaces directos) y/o `embedUrl` (para renderizar automáticamente el `<iframe>` interactivo en `/contacto#agendar`).
2. **WhatsApp (`siteConfig.integrations.whatsapp`):**
   - Colocar los dígitos internacionales sin símbolos en `phoneDigits` (ej. `'522221234567'`). El helper `getWhatsAppUrl()` cambiará automáticamente de `https://api.whatsapp.com/send?text=...` a `https://wa.me/522221234567?text=...` conservando los 8 mensajes prellenados por página.
3. **Teléfono (`siteConfig.integrations.phone`):**
   - Colocar `phoneDigits` (ej. `'+522221234567'`) y `displayNumber` (ej. `'+52 (222) 123 4567'`) para activar enlaces `tel:` directos.

---

## 4. Estado de Verificación y Límites para Handoff a QA

- **Instalación de paquetes (`npm.cmd install`):** Ejecutada en el workspace (`383 packages` instalados en `node_modules/`).
- **Corrección de tipos en compilación:** Se detectó durante la primera corrida de `astro build` que `export type IconName` multilínea dentro del frontmatter de `Icon.astro` generaba un error de transformación en `esbuild` (`Unexpected "|"`). Se corrigió moviendo la definición de `export type IconName` a [`src/data/services.ts`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/data/services.ts) e importándola limpiamente en [`src/components/ui/Icon.astro`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/src/components/ui/Icon.astro).
- **Nota de verificación pendiente para QA (`UNVERIFIED` por restricción de ejecución de comando):** La segunda ejecución de `npm.cmd run build` tras el ajuste en `Icon.astro` no pudo completarse automáticamente porque el prompt de permiso de comando expiró/fue denegado en la sesión.
- **Lo que `qa-engineer` debe ejecutar y validar:**
  1. Ejecutar `npm.cmd run build` para confirmar la generación estática limpia en `dist/` y la creación de `dist/sitemap-index.xml`.
  2. Auditar las 9 rutas contra la matriz de [`VALIDATION.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/VALIDATION.md) (`CA-HOME-01` a `CA-MIG-03`).
