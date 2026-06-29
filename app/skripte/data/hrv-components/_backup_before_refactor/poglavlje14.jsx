/**
 * H14 — Maturiraj.hr — Maturiraj.hr
 * Auto-generated from Maturiraj_Hrvatski_H14.html
 * 
 * Strategy: Hybrid HTML-in-JSX (Strategy C)
 * - Body HTML rendered via dangerouslySetInnerHTML
 * - Inline <style> blocks injected at mount
 * - Inline <script> blocks executed at mount
 * - All onclick/oninput/etc. handlers preserved
 * - SEO via Next.js Metadata API (in page.jsx)
 */
'use client';

import { useEffect, useRef } from 'react';

export const metadata = {
  code: 'H14',
  title: 'Maturiraj.hr — Maturiraj.hr',
  description: 'Interaktivna skripta za maturu — Hrvatski narodni preporod i Mažuranić’s Smrt Smail-age Čengića: dubinska analiza 5 pjevanja, obvezatno djelo za čitanje 2026,...',
  canonical: 'https://maturiraj.hr/hrvatski/h14',
  ogImage: '',
};

const BODY_HTML = `<div class="read-progress" aria-hidden="true"><div class="read-progress-bar" id="rpbar"></div></div>
<button class="btt" id="btt" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh" title="Natrag na vrh">↑</button>

<div class="sb-overlay" id="overlay" onclick="closeSb()"></div>
<button class="sb-hamburger" id="hamburger" onclick="openSb()" aria-label="Izbornik">
  <span></span><span></span><span></span>
</button>

<div class="shell">
<!-- SIDEBAR -->
<nav class="sidebar" id="sidebar" role="navigation" aria-label="Navigacija poglavlja">
  <div class="sb-brand">
    <div class="sb-logo">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path d="M16 3L29 9.5V22.5L16 29L3 22.5V9.5Z" stroke="#0F0605" stroke-width="1.5"/>
        <path d="M16 3V29M3 9.5L29 22.5M29 9.5L3 22.5" stroke="#0F0605" stroke-width=".8" opacity=".5"/>
        <circle cx="16" cy="16" r="2.5" fill="#0F0605" opacity=".7"/>
      </svg>
    </div>
    <div>
      <div class="sb-name">Maturiraj.hr</div>
      <div class="sb-sub">HRVATSKI</div>
    </div>
    <button type="button" class="sb-hamburger" onclick="toggleSidebar()" aria-label="Zatvori izbornik">
      <span></span><span></span><span></span>
    </button>
  </div>

  <div class="sb-prog-wrap">
    <div class="sb-prog-label"><span>napredak</span><span id="sb-prog-pct">0%</span></div>
    <div class="sb-prog-track"><div class="sb-prog-bar" id="sb-prog-bar" style="width:0%"></div></div>
  </div>

  <!-- ══ SVJETSKA KNJIŽEVNOST ══ -->
  <div class="sb-era">// Svjetska književnost</div>
  <a class="sb-item" data-code="h01" href="/skripte/hrv/h01"><span class="sb-dot"></span>H01 · Temelji i antika</a>
  <a class="sb-item" data-code="h02" href="/skripte/hrv/h02"><span class="sb-dot"></span>H02 · Srednji vijek</a>
  <a class="sb-item" data-code="h03" href="/skripte/hrv/h03"><span class="sb-dot"></span>H03 · Renesansa</a>
  <a class="sb-item" data-code="h04" href="/skripte/hrv/h04"><span class="sb-dot"></span>H04 · Barok i klasicizam</a>
  <a class="sb-item" data-code="h05" href="/skripte/hrv/h05"><span class="sb-dot"></span>H05 · Prosvjetiteljstvo</a>
  <a class="sb-item" data-code="h06" href="/skripte/hrv/h06"><span class="sb-dot"></span>H06 · Romantizam</a>
  <a class="sb-item" data-code="h07" href="/skripte/hrv/h07"><span class="sb-dot"></span>H07 · Realizam</a>
  <a class="sb-item" data-code="h08" href="/skripte/hrv/h08"><span class="sb-dot"></span>H08 · Moderna</a>
  <a class="sb-item" data-code="h09" href="/skripte/hrv/h09"><span class="sb-dot"></span>H09 · Avangarda i 20. st.</a>
  <a class="sb-item" data-code="h10" href="/skripte/hrv/h10"><span class="sb-dot"></span>H10 · Postmoderna</a>

  <!-- ══ HRVATSKA KNJIŽEVNOST ══ -->
  <div class="sb-era">// Hrvatska književnost</div>
  <a class="sb-item" data-code="h11" href="/skripte/hrv/h11"><span class="sb-dot"></span>H11 · Stari hrv. pisci</a>
  <a class="sb-item" data-code="h12" href="/skripte/hrv/h12"><span class="sb-dot"></span>H12 · Marulić i hrv. rens.</a>
  <a class="sb-item" data-code="h13" href="/skripte/hrv/h13"><span class="sb-dot"></span>H13 · Hrv. barok — Gundulić</a>
  <a class="sb-item active" data-code="h14" href="/skripte/hrv/h14"><span class="sb-dot"></span>H14 · Preporod</a>
  <a class="sb-item" data-code="h15" href="/skripte/hrv/h15"><span class="sb-dot"></span>H15 · Šenoa i realizam</a>
  <a class="sb-item" data-code="h16" href="/skripte/hrv/h16"><span class="sb-dot"></span>H16 · Krleža i moderna</a>

  <!-- ══ STIL I IZRAZ ══ -->
  <div class="sb-era">// Stil i izraz</div>
  <a class="sb-item" data-code="h17" href="/skripte/hrv/h17"><span class="sb-dot"></span>H17 · Stilske figure</a>
  <a class="sb-item" data-code="h18" href="/skripte/hrv/h18"><span class="sb-dot"></span>H18 · Versifikacija</a>

  <!-- ══ JEZIKOSLOVLJE ══ -->
  <div class="sb-era">// Jezikoslovlje</div>
  <a class="sb-item" data-code="h19" href="/skripte/hrv/h19"><span class="sb-dot"></span>H19 · Fonetika i fonologija</a>
  <a class="sb-item" data-code="h20" href="/skripte/hrv/h20"><span class="sb-dot"></span>H20 · Morfologija</a>
  <a class="sb-item" data-code="h21" href="/skripte/hrv/h21"><span class="sb-dot"></span>H21 · Sintaksa</a>
  <a class="sb-item" data-code="h22" href="/skripte/hrv/h22"><span class="sb-dot"></span>H22 · Leksikologija</a>
  <a class="sb-item" data-code="h23" href="/skripte/hrv/h23"><span class="sb-dot"></span>H23 · Povijest hrv. jezika</a>
  <a class="sb-item" data-code="h24" href="/skripte/hrv/h24"><span class="sb-dot"></span>H24 · Hrv. narječja</a>

  <!-- ══ PRAVOPIS ══ -->
  <div class="sb-era">// Pravopis</div>
  <a class="sb-item" data-code="h25" href="/skripte/hrv/h25"><span class="sb-dot"></span>H25 · Pravopisna pravila</a>
  <a class="sb-item" data-code="h26" href="/skripte/hrv/h26"><span class="sb-dot"></span>H26 · Interpunkcija</a>

  <!-- ══ PISANJE ══ -->
  <div class="sb-era">// Pisanje</div>
  <a class="sb-item" data-code="h27" href="/skripte/hrv/h27"><span class="sb-dot"></span>H27 · Školski esej</a>
  <a class="sb-item" data-code="h28" href="/skripte/hrv/h28"><span class="sb-dot"></span>H28 · Sažetak</a>

  <!-- ══ DODATNO — obvezatna djela (deep-dive za esej 2026 + čitanje) ══ -->
  <div class="sb-era sb-era-d">// Dodatno · obvezatna djela</div>
  <div class="sb-d-meta">Deep-dive za esej (30 bod) + čitanje (20 bod)</div>

  <a class="sb-item sb-d" data-code="d01" href="/skripte/hrv"><span class="sb-dot"></span>D01 · Sofoklo · Antigona</a>
  <a class="sb-item sb-d" data-code="d02" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D02 · Petrarca · izbor</a>
  <a class="sb-item sb-d" data-code="d03" href="/skripte/hrv"><span class="sb-dot"></span>D03 · Shakespeare · Hamlet</a>
  <a class="sb-item sb-d" data-code="d04" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D04 · Calderón · Život je san</a>
  <a class="sb-item sb-d" data-code="d05" href="/skripte/hrv"><span class="sb-dot"></span>D05 · Molière · Škrtac</a>
  <a class="sb-item sb-d" data-code="d06" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D06 · Goethe · Werther</a>
  <a class="sb-item sb-d" data-code="d07" href="/skripte/hrv"><span class="sb-dot"></span>D07 · Dostojevski · Zločin i kazna</a>
  <a class="sb-item sb-d" data-code="d08" href="/skripte/hrv"><span class="sb-dot"></span>D08 · Kafka · Preobražaj</a>
  <a class="sb-item sb-d" data-code="d09" href="/skripte/hrv"><span class="sb-dot"></span>D09 · Camus · Stranac</a>
  <a class="sb-item sb-d" data-code="d10" href="/skripte/hrv"><span class="sb-dot"></span>D10 · Baudelaire · Cvjetovi zla</a>
  <a class="sb-item sb-d" data-code="d11" href="/skripte/hrv"><span class="sb-dot"></span>D11 · Držić · Novela od Stanca</a>
  <a class="sb-item sb-d" data-code="d12" href="/skripte/hrv"><span class="sb-dot"></span>D12 · Marulić · Judita</a>
  <a class="sb-item sb-d" data-code="d13" href="/skripte/hrv"><span class="sb-dot"></span>D13 · Gundulić · Dubravka</a>
  <a class="sb-item sb-d active" data-code="d14" href="/skripte/hrv"><span class="sb-dot"></span>D14 · Mažuranić · Smail-aga</a>
  <a class="sb-item sb-d" data-code="d15" href="/skripte/hrv"><span class="sb-dot"></span>D15 · Šenoa · Prijan Lovro</a>
  <a class="sb-item sb-d" data-code="d16" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D16 · Novak · Posljednji Stipančići</a>
  <a class="sb-item sb-d" data-code="d17" href="/skripte/hrv"><span class="sb-dot"></span>D17 · Kranjčević · poezija</a>
  <a class="sb-item sb-d" data-code="d18" href="/skripte/hrv"><span class="sb-dot"></span>D18 · Matoš · izbor</a>
  <a class="sb-item sb-d" data-code="d19" href="/skripte/hrv"><span class="sb-dot"></span>D19 · Nazor · poezija</a>
  <a class="sb-item sb-d" data-code="d20" href="/skripte/hrv"><span class="sb-dot"></span>D20 · Šimić · poezija</a>
  <a class="sb-item sb-d" data-code="d21" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D21 · Krleža · Glembajevi</a>
  <a class="sb-item sb-d" data-code="d22" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D22 · Marinković · Kiklop</a>

  <div class="sb-footer" id="sb-footer">
    <span id="sb-footer-pos">14 / 28</span> · <span id="sb-footer-title">preporod · mažuranić</span>
    <br>maturiraj.hr · hrvatski · v2
  </div>
</nav>

<!-- MAIN -->
<main class="main" role="main">
<div class="content-wrap">

  <!-- BREADCRUMB -->
  <div class="bc">
    <a class="bc-link" href="/">Maturiraj.hr</a><span class="bc-sep">/</span>
    <a class="bc-link" href="/skripte/hrv">Skripte</a><span class="bc-sep">/</span>
    <a class="bc-link" href="/skripte/hrv">Hrvatski jezik</a><span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-cur">H14 · Preporod · Mažuranić</span>
    <span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-tab" id="bc-tab">Teorija</span>
  </div>

  <!-- COUNTDOWN + ACTIONS -->
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:20px">
    <div class="countdown" style="margin-bottom:0">
      ⏳ Do ispita HRV: <strong id="cd-days">—</strong> dana &nbsp;<span style="font-size:9px;color:var(--t3)">(15. 6. 2026.)</span>
    </div>
    <button class="fcb" onclick="window.print()" style="font-size:10px" title="Print / PDF (Ctrl+P)">🖨 Print</button>
    <button class="fcb" onclick="navigator.share?navigator.share({title:'H14 · Preporod · Mažuranić',url:window.location.href}):navigator.clipboard.writeText(window.location.href)" style="font-size:10px" title="Podijeli">📤 Dijeli</button>
    <span style="font-family:var(--mono);font-size:9px;color:var(--t3);margin-left:auto">
      <span class="kbd">←</span> <span class="kbd">→</span> tabovi · <span class="kbd">?</span> pomoć
    </span>
  </div>

  <!-- HERO -->
  <header class="hero">
    <div class="hero-chapter">H14 &nbsp;·&nbsp; Hrvatska književnost &nbsp;·&nbsp; Narodni preporod (19. st.) · Deep-dive</div>
    <h1 class="hero-title">Hrvatski narodni<br><span>preporod i Mažuranić</span></h1>
    <p class="hero-sub">
      <strong>Ilirski pokret 1835.–1848. i najznačajnije djelo preporoda.</strong> Mažuranićev romantičarski spjev <em>Smrt Smail-age Čengića</em> (1846.) — 5 pjevanja, 1134 stiha osmerca i deseterca, borba protiv tiranije, romantičarski ideal slobode. <strong>Obvezatno djelo za cjelovito čitanje 2026.</strong>
    </p>
    <div class="hero-chips">
      <span class="hchip br">▶ H14 deep-dive</span>
      <span class="hchip go">⚔ Smail-aga 1846.</span>
      <span class="hchip te">🇭🇷 Preporod · Ilirizam</span>
      <span class="hchip pa">📖 Obvezatno čitanje</span>
      <span class="hchip re">✨ Romantizam</span>
    </div>
  </header>

  <!-- TABS -->
  <div class="tabs" role="tablist" aria-label="Dijelovi poglavlja">
    <button class="tab on" id="tab0" onclick="sw(0)" role="tab" aria-selected="true" aria-controls="l0">📖 Teorija<span class="tab-done" id="td0"></span></button>
    <button class="tab" id="tab1" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">📖 5 pjevanja<span class="tab-done" id="td1"></span></button>
    <button class="tab" id="tab2" onclick="sw(2)" role="tab" aria-selected="false" aria-controls="l2">✍ Esej alat<span class="tab-done" id="td2"></span></button>
    <button class="tab" id="tab3" onclick="sw(3)" role="tab" aria-selected="false" aria-controls="l3">💬 Citatnik<span class="tab-done" id="td3"></span></button>
    <button class="tab" id="tab4" onclick="sw(4)" role="tab" aria-selected="false" aria-controls="l4">📚 Pojmovnik<span class="tab-done" id="td4"></span></button>
    <button class="tab" id="tab5" onclick="sw(5)" role="tab" aria-selected="false" aria-controls="l5">⚡ Drill<span class="tab-lock">PRO</span></button>
    <button class="tab" id="tab6" onclick="sw(6)" role="tab" aria-selected="false" aria-controls="l6">🧠 Kviz<span class="tab-badge">20</span><span class="tab-done" id="td6"></span></button>
    <button class="tab" id="tab7" onclick="sw(7)" role="tab" aria-selected="false" aria-controls="l7">✅ Checkpoint</button>
  </div>

  <!-- ══════════════════════════════════════
       TAB 0 · TEORIJA
  ══════════════════════════════════════ -->
  <div class="layer on" id="l0" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa">Mažuranić</span>
      <span class="pill p-br">Smrt Smail-age Čengića 1846.</span>
      <span class="pill p-go">★ Obvezatno čitanje 2026</span>
      <span class="pill p-t">5 pjevanja · romantizam</span>
      <span class="pill p-r">Preporod · Ilirski pokret</span>
    </div>

    <!-- Soft kontekst hint — exam frequency -->
    <div class="soft-hint">
      <div class="soft-hint-ico">💡</div>
      <div class="soft-hint-body">
        Tema <b>Ivan Mažuranić / Smrt Smail-age Čengića</b> pojavila se na MAT 2022. i MAT 2024. — Romantizam, 5 pjevanja i <b>motiv ropstva vs. slobode</b> su stalni ispitni motivi.
      </div>
    </div>

    <!-- DIJAGNOSTIKA -->
    <div class="box-int" style="margin-bottom:20px">
      <div class="box-int-lbl">🎯 Brza dijagnostika H14 — 5 pitanja</div>
      <div class="diag" data-state="intro" id="diag0" style="">
      <style>#diag0[data-state="dismissed"]{display:none}

/* ═══════════════════════════════════
   CROSS-CHAPTER NAVIGATION
═══════════════════════════════════ */
.chapter-nav-wrap{
  margin:48px auto 32px;
  max-width:920px;
  padding:0 20px;
}
.chapter-nav-hdr{
  text-align:center;
  margin-bottom:24px;
}
.chapter-nav-title{
  font-family:var(--display);
  font-size:20px;
  font-weight:700;
  color:var(--t1);
  margin-bottom:6px;
}
.chapter-nav-sub{
  font-family:var(--serif);
  font-size:13px;
  color:var(--t3);
  font-style:italic;
}
.chapter-nav-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
  margin-bottom:28px;
}
.chapter-nav-card{
  display:flex;
  align-items:center;
  gap:14px;
  padding:16px 18px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  text-decoration:none;
  color:inherit;
  transition:all .25s ease;
  cursor:pointer;
}
.chapter-nav-card:hover{
  border-color:var(--gold);
  background:linear-gradient(135deg, var(--ele), rgba(233,180,70,.06));
  transform:translateY(-2px);
  box-shadow:0 8px 24px rgba(0,0,0,.25);
}
.chapter-nav-prev{text-align:left}
.chapter-nav-next{text-align:right;flex-direction:row}
.chapter-nav-next .chapter-nav-meta{flex:1}
.chapter-nav-arrow{
  font-size:24px;
  color:var(--gold);
  font-weight:700;
  flex-shrink:0;
}
.chapter-nav-meta{
  flex:1;
  display:flex;
  flex-direction:column;
  gap:4px;
}
.chapter-nav-pill{
  font-family:var(--mono);
  font-size:9px;
  letter-spacing:1.5px;
  color:var(--t3);
  text-transform:uppercase;
  font-weight:700;
}
.chapter-nav-pill-next{color:var(--gold)}
.chapter-nav-name{
  font-family:var(--display);
  font-size:15px;
  font-weight:700;
  color:var(--t1);
}
.chapter-nav-desc{
  font-family:var(--serif);
  font-size:12px;
  color:var(--t2);
  font-style:italic;
}
.chapter-nav-related{
  padding:18px;
  background:rgba(255,255,255,.02);
  border:1px solid var(--bd);
  border-radius:var(--r2);
}
.chapter-nav-related-ttl{
  font-family:var(--mono);
  font-size:11px;
  letter-spacing:1.5px;
  color:var(--gold);
  margin-bottom:12px;
  text-transform:uppercase;
}
.chapter-nav-related-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:8px;
}
.chapter-nav-mini{
  display:flex;
  align-items:center;
  gap:10px;
  padding:10px 12px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r1);
  text-decoration:none;
  color:inherit;
  transition:all .2s ease;
  font-size:12.5px;
}
.chapter-nav-mini:hover{
  border-color:var(--gold);
  color:var(--gold);
}
.chapter-nav-mini-code{
  font-family:var(--mono);
  font-size:10px;
  letter-spacing:1px;
  color:var(--gold);
  font-weight:700;
  background:rgba(233,180,70,.1);
  padding:2px 6px;
  border-radius:4px;
}
.chapter-nav-mini-name{
  font-family:var(--serif);
  color:var(--t2);
}
@media (max-width:640px){
  .chapter-nav-grid{grid-template-columns:1fr}
  .chapter-nav-next{flex-direction:row}
}


/* TIER INDICATOR — Workspace badge */
.ws-tier-indicator {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--ele, #1f1414);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.ws-tier-indicator.ws-tier-free {
  border-left: 3px solid var(--t3, #888);
}

.ws-tier-indicator.ws-tier-free.ws-tier-full {
  border-left: 3px solid var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233,180,70,0.06), var(--ele, #1f1414));
}

.ws-tier-indicator.ws-tier-standard {
  border-left: 3px solid var(--blue, #4a90d9);
  background: linear-gradient(135deg, rgba(74,144,217,0.04), var(--ele, #1f1414));
}

.ws-tier-indicator.ws-tier-pro {
  border-left: 3px solid var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233,180,70,0.06), var(--ele, #1f1414));
}

.ws-tier-indicator .ws-tier-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.ws-tier-indicator .ws-tier-text {
  flex: 1;
  font-size: 13px;
  color: var(--t2, #c5b8aa);
  line-height: 1.4;
  font-family: var(--mono, monospace);
}

.ws-tier-indicator .ws-tier-text strong {
  color: var(--t1, #f4ede5);
}

.ws-tier-indicator .ws-tier-cta {
  background: var(--gold, #e9b446);
  color: #0F0605;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  font-family: var(--mono, monospace);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.ws-tier-indicator .ws-tier-cta:hover {
  background: var(--gold-hover, #d4a13e);
  transform: translateY(-1px);
}

@media (max-width: 720px) {
  .ws-tier-indicator {
    padding: 10px 12px;
    gap: 8px;
  }
  .ws-tier-indicator .ws-tier-text {
    font-size: 12px;
  }
}

/* TIER_SYSTEM_CSS_INJECTED */
/* ═══════════════════════════════════════════════════
   MATURIRAJ.HR — TIER SYSTEM CSS
   Paywall modal + sidebar badge + tier indicators
   ═══════════════════════════════════════════════════ */

/* ───────── PAYWALL OVERLAY ───────── */
.mt-paywall-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: mt-fade-in 0.2s ease;
}

@keyframes mt-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ───────── PAYWALL MODAL ───────── */
.mt-paywall-modal {
  position: relative;
  background: var(--bg2, #1a1a1a);
  border: 1px solid var(--bd, #333);
  border-radius: 18px;
  max-width: 920px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.5);
  padding: 32px 28px;
  animation: mt-slide-up 0.3s ease;
}

@keyframes mt-slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.mt-paywall-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--bd, #333);
  color: var(--t2, #aaa);
  font-size: 22px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  line-height: 1;
}

.mt-paywall-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--t1, #fff);
  border-color: var(--gold, #e9b446);
}

/* ───────── PAYWALL HEADER ───────── */
.mt-paywall-header {
  text-align: center;
  margin-bottom: 28px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--bd, #333);
}

.mt-paywall-icon {
  font-size: 48px;
  margin-bottom: 8px;
}

.mt-paywall-title {
  font-family: var(--display, 'Fraunces', serif);
  font-size: 24px;
  font-weight: 800;
  color: var(--t1, #fff);
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

.mt-paywall-subtitle {
  font-size: 14px;
  color: var(--t2, #aaa);
  line-height: 1.5;
  max-width: 520px;
  margin: 0 auto;
}

/* ───────── PAYWALL TIERS ───────── */
.mt-paywall-tiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.mt-paywall-tier {
  position: relative;
  padding: 24px 22px;
  background: var(--ele, #222);
  border: 2px solid var(--bd, #333);
  border-radius: 14px;
  transition: all 0.2s ease;
}

.mt-paywall-tier:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.mt-paywall-tier-recommended {
  border-color: var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233, 180, 70, 0.06), var(--ele, #222));
  box-shadow: 0 0 0 4px rgba(233, 180, 70, 0.08);
}

.mt-paywall-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gold, #e9b446);
  color: #0F0605;
  padding: 4px 12px;
  border-radius: 12px;
  font-family: var(--mono, monospace);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.mt-paywall-tier-name {
  font-family: var(--display, 'Fraunces', serif);
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 8px;
  color: var(--t1, #fff);
}

.mt-paywall-tier-standard .mt-paywall-tier-name {
  color: var(--blue, #4a90d9);
}

.mt-paywall-tier-pro .mt-paywall-tier-name {
  color: var(--gold, #e9b446);
}

.mt-paywall-tier-price {
  font-family: var(--mono, monospace);
  font-size: 32px;
  font-weight: 800;
  color: var(--t1, #fff);
  margin-bottom: 14px;
  line-height: 1;
}

.mt-paywall-tier-price span {
  font-size: 14px;
  color: var(--t3, #888);
  font-weight: 400;
  margin-left: 4px;
}

.mt-paywall-tier-features {
  list-style: none;
  margin: 0 0 18px 0;
  padding: 0;
  font-size: 13px;
  line-height: 1.7;
  color: var(--t2, #ccc);
}

.mt-paywall-tier-features li {
  padding: 4px 0;
  padding-left: 4px;
}

.mt-paywall-tier-features li strong {
  color: var(--t1, #fff);
}

/* ───────── CTA BUTTONS ───────── */
.mt-paywall-cta {
  width: 100%;
  padding: 12px 20px;
  background: var(--blue, #4a90d9);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-family: var(--display, 'Fraunces', serif);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
  letter-spacing: 0.2px;
}

.mt-paywall-cta:hover {
  background: var(--blue-hover, #3578bf);
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(74, 144, 217, 0.3);
}

.mt-paywall-cta-pro {
  background: var(--gold, #e9b446);
  color: #0F0605;
}

.mt-paywall-cta-pro:hover {
  background: var(--gold-hover, #d4a13e);
  box-shadow: 0 6px 18px rgba(233, 180, 70, 0.3);
}

/* ───────── PAYWALL FOOTER ───────── */
.mt-paywall-footer {
  text-align: center;
  font-size: 12px;
  color: var(--t3, #888);
  padding-top: 18px;
  border-top: 1px solid var(--bd, #333);
}

.mt-paywall-link {
  color: var(--blue, #4a90d9);
  text-decoration: none;
  font-family: var(--mono, monospace);
  font-size: 11px;
  letter-spacing: 0.5px;
}

.mt-paywall-link:hover {
  color: var(--gold, #e9b446);
  text-decoration: underline;
}

.mt-paywall-link-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.mt-paywall-divider {
  margin: 0 8px;
  color: var(--t3, #888);
}

/* ───────── SIDEBAR TIER BADGE ───────── */
.mt-tier-badge {
  margin: 12px;
  padding: 10px 12px;
  background: var(--ele, #222);
  border: 1px solid var(--bd, #333);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
}

.mt-tier-badge-free {
  border-left: 3px solid var(--t3, #888);
}

.mt-tier-badge-standard {
  border-left: 3px solid var(--blue, #4a90d9);
}

.mt-tier-badge-pro {
  border-left: 3px solid var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233, 180, 70, 0.04), var(--ele, #222));
}

.mt-tier-badge-label {
  font-family: var(--mono, monospace);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: var(--t1, #fff);
}

.mt-tier-badge-cta {
  background: var(--gold, #e9b446);
  color: #0F0605;
  border: none;
  padding: 4px 10px;
  border-radius: 12px;
  font-family: var(--mono, monospace);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.mt-tier-badge-cta:hover {
  background: var(--gold-hover, #d4a13e);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(233, 180, 70, 0.3);
}

/* ───────── MOBILE ───────── */
@media (max-width: 720px) {
  .mt-paywall-modal {
    padding: 24px 20px;
    border-radius: 14px;
  }
  
  .mt-paywall-title {
    font-size: 20px;
  }
  
  .mt-paywall-icon {
    font-size: 40px;
  }
  
  .mt-paywall-tiers {
    grid-template-columns: 1fr;
  }
  
  .mt-paywall-tier-price {
    font-size: 28px;
  }
  
  .mt-tier-badge {
    margin: 8px;
    padding: 8px 10px;
  }
  
  .mt-tier-badge-cta {
    font-size: 9px;
    padding: 3px 8px;
  }
}


/* CHEAT-CARD (auto-injected) */
.cheat-card{background:linear-gradient(135deg,rgba(233,180,70,0.04),var(--card,#1a1010));border:1px solid var(--gold,#e9b446);border-radius:14px;padding:18px 22px}
.cheat-hdr{margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--bdm,#2c1f1f)}
.cheat-eye{font-family:var(--mono,monospace);font-size:10px;font-weight:800;color:var(--gold,#e9b446);letter-spacing:1.2px;margin-bottom:4px}
.cheat-ttl{font-family:var(--serif,'Fraunces',serif);font-size:16px;font-weight:700;color:var(--t1,#f4ede5)}
.cheat-grid{display:grid;grid-template-columns:1fr;gap:12px}
.cheat-col-wide{grid-column:1/-1}

  </style>
        <div class="diag-intro">
          <div class="diag-intro-icon">🎯</div>
          <div class="diag-intro-body">
            <h4>Provjeri gdje si s H14 — Preporod · Mažuranić · Smrt Smail-age Čengića</h4>
            <p>5 pitanja (&lt;2 min). Na kraju: personalizirana preporuka gdje započeti učiti. Rezultat se ne sprema.</p>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:4px">
            <button class="diag-btn diag-btn-primary" onclick="diag0Start()">▶ Pokreni dijagnostiku</button>
            <button class="diag-btn diag-btn-ghost" onclick="diag0Skip()">Preskoči — odmah na sadržaj ↓</button>
          </div>
        </div>
        <div class="diag-quiz" id="diag0-quiz">
          <div class="diag-q" id="diag0-q"></div>
          <div class="diag-opts" id="diag0-opts"></div>
          <div class="diag-prog-wrap">
            <div class="diag-prog-txt">Pitanje <span id="diag0-idx">1</span> / 5</div>
            <div class="diag-bar"><div class="diag-prog-bar" id="diag0-bar" style="width:0%"></div></div>
            <div class="diag-prog-num"><span id="diag0-correct">0</span> točno</div>
          </div>
        </div>
        <div class="diag-result">
          <div class="diag-res-msg" id="d0rtitle">Rezultat</div>
          <div class="diag-rec" id="d0rdesc"></div>
          <button class="fcb" onclick="diag0Reset()" style="margin-right:8px">↩ Ponovi</button>
          <button class="fcb primary" id="d0rbtn" onclick="sw(1)">→ Spjev: 5 pjevanja</button>
        </div>
      </div>
    </div>

    <!-- SEC 01: Hrvatski narodni preporod — kontekst -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Hrvatski narodni preporod — Ilirski pokret (1835.–1848.)</div><div class="sec-line"></div></div>

    <p><strong>Hrvatski narodni preporod</strong> (poznat i kao <strong>Ilirski pokret</strong>) je kulturni, jezični i politički pokret koji se razvija u prvoj polovici 19. st., od pojave <em>Danice horvatske, slavonske i dalmatinske</em> (1835.) do revolucionarne godine 1848. i ukidanja ilirskog imena.</p>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Obilježje</th><th>Barok / klasicizam (17.-18. st.)</th><th>Preporod / romantizam (19. st.)</th></tr></thead>
        <tbody>
          <tr><td><strong>Cilj</strong></td><td>Čuvanje tradicije, pobožnost</td><td>Nacionalno buđenje, jezična standardizacija</td></tr>
          <tr><td><strong>Jezik</strong></td><td>Čakavština (Split), štokavština (Dubrovnik)</td><td><strong>Štokavština</strong> kao hrv. književni jezik</td></tr>
          <tr><td><strong>Pismo</strong></td><td>Različite grafije po regijama</td><td><strong>Gajeva latinica</strong> (1835.) — novi standard</td></tr>
          <tr><td><strong>Žanrovi</strong></td><td>Drama, ep, religiozna poezija</td><td>Lirska pjesma, spjev, budnica, proza, drama</td></tr>
          <tr><td><strong>Središnji autori</strong></td><td>Gundulić, Marulić, Držić</td><td><strong>Gaj, Mažuranić</strong>, Demeter, Vraz, Šenoa</td></tr>
          <tr><td><strong>Središta</strong></td><td>Dubrovnik, Split, Zagreb</td><td><strong>Zagreb</strong> (Danica, Iskra, Matica ilirska)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-warn" style="display:flex;gap:14px;align-items:flex-start">
      <div class="bw-ico">🇭🇷</div>
      <div class="bw-body">
        <div class="bw-title">Zašto je preporod važan za cijelu hrv. književnost?</div>
        <div class="bw-txt"><strong>Hrvatski književni jezik</strong> kakav danas koristimo <em>nastaje u preporodu</em>. Gaj prihvaća štokavštinu i uvodi latinicu. Ivanu Mažuraniću to je omogućilo da napiše <em>Smrt Smail-age Čengića</em> — spjev koji objedinjuje sve tri vrste u zreloj umjetničkoj formi. <strong>Prije preporoda: regionalni pisci. Poslije: nacionalna književnost.</strong></div>
      </div>
    </div>

    <!-- SEC 02: Kronologija preporoda -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Kronologija preporoda — ključni događaji</div><div class="sec-line"></div></div>

    <div class="timeline">
      <div class="tl-event"><div class="tl-year">1813.</div><div class="tl-title">Biskup Maksimilijan Vrhovac poziva na očuvanje narodnih pjesama</div><div class="tl-desc">Pastirska poslanica — prvi predpočetni impuls nacionalnog buđenja.</div></div>
      <div class="tl-event milestone"><div class="tl-year">1814.</div><div class="tl-title">Ivan Mažuranić rođen</div><div class="tl-desc">U Novom Vinodolskom. Kasnije ban Hrvatske (1873.–1880.), pjesnik, jezikoslovac.</div></div>
      <div class="tl-event"><div class="tl-year">1830.</div><div class="tl-title">Ljudevit Gaj objavljuje <em>Kratku osnovu horvatsko-slavenskog pravopisanja</em></div><div class="tl-desc">Temelj za novu latiničku grafiju. Buduća „Gajica".</div></div>
      <div class="tl-event milestone"><div class="tl-year">1835.</div><div class="tl-title">★ POČETAK PREPORODA</div><div class="tl-desc"><em>Danica horvatska, slavonska i dalmatinska</em> — Gajev časopis. Tiska ilirica + budnice. Mažuranić doprinosi od prvih brojeva.</div></div>
      <div class="tl-event"><div class="tl-year">1836.</div><div class="tl-title">Časopis mijenja ime u <em>Danica ilirska</em></div><div class="tl-desc">Prihvaćanje ilirskog imena — šira južnoslavenska ideja.</div></div>
      <div class="tl-event"><div class="tl-year">1840.</div><div class="tl-title">Smail-aga Čengić ubijen u stvarnosti</div><div class="tl-desc">Stvarni povijesni događaj — Crnogorci iz Drobnjaka ubijaju bosansko-hercegovačkog muselima. Povod za Mažuranićev spjev.</div></div>
      <div class="tl-event"><div class="tl-year">1842.</div><div class="tl-title">Mažuranić dopunjava Gundulićev <em>Osman</em></div><div class="tl-desc">Piše 14. i 15. pjevanje — dokaz poetske zrelosti prije glavnog djela.</div></div>
      <div class="tl-event"><div class="tl-year">1843.</div><div class="tl-title">Zabrana ilirskog imena</div><div class="tl-desc">Mađarska Dieta zabranjuje „ilirsko" ime. Pokret nastavlja pod hrv. imenom.</div></div>
      <div class="tl-event milestone"><div class="tl-year">1846.</div><div class="tl-title">★ <em>SMRT SMAIL-AGE ČENGIĆA</em> objavljena</div><div class="tl-desc">U almanahu <em>Iskra</em> (Zadar). 1134 stiha, 5 pjevanja. Najveći domet hrv. književnosti 19. st.</div></div>
      <div class="tl-event"><div class="tl-year">1847.</div><div class="tl-title">Hrvatski jezik uveden u službu</div><div class="tl-desc">Zamjenjuje latinski u Hrv. saboru — povijesni politički uspjeh preporoda.</div></div>
      <div class="tl-event"><div class="tl-year">1848.</div><div class="tl-title">Revolucija i kraj preporoda kao pokreta</div><div class="tl-desc">Ban Jelačić, ukidanje feudalizma. Ilirski pokret se transformira u moderne političke stranke.</div></div>
      <div class="tl-event"><div class="tl-year">1873.–1880.</div><div class="tl-title">Mažuranić ban Hrvatske</div><div class="tl-desc">„Pučki ban" — reforme u prosvjeti, sudstvu, upravi. Od književnika do državnika.</div></div>
      <div class="tl-event"><div class="tl-year">1890.</div><div class="tl-title">Mažuranić umire u Zagrebu</div><div class="tl-desc">76 godina. Ostavio opus koji se „zbog umjetničke vrijednosti čita kao da ga je napisao mnogo više" — samo jedno veliko djelo, ali vrhunsko.</div></div>
    </div>

    <!-- SEC 03: Ivan Mažuranić — život i opus -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Ivan Mažuranić — život i opus</div><div class="sec-line"></div></div>

    <div class="author-card">
      <div class="ac-header">
        <div class="ac-monogram">IM</div>
        <div class="ac-meta">
          <div class="ac-name">Ivan Mažuranić</div>
          <div class="ac-dates">Novi Vinodolski · 1814. – 1890. (Zagreb)</div>
          <div class="ac-tags" style="margin-top:6px">
            <span class="hchip br" style="font-size:8px">„pučki ban"</span>
            <span class="hchip go" style="font-size:8px">Pjesnik preporoda</span>
            <span class="hchip pa" style="font-size:8px">Ban Hrvatske 1873.-1880.</span>
          </div>
        </div>
      </div>
      <div class="ac-body">
        <p>Rođen <strong>1814.</strong> u Novom Vinodolskom u težačkoj obitelji. Školovanje u rodnom mjestu, gimnazija u Rijeci (završava 1833.). Studij filozofije u Zagrebu i Szombathelyju (Ugarska). Vraća se u Zagreb 1835. — upravo kad počinje preporod — i upisuje Pravoslovnu akademiju. Odvjetnički ispit 1840.</p>
        <p><strong>1840.–1848.</strong> živi u Karlovcu, radi kao odvjetnik, ali intenzivno piše. Tu nastaju <em>Nenadović Rado</em>, <em>Vjekovi Ilirije</em>, i najvažnije — <strong>Smrt Smail-age Čengića</strong> (1846.). Piše programske budnice, ljubavnu liriku, jezikoslovna djela.</p>
        <p><strong>Nakon 1848.</strong> prelazi u političku karijeru. Zastupnik u Saboru, dvorski kancelar, <strong>ban Hrvatske 1873.–1880.</strong> („pučki ban" — nije plemić). Reforme u prosvjeti, sudstvu, upravi. Povlači se 1880., umire 1890. u Zagrebu.</p>
        <div class="ac-works">
          <div class="ac-works-lbl">Ključna djela</div>
          <div class="ac-work-item">
            <div class="ac-badge">⚔</div>
            <div>
              <div class="ac-work-title">Smrt Smail-age Čengića</div>
              <div class="ac-work-meta">1846., Iskra (Zadar) · Romantičarski spjev · 5 pjevanja · 1134 stiha</div>
              <div class="ac-work-desc">Najvažnije djelo hrv. preporoda. Romantičarski spjev o smrti bosansko-hercegovačkog muselima Smail-age Čengića, ubijenog 1840. od Crnogoraca. 5 pjevanja (<em>Agovanje, Noćnik, Četa, Harač, Kob</em>). <strong>Obvezatno djelo za cjelovito čitanje 2026.</strong> Pisano štokavskim osmercem i desetercem. Spaja epsku, dramsku i lirsku komponentu.</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">📜</div>
            <div>
              <div class="ac-work-title">Osman — dopune 14. i 15. pjevanja</div>
              <div class="ac-work-meta">1842., dovršenje Gundulićeva epa</div>
              <div class="ac-work-desc">Mažuranić dovršava izgubljena pjevanja <em>Osmana</em> — tehnički tour de force koji dokazuje njegovu poetsku sposobnost prije pisanja glavnog djela. Imitacija Gundulićeva baroknog stila.</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">📖</div>
            <div>
              <div class="ac-work-title">Njemačko-ilirski slovar</div>
              <div class="ac-work-meta">1842., suautor s Jakovom Užarevićem</div>
              <div class="ac-work-desc">Prvi veliki hrvatski rječnik s <strong>40.000 natuknica</strong>. Ključni alat za razvoj hrv. književnog jezika — terminologija, pravni i znanstveni pojmovi.</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">✒</div>
            <div>
              <div class="ac-work-title">Budnice i preporodna poezija</div>
              <div class="ac-work-meta">1835.–1845., Danica ilirska</div>
              <div class="ac-work-desc">Programske pjesme — <em>Vjekovi Ilirije</em>, <em>Ilir iz Mostara</em>, <em>Horvatskoj</em>. Objavljuju se u Gajevoj Danici. Tipična preporodna funkcija: buđenje nacionalne svijesti kroz stih.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SEC 04: Smrt Smail-age Čengića — nastanak i karakter -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Smrt Smail-age Čengića — nastanak i karakter</div><div class="sec-line"></div></div>

    <p>Spjev je nastao <strong>1845.–1846.</strong> djelomično <em>po narudžbi</em> Dimitrija Demetra za almanah <em>Iskra</em>. Osnovna građa: stvarni događaj iz <strong>listopada 1840.</strong> — Crnogorci iz Drobnjaka ubijaju hercegovačkog muselima Smail-agu Čengića na <strong>Mljetičkom polju</strong> (ne Gackom kao u spjevu). Mažuranić odstupa od povijesnih činjenica u smislu pjesničke slobode.</p>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Element</th><th>Činjenica</th></tr></thead>
        <tbody>
          <tr><td><strong>Godina nastanka</strong></td><td>Napisan ~1845.–1846. · Objavljen <strong>1846.</strong></td></tr>
          <tr><td><strong>Mjesto objave</strong></td><td>Almanah <em>Iskra</em> (Zadar)</td></tr>
          <tr><td><strong>Povod</strong></td><td>Narudžba Dimitrija Demetra za Iskru</td></tr>
          <tr><td><strong>Povijesni predmet</strong></td><td>Pogibija Smail-age Čengića u listopadu 1840.</td></tr>
          <tr><td><strong>Vrsta djela</strong></td><td>Romantičarski <strong>spjev</strong> (ne ep, ne balada) — hibridna forma</td></tr>
          <tr><td><strong>Struktura</strong></td><td>5 pjevanja · 1134 stiha</td></tr>
          <tr><td><strong>Stihovi</strong></td><td><strong>Štokavski osmerac + deseterac</strong> (prateće arhaične glasovne forme)</td></tr>
          <tr><td><strong>Jezik</strong></td><td>Štokavština ijekavica · turcizmi · arhaizmi · biblijski izrazi · talijanizmi</td></tr>
          <tr><td><strong>Mjesto radnje</strong></td><td>Hercegovina (Stolac, Gacko polje) + Crna Gora (Cetinje)</td></tr>
          <tr><td><strong>Vrijeme radnje</strong></td><td>19. st. · konkretizirano u stvarnim krajevima</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Zašto je djelo „spjev", a ne „ep"?</div>
      <div class="box-key-txt">
        <strong>Ep</strong> — dugo narativno djelo u stihu (npr. <em>Ilijada</em>, <em>Osman</em>, <em>Judita</em>). <br>
        <strong>Spjev</strong> — kraće djelo u stihu s jače izraženom <em>lirskom i dramskom</em> komponentom. <br><br>
        Smrt Smail-age Čengića nije ep jer: (1) kraće je (~1000 stihova vs. tisuće u epu), (2) lirika i drama dominiraju nad narativom, (3) dijalozi i monolozi dominiraju, (4) piše o <em>jednom događaju</em>, ne o širokoj povijesnoj radnji. <em>Spjev objedinjuje sva tri književna roda.</em>
      </div>
    </div>

    <!-- SEC 05: 5 pjevanja — kompozicija -->
    <div class="soft-hint"><div class="soft-hint-ico">💡</div><div class="soft-hint-body">5 pjevanja = 5 pitanja na ispitu! Pjevanje <b>Noćnik</b> je lirski vrhunac (crnogorski vojnici pred bitku), <b>Haranje</b> je dramatično, <b>Smrt</b> je katarza. Za esej: poveži strukturu s temom slobode vs. tiranije.</div></div>
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · 5 pjevanja — kompozicija djela</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Pjevanje</th><th>Stihovi</th><th>Radnja (sažetak)</th><th>Mjesto</th></tr></thead>
        <tbody>
          <tr><td><strong>I. Agovanje</strong></td><td>~180</td><td>Smail-aga u Stolcu muči i ubija Crnogorce; starac Durak pokušava ga odgovoriti; aga ga pogubljuje</td><td>Stolac (Hercegovina)</td></tr>
          <tr><td><strong>II. Noćnik</strong></td><td>~160</td><td>Durakov sin Novica bježi u Crnu Goru, pokršćava se, pridružuje četi radi osvete</td><td>Put od Stolca do Cetinja</td></tr>
          <tr><td><strong>III. Četa</strong></td><td>~145</td><td>Crnogorci se pripremaju na osvetu; svećenik drži domoljubni govor; moralna priprema bitke</td><td>Cetinje · Crna Gora</td></tr>
          <tr><td><strong>IV. Harač</strong></td><td><strong>623</strong> (najduže)</td><td>Aga na Gackom polju skuplja harač (porez); stiže oluja; bitka; aga pogibije</td><td>Gacko polje (Hercegovina)</td></tr>
          <tr><td><strong>V. Kob</strong></td><td><strong>34</strong> (najkraće)</td><td>Kratka alegorijska slika pada tiranije; pustinjak na Lovćenu refleksira o pravednoj osveti</td><td>Lovćen · Crna Gora</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 Kompozicijski ključevi</div>
      <div class="box-signal-txt">
        <strong>1. Asimetrija</strong> — IV. Harač (623 stiha) je 5x duži od V. Kob (34 stiha). Namjerno: <em>središte djela je bitka, ne kraj.</em> <br>
        <strong>2. Inverzna struktura</strong> — Agovanje otvara moć tiranije; Kob je zatvara alegorijski. <em>Srednja 3 pjevanja su priprema za Harač.</em> <br>
        <strong>3. Tri strane</strong> — I: Turci; II-III: Crnogorci + Novica; IV: sukob; V: piščev komentar. <strong>Mažuranić svjesno balansira.</strong>
      </div>
    </div>

    <!-- SEC 06: Glavni likovi -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · Glavni likovi — karakterizacija</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Lik</th><th>Opis</th><th>Karakterizacija</th><th>Ključni moment</th></tr></thead>
        <tbody>
          <tr><td><strong>Smail-aga Čengić</strong></td><td>Bosansko-hercegovački muselim, tiranski vladar</td><td>Demonski lik — ohol, krvnik, sadist, tašt. <em>„Boj se onoga tko je viko bez golema mrijet jada."</em> Pojavljuje se samo u Agovanju i Haraču, ali je prisutan u cijelom djelu</td><td>Pogibije u IV. Haraču tijekom napada čete</td></tr>
          <tr><td><strong>Novica</strong></td><td>Durakov sin, agin kavaz (stražar)</td><td>Duboka unutarnja transformacija. <em>Od krvnika („krvnik Crne Gore") do osvetnika.</em> Individualni lik, ne kolektiv — motiviran osobnom boli</td><td>Bijeg u Crnu Goru (II. Noćnik), pokrštenje, osveta (IV. Harač)</td></tr>
          <tr><td><strong>Durak</strong></td><td>Stariji Turčin, agin savjetnik, otac Novice</td><td>Mudar starac — savjetuje agi da ne izazove osvetu. U stvarnosti se zvao Milutin (Mažuranić ga turči radi pjesničke slobode)</td><td>Aga ga daje pogubiti u I. Agovanju — pokretač Novice u osvetu</td></tr>
          <tr><td><strong>Crnogorci (kolektiv)</strong></td><td>Brđani, junaci koji pate pod tiranijom</td><td>Kolektivni lik — hrabri, šute pred mukama, junački umiru. <em>Nisu individualizirani</em> — simbol slobodarskog naroda općenito</td><td>Četa na Cetinju (III), napad (IV), osveta</td></tr>
          <tr><td><strong>Svećenik (starac)</strong></td><td>Crnogorski pravoslavni svećenik</td><td>Glas moralnog autoriteta. Domoljubni monolog u III. Četi — poziv na borbu u ime Boga i slobode</td><td>Blagoslov čete, priprema bitke</td></tr>
          <tr><td><strong>Agine sluge (Omer, Jašar, Mujo, Safer, Bauk)</strong></td><td>Individualizirani Turci iz aginog logora</td><td>„Loše sluge lošeg gospodara" — spremni ga napustiti. Safer je ulizica i nasilnik; Bauk pjeva rugalicu i preživi bitku</td><td>Pojavljuju se u Haraču; Bauk kao svjedok raspleta</td></tr>
          <tr><td><strong>Mirko</strong></td><td>Mladi Crnogorac ubijen na početku aginih mučenja</td><td>Prvi simbol nevinih žrtava. Ime čitatelju ostaje — izaziva emocionalnu motivaciju za osvetu</td><td>Pogibija na rijeci Morači u I. Agovanju</td></tr>
          <tr><td><strong>Pustinjak na Lovćenu</strong></td><td>Refleksivni lik u V. Kobi</td><td>Piščev glas — filozofska refleksija o prolaznosti sile i konačnoj pravdi</td><td>Jedini monolog V. Kobi — zaključak djela</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 07: Teme i ideja -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · Teme i ideja djela</div><div class="sec-line"></div></div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip go">TEMA 1</span>
        <div class="sc-name">Konkretna: sukob Turaka i kršćana</div>
        <div class="sc-desc">Povijesna proturska tematika — borba Južnih Slavena za oslobođenje od turske vlasti. U kontekstu preporoda: poziv na zajedništvo južnoslavenskih naroda.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip br">TEMA 2</span>
        <div class="sc-name">Univerzalna: sloboda vs. tiranija</div>
        <div class="sc-desc">Općeljudski motiv — <strong>pobjeda Dobra nad Zlom</strong>. Tiranija (Smail-aga) uvijek biva poražena pravednom osvetom naroda. <em>„Boj se onoga tko je viko bez golema mrijet jada" = tiranin se boji pravedne kazne.</em></div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip te">TEMA 3</span>
        <div class="sc-name">Moralna: osveta i preobraćenje</div>
        <div class="sc-desc">Novičina transformacija: od krvnika do osvetnika. <em>Tema preobraćenja</em> kroz osobnu bol — Durakovo ubojstvo mijenja sina. Kršćansko pokrštenje kao simbolična transformacija.</div>
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Glavna ideja djela</div>
      <div class="box-key-txt">
        <strong>Prolaznost sile i konačna pobjeda pravde.</strong> Tiranska vlast se ne može dugo održati — svaka nepravda izaziva osvetu, a tiranin pada pred pravednim narodom. <em>Ideja direktno povezuje djelo s preporodnim kontekstom:</em> kao što će tiranski Turci pasti, tako će i austrougarski/mađarski pritisak na hrv. narod konačno biti prebrođen. Djelo postaje <strong>alegorija hrv. nacionalne borbe za slobodu.</strong>
      </div>
    </div>

    <!-- SEC 08: Stih i jezik -->
    <div class="soft-hint"><div class="soft-hint-ico">💡</div><div class="soft-hint-body">Stih Mažurania: <b>deseterac</b> (10-slogovni, epski stih narodne pjesme) — ali Mažuranić ga uzdignue na razinu visoke knjižvnosti. Usporedi s Gundulićevim osmom i Marulićevim dvanaestercem — često dolazi pitanje o stihovima.</div></div>
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">08 · Stih i jezik — kako Mažuranić gradi spjev</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Stih</th><th>Gdje se pojavljuje</th><th>Funkcija</th></tr></thead>
        <tbody>
          <tr><td><strong>Osmerac (4+4)</strong></td><td>Lirske dionice, refleksije, unutarnji monolozi</td><td>Melodičan, pogodan za emociju — tipičan stih narodne pjesme i romantizma</td></tr>
          <tr><td><strong>Deseterac (4+6)</strong></td><td>Narativne i dramske dionice, bitke, dijalozi</td><td>Tradicionalni junački stih hrv. i srpske narodne epike — autoritet i autentičnost</td></tr>
          <tr><td><strong>Slavenska antiteza</strong></td><td>Početak II. Noćnika: <em>„Je li hajduk, il' uhoda turska... Nit je hajduk, nit uhoda turska..."</em></td><td>Pitanje–negacija–odgovor — preuzeto iz narodne poezije</td></tr>
        </tbody>
      </table>
    </div>

    <div class="featured-quote" data-cit-cat="himna">
      <span class="fq-napamet">★ NAPAMET</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Boj se onoga, tko je viko<br>Bez golema mrijet jada!</div>
        <div class="fq-meta">— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · NAJPOZNATIJI CITAT · <strong>Tiranin se boji pravedne kazne</strong></div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Boj se onoga, tko je viko bez golema mrijet jada! — Mažuranić, Smrt Smail-age Čengića, I. Agovanje')">⎘</button>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">📜 Jezik Smrti Smail-age</div>
      <div class="box-int-txt">
        Štokavština ijekavica + slojevi:<br>
        <strong>Turcizmi:</strong> kidisati, delija, kapija, toke, fišek, kulaš, sofra, jatagan, harač, aga, kavaz<br>
        <strong>Arhaizmi:</strong> tudijer, jerbo, vaj, prik, cić<br>
        <strong>Biblijski izrazi:</strong> kerv (krv), serce (srce), kerst (krst) — u izvornom pravopisu Mažuranić piše <em>er</em> umjesto vokalnog <em>r</em><br>
        <strong>Talijanizmi + arabizmi + grecizmi</strong> u rijetkim slučajevima<br><br>
        <em>Ovaj jezični miks nije slučajnost — Mažuranić svjesno spaja orijentalne elemente s hrv. književnom tradicijom kako bi dočarao povijesni i kulturni okvir radnje.</em>
      </div>
    </div>

    <!-- SEC 09: Stilske osobine i romantizam -->
    <div class="soft-hint"><div class="soft-hint-ico">💡</div><div class="soft-hint-body">Romantizam u djelu: <b>idealizirani junaci</b> (crnogorski vojnici kao epski heroji), <b>suprotnost sloboda–ropstvo</b>, <b>priroda kao pozadina</b>, <b>promišljanje o Bogu i sudbini</b>. Usporedi s europskim romantizmom (H06 Byron, Puškin).</div></div>
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">09 · Romantizam — kako se očituje u djelu</div><div class="sec-line"></div></div>

    <p>Djelo pripada <strong>hrvatskom romantizmu</strong> (u preporodnom kontekstu). Glavna romantičarska obilježja:</p>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip pa">R1</span>
        <div class="sc-name">Nacionalna tematika</div>
        <div class="sc-desc">Borba za slobodu naroda, povijesna tema, domoljublje. Djelo je <em>pjesnički proglas slavenskog zajedništva</em>.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip br">R2</span>
        <div class="sc-name">Idealizirani kolektivni junak</div>
        <div class="sc-desc">Crnogorci kao kolektiv junaka, bez individualiziranih slabosti. Romantičarski junak = simbol naroda.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip te">R3</span>
        <div class="sc-name">Kontrast Dobra i Zla</div>
        <div class="sc-desc">Oštra polarizacija likova: Smail-aga = Zlo, Crnogorci + Novica = Dobro. Nema sivih zona — tipično romantično.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip go">R4</span>
        <div class="sc-name">Priroda kao sudionik</div>
        <div class="sc-desc">Oluja u Haraču — priroda se svrstava protiv tiranina. Planinski krajolik Crne Gore kao simbol slobode.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip pa">R5</span>
        <div class="sc-name">Oslanjanje na usmenu poeziju</div>
        <div class="sc-desc">Osmerac, deseterac, slavenska antiteza, slikovite figure iz narodne epike. Romantizam okreće pogled k <em>narodu</em> kao izvoru.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip br">R6</span>
        <div class="sc-name">Moralni patos i snažne emocije</div>
        <div class="sc-desc">Dramatska napetost, moralna dilema (Novica), patetični monolozi (svećenik, pustinjak). Patos u službi ideje.</div>
      </div>
    </div>

    <!-- SEC 10: Stilska sredstva -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">10 · Stilska sredstva — analiza</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Stilsko sredstvo</th><th>Primjer iz Smrti Smail-age</th><th>Učinak</th></tr></thead>
        <tbody>
          <tr><td><strong>Slavenska antiteza</strong></td><td>„Je li hajduk, il' uhoda turska? Nit je hajduk, nit uhoda turska, već Novica..."</td><td>Narodno-epska tehnika — pitanje, negacija, odgovor. Gradi napetost.</td></tr>
          <tr><td><strong>Epiteti</strong></td><td>„mrki vuk" (aga), „sviloruna krda", „krvnik Crne Gore" (Novica), „oholi silnik"</td><td>Karakterizacija u narodno-epskom duhu</td></tr>
          <tr><td><strong>Metafora</strong></td><td>„S planinskoga gladna miša" (o Novici), „vranom vranu plijen"</td><td>Slikovita osobina lika/stanja</td></tr>
          <tr><td><strong>Kontrast / antiteza</strong></td><td>Smail-aga (tiranija) vs. Crnogorci (sloboda); Novica (prije) vs. Novica (poslije)</td><td>Polariziranje svijeta — tipično romantično</td></tr>
          <tr><td><strong>Kletva / blagoslov</strong></td><td>„Boj se onoga tko je viko bez golema mrijet jada!"</td><td>Patos, moralna poruka, apel</td></tr>
          <tr><td><strong>Hiperbola</strong></td><td>Opisi aginog bijesa, opisi oluje u Haraču</td><td>Romantičarsko pojačanje emocije</td></tr>
          <tr><td><strong>Personifikacija</strong></td><td>Oluja koja se svrstava protiv aga; noć kao pomoć Novici</td><td>Priroda kao moralno aktivna sila</td></tr>
          <tr><td><strong>Apostrofa</strong></td><td>Svećenikove obraćanja vojnicima u III. Četi</td><td>Retorička napetost monologa</td></tr>
          <tr><td><strong>Nabrajanje</strong></td><td>Nabrajanje mučenja u I. Agovanju (kolac, vješanje, odrubljivanje)</td><td>Pojačanje užasa tiranije</td></tr>
          <tr><td><strong>Biblijske aluzije</strong></td><td>„Sve je grijeh, sve su djela prika; Bez kajanja nema oprosnika"</td><td>Spajanje s kršćanskom moralnom tradicijom</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 11: H14 i ostalo gradivo — konekti -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">11 · H14 i ostalo gradivo — kako se spaja</div><div class="sec-line"></div></div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip br">H13</span>
        <div class="sc-name">H14 → H13 (Gundulić · Dubravka)</div>
        <div class="sc-desc">Obje su hrv. alegorijska djela o slobodi. <b>Razlika:</b> Gundulić = barok, drama, Dubrovnik (17. st.); Mažuranić = romantizam, spjev, Hercegovina (19. st.). <em>Tradicija slobodarske književnosti:</em> Gundulić → Mažuranić. Oba djela završavaju pobjedom pravednika.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip go">H12</span>
        <div class="sc-name">H14 → H12 (Marulić · Judita)</div>
        <div class="sc-desc">Obje su hrv. epska djela o borbi protiv orijentalne tiranije (Judita: Asirci; Smail-aga: Turci). <b>Razlika:</b> Marulić = renesansa, ep, biblija; Mažuranić = romantizam, spjev, povijest. <em>Zajedničko:</em> alegorijska dimenzija, motiv žene/naroda koji svrgava tiranina.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip te">H17</span>
        <div class="sc-name">H14 → H17 (Stilske figure)</div>
        <div class="sc-desc">Smrt Smail-age je <strong>rudnik stilskih sredstava</strong>: slavenska antiteza (pitanje–negacija–odgovor), hiperbola, kontrast, epitet, metafora, personifikacija. Za H17 koristi ovo djelo kao glavni izvor primjera.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip pa">H18</span>
        <div class="sc-name">H14 → H18 (Versifikacija)</div>
        <div class="sc-desc">Osmerac i deseterac u istom djelu — savršena lekcija o metričkim formama hrv. narodne poezije. Za esej o versifikaciji: kontrast osmerca (lirski) i deseterca (epski) u Smrti Smail-age je primjer autora koji svjesno mijenja ritam.</div>
      </div>
    </div>

    <!-- SEC 12: Ključni kontrasti za esej -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">12 · Ključni kontrasti za interpretaciju</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Kontrast</th><th>Djelo</th><th>Suprotnost</th><th>Interpretacija</th></tr></thead>
        <tbody>
          <tr><td><strong>Aga vs. Crnogorci</strong></td><td>Individualni demonski tiranin</td><td>Kolektivni junački narod</td><td>Tiranija (pojedinac) vs. sloboda (zajednica)</td></tr>
          <tr><td><strong>Aga vs. Durak</strong></td><td>Mlada oholost</td><td>Stara mudrost</td><td>Čak ni vlastiti narod ne podupire tiranina</td></tr>
          <tr><td><strong>Novica (prije) vs. Novica (poslije)</strong></td><td>Turski krvnik</td><td>Krsni osvetnik</td><td>Mogućnost moralnog preobraćenja</td></tr>
          <tr><td><strong>Agovanje (I) vs. Kob (V)</strong></td><td>Moć tiranije na vrhuncu</td><td>Alegorija pada tiranije</td><td>Kompozicijski okvir — svaka tiranija pada</td></tr>
          <tr><td><strong>Harač (IV) vs. Kob (V)</strong></td><td>623 stiha akcije</td><td>34 stiha refleksije</td><td>Asimetrija — težina bitke vs. filozofske poante</td></tr>
          <tr><td><strong>Stolac vs. Cetinje</strong></td><td>Prostor tiranije</td><td>Prostor slobode</td><td>Geografska simbolika — sukob dvaju svjetova</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 13: Mažuranić na prstu -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">13 · Mažuranić na prstu — 60 sekundi</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Pitanje</th><th>Odgovor</th></tr></thead>
        <tbody>
          <tr><td>Tko je autor Smrti Smail-age Čengića?</td><td><strong>Ivan Mažuranić</strong> (1814.–1890.), Novi Vinodolski → Zagreb</td></tr>
          <tr><td>Kada je djelo nastalo?</td><td>Objavljeno <strong>1846.</strong> u almanahu <em>Iskra</em> (Zadar)</td></tr>
          <tr><td>Na temelju čega?</td><td>Stvarna pogibija Smail-age Čengića (listopad 1840.)</td></tr>
          <tr><td>Vrsta djela?</td><td><strong>Romantičarski spjev</strong> (ne ep, ne balada) — hibridna forma</td></tr>
          <tr><td>Struktura?</td><td>5 pjevanja (Agovanje, Noćnik, Četa, Harač, Kob) · 1134 stiha</td></tr>
          <tr><td>Najduže pjevanje?</td><td><strong>IV. Harač</strong> — 623 stiha</td></tr>
          <tr><td>Najkraće pjevanje?</td><td><strong>V. Kob</strong> — 34 stiha</td></tr>
          <tr><td>Stihovi?</td><td>Štokavski osmerac (4+4) + deseterac (4+6)</td></tr>
          <tr><td>Glavni protagonist/antagonist?</td><td>Smail-aga Čengić (antagonist) · Novica (protagonist)</td></tr>
          <tr><td>Ključni citat?</td><td>„Boj se onoga tko je viko bez golema mrijet jada!"</td></tr>
          <tr><td>Glavna ideja?</td><td>Prolaznost sile, pobjeda pravde, sloboda vs. tiranija</td></tr>
          <tr><td>Pripada razdoblju?</td><td>Hrv. romantizam / narodni preporod</td></tr>
          <tr><td>Obvezatno čitanje 2026?</td><td><strong>★ DA</strong> — obvezatno djelo za cjelovito čitanje na državnoj maturi</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 14: Samoprocjena -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">14 · Samoprocjena — jesi li spreman/a?</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">✅ Označi što znaš — dobivaš live score</div>
      <div class="box-int-txt">Ne „mislim da znam". Označi samo ono što stvarno znaš, i gdje si siguran/sigurna.</div>
    </div>

    <div id="sc-list"></div>
    <div id="sc-score" style="margin-top:14px"></div>

    <!-- SEC 15: Finalni pregled -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">15 · Finalni pregled — sve u 3 minute</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">⚡ Recap — sve ključno u 5 rečenica</div>
      <div class="box-key-txt">
        <strong>1.</strong> <strong>Hrvatski narodni preporod</strong> (1835.–1848.) je kulturno-politički pokret koji standardizira hrv. književni jezik (Gaj, štokavština, latinica). <br>
        <strong>2.</strong> <strong>Ivan Mažuranić</strong> (1814.–1890.) najvažniji je pjesnik preporoda i kasniji ban Hrvatske (1873.–1880.). <br>
        <strong>3.</strong> <strong>Smrt Smail-age Čengića</strong> (1846.) je romantičarski spjev u 5 pjevanja (Agovanje, Noćnik, Četa, Harač, Kob) · 1134 stiha · osmerac + deseterac. <br>
        <strong>4.</strong> <strong>Radnja:</strong> Smail-aga Čengić muči Crnogorce; Novica (sin ubijenog Duraka) se osvetom priključuje četi koja ubija tiranina u Haraču; Kob reflektira o prolaznosti sile. <br>
        <strong>5.</strong> <strong>Ideja:</strong> <em>prolaznost sile i konačna pobjeda pravde</em> — alegorija nacionalne borbe za slobodu, ključni citat „Boj se onoga tko je viko bez golema mrijet jada!"
      </div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">✍ Tri gotove teze za rad o Smrti Smail-age Čengića</div>
      <div class="box-signal-txt">
        <em>1. „Mažuranićev spjev objedinjuje sva tri književna roda — epski narativ, dramske monologe i lirske refleksije — čime nadilazi tradicionalni ep i stvara novu formu hrvatskoga romantizma."</em><br><br>
        <em>2. „Sukob Smail-age i Crnogoraca nije tek povijesna tema, nego univerzalna alegorija pobjede Dobra nad Zlom, izražena kroz oštro polariziranu karakterizaciju i suglasje prirode s pravednima."</em><br><br>
        <em>3. „Asimetrična struktura djela — 623 stiha u IV. Haraču nasuprot 34 stiha u V. Kobi — odražava Mažuranićevu romantičarsku poetiku: težište nije na bitci, nego na moralnoj refleksiji o prolaznosti sile."</em>
      </div>
    </div>

    <!-- SEC 16: Nasljeđe -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">16 · Nasljeđe djela — zašto je važno danas</div><div class="sec-line"></div></div>

    <div class="sc">
      <div class="sc-name">🇭🇷 Smrt Smail-age kao nacionalni spomenik</div>
      <div class="sc-desc">Djelo je od objave 1846. bilo <strong>simbol hrv. borbe za slobodu</strong> i jezično-kulturni manifest preporoda. Prevedeno je na <em>više od 20 jezika</em> — njemački, talijanski, engleski, francuski, ruski. Među najvažnijim djelima hrv. kanona.</div>
    </div>
    <div class="sc">
      <div class="sc-name">📚 Smrt Smail-age na državnoj maturi 2026.</div>
      <div class="sc-desc">Mažuranićevo djelo je <strong>obvezatno djelo za cjelovito čitanje 2026./2027.</strong> — učenici moraju pročitati cijeli spjev i poznavati ga u detalje. Može se pojaviti u: (1) ulomku za analizu, (2) teorijskim pitanjima o preporodu/romantizmu, (3) komparaciji s drugim djelima.</div>
    </div>
    <div class="sc">
      <div class="sc-name">🎭 Moderne refleksije i adaptacije</div>
      <div class="sc-desc">Tema sloboda vs. tiranija u Mažuranićevom djelu <strong>nikada ne zastarijeva</strong>. U suvremenom hrv. kontekstu, djelo se čita kao univerzalni spomenik otporu svih vrsta ugnjetavanja — od balkanskih ratova do suvremenih političkih tema.</div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🏆 3 razloga zašto Smrt Smail-age ostaje relevantna</div>
      <div class="box-key-txt">
        <strong>1. Jezična vrhunska majstorija:</strong> Mažuranić je majstor štokavskog osmerca i deseterca. Jezik djela ostaje model za pjesnike.<br>
        <strong>2. Moralna univerzalnost:</strong> Tema prolaznosti sile primjenljiva je na svaku tiraniju — djelo ostaje moralni barometar.<br>
        <strong>3. Stilska inovacija:</strong> Objedinjenje epa, drame i lirike u jednom djelu — obilježje zrelog romantizma, utjecaj na sve kasnije hrv. spjevove.
      </div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">🌍 EUROPSKA PARALELA — romantizam (→ H06)</div>
      <div class="box-signal-txt">
        Europski romantizam (Puškin, Byron, Hugo, Heine) i <strong>ilirski preporod</strong> odvijaju se istovremeno — oba 1830-ih. Ilirci direktno preuzimaju romantičarsku ideologiju: narod, jezik, sloboda, priroda. Mažuranić je čitao Byrona; struktura Smail-age podsjeća na Byronove spjevove.<br><br>
        <b>Ključna razlika:</b> europski romantičar bježi u snove; hrvatski preporodilac mobilizira narod. Europski romantizam u detalje: <b>H06 · Romantizam</b>.
      </div>
    </div>

    <div class="nav-row">
      <span class="nb-btn off">← Početak</span>
      <span class="nb-btn primary" onclick="sw(1)">📖 5 pjevanja →</span>
    </div>

  
    <div class="cheat-card" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">SLJEDEĆE</div>
          <div class="cheat-ttl">Tab 1 · Mažuranić — Smail-aga (5 pjevanja)</div>
        </div>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col cheat-col-wide" style="font-family:var(--serif,Fraunces,serif);font-size:13.5px;color:var(--t2,#c5b8aa);line-height:1.65">
          <p style="margin:0">Teorija ti daje pretpovijest — <b>Tab 1</b> ulazi u <em>Smail-agu Čengića</em>. 5 pjevanja, romantičarski okvir, deseterac i ključni citati.</p>
        </div>
      </div>
    </div>

    </div><!-- /l0 -->

  <div class="layer" id="l1" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">5 pjevanja</span>
      <span class="pill p-go">1134 stiha</span>
      <span class="pill p-te">Likovi</span>
      <span class="pill p-pa">Stilska sredstva</span>
      <span class="pill p-r">Romantizam</span>
    </div>

    <p style="margin-bottom:20px">Mažuranićev spjev organiziran je u <strong>5 pjevanja</strong> nejednake duljine. Svako pjevanje ima zaseban <em>naslov</em> (stari slavenski termin), vlastitu dramsku funkciju i specifičan ton. Najduže je <strong>IV. Harač</strong> (623 stiha) — gdje je sukob; najkraće <strong>V. Kob</strong> (34 stiha) — gdje je filozofska refleksija. Klikni na pjevanje za detalje.</p>

    <!-- TIP BAR -->
    <div class="box-int" style="margin-bottom:18px">
      <div class="box-int-lbl">🎬 Kompozicijska asimetrija — namjera, ne slabost</div>
      <div class="box-int-txt">Mažuranić svjesno gradi <strong>asimetričnu strukturu</strong>: prva tri pjevanja su priprema, četvrto (<em>Harač</em>) je vrhunac akcije, a peto (<em>Kob</em>) je kratka refleksija. Ta disproporcija (623 vs. 34) naglašava da nije bitka cilj, nego <strong>moralna poanta o prolaznosti sile</strong>.</div>
    </div>

    <!-- SCENE-LIST — 5 pjevanja -->
    <div class="scene-list">
      <!-- I. Agovanje -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">I</div>
          <div class="scene-ttl">I. Agovanje — Smail-aga u Stolcu · ~180 stihova</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Radnja:</b> Smail-aga Čengić stoluje u svojoj kuli u <em>Stolcu (Hercegovina)</em>. Kako bi pokazao moć, naređuje svojim slugama da muče i pobiju zarobljene Crnogorce (kršćane). Zatvorenici su natjerani na kolac, vješanje, odrubljivanje glave — ali <em>šute i junački umiru</em>. Aga bjesni jer ga njihova hrabrost deklasira. Starac <strong>Durak</strong>, dugogodišnji aginov savjetnik, pokušava ga odgovoriti — savjetuje mu da ne izaziva osvetu. Aga u bijesu naređuje da se i <em>Durak pogubi</em>. Durakov sin <strong>Novica</strong> uzalud moli za oca.<br><br>
            
            <b>🎯 Ključni trenutci Agovanja:</b><br>
            <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px">
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700;width:130px">Otvaranje</td><td style="padding:6px 10px;border:1px solid var(--bd)">Aga u Stolcu, opis moći, naredba mučenja. Narativni ulazak u svijet tiranije.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Mučenja</td><td style="padding:6px 10px;border:1px solid var(--bd)">Kolac, vješanje, odsijecanje glava. Hrabar šut Crnogoraca. <strong>Mirko</strong> pogine.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Durakov savjet</td><td style="padding:6px 10px;border:1px solid var(--bd)">Starac Durak upozorava agu na osvetu. <em>„Boj se onoga tko je viko bez golema mrijet jada"</em> — najpoznatiji citat djela.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Agin bijes</td><td style="padding:6px 10px;border:1px solid var(--bd)">Aga ubija Duraka radi savjetovanja. <strong>Novica</strong>, sin, uzalud moli za oca. <em>Trenutak unutarnje transformacije Novice.</em></td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Zatvaranje</td><td style="padding:6px 10px;border:1px solid var(--bd)">Aginov vrhunac moći. Narativ naglašava <em>krhkost te moći</em> — svi daju naslutiti osvetu.</td></tr>
            </table>
            
            <b>Ključni likovi:</b> Smail-aga, Durak, Novica, Crnogorski zarobljenici (Mirko), Turske sluge.<br><br>
            
            <b>Ključni motivi:</b><br>
            • <em>Tiranija na vrhuncu</em> — prikaz demonstracijske moći<br>
            • <em>Hrabra šutnja</em> — Crnogorci umiru bez jauka<br>
            • <em>Glas savjeta</em> — Durak kao moralna tradicija<br>
            • <em>Pogibelj nevinih</em> — Mirko, drugi zarobljenici<br>
            • <em>Obiteljska tragedija</em> — Novica gubi oca<br><br>
            
            <b>Stih i stil:</b><br>
            • Prevladava <strong>osmerac</strong> (4+4) — narodno-epski ritam<br>
            • Epiteti karakterizacije: aga „mrki vuk", „oholi silnik"<br>
            • Slikovita opisna tehnika mučenja — patos<br>
            • Dijalozi aga–Durak: dramska napetost<br><br>
            
            <b>📜 Ključni citat iz Agovanja:</b><br>
            <em>„Boj se onoga, tko je viko / Bez golema mrijet jada!"</em> — Durak opominje agu da se tiranin uvijek boji pravedne kazne onoga tko nema što izgubiti.<br><br>
            
            <b>Dramska funkcija:</b> Klasična <em>ekspozicija</em> — uvedene su sve strane sukoba (aga vs. Crnogorci + Novica kao kasnija veza). Sukob je najavljen, ali još nije akcija.<br><br>
            
            <b>🎯 Esejski signal:</b> Agovanje nije samo scena nasilja — ono je <strong>moralni portret tiranije na vrhuncu</strong>. Mažuranić svjesno ne individualizira Crnogorce da bi oni postali simbol. Kroz Durakov savjet autor ubacuje <em>vlastitu filozofsku tezu</em>: tiranija uvijek izaziva osvetu. Ta teza je moto djela.
          </div>
        </div>
      </div>

      <!-- II. Noćnik -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">II</div>
          <div class="scene-ttl">II. Noćnik — Novičino putovanje · ~160 stihova</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Radnja:</b> Nakon ubojstva oca, <strong>Novica odlučuje osvetiti Durakovu smrt</strong>. Noću bježi iz Stolca prema Crnoj Gori. <em>Prikrada se kroz noć</em> — otud naslov „Noćnik". Narator postavlja <strong>slavensku antitezu</strong> na početku: <em>„Je li hajduk, il' uhoda turska? Nit je hajduk, nit uhoda turska, već Novica, Čengića kavazu..."</em> — stvara napetost kroz pitanje i negaciju. Novica stiže na Cetinje, <strong>pokrštava se</strong> (prelazi na pravoslavlje), i priključuje se crnogorskoj četi koja priprema osvetu.<br><br>
            
            <b>🎯 Ključni trenutci Noćnika:</b><br>
            <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px">
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700;width:130px">Otvaranje</td><td style="padding:6px 10px;border:1px solid var(--bd)"><strong>Slavenska antiteza</strong> — narator ne identificira nokćnika odmah, gradi napetost pitanjem–negacijom–odgovorom.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Bijeg</td><td style="padding:6px 10px;border:1px solid var(--bd)">Novica bježi kroz <em>planinske klance</em>, „kršnijeh Ćeklića". Priroda kao saveznik pravednima.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Dolazak na Cetinje</td><td style="padding:6px 10px;border:1px solid var(--bd)">„Novica pade na Cetinje" — simbolički pad starih identiteta. <em>Moralni korak.</em></td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Pokrštenje</td><td style="padding:6px 10px;border:1px solid var(--bd)"><strong>Prelazak na pravoslavlje</strong> — simbol moralnog preobraćenja od krvnika do osvetnika.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Priključenje četi</td><td style="padding:6px 10px;border:1px solid var(--bd)">Novica se priključuje crnogorskoj četi. <em>Individualna bol postaje kolektivni pokret.</em></td></tr>
            </table>
            
            <b>Ključni likovi:</b> Novica (u središtu), crnogorski pustahija/svećenik koji ga prima.<br><br>
            
            <b>Ključni motivi:</b><br>
            • <em>Nočna anonimnost</em> — maska, tajnovitost, prikradanje<br>
            • <em>Preobraćenje</em> — od krvnika Crne Gore do krsnog osvetnika<br>
            • <em>Priroda kao zaštitnik</em> — planina, noć, vjetar<br>
            • <em>Individualna motivacija</em> — Novica je jedini individualni lik<br>
            • <em>Identitetski prijelaz</em> — pokrštenje kao simbol moralne odluke<br><br>
            
            <b>Stih i stil:</b><br>
            • Prevladava <strong>osmerac</strong> — tempo dinamičan<br>
            • <strong>Slavenska antiteza</strong> na početku — narodno-epska tehnika<br>
            • Slikoviti opisi krajolika — romantičarska priroda<br>
            • Unutarnji monolog Novice — psihološka složenost<br><br>
            
            <b>📜 Ključni citat iz Noćnika:</b><br>
            <em>„Je li hajduk, il' uhoda turska, / Što uhodi sviloruna krda, / Il' volova stada vitoroga? / Nit je hajduk, nit uhoda turska, / Već Novica, Čengića kavazu..."</em> — klasična <strong>slavenska antiteza</strong>.<br><br>
            
            <b>Dramska funkcija:</b> <em>Prelazak</em> — radnja se seli s turskog tabora na crnogorski. Novica je jedini lik koji premošćuje oba svijeta — njegova priča je priča cijelog djela.<br><br>
            
            <b>🎯 Esejski signal:</b> Novica je <strong>jedini individualizirani lik</strong> u spjevu. Dok su Crnogorci kolektiv, a Smail-aga apstraktno zlo, Novica ima <em>unutarnju borbu, preobraćenje, osobnu motivaciju</em>. To ga čini modernim romantičarskim junakom — <em>pojedincem koji prolazi moralnu transformaciju</em>. Mažuranić kroz njega propituje: može li zli čovjek postati pravedan?
          </div>
        </div>
      </div>

      <!-- III. Četa -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">III</div>
          <div class="scene-ttl">III. Četa — Priprema osvete · ~145 stihova</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Radnja:</b> Na Cetinju se okuplja <strong>crnogorska četa</strong> koja se priprema za osvetu Smail-age. <em>Svećenik (starac)</em> drži domoljubni govor, blagosilja borce, poziva na borbu u ime Boga i slobode. Četa se moralno i duhovno priprema. Ovo je <em>najmirnije</em> pjevanje — nema akcije, samo moralne pripreme i izražavanje kolektivne volje. Pjevanje završava odlaskom čete prema Hercegovini.<br><br>
            
            <b>🎯 Ključni trenutci Čete:</b><br>
            <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px">
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700;width:130px">Otvaranje</td><td style="padding:6px 10px;border:1px solid var(--bd)">Opis čete — <em>kolektivni portret</em> junaka. Narator naglašava jednaki moralni status svih boraca.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Svećenikov govor</td><td style="padding:6px 10px;border:1px solid var(--bd)"><strong>⭐ Domoljubni monolog</strong> — najvažnija dionica pjevanja. Poziv na borbu u ime Boga i slobode.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Blagoslov</td><td style="padding:6px 10px;border:1px solid var(--bd)">Svećenik pričešćuje borce. <em>Duhovno posvećenje pravedne osvete.</em></td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Pričest i prisega</td><td style="padding:6px 10px;border:1px solid var(--bd)">Borci zajednički polaze. Crnogorci kao <em>kolektiv jednakih</em>. Novica među njima.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Odlazak</td><td style="padding:6px 10px;border:1px solid var(--bd)">Četa odlazi prema Gackom polju — susret s agom. Pjevanje završava u tišini prije oluje.</td></tr>
            </table>
            
            <b>Ključni likovi:</b> Crnogorska četa (kolektiv), Svećenik (glas autoriteta), Novica (skriven u masi).<br><br>
            
            <b>Ključni motivi:</b><br>
            • <em>Kolektiv junaka</em> — prikaz čete kao jedne cjeline<br>
            • <em>Moralna priprema bitke</em> — nije nasumična osveta<br>
            • <em>Religiozni blagoslov</em> — Bog je na strani pravednih<br>
            • <em>Domoljubni patos</em> — svećenikov govor kao ideološki vrhunac<br>
            • <em>Tišina prije bure</em> — kontrast s Haračom<br><br>
            
            <b>Stih i stil:</b><br>
            • Dominira <strong>deseterac</strong> — svečan, dostojanstven ton<br>
            • Svećenikov govor: <em>patos, apostrofa, retoričko pitanje</em><br>
            • Biblijske aluzije — „Sve je grijeh, sve su djela prika; Bez kajanja nema oprosnika"<br>
            • Slikoviti opisi čete — kolektivna ljepota junaštva<br><br>
            
            <b>📜 Ključni citat iz Čete:</b><br>
            <em>„Sve je grijeh, sve su djela prika; / Bez kajanja nema oprosnika."</em> — svećenikova moralna formula, ideološki centar djela.<br><br>
            
            <b>Dramska funkcija:</b> <em>Moralna priprema</em> — usporavanje tempa prije vrhunca. Narator uvodi ideološko opravdanje osvete prije nego ona stigne.<br><br>
            
            <b>🎯 Esejski signal:</b> Četa nije samo narativ — ona je <strong>ideološki centar djela</strong>. Mažuranić kroz svećenikov glas ustanovljuje <em>pravedan rat kao moralno opravdan čin</em>. Osveta koja slijedi u IV. Haraču nije osobna, nego <strong>kolektivna i sveta</strong>. Ovaj religiozno-politički stav je ključ za razumijevanje kako djelo funkcionira u preporodnom kontekstu: nacionalna borba za slobodu je <em>sveti zadatak</em>.
          </div>
        </div>
      </div>

      <!-- IV. Harač -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">IV</div>
          <div class="scene-ttl">IV. Harač — Bitka i agina smrt · ★ 623 stiha (najduže)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Radnja:</b> Aga se nalazi na <em>Gackom polju</em> — tu je stigao kako bi prikupio <strong>harač</strong> (godišnji porez od pučanstva). Prikuplja se narod, aga opet pokazuje moć, izvrše se nova zlostavljanja. Iznenada stiže <strong>strašna oluja</strong> — <em>priroda se svrstava protiv tiranina</em>. Pod krovom oluje, crnogorska četa napada. <em>Slijedi kaotična bitka</em> u kojoj pogine mnogo ljudi. Agine sluge pokušavaju mu pomoći, ali bez uspjeha. Novica direktno napada agu. <strong>Smail-aga pogibije</strong> od crnogorskog pravednog udara. Ostaje <em>Bauk</em>, jedan od aginih sluga, kao svjedok događaja koji će to ispričati.<br><br>
            
            <b>🎯 Ključni trenutci Harača (6 faza):</b><br>
            <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px">
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700;width:100px">1. Priprema</td><td style="padding:6px 10px;border:1px solid var(--bd)">Aga na Gackom polju skuplja harač. Opis aginog tabora, ponovno pokazivanje moći.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">2. Zlostavljanja</td><td style="padding:6px 10px;border:1px solid var(--bd)">Nova mučenja pučanstva. Aga ne uči iz prošlosti — ohol ostaje do kraja.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">3. ★ Oluja</td><td style="padding:6px 10px;border:1px solid var(--bd)"><strong>Romantičarski vrhunac</strong>: priroda se buri, nebo grmi, kiša lije. <em>Priroda kao moralni sudac.</em></td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">4. Napad čete</td><td style="padding:6px 10px;border:1px solid var(--bd)">Crnogorci napadaju pod zaklonom oluje. Kaotična bitka — narator ne imenuje boraca, prikaz kolektivne akcije.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">5. ★ Agina smrt</td><td style="padding:6px 10px;border:1px solid var(--bd)"><strong>Vrhunac djela.</strong> Smail-aga pogibije. Novica sudjeluje u bitci. Tiranija pada.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">6. Rasap</td><td style="padding:6px 10px;border:1px solid var(--bd)">Aginove sluge bježe. <strong>Bauk</strong> preživi kao svjedok — pjeva rugalicu mrtvom agi.</td></tr>
            </table>
            
            <b>Ključni likovi:</b> Smail-aga (u zadnjem pojavljivanju), Crnogorska četa, Novica, agine sluge (Omer, Jašar, Mujo, Safer, Bauk).<br><br>
            
            <b>Ključni motivi:</b><br>
            • <em>Harač kao simbol tiranije</em> — porez = eksploatacija<br>
            • <em>Oluja kao moralna kazna</em> — priroda protiv nasilja<br>
            • <em>Pravedna bitka</em> — kolektiv nad pojedincom<br>
            • <em>Pad tiranina</em> — konačni trijumf pravde<br>
            • <em>Rugalica kao kazna</em> — Bauk kao ironični svjedok<br>
            • <em>Novica kao izvršitelj osvete</em> — osobni krug zatvaranja<br><br>
            
            <b>Stih i stil:</b><br>
            • Mješavina <strong>osmerca i deseterca</strong> — tempo dinamičan<br>
            • Hiperbole u opisu oluje i bitke<br>
            • Personifikacija prirode — moralno aktivna<br>
            • Kontrast tišine i buke, dana i noći<br>
            • Živopisni opisi akcije — romantičarski patos<br><br>
            
            <b>📜 Ključni citat iz Harača:</b><br>
            <em>„A u zemlji hercegovoj... / Tu nek plijen vranom vranu stoji."</em> — nakon agine smrti, Bauk pjeva rugalicu — tiranin postaje plijen gavrana.<br><br>
            
            <b>Dramska funkcija:</b> <em>Kulminacija</em> — sva priprema vodi u ovo pjevanje. Zato je toliko dugo (623 stiha): Mažuranić detaljno razrađuje svaku fazu bitke.<br><br>
            
            <b>🎯 Esejski signal:</b> Harač je <strong>književni vrhunac djela</strong>. Oluja nije samo pozadina — ona je <em>moralni sudac</em>. Mažuranić svjesno spaja prirodu i pravdu: Crnogorci napadaju pod zaklonom kiše jer <strong>sama priroda sudjeluje u pravednoj osveti</strong>. To je čisto romantičarski motiv — <em>priroda kao svjestan sudionik morala</em>. Za esej: oluja u Haraču je jedan od najljepših primjera hrv. romantičarskog opisa prirode.
          </div>
        </div>
      </div>

      <!-- V. Kob -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">V</div>
          <div class="scene-ttl">V. Kob — Refleksija o prolaznosti sile · ★ 34 stiha (najkraće)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Radnja:</b> Najkraće pjevanje, bez konkretnog narativnog razvoja. Na <em>Lovćenu</em> (crnogorska sveta planina), <strong>pustinjak</strong> refleksira o kobi (sudbini) — prolaznosti svake sile. Ovo je <em>filozofski epilog</em> djela: moralna poanta o tome da svaka tiranija prođe, svaka nepravda dočeka svoj kraj. Pustinjakov monolog je jedini sadržaj pjevanja. Spjev završava alegorijski — slikom pada tiranije.<br><br>
            
            <b>🎯 Struktura Kobi:</b><br>
            <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px">
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700;width:130px">Postavka</td><td style="padding:6px 10px;border:1px solid var(--bd)">Pustinjak na Lovćenu — kontemplativni prostor, najviša planina Crne Gore.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Refleksija</td><td style="padding:6px 10px;border:1px solid var(--bd)"><strong>Filozofski monolog</strong> o prolaznosti sile. Aga je prah — samo sila pravde ostaje.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Alegorijska slika</td><td style="padding:6px 10px;border:1px solid var(--bd)">Slika pada velikog carstva (Turskog) izgrađenog na „pljački, nepravdi i zločinu".</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Poanta</td><td style="padding:6px 10px;border:1px solid var(--bd)"><em>„Svaka sila za vremena"</em> — narodna mudrost potvrđena kroz spjev.</td></tr>
            </table>
            
            <b>Ključni lik:</b> Pustinjak (Mažuranićev autorski glas).<br><br>
            
            <b>Ključni motivi:</b><br>
            • <em>Prolaznost sile</em> — glavna poruka cijelog djela<br>
            • <em>Lovćen kao sveti prostor</em> — crnogorska planina slobode<br>
            • <em>Pustinjak kao glas mudrosti</em> — filozofska refleksija<br>
            • <em>Alegorija pada tiranije</em> — šira povijesna perspektiva<br>
            • <em>Pravda kao trajna sila</em> — za razliku od sile tiranije<br><br>
            
            <b>Stih i stil:</b><br>
            • <strong>Deseterac</strong> — svečan, biblijski ton<br>
            • Sažetost — svaki stih nosi težinu<br>
            • Alegorijski jezik — konkretna slika pustinjaka kao filozofski glas<br>
            • Kontrast s akcijom Harača — tišina nakon bure<br><br>
            
            <b>📜 Glavna poruka Kobi:</b><br>
            <em>Svaka tiranija je prolazna. Pravda je trajna. To je kob — sudbina — svake sile.</em><br><br>
            
            <b>Dramska funkcija:</b> <em>Epilog/refleksija</em> — autorski komentar o značenju prethodne radnje. Kompozicijski okvir: Mažuranić završava djelo ne u bitci, nego u mirnoj filozofskoj poanti.<br><br>
            
            <b>🎯 Esejski signal:</b> Kob je <strong>najkraće pjevanje, ali ideološki najteže</strong>. 34 stiha nose <em>cijelo filozofsko značenje djela</em>. Mažuranić namjerno odstupa od tradicionalnog epa koji završava pobjedom — on završava <em>refleksijom</em>. To je romantičarski potez: književnost nije samo narativ, ona je <strong>moralna poduka</strong>. Za esej: asimetrija Harač (623) vs. Kob (34) je strukturni ključ djela. Težište nije na bitci, nego na <em>njezinom značenju</em>.
          </div>
        </div>
      </div>
    </div>

    <!-- DUBINSKA ANALIZA -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">★ Stilska sredstva u Smrti Smail-age — za analizu ulomka</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Stilsko sredstvo</th><th>Primjer iz djela</th><th>Učinak / esejska primjena</th></tr></thead>
        <tbody>
          <tr><td><strong>Slavenska antiteza</strong></td><td>„Je li hajduk, il' uhoda turska? Nit je hajduk..." (II. Noćnik)</td><td>Narodno-epska tehnika pitanja–negacije–odgovora — gradi napetost</td></tr>
          <tr><td><strong>Epitet</strong></td><td>„mrki vuk" (aga), „sviloruna krda", „krvnik Crne Gore" (Novica)</td><td>Karakterizacija u narodno-epskom duhu</td></tr>
          <tr><td><strong>Kontrast / antiteza</strong></td><td>Smail-aga (tiranija) vs. Crnogorci (sloboda); Novica (prije) vs. Novica (poslije)</td><td>Polariziranje svijeta — tipično romantično</td></tr>
          <tr><td><strong>Hiperbola</strong></td><td>Opisi aginog bijesa, opis oluje u Haraču</td><td>Romantičarsko pojačanje emocije</td></tr>
          <tr><td><strong>Personifikacija</strong></td><td>Oluja koja se svrstava protiv age; noć kao pomoć Novici</td><td>Priroda kao moralno aktivna sila — romantičarski motiv</td></tr>
          <tr><td><strong>Apostrofa</strong></td><td>Svećenikova obraćanja vojnicima u III. Četi</td><td>Retorička napetost monologa</td></tr>
          <tr><td><strong>Kletva / blagoslov</strong></td><td>„Boj se onoga tko je viko bez golema mrijet jada!"</td><td>Moralna poruka izražena kletvom — patos</td></tr>
          <tr><td><strong>Metafora</strong></td><td>„S planinskoga gladna miša" (o Novici), „vranom vranu plijen" (mrtvom agi)</td><td>Slikovita osobina lika/stanja</td></tr>
          <tr><td><strong>Nabrajanje</strong></td><td>Nabrajanje mučenja u I. Agovanju (kolac, vješanje, odrubljivanje)</td><td>Pojačanje užasa tiranije</td></tr>
          <tr><td><strong>Biblijske aluzije</strong></td><td>„Sve je grijeh, sve su djela prika; Bez kajanja nema oprosnika" (III. Četa)</td><td>Spajanje s kršćanskom moralnom tradicijom</td></tr>
        </tbody>
      </table>
    </div>

    <!-- JEZIK DJELA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">★ Jezik djela — slojevi i arhaizmi</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Jezični sloj</th><th>Primjeri</th><th>Funkcija</th></tr></thead>
        <tbody>
          <tr><td><strong>Štokavština ijekavica</strong></td><td>Osnovica djela — vjera, dijete, mijenjati</td><td>Standardni hrv. književni jezik nakon preporoda</td></tr>
          <tr><td><strong>Turcizmi</strong></td><td>kidisati, delija, kapija, toke, fišek, kulaš, sofra, jatagan, harač, aga, kavaz</td><td>Autentičnost konteksta — turska svakodnevica i vlast</td></tr>
          <tr><td><strong>Arhaizmi</strong></td><td>tudijer (tu), jerbo (jer), vaj (jao), prik (preko), cić (radi)</td><td>Epski, biblijski ton — spaja djelo s starom tradicijom</td></tr>
          <tr><td><strong>Biblijski izrazi</strong></td><td>„grijeh", „kajanje", „oprosnik" — u svećenikovom govoru</td><td>Moralna težina, religiozna legitimacija osvete</td></tr>
          <tr><td><strong>Talijanizmi / grecizmi / arabizmi</strong></td><td>Rijetki, izolirani — u opisu krajolika</td><td>Kulturna raznolikost prostora radnje</td></tr>
          <tr><td><strong>Izvorni pravopis (er = r)</strong></td><td>kerv (krv), serce (srce), kerst (krst)</td><td>Predgajevska grafija — Mažuranić piše u tranziciji</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 Esejski signal — jezik kao povijesno svjedočanstvo</div>
      <div class="box-signal-txt">
        Jezik Smrti Smail-age nije samo komunikacijski sustav — on je <strong>kulturno svjedočanstvo</strong>. Turcizmi dočaravaju orijentalni svijet tiranije; arhaizmi povezuju s hrv. narodnom epskom tradicijom; biblijski izrazi legitimiraju pravdu; izvorni pravopis svjedoči o preporodnoj tranziciji. <em>Svaki jezični sloj ima svoju funkciju — nije ukras.</em>
      </div>
    </div>

    <!-- SINTEZA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">★ Sinteza — 3 razine čitanja djela</div><div class="sec-line"></div></div>

    <div class="sc">
      <div class="sc-name">⚔ 1. Konkretna razina — povijesna priča</div>
      <div class="sc-desc">Smrt Smail-age Čengića (1840.) — bosansko-hercegovački muselim ubijen od Crnogoraca. Mažuranić djelomično prati povijest: mjesto (Gacko polje umjesto Mljetičko), likovi (Durak = stvarno Milutin), Novica kao turski poturica. <em>Povijest je platforma, ne cilj.</em></div>
    </div>
    <div class="sc">
      <div class="sc-name">🇭🇷 2. Nacionalna razina — preporodna alegorija</div>
      <div class="sc-desc">Priča o oslobođenju od tiranije <em>alegorijski predstavlja hrv. nacionalnu borbu</em>. Kao što Crnogorci svrgavaju Smail-agu, tako će hrv. narod izboriti slobodu od austrijskog/mađarskog pritiska. <strong>Djelo je preporodni manifest.</strong></div>
    </div>
    <div class="sc">
      <div class="sc-name">🌍 3. Univerzalna razina — filozofska poruka</div>
      <div class="sc-desc">Pobjeda Dobra nad Zlom, prolaznost sile, pravda kao trajna vrijednost. <em>Svaka tiranija dočeka pravednu kaznu</em> — univerzalna romantičarska etika. Djelo funkcionira kao <strong>moralna poduka</strong> primjenjiva na svaku situaciju nasilja.</div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Taktika za ispitni ulomak Smrti Smail-age</div>
      <div class="box-key-txt">
        <strong>Korak 1:</strong> Identificiraj <em>iz kojeg pjevanja</em> je ulomak. Ključne riječi za svaki: <em>Agovanje</em> (Stolac, Durak, mučenja), <em>Noćnik</em> (noć, put, Cetinje), <em>Četa</em> (svećenik, blagoslov), <em>Harač</em> (oluja, bitka, Gacko), <em>Kob</em> (Lovćen, pustinjak).<br>
        <strong>Korak 2:</strong> Prepoznaj <em>stih</em> — osmerac (lirski dio) ili deseterac (narativni/svečani dio).<br>
        <strong>Korak 3:</strong> Identificiraj <em>stilska sredstva</em> — slavenska antiteza, epiteti, kontrasti, hiperbole, personifikacija prirode.<br>
        <strong>Korak 4:</strong> Vezi s <em>romantičarskim obilježjima</em> — priroda kao sudionik, polarizacija likova, moralni patos.<br>
        <strong>Korak 5:</strong> Interpretiraj <em>na tri razine</em> — konkretna (povijest), nacionalna (preporod), univerzalna (pravda).
      </div>
    </div>

    <!-- DISCERE TOUCHPOINT -->
    <div class="discere-banner" id="discere-t1" style="margin-top:18px" onclick="window.location.href=&#39;#discere&#39;">
      <div class="discere-ico">📖</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Simulator ulomaka Smrti Smail-age</div>
        <div class="discere-sub">Vježbaj analizu ulomaka iz sva 5 pjevanja · Pro plan</div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row">
      <span class="nb-btn" onclick="sw(0)">← Teorija</span>
      <span class="nb-btn primary" onclick="sw(2)">✍ Esej alat →</span>
    </div>

  </div><!-- /l1 -->

  <div class="layer" id="l2" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-go">📖 Obvezatno čitanje 2026</span>
      <span class="pill p-br">Analiza ulomka</span>
      <span class="pill p-te">3 razine čitanja</span>
      <span class="pill p-pa">Scanner</span>
      <span class="pill p-r">Komparacije</span>
    </div>

    <!-- STATUS BOX — OBVEZATNO ČITANJE, NE ESEJ -->
    <div class="box-warn" style="margin-bottom:20px;display:flex;gap:14px;align-items:flex-start">
      <div class="bw-ico">ℹ</div>
      <div class="bw-body">
        <div class="bw-title">Smrt Smail-age Čengića — obvezatno čitanje, <u>ne</u> školski esej 2026.</div>
        <div class="bw-txt">
          <strong>Djelo je na popisu obvezatnih djela za cjelovito čitanje</strong> (I. ispitna cjelina — Čitanje književnoga teksta). <u>Nije</u> na popisu 21 djela za školski esej. Ipak, djelo je <strong>vrlo vjerojatno</strong> da ti se pojavi kao <em>ulomak</em> u prvoj cjelini s pitanjima o: likovima, radnji, stilskim sredstvima, pjevanju, žanru, stihu, preporodnom kontekstu. <br><br>
          Ovaj Tab daje ti alate za: (1) <b>Scanner ulomka</b> (AI analiza), (2) <b>3 razine čitanja</b> (interpretativni alat), (3) <b>20 kratkih odgovora</b> za moguća pitanja, (4) <b>Strategija ulomka</b> — 5 koraka, (5) <b>Komparacije</b> s drugim djelima, (6) <b>Kratki odgovori vs. esej</b> — kada što koristiti.
        </div>
      </div>
    </div>

    <!-- ALAT TABS -->
    <div class="alat-tabs">
      <button class="alat-tab on" onclick="alTab(this,'at0')">🔍 Scanner ulomka</button>
      <button class="alat-tab" onclick="alTab(this,'at1')">📊 3 razine čitanja</button>
      <button class="alat-tab" onclick="alTab(this,'at2')">⚡ Strategija ulomka</button>
      <button class="alat-tab" onclick="alTab(this,'at3')">💬 20 kratkih odgovora</button>
      <button class="alat-tab" onclick="alTab(this,'at4')">🌐 Komparacije</button>
      <button class="alat-tab" onclick="alTab(this,'at5')">🔗 Konektori</button>
      <button class="alat-tab" onclick="alTab(this,'at6')">🚫 5 čestih grešaka</button>
      <button class="alat-tab" onclick="alTab(this,'at7')">✅ Checklist</button>
    </div>

    <!-- AT0: Scanner ulomka (AI analiza) -->
    <div class="alat-pane on" id="at0">
      <div class="alat-card">
        <h4>🔍 Scanner ulomka — AI analiza dijela iz Smail-age</h4>
        <p>Zalijepi ulomak iz Smrti Smail-age Čengića koji moraš analizirati. Scanner će identificirati: <em>pjevanje</em> (Agovanje / Noćnik / Četa / Harač / Kob), <em>likove</em>, <em>stilska sredstva</em>, <em>stih</em>, i dati <em>esejsku preporuku</em> kako ga analizirati.</p>
      </div>

      <textarea id="scanner-in" oninput="scannerCount()" placeholder="Zalijepi ulomak iz Smrti Smail-age Čengića ovdje..." style="width:100%;min-height:150px;padding:12px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--txt);font-family:var(--serif);font-size:14px;resize:vertical"></textarea>

      <div style="display:flex;gap:12px;align-items:center;margin-top:10px;flex-wrap:wrap">
        <button class="fcb primary" onclick="scannerGo()">▶ Analiziraj ulomak</button>
        <button class="fcb" onclick="scannerClear()">↩ Obriši</button>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);margin-left:auto">
          <span id="scanner-chars">0</span> znakova · <span id="scanner-words">0</span> riječi
        </div>
      </div>

      <div id="scanner-out"></div>
    </div>

    <!-- AT1: 3 razine čitanja -->
    <div class="alat-pane" id="at1">
      <div class="alat-card">
        <h4>📊 3 razine čitanja djela — interpretativni alat</h4>
        <p>Mažuranićevo djelo može se čitati na <strong>tri istodobne razine</strong>. Za bilo koji ulomak ili pitanje, prođi kroz sve tri — uvijek ima bar dvije razine u igri.</p>
      </div>

      <div class="sc" style="border-left:3px solid var(--red-l)">
        <div class="sc-name">⚔ 1. KONKRETNA razina — povijesna priča</div>
        <div class="sc-desc">
          <strong>Što je:</strong> Doslovna, narativna razina — priča o stvarnom Smail-agi Čengiću kojeg su Crnogorci ubili 1840. g.<br><br>
          <strong>Kada koristiti:</strong> Pitanja o radnji, likovima, mjestu, događajima.<br><br>
          <strong>Ključni elementi:</strong> Stolac, Gacko polje, Cetinje, Lovćen, muselim, harač, Durak → Milutin u stvarnosti, Novica kao poturica.<br><br>
          <strong>Čuvar:</strong> Mažuranić odstupa od povijesti — mjesto (Mljetičko polje → Gacko), ime lika (Milutin → Durak). <em>To su pjesničke slobode, ne greške.</em>
        </div>
      </div>

      <div class="sc" style="border-left:3px solid var(--gold)">
        <div class="sc-name">🇭🇷 2. NACIONALNA razina — preporodna alegorija</div>
        <div class="sc-desc">
          <strong>Što je:</strong> Alegorijska razina — djelo kao poruka hrv. nacionalnoj borbi za slobodu.<br><br>
          <strong>Kada koristiti:</strong> Pitanja o preporodu, ilirskom pokretu, uloga djela u hrv. književnosti, motivi domoljublja.<br><br>
          <strong>Ključ:</strong> Kao što Crnogorci ruše Smail-agu, tako hrv. narod mora izboriti slobodu. <em>Borba za slobodu = univerzalna tema, konkretizirana u preporodnom trenutku.</em><br><br>
          <strong>Povezanice:</strong> Gaj, Danica, latinica, štokavština kao književni jezik (sve nastaje u istim godinama).
        </div>
      </div>

      <div class="sc" style="border-left:3px solid var(--green)">
        <div class="sc-name">🌍 3. UNIVERZALNA razina — filozofska poruka</div>
        <div class="sc-desc">
          <strong>Što je:</strong> Općeljudska razina — svaka tiranija je prolazna, svaka nepravda dočekuje pravednu kaznu.<br><br>
          <strong>Kada koristiti:</strong> Interpretacijska pitanja, moralne dileme, općeljudske teme.<br><br>
          <strong>Ključ:</strong> „Boj se onoga tko je viko bez golema mrijet jada!" — <em>tiranin se boji onoga tko nema što izgubiti</em>. Univerzalna moralna formula.<br><br>
          <strong>Poanta V. Kobi:</strong> Prolaznost sile, trajnost pravde. Pustinjak na Lovćenu = glas vječne mudrosti.
        </div>
      </div>

      <div class="box-key" style="margin-top:14px">
        <div class="box-key-lbl">🎯 Zlatno pravilo</div>
        <div class="box-key-txt">
          U dobrom odgovoru <strong>uvijek spoji barem 2 razine</strong>. Na primjer: „Oluja u Haraču je konkretno opis bitke (1), ali i <em>alegorija pada tiranije</em> (2) te romantičarska slika <em>prirode kao moralnog suca</em> (3)." <em>Tri razine u jednoj rečenici</em> = vrhunski odgovor.
        </div>
      </div>
    </div>

    <!-- AT2: Strategija ulomka — 5 koraka -->
    <div class="alat-pane" id="at2">
      <div class="alat-card">
        <h4>⚡ Strategija analize ulomka — 5 koraka (3 minute)</h4>
        <p>Sustavna metoda za analizu bilo kojeg ulomka iz Smail-age. Prođi kroz sve korake. Vrijeme: <strong>~3 minute</strong> prije pisanja.</p>
      </div>

      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Korak</th><th>Što radiš</th><th>Ključni pokazatelji</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>1. Lokacija</strong><br>30 sek</td>
              <td>Iz kojeg pjevanja je ulomak?</td>
              <td>
                <em>Agovanje</em>: Stolac, aga, Durak, mučenja<br>
                <em>Noćnik</em>: noć, put, Cetinje, bijeg, slavenska antiteza<br>
                <em>Četa</em>: svećenik, blagoslov, priprema, moral<br>
                <em>Harač</em>: Gacko, oluja, bitka, smrt age<br>
                <em>Kob</em>: Lovćen, pustinjak, refleksija
              </td>
            </tr>
            <tr>
              <td><strong>2. Stih</strong><br>20 sek</td>
              <td>Koji je stih ulomka?</td>
              <td>
                <strong>Osmerac</strong> (4+4): lirski, refleksivni dio<br>
                <strong>Deseterac</strong> (4+6): narativni, svečani, epski
              </td>
            </tr>
            <tr>
              <td><strong>3. Likovi</strong><br>30 sek</td>
              <td>Tko govori? Tko djeluje?</td>
              <td>
                Smail-aga, Durak, Novica, svećenik, pustinjak, Crnogorci (kolektiv), Bauk, Mirko, agine sluge
              </td>
            </tr>
            <tr>
              <td><strong>4. Stilska sredstva</strong><br>40 sek</td>
              <td>Prepoznaj barem 2–3 figure</td>
              <td>
                Slavenska antiteza, epiteti, kontrasti, hiperbola, personifikacija prirode, kletva, biblijski izrazi, turcizmi
              </td>
            </tr>
            <tr>
              <td><strong>5. Interpretacija</strong><br>60 sek</td>
              <td>Tri razine čitanja u 2–3 rečenice</td>
              <td>
                Konkretno (što se događa) + nacionalno (preporod) + univerzalno (pravda vs. tiranija)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="box-signal">
        <div class="box-signal-lbl">💡 Primjer 5-korak analize</div>
        <div class="box-signal-txt">
          <strong>Ulomak:</strong> „Je li hajduk, il' uhoda turska? Nit je hajduk, nit uhoda turska, već Novica, Čengića kavazu..."<br><br>
          <strong>1. Lokacija:</strong> II. Noćnik — početak (slavenska antiteza je tipična za ovaj pjev).<br>
          <strong>2. Stih:</strong> Osmerac.<br>
          <strong>3. Likovi:</strong> Novica (ne govori, narator ga opisuje).<br>
          <strong>4. Sredstva:</strong> Slavenska antiteza (pitanje–negacija–odgovor), epitet „sviloruna krda".<br>
          <strong>5. Interpretacija:</strong> Konkretno — Novica bježi iz Stolca u Crnu Goru. Nacionalno — romantičarska tehnika iz narodne poezije koja posuđuje narodnu mudrost. Univerzalno — ulazak čovjeka u moralnu transformaciju.
        </div>
      </div>
    </div>

    <!-- AT3: 20 kratkih odgovora (za moguća pitanja) -->
    <div class="alat-pane" id="at3">
      <div class="alat-card">
        <h4>💬 20 kratkih odgovora — najčešća pitanja o djelu</h4>
        <p>Pitanja u I. ispitnoj cjelini traže kratak, točan odgovor — ne esej. Ovi odgovori su pripremljeni za tipične formulacije pitanja.</p>
      </div>

      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Pitanje</th><th>Kratki odgovor</th></tr></thead>
          <tbody>
            <tr><td>Tko je autor djela?</td><td>Ivan Mažuranić (1814.–1890.)</td></tr>
            <tr><td>Kada je djelo objavljeno?</td><td>1846., u almanahu <em>Iskra</em> (Zadar)</td></tr>
            <tr><td>Koja je vrsta djela?</td><td>Romantičarski <strong>spjev</strong> (ne ep)</td></tr>
            <tr><td>Koliko pjevanja ima?</td><td>5 — Agovanje, Noćnik, Četa, Harač, Kob</td></tr>
            <tr><td>Koliko stihova ima?</td><td>1134</td></tr>
            <tr><td>Koje je najduže pjevanje?</td><td>IV. Harač — 623 stiha</td></tr>
            <tr><td>Koje je najkraće?</td><td>V. Kob — 34 stiha</td></tr>
            <tr><td>Koji su stihovi djela?</td><td>Štokavski <strong>osmerac (4+4)</strong> i <strong>deseterac (4+6)</strong></td></tr>
            <tr><td>Tko je glavni antagonist?</td><td>Smail-aga Čengić — bosansko-hercegovački muselim</td></tr>
            <tr><td>Tko je Novica?</td><td>Durakov sin, agin kavaz (stražar), koji se zbog očeve smrti preobraća i pridružuje Crnogorcima</td></tr>
            <tr><td>Tko je Durak?</td><td>Stariji Turčin, agin savjetnik, Novicin otac. Aga ga ubija jer ga je savjetovao</td></tr>
            <tr><td>Što znači harač?</td><td>Godišnji porez koji su ne-muslimani plaćali turskoj vlasti</td></tr>
            <tr><td>Gdje se odvija radnja?</td><td>Hercegovina (Stolac, Gacko polje) i Crna Gora (Cetinje, Lovćen)</td></tr>
            <tr><td>Iz kojeg je povijesnog događaja djelo?</td><td>Stvarna pogibelj Smail-age Čengića u listopadu 1840. na Mljetičkom polju</td></tr>
            <tr><td>Kojem razdoblju pripada djelo?</td><td>Hrvatski romantizam / narodni preporod</td></tr>
            <tr><td>Što je slavenska antiteza?</td><td>Narodno-epska tehnika pitanja–negacije–odgovora. U djelu: početak II. Noćnika</td></tr>
            <tr><td>Koji je najpoznatiji citat?</td><td>„Boj se onoga, tko je viko bez golema mrijet jada!"</td></tr>
            <tr><td>Koja je glavna ideja?</td><td>Prolaznost sile i konačna pobjeda pravde</td></tr>
            <tr><td>Koja je uloga prirode?</td><td>Oluja u IV. Haraču — priroda kao moralni sudac, tipični romantičarski motiv</td></tr>
            <tr><td>Je li djelo obvezatno za 2026.?</td><td><strong>Obvezatno za cjelovito čitanje</strong> (I. ispitna cjelina). Nije na popisu 21 za esej</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- AT4: Komparacije s drugim djelima -->
    <div class="alat-pane" id="at4">
      <div class="alat-card">
        <h4>🌐 Komparacije s drugim djelima — za usporedna pitanja</h4>
        <p>Smail-aga se može usporediti s mnogim djelima iz hrv. i svjetske književnosti. Ovo su najkorisnije paralele.</p>
      </div>

      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Djelo za usporedbu</th><th>Zajedničko</th><th>Razlika</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Marulić · Judita</strong> (1501.)</td>
              <td>Borba protiv orijentalne tiranije (Asirci/Turci); alegorijska dimenzija; žena/narod koji svrgava tiranina</td>
              <td>Marulić = renesansa, ep, biblijska; Mažuranić = romantizam, spjev, povijesna tema</td>
            </tr>
            <tr>
              <td><strong>Gundulić · Dubravka</strong> (1628.)</td>
              <td>Alegorija slobode; završava pobjedom pravednih; motiv tiranije poraženih</td>
              <td>Gundulić = barok, drama, Dubrovnik, pastorala; Mažuranić = romantizam, spjev, povijest</td>
            </tr>
            <tr>
              <td><strong>Gundulić · Osman</strong> (17. st.)</td>
              <td>Spjev o borbi slavenskih naroda protiv Turaka; dopune pjevanja napisao upravo Mažuranić (1842.)</td>
              <td>Osman = barokni ep, nedovršen; Smail-aga = romantičarski zaokruženi spjev</td>
            </tr>
            <tr>
              <td><strong>Narodna epika</strong> (usmena)</td>
              <td>Deseterac, slavenska antiteza, kolektivni junak, epski ton; tematika turske okupacije</td>
              <td>Narodna = anonimna, nema autora; Smail-aga = autorska umjetnost, svjesna stilizacija</td>
            </tr>
            <tr>
              <td><strong>Šenoa · Prijan Lovro</strong> (kasniji realizam)</td>
              <td>Obojica dio hrv. narodnog preporoda i književne tradicije; tematika individualnog junaka protiv društva</td>
              <td>Šenoa = proza, realizam, pripovjetka; Mažuranić = stih, romantizam, spjev</td>
            </tr>
            <tr>
              <td><strong>Byron · Don Juan</strong> (europski romantizam)</td>
              <td>Romantičarski spjev; oštre polarizacije; priroda kao sudionik; bunt protiv tiranije</td>
              <td>Byron = ironija, individualni heroj; Mažuranić = patos, kolektivni junak</td>
            </tr>
            <tr>
              <td><strong>Mickiewicz · Konrad Wallenrod</strong> (poljski romantizam)</td>
              <td>Nacionalni-oslobodilački spjev; tragedija narodne borbe; romantičarski patos</td>
              <td>Mickiewicz = duboka psihologija junaka; Mažuranić = jednostavne moralne razlike</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="box-signal">
        <div class="box-signal-lbl">💡 Zlatni par komparacija</div>
        <div class="box-signal-txt">
          Ako ti traže <em>jednu usporedbu</em>, najlakše je <strong>Smail-aga ↔ Judita</strong> (obje hrv. epska djela o borbi protiv orijentalne tiranije) ili <strong>Smail-aga ↔ Dubravka</strong> (obje alegorije slobode hrv. naroda).
        </div>
      </div>
    </div>

    <!-- AT5: Konektori -->
    <div class="alat-pane" id="at5">
      <div class="alat-card">
        <h4>🔗 Konektori i fraze — za pisanje kvalitetnih odgovora</h4>
        <p>Kratki odgovori u I. cjelini nisu eseji, ali i dalje trebaju biti <em>povezani i argumentirani</em>. Koristi ove konektore.</p>
      </div>

      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Funkcija</th><th>Konektori / fraze</th></tr></thead>
          <tbody>
            <tr><td><strong>Uvodi tezu</strong></td><td>„Djelo naglašava...", „Autor gradi...", „Mažuranić prikazuje..."</td></tr>
            <tr><td><strong>Navodiš primjer</strong></td><td>„Na primjer, u pjevanju...", „Ilustrativan je stih...", „Posebno je važno..."</td></tr>
            <tr><td><strong>Povezuješ uzroke</strong></td><td>„Zbog toga...", „Posljedica je...", „To vodi k...", „Iz ovoga proizlazi..."</td></tr>
            <tr><td><strong>Kontrast</strong></td><td>„Nasuprot tome...", „S druge strane...", „Međutim...", „Za razliku od..."</td></tr>
            <tr><td><strong>Dodatni argument</strong></td><td>„Osim toga...", „Također...", „Još je jedno obilježje..."</td></tr>
            <tr><td><strong>Interpretacija</strong></td><td>„To sugerira...", „Što govori da...", „Simboličko značenje je...", „Alegorijski..."</td></tr>
            <tr><td><strong>Zaključak</strong></td><td>„Stoga djelo...", „U konačnici...", „Možemo reći da...", „Mažuranićev spjev je..."</td></tr>
            <tr><td><strong>Stilski termini</strong></td><td>„Slavenska antiteza", „kontrast", „hiperbola", „personifikacija", „biblijska aluzija", „deseterac"</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- AT6: 5 čestih grešaka -->
    <div class="alat-pane" id="at6">
      <div class="alat-card">
        <h4>🚫 5 najčešćih grešaka — što izbjegavati</h4>
        <p>Tipične greške u odgovorima o Smail-agi. Prepoznaj ih u vlastitom pisanju.</p>
      </div>

      <div class="sc" style="border-left:3px solid var(--red-l)">
        <div class="sc-name">❌ 1. „Smrt Smail-age je ep"</div>
        <div class="sc-desc">
          <strong>Krivo.</strong> Djelo je <strong>spjev</strong>, ne ep. Ep je dugo narativno djelo (Ilijada, Osman, Judita — tisuće stihova); spjev je kraći i ima jače lirske i dramske komponente (1134 stiha, dominiraju monolozi i dijalozi). Razlika je <em>formalna i funkcionalna</em> — spjev objedinjuje sva tri književna roda.
        </div>
      </div>

      <div class="sc" style="border-left:3px solid var(--red-l)">
        <div class="sc-name">❌ 2. „Mažuranić je pisao za Turke"</div>
        <div class="sc-desc">
          <strong>Krivo.</strong> Mažuranić ne piše „za" ili „protiv" Turaka u etničkom smislu. On piše <em>protiv tiranije kao takve</em> — Smail-aga je konkretni primjer, ali djelo je <strong>univerzalna moralna priča</strong>. Dokaz: Mažuranić čak i među Turcima diferencira (Durak = dobar savjetnik, Smail-aga = zlo). To pokazuje da je njegov sukob moralni, ne etnički.
        </div>
      </div>

      <div class="sc" style="border-left:3px solid var(--red-l)">
        <div class="sc-name">❌ 3. Zbrka između Noćnika i pjevanja</div>
        <div class="sc-desc">
          <strong>Krivo.</strong> Učenici često miješaju pjevanja: misle da je Harač prvi, ili da Novica bježi u I. Agovanju. <strong>Točan redoslijed:</strong> I. Agovanje → II. Noćnik → III. Četa → IV. Harač → V. Kob. Zapamti: A-N-Č-H-K (akronim).
        </div>
      </div>

      <div class="sc" style="border-left:3px solid var(--red-l)">
        <div class="sc-name">❌ 4. „Djelo je povijesno točno"</div>
        <div class="sc-desc">
          <strong>Krivo.</strong> Mažuranić <em>odstupa od povijesti</em> u više točaka: mjesto pogibelji (Mljetičko polje → Gacko), ime lika (Milutin → Durak), Novica kao poturica nije povijesna figura. Ove promjene nisu greške — to su <strong>pjesničke slobode</strong> u službi moralne poruke.
        </div>
      </div>

      <div class="sc" style="border-left:3px solid var(--red-l)">
        <div class="sc-name">❌ 5. Zanemariti V. Kob kao „nebitan"</div>
        <div class="sc-desc">
          <strong>Krivo.</strong> V. Kob ima samo 34 stiha, ali je <em>ideološki najteža</em>. Pustinjakov monolog je <strong>autorska poanta djela</strong> — filozofska refleksija o prolaznosti sile. Bez Kobi, spjev bi bio obična osveta; s Kobi, on postaje <strong>filozofski manifest</strong>. <em>Asimetrija Harač (623) vs. Kob (34) je namjerna kompozicijska odluka.</em>
        </div>
      </div>
    </div>

    <!-- AT7: Checklist -->
    <div class="alat-pane" id="at7">
      <div class="alat-card">
        <h4>✅ Checklist — što trebaš znati o Smrti Smail-age</h4>
        <p>Prođi kroz sve stavke. Ako ne možeš označiti nešto, vrati se u Tab 0 ili Tab 1 i provjeri.</p>
      </div>

      <div id="cl-list"></div>

      <div id="cl-score" style="margin-top:14px"></div>
    </div>

    <!-- DISCERE TOUCHPOINT -->
    <div class="discere-banner" style="margin-top:20px" onclick="window.location.href='#discere'">
      <div class="discere-ico">📖</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Simulator ulomaka Smail-age</div>
        <div class="discere-sub">Neograničeni ulomci iz djela s AI analizom i evaluacijom odgovora · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row">
      <span class="nb-btn" onclick="sw(1)">← 5 pjevanja</span>
      <span class="nb-btn primary" onclick="sw(3)">💬 Citatnik →</span>
    </div>

  </div><!-- /l2 -->

  <div class="layer" id="l3" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa">Mažuranić</span>
      <span class="pill p-br">Smrt Smail-age Čengića</span>
      <span class="pill p-go">★ Napamet</span>
      <span class="pill p-t">Filtriraj kategoriju</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💬 Citati iz Smrti Smail-age — arsenal za odgovore i interpretaciju</div>
      <div class="box-int-txt">Klikni ⎘ za kopiranje citata s atribucijom. Citati označeni <strong>★ Napamet</strong> prioritetno nauči napamet — oni su najtraženiji u analizi ulomaka i kvizovima. Filtriraj po pjevanju ili kategoriji.</div>
    </div>

    <!-- ★ NAPAMET — 8 glavnih citata -->
    
    <div class="cit-search-row" style="margin:14px 0 16px;display:flex;gap:8px;align-items:center">
      <label for="cit-search" class="sr-only" style="position:absolute;left:-9999px">Pretraži citate</label>
      <span style="font-size:18px;color:var(--gold,#e9b446)">🔍</span>
      <input type="search" id="cit-search" class="cit-search" placeholder="Pretraži citate (npr. Mažuranić, Smail-aga, deseterac, agovanje)…" aria-label="Pretraži citate" autocomplete="off"
        style="flex:1;padding:10px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px"
        oninput="citSearch(this.value)">
      <button type="button" class="cit-clear" onclick="document.getElementById('cit-search').value='';citSearch('')" aria-label="Očisti pretragu" title="Očisti"
        style="padding:8px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);cursor:pointer;font-size:14px">✕</button>
    </div>
<div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">★ Napamet — 8 glavnih citata iz Smrti Smail-age</div><div class="sec-line"></div></div>

    <!-- 1. Durakova opomena — NAJVAŽNIJI -->
    <div class="featured-quote" data-cit-cat="agovanje">
      <span class="fq-napamet">★ NAPAMET #1</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Boj se onoga, tko je viko<br>Bez golema mrijet jada!</div>
        <div class="fq-meta">— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · <strong>Durakova opomena Smail-agi</strong> · NAJPOZNATIJI CITAT DJELA · Tiranin se boji onoga tko nema što izgubiti</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Boj se onoga, tko je viko bez golema mrijet jada! — Mažuranić, Smrt Smail-age Čengića, I. Agovanje, Durakova opomena')">⎘</button>
    </div>

    <!-- 2. Slavenska antiteza — početak Noćnika -->
    <div class="featured-quote" data-cit-cat="nocnik">
      <span class="fq-napamet">★ NAPAMET #2</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Je li hajduk, il’ uhoda turska,<br>Što uhodi sviloruna krda,<br>Il’ volova stada vitoroga?<br>Nit je hajduk, nit uhoda turska,<br>Već Novica, Čengića kavazu...</div>
        <div class="fq-meta">— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · <strong>Klasična slavenska antiteza</strong> · Tehnika pitanja–negacije–odgovora iz narodne poezije</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Je li hajduk, il’ uhoda turska... Nit je hajduk, nit uhoda turska, već Novica, Čengića kavazu... — Mažuranić, Smrt Smail-age Čengića, II. Noćnik')">⎘</button>
    </div>

    <!-- 3. Mlađi Turci / mučenja -->
    <div class="featured-quote" data-cit-cat="agovanje">
      <span class="fq-napamet">★ NAPAMET #3</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Tko je mlađi, rado gleda<br>Na lipovu krstu muke;<br>A tko starij’, muke iste<br>Sam na sebi s vlaške ruke<br>Već unaprijed od strâ ćuti.</div>
        <div class="fq-meta">— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · <strong>Opis turskog logora</strong> · Mladi uživaju, stari slute osvetu · Psihološka diferencijacija</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Tko je mlađi, rado gleda na lipovu krstu muke; a tko starij’, muke iste sam na sebi s vlaške ruke već unaprijed od strâ ćuti. — Mažuranić, Smrt Smail-age Čengića, I. Agovanje')">⎘</button>
    </div>

    <!-- 4. Svećenikov biblijski stav -->
    <div class="featured-quote" data-cit-cat="ceta">
      <span class="fq-napamet">★ NAPAMET #4</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Sve je grijeh, sve su djela prika;<br>Bez kajanja nema oprosnika.</div>
        <div class="fq-meta">— Mažuranić, <em>Smrt Smail-age Čengića</em>, III. Četa · <strong>Svećenikov govor</strong> · Biblijska moralna formula · Ideološki centar djela</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Sve je grijeh, sve su djela prika; bez kajanja nema oprosnika. — Mažuranić, Smrt Smail-age Čengića, III. Četa, svećenikov govor')">⎘</button>
    </div>

    <!-- 5. Novica prelazi na Cetinje -->
    <div class="featured-quote" data-cit-cat="nocnik">
      <span class="fq-napamet">★ NAPAMET #5</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Ter se maša kršnijeh Ćeklića...<br>A Novica pade na Cetinje...</div>
        <div class="fq-meta">— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · <strong>Novičina moralna transformacija</strong> · „Pade" kao simbol pokore i preobraćenja</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Ter se maša kršnijeh Ćeklića... A Novica pade na Cetinje... — Mažuranić, Smrt Smail-age Čengića, II. Noćnik')">⎘</button>
    </div>

    <!-- 6. Rugalica Bauka nakon bitke -->
    <div class="featured-quote" data-cit-cat="harac">
      <span class="fq-napamet">★ NAPAMET #6</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">A u zemlji hercegovoj...<br>Tu nek plijen vranom vranu stoji.</div>
        <div class="fq-meta">— Mažuranić, <em>Smrt Smail-age Čengića</em>, IV. Harač · <strong>Baukova rugalica mrtvom agi</strong> · Tiranin postaje plijen gavrana · Metafora poraza</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'A u zemlji hercegovoj... Tu nek plijen vranom vranu stoji. — Mažuranić, Smrt Smail-age Čengića, IV. Harač, Baukova rugalica')">⎘</button>
    </div>

    <!-- 7. Agin karakter — mrki vuk -->
    <div class="featured-quote" data-cit-cat="agovanje">
      <span class="fq-napamet">★ NAPAMET #7</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Štono sam vî Turčin pripravio...<br>Kome britku palu namjenjuje.</div>
        <div class="fq-meta">— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · <strong>Karakterizacija Smail-age</strong> · Hladan, svirep, grub · „Britka pala" = oštra sablja kao simbol tiranske moći</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Štono sam vî Turčin pripravio... Kome britku palu namjenjuje. — Mažuranić, Smrt Smail-age Čengića, I. Agovanje')">⎘</button>
    </div>

    <!-- 8. Zmijska slika Novice — metafora -->
    <div class="featured-quote" data-cit-cat="nocnik">
      <span class="fq-napamet">★ NAPAMET #8</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">S planinskoga gladna miša...</div>
        <div class="fq-meta">— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · <strong>Metaforički opis Novice</strong> · Slika gladnog miša — izrod gladi za osvetom · Romantičarska životinjska metafora</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'S planinskoga gladna miša... — Mažuranić, Smrt Smail-age Čengića, II. Noćnik, metafora o Novici')">⎘</button>
    </div>

    <!-- DINAMIČKI CITATNIK -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Citatnik — dinamički pregled 40 citata po pjevanjima</div><div class="sec-line"></div></div>

    <div class="cit-filters" id="cit-filter-row" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px">
      <button class="cit-fbt on" data-cat="all" onclick="citFilter2('all',this)">Sve</button>
      <button class="cit-fbt" data-cat="agovanje" onclick="citFilter2('agovanje',this)">I. Agovanje</button>
      <button class="cit-fbt" data-cat="nocnik" onclick="citFilter2('nocnik',this)">II. Noćnik</button>
      <button class="cit-fbt" data-cat="ceta" onclick="citFilter2('ceta',this)">III. Četa</button>
      <button class="cit-fbt" data-cat="harac" onclick="citFilter2('harac',this)">IV. Harač</button>
      <button class="cit-fbt" data-cat="kob" onclick="citFilter2('kob',this)">V. Kob</button>
      <button class="cit-fbt" data-cat="likovi" onclick="citFilter2('likovi',this)">Likovi</button>
      <button class="cit-fbt" data-cat="jezik" onclick="citFilter2('jezik',this)">Jezik/stih</button>
      <button class="cit-fbt" data-cat="stars" onclick="citFilter2('stars',this)">⭐ Moji</button>
    </div>

    <div id="cit-grid2"></div>

    <div class="box-key" style="margin-top:18px">
      <div class="box-key-lbl">💡 Kako koristiti citatnik Smrti Smail-age</div>
      <div class="box-key-txt">
        <strong>1.</strong> Za analizu ulomka: prepoznaj pjevanje → zovi citate iz te kategorije za kontekstualizaciju.<br>
        <strong>2.</strong> Za kratke odgovore: 2-3 ključne riječi iz citata su dovoljne.<br>
        <strong>3.</strong> ⭐ Označi citate za sebe — spremaju se u lokalni profil (<code>mt.hrv.h14.cit_stars</code>).<br>
        <strong>4.</strong> <strong>★ Napamet</strong> citati su obavezni — posebno Durakova opomena i slavenska antiteza.
      </div>
    </div>

    <!-- DISCERE TOUCHPOINT -->
    <div class="discere-banner" style="margin-top:20px" onclick="window.location.href='#discere'">
      <div class="discere-ico">💬</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Citatna banka Smail-age s kontekstom</div>
        <div class="discere-sub">Svi citati iz djela + kontekst pjevanja + audio interpretacije · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row">
      <span class="nb-btn" onclick="sw(2)">← Esej alat</span>
      <span class="nb-btn primary" onclick="sw(4)">📚 Pojmovnik →</span>
    </div>

  </div><!-- /l3 -->

  <div class="layer" id="l4" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-go">65 pojmova</span>
      <span class="pill p-br">grid + flashcard mode</span>
      <span class="pill p-t">filtriraj kategoriju</span>
    </div>

    <!-- Grid / Flashcard toggle -->
    <div class="pojm-mode-row">
      <button class="pojm-mode-btn on" id="mode-grid" onclick="setPojmMode2('grid')">⊞ Grid</button>
      <button class="pojm-mode-btn" id="mode-fc" onclick="setPojmMode2('fc')">🃏 Flashcard</button>
      <span style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-left:6px">← → navigacija · Enter/Space = okreni</span>
    </div>

    <!-- Flashcard mode -->
    <div class="fc-wrap" id="fc-wrap2" style="display:none;flex-direction:column;align-items:center;gap:16px;margin:16px 0">
      <div class="fc-counter" id="fc-counter2">1 / 65</div>
      <div class="fc-scene" id="fc-scene2" onclick="pj2Flip()">
        <div class="fc-inner" id="fc-inner2">
          <div class="fc-front">
            <div class="fc-cat" id="fc-cat2" style="font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--bronze);margin-bottom:12px">—</div>
            <div class="fc-term" id="fc-term2" style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);line-height:1.2;margin-bottom:8px">—</div>
            <div class="fc-hint">klikni za definiciju</div>
          </div>
          <div class="fc-back">
            <div class="fc-def" id="fc-def2" style="font-family:var(--serif);font-size:15px;color:var(--t1);line-height:1.6">—</div>
          </div>
        </div>
      </div>
      <div class="fc-nav">
        <button class="fc-btn" id="fc-prev2" onclick="pj2Prev()" disabled>← Prethodni</button>
        <button class="fc-btn" style="background:var(--dim-br);border-color:var(--bd-br);color:var(--bronze-l)" onclick="pj2Flip()">↩ Okreni</button>
        <button class="fc-btn" id="fc-next2" onclick="pj2Next()">Sljedeći →</button>
      </div>
      <div class="fc-progress" id="fc-progress2"></div>
    </div>

    <!-- Grid mode -->
    <div id="grid-wrap2">
      <div class="pojm-filters">
        <button class="pojm-filter on" data-cat="all" onclick="pojmFilter2('all',this)">Sve (65)</button>
        <button class="pojm-filter" data-cat="stih" onclick="pojmFilter2('stih',this)">Stih/forma</button>
        <button class="pojm-filter" data-cat="spjev" onclick="pojmFilter2('spjev',this)">Spjev/žanr</button>
        <button class="pojm-filter" data-cat="stil" onclick="pojmFilter2('stil',this)">Stilska sredstva</button>
        <button class="pojm-filter" data-cat="likovi" onclick="pojmFilter2('likovi',this)">Likovi/radnja</button>
        <button class="pojm-filter" data-cat="preporod" onclick="pojmFilter2('preporod',this)">Preporod</button>
        <button class="pojm-filter" data-cat="romantizam" onclick="pojmFilter2('romantizam',this)">Romantizam</button>
        <button class="pojm-filter" data-cat="jezik" onclick="pojmFilter2('jezik',this)">Jezik/turcizmi</button>
      </div>
      <div class="pojm-grid" id="pojm-grid2"></div>
    </div>

    <!-- DISCERE TOUCHPOINT — Tab 4 Pojmovnik -->
    <div class="discere-banner" style="margin-top:20px" onclick="window.location.href='#discere'">
      <div class="discere-ico">🧠</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Adaptivne flashcards (spaced repetition)</div>
        <div class="discere-sub">AI prati koje pojmove si usvojio, a koje ne — ponavlja ih točno kad trebaš · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row">
      <span class="nb-btn" onclick="sw(3)">← Citatnik</span>
      <span class="nb-btn primary" onclick="sw(6)">🧠 Kviz →</span>
    </div>
  </div><!-- /l4 -->

  <div class="layer" id="l5" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">20 flashcards</span>
      <span class="pill p-go">3 razine matching</span>
      <span class="pill p-te">Demo slobodan</span>
      <span class="pill p-r">Puno PRO</span>
    </div>

    <!-- FLASHCARDS — demo funkcionalan -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Flashcards — pojam / definicija · Demo (20 karata)</div><div class="sec-line"></div></div>

    <div class="fc-cat-label">H14 · MAŽURANIĆ · SMRT SMAIL-AGE — Pojmovnik</div>
    <div class="fc-wrap">
      <div class="fc-inner" id="fc-card-dyn" onclick="fcFlip()">
        <div class="fc-front">
          <div class="fc-label">POJAM · klikni za definiciju</div>
          <div class="fc-term">Slavenska antiteza</div>
          <div class="fc-cat">stil · klikni za definiciju</div>
        </div>
        <div class="fc-back">
          <div class="fc-label">DEFINICIJA</div>
          <div class="fc-def">Narodno-epska tehnika: pitanje → negacija → odgovor. „Je li hajduk, il’ uhoda turska? Nit je hajduk, nit uhoda turska, već Novica..." (II. Noćnik).</div>
          <div class="fc-cat">stil</div>
        </div>
      </div>
    </div>
    <div class="fc-nav">
      <button class="fc-btn" id="fc-prev-dyn" onclick="fcNav(-1)" disabled>← Prethodni</button>
      <span class="fc-counter" id="fc-counter-dyn">1 / 20</span>
      <button class="fc-btn" id="fc-next-dyn" onclick="fcNav(1)">Sljedeći →</button>
    </div>

    <div class="box-warn" style="margin-top:18px">
      <div class="box-warn-lbl">🔒 PRO — Napredni Drill</div>
      <div class="box-warn-txt">Demo prikazuje prvih 20 karata. <strong>Standard i Pro plan</strong> otključavaju: sve karte + kategorizaciju po temi + spaced repetition algoritam + statistiku.</div>
    </div>

    <!-- MATCHING GAME — potpuno funkcionalan -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">Matching game — spoji pojam s definicijom · 3 razine</div><div class="sec-line"></div></div>

    <div id="mg-dynamic"></div>

    <div class="box-signal" style="margin-top:16px">
      <div class="box-signal-lbl">💡 Matching tip</div>
      <div class="box-signal-txt">Počni s <strong>Lagano (4 para)</strong> za provjeru osnova, zatim napreduj na Teško (8 parova). Svako uspješno sparivanje gradi memorijsku vezu pojam–definicija.</div>
    </div>
  </div>

  <!-- ══════════════════════════════════════
       TAB 6 · KVIZ
  ══════════════════════════════════════ -->
  <div class="layer" id="l6" role="tabpanel" tabindex="0">
    <!-- DISCERE TOUCHPOINT 4 -->
    <div class="discere-banner" id="discere-kviz" onclick="window.location.href='#discere'">
      <div class="discere-ico">🏆</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Pravi ispit mode</div>
        <div class="discere-sub">Ovaj kviz je priprema — u Discere treniraj s vremenskim pritiskom i točnim bodovanjem kao na maturi</div>
      </div>
      <div class="discere-arrow">→</div>
    </div>
    <div class="qz-wrap" id="qz-wrap"></div>
    <!-- Score History -->
    <div class="score-hist" id="score-hist" style="display:none">
      <div class="score-hist-lbl">📊 Zadnjih 5 kvizova</div>
      <div class="score-hist-rows" id="score-hist-rows"></div>
    </div>
  </div>

  <!-- ══════════════════════════════════════
       TAB 7 · CHECKPOINT
  ══════════════════════════════════════ -->
  <div class="layer" id="l7" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">10 tvrdnji</span>
      <span class="pill p-go">Provjera znanja</span>
    </div>

    <p>Označi svaku tvrdnju koju <strong>stvarno znaš</strong> — ne samo prepoznaješ, nego možeš objasniti i primijeniti u eseju. Kada označiš svih 10, možeš prijeći na H13.</p>

    <div class="cp-grid" id="cp-list"></div>
    <div class="cp-prog">
      <div class="cp-prog-label">
        <span>Usvojenost H14</span>
        <span id="cp-pct">0 / 10</span>
      </div>
      <div class="cp-prog-track"><div class="cp-prog-bar" id="cp-bar" style="width:0%"></div></div>
    </div>
    <div class="cp-actions">
      <button class="fcb" onclick="cpReset()">↩ Resetiraj</button>
      <button class="fcb primary" onclick="sw(6)">🧠 Idi na kviz</button>
    </div>

    <div class="cp-summary" id="cp-summary-box" style="display:none">
      <div class="cp-sum-pct" id="cp-sum-pct">0%</div>
      <div class="cp-sum-txt" id="cp-sum-txt">Označi tvrdnje koje <strong>stvarno znaš</strong>.</div>
    </div>

    <div class="cp-final" id="cp-final">
      <div class="cp-final-ico">🏆</div>
      <div class="cp-final-title">H14 Završeno!</div>
      <div class="cp-final-msg">Izvrsno! Savladao/la si Mažuranića i Smrt Smail-age Čengića — 5 pjevanja, romantičarski spjev, preporodni kontekst i 3 razine čitanja.<br>Sljedeće: <strong>H15 · Šenoa i realizam</strong>.</div>
      <a href="Maturiraj_Hrvatski_H15.html?from=H14" class="reveal-lock-btn" style="text-decoration:none;display:inline-flex;align-items:center;gap:8px">→ H15 · Šenoa i realizam</a>
      <br><br>
      <button class="nb-btn" onclick="cpReset()">↩ Resetiraj</button>
    </div>

    <!-- Writing practice widget -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">Vježba pisanja — rečenica o Smrti Smail-age</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">✍ Napiši jednu rečenicu o Smrti Smail-age koja bi mogla ući u odgovor/interpretaciju</div>
      <div class="box-int-txt">Vježbaj oblikovanje esejskih rečenica. Cilj: precizna, tehnički točna rečenica s književnim pojmom, primjerom i argumentom. Minimum 20 riječi.</div>
    </div>
    <div class="wc-wrap">
      <div class="wc-header">
        <div class="wc-lbl">Vježbaj pisanje esejske rečenice</div>
        <div class="wc-stats">
          <div class="wc-stat" id="cpw-words"><span class="wc-stat-num">0</span><span class="wc-stat-lbl">Riječi</span></div>
          <div class="wc-stat" id="cpw-terms"><span class="wc-stat-num">0</span><span class="wc-stat-lbl">Pojmova</span></div>
        </div>
      </div>
      <div class="wc-body">
        <textarea id="cp-writer" class="wc-ta" style="min-height:100px" placeholder="Npr: Mažuranić u Smrti Smail-age Čengića (1846.) gradi romantičarski spjev u 5 pjevanja — kroz Novičino moralno preobraćenje i svečenikov biblijski govor — prikazuje prolaznost tiranije i konačnu pobjedu pravde u preporodnom kontekstu..." rows="4" oninput="cpWriterUpdate()"></textarea>
        <div class="wc-prog" id="cpw-prog"><div class="wc-prog-bar" id="cpw-bar"></div></div>
        <div class="wc-prog-lbl" id="cpw-lbl">CILJ 20 RIJEČI · 0 / 20</div>
        <div class="wc-actions">
          <button class="wc-btn" onclick="navigator.clipboard.writeText(document.getElementById('cp-writer').value)">⎘ Kopiraj</button>
          <button class="wc-btn" onclick="document.getElementById('cp-writer').value='';cpWriterUpdate()">✕ Obriši</button>
        </div>
      </div>
    </div>
    <div id="cp-writer-fb" style="margin-top:10px"></div>

    <div class="box-signal" style="margin-top:24px">
      <div class="box-signal-lbl">📎 Poveznice između tabova H14</div>
      <div class="box-signal-txt">
        <b>Teorija (0)</b> → kontekst i pojmovi → <b>3 činjenja (1)</b> → detaljna analiza → <b>Esej alat (2)</b> → primjena u eseju → <b>Citatnik (3)</b> → gotovi citati → <b>Pojmovnik (4)</b> → precizni pojmovi → <b>Kviz (6)</b> → provjera → <b>Checkpoint (7)</b> → potvrda. <strong>Za ispit: počni s Kvizom (brza dijagnoza), zatim nadopuni slabe točke.</strong>
      </div>
    </div>
  </div>

</div><!-- /content-wrap -->
  <!-- ═══════════════════════════════════
       CROSS-CHAPTER NAVIGATION
  ═══════════════════════════════════ -->
  <div class="chapter-nav-wrap">
    <div class="chapter-nav-hdr">
      <div class="chapter-nav-title">📚 Sljedeća poglavlja</div>
      <div class="chapter-nav-sub">Nastavi učiti — povezana poglavlja u Maturiraj knjižnici</div>
    </div>
    
    <div class="chapter-nav-grid">
      <a class="chapter-nav-card chapter-nav-prev" href="/skripte/hrv/h13">
        <div class="chapter-nav-arrow">←</div>
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill">PRETHODNO</div>
          <div class="chapter-nav-name">H13 · Gundulić · Dubravka</div>
          <div class="chapter-nav-desc">Hrvatski barok</div>
        </div>
      </a>

      <a class="chapter-nav-card chapter-nav-next" href="/skripte/hrv/h15">
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill chapter-nav-pill-next">SLJEDEĆE</div>
          <div class="chapter-nav-name">H15 · Šenoa · Prijan Lovro</div>
          <div class="chapter-nav-desc">Hrvatski realizam</div>
        </div>
        <div class="chapter-nav-arrow">→</div>
      </a>
</div>

    <div class="chapter-nav-related">
      <div class="chapter-nav-related-ttl">🔗 Povezana poglavlja</div>
      <div class="chapter-nav-related-grid">
        <a class="chapter-nav-mini" href="/skripte/hrv/h12">
          <span class="chapter-nav-mini-code">H12</span>
          <span class="chapter-nav-mini-name">Marulić · Judita</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h13">
          <span class="chapter-nav-mini-code">H13</span>
          <span class="chapter-nav-mini-name">Gundulić · Dubravka</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h15">
          <span class="chapter-nav-mini-code">H15</span>
          <span class="chapter-nav-mini-name">Šenoa · realizam</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h23">
          <span class="chapter-nav-mini-code">H23</span>
          <span class="chapter-nav-mini-name">Povijest hrv. jezika</span>
        </a>
      </div>
    </div>
  </div>


</main>
</div><!-- /shell -->
<script>
/* ═══════════════════════════════════
   GLOBALS & DATA
═══════════════════════════════════ */
const CITATI=[]; /* Legacy H12 array - dead code, replaced by CIT_DATA2 */

const POJMOVI=[]; /* Legacy H12 array - dead code, replaced by POJM_DATA2 */

const KVIZ_Q=[
  {q:'Kada je Smrt Smail-age Čengića prvi put objavljena?',o:['1848. u Saboru','1828. u Danici','1846. u almanahu Iskra','1835. u prvom broju Danice'],t:2,e:'Smrt Smail-age objavljena je 1846. godine u almanahu Iskra u Zadru. Urednik je bio Dimitrije Demeter.'},
  {q:'Tko je autor Smrti Smail-age Čengića?',o:['Ljudevit Gaj','Stanko Vraz','August Šenoa','Ivan Mažuranić'],t:3,e:'Ivan Mažuranić (1814.–1890.), rođen u Novom Vinodolskom, kasnije ban Hrvatske (1873.–1880.). „Pučki ban" — nije plemić.'},
  {q:'Kojoj vrsti djela pripada Smrt Smail-age Čengića?',o:['Junački ep','Romantičarski spjev','Tragedija','Balada'],t:1,e:'Djelo je spjev — kraće narativno djelo u stihu koje objedinjuje epsku, dramsku i lirsku komponentu. Ep je duži (tisuće stihova).'},
  {q:'Koliko pjevanja ima Smrt Smail-age Čengića?',o:['4 — po ugledu na Osmana','7 — prema hrvatskoj epskoj tradiciji','5 — Agovanje, Noćnik, Četa, Harač, Kob','3 — Agovanje, Harač, Kob'],t:2,e:'Djelo ima 5 pjevanja ukupne duljine 1134 stiha. Akronim za pamćenje: A-N-Č-H-K.'},
  {q:'Koji je stih najviše prisutan u djelu?',o:['Heksametar','Štokavski osmerac (4+4) i deseterac (4+6)','Dvanaesterac (6+6)','Samo deseterac'],t:1,e:'Mažuranić koristi osmerac za lirske dionice, deseterac za narativne i svečane. Obje metrike preuzete su iz narodne epike.'},
  {q:'Koje je najduže pjevanje i koliko ima stihova?',o:['III. Četa — 500 stihova','V. Kob — 234 stiha','IV. Harač — 623 stiha','I. Agovanje — 400 stihova'],t:2,e:'IV. Harač je najduže pjevanje (623 stiha), sadrži bitku i aginu smrt — kulminacija djela. V. Kob je najkraće (34 stiha).'},
  {q:'Gdje se odvija radnja I. Agovanja?',o:['Na Cetinju u Crnoj Gori','Na Lovćenu','Na Gackom polju','U Stolcu (Hercegovina) — aginoj kuli'],t:3,e:'Stolac je središte aginog kraljevstva. Tu se muče Crnogorci, ubija Durak, i najavljuje Novičino preobraćenje.'},
  {q:'Što predstavlja II. pjevanje Noćnik?',o:['Obredno uhođenje špijuna','Novičino noćno putovanje iz Stolca na Cetinje','Noćni napad age na selo','Ritual noćnih misterija Crnogoraca'],t:1,e:'Noćnik opisuje Novičinu tajnovitu noćnu seobu iz aginog tabora u Crnu Goru gdje se pokršćava i pridružuje četi radi osvete.'},
  {q:'Što je glavno zbivanje III. Čete?',o:['Bitka Crnogoraca i Turaka','Pokrštenje Novice','Duhovna priprema čete + svećenikov domoljubni govor','Aginovo sudište'],t:2,e:'III. Četa je najmirnije pjevanje — nema akcije, ali je ideološki centar djela. Svećenik blagoslovi borce i legitimira osvetu.'},
  {q:'Što se događa u V. pjevanju Kob?',o:['Novica postaje vladar Crne Gore','Agini sinovi traže osvetu','Crnogorci slave pobjedu','Pustinjak na Lovćenu refleksira o prolaznosti sile'],t:3,e:'Kob ima samo 34 stiha. Pustinjak (Mažuranićev autorski glas) filozofski reflektira o tome da svaka tiranija dočekuje pravednu kaznu.'},
  {q:'Tko je Smail-aga Čengić?',o:['Vođa crnogorske čete','Bosansko-hercegovački muselim (guverner)','Hrvatski ban i plemić','Crnogorski svećenik'],t:1,e:'Smail-aga je bio turski muselim (lokalni guverner) u Hercegovini. Povijesno stvarno ubijen 1840. na Mljetičkom polju u Crnoj Gori.'},
  {q:'Tko je Novica u djelu?',o:['Mlađi Turčin koji uživa u mučenjima','Crnogorski svećenik koji blagoslovi četu','Aga koji naslijeđuje Smail-agu','Durakov sin, agin kavaz — glavni protagonist'],t:3,e:'Novica je jedini individualizirani lik. Od „krvnika Crne Gore" (agin kavaz) preobraća se u osvetnika nakon očeva ubojstva.'},
  {q:'Zašto aga ubija Duraka?',o:['Jer je Durak ukrao harač','Jer je Novica pobjegao','Jer ga je Durak savjetovao da ne izaziva osvetu','Jer je Durak bio kršćanski špijun'],t:2,e:'Durak (u stvarnosti Milutin) je dugogodišnji agin savjetnik. Upozorava agu na pravednu osvetu — aga u bijesu ga pogubljuje. To pokreće Novičinu transformaciju.'},
  {q:'Kako su Crnogorci karakterizirani u djelu?',o:['Kao individualizirani junaci s osobnim linijama','Kao potkupljivi plemići','Kao kolektivni junak — bez individualizacije','Kao mudraci koji izbjegavaju borbu'],t:2,e:'Mažuranić ne individualizira Crnogorce. Oni su simbol slobodarskog naroda općenito — hrabri, šute pred mukama, junački umiru. Tipično romantičarsko.'},
  {q:'Tko je Bauk u djelu?',o:['Crnogorski svećenik','Aginov brat koji ga osveti','Mladić kojeg aga ubija','Jedan od aginih slugu koji pjeva rugalicu mrtvom agi'],t:3,e:'Bauk je ironični svjedok — preživi bitku u IV. Haraču i pjeva rugalicu mrtvom agi. „Tu nek plijen vranom vranu stoji" — tiranin postaje plijen gavrana.'},
  {q:'Što je slavenska antiteza?',o:['Narodno-epska tehnika pitanja–negacije–odgovora','Suprotstavljanje slavenskih i orijentalnih motiva','Stilska figura specifična za baroknu književnost','Oblik rime u štokavskom stihu'],t:0,e:'Slavenska antiteza je tehnika: pitanje → negacija → odgovor. Primjer u II. Noćniku: „Je li hajduk, il\\u2019 uhoda turska? Nit je hajduk... već Novica."'},
  {q:'Što znači citat „Boj se onoga tko je viko bez golema mrijet jada!"?',o:['Tiranin se boji onoga tko nema što izgubiti','Život je uzaludan ako je bez patnje','Mladi ljudi trebaju izbjegavati smrt','Hrabri umiru šutke'],t:0,e:'Durakova opomena Smail-agi u I. Agovanju. Najpoznatiji citat djela — moralna formula koju Mažuranić stavlja u srce spjeva.'},
  {q:'Koja je uloga prirode u IV. Haraču?',o:['Simbol aginog bogatstva','Oluja kao moralni sudac — priroda svrstava se protiv age','Pozadinski ukras za opise krajolika','Prepreka za Crnogorce u napadu'],t:1,e:'Oluja u Haraču je romantičarski motiv — priroda moralno aktivna, pravedno kažnjava tiraniju. Crnogorci napadaju pod zaklonom oluje — pravda i priroda u savezu.'},
  {q:'Što znače turcizmi u djelu (aga, kavaz, muselim, harač)?',o:['Biblijski izrazi iz svećenikovog govora','Riječi turskoga podrijetla koje dočaravaju orijentalni svijet','Hrvatski dijalektalni izrazi','Staroslovenski arhaizmi'],t:1,e:'Mažuranić koristi turcizme za autentičnost konteksta. Nisu ornament — služe dočaranju turske vlasti i svakodnevice.'},
  {q:'Što je aga pisao kao „kerv", „serce", „kerst"?',o:['Dijalektalne varijante štokavštine','Turcizmi iz arapskog','Biblijski arhaizmi','Izvorni pravopis prije Gajeve reforme — er umjesto vokalnog r'],t:3,e:'Mažuranić piše u preporodnoj tranziciji — još uvijek koristi stari pravopis s „er" umjesto vokalnog r. To je predgajevska grafija, svjedočanstvo epohe.'},
  {q:'Kojem razdoblju književnosti pripada djelo?',o:['Hrvatski romantizam / narodni preporod','Realizam 19. st.','Hrvatski barok (17. st.)','Moderna 20. st.'],t:0,e:'Smail-aga je vrhunac hrv. romantizma i narodnog preporoda. Pojavljuje se u istom desetljeću kao Gajeva Danica, standardizacija jezika i nacionalno buđenje.'},
  {q:'Tko je pokrenuo hrvatski narodni preporod?',o:['Ivan Mažuranić — Smail-agom 1846.','Ljudevit Gaj — Danicom 1835.','Antun Mihanović — himnom Lijepa naša','Dimitrije Demeter — almanahom Iskra'],t:1,e:'Gaj 1835. pokreće „Danicu horvatsku, slavonsku i dalmatinsku". Mažuranić je sudionik, ali ne pokretač. Mihanović piše Lijepu našu (1835.).'},
  {q:'Koja je glavna ideja djela?',o:['Individualna sreća u prirodi','Neizbježnost tragičnog ishoda','Religiozna pokora kao put do mira','Prolaznost sile i konačna pobjeda pravde'],t:3,e:'Glavna ideja, izrečena pustinjakom u V. Kobi: svaka tiranija je prolazna, pravda je trajna. Univerzalna romantičarska etika.'},
  {q:'Što predstavlja preobraćenje Novice?',o:['Uniženje pred crkvom','Moralnu transformaciju — od krvnika do osvetnika','Izgubljeni romantičarski bijeg','Etničku izdaju Turaka'],t:1,e:'Novica je jedini individualizirani lik. Njegova preobrazba (krvnik → pokrštenje → osvetnik) pokazuje romantičarsku temu moralnog buđenja kroz osobnu bol.'},
  {q:'Na temelju kojeg stvarnog događaja je djelo napisano?',o:['Hoćimske bitke 1621.','Pogibije Smail-age Čengića u listopadu 1840.','Krbavske bitke 1493.','Ustanka u Crnoj Gori 1815.'],t:1,e:'Smail-aga je stvarno ubijen u listopadu 1840. na Mljetičkom polju. Mažuranić premješta radnju na Gacko polje — pjesnička sloboda.'},
];

const CP_ITEMS=[
  'Znam godinu i mjesto objave Smrti Smail-age Čengića (1846., almanah Iskra u Zadru).',
  'Mogu nabrojati svih 5 pjevanja po redu (Agovanje, Noćnik, Četa, Harač, Kob) i znam duljine (Harač 623, Kob 34).',
  'Razumijem razliku ep / spjev / balada — i zašto je Smail-aga spjev (kratak, lirsko-dramski elementi).',
  'Znam glavne likove i njihove funkcije: Smail-aga (tiranin), Novica (protagonist u preobrazbi), Durak (savjetnik), Crnogorci (kolektiv).',
  'Razumijem Novičinu moralnu transformaciju — od krvnika Crne Gore do krsnog osvetnika (II. Noćnik).',
  'Mogu prepoznati stilska sredstva: slavenska antiteza, epitet, personifikacija prirode, kontrast, biblijska aluzija, kletva.',
  'Znam najpoznatiji citat „Boj se onoga tko je viko bez golema mrijet jada!" i mogu ga interpretirati u preporodnom kontekstu.',
  'Razumijem 3 razine čitanja: konkretnu (povijesni događaj 1840.), nacionalnu (preporodna alegorija), univerzalnu (prolaznost sile).',
  'Znam preporodni kontekst: Ljudevit Gaj, Danica (1835.), gajica, štokavština, Mažuranić kao ban Hrvatske (1873.–1880.).',
  'Mogu usporediti Smrt Smail-age s drugim djelima (Judita, Dubravka, Osman) i prepoznati zajedničke alegorijske motive.',
];

const DIAG0_Q=[
  {q:'U kojoj godini je objavljena Smrt Smail-age Čengića?',o:['1835.','1846.','1848.','1890.'],t:1},
  {q:'Tko je autor Smrti Smail-age Čengića?',o:['Ljudevit Gaj','Stanko Vraz','Ivan Mažuranić','August Šenoa'],t:2},
  {q:'Koliko pjevanja ima Smrt Smail-age Čengića?',o:['3','4','5','6'],t:2},
  {q:'Koje je najduže pjevanje?',o:['Agovanje','Noćnik','Četa','Harač'],t:3},
  {q:'Koje stihove Mažuranić koristi u djelu?',o:['Dvanaesterac i osmerac','Osmerac i deseterac','Heksametar','Sonet'],t:1}
]

/* ═══════════════════════════════════
   TAB SWITCHER
═══════════════════════════════════ */
const TAB_NAMES=['Teorija','5 pjevanja','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];
function sw(n){
  document.querySelectorAll('.tab').forEach((t,i)=>{
    t.classList.toggle('on',i===n);
    t.setAttribute('aria-selected',i===n);
  });
  document.querySelectorAll('.layer').forEach((l,i)=>l.classList.toggle('on',i===n));
  document.getElementById('bc-tab').textContent=TAB_NAMES[n];
  if(n===6)qzInit();
  if(n===5){
    // init drill on first open
    if(!document.getElementById('mg-dynamic').dataset.init){
      document.getElementById('mg-dynamic').dataset.init='1';
      mgInit('easy');
      fcInit();
    }
  }
  window.scrollTo({top:0,behavior:'smooth'});
  closeSb();
}

/* ═══════════════════════════════════
   SIDEBAR
═══════════════════════════════════ */
function openSb(){
  document.getElementById('sidebar').classList.add('mobile-open');
  document.getElementById('overlay').classList.add('show');
}
function closeSb(){
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('overlay').classList.remove('show');
}

/* ═══════════════════════════════════
   COUNTDOWN
═══════════════════════════════════ */
(function(){
  // Datum ispita Hrv. jezik — ljetni rok 2025./2026.
  // Dan 1 (test + sažetak): 15. lipnja 2026.
  // Dan 2 (esej):           16. lipnja 2026.
  // Izvor: NCVVO kalendar 2025./2026.
  const now=new Date();
  const todayLocal=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const dan1=new Date(2026,5,15); // 15. lipnja 2026. — lokalno (month je 0-indexed!)
  const dan2=new Date(2026,5,16); // 16. lipnja 2026.
  const target=todayLocal<=dan1?dan1:dan2; // Prikaži dan 1, pa dan 2
  const diff=Math.round((target-todayLocal)/(1000*60*60*24));
  const el=document.getElementById('cd-days');
  const cw=el?el.closest('.countdown'):null;
  if(!el)return;
  if(diff>0){
    el.textContent=diff;
    if(cw&&diff<=30)cw.style.borderColor='var(--bronze-d)';
    if(cw&&diff<=14)cw.style.borderColor='var(--bronze)';
    if(cw&&diff<=7){cw.style.borderColor='var(--red)';cw.style.color='var(--red)';}
  } else if(diff===0){
    el.textContent='DANAS!';
    if(cw)cw.style.borderColor='var(--gold)';
  } else if(Math.round((dan2-todayLocal)/(1000*60*60*24))===0){
    el.textContent='Esej DANAS!';
    if(cw)cw.style.borderColor='var(--gold)';
  } else {
    el.textContent='prošlo';
  }
})();

/* ═══════════════════════════════════
   SCENES (pjevanja)
═══════════════════════════════════ */
function togScene(card){
  const wasOpen=card.classList.contains('open');
  document.querySelectorAll('.scene-card').forEach(c=>c.classList.remove('open'));
  if(!wasOpen)card.classList.add('open');
}

/* ═══════════════════════════════════
   DIAG0
═══════════════════════════════════ */
let d0idx=0,d0score=0;
function diag0Skip(){
  document.getElementById('diag0').dataset.state='dismissed';
}
function diag0Start(){
  d0idx=0;d0score=0;
  document.getElementById('diag0').dataset.state='quiz';
  d0Show();
}
function d0Show(){
  if(d0idx>=DIAG0_Q.length){diag0End();return;}
  const q=DIAG0_Q[d0idx];
  document.getElementById('d0fill').style.width=((d0idx/DIAG0_Q.length)*100)+'%';
  document.getElementById('d0num').textContent=\`Pitanje \${d0idx+1} / \${DIAG0_Q.length}\`;
  document.getElementById('d0text').textContent=q.q;
  const opts=document.getElementById('d0opts');
  opts.innerHTML='';
  q.o.forEach((o,i)=>{
    const btn=document.createElement('button');
    btn.className='diag-opt';btn.textContent=o;
    btn.onclick=()=>{
      opts.querySelectorAll('.diag-opt').forEach(b=>b.onclick=null);
      if(i===q.t){btn.classList.add('correct');d0score++;}
      else{btn.classList.add('wrong');opts.querySelectorAll('.diag-opt')[q.t].classList.add('correct');}
      setTimeout(()=>{d0idx++;d0Show();},900);
    };
    opts.appendChild(btn);
  });
}
function diag0End(){
  document.getElementById('diag0').dataset.state='result';
  const pct=Math.round(d0score/DIAG0_Q.length*100);
  let msg='', btnTxt='', btnTab=1;
  if(pct>=80){
    msg='<strong>Odlično!</strong> Osnove H12 imaš savladane. Preporučujem Esej alat — tamo su gotove teze za eseje o Petrarci i Calderónu.';
    btnTxt='✍ Esej alat →'; btnTab=2;
  } else if(pct>=60){
    msg='<strong>Dobro!</strong> Nekoliko rupa postoji — provjeri Smail-aga: 5 pjevanja za detalje o svakom pjevanju i interpretaciji.';
    btnTxt='📖 Smail-aga: 5 pjevanja →'; btnTab=1;
  } else {
    msg='<strong>Kreni od osnova.</strong> Preporučujem: Teorija (Sec 01-07) + Pojmovnik (Tab 4). Alegorijska shema i dvanaesterac su ključni — zapis ih napamet.';
    btnTxt='📖 Teorija →'; btnTab=0;
  }
  document.getElementById('d0rtitle').textContent=\`\${d0score} / \${DIAG0_Q.length} — \${pct}%\`;
  document.getElementById('d0rdesc').innerHTML=msg;
  const btn=document.getElementById('d0rbtn');
  if(btn){btn.textContent=btnTxt;btn.onclick=()=>sw(btnTab);}
}
function diag0Reset(){document.getElementById('diag0').dataset.state='intro';}

/* ═══════════════════════════════════
   CITATNIK
═══════════════════════════════════ */
const CAT_COLORS={alegorija:'p-go',vjera:'p-t',judita:'p-br',holofern:'p-r',domoljublje:'p-g',stih:'p-pa'};
let citStars={};
try{citStars=JSON.parse(localStorage.getItem('mt.hrv.h14.cit_stars')||'{}')}catch(e){}
let citActive='sve';

function renderCitati(){
  const grid=document.getElementById('cit-grid');
  if(!grid)return;
  const show=citActive==='sve'?CITATI:CITATI.filter(c=>c.tags.includes(citActive));
  grid.innerHTML=show.map((c,i)=>{
    const idx=CITATI.indexOf(c);
    const starred=citStars[idx]?'starred':'';
    const tagsHTML=c.tags.map(tg=>\`<span class="cit-tag \${CAT_COLORS[tg]||'p-pa'}">\${tg}</span>\`).join('');
    return \`<div class="cit-card">
      <div class="cit-text">\${c.t}</div>
      <div class="cit-meta">
        <span class="cit-src">\${c.s}</span>
        <div class="cit-tags">\${tagsHTML}<span class="cit-star \${starred}" onclick="togStar(\${idx},this)">★</span></div>
      </div>
    </div>\`;
  }).join('');
}
function togStar(i,el){
  citStars[i]=!citStars[i];
  el.classList.toggle('starred',!!citStars[i]);
  try{localStorage.setItem('mt.hrv.h14.cit_stars',JSON.stringify(citStars))}catch(e){}
}
function citFilter(btn,kat){
  document.querySelectorAll('.cit-fbt').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  citActive=kat;
  renderCitati();
}
renderCitati();

/* ═══════════════════════════════════
   POJMOVNIK
═══════════════════════════════════ */
let pojActive='sve';
function renderPojmovi(){
  const grid=document.getElementById('poj-grid');
  if(!grid)return;
  const show=pojActive==='sve'?POJMOVI:POJMOVI.filter(p=>p.kat===pojActive);
  const catCls={stih:'p-pa',stil:'p-t',ep:'p-br',hum:'p-go',aleg:'p-r'};
  grid.innerHTML=show.map(p=>\`
    <div class="poj-card" onclick="this.classList.toggle('open')">
      <div class="poj-front">
        <div class="poj-term">\${p.t}</div>
        <span class="poj-cat \${catCls[p.kat]||'p-pa'}">\${p.kat}</span>
      </div>
      <div class="poj-def">\${p.d}\${p.e?\`<div class="poj-ex">Primjer: \${p.e}</div>\`:''}</div>
    </div>
  \`).join('');
}
function pojFilter(btn,kat){
  document.querySelectorAll('#poj-filter .cit-fbt').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');pojActive=kat;renderPojmovi();
}
renderPojmovi();

/* ═══════════════════════════════════
   ESEJ ALAT
═══════════════════════════════════ */
function alTab(btn,pane){
  document.querySelectorAll('.alat-tab').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.alat-pane').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById(pane).classList.add('on');
}
function cpyTeza(el){
  navigator.clipboard.writeText(el.textContent.trim()).catch(()=>{});
  el.classList.add('copied');
  setTimeout(()=>el.classList.remove('copied'),1500);
}

/* ═══════════════════════════════════
   SCANNER — Analiza ulomka Dubravke
═══════════════════════════════════ */
function scannerCount(){
  const ta = document.getElementById('scanner-in');
  if(!ta) return;
  const txt = ta.value;
  const chars = document.getElementById('scanner-chars');
  const words = document.getElementById('scanner-words');
  if(chars) chars.textContent = txt.length;
  if(words) words.textContent = txt.trim() ? txt.trim().split(/\\s+/).length : 0;
}

function scannerClear(){
  const ta = document.getElementById('scanner-in');
  const out = document.getElementById('scanner-out');
  if(ta){ ta.value=''; scannerCount(); }
  if(out) out.innerHTML = '';
}

function scannerGo(){
  const ta = document.getElementById('scanner-in');
  const out = document.getElementById('scanner-out');
  if(!ta || !out) return;
  const txt = ta.value.trim();
  if(!txt){
    out.innerHTML = '<div class="box-warn" style="margin-top:10px"><div class="bw-body"><div class="bw-txt">Zalijepi stihove iz Smrti Smail-age prije analize.</div></div></div>';
    return;
  }
  const tl = txt.toLowerCase();
  
  // Detekcija likova
  const likovi = [];
  if(/smail|aga\\b|čengić/.test(tl)) likovi.push('Smail-aga Čengić');
  if(/novic/.test(tl)) likovi.push('Novica');
  if(/durak|milutin/.test(tl)) likovi.push('Durak');
  if(/crnogor|brđani/.test(tl)) likovi.push('Crnogorci (kolektiv)');
  if(/svećenik|pop\\b/.test(tl)) likovi.push('Svećenik');
  if(/pustinjak/.test(tl)) likovi.push('Pustinjak');
  if(/mirko/.test(tl)) likovi.push('Mirko');
  if(/bauk/.test(tl)) likovi.push('Bauk');
  if(/omer|jašar|mujo|safer/.test(tl)) likovi.push('Agine sluge');
  
  // Detekcija pjevanja (po ključnim motivima)
  let pjevanje = '';
  if(/stolac|mučenj|kolac|vješanj|lipov|durak|aga\\s+naređ/.test(tl)) pjevanje = 'I. Agovanje (Stolac, mučenja, Durakova smrt)';
  else if(/noć|hajduk|uhoda|kršnij|ćeklić|cetinj|pokršt/.test(tl)) pjevanje = 'II. Noćnik (Novičino putovanje)';
  else if(/četa|svećenik|blagoslov|priprem|grijeh|kajanj/.test(tl)) pjevanje = 'III. Četa (moralna priprema)';
  else if(/gacko|harač|oluja|bitk|gromnj|vran|plijen/.test(tl)) pjevanje = 'IV. Harač (bitka, agina smrt)';
  else if(/lovćen|pustinjak|prolazn|kob\\b|filozof/.test(tl)) pjevanje = 'V. Kob (refleksija o prolaznosti sile)';
  
  // Detekcija stilskih sredstava
  const stila = [];
  if(/je\\s+li\\s|nit\\s+je/.test(tl)) stila.push('Slavenska antiteza (pitanje–negacija–odgovor)');
  if(/mrki|krvnik|silnik|ohol|svil/.test(tl)) stila.push('Epitet');
  if(/grijeh|oprosnik|prika|vaj\\b/.test(tl)) stila.push('Biblijska aluzija / arhaizam');
  if(/oluja|grmi|kiša|tlo\\s+se|priroda/.test(tl)) stila.push('Personifikacija prirode');
  if(/vranom\\s+vran|gladna\\s+miša|kao\\s+vuk/.test(tl)) stila.push('Metafora');
  if(/boj\\s+se|proklet|blaž/.test(tl)) stila.push('Kletva / opomena');
  
  // Detekcija 3 razina čitanja
  const razine = [];
  if(/1840|mljetič|gacko|stvaran/.test(tl)) razine.push('Konkretna (povijesna razina — stvarni događaj 1840.)');
  if(/preporod|ilir|sloboda\\s+narod|hrvatsk|nacional/.test(tl)) razine.push('Nacionalna (preporodna alegorija)');
  if(/tiranij|pravda|prolazn|sila\\s+pad|moral/.test(tl)) razine.push('Univerzalna (filozofska razina)');
  
  // Vjerojatni stih
  const lines = txt.split(/[\\n.!?]/).filter(s => s.trim());
  const avgSyl = lines.length > 0 ? lines.reduce((a,b) => a + b.trim().split(/\\s+/).length, 0) / lines.length : 0;
  let stih = '';
  if(/boj\\s+se\\s+onog|sve\\s+je\\s+grijeh/i.test(tl)) stih = 'Osmerac (4+4) — lirski/svečani ton';
  else if(avgSyl < 4) stih = 'Osmerac (kratki ritam)';
  else if(avgSyl < 6) stih = 'Osmerac (4+4) — narodno-epski';
  else stih = 'Deseterac (4+6) — narativni/svečani';
  
  // Render
  let h = '<div class="box-int" style="margin-top:10px"><div class="box-int-lbl">📊 Rezultat analize ulomka</div><div class="box-int-txt">';
  
  h += '<p><b>🎬 Vjerojatno pjevanje:</b> ' + (pjevanje || '<em>Nedovoljno signala — provjeri kontekst</em>') + '</p>';
  
  h += '<p><b>📏 Vjerojatni stih:</b> ' + (stih || 'Nedovoljno za procjenu') + '</p>';
  
  h += '<p><b>🎭 Likovi u ulomku:</b> ' + (likovi.length ? likovi.join(', ') : '<em>Nisu eksplicitno imenovani — provjeri kontekst</em>') + '</p>';
  
  h += '<p><b>✒ Stilska sredstva:</b> ' + (stila.length ? stila.join(', ') : '<em>Nisu prepoznata bazična sredstva</em>') + '</p>';
  
  h += '<p><b>📊 Razine čitanja koje se aktiviraju:</b> ' + (razine.length ? '<br>• ' + razine.join('<br>• ') : '<em>Nema eksplicitnih oznaka — provjeri kontekst</em>') + '</p>';
  
  h += '<p style="margin-top:10px;padding-top:10px;border-top:1px dashed var(--bd)"><b>🎯 Esejska primjena:</b> Za analizu ovog ulomka: (1) identificiraj iz kojeg je pjevanja, (2) imenuj stih (osmerac ili deseterac), (3) izdvoj 2-3 stilska sredstva s konkretnim primjerom, (4) poveži na barem dvije razine čitanja (konkretna/nacionalna/univerzalna), (5) reci kako ulomak svjedoči o romantičarskim obilježjima (priroda, patos, polarizacija).</p>';
  
  h += '</div></div>';
  out.innerHTML = h;
}


/* Scanner */
function scannerUpdate(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  const txt=ta.value;
  const words=txt.trim()?txt.trim().split(/\\s+/).length:0;
  const lines=txt.split('\\n').filter(function(l){return l.trim().length>0;}).length;
  // Estimate syllables (Croatian: count vowels a,e,i,o,u)
  const syl=words>0?Math.round(txt.replace(/[^aeiouAEIOUčšžđćČŠŽĐĆ]/g,'').length/Math.max(words,1)*10)/10:0;
  const we=document.getElementById('sc-words');if(we)we.querySelector('.wc-stat-num').textContent=words;
  const le=document.getElementById('sc-lines');if(le)le.querySelector('.wc-stat-num').textContent=lines;
  const se=document.getElementById('sc-syl');if(se)se.querySelector('.wc-stat-num').textContent=syl||'—';
  try{localStorage.setItem('mt.hrv.h14.wc_text',txt);}catch(e){}
}
(function(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h14.wc_text');if(sv){ta.value=sv;scannerUpdate();}}catch(e){}
})();

function scanJudita(){
  const txt=document.getElementById('scanner-in').value.trim();
  const out=document.getElementById('scanner-out');
  if(!txt||txt.length<10){out.innerHTML='<div class="box-warn"><div class="box-warn-lbl">⚠ Prazan unos</div><div class="box-warn-txt">Unesite barem jedan stih Judite za analizu.</div></div>';return;}
  
  let findings=[];
  if(/\\d{1,2}\\s*\\+\\s*\\d{1,2}|šest|cezur/i.test(txt))findings.push('🎵 <strong>Metrička napomena:</strong> Tekst sadrži reference na broj slogova ili cezuru — provjeri je li stih dvanaesterac (6+6).');
  if(/judita|udova|lijepa|lipos/i.test(txt))findings.push('👤 <strong>Judita kao lik:</strong> Ovaj ulomak govori o Juditi. Korisni argumenti: psihologizacija, individualnost, alegorijska dimenzija (= Hrvatska).');
  if(/holofern|vojvoda|neprijatel|tursk/i.test(txt))findings.push('⚔️ <strong>Holofern / neprijatelj:</strong> Ovaj ulomak govori o antagonistu. Argumenti: oholost (hybris), alegorija Turaka, moć bez vjere.');
  if(/moli|Gospod|Bog|Isus|vjera|Krist/i.test(txt))findings.push('✝️ <strong>Vjera / molitva:</strong> Religijska dimenzija. Marulić = kršćanski humanist. Bog kao jedini izvor prave moći.');
  if(/Betulija|grad|zid|opsad/i.test(txt))findings.push('🏰 <strong>Betulija:</strong> Alegorija hrv. gradova pod opsadom. Veza: konkretna geografska situacija Dalmacije 1501.');
  if(/slav|pobijed|radost|trijumf/i.test(txt))findings.push('🏆 <strong>Trijumf:</strong> Ovaj ulomak vjerojatno je iz V. ili VI. pjevanja — pobjeda i moralna pouka.');
  if(/invokacij|Ki hoće|slišati|čudesa/i.test(txt))findings.push('📖 <strong>Invokacija:</strong> Početak epa — zaziv čitatelja. Epska konvencija (usp. Homer, Vergilije).');
  if(findings.length===0)findings.push('ℹ️ <strong>Opća napomena:</strong> Ulomak analiziran. Za detalje: provjeri pjevanje iz kojeg potječe (koristite Tab 1 — 5 pjevanja), identificiraj likove i stilska sredstva.');
  
  out.innerHTML=\`<div class="box-int">
    <div class="box-int-lbl">🔍 Analiza ulomka</div>
    \${findings.map(f=>\`<div class="box-signal-txt" style="margin-bottom:8px">• \${f}</div>\`).join('')}
    <div style="margin-top:12px;font-family:var(--mono);font-size:10px;color:var(--t3)">Napomena: automatska analiza. Za dublje tumačenje koristite Tab 2 (Esej alat) i Tab 3 (Citatnik).</div>
  </div>\`;
}

/* ═══════════════════════════════════
   KVIZ
═══════════════════════════════════ */
let qzIdx=0,qzScore=0,qzAnswered=[];
function qzInit(){
  const w=document.getElementById('qz-wrap');
  if(!w||w.dataset.init==='1')return;
  w.dataset.init='1';
  qzRender();
}
function qzRender(){
  const w=document.getElementById('qz-wrap');
  if(!w)return;
  w.innerHTML=\`<div class="qz-wrap" id="qz-inner"></div>\`;
  qzIdx=0;qzScore=0;
  const el=document.getElementById('qz-inner');
  el.innerHTML=\`<div class="qz-start">
    <div class="qz-start-ico">🧠</div>
    <h3>20 pitanja · H12 Judita</h3>
    <p>Pitanja pokrivaju cijelo poglavlje H14: Mažuranić, Smrt Smail-age, romantizam, preporod, 5 pjevanja. Na kraju dobivaš ocjenu i objašnjenja.</p>
    <button class="fcb primary" onclick="qzStart()">Započni kviz →</button>
  </div>\`;
}
function qzStart(){
  qzIdx=0;qzScore=0;qzAnswered=[];
  const el=document.getElementById('qz-inner')||document.getElementById('qz-wrap');
  qzShowQ(el);
}
function qzShowQ(el){
  if(qzIdx>=KVIZ_Q.length){qzEnd(el);return;}
  const q=KVIZ_Q[qzIdx];
  const pct=Math.round((qzIdx/KVIZ_Q.length)*100);
  el.innerHTML=\`
    <div class="qz-prog"><div class="qz-prog-fill" style="width:\${pct}%"></div></div>
    <div class="qz-num">Pitanje \${qzIdx+1} / \${KVIZ_Q.length}</div>
    <div class="qz-q">\${q.q}</div>
    <div class="qz-opts">\${q.o.map((o,i)=>\`<button class="qz-opt" onclick="qzAns(this,\${i})">\${o}</button>\`).join('')}</div>
    <div class="qz-expl" id="qz-expl" style="display:none"></div>
    <div style="text-align:right;margin-top:12px"><button class="fcb qz-next" id="qz-next" onclick="qzNext()" style="display:none">Sljedeće →</button></div>
  \`;
}
function qzAns(btn,i){
  if(document.querySelector('.qz-opt.correct,.qz-opt.wrong'))return;
  const opts=document.querySelectorAll('.qz-opt');
  opts.forEach(b=>b.disabled=true);
  const q=KVIZ_Q[qzIdx];
  const ok=(i===q.t);
  if(ok){btn.classList.add('correct');qzScore++;}
  else{btn.classList.add('wrong');opts[q.t].classList.add('correct');}
  if(!qzAnswered)qzAnswered=[];
  qzAnswered.push({q:q.q,ok,correct:q.o[q.t]});
  const expl=document.getElementById('qz-expl');
  expl.style.display='block';
  expl.innerHTML=\`<strong>\${ok?'✓ Točno!':'✗ Netočno.'}</strong> \${q.e}\`;
  document.getElementById('qz-next').style.display='inline-flex';
}
function qzNext(){
  qzIdx++;
  const el=document.getElementById('qz-inner')||document.getElementById('qz-wrap');
  qzShowQ(el);
}
function qzEnd(el){
  const pct=Math.round(qzScore/KVIZ_Q.length*100);
  let grade,msg,ico;
  if(pct>=90){grade='ODLIČAN';msg='Spreman/na si za maturu iz H12.';ico='🏆';}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno znanje. Provjeri pogreške u Pojmovniku.';ico='💪';}
  else if(pct>=60){grade='DOBAR';msg='Ponoviti: 5 pjevanja i romantičarski kontekst.';ico='📚';}
  else if(pct>=45){grade='DOVOLJAN';msg='Osnove su tu — trebaš više vježbe.';ico='🔁';}
  else{grade='NEDOVOLJAN';msg='Vrati se na Teoriju i ponovi korak po korak.';ico='🎯';}

  let wrongHtml='';
  if(qzAnswered&&qzAnswered.length){
    const wrong=qzAnswered.filter(a=>!a.ok);
    if(wrong.length>0){
      wrongHtml=\`<div style="margin-top:24px;text-align:left">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:12px">Promašena pitanja (\${wrong.length})</div>
        \${wrong.map(a=>\`<div class="qz-wrong-item">
          <div class="qz-wrong-q">\${a.q}</div>
          <div class="qz-wrong-a">Točan odgovor: <b>\${a.correct}</b></div>
        </div>\`).join('')}
      </div>\`;
    }
  }

  el.innerHTML=\`<div class="qz-result" style="text-align:center;padding:40px 24px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4)">
    <div style="font-size:48px;margin-bottom:8px">\${ico}</div>
    <div class="qz-score-big">\${pct}%</div>
    <div class="qz-grade">\${grade}</div>
    <div class="qz-msg">\${qzScore} / \${KVIZ_Q.length} točnih · \${msg}</div>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button class="fcb primary" onclick="qzStart()">🔁 Ponovo</button>
      <button class="fcb" onclick="sw(4)">📚 Pojmovnik</button>
      <button class="fcb" onclick="sw(7)">✅ Checkpoint</button>
    </div>
    \${wrongHtml}
  </div>\`;

  saveScoreHistory(qzScore,KVIZ_Q.length);
  markTab(6);
}

/* ═══════════════════════════════════
   CHECKPOINT
═══════════════════════════════════ */
let CP_STATE={done:{}};
try{const s=localStorage.getItem('mt.hrv.h14.cp');if(s)CP_STATE=JSON.parse(s);}catch(e){}

const CP_HINTS=['Tab 0','Tab 0','Tab 4','Tab 0','Tab 1','Tab 1','Tab 3','Tab 2','Tab 0','Tab 2'];
function cpRender(){
  const list=document.getElementById('cp-list');
  if(!list)return;
  list.innerHTML=CP_ITEMS.map((item,i)=>\`
    <div class="cp-item\${CP_STATE.done[i]?' done':''}" onclick="cpToggle(\${i})" style="display:flex;align-items:flex-start;gap:12px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:12px 16px;cursor:pointer;transition:all .15s">
      <div class="cp-box">\${CP_STATE.done[i]?'✓':''}</div>
      <div class="cp-txt" style="flex:1;font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.5">\${item}</div>
      <span class="cp-hint">\${CP_HINTS[i]||''}</span>
    </div>
  \`).join('');
  cpUpdateProgress();
}
function cpToggle(i){
  CP_STATE.done[i]=!CP_STATE.done[i];
  try{localStorage.setItem('mt.hrv.h14.cp',JSON.stringify(CP_STATE));}catch(e){}
  cpRender();
}
function cpUpdateProgress(){
  const done=Object.values(CP_STATE.done).filter(Boolean).length;
  const total=CP_ITEMS.length;
  const pct=Math.round(done/total*100);
  document.getElementById('cp-pct').textContent=\`\${done} / \${total}\`;
  document.getElementById('cp-bar').style.width=pct+'%';
  document.getElementById('sb-prog-bar').style.width=pct+'%';
  document.getElementById('sb-prog-pct').textContent=pct+'%';
  const fin=document.getElementById('cp-final');
  if(fin)fin.classList.toggle('show',done===total);
  // Update summary
  const sumBox=document.getElementById('cp-summary-box');
  const sumPct=document.getElementById('cp-sum-pct');
  const sumTxt=document.getElementById('cp-sum-txt');
  if(sumBox&&done>0){
    sumBox.style.display='flex';
    sumPct.textContent=pct+'%';
    let msg;
    if(pct===100)msg='<strong>Kompletan!</strong> Sve je savladano — spreman/na si za maturu.';
    else if(pct>=70)msg='<strong>Odlično!</strong> Neoznačene tvrdnje su tvoje slabe točke — fokusiraj se na njih.';
    else if(pct>=40)msg='<strong>Napredak!</strong> Nastavak: provjeri 5 pjevanja i Esej alat za neoznačene stavke.';
    else msg='Još je posla. Počni s Teorijom (Tab 0) i prođi sve sekcije.';
    sumTxt.innerHTML=msg;
  }
}
function cpReset(){
  CP_STATE={done:{}};
  try{localStorage.removeItem('mt.hrv.h14.cp');}catch(e){}
  cpRender();
}
cpRender();

/* ═══════════════════════════════════
   KVIZ INIT on tab 6
═══════════════════════════════════ */
// Already handled in sw()

/* ═══════════════════════════════════
   MARK TAB (completion badge)
═══════════════════════════════════ */
let TAB_DONE={};
try{TAB_DONE=JSON.parse(localStorage.getItem('mt.hrv.h14.tab_done')||'{}')}catch(e){}

function markTab(n){
  TAB_DONE[n]=true;
  try{localStorage.setItem('mt.hrv.h14.tab_done',JSON.stringify(TAB_DONE))}catch(e){}
  const el=document.getElementById('td'+n);
  if(el)el.textContent='✓';
}
function restoreTabDone(){
  Object.keys(TAB_DONE).forEach(n=>{
    const el=document.getElementById('td'+n);
    if(el&&TAB_DONE[n])el.textContent='✓';
  });
}
restoreTabDone();

// Mark tab on dwell (8s)
let tabTimer=null;
const origSw=sw;
window.sw=function(n){
  origSw(n);
  clearTimeout(tabTimer);
  tabTimer=setTimeout(()=>{
    if(n!==5)markTab(n); // don't auto-mark PRO locked
  },8000);
  // Show relevant tip
  showTip(n);
};

/* ═══════════════════════════════════
   TIP BAR
═══════════════════════════════════ */
const TIPS=[
  '💡 <strong>Tab 0 tip:</strong> Povezuj djelo s preporodom — Smail-aga = tiranija, Crnogorci = sloboda, Novica = moralno preobraćenje.',
  '💡 <strong>Tab 1 tip:</strong> Klikni na pjevanje za detalje radnje, likova i esejskih signala.',
  '💡 <strong>Tab 2 tip:</strong> Klikni na tezu da je kopiraš u clipboard — iskoristi za školski esej.',
  '💡 <strong>Tab 3 tip:</strong> ⭐ označi citate koje ćeš učiti — spremaju se u lokalni profil.',
  '💡 <strong>Tab 4 tip:</strong> Prebaci na Flashcard mode — ← → za navigaciju, Space za okret.',
  '💡 <strong>Tab 5 tip:</strong> Počni s Lagano (4 para) matchinga, pa Srednje (6), pa Teško (8).',
  '💡 <strong>Tab 6 tip:</strong> Nakon kviza provjeri objašnjenja pogrešaka — više uči kroz njih.',
  '💡 <strong>Tab 7 tip:</strong> Označi samo tvrdnje koje STVARNO znaš — ne varaj sebe.'
];
let tipShown={};
function showTip(n){
  if(tipShown[n])return;
  const bar=document.getElementById('tip-bar');
  const txt=document.getElementById('tip-bar-txt');
  if(!bar||!txt)return;
  txt.innerHTML=TIPS[n]||TIPS[0];
  bar.classList.add('show');
  tipShown[n]=true;
  clearTimeout(bar._timer);
  bar._timer=setTimeout(()=>bar.classList.remove('show'),5000);
}
// Show tip for initial tab
setTimeout(()=>showTip(0),3000);

/* ═══════════════════════════════════
   FROM BANNER (?from= URL param)
═══════════════════════════════════ */
(function(){
  const params=new URLSearchParams(window.location.search);
  const from=params.get('from');
  if(from){
    const names={H11:'H11 · Stari hrv. pisci',H13:'H13 · Barok · Gundulić'};
    const el=document.getElementById('from-banner');
    const txt=document.getElementById('from-txt');
    if(el&&txt){
      txt.textContent='📎 Nastaviš učenje iz '+(names[from]||from)+' → H14 · Preporod · Mažuranić';
      el.classList.add('show');
      // Move banner to top of content
      const cw=document.querySelector('.content-wrap');
      if(cw)cw.insertBefore(el,cw.firstChild);
      setTimeout(()=>el.classList.remove('show'),8000);
    }
  }
})();

/* ═══════════════════════════════════
   SCORE HISTORY (kviz)
═══════════════════════════════════ */
function loadScoreHistory(){
  try{
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h14.kviz_hist')||'[]');
    const cont=document.getElementById('score-hist');
    const rows=document.getElementById('score-hist-rows');
    if(!cont||!rows||hist.length===0)return;
    cont.style.display='block';
    rows.innerHTML=hist.slice(-5).reverse().map(h=>{
      const pct=Math.round(h.score/h.total*100);
      const d=new Date(h.date);
      const ds=d.toLocaleDateString('hr',{day:'2-digit',month:'2-digit'});
      return \`<div class="score-hist-row">
        <span class="score-hist-date">\${ds}</span>
        <div class="score-hist-bar"><div class="score-hist-fill" style="width:\${pct}%"></div></div>
        <span class="score-hist-val">\${h.score}/\${h.total}</span>
      </div>\`;
    }).join('');
  }catch(e){}
}

function saveScoreHistory(score,total){
  try{
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h14.kviz_hist')||'[]');
    hist.push({score,total,date:new Date().toISOString()});
    localStorage.setItem('mt.hrv.h14.kviz_hist',JSON.stringify(hist.slice(-10)));
    loadScoreHistory();
  }catch(e){}
}

// Upgrade qzEnd to save history
const origQzEnd=qzEnd;
window.qzEnd=function(el){
  origQzEnd(el);
  saveScoreHistory(qzScore,KVIZ_Q.length);
  markTab(6);
};

// Load history on init
loadScoreHistory();

/* ═══════════════════════════════════
   MATCH GAME — Funkcionalan (3 razine)
═══════════════════════════════════ */
const MATCH_DATA={
  // EASY — Osnove: tko je tko u djelu (Likovi ↔ Uloge)
  easy:[
    {a:'Smail-aga Čengić',b:'Bosansko-hercegovački muselim (tiranin)'},
    {a:'Novica',b:'Protagonist — od krvnika do osvetnika'},
    {a:'Durak',b:'Agin savjetnik, Novicin otac'},
    {a:'Pustinjak',b:'Glas refleksije u V. Kobi'},
  ],
  // MEDIUM — Stilska sredstva + primjeri iz djela
  medium:[
    {a:'Slavenska antiteza',b:'„Je li hajduk, il\\u2019 uhoda turska? Nit je hajduk..."'},
    {a:'Epitet',b:'„mrki vuk" (aga), „krvnik Crne Gore" (Novica)'},
    {a:'Personifikacija prirode',b:'Oluja u Haraču — priroda kao moralni sudac'},
    {a:'Metafora',b:'„S planinskoga gladna miša" — Novica kao glad za osvetom'},
    {a:'Biblijska aluzija',b:'„Sve je grijeh, sve su djela prika; bez kajanja nema oprosnika"'},
    {a:'Kletva / opomena',b:'„Boj se onoga tko je viko bez golema mrijet jada!"'},
  ],
  // HARD — Preporod + romantizam + kontekst (napredno)
  hard:[
    {a:'Ljudevit Gaj',b:'Vođa preporoda — pokreće Danicu 1835.'},
    {a:'Danica ilirska',b:'Glavni časopis preporoda (od 1836.)'},
    {a:'Almanah Iskra',b:'Mjesto objave Smrti Smail-age (Zadar, 1846.)'},
    {a:'Hoćimska bitka (1621.)',b:'Inspiracija Gundulićevu Osmanu — Mažuranić ga dopunjuje 1842.'},
    {a:'Stvarna pogibija age',b:'Listopad 1840., Mljetičko polje (Mažuranić mijenja u Gacko)'},
    {a:'Ban Hrvatske 1873.-1880.',b:'Mažuranićeva politička karijera — „pučki ban"'},
    {a:'Njemačko-ilirski slovar',b:'Mažuranićev rječnik iz 1842. — 40.000 natuknica'},
    {a:'Byron, Mickiewicz, Puškin',b:'Evropski romantizam — paralelni nacionalni spjevovi'},
  ],
};

let mgLevel='easy',mgSelLeft=null,mgSelRight=null,mgMatched=0,mgPairs=[];

function mgInit(level){
  mgLevel=level||'easy';
  const pairs=MATCH_DATA[mgLevel];
  mgMatched=0;mgSelLeft=null;mgSelRight=null;
  mgPairs=pairs.map((p,i)=>({...p,id:i}));
  
  // Shuffle BOTH sides independently for harder challenge
  const leftItems=[...mgPairs].sort(()=>Math.random()-.5);
  const rightItems=[...mgPairs].sort(()=>Math.random()-.5);
  
  const themes={
    easy:'🎭 Likovi Smail-age',
    medium:'✒ Stilska sredstva + citati',
    hard:'🇭🇷 Preporod + kontekst (napredno)'
  };
  const labels={easy:'Lagano',medium:'Srednje',hard:'Teško'};
  const activeClass=(lvl)=>mgLevel===lvl?'primary':'';
  
  const el=document.getElementById('mg-dynamic');
  if(!el)return;
  el.innerHTML=\`
    <div class="mg-status" id="mg-status">
      <strong>\${themes[mgLevel]}</strong> · \${mgPairs.length} parova · \${labels[mgLevel]}
    </div>
    <div class="mg-grid">
      <div class="mg-col" id="mg-left">
        \${leftItems.map(p=>\`<div class="mg-item" data-id="\${p.id}" data-side="left" onclick="mgClick(this)">\${p.a}</div>\`).join('')}
      </div>
      <div class="mg-col" id="mg-right">
        \${rightItems.map(p=>\`<div class="mg-item" data-id="\${p.id}" data-side="right" onclick="mgClick(this)">\${p.b}</div>\`).join('')}
      </div>
    </div>
    <div style="text-align:center;margin-top:14px">
      <button class="fcb \${activeClass('easy')}" onclick="mgInit('easy')" style="margin:3px" title="Likovi Dubravke">🎭 Lagano (4)</button>
      <button class="fcb \${activeClass('medium')}" onclick="mgInit('medium')" style="margin:3px" title="Stilska sredstva + primjeri">✒ Srednje (6)</button>
      <button class="fcb \${activeClass('hard')}" onclick="mgInit('hard')" style="margin:3px" title="Kontekst i uzori">🏛 Teško (8)</button>
    </div>
    <div style="text-align:center;margin-top:8px;font-family:var(--mono);font-size:10px;color:var(--t3)">
      Svaka razina testira drugu vještinu — ne samo više parova
    </div>
  \`;
}

function mgClick(el){
  if(el.classList.contains('matched')||el.classList.contains('wrong'))return;
  const side=el.dataset.side;
  
  if(side==='left'){
    document.querySelectorAll('#mg-left .mg-item').forEach(i=>i.classList.remove('selected'));
    el.classList.add('selected');
    mgSelLeft=el;
  } else {
    document.querySelectorAll('#mg-right .mg-item').forEach(i=>i.classList.remove('selected'));
    el.classList.add('selected');
    mgSelRight=el;
  }
  
  if(mgSelLeft&&mgSelRight){
    const match=mgSelLeft.dataset.id===mgSelRight.dataset.id;
    if(match){
      mgSelLeft.classList.add('matched');mgSelLeft.classList.remove('selected');
      mgSelRight.classList.add('matched');mgSelRight.classList.remove('selected');
      mgMatched++;
      if(mgMatched===mgPairs.length){
        document.getElementById('mg-status').innerHTML=\`<span style="color:var(--green)">✓ Sve spareno! Odlično!</span>\`;
        markTab(5);
      }
    } else {
      mgSelLeft.classList.add('wrong');mgSelRight.classList.add('wrong');
      setTimeout(()=>{
        mgSelLeft.classList.remove('wrong','selected');
        mgSelRight.classList.remove('wrong','selected');
        mgSelLeft=null;mgSelRight=null;
      },600);
      return;
    }
    mgSelLeft=null;mgSelRight=null;
  }
}

/* ═══════════════════════════════════
   FLASHCARDS — funkcionalan demo
═══════════════════════════════════ */
const FC_DATA=[
  {t:'Slavenska antiteza',d:'Narodno-epska tehnika: pitanje-negacija-odgovor. Primjer: „Je li hajduk, il\\u2019 uhoda turska? Nit je hajduk..."',kat:'stil'},
  {t:'Spjev',d:'Kraće narativno djelo u stihu, objedinjuje epsku, dramsku i lirsku komponentu. Smail-aga = 1134 stiha.',kat:'spjev'},
  {t:'Agovanje',d:'I. pjevanje (~180 stihova). Smail-aga u Stolcu muči Crnogorce, ubija Duraka. Ekspozicija djela.',kat:'spjev'},
  {t:'Noćnik',d:'II. pjevanje (~160 stihova). Novičino noćno putovanje iz Stolca na Cetinje. Prelazak, preobraćenje.',kat:'spjev'},
  {t:'Harač',d:'IV. pjevanje — najduže (623 stiha). Aga na Gackom polju; oluja; bitka; agina smrt. Kulminacija.',kat:'spjev'},
  {t:'Kob',d:'V. pjevanje — najkraće (34 stiha). Pustinjak na Lovćenu. Filozofski epilog o prolaznosti sile.',kat:'spjev'},
  {t:'Smail-aga Čengić',d:'Središnji antagonist. Bosansko-hercegovački muselim. Demonski lik — ohol, krvnik, tašt.',kat:'likovi'},
  {t:'Novica',d:'Glavni protagonist. Durakov sin, agin kavaz. Jedini individualizirani lik — prelazi od krvnika do osvetnika.',kat:'likovi'},
  {t:'Durak',d:'Stariji Turčin, agin savjetnik, Novicin otac. U stvarnosti zvao se Milutin. Aga ga ubije jer ga savjetovao.',kat:'likovi'},
  {t:'Ljudevit Gaj',d:'Vođa preporoda. 1835. pokreće Danicu. Standardizira gajicu i štokavštinu kao hrv. književni jezik.',kat:'preporod'},
  {t:'Danica',d:'Gajev časopis — od 1835. „Danica horvatska, slavonska i dalmatinska"; od 1836. „Danica ilirska". Glavno glasilo preporoda.',kat:'preporod'},
  {t:'Iskra',d:'Almanah u kojem je 1846. objavljena Smrt Smail-age Čengića. Izlazio u Zadru, urednik Dimitrije Demeter.',kat:'preporod'},
  {t:'Romantizam',d:'Europski pokret kraj 18. – sredina 19. st. Obilježja: emocija, nacionalna tema, priroda, patos. Smail-aga = hrv. romantizam.',kat:'romantizam'},
  {t:'Priroda kao sudionik',d:'Romantičarski motiv — priroda moralno aktivna. Oluja u IV. Haraču svrstava se protiv Smail-age.',kat:'romantizam'},
  {t:'Osmerac (4+4)',d:'Stih od 8 slogova s cezurom iza 4. U Smail-agi za lirske i refleksivne dionice. Narodno-epska tradicija.',kat:'stih'},
  {t:'Deseterac (4+6)',d:'Stih od 10 slogova s cezurom iza 4. U Smail-agi za narativne i svečane dijelove. Junački stih narodne epike.',kat:'stih'},
  {t:'Harač (pojam)',d:'Godišnji porez koji su ne-muslimani plaćali turskoj vlasti. Simbol eksploatacije. IV. pjevanje nosi ovo ime.',kat:'jezik'},
  {t:'Kavaz',d:'Turski naziv za agina stražara/čuvara. Novica je bio kavaz prije pokrštenja. Označava odanost tiraninu.',kat:'jezik'},
  {t:'Turcizmi',d:'Riječi turskoga podrijetla: aga, kavaz, muselim, harač, delija, kapija, toke, fišek, kulaš, sofra, jatagan.',kat:'jezik'},
  {t:'„Boj se onoga..."',d:'Najpoznatiji citat djela. Durakova opomena Smail-agi u I. Agovanju. Tiranin se boji onoga tko nema što izgubiti.',kat:'stil'},
];

let fcIdx=0,fcFlipped=false;

function fcInit(){
  fcIdx=0;fcFlipped=false;
  fcRender();
}

function fcRender(){
  const card=document.getElementById('fc-card-dyn');
  const counter=document.getElementById('fc-counter-dyn');
  if(!card)return;
  const item=FC_DATA[fcIdx];
  const catCls={stih:'p-pa',ep:'p-br',aleg:'p-r',stil:'p-t',hum:'p-go'};
  card.querySelector('.fc-term').textContent=item.t;
  card.querySelector('.fc-def').textContent=item.d;
  card.querySelector('.fc-cat').textContent=item.kat+' · klikni za definiciju';
  card.querySelector('.fc-back .fc-cat').textContent=item.kat;
  card.classList.remove('flipped');
  fcFlipped=false;
  if(counter)counter.textContent=\`\${fcIdx+1} / \${FC_DATA.length}\`;
  document.getElementById('fc-prev-dyn').disabled=(fcIdx===0);
  document.getElementById('fc-next-dyn').disabled=(fcIdx===FC_DATA.length-1);
}

function fcFlip(){
  const card=document.getElementById('fc-card-dyn');
  if(!card)return;
  fcFlipped=!fcFlipped;
  card.classList.toggle('flipped',fcFlipped);
}

function fcNav(dir){
  fcIdx=Math.max(0,Math.min(FC_DATA.length-1,fcIdx+dir));
  fcRender();
}

/* ═══════════════════════════════════
   INTERSECTION OBSERVER (IntersectionObserver)
═══════════════════════════════════ */
/* ═══════════════════════════════════
   READ PROGRESS BAR + BTT
═══════════════════════════════════ */
(function(){
  const bar=document.getElementById('rpbar');
  const btt=document.getElementById('btt');
  function update(){
    const el=document.documentElement;
    const scrolled=el.scrollTop||document.body.scrollTop;
    const total=(el.scrollHeight||document.body.scrollHeight)-el.clientHeight;
    const pct=total>0?Math.min(100,Math.round(scrolled/total*100)):0;
    if(bar)bar.style.width=pct+'%';
    if(btt)btt.classList.toggle('show',scrolled>300);
  }
  document.addEventListener('scroll',update,{passive:true});
  update();
})();

/* ═══════════════════════════════════
   SELFCHECK (Samoprocjena Tab 0)
═══════════════════════════════════ */
const SC_QS = [
  {q: 'Znam godinu nastanka i mjesto objave Smrti Smail-age Čengića (1846., almanah Iskra, Zadar).', k: 'kontekst'},
  {q: 'Mogu nabrojati svih 5 pjevanja (Agovanje, Noćnik, Četa, Harač, Kob) i znam što se u svakom događa.', k: 'struktura'},
  {q: 'Razumijem razliku između epa, balade i spjeva — znam zašto je Smrt Smail-age spjev.', k: 'žanr'},
  {q: 'Mogu opisati glavne likove (Smail-aga, Novica, Durak, Crnogorci, svećenik, pustinjak) i njihove funkcije.', k: 'likovi'},
  {q: 'Znam povijesni i književni kontekst: hrv. narodni preporod, Ilirski pokret, Ljudevit Gaj, uloga Mažuranića.', k: 'kontekst'}
];

function scRender() {
  const el = document.getElementById('sc-qs');
  if (!el) return;
  el.innerHTML = SC_QS.map((q,i) => \`
    <div style="display:flex;align-items:flex-start;gap:10px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:10px 14px">
      <input type="checkbox" id="sc\${i}" style="margin-top:3px;accent-color:var(--bronze);width:16px;height:16px;flex-shrink:0">
      <label for="sc\${i}" style="font-family:var(--serif);font-size:13.5px;color:var(--t2);cursor:pointer;line-height:1.5">\${q.q}</label>
    </div>
  \`).join('');
}

function scCheck() {
  const checked = SC_QS.map((_,i) => document.getElementById('sc'+i)?.checked).filter(Boolean).length;
  const pct = Math.round(checked / SC_QS.length * 100);
  const el = document.getElementById('sc-result');
  if (!el) return;
  let msg, color;
  if (pct >= 100) { msg = '🏆 Odlično! Spreman/na si za sve što NCVVO može pitati iz H12.'; color = 'var(--green)'; }
  else if (pct >= 60) { msg = '📖 Dobro! Provjeri neoznačene stavke — one su tvoje slabe točke.'; color = 'var(--gold)'; }
  else { msg = '📚 Još je posla. Počni s Teorijom i 6 pjevanjima — te sekcije su najvažnije.'; color = 'var(--red)'; }
  el.style.display = 'block';
  el.innerHTML = \`<div class="box-int" style="border-color:\${color}20">
    <div style="font-family:var(--display);font-size:18px;color:\${color};margin-bottom:8px">\${checked} / \${SC_QS.length} · \${pct}%</div>
    <div style="font-family:var(--serif);font-size:14px;color:var(--t2)">\${msg}</div>
  </div>\`;
}

function scReset() {
  SC_QS.forEach((_,i) => { const el=document.getElementById('sc'+i); if(el) el.checked=false; });
  const r = document.getElementById('sc-result');
  if (r) r.style.display = 'none';
}

scRender();

/* ═══════════════════════════════════
   CHECKLIST (Esej alat AT7)
═══════════════════════════════════ */
const CL_ITEMS = [
  'Znam godinu nastanka djela (1846.) i mjesto objave (almanah <em>Iskra</em>, Zadar).',
  'Mogu nabrojati svih 5 pjevanja po redu (Agovanje, Noćnik, Četa, Harač, Kob).',
  'Znam najduže (Harač · 623) i najkraće (Kob · 34) pjevanje — i razumijem tu asimetriju.',
  'Razumijem razliku ep / spjev / balada — i zašto je Smail-aga spjev.',
  'Mogu opisati glavne likove: Smail-aga, Novica, Durak, svećenik, pustinjak, Crnogorci, Bauk.',
  'Znam stihove djela (osmerac 4+4 i deseterac 4+6) i funkciju svakog.',
  'Mogu prepoznati stilska sredstva: slavenska antiteza, epitet, kontrast, hiperbola, personifikacija, biblijske aluzije.',
  'Znam ključni citat „Boj se onoga tko je viko bez golema mrijet jada!" i mogu ga interpretirati.',
  'Razumijem 3 razine čitanja: konkretnu, nacionalnu, univerzalnu.',
  'Znam preporodni kontekst: Ljudevit Gaj, Danica (1835.), štokavština, Mažuranić kao ban (1873.–1880.).',
];
let clDone = {};
try { clDone = JSON.parse(localStorage.getItem('mt.hrv.h14.cl') || '{}'); } catch(e) {}

function clRender() {
  const el = document.getElementById('cl-list');
  if (!el) return;
  el.innerHTML = CL_ITEMS.map((item, i) => \`
    <div class="cp-item\${clDone[i] ? ' done' : ''}" onclick="clToggle(\${i})" style="cursor:pointer">
      <div class="cp-cb">\${clDone[i] ? '✓' : ''}</div>
      <div class="cp-txt">\${item}</div>
    </div>
  \`).join('');
}
function clToggle(i) {
  clDone[i] = !clDone[i];
  try { localStorage.setItem('mt.hrv.h14.cl', JSON.stringify(clDone)); } catch(e) {}
  clRender();
}
clRender();

/* ═══════════════════════════════════
   CHECKPOINT WRITER
═══════════════════════════════════ */
function cpWriterUpdate(){
  const ta=document.getElementById('cp-writer');
  const fb=document.getElementById('cp-writer-fb');
  if(!ta)return;
  const txt=ta.value;
  const words=txt.trim()?txt.trim().split(/\\s+/).length:0;
  try{localStorage.setItem('mt.hrv.h14.cp_writer',txt);}catch(e){}
  // Count literary terms
  const tl=txt.toLowerCase();
  const terms=['spjev','pjevanj','osmerac','deseterac','stih','agovanje','noćnik','četa','harač','kob','smail','novica','durak','crnogor','ilir','preporod','romantizam','mažuranić','1846','gaj','danica','slaven','antitez','epitet','metafor','kontrast','personifikac','hiperbol','kletv','biblij','turcizm','sloboda','tiranij','osveta'];
  const found=[];
  if(/spjev|pjevanj|agovanje|noćnik|četa|harač|kob/.test(tl))found.push('✅ Žanr/struktura');
  if(/osmerac|deseterac|stih|metrik/.test(tl))found.push('✅ Stih/forma');
  if(/smail|novica|durak|crnogor|pustinjak|svećenik|bauk/.test(tl))found.push('✅ Lik');
  if(/preporod|ilir|gaj|danica|1835|1846|romantizam|mažuranić/.test(tl))found.push('✅ Kontekst');
  if(/slaven|antitez|epitet|metafor|personifikac|hiperbol|kletv|biblij/.test(tl))found.push('✅ Stilsko sredstvo');
  if(/sloboda|tiranij|osveta|pravda|prolazn/.test(tl))found.push('✅ Tema/ideja');
  // Update stats
  const ww=document.getElementById('cpw-words');if(ww)ww.querySelector('.wc-stat-num').textContent=words;
  const wt=document.getElementById('cpw-terms');if(wt)wt.querySelector('.wc-stat-num').textContent=found.length;
  // Progress bar
  const pct=Math.min(100,Math.round(words/20*100));
  const bar=document.getElementById('cpw-bar');const prog=document.getElementById('cpw-prog');
  const lbl=document.getElementById('cpw-lbl');
  if(bar)bar.style.width=pct+'%';
  if(prog)prog.classList.toggle('pass',words>=20);
  if(lbl)lbl.textContent='CILJ 20 · '+words+' / 20'+(words>=20?' ✓':'');
  if(!fb||words===0){if(fb)fb.innerHTML='';return;}
  const quality=words>=20?(words>=40?'<span style="color:var(--green)">Odlična duljina</span>':'<span style="color:var(--gold)">Dobra duljina</span>'):'<span style="color:var(--red)">Previše kratko</span>';
  fb.innerHTML=\`<div class="box-int" style="padding:10px 14px">
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:6px">\${found.map(f=>\`<span style="font-family:var(--mono);font-size:10px;color:var(--green)">\${f}</span>\`).join('')||'<span style="font-family:var(--mono);font-size:10px;color:var(--t3)">Nema prepoznatih pojmova</span>'}</div>
    <div style="font-family:var(--mono);font-size:10px">\${quality} · \${found.length}/6 književnih pojmova</div>
  </div>\`;
}
(function(){
  const ta=document.getElementById('cp-writer');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h14.cp_writer');if(sv){ta.value=sv;cpWriterUpdate();}}catch(e){}
})();

/* ═══════════════════════════════════
   CITATNIK v2 (H11 featured-quote pattern)
═══════════════════════════════════ */
const CIT_DATA2 = [
  // === I. AGOVANJE (8 citata) ===
  {cat:'agovanje',napamet:true,
   text:'Boj se onoga, tko je viko bez golema mrijet jada!',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · NAJPOZNATIJI CITAT · Durakova opomena Smail-agi'},
  {cat:'agovanje',napamet:true,
   text:'Tko je mlađi, rado gleda na lipovu krstu muke; a tko starij\\u2019, muke iste sam na sebi s vlaške ruke već unaprijed od strâ ćuti.',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · Opis turskog logora · Mladi uživaju u mučenju, stari slute osvetu'},
  {cat:'agovanje',
   text:'Štono sam vî Turčin pripravio... Kome britku palu namjenjuje.',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · Karakterizacija aginog sadizma · „Britka pala" = oštra sablja'},
  {cat:'agovanje',
   text:'Dobar junak — da je čovjek taki.',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · Narator o Smail-agi · Ironijska napomena — junak po obliku, ali nečovjek po biti'},
  {cat:'agovanje',
   text:'Aga je oličenje zla.',
   meta:'— Analiza lika · Smail-aga kao demonski lik — ohol silnik, zlotvor, krvnik, kukavica, tašt'},
  {cat:'agovanje',
   text:'Ne doživljava agu zadovoljštinu jer junaci nisu poklekli pred mukama.',
   meta:'— Interpretacija Agovanja · Bijes age proizlazi iz Crnogorske hrabrosti koja ga deklasira'},
  {cat:'agovanje',
   text:'Aga naređuje da se Durak pogubi usred bijesa zbog savjeta da odustane od mučenja.',
   meta:'— Ključni moment Agovanja · Pokretač Novičine osvete · Prikaz aga kao tiranina koji ne podnosi kritiku ni od vlastitih'},
  {cat:'agovanje',
   text:'Smail-aga se pojavljuje samo u dva pjevanja (Agovanje, Harač), ali se njegova prisutnost osjeća u cijelom djelu.',
   meta:'— Tehnika karakterizacije · Sve se događa zbog njega i oko njega'},

  // === II. NOĆNIK (7 citata) ===
  {cat:'nocnik',napamet:true,
   text:'Je li hajduk, il\\u2019 uhoda turska, što uhodi sviloruna krda, il\\u2019 volova stada vitoroga? Nit je hajduk, nit uhoda turska, već Novica, Čengića kavazu...',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · Klasična slavenska antiteza · Tehnika pitanja–negacije–odgovora'},
  {cat:'nocnik',napamet:true,
   text:'Ter se maša kršnijeh Ćeklića... A Novica pade na Cetinje...',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · „Pade" kao simbol pokore i preobraćenja'},
  {cat:'nocnik',napamet:true,
   text:'S planinskoga gladna miša...',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · Metaforički opis Novice · Glad za osvetom kao životinjski nagon'},
  {cat:'nocnik',
   text:'Bijesan Turčin, krvnik Crne Gore, koga znade i staro i mlado.',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · Epitet Novice prije preobraćenja · „Krvnik Crne Gore"'},
  {cat:'nocnik',
   text:'Novica „krvnik Crne Gore", agin sluga, ne okreće glavu od mučenja na početku spjeva.',
   meta:'— Analiza Novice · Moralno stanje prije osobnog udara'},
  {cat:'nocnik',
   text:'Tek kada je osobno pogođen očevim ubojstvom, traži osvetu.',
   meta:'— Psihološki okidač Novičine transformacije · Osobna bol pokreće moralnu odluku'},
  {cat:'nocnik',
   text:'I kada prihvaća kršćanstvo i pridružuje se četi, on ne može biti dio kolektiva jer njime upravljaju individualni osjećaji.',
   meta:'— Interpretacija Novice · Jedini individualizirani lik u djelu · Romantičarski individualist'},

  // === III. ČETA (5 citata) ===
  {cat:'ceta',napamet:true,
   text:'Sve je grijeh, sve su djela prika; Bez kajanja nema oprosnika.',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, III. Četa · Svećenikov govor · Biblijska moralna formula'},
  {cat:'ceta',
   text:'Svećenikov govor u III. Četi predstavlja ideološki centar djela — pravedan rat kao sveti čin.',
   meta:'— Interpretacija Čete · Religiozna legitimacija osvete'},
  {cat:'ceta',
   text:'Brđani su prikazani kao junaci koji umiru bez jauka, a junaci iz Čete i Harača kao kolektiv ljudi jednakih u mukama, ali i junaštvu.',
   meta:'— Karakterizacija Crnogoraca · Kolektivni junak romantizma'},
  {cat:'ceta',
   text:'Mažuranić je Crnogorce prikazao kao kolektiv, a među Turcima je izdvojio nekoliko pojedinaca.',
   meta:'— Tehnika karakterizacije · Narativni balans diferenciranjem likova'},
  {cat:'ceta',
   text:'U djelu je Mažuranić iznio ne samo preporodne ideje o slozi i zajedništvu nego i svoje misli o životu i ljudima.',
   meta:'— Interpretacija · Preporodni sloj djela · Zajedništvo kao ideal'},

  // === IV. HARAČ (7 citata) ===
  {cat:'harac',napamet:true,
   text:'A u zemlji hercegovoj... Tu nek plijen vranom vranu stoji.',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, IV. Harač · Baukova rugalica mrtvom agi · Tiranin = plijen gavrana'},
  {cat:'harac',
   text:'Harač (agin harač na Gackom polju; stiže oluja, dolazi do bitke, mnoštvo poginulih).',
   meta:'— Kompozicija Harača · 6 faza: priprema → zlostavljanja → oluja → napad → agina smrt → rasap'},
  {cat:'harac',
   text:'Harač je najdulje pjevanje od 623 stiha — vrhunac djela.',
   meta:'— Formalna činjenica · Pola djela otpada na Harač'},
  {cat:'harac',
   text:'Oluja u IV. Haraču — priroda kao moralni sudac, tipični romantičarski motiv.',
   meta:'— Interpretacija · Romantičarska personifikacija prirode kao aktivne moralne sile'},
  {cat:'harac',
   text:'Hladan je, svirep i grub, ne samo prema Crnogorcima nego i prema Turcima koji imalo posumnjaju u ispravnost njegovih postupaka.',
   meta:'— Karakterizacija Smail-age · Jedinstveni psihopatski profil lika'},
  {cat:'harac',
   text:'Agine sluge Omer, Jašar, Mujo spremni su svakoga časa napustiti agu, Safer je ulizica i nasilnik, Bauk mu pjeva rugalicu i jedan je od rijetkih koji uspijevaju izvući glavu iz borbe.',
   meta:'— Diferencijacija aginih slugu · „Loše sluge lošeg gospodara"'},
  {cat:'harac',
   text:'Bauk preživi bitku možda zato da bi opjevao pad svoga gospodara.',
   meta:'— Narativna funkcija Bauka · Ironični svjedok kraja tiranije'},

  // === V. KOB (3 citata) ===
  {cat:'kob',napamet:true,
   text:'U posljednjem pjevanju Ivan Mažuranić daje naslutiti pad turskog carstva uz pomoć alegorijske slike.',
   meta:'— Analiza V. Kobi · Alegorija pada velikog carstva utemeljenog na pljački, nepravdi i zločinu'},
  {cat:'kob',
   text:'Kob je najkraće pjevanje s 34 stiha — ali ideološki najteže.',
   meta:'— Strukturna paradoks · Kratkoća pojačava težinu filozofske poante'},
  {cat:'kob',
   text:'Pustinjak na Lovćenu refleksira o prolaznosti sile — glavna poruka spjeva.',
   meta:'— Interpretacija Kobi · Pustinjak kao Mažuranićev autorski glas · Lovćen = crnogorska sveta planina'},

  // === LIKOVI — sintetske karakterizacije (6) ===
  {cat:'likovi',
   text:'Smail-aga, Novica, Durak, Hasan, Mujo, Mer, Jašar, Bank, Saruk, svećenik — glavni likovi spjeva.',
   meta:'— Popis likova · Novica je jedini individualizirani protagonist'},
  {cat:'likovi',
   text:'Smail-aga je središnji lik spjeva, pojavljuje se u samo dva pjevanja (Agovanje, Harač).',
   meta:'— Ključna tehnika — aktivna apsentnost · Njegova prisutnost se osjeća cijelo vrijeme'},
  {cat:'likovi',
   text:'Novica: od krvnika Crne Gore do krsnog osvetnika — potpuna moralna transformacija.',
   meta:'— Glavna psihološka linija djela · Individualna priča kroz kolektivnu epopeju'},
  {cat:'likovi',
   text:'Durak je bio dugogodišnji Agin savjetnik, pa mu je i sada savjetovao da prestane s ubojstvima Crnogoraca.',
   meta:'— Uloga Duraka · Glas umjerenosti koji tiranin ne podnosi · U stvarnosti se zvao Milutin'},
  {cat:'likovi',
   text:'Crnogorci kao kolektiv simboliziraju sve narode koji se bore protiv tiranije.',
   meta:'— Alegorijska dimenzija · Kolektivni romantičarski junak'},
  {cat:'likovi',
   text:'Svećenik u Četi predstavlja moralnu autoritetnu figuru — blagoslov i duhovnu pripremu pravedne bitke.',
   meta:'— Uloga svećenika · Religiozno opravdanje osvete u preporodnom kontekstu'},

  // === JEZIK / STIH (4 citata) ===
  {cat:'jezik',
   text:'Smrt Smail-age Čengića je ep pisan štokavskim narječjem ijekavicom.',
   meta:'— Jezični okvir djela · Moderna standardna hrv. štokavska osnova'},
  {cat:'jezik',
   text:'Mažuranić često rabi arhaične izraze (tudijer, jerbo...) te turcizme (kidisati, delija, kapija, toke, fišek, kulaš, sofra, jatagan).',
   meta:'— Jezični slojevi · Turcizmi za autentičnost, arhaizmi za epski ton'},
  {cat:'jezik',
   text:'Izvorni Mažuranićev tekst pisan je prema tadašnjem pravopisu. Dosljedno je pisao glasovnu skupinu „er" umjesto vokalnoga r (kerv, kerst, serce).',
   meta:'— Predgajevska grafija · Mažuranić piše u preporodnoj tranziciji između starih i novih pravopisnih rješenja'},
  {cat:'jezik',
   text:'Djelo je napisano štokavskim osmercem i desetercem, što je bilo uobičajeno za tadašnje epove.',
   meta:'— Metrički okvir · Osmerac (4+4) = lirski/refleksivni, Deseterac (4+6) = narativni/svečani'},
];

let cit2Active = 'all';

function renderCit2() {
  const el = document.getElementById('cit-grid2');
  if (!el) return;
  const show = cit2Active === 'all' ? CIT_DATA2 : CIT_DATA2.filter(c => c.cat === cit2Active);
  el.innerHTML = show.map((c,i) => buildCitHTML(c,i)).join('');
}

function citFilter2(cat, btn) {
  document.querySelectorAll('#cit-filter-row .cit-fbt').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  cit2Active = cat;
  // Handle 'stars' filter — show only starred items
  if(cat === 'stars'){
    try{
      const stars = JSON.parse(localStorage.getItem('mt.hrv.h14.cit_stars')||'[]');
      const el = document.getElementById('cit-grid2');
      if(!el) return;
      const show = CIT_DATA2.filter((c,i)=>stars.includes(i));
      if(show.length===0){
        el.innerHTML = '<div class="box-int" style="margin-top:12px"><div class="box-int-txt">Još nemaš označenih citata. Klikni ⭐ na citatu da ga dodaš u favorite.</div></div>';
        return;
      }
      el.innerHTML = show.map((c,i)=>buildCitHTML(c,i)).join('');
      return;
    }catch(e){}
  }
  renderCit2();
}

function buildCitHTML(c, i){
  const safe = (s)=>s.replace(/\\\\/g,'\\\\\\\\').replace(/'/g,"\\\\'");
  return \`<div class="featured-quote" data-cit-cat="\${c.cat}">
      \${c.napamet ? '<span class="fq-napamet">★ NAPAMET</span>' : ''}
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">\${c.text}</div>
        <div class="fq-meta">\${c.meta}</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'\${safe(c.text)} — \${safe(c.meta.replace(/<[^>]+>/g,''))}')">⎘</button>
    </div>\`;
}

function fqCopy(btn, text) {
  navigator.clipboard.writeText(text).catch(() => {});
  btn.classList.add('copied');
  btn.textContent = '✓';
  setTimeout(() => { btn.classList.remove('copied'); btn.textContent = '⎘'; }, 1500);
}

renderCit2();

/* ═══════════════════════════════════
   POJMOVNIK v2 (H11 pojm-card pattern)
═══════════════════════════════════ */
const POJM_DATA2 = [
  // === STIH / FORMA (9 pojmova) ===
  {kat:'stih',term:'Osmerac (4+4)',def:'Stih od <strong>8 slogova</strong> s cezurom iza 4. sloga. U Smail-agi koristi se za <em>lirske i refleksivne dionice</em>. Narodno-epska tradicija.'},
  {kat:'stih',term:'Deseterac (4+6)',def:'Stih od <strong>10 slogova</strong> s cezurom iza 4. sloga. U Smail-agi za <em>narativne i svečane dijelove</em>. Junački stih hrv. i srpske narodne epike.'},
  {kat:'stih',term:'Štokavski deseterac',def:'Stil deseterca vezan uz štokavsko narječje i narodnu pjesmu. Mažuranić ga koristi kao <strong>znak nacionalne pripadnosti</strong> djela.'},
  {kat:'stih',term:'Cezura',def:'Obvezatna pauza unutar stiha. U osmercu iza 4. sloga (4+4), u desetercu iza 4. sloga (4+6). <em>„Boj se onoga / tko je viko"</em> — cezura nakon „onoga".'},
  {kat:'stih',term:'Rima',def:'U Smail-agi <strong>rijetka i neregularna</strong> — povremeno se pojavljuje, ne kao pravilo. Često parna AABB. Glavna zvukovna snaga djela u ritmu, ne rimi.'},
  {kat:'stih',term:'Strofa',def:'U djelu nema strogih strofa — stihovi teku u narativnim blokovima. <em>Kob</em> je najsažetije pjevanje s 34 stiha kao cjelinom.'},
  {kat:'stih',term:'Ritam',def:'Dinamička izmjena osmerca (ubrzani) i deseterca (svečani). Ritam prati emocionalnu temperaturu scene. <em>Harač</em> ima najdramatičniji ritam.'},
  {kat:'stih',term:'Hemistih',def:'Polovica stiha odvojena cezurom. U osmercu: 4 sloga; u desetercu: 4 i 6 slogova. Osnova rasporeda značenja.'},
  {kat:'stih',term:'Metrička raznolikost',def:'Korištenje različitih stihova u istom djelu. Smail-aga kombinira osmerac i deseterac — obilježje zrelog romantičarskog spjeva.'},

  // === SPJEV / ŽANR (10 pojmova) ===
  {kat:'spjev',term:'Spjev',def:'<strong>Kraće narativno djelo u stihu</strong>, objedinjuje epsku, dramsku i lirsku komponentu. Kraće od epa, ali zreliji po motivu i formi. Smail-aga = 1134 stiha.'},
  {kat:'spjev',term:'Ep',def:'<strong>Dugo narativno djelo u stihu</strong> (tisuće stihova). Primjeri: Ilijada, Osman, Judita. Smail-aga <em>nije ep</em> — kraća i s jačim lirsko-dramskim komponentama.'},
  {kat:'spjev',term:'Pjevanje',def:'<strong>Veća kompozicijska cjelina</strong> u epu/spjevu. Smail-aga ima <strong>5 pjevanja</strong> (Agovanje, Noćnik, Četa, Harač, Kob). Svako ima vlastitu dramsku funkciju.'},
  {kat:'spjev',term:'Agovanje',def:'<strong>I. pjevanje</strong> (~180 stihova). Smail-aga u Stolcu muči Crnogorce, ubija Duraka. <em>Ekspozicija</em> — uvedeni svi likovi.'},
  {kat:'spjev',term:'Noćnik',def:'<strong>II. pjevanje</strong> (~160 stihova). Novičino noćno putovanje iz Stolca na Cetinje. <em>Prelazak</em> — od krvnika do osvetnika.'},
  {kat:'spjev',term:'Četa',def:'<strong>III. pjevanje</strong> (~145 stihova). Crnogorska četa na Cetinju se duhovno priprema. <em>Svećenikov govor = ideološki centar djela.</em>'},
  {kat:'spjev',term:'Harač',def:'<strong>IV. pjevanje</strong> — najduže (623 stiha). Aga na Gackom polju prikuplja porez; stiže oluja; bitka; <em>agina smrt</em>. Kulminacija.'},
  {kat:'spjev',term:'Kob',def:'<strong>V. pjevanje</strong> — najkraće (34 stiha). Pustinjak na Lovćenu. <em>Filozofski epilog</em> — refleksija o prolaznosti sile.'},
  {kat:'spjev',term:'Romantičarski spjev',def:'<strong>Žanrovski tip</strong> — 19. st., srednja duljina, naglasak na <em>emociji, nacionalnoj temi, moralnom patosu</em>. Smail-aga je prototipski primjer.'},
  {kat:'spjev',term:'Kompozicijski okvir',def:'Djelo otvara Agovanje (moć tiranije), zatvara Kob (pad tiranije). <strong>Simetrična struktura</strong> — tiranija podiže i pada.'},

  // === STILSKA SREDSTVA (12 pojmova) ===
  {kat:'stil',term:'Slavenska antiteza',def:'<strong>Narodno-epska tehnika:</strong> pitanje → negacija → odgovor. <em>„Je li hajduk, il\\u2019 uhoda turska? Nit je hajduk, nit uhoda turska, već Novica..."</em> (II. Noćnik).'},
  {kat:'stil',term:'Epitet',def:'Pridjev koji opisuje karakter. U Smail-agi: <em>„mrki vuk"</em> (aga), <em>„krvnik Crne Gore"</em> (Novica), <em>„sviloruna krda"</em>, <em>„oholi silnik"</em>.'},
  {kat:'stil',term:'Metafora',def:'Preneseno značenje. <em>„S planinskoga gladna miša"</em> — Novica kao glad za osvetom. <em>„Vranom vranu plijen"</em> — agina smrt.'},
  {kat:'stil',term:'Antiteza / kontrast',def:'Suprotstavljanje. <strong>Smail-aga</strong> (tiranija) ↔ <strong>Crnogorci</strong> (sloboda). <strong>Novica prije</strong> ↔ <strong>Novica poslije</strong> pokrštenja.'},
  {kat:'stil',term:'Hiperbola',def:'Namjerno pretjerivanje. Opis aginog bijesa u Agovanju; opis oluje u Haraču; opis Crnogorske hrabrosti u III. Četi.'},
  {kat:'stil',term:'Personifikacija',def:'Apstraktni pojam/priroda kao aktivni subjekt. <strong>Oluja u IV. Haraču</strong> — priroda kao moralni sudac. <strong>Noć</strong> kao pomoć Novici.'},
  {kat:'stil',term:'Apostrofa',def:'Oslovljavanje odsutne osobe. <strong>Svećenikova obraćanja vojnicima</strong> u III. Četi — retorička napetost monologa.'},
  {kat:'stil',term:'Kletva / blagoslov',def:'Direktno proklinjanje/blagoslov. <em>„Boj se onoga tko je viko bez golema mrijet jada!"</em> — Durakova kletva/opomena.'},
  {kat:'stil',term:'Nabrajanje',def:'Niz srodnih pojmova. Nabrajanje mučenja u I. Agovanju (kolac, vješanje, odrubljivanje) — pojačanje užasa tiranije.'},
  {kat:'stil',term:'Biblijska aluzija',def:'Aluzija na Bibliju/kršćanstvo. <em>„Sve je grijeh, sve su djela prika; Bez kajanja nema oprosnika"</em> (III. Četa) — svećenikov jezik.'},
  {kat:'stil',term:'Retoričko pitanje',def:'Pitanje bez stvarnog odgovora, za emfazu. <em>„Je li hajduk, il\\u2019 uhoda turska...?"</em> — početak slavenske antiteze.'},
  {kat:'stil',term:'Ironija',def:'Kaže se jedno, misli drugo. <em>„Dobar junak — da je čovjek taki"</em> — narator o agi: junak po obliku, nečovjek po biti.'},

  // === LIKOVI / RADNJA (11 pojmova) ===
  {kat:'likovi',term:'Smail-aga Čengić',def:'<strong>Središnji antagonist</strong>. Bosansko-hercegovački <em>muselim</em> (turski guverner). Demonski lik — ohol, krvnik, tašt. Pojavljuje se samo u Agovanju i Haraču, ali dominira djelom.'},
  {kat:'likovi',term:'Novica',def:'<strong>Glavni protagonist.</strong> Durakov sin, agin <em>kavaz</em> (stražar). Prelazi od krvnika Crne Gore do krsnog osvetnika. <em>Jedini individualizirani lik u djelu.</em>'},
  {kat:'likovi',term:'Durak',def:'<strong>Stariji Turčin</strong>, agin savjetnik, Novicin otac. U stvarnosti se zvao <em>Milutin</em> (Mažuranić ga turči radi pjesničke slobode). Ubije ga aga jer ga savjetovao.'},
  {kat:'likovi',term:'Crnogorci (kolektiv)',def:'<strong>Kolektivni junak.</strong> Brđani, junaci koji pate pod tiranijom. Hrabri, šute pred mukama, junački umiru. <em>Nisu individualizirani</em> — simbol slobodarskog naroda.'},
  {kat:'likovi',term:'Svećenik',def:'Crnogorski pravoslavni svećenik. <strong>Glas moralnog autoriteta.</strong> Domoljubni govor u III. Četi — poziv na borbu u ime Boga i slobode.'},
  {kat:'likovi',term:'Pustinjak',def:'Refleksivni lik u <strong>V. Kobi</strong>. Na <em>Lovćenu</em>. Mažuranićev autorski glas — filozofska refleksija o prolaznosti sile i konačnoj pravdi.'},
  {kat:'likovi',term:'Mirko',def:'Mladi Crnogorac ubijen na početku aginih mučenja. <em>Prvi simbol nevinih žrtava</em>. Ime čitatelju ostaje — emocionalna motivacija za osvetu.'},
  {kat:'likovi',term:'Bauk',def:'Jedan od aginih slugu. <strong>Pjeva rugalicu</strong> mrtvom agi. Preživljava bitku — ironični svjedok kraja tiranije.'},
  {kat:'likovi',term:'Omer, Jašar, Mujo, Safer',def:'Individualizirani Turci iz aginog logora. <em>„Loše sluge lošeg gospodara"</em> — spremni ga napustiti. Safer je ulizica i nasilnik.'},
  {kat:'likovi',term:'Kavaz',def:'Turski naziv za <strong>agina stražara/čuvara</strong>. Novica je bio kavaz prije pokrštenja. Označava odanost tiraninu.'},
  {kat:'likovi',term:'Muselim',def:'Turski naziv za <strong>lokalnog guvernera</strong> (vladara) u provinciji. Smail-aga je bio muselim Hercegovine. Povijesna funkcija pod turskom vlašću.'},

  // === PREPOROD (8 pojmova) ===
  {kat:'preporod',term:'Hrvatski narodni preporod',def:'<strong>Kulturno-politički pokret</strong> 1835.–1848. Cilj: standardizacija hrv. književnog jezika, nacionalno buđenje. <em>Ilirski pokret</em> je njegov srodnik.'},
  {kat:'preporod',term:'Ilirski pokret',def:'<strong>Politička dimenzija preporoda.</strong> Zagovara južnoslavensku solidarnost pod imenom „iliri". Zabranjeno 1843., pokret nastavlja pod hrv. imenom.'},
  {kat:'preporod',term:'Ljudevit Gaj',def:'<strong>Vođa preporoda.</strong> 1830. objavljuje <em>Kratku osnovu horvatsko-slavenskog pravopisanja</em>. 1835. pokreće <em>Danicu</em>. Standardizira latinicu („Gajica") i štokavštinu.'},
  {kat:'preporod',term:'Danica',def:'<strong>Gajev časopis</strong> — od 1835. <em>„Danica horvatska, slavonska i dalmatinska"</em>; od 1836. <em>„Danica ilirska"</em>. Glavno glasilo preporoda.'},
  {kat:'preporod',term:'Gajica',def:'<strong>Moderna hrv. latinica</strong> koju je Gaj standardizirao (1830.). Dijakritike: č, ć, š, ž, đ. Temelj današnjeg hrv. pravopisa.'},
  {kat:'preporod',term:'Štokavština',def:'<strong>Narječje koje preporod prihvaća</strong> kao hrv. književni jezik. Najrasprostranjenije među Južnim Slavenima. Baza Gundulićevog i Mažuranićevog jezika.'},
  {kat:'preporod',term:'Budnica',def:'<strong>Programska pjesma preporoda</strong> s domoljubnom tematikom. Mažuranić piše budnice (<em>Vjekovi Ilirije</em>, <em>Horvatskoj</em>) u <em>Danici</em>.'},
  {kat:'preporod',term:'Iskra',def:'<strong>Almanah</strong> u kojem je 1846. objavljena <em>Smrt Smail-age Čengića</em>. Izlazio u Zadru, urednik <em>Dimitrije Demeter</em>. Važna publikacija preporoda.'},

  // === ROMANTIZAM (9 pojmova) ===
  {kat:'romantizam',term:'Romantizam',def:'<strong>Europski književni pokret</strong> kraj 18. – sredina 19. st. Obilježja: <em>emocija, nacionalna tema, priroda, pojedinac, patos</em>. Smail-aga je hrv. romantizam.'},
  {kat:'romantizam',term:'Hrvatski romantizam',def:'Razvija se u okviru <strong>preporoda</strong> (1835.–1848.). Spaja nacionalnu tematiku s romantičarskom poetikom. Glavni predstavnik: <strong>Ivan Mažuranić</strong>.'},
  {kat:'romantizam',term:'Nacionalna tematika',def:'Borba za slobodu naroda, povijesni motivi, domoljublje. <strong>Ključna za romantizam</strong> — naročito u Slavenskim zemljama pod okupacijom.'},
  {kat:'romantizam',term:'Romantičarski junak',def:'<strong>Individualizirani lik s unutarnjom borbom</strong> (Novica) ili <em>idealizirani kolektivni junak</em> (Crnogorci). Oštro polariziran s antagonistom.'},
  {kat:'romantizam',term:'Priroda kao sudionik',def:'<strong>Priroda moralno aktivna</strong> — podržava pravedne, kažnjava zle. Oluja u IV. Haraču svrstava se protiv Smail-age. Tipični romantičarski motiv.'},
  {kat:'romantizam',term:'Moralni patos',def:'<strong>Snažne emocije u službi moralne poruke.</strong> Svećenikov govor, pustinjakov monolog, Durakova opomena. Pojačavaju ideološki učinak.'},
  {kat:'romantizam',term:'Polarizacija likova',def:'<strong>Oštra crno-bijela podjela</strong> na Dobro i Zlo. Smail-aga = Zlo (apsolutno); Crnogorci + Novica = Dobro. Nema sivih zona — tipično romantično.'},
  {kat:'romantizam',term:'Usmena poezija',def:'<strong>Narodna poezija kao inspiracija.</strong> Romantizam okreće pogled k narodu — stihovi (osmerac, deseterac), tehnike (slavenska antiteza), motivi.'},
  {kat:'romantizam',term:'Evropski romantizam',def:'Byron (Engleska), Mickiewicz (Poljska), Puškin (Rusija), Petőfi (Mađarska). Smail-aga se svrstava među ove spjevove o nacionalnoj borbi za slobodu.'},

  // === JEZIK / TURCIZMI (6 pojmova) ===
  {kat:'jezik',term:'Turcizmi',def:'<strong>Riječi turskoga podrijetla</strong> u djelu: <em>aga, kavaz, muselim, harač, delija, kapija, toke, fišek, kulaš, sofra, jatagan, kidisati</em>. Autentičnost konteksta.'},
  {kat:'jezik',term:'Arhaizmi',def:'<strong>Stare, izašle riječi:</strong> <em>tudijer</em> (tu), <em>jerbo</em> (jer), <em>vaj</em> (jao), <em>prik</em> (preko), <em>cić</em> (radi). Epski, biblijski ton djela.'},
  {kat:'jezik',term:'Harač',def:'<strong>Godišnji porez</strong> koji su ne-muslimani plaćali turskoj vlasti. IV. pjevanje Smail-age. Simbol eksploatacije i tiranije.'},
  {kat:'jezik',term:'Aga',def:'<strong>Turski naslov</strong> — starješina, zapovjednik. Smail-aga je bio ne samo aga nego i <em>muselim</em> (guverner). Turcizam ušao u hrv. jezik.'},
  {kat:'jezik',term:'Biblijski izrazi',def:'Riječi religijskog registra u svećenikovom govoru: <em>grijeh, kajanje, oprosnik</em>. Spajaju djelo s kršćanskom moralnom tradicijom.'},
  {kat:'jezik',term:'Er umjesto vokalnog r',def:'Mažuranićev <strong>izvorni pravopis</strong>: <em>kerv</em> (krv), <em>serce</em> (srce), <em>kerst</em> (krst). Predgajevska grafija — djelo piše u preporodnoj tranziciji.'},
];

let pojm2Active = 'all';

function renderPojm2() {
  const grid = document.getElementById('pojm-grid2');
  if (!grid) return;
  const show = pojm2Active === 'all' ? POJM_DATA2 : POJM_DATA2.filter(p => p.kat === pojm2Active);
  grid.innerHTML = show.map(p => \`
    <div class="pojm-card" data-cat="\${p.kat}" onclick="this.classList.toggle('flip')">
      <div class="pojm-front">
        <div class="pojm-term">\${p.term}</div>
        <div class="pojm-hint">→ klikni</div>
      </div>
      <div class="pojm-back">
        <div class="pojm-def">\${p.def}</div>
      </div>
    </div>
  \`).join('');
}

function pojmFilter2(cat, btn) {
  document.querySelectorAll('.pojm-filter').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  pojm2Active = cat;
  renderPojm2();
  // Also update flashcard array if in FC mode
  if(pj2Data.length === 0 || pojm2Active !== cat) pj2Build();
}

renderPojm2();

/* ═══════════════════════════════════
   POJMOVNIK FLASHCARD MODE (H11 pj2*)
═══════════════════════════════════ */
let pj2Idx=0, pj2Data=[], pj2Seen={};

function pj2Build(){
  const src = pojm2Active==='all' ? POJM_DATA2 : POJM_DATA2.filter(p=>p.kat===pojm2Active);
  pj2Data = src;
  pj2Idx = 0;
  pj2Seen = {};
  pj2Render();
}

function pj2Render(){
  if(!pj2Data.length) return;
  const p = pj2Data[pj2Idx];
  const scene = document.getElementById('fc-scene2');
  const inner = document.getElementById('fc-inner2');
  if(scene) scene.classList.remove('flipped');
  if(inner) inner.style.transform='';

  const cat = document.getElementById('fc-cat2');
  const term = document.getElementById('fc-term2');
  const def = document.getElementById('fc-def2');
  const counter = document.getElementById('fc-counter2');
  const prev = document.getElementById('fc-prev2');
  const next = document.getElementById('fc-next2');

  if(cat) cat.textContent = p.kat.toUpperCase();
  if(term) term.textContent = p.term;
  if(def) def.innerHTML = p.def;
  if(counter) counter.textContent = (pj2Idx+1)+' / '+pj2Data.length;
  if(prev) prev.disabled = pj2Idx === 0;
  if(next) next.disabled = pj2Idx === pj2Data.length-1;

  pj2Seen[pj2Idx] = true;
  pj2RenderDots();
}

function pj2RenderDots(){
  const prog = document.getElementById('fc-progress2');
  if(!prog || pj2Data.length > 20) return;
  prog.innerHTML = pj2Data.map((_,i)=>\`<div class="fc-dot\${pj2Seen[i]?' seen':''}\${i===pj2Idx?' known':''}"></div>\`).join('');
}

function pj2Flip(){
  const scene = document.getElementById('fc-scene2');
  if(scene) scene.classList.toggle('flipped');
}

function pj2Next(){
  if(pj2Idx < pj2Data.length-1){ pj2Idx++; pj2Render(); }
}

function pj2Prev(){
  if(pj2Idx > 0){ pj2Idx--; pj2Render(); }
}

function setPojmMode2(mode){
  const gw = document.getElementById('grid-wrap2');
  const fw = document.getElementById('fc-wrap2');
  const mb1 = document.getElementById('mode-grid');
  const mb2 = document.getElementById('mode-fc');
  if(mode==='fc'){
    if(gw) gw.style.display='none';
    if(fw){ fw.style.display='flex'; }
    if(mb1) mb1.classList.remove('on');
    if(mb2) mb2.classList.add('on');
    pj2Build();
    document.onkeydown = function(e){
      if(e.key==='ArrowRight') pj2Next();
      else if(e.key==='ArrowLeft') pj2Prev();
      else if(e.key===' '||e.key==='Enter'){ e.preventDefault(); pj2Flip(); }
    };
  } else {
    if(gw) gw.style.display='';
    if(fw) fw.style.display='none';
    if(mb1) mb1.classList.add('on');
    if(mb2) mb2.classList.remove('on');
    document.onkeydown = null;
  }
}

/* ═══════════════════════════════════
   KEYBOARD SHORTCUTS
═══════════════════════════════════ */
(function(){
  let helpShown=false;
  document.addEventListener('keydown', function(e){
    // Ignore when typing in inputs/textareas
    const target=e.target.tagName;
    if(target==='INPUT'||target==='TEXTAREA'||e.target.isContentEditable)return;
    
    const activeTab=Array.from(document.querySelectorAll('.tab')).findIndex(t=>t.classList.contains('on'));
    
    // Arrow navigation between tabs
    if(e.key==='ArrowRight'&&activeTab<7){
      e.preventDefault();
      sw(activeTab+1);
    } else if(e.key==='ArrowLeft'&&activeTab>0){
      e.preventDefault();
      sw(activeTab-1);
    }
    // Number keys 1-8 for direct tab access
    else if(/^[1-8]$/.test(e.key)){
      e.preventDefault();
      sw(parseInt(e.key)-1);
    }
    // ? for help
    else if(e.key==='?'){
      e.preventDefault();
      if(helpShown){
        document.getElementById('kbd-help')?.remove();
        helpShown=false;
        return;
      }
      const help=document.createElement('div');
      help.id='kbd-help';
      help.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--ele);border:1px solid var(--gold);border-radius:var(--r3);padding:24px 28px;z-index:500;box-shadow:0 8px 40px rgba(0,0,0,.6);max-width:90vw';
      help.innerHTML=\`
        <h3 style="margin-bottom:12px;color:var(--gold);font-family:var(--display)">⌨ Kratice</h3>
        <div style="display:grid;grid-template-columns:auto 1fr;gap:8px 14px;font-family:var(--serif);font-size:13px">
          <span><span class="kbd">←</span> <span class="kbd">→</span></span><span>Prethodni / Sljedeći tab</span>
          <span><span class="kbd">1</span> – <span class="kbd">8</span></span><span>Skok direktno na tab</span>
          <span><span class="kbd">?</span></span><span>Prikaži / sakrij ovu pomoć</span>
          <span><span class="kbd">Esc</span></span><span>Zatvori dialog / izađi iz polja</span>
          <span><span class="kbd">Ctrl</span>+<span class="kbd">P</span></span><span>Print / PDF</span>
        </div>
        <div style="margin-top:14px;text-align:right">
          <button class="fcb" onclick="document.getElementById('kbd-help').remove();">Zatvori</button>
        </div>
      \`;
      document.body.appendChild(help);
      helpShown=true;
    }
    // Escape closes help/sidebar
    else if(e.key==='Escape'){
      document.getElementById('kbd-help')?.remove();
      helpShown=false;
      closeSb();
    }
  });
})();

if('IntersectionObserver' in window){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.opacity='1';
        e.target.style.transform='translateY(0)';
      }
    });
  },{threshold:0.1});
  
  document.querySelectorAll('.scene-card,.ac,.box-key,.fq,.tbl-wrap').forEach(el=>{
    el.style.opacity='0';
    el.style.transform='translateY(12px)';
    el.style.transition='opacity .4s ease, transform .4s ease';
    obs.observe(el);
  });
}

function toggleSidebar(){var s=document.getElementById('sidebar'),o=document.getElementById('overlay');if(s)s.classList.toggle('mobile-open');if(o)o.classList.toggle('show')}
</script>
<!-- TIP BAR -->
<div class="tip-bar" id="tip-bar">
  <span class="tip-bar-close" onclick="document.getElementById('tip-bar').classList.remove('show')">✕</span>
  <span id="tip-bar-txt">💡 <strong>Tip:</strong> Klikni na pjevanje za detalje i esejske signale.</span>
</div>

<!-- FROM BANNER -->
<div class="from-banner" id="from-banner">
  <span>📎</span><span id="from-txt">Dolaziš iz prethodnog poglavlja</span>
</div>


<script>
/* TIER_SYSTEM_JS_INJECTED */
/**
 * Maturiraj.hr — Tier Helper Module
 * 
 * Globalni JS modul za upravljanje tier sustavom (Free / Standard / Pro).
 * Koristi se u svim chapterima i pricing page-u.
 * 
 * 🚨 PRODUCTION TODO:
 * - Tier provjera mora ići preko Supabase (auth.uid() → user_subscriptions tablica)
 * - Trenutno mock kroz localStorage 'mt.pro_mode' = 'free' | 'standard' | 'pro'
 * - Dnevni limiti se moraju validirati na backendu
 * 
 * Verzija: 1.0
 * Autor: Maturiraj.hr team
 */

(function(window) {
  'use strict';

  // ════════════════════════════════════════════════
  // CONFIG — Tier Definicija
  // ════════════════════════════════════════════════
  
  const TIER_CONFIG = {
    free: {
      name: 'Free',
      label: '🆓 Free',
      price: 0,
      color: 'var(--t3, #888)',
      features: {
        // TEORIJA — sve free
        all_theory: true,
        all_quizzes: true,
        ncvvo_errors: true,
        glossary: true,
        cheatsheet: true,
        diagnostics: true,
        // ALATI — sve free
        score_calculator: true,
        plagiarism_detector: true,
        objectivity_detector: true,
        speed_drill: true,
        proofreading_game: true,
        // WORKSPACE — limited
        essay_workspace: true,
        summary_workspace: true,
        max_essays: 1,            // 1 esej max
        max_summaries: 1,         // 1 sažetak max
        all_essay_models: false,  // 1 vidljiv
        all_summary_models: false,
        export_workspace: false,  // bez exporta
        // SIMULATORI — 0 demo
        discere_simulators: false,
        max_simulators: 0,
        // PLAN UČENJA — pregled
        study_plan_preview: true,
        study_plan_full: false,
        // STATS
        streak_tracking: false,
        heatmap: false,
        progress_analytics: false,
        // PARENT
        parent_dashboard: false,
        // AI — sve zaključano
        ai_chat: false,
        ai_feedback: false,
        ai_personal_plan: false,
        // PRIJEMNI
        prijemni: false,
      },
      ai_limits: {
        feedback_per_day: 0,
        chat_per_day: 0,
      }
    },
    
    standard: {
      name: 'Standard',
      label: '⭐ Standard',
      price: 9.99,
      color: 'var(--blue, #4a90d9)',
      features: {
        // TEORIJA — sve
        all_theory: true,
        all_quizzes: true,
        ncvvo_errors: true,
        glossary: true,
        cheatsheet: true,
        diagnostics: true,
        // ALATI — sve
        score_calculator: true,
        plagiarism_detector: true,
        objectivity_detector: true,
        speed_drill: true,
        proofreading_game: true,
        // WORKSPACE — full
        essay_workspace: true,
        summary_workspace: true,
        max_essays: -1,           // unlimited
        max_summaries: -1,        // unlimited
        all_essay_models: true,
        all_summary_models: true,
        export_workspace: true,
        // SIMULATORI — svi (70 ispita)
        discere_simulators: true,
        max_simulators: -1,
        // PLAN UČENJA — full
        study_plan_preview: true,
        study_plan_full: true,
        // STATS
        streak_tracking: true,
        heatmap: true,
        progress_analytics: true,
        // PARENT
        parent_dashboard: true,
        // AI — sve zaključano (Standard NEMA AI!)
        ai_chat: false,
        ai_feedback: false,
        ai_personal_plan: false,
        // PRIJEMNI
        prijemni: false,
      },
      ai_limits: {
        feedback_per_day: 0,
        chat_per_day: 0,
      }
    },
    
    pro: {
      name: 'Pro',
      label: '💎 Pro',
      price: 19.99,
      color: 'var(--gold, #e9b446)',
      features: {
        // Sve iz Standard
        all_theory: true,
        all_quizzes: true,
        ncvvo_errors: true,
        glossary: true,
        cheatsheet: true,
        diagnostics: true,
        score_calculator: true,
        plagiarism_detector: true,
        objectivity_detector: true,
        speed_drill: true,
        proofreading_game: true,
        essay_workspace: true,
        summary_workspace: true,
        max_essays: -1,
        max_summaries: -1,
        all_essay_models: true,
        all_summary_models: true,
        export_workspace: true,
        discere_simulators: true,
        max_simulators: -1,
        study_plan_preview: true,
        study_plan_full: true,
        streak_tracking: true,
        heatmap: true,
        progress_analytics: true,
        parent_dashboard: true,
        // AI — sve unlocked (PRO ONLY)
        ai_chat: true,
        ai_feedback: true,
        ai_personal_plan: true,
        // PRIJEMNI — Pro only
        prijemni: true,
      },
      ai_limits: {
        feedback_per_day: 20,    // 2B odluka
        chat_per_day: 30,        // 2B odluka
        plan_refresh_per_week: 1,
      }
    }
  };

  // ════════════════════════════════════════════════
  // STORAGE KEYS
  // ════════════════════════════════════════════════
  
  const STORAGE_KEYS = {
    tier: 'mt.pro_mode',
    daily_usage: 'mt.daily_usage',
    weekly_usage: 'mt.weekly_usage',
  };

  // ════════════════════════════════════════════════
  // CORE API
  // ════════════════════════════════════════════════
  
  /**
   * Vraća trenutni tier korisnika.
   * @returns {'free' | 'standard' | 'pro'}
   */
  function getTier() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.tier);
      if (stored === 'pro' || stored === 'standard') return stored;
      return 'free';
    } catch (e) {
      return 'free';
    }
  }

  /**
   * Postavlja tier (mock — produkcija ovo radi preko Supabase).
   */
  function setTier(tier) {
    if (!['free', 'standard', 'pro'].includes(tier)) {
      console.error('[tier_helper] Invalid tier:', tier);
      return false;
    }
    try {
      if (tier === 'free') {
        localStorage.removeItem(STORAGE_KEYS.tier);
      } else {
        localStorage.setItem(STORAGE_KEYS.tier, tier);
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Toggle tier (free → standard → pro → free)
   * Koristi se u dev mode-u.
   */
  function toggleTier() {
    const current = getTier();
    const next = current === 'free' ? 'standard' : (current === 'standard' ? 'pro' : 'free');
    setTier(next);
    return next;
  }

  /**
   * Provjerava ima li korisnik feature.
   * @param {string} feature - npr 'ai_feedback', 'all_simulators'
   * @returns {boolean}
   */
  function hasFeature(feature) {
    const tier = getTier();
    const config = TIER_CONFIG[tier];
    if (!config) return false;
    return config.features[feature] === true;
  }

  /**
   * Vraća konfiguraciju tier-a (label, cijena, boja).
   * @param {string} tier - opcionalno; ako nije zadan, vraća za current.
   */
  function getTierConfig(tier) {
    return TIER_CONFIG[tier || getTier()] || TIER_CONFIG.free;
  }

  /**
   * Vraća vrijednost numeričkog limita feature-a.
   * @param {string} feature - npr 'max_essays', 'max_simulators'
   * @returns {number} -1 = unlimited, 0 = nema, X = točno X
   */
  function getLimit(feature) {
    const tier = getTier();
    const config = TIER_CONFIG[tier];
    if (!config) return 0;
    const val = config.features[feature];
    if (val === true) return -1; // unlimited
    if (val === false) return 0;
    return val;
  }

  /**
   * Vraća AI limit (feedback / chat / plan).
   * @param {string} type - 'feedback' | 'chat' | 'plan'
   */
  function getAILimit(type) {
    const tier = getTier();
    const config = TIER_CONFIG[tier];
    if (!config || !config.ai_limits) return 0;
    
    const map = {
      feedback: 'feedback_per_day',
      chat: 'chat_per_day',
      plan: 'plan_refresh_per_week'
    };
    return config.ai_limits[map[type]] || 0;
  }

  // ════════════════════════════════════════════════
  // USAGE TRACKING
  // ════════════════════════════════════════════════
  
  /**
   * Vraća današnju potrošnju feature-a.
   */
  function getDailyUsage(feature) {
    try {
      const today = new Date().toISOString().split('T')[0];
      const stored = localStorage.getItem(STORAGE_KEYS.daily_usage);
      if (!stored) return 0;
      const data = JSON.parse(stored);
      if (data.date !== today) return 0;
      return data.usage[feature] || 0;
    } catch (e) {
      return 0;
    }
  }

  /**
   * Inkrementira potrošnju feature-a.
   */
  function incrementDailyUsage(feature) {
    const today = new Date().toISOString().split('T')[0];
    let data = { date: today, usage: {} };
    
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.daily_usage);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.date === today) data = parsed;
      }
    } catch (e) {}
    
    data.usage[feature] = (data.usage[feature] || 0) + 1;
    
    try {
      localStorage.setItem(STORAGE_KEYS.daily_usage, JSON.stringify(data));
    } catch (e) {}
    
    return data.usage[feature];
  }

  /**
   * Provjerava može li korisnik koristiti AI feature (limit + tier check).
   * @returns {{ allowed: boolean, reason: string, used: number, limit: number }}
   */
  function canUseAI(type) {
    const tier = getTier();
    const limit = getAILimit(type);
    const used = getDailyUsage('ai_' + type);
    
    if (limit === 0) {
      return {
        allowed: false,
        reason: 'tier_locked',
        tier_required: 'pro',
        used: 0,
        limit: 0
      };
    }
    
    if (used >= limit) {
      return {
        allowed: false,
        reason: 'daily_limit_reached',
        tier_required: tier,
        used,
        limit
      };
    }
    
    return {
      allowed: true,
      reason: 'ok',
      used,
      limit
    };
  }

  // ════════════════════════════════════════════════
  // PAYWALL MODAL
  // ════════════════════════════════════════════════
  
  /**
   * Prikazuje paywall modal.
   * @param {object} options
   * @param {string} options.feature - naziv feature-a
   * @param {string} options.requiredTier - 'standard' | 'pro'
   * @param {string} options.reason - razlog (free_limit / tier_locked / daily_limit)
   */
  function showPaywall(options) {
    const opts = options || {};
    const requiredTier = opts.requiredTier || 'standard';
    const reason = opts.reason || 'feature_locked';
    const feature = opts.feature || 'Ovaj feature';
    
    // Remove existing modal
    const existing = document.getElementById('mt-paywall-modal');
    if (existing) existing.remove();
    
    const reasonText = {
      free_limit: 'Iskoristio si Free limit za ovaj feature.',
      tier_locked: 'Ovaj feature je dostupan u Standard ili Pro pretplati.',
      daily_limit: 'Iskoristio si svoj dnevni limit. Vrati se sutra ili upgradaj na viši tier.',
      feature_locked: 'Ovaj feature zahtijeva pretplatu.'
    };
    
    const modal = document.createElement('div');
    modal.id = 'mt-paywall-modal';
    modal.className = 'mt-paywall-overlay';
    modal.innerHTML = \`
      <div class="mt-paywall-modal" onclick="event.stopPropagation()">
        <button type="button" class="mt-paywall-close" onclick="MT.Tier.closePaywall()" aria-label="Zatvori">×</button>
        
        <div class="mt-paywall-header">
          <div class="mt-paywall-icon">\${requiredTier === 'pro' ? '💎' : '⭐'}</div>
          <div class="mt-paywall-title">\${feature}</div>
          <div class="mt-paywall-subtitle">\${reasonText[reason] || reasonText.feature_locked}</div>
        </div>
        
        <div class="mt-paywall-tiers">
          \${requiredTier !== 'pro' ? \`
          <div class="mt-paywall-tier mt-paywall-tier-standard \${requiredTier === 'standard' ? 'mt-paywall-tier-recommended' : ''}">
            \${requiredTier === 'standard' ? '<div class="mt-paywall-badge">Preporučeno</div>' : ''}
            <div class="mt-paywall-tier-name">⭐ Standard</div>
            <div class="mt-paywall-tier-price">9,99€<span>/mj</span></div>
            <ul class="mt-paywall-tier-features">
              <li>✅ Cijela teorija + kvizovi</li>
              <li>✅ Svi Discere simulatori (70 ispita)</li>
              <li>✅ Sve modelne eseje (9) + sažetke (10)</li>
              <li>✅ Neograničeno u Workspace</li>
              <li>✅ Parent dashboard</li>
              <li>✅ Streak + heatmap + analitika</li>
              <li>❌ Bez AI features</li>
            </ul>
            <button type="button" class="mt-paywall-cta" onclick="MT.Tier.subscribe('standard')">
              Pretplati se na Standard
            </button>
          </div>
          \` : ''}
          
          <div class="mt-paywall-tier mt-paywall-tier-pro \${requiredTier === 'pro' ? 'mt-paywall-tier-recommended' : ''}">
            \${requiredTier === 'pro' ? '<div class="mt-paywall-badge">Preporučeno</div>' : ''}
            <div class="mt-paywall-tier-name">💎 Pro</div>
            <div class="mt-paywall-tier-price">19,99€<span>/mj</span></div>
            <ul class="mt-paywall-tier-features">
              <li>✅ Sve iz Standard</li>
              <li>✅ <strong>🤖 AI Profesor (chat) — 30/dan</strong></li>
              <li>✅ <strong>🤖 AI Feedback za eseje + sažetke — 20/dan</strong></li>
              <li>✅ <strong>Personalizirani plan učenja</strong></li>
              <li>✅ <strong>Prijemni priprema</strong></li>
              <li>✅ Priority AI queue</li>
            </ul>
            <button type="button" class="mt-paywall-cta mt-paywall-cta-pro" onclick="MT.Tier.subscribe('pro')">
              Pretplati se na Pro
            </button>
          </div>
        </div>
        
        <div class="mt-paywall-footer">
          <a href="Maturiraj_Pricing.html" class="mt-paywall-link">Vidi sve tier opcije →</a>
          <span class="mt-paywall-divider">·</span>
          <button type="button" class="mt-paywall-link mt-paywall-link-btn" onclick="MT.Tier.toggleTierDevMode()">
            🧪 Dev: Toggle tier (trenutno: \${getTier().toUpperCase()})
          </button>
        </div>
      </div>
    \`;
    
    modal.addEventListener('click', closePaywall);
    document.body.appendChild(modal);
    
    // Disable body scroll
    document.body.style.overflow = 'hidden';
  }

  function closePaywall() {
    const modal = document.getElementById('mt-paywall-modal');
    if (modal) {
      modal.remove();
      document.body.style.overflow = '';
    }
  }

  function subscribe(tier) {
    // 🚨 PRODUCTION TODO: Stripe Checkout integration
    // Plan: Stripe Checkout Session → success_url: /pretplata/success?tier=X
    // Backend writes to Supabase user_subscriptions, then redirects back
    
    // For now: mock behavior — set tier, close paywall, reload
    if (confirm(\`🚧 Pretplata u izradi (Stripe checkout uskoro).\\n\\nMock: Postaviti tier na \${tier === 'pro' ? 'Pro 19,99€' : 'Standard 9,99€'}/mj?\\n\\nKliknite OK za mock pretplatu.\`)) {
      setTier(tier);
      closePaywall();
      location.reload();
    }
  }

  function toggleTierDevMode() {
    const next = toggleTier();
    alert(\`🧪 Dev mode — tier postavljen na: \${next.toUpperCase()}\`);
    closePaywall();
    location.reload();
  }

  // ════════════════════════════════════════════════
  // SIDEBAR TIER BADGE
  // ════════════════════════════════════════════════
  
  /**
   * Injectsa tier badge u sidebar (ako postoji).
   */
  function injectSidebarBadge() {
    const sidebar = document.querySelector('.sidebar') || document.querySelector('nav.sb');
    if (!sidebar) return;
    
    // Check if already exists
    if (document.getElementById('mt-tier-badge')) return;
    
    const tier = getTier();
    const config = getTierConfig(tier);
    
    const badge = document.createElement('div');
    badge.id = 'mt-tier-badge';
    badge.className = 'mt-tier-badge mt-tier-badge-' + tier;
    badge.innerHTML = \`
      <div class="mt-tier-badge-label">\${config.label}</div>
      \${tier === 'free' ? '<button type="button" class="mt-tier-badge-cta" onclick="MT.Tier.openPricing()">Upgrade →</button>' : ''}
    \`;
    
    // Insert at top of sidebar
    const firstChild = sidebar.firstElementChild;
    if (firstChild) {
      sidebar.insertBefore(badge, firstChild);
    } else {
      sidebar.appendChild(badge);
    }
  }

  function openPricing() {
    location.href = 'Maturiraj_Pricing.html';
  }

  // ════════════════════════════════════════════════
  // PUBLIC API
  // ════════════════════════════════════════════════
  
  window.MT = window.MT || {};
  window.MT.Tier = {
    // Core
    getTier,
    setTier,
    toggleTier,
    getTierConfig,
    
    // Features
    hasFeature,
    getLimit,
    getAILimit,
    
    // Usage
    getDailyUsage,
    incrementDailyUsage,
    canUseAI,
    
    // Paywall
    showPaywall,
    closePaywall,
    subscribe,
    toggleTierDevMode,
    
    // UI
    injectSidebarBadge,
    openPricing,
    
    // Config (read-only)
    CONFIG: TIER_CONFIG
  };

  // Auto-inject sidebar badge on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSidebarBadge);
  } else {
    injectSidebarBadge();
  }

})(window);

</script>

<script>
/* UPDATE_PROGRESS_INJECTED */

function updateProgress(pct){
  var p=Math.max(5,pct);
  var pb=document.getElementById('prog-bar'); if(pb) pb.style.width=p+'%';
  var pct2=document.getElementById('prog-pct'); if(pct2) pct2.textContent=p+'%';
  var hp=document.getElementById('hero-pb'); if(hp) hp.style.width=p+'%';
  var hl=document.getElementById('hero-prog-lbl'); if(hl) hl.textContent=p+'% završeno';
  try { localStorage.setItem('mt.hrv.h14.prog', p); } catch(e){}
}

</script>

<script>
/* CIT_SEARCH_INJECTED */

function citSearch(query){
  var q = (query || '').toLowerCase().trim();
  var quotes = document.querySelectorAll('.featured-quote');
  var visible = 0;
  quotes.forEach(function(qt){
    var text = qt.textContent.toLowerCase();
    var match = !q || text.indexOf(q) !== -1;
    qt.style.display = match ? '' : 'none';
    if (match) visible++;
  });
}

</script>`;

const STYLES_CSS = `
/* ═══════════════════════════════════════════
   HRVATSKI DESIGN SYSTEM v1 — KRVAVO CRVENA
   ═══════════════════════════════════════════ */
:root{
  --bg:#0F0605;--sur:#180A08;--ele:#20100D;--card:#2A1612;--hov:#351B16;--inp:#180A08;
  --bd:rgba(220,50,47,.10);--bdm:rgba(220,50,47,.18);--bdl:rgba(220,50,47,.32);
  --bronze:#DC322F;--bronze-l:#FF5A54;--bronze-d:#8B1E1B;
  --bd-br:rgba(220,50,47,.28);--dim-br:rgba(220,50,47,.10);--glow-br:rgba(220,50,47,.06);
  --gold:#E8C97A;--bd-go:rgba(232,201,122,.26);--dim-go:rgba(232,201,122,.09);
  --parchment:#D4B98C;--bd-pa:rgba(212,185,140,.22);--dim-pa:rgba(212,185,140,.08);
  --teal:#6B8E7F;--bd-t:rgba(107,142,127,.22);--dim-t:rgba(107,142,127,.09);
  --red:#C04244;--bd-r:rgba(192,66,68,.22);--dim-r:rgba(192,66,68,.10);
  --green:#6B9464;--bd-g:rgba(107,148,100,.22);--dim-g:rgba(107,148,100,.09);
  --sienna:#A85940;--bd-s:rgba(168,89,64,.22);--dim-s:rgba(168,89,64,.10);
  --t1:#F5E6D3;--t2:#B09684;--t3:#6B5A4E;--t4:#3A2A22;
  --font:'Plus Jakarta Sans',system-ui,sans-serif;
  --serif:'Crimson Text',Georgia,serif;
  --display:'Cinzel',serif;
  --mono:'JetBrains Mono',monospace;
  --r1:4px;--r2:8px;--r3:12px;--r4:16px;--r5:24px;--sb:258px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
img,video,iframe,embed,object{max-width:100%;height:auto}
html{font-size:16px;scroll-behavior:smooth;overflow-x:hidden}
body{font-family:var(--font);background:var(--bg);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased;overflow-x:hidden;-webkit-tap-highlight-color:transparent}
a{color:inherit;text-decoration:none}

body::before{
  content:'';position:fixed;inset:0;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M0 40 L80 40 M40 0 L40 80' stroke='%23DC322F' stroke-width='.25' opacity='.05'/%3E%3Ccircle cx='40' cy='40' r='1.2' fill='%23DC322F' opacity='.08'/%3E%3C/svg%3E");
  background-size:80px 80px;pointer-events:none;z-index:0;
}
body::after{
  content:'';position:fixed;inset:0;
  background:radial-gradient(ellipse 60% 50% at 50% 0%,rgba(220,50,47,.07) 0%,transparent 70%);
  pointer-events:none;z-index:0;
}
.shell{display:flex;min-height:100vh}
.shell,.sidebar,.main{position:relative;z-index:1}
.main{flex:1;min-width:0;max-width:100%}

@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@keyframes layerIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(220,50,47,.3)}50%{box-shadow:0 0 0 8px rgba(220,50,47,.0)}}
@keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
@keyframes diagFade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}

/* ══ SIDEBAR ══ */
.sidebar{
  width:var(--sb);min-width:var(--sb);flex-shrink:0;background:var(--sur);
  border-right:1px solid var(--bdm);
  position:sticky;top:0;height:100vh;overflow-y:auto;
  display:flex;flex-direction:column;
  scrollbar-width:thin;scrollbar-color:var(--bdm) transparent;
}
@media(max-width:1200px){
  .sidebar{position:fixed;left:0;top:0;bottom:0;height:100%;z-index:180;
    transform:translateX(-100%);transition:transform .25s cubic-bezier(.4,0,.2,1);
    pointer-events:none}
  .sidebar.mobile-open{transform:translateX(0)!important;pointer-events:auto}
  .sb-hamburger{display:flex!important}
  .main{width:100%!important;max-width:100%!important;flex:1!important}
}
.sidebar::-webkit-scrollbar{width:3px}
.sidebar::-webkit-scrollbar-thumb{background:var(--bdm);border-radius:2px}
.sb-brand{padding:16px 14px 14px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.sb-logo{
  width:34px;height:34px;
  background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));
  border-radius:var(--r2);display:flex;align-items:center;justify-content:center;
  flex-shrink:0;box-shadow:0 0 20px rgba(220,50,47,.35);
  animation:pulse 3s ease-in-out infinite;
}
.sb-name{font-family:var(--display);font-size:12px;font-weight:700;color:var(--t1);letter-spacing:.5px}
.sb-sub{font-size:9px;color:var(--t3);margin-top:2px;font-family:var(--mono);letter-spacing:1.5px;text-transform:uppercase}
.sb-hamburger{
  display:none;position:fixed;top:6px;left:6px;z-index:300;
  width:38px;height:38px;background:var(--sur);border:1px solid var(--bdm);
  border-radius:var(--r2);align-items:center;justify-content:center;cursor:pointer;flex-direction:column;gap:4px;
}
.sb-hamburger span{display:block;width:16px;height:1.5px;background:var(--t2);border-radius:1px;transition:all .2s}
.sb-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:150;backdrop-filter:blur(3px)}
.sb-overlay.show{display:block}
.sidebar.mobile-open{transform:translateX(0)!important}
.sb-prog-wrap{padding:10px 14px;border-bottom:1px solid var(--bd)}
.sb-prog-label{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;display:flex;justify-content:space-between}
.sb-prog-track{height:4px;background:var(--bd);border-radius:2px;overflow:hidden}
.sb-prog-bar{
  height:100%;
  background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));
  background-size:200% 100%;
  border-radius:2px;transition:width .6s cubic-bezier(.4,0,.2,1);
  animation:shimmer 2.5s linear infinite;
}
.sb-era{font-family:var(--display);font-size:8px;font-weight:600;letter-spacing:2.5px;color:var(--bronze-d);text-transform:uppercase;padding:14px 14px 4px;border-top:1px solid var(--bd);margin-top:4px}
.sb-era:first-of-type{border-top:none;margin-top:0}
.sb-item{display:flex;align-items:center;gap:9px;padding:6px 14px;font-size:11.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.35;font-family:var(--serif)}
.sb-item:hover:not(.disabled){color:var(--t1);background:var(--hov)}
.sb-item.active{color:var(--bronze-l);background:var(--glow-br);border-left-color:var(--bronze);font-weight:600}
.sb-item.disabled{opacity:.35;cursor:not-allowed;position:relative}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.35}
.sb-item.active .sb-dot{opacity:1;box-shadow:0 0 4px currentColor}
.sb-footer{margin-top:auto;padding:10px 14px;border-top:1px solid var(--bd);font-size:9px;color:var(--t3);line-height:1.75;font-family:var(--mono)}
.sb-item.sb-d .sb-dot{background:var(--gold);opacity:.5}
.sb-item.sb-d:hover:not(.disabled){color:var(--gold);background:var(--dim-go)}
.sb-item[data-star="2026"]::after{
  content:'★ 2026';position:absolute;right:10px;
  font-family:var(--mono);font-size:8px;font-weight:700;letter-spacing:.5px;
  color:var(--gold);background:var(--dim-go);border:1px solid var(--bd-go);
  border-radius:3px;padding:2px 5px;
}
.sb-item[data-star="2026"]{padding-right:58px;position:relative}


/* ══ MAIN ══ */
.content-wrap{max-width:860px;width:100%;margin:0 auto;padding:32px 44px 120px;animation:fadeUp .4s ease both;box-sizing:border-box}
.bc{display:flex;align-items:center;gap:8px;font-size:11px;color:var(--t3);margin-bottom:24px;font-family:var(--mono);flex-wrap:wrap}
.bc-sep{opacity:.3}.bc-cur{color:var(--bronze)}.bc-link{color:inherit;text-decoration:none}.bc-link:hover{opacity:.7}
.bc-tab{color:var(--gold);font-weight:600;padding:2px 8px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);letter-spacing:.3px}

/* ══ HERO ══ */
.hero{margin-bottom:28px;padding-bottom:20px;border-bottom:1px solid var(--bdm);position:relative}
.hero::after{content:'';position:absolute;bottom:-1px;left:0;width:60px;height:2px;background:linear-gradient(90deg,var(--bronze),var(--gold));border-radius:1px}
.hero-chapter{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--bronze);opacity:.8;margin-bottom:10px}
.hero-title{font-family:var(--display);font-size:28px;font-weight:700;color:var(--t1);letter-spacing:.3px;line-height:1.15;margin-bottom:10px}
.hero-title span{background:linear-gradient(135deg,var(--bronze-l),var(--gold),var(--parchment));background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 4s linear infinite}
.hero-sub{font-family:var(--serif);font-size:15px;color:var(--t2);line-height:1.65;margin-bottom:18px}
.hero-sub strong{color:var(--t1)}
.hero-chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:4px}
.hchip{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;padding:4px 10px;border-radius:20px;display:inline-flex;align-items:center;gap:4px}
.hchip.br{background:var(--dim-br);color:var(--bronze-l);border:1px solid var(--bd-br)}
.hchip.go{background:var(--dim-go);color:var(--gold);border:1px solid var(--bd-go)}
.hchip.te{background:var(--dim-t);color:var(--teal);border:1px solid var(--bd-t)}
.hchip.re{background:var(--dim-r);color:var(--red);border:1px solid var(--bd-r)}
.hchip.gr{background:var(--dim-g);color:var(--green);border:1px solid var(--bd-g)}
.hchip.pa{background:var(--dim-pa);color:var(--parchment);border:1px solid var(--bd-pa)}

/* ══ COUNTDOWN ══ */
.countdown{font-family:var(--mono);font-size:10px;letter-spacing:1px;color:var(--t3);padding:7px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);display:inline-flex;align-items:center;gap:8px;margin-bottom:20px}
.countdown strong{color:var(--bronze);font-size:13px}

/* ══ TABS ══ */
.tabs{display:flex;gap:0;margin-bottom:20px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);padding:3px;width:100%;max-width:100%;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;-ms-overflow-style:none}
.tabs::-webkit-scrollbar{display:none}
.tab{padding:7px 16px;font-size:11px;font-weight:600;color:var(--t2);cursor:pointer;border-radius:5px;transition:all .18s;white-space:nowrap;font-family:var(--mono);position:relative;z-index:1;background:transparent;border:none;line-height:normal;min-height:44px}
.tab:hover{color:var(--t1)}
.tab:focus-visible{outline:2px solid var(--bronze);outline-offset:2px}
.tab.on{background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));color:#0F0605;font-weight:700;box-shadow:0 2px 18px rgba(220,50,47,.35),inset 0 1px 0 rgba(255,255,255,.1)}
.tab-badge{display:inline-flex;align-items:center;justify-content:center;margin-left:5px;font-size:9px;color:var(--green);opacity:.9;font-weight:700}
.tab-lock{font-family:var(--mono);font-size:8px;font-weight:700;letter-spacing:.5px;margin-left:5px;background:var(--dim-go);color:var(--gold);border:1px solid var(--bd-go);border-radius:3px;padding:1px 5px}
.tab-done{display:inline-flex;align-items:center;justify-content:center;margin-left:5px;font-size:9px;color:var(--green);opacity:.9;font-weight:700}
/* ══ TIP BAR ══ */
.tip-bar{position:fixed;bottom:16px;right:16px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r3);padding:10px 14px;font-family:var(--mono);font-size:10px;color:var(--t2);max-width:260px;box-shadow:0 4px 20px rgba(0,0,0,.4);z-index:190;display:none;animation:fadeUp .3s ease;line-height:1.5}
.tip-bar.show{display:block}
.tip-bar-close{float:right;cursor:pointer;color:var(--t3);margin-left:8px;font-size:12px}
.tip-bar strong{color:var(--gold)}
/* ══ DISCERE BANNER ══ */
.discere-banner{background:linear-gradient(135deg,rgba(220,50,47,.12),rgba(232,201,122,.08));border:1px solid var(--bd-br);border-radius:var(--r3);padding:14px 18px;margin:20px 0;display:flex;align-items:center;gap:14px;cursor:pointer;transition:all .18s}
.discere-banner:hover{border-color:var(--bdl);background:linear-gradient(135deg,rgba(220,50,47,.18),rgba(232,201,122,.12))}
.discere-ico{font-size:28px;flex-shrink:0}
.discere-txt{flex:1}
.discere-ttl{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);margin-bottom:3px}
.discere-sub{font-family:var(--serif);font-size:12.5px;color:var(--t3);line-height:1.4}
.discere-arrow{color:var(--bronze);font-size:18px;flex-shrink:0}
/* ══ SCORE HISTORY ══ */
.score-hist{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:14px 18px;margin:16px 0}
.score-hist-lbl{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--t3);margin-bottom:10px}
.score-hist-rows{display:flex;flex-direction:column;gap:6px}
.score-hist-row{display:flex;align-items:center;gap:10px;font-family:var(--mono);font-size:11px}
.score-hist-bar{flex:1;height:6px;background:var(--bd);border-radius:3px;overflow:hidden}
.score-hist-fill{height:100%;background:linear-gradient(90deg,var(--bronze),var(--gold));border-radius:3px;transition:width .5s ease}
.score-hist-val{color:var(--gold);min-width:36px;text-align:right}
.score-hist-date{color:var(--t3);font-size:9px;min-width:48px}
/* ══ FROM BANNER ══ */
.from-banner{background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r2);padding:8px 14px;margin-bottom:18px;font-family:var(--mono);font-size:10px;color:var(--gold);display:none}
.from-banner.show{display:flex;align-items:center;gap:8px}

/* ══ LAYERS ══ */
.layer{display:none!important;scroll-margin-top:50px}
.layer.on{display:block!important;animation:layerIn .28s cubic-bezier(.4,0,.2,1) both}

/* ══ PILLS / TAGS ══ */
.tags{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:22px}
.pill{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;padding:4px 10px;border-radius:20px;display:inline-flex;align-items:center}
.p-br{background:var(--dim-br);color:var(--bronze-l);border:1px solid var(--bd-br)}
.p-go{background:var(--dim-go);color:var(--gold);border:1px solid var(--bd-go)}
.p-r{background:var(--dim-r);color:var(--red);border:1px solid var(--bd-r)}
.p-t{background:var(--dim-t);color:var(--teal);border:1px solid var(--bd-t)}
.p-g{background:var(--dim-g);color:var(--green);border:1px solid var(--bd-g)}
.p-pa{background:var(--dim-pa);color:var(--parchment);border:1px solid var(--bd-pa)}

/* ══ FEATURED QUOTE ══ */
.fq{background:var(--ele);border-left:3px solid var(--bronze);border-radius:0 var(--r3) var(--r3) 0;padding:18px 22px;margin:22px 0;position:relative}
.fq::before{content:'\\275D';position:absolute;top:8px;right:14px;font-size:32px;color:var(--bronze);opacity:.15;font-family:Georgia,serif;line-height:1}
.fq-text{font-family:var(--serif);font-size:16px;font-style:italic;color:var(--t1);line-height:1.7;margin-bottom:8px}
.fq-source{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px}
.fq-source span{color:var(--gold)}

/* ══ BOX SYSTEM ══ */
.box-key{background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r3);padding:16px 18px;margin:18px 0}
.box-key-lbl{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
.box-int{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:16px 18px;margin:18px 0}
.box-int-lbl{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--bronze-l);margin-bottom:10px}
.box-warn{background:rgba(192,66,68,.07);border:1px solid var(--bd-r);border-radius:var(--r3);padding:14px 18px;margin:16px 0}
.box-warn-lbl{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--red);margin-bottom:8px}
.box-signal{background:rgba(107,142,127,.07);border:1px solid var(--bd-t);border-radius:var(--r3);padding:14px 18px;margin:16px 0}
.box-signal-lbl{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--teal);margin-bottom:8px}
.box-signal-txt,.box-int-txt,.box-key-txt,.box-warn-txt,.bw-txt{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65}
.box-signal-txt strong,.box-int-txt strong,.box-key-txt strong,.bw-txt strong{color:var(--t1)}
.box-signal-txt em,.box-int-txt em,.bw-txt em{color:var(--teal);font-style:italic}

/* ══ SECTION HEADER ══ */
.sec-hdr{display:flex;align-items:center;gap:12px;margin:32px 0 16px}
.sec-line{flex:1;height:1px;background:var(--bd)}
.sec-badge{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);white-space:nowrap}

/* ══ TABLE ══ */
.tbl{width:100%;border-collapse:collapse;font-size:13px;margin:16px 0}
.tbl th{background:var(--ele);color:var(--t3);font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:8px 12px;border:1px solid var(--bd);text-align:left}
.tbl td{padding:9px 12px;border:1px solid var(--bd);color:var(--t2);vertical-align:top;line-height:1.5}
.tbl tr:hover td{background:var(--hov);color:var(--t1)}
.tbl td strong{color:var(--t1)}
.tbl td em{color:var(--gold);font-style:italic}
.tbl-wrap{overflow-x:auto;margin:16px 0;border-radius:var(--r2)}

/* ══ SCENE CARDS (pjevanja) ══ */
.scene-list{display:flex;flex-direction:column;gap:12px;margin:18px 0}
.scene-card{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);overflow:hidden;cursor:pointer;transition:border-color .18s}
.scene-card:hover{border-color:var(--bdl)}
.scene-card.open{border-color:var(--bd-br)}
.scene-hdr{display:flex;align-items:center;gap:12px;padding:12px 16px}
.scene-num{font-family:var(--display);font-size:11px;font-weight:700;color:var(--bronze);min-width:28px}
.scene-ttl{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;flex:1}
.scene-tag{font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 8px;border-radius:3px;background:var(--dim-br);color:var(--bronze-l);border:1px solid var(--bd-br)}
.scene-arr{color:var(--t3);font-size:12px;transition:transform .2s}
.scene-card.open .scene-arr{transform:rotate(90deg)}
.scene-body{display:none;padding:0 16px 14px;border-top:1px solid var(--bd)}
.scene-card.open .scene-body{display:block;animation:diagFade .25s ease}
.scene-quote{font-family:var(--serif);font-size:14px;font-style:italic;color:var(--gold);background:var(--dim-go);border-left:2px solid var(--bd-go);padding:10px 14px;margin:12px 0;border-radius:0 var(--r2) var(--r2) 0}
.scene-why{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.6;margin:10px 0}
.scene-why b{color:var(--t1)}
.scene-meta{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.scene-chip{font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 8px;border-radius:3px}

/* ══ QUICK NAV ══ */
.qnav{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;margin:20px 0}
.qnav-btn{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:12px 14px;text-align:left;cursor:pointer;transition:all .15s;display:flex;flex-direction:column;gap:4px}
.qnav-btn:hover{border-color:var(--bdl);background:var(--hov);color:var(--t1)}
.qnav-btn{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.5px;color:var(--bronze-l)}
.qnav-btn span{font-family:var(--font);font-size:11px;font-weight:400;color:var(--t3);letter-spacing:0}

/* ══ AUTHOR CARD ══ */
.ac{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r4);padding:20px;margin:18px 0}
.ac-head{display:flex;align-items:flex-start;gap:16px;margin-bottom:14px}
.ac-avatar{width:52px;height:52px;border-radius:var(--r3);background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:20px;color:#0F0605;font-weight:700;flex-shrink:0}
.ac-info{flex:1}
.ac-name{font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:4px}
.ac-dates{font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1px}
.ac-role{font-size:12px;color:var(--t3);margin-top:2px}
.ac-body{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65}
.ac-body strong{color:var(--t1)}
.ac-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}

/* ══ DIAG ══ */
.diag{background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.diag-intro,.diag-quiz,.diag-result{display:none;padding:22px 26px;animation:diagFade .35s ease}
.diag[data-state="intro"] .diag-intro{display:block}
.diag[data-state="quiz"] .diag-quiz{display:block}
.diag[data-state="result"] .diag-result{display:block}
.diag-intro-title{font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:8px}
.diag-intro-desc{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.6;margin-bottom:16px}
.diag-q-num{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1px;margin-bottom:10px}
.diag-q-text{font-family:var(--serif);font-size:15px;color:var(--t1);line-height:1.6;margin-bottom:16px}
.diag-opts{display:flex;flex-direction:column;gap:8px}
.diag-opt{background:var(--card);border:1px solid var(--bd);border-radius:var(--r2);padding:10px 14px;font-size:13px;color:var(--t2);cursor:pointer;transition:all .15s;font-family:var(--serif)}
.diag-opt:hover{border-color:var(--bdl);color:var(--t1);background:var(--hov)}
.diag-opt.correct{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.diag-opt.wrong{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.diag-prog{height:3px;background:var(--bd);margin-bottom:18px}
.diag-prog-fill{height:100%;background:linear-gradient(90deg,var(--bronze),var(--gold));transition:width .4s ease;border-radius:1px}

/* ══ ALAT (esej) ══ */
.alat-tabs{display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap}
.alat-tab{font-family:var(--mono);font-size:10px;font-weight:700;padding:5px 12px;border-radius:var(--r1);background:var(--ele);border:1px solid var(--bd);color:var(--t3);cursor:pointer;transition:all .15s;letter-spacing:.5px}
.alat-tab.on{background:var(--dim-go);border-color:var(--bd-go);color:var(--gold)}
.alat-pane{display:none}.alat-pane.on{display:block;animation:layerIn .2s ease}
.alat-card{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:16px 18px;margin:10px 0}
.alat-card h4{font-family:var(--display);font-size:12px;font-weight:700;color:var(--bronze-l);margin-bottom:10px;letter-spacing:.5px}
.alat-card p{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65}
.alat-card p strong{color:var(--t1)}
.alat-card p em{color:var(--gold);font-style:italic}
.alat-teza{background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r2);padding:12px 16px;margin:8px 0;font-family:var(--serif);font-size:14px;color:var(--t1);font-style:italic;cursor:pointer;transition:all .15s;position:relative}
.alat-teza:hover{border-color:var(--gold)}
.alat-teza::after{content:'📋';position:absolute;right:10px;top:50%;transform:translateY(-50%);font-size:12px;opacity:.5}
.alat-teza.copied::after{content:'✓';color:var(--green);opacity:1}
.wc-area{width:100%;background:var(--inp);border:1px solid var(--bd);border-radius:var(--r2);padding:12px;color:var(--t1);font-family:var(--serif);font-size:14px;resize:vertical;min-height:120px;line-height:1.6}
.wc-area:focus{outline:none;border-color:var(--bdl)}
.wc-meta{display:flex;justify-content:space-between;align-items:center;margin-top:8px;font-family:var(--mono);font-size:10px;color:var(--t3)}
.wc-count{color:var(--gold)}

/* ══ CITATNIK ══ */
.cit-grid{display:flex;flex-direction:column;gap:10px;margin:18px 0}
.cit-card{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:14px 18px;transition:border-color .15s}
.cit-card:hover{border-color:var(--bdl)}
.cit-text{font-family:var(--serif);font-size:15px;font-style:italic;color:var(--t1);line-height:1.65;margin-bottom:8px}
.cit-meta{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px}
.cit-src{font-family:var(--mono);font-size:9.5px;color:var(--t3)}
.cit-tags{display:flex;gap:5px;flex-wrap:wrap}
.cit-tag{font-family:var(--mono);font-size:8.5px;font-weight:700;padding:2px 6px;border-radius:3px}
.cit-star{cursor:pointer;font-size:14px;color:var(--t3);transition:color .15s}
.cit-star.starred{color:var(--gold)}
.cit-filter{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px}
.cit-fbt{font-family:var(--mono);font-size:9.5px;font-weight:700;padding:4px 10px;border-radius:var(--r1);background:var(--ele);border:1px solid var(--bd);color:var(--t3);cursor:pointer;transition:all .15s}
.cit-fbt.on{background:var(--dim-br);border-color:var(--bd-br);color:var(--bronze-l)}

/* ══ POJMOVNIK ══ */
.poj-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px;margin:18px 0}
.poj-card{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s}
.poj-card:hover{border-color:var(--bdl);background:var(--hov)}
.poj-front{display:flex;justify-content:space-between;align-items:flex-start;gap:8px}
.poj-term{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);margin-bottom:6px}
.poj-cat{font-family:var(--mono);font-size:8.5px;font-weight:700;padding:2px 6px;border-radius:3px}
.poj-def{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.55;display:none}
.poj-card.open .poj-def{display:block;margin-top:8px;padding-top:8px;border-top:1px solid var(--bd);animation:diagFade .2s ease}
.poj-ex{font-family:var(--serif);font-size:12px;color:var(--teal);font-style:italic;margin-top:6px}

/* ══ FLASHCARD ══ */
.fc-wrap{perspective:1000px;margin:20px 0}
.fc-inner{width:100%;height:200px;transform-style:preserve-3d;transition:transform .5s cubic-bezier(.4,0,.2,1);cursor:pointer;position:relative}
.fc-inner.flipped{transform:rotateY(180deg)}
.fc-front,.fc-back{position:absolute;inset:0;backface-visibility:hidden;border-radius:var(--r4);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:24px;text-align:center}
.fc-front{background:var(--ele);border:1px solid var(--bdm)}
.fc-back{background:var(--dim-go);border:1px solid var(--bd-go);transform:rotateY(180deg)}
.fc-label{font-family:var(--mono);font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:12px}
.fc-term{font-family:var(--display);font-size:20px;font-weight:700;color:var(--t1);line-height:1.3}
.fc-def{font-family:var(--serif);font-size:15px;color:var(--t1);line-height:1.6}
.fc-cat{font-family:var(--mono);font-size:9px;color:var(--gold);margin-top:8px}
.fc-nav{display:flex;justify-content:space-between;align-items:center;margin-top:14px}
.fc-btn{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:7px 16px;font-size:12px;font-family:var(--mono);font-weight:700;cursor:pointer;color:var(--t2);transition:all .15s}
.fc-btn:hover{border-color:var(--bdl);color:var(--t1)}
.fc-btn:disabled{opacity:.3;cursor:not-allowed}
.fc-counter{font-family:var(--mono);font-size:11px;color:var(--t3)}
.fc-cat-label{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--bronze);margin-bottom:14px}

/* ══ MATCH GAME ══ */
.mg-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0}
.mg-col{display:flex;flex-direction:column;gap:8px}
.mg-item{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:10px 14px;font-family:var(--serif);font-size:13px;color:var(--t2);cursor:pointer;transition:all .15s;text-align:center;min-height:44px;display:flex;align-items:center;justify-content:center;line-height:1.4}
.mg-item:hover:not(.matched):not(.wrong){border-color:var(--bdl);color:var(--t1);background:var(--hov)}
.mg-item.selected{border-color:var(--bronze);background:var(--dim-br);color:var(--bronze-l)}
.mg-item.matched{border-color:var(--bd-g);background:var(--dim-g);color:var(--green);cursor:default}
.mg-item.wrong{border-color:var(--bd-r);background:var(--dim-r);color:var(--red);animation:shake .3s ease}
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
.mg-status{font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:12px}

/* ══ KVIZ ══ */
.qz-wrap{padding:4px 0}
.qz-start{text-align:center;padding:32px 20px}
.qz-start-ico{font-size:40px;margin-bottom:12px}
.qz-start h3{font-family:var(--display);font-size:18px;color:var(--t1);margin-bottom:8px}
.qz-start p{font-family:var(--serif);font-size:14px;color:var(--t2);margin-bottom:20px;line-height:1.6}
.qz-prog{height:4px;background:var(--bd);border-radius:2px;margin-bottom:20px}
.qz-prog-fill{height:100%;background:linear-gradient(90deg,var(--bronze),var(--gold));border-radius:2px;transition:width .4s ease}
.qz-num{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1px;margin-bottom:10px}
.qz-q{font-family:var(--serif);font-size:16px;color:var(--t1);line-height:1.65;margin-bottom:18px;font-weight:600}
.qz-opts{display:flex;flex-direction:column;gap:9px;margin-bottom:16px}
.qz-opt{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:11px 16px;font-family:var(--serif);font-size:14px;color:var(--t2);cursor:pointer;transition:all .15s;text-align:left}
.qz-opt:hover:not(:disabled){border-color:var(--bdl);color:var(--t1);background:var(--hov)}
.qz-opt.correct{border-color:var(--bd-g);background:var(--dim-g);color:var(--green);cursor:default}
.qz-opt.wrong{border-color:var(--bd-r);background:var(--dim-r);color:var(--red);cursor:default}
.qz-expl{background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r2);padding:12px 16px;font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.6;margin-top:12px}
.qz-expl strong{color:var(--gold)}
.qz-next{display:none}
.qz-result{text-align:center;padding:28px 20px}
.qz-result-ico{font-size:48px;margin-bottom:12px}
.qz-result h3{font-family:var(--display);font-size:22px;color:var(--t1);margin-bottom:8px}
.qz-result-grade{font-family:var(--mono);font-size:28px;font-weight:700;color:var(--gold);margin:10px 0}
.qz-result p{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.6;margin-bottom:18px}

/* ══ CHECKPOINT ══ */
.cp-list{display:flex;flex-direction:column;gap:8px;margin:18px 0}
.cp-item{display:flex;align-items:flex-start;gap:12px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:12px 16px;cursor:pointer;transition:all .15s}
.cp-item:hover{border-color:var(--bdl)}
.cp-item.done{border-color:var(--bd-g);background:var(--dim-g)}
.cp-cb{width:20px;height:20px;border:2px solid var(--bd);border-radius:4px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:12px;transition:all .15s;margin-top:1px}
.cp-item.done .cp-cb{background:var(--green);border-color:var(--green);color:#0F0605}
.cp-txt{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.5}
.cp-item.done .cp-txt{color:var(--t1)}
.cp-prog{margin-top:18px}
.cp-prog-label{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px;margin-bottom:6px;display:flex;justify-content:space-between}
.cp-prog-track{height:6px;background:var(--bd);border-radius:3px;overflow:hidden}
.cp-prog-bar{height:100%;background:linear-gradient(90deg,var(--bronze),var(--gold));border-radius:3px;transition:width .5s cubic-bezier(.4,0,.2,1)}
.cp-final{text-align:center;padding:28px 20px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r4);margin:20px 0;display:none}
.cp-final.show{display:block;animation:fadeUp .4s ease}
.cp-final-ico{font-size:44px;margin-bottom:10px}
.cp-final-title{font-family:var(--display);font-size:20px;color:var(--gold);margin-bottom:8px}
.cp-final-msg{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65;margin-bottom:18px}

/* ══ AUTH BOX ══ */
.auth-box{background:rgba(220,50,47,.05);border:1px solid var(--bd-br);border-radius:var(--r3);padding:14px 18px;margin:18px 0}
.auth-ttl{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--bronze-l);margin-bottom:8px}
.auth-txt{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.65}
.auth-txt strong{color:var(--t1)}
.auth-txt em{color:var(--bronze-l)}

/* ══ REVEAL LOCK ══ */
.reveal-lock{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));border:none;border-radius:var(--r2);padding:10px 20px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.5px;color:#0F0605;cursor:pointer;transition:all .18s;display:inline-flex;align-items:center;gap:8px}
.reveal-lock:hover{opacity:.85;transform:translateY(-1px)}
.reveal-lock-btn{background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));border:none;border-radius:var(--r2);padding:11px 22px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.5px;color:#0F0605;cursor:pointer;transition:all .18s}
.reveal-lock-btn:hover{opacity:.85;transform:translateY(-1px)}
.fcb{background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);padding:9px 18px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.5px;color:var(--t2);cursor:pointer;transition:all .15s}
.fcb:hover{border-color:var(--bdl);color:var(--t1)}
.fcb.primary{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));border-color:transparent;color:#0F0605}
.fcb.primary:hover{opacity:.85}

/* ══ MISC ══ */
.nb{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.5px;cursor:pointer;color:var(--bronze-l);text-decoration:underline;text-underline-offset:3px}
.nb:hover{color:var(--gold)}
p{font-family:var(--serif);font-size:14.5px;color:var(--t2);line-height:1.7;margin-bottom:12px}
p strong{color:var(--t1)}
p em{color:var(--gold);font-style:italic}
h3{font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin:20px 0 10px;letter-spacing:.3px}
h4{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);margin:16px 0 8px;letter-spacing:.5px}
ul,ol{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.7;padding-left:20px;margin-bottom:12px}
ul li,ol li{margin-bottom:4px}
ul li strong,ol li strong{color:var(--t1)}
.mid{display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap}
.sc{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r4);padding:18px 20px;margin:16px 0}
.sc-name{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);margin-bottom:6px}
.sc-desc{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6}
.sc-desc b{color:var(--t1)}
.sc-desc em{color:var(--teal);font-style:italic}
.sc-kod{font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:6px}

/* ══ SC-GRID (icon grid za brzi pregled) ══ */
.sc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin:16px 0}
.sc-ico{margin-bottom:10px;display:inline-block}

/* ══ FC-SCENE (H11 flashcard flip scene) ══ */
.fc-scene{width:100%;max-width:100%;perspective:1000px;cursor:pointer;height:220px}
.fc-scene .fc-inner{width:100%;height:100%;position:relative;transform-style:preserve-3d;transition:transform .45s cubic-bezier(.4,0,.2,1)}
.fc-scene.flipped .fc-inner{transform:rotateY(180deg)}
.fc-scene .fc-front,.fc-scene .fc-back{position:absolute;inset:0;backface-visibility:hidden;border-radius:var(--r4);padding:28px 32px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}
.fc-scene .fc-front{background:linear-gradient(135deg,var(--ele),var(--card));border:1px solid var(--bdm)}
.fc-scene .fc-back{background:linear-gradient(135deg,var(--card),var(--hov));border:1px solid var(--bd-go);transform:rotateY(180deg)}
.fc-hint{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1px}
.fc-progress{display:flex;gap:4px;flex-wrap:wrap;justify-content:center;max-width:400px}
.fc-dot{width:8px;height:8px;border-radius:50%;background:var(--bd);transition:background .2s}
.fc-dot.seen{background:var(--bronze)}
.fc-dot.known{background:var(--green)}

/* ══ TIMELINE ══ */
.timeline{position:relative;padding:20px 0 10px 30px;margin:18px 0}
.timeline::before{content:'';position:absolute;left:8px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--bronze) 0%,var(--gold) 50%,var(--parchment) 100%);border-radius:1px}
.tl-event{position:relative;padding:10px 14px 14px 20px;margin-bottom:8px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);transition:border-color .15s}
.tl-event:hover{border-color:var(--bdl)}
.tl-event::before{content:'';position:absolute;left:-30px;top:16px;width:14px;height:14px;border-radius:50%;background:var(--bg);border:2px solid var(--bronze);box-shadow:0 0 8px rgba(220,50,47,.4)}
.tl-event.milestone::before{background:var(--gold);border-color:var(--gold);box-shadow:0 0 12px var(--gold)}
.tl-year{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;color:var(--bronze);margin-bottom:3px}
.tl-event.milestone .tl-year{color:var(--gold)}
.tl-title{font-family:var(--serif);font-size:14px;font-weight:600;color:var(--t1);margin-bottom:3px}
.tl-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5}
.tl-desc em{color:var(--gold);font-style:italic}

/* ══ KEYBOARD HINT ══ */
.kbd{display:inline-block;padding:1px 6px;font-family:var(--mono);font-size:10px;font-weight:700;background:var(--card);border:1px solid var(--bdm);border-radius:3px;color:var(--t2);box-shadow:0 1px 0 var(--bg);margin:0 2px}
.kbd-hint{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px;margin-top:8px;text-align:center}

/* ══ READ PROGRESS BAR + BTT ══ */
.read-progress{position:fixed;top:0;left:0;right:0;height:3px;background:transparent;z-index:400;pointer-events:none}
.read-progress-bar{height:100%;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));width:0%;transition:width .15s ease;border-radius:0 2px 2px 0}
.btt{position:fixed;bottom:24px;right:24px;z-index:100;width:40px;height:40px;background:var(--sur);border:1px solid var(--bdm);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;color:var(--t2);transition:all .2s;opacity:0;pointer-events:none;font-family:var(--mono)}
.btt.show{opacity:1;pointer-events:auto}
.btt:hover{color:var(--bronze);border-color:var(--bronze)}

/* ══ NAV-ROW (tab bottom navigation) ══ */
.nav-row{display:flex;justify-content:space-between;align-items:center;margin-top:32px;padding-top:20px;border-top:1px solid var(--bd)}
.nb-btn{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t2);cursor:pointer;padding:9px 14px;border:1px solid var(--bdm);border-radius:var(--r2);background:var(--ele);transition:all .15s;text-decoration:none}
.nb-btn:hover{color:var(--t1);border-color:var(--bronze);background:var(--hov)}
.nb-btn.primary{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));border-color:transparent;color:#0F0605;font-weight:700}
.nb-btn.primary:hover{opacity:.85}
.nb-btn.off{opacity:.3;cursor:not-allowed;pointer-events:none}

/* ══ AUTHOR-CARD EXTENDED ══ */
.author-card{border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:20px 0;background:var(--sur);transition:border-color .2s}
.ac-header{padding:18px 22px 14px;background:linear-gradient(135deg,var(--ele),var(--card));border-bottom:1px solid var(--bdm);display:flex;align-items:flex-start;gap:16px}
.ac-monogram{width:52px;height:52px;border-radius:var(--r3);background:linear-gradient(135deg,var(--bronze-d),var(--bronze));display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:22px;font-weight:700;color:var(--gold);flex-shrink:0;box-shadow:0 4px 20px rgba(220,50,47,.3)}
.ac-meta{flex:1;min-width:0}
.ac-name{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);margin-bottom:4px;letter-spacing:.3px}
.ac-dates{font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1px}
.ac-body{padding:18px 22px}
.ac-body p{font-family:var(--serif);font-size:14.5px;color:var(--t2);line-height:1.65;margin-bottom:12px}
.ac-body strong{color:var(--t1)}.ac-body em{color:var(--gold);font-style:italic}
.ac-works{margin-top:14px;padding-top:14px;border-top:1px solid var(--bd)}
.ac-works-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:10px}
.ac-work-item{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--bd)}
.ac-work-item:last-child{border-bottom:none;padding-bottom:0}
.ac-badge{font-size:18px;flex-shrink:0;margin-top:1px}
.ac-work-title{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);margin-bottom:3px;letter-spacing:.5px}
.ac-work-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;margin-bottom:5px}
.ac-work-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5}
.ac-work-desc strong{color:var(--t1)}

/* ══ WC-WRAP (H11 esej writer) ══ */
.wc-wrap{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.wc-header{padding:14px 18px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
.wc-lbl{font-family:var(--display);font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--bronze-l)}
.wc-stats{display:flex;gap:16px;flex-wrap:wrap}
.wc-stat{text-align:center}
.wc-stat-num{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);display:block}
.wc-stat-lbl{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1px;text-transform:uppercase}
.wc-stat.ok .wc-stat-num{color:var(--green)}
.wc-stat.critical .wc-stat-num{color:var(--red)}
.wc-body{padding:14px 18px}
.wc-ta{width:100%;min-height:200px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);font-family:var(--serif);font-size:14px;padding:12px;resize:vertical;line-height:1.65;box-sizing:border-box}
.wc-ta:focus{outline:none;border-color:var(--bronze)}
.wc-prog{height:5px;background:var(--bd);border-radius:3px;overflow:hidden;margin-top:12px}
.wc-prog-bar{height:100%;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));border-radius:3px;transition:width .4s ease}
.wc-prog.pass .wc-prog-bar{background:linear-gradient(90deg,var(--green),var(--teal))}
.wc-prog-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);margin-top:6px;text-align:right}
.wc-actions{display:flex;gap:8px;margin-top:12px}
.wc-btn{padding:8px 16px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;border-radius:var(--r2);cursor:pointer;border:1px solid var(--bdm);background:var(--ele);color:var(--t2);transition:all .15s}
.wc-btn:hover{color:var(--t1);border-color:var(--bronze)}

/* ══ QZ-SCORE (large) + QZ-WRONG ══ */
.qz-score-big{font-family:var(--display);font-size:68px;font-weight:700;background:linear-gradient(135deg,var(--bronze),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;margin-bottom:8px}
.qz-grade{font-family:var(--display);font-size:18px;color:var(--t1);letter-spacing:1.5px;margin-bottom:6px}
.qz-msg{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.5;margin-bottom:20px}
.qz-wrong-item{padding:10px 14px;border-bottom:1px solid var(--bd);margin-top:4px}
.qz-wrong-q{font-family:var(--serif);font-size:13px;color:var(--t2);margin-bottom:4px}
.qz-wrong-a{font-family:var(--mono);font-size:10px;color:var(--green)}

/* ══ CP-GRID (H11 style) ══ */
.cp-grid{display:flex;flex-direction:column;gap:8px;margin:18px 0 24px}
.cp-box{width:24px;height:24px;border-radius:6px;border:2px solid var(--bdl);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;transition:all .15s}
.cp-item.done .cp-box{background:var(--green);border-color:var(--green);color:#0F0605}
.cp-hint{font-family:var(--mono);font-size:10px;color:var(--t3);margin-left:auto;text-transform:uppercase;letter-spacing:.5px;white-space:nowrap;padding:2px 6px;background:var(--ele);border:1px solid var(--bd);border-radius:3px}
.cp-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px}

/* ══ BW-BOX (rich box-warn with icon + title) ══ */
.bw-ico{font-size:22px;flex-shrink:0}
.bw-body{flex:1;min-width:0}
.bw-title{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--red);margin-bottom:6px}
.bw-txt{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.6}
.bw-txt strong{color:var(--t1)}
.bw-txt em{color:var(--red);font-style:italic}

/* ══ AUTH-LINKS ══ */
.auth-links{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.auth-link{display:inline-block;font-family:var(--mono);font-size:10.5px;color:var(--teal);text-decoration:none;padding:4px 10px;border:1px solid var(--bd-t);border-radius:var(--r1);background:var(--ele);transition:all .15s}
.auth-link:hover{background:var(--dim-t);transform:translateX(2px)}

/* ══ DIAG-BTN ══ */
.diag-btn{padding:10px 18px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-radius:var(--r2);cursor:pointer;border:1px solid var(--bdm);background:var(--ele);color:var(--t2);transition:all .2s}
.diag-btn-primary{background:linear-gradient(135deg,var(--gold),var(--bronze));color:var(--bg);border-color:var(--gold)}
.diag-btn-primary:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(232,201,122,.3)}
.diag-btn-ghost{background:transparent;color:var(--t3);border-color:var(--bd)}
.diag-btn-ghost:hover{color:var(--t1);border-color:var(--bd-br)}

/* ══ DIAG-REC ══ */
.diag-rec{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.6;padding:12px 14px;background:var(--bg);border-left:2px solid var(--bronze);border-radius:0 var(--r2) var(--r2) 0;margin-bottom:14px}
.diag-res-msg{font-family:var(--display);font-size:20px;font-weight:700;color:var(--gold);margin-bottom:10px}

/* ══ CP SUMMARY ══ */
.cp-summary{background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px 18px;margin-top:20px;display:flex;align-items:center;gap:16px}
.cp-sum-pct{font-family:var(--display);font-size:28px;font-weight:700;color:var(--gold);min-width:60px}
.cp-sum-txt{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.5}
.cp-sum-txt strong{color:var(--t1)}

/* ══ PRINT ══ */
@media print{
  body{background:white!important;color:black!important}
  body::before,body::after{display:none!important}
  .sidebar,.tabs,.sb-hamburger,.tip-bar,.discere-banner,.reveal-lock-btn,.fcb{display:none!important}
  .main{width:100%!important;max-width:100%!important;padding:0!important}
  .content-wrap{max-width:100%!important;padding:10px!important}
  .layer{display:block!important;page-break-after:always}
  .box-key,.box-int,.box-warn,.box-signal,.sc,.fq,.ac{border:1px solid #666!important;background:#f5f5f5!important;color:black!important;break-inside:avoid}
  .hero-title,.hero-chapter,h3,h4,.sec-badge,.tl-title,.pojm-term{color:black!important}
  .tbl td,.tbl th{border-color:#888!important;color:black!important}
  .featured-quote{background:#faf6ec!important;border-color:#d4b98c!important;color:black!important;break-inside:avoid}
  .scene-card{border:1px solid #888!important;background:white!important}
  .scene-card .scene-body{display:block!important}
  .pojm-card .pojm-back{display:block!important}
  .pojm-card .pojm-front{display:none!important}
  a{color:black!important;text-decoration:none!important}
  .qnav-btn,.countdown,.tip-bar,.diag{display:none!important}
}

/* ══ FEATURED-QUOTE (H11 pattern) ══ */
.featured-quote{display:flex;gap:14px;padding:20px 22px;background:linear-gradient(135deg,rgba(212,185,140,.04),rgba(220,50,47,.02));border:1px solid var(--bdm);border-left:3px solid var(--parchment);border-radius:var(--r3);margin:14px 0;position:relative;word-break:break-word;overflow:hidden;transition:border-color .2s}
.featured-quote:hover{border-color:var(--bd-pa);box-shadow:0 2px 12px rgba(212,185,140,.06)}
.fq-mark{font-family:var(--display);font-size:52px;color:var(--parchment);opacity:.3;line-height:1;flex-shrink:0;margin-top:-8px}
.fq-body{flex:1;min-width:0}
.fq-text{font-family:var(--serif);font-size:16px;font-style:italic;color:var(--t1);line-height:1.6;margin-bottom:8px}
.fq-meta{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px}
.fq-copy{background:none;border:1px solid var(--bd);border-radius:var(--r1);color:var(--t3);font-size:12px;padding:4px 8px;cursor:pointer;font-family:var(--mono);transition:all .15s;flex-shrink:0;align-self:flex-start}
.fq-copy:hover{color:var(--gold);border-color:var(--bd-go);background:var(--dim-go)}
.fq-copy.copied{color:var(--green);border-color:var(--bd-g);background:var(--dim-g)}
.fq-napamet{position:absolute;top:-1px;right:40px;font-family:var(--mono);font-size:8px;font-weight:700;letter-spacing:1px;color:var(--gold);background:var(--dim-go);border:1px solid var(--bd-go);border-radius:0 0 4px 4px;padding:2px 7px}

/* ══ POJM-CARD (H11 pattern — grid + flip) ══ */
.pojm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;margin:16px 0}
.pojm-card{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:border-color .15s}
.pojm-card:hover,.pojm-card.flip{border-color:var(--bdm)}
.pojm-card.flip{background:var(--card)}
.pojm-front,.pojm-back{transition:all .25s ease}
.pojm-card.flip .pojm-front{display:none}
.pojm-card:not(.flip) .pojm-back{display:none}
.pojm-term{font-family:var(--display);font-size:13px;font-weight:700;color:var(--gold);margin-bottom:4px;letter-spacing:.3px}
.pojm-hint{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase}
.pojm-def{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.55}
.pojm-def strong{color:var(--t1)}
.pojm-def em{color:var(--gold)}
.pojm-filters{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}
.pojm-filter{padding:6px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;border-radius:20px;cursor:pointer;border:1px solid var(--bd);background:none;color:var(--t3);transition:all .15s}
.pojm-filter.on,.pojm-filter:hover{color:var(--bronze-l);border-color:var(--bd-br);background:var(--dim-br)}

/* ══ POJM MODE (grid/flashcard toggle) ══ */
.pojm-mode-row{display:flex;gap:8px;margin-bottom:16px;align-items:center}
.pojm-mode-btn{padding:7px 16px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;border-radius:20px;cursor:pointer;border:1px solid var(--bdm);background:none;color:var(--t3);transition:all .15s}
.pojm-mode-btn.on{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:var(--gold);border-color:transparent}

/* ══ RESPONSIVE ══ */
@media(max-width:900px){
  .content-wrap{padding:24px 20px 100px}
  .poj-grid{grid-template-columns:1fr}
  .mg-grid{grid-template-columns:1fr}
  .mg-col{flex-direction:row;flex-wrap:wrap}
  .mg-item{flex:1;min-width:120px}
}
@media(max-width:600px){
  .content-wrap{padding:16px 14px 90px}
  .hero-title{font-size:22px}
  .qnav{grid-template-columns:1fr 1fr}
  .bc-tab,.bc-tab-sep{display:none}
  .tabs{width:100%;max-width:100%;overflow-x:auto;padding:2px}
  .tab{font-size:8px;padding:5px 6px;letter-spacing:0;min-height:38px;flex-shrink:0;white-space:nowrap}
  .layer.on{padding-top:52px}
  .fc-inner{height:170px}
  .poj-grid{grid-template-columns:1fr}
  .tbl-wrap{font-size:12px}
  .diag-intro,.diag-quiz,.diag-result{padding:16px}
  .pojm-grid{grid-template-columns:1fr!important}
  .pojm-filter{padding:5px 9px;font-size:8.5px;letter-spacing:.5px}
  #cit-filters .pojm-filter{padding:5px 9px;font-size:8.5px}
  .featured-quote{padding:14px 12px;gap:10px;margin:10px 0}
  .fq-mark{font-size:36px;margin-top:-2px;flex-shrink:0}
  .fq-text{font-size:14px;line-height:1.5}
  .fq-copy{display:none}
}


#diag0[data-state="dismissed"]{display:none}

/* ═══════════════════════════════════
   CROSS-CHAPTER NAVIGATION
═══════════════════════════════════ */
.chapter-nav-wrap{
  margin:48px auto 32px;
  max-width:920px;
  padding:0 20px;
}
.chapter-nav-hdr{
  text-align:center;
  margin-bottom:24px;
}
.chapter-nav-title{
  font-family:var(--display);
  font-size:20px;
  font-weight:700;
  color:var(--t1);
  margin-bottom:6px;
}
.chapter-nav-sub{
  font-family:var(--serif);
  font-size:13px;
  color:var(--t3);
  font-style:italic;
}
.chapter-nav-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
  margin-bottom:28px;
}
.chapter-nav-card{
  display:flex;
  align-items:center;
  gap:14px;
  padding:16px 18px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  text-decoration:none;
  color:inherit;
  transition:all .25s ease;
  cursor:pointer;
}
.chapter-nav-card:hover{
  border-color:var(--gold);
  background:linear-gradient(135deg, var(--ele), rgba(233,180,70,.06));
  transform:translateY(-2px);
  box-shadow:0 8px 24px rgba(0,0,0,.25);
}
.chapter-nav-prev{text-align:left}
.chapter-nav-next{text-align:right;flex-direction:row}
.chapter-nav-next .chapter-nav-meta{flex:1}
.chapter-nav-arrow{
  font-size:24px;
  color:var(--gold);
  font-weight:700;
  flex-shrink:0;
}
.chapter-nav-meta{
  flex:1;
  display:flex;
  flex-direction:column;
  gap:4px;
}
.chapter-nav-pill{
  font-family:var(--mono);
  font-size:9px;
  letter-spacing:1.5px;
  color:var(--t3);
  text-transform:uppercase;
  font-weight:700;
}
.chapter-nav-pill-next{color:var(--gold)}
.chapter-nav-name{
  font-family:var(--display);
  font-size:15px;
  font-weight:700;
  color:var(--t1);
}
.chapter-nav-desc{
  font-family:var(--serif);
  font-size:12px;
  color:var(--t2);
  font-style:italic;
}
.chapter-nav-related{
  padding:18px;
  background:rgba(255,255,255,.02);
  border:1px solid var(--bd);
  border-radius:var(--r2);
}
.chapter-nav-related-ttl{
  font-family:var(--mono);
  font-size:11px;
  letter-spacing:1.5px;
  color:var(--gold);
  margin-bottom:12px;
  text-transform:uppercase;
}
.chapter-nav-related-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:8px;
}
.chapter-nav-mini{
  display:flex;
  align-items:center;
  gap:10px;
  padding:10px 12px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r1);
  text-decoration:none;
  color:inherit;
  transition:all .2s ease;
  font-size:12.5px;
}
.chapter-nav-mini:hover{
  border-color:var(--gold);
  color:var(--gold);
}
.chapter-nav-mini-code{
  font-family:var(--mono);
  font-size:10px;
  letter-spacing:1px;
  color:var(--gold);
  font-weight:700;
  background:rgba(233,180,70,.1);
  padding:2px 6px;
  border-radius:4px;
}
.chapter-nav-mini-name{
  font-family:var(--serif);
  color:var(--t2);
}
@media (max-width:640px){
  .chapter-nav-grid{grid-template-columns:1fr}
  .chapter-nav-next{flex-direction:row}
}


/* TIER INDICATOR — Workspace badge */
.ws-tier-indicator {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--ele, #1f1414);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.ws-tier-indicator.ws-tier-free {
  border-left: 3px solid var(--t3, #888);
}

.ws-tier-indicator.ws-tier-free.ws-tier-full {
  border-left: 3px solid var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233,180,70,0.06), var(--ele, #1f1414));
}

.ws-tier-indicator.ws-tier-standard {
  border-left: 3px solid var(--blue, #4a90d9);
  background: linear-gradient(135deg, rgba(74,144,217,0.04), var(--ele, #1f1414));
}

.ws-tier-indicator.ws-tier-pro {
  border-left: 3px solid var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233,180,70,0.06), var(--ele, #1f1414));
}

.ws-tier-indicator .ws-tier-icon {
  font-size: 18px;
  flex-shrink: 0;
}

.ws-tier-indicator .ws-tier-text {
  flex: 1;
  font-size: 13px;
  color: var(--t2, #c5b8aa);
  line-height: 1.4;
  font-family: var(--mono, monospace);
}

.ws-tier-indicator .ws-tier-text strong {
  color: var(--t1, #f4ede5);
}

.ws-tier-indicator .ws-tier-cta {
  background: var(--gold, #e9b446);
  color: #0F0605;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  font-family: var(--mono, monospace);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.ws-tier-indicator .ws-tier-cta:hover {
  background: var(--gold-hover, #d4a13e);
  transform: translateY(-1px);
}

@media (max-width: 720px) {
  .ws-tier-indicator {
    padding: 10px 12px;
    gap: 8px;
  }
  .ws-tier-indicator .ws-tier-text {
    font-size: 12px;
  }
}

/* TIER_SYSTEM_CSS_INJECTED */
/* ═══════════════════════════════════════════════════
   MATURIRAJ.HR — TIER SYSTEM CSS
   Paywall modal + sidebar badge + tier indicators
   ═══════════════════════════════════════════════════ */

/* ───────── PAYWALL OVERLAY ───────── */
.mt-paywall-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: mt-fade-in 0.2s ease;
}

@keyframes mt-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ───────── PAYWALL MODAL ───────── */
.mt-paywall-modal {
  position: relative;
  background: var(--bg2, #1a1a1a);
  border: 1px solid var(--bd, #333);
  border-radius: 18px;
  max-width: 920px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.5);
  padding: 32px 28px;
  animation: mt-slide-up 0.3s ease;
}

@keyframes mt-slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.mt-paywall-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--bd, #333);
  color: var(--t2, #aaa);
  font-size: 22px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  line-height: 1;
}

.mt-paywall-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--t1, #fff);
  border-color: var(--gold, #e9b446);
}

/* ───────── PAYWALL HEADER ───────── */
.mt-paywall-header {
  text-align: center;
  margin-bottom: 28px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--bd, #333);
}

.mt-paywall-icon {
  font-size: 48px;
  margin-bottom: 8px;
}

.mt-paywall-title {
  font-family: var(--display, 'Fraunces', serif);
  font-size: 24px;
  font-weight: 800;
  color: var(--t1, #fff);
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

.mt-paywall-subtitle {
  font-size: 14px;
  color: var(--t2, #aaa);
  line-height: 1.5;
  max-width: 520px;
  margin: 0 auto;
}

/* ───────── PAYWALL TIERS ───────── */
.mt-paywall-tiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.mt-paywall-tier {
  position: relative;
  padding: 24px 22px;
  background: var(--ele, #222);
  border: 2px solid var(--bd, #333);
  border-radius: 14px;
  transition: all 0.2s ease;
}

.mt-paywall-tier:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.mt-paywall-tier-recommended {
  border-color: var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233, 180, 70, 0.06), var(--ele, #222));
  box-shadow: 0 0 0 4px rgba(233, 180, 70, 0.08);
}

.mt-paywall-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gold, #e9b446);
  color: #0F0605;
  padding: 4px 12px;
  border-radius: 12px;
  font-family: var(--mono, monospace);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.mt-paywall-tier-name {
  font-family: var(--display, 'Fraunces', serif);
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 8px;
  color: var(--t1, #fff);
}

.mt-paywall-tier-standard .mt-paywall-tier-name {
  color: var(--blue, #4a90d9);
}

.mt-paywall-tier-pro .mt-paywall-tier-name {
  color: var(--gold, #e9b446);
}

.mt-paywall-tier-price {
  font-family: var(--mono, monospace);
  font-size: 32px;
  font-weight: 800;
  color: var(--t1, #fff);
  margin-bottom: 14px;
  line-height: 1;
}

.mt-paywall-tier-price span {
  font-size: 14px;
  color: var(--t3, #888);
  font-weight: 400;
  margin-left: 4px;
}

.mt-paywall-tier-features {
  list-style: none;
  margin: 0 0 18px 0;
  padding: 0;
  font-size: 13px;
  line-height: 1.7;
  color: var(--t2, #ccc);
}

.mt-paywall-tier-features li {
  padding: 4px 0;
  padding-left: 4px;
}

.mt-paywall-tier-features li strong {
  color: var(--t1, #fff);
}

/* ───────── CTA BUTTONS ───────── */
.mt-paywall-cta {
  width: 100%;
  padding: 12px 20px;
  background: var(--blue, #4a90d9);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-family: var(--display, 'Fraunces', serif);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
  letter-spacing: 0.2px;
}

.mt-paywall-cta:hover {
  background: var(--blue-hover, #3578bf);
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(74, 144, 217, 0.3);
}

.mt-paywall-cta-pro {
  background: var(--gold, #e9b446);
  color: #0F0605;
}

.mt-paywall-cta-pro:hover {
  background: var(--gold-hover, #d4a13e);
  box-shadow: 0 6px 18px rgba(233, 180, 70, 0.3);
}

/* ───────── PAYWALL FOOTER ───────── */
.mt-paywall-footer {
  text-align: center;
  font-size: 12px;
  color: var(--t3, #888);
  padding-top: 18px;
  border-top: 1px solid var(--bd, #333);
}

.mt-paywall-link {
  color: var(--blue, #4a90d9);
  text-decoration: none;
  font-family: var(--mono, monospace);
  font-size: 11px;
  letter-spacing: 0.5px;
}

.mt-paywall-link:hover {
  color: var(--gold, #e9b446);
  text-decoration: underline;
}

.mt-paywall-link-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.mt-paywall-divider {
  margin: 0 8px;
  color: var(--t3, #888);
}

/* ───────── SIDEBAR TIER BADGE ───────── */
.mt-tier-badge {
  margin: 12px;
  padding: 10px 12px;
  background: var(--ele, #222);
  border: 1px solid var(--bd, #333);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
}

.mt-tier-badge-free {
  border-left: 3px solid var(--t3, #888);
}

.mt-tier-badge-standard {
  border-left: 3px solid var(--blue, #4a90d9);
}

.mt-tier-badge-pro {
  border-left: 3px solid var(--gold, #e9b446);
  background: linear-gradient(135deg, rgba(233, 180, 70, 0.04), var(--ele, #222));
}

.mt-tier-badge-label {
  font-family: var(--mono, monospace);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: var(--t1, #fff);
}

.mt-tier-badge-cta {
  background: var(--gold, #e9b446);
  color: #0F0605;
  border: none;
  padding: 4px 10px;
  border-radius: 12px;
  font-family: var(--mono, monospace);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.mt-tier-badge-cta:hover {
  background: var(--gold-hover, #d4a13e);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(233, 180, 70, 0.3);
}

/* ───────── MOBILE ───────── */
@media (max-width: 720px) {
  .mt-paywall-modal {
    padding: 24px 20px;
    border-radius: 14px;
  }
  
  .mt-paywall-title {
    font-size: 20px;
  }
  
  .mt-paywall-icon {
    font-size: 40px;
  }
  
  .mt-paywall-tiers {
    grid-template-columns: 1fr;
  }
  
  .mt-paywall-tier-price {
    font-size: 28px;
  }
  
  .mt-tier-badge {
    margin: 8px;
    padding: 8px 10px;
  }
  
  .mt-tier-badge-cta {
    font-size: 9px;
    padding: 3px 8px;
  }
}


/* CHEAT-CARD (auto-injected) */
.cheat-card{background:linear-gradient(135deg,rgba(233,180,70,0.04),var(--card,#1a1010));border:1px solid var(--gold,#e9b446);border-radius:14px;padding:18px 22px}
.cheat-hdr{margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--bdm,#2c1f1f)}
.cheat-eye{font-family:var(--mono,monospace);font-size:10px;font-weight:800;color:var(--gold,#e9b446);letter-spacing:1.2px;margin-bottom:4px}
.cheat-ttl{font-family:var(--serif,'Fraunces',serif);font-size:16px;font-weight:700;color:var(--t1,#f4ede5)}
.cheat-grid{display:grid;grid-template-columns:1fr;gap:12px}
.cheat-col-wide{grid-column:1/-1}

  `;

const SCRIPTS_JS = `/* ═══════════════════════════════════
   GLOBALS & DATA
═══════════════════════════════════ */
const CITATI=[]; /* Legacy H12 array - dead code, replaced by CIT_DATA2 */

const POJMOVI=[]; /* Legacy H12 array - dead code, replaced by POJM_DATA2 */

const KVIZ_Q=[
  {q:'Kada je Smrt Smail-age Čengića prvi put objavljena?',o:['1848. u Saboru','1828. u Danici','1846. u almanahu Iskra','1835. u prvom broju Danice'],t:2,e:'Smrt Smail-age objavljena je 1846. godine u almanahu Iskra u Zadru. Urednik je bio Dimitrije Demeter.'},
  {q:'Tko je autor Smrti Smail-age Čengića?',o:['Ljudevit Gaj','Stanko Vraz','August Šenoa','Ivan Mažuranić'],t:3,e:'Ivan Mažuranić (1814.–1890.), rođen u Novom Vinodolskom, kasnije ban Hrvatske (1873.–1880.). „Pučki ban" — nije plemić.'},
  {q:'Kojoj vrsti djela pripada Smrt Smail-age Čengića?',o:['Junački ep','Romantičarski spjev','Tragedija','Balada'],t:1,e:'Djelo je spjev — kraće narativno djelo u stihu koje objedinjuje epsku, dramsku i lirsku komponentu. Ep je duži (tisuće stihova).'},
  {q:'Koliko pjevanja ima Smrt Smail-age Čengića?',o:['4 — po ugledu na Osmana','7 — prema hrvatskoj epskoj tradiciji','5 — Agovanje, Noćnik, Četa, Harač, Kob','3 — Agovanje, Harač, Kob'],t:2,e:'Djelo ima 5 pjevanja ukupne duljine 1134 stiha. Akronim za pamćenje: A-N-Č-H-K.'},
  {q:'Koji je stih najviše prisutan u djelu?',o:['Heksametar','Štokavski osmerac (4+4) i deseterac (4+6)','Dvanaesterac (6+6)','Samo deseterac'],t:1,e:'Mažuranić koristi osmerac za lirske dionice, deseterac za narativne i svečane. Obje metrike preuzete su iz narodne epike.'},
  {q:'Koje je najduže pjevanje i koliko ima stihova?',o:['III. Četa — 500 stihova','V. Kob — 234 stiha','IV. Harač — 623 stiha','I. Agovanje — 400 stihova'],t:2,e:'IV. Harač je najduže pjevanje (623 stiha), sadrži bitku i aginu smrt — kulminacija djela. V. Kob je najkraće (34 stiha).'},
  {q:'Gdje se odvija radnja I. Agovanja?',o:['Na Cetinju u Crnoj Gori','Na Lovćenu','Na Gackom polju','U Stolcu (Hercegovina) — aginoj kuli'],t:3,e:'Stolac je središte aginog kraljevstva. Tu se muče Crnogorci, ubija Durak, i najavljuje Novičino preobraćenje.'},
  {q:'Što predstavlja II. pjevanje Noćnik?',o:['Obredno uhođenje špijuna','Novičino noćno putovanje iz Stolca na Cetinje','Noćni napad age na selo','Ritual noćnih misterija Crnogoraca'],t:1,e:'Noćnik opisuje Novičinu tajnovitu noćnu seobu iz aginog tabora u Crnu Goru gdje se pokršćava i pridružuje četi radi osvete.'},
  {q:'Što je glavno zbivanje III. Čete?',o:['Bitka Crnogoraca i Turaka','Pokrštenje Novice','Duhovna priprema čete + svećenikov domoljubni govor','Aginovo sudište'],t:2,e:'III. Četa je najmirnije pjevanje — nema akcije, ali je ideološki centar djela. Svećenik blagoslovi borce i legitimira osvetu.'},
  {q:'Što se događa u V. pjevanju Kob?',o:['Novica postaje vladar Crne Gore','Agini sinovi traže osvetu','Crnogorci slave pobjedu','Pustinjak na Lovćenu refleksira o prolaznosti sile'],t:3,e:'Kob ima samo 34 stiha. Pustinjak (Mažuranićev autorski glas) filozofski reflektira o tome da svaka tiranija dočekuje pravednu kaznu.'},
  {q:'Tko je Smail-aga Čengić?',o:['Vođa crnogorske čete','Bosansko-hercegovački muselim (guverner)','Hrvatski ban i plemić','Crnogorski svećenik'],t:1,e:'Smail-aga je bio turski muselim (lokalni guverner) u Hercegovini. Povijesno stvarno ubijen 1840. na Mljetičkom polju u Crnoj Gori.'},
  {q:'Tko je Novica u djelu?',o:['Mlađi Turčin koji uživa u mučenjima','Crnogorski svećenik koji blagoslovi četu','Aga koji naslijeđuje Smail-agu','Durakov sin, agin kavaz — glavni protagonist'],t:3,e:'Novica je jedini individualizirani lik. Od „krvnika Crne Gore" (agin kavaz) preobraća se u osvetnika nakon očeva ubojstva.'},
  {q:'Zašto aga ubija Duraka?',o:['Jer je Durak ukrao harač','Jer je Novica pobjegao','Jer ga je Durak savjetovao da ne izaziva osvetu','Jer je Durak bio kršćanski špijun'],t:2,e:'Durak (u stvarnosti Milutin) je dugogodišnji agin savjetnik. Upozorava agu na pravednu osvetu — aga u bijesu ga pogubljuje. To pokreće Novičinu transformaciju.'},
  {q:'Kako su Crnogorci karakterizirani u djelu?',o:['Kao individualizirani junaci s osobnim linijama','Kao potkupljivi plemići','Kao kolektivni junak — bez individualizacije','Kao mudraci koji izbjegavaju borbu'],t:2,e:'Mažuranić ne individualizira Crnogorce. Oni su simbol slobodarskog naroda općenito — hrabri, šute pred mukama, junački umiru. Tipično romantičarsko.'},
  {q:'Tko je Bauk u djelu?',o:['Crnogorski svećenik','Aginov brat koji ga osveti','Mladić kojeg aga ubija','Jedan od aginih slugu koji pjeva rugalicu mrtvom agi'],t:3,e:'Bauk je ironični svjedok — preživi bitku u IV. Haraču i pjeva rugalicu mrtvom agi. „Tu nek plijen vranom vranu stoji" — tiranin postaje plijen gavrana.'},
  {q:'Što je slavenska antiteza?',o:['Narodno-epska tehnika pitanja–negacije–odgovora','Suprotstavljanje slavenskih i orijentalnih motiva','Stilska figura specifična za baroknu književnost','Oblik rime u štokavskom stihu'],t:0,e:'Slavenska antiteza je tehnika: pitanje → negacija → odgovor. Primjer u II. Noćniku: „Je li hajduk, il\\u2019 uhoda turska? Nit je hajduk... već Novica."'},
  {q:'Što znači citat „Boj se onoga tko je viko bez golema mrijet jada!"?',o:['Tiranin se boji onoga tko nema što izgubiti','Život je uzaludan ako je bez patnje','Mladi ljudi trebaju izbjegavati smrt','Hrabri umiru šutke'],t:0,e:'Durakova opomena Smail-agi u I. Agovanju. Najpoznatiji citat djela — moralna formula koju Mažuranić stavlja u srce spjeva.'},
  {q:'Koja je uloga prirode u IV. Haraču?',o:['Simbol aginog bogatstva','Oluja kao moralni sudac — priroda svrstava se protiv age','Pozadinski ukras za opise krajolika','Prepreka za Crnogorce u napadu'],t:1,e:'Oluja u Haraču je romantičarski motiv — priroda moralno aktivna, pravedno kažnjava tiraniju. Crnogorci napadaju pod zaklonom oluje — pravda i priroda u savezu.'},
  {q:'Što znače turcizmi u djelu (aga, kavaz, muselim, harač)?',o:['Biblijski izrazi iz svećenikovog govora','Riječi turskoga podrijetla koje dočaravaju orijentalni svijet','Hrvatski dijalektalni izrazi','Staroslovenski arhaizmi'],t:1,e:'Mažuranić koristi turcizme za autentičnost konteksta. Nisu ornament — služe dočaranju turske vlasti i svakodnevice.'},
  {q:'Što je aga pisao kao „kerv", „serce", „kerst"?',o:['Dijalektalne varijante štokavštine','Turcizmi iz arapskog','Biblijski arhaizmi','Izvorni pravopis prije Gajeve reforme — er umjesto vokalnog r'],t:3,e:'Mažuranić piše u preporodnoj tranziciji — još uvijek koristi stari pravopis s „er" umjesto vokalnog r. To je predgajevska grafija, svjedočanstvo epohe.'},
  {q:'Kojem razdoblju književnosti pripada djelo?',o:['Hrvatski romantizam / narodni preporod','Realizam 19. st.','Hrvatski barok (17. st.)','Moderna 20. st.'],t:0,e:'Smail-aga je vrhunac hrv. romantizma i narodnog preporoda. Pojavljuje se u istom desetljeću kao Gajeva Danica, standardizacija jezika i nacionalno buđenje.'},
  {q:'Tko je pokrenuo hrvatski narodni preporod?',o:['Ivan Mažuranić — Smail-agom 1846.','Ljudevit Gaj — Danicom 1835.','Antun Mihanović — himnom Lijepa naša','Dimitrije Demeter — almanahom Iskra'],t:1,e:'Gaj 1835. pokreće „Danicu horvatsku, slavonsku i dalmatinsku". Mažuranić je sudionik, ali ne pokretač. Mihanović piše Lijepu našu (1835.).'},
  {q:'Koja je glavna ideja djela?',o:['Individualna sreća u prirodi','Neizbježnost tragičnog ishoda','Religiozna pokora kao put do mira','Prolaznost sile i konačna pobjeda pravde'],t:3,e:'Glavna ideja, izrečena pustinjakom u V. Kobi: svaka tiranija je prolazna, pravda je trajna. Univerzalna romantičarska etika.'},
  {q:'Što predstavlja preobraćenje Novice?',o:['Uniženje pred crkvom','Moralnu transformaciju — od krvnika do osvetnika','Izgubljeni romantičarski bijeg','Etničku izdaju Turaka'],t:1,e:'Novica je jedini individualizirani lik. Njegova preobrazba (krvnik → pokrštenje → osvetnik) pokazuje romantičarsku temu moralnog buđenja kroz osobnu bol.'},
  {q:'Na temelju kojeg stvarnog događaja je djelo napisano?',o:['Hoćimske bitke 1621.','Pogibije Smail-age Čengića u listopadu 1840.','Krbavske bitke 1493.','Ustanka u Crnoj Gori 1815.'],t:1,e:'Smail-aga je stvarno ubijen u listopadu 1840. na Mljetičkom polju. Mažuranić premješta radnju na Gacko polje — pjesnička sloboda.'},
];

const CP_ITEMS=[
  'Znam godinu i mjesto objave Smrti Smail-age Čengića (1846., almanah Iskra u Zadru).',
  'Mogu nabrojati svih 5 pjevanja po redu (Agovanje, Noćnik, Četa, Harač, Kob) i znam duljine (Harač 623, Kob 34).',
  'Razumijem razliku ep / spjev / balada — i zašto je Smail-aga spjev (kratak, lirsko-dramski elementi).',
  'Znam glavne likove i njihove funkcije: Smail-aga (tiranin), Novica (protagonist u preobrazbi), Durak (savjetnik), Crnogorci (kolektiv).',
  'Razumijem Novičinu moralnu transformaciju — od krvnika Crne Gore do krsnog osvetnika (II. Noćnik).',
  'Mogu prepoznati stilska sredstva: slavenska antiteza, epitet, personifikacija prirode, kontrast, biblijska aluzija, kletva.',
  'Znam najpoznatiji citat „Boj se onoga tko je viko bez golema mrijet jada!" i mogu ga interpretirati u preporodnom kontekstu.',
  'Razumijem 3 razine čitanja: konkretnu (povijesni događaj 1840.), nacionalnu (preporodna alegorija), univerzalnu (prolaznost sile).',
  'Znam preporodni kontekst: Ljudevit Gaj, Danica (1835.), gajica, štokavština, Mažuranić kao ban Hrvatske (1873.–1880.).',
  'Mogu usporediti Smrt Smail-age s drugim djelima (Judita, Dubravka, Osman) i prepoznati zajedničke alegorijske motive.',
];

const DIAG0_Q=[
  {q:'U kojoj godini je objavljena Smrt Smail-age Čengića?',o:['1835.','1846.','1848.','1890.'],t:1},
  {q:'Tko je autor Smrti Smail-age Čengića?',o:['Ljudevit Gaj','Stanko Vraz','Ivan Mažuranić','August Šenoa'],t:2},
  {q:'Koliko pjevanja ima Smrt Smail-age Čengića?',o:['3','4','5','6'],t:2},
  {q:'Koje je najduže pjevanje?',o:['Agovanje','Noćnik','Četa','Harač'],t:3},
  {q:'Koje stihove Mažuranić koristi u djelu?',o:['Dvanaesterac i osmerac','Osmerac i deseterac','Heksametar','Sonet'],t:1}
]

/* ═══════════════════════════════════
   TAB SWITCHER
═══════════════════════════════════ */
const TAB_NAMES=['Teorija','5 pjevanja','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];
function sw(n){
  document.querySelectorAll('.tab').forEach((t,i)=>{
    t.classList.toggle('on',i===n);
    t.setAttribute('aria-selected',i===n);
  });
  document.querySelectorAll('.layer').forEach((l,i)=>l.classList.toggle('on',i===n));
  document.getElementById('bc-tab').textContent=TAB_NAMES[n];
  if(n===6)qzInit();
  if(n===5){
    // init drill on first open
    if(!document.getElementById('mg-dynamic').dataset.init){
      document.getElementById('mg-dynamic').dataset.init='1';
      mgInit('easy');
      fcInit();
    }
  }
  window.scrollTo({top:0,behavior:'smooth'});
  closeSb();
}

/* ═══════════════════════════════════
   SIDEBAR
═══════════════════════════════════ */
function openSb(){
  document.getElementById('sidebar').classList.add('mobile-open');
  document.getElementById('overlay').classList.add('show');
}
function closeSb(){
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('overlay').classList.remove('show');
}

/* ═══════════════════════════════════
   COUNTDOWN
═══════════════════════════════════ */
(function(){
  // Datum ispita Hrv. jezik — ljetni rok 2025./2026.
  // Dan 1 (test + sažetak): 15. lipnja 2026.
  // Dan 2 (esej):           16. lipnja 2026.
  // Izvor: NCVVO kalendar 2025./2026.
  const now=new Date();
  const todayLocal=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const dan1=new Date(2026,5,15); // 15. lipnja 2026. — lokalno (month je 0-indexed!)
  const dan2=new Date(2026,5,16); // 16. lipnja 2026.
  const target=todayLocal<=dan1?dan1:dan2; // Prikaži dan 1, pa dan 2
  const diff=Math.round((target-todayLocal)/(1000*60*60*24));
  const el=document.getElementById('cd-days');
  const cw=el?el.closest('.countdown'):null;
  if(!el)return;
  if(diff>0){
    el.textContent=diff;
    if(cw&&diff<=30)cw.style.borderColor='var(--bronze-d)';
    if(cw&&diff<=14)cw.style.borderColor='var(--bronze)';
    if(cw&&diff<=7){cw.style.borderColor='var(--red)';cw.style.color='var(--red)';}
  } else if(diff===0){
    el.textContent='DANAS!';
    if(cw)cw.style.borderColor='var(--gold)';
  } else if(Math.round((dan2-todayLocal)/(1000*60*60*24))===0){
    el.textContent='Esej DANAS!';
    if(cw)cw.style.borderColor='var(--gold)';
  } else {
    el.textContent='prošlo';
  }
})();

/* ═══════════════════════════════════
   SCENES (pjevanja)
═══════════════════════════════════ */
function togScene(card){
  const wasOpen=card.classList.contains('open');
  document.querySelectorAll('.scene-card').forEach(c=>c.classList.remove('open'));
  if(!wasOpen)card.classList.add('open');
}

/* ═══════════════════════════════════
   DIAG0
═══════════════════════════════════ */
let d0idx=0,d0score=0;
function diag0Skip(){
  document.getElementById('diag0').dataset.state='dismissed';
}
function diag0Start(){
  d0idx=0;d0score=0;
  document.getElementById('diag0').dataset.state='quiz';
  d0Show();
}
function d0Show(){
  if(d0idx>=DIAG0_Q.length){diag0End();return;}
  const q=DIAG0_Q[d0idx];
  document.getElementById('d0fill').style.width=((d0idx/DIAG0_Q.length)*100)+'%';
  document.getElementById('d0num').textContent=\`Pitanje \${d0idx+1} / \${DIAG0_Q.length}\`;
  document.getElementById('d0text').textContent=q.q;
  const opts=document.getElementById('d0opts');
  opts.innerHTML='';
  q.o.forEach((o,i)=>{
    const btn=document.createElement('button');
    btn.className='diag-opt';btn.textContent=o;
    btn.onclick=()=>{
      opts.querySelectorAll('.diag-opt').forEach(b=>b.onclick=null);
      if(i===q.t){btn.classList.add('correct');d0score++;}
      else{btn.classList.add('wrong');opts.querySelectorAll('.diag-opt')[q.t].classList.add('correct');}
      setTimeout(()=>{d0idx++;d0Show();},900);
    };
    opts.appendChild(btn);
  });
}
function diag0End(){
  document.getElementById('diag0').dataset.state='result';
  const pct=Math.round(d0score/DIAG0_Q.length*100);
  let msg='', btnTxt='', btnTab=1;
  if(pct>=80){
    msg='<strong>Odlično!</strong> Osnove H12 imaš savladane. Preporučujem Esej alat — tamo su gotove teze za eseje o Petrarci i Calderónu.';
    btnTxt='✍ Esej alat →'; btnTab=2;
  } else if(pct>=60){
    msg='<strong>Dobro!</strong> Nekoliko rupa postoji — provjeri Smail-aga: 5 pjevanja za detalje o svakom pjevanju i interpretaciji.';
    btnTxt='📖 Smail-aga: 5 pjevanja →'; btnTab=1;
  } else {
    msg='<strong>Kreni od osnova.</strong> Preporučujem: Teorija (Sec 01-07) + Pojmovnik (Tab 4). Alegorijska shema i dvanaesterac su ključni — zapis ih napamet.';
    btnTxt='📖 Teorija →'; btnTab=0;
  }
  document.getElementById('d0rtitle').textContent=\`\${d0score} / \${DIAG0_Q.length} — \${pct}%\`;
  document.getElementById('d0rdesc').innerHTML=msg;
  const btn=document.getElementById('d0rbtn');
  if(btn){btn.textContent=btnTxt;btn.onclick=()=>sw(btnTab);}
}
function diag0Reset(){document.getElementById('diag0').dataset.state='intro';}

/* ═══════════════════════════════════
   CITATNIK
═══════════════════════════════════ */
const CAT_COLORS={alegorija:'p-go',vjera:'p-t',judita:'p-br',holofern:'p-r',domoljublje:'p-g',stih:'p-pa'};
let citStars={};
try{citStars=JSON.parse(localStorage.getItem('mt.hrv.h14.cit_stars')||'{}')}catch(e){}
let citActive='sve';

function renderCitati(){
  const grid=document.getElementById('cit-grid');
  if(!grid)return;
  const show=citActive==='sve'?CITATI:CITATI.filter(c=>c.tags.includes(citActive));
  grid.innerHTML=show.map((c,i)=>{
    const idx=CITATI.indexOf(c);
    const starred=citStars[idx]?'starred':'';
    const tagsHTML=c.tags.map(tg=>\`<span class="cit-tag \${CAT_COLORS[tg]||'p-pa'}">\${tg}</span>\`).join('');
    return \`<div class="cit-card">
      <div class="cit-text">\${c.t}</div>
      <div class="cit-meta">
        <span class="cit-src">\${c.s}</span>
        <div class="cit-tags">\${tagsHTML}<span class="cit-star \${starred}" onclick="togStar(\${idx},this)">★</span></div>
      </div>
    </div>\`;
  }).join('');
}
function togStar(i,el){
  citStars[i]=!citStars[i];
  el.classList.toggle('starred',!!citStars[i]);
  try{localStorage.setItem('mt.hrv.h14.cit_stars',JSON.stringify(citStars))}catch(e){}
}
function citFilter(btn,kat){
  document.querySelectorAll('.cit-fbt').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  citActive=kat;
  renderCitati();
}
renderCitati();

/* ═══════════════════════════════════
   POJMOVNIK
═══════════════════════════════════ */
let pojActive='sve';
function renderPojmovi(){
  const grid=document.getElementById('poj-grid');
  if(!grid)return;
  const show=pojActive==='sve'?POJMOVI:POJMOVI.filter(p=>p.kat===pojActive);
  const catCls={stih:'p-pa',stil:'p-t',ep:'p-br',hum:'p-go',aleg:'p-r'};
  grid.innerHTML=show.map(p=>\`
    <div class="poj-card" onclick="this.classList.toggle('open')">
      <div class="poj-front">
        <div class="poj-term">\${p.t}</div>
        <span class="poj-cat \${catCls[p.kat]||'p-pa'}">\${p.kat}</span>
      </div>
      <div class="poj-def">\${p.d}\${p.e?\`<div class="poj-ex">Primjer: \${p.e}</div>\`:''}</div>
    </div>
  \`).join('');
}
function pojFilter(btn,kat){
  document.querySelectorAll('#poj-filter .cit-fbt').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');pojActive=kat;renderPojmovi();
}
renderPojmovi();

/* ═══════════════════════════════════
   ESEJ ALAT
═══════════════════════════════════ */
function alTab(btn,pane){
  document.querySelectorAll('.alat-tab').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.alat-pane').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById(pane).classList.add('on');
}
function cpyTeza(el){
  navigator.clipboard.writeText(el.textContent.trim()).catch(()=>{});
  el.classList.add('copied');
  setTimeout(()=>el.classList.remove('copied'),1500);
}

/* ═══════════════════════════════════
   SCANNER — Analiza ulomka Dubravke
═══════════════════════════════════ */
function scannerCount(){
  const ta = document.getElementById('scanner-in');
  if(!ta) return;
  const txt = ta.value;
  const chars = document.getElementById('scanner-chars');
  const words = document.getElementById('scanner-words');
  if(chars) chars.textContent = txt.length;
  if(words) words.textContent = txt.trim() ? txt.trim().split(/\\s+/).length : 0;
}

function scannerClear(){
  const ta = document.getElementById('scanner-in');
  const out = document.getElementById('scanner-out');
  if(ta){ ta.value=''; scannerCount(); }
  if(out) out.innerHTML = '';
}

function scannerGo(){
  const ta = document.getElementById('scanner-in');
  const out = document.getElementById('scanner-out');
  if(!ta || !out) return;
  const txt = ta.value.trim();
  if(!txt){
    out.innerHTML = '<div class="box-warn" style="margin-top:10px"><div class="bw-body"><div class="bw-txt">Zalijepi stihove iz Smrti Smail-age prije analize.</div></div></div>';
    return;
  }
  const tl = txt.toLowerCase();
  
  // Detekcija likova
  const likovi = [];
  if(/smail|aga\\b|čengić/.test(tl)) likovi.push('Smail-aga Čengić');
  if(/novic/.test(tl)) likovi.push('Novica');
  if(/durak|milutin/.test(tl)) likovi.push('Durak');
  if(/crnogor|brđani/.test(tl)) likovi.push('Crnogorci (kolektiv)');
  if(/svećenik|pop\\b/.test(tl)) likovi.push('Svećenik');
  if(/pustinjak/.test(tl)) likovi.push('Pustinjak');
  if(/mirko/.test(tl)) likovi.push('Mirko');
  if(/bauk/.test(tl)) likovi.push('Bauk');
  if(/omer|jašar|mujo|safer/.test(tl)) likovi.push('Agine sluge');
  
  // Detekcija pjevanja (po ključnim motivima)
  let pjevanje = '';
  if(/stolac|mučenj|kolac|vješanj|lipov|durak|aga\\s+naređ/.test(tl)) pjevanje = 'I. Agovanje (Stolac, mučenja, Durakova smrt)';
  else if(/noć|hajduk|uhoda|kršnij|ćeklić|cetinj|pokršt/.test(tl)) pjevanje = 'II. Noćnik (Novičino putovanje)';
  else if(/četa|svećenik|blagoslov|priprem|grijeh|kajanj/.test(tl)) pjevanje = 'III. Četa (moralna priprema)';
  else if(/gacko|harač|oluja|bitk|gromnj|vran|plijen/.test(tl)) pjevanje = 'IV. Harač (bitka, agina smrt)';
  else if(/lovćen|pustinjak|prolazn|kob\\b|filozof/.test(tl)) pjevanje = 'V. Kob (refleksija o prolaznosti sile)';
  
  // Detekcija stilskih sredstava
  const stila = [];
  if(/je\\s+li\\s|nit\\s+je/.test(tl)) stila.push('Slavenska antiteza (pitanje–negacija–odgovor)');
  if(/mrki|krvnik|silnik|ohol|svil/.test(tl)) stila.push('Epitet');
  if(/grijeh|oprosnik|prika|vaj\\b/.test(tl)) stila.push('Biblijska aluzija / arhaizam');
  if(/oluja|grmi|kiša|tlo\\s+se|priroda/.test(tl)) stila.push('Personifikacija prirode');
  if(/vranom\\s+vran|gladna\\s+miša|kao\\s+vuk/.test(tl)) stila.push('Metafora');
  if(/boj\\s+se|proklet|blaž/.test(tl)) stila.push('Kletva / opomena');
  
  // Detekcija 3 razina čitanja
  const razine = [];
  if(/1840|mljetič|gacko|stvaran/.test(tl)) razine.push('Konkretna (povijesna razina — stvarni događaj 1840.)');
  if(/preporod|ilir|sloboda\\s+narod|hrvatsk|nacional/.test(tl)) razine.push('Nacionalna (preporodna alegorija)');
  if(/tiranij|pravda|prolazn|sila\\s+pad|moral/.test(tl)) razine.push('Univerzalna (filozofska razina)');
  
  // Vjerojatni stih
  const lines = txt.split(/[\\n.!?]/).filter(s => s.trim());
  const avgSyl = lines.length > 0 ? lines.reduce((a,b) => a + b.trim().split(/\\s+/).length, 0) / lines.length : 0;
  let stih = '';
  if(/boj\\s+se\\s+onog|sve\\s+je\\s+grijeh/i.test(tl)) stih = 'Osmerac (4+4) — lirski/svečani ton';
  else if(avgSyl < 4) stih = 'Osmerac (kratki ritam)';
  else if(avgSyl < 6) stih = 'Osmerac (4+4) — narodno-epski';
  else stih = 'Deseterac (4+6) — narativni/svečani';
  
  // Render
  let h = '<div class="box-int" style="margin-top:10px"><div class="box-int-lbl">📊 Rezultat analize ulomka</div><div class="box-int-txt">';
  
  h += '<p><b>🎬 Vjerojatno pjevanje:</b> ' + (pjevanje || '<em>Nedovoljno signala — provjeri kontekst</em>') + '</p>';
  
  h += '<p><b>📏 Vjerojatni stih:</b> ' + (stih || 'Nedovoljno za procjenu') + '</p>';
  
  h += '<p><b>🎭 Likovi u ulomku:</b> ' + (likovi.length ? likovi.join(', ') : '<em>Nisu eksplicitno imenovani — provjeri kontekst</em>') + '</p>';
  
  h += '<p><b>✒ Stilska sredstva:</b> ' + (stila.length ? stila.join(', ') : '<em>Nisu prepoznata bazična sredstva</em>') + '</p>';
  
  h += '<p><b>📊 Razine čitanja koje se aktiviraju:</b> ' + (razine.length ? '<br>• ' + razine.join('<br>• ') : '<em>Nema eksplicitnih oznaka — provjeri kontekst</em>') + '</p>';
  
  h += '<p style="margin-top:10px;padding-top:10px;border-top:1px dashed var(--bd)"><b>🎯 Esejska primjena:</b> Za analizu ovog ulomka: (1) identificiraj iz kojeg je pjevanja, (2) imenuj stih (osmerac ili deseterac), (3) izdvoj 2-3 stilska sredstva s konkretnim primjerom, (4) poveži na barem dvije razine čitanja (konkretna/nacionalna/univerzalna), (5) reci kako ulomak svjedoči o romantičarskim obilježjima (priroda, patos, polarizacija).</p>';
  
  h += '</div></div>';
  out.innerHTML = h;
}


/* Scanner */
function scannerUpdate(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  const txt=ta.value;
  const words=txt.trim()?txt.trim().split(/\\s+/).length:0;
  const lines=txt.split('\\n').filter(function(l){return l.trim().length>0;}).length;
  // Estimate syllables (Croatian: count vowels a,e,i,o,u)
  const syl=words>0?Math.round(txt.replace(/[^aeiouAEIOUčšžđćČŠŽĐĆ]/g,'').length/Math.max(words,1)*10)/10:0;
  const we=document.getElementById('sc-words');if(we)we.querySelector('.wc-stat-num').textContent=words;
  const le=document.getElementById('sc-lines');if(le)le.querySelector('.wc-stat-num').textContent=lines;
  const se=document.getElementById('sc-syl');if(se)se.querySelector('.wc-stat-num').textContent=syl||'—';
  try{localStorage.setItem('mt.hrv.h14.wc_text',txt);}catch(e){}
}
(function(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h14.wc_text');if(sv){ta.value=sv;scannerUpdate();}}catch(e){}
})();

function scanJudita(){
  const txt=document.getElementById('scanner-in').value.trim();
  const out=document.getElementById('scanner-out');
  if(!txt||txt.length<10){out.innerHTML='<div class="box-warn"><div class="box-warn-lbl">⚠ Prazan unos</div><div class="box-warn-txt">Unesite barem jedan stih Judite za analizu.</div></div>';return;}
  
  let findings=[];
  if(/\\d{1,2}\\s*\\+\\s*\\d{1,2}|šest|cezur/i.test(txt))findings.push('🎵 <strong>Metrička napomena:</strong> Tekst sadrži reference na broj slogova ili cezuru — provjeri je li stih dvanaesterac (6+6).');
  if(/judita|udova|lijepa|lipos/i.test(txt))findings.push('👤 <strong>Judita kao lik:</strong> Ovaj ulomak govori o Juditi. Korisni argumenti: psihologizacija, individualnost, alegorijska dimenzija (= Hrvatska).');
  if(/holofern|vojvoda|neprijatel|tursk/i.test(txt))findings.push('⚔️ <strong>Holofern / neprijatelj:</strong> Ovaj ulomak govori o antagonistu. Argumenti: oholost (hybris), alegorija Turaka, moć bez vjere.');
  if(/moli|Gospod|Bog|Isus|vjera|Krist/i.test(txt))findings.push('✝️ <strong>Vjera / molitva:</strong> Religijska dimenzija. Marulić = kršćanski humanist. Bog kao jedini izvor prave moći.');
  if(/Betulija|grad|zid|opsad/i.test(txt))findings.push('🏰 <strong>Betulija:</strong> Alegorija hrv. gradova pod opsadom. Veza: konkretna geografska situacija Dalmacije 1501.');
  if(/slav|pobijed|radost|trijumf/i.test(txt))findings.push('🏆 <strong>Trijumf:</strong> Ovaj ulomak vjerojatno je iz V. ili VI. pjevanja — pobjeda i moralna pouka.');
  if(/invokacij|Ki hoće|slišati|čudesa/i.test(txt))findings.push('📖 <strong>Invokacija:</strong> Početak epa — zaziv čitatelja. Epska konvencija (usp. Homer, Vergilije).');
  if(findings.length===0)findings.push('ℹ️ <strong>Opća napomena:</strong> Ulomak analiziran. Za detalje: provjeri pjevanje iz kojeg potječe (koristite Tab 1 — 5 pjevanja), identificiraj likove i stilska sredstva.');
  
  out.innerHTML=\`<div class="box-int">
    <div class="box-int-lbl">🔍 Analiza ulomka</div>
    \${findings.map(f=>\`<div class="box-signal-txt" style="margin-bottom:8px">• \${f}</div>\`).join('')}
    <div style="margin-top:12px;font-family:var(--mono);font-size:10px;color:var(--t3)">Napomena: automatska analiza. Za dublje tumačenje koristite Tab 2 (Esej alat) i Tab 3 (Citatnik).</div>
  </div>\`;
}

/* ═══════════════════════════════════
   KVIZ
═══════════════════════════════════ */
let qzIdx=0,qzScore=0,qzAnswered=[];
function qzInit(){
  const w=document.getElementById('qz-wrap');
  if(!w||w.dataset.init==='1')return;
  w.dataset.init='1';
  qzRender();
}
function qzRender(){
  const w=document.getElementById('qz-wrap');
  if(!w)return;
  w.innerHTML=\`<div class="qz-wrap" id="qz-inner"></div>\`;
  qzIdx=0;qzScore=0;
  const el=document.getElementById('qz-inner');
  el.innerHTML=\`<div class="qz-start">
    <div class="qz-start-ico">🧠</div>
    <h3>20 pitanja · H12 Judita</h3>
    <p>Pitanja pokrivaju cijelo poglavlje H14: Mažuranić, Smrt Smail-age, romantizam, preporod, 5 pjevanja. Na kraju dobivaš ocjenu i objašnjenja.</p>
    <button class="fcb primary" onclick="qzStart()">Započni kviz →</button>
  </div>\`;
}
function qzStart(){
  qzIdx=0;qzScore=0;qzAnswered=[];
  const el=document.getElementById('qz-inner')||document.getElementById('qz-wrap');
  qzShowQ(el);
}
function qzShowQ(el){
  if(qzIdx>=KVIZ_Q.length){qzEnd(el);return;}
  const q=KVIZ_Q[qzIdx];
  const pct=Math.round((qzIdx/KVIZ_Q.length)*100);
  el.innerHTML=\`
    <div class="qz-prog"><div class="qz-prog-fill" style="width:\${pct}%"></div></div>
    <div class="qz-num">Pitanje \${qzIdx+1} / \${KVIZ_Q.length}</div>
    <div class="qz-q">\${q.q}</div>
    <div class="qz-opts">\${q.o.map((o,i)=>\`<button class="qz-opt" onclick="qzAns(this,\${i})">\${o}</button>\`).join('')}</div>
    <div class="qz-expl" id="qz-expl" style="display:none"></div>
    <div style="text-align:right;margin-top:12px"><button class="fcb qz-next" id="qz-next" onclick="qzNext()" style="display:none">Sljedeće →</button></div>
  \`;
}
function qzAns(btn,i){
  if(document.querySelector('.qz-opt.correct,.qz-opt.wrong'))return;
  const opts=document.querySelectorAll('.qz-opt');
  opts.forEach(b=>b.disabled=true);
  const q=KVIZ_Q[qzIdx];
  const ok=(i===q.t);
  if(ok){btn.classList.add('correct');qzScore++;}
  else{btn.classList.add('wrong');opts[q.t].classList.add('correct');}
  if(!qzAnswered)qzAnswered=[];
  qzAnswered.push({q:q.q,ok,correct:q.o[q.t]});
  const expl=document.getElementById('qz-expl');
  expl.style.display='block';
  expl.innerHTML=\`<strong>\${ok?'✓ Točno!':'✗ Netočno.'}</strong> \${q.e}\`;
  document.getElementById('qz-next').style.display='inline-flex';
}
function qzNext(){
  qzIdx++;
  const el=document.getElementById('qz-inner')||document.getElementById('qz-wrap');
  qzShowQ(el);
}
function qzEnd(el){
  const pct=Math.round(qzScore/KVIZ_Q.length*100);
  let grade,msg,ico;
  if(pct>=90){grade='ODLIČAN';msg='Spreman/na si za maturu iz H12.';ico='🏆';}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno znanje. Provjeri pogreške u Pojmovniku.';ico='💪';}
  else if(pct>=60){grade='DOBAR';msg='Ponoviti: 5 pjevanja i romantičarski kontekst.';ico='📚';}
  else if(pct>=45){grade='DOVOLJAN';msg='Osnove su tu — trebaš više vježbe.';ico='🔁';}
  else{grade='NEDOVOLJAN';msg='Vrati se na Teoriju i ponovi korak po korak.';ico='🎯';}

  let wrongHtml='';
  if(qzAnswered&&qzAnswered.length){
    const wrong=qzAnswered.filter(a=>!a.ok);
    if(wrong.length>0){
      wrongHtml=\`<div style="margin-top:24px;text-align:left">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:12px">Promašena pitanja (\${wrong.length})</div>
        \${wrong.map(a=>\`<div class="qz-wrong-item">
          <div class="qz-wrong-q">\${a.q}</div>
          <div class="qz-wrong-a">Točan odgovor: <b>\${a.correct}</b></div>
        </div>\`).join('')}
      </div>\`;
    }
  }

  el.innerHTML=\`<div class="qz-result" style="text-align:center;padding:40px 24px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4)">
    <div style="font-size:48px;margin-bottom:8px">\${ico}</div>
    <div class="qz-score-big">\${pct}%</div>
    <div class="qz-grade">\${grade}</div>
    <div class="qz-msg">\${qzScore} / \${KVIZ_Q.length} točnih · \${msg}</div>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button class="fcb primary" onclick="qzStart()">🔁 Ponovo</button>
      <button class="fcb" onclick="sw(4)">📚 Pojmovnik</button>
      <button class="fcb" onclick="sw(7)">✅ Checkpoint</button>
    </div>
    \${wrongHtml}
  </div>\`;

  saveScoreHistory(qzScore,KVIZ_Q.length);
  markTab(6);
}

/* ═══════════════════════════════════
   CHECKPOINT
═══════════════════════════════════ */
let CP_STATE={done:{}};
try{const s=localStorage.getItem('mt.hrv.h14.cp');if(s)CP_STATE=JSON.parse(s);}catch(e){}

const CP_HINTS=['Tab 0','Tab 0','Tab 4','Tab 0','Tab 1','Tab 1','Tab 3','Tab 2','Tab 0','Tab 2'];
function cpRender(){
  const list=document.getElementById('cp-list');
  if(!list)return;
  list.innerHTML=CP_ITEMS.map((item,i)=>\`
    <div class="cp-item\${CP_STATE.done[i]?' done':''}" onclick="cpToggle(\${i})" style="display:flex;align-items:flex-start;gap:12px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:12px 16px;cursor:pointer;transition:all .15s">
      <div class="cp-box">\${CP_STATE.done[i]?'✓':''}</div>
      <div class="cp-txt" style="flex:1;font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.5">\${item}</div>
      <span class="cp-hint">\${CP_HINTS[i]||''}</span>
    </div>
  \`).join('');
  cpUpdateProgress();
}
function cpToggle(i){
  CP_STATE.done[i]=!CP_STATE.done[i];
  try{localStorage.setItem('mt.hrv.h14.cp',JSON.stringify(CP_STATE));}catch(e){}
  cpRender();
}
function cpUpdateProgress(){
  const done=Object.values(CP_STATE.done).filter(Boolean).length;
  const total=CP_ITEMS.length;
  const pct=Math.round(done/total*100);
  document.getElementById('cp-pct').textContent=\`\${done} / \${total}\`;
  document.getElementById('cp-bar').style.width=pct+'%';
  document.getElementById('sb-prog-bar').style.width=pct+'%';
  document.getElementById('sb-prog-pct').textContent=pct+'%';
  const fin=document.getElementById('cp-final');
  if(fin)fin.classList.toggle('show',done===total);
  // Update summary
  const sumBox=document.getElementById('cp-summary-box');
  const sumPct=document.getElementById('cp-sum-pct');
  const sumTxt=document.getElementById('cp-sum-txt');
  if(sumBox&&done>0){
    sumBox.style.display='flex';
    sumPct.textContent=pct+'%';
    let msg;
    if(pct===100)msg='<strong>Kompletan!</strong> Sve je savladano — spreman/na si za maturu.';
    else if(pct>=70)msg='<strong>Odlično!</strong> Neoznačene tvrdnje su tvoje slabe točke — fokusiraj se na njih.';
    else if(pct>=40)msg='<strong>Napredak!</strong> Nastavak: provjeri 5 pjevanja i Esej alat za neoznačene stavke.';
    else msg='Još je posla. Počni s Teorijom (Tab 0) i prođi sve sekcije.';
    sumTxt.innerHTML=msg;
  }
}
function cpReset(){
  CP_STATE={done:{}};
  try{localStorage.removeItem('mt.hrv.h14.cp');}catch(e){}
  cpRender();
}
cpRender();

/* ═══════════════════════════════════
   KVIZ INIT on tab 6
═══════════════════════════════════ */
// Already handled in sw()

/* ═══════════════════════════════════
   MARK TAB (completion badge)
═══════════════════════════════════ */
let TAB_DONE={};
try{TAB_DONE=JSON.parse(localStorage.getItem('mt.hrv.h14.tab_done')||'{}')}catch(e){}

function markTab(n){
  TAB_DONE[n]=true;
  try{localStorage.setItem('mt.hrv.h14.tab_done',JSON.stringify(TAB_DONE))}catch(e){}
  const el=document.getElementById('td'+n);
  if(el)el.textContent='✓';
}
function restoreTabDone(){
  Object.keys(TAB_DONE).forEach(n=>{
    const el=document.getElementById('td'+n);
    if(el&&TAB_DONE[n])el.textContent='✓';
  });
}
restoreTabDone();

// Mark tab on dwell (8s)
let tabTimer=null;
const origSw=sw;
window.sw=function(n){
  origSw(n);
  clearTimeout(tabTimer);
  tabTimer=setTimeout(()=>{
    if(n!==5)markTab(n); // don't auto-mark PRO locked
  },8000);
  // Show relevant tip
  showTip(n);
};

/* ═══════════════════════════════════
   TIP BAR
═══════════════════════════════════ */
const TIPS=[
  '💡 <strong>Tab 0 tip:</strong> Povezuj djelo s preporodom — Smail-aga = tiranija, Crnogorci = sloboda, Novica = moralno preobraćenje.',
  '💡 <strong>Tab 1 tip:</strong> Klikni na pjevanje za detalje radnje, likova i esejskih signala.',
  '💡 <strong>Tab 2 tip:</strong> Klikni na tezu da je kopiraš u clipboard — iskoristi za školski esej.',
  '💡 <strong>Tab 3 tip:</strong> ⭐ označi citate koje ćeš učiti — spremaju se u lokalni profil.',
  '💡 <strong>Tab 4 tip:</strong> Prebaci na Flashcard mode — ← → za navigaciju, Space za okret.',
  '💡 <strong>Tab 5 tip:</strong> Počni s Lagano (4 para) matchinga, pa Srednje (6), pa Teško (8).',
  '💡 <strong>Tab 6 tip:</strong> Nakon kviza provjeri objašnjenja pogrešaka — više uči kroz njih.',
  '💡 <strong>Tab 7 tip:</strong> Označi samo tvrdnje koje STVARNO znaš — ne varaj sebe.'
];
let tipShown={};
function showTip(n){
  if(tipShown[n])return;
  const bar=document.getElementById('tip-bar');
  const txt=document.getElementById('tip-bar-txt');
  if(!bar||!txt)return;
  txt.innerHTML=TIPS[n]||TIPS[0];
  bar.classList.add('show');
  tipShown[n]=true;
  clearTimeout(bar._timer);
  bar._timer=setTimeout(()=>bar.classList.remove('show'),5000);
}
// Show tip for initial tab
setTimeout(()=>showTip(0),3000);

/* ═══════════════════════════════════
   FROM BANNER (?from= URL param)
═══════════════════════════════════ */
(function(){
  const params=new URLSearchParams(window.location.search);
  const from=params.get('from');
  if(from){
    const names={H11:'H11 · Stari hrv. pisci',H13:'H13 · Barok · Gundulić'};
    const el=document.getElementById('from-banner');
    const txt=document.getElementById('from-txt');
    if(el&&txt){
      txt.textContent='📎 Nastaviš učenje iz '+(names[from]||from)+' → H14 · Preporod · Mažuranić';
      el.classList.add('show');
      // Move banner to top of content
      const cw=document.querySelector('.content-wrap');
      if(cw)cw.insertBefore(el,cw.firstChild);
      setTimeout(()=>el.classList.remove('show'),8000);
    }
  }
})();

/* ═══════════════════════════════════
   SCORE HISTORY (kviz)
═══════════════════════════════════ */
function loadScoreHistory(){
  try{
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h14.kviz_hist')||'[]');
    const cont=document.getElementById('score-hist');
    const rows=document.getElementById('score-hist-rows');
    if(!cont||!rows||hist.length===0)return;
    cont.style.display='block';
    rows.innerHTML=hist.slice(-5).reverse().map(h=>{
      const pct=Math.round(h.score/h.total*100);
      const d=new Date(h.date);
      const ds=d.toLocaleDateString('hr',{day:'2-digit',month:'2-digit'});
      return \`<div class="score-hist-row">
        <span class="score-hist-date">\${ds}</span>
        <div class="score-hist-bar"><div class="score-hist-fill" style="width:\${pct}%"></div></div>
        <span class="score-hist-val">\${h.score}/\${h.total}</span>
      </div>\`;
    }).join('');
  }catch(e){}
}

function saveScoreHistory(score,total){
  try{
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h14.kviz_hist')||'[]');
    hist.push({score,total,date:new Date().toISOString()});
    localStorage.setItem('mt.hrv.h14.kviz_hist',JSON.stringify(hist.slice(-10)));
    loadScoreHistory();
  }catch(e){}
}

// Upgrade qzEnd to save history
const origQzEnd=qzEnd;
window.qzEnd=function(el){
  origQzEnd(el);
  saveScoreHistory(qzScore,KVIZ_Q.length);
  markTab(6);
};

// Load history on init
loadScoreHistory();

/* ═══════════════════════════════════
   MATCH GAME — Funkcionalan (3 razine)
═══════════════════════════════════ */
const MATCH_DATA={
  // EASY — Osnove: tko je tko u djelu (Likovi ↔ Uloge)
  easy:[
    {a:'Smail-aga Čengić',b:'Bosansko-hercegovački muselim (tiranin)'},
    {a:'Novica',b:'Protagonist — od krvnika do osvetnika'},
    {a:'Durak',b:'Agin savjetnik, Novicin otac'},
    {a:'Pustinjak',b:'Glas refleksije u V. Kobi'},
  ],
  // MEDIUM — Stilska sredstva + primjeri iz djela
  medium:[
    {a:'Slavenska antiteza',b:'„Je li hajduk, il\\u2019 uhoda turska? Nit je hajduk..."'},
    {a:'Epitet',b:'„mrki vuk" (aga), „krvnik Crne Gore" (Novica)'},
    {a:'Personifikacija prirode',b:'Oluja u Haraču — priroda kao moralni sudac'},
    {a:'Metafora',b:'„S planinskoga gladna miša" — Novica kao glad za osvetom'},
    {a:'Biblijska aluzija',b:'„Sve je grijeh, sve su djela prika; bez kajanja nema oprosnika"'},
    {a:'Kletva / opomena',b:'„Boj se onoga tko je viko bez golema mrijet jada!"'},
  ],
  // HARD — Preporod + romantizam + kontekst (napredno)
  hard:[
    {a:'Ljudevit Gaj',b:'Vođa preporoda — pokreće Danicu 1835.'},
    {a:'Danica ilirska',b:'Glavni časopis preporoda (od 1836.)'},
    {a:'Almanah Iskra',b:'Mjesto objave Smrti Smail-age (Zadar, 1846.)'},
    {a:'Hoćimska bitka (1621.)',b:'Inspiracija Gundulićevu Osmanu — Mažuranić ga dopunjuje 1842.'},
    {a:'Stvarna pogibija age',b:'Listopad 1840., Mljetičko polje (Mažuranić mijenja u Gacko)'},
    {a:'Ban Hrvatske 1873.-1880.',b:'Mažuranićeva politička karijera — „pučki ban"'},
    {a:'Njemačko-ilirski slovar',b:'Mažuranićev rječnik iz 1842. — 40.000 natuknica'},
    {a:'Byron, Mickiewicz, Puškin',b:'Evropski romantizam — paralelni nacionalni spjevovi'},
  ],
};

let mgLevel='easy',mgSelLeft=null,mgSelRight=null,mgMatched=0,mgPairs=[];

function mgInit(level){
  mgLevel=level||'easy';
  const pairs=MATCH_DATA[mgLevel];
  mgMatched=0;mgSelLeft=null;mgSelRight=null;
  mgPairs=pairs.map((p,i)=>({...p,id:i}));
  
  // Shuffle BOTH sides independently for harder challenge
  const leftItems=[...mgPairs].sort(()=>Math.random()-.5);
  const rightItems=[...mgPairs].sort(()=>Math.random()-.5);
  
  const themes={
    easy:'🎭 Likovi Smail-age',
    medium:'✒ Stilska sredstva + citati',
    hard:'🇭🇷 Preporod + kontekst (napredno)'
  };
  const labels={easy:'Lagano',medium:'Srednje',hard:'Teško'};
  const activeClass=(lvl)=>mgLevel===lvl?'primary':'';
  
  const el=document.getElementById('mg-dynamic');
  if(!el)return;
  el.innerHTML=\`
    <div class="mg-status" id="mg-status">
      <strong>\${themes[mgLevel]}</strong> · \${mgPairs.length} parova · \${labels[mgLevel]}
    </div>
    <div class="mg-grid">
      <div class="mg-col" id="mg-left">
        \${leftItems.map(p=>\`<div class="mg-item" data-id="\${p.id}" data-side="left" onclick="mgClick(this)">\${p.a}</div>\`).join('')}
      </div>
      <div class="mg-col" id="mg-right">
        \${rightItems.map(p=>\`<div class="mg-item" data-id="\${p.id}" data-side="right" onclick="mgClick(this)">\${p.b}</div>\`).join('')}
      </div>
    </div>
    <div style="text-align:center;margin-top:14px">
      <button class="fcb \${activeClass('easy')}" onclick="mgInit('easy')" style="margin:3px" title="Likovi Dubravke">🎭 Lagano (4)</button>
      <button class="fcb \${activeClass('medium')}" onclick="mgInit('medium')" style="margin:3px" title="Stilska sredstva + primjeri">✒ Srednje (6)</button>
      <button class="fcb \${activeClass('hard')}" onclick="mgInit('hard')" style="margin:3px" title="Kontekst i uzori">🏛 Teško (8)</button>
    </div>
    <div style="text-align:center;margin-top:8px;font-family:var(--mono);font-size:10px;color:var(--t3)">
      Svaka razina testira drugu vještinu — ne samo više parova
    </div>
  \`;
}

function mgClick(el){
  if(el.classList.contains('matched')||el.classList.contains('wrong'))return;
  const side=el.dataset.side;
  
  if(side==='left'){
    document.querySelectorAll('#mg-left .mg-item').forEach(i=>i.classList.remove('selected'));
    el.classList.add('selected');
    mgSelLeft=el;
  } else {
    document.querySelectorAll('#mg-right .mg-item').forEach(i=>i.classList.remove('selected'));
    el.classList.add('selected');
    mgSelRight=el;
  }
  
  if(mgSelLeft&&mgSelRight){
    const match=mgSelLeft.dataset.id===mgSelRight.dataset.id;
    if(match){
      mgSelLeft.classList.add('matched');mgSelLeft.classList.remove('selected');
      mgSelRight.classList.add('matched');mgSelRight.classList.remove('selected');
      mgMatched++;
      if(mgMatched===mgPairs.length){
        document.getElementById('mg-status').innerHTML=\`<span style="color:var(--green)">✓ Sve spareno! Odlično!</span>\`;
        markTab(5);
      }
    } else {
      mgSelLeft.classList.add('wrong');mgSelRight.classList.add('wrong');
      setTimeout(()=>{
        mgSelLeft.classList.remove('wrong','selected');
        mgSelRight.classList.remove('wrong','selected');
        mgSelLeft=null;mgSelRight=null;
      },600);
      return;
    }
    mgSelLeft=null;mgSelRight=null;
  }
}

/* ═══════════════════════════════════
   FLASHCARDS — funkcionalan demo
═══════════════════════════════════ */
const FC_DATA=[
  {t:'Slavenska antiteza',d:'Narodno-epska tehnika: pitanje-negacija-odgovor. Primjer: „Je li hajduk, il\\u2019 uhoda turska? Nit je hajduk..."',kat:'stil'},
  {t:'Spjev',d:'Kraće narativno djelo u stihu, objedinjuje epsku, dramsku i lirsku komponentu. Smail-aga = 1134 stiha.',kat:'spjev'},
  {t:'Agovanje',d:'I. pjevanje (~180 stihova). Smail-aga u Stolcu muči Crnogorce, ubija Duraka. Ekspozicija djela.',kat:'spjev'},
  {t:'Noćnik',d:'II. pjevanje (~160 stihova). Novičino noćno putovanje iz Stolca na Cetinje. Prelazak, preobraćenje.',kat:'spjev'},
  {t:'Harač',d:'IV. pjevanje — najduže (623 stiha). Aga na Gackom polju; oluja; bitka; agina smrt. Kulminacija.',kat:'spjev'},
  {t:'Kob',d:'V. pjevanje — najkraće (34 stiha). Pustinjak na Lovćenu. Filozofski epilog o prolaznosti sile.',kat:'spjev'},
  {t:'Smail-aga Čengić',d:'Središnji antagonist. Bosansko-hercegovački muselim. Demonski lik — ohol, krvnik, tašt.',kat:'likovi'},
  {t:'Novica',d:'Glavni protagonist. Durakov sin, agin kavaz. Jedini individualizirani lik — prelazi od krvnika do osvetnika.',kat:'likovi'},
  {t:'Durak',d:'Stariji Turčin, agin savjetnik, Novicin otac. U stvarnosti zvao se Milutin. Aga ga ubije jer ga savjetovao.',kat:'likovi'},
  {t:'Ljudevit Gaj',d:'Vođa preporoda. 1835. pokreće Danicu. Standardizira gajicu i štokavštinu kao hrv. književni jezik.',kat:'preporod'},
  {t:'Danica',d:'Gajev časopis — od 1835. „Danica horvatska, slavonska i dalmatinska"; od 1836. „Danica ilirska". Glavno glasilo preporoda.',kat:'preporod'},
  {t:'Iskra',d:'Almanah u kojem je 1846. objavljena Smrt Smail-age Čengića. Izlazio u Zadru, urednik Dimitrije Demeter.',kat:'preporod'},
  {t:'Romantizam',d:'Europski pokret kraj 18. – sredina 19. st. Obilježja: emocija, nacionalna tema, priroda, patos. Smail-aga = hrv. romantizam.',kat:'romantizam'},
  {t:'Priroda kao sudionik',d:'Romantičarski motiv — priroda moralno aktivna. Oluja u IV. Haraču svrstava se protiv Smail-age.',kat:'romantizam'},
  {t:'Osmerac (4+4)',d:'Stih od 8 slogova s cezurom iza 4. U Smail-agi za lirske i refleksivne dionice. Narodno-epska tradicija.',kat:'stih'},
  {t:'Deseterac (4+6)',d:'Stih od 10 slogova s cezurom iza 4. U Smail-agi za narativne i svečane dijelove. Junački stih narodne epike.',kat:'stih'},
  {t:'Harač (pojam)',d:'Godišnji porez koji su ne-muslimani plaćali turskoj vlasti. Simbol eksploatacije. IV. pjevanje nosi ovo ime.',kat:'jezik'},
  {t:'Kavaz',d:'Turski naziv za agina stražara/čuvara. Novica je bio kavaz prije pokrštenja. Označava odanost tiraninu.',kat:'jezik'},
  {t:'Turcizmi',d:'Riječi turskoga podrijetla: aga, kavaz, muselim, harač, delija, kapija, toke, fišek, kulaš, sofra, jatagan.',kat:'jezik'},
  {t:'„Boj se onoga..."',d:'Najpoznatiji citat djela. Durakova opomena Smail-agi u I. Agovanju. Tiranin se boji onoga tko nema što izgubiti.',kat:'stil'},
];

let fcIdx=0,fcFlipped=false;

function fcInit(){
  fcIdx=0;fcFlipped=false;
  fcRender();
}

function fcRender(){
  const card=document.getElementById('fc-card-dyn');
  const counter=document.getElementById('fc-counter-dyn');
  if(!card)return;
  const item=FC_DATA[fcIdx];
  const catCls={stih:'p-pa',ep:'p-br',aleg:'p-r',stil:'p-t',hum:'p-go'};
  card.querySelector('.fc-term').textContent=item.t;
  card.querySelector('.fc-def').textContent=item.d;
  card.querySelector('.fc-cat').textContent=item.kat+' · klikni za definiciju';
  card.querySelector('.fc-back .fc-cat').textContent=item.kat;
  card.classList.remove('flipped');
  fcFlipped=false;
  if(counter)counter.textContent=\`\${fcIdx+1} / \${FC_DATA.length}\`;
  document.getElementById('fc-prev-dyn').disabled=(fcIdx===0);
  document.getElementById('fc-next-dyn').disabled=(fcIdx===FC_DATA.length-1);
}

function fcFlip(){
  const card=document.getElementById('fc-card-dyn');
  if(!card)return;
  fcFlipped=!fcFlipped;
  card.classList.toggle('flipped',fcFlipped);
}

function fcNav(dir){
  fcIdx=Math.max(0,Math.min(FC_DATA.length-1,fcIdx+dir));
  fcRender();
}

/* ═══════════════════════════════════
   INTERSECTION OBSERVER (IntersectionObserver)
═══════════════════════════════════ */
/* ═══════════════════════════════════
   READ PROGRESS BAR + BTT
═══════════════════════════════════ */
(function(){
  const bar=document.getElementById('rpbar');
  const btt=document.getElementById('btt');
  function update(){
    const el=document.documentElement;
    const scrolled=el.scrollTop||document.body.scrollTop;
    const total=(el.scrollHeight||document.body.scrollHeight)-el.clientHeight;
    const pct=total>0?Math.min(100,Math.round(scrolled/total*100)):0;
    if(bar)bar.style.width=pct+'%';
    if(btt)btt.classList.toggle('show',scrolled>300);
  }
  document.addEventListener('scroll',update,{passive:true});
  update();
})();

/* ═══════════════════════════════════
   SELFCHECK (Samoprocjena Tab 0)
═══════════════════════════════════ */
const SC_QS = [
  {q: 'Znam godinu nastanka i mjesto objave Smrti Smail-age Čengića (1846., almanah Iskra, Zadar).', k: 'kontekst'},
  {q: 'Mogu nabrojati svih 5 pjevanja (Agovanje, Noćnik, Četa, Harač, Kob) i znam što se u svakom događa.', k: 'struktura'},
  {q: 'Razumijem razliku između epa, balade i spjeva — znam zašto je Smrt Smail-age spjev.', k: 'žanr'},
  {q: 'Mogu opisati glavne likove (Smail-aga, Novica, Durak, Crnogorci, svećenik, pustinjak) i njihove funkcije.', k: 'likovi'},
  {q: 'Znam povijesni i književni kontekst: hrv. narodni preporod, Ilirski pokret, Ljudevit Gaj, uloga Mažuranića.', k: 'kontekst'}
];

function scRender() {
  const el = document.getElementById('sc-qs');
  if (!el) return;
  el.innerHTML = SC_QS.map((q,i) => \`
    <div style="display:flex;align-items:flex-start;gap:10px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);padding:10px 14px">
      <input type="checkbox" id="sc\${i}" style="margin-top:3px;accent-color:var(--bronze);width:16px;height:16px;flex-shrink:0">
      <label for="sc\${i}" style="font-family:var(--serif);font-size:13.5px;color:var(--t2);cursor:pointer;line-height:1.5">\${q.q}</label>
    </div>
  \`).join('');
}

function scCheck() {
  const checked = SC_QS.map((_,i) => document.getElementById('sc'+i)?.checked).filter(Boolean).length;
  const pct = Math.round(checked / SC_QS.length * 100);
  const el = document.getElementById('sc-result');
  if (!el) return;
  let msg, color;
  if (pct >= 100) { msg = '🏆 Odlično! Spreman/na si za sve što NCVVO može pitati iz H12.'; color = 'var(--green)'; }
  else if (pct >= 60) { msg = '📖 Dobro! Provjeri neoznačene stavke — one su tvoje slabe točke.'; color = 'var(--gold)'; }
  else { msg = '📚 Još je posla. Počni s Teorijom i 6 pjevanjima — te sekcije su najvažnije.'; color = 'var(--red)'; }
  el.style.display = 'block';
  el.innerHTML = \`<div class="box-int" style="border-color:\${color}20">
    <div style="font-family:var(--display);font-size:18px;color:\${color};margin-bottom:8px">\${checked} / \${SC_QS.length} · \${pct}%</div>
    <div style="font-family:var(--serif);font-size:14px;color:var(--t2)">\${msg}</div>
  </div>\`;
}

function scReset() {
  SC_QS.forEach((_,i) => { const el=document.getElementById('sc'+i); if(el) el.checked=false; });
  const r = document.getElementById('sc-result');
  if (r) r.style.display = 'none';
}

scRender();

/* ═══════════════════════════════════
   CHECKLIST (Esej alat AT7)
═══════════════════════════════════ */
const CL_ITEMS = [
  'Znam godinu nastanka djela (1846.) i mjesto objave (almanah <em>Iskra</em>, Zadar).',
  'Mogu nabrojati svih 5 pjevanja po redu (Agovanje, Noćnik, Četa, Harač, Kob).',
  'Znam najduže (Harač · 623) i najkraće (Kob · 34) pjevanje — i razumijem tu asimetriju.',
  'Razumijem razliku ep / spjev / balada — i zašto je Smail-aga spjev.',
  'Mogu opisati glavne likove: Smail-aga, Novica, Durak, svećenik, pustinjak, Crnogorci, Bauk.',
  'Znam stihove djela (osmerac 4+4 i deseterac 4+6) i funkciju svakog.',
  'Mogu prepoznati stilska sredstva: slavenska antiteza, epitet, kontrast, hiperbola, personifikacija, biblijske aluzije.',
  'Znam ključni citat „Boj se onoga tko je viko bez golema mrijet jada!" i mogu ga interpretirati.',
  'Razumijem 3 razine čitanja: konkretnu, nacionalnu, univerzalnu.',
  'Znam preporodni kontekst: Ljudevit Gaj, Danica (1835.), štokavština, Mažuranić kao ban (1873.–1880.).',
];
let clDone = {};
try { clDone = JSON.parse(localStorage.getItem('mt.hrv.h14.cl') || '{}'); } catch(e) {}

function clRender() {
  const el = document.getElementById('cl-list');
  if (!el) return;
  el.innerHTML = CL_ITEMS.map((item, i) => \`
    <div class="cp-item\${clDone[i] ? ' done' : ''}" onclick="clToggle(\${i})" style="cursor:pointer">
      <div class="cp-cb">\${clDone[i] ? '✓' : ''}</div>
      <div class="cp-txt">\${item}</div>
    </div>
  \`).join('');
}
function clToggle(i) {
  clDone[i] = !clDone[i];
  try { localStorage.setItem('mt.hrv.h14.cl', JSON.stringify(clDone)); } catch(e) {}
  clRender();
}
clRender();

/* ═══════════════════════════════════
   CHECKPOINT WRITER
═══════════════════════════════════ */
function cpWriterUpdate(){
  const ta=document.getElementById('cp-writer');
  const fb=document.getElementById('cp-writer-fb');
  if(!ta)return;
  const txt=ta.value;
  const words=txt.trim()?txt.trim().split(/\\s+/).length:0;
  try{localStorage.setItem('mt.hrv.h14.cp_writer',txt);}catch(e){}
  // Count literary terms
  const tl=txt.toLowerCase();
  const terms=['spjev','pjevanj','osmerac','deseterac','stih','agovanje','noćnik','četa','harač','kob','smail','novica','durak','crnogor','ilir','preporod','romantizam','mažuranić','1846','gaj','danica','slaven','antitez','epitet','metafor','kontrast','personifikac','hiperbol','kletv','biblij','turcizm','sloboda','tiranij','osveta'];
  const found=[];
  if(/spjev|pjevanj|agovanje|noćnik|četa|harač|kob/.test(tl))found.push('✅ Žanr/struktura');
  if(/osmerac|deseterac|stih|metrik/.test(tl))found.push('✅ Stih/forma');
  if(/smail|novica|durak|crnogor|pustinjak|svećenik|bauk/.test(tl))found.push('✅ Lik');
  if(/preporod|ilir|gaj|danica|1835|1846|romantizam|mažuranić/.test(tl))found.push('✅ Kontekst');
  if(/slaven|antitez|epitet|metafor|personifikac|hiperbol|kletv|biblij/.test(tl))found.push('✅ Stilsko sredstvo');
  if(/sloboda|tiranij|osveta|pravda|prolazn/.test(tl))found.push('✅ Tema/ideja');
  // Update stats
  const ww=document.getElementById('cpw-words');if(ww)ww.querySelector('.wc-stat-num').textContent=words;
  const wt=document.getElementById('cpw-terms');if(wt)wt.querySelector('.wc-stat-num').textContent=found.length;
  // Progress bar
  const pct=Math.min(100,Math.round(words/20*100));
  const bar=document.getElementById('cpw-bar');const prog=document.getElementById('cpw-prog');
  const lbl=document.getElementById('cpw-lbl');
  if(bar)bar.style.width=pct+'%';
  if(prog)prog.classList.toggle('pass',words>=20);
  if(lbl)lbl.textContent='CILJ 20 · '+words+' / 20'+(words>=20?' ✓':'');
  if(!fb||words===0){if(fb)fb.innerHTML='';return;}
  const quality=words>=20?(words>=40?'<span style="color:var(--green)">Odlična duljina</span>':'<span style="color:var(--gold)">Dobra duljina</span>'):'<span style="color:var(--red)">Previše kratko</span>';
  fb.innerHTML=\`<div class="box-int" style="padding:10px 14px">
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:6px">\${found.map(f=>\`<span style="font-family:var(--mono);font-size:10px;color:var(--green)">\${f}</span>\`).join('')||'<span style="font-family:var(--mono);font-size:10px;color:var(--t3)">Nema prepoznatih pojmova</span>'}</div>
    <div style="font-family:var(--mono);font-size:10px">\${quality} · \${found.length}/6 književnih pojmova</div>
  </div>\`;
}
(function(){
  const ta=document.getElementById('cp-writer');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h14.cp_writer');if(sv){ta.value=sv;cpWriterUpdate();}}catch(e){}
})();

/* ═══════════════════════════════════
   CITATNIK v2 (H11 featured-quote pattern)
═══════════════════════════════════ */
const CIT_DATA2 = [
  // === I. AGOVANJE (8 citata) ===
  {cat:'agovanje',napamet:true,
   text:'Boj se onoga, tko je viko bez golema mrijet jada!',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · NAJPOZNATIJI CITAT · Durakova opomena Smail-agi'},
  {cat:'agovanje',napamet:true,
   text:'Tko je mlađi, rado gleda na lipovu krstu muke; a tko starij\\u2019, muke iste sam na sebi s vlaške ruke već unaprijed od strâ ćuti.',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · Opis turskog logora · Mladi uživaju u mučenju, stari slute osvetu'},
  {cat:'agovanje',
   text:'Štono sam vî Turčin pripravio... Kome britku palu namjenjuje.',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · Karakterizacija aginog sadizma · „Britka pala" = oštra sablja'},
  {cat:'agovanje',
   text:'Dobar junak — da je čovjek taki.',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, I. Agovanje · Narator o Smail-agi · Ironijska napomena — junak po obliku, ali nečovjek po biti'},
  {cat:'agovanje',
   text:'Aga je oličenje zla.',
   meta:'— Analiza lika · Smail-aga kao demonski lik — ohol silnik, zlotvor, krvnik, kukavica, tašt'},
  {cat:'agovanje',
   text:'Ne doživljava agu zadovoljštinu jer junaci nisu poklekli pred mukama.',
   meta:'— Interpretacija Agovanja · Bijes age proizlazi iz Crnogorske hrabrosti koja ga deklasira'},
  {cat:'agovanje',
   text:'Aga naređuje da se Durak pogubi usred bijesa zbog savjeta da odustane od mučenja.',
   meta:'— Ključni moment Agovanja · Pokretač Novičine osvete · Prikaz aga kao tiranina koji ne podnosi kritiku ni od vlastitih'},
  {cat:'agovanje',
   text:'Smail-aga se pojavljuje samo u dva pjevanja (Agovanje, Harač), ali se njegova prisutnost osjeća u cijelom djelu.',
   meta:'— Tehnika karakterizacije · Sve se događa zbog njega i oko njega'},

  // === II. NOĆNIK (7 citata) ===
  {cat:'nocnik',napamet:true,
   text:'Je li hajduk, il\\u2019 uhoda turska, što uhodi sviloruna krda, il\\u2019 volova stada vitoroga? Nit je hajduk, nit uhoda turska, već Novica, Čengića kavazu...',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · Klasična slavenska antiteza · Tehnika pitanja–negacije–odgovora'},
  {cat:'nocnik',napamet:true,
   text:'Ter se maša kršnijeh Ćeklića... A Novica pade na Cetinje...',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · „Pade" kao simbol pokore i preobraćenja'},
  {cat:'nocnik',napamet:true,
   text:'S planinskoga gladna miša...',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · Metaforički opis Novice · Glad za osvetom kao životinjski nagon'},
  {cat:'nocnik',
   text:'Bijesan Turčin, krvnik Crne Gore, koga znade i staro i mlado.',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, II. Noćnik · Epitet Novice prije preobraćenja · „Krvnik Crne Gore"'},
  {cat:'nocnik',
   text:'Novica „krvnik Crne Gore", agin sluga, ne okreće glavu od mučenja na početku spjeva.',
   meta:'— Analiza Novice · Moralno stanje prije osobnog udara'},
  {cat:'nocnik',
   text:'Tek kada je osobno pogođen očevim ubojstvom, traži osvetu.',
   meta:'— Psihološki okidač Novičine transformacije · Osobna bol pokreće moralnu odluku'},
  {cat:'nocnik',
   text:'I kada prihvaća kršćanstvo i pridružuje se četi, on ne može biti dio kolektiva jer njime upravljaju individualni osjećaji.',
   meta:'— Interpretacija Novice · Jedini individualizirani lik u djelu · Romantičarski individualist'},

  // === III. ČETA (5 citata) ===
  {cat:'ceta',napamet:true,
   text:'Sve je grijeh, sve su djela prika; Bez kajanja nema oprosnika.',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, III. Četa · Svećenikov govor · Biblijska moralna formula'},
  {cat:'ceta',
   text:'Svećenikov govor u III. Četi predstavlja ideološki centar djela — pravedan rat kao sveti čin.',
   meta:'— Interpretacija Čete · Religiozna legitimacija osvete'},
  {cat:'ceta',
   text:'Brđani su prikazani kao junaci koji umiru bez jauka, a junaci iz Čete i Harača kao kolektiv ljudi jednakih u mukama, ali i junaštvu.',
   meta:'— Karakterizacija Crnogoraca · Kolektivni junak romantizma'},
  {cat:'ceta',
   text:'Mažuranić je Crnogorce prikazao kao kolektiv, a među Turcima je izdvojio nekoliko pojedinaca.',
   meta:'— Tehnika karakterizacije · Narativni balans diferenciranjem likova'},
  {cat:'ceta',
   text:'U djelu je Mažuranić iznio ne samo preporodne ideje o slozi i zajedništvu nego i svoje misli o životu i ljudima.',
   meta:'— Interpretacija · Preporodni sloj djela · Zajedništvo kao ideal'},

  // === IV. HARAČ (7 citata) ===
  {cat:'harac',napamet:true,
   text:'A u zemlji hercegovoj... Tu nek plijen vranom vranu stoji.',
   meta:'— Mažuranić, <em>Smrt Smail-age Čengića</em>, IV. Harač · Baukova rugalica mrtvom agi · Tiranin = plijen gavrana'},
  {cat:'harac',
   text:'Harač (agin harač na Gackom polju; stiže oluja, dolazi do bitke, mnoštvo poginulih).',
   meta:'— Kompozicija Harača · 6 faza: priprema → zlostavljanja → oluja → napad → agina smrt → rasap'},
  {cat:'harac',
   text:'Harač je najdulje pjevanje od 623 stiha — vrhunac djela.',
   meta:'— Formalna činjenica · Pola djela otpada na Harač'},
  {cat:'harac',
   text:'Oluja u IV. Haraču — priroda kao moralni sudac, tipični romantičarski motiv.',
   meta:'— Interpretacija · Romantičarska personifikacija prirode kao aktivne moralne sile'},
  {cat:'harac',
   text:'Hladan je, svirep i grub, ne samo prema Crnogorcima nego i prema Turcima koji imalo posumnjaju u ispravnost njegovih postupaka.',
   meta:'— Karakterizacija Smail-age · Jedinstveni psihopatski profil lika'},
  {cat:'harac',
   text:'Agine sluge Omer, Jašar, Mujo spremni su svakoga časa napustiti agu, Safer je ulizica i nasilnik, Bauk mu pjeva rugalicu i jedan je od rijetkih koji uspijevaju izvući glavu iz borbe.',
   meta:'— Diferencijacija aginih slugu · „Loše sluge lošeg gospodara"'},
  {cat:'harac',
   text:'Bauk preživi bitku možda zato da bi opjevao pad svoga gospodara.',
   meta:'— Narativna funkcija Bauka · Ironični svjedok kraja tiranije'},

  // === V. KOB (3 citata) ===
  {cat:'kob',napamet:true,
   text:'U posljednjem pjevanju Ivan Mažuranić daje naslutiti pad turskog carstva uz pomoć alegorijske slike.',
   meta:'— Analiza V. Kobi · Alegorija pada velikog carstva utemeljenog na pljački, nepravdi i zločinu'},
  {cat:'kob',
   text:'Kob je najkraće pjevanje s 34 stiha — ali ideološki najteže.',
   meta:'— Strukturna paradoks · Kratkoća pojačava težinu filozofske poante'},
  {cat:'kob',
   text:'Pustinjak na Lovćenu refleksira o prolaznosti sile — glavna poruka spjeva.',
   meta:'— Interpretacija Kobi · Pustinjak kao Mažuranićev autorski glas · Lovćen = crnogorska sveta planina'},

  // === LIKOVI — sintetske karakterizacije (6) ===
  {cat:'likovi',
   text:'Smail-aga, Novica, Durak, Hasan, Mujo, Mer, Jašar, Bank, Saruk, svećenik — glavni likovi spjeva.',
   meta:'— Popis likova · Novica je jedini individualizirani protagonist'},
  {cat:'likovi',
   text:'Smail-aga je središnji lik spjeva, pojavljuje se u samo dva pjevanja (Agovanje, Harač).',
   meta:'— Ključna tehnika — aktivna apsentnost · Njegova prisutnost se osjeća cijelo vrijeme'},
  {cat:'likovi',
   text:'Novica: od krvnika Crne Gore do krsnog osvetnika — potpuna moralna transformacija.',
   meta:'— Glavna psihološka linija djela · Individualna priča kroz kolektivnu epopeju'},
  {cat:'likovi',
   text:'Durak je bio dugogodišnji Agin savjetnik, pa mu je i sada savjetovao da prestane s ubojstvima Crnogoraca.',
   meta:'— Uloga Duraka · Glas umjerenosti koji tiranin ne podnosi · U stvarnosti se zvao Milutin'},
  {cat:'likovi',
   text:'Crnogorci kao kolektiv simboliziraju sve narode koji se bore protiv tiranije.',
   meta:'— Alegorijska dimenzija · Kolektivni romantičarski junak'},
  {cat:'likovi',
   text:'Svećenik u Četi predstavlja moralnu autoritetnu figuru — blagoslov i duhovnu pripremu pravedne bitke.',
   meta:'— Uloga svećenika · Religiozno opravdanje osvete u preporodnom kontekstu'},

  // === JEZIK / STIH (4 citata) ===
  {cat:'jezik',
   text:'Smrt Smail-age Čengića je ep pisan štokavskim narječjem ijekavicom.',
   meta:'— Jezični okvir djela · Moderna standardna hrv. štokavska osnova'},
  {cat:'jezik',
   text:'Mažuranić često rabi arhaične izraze (tudijer, jerbo...) te turcizme (kidisati, delija, kapija, toke, fišek, kulaš, sofra, jatagan).',
   meta:'— Jezični slojevi · Turcizmi za autentičnost, arhaizmi za epski ton'},
  {cat:'jezik',
   text:'Izvorni Mažuranićev tekst pisan je prema tadašnjem pravopisu. Dosljedno je pisao glasovnu skupinu „er" umjesto vokalnoga r (kerv, kerst, serce).',
   meta:'— Predgajevska grafija · Mažuranić piše u preporodnoj tranziciji između starih i novih pravopisnih rješenja'},
  {cat:'jezik',
   text:'Djelo je napisano štokavskim osmercem i desetercem, što je bilo uobičajeno za tadašnje epove.',
   meta:'— Metrički okvir · Osmerac (4+4) = lirski/refleksivni, Deseterac (4+6) = narativni/svečani'},
];

let cit2Active = 'all';

function renderCit2() {
  const el = document.getElementById('cit-grid2');
  if (!el) return;
  const show = cit2Active === 'all' ? CIT_DATA2 : CIT_DATA2.filter(c => c.cat === cit2Active);
  el.innerHTML = show.map((c,i) => buildCitHTML(c,i)).join('');
}

function citFilter2(cat, btn) {
  document.querySelectorAll('#cit-filter-row .cit-fbt').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  cit2Active = cat;
  // Handle 'stars' filter — show only starred items
  if(cat === 'stars'){
    try{
      const stars = JSON.parse(localStorage.getItem('mt.hrv.h14.cit_stars')||'[]');
      const el = document.getElementById('cit-grid2');
      if(!el) return;
      const show = CIT_DATA2.filter((c,i)=>stars.includes(i));
      if(show.length===0){
        el.innerHTML = '<div class="box-int" style="margin-top:12px"><div class="box-int-txt">Još nemaš označenih citata. Klikni ⭐ na citatu da ga dodaš u favorite.</div></div>';
        return;
      }
      el.innerHTML = show.map((c,i)=>buildCitHTML(c,i)).join('');
      return;
    }catch(e){}
  }
  renderCit2();
}

function buildCitHTML(c, i){
  const safe = (s)=>s.replace(/\\\\/g,'\\\\\\\\').replace(/'/g,"\\\\'");
  return \`<div class="featured-quote" data-cit-cat="\${c.cat}">
      \${c.napamet ? '<span class="fq-napamet">★ NAPAMET</span>' : ''}
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">\${c.text}</div>
        <div class="fq-meta">\${c.meta}</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'\${safe(c.text)} — \${safe(c.meta.replace(/<[^>]+>/g,''))}')">⎘</button>
    </div>\`;
}

function fqCopy(btn, text) {
  navigator.clipboard.writeText(text).catch(() => {});
  btn.classList.add('copied');
  btn.textContent = '✓';
  setTimeout(() => { btn.classList.remove('copied'); btn.textContent = '⎘'; }, 1500);
}

renderCit2();

/* ═══════════════════════════════════
   POJMOVNIK v2 (H11 pojm-card pattern)
═══════════════════════════════════ */
const POJM_DATA2 = [
  // === STIH / FORMA (9 pojmova) ===
  {kat:'stih',term:'Osmerac (4+4)',def:'Stih od <strong>8 slogova</strong> s cezurom iza 4. sloga. U Smail-agi koristi se za <em>lirske i refleksivne dionice</em>. Narodno-epska tradicija.'},
  {kat:'stih',term:'Deseterac (4+6)',def:'Stih od <strong>10 slogova</strong> s cezurom iza 4. sloga. U Smail-agi za <em>narativne i svečane dijelove</em>. Junački stih hrv. i srpske narodne epike.'},
  {kat:'stih',term:'Štokavski deseterac',def:'Stil deseterca vezan uz štokavsko narječje i narodnu pjesmu. Mažuranić ga koristi kao <strong>znak nacionalne pripadnosti</strong> djela.'},
  {kat:'stih',term:'Cezura',def:'Obvezatna pauza unutar stiha. U osmercu iza 4. sloga (4+4), u desetercu iza 4. sloga (4+6). <em>„Boj se onoga / tko je viko"</em> — cezura nakon „onoga".'},
  {kat:'stih',term:'Rima',def:'U Smail-agi <strong>rijetka i neregularna</strong> — povremeno se pojavljuje, ne kao pravilo. Često parna AABB. Glavna zvukovna snaga djela u ritmu, ne rimi.'},
  {kat:'stih',term:'Strofa',def:'U djelu nema strogih strofa — stihovi teku u narativnim blokovima. <em>Kob</em> je najsažetije pjevanje s 34 stiha kao cjelinom.'},
  {kat:'stih',term:'Ritam',def:'Dinamička izmjena osmerca (ubrzani) i deseterca (svečani). Ritam prati emocionalnu temperaturu scene. <em>Harač</em> ima najdramatičniji ritam.'},
  {kat:'stih',term:'Hemistih',def:'Polovica stiha odvojena cezurom. U osmercu: 4 sloga; u desetercu: 4 i 6 slogova. Osnova rasporeda značenja.'},
  {kat:'stih',term:'Metrička raznolikost',def:'Korištenje različitih stihova u istom djelu. Smail-aga kombinira osmerac i deseterac — obilježje zrelog romantičarskog spjeva.'},

  // === SPJEV / ŽANR (10 pojmova) ===
  {kat:'spjev',term:'Spjev',def:'<strong>Kraće narativno djelo u stihu</strong>, objedinjuje epsku, dramsku i lirsku komponentu. Kraće od epa, ali zreliji po motivu i formi. Smail-aga = 1134 stiha.'},
  {kat:'spjev',term:'Ep',def:'<strong>Dugo narativno djelo u stihu</strong> (tisuće stihova). Primjeri: Ilijada, Osman, Judita. Smail-aga <em>nije ep</em> — kraća i s jačim lirsko-dramskim komponentama.'},
  {kat:'spjev',term:'Pjevanje',def:'<strong>Veća kompozicijska cjelina</strong> u epu/spjevu. Smail-aga ima <strong>5 pjevanja</strong> (Agovanje, Noćnik, Četa, Harač, Kob). Svako ima vlastitu dramsku funkciju.'},
  {kat:'spjev',term:'Agovanje',def:'<strong>I. pjevanje</strong> (~180 stihova). Smail-aga u Stolcu muči Crnogorce, ubija Duraka. <em>Ekspozicija</em> — uvedeni svi likovi.'},
  {kat:'spjev',term:'Noćnik',def:'<strong>II. pjevanje</strong> (~160 stihova). Novičino noćno putovanje iz Stolca na Cetinje. <em>Prelazak</em> — od krvnika do osvetnika.'},
  {kat:'spjev',term:'Četa',def:'<strong>III. pjevanje</strong> (~145 stihova). Crnogorska četa na Cetinju se duhovno priprema. <em>Svećenikov govor = ideološki centar djela.</em>'},
  {kat:'spjev',term:'Harač',def:'<strong>IV. pjevanje</strong> — najduže (623 stiha). Aga na Gackom polju prikuplja porez; stiže oluja; bitka; <em>agina smrt</em>. Kulminacija.'},
  {kat:'spjev',term:'Kob',def:'<strong>V. pjevanje</strong> — najkraće (34 stiha). Pustinjak na Lovćenu. <em>Filozofski epilog</em> — refleksija o prolaznosti sile.'},
  {kat:'spjev',term:'Romantičarski spjev',def:'<strong>Žanrovski tip</strong> — 19. st., srednja duljina, naglasak na <em>emociji, nacionalnoj temi, moralnom patosu</em>. Smail-aga je prototipski primjer.'},
  {kat:'spjev',term:'Kompozicijski okvir',def:'Djelo otvara Agovanje (moć tiranije), zatvara Kob (pad tiranije). <strong>Simetrična struktura</strong> — tiranija podiže i pada.'},

  // === STILSKA SREDSTVA (12 pojmova) ===
  {kat:'stil',term:'Slavenska antiteza',def:'<strong>Narodno-epska tehnika:</strong> pitanje → negacija → odgovor. <em>„Je li hajduk, il\\u2019 uhoda turska? Nit je hajduk, nit uhoda turska, već Novica..."</em> (II. Noćnik).'},
  {kat:'stil',term:'Epitet',def:'Pridjev koji opisuje karakter. U Smail-agi: <em>„mrki vuk"</em> (aga), <em>„krvnik Crne Gore"</em> (Novica), <em>„sviloruna krda"</em>, <em>„oholi silnik"</em>.'},
  {kat:'stil',term:'Metafora',def:'Preneseno značenje. <em>„S planinskoga gladna miša"</em> — Novica kao glad za osvetom. <em>„Vranom vranu plijen"</em> — agina smrt.'},
  {kat:'stil',term:'Antiteza / kontrast',def:'Suprotstavljanje. <strong>Smail-aga</strong> (tiranija) ↔ <strong>Crnogorci</strong> (sloboda). <strong>Novica prije</strong> ↔ <strong>Novica poslije</strong> pokrštenja.'},
  {kat:'stil',term:'Hiperbola',def:'Namjerno pretjerivanje. Opis aginog bijesa u Agovanju; opis oluje u Haraču; opis Crnogorske hrabrosti u III. Četi.'},
  {kat:'stil',term:'Personifikacija',def:'Apstraktni pojam/priroda kao aktivni subjekt. <strong>Oluja u IV. Haraču</strong> — priroda kao moralni sudac. <strong>Noć</strong> kao pomoć Novici.'},
  {kat:'stil',term:'Apostrofa',def:'Oslovljavanje odsutne osobe. <strong>Svećenikova obraćanja vojnicima</strong> u III. Četi — retorička napetost monologa.'},
  {kat:'stil',term:'Kletva / blagoslov',def:'Direktno proklinjanje/blagoslov. <em>„Boj se onoga tko je viko bez golema mrijet jada!"</em> — Durakova kletva/opomena.'},
  {kat:'stil',term:'Nabrajanje',def:'Niz srodnih pojmova. Nabrajanje mučenja u I. Agovanju (kolac, vješanje, odrubljivanje) — pojačanje užasa tiranije.'},
  {kat:'stil',term:'Biblijska aluzija',def:'Aluzija na Bibliju/kršćanstvo. <em>„Sve je grijeh, sve su djela prika; Bez kajanja nema oprosnika"</em> (III. Četa) — svećenikov jezik.'},
  {kat:'stil',term:'Retoričko pitanje',def:'Pitanje bez stvarnog odgovora, za emfazu. <em>„Je li hajduk, il\\u2019 uhoda turska...?"</em> — početak slavenske antiteze.'},
  {kat:'stil',term:'Ironija',def:'Kaže se jedno, misli drugo. <em>„Dobar junak — da je čovjek taki"</em> — narator o agi: junak po obliku, nečovjek po biti.'},

  // === LIKOVI / RADNJA (11 pojmova) ===
  {kat:'likovi',term:'Smail-aga Čengić',def:'<strong>Središnji antagonist</strong>. Bosansko-hercegovački <em>muselim</em> (turski guverner). Demonski lik — ohol, krvnik, tašt. Pojavljuje se samo u Agovanju i Haraču, ali dominira djelom.'},
  {kat:'likovi',term:'Novica',def:'<strong>Glavni protagonist.</strong> Durakov sin, agin <em>kavaz</em> (stražar). Prelazi od krvnika Crne Gore do krsnog osvetnika. <em>Jedini individualizirani lik u djelu.</em>'},
  {kat:'likovi',term:'Durak',def:'<strong>Stariji Turčin</strong>, agin savjetnik, Novicin otac. U stvarnosti se zvao <em>Milutin</em> (Mažuranić ga turči radi pjesničke slobode). Ubije ga aga jer ga savjetovao.'},
  {kat:'likovi',term:'Crnogorci (kolektiv)',def:'<strong>Kolektivni junak.</strong> Brđani, junaci koji pate pod tiranijom. Hrabri, šute pred mukama, junački umiru. <em>Nisu individualizirani</em> — simbol slobodarskog naroda.'},
  {kat:'likovi',term:'Svećenik',def:'Crnogorski pravoslavni svećenik. <strong>Glas moralnog autoriteta.</strong> Domoljubni govor u III. Četi — poziv na borbu u ime Boga i slobode.'},
  {kat:'likovi',term:'Pustinjak',def:'Refleksivni lik u <strong>V. Kobi</strong>. Na <em>Lovćenu</em>. Mažuranićev autorski glas — filozofska refleksija o prolaznosti sile i konačnoj pravdi.'},
  {kat:'likovi',term:'Mirko',def:'Mladi Crnogorac ubijen na početku aginih mučenja. <em>Prvi simbol nevinih žrtava</em>. Ime čitatelju ostaje — emocionalna motivacija za osvetu.'},
  {kat:'likovi',term:'Bauk',def:'Jedan od aginih slugu. <strong>Pjeva rugalicu</strong> mrtvom agi. Preživljava bitku — ironični svjedok kraja tiranije.'},
  {kat:'likovi',term:'Omer, Jašar, Mujo, Safer',def:'Individualizirani Turci iz aginog logora. <em>„Loše sluge lošeg gospodara"</em> — spremni ga napustiti. Safer je ulizica i nasilnik.'},
  {kat:'likovi',term:'Kavaz',def:'Turski naziv za <strong>agina stražara/čuvara</strong>. Novica je bio kavaz prije pokrštenja. Označava odanost tiraninu.'},
  {kat:'likovi',term:'Muselim',def:'Turski naziv za <strong>lokalnog guvernera</strong> (vladara) u provinciji. Smail-aga je bio muselim Hercegovine. Povijesna funkcija pod turskom vlašću.'},

  // === PREPOROD (8 pojmova) ===
  {kat:'preporod',term:'Hrvatski narodni preporod',def:'<strong>Kulturno-politički pokret</strong> 1835.–1848. Cilj: standardizacija hrv. književnog jezika, nacionalno buđenje. <em>Ilirski pokret</em> je njegov srodnik.'},
  {kat:'preporod',term:'Ilirski pokret',def:'<strong>Politička dimenzija preporoda.</strong> Zagovara južnoslavensku solidarnost pod imenom „iliri". Zabranjeno 1843., pokret nastavlja pod hrv. imenom.'},
  {kat:'preporod',term:'Ljudevit Gaj',def:'<strong>Vođa preporoda.</strong> 1830. objavljuje <em>Kratku osnovu horvatsko-slavenskog pravopisanja</em>. 1835. pokreće <em>Danicu</em>. Standardizira latinicu („Gajica") i štokavštinu.'},
  {kat:'preporod',term:'Danica',def:'<strong>Gajev časopis</strong> — od 1835. <em>„Danica horvatska, slavonska i dalmatinska"</em>; od 1836. <em>„Danica ilirska"</em>. Glavno glasilo preporoda.'},
  {kat:'preporod',term:'Gajica',def:'<strong>Moderna hrv. latinica</strong> koju je Gaj standardizirao (1830.). Dijakritike: č, ć, š, ž, đ. Temelj današnjeg hrv. pravopisa.'},
  {kat:'preporod',term:'Štokavština',def:'<strong>Narječje koje preporod prihvaća</strong> kao hrv. književni jezik. Najrasprostranjenije među Južnim Slavenima. Baza Gundulićevog i Mažuranićevog jezika.'},
  {kat:'preporod',term:'Budnica',def:'<strong>Programska pjesma preporoda</strong> s domoljubnom tematikom. Mažuranić piše budnice (<em>Vjekovi Ilirije</em>, <em>Horvatskoj</em>) u <em>Danici</em>.'},
  {kat:'preporod',term:'Iskra',def:'<strong>Almanah</strong> u kojem je 1846. objavljena <em>Smrt Smail-age Čengića</em>. Izlazio u Zadru, urednik <em>Dimitrije Demeter</em>. Važna publikacija preporoda.'},

  // === ROMANTIZAM (9 pojmova) ===
  {kat:'romantizam',term:'Romantizam',def:'<strong>Europski književni pokret</strong> kraj 18. – sredina 19. st. Obilježja: <em>emocija, nacionalna tema, priroda, pojedinac, patos</em>. Smail-aga je hrv. romantizam.'},
  {kat:'romantizam',term:'Hrvatski romantizam',def:'Razvija se u okviru <strong>preporoda</strong> (1835.–1848.). Spaja nacionalnu tematiku s romantičarskom poetikom. Glavni predstavnik: <strong>Ivan Mažuranić</strong>.'},
  {kat:'romantizam',term:'Nacionalna tematika',def:'Borba za slobodu naroda, povijesni motivi, domoljublje. <strong>Ključna za romantizam</strong> — naročito u Slavenskim zemljama pod okupacijom.'},
  {kat:'romantizam',term:'Romantičarski junak',def:'<strong>Individualizirani lik s unutarnjom borbom</strong> (Novica) ili <em>idealizirani kolektivni junak</em> (Crnogorci). Oštro polariziran s antagonistom.'},
  {kat:'romantizam',term:'Priroda kao sudionik',def:'<strong>Priroda moralno aktivna</strong> — podržava pravedne, kažnjava zle. Oluja u IV. Haraču svrstava se protiv Smail-age. Tipični romantičarski motiv.'},
  {kat:'romantizam',term:'Moralni patos',def:'<strong>Snažne emocije u službi moralne poruke.</strong> Svećenikov govor, pustinjakov monolog, Durakova opomena. Pojačavaju ideološki učinak.'},
  {kat:'romantizam',term:'Polarizacija likova',def:'<strong>Oštra crno-bijela podjela</strong> na Dobro i Zlo. Smail-aga = Zlo (apsolutno); Crnogorci + Novica = Dobro. Nema sivih zona — tipično romantično.'},
  {kat:'romantizam',term:'Usmena poezija',def:'<strong>Narodna poezija kao inspiracija.</strong> Romantizam okreće pogled k narodu — stihovi (osmerac, deseterac), tehnike (slavenska antiteza), motivi.'},
  {kat:'romantizam',term:'Evropski romantizam',def:'Byron (Engleska), Mickiewicz (Poljska), Puškin (Rusija), Petőfi (Mađarska). Smail-aga se svrstava među ove spjevove o nacionalnoj borbi za slobodu.'},

  // === JEZIK / TURCIZMI (6 pojmova) ===
  {kat:'jezik',term:'Turcizmi',def:'<strong>Riječi turskoga podrijetla</strong> u djelu: <em>aga, kavaz, muselim, harač, delija, kapija, toke, fišek, kulaš, sofra, jatagan, kidisati</em>. Autentičnost konteksta.'},
  {kat:'jezik',term:'Arhaizmi',def:'<strong>Stare, izašle riječi:</strong> <em>tudijer</em> (tu), <em>jerbo</em> (jer), <em>vaj</em> (jao), <em>prik</em> (preko), <em>cić</em> (radi). Epski, biblijski ton djela.'},
  {kat:'jezik',term:'Harač',def:'<strong>Godišnji porez</strong> koji su ne-muslimani plaćali turskoj vlasti. IV. pjevanje Smail-age. Simbol eksploatacije i tiranije.'},
  {kat:'jezik',term:'Aga',def:'<strong>Turski naslov</strong> — starješina, zapovjednik. Smail-aga je bio ne samo aga nego i <em>muselim</em> (guverner). Turcizam ušao u hrv. jezik.'},
  {kat:'jezik',term:'Biblijski izrazi',def:'Riječi religijskog registra u svećenikovom govoru: <em>grijeh, kajanje, oprosnik</em>. Spajaju djelo s kršćanskom moralnom tradicijom.'},
  {kat:'jezik',term:'Er umjesto vokalnog r',def:'Mažuranićev <strong>izvorni pravopis</strong>: <em>kerv</em> (krv), <em>serce</em> (srce), <em>kerst</em> (krst). Predgajevska grafija — djelo piše u preporodnoj tranziciji.'},
];

let pojm2Active = 'all';

function renderPojm2() {
  const grid = document.getElementById('pojm-grid2');
  if (!grid) return;
  const show = pojm2Active === 'all' ? POJM_DATA2 : POJM_DATA2.filter(p => p.kat === pojm2Active);
  grid.innerHTML = show.map(p => \`
    <div class="pojm-card" data-cat="\${p.kat}" onclick="this.classList.toggle('flip')">
      <div class="pojm-front">
        <div class="pojm-term">\${p.term}</div>
        <div class="pojm-hint">→ klikni</div>
      </div>
      <div class="pojm-back">
        <div class="pojm-def">\${p.def}</div>
      </div>
    </div>
  \`).join('');
}

function pojmFilter2(cat, btn) {
  document.querySelectorAll('.pojm-filter').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  pojm2Active = cat;
  renderPojm2();
  // Also update flashcard array if in FC mode
  if(pj2Data.length === 0 || pojm2Active !== cat) pj2Build();
}

renderPojm2();

/* ═══════════════════════════════════
   POJMOVNIK FLASHCARD MODE (H11 pj2*)
═══════════════════════════════════ */
let pj2Idx=0, pj2Data=[], pj2Seen={};

function pj2Build(){
  const src = pojm2Active==='all' ? POJM_DATA2 : POJM_DATA2.filter(p=>p.kat===pojm2Active);
  pj2Data = src;
  pj2Idx = 0;
  pj2Seen = {};
  pj2Render();
}

function pj2Render(){
  if(!pj2Data.length) return;
  const p = pj2Data[pj2Idx];
  const scene = document.getElementById('fc-scene2');
  const inner = document.getElementById('fc-inner2');
  if(scene) scene.classList.remove('flipped');
  if(inner) inner.style.transform='';

  const cat = document.getElementById('fc-cat2');
  const term = document.getElementById('fc-term2');
  const def = document.getElementById('fc-def2');
  const counter = document.getElementById('fc-counter2');
  const prev = document.getElementById('fc-prev2');
  const next = document.getElementById('fc-next2');

  if(cat) cat.textContent = p.kat.toUpperCase();
  if(term) term.textContent = p.term;
  if(def) def.innerHTML = p.def;
  if(counter) counter.textContent = (pj2Idx+1)+' / '+pj2Data.length;
  if(prev) prev.disabled = pj2Idx === 0;
  if(next) next.disabled = pj2Idx === pj2Data.length-1;

  pj2Seen[pj2Idx] = true;
  pj2RenderDots();
}

function pj2RenderDots(){
  const prog = document.getElementById('fc-progress2');
  if(!prog || pj2Data.length > 20) return;
  prog.innerHTML = pj2Data.map((_,i)=>\`<div class="fc-dot\${pj2Seen[i]?' seen':''}\${i===pj2Idx?' known':''}"></div>\`).join('');
}

function pj2Flip(){
  const scene = document.getElementById('fc-scene2');
  if(scene) scene.classList.toggle('flipped');
}

function pj2Next(){
  if(pj2Idx < pj2Data.length-1){ pj2Idx++; pj2Render(); }
}

function pj2Prev(){
  if(pj2Idx > 0){ pj2Idx--; pj2Render(); }
}

function setPojmMode2(mode){
  const gw = document.getElementById('grid-wrap2');
  const fw = document.getElementById('fc-wrap2');
  const mb1 = document.getElementById('mode-grid');
  const mb2 = document.getElementById('mode-fc');
  if(mode==='fc'){
    if(gw) gw.style.display='none';
    if(fw){ fw.style.display='flex'; }
    if(mb1) mb1.classList.remove('on');
    if(mb2) mb2.classList.add('on');
    pj2Build();
    document.onkeydown = function(e){
      if(e.key==='ArrowRight') pj2Next();
      else if(e.key==='ArrowLeft') pj2Prev();
      else if(e.key===' '||e.key==='Enter'){ e.preventDefault(); pj2Flip(); }
    };
  } else {
    if(gw) gw.style.display='';
    if(fw) fw.style.display='none';
    if(mb1) mb1.classList.add('on');
    if(mb2) mb2.classList.remove('on');
    document.onkeydown = null;
  }
}

/* ═══════════════════════════════════
   KEYBOARD SHORTCUTS
═══════════════════════════════════ */
(function(){
  let helpShown=false;
  document.addEventListener('keydown', function(e){
    // Ignore when typing in inputs/textareas
    const target=e.target.tagName;
    if(target==='INPUT'||target==='TEXTAREA'||e.target.isContentEditable)return;
    
    const activeTab=Array.from(document.querySelectorAll('.tab')).findIndex(t=>t.classList.contains('on'));
    
    // Arrow navigation between tabs
    if(e.key==='ArrowRight'&&activeTab<7){
      e.preventDefault();
      sw(activeTab+1);
    } else if(e.key==='ArrowLeft'&&activeTab>0){
      e.preventDefault();
      sw(activeTab-1);
    }
    // Number keys 1-8 for direct tab access
    else if(/^[1-8]$/.test(e.key)){
      e.preventDefault();
      sw(parseInt(e.key)-1);
    }
    // ? for help
    else if(e.key==='?'){
      e.preventDefault();
      if(helpShown){
        document.getElementById('kbd-help')?.remove();
        helpShown=false;
        return;
      }
      const help=document.createElement('div');
      help.id='kbd-help';
      help.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--ele);border:1px solid var(--gold);border-radius:var(--r3);padding:24px 28px;z-index:500;box-shadow:0 8px 40px rgba(0,0,0,.6);max-width:90vw';
      help.innerHTML=\`
        <h3 style="margin-bottom:12px;color:var(--gold);font-family:var(--display)">⌨ Kratice</h3>
        <div style="display:grid;grid-template-columns:auto 1fr;gap:8px 14px;font-family:var(--serif);font-size:13px">
          <span><span class="kbd">←</span> <span class="kbd">→</span></span><span>Prethodni / Sljedeći tab</span>
          <span><span class="kbd">1</span> – <span class="kbd">8</span></span><span>Skok direktno na tab</span>
          <span><span class="kbd">?</span></span><span>Prikaži / sakrij ovu pomoć</span>
          <span><span class="kbd">Esc</span></span><span>Zatvori dialog / izađi iz polja</span>
          <span><span class="kbd">Ctrl</span>+<span class="kbd">P</span></span><span>Print / PDF</span>
        </div>
        <div style="margin-top:14px;text-align:right">
          <button class="fcb" onclick="document.getElementById('kbd-help').remove();">Zatvori</button>
        </div>
      \`;
      document.body.appendChild(help);
      helpShown=true;
    }
    // Escape closes help/sidebar
    else if(e.key==='Escape'){
      document.getElementById('kbd-help')?.remove();
      helpShown=false;
      closeSb();
    }
  });
})();

if('IntersectionObserver' in window){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.opacity='1';
        e.target.style.transform='translateY(0)';
      }
    });
  },{threshold:0.1});
  
  document.querySelectorAll('.scene-card,.ac,.box-key,.fq,.tbl-wrap').forEach(el=>{
    el.style.opacity='0';
    el.style.transform='translateY(12px)';
    el.style.transition='opacity .4s ease, transform .4s ease';
    obs.observe(el);
  });
}

function toggleSidebar(){var s=document.getElementById('sidebar'),o=document.getElementById('overlay');if(s)s.classList.toggle('mobile-open');if(o)o.classList.toggle('show')}
;
/* TIER_SYSTEM_JS_INJECTED */
/**
 * Maturiraj.hr — Tier Helper Module
 * 
 * Globalni JS modul za upravljanje tier sustavom (Free / Standard / Pro).
 * Koristi se u svim chapterima i pricing page-u.
 * 
 * 🚨 PRODUCTION TODO:
 * - Tier provjera mora ići preko Supabase (auth.uid() → user_subscriptions tablica)
 * - Trenutno mock kroz localStorage 'mt.pro_mode' = 'free' | 'standard' | 'pro'
 * - Dnevni limiti se moraju validirati na backendu
 * 
 * Verzija: 1.0
 * Autor: Maturiraj.hr team
 */

(function(window) {
  'use strict';

  // ════════════════════════════════════════════════
  // CONFIG — Tier Definicija
  // ════════════════════════════════════════════════
  
  const TIER_CONFIG = {
    free: {
      name: 'Free',
      label: '🆓 Free',
      price: 0,
      color: 'var(--t3, #888)',
      features: {
        // TEORIJA — sve free
        all_theory: true,
        all_quizzes: true,
        ncvvo_errors: true,
        glossary: true,
        cheatsheet: true,
        diagnostics: true,
        // ALATI — sve free
        score_calculator: true,
        plagiarism_detector: true,
        objectivity_detector: true,
        speed_drill: true,
        proofreading_game: true,
        // WORKSPACE — limited
        essay_workspace: true,
        summary_workspace: true,
        max_essays: 1,            // 1 esej max
        max_summaries: 1,         // 1 sažetak max
        all_essay_models: false,  // 1 vidljiv
        all_summary_models: false,
        export_workspace: false,  // bez exporta
        // SIMULATORI — 0 demo
        discere_simulators: false,
        max_simulators: 0,
        // PLAN UČENJA — pregled
        study_plan_preview: true,
        study_plan_full: false,
        // STATS
        streak_tracking: false,
        heatmap: false,
        progress_analytics: false,
        // PARENT
        parent_dashboard: false,
        // AI — sve zaključano
        ai_chat: false,
        ai_feedback: false,
        ai_personal_plan: false,
        // PRIJEMNI
        prijemni: false,
      },
      ai_limits: {
        feedback_per_day: 0,
        chat_per_day: 0,
      }
    },
    
    standard: {
      name: 'Standard',
      label: '⭐ Standard',
      price: 9.99,
      color: 'var(--blue, #4a90d9)',
      features: {
        // TEORIJA — sve
        all_theory: true,
        all_quizzes: true,
        ncvvo_errors: true,
        glossary: true,
        cheatsheet: true,
        diagnostics: true,
        // ALATI — sve
        score_calculator: true,
        plagiarism_detector: true,
        objectivity_detector: true,
        speed_drill: true,
        proofreading_game: true,
        // WORKSPACE — full
        essay_workspace: true,
        summary_workspace: true,
        max_essays: -1,           // unlimited
        max_summaries: -1,        // unlimited
        all_essay_models: true,
        all_summary_models: true,
        export_workspace: true,
        // SIMULATORI — svi (70 ispita)
        discere_simulators: true,
        max_simulators: -1,
        // PLAN UČENJA — full
        study_plan_preview: true,
        study_plan_full: true,
        // STATS
        streak_tracking: true,
        heatmap: true,
        progress_analytics: true,
        // PARENT
        parent_dashboard: true,
        // AI — sve zaključano (Standard NEMA AI!)
        ai_chat: false,
        ai_feedback: false,
        ai_personal_plan: false,
        // PRIJEMNI
        prijemni: false,
      },
      ai_limits: {
        feedback_per_day: 0,
        chat_per_day: 0,
      }
    },
    
    pro: {
      name: 'Pro',
      label: '💎 Pro',
      price: 19.99,
      color: 'var(--gold, #e9b446)',
      features: {
        // Sve iz Standard
        all_theory: true,
        all_quizzes: true,
        ncvvo_errors: true,
        glossary: true,
        cheatsheet: true,
        diagnostics: true,
        score_calculator: true,
        plagiarism_detector: true,
        objectivity_detector: true,
        speed_drill: true,
        proofreading_game: true,
        essay_workspace: true,
        summary_workspace: true,
        max_essays: -1,
        max_summaries: -1,
        all_essay_models: true,
        all_summary_models: true,
        export_workspace: true,
        discere_simulators: true,
        max_simulators: -1,
        study_plan_preview: true,
        study_plan_full: true,
        streak_tracking: true,
        heatmap: true,
        progress_analytics: true,
        parent_dashboard: true,
        // AI — sve unlocked (PRO ONLY)
        ai_chat: true,
        ai_feedback: true,
        ai_personal_plan: true,
        // PRIJEMNI — Pro only
        prijemni: true,
      },
      ai_limits: {
        feedback_per_day: 20,    // 2B odluka
        chat_per_day: 30,        // 2B odluka
        plan_refresh_per_week: 1,
      }
    }
  };

  // ════════════════════════════════════════════════
  // STORAGE KEYS
  // ════════════════════════════════════════════════
  
  const STORAGE_KEYS = {
    tier: 'mt.pro_mode',
    daily_usage: 'mt.daily_usage',
    weekly_usage: 'mt.weekly_usage',
  };

  // ════════════════════════════════════════════════
  // CORE API
  // ════════════════════════════════════════════════
  
  /**
   * Vraća trenutni tier korisnika.
   * @returns {'free' | 'standard' | 'pro'}
   */
  function getTier() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.tier);
      if (stored === 'pro' || stored === 'standard') return stored;
      return 'free';
    } catch (e) {
      return 'free';
    }
  }

  /**
   * Postavlja tier (mock — produkcija ovo radi preko Supabase).
   */
  function setTier(tier) {
    if (!['free', 'standard', 'pro'].includes(tier)) {
      console.error('[tier_helper] Invalid tier:', tier);
      return false;
    }
    try {
      if (tier === 'free') {
        localStorage.removeItem(STORAGE_KEYS.tier);
      } else {
        localStorage.setItem(STORAGE_KEYS.tier, tier);
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Toggle tier (free → standard → pro → free)
   * Koristi se u dev mode-u.
   */
  function toggleTier() {
    const current = getTier();
    const next = current === 'free' ? 'standard' : (current === 'standard' ? 'pro' : 'free');
    setTier(next);
    return next;
  }

  /**
   * Provjerava ima li korisnik feature.
   * @param {string} feature - npr 'ai_feedback', 'all_simulators'
   * @returns {boolean}
   */
  function hasFeature(feature) {
    const tier = getTier();
    const config = TIER_CONFIG[tier];
    if (!config) return false;
    return config.features[feature] === true;
  }

  /**
   * Vraća konfiguraciju tier-a (label, cijena, boja).
   * @param {string} tier - opcionalno; ako nije zadan, vraća za current.
   */
  function getTierConfig(tier) {
    return TIER_CONFIG[tier || getTier()] || TIER_CONFIG.free;
  }

  /**
   * Vraća vrijednost numeričkog limita feature-a.
   * @param {string} feature - npr 'max_essays', 'max_simulators'
   * @returns {number} -1 = unlimited, 0 = nema, X = točno X
   */
  function getLimit(feature) {
    const tier = getTier();
    const config = TIER_CONFIG[tier];
    if (!config) return 0;
    const val = config.features[feature];
    if (val === true) return -1; // unlimited
    if (val === false) return 0;
    return val;
  }

  /**
   * Vraća AI limit (feedback / chat / plan).
   * @param {string} type - 'feedback' | 'chat' | 'plan'
   */
  function getAILimit(type) {
    const tier = getTier();
    const config = TIER_CONFIG[tier];
    if (!config || !config.ai_limits) return 0;
    
    const map = {
      feedback: 'feedback_per_day',
      chat: 'chat_per_day',
      plan: 'plan_refresh_per_week'
    };
    return config.ai_limits[map[type]] || 0;
  }

  // ════════════════════════════════════════════════
  // USAGE TRACKING
  // ════════════════════════════════════════════════
  
  /**
   * Vraća današnju potrošnju feature-a.
   */
  function getDailyUsage(feature) {
    try {
      const today = new Date().toISOString().split('T')[0];
      const stored = localStorage.getItem(STORAGE_KEYS.daily_usage);
      if (!stored) return 0;
      const data = JSON.parse(stored);
      if (data.date !== today) return 0;
      return data.usage[feature] || 0;
    } catch (e) {
      return 0;
    }
  }

  /**
   * Inkrementira potrošnju feature-a.
   */
  function incrementDailyUsage(feature) {
    const today = new Date().toISOString().split('T')[0];
    let data = { date: today, usage: {} };
    
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.daily_usage);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.date === today) data = parsed;
      }
    } catch (e) {}
    
    data.usage[feature] = (data.usage[feature] || 0) + 1;
    
    try {
      localStorage.setItem(STORAGE_KEYS.daily_usage, JSON.stringify(data));
    } catch (e) {}
    
    return data.usage[feature];
  }

  /**
   * Provjerava može li korisnik koristiti AI feature (limit + tier check).
   * @returns {{ allowed: boolean, reason: string, used: number, limit: number }}
   */
  function canUseAI(type) {
    const tier = getTier();
    const limit = getAILimit(type);
    const used = getDailyUsage('ai_' + type);
    
    if (limit === 0) {
      return {
        allowed: false,
        reason: 'tier_locked',
        tier_required: 'pro',
        used: 0,
        limit: 0
      };
    }
    
    if (used >= limit) {
      return {
        allowed: false,
        reason: 'daily_limit_reached',
        tier_required: tier,
        used,
        limit
      };
    }
    
    return {
      allowed: true,
      reason: 'ok',
      used,
      limit
    };
  }

  // ════════════════════════════════════════════════
  // PAYWALL MODAL
  // ════════════════════════════════════════════════
  
  /**
   * Prikazuje paywall modal.
   * @param {object} options
   * @param {string} options.feature - naziv feature-a
   * @param {string} options.requiredTier - 'standard' | 'pro'
   * @param {string} options.reason - razlog (free_limit / tier_locked / daily_limit)
   */
  function showPaywall(options) {
    const opts = options || {};
    const requiredTier = opts.requiredTier || 'standard';
    const reason = opts.reason || 'feature_locked';
    const feature = opts.feature || 'Ovaj feature';
    
    // Remove existing modal
    const existing = document.getElementById('mt-paywall-modal');
    if (existing) existing.remove();
    
    const reasonText = {
      free_limit: 'Iskoristio si Free limit za ovaj feature.',
      tier_locked: 'Ovaj feature je dostupan u Standard ili Pro pretplati.',
      daily_limit: 'Iskoristio si svoj dnevni limit. Vrati se sutra ili upgradaj na viši tier.',
      feature_locked: 'Ovaj feature zahtijeva pretplatu.'
    };
    
    const modal = document.createElement('div');
    modal.id = 'mt-paywall-modal';
    modal.className = 'mt-paywall-overlay';
    modal.innerHTML = \`
      <div class="mt-paywall-modal" onclick="event.stopPropagation()">
        <button type="button" class="mt-paywall-close" onclick="MT.Tier.closePaywall()" aria-label="Zatvori">×</button>
        
        <div class="mt-paywall-header">
          <div class="mt-paywall-icon">\${requiredTier === 'pro' ? '💎' : '⭐'}</div>
          <div class="mt-paywall-title">\${feature}</div>
          <div class="mt-paywall-subtitle">\${reasonText[reason] || reasonText.feature_locked}</div>
        </div>
        
        <div class="mt-paywall-tiers">
          \${requiredTier !== 'pro' ? \`
          <div class="mt-paywall-tier mt-paywall-tier-standard \${requiredTier === 'standard' ? 'mt-paywall-tier-recommended' : ''}">
            \${requiredTier === 'standard' ? '<div class="mt-paywall-badge">Preporučeno</div>' : ''}
            <div class="mt-paywall-tier-name">⭐ Standard</div>
            <div class="mt-paywall-tier-price">9,99€<span>/mj</span></div>
            <ul class="mt-paywall-tier-features">
              <li>✅ Cijela teorija + kvizovi</li>
              <li>✅ Svi Discere simulatori (70 ispita)</li>
              <li>✅ Sve modelne eseje (9) + sažetke (10)</li>
              <li>✅ Neograničeno u Workspace</li>
              <li>✅ Parent dashboard</li>
              <li>✅ Streak + heatmap + analitika</li>
              <li>❌ Bez AI features</li>
            </ul>
            <button type="button" class="mt-paywall-cta" onclick="MT.Tier.subscribe('standard')">
              Pretplati se na Standard
            </button>
          </div>
          \` : ''}
          
          <div class="mt-paywall-tier mt-paywall-tier-pro \${requiredTier === 'pro' ? 'mt-paywall-tier-recommended' : ''}">
            \${requiredTier === 'pro' ? '<div class="mt-paywall-badge">Preporučeno</div>' : ''}
            <div class="mt-paywall-tier-name">💎 Pro</div>
            <div class="mt-paywall-tier-price">19,99€<span>/mj</span></div>
            <ul class="mt-paywall-tier-features">
              <li>✅ Sve iz Standard</li>
              <li>✅ <strong>🤖 AI Profesor (chat) — 30/dan</strong></li>
              <li>✅ <strong>🤖 AI Feedback za eseje + sažetke — 20/dan</strong></li>
              <li>✅ <strong>Personalizirani plan učenja</strong></li>
              <li>✅ <strong>Prijemni priprema</strong></li>
              <li>✅ Priority AI queue</li>
            </ul>
            <button type="button" class="mt-paywall-cta mt-paywall-cta-pro" onclick="MT.Tier.subscribe('pro')">
              Pretplati se na Pro
            </button>
          </div>
        </div>
        
        <div class="mt-paywall-footer">
          <a href="Maturiraj_Pricing.html" class="mt-paywall-link">Vidi sve tier opcije →</a>
          <span class="mt-paywall-divider">·</span>
          <button type="button" class="mt-paywall-link mt-paywall-link-btn" onclick="MT.Tier.toggleTierDevMode()">
            🧪 Dev: Toggle tier (trenutno: \${getTier().toUpperCase()})
          </button>
        </div>
      </div>
    \`;
    
    modal.addEventListener('click', closePaywall);
    document.body.appendChild(modal);
    
    // Disable body scroll
    document.body.style.overflow = 'hidden';
  }

  function closePaywall() {
    const modal = document.getElementById('mt-paywall-modal');
    if (modal) {
      modal.remove();
      document.body.style.overflow = '';
    }
  }

  function subscribe(tier) {
    // 🚨 PRODUCTION TODO: Stripe Checkout integration
    // Plan: Stripe Checkout Session → success_url: /pretplata/success?tier=X
    // Backend writes to Supabase user_subscriptions, then redirects back
    
    // For now: mock behavior — set tier, close paywall, reload
    if (confirm(\`🚧 Pretplata u izradi (Stripe checkout uskoro).\\n\\nMock: Postaviti tier na \${tier === 'pro' ? 'Pro 19,99€' : 'Standard 9,99€'}/mj?\\n\\nKliknite OK za mock pretplatu.\`)) {
      setTier(tier);
      closePaywall();
      location.reload();
    }
  }

  function toggleTierDevMode() {
    const next = toggleTier();
    alert(\`🧪 Dev mode — tier postavljen na: \${next.toUpperCase()}\`);
    closePaywall();
    location.reload();
  }

  // ════════════════════════════════════════════════
  // SIDEBAR TIER BADGE
  // ════════════════════════════════════════════════
  
  /**
   * Injectsa tier badge u sidebar (ako postoji).
   */
  function injectSidebarBadge() {
    const sidebar = document.querySelector('.sidebar') || document.querySelector('nav.sb');
    if (!sidebar) return;
    
    // Check if already exists
    if (document.getElementById('mt-tier-badge')) return;
    
    const tier = getTier();
    const config = getTierConfig(tier);
    
    const badge = document.createElement('div');
    badge.id = 'mt-tier-badge';
    badge.className = 'mt-tier-badge mt-tier-badge-' + tier;
    badge.innerHTML = \`
      <div class="mt-tier-badge-label">\${config.label}</div>
      \${tier === 'free' ? '<button type="button" class="mt-tier-badge-cta" onclick="MT.Tier.openPricing()">Upgrade →</button>' : ''}
    \`;
    
    // Insert at top of sidebar
    const firstChild = sidebar.firstElementChild;
    if (firstChild) {
      sidebar.insertBefore(badge, firstChild);
    } else {
      sidebar.appendChild(badge);
    }
  }

  function openPricing() {
    location.href = 'Maturiraj_Pricing.html';
  }

  // ════════════════════════════════════════════════
  // PUBLIC API
  // ════════════════════════════════════════════════
  
  window.MT = window.MT || {};
  window.MT.Tier = {
    // Core
    getTier,
    setTier,
    toggleTier,
    getTierConfig,
    
    // Features
    hasFeature,
    getLimit,
    getAILimit,
    
    // Usage
    getDailyUsage,
    incrementDailyUsage,
    canUseAI,
    
    // Paywall
    showPaywall,
    closePaywall,
    subscribe,
    toggleTierDevMode,
    
    // UI
    injectSidebarBadge,
    openPricing,
    
    // Config (read-only)
    CONFIG: TIER_CONFIG
  };

  // Auto-inject sidebar badge on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSidebarBadge);
  } else {
    injectSidebarBadge();
  }

})(window);
;
/* UPDATE_PROGRESS_INJECTED */

function updateProgress(pct){
  var p=Math.max(5,pct);
  var pb=document.getElementById('prog-bar'); if(pb) pb.style.width=p+'%';
  var pct2=document.getElementById('prog-pct'); if(pct2) pct2.textContent=p+'%';
  var hp=document.getElementById('hero-pb'); if(hp) hp.style.width=p+'%';
  var hl=document.getElementById('hero-prog-lbl'); if(hl) hl.textContent=p+'% završeno';
  try { localStorage.setItem('mt.hrv.h14.prog', p); } catch(e){}
}
;
/* CIT_SEARCH_INJECTED */

function citSearch(query){
  var q = (query || '').toLowerCase().trim();
  var quotes = document.querySelectorAll('.featured-quote');
  var visible = 0;
  quotes.forEach(function(qt){
    var text = qt.textContent.toLowerCase();
    var match = !q || text.indexOf(q) !== -1;
    qt.style.display = match ? '' : 'none';
    if (match) visible++;
  });
}`;

export default function H14Chapter() {
  const containerRef = useRef(null);
  const stylesInjectedRef = useRef(false);
  const scriptsExecutedRef = useRef(false);

  useEffect(() => {
    // Inject styles (once per page mount)
    if (!stylesInjectedRef.current && STYLES_CSS) {
      const styleEl = document.createElement('style');
      styleEl.id = `chapter-styles-H14`;
      styleEl.textContent = STYLES_CSS;
      document.head.appendChild(styleEl);
      stylesInjectedRef.current = true;
    }

    // Execute inline scripts (once per page mount)
    if (!scriptsExecutedRef.current && SCRIPTS_JS) {
      try {
        const scriptEl = document.createElement('script');
        scriptEl.textContent = SCRIPTS_JS;
        document.body.appendChild(scriptEl);
        scriptsExecutedRef.current = true;
      } catch (err) {
        console.error(`[H14] Script execution error:`, err);
      }
    }

    return () => {
      // Cleanup on unmount
      const styleEl = document.getElementById(`chapter-styles-H14`);
      if (styleEl) styleEl.remove();
      stylesInjectedRef.current = false;
      scriptsExecutedRef.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="chapter-h14"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}
export const HRV_POGAVLJE_14 = null
