// 14 okt: zoekpagina's "Retourtermijn X" en "X opzeggen". De gegevens komen van https://oeps.app/api/zoekpaginas
// (bedrijvengids van OEPS!, opgezocht op de site van het bedrijf zelf) en staan als momentopname in gids.json.
// Bijwerken: node scripts/gids.mjs (haalt de nieuwste stand op). Joël kijkt nieuwe pagina's na voordat ze live gaan.
import data from './gids.json';

const klaar = (data.paginas || []).filter((p) => p.klaar);
export const RETOUR = klaar.filter((p) => p.soort === 'retour' && p.retour && (p.retour.dagen || p.retour.stappen.length));
export const OPZEGGEN = klaar.filter((p) => p.soort === 'opzeggen' && p.opzeggen && p.opzeggen.stappen.length);
export const VIA = { account: 'in je account', mail: 'per mail', telefoon: 'telefonisch', formulier: 'met een formulier', brief: 'per brief', winkel: 'in de winkel' };
export const MANIER = { account: 'Retour aanmelden in je account', winkel: 'Terugbrengen naar een winkel', retourpunt: 'Afgeven bij een pakketpunt', ophalen: 'Laten ophalen' };
