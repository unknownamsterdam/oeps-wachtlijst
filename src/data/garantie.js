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
  {
    slug: 'wehkamp', naam: 'Wehkamp', bijgewerkt: '2026-10-21',
    bron: 'https://images.wehkamp.nl/raw/aanvullende_algemene_voorwaarden.pdf',
    kort: 'Op het eigen assortiment van Wehkamp (Nous en Studio Livit) heb je 2 jaar garantie, vanaf de factuurdatum. Bij andere merken geldt de fabrieksgarantie, die op de productpagina staat. Een klacht over een artikel meld je via de klantenservice van Wehkamp.',
    duur: [
      'Eigen assortiment (Nous, Studio Livit): 2 jaar garantie, ingaand op de datum van de factuur.',
      'Overig assortiment: de fabrikant kan fabrieksgarantie geven, onder zijn eigen voorwaarden. Wehkamp zet dat bij het product op de site.',
      'Na een herstel geeft Wehkamp 3 maanden garantie op die herstelwerkzaamheden.',
      'Wehkamp gebruikt de levensduurlijst van UNETO/VNI om te bepalen hoe lang je een product mag verwachten mee te gaan.',
    ],
    stappen: [
      'Meld je klacht via de klantenservicepagina van Wehkamp, onder "Ik heb een klacht op een artikel, wat nu?".',
      'Wehkamp kan om aanvullende informatie vragen en beoordeelt je klacht.',
      'Is de klacht terecht en kan het op meer manieren opgelost worden (herstel of vervanging), dan kies jij. Stop dan met het gebruik van het product.',
      'Geef je keuze op tijd door: na meer dan 2 maanden zonder keuze beschouwt Wehkamp de termijn als verstreken.',
    ],
    nodig: ['Houd je factuur of bestelbevestiging bij de hand: de garantietermijn op het eigen assortiment loopt vanaf de factuurdatum.'],
    niet: ['Verlies van gegevens of software bij elektronica: daarvoor is Wehkamp niet aansprakelijk, behalve bij opzet of bewuste roekeloosheid.'],
    letop: [
      'Gaat je elektronica ter reparatie? Maak dan zelf eerst een kopie van je gegevens.',
      'In de voorwaarden staan geen kosten voor garantie of reparatie. Vraag dat na bij de klantenservice.',
      'Dit is de stand van de aanvullende voorwaarden van september 2024.',
    ],
  },
  {
    slug: 'gamma', naam: 'Gamma', bijgewerkt: '2026-10-21',
    bron: 'https://www.gamma.nl/klantenservice/garantie',
    kort: 'Gamma hanteert de garantietermijn van de fabrikant (die staat op de verpakking), naast je wettelijke garantie zonder vaste termijn. Binnen 30 dagen meld je een defect bij de klantenservice of in de winkel. Daarna ga je naar een Gamma-bouwmarkt, ook als je online kocht.',
    duur: [
      'Fabrieksgarantie: de termijn van de fabrikant. Die verschilt per merk en staat op de verpakking.',
      'Wettelijke garantie: geen vaste termijn. Gamma beoordeelt per soort artikel.',
      'De eerste 30 dagen zijn de zichttermijn.',
    ],
    stappen: [
      'Binnen 30 dagen, online gekocht: neem direct contact op met de klantenservice. In de bouwmarkt gekocht: ga met je bon naar de winkel.',
      'Na 30 dagen: ga naar een Gamma-bouwmarkt, ook bij een online aankoop. Kun je het product niet meenemen of is het al verwerkt? Neem dan contact op met de klantenservice.',
      'Binnen 30 dagen krijg je meestal een nieuw of vergelijkbaar product van gelijke waarde. Is dat niet op voorraad, dan kan het vaak besteld worden. Kan het niet vervangen worden, dan volgt meestal je geld terug, met enkele uitzonderingen.',
      'Na 30 dagen repareert Gamma het product. Kan dat niet, dan zoekt Gamma samen met jou een andere oplossing.',
    ],
    nodig: [
      'Een bewijs van aankoop: je kassabon, of bij een online bestelling je factuur. Dat geldt als garantiebewijs.',
      'Bon of factuur kwijt? Met een Gamma-account of voordeelpas vind je een kopie. Online facturen staan in de orderbevestigingsmail. Een kopie van een kassabon kun je tot 15 maanden terug opvragen bij de bouwmarkt.',
    ],
    niet: ['Gamma noemt op de pagina geen volledige lijst met uitsluitingen. Garantie wordt beoordeeld naar het verwachte gebruik en de levensduur van het artikel.'],
    letop: [
      'Defect of beschadigd ontvangen? Controleer het pakket direct, meld het snel bij de klantenservice en bewaar de verpakking. Gamma kan om foto’s vragen.',
      'Een klacht meld je bij de klantenservice. Je hoort binnen 14 dagen hoe Gamma het aanpakt.',
      'Klantenservice: 088 010 86 10. Kosten voor reparatie staan niet op de pagina.',
    ],
  },
  {
    slug: 'karwei', naam: 'Karwei', bijgewerkt: '2026-10-21',
    bron: 'https://www.karwei.nl/klantenservice/garantie',
    kort: 'Karwei hanteert de garantietermijn van de fabrikant (die staat op de verpakking), naast je wettelijke garantie zonder vaste termijn. Binnen 30 dagen meld je een defect bij de klantenservice of in de winkel. Daarna ga je naar een Karwei-bouwmarkt, ook als je online kocht.',
    duur: [
      'Fabrieksgarantie: de termijn van de fabrikant. Die verschilt per merk en staat op de verpakking.',
      'Wettelijke garantie: geen vaste termijn. Het artikel moet bij normaal gebruik blijven werken zoals je mag verwachten.',
      'De eerste 30 dagen zijn de zichttermijn.',
    ],
    stappen: [
      'Binnen 30 dagen, online gekocht: neem direct contact op met de klantenservice. In de winkel gekocht: ga met je bon naar de bouwmarkt.',
      'Binnen 30 dagen krijg je meestal direct een nieuw of vergelijkbaar product van gelijke waarde. Alleen als vervangen niet kan, krijg je je geld terug, met enkele uitzonderingen.',
      'Na 30 dagen: ga naar een Karwei-bouwmarkt, ook bij een webshopaankoop, met je factuur of kassabon. Karwei zorgt dan voor reparatie. Kan dat niet, dan zoekt Karwei samen met jou een andere oplossing.',
      'Kun je het product niet meenemen of is het al verwerkt? Neem dan contact op met de klantenservice.',
    ],
    nodig: [
      'Je kassabon (winkel) of factuur (online).',
      'Een kopie van je kassabon kun je tot 15 maanden terug opvragen bij de bouwmarkt waar je kocht. Je online factuur staat in de orderbevestigingsmail of in je Karwei-account.',
    ],
    niet: ['Karwei noemt op de pagina geen volledige lijst met uitsluitingen, alleen dat er bij geld terug enkele uitzonderingen zijn.'],
    letop: [
      'Defect of beschadigd ontvangen? Controleer het pakket direct, meld het snel bij de klantenservice en bewaar de verpakking. Er kunnen foto’s gevraagd worden.',
      'Een klacht meld je bij de klantenservice. Je hoort binnen 14 dagen hoe Karwei het oplost.',
      'Klantenservice: 088 010 86 20 (ma t/m vr 8:00 tot 20:00, za 9:00 tot 18:00), of via WhatsApp of chat op de site. Kosten voor reparatie staan niet op de pagina.',
    ],
  },
  {
    slug: 'praxis', naam: 'Praxis', bijgewerkt: '2026-10-21',
    bron: 'https://www.praxis.nl/garantievoorwaarden',
    kort: 'Praxis geeft garantie op eigen merken van Maxeda DIY (zoals Baseline, Central Park, Sencys, Perfection en Decomode), alleen als er expliciet garantie op een product is verleend. De termijn staat op de verpakking. Je wettelijke rechten blijven altijd gelden. Neem je kassabon mee.',
    duur: [
      'De garantietermijn start op de aankoopdatum in de winkel en verschilt per product of onderdeel. Je vindt hem op de verpakking.',
      'Accu’s hebben 1 jaar garantie.',
      'Wordt een product vervangen, dan begint de garantie opnieuw bij de aankoop van het vervangende product.',
      'Fabrieksgarantie doet niets af aan je wettelijke garantie, die voor alle artikelen geldt.',
    ],
    stappen: [
      'Meld het gebrek binnen een redelijke termijn nadat je het ontdekt, en in elk geval voordat de garantietermijn afloopt.',
      'Dien je claim in bij de consumenten service desk van het Maxeda-bedrijf waar je kocht (de adressen staan op maxeda.com). Je kunt ook de winkel benaderen.',
      'Neem het product, of het gebrekkige onderdeel, mee.',
    ],
    nodig: ['Het product (of het gebrekkige onderdeel) en je originele kassabon.'],
    niet: [
      'Slijtage, corrosie, verkleuring en veroudering door normaal gebruik.',
      'Schade door verkeerd onderhoud, of door externe oorzaken zoals brand, water, vocht, ijs, vallen, verwaarlozing of verkeerd gebruik.',
      'Verbruiksartikelen en vervangbare onderdelen, zoals batterijen.',
    ],
    letop: [
      'De garantie dekt materiaal- en fabricagefouten bij normaal gebruik, als je de installatie- en onderhoudsvoorschriften hebt gevolgd.',
      'Gekocht bij een externe verkooppartner op Praxis.nl? Dan neem je contact op met die partner.',
      'De garantie geldt alleen in het land van aankoop. Kosten voor een claim staan niet in de voorwaarden.',
    ],
  },
  {
    slug: 'hema', naam: 'HEMA', bijgewerkt: '2026-10-21',
    bron: 'https://www.hema.nl/garantie-en-retour',
    kort: 'De bekendste garantie bij HEMA is die op matrassen: 10 jaar vanaf ontvangst. Daarnaast bepalen de algemene voorwaarden van HEMA dat een extra garantie je wettelijke rechten nooit beperkt. Neem voor een claim contact op met de klantenservice en lever je betalingsbewijs en een foto aan.',
    duur: [
      'Matrassen: 10 jaar, vanaf het moment dat je de matras ontvangt.',
      'Een extra garantie van de verkoper of fabrikant beperkt volgens de algemene voorwaarden van HEMA nooit je wettelijke rechten.',
      'Los van de garantie heb je bij een matras 100 nachten proefslapen. Dat is iets anders dan de garantie.',
    ],
    stappen: [
      'Neem contact op met de klantenservice van HEMA.',
      'Lever je betalingsbewijs aan.',
      'Stuur een foto van de beschadiging mee.',
    ],
    nodig: ['Je betalingsbewijs en een foto van de beschadiging.'],
    niet: [
      'Persoonlijke voorkeuren over comfort.',
      'Schade door onder meer snijwonden, brandplekken, scheuren, vloeistoffen en vlekken.',
      'Vervanging van onbeschadigde onderdelen van de matras.',
    ],
    letop: [
      'Gedekt zijn scheuren, deuken of beschadigingen van het schuim, als de matras goed is behandeld, en productiefouten aan de rits.',
      'Klantenservice: 020 224 2424 (ma t/m vr 8:30 tot 21:00, za 9:00 tot 18:00).',
      'Deze pagina gaat over matrassen. Over de garantieduur van andere HEMA-producten kon ik op de site niets vinden.',
    ],
  },
];

// 22 okt: Engelse versies (garantie-en.js). Alleen winkels met een vertaling krijgen een Engelse pagina.
import { GARANTIE_EN as VERTALING, WET_EN } from './garantie-en.js';
export { WET_EN };
export const GARANTIE_EN = GARANTIE.filter((g) => VERTALING[g.slug]).map((g) => {
  const e = VERTALING[g.slug];
  if (e.nl && e.nl !== g.bijgewerkt) console.warn(`[engels] garantie/${g.slug}: Nederlandse tekst is bijgewerkt (${g.bijgewerkt}), vertaling is van ${e.nl}`);
  return { ...g, kort: e.kort, duur: e.duur, stappen: e.stappen, nodig: e.nodig, niet: e.niet, letop: e.letop || [] };
});
const zonderEn = GARANTIE.filter((g) => !VERTALING[g.slug]);
if (zonderEn.length) console.warn(`[engels] nog geen Engelse garantiepagina voor: ${zonderEn.map((g) => g.slug).join(', ')}`);
export const garantiePad = (slug, taal = 'nl') => (taal === 'en' ? `/en/warranty/${slug}/` : `/garantie/${slug}/`);
export const heeftEngelseGarantie = (slug) => !!VERTALING[slug];
