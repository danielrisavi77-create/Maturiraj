// Mapiranje: lektira (djelo) → poglavlje skripte (slug + autor za sidro + labela).
// Ruta /skripte/hrv/{slug} učitava poglavlje{NN}.jsx (shema iz chapters.js je mjerodavna;
// HRV_POGAVLJA_META u index.js je zastarjela i NE koristi se za rute).
// Skripte su besplatne u svim tierovima → link iz simulatora nikad ne udara u paywall.
// Navedena su SAMO djela koja imaju vlastito živo poglavlje; ostala su namjerno izostavljena
// (nema dedicirane skripte → gumb se ne prikazuje). Verificirano protiv poglavlje{NN}.jsx.

// tab:1 = djelo ima vlastiti „deep-dive" tab (l1) u poglavlju → link otvara baš taj tab
// (verificirano: l1 je radni tab u h01/h03/h04/h05/h07/h08/h09/h11/h13/h14/h15/h16).
// Bez tab → djelo je podsekcija (Teorija) → link na razinu poglavlja.
export const LEKTIRA_SKRIPTA = {
  // Svjetska književnost
  "Antigona":                       { slug:"h01", tab:1, autor:"Sofoklo",                     chapter:"H01 · Antika" },
  "Hamlet":                         { slug:"h03", tab:1, autor:"William Shakespeare",         chapter:"H03 · Renesansa" },
  "Izbor iz poezije (Kanconijer)":  { slug:"h03",        autor:"Francesco Petrarca",          chapter:"H03 · Renesansa" },
  "Život je san":                   { slug:"h04", tab:1, autor:"Pedro Calderón de la Barca",  chapter:"H04 · Barok i klasicizam" },
  "Patnje mladoga Werthera":        { slug:"h05", tab:1, autor:"J. W. Goethe",                chapter:"H05 · Prosvjetiteljstvo" },
  "Zločin i kazna":                 { slug:"h07", tab:1, autor:"Fjodor Dostojevski",          chapter:"H07 · Realizam" },
  "Ana Karenjina":                  { slug:"h07",        autor:"Lev Tolstoj",                 chapter:"H07 · Realizam" },
  "Otac Goriot":                    { slug:"h07",        autor:"Honoré de Balzac",            chapter:"H07 · Realizam" },
  "Preobražaj":                     { slug:"h08", tab:1, autor:"Franz Kafka",                 chapter:"H08 · Moderna" },
  "Stranac":                        { slug:"h09", tab:1, autor:"Albert Camus",                chapter:"H09 · Egzistencijalizam" },
  // Hrvatska književnost
  "Novela od Stanca":               { slug:"h11", tab:1, autor:"Marin Držić",                 chapter:"H11 · Stari hrvatski pisci" },
  "Dundo Maroje":                   { slug:"h11", tab:1, autor:"Marin Držić",                 chapter:"H11 · Stari hrvatski pisci" },
  "Dubravka":                       { slug:"h13", tab:1, autor:"Ivan Gundulić",               chapter:"H13 · Barok (hrv.)" },
  "Smrt Smail-age Čengića":         { slug:"h14", tab:1, autor:"Ivan Mažuranić",              chapter:"H14 · Preporod" },
  "Prijan Lovro":                   { slug:"h15", tab:1, autor:"August Šenoa",                chapter:"H15 · Realizam (hrv.)" },
  "Gospoda Glembajevi":             { slug:"h16", tab:1, autor:"Miroslav Krleža",             chapter:"H16 · Moderna (hrv.)" },
  "Povratak Filipa Latinovicza":    { slug:"h16",        autor:"Miroslav Krleža",             chapter:"H16 · Moderna (hrv.)" },
};

// ── ŠIRENJE: djela koja JOŠ nemaju živo poglavlje u skriptama ─────────────────
// Za njih se gumb/chip „Detaljno u skripti" namjerno NE prikazuje (graceful izostanak).
// Skripte su fokusirane na 2026 ispitna/esejska djela; kad neko od ovih dobije
// poglavlje (poglavlje{NN}.jsx + unos u chapters.js), dovoljno je ovdje dodati 1 redak:
//   "Kiklop": { slug:"hNN", tab:1, autor:"Ranko Marinković", chapter:"HNN · …" },
// (tab:1 ako djelo ima vlastiti „deep-dive" tab l1; inače izostavi tab → link na poglavlje.)
// Trenutno nepokriveno:
//   HR:        Izbor iz poezije (Kranjčević) · Izbor iz poezije (Nazor) ·
//              Izbor iz poezije (A. B. Šimić) · Izbor iz poezije (Ujević) ·
//              Camao… (Matoš) · Kiklop (Marinković) · Posljednji Stipančići (Novak) ·
//              U registraturi (Kovačić) · Kratki izlet (Šoljan)
//   Svjetska:  Izbor iz poezije (Baudelaire) · Nora (Ibsen) · Lovac u žitu (Salinger)

// Pretvori ime autora u sidro (slug) — koristi se kad poglavlja izlože id-ove autorskih blokova.
export function autorSidro(name){
  return (name||"").toLowerCase()
    .replace(/[čć]/g,"c").replace(/đ/g,"d").replace(/š/g,"s").replace(/ž/g,"z")
    .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
}

// Vrati mapiranje za zadanu lektiru, ili null.
export function skriptaZaLektiru(djelo){
  return (djelo && LEKTIRA_SKRIPTA[djelo]) || null;
}

// Sastavi URL do skripte. Sve se kodira u HASH (ostaje client-side → stranica ostaje
// potpuno statična; query bi u dev-u mogao gurnuti render u streaming → hydration bug).
//   anchor + map.tab → "l<tab>" (sidro na radni tab); embed → "embed" (čisti prikaz za modal).
//   npr. /skripte/hrv/h08#embed&l1  ·  /skripte/hrv/h08#l1  ·  /skripte/hrv/h08
export function skriptaUrl(map,{anchor=false,embed=false}={}){
  if(!map || !map.slug) return null;
  const parts=[];
  if(embed) parts.push("embed");
  if(anchor && map.tab) parts.push("l"+map.tab);
  return "/skripte/hrv/"+map.slug+(parts.length?("#"+parts.join("&")):"");
}

// Obrnuti indeks za pregled grešaka: "{examKey}__{qid}" → { djelo, ...skripta }.
// Gradi se iz LEKTIRE_PITANJA (djelo → [{exam, qid}]); preskaču se djela bez skripte.
import { LEKTIRE_PITANJA } from './lektireData';
export const PITANJE_SKRIPTA = (() => {
  const idx = {};
  for (const djelo in LEKTIRE_PITANJA) {
    const map = LEKTIRA_SKRIPTA[djelo];
    if (!map) continue;
    for (const p of (LEKTIRE_PITANJA[djelo] || [])) {
      idx[p.exam + "__" + p.qid] = { djelo, ...map };
    }
  }
  return idx;
})();

// Pronađi skriptu za konkretno ispitno pitanje (po izvornom ispitu + qid).
export function skriptaZaPitanje(examKey, qid){
  if (examKey == null || qid == null) return null;
  return PITANJE_SKRIPTA[examKey + "__" + qid] || null;
}
