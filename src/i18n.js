// 22 okt (Joël): de site ook in het Engels, want de app is er ook in het Engels.
// Nederlands blijft de basis op oeps.app/..., Engels staat onder oeps.app/en/...
// Elke pagina geeft aan Base door waar haar andere taalversie staat (prop `andere`); dan komen er hreflang-links
// in de <head> en springt de taalknop in de header naar precies die pagina. Is er geen vertaling, dan gaat de knop
// naar de homepage van de andere taal.

export const taalVan = (pad) => (pad === '/en' || pad.startsWith('/en/') ? 'en' : 'nl');

export function datum(iso, taal = 'nl') {
  return new Date(iso + 'T12:00:00').toLocaleDateString(taal === 'en' ? 'en-GB' : 'nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Vaste adressen per taal.
export const PAD = {
  nl: { home: '/', uitleg: '/hoe-zit-dat/', retour: '/retour/', opzeggen: '/opzeggen/', garantie: '/garantie/', voorbij: '/garantie/voorbij/', privacy: '/privacy/', voorwaarden: '/voorwaarden/', aanmelden: '/#aanmelden' },
  en: { home: '/en/', uitleg: '/en/explained/', retour: '/en/returns/', opzeggen: '/en/cancel/', garantie: '/en/warranty/', voorbij: '/en/warranty/expired/', privacy: '/en/privacy/', voorwaarden: '/en/terms/', aanmelden: '/en/#aanmelden' },
};
export const andereTaal = (taal) => (taal === 'en' ? 'nl' : 'en');
// Zelfde soort pagina in de andere taal, bijv. PAD.nl.retour <-> PAD.en.retour.
export const tegenhanger = (taal, sleutel) => PAD[andereTaal(taal)][sleutel];

// Teksten die op veel pagina's terugkomen (header, footer, formulier, cookiebalk, gidspagina's).
export const TEKST = {
  nl: {
    taalKnop: 'EN', taalKnopLabel: 'Read this page in English', taalNaam: 'English',
    menu: 'Hoofdmenu', uitleg: 'Hoe zit dat?', inloggen: 'Inloggen', start: 'Start gratis',
    voetZin: 'Leg het één keer vast. Wij onthouden de rest. OEPS! wordt gebouwd in Nederland.',
    handig: 'Handig', retourtermijnen: 'Retourtermijnen', garantiePerWinkel: 'Garantie per winkel', abonnementenOpzeggen: 'Abonnementen opzeggen',
    aanmelden: 'Aanmelden', privacy: 'Privacy', voorwaarden: 'Voorwaarden', cookies: 'Cookies',
    voetOnder: 'Uitleg op deze site is algemene informatie, geen juridisch advies.',
    kruimel: 'Kruimelpad', kortGezegd: 'Kort gezegd', gecontroleerdOp: 'Gecontroleerd op', bron: 'bron', bronnen: 'bronnen', siteVan: (n) => `site van ${n}`,
    veelgesteld: 'Veelgestelde vragen', binnenkort: 'Binnenkort',
    opgezocht: (n) => `Opgezocht op de site van ${n}`, bijgewerktOp: 'Bijgewerkt op',
    kloptNiet: 'Klopt er iets niet meer? Mail', kloptNiet2: (n) => `dan passen we het aan. Voorwaarden kunnen veranderen; check bij twijfel de site van ${n}.`,
    // formulier
    naam: 'Hoe heet je?', naamVb: 'Bijv. Sanne de Vries', email: 'Je e-mailadres', emailVb: 'jij@voorbeeld.nl',
    vergeet: 'Wat vergeet jij het vaakst?', kies: 'Kies er één', vergeetAnders: 'Wat vergeet jij? Vertel het ons',
    bedrag: 'Wat heb je ervoor over als OEPS! dit voor je regelt?', kiesBedrag: 'Kies een bedrag',
    formKlein: 'Gratis. Je krijgt meteen een inloglink in je mail.',
    binnenKop: 'Kijk in je mail.', binnenTekst: 'Je inloglink staat klaar. Tik erop en je bent binnen. Niets gezien? Kijk even bij reclame of spam.',
    lijstKop: 'Je staat erop. Dank je!', lijstTekst: 'Zodra de bèta opengaat, hoor je het als eerste. Kijk in je mail: daar staat een berichtje van ons.',
    // cookiebalk
    koekjeKop: 'Help je ons beter worden?', koekjeTekst: 'Een cookie van Google laat ons zien wat werkt en wat niet. Wie jij bent, blijft geheim.', koekjeMeer: 'Meer weten', koekjeJa: 'Prima', koekjeNee: 'Liever niet',
    // app-balk
    balkTekst: 'Nooit meer je bon of garantie kwijt?', balkLabel: 'OEPS! uitnodiging', sluiten: 'Sluiten',
  },
  en: {
    taalKnop: 'NL', taalKnopLabel: 'Lees deze pagina in het Nederlands', taalNaam: 'Nederlands',
    menu: 'Main menu', uitleg: 'Know your rights', inloggen: 'Log in', start: 'Start free',
    voetZin: 'Save it once. We remember the rest. OEPS! is built in the Netherlands.',
    handig: 'Handy', retourtermijnen: 'Return periods', garantiePerWinkel: 'Warranty per shop', abonnementenOpzeggen: 'Cancel a subscription',
    aanmelden: 'Sign up', privacy: 'Privacy', voorwaarden: 'Terms', cookies: 'Cookies',
    voetOnder: 'The information on this site is general information, not legal advice.',
    kruimel: 'Breadcrumb', kortGezegd: 'In short', gecontroleerdOp: 'Checked on', bron: 'source', bronnen: 'sources', siteVan: (n) => `${n}'s website`,
    veelgesteld: 'Frequently asked questions', binnenkort: 'Free to try',
    opgezocht: (n) => `Looked up on ${n}'s website`, bijgewerktOp: 'Updated on',
    kloptNiet: 'Something no longer right? Email', kloptNiet2: (n) => `and we'll fix it. Terms can change; if in doubt, check ${n}'s website.`,
    naam: "What's your name?", naamVb: 'E.g. Sam Jansen', email: 'Your email address', emailVb: 'you@example.com',
    vergeet: 'What do you forget most often?', kies: 'Pick one', vergeetAnders: 'What do you forget? Tell us',
    bedrag: 'What would it be worth to you if OEPS! took care of this?', kiesBedrag: 'Pick an amount',
    formKlein: "Free. You'll get a login link in your inbox right away.",
    binnenKop: 'Check your inbox.', binnenTekst: "Your login link is waiting. Tap it and you're in. Nothing there? Have a look in your spam or promotions folder.",
    lijstKop: "You're on the list. Thanks!", lijstTekst: "As soon as the beta opens, you'll be the first to know. Check your inbox: we sent you a message.",
    koekjeKop: 'Will you help us get better?', koekjeTekst: 'A cookie from Google shows us what works and what doesn’t. Who you are stays private.', koekjeMeer: 'Learn more', koekjeJa: 'Fine', koekjeNee: 'No thanks',
    balkTekst: 'Never lose a receipt or warranty again?', balkLabel: 'OEPS! invitation', sluiten: 'Close',
  },
};
