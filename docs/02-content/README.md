# `docs/02-content/` · Arquitectura de Mensajes, Copy y Conversión

**Ownership principal:** `content-conversion-specialist` (Modo Lite V3.2)  
**Estado de la fase:** Ready for Review (v1.0 — 2026-10-23)

Esta carpeta contiene la arquitectura de mensajes, la guía de voz y tono, el sistema de copy bloque por bloque para las **8 páginas del sitio**, la matriz de CTAs y enlaces prellenados de WhatsApp, las plantillas y fichas de casos de estudio, y la matriz SEO On-Page para **Cobalto Carmesí Studios**.

---

## Índice de Artefactos Vigentes

| Archivo | Versión | Estado | Descripción y Alcance |
|---|---|---|---|
| [`site-copy-and-messaging.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/02-content/site-copy-and-messaging.md) | `1.0` | **Ready for Review** | **Sistema Completo de Contenidos y Copy por Página (Modo Lite):**<br>1. Guía de voz y tono (seguro, humano, preciso y sofisticado), reglas editoriales innegociables (`D-004`, `CA-COMM-01` a `CA-COMM-05`), microcopy global (`Header`, Menú Móvil, `Footer`) y matriz maestra de CTAs con URLs prellenadas de WhatsApp codificadas (`CA-CONV-01` a `CA-CONV-04`).<br>2. Copy completo bloque por bloque (`H1`, `H2`, `H3`, párrafos, listas, microcopy y notas de dirección visual) para las 8 páginas:<br>   • `Inicio` (`/`) — 8 bloques canónicos + FAQs + enrutamiento exacto del Bloque 6.<br>   • `Marca personal` (`/marca-personal`) — Servicio A, 6 necesidades como narrativa (`HYPOTHESIS-01`), 9 capacidades, proceso y sección anclada `#formacion-y-mentoria` (Servicio G).<br>   • `Creación de contenido` (`/creacion-de-contenido`) — Servicio B, 11 capacidades, nota de transparencia comercial sobre gestión/pauta (`FACT-006`) y sección anclada `#produccion-y-drones` (Servicio F).<br>   • `Fotografía` (`/fotografia`) — Hero editorial con separación clara entre `#empresas` (Servicio C) y `#sesiones-particulares` (Servicio D).<br>   • `Eventos sociales` (`/eventos-sociales`) — Servicio E (incluidos XV años), definición de alcance en conversación sin cantidades ni promesas de fecha sin revisión.<br>   • `Proyectos` (`/proyectos`) — Plantilla obligatoria de 5 puntos (`CA-COMM-05`), fichas pre-estructuradas para los 4 candidatos (`PORT-01` a `PORT-04`) con marcadores `[POR DEFINIR]` y copy de respaldo editorial.<br>   • `El estudio` (`/el-estudio`) — Visión, dirección creativa de Darío Ilescas Cruz, los 5 argumentos de elección desarrollados, identidad Cobalto/Carmesí y sección `#formacion`.<br>   • `Contacto` (`/contacto`) — 3 canales jerarquizados (Google Calendar, WhatsApp, Teléfono/Correo), cobertura `[POR DEFINIR]` y formulario opcional de 3 campos sin presupuesto (`CA-CONV-05`).<br>3. Matriz consolidada SEO On-Page (`<title>`, `<meta name="description">`, `H1` único y jerarquía `H2`) de las 8 páginas (`CA-SEO-01`, `CA-SEO-02`).<br>4. Handoff estructurado hacia `product-designer` (`docs/03-design/`) y `frontend-engineer` (`src/`). |

---

## Gobernanza y Fronteras de Responsabilidad

1. **Content & Conversion = Message/Content Architecture dentro del Sitemap Aprobado:** Trabaja dentro de la arquitectura de 8 páginas y anclas definida en [`docs/01-strategy/site-strategy-and-architecture.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/01-strategy/site-strategy-and-architecture.md) (`D-005`). No altera la jerarquía visual ni el diseño de interacción final, que corresponden a `product-designer` en `docs/03-design/`.
2. **Distinción Canónico vs. Propuesto:** Todo texto suministrado por el cliente en [`inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/inputs/business/Cobalto_Carmesi_Documento_Maestro_Web.md) se preserva literalmente bajo la etiqueta `[CLIENT-PROVIDED / CANONICAL]` (`FACT-009`), diferenciándolo de los desarrollos propuestos (`[PROPOSED COPY — Ready for Review]`).
3. **Política Comercial y de Datos Pendientes (`[POR DEFINIR]`):** Prohibido publicar precios, paquetes tarifados, descuentos, promesas de ventas garantizadas o datos ficticios (`D-004`, `CA-COMM-01` a `CA-COMM-03`). Todos los datos operativos y permisos pendientes (`PEND-01` a `PEND-10`) permanecen marcados explícitamente como `[POR DEFINIR]`.
