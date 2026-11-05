// 14 okt: zoekpagina's "Retourtermijn X" en "X opzeggen". De gegevens komen van https://oeps.app/api/zoekpaginas
// (bedrijvengids van OEPS!, opgezocht op de site van het bedrijf zelf) en staan als momentopname in gids.json.
// Bijwerken: node scripts/gids.mjs (haalt de nieuwste stand op). Joël kijkt nieuwe pagina's na voordat ze live gaan.
import data from './gids.json';

const klaar = (data.paginas || []).filter((p) => p.klaar);
export const RETOUR = klaar.filter((p) => p.soort === 'retour' && p.retour && (p.retour.dagen || p.retour.stappen.length));
export const OPZEGGEN = klaar.filter((p) => p.soort === 'opzeggen' && p.opzeggen && p.opzeggen.stappen.length);
export const VIA = { account: 'in je account', mail: 'per mail', telefoon: 'telefonisch', formulier: 'met een formulier', brief: 'per brief', winkel: 'in de winkel' };
export const MANIER = { account: 'Retour aanmelden in je account', winkel: 'Terugbrengen naar een winkel', retourpunt: 'Afgeven bij een pakketpunt', ophalen: 'Laten ophalen' };

// 22 okt: Engelse versies. Alleen winkels en diensten met een vertaling in gids-en.js krijgen een Engelse pagina.
import { GIDS_EN, VIA_EN, MANIER_EN } from './gids-en.js';
export { VIA_EN, MANIER_EN };
function inEngels(p) {
  const e = GIDS_EN[`${p.soort}/${p.slug}`];
  if (!e) return null;
  if (e.nl && p.bijgewerkt && e.nl !== p.bijgewerkt) console.warn(`[engels] ${p.soort}/${p.slug}: Nederlandse pagina is bijgewerkt (${p.bijgewerkt}), vertaling is van ${e.nl}`);
  return p.soort === 'retour'
    ? { ...p, retour: { ...p.retour, kosten: p.retour.kosten ? (e.kosten ?? null) : null, stappen: e.stappen } } // 23 okt: geen kosten als de Nederlandse pagina ze niet toont (niet bevestigd)
    : { ...p, opzeggen: { ...p.opzeggen, let_op: e.let_op ?? null, stappen: e.stappen } };
}
export const RETOUR_EN = RETOUR.map(inEngels).filter(Boolean);
export const OPZEGGEN_EN = OPZEGGEN.map(inEngels).filter(Boolean);
const zonder = [...RETOUR, ...OPZEGGEN].filter((p) => !GIDS_EN[`${p.soort}/${p.slug}`]);
if (zonder.length) console.warn(`[engels] nog geen Engelse pagina voor: ${zonder.map((p) => `${p.soort}/${p.slug}`).join(', ')}`);
// Adres van een gidspagina in een taal.
export const gidsPad = (soort, slug, taal = 'nl') => (taal === 'en' ? `/en/${soort === 'retour' ? 'returns' : 'cancel'}/${slug}/` : `/${soort}/${slug}/`);
export const heeftEngels = (soort, slug) => !!GIDS_EN[`${soort}/${slug}`];

// 5 nov (Joël, retourpagina Uniqlo): elke winkel krijgt een categorie, zodat de lijst onderaan logisch is
// (Uniqlo bij Zara en H&M, niet bij Amazon). Nieuwe winkel = hier één regel toevoegen.
export const CATEGORIE = {
  kleding: { nl: 'Kleding en sport', en: 'clothing and sports' },
  online: { nl: 'Alles online', en: 'online shops' },
  wonen: { nl: 'Wonen en verzorging', en: 'home and beauty' },
  mode: { nl: 'Mode en sieraden', en: 'fashion and jewellery' },
  baby: { nl: 'Baby en moeder', en: 'baby and mum' },
};
const CATEGORIE_VAN = {
  uniqlo: 'kleding', zara: 'kleding', 'h-en-m': 'kleding', shein: 'kleding', 'about-you': 'kleding', nike: 'kleding', decathlon: 'kleding', zalando: 'kleding', 'de-bijenkorf': 'kleding',
  'amazon-nl': 'online', bol: 'online', coolblue: 'online', mediamarkt: 'online', apple: 'online', wehkamp: 'online', temu: 'online', aliexpress: 'online',
  ikea: 'wonen', hema: 'wonen', douglas: 'wonen', lidl: 'wonen', kruidvat: 'wonen', zeeman: 'wonen',
  'my-jewellery': 'mode', pandora: 'mode', 'bijou-brigitte': 'mode', 'claire-s': 'mode', only: 'mode', pieces: 'mode',
  prenatal: 'baby', babypark: 'baby',
  etos: 'wonen', bever: 'wonen', wibra: 'wonen', bruna: 'wonen', lush: 'wonen',
  sportdirect: 'kleding', 'jack-en-jones': 'kleding', 'vero-moda': 'mode', 'ici-paris-xl': 'mode', 'dille-en-kamille': 'baby',
};
export const categorieVan = (slug) => (CATEGORIE_VAN[slug] ? { key: CATEGORIE_VAN[slug], ...CATEGORIE[CATEGORIE_VAN[slug]] } : null);
