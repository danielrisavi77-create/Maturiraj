// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Tanki omotaci oko lib/mat-grading.ts (nerdamer po potrebi) koje dijele engine i mat/tools. */
import { isAnswerCorrect } from "@/lib/mat-grading";
export function __nd(){ try{ return (typeof window!=="undefined" && window.nerdamer) || null; }catch(e){ return null; } }
export function hasAns(a){if(a===undefined||a===null||a==="")return false;if(Array.isArray(a))return a.length>0;return true}
// Vraca true | false | null (null = ne moze se automatski ocijeniti, npr. proof).
export function chk(q,a){ return isAnswerCorrect(q,a,{nerdamer:__nd()}); }
