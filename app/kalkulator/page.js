'use client';

/* ══ OG METADATA SETUP ══════════════════════════════════════════════════════
   Za dinamički OG preview dodaj u app/kalkulator/layout.tsx ili page.tsx:

   export async function generateMetadata({ searchParams }) {
     const bodovi = calcApprox(searchParams);
     return {
       title: \`${bodovi} bodova — maturiraj.hr\`,
       description: "Izračunaj bodove za upis na fakultet u Hrvatskoj",
       openGraph: {
         images: [{ url: \`/kalkulator/opengraph-image?${new URLSearchParams(searchParams)}\` }],
       },
       twitter: { card: "summary_large_image" },
     };
   }

   OG image je u: app/kalkulator/opengraph-image.tsx
   Automatski se čita od Next.js — nema potrebe za dodatnom konfiguracijom.
═══════════════════════════════════════════════════════════════════════════ */

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/hooks/useAuth";
import { usePageTracking } from "@/lib/hooks/usePageTracking";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from "recharts";
import {
  STUDIJI_2025, calcTotal, getChance, chanceLabel, POLJA, GRADOVI, PRAG_2023, getPercentil, percentilLabel,
} from "@/lib/kalkulatorData";
import KartaHrvatske from "./KartaHrvatske";

/* ─── Povijesni pragovi (2021-2025) ─────────────────────────────────────── */
const POVIJEST = {
  "Medicina_Zagreb":                          { 2021:958.1, 2022:961.0, 2023:962.4, 2024:960.0, 2025:962.0 },
  "Farmacija_Zagreb":                         { 2021:820.0, 2022:840.0, 2023:878.5, 2024:750.0, 2025:673.8 },
  "Logopedija_Zagreb":                        { 2021:820.0, 2022:845.0, 2023:870.8, 2024:840.0, 2025:831.3 },
  "Rehabilitacija_Zagreb":                    { 2021:760.0, 2022:790.0, 2023:811.1, 2024:785.0, 2025:779.0 },
  "Socijalna pedagogija_Zagreb":              { 2021:720.0, 2022:750.0, 2023:781.9, 2024:760.0, 2025:761.4 },
  "Dentalna medicina_Rijeka":                 { 2021:580.0, 2022:610.0, 2023:627.2, 2024:640.0, 2025:651.5 },
  "Elektrotehnika i IT i Računarstvo_Zagreb": { 2021:720.0, 2022:740.0, 2023:775.3, 2024:758.0, 2025:739.2 },
  "Mehatronika i robotika_Zagreb":            { 2021:630.0, 2022:655.0, 2023:680.0, 2024:690.0, 2025:686.1 },
  "Strojarstvo_Zagreb":                       { 2021:460.0, 2022:475.0, 2023:490.0, 2024:508.0, 2025:518.1 },
  "Brodogradnja_Zagreb":                      { 2021:430.0, 2022:445.0, 2023:462.0, 2024:430.0, 2025:423.2 },
  "Arhitektura i urbanizam_Zagreb":           { 2021:640.0, 2022:660.0, 2023:675.8, 2024:658.0, 2025:642.7 },
  "Dizajn_Zagreb":                            { 2021:650.0, 2022:670.0, 2023:692.4, 2024:688.0, 2025:684.1 },
  "Građevinarstvo_Zagreb":                    { 2021:500.0, 2022:515.0, 2023:535.0, 2024:525.0, 2025:520.0 },
  "Matematika_Zagreb":                        { 2021:780.0, 2022:795.0, 2023:812.0, 2024:805.0, 2025:800.0 },
  "Fizika_Zagreb":                            { 2021:710.0, 2022:725.0, 2023:748.0, 2024:742.0, 2025:740.0 },
  "Biologija_Zagreb":                         { 2021:680.0, 2022:695.0, 2023:710.0, 2024:708.0, 2025:705.0 },
  "Kemija_Zagreb":                            { 2021:640.0, 2022:658.0, 2023:680.0, 2024:668.0, 2025:660.0 },
  "Molekularna biologija_Zagreb":             { 2021:720.0, 2022:738.0, 2023:756.0, 2024:748.0, 2025:745.0 },
  "Poslovna ekonomija_Zagreb":                { 2021:480.0, 2022:492.0, 2023:508.8, 2024:495.0, 2025:485.7 },
  "Ekonomija_Zagreb":                         { 2021:450.0, 2022:462.0, 2023:472.4, 2024:468.0, 2025:465.7 },
  "Pravo_Zagreb":                             { 2021:600.0, 2022:615.0, 2023:630.0, 2024:628.0, 2025:625.0 },
  "Socijalni rad_Zagreb":                     { 2021:690.0, 2022:705.0, 2023:720.0, 2024:718.0, 2025:715.0 },
  "Politologija_Zagreb":                      { 2021:660.0, 2022:675.0, 2023:694.0, 2024:620.0, 2025:615.9 },
  "Novinarstvo_Zagreb":                       { 2021:710.0, 2022:725.0, 2023:742.0, 2024:630.0, 2025:623.3 },
  "Psihologija_Zagreb":                       { 2021:790.0, 2022:805.0, 2023:820.0, 2024:718.0, 2025:715.4 },
  "Kineziologija (Izobrazba trenera)_Zagreb": { 2021:880.0, 2022:895.0, 2023:910.0, 2024:906.0, 2025:905.0 },
  "Veterinarska medicina_Zagreb":             { 2021:750.0, 2022:765.0, 2023:780.0, 2024:780.0, 2025:780.0 },
  "Promet_Zagreb":                            { 2021:450.0, 2022:462.0, 2023:480.0, 2024:422.0, 2025:420.0 },
  "Aeronautika_Zagreb":                       { 2021:510.0, 2022:525.0, 2023:545.0, 2024:582.0, 2025:580.0 },
  "Informatika_Varaždin":                     { 2021:450.0, 2022:462.0, 2023:477.5, 2024:478.0, 2025:477.5 },
};

const YEARS = [2021, 2022, 2023, 2024, 2025];

/* ─── CSS ───────────────────────────────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
/* ── Dark mode (default) ── */
:root,[data-theme="dark"]{
  --bg:#07090f;--s1:#0e1220;--s2:#141828;--s3:#1a1f30;
  --blue:#4b7bff;--violet:#7c5cfc;--gold:#e9b446;--teal:#2dcfbe;
  --green:#3ecf6e;--red:#f05c5c;--pink:#f472b6;
  --txt:#e8ecf8;--muted:#7b82a0;--border:#1e2440;
}
/* ── Light mode ── */
[data-theme="light"]{
  --bg:#f4f6fb;--s1:#ffffff;--s2:#f0f2f8;--s3:#e8ecf5;
  --blue:#3b6ef0;--violet:#6c4de0;--gold:#c99a10;--teal:#1ab5a6;
  --green:#1fa851;--red:#d94040;--pink:#d4538c;
  --txt:#0f1324;--muted:#6b7494;--border:#dde2f0;
}
body{background:var(--bg);color:var(--txt);font-family:'DM Sans',sans-serif;min-height:100vh;transition:background .25s,color .25s}

/* Theme toggle gumb */
.theme-toggle{position:fixed;bottom:84px;left:20px;z-index:200;width:44px;height:44px;border-radius:50%;border:1px solid var(--border);background:var(--s1);color:var(--txt);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 12px rgba(0,0,0,.15)}
.theme-toggle:hover{border-color:var(--blue);transform:scale(1.08)}
@media(max-width:600px){.theme-toggle{bottom:90px;left:14px;width:40px;height:40px;font-size:16px}}
.kalk-wrap{max-width:1080px;margin:0 auto;padding:90px 24px 80px}

.back-btn{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border-radius:10px;border:1px solid var(--border);background:var(--s1);color:var(--muted);font-size:13px;font-weight:600;cursor:pointer;transition:all .2s;font-family:'DM Sans',sans-serif;margin-bottom:32px}
.back-btn:hover{border-color:var(--blue);color:var(--txt);background:var(--s2)}
.back-btn .arrow{font-size:16px;transition:transform .2s}
.back-btn:hover .arrow{transform:translateX(-3px)}

.kalk-header{text-align:center;margin-bottom:48px}
.kalk-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--blue);margin-bottom:16px}
.kalk-eyebrow span{width:24px;height:1px;background:var(--blue);display:inline-block}
.kalk-title{font-family:'Fraunces',serif;font-size:clamp(32px,5vw,52px);font-weight:700;line-height:1.1;color:var(--txt);margin-bottom:12px}
.kalk-title em{font-style:italic;color:var(--gold)}
.kalk-sub{color:var(--muted);font-size:15px;max-width:540px;margin:0 auto;line-height:1.6}

.kalk-grid{display:grid;grid-template-columns:380px 1fr;gap:24px;align-items:start}
@media(max-width:760px){.kalk-grid{grid-template-columns:1fr}}

.kcard{background:var(--s1);border:1px solid var(--border);border-radius:18px;padding:28px}
.kcard-title{font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:20px}

.profil-card{background:linear-gradient(135deg,rgba(75,123,255,.08),rgba(124,92,252,.06));border:1px solid rgba(75,123,255,.2);border-radius:14px;padding:16px;margin-bottom:16px}
.profil-row{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.profil-avatar{width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,var(--blue),var(--violet));display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.profil-name-input{flex:1;background:transparent;border:none;border-bottom:1px solid var(--border);color:var(--txt);font-size:15px;font-weight:600;font-family:'DM Sans',sans-serif;padding:4px 0;outline:none}
.profil-name-input:focus{border-color:var(--blue)}
.profil-name-input::placeholder{color:var(--muted);font-weight:400}
.profil-meta{display:flex;gap:8px;flex-wrap:wrap}
.profil-badge{padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;background:rgba(75,123,255,.12);color:var(--blue);border:1px solid rgba(75,123,255,.2)}

.score-section{margin-bottom:20px}
.score-section-label{font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--border)}
.score-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04)}
.score-row:last-child{border-bottom:none}
.score-label{font-size:13px;color:var(--txt);flex:1}
.score-label small{display:block;font-size:11px;color:var(--muted);margin-top:1px}
.score-input-wrap{display:flex;align-items:center;gap:6px}
.score-input{width:70px;text-align:center;background:var(--s2);border:1px solid var(--border);border-radius:8px;padding:6px 8px;font-size:14px;font-weight:600;color:var(--txt);font-family:'DM Sans',sans-serif;transition:border-color .2s}
.score-input:focus{outline:none;border-color:var(--blue)}
.score-max{font-size:11px;color:var(--muted)}
.score-slider{width:80px;accent-color:var(--blue)}

.total-box{margin-top:20px;padding:16px;background:linear-gradient(135deg,rgba(75,123,255,.12),rgba(124,92,252,.08));border:1px solid rgba(75,123,255,.25);border-radius:12px;text-align:center}
.total-label{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted)}
.total-value{font-family:'Fraunces',serif;font-size:42px;font-weight:700;line-height:1;background:linear-gradient(135deg,var(--blue),var(--violet));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:4px 0}
.total-max{font-size:12px;color:var(--muted)}

.legenda{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:10px;padding:12px 16px;background:var(--s2);border-radius:10px;border:1px solid var(--border)}
.leg-item{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--muted)}
.leg-dot{width:10px;height:10px;border-radius:50%}
.leg-dot.high{background:var(--green)}
.leg-dot.mid{background:var(--gold)}
.leg-dot.low{background:var(--red)}
.leg-dot.none{background:var(--muted)}
.notice{padding:12px 16px;border-radius:10px;background:rgba(75,123,255,.08);border:1px solid rgba(75,123,255,.2);font-size:12px;color:var(--muted);line-height:1.6}
.notice strong{color:var(--blue)}
.prijemni-notice{padding:10px 14px;border-radius:10px;background:rgba(233,180,70,.08);border:1px solid rgba(233,180,70,.2);font-size:12px;color:var(--muted);line-height:1.6;margin-top:12px}
.prijemni-notice strong{color:var(--gold)}

.main-tabs{display:flex;gap:6px;margin-bottom:20px;flex-wrap:wrap}
.main-tab{flex:1;min-width:80px;padding:9px 10px;border-radius:10px;border:1px solid var(--border);background:transparent;color:var(--muted);font-size:12px;font-weight:600;cursor:pointer;transition:all .15s;font-family:'DM Sans',sans-serif;text-align:center}
.main-tab:hover{border-color:var(--blue);color:var(--txt)}
.main-tab.active{background:var(--s3);color:var(--txt);border-color:var(--blue)}

.tab-btn{padding:7px 10px;border-radius:8px;border:1px solid var(--border);background:transparent;color:var(--muted);font-size:11px;font-weight:600;cursor:pointer;transition:all .15s;font-family:'DM Sans',sans-serif}
.tab-btn.active{background:var(--s3);color:var(--txt);border-color:var(--blue)}
.tab-btn.fav-tab.active{border-color:var(--pink);background:rgba(244,114,182,.08)}

.search-input{width:100%;padding:10px 14px;background:var(--s2);border:1px solid var(--border);border-radius:10px;color:var(--txt);font-size:14px;font-family:'DM Sans',sans-serif;margin-bottom:12px}
.search-input:focus{outline:none;border-color:var(--blue)}
.search-input::placeholder{color:var(--muted)}
.filter-bar{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px}
.filter-select-wrap{position:relative}
.filter-select-label{font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:5px;display:block}
.filter-select{width:100%;padding:9px 32px 9px 12px;background:var(--s2);border:1px solid var(--border);border-radius:10px;color:var(--txt);font-size:13px;font-weight:500;font-family:'DM Sans',sans-serif;cursor:pointer;appearance:none;transition:border-color .2s;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237b82a0' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center}
.filter-select:focus{outline:none;border-color:var(--blue)}
.filter-select option{background:var(--s2);color:var(--txt)}
.filter-select.has-value{border-color:var(--blue)}
.active-filters{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}
.active-tag{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:600;background:rgba(75,123,255,.12);border:1px solid rgba(75,123,255,.25);color:var(--blue);cursor:pointer;transition:all .15s}
.active-tag:hover{background:rgba(240,92,92,.12);border-color:var(--red);color:var(--red)}
.filter-pill-fav{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600;border:1px solid var(--border);background:transparent;color:var(--muted);cursor:pointer;transition:all .15s;margin-bottom:12px}
.filter-pill-fav:hover{border-color:var(--pink);color:var(--pink)}
.filter-pill-fav.active{background:rgba(244,114,182,.12);border-color:var(--pink);color:var(--pink)}
.sort-row{display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap}
.sort-label{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}
.sort-btn{padding:4px 10px;border-radius:6px;border:1px solid var(--border);background:transparent;color:var(--muted);font-size:11px;font-weight:600;cursor:pointer;transition:all .15s;font-family:'DM Sans',sans-serif;text-transform:uppercase}
.sort-btn:hover,.sort-btn.active{background:var(--s3);color:var(--txt);border-color:var(--blue)}

.results-count{font-size:12px;color:var(--muted);margin-bottom:12px}
.results-count strong{color:var(--txt)}
.results-scroll{max-height:480px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--border) transparent}

.result-item{display:grid;grid-template-columns:1fr auto auto auto;align-items:center;gap:10px;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--s2);margin-bottom:6px;transition:border-color .2s,background .2s;cursor:pointer}
.result-item:hover{border-color:rgba(75,123,255,.3);background:var(--s3)}
.result-item.chance-high{border-left:3px solid var(--green)}
.result-item.chance-mid{border-left:3px solid var(--gold)}
.result-item.chance-low{border-left:3px solid var(--red)}
.result-item.chance-none{border-left:3px solid var(--muted);opacity:.6}
.result-item.is-fav{background:rgba(244,114,182,.04)}
.result-name{font-size:13px;font-weight:500;color:var(--txt)}
.result-fak{font-size:11px;color:var(--muted);margin-top:2px}
.trend-row{display:flex;align-items:center;gap:6px;margin-top:4px}
.trend-badge{display:inline-flex;align-items:center;gap:3px;padding:2px 7px;border-radius:6px;font-size:10px;font-weight:700;white-space:nowrap}
.trend-badge.up{background:rgba(240,92,92,.12);color:var(--red)}
.trend-badge.down{background:rgba(62,207,110,.12);color:var(--green)}
.trend-badge.flat{background:rgba(123,130,160,.1);color:var(--muted)}
.trend-badge.new{background:rgba(75,123,255,.12);color:var(--blue)}
.diff-bar-wrap{display:flex;align-items:center;gap:6px;margin-top:4px}
.diff-bar-bg{flex:1;height:3px;background:var(--border);border-radius:2px;overflow:hidden}
.diff-bar-fill{height:100%;border-radius:2px;transition:width .3s}
.diff-text{font-size:10px;white-space:nowrap;font-weight:600}
.result-prag{text-align:right;white-space:nowrap}
.result-prag-val{font-size:13px;font-weight:600;color:var(--txt)}
.result-prag-lbl{font-size:10px;color:var(--muted)}
.result-prag-2023{font-size:10px;color:var(--muted);margin-top:1px}
.chance-badge{padding:4px 10px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;white-space:nowrap}
.chance-badge.high{background:rgba(62,207,110,.15);color:var(--green)}
.chance-badge.mid{background:rgba(233,180,70,.15);color:var(--gold)}
.chance-badge.low{background:rgba(240,92,92,.15);color:var(--red)}
.chance-badge.none{background:rgba(123,130,160,.1);color:var(--muted)}
.fav-btn{background:transparent;border:none;cursor:pointer;font-size:18px;line-height:1;padding:2px 4px;transition:transform .15s;color:var(--muted)}
.fav-btn:hover{transform:scale(1.2)}
.fav-btn.active{color:var(--pink)}
.formula-badge{display:inline-block;padding:2px 7px;border-radius:6px;font-size:10px;font-weight:700;background:rgba(75,123,255,.12);color:var(--blue);margin-left:6px;vertical-align:middle}

.export-toolbar{display:flex;gap:8px;margin-bottom:14px;padding:12px 14px;background:rgba(244,114,182,.06);border:1px solid rgba(244,114,182,.2);border-radius:12px;align-items:center;flex-wrap:wrap}
.export-label{font-size:12px;color:var(--pink);font-weight:600;flex:1;min-width:100px}
.export-btn{display:flex;align-items:center;gap:6px;padding:7px 14px;border-radius:8px;border:1px solid var(--border);background:var(--s2);color:var(--txt);font-size:12px;font-weight:600;cursor:pointer;transition:all .15s;font-family:'DM Sans',sans-serif;white-space:nowrap}
.export-btn:hover{border-color:var(--pink);color:var(--pink)}
.export-btn.copied{border-color:var(--green);color:var(--green)}

.empty-state{text-align:center;padding:48px 24px;color:var(--muted)}
.empty-state .icon{font-size:32px;margin-bottom:12px}
.empty-state p{font-size:14px}
.fav-empty{text-align:center;padding:48px 24px;color:var(--muted)}
.fav-empty .icon{font-size:36px;margin-bottom:12px}
.fav-empty p{font-size:14px;line-height:1.6}
.fav-empty strong{color:var(--pink)}

/* Studij modal */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:1000;display:flex;align-items:center;justify-content:center;padding:24px;animation:fadeIn .2s ease}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.modal-box{background:var(--s1);border:1px solid var(--border);border-radius:20px;padding:28px;width:100%;max-width:700px;max-height:88vh;overflow-y:auto;animation:slideUp .25s ease}
@keyframes slideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
.modal-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px;gap:12px}
.modal-title{font-family:'Fraunces',serif;font-size:20px;font-weight:700;color:var(--txt);line-height:1.2}
.modal-fak{font-size:12px;color:var(--muted);margin-bottom:20px}
.modal-close{background:transparent;border:1px solid var(--border);border-radius:8px;color:var(--muted);font-size:18px;cursor:pointer;padding:4px 10px;transition:all .15s;flex-shrink:0}
.modal-close:hover{border-color:var(--red);color:var(--red)}

/* Termometar */
.termometar-wrap{margin-bottom:24px}
.termometar-title{font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
.termometar-bar{position:relative;height:32px;background:var(--s2);border:1px solid var(--border);border-radius:10px;overflow:visible;margin-bottom:8px}
.termometar-fill{height:100%;border-radius:10px;transition:width .6s ease}
.termometar-marker{position:absolute;top:-6px;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;z-index:2}
.termometar-marker-line{width:2px;height:44px;background:var(--txt);border-radius:1px}
.termometar-marker-label{font-size:10px;font-weight:700;color:var(--txt);white-space:nowrap;margin-top:2px;background:var(--s1);padding:2px 6px;border-radius:4px;border:1px solid var(--border)}
.termometar-labels{display:flex;justify-content:space-between;font-size:10px;color:var(--muted);margin-top:4px}
.termometar-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px}
.termometar-stat{text-align:center;padding:10px;background:var(--s2);border-radius:10px;border:1px solid var(--border)}
.termometar-stat-val{font-family:'Fraunces',serif;font-size:20px;font-weight:700;line-height:1}
.termometar-stat-lbl{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-top:3px}

.grafikon-title{font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
.grafikon-no-data{text-align:center;padding:32px;color:var(--muted);font-size:13px;background:var(--s2);border-radius:12px;border:1px solid var(--border)}

/* Vizualizacija */
.viz-section{margin-bottom:28px}
.viz-section-title{font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:14px;display:flex;align-items:center;gap:8px}
.viz-section-title::after{content:'';flex:1;height:1px;background:var(--border)}

.glob-term-item{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.04)}
.glob-term-item:last-child{border-bottom:none}
.glob-term-name{font-size:12px;color:var(--txt);width:180px;flex-shrink:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.glob-term-bar-wrap{flex:1;position:relative;height:18px;background:var(--s2);border-radius:6px;overflow:hidden;border:1px solid var(--border)}
.glob-term-bar{height:100%;border-radius:6px;transition:width .5s ease}
.glob-term-marker{position:absolute;top:0;bottom:0;width:2px;background:rgba(255,255,255,.4)}
.glob-term-diff{font-size:11px;font-weight:700;width:48px;text-align:right;flex-shrink:0}

/* Preporuke */
.preporuke-intro{padding:14px 16px;border-radius:12px;background:rgba(233,180,70,.06);border:1px solid rgba(233,180,70,.2);font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:20px}
.preporuke-intro strong{color:var(--gold)}
.preporuka-item{display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:12px;border:1px solid var(--border);background:var(--s2);margin-bottom:8px;transition:all .2s;cursor:pointer}
.preporuka-item:hover{border-color:rgba(233,180,70,.4);background:var(--s3)}
.preporuka-rank{font-family:'Fraunces',serif;font-size:24px;font-weight:700;line-height:1;min-width:32px;text-align:center}
.preporuka-rank.rank-1{color:var(--gold)}
.preporuka-rank.rank-2{color:var(--muted);filter:brightness(1.4)}
.preporuka-rank.rank-3{color:#cd7f32}
.preporuka-rank.rank-other{color:var(--muted);font-size:16px}
.preporuka-info{flex:1}
.preporuka-name{font-size:14px;font-weight:600;color:var(--txt);margin-bottom:3px}
.preporuka-fak{font-size:11px;color:var(--muted)}
.preporuka-meta{display:flex;align-items:center;gap:8px;margin-top:6px;flex-wrap:wrap}

/* AI plan */
.ai-plan-section{margin-top:24px;padding:20px;border-radius:14px;border:1px solid rgba(75,123,255,.2);background:rgba(75,123,255,.05)}
.ai-plan-header{display:flex;align-items:center;gap:10px;margin-bottom:16px}
.ai-plan-icon{font-size:24px}
.ai-plan-title{font-family:'Fraunces',serif;font-size:18px;font-weight:700;color:var(--txt)}
.ai-plan-sub{font-size:12px;color:var(--muted);margin-top:2px}
.ai-plan-btn{width:100%;padding:12px;border-radius:10px;background:linear-gradient(135deg,var(--blue),var(--violet));border:none;color:#fff;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;transition:opacity .2s;display:flex;align-items:center;justify-content:center;gap:8px}
.ai-plan-btn:hover{opacity:.88}
.ai-plan-btn:disabled{opacity:.5;cursor:not-allowed}
.ai-plan-output{margin-top:16px;padding:16px;border-radius:10px;background:var(--s2);border:1px solid var(--border);font-size:13px;line-height:1.8;color:var(--txt);white-space:pre-wrap}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
.typing{display:inline-block;width:8px;height:14px;background:var(--blue);border-radius:2px;animation:blink .8s infinite;vertical-align:middle;margin-left:2px}

/* Usporedba modal */
.compare-grid{display:grid;gap:16px}
.compare-grid.cols-2{grid-template-columns:1fr 1fr}
.compare-grid.cols-3{grid-template-columns:1fr 1fr 1fr}
@media(max-width:600px){.compare-grid.cols-2,.compare-grid.cols-3{grid-template-columns:1fr}}
.compare-col{background:var(--s2);border:1px solid var(--border);border-radius:14px;padding:18px}
.compare-col-title{font-size:14px;font-weight:700;color:var(--txt);margin-bottom:4px}
.compare-col-fak{font-size:11px;color:var(--muted);margin-bottom:16px}
.compare-row{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.04)}
.compare-row:last-child{border-bottom:none}
.compare-row-label{font-size:12px;color:var(--muted)}
.compare-row-val{font-size:13px;font-weight:600;color:var(--txt)}
.compare-winner{border-color:rgba(62,207,110,.3);background:rgba(62,207,110,.04)}
.compare-remove{background:transparent;border:none;color:var(--muted);cursor:pointer;font-size:14px;float:right}
.compare-remove:hover{color:var(--red)}
.compare-btn{background:transparent;border:1px solid var(--border);border-radius:6px;cursor:pointer;font-size:11px;padding:3px 8px;color:var(--muted);transition:all .15s;font-family:'DM Sans',sans-serif;white-space:nowrap}
.compare-btn:hover{border-color:var(--teal);color:var(--teal)}
.compare-btn.in-compare{border-color:var(--teal);color:var(--teal);background:rgba(45,207,190,.1)}

/* Simulacija */
.sim-intro{padding:14px 16px;border-radius:12px;background:rgba(45,207,190,.06);border:1px solid rgba(45,207,190,.2);font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:20px}
.sim-intro strong{color:var(--teal)}
.sim-slider-row{margin-bottom:16px}
.sim-slider-label{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
.sim-slider-name{font-size:13px;color:var(--txt);font-weight:500}
.sim-slider-vals{font-size:12px;color:var(--muted)}
.sim-slider-vals strong{color:var(--teal)}
.sim-range{width:100%;accent-color:var(--teal)}
.sim-result-box{margin-top:24px;padding:20px;border-radius:14px;border:1px solid var(--border);background:var(--s2)}
.sim-result-box.has-gain{border-color:rgba(62,207,110,.3);background:linear-gradient(135deg,rgba(62,207,110,.06),rgba(45,207,190,.04))}
.sim-scores-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:20px}
.sim-score-cell{text-align:center}
.sim-score-val{font-family:'Fraunces',serif;font-size:26px;font-weight:700;line-height:1}
.sim-score-lbl{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin-top:3px}
.sim-bar-section{margin-bottom:20px}
.sim-bar-label{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px}
.sim-compare-bar{position:relative;height:28px;border-radius:8px;background:var(--s3);overflow:hidden;border:1px solid var(--border)}
.sim-compare-bar-fill{position:absolute;left:0;top:0;height:100%;border-radius:8px;transition:width .4s ease;display:flex;align-items:center;padding-left:10px}
.sim-compare-bar-fill span{font-size:11px;font-weight:700;color:#fff;white-space:nowrap}
.sim-compare-bar-gain{position:absolute;top:0;height:100%;transition:left .4s ease,width .4s ease;display:flex;align-items:center;padding-left:8px}
.sim-compare-bar-gain span{font-size:11px;font-weight:700;color:#fff;white-space:nowrap}
.sim-unlock-section{border-top:1px solid var(--border);padding-top:14px}
.sim-unlock-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--green);margin-bottom:10px}
.sim-unlock-item{display:flex;align-items:center;justify-content:space-between;padding:8px 10px;border-radius:8px;background:rgba(62,207,110,.06);border:1px solid rgba(62,207,110,.15);margin-bottom:5px}
.sim-unlock-name{font-size:12px;font-weight:500;color:var(--txt)}
.sim-unlock-fak{font-size:10px;color:var(--muted);margin-top:1px}
.sim-unlock-badge{padding:3px 8px;border-radius:6px;font-size:10px;font-weight:700;white-space:nowrap}
.sim-empty{text-align:center;padding:20px;color:var(--muted);font-size:13px}
.sim-reset-btn{width:100%;margin-top:14px;padding:9px;border-radius:8px;border:1px solid var(--border);background:transparent;color:var(--muted);font-size:12px;cursor:pointer;transition:all .15s;font-family:'DM Sans',sans-serif}
.sim-reset-btn:hover{border-color:var(--red);color:var(--red)}


/* ══ PRIJEMNI KALKULATOR ══════════════════════════════════════════════════ */
@keyframes pr-slide-in{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.pr-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.82);z-index:1200;display:flex;align-items:flex-end;justify-content:center;animation:fadeIn .2s ease;backdrop-filter:blur(8px)}
@media(min-width:601px){.pr-modal-overlay{align-items:center}}
.pr-modal{background:var(--s1);border:1px solid var(--border);border-radius:20px 20px 0 0;width:100%;max-width:580px;max-height:92vh;overflow-y:auto;animation:pr-slide-in .28s cubic-bezier(.34,1.2,.64,1);-webkit-overflow-scrolling:touch}
@media(min-width:601px){.pr-modal{border-radius:20px;max-height:88vh}}
.pr-header{padding:20px 22px 0;display:flex;align-items:flex-start;justify-content:space-between;gap:12px;position:sticky;top:0;background:var(--s1);border-bottom:1px solid var(--border);padding-bottom:14px;z-index:2}
.pr-handle{width:36px;height:4px;background:var(--border);border-radius:2px;margin:0 auto 16px}
.pr-title{font-family:'Fraunces',serif;font-size:20px;font-weight:700;color:var(--txt);line-height:1.2}
.pr-subtitle{font-size:11px;color:var(--muted);margin-top:3px;line-height:1.5}
.pr-close{background:transparent;border:1px solid var(--border);border-radius:8px;color:var(--muted);font-size:18px;cursor:pointer;padding:4px 10px;line-height:1;flex-shrink:0}
.pr-close:hover{border-color:var(--red);color:var(--red)}
.pr-tabs{display:flex;gap:6px;padding:14px 22px 0;overflow-x:auto;scrollbar-width:none}
.pr-tabs::-webkit-scrollbar{display:none}
.pr-tab{flex-shrink:0;padding:9px 14px;border-radius:10px;border:1px solid var(--border);background:transparent;color:var(--muted);font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s;white-space:nowrap}
.pr-tab:hover{border-color:var(--blue);color:var(--txt)}
.pr-tab.active{background:var(--s3);color:var(--txt);border-color:var(--blue)}
.pr-body{padding:16px 22px 28px}
.pr-section-title{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:10px;margin-top:16px;padding-bottom:6px;border-bottom:1px solid var(--border)}
.pr-row{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.04)}
.pr-row:last-child{border-bottom:none}
.pr-row-label{flex:1;font-size:13px;color:var(--txt);line-height:1.3}
.pr-row-label small{display:block;font-size:10px;color:var(--muted);margin-top:2px}
.pr-input{width:72px;text-align:center;background:var(--s2);border:1px solid var(--border);border-radius:8px;padding:8px 4px;font-size:14px;font-weight:600;color:var(--txt);font-family:'DM Sans',sans-serif;font-size:16px}
.pr-input:focus{outline:none;border-color:var(--blue)}
.pr-max{font-size:10px;color:var(--muted);min-width:24px;text-align:right}
.pr-result{margin-top:18px;padding:18px 20px;background:linear-gradient(135deg,rgba(75,123,255,.1),rgba(124,92,252,.07));border:1px solid rgba(75,123,255,.25);border-radius:14px;text-align:center}
.pr-total{font-family:'Fraunces',serif;font-size:52px;font-weight:700;background:linear-gradient(135deg,var(--blue),var(--violet));-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1}
.pr-total-lbl{font-size:11px;color:var(--muted);margin-top:2px;margin-bottom:16px}
.pr-breakdown{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px}
.pr-bk-item{padding:10px 6px;background:var(--s2);border-radius:10px;border:1px solid var(--border);text-align:center}
.pr-bk-val{font-size:17px;font-weight:700;color:var(--txt);line-height:1}
.pr-bk-lbl{font-size:10px;color:var(--muted);margin-top:3px;line-height:1.3}
.pr-prag-box{padding:12px 14px;background:rgba(233,180,70,.06);border:1px solid rgba(233,180,70,.18);border-radius:10px;font-size:12px;color:var(--muted);line-height:1.6}
.pr-prag-box strong{color:var(--gold)}
.pr-prag-bar{height:6px;background:var(--border);border-radius:3px;overflow:hidden;margin-top:10px}
.pr-prag-bar-fill{height:100%;border-radius:3px;transition:width .6s cubic-bezier(.34,1.2,.64,1)}
.pr-chance{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:999px;font-size:12px;font-weight:700;margin-top:12px}
.pr-open-btn{display:inline-flex;align-items:center;gap:7px;padding:9px 15px;border-radius:10px;border:1px solid rgba(233,180,70,.3);background:rgba(233,180,70,.08);color:var(--gold);font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s;margin-bottom:14px;width:100%}
.pr-open-btn:hover{background:rgba(233,180,70,.15);border-color:rgba(233,180,70,.5)}


/* ══ ANKETA INTERESA ══════════════════════════════════════════════════════ */
.anketa-overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:1300;display:flex;align-items:flex-end;justify-content:center;animation:fadeIn .2s ease;backdrop-filter:blur(8px)}
@media(min-width:601px){.anketa-overlay{align-items:center}}
.anketa-modal{background:var(--s1);border:1px solid var(--border);border-radius:20px 20px 0 0;width:100%;max-width:560px;max-height:92vh;overflow-y:auto;animation:slideUp .28s cubic-bezier(.34,1.2,.64,1);-webkit-overflow-scrolling:touch;display:flex;flex-direction:column}
@media(min-width:601px){.anketa-modal{border-radius:20px;max-height:86vh}}

.anketa-header{padding:18px 22px 14px;border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--s1);z-index:2;flex-shrink:0}
.anketa-handle{width:36px;height:4px;background:var(--border);border-radius:2px;margin:0 auto 14px}
.anketa-progress{height:3px;background:var(--border);border-radius:2px;overflow:hidden;margin-bottom:12px}
.anketa-progress-fill{height:100%;background:linear-gradient(90deg,var(--blue),var(--violet));transition:width .4s cubic-bezier(.34,1.56,.64,1)}
.anketa-title{font-family:'Fraunces',serif;font-size:20px;font-weight:700;color:var(--txt);line-height:1.2}
.anketa-subtitle{font-size:12px;color:var(--muted);margin-top:3px}

.anketa-body{padding:20px 22px;flex:1}
.anketa-korak-label{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--blue);margin-bottom:8px}
.anketa-pitanje{font-family:'Fraunces',serif;font-size:18px;font-weight:700;color:var(--txt);line-height:1.25;margin-bottom:6px}
.anketa-hint{font-size:12px;color:var(--muted);margin-bottom:18px;line-height:1.5}

/* Grid opcija — emoji kartice */
.anketa-opcije{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:20px}
@media(min-width:440px){.anketa-opcije.cols-3{grid-template-columns:1fr 1fr 1fr}}
.anketa-opcija{display:flex;flex-direction:column;align-items:center;gap:6px;padding:14px 10px;border-radius:14px;border:1.5px solid var(--border);background:var(--s2);cursor:pointer;transition:all .18s;text-align:center;position:relative;-webkit-tap-highlight-color:transparent}
.anketa-opcija:hover{border-color:var(--blue);background:var(--s3)}
.anketa-opcija.selected{border-color:var(--blue);background:rgba(75,123,255,.12)}
.anketa-opcija.selected::after{content:"✓";position:absolute;top:6px;right:8px;font-size:11px;font-weight:700;color:var(--blue)}
.anketa-opcija-emoji{font-size:26px;line-height:1}
.anketa-opcija-label{font-size:12px;font-weight:600;color:var(--txt);line-height:1.3}
.anketa-opcija-desc{font-size:10px;color:var(--muted);line-height:1.3}

/* Slider za jačinu interesa */
.anketa-slider-wrap{margin-bottom:20px}
.anketa-slider-labels{display:flex;justify-content:space-between;font-size:10px;color:var(--muted);margin-top:6px}

/* Akcije */
.anketa-actions{display:flex;gap:10px;padding:16px 22px 24px;border-top:1px solid var(--border);flex-shrink:0;position:sticky;bottom:0;background:var(--s1)}
.anketa-btn-primary{flex:1;padding:13px;border-radius:12px;background:linear-gradient(135deg,var(--blue),var(--violet));border:none;color:#fff;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;transition:opacity .2s}
.anketa-btn-primary:hover{opacity:.88}
.anketa-btn-primary:disabled{opacity:.45;cursor:not-allowed}
.anketa-btn-back{padding:13px 18px;border-radius:12px;background:transparent;border:1px solid var(--border);color:var(--muted);font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s}
.anketa-btn-back:hover{border-color:var(--txt);color:var(--txt)}

/* Rezultati ankete */
.anketa-rezultat-item{display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:12px;border:1px solid var(--border);background:var(--s2);margin-bottom:8px;cursor:pointer;transition:all .18s}
.anketa-rezultat-item:hover{border-color:rgba(75,123,255,.3);background:var(--s3)}
.anketa-rezultat-rank{font-family:'Fraunces',serif;font-size:22px;font-weight:700;min-width:32px;text-align:center}
.anketa-rezultat-info{flex:1}
.anketa-rezultat-naziv{font-size:14px;font-weight:600;color:var(--txt);margin-bottom:2px}
.anketa-rezultat-razlog{font-size:11px;color:var(--muted);line-height:1.5}
.anketa-rezultat-bar{height:4px;border-radius:2px;background:var(--border);margin-top:6px;overflow:hidden}
.anketa-rezultat-bar-fill{height:100%;border-radius:2px}

/* Open btn */
.anketa-open-btn{display:inline-flex;align-items:center;gap:7px;padding:9px 15px;border-radius:10px;border:1px solid rgba(124,92,252,.3);background:rgba(124,92,252,.08);color:var(--violet);font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s;width:100%;margin-bottom:14px}
.anketa-open-btn:hover{background:rgba(124,92,252,.16);border-color:rgba(124,92,252,.5)}

/* ══ PAYWALL ══════════════════════════════════════════════════════════════ */
.result-item.blurred{filter:blur(5px);user-select:none;pointer-events:none;opacity:.7}
.results-paywall-wrap{position:relative}
.results-fade{position:absolute;bottom:0;left:0;right:0;height:120px;background:linear-gradient(transparent,var(--s1));z-index:10;pointer-events:none;border-radius:0 0 14px 14px}
.paywall-btn{padding:13px 28px;border-radius:12px;background:linear-gradient(135deg,var(--blue),var(--violet));border:none;color:#fff;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;box-shadow:0 0 0 1px rgba(75,123,255,.28), 0 8px 32px rgba(75,123,255,.3);transition:transform .15s,box-shadow .15s;letter-spacing:.01em;width:100%;max-width:320px;margin:0 auto;display:block}
.paywall-btn:hover{transform:translateY(-2px);box-shadow:0 0 0 1px rgba(75,123,255,.45), 0 22px 64px rgba(75,123,255,.45)}
.paywall-login{margin-top:10px;font-size:12px;color:var(--muted);text-align:center}
.paywall-login span{color:var(--blue);cursor:pointer;font-weight:600}
.tab-lock-badge{font-size:10px;margin-left:4px;opacity:.7}

/* ── PERCENTIL ── */
.percentil-card{background:linear-gradient(135deg,rgba(75,123,255,.07),rgba(124,92,252,.05));border:1px solid rgba(75,123,255,.18);border-radius:14px;padding:18px 20px;margin-top:16px}
.percentil-header{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.percentil-emoji{font-size:24px;line-height:1}
.percentil-title{font-size:13px;font-weight:700;color:var(--txt)}
.percentil-subtitle{font-size:11px;color:var(--muted);margin-top:1px}
.percentil-value{font-family:'Fraunces',serif;font-size:38px;font-weight:700;line-height:1;margin-bottom:4px}
.percentil-desc{font-size:12px;color:var(--muted);margin-bottom:14px;line-height:1.5}
.percentil-bar-track{height:8px;background:var(--border);border-radius:4px;overflow:hidden}
.percentil-bar-fill{height:100%;border-radius:4px;transition:width .8s cubic-bezier(.34,1.56,.64,1)}
.percentil-bar-labels{display:flex;justify-content:space-between;margin-top:5px}
.percentil-bar-label{font-size:10px;color:var(--muted)}
.percentil-context{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.percentil-ctx-item{display:flex;align-items:center;gap:6px;padding:6px 10px;background:var(--s2);border:1px solid var(--border);border-radius:8px;font-size:11px;color:var(--muted)}
.percentil-ctx-item strong{color:var(--txt)}
.percentil-disclaimer{font-size:10px;color:var(--muted);opacity:.7;margin-top:10px;line-height:1.4;font-style:italic}

/* ══ NOTIFIKACIJE / EMAIL CAPTURE ════════════════════════════════════════ */
.notif-card{background:linear-gradient(135deg,rgba(62,207,110,.07),rgba(45,207,190,.05));border:1px solid rgba(62,207,110,.2);border-radius:14px;padding:18px 20px;margin-top:16px}
.notif-title{font-size:13px;font-weight:700;color:var(--txt);margin-bottom:4px;display:flex;align-items:center;gap:7px}
.notif-sub{font-size:11px;color:var(--muted);margin-bottom:14px;line-height:1.5}
.notif-input-row{display:flex;gap:8px}
.notif-input{flex:1;padding:10px 12px;background:var(--s2);border:1px solid var(--border);border-radius:10px;color:var(--txt);font-size:16px;font-family:'DM Sans',sans-serif;min-width:0;transition:border-color .2s}
.notif-input:focus{outline:none;border-color:var(--green)}
.notif-input::placeholder{color:var(--muted)}
.notif-btn{padding:10px 16px;border-radius:10px;background:linear-gradient(135deg,var(--green),var(--teal));border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;transition:opacity .2s;flex-shrink:0}
.notif-btn:hover{opacity:.88}
.notif-btn:disabled{opacity:.5;cursor:not-allowed}
.notif-chips{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}
.notif-chip{display:flex;align-items:center;gap:5px;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:600;border:1px solid var(--border);background:var(--s2);color:var(--muted);cursor:pointer;transition:all .15s;-webkit-tap-highlight-color:transparent}
.notif-chip:hover{border-color:var(--green);color:var(--green)}
.notif-chip.on{background:rgba(62,207,110,.12);border-color:rgba(62,207,110,.35);color:var(--green)}
.notif-success{display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:10px;background:rgba(62,207,110,.1);border:1px solid rgba(62,207,110,.25);font-size:12px;color:var(--green);font-weight:600;margin-top:8px;animation:slideUp .25s ease}
.notif-termine{margin-top:12px;padding:10px 12px;background:var(--s2);border:1px solid var(--border);border-radius:10px}
.notif-termine-title{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:8px}
.notif-termine-item{display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:12px;color:var(--txt)}
.notif-termine-item:last-child{border-bottom:none}
.notif-termine-datum{font-size:11px;color:var(--blue);font-weight:600;min-width:72px;flex-shrink:0}

/* ══ GLASOVNI UNOS ════════════════════════════════════════════════════════ */
.voice-btn{width:36px;height:36px;border-radius:50%;border:1px solid var(--border);background:var(--s2);color:var(--muted);font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;flex-shrink:0}
.voice-btn:hover{border-color:var(--blue);color:var(--blue)}
.voice-btn.listening{background:rgba(240,92,92,.15);border-color:var(--red);color:var(--red);animation:voice-pulse 1s ease-in-out infinite}
@keyframes voice-pulse{0%,100%{box-shadow:0 0 0 0 rgba(240,92,92,.4)}50%{box-shadow:0 0 0 8px rgba(240,92,92,0)}}
@keyframes ob-dot-pulse{0%,80%,100%{transform:scale(.6);opacity:.4}40%{transform:scale(1);opacity:1}}
@keyframes ob-icon-bounce{0%{transform:scale(.8);opacity:0}60%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}
.voice-bar{padding:8px 12px;border-radius:8px;background:rgba(240,92,92,.08);border:1px solid rgba(240,92,92,.2);font-size:11px;color:var(--red);margin-top:8px;display:flex;align-items:center;gap:7px;animation:slideUp .2s ease}
.voice-bar-dot{width:7px;height:7px;border-radius:50%;background:var(--red);animation:voice-pulse 1s ease-in-out infinite}

/* ══ RADAR CHART ══════════════════════════════════════════════════════════ */
.radar-wrap{margin-bottom:28px}
.radar-studij-select{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px}
.radar-studij-btn{padding:5px 10px;border-radius:8px;border:1px solid var(--border);background:var(--s2);color:var(--muted);font-size:11px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s;white-space:nowrap}
.radar-studij-btn:hover{border-color:var(--blue);color:var(--txt)}
.radar-studij-btn.active{background:var(--s3);border-color:var(--blue);color:var(--txt)}
.radar-legend{display:flex;gap:16px;justify-content:center;margin-top:10px;flex-wrap:wrap}
.radar-legend-item{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--muted)}
.radar-legend-dot{width:10px;height:10px;border-radius:50%}


/* ══ REFERRAL MODAL ══════════════════════════════════════════════════════ */
.ref-overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:1400;display:flex;align-items:flex-end;justify-content:center;animation:fadeIn .2s ease;backdrop-filter:blur(8px)}
@media(min-width:601px){.ref-overlay{align-items:center}}
.ref-modal{background:var(--s1);border:1px solid var(--border);border-radius:20px 20px 0 0;width:100%;max-width:520px;overflow:hidden;animation:slideUp .28s cubic-bezier(.34,1.2,.64,1)}
@media(min-width:601px){.ref-modal{border-radius:20px}}
.ref-glow{position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:240px;height:180px;background:radial-gradient(ellipse,rgba(124,92,252,.3),transparent 70%);pointer-events:none}
.ref-header{position:relative;padding:28px 24px 0;text-align:center;overflow:hidden}
.ref-badge-big{font-size:52px;display:block;margin-bottom:12px;animation:ob-icon-bounce .5s cubic-bezier(.34,1.56,.64,1)}
.ref-title{font-family:'Fraunces',serif;font-size:22px;font-weight:700;color:var(--txt);line-height:1.2;margin-bottom:6px}
.ref-sub{font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:20px;max-width:340px;margin-left:auto;margin-right:auto}
.ref-body{padding:0 24px 24px}
.ref-steps{display:flex;flex-direction:column;gap:10px;margin-bottom:20px}
.ref-step{display:flex;align-items:flex-start;gap:12px;padding:12px 14px;border-radius:12px;background:var(--s2);border:1px solid var(--border)}
.ref-step-num{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--violet));display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;flex-shrink:0;margin-top:1px}
.ref-step-text{flex:1}
.ref-step-title{font-size:13px;font-weight:600;color:var(--txt);margin-bottom:2px}
.ref-step-desc{font-size:11px;color:var(--muted);line-height:1.4}
.ref-link-box{display:flex;gap:8px;margin-bottom:12px}
.ref-link-input{flex:1;padding:11px 13px;background:var(--s2);border:1px solid var(--border);border-radius:10px;color:var(--muted);font-size:12px;font-family:'DM Sans',sans-serif;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:default;min-width:0}
.ref-copy-btn{padding:11px 16px;border-radius:10px;background:linear-gradient(135deg,var(--blue),var(--violet));border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;transition:opacity .2s;flex-shrink:0}
.ref-copy-btn:hover{opacity:.88}
.ref-copy-btn.copied{background:linear-gradient(135deg,var(--green),var(--teal))}
.ref-share-row{display:flex;gap:8px;margin-bottom:20px}
.ref-share-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--s2);color:var(--txt);font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s}
.ref-share-btn:hover{border-color:var(--blue);background:var(--s3)}
.ref-ambassador-preview{padding:14px 16px;border-radius:12px;background:linear-gradient(135deg,rgba(124,92,252,.1),rgba(75,123,255,.07));border:1px solid rgba(124,92,252,.25);display:flex;align-items:center;gap:12px;margin-bottom:16px}
.ref-ambassador-badge{font-size:28px;flex-shrink:0}
.ref-ambassador-info{flex:1}
.ref-ambassador-title{font-size:13px;font-weight:700;color:var(--txt);margin-bottom:2px}
.ref-ambassador-desc{font-size:11px;color:var(--muted);line-height:1.4}
.ref-count-badge{padding:3px 10px;border-radius:999px;background:rgba(124,92,252,.15);border:1px solid rgba(124,92,252,.3);font-size:11px;font-weight:700;color:var(--violet);flex-shrink:0}
.ref-close-btn{width:100%;padding:12px;border-radius:10px;background:transparent;border:1px solid var(--border);color:var(--muted);font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s}
.ref-close-btn:hover{border-color:var(--red);color:var(--red)}
/* FAB gumb za referral u lijevoj koloni */
.ref-trigger-btn{display:flex;align-items:center;gap:8px;padding:10px 15px;border-radius:10px;border:1px solid rgba(124,92,252,.3);background:rgba(124,92,252,.08);color:var(--violet);font-size:12px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s;width:100%;margin-top:12px}
.ref-trigger-btn:hover{background:rgba(124,92,252,.16);border-color:rgba(124,92,252,.5)}

/* ══ PLAN USPOREDBA MODAL ════════════════════════════════════════════════ */
.plan-overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:1400;display:flex;align-items:flex-end;justify-content:center;animation:fadeIn .2s ease;backdrop-filter:blur(8px)}
@media(min-width:601px){.plan-overlay{align-items:center}}
.plan-modal{background:var(--s1);border:1px solid var(--border);border-radius:20px 20px 0 0;width:100%;max-width:560px;max-height:92vh;overflow-y:auto;animation:slideUp .28s cubic-bezier(.34,1.2,.64,1)}
@media(min-width:601px){.plan-modal{border-radius:20px}}
.plan-header{padding:24px 24px 0;text-align:center}
.plan-handle{width:36px;height:4px;background:var(--border);border-radius:2px;margin:0 auto 18px}
.plan-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0 20px 20px}
.plan-col{border-radius:16px;padding:20px 16px;border:1px solid var(--border);background:var(--s2);position:relative;overflow:hidden}
.plan-col.pro{background:linear-gradient(160deg,rgba(75,123,255,.1),rgba(124,92,252,.07));border-color:rgba(75,123,255,.3);box-shadow:0 0 0 1px rgba(75,123,255,.15), 0 28px 70px rgba(75,123,255,.12);animation:glow 5s ease-in-out infinite}
.plan-col-badge{position:absolute;top:10px;right:10px;padding:3px 8px;border-radius:999px;font-size:10px;font-weight:800;background:rgba(75,123,255,.2);border:1px solid rgba(75,123,255,.35);color:var(--blue);letter-spacing:.06em;text-transform:uppercase}
.plan-col-name{font-family:'Fraunces',serif;font-size:18px;font-weight:700;color:var(--txt);margin-bottom:4px}
.plan-col-price{font-size:26px;font-weight:900;line-height:1;margin-bottom:4px}
.plan-col-price span{font-size:13px;font-weight:500;color:var(--muted)}
.plan-col-desc{font-size:11px;color:var(--muted);margin-bottom:16px;line-height:1.5}
.plan-feature-row{display:flex;align-items:flex-start;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:12px}
.plan-feature-row:last-child{border-bottom:none}
.plan-feature-check{width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:900;flex-shrink:0;margin-top:1px}
.plan-feature-check.yes{background:rgba(75,123,255,.18);color:var(--blue)}
.plan-feature-check.no{background:rgba(255,255,255,.05);color:rgba(255,255,255,.2)}
.plan-feature-text{color:var(--txt);line-height:1.4}
.plan-feature-text.dim{color:rgba(255,255,255,.25)}
.plan-cta-row{padding:0 20px 24px;display:flex;gap:10px}
.plan-cta-free{flex:1;padding:12px;border-radius:12px;border:1px solid var(--border);background:transparent;color:var(--muted);font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s}
.plan-cta-free:hover{border-color:var(--txt);color:var(--txt)}
.plan-cta-pro{flex:1;padding:12px;border-radius:12px;border:none;background:linear-gradient(135deg,var(--blue),var(--violet));color:#fff;font-size:13px;font-weight:900;cursor:pointer;font-family:'DM Sans',sans-serif;box-shadow:0 0 0 1px rgba(75,123,255,.28), 0 8px 32px rgba(75,123,255,.3);transition:all .2s}
.plan-cta-pro:hover{transform:translateY(-2px);box-shadow:0 0 0 1px rgba(75,123,255,.45), 0 22px 64px rgba(75,123,255,.45)}

/* ══ AI UPISNIK CHAT ══════════════════════════════════════════════════════ */
.chat-overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:1500;display:flex;align-items:flex-end;justify-content:center;animation:fadeIn .2s ease;backdrop-filter:blur(8px)}
@media(min-width:601px){.chat-overlay{align-items:center}}
.chat-modal{background:var(--s1);border:1px solid var(--border);border-radius:20px 20px 0 0;width:100%;max-width:560px;height:82vh;max-height:640px;display:flex;flex-direction:column;animation:slideUp .28s cubic-bezier(.34,1.2,.64,1)}
@media(min-width:601px){.chat-modal{border-radius:20px;height:600px}}
.chat-header{padding:16px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px;flex-shrink:0}
.chat-handle{width:36px;height:4px;background:var(--border);border-radius:2px;margin:0 auto 14px}
.chat-avatar{width:36px;height:36px;border-radius:12px;background:linear-gradient(135deg,var(--blue),var(--violet));display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.chat-header-info{flex:1}
.chat-header-name{font-size:14px;font-weight:700;color:var(--txt)}
.chat-header-sub{font-size:11px;color:var(--muted)}
.chat-header-close{background:transparent;border:1px solid var(--border);border-radius:8px;color:var(--muted);font-size:16px;cursor:pointer;padding:4px 9px;transition:all .15s}
.chat-header-close:hover{border-color:var(--red);color:var(--red)}
.chat-messages{flex:1;overflow-y:auto;padding:16px 20px;display:flex;flex-direction:column;gap:12px;scrollbar-width:thin;scrollbar-color:var(--border) transparent}
.chat-msg{display:flex;gap:10px;align-items:flex-start;animation:slideUp .2s ease}
.chat-msg.user{flex-direction:row-reverse}
.chat-msg-bubble{max-width:82%;padding:10px 14px;border-radius:14px;font-size:13px;line-height:1.6;color:var(--txt)}
.chat-msg-bubble.ai{background:var(--s2);border:1px solid var(--border);border-radius:4px 14px 14px 14px}
.chat-msg-bubble.user{background:linear-gradient(135deg,var(--blue),var(--violet));color:#fff;border-radius:14px 4px 14px 14px}
.chat-msg-avatar{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;margin-top:2px}
.chat-msg-avatar.ai{background:linear-gradient(135deg,var(--blue),var(--violet))}
.chat-msg-avatar.user{background:var(--s3);border:1px solid var(--border)}
.chat-typing{display:flex;gap:4px;align-items:center;padding:4px 0}
.chat-typing-dot{width:6px;height:6px;border-radius:50%;background:var(--muted);animation:ob-dot-pulse 1.4s ease-in-out infinite}
.chat-input-wrap{padding:12px 16px;border-top:1px solid var(--border);display:flex;gap:8px;flex-shrink:0;background:var(--s1)}
.chat-input{flex:1;padding:10px 13px;background:var(--s2);border:1px solid var(--border);border-radius:10px;color:var(--txt);font-size:16px;font-family:'DM Sans',sans-serif;resize:none;line-height:1.5;max-height:80px;scrollbar-width:none}
.chat-input:focus{outline:none;border-color:var(--blue)}
.chat-input::placeholder{color:var(--muted)}
.chat-send-btn{width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,var(--blue),var(--violet));border:none;color:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:opacity .15s;align-self:flex-end}
.chat-send-btn:hover{opacity:.88}
.chat-send-btn:disabled{opacity:.4;cursor:not-allowed}
.chat-chips{display:flex;gap:6px;flex-wrap:wrap;padding:0 16px 10px}
.chat-chip{padding:5px 11px;border-radius:20px;border:1px solid var(--border);background:var(--s2);color:var(--muted);font-size:11px;font-weight:600;cursor:pointer;transition:all .15s;font-family:'DM Sans',sans-serif;white-space:nowrap}
.chat-chip:hover{border-color:var(--blue);color:var(--blue)}

/* FAB za chat */
.chat-fab{position:fixed;bottom:84px;right:80px;z-index:200;width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,var(--teal),var(--blue));border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 4px 20px rgba(45,207,190,.4);transition:transform .2s,box-shadow .2s}
.chat-fab:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(45,207,190,.55)}
@media(max-width:600px){.chat-fab{bottom:90px;right:76px;width:48px;height:48px;font-size:20px}}

/* ══ KEYBOARD SHORTCUTS ══════════════════════════════════════════════════ */
.kb-overlay{position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:1600;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn .15s ease;backdrop-filter:blur(6px)}
.kb-modal{background:var(--s1);border:1px solid var(--border);border-radius:18px;padding:28px;width:100%;max-width:420px;animation:slideUp .2s ease}
.kb-title{font-family:'Fraunces',serif;font-size:20px;font-weight:700;color:var(--txt);margin-bottom:4px}
.kb-sub{font-size:12px;color:var(--muted);margin-bottom:20px}
.kb-section{margin-bottom:16px}
.kb-section-title{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid var(--border)}
.kb-row{display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.04)}
.kb-row:last-child{border-bottom:none}
.kb-desc{font-size:13px;color:var(--txt)}
.kb-keys{display:flex;gap:4px;align-items:center}
.kb-key{padding:3px 8px;border-radius:6px;background:var(--s2);border:1px solid var(--border);font-size:11px;font-weight:700;color:var(--muted);font-family:'DM Sans',sans-serif;white-space:nowrap}
.kb-close-btn{width:100%;padding:11px;border-radius:10px;background:transparent;border:1px solid var(--border);color:var(--muted);font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;margin-top:16px;transition:all .15s}
.kb-close-btn:hover{border-color:var(--txt);color:var(--txt)}

/* ══ SHARE FAB + MODAL ══════════════════════════════════════════════════════ */
.share-fab{position:fixed;bottom:84px;right:20px;z-index:200;width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--violet));border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 4px 20px rgba(75,123,255,.4);transition:transform .2s,box-shadow .2s}
.share-fab:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(75,123,255,.55)}
@media(max-width:600px){.share-fab{bottom:90px;right:14px;width:48px;height:48px;font-size:18px}}
.share-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:1500;display:flex;align-items:flex-end;justify-content:center;animation:fadeIn .2s ease;backdrop-filter:blur(8px)}
@media(min-width:601px){.share-modal-overlay{align-items:center}}
.share-modal{background:var(--s1);border:1px solid var(--border);border-radius:20px 20px 0 0;width:100%;max-width:480px;padding:0 0 16px;animation:slideUp .28s cubic-bezier(.34,1.2,.64,1)}
@media(min-width:601px){.share-modal{border-radius:20px;padding:0 0 24px}}
.share-handle{width:36px;height:4px;background:var(--border);border-radius:2px;margin:16px auto 4px}
.share-modal-title{font-family:'Fraunces',serif;font-size:20px;font-weight:700;color:var(--txt);text-align:center;padding:10px 24px 4px}
.share-modal-sub{font-size:12px;color:var(--muted);text-align:center;padding:0 24px 16px}
.share-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:0 20px 14px}
.share-btn{display:flex;flex-direction:column;align-items:center;gap:5px;padding:14px 10px;border-radius:14px;border:1px solid var(--border);background:var(--s2);cursor:pointer;transition:all .18s;font-family:'DM Sans',sans-serif}
.share-btn:hover{background:var(--s3);border-color:var(--blue)}
.share-btn.wb:hover{border-color:#25d366}
.share-btn.ig:hover{border-color:#e1306c}
.share-btn-icon{font-size:26px;line-height:1}
.share-btn-label{font-size:13px;font-weight:700;color:var(--txt)}
.share-btn-desc{font-size:10px;color:var(--muted);text-align:center;line-height:1.3}
.share-btn.share-copied{border-color:var(--green);background:rgba(62,207,110,.1)}
.share-btn.share-copied .share-btn-label{color:var(--green)}
.share-close{display:block;width:calc(100% - 40px);margin:0 auto;padding:11px;border-radius:10px;background:transparent;border:1px solid var(--border);color:var(--muted);font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s}
.share-close:hover{border-color:var(--txt);color:var(--txt)}

@media print{
  .back-btn,.main-tabs,.export-toolbar,.sort-row,.filter-bar,.active-filters,
  .filter-pill-fav,.search-input,.sim-intro,.sim-slider-row,.modal-overlay,
  .kalk-eyebrow,.legenda,.notice{display:none!important}
  .results-scroll{max-height:none!important;overflow:visible!important}
  body{background:#fff!important;color:#000!important}
  .kcard{border:1px solid #ddd!important;background:#fff!important}
  .result-item{background:#f9f9f9!important;border:1px solid #ddd!important;break-inside:avoid}
  .print-header{display:block!important}
}
.print-header{display:none}
`;

/* ─── Konstante ─────────────────────────────────────────────────────────── */
const STUDIJI_S_PRIJEMNIM = new Set([
  "Medicina_Zagreb","Arhitektura i urbanizam_Zagreb","Veterinarska medicina_Zagreb",
  "Dizajn_Zagreb","Kineziologija (Izobrazba trenera)_Zagreb",
  "Kineziologija (Kineziološka edukacija)_Zagreb",
]);

const SIM_FIELDS = [
  { key:"prosjek",  label:"Prosjek ocjena",   step:.1,  isFloat:true,  isPrijemni:false },
  { key:"hr",       label:"Hrvatski jezik",    step:1,   isFloat:false, isPrijemni:false },
  { key:"mat",      label:"Matematika",         step:1,   isFloat:false, isPrijemni:false },
  { key:"strani",   label:"Strani jezik",       step:1,   isFloat:false, isPrijemni:false },
  { key:"izb1",     label:"Izborni predmet 1",  step:1,   isFloat:false, isPrijemni:false },
  { key:"izb2",     label:"Izborni predmet 2",  step:1,   isFloat:false, isPrijemni:false },
  { key:"prijemni", label:"Prijemni ispit",     step:1,   isFloat:false, isPrijemni:true  },
];

const LS_KEY    = "maturix_favoriti";
const LS_PROFIL = "maturix_profil";
const LS_SCORES = "maturix_scores";
const MAX_CMP   = 3;

/* ─── Helperi ───────────────────────────────────────────────────────────── */
function getTrend(k, p25) {
  const p23 = PRAG_2023[k];
  if (!p23) return { tip:"new",  label:"Novo",                    diff:null };
  const d = p25 - p23;
  if (Math.abs(d) < 5) return { tip:"flat", label:"Stabilan",              diff:d };
  if (d > 0)           return { tip:"up",   label:`↑ +${d.toFixed(1)}`,    diff:d };
  return                      { tip:"down", label:`↓ ${d.toFixed(1)}`,     diff:d };
}

function buildShareUrl(fav, sc, profil) {
  const p = new URLSearchParams();
  if (fav.size>0) p.set("fav",[...fav].join(","));
  p.set("p",sc.prosjek);p.set("hr",sc.hr);p.set("m",sc.mat);p.set("s",sc.strani);
  p.set("i1",sc.izb1);p.set("i2",sc.izb2);p.set("n",sc.natjecanja);p.set("sp",sc.sport);p.set("pr",sc.prijemni);
  if (profil?.ime) p.set("ime", profil.ime.slice(0, 20));
  return `${window.location.origin}${window.location.pathname}?${p.toString()}`;
}

function parseShareUrl() {
  if (typeof window==="undefined") return null;
  const p = new URLSearchParams(window.location.search);
  if (!p.has("p")) return null;
  return {
    scores:{prosjek:parseFloat(p.get("p")??"4.0"),hr:parseInt(p.get("hr")??"60"),mat:parseInt(p.get("m")??"50"),strani:parseInt(p.get("s")??"65"),izb1:parseInt(p.get("i1")??"0"),izb2:parseInt(p.get("i2")??"0"),natjecanja:parseInt(p.get("n")??"0"),sport:parseInt(p.get("sp")??"0"),prijemni:parseInt(p.get("pr")??"0")},
    favoriti:p.has("fav")&&p.get("fav")!==""?new Set(p.get("fav").split(",")):null,
  };
}

function loadLS(k,fb){
  if(typeof window==="undefined")return fb;
  try{const v=localStorage.getItem(k);return v?JSON.parse(v):fb;}catch{return fb;}
}

/* ─── Recharts tooltip ──────────────────────────────────────────────────── */
function CustomTooltip({ active, payload, label }) {
  if (!active||!payload?.length) return null;
  return (
    <div style={{background:"#0e1220",border:"1px solid #1e2440",borderRadius:8,padding:"8px 12px"}}>
      <div style={{fontSize:11,color:"#7b82a0",marginBottom:4}}>{label}. godina</div>
      {payload.map((p,i)=>(
        <div key={i} style={{fontSize:13,fontWeight:600,color:p.color}}>{p.name}: {p.value} bod</div>
      ))}
    </div>
  );
}

/* ─── Studij modal ──────────────────────────────────────────────────────── */
function StudijModal({ studij, totalBodova, onClose }) {
  if (!studij) return null;
  const k = studij.studijKey;
  const povijest = POVIJEST[k];
  const chartData = povijest ? YEARS.map(y=>({god:y,prag:povijest[y]??null,moji:totalBodova})) : null;
  const pct = Math.min(100,Math.max(0,(totalBodova/studij.prag)*100));
  const diff = totalBodova - studij.prag;
  const bc = studij.chance==="high"?"var(--green)":studij.chance==="mid"?"var(--gold)":studij.chance==="low"?"var(--red)":"var(--muted)";

  return (
    <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <div><div className="modal-title">{studij.studij}</div></div>
          <button className="modal-close" onClick={onClose} aria-label="Zatvori">×</button>
        </div>
        <div className="modal-fak">{studij.fakultet} · {studij.grad}</div>

        <div className="termometar-wrap">
          <div className="termometar-title">Bodovni termometar</div>
          <div className="termometar-bar">
            <div className="termometar-fill" style={{width:`${pct}%`,background:`linear-gradient(90deg,${bc},${bc}88)`}}/>
            <div className="termometar-marker" style={{left:`${pct}%`}}>
              <div className="termometar-marker-line"/>
              <div className="termometar-marker-label">{totalBodova}</div>
            </div>
          </div>
          <div className="termometar-labels">
            <span>0</span><span>Prag: {studij.prag}</span><span>1000</span>
          </div>
          <div className="termometar-stats">
            <div className="termometar-stat">
              <div className="termometar-stat-val" style={{color:"var(--blue)"}}>{totalBodova}</div>
              <div className="termometar-stat-lbl">Moji bodovi</div>
            </div>
            <div className="termometar-stat">
              <div className="termometar-stat-val" style={{color:"var(--muted)"}}>{studij.prag}</div>
              <div className="termometar-stat-lbl">Prag 2025</div>
            </div>
            <div className="termometar-stat">
              <div className="termometar-stat-val" style={{color:bc}}>{diff>0?`+${Math.round(diff)}`:Math.round(diff)}</div>
              <div className="termometar-stat-lbl">Razlika</div>
            </div>
          </div>
        </div>

        <div className="grafikon-title">Trend bodovnog praga (2021–2025)</div>
        {chartData ? (
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={chartData} margin={{top:8,right:16,left:-10,bottom:0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e2440"/>
              <XAxis dataKey="god" tick={{fill:"#7b82a0",fontSize:11}}/>
              <YAxis tick={{fill:"#7b82a0",fontSize:11}} domain={["auto","auto"]}/>
              <Tooltip content={<CustomTooltip/>}/>
              <ReferenceLine y={totalBodova} stroke="#4b7bff" strokeDasharray="5 3" label={{value:"Moji bodovi",fill:"#4b7bff",fontSize:10,position:"right"}}/>
              <Line type="monotone" dataKey="prag" name="Prag" stroke="#e9b446" strokeWidth={2.5} dot={{r:4,fill:"#e9b446"}} activeDot={{r:6}}/>
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="grafikon-no-data">📊 Nemamo dovoljno povijesnih podataka za ovaj studij.</div>
        )}

        <div style={{display:"flex",gap:10,marginTop:16,flexWrap:"wrap"}}>
          <span className={`chance-badge ${studij.chance}`}>{chanceLabel(studij.chance)}</span>
          <span className={`trend-badge ${studij.trend.tip}`}>{studij.trend.label}</span>
          {PRAG_2023[k]&&<span style={{fontSize:12,color:"var(--muted)"}}>Prag 2023: {PRAG_2023[k]} bod</span>}
        </div>
      </div>
    </div>
  );
}

/* ─── Helper: čita SSE stream iz /api/ai i vraća puni tekst ─────────────── */
async function readSSEStream(response) {
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let text = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    for (const line of decoder.decode(value).split("\n")) {
      if (line.startsWith("data: ")) {
        try { text += JSON.parse(line.slice(6))?.delta?.text || ""; } catch {}
      }
    }
  }
  return text;
}

/* ══ KEYBOARD SHORTCUTS MODAL ══════════════════════════════════════════════ */

/* ══ KEYBOARD SHORTCUTS MODAL ══════════════════════════════════════════════ */
function KeyboardShortcutsModal({ onClose }) {
  const SHORTCUTS = [
    { section: "Navigacija", items: [
      { desc: "Pregled tab",         keys: ["1"] },
      { desc: "Preporuke tab",       keys: ["2"] },
      { desc: "Vizualizacija tab",   keys: ["3"] },
      { desc: "Simulacija tab",      keys: ["4"] },
    ]},
    { section: "Pretraživanje", items: [
      { desc: "Fokus na pretragu",   keys: ["⌘/Ctrl", "F"] },
    ]},
    { section: "Alati", items: [
      { desc: "AI chat",             keys: ["⌘/Ctrl", "K"] },
      { desc: "Dijeli rezultate",    keys: ["⌘/Ctrl", "S"] },
      { desc: "Dark / Light mode",   keys: ["⌘/Ctrl", "L"] },
      { desc: "Ovaj izbornik",       keys: ["?"] },
    ]},
    { section: "Općenito", items: [
      { desc: "Zatvori modal",       keys: ["Esc"] },
    ]},
  ];

  return (
    <div className="kb-overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="kb-modal">
        <div className="kb-title">⌨️ Prečaci tipkovnice</div>
        <div className="kb-sub">Radi dok nije fokus u polju za unos</div>
        {SHORTCUTS.map(s=>(
          <div key={s.section} className="kb-section">
            <div className="kb-section-title">{s.section}</div>
            {s.items.map(item=>(
              <div key={item.desc} className="kb-row">
                <span className="kb-desc">{item.desc}</span>
                <div className="kb-keys">
                  {item.keys.map((k,i)=>(
                    <React.Fragment key={k}>
                      {i>0&&<span style={{fontSize:10,color:"var(--muted)"}}>+</span>}
                      <span className="kb-key">{k}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <button className="kb-close-btn" onClick={onClose}>Zatvori</button>
      </div>
    </div>
  );
}

/* ══ AI UPISNIK CHAT ════════════════════════════════════════════════════════
   Korisnik razgovara s AI savjetnikom koji zna njihove bodove i favourite.
   Koristi Anthropic API (claude-sonnet-4-20250514)
════════════════════════════════════════════════════════════════════════════ */
const CHAT_CHIPS = [
  "Koji studij mi najviše odgovara?",
  "Kako poboljšati bodove?",
  "Što je prijemni ispit za MEF?",
  "Kad izlaze rang-liste?",
  "Razlika između Zagreb i Split?",
  "Koji su uvjeti za stipendiju?",
];

function AIChatModal({ onClose, totalBodova, scores, allStudiji, favoriti }) {
  const [msgs, setMsgs] = React.useState([{
    role: "ai",
    text: `Bok! 👋 Ja sam AI upisnik — znam tvoje bodove (${totalBodova}/1000) i mogu odgovoriti na sve o upisu na fakultete u Hrvatskoj. Što te zanima?`,
  }]);
  const [input, setInput]     = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const bottomRef = React.useRef(null);
  const inputRef  = React.useRef(null);

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const send = React.useCallback(async (tekst) => {
    const q = tekst || input.trim();
    if (!q || loading) return;
    setInput("");

    const userMsg = { role: "user", text: q };
    setMsgs(m => [...m, userMsg]);
    setLoading(true);

    // Kontekst korisnika
    const topStudiji = (allStudiji || [])
      .filter(s => s.chance !== "none")
      .sort((a,b) => b.diff - a.diff)
      .slice(0, 5)
      .map(s => `${s.studij} (${s.grad}): ${s.diff > 0 ? "+" : ""}${Math.round(s.diff)} bod`)
      .join(", ");

    const favList = [...(favoriti || [])].slice(0,3).map(k => {
      const s = (allStudiji || []).find(x => x.studijKey === k);
      return s ? s.studij : k;
    }).join(", ");

    const systemPrompt = `Ti si AI savjetnik za upise na fakultete u Hrvatskoj. Korisnikov kontekst:
- Ukupni bodovi: ${totalBodova}/1000
- Prosjek: ${scores?.prosjek || 0}, HR: ${scores?.hr || 0}%, MAT: ${scores?.mat || 0}%, Strani: ${scores?.strani || 0}%
- Top studiji: ${topStudiji || "nema podataka"}
- Favoriti: ${favList || "nema"}
Odgovaraj kratko (2-4 rečenice), konkretno i na hrvatskom. Budi prijatan i motivirajući.`;

    // History bez prve (welcome) poruke, zadnjih 8
    const history = msgs.slice(1).slice(-8).map(m => ({
      role: m.role === "ai" ? "assistant" : "user",
      content: m.text,
    }));

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: systemPrompt,
          messages: [...history, { role: "user", content: q }],
        }),
      });
      if (!res.ok) throw new Error("API error");
      const aiText = await readSSEStream(res);
      setMsgs(m => [...m, { role: "ai", text: aiText }]);
    } catch {
      setMsgs(m => [...m, { role: "ai", text: "Greška u spajanju. Provjeri internet i pokušaj opet." }]);
    }
    setLoading(false);
  }, [input, loading, msgs, totalBodova, scores, allStudiji, favoriti]);

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <div className="chat-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="chat-modal">
        {/* Header */}
        <div>
          <div style={{padding:"12px 0 0"}}><div className="chat-handle"/></div>
          <div className="chat-header">
            <div className="chat-avatar">🤖</div>
            <div className="chat-header-info">
              <div className="chat-header-name">AI Upisnik</div>
              <div className="chat-header-sub">Zna tvoje bodove · Odgovara na hrvatskom</div>
            </div>
            <button className="chat-header-close" onClick={onClose} aria-label="Zatvori">×</button>
          </div>
        </div>

        {/* Poruke */}
        <div className="chat-messages">
          {msgs.map((m, i) => (
            <div key={i} className={`chat-msg ${m.role}`}>
              <div className={`chat-msg-avatar ${m.role}`}>
                {m.role === "ai" ? "🤖" : "👤"}
              </div>
              <div className={`chat-msg-bubble ${m.role}`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="chat-msg ai">
              <div className="chat-msg-avatar ai">🤖</div>
              <div className="chat-msg-bubble ai">
                <div className="chat-typing">
                  {[0,1,2].map(i => (
                    <div key={i} className="chat-typing-dot" style={{animationDelay:`${i*0.2}s`}}/>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef}/>
        </div>

        {/* Quick chips */}
        {msgs.length <= 2 && (
          <div className="chat-chips">
            {CHAT_CHIPS.slice(0,4).map(c => (
              <button key={c} className="chat-chip" onClick={() => send(c)}>{c}</button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chat-input-wrap">
          <textarea
            ref={inputRef}
            className="chat-input"
            placeholder="Postavi pitanje o upisu..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            rows={1}
          />
          <button className="chat-send-btn" onClick={() => send()} disabled={!input.trim() || loading}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

/* ══ PLAN USPOREDBA MODAL ═══════════════════════════════════════════════════
   Prikazuje Free vs Pro usporedbu direktno unutar kalkulatora
   Gumb se pojavljuje u paywall CTA i u zaključanim tabovima
══════════════════════════════════════════════════════════════════════════ */
const PLAN_FEATURES = [
  { label:"Pregled svih 350+ studija",    free:false, pro:true  },
  { label:"Bodovni termometar po studiju",free:false, pro:true  },
  { label:"Trend grafikon 2021–2025",     free:false, pro:true  },
  { label:"Usporedba do 3 studija",       free:false, pro:true  },
  { label:"AI plan poboljšanja",          free:false, pro:true  },
  { label:"Simulacija bodova",            free:false, pro:true  },
  { label:"Radar chart snaga",            free:false, pro:true  },
  { label:"Karta Hrvatske",              free:false, pro:true  },
  { label:"Favoriti i dijeljenje",        free:false, pro:true  },
  { label:"Prijemni kalkulator",          free:false, pro:true  },
  { label:"Anketa interesa (AI)",         free:false, pro:true  },
  { label:"Percentil rang",              free:false, pro:true  },
];

function PlanUsporedbaModal({ onClose, onGoToPro }) {
  return (
    <div className="plan-overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="plan-modal">
        <div className="plan-header">
          <div className="plan-handle"/>
          <div style={{fontFamily:"'Fraunces',serif",fontSize:22,fontWeight:700,color:"var(--txt)",marginBottom:6}}>
            Usporedi planove
          </div>
          <div style={{fontSize:13,color:"var(--muted)",marginBottom:20,lineHeight:1.6}}>
            Besplatni pregled vs. puni pristup kalkulatoru
          </div>
        </div>

        <div className="plan-grid">
          {/* Free kolona */}
          <div className="plan-col">
            <div className="plan-col-name">Besplatno</div>
            <div className="plan-col-price" style={{color:"var(--muted)"}}>0€<span>/mj</span></div>
            <div className="plan-col-desc">Osnovni pregled bez detalja</div>
            {PLAN_FEATURES.map(f=>(
              <div key={f.label} className="plan-feature-row">
                <div className={`plan-feature-check ${f.free?"yes":"no"}`}>{f.free?"✓":"—"}</div>
                <div className={`plan-feature-text ${f.free?"":"dim"}`}>{f.label}</div>
              </div>
            ))}
          </div>

          {/* Pro kolona */}
          <div className="plan-col pro">
            <div className="plan-col-badge">Popularno</div>
            <div className="plan-col-name">Pro</div>
            <div className="plan-col-price" style={{color:"var(--blue)"}}>19,99€<span>/mj</span></div>
            <div className="plan-col-desc">Puni pristup svim featurima</div>
            {PLAN_FEATURES.map(f=>(
              <div key={f.label} className="plan-feature-row">
                <div className="plan-feature-check yes">✓</div>
                <div className="plan-feature-text">{f.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="plan-cta-row">
          <button className="plan-cta-free" onClick={onClose}>Ostani besplatno</button>
          <button className="plan-cta-pro" onClick={()=>{onGoToPro();onClose();}}>
            Uzmi Pro →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ══ REFERRAL MODAL ════════════════════════════════════════════════════════
   Korisnik dijeli personalizirani link → skuplja referrale → dobiva
   Ambassador badge koji se prikazuje u profilu
════════════════════════════════════════════════════════════════════════════ */
const LS_REFERRAL = "maturiraj_referral";

function getReferralData(profil) {
  try {
    const saved = JSON.parse(localStorage.getItem(LS_REFERRAL) || "{}");
    if (!saved.code) {
      // Generiraj unikatan kod na temelju imena + timestamp
      const base = (profil?.ime || "maturant").toLowerCase().replace(/[^a-z]/g, "").slice(0, 6) || "user";
      saved.code = base + Math.random().toString(36).slice(2, 6);
      saved.count = 0;
      saved.isAmbassador = false;
      localStorage.setItem(LS_REFERRAL, JSON.stringify(saved));
    }
    return saved;
  } catch { return { code: "ref" + Math.random().toString(36).slice(2, 8), count: 0, isAmbassador: false }; }
}

function ReferralModal({ onClose, profil, totalBodova }) {
  const [refData]    = React.useState(() => getReferralData(profil));
  const [copied,     setCopied]    = React.useState(false);

  const refUrl = `${typeof window !== "undefined" ? window.location.origin : "https://maturiraj.hr"}/kalkulator?ref=${refData.code}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(refUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  function handleWhatsApp() {
    const nl = "";
    ";";
    const text = [
      "🎓 Koristim maturiraj.hr kalkulator bodova — super alat!",
      "Uneseš rezultate mature i odmah vidiš na koje fakse možeš računati.",
      "",
      "Probaj i ti → " + refUrl,
    ].join(nl);
    window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
  }

  const handleSMS = () => {
    const text = "Provjeri maturiraj.hr kalkulator bodova → " + refUrl;
    window.open("sms:?body=" + encodeURIComponent(text));
  };

  const ambassadorThreshold = 3; // koliko referrala treba za badge
  const progressPct = Math.min(100, (refData.count / ambassadorThreshold) * 100);

  return (
    <div className="ref-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="ref-modal">
        <div className="ref-header">
          <div className="ref-glow"/>
          <span className="ref-badge-big">🏅</span>
          <div className="ref-title">Postani Ambassador</div>
          <div className="ref-sub">
            Podijeli kalkulator s {ambassadorThreshold} prijatelja i osvoji ekskluzivni
            <strong style={{color:"var(--violet)"}}> Ambassador badge</strong> u svom profilu.
          </div>
        </div>

        <div className="ref-body">
          {/* Ambassador preview */}
          <div className="ref-ambassador-preview">
            <div className="ref-ambassador-badge">
              {refData.isAmbassador ? "🏅" : "🔒"}
            </div>
            <div className="ref-ambassador-info">
              <div className="ref-ambassador-title">
                {refData.isAmbassador ? "Ambassador — aktivno!" : "Ambassador badge"}
              </div>
              <div className="ref-ambassador-desc">
                {refData.isAmbassador
                  ? "Čestitamo! Badge je aktivan u tvom profilu."
                  : `Još ${ambassadorThreshold - refData.count} prijatelja da otključaš badge`}
              </div>
              {/* Progress bar */}
              {!refData.isAmbassador && (
                <div style={{height:4,background:"var(--border)",borderRadius:2,marginTop:8,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${progressPct}%`,background:"linear-gradient(90deg,var(--blue),var(--violet))",borderRadius:2,transition:"width .5s ease"}}/>
                </div>
              )}
            </div>
            <div className="ref-count-badge">{refData.count}/{ambassadorThreshold}</div>
          </div>

          {/* Koraci */}
          <div className="ref-steps">
            {[
              {num:1, title:"Kopiraj svoj link", desc:"Svaki tvoj link ima jedinstveni kod koji prati referrale."},
              {num:2, title:"Podijeli s prijateljem", desc:"Pošalji na WhatsApp, SMS ili kopiraj link."},
              {num:3, title:"Osvoji Ambassador badge", desc:`Kad ${ambassadorThreshold} prijatelja otvori tvoj link, badge se automatski aktivira.`},
            ].map(s => (
              <div key={s.num} className="ref-step">
                <div className="ref-step-num">{s.num}</div>
                <div className="ref-step-text">
                  <div className="ref-step-title">{s.title}</div>
                  <div className="ref-step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Link box */}
          <div className="ref-link-box">
            <div className="ref-link-input" title={refUrl}>{refUrl}</div>
            <button className={`ref-copy-btn${copied ? " copied" : ""}`} onClick={handleCopy}>
              {copied ? "✓ Kopirano!" : "Kopiraj"}
            </button>
          </div>

          {/* Share gumbi */}
          <div className="ref-share-row">
            <button className="ref-share-btn" onClick={handleWhatsApp}>
              <span>💬</span> WhatsApp
            </button>
            <button className="ref-share-btn" onClick={handleSMS}>
              <span>📱</span> SMS
            </button>
            <button className="ref-share-btn" onClick={handleCopy}>
              <span>{copied ? "✓" : "🔗"}</span> {copied ? "Kopirano" : "Link"}
            </button>
          </div>

          <button className="ref-close-btn" onClick={onClose}>Zatvori</button>
        </div>
      </div>
    </div>
  );
}

/* ══ ANKETA INTERESA ════════════════════════════════════════════════════════
   5-koračna anketa → AI preporuka studija na temelju interesa
   Koristi Anthropic API za personalizirani odgovor
════════════════════════════════════════════════════════════════════════════ */
const ANKETA_KORACI = [
  {
    id: "predmeti",
    pitanje: "Koji ti predmeti idu najlakše?",
    hint: "Odaberi sve koji se odnose na tebe (možeš više)",
    vise: true,
    opcije: [
      {v:"mat",    emoji:"🔢", label:"Matematika",    desc:"Formule, logika, analiza"},
      {v:"bio",    emoji:"🧬", label:"Biologija",     desc:"Tijelo, priroda, evolucija"},
      {v:"kem",    emoji:"⚗️", label:"Kemija",        desc:"Reakcije, elementi, lab"},
      {v:"fiz",    emoji:"⚡", label:"Fizika",        desc:"Sile, energija, prostor"},
      {v:"hr",     emoji:"📖", label:"Hrvatski/jez.", desc:"Jezik, književnost, esej"},
      {v:"inf",    emoji:"💻", label:"Informatika",   desc:"Programiranje, logika"},
      {v:"geo",    emoji:"🌍", label:"Geografija",    desc:"Prostor, priroda, kulture"},
      {v:"pov",    emoji:"📜", label:"Povijest",      desc:"Ereignaji, uzroci, osobe"},
      {v:"soc",    emoji:"👥", label:"Sociologija",   desc:"Društvo, odnosi, kultura"},
      {v:"lk",     emoji:"🎨", label:"Likovna",       desc:"Crtanje, dizajn, kreacija"},
      {v:"ttz",    emoji:"⚽", label:"Tjelesna",      desc:"Sport, pokret, zdravlje"},
      {v:"glazba", emoji:"🎵", label:"Glazba",        desc:"Teorija, instrumenti, pjev"},
    ],
  },
  {
    id: "aktivnosti",
    pitanje: "Što bi radio/la cijeli dan kad ne bi trebao/la ići u školu?",
    hint: "Odaberi što te najviše privlači",
    vise: true,
    opcije: [
      {v:"citat",   emoji:"📚", label:"Čitam i učim",   desc:"Knjige, dokumentarci, znanje"},
      {v:"gradim",  emoji:"🔧", label:"Gradim/popravljam", desc:"Stvaram nešto rukama"},
      {v:"crta",    emoji:"✏️", label:"Crtam/dizajniram",  desc:"Vizualno, estetski"},
      {v:"sport",   emoji:"🏃", label:"Bavim se sportom",  desc:"Treniranje, natjecanje"},
      {v:"pomaze",  emoji:"🤝", label:"Pomažem drugima",   desc:"Savjetovanje, briga"},
      {v:"istraz",  emoji:"🔬", label:"Istražujem",        desc:"Eksperimentiram, analiziram"},
      {v:"organi",  emoji:"📋", label:"Organiziram",       desc:"Planiram, koordiniram"},
      {v:"pricam",  emoji:"🗣️", label:"Pričam/prezentiram",desc:"Govori, debate, mediji"},
      {v:"pisem",   emoji:"✍️", label:"Pišem",             desc:"Blog, priče, novinstvo"},
      {v:"glazbam", emoji:"🎸", label:"Sviram/pjevam",    desc:"Muziciranje, nastup"},
      {v:"kodira",  emoji:"⌨️", label:"Programiram",      desc:"Web, igre, aplikacije"},
      {v:"kuham",   emoji:"🍳", label:"Kuham/stvaram",    desc:"Gastronomija, kreacija"},
    ],
  },
  {
    id: "vrijednosti",
    pitanje: "Što ti je najvažnije u budućem zanimanju?",
    hint: "Odaberi do 3 najvažnija",
    vise: true,
    max: 3,
    opcije: [
      {v:"pomaz",  emoji:"❤️", label:"Pomagati ljudima",   desc:"Medicina, socijalni rad"},
      {v:"zarada", emoji:"💰", label:"Dobra zarada",       desc:"Poslovni, IT, pravo"},
      {v:"kreativ",emoji:"🎭", label:"Kreativnost",        desc:"Dizajn, mediji, art"},
      {v:"sigur",  emoji:"🛡️", label:"Sigurnost posla",   desc:"Javna uprava, obrazovanje"},
      {v:"inovc",  emoji:"🚀", label:"Inovacija",          desc:"Start-up, istraživanje"},
      {v:"presto", emoji:"🏆", label:"Prestiž i status",   desc:"Medicina, pravo, sveučilište"},
      {v:"sloboda",emoji:"🌴", label:"Sloboda/fleksibilnost",desc:"Freelance, poduzetništvo"},
      {v:"putov",  emoji:"✈️", label:"Putovanje",          desc:"Turizam, diplomatija"},
    ],
  },
  {
    id: "okol",
    pitanje: "U kakvom okruženju se zamišljaš na poslu?",
    hint: "Jedna opcija",
    vise: false,
    opcije: [
      {v:"lab",    emoji:"🔬", label:"Laboratorij/istraž.",desc:"Preciznost, eksperiment"},
      {v:"ured",   emoji:"🏢", label:"Ured",               desc:"Organizacija, timski rad"},
      {v:"bolnica",emoji:"🏥", label:"Bolnica/klinika",    desc:"Pacijenti, hitne situacije"},
      {v:"terenu", emoji:"🌿", label:"Na terenu/vani",     desc:"Priroda, fizički rad"},
      {v:"studio", emoji:"🎨", label:"Studio/atelje",      desc:"Kreativni prostor"},
      {v:"skola",  emoji:"🏫", label:"Škola/sveučilište",  desc:"Predavanja, studenti"},
      {v:"dom",    emoji:"🏠", label:"Od kuće/remote",     desc:"Online, fleksibilno"},
      {v:"svijet", emoji:"🌍", label:"Mijenjam lokacije",  desc:"Putovanje, dinamika"},
    ],
  },
  {
    id: "stil",
    pitanje: "Kako preferiraš rješavati probleme?",
    hint: "Odaberi što ti je bliže",
    vise: false,
    opcije: [
      {v:"anal",   emoji:"🧮", label:"Analitički",   desc:"Podaci, logika, preciznost"},
      {v:"kreac",  emoji:"💡", label:"Kreativno",    desc:"Nove ideje, eksperimentiranje"},
      {v:"soc",    emoji:"🤝", label:"Kroz ljude",   desc:"Razgovor, suradnja, empatija"},
      {v:"prakr",  emoji:"🔨", label:"Praktično",    desc:"Rukama, direktno, odmah"},
    ],
  },
];

function AnketaInteresa({ onClose, allStudiji, totalBodova }) {
  const [korak, setKorak]     = React.useState(0);
  const [odabiri, setOdabiri] = React.useState({});
  const [faza, setFaza]       = React.useState("anketa"); // "anketa" | "loading" | "rezultati"
  const [rezultati, setRezultati] = React.useState(null);
  const [aiTekst, setAiTekst]     = React.useState("");

  const k = ANKETA_KORACI[korak];
  const progress = ((korak + 1) / ANKETA_KORACI.length) * 100;

  const toggleOdabir = (korakId, val) => {
    setOdabiri(prev => {
      const curr = prev[korakId] || [];
      const k = ANKETA_KORACI.find(k => k.id === korakId);
      if (!k.vise) return {...prev, [korakId]: [val]};
      if (curr.includes(val)) return {...prev, [korakId]: curr.filter(v => v !== val)};
      if (k.max && curr.length >= k.max) return prev;
      return {...prev, [korakId]: [...curr, val]};
    });
  };

  const isSelected = (korakId, val) => (odabiri[korakId] || []).includes(val);
  const hasSelection = (odabiri[k?.id] || []).length > 0;

  const dalje = () => {
    if (korak < ANKETA_KORACI.length - 1) { setKorak(k => k + 1); }
    else { generirajRezultate(); }
  };
  const nazad = () => {
    if (korak > 0) setKorak(k => k - 1);
    else onClose();
  };

  const generirajRezultate = async () => {
    setFaza("loading");

    // Pripremi sažetak odabira
    const sazetak = ANKETA_KORACI.map(k => {
      const sel = odabiri[k.id] || [];
      const labels = sel.map(v => k.opcije.find(o => o.v === v)?.label || v).join(", ");
      return `${k.pitanje}: ${labels || "nije odabrano"}`;
    }).join("\n");

    // Top studiji korisnika (za kontekst)
    const topStudiji = (allStudiji || [])
      .filter(s => s.chance !== "none")
      .sort((a,b) => b.diff - a.diff)
      .slice(0, 10)
      .map(s => `${s.studij} (${s.grad}), šansa: ${s.chance}`)
      .join("; ");

    const prompt = `Maturant je odgovorio na anketu interesa:
${sazetak}

Njihovi bodovi s mature: ${totalBodova}/1000
Studiji gdje imaju realnu šansu (top 10): ${topStudiji || "nisu uneseni"}

Na temelju njihovih interesa, preporuči im 5 studija koji im NAJVIŠE odgovaraju.
Za svaki studij napiši:
1. Naziv studija i grad (točno kao u listi iznad ako postoji, ili sličan)
2. Zašto im odgovara (1-2 rečenice, konkretno povežite s njihovim odgovorima)
3. Bodovni match: HIGH / MEDIUM / LOW

Odgovori u JSON formatu:
[
  {"studij": "Naziv", "grad": "Grad", "razlog": "...", "match": "HIGH"},
  ...
]
Samo JSON, bez komentara.`;

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          system: "Odgovaraj SAMO u validnom JSON formatu. Bez komentara, bez markdown blokova.",
          messages: [{role: "user", content: prompt}]
        })
      });
      if (!res.ok) throw new Error("API error");
      const tekst = await readSSEStream(res) || "[]";
      // Parse JSON
      const clean = tekst.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setRezultati(parsed);
      setFaza("rezultati");
    } catch {
      setAiTekst("Greška pri generiranju preporuka. Pokušaj ponovo.");
      setFaza("rezultati");
    }
  };

  const matchBoja = (m) => m==="HIGH" ? "var(--green)" : m==="MEDIUM" ? "var(--gold)" : "var(--muted)";
  const matchPct  = (m) => m==="HIGH" ? 90 : m==="MEDIUM" ? 60 : 30;
  const rankEmoji = (i) => i===0?"🥇":i===1?"🥈":i===2?"🥉":`${i+1}.`;

  return (
    <div className="anketa-overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="anketa-modal">
        {/* Header */}
        <div className="anketa-header">
          <div className="anketa-handle"/>
          {faza === "anketa" && (
            <div className="anketa-progress">
              <div className="anketa-progress-fill" style={{width:`${progress}%`}}/>
            </div>
          )}
          <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:10}}>
            <div>
              <div className="anketa-title">
                {faza==="anketa" ? "🎯 Otkrijte što te zanima" : faza==="loading" ? "🤖 Analiziram..." : "✨ Tvoje preporuke"}
              </div>
              <div className="anketa-subtitle">
                {faza==="anketa" ? `Korak ${korak+1} od ${ANKETA_KORACI.length}` : faza==="loading" ? "AI uspoređuje tvoje interese s bazom studija..." : "Na temelju tvojih interesa i bodova"}
              </div>
            </div>
            <button style={{background:"transparent",border:"1px solid var(--border)",borderRadius:8,color:"var(--muted)",fontSize:18,cursor:"pointer",padding:"4px 10px",lineHeight:1,flexShrink:0}} onClick={onClose} aria-label="Zatvori">×</button>
          </div>
        </div>

        {/* FAZA: Anketa */}
        {faza === "anketa" && (
          <>
            <div className="anketa-body">
              <div className="anketa-korak-label">Korak {korak+1} od {ANKETA_KORACI.length}</div>
              <div className="anketa-pitanje">{k.pitanje}</div>
              <div className="anketa-hint">
                {k.hint}
                {k.max && <span style={{color:"var(--gold)",fontWeight:600}}> (max {k.max})</span>}
              </div>
              <div className={`anketa-opcije ${k.opcije.length > 8 ? "" : "cols-3"}`}>
                {k.opcije.map(o => (
                  <div
                    key={o.v}
                    className={`anketa-opcija${isSelected(k.id, o.v) ? " selected" : ""}`}
                    onClick={() => toggleOdabir(k.id, o.v)}
                  >
                    <span className="anketa-opcija-emoji">{o.emoji}</span>
                    <span className="anketa-opcija-label">{o.label}</span>
                    <span className="anketa-opcija-desc">{o.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="anketa-actions">
              <button className="anketa-btn-back" onClick={nazad}>
                {korak === 0 ? "Zatvori" : "← Nazad"}
              </button>
              <button
                className="anketa-btn-primary"
                onClick={dalje}
                disabled={!hasSelection}
              >
                {korak < ANKETA_KORACI.length - 1 ? "Dalje →" : "🤖 Generiraj preporuke →"}
              </button>
            </div>
          </>
        )}

        {/* FAZA: Loading */}
        {faza === "loading" && (
          <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 24px",textAlign:"center",gap:16}}>
            <div style={{fontSize:48}}>🧠</div>
            <div style={{fontFamily:"'Fraunces',serif",fontSize:18,fontWeight:700,color:"var(--txt)"}}>
              AI analizira tvoje interese
            </div>
            <div style={{fontSize:13,color:"var(--muted)",lineHeight:1.7,maxWidth:300}}>
              Uspoređujem tvoje odgovore s <strong style={{color:"var(--txt)"}}>350+ studija</strong> i tvojim bodovima s mature...
            </div>
            <div style={{display:"flex",gap:8,marginTop:8}}>
              {[0,1,2].map(i=>(
                <div key={i} style={{
                  width:10,height:10,borderRadius:"50%",background:"var(--blue)",
                  animation:`ob-dot-pulse 1.4s ${i*0.2}s ease-in-out infinite`
                }}/>
              ))}
            </div>
          </div>
        )}

        {/* FAZA: Rezultati */}
        {faza === "rezultati" && (
          <>
            <div className="anketa-body">
              {aiTekst && (
                <div style={{padding:"12px 14px",borderRadius:10,background:"rgba(240,92,92,.08)",border:"1px solid rgba(240,92,92,.2)",fontSize:13,color:"var(--red)",marginBottom:16}}>
                  ⚠️ {aiTekst}
                </div>
              )}
              {rezultati && rezultati.length > 0 && (
                <>
                  <div style={{fontSize:12,color:"var(--muted)",marginBottom:16,lineHeight:1.6,padding:"10px 12px",background:"rgba(75,123,255,.06)",border:"1px solid rgba(75,123,255,.15)",borderRadius:10}}>
                    💡 Na temelju tvojih interesa i <strong style={{color:"var(--txt)"}}>{totalBodova} bodova</strong> — ovo su studiji koji ti najviše odgovaraju. Klikni za detalje.
                  </div>
                  {rezultati.map((r, i) => (
                    <div key={i} className="anketa-rezultat-item">
                      <div className="anketa-rezultat-rank" style={{color:i===0?"var(--gold)":i===1?"var(--muted)":i===2?"#cd7f32":"var(--muted)"}}>
                        {rankEmoji(i)}
                      </div>
                      <div className="anketa-rezultat-info">
                        <div className="anketa-rezultat-naziv">{r.studij}</div>
                        <div style={{fontSize:10,color:"var(--muted)",marginBottom:4}}>{r.grad}</div>
                        <div className="anketa-rezultat-razlog">{r.razlog}</div>
                        <div className="anketa-rezultat-bar">
                          <div className="anketa-rezultat-bar-fill" style={{
                            width:`${matchPct(r.match)}%`,
                            background:matchBoja(r.match)
                          }}/>
                        </div>
                      </div>
                      <div style={{
                        padding:"4px 8px",borderRadius:6,fontSize:10,fontWeight:700,
                        background:`${matchBoja(r.match)}18`,color:matchBoja(r.match),
                        whiteSpace:"nowrap",flexShrink:0
                      }}>
                        {r.match==="HIGH"?"Odlično":r.match==="MEDIUM"?"Dobro":"Moguće"}
                      </div>
                    </div>
                  ))}
                </>
              )}
              <button
                onClick={()=>{setFaza("anketa");setKorak(0);setRezultati(null);setAiTekst("");}}
                style={{width:"100%",marginTop:12,padding:"10px",borderRadius:10,border:"1px solid var(--border)",background:"transparent",color:"var(--muted)",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}
              >
                ↺ Ponovi anketu
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


/* ══ PRIJEMNI KALKULATOR DATA ════════════════════════════════════════════ */
const PRIJEMNI_FAKULTETI = {
  mef: {
    naziv:"Medicina — MEF Zagreb", emoji:"🏥",
    opis:"Prijemni nosi 600/1000 bodova — biologija, kemija, fizika. Prag 2025: 654 bod.",
    boja:"#3ecf6e", prag:654, prag2024:654,
    sekcije:[
      { id:"matura", naslov:"Državna matura (max 400 bod)", ukupno:400, polja:[
        {key:"mef_prosjek",label:"Opći uspjeh",hint:"(ocjena−1)×60 = max 240",min:2,max:5,step:.1,isFloat:true,faktor:(v)=>Math.round((v-1)*60)},
        {key:"mef_hr",label:"Hrvatski jezik",hint:"% × 0.5 = max 50",min:0,max:100,step:1,faktor:(v)=>Math.round(v*.5)},
        {key:"mef_mat",label:"Matematika A razina",hint:"% × 1.0 = max 100",min:0,max:100,step:1,faktor:(v)=>Math.round(v*1.0)},
        {key:"mef_bio",label:"Biologija A razina",hint:"% × 1.2 = max 120",min:0,max:100,step:1,faktor:(v)=>Math.round(v*1.2)},
        {key:"mef_kem",label:"Kemija A razina",hint:"% × 0.8 = max 80",min:0,max:100,step:1,faktor:(v)=>Math.round(v*.8)},
        {key:"mef_str",label:"Strani jezik",hint:"% × 0.5 = max 50",min:0,max:100,step:1,faktor:(v)=>Math.round(v*.5)},
      ]},
      { id:"prijemni", naslov:"Prijemni ispit 4. srpnja (max 600 bod)", ukupno:600,
        napomena:"Prag prolaznosti 2025: min 50.83% ukupno + min 40% iz svakog predmeta posebno.",
        polja:[
          {key:"mef_p_bio",label:"Biologija",hint:"% × 2.0 = max 200",min:0,max:100,step:1,faktor:(v)=>Math.round(v*2.0)},
          {key:"mef_p_kem",label:"Kemija",hint:"% × 2.0 = max 200",min:0,max:100,step:1,faktor:(v)=>Math.round(v*2.0)},
          {key:"mef_p_fiz",label:"Fizika",hint:"% × 2.0 = max 200",min:0,max:100,step:1,faktor:(v)=>Math.round(v*2.0)},
        ]},
    ],
  },
  af: {
    naziv:"Arhitektura — AF Zagreb", emoji:"🏛️",
    opis:"Prijemni nosi 600/1000 bodova — likovne sposobnosti, prostorna percepcija, opća kultura.",
    boja:"#a78bfa", prag:643, prag2024:658,
    sekcije:[
      { id:"matura", naslov:"Državna matura (max 400 bod)", ukupno:400, polja:[
        {key:"af_prosjek",label:"Opći uspjeh",hint:"(ocjena−1)×60 = max 240",min:2,max:5,step:.1,isFloat:true,faktor:(v)=>Math.round((v-1)*60)},
        {key:"af_hr",label:"Hrvatski jezik",hint:"% × 0.5",min:0,max:100,step:1,faktor:(v)=>Math.round(v*.5)},
        {key:"af_mat",label:"Matematika",hint:"% × 1.0",min:0,max:100,step:1,faktor:(v)=>Math.round(v*1.0)},
        {key:"af_str",label:"Strani jezik",hint:"% × 0.5",min:0,max:100,step:1,faktor:(v)=>Math.round(v*.5)},
        {key:"af_lk",label:"Likovna umjetnost (ako polažeš)",hint:"% × 1.0, nije obvezno",min:0,max:100,step:1,faktor:(v)=>Math.round(v*1.0)},
      ]},
      { id:"prijemni", naslov:"Prijemni ispit lipanj (max 600 bod)", ukupno:600,
        napomena:"Prijave: 20. svibnja – 6. lipnja. Troškovi prijave plaćaju se posebno.",
        polja:[
          {key:"af_p_likov",label:"Likovne i grafičke sposobnosti",hint:"Crtanje, perspektiva — max 200",min:0,max:200,step:5,faktor:(v)=>v},
          {key:"af_p_prostor",label:"Prostorna percepcija",hint:"Test prostornog razmišljanja — max 200",min:0,max:200,step:5,faktor:(v)=>v},
          {key:"af_p_kultura",label:"Opća kultura (arhitektura/art)",hint:"Test iz likovne umjetnosti — max 200",min:0,max:200,step:5,faktor:(v)=>v},
        ]},
    ],
  },
  kif: {
    naziv:"Kineziologija — KIF Zagreb", emoji:"🏃",
    opis:"Prijemni (motorička znanja) nosi 450/900 bodova. Obvezna provjera plivanja.",
    boja:"#2dcfbe", prag:905, prag2024:906,
    sekcije:[
      { id:"srednja", naslov:"Opći uspjeh srednja škola (max 200 bod)", ukupno:200, polja:[
        {key:"kif_prosjek",label:"Prosjek sva 4 razreda",hint:"(ocjena−1)×50 = max 200",min:2,max:5,step:.1,isFloat:true,faktor:(v)=>Math.round((v-1)*50)},
      ]},
      { id:"matura", naslov:"Državna matura (max 250 bod)", ukupno:250, polja:[
        {key:"kif_hr",label:"Hrvatski jezik A razina",hint:"% × 0.9 = max 90",min:0,max:100,step:1,faktor:(v)=>Math.round(v*.9)},
        {key:"kif_mat",label:"Matematika B razina",hint:"% × 0.8 = max 80",min:0,max:100,step:1,faktor:(v)=>Math.round(v*.8)},
        {key:"kif_str",label:"Strani jezik B razina",hint:"% × 0.8 = max 80",min:0,max:100,step:1,faktor:(v)=>Math.round(v*.8)},
      ]},
      { id:"prijemni", naslov:"Prijemni motorička znanja (max 450 bod)", ukupno:450,
        napomena:"Obvezna provjera plivanja (eliminacijska). Prijemni košta 79€. Prijave: 2.–13. lipnja.",
        polja:[
          {key:"kif_p_sport",label:"9 sportskih disciplina",hint:"Atletika, košarka, odbojka, gimnastika... — ukupno bodovi",min:0,max:450,step:10,faktor:(v)=>v},
        ]},
    ],
  },
};

function PrijemniKalkulator({ onClose, totalBodova:mainBodova }) {
  const [aktivniFak, setAktivniFak] = React.useState("mef");
  const [vrijednosti, setVrijednosti] = React.useState({});
  const fak = PRIJEMNI_FAKULTETI[aktivniFak];
  const setVal=(key,val)=>setVrijednosti(v=>({...v,[key]:val}));
  const getVal=(key,def)=>vrijednosti[key]!==undefined?vrijednosti[key]:def;
  const izracun = React.useMemo(()=>{
    const sek={};let uk=0;
    for(const s of fak.sekcije){
      let b=0;
      for(const p of s.polja){const v=getVal(p.key,p.isFloat?4.0:0);b+=p.faktor(parseFloat(v)||0);}
      b=Math.min(s.ukupno,Math.max(0,b));sek[s.id]=b;uk+=b;
    }
    return{sek,uk:Math.round(uk)};
  },[aktivniFak,vrijednosti,fak]);
  const pct=Math.min(100,(izracun.uk/fak.prag)*100);
  const diff=izracun.uk-fak.prag;
  const chance=diff>=30?"high":diff>=-30?"mid":diff>=-80?"low":"none";
  const cc=chance==="high"?"var(--green)":chance==="mid"?"var(--gold)":"var(--red)";
  const ct=chance==="high"?"✓ Dobra šansa":chance==="mid"?"≈ Granično":"✗ Rizično";
  return(
    <div className="pr-modal-overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="pr-modal">
        <div style={{padding:"12px 0 0"}}><div className="pr-handle"/></div>
        <div className="pr-header">
          <div><div className="pr-title">🎓 Prijemni kalkulator</div><div className="pr-subtitle">Detaljni izračun za MEF, AF i KIF · AZVO 2025</div></div>
          <button className="pr-close" onClick={onClose} aria-label="Zatvori">×</button>
        </div>
        <div className="pr-tabs">
          {Object.entries(PRIJEMNI_FAKULTETI).map(([key,f])=>(
            <button key={key} className={`pr-tab${aktivniFak===key?" active":""}`} onClick={()=>setAktivniFak(key)}>
              {f.emoji} {f.naziv.split("—")[0].trim()}
            </button>
          ))}
        </div>
        <div className="pr-body">
          <div style={{padding:"10px 12px",borderRadius:10,background:`${fak.boja}11`,border:`1px solid ${fak.boja}33`,fontSize:12,color:"var(--muted)",marginBottom:4,lineHeight:1.6}}>
            <strong style={{color:fak.boja}}>{fak.emoji} {fak.naziv}</strong><br/>{fak.opis}
          </div>
          {fak.sekcije.map(sek=>(
            <div key={sek.id}>
              <div className="pr-section-title">
                {sek.naslov}
                <span style={{float:"right",color:"var(--txt)",fontWeight:700,letterSpacing:0,textTransform:"none",fontSize:12}}>{izracun.sek[sek.id]||0}/{sek.ukupno}</span>
              </div>
              {sek.polja.map(p=>{
                const val=getVal(p.key,p.isFloat?4.0:0);
                return(
                  <div key={p.key} className="pr-row">
                    <div className="pr-row-label">{p.label}<small>{p.hint}</small></div>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <input type="range" min={p.min||0} max={p.max||100} step={p.step||1} value={val}
                        style={{width:80,accentColor:fak.boja}}
                        onChange={e=>setVal(p.key,p.isFloat?parseFloat(e.target.value):parseInt(e.target.value))}/>
                      <input type="number" min={p.min||0} max={p.max||100} step={p.step||1} value={val}
                        className="pr-input"
                        onChange={e=>{const v=p.isFloat?parseFloat(e.target.value):parseInt(e.target.value);setVal(p.key,Math.min(p.max||100,Math.max(p.min||0,v||0)));}}/>
                      <span className="pr-max">{p.isFloat?"/5":p.max>100?`/${p.max}`:"%"}</span>
                    </div>
                  </div>
                );
              })}
              {sek.napomena&&<div style={{padding:"8px 10px",borderRadius:8,background:"rgba(233,180,70,.06)",border:"1px solid rgba(233,180,70,.15)",fontSize:11,color:"var(--muted)",marginTop:8,lineHeight:1.5}}>⚠️ {sek.napomena}</div>}
            </div>
          ))}
          <div className="pr-result">
            <div className="pr-total">{izracun.uk}</div>
            <div className="pr-total-lbl">od {fak.sekcije.reduce((a,s)=>a+s.ukupno,0)} mogućih bodova</div>
            <div className="pr-breakdown">
              {fak.sekcije.map(s=>(
                <div key={s.id} className="pr-bk-item">
                  <div className="pr-bk-val" style={{color:fak.boja}}>{izracun.sek[s.id]||0}</div>
                  <div className="pr-bk-lbl">{s.naslov.split("(")[0].trim()}</div>
                </div>
              ))}
            </div>
            <div className="pr-prag-box">
              <strong>Prag 2025: {fak.prag} bod</strong> · Prag 2024: {fak.prag2024} bod<br/>
              Tvoji bodovi: <strong style={{color:diff>=0?"var(--green)":"var(--red)"}}>{diff>=0?`+${diff}`:diff} bod od praga</strong>
              <div className="pr-prag-bar"><div className="pr-prag-bar-fill" style={{width:`${pct}%`,background:`linear-gradient(90deg,${fak.boja}88,${fak.boja})`}}/></div>
            </div>
            <div className="pr-chance" style={{background:`${cc}18`,border:`1px solid ${cc}44`,color:cc}}>{ct}</div>
            <div style={{marginTop:10,fontSize:11,color:"var(--muted)"}}>
              Provjeri aktualne uvjete na{" "}
              <a href="https://www.postani-student.hr" target="_blank" rel="noreferrer" style={{color:"var(--blue)",textDecoration:"none"}}>postani-student.hr →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══ ONBOARDING WIZARD ══════════════════════════════════════════════════════
   Prikazuje se samo na prvoj posjeti (kad "maturiraj_onboarded" nije u LS).
   Kratki 3-koračni uvod u kalkulator.
════════════════════════════════════════════════════════════════════════════ */
function OnboardingWizard({ onClose }) {
  const [step, setStep] = React.useState(0);

  const handleFinish = () => {
    try { localStorage.setItem("maturiraj_onboarded", "1"); } catch {}
    onClose();
  };

  const STEPS = [
    {
      emoji: "🎓",
      title: "Dobro došao/la u Maturix!",
      sub: "Kalkulator bodova za upis na fakultete u Hrvatskoj",
      body: "Unesi svoje rezultate mature i odmah vidi na koje studije možeš računati — prema AZVO pravilima za 2025./2026.",
    },
    {
      emoji: "📊",
      title: "Kako funkcionira?",
      sub: "Brzo i precizno",
      body: "Unesi prosjek, postotke s ispita i izborne predmete. Izračunavamo bodove i pokazujemo šansu za svih 350+ studija.",
    },
    {
      emoji: "✨",
      title: "Sve je spremno!",
      sub: "Možeš početi odmah",
      body: "Spremi favourite, uspoređuj studije, koristi AI savjetnika i podijeli rezultate s prijateljem.",
    },
  ];

  const s = STEPS[step];

  return (
    <div className="anketa-overlay" style={{zIndex:1500}} onClick={e=>e.target===e.currentTarget&&handleFinish()}>
      <div className="anketa-modal" style={{maxWidth:420}}>
        <div className="anketa-header">
          <div className="anketa-handle"/>
          <div className="anketa-progress">
            <div className="anketa-progress-fill" style={{width:`${((step+1)/STEPS.length)*100}%`}}/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <div className="anketa-title">{s.title}</div>
              <div className="anketa-subtitle">{s.sub}</div>
            </div>
            <button style={{background:"transparent",border:"1px solid var(--border)",borderRadius:8,color:"var(--muted)",fontSize:18,cursor:"pointer",padding:"4px 10px",lineHeight:1,flexShrink:0}} onClick={handleFinish} aria-label="Zatvori">×</button>
          </div>
        </div>
        <div className="anketa-body" style={{textAlign:"center",paddingTop:28,paddingBottom:20}}>
          <div style={{fontSize:52,marginBottom:16}}>{s.emoji}</div>
          <div style={{fontSize:15,color:"var(--txt)",lineHeight:1.65,maxWidth:320,margin:"0 auto"}}>{s.body}</div>
        </div>
        <div className="anketa-actions">
          {step > 0 && (
            <button className="anketa-btn-back" onClick={()=>setStep(p=>p-1)}>← Natrag</button>
          )}
          {step < STEPS.length - 1 ? (
            <button className="anketa-btn-primary" onClick={()=>setStep(p=>p+1)}>Dalje →</button>
          ) : (
            <button className="anketa-btn-primary" onClick={handleFinish}>🚀 Počni!</button>
          )}
        </div>
      </div>
    </div>
  );
}

function KalkulatorInner() {
  usePageTracking('kalkulator')
  const router       = useRouter();
  const searchParams = useSearchParams();
  const { user, isPaid, isPro } = useAuth();
  const urlData = useMemo(()=>parseShareUrl(),[]);

  const [scores, setScores] = useState(()=>urlData?.scores??loadLS(LS_SCORES,{prosjek:4.0,hr:60,mat:50,strani:65,izb1:0,izb2:0,natjecanja:0,sport:0,prijemni:0}));
  const [profil, setProfil] = useState(()=>loadLS(LS_PROFIL,{ime:"",razred:"4. razred"}));
  const [simDelta,    setSimDelta]    = useState({prosjek:0,hr:0,mat:0,strani:0,izb1:0,izb2:0,prijemni:0});
  const [rightTab,    setRightTab]    = useState("pregled");
  const [search,      setSearch]      = useState("");
  const [polje,       setPolje]       = useState("Sva polja");
  const [grad,        setGrad]        = useState("Svi gradovi");
  const [sort,        setSort]        = useState("chance");
  const [showOnly,    setShowOnly]    = useState("sve");
  const [onlyFavs,    setOnlyFavs]    = useState(false);
  const [copied,      setCopied]      = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const [studijModal, setStudijModal] = useState(null);
  const [selectedGrad,setSelectedGrad]= useState(null);
  const [aiPlan,      setAiPlan]      = useState("");
  const [aiLoading,   setAiLoading]   = useState(false);
  const [showShare,   setShowShare]   = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [showPrijemni, setShowPrijemni] = useState(false);
  const [showAnketa,   setShowAnketa]   = useState(false);
  const [showReferral, setShowReferral] = useState(false);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [showChat,      setShowChat]      = useState(false);
  const [showKb,        setShowKb]        = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("maturiraj_theme") || "dark";
  });
  const [radarStudij,  setRadarStudij]  = useState(null);
  const [notifEmail,   setNotifEmail]   = useState("");
  const [voiceActive,  setVoiceActive]  = useState(false);
  const [voiceField,   setVoiceField]   = useState(null);
  const [voiceText,    setVoiceText]    = useState("");
  const voiceRef = React.useRef(null);
  const [notifChips,   setNotifChips]   = useState(new Set(["rangliste","rezultati"]));
  const [notifSent,    setNotifSent]    = useState(false);
  const [notifLoading, setNotifLoading] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("maturiraj_onboarded");
  });

  const [favoriti, setFavoriti] = useState(()=>{
    if(urlData?.favoriti) return urlData.favoriti;
    return new Set(loadLS(LS_KEY,[]));
  });

  // ── Keyboard shortcuts ────────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)) return;
      const mod = e.metaKey || e.ctrlKey;
      if (e.key==="?"||( mod&&e.key==="/")) { e.preventDefault(); setShowKb(v=>!v); return; }
      if (e.key==="Escape") { setShowKb(false);setShowChat(false);setShowShare(false);setShowPrijemni(false);setShowAnketa(false);setStudijModal(null); return; }
      if (mod&&e.key==="k") { e.preventDefault(); if(!isPro){ setShowPlanModal(true); return; } setShowChat(v=>!v); return; }
      if (mod&&e.key==="s") { e.preventDefault(); if(!isPro){ setShowPlanModal(true); return; } setShowShare(v=>!v); return; }
      if (mod&&e.key==="f") { e.preventDefault(); document.querySelector(".search-input")?.focus(); return; }
      if (mod&&e.key==="l") { e.preventDefault(); setTheme(t=>t==="dark"?"light":"dark"); return; }
      if (e.key==="1"&&!mod) { setRightTab("pregled"); return; }
      if (e.key==="2"&&!mod) { if(isPro) setRightTab("preporuke"); return; }
      if (e.key==="3"&&!mod) { if(isPro) setRightTab("vizualizacija"); return; }
      if (e.key==="4"&&!mod) { if(isPro) setRightTab("simulacija"); return; }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isPro, theme]);

    useEffect(()=>{try{localStorage.setItem(LS_KEY,JSON.stringify([...favoriti]))}catch{}},[favoriti]);
  useEffect(()=>{try{localStorage.setItem(LS_SCORES,JSON.stringify(scores))}catch{}},[scores]);
  useEffect(()=>{try{localStorage.setItem(LS_PROFIL,JSON.stringify(profil))}catch{}},[profil]);

  const setScore   = useCallback((k,v)=>setScores(s=>({...s,[k]:v})),[]);
  const toggleFav  = useCallback((k)=>setFavoriti(p=>{const n=new Set(p);n.has(k)?n.delete(k):n.add(k);return n;}),[]);
  const resetSim   = useCallback(()=>setSimDelta({prosjek:0,hr:0,mat:0,strani:0,izb1:0,izb2:0,prijemni:0}),[]);
  const toggleCmp  = useCallback((s)=>setCompareList(p=>{if(p.find(x=>x.studijKey===s.studijKey))return p.filter(x=>x.studijKey!==s.studijKey);if(p.length>=MAX_CMP)return p;return[...p,s];}),[]);
  const handleCopy = useCallback(()=>{navigator.clipboard.writeText(buildShareUrl(favoriti,scores,profil)).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2500);});},[favoriti,scores,profil]);

  const handleAiPlan = useCallback(async()=>{
    if(!isPro){ setShowPlanModal(true); return; }
    setAiLoading(true);setAiPlan("");
    const top5=STUDIJI_2025.map(s=>{const k=`${s.studij}_${s.grad}`;const b=calcTotal(scores,k);return{...s,bodovi:b,diff:b-s.prag,chance:getChance(b,s.prag)};}).filter(s=>s.chance!=="none").sort((a,b)=>b.diff-a.diff).slice(0,5);
    const prompt=`Ti si savjetnik za upis na fakultet u Hrvatskoj. Maturant ima:\nProsjek: ${scores.prosjek}/5.0\nHrvatski: ${scores.hr}%\nMatematika: ${scores.mat}%\nStrani: ${scores.strani}%\nIzb1: ${scores.izb1}%\nIzb2: ${scores.izb2}%\nUkupno: ${calcTotal(scores)} bodova\n\nTop 5 studija:\n${top5.map((s,i)=>`${i+1}. ${s.studij} (${s.grad}) — prag:${s.prag}, moji:${s.bodovi}, razlika:${s.diff>0?"+":""}${Math.round(s.diff)}`).join("\n")}\n\nNapiši konkretan plan poboljšanja u 3-4 paragrafa na hrvatskom. Budi specifičan o predmetima i bodovima. Završi ohrabrujuće.`;
    try{
      const r=await fetch("/api/ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:null,messages:[{role:"user",content:prompt}]})});
      if(!r.ok)throw new Error("API error");
      setAiPlan(await readSSEStream(r)||"Greška.");
    }catch{setAiPlan("Greška u spajanju.");}
    setAiLoading(false);
  },[scores, isPro]);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("maturiraj_theme", theme); } catch {}
  }, [theme]);

  // Praćenje dolaznih referrala — kad netko otvori link s ?ref=kod
  useEffect(() => {
    const refCode = searchParams.get("ref");
    if (!refCode) return;
    try {
      // Nađi referrera u localStorage svih korisnika (simulacija bez backenda)
      // U produkciji bi ovo išlo na API endpoint
      const myRef = JSON.parse(localStorage.getItem(LS_REFERRAL) || "{}");
      if (myRef.code && myRef.code !== refCode) {
        // Netko je došao s tuđim linkom — povećaj brojač referrera
        // (simulirano lokalno; u produkciji backend handlera)
        const key = "maturiraj_ref_" + refCode;
        const existing = parseInt(localStorage.getItem(key) || "0");
        localStorage.setItem(key, existing + 1);
      }
    } catch {}
    // Očisti ref param iz URL-a
    window.history.replaceState({}, "", "/kalkulator");
  }, [searchParams]);

  // Restore po povratku s /pro
  useEffect(() => {
    if (searchParams.get("restored") !== "1") return;
    try {
      const s = sessionStorage.getItem("maturiraj_presave_scores");
      const pr = sessionStorage.getItem("maturiraj_presave_profil");
      const fav = sessionStorage.getItem("maturiraj_presave_favoriti");
      if (s)   setScores(JSON.parse(s));
      if (pr)  setProfil(JSON.parse(pr));
      if (fav) setFavoriti(new Set(JSON.parse(fav)));
      sessionStorage.removeItem("maturiraj_presave_scores");
      sessionStorage.removeItem("maturiraj_presave_profil");
      sessionStorage.removeItem("maturiraj_presave_favoriti");
    } catch {}
    window.history.replaceState({}, "", "/kalkulator");
  }, [searchParams]);

  const {prosjek,hr,mat,strani,izb1,izb2,natjecanja,sport,prijemni}=scores;
  const {prosjek:dp,hr:dhr,mat:dmat,strani:dstr,izb1:di1,izb2:di2,prijemni:dpr}=simDelta;

  const totalBodova = useMemo(()=>calcTotal(scores),[prosjek,hr,mat,strani,izb1,izb2,natjecanja,sport,prijemni]); // eslint-disable-line
  const simScores   = useMemo(()=>({...scores,prosjek:Math.min(5,prosjek+dp),hr:Math.min(100,hr+dhr),mat:Math.min(100,mat+dmat),strani:Math.min(100,strani+dstr),izb1:Math.min(100,izb1+di1),izb2:Math.min(100,izb2+di2),prijemni:Math.min(100,prijemni+dpr)}),[prosjek,hr,mat,strani,izb1,izb2,natjecanja,sport,prijemni,dp,dhr,dmat,dstr,di1,di2,dpr]); // eslint-disable-line
  const simTotal    = useMemo(()=>calcTotal(simScores),[simScores.prosjek,simScores.hr,simScores.mat,simScores.strani,simScores.izb1,simScores.izb2,simScores.natjecanja,simScores.sport,simScores.prijemni]); // eslint-disable-line
  const simGain     = simTotal-totalBodova;

  const simUnlocked = useMemo(()=>STUDIJI_2025.filter(s=>{
    const k=`${s.studij}_${s.grad}`;
    const pr=getChance(calcTotal(scores,k),s.prag);
    const po=getChance(calcTotal(simScores,k),s.prag);
    return(pr==="none"||pr==="low")&&(po==="high"||po==="mid");
  }),[simScores.prosjek,simScores.hr,simScores.mat,simScores.strani,simScores.izb1,simScores.izb2,simScores.natjecanja,simScores.sport,simScores.prijemni,prosjek,hr,mat,strani,izb1,izb2,natjecanja,sport,prijemni]); // eslint-disable-line

  const allStudiji = useMemo(()=>STUDIJI_2025.map(s=>{
    const k=`${s.studij}_${s.grad}`;const b=calcTotal(scores,k);
    return{...s,studijKey:k,mojiBodovi:b,chance:getChance(b,s.prag),diff:b-s.prag,imaFormulu:STUDIJI_S_PRIJEMNIM.has(k),isFav:favoriti.has(k),trend:getTrend(k,s.prag)};
  }),[prosjek,hr,mat,strani,izb1,izb2,natjecanja,sport,prijemni,favoriti]); // eslint-disable-line

  // Glasovni unos — Web Speech API
  const startVoice = useCallback((fieldKey) => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert("Tvoj preglednik ne podržava glasovni unos. Pokušaj Chrome."); return; }
    // Zaustavi ako već sluša isti field
    if (voiceRef.current) { voiceRef.current.stop(); voiceRef.current = null; setVoiceActive(false); setVoiceField(null); return; }
    const rec = new SR();
    rec.lang = "hr-HR";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    voiceRef.current = rec;
    setVoiceActive(true);
    setVoiceField(fieldKey);
    setVoiceText("Slušam... izgovori broj ili postotak");
    rec.onresult = (e) => {
      const raw = e.results[0][0].transcript.toLowerCase().trim();
      setVoiceText(`\u010cujem: "${raw}"`);
      // Izvuci broj iz govora — npr. "sedamdeset pet posto" → 75, "4.2" → 4.2
      const numMatch = raw.match(/(\d+[.,]?\d*)/);
      if (numMatch) {
        const num = parseFloat(numMatch[1].replace(",", "."));
        if (fieldKey === "prosjek") {
          const clamped = Math.min(5, Math.max(2, num));
          setScore("prosjek", Math.round(clamped * 10) / 10);
          setVoiceText("✓ Prosjek postavljen na " + clamped.toFixed(1));
        } else {
          const clamped = Math.min(100, Math.max(0, Math.round(num)));
          setScore(fieldKey, clamped);
          setVoiceText("✓ Postavljeno na " + clamped + "%");
        }
      } else {
        setVoiceText('Nisam razumio. Poku\u0161aj re\u0107i samo broj, npr. "sedamdeset pet".');
      }
    };
    rec.onerror = () => { setVoiceText("Greška mikrofona. Provjeri dozvole."); };
    rec.onend = () => { voiceRef.current = null; setVoiceActive(false); setVoiceField(null); setTimeout(() => setVoiceText(""), 2000); };
    rec.start();
  }, [voiceActive]);

  const toggleNotifChip = useCallback((chip) => {
    setNotifChips(p => {
      const n = new Set(p);
      n.has(chip) ? n.delete(chip) : n.add(chip);
      return n;
    });
  }, []);

  const handleNotifSubmit = useCallback(async () => {
    if (!notifEmail || !notifEmail.includes("@")) return;
    setNotifLoading(true);
    // Spremi u localStorage (bez backenda)
    try {
      const existing = JSON.parse(localStorage.getItem("maturiraj_notif") || "[]");
      const entry = {
        email: notifEmail,
        bodovi: totalBodova,
        favoriti: [...favoriti].slice(0, 5),
        chips: [...notifChips],
        datum: new Date().toISOString(),
      };
      localStorage.setItem("maturiraj_notif", JSON.stringify([...existing, entry]));
    } catch {}
    // Simuliraj slanje (u produkciji bi ovo išlo na API endpoint)
    await new Promise(r => setTimeout(r, 800));
    setNotifSent(true);
    setNotifLoading(false);
  }, [notifEmail, notifChips, totalBodova, favoriti]);

  const goToPro = useCallback(() => {
    try {
      sessionStorage.setItem("maturiraj_presave_scores",  JSON.stringify(scores));
      sessionStorage.setItem("maturiraj_presave_profil",  JSON.stringify(profil));
      sessionStorage.setItem("maturiraj_presave_favoriti", JSON.stringify([...favoriti]));
    } catch {}
    router.push("/pro?from=kalkulator");
  }, [scores, profil, favoriti, router]);

  const shareUrl = useCallback(() => buildShareUrl(favoriti, scores, profil), [favoriti, scores, profil]);
  const handleShareLink = useCallback(() => {
    navigator.clipboard.writeText(shareUrl()).then(() => { setShareCopied(true); setTimeout(()=>setShareCopied(false),2500); });
  }, [shareUrl]);
  const handleShareWhatsApp = useCallback(() => {
    const nl='\n';
    const top3=allStudiji.filter(s=>s.chance!=="none").sort((a,b)=>{const o={high:0,mid:1,low:2};return o[a.chance]-o[b.chance]||b.diff-a.diff;}).slice(0,3);
    const text=['🎓 maturiraj.hr kalkulator','Moji bodovi: *'+totalBodova+'/1000*',top3.length>0?(nl+'Top šanse:'+nl+top3.map(s=>'✅ '+s.studij+' ('+s.grad+')').join(nl)):'',nl+'🔗 '+shareUrl()].filter(Boolean).join(nl);
    window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank');
  }, [allStudiji, totalBodova, shareUrl]);
  const handleNativeShare = useCallback(async () => {
    const shareData={title:'maturiraj.hr — Moji bodovi',text:'Imam '+totalBodova+'/1000 bodova!',url:shareUrl()};
    if(navigator.share&&navigator.canShare?.(shareData)){try{await navigator.share(shareData);}catch{}}else{handleShareLink();}
  }, [totalBodova, shareUrl, handleShareLink]);
  const handleShareInstagram = useCallback(() => {
    navigator.clipboard.writeText(shareUrl());
    window.open('https://www.instagram.com/','_blank');
    alert('Link kopiran! Zalijepi u Instagram Stories sticker.');
  }, [shareUrl]);

  const filtered = useMemo(()=>{
    let list=[...allStudiji];
    if(onlyFavs)list=list.filter(s=>s.isFav);
    if(showOnly==="fav")list=list.filter(s=>s.isFav);
    else if(showOnly!=="sve")list=list.filter(s=>s.chance===showOnly);
    if(search){const q=search.toLowerCase();list=list.filter(s=>s.studij.toLowerCase().includes(q)||s.fakultet.toLowerCase().includes(q)||s.grad.toLowerCase().includes(q));}
    if(polje!=="Sva polja")list=list.filter(s=>s.polje===polje);
    if(grad!=="Svi gradovi")list=list.filter(s=>s.grad===grad);
    list.sort((a,b)=>{
      if(a.isFav&&!b.isFav)return -1;if(!a.isFav&&b.isFav)return 1;
      if(sort==="prag")return b.prag-a.prag;if(sort==="naziv")return a.studij.localeCompare(b.studij);if(sort==="trend")return(b.trend.diff??0)-(a.trend.diff??0);
      const o={high:0,mid:1,low:2,none:3};return o[a.chance]-o[b.chance]||b.diff-a.diff;
    });
    return list;
  },[allStudiji,search,polje,grad,sort,showOnly,onlyFavs]);

  const vizStudiji = useMemo(()=>{
    let list=[...allStudiji];
    if(selectedGrad)list=list.filter(s=>s.grad===selectedGrad);
    return list.filter(s=>s.chance!=="none").sort((a,b)=>b.diff-a.diff).slice(0,20);
  },[allStudiji,selectedGrad]);

  const preporuke = useMemo(()=>allStudiji.filter(s=>s.chance!=="none").sort((a,b)=>{const o={high:0,mid:1,low:2};return o[a.chance]-o[b.chance]||b.diff-a.diff;}).slice(0,8),[allStudiji]);

  const counts = useMemo(()=>({
    high:allStudiji.filter(s=>s.chance==="high").length,
    mid: allStudiji.filter(s=>s.chance==="mid").length,
    low: allStudiji.filter(s=>s.chance==="low").length,
    fav: favoriti.size,
  }),[allStudiji,favoriti]);

  const maxGain=(k)=>k==="prosjek"?parseFloat((5-prosjek).toFixed(1)):100-scores[k];
  const barPct=Math.min(100,(totalBodova/1000)*100);
  const simBarPct=Math.min(100,(simTotal/1000)*100);
  const activeFilters=[polje!=="Sva polja"&&{key:"polje",label:polje,clear:()=>setPolje("Sva polja")},grad!=="Svi gradovi"&&{key:"grad",label:grad,clear:()=>setGrad("Svi gradovi")}].filter(Boolean);

  return(
    <>
      <style>{CSS}</style>

      {studijModal&&<StudijModal studij={studijModal} totalBodova={totalBodova} onClose={()=>setStudijModal(null)}/>}

      {showCompare&&compareList.length>0&&(
        <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&setShowCompare(false)}>
          <div className="modal-box">
            <div className="modal-header">
              <div className="modal-title">Usporedba studija</div>
              <button className="modal-close" onClick={()=>setShowCompare(false)} aria-label="Zatvori">×</button>
            </div>
            <div className={`compare-grid cols-${compareList.length}`} style={{marginTop:16}}>
              {compareList.map((s,ci)=>{
                const diffovi=compareList.map(x=>x.diff);
                const winner=diffovi[ci]===Math.max(...diffovi);
                return(
                  <div key={s.studijKey} className={`compare-col ${winner?"compare-winner":""}`}>
                    <button className="compare-remove" onClick={()=>toggleCmp(s)} aria-label="Ukloni iz usporedbe">×</button>
                    <div className="compare-col-title">{s.studij}</div>
                    <div className="compare-col-fak">{s.fakultet}·{s.grad}</div>
                    {[
                      {label:"Moji bodovi",val:s.mojiBodovi,best:s.mojiBodovi===Math.max(...compareList.map(x=>x.mojiBodovi))},
                      {label:"Prag 2025",val:s.prag,best:s.prag===Math.min(...compareList.map(x=>x.prag))},
                      {label:"Razlika",val:`${s.diff>0?"+":""}${Math.round(s.diff)}`,best:winner},
                      {label:"Trend",val:s.trend.label,best:false},
                      {label:"Šansa",val:chanceLabel(s.chance),best:s.chance==="high"},
                    ].map(({label,val,best})=>(
                      <div key={label} className="compare-row">
                        <span className="compare-row-label">{label}</span>
                        <span className="compare-row-val" style={best?{color:"var(--green)"}:{}}>{val}</span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="kalk-wrap">
        <div className="print-header" style={{marginBottom:24}}>
          <div style={{fontSize:22,fontWeight:700,marginBottom:4}}>Maturix — Kalkulator</div>
          <div style={{fontSize:13,color:"#555"}}>{profil.ime&&`${profil.ime} · `}Ukupno: {totalBodova}/1000</div>
          <hr style={{margin:"12px 0",borderColor:"#ddd"}}/>
        </div>

        <button className="back-btn" onClick={()=>router.back()}>
          <span className="arrow">←</span> Natrag na početnu
        </button>

        <div className="kalk-header">
          <div className="kalk-eyebrow"><span/> Maturix · Kalkulator bodova <span/></div>
          <h1 className="kalk-title">Koliko bodova <em>imaš</em>?</h1>
          <p className="kalk-sub">Unesi rezultate mature i vidi na koje fakultete možeš računati.</p>
        </div>

        <div className="kalk-grid">
          {/* ── Lijeva kolona ── */}
          <div>
            <div className="profil-card">
              <div className="profil-row">
                <div className="profil-avatar">🎓</div>
                <input className="profil-name-input" placeholder="Upiši svoje ime..." value={profil.ime}
                  onChange={e=>setProfil(p=>({...p,ime:e.target.value}))} maxLength={40}/>
              </div>
              <div className="profil-meta">
                <span className="profil-badge">📊 {totalBodova} bod</span>
                <span className="profil-badge">♥ {counts.fav} favorita</span>
                {counts.high>0&&<span className="profil-badge" style={{background:"rgba(62,207,110,.12)",color:"var(--green)",borderColor:"rgba(62,207,110,.2)"}}>✓ {counts.high} dobra šansa</span>}
                {(()=>{try{const r=JSON.parse(localStorage.getItem(LS_REFERRAL)||"{}");return r.isAmbassador?<span className="profil-badge" style={{background:"rgba(124,92,252,.12)",color:"var(--violet)",borderColor:"rgba(124,92,252,.2)"}}>🏅 Ambassador</span>:null;}catch{return null;}})()}
              </div>
            </div>

            <div className="kcard">
              <div className="kcard-title">Unesi svoje rezultate</div>

              <div className="score-section">
                <div className="score-section-label">Prosjek ocjena</div>
                <div className="score-row">
                  <div className="score-label">Opći uspjeh<small>2.0–5.0</small></div>
                  <div className="score-input-wrap">
                    <input type="range" min="2" max="5" step=".1" className="score-slider" value={prosjek} onChange={e=>setScore("prosjek",parseFloat(e.target.value))}/>
                    <input type="number" min="2" max="5" step=".1" className="score-input" value={prosjek} onChange={e=>setScore("prosjek",Math.min(5,Math.max(2,parseFloat(e.target.value)||2)))}/>
                    <button className={`voice-btn${voiceField==="prosjek"?" listening":""}`} onClick={()=>startVoice("prosjek")} title="Glasovni unos">🎤</button>
                  </div>
                </div>
              </div>

              <div className="score-section">
                <div className="score-section-label">Državna matura — % riješenosti</div>
                {[{key:"hr",label:"Hrvatski jezik",hint:"Obvezni ispit"},{key:"mat",label:"Matematika",hint:"Obvezni ispit"},{key:"strani",label:"Strani jezik",hint:"Engleski / Njemački..."},{key:"izb1",label:"Izborni predmet 1",hint:"0 = ne polažem"},{key:"izb2",label:"Izborni predmet 2",hint:"0 = ne polažem"}].map(({key,label,hint})=>(
                  <div key={key} className="score-row">
                    <div className="score-label">{label}<small>{hint}</small></div>
                    <div className="score-input-wrap">
                      <input type="range" min="0" max="100" step="1" className="score-slider" value={scores[key]} onChange={e=>setScore(key,parseInt(e.target.value,10))}/>
                      <input type="number" min="0" max="100" className="score-input" value={scores[key]} onChange={e=>setScore(key,Math.min(100,Math.max(0,parseInt(e.target.value,10)||0)))}/>
                      <span className="score-max">%</span>
                      <button className={`voice-btn${voiceField===key?" listening":""}`} onClick={()=>startVoice(key)} title="Glasovni unos">🎤</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="score-section">
                <div className="score-section-label">Dodatni bodovi</div>
                {[{key:"natjecanja",label:"Natjecanja / olimpijade",hint:"Državno ~20–50 bod",max:100},{key:"sport",label:"Kategorizirani sportaš",hint:"A/B/C kategorija",max:60}].map(({key,label,hint,max})=>(
                  <div key={key} className="score-row">
                    <div className="score-label">{label}<small>{hint}</small></div>
                    <div className="score-input-wrap">
                      <input type="range" min="0" max={max} step="5" className="score-slider" value={scores[key]} onChange={e=>setScore(key,parseInt(e.target.value,10))}/>
                      <input type="number" min="0" max={max} className="score-input" value={scores[key]} onChange={e=>setScore(key,Math.min(max,Math.max(0,parseInt(e.target.value,10)||0)))}/>
                      <span className="score-max">bod</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="score-section">
                <div className="score-section-label">Prijemni ispit</div>
                <div className="score-row">
                  <div className="score-label">Bodovi s prijemnog<small>Medicina, Arhitektura, KIF...</small></div>
                  <div className="score-input-wrap">
                    <input type="range" min="0" max="100" step="1" className="score-slider" value={prijemni} onChange={e=>setScore("prijemni",parseInt(e.target.value,10))}/>
                    <input type="number" min="0" max="100" className="score-input" value={prijemni} onChange={e=>setScore("prijemni",Math.min(100,Math.max(0,parseInt(e.target.value,10)||0)))}/>
                    <span className="score-max">%</span>
                  </div>
                </div>
                <div className="prijemni-notice"><strong>Napomena:</strong> Utječe samo na studije koji ga zahtijevaju.</div>
              <button className="pr-open-btn" onClick={()=>{ if(!isPro){ setShowPlanModal(true); return; } setShowPrijemni(true); }} style={{marginTop:10}}>
                🎓 Otvori detaljni kalkulator prijemnog ispita
                <span style={{marginLeft:"auto",fontSize:10,opacity:.7}}>{isPro ? "MEF · AF · KIF →" : "🔒 Pro"}</span>
              </button>
              </div>

              {voiceText&&(
                <div className="voice-bar">
                  {voiceActive&&<div className="voice-bar-dot"/>}
                  <span>{voiceText}</span>
                </div>
              )}
              <div className="total-box">
                <div className="total-label">Procijenjeni ukupni bodovi</div>
                <div className="total-value">{totalBodova}</div>
                <div className="total-max">od 1000 mogućih bodova</div>
              </div>

              {/* ── PERCENTIL ── */}
              {isPro&&(()=>{
                const pct = getPercentil(totalBodova);
                const lbl = percentilLabel(pct);
                return (
                  <div className="percentil-card">
                    <div className="percentil-header">
                      <div className="percentil-emoji">{lbl.emoji}</div>
                      <div>
                        <div className="percentil-title">Tvoj percentil</div>
                        <div className="percentil-subtitle">Usporedba s ostalim maturantima</div>
                      </div>
                      <div style={{marginLeft:"auto",textAlign:"right"}}>
                        <div className="percentil-value" style={{color:lbl.color}}>{pct}%</div>
                      </div>
                    </div>
                    <div className="percentil-desc">{lbl.txt}</div>
                    <div className="percentil-bar-track">
                      <div className="percentil-bar-fill" style={{width:`${pct}%`,background:`linear-gradient(90deg,var(--blue),${lbl.color})`}}/>
                    </div>
                    <div className="percentil-bar-labels">
                      <span className="percentil-bar-label">0%</span>
                      <span className="percentil-bar-label">Prosjek</span>
                      <span className="percentil-bar-label">Top 1%</span>
                    </div>
                    <div className="percentil-disclaimer">Procjena na temelju distribucije za 2025./2026.</div>
                  </div>
                );
              })()}
            </div>

            {/* ── NOTIFIKACIJE ── */}
            <div className="notif-card">
              <div className="notif-title">🔔 Javi mi kad izlaze rang-liste</div>
              <div className="notif-sub">Upiši email i dobij obavijest za termine koji su važni za tebe.</div>

              {/* Termine chips */}
              <div className="notif-termine">
                <div className="notif-termine-title">📅 Ključni datumi 2025./2026.</div>
                {[
                  {datum:"1. velj. 2026",  label:"Prijave studija otvorene"},
                  {datum:"28. apr. 2026",  label:"Prve orijentacijske rang-liste"},
                  {datum:"9. srp. 2026",   label:"Privremene rang-liste"},
                  {datum:"16. srp. 2026",  label:"Konačne rang-liste — ljetni rok"},
                  {datum:"17. ruj. 2026",  label:"Konačne rang-liste — jesenski rok"},
                ].map(t=>(
                  <div key={t.datum} className="notif-termine-item">
                    <span className="notif-termine-datum">{t.datum}</span>
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>

              {/* Odabir obavijesti */}
              <div style={{marginTop:12,marginBottom:10}}>
                <div style={{fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"var(--muted)",marginBottom:7}}>Obavijesti me za:</div>
                <div className="notif-chips">
                  {[
                    {k:"rangliste",  label:"📋 Rang-liste"},
                    {k:"rezultati",  label:"📊 Rezultati mature"},
                    {k:"prijemni",   label:"🎓 Prijemni ispiti"},
                    {k:"upisi",      label:"✍️ Rokovi prijava"},
                  ].map(c=>(
                    <div key={c.k} className={`notif-chip${notifChips.has(c.k)?" on":""}`} onClick={()=>toggleNotifChip(c.k)}>
                      {notifChips.has(c.k)&&<span>✓</span>}{c.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Email unos */}
              {!notifSent ? (
                <>
                  <div className="notif-input-row">
                    <input
                      type="email"
                      className="notif-input"
                      placeholder="tvoj@email.com"
                      value={notifEmail}
                      onChange={e=>setNotifEmail(e.target.value)}
                      onKeyDown={e=>e.key==="Enter"&&handleNotifSubmit()}
                    />
                    <button
                      className="notif-btn"
                      onClick={handleNotifSubmit}
                      disabled={notifLoading||!notifEmail.includes("@")||notifChips.size===0}
                    >
                      {notifLoading?"...":"Prijavi se"}
                    </button>
                  </div>
                  <div style={{fontSize:10,color:"var(--muted)",marginTop:6}}>
                    Bez spama. Odjava jednim klikom. Email se čuva lokalno.
                  </div>
                </>
              ) : (
                <div className="notif-success">
                  <span style={{fontSize:20}}>✓</span>
                  <div>
                    <div>Prijavljeni ste za obavijesti!</div>
                    <div style={{fontSize:11,fontWeight:400,opacity:.8,marginTop:2}}>{notifEmail} · {notifChips.size} kategorija</div>
                  </div>
                </div>
              )}
            </div>

            {/* ── REFERRAL GUMB ── */}
            <button className="ref-trigger-btn" onClick={()=>setShowReferral(true)}>
              <span style={{fontSize:18}}>🏅</span>
              <div style={{flex:1,textAlign:"left"}}>
                <div>Pozovi prijatelja → osvoji Ambassador badge</div>
                <div style={{fontSize:10,fontWeight:400,color:"var(--muted)",marginTop:1}}>Podijeli kalkulator i skupi 3 referrala</div>
              </div>
              <span style={{fontSize:12,opacity:.6}}>→</span>
            </button>

            <div className="legenda" style={{marginTop:12}}>
              <div className="leg-item"><div className="leg-dot high"/><span>Dobra šansa (+30)</span></div>
              <div className="leg-item"><div className="leg-dot mid" /><span>Granično (±30)</span></div>
              <div className="leg-item"><div className="leg-dot low" /><span>Rizično</span></div>
              <div className="leg-item"><div className="leg-dot none"/><span>Premalo bodova</span></div>
            </div>
            <div className="notice" style={{marginTop:10}}>
              <strong>Napomena:</strong> Pragovi su minimalni bodovi iz 2025. (AZVO). Orijentacijski alat.
            </div>
          </div>

          {/* ── Desna kolona ── */}
          <div className="kcard">
            <div className="main-tabs">
              {[
                {k:"pregled",       label:"📋 Pregled",        free:true},
                {k:"preporuke",     label:"⭐ Preporuke",      free:false},
                {k:"vizualizacija", label:"📊 Vizualizacija",  free:false},
                {k:"simulacija",    label:"🔮 Simulacija",     free:false},
              ].map(({k,label,free})=>(
                <button key={k} className={`main-tab ${rightTab===k?"active":""}`} onClick={()=>{if(!free&&!isPro){setShowPlanModal(true);return;}setRightTab(k);}}>{label}{!free&&!isPro&&<span className="tab-lock-badge">🔒</span>}</button>
              ))}
            </div>

            {/* ── TAB: Pregled ── */}
            {rightTab==="pregled"&&(
              <>
                <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap"}}>
                  {[{key:"sve",label:"Svi",count:STUDIJI_2025.length,color:"var(--muted)"},{key:"high",label:"Dobra šansa",count:counts.high,color:"var(--green)"},{key:"mid",label:"Granično",count:counts.mid,color:"var(--gold)"},{key:"low",label:"Rizično",count:counts.low,color:"var(--red)"},{key:"fav",label:"Favoriti ♥",count:counts.fav,color:"var(--pink)",isFavTab:true}].map(({key,label,count,color,isFavTab})=>(
                    <button key={key} className={`tab-btn ${isFavTab?"fav-tab":""} ${showOnly===key?"active":""}`} onClick={()=>{setShowOnly(key);setOnlyFavs(key==="fav");}} style={{flex:1,textAlign:"center",minWidth:60}}>
                      <div style={{color,fontSize:16,fontWeight:700,fontFamily:"'Fraunces',serif",lineHeight:1}}>{count}</div>
                      <div style={{fontSize:10,marginTop:2}}>{label}</div>
                    </button>
                  ))}
                </div>

                {counts.fav>0&&(
                  <div className="export-toolbar">
                    <span className="export-label">♥ {counts.fav} favorita</span>
                    <button className={`export-btn ${copied?"copied":""}`} onClick={handleCopy}>{copied?"✓ Kopirano!":"🔗 Kopiraj link"}</button>
                    <button className="export-btn" onClick={()=>window.print()}>🖨️ PDF</button>
                  </div>
                )}

                {compareList.length>0&&(
                  <button onClick={()=>setShowCompare(true)} style={{width:"100%",marginBottom:12,padding:"9px 14px",borderRadius:10,background:"rgba(45,207,190,.1)",border:"1px solid rgba(45,207,190,.3)",color:"var(--teal)",font:"600 13px 'DM Sans',sans-serif",cursor:"pointer"}}>
                    ⚖️ Usporedi {compareList.length} {compareList.length===1?"studij":"studija"} →
                  </button>
                )}

                <input type="text" className="search-input" placeholder="🔍  Pretraži studij, fakultet ili grad..." value={search} onChange={e=>setSearch(e.target.value)}/>

                <div className="filter-bar">
                  <div className="filter-select-wrap">
                    <label className="filter-select-label">Grad</label>
                    <select className={`filter-select ${grad!=="Svi gradovi"?"has-value":""}`} value={grad} onChange={e=>setGrad(e.target.value)}>
                      {GRADOVI.map(g=><option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                  <div className="filter-select-wrap">
                    <label className="filter-select-label">Područje studija</label>
                    <select className={`filter-select ${polje!=="Sva polja"?"has-value":""}`} value={polje} onChange={e=>setPolje(e.target.value)}>
                      {POLJA.map(p=><option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                {activeFilters.length>0&&(
                  <div className="active-filters">
                    {activeFilters.map(({key,label,clear})=>(
                      <button key={key} className="active-tag" onClick={clear}>{label}<span style={{marginLeft:4}}>×</span></button>
                    ))}
                    {activeFilters.length>1&&<button className="active-tag" onClick={()=>{setPolje("Sva polja");setGrad("Svi gradovi");}} style={{opacity:.7}}>Obriši sve<span style={{marginLeft:4}}>×</span></button>}
                  </div>
                )}

                <button className={`filter-pill-fav ${onlyFavs?"active":""}`} onClick={()=>{setOnlyFavs(v=>!v);if(!onlyFavs)setShowOnly("sve");}}>
                  ♥ Samo favoriti {counts.fav>0?`(${counts.fav})`:""}
                </button>

                <div className="sort-row">
                  <span className="sort-label">Sortiranje:</span>
                  {[{key:"chance",label:"Po šansi"},{key:"prag",label:"Po pragu"},{key:"trend",label:"Po trendu"},{key:"naziv",label:"Abecedno"}].map(({key,label})=>(
                    <button key={key} className={`sort-btn ${sort===key?"active":""}`} onClick={()=>setSort(key)}>{label}</button>
                  ))}
                </div>

                <div className="results-count">{isPaid?<>Prikazano <strong>{filtered.length}</strong> studija</>:<>Pronađeno <strong>{filtered.length}</strong> studija — otključaj s planom</>} — <span style={{fontSize:11,color:"var(--muted)"}}>klikni na studij za detalje i grafikon</span></div>

                <div className="results-paywall-wrap" style={{position:"relative"}}>
                <div className="results-scroll">
                  {filtered.length===0&&(showOnly==="fav"||onlyFavs)?(
                    <div className="fav-empty"><div className="icon">🤍</div><p>Još nemaš favorita.<br/>Klikni <strong>♥</strong>.</p></div>
                  ):filtered.length===0?(
                    <div className="empty-state"><div className="icon">🔍</div><p>Nema rezultata.</p></div>
                  ):(
                    filtered.map((s,i)=>{
                      const pct=Math.min(100,Math.max(0,(s.mojiBodovi/s.prag)*100));
                      const bc=s.chance==="high"?"var(--green)":s.chance==="mid"?"var(--gold)":s.chance==="low"?"var(--red)":"var(--muted)";
                      const inComp=compareList.some(c=>c.studijKey===s.studijKey);
                      return(
                        <div key={i} className={`result-item chance-${s.chance}${s.isFav?" is-fav":""}${!isPaid?" blurred":""}`} onClick={()=>{if(!isPaid)return;setStudijModal(s);}}>
                          <div>
                            <div className="result-name">{s.studij}{s.imaFormulu&&<span className="formula-badge">posebna formula</span>}</div>
                            <div className="result-fak">{s.fakultet}·<span style={{fontSize:10,opacity:.7}}>{s.grad}</span></div>
                            <div className="trend-row">
                              <span className={`trend-badge ${s.trend.tip}`}>{s.trend.label}</span>
                              {s.trend.diff!==null&&<span style={{fontSize:10,color:"var(--muted)"}}>2023:{PRAG_2023[s.studijKey]}</span>}
                            </div>
                            <div className="diff-bar-wrap">
                              <div className="diff-bar-bg"><div className="diff-bar-fill" style={{width:`${pct}%`,background:bc}}/></div>
                              <span className="diff-text" style={{color:bc}}>{s.diff>0?`+${Math.round(s.diff)}`:Math.round(s.diff)} bod</span>
                            </div>
                          </div>
                          <div className="result-prag">
                            <div className="result-prag-val">{s.prag}</div>
                            <div className="result-prag-lbl">prag 2025</div>
                            {PRAG_2023[s.studijKey]&&<div className="result-prag-2023">{PRAG_2023[s.studijKey]}·2023</div>}
                          </div>
                          <span className={`chance-badge ${s.chance}`}>{chanceLabel(s.chance)}</span>
                          <div style={{display:"flex",flexDirection:"column",gap:4}} onClick={e=>e.stopPropagation()}>
                            <button className={`fav-btn ${s.isFav?"active":""}`} onClick={()=>toggleFav(s.studijKey)}>{s.isFav?"♥":"♡"}</button>
                            <button className={`compare-btn ${inComp?"in-compare":""}`} onClick={()=>toggleCmp(s)} disabled={!inComp&&compareList.length>=MAX_CMP}>{inComp?"✓":"⚖️"}</button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
                {!isPaid&&(
                  <>
                    <div className="results-fade"/>
                    <div style={{position:"relative",zIndex:20,padding:"20px 16px 4px",textAlign:"center"}}>
                      <div style={{padding:"24px 24px 28px",background:"linear-gradient(135deg,rgba(75,123,255,.1),rgba(124,92,252,.07))",border:"1px solid rgba(75,123,255,.25)",borderRadius:16,backdropFilter:"blur(4px)"}}>
                        <div style={{fontSize:32,marginBottom:12}}>🔒</div>
                        <div style={{fontFamily:"'Fraunces',serif",fontSize:20,fontWeight:700,color:"var(--txt)",marginBottom:8}}>
                          Još <strong style={{color:"var(--blue)"}}>{filtered.length}</strong> studija čeka na tebe
                        </div>
                        <div style={{fontSize:12,color:"var(--muted)",lineHeight:1.7,marginBottom:20,maxWidth:300,margin:"0 auto 20px"}}>
                          Otključaj svih {filtered.length} studija i puni pregled šansi uz Standard ili Pro plan.
                        </div>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px 16px",marginBottom:24,textAlign:"left",maxWidth:280,margin:"0 auto 24px"}}>
                          {["350+ studija bez ograničenja","Šanse i pregled pragova","Trendovi 2021–2025","Favoriti i usporedba"].map(f=>(
                            <div key={f} style={{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--txt)"}}>
                              <span style={{color:"var(--blue)",fontWeight:700,flexShrink:0}}>✓</span>{f}
                            </div>
                          ))}
                        </div>
                        <button className="paywall-btn" onClick={()=>goToPro()}>
                          Otključaj kalkulator — od 6,99€/mj →
                        </button>
                        {!user&&(
                          <div className="paywall-login" style={{marginTop:12}}>
                            Već imaš plan?{" "}
                            <span onClick={()=>router.push("/prijava?redirect=/kalkulator")}>Prijavi se →</span>
                          </div>
                        )}
                        <div style={{marginTop:8,fontSize:11,color:"var(--muted)",textAlign:"center"}}>
                          <span style={{cursor:"pointer",textDecoration:"underline"}} onClick={()=>setShowPlanModal(true)}>
                            Usporedi planove →
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                </div>
              </>
            )}

            {/* ── TAB: Preporuke ── */}
            {rightTab==="preporuke"&&(
              <>
                <div className="preporuke-intro"><strong>⭐ Preporuke za tebe</strong> — top studiji s realnom šansom na temelju tvojih {totalBodova} bodova. Klikni za detalje.</div>
                {preporuke.length===0?(
                  <div className="empty-state"><div className="icon">📉</div><p>Nema studija s realnom šansom.<br/>Pokušaj poboljšati bodove u simulaciji.</p></div>
                ):(
                  preporuke.map((s,i)=>{
                    const bc=s.chance==="high"?"var(--green)":s.chance==="mid"?"var(--gold)":"var(--red)";
                    const pct=Math.min(100,Math.max(0,(s.mojiBodovi/s.prag)*100));
                    return(
                      <div key={i} className="preporuka-item" onClick={()=>setStudijModal(s)}>
                        <div className={`preporuka-rank ${i===0?"rank-1":i===1?"rank-2":i===2?"rank-3":"rank-other"}`}>{i<3?["🥇","🥈","🥉"][i]:`${i+1}.`}</div>
                        <div className="preporuka-info">
                          <div className="preporuka-name">{s.studij}</div>
                          <div className="preporuka-fak">{s.fakultet}·{s.grad}</div>
                          <div className="preporuka-meta">
                            <span className={`chance-badge ${s.chance}`}>{chanceLabel(s.chance)}</span>
                            <span style={{fontSize:12,fontWeight:700,color:bc}}>{s.diff>0?`+${Math.round(s.diff)}`:Math.round(s.diff)} bod</span>
                            <span className={`trend-badge ${s.trend.tip}`}>{s.trend.label}</span>
                          </div>
                          <div className="diff-bar-wrap" style={{marginTop:8}}>
                            <div className="diff-bar-bg"><div className="diff-bar-fill" style={{width:`${pct}%`,background:bc}}/></div>
                            <span style={{fontSize:10,color:"var(--muted)",whiteSpace:"nowrap"}}>{s.prag} prag</span>
                          </div>
                        </div>
                        <button className={`fav-btn ${s.isFav?"active":""}`} onClick={e=>{e.stopPropagation();toggleFav(s.studijKey);}}>{s.isFav?"♥":"♡"}</button>
                      </div>
                    );
                  })
                )}

                <button className="anketa-open-btn" onClick={()=>{ if(!isPro){ setShowPlanModal(true); return; } setShowAnketa(true); }}>
                  🎯 Otkrijte studij po interesima — AI anketa
                  <span style={{marginLeft:"auto",fontSize:10,opacity:.7}}>{isPro ? "5 pitanja →" : "🔒 Pro"}</span>
                </button>
                <div className="ai-plan-section">
                  <div className="ai-plan-header">
                    <div className="ai-plan-icon">🤖</div>
                    <div><div className="ai-plan-title">Plan poboljšanja</div><div className="ai-plan-sub">AI analizira tvoje bodove i daje konkretan savjet</div></div>
                  </div>
                  <button className="ai-plan-btn" onClick={handleAiPlan} disabled={aiLoading}>
                    {aiLoading?<><span>Generira se...</span><span className="typing"/></>:<><span>✨</span><span>{aiPlan?"Generiraj novi plan":"Generiraj moj plan poboljšanja"}</span></>}
                  </button>
                  {aiPlan&&<div className="ai-plan-output">{aiPlan}</div>}
                </div>
              </>
            )}

            {/* ── TAB: Vizualizacija ── */}
            {rightTab==="vizualizacija"&&(
              <>
                {/* ── RADAR CHART ── */}
                <div className="radar-wrap">
                  <div className="viz-section-title">🕸️ Radar snaga vs. zahtjeva studija</div>
                  <p style={{fontSize:12,color:"var(--muted)",marginBottom:12}}>
                    Usporedi svoja područja snage s onim što studij traži. Odaberi studij za usporedbu.
                  </p>

                  {/* Odabir studija za usporedbu */}
                  <div className="radar-studij-select">
                    {[
                      {key:"Medicina_Zagreb",          label:"🏥 MEF"},
                      {key:"Elektrotehnika i IT i Računarstvo_Zagreb", label:"💻 FER"},
                      {key:"Pravo_Zagreb",             label:"⚖️ Pravo"},
                      {key:"Psihologija_Zagreb",       label:"🧠 Psihologija"},
                      {key:"Arhitektura i urbanizam_Zagreb", label:"🏛️ Arhitektura"},
                      {key:"Ekonomija_Zagreb",         label:"📈 Ekonomija"},
                    ].map(s=>(
                      <button key={s.key}
                        className={`radar-studij-btn${radarStudij===s.key?" active":""}`}
                        onClick={()=>setRadarStudij(p=>p===s.key?null:s.key)}
                      >{s.label}</button>
                    ))}
                  </div>

                  {(()=>{
                    // Korisnikove "snage" normalizirane na 0-100
                    const moj = [
                      {subject:"Hrvatski",  moji:Math.round(hr),        studij:radarStudij?{
                        "Medicina_Zagreb":60,"Elektrotehnika i IT i Računarstvo_Zagreb":40,"Pravo_Zagreb":85,
                        "Psihologija_Zagreb":70,"Arhitektura i urbanizam_Zagreb":55,"Ekonomija_Zagreb":55,
                      }[radarStudij]||50:null},
                      {subject:"Matematika", moji:Math.round(mat),      studij:radarStudij?{
                        "Medicina_Zagreb":75,"Elektrotehnika i IT i Računarstvo_Zagreb":95,"Pravo_Zagreb":40,
                        "Psihologija_Zagreb":55,"Arhitektura i urbanizam_Zagreb":65,"Ekonomija_Zagreb":70,
                      }[radarStudij]||50:null},
                      {subject:"Strani jez.",moji:Math.round(strani),   studij:radarStudij?{
                        "Medicina_Zagreb":60,"Elektrotehnika i IT i Računarstvo_Zagreb":55,"Pravo_Zagreb":70,
                        "Psihologija_Zagreb":65,"Arhitektura i urbanizam_Zagreb":60,"Ekonomija_Zagreb":65,
                      }[radarStudij]||50:null},
                      {subject:"Prirodosl.", moji:Math.round(Math.max(izb1,izb2)), studij:radarStudij?{
                        "Medicina_Zagreb":95,"Elektrotehnika i IT i Računarstvo_Zagreb":80,"Pravo_Zagreb":20,
                        "Psihologija_Zagreb":60,"Arhitektura i urbanizam_Zagreb":35,"Ekonomija_Zagreb":30,
                      }[radarStudij]||50:null},
                      {subject:"Prosjek",   moji:Math.round((prosjek-1)/4*100), studij:radarStudij?{
                        "Medicina_Zagreb":90,"Elektrotehnika i IT i Računarstvo_Zagreb":80,"Pravo_Zagreb":80,
                        "Psihologija_Zagreb":85,"Arhitektura i urbanizam_Zagreb":75,"Ekonomija_Zagreb":75,
                      }[radarStudij]||70:null},
                      {subject:"Izborni",   moji:Math.round((izb1+izb2)/2), studij:radarStudij?{
                        "Medicina_Zagreb":80,"Elektrotehnika i IT i Računarstvo_Zagreb":70,"Pravo_Zagreb":55,
                        "Psihologija_Zagreb":65,"Arhitektura i urbanizam_Zagreb":60,"Ekonomija_Zagreb":60,
                      }[radarStudij]||50:null},
                    ];
                    return(
                      <ResponsiveContainer width="100%" height={280}>
                        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={moj}>
                          <PolarGrid stroke="var(--border)" strokeDasharray="3 3"/>
                          <PolarAngleAxis dataKey="subject" tick={{fill:"var(--muted)",fontSize:11,fontFamily:"DM Sans"}}/>
                          <PolarRadiusAxis angle={30} domain={[0,100]} tick={{fill:"var(--muted)",fontSize:9}} tickCount={4}/>
                          <Radar name="Moji bodovi" dataKey="moji" stroke="var(--blue)" fill="var(--blue)" fillOpacity={0.25} strokeWidth={2}/>
                          {radarStudij&&<Radar name="Zahtjevi studija" dataKey="studij" stroke="var(--gold)" fill="var(--gold)" fillOpacity={0.15} strokeWidth={2} strokeDasharray="5 3"/>}
                          <Tooltip contentStyle={{background:"#0e1220",border:"1px solid #1e2440",borderRadius:8,fontSize:12}} formatter={(v,n)=>[`${v}%`,n]}/>
                        </RadarChart>
                      </ResponsiveContainer>
                    );
                  })()}

                  <div className="radar-legend">
                    <div className="radar-legend-item"><div className="radar-legend-dot" style={{background:"var(--blue)"}}/> Moji bodovi (normalizirani)</div>
                    {radarStudij&&<div className="radar-legend-item"><div className="radar-legend-dot" style={{background:"var(--gold)"}}/> Zahtjevi odabranog studija</div>}
                  </div>
                  {!radarStudij&&<p style={{fontSize:11,color:"var(--muted)",textAlign:"center",marginTop:8}}>Odaberi studij gore da vidiš usporedbu ⬆</p>}
                </div>

                <div className="viz-section">
                  <div className="viz-section-title">🗺️ Karta fakulteta</div>
                  <p style={{fontSize:12,color:"var(--muted)",marginBottom:12}}>
                    Klikni na grad da filtriraš termometar ispod. Veličina točke = broj studija. Boja = tvoja šansa.
                  </p>
                  <KartaHrvatske
                    studiji={allStudiji}
                    totalBodova={totalBodova}
                    onGradClick={g=>setSelectedGrad(g===selectedGrad?null:g)}
                    selectedGrad={selectedGrad}
                  />
                </div>

                <div className="viz-section">
                  <div className="viz-section-title">🌡️ Bodovni termometar</div>
                  <p style={{fontSize:12,color:"var(--muted)",marginBottom:12}}>
                    {selectedGrad?`Studiji u gradu ${selectedGrad}`:"Studiji s realnom šansom"} — tvoji bodovi vs. prag.
                    {selectedGrad&&(
                      <button onClick={()=>setSelectedGrad(null)} style={{marginLeft:8,fontSize:11,color:"var(--blue)",background:"none",border:"none",cursor:"pointer"}}>
                        Prikaži sve ×
                      </button>
                    )}
                  </p>
                  <div style={{maxHeight:320,overflowY:"auto",scrollbarWidth:"thin"}}>
                    {vizStudiji.length===0?(
                      <div className="empty-state"><div className="icon">📊</div><p>Nema studija s realnom šansom{selectedGrad?` u ${selectedGrad}`:""}.{selectedGrad&&" Odaberi drugi grad ili promijeni bodove."}</p></div>
                    ):(
                      vizStudiji.slice(0,15).map((s,i)=>{
                        const pct=Math.min(100,(s.mojiBodovi/Math.max(s.mojiBodovi,s.prag))*100);
                        const bc=s.chance==="high"?"var(--green)":s.chance==="mid"?"var(--gold)":"var(--red)";
                        const markerPct=Math.min(100,(s.mojiBodovi/Math.max(s.mojiBodovi,s.prag))*100);
                        return(
                          <div key={i} className="glob-term-item" style={{cursor:"pointer"}} onClick={()=>setStudijModal(s)}>
                            <div className="glob-term-name" title={s.studij}>{s.studij}</div>
                            <div className="glob-term-bar-wrap">
                              <div className="glob-term-bar" style={{width:`${pct}%`,background:bc}}/>
                              <div className="glob-term-marker" style={{left:`${markerPct}%`}}/>
                            </div>
                            <div className="glob-term-diff" style={{color:bc}}>
                              {s.diff>0?`+${Math.round(s.diff)}`:Math.round(s.diff)}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                <div className="viz-section">
                  <div className="viz-section-title">📈 Kretanje pragova (2021–2025)</div>
                  <p style={{fontSize:12,color:"var(--muted)",marginBottom:12}}>Klikni na studij za detaljan grafikon s tvojim bodovima.</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                    {Object.entries(POVIJEST).slice(0,10).map(([key])=>{
                      const s=allStudiji.find(x=>x.studijKey===key);
                      if(!s)return null;
                      const bc=s.chance==="high"?"rgba(62,207,110,.3)":s.chance==="mid"?"rgba(233,180,70,.3)":"var(--border)";
                      return(
                        <button key={key} onClick={()=>setStudijModal(s)}
                          style={{padding:"5px 10px",borderRadius:8,border:`1px solid ${bc}`,background:"var(--s2)",color:"var(--txt)",fontSize:11,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",transition:"background .15s"}}
                          onMouseOver={e=>e.currentTarget.style.background="var(--s3)"}
                          onMouseOut={e=>e.currentTarget.style.background="var(--s2)"}>
                          {s.studij.split("(")[0].trim().substring(0,22)}
                        </button>
                      );
                    })}
                    <span style={{fontSize:11,color:"var(--muted)",padding:"5px 4px",alignSelf:"center"}}>+ klikni bilo koji studij</span>
                  </div>
                </div>
              </>
            )}

            {/* ── TAB: Simulacija ── */}
            {rightTab==="simulacija"&&(
              <>
                <div className="sim-intro"><strong>Simulacija "što ako"</strong> — pomakni slidere i vidi koji se studiji otključavaju.</div>
                {SIM_FIELDS.map(({key,label,step,isFloat,isPrijemni})=>{
                  const cur=scores[key],max=maxGain(key),val=simDelta[key],afterVal=isFloat?(cur+val).toFixed(1):cur+val;
                  return(
                    <div key={key} className="sim-slider-row" style={isPrijemni?{paddingTop:12,marginTop:4,borderTop:"1px solid var(--border)"}:{}}>
                      <div className="sim-slider-label">
                        <span className="sim-slider-name">{label}{isPrijemni&&<span style={{fontSize:10,color:"var(--gold)",marginLeft:6,fontWeight:600}}>MEF/AF/KIF</span>}</span>
                        <span className="sim-slider-vals">{isFloat?cur.toFixed(1):cur}{val>0?<> → <strong>+{isFloat?val.toFixed(1):val}={afterVal}{isFloat?"/5.0":"%"}</strong></>:<span style={{color:"var(--muted)"}}> (bez promjene)</span>}</span>
                      </div>
                      <input type="range" min="0" max={max} step={step} value={val} className="sim-range" style={{accentColor:isPrijemni?"var(--gold)":"var(--teal)"}} onChange={e=>setSimDelta(d=>({...d,[key]:isFloat?parseFloat(e.target.value):parseInt(e.target.value,10)}))}/>
                    </div>
                  );
                })}
                <div className={`sim-result-box ${simGain>0?"has-gain":""}`}>
                  <div className="sim-scores-grid">
                    <div className="sim-score-cell"><div className="sim-score-val" style={{color:"var(--muted)"}}>{totalBodova}</div><div className="sim-score-lbl">Trenutno</div></div>
                    <div className="sim-score-cell"><div className="sim-score-val" style={{color:simGain>0?"var(--green)":"var(--muted)"}}>{simTotal}</div><div className="sim-score-lbl">S poboljšanjem</div></div>
                    <div className="sim-score-cell"><div className="sim-score-val" style={{color:simGain>0?"var(--green)":"var(--muted)"}}>{simGain>0?`+${simGain}`:simGain}</div><div className="sim-score-lbl">Razlika</div></div>
                  </div>
                  <div className="sim-bar-section">
                    <div className="sim-bar-label">Vizualni prikaz (od 1000 bod)</div>
                    <div style={{marginBottom:8}}>
                      <div style={{fontSize:11,color:"var(--muted)",marginBottom:4}}>Trenutno</div>
                      <div className="sim-compare-bar"><div className="sim-compare-bar-fill" style={{width:`${barPct}%`,background:"linear-gradient(90deg,var(--blue),var(--violet))"}}><span>{totalBodova} bod</span></div></div>
                    </div>
                    <div>
                      <div style={{fontSize:11,color:"var(--muted)",marginBottom:4}}>S poboljšanjem</div>
                      <div className="sim-compare-bar">
                        <div className="sim-compare-bar-fill" style={{width:`${barPct}%`,background:"linear-gradient(90deg,var(--blue),var(--violet))"}}><span>{totalBodova} bod</span></div>
                        {simGain>0&&<div className="sim-compare-bar-gain" style={{left:`${barPct}%`,width:`${simBarPct-barPct}%`,background:"linear-gradient(90deg,var(--teal),var(--green))"}}><span>+{simGain}</span></div>}
                      </div>
                    </div>
                  </div>
                  {simGain>0&&(
                    <div className="sim-unlock-section">
                      <div className="sim-unlock-title">🔓 {simUnlocked.length>0?`${simUnlocked.length} ${simUnlocked.length===1?"studij se otključava":"studija se otključava"}`:"Nema novih otključanih studija"}</div>
                      {simUnlocked.length===0&&<div className="sim-empty">Već imaš šansu na svim studijima u ovom rasponu.</div>}
                      {simUnlocked.slice(0,6).map((s,i)=>{
                        const ac=getChance(calcTotal(simScores,`${s.studij}_${s.grad}`),s.prag);
                        const col=ac==="high"?{bg:"rgba(62,207,110,.15)",color:"var(--green)"}:{bg:"rgba(233,180,70,.15)",color:"var(--gold)"};
                        return(<div key={i} className="sim-unlock-item"><div><div className="sim-unlock-name">{s.studij}</div><div className="sim-unlock-fak">{s.fakultet}·{s.grad}</div></div><span className="sim-unlock-badge" style={{background:col.bg,color:col.color}}>{chanceLabel(ac)}</span></div>);
                      })}
                      {simUnlocked.length>6&&<div style={{fontSize:11,color:"var(--muted)",textAlign:"center",paddingTop:8}}>+ još {simUnlocked.length-6} studija</div>}
                    </div>
                  )}
                  {simGain===0&&<div className="sim-empty">Pomakni slidere gore da vidiš učinak.</div>}
                </div>
                {simGain>0&&<button className="sim-reset-btn" onClick={resetSim}>↺ Resetiraj simulaciju</button>}
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── ONBOARDING ── */}
      {showOnboarding&&<OnboardingWizard onClose={()=>setShowOnboarding(false)}/>}

      {/* ── KEYBOARD SHORTCUTS MODAL ── */}
      {showKb&&<KeyboardShortcutsModal onClose={()=>setShowKb(false)}/>}

      {/* ── AI CHAT MODAL ── */}
      {showChat&&<AIChatModal onClose={()=>setShowChat(false)} totalBodova={totalBodova} scores={scores} allStudiji={allStudiji} favoriti={favoriti}/>}

      {/* ── PLAN USPOREDBA MODAL ── */}
      {showPlanModal&&<PlanUsporedbaModal onClose={()=>setShowPlanModal(false)} onGoToPro={goToPro}/>}

      {/* ── REFERRAL MODAL ── */}
      {showReferral&&<ReferralModal onClose={()=>setShowReferral(false)} profil={profil} totalBodova={totalBodova}/>}

      {/* ── ANKETA INTERESA MODAL ── */}
      {showAnketa&&<AnketaInteresa onClose={()=>setShowAnketa(false)} allStudiji={allStudiji} totalBodova={totalBodova}/>}

      {/* ── PRIJEMNI KALKULATOR MODAL ── */}
      {showPrijemni&&<PrijemniKalkulator onClose={()=>setShowPrijemni(false)} totalBodova={totalBodova}/>}

      {/* ── AI CHAT FAB ── */}
      <button className="chat-fab" onClick={()=>{ if(!isPro){ setShowPlanModal(true); return; } setShowChat(true); }} title="Pitaj AI upisnika">
        💬
      </button>

      {/* ── THEME TOGGLE ── */}
      <button className="theme-toggle" onClick={()=>setTheme(t=>t==="dark"?"light":"dark")} title={theme==="dark"?"Svijetli način":"Tamni način"}>
        {theme==="dark" ? "☀️" : "🌙"}
      </button>

      {/* ── KEYBOARD HINT ── */}
      <button
        onClick={()=>setShowKb(true)}
        title="Prečaci tipkovnice (?)"
        style={{
          position:"fixed",bottom:84,left:72,zIndex:200,
          width:32,height:32,borderRadius:8,
          border:"1px solid var(--border)",background:"var(--s1)",
          color:"var(--muted)",fontSize:13,fontWeight:700,
          cursor:"pointer",display:"flex",alignItems:"center",
          justifyContent:"center",transition:"all .2s",
          fontFamily:"'DM Sans',sans-serif",
        }}
        onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--blue)";e.currentTarget.style.color="var(--blue)";}}
        onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--muted)";}}
      >?</button>

      {/* ── SHARE FAB ── */}
      <button className="share-fab" onClick={()=>{ if(!isPro){ setShowPlanModal(true); return; } setShowShare(true); }} title="Podijeli rezultate">🔗</button>

      {/* ── SHARE MODAL ── */}
      {showShare&&(
        <div className="share-modal-overlay" onClick={e=>e.target===e.currentTarget&&setShowShare(false)}>
          <div className="share-modal">
            <div className="share-handle"/>
            <div className="share-modal-title">Podijeli rezultate</div>
            <div className="share-modal-sub">{totalBodova} bodova · {counts.fav} favorita</div>
            <div className="share-grid">
              <button className="share-btn wb" onClick={()=>{handleShareWhatsApp();setShowShare(false);}}>
                <span className="share-btn-icon">💬</span>
                <span className="share-btn-label">WhatsApp</span>
                <span className="share-btn-desc">Pošalji prijatelju</span>
              </button>
              <button className="share-btn nt" onClick={()=>{handleNativeShare();setShowShare(false);}}>
                <span className="share-btn-icon">📤</span>
                <span className="share-btn-label">Podijeli</span>
                <span className="share-btn-desc">SMS, Mail, Viber...</span>
              </button>
              <button className="share-btn ig" onClick={()=>{handleShareInstagram();setShowShare(false);}}>
                <span className="share-btn-icon">📸</span>
                <span className="share-btn-label">Instagram</span>
                <span className="share-btn-desc">Kopiraj link za Stories</span>
              </button>
              <button className={`share-btn lnk ${shareCopied?"share-copied":""}`} onClick={handleShareLink}>
                <span className="share-btn-icon">{shareCopied?"✓":"🔗"}</span>
                <span className="share-btn-label">{shareCopied?"Kopirano!":"Kopiraj link"}</span>
                <span className="share-btn-desc">Link s bodovima</span>
              </button>
            </div>
            <button className="share-close" onClick={()=>setShowShare(false)}>Zatvori</button>
          </div>
        </div>
      )}
    </>
  );
}

function Kalkulator() {
  return (
    <React.Suspense fallback={
      <div style={{minHeight:"100vh",background:"#07090f",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{color:"#7b82a0",fontSize:14}}>Učitavam kalkulator...</div>
      </div>
    }>
      <KalkulatorInner />
    </React.Suspense>
  );
}

export default Kalkulator;