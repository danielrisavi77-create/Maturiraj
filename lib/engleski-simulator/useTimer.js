"use client";
import { useState, useRef, useEffect } from "react";
import { timerTick, formatTimer, timerCls } from "./scoring";

/**
 * Hrvatski oblik riječi "minuta" za dani broj: 2-4 (osim 12-14) → "minute",
 * sve ostalo → "minuta".
 *
 * @param {number} n
 * @returns {string}
 */
export function minuteWord(n) {
  const last2 = Math.abs(n) % 100;
  const last = Math.abs(n) % 10;
  if (last >= 2 && last <= 4 && !(last2 >= 12 && last2 <= 14)) return "minute";
  return "minuta";
}

/**
 * Poruka upozorenja za dani prag preostalih sekundi (npr. 600 → "Još 10 minuta").
 * Čista funkcija — nema poznat prag, vraća null.
 *
 * @param {number} seconds - Prag u sekundama (npr. 600, 300)
 * @returns {string|null}
 */
export function warnMessage(seconds) {
  const mins = Math.round(seconds / 60);
  return mins > 0 ? `Još ${mins} ${minuteWord(mins)}` : null;
}

/**
 * Countdown timer hook for the Engleski Simulator.
 *
 * RESETIRANJE: 'tot' se čita samo pri prvom renderu (useState(tot)) — promjena
 * propa NE restartira odbrojavanje. Kad treba novi timer (npr. nova ispitna
 * cjelina u simulaciji), pozivatelj mora remountati komponentu koja zove hook
 * preko keya, npr. <BlockTimer key={blockIdx} ... /> u EngleskiSimulator.js.
 * Taj je put odabran namjerno: reset kroz setState u efektu ruši React Compiler
 * pravila, a remount daje čist state (s, expired, warned) bez dodatnih efekata.
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
  const sRef = useRef(tot);
  const expired = useRef(false);
  const warned = useRef(new Set());
  const onExpireRef = useRef(onExpire);
  const onWarnRef = useRef(onWarn);
  // Refove držimo ažurnima nakon svakog rendera (u efektu, ne tijekom rendera) da interval uvijek zove najnoviju verziju
  useEffect(() => {
    onExpireRef.current = onExpire;
    onWarnRef.current = onWarn;
  });
  useEffect(() => {
    if (!run) return;
    const id = setInterval(() => {
      // Tick se računa preko sRef, ne kroz setS(x => ...) — setS se zove samo s
      // gotovom vrijednošću, pa React nikad nema razlog pozvati onExpire/onWarn
      // dok je neka druga komponenta usred rendera.
      const result = timerTick(sRef.current, expired.current, warned.current, warnAt);
      sRef.current = result.s;
      expired.current = result.expired;
      warned.current = result.warned;
      setS(result.s);
      if (result.didExpire && onExpireRef.current) onExpireRef.current();
      if (result.didWarn !== null && onWarnRef.current) onWarnRef.current(result.didWarn);
    }, 1000);
    return () => clearInterval(id);
  }, [run]); // eslint-disable-line react-hooks/exhaustive-deps
  return { s, d: formatTimer(s), cls: timerCls(s) };
}
