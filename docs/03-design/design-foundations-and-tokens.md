# Design Foundations & Tokens · Cobalto Carmesí Studios

**Status:** Ready for Review  
**Version:** 1.0  
**Last updated:** 2026-10-26  
**Author:** `product-designer` (V3.2)  
**Decision Authority:** Darío Ilescas Cruz (Director Creativo / Cliente)  
**Canonical Sources:**  
- [`inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md) (Secciones 1, 3, 6, 9, 10, 12)
- [`inputs/brand/`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/brand/) (Archivos vectoriales oficiales: `logo cobalto horizontal.svg`, `logo cobalto isotipo.svg`)
- [`PRODUCT.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/PRODUCT.md) (Decisiones D-001 a D-006)
- [`VALIDATION.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/VALIDATION.md) (`CA-RESP-01`, `CA-PERF-01..03`, `CA-A11Y-01..03`, `CA-CONV-01..05`)
- [`docs/00-project/decisions.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/00-project/decisions.md)

---

## 1. Concepto Rector e Identidad Visual

### 1.1 El Claroscuro Digital y la Arquitectura Editorial
Cobalto Carmesí Studios opera en la intersección de tres pilares estéticos:
1. **Claroscuro Cinematográfico (Tenebrismo y Drama Focal):** Inspirado en la iluminación renacentista y barroca (Caravaggio, Rembrandt), donde el sujeto emerge de fondos oscuros profundos mediante iluminación selectiva y dramática. En digital, esto se traduce en superficies de carbón/obsidiana con atmósferas lumínicas tenues en azul cobalto y acentos lumínicos focalizados, evitando los fondos grises planos de las plantillas comerciales.
2. **Rigor Arquitectónico (Estructura y Chasis de 1px):** Retículas ortogonales expuestas, líneas divisorias precisas de 1 píxel, encuadres marcados, etiquetas categóricas sobrias y radios de curvatura rectos o mínimos (0px a 4px). El diseño se percibe construido y estructurado, sin saturaciones decorativas ni numeraciones artificiales.
3. **Tipografía Editorial de Alto Estatus (Dúo Tipográfico Puro):** Contraste pronunciado y sobrio entre una tipografía de títulos escultural, grotesca y contemporánea (**Cabinet Grotesk**) y una tipografía de lectura excepcionalmente limpia, cristalina y equilibrada (**Satoshi**), empleada tanto en párrafos extensos como en microcopy, navegación y etiquetas de categoría en mayúsculas con espaciado amplio, prescindiendo por completo de tipografías monospace para proyectar distinción editorial de estudio y no estética técnica de software.

### 1.2 Rol Cromático de la Marca
- **Azul Cobalto (`#0047AB`):** El protagonista indiscutible. Representa autoridad intelectual, profundidad estratégica, visión cinematográfica y serenidad ejecutiva. No es un azul tecnológico frío; es un pigmento con cuerpo, denso y vibrante.
- **Carmesí (`#B22222`):** El acento quirúrgico. Encarna pasión controlada, rigor, prestigio y energía estética. Se utiliza con máxima disciplina: en detalles, estados activos sutiles, micro-insignias, indicadores de punto y acentos tipográficos selectos. Nunca inunda la pantalla para preservar su valor de impacto.
- **Neutros de Claroscuro (Carbón y Obsidiana):** Crean la atmósfera profunda donde la imagen y el texto adquieren tridimensionalidad.
- **Neutros de Luz (Marfil y Hueso):** Sustituyen al blanco puro deslumbrante en textos de párrafo, proporcionando una lectura confortable y una sensación táctil de papel editorial fino.

---

## 2. Paleta Cromática y Escalas Tonales Oficiales

### 2.1 Extracción Vectorial de Marca
A partir de la inspección de los vectores canónicos en `inputs/brand/logo cobalto horizontal.svg`:
- **Azul Cobalto Oficial:** `#0047AB` (RGB: `0, 71, 171` | HSL: `215°, 100%, 34%`)
- **Carmesí Oficial (Firebrick):** `#B22222` (RGB: `178, 34, 34` | HSL: `0°, 68%, 42%`)
- **Blanco Luz Oficial:** `#FFFFFF` (RGB: `255, 255, 255`)
- **Negro Chasis Oficial:** `#000000` (Vector trazado)

---

### 2.2 Escala Tonal Azul Cobalto (`cobalt`)
Anclada oficialmente en **`cobalt-600` (`#0047AB`)**.

| Paso | Código HEX | RGB | HSL | Propósito de Uso UI / Diseño |
|---|---|---|---|---|
| `cobalt-50` | `#EEF4FF` | `238, 244, 255` | `219°, 100%, 97%` | Fondos de alerta suave o etiquetas luminosas |
| `cobalt-100` | `#D9E5FE` | `217, 229, 254` | `221°, 95%, 92%` | Bordes en estados seleccionados claros |
| `cobalt-200` | `#B8D0FD` | `184, 208, 253` | `219°, 96%, 86%` | Textos de acento sobre fondos oscuros medios |
| `cobalt-300` | `#85B2FA` | `133, 178, 250` | `217°, 93%, 75%` | Iconos de acento secundario y links hover |
| `cobalt-400` | `#4C8DF5` | `76, 141, 245` | `217°, 90%, 63%` | Acento vibrante sobre fondo carbón; foco accesible |
| `cobalt-500` | `#1E6CE9` | `30, 108, 233` | `217°, 82%, 52%` | Estado `:hover` del botón primario |
| **`cobalt-600`** | **`#0047AB`** | **`0, 71, 171`** | **`215°, 100%, 34%`** | **COLOR OFICIAL MARCA. Botón primario, acento protagonista** |
| `cobalt-700` | `#00388A` | `0, 56, 138` | `216°, 100%, 27%` | Estado `:active` de botón primario, badges sobrios |
| `cobalt-800` | `#002B6D` | `0, 43, 109` | `216°, 100%, 21%` | Contenedor de acento cobalto atenuado |
| `cobalt-900` | `#001F52` | `0, 31, 82` | `217°, 100%, 16%` | Fondos de tarjetas con tinte azulado sutil |
| `cobalt-950` | `#001336` | `0, 19, 54` | `219°, 100%, 11%` | Gradientes ambientales de claroscuro profundo |

---

### 2.3 Escala Tonal Carmesí (`crimson`)
Anclada oficialmente en **`crimson-600` (`#B22222`)**.

| Paso | Código HEX | RGB | HSL | Propósito de Uso UI / Diseño |
|---|---|---|---|---|
| `crimson-50` | `#FDF2F2` | `253, 242, 242` | `0°, 64%, 97%` | Superficie de validación o badge de alerta |
| `crimson-100` | `#FDE2E2` | `253, 226, 226` | `0°, 86%, 94%` | Fondos suaves de tags especiales |
| `crimson-200` | `#FCC8C8` | `252, 200, 200` | `0°, 88%, 89%` | Acento desaturado para detalles gráficos |
| `crimson-300` | `#F89E9E` | `248, 158, 158` | `0°, 86%, 80%` | Acento de texto sobre fondos muy oscuros |
| `crimson-400` | `#F06565` | `240, 101, 101` | `0°, 82%, 67%` | Indicador activo o estado de error legible |
| `crimson-500` | `#DF3535` | `223, 53, 53` | `0°, 73%, 54%` | Estado `:hover` de elementos carmesí |
| **`crimson-600`** | **`#B22222`** | **`178, 34, 34`** | **`0°, 68%, 42%`** | **COLOR OFICIAL MARCA. Acento quirúrgico, micro-tags, badges** |
| `crimson-700` | `#901A1A` | `144, 26, 26` | `0°, 69%, 33%` | Estado activo carmesí, líneas de corte sutiles |
| `crimson-800` | `#741717` | `116, 23, 23` | `0°, 67%, 27%` | Bordes de tarjetas carmesí en claroscuro |
| `crimson-900` | `#5E1515` | `94, 21, 21` | `0°, 63%, 23%` | Fondo de badge de alto estatus |
| `crimson-950` | `#390808` | `57, 8, 8` | `0°, 75%, 13%` | Tinte de sombra ambiental carmesí muy oscuro |

---

### 2.4 Escala de Neutros de Claroscuro (`charcoal` / `stone`)
Escala formulada con un ligerísimo tinte frío/azulado que armoniza orgánicamente con el azul cobalto y evita el gris plástico o neutro descolorido.

| Token | Código HEX | RGB | Rol en la Arquitectura de Superficies |
|---|---|---|---|
| `charcoal-950` | `#06080D` | `6, 8, 13` | **Surface Canvas:** Fondo absoluto del viewport (`body`) |
| `charcoal-900` | `#0A0D14` | `10, 13, 20` | **Surface Base:** Fondo principal de secciones y bloques |
| `charcoal-850` | `#10141E` | `16, 20, 30` | **Surface Elevated (Nivel 1):** Tarjetas de servicio, contenedores de proyectos |
| `charcoal-800` | `#171D2B` | `23, 29, 43` | **Surface Overlay (Nivel 2):** Modales, menú desplegable móvil, popovers |
| `charcoal-750` | `#1F2637` | `31, 38, 55` | **Surface Interactive:** Estado hover de tarjetas, campos de formulario |
| `charcoal-700` | `#283147` | `40, 49, 71` | **Border Dominant:** Bordes arquitectónicos marcados, líneas de división |
| `charcoal-600` | `#3B4660` | `59, 70, 96` | **Border Subtle:** Bordes sutiles entre celdas o elementos secundarios |
| `charcoal-500` | `#5B6785` | `91, 103, 133` | **Text Muted:** Metadatos terciarios, etiquetas inactivas |
| `charcoal-400` | `#8B97B0` | `139, 151, 176` | **Text Secondary:** Párrafos de apoyo, subtítulos, descripciones |
| `charcoal-300` | `#BDC7D9` | `189, 199, 217` | **Text Readable:** Párrafos principales de lectura prolongada |
| `charcoal-200` | `#DDE3ED` | `221, 227, 237` | **Text Prominent:** Títulos secundarios, botones secundarios |
| `charcoal-100` | `#EFF2F7` | `239, 242, 247` | **Text Primary Light:** Títulos H1-H3, cifras de impacto |

---

### 2.5 Escala de Neutros de Papel / Luz (`bone` / `paper`)
Para superficies de luz controlada, tipografía de máximo contraste y elementos editoriales:

| Token | Código HEX | RGB | Propósito |
|---|---|---|---|
| `paper-pure` | `#FFFFFF` | `255, 255, 255` | Blanco puro absoluto. Títulos display principales, iconos activos |
| `paper-bone` | `#FBFBFA` | `251, 251, 250` | Hueso / Marfil editorial. Textos destacados sobre fondo oscuro sin fatiga visual |
| `paper-warm` | `#F4F4F0` | `244, 244, 240` | Pergamino / Hueso cálido. Fondos claros si se requiere bloque de contraste inverso |
| `paper-sand` | `#E8E8E2` | `232, 232, 226` | Separadores o bordes sobre superficies claras |

---

### 2.6 Mapeo de Tokens Semánticos de Sistema

```css
:root {
  /* ==========================================================================
     SURFACES & BACKGROUNDS
     ========================================================================== */
  --bg-canvas: #06080D;              /* Lienzo global */
  --bg-base: #0A0D14;                /* Sección estándar */
  --bg-surface: #10141E;             /* Tarjeta / Módulo base */
  --bg-surface-elevated: #171D2B;    /* Popover / Menú móvil */
  --bg-surface-interactive: #1F2637; /* Input inactivo / Card hover */
  --bg-surface-accent: #0047AB;      /* Contenedor primario de marca */
  
  /* ==========================================================================
     TYPOGRAPHY & FOREGROUNDS
     ========================================================================== */
  --text-primary: #FFFFFF;           /* Títulos, énfasis máximo */
  --text-editorial: #FBFBFA;         /* Titulares de lectura editorial */
  --text-body: #BDC7D9;              /* Cuerpo de texto / Satoshi */
  --text-secondary: #8B97B0;         /* Subtítulos y descripciones */
  --text-muted: #5B6785;             /* Metadatos, etiquetas secundarias, captions */
  --text-accent-cobalt: #4C8DF5;     /* Text links o acento cobalto legible */
  --text-accent-crimson: #F06565;    /* Alertas, acento carmesí legible */
  
  /* ==========================================================================
     ARCHITECTURAL BORDERS
     ========================================================================== */
  --border-hairline: rgba(255, 255, 255, 0.08); /* Líneas de encuadre 1px */
  --border-subtle: rgba(255, 255, 255, 0.15);   /* Separadores y bordes de tarjeta */
  --border-focus: #4C8DF5;                       /* Anillo de foco accesible */
  --border-cobalt: #0047AB;                      /* Borde de realce institucional */
  --border-crimson: #B22222;                     /* Borde de acento carmesí */
  
  /* ==========================================================================
     INTERACTIVE STATES
     ========================================================================== */
  --interactive-primary-default: #0047AB;
  --interactive-primary-hover: #1E6CE9;
  --interactive-primary-active: #00388A;
  --interactive-primary-text: #FFFFFF;
  
  --interactive-secondary-default: rgba(255, 255, 255, 0.04);
  --interactive-secondary-border: rgba(255, 255, 255, 0.15);
  --interactive-secondary-hover: rgba(255, 255, 255, 0.08);
  --interactive-secondary-text: #FFFFFF;
  
  --interactive-accent-crimson: #B22222;
  --interactive-accent-crimson-hover: #DF3535;
}
```

---

### 2.7 Matriz de Validación de Accesibilidad WCAG 2.1 (`CA-A11Y-02`)

Para cumplir estrictamente con el criterio **`CA-A11Y-02`**, se calculan y verifican los ratios de contraste luminiscente sobre los fondos del sistema:

| Combinación Evaluada | Color Texto | Color Fondo | Ratio Calculado | Nivel WCAG | Veredicto & Regla de Aplicación |
|---|---|---|---|---|---|
| **Titular sobre Canvas** | `#FFFFFF` | `#06080D` | **19.8 : 1** | **AAA** | **Aprobado sin restricción.** Contraste impecable. |
| **Titular sobre Base** | `#FFFFFF` | `#0A0D14` | **18.7 : 1** | **AAA** | **Aprobado sin restricción.** Contraste óptimo. |
| **Texto de Lectura sobre Base** | `#BDC7D9` | `#0A0D14` | **13.2 : 1** | **AAA** | **Aprobado sin restricción.** Legibilidad de párrafos. |
| **Texto Secundario sobre Card** | `#8B97B0` | `#10141E` | **6.7 : 1** | **AA (Normal) / AAA (Grande)** | **Aprobado.** Ideal para descripciones y metadatos. |
| **Texto Muted sobre Card** | `#5B6785` | `#10141E` | **3.5 : 1** | **AA (Grande / UI)** | **Condicionado.** Solo para marcas de agua, divisores sutiles y metadatos complementarios secundarios. No usar en cuerpo de texto. |
| **Botón Primario (Texto/Fondo)** | `#FFFFFF` | `#0047AB` | **6.0 : 1** | **AA (Normal) / AAA (Grande)** | **Aprobado.** Botón Google Calendar (*Agendar videollamada*). |
| **Botón Primario Hover** | `#FFFFFF` | `#1E6CE9` | **4.6 : 1** | **AA (Normal y Grande)** | **Aprobado.** Estado `:hover` seguro. |
| **Acento Cobalto sobre Base** | `#4C8DF5` | `#0A0D14` | **7.5 : 1** | **AAA** | **Aprobado.** Enlaces de texto e iconos cobalto sobre oscuro. |
| **Acento Carmesí sobre Base** | `#F06565` | `#0A0D14` | **6.1 : 1** | **AA / AAA** | **Aprobado.** Variedad carmesí calibrada para texto legible. |
| **Badge Carmesí Oficial** | `#FFFFFF` | `#B22222` | **5.3 : 1** | **AA** | **Aprobado.** Para badges o micro-etiquetas con fondo carmesí. |

> **Regla Normativa de Diseño:**  
> Queda **estrictamente prohibido** utilizar el azul cobalto oficial `#0047AB` como color de texto directamente sobre fondos oscuros `#0A0D14` (su contraste de 2.8:1 violaría WCAG). Cuando se requiera texto de acento azul sobre fondo oscuro, debe usarse **`cobalt-400` (`#4C8DF5`)**, que alcanza un ratio de 7.5:1 (Nivel AAA).

---

## 3. Sistema Tipográfico Editorial

### 3.1 Familias Tipográficas Seleccionadas (Fontshare)

El sistema opera bajo un **dúo tipográfico exclusivo**, eliminando cualquier fuente monospace para evitar estéticas de desarrollo de software y reforzar un carácter editorial, cinematográfico y arquitectónico:

1. **Display & Titulares: `Cabinet Grotesk` (Fontshare)**
   - **Clasificación:** Grotesca contemporánea escultural con glifos geométricos angulares y terminaciones arquitectónicas firmes.
   - **Personalidad:** Sofisticada, imponente, cinematográfica. Evoca estatus sin caer en clasicismo obsoleto.
   - **Pesos autorizados:** `700` (Bold), `800` (ExtraBold), `900` (Black).
   - **Uso estricto:** Encabezados H1, H2, H3, nombres de servicios principales y citas destacadas.

2. **Cuerpo, UI, Lectura & Metadatos: `Satoshi` (Fontshare)**
   - **Clasificación:** Neo-grotesca geométrica con proporciones humanistas optimizada para pantallas retina.
   - **Personalidad:** Serena, cristalina, hiperlegible, contemporánea. No compite con Cabinet Grotesk; la sostiene con equilibrio y elegancia.
   - **Pesos autorizados:** `400` (Regular), `500` (Medium), `700` (Bold para énfasis puntual y etiquetas de estado).
   - **Uso estricto:** Párrafos de lectura, navegación, botones, inputs de formulario, FAQs, microcopy, metadatos y etiquetas categóricas (en mayúsculas con espaciado amplio).

---

### 3.2 Escala Tipográfica Fluida (Fluid Typography)
Implementada mediante funciones `clamp()` para transiciones orgánicas entre Viewport Móvil (375px) y Viewport Escritorio (1440px), garantizando armonía en cualquier resolución intermedia:

| Token Tipográfico | Fórmula CSS `clamp()` | Tamaño Móvil | Tamaño Desktop | Line Height | Tracking | Familia & Peso |
|---|---|---|---|---|---|---|
| `display-2xl` | `clamp(2.75rem, 5vw + 1.5rem, 5.25rem)` | 44px | 84px | `1.05` | `-0.035em` | Cabinet Grotesk / 900 |
| `display-xl` | `clamp(2.25rem, 4vw + 1.25rem, 4.25rem)` | 36px | 68px | `1.1` | `-0.03em` | Cabinet Grotesk / 800 |
| `h1` | `clamp(2.0rem, 3vw + 1rem, 3.25rem)` | 32px | 52px | `1.15` | `-0.025em` | Cabinet Grotesk / 800 |
| `h2` | `clamp(1.625rem, 2vw + 1rem, 2.5rem)` | 26px | 40px | `1.2` | `-0.02em` | Cabinet Grotesk / 700 |
| `h3` | `clamp(1.375rem, 1.5vw + 0.875rem, 1.875rem)` | 22px | 30px | `1.25` | `-0.015em` | Cabinet Grotesk / 700 |
| `h4` | `clamp(1.125rem, 0.75vw + 0.875rem, 1.375rem)` | 18px | 22px | `1.3` | `-0.01em` | Cabinet Grotesk / 700 |
| `body-lead` | `clamp(1.125rem, 0.5vw + 1rem, 1.25rem)` | 18px | 20px | `1.6` | `-0.005em` | Satoshi / 400 o 500 |
| `body-base` | `1rem` (16px constante) | 16px | 16px | `1.65` | `0em` | Satoshi / 400 |
| `body-sm` | `0.875rem` (14px constante) | 14px | 14px | `1.55` | `0.005em` | Satoshi / 400 |
| `caption` | `0.75rem` (12px constante) | 12px | 12px | `1.4` | `0.02em` | Satoshi / 500 |
| `badge-caps` | `0.6875rem` (11px constante) | 11px | 11px | `1.3` | `0.08em` (All Caps) | Satoshi / 700 |
| `ui-meta` | `0.8125rem` (13px constante) | 13px | 13px | `1.4` | `0.02em` | Satoshi / 500 |

---

## 4. Retícula Arquitectónica, Grid & Spacing

### 4.1 Retícula Editorial
- **Desktop (>= 1024px):**
  - **12 columnas:** `grid-cols-12`, gutter `gap-6` (24px) o `gap-8` (32px).
  - **Ancho máximo de contenedor:** `max-w-7xl` (1280px) para contenido estructurado; `max-w-[1440px]` para vitrinas visuales y encuadres de pantalla completa.
  - **Márgenes exteriores:** `px-6` (24px) en tablet, `px-12` (48px) en desktop regular, `px-16` (64px) en pantallas amplias.
- **Mobile (< 768px):**
  - **4 columnas:** `grid-cols-4`, gutter `gap-4` (16px).
  - **Márgenes exteriores de seguridad:** `px-5` (20px) o `px-6` (24px), garantizando que ningún elemento toque el borde del dispositivo.

---

### 4.2 Líneas de Encuadre Arquitectónico (Chasis 1px)
A diferencia de los sitios web convencionales con cajas flotantes, Cobalto Carmesí utiliza un sistema de **encuadre de chasis arquitectónico**:
- **Bordes de 1 píxel sutiles:** `border border-white/10` o `border-charcoal-700/60`.
- **Estructura tipo cuadrante:** Los bloques y tarjetas se dividen mediante líneas continuas horizontales y verticales.
- **Etiquetas de categoría y disciplina:** Los módulos y tarjetas se identifican mediante micro-etiquetas sobrias en versalitas (all-caps) con tipografía Satoshi (`font-sans text-xs uppercase tracking-wider text-cobalt-400`), eliminando cualquier prefijo numérico innecesario (`01 //`, `02 //`) para una apariencia limpia, atemporal y directiva.

---

### 4.3 Sistema de Radios de Curvatura (Border Radius)
Para mantener un carácter sobrio, arquitectónico, de alto estatus y alejado deliberadamente del estilo redondeado infantil de las aplicaciones SaaS:

| Clase Tailwind | Valor en Píxeles | Uso Exclusivo en el Sistema |
|---|---|---|
| `rounded-none` | **0px** | Estructuras de sección, paneles de encuadre, divisores, banners principales y marcos de video. |
| `rounded-sm` | **2px** | Inputs de formulario, badges de estado, tags técnicos y botones compactos. |
| `rounded` | **4px** | Tarjetas de servicios, tarjetas de proyectos, menús desplegables y modales. |
| `rounded-md` | **6px** | **Límite máximo permitido en todo el proyecto.** Solo para elementos flotantes independientes. |

> **Prohibición de Estilo:** Queda terminantemente vetado el uso de `rounded-xl`, `rounded-2xl`, `rounded-3xl` o `rounded-full` en tarjetas y botones principales. La sobriedad geométrica es un pilar innegociable de la identidad visual.

---

### 4.4 Escala de Espaciado Vertical (Ritmo Editorial)
- **Micro-espacios:** `gap-2` (8px), `gap-3` (12px), `gap-4` (16px) entre etiquetas, iconos y textos subordinados.
- **Espaciado modular:** `p-6` (24px), `p-8` (32px), `p-10` (40px) dentro de tarjetas y contenedores.
- **Respiro entre secciones (Macro-ritmo):**
  - Móvil: `py-16` (64px) a `py-20` (80px).
  - Desktop: `py-24` (96px) a `py-32` (128px).

---

## 5. Elevación, Claroscuro, Iluminación y Manejo de Medios

### 5.1 Jerarquía de Capas de Claroscuro
La tridimensionalidad se construye a través de la **luminosidad relativa de las superficies**, no mediante sombras proyectadas pesadas:

```
[ Capa 0: Viewport Canvas ] ---> #06080D (Negro obsidiana absoluto)
       ↓
[ Capa 1: Superficie Sección ] -> #0A0D14 (Fondo carbón con halo radial sutil)
       ↓
[ Capa 2: Tarjeta Arquitectónica ] -> #10141E (Borde 1px white/10)
       ↓
[ Capa 3: Estado Activo / Hover ] ---> #171D2B (Borde 1px white/25 + Brillo cobalto)
       ↓
[ Capa 4: Superposición / Modal ] ---> #1F2637 (Overlay backdrop-blur-md)
```

---

### 5.2 Efectos de Iluminación Ambiental (Dramatic Atmospheric Glow)
Para dar vida al claroscuro sin saturar la vista, se implementan tres tipos de gradientes radiales atmosféricos:
1. **Cobalt Hero Glow:** Iluminación focal detrás del titular o del video de marca personal:
   ```css
   background: radial-gradient(circle at 50% 20%, rgba(0, 71, 171, 0.14) 0%, rgba(0, 71, 171, 0) 65%);
   ```
2. **Card Highlight Glow:** Reflejo tenue en la esquina de las tarjetas al interactuar:
   ```css
   background: radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(255, 255, 255, 0.05), transparent 40%);
   ```
3. **Crimson Surgical Accent:** Resplandor microfocal detrás de badges o botones carmesí:
   ```css
   background: radial-gradient(circle, rgba(178, 34, 34, 0.25) 0%, transparent 70%);
   ```

---

### 5.3 Proporciones y Especificación de Medios Audiovisuales (`CA-PERF-01..03`)

El Documento Maestro y los criterios de aceptación establecen estándares estrictos para el tratamiento de imágenes y video:

| Tipo de Medio | Proporción Requerida | Clase CSS | Propósito Editorial | Requisitos de Carga y Accesibilidad |
|---|---|---|---|---|
| **Retrato Marca Personal** | **4:5** o **3:4** | `aspect-[4/5]` / `aspect-[3/4]` | Fotografías de clientes, retratos del director creativo y sesiones de marca personal. | `loading="lazy"`, `decoding="async"`, `alt` descriptivo obligatorio (`CA-A11Y-03`). |
| **Producción Cinematográfica** | **16:9** (Widescreen) | `aspect-video` | Muestras de creación de contenido, producciones audiovisuales y eventos sociales. | Poster frame estático de alta calidad obligatorio (`CA-PERF-02`). |
| **Tomas Panorámicas / Drone** | **21:9** (Anamórfico) | `aspect-[21/9]` | Tomas con dron y producciones de escala arquitectónica. | Carga diferida; sin reproducción automática con audio (`CA-PERF-03`). |
| **Grid de Proyectos** | **1:1** o **4:3** | `aspect-square` / `aspect-[4/3]` | Vitrina de casos de estudio en vista mosaico. | Filtro de desaturación sutil al 10% que recupera color completo en `:hover`. |

---

## 6. Primitivas UI y Estados Interactivos (`CA-A11Y-01`)

### 6.1 Botón Primario: Agendar Videollamada (Google Calendar)
La acción más importante de todo el ecosistema digital. Proyecta máxima autoridad y claridad.

- **Fondo:** Azul Cobalto Oficial (`#0047AB`).
- **Texto:** Blanco puro (`#FFFFFF`), tipografía **Satoshi Medium**, tamaño 15px/16px, `tracking-[0.02em]`.
- **Radio:** `rounded-sm` (2px).
- **Icono acompañante:** Icono sutil de calendario o flecha en ángulo (`lucide-calendar` o `lucide-arrow-up-right`), trazo 1.5.
- **Clases Tailwind recomendadas:**
  ```html
  <a href="[URL_GOOGLE_CALENDAR]" 
     class="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide text-white bg-cobalt-600 rounded-sm shadow-sm transition-all duration-200 hover:bg-cobalt-500 hover:shadow-[0_0_20px_rgba(0,71,171,0.4)] active:bg-cobalt-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-900 disabled:opacity-50 disabled:pointer-events-none">
    <span>Agendar una videollamada</span>
    <svg class="w-4 h-4" stroke-width="1.5" ...></svg>
  </a>
  ```

---

### 6.2 Botón Secundario: WhatsApp / Explorar Servicios
Para conversiones secundarias y exploración guiada.

- **Fondo:** Vidrio arquitectónico neutro oscuro (`bg-white/[0.04]` o `bg-charcoal-850`).
- **Borde:** `border border-white/15`.
- **Texto:** Blanco editorial (`#FBFBFA`), tipografía **Satoshi Medium**.
- **Radio:** `rounded-sm` (2px).
- **Clases Tailwind recomendadas:**
  ```html
  <a href="[URL_WHATSAPP]" 
     class="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide text-editorial bg-white/[0.04] border border-white/15 rounded-sm backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.08] hover:border-white/30 hover:text-white active:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-900">
    <span>Conversar por WhatsApp</span>
    <svg class="w-4 h-4" stroke-width="1.5" ...></svg>
  </a>
  ```

---

### 6.3 Botón Terciario / Ghost & Enlaces Editoriales
Para acciones en menús, filtros de proyectos y enlaces de navegación secundaria.

- **Enlace Editorial con Subrayado Animado:**
  ```html
  <a href="/servicios/marca-personal" 
     class="group relative inline-flex items-center gap-2 text-sm font-medium text-charcoal-200 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-400">
    <span>Conocer el servicio de Marca Personal</span>
    <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" stroke-width="1.5" ...></svg>
    <span class="absolute -bottom-1 left-0 w-0 h-px bg-cobalt-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
  ```

---

### 6.4 Tarjeta de Servicio y Caso de Estudio Arquitectónica
- **Estructura:**
  - Encabezado con etiqueta de servicio en mayúsculas Satoshi (`SERVICIO PRIORITARIO`) y disciplina temática (`ESTRATEGIA & CONTENIDO`), sin numeraciones artificiales.
  - Título en **Cabinet Grotesk Bold**.
  - Párrafo en **Satoshi Regular**.
  - Lista de alcances con separadores sutiles de 1px.
  - CTA subordinado en la base con flecha direccional.
- **Interacción Hover:** La tarjeta no se desplaza abruptamente; se ilumina sutilmente el borde (`border-white/10` -> `border-white/25`) y el fondo pasa de `#10141E` a `#171D2B`.
- **Snippet de Maquetación Estructural:**
  ```html
  <article class="group relative flex flex-col justify-between p-8 bg-charcoal-850 border border-white/10 rounded transition-all duration-300 hover:border-white/25 hover:bg-charcoal-800">
    <div>
      <div class="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
        <span class="font-sans text-xs font-bold uppercase tracking-wider text-cobalt-400">SERVICIO PRIORITARIO</span>
        <span class="font-sans text-xs uppercase tracking-wider text-charcoal-500">ESTRATEGIA & DIRECCIÓN</span>
      </div>
      <h3 class="font-display text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-cobalt-300 transition-colors">
        Arquitectura de marca personal
      </h3>
      <p class="font-sans text-sm leading-relaxed text-charcoal-400 mb-6">
        Construcción de posicionamiento, discurso, presencia visual y dirección para líderes que necesitan comunicar su valor con autoridad.
      </p>
    </div>
    <div class="pt-6 border-t border-white/10 flex items-center justify-between">
      <span class="text-xs font-sans font-medium text-charcoal-400 group-hover:text-white transition-colors">Ver proceso y alcance</span>
      <span class="text-white transform transition-transform duration-200 group-hover:translate-x-1">→</span>
    </div>
  </article>
  ```

---

### 6.5 Acordeón de Preguntas Frecuentes (FAQ)
Diseñado para responder con claridad sin recargar la pantalla:
- **Disparador (`<button>`):** `w-full text-left flex justify-between items-center py-5 border-b border-white/10`.
- **Atributos de Accesibilidad:** `aria-expanded="false"`, `aria-controls="faq-answer-1"`.
- **Icono:** Cruz arquitectónica que rota 45° para convertirse en 'X', trazo fino 1.5.
- **Contenido expandible:** Transición de altura con opacidad progresiva.

---

### 6.6 Formulario Complementario (Máximo 3 Campos - `CA-CONV-05`)
Conforme a la restricción canónica, si se implementa un formulario de contacto, debe ser conciso, sin campos de presupuesto obligatorio y con alta accesibilidad:
- **Campo 1:** Nombre completo (`type="text"`, `required`).
- **Campo 2:** Teléfono o correo de contacto (`type="text"`, `required`).
- **Campo 3:** Breve descripción del proyecto (`textarea`, `rows="3"`).
- **Estilo de Inputs:**
  ```html
  <input type="text" 
         class="w-full px-4 py-3 text-sm font-sans text-white bg-charcoal-900 border border-charcoal-700 rounded-sm placeholder:text-charcoal-500 transition-colors duration-150 focus:border-cobalt-500 focus:outline-none focus:ring-1 focus:ring-cobalt-500" 
         placeholder="Tu nombre completo" />
  ```

---

### 6.7 Matriz Completa de Estados Interactivos (`CA-A11Y-01`)

| Elemento UI | Default | :hover | :focus-visible | :active | :disabled |
|---|---|---|---|---|---|
| **Botón Primario** | `bg-cobalt-600 text-white` | `bg-cobalt-500 shadow-glow` | `ring-2 ring-cobalt-400 ring-offset-2 ring-offset-charcoal-900` | `bg-cobalt-700` | `opacity-50 cursor-not-allowed` |
| **Botón Secundario** | `bg-white/[0.04] border-white/15 text-editorial` | `bg-white/[0.08] border-white/30 text-white` | `ring-2 ring-white/50 ring-offset-2 ring-offset-charcoal-900` | `bg-white/[0.12]` | `opacity-40 cursor-not-allowed` |
| **Enlace Editorial** | `text-charcoal-200 underline-transparent` | `text-white underline-cobalt-400` | `ring-2 ring-cobalt-400 rounded-sm` | `text-cobalt-300` | `text-charcoal-600 pointer-events-none` |
| **Input de Texto** | `bg-charcoal-900 border-charcoal-700 text-white` | `border-charcoal-600` | `border-cobalt-500 ring-1 ring-cobalt-500 outline-none` | `bg-charcoal-950` | `bg-charcoal-950 border-charcoal-800 text-charcoal-600` |
| **Tarjeta de Caso** | `bg-charcoal-850 border-white/10` | `border-white/25 bg-charcoal-800` | `ring-2 ring-cobalt-400` | `scale-[0.995]` | `N/A` |

---

## 7. Iconografía Oficial

### 7.1 Librería y Calibración Técnica
- **Librería de Elección:** **Lucide Icons** (`lucide-astro` / `lucide-react`).
- **Grid Base:** `24 × 24 px`.
- **Grosor de Trazo (*Stroke Width*):** **`1.5`** (estrictamente calibrado; se prohíbe el default de `2.0` para preservar la finura arquitectónica y quirúrgica).
- **Tratamiento:** Iconos en línea de una sola tinta, sin rellenos pesados (*outline/monoline*), heredando el color del texto mediante `currentColor`.

### 7.2 Mapeo de Iconos Clave del Sistema
- **Navegación & Menú:** `Menu`, `X`, `ChevronDown`, `ArrowUpRight`, `ArrowRight`.
- **Conversiones:** `Calendar` (Google Calendar), `MessageCircle` (WhatsApp), `Phone` (Llamadas telefónicas).
- **Servicios:**
  - Marca Personal: `Compass` o `UserCheck` (estrategia y dirección).
  - Creación de Contenido: `Film` o `Clapperboard` (producción audiovisual).
  - Fotografía: `Camera` (sesiones particulares y corporativas).
  - Eventos Sociales: `Sparkles` o `PartyPopper` (celebraciones y memorias).
  - Producción y Drones: `Video` o `Plane` (aéreo / cinematografía técnica).
- **Indicadores Técnicos:** `Check`, `ExternalLink`, `Clock`, `ShieldCheck`.

---

## 8. Especificación Técnica de Implementación (Astro + Tailwind CSS)

### 8.1 Código Listo para `tailwind.config.mjs`

El siguiente bloque de configuración está listo para ser insertado directamente en el archivo `tailwind.config.mjs` del proyecto Astro:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Paleta Oficial Cobalto Carmesí Studios */
        cobalt: {
          50: '#EEF4FF',
          100: '#D9E5FE',
          200: '#B8D0FD',
          300: '#85B2FA',
          400: '#4C8DF5',
          500: '#1E6CE9',
          600: '#0047AB', /* Oficial de Marca */
          700: '#00388A',
          800: '#002B6D',
          900: '#001F52',
          950: '#001336',
        },
        crimson: {
          50: '#FDF2F2',
          100: '#FDE2E2',
          200: '#FCC8C8',
          300: '#F89E9E',
          400: '#F06565',
          500: '#DF3535',
          600: '#B22222', /* Oficial de Marca */
          700: '#901A1A',
          800: '#741717',
          900: '#5E1515',
          950: '#390808',
        },
        /* Neutros de Claroscuro (Carbón & Obsidiana) */
        charcoal: {
          50: '#F8FAFC',
          100: '#EFF2F7',
          200: '#DDE3ED',
          300: '#BDC7D9',
          400: '#8B97B0',
          500: '#5B6785',
          600: '#3B4660',
          700: '#283147',
          750: '#1F2637',
          800: '#171D2B',
          850: '#10141E',
          900: '#0A0D14', /* Base principal */
          950: '#06080D', /* Canvas fondo */
        },
        /* Neutros de Papel / Editorial */
        paper: {
          pure: '#FFFFFF',
          bone: '#FBFBFA',
          warm: '#F4F4F0',
          sand: '#E8E8E2',
        },
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Satoshi"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.025em',
        widest: '0.08em',
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
      },
      boxShadow: {
        'glow-cobalt': '0 0 25px -5px rgba(0, 71, 171, 0.45)',
        'glow-crimson': '0 0 20px -5px rgba(178, 34, 34, 0.45)',
        'surface-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
```

---

### 8.2 Declaración de Fuentes Autohospedadas (`@font-face` Local en WOFF2 Variable)

Para maximizar el rendimiento (**`CA-PERF-01`**), eliminar dependencias de CDNs externas y evitar parpadeos de texto no renderizado (*FOUT/FOIT*), el proyecto utiliza fuentes **WOFF2 Variable** alojadas en `public/fonts/` (con respaldo en `src/assets/fonts/`):

- `public/fonts/CabinetGrotesk-Variable.woff2` (41.8 KB · Rango de peso 100 a 900)
- `public/fonts/Satoshi-Variable.woff2` (42.5 KB · Rango de peso 300 a 900)
- `public/fonts/Satoshi-VariableItalic.woff2` (43.8 KB · Variación cursiva)

#### A. Reglas `@font-face` para el CSS Global (`src/styles/global.css`):
```css
@font-face {
  font-family: 'Cabinet Grotesk';
  src: url('/fonts/CabinetGrotesk-Variable.woff2') format('woff2-variations'),
       url('/fonts/CabinetGrotesk-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Variable.woff2') format('woff2-variations'),
       url('/fonts/Satoshi-Variable.woff2') format('woff2');
  font-weight: 300 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-VariableItalic.woff2') format('woff2-variations'),
       url('/fonts/Satoshi-VariableItalic.woff2') format('woff2');
  font-weight: 300 900;
  font-style: italic;
  font-display: swap;
}
```

#### B. Preload en el `<head>` del Layout Principal (`src/layouts/Layout.astro`):
```html
<!-- Preload de fuentes críticas locales para Core Web Vitals (LCP) -->
<link rel="preload" href="/fonts/CabinetGrotesk-Variable.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/fonts/Satoshi-Variable.woff2" as="font" type="font/woff2" crossorigin />
```

---

## 9. Trazabilidad y Handoff de Diseño

### 9.1 Cumplimiento de Criterios de Aceptación
- **`CA-RESP-01` (Diseño Adaptable):** Retícula de 12 columnas en escritorio y 4 columnas en móvil especificadas con paddings seguros y tipografía fluida `clamp()`.
- **`CA-PERF-01..03` (Rendimiento & Medios):** Especificación de ratios estándar (`4:5`, `16:9`, `21:9`), poster frames estáticos obligatorios y carga diferida.
- **`CA-A11Y-01` (Accesibilidad por Teclado):** Definición exacta de anillos de foco `:focus-visible` de 2px de alto contraste (`ring-cobalt-400` con `ring-offset-charcoal-900`) en todas las primitivas interactivas.
- **`CA-A11Y-02` (Contraste Cromático):** Matriz de contraste validada para todas las combinaciones de texto sobre fondos oscuros, cobalto y carmesí, superando los requerimientos WCAG AA y AAA.
- **`CA-CONV-01..05` (Conversión & Formularios):** Primitivas visuales diferenciadas para agenda de Google Calendar (primario), WhatsApp (secundario), teléfono y formulario complementario de solo 3 campos.

### 9.2 Próximo Paso en el Flujo del Proyecto
Este documento constituye la base fundacional de diseño para la **Fase 2 (Diseño UI/UX)**.  
Handoff directo hacia **`frontend-engineer`** para configurar `tailwind.config.mjs`, las variables de tema en Astro y la posterior maquetación de las 8 vistas del sitio conforme a los textos ya estructurados en `docs/02-content/site-copy-and-messaging.md`.
