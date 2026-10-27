# `05-development/` · Documentación de Implementación Frontend

**Ownership principal:** `frontend-engineer` (con soporte de `solution-architect` cuando aplique).

## Índice de Artefactos en `05-development/`

| Artefacto | Versión | Estado | Descripción |
|---|---|---|---|
| [`frontend-implementation-and-handoff.md`](file:///c:/Users/ederb/Studio/04-cobalto-carmesi/docs/05-development/frontend-implementation-and-handoff.md) | `1.0` | `Ready for Review` | Arquitectura frontend en Astro + Tailwind CSS, mapa de componentes, capa de datos editable (`src/data/`), manejo seguro de pendientes `[POR DEFINIR]` y contrato de handoff hacia `qa-engineer`. |

## Estructura del Código Fuente (`src/` y `public/`)

- `src/data/`: Capa editable desacoplada (`siteConfig.ts`, `services.ts`, `projects.ts`, `faqs.ts`).
- `src/layouts/Layout.astro`: Layout maestro Dark-First con SEO on-page, preload tipográfico WOFF2 y listener de analítica para CTAs.
- `src/components/`: Componentes globales (`Navbar`, `Footer`), UI (`Icon`, `FloatingWhatsApp`, `FAQAccordion`), tarjetas (`ServiceCard`, `ProjectCard`), secciones (`ConversionCalendarBlock`) y formularios (`ContactFormMinimal`).
- `src/pages/`: Las 8 páginas de la arquitectura aprobada (`index`, `marca-personal`, `creacion-de-contenido`, `fotografia`, `eventos-sociales`, `proyectos`, `el-estudio`, `contacto`) más la ruta legal (`privacidad`).
