const MIN_SAMPLE = 10;

// rows: [{ user_id, pct }, ...] (može sadržavati više redova po korisniku — zadržava se
// najbolji pct po korisniku prije računanja percentila).
// Sažme redove na jedan po korisniku (najbolji pct). Izdvojeno da ruta može keširati
// sažetu distribuciju umjesto svih dohvaćenih redova; idempotentno je, pa se već sažeti
// niz smije ponovno provući kroz computePercentile.
function bestPctByUser(rows) {
  const best = new Map();
  for (const row of rows || []) {
    const prev = best.get(row.user_id);
    if (prev === undefined || row.pct > prev) best.set(row.user_id, row.pct);
  }
  return [...best.entries()].map(([user_id, pct]) => ({ user_id, pct }));
}

function computePercentile(rows, pct, { minSample = MIN_SAMPLE } = {}) {
  const best = bestPctByUser(rows);

  const n = best.length;
  if (n < minSample) return { n, percentile: null };

  let below = 0;
  for (const row of best) if (row.pct < pct) below++;

  return { n, percentile: Math.round((below / n) * 100) };
}

export { computePercentile, bestPctByUser, MIN_SAMPLE };
