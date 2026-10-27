# `docs/03-design/` · Experiencia, Interfaz y Sistema Visual

**Ownership Principal:** `product-designer` (V3.2)  
**Autoridad de Decisión:** Darío Ilescas Cruz (Director Creativo / Cliente)  
**Metodología:** `pyme-template` V3.2 en Modo Lite (Astro + Tailwind CSS)

---

## 1. Propósito de esta Carpeta

En esta carpeta reside la especificación de diseño, dirección visual, arquitectura de experiencia, sistema de tokens, flujos de interacción, primitivas de interfaz y accesibilidad para el proyecto web de **Cobalto Carmesí Studios** (rebranding de *Sefirot*).

---

## 2. Mapa de Documentos de Diseño

| Archivo | Estado | Versión | Propósito & Contenido |
|---|---|---|---|
| [`design-foundations-and-tokens.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/03-design/design-foundations-and-tokens.md) | **Ready for Review** | 1.0 | Fundaciones completas del sistema visual: paleta cromática extraída de vectores oficiales (`cobalt-600` `#0047AB`, `crimson-600` `#B22222`), escalas tonales 50-950, neutros de claroscuro (carbón/obsidiana) y papel (marfil/hueso), validación WCAG AA/AAA (`CA-A11Y-02`), dúo tipográfico autohospedado en WOFF2 Variable (Cabinet Grotesk + Satoshi), retícula arquitectónica de 12/4 columnas, ratios de medios (`CA-PERF-02`), primitivas UI, estados interactivos y configuración lista para `tailwind.config.mjs`. |
| [`page-specs-and-components.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/03-design/page-specs-and-components.md) | **Ready for Review** | 1.0 | Especificación técnica y catálogo de componentes globales (`Navbar`, `Footer`, `FloatingWhatsApp`, `ConversionCalendarBlock`, `ServiceCard`, `ProjectCard`, `FAQAccordion`, `ContactFormMinimal`), especificación de layout modular para las 8 páginas canónicas, flujo responsivo, matriz de estados y checklist de handoff para `frontend-engineer`. |

---

## 3. Principios Fundamentales del Sistema Visual

1. **Claroscuro Cinematográfico (Tenebrismo Focal):** Fondos profundos de carbón/obsidiana (`#06080D`, `#0A0D14`) con iluminación focalizada y atmósferas tenues de azul cobalto, evitando grises planos y plantillas SaaS genéricas.
2. **Rigor Arquitectónico (Chasis 1px):** Retículas ortogonales expuestas, líneas divisorias precisas de 1 píxel (`border-white/10`), encuadres marcados, micro-etiquetas categóricas y radios de curvatura mínimos o rectos (`rounded-none`, `rounded-sm`, máximo `rounded-md`), sin prefijos numéricos de paso o sección.
3. **Tipografía Editorial de Alto Estatus (Dúo Tipográfico Puro):** Contraste marcado entre la fuerza escultural de **Cabinet Grotesk** en titulares y la claridad cristalina de **Satoshi** en lectura, navegación, UI y badges, prescindiendo por completo de fuentes monospace.
4. **Disciplina Cromática:** Azul Cobalto (`#0047AB`) como protagonista indiscutible; Carmesí (`#B22222`) como acento quirúrgico de alto valor; cero proliferación de colores decorativos fuera de la paleta oficial.
5. **Accesibilidad Integrada (`CA-A11Y-01`, `CA-A11Y-02`):** Todos los estados interactivos poseen anillos de foco `:focus-visible` de alto contraste y los pares texto/fondo superan las exigencias WCAG AA/AAA.

---

## 4. Gobernanza y Reglas de Handoff

- **`PROPOSAL ≠ DECISION ≠ APPROVAL`:** Las especificaciones contenidas en este directorio representan la formalización técnica de las decisiones aprobadas por el Director Creativo.
- **`CAPABILITY ≠ AUTHORITY`:** Ningún agente se autoaprueba cambios que alteren la identidad de marca o la estructura del catálogo aprobada.
- **Inmutabilidad de Fuentes:** Los archivos en `inputs/` (`inputs/brand/`, `inputs/business/`) son de solo lectura y permanecen intactos.
- **Handoff a Frontend:** Las especificaciones de diseño deben consumirse de forma estructurada sin ambigüedades estéticas, utilizando los tokens y clases utilitarias de Tailwind documentadas.
