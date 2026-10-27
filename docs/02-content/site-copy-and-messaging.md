# Sistema de Contenidos, Arquitectura de Mensajes y Copy por Página · Cobalto Carmesí Studios

**Status:** Ready for Review  
**Version:** 1.0  
**Last updated:** 2026-10-23  
**Author / Role:** `content-conversion-specialist` (V3.2 — Modo Lite)  
**Skills applied:** `governance-check`  
**Approved decisions relied on:** `D-001` a `D-006` ([`docs/00-project/decisions.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/00-project/decisions.md))  
**Upstream architecture:** [`docs/01-strategy/site-strategy-and-architecture.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/01-strategy/site-strategy-and-architecture.md) (v1.0)  
**Canonical sources:** [`inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md), [`PRODUCT.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/PRODUCT.md), [`VALIDATION.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/VALIDATION.md), [`docs/00-project/facts.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/00-project/facts.md)

> **Gobernanza V3.2 (`PROPOSAL ≠ DECISION ≠ APPROVAL`):**  
> Este documento estructura la arquitectura de mensajes, el copy bloque por bloque de las **8 páginas del sitio** y el sistema de microcopy de conversión para **Cobalto Carmesí Studios**.  
> - Todo bloque etiquetado como **`[CLIENT-PROVIDED / CANONICAL]`** proviene íntegramente del Documento Maestro (`FACT-009`) y debe preservarse sin alteraciones de fondo.  
> - Todo bloque etiquetado como **`[PROPOSED COPY — Ready for Review]`** ha sido desarrollado por `content-conversion-specialist` para completar las páginas interiores bajo el mismo tono, precisión y reglas comerciales (`D-004`), quedando sujeto a validación del Director Creativo (**Darío Ilescas Cruz**).  
> - Ningún marcador **`[POR DEFINIR]`** se inventa ni puede publicarse en producción (`CA-COMM-03`).

---

## 1. Guía de Voz, Tono, Reglas Editoriales y Microcopy Global

### 1.1 Principios de Voz y Tono (`D-001`, `FACT-012`)
La voz de **Cobalto Carmesí Studios** traduce al plano verbal su identidad visual **cinematográfica, editorial y arquitectónica** (con referencias sutiles al Renacimiento y al claroscuro). El valor del servicio y el rigor del criterio deben sostener por sí mismos la percepción *premium*.

| Atributo de Voz | Cómo se expresa en el copy | Qué evitar estrictamente (`CA-COMM-01`, `CA-COMM-02`) |
|---|---|---|
| **Seguro y con criterio** | Habla desde la dirección estratégica y el oficio visual. Explica el *porqué* antes del *qué*: el contenido parte de un posicionamiento e intención definidos. | Fórmulas grandilocuentes o vacías (*«Líderes indiscutibles»*, *«La solución definitiva»*, *«Llevamos tu marca al siguiente nivel»*) o residuos de plantilla en inglés (*«Brand New Features»*, *«Ultimate Solution»*). |
| **Humano y cercano** | Reconoce que estar frente a cámara o estructurar las propias ideas requiere acompañamiento, preparación y dirección empática. | Jerga corporativa fría, tecnicismos innecesarios de marketing o tono agresivo de «infoproducto». |
| **Preciso y transparente** | Delimita con claridad qué capacidades integran cada servicio y cómo se construye cada propuesta a medida después de conocer el proyecto. | Promesas de ventas garantizadas, promesas de viralidad, paquetes prearmados («12 reels al mes»), precios, rangos de inversión o descuentos. |
| **Sofisticado y editorial** | Frases concisas, ritmo pausado, verbos activos y vocabulario vinculado a arquitectura de marca, narrativa, dirección, retrato e iluminación. | Exceso de signos de exclamación, urgencia artificial (*«¡Últimos lugares!»*), emojis en cuerpo de texto o contadores numéricos sin sustento. |

### 1.2 Reglas Editoriales Innegociables (`D-004`, `CA-COMM-01` a `CA-COMM-05`)
1. **Cero precios ni paquetes públicos (`CA-COMM-01`):** Nunca mencionar tarifas, rangos de inversión, promociones ni cantidades fijas de entregables (ej. número de fotos, horas de cobertura o cantidad de videos mensuales). Toda frecuencia, duración y entregable se define en una propuesta personalizada tras la conversación inicial.
2. **Objetivos estratégicos, no garantías (`FACT-008`):** El posicionamiento, el estatus percibido y las conversiones se presentan como objetivos estratégicos hacia los que se orienta el trabajo, jamás como resultados garantizados.
3. **Hipótesis vs. Testimonios (`HYPOTHESIS-01`):** Las necesidades de la audiencia principal se redactan como escenarios de identificación argumentativa en segunda persona, nunca como citas entrecomilladas de clientes.
4. **Delimitación en Creación de Contenido (`FACT-006`):** Dejar siempre explícito que la publicación, el *community management*, la pauta publicitaria y el seguimiento comercial solo se integran cuando se contratan expresamente por separado.
5. **Foco del estudio (`D-002`, `CA-COMM-04`):** La arquitectura de marca personal y la creación de contenido encabezan el discurso. La producción con drones es una capacidad complementaria integrada a la narrativa audiovisual y jamás recupera el antiguo discurso de supervisión de obra de *Sefirot*.

---

### 1.3 Microcopy Global de Navegación (`Header`, Menú Móvil y `Footer`)

#### A. Header / Barra de Navegación Principal (`D-005` — `[CLIENT-PROVIDED / CANONICAL]`)
- **Identidad (Izquierda):** `Cobalto Carmesí Studios` *(Enlaza a `/` — Activo gráfico `[POR DEFINIR]` en `PEND-09`)*.
- **Menú Principal (Centro — 5 ítems exactos):**
  1. `Marca personal` → `/marca-personal`
  2. `Contenido` → `/creacion-de-contenido`
  3. `Fotografía` → `/fotografia`
  4. `Proyectos` → `/proyectos`
  5. `El estudio` → `/el-estudio`
- **CTA Destacado (Derecha):**
  - Texto del botón: `Agendar videollamada`
  - Destino: URL pública de reserva de citas de Google Calendar (`[POR DEFINIR]` en `PEND-04`).
  - Atributo de accesibilidad sugerido (`aria-label`): `Agendar una videollamada de diagnóstico con Cobalto Carmesí Studios`.

#### B. Menú Móvil Desplegable (`[PROPOSED COPY — Ready for Review]`)
- **Botón de apertura / cierre (`aria-label`):** `Abrir menú de navegación` / `Cerrar menú de navegación`
- **Sección 1 · Navegación principal:**
  - `Inicio` (`/`)
  - `Marca personal` (`/marca-personal`)
  - `Contenido` (`/creacion-de-contenido`)
  - `Fotografía` (`/fotografia`)
  - `Proyectos` (`/proyectos`)
  - `El estudio` (`/el-estudio`)
  - `Contacto` (`/contacto`)
- **Sección 2 · Otras capacidades (bloque secundario discreto):**
  - Etiqueta de sección: `Servicios especializados`
  - `Eventos sociales` (`/eventos-sociales`)
  - `Producción audiovisual y drones` (`/creacion-de-contenido#produccion-y-drones`)
- **Sección 3 · Conversión directa al pie del menú móvil:**
  - Botón primario: `Agendar una videollamada` (Google Calendar `[POR DEFINIR]`)
  - Enlace secundario 1: `Escribir por WhatsApp` (`[POR DEFINIR]`)
  - Enlace secundario 2: `Llamar al estudio` (`[POR DEFINIR]`)

#### C. Footer / Pie de Página Global (`D-005` — `[PROPOSED COPY — Ready for Review]`)
- **Columna 1 · Identidad y Dirección:**
  - **Marca:** `Cobalto Carmesí Studios`
  - **Descripción breve:** «Estrategia, narrativa y dirección creativa para hacer visible tu valor. Arquitectura de marca personal, creación de contenido, fotografía y producción audiovisual.»
  - **Crédito de dirección:** `Dirección creativa: Darío Ilescas Cruz`
  - **Ubicación y cobertura:** `[POR DEFINIR: texto comercial de ciudad y cobertura operativa — PEND-06. Prohibido publicar domicilio particular conforme a CA-LEGAL-02]`
- **Columna 2 · Explorar:**
  - Título de columna: `El estudio`
  - Enlaces: `Inicio` (`/`) · `Marca personal` (`/marca-personal`) · `Creación de contenido` (`/creacion-de-contenido`) · `Fotografía` (`/fotografia`) · `Proyectos` (`/proyectos`) · `El estudio` (`/el-estudio`) · `Contacto` (`/contacto`)
- **Columna 3 · Catálogo de Capacidades (con accesos obligatorios `D-005`):**
  - Título de columna: `Servicios`
  - `Arquitectura de marca personal` → `/marca-personal`
  - `Creación de contenido` → `/creacion-de-contenido`
  - `Contenido y fotografía para empresas` → `/fotografia#empresas`
  - `Sesiones fotográficas particulares` → `/fotografia#sesiones-particulares`
  - `Eventos sociales` → `/eventos-sociales` *(Acceso visible obligatorio)*
  - `Producción audiovisual y drones` → `/creacion-de-contenido#produccion-y-drones` *(Acceso visible obligatorio)*
  - `Formación y mentoría` → `/marca-personal#formacion-y-mentoria`
- **Columna 4 · Conversación Comercial:**
  - Título de columna: `Conversemos`
  - Microcopy introductorio: «Agenda una videollamada o escríbenos directamente para conocer tu proyecto.»
  - CTA Primario: `Agendar una videollamada` → Google Calendar `[POR DEFINIR]`
  - WhatsApp: `WhatsApp: [POR DEFINIR — PEND-01]`
  - Teléfono: `Teléfono: [POR DEFINIR — PEND-02]`
  - Correo: `Correo: [POR DEFINIR — PEND-03]`
  - Redes sociales: `Instagram [POR DEFINIR — PEND-05]` · `Facebook [POR DEFINIR — PEND-05]` *(Nota para Frontend: ocultar enlaces de redes hasta contar con URLs oficiales confirmadas para cumplir `CA-COMM-03`)*.
- **Franja Legal Inferior:**
  - Copyright: `© 2026 Cobalto Carmesí Studios. Todos los derechos reservados.`
  - Enlace legal: `Aviso de privacidad` → `/privacidad` (`[POR DEFINIR]` texto legal completo en `PEND-10` — `CA-LEGAL-01`).

---

### 1.4 Matriz Maestra de CTAs y Enlaces Prellenados de WhatsApp (`CA-CONV-01` a `CA-CONV-04`)

> **Instrucción para Frontend (`frontend-engineer`):** Centralizar el número de WhatsApp (`PUBLIC_WHATSAPP_NUMBER`), teléfono (`PUBLIC_PHONE_NUMBER`) y URL de Google Calendar (`PUBLIC_CALENDAR_URL`) en un archivo de configuración global. Utilizar los textos codificados (`URL-encoded`) listos a continuación reemplazando `[POR_DEFINIR_NUMERO]` por el número confirmado con código de país sin signo `+` (ej. `521...`).

| ID CTA | Contexto / Ubicación | Copy Exacto del Botón (`Label`) | Clasificación | Canal / Destino Técnico y Mensaje Prellenado | Evento Analítica (`data-track`) |
|---|---|---|---|---|---|
| **CTA-CAL-01** | Header global / Menú móvil | `Agendar videollamada` | `CLIENT-PROVIDED` | URL pública de Google Calendar (`[POR DEFINIR — PEND-04]`) | `click_calendar_cta` (`location: navbar`) |
| **CTA-CAL-02** | `Inicio` (Bloques 1 y 8), `Marca personal`, `Contacto` | `Agendar una videollamada` | `CLIENT-PROVIDED` | URL pública de Google Calendar (`[POR DEFINIR — PEND-04]`) | `click_calendar_cta` |
| **CTA-CAL-03** | `Inicio` (Bloque 3) | `Explorar cómo podemos trabajar juntos` | `CLIENT-PROVIDED` | `/contacto` o URL pública de Google Calendar (`[POR DEFINIR — PEND-04]`) | `click_calendar_cta` (`location: home_offer`) |
| **CTA-CAL-04** | `Creación de contenido` (Hero y Cierre) | `Hablemos de tu contenido` | `CLIENT-PROVIDED` | URL pública de Google Calendar (`[POR DEFINIR — PEND-04]`) | `click_calendar_cta` (`service: contenido`) |
| **CTA-CAL-05** | `Fotografía` (`#empresas` — Servicio C) | `Cuéntanos tu proyecto` | `CLIENT-PROVIDED` | URL pública de Google Calendar (`[POR DEFINIR — PEND-04]`) | `click_calendar_cta` (`service: fotografia_empresas`) |
| **CTA-CAL-06** | `Fotografía` (Hero y `#sesiones-particulares` — Servicio D) | `Planeemos tu sesión` | `CLIENT-PROVIDED` | URL pública de Google Calendar (`[POR DEFINIR — PEND-04]`) o WhatsApp Fotografía | `click_calendar_cta` (`service: fotografia_particular`) |
| **CTA-CAL-07** | `Creación de contenido` (`#produccion-y-drones` — Servicio F) | `Consultar una producción` | `CLIENT-PROVIDED` | URL pública de Google Calendar (`[POR DEFINIR — PEND-04]`) o WhatsApp Drones | `click_calendar_cta` (`service: drones`) |
| **CTA-CAL-08** | `Proyectos` (Hero y Cierre) | `Hablemos de tu proyecto` | `CLIENT-PROVIDED` | URL pública de Google Calendar (`[POR DEFINIR — PEND-04]`) | `click_calendar_cta` (`location: proyectos`) |
| **CTA-CAL-09** | `El estudio` (Cierre y `#formacion`) | `Conoce cómo podemos ayudarte` | `CLIENT-PROVIDED` | `/contacto` o URL pública de Google Calendar (`[POR DEFINIR — PEND-04]`) | `click_calendar_cta` (`location: el_estudio`) |
| **CTA-WA-01** | **General / `Inicio` / `Marca personal` / `El estudio` / `Contacto`** | `Escribir por WhatsApp` | **`CLIENT-PROVIDED` (`FACT-009`)** | **Texto plano:** «Hola, me interesa trabajar mi marca personal y crear contenido con Cobalto Carmesí. Me gustaría conversar sobre mi proyecto.»<br>**URL template:** `https://wa.me/[POR_DEFINIR_NUMERO]?text=Hola%2C%20me%20interesa%20trabajar%20mi%20marca%20personal%20y%20crear%20contenido%20con%20Cobalto%20Carmes%C3%AD.%20Me%20gustar%C3%ADa%20conversar%20sobre%20mi%20proyecto.` | `click_whatsapp_cta` (`context: marca_personal_general`) |
| **CTA-WA-02** | **`Creación de contenido`** (`/creacion-de-contenido`) | `Escribir por WhatsApp` | `PROPOSED COPY` (`CA-CONV-04`) | **Texto plano:** «Hola, me interesa desarrollar contenido con dirección creativa en Cobalto Carmesí. Me gustaría conversar sobre mi proyecto.»<br>**URL template:** `https://wa.me/[POR_DEFINIR_NUMERO]?text=Hola%2C%20me%20interesa%20desarrollar%20contenido%20con%20direcci%C3%B3n%20creativa%20en%20Cobalto%20Carmes%C3%AD.%20Me%20gustar%C3%ADa%20conversar%20sobre%20mi%20proyecto.` | `click_whatsapp_cta` (`context: contenido`) |
| **CTA-WA-03** | **Sección `Producción audiovisual y drones`** (`#produccion-y-drones`) | `Consultar por WhatsApp` / `Consultar una producción` | `PROPOSED COPY` (`CA-CONV-04`) | **Texto plano:** «Hola, me interesa consultar una producción audiovisual / tomas con drones con Cobalto Carmesí. Me gustaría revisar los detalles y locación de mi proyecto.»<br>**URL template:** `https://wa.me/[POR_DEFINIR_NUMERO]?text=Hola%2C%20me%20interesa%20consultar%20una%20producci%C3%B3n%20audiovisual%20%2F%20tomas%20con%20drones%20con%20Cobalto%20Carmes%C3%AD.%20Me%20gustar%C3%ADa%20revisar%20los%20detalles%20y%20locaci%C3%B3n%20de%20mi%20proyecto.` | `click_whatsapp_cta` (`context: drones`) |
| **CTA-WA-04** | **`Fotografía` — Sesiones Particulares** (`/fotografia#sesiones-particulares`) | `Planeemos tu sesión por WhatsApp` / `Escribir por WhatsApp` | `PROPOSED COPY` (`CA-CONV-04`) | **Texto plano:** «Hola, me interesa planear una sesión fotográfica con dirección artística en Cobalto Carmesí. Me gustaría conversar sobre el concepto y los detalles.»<br>**URL template:** `https://wa.me/[POR_DEFINIR_NUMERO]?text=Hola%2C%20me%20interesa%20planear%20una%20sesi%C3%B3n%20fotogr%C3%A1fica%20con%20direcci%C3%B3n%20art%C3%ADstica%20en%20Cobalto%20Carmes%C3%AD.%20Me%20gustar%C3%ADa%20conversar%20sobre%20el%20concepto%20y%20los%20detalles.` | `click_whatsapp_cta` (`context: fotografia_particular`) |
| **CTA-WA-05** | **`Fotografía` — Empresas** (`/fotografia#empresas`) | `Escribir por WhatsApp` | `PROPOSED COPY` (`CA-CONV-04`) | **Texto plano:** «Hola, me interesa realizar fotografía y contenido para mi empresa con Cobalto Carmesí. Me gustaría conversar sobre nuestro proyecto.»<br>**URL template:** `https://wa.me/[POR_DEFINIR_NUMERO]?text=Hola%2C%20me%20interesa%20realizar%20fotograf%C3%ADa%20y%20contenido%20para%20mi%20empresa%20con%20Cobalto%20Carmes%C3%AD.%20Me%20gustar%C3%ADa%20conversar%20sobre%20nuestro%20proyecto.` | `click_whatsapp_cta` (`context: fotografia_empresas`) |
| **CTA-WA-06** | **`Eventos sociales`** (`/eventos-sociales`) | `Consultar mi fecha por WhatsApp` *(Primario)* / `Contactar por WhatsApp` | `CLIENT-PROVIDED` (Label) + `PROPOSED COPY` (Msg `CA-CONV-04`) | **Texto plano:** «Hola, me interesa consultar disponibilidad para la cobertura de fotografía y video de un evento social con Cobalto Carmesí. Me gustaría compartirles la fecha y detalles.»<br>**URL template:** `https://wa.me/[POR_DEFINIR_NUMERO]?text=Hola%2C%20me%20interesa%20consultar%20disponibilidad%20para%20la%20cobertura%20de%20fotograf%C3%ADa%20y%20video%20de%20un%20evento%20social%20con%20Cobalto%20Carmes%C3%AD.%20Me%20gustar%C3%ADa%20compartirles%20la%20fecha%20y%20detalles.` | `click_whatsapp_cta` (`context: eventos_sociales`) |
| **CTA-WA-07** | **`Proyectos`** (`/proyectos`) | `Escribir por WhatsApp` | `PROPOSED COPY` | **Texto plano:** «Hola, vi el portafolio de Cobalto Carmesí y me gustaría conversar sobre un proyecto para mi marca.»<br>**URL template:** `https://wa.me/[POR_DEFINIR_NUMERO]?text=Hola%2C%20vi%20el%20portafolio%20de%20Cobalto%20Carmes%C3%AD%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto%20para%20mi%20marca.` | `click_whatsapp_cta` (`context: proyectos`) |
| **CTA-TEL-01** | `Inicio` (Bloque 8), `Contacto`, `Footer` | `Llamar al estudio` | `CLIENT-PROVIDED` | `tel:[POR_DEFINIR_TELEFONO — PEND-02]` | `click_phone_cta` |

---

## 2. Copy Completo Bloque por Bloque de las 8 Páginas

---

### PÁGINA 1: `Inicio` (`/`)

- **Objetivo de la vista (`FACT-009`):** Presentar la propuesta de valor, establecer el posicionamiento estratégico del estudio, recorrer los 8 bloques narrativos aprobados y conducir a una conversación comercial calificada.
- **Title SEO (`FACT-009` / `CA-SEO-02`):** `Cobalto Carmesí | Marca personal y creación de contenido`
- **Meta Description (`FACT-009` / `CA-SEO-02`):** `Arquitectura de marca personal, fotografía y producción audiovisual para comunicar tu valor. Agenda una videollamada con Cobalto Carmesí Studios.`

---

#### Bloque 1.1 — Primera pantalla (Hero) `[CLIENT-PROVIDED / CANONICAL]`
- **Antetítulo (Eyebrow):** `Cobalto Carmesí Studios`
- **H1:** `Tu experiencia merece una presencia a su altura.`
- **Descripción (Lead):**
  > Arquitectura de marca personal y creación de contenido para construir posicionamiento, elevar tu valor percibido y abrir conversaciones que impulsen tu negocio.
- **CTA principal:** `Agendar una videollamada` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]`)*
- **CTA secundario:** `Ver nuestro trabajo` *(Destino: `/proyectos`)*
- **Texto de apoyo (Microcopy bajo CTAs):** `Conversemos sobre tu marca y lo que quieres lograr.`
- **Nota de dirección visual para `product-designer` (`CA-COMM-04`, `CA-PERF-02`):** Pieza breve de trabajo real en marca personal, retratos y producción; incluir imagen de respaldo (*poster*) para carga inicial (`[POR DEFINIR — PEND-09]`). **Restricción estricta:** No usar un montaje dominado por drones o eventos sociales.

---

#### Bloque 1.2 — Problema y aspiración `[CLIENT-PROVIDED / CANONICAL]`
- **H2:** `Que tu presencia comunique el nivel de tu trabajo.`
- **Párrafo principal:**
  > Has construido experiencia, conocimientos y criterio. Darles una expresión clara requiere definir qué te distingue, cómo lo comunicas y qué debe reconocer tu audiencia cuando te encuentra. Ahí comienza nuestro trabajo.
- **Nota de diseño para `product-designer`:** Bloque de respiro editorial con composición tipográfica protagonista y contraste claroscuro sutil, permitiendo que la frase central tenga peso arquitectónico antes de presentar la oferta.

---

#### Bloque 1.3 — Oferta principal `[CLIENT-PROVIDED / CANONICAL]`
- **H2:** `Estrategia para posicionarte. Contenido para hacerlo visible.`
- **Tarjeta / Columna 1 (Servicio Prioritario A):**
  - **H3:** `Arquitectura de marca personal`
  - **Párrafo:** «Definimos el lugar que quieres ocupar y construimos una narrativa que lo sostenga.»
  - **Enlace contextual sugerido (`[PROPOSED MICROCOPY]`):** `Conocer Marca personal →` *(Destino: `/marca-personal`)*
- **Tarjeta / Columna 2 (Servicio Prioritario B):**
  - **H3:** `Creación de contenido`
  - **Párrafo:** «Transformamos tu experiencia en imágenes, historias y piezas con una intención definida.»
  - **Enlace contextual sugerido (`[PROPOSED MICROCOPY]`):** `Explorar Creación de contenido →` *(Destino: `/creacion-de-contenido`)*
- **CTA de sección:** `Explorar cómo podemos trabajar juntos` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]` o `/contacto`)*

---

#### Bloque 1.4 — Proceso `[CLIENT-PROVIDED / CANONICAL]`
- **H2:** `Así construimos tu presencia.`
- **Lista estructurada en 4 pasos (`H3` + descripción):**
  1. **`01.` Entendemos tu punto de partida.**  
     Conocemos tu trayectoria, audiencia, percepción actual y objetivos.
  2. **`02.` Definimos la dirección.**  
     Trabajamos posicionamiento, narrativa y estrategia de contenido.
  3. **`03.` Damos forma a tu comunicación.**  
     Desarrollamos conceptos, guiones, fotografía y video con dirección creativa.
  4. **`04.` Revisamos y afinamos.**  
     Evaluamos el trabajo según el alcance y las métricas acordadas para orientar los siguientes pasos.

---

#### Bloque 1.5 — Proyectos `[CLIENT-PROVIDED / CANONICAL]`
- **H2:** `Nuestro criterio, llevado a la práctica.`
- **Párrafo:**
  > Explora una selección de proyectos de estrategia, contenido, fotografía y producción audiovisual.
- **Muestra de casos (`[POR DEFINIR — PEND-08]`):** Renderizar únicamente las tarjetas de casos con autorización y piezas finales validadas (`PORT-01` a `PORT-04`). Ver estructura y respaldo en la **Página 6 (`/proyectos`)**.
- **CTA:** `Ver proyectos` *(Destino: `/proyectos`)*

---

#### Bloque 1.6 — Servicios complementarios `[CLIENT-PROVIDED / CANONICAL + ENRUTAMIENTO ESTRATÉGICO]`
- **H2:** `Una mirada creativa para distintos proyectos.`
- **Párrafo canónico:**
  > También desarrollamos contenido para empresas, sesiones fotográficas, cobertura de eventos sociales y producciones con imagen aérea.
- **Grilla de 4 enlaces a sus páginas/secciones correspondientes (`Sección 5.3 de Estrategia` — `[PROPOSED MICROCOPY DE TARJETAS]`):**
  1. **H3:** `Contenido para empresas`  
     - **Microcopy:** Fotografía corporativa, retratos de equipo y piezas audiovisuales con identidad coherente.  
     - **Enlace:** `Ver contenido para empresas →` *(Destino exacto: `/fotografia#empresas`)*
  2. **H3:** `Sesiones fotográficas`  
     - **Microcopy:** Retratos individuales con concepto visual, iluminación cuidada y dirección artística.  
     - **Enlace:** `Ver sesiones particulares →` *(Destino exacto: `/fotografia#sesiones-particulares`)*
  3. **H3:** `Cobertura de eventos sociales`  
     - **Microcopy:** Fotografía y video de celebraciones, incluidos XV años, enfocados en sus protagonistas.  
     - **Enlace:** `Ver eventos sociales →` *(Destino exacto: `/eventos-sociales`)*
  4. **H3:** `Producciones con imagen aérea`  
     - **Microcopy:** Producción audiovisual terrestre y tomas con drones integradas a la historia de tu proyecto.  
     - **Enlace:** `Ver producción y drones →` *(Destino exacto: `/creacion-de-contenido#produccion-y-drones`)*

---

#### Bloque 1.7 — El estudio `[CLIENT-PROVIDED / CANONICAL]`
- **H2:** `Cobalto Carmesí: estrategia, narrativa y dirección creativa.`
- **Párrafo:**
  > Bajo la dirección creativa de Darío Ilescas, conectamos el pensamiento estratégico con la producción visual para construir marcas y proyectos con identidad. Nuestro trabajo reúne análisis, sensibilidad artística y acompañamiento durante el proceso creativo.
- **Enlace secundario opcional (`[PROPOSED MICROCOPY]`):** `Conocer el estudio →` *(Destino: `/el-estudio`)*

---

#### Bloque 1.7-B (Integración recomendada antes del cierre) — Preguntas frecuentes `[CLIENT-PROVIDED / CANONICAL — Sección 7]`
> **Nota de arquitectura de contenido:** Las 5 Preguntas Frecuentes oficiales del Documento Maestro (Sección 7) se integran como acordeón limpio antes del bloque de cierre en `Inicio` (y se reutilizan contextualmente en páginas interiores) para despejar objeciones justo antes del llamado a la acción final.

- **H2 (`[PROPOSED HEADING]`):** `Preguntas frecuentes`
- **Ítems del acordeón (`[CLIENT-PROVIDED / CANONICAL]`):**
  1. **H3 (Pregunta):** `¿Trabajan con una profesión o sector específico?`  
     **Respuesta:** Trabajamos con profesionales, empresarios y creadores de distintos sectores. El punto de partida es entender su experiencia, sus objetivos y el público al que quieren llegar.
  2. **H3 (Pregunta):** `¿Necesito experiencia frente a cámara?`  
     **Respuesta:** Te acompañamos con preparación y dirección para desarrollar una comunicación clara y natural.
  3. **H3 (Pregunta):** `¿Puedo contratar solo una sesión o una producción?`  
     **Respuesta:** Sí. Además de proyectos integrales, desarrollamos sesiones fotográficas y producciones específicas. Conversemos sobre lo que necesitas.
  4. **H3 (Pregunta):** `¿Cómo recibo una propuesta?`  
     **Respuesta:** Agenda una videollamada o contáctanos por WhatsApp o teléfono. Después de conocer tu proyecto, definimos un alcance y una propuesta personalizada.
  5. **H3 (Pregunta):** `¿El servicio incluye manejo de redes?`  
     **Respuesta:** El alcance se define por proyecto. La creación de contenido, la publicación y la gestión de comunidad se especifican por separado en la propuesta.

---

#### Bloque 1.8 — Cierre `[CLIENT-PROVIDED / CANONICAL]`
- **H2:** `Hablemos de la presencia que quieres construir.`
- **Párrafo:**
  > Cuéntanos dónde estás y hacia dónde quieres llevar tu marca. En una videollamada podremos conocer tu proyecto y definir el siguiente paso.
- **CTA principal:** `Agendar una videollamada` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]`)*
- **Alternativas:**
  - `Escribir por WhatsApp` *(Destino: `CTA-WA-01` `[POR DEFINIR — PEND-01]`)*
  - `Llamar al estudio` *(Destino: `CTA-TEL-01` `[POR DEFINIR — PEND-02]`)*

---
---

### PÁGINA 2: `Marca personal` (`/marca-personal`)

- **Objetivo de la vista:** Explicar a profundidad el servicio prioritario #1 (**A. Arquitectura de marca personal**), articular las necesidades estratégicas que resuelve (`HYPOTHESIS-01`), desglosar sus 9 capacidades, detallar el acompañamiento frente a cámara, integrar la sección anclada **`#formacion-y-mentoria` (Servicio G)** y conducir a la reserva de videollamada.
- **Title SEO (`[PROPOSED COPY]`):** `Arquitectura de Marca Personal | Cobalto Carmesí Studios`
- **Meta Description (`[PROPOSED COPY]`):** `Definimos tu posicionamiento, organizamos tu narrativa y dirigimos tu presencia frente a cámara para conectar tu experiencia con tu audiencia ideal.`

---

#### Bloque 2.1 — Hero de Marca Personal `[CLIENT-PROVIDED / CANONICAL + PROPOSED CONTEXT]`
- **Antetítulo (`[PROPOSED COPY]`):** `Servicio prioritario · Arquitectura de marca personal`
- **H1 (`[CLIENT-PROVIDED / CANONICAL — Servicio A]`):** `Dale estructura a lo que te hace valioso.`
- **Descripción principal (`[CLIENT-PROVIDED / CANONICAL — Servicio A]`):**
  > Definimos tu posicionamiento, organizamos tu narrativa y diseñamos una presencia que conecte tu experiencia con las personas a las que quieres llegar.
- **CTA principal (`[CLIENT-PROVIDED / CANONICAL]`):** `Agendar una videollamada` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]`)*
- **CTA secundario (`[PROPOSED COPY]`):** `Escribir por WhatsApp` *(Destino: `CTA-WA-01` `[POR DEFINIR — PEND-01]`)*
- **Nota de dirección visual para `product-designer`:** Retrato editorial con carácter e iluminación tipo claroscuro o encuadre arquitectónico de sesión real de marca personal (`[POR DEFINIR — PEND-09]`).

---

#### Bloque 2.2 — El desafío de percepción y las necesidades que abordamos `[PROPOSED COPY basado en HYPOTHESIS-01 / Sección 2]`
> **Regla de gobernanza (`HYPOTHESIS-01`):** Estos seis escenarios traducen las hipótesis de comunicación de la Sección 2 del Documento Maestro como narrativa de identificación profesional. **Bajo ninguna circunstancia deben maquetarse como citas, reseñas o testimonios de clientes.**

- **Antetítulo:** `Para quién diseñamos este proceso`
- **H2:** `Cuando tu trayectoria supera lo que proyecta tu presencia actual.`
- **Párrafo introductorio:**
  > Trabajamos con empresarios, directivos, especialistas, consultores, artistas y creadores de distintos sectores que han construido una carrera sólida y buscan invertir en una presencia pública coherente con su nivel profesional.
- **Grilla de 6 necesidades estratégicas (`H3` + párrafo breve):**
  1. **H3:** `Alinear tu presencia con tu experiencia real`  
     Que quien visite tus perfiles o conozca tu trabajo perciba de inmediato el rigor, la trayectoria y el criterio que te respaldan en tu actividad diaria.
  2. **H3:** `Encontrar una diferenciación clara y un discurso propio`  
     Dejar atrás lugares comunes de tu industria para articular una postura auténtica, reconocible y difícil de imitar.
  3. **H3:** `Convertir conocimientos e historias en contenido relevante`  
     Traducir tu dominio técnico, tus procesos y tu visión en mensajes estructurados que aporten valor y despierten interés en tu audiencia.
  4. **H3:** `Proyectar autoridad y una imagen consistente`  
     Integrar fondo y forma —identidad verbal, dirección fotográfica y realización audiovisual— bajo un mismo estándar estético y editorial.
  5. **H3:** `Mejorar tu comunicación frente a cámara`  
     Contar con preparación previa, guionización natural y dirección escénica durante el rodaje para expresarte con solidez y tranquilidad.
  6. **H3:** `Abrir conversaciones con potencial comercial`  
     Construir confianza previa en las personas correctas para que el acercamiento hacia tus servicios o proyectos ocurra desde una posición de autoridad.

---

#### Bloque 2.3 — Capacidades de Arquitectura de Marca Personal `[CLIENT-PROVIDED / CANONICAL (Capacidades A) + PROPOSED DESCRIPTIONS]`
- **Antetítulo:** `Alcance estratégico y creativo`
- **H2:** `Los cimientos de una marca personal con dirección.`
- **Párrafo introductorio (`[PROPOSED COPY]`):**
  > Antes de encender una cámara o escribir un guion, ordenamos la arquitectura que sostiene tu nombre. Nuestro catálogo reúne nueve capacidades estratégicas que configuramos según tu punto de partida:
- **Desglose de las 9 capacidades canónicas del Servicio A (`H3` canónico + microcopy explicativo propuesto):**
  1. **H3:** `Diagnóstico y auditoría de percepción`  
     Analizamos cómo se percibe hoy tu presencia digital y presencial frente a lo que realmente ofreces y el lugar que buscas ocupar.
  2. **H3:** `Benchmarking y análisis de contexto`  
     Estudiamos el lenguaje visual y verbal de tu sector para identificar oportunidades de diferenciación reales.
  3. **H3:** `Definición de públicos`  
     Perfilamos con precisión a las personas, decisores o clientes a los que necesitas hablarles, entendiendo sus criterios de elección.
  4. **H3:** `Diferenciación y posicionamiento`  
     Establecemos el ángulo estratégico y la propuesta de valor que hacen relevante tu perfil frente a otras alternativas.
  5. **H3:** `Identidad verbal`  
     Definimos el tono, el vocabulario, la postura editorial y las líneas argumentales que dan coherencia a tu voz.
  6. **H3:** `Territorios narrativos`  
     Delimitamos los temas centrales desde los cuales construirás autoridad, afinidad y conversación con tu audiencia.
  7. **H3:** `Pilares de contenido`  
     Traducimos tus territorios narrativos en líneas temáticas accionables para tus canales digitales y apariciones públicas.
  8. **H3:** `Estrategia de comunicación`  
     Trazamos la hoja de ruta que conecta tu narrativa con los formatos, canales y objetivos estratégicos de posicionamiento, estatus percibido y conversión.
  9. **H3:** `Mentoría y dirección de presencia frente a cámara`  
     Te acompañamos de manera práctica para pulir tu expresión corporal, ritmo, dicción y seguridad al transmitir tus ideas en video y fotografía.
- **Nota de alcance comercial (`FACT-007`, `D-004` — `[PROPOSED COPY]`):**
  > *Cada proyecto es único. La profundidad, duración, entregables e integración con producción de contenido se definen en una propuesta personalizada tras nuestra primera conversación.*

---

#### Bloque 2.4 — El método de trabajo `[CLIENT-PROVIDED / CANONICAL (4 pasos) + PROPOSED CONTEXT]`
- **Antetítulo:** `Nuestro proceso`
- **H2:** `De la claridad estratégica a la expresión visual.`
- **Pasos (`H3` canónico + desarrollo contextual):**
  1. **H3:** `1. Entendemos tu punto de partida.`  
     Conversamos a fondo sobre tu trayectoria, tu modelo de negocio, tu audiencia actual y los objetivos hacia los que quieres dirigir tu reputación.
  2. **H3:** `2. Definimos la dirección.`  
     Construimos el documento rector de tu arquitectura de marca personal: posicionamiento, identidad verbal, territorios narrativos y pilares de comunicación.
  3. **H3:** `3. Damos forma a tu comunicación.`  
     Con la estrategia aprobada, pasamos al set: desarrollamos conceptos, guiones, sesiones de retrato editorial y piezas audiovisuales dirigidas paso a paso.
  4. **H3:** `4. Revisamos y afinamos.`  
     Evaluamos la consistencia de la ejecución según el alcance y las métricas acordadas para orientar la evolución de tu marca.

---

#### Bloque 2.5 — Sección Anclada `#formacion-y-mentoria`: Formación y mentoría (Servicio G) `[CLIENT-PROVIDED / CANONICAL + PROPOSED EXPANSION]`
> **ID de ancla obligatorio en HTML:** `id="formacion-y-mentoria"` (Resolución `RECOMMENDATION-01` para el Servicio G).

- **Antetítulo (`[PROPOSED COPY]`):** `Capacidad complementaria · Acompañamiento especializado`
- **H2 (`[CLIENT-PROVIDED / CANONICAL — Servicio G]`):** `Formación y mentoría: fortalece la forma en que comunicas tu valor.`
- **Párrafo canónico (`[CLIENT-PROVIDED / CANONICAL — Servicio G]`):**
  > Acompañamos a profesionales y equipos en comunicación, desenvolvimiento frente a cámara y habilidades comerciales.
- **Párrafo de desarrollo (`[PROPOSED COPY]`):**
  > Cuando el proyecto requiere desarrollar capacidades internas —ya sea para un portavoz individual o para el equipo comercial y de especialistas de una organización—, diseñamos sesiones de entrenamiento práctico orientadas a estructurar mensajes claros, adquirir solvencia ante la lente y conducir conversaciones comerciales con mayor seguridad.
- **Tres ejes de acompañamiento (`H3` — `[PROPOSED COPY]`):**
  - **H3:** `Comunicación y estructura de mensaje` — Ordenar ideas complejas en argumentos claros y persuasivos.
  - **H3:** `Desenvolvimiento frente a cámara` — Práctica dirigida para proyectar naturalidad, ritmo y presencia en grabaciones o entrevistas.
  - **H3:** `Habilidades comerciales consultivas` — Alinear el discurso del equipo con la propuesta de valor de la marca.
- **CTA de la sección (`[PROPOSED COPY]`):** `Consultar por formación y mentoría` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]` o `CTA-WA-01`)*

---

#### Bloque 2.6 — Preguntas frecuentes sobre Marca Personal `[CLIENT-PROVIDED / CANONICAL]`
- **H2:** `Dudas frecuentes sobre el proceso`
- Mostrar las preguntas canónicas **1, 2, 4 y 5** de la Sección 7 del Documento Maestro:
  - *¿Trabajan con una profesión o sector específico?*
  - *¿Necesito experiencia frente a cámara?*
  - *¿Cómo recibo una propuesta?*
  - *¿El servicio incluye manejo de redes?*

---

#### Bloque 2.7 — Cierre de Conversión `[PROPOSED COPY alineado a Bloque 8 de Inicio]`
- **H2:** `Construyamos una presencia que represente quién eres hoy.`
- **Párrafo:**
  > Agenda una videollamada de diagnóstico para conversar sobre tu trayectoria, tus objetivos estratégicos y el alcance ideal para tu marca personal.
- **CTA principal:** `Agendar una videollamada` *(Google Calendar `[POR DEFINIR — PEND-04]`)*
- **Alternativas:** `Escribir por WhatsApp` (`CTA-WA-01`) · `Llamar al estudio` (`CTA-TEL-01`)

---
---

### PÁGINA 3: `Creación de contenido` (`/creacion-de-contenido`)

- **Objetivo de la vista:** Presentar el servicio prioritario #2 (**B. Creación de contenido**), enfatizar que toda pieza nace de una intención y dirección creativa, detallar las 11 capacidades de realización, establecer con transparencia los alcances opcionales bajo contratación expresa (`FACT-006`) e integrar la sección dedicada con ancla **`#produccion-y-drones` (Servicio F: Producción audiovisual y drones)**.
- **Title SEO (`[PROPOSED COPY]`):** `Creación de Contenido y Producción Audiovisual | Cobalto Carmesí`
- **Meta Description (`[PROPOSED COPY]`):** `Desarrollamos conceptos, guiones, fotografía y video con dirección creativa para comunicar tu valor con claridad, personalidad y consistencia.`

---

#### Bloque 3.1 — Hero de Creación de Contenido `[CLIENT-PROVIDED / CANONICAL + PROPOSED CONTEXT]`
- **Antetítulo (`[PROPOSED COPY]`):** `Servicio prioritario · Creación de contenido`
- **H1 (`[CLIENT-PROVIDED / CANONICAL — Servicio B]`):** `Convierte tu conocimiento en contenido con dirección.`
- **Descripción principal (`[CLIENT-PROVIDED / CANONICAL — Servicio B]`):**
  > Desarrollamos conceptos, guiones, fotografía y video para comunicar tu valor con claridad, personalidad y consistencia.
- **CTA principal (`[CLIENT-PROVIDED / CANONICAL]`):** `Hablemos de tu contenido` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]`)*
- **CTA secundario (`[PROPOSED COPY]`):** `Escribir por WhatsApp` *(Destino: `CTA-WA-02` `[POR DEFINIR — PEND-01]`)*

---

#### Bloque 3.2 — Enfoque: Estrategia que dirige la producción `[PROPOSED COPY basado en Sección 3 y Bloque 3]`
- **Antetítulo:** `Criterio editorial y audiovisual`
- **H2:** `No producimos piezas aisladas; construimos una narrativa coherente.`
- **Párrafo 1:**
  > Publicar sin una dirección clara diluye la percepción de una marca. En Cobalto Carmesí cada jornada de grabación y cada sesión fotográfica parten de un posicionamiento definido: sabemos qué queremos comunicar, a quién nos dirigimos y qué reacción buscamos provocar.
- **Párrafo 2:**
  > Integramos estrategia, guion, dirección frente a cámara, iluminación de corte cinematográfico y postproducción para que tu audiencia reconozca tu criterio en cada formato.

---

#### Bloque 3.3 — Capacidades de Creación de Contenido `[CLIENT-PROVIDED / CANONICAL (Capacidades B) + PROPOSED STRUCTURE]`
- **Antetítulo:** `Capacidades de realización`
- **H2:** `De la planeación editorial a la pieza terminada.`
- **Agrupación editorial de las 11 capacidades canónicas del Servicio B (`H3` + listado canónico):**
  1. **H3:** `Planeación editorial, storytelling y guiones`
     - **Planeación editorial:** Estructura de temas, ángulos e intenciones comunicativas por etapa.
     - **Storytelling:** Construcción de relatos que conectan tu experiencia y casos reales con los intereses de tu audiencia.
     - **Guiones:** Desarrollo de estructuras habladas y escaletas pensadas para sonar naturales y precisas en cámara.
  2. **H3:** `Formatos audiovisuales y fotografía para redes`
     - **Reels y formatos verticales:** Piezas dinámicas con gancho narrativo, ritmo visual y estética cuidada.
     - **Videos de autoridad:** Cápsulas de análisis, opinión experta y profundización temática.
     - **Entrevistas y testimonios:** Conversaciones dirigidas que documentan procesos, visiones y experiencias reales.
     - **Piezas de campaña:** Realización audiovisual para lanzamientos, anuncios o iniciativas específicas.
     - **Fotografía para redes:** Retratos en contexto y activos visuales coherentes con la línea gráfica de tu marca.
  3. **H3:** `Dirección en set y postproducción`
     - **Dirección durante la grabación:** Acompañamiento escénico en rodaje para cuidar tu expresión, tono de voz, postura e iluminación.
     - **Postproducción:** Edición, montaje, diseño sonoro y corrección de color con criterio editorial y cinematográfico.

---

#### Bloque 3.4 — Claridad sobre el alcance y servicios opcionales `[CLIENT-PROVIDED / CANONICAL (FACT-006) + PROPOSED FRAMING]`
> **Regla obligatoria (`FACT-006`):** El Documento Maestro exige aclarar que publicación, *community management*, pauta y seguimiento comercial solo se incorporan cuando estén expresamente contratados y no deben presentarse como inclusiones automáticas.

- **H2:** `Un alcance definido a la medida de tu operación.`
- **Párrafo principal (`[PROPOSED COPY]`):**
  > Nuestro núcleo de trabajo es la conceptualización, dirección y realización de contenido de alto valor. Las cantidades de piezas, frecuencias de rodaje, duración, canales y entregables se definen de manera personalizada en cada propuesta, según los objetivos y recursos de tu proyecto.
- **Nota destacada de transparencia comercial (`[CLIENT-PROVIDED / CANONICAL — Sección 4.B y FAQ 5]`):**
  > **Sobre la gestión de canales y difusión:** La creación de contenido se define por proyecto. Servicios como **publicación en plataformas, *community management* (gestión de comunidad), pauta publicitaria y seguimiento comercial** no son inclusiones automáticas; se especifican e integran únicamente cuando son requeridos y contratados expresamente dentro de la propuesta.

---

#### Bloque 3.5 — Sección Anclada `#produccion-y-drones`: Producción audiovisual y drones (Servicio F) `[CLIENT-PROVIDED / CANONICAL + PROPOSED EXPANSION]`
> **ID de ancla obligatorio en HTML:** `id="produccion-y-drones"` (Resolución `RECOMMENDATION-01` para enlazar desde el Bloque 6 de `Inicio` y el `Footer`).  
> **Restricción de marca (`D-002`, `CA-COMM-04`):** Presentar los drones como una capacidad narrativa integrada al lenguaje audiovisual del estudio, sin recuperar jamás el posicionamiento antiguo de supervisión técnica de obra de *Sefirot*.

- **Antetítulo (`[PROPOSED COPY]`):** `Capacidad especializada · Realización terrestre y aérea`
- **H2 (`[CLIENT-PROVIDED / CANONICAL — Servicio F]`):** `Producción audiovisual y drones: una mirada que amplía tu historia.`
- **Párrafo canónico (`[CLIENT-PROVIDED / CANONICAL — Servicio F]`):**
  > Integramos producción terrestre y tomas aéreas para proyectos comerciales, institucionales y de cobertura.
- **Párrafo de desarrollo (`[PROPOSED COPY]`):**
  > La perspectiva aérea adquiere verdadero valor cuando responde a un guion y a una intención visual. Combinamos cámara en tierra, iluminación, movimiento y tomas con drones para situar espacios arquitectónicos, dimensionar proyectos empresariales o enriquecer el ritmo cinematográfico de una pieza institucional o documental.
- **Aplicaciones principales (`H3` — `[PROPOSED COPY]`):**
  - **H3:** `Proyectos comerciales y de marca` — Piezas promocionales y lanzamientos que integran escala espacial y narrativa en tierra.
  - **H3:** `Producciones institucionales` — Recorridos visuales, instalaciones, infraestructura y contexto operativo de empresas.
  - **H3:** `Coberturas especiales` — Registro audiovisual integrado para eventos corporativos, culturales o producciones en locación.
- **Nota de viabilidad operativa (`[CLIENT-PROVIDED / CANONICAL — Sección 4.F]`):**
  > *Nota operativa: La viabilidad de tomas aéreas se revisa en cada proyecto según la locación, permisos aplicables y condiciones de operación.*
- **CTA primario del bloque (`[CLIENT-PROVIDED / CANONICAL — Servicio F]`):** `Consultar una producción` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]` o `CTA-WA-03`)*
- **CTA secundario del bloque (`[PROPOSED COPY]`):** `Consultar por WhatsApp` *(Destino: `CTA-WA-03` con mensaje contextualizado de producción/drones `[POR DEFINIR — PEND-01]`)*

---

#### Bloque 3.6 — Cierre de Conversión `[PROPOSED COPY]`
- **H2:** `Demos forma a las historias que representan tu trabajo.`
- **Párrafo:**
  > Cuéntanos qué quieres comunicar y qué tipo de producción necesitas —desde una jornada específica hasta el desarrollo continuo de contenido para tu marca—.
- **CTA principal (`[CLIENT-PROVIDED / CANONICAL]`):** `Hablemos de tu contenido` *(Google Calendar `[POR DEFINIR — PEND-04]`)*
- **Alternativas:** `Escribir por WhatsApp` (`CTA-WA-02`) · `Llamar al estudio` (`CTA-TEL-01`)

---
---

### PÁGINA 4: `Fotografía` (`/fotografia`)

- **Objetivo de la vista (`Sección 5 del Documento Maestro`):** Articular la mirada fotográfica del estudio (iluminación, claroscuro sutil, composición editorial y dirección frente a la lente) y **separar con total claridad** los dos mundos: **`#empresas` (Servicio C: Contenido y fotografía para empresas)** y **`#sesiones-particulares` (Servicio D: Sesiones fotográficas particulares)**.
- **Title SEO (`[PROPOSED COPY]`):** `Fotografía para Empresas y Sesiones Particulares | Cobalto Carmesí`
- **Meta Description (`[PROPOSED COPY]`):** `Fotografía corporativa, retratos de equipo y sesiones particulares con dirección artística e iluminación editorial en Cobalto Carmesí Studios.`

---

#### Bloque 4.1 — Hero Editorial de Fotografía `[PROPOSED COPY + CLIENT-PROVIDED CTA]`
- **Antetítulo (`[PROPOSED COPY]`):** `Dirección fotográfica y retrato editorial`
- **H1 (`[PROPOSED COPY]`):** `Imágenes con intención, carácter y dirección artística.`
- **Descripción (`[PROPOSED COPY]`):**
  > La fotografía construye la primera impresión de una persona o de una organización. En Cobalto Carmesí trabajamos la luz, la composición y la expresión para crear retratos y acervos visuales que transmitan identidad, solidez y presencia.
- **Selector rápido de ruta (Anclas internas en Hero — `[PROPOSED MICROCOPY]`):**
  - `Para empresas y equipos ↓` *(Ancla a `#empresas`)*
  - `Sesiones particulares ↓` *(Ancla a `#sesiones-particulares`)*
- **CTA principal de la vista (`[CLIENT-PROVIDED / CANONICAL — Tabla Sección 5]`):** `Planeemos tu sesión` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]` o `CTA-WA-04`)*

---

#### Bloque 4.2 — Sección Anclada `#empresas`: Contenido y fotografía para empresas (Servicio C) `[CLIENT-PROVIDED / CANONICAL + PROPOSED EXPANSION]`
> **ID de ancla obligatorio en HTML:** `id="empresas"` (Recibe el tráfico del Bloque 6 de `Inicio` «Contenido para empresas» y del `Footer`).

- **Antetítulo (`[PROPOSED COPY]`):** `Para organizaciones y firmas · Servicio C`
- **H2 (`[CLIENT-PROVIDED / CANONICAL — Servicio C]`):** `Contenido y fotografía para empresas: haz visible el valor de tu empresa.`
- **Párrafo canónico (`[CLIENT-PROVIDED / CANONICAL — Servicio C]`):**
  > Creamos imágenes e historias que presentan a tu equipo, tus servicios y tu experiencia con una identidad coherente.
- **Párrafo de apoyo (`[PROPOSED COPY]`):**
  > Sustituimos las imágenes genéricas de archivo por un banco visual propio que refleje la cultura real de tu organización, el profesionalismo de quienes la integran y la calidad de su operación, unificando su presencia en sitio web, presentaciones comerciales y redes sociales.
- **Capacidades incluidas (`[CLIENT-PROVIDED / CANONICAL — Servicio C]` + microcopy):**
  - **H3:** `Fotografía corporativa y para redes` — Acervo visual continuo alineado a la identidad de la marca.
  - **H3:** `Retratos de equipo y dirección` — Retratos individuales y grupales con iluminación consistente y dirección de postura.
  - **H3:** `Contenido de servicios y procesos` — Registro visual de tu operación, instalaciones y atención al cliente en acción.
  - **H3:** `Entrevistas y testimonios` — Piezas documentales que respaldan la experiencia de tu empresa a través de sus especialistas y clientes.
  - **H3:** `Campañas y videos institucionales` — Producción integral para presentaciones corporativas, lanzamientos y comunicación externa.
- **CTA primario de la sección (`[CLIENT-PROVIDED / CANONICAL — Servicio C]`):** `Cuéntanos tu proyecto` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]`)*
- **CTA secundario (`[PROPOSED COPY]`):** `Escribir por WhatsApp` *(Destino: `CTA-WA-05` con mensaje empresarial `[POR DEFINIR — PEND-01]`)*

---

#### Bloque 4.3 — Sección Anclada `#sesiones-particulares`: Sesiones fotográficas particulares (Servicio D) `[CLIENT-PROVIDED / CANONICAL + PROPOSED EXPANSION]`
> **ID de ancla obligatorio en HTML:** `id="sesiones-particulares"` (Recibe el tráfico del Bloque 6 de `Inicio` «Sesiones fotográficas» y del `Footer`).

- **Antetítulo (`[PROPOSED COPY]`):** `Retrato individual y editorial · Servicio D`
- **H2 (`[CLIENT-PROVIDED / CANONICAL — Servicio D]`):** `Sesiones fotográficas particulares: una sesión construida alrededor de ti.`
- **Párrafo canónico (`[CLIENT-PROVIDED / CANONICAL — Servicio D]`):**
  > Desarrollamos un concepto visual y te acompañamos con dirección artística para crear retratos con intención y personalidad.
- **Párrafo de apoyo (`[PROPOSED COPY]`):**
  > No necesitas saber posar ni tener experiencia previa en un estudio. Diseñamos la atmósfera, cuidamos el manejo de la luz y te guiamos en cada gesto y postura para lograr retratos que conserven tu esencia con una estética editorial y atemporal.
- **Etapas y capacidades de la sesión (`[CLIENT-PROVIDED / CANONICAL — Servicio D]` + microcopy):**
  1. **H3:** `Conceptualización y planeación`  
     Definimos la intención del retrato, las referencias visuales, el vestuario sugerido y el estilo de la sesión antes del día de toma.
  2. **H3:** `Dirección de poses y expresión`  
     Acompañamiento cercano durante toda la sesión para que te sientas en confianza y proyectes naturalidad y carácter.
  3. **H3:** `Iluminación con carácter`  
     Esquemas de luz inspirados en el retrato editorial y el uso expresivo del contraste para dar volumen y profundidad a cada imagen.
  4. **H3:** `Selección y edición detallada`  
     Curaduría conjunta de las mejores tomas y revelado digital fino que respeta la textura y autenticidad del retrato.
- **Nota sobre modalidades y alcance (`[CLIENT-PROVIDED / CANONICAL — Sección 4.D]`):**
  > *Modalidades, locaciones (en estudio o en locación externa) y entregas se acuerdan por proyecto después de conocer lo que buscas lograr.*
- **CTA primario de la sección (`[CLIENT-PROVIDED / CANONICAL — Servicio D]`):** `Planeemos tu sesión` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]`)*
- **CTA secundario (`[PROPOSED COPY]`):** `Planeemos tu sesión por WhatsApp` *(Destino: `CTA-WA-04` `[POR DEFINIR — PEND-01]`)*

---

#### Bloque 4.4 — Preguntas frecuentes sobre Sesiones y Fotografía `[CLIENT-PROVIDED / CANONICAL]`
- **H2:** `Preguntas frecuentes`
- Mostrar las preguntas canónicas **2, 3 y 4** de la Sección 7:
  - *¿Necesito experiencia frente a cámara?*
  - *¿Puedo contratar solo una sesión o una producción?*
  - *¿Cómo recibo una propuesta?*

---
---

### PÁGINA 5: `Eventos sociales` (`/eventos-sociales`)

- **Objetivo de la vista:** Presentar con sensibilidad estética y narrativa cinematográfica el **Servicio E (Eventos sociales, incluidos XV años)** para quienes llegan desde el Bloque 6 de `Inicio`, el `Footer` o búsqueda directa, y facilitar la consulta inmediata de disponibilidad de fecha por WhatsApp (`D-004`: sin cantidades públicas ni promesas de disponibilidad sin revisión).
- **Title SEO (`[PROPOSED COPY]`):** `Fotografía y Video de Eventos Sociales y XV Años | Cobalto Carmesí`
- **Meta Description (`[PROPOSED COPY]`):** `Conserva la emoción y la personalidad de tu celebración. Cobertura fotográfica y de video para eventos sociales y XV años con mirada cinematográfica.`

---

#### Bloque 5.1 — Hero de Eventos Sociales `[CLIENT-PROVIDED / CANONICAL + PROPOSED CONTEXT]`
- **Antetítulo (`[PROPOSED COPY]`):** `Fotografía y video de celebraciones · Servicio E`
- **H1 (`[CLIENT-PROVIDED / CANONICAL — Servicio E]`):** `Conserva la emoción y la personalidad de tu celebración.`
- **Descripción principal (`[CLIENT-PROVIDED / CANONICAL — Servicio E]`):**
  > Realizamos fotografía y video de eventos sociales, incluidos XV años, con atención a sus protagonistas y a los momentos que hacen única su historia.
- **CTA principal (`[CLIENT-PROVIDED / CANONICAL — Sección 4.E]`):** `Consultar mi fecha por WhatsApp` *(Destino: `CTA-WA-06` `[POR DEFINIR — PEND-01]`)*
- **CTA alternativo (`[CLIENT-PROVIDED / CANONICAL — Tabla Sección 5]`):** `Agendar una videollamada` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]`)*

---

#### Bloque 5.2 — Nuestra mirada en las celebraciones `[PROPOSED COPY alineado a Sección 4.E y 10]`
- **Antetítulo:** `Criterio documental y editorial`
- **H2:** `Más que un registro cronológico, la memoria viva de quienes protagonizan el día.`
- **Párrafo 1:**
  > Cada celebración tiene su propio ritmo, su atmósfera y sus vínculos familiares. Aplicamos la misma sensibilidad estética, cuidado en la iluminación y dirección artística del estudio para documentar tanto la espontaneidad de los instantes irrepetibles como los retratos formales de sus protagonistas.
- **Párrafo 2:**
  > Desde celebraciones de **XV años** —incluyendo sesiones previas con concepto y dirección de poses— hasta encuentros familiares y eventos sociales significativos, buscamos que cada fotografía y cada película conserven su valor emotivo y estético con el paso del tiempo.

---

#### Bloque 5.3 — Qué contempla nuestra cobertura `[PROPOSED COPY respetando restricciones de Sección 4.E]`
- **H2:** `Atención dedicada en cada etapa de tu evento.`
- **Tres pilares (`H3` + descripción):**
  1. **H3:** `Sesiones previas y retrato de protagonistas`  
     Dirección artística y acompañamiento para crear retratos con personalidad antes o durante el día de la celebración, cuidando que cada protagonista se sienta cómodo frente a la cámara.
  2. **H3:** `Cobertura fotográfica y documental del evento`  
     Mirada atenta a la preparación, la ceremonia, la recepción, los detalles de ambientación y las emociones compartidas con tus invitados.
  3. **H3:** `Realización y edición de video con ritmo cinematográfico`  
     Construcción audiovisual que integra imagen, sonido ambiente y narrativa para revivir la atmósfera real de la celebración.

---

#### Bloque 5.4 — Cómo definimos tu propuesta y revisamos disponibilidad `[CLIENT-PROVIDED / CANONICAL RULE + PROPOSED COPY]`
> **Regla obligatoria (`Sección 4.E`):** Definir cobertura, equipo, horarios y formatos de entrega durante la conversación. **No publicar cantidades ni prometer disponibilidad sin revisión.**

- **Antetítulo:** `Propuesta a la medida`
- **H2:** `Cada celebración se planea según su propia historia.`
- **Párrafo explicativo (`[PROPOSED COPY basado en 4.E]`):**
  > No trabajamos con paquetes rígidos ni fórmulas estandarizadas. Durante nuestra conversación conocemos el tipo de celebración, las locaciones y los momentos importantes para ti, y a partir de ello definimos el alcance de la cobertura, la conformación del equipo, los horarios de acompañamiento y los formatos de entrega.
- **Pasos breves para cotizar (`[PROPOSED COPY]`):**
  1. **1. Consulta tu fecha:** Escríbenos por WhatsApp indicando el tipo de celebración, la fecha tentativa y la ciudad o locación.
  2. **2. Revisión de agenda:** Verificamos la disponibilidad de nuestro equipo para esa fecha (toda fecha está sujeta a revisión previa de agenda).
  3. **3. Conversación y propuesta:** Conversamos sobre los detalles de tu evento y te presentamos una propuesta personalizada.

---

#### Bloque 5.5 — Cierre de Conversión `[PROPOSED COPY + CLIENT-PROVIDED CTA]`
- **H2:** `Platiquemos sobre la fecha de tu celebración.`
- **Párrafo:**
  > Compártenos la fecha y el lugar de tu evento para revisar disponibilidad en nuestra agenda y diseñar la cobertura ideal.
- **CTA principal (`[CLIENT-PROVIDED / CANONICAL]`):** `Consultar mi fecha por WhatsApp` *(Destino: `CTA-WA-06` `[POR DEFINIR — PEND-01]`)*
- **CTA secundario (`[CLIENT-PROVIDED / CANONICAL]`):** `Contactar por WhatsApp` / `Llamar al estudio` (`CTA-TEL-01`)

---
---

### PÁGINA 6: `Proyectos` (`/proyectos`)

- **Objetivo de la vista (`Sección 5 y 8 del Documento Maestro`):** Demostrar el criterio estratégico, narrativo y visual del estudio mediante trabajo real verificado (`CA-COMM-05`), estructurado bajo la **plantilla obligatoria de 5 puntos** (*1. Contexto, 2. Necesidad, 3. Alcance real ejecutado, 4. Aportación del estudio, 5. Muestra final*).
- **Title SEO (`[PROPOSED COPY]`):** `Proyectos y Casos de Estudio | Cobalto Carmesí Studios`
- **Meta Description (`[PROPOSED COPY]`):** `Explora una selección de proyectos reales de arquitectura de marca personal, creación de contenido, fotografía y producción audiovisual.`

---

#### Bloque 6.1 — Hero de Proyectos `[CLIENT-PROVIDED / CANONICAL (Bloque 5) + PROPOSED CONTEXT]`
- **Antetítulo (`[PROPOSED COPY]`):** `Portafolio y casos de estudio`
- **H1 (`[CLIENT-PROVIDED / CANONICAL — Bloque 5]`):** `Nuestro criterio, llevado a la práctica.`
- **Descripción principal (`[CLIENT-PROVIDED / CANONICAL — Bloque 5]`):**
  > Explora una selección de proyectos de estrategia, contenido, fotografía y producción audiovisual.
- **CTA principal (`[CLIENT-PROVIDED / CANONICAL — Tabla Sección 5]`):** `Hablemos de tu proyecto` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]`)*

---

#### Bloque 6.2 — Categorías Editoriales / Filtros Sugeridos (`[PROPOSED COPY — Ready for Review]`)
> **Nota para `product-designer` y `frontend-engineer` (`INFERRED-01`):** Mostrar filtros por categoría únicamente si al momento de publicar existen casos aprobados en más de una categoría; si se lanza con 1 o 2 casos iniciales, presentar la lista editorial directa sin pestañas vacías.

- **Etiquetas de categoría recomendadas:**
  - `Todos los proyectos`
  - `Marca personal y narrativa`
  - `Contenido y especialistas`
  - `Fotografía y producción audiovisual`
  - `Formación y estrategia comercial`

---

#### Bloque 6.3 — Plantilla Editorial Canónica de Caso de Estudio (5 Puntos Obligatorios — `Sección 8` / `CA-COMM-05`)
Todo caso que pase a estado `published: true` en las colecciones de Astro debe completar estos **5 bloques narrativos** sin excepción:

```markdown
### [Nombre del Proyecto / Cliente]
**Categoría:** [Marca personal / Contenido / Fotografía / Producción audiovisual / Formación]
**Servicios ejecutados:** [Etiquetas reales del catálogo A–G]

1. **Contexto:** [Descripción verificada de quién es el cliente/proyecto y su punto de partida]
2. **Necesidad:** [Desafío de posicionamiento, narrativa, comunicación o imagen que buscaba resolver]
3. **Alcance real ejecutado:** [Detalle exacto de lo que Cobalto Carmesí realizó efectivamente; prohibido incluir alcances solo cotizados]
4. **Aportación del estudio:** [Cómo intervino la dirección creativa, estrategia, guion, fotografía o realización]
5. **Muestra final:** [Galería de fotografías o reproductor de video con imagen de portada (poster) y carga diferida — CA-PERF-02]
*(Métricas opcionales: Solo incluir si existe evidencia causal comprobable y permiso explícito).*
```

---

#### Bloque 6.4 — Fichas Pre-estructuradas de los 4 Candidatos Internos (`PORT-01` a `PORT-04` — `[POR DEFINIR / PEND-08]`)
> **ADVERTENCIA DE GOBERNANZA (`D-004`, `CA-COMM-03`, `CA-COMM-05`):**  
> Conforme a la Sección 8 del Documento Maestro: *«Estos nombres son candidatos a revisión; esta tabla no es un bloque público ni acredita resultados comerciales. [...] Si faltan autorizaciones para una pieza, omitirla y avanzar con las disponibles.»*  
> Ninguna de las 4 fichas siguientes puede activarse en producción (`published: false` por defecto) hasta que **Darío Ilescas Cruz** valide los campos `[POR DEFINIR]` y entregue las piezas finales autorizadas.

##### Ficha Candidata 1 (`PORT-01`) — Angie Mesta
- **Estado de publicación:** `PENDING / DRAFT` (`published: false` hasta resolver `PEND-08`)
- **Título del caso:** `Angie Mesta`
- **Enfoque (`CLIENT-PROVIDED`):** `Narrativa, dirección y creación de contenido para marca personal`
- **Estructura de 5 puntos:**
  1. **Contexto:** `[POR DEFINIR — PEND-08: Confirmar perfil profesional de Angie Mesta y punto de partida autorizado para publicar]`
  2. **Necesidad:** `[POR DEFINIR — PEND-08: Confirmar el objetivo específico de posicionamiento, discurso y presencia digital que motivó el proyecto]`
  3. **Alcance real ejecutado:** `[POR DEFINIR — PEND-08: Confirmar qué capacidades exactas de Marca Personal (A) y Creación de Contenido (B) se ejecutaron]`
  4. **Aportación del estudio:** `[POR DEFINIR — PEND-08: Detallar la intervención de Cobalto Carmesí en narrativa, dirección frente a cámara y realización visual]`
  5. **Muestra final:** `[POR DEFINIR — PEND-08: Incorporar piezas finales aprobadas y confirmar permiso de uso comercial en portafolio]`

##### Ficha Candidata 2 (`PORT-02`) — H Centro Hidrofacial
- **Estado de publicación:** `PENDING / DRAFT` (`published: false` hasta resolver `PEND-08`)
- **Título del caso:** `H Centro Hidrofacial`
- **Enfoque (`CLIENT-PROVIDED`):** `Contenido de especialistas y producción audiovisual`
- **Estructura de 5 puntos:**
  1. **Contexto:** `[POR DEFINIR — PEND-08: Descripción validada de H Centro Hidrofacial y el perfil de sus especialistas]`
  2. **Necesidad:** `[POR DEFINIR — PEND-08: Necesidad de comunicar procedimientos, autoridad de especialistas y confianza mediante video]`
  3. **Alcance real ejecutado:** `[POR DEFINIR — PEND-08: Confirmar el alcance efectivamente producido y publicado (guiones, dirección, grabación, edición)]`
  4. **Aportación del estudio:** `[POR DEFINIR — PEND-08: Criterio de dirección de especialistas frente a cámara e identidad audiovisual aportada por el estudio]`
  5. **Muestra final:** `[POR DEFINIR — PEND-08: Selección de videos efectivamente publicados y permiso de uso]`

##### Ficha Candidata 3 (`PORT-03`) — Durambene
- **Estado de publicación:** `PENDING / RESTRICTED` (`published: false` — requiere validación expresa de denominación pública)
- **Título del caso:** `[POR DEFINIR — PEND-08: Confirmar si se autoriza usar la denominación pública «Durambene» o un descriptor de sector anónimo]`
- **Enfoque (`CLIENT-PROVIDED`):** `Formación comercial y trabajo con KPIs`
- **Estructura de 5 puntos:**
  1. **Contexto:** `[POR DEFINIR — PEND-08: Contexto de la organización autorizado para uso público]`
  2. **Necesidad:** `[POR DEFINIR — PEND-08: Desafío de comunicación comercial y alineación de indicadores]`
  3. **Alcance real ejecutado:** `[POR DEFINIR — PEND-08: Delimitar con exactitud la actividad realmente ejecutada frente a cualquier propuesta; no publicar documentos confidenciales]`
  4. **Aportación del estudio:** `[POR DEFINIR — PEND-08: Intervención en formación comercial y metodología de seguimiento]`
  5. **Muestra final:** `[POR DEFINIR — PEND-08: Definir qué material visual o documental es utilizable públicamente y si existen métricas con evidencia causal autorizada]`

##### Ficha Candidata 4 (`PORT-04`) — Coberturas y sesiones del archivo Sefirot
- **Estado de publicación:** `PENDING / CURATION REQUIRED` (`published: false` hasta curaduría de calidad, actualidad y permisos)
- **Título del caso / colección:** `Selección de fotografía, cobertura y producción aérea (Archivo del estudio)`
- **Enfoque (`CLIENT-PROVIDED`):** `Fotografía, eventos y producción aérea`
- **Estructura de 5 puntos:**
  1. **Contexto:** `[POR DEFINIR — PEND-08: Selección curada de producciones previas realizadas por el estudio bajo la dirección de Darío Ilescas Cruz]`
  2. **Necesidad:** `[POR DEFINIR — PEND-08: Requerimientos visuales de retrato, cobertura social o integración de imagen aérea de las piezas seleccionadas]`
  3. **Alcance real ejecutado:** `[POR DEFINIR — PEND-08: Especificar por pieza si correspondió a sesión fotográfica (D), evento social (E) o producción con drones (F)]`
  4. **Aportación del estudio:** `[POR DEFINIR — PEND-08: Dirección de iluminación, composición y realización técnica vigente con el estándar de Cobalto Carmesí]`
  5. **Muestra final:** `[POR DEFINIR — PEND-08: Piezas que superen la revisión de calidad estética, actualidad y permisos de imagen]`

---

#### Bloque 6.5 — Copy de Respaldo Editorial (Para lanzamiento con subconjunto acotado o curaduría en curso) `[PROPOSED COPY — Ready for Review]`
> **Propósito:** Si al momento del lanzamiento solo 1 o 2 casos cuentan con autorización completa (o mientras se liberan nuevas piezas), este bloque acompaña la vista `/proyectos` para explicar el rigor de confidencialidad y curaduría del estudio sin mostrar cajas vacías ni marcadores de «Próximamente» (`CA-COMM-03`).

- **H2:** `Cómo documentamos nuestro trabajo`
- **Párrafo:**
  > En Cobalto Carmesí cada proyecto parte de una estrategia hecha a la medida y de acuerdos de confidencialidad con nuestros clientes. Aquí compartimos únicamente una selección de casos y piezas publicadas que cuentan con autorización expresa para detallar su contexto, necesidad, alcance ejecutado y resultado visual. En nuestra videollamada de diagnóstico podemos profundizar en referencias afines a los objetivos de tu marca.

---

#### Bloque 6.6 — Cierre de Conversión en Proyectos `[PROPOSED COPY + CLIENT-PROVIDED CTA]`
- **H2:** `¿Listo para desarrollar tu propio proyecto?`
- **Párrafo:**
  > Conversemos sobre el momento actual de tu marca o empresa y definamos cómo estructurar tu estrategia, narrativa y producción visual.
- **CTA principal (`[CLIENT-PROVIDED / CANONICAL — Tabla Sección 5]`):** `Hablemos de tu proyecto` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]`)*
- **Alternativas:** `Escribir por WhatsApp` (`CTA-WA-07`) · `Llamar al estudio` (`CTA-TEL-01`)

---
---

### PÁGINA 7: `El estudio` (`/el-estudio`)

- **Objetivo de la vista (`Sección 5, Sección 3 y Bloque 7 del Documento Maestro`):** Presentar la visión de **Cobalto Carmesí Studios**, la dirección creativa de **Darío Ilescas Cruz**, la propuesta de valor íntegra, el desarrollo de los **5 argumentos de elección**, la filosofía estética (cobalto, carmesí, claroscuro y mirada editorial), la mención anclada **`#formacion`** y el llamado a la acción institucional.
- **Title SEO (`[PROPOSED COPY]`):** `El Estudio y Dirección Creativa | Cobalto Carmesí Studios`
- **Meta Description (`[PROPOSED COPY]`):** `Bajo la dirección creativa de Darío Ilescas Cruz, conectamos el pensamiento estratégico con la producción visual para construir marcas con identidad.`

---

#### Bloque 7.1 — Hero de El Estudio `[CLIENT-PROVIDED / CANONICAL (Bloque 7 y Sección 3) + PROPOSED STRUCTURE]`
- **Antetítulo (`[PROPOSED COPY]`):** `Sobre nosotros · Cobalto Carmesí Studios`
- **H1 (`[CLIENT-PROVIDED / CANONICAL — Bloque 7]`):** `Cobalto Carmesí: estrategia, narrativa y dirección creativa.`
- **Descripción principal (`[CLIENT-PROVIDED / CANONICAL — Sección 3 Propuesta de Valor]`):**
  > Tu experiencia merece una presencia a su altura. En Cobalto Carmesí construimos la estrategia, la narrativa y el contenido que hacen visible tu valor. Integramos arquitectura de marca personal, dirección creativa, fotografía y producción audiovisual para desarrollar una presencia reconocible y orientada a tus objetivos comerciales.
- **CTA principal (`[CLIENT-PROVIDED / CANONICAL — Tabla Sección 5]`):** `Conoce cómo podemos ayudarte` *(Destino: `/contacto` o Google Calendar `[POR DEFINIR — PEND-04]`)*

---

#### Bloque 7.2 — Dirección Creativa y Visión del Estudio `[CLIENT-PROVIDED / CANONICAL (Bloque 7) + PROPOSED EXPANSION]`
- **Antetítulo:** `Dirección creativa`
- **H2:** `Pensamiento estratégico y sensibilidad visual en un mismo estudio.`
- **Párrafo 1 (`[CLIENT-PROVIDED / CANONICAL — Bloque 7]`):**
  > Bajo la dirección creativa de Darío Ilescas Cruz, conectamos el pensamiento estratégico con la producción visual para construir marcas y proyectos con identidad. Nuestro trabajo reúne análisis, sensibilidad artística y acompañamiento durante el proceso creativo.
- **Párrafo 2 (`[PROPOSED COPY — Evolución estratégica D-001]`):**
  > Cobalto Carmesí Studios nace como la evolución natural de nuestra trayectoria en producción audiovisual y realización técnica: comprendimos que una imagen impecable necesita sostenerse sobre una arquitectura de marca clara y una narrativa propia. Hoy acompañamos a profesionales, empresarios, creadores y organizaciones que buscan que su comunicación pública esté a la altura de su experiencia real.
- **Nota de dirección visual para `product-designer`:** Espacio para retrato editorial de **Darío Ilescas Cruz** o fotografía de atmósfera de dirección en set (`[POR DEFINIR — PEND-09]`).

---

#### Bloque 7.3 — Por qué elegir a Cobalto Carmesí (Los 5 Argumentos de Elección) `[CLIENT-PROVIDED / CANONICAL (Sección 3) + PROPOSED EXPANSION]`
- **Antetítulo:** `Nuestros principios de trabajo`
- **H2:** `Cinco razones que sostienen nuestro criterio.`
- **Desarrollo de los 5 argumentos canónicos (`H3` y frase base canónica + párrafo de profundización propuesto):**
  1. **H3 (`[CANONICAL]`):** `1. Estrategia que dirige la producción`  
     **Frase canónica:** *El contenido parte de un posicionamiento y de una intención definida.*  
     **Profundización (`[PROPOSED]`):** No grabamos por cumplir una cuota de publicaciones. Cada concepto, encuadre y guion responde a la percepción que quieres construir y a los objetivos estratégicos de tu proyecto.
  2. **H3 (`[CANONICAL]`):** `2. Narrativa propia`  
     **Frase canónica:** *Trabajamos con la experiencia, el criterio y la personalidad de cada cliente.*  
     **Profundización (`[PROPOSED]`):** Rechazamos las fórmulas de plantilla que hacen que todos los perfiles suenen iguales. Investigamos tu historia y tu forma de pensar para articular una voz auténtica.
  3. **H3 (`[CANONICAL]`):** `3. Dirección y acompañamiento`  
     **Frase canónica:** *Ayudamos a convertir ideas en mensajes y a comunicarlos frente a cámara.*  
     **Profundización (`[PROPOSED]`):** Traducimos conceptos complejos en un lenguaje claro y te dirigimos durante cada sesión fotográfica o rodaje para que proyectes seguridad, solvencia y naturalidad.
  4. **H3 (`[CANONICAL]`):** `4. Una visión integrada`  
     **Frase canónica:** *Estrategia, guion, fotografía, realización y edición se conectan dentro del proyecto.*  
     **Profundización (`[PROPOSED]`):** Al concentrar la arquitectura verbal y la producción audiovisual bajo una misma dirección creativa, evitamos que tu mensaje se fragmente entre distintos proveedores.
  5. **H3 (`[CANONICAL]`):** `5. Criterio cinematográfico y editorial`  
     **Frase canónica:** *La ejecución visual contribuye a la percepción de la marca.*  
     **Profundización (`[PROPOSED]`):** Cuidamos la composición arquitectónica, el ritmo narrativo y el uso intencional de la luz y el contraste para que cada imagen eleve el valor percibido de tu trabajo.

---

#### Bloque 7.4 — Identidad Estética: Cobalto y Carmesí `[PROPOSED COPY basado en Sección 10]`
- **Antetítulo:** `Nuestra estética`
- **H2:** `El equilibrio entre estructura y carácter.`
- **Párrafo:**
  > Nuestro nombre refleja las dos fuerzas que guían cada proyecto: la profundidad, templanza y rigor analítico del **azul cobalto** —donde habitan la estrategia, el orden y la arquitectura de marca—; y el acento vital, humano y expresivo del **carmesí** —donde cobran vida la dirección artística, la emoción del retrato y la fuerza de una buena historia—. Inspirados sutilmente en la composición clásica y el manejo de la luz del claroscuro, creamos piezas pensadas para permanecer.

---

#### Bloque 7.5 — Sección Anclada `#formacion`: Acompañamiento a Profesionales y Equipos `[CLIENT-PROVIDED / CANONICAL (Servicio G) + PROPOSED CONTEXT]`
> **ID de ancla obligatorio en HTML:** `id="formacion"` (Referencia transversal desde Estrategia para la capacidad G).

- **Antetítulo:** `Formación y mentoría`
- **H2:** `Desarrollamos las capacidades comunicativas de personas y equipos.`
- **Párrafo (`[CLIENT-PROVIDED / CANONICAL — Servicio G + PROPOSED]`):**
  > *«Fortalece la forma en que comunicas tu valor. Acompañamos a profesionales y equipos en comunicación, desenvolvimiento frente a cámara y habilidades comerciales.»* Como parte de nuestra visión integral, compartimos nuestra metodología mediante sesiones de mentoría y entrenamiento práctico para que tanto líderes individuales como equipos corporativos comuniquen su propuesta con claridad y convicción.
- **Enlace:** `Conocer más sobre Formación y mentoría →` *(Destino: `/marca-personal#formacion-y-mentoria`)*

---

#### Bloque 7.6 — Cierre de Conversión `[PROPOSED COPY + CLIENT-PROVIDED CTA]`
- **H2:** `Conversemos sobre el momento actual de tu marca.`
- **Párrafo:**
  > Agenda una videollamada para conocer nuestro método de trabajo y explorar cómo podemos construir juntos tu estrategia y tu contenido.
- **CTA principal (`[CLIENT-PROVIDED / CANONICAL]`):** `Conoce cómo podemos ayudarte` / `Agendar una videollamada` *(Destino: Google Calendar `[POR DEFINIR — PEND-04]`)*
- **Alternativas:** `Escribir por WhatsApp` (`CTA-WA-01`) · `Llamar al estudio` (`CTA-TEL-01`)

---
---

### PÁGINA 8: `Contacto` (`/contacto`)

- **Objetivo de la vista (`Sección 5, 9 y 12 del Documento Maestro`):** Ofrecer una experiencia de conversión directa, clara y sin fricción que priorice la **reserva de videollamada en Google Calendar**, seguida de **WhatsApp** y **llamada telefónica**, sin formularios extensos ni campos de presupuesto (`CA-CONV-05`).
- **Title SEO (`[PROPOSED COPY]`):** `Contacto y Agenda de Videollamada | Cobalto Carmesí Studios`
- **Meta Description (`[PROPOSED COPY]`):** `Agenda una videollamada de diagnóstico, escríbenos por WhatsApp o llama al estudio para conversar sobre tu marca personal o proyecto audiovisual.`

---

#### Bloque 8.1 — Hero de Contacto `[CLIENT-PROVIDED / CANONICAL (Bloque 8) + PROPOSED CONTEXT]`
- **Antetítulo (`[PROPOSED COPY]`):** `Contacto directo · Cobalto Carmesí Studios`
- **H1 (`[CLIENT-PROVIDED / CANONICAL — Bloque 8]`):** `Hablemos de la presencia que quieres construir.`
- **Descripción principal (`[CLIENT-PROVIDED / CANONICAL — Bloque 8]`):**
  > Cuéntanos dónde estás y hacia dónde quieres llevar tu marca. En una videollamada podremos conocer tu proyecto y definir el siguiente paso.

---

#### Bloque 8.2 — Los 3 Canales Directos de Conversación (Jerarquía de Conversión `D-003`) `[CLIENT-PROVIDED / CANONICAL + PROPOSED MICROCOPY]`

##### Canal 1 (Prioritario — Ancla `#agenda`): Reserva de Videollamada en Google Calendar
- **Etiqueta de prioridad:** `Opción recomendada · Diagnóstico inicial`
- **H2:** `Agenda una videollamada`
- **Descripción (`[PROPOSED COPY]`):**
  > Elige el día y horario que mejor se adapte a tu agenda en nuestra página pública de citas. En esta sesión conversaremos sobre tu punto de partida, tus objetivos y el tipo de acompañamiento o producción que necesitas para preparar una propuesta a tu medida.
- **CTA Principal (`[CLIENT-PROVIDED / CANONICAL]`):** `Agendar una videollamada`
- **Destino técnico (`PEND-04`):** `[POR DEFINIR: URL pública de reserva de citas de Google Calendar]`
- **Nota de implementación para Diseño y Frontend (`CA-RESP-03`):** Abrir la página pública de reserva desde el botón; integrar un bloque incrustado (*embed*) en esta sección únicamente si tras probar la URL real se verifica que mejora la experiencia en dispositivos móviles.

##### Canal 2 (Alternativa Directa 1): WhatsApp Comercial
- **Etiqueta:** `Atención directa`
- **H2:** `Escribir por WhatsApp`
- **Descripción (`[PROPOSED COPY]`):**
  > Si prefieres iniciar la conversación por mensaje, consultar disponibilidad para una fecha de evento o resolver una duda puntual antes de agendar, escríbenos directamente.
- **CTA (`[CLIENT-PROVIDED / CANONICAL]`):** `Escribir por WhatsApp`
- **Dato visible / Destino (`PEND-01`):** `WhatsApp: [POR DEFINIR: número confirmado con código de país]` → Enlace `CTA-WA-01`.

##### Canal 3 (Alternativa Directa 2): Llamada Telefónica y Correo Comercial
- **Etiqueta:** `Vía telefónica y correo`
- **H2:** `Llamar al estudio`
- **Descripción (`[PROPOSED COPY]`):**
  > Comunícate vía telefónica con el estudio o envíanos los detalles iniciales de tu requerimiento por correo electrónico.
- **CTA Telefónico (`[CLIENT-PROVIDED / CANONICAL]`):** `Llamar al estudio`
- **Datos visibles (`PEND-02`, `PEND-03`):**
  - `Teléfono: [POR DEFINIR: confirmar número para llamadas y si coincide con WhatsApp — PEND-02]` (`tel:...`)
  - `Correo comercial: [POR DEFINIR: dirección confirmada — PEND-03]` (`mailto:...`)

---

#### Bloque 8.3 — Ubicación, Cobertura y Redes Oficiales (`[POR DEFINIR — PEND-05, PEND-06]`)
- **H2:** `Ubicación y presencia digital`
- **Copy de ubicación y cobertura (`PEND-06`):**
  > `[POR DEFINIR: confirmar texto comercial de ciudad base y cobertura para producciones/proyectos. RESTRICCIÓN CA-LEGAL-02: Prohibido publicar domicilio particular en texto visible o metadatos.]`
- **Enlaces a redes sociales (`PEND-05`):**
  - `Instagram: [POR DEFINIR: URL oficial]`
  - `Facebook y otras redes: [POR DEFINIR: enlaces oficiales que se decida mostrar]`

---

#### Bloque 8.4 — Formulario Complementario Opcional de 3 Campos (`CA-CONV-05`) `[PROPOSED COPY — Ready for Review]`
> **Regla estricta (`Sección 9 del Documento Maestro` y `CA-CONV-05`):**  
> *«No añadir formularios extensos ni un campo de presupuesto como requisito para contactar. Si se incorpora un formulario complementario, bastan nombre, contacto y una descripción breve del proyecto.»*

- **H2:** `O déjanos un mensaje breve`
- **Subtítulo:** `Compártenos tus datos y una idea general de lo que buscas; nosotros nos pondremos en contacto contigo.`
- **Especificación exacta de los 3 únicos campos permitidos:**
  1. **Campo 1 · Nombre (`input type="text"`, requerido):**
     - **Label:** `Tu nombre`
     - **Placeholder:** `Ej. Sofía Méndez`
     - **Mensaje de validación (error):** `Por favor, indícanos tu nombre para saber a quién dirigirnos.`
  2. **Campo 2 · Contacto (`input type="text"`, requerido):**
     - **Label:** `WhatsApp, teléfono o correo electrónico`
     - **Placeholder:** `El medio por el que prefieras que te contactemos`
     - **Mensaje de validación (error):** `Por favor, ingresa un número de teléfono o correo electrónico válido.`
  3. **Campo 3 · Descripción breve (`textarea`, requerido):**
     - **Label:** `Descripción breve de tu proyecto`
     - **Placeholder:** `Cuéntanos brevemente si te interesa arquitectura de marca personal, creación de contenido, una sesión fotográfica, un evento social o una producción audiovisual.`
     - **Mensaje de validación (error):** `Por favor, escribe unas líneas sobre lo que tienes en mente.`
- **Botón de envío (`submit`):**
  - **Estado reposo:** `Enviar mensaje`
  - **Estado cargando:** `Enviando tu mensaje...`
- **Estados de respuesta del formulario:**
  - **Estado de éxito:** `Gracias por escribirnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo muy pronto para conversar sobre tu proyecto.`
  - **Estado de error técnico:** `No pudimos procesar el envío en este momento. Por favor, contáctanos directamente por WhatsApp o agenda tu videollamada en el enlace superior.`
- **Microcopy de Privacidad bajo el formulario (`CA-LEGAL-01`):**
  > `Al enviar este formulario o contactarnos, tus datos serán tratados únicamente para dar seguimiento a tu solicitud conforme a nuestro ` [`Aviso de privacidad`](/privacidad) `([POR DEFINIR — PEND-10]).`

---

#### Bloque 8.5 — Preguntas Frecuentes en Contacto `[CLIENT-PROVIDED / CANONICAL — Sección 7]`
- **H2:** `Cómo iniciamos un proyecto`
- Mostrar las **5 Preguntas Frecuentes canónicas** completas de la Sección 7 del Documento Maestro (especialmente relevantes aquí: *«¿Cómo recibo una propuesta?»*, *«¿Puedo contratar solo una sesión o una producción?»* y *«¿El servicio incluye manejo de redes?»*).

---

## 3. Matriz Consolidada SEO On-Page de Contenidos (`CA-SEO-01`, `CA-SEO-02`)

Esta tabla consolida los metadatos únicos y la jerarquía de encabezados (`H1` único y `H2` principales) para las 8 páginas del sitemap aprobado (`D-005`), garantizando consistencia entre Contenido, Diseño, SEO y Frontend:

| # | Página y Slug | `<title>` (Longitud óptima y foco semántico) | `<meta name="description">` | `H1` Único de la Vista | Estructura de `H2` de la Vista | Origen / Estado |
|---|---|---|---|---|---|---|
| **1** | **Inicio**<br>`/` | `Cobalto Carmesí \| Marca personal y creación de contenido` | `Arquitectura de marca personal, fotografía y producción audiovisual para comunicar tu valor. Agenda una videollamada con Cobalto Carmesí Studios.` | `Tu experiencia merece una presencia a su altura.` | 1. `Que tu presencia comunique el nivel de tu trabajo.`<br>2. `Estrategia para posicionarte. Contenido para hacerlo visible.`<br>3. `Así construimos tu presencia.`<br>4. `Nuestro criterio, llevado a la práctica.`<br>5. `Una mirada creativa para distintos proyectos.`<br>6. `Cobalto Carmesí: estrategia, narrativa y dirección creativa.`<br>7. `Preguntas frecuentes`<br>8. `Hablemos de la presencia que quieres construir.` | **`CLIENT-PROVIDED / CANONICAL`** (`FACT-009`, `CA-SEO-02`) |
| **2** | **Marca personal**<br>`/marca-personal` | `Arquitectura de Marca Personal \| Cobalto Carmesí Studios` | `Definimos tu posicionamiento, organizamos tu narrativa y dirigimos tu presencia frente a cámara para conectar tu experiencia con tu audiencia ideal.` | `Dale estructura a lo que te hace valioso.` | 1. `Cuando tu trayectoria supera lo que proyecta tu presencia actual.`<br>2. `Los cimientos de una marca personal con dirección.`<br>3. `De la claridad estratégica a la expresión visual.`<br>4. `Formación y mentoría: fortalece la forma en que comunicas tu valor.` (`#formacion-y-mentoria`)<br>5. `Dudas frecuentes sobre el proceso`<br>6. `Construyamos una presencia que represente quién eres hoy.` | `H1` Canónico (`4.A`) + Metadatos y `H2` **`PROPOSED COPY`** (`CA-SEO-01`) |
| **3** | **Creación de contenido**<br>`/creacion-de-contenido` | `Creación de Contenido y Producción Audiovisual \| Cobalto Carmesí` | `Desarrollamos conceptos, guiones, fotografía y video con dirección creativa para comunicar tu valor con claridad, personalidad y consistencia.` | `Convierte tu conocimiento en contenido con dirección.` | 1. `No producimos piezas aisladas; construimos una narrativa coherente.`<br>2. `De la planeación editorial a la pieza terminada.`<br>3. `Un alcance definido a la medida de tu operación.`<br>4. `Producción audiovisual y drones: una mirada que amplía tu historia.` (`#produccion-y-drones`)<br>5. `Demos forma a las historias que representan tu trabajo.` | `H1` Canónico (`4.B`) + Metadatos y `H2` **`PROPOSED COPY`** (`CA-SEO-01`) |
| **4** | **Fotografía**<br>`/fotografia` | `Fotografía para Empresas y Sesiones Particulares \| Cobalto Carmesí` | `Fotografía corporativa, retratos de equipo y sesiones particulares con dirección artística e iluminación editorial en Cobalto Carmesí Studios.` | `Imágenes con intención, carácter y dirección artística.` | 1. `Contenido y fotografía para empresas: haz visible el valor de tu empresa.` (`#empresas`)<br>2. `Sesiones fotográficas particulares: una sesión construida alrededor de ti.` (`#sesiones-particulares`)<br>3. `Preguntas frecuentes` | Textos de secciones `4.C` y `4.D` Canónicos + `H1` y Metadatos **`PROPOSED COPY`** (`CA-SEO-01`) |
| **5** | **Eventos sociales**<br>`/eventos-sociales` | `Fotografía y Video de Eventos Sociales y XV Años \| Cobalto Carmesí` | `Conserva la emoción y la personalidad de tu celebración. Cobertura fotográfica y de video para eventos sociales y XV años con mirada cinematográfica.` | `Conserva la emoción y la personalidad de tu celebración.` | 1. `Más que un registro cronológico, la memoria viva de quienes protagonizan el día.`<br>2. `Atención dedicada en cada etapa de tu evento.`<br>3. `Cada celebración se planea según su propia historia.`<br>4. `Platiquemos sobre la fecha de tu celebración.` | `H1` Canónico (`4.E`) + Metadatos y `H2` **`PROPOSED COPY`** (`CA-SEO-01`) |
| **6** | **Proyectos**<br>`/proyectos` | `Proyectos y Casos de Estudio \| Cobalto Carmesí Studios` | `Explora una selección de proyectos reales de arquitectura de marca personal, creación de contenido, fotografía y producción audiovisual.` | `Nuestro criterio, llevado a la práctica.` | 1. `[Títulos de cada Caso Autorizado: PORT-01 a PORT-04 según disponibilidad]`<br>2. `Cómo documentamos nuestro trabajo` *(Respaldo editorial)*<br>3. `¿Listo para desarrollar tu propio proyecto?` | `H1` Canónico (`Bloque 5`) + Estructura de 5 puntos (`Sección 8`) |
| **7** | **El estudio**<br>`/el-estudio` | `El Estudio y Dirección Creativa \| Cobalto Carmesí Studios` | `Bajo la dirección creativa de Darío Ilescas Cruz, conectamos el pensamiento estratégico con la producción visual para construir marcas con identidad.` | `Cobalto Carmesí: estrategia, narrativa y dirección creativa.` | 1. `Pensamiento estratégico y sensibilidad visual en un mismo estudio.`<br>2. `Cinco razones que sostienen nuestro criterio.`<br>3. `El equilibrio entre estructura y carácter.`<br>4. `Desarrollamos las capacidades comunicativas de personas y equipos.` (`#formacion`)<br>5. `Conversemos sobre el momento actual de tu marca.` | `H1` Canónico (`Bloque 7`) + Argumentos (`Sección 3`) |
| **8** | **Contacto**<br>`/contacto` | `Contacto y Agenda de Videollamada \| Cobalto Carmesí Studios` | `Agenda una videollamada de diagnóstico, escríbenos por WhatsApp o llama al estudio para conversar sobre tu marca personal o proyecto audiovisual.` | `Hablemos de la presencia que quieres construir.` | 1. `Agenda una videollamada` (`#agenda`)<br>2. `Escribir por WhatsApp`<br>3. `Llamar al estudio`<br>4. `Ubicación y presencia digital`<br>5. `O déjanos un mensaje breve` *(Formulario opcional de 3 campos)*<br>6. `Cómo iniciamos un proyecto` *(FAQs)* | `H1` Canónico (`Bloque 8`) + Estructura de canales (`Sección 9`) |

---

## 4. Handoff Estructurado (`content-conversion-specialist` → `product-designer` y `frontend-engineer`)

Conforme a `30-ownership-handoffs.md` y la gobernanza V3.2 en Modo Lite, se formaliza la entrega de la **Fase 1B · Arquitectura de Mensajes, Copy y Conversión**:

- **Artefacto principal entregado:** [`docs/02-content/site-copy-and-messaging.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/02-content/site-copy-and-messaging.md) (**Version 1.0 · Status: Ready for Review**), indexado en [`docs/02-content/README.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/02-content/README.md).
- **Fuentes y decisiones base respetadas:**
  - Fuente primaria del cliente: [`inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md).
  - Gobernanza y validación: [`PRODUCT.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/PRODUCT.md), [`VALIDATION.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/VALIDATION.md), [`docs/00-project/facts.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/00-project/facts.md) (`FACT-001` a `FACT-014`) y [`docs/00-project/decisions.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/00-project/decisions.md) (`D-001` a `D-006`).
  - Estrategia y arquitectura: [`docs/01-strategy/site-strategy-and-architecture.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/01-strategy/site-strategy-and-architecture.md) (v1.0).

### 4.1 Qué pueden asumir como firme `product-designer` (Fase 2) y `frontend-engineer` (Fase 3)
1. **Fidelidad canónica verificada (`FACT-009`):** Todos los textos públicos provistos en el Documento Maestro (los 8 bloques de `Inicio`, la propuesta de valor, los 5 argumentos de elección, las descripciones y capacidades de los servicios A–G, las 5 FAQs y los metadatos SEO de `Inicio`) están integrados literalmente y marcados como `[CLIENT-PROVIDED / CANONICAL]`.
2. **Cumplimiento de prohibiciones comerciales (`D-004`, `CA-COMM-01` a `CA-COMM-05`):** El sistema de copy completo está libre de precios, rangos de inversión, paquetes tarifados, descuentos, promesas de viralidad o garantías de ventas, testimonios ficticios y contadores sin contexto.
3. **Resolución de anclas y enrutamiento interno (`RECOMMENDATION-01`):**
   - El Bloque 6 de `Inicio` y el `Footer` cuentan con destinos exactos hacia `/fotografia#empresas`, `/fotografia#sesiones-particulares`, `/eventos-sociales` y `/creacion-de-contenido#produccion-y-drones`.
   - El Servicio G (*Formación y mentoría*) cuenta con sección anclada en `/marca-personal#formacion-y-mentoria` y mención conectada en `/el-estudio#formacion`.
4. **Matriz de CTAs y enlaces de WhatsApp lista para implementación (`CA-CONV-01` a `CA-CONV-04`):** Los 7 mensajes prellenados de WhatsApp contextualizados por página/servicio ya incluyen su cadena `URL-encoded` lista para inyectar sobre la variable del número confirmado.

### 4.2 Directrices de Diseño y Experiencia para `product-designer` (`docs/03-design/`)
1. **Jerarquía visual en el Hero de `Inicio` (`CA-COMM-04`, `CA-PERF-02`):** Diseñar el Bloque 1.1 para lucir una pieza breve de trabajo real en marca personal, retratos y producción con su imagen de respaldo (*poster*), evitando cualquier protagonismo de drones o eventos sociales.
2. **Diferenciación clara dentro de `/fotografia`:** Diseñar la página `/fotografia` con navegación interna rápida en el Hero hacia los dos bloques anclados (`#empresas` y `#sesiones-particulares`), de modo que empresas y clientes particulares identifiquen de inmediato su sección y su CTA específico (*«Cuéntanos tu proyecto»* vs. *«Planeemos tu sesión»*).
3. **Layout elástico en `/proyectos` y Bloque 1.5 (`INFERRED-01`, `CA-COMM-05`):** Diseñar las tarjetas de casos de estudio bajo la estructura de 5 puntos de forma que la grilla luzca equilibrada tanto si se lanza inicialmente con 1 o 2 casos autorizados como cuando se sumen los 4 candidatos, apoyándose en el *Bloque 6.5 (Copy de respaldo editorial)*.
4. **Destacar la nota de alcance en `/creacion-de-contenido` (Bloque 3.4) y `/eventos-sociales` (Bloque 5.4):** Dar tratamiento editorial limpio y legible (no letra pequeña oculta, sino un recuadro o nota de transparencia) a la aclaración sobre gestión de redes/pauta contratada por separado (`FACT-006`) y a la revisión previa de disponibilidad de fechas en eventos (`Sección 4.E`).

### 4.3 Ítems `[POR DEFINIR]` y Recomendaciones Pendientes de Aprobación del Cliente (**Darío Ilescas Cruz**)
1. **Aprobación del copy extendido (`[PROPOSED COPY — Ready for Review]`):** Validar los textos de desarrollo de las páginas interiores (`Marca personal`, `Creación de contenido`, `Fotografía`, `Eventos sociales`, `Proyectos`, `El estudio`, `Contacto`), los títulos SEO interiores y los mensajes prellenados de WhatsApp adaptados por servicio.
2. **Insumos bloqueantes para producción (`PEND-01` a `PEND-10` — No bloquean Fase 2 de Diseño ni Fase 3 de Desarrollo local):**
   - `PEND-01`: Número de WhatsApp comercial confirmado con código de país.
   - `PEND-02`: Número telefónico confirmado para llamadas (`tel:`).
   - `PEND-03`: Dirección de correo electrónico comercial.
   - `PEND-04`: URL pública de reserva de citas de Google Calendar.
   - `PEND-05`: URLs oficiales de Instagram, Facebook y otras redes a mostrar.
   - `PEND-06`: Texto comercial de ubicación y cobertura (sin domicilio particular — `CA-LEGAL-02`).
   - `PEND-07`: Dominio público definitivo de Cobalto Carmesí Studios.
   - `PEND-08`: Autorizaciones, alcance ejecutado y piezas finales para las fichas `PORT-01` (*Angie Mesta*), `PORT-02` (*H Centro Hidrofacial*), `PORT-03` (*Durambene*) y `PORT-04` (*Archivo Sefirot*).
   - `PEND-09`: Logotipo final y selección de fotografías/video corto para el Hero y páginas interiores.
   - `PEND-10`: Texto legal definitivo del Aviso de Privacidad (`/privacidad` — `CA-LEGAL-01`).
