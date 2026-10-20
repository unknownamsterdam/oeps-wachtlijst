// 20 okt: garantiepagina's per winkel. Alleen wat op de site van de winkel zelf staat, in eigen woorden.
// Elke winkel heeft een bron en een datum. Nieuwe winkel erbij? Zoek de officiële garantiepagina op en vul hier aan.
export const WET_BRON = 'https://www.rijksoverheid.nl/vraag-en-antwoord/bescherming-van-consumenten/welke-garanties-heb-ik-op-een-product';
export const WET = [
  'In Nederland is er geen vaste wettelijke garantietermijn. Hoe lang een product mee moet gaan, hangt af van het soort product, de prijs en wat de verkoper beloofde.',
  'Binnen 12 maanden na aankoop moet de verkoper aantonen dat een probleem door jou komt. Daarna moet jij aantonen dat het aan het product ligt.',
  'Bij een defect zorgt de verkoper voor een oplossing: gratis reparatie, een nieuw product of je geld terug. Normale slijtage en schade door eigen schuld vallen daar niet onder.',
];

export const GARANTIE = [
  {
    slug: 'bol', naam: 'bol', bijgewerkt: '2026-10-20',
    bron: 'https://www.bol.com/nl/nl/klantenservice/a/5636762709786624/garantie-reparatie',
    kort: 'Bij bol geldt de fabrieksgarantie van de fabrikant (de duur verschilt per product), naast de wettelijke garantie. Heb je het bij bol zelf gekocht, dan start je een reparatie via Mijn bol. Is het van een partner van bol, dan ga je naar die partner.',
    duur: [
      'Fabrieksgarantie: de duur bepaalt de fabrikant en staat meestal in het boekje in de verpakking.',
      'Sommige artikelen hebben geen fabrieksgarantie, zoals verbruiksartikelen (shampoo, luiers).',
      'Een reparatie duurt meestal 15 werkdagen.',
    ],
    stappen: [
      'Ben je nog binnen de retourtermijn? Meld dan een retour aan (gratis) en bestel een nieuw artikel.',
      'Daarna: start een reparatieaanvraag via Mijn bol, bij je bestelling. Zie je die knop niet, neem dan contact op met de klantenservice van bol.',
      'Je krijgt een stappenplan voor het opsturen. Een verzendlabel printen hoeft niet.',
      'De reparatie begint pas na jouw toestemming, met vooraf een kosteninschatting.',
    ],
    nodig: ['Je factuur of aankoopbewijs. Die vind je bij je bestelling in Mijn bol.'],
    niet: ['Normaal gebruik is de voorwaarde. Bij niet-normaal gebruik of buiten de garantie kan een reparatie wel, maar tegen betaling.'],
    letop: [
      'Gekocht bij een partner van bol? Dan meld je het bij die partner, niet via Mijn bol.',
      'Wil je je artikel terug zonder reparatie, dan betaal je €19,95 onderzoekskosten. Bij een reparateur aan huis is dat €80 als je daarna geen reparatie wilt.',
      'Bij grote en zware artikelen (alleen Nederland en België) wordt een afspraak ingepland, vaak binnen 48 uur.',
    ],
  },
  {
    slug: 'coolblue', naam: 'Coolblue', bijgewerkt: '2026-10-20',
    bron: 'https://www.coolblue.nl/klantenservice/garantie',
    kort: 'Coolblue geeft op de meeste producten minimaal 2 jaar fabrieksgarantie. Bij een fabricagefout is reparatie in die periode gratis. Binnen 30 dagen na aankoop kun je bij een defect je geld terugkrijgen of ruilen.',
    duur: [
      'Minimaal 2 jaar fabrieksgarantie op de meeste producten.',
      '5 jaar fabrieksgarantie op BlueBuilt-producten.',
      'Binnen 30 dagen na aankoop: bij een defect geld terug of ruilen.',
      'Tweedekans-producten: 30 dagen tevredenheidsgarantie, daarna de gewone garantie.',
    ],
    stappen: [
      'Meld de reparatie aan via het online retourformulier, of in een Coolblue-winkel.',
      'In de winkel kun je het product in de verpakking meenemen. Dat gaat sneller dan per post.',
      'Opsturen is bij de meeste producten gratis via een PostNL-punt of een winkel.',
      'Je volgt de status in het retourenoverzicht in je account.',
    ],
    nodig: ['Een Mijn Coolblue-account met het e-mailadres waarmee je het product kocht. Anders staat het product niet in je bestellingen.'],
    niet: ['Schade door eigen toedoen (gebruikersschade) valt niet onder de garantie. Je krijgt dan een prijsopgave.'],
    letop: [
      'Stuur je het product zelf op en komt het niet binnen 14 dagen na aanmelding aan, dan vervalt de reparatie automatisch.',
      'Wil je het product terug zonder reparatie na gebruikersschade, dan kost dat €65 onderzoekskosten.',
      'Bij grote producten zoals witgoed komt meestal een monteur langs. Dat staat bij de specificaties als on-site service.',
    ],
  },
  {
    slug: 'ikea', naam: 'IKEA', bijgewerkt: '2026-10-20',
    bron: 'https://www.ikea.com/nl/nl/customer-service/returns-claims/guarantee/',
    kort: 'IKEA geeft op alle producten minimaal 2 jaar garantie, ingaand op de dag van aankoop. Voor veel productgroepen is dat veel langer, tot 25 jaar bij METOD-keukens. Je kassabon is je garantiebewijs.',
    duur: [
      'Alle producten: minimaal 2 jaar. Een reparatie of vervanging onder garantie verlengt de termijn niet.',
      'Keukens: 25 jaar op METOD en op FAKTUM gekocht vanaf 1 september 2007.',
      'Matrassen en PAX/KOMPLEMENT: 10 jaar op materiaal- en fabricagefouten.',
      'Keukenapparatuur: 5 jaar (2 jaar voor TILLREDA en LAGAN inbouwapparatuur).',
      'Badkamermeubels, wastafels en mengkranen: 10 jaar op de genoemde series.',
      'Banken en fauteuils: 10 jaar op onderstellen en kussens. De exacte lijst per product staat op de pagina van IKEA.',
    ],
    stappen: [
      'Meld je klacht binnen 2 maanden nadat je het probleem merkt, tenzij je een goede reden hebt om later te melden.',
      'Neem contact op met de klantenservice van IKEA. Bij keukens en FAKTUM raadt IKEA dat uitdrukkelijk aan.',
    ],
    nodig: ['Je kassabon (ook een online bon), of een ander bewijs van waar en wanneer je het product kocht.'],
    niet: [
      'Normale slijtage en normale veroudering.',
      'Gebruik dat niet normaal huishoudelijk is (bij de meeste productgroepen).',
    ],
    letop: [
      'Voor een matras heb je daarnaast 90 dagen om te bepalen of je tevreden bent.',
      'De voorwaarden van de dag dat je kocht gelden. Die kunnen later wijzigen.',
      'Voor vloeren en SKYTTA gelden aparte garantiebrochures.',
    ],
  },
  {
    slug: 'decathlon', naam: 'Decathlon', bijgewerkt: '2026-10-20',
    bron: 'https://help.decathlon.nl/hc/nl/articles/25953749920284-Mijn-product-is-kapot-of-defect-hoe-zit-het-met-de-garantie',
    kort: 'Op eigen merken van Decathlon (zoals Quechua, Rockrider en Kipsta) heb je minimaal 2 jaar garantie op fabricagefouten. Voor sommige producten is dat langer. Je meldt het in een winkel met je kassabon, of online met je ordernummer.',
    duur: [
      'Eigen merken: minimaal 2 jaar op fabricagefouten.',
      'Tenten en voetbaldoelen: 3 tot 5 jaar.',
      'Stijve frames, sturen en stuurpennen van Decathlon-fietsen: levenslang.',
      'Second Life-artikelen: 1 jaar.',
      'Garmin-, Polar-, Fitbit- en Coros-horloges: 2 jaar op fabricagefouten.',
      'Producten van partners: de termijn verschilt per verkoper. Check de productpagina.',
    ],
    stappen: [
      'Gekocht in een winkel: breng het product met je kassabon naar een Decathlon-winkel.',
      'Online besteld: breng het naar een winkel, of meld het defect online met je ordernummer en foto’s of een video van het defect (maximaal 10 MB).',
      'Partnerproduct: meld het online. De aanvraag gaat dan naar de partner.',
      'Horloge: meld het bij de fabrikant (snelste route) of lever het met aankoopbewijs in bij een winkel.',
    ],
    nodig: [
      'Winkelaankoop: je kassabon.',
      'Online melding: je ordernummer en foto’s of een video van het defect.',
      'Horloge: kassabon of een geregistreerde Decathlon-sportpas.',
    ],
    niet: [
      'Slijtageonderdelen zoals remblokken, kettingen, banden en kabels.',
      'Valschade en schade door verkeerd gebruik.',
    ],
    letop: [
      'Online bestelling uit een ander land (ordernummer met BE, FR of DE)? Dan loopt de afhandeling via de klantenservice van dat land.',
      'Telefoon: 085 0003 637, maandag t/m zaterdag 9:00 tot 12:00. Chat: maandag t/m zaterdag 13:00 tot 17:00.',
    ],
  },
];
