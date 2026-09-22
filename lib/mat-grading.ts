// Ocjenjivanje odgovora za matematički simulator.
// Ugovor (točka 3.2 plana): isAnswerCorrect / normalizeAnswer / numEquals.
// Referenca ponašanja: chk/nrm/numEq iz components/simulator/MatEngineCore.tsx.

export type MatSolution = {
  cl?: string | null;
  ans?: unknown;
  alt?: unknown[] | null;
};

export type MatQuestion = {
  type?: string | null;
  sol?: MatSolution | null;
};

export type GradingOpts = {
  /** Instanca nerdamera (učitava se lijeno u engineu); bez nje se simbolička provjera preskače. */
  nerdamer?: any;
};

/** Relativna i apsolutna tolerancija za numeričku usporedbu. */
const REL_TOL = 1e-3;
const ABS_TOL = 1e-6;
/**
 * Apsolutna tolerancija starog enginea (numEq: |a-b| < 0.01).
 * Zadržana uz relativnu da ništa što danas prolazi ne padne:
 * za male brojeve (npr. 1,76784 vs 1,77) relativna granica je preuska.
 */
const LEGACY_ABS_TOL = 0.01;

/**
 * Jedinice koje se brišu s kraja odgovora (nakon uklanjanja razmaka).
 *
 * Uz simbole su i pisani oblici istih jedinica ("30 stupnjeva", "11,5 grama"):
 * to su mjerne jedinice, ne brojive imenice — "5 čokolada" ili "90 paketa"
 * namjerno OSTAJU u zapisu jer nose značenje zadatka.
 */
const UNITS = [
  'centimetara', 'kilograma', 'stupnjeva', 'sekundi', 'kilometara',
  'milimetara', 'decimetara', 'postotaka', 'metara', 'minuta', 'litara',
  'grama', 'kuna', 'eura', 'posto', 'sati', 'sekundi', 'gram', 'godine', 'godina',
  'cm^3', 'cm^2', 'dm^3', 'dm^2', 'mm^3', 'mm^2', 'm^3', 'm^2', 'km^2',
  'cm3', 'cm2', 'dm3', 'dm2', 'mm3', 'mm2', 'm3', 'm2', 'km2',
  'km/h', 'm/s', 'kwh', 'hrk', 'eur', 'dag', 'kn', 'kg', 'mg', 'ml',
  'cm', 'dm', 'mm', 'km', 'mol', 'min', 'rad', 'deg', 'ha',
  'm', 'g', 'l', 's', 'h', '%', '€', '$', '°',
];

/** Preslikavanja pojedinačnih znakova (prije skidanja razmaka). */
const CHAR_MAP: Record<string, string> = {
  '−': '-', // unicode minus
  '–': '-', // en dash
  '—': '-', // em dash
  '‒': '-',
  '‐': '-',
  '√': 'sqrt', // √
  '∛': 'cbrt', // ∛
  'π': 'pi', // π
  '∞': 'inf', // ∞
  '⟨': '(', '〈': '(', // ⟨
  '⟩': ')', '〉': ')', // ⟩
  '∪': 'u', // ∪
  '≤': '<=', // ≤
  '≥': '>=', // ≥
  '≠': '!=', // ≠
  '⇒': '=>', // ⇒
  '→': '->', // →
  '÷': '/', // ÷
  '⁄': '/', // ⁄
  '′': "'", // ′
  '″': "''", // ″
  '½': '1/2', '¼': '1/4', '¾': '3/4',
  '⅓': '1/3', '⅔': '2/3',
  ';': '.', // ";" je u podacima separator popisa, kao i zarez
};

/** Znakovi koji se brišu: aproksimacija, množenje, dekoracija. */
const DROP_CHARS = /[≈~·×∗*⃗✓!?:_\s]/g;

const SUP_MAP: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  'ⁿ': 'n', '⁺': '+', '⁻': '-',
};
const SUB_MAP: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  'ₙ': 'n',
};

const SUP_RE = /[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ⁺⁻]+/g;
const SUB_RE = /[₀₁₂₃₄₅₆₇₈₉ₙ]+/g;

/** Vodeći "x =", "y =", "f(x) =", "T =", "x ∈" … */
const LEAD_RE = /^[a-zčćžšđ][a-z0-9'čćžšđ]{0,3}(\([^()]*\))?(=|∈)/;

/** [FRAC:a|b] → a/b */
function expandFrac(s: string): string {
  return s.replace(/\[FRAC:([^|\]]*)\|([^\]]*)\]/g, (_m, a, b) => `${a}/${b}`);
}

function mapChars(s: string): string {
  let out = '';
  for (const ch of s) out += CHAR_MAP[ch] !== undefined ? CHAR_MAP[ch] : ch;
  return out;
}

function stripUnits(s: string): string {
  let cur = s;
  for (let i = 0; i < 3; i++) {
    let hit = false;
    for (const u of UNITS) {
      if (cur.length > u.length && cur.endsWith(u)) {
        // jedinica se skida samo ako ispred nje nije slovo (da "cos" ne izgubi "s")
        const prev = cur[cur.length - u.length - 1];
        if (/[a-zčćžšđ]/.test(prev) && /[a-z]/.test(u[0])) continue;
        cur = cur.slice(0, cur.length - u.length);
        hit = true;
        break;
      }
    }
    if (!hit) break;
  }
  return cur;
}

/**
 * Kanonski oblik odgovora: mala slova, bez razmaka i jedinica, zarezi u točke,
 * unicode minus u "-", eksponenti u "^n", √ u "sqrt", π u "pi".
 */
export function normalizeAnswer(s: string): string {
  if (s === null || s === undefined) return '';
  let t = String(s);
  t = expandFrac(t);
  t = t.toLowerCase();
  t = t.replace(SUP_RE, (m) => '^' + [...m].map((c) => SUP_MAP[c] || '').join(''));
  t = t.replace(SUB_RE, (m) => [...m].map((c) => SUB_MAP[c] || '').join(''));
  t = mapChars(t);
  t = t.replace(/,/g, '.');
  t = t.replace(DROP_CHARS, '');
  // vodeća oznaka nepoznanice ("x=", "f(x)=", "x∈")
  t = t.replace(LEAD_RE, '');
  t = stripUnits(t);
  // višak točaka/crtica na rubovima
  t = t.replace(/^[.=]+/, '').replace(/[.]+$/, '');
  return t;
}

/** Stupnjevi/minute/sekunde → decimalni stupnjevi ("148°40'17''" → 148,6714). */
const DMS_RE = /^([+-]?\d+(?:\.\d+)?)°(?:(\d+(?:\.\d+)?)')?(?:(\d+(?:\.\d+)?)'')?$/;
function dmsNum(t: string): number {
  const m = t.match(DMS_RE);
  if (!m) return NaN;
  if (m[2] === undefined && m[3] === undefined) return NaN; // goli "30°" pokriva strictNum
  const sign = m[1].startsWith('-') ? -1 : 1;
  const deg = Math.abs(Number(m[1]));
  const min = m[2] === undefined ? 0 : Number(m[2]);
  const sec = m[3] === undefined ? 0 : Number(m[3]);
  if (min >= 60 || sec >= 60) return NaN;
  return sign * (deg + min / 60 + sec / 3600);
}

/** Striktni parser: cijeli string mora biti broj, razlomak ili DMS kut. */
function strictNum(t: string): number {
  if (!t) return NaN;
  const m = t.match(/^([+-]?(?:\d+\.?\d*|\.\d+))(?:\/([+-]?(?:\d+\.?\d*|\.\d+)))?$/);
  if (!m) return dmsNum(t);
  const a = Number(m[1]);
  if (m[2] === undefined) return a;
  const b = Number(m[2]);
  if (b === 0) return NaN;
  return a / b;
}

/* ------------------------------------------------------------------ *
 * Kanonski zapis brojeva unutar izraza
 *
 * Svaki brojevni literal (decimalni ili razlomak) prepisuje se u skraćeni
 * razlomak p/q. Time "4.75" i "19/4" postaju isti niz, a vrijednosti koje
 * NISU jednake ostaju različite (0,333 ≠ 1/3) — proširenje nikad ne može
 * prihvatiti krivi broj.
 * ------------------------------------------------------------------ */

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y > 0.5) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x || 1;
}

/** Decimalni zapis → točan par [brojnik, nazivnik] bez zaokruživanja. */
function decParts(t: string): [number, number] | null {
  if (!/^\d+(?:\.\d+)?$|^\.\d+$/.test(t)) return null;
  const dot = t.indexOf('.');
  if (dot < 0) return [Number(t), 1];
  const dec = t.length - dot - 1;
  if (dec > 9) return null; // izvan sigurnog cjelobrojnog raspona
  const digits = t.slice(0, dot) + t.slice(dot + 1);
  return [Number(digits), Math.pow(10, dec)];
}

const NUM_TOKEN = /(\d+(?:\.\d+)?|\.\d+)(\/(\d+(?:\.\d+)?|\.\d+))?/g;

/** "4.75" → "19/4", "0.6" → "3/5", "19/4" → "19/4", "2" → "2". */
function canonNumbers(s: string): string {
  return s.replace(NUM_TOKEN, (whole, a: string, _slash: string, b: string | undefined) => {
    const pa = decParts(a);
    if (!pa) return whole;
    let [p, q] = pa;
    if (b !== undefined) {
      const pb = decParts(b);
      if (!pb) return whole;
      const [r, t] = pb;
      if (r === 0) return whole;
      p = p * t;
      q = q * r;
    }
    if (!Number.isFinite(p) || !Number.isFinite(q) || q === 0) return whole;
    if (Math.abs(p) > Number.MAX_SAFE_INTEGER || Math.abs(q) > Number.MAX_SAFE_INTEGER) return whole;
    const g = gcd(p, q);
    p /= g;
    q /= g;
    return q === 1 ? String(p) : `${p}/${q}`;
  });
}

/**
 * Numerička usporedba s tolerancijom i podrškom za razlomke.
 *
 * Obje strane moraju biti CIJELE brojevne vrijednosti (broj ili razlomak) nakon
 * normalizacije. Namjerno nema rezerve tipa "uzmi prvi broj iz stringa":
 * za sol.ans "z = 3(cos(3π/2)+i·sin(3π/2))" ili "x₁ = √5−1, x₂ = √5+1" takva bi
 * rezerva goli unos "3" odnosno "5" proglasila točnim (masovni lažni pozitiv).
 * Zarez je u hrvatskom zapisu decimalni separator (normalizeAnswer ga pretvara u
 * točku), a tisućice se razdvajaju razmakom — pa "1,375" nikad ne znači 1375.
 */
export function numEquals(a: string, b: string): boolean {
  const na = normalizeAnswer(a);
  const nb = normalizeAnswer(b);
  if (!na || !nb) return false;
  if (na === nb) return true;
  const pa = strictNum(na);
  const pb = strictNum(nb);
  if (isNaN(pa) || isNaN(pb)) return false;
  const diff = Math.abs(pa - pb);
  if (diff < LEGACY_ABS_TOL) return true;
  return diff <= Math.max(ABS_TOL, REL_TOL * Math.max(Math.abs(pa), Math.abs(pb)));
}

/** Samo znakovi koje nerdamer sigurno probavi. */
const SAFE_SYM = /^[0-9a-z+\-*/^().]+$/;

function symEquals(a: string, b: string, nd: any): boolean {
  if (!nd) return false;
  const na = normalizeAnswer(a);
  const nb = normalizeAnswer(b);
  if (!SAFE_SYM.test(na) || !SAFE_SYM.test(nb)) return false;
  try {
    const fn = typeof nd === 'function' ? nd : nd.default;
    if (typeof fn !== 'function') return false;
    const d = fn(`(${na})-(${nb})`).evaluate();
    const txt = String(d.text ? d.text() : d);
    return txt === '0' || Number(txt) === 0;
  } catch {
    return false;
  }
}

/* ------------------------------------------------------------------ *
 * Oznake i suvišne zagrade
 * ------------------------------------------------------------------ */

/** Uvodne riječi kojima autori zapisuju rješenje ("Odgovor: 320"). */
const LABEL_WORD_RE = /^(odgovor|rezultat|rješenje|rjesenje|rj)/;

/**
 * Šira inačica LEAD_RE za kanonski sloj: dopušta dulja imena i grčko slovo
 * kao argument ("sin α = 0,8" → "0,8"). Prvo slovo mora biti latinično —
 * goli grčki simbol ("φ = 47°") ostaje oznaka veličine, ne skida se.
 * Znak "^" nije u razredu, pa jednadžba krivulje ("x²/81 + y²/45 = 1")
 * ostaje cijela.
 */
const LEAD2_RE = /^[a-zčćžšđ][a-z0-9α-ωčćžšđ']{0,5}(\([^()]*\))?(=|∈)/u;

/** Oznaka točke ispred koordinata: "B(2, −1)" → "(2, −1)". */
const POINT_LABEL_RE = /^([a-zčćžšđ]\d*)(\([^a-zčćžšđ()]*\.[^a-zčćžšđ()]*\))$/;

/** Ponavljano skida uvodne oznake dok se zapis mijenja. */
function stripLabels(t: string): string {
  let cur = t;
  for (let i = 0; i < 4; i++) {
    const before = cur;
    cur = cur.replace(LABEL_WORD_RE, '');
    cur = cur.replace(LEAD2_RE, '');
    cur = cur.replace(POINT_LABEL_RE, '$2');
    cur = cur.replace(/^[.=]+/, '');
    if (cur === before) break;
  }
  return cur;
}

/**
 * Zagrade koje ne mijenjaju vrijednost: oko golog broja/razlomka kad je
 * skupina koeficijent ili djelitelj ("(3/8)x²" = "3/8x²", "4pr/(ac)" =
 * "4pr/ac"), te oko argumenta funkcije ("sin(α)" = "sinα").
 *
 * Uvjet susjedstva čuva zagrade koje NOSE značenje: interval "(3,5)" i
 * uređeni par ostaju netaknuti. Slovo "i" se ne računa kao susjedstvo jer
 * je u ovim podacima veznik ("−2 i 3"), a ne množenje.
 */
const PAREN_NUM = /\((-?\d+(?:\.\d+)?(?:\/-?\d+(?:\.\d+)?)?)\)/g;
const PAREN_WORD = /\(([a-zα-ωčćžšđ]{1,4})\)/gu;

function dropRedundantParens(t: string): string {
  let cur = t;
  for (let pass = 0; pass < 3; pass++) {
    const before = cur;
    for (const re of [PAREN_NUM, PAREN_WORD]) {
      cur = cur.replace(re, (whole, inner: string, ...rest: any[]) => {
        const offset: number = rest[rest.length - 2];
        const src: string = rest[rest.length - 1];
        const prev = offset > 0 ? src[offset - 1] : '';
        const next = src[offset + whole.length] || '';
        const isLetter = (c: string) => c !== '' && c !== 'i' && /[a-zα-ωčćžšđ]/u.test(c);
        const attached = isLetter(prev) || prev === '/' || isLetter(next);
        return attached ? inner : whole;
      });
    }
    if (cur === before) break;
  }
  return cur;
}

/**
 * Kanonski oblik cijelog izraza: normalizacija, skidanje oznaka i suvišnih
 * zagrada, brojevi u skraćene razlomke. Nad njim rade sve klase
 * ekvivalencije (npr. "x>19/4" i "x>4,75").
 */
function canonExpr(s: string): string {
  return canonNumbers(dropRedundantParens(stripLabels(normalizeAnswer(s))));
}

/**
 * Jesu li dva zapisa isti odgovor? Prošireno preko doslovne jednakosti, ali
 * konzervativno: svaka klasa ekvivalencije mora biti matematički istinita.
 */
export function answersEquivalent(a: string, b: string): boolean {
  const na = normalizeAnswer(a);
  const nb = normalizeAnswer(b);
  if (!na || !nb) return false;
  if (na === nb) return true;
  if (numEquals(a, b)) return true;
  const ca = canonExpr(na);
  const cb = canonExpr(nb);
  if (!ca || !cb) return false;
  if (ca === cb) return true;
  return false;
}

/** Kanonski oblik slova ponuđenog odgovora: "C)", "(c)", "c." → "c". */
function normalizeChoice(s: unknown): string {
  return normalizeAnswer(String(s ?? '')).replace(/[^a-z0-9]/g, '');
}

function altList(sol: MatSolution): string[] {
  const out: string[] = [];
  if (sol.ans !== undefined && sol.ans !== null) out.push(String(sol.ans));
  for (const x of sol.alt || []) {
    if (x !== undefined && x !== null) out.push(String(x));
  }
  return out;
}

/**
 * Vraća true/false za zadatke koji se mogu automatski ocijeniti,
 * a null kad ocjena nije moguća (dokazi, tekst, nepoznato rješenje).
 */
export function isAnswerCorrect(
  q: MatQuestion,
  answer: unknown,
  opts?: GradingOpts
): boolean | null {
  if (!q || !q.sol) return null;
  const type = q.type;
  const sol = q.sol;

  if (type === 'mc') {
    if (!sol.cl || sol.cl === '?') return null;
    const want = normalizeChoice(sol.cl);
    const got = normalizeChoice(answer);
    if (got && got === want) return true;
    // rezerva: alt lista može sadržavati zapise slova ("C)", "(c)")
    return altList(sol).some((x) => normalizeChoice(x) === got && got !== '');
  }

  if (type === 'num' || type === 'calc') {
    const alts = altList(sol);
    if (!alts.length) return null;
    const a = String(answer ?? '');
    if (alts.some((x) => answersEquivalent(x, a))) return true;
    if (opts?.nerdamer && alts.some((x) => symEquals(x, a, opts.nerdamer))) return true;
    return false;
  }

  if (type === 'sa' || type === 'pa') {
    const alts = altList(sol);
    if (!alts.length) return null;
    const a = String(answer ?? '');
    const na = normalizeAnswer(a);
    if (na !== '' && alts.some((x) => answersEquivalent(x, a))) return true;
    // rezerva kompatibilna sa starim nrm-om (brisao je sve točke i zareze)
    const flat = na.replace(/\./g, '');
    if (flat !== '' && alts.some((x) => normalizeAnswer(x).replace(/\./g, '') === flat)) return true;
    if (opts?.nerdamer && alts.some((x) => symEquals(x, a, opts.nerdamer))) return true;
    return false;
  }

  // proof / text / nepoznato — ne ocjenjuje se automatski
  return null;
}

export default { isAnswerCorrect, normalizeAnswer, numEquals, answersEquivalent };
