/**
 * Testable factory for the exam lazy-loader strategy.
 *
 * The production loader in EngleskiSimulator.js uses module-level singletons
 * with the same algorithm. This factory version injects the fetch function,
 * enabling isolated unit tests without networking or module state leakage.
 *
 * @param {function} defaultFetchFn  Optional default fetch — can be overridden per call
 * @returns {{ load, _cache, _loading }}
 */
export function createExamLoader() {
  const cache = {};
  const loading = {};
  const pendingCbs = {};
  const pendingErrCbs = {};

  /**
   * Load exam data for a razina, deduplicating concurrent requests.
   *
   * @param {string}   razina    - 'osnovna' | 'visa'
   * @param {function} fetchFn   - (razina) => Promise<data>
   * @param {function} onSuccess - called with data when loaded
   * @param {function} [onErr]   - called with error on failure
   */
  function load(razina, fetchFn, onSuccess, onErr) {
    // Cache hit — synchronous callback, no network needed
    if (cache[razina]) {
      onSuccess(cache[razina]);
      return;
    }

    // Queue callbacks
    if (!pendingCbs[razina]) pendingCbs[razina] = [];
    if (!pendingErrCbs[razina]) pendingErrCbs[razina] = [];
    pendingCbs[razina].push(onSuccess);
    if (onErr) pendingErrCbs[razina].push(onErr);

    // Already loading — just queue, don't start a second fetch
    if (loading[razina]) return;
    loading[razina] = true;

    fetchFn(razina)
      .then(data => {
        cache[razina] = data;
        loading[razina] = false;
        const cbs = pendingCbs[razina] || [];
        pendingCbs[razina] = [];
        pendingErrCbs[razina] = [];
        cbs.forEach(fn => fn(data));
      })
      .catch(err => {
        // Reset loading so a retry call will start a new fetch
        loading[razina] = false;
        const errCbs = pendingErrCbs[razina] || [];
        pendingErrCbs[razina] = [];
        pendingCbs[razina] = [];
        errCbs.forEach(fn => fn(err));
      });
  }

  return {
    load,
    /** Exposed for test inspection only — do not mutate in production code */
    _cache: cache,
    _loading: loading,
  };
}
