# Especificación de Pantallas y Catálogo de Componentes · Cobalto Carmesí Studios

**Status:** Ready for Review  
**Version:** 1.0  
**Last updated:** 2026-10-26  
**Author:** `product-designer` (V3.2)  
**Handoff Target:** `frontend-engineer` / `solution-architect`  
**Decision Authority:** Darío Ilescas Cruz (Director Creativo / Cliente)  
**Canonical Sources:**  
- [`inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md) (Secciones 1, 3, 5, 6, 8, 9, 10, 12)
- [`docs/01-strategy/site-strategy-and-architecture.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/01-strategy/site-strategy-and-architecture.md) (Sitemap, 8 páginas canónicas, matriz de conversión)
- [`docs/02-content/site-copy-and-messaging.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/02-content/site-copy-and-messaging.md) (Copy íntegro de 8 páginas y templates de WhatsApp)
- [`docs/03-design/design-foundations-and-tokens.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/03-design/design-foundations-and-tokens.md) (Tokens de color, claroscuro, escalas)
- [`PRODUCT.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/PRODUCT.md) y [`VALIDATION.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/VALIDATION.md) (`CA-RESP`, `CA-PERF`, `CA-A11Y`, `CA-CONV`)

---

## 1. Reglas Generales de Handoff y Sistema Visual

### 1.1 Dúo Tipográfico Puro y Supresión de Monospace
Por decisión estratégica del proyecto, **se elimina por completo la tipografía monospace** y las numeraciones técnicas de sección (`01 //`, `02 //`). El sistema opera exclusivamente con un **dúo tipográfico limpio**:
1. **Titulares y Display:** **Cabinet Grotesk** (Variable WOFF2 en `public/fonts/CabinetGrotesk-Variable.woff2`). Escultural, rotunda, arquitectónica. Pesos 700 (Bold) a 900 (Black).
2. **Cuerpo, UI y Etiquetas:** **Satoshi** (Variable WOFF2 en `public/fonts/Satoshi-Variable.woff2`). Humanista, geométrica, cristalina.
3. **Etiquetas y Badges Categóricos:** Tipografía **Satoshi** en versalitas/mayúsculas con tracking abierto (`uppercase tracking-widest text-xs font-semibold text-charcoal-400` o `text-cobalt-400`), aportando rigor de catálogo sin ruido pseudo-código.

### 1.2 Regla de Cero Invención de Datos
Todos los enlaces y marcadores de contacto comercial (`WhatsApp`, `Teléfono`, `Correo`, `Google Calendar`, `Instagram`, `Ubicación`) deben permanecer centralizados en la configuración global de la aplicación (`src/config/site.ts` o variables de entorno) y renderizarse con el texto o estado `[POR DEFINIR]` conforme a las reglas de gobernanza, sin generar botones ciegos ni enlaces rotos en producción.

---

## 2. Catálogo de Componentes Globales

---

### Componente 1: `Navbar` (Cabecera Global)
- **Ruta de implementación:** `src/components/global/Navbar.astro`
- **Ubicación en UI:** Fija en la parte superior de todas las vistas (`sticky top-0 z-50`).

#### Anatomía
1. **Contenedor Principal:** Altura de `h-20` (80px), ancho `max-w-7xl mx-auto px-6 sm:px-8`, fondo `bg-charcoal-950/90 backdrop-blur-md border-b border-white/10`.
2. **Logotipo / Identidad (Izquierda):** Enlace hacia `/` que contiene el isotipo vectorial o logotipo horizontal oficial (`logo cobalto horizontal.svg`), con altura máxima de 32px y texto accesible `sr-only` ("Cobalto Carmesí Studios - Ir al inicio").
3. **Navegación Desktop (Centro):** Menú horizontal de 5 enlaces principales:
   - `Marca personal` (`/marca-personal`)
   - `Contenido` (`/creacion-de-contenido`)
   - `Fotografía` (`/fotografia`)
   - `Proyectos` (`/proyectos`)
   - `El estudio` (`/el-estudio`)
4. **CTA Primario (Derecha):** Botón `Agendar videollamada` (`CTA-CAL-01`), enlazado a la URL de Google Calendar `[POR DEFINIR]`.
5. **Botón Menú Móvil (Derecha - solo en `< lg`):** Disparador tipo hamburguesa accesible (`aria-label="Abrir menú de navegación"`, `aria-expanded="false"`, `aria-controls="mobile-menu"`).
6. **Panel Móvil Desplegable:** Overlay a pantalla completa o cajón lateral desde la derecha (`bg-charcoal-950 border-b border-white/10`), con los 5 enlaces principales en tamaño grande (`text-2xl font-display`), acceso a `Contacto`, botón CTA primario, y una sección discreta al pie con accesos secundarios a `Eventos sociales` y `Producción y drones`.

#### Estados y Clases de Implementación (Tailwind CSS)
```html
<header class="sticky top-0 z-50 w-full bg-charcoal-950/90 backdrop-blur-md border-b border-white/10 transition-colors duration-200">
  <div class="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
    <!-- Logotipo -->
    <a href="/" class="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-400 rounded-sm">
      <img src="/brand/logo-cobalto-horizontal.svg" alt="Cobalto Carmesí Studios" class="h-8 w-auto" />
    </a>

    <!-- Menú Desktop -->
    <nav class="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
      <a href="/marca-personal" class="text-sm font-sans font-medium text-charcoal-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-400 rounded-sm py-1">Marca personal</a>
      <a href="/creacion-de-contenido" class="text-sm font-sans font-medium text-charcoal-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-400 rounded-sm py-1">Contenido</a>
      <a href="/fotografia" class="text-sm font-sans font-medium text-charcoal-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-400 rounded-sm py-1">Fotografía</a>
      <a href="/proyectos" class="text-sm font-sans font-medium text-charcoal-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-400 rounded-sm py-1">Proyectos</a>
      <a href="/el-estudio" class="text-sm font-sans font-medium text-charcoal-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visual:ring-cobalt-400 rounded-sm py-1">El estudio</a>
    </nav>

    <!-- Botón de Conversión Desktop -->
    <div class="hidden lg:flex items-center">
      <a href="[URL_GOOGLE_CALENDAR]" 
         data-track="click_calendar_cta" data-location="navbar"
         class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-medium text-white bg-cobalt-600 rounded-sm transition-all duration-200 hover:bg-cobalt-500 hover:shadow-glow-cobalt active:bg-cobalt-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950">
        <span>Agendar videollamada</span>
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>

    <!-- Disparador Móvil -->
    <button id="mobile-menu-toggle" type="button" 
            class="lg:hidden p-2 text-charcoal-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-400 rounded-sm"
            aria-label="Abrir menú de navegación" aria-expanded="false" aria-controls="mobile-menu">
      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
      </svg>
    </button>
  </div>
</header>
```

#### Accesibilidad (`CA-A11Y-01`)
- Navegación con tecla `Tab` en orden lógico natural.
- El panel móvil atrapa el foco (*focus trap*) cuando está abierto y se cierra con la tecla `Escape`.
- El enlace activo de la página actual lleva el atributo `aria-current="page"` y un subrayado sutil de 2px en `border-cobalt-400`.

---

### Componente 2: `Footer` (Pie Arquitectónico)
- **Ruta de implementación:** `src/components/global/Footer.astro`
- **Ubicación en UI:** Base de todas las vistas.

#### Anatomía
1. **Contenedor:** Fondo `bg-charcoal-950 border-t border-white/10 pt-20 pb-12`.
2. **Retícula de 4 Columnas (Desktop) / 1 Columna (Móvil):**
   - **Columna 1 · Identidad & Dirección:** Logotipo horizontal, síntesis editorial (*«Estrategia, narrativa y dirección creativa para hacer visible tu valor.»*), crédito formal: `Dirección Creativa: Darío Ilescas Cruz`, y texto de ubicación comercial `[POR DEFINIR]` sin domicilio particular (`CA-LEGAL-02`).
   - **Columna 2 · Explorar:** Enlaces directos a `Inicio`, `Marca personal`, `Creación de contenido`, `Fotografía`, `Proyectos`, `El estudio` y `Contacto`.
   - **Columna 3 · Servicios & Capacidades:** Catálogo completo incluyendo obligatoriamente los accesos visibles a `Eventos sociales` (`/eventos-sociales`) y `Producción audiovisual y drones` (`/creacion-de-contenido#produccion-y-drones`), además de `Contenido para empresas` y `Sesiones particulares`.
   - **Columna 4 · Conversemos:** Microcopy de invitación, botón de agenda Google Calendar, accesos a WhatsApp `[POR DEFINIR]`, Teléfono `[POR DEFINIR]`, Correo `[POR DEFINIR]` y redes sociales oficiales confirmadas.
3. **Franja Legal Inferior:** Divisor `border-t border-white/5 pt-8 mt-16 flex flex-col sm:flex-row items-center justify-between gap-4`. Contiene el copyright: `© 2026 Cobalto Carmesí Studios. Todos los derechos reservados.` y el enlace al `Aviso de privacidad` (`/privacidad`).

---

### Componente 3: `FloatingWhatsApp` (Botón Flotante de Contacto)
- **Ruta de implementación:** `src/components/ui/FloatingWhatsApp.astro`
- **Ubicación en UI:** Esquina inferior derecha en posición fija (`fixed bottom-6 right-6 z-40`).

#### Anatomía y Comportamiento
1. **Botón Circular / Oval Compacto:** Botón de 48px con fondo `bg-charcoal-850 hover:bg-charcoal-800 border border-white/15 text-white shadow-lg backdrop-blur-md rounded-full flex items-center justify-center p-3 transition-transform hover:scale-105 active:scale-95`.
2. **Icono:** Icono de WhatsApp / Mensaje (`lucide-message-circle` con `stroke-width="1.5"` y color verde sutil o blanco con punto de acento carmesí).
3. **Tooltip Accesible:** Etiqueta oculta en reposo que aparece en `:hover` o `:focus-visible`: `Escribir por WhatsApp`.
4. **Mensaje Contextual Dinámico:** El componente acepta un prop `context` para seleccionar automáticamente la plantilla de mensaje prellenado codificada en `site-copy-and-messaging.md` (ej. mensaje general para Home, o específico para Eventos/Fotografía).
5. **Aislamiento Visual:** No debe solaparse con modales ni bloquear el botón principal de CTA en móvil; en pantallas muy pequeñas (< 360px), mantiene una separación mínima de 16px del borde inferior.

---

### Componente 4: `ConversionCalendarBlock` (Módulo Maestro de Agendamiento)
- **Ruta de implementación:** `src/components/sections/ConversionCalendarBlock.astro`
- **Ubicación en UI:** Bloque de cierre en `Inicio` (Bloque 8), `Marca personal`, `Creación de contenido`, `Proyectos` y `Contacto`.

#### Anatomía
1. **Contenedor con Chasis Arquitectónico:** Caja rectangular con fondo `bg-charcoal-900 border border-white/10 rounded p-8 sm:p-12 lg:p-16 relative overflow-hidden`.
2. **Iluminación Atmosférica de Fondo:** Halo sutil radial `bg-[radial-gradient(ellipse_at_top,_rgba(0,71,171,0.15),transparent_70%)]`.
3. **Etiqueta Categórica:** Texto en versalitas Satoshi: `CONVERSACIÓN DE DIAGNÓSTICO` (`text-xs uppercase tracking-widest text-cobalt-400 font-semibold mb-3`).
4. **Titular en Cabinet Grotesk:** `H2` o `H3` potente: *«Hablemos de tu marca personal y de tu contenido»* o *«Agenda una videollamada con el estudio»*.
5. **Párrafo Explicativo (Satoshi):** Explica con precisión qué sucede en la llamada: videollamada de 30 minutos con el director creativo para entender tu momento, identificar oportunidades y definir si el estudio es el aliado indicado.
6. **Grupo de Acciones de Conversión:**
   - **Acción Principal:** Botón `Agendar una videollamada` (`bg-cobalt-600 text-white rounded-sm hover:bg-cobalt-500 px-8 py-4 text-base font-medium`).
   - **Acción Alternativa Directa:** Botón secundario `Escribir por WhatsApp` (`border border-white/15 bg-white/[0.04] text-white px-6 py-4`).
7. **Garantías y Respeto Comercial:** Tres puntos de confianza en microcopy:
   - *Sin costo ni compromiso comercial.*
   - *Conversación directa con Darío Ilescas Cruz.*
   - *Confidencialidad absoluta de tu proyecto.*

---

### Componente 5: `ServiceCard` (Tarjeta Arquitectónica de Servicio)
- **Ruta de implementación:** `src/components/cards/ServiceCard.astro`
- **Ubicación en UI:** Vitrina de servicios en `Inicio` (Bloque 3 y 6) y catálogo.

#### Props
```typescript
interface ServiceCardProps {
  category: string;       // Ej. "SERVICIO PRIORITARIO", "FOTOGRAFÍA" (en versalitas)
  title: string;          // En Cabinet Grotesk (ej. "Arquitectura de marca personal")
  description: string;    // En Satoshi (copy público oficial)
  href: string;           // Enlace destino (ej. "/marca-personal")
  scopeItems?: string[];  // Lista de 3 o 4 capacidades clave
  ctaLabel?: string;      // Texto del enlace al pie (ej. "Conocer el proceso")
  variant?: 'featured' | 'standard'; // 'featured' añade tinte sutil de borde cobalto
}
```

#### Maquetación y Clases
```html
<article class="group relative flex flex-col justify-between p-8 bg-charcoal-850 border border-white/10 rounded transition-all duration-300 hover:border-white/25 hover:bg-charcoal-800">
  <div>
    <!-- Encabezado de Categoría -->
    <div class="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
      <span class="font-sans uppercase tracking-widest text-xs font-semibold text-cobalt-400">{category}</span>
      <span class="w-1.5 h-1.5 rounded-full bg-cobalt-500 opacity-60 group-hover:opacity-100 transition-opacity"></span>
    </div>

    <!-- Título y Descripción -->
    <h3 class="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 group-hover:text-cobalt-200 transition-colors">
      {title}
    </h3>
    <p class="font-sans text-sm sm:text-base leading-relaxed text-charcoal-400 mb-6">
      {description}
    </p>

    <!-- Lista de Capacidades (opcional) -->
    {scopeItems && (
      <ul class="space-y-2 mb-8 pt-4 border-t border-white/5">
        {scopeItems.map((item) => (
          <li class="flex items-start gap-2.5 text-xs text-charcoal-300">
            <span class="text-cobalt-400 mt-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>

  <!-- Enlace Inferior de Acción -->
  <div class="pt-6 border-t border-white/10 flex items-center justify-between">
    <a href={href} class="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider font-semibold text-charcoal-200 group-hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-400 rounded-sm">
      <span>{ctaLabel || "Ver alcance y proceso"}</span>
      <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </a>
  </div>
</article>
```

---

### Componente 6: `ProjectCard` (Tarjeta de Caso de Estudio / Portafolio)
- **Ruta de implementación:** `src/components/cards/ProjectCard.astro`
- **Ubicación en UI:** `Inicio` (Bloque 4) y vista `/proyectos`.

#### Props
```typescript
interface ProjectCardProps {
  title: string;          // Nombre del proyecto / cliente (ej. "Angie Mesta", "H Centro Hidrofacial")
  discipline: string;     // Ej. "MARCA PERSONAL & CONTENIDO" (en versalitas)
  summary: string;        // Resumen del alcance y aporte del estudio
  aspectRatio: 'portrait' | 'landscape'; // 'portrait' (4:5) o 'landscape' (16:9)
  imageUrl: string;       // Ruta de imagen optimizada
  imageAlt: string;       // Texto alternativo descriptivo obligatorio (CA-A11Y-03)
  href?: string;          // Enlace al detalle del caso
}
```

#### Anatomía y Tratamiento Visual
1. **Contenedor Visual:** Proporción estricta `aspect-[4/5]` para retratos/marca personal o `aspect-video` (16:9) para producciones.
2. **Tratamiento de Imagen:** Desaturación sutil al 10% en reposo (`contrast-105 saturate-[0.9]`), que recupera el color pleno y brillo en hover (`group-hover:saturate-100 group-hover:scale-[1.02] transition-all duration-500 ease-out`).
3. **Capa de Claroscuro:** Gradiente inferior de protección de texto `bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent`.
4. **Metadatos Flotantes:** Badge de disciplina en la parte inferior sobre el degradado, con titular en Cabinet Grotesk y extracto en Satoshi.

---

### Componente 7: `FAQAccordion` (Acordeón de Dudas Frecuentes)
- **Ruta de implementación:** `src/components/ui/FAQAccordion.astro`
- **Ubicación en UI:** `Inicio` (Bloque 7), `Marca personal` (Sección 4), `Creación de contenido` y `Contacto`.

#### Anatomía y Accesibilidad (`CA-A11Y-01`)
- **Estructura HTML:** Lista ordenada o contenedor semántico `<div class="divide-y divide-white/10 border-y border-white/10">`.
- **Botón Disparador (`<button>`):**
  - Ancho completo `w-full text-left py-6 flex items-center justify-between gap-4 group`.
  - Atributos obligatorios: `aria-expanded="false"`, `aria-controls="faq-content-[id]"`.
  - Pregunta en **Cabinet Grotesk Medium/Bold** (`text-lg sm:text-xl text-white group-hover:text-cobalt-300 transition-colors`).
  - Icono de cruz/más con trazo 1.5 (`stroke-width="1.5"`), que rota suavemente 45 grados (`transform transition-transform duration-300`) al abrirse.
- **Panel de Respuesta (`<div role="region">`):**
  - Atributo obligatorio: `id="faq-content-[id]"`, `aria-labelledby="faq-button-[id]"`.
  - Texto en **Satoshi Regular** (`text-charcoal-400 leading-relaxed text-sm sm:text-base pb-6`).
  - Animación suave de apertura mediante transiciones de altura (`grid-template-rows: 0fr -> 1fr`).

---

### Componente 8: `ContactFormMinimal` (Formulario Complementario - 3 Campos)
- **Ruta de implementación:** `src/components/forms/ContactFormMinimal.astro`
- **Ubicación en UI:** Página `/contacto` (como canal alternativo opcional junto a la agenda y WhatsApp, cumpliendo `CA-CONV-05`).

#### Anatomía y Restricciones Canónicas
- **Restricción comercial innegociable (`CA-CONV-05`):** Solo solicita 3 campos. **Prohibido solicitar presupuesto obligatorio, empresa o encuestas extensas**.
1. **Campo 1: Nombre completo**
   - `<label for="name" class="block text-xs uppercase tracking-wider text-charcoal-400 font-semibold mb-2">Nombre completo</label>`
   - `<input id="name" type="text" required class="w-full bg-charcoal-900 border border-charcoal-700 rounded-sm px-4 py-3 text-white text-sm focus:border-cobalt-500 focus:ring-1 focus:ring-cobalt-500 focus:outline-none placeholder:text-charcoal-600" placeholder="¿Cómo te llamas?" />`
2. **Campo 2: Teléfono o Correo electrónico**
   - `<label for="contact" class="block text-xs uppercase tracking-wider text-charcoal-400 font-semibold mb-2">Teléfono o correo de contacto</label>`
   - `<input id="contact" type="text" required class="w-full bg-charcoal-900 border border-charcoal-700 rounded-sm px-4 py-3 text-white text-sm focus:border-cobalt-500 focus:ring-1 focus:ring-cobalt-500 focus:outline-none placeholder:text-charcoal-600" placeholder="ejemplo@correo.com o WhatsApp con lada" />`
3. **Campo 3: Mensaje o breve descripción del proyecto**
   - `<label for="message" class="block text-xs uppercase tracking-wider text-charcoal-400 font-semibold mb-2">Cuéntanos sobre tu proyecto</label>`
   - `<textarea id="message" rows="4" required class="w-full bg-charcoal-900 border border-charcoal-700 rounded-sm px-4 py-3 text-white text-sm focus:border-cobalt-500 focus:ring-1 focus:ring-cobalt-500 focus:outline-none placeholder:text-charcoal-600" placeholder="¿Qué estás buscando comunicar o construir?"></textarea>`
4. **Botón de Envío:**
   - `<button type="submit" class="w-full sm:w-auto px-8 py-3.5 bg-cobalt-600 text-white text-sm font-medium rounded-sm hover:bg-cobalt-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-400">Enviar mensaje</button>`
5. **Microcopy de Confidencialidad:**
   - *«Tus datos son tratados con confidencialidad para responder a tu consulta. Consulta nuestro Aviso de Privacidad.»*

---

## 3. Especificación de Layout Bloque por Bloque para las 8 Páginas

---

### PÁGINA 1: `Inicio` (`/`)
- **Propósito:** Presentar la propuesta de valor, establecer el estatus del estudio y articular los 8 bloques oficiales (`CA-RESP-02`).
- **Título SEO:** `Cobalto Carmesí | Marca personal y creación de contenido`
- **Metadescripción:** `Arquitectura de marca personal, fotografía y producción audiovisual para comunicar tu valor. Agenda una videollamada con Cobalto Carmesí Studios.`

#### Desglose Modular de los 8 Bloques Oficiales
| Bloque | Nombre / Rol | Componentes Reutilizados | Layout Mobile (375px) | Layout Desktop (1280px+) | Contenido y CTAs Clave |
|---|---|---|---|---|---|
| **Bloque 1** | **Hero de Posicionamiento** | `BadgeTag`, `ButtonPrimary`, `ButtonSecondary` | Columna única centrada o alineada a la izquierda. Texto e imagen apilados verticalmente (`flex-col`). | 2 columnas (12 cols: 7 cols texto / 5 cols medios). Video/Retrato cinematográfico a la derecha con proporción `4:5`. | **H1:** *Tu experiencia merece una presencia a su altura.*<br>**Lead:** Arquitectura de marca personal y contenido audiovisual.<br>**CTA Primario:** `Agendar una videollamada`<br>**CTA Secundario:** `Ver nuestro trabajo` (`/proyectos`). |
| **Bloque 2** | **Problema / Identificación** | `SectionHeading`, Chasis 1px | Tarjeta con borde horizontal superior e inferior. | Cuadrante editorial centrado con ancho de lectura cómodo (`max-w-3xl`). | **H2:** *El valor de tu trabajo no debería depender de explicaciones improvisadas.*<br>3 párrafos del Documento Maestro. |
| **Bloque 3** | **Qué Hacemos (Oferta Principal)** | `ServiceCard` (x2) | 1 columna (`grid-cols-1 gap-6`). | 2 columnas (`grid-cols-2 gap-8`). | **Servicio 1:** Arquitectura de marca personal.<br>**Servicio 2:** Creación de contenido.<br>**CTA:** `Explorar cómo podemos trabajar juntos` (`/contacto`). |
| **Bloque 4** | **Criterio / Cómo Trabajamos** | `ProjectCard` (x2 o x3), Lista Editorial | Apilado vertical con scroll natural. | Retícula asimétrica de 12 columnas (tarjeta destacada 7 cols + 2 secundarias apiladas 5 cols). | **H2:** *Estrategia, narrativa y producción en un solo equipo.*<br>5 argumentos de elección presentados con rigor editorial. |
| **Bloque 5** | **Dirección Creativa** | Retrato `4:5`, Chasis 1px | Retrato primero, seguido del texto y firma. | 2 columnas equilibradas (5 cols retrato con iluminación claroscuro / 7 cols manifiesto). | **H2:** *Dirección con criterio y visión de largo plazo.*<br>Cita de Darío Ilescas Cruz, visión de marca y rol del director creativo. |
| **Bloque 6** | **Servicios Complementarios** | `ServiceCard` (x4 versión compacta) | 1 columna (`grid-cols-1 gap-4`). | 4 columnas o 2x2 (`grid-cols-2 lg:grid-cols-4 gap-6`). | 4 tarjetas con enlace directo:<br>1. *Contenido para empresas* (`/fotografia#empresas`)<br>2. *Sesiones fotográficas* (`/fotografia#sesiones-particulares`)<br>3. *Eventos sociales* (`/eventos-sociales`)<br>4. *Producciones con imagen aérea* (`/creacion-de-contenido#produccion-y-drones`). |
| **Bloque 7** | **Preguntas Frecuentes (FAQ)** | `FAQAccordion` | 1 columna a pantalla completa. | 2 columnas (4 cols título e intro de soporte / 8 cols acordeón interactivo). | 4 preguntas iniciales de selección de clientes, proceso de trabajo, inversión personalizada y acompañamiento. |
| **Bloque 8** | **Cierre y Conversión Maestro** | `ConversionCalendarBlock` | Módulo encuadrado con botones apilados al 100% de ancho. | Módulo arquitectónico central con botones en fila horizontal y garantías al pie. | **H2:** *Hablemos de tu marca personal y de tu contenido.*<br>**CTA Primario:** `Agendar una videollamada`<br>**Alternativas:** WhatsApp directo y llamada telefónica. |

---

### PÁGINA 2: `Marca Personal` (`/marca-personal`) — Servicio Prioritario
- **Propósito:** Explicar a fondo la arquitectura de marca personal, las 6 necesidades resueltas, el proceso de 4 fases, mentoría y resolución de dudas.
- **Título SEO:** `Arquitectura de Marca Personal | Cobalto Carmesí Studios`
- **Metadescripción:** `Definimos tu posicionamiento, organizamos tu narrativa y dirigimos tu presencia frente a cámara para conectar tu experiencia con tu audiencia ideal.`

#### Estructura de Secciones
1. **Hero de Servicio:**
   - Etiqueta: `SERVICIO PRIORITARIO` en versalitas Satoshi.
   - **H1:** *Dale estructura a lo que te hace valioso.*
   - Subtítulo editorial y CTA directo a agenda.
2. **Las 6 Necesidades que Resuelve (Matriz Editorial):**
   - Retícula de 3 columnas en desktop / 1 en móvil con chasis de 1px.
   - Puntos: *Diferenciación real, Autoridad consistente, Narrativa propia, Presencia frente a cámara, Contenido con dirección, Confianza comercial*.
3. **El Proceso de 4 Fases:**
   - Línea de tiempo arquitectónica horizontal (Desktop) o vertical (Móvil):
     - **Fase 1: Diagnóstico y Posicionamiento:** Auditoría, propuesta de valor y definición de públicos.
     - **Fase 2: Identidad Verbal y Narrativa:** Mensajes clave, pilares de contenido y territorios discursivos.
     - **Fase 3: Presencia Visual y Dirección:** Concepto fotográfico, guiones y preparación frente a cámara.
     - **Fase 4: Ejecución y Acompañamiento:** Producción, sesiones y evaluación de resultados.
4. **Sección Complementaria: Formación y Mentoría (`#formacion-y-mentoria`):**
   - Módulo encuadrado que aborda el acompañamiento a profesionales y equipos en comunicación y desenvolvimiento frente a cámara.
5. **Preguntas Frecuentes Específicas de Marca Personal:**
   - 4 FAQs abordando confidencialidad, timidez ante la cámara, duración del proceso y entregables.
6. **Módulo de Conversión:** `ConversionCalendarBlock` contextualizado.

---

### PÁGINA 3: `Creación de Contenido` (`/creacion-de-contenido`) — Servicio Prioritario
- **Propósito:** Detallar capacidades editoriales y audiovisuales, exclusión de CM automático y la sección integrada de Drones e Imagen Aérea (`#produccion-y-drones`).
- **Título SEO:** `Creación de Contenido y Producción Audiovisual | Cobalto Carmesí`
- **Metadescripción:** `Desarrollamos conceptos, guiones, fotografía y video con dirección creativa para comunicar tu valor con claridad, personalidad y consistencia.`

#### Estructura de Secciones
1. **Hero de Servicio:**
   - Etiqueta: `PRODUCCIÓN Y DIRECCIÓN AUDIOVISUAL`.
   - **H1:** *Convierte tu conocimiento en contenido con dirección.*
   - CTA Primario: `Hablemos de tu contenido`.
2. **Capacidades de Creación (Grid Modular):**
   - Cuadrantes interactivos: *Reels y formato corto, Videos de autoridad, Entrevistas y testimonios, Piezas de campaña, Fotografía para redes, Dirección y postproducción*.
3. **Límites Claros de Alcance (Nota de Transparencia):**
   - Bloque sobrio con fondo `bg-charcoal-900 border-l-2 border-cobalt-500 p-6`.
   - Aclara con total honestidad que la publicación, administración de redes sociales (CM) y pauta no se incluyen automáticamente, protegiendo el foco del estudio en la calidad y dirección.
4. **Sección Dedicada: Producción Audiovisual y Drones (`#produccion-y-drones`):**
   - Etiqueta: `CAPACIDAD COMPLEMENTARIA`.
   - **H2:** *Una mirada que amplía tu historia.*
   - Explicación de tomas terrestres y aéreas con drones para proyectos comerciales, institucionales y de cobertura.
   - Nota de viabilidad operativa sujeta a locación y normativa.
   - CTA específico: `Consultar una producción` (WhatsApp / Agenda).
5. **Módulo de Conversión:** `ConversionCalendarBlock`.

---

### PÁGINA 4: `Fotografía` (`/fotografia`)
- **Propósito:** Separar quirúrgicamente la fotografía corporativa para empresas de las sesiones fotográficas particulares con dirección artística.
- **Título SEO:** `Fotografía para Empresas y Sesiones Particulares | Cobalto Carmesí`
- **Metadescripción:** `Fotografía corporativa, retratos de equipo y sesiones particulares con dirección artística e iluminación editorial en Cobalto Carmesí Studios.`

#### Estructura de Secciones
1. **Hero de Fotografía:**
   - **H1:** *Fotografía con concepto, intención y dirección artística.*
   - Párrafo de entrada que explica el enfoque cinematográfico y editorial de la iluminación.
2. **Bloque 1: Contenido y Fotografía para Empresas (`#empresas`):**
   - Etiqueta: `EMPRESAS Y EQUIPOS`.
   - **H2:** *Haz visible el valor de tu empresa.*
   - Retratos corporativos, instalaciones, servicios y cobertura institucional.
   - CTA: `Cuéntanos tu proyecto` (Google Calendar / WhatsApp Empresas).
3. **Divisor Arquitectónico de Página:** Línea horizontal de 1px con respiro amplio.
4. **Bloque 2: Sesiones Fotográficas Particulares (`#sesiones-particulares`):**
   - Etiqueta: `SESIONES INDIVIDUALES`.
   - **H2:** *Una sesión construida alrededor de ti.*
   - Conceptualización, dirección de poses y expresión, atmósfera cuidada.
   - Cero tarifas visibles; cotización y alcance a la medida.
   - CTA: `Planeemos tu sesión` (WhatsApp Fotografía).
5. **Módulo de Conversión:** `ConversionCalendarBlock`.

---

### PÁGINA 5: `Eventos Sociales` (`/eventos-sociales`)
- **Propósito:** Mostrar la mirada documental y cinematográfica para celebraciones y XV años, con canal directo a WhatsApp para disponibilidad de fecha.
- **Título SEO:** `Fotografía y Video de Eventos Sociales y XV Años | Cobalto Carmesí`
- **Metadescripción:** `Conserva la emoción y la personalidad de tu celebración. Cobertura fotográfica y de video para eventos sociales y XV años con mirada cinematográfica.`

#### Estructura de Secciones
1. **Hero de Eventos Sociales:**
   - Etiqueta: `COBERTURA EDITORIAL DE CELEBRACIONES`.
   - **H1:** *Conserva la emoción y la personalidad de tu celebración.*
   - CTA Primario Destacado: `Consultar mi fecha por WhatsApp` (botón con enlace WhatsApp directo prellenado con contexto de eventos).
2. **El Enfoque del Estudio en Eventos:**
   - Tres pilares: *Atención a los protagonistas, Momentos auténticos sin poses forzadas, Estética cinematográfica en video*.
   - Mención explícita a celebraciones familiares y XV años.
3. **Galería / Vitrina Visual de Muestra:**
   - Mosaico con proporciones cinematográficas (`16:9` y `4:5`) con poster frames de carga rápida.
4. **Paso a Paso para Contratar:**
   - 1. Consulta de fecha por WhatsApp -> 2. Reunión para conocer el evento -> 3. Propuesta de cobertura a medida.
5. **Cierre de Conversión:**
   - Caja de llamada directa a WhatsApp: *«Las fechas de eventos sociales se reservan con anticipación. Escríbenos para revisar disponibilidad para tu fecha.»*

---

### PÁGINA 6: `Producción y Drones` (Acceso Rápido / `/servicios/produccion-y-drones`)
- **Propósito:** Servir como punto de entrada directo desde enlaces externos o redirecciones, canalizando hacia el bloque de realizaciones aéreas y audiovisuales de `/creacion-de-contenido#produccion-y-drones` para proteger la jerarquía canónica de 8 páginas (`D-005`).

---

### PÁGINA 7: `Proyectos` (`/proyectos`) — Casos de Estudio
- **Propósito:** Demostrar criterio, método y resultados mediante trabajo real verificado y autorizado.
- **Título SEO:** `Proyectos y Casos de Estudio | Cobalto Carmesí Studios`
- **Metadescripción:** `Explora una selección de proyectos reales de arquitectura de marca personal, creación de contenido, fotografía y producción audiovisual.`

#### Estructura de Secciones
1. **Hero de Portafolio:**
   - **H1:** *El criterio se demuestra en el trabajo terminado.*
   - Párrafo de manifiesto sobre cómo cada proyecto responde a un objetivo de posicionamiento y no a modas pasajeras.
2. **Filtro Categórico Sobrio (Barra Horizontal):**
   - Botones tipo píldora arquitectónica sin bordes redondeados excesivos: `Todos`, `Marca personal`, `Contenido audiovisual`, `Fotografía`, `Producciones especiales`.
3. **Cuícula de Casos de Estudio:**
   - Retícula de 2 columnas (Desktop) / 1 columna (Móvil).
   - Utiliza `ProjectCard` con badges en versalitas.
   - Cada tarjeta documenta: *Contexto y necesidad*, *Aporte del estudio*, *Piezas finales*.
4. **Módulo de Conversión:** `ConversionCalendarBlock` con copy: *«¿Tienes en mente un proyecto similar? Hablemos de tu idea.»*

---

### PÁGINA 8: `Contacto` (`/contacto`)
- **Propósito:** Centro de conversión limpio, directo y libre de fricciones.
- **Título SEO:** `Contacto y Agenda de Videollamada | Cobalto Carmesí Studios`
- **Metadescripción:** `Agenda una videollamada de diagnóstico, escríbenos por WhatsApp o llama al estudio para conversar sobre tu marca personal o proyecto audiovisual.`

#### Estructura de Secciones
1. **Hero de Contacto:**
   - **H1:** *Iniciemos una conversación sobre tu proyecto.*
   - Explicación de los canales disponibles.
2. **Retícula Principal de Conversión (2 Columnas en Desktop):**
   - **Columna Izquierda (La Vía Rápida y Recomendada):**
     - Tarjeta destacada de **Google Calendar**: Botón grande `Agendar una videollamada` (30 min).
     - Botón directo de **WhatsApp** con texto prellenado.
     - Botón de **Llamada telefónica**.
     - Horarios de atención y tiempo estimado de respuesta.
   - **Columna Derecha (Vía Escrita Complementaria):**
     - Componente `ContactFormMinimal` con exactamente los 3 campos permitidos (Nombre, Contacto, Mensaje).
3. **Preguntas Frecuentes sobre el Contacto y Diagnóstico:**
   - ¿Qué pasa después de agendar? ¿Tiene costo la primera videollamada? ¿Cómo prepararme para la sesión?
4. **Mapa / Cobertura Operativa:**
   - Cuadro textual de cobertura comercial y ciudades de operación habituales `[POR DEFINIR]` sin publicar domicilio particular (`CA-LEGAL-02`).

---

## 4. Matriz de Adaptabilidad Responsiva

| Breakpoint | Ancho Viewport | Columnas Grid | Padding Lateral | Comportamiento Navbar | Comportamiento Tarjetas y Módulos |
|---|---|---|---|---|---|
| **Mobile S** | 375px | 1 col | `px-5` (20px) | Header compacto (Logo + Hamburguesa). Botón CTA oculto dentro del menú. | Tarjetas apiladas 100% de ancho. Tipografía en mínimos de `clamp()`. |
| **Mobile L** | 480px | 1 col | `px-6` (24px) | Idem. | Espaciado vertical holgado (`gap-6`). |
| **Tablet** | 768px | 2 cols | `px-8` (32px) | Menú hamburguesa aún activo o navegación condensada. | Grids de servicios en 2 columnas (`grid-cols-2`). |
| **Desktop** | 1024px | 3 o 4 cols | `px-8` (32px) | Menú horizontal completo visible + botón CTA primario. | Hero en 2 columnas (texto e imagen paralelos). |
| **Desktop Wide** | 1280px+ | 12 cols | `px-12` (48px) | Idem, centrado en `max-w-7xl`. | Retícula arquitectónica editorial de 12 columnas plenamente desplegada. |

---

## 5. Especificaciones de Medios y Optimización (`CA-PERF-01..03`)

1. **Ratios de Aspecto Normativos:**
   - Retratos y Marca Personal: `aspect-[4/5]` (`w-full object-cover object-top`).
   - Producciones Cinematográficas: `aspect-video` (`16:9`).
   - Tomas Aéreas / Panorámicas: `aspect-[21/9]`.
2. **Reglas de Rendimiento:**
   - Todas las imágenes por debajo del pliegue (*below the fold*) deben incluir `loading="lazy"` y `decoding="async"`.
   - La imagen principal del hero debe llevar `loading="eager"` y `fetchpriority="high"`.
   - Todo video de fondo o muestra debe contar con un **poster frame** en formato WebP/AVIF obligatorio (`CA-PERF-02`).
   - Prohibido cualquier video con reproducción automática de sonido (`CA-PERF-03`).

---

## 6. Checklist de Handoff Técnico para `frontend-engineer`

El ingeniero de frontend puede proceder a crear los archivos en Astro mapeados a continuación:

```
src/
├── components/
│   ├── global/
│   │   ├── Navbar.astro               # Cabecera global con blur y menú móvil accesible
│   │   └── Footer.astro               # Pie arquitectónico con las 4 columnas
│   ├── sections/
│   │   ├── ConversionCalendarBlock.astro # Módulo maestro de videollamada
│   │   ├── HeroHome.astro             # Bloque 1 de Inicio
│   │   └── ProcessSteps.astro         # Proceso de 4 fases de Marca Personal
│   ├── cards/
│   │   ├── ServiceCard.astro          # Tarjeta con chasis 1px y versalitas
│   │   └── ProjectCard.astro          # Tarjeta de caso con proportions fijas
│   ├── ui/
│   │   ├── FloatingWhatsApp.astro     # Botón flotante contextual
│   │   ├── FAQAccordion.astro         # Acordeón accesible aria-expanded
│   │   └── BadgeTag.astro             # Etiqueta en versalitas Satoshi
│   └── forms/
│       └── ContactFormMinimal.astro   # Formulario complementario de 3 campos
├── layouts/
│   └── Layout.astro                   # Layout maestro con fuentes locales y meta
└── pages/
    ├── index.astro                    # Inicio (8 bloques)
    ├── marca-personal.astro           # Servicio Prioritario A
    ├── creacion-de-contenido.astro    # Servicio Prioritario B + Drones
    ├── fotografia.astro               # Empresas + Sesiones Particulares
    ├── eventos-sociales.astro         # Eventos Sociales y XV Años
    ├── proyectos.astro                # Casos de estudio y portafolio
    ├── el-estudio.astro               # Dirección creativa y filosofía
    └── contacto.astro                 # Agenda, WhatsApp y Formulario 3 campos
```
