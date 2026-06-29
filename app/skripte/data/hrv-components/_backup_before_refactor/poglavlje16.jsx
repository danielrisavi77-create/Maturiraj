/**
 * H16 — Maturiraj.hr — Maturiraj.hr
 * Auto-generated from Maturiraj_Hrvatski_H16.html
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
  code: 'H16',
  title: 'Maturiraj.hr — Maturiraj.hr',
  description: 'Interaktivna skripta za maturu — Miroslav Krleža i Gospoda Glembajevi: dubinska analiza drame u 3 čina, ispitno djelo 2026, kontekst hrv.',
  canonical: 'https://maturiraj.hr/hrvatski/h16',
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
  <a class="sb-item" data-code="h14" href="/skripte/hrv/h14"><span class="sb-dot"></span>H14 · Preporod</a>
  <a class="sb-item" data-code="h15" href="/skripte/hrv/h15"><span class="sb-dot"></span>H15 · Šenoa i realizam</a>
  <a class="sb-item active" data-code="h16" href="/skripte/hrv/h16"><span class="sb-dot"></span>H16 · Krleža i moderna</a>

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
  <a class="sb-item sb-d" data-code="d14" href="/skripte/hrv"><span class="sb-dot"></span>D14 · Mažuranić · Smail-aga</a>
  <a class="sb-item sb-d" data-code="d15" href="/skripte/hrv"><span class="sb-dot"></span>D15 · Šenoa · Prijan Lovro</a>
  <a class="sb-item sb-d" data-code="d16" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D16 · Novak · Posljednji Stipančići</a>
  <a class="sb-item sb-d" data-code="d17" href="/skripte/hrv"><span class="sb-dot"></span>D17 · Kranjčević · poezija</a>
  <a class="sb-item sb-d" data-code="d18" href="/skripte/hrv"><span class="sb-dot"></span>D18 · Matoš · izbor</a>
  <a class="sb-item sb-d" data-code="d19" href="/skripte/hrv"><span class="sb-dot"></span>D19 · Nazor · poezija</a>
  <a class="sb-item sb-d" data-code="d20" href="/skripte/hrv"><span class="sb-dot"></span>D20 · Šimić · poezija</a>
  <a class="sb-item sb-d active" data-code="d21" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D21 · Krleža · Glembajevi</a>
  <a class="sb-item sb-d" data-code="d22" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D22 · Marinković · Kiklop</a>

  <div class="sb-footer" id="sb-footer">
    <span id="sb-footer-pos">16 / 28</span> · <span id="sb-footer-title">krleža · glembajevi</span>
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
    <span class="bc-cur">H16 · Krleža · Glembajevi</span>
    <span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-tab" id="bc-tab">Teorija</span>
  </div>

  <!-- COUNTDOWN + ACTIONS -->
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:20px">
    <div class="countdown" style="margin-bottom:0">
      ⏳ Do ispita HRV: <strong id="cd-days">—</strong> dana &nbsp;<span style="font-size:9px;color:var(--t3)">(15. 6. 2026.)</span>
    </div>
    <button class="fcb" onclick="window.print()" style="font-size:10px" title="Print / PDF (Ctrl+P)">🖨 Print</button>
    <button class="fcb" onclick="navigator.share?navigator.share({title:'H16 · Krleža · Glembajevi',url:window.location.href}):navigator.clipboard.writeText(window.location.href)" style="font-size:10px" title="Podijeli">📤 Dijeli</button>
    <span style="font-family:var(--mono);font-size:9px;color:var(--t3);margin-left:auto">
      <span class="kbd">←</span> <span class="kbd">→</span> tabovi · <span class="kbd">?</span> pomoć
    </span>
  </div>

  <!-- HERO -->
  <header class="hero">
    <div class="hero-chapter">H16 &nbsp;·&nbsp; Hrvatska književnost &nbsp;·&nbsp; Moderna (20. st.) · Deep-dive</div>
    <h1 class="hero-title">Miroslav Krleža<br><span>i Gospoda Glembajevi</span></h1>
    <p class="hero-sub">
      <strong>Najveći hrvatski dramatičar 20. st. i njegov vrhunac.</strong> Krležina drama <em>Gospoda Glembajevi</em> (1928., HNK 1929.) — psihološko-socijalna drama o propasti agramerske patricijske obitelji u jednoj noći 1913. Klasično jedinstvo mjesta, vremena, radnje. <strong>★ ispitno djelo za maturu 2026.</strong>
    </p>
    <div class="hero-chips">
      <span class="hchip br">▶ H16 deep-dive</span>
      <span class="hchip go">🎭 Glembajevi 1928.</span>
      <span class="hchip te">🏛 Krležino doba</span>
      <span class="hchip pa">★ ispitno djelo 2026</span>
      <span class="hchip re">📚 Hrv. moderna</span>
    </div>
  </header>

  <!-- TABS -->
  <div class="tabs" role="tablist" aria-label="Dijelovi poglavlja">
    <button class="tab on" id="tab0" onclick="sw(0)" role="tab" aria-selected="true" aria-controls="l0">📖 Teorija<span class="tab-done" id="td0"></span></button>
    <button class="tab" id="tab1" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">🎭 3 čina<span class="tab-done" id="td1"></span></button>
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
      <span class="pill p-pa">Miroslav Krleža</span>
      <span class="pill p-br">Gospoda Glembajevi 1928.</span>
      <span class="pill p-go">★ ispitno djelo 2026</span>
      <span class="pill p-t">Drama u 3 čina</span>
      <span class="pill p-r">Hrvatska moderna</span>
    </div>

    <!-- Soft kontekst hint — exam frequency -->
    <div class="soft-hint">
      <div class="soft-hint-ico">💡</div>
      <div class="soft-hint-body">
        Tema <b>Miroslav Krleža / Gospoda Glembajevi</b> pojavila se na MAT 2024. i MAT 2025. — <b>ispitno djelo 2026. (∼17% vjerojatnost)</b> — Leone, Ignjat i lik kao tragik su ključne esejske točke.
      </div>
    </div>

    <!-- DIJAGNOSTIKA -->
    <div class="box-int" style="margin-bottom:20px">
      <div class="box-int-lbl">🎯 Brza dijagnostika H16 — 5 pitanja</div>
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
            <h4>Provjeri gdje si s H16 — Krleža · Gospoda Glembajevi · Hrv. moderna</h4>
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
          <button class="fcb primary" id="d0rbtn" onclick="sw(1)">→ 3 čina drame</button>
        </div>
      </div>
    </div>

    <!-- SEC 01: Hrvatska moderna — kontekst -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Hrvatska moderna i avangarda — kontekst (1895.–1929.)</div><div class="sec-line"></div></div>

    <p><strong>Hrvatska moderna</strong> (1895.–1914./1916.) je književni pokret koji nasljeđuje realizam i unosi nove europske utjecaje — simbolizam, secesiju, impresionizam. <em>Naglasak na individualnom doživljaju, estetiziranom jeziku, intimnom psihološkom prikazu.</em> Krleža pripada <strong>avangardi nakon moderne</strong> (ekspresionizam, kasnije socijalna kritika), ali u kontekstu hrvatske periodizacije često se promatra zajedno s modernom kao „velika sinteza" 20. st.</p>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Obilježje</th><th>Realizam (Šenoa)</th><th>Moderna (Matoš, Vidrić)</th><th>Avangarda (Krleža)</th></tr></thead>
        <tbody>
          <tr><td><strong>Razdoblje</strong></td><td>1865.–1895.</td><td>1895.–1914.</td><td>1914.–1945.</td></tr>
          <tr><td><strong>Cilj</strong></td><td>Vjeran prikaz društva</td><td>Estetski doživljaj, intima</td><td><strong>Radikalna kritika, slom forme</strong></td></tr>
          <tr><td><strong>Žanr fokus</strong></td><td>Roman, pripovijetka</td><td>Lirska pjesma, novela</td><td>Drama, esej, lirika</td></tr>
          <tr><td><strong>Likovi</strong></td><td>Tipovi društvenih klasa</td><td>Sentimentalni intelektualci</td><td><strong>Kompleksni psihološki sukobi</strong></td></tr>
          <tr><td><strong>Stil</strong></td><td>Detaljni opis, analitika</td><td>Suptilni doživljaj, simbol</td><td>Ekspresionistička intenzivnost</td></tr>
          <tr><td><strong>Predstavnici</strong></td><td>Šenoa, Kovačić, Novak</td><td>Matoš, Vidrić, Nazor</td><td><strong>Krleža</strong>, A. B. Šimić, Ujević</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-warn" style="display:flex;gap:14px;align-items:flex-start">
      <div class="bw-ico">📚</div>
      <div class="bw-body">
        <div class="bw-title">Krleža i moderna — pažljivo s periodizacijom</div>
        <div class="bw-txt"><strong>Krleža formalno NIJE modernist</strong> u uskom smislu. Modernu definiramo 1895.–1914. (Matoš, Nazor, Vidrić). Krleža počinje pisati u <em>ekspresionizmu</em> (1914.–1925.), a Glembajevi su iz <strong>analitičko-realističke faze</strong> (1928.–1931.). U školskoj periodizaciji ipak ide u kontekst „moderne i avangarde" jer kontinuira njihov modernistički elan kritike društva i forme.</div>
      </div>
    </div>

    <!-- SEC 02: Kronologija Krleže -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Kronologija — Krleža i Glembajevi</div><div class="sec-line"></div></div>

    <div class="timeline">
      <div class="tl-event milestone"><div class="tl-year">1893.</div><div class="tl-title">Miroslav Krleža rođen u Zagrebu</div><div class="tl-desc">Rođen 7. srpnja 1893. u Zagrebu. Osnovna škola i gimnazija u Zagrebu. Buntovan, intelektualno radoznao.</div></div>
      <div class="tl-event"><div class="tl-year">1908.–1913.</div><div class="tl-title">Vojna škola u Pešti i Beču</div><div class="tl-desc">Kadetska škola u Pečuhu, vojna akademija Ludoviceum u Budimpešti. <em>Susret s austrougarskim militarizmom</em> oblikuje njegov kasniji pogled.</div></div>
      <div class="tl-event"><div class="tl-year">1914.</div><div class="tl-title">Bijeg u Srbiju, povratak u Zagreb</div><div class="tl-desc">Pokušaj prebjega u srpsku vojsku tijekom Balkanskog rata. Vraća se. Mobiliziran u 1. svj. ratu — boravi na fronti.</div></div>
      <div class="tl-event"><div class="tl-year">1914.–1925.</div><div class="tl-title">Simbolističko-ekspresionistička faza (ciklus legendi)</div><div class="tl-desc">Drame: <em>Legenda, Maskerata, Kraljevo, Kristofor Kolumbo, Michelangelo Buonarroti, Adam i Eva</em>. Avangardni eksperiment s formom.</div></div>
      <div class="tl-event"><div class="tl-year">1922.–1932.</div><div class="tl-title">Ekspresionističko-realistička faza (ratni ciklus)</div><div class="tl-desc">Drame: <em>Galicija</em> (kasnije <em>U logoru</em>), <em>Vučjak, Golgota</em>. Tema: ratna trauma, raspad sustava.</div></div>
      <div class="tl-event milestone"><div class="tl-year">1928.</div><div class="tl-title">★ GOSPODA GLEMBAJEVI objavljeni (DHK)</div><div class="tl-desc">„Drama u tri čina iz života jedne agramerske patricijske obitelji". <strong>Prva Krležina psihološko-realistička drama.</strong> ispitno djelo 2026.</div></div>
      <div class="tl-event milestone"><div class="tl-year">1929.</div><div class="tl-title">★ Praizvedba u HNK 14. veljače 1929.</div><div class="tl-desc">Režija: A. Verli. Velik kazališni uspjeh — drama postaje klasik hrv. dramske scene.</div></div>
      <div class="tl-event"><div class="tl-year">1928.–1931.</div><div class="tl-title">Glembajevski ciklus dovršen</div><div class="tl-desc">3 drame: <em>Gospoda Glembajevi</em> (1928.), <em>U agoniji</em> (1928.), <em>Leda</em> (1931.) + 11 novela o Glembajevima.</div></div>
      <div class="tl-event"><div class="tl-year">1932.</div><div class="tl-title">Povratak Filipa Latinovicza</div><div class="tl-desc">Najvažniji Krležin roman. Tema: intelektualac koji se vraća u rodni kraj. Ekspresionistička proza.</div></div>
      <div class="tl-event"><div class="tl-year">1938.</div><div class="tl-title">Na rubu pameti</div><div class="tl-desc">Roman — gorka kritika malograđanskog društva. Glavni lik: anonimni intelektualac koji „izvan pameti".</div></div>
      <div class="tl-event"><div class="tl-year">1936.</div><div class="tl-title">Balade Petrice Kerempuha</div><div class="tl-desc">Pjesnička zbirka u kajkavskom dijalektu. Vrhunac Krležine poezije.</div></div>
      <div class="tl-event"><div class="tl-year">1950.</div><div class="tl-title">Direktor Leksikografskog zavoda</div><div class="tl-desc">Imenovan direktorom Leksikografskog zavoda u Zagrebu (danas: <strong>LZ Miroslav Krleža</strong>). Ostaje na čelu do smrti.</div></div>
      <div class="tl-event"><div class="tl-year">1959.–1968.</div><div class="tl-title">Zastave (najopsežniji roman)</div><div class="tl-desc">Roman u 5 svezaka. Panorama Hrvatske od 1912. do 1922. Sinteza Krležinog opusa.</div></div>
      <div class="tl-event"><div class="tl-year">1981.</div><div class="tl-title">Smrt Krleže (29. prosinca 1981.)</div><div class="tl-desc">Umire u Zagrebu, u 88. godini. Najznačajniji hrv. književnik 20. st. Pokopan na Mirogoju.</div></div>
    </div>

    <!-- SEC 03: Krleža — život i opus -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Miroslav Krleža — život i opus</div><div class="sec-line"></div></div>

    <div class="author-card">
      <div class="ac-header">
        <div class="ac-monogram">MK</div>
        <div class="ac-meta">
          <div class="ac-name">Miroslav Krleža</div>
          <div class="ac-dates">Zagreb · 1893. – 1981. (Zagreb)</div>
          <div class="ac-tags" style="margin-top:6px">
            <span class="hchip br" style="font-size:8px">Najveći hrv. književnik 20. st.</span>
            <span class="hchip go" style="font-size:8px">Direktor LZ MK</span>
            <span class="hchip pa" style="font-size:8px">Dramatičar · Romanopisac · Pjesnik</span>
          </div>
        </div>
      </div>
      <div class="ac-body">
        <p>Rođen <strong>7. srpnja 1893.</strong> u Zagrebu. Otac Petar Krleža, majka Ivka. Odrastao na zagrebačkom Gornjem gradu i u Donjoj Stubici. Gimnaziju pohađa u Zagrebu, vojnu školu (kadetski zavod) u <em>Pečuhu</em>, vojnu akademiju <em>Ludoviceum</em> u Budimpešti (1908.–1913.). <em>Susret s austrougarskim militarizmom</em> oblikuje njegov antiratni svjetonazor.</p>
        <p><strong>1914.</strong> pokušava prebjeći u srpsku vojsku tijekom Balkanskog rata — vraća se i tijekom 1. svj. rata služi na fronti. Iskustvo rata postaje središnja tema njegovog ranog opusa (ratni ciklus). Politički se opredjeljuje za <em>komunističku opciju</em>.</p>
        <p>Pisao u svim glavnim žanrovima: <strong>drame</strong> (Glembajevski ciklus, ratni ciklus, ekspresionistički ciklus), <strong>romani</strong> (Filip Latinovicz, Na rubu pameti, Zastave), <strong>poezija</strong> (Balade Petrice Kerempuha), <strong>eseji, kritike, putopisi, dnevnici</strong>. Opus broji preko 40 svezaka.</p>
        <p><strong>1950.</strong> imenovan direktorom <em>Leksikografskog zavoda u Zagrebu</em> (danas se zove po njemu — LZ Miroslav Krleža). Vodi monumentalne projekte: <em>Enciklopedija Jugoslavije</em>, <em>Hrvatska enciklopedija</em>. Ostaje na čelu do smrti.</p>
        <p><strong>Umire 29. prosinca 1981.</strong> u Zagrebu, u 88. godini. Pokopan na Mirogoju. <em>Najznačajniji hrvatski književnik 20. stoljeća</em> i jedan od najvećih jugoslavenskih intelektualaca.</p>
        <div class="ac-works">
          <div class="ac-works-lbl">Ključna djela</div>
          <div class="ac-work-item">
            <div class="ac-badge">🎭</div>
            <div>
              <div class="ac-work-title">Gospoda Glembajevi</div>
              <div class="ac-work-meta">1928., DHK · Drama u 3 čina · Praizvedba HNK 14.II.1929.</div>
              <div class="ac-work-desc">„Drama u tri čina iz života jedne agramerske patricijske obitelji". Psihološko-socijalna drama o jednoj noći 1913. — propast bankarske obitelji Glembay. Glavni lik: <strong>Leone Glembay</strong>. Klasično jedinstvo mjesta/vremena/radnje. Uzor: Henrik Ibsen. <strong>★ ispitno djelo za maturu 2026.</strong></div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">🎭</div>
            <div>
              <div class="ac-work-title">Glembajevski ciklus</div>
              <div class="ac-work-meta">1928.–1931. · 3 drame + 11 novela</div>
              <div class="ac-work-desc"><em>Gospoda Glembajevi</em> (1928.) + <em>U agoniji</em> (1928.) + <em>Leda</em> (1931.). 11 novela o različitim članovima obitelji. Najveće Krležino dramsko ostvarenje. Tema: propast hrv. patricijske buržoazije.</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">📖</div>
            <div>
              <div class="ac-work-title">Povratak Filipa Latinovicza</div>
              <div class="ac-work-meta">1932. · Roman</div>
              <div class="ac-work-desc">Glavni lik Filip Latinovicz se vraća iz Pariza u rodni kraj. <em>Ekspresionistička proza</em>. Tema: kriza intelektualca, traženje identiteta. Paralela s Leoneom (slikar koji se vraća).</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">📖</div>
            <div>
              <div class="ac-work-title">Na rubu pameti</div>
              <div class="ac-work-meta">1938. · Roman</div>
              <div class="ac-work-desc">Anonimni intelektualac koji se nalazi „na rubu pameti". Gorka kritika malograđanskog društva. <em>Krleža u svojoj najradikalnijoj formi.</em></div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">✒</div>
            <div>
              <div class="ac-work-title">Balade Petrice Kerempuha</div>
              <div class="ac-work-meta">1936. · Pjesnička zbirka</div>
              <div class="ac-work-desc">Vrhunac Krležine poezije. <strong>Pisano kajkavskim dijalektom.</strong> Petrica Kerempuh kao narodski lik. Ekspresivna kritika društva kroz baladu.</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">📚</div>
            <div>
              <div class="ac-work-title">Zastave (5 svezaka)</div>
              <div class="ac-work-meta">1959.–1968. · Veliki roman</div>
              <div class="ac-work-desc">Sinteza Krležinog opusa. Panorama Hrvatske 1912.–1922. Glavni lik: Kamilo Emerički. Najopsežniji hrvatski roman 20. st.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SEC 04: Glembajevi — nastanak i karakter -->
    <div class="soft-hint"><div class="soft-hint-ico">💡</div><div class="soft-hint-body">Gospoda Glembajevi (1928., premijera 1929.) je <b>drama u 3 čina</b> koja se događa jedne noći 1913. u kući Glembajevih u Agrašu (Zagreb). Pitanje na ispitu: jedinstvo mjesta, vremena i radnje — zašto to nije slučajnost?</div></div>
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Gospoda Glembajevi — nastanak i karakter djela</div><div class="sec-line"></div></div>

    <p>Drama je nastala <strong>1928.</strong> i objavljena u Zagrebu (DHK). Praizvedena <strong>14. veljače 1929.</strong> u zagrebačkom HNK (režija A. Verli). Krleža se time vraća tradicionalnom dramskom obliku nakon ekspresionističkih eksperimenata. <em>Uzor mu je skandinavska dramaturgija — Henrik Ibsen.</em> Drama je „<strong>40 godina prekasno došla u hrv. književnost</strong>" (Krležina samoocjena — misli da je trebala doći s realizmom, ne s avangardom).</p>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Element</th><th>Činjenica</th></tr></thead>
        <tbody>
          <tr><td><strong>Godina nastanka</strong></td><td>Napisana <strong>1926.–1928.</strong>, objavljena 1928. (DHK)</td></tr>
          <tr><td><strong>Praizvedba</strong></td><td><strong>14. veljače 1929.</strong>, zagrebački HNK, režija A. Verli</td></tr>
          <tr><td><strong>Žanr</strong></td><td><strong>Drama u 3 čina</strong> · psihološko-socijalna · komorna · građanska tragedija</td></tr>
          <tr><td><strong>Podnaslov</strong></td><td>„Drama u tri čina iz života jedne agramerske patricijske obitelji"</td></tr>
          <tr><td><strong>Vrijeme radnje</strong></td><td><strong>Jedna ljetna noć 1913.</strong> (godinu prije 1. svj. rata) — od 1 do 5 ujutro</td></tr>
          <tr><td><strong>Mjesto radnje</strong></td><td>Palača bankarske obitelji Glembay u Zagrebu</td></tr>
          <tr><td><strong>Klasična jedinstva</strong></td><td><strong>DA</strong> — jedinstvo mjesta, vremena, radnje (svi činovi vremenski se nastavljaju)</td></tr>
          <tr><td><strong>Povod radnje</strong></td><td>Proslava 70. godišnjice tvrtke <em>Glembay Ltd.</em></td></tr>
          <tr><td><strong>Stilski pravac</strong></td><td><strong>Psihološka / analitičko-realistička drama</strong> (Krležina 3. faza)</td></tr>
          <tr><td><strong>Uzor</strong></td><td>Henrik Ibsen — skandinavska dramaturgija 90-ih godina 19. st.</td></tr>
          <tr><td><strong>Jezik</strong></td><td>Hrvatski + miješane <strong>njemačke fraze</strong> (govor visokog zagrebačkog društva prije 1. svj. rata)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Krleža sam o djelu</div>
      <div class="box-key-txt">
        <em>„Glembajevi su neka vrsta dekorativnog panoa naslikanog po motivu jedne građanske civilizacije na odlasku u agoniju, i imaju karakter poetskog lirskog poniranja u sve elemente takozvane psihološke drame."</em><br><br>
        Krleža sam definira djelo kao <strong>portret klase u agoniji</strong> + <em>psihološka drama</em>. Ne sociološka analiza propadanja, već <em>ulazak u psihologiju</em> svakog lika.
      </div>
    </div>

    <!-- SEC 05: 3 čina drame -->
    <div class="soft-hint"><div class="soft-hint-ico">💡</div><div class="soft-hint-body">3 čina = 3 krešenda napetosti: <b>Čin I</b> = ekspozicija (obitelj na ivici), <b>čin II</b> = kulminacija (Leon’s confrontation), <b>čin III</b> = katastrofa (ubojstvo i raspad). Za esej: način kako svaki čin gradi temu <em>grijeha i nasljeđa</em>.</div></div>
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · 3 čina drame — kompozicija</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Čin</th><th>Sukob</th><th>Vrhunac</th></tr></thead>
        <tbody>
          <tr><td><strong>I. čin</strong></td><td><strong>Leone vs. glembajevska sredina</strong>. Salon nakon proslave. Razgovor s Angelikom o portretima. Dolaze Fabriczy, Silberbrandt, Altmann, Puba. Leone iznosi <em>Barboczyjevu legendu</em>: svi Glembajevi = ubojice i varalice. Slučaj Rupert-Canjeg (kočija barunice ubila staricu).</td><td>Leone čuje da Silberbrandt prima noćne posjete barunice → otac Ignjat to nepripaženo prisutni čuje</td></tr>
          <tr><td><strong>II. čin</strong></td><td><strong>Leone vs. otac Ignjat</strong>. Razotkrivanje prošlosti barunice Castelli. Leone optužuje barunicu za smrti u obitelji (sestra Alisa, majka, brat Ivan). Otac brani ženu, ali pukne pod istinom.</td><td><strong>Ignjat doživi infarkt i umre</strong> u 2. činu</td></tr>
          <tr><td><strong>III. čin</strong></td><td><strong>Leone vs. barunica Castelli-Beatrice</strong>. Nakon očeve smrti — okršaj s maćehom. Razgovor o nasljedstvu i moralnoj krivnji. Barunica: „Glembajevi su ubojice" (Barboczyjeva). Leone uzima škare.</td><td><strong>Leone ubije barunicu škarama</strong>. Barunicini povici, lupanje vratima. Drama završava: „Cvrkut ptica u vrtu."</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 Kompozicijski ključevi</div>
      <div class="box-signal-txt">
        <strong>1. Klasično jedinstvo</strong> — jedna noć, jedno mjesto, jedna kontinuirana radnja. <em>Sva 3 čina vremenski se nastavljaju jedan na drugi.</em><br>
        <strong>2. Šahovska struktura</strong> — Krleža premješta likove kao figurice. Svaki čin = nova konstelacija sukoba (Leone-društvo → Leone-otac → Leone-maćeha).<br>
        <strong>3. Tri smrti</strong> — Ignjat (II. čin, infarkt), barunica Castelli (III. čin, ubojstvo), simbolički Leone i cijela obitelj (moralna smrt). <em>Jedna noć briše dinastiju.</em>
      </div>
    </div>

    <!-- SEC 06: Glavni likovi -->
    <div class="soft-hint"><div class="soft-hint-ico">💡</div><div class="soft-hint-body">Leone Glembay je <b>tragički protagonist</b> — intelektualac koji ne može pobjeći od obiteljskog prokletstva. Ignjat je tiranin-otac. Baronica Castelli je vanjski katalizator propasti. Za ispit: prateći svaki lik možeš izgraditi esejski argument.</div></div>
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · Glavni likovi — karakterizacija</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Lik</th><th>Opis</th><th>Karakterizacija</th></tr></thead>
        <tbody>
          <tr><td><strong>Leone Glembay</strong></td><td>38 god., slikar, dr. filozofije, sin Ignjata iz prvog braka</td><td>Glavni lik. <em>11 godina u Europi.</em> Vraća se na proslavu. Intelektualac, neurotičan, labilan. <em>„Borim se protiv Glembaya u sebi"</em> — borba protiv vlastite krvi. Završi kao ubojica.</td></tr>
          <tr><td><strong>Ignjat Glembay</strong></td><td>69 god., bankar, direktor Glembay Ltd., Leoneov otac</td><td>Glava obitelji. Predstavlja glembajevski materijalizam i autoritet. <em>Umire od infarkta u 2. činu</em> kad shvati istinu o ženi.</td></tr>
          <tr><td><strong>Barunica Charlotte Castelli-Glembay</strong></td><td>45 god., Ignjatova druga žena (maćeha)</td><td><em>„Beatrice"</em> u tekstu. Bivša pjevačica/zabavljačica. Manipulativna, preljubnica (sa Silberbrandtom). Optužena za smrti u obitelji. <strong>Leone je ubije škarama.</strong></td></tr>
          <tr><td><strong>Sestra Angelika Glembay</strong></td><td>29 god., dominikanka, udovica brata Ivana</td><td>Rođena <em>barunica Zygtmuntowicz</em>. Suprug Ivan se ubio. <em>Leoneova platonska ljubav</em>. Razgovara s njim o portretima u I. činu. Stoji „kao lutka" na kraju.</td></tr>
          <tr><td><strong>Titus Andronicus Fabriczy-Glembay</strong></td><td>69 god., bratić Ignjata, veliki župan u miru</td><td>Konzervativan, štiti čast obitelji. Iznosi <em>„Barboczyjevu legendu"</em> u I. činu (svi Glembajevi prokleti).</td></tr>
          <tr><td><strong>Dr. Silberbrandt</strong></td><td>Ispovjednik barunice Castelli</td><td>Klerik. <em>Tajni ljubavnik barunice</em>. Lažljivac, hipokrit. Leone ga razotkriva u I. činu.</td></tr>
          <tr><td><strong>Dr. Paul Altmann</strong></td><td>Liječnik obitelji</td><td>Predstavnik medicinske racionalnosti. Leone se sukobljava i s njim („pravo na ljudske duše i tijela").</td></tr>
          <tr><td><strong>Dr. Puba Fabriczy</strong></td><td>Mladi pravni zastupnik obitelji</td><td>Brani obitelj od socijalističke tiska zbog slučaja Rupert-Canjeg. Predstavlja generaciju koja nasljeđuje glembajevštinu.</td></tr>
          <tr><td><strong>Stara Barboczyjeva</strong></td><td>Plemenitašica udana za jednog Glembaya (samo kao <em>legenda</em>, ne pojavljuje se na sceni)</td><td>Izrekla legendu: <em>„Svi Glembajevi su prokleti — ubojice i varalice"</em>. Ključni motiv kroz cijelu dramu.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 07: Teme i ideje -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · Teme i ideja djela</div><div class="sec-line"></div></div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip go">TEMA 1</span>
        <div class="sc-name">Propast patricijske obitelji / „glembajevština"</div>
        <div class="sc-desc">Glembajevi = simbol agramerske buržoazije pred 1. svj. rat. <em>Bogatstvo stečeno na zločinu</em> (Barboczyjeva legenda — prvi Glembay ubio kranjskog zlatara). Prokletstvo nasljedstva: <strong>ubojstvo, samoubojstvo, prevara su obiteljski obrazac</strong>.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip br">TEMA 2</span>
        <div class="sc-name">Borba protiv vlastite krvi (Leone)</div>
        <div class="sc-desc">Leoneova centralna borba: <em>„Od prvog dana, kad sam počeo razmišljati, ne radim drugo nego se borim protiv Glembaya u sebi."</em> Pokušaj individualnog otpora biološko-društvenom nasljedstvu. <strong>Završi kao ubojica</strong> — krv pobjeđuje.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip te">TEMA 3</span>
        <div class="sc-name">Privid vs. istina (kontrast bogatstva i moralne dekadencije)</div>
        <div class="sc-desc"><strong>Privid</strong>: bogatstvo, ljepota, sreća, moć. <strong>Istina</strong>: lažljivci, kradljivci, ubojice, preljube. Glembajevi žive u vlastitoj fasadi. Krleža razotkriva: <em>iza svakog uglednog lica stoji zločin</em>.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip pa">TEMA 4</span>
        <div class="sc-name">Kritika austrougarskog zagrebačkog društva</div>
        <div class="sc-desc">Glembajevi govore <em>njemački + hrvatski</em>. Obitelj je dio austrougarske buržoazije. Krleža kritizira <strong>klasu koja propada s carstvom</strong>. Slučaj Rupert-Canjeg: aristokrati eksploatiraju siromahe.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip go">TEMA 5</span>
        <div class="sc-name">Sukob umjetnosti i materijalizma</div>
        <div class="sc-desc">Leone je <em>slikar i filozof</em> u svijetu bankara i materijalista. Sukob s ocem Ignjatom = sukob umjetničkog pogleda na svijet i materijalističkog.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip br">TEMA 6</span>
        <div class="sc-name">Ženska pozicija u patrijarhalnoj obitelji</div>
        <div class="sc-desc">Tri ženska lika: <em>Charlotte</em> (manipulativna, preljubnica), <em>Angelika</em> (povučena u religiju), <em>Alisa</em> (pokojna sestra, ubila se). Krleža prikazuje <strong>nemogućnost ženskog opstanka</strong> u glembajevskoj kući.</div>
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Glavna ideja djela</div>
      <div class="box-key-txt">
        <strong>Patricijska obitelj kao simbol klase u agoniji.</strong> Krleža kroz Glembajeve <em>secira hrvatsku građansku elitu</em> u predratnoj 1913. godini. Bogatstvo stečeno na zločinu, brakovi iz računa, preljubi, ubojstva — <strong>cijela klasa je trula</strong>. Leone, jedini „svjestan" Glembaj, pokušava se pobuniti — ali <em>na kraju i sam postane ubojica</em>. <strong>Krv pobjeđuje volju.</strong> Drama je optužnica klasi i metafizička priča o nemogućnosti pobune protiv biološkog/društvenog nasljedstva.
      </div>
    </div>

    <!-- SEC 08: Stil i jezik -->
    <div class="soft-hint"><div class="soft-hint-ico">💡</div><div class="soft-hint-body">Krleža stilski spaja <b>ekspresionizam</b> (Leonova interiorizacija), <b>naturalizam</b> (obiteljska degeneracija) i <b>psihološku dramu</b>. Usporedi s Ibsenovim <em>Lutkinom domom</em> (H08 areal) — često pitanje o europskim utjecajima.</div></div>
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">08 · Stil i jezik — kako Krleža gradi dramu</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Element</th><th>Obilježje u Glembajevima</th></tr></thead>
        <tbody>
          <tr><td><strong>Psihološki dijalog</strong></td><td>Razgovori nisu samo razmjena informacija — oni su <em>oružja u sukobu</em>. Pauze, prešućivanja, podtekst.</td></tr>
          <tr><td><strong>Opširne replike</strong></td><td>Likovi govore u dugim, esejskim replikama — Leone posebno. <em>Filozofske refleksije usred drame.</em></td></tr>
          <tr><td><strong>Njemačko-hrvatska dvojezičnost</strong></td><td>Glembajevi spontano prelaze u njemački — autentičan govor zagrebačke buržoazije pred 1. svj. rat.</td></tr>
          <tr><td><strong>Detaljne didaskalije</strong></td><td>Krleža minuciozno opisuje scenografiju, kostime, izraze lica. <em>Skoro romansijerska razrada.</em></td></tr>
          <tr><td><strong>Simbolika prostora</strong></td><td>Salon s portretima Glembajevih = <em>obiteljsko prokletstvo materijalizirano</em>. Likovi razgovaraju o portretima — portreti „govore" zauzvrat.</td></tr>
          <tr><td><strong>Ironija</strong></td><td>Leoneovi dijalozi sa svima — <em>razorna ironija</em>. Demaskira hipokriziju.</td></tr>
          <tr><td><strong>Kontrast</strong></td><td>Umjetnost (Leone) ↔ materijalizam (Ignjat); privid ↔ istina; razum ↔ instinkt; život ↔ smrt.</td></tr>
          <tr><td><strong>Metafora</strong></td><td>Portreti = obiteljsko prokletstvo. Noć = moralni mrak. Škare = sredstvo razrješenja. Zlatar (Barboczyjeva) = grijeh izvora.</td></tr>
          <tr><td><strong>Jedinstvo vremena</strong></td><td>Klasično — Aristotelovsko. <em>Sve se događa u 4 sata noći.</em> Sažetost = napetost.</td></tr>
          <tr><td><strong>Skandinavska dramaturgija</strong></td><td>Uzor Henrik Ibsen: <em>polako razotkrivanje prošlosti, psihološka analiza, tragični kraj kroz spoznaju</em>.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="featured-quote" data-cit-cat="leone">
      <span class="fq-napamet">★ NAPAMET</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Od prvog dana, kad sam počeo razmišljati, ne radim drugo nego se borim protiv Glembaya u sebi.</div>
        <div class="fq-meta">— Leone Glembay (I. čin) · <strong>Ključna izjava cijele drame</strong> · Tema borbe protiv biološkog nasljedstva</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Od prvog dana, kad sam počeo razmišljati, ne radim drugo nego se borim protiv Glembaya u sebi. — Leone Glembay, Gospoda Glembajevi, I. čin')">⎘</button>
    </div>

    <!-- SEC 09: Krležini dramski ciklusi -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">09 · Krležini dramski ciklusi — Glembajevi u kontekstu</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Faza</th><th>Razdoblje</th><th>Drame</th><th>Obilježja</th></tr></thead>
        <tbody>
          <tr><td><strong>1. Simbolističko-ekspresionistička</strong> (ciklus legendi)</td><td>1914.–1925.</td><td>Legenda, Maskerata, Kraljevo, Kristofor Kolumbo, Michelangelo Buonarroti, Adam i Eva</td><td>Avangardni eksperiment, mitološki/povijesni motivi, simbolizam</td></tr>
          <tr><td><strong>2. Ekspresionističko-realistička</strong> (ratni ciklus)</td><td>1922.–1932.</td><td>Galicija (kasnije U logoru), Vučjak, Golgota</td><td>Ratna trauma, raspad sustava, ekspresionistička intenzivnost</td></tr>
          <tr><td><strong>3. Psihološka / analitičko-realistička</strong> (Glembajevski ciklus)</td><td>1928.–1931.</td><td><strong>Gospoda Glembajevi</strong> (1928.), <em>U agoniji</em> (1928.), <em>Leda</em> (1931.) + 11 novela</td><td>Klasična dramska forma, Ibsen kao uzor, psihološko poniranje</td></tr>
          <tr><td><strong>4. Posljednja drama</strong></td><td>1959.</td><td><em>Aretej ili legenda o svetoj Ancili, rajskoj ptici</em></td><td>Povratak avangardi, filozofska igra</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 10: Stilska sredstva -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">10 · Stilska sredstva — za analizu ulomka</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Sredstvo</th><th>Primjer / kontekst iz djela</th><th>Učinak</th></tr></thead>
        <tbody>
          <tr><td><strong>Metafora</strong></td><td>Portreti Glembajevih = obiteljsko prokletstvo materijalizirano</td><td>Vizualni simbol kroz cijelu dramu</td></tr>
          <tr><td><strong>Ironija</strong></td><td>Leoneovi dijalozi s ocem, s Fabriczyjem, sa Silberbrandtom</td><td>Razotkrivanje hipokrizije</td></tr>
          <tr><td><strong>Kontrast</strong></td><td>Umjetnost ↔ materijalizam; privid ↔ istina; razum ↔ instinkt</td><td>Tematsko suprotstavljanje</td></tr>
          <tr><td><strong>Hiperbola</strong></td><td>Pretjerivanje u dramskim situacijama — Leoneove optužbe, baruničini izljevi</td><td>Dramska intenzivnost</td></tr>
          <tr><td><strong>Simbol</strong></td><td>Škare (oružje), portreti (prokletstvo), noć (moralni mrak), Barboczyjeva (legenda izvora)</td><td>Simbolistička dimenzija drame</td></tr>
          <tr><td><strong>Aluzija</strong></td><td>Kant, Euler, logika, matematika (Leoneov razgovor s Angelikom)</td><td>Intelektualni kontekst lika</td></tr>
          <tr><td><strong>Personifikacija</strong></td><td>Portreti „govore" — likovi reagiraju na njih</td><td>Animira simboliku</td></tr>
          <tr><td><strong>Dijalog kao oružje</strong></td><td>Razgovori nisu razmjena nego sukob; <em>podtekst je važniji od teksta</em></td><td>Psihološka napetost</td></tr>
          <tr><td><strong>Didaskalije kao naracija</strong></td><td>Detaljni opisi scene, kostima, mimike — opsegnut kao roman</td><td>Romansijerska razrada drame</td></tr>
          <tr><td><strong>Dvojezičnost (njem./hrv.)</strong></td><td>Hrvatski pasaži ležerno prelaze u njemački</td><td>Autentičnost zagrebačke buržoazije pred 1914.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 11: Konekti -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">11 · H16 i ostalo gradivo — kako se spaja</div><div class="sec-line"></div></div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip br">H15</span>
        <div class="sc-name">H16 ← H15 (Šenoa · realizam)</div>
        <div class="sc-desc">Šenoin protorealizam (Lovro) prethodi Krležinom psihološkom realizmu (Glembajevi). Obojica kritiziraju malograđansko hrv. društvo — <em>Šenoa blago, Krleža razorno</em>. Lovro je individualna tragedija, Glembajevi kolektivna.</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip go">D21</span>
        <div class="sc-name">H16 ↔ D21 (Krleža · Glembajevi detalj)</div>
        <div class="sc-desc">D21 je <em>djelo-specifična skripta</em> samo za Glembajeve — više detalja po činu, više citata, gotov esej. H16 daje širi kontekst (Krleža + moderna).</div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip te">D22</span>
        <div class="sc-name">H16 → D22 (Marinković · Kiklop)</div>
        <div class="sc-desc">Marinković piše nakon Krleže (1965.). Kiklop = <em>neuklopljeni intelektualac</em> kao Leone. Oba esejska djela 2026. <strong>Komparacija na maturi vrlo vjerojatna.</strong></div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip pa">D16</span>
        <div class="sc-name">H16 ↔ D16 (Novak · Posljednji Stipančići)</div>
        <div class="sc-desc">Stipančići (1899.) su prethodnik Glembajevih — <strong>obje propast hrv. građanskih obitelji</strong>. ispitno djelo 2026. Krleža razvija ono što Novak započinje.</div>
      </div>
    </div>

    <!-- SEC 11b: Marinković / Kiklop — ispitno djelo 2026 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">11b · Ranko Marinković i Kiklop — ispitno djelo 2026 ★</div><div class="sec-line"></div></div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">Kiklop je 2026. obvezatno ispitno djelo — istu važnost ima kao i Glembajevi</div>
        <div class="bw-txt">NCVVO katalog 2025./2026. navodi i <strong>Gospodu Glembajeve</strong> (Krleža) i <strong>Kiklop</strong> (Marinković) kao obvezatna ispitna djela. Komparacija između dva hrv. intelektualca koji ne mogu djelovati (<em>Leone vs. Melkior</em>) je najvjerojatniji tip esejskog zadatka koji kombinira ta dva djela.</div>
      </div>
    </div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Kategorija</th><th>Podatak</th></tr></thead>
        <tbody>
          <tr><td><strong>Autor</strong></td><td><strong>Ranko Marinković</strong> (1913.–2001.) · Šibenik</td></tr>
          <tr><td><strong>Školovanje</strong></td><td>Zagreb, Prag, Rim (studij glume i dramaturgije)</td></tr>
          <tr><td><strong>Djelo</strong></td><td><em>Kiklop</em> — roman · objavljen 1965. (Zagreb, Zora)</td></tr>
          <tr><td><strong>Žanr</strong></td><td>Roman · groteskni realizam · egzistencijalistički roman</td></tr>
          <tr><td><strong>Glavni lik</strong></td><td><strong>Melkior Tresić</strong> — glumac, intelektualac, kroničar straha</td></tr>
          <tr><td><strong>Vrijeme radnje</strong></td><td>Zagreb, 1941.–1942. (talijanska i njemačka fašistička okupacija)</td></tr>
          <tr><td><strong>Intertekst</strong></td><td>Homerova <em>Odiseja</em> (Kiklop Polifem = rat, represija, apsurdni svemoćni sistem)</td></tr>
          <tr><td><strong>Centralna tema</strong></td><td>Egzistencijalni strah od smrti i nemoć intelektualca pred tiranijom</td></tr>
          <tr><td><strong>Stil</strong></td><td>Groteskno, crni humor, asocijativni tok svijesti, ekspresionistički opis</td></tr>
          <tr><td><strong>Ostala važna djela</strong></td><td><em>Ruke</em> (1953., pripovijetke), <em>Glorija</em> (1956., drama), <em>Zajednička kupka</em> (1980.)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="sec-hdr" style="margin-top:20px"><div class="sec-line"></div><div class="sec-badge">11b-i · Melkior Tresić — karakter lika</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">🎭 Melkior — intelektualac koji se skriva od rata</div>
      <div class="box-int-txt">
        Melkior Tresić je <strong>glumac u zagrebačkom kazalištu</strong> za vrijeme Drugog svjetskog rata. Nije junak ni kolaborant — on je <em>promatrač koji ne može djelovati</em>. Cijeli roman je njegova unutarnja borba između intelektualnog razumijevanja situacije (rat je zlo, fašizam je zlo, treba se suprotstaviti) i paralinizirajućeg straha od fizičke boli i smrti. Marinković gradi lik koji je <b>moralno svjestan ali fizički kukavica</b> — što je krivudava, dugotrajna, na momente komična i tragična ispovijed.
      </div>
    </div>

    <div class="tbl">
      <div class="cr"><div class="ck br">STRAH OD SMRTI</div><div class="cv">Melkiorova dominantna emocija. Svaki put kad se suoči s mogućnošću odlaska u rat, pred represijom ili pri svakoj eksploziji — on se skriva, bježi, racionalizira svoju kukavičluk kao <em>„instinkt preživljavanja"</em>. Marinković taj strah prikazuje brutalno iskreno — nema glamura borbe, samo prljavi goli instinkt.</div></div>
      <div class="cr"><div class="ck go">INTELEKTUALNA NEMOĆ</div><div class="cv">Melkior <em>razumije</em> sve. Razumije fašizam, razumije zlo, razumije što bi trebalo učiniti. Ali razumijevanje bez volje za djelovanjem postaje vrsta moralnog terora nad samim sobom. On sebe neprestano analizira, prezire, opravdava — <em>vrtnja unutarnjeg monologa</em>. Ovdje je sličnost s Leonem Glembayem najveća.</div></div>
      <div class="cr"><div class="ck t">KIKLOP — INTERTEKST</div><div class="cv">Naslov aludira na Odisejev susret s Kikliopom Polifemom (Homer, Odiseja, IX. pjevanje). Polifem = jednooki div = sistem koji ne vidi/ne razumije individuu, samo je guta. Melkior = Odisej koji preživljava lukavošću, ne junaštvom. <em>„Nitko" je Odisejevo ime koje koristi da prevari Polifema</em> — Melkior je i sam „nitko", anonimni preživljavač.</div></div>
      <div class="cr"><div class="ck re">GROTESKNI HUMOR</div><div class="cv">Marinković koristi <em>crni humor i grotesku</em> da prikaže rat i represiju — nije direktivno politički, nego apsurdno komičan. Situacije postaju kafkijanske: birokracija, uniformirani budale, besmisleni propisi — sve je strašno ali istovremeno smiješno. Ovo je Marinkovićeva zaštitna marka.</div></div>
    </div>

    <div class="sec-hdr" style="margin-top:20px"><div class="sec-line"></div><div class="sec-badge">11b-ii · Kiklop vs. Glembajevi — komparacija za esej</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">⚖️ Komparativna analiza — Leone Glembay vs. Melkior Tresić</div>
      <div class="box-int-txt">Ova usporedba je <strong>najvjerojatnije esejsko pitanje</strong> koje kombinira ta dva djela. Uvježbaj je od bilješke.</div>
    </div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Dimenzija</th><th>Leone Glembay (Krleža, 1928.)</th><th>Melkior Tresić (Marinković, 1965.)</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Žanr</strong></td>
            <td>Drama u 3 čina</td>
            <td>Roman</td>
          </tr>
          <tr>
            <td><strong>Tip intelektualca</strong></td>
            <td>Slikar, dr. filozofije, estetičar</td>
            <td>Glumac, humanist, kronist</td>
          </tr>
          <tr>
            <td><strong>Kontekst</strong></td>
            <td>Zagreb 1913. (pred 1. svj. rat) · buržoaska obitelj</td>
            <td>Zagreb 1941.–42. (2. svj. rat) · fašistička okupacija</td>
          </tr>
          <tr>
            <td><strong>Unutarnji sukob</strong></td>
            <td>Svjesnost o gnjilobi obitelji vs. nemogućnost da je odbaci (<em>„Glembay u meni"</em>)</td>
            <td>Moralna svjesnost o fašizmu vs. fizički strah koji paralizira</td>
          </tr>
          <tr>
            <td><strong>Ishod</strong></td>
            <td>Počini ubojstvo — <em>potvrduje</em> Glembayevo nasilje koje je htio pobijediti</td>
            <td>Preživljava — ne heroj, ne kolaborant; amoralni preživljavač koji se stidi</td>
          </tr>
          <tr>
            <td><strong>Zajednička tema</strong></td>
            <td colspan="2" style="text-align:center"><strong>Intelektualac koji razumije zlo ali je zarobljenici biološkim nasljedstvom / strahom</strong></td>
          </tr>
          <tr>
            <td><strong>Filozofska pozadina</strong></td>
            <td>Nietzsche, determinizam, biološko nasljedstvo</td>
            <td>Egzistencijalizam (Sartre, Camus), apsurd, autentičnost</td>
          </tr>
          <tr>
            <td><strong>Stil</strong></td>
            <td>Psihološki dijalog, ekspresionizam, simboli (škare, portret, svijećnjak)</td>
            <td>Unutarnji monolog, groteskni humor, asocijativni tok, intertekst (Homer)</td>
          </tr>
          <tr>
            <td><strong>Za esej: teza</strong></td>
            <td colspan="2" style="text-align:center"><em>„Obojica hrv. intelektualca ne mogu pobijediti sile koje ih oblikuju — Leone biologiju, Melkior strah — čime Krleža i Marinković gradi egzistencijalnu tragediju hrv. intelektualca 20. st."</em></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">📖 3 ključna citata iz Kiklopa (za esej)</div>
      <div class="box-signal-txt">
        <em>1. „Strah je jedina istina. Sve ostalo je laž."</em> — Melkiorova temeljna egzistencijalna teza; citira se kao vrhunac njegovih unutarnjih refleksija o ratu i preživljavanju.<br><br>
        <em>2. „Ja nisam ni za koga. Ni za domovinu, ni za neprijatelja. Ja sam za sebe. Za svoju kožu."</em> — Direktno suočavanje s vlastitom moralnom kukavicom; Marinkovićeva ironična demistifikacija intelektualca koji „razumije sve ali ne čini ništa".<br><br>
        <em>3. [Naslov kao citat] „Kiklop"</em> — samo ime romana aludira na mit: Odisej prevarima kaže Polifeumu da se zove „Nitko". Marinković time kaže: Melkior je „Nitko" u ratu, anonimni preživljavač koji se nikad nije uspio nazvati imenom svog izbora.
      </div>
    </div>

    <!-- SEC 12: Ključni kontrasti -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">12 · Ključni kontrasti — za interpretaciju</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Kontrast</th><th>Strana A</th><th>Strana B</th><th>Funkcija</th></tr></thead>
        <tbody>
          <tr><td><strong>Privid ↔ Istina</strong></td><td>Bogatstvo, ljepota, sreća, moć</td><td>Lažljivci, kradljivci, ubojice, preljubnici</td><td><em>Glavna tema</em> — Krležina kritika fasade</td></tr>
          <tr><td><strong>Umjetnost ↔ Materijalizam</strong></td><td>Leone (slikar, filozof)</td><td>Ignjat (bankar, direktor)</td><td>Sukob oca i sina = sukob svjetonazora</td></tr>
          <tr><td><strong>Razum ↔ Instinkt</strong></td><td>Leoneova borba protiv „Glembaya u sebi"</td><td>Krv, biološko nasljedstvo</td><td>Drama postavlja: može li svijest pobijediti instinkt?</td></tr>
          <tr><td><strong>Pojedinac ↔ Klasa</strong></td><td>Leone-individualist</td><td>Glembajevi-kolektiv</td><td>Mogućnost / nemogućnost otpora klasnoj sudbini</td></tr>
          <tr><td><strong>Život ↔ Smrt</strong></td><td>Proslava 70. godišnjice</td><td>Tri smrti (Ignjat, barunica, simbol obitelji)</td><td>Slavlje postaje funeral</td></tr>
          <tr><td><strong>Hrvatski ↔ Njemački jezik</strong></td><td>Domaća kultura</td><td>Austrougarski sloj</td><td>Razdvojenost zagrebačke buržoazije</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 13: Krleža i Glembajevi na prstu -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">13 · Krleža i Glembajevi na prstu — 60 sekundi</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Pitanje</th><th>Odgovor</th></tr></thead>
        <tbody>
          <tr><td>Tko je autor Glembajevih?</td><td><strong>Miroslav Krleža</strong> (1893.–1981.), Zagreb</td></tr>
          <tr><td>Kada je drama objavljena?</td><td>1928. u izdanju DHK (Zagreb)</td></tr>
          <tr><td>Kada je praizvedba?</td><td><strong>14. veljače 1929.</strong> u zagrebačkom HNK (režija A. Verli)</td></tr>
          <tr><td>Koji je žanr?</td><td><strong>Drama u 3 čina</strong> · psihološko-socijalna · komorna · građanska tragedija</td></tr>
          <tr><td>Vrijeme radnje?</td><td>Jedna ljetna noć 1913. (od 1 do 5 ujutro), godinu prije 1. svj. rata</td></tr>
          <tr><td>Mjesto radnje?</td><td>Palača bankarske obitelji Glembay u Zagrebu</td></tr>
          <tr><td>Klasična jedinstva?</td><td><strong>DA</strong> — mjesta, vremena, radnje</td></tr>
          <tr><td>Tko je glavni lik?</td><td><strong>Leone Glembay</strong> (38 god., slikar, dr. filozofije)</td></tr>
          <tr><td>Koliko ima u ciklusu?</td><td><strong>3 drame</strong> (Glembajevi, U agoniji, Leda) + <strong>11 novela</strong></td></tr>
          <tr><td>Tko je uzor Krleži?</td><td><strong>Henrik Ibsen</strong> — skandinavska dramaturgija</td></tr>
          <tr><td>Kako drama završava?</td><td>Leone ubije barunicu Castelli škarama. „Cvrkut ptica u vrtu."</td></tr>
          <tr><td>Što je Barboczyjeva legenda?</td><td>Prvi Glembay ubio kranjskog zlatara → svi Glembajevi prokleti („ubojice i varalice")</td></tr>
          <tr><td>ispitno djelo 2026?</td><td><strong>★ DA</strong> — ispitno djelo za maturu</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 14: Samoprocjena -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">14 · Samoprocjena — jesi li spreman/a?</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">✅ Označi što znaš — dobivaš live score</div>
      <div class="box-int-txt">Ne „mislim da znam". Označi samo ono što stvarno znaš.</div>
    </div>

    <div id="sc-list"></div>
    <div id="sc-score" style="margin-top:14px"></div>

    <!-- SEC 15: Finalni pregled -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">15 · Finalni pregled — sve u 3 minute</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">⚡ Recap — sve ključno u 5 rečenica</div>
      <div class="box-key-txt">
        <strong>1.</strong> <strong>Miroslav Krleža</strong> (1893.–1981.) je najveći hrv. književnik 20. st., autor 40+ svezaka, direktor Leksikografskog zavoda od 1950. <br>
        <strong>2.</strong> <strong>Gospoda Glembajevi</strong> (1928., HNK 1929.) je drama u 3 čina iz „života jedne agramerske patricijske obitelji" — Krležin glembajevski ciklus (3 drame + 11 novela). <br>
        <strong>3.</strong> <strong>Radnja:</strong> Jedna noć 1913. u zagrebačkoj palači Glembay. Sin Leone (slikar, dr. filozofije) vraća se nakon 11 godina; sukobljava se s ocem Ignjatom (bankarom) i maćehom barunicom Castelli; dvije smrti — otac od infarkta, barunica od Leoneovih škara. <br>
        <strong>4.</strong> <strong>Ideja:</strong> <em>propast hrv. patricijske buržoazije</em> — bogatstvo stečeno na zločinu (Barboczyjeva legenda) → biološko nasljedstvo (ubojstvo, samoubojstvo, prevara) → Leoneova nemogućnost pobune protiv vlastite krvi. <br>
        <strong>5.</strong> <strong>Stil:</strong> psihološko-socijalna drama, klasično jedinstvo mjesta/vremena/radnje, uzor Ibsen, dvojezičnost (hrv./njem.), opširne replike, didaskalije kao romansijerska razrada.
      </div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">✍ Tri gotove teze za esej o Glembajevima</div>
      <div class="box-signal-txt">
        <em>1. „Glembajevi su Krležin <strong>secijski portret hrv. patricijske buržoazije pred 1. svj. rat</strong> — kroz jednu noć 1913. razotkriva se trulež cijele klase: bogatstvo stečeno na zločinu, brakovi iz računa, preljube i ubojstva čine obiteljski obrazac koji Leoneova borba protiv 'Glembaya u sebi' ne može probiti."</em><br><br>
        <em>2. „Drama strukturom (3 čina, jedinstvo mjesta/vremena/radnje, uzor Ibsen) i tehnikom (psihološki dijalog, opširne didaskalije, dvojezičnost, simbolika portreta i škara) ostvaruje <strong>klasičnu europsku dramsku formu u hrv. književnosti</strong> — ono što Krleža sam zove 'dolazak 40 godina prekasno'."</em><br><br>
        <em>3. „Centralna tragedija nije propast obitelji, nego <strong>Leoneova spoznaja da ne može pobjeći od vlastite biologije</strong> — počevši kao kritičar Glembajevih, završava kao njihov potvrditelj (ubojica) — što čini Glembajeve dubokom filozofskom dramom o granicama individualne slobode pred kolektivnim nasljedstvom."</em>
      </div>
    </div>

    <!-- SEC 16: Nasljeđe -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">16 · Nasljeđe djela i Krležin status</div><div class="sec-line"></div></div>

    <div class="sc">
      <div class="sc-name">🎭 Glembajevi kao klasik hrv. drame</div>
      <div class="sc-desc">Drama je od praizvedbe 1929. <strong>stalno na hrv. kazališnim scenama</strong>. Filmovi, TV-adaptacije, ekranizacije. <em>Definicija „glembajevštine" ulazi u svakodnevni jezik</em> — sinonim za buržoasku hipokriziju.</div>
    </div>
    <div class="sc">
      <div class="sc-name">🏛 Krležin status u hrv. književnosti</div>
      <div class="sc-desc">Krleža = <strong>najveći hrv. književnik 20. st.</strong> Po njemu se zove <em>Leksikografski zavod Miroslav Krleža</em> u Zagrebu. <em>Krležijana</em> (enciklopedija o Krleži) jedinstvena u svjetskim razmjerima.</div>
    </div>
    <div class="sc">
      <div class="sc-name">👥 Utjecaj na hrv. književnost</div>
      <div class="sc-desc">Krleža utječe na cijelu generaciju nakon: <strong>Marinković, Šoljan, Slamnig, Mihalić, Kovač</strong>. Njegov esejistički stil i kritička oštrina postaju model za hrv. modernu prozu i dramu.</div>
    </div>
    <div class="sc">
      <div class="sc-name">📖 Glembajevi na maturi 2026.</div>
      <div class="sc-desc"><strong>★ ispitno djelo</strong>. Može doći kao: (1) ulomak za analizu (I. čin Leone-Angelika, II. čin sukob s ocem, III. čin ubojstvo barunice), (2) pitanja o strukturi/likovima/temama, (3) <strong>školski esej</strong> s gotovim tezama (vidi Tab 2).</div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🏆 3 razloga zašto su Glembajevi relevantni danas</div>
      <div class="box-key-txt">
        <strong>1. Strukturna kritika elite:</strong> Krležina analiza „bogatstva stečenog na zločinu" čita se kao pre-marksistička analiza klase — relevantna za svaku raspravu o oligarhijama. <br>
        <strong>2. Psihologija nasljedstva:</strong> Leoneova borba protiv „Glembaya u sebi" je univerzalna — <em>može li čovjek pobjeći od svoje obitelji, klase, kulture?</em> <br>
        <strong>3. Forma drame:</strong> Klasična jedinstva + psihološki realizam + simbolizam = <em>model za sve kasnije hrv. drame</em>. Bez Glembajevih nema Marinkovićeva Kiklopa, Šoljanova teatra.
      </div>
    </div>

    <!-- SEC 17: Krleža širi opus -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">17 · Krleža širi opus — što se može pitati uz Glembajeve</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">📚 Krleža nije samo Glembajevi</div>
      <div class="box-int-txt">NCVVO ponekad postavi teorijsko pitanje o Krleži koje nadilazi Glembajeve. Ključna druga Krležina djela koja treba prepoznati po žanru, godini i ključnom motivu:</div>
    </div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Djelo</th><th>Žanr · god.</th><th>Ključni motivi</th><th>Veza s Glembajevima</th></tr></thead>
        <tbody>
          <tr><td><strong>Povratak Filipa Latinovicza</strong></td><td>roman · 1932.</td><td>Identitet, domovina, kreativnost, majka, vrtlog</td><td>Isti egzistencijalni motiv: ne može se pobjeći od porijekla</td></tr>
          <tr><td><strong>Balada Petrice Kerempuha</strong></td><td>kajkavska poezija · 1936.</td><td>Kajkavski bunt, hrv. pučka tradicija, satirika — „Kerempuh" = hr. Till Eulenspiegel</td><td>Isti kritički impuls: moćnici vs. potlačeni</td></tr>
          <tr><td><strong>Novele (glembajevski ciklus)</strong></td><td>novela · 1924.–1937.</td><td>11 novela u ciklusu — isti likovi kao drame, proza oko Glembajevih</td><td>Ciklus koji okružuje dramu</td></tr>
          <tr><td><strong>Na rubu pameti</strong></td><td>roman · 1938.</td><td>Intelektualac-konformist koji poludi od okoline, satirika</td><td>Srodan Leoneu: pobuna kao jedini izlaz</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 18: Marinković / Kiklop -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">18 · Ranko Marinković / Kiklop — 2026. ispitno djelo ★</div><div class="sec-line"></div></div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">VISOK RIZIK — 2026. ispitno djelo</div>
        <div class="bw-txt">Kiklop je ispitno djelo za maturu 2026. (~17% vjerojatnost esejskog zadatka = 30 bodova). Deep dive ostaje u <b>D22 · Marinković · Kiklop</b> — ova sekcija daje teorijski minimum za H16.</div>
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">⚡ Ranko Marinković / Kiklop — ključni podaci</div>
      <div class="box-key-txt">
        <b>Autor:</b> Ranko Marinković (1913.–2001.), Split/Zagreb. <b>Djelo:</b> <em>Kiklop</em> (roman, 1965.). <b>Žanr:</b> modernistički roman, groteskna satira. <b>Protagonist:</b> Melkior Tresić (novinar, intelektualac). <b>Radnja:</b> Zagreb, 1941. — između nacizma i staljinizma. <b>Naslov:</b> aluzija na Homerovog Kiklopa (jednooka besavjesnost moći). <b>Struktura:</b> groteska, crni humor, unutarnji monolog.<br><br>
        <b>Ključne teme:</b> <em>intelektualac i rat</em>, moralna odgovornost, kukavičluk, strah, groteskna stvarnost. <b>Melkiorova dilema:</b> u svijetu koji se raspada, može li intelektualac ostati neutralan? Odgovor: ne — neutralnost jest kukavičluk.<br><br>
        <b>Stilska obilježja:</b> ironija, groteska, intertekstualnost (Homer, Shakespeare, Baudelaire u tekstu), unutarnji monolog, crni humor.
      </div>
    </div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico si-go">VS KRLEŽA</span>
        <div class="sc-name">Marinković ↔ Krleža — oba obvezatna 2026.</div>
        <div class="sc-desc">Krleža piše o <em>raspadu patricijske klase</em> (1913.); Marinković piše o <em>raspadu intelektualca u ratu</em> (1941.). Oba imaju protagonista koji ne može pobjeći od svoje okoline. <b>Komparativni esej Krleža + Marinković = snažna kombinacija.</b></div>
      </div>
      <div class="sc">
        <span class="sc-ico si-br">VS CAMUS</span>
        <div class="sc-name">Kiklop ↔ Stranac — egzistencijalni paraleli</div>
        <div class="sc-desc">Meursault i Melkior — oba su <em>outsideri</em> koji ne pristaju na konvencije okoline. Meursault to radi ravnodušnošću; Melkior ironijom i crnim humorom. <b>Camus/Marinković — idealna komparacija u eseju o egzistencijalnoj prozi.</b></div>
      </div>
      <div class="sc">
        <span class="sc-ico si-t">NCVVO STATUS</span>
        <div class="sc-name">Kiklop na maturi 2026.</div>
        <div class="sc-desc">★ <strong>ispitno djelo 2026.</strong> (D22). Može doći kao: (1) ulomak za analizu, (2) pitanje o liku, temama, žanru, (3) školski esej — puna obrada u <b>D22 · Marinković · Kiklop</b>.</div>
      </div>
    </div>

    <!-- SEC 19: Hrvatska moderna — pisci 2026. -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">19 · Hrvatska moderna i avangarda — pisci obvezatni 2026.</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">📚 4 pisca hrv. moderne/avangarde — svi obvezatni 2026.</div>
      <div class="box-int-txt">NCVVO 2026. uključuje 4 hrv. pisca iz moderne i avangarde kao <b>esejska i čitaćka djela</b>. Deep dive u D-seriji, ovdje minimum za teorijsku orjentaciju.</div>
    </div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Autor · god.</th><th>Stil / epoha</th><th>Ključno djelo 2026.</th><th>2 ključna motiva</th></tr></thead>
        <tbody>
          <tr><td><strong>A. G. Matoš</strong><br>1873.–1914.</td><td>Hrv. moderna · impresionizam · simbolizam</td><td><em>Novele</em> (D18) — Camao, Moći ću, Cvijet sa raskršća</td><td>Melankolija + nemogućnost povratka</td></tr>
          <tr><td><strong>S. S. Kranjčević</strong><br>1865.–1908.</td><td>Hrv. moderna · rodoljubna i socijalna lirika</td><td><em>Poezija</em> (D17) — Radniku, Moja molitva, Lucifer</td><td>Socijalna pravda + metafizički bunt</td></tr>
          <tr><td><strong>A. B. Šimić</strong><br>1898.–1925.</td><td>Ekspresionizam · hrv. avangarda</td><td><em>Poezija</em> (D20) — Tijelo i duša, Sirotinja, Molitva na putu</td><td>Tjelesnost + siromaštvo kao duhovnost</td></tr>
          <tr><td><strong>Tin Ujević</strong><br>1891.–1955.</td><td>Moderna + avangarda · bohemstvo</td><td><em>Poezija</em> (D19) — Oproštaj, Svakidašnja jadikovka, Notturno</td><td>Usamljenost + sloboda duha</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 Za ispit — ključne razlike između 4 autora</div>
      <div class="box-signal-txt">
        <b>Matoš</b> = proza i lirika, impresionizam, novela kao forma (jedini od 4 s prozom). <b>Kranjčević</b> = samo lirika, socijalni i filozofski pesimizam, grandiozni motivi (Bog, radnik, lucifer). <b>Šimić</b> = ekspresionizam, kratke dinamične pjesme, tijelo kao tema, umire mlad (26 god.). <b>Ujević</b> = najdulji opus, bohemstvo, egzistencijalna lirika — <em>vezu s Šimićem</em>: oba avangarda, ali Šimić = ekspresionizam, Ujević = bliže simbolizmu.
      </div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">🌍 EUROPSKA PARALELA — moderna i ekspresionizam (→ H08)</div>
      <div class="box-signal-txt">
        Europska moderna (Kafka, Joyce, Proust, 1890.–1940.) i <strong>hrvatska moderna/ekspresionizam</strong> su isti kulturni trenutak. Krleža je čitao Ibsena, Strindberga, Nietzschea — iste autore koji oblikuju Kafku. Gregor Samsa (Preobražaj) i Leone Glembay (Gospoda Glembajevi) dijele istu temu: <em>raspad identiteta u obitelji koja guši</em>.<br><br>
        <b>Za komparativni esej:</b> Kafka (2026. obvezno) + Krleža ili Marinković = snažna kombinacija. Kafka i europska moderna u detalje: <b>H08 · Moderna</b>.
      </div>
    </div>

    <div class="nav-row">
      <span class="nb-btn off">← Početak</span>
      <span class="nb-btn primary" onclick="sw(1)">🎭 3 čina drame →</span>
    </div>

  
    <div class="cheat-card" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">SLJEDEĆE</div>
          <div class="cheat-ttl">Tab 1 · Krleža — Glembajevi (3 čina)</div>
        </div>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col cheat-col-wide" style="font-family:var(--serif,Fraunces,serif);font-size:13.5px;color:var(--t2,#c5b8aa);line-height:1.65">
          <p style="margin:0">Teorija moderne te postavlja — <b>Tab 1</b> ulazi u <em>Glembajeve</em>. 3 čina, dramska struktura, sociologija obitelji i ključni citati.</p>
        </div>
      </div>
    </div>

    </div><!-- /l0 -->

  <div class="layer" id="l1" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">3 čina</span>
      <span class="pill p-go">Klasično jedinstvo</span>
      <span class="pill p-te">Likovi</span>
      <span class="pill p-pa">Psihološka drama</span>
      <span class="pill p-r">Ibsen kao uzor</span>
    </div>

    <p style="margin-bottom:20px">Krleža drami daje <strong>klasičnu strukturu u 3 čina</strong> — sva tri vremenski se nastavljaju u istoj noći (jedna ljetna noć 1913., od 1 do 5 ujutro, palača Glembay u Zagrebu). <em>Klasično jedinstvo mjesta, vremena i radnje</em> u Aristotelovu smislu. Svaki čin ima <strong>novog glavnog protivnika</strong> za Leonea: <em>I. čin = glembajevska sredina, II. čin = otac Ignjat, III. čin = maćeha barunica</em>. Klikni na čin za detalje.</p>

    <!-- TIP BAR -->
    <div class="box-int" style="margin-bottom:18px">
      <div class="box-int-lbl">🎬 Ključ razumijevanja: Leoneova putanja</div>
      <div class="box-int-txt">Leone dolazi kao <em>vanjski kritičar</em> (I. čin), postaje <em>aktivni optužitelj</em> (II. čin, razotkriva barunicu ocu), završava kao <em>ubojica</em> (III. čin, ubije barunicu škarama). <strong>Ironija:</strong> borba protiv „Glembaya u sebi" ga i sama pretvara u Glembaya — nasljedstvo pobjeđuje volju.</div>
    </div>

    <!-- SCENE-LIST — 3 čina -->
    <div class="scene-list">
      <!-- I. ČIN -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">I</div>
          <div class="scene-ttl">I. čin — Leone vs. glembajevska sredina</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Radnja:</b> Nakon raskošne večere povodom <em>70. godišnjice firme Glembay Ltd</em>, u salonu palače ostaje uži krug. <strong>Leone Glembay</strong> (38, slikar, dr. filozofije) vratio se iz Europe nakon 11 godina izbivanja — prvi put vidi obiteljsko okruženje. U salonu sjedi <strong>sestra Angelika Glembay</strong> (29, dominikanka, udovica brata Ivana koji se ubio). <em>Prvi razgovor:</em> Leone i Angelika raspravljaju o Kantu i Euleru, logici i matematici, dok gledaju obiteljske portrete na zidovima. Erotska napetost — Leone otkriva da je zaljubljen u Angeliku: <em>„Ona je jedino u što vjeruje u glembajevskoj kući."</em> Dolaze <strong>Fabriczy</strong> (bratić, umirovljeni veliki župan) i <strong>Silberbrandt</strong> (ispovjednik barunice). Razgovor skreće prema portretima. Fabriczy hvali Glembajeve dobročinitelje; <strong>Leone počinje razotkrivati „istinu"</strong> — svi Glembajevi su zapravo <em>ubojice, prevaranti, kriminalci</em>. Navodi <strong>Barboczyjevu legendu</strong>: prvi Glembay opljačkao je i ubio kranjskog zlatara dok je nosio zlato u varaždinsku crkvu; od tog novca sagradio imetak; <strong>svi su Glembajevi otada prokleti</strong> — bolesni, nestabilni, skloni samoubojstvu i zločinu. Od posljednje generacije: <em>brat Ivan (samoubojstvo)</em>, <em>majka (samoubojstvo)</em>, <em>sestra Alisa (samoubojstvo)</em>. Dolazi <strong>Puba Fabriczy</strong> (mladi pravni zastupnik) s kampanjom za gašenje aferi: <em>slučaj Rupert-Canjeg</em> — kočija barunice Castelli usmrtila staricu Rupertovu; <em>Fanika Canjeg</em> (nevjenčana žena poginulog sina) traži pomoć. Leone otkriva da je <em>sam kupio šivaći stroj za Faniku</em> — ne dopušta da se to koristi kao argument o „dobronamjernosti Glembajevih". Čin završava kad Leone <strong>šapće Silberbrandtu da bude diskretniji kad u noći prima Castelličine ljubavne posjete</strong> — to čuje otac Ignjat, neopaženo prisutan. <em>Sjeme II. čina posijano.</em><br><br>
            
            <b>🎯 Ključni trenuci I. čina:</b><br>
            <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px">
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700;width:130px">Salon nakon večere</td><td style="padding:6px 10px;border:1px solid var(--bd)">70. godišnjica Glembay Ltd. Leone se vratio iz Europe nakon 11 godina.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Leone + Angelika</td><td style="padding:6px 10px;border:1px solid var(--bd)">Razgovor o Kantu, logici, portretima. Erotska napetost. Leone zaljubljen u udovicu brata.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Dolazak ostalih</td><td style="padding:6px 10px;border:1px solid var(--bd)">Fabriczy, Silberbrandt → Altmann, Puba. Razgovor o portretima se zaoštrava.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">★ Barboczyjeva legenda</td><td style="padding:6px 10px;border:1px solid var(--bd)"><strong>Ključni motiv.</strong> Prvi Glembay ubio kranjskog zlatara → svi Glembajevi prokleti.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Slučaj Rupert-Canjeg</td><td style="padding:6px 10px;border:1px solid var(--bd)">Socijalna dimenzija drame. Baruničina kočija usmrtila staricu. Leone potajno pomaže Faniki.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Leone demaskira Silberbrandta</td><td style="padding:6px 10px;border:1px solid var(--bd)">Šapće mu o njegovim noćnim posjetima barunici. <em>Otac Ignjat to čuje, neopaženo prisutan.</em></td></tr>
            </table>
            
            <b>Ključni likovi u I. činu:</b> Leone Glembay, Angelika Glembay, Fabriczy, Silberbrandt, Altmann, Puba Fabriczy. (Ignjat prisutan, ali tiho.)<br><br>
            
            <b>Ključni motivi I. čina:</b><br>
            • <em>Portreti Glembajevih</em> — obiteljsko prokletstvo materijalizirano na zidovima<br>
            • <em>Barboczyjeva legenda</em> — mitološki izvor prokletstva (zlatar, krv, novac)<br>
            • <em>Leoneov povratak</em> — 11 godina odsustva daje mu kritičku distancu<br>
            • <em>Slučaj Rupert-Canjeg</em> — socijalna kritika aristokracije<br>
            • <em>Tajna barunice i Silberbrandta</em> — prva pukotina u fasadi obitelji<br>
            • <em>Razgovor o Kantu i Euleru</em> — Leoneov intelektualni identitet vs. materijalisti<br><br>
            
            <b>Stil i tehnika I. čina:</b><br>
            • <strong>Ekspozicija</strong> — uvodi sve likove, glavne sukobe, temu prokletstva<br>
            • <strong>Psihološki dijalog</strong> s opširnim replikama — Leoneove filozofske refleksije<br>
            • <strong>Simbolika portreta</strong> — portreti kao nijemi protivnici<br>
            • <strong>Dvojezičnost</strong> hrv./njem. — autentičan govor zagrebačke buržoazije<br>
            • <strong>Ironijske note</strong> — Leone razara hipokriziju sugovornika<br>
            • <strong>Podtekst</strong> — ono što se ne kaže (Ignjat čuje u kutu) važnije od riječi<br><br>
            
            <b>📜 Reprezentativan citat:</b><br>
            <em>„Od prvog dana, kad sam počeo razmišljati, ne radim drugo nego se borim protiv Glembaya u sebi."</em> — Leone Angeliki<br><br>
            
            <b>Dramska funkcija:</b> <em>Ekspozicija + zaplet</em>. I. čin uvodi svu galeriju likova, postavlja glavnu temu (glembajevsko prokletstvo), i sija sjeme za II. čin (Ignjat čuje za Silberbrandta i barunicu).<br><br>
            
            <b>🎯 Esejski signal:</b> I. čin je <strong>Leoneova retorička pobjeda</strong> — ali i njegova ironija. Pokušava razotkriti istinu o Glembajevima, ali <em>sam je Glembay</em>. Angelika (jedina u koju vjeruje) je <em>udovica brata koji se ubio</em> — dakle, žrtva istog prokletstva o kojem govori. Leone se distancira riječima, ali <em>emocionalno je uvučen</em>. Krleža kroz I. čin postavlja <strong>tragičnu ironiju</strong> koja će se razviti: što više Leone govori protiv Glembajeva, to je dublje njihov. Stilski, čin demonstrira <strong>Ibsenovu tehniku</strong>: polagano razotkrivanje prošlosti kroz dijalog, bez vanjske akcije — sve je psihološko.
          </div>
        </div>
      </div>

      <!-- II. ČIN -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">II</div>
          <div class="scene-ttl">II. čin — Leone vs. otac Ignjat · Smrt od infarkta</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Radnja:</b> Kasnije tijekom noći. <strong>Ignjat Glembay</strong> (69, bankar, direktor Glembay Ltd.) je čuo Leonin šapat Silberbrandtu u I. činu — sada suočava sina. Počinje <strong>središnji sukob drame</strong>: otac vs. sin, generacija vs. generacija, materijalizam vs. umjetnost. Ignjat isprva brani barunicu Castelli (svoju drugu ženu, 45 god.) i cijelu obitelj. Leone <strong>ide do kraja</strong> — razotkriva barunicinu prošlost: <em>prije braka s Ignjatom bila je zabavljačica, „gospođa" samo po obliku; preljubnica sa Silberbrandtom; vjerojatno odgovorna za smrt Leonine sestre Alise</em> (koja se „ubila" u sumnjivim okolnostima). Leone čak implicira da je <em>barunica indirektno odgovorna za smrt njegove majke</em>. Opširne replike, krešendo napetosti. Dr. Altmann pokušava smiriti situaciju. Ali pukotina je probijena — Ignjat shvaća da je <strong>živio u laži</strong>. <em>Srce ne izdrži</em>: <strong>Ignjat doživi infarkt i umre</strong>. Prva smrt u drami. Obitelj je <em>bez glave</em>. Čin završava u šoku — barunica zaviri, bježi; Angelika zapazi; Leone stoji nad ocem. Drama se radikalno preokreće: od riječi prema krvi.<br><br>
            
            <b>🎯 Ključni trenuci II. čina:</b><br>
            <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px">
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700;width:130px">Ignjat suočava</td><td style="padding:6px 10px;border:1px solid var(--bd)">Otac je čuo što je Leone šapnuo Silberbrandtu. Traži objašnjenje.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Leone razotkriva</td><td style="padding:6px 10px;border:1px solid var(--bd)">Baruničina prošlost: bivša zabavljačica, preljubnica sa Silberbrandtom, sumnjiva u vezi Alisine smrti.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Obiteljske smrti</td><td style="padding:6px 10px;border:1px solid var(--bd)">Alisa (Leoneova sestra, „samoubojstvo"), majka, brat Ivan — sve u kontekstu glembajevskog prokletstva i baruničine manipulacije.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Ignjat brani ženu</td><td style="padding:6px 10px;border:1px solid var(--bd)">Patrijarhalna reakcija — brani čast, ali istina je jača.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">★ Vrhunac sukoba</td><td style="padding:6px 10px;border:1px solid var(--bd)">Krešendo replika. Leone argumentima razara očevu sliku svijeta. Ignjat pukne.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">★ Smrt Ignjata</td><td style="padding:6px 10px;border:1px solid var(--bd)"><strong>Infarkt.</strong> Prva smrt u drami. Glava obitelji je mrtva. Altmann prisutan, ali ne može pomoći.</td></tr>
            </table>
            
            <b>Ključni likovi u II. činu:</b> Leone Glembay, <strong>Ignjat Glembay</strong> (glavni protivnik), dr. Altmann (pokušava smiriti), barunica Castelli (kratko prisutna), Angelika (nijemi svjedok).<br><br>
            
            <b>Ključni motivi II. činа:</b><br>
            • <em>Razotkrivanje prošlosti</em> — Ibsenov ključni element (retroaktivna spoznaja)<br>
            • <em>Baruničina dekadentska prošlost</em> — od zabavljačice do „barunice"<br>
            • <em>Preljub sa Silberbrandtom</em> — seksualna dimenzija propadanja klase<br>
            • <em>Alisa i majka</em> — niz smrti kao glembajevski obrazac<br>
            • <em>Srce koje puknе od istine</em> — Ignjat umire kad shvati da je živio u laži<br>
            • <em>Altmann kao nemoćni liječnik</em> — medicina ne može spasiti kad istina ubija<br><br>
            
            <b>Stil i tehnika II. činа:</b><br>
            • <strong>Komorna drama</strong> — Krleža sam naziva drugi čin „komornim" — minimum likova, maksimum napetosti<br>
            • <strong>Krešendo dijaloga</strong> — replike se skraćuju, tempo ubrzava<br>
            • <strong>Retroaktivno razotkrivanje</strong> — Ibsenova tehnika, prošlost izlazi na vidjelo<br>
            • <strong>Klasni registar</strong> — Ignjat govori kao patrijarh, Leone kao filozof<br>
            • <strong>Psihosomatska metafora</strong> — tijelo ne može podnijeti istinu<br>
            • <strong>Simbol srca</strong> — infarkt = simbolička smrt cijele klase<br><br>
            
            <b>📜 Krležina napomena:</b><br>
            <em>„Drugi čin intenzivira konzekvence tako ocrtanih odnosa u obliku koji podsjeća na komornu dramu."</em> (Krležijana)<br><br>
            
            <b>Dramska funkcija:</b> <em>Kulminacija središnje obiteljske krize</em>. Leoneova riječ ubija oca — ne bukvalno, ali psihosomatski. Smrt Ignjata je <strong>prva „prava" smrt</strong> u drami — prethodne (Alisa, majka, Ivan) su ostavljene u pozadini. <em>Sad krv teče na sceni.</em><br><br>
            
            <b>🎯 Esejski signal:</b> II. čin je <strong>središnja dramska prekretnica</strong>. Leone je htio istinom osloboditi obitelj od laži — ali <em>istina ubija oca</em>. Ovdje se krije Krležina tragična dijalektika: <strong>nemoguće je izaći iz glembajevštine bez daljnjeg zla</strong>. Leoneovi argumenti nisu lažni (sve što govori je istina); ali način na koji to govori je <em>sam glembajevski — razoran, bez milosti</em>. Otac koji je branio hipokriziju umire od nje. Ironija: Leone je pobijedio retorički, ali gubi moralno. <strong>Infarkt kao metafora</strong>: austrougarski patrijarhat, bankarska fasada, cijela klasa — <em>srce ne izdrži kad istina izađe</em>. Stilski: II. čin je majstorski primjer Ibsenova utjecaja — <em>prošlost koja polagano razotkriva</em>, bez vanjske akcije, sve psihološki, ubojito.
          </div>
        </div>
      </div>

      <!-- III. ČIN -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">III</div>
          <div class="scene-ttl">III. čin — Leone vs. barunica Castelli-Beatrice · Ubojstvo škarama</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Radnja:</b> Još kasnija noć, svitanje se bliži. <strong>Ignjat mrtav</strong>, njegovo tijelo u „mrtvačkoj sobi". <strong>Barunica Castelli-Glembay</strong> (45, Ignjatova udovica, sada „Beatrice") ostaje s Leonom. Posljednji veliki sukob. Radi se o <em>nasljedstvu</em>, moralu, cijeloj povijesti obitelji. Napetost raste. Barunica polako ludi — <strong>vikne da je ta kuća njezino vlasništvo</strong>, da Leone nema prava ostati, pita „što imaju od mrtvačke sobe raditi bordel", vrijeđa ga, traži da izađe. <strong>Leone uzima škare sa stola</strong>. Pokušava se suzdržati — Angelika želi zadržati Leonea. Ali barunica <em>nastavi</em>: cituje <em>Barboczyjevu legendu</em> natrag njemu: <strong>„Svi su Glembajevi ubojice i varalice!"</strong>. Barunica instinktivno poleti kroz vrata van — <strong>Leone krene za njom</strong>. Čuje se <em>lupanje vratima, razbijanje stakla, baruničini povici u pomoć</em>. Tišina. Kamerdiner ulijeće, uzima Altmannove rekvizite. <strong>Sluga objavi: „Gospon doktor zaklao je barunicu."</strong> Angelika stoji nepomično „kao lutka". Drama završava čuvenom rečenicom: <em>„Cvrkut ptica u vrtu."</em> Svanulo. Dinastija uništena.<br><br>
            
            <b>🎯 Ključni trenuci III. čina:</b><br>
            <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px">
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700;width:130px">Nakon smrti Ignjata</td><td style="padding:6px 10px;border:1px solid var(--bd)">Leone i barunica same. Pitanje nasljedstva, moralne krivnje.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Verbalni sukob</td><td style="padding:6px 10px;border:1px solid var(--bd)">Barunica i Leone se okršaju. Ona tvrdi da je kuća njezino vlasništvo; on govori da je sve što je imala ukrala od Glembaya.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Barunica ludi</td><td style="padding:6px 10px;border:1px solid var(--bd)">Gubitak kontrole — vrijeđanje, histerija, „neka izvole u Stundenhotel"</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">★ Škare</td><td style="padding:6px 10px;border:1px solid var(--bd)"><strong>Leone uzima škare sa stola.</strong> Angelika pokušava zadržati. Barunica izgovara Barboczyjevu legendu natrag.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">★ Ubojstvo</td><td style="padding:6px 10px;border:1px solid var(--bd)">Barunica bježi. <strong>Leone krene za njom.</strong> Off-stage: lupanje, staklo, vikanje. Potom tišina.</td></tr>
              <tr><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">Potvrda</td><td style="padding:6px 10px;border:1px solid var(--bd)">Sluga objavi: „Gospon doktor zaklao je barunicu." Angelika nepomična kao lutka.</td></tr>
              <tr style="background:var(--dim-br)"><td style="padding:6px 10px;border:1px solid var(--bd);font-weight:700">★ Zadnja rečenica</td><td style="padding:6px 10px;border:1px solid var(--bd)"><strong>„Cvrkut ptica u vrtu."</strong> Svanulo. Priroda ravnodušna prema tragediji.</td></tr>
            </table>
            
            <b>Ključni likovi u III. činu:</b> <strong>Leone Glembay</strong> (ubojica), <strong>barunica Castelli-Beatrice</strong> (žrtva), Angelika (nijemi svjedok), kamerdiner/sluga (izvještava o smrti off-stage).<br><br>
            
            <b>Ključni motivi III. čina:</b><br>
            • <em>Škare kao oružje</em> — svakodnevni predmet postaje smrtonosan (paralela s britvom iz Prijana Lovre)<br>
            • <em>Off-stage ubojstvo</em> — klasična grčka tehnika, nasilje iza scene<br>
            • <em>Angelika „kao lutka"</em> — paraliza svjedoka, nemogućnost intervencije<br>
            • <em>„Cvrkut ptica u vrtu"</em> — priroda neosjetljiva; ironični kontrast<br>
            • <em>Barboczyjeva legenda potvrđena</em> — Leone postaje ono što je osuđivao<br>
            • <em>Bordel vs. mrtvačka soba</em> — baruničina opscena usporedba<br>
            • <em>Nasljedstvo</em> — motivacija sukoba; „sve što je ona krala od Glembaya"<br><br>
            
            <b>Stil i tehnika III. čina:</b><br>
            • <strong>Krešendo</strong> — najkraći, najintenzivniji čin<br>
            • <strong>Off-stage nasilje</strong> — Krleža ne prikazuje ubojstvo eksplicitno, samo zvukove (grčka tehnika)<br>
            • <strong>Ironični finale</strong> — „Cvrkut ptica" kao kontrapunkt tragediji<br>
            • <strong>Simbol škara</strong> — domaći predmet postaje ubojit (paralelno s britvom u Prijanu Lovri)<br>
            • <strong>Angelika kao tableaux vivant</strong> — zaustavljen kadar, simbolički završetak<br>
            • <strong>Cirkularna struktura</strong> — Barboczyjeva legenda iz I. čina se potvrđuje u III. činu<br><br>
            
            <b>📜 Reprezentativan dijalog:</b><br>
            <em>Barunica: „Dobro je rekla stara Barboczyjeva — svi su Glembajevi ubojice i varalice!"</em><br>
            <em>(Leone uzima škare sa stola. Angelika želi zadržati Leonea. Barunica instinktivno poleti kroz vrata van. Leone se ukoči na tren, a onda krene za njom.)</em><br><br>
            
            <b>Dramska funkcija:</b> <em>Kulminacija i rasplet</em> — drama se zatvara potvrđivanjem onoga što je I. čin postavio. Barboczyjeva legenda, koja je u I. činu djelovala kao „priča stare žene", u III. činu <strong>postaje proročanstvo</strong>.<br><br>
            
            <b>🎯 Esejski signal:</b> III. čin je <strong>tragična potvrda glembajevštine</strong>. Leone, koji je I. čin upotrijebio za razotkrivanje, II. za argumentaciju, <em>III. za ubojstvo</em>. <strong>Borba protiv „Glembaya u sebi" završava porazom.</strong> Baruničino posljednje citiranje Barboczyjeve legende je <em>šamar u lice</em> — ona, žena koju on prezire, ima pravo: <em>svi ste ubojice i varalice</em>. Leoneovo ubojstvo pretvara metaforu u činjenicu. <br><br>
            Zavrsna rečenica <strong>„Cvrkut ptica u vrtu"</strong> je <em>remek-djelo ironije</em>. Priroda ne zna za čovječje tragedije — svanulo je, ptice pjevaju, život teče dalje. Ali u palači Glembay ležе dva tijela — patricijska dinastija je mrtva. <em>Priroda vječna, klasa propala.</em> Krleža time postavlja <strong>metafizičku ravnodušnost</strong> kao finalni komentar: <em>svi naši sukobi i tragedije su epizoda u većem poretku koji ih ne zna</em>. Stilski: Krleža koristi <strong>grčku tehniku off-stage nasilja</strong> (kao Euripid) — pojačava težinu, briše spektakl. Škare kao oružje — svakodnevni kućanski predmet — simbolički pokazuje da je <em>zlo unutar kuće</em>, ne vanjsko.
          </div>
        </div>
      </div>
    </div>

    <!-- DUBINSKA ANALIZA -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">★ Stilska sredstva u Glembajevima — za analizu ulomka</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Sredstvo</th><th>Primjer iz drame</th><th>Učinak / esejska primjena</th></tr></thead>
        <tbody>
          <tr><td><strong>Jedinstvo mjesta/vremena/radnje</strong></td><td>Salon palače Glembay, jedna noć 1913., 1-5 ujutro, kontinuirana radnja</td><td>Klasična drama; Aristotelov ideal; stvara sažetost i intenzitet</td></tr>
          <tr><td><strong>Psihološki dijalog</strong></td><td>Leoneove filozofske replike s Angelikom (Kant, Euler); sukob s ocem u II. činu</td><td>Karakterizacija kroz razgovor; Ibsenova tehnika</td></tr>
          <tr><td><strong>Opširna replika</strong></td><td>Leoneove optužbe u II. činu su prave eseje — po više stranica</td><td>Esejizacija drame; Krležin prepoznatljiv stil</td></tr>
          <tr><td><strong>Simbol</strong></td><td>Portreti Glembajevih (prokletstvo), škare (oružje), noć (moralni mrak), zlatar (grijeh izvora)</td><td>Simbolistička dimenzija; vizualni/tematski ključevi</td></tr>
          <tr><td><strong>Ironija</strong></td><td>Leoneove replike s Fabriczyjem, Silberbrandtom; „Cvrkut ptica" na kraju</td><td>Razotkrivanje hipokrizije; finalni distantni komentar</td></tr>
          <tr><td><strong>Kontrast</strong></td><td>Privid ↔ istina; umjetnost (Leone) ↔ materijalizam (Ignjat); razum ↔ instinkt</td><td>Struktura tematskih sukoba drame</td></tr>
          <tr><td><strong>Retroaktivno razotkrivanje</strong></td><td>Prošlost barunice Castelli polako izlazi na vidjelo (zabavljačica, preljub, smrti)</td><td>Ibsenova tehnika; dramska napetost raste kroz spoznaju</td></tr>
          <tr><td><strong>Off-stage nasilje</strong></td><td>Ubojstvo barunice — samo zvukovi (lupanje, staklo, vikanje)</td><td>Grčka tehnika; pojačava težinu, uklanja spektakl</td></tr>
          <tr><td><strong>Dvojezičnost</strong></td><td>Likovi spontano prelaze u njemački; „Stundenhotel", „Ltd.", frazeologija</td><td>Autentičnost zagrebačke buržoazije pred 1. svj. rat</td></tr>
          <tr><td><strong>Opširne didaskalije</strong></td><td>Krleža minuciozno opisuje kostime, mimiku, scenografiju, svjetlo</td><td>Romansijerska razrada drame; vizualna gustoća</td></tr>
          <tr><td><strong>Metafora</strong></td><td>„Borim se protiv Glembaya u sebi"; „dekorativni pano civilizacije u agoniji"</td><td>Krležina samointerpretacija uklopljena u tekst</td></tr>
          <tr><td><strong>Aluzija</strong></td><td>Kant, Euler, logika, Barboczyjeva (fiktivna legenda)</td><td>Intelektualni kontekst; pseudo-mitska dimenzija</td></tr>
        </tbody>
      </table>
    </div>

    <!-- 3 RAZINE -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">★ Sinteza — 3 razine čitanja Glembajevih</div><div class="sec-line"></div></div>

    <div class="sc">
      <div class="sc-name">📖 1. Konkretna razina — drama o obitelji</div>
      <div class="sc-desc">Jedna noć 1913., palača Glembay, 3 čina, 3 sukoba (Leone-društvo, Leone-otac, Leone-barunica), 2 smrti (Ignjat od infarkta, barunica od škara). <strong>Realistička razrada s klasičnim jedinstvima.</strong></div>
    </div>
    <div class="sc">
      <div class="sc-name">🏛 2. Socijalna razina — propast hrv. patricijske buržoazije</div>
      <div class="sc-desc">Glembajevi = simbol agramerske aristokracije stečene na zločinu (Barboczyjeva legenda). Pred 1. svj. rat cijela klasa je trula — <strong>brakovi iz računa, preljube, eksploatacija</strong>. Krleža secira svoj grad i vrijeme: austrougarski Zagreb u dekadenciji.</div>
    </div>
    <div class="sc">
      <div class="sc-name">🎭 3. Univerzalna razina — borba protiv vlastitog nasljedstva</div>
      <div class="sc-desc">Leoneova drama je univerzalna — <em>može li svjesni pojedinac pobjeći od biološko-društvenog nasljedstva?</em> <strong>Tragični odgovor: ne.</strong> Tko se bori protiv „Glembaya u sebi", sam postaje Glembay. Paralele: Ibsenovi Duhovi, Freudov Über-Ich, sartreovska „loša vjera".</div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Taktika za ispitni ulomak Glembajevih</div>
      <div class="box-key-txt">
        <strong>Korak 1:</strong> Identificiraj <em>iz kojeg je čina</em> ulomak. Ključne riječi: <em>I. čin</em> (salon, portreti, Angelika, Fabriczy, Silberbrandt, Barboczyjeva legenda, Rupert-Canjeg), <em>II. čin</em> (otac Ignjat, baruničina prošlost, Alisa, infarkt), <em>III. čin</em> (škare, „Stundenhotel", Angelika kao lutka, „Cvrkut ptica").<br>
        <strong>Korak 2:</strong> Prepoznaj <em>tehniku</em> — psihološki dijalog, opširne didaskalije, simbolika portreta/škara, dvojezičnost, retroaktivno razotkrivanje, off-stage nasilje.<br>
        <strong>Korak 3:</strong> Identificiraj <em>stilska sredstva</em> — kontrast (privid/istina), ironija, metafora („Glembay u sebi"), simbol, aluzija (Kant, Barboczyjeva).<br>
        <strong>Korak 4:</strong> Vezi s <em>Ibsenom</em> (retroaktivnost), <em>klasičnim jedinstvima</em>, <em>ekspresionizmom</em> (intenzivnost).<br>
        <strong>Korak 5:</strong> Interpretiraj <em>na 3 razine</em> — konkretna (drama obitelji), socijalna (propast klase), univerzalna (borba s nasljedstvom).
      </div>
    </div>

    <!-- DISCERE TOUCHPOINT -->
    <div class="discere-banner" id="discere-t1" style="margin-top:18px" onclick="window.location.href=&#39;#discere&#39;">
      <div class="discere-ico">🎭</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Simulator ulomaka Glembajevih</div>
        <div class="discere-sub">Vježbaj analizu ulomaka iz sva 3 čina · Pro plan</div>
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
      <span class="pill p-go">★ ispitno djelo 2026</span>
      <span class="pill p-br">Školski esej</span>
      <span class="pill p-te">3 razine čitanja</span>
      <span class="pill p-pa">Scanner ulomka</span>
      <span class="pill p-r">Komparacije</span>
    </div>

    <!-- STATUS BOX -->
    <div class="box-warn" style="margin-bottom:20px;display:flex;gap:14px;align-items:flex-start">
      <div class="bw-ico">★</div>
      <div class="bw-body">
        <div class="bw-title">Gospoda Glembajevi — ispitno djelo za maturu 2026.</div>
        <div class="bw-txt">
          <strong>Ovo djelo je na popisu 21 djela za školski esej.</strong> Znači: može doći kao (1) <strong>tema školskog eseja</strong> u III. cjelini (Pisanje školskog eseja), (2) ulomak za analizu u I. cjelini, (3) pitanja o likovima/strukturi/temama u II. cjelini. <br><br>
          Ovaj Tab daje ti: <strong>(1) 5 gotovih teza za esej</strong>, (2) struktura eseja + model eseja, (3) Scanner ulomka, (4) 3 razine čitanja, (5) Strategija ulomka, (6) 20 Q&A, (7) Komparacije, (8) 5 grešaka, (9) Checklist.
        </div>
      </div>
    </div>

    <!-- ALAT TABS -->
    <div class="alat-tabs">
      <button class="alat-tab on" onclick="alTab(this,'at0')">📝 Školski esej</button>
      <button class="alat-tab" onclick="alTab(this,'at1')">🔍 Scanner ulomka</button>
      <button class="alat-tab" onclick="alTab(this,'at2')">📊 3 razine čitanja</button>
      <button class="alat-tab" onclick="alTab(this,'at3')">⚡ Strategija ulomka</button>
      <button class="alat-tab" onclick="alTab(this,'at4')">💬 20 Q&A</button>
      <button class="alat-tab" onclick="alTab(this,'at5')">🌐 Komparacije</button>
      <button class="alat-tab" onclick="alTab(this,'at6')">🚫 5 grešaka</button>
      <button class="alat-tab" onclick="alTab(this,'at7')">✅ Checklist</button>
    </div>

    <!-- AT0: Školski esej — TEZE + STRUKTURA + MODEL -->
    <div class="alat-pane on" id="at0">
      <div class="alat-card">
        <h4>📝 Školski esej o Glembajevima — kompletna priprema</h4>
        <p>Glembajevi su <strong>ispitno djelo 2026</strong>. U ovom alatu imaš: <em>5 gotovih teza</em>, <em>strukturu školskog eseja</em>, i <em>model eseja</em> kao referencu.</p>
      </div>

      <!-- 5 GOTOVIH TEZA -->
      <div class="sec-hdr" style="margin-top:18px"><div class="sec-line"></div><div class="sec-badge">5 gotovih teza za esej</div><div class="sec-line"></div></div>

      <div class="sc" style="border-left:3px solid var(--gold)">
        <div class="sc-name">🎯 TEZA 1 — Propast klase u agoniji</div>
        <div class="sc-desc">
          <strong>Formulacija:</strong> „Krleža kroz obitelj Glembay secira propast hrv. patricijske buržoazije pred 1. svj. rat — bogatstvo stečeno na zločinu (Barboczyjeva legenda), brakovi iz računa, preljube i ubojstva čine obiteljski obrazac koji se u jednoj noći 1913. realizira kao kolektivna sudbina."<br><br>
          <strong>Ključni argumenti:</strong> Barboczyjeva legenda (izvor zločina), tri smrti u jednoj noći (Ignjat, barunica, simbolički obitelj), slučaj Rupert-Canjeg (eksploatacija radnika), austrougarska fasada (dvojezičnost).<br><br>
          <strong>Krležina vlastita fraza:</strong> „Dekorativni pano naslikan po motivu građanske civilizacije u agoniji."
        </div>
      </div>

      <div class="sc" style="border-left:3px solid var(--gold)">
        <div class="sc-name">🎯 TEZA 2 — Borba protiv vlastitog nasljedstva (Leone)</div>
        <div class="sc-desc">
          <strong>Formulacija:</strong> „Leoneova središnja tragedija nije propast obitelji nego njegova spoznaja da ne može pobjeći od vlastite biologije — započevši dramu kao vanjski kritičar Glembajevih (I. čin), postaje optužitelj koji ubija riječju (II. čin), završava kao ubojica u činu (III. čin), čime potvrđuje Barboczyjevu legendu: krv pobjeđuje volju."<br><br>
          <strong>Ključni argumenti:</strong> Leoneova izjava „borim se protiv Glembaya u sebi" (I. čin), tri koraka pada, ironija — što više odriče glembajevštinu, to je više ima.<br><br>
          <strong>Filozofska dimenzija:</strong> Pitanje slobode vs. determinizma (Ibsen, Freud, Sartre).
        </div>
      </div>

      <div class="sc" style="border-left:3px solid var(--gold)">
        <div class="sc-name">🎯 TEZA 3 — Privid i istina kao tematska osa</div>
        <div class="sc-desc">
          <strong>Formulacija:</strong> „Dramu strukturira opozicija prividа (bogatstvo, ljepota, moć, čast) i istine (laž, krađa, ubojstvo, preljub) — svaki čin razotkriva novi sloj fasade, a Krležin postupak je ibsenovski: polagano retroaktivno otkrivanje prošlosti kroz dijalog, bez vanjske akcije, sve psihološki."<br><br>
          <strong>Ključni argumenti:</strong> Portreti Glembajevih kao dvostruki simbol (slavni + prokleti), baruničina tajna (zabavljačica → barunica), slučaj Rupert-Canjeg, sveopće razotkrivanje u II. činu.<br><br>
          <strong>Tehnički vrh:</strong> Krležina ekspresionistička intenzivnost replika + klasična ibsenovska struktura.
        </div>
      </div>

      <div class="sc" style="border-left:3px solid var(--gold)">
        <div class="sc-name">🎯 TEZA 4 — Klasična dramska forma u modernoj temi</div>
        <div class="sc-desc">
          <strong>Formulacija:</strong> „Krleža u Glembajevima spaja klasičnu dramsku formu (3 čina, jedinstvo mjesta/vremena/radnje, uzor Ibsen) s modernom temom (analitički realizam, psihološko poniranje, ekspresionistička intenzivnost), čime ostvaruje djelo koje sam naziva 'u hrv. književnost došlo 40 godina prekasno' — pomak od avangardnog eksperimenta prema psihološkoj analizi."<br><br>
          <strong>Ključni argumenti:</strong> Aristotelova jedinstva, Ibsenova retroaktivnost, 4 Krležine dramske faze (Glembajevi u 3. analitičko-realističkoj).<br><br>
          <strong>Kontekst:</strong> Odnos prema ekspresionizmu (ratni ciklus) i prema realizmu (Šenoa, Novak).
        </div>
      </div>

      <div class="sc" style="border-left:3px solid var(--gold)">
        <div class="sc-name">🎯 TEZA 5 — Sukob umjetnosti i materijalizma</div>
        <div class="sc-desc">
          <strong>Formulacija:</strong> „Središnji međugeneracijski sukob oca Ignjata (bankar, direktor Glembay Ltd.) i sina Leonea (slikar, doktor filozofije) nije samo obiteljski — on predstavlja sukob svjetonazora: <em>materijalističkog poimanja svijeta</em> (novac, ugled, klasa) i <em>umjetničkog poimanja svijeta</em> (istina, kritika, estetska refleksija), a Ignjatova smrt od infarkta u II. činu je simbolički završetak bankarskog principa pred spoznajom istine."<br><br>
          <strong>Ključni argumenti:</strong> Leoneova biografija (11 godina u Europi, slikar), Ignjatov identitet kroz banku, sukob u II. činu kao esejski dijalog.
        </div>
      </div>

      <!-- STRUKTURA ESEJA -->
      <div class="sec-hdr" style="margin-top:20px"><div class="sec-line"></div><div class="sec-badge">Struktura školskog eseja (min. 350 riječi)</div><div class="sec-line"></div></div>

      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Dio</th><th>Udio</th><th>Što sadrži</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>UVOD</strong><br>~15%</td>
              <td>50-70 rij.</td>
              <td>
                1. Kontekst (Krleža, moderna/avangarda, 1928., HNK 1929.)<br>
                2. Kratak opis djela (drama u 3 čina, jedna noć, palača Glembay)<br>
                3. <strong>Teza</strong> (što ćeš dokazati)
              </td>
            </tr>
            <tr>
              <td><strong>RAZRADA</strong><br>~70%</td>
              <td>240-280 rij.</td>
              <td>
                3 argumentativna odsjeka:<br>
                <strong>1.</strong> Teza + dokaz iz djela (citat, lik, situacija) + komentar<br>
                <strong>2.</strong> Teza + dokaz + komentar<br>
                <strong>3.</strong> Teza + dokaz + komentar<br>
                (Svaki odsjek 80-90 riječi)
              </td>
            </tr>
            <tr>
              <td><strong>ZAKLJUČAK</strong><br>~15%</td>
              <td>50-70 rij.</td>
              <td>
                1. Sažetak argumenata<br>
                2. Šira refleksija (suvremeno značenje, univerzalna dimenzija)<br>
                3. Zatvaranje — vraćanje na uvodnu tezu
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- MODEL ESEJ -->
      <div class="sec-hdr" style="margin-top:20px"><div class="sec-line"></div><div class="sec-badge">Model esej: „Borba protiv Glembaya u sebi — Leoneova tragedija"</div><div class="sec-line"></div></div>

      <div class="box-key">
        <div class="box-key-lbl">📝 Potpun model eseja (~400 riječi)</div>
        <div class="box-key-txt" style="line-height:1.7">
          <strong>UVOD.</strong> Miroslav Krleža (1893.–1981.), najznačajniji hrv. književnik 20. st., 1928. objavljuje dramu <em>Gospoda Glembajevi</em>, praizvedenu u zagrebačkom HNK 14. veljače 1929. „Drama u tri čina iz života jedne agramerske patricijske obitelji" smješta radnju u jednu ljetnu noć 1913., u palači bankarske obitelji Glembay, uz klasično jedinstvo mjesta, vremena i radnje. Ovaj esej nastoji pokazati kako <strong>Leoneova središnja tragedija nije propast obitelji, nego nemogućnost pobjeđivanja vlastitog biološko-društvenog nasljedstva</strong> — teza koju Krleža gradi kroz tri čina progresivnog pada glavnog lika.<br><br>
          
          <strong>RAZRADA.</strong> U prvom činu Leone se vraća u obiteljsku palaču nakon 11 godina boravka u Europi. Kao slikar i doktor filozofije pokušava se distancirati od Glembajevih — u razgovoru s Angelikom izjavljuje: <em>„Od prvog dana, kad sam počeo razmišljati, ne radim drugo nego se borim protiv Glembaya u sebi."</em> Njegovo retoričko razotkrivanje Barboczyjeve legende (svi Glembajevi su prokleti ubojice i varalice) djeluje kao vanjska kritika. Međutim, sama njegova zaljubljenost u Angeliku — udovicu brata Ivana koji se ubio — već ga upliće u obiteljsko prokletstvo.<br><br>
          
          Drugi čin prikazuje radikalnu eskalaciju. Leone napušta poziciju vanjskog kritičara i postaje <em>aktivni optužitelj</em> — razotkriva ocu Ignjatu dekadentnu prošlost barunice Castelli (bivša zabavljačica, preljubnica sa Silberbrandtom, indirektno odgovorna za smrt sestre Alise). <strong>Istina ubija oca</strong>: Ignjat doživi infarkt i umre. Leone je pobijedio argumentima, ali izgubio moralno — njegova razorna retorika već nosi glembajevsku nemilosrdnost.<br><br>
          
          Treći čin zatvara progresiju. Nakon očeve smrti Leone ostaje sam s barunicom, koja mu citira Barboczyjevu legendu natrag: <em>„Svi Glembajevi su ubojice i varalice!"</em> Leone uzima škare i ubije je (off-stage). Finalna rečenica <em>„Cvrkut ptica u vrtu"</em> donosi metafizičku ravnodušnost prirode prema tragediji. <strong>Borba protiv Glembaya u sebi završava porazom</strong>: Leone postaje upravo ono što je osuđivao.<br><br>
          
          <strong>ZAKLJUČAK.</strong> Glembajevi tako nisu samo drama o propasti jedne obitelji, nego duboka filozofska rasprava o <em>granicama individualne slobode pred kolektivnim nasljedstvom</em>. Krleža, spajajući klasičnu dramsku formu (Aristotelova jedinstva, Ibsenova retroaktivnost) s modernom psihološkom analizom, stvara djelo koje razotkriva osnovno pitanje modernog doba: može li svjesni pojedinac pobjeći od svoje biologije, klase, kulture? Leoneov tragični odgovor — „ne" — čini Glembajeve univerzalnom tragedijom koja nadilazi hrv. buržoaziju pred 1. svj. rat i dotiče svako doba koje se bori sa svojim nasljeđem. (~395 riječi)
        </div>
      </div>

      <div class="box-signal">
        <div class="box-signal-lbl">💡 Kako koristiti model esej</div>
        <div class="box-signal-txt">
          <strong>Ne prepisuj ga doslovno!</strong> Model služi kao <em>referenca strukture i argumentacije</em>. Primijeti: (1) jasnu tezu u uvodu, (2) tri argumentativna odsjeka u razradi (svaki s citatom ili konkretnim dokazom iz djela), (3) zaključak koji se vraća na tezu i proširuje je. <strong>Tvoj esej</strong> treba imati istu strukturu, ali u tvom vlastitom stilu — i mogao bi koristiti neku drugu tezu (od 5 ponuđenih gore).
        </div>
      </div>
    </div>

    <!-- AT1: Scanner ulomka -->
    <div class="alat-pane" id="at1">
      <div class="alat-card">
        <h4>🔍 Scanner ulomka — AI analiza dijela iz Glembajevih</h4>
        <p>Zalijepi ulomak iz drame koji moraš analizirati. Scanner će identificirati: <em>čin</em> (I/II/III), <em>likove</em>, <em>stilska sredstva</em>, <em>tehniku</em>, i dati <em>esejsku preporuku</em>.</p>
      </div>

      <textarea id="scanner-in" oninput="scannerCount()" placeholder="Zalijepi ulomak iz Glembajevih ovdje..." style="width:100%;min-height:150px;padding:12px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--txt);font-family:var(--serif);font-size:14px;resize:vertical"></textarea>

      <div style="display:flex;gap:12px;align-items:center;margin-top:10px;flex-wrap:wrap">
        <button class="fcb primary" onclick="scannerGo()">▶ Analiziraj ulomak</button>
        <button class="fcb" onclick="scannerClear()">↩ Obriši</button>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2);margin-left:auto">
          <span id="scanner-chars">0</span> znakova · <span id="scanner-words">0</span> riječi
        </div>
      </div>

      <div id="scanner-out"></div>
    </div>

    <!-- AT2: 3 razine -->
    <div class="alat-pane" id="at2">
      <div class="alat-card">
        <h4>📊 3 razine čitanja drame</h4>
        <p>Glembajevi funkcioniraju na <strong>tri istodobne razine</strong>. Dobar odgovor ima barem dvije razine u igri.</p>
      </div>

      <div class="sc" style="border-left:3px solid var(--blue-l)">
        <div class="sc-name">📖 1. KONKRETNA razina — drama o obitelji</div>
        <div class="sc-desc">
          <strong>Što je:</strong> Doslovna razina — priča o noći 1913. u palači Glembay. 3 čina, 3 sukoba, 2 smrti (Ignjat infarkt, barunica škare).<br><br>
          <strong>Kada koristiti:</strong> Pitanja o radnji, likovima, mjestima, događajima.<br><br>
          <strong>Ključni elementi:</strong> Leone, Ignjat, Charlotte, Angelika, Fabriczy, Silberbrandt, Barboczyjeva legenda, slučaj Rupert-Canjeg, škare.<br><br>
          <strong>Struktura:</strong> I. čin = salon s portretima; II. čin = sukob s ocem; III. čin = ubojstvo barunice.
        </div>
      </div>

      <div class="sc" style="border-left:3px solid var(--gold)">
        <div class="sc-name">🏛 2. SOCIJALNA razina — propast hrv. patricijske buržoazije</div>
        <div class="sc-desc">
          <strong>Što je:</strong> Društveno-kritička razina. Glembajevi su simbol agramerske aristokracije stečene na zločinu. Pred 1. svj. rat cijela klasa je trula.<br><br>
          <strong>Kada koristiti:</strong> Pitanja o modernoj, Krležinoj ideologiji, austrougarskom kontekstu, klasnoj kritici.<br><br>
          <strong>Ključ:</strong> Bogatstvo stečeno na zločinu (Barboczyjeva legenda), eksploatacija radnika (Rupert-Canjeg), dvojezičnost (austrougarska fasada).<br><br>
          <strong>Krležina teza:</strong> „Dekorativni pano naslikan po motivu građanske civilizacije u agoniji."
        </div>
      </div>

      <div class="sc" style="border-left:3px solid var(--green)">
        <div class="sc-name">🎭 3. UNIVERZALNA razina — borba protiv vlastitog nasljedstva</div>
        <div class="sc-desc">
          <strong>Što je:</strong> Općeljudska razina. Leoneova drama: može li svjesni pojedinac pobjeći od biološko-društvenog nasljedstva? Tragični odgovor: ne.<br><br>
          <strong>Kada koristiti:</strong> Interpretacijska pitanja, komparacije s Ibsenom, filozofska dimenzija.<br><br>
          <strong>Ključ:</strong> „Borim se protiv Glembaya u sebi" → Leone postaje Glembay (ubojica). Krv pobjeđuje volju.<br><br>
          <strong>Paralele:</strong> Ibsenovi <em>Duhovi</em>, Freudov Über-Ich, sartreovska „loša vjera", Camusjevo pitanje apsurda.
        </div>
      </div>

      <div class="box-key" style="margin-top:14px">
        <div class="box-key-lbl">🎯 Zlatno pravilo</div>
        <div class="box-key-txt">
          Dobar odgovor <strong>uvijek spaja barem 2 razine</strong>. Primjer: „Leoneovo ubojstvo barunice je konkretno završetak njihovog sukoba (1), ali i <em>simbolička predaja klasi koja ga proždire</em> (2), te <em>univerzalna priča o porazu razuma pred instinktom</em> (3)."
        </div>
      </div>
    </div>

    <!-- AT3: Strategija ulomka -->
    <div class="alat-pane" id="at3">
      <div class="alat-card">
        <h4>⚡ Strategija analize ulomka — 5 koraka (3 minute)</h4>
      </div>

      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Korak</th><th>Što radiš</th><th>Ključni pokazatelji</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>1. Lokacija</strong><br>30 sek</td>
              <td>Iz kojeg je čina?</td>
              <td>
                <em>I. čin</em>: salon, portreti, Angelika, Fabriczy, Silberbrandt, Barboczy, Rupert-Canjeg, Kant<br>
                <em>II. čin</em>: otac Ignjat, baruničina prošlost, Alisa, infarkt, sukob oca i sina<br>
                <em>III. čin</em>: škare, „Stundenhotel", Angelika kao lutka, Cvrkut ptica
              </td>
            </tr>
            <tr>
              <td><strong>2. Tehnika</strong><br>20 sek</td>
              <td>Koja se tehnika koristi?</td>
              <td>
                Psihološki dijalog · opširne replike · retroaktivno razotkrivanje · simbol (portreti, škare) · dvojezičnost · opširne didaskalije · off-stage nasilje
              </td>
            </tr>
            <tr>
              <td><strong>3. Likovi</strong><br>30 sek</td>
              <td>Tko govori? Koji je psihološki profil?</td>
              <td>
                Leone (filozof-kritičar), Ignjat (patrijarh), barunica (preljubnica), Angelika (religiozna udovica), Fabriczy (konzervativac), Silberbrandt (hipokrit)
              </td>
            </tr>
            <tr>
              <td><strong>4. Stilska sredstva</strong><br>40 sek</td>
              <td>Prepoznaj barem 2-3 figure</td>
              <td>
                Kontrast (privid/istina), ironija, metafora („Glembay u sebi"), simbol (portreti, škare), aluzija (Kant, Euler)
              </td>
            </tr>
            <tr>
              <td><strong>5. Interpretacija</strong><br>60 sek</td>
              <td>Tri razine čitanja u 2-3 rečenice</td>
              <td>
                Konkretna (što se događa) + socijalna (propast klase) + univerzalna (borba s nasljedstvom)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- AT4: 20 kratkih odgovora -->
    <div class="alat-pane" id="at4">
      <div class="alat-card">
        <h4>💬 20 kratkih odgovora — najčešća pitanja</h4>
      </div>

      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Pitanje</th><th>Kratki odgovor</th></tr></thead>
          <tbody>
            <tr><td>Tko je autor?</td><td>Miroslav Krleža (1893.–1981.), Zagreb</td></tr>
            <tr><td>Kada je objavljena?</td><td>1928., DHK (Zagreb)</td></tr>
            <tr><td>Kada je praizvedba?</td><td><strong>14. veljače 1929.</strong> u zagrebačkom HNK (režija A. Verli)</td></tr>
            <tr><td>Žanr?</td><td>Drama u 3 čina · psihološko-socijalna · komorna · građanska tragedija</td></tr>
            <tr><td>Podnaslov?</td><td>„Drama u tri čina iz života jedne agramerske patricijske obitelji"</td></tr>
            <tr><td>Vrijeme radnje?</td><td>Jedna ljetna noć 1913. (1-5 ujutro), godinu prije 1. svj. rata</td></tr>
            <tr><td>Mjesto radnje?</td><td>Palača bankarske obitelji Glembay u Zagrebu</td></tr>
            <tr><td>Klasična jedinstva?</td><td>DA — jedinstvo mjesta, vremena, radnje</td></tr>
            <tr><td>Glavni lik?</td><td>Leone Glembay (38, slikar, dr. filozofije)</td></tr>
            <tr><td>Tko umire u II. činu?</td><td>Ignjat Glembay (infarkt) — otac Leonea</td></tr>
            <tr><td>Tko umire u III. činu?</td><td>Barunica Charlotte Castelli-Glembay — Leone je ubije škarama</td></tr>
            <tr><td>Tko je Angelika?</td><td>Sestra Angelika Glembay, dominikanka, udovica brata Ivana (Leoneova platonska ljubav)</td></tr>
            <tr><td>Što je Glembajevski ciklus?</td><td>3 drame (Glembajevi, U agoniji, Leda) + 11 novela (1928.-1931.)</td></tr>
            <tr><td>Tko je uzor Krleži?</td><td>Henrik Ibsen — skandinavska dramaturgija 90-ih godina 19. st.</td></tr>
            <tr><td>Što je Barboczyjeva legenda?</td><td>Prvi Glembay ubio kranjskog zlatara → svi Glembajevi prokleti („ubojice i varalice")</td></tr>
            <tr><td>Koja je glavna tema?</td><td>Propast hrv. patricijske obitelji kao simbol propasti klase pred 1. svj. rat</td></tr>
            <tr><td>Koji je glavni kontrast?</td><td>Privid (bogatstvo, ljepota, moć) ↔ Istina (laž, krađa, ubojstvo)</td></tr>
            <tr><td>Ključna Leoneova izjava?</td><td>„Od prvog dana... ne radim drugo nego se borim protiv Glembaya u sebi" (I. čin)</td></tr>
            <tr><td>Zadnja rečenica drame?</td><td>„Cvrkut ptica u vrtu." (metafizička ravnodušnost prirode)</td></tr>
            <tr><td>ispitno djelo 2026?</td><td><strong>★ DA</strong> — ispitno djelo</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- AT5: Komparacije -->
    <div class="alat-pane" id="at5">
      <div class="alat-card">
        <h4>🌐 Komparacije s drugim djelima</h4>
      </div>

      <div class="tbl-wrap">
        <table class="tbl">
          <thead><tr><th>Djelo</th><th>Zajedničko</th><th>Razlika</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>Henrik Ibsen · Duhovi</strong> (1881.)</td>
              <td>Retroaktivno razotkrivanje, nasljedna „bolest" obitelji, tragedija u skandinavskoj formi</td>
              <td>Ibsen = konkretna sifilička nasljednost; Krleža = moralno-klasno nasljedstvo</td>
            </tr>
            <tr>
              <td><strong>Novak · Posljednji Stipančići</strong> (1899., D16)</td>
              <td>Propast hrv. građanske obitelji, realistička analiza, austrougarski kontekst; <strong>ispitno djelo 2026.</strong></td>
              <td>Stipančići = postupno propadanje kroz roman; Glembajevi = koncentrirano u jednu noć kroz dramu</td>
            </tr>
            <tr>
              <td><strong>Marinković · Kiklop</strong> (1965., D22)</td>
              <td>Intelektualac-autsajder, nemogućnost uklapanja, kritika društva; <strong>ispitno djelo 2026.</strong></td>
              <td>Kiklop = moderni roman; Glembajevi = klasična drama. Marinković razvija ono što Krleža započinje</td>
            </tr>
            <tr>
              <td><strong>Šenoa · Prijan Lovro</strong> (1873., H15)</td>
              <td>Kritika hrv. malograđanskog društva, tragični kraj glavnog lika, propast intelektualca</td>
              <td>Lovro = individualna tragedija (samoubojstvo iz ljubavi); Leone = kolektivna (ubojica potvrđuje klasu)</td>
            </tr>
            <tr>
              <td><strong>Dostojevski · Zločin i kazna</strong> (1866., D07)</td>
              <td>Protagonist postaje ubojica; pitanje moralne krivnje i filozofije; <strong>ispitno djelo 2026.</strong></td>
              <td>Raskoljnikov = intelektualno opravdano ubojstvo + pokajanje; Leone = pasivno-aktivno, bez pokajanja</td>
            </tr>
            <tr>
              <td><strong>Kafka · Preobražaj</strong> (1915., D08)</td>
              <td>Čovjek koji se raspada pod težinom obiteljskih/društvenih očekivanja; <strong>ispitno djelo 2026.</strong></td>
              <td>Gregor = pasivni zadavljeni; Leone = aktivni ubojica. Obojica propadaju u „obitelji"</td>
            </tr>
            <tr>
              <td><strong>Krleža · Povratak Filipa Latinovicza</strong> (1932.)</td>
              <td>Isti autor, ista tema — intelektualac se vraća u rodni kraj, ne može se uklopiti</td>
              <td>Filip = roman (unutarnji monolog); Glembajevi = drama (dijalog). Paralelni likovi Leone/Filip</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="box-signal">
        <div class="box-signal-lbl">💡 Najjača para komparacija</div>
        <div class="box-signal-txt">
          Za esej ili pitanje, najsnažnije paralele: <strong>Glembajevi ↔ Stipančići</strong> (oba esejska djela 2026., propast hrv. obitelji), <strong>Glembajevi ↔ Kiklop</strong> (oba esejska, intelektualac-outsider), <strong>Glembajevi ↔ Ibsenovi Duhovi</strong> (izravan uzor, retroaktivnost).
        </div>
      </div>
    </div>

    <!-- AT6: 5 grešaka -->
    <div class="alat-pane" id="at6">
      <div class="alat-card">
        <h4>🚫 5 najčešćih grešaka</h4>
      </div>

      <div class="sc" style="border-left:3px solid var(--red-l)">
        <div class="sc-name">❌ 1. „Glembajevi su roman"</div>
        <div class="sc-desc"><strong>Krivo.</strong> Glembajevi su <strong>drama u 3 čina</strong>. Krleža piše i romane (Filip Latinovicz, Na rubu pameti, Zastave), ali Glembajevi su drama. <em>Glembajevski ciklus</em> ima 3 drame + 11 novela — ali središnji tekst je dramski.</div>
      </div>

      <div class="sc" style="border-left:3px solid var(--red-l)">
        <div class="sc-name">❌ 2. „Krleža je modernist"</div>
        <div class="sc-desc"><strong>Djelomično krivo.</strong> Hrvatska moderna = 1895.–1914. (Matoš, Vidrić, Nazor). Krleža počinje pisati nakon moderne — u <strong>ekspresionizmu</strong> i kasnije u <strong>analitičkom realizmu</strong> (Glembajevi). U školskoj periodizaciji se stavlja u kontekst „moderne i avangarde", ali nije modernist u užem smislu.</div>
      </div>

      <div class="sc" style="border-left:3px solid var(--red-l)">
        <div class="sc-name">❌ 3. „Leone je pozitivan junak"</div>
        <div class="sc-desc"><strong>Krivo.</strong> Leone je <em>tragični, ambivalentni</em> junak. Započinje kao kritičar, završava kao ubojica. Krleža ne idealizira njegovu „moralnost". <strong>Borba protiv Glembaya u sebi ga sama pretvara u Glembaya</strong> — to je poanta drame.</div>
      </div>

      <div class="sc" style="border-left:3px solid var(--red-l)">
        <div class="sc-name">❌ 4. Zbrka činova i njihovih sukoba</div>
        <div class="sc-desc"><strong>Krivo.</strong> Učenici često pomiješaju: tko s kim u kojem činu. Točno: <strong>I. čin</strong> = Leone vs. glembajevska sredina (Fabriczy, Silberbrandt, Angelika), <strong>II. čin</strong> = Leone vs. otac Ignjat (infarkt), <strong>III. čin</strong> = Leone vs. barunica (škare). Zapamti: <em>društvo → otac → maćeha</em>.</div>
      </div>

      <div class="sc" style="border-left:3px solid var(--red-l)">
        <div class="sc-name">❌ 5. Zanemarivanje klasičnih jedinstava</div>
        <div class="sc-desc"><strong>Krivo.</strong> Ne preskočiti u analizi! Glembajevi imaju <strong>klasično jedinstvo mjesta, vremena, radnje</strong> (Aristotelov ideal). Sva 3 čina u istoj palači, u istoj noći, u kontinuiranoj radnji. To je <em>svjesni Krležin izbor</em> — vraćanje klasičnoj formi nakon avangardnih eksperimenata.</div>
      </div>
    </div>

    <!-- AT7: Checklist -->
    <div class="alat-pane" id="at7">
      <div class="alat-card">
        <h4>✅ Checklist — što trebaš znati o Glembajevima</h4>
      </div>

      <div id="cl-list"></div>
      <div id="cl-score" style="margin-top:14px"></div>
    </div>

    <!-- DISCERE -->
    <div class="discere-banner" style="margin-top:20px" onclick="window.location.href='#discere'">
      <div class="discere-ico">📝</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Simulator eseja o Glembajevima</div>
        <div class="discere-sub">Napiši vlastiti esej + AI evaluacija + model eseji · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row">
      <span class="nb-btn" onclick="sw(1)">← 3 čina</span>
      <span class="nb-btn primary" onclick="sw(3)">💬 Citatnik →</span>
    </div>

  </div><!-- /l2 -->

  <div class="layer" id="l3" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa">Miroslav Krleža</span>
      <span class="pill p-br">Gospoda Glembajevi</span>
      <span class="pill p-go">★ Napamet</span>
      <span class="pill p-t">Filtriraj kategoriju</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💬 Citati iz Glembajevih — arsenal za esej i interpretaciju</div>
      <div class="box-int-txt">Klikni ⎘ za kopiranje citata s atribucijom. Citati označeni <strong>★ Napamet</strong> prioritetno nauči — oni se najčešće traže u analizi ulomaka i u školskom eseju. Filtriraj po činu, liku ili temi.</div>
    </div>

    <!-- ★ NAPAMET — 8 glavnih citata -->
    
    <div class="cit-search-row" style="margin:14px 0 16px;display:flex;gap:8px;align-items:center">
      <label for="cit-search" class="sr-only" style="position:absolute;left:-9999px">Pretraži citate</label>
      <span style="font-size:18px;color:var(--gold,#e9b446)">🔍</span>
      <input type="search" id="cit-search" class="cit-search" placeholder="Pretraži citate (npr. Krleža, Glembay, Leone, Charlotta)…" aria-label="Pretraži citate" autocomplete="off"
        style="flex:1;padding:10px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px"
        oninput="citSearch(this.value)">
      <button type="button" class="cit-clear" onclick="document.getElementById('cit-search').value='';citSearch('')" aria-label="Očisti pretragu" title="Očisti"
        style="padding:8px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);cursor:pointer;font-size:14px">✕</button>
    </div>
<div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">★ Napamet — 8 glavnih citata iz Glembajevih</div><div class="sec-line"></div></div>

    <!-- 1. Leoneova ključna izjava -->
    <div class="featured-quote" data-cit-cat="leone">
      <span class="fq-napamet">★ NAPAMET #1</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Od prvog dana, kad sam počeo razmišljati, ne radim drugo nego se borim protiv Glembaya u sebi.</div>
        <div class="fq-meta">— Leone Glembay, <em>Gospoda Glembajevi</em>, I. čin · <strong>Ključna izjava cijele drame</strong> · Tema borbe protiv biološkog nasljedstva</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Od prvog dana, kad sam počeo razmišljati, ne radim drugo nego se borim protiv Glembaya u sebi. — Leone Glembay, Gospoda Glembajevi, I. čin')">⎘</button>
    </div>

    <!-- 2. Krleža o djelu (vlastita fraza) -->
    <div class="featured-quote" data-cit-cat="krleza">
      <span class="fq-napamet">★ NAPAMET #2</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Glembajevi su neka vrsta dekorativnog panoa naslikanog po motivu jedne građanske civilizacije na odlasku u agoniju, i imaju karakter poetskog lirskog poniranja u sve elemente takozvane psihološke drame.</div>
        <div class="fq-meta">— Miroslav Krleža o vlastitom djelu · <strong>Autorova samointerpretacija</strong> · Klasa u agoniji + psihološka drama</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Glembajevi su neka vrsta dekorativnog panoa naslikanog po motivu jedne građanske civilizacije na odlasku u agoniju. — Miroslav Krleža o vlastitom djelu')">⎘</button>
    </div>

    <!-- 3. Barboczyjeva legenda -->
    <div class="featured-quote" data-cit-cat="tema">
      <span class="fq-napamet">★ NAPAMET #3</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Svi su Glembajevi prokleti — ubojice i varalice.</div>
        <div class="fq-meta">— Stara Barboczyjeva (legenda), <em>Gospoda Glembajevi</em>, I. čin · <strong>Proročanstvo koje se u III. činu ostvaruje</strong> · Tematski temelj drame</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Svi su Glembajevi prokleti — ubojice i varalice. — Stara Barboczyjeva, Gospoda Glembajevi, I. čin')">⎘</button>
    </div>

    <!-- 4. Leone Angeliki -->
    <div class="featured-quote" data-cit-cat="cin1">
      <span class="fq-napamet">★ NAPAMET #4</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Ti si jedino u što vjerujem u glembajevskoj kući.</div>
        <div class="fq-meta">— Leone Angeliki, <em>Gospoda Glembajevi</em>, I. čin · <strong>Erotska napetost</strong> · Angelika kao jedina „čista" u kući</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Ti si jedino u što vjerujem u glembajevskoj kući. — Leone Angeliki, Gospoda Glembajevi, I. čin')">⎘</button>
    </div>

    <!-- 5. Finalna rečenica -->
    <div class="featured-quote" data-cit-cat="cin3">
      <span class="fq-napamet">★ NAPAMET #5</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Cvrkut ptica u vrtu.</div>
        <div class="fq-meta">— Didaskalija (završetak), <em>Gospoda Glembajevi</em>, III. čin · <strong>Metafizička ravnodušnost prirode</strong> · Ironični finale</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Cvrkut ptica u vrtu. — Didaskalija, završetak Glembajevih, III. čin')">⎘</button>
    </div>

    <!-- 6. Sukob oca i sina -->
    <div class="featured-quote" data-cit-cat="cin2">
      <span class="fq-napamet">★ NAPAMET #6</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Sve što je ona godinama krala od Glembaya, ja sam to uzeo natrag.</div>
        <div class="fq-meta">— Leone barunici, <em>Gospoda Glembajevi</em>, III. čin · <strong>Konflikt za nasljedstvo</strong> · Priprema ubojstva</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Sve što je ona godinama krala od Glembaya, ja sam to uzeo natrag. — Leone barunici, III. čin')">⎘</button>
    </div>

    <!-- 7. Barunica citira Barboczyjevu -->
    <div class="featured-quote" data-cit-cat="cin3">
      <span class="fq-napamet">★ NAPAMET #7</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Dobro je rekla stara Barboczyjeva — svi su Glembajevi ubojice i varalice!</div>
        <div class="fq-meta">— Barunica Castelli Leoneu, <em>Gospoda Glembajevi</em>, III. čin · <strong>Proročanstvo se zatvara</strong> · Uvod u ubojstvo</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Dobro je rekla stara Barboczyjeva — svi su Glembajevi ubojice i varalice! — Barunica Castelli, III. čin')">⎘</button>
    </div>

    <!-- 8. Krležin status djela -->
    <div class="featured-quote" data-cit-cat="krleza">
      <span class="fq-napamet">★ NAPAMET #8</span>
      <div class="fq-mark">«</div>
      <div class="fq-body">
        <div class="fq-text">Glembajevi su u hrvatsku književnost došli 40 godina prekasno.</div>
        <div class="fq-meta">— Miroslav Krleža o vlastitom djelu · <strong>Autorova ocjena</strong> · Drama klasične forme u avangardnom vremenu</div>
      </div>
      <button type="button" class="fq-copy" onclick="fqCopy(this,'Glembajevi su u hrvatsku književnost došli 40 godina prekasno. — Miroslav Krleža o vlastitom djelu')">⎘</button>
    </div>

    <!-- DINAMIČKI CITATNIK -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Citatnik — dinamički pregled 40 citata po kategorijama</div><div class="sec-line"></div></div>

    <div class="cit-filters" id="cit-filter-row" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px">
      <button class="cit-fbt on" data-cat="all" onclick="citFilter2('all',this)">Sve</button>
      <button class="cit-fbt" data-cat="cin1" onclick="citFilter2('cin1',this)">I. čin</button>
      <button class="cit-fbt" data-cat="cin2" onclick="citFilter2('cin2',this)">II. čin</button>
      <button class="cit-fbt" data-cat="cin3" onclick="citFilter2('cin3',this)">III. čin</button>
      <button class="cit-fbt" data-cat="leone" onclick="citFilter2('leone',this)">Leone</button>
      <button class="cit-fbt" data-cat="tema" onclick="citFilter2('tema',this)">Teme/ideje</button>
      <button class="cit-fbt" data-cat="krleza" onclick="citFilter2('krleza',this)">Krleža o djelu</button>
      <button class="cit-fbt" data-cat="kontekst" onclick="citFilter2('kontekst',this)">Kontekst</button>
      <button class="cit-fbt" data-cat="stars" onclick="citFilter2('stars',this)">⭐ Moji</button>
    </div>

    <div id="cit-grid2"></div>

    <div class="box-key" style="margin-top:18px">
      <div class="box-key-lbl">💡 Kako koristiti citatnik Glembajevih</div>
      <div class="box-key-txt">
        <strong>1.</strong> Za esej: ugradi 2-3 citata iz različitih činova (I. + II. + III.) da pokažeš kronološki razvoj.<br>
        <strong>2.</strong> Za analizu ulomka: prepoznaj iz kojeg je čina → koristi citate iz te kategorije.<br>
        <strong>3.</strong> ⭐ Označi citate za sebe — spremaju se u lokalni profil (<code>mt.hrv.h16.cit_stars</code>).<br>
        <strong>4.</strong> <strong>★ Napamet</strong> citati obvezni — posebno „Od prvog dana... borim se protiv Glembaya u sebi" + Krležin „dekorativni pano".
      </div>
    </div>

    <!-- DISCERE TOUCHPOINT -->
    <div class="discere-banner" style="margin-top:20px" onclick="window.location.href='#discere'">
      <div class="discere-ico">💬</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Citatna banka Glembajevih s kontekstom</div>
        <div class="discere-sub">Svi citati iz drame + kontekst čina + audio interpretacije · <strong>Pro plan</strong></div>
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
        <button class="pojm-filter" data-cat="drama" onclick="pojmFilter2('drama',this)">Drama/žanr</button>
        <button class="pojm-filter" data-cat="tehnika" onclick="pojmFilter2('tehnika',this)">Dramske tehnike</button>
        <button class="pojm-filter" data-cat="stil" onclick="pojmFilter2('stil',this)">Stilska sredstva</button>
        <button class="pojm-filter" data-cat="likovi" onclick="pojmFilter2('likovi',this)">Likovi Glembajevih</button>
        <button class="pojm-filter" data-cat="moderna" onclick="pojmFilter2('moderna',this)">Moderna/avangarda</button>
        <button class="pojm-filter" data-cat="krleza" onclick="pojmFilter2('krleza',this)">Krležin opus</button>
        <button class="pojm-filter" data-cat="autori" onclick="pojmFilter2('autori',this)">Suvremeni autori</button>
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

    <div class="fc-cat-label">H16 · KRLEŽA · GLEMBAJEVI — Pojmovnik</div>
    <div class="fc-wrap">
      <div class="fc-inner" id="fc-card-dyn" onclick="fcFlip()">
        <div class="fc-front">
          <div class="fc-label">POJAM · klikni za definiciju</div>
          <div class="fc-term">Klasično jedinstvo mjesta, vremena, radnje</div>
          <div class="fc-cat">tehnika · klikni za definiciju</div>
        </div>
        <div class="fc-back">
          <div class="fc-label">DEFINICIJA</div>
          <div class="fc-def">Aristotelov ideal. Glembajevi: cijela drama u palači Glembay (mjesto), jedna ljetna noć 1913., 1-5 ujutro (vrijeme), kontinuirana radnja bez sporednih linija.</div>
          <div class="fc-cat">tehnika</div>
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

    <div class="nav-row" style="margin-top:20px">
      <span class="nb-btn" onclick="sw(4)">← Pojmovnik</span>
      <span class="nb-btn primary" onclick="sw(6)">🧠 Kviz →</span>
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

    <div class="nav-row" style="margin-top:20px">
      <span class="nb-btn" onclick="sw(5)">← Drill</span>
      <span class="nb-btn primary" onclick="sw(7)">✅ Checkpoint →</span>
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

    <p>Označi svaku tvrdnju koju <strong>stvarno znaš</strong> — ne samo prepoznaješ, nego možeš objasniti i primijeniti u eseju. Kada označiš svih 10, možeš prijeći na H16.</p>

    <div class="cp-grid" id="cp-list"></div>
    <div class="cp-prog">
      <div class="cp-prog-label">
        <span>Usvojenost H16</span>
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
      <div class="cp-final-title">H16 Završeno!</div>
      <div class="cp-final-msg">Izvrsno! Savladao/la si Krležu i Glembajeve — dramu u 3 čina, klasična jedinstva, psihološko-socijalnu analizu i Krležin opus. <strong>★ ispitno djelo 2026.</strong> Sljedeće: <strong>H17 · Stilske figure</strong>.</div>
      <a href="Maturiraj_Hrvatski_H17.html?from=H16" class="reveal-lock-btn" style="text-decoration:none;display:inline-flex;align-items:center;gap:8px">→ H17 · Stilske figure</a>
      <br><br>
      <button class="nb-btn" onclick="cpReset()">↩ Resetiraj</button>
    </div>

    <!-- Writing practice widget -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">Vježba pisanja — rečenica o Glembajevima</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">✍ Napiši jednu rečenicu o Glembajevima koja bi mogla ući u esej/interpretaciju</div>
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
        <textarea id="cp-writer" class="wc-ta" style="min-height:100px" placeholder="Npr: Krleža u Glembajevima (1928., HNK 1929.) gradi psihološko-socijalnu dramu u 3 čina s klasičnim jedinstvom mjesta/vremena/radnje — kroz Leoneovu tragičnu spoznaju da se ne može riješiti Glembaya u sebi (biološkog nasljedstva) — razotkriva propast hrv. patricijske buržoazije pred 1. svj. rat..." rows="4" oninput="cpWriterUpdate()"></textarea>
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
      <div class="box-signal-lbl">📎 Poveznice između tabova H16</div>
      <div class="box-signal-txt">
        <b>Teorija (0)</b> → kontekst i pojmovi → <b>3 čina (1)</b> → detaljna analiza → <b>Esej alat (2)</b> → primjena u eseju → <b>Citatnik (3)</b> → gotovi citati → <b>Pojmovnik (4)</b> → precizni pojmovi → <b>Kviz (6)</b> → provjera → <b>Checkpoint (7)</b> → potvrda. <strong>Za ispit: počni s Kvizom (brza dijagnoza), zatim nadopuni slabe točke.</strong>
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
      <a class="chapter-nav-card chapter-nav-prev" href="/skripte/hrv/h15">
        <div class="chapter-nav-arrow">←</div>
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill">PRETHODNO</div>
          <div class="chapter-nav-name">H15 · Šenoa · Prijan Lovro</div>
          <div class="chapter-nav-desc">Hrvatski realizam</div>
        </div>
      </a>

      <a class="chapter-nav-card chapter-nav-next" href="/skripte/hrv/h17">
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill chapter-nav-pill-next">SLJEDEĆE</div>
          <div class="chapter-nav-name">H17 · Stilske figure</div>
          <div class="chapter-nav-desc">Leksikon i primjeri iz hrv. književnosti</div>
        </div>
        <div class="chapter-nav-arrow">→</div>
      </a>
</div>

    <div class="chapter-nav-related">
      <div class="chapter-nav-related-ttl">🔗 Povezana poglavlja</div>
      <div class="chapter-nav-related-grid">
        <a class="chapter-nav-mini" href="/skripte/hrv/h14">
          <span class="chapter-nav-mini-code">H14</span>
          <span class="chapter-nav-mini-name">Narodni preporod</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h15">
          <span class="chapter-nav-mini-code">H15</span>
          <span class="chapter-nav-mini-name">Šenoa · realizam</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h17">
          <span class="chapter-nav-mini-code">H17</span>
          <span class="chapter-nav-mini-name">Stilske figure</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h18">
          <span class="chapter-nav-mini-code">H18</span>
          <span class="chapter-nav-mini-name">Versifikacija</span>
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
  {q:'Tko je autor drame Gospoda Glembajevi?',o:['Miroslav Krleža','August Šenoa','Antun Gustav Matoš','Ranko Marinković'],t:0,e:'Miroslav Krleža (1893.-1981.), Zagreb. Najznačajniji hrvatski književnik 20. stoljeća. Direktor Leksikografskog zavoda od 1950.'},
  {q:'Kada su Gospoda Glembajevi objavljeni?',o:['1965. u Zagrebu','1928. u izdanju DHK (Zagreb)','1873. u Vijencu','1913. u Beču'],t:1,e:'Drama je objavljena 1928. u Zagrebu, u nakladi Društva hrvatskih književnika (DHK). Praizvedba 14. veljače 1929. u zagrebačkom HNK.'},
  {q:'Koji je žanr Gospodi Glembajevih?',o:['Pripovijetka s okvirnom pričom','Roman u 5 svezaka','Drama u 3 čina (psihološko-socijalna)','Tragedija u stihu'],t:2,e:'Drama u 3 čina — psihološko-socijalna, komorna, građanska tragedija. Krleža sam klasificira kao „kvalitativnu dramu".'},
  {q:'Gdje se odvija radnja drame?',o:['U bečkoj operi','U praškoj kavani','U palači bankarske obitelji Glembay u Zagrebu','Na seoskom imanju'],t:2,e:'Sva radnja odvija se u salonu palače Glembay u Zagrebu. Klasično jedinstvo mjesta.'},
  {q:'Kada se odvija radnja?',o:['Jedan tjedan 1914.','Pola godine prije revolucije','Jedan dan 1928. godine','Jedna ljetna noć 1913., od 1 do 5 ujutro'],t:3,e:'Jedna ljetna noć godinu dana prije Prvog svjetskog rata (1913.), od 1 do 5 ujutro. Klasično jedinstvo vremena.'},
  {q:'Koja klasična jedinstva drama zadovoljava?',o:['Samo jedinstvo mjesta','Sva tri — jedinstvo mjesta, vremena i radnje','Nijedno — moderna drama to odbacuje','Samo jedinstvo vremena'],t:1,e:'Glembajevi zadovoljavaju sva tri Aristotelova klasična jedinstva: mjesto (palača Glembay), vrijeme (jedna noć), radnja (kontinuirana, bez sporednih linija).'},
  {q:'Tko je bio uzor Krleži za Glembajeve?',o:['Bertolt Brecht','Molière','Henrik Ibsen (skandinavska dramaturgija)','William Shakespeare'],t:2,e:'Henrik Ibsen (1828.-1906.), norveški dramatičar. Krleža preuzima skandinavsku dramsku školu — retroaktivno razotkrivanje, psihološka analiza.'},
  {q:'Kako se naziva ciklus kojem Glembajevi pripadaju?',o:['Ciklus legendi','Kajkavski ciklus','Glembajevski ciklus (3 drame + 11 novela)','Ratni ciklus'],t:2,e:'Glembajevski ciklus (1928.-1931.): 3 drame (Gospoda Glembajevi, U agoniji, Leda) + 11 novela. Krležina 3. dramska faza.'},
  {q:'Što znači „retroaktivno razotkrivanje"?',o:['Likovi razbijaju četvrti zid','Pripovjedač prekida radnju','Drama se prikazuje obrnutim redoslijedom','Prošlost likova polako izlazi na vidjelo kroz dijalog'],t:3,e:'Ibsenova tehnika: prošlost se otkriva tijekom razgovora. U Glembajevima: baruničina prošlost polako izlazi u II. činu.'},
  {q:'Što je „off-stage nasilje" u Glembajevima?',o:['Ne postoji u drami','Borba likova pred publikom','Ubojstvo barunice u III. činu se događa iza scene — samo zvukovi','Simbolički umjesto stvarnog'],t:2,e:'Off-stage = iza scene. Klasična grčka tehnika. Leone ubije barunicu izvan pozornice, publika čuje samo lupanje vrata, razbijanje stakla, baruničine povike.'},
  {q:'Tko je glavni lik drame?',o:['Leone Glembay (slikar, dr. filozofije)','Barunica Castelli','Ignjat Glembay (bankar)','Sestra Angelika'],t:0,e:'Leone Glembay, 38 god., slikar i doktor filozofije, Ignjatov sin iz prvog braka. Vratio se iz Europe nakon 11 godina boravka.'},
  {q:'Tko umire u II. činu i kako?',o:['Sestra Angelika — bolestom','Leone Glembay — samoubojstvom','Barunica Castelli — ubojstvom','Ignjat Glembay — od infarkta'],t:3,e:'Ignjat Glembay (69, bankar) umire od infarkta u II. činu kada Leone razotkrije istinu o njegovoj ženi. Psihosomatska smrt.'},
  {q:'Tko je barunica Charlotte Castelli-Glembay?',o:['Leoneova supruga','Ignjatova druga žena (maćeha) — bivša zabavljačica','Sestra Ignjata Glembaya','Strankinja u posjeti Zagrebu'],t:1,e:'Barunica Charlotte Castelli (45 god.), Ignjatova druga žena. U II. činu se razotkriva da je bivša zabavljačica, preljubnica sa Silberbrandtom. Leone je ubije škarama u III. činu.'},
  {q:'Tko je sestra Angelika?',o:['Leoneova sestra po krvi','Dominikanka, udovica Leoneova brata Ivana','Kuharica obitelji','Barunicina pomoćnica'],t:1,e:'Sestra Angelika Glembay (29 god.), dominikanka, udovica brata Ivana koji se ubio. Rođena barunica Zygtmuntowicz. Leoneova platonska ljubav.'},
  {q:'Čime Leone ubije barunicu?',o:['Britvom','Otrovom','Škarama sa stola','Pištoljem'],t:2,e:'Leone uzima škare sa stola u III. činu i ubije baruncu Castelli off-stage. Paralela s britvom iz Prijana Lovre — svakodnevni predmet postaje smrtonosan.'},
  {q:'Što je Barboczyjeva legenda?',o:['Povijesna legenda o Zagrebu','Ljubavna priča mladih','Prvi Glembay ubio je kranjskog zlatara → svi prokleti','Politička intriga protiv obitelji'],t:2,e:'Barboczyjeva legenda: prvi Glembay opljačkao i ubio kranjskog zlatara na putu u varaždinsku crkvu. Od tada su svi Glembajevi prokleti — „ubojice i varalice".'},
  {q:'Koja je ključna Leoneova izjava?',o:['„Borim se protiv Glembaya u sebi"','„Glembajevi su nepobjedivi"','„Svijet pripada mladima"','„Volim Angeliku iznad svega"'],t:0,e:'„Od prvog dana, kad sam počeo razmišljati, ne radim drugo nego se borim protiv Glembaya u sebi" (I. čin). Tema borbe protiv biološkog nasljedstva.'},
  {q:'Koji je glavni kontrast drame?',o:['Privid (bogatstvo, moć) ↔ Istina (laž, ubojstvo)','Grad ↔ selo','Dobro ↔ zlo','Život ↔ smrt'],t:0,e:'Glavni kontrast: privid (bogatstvo, ljepota, sreća, moć) ↔ istina (lažljivci, kradljivci, ubojice, preljubnici). Krležina tematska osa.'},
  {q:'Što je Krleža sam rekao o drami?',o:['„Nerazumljivi eksperiment"','„Moje najsretnije djelo"','„Kopija Ibsena"','„Dekorativni pano civilizacije u agoniji"'],t:3,e:'„Glembajevi su neka vrsta dekorativnog panoa naslikanog po motivu jedne građanske civilizacije na odlasku u agoniju." Krležina samointerpretacija.'},
  {q:'Kojim jezicima govore Glembajevi u drami?',o:['Latinski + hrvatski','Samo njemačkim','Samo hrvatskim','Hrvatskim + njemačkim (dvojezičnost)'],t:3,e:'Glembajevi spontano prelaze u njemački — uobičajen govor zagrebačke buržoazije prije 1. svj. rata. „Stundenhotel", „Ltd.", njemačke fraze.'},
  {q:'Kada je praizvedba Glembajevih?',o:['Nikad — drama je samo čitana','14. veljače 1932. u Splitu','1. svibnja 1928. u Beču','14. veljače 1929. u zagrebačkom HNK'],t:3,e:'Praizvedba 14. veljače 1929. u zagrebačkom HNK, režija A. Verli. Trenutni uspjeh — drama ostaje klasik hrv. dramske scene.'},
  {q:'Koja je Krležina dramska faza Glembajevi?',o:['Simbolistička (1. faza)','Analitičko-realistička (3. faza)','Ratna (2. faza)','Posljednja faza (Aretej)'],t:1,e:'Glembajevski ciklus je Krležina 3. dramska faza: analitičko-realistička (1928.-1931.). Prethode ciklus legendi (1914.-1925.) i ratni ciklus (1922.-1932.).'},
  {q:'Koji je Krležin najvažniji roman?',o:['Gospoda Glembajevi (1928.)','Povratak Filipa Latinovicza (1932.)','Balade Petrice Kerempuha (1936.)','Aretej (1959.)'],t:1,e:'Povratak Filipa Latinovicza (1932.) — Krležin najvažniji roman. Ekspresionistička proza. Paralela s Leoneom: intelektualac se vraća u rodni kraj.'},
  {q:'Koji je Krležin najpoznatiji pjesnički zbornik?',o:['Zastave','Balade Petrice Kerempuha (1936., kajkavski)','Cvjetovi zla','Pan (1917.)'],t:1,e:'Balade Petrice Kerempuha (1936.) — vrhunac Krležine poezije. Pisano kajkavskim dijalektom. Petrica Kerempuh kao narodski lik.'},
  {q:'Kojoj instituciji je Krleža bio direktor od 1950. do smrti?',o:['Maticom hrvatskom','Leksikografski zavod u Zagrebu (danas LZ MK)','Hrvatskom narodnom kazalištu','Sveučilište u Zagrebu'],t:1,e:'Leksikografski zavod u Zagrebu (imenovan 1950.). Vodio Enciklopediju Jugoslavije i Hrvatsku enciklopediju. Zavod se danas zove po njemu — LZ Miroslav Krleža.'},
];

const CP_ITEMS=[
  'Znam godinu objave (1928., DHK) i praizvedbe Glembajevih (14.II.1929., HNK).',
  'Razumijem strukturu drame — 3 čina s klasičnim jedinstvom mjesta/vremena/radnje (palača Glembay, jedna ljetna noć 1913., 1-5 ujutro).',
  'Razumijem žanr — psihološko-socijalna drama, komorna, građanska tragedija, uzor Ibsen (skandinavska dramaturgija).',
  'Mogu opisati glavne likove: Leone, Ignjat, Charlotte Castelli, Angelika, Fabriczy, Silberbrandt, Altmann, Puba.',
  'Mogu prepričati sva tri čina i sukobe: Leone vs. društvo (I), Leone vs. otac Ignjat + infarkt (II), Leone vs. barunica + ubojstvo škarama (III).',
  'Razumijem Barboczyjevu legendu i njezinu funkciju (proročanstvo u I. činu koje se u III. činu ostvaruje).',
  'Znam 6 glavnih tema: propast patricijske obitelji, borba protiv „Glembaya u sebi", privid/istina, austrougarsko društvo, umjetnost/materijalizam, ženska pozicija.',
  'Razumijem 3 razine čitanja: konkretnu (drama obitelji), socijalnu (propast hrv. buržoazije), univerzalnu (borba protiv nasljedstva).',
  'Znam Krležin opus — 4 dramske faze (ciklus legendi, ratni, Glembajevski, Aretej) i ključne romane (Filip Latinovicz, Na rubu pameti, Zastave) + Balade Petrice Kerempuha (kajkavski).',
  'Mogu usporediti Glembajeve s Ibsenovim Duhovima, Stipančićima (D16), Kiklopom (D22), Dostojevskim (D07) — relevantno za školski esej.',
];

const DIAG0_Q=[
  {q:'Tko je autor drame Gospoda Glembajevi?',o:['August Šenoa','Antun Gustav Matoš','Miroslav Krleža','Ranko Marinković'],t:2},
  {q:'Kada je drama Gospoda Glembajevi praizvedena?',o:['1873. u Vijencu','1913. u Beču','14. veljače 1929. u zagrebačkom HNK','1965. u dramskom kazalištu'],t:2},
  {q:'Koji je žanr Gospodi Glembajevih?',o:['Roman u 5 svezaka','Pripovijetka','Drama u 3 čina (psihološko-socijalna)','Spjev u stihu'],t:2},
  {q:'Tko je glavni lik?',o:['Ignjat Glembay','Barunica Castelli','Leone Glembay','Sestra Angelika'],t:2},
  {q:'Što je Krležin uzor za dramu?',o:['Shakespeare','Henrik Ibsen (skandinavska dramaturgija)','Sofoklo','Molière'],t:1}
];
const TAB_NAMES=['Teorija','3 čina','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];
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
    msg='<strong>Odlično!</strong> Osnove H16 imaš savladane. Preporučujem Esej alat — tamo su 5 gotovih teza za školski esej i model esej (Glembajevi su ispitno djelo 2026).';
    btnTxt='✍ Esej alat →'; btnTab=2;
  } else if(pct>=60){
    msg='<strong>Dobro!</strong> Nekoliko rupa postoji — provjeri 3 čina drame za detalje o svakom činu i interpretaciji.';
    btnTxt='🎭 3 čina drame →'; btnTab=1;
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
try{citStars=JSON.parse(localStorage.getItem('mt.hrv.h16.cit_stars')||'{}')}catch(e){}
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
  try{localStorage.setItem('mt.hrv.h16.cit_stars',JSON.stringify(citStars))}catch(e){}
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
    out.innerHTML = '<div class="box-warn" style="margin-top:10px"><div class="bw-body"><div class="bw-txt">Zalijepi ulomak iz Glembajevih prije analize.</div></div></div>';
    return;
  }
  const tl = txt.toLowerCase();
  
  // Detekcija likova
  const likovi = [];
  if(/leone|leon\\b/.test(tl)) likovi.push('Leone Glembay (glavni lik)');
  if(/ignjat|glembaj\\s+otac|otac.*glembaj/.test(tl)) likovi.push('Ignjat Glembay (otac, bankar)');
  if(/charlott|castelli|barunic|beatric/.test(tl)) likovi.push('Barunica Charlotte Castelli-Glembay (maćeha)');
  if(/angelik/.test(tl)) likovi.push('Sestra Angelika Glembay (dominikanka)');
  if(/fabriczy|titus|ujak|župan/.test(tl)) likovi.push('Titus Fabriczy (bratić, umirovljeni župan)');
  if(/silberbrandt|ispovjedn/.test(tl)) likovi.push('Dr. Silberbrandt (ispovjednik barunice)');
  if(/altmann|liječn/.test(tl)) likovi.push('Dr. Paul Altmann (liječnik)');
  if(/puba|pravni\\s+zastupnik/.test(tl)) likovi.push('Puba Fabriczy (pravni zastupnik)');
  if(/barboczy|stara\\s+barbocy/.test(tl)) likovi.push('Barboczyjeva (legenda, ne pojavljuje se)');
  if(/alis|ivan|brat\\s+leonea/.test(tl)) likovi.push('Pokojni članovi (Alisa, Ivan, majka)');
  
  // Detekcija čina
  let cin = '';
  if(/portret|salon|kant|euler|barboczy|rupert|canjeg|fanika|silberbrandt.*posjet/.test(tl)) cin = 'I. čin (salon, portreti, Barboczyjeva legenda, Rupert-Canjeg, razotkrivanje Silberbrandta)';
  else if(/infarkt|sukob.*otac|prošlost.*castelli|prošlost.*barunic|alis|majka.*smrt|leone.*otac/.test(tl)) cin = 'II. čin (sukob s ocem, razotkrivanje baruničine prošlosti, infarkt Ignjata)';
  else if(/škar|stundenhotel|mrtvač|ubojstvo|bordel|cvrkut.*ptic|zaklan|kamerdin|sluga/.test(tl)) cin = 'III. čin (ubojstvo barunice škarama, Angelika kao lutka, „Cvrkut ptica u vrtu")';
  
  // Stilska sredstva
  const stila = [];
  if(/portret/.test(tl)) stila.push('Simbol portreta (obiteljsko prokletstvo)');
  if(/škar|britv/.test(tl)) stila.push('Simbol škara (oružje, paralela s britvom iz Prijana Lovre)');
  if(/kant|euler|logic|filozof|matemati/.test(tl)) stila.push('Aluzija (Kant, Euler, logika — intelektualni kontekst Leonea)');
  if(/privid|istin|fasad|laž/.test(tl)) stila.push('Kontrast privid/istina');
  if(/umjetn|slikar|materijaliz|bankar/.test(tl)) stila.push('Kontrast umjetnost/materijalizam');
  if(/njemački|deutsch|stundenhotel|ltd|herr|fräulein/.test(tl)) stila.push('Dvojezičnost (hrv./njem.) — autentičnost buržoazije');
  if(/ironij|sarkast|podrugiv/.test(tl)) stila.push('Ironija (Leoneove razorne replike)');
  if(/metafor|simbol/.test(tl)) stila.push('Metafora („Glembay u sebi", „pano u agoniji")');
  if(/borim\\s+se|protiv\\s+glembaj/.test(tl)) stila.push('Leoneova ključna izjava („borba protiv Glembaya u sebi")');
  
  // 3 razine
  const razine = [];
  if(/leone|ignjat|barunic|angelik|čin|ubojstv|sukob/.test(tl)) razine.push('Konkretna (drama obitelji)');
  if(/klas|buržoa|aristokrac|patrick|austro|građan|novac|banka|eksploatac/.test(tl)) razine.push('Socijalna (propast hrv. patricijske buržoazije)');
  if(/nasljedstv|biolog|borb|ideal|tragič|sloboda|determin/.test(tl)) razine.push('Univerzalna (borba protiv nasljedstva, filozofska dimenzija)');
  
  // Render
  let h = '<div class="box-int" style="margin-top:10px"><div class="box-int-lbl">📊 Rezultat analize ulomka</div><div class="box-int-txt">';
  h += '<p><b>🎭 Vjerojatni čin:</b> ' + (cin || '<em>Nedovoljno signala — provjeri kontekst</em>') + '</p>';
  h += '<p><b>🎭 Likovi u ulomku:</b> ' + (likovi.length ? likovi.join(', ') : '<em>Nisu eksplicitno imenovani</em>') + '</p>';
  h += '<p><b>✒ Stilska sredstva:</b> ' + (stila.length ? '<br>• ' + stila.join('<br>• ') : '<em>Nisu prepoznata bazična sredstva</em>') + '</p>';
  h += '<p><b>📊 Razine čitanja:</b> ' + (razine.length ? '<br>• ' + razine.join('<br>• ') : '<em>Nema eksplicitnih oznaka</em>') + '</p>';
  h += '<p style="margin-top:10px;padding-top:10px;border-top:1px dashed var(--bd)"><b>🎯 Esejska primjena:</b> Za analizu ovog ulomka: (1) identificiraj iz kojeg je čina, (2) opiši Krležinu tehniku (psihološki dijalog, opširne didaskalije, retroaktivno razotkrivanje), (3) izdvoj 2-3 stilska sredstva s konkretnim primjerom, (4) poveži na barem dvije razine (konkretna/socijalna/univerzalna), (5) vrati se na Leoneovu središnju temu „borbe protiv Glembaya u sebi" i pokaži kako ulomak sudjeluje u toj tragičnoj dinamici.</p>';
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
  try{localStorage.setItem('mt.hrv.h16.wc_text',txt);}catch(e){}
}
(function(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h16.wc_text');if(sv){ta.value=sv;scannerUpdate();}}catch(e){}
})();

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
    <h3>25 pitanja · H16 Krleža · Glembajevi</h3>
    <p>Pitanja pokrivaju cijelo poglavlje H16: Miroslav Krleža, Gospoda Glembajevi, hrv. moderna, Krležin opus, 3 čina drame. <strong>Glembajevi su ispitno djelo 2026.</strong> Na kraju dobivaš ocjenu i objašnjenja.</p>
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
  if(pct>=90){grade='ODLIČAN';msg='Spreman/na si za maturu iz H16.';ico='🏆';}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno znanje. Provjeri pogreške u Pojmovniku.';ico='💪';}
  else if(pct>=60){grade='DOBAR';msg='Ponoviti: 3 čina drame i Krležin opus (Glembajevski ciklus, klasična jedinstva, Ibsen).';ico='📚';}
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
try{const s=localStorage.getItem('mt.hrv.h16.cp');if(s)CP_STATE=JSON.parse(s);}catch(e){}

const CP_HINTS=['Tab 0','Tab 0','Tab 4','Tab 0','Tab 1','Tab 1','Tab 0','Tab 2','Tab 4','Tab 2'];
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
  try{localStorage.setItem('mt.hrv.h16.cp',JSON.stringify(CP_STATE));}catch(e){}
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
    else if(pct>=40)msg='<strong>Napredak!</strong> Nastavak: provjeri 3 čina i Esej alat (5 gotovih teza za esej) za neoznačene stavke.';
    else msg='Još je posla. Počni s Teorijom (Tab 0) i prođi sve sekcije.';
    sumTxt.innerHTML=msg;
  }
}
function cpReset(){
  CP_STATE={done:{}};
  try{localStorage.removeItem('mt.hrv.h16.cp');}catch(e){}
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
try{TAB_DONE=JSON.parse(localStorage.getItem('mt.hrv.h16.tab_done')||'{}')}catch(e){}

function markTab(n){
  TAB_DONE[n]=true;
  try{localStorage.setItem('mt.hrv.h16.tab_done',JSON.stringify(TAB_DONE))}catch(e){}
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
  '💡 <strong>Tab 0 tip:</strong> Povezuj djelo s krizom buržoazije — Glembajevi = trula klasa, Leone = nemoguć pobunjenik, ubojstvo = krv pobjeđuje volju.',
  '💡 <strong>Tab 1 tip:</strong> Klikni na čin drame za detalje radnje, sukoba, likova i esejskih signala.',
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
    const names={H11:'H11 · Stari hrv. pisci',H12:'H12 · Marulić · Judita',H13:'H13 · Gundulić · Dubravka',H14:'H14 · Preporod · Mažuranić',H15:'H15 · Šenoa · Prijan Lovro'};
    const el=document.getElementById('from-banner');
    const txt=document.getElementById('from-txt');
    if(el&&txt){
      txt.textContent='📎 Nastaviš učenje iz '+(names[from]||from)+' → H16 · Krleža · Glembajevi';
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h16.kviz_hist')||'[]');
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h16.kviz_hist')||'[]');
    hist.push({score,total,date:new Date().toISOString()});
    localStorage.setItem('mt.hrv.h16.kviz_hist',JSON.stringify(hist.slice(-10)));
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
  // EASY — Likovi Glembajevih
  easy:[
    {a:'Leone Glembay',b:'Glavni lik — slikar, dr. filozofije, 11 god. u Europi'},
    {a:'Ignjat Glembay',b:'Otac Leonea — bankar, direktor Glembay Ltd. (umre od infarkta)'},
    {a:'Barunica Charlotte Castelli',b:'Ignjatova druga žena (maćeha) — bivša zabavljačica'},
    {a:'Sestra Angelika',b:'Dominikanka, udovica brata Ivana — Leoneova platonska ljubav'},
  ],
  // MEDIUM — Stilska sredstva + tehnike s primjerima
  medium:[
    {a:'Klasično jedinstvo',b:'Palača Glembay, jedna noć 1913., 1-5 ujutro, kontinuirana radnja'},
    {a:'Retroaktivno razotkrivanje',b:'U II. činu baruničina prošlost (zabavljačica, preljubnica) polako izlazi na vidjelo'},
    {a:'Off-stage nasilje',b:'Ubojstvo barunice u III. činu — samo zvukovi (lupanje vrata, staklo)'},
    {a:'Simbol portreta',b:'Obiteljski portreti na zidovima salona = glembajevsko prokletstvo materijalizirano'},
    {a:'Kontrast privid/istina',b:'Bogatstvo, ljepota, moć ↔ lažljivci, kradljivci, ubojice'},
    {a:'Dvojezičnost hrv./njem.',b:'„Stundenhotel", „Ltd.", njemačke fraze — govor zagrebačke buržoazije'},
  ],
  // HARD — Krležin opus + moderna kontekst
  hard:[
    {a:'1928.',b:'Objava Glembajevih u nakladi DHK'},
    {a:'14. II. 1929.',b:'Praizvedba Glembajevih u zagrebačkom HNK (režija A. Verli)'},
    {a:'Glembajevski ciklus',b:'3 drame (Glembajevi, U agoniji, Leda) + 11 novela'},
    {a:'Henrik Ibsen',b:'Norveški dramatičar — uzor Krleži za Glembajeve (skandinavska škola)'},
    {a:'Povratak Filipa Latinovicza',b:'Krležin roman iz 1932. — intelektualac se vraća u rodni kraj'},
    {a:'Balade Petrice Kerempuha',b:'Krležina pjesnička zbirka (1936.) — napisana kajkavskim dijalektom'},
    {a:'Leksikografski zavod',b:'Zagrebačka institucija — Krleža direktor od 1950. do smrti (zove se po njemu)'},
    {a:'Vjenceslav Novak',b:'Posljednji Stipančići (1899., D16) — prethodnik Glembajevih, ispitno djelo 2026'},
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
    easy:'🎭 Likovi Glembajevih',
    medium:'✒ Stilska sredstva + dramske tehnike',
    hard:'🏛 Krležin opus + moderna (napredno)'
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
  {t:'Drama u 3 čina',d:'Klasična dramska struktura. Glembajevi: ekspozicija (I. čin) → kulminacija (II. čin, infarkt) → rasplet (III. čin, ubojstvo).',kat:'drama'},
  {t:'Psihološko-socijalna drama',d:'Krležina klasifikacija Glembajevih. Spaja psihološku analizu likova i socijalnu kritiku klase.',kat:'drama'},
  {t:'Glembajevski ciklus',d:'3 drame + 11 novela (1928.-1931.): Gospoda Glembajevi, U agoniji, Leda + novele. Krležin dramski vrhunac.',kat:'drama'},
  {t:'Klasično jedinstvo mjesta/vremena/radnje',d:'Aristotelov ideal. Glembajevi: palača Glembay, jedna ljetna noć 1913., 1-5 ujutro, kontinuirana radnja.',kat:'tehnika'},
  {t:'Retroaktivno razotkrivanje',d:'Ibsenova tehnika — prošlost polako izlazi na vidjelo kroz dijalog. U II. činu: baruničina prošlost (zabavljačica, preljubnica).',kat:'tehnika'},
  {t:'Off-stage nasilje',d:'Grčka tehnika — nasilje se događa izvan scene. Ubojstvo barunice u III. činu: samo zvukovi (lupanje vrata, staklo).',kat:'tehnika'},
  {t:'Opširne didaskalije',d:'Krležine scenske upute su opsegom kao roman. Minucionon opisuje kostime, mimiku, scenografiju, svjetlo.',kat:'tehnika'},
  {t:'Leone Glembay',d:'Glavni lik. 38 god., slikar, dr. filozofije. 11 godina u Europi. „Borim se protiv Glembaya u sebi". Završi kao ubojica.',kat:'likovi'},
  {t:'Ignjat Glembay',d:'Otac Leonea. 69 god., bankar, direktor Glembay Ltd. Umire od infarkta u II. činu kad shvati istinu o ženi.',kat:'likovi'},
  {t:'Barunica Charlotte Castelli',d:'Ignjatova druga žena (maćeha), 45 god. Bivša zabavljačica, preljubnica sa Silberbrandtom. Leone je ubije škarama u III. činu.',kat:'likovi'},
  {t:'Sestra Angelika Glembay',d:'Dominikanka, udovica brata Ivana (29 god.). Leoneova platonska ljubav. Na kraju III. čina stoji „kao lutka".',kat:'likovi'},
  {t:'Stara Barboczyjeva',d:'Ne pojavljuje se — samo kao legenda. „Svi Glembajevi su prokleti — ubojice i varalice!" Proročanstvo koje se u III. činu ostvaruje.',kat:'likovi'},
  {t:'Simbol portreta',d:'Portreti Glembajevih na zidovima salona = obiteljsko prokletstvo materijalizirano. U I. činu likovi razgovaraju o njima.',kat:'stil'},
  {t:'Simbol škara',d:'Škare koje Leone uzima sa stola u III. činu = oružje. Svakodnevni predmet postaje smrtonosan. Paralela s britvom iz Prijana Lovre.',kat:'stil'},
  {t:'Kontrast privid/istina',d:'Glavni kontrast drame. Privid: bogatstvo, ljepota, moć. Istina: lažljivci, kradljivci, ubojice, preljubnici.',kat:'stil'},
  {t:'Dvojezičnost (hrv./njem.)',d:'Glembajevi spontano prelaze u njemački („Stundenhotel", njem. fraze). Autentičan govor zagrebačke buržoazije prije 1. svj. rata.',kat:'stil'},
  {t:'Hrvatska moderna',d:'Književni pokret 1895.-1914. Matoš, Vidrić, Nazor. Krleža formalno nije modernist, nego avangarda nakon moderne.',kat:'moderna'},
  {t:'Miroslav Krleža',d:'1893.-1981. Najznačajniji hrv. književnik 20. st. Opus 40+ svezaka. Direktor Leksikografskog zavoda od 1950. (zove se po njemu).',kat:'krleza'},
  {t:'Henrik Ibsen',d:'1828.-1906. Norveški dramatičar. Uzor Krleži za Glembajeve. Skandinavska škola: retroaktivnost, psihološka analiza.',kat:'autori'},
  {t:'Povratak Filipa Latinovicza',d:'Krležin roman (1932.). Ekspresionistička proza. Intelektualac se vraća u rodni kraj — paralela s Leoneom.',kat:'krleza'},
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
  {q: 'Znam godinu nastanka i praizvedbe Glembajevih (1928. DHK, praizvedba HNK 14.II.1929.).', k: 'kontekst'},
  {q: 'Mogu opisati strukturu drame — 3 čina, klasično jedinstvo mjesta/vremena/radnje, jedna noć 1913.', k: 'struktura'},
  {q: 'Razumijem žanr — psihološko-socijalna drama, građanska tragedija, Ibsen kao uzor.', k: 'žanr'},
  {q: 'Mogu opisati glavne likove: Leone, Ignjat, barunica Castelli, Angelika, Fabriczy, Silberbrandt.', k: 'likovi'},
  {q: 'Razumijem Krležin opus — 4 dramske faze, Glembajevski ciklus, romani (Filip Latinovicz, Na rubu pameti, Zastave).', k: 'kontekst'}
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
  if (pct >= 100) { msg = '🏆 Odlično! Spreman/na si za sve što NCVVO može pitati iz H16 — uključujući školski esej o Glembajevima.'; color = 'var(--green)'; }
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
  'Znam godinu objave (1928.) i praizvedbe (14.II.1929. HNK) Glembajevih.',
  'Razumijem strukturu drame — 3 čina, klasično jedinstvo mjesta/vremena/radnje, jedna noć 1913.',
  'Razumijem žanr — psihološko-socijalna drama, komorna, građanska tragedija, uzor Ibsen.',
  'Mogu opisati glavne likove: Leone, Ignjat, Charlotte, Angelika, Fabriczy, Silberbrandt, Altmann, Puba.',
  'Mogu prepričati tri čina i sukobe: Leone-društvo, Leone-otac (infarkt), Leone-barunica (škare).',
  'Razumijem Barboczyjevu legendu i njezinu funkciju u drami (proročanstvo koje se ostvaruje).',
  'Znam 6 glavnih tema: propast obitelji, borba s nasljedstvom, privid/istina, austrougarstvo, umjetnost/materijalizam, ženska pozicija.',
  'Razumijem 3 razine čitanja: konkretnu (drama obitelji), socijalnu (propast klase), univerzalnu (borba s nasljedstvom).',
  'Znam Krležin opus: 4 dramske faze (ciklus legendi, ratni ciklus, Glembajevski, Aretej) i ključne romane (Filip Latinovicz, Na rubu pameti, Zastave).',
  'Mogu usporediti Glembajeve s Ibsenovim Duhovima, Stipančićima, Kiklopom, i drugim esejskim djelima 2026.',
];
let clDone = {};
try { clDone = JSON.parse(localStorage.getItem('mt.hrv.h16.cl') || '{}'); } catch(e) {}

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
  try { localStorage.setItem('mt.hrv.h16.cl', JSON.stringify(clDone)); } catch(e) {}
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
  try{localStorage.setItem('mt.hrv.h16.cp_writer',txt);}catch(e){}
  // Count literary terms
  const tl=txt.toLowerCase();
  const terms=['drama','tri čina','3 čina','jedinstvo','klasičn','ibsen','retroaktivn','off-stage','didaskal','psihološk','komorn','građansk','tragedij','glembaj','glembay','leone','ignjat','charlott','castelli','barunic','angelik','fabriczy','silberbrandt','altmann','puba','barboczy','škar','infarkt','1928','1929','hnk','modern','ekspresion','avangarda','krleža','ciklus','legendi','ratni','latinovicz','na rubu pameti','balade','kerempuh','zastave','leksikografsk','agonij','dekorativ','pano','privid','istin','glembajev u sebi','borim se'];
  const found=[];
  if(/drama|tri čin|3 čin|jedinstvo|klasičn|ibsen|retroaktivn|off-stag|didaskal|komorn|tehnik/.test(tl))found.push('✅ Žanr/tehnika drame');
  if(/leone|ignjat|charlott|castelli|barunic|angelik|fabriczy|silberbrandt|altmann|puba|barboczy|glembay/.test(tl))found.push('✅ Lik');
  if(/1928|1929|hnk|dhk|modern|ekspresion|avangard|krleža|1913|ciklus|glembajevski/.test(tl))found.push('✅ Kontekst');
  if(/privid|istin|umjetn.*material|razum.*instinkt|klas|buržoa|patricij/.test(tl))found.push('✅ Kontrast/tema');
  if(/simbol|ironij|metafor|portret|škar|dvojezi|aluzij|kant|euler/.test(tl))found.push('✅ Stilsko sredstvo');
  if(/agonij|dekorativ|pano|propast|borim.*sebi|glembaj.*sebi|nasljedstv|biolog|tragedij|infarkt|ubojstv/.test(tl))found.push('✅ Tema/ideja');
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
  try{const sv=localStorage.getItem('mt.hrv.h16.cp_writer');if(sv){ta.value=sv;cpWriterUpdate();}}catch(e){}
})();

/* ═══════════════════════════════════
   CITATNIK v2 (H11 featured-quote pattern)
═══════════════════════════════════ */
const CIT_DATA2 = [
  // === I. ČIN (8) ===
  {cat:'cin1',napamet:true,
   text:'Od prvog dana, kad sam počeo razmišljati, ne radim drugo nego se borim protiv Glembaya u sebi.',
   meta:'— Leone Glembay, I. čin · Ključna izjava drame · Tema borbe protiv biološkog nasljedstva'},
  {cat:'cin1',napamet:true,
   text:'Ti si jedino u što vjerujem u glembajevskoj kući.',
   meta:'— Leone Angeliki, I. čin · Erotska napetost · Angelika kao moralna referentna točka'},
  {cat:'cin1',
   text:'Glembajevi su varalice i ubojice — kako je rekla stara Barboczyjeva.',
   meta:'— Leone Fabriczyjum, I. čin · Uvođenje Barboczyjeve legende'},
  {cat:'cin1',
   text:'Po toj legendi prvi je Glembay stekao svoje bogatstvo tako što je opljačkao kranjskog zlatara dok je nosio zlato u varaždinsku crkvu.',
   meta:'— Fabriczy prepričava Barboczyjevu legendu, I. čin · Mitološki izvor prokletstva'},
  {cat:'cin1',
   text:'Od tada nad Glembajevima visi prokletstvo zbog kojeg su svi bolesni, nestabilni, skloni kriminalu i prevari, a ne ustručavaju se ni ubojstva.',
   meta:'— Legenda o Glembajevima, I. čin · Nasljedstvo zločina kao obiteljski obrazac'},
  {cat:'cin1',
   text:'Samo u posljednjoj generaciji ubili su se Leonov brat, majka i sestra.',
   meta:'— Leone o obiteljskim smrtima, I. čin · Niz samoubojstava kao glembajevski obrazac'},
  {cat:'cin1',
   text:'Budite diskretniji kad u noći primate Castelličine ljubavne posjete.',
   meta:'— Leone Silberbrandtu, I. čin · Kraj I. čina · Ignjat to čuje, sjeme II. čina'},
  {cat:'cin1',
   text:'U razgovor ispunjen rafiniranim opservacijama miješaju se bratić starog Glembaya, negdašnji veliki župan Fabriczy, ispovjednik barunice Charlotte Castelli-Glembay, Alojzije Silberbrandt.',
   meta:'— Iz didaskalije I. čina · Strukturni opis početne scene'},

  // === II. ČIN (6) ===
  {cat:'cin2',
   text:'Leone mu u 2. činu predbacuje Alisinu smrt; ovaj pokušava zanijekati.',
   meta:'— II. čin · Razotkrivanje baruničine uloge u smrti Leonine sestre Alise'},
  {cat:'cin2',
   text:'Psihički uzdrman činjenicom što žena vara njegova oca sa silnim muškarcima i nostalgijom za majkom.',
   meta:'— Psihološka karakterizacija Leonea u II. činu · Višestruke traume'},
  {cat:'cin2',
   text:'Leone se sukobljava s liječnikom Altmannom i Silberbrandtom i otkriva odbojnost spram prava koje njihova zanimanja polažu na ljudske duše i tijela.',
   meta:'— II. čin · Kritika institucionalnih autoriteta (medicina + religija)'},
  {cat:'cin2',
   text:'Slučaj Rupert-Canjeg također dramu oblikuje u socijalnom smislu. Glembajevi sebe vide iznad gradskih siromaha i običnog puka.',
   meta:'— Socijalna dimenzija drame · Aristokratska arogancija'},
  {cat:'cin2',
   text:'Nažalost, čitalac ubrzo shvata da je Leon ipak bio u pravu... ali sada je kasno, jer je stari Glembajev doživio infarkt i umro.',
   meta:'— II. čin, vrhunac · Ignjatova smrt od psihosomatskog šoka'},
  {cat:'cin2',
   text:'Drugi čin intenzivira konzekvence tako ocrtanih odnosa u obliku koji podsjeća na komornu dramu.',
   meta:'— Krležijana, interpretacija · II. čin kao komorna drama'},

  // === III. ČIN (7) ===
  {cat:'cin3',napamet:true,
   text:'Cvrkut ptica u vrtu.',
   meta:'— Didaskalija, završetak III. čina · Metafizička ravnodušnost prirode · Ironični finale'},
  {cat:'cin3',napamet:true,
   text:'Dobro je rekla stara Barboczyjeva — svi su Glembajevi ubojice i varalice!',
   meta:'— Barunica Castelli Leoneu, III. čin · Barboczyjeva legenda se zatvara · Uvod u ubojstvo'},
  {cat:'cin3',napamet:true,
   text:'Sve što je ona godinama krala od Glembaya, ja sam to uzeo natrag.',
   meta:'— Leone barunici, III. čin · Konflikt za nasljedstvo · Priprema ubojstva'},
  {cat:'cin3',
   text:'Neka izvole otići u neki Stundenhotel.',
   meta:'— Barunica Leoneu, III. čin · Baruničina dekadencija · Dvojezičnost (njem. „Stundenhotel")'},
  {cat:'cin3',
   text:'Angelika želi zadržati Leonea, on uzima škare sa stola, ali barunica instinktivno poleti kroz vrata van.',
   meta:'— Didaskalija III. čina · Trenutak prije ubojstva · Škare kao simbol'},
  {cat:'cin3',
   text:'Sluga reče da je gospon doktor zaklao barunicu te istrči natrag.',
   meta:'— Didaskalija III. čina · Off-stage ubojstvo (grčka tehnika) · Objava smrti'},
  {cat:'cin3',
   text:'Angelika, kao lutka, stoji nepomično.',
   meta:'— Didaskalija III. čina · Paraliza svjedoka · Simbolični tableau'},

  // === LEONE — karakterizacija (4) ===
  {cat:'leone',
   text:'Leone Glembay – glavni lik drame; intelektualac i poznavaoc umjetnosti i doktor filozofije koji svoje predke smatra upravo suprotnim od obrazovanog.',
   meta:'— Karakterizacija Leonea · Intelektualac protiv vlastite klase'},
  {cat:'leone',
   text:'Obučen u frak te uvijek imao lulu u ustima; srednjovječni prosijedi muškarac rijetke bijele brade bez brkova; fizički nemiran što nam već pokazuje njegovu labilnost, neurotičnost i uznemirenost.',
   meta:'— Vanjski portret Leonea · Fizička manifestacija unutarnje nestabilnosti'},
  {cat:'leone',
   text:'Ta borba protiv Glembaya u sebi borba je protiv vlastitog biološkog naslijeđa, protiv Glembayevske krvi koje je Leone toliko svjestan.',
   meta:'— Interpretacija Leoneove tragične dinamike · Svijest koja ne spašava'},
  {cat:'leone',
   text:'U središtu drame je Leone Glembay, kompleksan i senzibilan lik, izdvojen od svoje obitelji, koji se cijelog života pokušava riješiti onoga „glembajevskog" u sebi.',
   meta:'— Lektire.hr · Sinteza karakterizacije Leonea · Izoliranost + pokušaj bijega'},

  // === TEME I IDEJE (6) ===
  {cat:'tema',napamet:true,
   text:'Svi su Glembajevi prokleti — ubojice i varalice.',
   meta:'— Stara Barboczyjeva (legenda) · Proročanstvo koje se u III. činu ostvaruje · Tematski temelj drame'},
  {cat:'tema',
   text:'Privid — bogatstvo, ljepota, sreća, moć · Istina — lažljivci, kradljivci, ubojice, preljubnici.',
   meta:'— Tematska osa Glembajevih · Glavni kontrast drame'},
  {cat:'tema',
   text:'Rasipništvo, ludilo, ubojstva i samoubojstva rješenja su svih glembajevskih kriza.',
   meta:'— Sinteza obiteljskog obrasca · Patološki načini rješavanja problema'},
  {cat:'tema',
   text:'Tema drame je propast bogate i ugledne aristokratske obitelji Glembaj.',
   meta:'— Osnovna tematska formulacija · Središte drame'},
  {cat:'tema',
   text:'Nedostatak savjesti, kao najveća emocija koja nedostaje Glembajevima, duboko tišti Leonea.',
   meta:'— Leoneova etička dilema · Moralni manjak kao klasni obrazac'},
  {cat:'tema',
   text:'Krvavo bogatstvo obitelji Glembaj prikuplja se kroz generacije moralnih kompromisa, korupcije i eksploatacije radnika.',
   meta:'— Socijalna dimenzija · Marksistička dimenzija Krležine kritike'},

  // === KRLEŽA O DJELU (4) ===
  {cat:'krleza',napamet:true,
   text:'Glembajevi su neka vrsta dekorativnog panoa naslikanog po motivu jedne građanske civilizacije na odlasku u agoniju, i imaju karakter poetskog lirskog poniranja u sve elemente takozvane psihološke drame.',
   meta:'— Krleža o vlastitom djelu · Autorova samointerpretacija'},
  {cat:'krleza',napamet:true,
   text:'Glembajevi su u hrvatsku književnost došli 40 godina prekasno.',
   meta:'— Krleža o vlastitom djelu · Povratak klasičnoj formi u avangardnom vremenu'},
  {cat:'krleza',
   text:'Krleži je uzor bio Henrik Ibsen zbog čega je ova drama pisana po uzoru nordijske škole 90-ih godina te je ibsenski konkretna.',
   meta:'— Kritička interpretacija · Ibsen kao uzor Krležine dramske forme'},
  {cat:'krleza',
   text:'Ciklus je sam po sebi realističko-analitički, a drama kvalitativna.',
   meta:'— Krležijana, klasifikacija · Glembajevski ciklus kao Krležina 3. dramska faza'},

  // === KONTEKST (5) ===
  {cat:'kontekst',
   text:'Gospoda Glembajevi. Drama u tri čina iz života jedne agramerske patricijske obitelji.',
   meta:'— Puni naslov + podnaslov drame (1928., DHK) · Autorsko samopoimanje'},
  {cat:'kontekst',
   text:'Zbiva se jedne noći, kasnog ljeta, godinu dana prije Rata 1914-18, u kući imućne bankarske obitelji Glembay.',
   meta:'— Didaskalija mjesta i vremena · Ključne činjenice scene'},
  {cat:'kontekst',
   text:'Prvi put izvedena 14. II. 1929., u zagrebačkom HNK, u režiji A. Verlija.',
   meta:'— Bibliografska činjenica · Praizvedba Glembajevih'},
  {cat:'kontekst',
   text:'Razgovor se djelomično vodi na njemačkome - uobičajenom načinu izražavanja visokoga zagrebačkog društva prije I. svj. rata.',
   meta:'— Krležijana o dvojezičnosti drame · Autentičnost austrougarske buržoazije'},
  {cat:'kontekst',
   text:'Ciklus drama o Glembajevima (Gospoda Glembajevi 1928., U agoniji 1928., Leda 1931.) zajedno s proznim fragmentima novelističkog oblika o nekim junacima te dramske trilogije najsnažnije su Krležino dramsko ostvarenje.',
   meta:'— Glembajevski ciklus · 3 drame + 11 novela · Krležin vrhunac'},
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
      const stars = JSON.parse(localStorage.getItem('mt.hrv.h16.cit_stars')||'[]');
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
  // === DRAMA / ŽANR (10) ===
  {kat:'drama',term:'Drama',def:'<strong>Književni rod</strong> koji prikazuje radnju kroz dijalog i scenski prikaz. Glembajevi = drama u 3 čina. Razlikuje se od epike (pripovijedanje) i lirike (izraz osjećaja).'},
  {kat:'drama',term:'Drama u 3 čina',def:'<strong>Klasična dramska struktura</strong> — ekspozicija/zaplet (I. čin), kulminacija (II. čin), rasplet (III. čin). Glembajevi: Leone-društvo → Leone-otac → Leone-barunica.'},
  {kat:'drama',term:'Psihološka drama',def:'<strong>Tip drame</strong> gdje je težište na unutarnjim stanjima likova, ne na vanjskoj akciji. Glembajevi = psihološka drama — sukob se zbiva <em>u svakom liku posebno</em>, ne samo između njih.'},
  {kat:'drama',term:'Psihološko-socijalna drama',def:'<strong>Krležina klasifikacija</strong> — Glembajevi spajaju <em>psihološku analizu</em> (unutarnji sukobi) i <em>socijalnu kritiku</em> (propast klase). Dva sloja istodobno.'},
  {kat:'drama',term:'Komorna drama',def:'<strong>Drama s malim brojem likova</strong> i ograničenim prostorom. Krleža sam II. čin Glembajevih naziva „komornim" — Leone + otac + nekoliko svjedoka.'},
  {kat:'drama',term:'Građanska tragedija',def:'<strong>Žanr tragedije</strong> s likovima iz građanskog sloja (ne kraljevi/heroji kao u klasičnoj tragediji). Glembajevi = građanska tragedija — bankarska obitelj propada.'},
  {kat:'drama',term:'Kvalitativna drama',def:'<strong>Krležin termin</strong> za dramu koja se ne temelji na vanjskim zapletima, nego na <em>kvaliteti psiholoških odnosa</em>. Glembajevi = kvalitativna.'},
  {kat:'drama',term:'Analitičko-realistička faza',def:'<strong>Krležina 3. dramska faza</strong> (1928.-1931.) — Glembajevski ciklus. Povratak klasičnoj formi nakon ekspresionizma. Uzor: Ibsen.'},
  {kat:'drama',term:'Glembajevski ciklus',def:'<strong>3 drame + 11 novela</strong> (1928.-1931.): <em>Gospoda Glembajevi</em> (1928.), <em>U agoniji</em> (1928.), <em>Leda</em> (1931.) + 11 novela. Krležin vrhunac dramaturgije.'},
  {kat:'drama',term:'Didaskalija',def:'<strong>Scenska uputa</strong> u drami — opis scene, kostima, mimike, pokreta. Krleža piše <em>opširne didaskalije</em> (romansijerska razrada) — svaki čin ima minuciozan scenski opis.'},

  // === DRAMSKE TEHNIKE (10) ===
  {kat:'tehnika',term:'Klasično jedinstvo mjesta',def:'<strong>Sva radnja na jednom mjestu</strong> — Aristotelov ideal. Glembajevi: cijela drama u palači Glembay u Zagrebu (salon).'},
  {kat:'tehnika',term:'Klasično jedinstvo vremena',def:'<strong>Radnja u ograničenom vremenu</strong> — klasično u jednom danu. Glembajevi: <em>jedna ljetna noć 1913., 1-5 ujutro</em>. Sažetost = intenzitet.'},
  {kat:'tehnika',term:'Klasično jedinstvo radnje',def:'<strong>Jedna središnja radnja</strong> bez sporednih linija. Glembajevi: Leoneov povratak → sukobi → dvije smrti → rasplet. Kontinuirana kronologija.'},
  {kat:'tehnika',term:'Psihološki dijalog',def:'<strong>Razgovor koji otkriva unutrašnjost likova.</strong> Krležini dijalozi nisu razmjena informacija nego <em>oružja u sukobu</em>. Podtekst važniji od teksta.'},
  {kat:'tehnika',term:'Opširna replika',def:'<strong>Duga govorna jedinica lika</strong> — esejska refleksija usred drame. Leoneove replike u II. činu su pravi eseji o filozofiji, moralu, obitelji.'},
  {kat:'tehnika',term:'Retroaktivno razotkrivanje',def:'<strong>Ibsenova tehnika</strong> — prošlost polako izlazi na vidjelo kroz dijalog. Glembajevi: baruničina prošlost (zabavljačica, preljubnica) otkriva se u II. činu.'},
  {kat:'tehnika',term:'Ibsenova dramaturgija',def:'<strong>Skandinavska škola 90-ih godina 19. st.</strong> Obilježja: retroaktivnost, psihološka analiza, tragični kraj kroz spoznaju. Krleža eksplicitno uzima Ibsena za uzor.'},
  {kat:'tehnika',term:'Off-stage nasilje',def:'<strong>Nasilje se događa izvan scene</strong> — grčka tehnika. Ubojstvo barunice u III. činu je off-stage: samo zvukovi (lupanje vrata, staklo, povici).'},
  {kat:'tehnika',term:'Podtekst',def:'<strong>Ono što se ne kaže, ali se osjeća.</strong> Ignjat u I. činu čuje Leonin šapat — prisutan je, ali tih. Cijeli II. čin je posljedica tog podteksta.'},
  {kat:'tehnika',term:'Tableau vivant',def:'<strong>Scenska slika</strong> — zaustavljen kadar. Na kraju III. čina Angelika „stoji nepomično kao lutka" — tableau vivant koji simbolizira paralizu svjedoka.'},

  // === STILSKA SREDSTVA (10) ===
  {kat:'stil',term:'Simbol',def:'<strong>Konkretni element s prenesenim značenjem.</strong> Glembajevi: <em>portreti</em> = obiteljsko prokletstvo, <em>škare</em> = oružje, <em>noć</em> = moralni mrak, <em>zlatar</em> = izvorni grijeh.'},
  {kat:'stil',term:'Metafora',def:'<strong>Preneseno značenje.</strong> „Borim se protiv Glembaya u sebi" (Leone). „Dekorativni pano civilizacije u agoniji" (Krleža o djelu). Često sintetska.'},
  {kat:'stil',term:'Ironija',def:'<strong>Govori jedno, misli drugo.</strong> Leone u razgovoru s Fabriczyjem (hvali glembajevske dobročinitelje, a razotkriva ih kao ubojice). „Cvrkut ptica" kao finalno kontrapuntna ironija.'},
  {kat:'stil',term:'Kontrast',def:'<strong>Suprotstavljanje.</strong> Glavni: <em>privid ↔ istina</em>. Sporedni: umjetnost ↔ materijalizam, razum ↔ instinkt, pojedinac ↔ klasa, život ↔ smrt, hrvatski ↔ njemački.'},
  {kat:'stil',term:'Hiperbola',def:'<strong>Pretjerivanje.</strong> Leoneove optužbe u II. činu, baruničini izljevi u III. činu. Dramska intenzivnost kroz pretjerivanje.'},
  {kat:'stil',term:'Aluzija',def:'<strong>Upućivanje na drugo djelo/osobu.</strong> Kant, Euler, logika (I. čin — Leoneov razgovor s Angelikom). Barboczyjeva (fiktivna legenda). Intelektualni kontekst lika.'},
  {kat:'stil',term:'Personifikacija',def:'<strong>Pripisivanje ljudskih osobina neživom.</strong> Portreti u Glembajevima „govore" — likovi reagiraju na njih kao na suučesnike. Animira simboliku prokletstva.'},
  {kat:'stil',term:'Dvojezičnost (hrv./njem.)',def:'<strong>Miksanje hrvatskog i njemačkog.</strong> Glembajevi spontano prelaze u njemački („Stundenhotel", „Ltd.", njemačke fraze) — autentičan govor zagrebačke buržoazije prije 1. svj. rata.'},
  {kat:'stil',term:'Leksik austrougarske buržoazije',def:'<strong>Specifičan registar govora</strong> — mješavina hrv. i njem., latinizmi, klasni izrazi („gospon doktor", „frau barunica"). Dio stilske autentičnosti.'},
  {kat:'stil',term:'Apostrofa',def:'<strong>Oslovljavanje.</strong> Manje izražena u Glembajevima — ali prisutna u dramatskim apeli (Leone Angeliki, barunica Leoneu u III. činu).'},

  // === LIKOVI (10) ===
  {kat:'likovi',term:'Leone Glembay',def:'<strong>Glavni lik.</strong> 38 god., slikar, dr. filozofije, sin Ignjata iz prvog braka. <em>11 godina u Europi.</em> Neurotičan, labilan. Ključna izjava: „borim se protiv Glembaya u sebi". Završi kao ubojica.'},
  {kat:'likovi',term:'Ignjat Glembay',def:'<strong>Glava obitelji.</strong> 69 god., bankar, direktor Glembay Ltd., Leoneov otac. Predstavlja materijalizam i patrijarhalni autoritet. <em>Umire od infarkta u 2. činu</em> kad shvati istinu o ženi.'},
  {kat:'likovi',term:'Barunica Charlotte Castelli-Glembay',def:'<strong>Ignjatova druga žena (maćeha)</strong>, 45 god. „Beatrice" u tekstu. Bivša zabavljačica, manipulativna, preljubnica (sa Silberbrandtom). Optužena za smrti u obitelji. <strong>Leone je ubije škarama.</strong>'},
  {kat:'likovi',term:'Sestra Angelika Glembay',def:'<strong>Dominikanka, udovica brata Ivana</strong>, 29 god. Rođena <em>barunica Zygtmuntowicz Beatrix</em>. Suprug Ivan se ubio. <em>Leoneova platonska ljubav.</em> Na kraju III. čina „stoji kao lutka".'},
  {kat:'likovi',term:'Titus Andronicus Fabriczy-Glembay',def:'<strong>Bratić Ignjata</strong>, 69 god., umirovljeni veliki župan. Konzervativan, štiti čast obitelji. Iznosi <em>Barboczyjevu legendu</em> u I. činu.'},
  {kat:'likovi',term:'Dr. Silberbrandt',def:'<strong>Ispovjednik barunice Castelli.</strong> Klerik. <em>Tajni ljubavnik barunice</em>. Lažljivac, hipokrit. Leone ga razotkriva u I. činu šapatom.'},
  {kat:'likovi',term:'Dr. Paul Altmann',def:'<strong>Liječnik obitelji.</strong> Predstavnik medicinske racionalnosti. Leone se sukobljava s njim (kritika prava na ljudska tijela i duše). Prisutan kada Ignjat umire.'},
  {kat:'likovi',term:'Dr. Puba Fabriczy',def:'<strong>Mladi pravni zastupnik obitelji.</strong> Brani Glembajeve od socijalističkog tiska zbog slučaja Rupert-Canjeg. Predstavlja generaciju koja nasljeđuje glembajevštinu.'},
  {kat:'likovi',term:'Alisa, Ivan, majka Leoneova',def:'<strong>Pokojni članovi</strong> — ne pojavljuju se na sceni. Alisa (sestra) — sumnjivo „samoubojstvo". Ivan (stariji brat) — samoubojstvo. Majka — samoubojstvo. Dokazi glembajevskog prokletstva.'},
  {kat:'likovi',term:'Stara Barboczyjeva',def:'<strong>Plemenitašica udana za jednog Glembaya</strong> (samo kao <em>legenda</em>, ne pojavljuje se). Izrekla legendu: „Svi Glembajevi su prokleti — ubojice i varalice". Ključni motiv cijele drame.'},

  // === MODERNA / AVANGARDA (8) ===
  {kat:'moderna',term:'Hrvatska moderna',def:'<strong>Književni pokret 1895.–1914.</strong> Simbolizam, impresionizam, secesija. Predstavnici: Matoš, Vidrić, Nazor, A. G. Matoš, Kranjčević. Nasljeđuje realizam, prethodi avangardi.'},
  {kat:'moderna',term:'Ekspresionizam',def:'<strong>Avangardni pokret</strong> ranog 20. st. — naglasak na intenzivnom, deformiranom doživljaju. Krležina rana faza (1914.-1925.) = ekspresionizam. A. B. Šimić = hrv. ekspresionistički pjesnik.'},
  {kat:'moderna',term:'Avangarda',def:'<strong>Književni pokreti 1. polovice 20. st.</strong> koji razbijaju tradicionalnu formu — ekspresionizam, futurizam, dadaizam, nadrealizam. Krleža prolazi kroz avangardu.'},
  {kat:'moderna',term:'Antun Gustav Matoš',def:'<strong>1873.–1914.</strong> Ključna figura hrv. moderne. Pjesme, novele, kritike. Urbanost, estetizam. U katalogu matura: <em>Camao, Cvijet sa raskršća, Kip domovine leta 188*</em>.'},
  {kat:'moderna',term:'Vladimir Nazor',def:'<strong>1876.–1949.</strong> Pjesnik moderne — poezija prirode, mitologije, heroizma. ispitno djelo 2026 (izbor iz poezije).'},
  {kat:'moderna',term:'Silvije Strahimir Kranjčević',def:'<strong>1865.–1908.</strong> Prelazni pjesnik između realizma i moderne. Biblijske/filozofske teme. ispitno djelo 2026 (izbor iz poezije).'},
  {kat:'moderna',term:'Antun Branko Šimić',def:'<strong>1898.–1925.</strong> Hrv. ekspresionistički pjesnik. Kratka poezija, intenzivni doživljaj. ispitno djelo 2026 (izbor iz poezije).'},
  {kat:'moderna',term:'Tin Ujević',def:'<strong>1891.–1955.</strong> Pjesnik moderne/avangarde. Simbolizam + ekspresionizam. Najveći hrv. pjesnik 20. st. ispitno djelo 2026 (izbor iz poezije).'},

  // === KRLEŽIN OPUS (9) ===
  {kat:'krleza',term:'Miroslav Krleža',def:'<strong>1893.–1981.</strong> Najznačajniji hrv. književnik 20. st. Rođen i umro u Zagrebu. Opus: 40+ svezaka. Direktor Leksikografskog zavoda od 1950.'},
  {kat:'krleza',term:'Simbolističko-ekspresionistička faza',def:'<strong>Krležina 1. dramska faza</strong> (1914.-1925.) — ciklus legendi. Drame: <em>Legenda, Maskerata, Kraljevo, Kristofor Kolumbo, Michelangelo, Adam i Eva</em>. Avangardni eksperiment.'},
  {kat:'krleza',term:'Ratni ciklus (2. faza)',def:'<strong>Krležina 2. dramska faza</strong> (1922.-1932.) — ekspresionističko-realistička. Drame: <em>Galicija</em> (U logoru), <em>Vučjak, Golgota</em>. Tema: raspad sustava, ratna trauma.'},
  {kat:'krleza',term:'Aretej',def:'<strong>Krležina posljednja drama</strong> (1959.) — „Legenda o svetoj Ancili, rajskoj ptici". Povratak avangardi nakon Glembajevskog ciklusa.'},
  {kat:'krleza',term:'Povratak Filipa Latinovicza',def:'<strong>Krležin najvažniji roman</strong> (1932.). Ekspresionistička proza. Tema: intelektualac koji se vraća u rodni kraj. Paralela s Leoneom (obojica slikari, obojica se vraćaju).'},
  {kat:'krleza',term:'Na rubu pameti',def:'<strong>Krležin roman</strong> (1938.). Anonimni intelektualac „na rubu pameti". Gorka kritika malograđanskog društva. Krležin najradikalniji oblik.'},
  {kat:'krleza',term:'Balade Petrice Kerempuha',def:'<strong>Krležina pjesnička zbirka</strong> (1936.). Vrhunac njegove poezije. <strong>Pisano kajkavskim dijalektom.</strong> Petrica Kerempuh kao narodski lik. Ekspresivna kritika društva.'},
  {kat:'krleza',term:'Zastave',def:'<strong>Krležin najopsežniji roman</strong> (1959.-1968.) u 5 svezaka. Panorama Hrvatske 1912.-1922. Glavni lik: Kamilo Emerički. Sinteza Krležinog opusa.'},
  {kat:'krleza',term:'Leksikografski zavod Miroslav Krleža',def:'<strong>Institucija u Zagrebu</strong> (danas LZ MK). Krleža imenovan direktorom 1950., ostaje do smrti. Vodi Enciklopediju Jugoslavije, Hrvatsku enciklopediju. Zove se po njemu.'},

  // === SUVREMENI AUTORI (8) ===
  {kat:'autori',term:'Henrik Ibsen',def:'<strong>1828.–1906.</strong> Norveški dramatičar. Uzor Krleži za Glembajeve. Drame: <em>Duhovi, Lutkina kuća, Hedda Gabler</em>. Skandinavska škola: retroaktivnost, psihologija.'},
  {kat:'autori',term:'Ranko Marinković',def:'<strong>1913.–2001.</strong> Hrv. pisac 2. polovice 20. st. ispitno djelo 2026: <em>Kiklop</em> (1965., D22). Intelektualac-outsider kao kod Krleže.'},
  {kat:'autori',term:'Vjenceslav Novak',def:'<strong>1859.–1905.</strong> Hrv. realist. Glavno djelo: <em>Posljednji Stipančići</em> (1899., D16). Prethodnik Glembajevih — propast hrv. građanske obitelji. ispitno djelo 2026.'},
  {kat:'autori',term:'Dostojevski',def:'<strong>Fjodor Mihajlovič Dostojevski</strong> (1821.-1881.). Ruski romanopisac. ispitno djelo 2026: <em>Zločin i kazna</em> (1866., D07). Paralela s Glembajevima: pitanje filozofije ubojstva.'},
  {kat:'autori',term:'Kafka',def:'<strong>Franz Kafka</strong> (1883.-1924.). Praški njemački pisac. ispitno djelo 2026: <em>Preobražaj</em> (1915., D08). Paralela: raspad pojedinca u obitelji.'},
  {kat:'autori',term:'Camus',def:'<strong>Albert Camus</strong> (1913.-1960.). Francuski pisac. ispitno djelo 2026: <em>Stranac</em> (1942., D09). Paralela s Leoneom: apsurd, otuđenje, ubojstvo.'},
  {kat:'autori',term:'Šoljan, Slamnig, Mihalić',def:'<strong>Hrv. pisci „krugovaši"</strong> (1950.-e). Nasljednici Krležinog modernističkog duha. Prva hrv. generacija nakon Krleže.'},
  {kat:'autori',term:'DHK (Društvo hrvatskih književnika)',def:'<strong>Udruga hrv. pisaca</strong> osnovana 1900. Glembajevi objavljeni 1928. u nakladi DHK. Glavni izdavač hrv. književnosti.'},
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
  try { localStorage.setItem('mt.hrv.h16.prog', p); } catch(e){}
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
  {q:'Tko je autor drame Gospoda Glembajevi?',o:['Miroslav Krleža','August Šenoa','Antun Gustav Matoš','Ranko Marinković'],t:0,e:'Miroslav Krleža (1893.-1981.), Zagreb. Najznačajniji hrvatski književnik 20. stoljeća. Direktor Leksikografskog zavoda od 1950.'},
  {q:'Kada su Gospoda Glembajevi objavljeni?',o:['1965. u Zagrebu','1928. u izdanju DHK (Zagreb)','1873. u Vijencu','1913. u Beču'],t:1,e:'Drama je objavljena 1928. u Zagrebu, u nakladi Društva hrvatskih književnika (DHK). Praizvedba 14. veljače 1929. u zagrebačkom HNK.'},
  {q:'Koji je žanr Gospodi Glembajevih?',o:['Pripovijetka s okvirnom pričom','Roman u 5 svezaka','Drama u 3 čina (psihološko-socijalna)','Tragedija u stihu'],t:2,e:'Drama u 3 čina — psihološko-socijalna, komorna, građanska tragedija. Krleža sam klasificira kao „kvalitativnu dramu".'},
  {q:'Gdje se odvija radnja drame?',o:['U bečkoj operi','U praškoj kavani','U palači bankarske obitelji Glembay u Zagrebu','Na seoskom imanju'],t:2,e:'Sva radnja odvija se u salonu palače Glembay u Zagrebu. Klasično jedinstvo mjesta.'},
  {q:'Kada se odvija radnja?',o:['Jedan tjedan 1914.','Pola godine prije revolucije','Jedan dan 1928. godine','Jedna ljetna noć 1913., od 1 do 5 ujutro'],t:3,e:'Jedna ljetna noć godinu dana prije Prvog svjetskog rata (1913.), od 1 do 5 ujutro. Klasično jedinstvo vremena.'},
  {q:'Koja klasična jedinstva drama zadovoljava?',o:['Samo jedinstvo mjesta','Sva tri — jedinstvo mjesta, vremena i radnje','Nijedno — moderna drama to odbacuje','Samo jedinstvo vremena'],t:1,e:'Glembajevi zadovoljavaju sva tri Aristotelova klasična jedinstva: mjesto (palača Glembay), vrijeme (jedna noć), radnja (kontinuirana, bez sporednih linija).'},
  {q:'Tko je bio uzor Krleži za Glembajeve?',o:['Bertolt Brecht','Molière','Henrik Ibsen (skandinavska dramaturgija)','William Shakespeare'],t:2,e:'Henrik Ibsen (1828.-1906.), norveški dramatičar. Krleža preuzima skandinavsku dramsku školu — retroaktivno razotkrivanje, psihološka analiza.'},
  {q:'Kako se naziva ciklus kojem Glembajevi pripadaju?',o:['Ciklus legendi','Kajkavski ciklus','Glembajevski ciklus (3 drame + 11 novela)','Ratni ciklus'],t:2,e:'Glembajevski ciklus (1928.-1931.): 3 drame (Gospoda Glembajevi, U agoniji, Leda) + 11 novela. Krležina 3. dramska faza.'},
  {q:'Što znači „retroaktivno razotkrivanje"?',o:['Likovi razbijaju četvrti zid','Pripovjedač prekida radnju','Drama se prikazuje obrnutim redoslijedom','Prošlost likova polako izlazi na vidjelo kroz dijalog'],t:3,e:'Ibsenova tehnika: prošlost se otkriva tijekom razgovora. U Glembajevima: baruničina prošlost polako izlazi u II. činu.'},
  {q:'Što je „off-stage nasilje" u Glembajevima?',o:['Ne postoji u drami','Borba likova pred publikom','Ubojstvo barunice u III. činu se događa iza scene — samo zvukovi','Simbolički umjesto stvarnog'],t:2,e:'Off-stage = iza scene. Klasična grčka tehnika. Leone ubije barunicu izvan pozornice, publika čuje samo lupanje vrata, razbijanje stakla, baruničine povike.'},
  {q:'Tko je glavni lik drame?',o:['Leone Glembay (slikar, dr. filozofije)','Barunica Castelli','Ignjat Glembay (bankar)','Sestra Angelika'],t:0,e:'Leone Glembay, 38 god., slikar i doktor filozofije, Ignjatov sin iz prvog braka. Vratio se iz Europe nakon 11 godina boravka.'},
  {q:'Tko umire u II. činu i kako?',o:['Sestra Angelika — bolestom','Leone Glembay — samoubojstvom','Barunica Castelli — ubojstvom','Ignjat Glembay — od infarkta'],t:3,e:'Ignjat Glembay (69, bankar) umire od infarkta u II. činu kada Leone razotkrije istinu o njegovoj ženi. Psihosomatska smrt.'},
  {q:'Tko je barunica Charlotte Castelli-Glembay?',o:['Leoneova supruga','Ignjatova druga žena (maćeha) — bivša zabavljačica','Sestra Ignjata Glembaya','Strankinja u posjeti Zagrebu'],t:1,e:'Barunica Charlotte Castelli (45 god.), Ignjatova druga žena. U II. činu se razotkriva da je bivša zabavljačica, preljubnica sa Silberbrandtom. Leone je ubije škarama u III. činu.'},
  {q:'Tko je sestra Angelika?',o:['Leoneova sestra po krvi','Dominikanka, udovica Leoneova brata Ivana','Kuharica obitelji','Barunicina pomoćnica'],t:1,e:'Sestra Angelika Glembay (29 god.), dominikanka, udovica brata Ivana koji se ubio. Rođena barunica Zygtmuntowicz. Leoneova platonska ljubav.'},
  {q:'Čime Leone ubije barunicu?',o:['Britvom','Otrovom','Škarama sa stola','Pištoljem'],t:2,e:'Leone uzima škare sa stola u III. činu i ubije baruncu Castelli off-stage. Paralela s britvom iz Prijana Lovre — svakodnevni predmet postaje smrtonosan.'},
  {q:'Što je Barboczyjeva legenda?',o:['Povijesna legenda o Zagrebu','Ljubavna priča mladih','Prvi Glembay ubio je kranjskog zlatara → svi prokleti','Politička intriga protiv obitelji'],t:2,e:'Barboczyjeva legenda: prvi Glembay opljačkao i ubio kranjskog zlatara na putu u varaždinsku crkvu. Od tada su svi Glembajevi prokleti — „ubojice i varalice".'},
  {q:'Koja je ključna Leoneova izjava?',o:['„Borim se protiv Glembaya u sebi"','„Glembajevi su nepobjedivi"','„Svijet pripada mladima"','„Volim Angeliku iznad svega"'],t:0,e:'„Od prvog dana, kad sam počeo razmišljati, ne radim drugo nego se borim protiv Glembaya u sebi" (I. čin). Tema borbe protiv biološkog nasljedstva.'},
  {q:'Koji je glavni kontrast drame?',o:['Privid (bogatstvo, moć) ↔ Istina (laž, ubojstvo)','Grad ↔ selo','Dobro ↔ zlo','Život ↔ smrt'],t:0,e:'Glavni kontrast: privid (bogatstvo, ljepota, sreća, moć) ↔ istina (lažljivci, kradljivci, ubojice, preljubnici). Krležina tematska osa.'},
  {q:'Što je Krleža sam rekao o drami?',o:['„Nerazumljivi eksperiment"','„Moje najsretnije djelo"','„Kopija Ibsena"','„Dekorativni pano civilizacije u agoniji"'],t:3,e:'„Glembajevi su neka vrsta dekorativnog panoa naslikanog po motivu jedne građanske civilizacije na odlasku u agoniju." Krležina samointerpretacija.'},
  {q:'Kojim jezicima govore Glembajevi u drami?',o:['Latinski + hrvatski','Samo njemačkim','Samo hrvatskim','Hrvatskim + njemačkim (dvojezičnost)'],t:3,e:'Glembajevi spontano prelaze u njemački — uobičajen govor zagrebačke buržoazije prije 1. svj. rata. „Stundenhotel", „Ltd.", njemačke fraze.'},
  {q:'Kada je praizvedba Glembajevih?',o:['Nikad — drama je samo čitana','14. veljače 1932. u Splitu','1. svibnja 1928. u Beču','14. veljače 1929. u zagrebačkom HNK'],t:3,e:'Praizvedba 14. veljače 1929. u zagrebačkom HNK, režija A. Verli. Trenutni uspjeh — drama ostaje klasik hrv. dramske scene.'},
  {q:'Koja je Krležina dramska faza Glembajevi?',o:['Simbolistička (1. faza)','Analitičko-realistička (3. faza)','Ratna (2. faza)','Posljednja faza (Aretej)'],t:1,e:'Glembajevski ciklus je Krležina 3. dramska faza: analitičko-realistička (1928.-1931.). Prethode ciklus legendi (1914.-1925.) i ratni ciklus (1922.-1932.).'},
  {q:'Koji je Krležin najvažniji roman?',o:['Gospoda Glembajevi (1928.)','Povratak Filipa Latinovicza (1932.)','Balade Petrice Kerempuha (1936.)','Aretej (1959.)'],t:1,e:'Povratak Filipa Latinovicza (1932.) — Krležin najvažniji roman. Ekspresionistička proza. Paralela s Leoneom: intelektualac se vraća u rodni kraj.'},
  {q:'Koji je Krležin najpoznatiji pjesnički zbornik?',o:['Zastave','Balade Petrice Kerempuha (1936., kajkavski)','Cvjetovi zla','Pan (1917.)'],t:1,e:'Balade Petrice Kerempuha (1936.) — vrhunac Krležine poezije. Pisano kajkavskim dijalektom. Petrica Kerempuh kao narodski lik.'},
  {q:'Kojoj instituciji je Krleža bio direktor od 1950. do smrti?',o:['Maticom hrvatskom','Leksikografski zavod u Zagrebu (danas LZ MK)','Hrvatskom narodnom kazalištu','Sveučilište u Zagrebu'],t:1,e:'Leksikografski zavod u Zagrebu (imenovan 1950.). Vodio Enciklopediju Jugoslavije i Hrvatsku enciklopediju. Zavod se danas zove po njemu — LZ Miroslav Krleža.'},
];

const CP_ITEMS=[
  'Znam godinu objave (1928., DHK) i praizvedbe Glembajevih (14.II.1929., HNK).',
  'Razumijem strukturu drame — 3 čina s klasičnim jedinstvom mjesta/vremena/radnje (palača Glembay, jedna ljetna noć 1913., 1-5 ujutro).',
  'Razumijem žanr — psihološko-socijalna drama, komorna, građanska tragedija, uzor Ibsen (skandinavska dramaturgija).',
  'Mogu opisati glavne likove: Leone, Ignjat, Charlotte Castelli, Angelika, Fabriczy, Silberbrandt, Altmann, Puba.',
  'Mogu prepričati sva tri čina i sukobe: Leone vs. društvo (I), Leone vs. otac Ignjat + infarkt (II), Leone vs. barunica + ubojstvo škarama (III).',
  'Razumijem Barboczyjevu legendu i njezinu funkciju (proročanstvo u I. činu koje se u III. činu ostvaruje).',
  'Znam 6 glavnih tema: propast patricijske obitelji, borba protiv „Glembaya u sebi", privid/istina, austrougarsko društvo, umjetnost/materijalizam, ženska pozicija.',
  'Razumijem 3 razine čitanja: konkretnu (drama obitelji), socijalnu (propast hrv. buržoazije), univerzalnu (borba protiv nasljedstva).',
  'Znam Krležin opus — 4 dramske faze (ciklus legendi, ratni, Glembajevski, Aretej) i ključne romane (Filip Latinovicz, Na rubu pameti, Zastave) + Balade Petrice Kerempuha (kajkavski).',
  'Mogu usporediti Glembajeve s Ibsenovim Duhovima, Stipančićima (D16), Kiklopom (D22), Dostojevskim (D07) — relevantno za školski esej.',
];

const DIAG0_Q=[
  {q:'Tko je autor drame Gospoda Glembajevi?',o:['August Šenoa','Antun Gustav Matoš','Miroslav Krleža','Ranko Marinković'],t:2},
  {q:'Kada je drama Gospoda Glembajevi praizvedena?',o:['1873. u Vijencu','1913. u Beču','14. veljače 1929. u zagrebačkom HNK','1965. u dramskom kazalištu'],t:2},
  {q:'Koji je žanr Gospodi Glembajevih?',o:['Roman u 5 svezaka','Pripovijetka','Drama u 3 čina (psihološko-socijalna)','Spjev u stihu'],t:2},
  {q:'Tko je glavni lik?',o:['Ignjat Glembay','Barunica Castelli','Leone Glembay','Sestra Angelika'],t:2},
  {q:'Što je Krležin uzor za dramu?',o:['Shakespeare','Henrik Ibsen (skandinavska dramaturgija)','Sofoklo','Molière'],t:1}
];
const TAB_NAMES=['Teorija','3 čina','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];
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
    msg='<strong>Odlično!</strong> Osnove H16 imaš savladane. Preporučujem Esej alat — tamo su 5 gotovih teza za školski esej i model esej (Glembajevi su ispitno djelo 2026).';
    btnTxt='✍ Esej alat →'; btnTab=2;
  } else if(pct>=60){
    msg='<strong>Dobro!</strong> Nekoliko rupa postoji — provjeri 3 čina drame za detalje o svakom činu i interpretaciji.';
    btnTxt='🎭 3 čina drame →'; btnTab=1;
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
try{citStars=JSON.parse(localStorage.getItem('mt.hrv.h16.cit_stars')||'{}')}catch(e){}
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
  try{localStorage.setItem('mt.hrv.h16.cit_stars',JSON.stringify(citStars))}catch(e){}
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
    out.innerHTML = '<div class="box-warn" style="margin-top:10px"><div class="bw-body"><div class="bw-txt">Zalijepi ulomak iz Glembajevih prije analize.</div></div></div>';
    return;
  }
  const tl = txt.toLowerCase();
  
  // Detekcija likova
  const likovi = [];
  if(/leone|leon\\b/.test(tl)) likovi.push('Leone Glembay (glavni lik)');
  if(/ignjat|glembaj\\s+otac|otac.*glembaj/.test(tl)) likovi.push('Ignjat Glembay (otac, bankar)');
  if(/charlott|castelli|barunic|beatric/.test(tl)) likovi.push('Barunica Charlotte Castelli-Glembay (maćeha)');
  if(/angelik/.test(tl)) likovi.push('Sestra Angelika Glembay (dominikanka)');
  if(/fabriczy|titus|ujak|župan/.test(tl)) likovi.push('Titus Fabriczy (bratić, umirovljeni župan)');
  if(/silberbrandt|ispovjedn/.test(tl)) likovi.push('Dr. Silberbrandt (ispovjednik barunice)');
  if(/altmann|liječn/.test(tl)) likovi.push('Dr. Paul Altmann (liječnik)');
  if(/puba|pravni\\s+zastupnik/.test(tl)) likovi.push('Puba Fabriczy (pravni zastupnik)');
  if(/barboczy|stara\\s+barbocy/.test(tl)) likovi.push('Barboczyjeva (legenda, ne pojavljuje se)');
  if(/alis|ivan|brat\\s+leonea/.test(tl)) likovi.push('Pokojni članovi (Alisa, Ivan, majka)');
  
  // Detekcija čina
  let cin = '';
  if(/portret|salon|kant|euler|barboczy|rupert|canjeg|fanika|silberbrandt.*posjet/.test(tl)) cin = 'I. čin (salon, portreti, Barboczyjeva legenda, Rupert-Canjeg, razotkrivanje Silberbrandta)';
  else if(/infarkt|sukob.*otac|prošlost.*castelli|prošlost.*barunic|alis|majka.*smrt|leone.*otac/.test(tl)) cin = 'II. čin (sukob s ocem, razotkrivanje baruničine prošlosti, infarkt Ignjata)';
  else if(/škar|stundenhotel|mrtvač|ubojstvo|bordel|cvrkut.*ptic|zaklan|kamerdin|sluga/.test(tl)) cin = 'III. čin (ubojstvo barunice škarama, Angelika kao lutka, „Cvrkut ptica u vrtu")';
  
  // Stilska sredstva
  const stila = [];
  if(/portret/.test(tl)) stila.push('Simbol portreta (obiteljsko prokletstvo)');
  if(/škar|britv/.test(tl)) stila.push('Simbol škara (oružje, paralela s britvom iz Prijana Lovre)');
  if(/kant|euler|logic|filozof|matemati/.test(tl)) stila.push('Aluzija (Kant, Euler, logika — intelektualni kontekst Leonea)');
  if(/privid|istin|fasad|laž/.test(tl)) stila.push('Kontrast privid/istina');
  if(/umjetn|slikar|materijaliz|bankar/.test(tl)) stila.push('Kontrast umjetnost/materijalizam');
  if(/njemački|deutsch|stundenhotel|ltd|herr|fräulein/.test(tl)) stila.push('Dvojezičnost (hrv./njem.) — autentičnost buržoazije');
  if(/ironij|sarkast|podrugiv/.test(tl)) stila.push('Ironija (Leoneove razorne replike)');
  if(/metafor|simbol/.test(tl)) stila.push('Metafora („Glembay u sebi", „pano u agoniji")');
  if(/borim\\s+se|protiv\\s+glembaj/.test(tl)) stila.push('Leoneova ključna izjava („borba protiv Glembaya u sebi")');
  
  // 3 razine
  const razine = [];
  if(/leone|ignjat|barunic|angelik|čin|ubojstv|sukob/.test(tl)) razine.push('Konkretna (drama obitelji)');
  if(/klas|buržoa|aristokrac|patrick|austro|građan|novac|banka|eksploatac/.test(tl)) razine.push('Socijalna (propast hrv. patricijske buržoazije)');
  if(/nasljedstv|biolog|borb|ideal|tragič|sloboda|determin/.test(tl)) razine.push('Univerzalna (borba protiv nasljedstva, filozofska dimenzija)');
  
  // Render
  let h = '<div class="box-int" style="margin-top:10px"><div class="box-int-lbl">📊 Rezultat analize ulomka</div><div class="box-int-txt">';
  h += '<p><b>🎭 Vjerojatni čin:</b> ' + (cin || '<em>Nedovoljno signala — provjeri kontekst</em>') + '</p>';
  h += '<p><b>🎭 Likovi u ulomku:</b> ' + (likovi.length ? likovi.join(', ') : '<em>Nisu eksplicitno imenovani</em>') + '</p>';
  h += '<p><b>✒ Stilska sredstva:</b> ' + (stila.length ? '<br>• ' + stila.join('<br>• ') : '<em>Nisu prepoznata bazična sredstva</em>') + '</p>';
  h += '<p><b>📊 Razine čitanja:</b> ' + (razine.length ? '<br>• ' + razine.join('<br>• ') : '<em>Nema eksplicitnih oznaka</em>') + '</p>';
  h += '<p style="margin-top:10px;padding-top:10px;border-top:1px dashed var(--bd)"><b>🎯 Esejska primjena:</b> Za analizu ovog ulomka: (1) identificiraj iz kojeg je čina, (2) opiši Krležinu tehniku (psihološki dijalog, opširne didaskalije, retroaktivno razotkrivanje), (3) izdvoj 2-3 stilska sredstva s konkretnim primjerom, (4) poveži na barem dvije razine (konkretna/socijalna/univerzalna), (5) vrati se na Leoneovu središnju temu „borbe protiv Glembaya u sebi" i pokaži kako ulomak sudjeluje u toj tragičnoj dinamici.</p>';
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
  try{localStorage.setItem('mt.hrv.h16.wc_text',txt);}catch(e){}
}
(function(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h16.wc_text');if(sv){ta.value=sv;scannerUpdate();}}catch(e){}
})();

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
    <h3>25 pitanja · H16 Krleža · Glembajevi</h3>
    <p>Pitanja pokrivaju cijelo poglavlje H16: Miroslav Krleža, Gospoda Glembajevi, hrv. moderna, Krležin opus, 3 čina drame. <strong>Glembajevi su ispitno djelo 2026.</strong> Na kraju dobivaš ocjenu i objašnjenja.</p>
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
  if(pct>=90){grade='ODLIČAN';msg='Spreman/na si za maturu iz H16.';ico='🏆';}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno znanje. Provjeri pogreške u Pojmovniku.';ico='💪';}
  else if(pct>=60){grade='DOBAR';msg='Ponoviti: 3 čina drame i Krležin opus (Glembajevski ciklus, klasična jedinstva, Ibsen).';ico='📚';}
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
try{const s=localStorage.getItem('mt.hrv.h16.cp');if(s)CP_STATE=JSON.parse(s);}catch(e){}

const CP_HINTS=['Tab 0','Tab 0','Tab 4','Tab 0','Tab 1','Tab 1','Tab 0','Tab 2','Tab 4','Tab 2'];
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
  try{localStorage.setItem('mt.hrv.h16.cp',JSON.stringify(CP_STATE));}catch(e){}
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
    else if(pct>=40)msg='<strong>Napredak!</strong> Nastavak: provjeri 3 čina i Esej alat (5 gotovih teza za esej) za neoznačene stavke.';
    else msg='Još je posla. Počni s Teorijom (Tab 0) i prođi sve sekcije.';
    sumTxt.innerHTML=msg;
  }
}
function cpReset(){
  CP_STATE={done:{}};
  try{localStorage.removeItem('mt.hrv.h16.cp');}catch(e){}
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
try{TAB_DONE=JSON.parse(localStorage.getItem('mt.hrv.h16.tab_done')||'{}')}catch(e){}

function markTab(n){
  TAB_DONE[n]=true;
  try{localStorage.setItem('mt.hrv.h16.tab_done',JSON.stringify(TAB_DONE))}catch(e){}
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
  '💡 <strong>Tab 0 tip:</strong> Povezuj djelo s krizom buržoazije — Glembajevi = trula klasa, Leone = nemoguć pobunjenik, ubojstvo = krv pobjeđuje volju.',
  '💡 <strong>Tab 1 tip:</strong> Klikni na čin drame za detalje radnje, sukoba, likova i esejskih signala.',
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
    const names={H11:'H11 · Stari hrv. pisci',H12:'H12 · Marulić · Judita',H13:'H13 · Gundulić · Dubravka',H14:'H14 · Preporod · Mažuranić',H15:'H15 · Šenoa · Prijan Lovro'};
    const el=document.getElementById('from-banner');
    const txt=document.getElementById('from-txt');
    if(el&&txt){
      txt.textContent='📎 Nastaviš učenje iz '+(names[from]||from)+' → H16 · Krleža · Glembajevi';
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h16.kviz_hist')||'[]');
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h16.kviz_hist')||'[]');
    hist.push({score,total,date:new Date().toISOString()});
    localStorage.setItem('mt.hrv.h16.kviz_hist',JSON.stringify(hist.slice(-10)));
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
  // EASY — Likovi Glembajevih
  easy:[
    {a:'Leone Glembay',b:'Glavni lik — slikar, dr. filozofije, 11 god. u Europi'},
    {a:'Ignjat Glembay',b:'Otac Leonea — bankar, direktor Glembay Ltd. (umre od infarkta)'},
    {a:'Barunica Charlotte Castelli',b:'Ignjatova druga žena (maćeha) — bivša zabavljačica'},
    {a:'Sestra Angelika',b:'Dominikanka, udovica brata Ivana — Leoneova platonska ljubav'},
  ],
  // MEDIUM — Stilska sredstva + tehnike s primjerima
  medium:[
    {a:'Klasično jedinstvo',b:'Palača Glembay, jedna noć 1913., 1-5 ujutro, kontinuirana radnja'},
    {a:'Retroaktivno razotkrivanje',b:'U II. činu baruničina prošlost (zabavljačica, preljubnica) polako izlazi na vidjelo'},
    {a:'Off-stage nasilje',b:'Ubojstvo barunice u III. činu — samo zvukovi (lupanje vrata, staklo)'},
    {a:'Simbol portreta',b:'Obiteljski portreti na zidovima salona = glembajevsko prokletstvo materijalizirano'},
    {a:'Kontrast privid/istina',b:'Bogatstvo, ljepota, moć ↔ lažljivci, kradljivci, ubojice'},
    {a:'Dvojezičnost hrv./njem.',b:'„Stundenhotel", „Ltd.", njemačke fraze — govor zagrebačke buržoazije'},
  ],
  // HARD — Krležin opus + moderna kontekst
  hard:[
    {a:'1928.',b:'Objava Glembajevih u nakladi DHK'},
    {a:'14. II. 1929.',b:'Praizvedba Glembajevih u zagrebačkom HNK (režija A. Verli)'},
    {a:'Glembajevski ciklus',b:'3 drame (Glembajevi, U agoniji, Leda) + 11 novela'},
    {a:'Henrik Ibsen',b:'Norveški dramatičar — uzor Krleži za Glembajeve (skandinavska škola)'},
    {a:'Povratak Filipa Latinovicza',b:'Krležin roman iz 1932. — intelektualac se vraća u rodni kraj'},
    {a:'Balade Petrice Kerempuha',b:'Krležina pjesnička zbirka (1936.) — napisana kajkavskim dijalektom'},
    {a:'Leksikografski zavod',b:'Zagrebačka institucija — Krleža direktor od 1950. do smrti (zove se po njemu)'},
    {a:'Vjenceslav Novak',b:'Posljednji Stipančići (1899., D16) — prethodnik Glembajevih, ispitno djelo 2026'},
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
    easy:'🎭 Likovi Glembajevih',
    medium:'✒ Stilska sredstva + dramske tehnike',
    hard:'🏛 Krležin opus + moderna (napredno)'
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
  {t:'Drama u 3 čina',d:'Klasična dramska struktura. Glembajevi: ekspozicija (I. čin) → kulminacija (II. čin, infarkt) → rasplet (III. čin, ubojstvo).',kat:'drama'},
  {t:'Psihološko-socijalna drama',d:'Krležina klasifikacija Glembajevih. Spaja psihološku analizu likova i socijalnu kritiku klase.',kat:'drama'},
  {t:'Glembajevski ciklus',d:'3 drame + 11 novela (1928.-1931.): Gospoda Glembajevi, U agoniji, Leda + novele. Krležin dramski vrhunac.',kat:'drama'},
  {t:'Klasično jedinstvo mjesta/vremena/radnje',d:'Aristotelov ideal. Glembajevi: palača Glembay, jedna ljetna noć 1913., 1-5 ujutro, kontinuirana radnja.',kat:'tehnika'},
  {t:'Retroaktivno razotkrivanje',d:'Ibsenova tehnika — prošlost polako izlazi na vidjelo kroz dijalog. U II. činu: baruničina prošlost (zabavljačica, preljubnica).',kat:'tehnika'},
  {t:'Off-stage nasilje',d:'Grčka tehnika — nasilje se događa izvan scene. Ubojstvo barunice u III. činu: samo zvukovi (lupanje vrata, staklo).',kat:'tehnika'},
  {t:'Opširne didaskalije',d:'Krležine scenske upute su opsegom kao roman. Minucionon opisuje kostime, mimiku, scenografiju, svjetlo.',kat:'tehnika'},
  {t:'Leone Glembay',d:'Glavni lik. 38 god., slikar, dr. filozofije. 11 godina u Europi. „Borim se protiv Glembaya u sebi". Završi kao ubojica.',kat:'likovi'},
  {t:'Ignjat Glembay',d:'Otac Leonea. 69 god., bankar, direktor Glembay Ltd. Umire od infarkta u II. činu kad shvati istinu o ženi.',kat:'likovi'},
  {t:'Barunica Charlotte Castelli',d:'Ignjatova druga žena (maćeha), 45 god. Bivša zabavljačica, preljubnica sa Silberbrandtom. Leone je ubije škarama u III. činu.',kat:'likovi'},
  {t:'Sestra Angelika Glembay',d:'Dominikanka, udovica brata Ivana (29 god.). Leoneova platonska ljubav. Na kraju III. čina stoji „kao lutka".',kat:'likovi'},
  {t:'Stara Barboczyjeva',d:'Ne pojavljuje se — samo kao legenda. „Svi Glembajevi su prokleti — ubojice i varalice!" Proročanstvo koje se u III. činu ostvaruje.',kat:'likovi'},
  {t:'Simbol portreta',d:'Portreti Glembajevih na zidovima salona = obiteljsko prokletstvo materijalizirano. U I. činu likovi razgovaraju o njima.',kat:'stil'},
  {t:'Simbol škara',d:'Škare koje Leone uzima sa stola u III. činu = oružje. Svakodnevni predmet postaje smrtonosan. Paralela s britvom iz Prijana Lovre.',kat:'stil'},
  {t:'Kontrast privid/istina',d:'Glavni kontrast drame. Privid: bogatstvo, ljepota, moć. Istina: lažljivci, kradljivci, ubojice, preljubnici.',kat:'stil'},
  {t:'Dvojezičnost (hrv./njem.)',d:'Glembajevi spontano prelaze u njemački („Stundenhotel", njem. fraze). Autentičan govor zagrebačke buržoazije prije 1. svj. rata.',kat:'stil'},
  {t:'Hrvatska moderna',d:'Književni pokret 1895.-1914. Matoš, Vidrić, Nazor. Krleža formalno nije modernist, nego avangarda nakon moderne.',kat:'moderna'},
  {t:'Miroslav Krleža',d:'1893.-1981. Najznačajniji hrv. književnik 20. st. Opus 40+ svezaka. Direktor Leksikografskog zavoda od 1950. (zove se po njemu).',kat:'krleza'},
  {t:'Henrik Ibsen',d:'1828.-1906. Norveški dramatičar. Uzor Krleži za Glembajeve. Skandinavska škola: retroaktivnost, psihološka analiza.',kat:'autori'},
  {t:'Povratak Filipa Latinovicza',d:'Krležin roman (1932.). Ekspresionistička proza. Intelektualac se vraća u rodni kraj — paralela s Leoneom.',kat:'krleza'},
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
  {q: 'Znam godinu nastanka i praizvedbe Glembajevih (1928. DHK, praizvedba HNK 14.II.1929.).', k: 'kontekst'},
  {q: 'Mogu opisati strukturu drame — 3 čina, klasično jedinstvo mjesta/vremena/radnje, jedna noć 1913.', k: 'struktura'},
  {q: 'Razumijem žanr — psihološko-socijalna drama, građanska tragedija, Ibsen kao uzor.', k: 'žanr'},
  {q: 'Mogu opisati glavne likove: Leone, Ignjat, barunica Castelli, Angelika, Fabriczy, Silberbrandt.', k: 'likovi'},
  {q: 'Razumijem Krležin opus — 4 dramske faze, Glembajevski ciklus, romani (Filip Latinovicz, Na rubu pameti, Zastave).', k: 'kontekst'}
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
  if (pct >= 100) { msg = '🏆 Odlično! Spreman/na si za sve što NCVVO može pitati iz H16 — uključujući školski esej o Glembajevima.'; color = 'var(--green)'; }
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
  'Znam godinu objave (1928.) i praizvedbe (14.II.1929. HNK) Glembajevih.',
  'Razumijem strukturu drame — 3 čina, klasično jedinstvo mjesta/vremena/radnje, jedna noć 1913.',
  'Razumijem žanr — psihološko-socijalna drama, komorna, građanska tragedija, uzor Ibsen.',
  'Mogu opisati glavne likove: Leone, Ignjat, Charlotte, Angelika, Fabriczy, Silberbrandt, Altmann, Puba.',
  'Mogu prepričati tri čina i sukobe: Leone-društvo, Leone-otac (infarkt), Leone-barunica (škare).',
  'Razumijem Barboczyjevu legendu i njezinu funkciju u drami (proročanstvo koje se ostvaruje).',
  'Znam 6 glavnih tema: propast obitelji, borba s nasljedstvom, privid/istina, austrougarstvo, umjetnost/materijalizam, ženska pozicija.',
  'Razumijem 3 razine čitanja: konkretnu (drama obitelji), socijalnu (propast klase), univerzalnu (borba s nasljedstvom).',
  'Znam Krležin opus: 4 dramske faze (ciklus legendi, ratni ciklus, Glembajevski, Aretej) i ključne romane (Filip Latinovicz, Na rubu pameti, Zastave).',
  'Mogu usporediti Glembajeve s Ibsenovim Duhovima, Stipančićima, Kiklopom, i drugim esejskim djelima 2026.',
];
let clDone = {};
try { clDone = JSON.parse(localStorage.getItem('mt.hrv.h16.cl') || '{}'); } catch(e) {}

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
  try { localStorage.setItem('mt.hrv.h16.cl', JSON.stringify(clDone)); } catch(e) {}
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
  try{localStorage.setItem('mt.hrv.h16.cp_writer',txt);}catch(e){}
  // Count literary terms
  const tl=txt.toLowerCase();
  const terms=['drama','tri čina','3 čina','jedinstvo','klasičn','ibsen','retroaktivn','off-stage','didaskal','psihološk','komorn','građansk','tragedij','glembaj','glembay','leone','ignjat','charlott','castelli','barunic','angelik','fabriczy','silberbrandt','altmann','puba','barboczy','škar','infarkt','1928','1929','hnk','modern','ekspresion','avangarda','krleža','ciklus','legendi','ratni','latinovicz','na rubu pameti','balade','kerempuh','zastave','leksikografsk','agonij','dekorativ','pano','privid','istin','glembajev u sebi','borim se'];
  const found=[];
  if(/drama|tri čin|3 čin|jedinstvo|klasičn|ibsen|retroaktivn|off-stag|didaskal|komorn|tehnik/.test(tl))found.push('✅ Žanr/tehnika drame');
  if(/leone|ignjat|charlott|castelli|barunic|angelik|fabriczy|silberbrandt|altmann|puba|barboczy|glembay/.test(tl))found.push('✅ Lik');
  if(/1928|1929|hnk|dhk|modern|ekspresion|avangard|krleža|1913|ciklus|glembajevski/.test(tl))found.push('✅ Kontekst');
  if(/privid|istin|umjetn.*material|razum.*instinkt|klas|buržoa|patricij/.test(tl))found.push('✅ Kontrast/tema');
  if(/simbol|ironij|metafor|portret|škar|dvojezi|aluzij|kant|euler/.test(tl))found.push('✅ Stilsko sredstvo');
  if(/agonij|dekorativ|pano|propast|borim.*sebi|glembaj.*sebi|nasljedstv|biolog|tragedij|infarkt|ubojstv/.test(tl))found.push('✅ Tema/ideja');
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
  try{const sv=localStorage.getItem('mt.hrv.h16.cp_writer');if(sv){ta.value=sv;cpWriterUpdate();}}catch(e){}
})();

/* ═══════════════════════════════════
   CITATNIK v2 (H11 featured-quote pattern)
═══════════════════════════════════ */
const CIT_DATA2 = [
  // === I. ČIN (8) ===
  {cat:'cin1',napamet:true,
   text:'Od prvog dana, kad sam počeo razmišljati, ne radim drugo nego se borim protiv Glembaya u sebi.',
   meta:'— Leone Glembay, I. čin · Ključna izjava drame · Tema borbe protiv biološkog nasljedstva'},
  {cat:'cin1',napamet:true,
   text:'Ti si jedino u što vjerujem u glembajevskoj kući.',
   meta:'— Leone Angeliki, I. čin · Erotska napetost · Angelika kao moralna referentna točka'},
  {cat:'cin1',
   text:'Glembajevi su varalice i ubojice — kako je rekla stara Barboczyjeva.',
   meta:'— Leone Fabriczyjum, I. čin · Uvođenje Barboczyjeve legende'},
  {cat:'cin1',
   text:'Po toj legendi prvi je Glembay stekao svoje bogatstvo tako što je opljačkao kranjskog zlatara dok je nosio zlato u varaždinsku crkvu.',
   meta:'— Fabriczy prepričava Barboczyjevu legendu, I. čin · Mitološki izvor prokletstva'},
  {cat:'cin1',
   text:'Od tada nad Glembajevima visi prokletstvo zbog kojeg su svi bolesni, nestabilni, skloni kriminalu i prevari, a ne ustručavaju se ni ubojstva.',
   meta:'— Legenda o Glembajevima, I. čin · Nasljedstvo zločina kao obiteljski obrazac'},
  {cat:'cin1',
   text:'Samo u posljednjoj generaciji ubili su se Leonov brat, majka i sestra.',
   meta:'— Leone o obiteljskim smrtima, I. čin · Niz samoubojstava kao glembajevski obrazac'},
  {cat:'cin1',
   text:'Budite diskretniji kad u noći primate Castelličine ljubavne posjete.',
   meta:'— Leone Silberbrandtu, I. čin · Kraj I. čina · Ignjat to čuje, sjeme II. čina'},
  {cat:'cin1',
   text:'U razgovor ispunjen rafiniranim opservacijama miješaju se bratić starog Glembaya, negdašnji veliki župan Fabriczy, ispovjednik barunice Charlotte Castelli-Glembay, Alojzije Silberbrandt.',
   meta:'— Iz didaskalije I. čina · Strukturni opis početne scene'},

  // === II. ČIN (6) ===
  {cat:'cin2',
   text:'Leone mu u 2. činu predbacuje Alisinu smrt; ovaj pokušava zanijekati.',
   meta:'— II. čin · Razotkrivanje baruničine uloge u smrti Leonine sestre Alise'},
  {cat:'cin2',
   text:'Psihički uzdrman činjenicom što žena vara njegova oca sa silnim muškarcima i nostalgijom za majkom.',
   meta:'— Psihološka karakterizacija Leonea u II. činu · Višestruke traume'},
  {cat:'cin2',
   text:'Leone se sukobljava s liječnikom Altmannom i Silberbrandtom i otkriva odbojnost spram prava koje njihova zanimanja polažu na ljudske duše i tijela.',
   meta:'— II. čin · Kritika institucionalnih autoriteta (medicina + religija)'},
  {cat:'cin2',
   text:'Slučaj Rupert-Canjeg također dramu oblikuje u socijalnom smislu. Glembajevi sebe vide iznad gradskih siromaha i običnog puka.',
   meta:'— Socijalna dimenzija drame · Aristokratska arogancija'},
  {cat:'cin2',
   text:'Nažalost, čitalac ubrzo shvata da je Leon ipak bio u pravu... ali sada je kasno, jer je stari Glembajev doživio infarkt i umro.',
   meta:'— II. čin, vrhunac · Ignjatova smrt od psihosomatskog šoka'},
  {cat:'cin2',
   text:'Drugi čin intenzivira konzekvence tako ocrtanih odnosa u obliku koji podsjeća na komornu dramu.',
   meta:'— Krležijana, interpretacija · II. čin kao komorna drama'},

  // === III. ČIN (7) ===
  {cat:'cin3',napamet:true,
   text:'Cvrkut ptica u vrtu.',
   meta:'— Didaskalija, završetak III. čina · Metafizička ravnodušnost prirode · Ironični finale'},
  {cat:'cin3',napamet:true,
   text:'Dobro je rekla stara Barboczyjeva — svi su Glembajevi ubojice i varalice!',
   meta:'— Barunica Castelli Leoneu, III. čin · Barboczyjeva legenda se zatvara · Uvod u ubojstvo'},
  {cat:'cin3',napamet:true,
   text:'Sve što je ona godinama krala od Glembaya, ja sam to uzeo natrag.',
   meta:'— Leone barunici, III. čin · Konflikt za nasljedstvo · Priprema ubojstva'},
  {cat:'cin3',
   text:'Neka izvole otići u neki Stundenhotel.',
   meta:'— Barunica Leoneu, III. čin · Baruničina dekadencija · Dvojezičnost (njem. „Stundenhotel")'},
  {cat:'cin3',
   text:'Angelika želi zadržati Leonea, on uzima škare sa stola, ali barunica instinktivno poleti kroz vrata van.',
   meta:'— Didaskalija III. čina · Trenutak prije ubojstva · Škare kao simbol'},
  {cat:'cin3',
   text:'Sluga reče da je gospon doktor zaklao barunicu te istrči natrag.',
   meta:'— Didaskalija III. čina · Off-stage ubojstvo (grčka tehnika) · Objava smrti'},
  {cat:'cin3',
   text:'Angelika, kao lutka, stoji nepomično.',
   meta:'— Didaskalija III. čina · Paraliza svjedoka · Simbolični tableau'},

  // === LEONE — karakterizacija (4) ===
  {cat:'leone',
   text:'Leone Glembay – glavni lik drame; intelektualac i poznavaoc umjetnosti i doktor filozofije koji svoje predke smatra upravo suprotnim od obrazovanog.',
   meta:'— Karakterizacija Leonea · Intelektualac protiv vlastite klase'},
  {cat:'leone',
   text:'Obučen u frak te uvijek imao lulu u ustima; srednjovječni prosijedi muškarac rijetke bijele brade bez brkova; fizički nemiran što nam već pokazuje njegovu labilnost, neurotičnost i uznemirenost.',
   meta:'— Vanjski portret Leonea · Fizička manifestacija unutarnje nestabilnosti'},
  {cat:'leone',
   text:'Ta borba protiv Glembaya u sebi borba je protiv vlastitog biološkog naslijeđa, protiv Glembayevske krvi koje je Leone toliko svjestan.',
   meta:'— Interpretacija Leoneove tragične dinamike · Svijest koja ne spašava'},
  {cat:'leone',
   text:'U središtu drame je Leone Glembay, kompleksan i senzibilan lik, izdvojen od svoje obitelji, koji se cijelog života pokušava riješiti onoga „glembajevskog" u sebi.',
   meta:'— Lektire.hr · Sinteza karakterizacije Leonea · Izoliranost + pokušaj bijega'},

  // === TEME I IDEJE (6) ===
  {cat:'tema',napamet:true,
   text:'Svi su Glembajevi prokleti — ubojice i varalice.',
   meta:'— Stara Barboczyjeva (legenda) · Proročanstvo koje se u III. činu ostvaruje · Tematski temelj drame'},
  {cat:'tema',
   text:'Privid — bogatstvo, ljepota, sreća, moć · Istina — lažljivci, kradljivci, ubojice, preljubnici.',
   meta:'— Tematska osa Glembajevih · Glavni kontrast drame'},
  {cat:'tema',
   text:'Rasipništvo, ludilo, ubojstva i samoubojstva rješenja su svih glembajevskih kriza.',
   meta:'— Sinteza obiteljskog obrasca · Patološki načini rješavanja problema'},
  {cat:'tema',
   text:'Tema drame je propast bogate i ugledne aristokratske obitelji Glembaj.',
   meta:'— Osnovna tematska formulacija · Središte drame'},
  {cat:'tema',
   text:'Nedostatak savjesti, kao najveća emocija koja nedostaje Glembajevima, duboko tišti Leonea.',
   meta:'— Leoneova etička dilema · Moralni manjak kao klasni obrazac'},
  {cat:'tema',
   text:'Krvavo bogatstvo obitelji Glembaj prikuplja se kroz generacije moralnih kompromisa, korupcije i eksploatacije radnika.',
   meta:'— Socijalna dimenzija · Marksistička dimenzija Krležine kritike'},

  // === KRLEŽA O DJELU (4) ===
  {cat:'krleza',napamet:true,
   text:'Glembajevi su neka vrsta dekorativnog panoa naslikanog po motivu jedne građanske civilizacije na odlasku u agoniju, i imaju karakter poetskog lirskog poniranja u sve elemente takozvane psihološke drame.',
   meta:'— Krleža o vlastitom djelu · Autorova samointerpretacija'},
  {cat:'krleza',napamet:true,
   text:'Glembajevi su u hrvatsku književnost došli 40 godina prekasno.',
   meta:'— Krleža o vlastitom djelu · Povratak klasičnoj formi u avangardnom vremenu'},
  {cat:'krleza',
   text:'Krleži je uzor bio Henrik Ibsen zbog čega je ova drama pisana po uzoru nordijske škole 90-ih godina te je ibsenski konkretna.',
   meta:'— Kritička interpretacija · Ibsen kao uzor Krležine dramske forme'},
  {cat:'krleza',
   text:'Ciklus je sam po sebi realističko-analitički, a drama kvalitativna.',
   meta:'— Krležijana, klasifikacija · Glembajevski ciklus kao Krležina 3. dramska faza'},

  // === KONTEKST (5) ===
  {cat:'kontekst',
   text:'Gospoda Glembajevi. Drama u tri čina iz života jedne agramerske patricijske obitelji.',
   meta:'— Puni naslov + podnaslov drame (1928., DHK) · Autorsko samopoimanje'},
  {cat:'kontekst',
   text:'Zbiva se jedne noći, kasnog ljeta, godinu dana prije Rata 1914-18, u kući imućne bankarske obitelji Glembay.',
   meta:'— Didaskalija mjesta i vremena · Ključne činjenice scene'},
  {cat:'kontekst',
   text:'Prvi put izvedena 14. II. 1929., u zagrebačkom HNK, u režiji A. Verlija.',
   meta:'— Bibliografska činjenica · Praizvedba Glembajevih'},
  {cat:'kontekst',
   text:'Razgovor se djelomično vodi na njemačkome - uobičajenom načinu izražavanja visokoga zagrebačkog društva prije I. svj. rata.',
   meta:'— Krležijana o dvojezičnosti drame · Autentičnost austrougarske buržoazije'},
  {cat:'kontekst',
   text:'Ciklus drama o Glembajevima (Gospoda Glembajevi 1928., U agoniji 1928., Leda 1931.) zajedno s proznim fragmentima novelističkog oblika o nekim junacima te dramske trilogije najsnažnije su Krležino dramsko ostvarenje.',
   meta:'— Glembajevski ciklus · 3 drame + 11 novela · Krležin vrhunac'},
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
      const stars = JSON.parse(localStorage.getItem('mt.hrv.h16.cit_stars')||'[]');
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
  // === DRAMA / ŽANR (10) ===
  {kat:'drama',term:'Drama',def:'<strong>Književni rod</strong> koji prikazuje radnju kroz dijalog i scenski prikaz. Glembajevi = drama u 3 čina. Razlikuje se od epike (pripovijedanje) i lirike (izraz osjećaja).'},
  {kat:'drama',term:'Drama u 3 čina',def:'<strong>Klasična dramska struktura</strong> — ekspozicija/zaplet (I. čin), kulminacija (II. čin), rasplet (III. čin). Glembajevi: Leone-društvo → Leone-otac → Leone-barunica.'},
  {kat:'drama',term:'Psihološka drama',def:'<strong>Tip drame</strong> gdje je težište na unutarnjim stanjima likova, ne na vanjskoj akciji. Glembajevi = psihološka drama — sukob se zbiva <em>u svakom liku posebno</em>, ne samo između njih.'},
  {kat:'drama',term:'Psihološko-socijalna drama',def:'<strong>Krležina klasifikacija</strong> — Glembajevi spajaju <em>psihološku analizu</em> (unutarnji sukobi) i <em>socijalnu kritiku</em> (propast klase). Dva sloja istodobno.'},
  {kat:'drama',term:'Komorna drama',def:'<strong>Drama s malim brojem likova</strong> i ograničenim prostorom. Krleža sam II. čin Glembajevih naziva „komornim" — Leone + otac + nekoliko svjedoka.'},
  {kat:'drama',term:'Građanska tragedija',def:'<strong>Žanr tragedije</strong> s likovima iz građanskog sloja (ne kraljevi/heroji kao u klasičnoj tragediji). Glembajevi = građanska tragedija — bankarska obitelj propada.'},
  {kat:'drama',term:'Kvalitativna drama',def:'<strong>Krležin termin</strong> za dramu koja se ne temelji na vanjskim zapletima, nego na <em>kvaliteti psiholoških odnosa</em>. Glembajevi = kvalitativna.'},
  {kat:'drama',term:'Analitičko-realistička faza',def:'<strong>Krležina 3. dramska faza</strong> (1928.-1931.) — Glembajevski ciklus. Povratak klasičnoj formi nakon ekspresionizma. Uzor: Ibsen.'},
  {kat:'drama',term:'Glembajevski ciklus',def:'<strong>3 drame + 11 novela</strong> (1928.-1931.): <em>Gospoda Glembajevi</em> (1928.), <em>U agoniji</em> (1928.), <em>Leda</em> (1931.) + 11 novela. Krležin vrhunac dramaturgije.'},
  {kat:'drama',term:'Didaskalija',def:'<strong>Scenska uputa</strong> u drami — opis scene, kostima, mimike, pokreta. Krleža piše <em>opširne didaskalije</em> (romansijerska razrada) — svaki čin ima minuciozan scenski opis.'},

  // === DRAMSKE TEHNIKE (10) ===
  {kat:'tehnika',term:'Klasično jedinstvo mjesta',def:'<strong>Sva radnja na jednom mjestu</strong> — Aristotelov ideal. Glembajevi: cijela drama u palači Glembay u Zagrebu (salon).'},
  {kat:'tehnika',term:'Klasično jedinstvo vremena',def:'<strong>Radnja u ograničenom vremenu</strong> — klasično u jednom danu. Glembajevi: <em>jedna ljetna noć 1913., 1-5 ujutro</em>. Sažetost = intenzitet.'},
  {kat:'tehnika',term:'Klasično jedinstvo radnje',def:'<strong>Jedna središnja radnja</strong> bez sporednih linija. Glembajevi: Leoneov povratak → sukobi → dvije smrti → rasplet. Kontinuirana kronologija.'},
  {kat:'tehnika',term:'Psihološki dijalog',def:'<strong>Razgovor koji otkriva unutrašnjost likova.</strong> Krležini dijalozi nisu razmjena informacija nego <em>oružja u sukobu</em>. Podtekst važniji od teksta.'},
  {kat:'tehnika',term:'Opširna replika',def:'<strong>Duga govorna jedinica lika</strong> — esejska refleksija usred drame. Leoneove replike u II. činu su pravi eseji o filozofiji, moralu, obitelji.'},
  {kat:'tehnika',term:'Retroaktivno razotkrivanje',def:'<strong>Ibsenova tehnika</strong> — prošlost polako izlazi na vidjelo kroz dijalog. Glembajevi: baruničina prošlost (zabavljačica, preljubnica) otkriva se u II. činu.'},
  {kat:'tehnika',term:'Ibsenova dramaturgija',def:'<strong>Skandinavska škola 90-ih godina 19. st.</strong> Obilježja: retroaktivnost, psihološka analiza, tragični kraj kroz spoznaju. Krleža eksplicitno uzima Ibsena za uzor.'},
  {kat:'tehnika',term:'Off-stage nasilje',def:'<strong>Nasilje se događa izvan scene</strong> — grčka tehnika. Ubojstvo barunice u III. činu je off-stage: samo zvukovi (lupanje vrata, staklo, povici).'},
  {kat:'tehnika',term:'Podtekst',def:'<strong>Ono što se ne kaže, ali se osjeća.</strong> Ignjat u I. činu čuje Leonin šapat — prisutan je, ali tih. Cijeli II. čin je posljedica tog podteksta.'},
  {kat:'tehnika',term:'Tableau vivant',def:'<strong>Scenska slika</strong> — zaustavljen kadar. Na kraju III. čina Angelika „stoji nepomično kao lutka" — tableau vivant koji simbolizira paralizu svjedoka.'},

  // === STILSKA SREDSTVA (10) ===
  {kat:'stil',term:'Simbol',def:'<strong>Konkretni element s prenesenim značenjem.</strong> Glembajevi: <em>portreti</em> = obiteljsko prokletstvo, <em>škare</em> = oružje, <em>noć</em> = moralni mrak, <em>zlatar</em> = izvorni grijeh.'},
  {kat:'stil',term:'Metafora',def:'<strong>Preneseno značenje.</strong> „Borim se protiv Glembaya u sebi" (Leone). „Dekorativni pano civilizacije u agoniji" (Krleža o djelu). Često sintetska.'},
  {kat:'stil',term:'Ironija',def:'<strong>Govori jedno, misli drugo.</strong> Leone u razgovoru s Fabriczyjem (hvali glembajevske dobročinitelje, a razotkriva ih kao ubojice). „Cvrkut ptica" kao finalno kontrapuntna ironija.'},
  {kat:'stil',term:'Kontrast',def:'<strong>Suprotstavljanje.</strong> Glavni: <em>privid ↔ istina</em>. Sporedni: umjetnost ↔ materijalizam, razum ↔ instinkt, pojedinac ↔ klasa, život ↔ smrt, hrvatski ↔ njemački.'},
  {kat:'stil',term:'Hiperbola',def:'<strong>Pretjerivanje.</strong> Leoneove optužbe u II. činu, baruničini izljevi u III. činu. Dramska intenzivnost kroz pretjerivanje.'},
  {kat:'stil',term:'Aluzija',def:'<strong>Upućivanje na drugo djelo/osobu.</strong> Kant, Euler, logika (I. čin — Leoneov razgovor s Angelikom). Barboczyjeva (fiktivna legenda). Intelektualni kontekst lika.'},
  {kat:'stil',term:'Personifikacija',def:'<strong>Pripisivanje ljudskih osobina neživom.</strong> Portreti u Glembajevima „govore" — likovi reagiraju na njih kao na suučesnike. Animira simboliku prokletstva.'},
  {kat:'stil',term:'Dvojezičnost (hrv./njem.)',def:'<strong>Miksanje hrvatskog i njemačkog.</strong> Glembajevi spontano prelaze u njemački („Stundenhotel", „Ltd.", njemačke fraze) — autentičan govor zagrebačke buržoazije prije 1. svj. rata.'},
  {kat:'stil',term:'Leksik austrougarske buržoazije',def:'<strong>Specifičan registar govora</strong> — mješavina hrv. i njem., latinizmi, klasni izrazi („gospon doktor", „frau barunica"). Dio stilske autentičnosti.'},
  {kat:'stil',term:'Apostrofa',def:'<strong>Oslovljavanje.</strong> Manje izražena u Glembajevima — ali prisutna u dramatskim apeli (Leone Angeliki, barunica Leoneu u III. činu).'},

  // === LIKOVI (10) ===
  {kat:'likovi',term:'Leone Glembay',def:'<strong>Glavni lik.</strong> 38 god., slikar, dr. filozofije, sin Ignjata iz prvog braka. <em>11 godina u Europi.</em> Neurotičan, labilan. Ključna izjava: „borim se protiv Glembaya u sebi". Završi kao ubojica.'},
  {kat:'likovi',term:'Ignjat Glembay',def:'<strong>Glava obitelji.</strong> 69 god., bankar, direktor Glembay Ltd., Leoneov otac. Predstavlja materijalizam i patrijarhalni autoritet. <em>Umire od infarkta u 2. činu</em> kad shvati istinu o ženi.'},
  {kat:'likovi',term:'Barunica Charlotte Castelli-Glembay',def:'<strong>Ignjatova druga žena (maćeha)</strong>, 45 god. „Beatrice" u tekstu. Bivša zabavljačica, manipulativna, preljubnica (sa Silberbrandtom). Optužena za smrti u obitelji. <strong>Leone je ubije škarama.</strong>'},
  {kat:'likovi',term:'Sestra Angelika Glembay',def:'<strong>Dominikanka, udovica brata Ivana</strong>, 29 god. Rođena <em>barunica Zygtmuntowicz Beatrix</em>. Suprug Ivan se ubio. <em>Leoneova platonska ljubav.</em> Na kraju III. čina „stoji kao lutka".'},
  {kat:'likovi',term:'Titus Andronicus Fabriczy-Glembay',def:'<strong>Bratić Ignjata</strong>, 69 god., umirovljeni veliki župan. Konzervativan, štiti čast obitelji. Iznosi <em>Barboczyjevu legendu</em> u I. činu.'},
  {kat:'likovi',term:'Dr. Silberbrandt',def:'<strong>Ispovjednik barunice Castelli.</strong> Klerik. <em>Tajni ljubavnik barunice</em>. Lažljivac, hipokrit. Leone ga razotkriva u I. činu šapatom.'},
  {kat:'likovi',term:'Dr. Paul Altmann',def:'<strong>Liječnik obitelji.</strong> Predstavnik medicinske racionalnosti. Leone se sukobljava s njim (kritika prava na ljudska tijela i duše). Prisutan kada Ignjat umire.'},
  {kat:'likovi',term:'Dr. Puba Fabriczy',def:'<strong>Mladi pravni zastupnik obitelji.</strong> Brani Glembajeve od socijalističkog tiska zbog slučaja Rupert-Canjeg. Predstavlja generaciju koja nasljeđuje glembajevštinu.'},
  {kat:'likovi',term:'Alisa, Ivan, majka Leoneova',def:'<strong>Pokojni članovi</strong> — ne pojavljuju se na sceni. Alisa (sestra) — sumnjivo „samoubojstvo". Ivan (stariji brat) — samoubojstvo. Majka — samoubojstvo. Dokazi glembajevskog prokletstva.'},
  {kat:'likovi',term:'Stara Barboczyjeva',def:'<strong>Plemenitašica udana za jednog Glembaya</strong> (samo kao <em>legenda</em>, ne pojavljuje se). Izrekla legendu: „Svi Glembajevi su prokleti — ubojice i varalice". Ključni motiv cijele drame.'},

  // === MODERNA / AVANGARDA (8) ===
  {kat:'moderna',term:'Hrvatska moderna',def:'<strong>Književni pokret 1895.–1914.</strong> Simbolizam, impresionizam, secesija. Predstavnici: Matoš, Vidrić, Nazor, A. G. Matoš, Kranjčević. Nasljeđuje realizam, prethodi avangardi.'},
  {kat:'moderna',term:'Ekspresionizam',def:'<strong>Avangardni pokret</strong> ranog 20. st. — naglasak na intenzivnom, deformiranom doživljaju. Krležina rana faza (1914.-1925.) = ekspresionizam. A. B. Šimić = hrv. ekspresionistički pjesnik.'},
  {kat:'moderna',term:'Avangarda',def:'<strong>Književni pokreti 1. polovice 20. st.</strong> koji razbijaju tradicionalnu formu — ekspresionizam, futurizam, dadaizam, nadrealizam. Krleža prolazi kroz avangardu.'},
  {kat:'moderna',term:'Antun Gustav Matoš',def:'<strong>1873.–1914.</strong> Ključna figura hrv. moderne. Pjesme, novele, kritike. Urbanost, estetizam. U katalogu matura: <em>Camao, Cvijet sa raskršća, Kip domovine leta 188*</em>.'},
  {kat:'moderna',term:'Vladimir Nazor',def:'<strong>1876.–1949.</strong> Pjesnik moderne — poezija prirode, mitologije, heroizma. ispitno djelo 2026 (izbor iz poezije).'},
  {kat:'moderna',term:'Silvije Strahimir Kranjčević',def:'<strong>1865.–1908.</strong> Prelazni pjesnik između realizma i moderne. Biblijske/filozofske teme. ispitno djelo 2026 (izbor iz poezije).'},
  {kat:'moderna',term:'Antun Branko Šimić',def:'<strong>1898.–1925.</strong> Hrv. ekspresionistički pjesnik. Kratka poezija, intenzivni doživljaj. ispitno djelo 2026 (izbor iz poezije).'},
  {kat:'moderna',term:'Tin Ujević',def:'<strong>1891.–1955.</strong> Pjesnik moderne/avangarde. Simbolizam + ekspresionizam. Najveći hrv. pjesnik 20. st. ispitno djelo 2026 (izbor iz poezije).'},

  // === KRLEŽIN OPUS (9) ===
  {kat:'krleza',term:'Miroslav Krleža',def:'<strong>1893.–1981.</strong> Najznačajniji hrv. književnik 20. st. Rođen i umro u Zagrebu. Opus: 40+ svezaka. Direktor Leksikografskog zavoda od 1950.'},
  {kat:'krleza',term:'Simbolističko-ekspresionistička faza',def:'<strong>Krležina 1. dramska faza</strong> (1914.-1925.) — ciklus legendi. Drame: <em>Legenda, Maskerata, Kraljevo, Kristofor Kolumbo, Michelangelo, Adam i Eva</em>. Avangardni eksperiment.'},
  {kat:'krleza',term:'Ratni ciklus (2. faza)',def:'<strong>Krležina 2. dramska faza</strong> (1922.-1932.) — ekspresionističko-realistička. Drame: <em>Galicija</em> (U logoru), <em>Vučjak, Golgota</em>. Tema: raspad sustava, ratna trauma.'},
  {kat:'krleza',term:'Aretej',def:'<strong>Krležina posljednja drama</strong> (1959.) — „Legenda o svetoj Ancili, rajskoj ptici". Povratak avangardi nakon Glembajevskog ciklusa.'},
  {kat:'krleza',term:'Povratak Filipa Latinovicza',def:'<strong>Krležin najvažniji roman</strong> (1932.). Ekspresionistička proza. Tema: intelektualac koji se vraća u rodni kraj. Paralela s Leoneom (obojica slikari, obojica se vraćaju).'},
  {kat:'krleza',term:'Na rubu pameti',def:'<strong>Krležin roman</strong> (1938.). Anonimni intelektualac „na rubu pameti". Gorka kritika malograđanskog društva. Krležin najradikalniji oblik.'},
  {kat:'krleza',term:'Balade Petrice Kerempuha',def:'<strong>Krležina pjesnička zbirka</strong> (1936.). Vrhunac njegove poezije. <strong>Pisano kajkavskim dijalektom.</strong> Petrica Kerempuh kao narodski lik. Ekspresivna kritika društva.'},
  {kat:'krleza',term:'Zastave',def:'<strong>Krležin najopsežniji roman</strong> (1959.-1968.) u 5 svezaka. Panorama Hrvatske 1912.-1922. Glavni lik: Kamilo Emerički. Sinteza Krležinog opusa.'},
  {kat:'krleza',term:'Leksikografski zavod Miroslav Krleža',def:'<strong>Institucija u Zagrebu</strong> (danas LZ MK). Krleža imenovan direktorom 1950., ostaje do smrti. Vodi Enciklopediju Jugoslavije, Hrvatsku enciklopediju. Zove se po njemu.'},

  // === SUVREMENI AUTORI (8) ===
  {kat:'autori',term:'Henrik Ibsen',def:'<strong>1828.–1906.</strong> Norveški dramatičar. Uzor Krleži za Glembajeve. Drame: <em>Duhovi, Lutkina kuća, Hedda Gabler</em>. Skandinavska škola: retroaktivnost, psihologija.'},
  {kat:'autori',term:'Ranko Marinković',def:'<strong>1913.–2001.</strong> Hrv. pisac 2. polovice 20. st. ispitno djelo 2026: <em>Kiklop</em> (1965., D22). Intelektualac-outsider kao kod Krleže.'},
  {kat:'autori',term:'Vjenceslav Novak',def:'<strong>1859.–1905.</strong> Hrv. realist. Glavno djelo: <em>Posljednji Stipančići</em> (1899., D16). Prethodnik Glembajevih — propast hrv. građanske obitelji. ispitno djelo 2026.'},
  {kat:'autori',term:'Dostojevski',def:'<strong>Fjodor Mihajlovič Dostojevski</strong> (1821.-1881.). Ruski romanopisac. ispitno djelo 2026: <em>Zločin i kazna</em> (1866., D07). Paralela s Glembajevima: pitanje filozofije ubojstva.'},
  {kat:'autori',term:'Kafka',def:'<strong>Franz Kafka</strong> (1883.-1924.). Praški njemački pisac. ispitno djelo 2026: <em>Preobražaj</em> (1915., D08). Paralela: raspad pojedinca u obitelji.'},
  {kat:'autori',term:'Camus',def:'<strong>Albert Camus</strong> (1913.-1960.). Francuski pisac. ispitno djelo 2026: <em>Stranac</em> (1942., D09). Paralela s Leoneom: apsurd, otuđenje, ubojstvo.'},
  {kat:'autori',term:'Šoljan, Slamnig, Mihalić',def:'<strong>Hrv. pisci „krugovaši"</strong> (1950.-e). Nasljednici Krležinog modernističkog duha. Prva hrv. generacija nakon Krleže.'},
  {kat:'autori',term:'DHK (Društvo hrvatskih književnika)',def:'<strong>Udruga hrv. pisaca</strong> osnovana 1900. Glembajevi objavljeni 1928. u nakladi DHK. Glavni izdavač hrv. književnosti.'},
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
  try { localStorage.setItem('mt.hrv.h16.prog', p); } catch(e){}
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

export default function H16Chapter() {
  const containerRef = useRef(null);
  const stylesInjectedRef = useRef(false);
  const scriptsExecutedRef = useRef(false);

  useEffect(() => {
    // Inject styles (once per page mount)
    if (!stylesInjectedRef.current && STYLES_CSS) {
      const styleEl = document.createElement('style');
      styleEl.id = `chapter-styles-H16`;
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
        console.error(`[H16] Script execution error:`, err);
      }
    }

    return () => {
      // Cleanup on unmount
      const styleEl = document.getElementById(`chapter-styles-H16`);
      if (styleEl) styleEl.remove();
      stylesInjectedRef.current = false;
      scriptsExecutedRef.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="chapter-h16"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}
export const HRV_POGAVLJE_16 = null
