// Draait automatisch bij elke geverifieerde Netlify-formulierinzending.
// Zet het e-mailadres in Brevo op de lijst "OEPS! wachtlijst"; de welkomstmail
// wordt verstuurd door een Brevo-automation ("contact toegevoegd aan lijst").
//
// Nodig in Netlify > Site configuration > Environment variables:
//   BREVO_API_KEY  - API-sleutel uit Brevo (SMTP & API > API keys)
//   BREVO_LIST_ID  - ID van de lijst "OEPS! wachtlijst" (Contacts > Lists)

exports.handler = async (event) => {
  const { payload } = JSON.parse(event.body || "{}");
  if (!payload || payload.form_name !== "wachtlijst") {
    return { statusCode: 200, body: "Geen wachtlijst-inzending" };
  }

  const data = payload.data || {};
  const email = (data.email || "").trim().toLowerCase();
  if (!email) return { statusCode: 200, body: "Geen e-mailadres" };

  const { BREVO_API_KEY, BREVO_LIST_ID } = process.env;
  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
    console.error("BREVO_API_KEY of BREVO_LIST_ID ontbreekt");
    return { statusCode: 500, body: "Configuratie ontbreekt" };
  }

  const base = {
    email,
    listIds: [Number(BREVO_LIST_ID)],
    updateEnabled: true, // bestaand contact? Dan alleen aan de lijst toevoegen
  };
  const attributes = {
    BRON: data.bron || "direct",
    VERGEET: data["vergeet-het-vaakst"] || "",
    BEDRAG: data["bedrag-per-maand"] || "",
  };

  const post = (body) =>
    fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(body),
    });

  let res = await post({ ...base, attributes });
  // Bestaan de extra velden (nog) niet in Brevo? Dan zonder velden opnieuw.
  if (res.status === 400) {
    console.warn("Brevo weigerde attributen:", await res.text());
    res = await post(base);
  }

  if (!res.ok) {
    const fout = await res.text();
    console.error("Brevo-fout", res.status, fout);
    return { statusCode: 502, body: "Brevo-fout" };
  }
  return { statusCode: 200, body: "Toegevoegd aan Brevo" };
};
