'use client';
/* Immutable per-question workspace snapshots with a tiny subscriber store. */
export function createWorkspaceStore(initial = {}) {
  const snapshots = new Map();
  const listeners = new Map();
  Object.keys(initial || {}).forEach(function (rawKey) {
    const value = initial[rawKey];
    if (value != null) snapshots.set(String(rawKey), value);
  });
  function get(key) {
    if (key == null) return null;
    const k = String(key);
    return snapshots.has(k) ? snapshots.get(k) : null;
  }
  function patch(key, changes) {
    if (key == null || changes == null) return;
    const k = String(key);
    const prev = snapshots.get(k) || {};
    const next = Object.assign({}, prev, changes);
    if (changes.strokes) next.strokes = changes.strokes.slice();
    snapshots.set(k, next);
    const subs = listeners.get(k);
    if (subs) subs.forEach(function (cb) { cb(); });
  }
  function subscribe(key, callback) {
    if (key == null) return function () {};
    const k = String(key);
    let subs = listeners.get(k);
    if (!subs) { subs = new Set(); listeners.set(k, subs); }
    subs.add(callback);
    return function () {
      subs.delete(callback);
      if (subs.size === 0) listeners.delete(k);
    };
  }
  return { get, patch, subscribe };
}

export function hasWorkspaceWork(snapshot) {
  return !!(snapshot && ((snapshot.strokes && snapshot.strokes.length) || (snapshot.calcHist && snapshot.calcHist.length) || (snapshot.solveInput && ("" + snapshot.solveInput).trim()) || (snapshot.funcs && snapshot.funcs.length) || snapshot.figOn));
}
