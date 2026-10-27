# Cobalto Carmesí Studios · Sitio Web Oficial

Sitio web corporativo y portafolio editorial de **Cobalto Carmesí Studios** (evolución estratégica y creativa de *Sefirot*), bajo la Dirección Creativa de **Darío Ilescas Cruz**.

Construido bajo la metodología **`pyme-template` V3.2 (Modo Lite)** e impulsado por **Astro + Tailwind CSS** con enfoque en rendimiento, accesibilidad WCAG AA/AAA, SEO on-page y conversión hacia videollamada diagnóstica (Google Calendar) y WhatsApp.

---

## Stack Técnico y Fundaciones Visuales

- **Framework:** [Astro 4](https://astro.build/) (Static Site Generation · Cero JS innecesario en el cliente).
- **Estilos y Sistema de Diseño:** [Tailwind CSS 3.4](https://tailwindcss.com/) con sistema de tokens **Claroscuro Cinematográfico**:
  - **Azul Cobalto Oficial:** `#0047AB` (`cobalt-600`) y acento accesible sobre fondo oscuro `#4C8DF5` (`cobalt-400`).
  - **Carmesí Oficial:** `#B22222` (`crimson-600`).
  - **Superficies de Claroscuro:** Carbón y obsidiana (`#06080D`, `#0A0D14`, `#10141E`).
- **Tipografía 100% Autohospedada (WOFF2 Variable):**
  - **Display y Titulares:** `Cabinet Grotesk` (`public/fonts/CabinetGrotesk-Variable.woff2`).
  - **Cuerpo, UI y Etiquetas:** `Satoshi` (`public/fonts/Satoshi-Variable.woff2` y cursiva).
- **Iconografía:** Sistema vectorial Lucide en retícula `24×24 px` con trazo fino `1.5px`.

---

## Arquitectura del Sitio (9 Rutas + Sitemap)

| Ruta | Página | Rol Estratégico |
|---|---|---|
| `/` | **Inicio** | 8 bloques canónicos: Hero, Identificación, Qué Hacemos, Cómo Trabajamos, Dirección Creativa, Servicios Complementarios, FAQs y Cierre de Agenda. |
| `/marca-personal` | **Marca Personal** | **Servicio Prioritario 1** + bloque de Formación y Mentoría (`#formacion-y-mentoria`). |
| `/creacion-de-contenido` | **Creación de Contenido** | **Servicio Prioritario 2** + alcance claro (sin CM automático) + Producción y Drones (`#produccion-y-drones`). |
| `/fotografia` | **Fotografía** | Doble línea de negocio: Empresas (`#empresas`) y Sesiones Particulares (`#sesiones-particulares`). |
| `/eventos-sociales` | **Eventos Sociales y XV Años** | Servicio complementario con estética editorial y consulta de disponibilidad por fecha. |
| `/proyectos` | **Proyectos** | Casos reales documentados en 5 puntos (Cliente, Contexto, Enfoque, Pieza, Resultado) con filtro interactivo. |
| `/el-estudio` | **El Estudio** | Manifiesto, transición *Sefirot → Cobalto Carmesí Studios*, Dirección Creativa y 4 pilares de criterio. |
| `/contacto` | **Contacto** | Conversión directa vía Google Calendar (`#agendar`), WhatsApp, Teléfono y formulario ligero de 3 campos. |
| `/privacidad` | **Aviso de Privacidad** | Cumplimiento legal de datos personales sin exposición de domicilio particular. |
| `/sitemap.xml` | **Sitemap XML** | Generado dinámicamente desde `src/pages/sitemap.xml.ts`. |

---

## Estructura del Repositorio

```text
├── docs/                        # Conocimiento procesado y entregables por fase (Modo Lite)
│   ├── 00-project/              # Contexto, hechos verificados, decisiones y auditoría de discovery
│   ├── 01-strategy/             # Arquitectura de información, sitemap y embudo de conversión
│   ├── 02-content/              # Copy maestro bloque por bloque, FAQs y mensajes de WhatsApp
│   ├── 03-design/               # Tokens de diseño, paleta, tipografía y especificaciones UI
│   └── 05-development/          # Documentación de implementación frontend y guía de edición
├── inputs/                      # Fuentes originales del cliente (SOLO LECTURA)
│   ├── brand/                   # Logotipos oficiales en SVG y PNG
│   └── business/                # Documento Maestro Web
├── public/                      # Activos estáticos servidos en raíz
│   ├── brand/                   # Vectores de marca optimizados para modo oscuro
│   ├── fonts/                   # Fuentes WOFF2 Variable locales (Cabinet Grotesk + Satoshi)
│   ├── media/portfolio/         # Pósters visuales de casos de estudio
│   └── robots.txt               # Directivas de indexación
├── src/
│   ├── components/              # Componentes Astro (global, sections, cards, ui, forms)
│   ├── data/                    # Capa central de contenido editable (siteConfig, services, projects, faqs)
│   ├── layouts/                 # Layout maestro con SEO, preload de fuentes y telemetría de CTAs
│   ├── pages/                   # Las 9 vistas del sitio + endpoint sitemap.xml.ts
│   └── styles/                  # CSS global, @font-face y utilidades de sistema
├── AGENTS.md                    # Gobernanza de roles (pyme-template V3.2)
├── PRODUCT.md                   # Snapshot ejecutivo vigente del producto
└── VALIDATION.md                # Matriz de criterios de aceptación (CA-*)
```

---

## Comandos de Desarrollo

Requisitos previos: **Node.js 18.17+** o **20+**.

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo local (http://localhost:4321)
npm run dev

# 3. Compilar versión de producción estática en dist/
npm run build

# 4. Previsualizar compilación de producción localmente
npm run preview
```

---

## Cómo Actualizar Datos de Contacto y Contenido (`CA-EDIT-01`)

Toda la información comercial y enlaces pendientes (`[POR DEFINIR]`) se administran desde un único archivo sin necesidad de tocar componentes visuales:

- **Canales de contacto y URLs (`Google Calendar`, `WhatsApp`, `Teléfono`, `Correo`, `Redes Sociales`):**
  Editar [`src/data/siteConfig.ts`](src/data/siteConfig.ts). Al colocar la URL o número definitivo y cambiar `status` a `'ACTIVO'`, todos los botones del sitio se actualizan automáticamente.
- **Catálogo de servicios:** [`src/data/services.ts`](src/data/services.ts).
- **Casos de portafolio:** [`src/data/projects.ts`](src/data/projects.ts).
- **Preguntas frecuentes (FAQs):** [`src/data/faqs.ts`](src/data/faqs.ts).

---

## Gobernanza del Proyecto

Este repositorio opera bajo las reglas de **`AGENTS.md`**, **`PRODUCT.md`** y **`VALIDATION.md`**:
- `PROPOSAL ≠ DECISION ≠ APPROVAL` · `CAPABILITY ≠ AUTHORITY`
- Cero publicación de precios, paquetes tarifados o descuentos (`CA-COMM-01`).
- Cero invención de datos de contacto, métricas o testimonios (`CA-COMM-02..03`).
- Preservación estricta de `inputs/` como directorio de solo lectura.
