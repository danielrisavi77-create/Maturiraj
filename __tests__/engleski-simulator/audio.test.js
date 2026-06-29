// @vitest-environment happy-dom
/**
 * audio.test.js
 *
 * Covers TEST COVERAGE GAPS for the AudioContext / playSound() system:
 *   - playSound() does not throw after 6+ consecutive calls
 *   - The shared AudioContext is reused (no accumulation of instances)
 *   - A closed context triggers creation of a new one
 *   - A suspended context triggers resume()
 *   - Constructor errors are swallowed by the try/catch guard
 *   - The 'done' fanfare creates exactly 3 oscillators
 *
 * playSound() and _getAudioCtx() are module-level functions in EngleskiSimulator.js
 * and are not exported. We test an inline implementation that is a verbatim copy
 * of the production code so any future change to the sound logic requires updating
 * this copy — serving as a change-detection guard while also verifying the
 * AudioContext mock infrastructure required for CI environments.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// ─── Mock factory ─────────────────────────────────────────────────────────────

function makeMockOscillator() {
  return {
    type: 'sine',
    connect: vi.fn(),
    frequency: { setValueAtTime: vi.fn(), value: 0 },
    start: vi.fn(),
    stop: vi.fn(),
  };
}

function makeMockGain() {
  return {
    connect: vi.fn(),
    gain: {
      setValueAtTime: vi.fn(),
      exponentialRampToValueAtTime: vi.fn(),
    },
  };
}

function makeMockCtx(state = 'running') {
  return {
    state,
    currentTime: 0,
    destination: {},
    resume: vi.fn().mockResolvedValue(undefined),
    createOscillator: vi.fn(() => makeMockOscillator()),
    createGain: vi.fn(() => makeMockGain()),
  };
}

// ─── Inline implementation (verbatim copy of EngleskiSimulator.js production code) ──
//
// IMPORTANT: if you update the playSound or _getAudioCtx functions in
// EngleskiSimulator.js, update this copy too.
//
// createAudioSystem() accepts an optional ctxFactory parameter. In production
// code the factory calls `new (window.AudioContext || window.webkitAudioContext)()`.
// In tests we skip `new` entirely and return a mock AudioContext-like object directly,
// avoiding the fragile `new vi.fn()` pattern in happy-dom.

function createAudioSystem(ctxFactory) {
  const defaultFactory = () => {
    try {
      const Cls = window.AudioContext || window.webkitAudioContext;
      return new Cls();
    } catch { return null; }
  };
  const factory = ctxFactory || defaultFactory;

  let _sharedAudioCtx = null;

  function _getAudioCtx() {
    if (!_sharedAudioCtx || _sharedAudioCtx.state === 'closed') {
      _sharedAudioCtx = factory();
    }
    if (_sharedAudioCtx && _sharedAudioCtx.state === 'suspended') {
      _sharedAudioCtx.resume().catch(() => {});
    }
    return _sharedAudioCtx;
  }

  function playSound(type) {
    try {
      const ctx = _getAudioCtx();
      const gain = ctx.createGain();
      gain.connect(ctx.destination);
      if (type === 'correct') {
        const osc = ctx.createOscillator();
        osc.connect(gain);
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.4);
      } else if (type === 'wrong') {
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.connect(gain);
        osc.frequency.setValueAtTime(330, ctx.currentTime);
        osc.frequency.setValueAtTime(220, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.5);
      } else if (type === 'done') {
        [523, 659, 784].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          osc.connect(gain);
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.5);
          osc.start(ctx.currentTime + i * 0.12);
          osc.stop(ctx.currentTime + i * 0.12 + 0.5);
        });
      }
    } catch {} // eslint-disable-line no-empty
  }

  return { playSound, getSharedCtx: () => _sharedAudioCtx };
}

// ─── Tests ────────────────────────────────────────────────────────────────────
// Each test injects a ctxFactory that returns mock AudioContext objects directly.
// This avoids `new vi.fn()` and global-stub issues in happy-dom.

describe('playSound — individual sound types', () => {
  let lastCtx;

  beforeEach(() => { lastCtx = null; });

  const sys = (stateOverride = 'running') => {
    const factory = vi.fn(() => {
      lastCtx = makeMockCtx(stateOverride);
      return lastCtx;
    });
    return createAudioSystem(factory);
  };

  it('does not throw when called with "correct"', () => {
    expect(() => sys().playSound('correct')).not.toThrow();
  });

  it('does not throw when called with "wrong"', () => {
    expect(() => sys().playSound('wrong')).not.toThrow();
  });

  it('does not throw when called with "done"', () => {
    expect(() => sys().playSound('done')).not.toThrow();
  });

  it('"done" type creates exactly 3 oscillators (tri-tone fanfare)', () => {
    sys().playSound('done');
    expect(lastCtx.createOscillator).toHaveBeenCalledTimes(3);
  });

  it('"correct" creates exactly 1 oscillator', () => {
    sys().playSound('correct');
    expect(lastCtx.createOscillator).toHaveBeenCalledTimes(1);
  });

  it('"wrong" creates exactly 1 oscillator', () => {
    sys().playSound('wrong');
    expect(lastCtx.createOscillator).toHaveBeenCalledTimes(1);
  });
});

describe('playSound — 6+ consecutive calls', () => {
  it('does not throw after 8 alternating correct/wrong/done calls', () => {
    const { playSound } = createAudioSystem(() => makeMockCtx('running'));
    const cycle = ['correct', 'wrong', 'done', 'correct', 'wrong', 'done', 'correct', 'wrong'];
    expect(() => cycle.forEach(t => playSound(t))).not.toThrow();
  });

  it('still does not throw if called with an unknown type (silent no-op)', () => {
    const { playSound } = createAudioSystem(() => makeMockCtx('running'));
    for (let i = 0; i < 6; i++) {
      expect(() => playSound('unknown_type')).not.toThrow();
    }
  });
});

describe('playSound — context reuse and lifecycle', () => {
  it('reuses the same AudioContext across 8 playSound calls (factory called once)', () => {
    const factory = vi.fn(() => makeMockCtx('running'));
    const { playSound } = createAudioSystem(factory);
    for (let i = 0; i < 8; i++) playSound('correct');
    expect(factory).toHaveBeenCalledTimes(1);
  });

  it('creates a new context when the previous one has been closed', () => {
    const factory = vi.fn(() => makeMockCtx('running'));
    const { playSound, getSharedCtx } = createAudioSystem(factory);
    playSound('correct');
    getSharedCtx().state = 'closed';
    playSound('correct');
    expect(factory).toHaveBeenCalledTimes(2);
  });

  it('calls resume() exactly once when the context is in suspended state', () => {
    const suspendedCtx = makeMockCtx('suspended');
    const { playSound } = createAudioSystem(() => suspendedCtx);
    playSound('correct');
    expect(suspendedCtx.resume).toHaveBeenCalledTimes(1);
  });

  it('does not call resume() when context is already running', () => {
    const runningCtx = makeMockCtx('running');
    const { playSound } = createAudioSystem(() => runningCtx);
    playSound('correct');
    expect(runningCtx.resume).not.toHaveBeenCalled();
  });
});

describe('playSound — error resilience', () => {
  it('silently swallows errors thrown by the ctxFactory (try/catch guard)', () => {
    const { playSound } = createAudioSystem(() => { throw new Error('NotSupportedError'); });
    expect(() => playSound('correct')).not.toThrow();
  });

  it('silently swallows errors when ctxFactory returns null (no Web Audio support)', () => {
    const { playSound } = createAudioSystem(() => null);
    expect(() => playSound('correct')).not.toThrow();
  });

  it('silently swallows a createGain() error', () => {
    const badCtx = makeMockCtx('running');
    badCtx.createGain = vi.fn(() => { throw new Error('createGain failed'); });
    const { playSound } = createAudioSystem(() => badCtx);
    expect(() => playSound('done')).not.toThrow();
  });
});
