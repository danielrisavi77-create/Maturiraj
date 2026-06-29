"use client";
import { useState, useRef, useEffect } from "react";
import { timerTick, formatTimer, timerCls } from "./scoring";

/**
 * Countdown timer hook for the Engleski Simulator.
 *
 * @param {number}   tot      - Total seconds to count down from
 * @param {boolean}  run      - Whether the timer is running
 * @param {Function} onExpire - Called once when the timer reaches 0
 * @param {number[]} warnAt   - Thresholds (seconds) at which onWarn fires, e.g. [600, 300]
 * @param {Function} onWarn   - Called with the threshold value when a warnAt is reached
 * @returns {{ s: number, d: string, cls: string }}
 */
export function useTimer(tot, run, onExpire, warnAt = [], onWarn) {
  const [s, setS] = useState(tot);
  const expired = useRef(false);
  const warned = useRef(new Set());
  const onExpireRef = useRef(onExpire);
  const onWarnRef = useRef(onWarn);
  // Keep refs current on every render so the interval always calls the latest version
  onExpireRef.current = onExpire;
  onWarnRef.current = onWarn;
  useEffect(() => {
    if (!run) return;
    const id = setInterval(() => setS(x => {
      const result = timerTick(x, expired.current, warned.current, warnAt);
      expired.current = result.expired;
      warned.current = result.warned;
      if (result.didExpire && onExpireRef.current) onExpireRef.current();
      if (result.didWarn !== null && onWarnRef.current) onWarnRef.current(result.didWarn);
      return result.s;
    }), 1000);
    return () => clearInterval(id);
  }, [run]); // eslint-disable-line react-hooks/exhaustive-deps
  return { s, d: formatTimer(s), cls: timerCls(s) };
}
