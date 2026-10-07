// OEPS! website op Cloudflare (vervangt Netlify).
// De pagina's komen kant-en-klaar uit dist/ (Astro). Deze worker doet alleen het aanmeldformulier:
// adres in Brevo op de lijst "OEPS! wachtlijst" (de welkomstmail stuurt Brevo zelf),
// en Joël krijgt een mailtje per aanmelding, zoals eerst bij Netlify.

const isEmail = (s) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
const veiligTerug = (t) => (typeof t === 'string' && t.startsWith('/') && !t.startsWith('//') ? t : '/?aangemeld=1#aanmelden');
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

async function brevo(env, pad, body, doFetch) {
  return doFetch('https://api.brevo.com/v3/' + pad, {
    method: 'POST',
    headers: { 'api-key': env.BREVO_API_KEY, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify(body),
  });
}

export async function aanmelden(request, env, doFetch = fetch) {
  const f = await request.formData();
  const terug = veiligTerug(f.get('terug'));
  const naarBedankt = Response.redirect(new URL(terug, request.url).toString(), 303);
  if (f.get('bot-veld')) return naarBedankt; // robot: doen alsof het gelukt is
  const email = String(f.get('email') || '').trim().toLowerCase();
  if (!isEmail(email)) return new Response('Dat e-mailadres lijkt niet te kloppen. Ga terug en probeer het opnieuw.', { status: 400, headers: { 'content-type': 'text/plain; charset=utf-8' } });

  const vergeet = String(f.get('vergeet-het-vaakst') || '');
  const anders = String(f.get('vergeet-anders') || '').slice(0, 200);
  const velden = {
    BRON: String(f.get('bron') || 'direct').slice(0, 50),
    VERGEET: vergeet === 'Iets anders' && anders ? `Iets anders: ${anders}` : vergeet,
    BEDRAG: String(f.get('bedrag-per-maand') || ''),
  };

  let inBrevo = false;
  try {
    const basis = { email, listIds: [Number(env.BREVO_LIST_ID)], updateEnabled: true };
    let r = await brevo(env, 'contacts', { ...basis, attributes: velden }, doFetch);
    if (r.status === 400) { console.warn(JSON.stringify({ taak: 'brevo-velden', tekst: (await r.text()).slice(0, 200) })); r = await brevo(env, 'contacts', basis, doFetch); }
    inBrevo = r.ok || r.status === 204;
    if (!inBrevo) console.error(JSON.stringify({ taak: 'brevo-fout', status: r.status, tekst: (await r.text()).slice(0, 200) }));
  } catch (fout) {
    console.error(JSON.stringify({ taak: 'brevo-fout', fout: String(fout).slice(0, 200) }));
  }

  // Seintje aan Joël (ook als vangnet: dan staat het adres in elk geval in zijn mail).
  let gemeld = false;
  if (env.MELDING_AAN) {
    try {
      const regels = [['E-mail', email], ['Vergeet het vaakst', velden.VERGEET], ['Bedrag per maand', velden.BEDRAG], ['Bron', velden.BRON], ['In Brevo gezet', inBrevo ? 'ja' : 'NEE, zelf toevoegen']];
      const r = await brevo(env, 'smtp/email', {
        sender: { name: 'OEPS! website', email: 'hallo@oeps.app' },
        to: [{ email: env.MELDING_AAN }],
        subject: `Nieuwe aanmelding wachtlijst: ${email}`,
        textContent: regels.map(([k, v]) => `${k}: ${v || '-'}`).join('\n'),
        htmlContent: `<table style="font-family:Arial,sans-serif;font-size:15px">${regels.map(([k, v]) => `<tr><td style="padding:2px 12px 2px 0;color:#4A5568">${esc(k)}</td><td>${esc(v || '-')}</td></tr>`).join('')}</table>`,
        tags: ['wachtlijst-melding'],
      }, doFetch);
      gemeld = r.ok;
    } catch (fout) {
      console.error(JSON.stringify({ taak: 'melding-fout', fout: String(fout).slice(0, 200) }));
    }
  }

  if (!inBrevo && !gemeld) {
    return new Response('Er ging iets mis bij het aanmelden. Probeer het over een paar minuten nog eens, of mail hallo@oeps.app.', { status: 502, headers: { 'content-type': 'text/plain; charset=utf-8' } });
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
