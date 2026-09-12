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

/** Jedinice koje se brišu s kraja odgovora (nakon uklanjanja razmaka). */
const UNITS = [
  'cm^3', 'cm^2', 'dm^3', 'dm^2', 'mm^3', 'mm^2', 'm^3', 'm^2', 'km^2',
  'km/h', 'm/s', 'kwh', 'hrk', 'eur', 'kn', 'kg', 'mg', 'ml',
  'cm', 'dm', 'mm', 'km', 'mol', 'min', 'rad', 'deg',
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

/** Striktni parser: cijeli string mora biti broj ili razlomak. */
function strictNum(t: string): number {
  if (!t) return NaN;
  const m = t.match(/^([+-]?(?:\d+\.?\d*|\.\d+))(?:\/([+-]?(?:\d+\.?\d*|\.\d+)))?$/);
  if (!m) return NaN;
  const a = Number(m[1]);
  if (m[2] === undefined) return a;
  const b = Number(m[2]);
  if (b === 0) return NaN;
  return a / b;
}

/** "20,000" / "1,375" — zarez kao separator tisućica (pojavljuje se u alt listama). */
function thousandsNum(raw: string): number {
  const t = String(raw).trim().replace(/\s/g, '');
  return /^[+-]?\d{1,3}(,\d{3})+$/.test(t) ? Number(t.replace(/,/g, '')) : NaN;
}

/** Blaga rezerva — isto ponašanje kao parseFloat u starom numEq. */
function leadingNum(t: string): number {
  const m = t.match(/[+-]?(?:\d+\.?\d*|\.\d+)/);
  return m ? Number(m[0]) : NaN;
}

/** Numerička usporedba s relativnom tolerancijom i podrškom za razlomke. */
export function numEquals(a: string, b: string): boolean {
  const na = normalizeAnswer(a);
  const nb = normalizeAnswer(b);
  if (!na || !nb) return false;
  if (na === nb) return true;
  let pa = strictNum(na);
  let pb = strictNum(nb);
  if (isNaN(pa) || isNaN(pb)) {
    pa = leadingNum(na);
    pb = leadingNum(nb);
  }
  const ta = thousandsNum(a);
  const tb = thousandsNum(b);
  const candA = [pa, ta].filter((x) => !isNaN(x));
  const candB = [pb, tb].filter((x) => !isNaN(x));
  if (!candA.length || !candB.length) return false;
  for (const x of candA) {
    for (const y of candB) {
      const diff = Math.abs(x - y);
      if (diff <= Math.max(ABS_TOL, REL_TOL * Math.max(Math.abs(x), Math.abs(y)))) return true;
    }
  }
  return false;
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
    if (alts.some((x) => numEquals(x, a))) return true;
    if (opts?.nerdamer && alts.some((x) => symEquals(x, a, opts.nerdamer))) return true;
    return false;
  }

  if (type === 'sa' || type === 'pa') {
    const alts = altList(sol);
    if (!alts.length) return null;
    const a = String(answer ?? '');
    const na = normalizeAnswer(a);
    if (na !== '' && alts.some((x) => normalizeAnswer(x) === na)) return true;
    if (alts.some((x) => numEquals(x, a))) return true;
    // rezerva kompatibilna sa starim nrm-om (brisao je sve točke i zareze)
    const flat = na.replace(/\./g, '');
    if (flat !== '' && alts.some((x) => normalizeAnswer(x).replace(/\./g, '') === flat)) return true;
    if (opts?.nerdamer && alts.some((x) => symEquals(x, a, opts.nerdamer))) return true;
    return false;
  }

  // proof / text / nepoznato — ne ocjenjuje se automatski
  return null;
}

export default { isAnswerCorrect, normalizeAnswer, numEquals };
