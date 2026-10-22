// Leest alle uitlegpagina's uit src/content/*.md (Nederlands) en src/content/en/*.md (Engels, sinds 22 okt).
// Een nieuwe pagina toevoegen = een nieuw .md-bestand in src/content zetten. De Engelse versie krijgt in de
// frontmatter `nl: <slug van de Nederlandse pagina>`, zodat de taalknop en hreflang de twee aan elkaar koppelen.
import { ONDERWERPEN } from './site.js';
import { datum } from '../i18n.js';

function lees(bestanden, basis) {
  return Object.entries(bestanden)
    .map(([pad, mod]) => {
      const slug = pad.split('/').pop().replace(/\.md$/, '');
      const fm = mod.frontmatter;
      const bijgewerkt = (fm.bijgewerkt instanceof Date ? fm.bijgewerkt.toISOString() : String(fm.bijgewerkt)).slice(0, 10);
      return { slug, url: `${basis}${slug}/`, ...fm, bijgewerkt, Content: mod.Content };
    })
    .sort((a, b) => (a.volgorde ?? 99) - (b.volgorde ?? 99));
}

export const VRAGEN = lees(import.meta.glob('../content/*.md', { eager: true }), '/hoe-zit-dat/');
export const VRAGEN_EN = lees(import.meta.glob('../content/en/*.md', { eager: true }), '/en/explained/');

export const vragen = (taal = 'nl') => (taal === 'en' ? VRAGEN_EN : VRAGEN);

// Adres van dezelfde uitleg in de andere taal (of null als die er niet is).
export function andereVraag(v, taal = 'nl') {
  if (taal === 'en') return v.nl && VRAGEN.some((x) => x.slug === v.nl) ? `/hoe-zit-dat/${v.nl}/` : null;
  const en = VRAGEN_EN.find((x) => x.nl === v.slug);
  return en ? en.url : null;
}

export function vragenPerOnderwerp(taal = 'nl') {
  return Object.entries(ONDERWERPEN).map(([sleutel, o]) => ({
    sleutel,
    ...o,
    ...(taal === 'en' && o.en ? o.en : {}),
    vragen: vragen(taal).filter((v) => v.onderwerp === sleutel),
  }));
}

export function datumNL(iso) {
  return datum(iso, 'nl');
}
