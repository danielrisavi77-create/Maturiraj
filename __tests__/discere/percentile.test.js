import { describe, it, expect } from 'vitest';
import { computePercentile } from '../../lib/discere/percentile.js';

function mkRows(pcts) {
  return pcts.map((pct, i) => ({ user_id: 'u' + i, pct }));
}

describe('computePercentile', () => {
  it('n < 10 vraća percentile null', () => {
    const rows = mkRows([50, 60, 70, 80, 90, 100, 40, 30, 20]);
    expect(computePercentile(rows, 55)).toEqual({ n: 9, percentile: null });
  });

  it('n === 10 vraća izračunat percentile', () => {
    const rows = mkRows([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    expect(computePercentile(rows, 55)).toEqual({ n: 10, percentile: 50 });
  });

  it('broji samo strogo manje od pct (jednaki se ne broje)', () => {
    const rows = mkRows([50, 50, 50, 50, 50, 50, 50, 50, 50, 50]);
    expect(computePercentile(rows, 50)).toEqual({ n: 10, percentile: 0 });
  });

  it('zadržava jedan red po korisniku — najbolji pct', () => {
    const rows = [
      ...mkRows([10, 20, 30, 40, 50, 60, 70, 80, 90]),
      { user_id: 'u0', pct: 95 },
      { user_id: 'u0', pct: 15 },
    ];
    // u0 doprinosi jednim redom s najboljim pct=95, ne dva reda
    expect(computePercentile(rows, 100).n).toBe(9);
    expect(computePercentile(rows, 50).n).toBe(9);
  });

  it('prazan niz redova vraća n:0, percentile null', () => {
    expect(computePercentile([], 50)).toEqual({ n: 0, percentile: null });
  });

  it('undefined redovi ne bacaju grešku', () => {
    expect(computePercentile(undefined, 50)).toEqual({ n: 0, percentile: null });
  });

  it('minSample override mijenja prag', () => {
    const rows = mkRows([10, 20, 30]);
    expect(computePercentile(rows, 25, { minSample: 3 })).toEqual({ n: 3, percentile: 67 });
    expect(computePercentile(rows, 25, { minSample: 4 })).toEqual({ n: 3, percentile: null });
  });
});
