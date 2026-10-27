# AGENTS.md · Gobernanza y Roles del Proyecto (Cobalto Carmesí Studios)

Este proyecto web para **Cobalto Carmesí Studios** (rebranding de *Sefirot*) opera bajo la metodología **`pyme-template` V3.2 en Modo Lite** y el ecosistema global de agentes y skills de **Eder Creativo** (`eder-agentes`).

## 1. Protocolo antes del trabajo sustantivo

1. Revisar las reglas operativas globales y de gobernanza (`00-pyme-workflow`, `10-discovery`, `20-docs-governance`, `30-ownership-handoffs`, `30-skills-tools-mcp`).
2. Revisar [`PRODUCT.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/PRODUCT.md) y [`VALIDATION.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/VALIDATION.md) en la raíz del proyecto.
3. Inspeccionar la fuente de verdad en [`inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md) y el conocimiento procesado en `docs/`.
4. Para tareas especializadas, activar las core skills correspondientes del plugin global (`project-discovery`, `governance-check`, `reference-analysis`, `visual-exploration`, `design-handoff`, `implementation-handoff`, `responsive-audit`, `accessibility-audit`, `release-readiness`).

---

## 2. Regla Maestra de Gobernanza

`PROPOSAL ≠ DECISION ≠ APPROVAL` · `CAPABILITY ≠ AUTHORITY`

- **Autoridad del proyecto:** Las decisiones estratégicas y de negocio provienen del cliente / Director Creativo (**Darío Ilescas Cruz**) y del propietario del proyecto.
- **No autoaprobación:** Los agentes proponen dentro de su rol asignado; ningún agente se autoaprueba y un `PASS` de QA no autoriza publicar por sí solo.
- **Cero invención de datos:** Prohibido inventar hechos, métricas, testimonios, precios, permisos o datos de contacto. Todo dato faltante debe marcarse estrictamente como `[POR DEFINIR]`.
- **Preservación de fuentes:** `inputs/` es de solo lectura. El trabajo procesado se escribe en `docs/` y la implementación futura en `src/` y `public/`.
- **Activación racional (Modo Lite):** Activar únicamente los roles y capacidades necesarios para la fase actual; trece perfiles disponibles no implican trece procesos simultáneos ni burocracia innecesaria.

---

## 3. Asignación de Roles Estándar y Mapa Documental (Modo Lite)

En **Modo Lite**, el flujo se compacta priorizando agilidad y trazabilidad directa hacia diseño e implementación en **Astro + Tailwind CSS**, manteniendo claras las fronteras de responsabilidad:

### Roles Principales del Flujo Lite

| Rol (`eder-agentes`) | Estado en Proyecto | Responsabilidad en Cobalto Carmesí Studios | Rutas asignadas (`docs/` y código) | Skills principales |
|---|---|---|---|---|
| **`discovery-audit-analyst`** | **Activo (Fase actual)** | Inventariar el Documento Maestro, auditar riesgos/migración desde `sefirot.com.mx`, separar hechos confirmados de pendientes `[POR DEFINIR]` y validar elegibilidad de casos de portafolio. | `docs/00-project/` (`discovery.md`, `facts.md`, `context.md`) | `project-discovery`, `governance-check`, `reference-analysis` |
| **`product-strategist`** | **Activo (Fase actual / Siguiente)** | Formalizar visión, propuesta de valor, jerarquía del catálogo (Marca Personal y Contenido como prioritarios; Drones y Eventos como complementarios), arquitectura del sitio (8 páginas) y embudo hacia Google Calendar / WhatsApp. | `PRODUCT.md`, `docs/00-project/decisions.md`, `docs/01-strategy/` | `governance-check`, `project-discovery` |
| **`content-conversion-specialist`** | **En cola (Fase Contenido)** | Estructurar y refinar el copy público provisto para `Inicio` (8 bloques), páginas de servicios prioritarios y complementarios, FAQs, microcopy de CTAs y mensajes prellenados de WhatsApp sin promesas de ventas ni precios. | `docs/02-content/` | `governance-check`, `reference-analysis` |
| **`product-designer`** | **En cola (Fase Diseño)** | Traducir la dirección visual (identidad cinematográfica, editorial y arquitectónica; azul cobalto protagonista, acento carmesí, referencias sutiles al Renacimiento y claroscuro) en sistema de tokens, flujos UX/UI, layouts mobile/desktop y estados. | `docs/03-design/` | `reference-analysis`, `visual-exploration`, `design-handoff`, `responsive-audit` |
| **`frontend-engineer`** | **En cola (Fase Desarrollo)** | Implementar el sitio en **Astro + Tailwind CSS**, asegurando contenido editable, optimización de imágenes/video con carga diferida, accesibilidad por teclado, SEO on-page e integración de CTAs (Google Calendar, WhatsApp, Teléfono) sin exponer datos `[POR DEFINIR]`. | `src/`, `public/`, `docs/05-development/` | `implementation-handoff`, `responsive-audit`, `accessibility-audit` |
| **`qa-engineer`** | **En cola (Fase Validación)** | Validar el sitio contra [`VALIDATION.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/VALIDATION.md) (sección 12 del Documento Maestro): responsive, accesibilidad, SEO, medición de clics, ausencia de precios/datos ficticios y funcionamiento de enlaces en móvil y escritorio. | `docs/07-qa/`, `VALIDATION.md` | `responsive-audit`, `accessibility-audit`, `release-readiness` |

### Roles de Apoyo Transversal (Activación Bajo Demanda en Modo Lite)

| Rol (`eder-agentes`) | Cuándo interviene en Modo Lite | Rutas de soporte |
|---|---|---|
| **`brand-strategist`** | Apoyo puntual a `product-designer` y `content-conversion-specialist` para resguardar el tono seguro, humano, preciso y sofisticado y la coherencia del rebranding Sefirot → Cobalto Carmesí. | `docs/01-strategy/`, `docs/03-design/` |
| **`solution-architect`** | Definición ligera de estructura de colecciones de contenido en Astro, contratos de integración (Google Calendar / Analytics) y mapa de redirecciones desde `sefirot.com.mx`. | `docs/04-architecture/`, `docs/05-development/` |
| **`seo-specialist`** | Verificación de títulos y metadescripciones únicas por página, encabezados H1-H3, `sitemap.xml`, indexación y plan de redirecciones 301 en la migración. | `docs/06-seo-analytics/` |
| **`analytics-data-specialist`** | Especificación de eventos de medición para clics en agenda de Google Calendar, WhatsApp y teléfono, diferenciando clic de reserva confirmada cuando sea viable. | `docs/06-seo-analytics/` |
| **`devops-engineer`** | Respaldo previo de `sefirot.com.mx`, preservación de correos/servicios del dominio y despliegue final cuando exista autorización explícita. | `docs/08-devops/` |
| **`marketing-strategist` / `backend-engineer`** | No requeridos en el alcance inicial (sin pauta activa ni backend complejo; operación estática/híbrida en Astro). | N/A salvo cambio de alcance |

---

## 4. Secuencia Operativa en Modo Lite

1. **Fase 0 · Estructuración y Discovery (`discovery-audit-analyst` + `product-strategist`):**
   - Consolidar `PRODUCT.md`, `AGENTS.md`, `VALIDATION.md` y base en `docs/00-project/`.
   - *Restricción activa:* No generar código frontend en esta fase.
2. **Fase 1 · Estrategia y Arquitectura de Contenido (`product-strategist` + `content-conversion-specialist`):**
   - Sitemap de 8 páginas y matriz de contenidos por página en `docs/01-strategy/` y `docs/02-content/`.
3. **Fase 2 · Dirección Visual y Diseño UI/UX (`product-designer`):**
   - Tokens de diseño (Cobalto/Carmesí/Neutros + tipografías) y especificación de pantallas en `docs/03-design/`.
4. **Fase 3 · Desarrollo Frontend e Integraciones (`frontend-engineer` + apoyo de `solution-architect` / `seo-specialist` / `analytics-data-specialist`):**
   - Construcción en Astro + Tailwind CSS (`src/`, `public/`) y documentación técnica en `docs/05-development/`.
5. **Fase 4 · Validación y Preparación de Lanzamiento (`qa-engineer` + `devops-engineer`):**
   - Auditoría contra `VALIDATION.md` y plan de migración desde `sefirot.com.mx`.
