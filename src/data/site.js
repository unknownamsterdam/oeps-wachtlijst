// Centrale instellingen voor de hele site. Pas hier iets aan en het verandert overal.

export const SITE = {
  naam: 'OEPS!',
  url: 'https://oeps.app',
  mail: 'hallo@oeps.app',
  instagram: 'https://www.instagram.com/oeps.app/',
  facebook: 'https://www.facebook.com/profile.php?id=61594785122050',
  // Fase van het product. Zet op 'live' zodra de app beschikbaar is:
  // dan veranderen knoppen en teksten van "wachtlijst" naar "probeer OEPS!".
  fase: 'wachtlijst',
  // Google Analytics 4 (Metings-ID, begint met G-). Leeg = geen meting en geen cookiemelding.
  // GA4 laadt pas nadat een bezoeker op "Prima" heeft geklikt.
  ga4: 'G-ZT7YKY4KFQ',
};

// De vier onderwerpen van "Hoe zit dat?" (en: de Engelse naam, 22 okt). Ze volgen de onderdelen van de app,
// zodat elke uitlegpagina later direct naar een functie in OEPS! kan wijzen.
export const ONDERWERPEN = {
  terugsturen: {
    naam: 'Kopen & terugsturen',
    kort: 'Bedenktijd en retour',
    en: { naam: 'Buying & returning', kort: 'Cooling-off period and returns' },
    kleur: 'mint',
    plaatje: 'doos',
  },
  kapot: {
    naam: 'Kapot & garantie',
    kort: 'Als iets het niet meer doet',
    en: { naam: 'Broken & warranty', kort: 'When something stops working' },
    kleur: 'perzik',
    plaatje: 'wasmachine',
  },
  abonnementen: {
    naam: 'Abonnementen',
    kort: 'Opzeggen en verlengen',
    en: { naam: 'Subscriptions', kort: 'Cancelling and renewals' },
    kleur: 'lila',
    plaatje: 'kalender',
  },
  duurder: {
    naam: 'Duurder geworden',
    kort: 'Als de prijs omhoog gaat',
    en: { naam: 'Price went up', kort: 'When the price increases' },
    kleur: 'zon',
    plaatje: 'prijskaartje',
  },
};

// Een onderwerp in de gevraagde taal (naam en kort in het Engels als taal = 'en').
export const onderwerpIn = (o, taal) => (taal === 'en' && o.en ? { ...o, ...o.en } : o);
