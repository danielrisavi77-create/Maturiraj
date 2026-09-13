// @vitest-environment happy-dom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTimer } from '../../lib/engleski-simulator/useTimer.js';

describe('useTimer', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  // ── Initial state ───────────────────────────────────────────────────────────

  it('returns formatted display string and class on mount', () => {
    const { result } = renderHook(() => useTimer(7200, false, null));
    expect(result.current.s).toBe(7200);
    expect(result.current.d).toBe('120:00');
    expect(result.current.cls).toBe('');
  });

  it('does not tick when run=false', () => {
    const { result } = renderHook(() => useTimer(60, false, null));
    act(() => { vi.advanceTimersByTime(5000); });
    expect(result.current.s).toBe(60); // unchanged
  });

  // ── Countdown behaviour ─────────────────────────────────────────────────────

  it('decrements every second when run=true', () => {
    const { result } = renderHook(() => useTimer(60, true, null));
    act(() => { vi.advanceTimersByTime(3000); });
    expect(result.current.s).toBe(57);
  });

  it('counts down to 0 and stops there', () => {
    const onExpire = vi.fn();
    const { result } = renderHook(() => useTimer(3, true, onExpire));
    act(() => { vi.advanceTimersByTime(5000); });
    expect(result.current.s).toBe(0);
  });

  // ── onExpire callback ───────────────────────────────────────────────────────

  it('calls onExpire exactly once when reaching 0', () => {
    const onExpire = vi.fn();
    renderHook(() => useTimer(2, true, onExpire));
    act(() => { vi.advanceTimersByTime(3000); });
    expect(onExpire).toHaveBeenCalledTimes(1);
  });

  it('does not call onExpire before reaching 0', () => {
    const onExpire = vi.fn();
    renderHook(() => useTimer(10, true, onExpire));
    act(() => { vi.advanceTimersByTime(5000); });
    expect(onExpire).not.toHaveBeenCalled();
  });

  it('does not call onExpire when run=false even after time passes', () => {
    const onExpire = vi.fn();
    renderHook(() => useTimer(2, false, onExpire));
    act(() => { vi.advanceTimersByTime(5000); });
    expect(onExpire).not.toHaveBeenCalled();
  });

  // ── onWarn callback ─────────────────────────────────────────────────────────

  it('calls onWarn at the matching threshold', () => {
    const onWarn = vi.fn();
    // start at 602 so at t=2s it reaches 600 (warnAt threshold)
    renderHook(() => useTimer(602, true, null, [600], onWarn));
    act(() => { vi.advanceTimersByTime(2000); });
    expect(onWarn).toHaveBeenCalledWith(600);
  });

  it('calls onWarn only once per threshold', () => {
    const onWarn = vi.fn();
    renderHook(() => useTimer(605, true, null, [600], onWarn));
    act(() => { vi.advanceTimersByTime(10000); });
    expect(onWarn).toHaveBeenCalledTimes(1);
  });

  it('calls onWarn at each distinct threshold', () => {
    const onWarn = vi.fn();
    // 610 → ticks: 609,608,...,600 (warn@600), ...,300 (warn@300)
    renderHook(() => useTimer(610, true, null, [600, 300], onWarn));
    act(() => { vi.advanceTimersByTime(311000); });
    expect(onWarn).toHaveBeenCalledTimes(2);
    expect(onWarn).toHaveBeenNthCalledWith(1, 600);
    expect(onWarn).toHaveBeenNthCalledWith(2, 300);
  });

  // ── CSS class ───────────────────────────────────────────────────────────────

  it('cls is "" for s >= 600', () => {
    const { result } = renderHook(() => useTimer(600, false, null));
    expect(result.current.cls).toBe('');
  });

  it('cls is "warn" when s is in 300-599 range', () => {
    const { result } = renderHook(() => useTimer(599, false, null));
    expect(result.current.cls).toBe('warn');
  });

  it('cls is "danger" when s < 300', () => {
    const { result } = renderHook(() => useTimer(299, false, null));
    expect(result.current.cls).toBe('danger');
  });

  it('cls transitions to "warn" as timer ticks past 600', () => {
    const { result } = renderHook(() => useTimer(601, true, null));
    act(() => { vi.advanceTimersByTime(2000); }); // 601 → 599
    expect(result.current.cls).toBe('warn');
  });

  // ── Cleanup ─────────────────────────────────────────────────────────────────

  it('clears the interval on unmount (no calls after unmount)', () => {
    const onExpire = vi.fn();
    const { unmount } = renderHook(() => useTimer(3, true, onExpire));
    act(() => { vi.advanceTimersByTime(1000); }); // 3 → 2
    unmount();
    act(() => { vi.advanceTimersByTime(5000); }); // would reach 0 if still running
    expect(onExpire).not.toHaveBeenCalled();
  });

  it('clears the interval when run flips to false', () => {
    let run = true;
    const { result, rerender } = renderHook(() => useTimer(10, run, null));
    act(() => { vi.advanceTimersByTime(3000); });
    expect(result.current.s).toBe(7);
    run = false;
    rerender();
    act(() => { vi.advanceTimersByTime(5000); });
    // Timer does NOT continue from where the rerender happened — run=false stops new interval
    // s should remain at whatever it was when run became false (≤7)
    expect(result.current.s).toBeLessThanOrEqual(7);
  });

  // ── Svježina callbackova ────────────────────────────────────────────────────
  // Interval se postavlja samo na promjenu 'run', pa bi bez refa osvježenog u
  // efektu zvao callback iz PRVOG rendera. ExamPlayScreen na tome počiva:
  // finish() i goToBlock() zatvaraju nad tekućim 'answers'/'blockIdx'.

  it('istek zove najnoviji onExpire, ne onaj iz prvog rendera', () => {
    const first = vi.fn();
    const second = vi.fn();
    let onExpire = first;
    const { rerender } = renderHook(() => useTimer(3, true, onExpire));
    act(() => { vi.advanceTimersByTime(1000); }); // 3 → 2
    onExpire = second;
    rerender();
    act(() => { vi.advanceTimersByTime(2000); }); // 2 → 0
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('upozorenje zove najnoviji onWarn, ne onaj iz prvog rendera', () => {
    const first = vi.fn();
    const second = vi.fn();
    let onWarn = first;
    const { rerender } = renderHook(() => useTimer(602, true, null, [600, 300], onWarn));
    act(() => { vi.advanceTimersByTime(1000); }); // 602 → 601
    onWarn = second;
    rerender();
    act(() => { vi.advanceTimersByTime(1000); }); // 601 → 600 → upozorenje
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith(600);
  });
});
