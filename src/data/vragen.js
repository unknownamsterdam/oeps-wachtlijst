// Leest alle uitlegpagina's uit src/content/*.md.
// Een nieuwe pagina toevoegen = een nieuw .md-bestand in src/content zetten.
import { ONDERWERPEN } from './site.js';

const bestanden = import.meta.glob('../content/*.md', { eager: true });

export const VRAGEN = Object.entries(bestanden)
  .map(([pad, mod]) => {
    const slug = pad.split('/').pop().replace(/\.md$/, '');
    const fm = mod.frontmatter;
    const bijgewerkt = (fm.bijgewerkt instanceof Date ? fm.bijgewerkt.toISOString() : String(fm.bijgewerkt)).slice(0, 10);
    return { slug, url: `/hoe-zit-dat/${slug}/`, ...fm, bijgewerkt, Content: mod.Content };
  })
  .sort((a, b) => (a.volgorde ?? 99) - (b.volgorde ?? 99));

export function vragenPerOnderwerp() {
  return Object.entries(ONDERWERPEN).map(([sleutel, o]) => ({
    sleutel,
    ...o,
    vragen: VRAGEN.filter((v) => v.onderwerp === sleutel),
  }));
}

export function datumNL(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}
