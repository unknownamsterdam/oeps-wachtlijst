// 22 okt: Engelse versie van de zoekpagina's uit gids.json (retourtermijnen en opzeggen).
// Sleutel = '<soort>/<slug>'. `nl` = de datum (bijgewerkt) van de Nederlandse pagina die vertaald is.
// Staat een winkel of dienst hier niet in, dan krijgt hij (nog) geen Engelse pagina; de build meldt welke ontbreken.
// Is de Nederlandse pagina daarna bijgewerkt (andere datum), dan meldt de build dat de vertaling opnieuw moet.
// Namen van knoppen en menu's op de site van de winkel staan tussen haakjes in het Nederlands, zoals je ze daar ziet.
export const GIDS_EN = {
  'retour/bol': { nl: '2026-10-11', kosten: 'Free', stappen: [
    'Log in to your bol.com account',
    "Go to 'Mijn bestellingen' (My orders) and click 'Retourneren' (Return)",
    'Select the item and give a reason for the return',
    'Take the parcel with your return label to a PostNL return point',
  ] },
  'retour/coolblue': { nl: '2026-10-14', kosten: 'Free', stappen: [
    'Register your return using the online return form',
    'Within an hour you get a confirmation email with a return number and shipping label',
    'Pack the product well and send it for free via PostNL',
    "Follow the status in 'Mijn Coolblue' (My Coolblue)",
  ] },
  'retour/amazon-nl': { nl: '2026-10-08', kosten: 'Free for certain items, otherwise it depends on the seller', stappen: [
    'Go to your orders',
    "Select the order and click 'Items retourneren of vervangen' (Return or replace items)",
    'Select the item and give your reasons for returning it',
    'Print the return label and take the parcel to the drop-off point',
  ] },
  'retour/wehkamp': { nl: '2026-10-14', kosten: '€0.50 per item, or €2.95 per shipment with Ophalen Plus (collection)', stappen: [
    "Register your return under 'Mijn Retouren' (My returns) in your account",
    'Pack the items (preferably in the original packaging)',
    'Drop your parcel off at a DHL ServicePoint, Buurtpunt or parcel locker',
    'Follow your return with the track & trace code',
  ] },
  'retour/h-en-m': { nl: '2026-10-08', kosten: '€2.99 for online returns (free in store)', stappen: [
    "Log in to your account and go to 'Mijn bestellingen' (My orders)",
    'Select the items you want to send back',
    'Register your return in the returns portal',
    'Send the items back with the return label',
  ] },
  'retour/zara': { nl: '2026-10-08', kosten: 'Free to return in store; €2.95 per return via a drop-off point', stappen: [
    "Log in to your Zara account and go to 'Mijn bestellingen' (My orders)",
    'Select the order and choose a return option (store or drop-off point)',
    'For a drop-off point: you get a DHL return label by email; print it out',
    'Drop the parcel off at a Zara store or a DHL service point',
  ] },
  'retour/mediamarkt': { nl: '2026-10-14', kosten: 'Free', stappen: [
    'Register your return using the online return form in your account',
    'Hand the product in at a MediaMarkt store or send it back by post',
    'For large products, MediaMarkt will collect them from your home in most cases',
  ] },
  'retour/ikea': { nl: '2026-10-14', kosten: 'Free return in an IKEA store; paid return by parcel or by truck', stappen: [
    "Register your return in your IKEA Family account under 'Aankopen' (Purchases) or with the return form",
    'Choose how to return: in store, by parcel or by truck',
    'For a parcel return: you get a barcode by email; take the parcel to PostNL',
    'For a store or truck return: follow the instructions in your return confirmation',
  ] },
  'retour/decathlon': { nl: '2026-10-14', kosten: 'Free', stappen: [
    "Log in to your account and go to 'Retour aanmaken' (Create return)",
    'Select the items and choose the reason for the return',
    'Get a return label by email or use the label from the box',
    'Drop the parcel off at a PostNL parcel point or a Decathlon store',
  ] },
  'retour/about-you': { nl: '2026-10-14', kosten: 'Free', stappen: [
    'Log in to your ABOUT YOU account',
    'Fill in the return form',
    'Pack the item with the return label',
    'Drop the parcel off at PostNL',
  ] },
  'retour/shein': { nl: '2026-10-14', kosten: 'Free for the first return shipment, €4.50 for further returns', stappen: [
    "Log in to your SHEIN account and go to 'Mijn bestellingen' (My orders)",
    "Click 'Artikelen retourneren' (Return items) and select which items you're sending back",
    'Download the return label and print it out',
    'Drop the parcel off at a PostNL service point',
  ] },
  'retour/uniqlo': { nl: '2026-10-09', kosten: '€2.95 per return request', stappen: [
    'Log in to your UNIQLO account',
    "Go to 'Aankoopgeschiedenis' (Purchase history) under 'Mijn Account' (My account)",
    'Select the order you want to return',
    'Follow the steps to print your return label and send it back',
  ] },
  'retour/nike': { nl: '2026-10-14', kosten: 'Free for Nike Members, costs may apply for non-members', stappen: [
    'Log in to your Nike account on Nike.com',
    'Select the order you want to return',
    "Click 'Start Return' and tick the items you want to send back",
    'Print the return label and drop the parcel off with the carrier shown',
  ] },
  'retour/de-bijenkorf': { nl: '2026-10-14', kosten: 'Free', stappen: [
    'Log in to your account',
    "Click 'Retouren' (Returns)",
    'Register your return',
    'Drop the parcel off at a PostNL point',
  ] },
  'retour/hema': { nl: '2026-10-14', kosten: 'Free in store, shipping costs via UPS or DHL', stappen: [
    'Log in to your account on hema.nl',
    "Go to 'Mijn bestellingen' (My orders) and select the order",
    'Register the return and fill in the return form',
    'Take the parcel to a UPS point or a HEMA store',
  ] },

  'opzeggen/netflix': { nl: '2026-10-14', let_op: 'You keep access to Netflix until the end of your current billing period.', stappen: [
    'Log in on netflix.com',
    "Click your profile icon at the top right and go to 'Account'",
    "Under 'Lidmaatschap en facturering' (Membership & billing), click 'Lidmaatschap opzeggen' (Cancel membership)",
    'Confirm your choice',
  ] },
  'opzeggen/spotify': { nl: '2026-10-14', let_op: 'Your subscription stays active until the next billing date.', stappen: [
    'Log in on spotify.com/account',
    "Click 'Je abonnement' (Your plan)",
    "Choose 'Abonnement wijzigen' (Change plan)",
    "Click 'Premium annuleren' (Cancel Premium)",
  ] },
  'opzeggen/disney-plus': { nl: '2026-10-14', let_op: 'Your subscription runs until the end of the period you paid for.', stappen: [
    'Log in to your Disney+ account',
    'Click your profile icon',
    'Go to Account',
    "Click 'Abonnement opzeggen' (Cancel subscription)",
  ] },
  'opzeggen/videoland': { nl: '2026-10-14', let_op: 'You keep access until the end of your current billing period.', stappen: [
    'Log in on www.videoland.com',
    "Go to 'Mijn account' (My account)",
    "Select 'Abonnement opzeggen' (Cancel subscription)",
    'Confirm your cancellation',
  ] },
  'opzeggen/hbo-max': { nl: '2026-10-14', let_op: 'Cancel before your next billing date to avoid further charges.', stappen: [
    'Log in to your HBO Max account on hbomax.com',
    "Click your profile icon and go to 'Abonnement' (Subscription)",
    "Choose 'Abonnement beheren' (Manage subscription)",
    "Select 'Abonnement opzeggen' (Cancel subscription) and confirm",
  ] },
  'opzeggen/amazon-prime': { nl: '2026-10-14', let_op: 'After cancelling, you usually keep access until the end of the paid period.', stappen: [
    'Log in on amazon.nl',
    "Go to 'Account & instellingen' (Account & settings) and then 'Je Prime-lidmaatschap' (Your Prime membership)",
    "Click 'Lidmaatschap beëindigen' (End membership)",
    'Confirm the cancellation',
  ] },
  'opzeggen/bol-select': { nl: '2026-10-14', let_op: 'After the 30-day free trial, you can cancel monthly once the first year of 12 months is over.', stappen: [
    'Log in to your bol.com account',
    "Go to 'Mijn bol' (My bol) and click Select",
    "Choose 'Select opzeggen' (Cancel Select)",
    'Confirm your cancellation',
  ] },
  'opzeggen/ziggo': { nl: '2026-10-14', let_op: 'The subscription stops at the end of the current billing period; the notice period is 1 month', stappen: [
    "Log in to 'Mijn Ziggo' (My Ziggo)",
    "Go to 'Producten' (Products)",
    "Click 'Abonnement opzeggen' (Cancel subscription)",
    'Confirm your cancellation online',
  ] },
  'opzeggen/kpn': { nl: '2026-10-14', let_op: 'The notice period is 1 month after your contract ends', stappen: [
    "Log in to 'MijnKPN' (My KPN)",
    'Go to your products',
    'Click the product you want to cancel',
    'Fill in the online cancellation form',
  ] },
  'opzeggen/odido': { nl: '2026-10-08', let_op: 'Your cancellation takes effect after your contract ends; the notice period is one month.', stappen: [
    "Log in to 'Mijn Odido' (My Odido)",
    'Go to your active subscriptions',
    "Find the option 'abonnement opzeggen' (cancel subscription)",
    'Fill in the form and confirm',
  ] },
  'opzeggen/vodafone': { nl: '2026-10-14', let_op: 'The notice period is at least 1 month. Cancelling before the end of your contract costs 50% of the remaining amount.', stappen: [
    'Fill in the online cancellation form on vodafone.nl',
    'Add your contact details and contract number',
    'Submit the form at least 1 month before the date you want to cancel',
    'You receive a confirmation of your cancellation',
  ] },
  'opzeggen/basic-fit': { nl: '2026-10-14', let_op: 'The notice period is four weeks, after the minimum contract term of 52 weeks.', stappen: [
    'Log in to your Basic-Fit account on the website or in the app',
    'Go to your membership details',
    'Click the cancellation option',
    'Follow the confirmation steps',
  ] },
  'opzeggen/anwb-wegenwacht': { nl: '2026-10-14', let_op: 'After the first contract period: 1 month notice.', stappen: [
    'Go to https://www.anwb.nl/service-en-contact/categorie/opzeggen',
    'Fill in the cancellation form for your Wegenwacht (roadside assistance)',
    'Or call 088 269 22 22 with your membership number',
  ] },
  'opzeggen/eneco': { nl: '2026-10-08', let_op: 'The notice period is 30 days. A fixed-term contract may come with a cancellation fee.', stappen: [
    "Log in to 'Mijn Eneco' (My Eneco)",
    'Select your reason for cancelling',
    'Choose the end date you want',
    'Confirm your cancellation',
  ] },
  'opzeggen/vattenfall': { nl: '2026-10-14', let_op: 'The notice period is 30 days. A fixed-term contract may come with a cancellation fee.', stappen: [
    "Log in to 'Mijn Vattenfall' (My Vattenfall)",
    'Go to your contract',
    'Select the cancellation option',
    'Complete the cancellation; you get a confirmation by email',
  ] },
  'opzeggen/essent': { nl: '2026-10-14', let_op: 'If you end a fixed-term contract early, a cancellation fee may apply.', stappen: [
    "Log in to 'Mijn Essent' (My Essent)",
    'Go to your contract',
    "Select 'opzeggen' (cancel)",
    'Complete the cancellation process',
  ] },
};

// Hoe je opzegt en manieren van terugsturen (zelfde sleutels als VIA en MANIER in gids.js).
export const VIA_EN = { account: 'in your account', mail: 'by email', telefoon: 'by phone', formulier: 'with a form', brief: 'by letter', winkel: 'in the shop' };
export const MANIER_EN = { account: 'Register the return in your account', winkel: 'Take it back to a store', retourpunt: 'Drop it off at a parcel point', ophalen: 'Have it collected' };
