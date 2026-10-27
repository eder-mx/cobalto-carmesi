# Discovery & Audit Report · Cobalto Carmesí Studios

**Status:** Ready for Review  
**Version:** 1.0  
**Last updated:** 2026-10-23  
**Author / Role:** `discovery-audit-analyst` (V3.2)  
**Skills applied:** `project-discovery`, `governance-check`  
**Canonical sources:** [`inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md), [`PRODUCT.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/PRODUCT.md), [`VALIDATION.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/VALIDATION.md), [`AGENTS.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/AGENTS.md)

---

## 1. Clasificación del Proyecto (`Project Type`)

- **Modo de Discovery:** **Modo D — Hybrid Discovery (`HYBRID`: `EXISTING-SITE` + `ASSET-LED`)**.
- **Justificación:**
  1. **`EXISTING-SITE`:** Existe un sitio previo en operación/referencia (`https://sefirot.com.mx/`) perteneciente a la etapa anterior del estudio (*Sefirot*), el cual requiere respaldo, depuración de elementos obsoletos, preservación de servicios de correo y plan de migración/redirecciones.
  2. **`ASSET-LED`:** Existe un documento rector detallado provisto por el cliente ([`Cobalto_Carmesi_Documento_Maestro_Web.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md), fechado el 21 de octubre de 2026) que define la nueva estrategia comercial, arquitectura de 8 páginas, textos públicos de `Inicio`, catálogo de 7 capacidades, FAQs, dirección visual y criterios de aceptación.

---

## 2. Inventario de Fuentes Revisadas (`Sources Reviewed`)

### 2.1 Fuentes en `inputs/` (Solo lectura)

| Ruta en repositorio | Estado del contenido | Descripción y alcance de la evidencia | Fecha / Versión |
|---|---|---|---|
| [`inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md) | **CON CONTENIDO (Fuente Primaria)** | Documento maestro web de 14 secciones (353 líneas). Contiene objetivos de negocio, audiencias, propuesta de valor, catálogo (A–G), arquitectura de 8 páginas, copy de `Inicio` (8 bloques) y FAQs, candidatos de portafolio, estado de contactos, dirección visual, auditoría de migración de `sefirot.com.mx` y criterios de aceptación. | 2026-10-21 |
| [`inputs/brand/`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/brand/README.md) | **VACÍA** (solo `README.md`) | Sin manual de marca, logotipos vectoriales, paleta hexadecimal ni fuentes tipográficas cargadas aún. | Revisado 2026-10-23 |
| [`inputs/content/`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/content/README.md) | **VACÍA** (solo `README.md`) | Sin archivos adicionales de copy (el copy base está integrado en el Documento Maestro en `inputs/business/`). | Revisado 2026-10-23 |
| [`inputs/media/`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/media/README.md) | **VACÍA** (solo `README.md`) | Sin fotografías, retratos, videos para hero ni muestras aprobadas de casos de estudio cargadas aún. | Revisado 2026-10-23 |
| [`inputs/references/`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/references/README.md) | **VACÍA** (solo `README.md`) | Sin capturas de pantalla ni moodboards externos en carpeta (las referencias estéticas al Renacimiento y claroscuro están descritas en texto en la Sección 10 del Documento Maestro). | Revisado 2026-10-23 |
| [`inputs/analytics/`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/analytics/README.md) | **VACÍA** (solo `README.md`) | Sin exportaciones de tráfico histórico ni configuración de propiedades de analítica previa de `sefirot.com.mx`. | Revisado 2026-10-23 |
| [`inputs/technical/`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/technical/README.md) | **VACÍA** (solo `README.md`) | Sin respaldos de servidor, registros DNS ni inventario de URLs actuales de `sefirot.com.mx`. | Revisado 2026-10-23 |
| [`inputs/legal/`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/legal/README.md) | **VACÍA** (solo `README.md`) | Sin texto de Aviso de Privacidad ni contratos/autorizaciones de uso de imagen firmados aún. | Revisado 2026-10-23 |

### 2.2 Documentos de Gobernanza y Fuentes Externas

| Fuente / Recurso | Clasificación | Estado de verificación | Alcance |
|---|---|---|---|
| [`PRODUCT.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/PRODUCT.md), [`AGENTS.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/AGENTS.md), [`VALIDATION.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/VALIDATION.md) | Gobernanza del proyecto | `OBSERVED` / Vigentes (v1.0, 2026-10-23) | Snapshot ejecutivo, asignación de roles en Modo Lite y matriz de criterios de aceptación (`CA-RESP` a `CA-LAUNCH`). |
| Sitio web existente: `https://sefirot.com.mx/` | Activo legado externo | **`NOT VERIFIED` en vivo** (consulta HTTP bloqueada por permisos de herramienta en el entorno actual) | Todo diagnóstico sobre `sefirot.com.mx` se basa estrictamente en la auditoría ya documentada en la **Sección 11 del Documento Maestro** (`CLIENT-PROVIDED`), diferenciándola de la observación directa en navegador. |

---

## 3. Diagnóstico y Contraste: Sitio Anterior (`sefirot.com.mx`) vs. Nueva Dirección (`Cobalto Carmesí Studios`)

### 3.1 Contraste Estratégico, Narrativo y Funcional

| Dimensión | Estado Anterior: *Sefirot* (`sefirot.com.mx`) [Evidencia: `CLIENT-PROVIDED` Sec. 1 y 11] | Nueva Dirección: *Cobalto Carmesí Studios* [Evidencia: `DECISION` / `CLIENT-PROVIDED` Sec. 1–10] | Acción de Auditoría (Matriz V3.2) |
|---|---|---|---|
| **Identidad y Marca** | *Sefirot* — percepción técnica asociada a drones e imagen aérea. | **Cobalto Carmesí Studios** — estudio estratégico y creativo dirigido por Darío Ilescas Cruz. | **`REPLACE`** |
| **Posicionamiento y Oferta Principal** | Mensajes mezclados de consultoría, marketing, imagen aérea y supervisión de obra. | Prioridad absoluta en **Arquitectura de marca personal** y **Creación de contenido** para clientes de alto valor. | **`REWRITE` / `REORGANIZE`** |
| **Rol de Drones y Eventos** | Protagonistas históricos del discurso y del portafolio visual. | Capacidades **complementarias** (`F` y `E`). Prohibido que dominen el hero de `Inicio` o recuperen el enfoque de supervisión de obra. | **`REORGANIZE` / `IMPROVE`** |
| **Calidad Editorial y Copy** | Textos genéricos residuales de plantilla en inglés (*«Brand New Features»*, *«Ultimate Solution»*) y cifras sin contexto. | Copy original en español con tono seguro, humano, preciso y sofisticado; cero contadores ficticios, cero precios públicos y cero promesas de ventas garantizadas. | **`REMOVE` / `REWRITE`** |
| **Portafolio** | Piezas de etapas anteriores sin curaduría alineada al nuevo enfoque. | Selección editorial curada bajo formato de caso de estudio (contexto, necesidad, alcance real, aportación y muestra aprobada con permiso). | **`INVESTIGATE` / `REORGANIZE`** |
| **Conversión Principal** | No estandarizada hacia sesiones de diagnóstico estratégico. | Embudo directo hacia **reserva de videollamada en Google Calendar**, apoyado por WhatsApp con mensaje prellenado y llamada telefónica. | **`REPLACE`** |
| **Tecnología y Plantilla** | Sitio preexistente con residuos de plantilla en inglés (`sefirot.com.mx`). | Reconstrucción limpia en **Astro + Tailwind CSS** con colecciones de contenido editables. | **`REBUILD`** |
| **Infraestructura y Correos** | Dominio `sefirot.com.mx` con correos y servicios asociados activos. | Respaldo previo obligatorio, preservación de correos/servicios del dominio y mapeo de redirecciones 301 hacia el dominio definitivo (`[POR DEFINIR]`). | **`PRESERVE` / `INVESTIGATE`** |

---

## 4. Evaluación de Elegibilidad de Casos de Portafolio (Sección 8 del Documento Maestro)

Conforme a la decisión **D-004** y el criterio **`CA-COMM-05`**, los cuatro nombres listados en la Sección 8 son **candidatos internos sujetos a revisión**, no bloques públicos preaprobados.

### Reglas de elegibilidad obligatorias para publicar cualquier caso:
1. Explicar **contexto, necesidad, alcance real ejecutado, aportación del estudio y muestra final**.
2. Contar con **autorización/permiso de uso** vigente por parte del cliente.
3. **Prohibido** presentar propuestas para prospectos como trabajos terminados.
4. **Prohibido** atribuir premios, métricas o logros del cliente al estudio sin evidencia causal comprobable.
5. Si faltan autorizaciones para un caso o pieza al momento de lanzar, **se debe omitir y avanzar con las disponibles**.

### Tabla de Evaluación por Caso Candidato

| ID Caso | Proyecto / Candidato | Enfoque propuesto (`CLIENT-PROVIDED`) | Estado de Elegibilidad Actual | Qué falta para poder publicarlo (`[POR DEFINIR]`) | Acción recomendada |
|---|---|---|---|---|---|
| **PORT-01** | **Angie Mesta** | Narrativa, dirección y creación de contenido para marca personal (alineado al servicio prioritario A y B). | **`PENDING` (No publicable aún)** | 1. Piezas finales aprobadas (`inputs/media/`).<br>2. Confirmación exacta del alcance ejecutado.<br>3. Permiso explícito de uso comercial en portafolio.<br>4. Redacción de contexto, necesidad y aportación. | Priorizar recolección de activos por ser el caso más representativo de Marca Personal. |
| **PORT-02** | **H Centro Hidrofacial** | Contenido de especialistas y producción audiovisual (alineado a servicios B y C). | **`PENDING` (No publicable aún)** | 1. Selección de videos efectivamente publicados (`inputs/media/`).<br>2. Confirmación del alcance real ejecutado.<br>3. Permiso de uso y redacción de estructura de caso. | Solicitar enlaces/archivos de los videos ya publicados y validar alcance con Darío Ilescas Cruz. |
| **PORT-03** | **Durambene** | Formación comercial y trabajo con KPIs (alineado a capacidad complementaria G y B2B). | **`PENDING` (Alto riesgo si no se valida)** | 1. Confirmar si se autoriza usar la **denominación pública** «Durambene» o si requiere anonimización.<br>2. Delimitar la actividad realmente ejecutada vs. propuesta.<br>3. Material visual/documental utilizable sin violar confidencialidad ni atribuir KPIs sin evidencia causal. | Mantener en reserva hasta confirmar nombre público y evidencia causal de KPIs. |
| **PORT-04** | **Coberturas y sesiones del archivo Sefirot** | Fotografía, eventos sociales y producción aérea (alineado a servicios D, E y F). | **`PENDING` (Curaduría requerida)** | 1. Revisar calidad técnica y estética (que armonice con la dirección visual de Cobalto Carmesí).<br>2. Evaluar vigencia/actualidad de las piezas.<br>3. Confirmar permisos de imagen de las personas retratadas (especialmente en XV años / eventos). | Seleccionar una muestra acotada para alimentar las páginas de `Fotografía` y `Eventos sociales` sin eclipsar Marca Personal. |

---

## 5. Observaciones, Inferencias y Conflictos Detectados

### 5.1 Hechos Confirmados y Observaciones (`Confirmed Facts & Observations`)
- El listado completo de hechos confirmados (`FACT-001` a `FACT-014`) se encuentra documentado y trazado en [`docs/00-project/facts.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/00-project/facts.md).
- **Observación de Madurez de Contenido (`OBSERVED`):** La página `Inicio` (Sección 6) y las `FAQs` (Sección 7) cuentan con copy público prácticamente finalizado, mientras que las 7 páginas interiores restantes (`Marca personal`, `Creación de contenido`, `Fotografía`, `Eventos sociales`, `Proyectos`, `El estudio`, `Contacto`) cuentan con textos base de catálogo (Sección 4) y función/CTA (Sección 5), pero requieren desarrollo de estructura de bloques y copy extendido por parte de `content-conversion-specialist` en la Fase 1.

### 5.2 Inferencias e Hipótesis (`Inferences & Hypotheses`)
- **`HYPOTHESIS-01` (Necesidades de la audiencia principal):** Los 6 puntos de dolor/aspiración de la audiencia de Marca Personal (Sección 2 del Documento Maestro) son explícitamente **hipótesis de comunicación basadas en el servicio**. Pueden utilizarse en el copy argumentativo de las páginas, pero **nunca como citas o testimonios de clientes reales**.
- **`INFERRED-01` (Estructura de datos editable en Astro):** Dado que los casos de portafolio (`PORT-01` a `PORT-04`) pueden liberarse en distintos momentos según se obtengan permisos (Sección 8: *«Si faltan autorizaciones para una pieza, omitirla y avanzar con las disponibles»*), el diseño en Fase 2 y las colecciones de Astro en Fase 3 deben soportar estados con 1, 2, 3 o más casos activos sin romper la maquetación (grillas adaptables) y permitir activar/desactivar casos mediante un booleano (`published: true/false`).

### 5.3 Conflictos y Tensiones Documentales (`Conflicts`)

| ID | Clasificación | Tópico afectado | Fuentes en tensión | Impacto y ruta de resolución |
|---|---|---|---|---|
| **CONF-01** | `CONFLICTING` (Menor / Estructural) | Destino de enlace para **Producción audiovisual y drones (Servicio F)** y ubicación de **Formación y mentoría (Servicio G)**. | **Fuente A:** Sección 5 del Documento Maestro y [`PRODUCT.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/PRODUCT.md#L68-L76) definen exactamente **8 páginas** en el sitemap (`Inicio`, `Marca personal`, `Creación de contenido`, `Fotografía`, `Eventos sociales`, `Proyectos`, `El estudio`, `Contacto`).<br>**Fuente B:** Sección 2 (Tabla de audiencias secundarias), Sección 5 (nota al pie de tabla) y Sección 6 (Bloque 6: *«Enlazar cada línea a su página correspondiente»*) mencionan una ruta hacia `Producción audiovisual y drones` desde Servicios en `Inicio` y desde el pie de página. | **Impacto:** Afecta el mapa de URLs y el enrutamiento de los enlaces del Bloque 6 de `Inicio` y del `Footer`.<br>**Resolución requerida (No bloqueante):** `product-strategist` debe definir en Fase 1 (`docs/01-strategy/`) si *Producción audiovisual y drones* (F) se resuelve como una sección con ancla (`#drones` / `#produccion-audiovisual`) dentro de `Creación de contenido` / `Fotografía` / `El estudio`, o si se habilita como vista secundaria adicional sin alterar el menú principal de 5 ítems. |

---

## 6. Registro Detallado de Pendientes (`[POR DEFINIR]`)

Conforme a `10-discovery.md` y la skill `project-discovery`, ningún dato faltante se inventa. Todos los ítems siguientes permiten avanzar en Fase 1 (Estrategia/Contenido), Fase 2 (Diseño) y Fase 3 (Desarrollo local con variables de configuración), pero tienen el efecto bloqueante indicado en la tabla:

| ID | Dato faltante (`[POR DEFINIR]`) | Pregunta / Evidencia necesaria | Responsable | ¿Bloquea Diseño (Fase 2)? | ¿Bloquea Desarrollo Local (Fase 3)? | ¿Bloquea Lanzamiento (Fase 4)? |
|---|---|---|---|---|---|---|
| **PEND-01** | **WhatsApp comercial** | ¿Cuál es el número oficial de WhatsApp con código de país (ej. `+52...`) para los enlaces `wa.me`? | Cliente (Darío Ilescas Cruz) | No | No (usar variable de entorno/config) | **SÍ (`CA-COMM-03`, `CA-LAUNCH-01`)** |
| **PEND-02** | **Teléfono para llamadas** | ¿Cuál es el número confirmado para enlaces `tel:` y coincide o no con el número de WhatsApp? | Cliente (Darío Ilescas Cruz) | No | No (usar variable de configuración) | **SÍ (`CA-COMM-03`, `CA-LAUNCH-01`)** |
| **PEND-03** | **Correo comercial** | ¿Cuál es la dirección de correo electrónico oficial para mostrar en Contacto/Footer y Aviso de Privacidad? | Cliente (Darío Ilescas Cruz) | No | No | **SÍ (`CA-COMM-03`)** |
| **PEND-04** | **URL pública de Google Calendar** | ¿Cuál es la URL pública de la página de reserva de citas de Google Calendar (con disponibilidad, duración, zona horaria y enlace a videollamada configurados)? | Cliente (Darío Ilescas Cruz) | No (se diseña botón hacia URL externa) | No (validar luego si el cliente desea prueba de bloque incrustado en móvil) | **SÍ (`CA-CONV-01`, `CA-LAUNCH-01`)** |
| **PEND-05** | **Redes sociales oficiales** | ¿Cuáles son las URLs oficiales de Instagram, Facebook y otras redes que se decida mostrar en el sitio? | Cliente (Darío Ilescas Cruz) | No | No | **SÍ (`CA-COMM-03`)** |
| **PEND-06** | **Ubicación y cobertura comercial** | ¿Cuál es el texto comercial exacto de ciudad/región y cobertura operativa (garantizando no incluir domicilio particular)? | Cliente (Darío Ilescas Cruz) | No | No | **SÍ (`CA-LEGAL-02`, `CA-COMM-03`)** |
| **PEND-07** | **Dominio público definitivo y acceso a `sefirot.com.mx`** | ¿Cuál será el dominio final de Cobalto Carmesí Studios y cuáles son las credenciales/URLs actuales de `sefirot.com.mx` para el respaldo y mapa de redirecciones 301? | Cliente / `devops-engineer` / `seo-specialist` | No | No | **SÍ (`CA-SEO-04`, `CA-LAUNCH-02`)** |
| **PEND-08** | **Activos y permisos del Portafolio (`PORT-01` a `PORT-04`)** | ¿Qué casos cuentan con permiso confirmado, alcance validado y archivos visuales finales (*Angie Mesta*, *H Centro Hidrofacial*, *Durambene*, *Archivo Sefirot*)? | Cliente (Darío Ilescas Cruz) | Parcial (se diseña con estructura modular adaptable) | No (se maqueta con colecciones dinámicas) | **SÍ (`CA-COMM-05`)** (al menos para los casos que salgan publicados) |
| **PEND-09** | **Identidad gráfica y activos multimedia en `inputs/brand/` y `media/`** | Entrega de logotipo oficial, validación de paleta exacta (tokens Cobalto/Carmesí/Neutros) y fotografías/video corto real de marca personal para el Hero de `Inicio`. | Cliente / `product-designer` | Parcial (`product-designer` puede proponer tokens y usar placeholders editoriales marcados como `[POR DEFINIR]`) | No | **SÍ (`CA-PERF-01`, `CA-PERF-02`, `CA-COMM-03`)** |
| **PEND-10** | **Aviso de Privacidad** | Texto legal completo del Aviso de Privacidad y tratamiento de datos personales acorde a la operación real del estudio. | Cliente (Darío Ilescas Cruz) | No | No (se crea ruta `/privacidad` lista para recibir texto) | **SÍ (`CA-LEGAL-01`)** |
| **PEND-11** | **Proveedor de Analítica Web** | ¿Qué plataforma se utilizará para registrar los eventos de clic a Google Calendar, WhatsApp y Teléfono (ej. Google Analytics 4, Google Tag Manager, Plausible)? | Propietario / `analytics-data-specialist` | No | No (se implementa capa abstracta de eventos `data-track`) | **SÍ (`CA-CONV-01`, `CA-CONV-02`)** |
| **PEND-12** | **Resolución de ruta para Servicio F (Drones) y Servicio G (Formación)** | Definir si *Producción audiovisual y drones* (F) enlaza a una sección anclada dentro de las 8 páginas existentes o a una subpágina específica (`CONF-01`). | `product-strategist` | Sí (requiere definirse en Fase 1 antes de cerrar wireframes de navegación/footer) | Sí | **SÍ** |

---

## 7. Riesgos y Restricciones Operativas (`Risks & Constraints`)

1. **Riesgo de Pérdida de Servicio de Correo en Migración (`HIGH`):**
   - *Descripción:* El dominio `sefirot.com.mx` tiene correos y servicios asociados en uso (Sección 11.7). Un cambio de DNS o reemplazo de hosting sin respaldo previo puede interrumpir la operación comercial del estudio.
   - *Mitigación:* Ejecutar respaldo integral (`CA-LAUNCH-02`) y documentar registros MX/TXT/SPF/DKIM antes de cualquier cambio de apuntamiento.
2. **Riesgo de Pérdida de Tráfico / Enlaces Rotos desde `sefirot.com.mx` (`MEDIUM`):**
   - *Descripción:* Al no poder inspeccionar en vivo `https://sefirot.com.mx/` en esta sesión (`NOT VERIFIED`) y estar pendiente el nuevo dominio (`PEND-07`), existe riesgo de omitir URLs indexadas antiguas.
   - *Mitigación:* Antes del despliegue (Fase 4), extraer el listado completo de URLs del servidor actual o Google Search Console para configurar redirecciones 301 hacia las 8 páginas equivalentes de Cobalto Carmesí Studios (`CA-SEO-04`).
3. **Riesgo de Bloqueo de Portafolio por Permisos (`MEDIUM`):**
   - *Descripción:* Los 4 casos candidatos (`PORT-01` a `PORT-04`) requieren validación de permisos y activos finales. Si alguno se retrasa, podría frenar la página `Proyectos` y el Bloque 5 de `Inicio`.
   - *Mitigación:* Diseñar la grilla de portafolio de forma elástica en Astro para que funcione desde 1 o 2 casos aprobados sin dejar espacios vacíos ni publicar casos incompletos (`CA-COMM-05`).
4. **Riesgo de Exposición Accidental de Placeholders o Datos Privados (`HIGH`):**
   - *Descripción:* Con 10 datos operativos pendientes (`[POR DEFINIR]`), existe riesgo de que un enlace roto (`href="#"`) o texto `[POR DEFINIR]` llegue a producción, o que se filtre un domicilio particular en metadatos SEO/Schema.org.
   - *Mitigación:* Centralizar todos los datos de contacto en un único archivo de configuración en Astro y aplicar validación bloqueante en QA (`CA-COMM-03`, `CA-LEGAL-02`).

---

## 8. Handoff Estructurado (`Recommended Next Handoff`)

Conforme a `30-ownership-handoffs.md` y `20-docs-governance.md`, se entrega el cierre de **Fase 0 · Discovery & Audit** al siguiente rol activo en Modo Lite:

- **Emisor:** `discovery-audit-analyst` (V3.2)
- **Receptor principal (Fase 1):** `product-strategist` (en coordinación inmediata con `content-conversion-specialist`)
- **Objetivo del handoff:** Formalizar en `docs/01-strategy/` la arquitectura del sitio (8 páginas + resolución de `CONF-01` sobre la ruta de *Producción audiovisual y drones* y *Formación y mentoría*) y dar paso a `content-conversion-specialist` en `docs/02-content/` para estructurar la matriz de contenidos y copy completo de las vistas interiores, manteniendo intactas las decisiones `D-001` a `D-006`.

### Artefactos entregados y actualizados en Fase 0:
1. [`docs/00-project/context.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/00-project/context.md) — **Version 1.0 · Status: Ready for Review**
2. [`docs/00-project/facts.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/00-project/facts.md) — **Version 1.0 · Status: Ready for Review** (`FACT-001` a `FACT-014`)
3. [`docs/00-project/decisions.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/00-project/decisions.md) — **Version 1.0 · Status: Ready for Review** (`D-001` a `D-006`)
4. [`docs/00-project/discovery.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/00-project/discovery.md) — **Version 1.0 · Status: Ready for Review** (presente documento)
*(Sincronizados con [`PRODUCT.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/PRODUCT.md) v1.0 y [`VALIDATION.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/VALIDATION.md) v1.0)*.

### Qué puede asumir con seguridad el receptor (`product-strategist` / `content-conversion-specialist`):
- Las decisiones **`D-001` a `D-006`** están aprobadas por el cliente/propietario y son vinculantes.
- Los textos públicos de la propuesta de valor, los 8 bloques de `Inicio`, las descripciones base de los servicios A–G, las 5 FAQs, el mensaje prellenado de WhatsApp y el título/metadescripción SEO de `Inicio` son material oficial provisto por el cliente (`FACT-009`).
- La falta de los datos operativos de contacto (`PEND-01` a `PEND-07`) **no bloquea** la definición de arquitectura ni la redacción de contenidos (usar marcadores explícitos `[POR DEFINIR]` donde deba insertarse un enlace o dato de contacto).

### Qué requiere resolución o validación en las siguientes fases:
- **`product-strategist` (en Fase 1):** Resolver `CONF-01` / `PEND-12` definiendo cómo se enlaza *Producción audiovisual y drones* (F) desde el Bloque 6 de `Inicio` y el `Footer` dentro de la arquitectura de 8 páginas (o si se añade una ruta específica para ello), y dónde se integra *Formación y mentoría* (G).
- **`content-conversion-specialist` (en Fase 1):** Expandir la estructura de bloques y copy para las páginas interiores (`Marca personal`, `Creación de contenido`, `Fotografía`, `Eventos sociales`, `Proyectos`, `El estudio`, `Contacto`) y adaptar los mensajes prellenados de WhatsApp para `Fotografía` y `Eventos sociales` (`CA-CONV-04`), respetando estrictamente la prohibición de precios públicos (`D-004`) y de promesas de ventas garantizadas.
- **Cliente (`Darío Ilescas Cruz` — antes de Fase 4):** Proveer los insumos de `PEND-01` a `PEND-10` (contactos, URL de Google Calendar, dominio, activos de marca/media, permisos de casos de portafolio y Aviso de Privacidad).
