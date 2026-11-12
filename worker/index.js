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
  const en = f.get('taal') === 'en'; // 22 okt: Engelse site -> foutmelding ook in het Engels
  if (!isEmail(email)) return tekst(en ? "That email address doesn't look right. Go back and try again." : 'Dat e-mailadres lijkt niet te kloppen. Ga terug en probeer het opnieuw.', 400);
  // Naam (9 okt): zodat Joël weet wie zich aanmeldt. Leeg mag nog, voor oude pagina's in iemands browser.
  const naam = String(f.get('naam') || '').replace(/\s+/g, ' ').trim().slice(0, 80);

  const vergeet = String(f.get('vergeet-het-vaakst') || '');
  const anders = String(f.get('vergeet-anders') || '').slice(0, 200);
  const velden = {
    BRON: String(f.get('bron') || 'direct').slice(0, 100),
    VERGEET: vergeet === 'Iets anders' && anders ? `Iets anders: ${anders}` : vergeet,
    BEDRAG: String(f.get('bedrag-per-maand') || ''),
  };

  let uitslag = { inBrevo: false, gemeld: false };
  try {
    // 13 okt: vinkje "in English" -> taal 'en'; de uitnodiging en de app volgen die keuze.
    const taal = f.get('taal') === 'en' ? 'en' : 'nl';
    uitslag = await env.MAIL.aanmelden({ email, naam, velden, lijst: env.BREVO_LIST_ID, meldingAan: env.MELDING_AAN, taal });
  } catch (fout) {
    console.error(JSON.stringify({ taak: 'aanmelden-fout', fout: String(fout).slice(0, 200) }));
  }
  if (!uitslag.inBrevo && !uitslag.gemeld && !uitslag.direct) {
    return tekst(en ? 'Something went wrong while signing up. Try again in a few minutes, or email hallo@oeps.app.' : 'Er ging iets mis bij het aanmelden. Probeer het over een paar minuten nog eens, of mail hallo@oeps.app.', 502);
  }
  // 14 okt: directe toegang → "Kijk in je mail, je inloglink staat klaar" in plaats van "je staat op de lijst".
  if (uitslag.direct) return Response.redirect(new URL(terug.replace('aangemeld=1', 'binnen=1'), request.url).toString(), 303);
  return naarBedankt;
}

// De app draait in oeps-mail (binding APP). Op oeps.app is alles één adres:
// - oeps.app           → ben je ingelogd, dan de app; anders de homepage
// - oeps.app/inloggen  → het inlogscherm (de link in de inlogmail komt hier ook uit)
// - oude adressen oeps.app/app/... → doorsturen naar /inloggen
const APP_BESTANDEN = new Set(['/app.css', '/app.js', '/en.js', '/sw.js', '/manifest.webmanifest', '/icon.svg', '/icon-180.png', '/icon-192.png', '/app-512.png', '/badge-96.png']);
const geenCache = (r) => { const n = new Response(r.body, r); n.headers.set('cache-control', 'private, no-store'); n.headers.append('vary', 'cookie'); return n; };

export function naarApp(request, env, pad) {
  const url = new URL(request.url);
  const req = new Request(new URL((pad || url.pathname) + url.search, url.origin), request);
  req.headers.set('x-oeps-basis', '/inloggen'); // zo weet de app waar de inloglink heen moet
  return env.APP.fetch(req);
}

// Ingelogd? Vraag het de app (met de cookie van de bezoeker). Geeft het antwoord terug, of null.
const KORT = { fb: ['facebook', 'pagina'], li: ['linkedin', 'bedrijf'], joel: ['linkedin', 'joel'], wa: ['whatsapp', 'netwerk'] };
export function korteLink(pad) {
  const p = pad.toLowerCase().replace(/\/$/, '');
  const g = /^\/g\/([a-z0-9-]{1,40})$/.exec(p);
  if (g) return ['fbgroep', g[1]];
  const k = KORT[p.slice(1)];
  return k || null;
}

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
    // 23 okt: content hub voor creators (oud adres /makers). Wachtwoord en bestanden zitten in oeps-mail (privé repo), de site stuurt alleen door.
    if (pad === '/contenthub' || pad.startsWith('/contenthub/') || pad === '/makers' || pad.startsWith('/makers/')) return naarApp(request, env);
    // 26 okt / 7 nov: eigen link per maker (oeps.app/m/<naam>) en de makerspagina (oeps.app/maker/<code>) draaien in oeps-mail.
    if (/^\/m\/[^/]+\/?$/.test(pad) || /^\/maker\/[^/]+\/?$/.test(pad)) return naarApp(request, env);
    // 24 okt: ruilbon. De pagina van de ontvanger (oeps.app/ruilbon/<code>) en het kaartje zitten in oeps-mail; de API loopt via /api/*.
    if (pad === '/ruilbon' || pad.startsWith('/ruilbon/')) return naarApp(request, env);
    // Winkelvoorstel uit de retourchecker: alleen de winkelnaam, opgeslagen in oeps-mail (tabel winkelvoorstellen).
    if (pad === '/winkelvoorstel') {
      if (request.method !== 'POST') return tekst('Alleen POST.', 405);
      const body = await request.json().catch(() => null);
      const r = await env.MAIL.winkelvoorstel(body && body.naam).catch(() => ({ ok: false }));
      return new Response(JSON.stringify(r), { status: r.ok ? 200 : 400, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
    }
    // 12 nov: korte links voor posts, zodat de herkomst in "Bron" komt zonder lange utm-link.
    // oeps.app/g/<groep> = Facebookgroep; oeps.app/fb, /li, /joel, /wa = vaste kanalen.
    const kort = korteLink(pad);
    if (kort) return Response.redirect(new URL('/?utm_source=' + kort[0] + '&utm_content=' + kort[1], request.url).toString(), 302);
    if (pad.replace(/\/$/, '') === '/aanmelden') {
      if (request.method !== 'POST') return Response.redirect(new URL('/#aanmelden', request.url).toString(), 302);
      // (De Engelse site post naar hetzelfde adres; het verborgen veld taal=en regelt de taal.)
      return aanmelden(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
