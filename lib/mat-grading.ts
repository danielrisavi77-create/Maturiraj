// STUB-ROUND2 — privremeni stub, zamjenjuje ga prava implementacija grupe "grading".
// Replicira današnje ponašanje enginea (chk/nrm/numEq iz MatEngineCore.tsx) 1:1,
// samo iza dogovorenog ugovora. Ne dodavati ovdje nova pravila — to radi grupa grading.

export type GradingOpts = { nerdamer?: any };

/** Normalizacija kratkog odgovora (današnje `nrm` iz enginea). */
export function normalizeAnswer(s: any): string {
  return String(s == null ? "" : s)
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:]/g, "")
    .replace(",", ".");
}

/** Brojčana usporedba (današnji `numEq` iz enginea): apsolutna tolerancija 0,01. */
export function numEquals(a: any, b: any): boolean {
  const sa = String(a == null ? "" : a);
  const sb = String(b == null ? "" : b);
  const pa = parseFloat(sa.replace(",", "."));
  const pb = parseFloat(sb.replace(",", "."));
  if (isNaN(pa) || isNaN(pb)) return normalizeAnswer(sa) === normalizeAnswer(sb);
  return Math.abs(pa - pb) < 0.01;
}

/**
 * Ocjena jednog odgovora.
 * @returns true = točno, false = netočno, null = ne može se automatski ocijeniti
 *          (npr. proof/text, ili MC bez poznatog rješenja).
 */
export function isAnswerCorrect(q: any, answer: any, _opts?: GradingOpts): boolean | null {
  if (!q) return null;
  if (q.type === "mc") {
    if (!q.sol || q.sol.cl === "?") return null;
    return answer === q.sol.cl;
  }
  if (q.type === "num" || q.type === "calc") {
    if (!q.sol) return null;
    const alts = [q.sol.ans, ...(q.sol.alt || [])];
    return alts.some((x) => numEquals(String(x), String(answer)));
  }
  if (q.type === "sa" || q.type === "pa") {
    if (!q.sol) return null;
    const alts = [q.sol.ans, ...(q.sol.alt || [])];
    return alts.some((x) => normalizeAnswer(x) === normalizeAnswer(answer));
  }
  return null;
}
