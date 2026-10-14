// Haalt de nieuwste gegevens voor de zoekpagina's op en zet ze in src/data/gids.json.
import fs from 'node:fs';
const r = await fetch('https://oeps.app/api/zoekpaginas');
const d = await r.json();
fs.writeFileSync(new URL('../src/data/gids.json', import.meta.url), JSON.stringify(d, null, 1) + '\n');
console.log(`${d.paginas.filter((p) => p.klaar).length} van ${d.paginas.length} klaar`);
