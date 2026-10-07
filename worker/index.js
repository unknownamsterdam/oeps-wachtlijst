// OEPS! website op Cloudflare (vervangt Netlify).
// De pagina's komen kant-en-klaar uit dist/ (Astro). Deze worker doet alleen het aanmeldformulier.
// Het echte werk (adres in Brevo op de lijst "OEPS! wachtlijst" + seintje aan Joël) doet oeps-mail,
// via een interne koppeling (binding MAIL). Zo staat de Brevo-sleutel op één plek.

const isEmail = (s) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
const veiligTerug = (t) => (typeof t === 'string' && t.startsWith('/') && !t.startsWith('//') ? t : '/?aangemeld=1#aanmelden');
const tekst = (s, status) => new Response(s, { status, headers: { 'content-type': 'text/plain; charset=utf-8' } });

export async function aanmelden(request, env) {
  const f = await request.formData();
  const terug = veiligTerug(f.get('terug'));
  const naarBedankt = Response.redirect(new URL(terug, request.url).toString(), 303);
  if (f.get('bot-veld')) return naarBedankt; // robot: doen alsof het gelukt is
  const email = String(f.get('email') || '').trim().toLowerCase();
  if (!isEmail(email)) return tekst('Dat e-mailadres lijkt niet te kloppen. Ga terug en probeer het opnieuw.', 400);

  const vergeet = String(f.get('vergeet-het-vaakst') || '');
  const anders = String(f.get('vergeet-anders') || '').slice(0, 200);
  const velden = {
    BRON: String(f.get('bron') || 'direct').slice(0, 50),
    VERGEET: vergeet === 'Iets anders' && anders ? `Iets anders: ${anders}` : vergeet,
    BEDRAG: String(f.get('bedrag-per-maand') || ''),
  };

  let uitslag = { inBrevo: false, gemeld: false };
  try {
    uitslag = await env.MAIL.aanmelden({ email, velden, lijst: env.BREVO_LIST_ID, meldingAan: env.MELDING_AAN });
  } catch (fout) {
    console.error(JSON.stringify({ taak: 'aanmelden-fout', fout: String(fout).slice(0, 200) }));
  }
  if (!uitslag.inBrevo && !uitslag.gemeld) {
    return tekst('Er ging iets mis bij het aanmelden. Probeer het over een paar minuten nog eens, of mail hallo@oeps.app.', 502);
  }
  return naarBedankt;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.replace(/\/$/, '') === '/aanmelden') {
      if (request.method !== 'POST') return Response.redirect(new URL('/#aanmelden', request.url).toString(), 302);
      return aanmelden(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
