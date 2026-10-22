// Maakt automatisch /sitemap.xml met alle pagina's. Nieuwe uitlegpagina? Die staat er vanzelf in.
import { SITE } from '../data/site.js';
import { VRAGEN, VRAGEN_EN } from '../data/vragen.js';
import { RETOUR, OPZEGGEN, RETOUR_EN, OPZEGGEN_EN, gidsPad } from '../data/gids.js';
import { GARANTIE, GARANTIE_EN, garantiePad } from '../data/garantie.js';

export function GET() {
  const vandaag = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: '/', lastmod: vandaag },
    { loc: '/hoe-zit-dat/', lastmod: vandaag },
    ...VRAGEN.map((v) => ({ loc: v.url, lastmod: v.bijgewerkt })),
    { loc: '/privacy/', lastmod: '2026-10-14' },
    { loc: '/voorwaarden/', lastmod: '2026-10-14' },
    // 14 okt: zoekpagina's
    { loc: '/retour/', lastmod: vandaag }, { loc: '/opzeggen/', lastmod: vandaag },
    { loc: '/garantie/', lastmod: vandaag },
    { loc: '/garantie/voorbij/', lastmod: '2026-10-20' },
    ...GARANTIE.map((p) => ({ loc: `/garantie/${p.slug}/`, lastmod: p.bijgewerkt })),
    ...RETOUR.map((p) => ({ loc: `/retour/${p.slug}/`, lastmod: p.bijgewerkt })),
    ...OPZEGGEN.map((p) => ({ loc: `/opzeggen/${p.slug}/`, lastmod: p.bijgewerkt })),
    // 22 okt: Engelse pagina's
    { loc: '/en/', lastmod: vandaag },
    { loc: '/en/explained/', lastmod: vandaag },
    ...VRAGEN_EN.map((v) => ({ loc: v.url, lastmod: v.bijgewerkt })),
    { loc: '/en/privacy/', lastmod: '2026-10-22' },
    { loc: '/en/terms/', lastmod: '2026-10-22' },
    { loc: '/en/returns/', lastmod: vandaag }, { loc: '/en/cancel/', lastmod: vandaag },
    { loc: '/en/warranty/', lastmod: vandaag },
    { loc: '/en/warranty/expired/', lastmod: '2026-10-22' },
    ...GARANTIE_EN.map((p) => ({ loc: garantiePad(p.slug, 'en'), lastmod: p.bijgewerkt })),
    ...RETOUR_EN.map((p) => ({ loc: gidsPad('retour', p.slug, 'en'), lastmod: p.bijgewerkt })),
    ...OPZEGGEN_EN.map((p) => ({ loc: gidsPad('opzeggen', p.slug, 'en'), lastmod: p.bijgewerkt })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE.url}${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
