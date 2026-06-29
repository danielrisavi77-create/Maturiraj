import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createExamLoader } from '../../lib/engleski-simulator/loader.js';

// Helper to create a controlled promise
function deferred() {
  let resolve, reject;
  const promise = new Promise((res, rej) => { resolve = res; reject = rej; });
  return { promise, resolve, reject };
}

describe('createExamLoader', () => {
  let loader;

  beforeEach(() => {
    // Each test gets a fresh loader instance with empty cache/loading state
    loader = createExamLoader();
  });

  // ── Cache hit ──────────────────────────────────────────────────────────────
  it('calls onSuccess synchronously when cache is primed', () => {
    const fakeData = { '2024_ljeto': { qs: [] } };
    loader._cache.osnovna = fakeData;

    const onSuccess = vi.fn();
    loader.load('osnovna', undefined, onSuccess, undefined);

    expect(onSuccess).toHaveBeenCalledWith(fakeData);
    expect(onSuccess).toHaveBeenCalledTimes(1);
  });

  // ── Fresh load ─────────────────────────────────────────────────────────────
  it('starts a fetch on cache miss and calls onSuccess when resolved', async () => {
    const fakeData = { '2024_ljeto': { qs: [] } };
    const fetchFn = vi.fn().mockResolvedValue(fakeData);
    const onSuccess = vi.fn();

    loader.load('osnovna', fetchFn, onSuccess, undefined);

    expect(fetchFn).toHaveBeenCalledWith('osnovna');
    expect(loader._loading.osnovna).toBe(true);

    await vi.waitFor(() => expect(onSuccess).toHaveBeenCalledWith(fakeData));
    expect(loader._cache.osnovna).toBe(fakeData);
    expect(loader._loading.osnovna).toBe(false);
  });

  // ── Deduplication ──────────────────────────────────────────────────────────
  it('deduplicates concurrent requests — fetch called exactly once', async () => {
    const fakeData = { '2024_ljeto': { qs: [] } };
    const { promise, resolve } = deferred();
    const fetchFn = vi.fn().mockReturnValue(promise);
    const cb1 = vi.fn();
    const cb2 = vi.fn();
    const cb3 = vi.fn();

    loader.load('osnovna', fetchFn, cb1, undefined);
    loader.load('osnovna', fetchFn, cb2, undefined); // queued, no new fetch
    loader.load('osnovna', fetchFn, cb3, undefined); // queued, no new fetch

    expect(fetchFn).toHaveBeenCalledTimes(1);

    resolve(fakeData);
    await vi.waitFor(() => {
      expect(cb1).toHaveBeenCalledWith(fakeData);
      expect(cb2).toHaveBeenCalledWith(fakeData);
      expect(cb3).toHaveBeenCalledWith(fakeData);
    });
  });

  // ── Error path ─────────────────────────────────────────────────────────────
  it('calls onErr and resets loading flag on fetch failure', async () => {
    const error = new Error('HTTP 404');
    const fetchFn = vi.fn().mockRejectedValue(error);
    const onSuccess = vi.fn();
    const onErr = vi.fn();

    loader.load('osnovna', fetchFn, onSuccess, onErr);

    await vi.waitFor(() => expect(onErr).toHaveBeenCalledWith(error));
    expect(onSuccess).not.toHaveBeenCalled();
    expect(loader._loading.osnovna).toBe(false);
    expect(loader._cache.osnovna).toBeUndefined();
  });

  it('calls each queued onErr when fetch fails', async () => {
    const error = new Error('HTTP 500');
    const { promise, reject } = deferred();
    const fetchFn = vi.fn().mockReturnValue(promise);
    const err1 = vi.fn();
    const err2 = vi.fn();

    loader.load('osnovna', fetchFn, vi.fn(), err1);
    loader.load('osnovna', fetchFn, vi.fn(), err2);

    reject(error);
    await vi.waitFor(() => {
      expect(err1).toHaveBeenCalledWith(error);
      expect(err2).toHaveBeenCalledWith(error);
    });
  });

  // ── Retry after failure ────────────────────────────────────────────────────
  it('allows a retry call after a previous failure', async () => {
    const error = new Error('Network error');
    const fakeData = { '2024_ljeto': { qs: [] } };
    const fetchFn = vi.fn()
      .mockRejectedValueOnce(error)
      .mockResolvedValueOnce(fakeData);

    const err = vi.fn();
    const cb  = vi.fn();

    // First attempt — fails
    loader.load('osnovna', fetchFn, vi.fn(), err);
    await vi.waitFor(() => expect(err).toHaveBeenCalled());
    expect(loader._loading.osnovna).toBe(false);

    // Retry — should start a new fetch
    loader.load('osnovna', fetchFn, cb, vi.fn());
    await vi.waitFor(() => expect(cb).toHaveBeenCalledWith(fakeData));
    expect(fetchFn).toHaveBeenCalledTimes(2);
  });

  // ── Second cache hit after load ────────────────────────────────────────────
  it('serves subsequent requests from cache without fetching again', async () => {
    const fakeData = { '2024_ljeto': { qs: [] } };
    const fetchFn = vi.fn().mockResolvedValue(fakeData);
    const cb1 = vi.fn();
    const cb2 = vi.fn();

    loader.load('osnovna', fetchFn, cb1, undefined);
    await vi.waitFor(() => expect(cb1).toHaveBeenCalled());

    // Second call — should hit cache, not fetch
    loader.load('osnovna', fetchFn, cb2, undefined);
    expect(cb2).toHaveBeenCalledWith(fakeData); // synchronous
    expect(fetchFn).toHaveBeenCalledTimes(1);   // no second fetch
  });

  // ── Multiple razine are independent ───────────────────────────────────────
  it('loads osnovna and visa independently without interference', async () => {
    const osnoData = { osnovna_exam: { qs: [] } };
    const visaData = { visa_exam: { qs: [] } };
    const fetchFn = vi.fn(razina =>
      Promise.resolve(razina === 'osnovna' ? osnoData : visaData)
    );
    const cbO = vi.fn();
    const cbV = vi.fn();

    loader.load('osnovna', fetchFn, cbO, undefined);
    loader.load('visa',    fetchFn, cbV, undefined);

    await vi.waitFor(() => {
      expect(cbO).toHaveBeenCalledWith(osnoData);
      expect(cbV).toHaveBeenCalledWith(visaData);
    });
    expect(fetchFn).toHaveBeenCalledTimes(2);
  });
});
