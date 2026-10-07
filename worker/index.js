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

// De app draait in oeps-mail (binding APP). Op oeps.app is alles één adres:
// - oeps.app           → ben je ingelogd, dan de app; anders de homepage
// - oeps.app/inloggen  → het inlogscherm (de link in de inlogmail komt hier ook uit)
// - oude adressen oeps.app/app/... → doorsturen naar /inloggen
const APP_BESTANDEN = new Set(['/app.css', '/app.js', '/sw.js', '/manifest.webmanifest', '/icon.svg', '/icon-180.png', '/icon-192.png', '/app-512.png']);
const geenCache = (r) => { const n = new Response(r.body, r); n.headers.set('cache-control', 'private, no-store'); n.headers.append('vary', 'cookie'); return n; };

export function naarApp(request, env, pad) {
  const url = new URL(request.url);
  const req = new Request(new URL((pad || url.pathname) + url.search, url.origin), request);
  req.headers.set('x-oeps-basis', '/inloggen'); // zo weet de app waar de inloglink heen moet
  return env.APP.fetch(req);
}

// Ingelogd? Vraag het de app (met de cookie van de bezoeker). Geeft het antwoord terug, of null.
async function ingelogd(request, env) {
  if (!/(?:^|;\s*)oeps_sessie=/.test(request.headers.get('cookie') || '')) return null;
  const r = await env.APP.fetch(new Request(new URL('/api/ik', request.url), { headers: { cookie: request.headers.get('cookie') } }));
  return r.ok ? r : null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pad = url.pathname;
    // www.oeps.app → oeps.app
    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }
    if (pad === '/') {
      const ik = await ingelogd(request, env);
      if (!ik) return geenCache(await env.ASSETS.fetch(request));
      const app = geenCache(await naarApp(request, env, '/'));
      const vers = ik.headers.get('set-cookie'); // ingelogd blijven
      if (vers) app.headers.append('set-cookie', vers);
      return app;
    }
    if (pad === '/inloggen') return geenCache(await naarApp(request, env, '/'));
    if (pad === '/inloggen/') return Response.redirect(new URL('/inloggen' + url.search, request.url).toString(), 301);
    if (pad === '/app' || pad.startsWith('/app/')) return Response.redirect(new URL('/inloggen', request.url).toString(), 302);
    if (pad.startsWith('/api/') || APP_BESTANDEN.has(pad)) return naarApp(request, env);
    if (pad.replace(/\/$/, '') === '/aanmelden') {
      if (request.method !== 'POST') return Response.redirect(new URL('/#aanmelden', request.url).toString(), 302);
      return aanmelden(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
