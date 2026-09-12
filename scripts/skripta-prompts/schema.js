/**
 * Dijeljeni opisi JSON sheme koje svi promptovi po kategoriji (jezici/prirodni/
 * drustveni/umjetnost) ubacuju u svoj poziv Claudeu. Shema je identična formatu
 * koji već koristi modul kem (app/skripte/data/kem/modules/01-temelji-kemije.js)
 * jer je taj format ono što StructuredSkriptaViewer zna prikazati.
 */

export const CURRICULUM_JSON_SCHEMA_DESC = `Vrati ISKLJUČIVO važeći JSON objekt (bez markdowna, bez teksta izvan JSON-a) ovog oblika:
{
  "title": "Naziv modula",
  "subtitle": "Kratak podnaslov modula (jedna rečenica)",
  "icon": "jedan emoji koji predstavlja modul",
  "color": "#hex boja",
  "colorDim": "rgba(r,g,b,.08) verzija iste boje",
  "chapters": [
    {
      "slug": "kebab-case-slug",
      "title": "Naziv poglavlja",
      "subtitle": "Kratak podnaslov poglavlja",
      "duration": "npr. 20 min",
      "difficulty": "lako" | "srednje" | "teško",
      "maturaRelevance": "osnova" | "visoka" | "ključna",
      "order": broj počevši od 1
    }
  ]
}
Generiraj TOČNO 5 poglavlja koja zajedno čine logičan uvodni modul u predmet — redoslijedom od temeljnog prema složenijem, prikladno za prvu cjelinu pripreme za državnu maturu.`

export const CHAPTER_JSON_SCHEMA_DESC = `Vrati ISKLJUČIVO važeći JSON objekt (bez markdowna, bez teksta izvan JSON-a) ovog oblika:
{
  "mustKnow": ["kratka ključna činjenica 1", "..."],
  "quickConcept": "2-4 rečenice koje sažimaju srž poglavlja u jednostavnom jeziku",
  "theory": [
    {
      "heading": "Naslov teorijske cjeline",
      "content": "Puni teorijski tekst, nekoliko rečenica, jasno i precizno",
      "table": { "headers": ["..."], "rows": [["...", "..."]] } | null
    }
  ],
  "maturaPattern": "Opis kako se ova tema tipično pojavljuje na državnoj maturi (oblik zadataka, dio ispita, učestalost)",
  "taskPatterns": [
    { "pattern": "opis tipa zadatka koji se pojavljuje", "howToSolve": "kako mu pristupiti korak po korak" }
  ],
  "shortcuts": ["kratka mnemotehnika ili trik s emoji prefiksom, npr. '⚡ ...'"],
  "formulas": [
    { "label": "Naziv formule", "formula": "matematički/jezični izraz", "desc": "objašnjenje varijabli/upotrebe" }
  ],
  "tasks": [
    { "q": "tekst zadatka", "steps": ["korak 1", "korak 2"], "answer": "konačan odgovor" }
  ],
  "mistakes": ["❌ tipična pogreška učenika, s objašnjenjem zašto je kriva"],
  "quiz": [
    { "q": "pitanje", "opts": ["A", "B", "C", "D"], "answer": indeksBrojTočnogOdgovora, "exp": "kratko obrazloženje točnog odgovora" }
  ]
}
Pravila:
- Piši na hrvatskom jeziku, jasno i precizno, u tonu profesora koji priprema učenika za državnu maturu.
- "mustKnow": 4-7 stavki. "theory": 2-4 cjeline. "taskPatterns": 2-3. "shortcuts": 2-4. "tasks": 2-3. "mistakes": 3-5. "quiz": 4-5 pitanja.
- Ako formule nisu prirodne za ovu temu (npr. književnost, povijest), vrati "formulas": [] — nemoj izmišljati formule gdje ih nema.
- "answer" u quiz je INDEKS (0-based) točne opcije u "opts" nizu.`

// Kombinacija gornja dva — cijeli modul (skeleton + puni sadržaj svakog poglavlja)
// u JEDNOM odgovoru. Koristi se kad generiranje ide preko Claude agenta (Agent tool),
// gdje jedan poziv može vratiti puno više teksta nego jedan Anthropic API poziv sa
// zadanim max_tokens, pa nema potrebe za dvofaznim tokom (skeleton pa poglavlje-po-poglavlje).
export const FULL_MODULE_JSON_SCHEMA_DESC = `Vrati ISKLJUČIVO važeći JSON objekt (bez markdowna, bez teksta izvan JSON-a, bez uvodne ili završne rečenice) ovog oblika:
{
  "title": "Naziv modula",
  "subtitle": "Kratak podnaslov modula (jedna rečenica)",
  "icon": "jedan emoji koji predstavlja modul",
  "color": "#hex boja",
  "colorDim": "rgba(r,g,b,.08) verzija iste boje",
  "chapters": [
    {
      "slug": "kebab-case-slug",
      "title": "Naziv poglavlja",
      "subtitle": "Kratak podnaslov poglavlja",
      "duration": "npr. 20 min",
      "difficulty": "lako" | "srednje" | "teško",
      "maturaRelevance": "osnova" | "visoka" | "ključna",
      "order": broj počevši od 1,
      "mustKnow": ["kratka ključna činjenica 1", "..."],
      "quickConcept": "2-4 rečenice koje sažimaju srž poglavlja u jednostavnom jeziku",
      "theory": [
        {
          "heading": "Naslov teorijske cjeline",
          "content": "Puni teorijski tekst, nekoliko rečenica, jasno i precizno",
          "table": { "headers": ["..."], "rows": [["...", "..."]] } | null
        }
      ],
      "maturaPattern": "Opis kako se ova tema tipično pojavljuje na državnoj maturi",
      "taskPatterns": [
        { "pattern": "opis tipa zadatka koji se pojavljuje", "howToSolve": "kako mu pristupiti korak po korak" }
      ],
      "shortcuts": ["kratka mnemotehnika ili trik s emoji prefiksom, npr. '⚡ ...'"],
      "formulas": [
        { "label": "Naziv formule", "formula": "matematički/jezični izraz", "desc": "objašnjenje varijabli/upotrebe" }
      ],
      "tasks": [
        { "q": "tekst zadatka", "steps": ["korak 1", "korak 2"], "answer": "konačan odgovor" }
      ],
      "mistakes": ["❌ tipična pogreška učenika, s objašnjenjem zašto je kriva"],
      "quiz": [
        { "q": "pitanje", "opts": ["A", "B", "C", "D"], "answer": indeksBrojTočnogOdgovora, "exp": "kratko obrazloženje točnog odgovora" }
      ]
    }
  ]
}
Generiraj TOČNO 5 poglavlja s PUNIM sadržajem (ne samo naslovima) — redoslijedom od temeljnog prema složenijem, prikladno za prvu cjelinu pripreme za državnu maturu.
Pravila za svako poglavlje: piši na hrvatskom, jasno i precizno, u tonu profesora. "mustKnow": 4-7 stavki. "theory": 2-4 cjeline. "taskPatterns": 2-3. "shortcuts": 2-4. "tasks": 2-3. "mistakes": 3-5. "quiz": 4-5 pitanja. "answer" u quiz je INDEKS (0-based) točne opcije u "opts". Ako formule nisu prirodne za temu, vrati "formulas": [].`
