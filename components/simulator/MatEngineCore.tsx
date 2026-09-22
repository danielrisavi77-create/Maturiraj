// @ts-nocheck
'use client';
/* AUTO-GENERATED engine core from mat-simulator monolith (AST-extracted).
   SVG (628) + exam data (70) + Q_IMAGES externalized. Exposes Sim + ErrorBoundary + __setQImages. */
/* 5.3: monolit je razbijen u components/simulator/mat/* (core, viz, tools, screens, sim, app).
   Ovdje je ostao samo javni API (Sim, ErrorBoundary, App, __set..., load..., examQCount,
   isExamLocked) da MatEngine.tsx, MatFullSimulator.jsx i build-engine.mjs ne trebaju promjenu. */
import { __MAT } from './mat/core/state';
export { __setSubject } from './mat/core/state';
export { __onExamsChanged, __setExamLoader, __setExamCatalog, __addExams, isExamLoaded, isExamLocked, allExamsLoaded, examQCount, loadExam, loadExams, loadAllExams, __setExams,
  isExamOnlyLoaded, examOnlyQs, examOnlyExam, __setSummary, getSummary, hasSummary, summaryQuestions } from './mat/core/exams';
export { Sim } from './mat/sim/sim';
export { App } from './mat/app/app';
export { ErrorBoundary } from './mat/app/error-boundary';
"use strict";
export function __setQImages(q) { __MAT.Q_IMAGES = q || {}; }
