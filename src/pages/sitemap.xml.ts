import type { APIRoute } from 'astro';
import { siteConfig } from '../data/siteConfig';

const CANONICAL_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/marca-personal', priority: '0.9', changefreq: 'monthly' },
  { path: '/creacion-de-contenido', priority: '0.9', changefreq: 'monthly' },
  { path: '/fotografia', priority: '0.8', changefreq: 'monthly' },
  { path: '/eventos-sociales', priority: '0.8', changefreq: 'monthly' },
  { path: '/proyectos', priority: '0.9', changefreq: 'monthly' },
  { path: '/el-estudio', priority: '0.8', changefreq: 'monthly' },
  { path: '/contacto', priority: '0.9', changefreq: 'monthly' },
  { path: '/privacidad', priority: '0.3', changefreq: 'yearly' },
];

export const GET: APIRoute = () => {
  const baseUrl = siteConfig.seo.siteUrl.replace(/\/$/, '');
  const lastmod = new Date().toISOString().split('T')[0];

  const urlsXml = CANONICAL_ROUTES.map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${baseUrl}${path === '/' ? '/' : `${path}/`}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
