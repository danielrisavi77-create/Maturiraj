// @ts-nocheck
'use client';
/* Platform entry. Route: const { qs, qImages } = await import('@/content/simulator/mat/exams/<key>.mjs');
   <MatEngine examKey={key} qs={qs} qImages={qImages} duration={durationSec} onDone={...} onExit={...} /> */
import React from 'react';
import { Sim, ErrorBoundary, __setQImages } from './MatEngineCore';

// The engine stylesheet is a full-screen, light-theme takeover that overrides
// global :root / html,body and shared classes (.nav,.btn). To keep it from leaking
// onto the rest of the app, load it ONLY while the engine is mounted: inject the
// <link> on mount, remove it on unmount. Served statically from /sim/mat-engine.css.
function useEngineStyles() {
  React.useLayoutEffect(() => {
    const ID = 'mat-engine-styles';
    if (typeof document === 'undefined' || document.getElementById(ID)) return;
    const link = document.createElement('link');
    link.id = ID;
    link.rel = 'stylesheet';
    link.href = '/sim/mat-engine.css';
    document.head.appendChild(link);
    return () => { document.getElementById(ID)?.remove(); };
  }, []);
}

export function MatEngine({ examKey, qs, qImages = {}, duration = 10800, onExit, onDone, userData }) {
  useEngineStyles();
  __setQImages(qImages);
  const e = React.createElement;
  const exam = { key: examKey, qs: (qs || []).filter((q) => !q._META), duration };
  return e(ErrorBoundary, null, e(Sim, {
    exam, examMode: true, practice: false,
    onExit: onExit || (() => {}), onDone: onDone || (() => {}), userData: userData || {},
    onPracticeErrors: () => {}, onPracticeSimilar: () => {}, onStats: () => {},
    onFilter: () => {}, onHome: () => {}, resume: null, onPatchResult: () => {},
  }));
}
export default MatEngine;
