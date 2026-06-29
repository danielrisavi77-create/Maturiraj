import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  trackEvent,
  setAdapter,
  trackExamStarted,
  trackExamCompleted,
  trackAiHelpRequested,
  trackTimerExpired,
  trackDarkModeToggle,
  trackSessionResumed,
  trackPracticeErrorReviewed,
} from '../../lib/engleski-simulator/analytics.js';

// Reset the module-level adapter between tests
beforeEach(() => setAdapter(null));

describe('trackEvent', () => {
  it('calls adapter with name and payload', () => {
    const spy = vi.fn();
    setAdapter(spy);
    trackEvent('test_event', { foo: 'bar' });
    expect(spy).toHaveBeenCalledOnce();
    const [name, props] = spy.mock.calls[0];
    expect(name).toBe('test_event');
    expect(props.foo).toBe('bar');
    expect(typeof props._ts).toBe('number');
  });

  it('merges _ts into payload', () => {
    const spy = vi.fn();
    setAdapter(spy);
    const before = Date.now();
    trackEvent('ts_test');
    const after = Date.now();
    const ts = spy.mock.calls[0][1]._ts;
    expect(ts).toBeGreaterThanOrEqual(before);
    expect(ts).toBeLessThanOrEqual(after);
  });

  it('does not mutate the original props object', () => {
    const spy = vi.fn();
    setAdapter(spy);
    const original = { a: 1 };
    trackEvent('evt', original);
    expect(original).not.toHaveProperty('_ts');
  });

  it('is a no-op for empty name', () => {
    const spy = vi.fn();
    setAdapter(spy);
    trackEvent('');
    expect(spy).not.toHaveBeenCalled();
  });

  it('is a no-op for non-string name', () => {
    const spy = vi.fn();
    setAdapter(spy);
    trackEvent(null);
    trackEvent(42);
    expect(spy).not.toHaveBeenCalled();
  });

  it('never throws when adapter throws', () => {
    setAdapter(() => { throw new Error('adapter crash'); });
    expect(() => trackEvent('safe_event')).not.toThrow();
  });

  it('works without adapter (no-op, no throw)', () => {
    // adapter is null, NODE_ENV='test' (not 'production') — just console.debug
    expect(() => trackEvent('no_adapter')).not.toThrow();
  });

  it('fires with empty props when props omitted', () => {
    const spy = vi.fn();
    setAdapter(spy);
    trackEvent('minimal');
    expect(spy).toHaveBeenCalled();
  });
});

describe('typed helpers', () => {
  let spy;
  beforeEach(() => { spy = vi.fn(); setAdapter(spy); });

  it('trackExamStarted fires "exam_started" with correct shape', () => {
    trackExamStarted({ examKey: 'e2024a', razina: 'visa', mode: 'simulacija' });
    expect(spy).toHaveBeenCalledOnce();
    const [name, props] = spy.mock.calls[0];
    expect(name).toBe('exam_started');
    expect(props.examKey).toBe('e2024a');
    expect(props.razina).toBe('visa');
    expect(props.mode).toBe('simulacija');
  });

  it('trackExamCompleted fires "exam_completed" with pct/grade/duration_s', () => {
    trackExamCompleted({ pct: 85, grade: 5, duration_s: 3600, examKey: 'e2024a', mode: 'simulacija' });
    const [name, props] = spy.mock.calls[0];
    expect(name).toBe('exam_completed');
    expect(props.pct).toBe(85);
    expect(props.grade).toBe(5);
    expect(props.duration_s).toBe(3600);
  });

  it('trackAiHelpRequested fires "ai_help_requested" with topic/question_type', () => {
    trackAiHelpRequested({ topic: 'past_simple', question_type: 'mc', examKey: 'e2023b' });
    const [name, props] = spy.mock.calls[0];
    expect(name).toBe('ai_help_requested');
    expect(props.topic).toBe('past_simple');
    expect(props.question_type).toBe('mc');
    expect(props.examKey).toBe('e2023b');
  });

  it('trackTimerExpired fires "timer_expired" with examKey and unanswered count', () => {
    trackTimerExpired({ examKey: 'e2024a', unanswered: 7 });
    const [name, props] = spy.mock.calls[0];
    expect(name).toBe('timer_expired');
    expect(props.examKey).toBe('e2024a');
    expect(props.unanswered).toBe(7);
  });

  it('trackTimerExpired unanswered=0 is valid', () => {
    trackTimerExpired({ examKey: 'e2024a', unanswered: 0 });
    const [, props] = spy.mock.calls[0];
    expect(props.unanswered).toBe(0);
  });

  it('trackDarkModeToggle fires "dark_mode_toggle" manual', () => {
    trackDarkModeToggle({ dark: true, source: 'manual' });
    const [name, props] = spy.mock.calls[0];
    expect(name).toBe('dark_mode_toggle');
    expect(props.dark).toBe(true);
    expect(props.source).toBe('manual');
  });

  it('trackDarkModeToggle fires with os_default source', () => {
    trackDarkModeToggle({ dark: false, source: 'os_default' });
    const [, props] = spy.mock.calls[0];
    expect(props.source).toBe('os_default');
  });

  it('trackSessionResumed fires "session_resumed" with examKey and remainingPct', () => {
    trackSessionResumed({ examKey: 'e2024a', remainingPct: 75 });
    const [name, props] = spy.mock.calls[0];
    expect(name).toBe('session_resumed');
    expect(props.examKey).toBe('e2024a');
    expect(props.remainingPct).toBe(75);
  });

  it('trackSessionResumed accepts remainingPct=0 (timer just expired)', () => {
    trackSessionResumed({ examKey: 'e2024a', remainingPct: 0 });
    const [, props] = spy.mock.calls[0];
    expect(props.remainingPct).toBe(0);
  });

  it('trackPracticeErrorReviewed fires "practice_error_reviewed" with all fields', () => {
    trackPracticeErrorReviewed({ questionType: 'mc', topic: 'past_simple', examKey: 'e2024a', wasCorrect: false });
    const [name, props] = spy.mock.calls[0];
    expect(name).toBe('practice_error_reviewed');
    expect(props.questionType).toBe('mc');
    expect(props.topic).toBe('past_simple');
    expect(props.examKey).toBe('e2024a');
    expect(props.wasCorrect).toBe(false);
  });

  it('trackPracticeErrorReviewed wasCorrect=true is valid', () => {
    trackPracticeErrorReviewed({ questionType: 'fb', topic: 'grammar', examKey: 'e2023b', wasCorrect: true });
    const [, props] = spy.mock.calls[0];
    expect(props.wasCorrect).toBe(true);
    expect(props.questionType).toBe('fb');
  });
});

describe('setAdapter', () => {
  it('replaces previous adapter', () => {
    const first = vi.fn();
    const second = vi.fn();
    setAdapter(first);
    trackEvent('a');
    setAdapter(second);
    trackEvent('b');
    expect(first).toHaveBeenCalledOnce();
    expect(second).toHaveBeenCalledOnce();
  });

  it('resetting to null stops calls', () => {
    const spy = vi.fn();
    setAdapter(spy);
    trackEvent('before');
    setAdapter(null);
    trackEvent('after');
    expect(spy).toHaveBeenCalledOnce();
  });
});
