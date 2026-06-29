/**
 * H21 — H21 · Sintaksa — Maturiraj.hr · matura iz hrvatskog
 * Auto-generated from Maturiraj_Hrvatski_H21.html
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
  code: 'H21',
  title: 'H21 · Sintaksa — Maturiraj.hr · matura iz hrvatskog',
  description: 'H21 Sintaksa hrvatskoga jezika — rečenični članovi, vrste rečenica, složene rečenice, sintaktički parser i AI tutor. Priprema za maturu 2026.',
  canonical: 'https://maturiraj.hr/hrvatski/h21-sintaksa',
  ogImage: 'https://maturiraj.hr/og/h21.png',
};

const BODY_HTML = `<noscript>
    <div style="padding:24px;text-align:center;background:#dc322f;color:white;font-family:system-ui">
      <strong>JavaScript je potreban za rad ove stranice.</strong><br>
      Maturiraj.hr koristi interaktivne značajke (kviz, AI tutor, parser). Molim te omogući JavaScript u postavkama preglednika.
    </div>
  </noscript>
<div class="read-progress" aria-hidden="true"><div class="read-progress-bar" id="rpbar"></div></div>
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
  <a class="sb-item" data-code="h16" href="/skripte/hrv/h16"><span class="sb-dot"></span>H16 · Krleža i moderna</a>

  <!-- ══ STIL I IZRAZ ══ -->
  <div class="sb-era">// Stil i izraz</div>
  <a class="sb-item" data-code="h17" href="/skripte/hrv/h17"><span class="sb-dot"></span>H17 · Stilske figure</a>
  <a class="sb-item" data-code="h18" href="/skripte/hrv/h18"><span class="sb-dot"></span>H18 · Versifikacija</a>

  <!-- ══ JEZIKOSLOVLJE ══ -->
  <div class="sb-era">// Jezikoslovlje</div>
  <a class="sb-item" data-code="h19" href="/skripte/hrv/h19"><span class="sb-dot"></span>H19 · Fonetika i fonologija</a>
  <a class="sb-item" data-code="h20" href="/skripte/hrv/h20"><span class="sb-dot"></span>H20 · Morfologija</a>
  <a class="sb-item active" aria-current="page" data-code="h21" href="/skripte/hrv/h21"><span class="sb-dot"></span>H21 · Sintaksa</a>
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
  <a class="sb-item sb-d" data-code="d21" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D21 · Krleža · Glembajevi</a>
  <a class="sb-item sb-d" data-code="d22" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D22 · Marinković · Kiklop</a>

  <div class="sb-footer" id="sb-footer">
    <span id="sb-footer-pos">21 / 28</span> · <span id="sb-footer-title">sintaksa</span>
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
    <span class="bc-cur">H21 · Sintaksa</span>
    <span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-tab" id="bc-tab">Teorija</span>
  </div>

  <!-- COUNTDOWN + ACTIONS -->
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:20px">
    <div class="countdown" style="margin-bottom:0">
      ⏳ Do ispita HRV: <strong id="cd-days">—</strong> dana &nbsp;<span style="font-size:9px;color:var(--t3)">(15. 6. 2026.)</span>
    </div>
    <button class="fcb" onclick="window.print()" style="font-size:10px" title="Print / PDF (Ctrl+P)">🖨 Print</button>
    <button class="fcb" onclick="navigator.share?navigator.share({title:'H21 · Sintaksa',url:window.location.href}):navigator.clipboard.writeText(window.location.href)" style="font-size:10px" title="Podijeli">📤 Dijeli</button>
    <span style="font-family:var(--mono);font-size:9px;color:var(--t3);margin-left:auto">
      <span class="kbd">←</span> <span class="kbd">→</span> tabovi · <span class="kbd">?</span> pomoć
    </span>
  </div>

  <!-- HERO -->
  <header class="hero">
    <div class="hero-chapter">H21 &nbsp;·&nbsp; Jezikoslovlje &nbsp;·&nbsp; Sintaksa</div>
    <h1 class="hero-title">Sintaksa<br><span>rečenica i sintagme</span></h1>
    <p class="hero-sub">
      <strong>Sustavni prikaz hrvatske sintakse.</strong> <em>6 rečeničnih članova</em> (SPO-AAP), <em>3 klasifikacije rečenica</em>, <em>složene rečenice</em> (6 nezavisnih + 12 zavisnih), <em>pravila zareza</em>. <strong>Sintaktički parser</strong> — upišeš rečenicu, dobiješ analizu članova + tip složene + tree visualizer. <strong>AI tutor</strong>, <em>70 pojmova</em>, <em>30 kviz pitanja</em>, <strong>A4 referentna tablica</strong> za print.
    </p>
    <div class="hero-chips">
      <span class="hchip br">🏗️ 6 rečeničnih članova</span>
      <span class="hchip go">🌳 12 zavisnih</span>
      <span class="hchip te">🔬 Sintaktički parser</span>
      <span class="hchip pa">🤖 AI tutor</span>
      <span class="hchip re">★ NCVVO ključna tema</span>
    </div>
  </header>

  <!-- TABS -->
  <div class="tabs" role="tablist" aria-label="Dijelovi poglavlja">
    <button class="tab on" id="tab0" onclick="sw(0)" role="tab" aria-selected="true" aria-controls="l0">📖 Teorija<span class="tab-done" id="td0"></span></button>
    <button class="tab" id="tab1" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">🏗️ Rečenični članovi<span class="tab-done" id="td1"></span></button>
    <button class="tab" id="tab2" onclick="sw(2)" role="tab" aria-selected="false" aria-controls="l2">📐 Vrste rečenica<span class="tab-done" id="td2"></span></button>
    <button class="tab" id="tab3" onclick="sw(3)" role="tab" aria-selected="false" aria-controls="l3">🔗 Složene rečenice<span class="tab-done" id="td3"></span></button>
    <button class="tab" id="tab4" onclick="sw(4)" role="tab" aria-selected="false" aria-controls="l4">📚 Pojmovnik<span class="tab-done" id="td4"></span></button>
    <button class="tab" id="tab5" onclick="sw(5)" role="tab" aria-selected="false" aria-controls="l5">🔬 Parser<span class="tab-done" id="td5"></span></button>
    <button class="tab" id="tab6" onclick="sw(6)" role="tab" aria-selected="false" aria-controls="l6">🧠 Kviz<span class="tab-badge">30</span><span class="tab-done" id="td6"></span></button>
    <button class="tab" id="tab7" onclick="sw(7)" role="tab" aria-selected="false" aria-controls="l7">📊 Referentna tablica</button>
  </div>

  <!-- ══════════════════════════════════════
       TAB 0 · TEORIJA
  ══════════════════════════════════════ -->
  <div class="layer on" id="l0" role="tabpanel" tabindex="0">
    <!-- ═══════════════════════════════════
         20 NAJČEŠĆIH NCVVO GREŠAKA · SINTAKSA
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:36px"><div class="sec-line"></div><div class="sec-badge">⚠️ 20 najčešćih NCVVO grešaka</div><div class="sec-line"></div></div>
    
    <div style="padding:14px 16px;background:rgba(224,82,82,.04);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r2);margin:14px 0">
      <div style="font-size:13px;line-height:1.6;color:var(--t2)">
        <strong style="color:var(--red)">Sustavni popis sintaktičkih grešaka iz prošlih NCVVO mature.</strong> Pogledaj prije mature i izbjegavaj ih svjesno.
      </div>
    </div>
    
    <div style="display:grid;gap:8px;margin:16px 0">
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">1.</span>Subjekt nije u nominativu</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)">Subjekt MORA biti u N (1. padež). „Bratu (D) se ne sviđa film" — „bratu" NIJE subjekt (je dativ). Subjekt je tu skrivena „nešto" (pasivna konstrukcija). Logički subjekt ne računa se u gramatički subjekt!</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">2.</span>Predikat = samo glagol (greška!)</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)">Predikat može biti <strong>složen</strong>. „Marija je čitala knjigu" — predikat je „je čitala" (perfekt = pomoćni + glag. pridjev radni). „Marija mora pisati" — „mora pisati" (modalni + infinitiv). Sve je <strong>1 predikat</strong>!</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">3.</span>Brojanje rečenica = brojanje predikata</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)">Broj rečenica = broj <strong>predikata</strong> (ne zareza, ne glagola)! „Učim, pišem i čitam" → 3 predikata = 3 rečenice. „Učio sam i položio" → 2 predikata = 2 rečenice. Infinitiv NIJE predikat.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">4.</span>Izravni vs. neizravni objekt</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Izravni:</strong> A bez prijedloga (pišem knjigu = A). <strong>Neizravni:</strong> svi ostali padeži (pomažem bratu = D, sjećam se ljeta = G). Trik: postavi pitanje. Koga? Što? = izravni. Komu? Čemu? Od koga? = neizravni.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">5.</span>Atribut vs. apozicija — kad zarezi</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Atribut</strong> = pridjev (lijepa knjiga) — bez zareza. <strong>Apozicija</strong> = imenica koja objašnjava drugu imenicu (Ivan, moj prijatelj, čita) — UVIJEK zarezi sa obje strane!</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">6.</span>"Da" — 5 različitih vrsta zavisnih!</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Veznik „da" može uvoditi 5 vrsta:</strong> objektnu („vjerujem da..."), namjernu („učim da..."), posljedičnu („tako da..."), pogodbenu („da imam novca"), subjektnu („žao mi je da..."). Najvažnija sintaktička zamka!</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">7.</span>Brkanje uzročne i posljedične zavisne</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Uzročna:</strong> uzrok („Učim jer želim položiti" — uzrok je želja). <strong>Posljedična:</strong> posljedica („Toliko sam umoran da spavam" — posljedica umora je spavanje). Razlika: uzrok dolazi „PRIJE", posljedica „POSLIJE".</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">8.</span>Posljedična „da" uz „toliko/tako" — STO POSTO!</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)">Ako u glavnoj rečenici imaš „toliko" ili „tako", a iza dolazi „da" — to je <strong>UVIJEK posljedična zavisna</strong>. „Toliko je umoran da spava." = posljedična. Ne objektna (nije pitanje "umoran ŠTO?"), ne namjerna (nije svrha).</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">9.</span>Pogodbena: "ako" vs. "da" + kondicional</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Stvarni uvjet:</strong> „Ako budeš učio, položit ćeš." (ako = stvarni uvjet). <strong>Hipotetski:</strong> „Da imam novca, kupio bih auto." (da + kondicional = nestvarni uvjet). „Da" + kondicional = pogodbena, NE objektna!</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">10.</span>Atributna se uvodi „koji" — zarez OBAVEZAN</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>UVIJEK piši zarez pred „koji/koja/koje/koju"</strong> kad uvodi atributnu zavisnu! „Knjiga, koju čitam, je odlična." Bez zareza je interpunkcijska greška. Atributna 99% slučajeva ima „koji".</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">11.</span>Suprotna (a/ali) — UVIJEK zarez</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)">Pred „a, ali, no, nego, već" UVIJEK zarez (suprotne nezavisno složene). „Učim, ali sam umoran." „Nije pisao, nego je crtao." Bez zareza = greška.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">12.</span>Sastavna (i/pa/te) — BEZ zareza</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)">Pred „i, pa, te, ni, niti, ili" obično <strong>NEMA zareza</strong>. „Učim i pišem zadaću." „Otišao je pa došao." Iznimke: ako su rečenice duge ili treba pauza za jasnoću.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">13.</span>Brkanje subjektne i objektne zavisne</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Subjektna:</strong> cijela zavisna = subjekt glavne („Tko rano rani, dvije sreće grabi" — tko? je subjekt grabi). <strong>Objektna:</strong> cijela zavisna = objekt („Vjerujem da si u pravu" — vjerujem ŠTO? = da si u pravu).</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">14.</span>Glagoli koji ne uzimaju A: pomoći, vjerovati, prijetiti</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>S DATIVOM:</strong> pomagati, vjerovati, prijetiti, savjetovati. „Pomažem mu (D)", ne „pomažem ga (A)". <strong>S GENITIVOM:</strong> sjećati se, bojati se, stidjeti se. „Bojim se mraka (G)".</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">15.</span>"Hoćeš čaj ili kavu?" — PROSTA, ne rastavna!</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)">„Hoćeš čaj ili kavu?" ima <strong>1 predikat</strong> (hoćeš), 2 objekta. To je PROSTA rečenica! „Ili pišeš ili crtaš" — 2 predikata = SLOŽENA rastavna. Brojaj predikate!</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">16.</span>Imenski predikat: subjekt + kopula + imenska riječ</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)">„Marija je učenica" — predikat je <strong>"je učenica"</strong> (kopula „je" + imenska riječ „učenica"). Ne samo „je"! Imenska riječ može biti imenica/pridjev/zamjenica/broj. Često se zaboravi.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">17.</span>Priložna oznaka — ne isto što i objekt</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Objekt:</strong> što? koga? komu? — predmet radnje. <strong>P.O.:</strong> gdje? kada? kako? zašto? — okolnosti radnje. „Idem u školu" — „u školu" je P.O. mjesta (kuda?), ne objekt!</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">18.</span>"Mislim, dakle jesam" — nezavisna, NE zavisna</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)">„Mislim, dakle jesam" je <strong>nezavisno složena zaključna</strong> (Descartesova). Veznik „dakle" izvodi zaključak iz prve rečenice. Nije zavisna uzročna („jer" bi bila uzročna).</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">19.</span>Negacija u hrvatskom: više negativaca POJAČA nijek</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)">„Nikad nisam ništa rekao" je gramatički ISPRAVNO u hrvatskom (3 negativna elementa pojačavaju nijek). U engleskom bi se ukidalo („I have never said anything"). Hrvatska niječna rečenica može imati više negacija.</div>
      </details>
      
      <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:13.5px"><span style="color:var(--red);margin-right:8px">20.</span>Eliptične rečenice: "A ti?" — to je rečenica!</summary>
        <div style="margin-top:8px;font-size:12.5px;line-height:1.6;color:var(--t2)"><strong>Eliptična</strong> = nepotpuna ali smislena (predikat se podrazumijeva). „A ti?" → „A što ti misliš?". „Bravo!" → bezglagolska. Eliptične rečenice imaju subjekt ali NEMAJU eksplicitan predikat — kontekst ga čini jasnim.</div>
      </details>
      
    </div>

    " role="tabpanel" tabindex="0">
    <!-- BOX-INT — Što učiš u H21 -->
    <div class="box-int">
      <div class="box-int-lbl">🎯 Što učiš u H21</div>
      <div class="box-int-txt">
        <strong>Sintaksa</strong> je grana gramatike koja proučava <strong>odnose riječi u rečenici</strong> — kako se riječi slažu u sintagme, kako sintagme tvore rečenice, i kako se rečenice povezuju u složene cjeline. Dok je <strong>morfologija (H20)</strong> bila o <em>oblicima riječi</em>, sintaksa je o <em>položaju i ulozi</em> tih riječi u rečenici.
      </div>
    </div>

    <!-- HIJERARHIJA JEZIKA (update — sintaksa highlighted) -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">🗺️ Gdje je sintaksa u hrvatskom jeziku?</div><div class="sec-line"></div></div>
    
    <div style="padding:24px;background:linear-gradient(135deg,rgba(233,180,70,.04),transparent);border:1px solid var(--bd);border-radius:var(--r2);margin:16px 0;text-align:center">
      <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--t3);margin-bottom:16px">HIJERARHIJA JEZIČNIH RAZINA</div>
      
      <div style="display:flex;flex-direction:column;gap:8px;max-width:600px;margin:0 auto">
        <!-- Level 1 -->
        <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);text-align:left">
          <div style="flex-shrink:0;width:36px;height:36px;background:rgba(74,144,217,.15);border:1.5px solid var(--blue);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px">🔊</div>
          <div style="flex:1">
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px">Fonetika / fonologija <span style="font-family:var(--mono);font-size:10px;color:var(--blue);margin-left:6px">H19</span></div>
            <div style="font-size:11px;color:var(--t3)">Glasovi — najmanji dijelovi (fonemi)</div>
          </div>
        </div>
        <div style="font-size:14px;color:var(--t3)">↓</div>
        
        <!-- Level 2 -->
        <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);text-align:left">
          <div style="flex-shrink:0;width:36px;height:36px;background:rgba(233,180,70,.1);border:1.5px solid var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px">📚</div>
          <div style="flex:1">
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px">Morfologija <span style="font-family:var(--mono);font-size:10px;color:var(--gold);margin-left:6px">H20 · PRETHODNO</span></div>
            <div style="font-size:11px;color:var(--t3)">Oblici riječi (sklanjanje, konjugacija, tvorba)</div>
          </div>
        </div>
        <div style="font-size:14px;color:var(--t3)">↓</div>
        
        <!-- Level 3 - SINTAKSA (highlighted) -->
        <div style="display:flex;align-items:center;gap:12px;padding:14px;background:rgba(233,180,70,.12);border:2px solid var(--gold);border-radius:var(--r1);text-align:left;box-shadow:0 4px 16px rgba(233,180,70,.15)">
          <div style="flex-shrink:0;width:36px;height:36px;background:rgba(233,180,70,.25);border:1.5px solid var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px">🔗</div>
          <div style="flex:1">
            <div style="font-family:var(--display);font-weight:700;color:var(--gold);font-size:15px">SINTAKSA <span style="font-family:var(--mono);font-size:10px;color:var(--gold);margin-left:6px">H21 · OVDJE SI</span></div>
            <div style="font-size:11px;color:var(--t2)">Odnosi riječi u rečenici — rečenični članovi, vrste rečenica, složene rečenice</div>
          </div>
        </div>
        <div style="font-size:14px;color:var(--t3)">↓</div>
        
        <!-- Level 4 -->
        <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);text-align:left">
          <div style="flex-shrink:0;width:36px;height:36px;background:rgba(176,107,33,.1);border:1.5px solid var(--bronze);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px">📖</div>
          <div style="flex:1">
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px">Leksikologija / semantika <span style="font-family:var(--mono);font-size:10px;color:var(--bronze);margin-left:6px">H22+</span></div>
            <div style="font-size:11px;color:var(--t3)">Značenje riječi — rječnik, idiomi, semantička polja</div>
          </div>
        </div>
        <div style="font-size:14px;color:var(--t3)">↓</div>
        
        <!-- Level 5 -->
        <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);text-align:left">
          <div style="flex-shrink:0;width:36px;height:36px;background:rgba(176,107,33,.08);border:1.5px solid var(--bronze);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px">📜</div>
          <div style="flex:1">
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px">Stilistika / pragmatika <span style="font-family:var(--mono);font-size:10px;color:var(--bronze);margin-left:6px">H22+</span></div>
            <div style="font-size:11px;color:var(--t3)">Uporaba jezika u kontekstu — stilovi, figure, diskurs</div>
          </div>
        </div>
      </div>
      
      <div style="margin-top:20px;padding:12px 16px;background:rgba(80,200,120,.06);border-left:3px solid var(--green);border-radius:var(--r1);text-align:left;max-width:600px;margin-left:auto;margin-right:auto">
        <strong style="color:var(--green)">💡 Zašto je sintaksa ključna?</strong> Bez sintakse riječi su samo lista. Sintaksa daje <strong>strukturu</strong> koja nosi značenje. <em>„Pas ujeo čovjeka"</em> vs. <em>„Čovjeka ujeo pas"</em> — iste riječi, različita sintaksa, različito značenje (redoslijed + padežni nastavci).
      </div>
    </div>

    <!-- HIJERARHIJA JEZIČNIH JEDINICA (sintaktička razina) -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🧬 Hijerarhija sintaktičkih jedinica</div><div class="sec-line"></div></div>
    
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);margin:16px 0">
      <div style="text-align:center;margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--t3);margin-bottom:8px">OD MANJEG PREMA VEĆEM</div>
        <div style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--gold);margin-bottom:4px">riječ → sintagma → rečenica → tekst</div>
        <div style="font-size:11px;color:var(--t3);font-style:italic">svaka razina kombinira jedinice s razine ispod</div>
      </div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px;margin-top:20px">
        <!-- Riječ -->
        <div style="padding:14px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--blue);margin-bottom:6px">1 · RIJEČ</div>
          <div style="font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:6px">najmanja jedinica</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.5">Osnovni gradivni element. Ima oblik i značenje. H20 → vrste riječi.<br><em style="color:var(--t3)">primjer: Marija, lijepa, knjiga</em></div>
        </div>
        
        <!-- Sintagma -->
        <div style="padding:14px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--gold);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--gold);margin-bottom:6px">2 · SINTAGMA</div>
          <div style="font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:6px">skupina riječi</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.5">2+ riječi koje čine značenjsku cjelinu, ali nisu cijela rečenica. Nema predikat.<br><em style="color:var(--t3)">primjer: „lijepa knjiga", „vrlo brzo", „u školi"</em></div>
        </div>
        
        <!-- Rečenica -->
        <div style="padding:14px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--bronze);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--bronze);margin-bottom:6px">3 · REČENICA</div>
          <div style="font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:6px">iskaz sa predikatom</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.5">Cjelovita misao. MORA imati <strong>predikat</strong> (glagol u ličnom obliku). Može biti prosta ili složena.<br><em style="color:var(--t3)">primjer: „Marija čita."</em></div>
        </div>
        
        <!-- Tekst -->
        <div style="padding:14px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--green);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--green);margin-bottom:6px">4 · TEKST</div>
          <div style="font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:6px">povezane rečenice</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.5">2+ rečenica koje zajedno čine smislenu cjelinu (odlomak, poglavlje, esej). Tekst ima kohezija i koherenciju.<br><em style="color:var(--t3)">tema za H22 (stilistika)</em></div>
        </div>
      </div>
      
      <div style="margin-top:16px;padding:12px 16px;background:rgba(233,180,70,.06);border-left:3px solid var(--gold);border-radius:var(--r1)">
        <strong style="color:var(--gold)">🎯 Ključno:</strong> rečenica je <strong>najmanja potpuna sintaktička jedinica</strong>. Sve ispod (sintagma, riječ) je dio rečenice. Sve iznad (tekst) je skupina rečenica.
      </div>
    </div>

    <!-- SINTAGMA VS. REČENICA (ključna razlika) -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">⚖️ Sintagma vs. rečenica — ključna razlika</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);margin:12px 0">
      <div style="font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:14px">
        Mnogi brkaju sintagmu s rečenicom. <strong>Jedan test</strong> rješava sve: ima li <strong>predikat</strong> (glagol u ličnom obliku)?
      </div>
      
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div style="padding:16px;background:var(--bg);border:2px solid var(--blue);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--blue);margin-bottom:8px">SINTAGMA (bez predikata)</div>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--t2)">
            <div>✓ <em>„visoka planina"</em></div>
            <div>✓ <em>„jako hladno"</em></div>
            <div>✓ <em>„u crvenoj knjizi"</em></div>
            <div>✓ <em>„gledati film"</em> (infinitiv ≠ lični oblik)</div>
          </div>
          <div style="margin-top:10px;font-size:11px;color:var(--t3);font-style:italic">nema glagola u ličnom obliku</div>
        </div>
        
        <div style="padding:16px;background:var(--bg);border:2px solid var(--gold);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--gold);margin-bottom:8px">REČENICA (sa predikatom)</div>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--t2)">
            <div>✓ <em>„Planina <strong>je visoka</strong>."</em></div>
            <div>✓ <em>„Jako mi <strong>je</strong> hladno."</em></div>
            <div>✓ <em>„Čitam <strong>u</strong> crvenoj knjizi."</em></div>
            <div>✓ <em>„Gledamo film."</em></div>
          </div>
          <div style="margin-top:10px;font-size:11px;color:var(--t3);font-style:italic">ima glagol u ličnom obliku</div>
        </div>
      </div>
    </div>

    
    <!-- UPGRADE: NAJČEŠĆE GREŠKE NA MATURI (SINTAKSA) -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">⚠️ Najčešće greške na maturi · TOP 8 (sintaksa)</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(224,82,82,.04),transparent);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r2);margin:16px 0">
      <div style="font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:14px">
        <strong>Realne zamke iz NCVVO testova</strong> (sintaktičke) — ako napraviš ove greške, izgubiš 5-8 bodova. Pažljivo prouči svaku.
      </div>
      
      <div style="display:grid;gap:10px">
        
        <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;display:flex;justify-content:space-between;align-items:center">
            <span><span style="display:inline-block;background:var(--red);color:#fff;padding:2px 7px;border-radius:10px;font-size:10px;margin-right:8px">1</span> Prosta ili složena rečenica? — broj predikata</span>
            <span style="color:var(--t3)">▾</span>
          </summary>
          <div style="margin-top:10px;font-size:13px;line-height:1.65;color:var(--t2)">
            <strong>Pravilo:</strong> broj rečenica = broj predikata.<br><br>
            ✅ „Marija čita knjigu." — <strong>1 predikat</strong> (čita) = <strong>prosta</strong><br>
            ✅ „Marija čita i piše." — <strong>2 predikata</strong> (čita, piše) = <strong>složena</strong> (nezav. sastavna)<br>
            ✅ „Marija čita knjigu koju je posudila." — <strong>2 predikata</strong> (čita, je posudila) = <strong>složena</strong> (zav. atributna)<br><br>
            <strong style="color:var(--gold)">Trik:</strong> infinitiv NE računa kao predikat. „Želi čitati" = 1 predikat (želi).
          </div>
        </details>
        
        <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;display:flex;justify-content:space-between;align-items:center">
            <span><span style="display:inline-block;background:var(--red);color:#fff;padding:2px 7px;border-radius:10px;font-size:10px;margin-right:8px">2</span> Zarez pred „koji / koja / koje / što"</span>
            <span style="color:var(--t3)">▾</span>
          </summary>
          <div style="margin-top:10px;font-size:13px;line-height:1.65;color:var(--t2)">
            <strong>Uvijek</strong> piše se zarez pred zamjenicama koji/koja/koje/što kad uvode <strong>atributnu zavisnu rečenicu</strong>.<br><br>
            ❌ <em>„Čitam knjigu koju mi je dala."</em> — NEMA zareza<br>
            ✅ <em>„Čitam knjigu<strong>,</strong> koju mi je dala."</em><br>
            ✅ <em>„Dječak<strong>,</strong> koji sjedi u klupi<strong>,</strong> uči."</em> (obje strane zarez, umetnuta atribut.)<br><br>
            <strong style="color:var(--gold)">Iznimka:</strong> ako je ograničavajuća (essentialna) → može BEZ zareza. Ali na maturi — <strong>uvijek stavi zarez</strong>.
          </div>
        </details>
        
        <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;display:flex;justify-content:space-between;align-items:center">
            <span><span style="display:inline-block;background:var(--red);color:#fff;padding:2px 7px;border-radius:10px;font-size:10px;margin-right:8px">3</span> Zarez pred „jer / da / ako / kada"</span>
            <span style="color:var(--t3)">▾</span>
          </summary>
          <div style="margin-top:10px;font-size:13px;line-height:1.65;color:var(--t2)">
            Kad zavisna rečenica dolazi <strong>IZA</strong> glavne — <strong>uvijek zarez</strong> pred veznikom.<br><br>
            ✅ <em>„Učim<strong>,</strong> jer želim položiti maturu."</em> (uzročna)<br>
            ✅ <em>„Reći ću ti<strong>,</strong> da si zaboravio ključeve."</em> (objektna)<br>
            ✅ <em>„Doći ću<strong>,</strong> ako budeš tamo."</em> (pogodbena)<br><br>
            Kad zavisna dolazi <strong>PRIJE</strong> glavne — zarez <strong>između</strong> njih:<br>
            ✅ <em>„Ako budeš tamo<strong>,</strong> doći ću."</em>
          </div>
        </details>
        
        <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;display:flex;justify-content:space-between;align-items:center">
            <span><span style="display:inline-block;background:var(--red);color:#fff;padding:2px 7px;border-radius:10px;font-size:10px;margin-right:8px">4</span> Subjekt u instrumentalu? NEMA ga</span>
            <span style="color:var(--t3)">▾</span>
          </summary>
          <div style="margin-top:10px;font-size:13px;line-height:1.65;color:var(--t2)">
            <strong>Subjekt je UVIJEK u nominativu</strong> (ili je izostavljen — „podrazumijevan").<br><br>
            ❌ „Prijateljem je došao." — „prijateljem" je instrumental, <strong>NIJE subjekt</strong><br>
            ✅ „<strong>Prijatelj</strong> je došao." (N) — prijatelj = subjekt<br>
            ✅ „Došao je <strong>s prijateljem</strong>." (I) — prijatelj = priložna oznaka društva<br><br>
            <strong style="color:var(--gold)">Iznimka:</strong> logički subjekt u pasivnim/bezličnim rečenicama može biti u drugim padežima.<br>
            ✅ „<strong>Nama</strong> se spava." (D logički subjekt) — ali gramatički subjekt je ispušten.
          </div>
        </details>
        
        <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;display:flex;justify-content:space-between;align-items:center">
            <span><span style="display:inline-block;background:var(--red);color:#fff;padding:2px 7px;border-radius:10px;font-size:10px;margin-right:8px">5</span> Izravni vs. neizravni objekt</span>
            <span style="color:var(--t3)">▾</span>
          </summary>
          <div style="margin-top:10px;font-size:13px;line-height:1.65;color:var(--t2)">
            <strong>Izravni objekt</strong> = akuzativ (koga/što?). <strong>Neizravni</strong> = drugi padež (D, G, I, L).<br><br>
            ✅ <em>„Dao sam <strong>knjigu</strong> (A, izravni) <strong>prijatelju</strong> (D, neizravni)."</em><br>
            ✅ <em>„Sjećam se <strong>ljeta</strong> (G, neizravni)."</em> — nema izravnog<br>
            ✅ <em>„Pomagao sam <strong>bratu</strong> (D, neizravni)."</em> — glagoli pomoći/vjerovati/prijetiti idu s D!<br><br>
            <strong style="color:var(--gold)">Zamka:</strong> glagol „pomoći" koristi D (ne A!). <em>„Pomažem mu"</em> (D), ne <em>„pomažem ga"</em>.
          </div>
        </details>
        
        <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;display:flex;justify-content:space-between;align-items:center">
            <span><span style="display:inline-block;background:var(--red);color:#fff;padding:2px 7px;border-radius:10px;font-size:10px;margin-right:8px">6</span> Apozicija vs. atribut</span>
            <span style="color:var(--t3)">▾</span>
          </summary>
          <div style="margin-top:10px;font-size:13px;line-height:1.65;color:var(--t2)">
            <strong>Atribut</strong> = pridjev/zamjenica koja opisuje imenicu (KAKAV? ČIJI?).<br>
            <strong>Apozicija</strong> = IMENICA koja bliže objašnjava drugu imenicu (s istim padežom).<br><br>
            ✅ <em>„<strong>Visoki</strong> dječak" — atribut (pridjev)</em><br>
            ✅ <em>„Ivan, <strong>moj prijatelj</strong>, dolazi." — apozicija (imenica + atribut)</em><br>
            ✅ <em>„Zagreb, <strong>glavni grad Hrvatske</strong>, ima 800,000 stanovnika." — apozicija</em><br><br>
            <strong style="color:var(--gold)">Znak:</strong> apozicija je odvojena zarezima. Atribut nije.
          </div>
        </details>
        
        <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;display:flex;justify-content:space-between;align-items:center">
            <span><span style="display:inline-block;background:var(--red);color:#fff;padding:2px 7px;border-radius:10px;font-size:10px;margin-right:8px">7</span> Nezavisno vs. zavisno složene</span>
            <span style="color:var(--t3)">▾</span>
          </summary>
          <div style="margin-top:10px;font-size:13px;line-height:1.65;color:var(--t2)">
            <strong>Nezavisno složene</strong> — obje rečenice su ravnopravne, mogu stajati samostalno.<br>
            <strong>Zavisno složene</strong> — jedna ovisi o drugoj (zavisna se ne može sama).<br><br>
            ✅ <em>„Učim, A moj brat spava."</em> (obje samostalne = <strong>nezav.</strong> suprotna)<br>
            ✅ <em>„Učim, DA položim."</em> (druga ovisi o prvoj = <strong>zav.</strong> namjerna)<br><br>
            <strong style="color:var(--gold)">Trik:</strong> nezavisne se povezuju s <strong>nezavisnim veznicima</strong> (i, a, ali, ili, pa, te, no). Zavisne s <strong>zavisnim veznicima</strong> (jer, da, ako, kad, dok, iako...).
          </div>
        </details>
        
        <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;display:flex;justify-content:space-between;align-items:center">
            <span><span style="display:inline-block;background:var(--red);color:#fff;padding:2px 7px;border-radius:10px;font-size:10px;margin-right:8px">8</span> Upitne — pravi oblici</span>
            <span style="color:var(--t3)">▾</span>
          </summary>
          <div style="margin-top:10px;font-size:13px;line-height:1.65;color:var(--t2)">
            <strong>Potpuna upitna</strong> — traži DA/NE odgovor (s česticom „li" ili intonacijom).<br>
            <strong>Nepotpuna upitna</strong> — traži određenu informaciju (s upitnim riječima: tko, što, kada, gdje...).<br><br>
            ✅ <em>„<strong>Hoćeš li</strong> doći?" — potpuna</em><br>
            ✅ <em>„<strong>Kada</strong> dolaziš?" — nepotpuna (traži vrijeme)</em><br>
            ✅ <em>„<strong>Tko</strong> je to rekao?" — nepotpuna (traži osobu)</em><br><br>
            <strong style="color:var(--gold)">Zamka:</strong> retoričko pitanje (<em>„Zar stvarno?"</em>) je usklična rečenica, ne upitna — ne očekuje odgovor.
          </div>
        </details>
        
      </div>
    </div>

    <!-- UPGRADE: MNEMOTEHNIKE (SINTAKSA) -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🧠 Mnemotehnike · za pamćenje napamet</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(80,200,120,.04),transparent);border:1px solid var(--bd);border-left:3px solid var(--green);border-radius:var(--r2);margin:16px 0">
      <div style="font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:14px">
        Brze mnemotehnike za sintaktičke pojmove koji se često traže na maturi.
      </div>
      
      <div style="display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))">
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--green);margin-bottom:6px">6 REČENIČNIH ČLANOVA</div>
          <div style="font-family:var(--display);font-size:18px;font-weight:700;color:var(--gold);margin-bottom:8px;letter-spacing:.5px">SPO-AAP</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.6">
            <strong>S</strong>ubjekt · <strong>P</strong>redikat · <strong>O</strong>bjekt · <strong>A</strong>tribut · <strong>A</strong>pozicija · <strong>P</strong>riložne oznake<br>
            <em style="font-size:11px;color:var(--t3)">"SPO stoji glavni, AAP daju detalj"</em>
          </div>
        </div>
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--green);margin-bottom:6px">6 NEZAVISNO SLOŽENIH</div>
          <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">SaRaSuzZR</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.6">
            <strong>Sa</strong>stavna (i, pa, te) · <strong>Ra</strong>stavna (ili) · <strong>Su</strong>protna (a, ali, no, nego) · <strong>z</strong>aključna (zato, dakle) · <strong>Z</strong>avrs. (dakle, stoga) · <strong>R</strong>azlaganje (jer)<br>
            <em style="font-size:11px;color:var(--t3)">zapamti 6 tipova i njihove veznike</em>
          </div>
        </div>
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--green);margin-bottom:6px">PRILOŽNE OZNAKE (4)</div>
          <div style="font-family:var(--display);font-size:18px;font-weight:700;color:var(--gold);margin-bottom:8px;letter-spacing:.5px">MVNU</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.6">
            <strong>M</strong>jesta (gdje?) · <strong>V</strong>remena (kada?) · <strong>N</strong>ačina (kako?) · <strong>U</strong>zroka (zašto?)<br>
            <em style="font-size:11px;color:var(--t3)">"GdjeKadKakoZašto = MVNU"</em>
          </div>
        </div>
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--green);margin-bottom:6px">SUBJEKT = N</div>
          <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">N jed. pravilo</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.6">
            <strong>Subjekt je UVIJEK u nominativu</strong> (1. padež). Ako nije N — nije gramatički subjekt, nego priložna oznaka ili objekt.<br>
            <em style="font-size:11px;color:var(--t3)">„tko/što" pitanje → subjekt</em>
          </div>
        </div>
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--green);margin-bottom:6px">BROJ REČENICA</div>
          <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">= broj predikata</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.6">
            Koliko predikata (ličnih glagola), toliko rečenica u složenoj. Infinitivi, particip i gerundi NE računaju.<br>
            <em style="font-size:11px;color:var(--t3)">"Jedan glagol = jedna rečenica"</em>
          </div>
        </div>
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--green);margin-bottom:6px">APOZICIJA = ZAREZ</div>
          <div style="font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px">imenicom pred-zarezi</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.6">
            Apozicija je uvijek odvojena zarezima. Atribut nije. Obje su imenski dodatci.<br>
            <em style="font-size:11px;color:var(--t3)">„Ivan, moj prijatelj, ..." (zarezi = apozicija)</em>
          </div>
        </div>
        
      </div>
    </div>

    <!-- NAV ROW -->
    <div class="nav-row" style="justify-content:flex-end">
      <span class="nb-btn primary" onclick="sw(1)">🏗️ Rečenični članovi →</span>
    </div>

  
    <div class="cheat-card" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">SLJEDEĆE</div>
          <div class="cheat-ttl">Tab 1 · Rečenični članovi</div>
        </div>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col cheat-col-wide" style="font-family:var(--serif,Fraunces,serif);font-size:13.5px;color:var(--t2,#c5b8aa);line-height:1.65">
          <p style="margin:0">Sad kad znaš sintaksu — <b>Tab 1</b> ulazi u rečenične članove: subjekt, predikat, objekt, atribut, apozicija, priložne oznake. Svaki s primjerima.</p>
        </div>
      </div>
    </div>

    </div><!-- /l0 -->

  <div class="layer" id="l1" role="tabpanel" tabindex="0">

    <!-- SUMMARY BOX -->
    <div class="box-int">
      <div class="box-int-lbl">🎯 Zašto je ovo KLJUČNO</div>
      <div class="box-int-txt">
        Oko <strong>40% sintaktičkih pitanja</strong> na maturi pita za rečenične članove. Bez njih ne možeš analizirati složene rečenice (Tab 3), niti pisati esej sa pravilnim zarezima. <strong>SPO = glavni</strong> (subjekt, predikat, objekt), <strong>AAP = dopunski</strong> (atribut, apozicija, priložne oznake). Svaki od 6 ima svoje <em>pitanje</em> po kojem ga prepoznaješ.
      </div>
    </div>

    <!-- PREGLED SVIH 6 ČLANOVA -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">📋 Pregled · 6 rečeničnih članova</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);margin:16px 0;overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12.5px">
        <thead>
          <tr style="background:var(--bg);border-bottom:2px solid var(--gold)">
            <th style="padding:10px 8px;text-align:left;color:var(--gold);font-size:11px">Član</th>
            <th style="padding:10px 8px;text-align:left;color:var(--gold);font-size:11px">Pitanje</th>
            <th style="padding:10px 8px;text-align:left;color:var(--gold);font-size:11px">Primjer</th>
            <th style="padding:10px 8px;text-align:left;color:var(--gold);font-size:11px">Klasa</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:10px 8px;color:var(--blue);font-weight:700">Subjekt (S)</td>
            <td style="padding:10px 8px">tko? što?</td>
            <td style="padding:10px 8px"><strong>Marija</strong> čita.</td>
            <td style="padding:10px 8px;color:var(--t3)">glavni</td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:10px 8px;color:var(--red);font-weight:700">Predikat (P)</td>
            <td style="padding:10px 8px">što radi? kakav je?</td>
            <td style="padding:10px 8px">Marija <strong>čita</strong>.</td>
            <td style="padding:10px 8px;color:var(--t3)">glavni</td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:10px 8px;color:var(--green);font-weight:700">Objekt (O)</td>
            <td style="padding:10px 8px">koga? što? komu? čemu?</td>
            <td style="padding:10px 8px">Marija čita <strong>knjigu</strong>.</td>
            <td style="padding:10px 8px;color:var(--t3)">glavni</td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:10px 8px;color:var(--bronze);font-weight:700">Atribut (A)</td>
            <td style="padding:10px 8px">kakav? čiji? koji?</td>
            <td style="padding:10px 8px">Marija čita <strong>zanimljivu</strong> knjigu.</td>
            <td style="padding:10px 8px;color:var(--t3)">dopunski</td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:10px 8px;color:#9b59b6;font-weight:700">Apozicija (Ap)</td>
            <td style="padding:10px 8px">tko je to? što je to?</td>
            <td style="padding:10px 8px">Marija, <strong>moja sestra</strong>, čita.</td>
            <td style="padding:10px 8px;color:var(--t3)">dopunski</td>
          </tr>
          <tr>
            <td style="padding:10px 8px;color:#e67e22;font-weight:700">Priložna ozn. (P.O.)</td>
            <td style="padding:10px 8px">gdje? kada? kako? zašto?</td>
            <td style="padding:10px 8px">Marija čita <strong>u knjižnici</strong>.</td>
            <td style="padding:10px 8px;color:var(--t3)">dopunski</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div style="margin-top:14px;padding:12px 16px;background:rgba(233,180,70,.06);border-left:3px solid var(--gold);border-radius:var(--r1);font-size:13px;line-height:1.6;color:var(--t2)">
      <strong style="color:var(--gold)">💡 Mnemotehnika:</strong> <strong>SPO-AAP</strong> — prva 3 slova = glavni, druga 3 slova = dopunski. <em>"Glavni stoje sami, AAP daju detalj."</em>
    </div>

    <!-- DETALJI SVAKOG ČLANA · SCENE CARDS -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🔍 Detalji svakog člana · klikni karticu</div><div class="sec-line"></div></div>
    
    <!-- 1. SUBJEKT -->
    <div class="scene-card" onclick="togScene(this)">
      <div class="scene-head">
        <div class="scene-badge" style="background:var(--blue);color:#fff">1</div>
        <div class="scene-ttl">
          <div class="scene-name">SUBJEKT (nositelj radnje)</div>
          <div class="scene-sub">tko? što? · UVIJEK u nominativu</div>
        </div>
        <div class="scene-arrow">▾</div>
      </div>
      <div class="scene-body">
        <p><strong>📜 Definicija:</strong> <strong>Subjekt</strong> je rečenični član koji označava tko ili što izvršava radnju (ili je u stanju koje izriče predikat). <strong>UVIJEK je u nominativu</strong> (1. padež) i slaže se s predikatom u licu, broju i rodu.</p>
        
        <p><strong>🔑 Pitanje:</strong> <em>tko? što?</em></p>
        
        <p><strong>📝 Primjeri:</strong></p>
        <ul style="font-family:var(--mono);font-size:13px;line-height:1.9">
          <li><strong>Ivan</strong> čita knjigu. (tko čita? → <em>Ivan</em>)</li>
          <li><strong>Knjiga</strong> leži na stolu. (što leži? → <em>knjiga</em>)</li>
          <li><strong>Djeca</strong> se igraju u parku. (tko se igra? → <em>djeca</em>)</li>
        </ul>
        
        <p><strong>⚖️ Vrste subjekta:</strong></p>
        <ul>
          <li><strong>Izrečeni (gramatički):</strong> jasno napisan — <em>„<strong>Marija</strong> čita."</em></li>
          <li><strong>Neizrečeni (podrazumijevan):</strong> nije napisan, ali se zna iz oblika glagola — <em>„Čitam." (ja) · „Čitaš." (ti)</em></li>
          <li><strong>Logički:</strong> u pasivnim/bezličnim rečenicama — <em>„<strong>Nama</strong> se spava." (D logički) · „<strong>Kiša</strong> pada."</em></li>
          <li><strong>Opći:</strong> s česticom „se" ili 3. l. mn. bez osobe — <em>„Kaže se..." · „Pišu da je..."</em></li>
        </ul>
        
        <div class="box-warn" style="margin-top:12px">
          <div class="bw-body">
            <div class="bw-ttl" style="color:var(--red)">⚠ Najčešća greška</div>
            <div class="bw-txt">Subjekt MORA biti u <strong>nominativu</strong>. Ako nije u N — nije gramatički subjekt. <em>„S prijateljem je došao."</em> — „prijateljem" je priložna oznaka društva (I), NIJE subjekt. Subjekt ovdje je podrazumijevan: <em>„(on) je došao s prijateljem."</em></div>
          </div>
        </div>
        
        <div class="box-signal">
          <div class="box-signal-lbl">💡 Trik</div>
          <div class="box-signal-txt">Subjekt može biti imenica, zamjenica, broj, pridjev (u ulozi imenice), pa čak i cijela rečenica (zavisna subjektna). Primjer: <em>„<strong>Tko rano rani</strong> dvije sreće grabi." — zavisna rečenica je subjekt.</em></div>
        </div>
      </div>
    </div>

    <!-- 2. PREDIKAT -->
    <div class="scene-card" onclick="togScene(this)">
      <div class="scene-head">
        <div class="scene-badge" style="background:var(--red);color:#fff">2</div>
        <div class="scene-ttl">
          <div class="scene-name">PREDIKAT (srce rečenice)</div>
          <div class="scene-sub">što radi? kakav je? · glagol u ličnom obliku</div>
        </div>
        <div class="scene-arrow">▾</div>
      </div>
      <div class="scene-body">
        <p><strong>📜 Definicija:</strong> <strong>Predikat</strong> je rečenični član koji izriče što subjekt radi, u kakvom je stanju ili što se o njemu govori. Mora biti <strong>glagol u ličnom obliku</strong> (ne infinitiv). Svaka rečenica MORA imati predikat — to je test rečenice.</p>
        
        <p><strong>🔑 Pitanje:</strong> <em>što radi? što se događa? kakav je?</em></p>
        
        <p><strong>📝 Primjeri:</strong></p>
        <ul style="font-family:var(--mono);font-size:13px;line-height:1.9">
          <li>Ivan <strong>čita</strong>. (prezent)</li>
          <li>Marija <strong>je došla</strong>. (perfekt — pomoćni + pridjev radni)</li>
          <li>Oni <strong>će putovati</strong>. (futur I)</li>
        </ul>
        
        <p><strong>⚖️ Vrste predikata:</strong></p>
        <ul>
          <li><strong>Glagolski predikat</strong> — samo glagol ili glag. konstrukcija — <em>„Marija <strong>čita</strong>.", „Došao <strong>je</strong>."</em></li>
          <li><strong>Imenski predikat</strong> — kopula (glagol „biti") + imenska riječ (imenica, pridjev, zamjenica) — <em>„Marija <strong>je učenica</strong>.", „On <strong>je visok</strong>."</em></li>
          <li><strong>Složeni glagolski predikat</strong> — modalni/fazni glagol + infinitiv — <em>„Moram <strong>raditi</strong>.", „Počeo je <strong>pisati</strong>."</em></li>
        </ul>
        
        <div class="box-warn" style="margin-top:12px">
          <div class="bw-body">
            <div class="bw-ttl" style="color:var(--red)">⚠ Najčešća greška</div>
            <div class="bw-txt">Infinitiv NIJE predikat! <em>„Želim <strong>čitati</strong>."</em> — „čitati" je infinitiv (dio složenog predikata „želim čitati"). Jedan predikat. Isto vrijedi za glagolski pridjev, prilog — nisu samostalni predikati.</div>
          </div>
        </div>
        
        <div class="box-signal">
          <div class="box-signal-lbl">💡 Trik — broj rečenica</div>
          <div class="box-signal-txt"><strong>Koliko ima predikata, toliko ima rečenica u složenoj.</strong> Ovo je ključno za Tab 2 i 3. <em>„Idem kući i spavam."</em> = 2 predikata → 2 rečenice (složena sastavna).</div>
        </div>
      </div>
    </div>

    <!-- 3. OBJEKT -->
    <div class="scene-card" onclick="togScene(this)">
      <div class="scene-head">
        <div class="scene-badge" style="background:var(--green);color:#fff">3</div>
        <div class="scene-ttl">
          <div class="scene-name">OBJEKT (cilj radnje)</div>
          <div class="scene-sub">koga? što? komu? čemu? · izravni (A) + neizravni (D/G/I/L)</div>
        </div>
        <div class="scene-arrow">▾</div>
      </div>
      <div class="scene-body">
        <p><strong>📜 Definicija:</strong> <strong>Objekt</strong> je rečenični član koji dopunjava značenje predikata (glagola) — to je predmet, osoba ili stvar na koju se radnja odnosi.</p>
        
        <p><strong>🔑 Pitanje:</strong> <em>koga? što? komu? čemu? od koga? s kim?</em> (svako pitanje osim „tko/što" za subjekt)</p>
        
        <p><strong>⚖️ 2 vrste objekta:</strong></p>
        
        <div style="padding:12px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--green);border-radius:var(--r1);margin:8px 0">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--green);margin-bottom:4px">IZRAVNI OBJEKT</div>
          <div style="font-size:13px;color:var(--t2);line-height:1.6">
            Uvijek u <strong>akuzativu</strong> (A) bez prijedloga. Pitanje: <em>koga? što?</em><br>
            Primjeri: <em>„Čitam <strong>knjigu</strong>." · „Vidio je <strong>Ivana</strong>." · „Pišem <strong>pismo</strong>."</em><br>
            <em style="color:var(--t3)">Test: može se pretvoriti u pasiv — „Knjiga se čita."</em>
          </div>
        </div>
        
        <div style="padding:12px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--green);border-radius:var(--r1);margin:8px 0">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--green);margin-bottom:4px">NEIZRAVNI OBJEKT</div>
          <div style="font-size:13px;color:var(--t2);line-height:1.6">
            U bilo kojem padežu <strong>osim N i A</strong> (dakle G, D, I, L) — sa ili bez prijedloga.<br>
            Primjeri: <em>„Pomažem <strong>prijatelju</strong>." (D) · „Sjećam se <strong>ljeta</strong>." (G) · „Pišem <strong>olovkom</strong>." (I)</em>
          </div>
        </div>
        
        <div class="box-warn" style="margin-top:12px">
          <div class="bw-body">
            <div class="bw-ttl" style="color:var(--red)">⚠ Najčešća greška · glagoli s D/G</div>
            <div class="bw-txt">Određeni glagoli idu s neuobičajenim padežima — ne s akuzativom!<br>
            • <strong>Pomagati, vjerovati, prijetiti</strong> → DATIV (ne A!): „Pomažem <strong>mu</strong>" (ne "ga")<br>
            • <strong>Sjećati se, bojati se</strong> → GENITIV: „Sjećam se <strong>ljeta</strong>"<br>
            • <strong>Upravljati, ovladati</strong> → INSTRUMENTAL: „Upravlja <strong>autom</strong>"</div>
          </div>
        </div>
        
        <div class="box-signal">
          <div class="box-signal-lbl">💡 Subjekt vs. objekt</div>
          <div class="box-signal-txt">Oboje odgovaraju na „tko/što" ali u različitim padežima! <strong>Subjekt = N</strong>, <strong>objekt = A</strong> (izravni). „<strong>Ivan</strong> (S) voli <strong>Mariju</strong> (O)."</div>
        </div>
      </div>
    </div>

    <!-- 4. ATRIBUT -->
    <div class="scene-card" onclick="togScene(this)">
      <div class="scene-head">
        <div class="scene-badge" style="background:var(--bronze);color:#fff">4</div>
        <div class="scene-ttl">
          <div class="scene-name">ATRIBUT (svojstvo imenice)</div>
          <div class="scene-sub">kakav? čiji? koji? · pridjev / zamjenica / broj uz imenicu</div>
        </div>
        <div class="scene-arrow">▾</div>
      </div>
      <div class="scene-body">
        <p><strong>📜 Definicija:</strong> <strong>Atribut</strong> je rečenični član koji bliže objašnjava imenicu — označava njezino svojstvo, pripadnost ili količinu. Uvijek dolazi uz imenicu (nije samostalan).</p>
        
        <p><strong>🔑 Pitanje:</strong> <em>kakav? čiji? koji? koliko?</em></p>
        
        <p><strong>⚖️ 2 vrste atributa:</strong></p>
        
        <div style="padding:12px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--bronze);border-radius:var(--r1);margin:8px 0">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--bronze);margin-bottom:4px">SROČNI ATRIBUT</div>
          <div style="font-size:13px;color:var(--t2);line-height:1.6">
            Slaže se s imenicom u <strong>rodu, broju i padežu</strong>. To je tipičan pridjev ili posvojna/pokazna zamjenica.<br>
            Primjeri: <em>„<strong>zanimljiva</strong> knjiga" · „<strong>moj</strong> brat" · „<strong>ovaj</strong> dan" · „<strong>crveni</strong> auto"</em><br>
            <em style="color:var(--t3)">Sklanja se zajedno s imenicom: ženske knjige, ženskim knjigama...</em>
          </div>
        </div>
        
        <div style="padding:12px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--bronze);border-radius:var(--r1);margin:8px 0">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--bronze);margin-bottom:4px">NESROČNI ATRIBUT</div>
          <div style="font-size:13px;color:var(--t2);line-height:1.6">
            <strong>Ne slaže se</strong> s imenicom — uvijek isti oblik. Obično imenica u genitivu ili prijedlog + padež.<br>
            Primjeri: <em>„knjiga <strong>stoljeća</strong>" (G) · „čovjek <strong>iz sela</strong>" (prijedlog+G) · „put <strong>kroz šumu</strong>" (prijedlog+A)</em>
          </div>
        </div>
        
        <p><strong>🔑 Primjeri iz rečenica:</strong></p>
        <ul style="font-family:var(--mono);font-size:13px;line-height:1.9">
          <li>Marija čita <strong>zanimljivu</strong> knjigu. (sročni: koju knjigu?)</li>
          <li><strong>Moj</strong> brat uči. (sročni: čiji brat?)</li>
          <li>Čitam <strong>knjigu godine</strong>. (nesročni G: koju knjigu?)</li>
          <li><strong>Troje</strong> djece se igra. (sročni — broj)</li>
        </ul>
        
        <div class="box-warn" style="margin-top:12px">
          <div class="bw-body">
            <div class="bw-ttl" style="color:var(--red)">⚠ Atribut vs. dio predikata</div>
            <div class="bw-txt"><em>„Marija <strong>je lijepa</strong>"</em> — „lijepa" je dio imenskog predikata (uz kopulu „je"), NIJE atribut.<br>
            <em>„<strong>Lijepa</strong> Marija"</em> — „lijepa" JE atribut (opisuje imenicu).</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 5. APOZICIJA -->
    <div class="scene-card" onclick="togScene(this)">
      <div class="scene-head">
        <div class="scene-badge" style="background:#9b59b6;color:#fff">5</div>
        <div class="scene-ttl">
          <div class="scene-name">APOZICIJA (imenica uz imenicu)</div>
          <div class="scene-sub">tko je to? što je to? · uvijek odvojena zarezima</div>
        </div>
        <div class="scene-arrow">▾</div>
      </div>
      <div class="scene-body">
        <p><strong>📜 Definicija:</strong> <strong>Apozicija</strong> je imenica (ili imenska sintagma) koja bliže objašnjava drugu imenicu. Stoji uz nju i <strong>uvijek je u istom padežu</strong> kao i imenica koju objašnjava. Odvojena je zarezima.</p>
        
        <p><strong>🔑 Pitanje:</strong> <em>tko je to? što je to?</em></p>
        
        <p><strong>📝 Primjeri:</strong></p>
        <ul style="font-family:var(--mono);font-size:13px;line-height:1.9">
          <li>Marija<strong>, moja sestra,</strong> čita knjigu.</li>
          <li>Zagreb<strong>, glavni grad Hrvatske,</strong> ima 800,000 stanovnika.</li>
          <li>Vidio sam Ivana<strong>, mog prijatelja.</strong></li>
          <li>Knjiga Ratovi zvijezda<strong>, svjetski bestseler,</strong> rasprodana je.</li>
        </ul>
        
        <p><strong>⚖️ Apozicija vs. atribut — razlika:</strong></p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0">
          <div style="padding:10px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r1)">
            <div style="font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1px;margin-bottom:4px">ATRIBUT</div>
            <div style="font-size:12px;color:var(--t2)"><strong>Pridjev</strong> (ili zamjenica/broj) uz imenicu.<br>BEZ zareza.<br><em>„Visoki dječak trči."</em></div>
          </div>
          <div style="padding:10px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r1)">
            <div style="font-family:var(--mono);font-size:10px;color:#9b59b6;letter-spacing:1px;margin-bottom:4px">APOZICIJA</div>
            <div style="font-size:12px;color:var(--t2)"><strong>Imenica</strong> (+ može atribut) uz imenicu.<br>SA zarezima.<br><em>„Ivan, moj brat, trči."</em></div>
          </div>
        </div>
        
        <div class="box-signal">
          <div class="box-signal-lbl">💡 Slaganje</div>
          <div class="box-signal-txt">Apozicija slijedi padež imenice koju objašnjava: „Dao sam knjigu <strong>Ivanu</strong>, <strong>mojem prijatelju</strong>." — „prijatelju" je u D (kao „Ivanu").</div>
        </div>
      </div>
    </div>

    <!-- 6. PRILOŽNE OZNAKE -->
    <div class="scene-card" onclick="togScene(this)">
      <div class="scene-head">
        <div class="scene-badge" style="background:#e67e22;color:#fff">6</div>
        <div class="scene-ttl">
          <div class="scene-name">PRILOŽNE OZNAKE (okolnosti)</div>
          <div class="scene-sub">gdje? kada? kako? zašto? · MVNU + dodatne</div>
        </div>
        <div class="scene-arrow">▾</div>
      </div>
      <div class="scene-body">
        <p><strong>📜 Definicija:</strong> <strong>Priložna oznaka</strong> je rečenični član koji označava okolnosti radnje — mjesto, vrijeme, način, uzrok i druge. Odgovara na pitanja s „g/k/z".</p>
        
        <p><strong>🔑 4 glavne + dodatne vrste (MVNU):</strong></p>
        
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;margin:12px 0">
          
          <div style="padding:12px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid #e67e22;border-radius:var(--r1)">
            <div style="font-family:var(--mono);font-size:10px;color:#e67e22;letter-spacing:1.5px;margin-bottom:6px">MJESTA (M)</div>
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;margin-bottom:4px">gdje? kamo? odakle?</div>
            <div style="font-size:12px;color:var(--t2);line-height:1.5"><em>Marija čita <strong>u knjižnici</strong>. Idem <strong>kući</strong>. Došao je <strong>iz Zagreba</strong>.</em></div>
          </div>
          
          <div style="padding:12px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid #e67e22;border-radius:var(--r1)">
            <div style="font-family:var(--mono);font-size:10px;color:#e67e22;letter-spacing:1.5px;margin-bottom:6px">VREMENA (V)</div>
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;margin-bottom:4px">kada? otkada? do kada?</div>
            <div style="font-size:12px;color:var(--t2);line-height:1.5"><em>Došao je <strong>jučer</strong>. Učim <strong>popodne</strong>. Radit ću <strong>sutra</strong>.</em></div>
          </div>
          
          <div style="padding:12px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid #e67e22;border-radius:var(--r1)">
            <div style="font-family:var(--mono);font-size:10px;color:#e67e22;letter-spacing:1.5px;margin-bottom:6px">NAČINA (N)</div>
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;margin-bottom:4px">kako? na koji način?</div>
            <div style="font-size:12px;color:var(--t2);line-height:1.5"><em>Trči <strong>brzo</strong>. Radi <strong>pažljivo</strong>. Pjeva <strong>glasno</strong>.</em></div>
          </div>
          
          <div style="padding:12px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid #e67e22;border-radius:var(--r1)">
            <div style="font-family:var(--mono);font-size:10px;color:#e67e22;letter-spacing:1.5px;margin-bottom:6px">UZROKA (U)</div>
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;margin-bottom:4px">zašto? zbog čega?</div>
            <div style="font-size:12px;color:var(--t2);line-height:1.5"><em>Plače <strong>od sreće</strong>. Ne ide <strong>zbog bolesti</strong>. Pobjegao je <strong>iz straha</strong>.</em></div>
          </div>
        </div>
        
        <p><strong>+ dodatne vrste:</strong></p>
        <ul style="font-size:13px;line-height:1.7">
          <li><strong>Namjere</strong> (s kojom svrhom?) — <em>„Došao je <strong>na razgovor</strong>."</em></li>
          <li><strong>Količine</strong> (koliko?) — <em>„Jeo je <strong>mnogo</strong>."</em></li>
          <li><strong>Društva</strong> (s kim?) — <em>„Došao je <strong>s prijateljem</strong>."</em></li>
          <li><strong>Uvjeta</strong> (pod kojim uvjetom?) — <em>„Doći ćemo <strong>u slučaju kiše</strong>."</em></li>
          <li><strong>Dopuštenja</strong> (usprkos čemu?) — <em>„Došao je <strong>usprkos bolesti</strong>."</em></li>
        </ul>
        
        <div class="box-warn" style="margin-top:12px">
          <div class="bw-body">
            <div class="bw-ttl" style="color:var(--red)">⚠ P.O. vs. objekt</div>
            <div class="bw-txt">Oboje može biti u istom padežu — razlika u PITANJU:<br>
            <em>„Pišem <strong>olovkom</strong>."</em> (I) — pitanje: ČIME? = objekt (sredstvo radnje)<br>
            <em>„Hodam <strong>parkom</strong>."</em> (I) — pitanje: GDJE? = priložna oznaka mjesta</div>
          </div>
        </div>
        
        <div class="box-signal">
          <div class="box-signal-lbl">💡 Mnemotehnika</div>
          <div class="box-signal-txt"><strong>MVNU</strong> — 4 glavne vrste: <strong>M</strong>jesta (gdje?), <strong>V</strong>remena (kada?), <strong>N</strong>ačina (kako?), <strong>U</strong>zroka (zašto?). Najčešće na maturi.</div>
        </div>
      </div>
    </div>

    <!-- INTERAKTIVNA VJEŽBA -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🎮 Vježba · Klik-identifikacija (15 rečenica)</div><div class="sec-line"></div></div>
    
    <div style="padding:14px 16px;background:rgba(233,180,70,.06);border:1px solid rgba(233,180,70,.2);border-left:3px solid var(--gold);border-radius:var(--r1);margin:16px 0">
      <div style="font-size:13px;line-height:1.6;color:var(--t2)">
        <strong style="color:var(--gold)">📋 Kako vježbati:</strong> U svakoj rečenici označena je <span style="color:var(--gold);font-weight:700">jedna riječ</span>. Tvoj zadatak: identificiraj KOJI je rečenični član. Klikni odgovor. Dobiješ feedback + objašnjenje. 15 rečenica, različite težine.
      </div>
    </div>
    
    <div id="rc-exercise"></div>
    <div id="rc-result" style="display:none"></div>

    <!-- NAV ROW -->
    <div class="nav-row">
      <span class="nb-btn" onclick="sw(0)">← Teorija</span>
      <span class="nb-btn primary" onclick="sw(2)">📐 Vrste rečenica →</span>
    </div>

  </div><!-- /l1 -->

  <div class="layer" id="l2" role="tabpanel" tabindex="0">

    <!-- BOX-INT -->
    <div class="box-int">
      <div class="box-int-lbl">🎯 Zašto je važno</div>
      <div class="box-int-txt">
        Klasifikacija rečenica je <strong>brza pobjeda</strong> na maturi. Pitanja su jasna ("označi je li rečenica prosta ili složena, izjavna ili upitna"). Ako razumiješ <strong>3 kriterija</strong> — sastav, svrhu i značenje — riješiš ih u sekundi. Plus, ovo je <strong>preduvjet za Tab 3</strong> (složene rečenice).
      </div>
    </div>

    <!-- ═══════════════════════════════════
         SEKCIJA A · PO SASTAVU
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">📐 A · Po sastavu (broj predikata)</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(74,144,217,.04),transparent);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r2);margin:16px 0">
      <div style="font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:14px">
        <strong>Pravilo:</strong> broj rečenica = broj <strong>predikata</strong>. Infinitiv NE računa kao predikat.
      </div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px">
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--green);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--green);margin-bottom:6px">PROSTA</div>
          <div style="font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:8px">1 predikat</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.6">
            Sadrži samo <strong>jedan predikat</strong>. Ne može se rastaviti na manje rečenice.<br><br>
            <strong style="color:var(--green)">Primjeri:</strong><br>
            <em>„Marija čita knjigu."</em><br>
            <em>„Pada kiša."</em><br>
            <em>„Želim učiti."</em> (želim = predikat, učiti = infinitiv)
          </div>
        </div>
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--gold);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--gold);margin-bottom:6px">SLOŽENA NEZAVISNO</div>
          <div style="font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:8px">2+ ravnopravne</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.6">
            <strong>Dvije ili više rečenica</strong>, svaka može stajati samostalno. Povezane <strong>nezavisnim veznicima</strong> (i, a, ali, ili, pa, te, no).<br><br>
            <strong style="color:var(--gold)">Primjer:</strong><br>
            <em>„Marija čita, <strong>a</strong> Ivan piše."</em><br>
            (2 predikata: čita + piše)
          </div>
        </div>
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--bronze);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--bronze);margin-bottom:6px">SLOŽENA ZAVISNO</div>
          <div style="font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:8px">2+ ovisne</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.6">
            <strong>Glavna + zavisna</strong> rečenica. Zavisna ne može stajati samostalno. Povezane <strong>zavisnim veznicima</strong> (jer, da, ako, kad, dok, koji).<br><br>
            <strong style="color:var(--bronze)">Primjer:</strong><br>
            <em>„Učim, <strong>jer</strong> želim položiti."</em><br>
            (glavna + zavisna uzročna)
          </div>
        </div>
        
      </div>
    </div>

    <!-- DETALJNO: KAKO RAZLIKOVATI -->
    <div class="scene-card" onclick="togScene(this)">
      <div class="scene-head">
        <div class="scene-badge" style="background:var(--blue);color:#fff">A1</div>
        <div class="scene-ttl">
          <div class="scene-name">Kako razlikovati prostu od složene?</div>
          <div class="scene-sub">3-koraka test · broji predikate</div>
        </div>
        <div class="scene-arrow">▾</div>
      </div>
      <div class="scene-body">
        <p><strong>📋 3-koraka test:</strong></p>
        <ol style="line-height:1.9">
          <li><strong>Prebroji glagole u ličnom obliku</strong> (ne infinitive, particip, gerund).</li>
          <li><strong>1 predikat</strong> = <span style="color:var(--green);font-weight:700">prosta</span>. <strong>2+ predikata</strong> = <span style="color:var(--gold);font-weight:700">složena</span>.</li>
          <li>Ako složena — pogledaj veznike: <em>i, a, ali, ili...</em> = nezavisno; <em>jer, da, ako...</em> = zavisno.</li>
        </ol>
        
        <p><strong>📝 Primjeri analize:</strong></p>
        <div style="display:grid;gap:10px;margin:12px 0">
          
          <div style="padding:10px 14px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r1)">
            <div style="font-family:var(--mono);font-size:13px;color:var(--t1);margin-bottom:4px"><em>„Marija piše domaću zadaću."</em></div>
            <div style="font-size:11px;color:var(--t3)">1 predikat (piše) → <strong style="color:var(--green)">PROSTA</strong></div>
          </div>
          
          <div style="padding:10px 14px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r1)">
            <div style="font-family:var(--mono);font-size:13px;color:var(--t1);margin-bottom:4px"><em>„Učim i pišem zadaću."</em></div>
            <div style="font-size:11px;color:var(--t3)">2 predikata (učim, pišem) + nezav. veznik „i" → <strong style="color:var(--gold)">SLOŽENA NEZAVISNA SASTAVNA</strong></div>
          </div>
          
          <div style="padding:10px 14px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r1)">
            <div style="font-family:var(--mono);font-size:13px;color:var(--t1);margin-bottom:4px"><em>„Učim, jer želim položiti maturu."</em></div>
            <div style="font-size:11px;color:var(--t3)">2 predikata (učim, želim) + zav. veznik „jer" → <strong style="color:var(--bronze)">SLOŽENA ZAVISNA UZROČNA</strong></div>
          </div>
          
          <div style="padding:10px 14px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r1)">
            <div style="font-family:var(--mono);font-size:13px;color:var(--t1);margin-bottom:4px"><em>„Hoću učiti."</em></div>
            <div style="font-size:11px;color:var(--t3)">1 predikat (hoću) + infinitiv (učiti, NIJE predikat) → <strong style="color:var(--green)">PROSTA</strong></div>
          </div>
          
          <div style="padding:10px 14px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r1)">
            <div style="font-family:var(--mono);font-size:13px;color:var(--t1);margin-bottom:4px"><em>„Knjiga koju čitam je odlična."</em></div>
            <div style="font-size:11px;color:var(--t3)">2 predikata (čitam, je) + zav. zamjenica „koju" → <strong style="color:var(--bronze)">SLOŽENA ZAVISNA ATRIBUTNA</strong></div>
          </div>
          
        </div>
        
        <div class="box-warn" style="margin-top:12px">
          <div class="bw-body">
            <div class="bw-ttl" style="color:var(--red)">⚠ Najčešća greška</div>
            <div class="bw-txt">Studenti broje INFINITIV kao predikat. Infinitiv NIJE predikat — on dopunjuje predikat (npr. modalni glagol „mora" + infinitiv). „Mora učiti" = 1 predikat (mora), 1 infinitiv (učiti) = <strong>prosta</strong>.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════
         SEKCIJA B · PO PRIOPĆAJNOJ SVRSI
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🎯 B · Po priopćajnoj svrsi (5 tipova)</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(80,200,120,.04),transparent);border:1px solid var(--bd);border-left:3px solid var(--green);border-radius:var(--r2);margin:16px 0">
      <div style="font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:14px">
        Prema tome <strong>što pošiljatelj želi postići</strong> rečenicom — može priopćiti, pitati, naložiti, izraziti emociju ili želju.
      </div>
      
      <div style="display:grid;gap:10px">
        
        <!-- IZJAVNA -->
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--green);border-radius:var(--r1);display:flex;align-items:center;gap:14px">
          <div style="flex-shrink:0;width:48px;height:48px;background:rgba(80,200,120,.1);border:1.5px solid var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:800;font-size:24px;color:var(--green)">.</div>
          <div style="flex:1">
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px;margin-bottom:4px">IZJAVNA (jesna)</div>
            <div style="font-size:12px;color:var(--t2);line-height:1.5">Iznosi obavijest, tvrdnju, opis. Završava točkom.<br>
            <em>„Marija čita knjigu." · „Vani pada kiša." · „Sutra ću doći."</em></div>
          </div>
        </div>
        
        <!-- UPITNA -->
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r1);display:flex;align-items:center;gap:14px">
          <div style="flex-shrink:0;width:48px;height:48px;background:rgba(74,144,217,.1);border:1.5px solid var(--blue);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:800;font-size:24px;color:var(--blue)">?</div>
          <div style="flex:1">
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px;margin-bottom:4px">UPITNA</div>
            <div style="font-size:12px;color:var(--t2);line-height:1.5">Postavlja pitanje. Završava upitnikom. <strong>2 vrste:</strong><br>
            • <strong>Potpuna</strong> (DA/NE) — s česticom „li" ili intonacijom: <em>„<strong>Hoćeš li</strong> doći?"</em><br>
            • <strong>Nepotpuna</strong> (specifična info) — s upitnim riječima: <em>„<strong>Kada</strong> dolaziš?", „<strong>Tko</strong> je to?"</em></div>
          </div>
        </div>
        
        <!-- USKLIČNA -->
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1);display:flex;align-items:center;gap:14px">
          <div style="flex-shrink:0;width:48px;height:48px;background:rgba(224,82,82,.1);border:1.5px solid var(--red);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--display);font-weight:800;font-size:24px;color:var(--red)">!</div>
          <div style="flex:1">
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px;margin-bottom:4px">USKLIČNA</div>
            <div style="font-size:12px;color:var(--t2);line-height:1.5">Izriče jaku emociju (čuđenje, oduševljenje, ljutnja). Završava uskličnikom.<br>
            <em>„Kako je lijepo!" · „Bravo!" · „Nemoguće!"</em></div>
          </div>
        </div>
        
        <!-- ZAPOVJEDNA -->
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--bronze);border-radius:var(--r1);display:flex;align-items:center;gap:14px">
          <div style="flex-shrink:0;width:48px;height:48px;background:rgba(176,107,33,.12);border:1.5px solid var(--bronze);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px">⚡</div>
          <div style="flex:1">
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px;margin-bottom:4px">ZAPOVJEDNA</div>
            <div style="font-size:12px;color:var(--t2);line-height:1.5">Izriče zapovijed, naredbu, molbu. Glagol u <strong>imperativu</strong>. Završava točkom ili uskličnikom.<br>
            <em>„Dođi ovamo." · „Pišite zadaću!" · „Zatvori vrata."</em></div>
          </div>
        </div>
        
        <!-- ŽELJA -->
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid #9b59b6;border-radius:var(--r1);display:flex;align-items:center;gap:14px">
          <div style="flex-shrink:0;width:48px;height:48px;background:rgba(155,89,182,.1);border:1.5px solid #9b59b6;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px">🌟</div>
          <div style="flex:1">
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px;margin-bottom:4px">ŽELJA (optativna)</div>
            <div style="font-size:12px;color:var(--t2);line-height:1.5">Izriče želju. Često s česticom „neka" ili u <strong>kondicionalu</strong>. Završava točkom ili uskličnikom.<br>
            <em>„Neka bude svjetla!" · „Sretan put!" · „Da je samo nedjelja!"</em></div>
          </div>
        </div>
        
      </div>
    </div>

    <div style="margin-top:14px;padding:12px 16px;background:rgba(224,82,82,.06);border-left:3px solid var(--red);border-radius:var(--r1);font-size:13px;line-height:1.6;color:var(--t2)">
      <strong style="color:var(--red)">⚠ Zamka:</strong> retoričko pitanje (<em>„Zar je moguće?!"</em>) — formalno upitno, ali NE očekuje odgovor. Funkcionalno je <strong>usklična</strong>. Pažljivo na maturi!
    </div>

    <!-- ═══════════════════════════════════
         SEKCIJA C · PO ZNAČENJU
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">⚖️ C · Po značenju (potvrdne / niječne)</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(176,107,33,.04),transparent);border:1px solid var(--bd);border-left:3px solid var(--bronze);border-radius:var(--r2);margin:16px 0">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        
        <div style="padding:14px;background:var(--ele);border:2px solid var(--green);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--green);margin-bottom:8px">POTVRDNA (afirmativna)</div>
          <div style="font-size:13px;color:var(--t2);line-height:1.7">
            Tvrdi, potvrđuje radnju.<br><br>
            <em>„Marija čita."</em><br>
            <em>„Sutra ću doći."</em><br>
            <em>„Knjiga je odlična."</em><br><br>
            <strong style="color:var(--green)">Bez negacije</strong> (ne, ni, nije, nikad...).
          </div>
        </div>
        
        <div style="padding:14px;background:var(--ele);border:2px solid var(--red);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--red);margin-bottom:8px">NIJEČNA (negativna)</div>
          <div style="font-size:13px;color:var(--t2);line-height:1.7">
            Niječe, odbacuje radnju.<br><br>
            <em>„Marija <strong>ne</strong> čita."</em><br>
            <em>„<strong>Ni</strong> Ivan <strong>ni</strong> Ana ne dolaze."</em><br>
            <em>„<strong>Nikad</strong> nisam bio."</em><br><br>
            <strong style="color:var(--red)">S negacijom</strong> (ne, ni, nije, nikad, ništa, nigdje...).
          </div>
        </div>
        
      </div>
      
      <div style="margin-top:14px;padding:10px 14px;background:rgba(233,180,70,.06);border-left:3px solid var(--gold);border-radius:var(--r1);font-size:12px;color:var(--t2);line-height:1.6">
        <strong style="color:var(--gold)">💡 Hrvatska posebnost:</strong> u jednoj rečenici <strong>više negacija pojačavaju</strong> nijek (ne ukidaju ga kao u engleskom). <em>„Nikad nisam ništa rekao."</em> = jaka negacija (3 niječne riječi).
      </div>
    </div>

    <!-- ═══════════════════════════════════
         DECISION TREE
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🌳 Decision tree · kako odrediti vrstu</div><div class="sec-line"></div></div>
    
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);margin:16px 0">
      <div style="text-align:center;margin-bottom:20px">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--t3);margin-bottom:4px">3-KORAKA ANALIZA</div>
        <div style="font-family:var(--display);font-size:14px;font-weight:600;color:var(--gold)">analiziraj svaku rečenicu po 3 kriterija paralelno</div>
      </div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px">
        
        <div style="padding:16px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--blue);margin-bottom:8px">KORAK 1 · SASTAV</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;margin-bottom:10px">Koliko predikata?</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.7">
            <strong style="color:var(--green)">1</strong> → prosta<br>
            <strong style="color:var(--gold)">2+ s nezav. vez.</strong> → složena nezavisna<br>
            <strong style="color:var(--bronze)">2+ s zav. vez.</strong> → složena zavisna
          </div>
        </div>
        
        <div style="padding:16px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--green);margin-bottom:8px">KORAK 2 · SVRHA</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;margin-bottom:10px">Što želi reći?</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.7">
            <strong>.</strong> obavijest → izjavna<br>
            <strong>?</strong> pitanje → upitna<br>
            <strong>!</strong> emocija → usklična<br>
            <strong>⚡</strong> naredba → zapovjedna<br>
            <strong>🌟</strong> želja → optativna
          </div>
        </div>
        
        <div style="padding:16px;background:var(--bg);border:1px solid var(--bd);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--bronze);margin-bottom:8px">KORAK 3 · ZNAČENJE</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;margin-bottom:10px">Ima li negacije?</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.7">
            <strong style="color:var(--green)">Bez ne/ni/nije</strong> → potvrdna<br>
            <strong style="color:var(--red)">S ne/ni/nikad...</strong> → niječna
          </div>
        </div>
        
      </div>
      
      <div style="margin-top:18px;padding:14px;background:rgba(233,180,70,.06);border-left:3px solid var(--gold);border-radius:var(--r1)">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--gold);margin-bottom:6px">PRIMJER ANALIZE</div>
        <div style="font-family:var(--display);font-style:italic;color:var(--t1);font-size:14px;margin-bottom:8px">„Hoćeš li mi pomoći?"</div>
        <div style="font-size:12px;color:var(--t2);line-height:1.7">
          <strong>Sastav:</strong> 1 predikat (hoćeš), inf. (pomoći) NE računa → <strong style="color:var(--green)">prosta</strong><br>
          <strong>Svrha:</strong> ima „li" + upitnik → <strong style="color:var(--blue)">upitna potpuna (DA/NE)</strong><br>
          <strong>Značenje:</strong> bez negacije → <strong style="color:var(--green)">potvrdna</strong><br>
          <strong style="color:var(--gold)">Finale:</strong> prosta · upitna potpuna · potvrdna
        </div>
      </div>
    </div>

    <!-- INTERAKTIVNA VJEŽBA -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🎮 Vježba · Klasifikacija (20 rečenica)</div><div class="sec-line"></div></div>
    
    <div style="padding:14px 16px;background:rgba(233,180,70,.06);border:1px solid rgba(233,180,70,.2);border-left:3px solid var(--gold);border-radius:var(--r1);margin:16px 0">
      <div style="font-size:13px;line-height:1.6;color:var(--t2)">
        <strong style="color:var(--gold)">📋 Kako vježbati:</strong> svaka rečenica ima <strong>2 pitanja</strong> — po sastavu i po svrsi. Klikni odgovore. Neće biti pitanja po značenju (lako se vidi negacija).
      </div>
    </div>
    
    <div id="vr-exercise"></div>
    <div id="vr-result" style="display:none"></div>

    <!-- NAV ROW -->
    <div class="nav-row">
      <span class="nb-btn" onclick="sw(1)">← Rečenični članovi</span>
      <span class="nb-btn primary" onclick="sw(3)">🔗 Složene rečenice →</span>
    </div>

  </div><!-- /l2 -->
     <div class="layer" id="l3" role="tabpanel" tabindex="0">

    <!-- BOX-INT -->
    <div class="box-int">
      <div class="box-int-lbl">🎯 Zašto je ovo NAJVAŽNIJE</div>
      <div class="box-int-txt">
        <strong>Složene rečenice su #1 sintaktička tema na maturi.</strong> Pitanja izgledaju poput: <em>„Odredi vrstu zavisne rečenice u..."</em> ili <em>„Spojite veznik s vrstom rečenice"</em>. Ako razumiješ <strong>3 stvari</strong> — (1) razliku nezavisno/zavisno, (2) 18 vrsta s veznicima, (3) pravilo zareza — riješiš 90% pitanja.
      </div>
    </div>

    <!-- ═══════════════════════════════════
         SEKCIJA A · NEZAVISNO SLOŽENE
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🔄 A · Nezavisno složene (6 vrsta)</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(233,180,70,.04),transparent);border:1px solid var(--bd);border-left:3px solid var(--gold);border-radius:var(--r2);margin:16px 0">
      <div style="font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:10px">
        <strong>Karakteristike:</strong> dvije ili više rečenica koje su <strong>ravnopravne</strong> — svaka može stajati samostalno. Povezuju se <strong>nezavisnim veznicima</strong> ili <strong>zarezom</strong> (asindetski).
      </div>
      <div style="font-size:13px;color:var(--t2);line-height:1.6">
        <strong>Mnemotehnika:</strong> <span style="font-family:var(--mono);background:var(--ele);padding:2px 8px;border-radius:6px;color:var(--gold);font-weight:700">SaRaSuZIO</span> = <strong>Sa</strong>stavna · <strong>Ra</strong>stavna · <strong>Su</strong>protna · <strong>Z</strong>aključna · <strong>I</strong>zuzetna · <strong>O</strong>bjasnidbena
      </div>
    </div>
    
    <!-- 1. SASTAVNA -->
    <div class="scene-card" onclick="togScene(this)">
      <div class="scene-head">
        <div class="scene-badge" style="background:var(--green);color:#fff">A1</div>
        <div class="scene-ttl">
          <div class="scene-name">SASTAVNA (kopulativna)</div>
          <div class="scene-sub">veznici: <strong>i, pa, te, ni, niti</strong></div>
        </div>
        <div class="scene-arrow">▾</div>
      </div>
      <div class="scene-body">
        <p><strong>📜 Definicija:</strong> Druga rečenica <strong>nadovezuje, dodaje, zbraja</strong> sadržaj na prvu. Najčešća vrsta nezavisno složene.</p>
        <p><strong>🔑 Veznici:</strong> <strong style="color:var(--green)">i, pa, te, ni, niti</strong></p>
        <p><strong>📝 Primjeri:</strong></p>
        <ul style="font-family:var(--mono);font-size:13px;line-height:1.9">
          <li>Marija čita <strong>i</strong> Ivan piše.</li>
          <li>Otišli smo u kino <strong>pa</strong> smo večerali.</li>
          <li>Učio sam <strong>te</strong> položio ispit.</li>
          <li><strong>Ni</strong> pišem <strong>ni</strong> čitam. (dvostruka negacija)</li>
        </ul>
        <div class="box-signal">
          <div class="box-signal-lbl">💡 Razlika i / pa / te</div>
          <div class="box-signal-txt"><strong>i</strong> = istovremeno · <strong>pa</strong> = posljedica/redoslijed („pa onda") · <strong>te</strong> = formalnije, češće u književnosti</div>
        </div>
      </div>
    </div>

    <!-- 2. RASTAVNA -->
    <div class="scene-card" onclick="togScene(this)">
      <div class="scene-head">
        <div class="scene-badge" style="background:var(--blue);color:#fff">A2</div>
        <div class="scene-ttl">
          <div class="scene-name">RASTAVNA (disjunktivna)</div>
          <div class="scene-sub">veznik: <strong>ili</strong></div>
        </div>
        <div class="scene-arrow">▾</div>
      </div>
      <div class="scene-body">
        <p><strong>📜 Definicija:</strong> Izriče <strong>izbor</strong> ili <strong>alternativu</strong> između dvije mogućnosti — samo jedna može biti istinita.</p>
        <p><strong>🔑 Veznik:</strong> <strong style="color:var(--blue)">ili</strong> (samostalno ili u paru „ili... ili...")</p>
        <p><strong>📝 Primjeri:</strong></p>
        <ul style="font-family:var(--mono);font-size:13px;line-height:1.9">
          <li>Ostani kod kuće <strong>ili</strong> idi van.</li>
          <li><strong>Ili</strong> ćeš učiti <strong>ili</strong> nećeš položiti.</li>
          <li>Hoćeš čaj <strong>ili</strong> kavu? (NIJE složena — nema 2 predikata!)</li>
        </ul>
        <div class="box-warn">
          <div class="bw-body">
            <div class="bw-ttl" style="color:var(--red)">⚠ Pažnja</div>
            <div class="bw-txt">„Hoćeš čaj <strong>ili</strong> kavu?" je PROSTA — 1 predikat (hoćeš), 2 objekta. „Ili pišeš ili crtaš." je SLOŽENA — 2 predikata.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. SUPROTNA -->
    <div class="scene-card" onclick="togScene(this)">
      <div class="scene-head">
        <div class="scene-badge" style="background:var(--red);color:#fff">A3</div>
        <div class="scene-ttl">
          <div class="scene-name">SUPROTNA (adverzativna)</div>
          <div class="scene-sub">veznici: <strong>a, ali, no, nego, već</strong></div>
        </div>
        <div class="scene-arrow">▾</div>
      </div>
      <div class="scene-body">
        <p><strong>📜 Definicija:</strong> Druga rečenica iznosi sadržaj <strong>suprotan, kontrast</strong> ili <strong>ispravak</strong> prvoj.</p>
        <p><strong>🔑 Veznici:</strong> <strong style="color:var(--red)">a, ali, no, nego, već</strong></p>
        <p><strong>📝 Primjeri:</strong></p>
        <ul style="font-family:var(--mono);font-size:13px;line-height:1.9">
          <li>Marija piše<strong>, a</strong> Ivan čita. (suprotnost)</li>
          <li>Htio sam doći<strong>, ali</strong> sam zakasnio. (suprotnost)</li>
          <li>Nije pisao<strong>, nego</strong> je crtao. (ispravak)</li>
          <li>Ne radim<strong>, već</strong> se odmaram. (ispravak)</li>
        </ul>
        <div class="box-signal">
          <div class="box-signal-lbl">💡 Razlika</div>
          <div class="box-signal-txt"><strong>ali / a / no</strong> = blaga suprotnost · <strong>nego / već</strong> = isključuje prvo (nakon negacije)</div>
        </div>
        <div class="box-warn" style="margin-top:10px">
          <div class="bw-body">
            <div class="bw-ttl" style="color:var(--red)">⚠ Zarez OBAVEZAN</div>
            <div class="bw-txt">Pred „a, ali, no, nego, već" UVIJEK ide zarez (suprotnost zahtijeva pauzu).</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. ZAKLJUČNA -->
    <div class="scene-card" onclick="togScene(this)">
      <div class="scene-head">
        <div class="scene-badge" style="background:var(--bronze);color:#fff">A4</div>
        <div class="scene-ttl">
          <div class="scene-name">ZAKLJUČNA (konkluzivna)</div>
          <div class="scene-sub">veznici: <strong>zato, stoga, dakle, prema tome</strong></div>
        </div>
        <div class="scene-arrow">▾</div>
      </div>
      <div class="scene-body">
        <p><strong>📜 Definicija:</strong> Druga rečenica <strong>zaključuje, izvodi posljedicu</strong> iz prve.</p>
        <p><strong>🔑 Veznici:</strong> <strong style="color:var(--bronze)">zato, stoga, dakle, prema tome</strong></p>
        <p><strong>📝 Primjeri:</strong></p>
        <ul style="font-family:var(--mono);font-size:13px;line-height:1.9">
          <li>Pada kiša<strong>, zato</strong> nećemo ići u park.</li>
          <li>Učio je puno<strong>, stoga</strong> je položio.</li>
          <li>Mislim<strong>, dakle</strong> jesam. (Descartes)</li>
          <li>Nemamo novca<strong>, prema tome</strong> nećemo putovati.</li>
        </ul>
        <div class="box-signal">
          <div class="box-signal-lbl">💡 Razlika od UZROČNE zavisne</div>
          <div class="box-signal-txt">„Pada kiša<strong>, zato</strong> ne idem." = NEZAVISNA zaključna (gleda iz uzroka prema posljedici)<br>„Ne idem<strong>, jer</strong> pada kiša." = ZAVISNA uzročna (gleda iz posljedice prema uzroku)</div>
        </div>
      </div>
    </div>

    <!-- 5. IZUZETNA -->
    <div class="scene-card" onclick="togScene(this)">
      <div class="scene-head">
        <div class="scene-badge" style="background:#9b59b6;color:#fff">A5</div>
        <div class="scene-ttl">
          <div class="scene-name">IZUZETNA (ekscepcijska)</div>
          <div class="scene-sub">veznici: <strong>samo, jedino, osim</strong></div>
        </div>
        <div class="scene-arrow">▾</div>
      </div>
      <div class="scene-body">
        <p><strong>📜 Definicija:</strong> Druga rečenica iznosi <strong>iznimku</strong> od onoga što je rečeno u prvoj.</p>
        <p><strong>🔑 Veznici:</strong> <strong style="color:#9b59b6">samo, jedino, osim što</strong></p>
        <p><strong>📝 Primjeri:</strong></p>
        <ul style="font-family:var(--mono);font-size:13px;line-height:1.9">
          <li>Sve smo prošli<strong>, samo</strong> ovo poglavlje nismo.</li>
          <li>Možeš ići<strong>, jedino</strong> nemoj kasniti.</li>
          <li>Sve mi se sviđa<strong>, osim što</strong> je preskupo.</li>
        </ul>
        <div class="box-warn">
          <div class="bw-body">
            <div class="bw-ttl" style="color:var(--red)">⚠ Pažnja</div>
            <div class="bw-txt">„Samo Ivan je došao." NIJE složena — „samo" je čestica. Mora postojati <strong>2 predikata</strong> da bi bila izuzetna.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 6. OBJASNIDBENA -->
    <div class="scene-card" onclick="togScene(this)">
      <div class="scene-head">
        <div class="scene-badge" style="background:#e67e22;color:#fff">A6</div>
        <div class="scene-ttl">
          <div class="scene-name">OBJASNIDBENA (eksplikativna)</div>
          <div class="scene-sub">veznici: <strong>i to, naime, to jest</strong></div>
        </div>
        <div class="scene-arrow">▾</div>
      </div>
      <div class="scene-body">
        <p><strong>📜 Definicija:</strong> Druga rečenica <strong>objašnjava, precizira ili dopunjuje</strong> sadržaj prve.</p>
        <p><strong>🔑 Veznici:</strong> <strong style="color:#e67e22">i to, naime, to jest (tj.)</strong></p>
        <p><strong>📝 Primjeri:</strong></p>
        <ul style="font-family:var(--mono);font-size:13px;line-height:1.9">
          <li>Učim sintaksu<strong>, i to</strong> svaki dan.</li>
          <li>Knjiga je odlična<strong>, naime</strong> autor zna pisati.</li>
          <li>Dolazim sutra<strong>, to jest</strong> u ponedjeljak.</li>
        </ul>
        <div class="box-signal">
          <div class="box-signal-lbl">💡 Najrjeđa vrsta</div>
          <div class="box-signal-txt">Najrjeđa nezavisno složena. Ako vidiš „naime" ili „to jest" — gotovo sigurno objasnidbena. Često se zamjenjuje s običnom interpunkcijom (zarez, dvotočka).</div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════
         SEKCIJA B · ZAVISNO SLOŽENE — UVOD
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:36px"><div class="sec-line"></div><div class="sec-badge">🌳 B · Zavisno složene (12 vrsta)</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(176,107,33,.04),transparent);border:1px solid var(--bd);border-left:3px solid var(--bronze);border-radius:var(--r2);margin:16px 0">
      <div style="font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:14px">
        <strong>Karakteristike:</strong> jedna rečenica je <strong>glavna</strong>, druga <strong>zavisna</strong> — ovisi o glavnoj. Zavisna ne može stajati samostalno. Povezuju se <strong>zavisnim veznicima</strong> ili <strong>odnosnim/upitnim zamjenicama</strong>.
      </div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-top:14px">
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--blue);margin-bottom:6px">B1 · IMENSKE (4)</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.6">
            Zamjenjuju imenicu/imenicu sintagmu u glavnoj rečenici.<br>
            <strong style="color:var(--blue)">Subjektne · Predikatne · Objektne · Atributne</strong>
          </div>
        </div>
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid #e67e22;border-radius:var(--r1)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:#e67e22;margin-bottom:6px">B2 · PRILOŽNE (8)</div>
          <div style="font-size:12px;color:var(--t2);line-height:1.6">
            Zamjenjuju priložnu oznaku u glavnoj rečenici.<br>
            <strong style="color:#e67e22">Mjesna · Vremenska · Načinska · Uzročna · Posljedična · Namjerna · Pogodbena · Dopusna</strong>
          </div>
        </div>
        
      </div>
    </div>

    <!-- B1: IMENSKE ZAVISNE -->
    <div class="sec-hdr" style="margin-top:24px"><div class="sec-line"></div><div class="sec-badge">📘 B1 · Imenske zavisne (4 vrste)</div><div class="sec-line"></div></div>
    
    <div style="display:grid;gap:10px;margin:16px 0">
      
      <!-- Subjektna -->
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r1)">
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px">
          <div style="font-family:var(--display);font-weight:800;color:var(--blue);font-size:16px">B1.1</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px">SUBJEKTNA</div>
          <div style="font-size:11px;color:var(--t3);margin-left:auto">zamjenjuje subjekt</div>
        </div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.7">
          <strong>Pitanje:</strong> tko? što? · <strong>Veznici:</strong> <em>tko, što, da, koji</em><br>
          <strong>Primjer:</strong> <em>„<strong style="color:var(--blue)">Tko rano rani</strong> dvije sreće grabi."</em><br>
          (zavisna „tko rano rani" = subjekt glavne rečenice „grabi")
        </div>
      </div>
      
      <!-- Predikatna -->
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1)">
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px">
          <div style="font-family:var(--display);font-weight:800;color:var(--red);font-size:16px">B1.2</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px">PREDIKATNA</div>
          <div style="font-size:11px;color:var(--t3);margin-left:auto">zamjenjuje imenski dio predikata</div>
        </div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.7">
          <strong>Pitanje:</strong> kakav je? što je? · <strong>Veznici:</strong> <em>kakav, koji, što</em><br>
          <strong>Primjer:</strong> <em>„Ona je <strong style="color:var(--red)">ono što sam oduvijek želio postati</strong>."</em><br>
          (zavisna = imenski dio predikata uz „je")
        </div>
        <div style="font-size:11px;color:var(--t3);margin-top:6px;font-style:italic">Najrjeđa zavisna — često se brka s atributnom.</div>
      </div>
      
      <!-- Objektna -->
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--green);border-radius:var(--r1)">
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px">
          <div style="font-family:var(--display);font-weight:800;color:var(--green);font-size:16px">B1.3</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px">OBJEKTNA</div>
          <div style="font-size:11px;color:var(--t3);margin-left:auto">zamjenjuje objekt</div>
        </div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.7">
          <strong>Pitanje:</strong> koga? što? komu? čemu? · <strong>Veznici:</strong> <em>da, što, kako, gdje, tko</em>, „li"<br>
          <strong>Primjeri:</strong><br>
          <em>• Vjerujem <strong style="color:var(--green)">da si u pravu</strong>." (vjerujem ŠTO?)</em><br>
          <em>• „Pitao sam ga <strong style="color:var(--green)">gdje je bio</strong>."</em><br>
          <em>• „Reci mi <strong style="color:var(--green)">tko je to rekao</strong>."</em>
        </div>
        <div style="font-size:11px;color:var(--green);margin-top:6px;font-style:italic">⭐ Najčešća zavisna — često uvodi „da" iza glagola misliti, znati, htjeti, reći...</div>
      </div>
      
      <!-- Atributna -->
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--bronze);border-radius:var(--r1)">
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px">
          <div style="font-family:var(--display);font-weight:800;color:var(--bronze);font-size:16px">B1.4</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px">ATRIBUTNA</div>
          <div style="font-size:11px;color:var(--t3);margin-left:auto">zamjenjuje atribut</div>
        </div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.7">
          <strong>Pitanje:</strong> kakav? čiji? koji? · <strong>Veznici:</strong> <em>koji, koja, koje, što, kakav, čiji</em><br>
          <strong>Primjeri:</strong><br>
          <em>• „Knjiga, <strong style="color:var(--bronze)">koju mi je dala</strong>, je odlična." (koja knjiga?)</em><br>
          <em>• „Vidio sam dječaka <strong style="color:var(--bronze)">koji trči</strong>." (koji dječak?)</em>
        </div>
        <div style="font-size:11px;color:var(--bronze);margin-top:6px;font-style:italic">⭐ Druga najčešća — uvijek zarez pred „koji/koja/koje".</div>
      </div>
      
    </div>

    
    <!-- B2: PRILOŽNE ZAVISNE -->
    <div class="sec-hdr" style="margin-top:24px"><div class="sec-line"></div><div class="sec-badge">📕 B2 · Priložne zavisne (8 vrsta)</div><div class="sec-line"></div></div>
    
    <div style="font-size:13px;color:var(--t2);line-height:1.6;margin:14px 0;padding:0 4px">
      Zamjenjuju priložnu oznaku u glavnoj rečenici. Iste 4 glavne (MVNU) + 4 dodatne. Ovih 8 zauzima <strong>većinu maturnih pitanja</strong>.
    </div>
    
    <div style="display:grid;gap:10px;margin:16px 0">
      
      <!-- 1. Mjesna -->
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid #e67e22;border-radius:var(--r1)">
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px">
          <div style="font-family:var(--display);font-weight:800;color:#e67e22;font-size:16px">B2.1</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px">MJESNA</div>
          <div style="font-size:11px;color:var(--t3);margin-left:auto">gdje? kamo? odakle?</div>
        </div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.7">
          <strong>Veznici:</strong> <em>gdje, kamo, kuda, odakle, dokle</em><br>
          <strong>Primjeri:</strong><br>
          <em>• „Idem <strong style="color:#e67e22">gdje me vode</strong>." (kamo idem?)</em><br>
          <em>• „Sjedim <strong style="color:#e67e22">gdje mi je toplo</strong>."</em>
        </div>
      </div>
      
      <!-- 2. Vremenska -->
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid #e67e22;border-radius:var(--r1)">
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px">
          <div style="font-family:var(--display);font-weight:800;color:#e67e22;font-size:16px">B2.2</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px">VREMENSKA</div>
          <div style="font-size:11px;color:var(--t3);margin-left:auto">kada? otkada? do kada?</div>
        </div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.7">
          <strong>Veznici:</strong> <em>kad, dok, otkad, čim, prije nego, nakon što, dok god</em><br>
          <strong>Primjeri:</strong><br>
          <em>• „Dođi <strong style="color:#e67e22">kad budeš mogao</strong>."</em><br>
          <em>• „<strong style="color:#e67e22">Dok si učio</strong>, ja sam spavao."</em><br>
          <em>• „<strong style="color:#e67e22">Čim sam ušao</strong>, počeli su se smijati."</em>
        </div>
      </div>
      
      <!-- 3. Načinska -->
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid #e67e22;border-radius:var(--r1)">
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px">
          <div style="font-family:var(--display);font-weight:800;color:#e67e22;font-size:16px">B2.3</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px">NAČINSKA</div>
          <div style="font-size:11px;color:var(--t3);margin-left:auto">kako? na koji način?</div>
        </div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.7">
          <strong>Veznici:</strong> <em>kako, kao da, kao što, što (s usporedbom)</em><br>
          <strong>Primjeri:</strong><br>
          <em>• „Radi <strong style="color:#e67e22">kako sam mu rekao</strong>."</em><br>
          <em>• „Pleše <strong style="color:#e67e22">kao da nikad nije naučio</strong>."</em><br>
          <em>• „Govoriš <strong style="color:#e67e22">kao da si profesor</strong>."</em>
        </div>
      </div>
      
      <!-- 4. Uzročna -->
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid #e67e22;border-radius:var(--r1)">
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px">
          <div style="font-family:var(--display);font-weight:800;color:#e67e22;font-size:16px">B2.4</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px">UZROČNA</div>
          <div style="font-size:11px;color:var(--t3);margin-left:auto">zašto? zbog čega?</div>
        </div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.7">
          <strong>Veznici:</strong> <em>jer, zato što, budući da, kako, što (s uzrokom)</em><br>
          <strong>Primjeri:</strong><br>
          <em>• „Učim <strong style="color:#e67e22">jer želim položiti</strong>."</em><br>
          <em>• „Sretna sam <strong style="color:#e67e22">što si došao</strong>."</em><br>
          <em>• „<strong style="color:#e67e22">Budući da pada kiša</strong>, ostat ćemo doma."</em>
        </div>
        <div style="font-size:11px;color:#e67e22;margin-top:6px;font-style:italic">⭐ Najčešća priložna zavisna na maturi.</div>
      </div>
      
      <!-- 5. Posljedična -->
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid #e67e22;border-radius:var(--r1)">
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px">
          <div style="font-family:var(--display);font-weight:800;color:#e67e22;font-size:16px">B2.5</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px">POSLJEDIČNA</div>
          <div style="font-size:11px;color:var(--t3);margin-left:auto">s kojom posljedicom?</div>
        </div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.7">
          <strong>Veznici:</strong> <em>da (uz „toliko / tako"), te</em><br>
          <strong>Primjeri:</strong><br>
          <em>• „Toliko sam umoran <strong style="color:#e67e22">da ne mogu hodati</strong>."</em><br>
          <em>• „Tako se naljutio <strong style="color:#e67e22">da je otišao</strong>."</em>
        </div>
        <div style="font-size:11px;color:var(--t3);margin-top:6px;font-style:italic">Često uz „toliko/tako" u glavnoj. Ne brkati s objektnom „da"!</div>
      </div>
      
      <!-- 6. Namjerna -->
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid #e67e22;border-radius:var(--r1)">
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px">
          <div style="font-family:var(--display);font-weight:800;color:#e67e22;font-size:16px">B2.6</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px">NAMJERNA</div>
          <div style="font-size:11px;color:var(--t3);margin-left:auto">s kojom namjerom?</div>
        </div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.7">
          <strong>Veznici:</strong> <em>da, kako (bi)</em><br>
          <strong>Primjeri:</strong><br>
          <em>• „Učim <strong style="color:#e67e22">da položim maturu</strong>."</em><br>
          <em>• „Žurim <strong style="color:#e67e22">kako bih stigao na vrijeme</strong>."</em>
        </div>
        <div style="font-size:11px;color:var(--t3);margin-top:6px;font-style:italic">Često s kondicionalom („bi"). Razlika od posljedične: namjera je svrha, posljedica je rezultat.</div>
      </div>
      
      <!-- 7. Pogodbena -->
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid #e67e22;border-radius:var(--r1)">
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px">
          <div style="font-family:var(--display);font-weight:800;color:#e67e22;font-size:16px">B2.7</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px">POGODBENA (kondicionalna)</div>
          <div style="font-size:11px;color:var(--t3);margin-left:auto">pod kojim uvjetom?</div>
        </div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.7">
          <strong>Veznici:</strong> <em>ako, kad bi, da</em><br>
          <strong>Primjeri:</strong><br>
          <em>• „<strong style="color:#e67e22">Ako budeš učio</strong>, položit ćeš."</em><br>
          <em>• „<strong style="color:#e67e22">Da imam novca</strong>, kupio bih auto."</em><br>
          <em>• „<strong style="color:#e67e22">Kad bih znao</strong>, rekao bih ti."</em>
        </div>
      </div>
      
      <!-- 8. Dopusna -->
      <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid #e67e22;border-radius:var(--r1)">
        <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px">
          <div style="font-family:var(--display);font-weight:800;color:#e67e22;font-size:16px">B2.8</div>
          <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:15px">DOPUSNA (koncesivna)</div>
          <div style="font-size:11px;color:var(--t3);margin-left:auto">usprkos čemu? iako?</div>
        </div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.7">
          <strong>Veznici:</strong> <em>iako, premda, mada, makar, i ako</em><br>
          <strong>Primjeri:</strong><br>
          <em>• „<strong style="color:#e67e22">Iako sam umorna</strong>, idem trčati."</em><br>
          <em>• „<strong style="color:#e67e22">Premda nije znao</strong>, riješio je zadatak."</em><br>
          <em>• „<strong style="color:#e67e22">Makar pao</strong>, ustat će opet."</em>
        </div>
      </div>
      
    </div>

    <!-- ═══════════════════════════════════
         SEKCIJA C · INTERPUNKCIJA
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">📜 C · Interpunkcija — pravila zareza</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(224,82,82,.04),transparent);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r2);margin:16px 0">
      <div style="font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:14px">
        Zarez u složenim rečenicama nije slučajan — postoji <strong>nekoliko jasnih pravila</strong>. Većinu maturnih pitanja o zarezu možeš riješiti znajući ova 4 pravila.
      </div>
      
      <div style="display:grid;gap:12px">
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:6px">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;background:var(--gold);color:#0F0605;border-radius:50%;font-family:var(--mono);font-weight:800;font-size:11px">1</span>
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px">Suprotne nezavisne — UVIJEK zarez</div>
          </div>
          <div style="font-size:12.5px;color:var(--t2);line-height:1.6">
            Pred <strong>a, ali, no, nego, već</strong> uvijek zarez.<br>
            ✅ <em>„Učim<strong>,</strong> a ti spavaš."</em>
          </div>
        </div>
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:6px">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;background:var(--gold);color:#0F0605;border-radius:50%;font-family:var(--mono);font-weight:800;font-size:11px">2</span>
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px">Zavisna NAKON glavne — zarez pred veznikom</div>
          </div>
          <div style="font-size:12.5px;color:var(--t2);line-height:1.6">
            Kad zavisna dolazi iza glavne, zarez pred <strong>jer, da, ako, kad, dok, koji, što, iako...</strong><br>
            ✅ <em>„Učim<strong>,</strong> jer želim položiti." · „Vjerujem<strong>,</strong> da si u pravu."</em>
          </div>
        </div>
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:6px">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;background:var(--gold);color:#0F0605;border-radius:50%;font-family:var(--mono);font-weight:800;font-size:11px">3</span>
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px">Zavisna PRIJE glavne — zarez na kraju zavisne</div>
          </div>
          <div style="font-size:12.5px;color:var(--t2);line-height:1.6">
            Kad zavisna dolazi prije glavne, zarez između njih.<br>
            ✅ <em>„Ako budeš učio<strong>,</strong> položit ćeš." · „Iako pada kiša<strong>,</strong> idem van."</em>
          </div>
        </div>
        
        <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:6px">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;background:var(--gold);color:#0F0605;border-radius:50%;font-family:var(--mono);font-weight:800;font-size:11px">4</span>
            <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px">Umetnuta zavisna — zarezi sa OBJE strane</div>
          </div>
          <div style="font-size:12.5px;color:var(--t2);line-height:1.6">
            Kad je zavisna umetnuta unutar glavne, ZAREZI sa obje strane.<br>
            ✅ <em>„Knjiga<strong>,</strong> koju mi je dala<strong>,</strong> je odlična."</em>
          </div>
        </div>
        
        <div style="padding:14px;background:rgba(80,200,120,.04);border:1px solid var(--bd);border-left:3px solid var(--green);border-radius:var(--r1)">
          <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:6px">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;background:var(--green);color:#fff;border-radius:50%;font-family:var(--mono);font-weight:800;font-size:11px">+</span>
            <div style="font-family:var(--display);font-weight:700;color:var(--green);font-size:14px">BEZ zareza — sastavne i rastavne sa „i, pa, te, ili"</div>
          </div>
          <div style="font-size:12.5px;color:var(--t2);line-height:1.6">
            Pred <strong>i, pa, te, ili, niti, ni</strong> obično <strong>NEMA zareza</strong>.<br>
            ✅ <em>„Učim i pišem zadaću." · „Idem ili ostajem." · „Otišao je pa došao."</em><br>
            <em style="color:var(--t3);font-size:11px">Iznimka: ako se zareze koristi za jasnoću u dugim rečenicama.</em>
          </div>
        </div>
        
      </div>
    </div>

    <!-- ═══════════════════════════════════
         TABLICA SVIH VEZNIKA
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">📋 Tablica · svi veznici po vrstama</div><div class="sec-line"></div></div>
    
    <div style="padding:14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);margin:16px 0;overflow-x:auto">
      <div style="margin-bottom:14px">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--gold);margin-bottom:4px">NEZAVISNI VEZNICI</div>
        <div style="font-size:11.5px;color:var(--t3)">spajaju 2 ravnopravne rečenice — bez glavne/zavisne</div>
      </div>
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px;margin-bottom:20px">
        <thead>
          <tr style="background:var(--bg);border-bottom:2px solid var(--gold)">
            <th style="padding:8px;text-align:left;color:var(--gold);font-size:10.5px">Vrsta</th>
            <th style="padding:8px;text-align:left;color:var(--gold);font-size:10.5px">Veznici</th>
            <th style="padding:8px;text-align:left;color:var(--gold);font-size:10.5px">Primjer</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--green);font-weight:700">Sastavna</td><td style="padding:8px">i, pa, te, ni, niti</td><td style="padding:8px;font-style:italic">Učim <strong>i</strong> pišem.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--blue);font-weight:700">Rastavna</td><td style="padding:8px">ili</td><td style="padding:8px;font-style:italic">Učim <strong>ili</strong> spavam.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--red);font-weight:700">Suprotna</td><td style="padding:8px">a, ali, no, nego, već</td><td style="padding:8px;font-style:italic">Učim, <strong>ali</strong> sam umoran.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--bronze);font-weight:700">Zaključna</td><td style="padding:8px">zato, stoga, dakle, prema tome</td><td style="padding:8px;font-style:italic">Pada kiša, <strong>zato</strong> ostajem.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#9b59b6;font-weight:700">Izuzetna</td><td style="padding:8px">samo, jedino, osim što</td><td style="padding:8px;font-style:italic">Sve znam, <strong>samo</strong> ovo ne.</td></tr>
          <tr><td style="padding:8px;color:#e67e22;font-weight:700">Objasnidbena</td><td style="padding:8px">i to, naime, to jest</td><td style="padding:8px;font-style:italic">Učim, <strong>naime</strong> idem na maturu.</td></tr>
        </tbody>
      </table>
      
      <div style="margin-bottom:14px">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--bronze);margin-bottom:4px">ZAVISNI VEZNICI</div>
        <div style="font-size:11.5px;color:var(--t3)">uvode zavisnu rečenicu — koja ovisi o glavnoj</div>
      </div>
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px">
        <thead>
          <tr style="background:var(--bg);border-bottom:2px solid var(--bronze)">
            <th style="padding:8px;text-align:left;color:var(--bronze);font-size:10.5px">Vrsta</th>
            <th style="padding:8px;text-align:left;color:var(--bronze);font-size:10.5px">Veznici / zamjenice</th>
            <th style="padding:8px;text-align:left;color:var(--bronze);font-size:10.5px">Primjer</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--blue);font-weight:700">Subjektna</td><td style="padding:8px">tko, što, da, koji</td><td style="padding:8px;font-style:italic"><strong>Tko</strong> rano rani, dva grabi.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--red);font-weight:700">Predikatna</td><td style="padding:8px">kakav, koji, što</td><td style="padding:8px;font-style:italic">Ona je, <strong>kakvu</strong> sam tražio.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--green);font-weight:700">Objektna</td><td style="padding:8px">da, što, kako, gdje, tko, „li"</td><td style="padding:8px;font-style:italic">Vjerujem, <strong>da</strong> si tu.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--bronze);font-weight:700">Atributna</td><td style="padding:8px">koji, koja, koje, što, kakav, čiji</td><td style="padding:8px;font-style:italic">Knjiga, <strong>koju</strong> čitam, je dobra.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Mjesna</td><td style="padding:8px">gdje, kamo, kuda, odakle</td><td style="padding:8px;font-style:italic">Idem, <strong>kamo</strong> me zoveš.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Vremenska</td><td style="padding:8px">kad, dok, otkad, čim, prije nego</td><td style="padding:8px;font-style:italic">Dođi, <strong>kad</strong> stigneš.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Načinska</td><td style="padding:8px">kako, kao da, kao što</td><td style="padding:8px;font-style:italic">Radi, <strong>kako</strong> sam rekao.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Uzročna</td><td style="padding:8px">jer, zato što, budući da, kako</td><td style="padding:8px;font-style:italic">Učim, <strong>jer</strong> moram.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Posljedična</td><td style="padding:8px">da (uz „toliko/tako"), te</td><td style="padding:8px;font-style:italic">Tako sam umoran, <strong>da</strong> spavam.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Namjerna</td><td style="padding:8px">da, kako (bi)</td><td style="padding:8px;font-style:italic">Učim, <strong>da</strong> položim.</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Pogodbena</td><td style="padding:8px">ako, kad bi, da</td><td style="padding:8px;font-style:italic"><strong>Ako</strong> učiš, položiš.</td></tr>
          <tr><td style="padding:8px;color:#e67e22;font-weight:700">Dopusna</td><td style="padding:8px">iako, premda, mada, makar</td><td style="padding:8px;font-style:italic"><strong>Iako</strong> ne znam, idem.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- KLJUČNE ZAMKE -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">⚠️ Ključne zamke · da, što, kako, koji</div><div class="sec-line"></div></div>
    
    <div style="padding:18px;background:linear-gradient(135deg,rgba(224,82,82,.04),transparent);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r2);margin:16px 0">
      <div style="font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:14px">
        Isti veznik može uvoditi <strong>različite vrste zavisnih rečenica</strong>. Razliku radiš <strong>po pitanju koje postavljaš</strong> i po <strong>kontekstu</strong>.
      </div>
      
      <div style="display:grid;gap:10px">
        
        <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;display:flex;justify-content:space-between;align-items:center">
            <span>Veznik <strong style="color:var(--red)">DA</strong> — 4 različite vrste!</span>
            <span style="color:var(--t3)">▾</span>
          </summary>
          <div style="margin-top:10px;font-size:12.5px;line-height:1.7;color:var(--t2)">
            • <strong>Objektna:</strong> <em>„Vjerujem, <strong>da</strong> si u pravu."</em> — pitanje: vjerujem ŠTO?<br>
            • <strong>Subjektna:</strong> <em>„Žao mi je, <strong>da</strong> ne dolaziš."</em> — što mi je žao?<br>
            • <strong>Posljedična:</strong> <em>„Toliko je umoran, <strong>da</strong> spava."</em> — uz „toliko/tako"<br>
            • <strong>Namjerna:</strong> <em>„Učim, <strong>da</strong> položim."</em> — pitanje: zašto učim?<br>
            • <strong>Pogodbena:</strong> <em>„<strong>Da</strong> imam novca, putovao bih."</em> — uz kondicional
          </div>
        </details>
        
        <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;display:flex;justify-content:space-between;align-items:center">
            <span>Veznik <strong style="color:var(--red)">ŠTO</strong> — 4 vrste</span>
            <span style="color:var(--t3)">▾</span>
          </summary>
          <div style="margin-top:10px;font-size:12.5px;line-height:1.7;color:var(--t2)">
            • <strong>Subjektna:</strong> <em>„<strong>Što</strong> traži, to nalazi."</em><br>
            • <strong>Objektna:</strong> <em>„Pitao je, <strong>što</strong> radim."</em><br>
            • <strong>Atributna:</strong> <em>„Knjiga, <strong>što</strong> mi je dala, je dobra." (rijetko, češće „koju")</em><br>
            • <strong>Uzročna:</strong> <em>„Sretna sam, <strong>što</strong> si došao."</em>
          </div>
        </details>
        
        <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;display:flex;justify-content:space-between;align-items:center">
            <span>Veznik <strong style="color:var(--red)">KAKO</strong> — 3 vrste</span>
            <span style="color:var(--t3)">▾</span>
          </summary>
          <div style="margin-top:10px;font-size:12.5px;line-height:1.7;color:var(--t2)">
            • <strong>Načinska:</strong> <em>„Radi, <strong>kako</strong> sam ti rekao." — pitanje: kako radi?</em><br>
            • <strong>Objektna:</strong> <em>„Pitao je, <strong>kako</strong> si." — pitanje: pitao ŠTO?</em><br>
            • <strong>Uzročna:</strong> <em>„<strong>Kako</strong> si već došao, ostani." — pitanje: zašto?</em>
          </div>
        </details>
        
        <details style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1)">
          <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--t1);font-size:14px;display:flex;justify-content:space-between;align-items:center">
            <span>Zamjenica <strong style="color:var(--red)">KOJI</strong> — 99% atributna</span>
            <span style="color:var(--t3)">▾</span>
          </summary>
          <div style="margin-top:10px;font-size:12.5px;line-height:1.7;color:var(--t2)">
            <strong>Skoro UVIJEK uvodi atributnu zavisnu</strong> — opisuje imenicu u glavnoj rečenici.<br><br>
            ✅ <em>„Knjiga, <strong>koju</strong> čitam, je odlična." — koja knjiga?</em><br>
            ✅ <em>„Vidio sam dječaka, <strong>koji</strong> trči." — koji dječak?</em><br><br>
            <strong style="color:var(--gold)">UVIJEK zarez pred „koji/koja/koje".</strong>
          </div>
        </details>
        
      </div>
    </div>

    
    <!-- INTERAKTIVNA VJEŽBA -->
    
    <!-- TABLICA SVIH VEZNIKA -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">📜 Tablica · svi veznici po vrstama</div><div class="sec-line"></div></div>
    
    <div style="padding:14px 16px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);margin:16px 0;overflow-x:auto">
      <div style="margin-bottom:14px">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--gold);margin-bottom:4px">NEZAVISNI VEZNICI</div>
        <div style="font-size:11.5px;color:var(--t3)">spajaju 2 ravnopravne rečenice — bez glavne/zavisne</div>
      </div>
      <div class="table-wrap">
        <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px;margin-bottom:20px">
          <thead>
            <tr style="background:var(--bg);border-bottom:2px solid var(--gold)">
              <th style="padding:8px;text-align:left;color:var(--gold);font-size:10.5px">Vrsta</th>
              <th style="padding:8px;text-align:left;color:var(--gold);font-size:10.5px">Veznici</th>
              <th style="padding:8px;text-align:left;color:var(--gold);font-size:10.5px">Primjer</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--green);font-weight:700">Sastavna</td><td style="padding:8px">i, pa, te, ni, niti</td><td style="padding:8px;font-style:italic">Učim <strong>i</strong> pišem.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--blue);font-weight:700">Rastavna</td><td style="padding:8px">ili</td><td style="padding:8px;font-style:italic">Učim <strong>ili</strong> spavam.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--red);font-weight:700">Suprotna</td><td style="padding:8px">a, ali, no, nego, već</td><td style="padding:8px;font-style:italic">Učim, <strong>ali</strong> sam umoran.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--bronze);font-weight:700">Zaključna</td><td style="padding:8px">zato, stoga, dakle, prema tome</td><td style="padding:8px;font-style:italic">Pada kiša, <strong>zato</strong> ostajem.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#9b59b6;font-weight:700">Izuzetna</td><td style="padding:8px">samo, jedino, osim što</td><td style="padding:8px;font-style:italic">Sve znam, <strong>samo</strong> ovo ne.</td></tr>
            <tr><td style="padding:8px;color:#e67e22;font-weight:700">Objasnidbena</td><td style="padding:8px">i to, naime, to jest</td><td style="padding:8px;font-style:italic">Učim, <strong>naime</strong> idem na maturu.</td></tr>
          </tbody>
        </table>
      </div>
      
      <div style="margin-bottom:14px">
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--bronze);margin-bottom:4px">ZAVISNI VEZNICI</div>
        <div style="font-size:11.5px;color:var(--t3)">uvode zavisnu rečenicu — koja ovisi o glavnoj</div>
      </div>
      <div class="table-wrap">
        <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px">
          <thead>
            <tr style="background:var(--bg);border-bottom:2px solid var(--bronze)">
              <th style="padding:8px;text-align:left;color:var(--bronze);font-size:10.5px">Vrsta</th>
              <th style="padding:8px;text-align:left;color:var(--bronze);font-size:10.5px">Veznici / zamjenice</th>
              <th style="padding:8px;text-align:left;color:var(--bronze);font-size:10.5px">Primjer</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--blue);font-weight:700">Subjektna</td><td style="padding:8px">tko, što, da, koji</td><td style="padding:8px;font-style:italic"><strong>Tko</strong> rano rani, dva grabi.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--red);font-weight:700">Predikatna</td><td style="padding:8px">kakav, koji, što</td><td style="padding:8px;font-style:italic">Ona je, <strong>kakvu</strong> sam tražio.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--green);font-weight:700">Objektna ⭐</td><td style="padding:8px">da, što, kako, gdje, tko, „li"</td><td style="padding:8px;font-style:italic">Vjerujem, <strong>da</strong> si tu.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:var(--bronze);font-weight:700">Atributna ⭐</td><td style="padding:8px">koji, koja, koje, što, kakav, čiji</td><td style="padding:8px;font-style:italic">Knjiga, <strong>koju</strong> čitam, je dobra.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Mjesna</td><td style="padding:8px">gdje, kamo, kuda, odakle</td><td style="padding:8px;font-style:italic">Idem, <strong>kamo</strong> me zoveš.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Vremenska</td><td style="padding:8px">kad, dok, otkad, čim, prije nego</td><td style="padding:8px;font-style:italic">Dođi, <strong>kad</strong> stigneš.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Načinska</td><td style="padding:8px">kako, kao da, kao što</td><td style="padding:8px;font-style:italic">Radi, <strong>kako</strong> sam rekao.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Uzročna ⭐</td><td style="padding:8px">jer, zato što, budući da, kako</td><td style="padding:8px;font-style:italic">Učim, <strong>jer</strong> moram.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Posljedična</td><td style="padding:8px">da (uz „toliko/tako"), te</td><td style="padding:8px;font-style:italic">Tako sam umoran, <strong>da</strong> spavam.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Namjerna</td><td style="padding:8px">da, kako (bi)</td><td style="padding:8px;font-style:italic">Učim, <strong>da</strong> položim.</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px;color:#e67e22;font-weight:700">Pogodbena ⭐</td><td style="padding:8px">ako, kad bi, da</td><td style="padding:8px;font-style:italic"><strong>Ako</strong> učiš, položiš.</td></tr>
            <tr><td style="padding:8px;color:#e67e22;font-weight:700">Dopusna</td><td style="padding:8px">iako, premda, mada, makar</td><td style="padding:8px;font-style:italic"><strong>Iako</strong> ne znam, idem.</td></tr>
          </tbody>
        </table>
      </div>
      <div style="margin-top:10px;font-size:11px;color:var(--t3);font-style:italic">⭐ = NCVVO TOP-tema · pojavljuje se gotovo svake mature</div>
    </div>

    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🎮 Vježba · Klasifikacija složenih (25 rečenica)</div><div class="sec-line"></div></div>
    
    <div style="padding:14px 16px;background:rgba(233,180,70,.06);border:1px solid rgba(233,180,70,.2);border-left:3px solid var(--gold);border-radius:var(--r1);margin:16px 0">
      <div style="font-size:13px;line-height:1.6;color:var(--t2)">
        <strong style="color:var(--gold)">📋 Najteža vježba u H21.</strong> Za svaku rečenicu identificiraj <strong>tip složene</strong> — nezavisno složena (i koje vrste) ili zavisno složena (i koja zavisna). 25 rečenica, varijabilna težina.
      </div>
    </div>
    
    <div id="ss-exercise"></div>
    <div id="ss-result" style="display:none"></div>

    <!-- NAV ROW -->
    <div class="nav-row">
      <span class="nb-btn" onclick="sw(2)">← Vrste rečenica</span>
      <span class="nb-btn primary" onclick="sw(4)">📚 Pojmovnik →</span>
    </div>

  </div><!-- /l3 -->

  <div class="layer" id="l4" role="tabpanel" tabindex="0">

    <!-- BOX-INT -->
    <div class="box-int">
      <div class="box-int-lbl">🎯 Kako koristiti pojmovnik</div>
      <div class="box-int-txt">
        Idealno za <strong>brzu provjeru</strong> tijekom učenja ili pred maturom. Klikni kategoriju za filter, ili upiši pojam u search. <strong>Bookmark</strong> (⭐) označava pojmove za daljnje učenje. Quick Search (Ctrl+K) pretražuje i kroz pojmovnik.
      </div>
    </div>

    <!-- ═══════════════════════════════════
         POJMOVNIK CONTROLS
    ═══════════════════════════════════ -->
    <div class="pojm-controls">
      <!-- Search input -->
      <div class="pojm-search-wrap">
        <span style="font-size:14px">🔍</span>
        <input type="text" id="pojm-search" placeholder="Pretraži pojmove..." 
               oninput="pojm2Render()" 
               style="flex:1;background:transparent;border:none;outline:none;color:var(--t1);font-family:var(--display);font-size:14px;padding:4px 0">
        <button class="pojm-clear" onclick="pojmClearSearch()" title="Očisti">✕</button>
      </div>
      
      <!-- Category filter chips -->
      <div class="pojm-filters">
        <button class="pojm-filter active" data-cat="all" onclick="pojmFilter('all', this)">📖 Sve</button>
        <button class="pojm-filter" data-cat="clanovi" onclick="pojmFilter('clanovi', this)">🏗️ Članovi</button>
        <button class="pojm-filter" data-cat="vrste" onclick="pojmFilter('vrste', this)">📐 Vrste</button>
        <button class="pojm-filter" data-cat="nezavisno" onclick="pojmFilter('nezavisno', this)">🔄 Nezavisno</button>
        <button class="pojm-filter" data-cat="zavisno" onclick="pojmFilter('zavisno', this)">🌳 Zavisno</button>
        <button class="pojm-filter" data-cat="veznici" onclick="pojmFilter('veznici', this)">🔗 Veznici</button>
        <button class="pojm-filter" data-cat="sintagme" onclick="pojmFilter('sintagme', this)">📜 Ostalo</button>
        <button class="pojm-filter" data-cat="star" onclick="pojmFilter('star', this)">⭐ TOP NCVVO</button>
      </div>
      
      <!-- Stats -->
      <div class="pojm-stats">
        <span id="pojm-count" style="font-family:var(--mono);font-size:11px;color:var(--t3)">Učitavanje...</span>
      </div>
    </div>
    
    <!-- Pojmovi grid -->
    <div id="pojm-grid2" class="pojm-grid"></div>

    <!-- NAV ROW -->
    <div class="nav-row">
      <span class="nb-btn" onclick="sw(3)">← Složene rečenice</span>
      <span class="nb-btn primary" onclick="sw(5)">🔬 Parser →</span>
    </div>

  </div><!-- /l4 -->

  <div class="layer" id="l5" role="tabpanel" tabindex="0">

    <!-- BOX-INT -->
    <div class="box-int">
      <div class="box-int-lbl">🎯 Kako koristiti</div>
      <div class="box-int-txt">
        <strong>Parser</strong> radi heuristički — pokriva <strong>~80% maturnih rečenica</strong> (kratke, jasne). Confidence badge ti kaže koliko je siguran. <strong>Tree visualizer</strong> ti pokazuje strukturu vizualno. <strong>AI tutor</strong> može odgovoriti na bilo koje pitanje koje parser ne može.
      </div>
    </div>

    <!-- ═══════════════════════════════════
         PARSER UI
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">🔬 Sintaktički Parser</div><div class="sec-line"></div></div>
    
    <div class="parser-card">
      <div class="parser-input-wrap">
        <label for="parser-input" style="display:block;font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--gold);margin-bottom:8px">UNESI REČENICU</label>
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
          <input type="text" id="parser-input" placeholder="npr. Marija čita zanimljivu knjigu u knjižnici." 
                 onkeydown="if(event.key==='Enter') parserAnalyze()"
                 style="flex:1;min-width:240px;padding:12px 14px;background:var(--bg);border:1.5px solid var(--bd);border-radius:var(--r1);color:var(--t1);font-family:var(--display);font-size:14px;outline:none">
          <button class="nb-btn primary" onclick="parserAnalyze()" style="padding:12px 18px;font-size:13px">🔬 Analiziraj</button>
          <button class="nb-btn" onclick="parserShowHistory()" style="padding:12px 14px;font-size:13px" title="Pokaži zadnjih 5 analiza">📜</button>
        </div>
        
        <!-- History dropdown -->
        <div id="parser-history-list" class="parser-history-dropdown" style="display:none"></div>
        
        <!-- Difficulty selector -->
        <div style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap;align-items:center">
          <span style="font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1px">TEŽINA →</span>
          <button class="nb-btn parser-diff-btn on" style="padding:4px 10px;font-size:10.5px" onclick="parserSetDiff('all', this)">Sve</button>
          <button class="nb-btn parser-diff-btn" style="padding:4px 10px;font-size:10.5px;color:var(--green);border-color:var(--green)" onclick="parserSetDiff('easy', this)">🟢 Lako</button>
          <button class="nb-btn parser-diff-btn" style="padding:4px 10px;font-size:10.5px;color:var(--gold);border-color:var(--gold)" onclick="parserSetDiff('medium', this)">🟡 Srednje</button>
          <button class="nb-btn parser-diff-btn" style="padding:4px 10px;font-size:10.5px;color:var(--bronze);border-color:var(--bronze)" onclick="parserSetDiff('hard', this)">🟠 Teško</button>
          <button class="nb-btn parser-diff-btn" style="padding:4px 10px;font-size:10.5px;color:var(--red);border-color:var(--red)" onclick="parserSetDiff('expert', this)">🔴 Expert</button>
        </div>
        
        <!-- Quick examples -->
        <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;align-items:center">
          <span style="font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1px">PRIMJERI →</span>
          <button class="nb-btn" style="padding:4px 10px;font-size:10.5px" onclick="parserExample('Marija čita zanimljivu knjigu.')">prosta</button>
          <button class="nb-btn" style="padding:4px 10px;font-size:10.5px" onclick="parserExample('Učim, ali sam umoran.')">nezav. suprotna</button>
          <button class="nb-btn" style="padding:4px 10px;font-size:10.5px" onclick="parserExample('Pada kiša, zato ostajem doma.')">zaključna</button>
          <button class="nb-btn" style="padding:4px 10px;font-size:10.5px" onclick="parserExample('Vjerujem da si u pravu.')">zav. objektna</button>
          <button class="nb-btn" style="padding:4px 10px;font-size:10.5px" onclick="parserExample('Knjiga koju mi je dala je odlična.')">zav. atributna</button>
          <button class="nb-btn" style="padding:4px 10px;font-size:10.5px" onclick="parserExample('Ako budeš učio, položit ćeš.')">pogodbena</button>
          <button class="nb-btn" style="padding:4px 10px;font-size:10.5px" onclick="parserExample('Iako sam umoran, idem na trening.')">dopusna</button>
          <button class="nb-btn" style="padding:4px 10px;font-size:10.5px" onclick="parserExample('Toliko sam umoran da spavam stojeći.')">posljedična</button>
          <button class="nb-btn" style="padding:4px 10px;font-size:10.5px;border-color:var(--blue);color:var(--blue);font-weight:700" onclick="parserRandom()">🎲 Random</button>
        </div>
      </div>
      
      <div id="parser-output" class="parser-output"></div>
    </div>

    <!-- ═══════════════════════════════════
         AI TUTOR
    ═══════════════════════════════════ -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">🤖 AI Profesor — Sintaksa</div><div class="sec-line"></div></div>
    
    <div style="padding:14px 16px;background:rgba(74,144,217,.04);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r1);margin:16px 0">
      <div style="font-size:13px;color:var(--t2);line-height:1.6">
        <strong style="color:var(--blue)">💡 Pitaj AI tutora bilo što o sintaksi.</strong> Specijaliziran za hrvatsku sintaksu i pripremu za maturu. Daje detaljne odgovore s primjerima.
      </div>
    </div>
    
    <div class="ai-tutor-card">
      <div style="margin-bottom:12px">
        <label for="ai-input" style="display:block;font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--blue);margin-bottom:8px">PITAJ TUTORA</label>
        <textarea id="ai-input" rows="3" placeholder="npr. Kako razlikujem objektnu od atributne zavisne rečenice?" 
                  style="width:100%;padding:12px 14px;background:var(--bg);border:1.5px solid var(--bd);border-radius:var(--r1);color:var(--t1);font-family:var(--display);font-size:14px;outline:none;resize:vertical;line-height:1.5"></textarea>
      </div>
      
      <div style="display:flex;gap:8px;justify-content:space-between;align-items:center;flex-wrap:wrap">
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <span style="font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1px;align-self:center">PRIMJERI →</span>
          <button class="nb-btn" style="padding:4px 10px;font-size:10.5px" onclick="aiAskExample('Kako razlikujem priložnu oznaku od neizravnog objekta?')">PO vs O</button>
          <button class="nb-btn" style="padding:4px 10px;font-size:10.5px" onclick="aiAskExample('Kada se piše zarez pred „da&quot;?')">zarez „da&quot;</button>
          <button class="nb-btn" style="padding:4px 10px;font-size:10.5px" onclick="aiAskExample('Što je razlika atributa i apozicije s primjerima?')">A vs Ap</button>
          <button class="nb-btn" style="padding:4px 10px;font-size:10.5px" onclick="aiAskExample('Kako prepoznajem subjektnu zavisnu rečenicu?')">subjektna</button>
        </div>
        <button class="nb-btn primary" onclick="aiAsk()" style="padding:10px 18px;font-size:13px">🤖 Pitaj AI</button>
      </div>
      
      <div id="ai-answer" class="ai-answer" style="display:none">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd)">
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--gold)">🤖 ODGOVOR</div>
          <div style="display:flex;gap:6px">
            <button class="nb-btn" style="padding:4px 10px;font-size:10px" onclick="aiCopy(this)">⎘ Kopiraj</button>
            <button class="nb-btn" style="padding:4px 10px;font-size:10px" onclick="aiShare()">📤 Podijeli</button>
          </div>
        </div>
        <div id="ai-answer-text" style="font-family:var(--serif);font-size:14px;line-height:1.7;color:var(--t1)"></div>
      </div>
    </div>

    <!-- NAV ROW -->
    <div class="nav-row">
      <span class="nb-btn" onclick="sw(4)">← Pojmovnik</span>
      <span class="nb-btn primary" onclick="sw(6)">🧠 Kviz →</span>
    </div>

  </div><!-- /l5 -->

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
      <span class="nb-btn" onclick="sw(5)">← Parser</span>
      <span class="nb-btn primary" onclick="sw(7)">📊 Referentna tablica →</span>
    </div>
  </div>

  <!-- ══════════════════════════════════════
       TAB 7 · CHECKPOINT
  ══════════════════════════════════════ -->
  <div class="layer" id="l7" role="tabpanel" tabindex="0">

        <div class="ref-actions no-print">
      <button class="nb-btn primary" onclick="window.print()" style="padding:10px 20px">🖨️ Isprintaj A4</button>
      <button class="nb-btn" onclick="refToggleScale(this)" style="padding:10px 16px">📐 Zoom</button>
    </div>

    <!-- ═══════════════════════════════════
         REFERENTNA TABLICA (PRINT-OPTIMIZED)
    ═══════════════════════════════════ -->
    <div class="ref-sheet">
      
      <!-- HEADER -->
      <div class="ref-header">
        <div class="ref-title">SINTAKSA HRVATSKOG JEZIKA</div>
        <div class="ref-subtitle">Maturiraj.hr · H21 · Referentna tablica · Matura 2026</div>
      </div>
      
      <!-- 6 REČENIČNIH ČLANOVA -->
      <div class="ref-section">
        <div class="ref-section-ttl">🏗️ 6 REČENIČNIH ČLANOVA · SPO-AAP</div>
        <table class="ref-tbl">
          <thead>
            <tr><th>Član</th><th>Pitanje</th><th>Padež</th><th>Primjer</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Subjekt (S)</strong></td><td>tko? što?</td><td>UVIJEK N</td><td><em>Marija</em> čita.</td></tr>
            <tr><td><strong>Predikat (P)</strong></td><td>što radi? kakav je?</td><td>—</td><td>Marija <em>čita</em>.</td></tr>
            <tr><td><strong>Objekt izravni (O)</strong></td><td>koga? što?</td><td>A bez prijed.</td><td>Marija čita <em>knjigu</em>.</td></tr>
            <tr><td><strong>Objekt neizravni (O)</strong></td><td>komu? čemu?...</td><td>D, G, I, L</td><td>Pomažem <em>bratu</em> (D).</td></tr>
            <tr><td><strong>Atribut (A)</strong></td><td>kakav? čiji?</td><td>=N (sročni)</td><td><em>Lijepa</em> knjiga.</td></tr>
            <tr><td><strong>Apozicija (Ap)</strong></td><td>tko je to?</td><td>=N (slag.)</td><td>Ivan, <em>moj brat</em>, dolazi.</td></tr>
            <tr><td><strong>Priložna (P.O.)</strong></td><td>gdje? kada? kako? zašto?</td><td>razno</td><td>Učim <em>u sobi</em>.</td></tr>
          </tbody>
        </table>
        <div class="ref-note">
          <strong>Glagoli s D:</strong> pomagati, vjerovati, prijetiti · <strong>s G:</strong> sjećati se, bojati se · <strong>s I:</strong> upravljati
        </div>
      </div>
      
      <!-- VRSTE REČENICA -->
      <div class="ref-section">
        <div class="ref-section-ttl">📐 VRSTE REČENICA · 3 KLASIFIKACIJE</div>
        <div class="ref-grid-3">
          <div class="ref-mini">
            <div class="ref-mini-ttl">PO SASTAVU</div>
            <ul>
              <li><strong>Prosta</strong> · 1 predikat</li>
              <li><strong>Složena nezavisna</strong> · 2+ ravnopr.</li>
              <li><strong>Složena zavisna</strong> · 2+ ovisne</li>
            </ul>
          </div>
          <div class="ref-mini">
            <div class="ref-mini-ttl">PO SVRSI</div>
            <ul>
              <li><strong>Izjavna</strong> · obavijest (.)</li>
              <li><strong>Upitna</strong> · pitanje (?)</li>
              <li><strong>Usklična</strong> · emocija (!)</li>
              <li><strong>Zapovjedna</strong> · imperativ</li>
              <li><strong>Optativna</strong> · želja</li>
            </ul>
          </div>
          <div class="ref-mini">
            <div class="ref-mini-ttl">PO ZNAČENJU</div>
            <ul>
              <li><strong>Potvrdna</strong> · bez negacije</li>
              <li><strong>Niječna</strong> · s ne/ni/nikad</li>
            </ul>
            <div class="ref-mini-note">U HR više negacija = pojača.</div>
          </div>
        </div>
      </div>
      
      <!-- NEZAVISNI VEZNICI -->
      <div class="ref-section">
        <div class="ref-section-ttl">🔄 NEZAVISNO SLOŽENE · 6 VRSTA · SaRaSuZIO</div>
        <table class="ref-tbl">
          <thead>
            <tr><th>Vrsta</th><th>Veznici</th><th>Primjer</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Sastavna</strong></td><td>i, pa, te, ni, niti</td><td>Učim <em>i</em> pišem.</td></tr>
            <tr><td><strong>Rastavna</strong></td><td>ili</td><td>Idem <em>ili</em> ostajem.</td></tr>
            <tr><td><strong>Suprotna ⚠</strong></td><td>a, ali, no, nego, već</td><td>Učim, <em>ali</em> umoran sam.</td></tr>
            <tr><td><strong>Zaključna</strong></td><td>zato, stoga, dakle, prema tome</td><td>Pada kiša, <em>zato</em> ostajem.</td></tr>
            <tr><td><strong>Izuzetna</strong></td><td>samo, jedino, osim što</td><td>Sve znam, <em>samo</em> ovo ne.</td></tr>
            <tr><td><strong>Objasnidbena</strong></td><td>i to, naime, to jest</td><td>Učim, <em>naime</em> idem na maturu.</td></tr>
          </tbody>
        </table>
      </div>
      
      <!-- ZAVISNI VEZNICI -->
      <div class="ref-section">
        <div class="ref-section-ttl">🌳 ZAVISNO SLOŽENE · 12 VRSTA</div>
        <table class="ref-tbl">
          <thead>
            <tr><th>Vrsta</th><th>Pitanje</th><th>Veznici / zamj.</th><th>Primjer</th></tr>
          </thead>
          <tbody>
            <tr><td colspan="4" style="background:#eee;padding:3px 6px;font-size:9px;font-weight:700">IMENSKE (4)</td></tr>
            <tr><td><strong>Subjektna</strong></td><td>tko? što?</td><td>tko, što, da</td><td><em>Tko rani</em>, dvije sreće grabi.</td></tr>
            <tr><td><strong>Predikatna</strong></td><td>kakav je?</td><td>kakav, koji</td><td>Ona je, <em>kakvu sam tražio</em>.</td></tr>
            <tr><td><strong>Objektna ⭐</strong></td><td>koga? što?</td><td>da, što, kako, gdje, „li"</td><td>Vjerujem, <em>da si u pravu</em>.</td></tr>
            <tr><td><strong>Atributna ⭐</strong></td><td>kakav? koji?</td><td>koji, koja, koje, što, čiji</td><td>Knjiga, <em>koju čitam</em>, je dobra.</td></tr>
            <tr><td colspan="4" style="background:#eee;padding:3px 6px;font-size:9px;font-weight:700">PRILOŽNE (8)</td></tr>
            <tr><td><strong>Mjesna</strong></td><td>gdje?</td><td>gdje, kamo, kuda, odakle</td><td>Idem, <em>kamo me zoveš</em>.</td></tr>
            <tr><td><strong>Vremenska</strong></td><td>kada?</td><td>kad, dok, otkad, čim, prije nego</td><td>Dođi, <em>kad stigneš</em>.</td></tr>
            <tr><td><strong>Načinska</strong></td><td>kako?</td><td>kako, kao da, kao što</td><td>Radi, <em>kako sam rekao</em>.</td></tr>
            <tr><td><strong>Uzročna ⭐</strong></td><td>zašto?</td><td>jer, zato što, budući da, što</td><td>Učim, <em>jer moram</em>.</td></tr>
            <tr><td><strong>Posljedična</strong></td><td>posljedica?</td><td>da (uz „toliko/tako")</td><td>Toliko sam umoran, <em>da spavam</em>.</td></tr>
            <tr><td><strong>Namjerna</strong></td><td>s kojom svrhom?</td><td>da, kako bi</td><td>Učim, <em>da položim</em>.</td></tr>
            <tr><td><strong>Pogodbena ⭐</strong></td><td>uvjet?</td><td>ako, kad bi, da</td><td><em>Ako učiš</em>, položiš.</td></tr>
            <tr><td><strong>Dopusna</strong></td><td>iako?</td><td>iako, premda, mada, makar</td><td><em>Iako pada kiša</em>, idem.</td></tr>
          </tbody>
        </table>
      </div>
      
      <!-- INTERPUNKCIJA -->
      <div class="ref-section">
        <div class="ref-section-ttl">📜 PRAVILA ZAREZA · KOMPLETNO</div>
        <div class="ref-grid-2">
          <div class="ref-mini">
            <div class="ref-mini-ttl">UVIJEK ZAREZ ✅</div>
            <ul>
              <li>Pred <strong>a, ali, no, nego, već</strong></li>
              <li>Pred <strong>koji/koja/koje/koju</strong></li>
              <li>Pred <strong>jer, da, ako, kad, dok, iako, premda</strong> (kad zavisna iza glavne)</li>
              <li>Iza zavisne (kad ide pred glavnu)</li>
              <li>Sa OBJE strane umetnute zavisne</li>
              <li>Apozicija: zarezi sa obje strane</li>
            </ul>
          </div>
          <div class="ref-mini">
            <div class="ref-mini-ttl">BEZ ZAREZA ❌</div>
            <ul>
              <li>Pred <strong>i, pa, te, ili, niti</strong> (sastavni i rastavni)</li>
              <li>Atribut bez apozicijske funkcije</li>
              <li>Između subjekta i predikata</li>
              <li>Između predikata i objekta</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- MNEMOTEHNIKE -->
      <div class="ref-section">
        <div class="ref-section-ttl">🧠 MNEMOTEHNIKE · ZA PAMĆENJE</div>
        <div class="ref-grid-3">
          <div class="ref-mini">
            <div class="ref-mini-ttl">SPO-AAP</div>
            <div>6 rečeničnih članova:<br><strong>S</strong>ubjekt · <strong>P</strong>redikat · <strong>O</strong>bjekt · <strong>A</strong>tribut · <strong>A</strong>pozicija · <strong>P</strong>riložne oz.</div>
          </div>
          <div class="ref-mini">
            <div class="ref-mini-ttl">MVNU</div>
            <div>4 priložne oznake:<br><strong>M</strong>jesta (gdje?) · <strong>V</strong>remena (kada?) · <strong>N</strong>ačina (kako?) · <strong>U</strong>zroka (zašto?)</div>
          </div>
          <div class="ref-mini">
            <div class="ref-mini-ttl">SaRaSuZIO</div>
            <div>6 nezav. složenih:<br><strong>Sa</strong>stavna · <strong>Ra</strong>stavna · <strong>Su</strong>protna · <strong>Z</strong>aključna · <strong>I</strong>zuzetna · <strong>O</strong>bjasnidbena</div>
          </div>
          <div class="ref-mini">
            <div class="ref-mini-ttl">Subjekt = N</div>
            <div>UVIJEK u nominativu (1. padež). Pitanje „tko?/što?"</div>
          </div>
          <div class="ref-mini">
            <div class="ref-mini-ttl">Br. predikata</div>
            <div>= broj rečenica u složenoj. Infinitiv NE računa!</div>
          </div>
          <div class="ref-mini">
            <div class="ref-mini-ttl">Apozicija = zarez</div>
            <div>Imenica koja objašnjava drugu = uvijek zarezi.</div>
          </div>
        </div>
      </div>
      
      <!-- ZAMKE -->
      <div class="ref-section">
        <div class="ref-section-ttl">⚠ KLJUČNE ZAMKE · DA, ŠTO, KAKO, KOJI</div>
        <div class="ref-zamke">
          <div><strong>DA → 5 vrsta!</strong> Objektna („vjerujem da"), Posljedična („tako da"), Namjerna („učim da"), Pogodbena („da imam novca"), Subjektna („žao mi je da").</div>
          <div><strong>ŠTO → 4 vrste:</strong> Subjektna, Objektna, Atributna, Uzročna („sretna sam što").</div>
          <div><strong>KAKO → 3 vrste:</strong> Načinska („kako sam rekao"), Objektna („pitao kako si"), Uzročna („kako si već došao").</div>
          <div><strong>KOJI/KOJA/KOJE → 99% atributna.</strong> Uvijek zarez pred njim!</div>
          <div><strong>Subjekt nije u I:</strong> „Prijateljem je došao" → „prijateljem" je P.O. društva (I), ne subjekt.</div>
          <div><strong>Glagoli s D ne A:</strong> pomoći, vjerovati, prijetiti — „pomažem mu" (D), ne „ga"!</div>
        </div>
      </div>
      
      <!-- FOOTER -->
      <div class="ref-footer">
        <div>📚 H21 Sintaksa · Maturiraj.hr · 2026</div>
        <div>Cilj: <strong>85%+</strong> na kvizu (Tab 6) prije mature</div>
      </div>
      
    </div>

    <!-- NAV ROW -->
    <div class="nav-row no-print">
      <span class="nb-btn" onclick="sw(6)">← Kviz</span>
      <span class="nb-btn primary" onclick="sw(0)">🔁 Natrag na Teoriju</span>
    </div>

  </div><!-- /l7 -->
</div><!-- /content-wrap -->
  <!-- ═══════════════════════════════════
       CROSS-CHAPTER NAVIGATION
  ═══════════════════════════════════ -->
  <div class="chapter-nav-wrap">
    <div class="chapter-nav-hdr">
      <div class="chapter-nav-title">📚 Sljedeća poglavlja</div>
      <div class="chapter-nav-sub">Nastavi učiti — povezana poglavlja u sustavu hrvatskoga jezika</div>
    </div>
    
    <div class="chapter-nav-grid">
      <a class="chapter-nav-card chapter-nav-prev" href="/skripte/hrv/h20">
        <div class="chapter-nav-arrow">←</div>
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill">PRETHODNO</div>
          <div class="chapter-nav-name">H20 · Morfologija</div>
          <div class="chapter-nav-desc">Vrste riječi, sklonidbe i sprezanja</div>
        </div>
      </a>

      <a class="chapter-nav-card chapter-nav-next" href="/skripte/hrv/h22">
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill chapter-nav-pill-next">SLJEDEĆE</div>
          <div class="chapter-nav-name">H22 · Leksikologija</div>
          <div class="chapter-nav-desc">Značenje riječi, frazemi, tropi</div>
        </div>
        <div class="chapter-nav-arrow">→</div>
      </a>
</div>

    <div class="chapter-nav-related">
      <div class="chapter-nav-related-ttl">🔗 Povezana poglavlja</div>
      <div class="chapter-nav-related-grid">
        <a class="chapter-nav-mini" href="/skripte/hrv/h19">
          <span class="chapter-nav-mini-code">H19</span>
          <span class="chapter-nav-mini-name">Fonologija</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h20">
          <span class="chapter-nav-mini-code">H20</span>
          <span class="chapter-nav-mini-name">Morfologija</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h22">
          <span class="chapter-nav-mini-code">H22</span>
          <span class="chapter-nav-mini-name">Leksikologija</span>
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


const KVIZ_Q = [
  // ═══ REČENIČNI ČLANOVI (8) ═══
  {q:'U rečenici „Marija čita zanimljivu knjigu." riječ „zanimljivu" je:',o:['subjekt','objekt','atribut','predikat'],t:2,e:'„Zanimljivu" je atribut — pridjev koji opisuje imenicu „knjigu" (kakvu knjigu?). Slaže se s njom u rodu/broju/padežu.'},
  {q:'Predikat rečenice „Ivan je otišao u školu." je:',o:['Ivan','je otišao','u školu','otišao'],t:1,e:'„Je otišao" — perfekt (pomoćni glagol „biti" + glag. pridjev radni). Predikat je cijeli glagolski oblik, ne samo jedan dio.'},
  {q:'Subjekt rečenice UVIJEK je u padežu:',o:['genitivu','nominativu','dativu','akuzativu'],t:1,e:'Nominativ (N, 1. padež). Pitanje: TKO? ŠTO? Ako riječ nije u N, nije gramatički subjekt.'},
  {q:'U rečenici „Pomažem svom bratu." „bratu" je:',o:['subjekt','izravni objekt','neizravni objekt','priložna oznaka'],t:2,e:'„Bratu" je u dativu (D). Glagol „pomagati" zahtijeva DATIV (ne A!). Dakle NEIZRAVNI objekt, ne izravni.'},
  {q:'U rečenici „Ivan, moj prijatelj, čita." „moj prijatelj" je:',o:['atribut','apozicija','priložna oznaka','objekt'],t:1,e:'Apozicija — imenica + atribut „moj" koja bliže objašnjava drugu imenicu. Uvijek odvojena zarezima i u istom padežu.'},
  {q:'Veznici „i, pa, te, ni" povezuju:',o:['zavisne rečenice','sastavne nezavisne rečenice','suprotne','rastavne'],t:1,e:'Sastavne nezavisno složene rečenice — dvije ravnopravne rečenice u odnosu zbrajanja. Najčešći nezavisni veznici.'},
  {q:'Glagoli „sjećati se" i „bojati se" zahtijevaju objekt u:',o:['akuzativu','nominativu','genitivu','lokativu'],t:2,e:'GENITIV (G). „Sjećam se ljeta." „Bojim se mraka." Ovi glagoli ne idu sa A! Neizravni objekt u G.'},
  {q:'U rečenici „Plače od sreće." „od sreće" je:',o:['objekt','priložna oznaka uzroka','atribut','apozicija'],t:1,e:'Priložna oznaka uzroka („zašto plače?"). Prijedlog „od" + G uvodi uzrok.'},
  
  // ═══ VRSTE REČENICA (7) ═══
  {q:'Koliko rečenica ima u „Učim i pišem, dok moji prijatelji spavaju."?',o:['1','2','3','4'],t:2,e:'3 rečenice (3 predikata: učim, pišem, spavaju). „Učim i pišem" = dvije nezavisne (sastavne), „dok spavaju" = zavisna (vremenska).'},
  {q:'Rečenica „Hoćeš li doći sutra?" je:',o:['izjavna','usklična','zapovjedna','upitna'],t:3,e:'Upitna (potpuna) — traži DA/NE odgovor uz česticu „li". Nepotpuna bi počela s „kada/gdje/tko/što...".'},
  {q:'„Ili učiš ili se ne trudiš." je:',o:['sastavna','rastavna','suprotna','zaključna'],t:1,e:'Rastavna nezavisno složena — veznik „ili" iskazuje izbor između dviju mogućnosti.'},
  {q:'Rečenica „Hoću čokoladu." je:',o:['složena nezavisna','složena zavisna','prosta','asindetska'],t:2,e:'PROSTA — 1 predikat (hoću), inf. „čokoladu" je objekt, nije drugi predikat.'},
  {q:'„Sretan put!" je rečenica po priopćajnoj svrsi:',o:['izjavna','usklična','optativna (želja)','zapovjedna'],t:2,e:'Optativna — izriče želju. Bezglagolska, podrazumijeva se „neka bude". Završava uskličnikom.'},
  {q:'„Da je samo nedjelja!" je rečenica:',o:['izjavna','upitna','optativna','zapovjedna'],t:2,e:'Optativna (želja) — „da" + uskličnik signalizira izraz želje, ne tvrdnju.'},
  {q:'„Nikad nisam ništa rekao." po značenju je:',o:['potvrdna','niječna','upitna','dvostruka'],t:1,e:'Niječna — više negacija (nikad, nisam, ništa) POJAČAVAJU nijek (specifičnost hrvatskog). Engleski to ukida, hrvatski to pojačava.'},
  
  // ═══ SLOŽENE — NEZAVISNE (5) ═══
  {q:'„Učim, ali sam jako umoran." je:',o:['sastavna','suprotna','zaključna','izuzetna'],t:1,e:'Suprotna — veznik „ali" izriče suprotnost. Pred „a, ali, no, nego, već" UVIJEK zarez.'},
  {q:'„Pada kiša, zato ostajem doma." je:',o:['suprotna','zaključna','uzročna zavisna','sastavna'],t:1,e:'Zaključna NEZAVISNO složena — „zato" izvodi posljedicu/zaključak. Ne brkati s uzročnom zavisnom („jer").'},
  {q:'„Mislim, dakle jesam." je:',o:['nezavisno složena zaključna','zavisno složena uzročna','prosta','rastavna'],t:0,e:'Nezavisno složena ZAKLJUČNA — Descartesova. „Dakle" je nezavisni veznik koji izvodi zaključak.'},
  {q:'„Sve smo prošli, samo ovo poglavlje nismo." je:',o:['suprotna','zaključna','izuzetna','sastavna'],t:2,e:'Izuzetna — „samo" iznosi iznimku od onoga što je rečeno u prvoj rečenici.'},
  {q:'„Ulazim u sobu, naime tražim knjigu." je:',o:['sastavna','objasnidbena','uzročna zavisna','suprotna'],t:1,e:'Objasnidbena — „naime" iznosi pojašnjenje, dopunu prve rečenice. Najrjeđa nezavisna vrsta.'},
  
  // ═══ SLOŽENE — ZAVISNE (8) ═══
  {q:'Rečenica „Vjerujem da si u pravu." je:',o:['atributna','objektna','uzročna','vremenska'],t:1,e:'Zavisno složena objektna — druga rečenica zamjenjuje objekt u glavnoj (vjerujem ŠTO? → da si u pravu).'},
  {q:'Kako glasi rečenica iz „Kupit ću knjigu ___ ona stigne."?',o:['ali','jer','kada','ili'],t:2,e:'„Kada" uvodi vremensku zavisnu rečenicu (kad? — označuje vrijeme).'},
  {q:'U „Knjiga koju čitam je odlična." drugi dio je:',o:['objektna','priložna','atributna','uzročna'],t:2,e:'Atributna zavisna — uvodi je odnosna zamjenica „koju" i opisuje imenicu „knjiga" (koja knjiga?).'},
  {q:'Zarez pred veznikom „jer":',o:['nikad','samo u knjigama','kad je zavisna na kraju','uvijek'],t:2,e:'Uvijek se piše zarez pred „jer" kad zavisna uzročna dolazi NAKON glavne. Npr: „Učim, jer želim."'},
  {q:'„Iako sam umorna, idem trčati." je:',o:['vremenska','dopusna','pogodbena','uzročna'],t:1,e:'Dopusna (koncesivna) — „iako" iznosi dopust („usprkos čemu"). Druga radnja se događa unatoč prvoj.'},
  {q:'„Učim da položim maturu." je:',o:['posljedična','namjerna','objektna','uzročna'],t:1,e:'Namjerna — „da" iznosi cilj/svrhu („zašto učim?" → da bih položio). Razlika od posljedične: namjera = svrha, posljedica = rezultat.'},
  {q:'„Toliko sam umoran da spavam stojeći." je:',o:['namjerna','posljedična','uzročna','dopusna'],t:1,e:'Posljedična — „da" uz „toliko/tako" iznosi posljedicu prve radnje. Klasičan signal: „toliko/tako ___ da".'},
  {q:'Tko/što na početku rečenice „Tko rano rani, dvije sreće grabi." uvodi:',o:['objektnu','subjektnu','atributnu','uzročnu'],t:1,e:'Subjektna zavisna — cijela zavisna „Tko rano rani" funkcionira kao subjekt glagola „grabi" iz glavne rečenice.'},
  
  // ═══ ZAMKE I MIX (2) ═══
  {q:'Veznik „da" može uvoditi koliko različitih vrsta zavisne?',o:['1','2','3','5'],t:3,e:'5 vrsta: objektna („vjerujem da..."), namjerna („učim da..."), posljedična („tako da..."), pogodbena („da imam novca..."), subjektna („žao mi je da..."). Najtraži zamka u sintaksi!'},
  {q:'„Misliš li da će sutra padati kiša?" po sastavu je:',o:['prosta','nezavisno složena','zavisno složena','asindetska'],t:2,e:'Zavisno složena objektna („Misliš li ŠTO?" → da će padati kiša). 2 predikata: misliš + će padati. Veznik „da" uvodi objektnu.'},
];const CP_ITEMS=[
  'Razumijem razliku sintakse (odnosi među riječima) i morfologije (oblici riječi).',
  'Znam 4 razine jezičnih jedinica: riječ → sintagma → rečenica → tekst.',
  'Razumijem razliku sintagme (bez predikata) i rečenice (s predikatom).',
  'Znam svih 6 rečeničnih članova (SPO-AAP): subjekt, predikat, objekt, atribut, apozicija, priložne oznake.',
  'Razumijem razliku izravnog (A) i neizravnog (D/G/I/L) objekta, te glagole koji idu s D (pomoći, vjerovati).',
  'Znam 4 vrste priložnih oznaka (MVNU): mjesta, vremena, načina, uzroka.',
  'Razumijem razliku atributa (pridjev, bez zareza) i apozicije (imenica, sa zarezima).',
  'Znam 5 vrsta rečenica po priopćajnoj svrsi: izjavne, upitne, usklične, zapovjedne, želje.',
  'Znam 6 tipova nezavisno složenih (sastavne, rastavne, suprotne, zaključne, izuzetne, objasnidbene) + veznike.',
  'Znam glavne zavisno složene (objektne, atributne, priložne) i znam staviti zarez pred „koji/da/jer/ako".',
];

const DIAG0_Q=[
  {q:'U rečenici „Marija čita knjigu." koliko ima rečeničnih članova?',o:['2','3','4','1'],t:1,e:'3 člana: Marija (subjekt), čita (predikat), knjigu (izravni objekt u A).'},
  {q:'Rečenica „Učim, jer želim položiti." je:',o:['prosta','nezavisno složena (suprotna)','zavisno složena (uzročna)','nepotpuna'],t:2,e:'Zavisno složena uzročna — druga rečenica („jer želim položiti") uvjetuje prvu. Veznik „jer" uvodi uzročnu.'},
  {q:'Subjekt rečenice uvijek je u padežu:',o:['genitivu','dativu','nominativu','akuzativu'],t:2,e:'Subjekt je UVIJEK u nominativu (N, 1. padež). Pitanje: TKO? ŠTO? Ako nije N, nije gramatički subjekt.'},
  {q:'U „Ivan, moj prijatelj, čita." „moj prijatelj" je:',o:['atribut','apozicija','priložna oznaka','objekt'],t:1,e:'Apozicija — imenica (+atribut „moj") koja bliže objašnjava drugu imenicu. Uvijek odvojena zarezima.'},
  {q:'Veznici „i, pa, te, ni" povezuju:',o:['zavisne rečenice','sastavne nezavisne rečenice','suprotne','rastavne'],t:1,e:'Sastavne nezavisno složene rečenice — dvije ravnopravne rečenice u odnosu zbrajanja. Najčešći nezavisni veznici.'},
  {q:'„Knjiga, koju mi je dala, je odlična." je:',o:['nezavisna sastavna','zavisna objektna','zavisna atributna','zavisna mjesna'],t:2,e:'Zavisna atributna — uvodi je odnosna zamjenica „koju" i opisuje imenicu „knjiga". UVIJEK zarezi sa obje strane (umetnuta zavisna).'},
  {q:'Glagoli „pomagati", „vjerovati", „prijetiti" zahtijevaju objekt u kojem padežu?',o:['nominativ','akuzativ','dativ','genitiv'],t:2,e:'DATIV (D). „Pomažem bratu (D)", „Vjerujem prijatelju (D)". Ovi glagoli ne uzimaju izravni objekt u akuzativu!'},
  {q:'Rečenica „Iako pada kiša, idem trčati." je:',o:['nezavisna suprotna','zavisna uzročna','zavisna dopusna','zavisna pogodbena'],t:2,e:'Zavisna dopusna (koncesivna) — veznik „iako" iznosi dopust („usprkos čemu"). Pogodbena bi imala „ako": „Ako pada kiša, idem trčati."'},
  {q:'„Toliko sam umoran da spavam stojeći." veznik „da" uvodi:',o:['objektnu zavisnu','namjernu zavisnu','posljedičnu zavisnu','pogodbenu zavisnu'],t:2,e:'Posljedična zavisna — „da" iza „toliko/tako" ALWAYS uvodi posljedičnu. Razlika od namjerne („Učim da položim") = posljedica je rezultat, namjera je svrha.'},
  {q:'Pravilo zareza: pred „jer/da/ako/kad" kad zavisna IZA glavne:',o:['nikad zarez','samo u književnosti','UVIJEK zarez','samo kratke rečenice'],t:2,e:'UVIJEK zarez. „Učim, jer želim", „Vjerujem, da si tu", „Idem, ako stigneš". Bez zareza je interpunkcijska greška na maturi.'},
];
const TAB_NAMES=['Teorija','Rečenični članovi','Vrste rečenica','Složene rečenice','Pojmovnik','Sintaktički parser','Kviz','Referentna tablica'];
function sw(n){
  document.querySelectorAll('.tab').forEach((t,i)=>{
    t.classList.toggle('on',i===n);
    t.setAttribute('aria-selected',i===n);
  });
  document.querySelectorAll('.layer').forEach((l,i)=>l.classList.toggle('on',i===n));
  const _bc=document.getElementById('bc-tab');if(_bc)_bc.textContent=TAB_NAMES[n];
  if(n===6)qzInit();
  if(n===5){
    // init drill on first open (safe — mg-dynamic may not exist in H20 since Tab 5 is now Scanner)
    const _mg=document.getElementById('mg-dynamic');
    if(_mg&&!_mg.dataset.init){
      _mg.dataset.init='1';
      if(typeof mgInit==='function')mgInit('easy');
      if(typeof fcInit==='function')fcInit();
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
function speakVerse(text, rate){
  if(!('speechSynthesis' in window)){
    alert('Vaš preglednik ne podržava audio čitanje (Web Speech API). Isprobaj Chrome, Edge ili Safari.');
    return;
  }
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'hr-HR';
  u.rate = rate || 0.85;
  u.pitch = 1.0;
  u.volume = 1.0;
  // Try to find Croatian voice
  const voices = window.speechSynthesis.getVoices();
  const hrVoice = voices.find(v => v.lang && v.lang.startsWith('hr')) || voices.find(v => v.lang && v.lang.startsWith('sr')) || voices.find(v => v.lang && v.lang.startsWith('sl'));
  if(hrVoice) u.voice = hrVoice;
  window.speechSynthesis.speak(u);
}
// Trigger voice list load
if('speechSynthesis' in window){
  window.speechSynthesis.getVoices();
  if(window.speechSynthesis.onvoiceschanged !== undefined){
    window.speechSynthesis.onvoiceschanged = function(){};
  }
}



/* WEB SPEECH API — fonetski audio demo */
function speakWord(text){
  if(!('speechSynthesis' in window)){
    alert('Tvoj preglednik ne podržava audio izgovor. Pokušaj u Chrome ili Safari.');
    return;
  }
  // Stop any ongoing speech
  window.speechSynthesis.cancel();
  
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'hr-HR';
  utter.rate = 0.85;
  utter.pitch = 1.0;
  
  // Try to find Croatian voice
  const voices = window.speechSynthesis.getVoices();
  const hrVoice = voices.find(v => v.lang.startsWith('hr'));
  if(hrVoice) utter.voice = hrVoice;
  
  window.speechSynthesis.speak(utter);
}

// Preload voices (some browsers need this)
if('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined){
  window.speechSynthesis.onvoiceschanged = function(){};
}





/* ═══════════════════════════════════
   H20 POJMOVNIK DATA + RENDERER
═══════════════════════════════════ */

const POJM_DATA2 = [
  // === KAT 1: REČENIČNI ČLANOVI (12) ===
  {kat:'clanovi', term:'Subjekt', def:'Rečenični član koji označava tko ili što izvršava radnju. UVIJEK u nominativu (1. padež). Pitanje: tko? što? Slaže se s predikatom u licu, broju i rodu.', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Predikat', def:'Glavni rečenični član — glagol u ličnom obliku. Mora postojati u svakoj rečenici. Pitanje: što radi? što se događa? Broj predikata = broj rečenica u složenoj.', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Glagolski predikat', def:'Predikat koji čini samo glagol ili glagolska konstrukcija. Primjeri: „Marija čita." (prezent), „Došao je." (perfekt), „Putovat ćemo." (futur).', star:false, tag:''},
  {kat:'clanovi', term:'Imenski predikat', def:'Predikat koji čini kopula (glagol „biti") + imenska riječ (imenica/pridjev/zamjenica). Primjeri: „Marija je učenica." „On je visok." „Knjiga je moja."', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Složeni glagolski predikat', def:'Modalni/fazni glagol + infinitiv. Primjeri: „Moram raditi." „Počeo je pisati." „Želim učiti." Brokje 1 predikat (ne dva!).', star:false, tag:''},
  {kat:'clanovi', term:'Objekt', def:'Rečenični član koji dopunjava predikat — predmet ili osoba na koju se radnja odnosi. Pitanje: koga? što? komu? čemu?', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Izravni objekt', def:'Objekt u akuzativu (A) bez prijedloga. Pitanje: koga? što? Primjeri: „Čitam knjigu (A)." „Vidim Ivana (A)."', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Neizravni objekt', def:'Objekt u G, D, I ili L padežu — sa ili bez prijedloga. Glagoli s D: pomagati, vjerovati, prijetiti. Glagoli s G: sjećati se, bojati se. Glagoli s I: upravljati.', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Atribut', def:'Rečenični član koji bliže opisuje imenicu. Pitanje: kakav? čiji? koji? Sročni (slaže se: „lijepa knjiga") ili nesročni (genitiv: „knjiga stoljeća").', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Apozicija', def:'Imenica koja bliže objašnjava drugu imenicu, u istom je padežu. UVIJEK odvojena zarezima. Primjer: „Ivan, moj prijatelj, dolazi."', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Priložna oznaka (P.O.)', def:'Rečenični član koji označava okolnosti radnje. 4 glavne (MVNU): mjesta, vremena, načina, uzroka + dodatne (namjere, količine, društva, uvjeta, dopuštenja).', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Logički subjekt', def:'Stvarni izvršitelj radnje koji nije u nominativu. Primjer: „Nama (D logički) se spava." Gramatički subjekt je podrazumijevan.', star:false, tag:''},

  // === KAT 2: VRSTE REČENICA (10) ===
  {kat:'vrste', term:'Prosta rečenica', def:'Rečenica s jednim predikatom. Ne može se rastaviti na manje rečenice. „Marija čita knjigu." „Pada kiša." Infinitiv NE računa kao predikat.', star:true, tag:''},
  {kat:'vrste', term:'Složena rečenica', def:'Rečenica s 2 ili više predikata. Dijeli se na nezavisno složenu (ravnopravne) i zavisno složenu (jedna ovisi).', star:true, tag:'NCVVO'},
  {kat:'vrste', term:'Izjavna rečenica', def:'Iznosi obavijest, tvrdnju, opis. Završava točkom. „Marija čita knjigu." „Vani pada kiša."', star:false, tag:''},
  {kat:'vrste', term:'Upitna rečenica', def:'Postavlja pitanje, završava upitnikom. Potpuna (DA/NE) s česticom „li" ili intonacijom. Nepotpuna s upitnim riječima (tko, što, kada, gdje).', star:true, tag:'NCVVO'},
  {kat:'vrste', term:'Usklična rečenica', def:'Izriče jaku emociju (čuđenje, oduševljenje, ljutnja). Završava uskličnikom. „Kako je lijepo!" „Bravo!" „Nemoguće!"', star:false, tag:''},
  {kat:'vrste', term:'Zapovjedna rečenica', def:'Izriče zapovijed, naredbu, molbu. Glagol u IMPERATIVU. Završava točkom ili uskličnikom. „Dođi ovamo." „Pišite zadaću!"', star:false, tag:''},
  {kat:'vrste', term:'Optativna rečenica (želja)', def:'Izriče želju. Često s česticom „neka" ili u kondicionalu. „Neka bude svjetla!" „Sretan put!" „Da je samo nedjelja!"', star:false, tag:''},
  {kat:'vrste', term:'Potvrdna (afirmativna)', def:'Tvrdi, potvrđuje radnju. Bez negacije. „Marija čita." „Sutra ću doći."', star:false, tag:''},
  {kat:'vrste', term:'Niječna (negativna)', def:'Niječe, odbacuje radnju. S negacijom (ne, ni, nije, nikad, ništa, nigdje). U hrvatskom više negacija POJAČAVAJU nijek (ne ukidaju ga).', star:true, tag:''},
  {kat:'vrste', term:'Retoričko pitanje', def:'Formalno upitno (završava ?), ali ne očekuje odgovor — funkcionalno je usklično. „Zar je moguće?!" „Tko bi to očekivao?"', star:true, tag:'zamka'},

  // === KAT 3: NEZAVISNO SLOŽENE (8) ===
  {kat:'nezavisno', term:'Nezavisno složena rečenica', def:'Dvije ili više rečenica koje su RAVNOPRAVNE — svaka može stajati samostalno. Povezane nezavisnim veznicima ili zarezom.', star:true, tag:'NCVVO'},
  {kat:'nezavisno', term:'Sastavna (kopulativna)', def:'Druga rečenica nadovezuje, dodaje, zbraja sadržaj prve. Veznici: i, pa, te, ni, niti. „Marija čita i Ivan piše."', star:true, tag:''},
  {kat:'nezavisno', term:'Rastavna (disjunktivna)', def:'Izriče izbor između dvije mogućnosti. Veznik: ili (samostalno ili u paru). „Ili učiš ili se ne trudiš."', star:false, tag:''},
  {kat:'nezavisno', term:'Suprotna (adverzativna)', def:'Druga rečenica iznosi sadržaj suprotan ili ispravak prvoj. Veznici: a, ali, no, nego, već. UVIJEK zarez pred njima!', star:true, tag:'NCVVO'},
  {kat:'nezavisno', term:'Zaključna (konkluzivna)', def:'Druga rečenica zaključuje, izvodi posljedicu iz prve. Veznici: zato, stoga, dakle, prema tome. „Pada kiša, zato ostajem doma."', star:true, tag:''},
  {kat:'nezavisno', term:'Izuzetna (ekscepcijska)', def:'Druga rečenica iznosi iznimku od prve. Veznici: samo, jedino, osim što. „Sve smo prošli, samo ovo nismo."', star:false, tag:''},
  {kat:'nezavisno', term:'Objasnidbena (eksplikativna)', def:'Druga rečenica objašnjava ili precizira prvu. Veznici: i to, naime, to jest. Najrjeđa nezavisna vrsta.', star:false, tag:''},
  {kat:'nezavisno', term:'Asindetska rečenica', def:'Složena rečenica BEZ veznika — povezana samo zarezima. „Pala je kiša, vjetar je puhao, hladnoća je zavladala."', star:false, tag:''},

  // === KAT 4: ZAVISNO SLOŽENE (16) ===
  {kat:'zavisno', term:'Zavisno složena rečenica', def:'Glavna + zavisna rečenica. Zavisna NE može stajati samostalno. Povezuju se zavisnim veznicima ili odnosnim/upitnim zamjenicama.', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Glavna rečenica', def:'Rečenica koja stoji samostalno — nosi glavnu poruku. Zavisna se na nju nadovezuje. „Učim, jer želim položiti." (glavna: „Učim").', star:true, tag:''},
  {kat:'zavisno', term:'Zavisna rečenica', def:'Rečenica koja ovisi o glavnoj. Zamjenjuje neki rečenični član glavne (subjekt, predikat, objekt, atribut, P.O.).', star:true, tag:''},
  {kat:'zavisno', term:'Subjektna zavisna', def:'Zamjenjuje subjekt glavne. Veznici: tko, što, da. „Tko rano rani, dvije sreće grabi." Cijela zavisna = subjekt.', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Predikatna zavisna', def:'Zamjenjuje imenski dio predikata. Veznici: kakav, koji. NAJRJEĐA. „Ona je, kakvu sam tražio."', star:false, tag:'rijetka'},
  {kat:'zavisno', term:'Objektna zavisna', def:'Zamjenjuje objekt glavne. Veznici: da, što, kako, gdje, „li". NAJČEŠĆA. „Vjerujem da si u pravu." (vjerujem ŠTO?)', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Atributna zavisna', def:'Opisuje imenicu u glavnoj — uvodi je odnosna zamjenica koji/koja/koje. UVIJEK zarez pred „koji"! „Knjiga, koju čitam, je odlična."', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Mjesna zavisna', def:'Iznosi mjesto/smjer radnje. Veznici: gdje, kamo, kuda, odakle. „Idem gdje me vode."', star:false, tag:''},
  {kat:'zavisno', term:'Vremenska zavisna', def:'Iznosi vrijeme radnje. Veznici: kad, dok, otkad, čim, prije nego, nakon što. „Dođi kad budeš mogao."', star:true, tag:''},
  {kat:'zavisno', term:'Načinska zavisna', def:'Iznosi način radnje. Veznici: kako, kao da, kao što. „Radi kako sam rekao." „Pleše kao da nikad nije naučio."', star:false, tag:''},
  {kat:'zavisno', term:'Uzročna zavisna', def:'Iznosi uzrok radnje. Veznici: jer, zato što, budući da, što. NAJČEŠĆA priložna zavisna. „Učim jer želim položiti."', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Posljedična zavisna', def:'Iznosi posljedicu. Veznik „da" uz „toliko/tako". „Toliko sam umoran da spavam stojeći."', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Namjerna zavisna', def:'Iznosi namjeru/svrhu. Veznici: da, kako bi (s kondicionalom). „Učim da položim." „Žurim kako bih stigao."', star:true, tag:''},
  {kat:'zavisno', term:'Pogodbena (kondicionalna) zavisna', def:'Iznosi uvjet. Veznici: ako, kad bi, da (s kondicionalom). „Ako budeš učio, položit ćeš." „Da imam novca, kupio bih."', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Dopusna (koncesivna) zavisna', def:'Iznosi dopust („usprkos čemu"). Veznici: iako, premda, mada, makar. „Iako sam umoran, idem trčati."', star:true, tag:''},
  {kat:'zavisno', term:'Imenske zavisne (skupina)', def:'4 zavisne koje zamjenjuju imenicu/im. sintagmu: subjektne, predikatne, objektne, atributne.', star:false, tag:''},

  // === KAT 5: VEZNICI I INTERPUNKCIJA (10) ===
  {kat:'veznici', term:'Veznik', def:'Nepromjenjiva vrsta riječi koja povezuje rečenice ili dijelove rečenica. Dijele se na nezavisne (i, ali, ili...) i zavisne (jer, da, ako...).', star:true, tag:''},
  {kat:'veznici', term:'Nezavisni veznici', def:'Spajaju 2 ravnopravne rečenice. 6 grupa: sastavni (i, pa, te), rastavni (ili), suprotni (a, ali, no), zaključni (zato, dakle), izuzetni (samo), objasnidbeni (naime).', star:true, tag:''},
  {kat:'veznici', term:'Zavisni veznici', def:'Uvode zavisnu rečenicu. Najčešći: jer, da, ako, kad, dok, iako, premda, koji, što, kako, gdje. Određuju vrstu zavisne.', star:true, tag:''},
  {kat:'veznici', term:'Odnosna zamjenica', def:'Zamjenica koja uvodi zavisnu rečenicu (uglavnom atributnu): koji, koja, koje, čiji, kakav. „Knjiga koju čitam je odlična."', star:true, tag:''},
  {kat:'veznici', term:'Upitna zamjenica (u zavisnoj)', def:'Tko, što, koji u funkciji veznika u zavisnoj rečenici. „Pitao je tko je došao." (objektna)', star:false, tag:''},
  {kat:'veznici', term:'Pravilo zareza pred „a/ali/no/nego"', def:'UVIJEK piše se zarez pred suprotnim veznicima. „Učim, ali sam umoran." „Nije pisao, nego je crtao."', star:true, tag:'pravopis'},
  {kat:'veznici', term:'Pravilo zareza pred „koji"', def:'UVIJEK zarez pred odnosnom zamjenicom „koji/koja/koje/koju" kad uvodi atributnu zavisnu. „Knjiga, koju čitam, je odlična."', star:true, tag:'pravopis'},
  {kat:'veznici', term:'Pravilo zareza pred „jer/da/ako"', def:'Kad zavisna dolazi NAKON glavne — uvijek zarez. „Učim, jer želim položiti."', star:true, tag:'pravopis'},
  {kat:'veznici', term:'Pravilo BEZ zareza („i, pa, te, ili")', def:'Pred sastavnim veznicima i, pa, te i rastavnim ili — obično NEMA zareza. „Učim i pišem zadaću." „Idem ili ostajem."', star:true, tag:'pravopis'},
  {kat:'veznici', term:'Umetnuta zavisna', def:'Zavisna unutar glavne — zarezi sa OBJE strane. „Knjiga, koju mi je dala, je odlična."', star:true, tag:'pravopis'},

  // === KAT 6: SINTAGME I OSTALO (14) ===
  {kat:'sintagme', term:'Sintagma', def:'Skupina riječi koja čini značenjsku cjelinu, ali nije rečenica (NEMA predikat). „Lijepa knjiga", „vrlo brzo", „u školi".', star:true, tag:''},
  {kat:'sintagme', term:'Imenska sintagma', def:'Sintagma s imenicom kao jezgrom + atributi. „Moja stara knjiga", „dječak iz susjedstva", „kuća na brijegu".', star:false, tag:''},
  {kat:'sintagme', term:'Glagolska sintagma', def:'Sintagma s glagolom kao jezgrom + objekti/priložne oznake. „Čitati knjigu", „doći kući", „učiti pažljivo".', star:false, tag:''},
  {kat:'sintagme', term:'Sročnost', def:'Slaganje dvije ili više riječi u rodu, broju, padežu (i licu kod glagola). „Visoki dječak" — m.r. + m.r. „Dvije knjige" — broj + ž.r. mn.', star:true, tag:''},
  {kat:'sintagme', term:'Red riječi', def:'Raspored riječi u rečenici. U hrvatskom je relativno slobodan zbog padeža, ali postoje preferencije: subjekt-predikat-objekt (SVO).', star:false, tag:''},
  {kat:'sintagme', term:'Aktiv', def:'Glagolsko stanje gdje subjekt vrši radnju. „Marija čita knjigu." (Marija = vršitelj, knjiga = objekt)', star:false, tag:''},
  {kat:'sintagme', term:'Pasiv', def:'Glagolsko stanje gdje subjekt trpi radnju. „Knjiga se čita." „Knjiga je pročitana." Tvori se s česticom „se" ili pridjevom trpnim.', star:true, tag:''},
  {kat:'sintagme', term:'Upravni govor', def:'Doslovno citiran tuđi govor — uvijek u navodnicima ili iza dvotočke. „Marija je rekla: „Dolazim sutra."" „Idem", rekao je.', star:true, tag:''},
  {kat:'sintagme', term:'Neupravni govor', def:'Pretvoreni tuđi govor — bez navodnika, kao zavisna objektna rečenica. „Marija je rekla da dolazi sutra."', star:true, tag:''},
  {kat:'sintagme', term:'Eliptična rečenica', def:'Rečenica iz koje je izostavljen neki član (najčešće predikat) — jasan iz konteksta. „A ti?" „Sutra u školu." „Bravo!"', star:false, tag:''},
  {kat:'sintagme', term:'Bezglagolska rečenica', def:'Posebna eliptična rečenica bez glagola — često uzvik, oslovljavanje, naslov. „Pažnja!", „Sretan put!", „Marija!"', star:false, tag:''},
  {kat:'sintagme', term:'Bezlična rečenica', def:'Rečenica u kojoj je subjekt nemoguć ili nepotreban. Glagol u 3. l. jd. sr.r. „Pada kiša." „Spava se." „Hladno je."', star:true, tag:''},
  {kat:'sintagme', term:'Sintaksa', def:'Grana gramatike koja proučava odnose riječi u rečenici, vrste rečenica i način njihovog povezivanja u veće cjeline.', star:true, tag:''},
  {kat:'sintagme', term:'Konjunkcija', def:'Latinski naziv za veznik. Iz lingvistike: konjunkcija = sastavna (and), disjunkcija = rastavna (or), kondicional = pogodba (if).', star:false, tag:''},
];let pojm2Active = 'all';
let pojm2Mode = 'grid';
let pj2Data = [];
let pj2Idx = 0;
let pj2Seen = {};

function renderPojm2(){
  const grid = document.getElementById('pojm-grid2');
  if(!grid) return;
  const show = pojm2Active === 'all' ? POJM_DATA2 : POJM_DATA2.filter(p => p.kat === pojm2Active);
  
  const KAT_LABELS = {
    'osnove':'Osnove',
    'vrste':'Vrste riječi',
    'padezi':'Padeži',
    'glagoli':'Glagoli',
    'zamjenice':'Zamjenice',
    'tvorba':'Tvorba',
    'meta':'Metajezik'
  };
  
  grid.innerHTML = show.map(p => \`
    <div class="pojm-card-h20" onclick="this.classList.toggle('open')">
      <div class="pc-kat">\${KAT_LABELS[p.kat] || p.kat}</div>
      <div class="pc-term">\${p.term}</div>
      <div class="pc-hint">→ klikni za definiciju</div>
      <div class="pc-def">\${p.def}</div>
    </div>
  \`).join('');
}

function pojmFilter2(cat, btn){
  document.querySelectorAll('.pojm-filter .pojm-fbt').forEach(b => b.classList.remove('on'));
  if(btn) btn.classList.add('on');
  pojm2Active = cat;
  renderPojm2();
}

// Auto-init
if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(renderPojm2, 150);
  });
  if(document.readyState !== 'loading'){
    setTimeout(renderPojm2, 150);
  }
}


/* TAB 5 · MORFO SCANNER (engine) */





/* ═══════════════════════════════════
   TAB 2 · INTERAKTIVNA VJEŽBA GLASOVNIH PROMJENA
═══════════════════════════════════ */

const GP_PAIRS = [
  {pair:['list', 'lišće'], answer:'jotacija', explain:'Jotacija: t+j → ć, s+j → š (zbirna imenica na -je)'},
  {pair:['vuk', 'vuče'], answer:'1palat', explain:'1. palatalizacija: k + e → č (vokativ jednine m.r.)'},
  {pair:['vojnik', 'vojnici'], answer:'sibilar', explain:'Sibilarizacija (2. palat.): k + i → c (N mn. m.r.)'},
  {pair:['čital', 'čitao'], answer:'vokal', explain:'Vokalizacija l: -l na kraju sloga → -o (gl. pridjev radni m.r.)'},
  {pair:['pas', 'psa'], answer:'nepost', explain:'Nepostojano a: a se gubi u kosim padežima (ali se vraća u G mn.: pasa)'},
  {pair:['svijet', 'svjetlost'], answer:'jat', explain:'Alternacija jata: ije (dugi slog) → je (kratki slog) — refleks praslav. *ě'},
  {pair:['bog', 'bože'], answer:'1palat', explain:'1. palatalizacija: g + e → ž (vokativ jednine m.r.)'},
  {pair:['iz+pasti', 'ispasti'], answer:'jednacenje', explain:'Jednačenje po zvučnosti: zvučni z → bezvučni s pred bezvučnim p'},
];

let gpIdx = 0;
let gpScore = 0;

function renderGpExercise(){
  const cont = document.getElementById('gp-exercise');
  if(!cont) return;
  
  if(gpIdx >= GP_PAIRS.length){
    renderGpResult();
    return;
  }
  
  const item = GP_PAIRS[gpIdx];
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">PITANJE \${gpIdx+1} / \${GP_PAIRS.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${gpScore}</div>
      </div>
      
      <div style="text-align:center;margin:24px 0;display:flex;align-items:center;justify-content:center;gap:20px;flex-wrap:wrap">
        <div style="font-family:var(--display);font-size:28px;font-weight:700;color:var(--t1);padding:14px 24px;background:var(--bg);border:1.5px solid var(--bd);border-radius:var(--r1)">\${item.pair[0]}</div>
        <div style="font-size:24px;color:var(--gold)">→</div>
        <div style="font-family:var(--display);font-size:28px;font-weight:700;color:var(--gold);padding:14px 24px;background:var(--bg);border:1.5px solid var(--gold);border-radius:var(--r1);box-shadow:0 2px 8px rgba(233,180,70,.15)">\${item.pair[1]}</div>
      </div>
      
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJA SE GLASOVNA PROMJENA DOGODILA?</div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px">
        <button class="gp-opt" data-ans="jotacija" onclick="gpAnswer('jotacija', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--blue);font-weight:700;margin-bottom:2px">1. Jotacija</div>
          <div style="font-size:10px;color:var(--t3)">C + j → palatalni</div>
        </button>
        <button class="gp-opt" data-ans="1palat" onclick="gpAnswer('1palat', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--bronze);font-weight:700;margin-bottom:2px">2. 1. palatalizacija</div>
          <div style="font-size:10px;color:var(--t3)">k,g,h + e/i → č,ž,š</div>
        </button>
        <button class="gp-opt" data-ans="sibilar" onclick="gpAnswer('sibilar', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--green);font-weight:700;margin-bottom:2px">3. Sibilarizacija</div>
          <div style="font-size:10px;color:var(--t3)">k,g,h + i → c,z,s</div>
        </button>
        <button class="gp-opt" data-ans="vokal" onclick="gpAnswer('vokal', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--red);font-weight:700;margin-bottom:2px">4. Vokalizacija l</div>
          <div style="font-size:10px;color:var(--t3)">-l → -o</div>
        </button>
        <button class="gp-opt" data-ans="nepost" onclick="gpAnswer('nepost', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--gold);font-weight:700;margin-bottom:2px">5. Nepostojano a</div>
          <div style="font-size:10px;color:var(--t3)">a se gubi</div>
        </button>
        <button class="gp-opt" data-ans="jat" onclick="gpAnswer('jat', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:#9b59b6;font-weight:700;margin-bottom:2px">6. Alternacija jata</div>
          <div style="font-size:10px;color:var(--t3)">ije/je/e/i</div>
        </button>
        <button class="gp-opt" data-ans="jednacenje" onclick="gpAnswer('jednacenje', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:#e67e22;font-weight:700;margin-bottom:2px">7. Jednačenje zvuč.</div>
          <div style="font-size:10px;color:var(--t3)">izjednač. zvučnost</div>
        </button>
      </div>
      
      <div id="gp-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function gpAnswer(chosen, btn){
  const item = GP_PAIRS[gpIdx];
  const correct = chosen === item.answer;
  if(correct) gpScore++;
  
  document.querySelectorAll('.gp-opt').forEach(b => {
    b.disabled = true;
    b.style.cursor = 'default';
    b.style.opacity = '0.5';
  });
  btn.style.opacity = '1';
  btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.gp-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity = '1';
        b.style.borderColor = 'var(--green)';
        b.style.background = 'rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('gp-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="gpNext()">\${gpIdx < GP_PAIRS.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function gpNext(){
  gpIdx++;
  renderGpExercise();
}

function renderGpResult(){
  const cont = document.getElementById('gp-exercise');
  const res = document.getElementById('gp-result');
  if(!cont || !res) return;
  
  cont.style.display = 'none';
  res.style.display = 'block';
  
  const pct = Math.round((gpScore / GP_PAIRS.length) * 100);
  let msg, color, emoji;
  if(pct === 100){ emoji='🏆'; msg='Savršeno! Sve glasovne promjene prepoznate.'; color='var(--gold)'; }
  else if(pct >= 75){ emoji='🎯'; msg='Odlično! Razlike među promjenama su ti jasne.'; color='var(--green)'; }
  else if(pct >= 50){ emoji='📖'; msg='Dobro, ali ima prostora — provjeri scene-cards iznad.'; color='var(--blue)'; }
  else{ emoji='⚠'; msg='Vrati se na scene-cards i ponovi pravila glasovnih promjena.'; color='var(--red)'; }
  
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${gpScore} / \${GP_PAIRS.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="gpReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

function gpReset(){
  gpIdx = 0;
  gpScore = 0;
  const res = document.getElementById('gp-result');
  const cont = document.getElementById('gp-exercise');
  if(res) res.style.display = 'none';
  if(cont) cont.style.display = '';
  renderGpExercise();
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(renderGpExercise, 200);
  });
  if(document.readyState !== 'loading'){
    setTimeout(renderGpExercise, 200);
  }
}


/* ═══════════════════════════════════
   TAB 1 · WORD CLASS IDENTIFICATION EXERCISE
═══════════════════════════════════ */

const WC_SENTENCES = [
  {sentence:['Mala','djevojka','brzo','trči','u','školu','.'], target:1, word:'djevojka', answer:'imenica', explain:'"Djevojka" odgovara na pitanje TKO/ŠTO? — imenica (biće), ž.r., N jd.'},
  {sentence:['Taj','pametan','dječak','čita','zanimljivu','knjigu','.'], target:1, word:'pametan', answer:'pridjev', explain:'"Pametan" odgovara na pitanje KAKAV? — pridjev (opisni, neodređeni oblik), m.r., N jd.'},
  {sentence:['Ivan','i','Ana','pjevaju','lijepu','pjesmu','.'], target:3, word:'pjevaju', answer:'glagol', explain:'"Pjevaju" = radnja u prezentu, 3. l. mn. — glagol (nesvršeni vid).'},
  {sentence:['Njegova','majka','radi','u','velikoj','bolnici','.'], target:0, word:'Njegova', answer:'zamjenica', explain:'"Njegova" = posvojna zamjenica — izražava pripadnost (čija majka?), ž.r., N jd.'},
  {sentence:['Pet','studenata','uspješno','položi','ispit','.'], target:0, word:'Pet', answer:'broj', explain:'"Pet" = glavni broj, označava količinu (5 studenata). Ne mijenja oblik.'},
  {sentence:['Knjiga','leži','na','velikom','stolu','.'], target:2, word:'na', answer:'prijedlog', explain:'"Na" = prijedlog — izražava odnos (gdje leži?), stoji uz imenicu u L.'},
  {sentence:['Došao','sam','u','školu','jer','je','početak','.'], target:4, word:'jer', answer:'veznik', explain:'"Jer" = veznik — povezuje zavisnu (uzročnu) rečenicu s glavnom. Nepromjenjiva riječ.'},
  {sentence:['Ona','je','vrlo','lijepo','otpjevala','arijetu','.'], target:3, word:'lijepo', answer:'prilog', explain:'"Lijepo" = prilog načina (KAKO je pjevala?) — opisuje radnju glagola.'},
];

let wcIdx = 0;
let wcScore = 0;
const WC_OPTIONS = ['imenica','pridjev','zamjenica','broj','glagol','prilog','prijedlog','veznik','uzvik','čestica'];

function renderWcExercise(){
  const cont = document.getElementById('wc-exercise');
  if(!cont) return;
  
  if(wcIdx >= WC_SENTENCES.length){
    renderWcResult();
    return;
  }
  
  const item = WC_SENTENCES[wcIdx];
  
  // Build sentence HTML with target word highlighted
  const sentenceHtml = item.sentence.map((w, i) => {
    if(i === item.target){
      return \`<span style="display:inline-block;padding:4px 10px;background:rgba(233,180,70,.15);border:2px solid var(--gold);border-radius:var(--r1);color:var(--gold);font-weight:700;margin:0 2px">\${w}</span>\`;
    }
    if(w === '.' || w === ',' || w === '!' || w === '?'){
      return w;
    }
    return \`<span style="margin:0 2px">\${w}</span>\`;
  }).join(' ').replace(/ ([.,!?])/g, '$1');
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">REČENICA \${wcIdx+1} / \${WC_SENTENCES.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${wcScore}</div>
      </div>
      
      <div style="text-align:center;margin:20px 0;padding:20px;background:var(--bg);border-radius:var(--r1);font-family:var(--display);font-size:16px;line-height:1.8;color:var(--t2)">
        \${sentenceHtml}
      </div>
      
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJA JE VRSTA OZNAČENE RIJEČI?</div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:6px">
        \${WC_OPTIONS.map(opt => \`
          <button class="wc-opt" data-ans="\${opt}" onclick="wcAnswer('\${opt}', this)" style="padding:10px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;transition:all .2s;text-transform:capitalize">
            \${opt}
          </button>
        \`).join('')}
      </div>
      
      <div id="wc-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function wcAnswer(chosen, btn){
  const item = WC_SENTENCES[wcIdx];
  const correct = chosen === item.answer;
  if(correct) wcScore++;
  
  document.querySelectorAll('.wc-opt').forEach(b => {
    b.disabled = true;
    b.style.cursor = 'default';
    b.style.opacity = '0.5';
  });
  btn.style.opacity = '1';
  btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.wc-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity = '1';
        b.style.borderColor = 'var(--green)';
        b.style.background = 'rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('wc-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="wcNext()">\${wcIdx < WC_SENTENCES.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function wcNext(){
  wcIdx++;
  renderWcExercise();
}

function renderWcResult(){
  const cont = document.getElementById('wc-exercise');
  const res = document.getElementById('wc-result');
  if(!cont || !res) return;
  
  cont.style.display = 'none';
  res.style.display = 'block';
  
  const pct = Math.round((wcScore / WC_SENTENCES.length) * 100);
  let msg, color, emoji;
  if(pct === 100){ emoji='🏆'; msg='Savršeno! Sve vrste riječi prepoznaješ bez problema.'; color='var(--gold)'; }
  else if(pct >= 75){ emoji='🎯'; msg='Odlično! Vrste riječi su ti jasne.'; color='var(--green)'; }
  else if(pct >= 50){ emoji='📖'; msg='Dobro, ali provjeri scene-cards još jednom — posebno zamjenice i priloge.'; color='var(--blue)'; }
  else{ emoji='⚠'; msg='Vrati se na scene-cards i pažljivo pročitaj definicije + primjere.'; color='var(--red)'; }
  
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${wcScore} / \${WC_SENTENCES.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="wcReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

function wcReset(){
  wcIdx = 0;
  wcScore = 0;
  const res = document.getElementById('wc-result');
  const cont = document.getElementById('wc-exercise');
  if(res) res.style.display = 'none';
  if(cont) cont.style.display = '';
  renderWcExercise();
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(renderWcExercise, 200);
  });
  if(document.readyState !== 'loading'){
    setTimeout(renderWcExercise, 200);
  }
}


/* ═══════════════════════════════════
   TAB 2 · NEPROMJENJIVE — DETECTION EXERCISE
═══════════════════════════════════ */

const NP_SENTENCES = [
  {sentence:['Ivan','je','došao','u','školu','jučer','.'], target:3, word:'u', answer:'prijedlog', explain:'"U" je prijedlog — dolazi uz akuzativ (u školu = kamo?). Izražava prostorni odnos (kretanje).'},
  {sentence:['Ana','pjeva','lijepo','i','glasno','.'], target:3, word:'i', answer:'veznik', explain:'"I" je nezavisni veznik (sastavni) — povezuje dva ravnopravna priloga (lijepo, glasno).'},
  {sentence:['Učim','jer','želim','položiti','maturu','.'], target:1, word:'jer', answer:'veznik', explain:'"Jer" je zavisni veznik (uzročni) — uvodi zavisnu uzročnu rečenicu (zašto učim?).'},
  {sentence:['Ah',',','kako','je','lijep','ovaj','dan','!'], target:0, word:'Ah', answer:'uzvik', explain:'"Ah" je emocionalni uzvik — izražava čuđenje/oduševljenje. Stoji odvojeno od rečenice.'},
  {sentence:['Ne','znam','kamo','idemo','sutra','.'], target:0, word:'Ne', answer:'čestica', explain:'"Ne" je niječna čestica — negira glagol "znam". Izražava stav govornika (negaciju).'},
  {sentence:['On','trči','vrlo','brzo','prema','kući','.'], target:2, word:'vrlo', answer:'prilog', explain:'"Vrlo" je prilog količine — opisuje drugi prilog ("brzo"). Stupnjuje intenzitet.'},
];

let npIdx = 0;
let npScore = 0;
const NP_OPTIONS = ['prilog','prijedlog','veznik','uzvik','čestica'];

function renderNpExercise(){
  const cont = document.getElementById('np-exercise');
  if(!cont) return;
  
  if(npIdx >= NP_SENTENCES.length){
    renderNpResult();
    return;
  }
  
  const item = NP_SENTENCES[npIdx];
  
  const sentenceHtml = item.sentence.map((w, i) => {
    if(i === item.target){
      return \`<span style="display:inline-block;padding:4px 10px;background:rgba(233,180,70,.15);border:2px solid var(--gold);border-radius:var(--r1);color:var(--gold);font-weight:700;margin:0 2px">\${w}</span>\`;
    }
    if(w === '.' || w === ',' || w === '!' || w === '?'){
      return w;
    }
    return \`<span style="margin:0 2px">\${w}</span>\`;
  }).join(' ').replace(/ ([.,!?])/g, '$1');
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">REČENICA \${npIdx+1} / \${NP_SENTENCES.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${npScore}</div>
      </div>
      
      <div style="text-align:center;margin:20px 0;padding:20px;background:var(--bg);border-radius:var(--r1);font-family:var(--display);font-size:16px;line-height:1.8;color:var(--t2)">
        \${sentenceHtml}
      </div>
      
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJA JE VRSTA OZNAČENE RIJEČI?</div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px">
        \${NP_OPTIONS.map(opt => \`
          <button class="np-opt" data-ans="\${opt}" onclick="npAnswer('\${opt}', this)" style="padding:12px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:13px;transition:all .2s;text-transform:capitalize">
            \${opt}
          </button>
        \`).join('')}
      </div>
      
      <div id="np-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function npAnswer(chosen, btn){
  const item = NP_SENTENCES[npIdx];
  const correct = chosen === item.answer;
  if(correct) npScore++;
  
  document.querySelectorAll('.np-opt').forEach(b => {
    b.disabled = true;
    b.style.cursor = 'default';
    b.style.opacity = '0.5';
  });
  btn.style.opacity = '1';
  btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.np-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity = '1';
        b.style.borderColor = 'var(--green)';
        b.style.background = 'rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('np-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="npNext()">\${npIdx < NP_SENTENCES.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function npNext(){
  npIdx++;
  renderNpExercise();
}

function renderNpResult(){
  const cont = document.getElementById('np-exercise');
  const res = document.getElementById('np-result');
  if(!cont || !res) return;
  
  cont.style.display = 'none';
  res.style.display = 'block';
  
  const pct = Math.round((npScore / NP_SENTENCES.length) * 100);
  let msg, color, emoji;
  if(pct === 100){ emoji='🏆'; msg='Savršeno! Sve nepromjenjive riječi prepoznaješ.'; color='var(--gold)'; }
  else if(pct >= 75){ emoji='🎯'; msg='Odlično! Razlike su ti jasne.'; color='var(--green)'; }
  else if(pct >= 50){ emoji='📖'; msg='Ponovi — posebno razliku između veznika i čestice.'; color='var(--blue)'; }
  else{ emoji='⚠'; msg='Vrati se na scene-cards i pažljivo pročitaj razlike (Box warn).'; color='var(--red)'; }
  
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${npScore} / \${NP_SENTENCES.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="npReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

function npReset(){
  npIdx = 0;
  npScore = 0;
  const res = document.getElementById('np-result');
  const cont = document.getElementById('np-exercise');
  if(res) res.style.display = 'none';
  if(cont) cont.style.display = '';
  renderNpExercise();
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(renderNpExercise, 250);
  });
  if(document.readyState !== 'loading'){
    setTimeout(renderNpExercise, 250);
  }
}


/* ═══════════════════════════════════
   TAB 3 · PADEŽNI DECLINER
═══════════════════════════════════ */

// BAZA IZNIMKI — nepravilne imenice + često pitane
const DECL_EXCEPTIONS = {
  'čovjek': {
    gender: 'm', type: 'a',
    forms: {
      N: ['čovjek', 'ljudi'], G: ['čovjeka', 'ljudi'], D: ['čovjeku', 'ljudima'],
      A: ['čovjeka', 'ljude'], V: ['čovječe', 'ljudi'], L: ['čovjeku', 'ljudima'],
      I: ['čovjekom', 'ljudima']
    },
    note: 'Supletivna množina — "ljudi" je poseban oblik (nije "čovjeci").'
  },
  'dijete': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['dijete', 'djeca'], G: ['djeteta', 'djece'], D: ['djetetu', 'djeci'],
      A: ['dijete', 'djecu'], V: ['dijete', 'djeco'], L: ['djetetu', 'djeci'],
      I: ['djetetom', 'djecom']
    },
    note: 'Zbirna množina "djeca" se sklanja u jednini (kao ž.r.), ali gramatički je množina.'
  },
  'pas': {
    gender: 'm', type: 'a',
    forms: {
      N: ['pas', 'psi'], G: ['psa', 'pasa'], D: ['psu', 'psima'],
      A: ['psa', 'pse'], V: ['pase', 'psi'], L: ['psu', 'psima'],
      I: ['psom', 'psima']
    },
    note: 'Nepostojano a — a nestaje u kosim padežima (pas → psa).'
  },
  'noga': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['noga', 'noge'], G: ['noge', 'nogu'], D: ['nozi', 'nogama'],
      A: ['nogu', 'noge'], V: ['nogo', 'noge'], L: ['nozi', 'nogama'],
      I: ['nogom', 'nogama']
    },
    note: 'Sibilarizacija u D/L jd. (noga → nozi).'
  },
  'ruka': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['ruka', 'ruke'], G: ['ruke', 'ruku'], D: ['ruci', 'rukama'],
      A: ['ruku', 'ruke'], V: ['ruko', 'ruke'], L: ['ruci', 'rukama'],
      I: ['rukom', 'rukama']
    },
    note: 'Sibilarizacija u D/L jd. (ruka → ruci).'
  },
  'majka': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['majka', 'majke'], G: ['majke', 'majki'], D: ['majci', 'majkama'],
      A: ['majku', 'majke'], V: ['majko', 'majke'], L: ['majci', 'majkama'],
      I: ['majkom', 'majkama']
    },
    note: 'Sibilarizacija u D/L jd. (majka → majci).'
  },
  'vojnik': {
    gender: 'm', type: 'a',
    forms: {
      N: ['vojnik', 'vojnici'], G: ['vojnika', 'vojnika'], D: ['vojniku', 'vojnicima'],
      A: ['vojnika', 'vojnike'], V: ['vojniče', 'vojnici'], L: ['vojniku', 'vojnicima'],
      I: ['vojnikom', 'vojnicima']
    },
    note: 'Sibilarizacija u N/V mn. (vojnik → vojnici). V jd. ima 1. palatalizaciju (vojniče).'
  },
  'Bog': {
    gender: 'm', type: 'a',
    forms: {
      N: ['Bog', 'bogovi'], G: ['Boga', 'bogova'], D: ['Bogu', 'bogovima'],
      A: ['Boga', 'bogove'], V: ['Bože', 'bogovi'], L: ['Bogu', 'bogovima'],
      I: ['Bogom', 'bogovima']
    },
    note: 'V jd. "Bože" — 1. palatalizacija (g → ž).'
  },
  'noć': {
    gender: 'ž', type: 'i',
    forms: {
      N: ['noć', 'noći'], G: ['noći', 'noći'], D: ['noći', 'noćima'],
      A: ['noć', 'noći'], V: ['noći', 'noći'], L: ['noći', 'noćima'],
      I: ['noći / noću', 'noćima']
    },
    note: 'I-vrsta ž.r. (završava suglasnikom). I jd. ima oblik "noću" (kao prilog: "po noći").'
  },
  'stvar': {
    gender: 'ž', type: 'i',
    forms: {
      N: ['stvar', 'stvari'], G: ['stvari', 'stvari'], D: ['stvari', 'stvarima'],
      A: ['stvar', 'stvari'], V: ['stvari', 'stvari'], L: ['stvari', 'stvarima'],
      I: ['stvari / stvarju', 'stvarima']
    },
    note: 'I-vrsta ž.r.'
  },
  'kost': {
    gender: 'ž', type: 'i',
    forms: {
      N: ['kost', 'kosti'], G: ['kosti', 'kostiju'], D: ['kosti', 'kostima'],
      A: ['kost', 'kosti'], V: ['kosti', 'kosti'], L: ['kosti', 'kostima'],
      I: ['kosti / košću', 'kostima']
    },
    note: 'I-vrsta ž.r. G mn. završava -iju (kostiju).'
  },
  'ljubav': {
    gender: 'ž', type: 'i',
    forms: {
      N: ['ljubav', 'ljubavi'], G: ['ljubavi', 'ljubavi'], D: ['ljubavi', 'ljubavima'],
      A: ['ljubav', 'ljubavi'], V: ['ljubavi', 'ljubavi'], L: ['ljubavi', 'ljubavima'],
      I: ['ljubavi / ljubavlju', 'ljubavima']
    },
    note: 'I-vrsta ž.r. I jd. ima dva oblika — "ljubavi" i "ljubavlju".'
  },
  'brat': {
    gender: 'm', type: 'a',
    forms: {
      N: ['brat', 'braća'], G: ['brata', 'braće'], D: ['bratu', 'braći'],
      A: ['brata', 'braću'], V: ['brate', 'braćo'], L: ['bratu', 'braći'],
      I: ['bratom', 'braćom']
    },
    note: 'Zbirna množina "braća" sklanja se u jednini (kao ž.r.).'
  },
  'sin': {
    gender: 'm', type: 'a',
    forms: {
      N: ['sin', 'sinovi'], G: ['sina', 'sinova'], D: ['sinu', 'sinovima'],
      A: ['sina', 'sinove'], V: ['sine', 'sinovi'], L: ['sinu', 'sinovima'],
      I: ['sinom', 'sinovima']
    },
    note: 'M.r. kratka riječ s umetkom -ov- u množini.'
  },
  'otac': {
    gender: 'm', type: 'a',
    forms: {
      N: ['otac', 'očevi'], G: ['oca', 'očeva'], D: ['ocu', 'očevima'],
      A: ['oca', 'očeve'], V: ['oče', 'očevi'], L: ['ocu', 'očevima'],
      I: ['ocem', 'očevima']
    },
    note: 'Nepostojano a + palatalizacija (c→č) u množini.'
  },
  'tata': {
    gender: 'm', type: 'e',
    forms: {
      N: ['tata', 'tate'], G: ['tate', 'tata'], D: ['tati', 'tatama'],
      A: ['tatu', 'tate'], V: ['tata', 'tate'], L: ['tati', 'tatama'],
      I: ['tatom', 'tatama']
    },
    note: 'M.r. na -a — sklanja se kao e-vrsta (ženska), ali rod je muški (slaganje s pridjevima: dobar tata).'
  },
  'oko': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['oko', 'oči'], G: ['oka', 'očiju'], D: ['oku', 'očima'],
      A: ['oko', 'oči'], V: ['oko', 'oči'], L: ['oku', 'očima'],
      I: ['okom', 'očima']
    },
    note: 'Supletivna množina "oči" (stari dvojinski oblik) — ž.r. i-vrste u mn.'
  },
  'uho': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['uho', 'uši'], G: ['uha', 'ušiju'], D: ['uhu', 'ušima'],
      A: ['uho', 'uši'], V: ['uho', 'uši'], L: ['uhu', 'ušima'],
      I: ['uhom', 'ušima']
    },
    note: 'Supletivna množina "uši" (stari dvojinski oblik).'
  },
  'gospodin': {
    gender: 'm', type: 'a',
    forms: {
      N: ['gospodin', 'gospoda'], G: ['gospodina', 'gospode'], D: ['gospodinu', 'gospodi'],
      A: ['gospodina', 'gospodu'], V: ['gospodine', 'gospodo'], L: ['gospodinu', 'gospodi'],
      I: ['gospodinom', 'gospodom']
    },
    note: 'Nepravilna zbirna množina "gospoda" — sklanja se u jednini (kao ž.r.).'
  },
  'selo': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['selo', 'sela'], G: ['sela', 'sela'], D: ['selu', 'selima'],
      A: ['selo', 'sela'], V: ['selo', 'sela'], L: ['selu', 'selima'],
      I: ['selom', 'selima']
    },
    note: 'Sr.r. a-vrsta — tipično sklanjanje.'
  },
  'more': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['more', 'mora'], G: ['mora', 'mora'], D: ['moru', 'morima'],
      A: ['more', 'mora'], V: ['more', 'mora'], L: ['moru', 'morima'],
      I: ['morem', 'morima']
    },
    note: 'Sr.r. palatalna osnova — I jd. ima -em umjesto -om.'
  },
  // === DODATNE IZNIMKE (UPGRADE) ===
  'prst': {
    gender: 'm', type: 'a',
    forms: {
      N: ['prst', 'prsti'], G: ['prsta', 'prstiju / prsta'], D: ['prstu', 'prstima'],
      A: ['prst', 'prste'], V: ['prste', 'prsti'], L: ['prstu', 'prstima'],
      I: ['prstom', 'prstima']
    },
    note: 'G mn. ima dva oblika — "prstiju" i "prsta".'
  },
  'gost': {
    gender: 'm', type: 'a',
    forms: {
      N: ['gost', 'gosti'], G: ['gosta', 'gostiju'], D: ['gostu', 'gostima'],
      A: ['gosta', 'goste'], V: ['goste', 'gosti'], L: ['gostu', 'gostima'],
      I: ['gostom', 'gostima']
    },
    note: 'M.r. s G mn. -iju (kao i-vrsta).'
  },
  'put': {
    gender: 'm', type: 'a',
    forms: {
      N: ['put', 'putovi / puti'], G: ['puta', 'putova / puti'], D: ['putu', 'putovima'],
      A: ['put', 'putove'], V: ['pute', 'putovi'], L: ['putu', 'putovima'],
      I: ['putem / putom', 'putovima']
    },
    note: 'I jd. ima oblike "putem" (po putu) i "putom" (jednom). Mn. ima 2 oblika ("putovi" je češći).'
  },
  'dan': {
    gender: 'm', type: 'a',
    forms: {
      N: ['dan', 'dani'], G: ['dana', 'dana'], D: ['danu', 'danima'],
      A: ['dan', 'dane'], V: ['dane', 'dani'], L: ['danu', 'danima'],
      I: ['danom', 'danima']
    },
    note: 'M.r. s G mn. = G jd. (rijetkost u m.r.).'
  },
  'pjesma': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['pjesma', 'pjesme'], G: ['pjesme', 'pjesama'], D: ['pjesmi', 'pjesmama'],
      A: ['pjesmu', 'pjesme'], V: ['pjesmo', 'pjesme'], L: ['pjesmi', 'pjesmama'],
      I: ['pjesmom', 'pjesmama']
    },
    note: 'G mn. s nepostojanim a — "pjesama".'
  },
  'sestra': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['sestra', 'sestre'], G: ['sestre', 'sestara'], D: ['sestri', 'sestrama'],
      A: ['sestru', 'sestre'], V: ['sestro', 'sestre'], L: ['sestri', 'sestrama'],
      I: ['sestrom', 'sestrama']
    },
    note: 'G mn. s nepostojanim a — "sestara".'
  },
  'jaje': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['jaje', 'jaja'], G: ['jaja', 'jaja'], D: ['jajetu', 'jajima'],
      A: ['jaje', 'jaja'], V: ['jaje', 'jaja'], L: ['jajetu', 'jajima'],
      I: ['jajetom / jajem', 'jajima']
    },
    note: 'Sr.r. s posebnim oblikom u D/L jd. (-etu).'
  },
  'ime': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['ime', 'imena'], G: ['imena', 'imena'], D: ['imenu', 'imenima'],
      A: ['ime', 'imena'], V: ['ime', 'imena'], L: ['imenu', 'imenima'],
      I: ['imenom', 'imenima']
    },
    note: 'Sr.r. s n-osnovom — proširuje se s -en- (ime → imen-a, imen-u, imen-om).'
  },
  'vrijeme': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['vrijeme', 'vremena'], G: ['vremena', 'vremena'], D: ['vremenu', 'vremenima'],
      A: ['vrijeme', 'vremena'], V: ['vrijeme', 'vremena'], L: ['vremenu', 'vremenima'],
      I: ['vremenom', 'vremenima']
    },
    note: 'Sr.r. s n-osnovom + alternacija jata (vrije/vreme).'
  },
  'rame': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['rame', 'ramena'], G: ['ramena', 'ramena'], D: ['ramenu', 'ramenima'],
      A: ['rame', 'ramena'], V: ['rame', 'ramena'], L: ['ramenu', 'ramenima'],
      I: ['ramenom', 'ramenima']
    },
    note: 'Sr.r. s n-osnovom (kao "ime").'
  }
};

// Detekcija deklinacijske vrste i roda (heuristika)
function detectDeclType(word){
  const w = word.toLowerCase();
  if(w.endsWith('a')){
    if(['tata','papa','djed','vojvoda','starješina','kolega','sudac'].includes(w)){
      return {type:'e', gender:'m'};
    }
    return {type:'e', gender:'ž'};
  }
  if(w.endsWith('o') || w.endsWith('e')){
    return {type:'a', gender:'sr'};
  }
  // Konstantna imena na -i (i-vrsta ž.r.) ili neka specifična
  if(['noć','stvar','ljubav','kost','mast','mladost','sreća','radost','glad','riječ'].includes(w)){
    return {type:'i', gender:'ž'};
  }
  // Default — suglasnik = a-vrsta m.r.
  return {type:'a', gender:'m'};
}

// Primjena glasovnih promjena (za regular declension)
function applySoundChanges(stem, ending, position){
  const last = stem[stem.length-1];
  // Sibilarizacija (k, g, h + i → c, z, s) u D/L jd. i N/V mn.
  if(ending.startsWith('i') && (position === 'Djd' || position === 'Ljd' || position === 'Nmn' || position === 'Vmn')){
    if(last === 'k') return stem.slice(0, -1) + 'c' + ending;
    if(last === 'g') return stem.slice(0, -1) + 'z' + ending;
    if(last === 'h') return stem.slice(0, -1) + 's' + ending;
  }
  // 1. palatalizacija (k, g, h + e → č, ž, š) u V jd.
  if(ending.startsWith('e') && position === 'Vjd'){
    if(last === 'k') return stem.slice(0, -1) + 'č' + ending;
    if(last === 'g') return stem.slice(0, -1) + 'ž' + ending;
    if(last === 'h') return stem.slice(0, -1) + 'š' + ending;
    if(last === 'c') return stem.slice(0, -1) + 'č' + ending;
  }
  return stem + ending;
}

// Regular declension engine
function declineRegular(word, type, gender){
  const forms = {};
  const w = word.toLowerCase();
  const animate = isAnimate(w);
  
  if(type === 'a' && gender === 'm'){
    const stem = w;
    forms.N = [w, applySoundChanges(stem, 'i', 'Nmn')];
    forms.G = [applySoundChanges(stem, 'a', 'Gjd'), applySoundChanges(stem, 'a', 'Gmn')];
    forms.D = [applySoundChanges(stem, 'u', 'Djd'), applySoundChanges(stem, 'ima', 'Dmn')];
    // A jd. — živo = G jd., neživo = N jd.
    forms.A = [animate ? applySoundChanges(stem, 'a', 'Gjd') : w, applySoundChanges(stem, 'e', 'Amn')];
    forms.V = [applySoundChanges(stem, 'e', 'Vjd'), applySoundChanges(stem, 'i', 'Vmn')];
    forms.L = [applySoundChanges(stem, 'u', 'Ljd'), applySoundChanges(stem, 'ima', 'Lmn')];
    forms.I = [applySoundChanges(stem, 'om', 'Ijd'), applySoundChanges(stem, 'ima', 'Imn')];
  } else if(type === 'a' && gender === 'sr'){
    const stem = w.slice(0, -1);
    const isE = w.endsWith('e');
    forms.N = [w, stem + 'a'];
    forms.G = [stem + 'a', stem + 'a'];
    forms.D = [stem + 'u', stem + 'ima'];
    forms.A = [w, stem + 'a'];
    forms.V = [w, stem + 'a'];
    forms.L = [stem + 'u', stem + 'ima'];
    forms.I = [stem + (isE ? 'em' : 'om'), stem + 'ima'];
  } else if(type === 'e'){
    const stem = w.slice(0, -1);
    forms.N = [w, stem + 'e'];
    forms.G = [stem + 'e', stem + 'a'];
    forms.D = [applySoundChanges(stem, 'i', 'Djd'), stem + 'ama'];
    forms.A = [stem + 'u', stem + 'e'];
    forms.V = [stem + 'o', stem + 'e'];
    forms.L = [applySoundChanges(stem, 'i', 'Ljd'), stem + 'ama'];
    forms.I = [stem + 'om', stem + 'ama'];
  } else if(type === 'i'){
    const stem = w;
    forms.N = [w, stem + 'i'];
    forms.G = [stem + 'i', stem + 'i'];
    forms.D = [stem + 'i', stem + 'ima'];
    forms.A = [w, stem + 'i'];
    forms.V = [stem + 'i', stem + 'i'];
    forms.L = [stem + 'i', stem + 'ima'];
    forms.I = [stem + 'i / ' + stem + 'ju', stem + 'ima'];
  }
  
  return forms;
}

function declineNoun(){
  const input = document.getElementById('decl-input');
  const out = document.getElementById('decl-results');
  if(!input || !out) return;
  
  const word = input.value.trim().toLowerCase();
  if(!word){ out.innerHTML = ''; return; }
  
  if(!/^[a-zčćđšž]+$/.test(word)){
    out.innerHTML = '<div class="box-warn"><div class="bw-body"><div class="bw-txt">Samo hrv. slova (a-ž), bez razmaka.</div></div></div>';
    return;
  }
  
  let result, gender, type, note, isException = false;
  
  // Provjeri bazu iznimki
  if(DECL_EXCEPTIONS[word]){
    const exc = DECL_EXCEPTIONS[word];
    result = exc.forms;
    gender = exc.gender;
    type = exc.type;
    note = exc.note;
    isException = true;
  } else {
    const detected = detectDeclType(word);
    type = detected.type;
    gender = detected.gender;
    result = declineRegular(word, type, gender);
    note = \`Regularno sklanjanje · \${type}-vrsta · \${gender}.r.\`;
  }
  
  const GENDER_LABEL = {'m':'muški rod','ž':'ženski rod','sr':'srednji rod'};
  const TYPE_LABEL = {'a':'a-vrsta','e':'e-vrsta','i':'i-vrsta'};
  
  const PADEZ_NAMES = [
    ['N','Nominativ','tko? što?','var(--blue)'],
    ['G','Genitiv','koga? čega?','var(--red)'],
    ['D','Dativ','komu? čemu?','var(--bronze)'],
    ['A','Akuzativ','koga? što?','var(--green)'],
    ['V','Vokativ','(dozivanje)','var(--gold)'],
    ['L','Lokativ','o kome? o čemu?','#9b59b6'],
    ['I','Instrumental','s kim? s čim?','#e67e22']
  ];
  
  let html = \`
    <div style="padding:18px;background:linear-gradient(135deg,rgba(233,180,70,.08),transparent);border:1px solid rgba(233,180,70,.3);border-radius:var(--r2);margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
        <div>
          <div style="font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:2px">DEKLINACIJA</div>
          <div style="font-family:var(--display);font-size:28px;font-weight:700;color:var(--gold);margin-top:4px">\${word}</div>
        </div>
        <div style="text-align:right">
          <div style="font-family:var(--mono);font-size:11px;color:var(--t2)">\${GENDER_LABEL[gender]} · \${TYPE_LABEL[type]}</div>
          \${isException ? '<div style="font-family:var(--mono);font-size:10px;color:var(--bronze);margin-top:4px">⚠ IZNIMKA · iz baze</div>' : ''}
        </div>
      </div>
    </div>

    <div class="table-wrap" style="overflow-x:auto;margin:12px 0">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:13px">
        <thead>
          <tr style="background:var(--ele);border-bottom:2px solid var(--bd)">
            <th style="padding:10px;text-align:left;color:var(--gold)">Padež</th>
            <th style="padding:10px;text-align:left;color:var(--gold)">Pitanje</th>
            <th style="padding:10px;text-align:center;color:var(--gold)">Jednina</th>
            <th style="padding:10px;text-align:center;color:var(--gold)">Množina</th>
          </tr>
        </thead>
        <tbody>
  \`;
  
  PADEZ_NAMES.forEach(([key, name, q, color]) => {
    const [jd, mn] = result[key] || ['—','—'];
    html += \`
      <tr style="border-bottom:1px solid var(--bd)">
        <td style="padding:10px;color:\${color};font-weight:700">\${name}</td>
        <td style="padding:10px;color:var(--t3);font-size:11px">\${q}</td>
        <td style="padding:10px;text-align:center;color:var(--t1);font-weight:600">\${jd}</td>
        <td style="padding:10px;text-align:center;color:var(--t1);font-weight:600">\${mn}</td>
      </tr>
    \`;
  });
  
  html += \`
        </tbody>
      </table>
    </div>
  \`;
  
  if(note){
    html += \`
      <div class="box-signal" style="margin-top:12px">
        <div class="box-signal-lbl">💡 Napomena</div>
        <div class="box-signal-txt">\${note}</div>
      </div>
    \`;
  }
  
  if(!isException){
    html += \`
      <div style="font-family:var(--mono);font-size:10px;color:var(--t3);text-align:center;margin-top:8px">⚠ Algoritamska deklinacija — provjeri u rječniku za stilistički specifične oblike</div>
    \`;
  }
  
  // Action buttons at bottom
  html += \`
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;flex-wrap:wrap">
      <button class="nb-btn" id="decl-copy-btn" style="padding:6px 12px;font-size:12px" onclick="declineCopyTable()">📋 Kopiraj tablicu</button>
      <button class="nb-btn" style="padding:6px 12px;font-size:12px" onclick="window.print()">🖨 Printaj</button>
    </div>
  \`;
  
    // Save to history
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.decl_hist')||'[]');
    if(!hist.some(h => h.word === word)){
      hist.push({word, date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h21.decl_hist', JSON.stringify(hist.slice(-15)));
    }
  } catch(e){}
  
  out.innerHTML = html;
}

function declineExample(word){
  const input = document.getElementById('decl-input');
  if(input){
    input.value = word;
    declineNoun();
    input.scrollIntoView({behavior:'smooth', block:'center'});
  }
}


/* ═══════════════════════════════════
   TAB 3 · PADEŽNI QUIZ
═══════════════════════════════════ */

const PZ_ITEMS = [
  {sentence:['Ivan','je','vidio','Anu','u','parku','.'], target:3, word:'Anu', answer:'A', explain:'"Anu" je izravni objekt glagola "vidio" — akuzativ (A). Pitanje: koga je vidio? → Anu.'},
  {sentence:['Dao','sam','knjigu','prijatelju','.'], target:3, word:'prijatelju', answer:'D', explain:'"Prijatelju" je primatelj — dativ (D). Pitanje: komu sam dao? → prijatelju.'},
  {sentence:['Boravim','u','Zagrebu','već','5','godina','.'], target:2, word:'Zagrebu', answer:'L', explain:'"Zagrebu" označava mjesto (gdje?) — lokativ (L). Uz prijedlog "u" + L = mirovanje.'},
  {sentence:['Kupila','je','cvijeće','za','majčin','rođendan','.'], target:5, word:'rođendan', answer:'A', explain:'"Rođendan" — akuzativ (A), uz prijedlog "za". Pitanje: za što? → za rođendan.'},
  {sentence:['Otišao','je','od','kuće','rano','ujutro','.'], target:3, word:'kuće', answer:'G', explain:'"Kuće" je genitiv (G) uz prijedlog "od". Pitanje: od čega? → od kuće.'},
  {sentence:['Šetali','su','se','s','djecom','po','parku','.'], target:4, word:'djecom', answer:'I', explain:'"Djecom" je instrumental (I) uz prijedlog "s" — društvo. Pitanje: s kim? → s djecom.'},
  {sentence:['Ivane',',','dođi','ovamo','!'], target:0, word:'Ivane', answer:'V', explain:'"Ivane" — vokativ (V). Dozivanje osobe, stoji odvojeno (obično sa zarezom ili uskličnikom).'},
  {sentence:['Knjiga','leži','na','stolu','kraj','prozora','.'], target:3, word:'stolu', answer:'L', explain:'"Stolu" je lokativ (L) uz prijedlog "na" — gdje leži? Stanje mirovanja.'},
];

let pzIdx = 0, pzScore = 0;
const PZ_OPTIONS = [
  {key:'N', name:'Nominativ', color:'var(--blue)'},
  {key:'G', name:'Genitiv', color:'var(--red)'},
  {key:'D', name:'Dativ', color:'var(--bronze)'},
  {key:'A', name:'Akuzativ', color:'var(--green)'},
  {key:'V', name:'Vokativ', color:'var(--gold)'},
  {key:'L', name:'Lokativ', color:'#9b59b6'},
  {key:'I', name:'Instrumental', color:'#e67e22'}
];

function renderPzExercise(){
  const cont = document.getElementById('pz-exercise');
  if(!cont) return;
  if(pzIdx >= PZ_ITEMS.length){ renderPzResult(); return; }
  
  const item = PZ_ITEMS[pzIdx];
  const sentenceHtml = item.sentence.map((w, i) => {
    if(i === item.target){
      return \`<span style="display:inline-block;padding:4px 10px;background:rgba(233,180,70,.15);border:2px solid var(--gold);border-radius:var(--r1);color:var(--gold);font-weight:700;margin:0 2px">\${w}</span>\`;
    }
    if(w === '.' || w === ',' || w === '!' || w === '?') return w;
    return \`<span style="margin:0 2px">\${w}</span>\`;
  }).join(' ').replace(/ ([.,!?])/g, '$1');
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">PITANJE \${pzIdx+1} / \${PZ_ITEMS.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${pzScore}</div>
      </div>
      <div style="text-align:center;margin:20px 0;padding:20px;background:var(--bg);border-radius:var(--r1);font-family:var(--display);font-size:16px;line-height:1.8;color:var(--t2)">\${sentenceHtml}</div>
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJI JE PADEŽ OZNAČENE RIJEČI?</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:6px">
        \${PZ_OPTIONS.map(opt => \`
          <button class="pz-opt" data-ans="\${opt.key}" onclick="pzAnswer('\${opt.key}', this)" style="padding:12px 10px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;transition:all .2s;text-align:left">
            <div style="font-weight:700;color:\${opt.color}">\${opt.key}</div>
            <div style="font-size:10px;color:var(--t3)">\${opt.name}</div>
          </button>
        \`).join('')}
      </div>
      <div id="pz-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function pzAnswer(chosen, btn){
  const item = PZ_ITEMS[pzIdx];
  const correct = chosen === item.answer;
  if(correct) pzScore++;
  
  document.querySelectorAll('.pz-opt').forEach(b => {b.disabled=true;b.style.cursor='default';b.style.opacity='0.5';});
  btn.style.opacity='1'; btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.pz-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity='1'; b.style.borderColor='var(--green)'; b.style.background='rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('pz-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="pzNext()">\${pzIdx < PZ_ITEMS.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function pzNext(){ pzIdx++; renderPzExercise(); }
function pzReset(){ pzIdx=0; pzScore=0; const r=document.getElementById('pz-result'),c=document.getElementById('pz-exercise'); if(r)r.style.display='none'; if(c)c.style.display=''; renderPzExercise(); }

function renderPzResult(){
  const cont = document.getElementById('pz-exercise'), res = document.getElementById('pz-result');
  if(!cont || !res) return;
  cont.style.display='none'; res.style.display='block';
  const pct = Math.round((pzScore/PZ_ITEMS.length)*100);
  let msg, color, emoji;
  if(pct===100){emoji='🏆';msg='Savršeno! Padeži su ti potpuno jasni.';color='var(--gold)';}
  else if(pct>=75){emoji='🎯';msg='Odlično! Solidan temelj.';color='var(--green)';}
  else if(pct>=50){emoji='📖';msg='Dobro, ali vježbaj s declinerom iznad.';color='var(--blue)';}
  else{emoji='⚠';msg='Ponovi scene-cards svakog padeža + pitanja.';color='var(--red)';}
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${pzScore} / \${PZ_ITEMS.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="pzReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){ setTimeout(renderPzExercise, 300); });
  if(document.readyState !== 'loading'){ setTimeout(renderPzExercise, 300); }
}


/* ═══════════════════════════════════
   TAB 3 · KONJUGACIJSKI QUIZ
═══════════════════════════════════ */

const KZ_ITEMS = [
  {form:'čitam', base:'čitati', answer:'prezent 1. l. jd.', explain:'"Čitam" — prezent, 1. lice jednine. Tvorba: osnova "čit-" + nastavak "-am".'},
  {form:'napisao sam', base:'napisati', answer:'perfekt 1. l. jd. m.r.', explain:'"Napisao sam" — perfekt, 1. l. jd. (m.r.). Tvorba: prezent "biti" + glagolski pridjev radni.'},
  {form:'pročitat ću', base:'pročitati', answer:'futur I 1. l. jd.', explain:'"Pročitat ću" — futur I, 1. l. jd. Tvorba: infinitiv bez -i + nenaglašeni "htjeti" (ću).'},
  {form:'čitao bih', base:'čitati', answer:'kondicional I 1. l. jd. m.r.', explain:'"Čitao bih" — kondicional I, 1. l. jd. (m.r.). Tvorba: aorist pomoćnog glagola "biti" (bih) + pridjev radni.'},
  {form:'čitaj!', base:'čitati', answer:'imperativ 2. l. jd.', explain:'"Čitaj!" — imperativ, 2. l. jd. Zapovijed upućena sugovorniku.'},
  {form:'budem čitao', base:'čitati', answer:'futur II 1. l. jd. m.r.', explain:'"Budem čitao" — futur II, 1. l. jd. (m.r.). Tvorba: prezent svršenog "biti" (budem) + pridjev radni. Koristi se u zavisnim rečenicama.'},
];

let kzIdx = 0, kzScore = 0;
const KZ_OPTIONS = [
  'prezent 1. l. jd.', 'prezent 3. l. mn.',
  'perfekt 1. l. jd. m.r.', 'perfekt 3. l. jd. ž.r.',
  'aorist 1. l. jd.',
  'futur I 1. l. jd.', 'futur I 3. l. mn.',
  'futur II 1. l. jd. m.r.',
  'imperativ 2. l. jd.', 'imperativ 1. l. mn.',
  'kondicional I 1. l. jd. m.r.', 'kondicional II 1. l. jd. m.r.'
];

function renderKzExercise(){
  const cont = document.getElementById('kz-exercise');
  if(!cont) return;
  if(kzIdx >= KZ_ITEMS.length){ renderKzResult(); return; }
  
  const item = KZ_ITEMS[kzIdx];
  
  // Build 4 option choices: correct + 3 distractors
  const wrong = KZ_OPTIONS.filter(o => o !== item.answer);
  const shuffled = wrong.sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [item.answer, ...shuffled].sort(() => Math.random() - 0.5);
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">PITANJE \${kzIdx+1} / \${KZ_ITEMS.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${kzScore}</div>
      </div>
      <div style="text-align:center;margin:20px 0;padding:24px;background:var(--bg);border-radius:var(--r1)">
        <div style="font-family:var(--display);font-size:28px;font-weight:700;color:var(--gold);margin-bottom:4px">\${item.form}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">osnova: \${item.base}</div>
      </div>
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJI JE OBLIK?</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        \${options.map(opt => \`
          <button class="kz-opt" data-ans="\${opt}" onclick="kzAnswer('\${opt}', this)" style="padding:12px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;transition:all .2s;text-align:left">
            \${opt}
          </button>
        \`).join('')}
      </div>
      <div id="kz-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function kzAnswer(chosen, btn){
  const item = KZ_ITEMS[kzIdx];
  const correct = chosen === item.answer;
  if(correct) kzScore++;
  
  document.querySelectorAll('.kz-opt').forEach(b => {b.disabled=true;b.style.cursor='default';b.style.opacity='0.5';});
  btn.style.opacity='1'; btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.kz-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity='1'; b.style.borderColor='var(--green)'; b.style.background='rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('kz-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="kzNext()">\${kzIdx < KZ_ITEMS.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function kzNext(){ kzIdx++; renderKzExercise(); }
function kzReset(){ kzIdx=0; kzScore=0; const r=document.getElementById('kz-result'),c=document.getElementById('kz-exercise'); if(r)r.style.display='none'; if(c)c.style.display=''; renderKzExercise(); }

function renderKzResult(){
  const cont = document.getElementById('kz-exercise'), res = document.getElementById('kz-result');
  if(!cont || !res) return;
  cont.style.display='none'; res.style.display='block';
  const pct = Math.round((kzScore/KZ_ITEMS.length)*100);
  let msg, color, emoji;
  if(pct===100){emoji='🏆';msg='Savršeno! Glagolski oblici su ti jasni.';color='var(--gold)';}
  else if(pct>=75){emoji='🎯';msg='Odlično! Manje greške — ponovi nepravilne.';color='var(--green)';}
  else if(pct>=50){emoji='📖';msg='Dobro, ali ponovi tablicu 7 vremena.';color='var(--blue)';}
  else{emoji='⚠';msg='Vrati se na tablicu vremena/načina — ovo je temelj.';color='var(--red)';}
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${kzScore} / \${KZ_ITEMS.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="kzReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){ setTimeout(renderKzExercise, 350); });
  if(document.readyState !== 'loading'){ setTimeout(renderKzExercise, 350); }
}


/* ═══════════════════════════════════
   TAB 5 · MORFO SCANNER · morfemska + gramatička analiza
═══════════════════════════════════ */


// LEXICON — frequent words for accurate analysis (fallback for heuristic)
const MS_VERB_LEXICON = {
  // PRESENT FORMS → infinitive
  'idem':'ići','ideš':'ići','ide':'ići','idemo':'ići','idete':'ići','idu':'ići',
  'mogu':'moći','možeš':'moći','može':'moći','možemo':'moći','možete':'moći',
  'jesam':'biti','jesi':'biti','jest':'biti','jesmo':'biti','jeste':'biti','jesu':'biti',
  'sam':'biti','si':'biti','je':'biti','smo':'biti','ste':'biti','su':'biti',
  'imam':'imati','imaš':'imati','ima':'imati','imamo':'imati','imate':'imati','imaju':'imati',
  'znam':'znati','znaš':'znati','zna':'znati','znamo':'znati','znate':'znati','znaju':'znati',
  'volim':'voljeti','voliš':'voljeti','voli':'voljeti','volimo':'voljeti','volite':'voljeti','vole':'voljeti',
  'dajem':'davati','daješ':'davati','daje':'davati','dam':'dati','daš':'dati','da':'dati',
  'pišem':'pisati','pišeš':'pisati','piše':'pisati','pišemo':'pisati','pišete':'pisati','pišu':'pisati',
  'čitam':'čitati','čitaš':'čitati','čita':'čitati','čitamo':'čitati','čitate':'čitati','čitaju':'čitati',
  'kažem':'kazati','kažeš':'kazati','kaže':'kazati','kažemo':'kazati','kažete':'kazati','kažu':'kazati',
  'velim':'veljeti','veliš':'veljeti','veli':'veljeti','velimo':'veljeti','velite':'veljeti','vele':'veljeti',
  'rekoh':'reći','reče':'reći','rekosmo':'reći','rekoste':'reći','rekoše':'reći',
};

// Frequent animate (living) nouns — for accurate A jd. m.r.
const DECL_ANIMATE = ['prijatelj','učitelj','učenik','student','profesor','liječnik','pisac','pjesnik','glumac','dječak','momak','čovjek','muškarac','sinovi','gospod','vladar','kralj','car','svetac','svećenik','voditelj','pjevač','glumac','vozač','radnik','voj','vojnik','konj','vuk','medvjed','tigar','lav','pas','mačka','zec','jelen','sokol','orao','golub','lavin','lisica','kuna','jazavac','bik','pijetao','crv','komarac','pauk','medo'];

function isAnimate(word){
  return DECL_ANIMATE.some(a => word.toLowerCase().includes(a));
}


const MS_NOUN_LEXICON = {
  // FREQUENT IRREGULAR FORMS → lemma
  'ljudi':'čovjek','djeca':'dijete','braća':'brat','psi':'pas','oči':'oko','uši':'uho',
  'gospoda':'gospodin','sinovi':'sin','očevi':'otac','životi':'život',
};

const MS_PRONOUNS = {
  'ja':{type:'osobna',person:1,number:'jd'},'ti':{type:'osobna',person:2,number:'jd'},
  'on':{type:'osobna',person:3,number:'jd',gender:'m'},'ona':{type:'osobna',person:3,number:'jd',gender:'ž'},
  'ono':{type:'osobna',person:3,number:'jd',gender:'sr'},
  'mi':{type:'osobna',person:1,number:'mn'},'vi':{type:'osobna',person:2,number:'mn'},
  'oni':{type:'osobna',person:3,number:'mn'},
  'se':{type:'povratna'},'sebe':{type:'povratna'},
  'moj':{type:'posvojna'},'tvoj':{type:'posvojna'},'naš':{type:'posvojna'},'vaš':{type:'posvojna'},
  'njegov':{type:'posvojna'},'njezin':{type:'posvojna'},'njihov':{type:'posvojna'},
  'svoj':{type:'povratno-posvojna'},
  'ovaj':{type:'pokazna'},'taj':{type:'pokazna'},'onaj':{type:'pokazna'},
  'ovo':{type:'pokazna'},'to':{type:'pokazna'},'ono':{type:'pokazna'},
  'tko':{type:'upitna/odnosna'},'što':{type:'upitna/odnosna'},'koji':{type:'upitna/odnosna'},
  'čiji':{type:'upitna/odnosna'},'kakav':{type:'upitna/odnosna'},
  'netko':{type:'neodređena'},'nešto':{type:'neodređena'},'neki':{type:'neodređena'},
  'svatko':{type:'neodređena'},'svako':{type:'neodređena'},'svi':{type:'neodređena'},
  'nitko':{type:'neodređena'},'ništa':{type:'neodređena'},
};

const MS_NUMERALS = {
  'jedan':{type:'glavni',value:1},'dva':{type:'glavni',value:2},'tri':{type:'glavni',value:3},
  'četiri':{type:'glavni',value:4},'pet':{type:'glavni',value:5},'šest':{type:'glavni',value:6},
  'sedam':{type:'glavni',value:7},'osam':{type:'glavni',value:8},'devet':{type:'glavni',value:9},
  'deset':{type:'glavni',value:10},'sto':{type:'glavni',value:100},'tisuću':{type:'glavni',value:1000},
  'prvi':{type:'redni',value:1},'drugi':{type:'redni',value:2},'treći':{type:'redni',value:3},
  'četvrti':{type:'redni',value:4},'peti':{type:'redni',value:5},'šesti':{type:'redni',value:6},
  'dvoje':{type:'zbirni',value:2},'troje':{type:'zbirni',value:3},'četvero':{type:'zbirni',value:4},
};

const MS_PARTICLES = ['ne','da','li','baš','evo','eto','eno','možda','neka','nek'];
const MS_INTERJECTIONS = ['ah','oh','uh','ej','hej','jao','ajme','mjau','vau','bum','bam','tras'];
const MS_PREPOSITIONS = ['u','na','o','po','pri','s','sa','za','iz','od','do','bez','kod','kraj','pokraj','preko','protiv','prema','k','ka','nasuprot','usprkos','zbog','radi','poslije','prije','iznad','ispod','iza','ispred','među','nad','pod','pred','kroz','niz','uz'];
const MS_CONJUNCTIONS = ['i','pa','te','ni','niti','ali','no','nego','već','ili','a','jer','da','dok','kad','kada','ako','iako','premda','što','čim','čime','dokle'];
const MS_ADVERBS = ['brzo','sporo','glasno','tiho','ovdje','ondje','gdje','kamo','sutra','jučer','danas','sada','tada','vrlo','jako','malo','mnogo','možda','sigurno','sretno','zato','stoga','također','ponekad'];

// ========== PREFIKS baza ==========
const MS_PREFIXES = [
  {p:'naj', meaning:'superlativ'},
  {p:'ne', meaning:'negacija'},
  {p:'protu', meaning:'nasuprot'},
  {p:'među', meaning:'između'},
  {p:'pred', meaning:'ispred'},
  {p:'raz', meaning:'razdvajanje / pojačavanje'},
  {p:'iz', meaning:'iznutra, dovršenje'},
  {p:'is', meaning:'iznutra (pred bezv.)'},
  {p:'uz', meaning:'prema gore, usput'},
  {p:'us', meaning:'uz + bezvučno'},
  {p:'od', meaning:'udaljavanje'},
  {p:'ot', meaning:'od + bezvučno'},
  {p:'pre', meaning:'ponavljanje / prekomjerno'},
  {p:'pri', meaning:'približavanje, blizina'},
  {p:'pro', meaning:'kroz, ispunjenje'},
  {p:'nad', meaning:'iznad'},
  {p:'nat', meaning:'nad + bezvučno'},
  {p:'pod', meaning:'ispod'},
  {p:'pot', meaning:'pod + bezvučno'},
  {p:'za', meaning:'početak, prostor iza'},
  {p:'do', meaning:'dolazak, dovršenje'},
  {p:'po', meaning:'dovršenje, nastavak'},
  {p:'u', meaning:'ulazak'},
  {p:'na', meaning:'početak / dovršenje'},
  {p:'o', meaning:'oko, obuhvat'},
  {p:'ob', meaning:'okolo, obuhvat'},
  {p:'s', meaning:'zajedno, dolje'},
  {p:'z', meaning:'s + zvučno'},
];

// ========== SUFIKSI baza (tvorbeni) ==========
const MS_NOUN_SUFFIXES = [
  {s:'ost', type:'imenica ž.r.', meaning:'apstraktna osobina (ljep-ost, dobr-ost)'},
  {s:'oća', type:'imenica ž.r.', meaning:'apstraktna osobina (čist-oća)'},
  {s:'stvo', type:'imenica sr.r.', meaning:'skupina / svojstvo (pjesn-ištvo, druš-tvo)'},
  {s:'ica', type:'imenica ž.r.', meaning:'osoba/mala stvar (učen-ica, knjiž-ica)'},
  {s:'telj', type:'imenica m.r.', meaning:'vršitelj radnje (uči-telj, pisa-telj)'},
  {s:'ač', type:'imenica m.r.', meaning:'vršitelj radnje (voz-ač, pjev-ač)'},
  {s:'ar', type:'imenica m.r.', meaning:'zanimanje (knjiž-ar, mlin-ar)'},
  {s:'nik', type:'imenica m.r.', meaning:'osoba (rad-nik, putnik)'},
  {s:'ica', type:'imenica ž.r.', meaning:'osoba ž.r. / umanjenice (učen-ica, kuć-ica)'},
  {s:'anje', type:'imenica sr.r. (glagolska)', meaning:'od glagola -ati (pis-anje, čit-anje)'},
  {s:'enje', type:'imenica sr.r. (glagolska)', meaning:'od glagola -iti/-eti (vođ-enje)'},
  {s:'onja', type:'imenica m.r.', meaning:'osobina (crn-onja, tvrd-oglavonja)'},
  {s:'lo', type:'imenica sr.r.', meaning:'sredstvo/rezultat (peri-lo, kup-alo)'},
];

const MS_ADJ_SUFFIXES = [
  {s:'an', type:'pridjev (neodr.)', meaning:'opisni (lijep-an? hlad-an)'},
  {s:'ni', type:'pridjev (određ.)', meaning:'opisni određeni (jutar-nji)'},
  {s:'ski', type:'pridjev', meaning:'pripadnost/odnos (škol-ski, grad-ski)'},
  {s:'čki', type:'pridjev', meaning:'pripadnost (junač-ki)'},
  {s:'ov', type:'pridjev posvojni', meaning:'pripadnost m.r. (oč-ev, brat-ov)'},
  {s:'ev', type:'pridjev posvojni', meaning:'pripadnost (otač-ev varianta)'},
  {s:'in', type:'pridjev posvojni', meaning:'pripadnost ž.r. (majč-in, Anin)'},
  {s:'ji', type:'pridjev posvojni', meaning:'pripadnost (pas-ji, božji)'},
];

const MS_VERB_SUFFIXES = [
  {s:'nuti', type:'glagol (II. vrsta, svršeni)', meaning:'trenutna radnja (klik-nuti)'},
  {s:'avati', type:'glagol (nesvršeni)', meaning:'ponavljanje (pis-avati, ud-arati)'},
  {s:'ivati', type:'glagol (nesvršeni)', meaning:'ponavljanje (propov-ijedati)'},
  {s:'ovati', type:'glagol', meaning:'radnja (rad-ovati, kup-ovati)'},
  {s:'jeti', type:'glagol', meaning:'stanje (vid-jeti, bol-jeti)'},
];

// ========== PADEŽNI NASTAVCI ==========
const MS_CASE_ENDINGS = {
  // e-vrsta ž.r.
  'e-vrsta': {
    'a': {padez:'N jd.', info:'nominativ jednine'},
    'e': {padez:'G jd. / N mn.', info:'genitiv jd. ili nominativ mn.'},
    'i': {padez:'D/L jd.', info:'dativ ili lokativ jednine'},
    'u': {padez:'A jd.', info:'akuzativ jednine'},
    'o': {padez:'V jd.', info:'vokativ jednine'},
    'om': {padez:'I jd.', info:'instrumental jednine'},
    'ama': {padez:'D/L/I mn.', info:'dativ/lokativ/instrumental množine'},
    'ima': {padez:'D/L/I mn.', info:'dativ/lokativ/instrumental množine'},
  },
  // a-vrsta m.r.
  'a-vrsta': {
    'a': {padez:'G/A jd. (živo)', info:'genitiv/akuzativ jednine (za živo)'},
    'u': {padez:'D/L jd.', info:'dativ ili lokativ jednine'},
    'e': {padez:'V jd. (palat.) / A mn.', info:'vokativ ili akuzativ množine'},
    'om': {padez:'I jd.', info:'instrumental jednine'},
    'em': {padez:'I jd. (palat.)', info:'instrumental jednine palatalna osnova'},
    'i': {padez:'N/V mn.', info:'nominativ ili vokativ množine'},
    'ima': {padez:'D/L/I mn.', info:'dativ/lokativ/instrumental množine'},
  }
};

// ========== GLAGOLSKI NASTAVCI ==========
const MS_VERB_ENDINGS = [
  {end:'ati', form:'infinitiv'},
  {end:'iti', form:'infinitiv'},
  {end:'eti', form:'infinitiv'},
  {end:'jeti', form:'infinitiv'},
  {end:'nuti', form:'infinitiv'},
  {end:'ći', form:'infinitiv'},
  // Prezent
  {end:'am', form:'prezent 1. l. jd.'},
  {end:'aš', form:'prezent 2. l. jd.'},
  {end:'a', form:'prezent 3. l. jd.'},
  {end:'amo', form:'prezent 1. l. mn.'},
  {end:'ate', form:'prezent 2. l. mn.'},
  {end:'aju', form:'prezent 3. l. mn.'},
  {end:'im', form:'prezent 1. l. jd.'},
  {end:'iš', form:'prezent 2. l. jd.'},
  {end:'imo', form:'prezent 1. l. mn.'},
  {end:'ite', form:'prezent 2. l. mn.'},
  {end:'e', form:'prezent 3. l. jd. (tip -em) ili imperativ'},
  {end:'em', form:'prezent 1. l. jd.'},
  {end:'eš', form:'prezent 2. l. jd.'},
  {end:'emo', form:'prezent 1. l. mn.'},
  {end:'ete', form:'prezent 2. l. mn.'},
  {end:'u', form:'prezent 3. l. mn.'},
  // Glagolski pridjev radni
  {end:'ao', form:'glag. pridjev radni m.r. jd.'},
  {end:'la', form:'glag. pridjev radni ž.r. jd.'},
  {end:'lo', form:'glag. pridjev radni sr.r. jd.'},
  {end:'li', form:'glag. pridjev radni m.r. mn.'},
  {end:'le', form:'glag. pridjev radni ž.r. mn.'},
  {end:'io', form:'glag. pridjev radni m.r. jd. (od -ieti)'},
  // Imperativ
  {end:'ajte', form:'imperativ 2. l. mn.'},
  {end:'aj', form:'imperativ 2. l. jd.'},
  {end:'ajmo', form:'imperativ 1. l. mn.'},
  {end:'ite', form:'imperativ 2. l. mn.'},
  {end:'i', form:'imperativ 2. l. jd.'},
];

// ========== ANALIZA ==========
function msAnalyzeWord(word){
  const w = word.toLowerCase().trim();
  const result = {
    word: w,
    prefix: [],
    root: w,
    suffix: [],
    ending: '',
    wordClass: null,
    categories: {},
    lemma: w,
    note: '',
    confidence: 'medium'
  };
  
  // STEP 0: LEXICON CHECKS (highest confidence)
  
  // Check pronouns
  if(MS_PRONOUNS[w]){
    result.wordClass = 'zamjenica';
    result.categories.type = MS_PRONOUNS[w].type;
    if(MS_PRONOUNS[w].person) result.categories.person = MS_PRONOUNS[w].person + '. lice';
    if(MS_PRONOUNS[w].number) result.categories.number = MS_PRONOUNS[w].number;
    if(MS_PRONOUNS[w].gender) result.categories.gender = MS_PRONOUNS[w].gender + '.r.';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check numerals
  if(MS_NUMERALS[w]){
    result.wordClass = 'broj';
    result.categories.type = MS_NUMERALS[w].type + ' broj';
    result.categories.value = MS_NUMERALS[w].value;
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check particles
  if(MS_PARTICLES.includes(w)){
    result.wordClass = 'čestica';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    if(w === 'ne') result.categories.type = 'niječna';
    else if(w === 'da') result.categories.type = 'potvrdna (ovisno o kontekstu)';
    else if(w === 'li') result.categories.type = 'upitna';
    else if(['evo','eto','eno'].includes(w)) result.categories.type = 'pokazna';
    else if(['možda','neka','nek'].includes(w)) result.categories.type = 'modalna/poticajna';
    return result;
  }
  
  // Check interjections
  if(MS_INTERJECTIONS.includes(w)){
    result.wordClass = 'uzvik';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check prepositions
  if(MS_PREPOSITIONS.includes(w)){
    result.wordClass = 'prijedlog';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check conjunctions
  if(MS_CONJUNCTIONS.includes(w)){
    result.wordClass = 'veznik';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    if(['i','pa','te','ni','niti','ali','no','nego','već','ili','a'].includes(w)) result.categories.type = 'nezavisni';
    else result.categories.type = 'zavisni';
    return result;
  }
  
  // Check adverbs (whitelist)
  if(MS_ADVERBS.includes(w)){
    result.wordClass = 'prilog';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check verb lexicon
  if(MS_VERB_LEXICON[w]){
    result.wordClass = 'glagol';
    result.lemma = MS_VERB_LEXICON[w];
    result.root = MS_VERB_LEXICON[w].slice(0, -2); // remove -ti
    result.confidence = 'high';
    // Try to determine form heuristically
    if(/m$/.test(w)) result.categories.form = 'prezent 1. l. jd.';
    else if(/š$/.test(w)) result.categories.form = 'prezent 2. l. jd.';
    else if(/mo$/.test(w)) result.categories.form = 'prezent 1. l. mn.';
    else if(/te$/.test(w)) result.categories.form = 'prezent 2. l. mn.';
    return result;
  }
  
  // Check noun lexicon (irregular)
  if(MS_NOUN_LEXICON[w]){
    result.wordClass = 'imenica';
    result.lemma = MS_NOUN_LEXICON[w];
    result.note = 'Nepravilna množina (lemma: ' + MS_NOUN_LEXICON[w] + ').';
    result.confidence = 'high';
    return result;
  }
  
  // STEP 1: Heuristic analysis (existing logic)
  let remaining = w;
  
  // Detect prefixes (longest match first)
  const sortedPrefixes = [...MS_PREFIXES].sort((a, b) => b.p.length - a.p.length);
  for(let p of sortedPrefixes){
    if(remaining.startsWith(p.p) && remaining.length > p.p.length + 2){
      result.prefix.push(p);
      remaining = remaining.slice(p.p.length);
      // Try second prefix
      for(let p2 of sortedPrefixes){
        if(remaining.startsWith(p2.p) && remaining.length > p2.p.length + 2){
          result.prefix.push(p2);
          remaining = remaining.slice(p2.p.length);
          break;
        }
      }
      break;
    }
  }
  
  // Try verb endings (longest first)
  const sortedVerbEndings = [...MS_VERB_ENDINGS].sort((a, b) => b.end.length - a.end.length);
  let verbMatch = null;
  for(let ve of sortedVerbEndings){
    if(remaining.endsWith(ve.end) && remaining.length > ve.end.length + 1){
      verbMatch = ve;
      break;
    }
  }
  
  // Try suffixes
  let foundSuffix = null;
  let suffixType = null;
  
  // Noun suffixes
  const sortedNounSfx = [...MS_NOUN_SUFFIXES].sort((a, b) => b.s.length - a.s.length);
  for(let sf of sortedNounSfx){
    if(remaining.includes(sf.s)){
      const sfIdx = remaining.lastIndexOf(sf.s);
      if(sfIdx > 0 && sfIdx <= remaining.length - sf.s.length){
        const afterSf = remaining.slice(sfIdx + sf.s.length);
        if(afterSf.length <= 3 && /^[aeiouima]*$/.test(afterSf)){
          foundSuffix = sf;
          suffixType = 'noun';
          result.root = remaining.slice(0, sfIdx);
          result.suffix.push(sf);
          result.ending = afterSf;
          break;
        }
      }
    }
  }
  
  // Adjective suffixes
  if(!foundSuffix){
    const sortedAdjSfx = [...MS_ADJ_SUFFIXES].sort((a, b) => b.s.length - a.s.length);
    for(let sf of sortedAdjSfx){
      if(remaining.includes(sf.s)){
        const sfIdx = remaining.lastIndexOf(sf.s);
        if(sfIdx > 0 && sfIdx <= remaining.length - sf.s.length){
          const afterSf = remaining.slice(sfIdx + sf.s.length);
          if(afterSf.length <= 3 && /^[aeiouh]*$/.test(afterSf)){
            foundSuffix = sf;
            suffixType = 'adj';
            result.root = remaining.slice(0, sfIdx);
            result.suffix.push(sf);
            result.ending = afterSf;
            break;
          }
        }
      }
    }
  }
  
  // Classify
  if(verbMatch){
    result.wordClass = 'glagol';
    result.categories.form = verbMatch.form;
    let stem = remaining.slice(0, remaining.length - verbMatch.end.length);
    
    if(verbMatch.form.startsWith('infinitiv')){
      result.lemma = remaining;
    } else if(verbMatch.form.startsWith('prezent')){
      if(verbMatch.end.match(/^a[mš]?$|^am$|^aš$|^amo$|^ate$|^aju$/)) result.lemma = stem + 'ati';
      else if(verbMatch.end.match(/^i[mš]?$|^im$|^iš$|^imo$|^ite$/)) result.lemma = stem + 'iti';
      else if(verbMatch.end.match(/^e[mš]?$|^em$|^eš$|^emo$|^ete$|^u$/)) result.lemma = stem + 'ti';
    } else if(verbMatch.form.startsWith('glag. pridjev radni')){
      if(verbMatch.end === 'ao' || verbMatch.end === 'io') result.lemma = stem + (verbMatch.end === 'ao' ? 'ati' : 'iti');
      else if(['la','lo','li','le'].includes(verbMatch.end)) result.lemma = stem + 'ti';
    } else if(verbMatch.form.startsWith('imperativ')){
      if(['aj','ajte','ajmo'].includes(verbMatch.end)) result.lemma = stem + 'ati';
      else if(['i','ite'].includes(verbMatch.end)) result.lemma = stem + 'iti';
    }
    
    const hasPerfectivePrefix = result.prefix.some(p => ['na','pro','po','do','u','iz','is','pre','za','raz'].includes(p.p));
    result.categories.vid = hasPerfectivePrefix ? 'svršeni' : 'nesvršeni';
  } else if(foundSuffix && suffixType === 'noun'){
    result.wordClass = 'imenica';
    result.categories.type = foundSuffix.type;
    const e = result.ending;
    const declType = foundSuffix.type.includes('ž.r.') ? 'e-vrsta' : 'a-vrsta';
    if(MS_CASE_ENDINGS[declType] && MS_CASE_ENDINGS[declType][e]){
      result.categories.padezAndBroj = MS_CASE_ENDINGS[declType][e].padez;
    } else if(e === ''){
      result.categories.padezAndBroj = 'N/V jd.';
    }
    if(foundSuffix.type.includes('ž.r.')) result.lemma = result.root + foundSuffix.s + 'a';
    else if(foundSuffix.type.includes('sr.r.')) result.lemma = result.root + foundSuffix.s + 'o';
    else result.lemma = result.root + foundSuffix.s;
  } else if(foundSuffix && suffixType === 'adj'){
    result.wordClass = 'pridjev';
    result.categories.type = foundSuffix.type;
    result.lemma = result.root + foundSuffix.s;
    if(result.prefix.some(p => p.p === 'naj')) result.categories.stupanj = 'superlativ';
    else if(w.endsWith('ji') || w.endsWith('iji')) result.categories.stupanj = 'komparativ';
    else result.categories.stupanj = 'pozitiv';
  } else {
    // Heuristic noun fallback
    if(/[aeiou]$/.test(w) || /[aeiou]ma$/.test(w) || /ima$/.test(w)){
      result.wordClass = 'imenica (moguća)';
      const declType = w.endsWith('a') ? 'e-vrsta' : 'a-vrsta';
      result.categories.declType = declType;
      result.confidence = 'low';
      if(MS_CASE_ENDINGS[declType]){
        for(let end in MS_CASE_ENDINGS[declType]){
          if(w.endsWith(end) && (w.length > end.length)){
            result.categories.padezAndBroj = MS_CASE_ENDINGS[declType][end].padez;
            result.ending = end;
            result.root = w.slice(0, w.length - end.length);
            break;
          }
        }
      }
      if(declType === 'e-vrsta') result.lemma = result.root + 'a';
      else result.lemma = result.root;
    } else {
      result.wordClass = '?';
      result.note = 'Teško prepoznati vrstu — provjeri svojim znanjem.';
      result.confidence = 'low';
    }
  }
  
  if(!result.root || result.root.length < 2){
    let fallback = w;
    for(let p of result.prefix){
      fallback = fallback.slice(p.p.length);
    }
    result.root = fallback;
  }
  
  return result;
}

function morfoAnalyze(){
  const input = document.getElementById('ms-input');
  const out = document.getElementById('ms-results');
  if(!input || !out) return;
  
  const word = input.value.trim().toLowerCase();
  if(!word){ out.innerHTML = ''; return; }
  
  if(!/^[a-zčćđšž\\s]+$/.test(word)){
    out.innerHTML = '<div class="box-warn"><div class="bw-body"><div class="bw-txt">Samo hrv. slova (a-ž), bez razmaka ili brojeva.</div></div></div>';
    return;
  }
  
  // Multi-word support — analyze each word separately
  const words = word.split(/\\s+/).filter(w => w.length > 0);
  
  if(words.length > 1){
    // Multi-word — show each
    let allHtml = '<div style="margin-bottom:14px;font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center">📝 ANALIZA RAZINA: ' + words.length + ' riječi</div>';
    words.forEach((w, idx) => {
      const a = msAnalyzeWord(w);
      allHtml += renderMsResult(a, idx === 0);
      if(idx < words.length - 1){
        allHtml += '<div style="height:24px"></div>';
      }
    });
    out.innerHTML = allHtml;
  } else {
    const a = msAnalyzeWord(words[0]);
    out.innerHTML = renderMsResult(a, true);
  }
  
  // Save to history
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.scanner_hist')||'[]');
    // Only save valid words (no special chars)
    if(/^[a-zčćđšžA-ZČĆĐŠŽ\\s]+$/.test(word) && word.length < 50){
      hist.push({word, date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h21.scanner_hist', JSON.stringify(hist.slice(-20)));
    }
  } catch(e){}
}

function renderMsResult(a, showHeader){
  const word = a.word;
  
  // Build morpheme display
  let morphBuild = '';
  a.prefix.forEach(p => {
    morphBuild += \`<span style="display:inline-block;padding:6px 12px;background:rgba(74,144,217,.15);border:1.5px solid var(--blue);border-radius:var(--r1);color:var(--blue);font-weight:700;font-family:var(--mono);margin:2px">\${p.p}-</span>\`;
  });
  morphBuild += \`<span style="display:inline-block;padding:6px 12px;background:rgba(233,180,70,.15);border:1.5px solid var(--gold);border-radius:var(--r1);color:var(--gold);font-weight:700;font-family:var(--mono);margin:2px">\${a.root}</span>\`;
  a.suffix.forEach(sf => {
    morphBuild += \`<span style="display:inline-block;padding:6px 12px;background:rgba(176,107,33,.15);border:1.5px solid var(--bronze);border-radius:var(--r1);color:var(--bronze);font-weight:700;font-family:var(--mono);margin:2px">-\${sf.s}-</span>\`;
  });
  if(a.ending){
    morphBuild += \`<span style="display:inline-block;padding:6px 12px;background:rgba(224,82,82,.15);border:1.5px solid var(--red);border-radius:var(--r1);color:var(--red);font-weight:700;font-family:var(--mono);margin:2px">-\${a.ending}</span>\`;
  }
  
  // Classification summary  
  let classSummary = '';
  if(a.wordClass){
    classSummary = a.wordClass;
    if(a.categories.type) classSummary += \` · \${a.categories.type}\`;
    if(a.categories.declType) classSummary += \` · \${a.categories.declType}\`;
    if(a.categories.stupanj) classSummary += \` · \${a.categories.stupanj}\`;
    if(a.categories.form) classSummary += \` · \${a.categories.form}\`;
    if(a.categories.vid) classSummary += \` · \${a.categories.vid} vid\`;
    if(a.categories.padezAndBroj) classSummary += \` · \${a.categories.padezAndBroj}\`;
    if(a.categories.person) classSummary += \` · \${a.categories.person}\`;
    if(a.categories.number) classSummary += \` · \${a.categories.number}\`;
    if(a.categories.gender) classSummary += \` · \${a.categories.gender}\`;
  }
  
  // Confidence badge
  const confColors = {high: 'var(--green)', medium: 'var(--gold)', low: 'var(--red)'};
  const confLabels = {high: '🟢 VISOKA', medium: '🟡 SREDNJA', low: '🔴 NISKA'};
  const confColor = confColors[a.confidence] || 'var(--t3)';
  const confLabel = confLabels[a.confidence] || a.confidence;
  
  return \`
    <!-- HEADER -->
    <div style="padding:18px;background:linear-gradient(135deg,rgba(233,180,70,.08),transparent);border:1px solid rgba(233,180,70,.3);border-radius:var(--r2);margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
        <div>
          <div style="font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:2px">MORFEMSKA ANALIZA</div>
          <div style="font-family:var(--display);font-size:32px;font-weight:700;color:var(--gold);margin-top:4px">\${word}</div>
        </div>
        <div style="text-align:right">
          <div style="font-family:var(--mono);font-size:11px;color:var(--t2)">\${classSummary || '—'}</div>
          <div style="font-family:var(--mono);font-size:9px;color:\${confColor};margin-top:4px;letter-spacing:1px">SIGURNOST: \${confLabel}</div>
        </div>
      </div>
    </div>

    <!-- MORPHEMES -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">🧩 Morfemska struktura</div><div class="sec-line"></div></div>
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin:12px 0;text-align:center">
      <div style="display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px;margin-bottom:14px">\${morphBuild}</div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;font-family:var(--mono);font-size:10px">
        \${a.prefix.length > 0 ? '<span style="padding:3px 8px;background:rgba(74,144,217,.1);color:var(--blue);border-radius:12px">prefiks</span>' : ''}
        <span style="padding:3px 8px;background:rgba(233,180,70,.1);color:var(--gold);border-radius:12px">korijen</span>
        \${a.suffix.length > 0 ? '<span style="padding:3px 8px;background:rgba(176,107,33,.1);color:var(--bronze);border-radius:12px">sufiks</span>' : ''}
        \${a.ending ? '<span style="padding:3px 8px;background:rgba(224,82,82,.1);color:var(--red);border-radius:12px">nastavak</span>' : ''}
      </div>
    </div>

    <!-- CLASSIFICATION TABLE -->
    <div class="sec-hdr" style="margin-top:20px"><div class="sec-line"></div><div class="sec-badge">📋 Analiza</div><div class="sec-line"></div></div>
    <div class="table-wrap" style="overflow-x:auto;margin:12px 0">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px">
        <tbody>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3);width:40%">Vrsta riječi</td><td style="padding:10px;color:var(--t1);font-weight:700">\${a.wordClass || '—'}</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Osnovni oblik (lema)</td><td style="padding:10px;color:var(--gold);font-weight:700">\${a.lemma}</td></tr>
          \${a.categories.form ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Oblik glagola</td><td style="padding:10px;color:var(--t1)">\${a.categories.form}</td></tr>\` : ''}
          \${a.categories.vid ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Glagolski vid</td><td style="padding:10px;color:var(--t1)">\${a.categories.vid}</td></tr>\` : ''}
          \${a.categories.type ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Tip (podvrsta)</td><td style="padding:10px;color:var(--t1)">\${a.categories.type}</td></tr>\` : ''}
          \${a.categories.declType ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Deklinacijska vrsta</td><td style="padding:10px;color:var(--t1)">\${a.categories.declType}</td></tr>\` : ''}
          \${a.categories.padezAndBroj ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Padež / broj</td><td style="padding:10px;color:var(--t1);font-weight:700">\${a.categories.padezAndBroj}</td></tr>\` : ''}
          \${a.categories.person ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Lice / broj</td><td style="padding:10px;color:var(--t1)">\${a.categories.person}\${a.categories.number ? ' · ' + a.categories.number : ''}</td></tr>\` : ''}
          \${a.categories.gender ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Rod</td><td style="padding:10px;color:var(--t1)">\${a.categories.gender}</td></tr>\` : ''}
          \${a.categories.stupanj ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Stupanj</td><td style="padding:10px;color:var(--t1)">\${a.categories.stupanj}</td></tr>\` : ''}
          \${a.categories.value ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Vrijednost</td><td style="padding:10px;color:var(--t1)">\${a.categories.value}</td></tr>\` : ''}
          <tr><td style="padding:10px;color:var(--t3)">Korijen</td><td style="padding:10px;color:var(--t1);font-weight:700">\${a.root}</td></tr>
        </tbody>
      </table>
    </div>

    \${a.prefix.length > 0 || a.suffix.length > 0 ? \`
      <div class="sec-hdr" style="margin-top:20px"><div class="sec-line"></div><div class="sec-badge">🏗 Tvorbena analiza</div><div class="sec-line"></div></div>
      <div style="margin:12px 0">
        \${a.prefix.map(p => \`
          <div style="padding:12px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r1);margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;gap:10px;align-items:start">
              <div>
                <div style="font-family:var(--mono);font-size:10px;color:var(--blue);letter-spacing:1px;margin-bottom:4px">PREFIKS</div>
                <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:16px">\${p.p}-</div>
                <div style="font-size:12px;color:var(--t2);margin-top:4px">\${p.meaning}</div>
              </div>
            </div>
          </div>
        \`).join('')}
        \${a.suffix.map(sf => \`
          <div style="padding:12px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--bronze);border-radius:var(--r1);margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;gap:10px;align-items:start">
              <div>
                <div style="font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1px;margin-bottom:4px">SUFIKS</div>
                <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:16px">-\${sf.s}</div>
                <div style="font-size:12px;color:var(--t2);margin-top:4px">\${sf.meaning}</div>
              </div>
            </div>
          </div>
        \`).join('')}
      </div>
    \` : ''}

    \${a.note ? \`
      <div class="box-warn" style="margin:12px 0"><div class="bw-body"><div class="bw-ttl" style="color:var(--gold)">💡 Napomena</div><div class="bw-txt">\${a.note}</div></div></div>
    \` : ''}

    \${a.confidence === 'low' ? \`<div style="font-family:var(--mono);font-size:10px;color:var(--red);text-align:center;margin-top:8px">⚠ Niska sigurnost — Scanner koristi heuristiku, provjeri svojim znanjem</div>\` : ''}
  \`;
}

function msExample(word){
  const input = document.getElementById('ms-input');
  if(input){
    input.value = word;
    morfoAnalyze();
    input.scrollIntoView({behavior:'smooth', block:'center'});
  }
}



function msShowHistory(){
  const div = document.getElementById('ms-history');
  if(!div) return;
  if(div.style.display !== 'none' && div.innerHTML !== ''){
    div.style.display = 'none';
    return;
  }
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.scanner_hist')||'[]');
    if(hist.length === 0){
      div.innerHTML = '<span style="color:var(--t3)">Još nema analiziranih riječi.</span>';
    } else {
      div.innerHTML = '<div style="margin-bottom:8px;color:var(--t3);letter-spacing:1px">ZADNJIH ' + hist.length + ' (klikni za ponovnu analizu):</div>' +
        hist.slice().reverse().map(h => {
        const safeWord = String(h.word||'').replace(/['"\\\\<>&]/g, c => ({"'":'\\\\\\'',
'"':'&quot;','\\\\':'\\\\\\\\','<':'&lt;','>':'&gt;','&':'&amp;'}[c]||c));
        const displayWord = String(h.word||'').replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));
        return \`<button class="nb-btn" style="padding:4px 8px;font-size:11px;margin:2px" onclick="msExample('\${safeWord}')">\${displayWord}</button>\`;
      }).join('');
    }
    div.style.display = 'block';
  } catch(e){
    div.innerHTML = '<span style="color:var(--t3)">Greška u učitavanju.</span>';
    div.style.display = 'block';
  }
}

function msClear(){
  const input = document.getElementById('ms-input');
  const out = document.getElementById('ms-results');
  const hist = document.getElementById('ms-history');
  if(input) input.value = '';
  if(out) out.innerHTML = '';
  if(hist){ hist.style.display = 'none'; hist.innerHTML = ''; }
  input?.focus();
}

// === DECLINER UPGRADES: COPY RESULT FUNCTION ===
function declineCopyTable(){
  const tbl = document.querySelector('#decl-results table');
  if(!tbl) return;
  
  const rows = Array.from(tbl.querySelectorAll('tr'));
  let csv = rows.map(r => 
    Array.from(r.querySelectorAll('th, td'))
      .map(c => c.textContent.trim())
      .join('\\t')
  ).join('\\n');
  
  navigator.clipboard.writeText(csv).then(() => {
    const btn = document.getElementById('decl-copy-btn');
    if(btn){
      const orig = btn.textContent;
      btn.textContent = '✓ Kopirano!';
      btn.style.background = 'var(--green)';
      btn.style.color = '#0F0605';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.color = '';
      }, 1500);
    }
  }).catch(() => alert('Greška pri kopiranju.'));
}

// === SCANNER COPY FUNCTION ===
function msCopyResult(){
  const out = document.getElementById('ms-results');
  if(!out) return;
  const text = out.innerText.trim();
  if(!text) return;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('ms-copy-btn');
    if(btn){
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ Kopirano';
      setTimeout(() => btn.innerHTML = orig, 1500);
    }
  });
}



function declHistory(){
  const div = document.getElementById('decl-history');
  if(!div) return;
  if(div.style.display !== 'none' && div.innerHTML !== ''){
    div.style.display = 'none';
    return;
  }
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.decl_hist')||'[]');
    if(hist.length === 0){
      div.innerHTML = '<span style="color:var(--t3)">Još nema sklanjanih riječi.</span>';
    } else {
      div.innerHTML = '<div style="margin-bottom:8px;color:var(--t3);letter-spacing:1px">ZADNJIH ' + hist.length + ':</div>' +
        hist.slice().reverse().map(h => {
        const safeWord = String(h.word||'').replace(/['"\\\\<>&]/g, c => ({"'":'\\\\\\'',
'"':'&quot;','\\\\':'\\\\\\\\','<':'&lt;','>':'&gt;','&':'&amp;'}[c]||c));
        const displayWord = String(h.word||'').replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));
        return \`<button class="nb-btn" style="padding:4px 8px;font-size:11px;margin:2px" onclick="declineExample('\${safeWord}')">\${displayWord}</button>\`;
      }).join('');
    }
    div.style.display = 'block';
  } catch(e){}
}

function declClear(){
  const input = document.getElementById('decl-input');
  const out = document.getElementById('decl-results');
  const hist = document.getElementById('decl-history');
  if(input) input.value = '';
  if(out) out.innerHTML = '';
  if(hist){ hist.style.display = 'none'; hist.innerHTML = ''; }
  input?.focus();
}



// ═══════════════════════════════════
// RANDOM WORD — surprise me feature
// ═══════════════════════════════════
const RANDOM_SCANNER_WORDS = [
  'nepredvidljivosti','najmoćniji','prijateljica','knjižarstvo','čitateljica',
  'nepismenima','učiteljica','upoznavati','pročitanima','razgovaraju',
  'postojanost','opisivanje','ozdravlje','razumijevanje','najljepše',
  'protunapadom','međurazinski','nadmašiti','potpomognuti','predviđanju',
  'iskreno','iako','protiv','vrlo','preko','čovjek','dijete','kost',
  'vrijeme','volim','imam','idu','jedan','peti','dvoje','svoj','ovaj','netko'
];

const RANDOM_DECLINER_WORDS = [
  'stol','knjiga','prijatelj','učenica','grad','more','selo','noć','riječ',
  'pjesma','sestra','učitelj','dječak','majka','brat','sin','kuća','ime',
  'jaje','dan','put','pas','čovjek','dijete','oko','uho','noga','ruka',
  'kost','ljubav','stvar','tata','sokol','zec','stvarnost','radost'
];

function msRandom(){
  const w = RANDOM_SCANNER_WORDS[Math.floor(Math.random() * RANDOM_SCANNER_WORDS.length)];
  msExample(w);
}

function declRandom(){
  const w = RANDOM_DECLINER_WORDS[Math.floor(Math.random() * RANDOM_DECLINER_WORDS.length)];
  declineExample(w);
}



// ═══════════════════════════════════
// TAB 1 · KLIK-IDENTIFIKACIJA REČENIČNIH ČLANOVA
// ═══════════════════════════════════

const RC_OPTIONS = [
  {key:'subjekt', label:'Subjekt', color:'var(--blue)', short:'S'},
  {key:'predikat', label:'Predikat', color:'var(--red)', short:'P'},
  {key:'objekt', label:'Objekt', color:'var(--green)', short:'O'},
  {key:'atribut', label:'Atribut', color:'var(--bronze)', short:'A'},
  {key:'apozicija', label:'Apozicija', color:'#9b59b6', short:'Ap'},
  {key:'priložna oznaka', label:'Priložna oznaka', color:'#e67e22', short:'P.O.'},
];

const RC_SENTENCES = [
  {
    tokens:['Marija','čita','zanimljivu','knjigu','.'],
    targetIdx:0,
    correct:'subjekt',
    explanation:'„Marija" je u nominativu (1. padež) i odgovara na pitanje „tko čita?". To je subjekt — nositelj radnje.',
    diff:'easy'
  },
  {
    tokens:['Ivan','čita','zanimljivu','knjigu','.'],
    targetIdx:1,
    correct:'predikat',
    explanation:'„Čita" je glagol u 3. licu jednine prezenta. Odgovara na „što radi Ivan?" → predikat (glagolski).',
    diff:'easy'
  },
  {
    tokens:['Marija','čita','zanimljivu','knjigu','.'],
    targetIdx:3,
    correct:'objekt',
    explanation:'„Knjigu" je u akuzativu (A) — odgovara na „što čita?". To je IZRAVNI objekt (cilj radnje).',
    diff:'easy'
  },
  {
    tokens:['Marija','čita','zanimljivu','knjigu','.'],
    targetIdx:2,
    correct:'atribut',
    explanation:'„Zanimljivu" je pridjev koji opisuje imenicu „knjigu". Pitanje: „kakvu knjigu?". Slaže se s imenicom u A jd. ž. → sročni atribut.',
    diff:'easy'
  },
  {
    tokens:['Učim','u','knjižnici','.'],
    targetIdx:2,
    correct:'priložna oznaka',
    explanation:'„U knjižnici" (prijedlog + L) — pitanje „gdje učim?". To je priložna oznaka MJESTA (M iz MVNU).',
    diff:'easy'
  },
  {
    tokens:['Pomažem','svom','prijatelju','.'],
    targetIdx:2,
    correct:'objekt',
    explanation:'„Prijatelju" je u dativu (D). Glagol „pomagati" zahtijeva DATIV (ne A!). To je NEIZRAVNI objekt.',
    diff:'medium'
  },
  {
    tokens:['Marija',',','moja','sestra',',','čita','knjigu','.'],
    targetIdx:3,
    correct:'apozicija',
    explanation:'„Moja sestra" je imenica (+ atribut „moja") koja bliže objašnjava imenicu „Marija". Odvojena je zarezima → apozicija.',
    diff:'medium'
  },
  {
    tokens:['Sjećam','se','prošlog','ljeta','.'],
    targetIdx:3,
    correct:'objekt',
    explanation:'„Ljeta" je u genitivu (G). Glagol „sjećati se" zahtijeva GENITIV. To je NEIZRAVNI objekt. Pitanje: „čega se sjećam?".',
    diff:'medium'
  },
  {
    tokens:['Trči','jako','brzo','.'],
    targetIdx:2,
    correct:'priložna oznaka',
    explanation:'„Brzo" je prilog koji odgovara na pitanje „kako trči?". To je priložna oznaka NAČINA (N iz MVNU).',
    diff:'easy'
  },
  {
    tokens:['Tri','studenta','su','položila','ispit','.'],
    targetIdx:1,
    correct:'subjekt',
    explanation:'„(Tri) studenta" je gramatički subjekt — odgovara na pitanje „tko je položio?". Iako je u G jd. (paukal nakon broja 3), funkcija je subjekt.',
    diff:'hard'
  },
  {
    tokens:['Plače','od','sreće','.'],
    targetIdx:2,
    correct:'priložna oznaka',
    explanation:'„Od sreće" (prijedlog + G) odgovara na pitanje „zašto plače?". To je priložna oznaka UZROKA (U iz MVNU).',
    diff:'medium'
  },
  {
    tokens:['Zagreb',',','glavni','grad','Hrvatske',',','ima','milijun','stanovnika','.'],
    targetIdx:3,
    correct:'apozicija',
    explanation:'„Glavni grad Hrvatske" je imenska sintagma koja objašnjava „Zagreb". Odvojena je zarezima i u istom je padežu (N) → apozicija.',
    diff:'medium'
  },
  {
    tokens:['Pročitao','je','knjigu','svog','brata','.'],
    targetIdx:4,
    correct:'atribut',
    explanation:'„Brata" je imenica u genitivu (G) koja označava pripadnost imenici „knjigu" — pitanje „čiju knjigu?". To je NESROČNI atribut (G pripadnosti).',
    diff:'hard'
  },
  {
    tokens:['Sutra','ćemo','raditi','do','kasna','.'],
    targetIdx:0,
    correct:'priložna oznaka',
    explanation:'„Sutra" je prilog koji odgovara na „kada ćemo raditi?". To je priložna oznaka VREMENA (V iz MVNU).',
    diff:'easy'
  },
  {
    tokens:['Učenici','su','dobili','nagrade','za','trud','.'],
    targetIdx:0,
    correct:'subjekt',
    explanation:'„Učenici" su u nominativu (N mn.) i izvršavaju radnju. Pitanje: „tko je dobio?". → subjekt.',
    diff:'easy'
  }
];

let rcIdx = 0;
let rcScore = 0;
let rcAnswers = [];

function rcRender(){
  const out = document.getElementById('rc-exercise');
  if(!out) return;
  
  if(rcIdx >= RC_SENTENCES.length){
    return rcResult();
  }
  
  const item = RC_SENTENCES[rcIdx];
  const diffColor = {easy:'var(--green)', medium:'var(--gold)', hard:'var(--red)'}[item.diff] || 'var(--t3)';
  const diffLabel = {easy:'LAKO', medium:'SREDNJE', hard:'TEŠKO'}[item.diff] || '';
  
  // Build sentence with highlighted target
  const sentenceHtml = item.tokens.map((tok, i) => {
    if(i === item.targetIdx){
      return \`<span class="rc-target">\${tok}</span>\`;
    }
    if(tok === ',' || tok === '.') return \`<span class="rc-punct">\${tok}</span>\`;
    return \`<span class="rc-word">\${tok}</span>\`;
  }).join(' ');
  
  out.innerHTML = \`
    <div class="rc-card">
      <div class="rc-meta">
        <span class="rc-progress">Rečenica <strong>\${rcIdx+1}</strong> / \${RC_SENTENCES.length}</span>
        <span class="rc-diff" style="color:\${diffColor};border-color:\${diffColor}">\${diffLabel}</span>
        <span class="rc-score">Točno: <strong>\${rcScore}</strong> / \${rcIdx}</span>
      </div>
      
      <div class="rc-question">
        Identificiraj rečenični član za <strong style="color:var(--gold)">označenu riječ</strong>:
      </div>
      
      <div class="rc-sentence">\${sentenceHtml}</div>
      
      <div class="rc-options">
        \${RC_OPTIONS.map(o => \`
          <button class="rc-opt" onclick="rcAnswer('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
            <span class="rc-opt-short">\${o.short}</span>
            <span class="rc-opt-label">\${o.label}</span>
          </button>
        \`).join('')}
      </div>
      
      <div id="rc-feedback" class="rc-feedback"></div>
    </div>
  \`;
}

function rcAnswer(key, btn){
  const item = RC_SENTENCES[rcIdx];
  const isCorrect = key === item.correct;
  
  // Disable all option buttons
  document.querySelectorAll('.rc-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.correct){
      b.classList.add('rc-correct');
    } else if(b === btn){
      b.classList.add('rc-wrong');
    }
  });
  
  if(isCorrect){
    rcScore++;
    if(typeof addXP === 'function') addXP(5, 'Točan odgovor');
  }
  
  rcAnswers.push({idx:rcIdx, correct:isCorrect, given:key});
  
  const fb = document.getElementById('rc-feedback');
  if(fb){
    fb.style.display = 'block';
    fb.className = 'rc-feedback ' + (isCorrect ? 'rc-fb-correct' : 'rc-fb-wrong');
    fb.innerHTML = \`
      <div class="rc-fb-head">
        \${isCorrect ? '✅ <strong>Točno!</strong>' : \`❌ <strong>Pogrešno.</strong> Točan odgovor: <strong style="color:var(--gold)">\${RC_OPTIONS.find(o=>o.key===item.correct).label}</strong>\`}
      </div>
      <div class="rc-fb-exp">\${item.explanation}</div>
      <div class="rc-fb-actions">
        <button class="nb-btn primary" onclick="rcNext()">\${rcIdx+1 < RC_SENTENCES.length ? 'Sljedeća rečenica →' : 'Pogledaj rezultat →'}</button>
      </div>
    \`;
    fb.scrollIntoView({behavior:'smooth', block:'nearest'});
  }
}

function rcNext(){
  rcIdx++;
  rcRender();
  // Scroll to top of exercise
  setTimeout(() => {
    const ex = document.getElementById('rc-exercise');
    if(ex) ex.scrollIntoView({behavior:'smooth', block:'start'});
  }, 50);
}

function rcReset(){
  rcIdx = 0;
  rcScore = 0;
  rcAnswers = [];
  document.getElementById('rc-result').style.display = 'none';
  rcRender();
}

function rcResult(){
  const out = document.getElementById('rc-exercise');
  const res = document.getElementById('rc-result');
  if(!out || !res) return;
  
  const total = RC_SENTENCES.length;
  const pct = Math.round(rcScore / total * 100);
  
  let msg = '', emoji = '', color = '';
  if(pct >= 90){ msg = 'Izvrsno! Spreman/na si za maturu iz rečeničnih članova.'; emoji = '🏆'; color = 'var(--gold)'; }
  else if(pct >= 70){ msg = 'Dobro! Pogledaj objašnjenja za pogreške i ponovi.'; emoji = '🎯'; color = 'var(--green)'; }
  else if(pct >= 50){ msg = 'OK, ali treba još rada. Vrati se na scene cards iznad i ponovi vježbu.'; emoji = '📚'; color = 'var(--bronze)'; }
  else { msg = 'Treba više učenja. Pažljivo prouči svih 6 članova (SPO-AAP), pa ponovi.'; emoji = '💪'; color = 'var(--red)'; }
  
  // Achievement check
  if(pct === 100 && typeof addXP === 'function') addXP(50, '15/15 — perfektno!');
  if(pct >= 80 && typeof recordTabVisit === 'function') recordTabVisit(1);
  
  // Save history
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.rc_hist') || '[]');
    hist.push({score:rcScore, total, pct, date: new Date().toISOString()});
    localStorage.setItem('mt.hrv.h21.rc_hist', JSON.stringify(hist.slice(-10)));
  } catch(e){}
  
  // Show wrong answers detail
  const wrongAnswers = rcAnswers.filter(a => !a.correct);
  const wrongHtml = wrongAnswers.length > 0 ? \`
    <details class="rc-detail-wrong" style="margin-top:14px">
      <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--red);font-size:13px">
        ❌ Pogledaj svoje pogreške (\${wrongAnswers.length}) ▾
      </summary>
      <div style="margin-top:10px;display:grid;gap:8px">
        \${wrongAnswers.map(a => {
          const item = RC_SENTENCES[a.idx];
          const sent = item.tokens.map((t,i) => i===item.targetIdx ? \`<strong style="color:var(--gold)">\${t}</strong>\` : t).join(' ');
          return \`
            <div style="padding:10px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1);font-size:12.5px">
              <div style="font-style:italic;color:var(--t1);margin-bottom:4px">\${sent}</div>
              <div style="color:var(--t3);font-size:11px">Tvoj odgovor: <strong style="color:var(--red)">\${a.given}</strong> · Točno: <strong style="color:var(--green)">\${item.correct}</strong></div>
              <div style="color:var(--t2);font-size:12px;margin-top:4px;line-height:1.5">\${item.explanation}</div>
            </div>
          \`;
        }).join('')}
      </div>
    </details>
  \` : '';
  
  out.innerHTML = '';
  res.style.display = 'block';
  res.innerHTML = \`
    <div class="rc-result-card" style="border-left:3px solid \${color}">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);margin-bottom:4px">
        Rezultat: \${rcScore} / \${total} <span style="color:\${color}">(\${pct}%)</span>
      </div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:18px">\${msg}</div>
      
      <div class="rc-result-bar">
        <div class="rc-result-fill" style="width:\${pct}%;background:\${color}"></div>
      </div>
      
      \${wrongHtml}
      
      <div style="margin-top:18px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="nb-btn primary" onclick="rcReset()">🔁 Ponovi vježbu</button>
        <button class="nb-btn" onclick="sw(2)">📐 Vrste rečenica →</button>
      </div>
    </div>
  \`;
}

// Auto-init when Tab 1 visible / on load
function rcInit(){
  if(document.getElementById('rc-exercise')){
    rcRender();
  }
}

// Init on DOMContentLoaded + fallback
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(rcInit, 100));
} else {
  setTimeout(rcInit, 100);
}



// ═══════════════════════════════════
// TAB 2 · KLASIFIKACIJA REČENICA
// ═══════════════════════════════════

const VR_OPT_SASTAV = [
  {key:'prosta', label:'Prosta', short:'Pr', color:'var(--green)'},
  {key:'nezavisna', label:'Složena nezav.', short:'Nz', color:'var(--gold)'},
  {key:'zavisna', label:'Složena zav.', short:'Zv', color:'var(--bronze)'},
];
const VR_OPT_SVRHA = [
  {key:'izjavna', label:'Izjavna', short:'.', color:'var(--green)'},
  {key:'upitna', label:'Upitna', short:'?', color:'var(--blue)'},
  {key:'usklicna', label:'Usklična', short:'!', color:'var(--red)'},
  {key:'zapovjedna', label:'Zapovjedna', short:'⚡', color:'var(--bronze)'},
  {key:'zelja', label:'Želja', short:'🌟', color:'#9b59b6'},
];

const VR_SENTENCES = [
  // EASY (5)
  {text:'Marija čita zanimljivu knjigu.', sastav:'prosta', svrha:'izjavna', exp_s:'1 predikat (čita) → prosta.', exp_v:'Točka na kraju + iznosi obavijest → izjavna.'},
  {text:'Hoćeš li doći sutra?', sastav:'prosta', svrha:'upitna', exp_s:'1 predikat (hoćeš), inf. „doći" NE računa → prosta.', exp_v:'Čestica „li" + upitnik → upitna potpuna.'},
  {text:'Kako je lijepo!', sastav:'prosta', svrha:'usklicna', exp_s:'1 predikat (je) → prosta.', exp_v:'Uskličnik + jaka emocija (oduševljenje) → usklična.'},
  {text:'Zatvori vrata!', sastav:'prosta', svrha:'zapovjedna', exp_s:'1 predikat (zatvori, imperativ) → prosta.', exp_v:'Glagol u imperativu + naredba → zapovjedna.'},
  {text:'Sretan put!', sastav:'prosta', svrha:'zelja', exp_s:'Bezglagolska, ali se podrazumijeva „neka bude" → prosta.', exp_v:'Izriče želju → optativna.'},
  
  // MEDIUM (10)
  {text:'Učim, a moj brat spava.', sastav:'nezavisna', svrha:'izjavna', exp_s:'2 predikata (učim, spava) + nezav. veznik „a" → složena nezavisna suprotna.', exp_v:'Točka + obavijest → izjavna.'},
  {text:'Marija piše domaću zadaću jer mora učiti za maturu.', sastav:'zavisna', svrha:'izjavna', exp_s:'2 predikata (piše, mora) + zav. veznik „jer" → složena zavisna uzročna.', exp_v:'Točka + obavijest → izjavna.'},
  {text:'Tko je zadnji izašao?', sastav:'prosta', svrha:'upitna', exp_s:'1 predikat (je izašao) → prosta.', exp_v:'Upitna riječ „tko" + upitnik → upitna nepotpuna.'},
  {text:'Idi i kupi mi mlijeko!', sastav:'nezavisna', svrha:'zapovjedna', exp_s:'2 predikata (idi, kupi) + veznik „i" → složena nezavisna sastavna.', exp_v:'Imperativ + uskličnik → zapovjedna.'},
  {text:'Ne vidim ga nigdje.', sastav:'prosta', svrha:'izjavna', exp_s:'1 predikat (vidim) → prosta. Niječna (ne, nigdje), ali to je značenje.', exp_v:'Točka + obavijest → izjavna.'},
  {text:'Knjiga koju čitam je odlična.', sastav:'zavisna', svrha:'izjavna', exp_s:'2 predikata (čitam, je) + zav. zamjenica „koju" → složena zavisna atributna.', exp_v:'Točka + obavijest → izjavna.'},
  {text:'Hoću čokoladu!', sastav:'prosta', svrha:'usklicna', exp_s:'1 predikat (hoću) → prosta.', exp_v:'Uskličnik + zahtjev s emocijom → usklična.'},
  {text:'Kad budeš išao u trgovinu, kupi i kruh.', sastav:'zavisna', svrha:'zapovjedna', exp_s:'2 predikata (budeš išao, kupi) + zav. veznik „kad" → složena zavisna vremenska.', exp_v:'Glavna je u imperativu („kupi") → zapovjedna.'},
  {text:'Ili ćeš učiti ili nećeš položiti.', sastav:'nezavisna', svrha:'izjavna', exp_s:'2 predikata (ćeš učiti, nećeš položiti) + nezav. veznik „ili" → složena nezavisna rastavna.', exp_v:'Točka + tvrdnja → izjavna.'},
  {text:'Da je samo nedjelja!', sastav:'prosta', svrha:'zelja', exp_s:'1 predikat (je) → prosta.', exp_v:'„Da" + uskličnik → izriče želju (optativna).'},
  
  // HARD (5)
  {text:'Iako sam umorna, idem trčati.', sastav:'zavisna', svrha:'izjavna', exp_s:'2 predikata (sam, idem) + zav. veznik „iako" → složena zavisna dopusna.', exp_v:'Točka + obavijest → izjavna.'},
  {text:'Misliš li da će sutra padati kiša?', sastav:'zavisna', svrha:'upitna', exp_s:'2 predikata (misliš, će padati) + zav. veznik „da" → složena zavisna objektna. Uz to „li".', exp_v:'„Li" + upitnik → upitna potpuna.'},
  {text:'Učim, a vrijeme prolazi, i vani je već mrak.', sastav:'nezavisna', svrha:'izjavna', exp_s:'3 predikata (učim, prolazi, je) + nezav. veznici „a" i „i" → složena nezavisna (suprotna + sastavna).', exp_v:'Točka + obavijest → izjavna.'},
  {text:'Reci mi gdje si bio.', sastav:'zavisna', svrha:'zapovjedna', exp_s:'2 predikata (reci, si bio) + zav. zamj. „gdje" → složena zavisna objektna.', exp_v:'Glavna „reci" je u imperativu → zapovjedna.'},
  {text:'Zar je moguće da to nije istina!?', sastav:'zavisna', svrha:'usklicna', exp_s:'2 predikata (je, nije) + zav. veznik „da" → složena zavisna objektna.', exp_v:'Retoričko „zar" + uskličnik → usklična (ne traži pravi odgovor).'},
];

let vrIdx = 0;
let vrScore = 0;
let vrAnswers = [];
let vrSastavGiven = null;
let vrSvrhaGiven = null;

function vrRender(){
  const out = document.getElementById('vr-exercise');
  if(!out) return;
  
  if(vrIdx >= VR_SENTENCES.length){
    return vrResult();
  }
  
  const item = VR_SENTENCES[vrIdx];
  vrSastavGiven = null;
  vrSvrhaGiven = null;
  
  out.innerHTML = \`
    <div class="vr-card">
      <div class="vr-meta">
        <span class="vr-progress">Rečenica <strong>\${vrIdx+1}</strong> / \${VR_SENTENCES.length}</span>
        <span class="vr-score">Točno: <strong>\${vrScore}</strong> / \${vrIdx*2}</span>
      </div>
      
      <div class="vr-sentence">\${item.text}</div>
      
      <!-- Q1: Sastav -->
      <div class="vr-q-block">
        <div class="vr-q-label">
          <span class="vr-q-num">1</span>
          <span>Po SASTAVU rečenica je:</span>
        </div>
        <div class="vr-options vr-options-3">
          \${VR_OPT_SASTAV.map(o => \`
            <button class="vr-opt" onclick="vrAnswerSastav('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
              <span class="vr-opt-short">\${o.short}</span>
              <span class="vr-opt-label">\${o.label}</span>
            </button>
          \`).join('')}
        </div>
        <div id="vr-fb-sastav" class="vr-fb"></div>
      </div>
      
      <!-- Q2: Svrha -->
      <div class="vr-q-block">
        <div class="vr-q-label">
          <span class="vr-q-num">2</span>
          <span>Po PRIOPĆAJNOJ SVRSI rečenica je:</span>
        </div>
        <div class="vr-options vr-options-5">
          \${VR_OPT_SVRHA.map(o => \`
            <button class="vr-opt" onclick="vrAnswerSvrha('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
              <span class="vr-opt-short">\${o.short}</span>
              <span class="vr-opt-label">\${o.label}</span>
            </button>
          \`).join('')}
        </div>
        <div id="vr-fb-svrha" class="vr-fb"></div>
      </div>
      
      <div id="vr-next-wrap" style="display:none;text-align:center;margin-top:14px">
        <button class="nb-btn primary" onclick="vrNext()">\${vrIdx+1 < VR_SENTENCES.length ? 'Sljedeća rečenica →' : 'Pogledaj rezultat →'}</button>
      </div>
    </div>
  \`;
}

function vrAnswerSastav(key, btn){
  if(vrSastavGiven) return;
  vrSastavGiven = key;
  
  const item = VR_SENTENCES[vrIdx];
  const isCorrect = key === item.sastav;
  
  document.querySelectorAll('.vr-options-3 .vr-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.sastav) b.classList.add('vr-correct');
    else if(b === btn) b.classList.add('vr-wrong');
  });
  
  if(isCorrect){
    vrScore++;
    if(typeof addXP === 'function') addXP(3);
  }
  
  const fb = document.getElementById('vr-fb-sastav');
  fb.style.display = 'block';
  fb.className = 'vr-fb ' + (isCorrect ? 'vr-fb-correct' : 'vr-fb-wrong');
  fb.innerHTML = \`\${isCorrect?'✅':'❌'} <strong>\${isCorrect?'Točno!':'Pogrešno.'}</strong> \${item.exp_s}\`;
  
  vrCheckBoth();
}

function vrAnswerSvrha(key, btn){
  if(vrSvrhaGiven) return;
  vrSvrhaGiven = key;
  
  const item = VR_SENTENCES[vrIdx];
  const isCorrect = key === item.svrha;
  
  document.querySelectorAll('.vr-options-5 .vr-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.svrha) b.classList.add('vr-correct');
    else if(b === btn) b.classList.add('vr-wrong');
  });
  
  if(isCorrect){
    vrScore++;
    if(typeof addXP === 'function') addXP(3);
  }
  
  const fb = document.getElementById('vr-fb-svrha');
  fb.style.display = 'block';
  fb.className = 'vr-fb ' + (isCorrect ? 'vr-fb-correct' : 'vr-fb-wrong');
  fb.innerHTML = \`\${isCorrect?'✅':'❌'} <strong>\${isCorrect?'Točno!':'Pogrešno.'}</strong> \${item.exp_v}\`;
  
  vrCheckBoth();
}

function vrCheckBoth(){
  if(vrSastavGiven && vrSvrhaGiven){
    vrAnswers.push({
      idx: vrIdx,
      sastav: {given: vrSastavGiven, correct: vrSastavGiven === VR_SENTENCES[vrIdx].sastav},
      svrha: {given: vrSvrhaGiven, correct: vrSvrhaGiven === VR_SENTENCES[vrIdx].svrha}
    });
    document.getElementById('vr-next-wrap').style.display = 'block';
  }
}

function vrNext(){
  vrIdx++;
  vrRender();
  setTimeout(() => {
    const ex = document.getElementById('vr-exercise');
    if(ex) ex.scrollIntoView({behavior:'smooth', block:'start'});
  }, 50);
}

function vrReset(){
  vrIdx = 0;
  vrScore = 0;
  vrAnswers = [];
  document.getElementById('vr-result').style.display = 'none';
  vrRender();
}

function vrResult(){
  const out = document.getElementById('vr-exercise');
  const res = document.getElementById('vr-result');
  if(!out || !res) return;
  
  const total = VR_SENTENCES.length * 2;
  const pct = Math.round(vrScore / total * 100);
  
  let msg = '', emoji = '', color = '';
  if(pct >= 90){ msg = 'Izvrsno! Klasifikacija ti je u malom prstu.'; emoji = '🏆'; color = 'var(--gold)'; }
  else if(pct >= 70){ msg = 'Dobro! Pogledaj objašnjenja za pogreške i ponovi.'; emoji = '🎯'; color = 'var(--green)'; }
  else if(pct >= 50){ msg = 'OK, treba još rada. Vrati se na decision tree iznad.'; emoji = '📚'; color = 'var(--bronze)'; }
  else { msg = 'Treba više učenja. Pažljivo prouči 3 kriterija (sastav · svrha · značenje).'; emoji = '💪'; color = 'var(--red)'; }
  
  if(pct === 100 && typeof addXP === 'function') addXP(75, '40/40 — perfektno!');
  if(pct >= 80 && typeof recordTabVisit === 'function') recordTabVisit(2);
  
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.vr_hist') || '[]');
    hist.push({score:vrScore, total, pct, date: new Date().toISOString()});
    localStorage.setItem('mt.hrv.h21.vr_hist', JSON.stringify(hist.slice(-10)));
  } catch(e){}
  
  // Wrong answers detail
  const wrongAnswers = vrAnswers.filter(a => !a.sastav.correct || !a.svrha.correct);
  const wrongHtml = wrongAnswers.length > 0 ? \`
    <details class="rc-detail-wrong" style="margin-top:14px;text-align:left">
      <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--red);font-size:13px">
        ❌ Pogledaj svoje pogreške (\${wrongAnswers.length}) ▾
      </summary>
      <div style="margin-top:10px;display:grid;gap:8px">
        \${wrongAnswers.map(a => {
          const item = VR_SENTENCES[a.idx];
          let errors = [];
          if(!a.sastav.correct) errors.push(\`<div>• Sastav — tvoj: <strong style="color:var(--red)">\${a.sastav.given}</strong>, točno: <strong style="color:var(--green)">\${item.sastav}</strong>. \${item.exp_s}</div>\`);
          if(!a.svrha.correct) errors.push(\`<div>• Svrha — tvoja: <strong style="color:var(--red)">\${a.svrha.given}</strong>, točno: <strong style="color:var(--green)">\${item.svrha}</strong>. \${item.exp_v}</div>\`);
          return \`
            <div style="padding:10px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1);font-size:12.5px">
              <div style="font-style:italic;color:var(--t1);margin-bottom:6px">"\${item.text}"</div>
              <div style="color:var(--t2);font-size:12px;line-height:1.6">\${errors.join('')}</div>
            </div>
          \`;
        }).join('')}
      </div>
    </details>
  \` : '';
  
  out.innerHTML = '';
  res.style.display = 'block';
  res.innerHTML = \`
    <div class="rc-result-card" style="border-left:3px solid \${color}">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);margin-bottom:4px">
        Rezultat: \${vrScore} / \${total} <span style="color:\${color}">(\${pct}%)</span>
      </div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:18px">\${msg}</div>
      
      <div class="rc-result-bar">
        <div class="rc-result-fill" style="width:\${pct}%;background:\${color}"></div>
      </div>
      
      \${wrongHtml}
      
      <div style="margin-top:18px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="nb-btn primary" onclick="vrReset()">🔁 Ponovi vježbu</button>
        <button class="nb-btn" onclick="sw(3)">🔗 Složene rečenice →</button>
      </div>
    </div>
  \`;
}

function vrInit(){
  if(document.getElementById('vr-exercise')){
    vrRender();
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(vrInit, 100));
} else {
  setTimeout(vrInit, 150);
}



// ═══════════════════════════════════
// TAB 3 · KLASIFIKACIJA SLOŽENIH REČENICA
// ═══════════════════════════════════

// Step 1: nezavisno vs zavisno (3 options including "prosta" trap)
const SS_OPT_TIP = [
  {key:'prosta', label:'Prosta', short:'Pr', color:'var(--t3)'},
  {key:'nezavisna', label:'Nezavisna', short:'Nz', color:'var(--gold)'},
  {key:'zavisna', label:'Zavisna', short:'Zv', color:'var(--bronze)'},
];

// Step 2a: nezavisno vrsta (6)
const SS_OPT_NZ = [
  {key:'sastavna', label:'Sastavna', color:'var(--green)'},
  {key:'rastavna', label:'Rastavna', color:'var(--blue)'},
  {key:'suprotna', label:'Suprotna', color:'var(--red)'},
  {key:'zakljucna', label:'Zaključna', color:'var(--bronze)'},
  {key:'izuzetna', label:'Izuzetna', color:'#9b59b6'},
  {key:'objasnidbena', label:'Objasnidbena', color:'#e67e22'},
];

// Step 2b: zavisno vrsta (12)
const SS_OPT_ZV = [
  {key:'subjektna', label:'Subjektna', color:'var(--blue)', g:'imen'},
  {key:'predikatna', label:'Predikatna', color:'var(--red)', g:'imen'},
  {key:'objektna', label:'Objektna', color:'var(--green)', g:'imen'},
  {key:'atributna', label:'Atributna', color:'var(--bronze)', g:'imen'},
  {key:'mjesna', label:'Mjesna', color:'#e67e22', g:'pril'},
  {key:'vremenska', label:'Vremenska', color:'#e67e22', g:'pril'},
  {key:'nacinska', label:'Načinska', color:'#e67e22', g:'pril'},
  {key:'uzrocna', label:'Uzročna', color:'#e67e22', g:'pril'},
  {key:'posljedicna', label:'Posljedična', color:'#e67e22', g:'pril'},
  {key:'namjerna', label:'Namjerna', color:'#e67e22', g:'pril'},
  {key:'pogodbena', label:'Pogodbena', color:'#e67e22', g:'pril'},
  {key:'dopusna', label:'Dopusna', color:'#e67e22', g:'pril'},
];

const SS_SENTENCES = [
  // === EASY (8) — basic recognition ===
  {text:'Učim, ali sam umoran.', tip:'nezavisna', vrsta:'suprotna', exp_t:'2 predikata (učim, sam) + nezav. veznik „ali" → nezavisna.', exp_v:'„Ali" iznosi suprotnost → suprotna.'},
  {text:'Marija piše i Ivan čita.', tip:'nezavisna', vrsta:'sastavna', exp_t:'2 predikata + nezav. veznik „i" → nezavisna.', exp_v:'„I" zbraja/dodaje → sastavna.'},
  {text:'Učim, jer želim položiti.', tip:'zavisna', vrsta:'uzrocna', exp_t:'2 predikata + zav. veznik „jer" → zavisna.', exp_v:'„Jer" iznosi uzrok („zašto učim?") → uzročna.'},
  {text:'Idem ili ostajem.', tip:'nezavisna', vrsta:'rastavna', exp_t:'2 predikata + nezav. veznik „ili" → nezavisna.', exp_v:'„Ili" iznosi izbor → rastavna.'},
  {text:'Pada kiša, zato ne idem van.', tip:'nezavisna', vrsta:'zakljucna', exp_t:'2 predikata + nezav. veznik „zato" → nezavisna.', exp_v:'„Zato" iznosi zaključak/posljedicu → zaključna.'},
  {text:'Vjerujem da si u pravu.', tip:'zavisna', vrsta:'objektna', exp_t:'2 predikata + zav. veznik „da" → zavisna.', exp_v:'Pitanje: vjerujem ŠTO? → objektna („da" zamjenjuje objekt).'},
  {text:'Knjiga koju čitam je odlična.', tip:'zavisna', vrsta:'atributna', exp_t:'2 predikata + zav. zamj. „koju" → zavisna.', exp_v:'Opisuje imenicu „knjiga" — koja knjiga? → atributna.'},
  {text:'Ako budeš učio, položit ćeš.', tip:'zavisna', vrsta:'pogodbena', exp_t:'2 predikata + zav. veznik „ako" → zavisna.', exp_v:'„Ako" iznosi uvjet → pogodbena.'},
  
  // === MEDIUM (10) — discrimination needed ===
  {text:'Iako sam umorna, idem trčati.', tip:'zavisna', vrsta:'dopusna', exp_t:'2 predikata + zav. veznik „iako" → zavisna.', exp_v:'„Iako" iznosi dopust („usprkos") → dopusna.'},
  {text:'Dođi kad budeš mogao.', tip:'zavisna', vrsta:'vremenska', exp_t:'2 predikata + zav. veznik „kad" → zavisna.', exp_v:'„Kad" iznosi vrijeme („kada dođi?") → vremenska.'},
  {text:'Učim da položim maturu.', tip:'zavisna', vrsta:'namjerna', exp_t:'2 predikata + zav. veznik „da" → zavisna.', exp_v:'Pitanje: zašto učim? — radi cilja/namjere → namjerna.'},
  {text:'Toliko sam umoran da spavam stojeći.', tip:'zavisna', vrsta:'posljedicna', exp_t:'2 predikata + zav. veznik „da" uz „toliko" → zavisna.', exp_v:'„Da" uz „toliko/tako" iznosi posljedicu → posljedična.'},
  {text:'Otišao sam u kino, pa sam večerao.', tip:'nezavisna', vrsta:'sastavna', exp_t:'2 predikata + nezav. veznik „pa" → nezavisna.', exp_v:'„Pa" iznosi redoslijed/dodavanje → sastavna.'},
  {text:'Idem gdje me vode.', tip:'zavisna', vrsta:'mjesna', exp_t:'2 predikata + zav. zamj. „gdje" → zavisna.', exp_v:'„Gdje" iznosi mjesto („kamo idem?") → mjesna.'},
  {text:'Radi kako sam ti rekao.', tip:'zavisna', vrsta:'nacinska', exp_t:'2 predikata + zav. veznik „kako" → zavisna.', exp_v:'„Kako" iznosi način („kako radi?") → načinska.'},
  {text:'Sve je dobro, samo me boli glava.', tip:'nezavisna', vrsta:'izuzetna', exp_t:'2 predikata + nezav. veznik „samo" → nezavisna.', exp_v:'„Samo" iznosi iznimku → izuzetna.'},
  {text:'Tko rano rani, dvije sreće grabi.', tip:'zavisna', vrsta:'subjektna', exp_t:'2 predikata + zav. zamj. „tko" → zavisna.', exp_v:'„Tko rano rani" funkcionira kao subjekt glagola „grabi" → subjektna.'},
  {text:'Reci mi gdje si bio.', tip:'zavisna', vrsta:'objektna', exp_t:'2 predikata + zav. zamj. „gdje" → zavisna.', exp_v:'Pitanje: reci mi ŠTO? — odgovor je „gdje si bio" → objektna (ne mjesna!).'},
  
  // === HARD (7) — tricky cases ===
  {text:'Hoću čokoladu.', tip:'prosta', vrsta:null, exp_t:'1 predikat (hoću) → PROSTA. Ovo je zamka — nema 2 predikata.', exp_v:null},
  {text:'Sretna sam što si došao.', tip:'zavisna', vrsta:'uzrocna', exp_t:'2 predikata + zav. veznik „što" → zavisna.', exp_v:'„Što" ovdje uvodi uzrok („zašto sam sretna?") → uzročna (ne objektna!).'},
  {text:'Mislim, dakle jesam.', tip:'nezavisna', vrsta:'zakljucna', exp_t:'2 predikata + nezav. veznik „dakle" → nezavisna.', exp_v:'„Dakle" iznosi zaključak → zaključna (Descartes!).'},
  {text:'Vjerujem da bi mi pomogao da imaš vremena.', tip:'zavisna', vrsta:'objektna', exp_t:'3 predikata, više zavisnih. Glavni veznik „da" iza „vjerujem" → objektna.', exp_v:'Glavna zavisna je objektna („vjerujem ŠTO?"). Druga „da" (kondicional) je pogodbena unutar.'},
  {text:'Da imam novca, kupio bih auto.', tip:'zavisna', vrsta:'pogodbena', exp_t:'2 predikata + zav. veznik „da" + kondicional → zavisna.', exp_v:'„Da" + kondicional („bih") → pogodbena (NE objektna!). Pitanje: pod kojim uvjetom?'},
  {text:'Naime, situacija je drugačija nego što misliš.', tip:'nezavisna', vrsta:'objasnidbena', exp_t:'„Naime" je nezav. veznik koji uvodi pojašnjenje. 2 predikata.', exp_v:'„Naime" objašnjava → objasnidbena.'},
  {text:'Knjiga koju je napisao njegov brat osvojila je nagradu.', tip:'zavisna', vrsta:'atributna', exp_t:'2 predikata + zav. zamj. „koju" → zavisna.', exp_v:'„Koju je napisao brat" opisuje imenicu „knjiga" → atributna.'},
];

let ssIdx = 0;
let ssScore = 0;
let ssAnswers = [];
let ssTipGiven = null;
let ssVrstaGiven = null;
let ssMaxScore = 0; // 1 for tip + 1 for vrsta where applicable

function ssRender(){
  const out = document.getElementById('ss-exercise');
  if(!out) return;
  
  if(ssIdx >= SS_SENTENCES.length){
    return ssResult();
  }
  
  const item = SS_SENTENCES[ssIdx];
  ssTipGiven = null;
  ssVrstaGiven = null;
  
  out.innerHTML = \`
    <div class="ss-card">
      <div class="vr-meta">
        <span class="vr-progress">Rečenica <strong>\${ssIdx+1}</strong> / \${SS_SENTENCES.length}</span>
        <span class="vr-score">Točno: <strong>\${ssScore}</strong> / \${ssMaxScore}</span>
      </div>
      
      <div class="vr-sentence">\${item.text}</div>
      
      <!-- Q1: Tip (prosta/nezavisna/zavisna) -->
      <div class="vr-q-block">
        <div class="vr-q-label">
          <span class="vr-q-num">1</span>
          <span>Rečenica je:</span>
        </div>
        <div class="vr-options vr-options-3">
          \${SS_OPT_TIP.map(o => \`
            <button class="vr-opt" onclick="ssAnswerTip('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
              <span class="vr-opt-short">\${o.short}</span>
              <span class="vr-opt-label">\${o.label}</span>
            </button>
          \`).join('')}
        </div>
        <div id="ss-fb-tip" class="vr-fb"></div>
      </div>
      
      <!-- Q2 placeholder — appears after Q1 if applicable -->
      <div id="ss-q2-wrap" style="display:none"></div>
      
      <div id="ss-next-wrap" style="display:none;text-align:center;margin-top:14px">
        <button class="nb-btn primary" onclick="ssNext()">\${ssIdx+1 < SS_SENTENCES.length ? 'Sljedeća →' : 'Pogledaj rezultat →'}</button>
      </div>
    </div>
  \`;
}

function ssAnswerTip(key, btn){
  if(ssTipGiven) return;
  ssTipGiven = key;
  
  const item = SS_SENTENCES[ssIdx];
  const isCorrect = key === item.tip;
  ssMaxScore++;
  
  document.querySelectorAll('.vr-options-3 .vr-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.tip) b.classList.add('vr-correct');
    else if(b === btn) b.classList.add('vr-wrong');
  });
  
  if(isCorrect){
    ssScore++;
    if(typeof addXP === 'function') addXP(3);
  }
  
  const fb = document.getElementById('ss-fb-tip');
  fb.style.display = 'block';
  fb.className = 'vr-fb ' + (isCorrect ? 'vr-fb-correct' : 'vr-fb-wrong');
  fb.innerHTML = \`\${isCorrect?'✅':'❌'} <strong>\${isCorrect?'Točno!':'Pogrešno.'}</strong> \${item.exp_t}\`;
  
  // If "prosta" — no Q2, just show next
  if(item.tip === 'prosta'){
    ssAnswers.push({idx: ssIdx, tip:{given:ssTipGiven, correct:isCorrect}, vrsta:null});
    document.getElementById('ss-next-wrap').style.display = 'block';
    return;
  }
  
  // Otherwise, show Q2 (vrsta) — based on tip given (not correct, so even if wrong gets to try Q2)
  // But use the CORRECT tip to show right options (more educational)
  const correctTip = item.tip;
  const opts = correctTip === 'nezavisna' ? SS_OPT_NZ : SS_OPT_ZV;
  const optClass = correctTip === 'nezavisna' ? 'ss-opt-grid-nz' : 'ss-opt-grid-zv';
  
  ssMaxScore++; // Q2 will count
  
  const q2 = document.getElementById('ss-q2-wrap');
  q2.style.display = 'block';
  q2.innerHTML = \`
    <div class="vr-q-block">
      <div class="vr-q-label">
        <span class="vr-q-num">2</span>
        <span>Vrsta \${correctTip === 'nezavisna' ? 'nezavisne' : 'zavisne'} rečenice:</span>
      </div>
      <div class="vr-options \${optClass}">
        \${opts.map(o => \`
          <button class="vr-opt vr-opt-vrsta" onclick="ssAnswerVrsta('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
            <span class="vr-opt-label" style="font-size:11px;color:var(--t1);font-weight:600">\${o.label}</span>
          </button>
        \`).join('')}
      </div>
      <div id="ss-fb-vrsta" class="vr-fb"></div>
    </div>
  \`;
  
  // Smooth scroll to Q2
  setTimeout(() => q2.scrollIntoView({behavior:'smooth', block:'nearest'}), 100);
}

function ssAnswerVrsta(key, btn){
  if(ssVrstaGiven) return;
  ssVrstaGiven = key;
  
  const item = SS_SENTENCES[ssIdx];
  const isCorrect = key === item.vrsta;
  
  document.querySelectorAll('.vr-opt-vrsta').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.vrsta) b.classList.add('vr-correct');
    else if(b === btn) b.classList.add('vr-wrong');
  });
  
  if(isCorrect){
    ssScore++;
    if(typeof addXP === 'function') addXP(5); // Higher reward for Q2
  }
  
  const fb = document.getElementById('ss-fb-vrsta');
  fb.style.display = 'block';
  fb.className = 'vr-fb ' + (isCorrect ? 'vr-fb-correct' : 'vr-fb-wrong');
  fb.innerHTML = \`\${isCorrect?'✅':'❌'} <strong>\${isCorrect?'Točno!':'Pogrešno.'}</strong> \${item.exp_v}\`;
  
  ssAnswers.push({
    idx: ssIdx,
    tip: {given: ssTipGiven, correct: ssTipGiven === item.tip},
    vrsta: {given: ssVrstaGiven, correct: isCorrect}
  });
  
  document.getElementById('ss-next-wrap').style.display = 'block';
}

function ssNext(){
  ssIdx++;
  ssRender();
  setTimeout(() => {
    const ex = document.getElementById('ss-exercise');
    if(ex) ex.scrollIntoView({behavior:'smooth', block:'start'});
  }, 50);
}

function ssReset(){
  ssIdx = 0;
  ssScore = 0;
  ssMaxScore = 0;
  ssAnswers = [];
  document.getElementById('ss-result').style.display = 'none';
  ssRender();
}

function ssResult(){
  const out = document.getElementById('ss-exercise');
  const res = document.getElementById('ss-result');
  if(!out || !res) return;
  
  const total = ssMaxScore;
  const pct = total > 0 ? Math.round(ssScore / total * 100) : 0;
  
  let msg = '', emoji = '', color = '';
  if(pct >= 90){ msg = 'Izvrsno! Najteža sintaktička tema ti je u malom prstu. Spreman/na za maturu!'; emoji = '🏆'; color = 'var(--gold)'; }
  else if(pct >= 70){ msg = 'Dobro! Ovo je teška tema — pogledaj objašnjenja za pogreške.'; emoji = '🎯'; color = 'var(--green)'; }
  else if(pct >= 50){ msg = 'OK, treba još rada. Vrati se na tablicu veznika i ključne zamke iznad.'; emoji = '📚'; color = 'var(--bronze)'; }
  else { msg = 'Treba puno više učenja. Pažljivo prouči 6 nezavisnih + 12 zavisnih + sve tri zamke.'; emoji = '💪'; color = 'var(--red)'; }
  
  if(pct === 100 && typeof addXP === 'function') addXP(100, 'Sintaktički ekspert!');
  if(pct >= 80 && typeof recordTabVisit === 'function') recordTabVisit(3);
  
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.ss_hist') || '[]');
    hist.push({score:ssScore, total, pct, date: new Date().toISOString()});
    localStorage.setItem('mt.hrv.h21.ss_hist', JSON.stringify(hist.slice(-10)));
  } catch(e){}
  
  // Wrong answers detail
  const wrong = ssAnswers.filter(a => !a.tip.correct || (a.vrsta && !a.vrsta.correct));
  const wrongHtml = wrong.length > 0 ? \`
    <details class="rc-detail-wrong" style="margin-top:14px;text-align:left">
      <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--red);font-size:13px">
        ❌ Pogledaj svoje pogreške (\${wrong.length}) ▾
      </summary>
      <div style="margin-top:10px;display:grid;gap:8px">
        \${wrong.map(a => {
          const item = SS_SENTENCES[a.idx];
          let errors = [];
          if(!a.tip.correct) errors.push(\`<div>• Tip — tvoj: <strong style="color:var(--red)">\${a.tip.given}</strong>, točno: <strong style="color:var(--green)">\${item.tip}</strong>. \${item.exp_t}</div>\`);
          if(a.vrsta && !a.vrsta.correct) errors.push(\`<div>• Vrsta — tvoja: <strong style="color:var(--red)">\${a.vrsta.given}</strong>, točno: <strong style="color:var(--green)">\${item.vrsta}</strong>. \${item.exp_v}</div>\`);
          return \`
            <div style="padding:10px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1);font-size:12.5px">
              <div style="font-style:italic;color:var(--t1);margin-bottom:6px">"\${item.text}"</div>
              <div style="color:var(--t2);font-size:12px;line-height:1.6">\${errors.join('')}</div>
            </div>
          \`;
        }).join('')}
      </div>
    </details>
  \` : '';
  
  out.innerHTML = '';
  res.style.display = 'block';
  res.innerHTML = \`
    <div class="rc-result-card" style="border-left:3px solid \${color}">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);margin-bottom:4px">
        Rezultat: \${ssScore} / \${total} <span style="color:\${color}">(\${pct}%)</span>
      </div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:18px">\${msg}</div>
      
      <div class="rc-result-bar">
        <div class="rc-result-fill" style="width:\${pct}%;background:\${color}"></div>
      </div>
      
      \${wrongHtml}
      
      <div style="margin-top:18px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="nb-btn primary" onclick="ssReset()">🔁 Ponovi vježbu</button>
        <button class="nb-btn" onclick="sw(4)">📚 Pojmovnik →</button>
      </div>
    </div>
  \`;
}

function ssInit(){
  if(document.getElementById('ss-exercise')){
    ssRender();
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(ssInit, 100));
} else {
  setTimeout(ssInit, 200);
}



// ═══════════════════════════════════
// TAB 5 · SINTAKTIČKI PARSER
// ═══════════════════════════════════

// ───────────────────────────────────
// LEXICONS
// ───────────────────────────────────

// Veznici po vrstama
const PARSER_VEZNICI = {
  // Nezavisni
  'sastavna':      ['i','pa','te','ni','niti'],
  'rastavna':      ['ili'],
  'suprotna':      ['a','ali','no','nego','već'],
  'zakljucna':     ['zato','stoga','dakle','prema tome'],
  'izuzetna':      ['samo','jedino','osim'],
  'objasnidbena':  ['naime','to jest','tj','i to'],
  // Zavisni
  'subjektna':     ['tko','što (=tko/što)'],  // — kontekstualno
  'predikatna':    ['kakav','kakva','kakvo','kakvi'],  // rijetko
  'objektna':      ['da','što','kako','gdje','tko','li'],
  'atributna':     ['koji','koja','koje','koju','kojeg','kojem','kojom','kojoj','kojima','kojima','čiji','čija','čije','čiju','čiji'],
  'mjesna':        ['gdje','kamo','kuda','odakle','dokle'],
  'vremenska':     ['kad','kada','dok','otkad','čim','dok god','prije nego','nakon što'],
  'nacinska':      ['kao','kao da','kao što','poput'],
  'uzrocna':       ['jer','zato što','budući da','pošto'],
  'posljedicna':   ['toliko da','tako da','te'],  // discriminator: toliko/tako pred
  'namjerna':      ['da (cilj)','kako bi','da bi'],  // s kondicionalom
  'pogodbena':     ['ako','kad bi','da (uvjet)','ukoliko'],
  'dopusna':       ['iako','premda','mada','makar','i ako','ma koliko']
};

// Reverse lookup — veznik → vrsta(e)
const VEZNIK_TO_TYPE = {
  // Nezavisni
  'i':'sastavna','pa':'sastavna','te':'sastavna','ni':'sastavna','niti':'sastavna',
  'ili':'rastavna',
  'a':'suprotna','ali':'suprotna','no':'suprotna','nego':'suprotna','već':'suprotna',
  'zato':'zakljucna','stoga':'zakljucna','dakle':'zakljucna',
  'samo':'izuzetna','jedino':'izuzetna',
  'naime':'objasnidbena',
  // Zavisni — neki imaju multiple types
  'jer':['uzrocna'],
  'da':['objektna','namjerna','posljedicna','pogodbena','subjektna'],
  'ako':['pogodbena'],
  'kad':['vremenska','pogodbena'],
  'kada':['vremenska'],
  'dok':['vremenska'],
  'iako':['dopusna'],
  'premda':['dopusna'],
  'mada':['dopusna'],
  'makar':['dopusna'],
  'kao':['nacinska'],
  'tko':['subjektna','objektna'],
  'što':['objektna','subjektna','atributna','uzrocna'],
  'kako':['nacinska','objektna','uzrocna'],
  'gdje':['mjesna','objektna'],
  'kamo':['mjesna'],
  'kuda':['mjesna'],
  'koji':['atributna'],'koja':['atributna'],'koje':['atributna'],'koju':['atributna'],
  'kojeg':['atributna'],'kojem':['atributna'],'kojom':['atributna'],'kojoj':['atributna'],
  'čiji':['atributna'],'čija':['atributna'],'čije':['atributna'],
  'kakav':['predikatna','atributna'],'kakva':['predikatna'],
  'budući':['uzrocna'], // budući da
  'čim':['vremenska'],
  'otkad':['vremenska']
};

// Klasifikacija veznika kao nezavisni vs zavisni
const NEZAVISNI = new Set(['i','pa','te','ni','niti','ili','a','ali','no','nego','već','zato','stoga','dakle','samo','jedino','naime']);
const ZAVISNI = new Set(['jer','da','ako','kad','kada','dok','iako','premda','mada','makar','kao','tko','što','kako','gdje','kamo','kuda','čim','otkad','budući','koji','koja','koje','koju','kojeg','kojem','kojom','kojoj','kojima','čiji','čija','čije','kakav','kakva','kakvo']);

// Prijedlozi (za detekciju priložnih oznaka)
const PRIJEDLOZI = new Set(['u','na','pod','nad','pred','za','kroz','mimo','oko','o','od','do','iz','bez','s','sa','k','ka','prema','među','niz','uz','po','nakon','prije','tijekom','radi','zbog','protiv','umjesto','poput','iznad','ispod','ispred','iza','blizu','daleko','nasuprot','usprkos']);

// Pomoćni i kopulativni glagoli
const GLAGOLI_KOPULA = new Set(['je','su','sam','si','smo','ste','jesam','jesi','jest','jesmo','jeste','jesu','bio','bila','bilo','bili','bile','bila','bit','biti','bude','budem','budeš','budemo','budete','budu','budi','bih','bi','bismo','biste','nije','nisu','nisam','nisi','nismo','niste']);

const GLAGOLI_HTJETI = new Set(['hoću','hoćeš','hoće','hoćemo','hoćete','ću','ćeš','će','ćemo','ćete','neću','nećeš','neće','htio','htjela','htjeli','htjele']);

// Lični glagoli — sufiksi za prepoznavanje
const VERB_ENDINGS_PREZENT = ['am','aš','a','amo','ate','aju','em','eš','e','emo','ete','eju','im','iš','i','imo','ite','iju'];
const VERB_ENDINGS_PERFEKT = ['ao','la','lo','li','le','la']; // glagolski pridjev radni

// Imenske riječi sufikse (heuristika za N — subjekt)
const IMENICA_SUFFIX_N = ['a','o','e','i']; // većina imenica završava ovima u N

// ───────────────────────────────────
// TOKENIZATION
// ───────────────────────────────────
function parserTokenize(text){
  // Normalize — lowercase za analizu, ali sačuvaj original za prikaz
  const cleaned = text.trim().replace(/[\\u201C\\u201D„""]/g, '"').replace(/[\\u2018\\u2019]/g, "'");
  
  // Split keeping punctuation as separate tokens
  const tokens = [];
  const regex = /([a-zčćđšžA-ZČĆĐŠŽ0-9'-]+)|([.,!?;:])/g;
  let m;
  while ((m = regex.exec(cleaned)) !== null) {
    if (m[1]) tokens.push({type:'word', text:m[1], lower:m[1].toLowerCase(), idx:tokens.length});
    if (m[2]) tokens.push({type:'punct', text:m[2], idx:tokens.length});
  }
  return tokens;
}

// ───────────────────────────────────
// VEZNIK DETECTION
// ───────────────────────────────────
function parserDetectVeznici(tokens){
  const veznici = [];
  for(let i = 0; i < tokens.length; i++){
    const t = tokens[i];
    if(t.type !== 'word') continue;
    
    // Multi-word veznici (do 3 riječi)
    const next1 = i+2 < tokens.length ? tokens[i+2] : null;
    const next2 = i+4 < tokens.length ? tokens[i+4] : null;
    
    // Try 3-word phrases
    if(i+2 < tokens.length){
      // Tokens at positions [i], [i+1], [i+2] (could be punct between words)
      const candidate = [i, i+1, i+2].filter(idx => tokens[idx]?.type === 'word').slice(0, 3);
      if(candidate.length >= 2){
        const wordTokens = candidate.map(idx => tokens[idx].lower);
        const phrase2 = wordTokens.slice(0, 2).join(' ');
        const phrase3 = wordTokens.length >= 3 ? wordTokens.slice(0, 3).join(' ') : null;
        
        // 3-word phrases
        if(phrase3){
          if(phrase3 === 'prije nego što' || phrase3 === 'nakon što je'){
            veznici.push({pos:i, end:candidate[2]+1, text:phrase3, classification:'zavisni', vrsta:'vremenska'});
            i = candidate[2]; continue;
          }
          if(phrase3 === 'osim što je' || phrase3 === 'osim što su'){
            veznici.push({pos:i, end:candidate[2]+1, text:phrase3, classification:'nezavisni', vrsta:'izuzetna'});
            i = candidate[2]; continue;
          }
        }
      }
    }
    
    // Try 2-word
    if(next1 && next1.type === 'word'){
      const phrase = \`\${t.lower} \${next1.lower}\`;
      if(phrase === 'zato što'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'uzrocna'}); i += 2; continue; }
      if(phrase === 'budući da'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'uzrocna'}); i += 2; continue; }
      if(phrase === 'kao da'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'nacinska'}); i += 2; continue; }
      if(phrase === 'kao što'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'nacinska'}); i += 2; continue; }
      if(phrase === 'kad bi'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'pogodbena'}); i += 2; continue; }
      if(phrase === 'da bi' || phrase === 'kako bi'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'namjerna'}); i += 2; continue; }
      if(phrase === 'prema tome'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'nezavisni', vrsta:'zakljucna'}); i += 2; continue; }
      if(phrase === 'to jest' || phrase === 'i to'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'nezavisni', vrsta:'objasnidbena'}); i += 2; continue; }
      if(phrase === 'ma koliko' || phrase === 'i ako'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'dopusna'}); i += 2; continue; }
      if(phrase === 'samo što' || phrase === 'osim što'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'nezavisni', vrsta:'izuzetna'}); i += 2; continue; }
      if(phrase === 'nakon što' || phrase === 'prije nego'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'vremenska'}); i += 2; continue; }
      if(phrase === 'dok god' || phrase === 'sve dok'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'vremenska'}); i += 2; continue; }
    }
    
    // Single word
    const w = t.lower;
    if(NEZAVISNI.has(w)){
      // Skip if it's the first word (could be just sentence start, e.g. "I" in "I tako")
      if(i === 0) continue;
      // Skip "i" / "pa" / "te" / "ili" if preceded by ( or no comma — heuristic
      const prevPunct = i > 0 && tokens[i-1].type === 'punct' ? tokens[i-1].text : null;
      veznici.push({pos:i, end:i+1, text:w, classification:'nezavisni', vrsta:VEZNIK_TO_TYPE[w] || 'sastavna', precededByComma: prevPunct === ','});
    } else if(ZAVISNI.has(w)){
      const types = VEZNIK_TO_TYPE[w];
      let vrsta = Array.isArray(types) ? types[0] : types || 'objektna';
      
      // Disambiguation for ambiguous veznici
      if(w === 'da'){
        // Look for "toliko/tako" before → posljedična
        const prevWords = tokens.slice(Math.max(0,i-5), i).filter(x => x.type === 'word').map(x => x.lower);
        if(prevWords.includes('toliko') || prevWords.includes('tako')) vrsta = 'posljedicna';
        // Look for "bih/bi/bismo" after → namjerna or pogodbena
        else {
          const nextWords = tokens.slice(i+1, Math.min(tokens.length, i+5)).filter(x => x.type === 'word').map(x => x.lower);
          if(nextWords.some(w2 => ['bih','bi','bismo','biste'].includes(w2))){
            // Position decides: "Da" at start = pogodbena. Inside = namjerna.
            vrsta = i === 0 ? 'pogodbena' : 'namjerna';
          }
          // Default after "vjerujem/mislim/znam/kažem/pitam/vidim/čujem/reci..." = objektna
          else if(prevWords.length > 0){
            const verbBefore = prevWords[prevWords.length-1];
            if(['vjerujem','mislim','znam','kažem','rekao','rekla','pitam','vidim','čujem','reci','tvrdim','znaj','kaži','pitao','znao'].some(v => verbBefore.startsWith(v.slice(0,4)))) vrsta = 'objektna';
            else vrsta = 'objektna'; // safest default
          }
        }
      }
      else if(w === 'što'){
        // After verbs like "znati/vjerovati" → objektna
        // After noun → atributna (rare with "što")
        // After "sretna/tužna sam" → uzročna
        const prevWords = tokens.slice(Math.max(0,i-3), i).filter(x => x.type === 'word').map(x => x.lower);
        if(prevWords.some(w2 => ['sretan','sretna','tužan','tužna','ljut','ljuta','žao','drago'].includes(w2))) vrsta = 'uzrocna';
      }
      else if(w === 'kako'){
        // Default: načinska. After verbs of speaking/perception → objektna.
        const prevWords = tokens.slice(Math.max(0,i-3), i).filter(x => x.type === 'word').map(x => x.lower);
        if(prevWords.some(w2 => ['pitao','znam','vidim','čujem','reci','znaj'].includes(w2))) vrsta = 'objektna';
      }
      else if(w === 'gdje'){
        // After verbs of perception → objektna
        const prevWords = tokens.slice(Math.max(0,i-3), i).filter(x => x.type === 'word').map(x => x.lower);
        if(prevWords.some(w2 => ['pitao','znam','reci','znaj'].includes(w2))) vrsta = 'objektna';
      }
      else if(w === 'tko'){
        // At start = subjektna. After verb of speaking = objektna.
        if(i === 0) vrsta = 'subjektna';
      }
      else if(w === 'kad' || w === 'kada'){
        // Mostly vremenska. Sometimes pogodbena uz kondicional.
        const nextWords = tokens.slice(i+1, Math.min(tokens.length, i+5)).filter(x => x.type === 'word').map(x => x.lower);
        if(nextWords.some(w2 => ['bih','bi','bismo'].includes(w2))) vrsta = 'pogodbena';
      }
      
      veznici.push({pos:i, end:i+1, text:w, classification:'zavisni', vrsta:vrsta});
    }
  }
  return veznici;
}

// ───────────────────────────────────
// PREDIKAT DETECTION
// ───────────────────────────────────
function isVerbForm(token){
  if(token.type !== 'word') return false;
  const w = token.lower;
  // Pomoćni
  if(GLAGOLI_KOPULA.has(w) || GLAGOLI_HTJETI.has(w)) return true;
  // Glagolski pridjev radni
  if(/[aeio][olm][ao]?$/.test(w) && w.length >= 4) {
    const ends = ['ao','la','lo','li','le','no','na'];
    if(ends.some(e => w.endsWith(e))) return true;
  }
  // Prezent endings
  const endings = ['am','aš','amo','ate','aju','em','eš','emo','ete','eju','im','iš','imo','ite','iju'];
  for(const e of endings){
    if(w.endsWith(e) && w.length >= e.length + 2) return true;
  }
  // Imperativ — često završava na -j, -i, -te, -mo
  if(/[jit][eo]?$/.test(w) && w.length >= 3 && !w.endsWith('e')) return true;
  return false;
}

function parserDetectPredicates(tokens){
  const preds = [];
  const seen = new Set();
  
  for(let i = 0; i < tokens.length; i++){
    if(tokens[i].type !== 'word') continue;
    const w = tokens[i].lower;
    
    // Check for compound predicate "je + pridjev radni" / "ću + infinitiv" etc
    if(GLAGOLI_KOPULA.has(w) || GLAGOLI_HTJETI.has(w)){
      // Look for next verb form (pridjev radni)
      let j = i + 1;
      while(j < tokens.length && j < i + 4 && tokens[j].type === 'word'){
        const w2 = tokens[j].lower;
        if(['ao','la','lo','li','le','no','na','ti'].some(e => w2.endsWith(e)) && w2.length >= 3){
          preds.push({pos:i, end:j+1, text:tokens[i].text + ' ' + tokens[j].text, type:'compound'});
          seen.add(i); seen.add(j);
          i = j; // skip
          break;
        }
        j++;
      }
      if(seen.has(i)) continue;
      
      // Standalone kopula = imenski predikat (start)
      preds.push({pos:i, end:i+1, text:tokens[i].text, type:'kopula'});
      seen.add(i);
    } else if(isVerbForm(tokens[i]) && !seen.has(i)){
      preds.push({pos:i, end:i+1, text:tokens[i].text, type:'glagolski'});
      seen.add(i);
    }
  }
  return preds;
}

// ───────────────────────────────────
// SUBJEKT / OBJEKT detection (heuristic)
// ───────────────────────────────────
function parserDetectMembers(tokens, predicates){
  const members = []; // {pos, end, type, text, conf}
  
  // Strategy: For each predicate, look for nearby N (subject) before it
  // and A (object) after it.
  
  // Find candidate nominatives — words that look like nouns/proper nouns
  // Heuristic: capitalized in middle = proper noun (subject candidate)
  for(let i = 0; i < tokens.length; i++){
    if(tokens[i].type !== 'word') continue;
    const t = tokens[i];
    const w = t.text;
    const wl = t.lower;
    
    // Skip predicates and veznici
    if(predicates.some(p => p.pos === i)) continue;
    if(NEZAVISNI.has(wl) || ZAVISNI.has(wl)) continue;
    if(PRIJEDLOZI.has(wl)) continue;
    if(GLAGOLI_KOPULA.has(wl) || GLAGOLI_HTJETI.has(wl)) continue;
    
    // Check capitalization — proper noun (likely subject)
    const isProper = /^[A-ZČĆĐŠŽ]/.test(w) && i > 0 && tokens[i-1].type !== 'punct';
    const isStartCapital = /^[A-ZČĆĐŠŽ]/.test(w) && i === 0;
    
    // Check preposition before — if so, it's part of PO or neizravni objekt
    const prevToken = i > 0 ? tokens[i-1] : null;
    const hasPrep = prevToken && prevToken.type === 'word' && PRIJEDLOZI.has(prevToken.lower);
    
    if(hasPrep){
      // It's part of a prepositional phrase — likely PO (priložna oznaka)
      members.push({pos:i-1, end:i+1, type:'priložna oznaka', text: prevToken.text + ' ' + w, conf:0.7});
    }
  }
  
  // Find subject candidates: noun-like word in N before/at predicate, NOT after preposition
  predicates.forEach((pred, predIdx) => {
    // Look for subject candidate before this predicate (within 3 words)
    for(let i = Math.max(0, pred.pos - 3); i < pred.pos; i++){
      if(tokens[i].type !== 'word') continue;
      const t = tokens[i];
      const wl = t.lower;
      
      // Skip if already classified or not eligible
      if(predicates.some(p => p.pos === i)) continue;
      if(NEZAVISNI.has(wl) || ZAVISNI.has(wl) || PRIJEDLOZI.has(wl)) continue;
      
      // Check no preposition before
      const prevToken = i > 0 ? tokens[i-1] : null;
      const hasPrep = prevToken && prevToken.type === 'word' && PRIJEDLOZI.has(prevToken.lower);
      if(hasPrep) continue;
      
      // Check if it's already in members
      if(members.some(m => m.pos === i)) continue;
      
      // Heuristics for subject — look like noun/zamjenica
      const isProper = /^[A-ZČĆĐŠŽ]/.test(t.text);
      const looksNoun = /[aeoi]$/.test(wl) && wl.length >= 3;
      const isPersonalPron = ['ja','ti','on','ona','ono','mi','vi','oni','one','ona'].includes(wl);
      
      if(isProper || isPersonalPron || looksNoun){
        members.push({pos:i, end:i+1, type:'subjekt', text:t.text, conf: isProper || isPersonalPron ? 0.85 : 0.6, predRef:predIdx});
        break;
      }
    }
    
    // Look for object after predicate
    for(let i = pred.end; i < Math.min(tokens.length, pred.end + 4); i++){
      if(tokens[i].type !== 'word') continue;
      const t = tokens[i];
      const wl = t.lower;
      
      if(predicates.some(p => p.pos === i)) continue;
      if(NEZAVISNI.has(wl) || ZAVISNI.has(wl)) continue;
      if(PRIJEDLOZI.has(wl)) continue;
      if(members.some(m => m.pos === i)) continue;
      
      // Check if preceded by preposition (then PO)
      const prevToken = i > 0 ? tokens[i-1] : null;
      if(prevToken && prevToken.type === 'word' && PRIJEDLOZI.has(prevToken.lower)) continue;
      
      // Heuristic — accusative ending or noun-like
      const looksAccusative = /[uo]$/.test(wl) || /e$/.test(wl);
      const looksNoun = /[aeoi]$/.test(wl) && wl.length >= 3;
      
      if(looksAccusative || looksNoun){
        members.push({pos:i, end:i+1, type:'objekt', text:t.text, conf: looksAccusative ? 0.7 : 0.5, predRef:predIdx});
        break;
      }
    }
  });
  
  // Detect adjectives = atributi (positioned right before nouns we identified)
  members.forEach(m => {
    if(m.type === 'subjekt' || m.type === 'objekt'){
      // Check word right before
      const prev = m.pos - 1;
      if(prev >= 0 && tokens[prev].type === 'word'){
        const t = tokens[prev];
        const wl = t.lower;
        if(NEZAVISNI.has(wl) || ZAVISNI.has(wl) || PRIJEDLOZI.has(wl)) return;
        if(predicates.some(p => p.pos === prev)) return;
        if(members.some(m2 => m2.pos === prev)) return;
        
        // Heuristic for adjective: ends in adjective endings, lowercase
        const adjEndings = ['i','a','o','e','u','om','og','oj','im','ima'];
        if(adjEndings.some(e => wl.endsWith(e)) && wl.length >= 4 && !/^[A-ZČĆĐŠŽ]/.test(t.text)){
          members.push({pos:prev, end:prev+1, type:'atribut', text:t.text, conf:0.6});
        }
      }
    }
  });
  
  return members;
}

// ───────────────────────────────────
// SENTENCE TYPE CLASSIFICATION
// ───────────────────────────────────
function parserClassifyType(tokens, predicates, veznici){
  const numPred = predicates.length;
  
  // Confidence base
  let conf = 0.8;
  
  if(numPred === 0){
    return {type:'nekompletno', detail:'Nije pronađen predikat — možda nepotpuna rečenica.', conf:0.3};
  }
  
  if(numPred === 1){
    return {type:'prosta', detail:\`1 predikat (\${predicates[0].text}) → prosta rečenica.\`, conf:0.85};
  }
  
  // Multiple predicates — check veznici
  if(veznici.length === 0){
    return {type:'asindetska', detail:\`\${numPred} predikata bez veznika — asindetska (povezana zarezima).\`, conf:0.7};
  }
  
  const firstVeznik = veznici[0];
  if(firstVeznik.classification === 'zavisni'){
    return {
      type:'zavisno složena',
      vrsta:firstVeznik.vrsta,
      veznik:firstVeznik.text,
      detail:\`\${numPred} predikata + zavisni veznik „\${firstVeznik.text}" → zavisno složena (\${firstVeznik.vrsta}).\`,
      conf:0.85
    };
  } else {
    return {
      type:'nezavisno složena',
      vrsta:firstVeznik.vrsta,
      veznik:firstVeznik.text,
      detail:\`\${numPred} predikata + nezavisni veznik „\${firstVeznik.text}" → nezavisno složena (\${firstVeznik.vrsta}).\`,
      conf:0.85
    };
  }
}

// ───────────────────────────────────
// PRIOPĆAJNA SVRHA
// ───────────────────────────────────
function parserDetectSvrha(tokens, text){
  const lastChar = text.trim().slice(-1);
  const lower = text.toLowerCase();
  
  if(lastChar === '?') return {tip:'upitna', detail:'Završava upitnikom.'};
  if(lastChar === '!'){
    // Imperatives often end with !
    if(/\\b(idi|dođi|piši|čitaj|reci|zatvori|otvori|sjedni|stani|dosta|prestani)\\b/i.test(lower)) return {tip:'zapovjedna', detail:'Glagol u imperativu + uskličnik.'};
    if(/\\b(neka|sretan|dobar dan)\\b/i.test(lower)) return {tip:'želja (optativna)', detail:'Izraz želje s uskličnikom.'};
    return {tip:'usklična', detail:'Završava uskličnikom (jaka emocija).'};
  }
  // Imperative even without ! 
  if(/^(idi|dođi|piši|čitaj|reci|zatvori|otvori)\\b/i.test(lower)) return {tip:'zapovjedna', detail:'Glagol u imperativu na početku.'};
  
  return {tip:'izjavna', detail:'Završava točkom — iznosi obavijest.'};
}

// ───────────────────────────────────
// MAIN PARSE FUNCTION
// ───────────────────────────────────
function parserParse(text){
  if(!text || text.trim().length < 2) return null;
  
  const tokens = parserTokenize(text);
  if(tokens.length === 0) return null;
  
  const veznici = parserDetectVeznici(tokens);
  const predicates = parserDetectPredicates(tokens);
  const members = parserDetectMembers(tokens, predicates);
  const sentenceType = parserClassifyType(tokens, predicates, veznici);
  const svrha = parserDetectSvrha(tokens, text);
  
  // Calculate overall confidence
  let conf = sentenceType.conf || 0.7;
  if(members.length === 0) conf -= 0.2;
  if(predicates.length === 0) conf -= 0.3;
  conf = Math.max(0.3, Math.min(1, conf));
  
  return {
    text, tokens, veznici, predicates, members, sentenceType, svrha,
    confidence: conf
  };
}

// ───────────────────────────────────
// RENDERING
// ───────────────────────────────────
const MEMBER_COLORS = {
  'subjekt': 'var(--blue)',
  'predikat': 'var(--red)',
  'objekt': 'var(--green)',
  'atribut': 'var(--bronze)',
  'apozicija': '#9b59b6',
  'priložna oznaka': '#e67e22'
};

const MEMBER_SHORT = {
  'subjekt': 'S',
  'predikat': 'P',
  'objekt': 'O',
  'atribut': 'A',
  'apozicija': 'Ap',
  'priložna oznaka': 'P.O.'
};

function parserRenderTokens(result){
  // Build annotated sentence
  return result.tokens.map((t, i) => {
    if(t.type === 'punct') return \`<span class="prs-punct">\${t.text}</span>\`;
    
    // Find which group this token belongs to
    const member = result.members.find(m => m.pos <= i && i < m.end);
    const pred = result.predicates.find(p => p.pos <= i && i < p.end);
    const veznik = result.veznici.find(v => v.pos <= i && i < v.end);
    
    if(member){
      const color = MEMBER_COLORS[member.type] || 'var(--t1)';
      return \`<span class="prs-tok prs-member" style="--mc:\${color}" data-type="\${member.type}" title="\${member.type}">\${t.text}</span>\`;
    }
    if(pred){
      return \`<span class="prs-tok prs-pred" data-type="predikat" title="predikat (\${pred.type})">\${t.text}</span>\`;
    }
    if(veznik){
      return \`<span class="prs-tok prs-veznik" data-type="veznik" title="\${veznik.classification} veznik · \${veznik.vrsta||''}">\${t.text}</span>\`;
    }
    return \`<span class="prs-tok-plain">\${t.text}</span>\`;
  }).join(' ').replace(/\\s+([.,!?;:])/g, '$1');
}

function parserRenderTree(result){
  // Build SVG tree visualization
  // Root: sentence type
  // Branches: predicate(s), and under each predicate: subject, object, etc.
  
  const w = 600;
  const padX = 30, padY = 20;
  const rootY = 40;
  const predY = 130;
  const memberY = 230;
  
  const numPred = result.predicates.length;
  const usableW = w - 2 * padX;
  
  let svg = \`<svg viewBox="0 0 \${w} 320" xmlns="http://www.w3.org/2000/svg" class="prs-tree-svg">\`;
  
  // Root
  svg += \`<g><rect x="\${w/2 - 90}" y="\${rootY - 18}" width="180" height="32" rx="6" fill="rgba(233,180,70,.15)" stroke="var(--gold)" stroke-width="1.5"/>\`;
  svg += \`<text x="\${w/2}" y="\${rootY + 3}" text-anchor="middle" fill="var(--gold)" font-family="var(--mono)" font-size="11" font-weight="700">\${(result.sentenceType.type||'?').toUpperCase()}</text></g>\`;
  
  if(numPred === 0){
    svg += \`<text x="\${w/2}" y="\${predY + 20}" text-anchor="middle" fill="var(--t3)" font-family="var(--mono)" font-size="11">nema predikata</text>\`;
    svg += \`</svg>\`;
    return svg;
  }
  
  // Predicates (one or multiple)
  const predX = numPred === 1 ? [w/2] : Array.from({length:numPred}, (_,i) => padX + (usableW / (numPred-1 || 1)) * i);
  
  result.predicates.forEach((pred, idx) => {
    const x = predX[idx] || w/2;
    
    // Line from root to predicate
    svg += \`<line x1="\${w/2}" y1="\${rootY + 14}" x2="\${x}" y2="\${predY - 18}" stroke="var(--bd)" stroke-width="1.5"/>\`;
    
    // Predicate node
    const predText = pred.text.length > 18 ? pred.text.slice(0, 16) + '...' : pred.text;
    const boxW = Math.max(80, predText.length * 8 + 16);
    svg += \`<g><rect x="\${x - boxW/2}" y="\${predY - 18}" width="\${boxW}" height="32" rx="6" fill="rgba(224,82,82,.12)" stroke="var(--red)" stroke-width="1.5"/>\`;
    svg += \`<text x="\${x}" y="\${predY - 4}" text-anchor="middle" fill="var(--red)" font-family="var(--mono)" font-size="9" font-weight="700">P</text>\`;
    svg += \`<text x="\${x}" y="\${predY + 9}" text-anchor="middle" fill="var(--t1)" font-family="var(--display)" font-size="11" font-weight="600">\${predText}</text></g>\`;
    
    // Members linked to this predicate
    const linkedMembers = result.members.filter(m => m.predRef === idx || (m.predRef === undefined && idx === 0));
    if(linkedMembers.length > 0){
      const memberSpacing = 110;
      const totalW = (linkedMembers.length - 1) * memberSpacing;
      const startMX = x - totalW / 2;
      
      linkedMembers.forEach((mem, mIdx) => {
        const mx = startMX + mIdx * memberSpacing;
        const color = MEMBER_COLORS[mem.type] || 'var(--t1)';
        const short = MEMBER_SHORT[mem.type] || '?';
        const memText = mem.text.length > 14 ? mem.text.slice(0, 12) + '..' : mem.text;
        const memBoxW = Math.max(70, memText.length * 7 + 16);
        
        // Line
        svg += \`<line x1="\${x}" y1="\${predY + 14}" x2="\${mx}" y2="\${memberY - 18}" stroke="var(--bd)" stroke-width="1"/>\`;
        
        // Member node
        svg += \`<g><rect x="\${mx - memBoxW/2}" y="\${memberY - 18}" width="\${memBoxW}" height="32" rx="6" fill="rgba(255,255,255,.03)" stroke="\${color}" stroke-width="1.5"/>\`;
        svg += \`<text x="\${mx}" y="\${memberY - 4}" text-anchor="middle" fill="\${color}" font-family="var(--mono)" font-size="9" font-weight="700">\${short}</text>\`;
        svg += \`<text x="\${mx}" y="\${memberY + 9}" text-anchor="middle" fill="var(--t1)" font-family="var(--display)" font-size="10" font-weight="500">\${memText}</text></g>\`;
      });
    }
  });
  
  svg += \`</svg>\`;
  return svg;
}

function parserRenderResult(result){
  if(!result){
    return \`<div style="padding:18px;color:var(--t3);text-align:center;font-style:italic">Upiši rečenicu i klikni "Analiziraj" za rezultat.</div>\`;
  }
  
  const conf = result.confidence;
  const confColor = conf >= 0.8 ? 'var(--green)' : conf >= 0.6 ? 'var(--gold)' : 'var(--red)';
  const confLabel = conf >= 0.8 ? 'visoka' : conf >= 0.6 ? 'srednja' : 'niska';
  
  // Annotated sentence
  const annotated = parserRenderTokens(result);
  
  // Type info
  const typeInfo = result.sentenceType;
  const svrhaInfo = result.svrha;
  
  // Members list
  const memberList = result.members.map(m => 
    \`<span class="prs-chip" style="--mc:\${MEMBER_COLORS[m.type]||'var(--t3)'}"><span class="prs-chip-tag">\${MEMBER_SHORT[m.type]||'?'}</span> \${m.text}</span>\`
  ).join('');
  
  const predList = result.predicates.map(p => 
    \`<span class="prs-chip" style="--mc:var(--red)"><span class="prs-chip-tag">P</span> \${p.text}</span>\`
  ).join('');
  
  const veznikList = result.veznici.length > 0 ? result.veznici.map(v => 
    \`<span class="prs-chip" style="--mc:\${v.classification==='nezavisni' ? 'var(--gold)' : 'var(--bronze)'}"><span class="prs-chip-tag">\${v.classification[0].toUpperCase()}</span> „\${v.text}" → \${v.vrsta||'?'}</span>\`
  ).join('') : '<span style="color:var(--t3);font-size:12px;font-style:italic">Nema veznika.</span>';
  
  // Tree
  const tree = parserRenderTree(result);
  
  return \`
    <div class="prs-result">
      
      <!-- Annotated sentence -->
      <div class="prs-section">
        <div class="prs-section-lbl">📝 OZNAČENA REČENICA</div>
        <div class="prs-sentence">\${annotated}</div>
        <div class="prs-legend">
          <span class="prs-leg" style="--mc:var(--blue)"><span class="prs-leg-dot"></span>S subjekt</span>
          <span class="prs-leg" style="--mc:var(--red)"><span class="prs-leg-dot"></span>P predikat</span>
          <span class="prs-leg" style="--mc:var(--green)"><span class="prs-leg-dot"></span>O objekt</span>
          <span class="prs-leg" style="--mc:var(--bronze)"><span class="prs-leg-dot"></span>A atribut</span>
          <span class="prs-leg" style="--mc:#e67e22"><span class="prs-leg-dot"></span>P.O. priložna</span>
          <span class="prs-leg" style="--mc:var(--gold)"><span class="prs-leg-dot"></span>veznik</span>
        </div>
      </div>
      
      <!-- Type analysis -->
      <div class="prs-section">
        <div class="prs-section-lbl">📊 ANALIZA</div>
        <div class="prs-grid">
          <div class="prs-info-card">
            <div class="prs-info-lbl">PO SASTAVU</div>
            <div class="prs-info-val">\${typeInfo.type||'?'}\${typeInfo.vrsta ? \` · \${typeInfo.vrsta}\` : ''}</div>
            <div class="prs-info-detail">\${typeInfo.detail||''}</div>
          </div>
          <div class="prs-info-card">
            <div class="prs-info-lbl">PO SVRSI</div>
            <div class="prs-info-val">\${svrhaInfo.tip}</div>
            <div class="prs-info-detail">\${svrhaInfo.detail}</div>
          </div>
          <div class="prs-info-card">
            <div class="prs-info-lbl">CONFIDENCE</div>
            <div class="prs-info-val" style="color:\${confColor}">\${Math.round(conf*100)}% · \${confLabel}</div>
            <div class="prs-info-detail">\${conf >= 0.8 ? 'Pouzdano!' : conf >= 0.6 ? 'Provjeri ručno.' : 'Niska — koristi AI tutora.'}</div>
          </div>
        </div>
      </div>
      
      <!-- Members detected -->
      <div class="prs-section">
        <div class="prs-section-lbl">🏗️ REČENIČNI ČLANOVI</div>
        <div class="prs-chips-row">
          \${predList}
          \${memberList}
        </div>
      </div>
      
      <!-- Veznici -->
      <div class="prs-section">
        <div class="prs-section-lbl">🔗 VEZNICI</div>
        <div class="prs-chips-row">\${veznikList}</div>
      </div>
      
      <!-- Tree -->
      <div class="prs-section">
        <div class="prs-section-lbl">🌳 STABLO ZAVISNOSTI</div>
        <div class="prs-tree-wrap">\${tree}</div>
      </div>
      
      <!-- Disclaimer -->
      <div style="margin-top:14px;padding:10px 12px;background:rgba(74,144,217,.05);border-left:3px solid var(--blue);border-radius:var(--r1);font-size:11.5px;color:var(--t2);line-height:1.5">
        <strong style="color:var(--blue)">⚠ Napomena:</strong> Parser radi heuristički — nije savršen. Za teške rečenice koristi AI tutora ispod ili provjeri ručno koristeći Tab 1-3.
      </div>
      
    </div>
  \`;
}

function parserAnalyze(){
  const input = document.getElementById('parser-input');
  const output = document.getElementById('parser-output');
  if(!input || !output) return;
  
  const text = input.value.trim();
  if(!text){
    output.innerHTML = \`<div style="padding:14px;color:var(--red);text-align:center;font-size:13px">⚠ Upiši rečenicu prvo.</div>\`;
    return;
  }
  
  const result = parserParse(text);
  output.innerHTML = parserRenderResult(result);
  
  // Save history (XSS-safe)
  if(/^[a-zA-ZčćđšžČĆĐŠŽ0-9\\s.,!?;:'-]+$/.test(text) && text.length < 200){
    try {
      const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.parser_hist') || '[]');
      hist.push({text, date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h21.parser_hist', JSON.stringify(hist.slice(-15)));
    } catch(e){}
  }
  
  if(typeof addXP === 'function') addXP(2);
  if(typeof recordTabVisit === 'function') recordTabVisit(5);
}

function parserExample(text){
  const input = document.getElementById('parser-input');
  if(input){
    input.value = text;
    parserAnalyze();
  }
}

const PARSER_RANDOM_SENTENCES = [
  // EASY (10) — proste i osnovne nezavisno složene
  {text:'Marija čita zanimljivu knjigu.', diff:'easy', type:'prosta'},
  {text:'Ivan voli svoju sestru.', diff:'easy', type:'prosta'},
  {text:'Pada kiša.', diff:'easy', type:'prosta'},
  {text:'Djeca trče po dvorištu.', diff:'easy', type:'prosta'},
  {text:'Učim hrvatski jezik svaki dan.', diff:'easy', type:'prosta'},
  {text:'Učim i pišem zadaću.', diff:'easy', type:'sastavna'},
  {text:'Učim, ali sam jako umoran.', diff:'easy', type:'suprotna'},
  {text:'Idem ili ostajem.', diff:'easy', type:'rastavna'},
  {text:'Pada kiša, zato ostajem doma.', diff:'easy', type:'zaključna'},
  {text:'Marija piše, a Ivan čita.', diff:'easy', type:'suprotna'},
  
  // MEDIUM (15) — zavisno složene, jasne
  {text:'Vjerujem da si u pravu.', diff:'medium', type:'objektna'},
  {text:'Učim jer želim položiti maturu.', diff:'medium', type:'uzročna'},
  {text:'Knjiga koju mi je dala je odlična.', diff:'medium', type:'atributna'},
  {text:'Ako budeš učio, položit ćeš.', diff:'medium', type:'pogodbena'},
  {text:'Iako sam umoran, idem na trening.', diff:'medium', type:'dopusna'},
  {text:'Dok si učio, ja sam spavao.', diff:'medium', type:'vremenska'},
  {text:'Sretna sam što si došao.', diff:'medium', type:'uzročna'},
  {text:'Idem gdje me vode.', diff:'medium', type:'mjesna'},
  {text:'Reci mi kako si.', diff:'medium', type:'objektna'},
  {text:'Učim da bih položio maturu.', diff:'medium', type:'namjerna'},
  {text:'Tko rano rani, dvije sreće grabi.', diff:'medium', type:'subjektna'},
  {text:'Marija, moja sestra, čita knjigu.', diff:'medium', type:'apozicija'},
  {text:'Pomažem svom prijatelju s domaćom zadaćom.', diff:'medium', type:'P.O.'},
  {text:'Mislim, dakle jesam.', diff:'medium', type:'zaključna'},
  {text:'Toliko sam umoran da spavam stojeći.', diff:'medium', type:'posljedična'},
  
  // HARD (10) — kompleksne, zamke
  {text:'Da imam novca, kupio bih auto.', diff:'hard', type:'pogodbena'},
  {text:'Misliš li da će padati kiša sutra?', diff:'hard', type:'objektna+upitna'},
  {text:'Ne znam tko je to rekao.', diff:'hard', type:'objektna'},
  {text:'Pala je kiša, vjetar je puhao, hladnoća je zavladala.', diff:'hard', type:'asindetska'},
  {text:'Sve znam, samo ovo poglavlje ne.', diff:'hard', type:'izuzetna'},
  {text:'Naime, situacija je drugačija nego što misliš.', diff:'hard', type:'objasnidbena'},
  {text:'Iako pada kiša, ostajemo na klupi gdje se uvijek nalazimo.', diff:'hard', type:'višestruka zavisna'},
  {text:'Tko rano rani, dvije sreće grabi, kažu naši stari.', diff:'hard', type:'višestruka'},
  {text:'Učim, jer želim položiti, da se mama ne mora brinuti.', diff:'hard', type:'lančana zavisna'},
  {text:'Marija, koja je moja najbolja prijateljica, sutra ide u Zagreb.', diff:'hard', type:'umetnuta atributna'},
  
  // EXPERT (5) — vrlo teške, klasici
  {text:'Tko bi rekao da će se to dogoditi.', diff:'expert', type:'subjektna+objektna'},
  {text:'Premda je oblačno, ljudi se kupaju, jer je vruće.', diff:'expert', type:'dopusna+uzročna'},
  {text:'Kupio sam knjigu o kojoj sam ti pričao.', diff:'expert', type:'atributna+P.O.'},
  {text:'Onaj koji puno radi, taj puno i postiže.', diff:'expert', type:'subjektna+atributna'},
  {text:'Govorim ti to, kako bi razumio, što sam htio reći.', diff:'expert', type:'namjerna+objektna'},
];

let parserRandomHistory = [];
let parserDiffFilter = 'all';

function parserRandom(){
  // Filter by current difficulty preference
  let pool = PARSER_RANDOM_SENTENCES;
  if(parserDiffFilter !== 'all'){
    pool = pool.filter(s => s.diff === parserDiffFilter);
  }
  if(pool.length === 0) pool = PARSER_RANDOM_SENTENCES;
  
  // Avoid recent (last 5) selections
  let candidates = pool.filter(s => !parserRandomHistory.includes(s.text));
  if(candidates.length === 0){
    parserRandomHistory = []; // reset if all used
    candidates = pool;
  }
  
  const picked = candidates[Math.floor(Math.random() * candidates.length)];
  parserRandomHistory.push(picked.text);
  if(parserRandomHistory.length > 5) parserRandomHistory.shift();
  
  parserExample(picked.text);
}

function parserSetDiff(diff, btn){
  parserDiffFilter = diff;
  document.querySelectorAll('.parser-diff-btn').forEach(b => b.classList.remove('on'));
  if(btn) btn.classList.add('on');
}

// ═══════════════════════════════════
// AI TUTOR — SINTAKSA
// ═══════════════════════════════════
async function aiAsk(){
  const inputEl = document.getElementById('ai-input');
  const answerEl = document.getElementById('ai-answer');
  const answerTextEl = document.getElementById('ai-answer-text');
  if(!inputEl || !answerEl || !answerTextEl) return;
  
  const question = inputEl.value.trim();
  if(!question){
    alert('Upiši pitanje prvo.');
    return;
  }
  
  // Show loading state
  answerEl.style.display = 'block';
  answerTextEl.innerHTML = \`<div style="text-align:center;padding:20px;color:var(--t3)"><div class="ai-spinner"></div> AI razmišlja...</div>\`;
  answerEl.scrollIntoView({behavior:'smooth', block:'nearest'});
  
  try {
    // 🚨 PRODUCTION TODO: Move this fetch to backend proxy (Next.js /api/ai-feedback)

    // Current: API call from browser would expose API key in production.

    // Plan: Next.js API route → Supabase tier check → proxy to Anthropic API → return result

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: \`Ti si AI profesor hrvatskog jezika specijaliziran za SINTAKSU za srednjoškolce pred maturom. Odgovaraj točno, jasno, s konkretnim primjerima na hrvatskom. Strukturiraj odgovor: 1) kratka definicija, 2) ključno pravilo, 3) 2-3 primjera s objašnjenjima, 4) trik za maturu. Maksimalno 200 riječi. Koristi <strong> za naglašavanje, <em> za primjere. Ne koristi markdown ## ili **. Specijalizacija: rečenični članovi (SPO-AAP), vrste rečenica, složene rečenice (nezavisno + zavisno, 6+12 vrsta), interpunkcija, veznici.\`,
        messages: [{role: "user", content: question}]
      })
    });
    
    if(!response.ok){
      throw new Error(\`API error: \${response.status}\`);
    }
    
    const data = await response.json();
    const text = data.content
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('\\n');
    
    // Safe render — only allow specific HTML tags
    const safe = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/&lt;strong&gt;/g, '<strong>').replace(/&lt;\\/strong&gt;/g, '</strong>')
      .replace(/&lt;em&gt;/g, '<em>').replace(/&lt;\\/em&gt;/g, '</em>')
      .replace(/&lt;br\\s*\\/?&gt;/g, '<br>')
      .replace(/\\n/g, '<br>');
    
    answerTextEl.innerHTML = safe;
    
    // Save history
    try {
      const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.ai_hist') || '[]');
      hist.push({q: question, a: text.slice(0, 500), date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h21.ai_hist', JSON.stringify(hist.slice(-10)));
    } catch(e){}
    
    if(typeof addXP === 'function') addXP(5, 'AI tutor pitanje');
    
  } catch(err){
    answerTextEl.innerHTML = \`<div style="color:var(--red);padding:12px;background:rgba(224,82,82,.06);border-left:3px solid var(--red);border-radius:var(--r1)">
      <strong>⚠ Greška:</strong> AI tutor trenutno nije dostupan. Pokušaj ponovo za nekoliko sekundi.<br>
      Ako problem potraje, koristi <strong>Sintaktički parser</strong> iznad ili se obrati na Maturiraj.hr help.
    </div>\`;
    console.error('AI error:', err);
  }
}

function aiAskExample(q){
  const input = document.getElementById('ai-input');
  if(input){
    input.value = q;
    aiAsk();
  }
}

function aiCopy(btn){
  const ans = document.getElementById('ai-answer-text');
  if(!ans) return;
  const text = ans.innerText.trim();
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ Kopirano';
    setTimeout(() => btn.textContent = orig, 1500);
  }).catch(() => alert('Greška pri kopiranju.'));
}

function aiShare(){
  const ans = document.getElementById('ai-answer-text');
  const input = document.getElementById('ai-input');
  if(!ans) return;
  
  const text = \`Pitanje: \${input?.value || ''}\\n\\nOdgovor (Maturiraj.hr H21 Sintaksa):\\n\${ans.innerText.trim()}\\n\\n→ maturiraj.hr/h21\`;
  
  if(navigator.share){
    navigator.share({
      title: 'Maturiraj.hr — H21 Sintaksa',
      text: text,
      url: 'https://maturiraj.hr/hrvatski/h21-sintaksa'
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('Kopirano! Sad zalijepi u poruku/email.');
    });
  }
}

// Init
function parserInit(){
  if(document.getElementById('parser-output')){
    document.getElementById('parser-output').innerHTML = \`<div style="padding:18px;color:var(--t3);text-align:center;font-style:italic">Upiši rečenicu i klikni "🔬 Analiziraj" za rezultat.<br><br>Možeš i kliknuti jedan od primjera iznad.</div>\`;
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(parserInit, 100));
} else {
  setTimeout(parserInit, 200);
}



// ═══════════════════════════════════
// TAB 4 · POJMOVNIK SINTAKSE
// ═══════════════════════════════════

let pojmActiveCat = 'all';
let pojmStars = {};

// Load stars from localStorage
try { pojmStars = JSON.parse(localStorage.getItem('mt.hrv.h21.cit_stars') || '{}'); } catch(e){ pojmStars = {}; }

const KAT_LABELS = {
  'clanovi': 'Rečenični članovi',
  'vrste': 'Vrste rečenica',
  'nezavisno': 'Nezavisno složene',
  'zavisno': 'Zavisno složene',
  'veznici': 'Veznici i interpunkcija',
  'sintagme': 'Sintagme i ostalo'
};

const KAT_COLORS = {
  'clanovi': 'var(--blue)',
  'vrste': 'var(--green)',
  'nezavisno': 'var(--gold)',
  'zavisno': 'var(--bronze)',
  'veznici': '#9b59b6',
  'sintagme': '#e67e22'
};

function pojmEscapeHtml(s){
  return String(s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function pojmHighlight(text, query){
  if(!query || query.length < 2) return text;
  const safe = pojmEscapeHtml(text);
  const safeQ = query.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
  return safe.replace(new RegExp('(' + safeQ + ')', 'gi'), '<mark style="background:rgba(233,180,70,.25);color:var(--gold);padding:0 2px;border-radius:3px">$1</mark>');
}

function pojm2Render(){
  const grid = document.getElementById('pojm-grid2');
  const countEl = document.getElementById('pojm-count');
  if(!grid || typeof POJM_DATA2 === 'undefined') return;
  
  const searchEl = document.getElementById('pojm-search');
  const query = (searchEl?.value || '').trim().toLowerCase();
  
  // Filter by category + search
  let filtered = POJM_DATA2.filter(p => {
    if(pojmActiveCat === 'star'){
      if(!p.star) return false;
    } else if(pojmActiveCat !== 'all'){
      if(p.kat !== pojmActiveCat) return false;
    }
    if(query){
      return p.term.toLowerCase().includes(query) || p.def.toLowerCase().includes(query);
    }
    return true;
  });
  
  if(countEl){
    const totalInCat = pojmActiveCat === 'all' ? POJM_DATA2.length :
                       pojmActiveCat === 'star' ? POJM_DATA2.filter(p => p.star).length :
                       POJM_DATA2.filter(p => p.kat === pojmActiveCat).length;
    countEl.textContent = query 
      ? \`\${filtered.length} od \${totalInCat} pojmova (filter: "\${query}")\`
      : \`\${filtered.length} pojmova\${pojmActiveCat !== 'all' ? ' u kategoriji "' + (KAT_LABELS[pojmActiveCat] || pojmActiveCat) + '"' : ''}\`;
  }
  
  if(filtered.length === 0){
    grid.innerHTML = \`<div style="grid-column:1/-1;padding:40px;text-align:center;color:var(--t3);font-style:italic">
      \${query ? \`Nema rezultata za "<strong>\${pojmEscapeHtml(query)}</strong>". Pokušaj kraću ili drugačiju riječ.\` : 'Nema pojmova u ovoj kategoriji.'}
    </div>\`;
    return;
  }
  
  grid.innerHTML = filtered.map((p, idx) => {
    const id = \`\${p.kat}_\${idx}\`;
    const isStar = pojmStars[p.term] ? true : false;
    const color = KAT_COLORS[p.kat] || 'var(--t3)';
    const term = pojmHighlight(p.term, query);
    const def = pojmHighlight(p.def, query);
    
    return \`
      <div class="pojm-card-h21" style="--pc:\${color}">
        <div class="pojm-card-head">
          <div class="pojm-card-meta">
            <span class="pojm-card-cat">\${KAT_LABELS[p.kat] || p.kat}</span>
            \${p.star ? '<span class="pojm-card-ncvvo">★ NCVVO</span>' : ''}
            \${p.tag ? \`<span class="pojm-card-tag">\${p.tag}</span>\` : ''}
          </div>
          <button class="pojm-card-star \${isStar ? 'on' : ''}" 
                  onclick="pojmToggleStar('\${pojmEscapeHtml(p.term).replace(/'/g, "\\\\'")}', this)" 
                  title="\${isStar ? 'Ukloni iz mojih' : 'Spremi za učenje'}">
            \${isStar ? '★' : '☆'}
          </button>
        </div>
        <div class="pojm-card-term">\${term}</div>
        <div class="pojm-card-def">\${def}</div>
      </div>
    \`;
  }).join('');
}

function pojmFilter(cat, btn){
  pojmActiveCat = cat;
  document.querySelectorAll('.pojm-filter').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  pojm2Render();
}

function pojmClearSearch(){
  const inp = document.getElementById('pojm-search');
  if(inp){ inp.value = ''; pojm2Render(); }
}

function pojmToggleStar(term, btn){
  if(pojmStars[term]){
    delete pojmStars[term];
    btn.textContent = '☆';
    btn.classList.remove('on');
    btn.title = 'Spremi za učenje';
  } else {
    pojmStars[term] = true;
    btn.textContent = '★';
    btn.classList.add('on');
    btn.title = 'Ukloni iz mojih';
    if(typeof addXP === 'function') addXP(1);
  }
  try { localStorage.setItem('mt.hrv.h21.cit_stars', JSON.stringify(pojmStars)); } catch(e){}
}

// Init when Tab 4 loads
function pojmInit2(){
  if(document.getElementById('pojm-grid2')){
    pojm2Render();
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(pojmInit2, 150));
} else {
  setTimeout(pojmInit2, 250);
}



// ═══════════════════════════════════
// TAB 7 · REFERENTNA TABLICA
// ═══════════════════════════════════
function refToggleScale(btn){
  const sheet = document.querySelector('.ref-sheet');
  if(!sheet) return;
  sheet.classList.toggle('zoomed');
  if(btn) btn.textContent = sheet.classList.contains('zoomed') ? '📐 Vrati' : '📐 Zoom';
}




// ═══════════════════════════════════
// PARSER · RECENT HISTORY
// ═══════════════════════════════════
function parserShowHistory(){
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem('mt.hrv.h21.parser_hist') || '[]'); } catch(e){}
  
  const dropdown = document.getElementById('parser-history-list');
  if(!dropdown) return;
  
  if(hist.length === 0){
    dropdown.innerHTML = '<div class="parser-history-item" style="color:var(--t3);font-style:italic;cursor:default">Nema povijesti — analiziraj prvu rečenicu!</div>';
    dropdown.style.display = 'block';
    return;
  }
  
  // Show last 5, most recent first
  const recent = hist.slice(-5).reverse();
  dropdown.innerHTML = \`
    <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:1.5px;color:var(--gold);margin-bottom:8px;display:flex;justify-content:space-between;align-items:center">
      <span>📜 ZADNJIH \${recent.length} ANALIZA</span>
      <button class="nb-btn" style="padding:2px 8px;font-size:9.5px" onclick="parserClearHistory()">🗑 Obriši</button>
    </div>
    \${recent.map(h => \`
      <div class="parser-history-item" onclick="parserExample('\${h.text.replace(/'/g, "\\\\'")}'); document.getElementById('parser-history-list').style.display='none'">
        <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\${h.text}</span>
        <span style="color:var(--t3);font-size:10px;flex-shrink:0;margin-left:10px">\${new Date(h.date).toLocaleDateString('hr-HR', {day:'numeric', month:'numeric'})}</span>
      </div>
    \`).join('')}
  \`;
  dropdown.style.display = 'block';
}

function parserHideHistory(){
  const dropdown = document.getElementById('parser-history-list');
  if(dropdown) dropdown.style.display = 'none';
}

function parserClearHistory(){
  if(confirm('Obrisati svu povijest analiza?')){
    try { localStorage.removeItem('mt.hrv.h21.parser_hist'); } catch(e){}
    parserShowHistory();
  }
}


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
  const _d0=document.getElementById('diag0');if(_d0)_d0.dataset.state='dismissed';
}
function diag0Start(){
  d0idx=0;d0score=0;
  const _d0=document.getElementById('diag0');if(_d0)_d0.dataset.state='quiz';
  d0Show();
}
function d0Show(){
  if(d0idx>=DIAG0_Q.length){diag0End();return;}
  const q=DIAG0_Q[d0idx];
  const fill=document.getElementById('d0fill');
  if(fill)fill.style.width=((d0idx/DIAG0_Q.length)*100)+'%';
  const num=document.getElementById('d0num');
  if(num)num.textContent=\`Pitanje \${d0idx+1} / \${DIAG0_Q.length}\`;
  const text=document.getElementById('d0text');
  if(text)text.textContent=q.q;
  const opts=document.getElementById('d0opts');
  if(!opts)return;
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
  const _d0=document.getElementById('diag0');if(_d0)_d0.dataset.state='result';
  const pct=Math.round(d0score/DIAG0_Q.length*100);
  let msg='', btnTxt='', btnTab=1;
  if(pct>=80){
    msg='<strong>Odlično!</strong> Osnove H21 imaš savladane. Preporučujem Referentnu tablicu — svi ključni podaci o morfologiji na jednom mjestu za brzu provjeru.';
    btnTxt='📊 Referentna tablica →'; btnTab=7;
  } else if(pct>=60){
    msg='<strong>Dobro!</strong> Nekoliko rupa postoji — provjeri Tab 1-4 za vrste riječi, padeže, glagolske oblike i tvorbu.';
    btnTxt='📚 Promjenjive riječi →'; btnTab=1;
  } else {
    msg='<strong>Kreni od osnova.</strong> Preporučujem: Teorija (Tab 0) + Promjenjive riječi (Tab 1). 6 rečeničnih članova (SPO-AAP), vrste rečenica i veznici su temelj sintakse — sigurno ih nauči napamet.';
    btnTxt='📖 Teorija →'; btnTab=0;
  }
  (document.getElementById('d0rtitle')||{}).textContent=\`\${d0score} / \${DIAG0_Q.length} — \${pct}%\`;
  (document.getElementById('d0rdesc')||{}).innerHTML=msg;
  const btn=document.getElementById('d0rbtn');
  if(btn){btn.textContent=btnTxt;btn.onclick=()=>sw(btnTab);}
}
function diag0Reset(){const _d0=document.getElementById('diag0');if(_d0)_d0.dataset.state='intro';}

/* ═══════════════════════════════════
   CITATNIK
═══════════════════════════════════ */
const CAT_COLORS={alegorija:'p-go',vjera:'p-t',judita:'p-br',holofern:'p-r',domoljublje:'p-g',stih:'p-pa'};
let citStars={};
try{citStars=JSON.parse(localStorage.getItem('mt.hrv.h21.cit_stars')||'{}')}catch(e){}
let citActive='sve';

function togStar(i,el){
  citStars[i]=!citStars[i];
  el.classList.toggle('starred',!!citStars[i]);
  try{localStorage.setItem('mt.hrv.h21.cit_stars',JSON.stringify(citStars))}catch(e){}
}

/* ═══════════════════════════════════
   POJMOVNIK
═══════════════════════════════════ */
let pojActive='sve';

/* ═══════════════════════════════════
   ESEJ ALAT
═══════════════════════════════════ */
function alTab(btn,pane){
  document.querySelectorAll('.alat-tab').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.alat-pane').forEach(p=>p.classList.remove('on'));
  if(btn)btn.classList.add('on');
  const p=document.getElementById(pane);
  if(p)p.classList.add('on');
}
function cpyTeza(el){
  navigator.clipboard.writeText(el.textContent.trim()).catch(()=>{});
  el.classList.add('copied');
  setTimeout(()=>el.classList.remove('copied'),1500);
}

/* Scanner */
function scannerUpdate(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  const txt=ta.value;
  const words=txt.trim()?txt.trim().split(/\\s+/).length:0;
  const lines=txt.split('\\n').filter(function(l){return l.trim().length>0;}).length;
  const syl=words>0?Math.round(txt.replace(/[^aeiouAEIOUčšžđćČŠŽĐĆ]/g,'').length/Math.max(words,1)*10)/10:0;
  const we=document.getElementById('sc-words');
  if(we){const wn=we.querySelector('.wc-stat-num');if(wn)wn.textContent=words;}
  const le=document.getElementById('sc-lines');
  if(le){const ln=le.querySelector('.wc-stat-num');if(ln)ln.textContent=lines;}
  const se=document.getElementById('sc-syl');
  if(se){const sn=se.querySelector('.wc-stat-num');if(sn)sn.textContent=syl||'—';}
  try{localStorage.setItem('mt.hrv.h21.wc_text',txt);}catch(e){}
}
(function(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h21.wc_text');if(sv){ta.value=sv;scannerUpdate();}}catch(e){}
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
  el.innerHTML=\`<div class="qz-start" style="text-align:center;padding:40px 24px;background:linear-gradient(135deg, rgba(233,180,70,.05) 0%, transparent 100%);border:1px solid var(--bd);border-radius:var(--r2)">
    <div style="font-size:56px;margin-bottom:16px">🧠</div>
    <h3 style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);margin:0 0 12px 0">25 pitanja · H20 Morfologija</h3>
    <p style="font-size:14px;line-height:1.6;color:var(--t2);max-width:560px;margin:0 auto 24px">Pitanja pokrivaju sve teme: <strong>vrste riječi, padeži, glagolski oblici, sklanjanje, tvorba</strong>. Svako pitanje daje <em>konkretan primjer</em> — analiziraj, prepoznaj, objasni. Na kraju dobivaš ocjenu i objašnjenja.</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:20px">
      <div style="padding:8px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:20px;font-family:var(--mono);font-size:11px;color:var(--t2)">📚 10 vrsta riječi</div>
      <div style="padding:8px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:20px;font-family:var(--mono);font-size:11px;color:var(--t2)">📐 7 padeža</div>
      <div style="padding:8px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:20px;font-family:var(--mono);font-size:11px;color:var(--t2)">⚙️ Glagolski oblici</div>
      <div style="padding:8px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:20px;font-family:var(--mono);font-size:11px;color:var(--t2)">🏗 Tvorba riječi</div>
    </div>
    <button class="nb-btn primary" style="font-size:14px;padding:14px 28px" onclick="qzStart()">Započni kviz →</button>
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
    <div style="text-align:right;margin-top:12px"><button class="nb-btn primary qz-next" id="qz-next" onclick="qzNext()" style="display:none">Sljedeće →</button></div>
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
  if(pct>=90){grade='ODLIČAN';msg='Spreman/na si za maturu iz H21 — razumiješ sve vrste riječi, padeže i glagolske oblike.';ico='🏆';}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno znanje. Provjeri neispravne odgovore i ponovi Tab 1-4.';ico='💪';}
  else if(pct>=60){grade='DOBAR';msg='Ponoviti: rečenične članove, vrste rečenica i složene rečenice (vidi Tab 7 Referentna tablica).';ico='📚';}
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
      <button class="nb-btn primary" onclick="qzStart()">🔁 Ponovo</button>
      <button class="nb-btn" onclick="sw(4)">📚 Pojmovnik</button>
      <button class="nb-btn" onclick="sw(7)">📊 Referentna tablica</button>
    </div>
    \${wrongHtml}
  </div>\`;

  saveScoreHistory(qzScore,KVIZ_Q.length);
  markTab(6);
  if(typeof recordQuizResult === 'function') recordQuizResult(qzScore, KVIZ_Q.length);
}

/* ═══════════════════════════════════
   CHECKPOINT
═══════════════════════════════════ */
let CP_STATE={done:{}};
try{const s=localStorage.getItem('mt.hrv.h21.cp');if(s)CP_STATE=JSON.parse(s);}catch(e){}

const CP_HINTS=['Tab 0','Tab 0','Tab 0','Tab 1','Tab 1','Tab 1','Tab 1','Tab 2','Tab 3','Tab 3'];
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
  try{localStorage.setItem('mt.hrv.h21.cp',JSON.stringify(CP_STATE));}catch(e){}
  cpRender();
  if(typeof updateDashboard === 'function') updateDashboard();
  if(CP_STATE.done[i] && typeof addXP === 'function') addXP(5, 'Checkpoint savladan');
}
function cpUpdateProgress(){
  const done=Object.values(CP_STATE.done).filter(Boolean).length;
  const total=CP_ITEMS.length;
  const pct=Math.round(done/total*100);
  (document.getElementById('cp-pct')||{}).textContent=\`\${done} / \${total}\`;
  (document.getElementById('cp-bar')||{style:{}}).style.width=pct+'%';
  (document.getElementById('sb-prog-bar')||{style:{}}).style.width=pct+'%';
  (document.getElementById('sb-prog-pct')||{}).textContent=pct+'%';
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
    else if(pct>=40)msg='<strong>Napredak!</strong> Nastavak: koristi Sintaktički parser (Tab 5) i radi kviz ponovno dok ne dobiješ 85%+.';
    else msg='Još je posla. Počni s Teorijom (Tab 0) i prođi sve sekcije.';
    sumTxt.innerHTML=msg;
  }
}
function cpReset(){
  CP_STATE={done:{}};
  try{localStorage.removeItem('mt.hrv.h21.cp');}catch(e){}
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
try{TAB_DONE=JSON.parse(localStorage.getItem('mt.hrv.h21.tab_done')||'{}')}catch(e){}

function markTab(n){
  TAB_DONE[n]=true;
  try{localStorage.setItem('mt.hrv.h21.tab_done',JSON.stringify(TAB_DONE))}catch(e){}
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
  '💡 <strong>Tab 0 tip:</strong> Sintaksa je o odnosima riječi u rečenici. Razina: riječ → sintagma → rečenica → tekst.',
  '💡 <strong>Tab 1 tip:</strong> 6 rečeničnih članova (SPO-AAP): subjekt, predikat, objekt, atribut, apozicija, priložne oznake.',
  '💡 <strong>Tab 2 tip:</strong> Prosta (1 predikat) vs. složena (2+ predikata). Infinitiv NE računa kao predikat!',
  '💡 <strong>Tab 3 tip:</strong> Nezavisno složene: ravnopravne (i, ali, ili). Zavisno složene: jedna ovisi o drugoj (da, jer, ako).',
  '💡 <strong>Tab 4 tip:</strong> 70 pojmova — filtriraj po kategoriji. Crvene zvjezdice = najčešće NCVVO pitanja.',
  '💡 <strong>Tab 5 tip:</strong> Sintaktički parser identificira rečenične članove i tip rečenice. Tree visualizer daje vizualni prikaz!',
  '💡 <strong>Tab 6 tip:</strong> 30 kviz pitanja pokrivaju sve teme sintakse. Cilj: 85%+ prije mature.',
  '💡 <strong>Tab 7 tip:</strong> Referentna tablica s veznicima i pravilima interpunkcije — isprintaj i drži uz sebe.',
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
    const names={H11:'H11 · Stari hrv. pisci',H12:'H12 · Marulić · Judita',H13:'H13 · Gundulić · Dubravka',H14:'H14 · Preporod · Mažuranić',H15:'H15 · Šenoa · Prijan Lovro',H16:'H16 · Krleža · Glembajevi',H17:'H17 · Stilske figure',H19:'H19 · Fonetika',H20:'H20 · Morfologija'};
    const el=document.getElementById('from-banner');
    const txt=document.getElementById('from-txt');
    if(el&&txt){
      txt.textContent='📎 Nastaviš učenje iz '+(names[from]||from)+' → H21 · Sintaksa';
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h21.kviz_hist')||'[]');
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h21.kviz_hist')||'[]');
    hist.push({score,total,date:new Date().toISOString()});
    localStorage.setItem('mt.hrv.h21.kviz_hist',JSON.stringify(hist.slice(-10)));
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
  easy:[
    {a:'Imenica',b:'tko? što? (žena, stol)'},
    {a:'Glagol',b:'radnja/stanje (pisati, trčati)'},
    {a:'Pridjev',b:'kakav? čiji? (lijep, majčin)'},
    {a:'Prilog',b:'opisuje glagol (brzo, ovdje)'},
  ],
  medium:[
    {a:'Nominativ',b:'1. padež · subjekt · tko? što?'},
    {a:'Akuzativ',b:'4. padež · izravni objekt · koga? što?'},
    {a:'Lokativ',b:'6. padež · mjesto · UVIJEK s prijedlogom'},
    {a:'Instrumental',b:'7. padež · sredstvo · s kim? s čim?'},
  ],
  hard:[
    {a:'Povratno-posvojna',b:'Zamjenica SVOJ — pripadnost subjektu'},
    {a:'Svršeni vid',b:'Glagol završene radnje — s prefiksom (napisati)'},
    {a:'Paukal',b:'Oblik imenice uz 2, 3, 4 — kao G jd. (dva stola)'},
    {a:'Pluralia tantum',b:'Imenice samo u množini (vrata, novine)'},
  ]
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
    easy:'📚 Vrste riječi → pitanje (4 osnovna)',
    medium:'📐 Padeži → funkcija (4 ključna)',
    hard:'🔧 Napredni pojmovi (4 zamke)'
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
      <button class="fcb \${activeClass('easy')}" onclick="mgInit('easy')" style="margin:3px" title="Vrste riječi i pitanja">📚 Lagano (4)</button>
      <button class="fcb \${activeClass('medium')}" onclick="mgInit('medium')" style="margin:3px" title="Padeži i funkcije">📐 Srednje (4)</button>
      <button class="fcb \${activeClass('hard')}" onclick="mgInit('hard')" style="margin:3px" title="Napredni pojmovi i zamke">🔧 Teško (4)</button>
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
  // === MORFEMI (5) ===
  {t:'Morfem',d:'Najmanja jezična jedinica sa značenjem ili gramatičkom funkcijom. Primjer: ljep-ot-a = 3 morfema (korijen + sufiks + nastavak).',kat:'morfem'},
  {t:'Korijen (osnova)',d:'Središnji morfem riječi koji nosi leksičko značenje. Zajednički je srodnim riječima (ljep- u ljepota, ljepši, uljepšati).',kat:'morfem'},
  {t:'Prefiks',d:'Morfem ispred korijena koji mijenja značenje. Hrv.: na-, do-, iz-, pre-, uz-, pod-, nad-, ne-, protu-, među-.',kat:'morfem'},
  {t:'Sufiks',d:'Tvorbeni morfem iza korijena koji stvara novu riječ. Razlika od nastavka: sufiks NE mijenja se, nastavak DA.',kat:'morfem'},
  {t:'Nastavak',d:'Gramatički morfem na kraju — označava padež (-a, -e, -om), lice (-m, -š), rod/broj. Mijenja se kroz oblike.',kat:'morfem'},
  
  // === VRSTE RIJEČI (5) ===
  {t:'10 vrsta riječi',d:'5 PROMJENJIVIH: imenice, pridjevi, zamjenice, brojevi, glagoli. 5 NEPROMJENJIVIH: prilozi, prijedlozi, veznici, uzvici, čestice.',kat:'vrste'},
  {t:'Imenica vs. pridjev',d:'Imenica = tko/što? (stvar). Pridjev = kakav/čiji? (svojstvo). Pridjev se slaže s imenicom u rodu/broju/padežu.',kat:'vrste'},
  {t:'Zamjenice — 7 vrsta',d:'Osobne, povratne (se), posvojne (moj), povratno-posvojna (svoj), pokazne (ovaj), upitne/odnosne (tko), neodređene (netko).',kat:'vrste'},
  {t:'Svoj vs. njegov',d:'„Ivan uzima SVOJU knjigu" = Ivanovu (povratno-posvojna). „Ivan uzima NJEGOVU knjigu" = nečiju drugu (posvojna).',kat:'vrste'},
  {t:'Prilog vs. pridjev',d:'Prilog opisuje glagol (trči BRZO). Pridjev opisuje imenicu (BRZI vlak). Test: dodaj imenicu → ako radi, pridjev.',kat:'vrste'},
  
  // === PADEŽI (5) ===
  {t:'7 padeža (NADIVLA)',d:'N (tko?), G (čega? posvojni), D (komu?), A (koga? objekt), V (dozivanje), L (gdje? tema), I (čime?). Mnemotehnika: NADIVLA.',kat:'padez'},
  {t:'A vs. L razlika',d:'Isti prijedlozi (u, na, pod, nad): A = kretanje (u ŠKOLU, kamo?), L = mirovanje (u ŠKOLI, gdje?).',kat:'padez'},
  {t:'Prijedlozi uz G',d:'od, do, iz, bez, kod, preko, pokraj, poslije, prije, radi, zbog, protiv, između. G je najbogatiji padež prijedlozima.',kat:'padez'},
  {t:'Vokativ (V)',d:'Padež dozivanja. Često s 1. palatalizacijom: Ivan → Ivane, čovjek → čovječe, Bog → Bože, majka → majko!',kat:'padez'},
  {t:'Instrumental (I)',d:'Sredstvo (BEZ prijedloga: pišem OLOVKOM) vs. društvo (S + I: s PRIJATELJEM). Različito značenje!',kat:'padez'},
  
  // === GLAGOLI (5) ===
  {t:'7 glagolskih vremena',d:'Prezent, perfekt (sam čitao), aorist, imperfekt, pluskvamperfekt, futur I (čitat ću), futur II (budem čitao).',kat:'glagol'},
  {t:'Glagolski vid',d:'Svršeni (napisati — završeno) vs. nesvršeni (pisati — u tijeku). Prefiksi perfektiviziraju: pisati → NApisati.',kat:'glagol'},
  {t:'Futur I tvorba',d:'Infinitiv (bez -i) + nenaglašeni „htjeti" (ću, ćeš, će...). Primjer: čitati → čitat ću, vidjeti → vidjet ću.',kat:'glagol'},
  {t:'Perfekt tvorba',d:'Nenaglašeni prezent „biti" (sam, si, je, smo, ste, su) + glagolski pridjev radni. Primjer: čitao SAM, pročitala JE.',kat:'glagol'},
  {t:'Imperativ',d:'Zapovijedni način. 3 oblika: 2. jd. (čitaj!), 1. mn. (čitajmo!), 2. mn. (čitajte!). Samo u 3 lica.',kat:'glagol'},
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
  (document.getElementById('fc-prev-dyn')||{}).disabled=(fcIdx===0);
  (document.getElementById('fc-next-dyn')||{}).disabled=(fcIdx===FC_DATA.length-1);
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
   CHECKLIST (Esej alat AT7)
═══════════════════════════════════ */
/* ═══════════════════════════════════
   CHECKPOINT WRITER
═══════════════════════════════════ */
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

/* ═══════════════════════════════════
   POJMOVNIK FLASHCARD MODE (H11 pj2*)
═══════════════════════════════════ */


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

function pj2Next(){
  if(pj2Idx < pj2Data.length-1){ pj2Idx++; pj2Render(); }
}

function pj2Prev(){
  if(pj2Idx > 0){ pj2Idx--; pj2Render(); }
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
    
    // Tab-specific shortcuts
    if(activeTab === 5){ // Scanner tab
      if(e.key === 's' || e.key === 'S'){ e.preventDefault(); document.getElementById('ms-input')?.focus(); return; }
      if(e.key === 'a' || e.key === 'A'){ e.preventDefault(); document.getElementById('ai-input')?.focus(); return; }
    }
    if(activeTab === 3){ // Decliner tab
      if(e.key === 'd' || e.key === 'D'){ e.preventDefault(); document.getElementById('decl-input')?.focus(); return; }
    }
    
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
          <span style="grid-column:1/-1;height:1px;background:var(--bd);margin:6px 0"></span>
          <span style="grid-column:1/-1;font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--gold)">PO TABOVIMA</span>
          <span><span class="kbd">D</span></span><span>Tab 3 — fokus složene rečenice</span>
          <span><span class="kbd">S</span></span><span>Tab 5 — fokus Sintaktički parser</span>
          <span><span class="kbd">A</span></span><span>Tab 5 — fokus AI tutor</span>
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



// (Removed: Gamification — XP, Streak, Achievements per user request)
// Stub no-op functions to prevent broken callers
function addXP(){}
function recordTabVisit(){}
function recordQuizResult(){}
function recordScan(){}
function recordDecline(){}
function recordParserUse(){}
function updateStreak(){}
function updateDashboard(){}

// (Removed: Quick Search Cmd+K — restored to classic H19/H18 style)

</script>


<!-- TIP BAR -->
<div class="tip-bar" id="tip-bar">
  <span class="tip-bar-close" onclick="document.getElementById('tip-bar').classList.remove('show')">✕</span>
  <span id="tip-bar-txt">💡 <strong>Tip:</strong> Koristi Sintaktički parser za analizu rečenica i Tree visualizer za vizualni prikaz.</span>
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
  try { localStorage.setItem('mt.hrv.h21.prog', p); } catch(e){}
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
.nav-row:has(> :only-child){justify-content:flex-end}
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
  .sidebar,.tabs,.sb-hamburger,.tip-bar,.discere-banner,.reveal-lock-btn,
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

/* === H20 POJMOVNIK CUSTOM CSS === */
.pojm-fbt{font-family:var(--display);font-size:12px;font-weight:600;padding:7px 13px;border-radius:20px;background:transparent;border:1.5px solid var(--bd);color:var(--t2);cursor:pointer;transition:all .2s ease;letter-spacing:.2px;white-space:nowrap;display:inline-flex;align-items:center;gap:4px}
.pojm-fbt:hover{border-color:var(--gold);color:var(--t1);transform:translateY(-1px)}
.pojm-fbt.on{background:var(--gold);border-color:var(--gold);color:#0F0605;box-shadow:0 2px 8px rgba(233,180,70,.25);font-weight:700}
.pojm-fbt.on:hover{background:var(--gold);color:#0F0605;transform:translateY(-1px)}
@media (max-width:480px){
  .pojm-fbt{font-size:11px;padding:6px 10px}
}

/* pojm-grid cards */
.pojm-grid-wrap{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;margin:16px 0}
.pojm-card-h20{padding:14px 16px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);cursor:pointer;transition:all .2s;position:relative}
.pojm-card-h20:hover{border-color:var(--gold);transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.2)}
.pojm-card-h20 .pc-kat{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--bronze);text-transform:uppercase;margin-bottom:6px}
.pojm-card-h20 .pc-term{font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:6px;line-height:1.3}
.pojm-card-h20 .pc-def{font-size:12px;line-height:1.5;color:var(--t2);display:none}
.pojm-card-h20.open .pc-def{display:block;margin-top:8px;padding-top:8px;border-top:1px solid var(--bd)}
.pojm-card-h20 .pc-hint{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px}
.pojm-card-h20.open .pc-hint{display:none}

/* === PRINT CSS (za A4 ispis Tab 7) === */
@media print {
  body { background: white !important; color: black !important; }
  .sidebar, .tabs, nav, footer, .tab-done, .tab-badge, .nav-row, 
  .discere-banner, .from-banner, .countdown, .progress-ring,
  .tip-bar, button, .nb-btn { display: none !important; }
  .layer { display: block !important; background: white !important; }
  .layer:not(#l7) { display: none !important; }
  main, .content-wrap { width: 100% !important; max-width: 100% !important; padding: 0 !important; margin: 0 !important; background: white !important; }
  table { page-break-inside: avoid; background: white !important; }
  .box-int, .box-key, .box-warn, .box-signal { background: #f9f9f9 !important; color: black !important; border: 1px solid #ccc !important; }
  h1, h2, h3, h4, .sec-badge { color: black !important; }
  .pill { background: white !important; color: black !important; border: 1px solid #ccc !important; }
  * { box-shadow: none !important; }
  @page { size: A4; margin: 1.5cm; }
}

/* === H20 PREMIUM VIZUALNE NADOGRADNJE === */

/* (Hero v1 gradient block consolidated into "Hero gradient + shimmer" below) */

/* Badge animation za hero chips */
.hchip{position:relative;overflow:hidden;transition:all .3s ease}
.hchip:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(233,180,70,.15)}
.hchip::after{
  content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent);
  transition:left .6s ease;
}
.hchip:hover::after{left:100%}

/* Section headers — više dramatični */
.sec-hdr{margin:32px 0 16px}
.sec-badge{
  position:relative;
  background:linear-gradient(135deg, var(--ele) 0%, var(--bg) 100%);
  border:1px solid var(--bd);
  padding:10px 20px;
  border-radius:24px;
  font-weight:700;
  letter-spacing:.5px;
  box-shadow:0 2px 8px rgba(0,0,0,.1);
}
.sec-line{
  background:linear-gradient(90deg, transparent, var(--bd), transparent);
  height:1px;
}

/* Scene cards — premium hover ===*/
.scene-card{
  transition:all .3s ease;
  position:relative;
  overflow:hidden;
}
.scene-card::before{
  content:'';
  position:absolute;
  top:0;left:0;right:0;
  height:3px;
  background:linear-gradient(90deg, var(--gold), var(--bronze));
  transform:scaleX(0);
  transform-origin:left;
  transition:transform .4s ease;
}
.scene-card:hover{
  transform:translateY(-3px);
  box-shadow:0 8px 24px rgba(0,0,0,.25);
  border-color:var(--gold)
}
.scene-card:hover::before{transform:scaleX(1)}
.scene-card.open::before{transform:scaleX(1)}

/* Box variations — accent borders */
.box-int{border-left:3px solid var(--blue);background:linear-gradient(90deg, rgba(74,144,217,.05) 0%, transparent 100%)}
.box-key{border-left:3px solid var(--gold);background:linear-gradient(90deg, rgba(233,180,70,.06) 0%, transparent 100%)}
.box-warn .bw-body{border-left:3px solid var(--red)!important}
.box-signal{border-left:3px solid var(--bronze);background:linear-gradient(90deg, rgba(176,107,33,.05) 0%, transparent 100%)}

/* Tablice — modernize */
table{border-radius:var(--r2);overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.1)}
thead tr{background:linear-gradient(135deg, var(--ele) 0%, var(--bg) 100%)!important}
table tbody tr{transition:background .15s ease}
table tbody tr:hover{background:rgba(233,180,70,.04)!important}

/* Pills — better gradient */
.pill{
  background:linear-gradient(135deg, var(--ele) 0%, var(--bg) 100%);
  border:1px solid var(--bd);
  transition:all .2s ease;
}
.pill:hover{transform:translateY(-1px);box-shadow:0 2px 6px rgba(0,0,0,.15)}

/* Pojm cards — premium */
.pojm-card-h20{
  position:relative;
  overflow:hidden;
  transition:all .25s ease;
  background:linear-gradient(135deg, var(--ele) 0%, transparent 100%);
}
.pojm-card-h20::before{
  content:'';
  position:absolute;
  top:0;left:0;
  width:3px;height:100%;
  background:var(--gold);
  transform:scaleY(0);
  transform-origin:top;
  transition:transform .3s ease;
}
.pojm-card-h20:hover::before,
.pojm-card-h20.open::before{transform:scaleY(1)}

/* nb-btn — premium hover */
.nb-btn{transition:all .2s ease;position:relative;overflow:hidden}
.nb-btn:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,.15)}
.nb-btn.primary{
  background:linear-gradient(135deg, var(--gold) 0%, #d4a045 100%);
  color:#0F0605;
  border:none;
  font-weight:700;
}
.nb-btn.primary:hover{
  background:linear-gradient(135deg, #f0c168 0%, var(--gold) 100%);
  box-shadow:0 4px 16px rgba(233,180,70,.35);
}

/* Audio button — distinct style */
button[onclick*="speakWord"]{
  background:linear-gradient(135deg, rgba(74,144,217,.1) 0%, rgba(74,144,217,.05) 100%)!important;
  border:1px solid rgba(74,144,217,.3)!important;
  transition:all .2s ease;
}
button[onclick*="speakWord"]:hover{
  background:linear-gradient(135deg, rgba(74,144,217,.2) 0%, rgba(74,144,217,.1) 100%)!important;
  border-color:var(--blue)!important;
  transform:scale(1.05);
}

/* Input field — premium */
input#scan-input{
  transition:all .25s ease;
  background:linear-gradient(135deg, var(--bg) 0%, var(--ele) 100%);
}
input#scan-input:focus{
  border-color:var(--gold)!important;
  box-shadow:0 0 0 3px rgba(233,180,70,.15);
}

/* Tab navigation — animated underline */
.tab{position:relative;transition:all .2s ease}
.tab::after{
  content:'';
  position:absolute;
  bottom:-1px;left:50%;
  width:0;height:2px;
  background:var(--gold);
  transition:all .3s ease;
  transform:translateX(-50%);
}
.tab:hover::after,.tab.on::after{width:80%}

/* Diagonal stripe pattern accent for premium feel */
.box-key{
  background-image:linear-gradient(90deg, rgba(233,180,70,.06) 0%, transparent 100%),
    repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(233,180,70,.02) 12px, rgba(233,180,70,.02) 13px);
}

/* Stats cards — glow effect */
[style*="grid-template-columns:repeat(auto-fit,minmax(120px,1fr))"] > div{
  transition:all .25s ease;
  cursor:default;
}
[style*="grid-template-columns:repeat(auto-fit,minmax(120px,1fr))"] > div:hover{
  transform:translateY(-2px);
  box-shadow:0 4px 16px rgba(233,180,70,.15);
  border-color:var(--gold)!important;
}

/* Timeline dots — pulse */
@keyframes pulse-dot{
  0%,100%{box-shadow:0 0 0 0 rgba(233,180,70,.4)}
  50%{box-shadow:0 0 0 8px rgba(233,180,70,0)}
}
[style*="border-radius:50%"][style*="background:var(--gold)"]{
  animation:pulse-dot 2s ease-in-out infinite;
}

/* Smooth scroll */
html{scroll-behavior:smooth}

/* Selection color */
::selection{background:var(--gold);color:#0F0605}

/* Tag pills — animated */
.tags .pill{animation:tagFadeIn .4s ease backwards}
.tags .pill:nth-child(1){animation-delay:.05s}
.tags .pill:nth-child(2){animation-delay:.1s}
.tags .pill:nth-child(3){animation-delay:.15s}
.tags .pill:nth-child(4){animation-delay:.2s}
.tags .pill:nth-child(5){animation-delay:.25s}
@keyframes tagFadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}

/* Layer transition */
.layer{animation:layerFade .3s ease}
@keyframes layerFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}

/* Mobile improvements */
@media (max-width:768px){
  .sec-badge{font-size:11px;padding:8px 14px}
  .scene-card{padding:14px}
  .box-int,.box-key,.box-warn,.box-signal{padding:14px}
}

/* === REFERENTNA TABLICA (Tab 7) === */
.ref-section {
  background: var(--ele);
  border: 1px solid var(--bd);
  border-radius: var(--r2);
  padding: 18px 20px;
  margin-bottom: 20px;
  page-break-inside: avoid;
}
.ref-h1 {
  font-family: var(--display);
  font-size: 18px;
  font-weight: 700;
  color: var(--gold);
  border-bottom: 2px solid rgba(233,180,70,.3);
  padding-bottom: 10px;
  margin-bottom: 14px;
}
.ref-subttl {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 1.5px;
  color: var(--t2);
  font-weight: 700;
  margin: 14px 0 8px;
  text-transform: uppercase;
}
.ref-tbl {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--mono);
  font-size: 12px;
  margin: 6px 0;
}
.ref-tbl thead tr {
  background: var(--bg);
  border-bottom: 2px solid var(--bd);
}
.ref-tbl th {
  padding: 8px 10px;
  text-align: left;
  color: var(--gold);
  font-weight: 700;
  font-size: 11px;
}
.ref-tbl td {
  padding: 6px 10px;
  border-bottom: 1px solid var(--bd);
  color: var(--t1);
  vertical-align: top;
}
.ref-tbl tbody tr:hover {
  background: rgba(233,180,70,.03);
}
.ref-tbl tbody tr:last-child td {
  border-bottom: none;
}
.ref-note {
  margin-top: 12px;
  padding: 10px 14px;
  background: rgba(74,144,217,.05);
  border-left: 3px solid var(--blue);
  border-radius: var(--r1);
  font-size: 12px;
  line-height: 1.5;
  color: var(--t2);
}

/* Print mode */
.print-only { display: none; }

@media print {
  body { background: #fff !important; color: #000 !important; }
  .no-print { display: none !important; }
  .print-only { display: block !important; }
  
  header, .sidebar, .bottom-nav, .tabs-wrap, #rpbar, #btt, #sb-overlay, #tip-bar, .from-banner {
    display: none !important;
  }
  
  .content-wrap { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
  .layer { display: block !important; }
  .layer:not(#l7) { display: none !important; }
  
  .ref-section {
    background: #fff !important;
    border: 1px solid #999 !important;
    color: #000 !important;
    page-break-inside: avoid;
    break-inside: avoid;
    margin-bottom: 14px !important;
    padding: 12px 14px !important;
  }
  .ref-h1 {
    color: #000 !important;
    border-bottom: 2px solid #000 !important;
    font-size: 16px !important;
  }
  .ref-subttl {
    color: #000 !important;
    font-size: 10px !important;
  }
  .ref-tbl {
    font-size: 10px !important;
  }
  .ref-tbl thead tr {
    background: #eee !important;
    border-bottom: 1px solid #000 !important;
  }
  .ref-tbl th, .ref-tbl td {
    color: #000 !important;
    border-bottom: 1px solid #ccc !important;
  }
  .ref-note {
    background: #f5f5f5 !important;
    color: #000 !important;
    border-left: 2px solid #000 !important;
    font-size: 10px !important;
  }
  
  @page {
    size: A4;
    margin: 1.5cm;
  }
  
  h1, h2, h3, h4 { page-break-after: avoid; }
}



/* ═══════════════════════════════════
   H20 PREMIUM CSS UPGRADE
═══════════════════════════════════ */

/* Hero gradient + shimmer */
.hero{
  position:relative;
  overflow:hidden;
}
.hero::before{
  content:'';
  position:absolute;
  top:-50%;left:-50%;width:200%;height:200%;
  background:radial-gradient(circle at 30% 50%, rgba(233,180,70,.06) 0%, transparent 40%),
             radial-gradient(circle at 70% 80%, rgba(74,144,217,.04) 0%, transparent 40%);
  pointer-events:none;
  animation:heroShimmer 12s ease-in-out infinite;
}
@keyframes heroShimmer{
  0%,100%{transform:translate(0,0) scale(1)}
  50%{transform:translate(2%,-2%) scale(1.05)}
}

/* Scene cards — premium hover */
.scene-card{
  position:relative;
  transition:all .25s cubic-bezier(.4,0,.2,1);
  border-left:3px solid transparent;
}
.scene-card:hover:not(.open){
  border-left-color:var(--gold);
  transform:translateX(2px);
  box-shadow:-2px 0 12px rgba(233,180,70,.08), 0 4px 20px rgba(0,0,0,.15);
}
.scene-card.open{
  border-left-color:var(--gold);
  box-shadow:-3px 0 16px rgba(233,180,70,.12), 0 6px 28px rgba(0,0,0,.2);
}
.scene-card .scene-arrow{
  transition:transform .3s cubic-bezier(.4,0,.2,1);
}
.scene-card.open .scene-arrow{
  transform:rotate(180deg);
  color:var(--gold);
}

/* Box accents — colored left borders for visual hierarchy */
.box-int{ border-left:3px solid var(--gold); }
.box-key{ border-left:3px solid var(--blue); }
.box-warn{ border-left:3px solid var(--red); }
.box-signal{ border-left:3px solid var(--green); }

/* Tables — premium hover */
table tbody tr{
  transition:background .15s ease;
}
table tbody tr:hover{
  background:rgba(233,180,70,.04);
}

/* Pills — subtle gradient */
.pill, .hchip{
  background:linear-gradient(135deg, var(--ele) 0%, var(--bg) 100%);
  transition:all .2s ease;
}
.pill:hover, .hchip:hover{
  transform:translateY(-1px);
  box-shadow:0 2px 8px rgba(0,0,0,.15);
}

/* Sec-hdr — animated underline */
.sec-hdr{
  position:relative;
}
.sec-badge{
  position:relative;
  z-index:1;
}
.sec-line{
  background:linear-gradient(90deg, transparent, var(--bd), transparent);
}

/* Tab indicators — pulse on done */
.tab-done{
  animation:tabDonePulse 2s ease-in-out infinite;
}
@keyframes tabDonePulse{
  0%,100%{opacity:1}
  50%{opacity:.6}
}

/* Box-int label — premium glow */
.box-int-lbl{
  text-shadow:0 0 12px rgba(233,180,70,.3);
}

/* Buttons — premium transitions */
.nb-btn{
  transition:all .2s cubic-bezier(.4,0,.2,1);
}
.nb-btn:hover{
  transform:translateY(-1px);
  box-shadow:0 4px 16px rgba(0,0,0,.2);
}
.nb-btn.primary:hover{
  box-shadow:0 4px 20px rgba(233,180,70,.3);
}

/* Quiz options — enhanced feedback */
.qz-opt{
  transition:all .2s cubic-bezier(.4,0,.2,1);
  position:relative;
  overflow:hidden;
}
.qz-opt:hover:not(.correct):not(.wrong){
  border-color:var(--gold);
  background:rgba(233,180,70,.05);
  transform:translateX(2px);
}
.qz-opt.correct{
  background:rgba(80,200,120,.12);
  border-color:var(--green);
  animation:correctPulse .4s ease;
}
.qz-opt.wrong{
  background:rgba(224,82,82,.12);
  border-color:var(--red);
  animation:wrongShake .4s ease;
}
@keyframes correctPulse{
  0%{transform:scale(1)}
  50%{transform:scale(1.02)}
  100%{transform:scale(1)}
}
@keyframes wrongShake{
  0%,100%{transform:translateX(0)}
  25%{transform:translateX(-4px)}
  75%{transform:translateX(4px)}
}

/* Tags fade-in stagger */
.tags > * {
  opacity:0;
  animation:tagFadeIn .4s ease forwards;
}
.tags > *:nth-child(1){ animation-delay:.05s }
.tags > *:nth-child(2){ animation-delay:.1s }
.tags > *:nth-child(3){ animation-delay:.15s }
.tags > *:nth-child(4){ animation-delay:.2s }
.tags > *:nth-child(5){ animation-delay:.25s }
@keyframes tagFadeIn{
  to{opacity:1; transform:translateY(0)}
  from{opacity:0; transform:translateY(8px)}
}

/* Pojmovnik card hover */
.pojm-card-h20{
  transition:all .2s cubic-bezier(.4,0,.2,1);
}
.pojm-card-h20:hover{
  border-color:var(--gold);
  transform:translateY(-2px);
  box-shadow:0 6px 20px rgba(0,0,0,.15);
}

/* Mobile responsive — better small screens */
@media (max-width: 600px){
  .hero-title{ font-size:32px !important; }
  .scene-card{ padding:14px !important; }
  .ref-tbl{ font-size:11px !important; }
  .ref-h1{ font-size:16px !important; }
}

/* Decliner & Scanner result — fade in */
#ms-results > *, #decl-results > *{
  animation:resultFadeIn .4s ease;
}
@keyframes resultFadeIn{
  from{opacity:0; transform:translateY(8px)}
  to{opacity:1; transform:translateY(0)}
}

/* Keyboard shortcut hint */
.kbd{
  display:inline-block;
  padding:2px 7px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-bottom-width:2px;
  border-radius:4px;
  font-family:var(--mono);
  font-size:11px;
  color:var(--t1);
  font-weight:600;
}

/* Focus rings — accessibility */
button:focus-visible, [role="button"]:focus-visible{
  outline:2px solid var(--gold);
  outline-offset:2px;
}

/* Checkpoint item — animated check */
.cp-item.done .cp-box{
  animation:checkPop .3s ease;
}
@keyframes checkPop{
  0%{transform:scale(.8)}
  50%{transform:scale(1.15)}
  100%{transform:scale(1)}
}

/* Print improvements */
@media print{
  .hero, .countdown-wrap, header.hero{ display:none !important; }
  body{ background:#fff !important; color:#000 !important; }
  .scene-card{ box-shadow:none !important; border:1px solid #999 !important; }
  .scene-card .scene-body{ display:block !important; }
}



/* (Removed: HERO V2 — PREMIUM UPGRADE — restored to classic H19/H18 style) */
/* (Removed: TAB INTRO CARD — used at top of tabs — restored to classic H19/H18 style) */
/* ═══════════════════════════════════
   DETAILS / SUMMARY POLISH (collapsible)
═══════════════════════════════════ */
details summary{
  list-style:none;
  outline:none;
}
details summary::-webkit-details-marker{display:none}
details summary::marker{display:none;content:''}

details summary > span:last-child{
  transition:transform .2s ease;
}
details[open] summary > span:last-child{
  transform:rotate(180deg);
}
details > div{
  animation:detailsOpen .25s ease;
}
@keyframes detailsOpen{
  from{opacity:0;transform:translateY(-4px)}
  to{opacity:1;transform:translateY(0)}
}
details:hover summary{
  color:var(--gold);
}

/* ═══════════════════════════════════
   IMPROVED FOCUS STATES (a11y)
═══════════════════════════════════ */
*:focus{outline:none}
*:focus-visible{
  outline:2px solid var(--gold);
  outline-offset:2px;
  border-radius:4px;
}
button:focus-visible, [role="button"]:focus-visible, a:focus-visible{
  outline:2px solid var(--gold);
  outline-offset:3px;
}
input:focus-visible, textarea:focus-visible{
  outline:2px solid var(--gold);
  outline-offset:0;
  border-color:var(--gold) !important;
}

/* ═══════════════════════════════════
   PRINT — ensure detail/summary expand
═══════════════════════════════════ */
@media print{
  details{
    border:1px solid #999 !important;
    page-break-inside:avoid;
  }
  details > div{
    display:block !important;
  }
  details:not([open]) > div{
    display:block !important;
  }
  details > summary > span:last-child{
    display:none !important;
  }
}

/* ═══════════════════════════════════
   REDUCED MOTION (a11y)
═══════════════════════════════════ */
@media (prefers-reduced-motion: reduce){
  *, *::before, *::after{
    animation-duration:.01ms !important;
    animation-iteration-count:1 !important;
    transition-duration:.01ms !important;
    scroll-behavior:auto !important;
  }
  .floater, .ti-icon-ring, .status-dot, .badge-new{
    animation:none !important;
  }
}

/* ═══════════════════════════════════
   LARGE TEXT MODE (a11y user preference)
═══════════════════════════════════ */
@media (min-resolution: 192dpi){
  body{font-size:15px}
}


/* (Removed: QUICK SEARCH (Cmd/Ctrl+K) — restored to classic H19/H18 style) */
/* ═══════════════════════════════════
   TAB 1 · KLIK-IDENTIFIKACIJA VJEŽBA
═══════════════════════════════════ */
.rc-card{
  padding:22px 24px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  margin:16px 0;
  box-shadow:0 4px 16px rgba(0,0,0,.08);
}

.rc-meta{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  margin-bottom:14px;
  font-family:var(--mono);
  font-size:11px;
  color:var(--t3);
  letter-spacing:.5px;
  flex-wrap:wrap;
}
.rc-meta strong{color:var(--t1)}
.rc-progress{flex:1;min-width:120px}
.rc-diff{
  padding:3px 9px;
  border:1px solid;
  border-radius:10px;
  font-size:9.5px;
  letter-spacing:1px;
  font-weight:700;
}
.rc-score{color:var(--gold)}

.rc-question{
  font-family:var(--serif);
  font-size:14px;
  color:var(--t2);
  margin-bottom:14px;
  line-height:1.5;
}

.rc-sentence{
  padding:18px 20px;
  background:var(--bg);
  border:1px solid var(--bd);
  border-radius:var(--r1);
  margin-bottom:18px;
  font-family:var(--display);
  font-size:18px;
  line-height:1.7;
  color:var(--t1);
  text-align:center;
  letter-spacing:.2px;
}
.rc-word{
  display:inline-block;
  padding:2px 6px;
  border-radius:4px;
  transition:background .2s ease;
}
.rc-target{
  display:inline-block;
  padding:3px 10px;
  background:linear-gradient(135deg, rgba(233,180,70,.18), rgba(233,180,70,.08));
  border:1.5px solid var(--gold);
  border-radius:6px;
  color:var(--gold);
  font-weight:700;
  box-shadow:0 0 12px rgba(233,180,70,.2);
  animation:rcTargetPulse 2.5s ease-in-out infinite;
}
@keyframes rcTargetPulse{
  0%,100%{box-shadow:0 0 12px rgba(233,180,70,.2)}
  50%{box-shadow:0 0 20px rgba(233,180,70,.4)}
}
.rc-punct{
  color:var(--t3);
  margin-left:-4px;
}

.rc-options{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:8px;
  margin-bottom:8px;
}
.rc-opt{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:4px;
  padding:14px 8px;
  background:var(--bg);
  border:1.5px solid var(--bd);
  border-radius:var(--r1);
  cursor:pointer;
  transition:all .2s cubic-bezier(.4,0,.2,1);
  font-family:var(--mono);
  color:var(--t1);
}
.rc-opt:hover:not(:disabled){
  border-color:var(--opt-color);
  background:rgba(255,255,255,.02);
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,.15);
}
.rc-opt:disabled{
  cursor:not-allowed;
  opacity:.6;
}
.rc-opt-short{
  font-size:18px;
  font-weight:800;
  font-family:var(--display);
  color:var(--opt-color);
  letter-spacing:.5px;
}
.rc-opt-label{
  font-size:11px;
  letter-spacing:.5px;
  color:var(--t2);
  text-align:center;
}

.rc-opt.rc-correct{
  border-color:var(--green) !important;
  background:rgba(80,200,120,.1);
  opacity:1 !important;
  animation:rcBoom .4s ease;
}
.rc-opt.rc-correct .rc-opt-short{color:var(--green)}
.rc-opt.rc-correct .rc-opt-label{color:var(--green)}
.rc-opt.rc-wrong{
  border-color:var(--red) !important;
  background:rgba(224,82,82,.08);
  opacity:1 !important;
  animation:rcShake .35s ease;
}
.rc-opt.rc-wrong .rc-opt-short{color:var(--red)}

@keyframes rcBoom{
  0%{transform:scale(1)}
  40%{transform:scale(1.08)}
  100%{transform:scale(1)}
}
@keyframes rcShake{
  0%,100%{transform:translateX(0)}
  20%{transform:translateX(-6px)}
  40%{transform:translateX(6px)}
  60%{transform:translateX(-3px)}
  80%{transform:translateX(3px)}
}

.rc-feedback{
  display:none;
  padding:14px 16px;
  border-radius:var(--r1);
  margin-top:14px;
  animation:rcFbIn .3s ease;
}
@keyframes rcFbIn{
  from{opacity:0;transform:translateY(-6px)}
  to{opacity:1;transform:translateY(0)}
}
.rc-fb-correct{
  background:rgba(80,200,120,.08);
  border:1px solid rgba(80,200,120,.3);
  border-left:3px solid var(--green);
}
.rc-fb-wrong{
  background:rgba(224,82,82,.06);
  border:1px solid rgba(224,82,82,.3);
  border-left:3px solid var(--red);
}
.rc-fb-head{
  font-family:var(--display);
  font-size:14px;
  margin-bottom:8px;
  color:var(--t1);
}
.rc-fb-exp{
  font-family:var(--serif);
  font-size:13px;
  line-height:1.6;
  color:var(--t2);
  margin-bottom:12px;
}
.rc-fb-actions{
  display:flex;
  justify-content:flex-end;
  gap:8px;
}

.rc-result-card{
  padding:28px 24px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  margin:16px 0;
  text-align:center;
  box-shadow:0 8px 32px rgba(0,0,0,.15);
}
.rc-result-bar{
  height:8px;
  background:var(--bg);
  border-radius:4px;
  overflow:hidden;
  margin:0 auto;
  max-width:400px;
}
.rc-result-fill{
  height:100%;
  border-radius:4px;
  transition:width .8s cubic-bezier(.4,0,.2,1);
}

/* Mobile */
@media (max-width:640px){
  .rc-card{padding:16px 14px}
  .rc-sentence{font-size:16px;padding:14px 12px}
  .rc-options{grid-template-columns:repeat(2, 1fr)}
  .rc-opt{padding:12px 6px}
  .rc-opt-short{font-size:16px}
  .rc-opt-label{font-size:10px}
  .rc-meta{font-size:10px}
}

/* Print */
@media print{
  .rc-options, .rc-fb-actions{display:none !important}
  .rc-target{background:#fff !important;border:1px solid #000 !important;color:#000 !important;animation:none !important}
}


/* ═══════════════════════════════════
   TAB 2 · VRSTE REČENICA VJEŽBA
═══════════════════════════════════ */
.vr-card{
  padding:22px 24px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  margin:16px 0;
  box-shadow:0 4px 16px rgba(0,0,0,.08);
}
.vr-meta{
  display:flex;
  justify-content:space-between;
  gap:10px;
  margin-bottom:14px;
  font-family:var(--mono);
  font-size:11px;
  color:var(--t3);
  letter-spacing:.5px;
}
.vr-meta strong{color:var(--t1)}
.vr-score{color:var(--gold)}
.vr-sentence{
  padding:18px 20px;
  background:var(--bg);
  border:1px solid var(--bd);
  border-left:3px solid var(--gold);
  border-radius:var(--r1);
  margin-bottom:18px;
  font-family:var(--display);
  font-size:18px;
  line-height:1.6;
  color:var(--t1);
  text-align:center;
  font-style:italic;
}
.vr-q-block{
  margin-bottom:18px;
  padding-bottom:18px;
  border-bottom:1px dashed var(--bd);
}
.vr-q-block:last-of-type{border-bottom:none;padding-bottom:0;margin-bottom:0}
.vr-q-label{
  display:flex;
  align-items:center;
  gap:8px;
  font-family:var(--display);
  font-size:13.5px;
  color:var(--t1);
  margin-bottom:10px;
}
.vr-q-num{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:22px;height:22px;
  background:var(--gold);
  color:#0F0605;
  border-radius:50%;
  font-family:var(--mono);
  font-size:11px;
  font-weight:800;
}
.vr-options{
  display:grid;
  gap:8px;
  margin-bottom:8px;
}
.vr-options-3{grid-template-columns:repeat(3, 1fr)}
.vr-options-5{grid-template-columns:repeat(5, 1fr)}
.vr-opt{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:4px;
  padding:12px 6px;
  background:var(--bg);
  border:1.5px solid var(--bd);
  border-radius:var(--r1);
  cursor:pointer;
  transition:all .2s cubic-bezier(.4,0,.2,1);
  font-family:var(--mono);
  color:var(--t1);
}
.vr-opt:hover:not(:disabled){
  border-color:var(--opt-color);
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,.15);
}
.vr-opt:disabled{cursor:not-allowed;opacity:.6}
.vr-opt-short{
  font-size:18px;
  font-weight:800;
  font-family:var(--display);
  color:var(--opt-color);
}
.vr-opt-label{
  font-size:10px;
  letter-spacing:.3px;
  color:var(--t2);
  text-align:center;
}
.vr-opt.vr-correct{
  border-color:var(--green) !important;
  background:rgba(80,200,120,.1);
  opacity:1 !important;
  animation:rcBoom .4s ease;
}
.vr-opt.vr-correct .vr-opt-short{color:var(--green)}
.vr-opt.vr-wrong{
  border-color:var(--red) !important;
  background:rgba(224,82,82,.08);
  opacity:1 !important;
  animation:rcShake .35s ease;
}
.vr-opt.vr-wrong .vr-opt-short{color:var(--red)}
.vr-fb{
  display:none;
  padding:10px 12px;
  border-radius:var(--r1);
  margin-top:10px;
  font-family:var(--serif);
  font-size:12.5px;
  line-height:1.55;
  animation:rcFbIn .3s ease;
}
.vr-fb-correct{
  background:rgba(80,200,120,.08);
  border-left:3px solid var(--green);
  color:var(--t2);
}
.vr-fb-wrong{
  background:rgba(224,82,82,.06);
  border-left:3px solid var(--red);
  color:var(--t2);
}

/* Mobile */
@media (max-width:640px){
  .vr-card{padding:16px 14px}
  .vr-sentence{font-size:15px;padding:14px 12px}
  .vr-options-3{grid-template-columns:repeat(3, 1fr);gap:6px}
  .vr-options-5{grid-template-columns:repeat(5, 1fr);gap:4px}
  .vr-opt{padding:10px 4px}
  .vr-opt-short{font-size:14px}
  .vr-opt-label{font-size:9px}
}
@media (max-width:420px){
  .vr-options-5{grid-template-columns:repeat(3, 1fr)}
}

/* Print */
@media print{
  .vr-options, #vr-next-wrap{display:none !important}
}


/* ═══════════════════════════════════
   TAB 3 · KLASIFIKACIJA SLOŽENIH
═══════════════════════════════════ */
.ss-card{
  padding:22px 24px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  margin:16px 0;
  box-shadow:0 4px 16px rgba(0,0,0,.08);
}

/* Vrsta options grid — auto-fit */
.ss-opt-grid-nz{
  grid-template-columns:repeat(3, 1fr);
  gap:8px;
}
.ss-opt-grid-zv{
  grid-template-columns:repeat(4, 1fr);
  gap:6px;
}
.vr-opt-vrsta{
  padding:10px 6px;
  min-height:42px;
  display:flex;
  align-items:center;
  justify-content:center;
}
.vr-opt-vrsta:hover:not(:disabled){
  border-color:var(--opt-color);
  background:rgba(255,255,255,.02);
}
.vr-opt-vrsta .vr-opt-label{
  text-align:center;
  line-height:1.3;
}

/* Mobile */
@media (max-width:640px){
  .ss-opt-grid-nz{grid-template-columns:repeat(2, 1fr)}
  .ss-opt-grid-zv{grid-template-columns:repeat(3, 1fr);gap:5px}
  .vr-opt-vrsta{padding:8px 4px;min-height:38px}
  .vr-opt-vrsta .vr-opt-label{font-size:10px !important}
}
@media (max-width:420px){
  .ss-opt-grid-zv{grid-template-columns:repeat(2, 1fr)}
}

/* Print */
@media print{
  .ss-card{break-inside:avoid}
  #ss-q2-wrap, #ss-next-wrap{display:none !important}
}


/* ═══════════════════════════════════
   TAB 5 · SINTAKTIČKI PARSER
═══════════════════════════════════ */
.parser-card{
  padding:20px 22px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  margin:16px 0;
  box-shadow:0 4px 16px rgba(0,0,0,.08);
}
.parser-input-wrap{
  margin-bottom:18px;
}
#parser-input:focus{
  border-color:var(--gold) !important;
  box-shadow:0 0 0 3px rgba(233,180,70,.1);
}

.parser-output{
  margin-top:14px;
  border-top:1px dashed var(--bd);
  padding-top:14px;
}
.prs-result{
  display:flex;
  flex-direction:column;
  gap:18px;
  animation:rcFbIn .3s ease;
}
.prs-section{
  padding:14px 16px;
  background:var(--bg);
  border:1px solid var(--bd);
  border-radius:var(--r1);
}
.prs-section-lbl{
  font-family:var(--mono);
  font-size:10px;
  letter-spacing:2px;
  color:var(--gold);
  margin-bottom:10px;
}

/* Annotated sentence */
.prs-sentence{
  padding:14px 16px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r1);
  font-family:var(--display);
  font-size:17px;
  line-height:1.9;
  color:var(--t1);
  text-align:center;
  margin-bottom:10px;
}
.prs-tok{
  display:inline-block;
  padding:3px 9px;
  border-radius:5px;
  border:1.5px solid var(--mc);
  background:rgba(255,255,255,.02);
  color:var(--t1);
  font-weight:600;
  margin:0 1px;
  cursor:default;
  transition:all .2s ease;
}
.prs-tok:hover{
  background:rgba(255,255,255,.05);
  transform:translateY(-1px);
}
.prs-pred{
  border-color:var(--red);
  background:rgba(224,82,82,.08);
}
.prs-veznik{
  border-color:var(--gold);
  background:rgba(233,180,70,.1);
  font-style:italic;
}
.prs-tok-plain{color:var(--t2)}
.prs-punct{color:var(--t3);margin-left:-3px}

/* Legend */
.prs-legend{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  justify-content:center;
  margin-top:10px;
  font-family:var(--mono);
  font-size:10px;
  color:var(--t3);
}
.prs-leg{
  display:flex;
  align-items:center;
  gap:5px;
}
.prs-leg-dot{
  width:9px;height:9px;
  background:var(--mc);
  border-radius:2px;
}

/* Info grid */
.prs-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:10px;
}
.prs-info-card{
  padding:12px 14px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-left:3px solid var(--gold);
  border-radius:var(--r1);
}
.prs-info-lbl{
  font-family:var(--mono);
  font-size:9.5px;
  letter-spacing:1.5px;
  color:var(--t3);
  margin-bottom:4px;
}
.prs-info-val{
  font-family:var(--display);
  font-weight:700;
  font-size:14px;
  color:var(--t1);
  margin-bottom:4px;
}
.prs-info-detail{
  font-family:var(--serif);
  font-size:11.5px;
  color:var(--t2);
  line-height:1.5;
}

/* Chips row */
.prs-chips-row{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
}
.prs-chip{
  display:inline-flex;
  align-items:center;
  gap:6px;
  padding:5px 10px;
  background:var(--ele);
  border:1px solid var(--mc);
  border-radius:14px;
  font-family:var(--mono);
  font-size:11px;
  color:var(--t1);
}
.prs-chip-tag{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:18px;
  height:18px;
  padding:0 5px;
  background:var(--mc);
  color:#0F0605;
  border-radius:9px;
  font-size:9.5px;
  font-weight:800;
  letter-spacing:.3px;
}

/* Tree */
.prs-tree-wrap{
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r1);
  padding:10px;
  overflow-x:auto;
}
.prs-tree-svg{
  width:100%;
  min-width:500px;
  height:auto;
  display:block;
}

/* AI tutor card */
.ai-tutor-card{
  padding:20px 22px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-left:3px solid var(--blue);
  border-radius:var(--r2);
  margin:16px 0;
  box-shadow:0 4px 16px rgba(0,0,0,.08);
}
#ai-input:focus{
  border-color:var(--blue) !important;
  box-shadow:0 0 0 3px rgba(74,144,217,.1);
}
.ai-answer{
  margin-top:14px;
  padding:16px 18px;
  background:var(--bg);
  border:1px solid var(--bd);
  border-radius:var(--r1);
}
.ai-spinner{
  display:inline-block;
  width:14px;height:14px;
  border:2px solid var(--bd);
  border-top-color:var(--gold);
  border-radius:50%;
  animation:aiSpin .8s linear infinite;
  margin-right:8px;
  vertical-align:middle;
}
@keyframes aiSpin{
  from{transform:rotate(0deg)}
  to{transform:rotate(360deg)}
}

/* Mobile */
@media (max-width:640px){
  .parser-card{padding:14px}
  .prs-sentence{font-size:14px;padding:10px 12px}
  .prs-tok{padding:2px 6px;font-size:13px}
  .prs-grid{grid-template-columns:1fr}
  .ai-tutor-card{padding:14px}
}

/* Print */
@media print{
  #parser-input, #ai-input, .nb-btn, .parser-input-wrap > div:last-child{display:none !important}
  .ai-spinner{display:none !important}
}


/* ═══════════════════════════════════
   TAB 4 · POJMOVNIK SINTAKSE
═══════════════════════════════════ */
.pojm-controls{
  margin:16px 0;
  padding:14px 16px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
}
.pojm-search-wrap{
  display:flex;
  align-items:center;
  gap:10px;
  padding:10px 14px;
  background:var(--bg);
  border:1.5px solid var(--bd);
  border-radius:var(--r1);
  margin-bottom:12px;
  transition:border-color .2s ease;
}
.pojm-search-wrap:focus-within{
  border-color:var(--gold);
  box-shadow:0 0 0 3px rgba(233,180,70,.1);
}
.pojm-clear{
  background:none;
  border:none;
  color:var(--t3);
  cursor:pointer;
  font-size:14px;
  padding:4px 8px;
  border-radius:50%;
  transition:all .15s ease;
}
.pojm-clear:hover{background:var(--ele);color:var(--t1)}

.pojm-filters{
  display:flex;
  gap:6px;
  flex-wrap:wrap;
  margin-bottom:10px;
}
.pojm-filter{
  padding:6px 12px;
  background:var(--bg);
  border:1.5px solid var(--bd);
  border-radius:14px;
  color:var(--t2);
  font-family:var(--mono);
  font-size:11px;
  letter-spacing:.3px;
  cursor:pointer;
  transition:all .2s ease;
}
.pojm-filter:hover{
  border-color:var(--gold);
  color:var(--gold);
}
.pojm-filter.active{
  background:rgba(233,180,70,.12);
  border-color:var(--gold);
  color:var(--gold);
  font-weight:700;
}
.pojm-stats{
  text-align:center;
  margin-top:6px;
}

.pojm-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));
  gap:12px;
  margin:16px 0;
}
.pojm-card-h21{
  padding:14px 16px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-left:3px solid var(--pc);
  border-radius:var(--r1);
  transition:all .2s cubic-bezier(.4,0,.2,1);
  display:flex;
  flex-direction:column;
}
.pojm-card-h21:hover{
  border-left-width:4px;
  transform:translateY(-2px);
  box-shadow:0 6px 16px rgba(0,0,0,.12);
}
.pojm-card-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  margin-bottom:8px;
  gap:10px;
}
.pojm-card-meta{
  display:flex;
  flex-wrap:wrap;
  gap:5px;
  flex:1;
}
.pojm-card-cat{
  font-family:var(--mono);
  font-size:9.5px;
  letter-spacing:1px;
  color:var(--pc);
  text-transform:uppercase;
  font-weight:700;
}
.pojm-card-ncvvo{
  font-family:var(--mono);
  font-size:9px;
  letter-spacing:.5px;
  color:var(--red);
  background:rgba(224,82,82,.1);
  padding:2px 6px;
  border-radius:8px;
  font-weight:700;
}
.pojm-card-tag{
  font-family:var(--mono);
  font-size:9px;
  letter-spacing:.5px;
  color:var(--t3);
  background:var(--bg);
  padding:2px 6px;
  border-radius:8px;
  border:1px solid var(--bd);
}
.pojm-card-star{
  background:none;
  border:none;
  color:var(--t3);
  cursor:pointer;
  font-size:18px;
  line-height:1;
  padding:2px 4px;
  transition:all .2s ease;
}
.pojm-card-star:hover{
  color:var(--gold);
  transform:scale(1.2);
}
.pojm-card-star.on{
  color:var(--gold);
}
.pojm-card-term{
  font-family:var(--display);
  font-weight:700;
  font-size:15px;
  color:var(--t1);
  margin-bottom:6px;
  line-height:1.3;
}
.pojm-card-def{
  font-family:var(--serif);
  font-size:13px;
  line-height:1.55;
  color:var(--t2);
  flex:1;
}

/* Mobile */
@media (max-width:640px){
  .pojm-grid{grid-template-columns:1fr}
  .pojm-card-h21{padding:12px 14px}
  .pojm-card-term{font-size:14px}
  .pojm-card-def{font-size:12.5px}
  .pojm-filter{font-size:10px;padding:5px 10px}
}

/* Print */
@media print{
  .pojm-controls{display:none !important}
  .pojm-grid{display:block !important}
  .pojm-card-h21{break-inside:avoid;margin-bottom:8px}
  .pojm-card-star{display:none !important}
}


/* ═══════════════════════════════════
   TAB 7 · REFERENTNA TABLICA (A4 print)
═══════════════════════════════════ */
.ref-actions{
  display:flex;
  gap:10px;
  margin:14px 0;
  justify-content:center;
}

.ref-sheet{
  background:#fff;
  color:#000;
  padding:18px 20px;
  margin:16px auto;
  max-width:800px;
  border:1px solid var(--bd);
  border-radius:8px;
  box-shadow:0 8px 32px rgba(0,0,0,.3);
  font-family:Georgia, 'Times New Roman', serif;
  font-size:11px;
  line-height:1.4;
  transition:transform .3s ease;
}
.ref-sheet.zoomed{
  transform:scale(1.15);
  transform-origin:top center;
  margin-bottom:60px;
}

/* Header */
.ref-header{
  text-align:center;
  border-bottom:3px double #000;
  padding-bottom:8px;
  margin-bottom:12px;
}
.ref-title{
  font-family:Georgia, serif;
  font-size:18px;
  font-weight:800;
  letter-spacing:2px;
  color:#000;
  text-transform:uppercase;
}
.ref-subtitle{
  font-family:'Courier New', monospace;
  font-size:9px;
  color:#444;
  letter-spacing:1px;
  margin-top:2px;
}

/* Sections */
.ref-section{
  margin-bottom:12px;
  page-break-inside:avoid;
}
.ref-section-ttl{
  font-family:Georgia, serif;
  font-size:11.5px;
  font-weight:800;
  background:#000;
  color:#fff;
  padding:3px 8px;
  letter-spacing:.5px;
  margin-bottom:4px;
  text-transform:uppercase;
}

/* Tables */
.ref-tbl{
  width:100%;
  border-collapse:collapse;
  font-family:Georgia, serif;
  font-size:10px;
}
.ref-tbl th{
  background:#ddd;
  color:#000;
  padding:3px 6px;
  text-align:left;
  border:1px solid #999;
  font-weight:700;
  font-size:9.5px;
  text-transform:uppercase;
  letter-spacing:.3px;
}
.ref-tbl td{
  padding:3px 6px;
  border:1px solid #999;
  vertical-align:top;
}
.ref-tbl strong{font-weight:700;color:#000}
.ref-tbl em{font-style:italic;color:#222}

.ref-note{
  font-size:9.5px;
  color:#444;
  font-style:italic;
  padding:4px 6px;
  background:#f5f5f5;
  border-left:2px solid #999;
  margin-top:4px;
}

/* Grids */
.ref-grid-2{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:8px;
}
.ref-grid-3{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:6px;
}

.ref-mini{
  border:1px solid #999;
  padding:6px 8px;
  background:#fafafa;
  font-size:9.5px;
  line-height:1.4;
}
.ref-mini-ttl{
  font-weight:800;
  font-size:10px;
  background:#444;
  color:#fff;
  padding:2px 6px;
  margin:-6px -8px 4px -8px;
  letter-spacing:.5px;
  text-transform:uppercase;
}
.ref-mini ul{
  margin:0;
  padding-left:14px;
  list-style:disc;
}
.ref-mini li{margin-bottom:1px}
.ref-mini-note{
  font-size:8.5px;
  color:#666;
  font-style:italic;
  margin-top:3px;
}

/* Zamke */
.ref-zamke{
  display:grid;
  gap:3px;
  font-size:9.5px;
  line-height:1.45;
}
.ref-zamke > div{
  padding:3px 6px;
  background:#fff5f5;
  border-left:2px solid #c00;
}
.ref-zamke strong{color:#c00;font-weight:700}

/* Footer */
.ref-footer{
  display:flex;
  justify-content:space-between;
  margin-top:8px;
  padding-top:6px;
  border-top:1px solid #999;
  font-size:8.5px;
  color:#444;
  font-family:'Courier New', monospace;
  letter-spacing:.3px;
}

/* Mobile screen */
@media (max-width:640px){
  .ref-sheet{padding:12px;font-size:10px}
  .ref-grid-3{grid-template-columns:1fr 1fr;gap:5px}
  .ref-grid-2{grid-template-columns:1fr}
  .ref-tbl{font-size:9px}
  .ref-tbl th,.ref-tbl td{padding:2px 4px}
  .ref-mini{font-size:9px}
}

/* Print — A4 portrait */
@media print{
  /* Hide everything except .ref-sheet */
  body > *:not(.layer){display:none !important}
  .layer:not(.on){display:none !important}
  .layer.on > *:not(.ref-sheet){display:none !important}
  
  .no-print, .ref-actions, .nav-row{display:none !important}
  
  @page{
    size:A4 portrait;
    margin:8mm;
  }
  
  .ref-sheet{
    box-shadow:none !important;
    border:none !important;
    margin:0 !important;
    padding:0 !important;
    max-width:100% !important;
    background:#fff !important;
    color:#000 !important;
    font-size:9.5px !important;
    line-height:1.3 !important;
  }
  .ref-section{margin-bottom:8px !important;page-break-inside:avoid}
  .ref-section-ttl{font-size:10px !important;padding:2px 5px !important;margin-bottom:3px !important}
  .ref-tbl{font-size:8.5px !important}
  .ref-tbl th,.ref-tbl td{padding:1.5px 4px !important}
  .ref-mini{font-size:8.5px !important;padding:3px 5px !important}
  .ref-mini-ttl{font-size:9px !important}
  .ref-zamke{font-size:8.5px !important}
  .ref-zamke > div{padding:2px 4px !important}
  .ref-title{font-size:14px !important}
  .ref-subtitle{font-size:8px !important}
  .ref-footer{font-size:7.5px !important}
}

/* ═══════════════════════════════════════════
   H21 V2 — VIZUALNA POBOLJŠANJA · MISSING CLASSES
   ═══════════════════════════════════════════ */

/* ─── SCENE CARDS (Tab 1, 2, 3) ─── */
.scene-head{
  display:flex;
  align-items:center;
  gap:14px;
  padding:14px 18px;
}
.scene-badge{
  width:34px;
  height:34px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:700;
  font-family:var(--mono);
  font-size:14px;
  flex-shrink:0;
  box-shadow:0 2px 8px rgba(233,180,70,.25);
}
.scene-name{
  font-family:var(--display);
  font-weight:700;
  font-size:15px;
  color:var(--t1);
  letter-spacing:.5px;
  line-height:1.3;
}
.scene-sub{
  font-size:12.5px;
  color:var(--t2);
  margin-top:3px;
  font-family:var(--serif);
  font-style:italic;
}

/* Improve existing scene-card hover & open states */
.scene-card{
  transition:all .2s cubic-bezier(.4,0,.2,1) !important;
}
.scene-card:hover{
  border-color:var(--gold) !important;
  transform:translateY(-2px);
  box-shadow:0 6px 20px rgba(0,0,0,.18);
}
.scene-card.open .scene-arrow{
  transform:rotate(180deg);
  color:var(--gold);
}
.scene-card.open{
  border-color:var(--gold) !important;
  background:linear-gradient(180deg, var(--ele) 0%, var(--bg) 100%);
}
.scene-card.open .scene-body{
  animation:sceneFadeIn .3s ease;
}
@keyframes sceneFadeIn{
  from{opacity:0; transform:translateY(-4px)}
  to{opacity:1; transform:translateY(0)}
}

/* ─── SIDEBAR DJELA (D01-D22) ─── */
.sb-era-d{
  color:var(--gold) !important;
  margin-top:14px !important;
  padding-bottom:2px !important;
}
.sb-d-meta{
  font-size:10px;
  color:var(--t3);
  font-style:italic;
  padding:2px 14px 8px;
  line-height:1.45;
  font-family:var(--serif);
}

/* ─── BOX WARNING TITLE ─── */
.bw-ttl{
  font-family:var(--mono);
  font-size:11px;
  letter-spacing:1.2px;
  font-weight:700;
  margin-bottom:6px;
  text-transform:uppercase;
}

/* ═══════════════════════════════════════════
   H21 V2 — TYPOGRAPHY & POLISH
   ═══════════════════════════════════════════ */

.layer h2:not([class]){
  font-family:var(--display);
  font-size:22px;
  color:var(--gold);
  font-weight:700;
  margin:24px 0 12px;
  letter-spacing:.5px;
}
.layer h3:not([class]){
  font-family:var(--display);
  font-size:18px;
  color:var(--bronze, var(--gold));
  font-weight:700;
  margin:20px 0 10px;
  letter-spacing:.3px;
}

.layer p:not([class]){
  margin:8px 0 12px;
  line-height:1.7;
  color:var(--t2);
}
.layer p:not([class]) strong{color:var(--t1)}
.layer p:not([class]) em{color:var(--gold); font-style:italic}

/* Tables */
.layer table:not([class]){
  width:100%;
  border-collapse:collapse;
  font-size:13px;
  margin:14px 0;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  overflow:hidden;
}
.layer table:not([class]) th{
  background:var(--bg);
  color:var(--gold);
  padding:10px 14px;
  text-align:left;
  font-family:var(--mono);
  font-size:11px;
  letter-spacing:1px;
  text-transform:uppercase;
  font-weight:700;
  border-bottom:2px solid var(--bd);
}
.layer table:not([class]) td{
  padding:9px 14px;
  border-bottom:1px solid var(--bd);
  color:var(--t1);
  vertical-align:top;
  line-height:1.55;
}
.layer table:not([class]) tr:last-child td{border-bottom:none}
.layer table:not([class]) tr:hover td{background:rgba(233,180,70,.04)}
.layer table:not([class]) strong{color:var(--gold)}

/* Lists */
.layer ul:not([class]){
  margin:10px 0 14px 22px;
  padding:0;
  list-style:disc;
}
.layer ul:not([class]) li{
  margin-bottom:5px;
  line-height:1.6;
  color:var(--t2);
}
.layer ul:not([class]) li strong{color:var(--t1)}
.layer ol:not([class]){
  margin:10px 0 14px 24px;
  padding:0;
}
.layer ol:not([class]) li{
  margin-bottom:6px;
  line-height:1.6;
  color:var(--t2);
}

/* Inline code */
.layer code:not([class]){
  background:var(--ele);
  border:1px solid var(--bd);
  padding:2px 7px;
  border-radius:4px;
  font-family:var(--mono);
  font-size:12px;
  color:var(--gold);
}

/* Focus states (a11y) */
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
[onclick]:focus-visible{
  outline:2px solid var(--gold);
  outline-offset:2px;
  border-radius:4px;
}

/* Scrollbar polish */
::-webkit-scrollbar{width:8px; height:8px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:var(--bd); border-radius:4px}
::-webkit-scrollbar-thumb:hover{background:var(--gold)}

/* Selection color */
::selection{
  background:rgba(233,180,70,.3);
  color:var(--t1);
}

/* hr */
hr:not([class]){
  border:none;
  height:1px;
  background:linear-gradient(90deg, transparent, var(--bd) 20%, var(--bd) 80%, transparent);
  margin:24px 0;
}

/* Hero polish */
.hero-chips{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:14px;
}

/* Responsive */
@media (max-width:640px){
  .scene-head{padding:12px 14px}
  .scene-badge{width:28px; height:28px; font-size:12px}
  .scene-name{font-size:14px}
  .layer h2:not([class]){font-size:19px}
  .layer h3:not([class]){font-size:16px}
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{
    animation-duration:.01ms !important;
    transition-duration:.01ms !important;
  }
}

/* Print */
@media print{
  .scene-card{break-inside:avoid; cursor:default}
  .scene-body{display:block !important}
  .scene-arrow{display:none}
}


/* ═══════════════════════════════════════════
   H21 PARSER — POLISH
   ═══════════════════════════════════════════ */

/* Difficulty selector active state */
.parser-diff-btn{
  transition:all .2s ease;
  font-family:var(--mono) !important;
  letter-spacing:.3px;
}
.parser-diff-btn.on{
  background:var(--ele) !important;
  font-weight:700 !important;
  box-shadow:inset 0 0 0 1.5px currentColor;
}
.parser-diff-btn:not(.on):hover{
  opacity:.85;
}

/* Empty parser output — better placeholder */
.parser-output:empty::before,
.parser-output > div[style*="font-style:italic"]{
  display:block;
  text-align:center;
  padding:24px 18px !important;
  color:var(--t3);
  font-style:italic;
  background:linear-gradient(135deg, rgba(233,180,70,.03), transparent);
  border:1px dashed var(--bd);
  border-radius:var(--r2);
  margin:8px 0;
}

/* Parser tree — better mobile responsive */
@media (max-width:640px){
  .parser-result svg{
    transform:scale(.85);
    transform-origin:left top;
  }
}

/* Parser history dropdown */
.parser-history-dropdown{
  margin-top:10px;
  padding:10px;
  background:var(--ele);
  border:1px solid var(--bd);
  border-radius:var(--r2);
  font-size:11.5px;
}
.parser-history-item{
  display:flex;
  justify-content:space-between;
  padding:6px 10px;
  border-radius:6px;
  cursor:pointer;
  transition:background .15s ease;
  color:var(--t2);
}
.parser-history-item:hover{
  background:var(--bg);
  color:var(--t1);
}



/* Table wrap — responsive scrollable */
.table-wrap{
  overflow-x:auto;
  margin:14px 0;
  border:1px solid var(--bd);
  border-radius:var(--r2);
  background:var(--ele);
}
.table-wrap table{
  margin:0 !important;
  border:none !important;
  border-radius:0 !important;
}
.table-wrap::-webkit-scrollbar{height:6px}
.table-wrap::-webkit-scrollbar-track{background:var(--bg)}
.table-wrap::-webkit-scrollbar-thumb{background:var(--bd); border-radius:3px}
.table-wrap::-webkit-scrollbar-thumb:hover{background:var(--gold)}


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
.chapter-nav-prev{
  text-align:left;
}
.chapter-nav-next{
  text-align:right;
  flex-direction:row;
}
.chapter-nav-next .chapter-nav-meta{
  flex:1;
}
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
.chapter-nav-pill-next{
  color:var(--gold);
}
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
  .chapter-nav-grid{
    grid-template-columns:1fr;
  }
  .chapter-nav-next{
    flex-direction:row;
  }
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


const KVIZ_Q = [
  // ═══ REČENIČNI ČLANOVI (8) ═══
  {q:'U rečenici „Marija čita zanimljivu knjigu." riječ „zanimljivu" je:',o:['subjekt','objekt','atribut','predikat'],t:2,e:'„Zanimljivu" je atribut — pridjev koji opisuje imenicu „knjigu" (kakvu knjigu?). Slaže se s njom u rodu/broju/padežu.'},
  {q:'Predikat rečenice „Ivan je otišao u školu." je:',o:['Ivan','je otišao','u školu','otišao'],t:1,e:'„Je otišao" — perfekt (pomoćni glagol „biti" + glag. pridjev radni). Predikat je cijeli glagolski oblik, ne samo jedan dio.'},
  {q:'Subjekt rečenice UVIJEK je u padežu:',o:['genitivu','nominativu','dativu','akuzativu'],t:1,e:'Nominativ (N, 1. padež). Pitanje: TKO? ŠTO? Ako riječ nije u N, nije gramatički subjekt.'},
  {q:'U rečenici „Pomažem svom bratu." „bratu" je:',o:['subjekt','izravni objekt','neizravni objekt','priložna oznaka'],t:2,e:'„Bratu" je u dativu (D). Glagol „pomagati" zahtijeva DATIV (ne A!). Dakle NEIZRAVNI objekt, ne izravni.'},
  {q:'U rečenici „Ivan, moj prijatelj, čita." „moj prijatelj" je:',o:['atribut','apozicija','priložna oznaka','objekt'],t:1,e:'Apozicija — imenica + atribut „moj" koja bliže objašnjava drugu imenicu. Uvijek odvojena zarezima i u istom padežu.'},
  {q:'Veznici „i, pa, te, ni" povezuju:',o:['zavisne rečenice','sastavne nezavisne rečenice','suprotne','rastavne'],t:1,e:'Sastavne nezavisno složene rečenice — dvije ravnopravne rečenice u odnosu zbrajanja. Najčešći nezavisni veznici.'},
  {q:'Glagoli „sjećati se" i „bojati se" zahtijevaju objekt u:',o:['akuzativu','nominativu','genitivu','lokativu'],t:2,e:'GENITIV (G). „Sjećam se ljeta." „Bojim se mraka." Ovi glagoli ne idu sa A! Neizravni objekt u G.'},
  {q:'U rečenici „Plače od sreće." „od sreće" je:',o:['objekt','priložna oznaka uzroka','atribut','apozicija'],t:1,e:'Priložna oznaka uzroka („zašto plače?"). Prijedlog „od" + G uvodi uzrok.'},
  
  // ═══ VRSTE REČENICA (7) ═══
  {q:'Koliko rečenica ima u „Učim i pišem, dok moji prijatelji spavaju."?',o:['1','2','3','4'],t:2,e:'3 rečenice (3 predikata: učim, pišem, spavaju). „Učim i pišem" = dvije nezavisne (sastavne), „dok spavaju" = zavisna (vremenska).'},
  {q:'Rečenica „Hoćeš li doći sutra?" je:',o:['izjavna','usklična','zapovjedna','upitna'],t:3,e:'Upitna (potpuna) — traži DA/NE odgovor uz česticu „li". Nepotpuna bi počela s „kada/gdje/tko/što...".'},
  {q:'„Ili učiš ili se ne trudiš." je:',o:['sastavna','rastavna','suprotna','zaključna'],t:1,e:'Rastavna nezavisno složena — veznik „ili" iskazuje izbor između dviju mogućnosti.'},
  {q:'Rečenica „Hoću čokoladu." je:',o:['složena nezavisna','složena zavisna','prosta','asindetska'],t:2,e:'PROSTA — 1 predikat (hoću), inf. „čokoladu" je objekt, nije drugi predikat.'},
  {q:'„Sretan put!" je rečenica po priopćajnoj svrsi:',o:['izjavna','usklična','optativna (želja)','zapovjedna'],t:2,e:'Optativna — izriče želju. Bezglagolska, podrazumijeva se „neka bude". Završava uskličnikom.'},
  {q:'„Da je samo nedjelja!" je rečenica:',o:['izjavna','upitna','optativna','zapovjedna'],t:2,e:'Optativna (želja) — „da" + uskličnik signalizira izraz želje, ne tvrdnju.'},
  {q:'„Nikad nisam ništa rekao." po značenju je:',o:['potvrdna','niječna','upitna','dvostruka'],t:1,e:'Niječna — više negacija (nikad, nisam, ništa) POJAČAVAJU nijek (specifičnost hrvatskog). Engleski to ukida, hrvatski to pojačava.'},
  
  // ═══ SLOŽENE — NEZAVISNE (5) ═══
  {q:'„Učim, ali sam jako umoran." je:',o:['sastavna','suprotna','zaključna','izuzetna'],t:1,e:'Suprotna — veznik „ali" izriče suprotnost. Pred „a, ali, no, nego, već" UVIJEK zarez.'},
  {q:'„Pada kiša, zato ostajem doma." je:',o:['suprotna','zaključna','uzročna zavisna','sastavna'],t:1,e:'Zaključna NEZAVISNO složena — „zato" izvodi posljedicu/zaključak. Ne brkati s uzročnom zavisnom („jer").'},
  {q:'„Mislim, dakle jesam." je:',o:['nezavisno složena zaključna','zavisno složena uzročna','prosta','rastavna'],t:0,e:'Nezavisno složena ZAKLJUČNA — Descartesova. „Dakle" je nezavisni veznik koji izvodi zaključak.'},
  {q:'„Sve smo prošli, samo ovo poglavlje nismo." je:',o:['suprotna','zaključna','izuzetna','sastavna'],t:2,e:'Izuzetna — „samo" iznosi iznimku od onoga što je rečeno u prvoj rečenici.'},
  {q:'„Ulazim u sobu, naime tražim knjigu." je:',o:['sastavna','objasnidbena','uzročna zavisna','suprotna'],t:1,e:'Objasnidbena — „naime" iznosi pojašnjenje, dopunu prve rečenice. Najrjeđa nezavisna vrsta.'},
  
  // ═══ SLOŽENE — ZAVISNE (8) ═══
  {q:'Rečenica „Vjerujem da si u pravu." je:',o:['atributna','objektna','uzročna','vremenska'],t:1,e:'Zavisno složena objektna — druga rečenica zamjenjuje objekt u glavnoj (vjerujem ŠTO? → da si u pravu).'},
  {q:'Kako glasi rečenica iz „Kupit ću knjigu ___ ona stigne."?',o:['ali','jer','kada','ili'],t:2,e:'„Kada" uvodi vremensku zavisnu rečenicu (kad? — označuje vrijeme).'},
  {q:'U „Knjiga koju čitam je odlična." drugi dio je:',o:['objektna','priložna','atributna','uzročna'],t:2,e:'Atributna zavisna — uvodi je odnosna zamjenica „koju" i opisuje imenicu „knjiga" (koja knjiga?).'},
  {q:'Zarez pred veznikom „jer":',o:['nikad','samo u knjigama','kad je zavisna na kraju','uvijek'],t:2,e:'Uvijek se piše zarez pred „jer" kad zavisna uzročna dolazi NAKON glavne. Npr: „Učim, jer želim."'},
  {q:'„Iako sam umorna, idem trčati." je:',o:['vremenska','dopusna','pogodbena','uzročna'],t:1,e:'Dopusna (koncesivna) — „iako" iznosi dopust („usprkos čemu"). Druga radnja se događa unatoč prvoj.'},
  {q:'„Učim da položim maturu." je:',o:['posljedična','namjerna','objektna','uzročna'],t:1,e:'Namjerna — „da" iznosi cilj/svrhu („zašto učim?" → da bih položio). Razlika od posljedične: namjera = svrha, posljedica = rezultat.'},
  {q:'„Toliko sam umoran da spavam stojeći." je:',o:['namjerna','posljedična','uzročna','dopusna'],t:1,e:'Posljedična — „da" uz „toliko/tako" iznosi posljedicu prve radnje. Klasičan signal: „toliko/tako ___ da".'},
  {q:'Tko/što na početku rečenice „Tko rano rani, dvije sreće grabi." uvodi:',o:['objektnu','subjektnu','atributnu','uzročnu'],t:1,e:'Subjektna zavisna — cijela zavisna „Tko rano rani" funkcionira kao subjekt glagola „grabi" iz glavne rečenice.'},
  
  // ═══ ZAMKE I MIX (2) ═══
  {q:'Veznik „da" može uvoditi koliko različitih vrsta zavisne?',o:['1','2','3','5'],t:3,e:'5 vrsta: objektna („vjerujem da..."), namjerna („učim da..."), posljedična („tako da..."), pogodbena („da imam novca..."), subjektna („žao mi je da..."). Najtraži zamka u sintaksi!'},
  {q:'„Misliš li da će sutra padati kiša?" po sastavu je:',o:['prosta','nezavisno složena','zavisno složena','asindetska'],t:2,e:'Zavisno složena objektna („Misliš li ŠTO?" → da će padati kiša). 2 predikata: misliš + će padati. Veznik „da" uvodi objektnu.'},
];const CP_ITEMS=[
  'Razumijem razliku sintakse (odnosi među riječima) i morfologije (oblici riječi).',
  'Znam 4 razine jezičnih jedinica: riječ → sintagma → rečenica → tekst.',
  'Razumijem razliku sintagme (bez predikata) i rečenice (s predikatom).',
  'Znam svih 6 rečeničnih članova (SPO-AAP): subjekt, predikat, objekt, atribut, apozicija, priložne oznake.',
  'Razumijem razliku izravnog (A) i neizravnog (D/G/I/L) objekta, te glagole koji idu s D (pomoći, vjerovati).',
  'Znam 4 vrste priložnih oznaka (MVNU): mjesta, vremena, načina, uzroka.',
  'Razumijem razliku atributa (pridjev, bez zareza) i apozicije (imenica, sa zarezima).',
  'Znam 5 vrsta rečenica po priopćajnoj svrsi: izjavne, upitne, usklične, zapovjedne, želje.',
  'Znam 6 tipova nezavisno složenih (sastavne, rastavne, suprotne, zaključne, izuzetne, objasnidbene) + veznike.',
  'Znam glavne zavisno složene (objektne, atributne, priložne) i znam staviti zarez pred „koji/da/jer/ako".',
];

const DIAG0_Q=[
  {q:'U rečenici „Marija čita knjigu." koliko ima rečeničnih članova?',o:['2','3','4','1'],t:1,e:'3 člana: Marija (subjekt), čita (predikat), knjigu (izravni objekt u A).'},
  {q:'Rečenica „Učim, jer želim položiti." je:',o:['prosta','nezavisno složena (suprotna)','zavisno složena (uzročna)','nepotpuna'],t:2,e:'Zavisno složena uzročna — druga rečenica („jer želim položiti") uvjetuje prvu. Veznik „jer" uvodi uzročnu.'},
  {q:'Subjekt rečenice uvijek je u padežu:',o:['genitivu','dativu','nominativu','akuzativu'],t:2,e:'Subjekt je UVIJEK u nominativu (N, 1. padež). Pitanje: TKO? ŠTO? Ako nije N, nije gramatički subjekt.'},
  {q:'U „Ivan, moj prijatelj, čita." „moj prijatelj" je:',o:['atribut','apozicija','priložna oznaka','objekt'],t:1,e:'Apozicija — imenica (+atribut „moj") koja bliže objašnjava drugu imenicu. Uvijek odvojena zarezima.'},
  {q:'Veznici „i, pa, te, ni" povezuju:',o:['zavisne rečenice','sastavne nezavisne rečenice','suprotne','rastavne'],t:1,e:'Sastavne nezavisno složene rečenice — dvije ravnopravne rečenice u odnosu zbrajanja. Najčešći nezavisni veznici.'},
  {q:'„Knjiga, koju mi je dala, je odlična." je:',o:['nezavisna sastavna','zavisna objektna','zavisna atributna','zavisna mjesna'],t:2,e:'Zavisna atributna — uvodi je odnosna zamjenica „koju" i opisuje imenicu „knjiga". UVIJEK zarezi sa obje strane (umetnuta zavisna).'},
  {q:'Glagoli „pomagati", „vjerovati", „prijetiti" zahtijevaju objekt u kojem padežu?',o:['nominativ','akuzativ','dativ','genitiv'],t:2,e:'DATIV (D). „Pomažem bratu (D)", „Vjerujem prijatelju (D)". Ovi glagoli ne uzimaju izravni objekt u akuzativu!'},
  {q:'Rečenica „Iako pada kiša, idem trčati." je:',o:['nezavisna suprotna','zavisna uzročna','zavisna dopusna','zavisna pogodbena'],t:2,e:'Zavisna dopusna (koncesivna) — veznik „iako" iznosi dopust („usprkos čemu"). Pogodbena bi imala „ako": „Ako pada kiša, idem trčati."'},
  {q:'„Toliko sam umoran da spavam stojeći." veznik „da" uvodi:',o:['objektnu zavisnu','namjernu zavisnu','posljedičnu zavisnu','pogodbenu zavisnu'],t:2,e:'Posljedična zavisna — „da" iza „toliko/tako" ALWAYS uvodi posljedičnu. Razlika od namjerne („Učim da položim") = posljedica je rezultat, namjera je svrha.'},
  {q:'Pravilo zareza: pred „jer/da/ako/kad" kad zavisna IZA glavne:',o:['nikad zarez','samo u književnosti','UVIJEK zarez','samo kratke rečenice'],t:2,e:'UVIJEK zarez. „Učim, jer želim", „Vjerujem, da si tu", „Idem, ako stigneš". Bez zareza je interpunkcijska greška na maturi.'},
];
const TAB_NAMES=['Teorija','Rečenični članovi','Vrste rečenica','Složene rečenice','Pojmovnik','Sintaktički parser','Kviz','Referentna tablica'];
function sw(n){
  document.querySelectorAll('.tab').forEach((t,i)=>{
    t.classList.toggle('on',i===n);
    t.setAttribute('aria-selected',i===n);
  });
  document.querySelectorAll('.layer').forEach((l,i)=>l.classList.toggle('on',i===n));
  const _bc=document.getElementById('bc-tab');if(_bc)_bc.textContent=TAB_NAMES[n];
  if(n===6)qzInit();
  if(n===5){
    // init drill on first open (safe — mg-dynamic may not exist in H20 since Tab 5 is now Scanner)
    const _mg=document.getElementById('mg-dynamic');
    if(_mg&&!_mg.dataset.init){
      _mg.dataset.init='1';
      if(typeof mgInit==='function')mgInit('easy');
      if(typeof fcInit==='function')fcInit();
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
function speakVerse(text, rate){
  if(!('speechSynthesis' in window)){
    alert('Vaš preglednik ne podržava audio čitanje (Web Speech API). Isprobaj Chrome, Edge ili Safari.');
    return;
  }
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'hr-HR';
  u.rate = rate || 0.85;
  u.pitch = 1.0;
  u.volume = 1.0;
  // Try to find Croatian voice
  const voices = window.speechSynthesis.getVoices();
  const hrVoice = voices.find(v => v.lang && v.lang.startsWith('hr')) || voices.find(v => v.lang && v.lang.startsWith('sr')) || voices.find(v => v.lang && v.lang.startsWith('sl'));
  if(hrVoice) u.voice = hrVoice;
  window.speechSynthesis.speak(u);
}
// Trigger voice list load
if('speechSynthesis' in window){
  window.speechSynthesis.getVoices();
  if(window.speechSynthesis.onvoiceschanged !== undefined){
    window.speechSynthesis.onvoiceschanged = function(){};
  }
}



/* WEB SPEECH API — fonetski audio demo */
function speakWord(text){
  if(!('speechSynthesis' in window)){
    alert('Tvoj preglednik ne podržava audio izgovor. Pokušaj u Chrome ili Safari.');
    return;
  }
  // Stop any ongoing speech
  window.speechSynthesis.cancel();
  
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'hr-HR';
  utter.rate = 0.85;
  utter.pitch = 1.0;
  
  // Try to find Croatian voice
  const voices = window.speechSynthesis.getVoices();
  const hrVoice = voices.find(v => v.lang.startsWith('hr'));
  if(hrVoice) utter.voice = hrVoice;
  
  window.speechSynthesis.speak(utter);
}

// Preload voices (some browsers need this)
if('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined){
  window.speechSynthesis.onvoiceschanged = function(){};
}





/* ═══════════════════════════════════
   H20 POJMOVNIK DATA + RENDERER
═══════════════════════════════════ */

const POJM_DATA2 = [
  // === KAT 1: REČENIČNI ČLANOVI (12) ===
  {kat:'clanovi', term:'Subjekt', def:'Rečenični član koji označava tko ili što izvršava radnju. UVIJEK u nominativu (1. padež). Pitanje: tko? što? Slaže se s predikatom u licu, broju i rodu.', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Predikat', def:'Glavni rečenični član — glagol u ličnom obliku. Mora postojati u svakoj rečenici. Pitanje: što radi? što se događa? Broj predikata = broj rečenica u složenoj.', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Glagolski predikat', def:'Predikat koji čini samo glagol ili glagolska konstrukcija. Primjeri: „Marija čita." (prezent), „Došao je." (perfekt), „Putovat ćemo." (futur).', star:false, tag:''},
  {kat:'clanovi', term:'Imenski predikat', def:'Predikat koji čini kopula (glagol „biti") + imenska riječ (imenica/pridjev/zamjenica). Primjeri: „Marija je učenica." „On je visok." „Knjiga je moja."', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Složeni glagolski predikat', def:'Modalni/fazni glagol + infinitiv. Primjeri: „Moram raditi." „Počeo je pisati." „Želim učiti." Brokje 1 predikat (ne dva!).', star:false, tag:''},
  {kat:'clanovi', term:'Objekt', def:'Rečenični član koji dopunjava predikat — predmet ili osoba na koju se radnja odnosi. Pitanje: koga? što? komu? čemu?', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Izravni objekt', def:'Objekt u akuzativu (A) bez prijedloga. Pitanje: koga? što? Primjeri: „Čitam knjigu (A)." „Vidim Ivana (A)."', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Neizravni objekt', def:'Objekt u G, D, I ili L padežu — sa ili bez prijedloga. Glagoli s D: pomagati, vjerovati, prijetiti. Glagoli s G: sjećati se, bojati se. Glagoli s I: upravljati.', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Atribut', def:'Rečenični član koji bliže opisuje imenicu. Pitanje: kakav? čiji? koji? Sročni (slaže se: „lijepa knjiga") ili nesročni (genitiv: „knjiga stoljeća").', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Apozicija', def:'Imenica koja bliže objašnjava drugu imenicu, u istom je padežu. UVIJEK odvojena zarezima. Primjer: „Ivan, moj prijatelj, dolazi."', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Priložna oznaka (P.O.)', def:'Rečenični član koji označava okolnosti radnje. 4 glavne (MVNU): mjesta, vremena, načina, uzroka + dodatne (namjere, količine, društva, uvjeta, dopuštenja).', star:true, tag:'NCVVO'},
  {kat:'clanovi', term:'Logički subjekt', def:'Stvarni izvršitelj radnje koji nije u nominativu. Primjer: „Nama (D logički) se spava." Gramatički subjekt je podrazumijevan.', star:false, tag:''},

  // === KAT 2: VRSTE REČENICA (10) ===
  {kat:'vrste', term:'Prosta rečenica', def:'Rečenica s jednim predikatom. Ne može se rastaviti na manje rečenice. „Marija čita knjigu." „Pada kiša." Infinitiv NE računa kao predikat.', star:true, tag:''},
  {kat:'vrste', term:'Složena rečenica', def:'Rečenica s 2 ili više predikata. Dijeli se na nezavisno složenu (ravnopravne) i zavisno složenu (jedna ovisi).', star:true, tag:'NCVVO'},
  {kat:'vrste', term:'Izjavna rečenica', def:'Iznosi obavijest, tvrdnju, opis. Završava točkom. „Marija čita knjigu." „Vani pada kiša."', star:false, tag:''},
  {kat:'vrste', term:'Upitna rečenica', def:'Postavlja pitanje, završava upitnikom. Potpuna (DA/NE) s česticom „li" ili intonacijom. Nepotpuna s upitnim riječima (tko, što, kada, gdje).', star:true, tag:'NCVVO'},
  {kat:'vrste', term:'Usklična rečenica', def:'Izriče jaku emociju (čuđenje, oduševljenje, ljutnja). Završava uskličnikom. „Kako je lijepo!" „Bravo!" „Nemoguće!"', star:false, tag:''},
  {kat:'vrste', term:'Zapovjedna rečenica', def:'Izriče zapovijed, naredbu, molbu. Glagol u IMPERATIVU. Završava točkom ili uskličnikom. „Dođi ovamo." „Pišite zadaću!"', star:false, tag:''},
  {kat:'vrste', term:'Optativna rečenica (želja)', def:'Izriče želju. Često s česticom „neka" ili u kondicionalu. „Neka bude svjetla!" „Sretan put!" „Da je samo nedjelja!"', star:false, tag:''},
  {kat:'vrste', term:'Potvrdna (afirmativna)', def:'Tvrdi, potvrđuje radnju. Bez negacije. „Marija čita." „Sutra ću doći."', star:false, tag:''},
  {kat:'vrste', term:'Niječna (negativna)', def:'Niječe, odbacuje radnju. S negacijom (ne, ni, nije, nikad, ništa, nigdje). U hrvatskom više negacija POJAČAVAJU nijek (ne ukidaju ga).', star:true, tag:''},
  {kat:'vrste', term:'Retoričko pitanje', def:'Formalno upitno (završava ?), ali ne očekuje odgovor — funkcionalno je usklično. „Zar je moguće?!" „Tko bi to očekivao?"', star:true, tag:'zamka'},

  // === KAT 3: NEZAVISNO SLOŽENE (8) ===
  {kat:'nezavisno', term:'Nezavisno složena rečenica', def:'Dvije ili više rečenica koje su RAVNOPRAVNE — svaka može stajati samostalno. Povezane nezavisnim veznicima ili zarezom.', star:true, tag:'NCVVO'},
  {kat:'nezavisno', term:'Sastavna (kopulativna)', def:'Druga rečenica nadovezuje, dodaje, zbraja sadržaj prve. Veznici: i, pa, te, ni, niti. „Marija čita i Ivan piše."', star:true, tag:''},
  {kat:'nezavisno', term:'Rastavna (disjunktivna)', def:'Izriče izbor između dvije mogućnosti. Veznik: ili (samostalno ili u paru). „Ili učiš ili se ne trudiš."', star:false, tag:''},
  {kat:'nezavisno', term:'Suprotna (adverzativna)', def:'Druga rečenica iznosi sadržaj suprotan ili ispravak prvoj. Veznici: a, ali, no, nego, već. UVIJEK zarez pred njima!', star:true, tag:'NCVVO'},
  {kat:'nezavisno', term:'Zaključna (konkluzivna)', def:'Druga rečenica zaključuje, izvodi posljedicu iz prve. Veznici: zato, stoga, dakle, prema tome. „Pada kiša, zato ostajem doma."', star:true, tag:''},
  {kat:'nezavisno', term:'Izuzetna (ekscepcijska)', def:'Druga rečenica iznosi iznimku od prve. Veznici: samo, jedino, osim što. „Sve smo prošli, samo ovo nismo."', star:false, tag:''},
  {kat:'nezavisno', term:'Objasnidbena (eksplikativna)', def:'Druga rečenica objašnjava ili precizira prvu. Veznici: i to, naime, to jest. Najrjeđa nezavisna vrsta.', star:false, tag:''},
  {kat:'nezavisno', term:'Asindetska rečenica', def:'Složena rečenica BEZ veznika — povezana samo zarezima. „Pala je kiša, vjetar je puhao, hladnoća je zavladala."', star:false, tag:''},

  // === KAT 4: ZAVISNO SLOŽENE (16) ===
  {kat:'zavisno', term:'Zavisno složena rečenica', def:'Glavna + zavisna rečenica. Zavisna NE može stajati samostalno. Povezuju se zavisnim veznicima ili odnosnim/upitnim zamjenicama.', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Glavna rečenica', def:'Rečenica koja stoji samostalno — nosi glavnu poruku. Zavisna se na nju nadovezuje. „Učim, jer želim položiti." (glavna: „Učim").', star:true, tag:''},
  {kat:'zavisno', term:'Zavisna rečenica', def:'Rečenica koja ovisi o glavnoj. Zamjenjuje neki rečenični član glavne (subjekt, predikat, objekt, atribut, P.O.).', star:true, tag:''},
  {kat:'zavisno', term:'Subjektna zavisna', def:'Zamjenjuje subjekt glavne. Veznici: tko, što, da. „Tko rano rani, dvije sreće grabi." Cijela zavisna = subjekt.', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Predikatna zavisna', def:'Zamjenjuje imenski dio predikata. Veznici: kakav, koji. NAJRJEĐA. „Ona je, kakvu sam tražio."', star:false, tag:'rijetka'},
  {kat:'zavisno', term:'Objektna zavisna', def:'Zamjenjuje objekt glavne. Veznici: da, što, kako, gdje, „li". NAJČEŠĆA. „Vjerujem da si u pravu." (vjerujem ŠTO?)', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Atributna zavisna', def:'Opisuje imenicu u glavnoj — uvodi je odnosna zamjenica koji/koja/koje. UVIJEK zarez pred „koji"! „Knjiga, koju čitam, je odlična."', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Mjesna zavisna', def:'Iznosi mjesto/smjer radnje. Veznici: gdje, kamo, kuda, odakle. „Idem gdje me vode."', star:false, tag:''},
  {kat:'zavisno', term:'Vremenska zavisna', def:'Iznosi vrijeme radnje. Veznici: kad, dok, otkad, čim, prije nego, nakon što. „Dođi kad budeš mogao."', star:true, tag:''},
  {kat:'zavisno', term:'Načinska zavisna', def:'Iznosi način radnje. Veznici: kako, kao da, kao što. „Radi kako sam rekao." „Pleše kao da nikad nije naučio."', star:false, tag:''},
  {kat:'zavisno', term:'Uzročna zavisna', def:'Iznosi uzrok radnje. Veznici: jer, zato što, budući da, što. NAJČEŠĆA priložna zavisna. „Učim jer želim položiti."', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Posljedična zavisna', def:'Iznosi posljedicu. Veznik „da" uz „toliko/tako". „Toliko sam umoran da spavam stojeći."', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Namjerna zavisna', def:'Iznosi namjeru/svrhu. Veznici: da, kako bi (s kondicionalom). „Učim da položim." „Žurim kako bih stigao."', star:true, tag:''},
  {kat:'zavisno', term:'Pogodbena (kondicionalna) zavisna', def:'Iznosi uvjet. Veznici: ako, kad bi, da (s kondicionalom). „Ako budeš učio, položit ćeš." „Da imam novca, kupio bih."', star:true, tag:'NCVVO'},
  {kat:'zavisno', term:'Dopusna (koncesivna) zavisna', def:'Iznosi dopust („usprkos čemu"). Veznici: iako, premda, mada, makar. „Iako sam umoran, idem trčati."', star:true, tag:''},
  {kat:'zavisno', term:'Imenske zavisne (skupina)', def:'4 zavisne koje zamjenjuju imenicu/im. sintagmu: subjektne, predikatne, objektne, atributne.', star:false, tag:''},

  // === KAT 5: VEZNICI I INTERPUNKCIJA (10) ===
  {kat:'veznici', term:'Veznik', def:'Nepromjenjiva vrsta riječi koja povezuje rečenice ili dijelove rečenica. Dijele se na nezavisne (i, ali, ili...) i zavisne (jer, da, ako...).', star:true, tag:''},
  {kat:'veznici', term:'Nezavisni veznici', def:'Spajaju 2 ravnopravne rečenice. 6 grupa: sastavni (i, pa, te), rastavni (ili), suprotni (a, ali, no), zaključni (zato, dakle), izuzetni (samo), objasnidbeni (naime).', star:true, tag:''},
  {kat:'veznici', term:'Zavisni veznici', def:'Uvode zavisnu rečenicu. Najčešći: jer, da, ako, kad, dok, iako, premda, koji, što, kako, gdje. Određuju vrstu zavisne.', star:true, tag:''},
  {kat:'veznici', term:'Odnosna zamjenica', def:'Zamjenica koja uvodi zavisnu rečenicu (uglavnom atributnu): koji, koja, koje, čiji, kakav. „Knjiga koju čitam je odlična."', star:true, tag:''},
  {kat:'veznici', term:'Upitna zamjenica (u zavisnoj)', def:'Tko, što, koji u funkciji veznika u zavisnoj rečenici. „Pitao je tko je došao." (objektna)', star:false, tag:''},
  {kat:'veznici', term:'Pravilo zareza pred „a/ali/no/nego"', def:'UVIJEK piše se zarez pred suprotnim veznicima. „Učim, ali sam umoran." „Nije pisao, nego je crtao."', star:true, tag:'pravopis'},
  {kat:'veznici', term:'Pravilo zareza pred „koji"', def:'UVIJEK zarez pred odnosnom zamjenicom „koji/koja/koje/koju" kad uvodi atributnu zavisnu. „Knjiga, koju čitam, je odlična."', star:true, tag:'pravopis'},
  {kat:'veznici', term:'Pravilo zareza pred „jer/da/ako"', def:'Kad zavisna dolazi NAKON glavne — uvijek zarez. „Učim, jer želim položiti."', star:true, tag:'pravopis'},
  {kat:'veznici', term:'Pravilo BEZ zareza („i, pa, te, ili")', def:'Pred sastavnim veznicima i, pa, te i rastavnim ili — obično NEMA zareza. „Učim i pišem zadaću." „Idem ili ostajem."', star:true, tag:'pravopis'},
  {kat:'veznici', term:'Umetnuta zavisna', def:'Zavisna unutar glavne — zarezi sa OBJE strane. „Knjiga, koju mi je dala, je odlična."', star:true, tag:'pravopis'},

  // === KAT 6: SINTAGME I OSTALO (14) ===
  {kat:'sintagme', term:'Sintagma', def:'Skupina riječi koja čini značenjsku cjelinu, ali nije rečenica (NEMA predikat). „Lijepa knjiga", „vrlo brzo", „u školi".', star:true, tag:''},
  {kat:'sintagme', term:'Imenska sintagma', def:'Sintagma s imenicom kao jezgrom + atributi. „Moja stara knjiga", „dječak iz susjedstva", „kuća na brijegu".', star:false, tag:''},
  {kat:'sintagme', term:'Glagolska sintagma', def:'Sintagma s glagolom kao jezgrom + objekti/priložne oznake. „Čitati knjigu", „doći kući", „učiti pažljivo".', star:false, tag:''},
  {kat:'sintagme', term:'Sročnost', def:'Slaganje dvije ili više riječi u rodu, broju, padežu (i licu kod glagola). „Visoki dječak" — m.r. + m.r. „Dvije knjige" — broj + ž.r. mn.', star:true, tag:''},
  {kat:'sintagme', term:'Red riječi', def:'Raspored riječi u rečenici. U hrvatskom je relativno slobodan zbog padeža, ali postoje preferencije: subjekt-predikat-objekt (SVO).', star:false, tag:''},
  {kat:'sintagme', term:'Aktiv', def:'Glagolsko stanje gdje subjekt vrši radnju. „Marija čita knjigu." (Marija = vršitelj, knjiga = objekt)', star:false, tag:''},
  {kat:'sintagme', term:'Pasiv', def:'Glagolsko stanje gdje subjekt trpi radnju. „Knjiga se čita." „Knjiga je pročitana." Tvori se s česticom „se" ili pridjevom trpnim.', star:true, tag:''},
  {kat:'sintagme', term:'Upravni govor', def:'Doslovno citiran tuđi govor — uvijek u navodnicima ili iza dvotočke. „Marija je rekla: „Dolazim sutra."" „Idem", rekao je.', star:true, tag:''},
  {kat:'sintagme', term:'Neupravni govor', def:'Pretvoreni tuđi govor — bez navodnika, kao zavisna objektna rečenica. „Marija je rekla da dolazi sutra."', star:true, tag:''},
  {kat:'sintagme', term:'Eliptična rečenica', def:'Rečenica iz koje je izostavljen neki član (najčešće predikat) — jasan iz konteksta. „A ti?" „Sutra u školu." „Bravo!"', star:false, tag:''},
  {kat:'sintagme', term:'Bezglagolska rečenica', def:'Posebna eliptična rečenica bez glagola — često uzvik, oslovljavanje, naslov. „Pažnja!", „Sretan put!", „Marija!"', star:false, tag:''},
  {kat:'sintagme', term:'Bezlična rečenica', def:'Rečenica u kojoj je subjekt nemoguć ili nepotreban. Glagol u 3. l. jd. sr.r. „Pada kiša." „Spava se." „Hladno je."', star:true, tag:''},
  {kat:'sintagme', term:'Sintaksa', def:'Grana gramatike koja proučava odnose riječi u rečenici, vrste rečenica i način njihovog povezivanja u veće cjeline.', star:true, tag:''},
  {kat:'sintagme', term:'Konjunkcija', def:'Latinski naziv za veznik. Iz lingvistike: konjunkcija = sastavna (and), disjunkcija = rastavna (or), kondicional = pogodba (if).', star:false, tag:''},
];let pojm2Active = 'all';
let pojm2Mode = 'grid';
let pj2Data = [];
let pj2Idx = 0;
let pj2Seen = {};

function renderPojm2(){
  const grid = document.getElementById('pojm-grid2');
  if(!grid) return;
  const show = pojm2Active === 'all' ? POJM_DATA2 : POJM_DATA2.filter(p => p.kat === pojm2Active);
  
  const KAT_LABELS = {
    'osnove':'Osnove',
    'vrste':'Vrste riječi',
    'padezi':'Padeži',
    'glagoli':'Glagoli',
    'zamjenice':'Zamjenice',
    'tvorba':'Tvorba',
    'meta':'Metajezik'
  };
  
  grid.innerHTML = show.map(p => \`
    <div class="pojm-card-h20" onclick="this.classList.toggle('open')">
      <div class="pc-kat">\${KAT_LABELS[p.kat] || p.kat}</div>
      <div class="pc-term">\${p.term}</div>
      <div class="pc-hint">→ klikni za definiciju</div>
      <div class="pc-def">\${p.def}</div>
    </div>
  \`).join('');
}

function pojmFilter2(cat, btn){
  document.querySelectorAll('.pojm-filter .pojm-fbt').forEach(b => b.classList.remove('on'));
  if(btn) btn.classList.add('on');
  pojm2Active = cat;
  renderPojm2();
}

// Auto-init
if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(renderPojm2, 150);
  });
  if(document.readyState !== 'loading'){
    setTimeout(renderPojm2, 150);
  }
}


/* TAB 5 · MORFO SCANNER (engine) */





/* ═══════════════════════════════════
   TAB 2 · INTERAKTIVNA VJEŽBA GLASOVNIH PROMJENA
═══════════════════════════════════ */

const GP_PAIRS = [
  {pair:['list', 'lišće'], answer:'jotacija', explain:'Jotacija: t+j → ć, s+j → š (zbirna imenica na -je)'},
  {pair:['vuk', 'vuče'], answer:'1palat', explain:'1. palatalizacija: k + e → č (vokativ jednine m.r.)'},
  {pair:['vojnik', 'vojnici'], answer:'sibilar', explain:'Sibilarizacija (2. palat.): k + i → c (N mn. m.r.)'},
  {pair:['čital', 'čitao'], answer:'vokal', explain:'Vokalizacija l: -l na kraju sloga → -o (gl. pridjev radni m.r.)'},
  {pair:['pas', 'psa'], answer:'nepost', explain:'Nepostojano a: a se gubi u kosim padežima (ali se vraća u G mn.: pasa)'},
  {pair:['svijet', 'svjetlost'], answer:'jat', explain:'Alternacija jata: ije (dugi slog) → je (kratki slog) — refleks praslav. *ě'},
  {pair:['bog', 'bože'], answer:'1palat', explain:'1. palatalizacija: g + e → ž (vokativ jednine m.r.)'},
  {pair:['iz+pasti', 'ispasti'], answer:'jednacenje', explain:'Jednačenje po zvučnosti: zvučni z → bezvučni s pred bezvučnim p'},
];

let gpIdx = 0;
let gpScore = 0;

function renderGpExercise(){
  const cont = document.getElementById('gp-exercise');
  if(!cont) return;
  
  if(gpIdx >= GP_PAIRS.length){
    renderGpResult();
    return;
  }
  
  const item = GP_PAIRS[gpIdx];
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">PITANJE \${gpIdx+1} / \${GP_PAIRS.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${gpScore}</div>
      </div>
      
      <div style="text-align:center;margin:24px 0;display:flex;align-items:center;justify-content:center;gap:20px;flex-wrap:wrap">
        <div style="font-family:var(--display);font-size:28px;font-weight:700;color:var(--t1);padding:14px 24px;background:var(--bg);border:1.5px solid var(--bd);border-radius:var(--r1)">\${item.pair[0]}</div>
        <div style="font-size:24px;color:var(--gold)">→</div>
        <div style="font-family:var(--display);font-size:28px;font-weight:700;color:var(--gold);padding:14px 24px;background:var(--bg);border:1.5px solid var(--gold);border-radius:var(--r1);box-shadow:0 2px 8px rgba(233,180,70,.15)">\${item.pair[1]}</div>
      </div>
      
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJA SE GLASOVNA PROMJENA DOGODILA?</div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px">
        <button class="gp-opt" data-ans="jotacija" onclick="gpAnswer('jotacija', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--blue);font-weight:700;margin-bottom:2px">1. Jotacija</div>
          <div style="font-size:10px;color:var(--t3)">C + j → palatalni</div>
        </button>
        <button class="gp-opt" data-ans="1palat" onclick="gpAnswer('1palat', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--bronze);font-weight:700;margin-bottom:2px">2. 1. palatalizacija</div>
          <div style="font-size:10px;color:var(--t3)">k,g,h + e/i → č,ž,š</div>
        </button>
        <button class="gp-opt" data-ans="sibilar" onclick="gpAnswer('sibilar', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--green);font-weight:700;margin-bottom:2px">3. Sibilarizacija</div>
          <div style="font-size:10px;color:var(--t3)">k,g,h + i → c,z,s</div>
        </button>
        <button class="gp-opt" data-ans="vokal" onclick="gpAnswer('vokal', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--red);font-weight:700;margin-bottom:2px">4. Vokalizacija l</div>
          <div style="font-size:10px;color:var(--t3)">-l → -o</div>
        </button>
        <button class="gp-opt" data-ans="nepost" onclick="gpAnswer('nepost', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:var(--gold);font-weight:700;margin-bottom:2px">5. Nepostojano a</div>
          <div style="font-size:10px;color:var(--t3)">a se gubi</div>
        </button>
        <button class="gp-opt" data-ans="jat" onclick="gpAnswer('jat', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:#9b59b6;font-weight:700;margin-bottom:2px">6. Alternacija jata</div>
          <div style="font-size:10px;color:var(--t3)">ije/je/e/i</div>
        </button>
        <button class="gp-opt" data-ans="jednacenje" onclick="gpAnswer('jednacenje', this)" style="padding:12px 14px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;text-align:left;transition:all .2s">
          <div style="color:#e67e22;font-weight:700;margin-bottom:2px">7. Jednačenje zvuč.</div>
          <div style="font-size:10px;color:var(--t3)">izjednač. zvučnost</div>
        </button>
      </div>
      
      <div id="gp-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function gpAnswer(chosen, btn){
  const item = GP_PAIRS[gpIdx];
  const correct = chosen === item.answer;
  if(correct) gpScore++;
  
  document.querySelectorAll('.gp-opt').forEach(b => {
    b.disabled = true;
    b.style.cursor = 'default';
    b.style.opacity = '0.5';
  });
  btn.style.opacity = '1';
  btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.gp-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity = '1';
        b.style.borderColor = 'var(--green)';
        b.style.background = 'rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('gp-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="gpNext()">\${gpIdx < GP_PAIRS.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function gpNext(){
  gpIdx++;
  renderGpExercise();
}

function renderGpResult(){
  const cont = document.getElementById('gp-exercise');
  const res = document.getElementById('gp-result');
  if(!cont || !res) return;
  
  cont.style.display = 'none';
  res.style.display = 'block';
  
  const pct = Math.round((gpScore / GP_PAIRS.length) * 100);
  let msg, color, emoji;
  if(pct === 100){ emoji='🏆'; msg='Savršeno! Sve glasovne promjene prepoznate.'; color='var(--gold)'; }
  else if(pct >= 75){ emoji='🎯'; msg='Odlično! Razlike među promjenama su ti jasne.'; color='var(--green)'; }
  else if(pct >= 50){ emoji='📖'; msg='Dobro, ali ima prostora — provjeri scene-cards iznad.'; color='var(--blue)'; }
  else{ emoji='⚠'; msg='Vrati se na scene-cards i ponovi pravila glasovnih promjena.'; color='var(--red)'; }
  
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${gpScore} / \${GP_PAIRS.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="gpReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

function gpReset(){
  gpIdx = 0;
  gpScore = 0;
  const res = document.getElementById('gp-result');
  const cont = document.getElementById('gp-exercise');
  if(res) res.style.display = 'none';
  if(cont) cont.style.display = '';
  renderGpExercise();
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(renderGpExercise, 200);
  });
  if(document.readyState !== 'loading'){
    setTimeout(renderGpExercise, 200);
  }
}


/* ═══════════════════════════════════
   TAB 1 · WORD CLASS IDENTIFICATION EXERCISE
═══════════════════════════════════ */

const WC_SENTENCES = [
  {sentence:['Mala','djevojka','brzo','trči','u','školu','.'], target:1, word:'djevojka', answer:'imenica', explain:'"Djevojka" odgovara na pitanje TKO/ŠTO? — imenica (biće), ž.r., N jd.'},
  {sentence:['Taj','pametan','dječak','čita','zanimljivu','knjigu','.'], target:1, word:'pametan', answer:'pridjev', explain:'"Pametan" odgovara na pitanje KAKAV? — pridjev (opisni, neodređeni oblik), m.r., N jd.'},
  {sentence:['Ivan','i','Ana','pjevaju','lijepu','pjesmu','.'], target:3, word:'pjevaju', answer:'glagol', explain:'"Pjevaju" = radnja u prezentu, 3. l. mn. — glagol (nesvršeni vid).'},
  {sentence:['Njegova','majka','radi','u','velikoj','bolnici','.'], target:0, word:'Njegova', answer:'zamjenica', explain:'"Njegova" = posvojna zamjenica — izražava pripadnost (čija majka?), ž.r., N jd.'},
  {sentence:['Pet','studenata','uspješno','položi','ispit','.'], target:0, word:'Pet', answer:'broj', explain:'"Pet" = glavni broj, označava količinu (5 studenata). Ne mijenja oblik.'},
  {sentence:['Knjiga','leži','na','velikom','stolu','.'], target:2, word:'na', answer:'prijedlog', explain:'"Na" = prijedlog — izražava odnos (gdje leži?), stoji uz imenicu u L.'},
  {sentence:['Došao','sam','u','školu','jer','je','početak','.'], target:4, word:'jer', answer:'veznik', explain:'"Jer" = veznik — povezuje zavisnu (uzročnu) rečenicu s glavnom. Nepromjenjiva riječ.'},
  {sentence:['Ona','je','vrlo','lijepo','otpjevala','arijetu','.'], target:3, word:'lijepo', answer:'prilog', explain:'"Lijepo" = prilog načina (KAKO je pjevala?) — opisuje radnju glagola.'},
];

let wcIdx = 0;
let wcScore = 0;
const WC_OPTIONS = ['imenica','pridjev','zamjenica','broj','glagol','prilog','prijedlog','veznik','uzvik','čestica'];

function renderWcExercise(){
  const cont = document.getElementById('wc-exercise');
  if(!cont) return;
  
  if(wcIdx >= WC_SENTENCES.length){
    renderWcResult();
    return;
  }
  
  const item = WC_SENTENCES[wcIdx];
  
  // Build sentence HTML with target word highlighted
  const sentenceHtml = item.sentence.map((w, i) => {
    if(i === item.target){
      return \`<span style="display:inline-block;padding:4px 10px;background:rgba(233,180,70,.15);border:2px solid var(--gold);border-radius:var(--r1);color:var(--gold);font-weight:700;margin:0 2px">\${w}</span>\`;
    }
    if(w === '.' || w === ',' || w === '!' || w === '?'){
      return w;
    }
    return \`<span style="margin:0 2px">\${w}</span>\`;
  }).join(' ').replace(/ ([.,!?])/g, '$1');
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">REČENICA \${wcIdx+1} / \${WC_SENTENCES.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${wcScore}</div>
      </div>
      
      <div style="text-align:center;margin:20px 0;padding:20px;background:var(--bg);border-radius:var(--r1);font-family:var(--display);font-size:16px;line-height:1.8;color:var(--t2)">
        \${sentenceHtml}
      </div>
      
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJA JE VRSTA OZNAČENE RIJEČI?</div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:6px">
        \${WC_OPTIONS.map(opt => \`
          <button class="wc-opt" data-ans="\${opt}" onclick="wcAnswer('\${opt}', this)" style="padding:10px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;transition:all .2s;text-transform:capitalize">
            \${opt}
          </button>
        \`).join('')}
      </div>
      
      <div id="wc-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function wcAnswer(chosen, btn){
  const item = WC_SENTENCES[wcIdx];
  const correct = chosen === item.answer;
  if(correct) wcScore++;
  
  document.querySelectorAll('.wc-opt').forEach(b => {
    b.disabled = true;
    b.style.cursor = 'default';
    b.style.opacity = '0.5';
  });
  btn.style.opacity = '1';
  btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.wc-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity = '1';
        b.style.borderColor = 'var(--green)';
        b.style.background = 'rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('wc-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="wcNext()">\${wcIdx < WC_SENTENCES.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function wcNext(){
  wcIdx++;
  renderWcExercise();
}

function renderWcResult(){
  const cont = document.getElementById('wc-exercise');
  const res = document.getElementById('wc-result');
  if(!cont || !res) return;
  
  cont.style.display = 'none';
  res.style.display = 'block';
  
  const pct = Math.round((wcScore / WC_SENTENCES.length) * 100);
  let msg, color, emoji;
  if(pct === 100){ emoji='🏆'; msg='Savršeno! Sve vrste riječi prepoznaješ bez problema.'; color='var(--gold)'; }
  else if(pct >= 75){ emoji='🎯'; msg='Odlično! Vrste riječi su ti jasne.'; color='var(--green)'; }
  else if(pct >= 50){ emoji='📖'; msg='Dobro, ali provjeri scene-cards još jednom — posebno zamjenice i priloge.'; color='var(--blue)'; }
  else{ emoji='⚠'; msg='Vrati se na scene-cards i pažljivo pročitaj definicije + primjere.'; color='var(--red)'; }
  
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${wcScore} / \${WC_SENTENCES.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="wcReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

function wcReset(){
  wcIdx = 0;
  wcScore = 0;
  const res = document.getElementById('wc-result');
  const cont = document.getElementById('wc-exercise');
  if(res) res.style.display = 'none';
  if(cont) cont.style.display = '';
  renderWcExercise();
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(renderWcExercise, 200);
  });
  if(document.readyState !== 'loading'){
    setTimeout(renderWcExercise, 200);
  }
}


/* ═══════════════════════════════════
   TAB 2 · NEPROMJENJIVE — DETECTION EXERCISE
═══════════════════════════════════ */

const NP_SENTENCES = [
  {sentence:['Ivan','je','došao','u','školu','jučer','.'], target:3, word:'u', answer:'prijedlog', explain:'"U" je prijedlog — dolazi uz akuzativ (u školu = kamo?). Izražava prostorni odnos (kretanje).'},
  {sentence:['Ana','pjeva','lijepo','i','glasno','.'], target:3, word:'i', answer:'veznik', explain:'"I" je nezavisni veznik (sastavni) — povezuje dva ravnopravna priloga (lijepo, glasno).'},
  {sentence:['Učim','jer','želim','položiti','maturu','.'], target:1, word:'jer', answer:'veznik', explain:'"Jer" je zavisni veznik (uzročni) — uvodi zavisnu uzročnu rečenicu (zašto učim?).'},
  {sentence:['Ah',',','kako','je','lijep','ovaj','dan','!'], target:0, word:'Ah', answer:'uzvik', explain:'"Ah" je emocionalni uzvik — izražava čuđenje/oduševljenje. Stoji odvojeno od rečenice.'},
  {sentence:['Ne','znam','kamo','idemo','sutra','.'], target:0, word:'Ne', answer:'čestica', explain:'"Ne" je niječna čestica — negira glagol "znam". Izražava stav govornika (negaciju).'},
  {sentence:['On','trči','vrlo','brzo','prema','kući','.'], target:2, word:'vrlo', answer:'prilog', explain:'"Vrlo" je prilog količine — opisuje drugi prilog ("brzo"). Stupnjuje intenzitet.'},
];

let npIdx = 0;
let npScore = 0;
const NP_OPTIONS = ['prilog','prijedlog','veznik','uzvik','čestica'];

function renderNpExercise(){
  const cont = document.getElementById('np-exercise');
  if(!cont) return;
  
  if(npIdx >= NP_SENTENCES.length){
    renderNpResult();
    return;
  }
  
  const item = NP_SENTENCES[npIdx];
  
  const sentenceHtml = item.sentence.map((w, i) => {
    if(i === item.target){
      return \`<span style="display:inline-block;padding:4px 10px;background:rgba(233,180,70,.15);border:2px solid var(--gold);border-radius:var(--r1);color:var(--gold);font-weight:700;margin:0 2px">\${w}</span>\`;
    }
    if(w === '.' || w === ',' || w === '!' || w === '?'){
      return w;
    }
    return \`<span style="margin:0 2px">\${w}</span>\`;
  }).join(' ').replace(/ ([.,!?])/g, '$1');
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">REČENICA \${npIdx+1} / \${NP_SENTENCES.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${npScore}</div>
      </div>
      
      <div style="text-align:center;margin:20px 0;padding:20px;background:var(--bg);border-radius:var(--r1);font-family:var(--display);font-size:16px;line-height:1.8;color:var(--t2)">
        \${sentenceHtml}
      </div>
      
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJA JE VRSTA OZNAČENE RIJEČI?</div>
      
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px">
        \${NP_OPTIONS.map(opt => \`
          <button class="np-opt" data-ans="\${opt}" onclick="npAnswer('\${opt}', this)" style="padding:12px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:13px;transition:all .2s;text-transform:capitalize">
            \${opt}
          </button>
        \`).join('')}
      </div>
      
      <div id="np-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function npAnswer(chosen, btn){
  const item = NP_SENTENCES[npIdx];
  const correct = chosen === item.answer;
  if(correct) npScore++;
  
  document.querySelectorAll('.np-opt').forEach(b => {
    b.disabled = true;
    b.style.cursor = 'default';
    b.style.opacity = '0.5';
  });
  btn.style.opacity = '1';
  btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.np-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity = '1';
        b.style.borderColor = 'var(--green)';
        b.style.background = 'rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('np-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="npNext()">\${npIdx < NP_SENTENCES.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function npNext(){
  npIdx++;
  renderNpExercise();
}

function renderNpResult(){
  const cont = document.getElementById('np-exercise');
  const res = document.getElementById('np-result');
  if(!cont || !res) return;
  
  cont.style.display = 'none';
  res.style.display = 'block';
  
  const pct = Math.round((npScore / NP_SENTENCES.length) * 100);
  let msg, color, emoji;
  if(pct === 100){ emoji='🏆'; msg='Savršeno! Sve nepromjenjive riječi prepoznaješ.'; color='var(--gold)'; }
  else if(pct >= 75){ emoji='🎯'; msg='Odlično! Razlike su ti jasne.'; color='var(--green)'; }
  else if(pct >= 50){ emoji='📖'; msg='Ponovi — posebno razliku između veznika i čestice.'; color='var(--blue)'; }
  else{ emoji='⚠'; msg='Vrati se na scene-cards i pažljivo pročitaj razlike (Box warn).'; color='var(--red)'; }
  
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${npScore} / \${NP_SENTENCES.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="npReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

function npReset(){
  npIdx = 0;
  npScore = 0;
  const res = document.getElementById('np-result');
  const cont = document.getElementById('np-exercise');
  if(res) res.style.display = 'none';
  if(cont) cont.style.display = '';
  renderNpExercise();
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(renderNpExercise, 250);
  });
  if(document.readyState !== 'loading'){
    setTimeout(renderNpExercise, 250);
  }
}


/* ═══════════════════════════════════
   TAB 3 · PADEŽNI DECLINER
═══════════════════════════════════ */

// BAZA IZNIMKI — nepravilne imenice + često pitane
const DECL_EXCEPTIONS = {
  'čovjek': {
    gender: 'm', type: 'a',
    forms: {
      N: ['čovjek', 'ljudi'], G: ['čovjeka', 'ljudi'], D: ['čovjeku', 'ljudima'],
      A: ['čovjeka', 'ljude'], V: ['čovječe', 'ljudi'], L: ['čovjeku', 'ljudima'],
      I: ['čovjekom', 'ljudima']
    },
    note: 'Supletivna množina — "ljudi" je poseban oblik (nije "čovjeci").'
  },
  'dijete': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['dijete', 'djeca'], G: ['djeteta', 'djece'], D: ['djetetu', 'djeci'],
      A: ['dijete', 'djecu'], V: ['dijete', 'djeco'], L: ['djetetu', 'djeci'],
      I: ['djetetom', 'djecom']
    },
    note: 'Zbirna množina "djeca" se sklanja u jednini (kao ž.r.), ali gramatički je množina.'
  },
  'pas': {
    gender: 'm', type: 'a',
    forms: {
      N: ['pas', 'psi'], G: ['psa', 'pasa'], D: ['psu', 'psima'],
      A: ['psa', 'pse'], V: ['pase', 'psi'], L: ['psu', 'psima'],
      I: ['psom', 'psima']
    },
    note: 'Nepostojano a — a nestaje u kosim padežima (pas → psa).'
  },
  'noga': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['noga', 'noge'], G: ['noge', 'nogu'], D: ['nozi', 'nogama'],
      A: ['nogu', 'noge'], V: ['nogo', 'noge'], L: ['nozi', 'nogama'],
      I: ['nogom', 'nogama']
    },
    note: 'Sibilarizacija u D/L jd. (noga → nozi).'
  },
  'ruka': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['ruka', 'ruke'], G: ['ruke', 'ruku'], D: ['ruci', 'rukama'],
      A: ['ruku', 'ruke'], V: ['ruko', 'ruke'], L: ['ruci', 'rukama'],
      I: ['rukom', 'rukama']
    },
    note: 'Sibilarizacija u D/L jd. (ruka → ruci).'
  },
  'majka': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['majka', 'majke'], G: ['majke', 'majki'], D: ['majci', 'majkama'],
      A: ['majku', 'majke'], V: ['majko', 'majke'], L: ['majci', 'majkama'],
      I: ['majkom', 'majkama']
    },
    note: 'Sibilarizacija u D/L jd. (majka → majci).'
  },
  'vojnik': {
    gender: 'm', type: 'a',
    forms: {
      N: ['vojnik', 'vojnici'], G: ['vojnika', 'vojnika'], D: ['vojniku', 'vojnicima'],
      A: ['vojnika', 'vojnike'], V: ['vojniče', 'vojnici'], L: ['vojniku', 'vojnicima'],
      I: ['vojnikom', 'vojnicima']
    },
    note: 'Sibilarizacija u N/V mn. (vojnik → vojnici). V jd. ima 1. palatalizaciju (vojniče).'
  },
  'Bog': {
    gender: 'm', type: 'a',
    forms: {
      N: ['Bog', 'bogovi'], G: ['Boga', 'bogova'], D: ['Bogu', 'bogovima'],
      A: ['Boga', 'bogove'], V: ['Bože', 'bogovi'], L: ['Bogu', 'bogovima'],
      I: ['Bogom', 'bogovima']
    },
    note: 'V jd. "Bože" — 1. palatalizacija (g → ž).'
  },
  'noć': {
    gender: 'ž', type: 'i',
    forms: {
      N: ['noć', 'noći'], G: ['noći', 'noći'], D: ['noći', 'noćima'],
      A: ['noć', 'noći'], V: ['noći', 'noći'], L: ['noći', 'noćima'],
      I: ['noći / noću', 'noćima']
    },
    note: 'I-vrsta ž.r. (završava suglasnikom). I jd. ima oblik "noću" (kao prilog: "po noći").'
  },
  'stvar': {
    gender: 'ž', type: 'i',
    forms: {
      N: ['stvar', 'stvari'], G: ['stvari', 'stvari'], D: ['stvari', 'stvarima'],
      A: ['stvar', 'stvari'], V: ['stvari', 'stvari'], L: ['stvari', 'stvarima'],
      I: ['stvari / stvarju', 'stvarima']
    },
    note: 'I-vrsta ž.r.'
  },
  'kost': {
    gender: 'ž', type: 'i',
    forms: {
      N: ['kost', 'kosti'], G: ['kosti', 'kostiju'], D: ['kosti', 'kostima'],
      A: ['kost', 'kosti'], V: ['kosti', 'kosti'], L: ['kosti', 'kostima'],
      I: ['kosti / košću', 'kostima']
    },
    note: 'I-vrsta ž.r. G mn. završava -iju (kostiju).'
  },
  'ljubav': {
    gender: 'ž', type: 'i',
    forms: {
      N: ['ljubav', 'ljubavi'], G: ['ljubavi', 'ljubavi'], D: ['ljubavi', 'ljubavima'],
      A: ['ljubav', 'ljubavi'], V: ['ljubavi', 'ljubavi'], L: ['ljubavi', 'ljubavima'],
      I: ['ljubavi / ljubavlju', 'ljubavima']
    },
    note: 'I-vrsta ž.r. I jd. ima dva oblika — "ljubavi" i "ljubavlju".'
  },
  'brat': {
    gender: 'm', type: 'a',
    forms: {
      N: ['brat', 'braća'], G: ['brata', 'braće'], D: ['bratu', 'braći'],
      A: ['brata', 'braću'], V: ['brate', 'braćo'], L: ['bratu', 'braći'],
      I: ['bratom', 'braćom']
    },
    note: 'Zbirna množina "braća" sklanja se u jednini (kao ž.r.).'
  },
  'sin': {
    gender: 'm', type: 'a',
    forms: {
      N: ['sin', 'sinovi'], G: ['sina', 'sinova'], D: ['sinu', 'sinovima'],
      A: ['sina', 'sinove'], V: ['sine', 'sinovi'], L: ['sinu', 'sinovima'],
      I: ['sinom', 'sinovima']
    },
    note: 'M.r. kratka riječ s umetkom -ov- u množini.'
  },
  'otac': {
    gender: 'm', type: 'a',
    forms: {
      N: ['otac', 'očevi'], G: ['oca', 'očeva'], D: ['ocu', 'očevima'],
      A: ['oca', 'očeve'], V: ['oče', 'očevi'], L: ['ocu', 'očevima'],
      I: ['ocem', 'očevima']
    },
    note: 'Nepostojano a + palatalizacija (c→č) u množini.'
  },
  'tata': {
    gender: 'm', type: 'e',
    forms: {
      N: ['tata', 'tate'], G: ['tate', 'tata'], D: ['tati', 'tatama'],
      A: ['tatu', 'tate'], V: ['tata', 'tate'], L: ['tati', 'tatama'],
      I: ['tatom', 'tatama']
    },
    note: 'M.r. na -a — sklanja se kao e-vrsta (ženska), ali rod je muški (slaganje s pridjevima: dobar tata).'
  },
  'oko': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['oko', 'oči'], G: ['oka', 'očiju'], D: ['oku', 'očima'],
      A: ['oko', 'oči'], V: ['oko', 'oči'], L: ['oku', 'očima'],
      I: ['okom', 'očima']
    },
    note: 'Supletivna množina "oči" (stari dvojinski oblik) — ž.r. i-vrste u mn.'
  },
  'uho': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['uho', 'uši'], G: ['uha', 'ušiju'], D: ['uhu', 'ušima'],
      A: ['uho', 'uši'], V: ['uho', 'uši'], L: ['uhu', 'ušima'],
      I: ['uhom', 'ušima']
    },
    note: 'Supletivna množina "uši" (stari dvojinski oblik).'
  },
  'gospodin': {
    gender: 'm', type: 'a',
    forms: {
      N: ['gospodin', 'gospoda'], G: ['gospodina', 'gospode'], D: ['gospodinu', 'gospodi'],
      A: ['gospodina', 'gospodu'], V: ['gospodine', 'gospodo'], L: ['gospodinu', 'gospodi'],
      I: ['gospodinom', 'gospodom']
    },
    note: 'Nepravilna zbirna množina "gospoda" — sklanja se u jednini (kao ž.r.).'
  },
  'selo': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['selo', 'sela'], G: ['sela', 'sela'], D: ['selu', 'selima'],
      A: ['selo', 'sela'], V: ['selo', 'sela'], L: ['selu', 'selima'],
      I: ['selom', 'selima']
    },
    note: 'Sr.r. a-vrsta — tipično sklanjanje.'
  },
  'more': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['more', 'mora'], G: ['mora', 'mora'], D: ['moru', 'morima'],
      A: ['more', 'mora'], V: ['more', 'mora'], L: ['moru', 'morima'],
      I: ['morem', 'morima']
    },
    note: 'Sr.r. palatalna osnova — I jd. ima -em umjesto -om.'
  },
  // === DODATNE IZNIMKE (UPGRADE) ===
  'prst': {
    gender: 'm', type: 'a',
    forms: {
      N: ['prst', 'prsti'], G: ['prsta', 'prstiju / prsta'], D: ['prstu', 'prstima'],
      A: ['prst', 'prste'], V: ['prste', 'prsti'], L: ['prstu', 'prstima'],
      I: ['prstom', 'prstima']
    },
    note: 'G mn. ima dva oblika — "prstiju" i "prsta".'
  },
  'gost': {
    gender: 'm', type: 'a',
    forms: {
      N: ['gost', 'gosti'], G: ['gosta', 'gostiju'], D: ['gostu', 'gostima'],
      A: ['gosta', 'goste'], V: ['goste', 'gosti'], L: ['gostu', 'gostima'],
      I: ['gostom', 'gostima']
    },
    note: 'M.r. s G mn. -iju (kao i-vrsta).'
  },
  'put': {
    gender: 'm', type: 'a',
    forms: {
      N: ['put', 'putovi / puti'], G: ['puta', 'putova / puti'], D: ['putu', 'putovima'],
      A: ['put', 'putove'], V: ['pute', 'putovi'], L: ['putu', 'putovima'],
      I: ['putem / putom', 'putovima']
    },
    note: 'I jd. ima oblike "putem" (po putu) i "putom" (jednom). Mn. ima 2 oblika ("putovi" je češći).'
  },
  'dan': {
    gender: 'm', type: 'a',
    forms: {
      N: ['dan', 'dani'], G: ['dana', 'dana'], D: ['danu', 'danima'],
      A: ['dan', 'dane'], V: ['dane', 'dani'], L: ['danu', 'danima'],
      I: ['danom', 'danima']
    },
    note: 'M.r. s G mn. = G jd. (rijetkost u m.r.).'
  },
  'pjesma': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['pjesma', 'pjesme'], G: ['pjesme', 'pjesama'], D: ['pjesmi', 'pjesmama'],
      A: ['pjesmu', 'pjesme'], V: ['pjesmo', 'pjesme'], L: ['pjesmi', 'pjesmama'],
      I: ['pjesmom', 'pjesmama']
    },
    note: 'G mn. s nepostojanim a — "pjesama".'
  },
  'sestra': {
    gender: 'ž', type: 'e',
    forms: {
      N: ['sestra', 'sestre'], G: ['sestre', 'sestara'], D: ['sestri', 'sestrama'],
      A: ['sestru', 'sestre'], V: ['sestro', 'sestre'], L: ['sestri', 'sestrama'],
      I: ['sestrom', 'sestrama']
    },
    note: 'G mn. s nepostojanim a — "sestara".'
  },
  'jaje': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['jaje', 'jaja'], G: ['jaja', 'jaja'], D: ['jajetu', 'jajima'],
      A: ['jaje', 'jaja'], V: ['jaje', 'jaja'], L: ['jajetu', 'jajima'],
      I: ['jajetom / jajem', 'jajima']
    },
    note: 'Sr.r. s posebnim oblikom u D/L jd. (-etu).'
  },
  'ime': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['ime', 'imena'], G: ['imena', 'imena'], D: ['imenu', 'imenima'],
      A: ['ime', 'imena'], V: ['ime', 'imena'], L: ['imenu', 'imenima'],
      I: ['imenom', 'imenima']
    },
    note: 'Sr.r. s n-osnovom — proširuje se s -en- (ime → imen-a, imen-u, imen-om).'
  },
  'vrijeme': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['vrijeme', 'vremena'], G: ['vremena', 'vremena'], D: ['vremenu', 'vremenima'],
      A: ['vrijeme', 'vremena'], V: ['vrijeme', 'vremena'], L: ['vremenu', 'vremenima'],
      I: ['vremenom', 'vremenima']
    },
    note: 'Sr.r. s n-osnovom + alternacija jata (vrije/vreme).'
  },
  'rame': {
    gender: 'sr', type: 'a',
    forms: {
      N: ['rame', 'ramena'], G: ['ramena', 'ramena'], D: ['ramenu', 'ramenima'],
      A: ['rame', 'ramena'], V: ['rame', 'ramena'], L: ['ramenu', 'ramenima'],
      I: ['ramenom', 'ramenima']
    },
    note: 'Sr.r. s n-osnovom (kao "ime").'
  }
};

// Detekcija deklinacijske vrste i roda (heuristika)
function detectDeclType(word){
  const w = word.toLowerCase();
  if(w.endsWith('a')){
    if(['tata','papa','djed','vojvoda','starješina','kolega','sudac'].includes(w)){
      return {type:'e', gender:'m'};
    }
    return {type:'e', gender:'ž'};
  }
  if(w.endsWith('o') || w.endsWith('e')){
    return {type:'a', gender:'sr'};
  }
  // Konstantna imena na -i (i-vrsta ž.r.) ili neka specifična
  if(['noć','stvar','ljubav','kost','mast','mladost','sreća','radost','glad','riječ'].includes(w)){
    return {type:'i', gender:'ž'};
  }
  // Default — suglasnik = a-vrsta m.r.
  return {type:'a', gender:'m'};
}

// Primjena glasovnih promjena (za regular declension)
function applySoundChanges(stem, ending, position){
  const last = stem[stem.length-1];
  // Sibilarizacija (k, g, h + i → c, z, s) u D/L jd. i N/V mn.
  if(ending.startsWith('i') && (position === 'Djd' || position === 'Ljd' || position === 'Nmn' || position === 'Vmn')){
    if(last === 'k') return stem.slice(0, -1) + 'c' + ending;
    if(last === 'g') return stem.slice(0, -1) + 'z' + ending;
    if(last === 'h') return stem.slice(0, -1) + 's' + ending;
  }
  // 1. palatalizacija (k, g, h + e → č, ž, š) u V jd.
  if(ending.startsWith('e') && position === 'Vjd'){
    if(last === 'k') return stem.slice(0, -1) + 'č' + ending;
    if(last === 'g') return stem.slice(0, -1) + 'ž' + ending;
    if(last === 'h') return stem.slice(0, -1) + 'š' + ending;
    if(last === 'c') return stem.slice(0, -1) + 'č' + ending;
  }
  return stem + ending;
}

// Regular declension engine
function declineRegular(word, type, gender){
  const forms = {};
  const w = word.toLowerCase();
  const animate = isAnimate(w);
  
  if(type === 'a' && gender === 'm'){
    const stem = w;
    forms.N = [w, applySoundChanges(stem, 'i', 'Nmn')];
    forms.G = [applySoundChanges(stem, 'a', 'Gjd'), applySoundChanges(stem, 'a', 'Gmn')];
    forms.D = [applySoundChanges(stem, 'u', 'Djd'), applySoundChanges(stem, 'ima', 'Dmn')];
    // A jd. — živo = G jd., neživo = N jd.
    forms.A = [animate ? applySoundChanges(stem, 'a', 'Gjd') : w, applySoundChanges(stem, 'e', 'Amn')];
    forms.V = [applySoundChanges(stem, 'e', 'Vjd'), applySoundChanges(stem, 'i', 'Vmn')];
    forms.L = [applySoundChanges(stem, 'u', 'Ljd'), applySoundChanges(stem, 'ima', 'Lmn')];
    forms.I = [applySoundChanges(stem, 'om', 'Ijd'), applySoundChanges(stem, 'ima', 'Imn')];
  } else if(type === 'a' && gender === 'sr'){
    const stem = w.slice(0, -1);
    const isE = w.endsWith('e');
    forms.N = [w, stem + 'a'];
    forms.G = [stem + 'a', stem + 'a'];
    forms.D = [stem + 'u', stem + 'ima'];
    forms.A = [w, stem + 'a'];
    forms.V = [w, stem + 'a'];
    forms.L = [stem + 'u', stem + 'ima'];
    forms.I = [stem + (isE ? 'em' : 'om'), stem + 'ima'];
  } else if(type === 'e'){
    const stem = w.slice(0, -1);
    forms.N = [w, stem + 'e'];
    forms.G = [stem + 'e', stem + 'a'];
    forms.D = [applySoundChanges(stem, 'i', 'Djd'), stem + 'ama'];
    forms.A = [stem + 'u', stem + 'e'];
    forms.V = [stem + 'o', stem + 'e'];
    forms.L = [applySoundChanges(stem, 'i', 'Ljd'), stem + 'ama'];
    forms.I = [stem + 'om', stem + 'ama'];
  } else if(type === 'i'){
    const stem = w;
    forms.N = [w, stem + 'i'];
    forms.G = [stem + 'i', stem + 'i'];
    forms.D = [stem + 'i', stem + 'ima'];
    forms.A = [w, stem + 'i'];
    forms.V = [stem + 'i', stem + 'i'];
    forms.L = [stem + 'i', stem + 'ima'];
    forms.I = [stem + 'i / ' + stem + 'ju', stem + 'ima'];
  }
  
  return forms;
}

function declineNoun(){
  const input = document.getElementById('decl-input');
  const out = document.getElementById('decl-results');
  if(!input || !out) return;
  
  const word = input.value.trim().toLowerCase();
  if(!word){ out.innerHTML = ''; return; }
  
  if(!/^[a-zčćđšž]+$/.test(word)){
    out.innerHTML = '<div class="box-warn"><div class="bw-body"><div class="bw-txt">Samo hrv. slova (a-ž), bez razmaka.</div></div></div>';
    return;
  }
  
  let result, gender, type, note, isException = false;
  
  // Provjeri bazu iznimki
  if(DECL_EXCEPTIONS[word]){
    const exc = DECL_EXCEPTIONS[word];
    result = exc.forms;
    gender = exc.gender;
    type = exc.type;
    note = exc.note;
    isException = true;
  } else {
    const detected = detectDeclType(word);
    type = detected.type;
    gender = detected.gender;
    result = declineRegular(word, type, gender);
    note = \`Regularno sklanjanje · \${type}-vrsta · \${gender}.r.\`;
  }
  
  const GENDER_LABEL = {'m':'muški rod','ž':'ženski rod','sr':'srednji rod'};
  const TYPE_LABEL = {'a':'a-vrsta','e':'e-vrsta','i':'i-vrsta'};
  
  const PADEZ_NAMES = [
    ['N','Nominativ','tko? što?','var(--blue)'],
    ['G','Genitiv','koga? čega?','var(--red)'],
    ['D','Dativ','komu? čemu?','var(--bronze)'],
    ['A','Akuzativ','koga? što?','var(--green)'],
    ['V','Vokativ','(dozivanje)','var(--gold)'],
    ['L','Lokativ','o kome? o čemu?','#9b59b6'],
    ['I','Instrumental','s kim? s čim?','#e67e22']
  ];
  
  let html = \`
    <div style="padding:18px;background:linear-gradient(135deg,rgba(233,180,70,.08),transparent);border:1px solid rgba(233,180,70,.3);border-radius:var(--r2);margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
        <div>
          <div style="font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:2px">DEKLINACIJA</div>
          <div style="font-family:var(--display);font-size:28px;font-weight:700;color:var(--gold);margin-top:4px">\${word}</div>
        </div>
        <div style="text-align:right">
          <div style="font-family:var(--mono);font-size:11px;color:var(--t2)">\${GENDER_LABEL[gender]} · \${TYPE_LABEL[type]}</div>
          \${isException ? '<div style="font-family:var(--mono);font-size:10px;color:var(--bronze);margin-top:4px">⚠ IZNIMKA · iz baze</div>' : ''}
        </div>
      </div>
    </div>

    <div class="table-wrap" style="overflow-x:auto;margin:12px 0">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:13px">
        <thead>
          <tr style="background:var(--ele);border-bottom:2px solid var(--bd)">
            <th style="padding:10px;text-align:left;color:var(--gold)">Padež</th>
            <th style="padding:10px;text-align:left;color:var(--gold)">Pitanje</th>
            <th style="padding:10px;text-align:center;color:var(--gold)">Jednina</th>
            <th style="padding:10px;text-align:center;color:var(--gold)">Množina</th>
          </tr>
        </thead>
        <tbody>
  \`;
  
  PADEZ_NAMES.forEach(([key, name, q, color]) => {
    const [jd, mn] = result[key] || ['—','—'];
    html += \`
      <tr style="border-bottom:1px solid var(--bd)">
        <td style="padding:10px;color:\${color};font-weight:700">\${name}</td>
        <td style="padding:10px;color:var(--t3);font-size:11px">\${q}</td>
        <td style="padding:10px;text-align:center;color:var(--t1);font-weight:600">\${jd}</td>
        <td style="padding:10px;text-align:center;color:var(--t1);font-weight:600">\${mn}</td>
      </tr>
    \`;
  });
  
  html += \`
        </tbody>
      </table>
    </div>
  \`;
  
  if(note){
    html += \`
      <div class="box-signal" style="margin-top:12px">
        <div class="box-signal-lbl">💡 Napomena</div>
        <div class="box-signal-txt">\${note}</div>
      </div>
    \`;
  }
  
  if(!isException){
    html += \`
      <div style="font-family:var(--mono);font-size:10px;color:var(--t3);text-align:center;margin-top:8px">⚠ Algoritamska deklinacija — provjeri u rječniku za stilistički specifične oblike</div>
    \`;
  }
  
  // Action buttons at bottom
  html += \`
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;flex-wrap:wrap">
      <button class="nb-btn" id="decl-copy-btn" style="padding:6px 12px;font-size:12px" onclick="declineCopyTable()">📋 Kopiraj tablicu</button>
      <button class="nb-btn" style="padding:6px 12px;font-size:12px" onclick="window.print()">🖨 Printaj</button>
    </div>
  \`;
  
    // Save to history
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.decl_hist')||'[]');
    if(!hist.some(h => h.word === word)){
      hist.push({word, date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h21.decl_hist', JSON.stringify(hist.slice(-15)));
    }
  } catch(e){}
  
  out.innerHTML = html;
}

function declineExample(word){
  const input = document.getElementById('decl-input');
  if(input){
    input.value = word;
    declineNoun();
    input.scrollIntoView({behavior:'smooth', block:'center'});
  }
}


/* ═══════════════════════════════════
   TAB 3 · PADEŽNI QUIZ
═══════════════════════════════════ */

const PZ_ITEMS = [
  {sentence:['Ivan','je','vidio','Anu','u','parku','.'], target:3, word:'Anu', answer:'A', explain:'"Anu" je izravni objekt glagola "vidio" — akuzativ (A). Pitanje: koga je vidio? → Anu.'},
  {sentence:['Dao','sam','knjigu','prijatelju','.'], target:3, word:'prijatelju', answer:'D', explain:'"Prijatelju" je primatelj — dativ (D). Pitanje: komu sam dao? → prijatelju.'},
  {sentence:['Boravim','u','Zagrebu','već','5','godina','.'], target:2, word:'Zagrebu', answer:'L', explain:'"Zagrebu" označava mjesto (gdje?) — lokativ (L). Uz prijedlog "u" + L = mirovanje.'},
  {sentence:['Kupila','je','cvijeće','za','majčin','rođendan','.'], target:5, word:'rođendan', answer:'A', explain:'"Rođendan" — akuzativ (A), uz prijedlog "za". Pitanje: za što? → za rođendan.'},
  {sentence:['Otišao','je','od','kuće','rano','ujutro','.'], target:3, word:'kuće', answer:'G', explain:'"Kuće" je genitiv (G) uz prijedlog "od". Pitanje: od čega? → od kuće.'},
  {sentence:['Šetali','su','se','s','djecom','po','parku','.'], target:4, word:'djecom', answer:'I', explain:'"Djecom" je instrumental (I) uz prijedlog "s" — društvo. Pitanje: s kim? → s djecom.'},
  {sentence:['Ivane',',','dođi','ovamo','!'], target:0, word:'Ivane', answer:'V', explain:'"Ivane" — vokativ (V). Dozivanje osobe, stoji odvojeno (obično sa zarezom ili uskličnikom).'},
  {sentence:['Knjiga','leži','na','stolu','kraj','prozora','.'], target:3, word:'stolu', answer:'L', explain:'"Stolu" je lokativ (L) uz prijedlog "na" — gdje leži? Stanje mirovanja.'},
];

let pzIdx = 0, pzScore = 0;
const PZ_OPTIONS = [
  {key:'N', name:'Nominativ', color:'var(--blue)'},
  {key:'G', name:'Genitiv', color:'var(--red)'},
  {key:'D', name:'Dativ', color:'var(--bronze)'},
  {key:'A', name:'Akuzativ', color:'var(--green)'},
  {key:'V', name:'Vokativ', color:'var(--gold)'},
  {key:'L', name:'Lokativ', color:'#9b59b6'},
  {key:'I', name:'Instrumental', color:'#e67e22'}
];

function renderPzExercise(){
  const cont = document.getElementById('pz-exercise');
  if(!cont) return;
  if(pzIdx >= PZ_ITEMS.length){ renderPzResult(); return; }
  
  const item = PZ_ITEMS[pzIdx];
  const sentenceHtml = item.sentence.map((w, i) => {
    if(i === item.target){
      return \`<span style="display:inline-block;padding:4px 10px;background:rgba(233,180,70,.15);border:2px solid var(--gold);border-radius:var(--r1);color:var(--gold);font-weight:700;margin:0 2px">\${w}</span>\`;
    }
    if(w === '.' || w === ',' || w === '!' || w === '?') return w;
    return \`<span style="margin:0 2px">\${w}</span>\`;
  }).join(' ').replace(/ ([.,!?])/g, '$1');
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">PITANJE \${pzIdx+1} / \${PZ_ITEMS.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${pzScore}</div>
      </div>
      <div style="text-align:center;margin:20px 0;padding:20px;background:var(--bg);border-radius:var(--r1);font-family:var(--display);font-size:16px;line-height:1.8;color:var(--t2)">\${sentenceHtml}</div>
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJI JE PADEŽ OZNAČENE RIJEČI?</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:6px">
        \${PZ_OPTIONS.map(opt => \`
          <button class="pz-opt" data-ans="\${opt.key}" onclick="pzAnswer('\${opt.key}', this)" style="padding:12px 10px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;transition:all .2s;text-align:left">
            <div style="font-weight:700;color:\${opt.color}">\${opt.key}</div>
            <div style="font-size:10px;color:var(--t3)">\${opt.name}</div>
          </button>
        \`).join('')}
      </div>
      <div id="pz-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function pzAnswer(chosen, btn){
  const item = PZ_ITEMS[pzIdx];
  const correct = chosen === item.answer;
  if(correct) pzScore++;
  
  document.querySelectorAll('.pz-opt').forEach(b => {b.disabled=true;b.style.cursor='default';b.style.opacity='0.5';});
  btn.style.opacity='1'; btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.pz-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity='1'; b.style.borderColor='var(--green)'; b.style.background='rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('pz-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="pzNext()">\${pzIdx < PZ_ITEMS.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function pzNext(){ pzIdx++; renderPzExercise(); }
function pzReset(){ pzIdx=0; pzScore=0; const r=document.getElementById('pz-result'),c=document.getElementById('pz-exercise'); if(r)r.style.display='none'; if(c)c.style.display=''; renderPzExercise(); }

function renderPzResult(){
  const cont = document.getElementById('pz-exercise'), res = document.getElementById('pz-result');
  if(!cont || !res) return;
  cont.style.display='none'; res.style.display='block';
  const pct = Math.round((pzScore/PZ_ITEMS.length)*100);
  let msg, color, emoji;
  if(pct===100){emoji='🏆';msg='Savršeno! Padeži su ti potpuno jasni.';color='var(--gold)';}
  else if(pct>=75){emoji='🎯';msg='Odlično! Solidan temelj.';color='var(--green)';}
  else if(pct>=50){emoji='📖';msg='Dobro, ali vježbaj s declinerom iznad.';color='var(--blue)';}
  else{emoji='⚠';msg='Ponovi scene-cards svakog padeža + pitanja.';color='var(--red)';}
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${pzScore} / \${PZ_ITEMS.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="pzReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){ setTimeout(renderPzExercise, 300); });
  if(document.readyState !== 'loading'){ setTimeout(renderPzExercise, 300); }
}


/* ═══════════════════════════════════
   TAB 3 · KONJUGACIJSKI QUIZ
═══════════════════════════════════ */

const KZ_ITEMS = [
  {form:'čitam', base:'čitati', answer:'prezent 1. l. jd.', explain:'"Čitam" — prezent, 1. lice jednine. Tvorba: osnova "čit-" + nastavak "-am".'},
  {form:'napisao sam', base:'napisati', answer:'perfekt 1. l. jd. m.r.', explain:'"Napisao sam" — perfekt, 1. l. jd. (m.r.). Tvorba: prezent "biti" + glagolski pridjev radni.'},
  {form:'pročitat ću', base:'pročitati', answer:'futur I 1. l. jd.', explain:'"Pročitat ću" — futur I, 1. l. jd. Tvorba: infinitiv bez -i + nenaglašeni "htjeti" (ću).'},
  {form:'čitao bih', base:'čitati', answer:'kondicional I 1. l. jd. m.r.', explain:'"Čitao bih" — kondicional I, 1. l. jd. (m.r.). Tvorba: aorist pomoćnog glagola "biti" (bih) + pridjev radni.'},
  {form:'čitaj!', base:'čitati', answer:'imperativ 2. l. jd.', explain:'"Čitaj!" — imperativ, 2. l. jd. Zapovijed upućena sugovorniku.'},
  {form:'budem čitao', base:'čitati', answer:'futur II 1. l. jd. m.r.', explain:'"Budem čitao" — futur II, 1. l. jd. (m.r.). Tvorba: prezent svršenog "biti" (budem) + pridjev radni. Koristi se u zavisnim rečenicama.'},
];

let kzIdx = 0, kzScore = 0;
const KZ_OPTIONS = [
  'prezent 1. l. jd.', 'prezent 3. l. mn.',
  'perfekt 1. l. jd. m.r.', 'perfekt 3. l. jd. ž.r.',
  'aorist 1. l. jd.',
  'futur I 1. l. jd.', 'futur I 3. l. mn.',
  'futur II 1. l. jd. m.r.',
  'imperativ 2. l. jd.', 'imperativ 1. l. mn.',
  'kondicional I 1. l. jd. m.r.', 'kondicional II 1. l. jd. m.r.'
];

function renderKzExercise(){
  const cont = document.getElementById('kz-exercise');
  if(!cont) return;
  if(kzIdx >= KZ_ITEMS.length){ renderKzResult(); return; }
  
  const item = KZ_ITEMS[kzIdx];
  
  // Build 4 option choices: correct + 3 distractors
  const wrong = KZ_OPTIONS.filter(o => o !== item.answer);
  const shuffled = wrong.sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [item.answer, ...shuffled].sort(() => Math.random() - 0.5);
  
  cont.innerHTML = \`
    <div style="padding:20px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">PITANJE \${kzIdx+1} / \${KZ_ITEMS.length}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--gold)">✓ \${kzScore}</div>
      </div>
      <div style="text-align:center;margin:20px 0;padding:24px;background:var(--bg);border-radius:var(--r1)">
        <div style="font-family:var(--display);font-size:28px;font-weight:700;color:var(--gold);margin-bottom:4px">\${item.form}</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1px">osnova: \${item.base}</div>
      </div>
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center;margin-bottom:14px;letter-spacing:1px">KOJI JE OBLIK?</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        \${options.map(opt => \`
          <button class="kz-opt" data-ans="\${opt}" onclick="kzAnswer('\${opt}', this)" style="padding:12px;background:transparent;border:1.5px solid var(--bd);border-radius:var(--r1);cursor:pointer;color:var(--t1);font-family:var(--display);font-size:12px;transition:all .2s;text-align:left">
            \${opt}
          </button>
        \`).join('')}
      </div>
      <div id="kz-feedback" style="margin-top:14px"></div>
    </div>
  \`;
}

function kzAnswer(chosen, btn){
  const item = KZ_ITEMS[kzIdx];
  const correct = chosen === item.answer;
  if(correct) kzScore++;
  
  document.querySelectorAll('.kz-opt').forEach(b => {b.disabled=true;b.style.cursor='default';b.style.opacity='0.5';});
  btn.style.opacity='1'; btn.style.borderColor = correct ? 'var(--green)' : 'var(--red)';
  btn.style.background = correct ? 'rgba(80,200,120,.1)' : 'rgba(224,82,82,.1)';
  
  if(!correct){
    document.querySelectorAll('.kz-opt').forEach(b => {
      if(b.dataset.ans === item.answer){
        b.style.opacity='1'; b.style.borderColor='var(--green)'; b.style.background='rgba(80,200,120,.1)';
      }
    });
  }
  
  const fb = document.getElementById('kz-feedback');
  if(fb){
    fb.innerHTML = \`
      <div style="padding:12px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin-top:10px">
        <div style="font-size:13px;line-height:1.6">
          <strong style="color:\${correct ? 'var(--green)' : 'var(--red)'}">\${correct ? '✓ Točno!' : '✗ Netočno.'}</strong>
          <span style="color:var(--t2)"> \${item.explain}</span>
        </div>
        <button class="nb-btn primary" style="margin-top:10px" onclick="kzNext()">\${kzIdx < KZ_ITEMS.length - 1 ? 'Sljedeće →' : 'Završi'}</button>
      </div>
    \`;
  }
}

function kzNext(){ kzIdx++; renderKzExercise(); }
function kzReset(){ kzIdx=0; kzScore=0; const r=document.getElementById('kz-result'),c=document.getElementById('kz-exercise'); if(r)r.style.display='none'; if(c)c.style.display=''; renderKzExercise(); }

function renderKzResult(){
  const cont = document.getElementById('kz-exercise'), res = document.getElementById('kz-result');
  if(!cont || !res) return;
  cont.style.display='none'; res.style.display='block';
  const pct = Math.round((kzScore/KZ_ITEMS.length)*100);
  let msg, color, emoji;
  if(pct===100){emoji='🏆';msg='Savršeno! Glagolski oblici su ti jasni.';color='var(--gold)';}
  else if(pct>=75){emoji='🎯';msg='Odlično! Manje greške — ponovi nepravilne.';color='var(--green)';}
  else if(pct>=50){emoji='📖';msg='Dobro, ali ponovi tablicu 7 vremena.';color='var(--blue)';}
  else{emoji='⚠';msg='Vrati se na tablicu vremena/načina — ovo je temelj.';color='var(--red)';}
  res.innerHTML = \`
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r2);text-align:center">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:26px;font-weight:700;color:\${color};margin-bottom:8px">\${kzScore} / \${KZ_ITEMS.length} · \${pct}%</div>
      <div style="font-size:14px;color:var(--t2);margin-bottom:16px">\${msg}</div>
      <button class="nb-btn primary" onclick="kzReset()">🔄 Ponovi vježbu</button>
    </div>
  \`;
}

if(typeof document !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(){ setTimeout(renderKzExercise, 350); });
  if(document.readyState !== 'loading'){ setTimeout(renderKzExercise, 350); }
}


/* ═══════════════════════════════════
   TAB 5 · MORFO SCANNER · morfemska + gramatička analiza
═══════════════════════════════════ */


// LEXICON — frequent words for accurate analysis (fallback for heuristic)
const MS_VERB_LEXICON = {
  // PRESENT FORMS → infinitive
  'idem':'ići','ideš':'ići','ide':'ići','idemo':'ići','idete':'ići','idu':'ići',
  'mogu':'moći','možeš':'moći','može':'moći','možemo':'moći','možete':'moći',
  'jesam':'biti','jesi':'biti','jest':'biti','jesmo':'biti','jeste':'biti','jesu':'biti',
  'sam':'biti','si':'biti','je':'biti','smo':'biti','ste':'biti','su':'biti',
  'imam':'imati','imaš':'imati','ima':'imati','imamo':'imati','imate':'imati','imaju':'imati',
  'znam':'znati','znaš':'znati','zna':'znati','znamo':'znati','znate':'znati','znaju':'znati',
  'volim':'voljeti','voliš':'voljeti','voli':'voljeti','volimo':'voljeti','volite':'voljeti','vole':'voljeti',
  'dajem':'davati','daješ':'davati','daje':'davati','dam':'dati','daš':'dati','da':'dati',
  'pišem':'pisati','pišeš':'pisati','piše':'pisati','pišemo':'pisati','pišete':'pisati','pišu':'pisati',
  'čitam':'čitati','čitaš':'čitati','čita':'čitati','čitamo':'čitati','čitate':'čitati','čitaju':'čitati',
  'kažem':'kazati','kažeš':'kazati','kaže':'kazati','kažemo':'kazati','kažete':'kazati','kažu':'kazati',
  'velim':'veljeti','veliš':'veljeti','veli':'veljeti','velimo':'veljeti','velite':'veljeti','vele':'veljeti',
  'rekoh':'reći','reče':'reći','rekosmo':'reći','rekoste':'reći','rekoše':'reći',
};

// Frequent animate (living) nouns — for accurate A jd. m.r.
const DECL_ANIMATE = ['prijatelj','učitelj','učenik','student','profesor','liječnik','pisac','pjesnik','glumac','dječak','momak','čovjek','muškarac','sinovi','gospod','vladar','kralj','car','svetac','svećenik','voditelj','pjevač','glumac','vozač','radnik','voj','vojnik','konj','vuk','medvjed','tigar','lav','pas','mačka','zec','jelen','sokol','orao','golub','lavin','lisica','kuna','jazavac','bik','pijetao','crv','komarac','pauk','medo'];

function isAnimate(word){
  return DECL_ANIMATE.some(a => word.toLowerCase().includes(a));
}


const MS_NOUN_LEXICON = {
  // FREQUENT IRREGULAR FORMS → lemma
  'ljudi':'čovjek','djeca':'dijete','braća':'brat','psi':'pas','oči':'oko','uši':'uho',
  'gospoda':'gospodin','sinovi':'sin','očevi':'otac','životi':'život',
};

const MS_PRONOUNS = {
  'ja':{type:'osobna',person:1,number:'jd'},'ti':{type:'osobna',person:2,number:'jd'},
  'on':{type:'osobna',person:3,number:'jd',gender:'m'},'ona':{type:'osobna',person:3,number:'jd',gender:'ž'},
  'ono':{type:'osobna',person:3,number:'jd',gender:'sr'},
  'mi':{type:'osobna',person:1,number:'mn'},'vi':{type:'osobna',person:2,number:'mn'},
  'oni':{type:'osobna',person:3,number:'mn'},
  'se':{type:'povratna'},'sebe':{type:'povratna'},
  'moj':{type:'posvojna'},'tvoj':{type:'posvojna'},'naš':{type:'posvojna'},'vaš':{type:'posvojna'},
  'njegov':{type:'posvojna'},'njezin':{type:'posvojna'},'njihov':{type:'posvojna'},
  'svoj':{type:'povratno-posvojna'},
  'ovaj':{type:'pokazna'},'taj':{type:'pokazna'},'onaj':{type:'pokazna'},
  'ovo':{type:'pokazna'},'to':{type:'pokazna'},'ono':{type:'pokazna'},
  'tko':{type:'upitna/odnosna'},'što':{type:'upitna/odnosna'},'koji':{type:'upitna/odnosna'},
  'čiji':{type:'upitna/odnosna'},'kakav':{type:'upitna/odnosna'},
  'netko':{type:'neodređena'},'nešto':{type:'neodređena'},'neki':{type:'neodređena'},
  'svatko':{type:'neodređena'},'svako':{type:'neodređena'},'svi':{type:'neodređena'},
  'nitko':{type:'neodređena'},'ništa':{type:'neodređena'},
};

const MS_NUMERALS = {
  'jedan':{type:'glavni',value:1},'dva':{type:'glavni',value:2},'tri':{type:'glavni',value:3},
  'četiri':{type:'glavni',value:4},'pet':{type:'glavni',value:5},'šest':{type:'glavni',value:6},
  'sedam':{type:'glavni',value:7},'osam':{type:'glavni',value:8},'devet':{type:'glavni',value:9},
  'deset':{type:'glavni',value:10},'sto':{type:'glavni',value:100},'tisuću':{type:'glavni',value:1000},
  'prvi':{type:'redni',value:1},'drugi':{type:'redni',value:2},'treći':{type:'redni',value:3},
  'četvrti':{type:'redni',value:4},'peti':{type:'redni',value:5},'šesti':{type:'redni',value:6},
  'dvoje':{type:'zbirni',value:2},'troje':{type:'zbirni',value:3},'četvero':{type:'zbirni',value:4},
};

const MS_PARTICLES = ['ne','da','li','baš','evo','eto','eno','možda','neka','nek'];
const MS_INTERJECTIONS = ['ah','oh','uh','ej','hej','jao','ajme','mjau','vau','bum','bam','tras'];
const MS_PREPOSITIONS = ['u','na','o','po','pri','s','sa','za','iz','od','do','bez','kod','kraj','pokraj','preko','protiv','prema','k','ka','nasuprot','usprkos','zbog','radi','poslije','prije','iznad','ispod','iza','ispred','među','nad','pod','pred','kroz','niz','uz'];
const MS_CONJUNCTIONS = ['i','pa','te','ni','niti','ali','no','nego','već','ili','a','jer','da','dok','kad','kada','ako','iako','premda','što','čim','čime','dokle'];
const MS_ADVERBS = ['brzo','sporo','glasno','tiho','ovdje','ondje','gdje','kamo','sutra','jučer','danas','sada','tada','vrlo','jako','malo','mnogo','možda','sigurno','sretno','zato','stoga','također','ponekad'];

// ========== PREFIKS baza ==========
const MS_PREFIXES = [
  {p:'naj', meaning:'superlativ'},
  {p:'ne', meaning:'negacija'},
  {p:'protu', meaning:'nasuprot'},
  {p:'među', meaning:'između'},
  {p:'pred', meaning:'ispred'},
  {p:'raz', meaning:'razdvajanje / pojačavanje'},
  {p:'iz', meaning:'iznutra, dovršenje'},
  {p:'is', meaning:'iznutra (pred bezv.)'},
  {p:'uz', meaning:'prema gore, usput'},
  {p:'us', meaning:'uz + bezvučno'},
  {p:'od', meaning:'udaljavanje'},
  {p:'ot', meaning:'od + bezvučno'},
  {p:'pre', meaning:'ponavljanje / prekomjerno'},
  {p:'pri', meaning:'približavanje, blizina'},
  {p:'pro', meaning:'kroz, ispunjenje'},
  {p:'nad', meaning:'iznad'},
  {p:'nat', meaning:'nad + bezvučno'},
  {p:'pod', meaning:'ispod'},
  {p:'pot', meaning:'pod + bezvučno'},
  {p:'za', meaning:'početak, prostor iza'},
  {p:'do', meaning:'dolazak, dovršenje'},
  {p:'po', meaning:'dovršenje, nastavak'},
  {p:'u', meaning:'ulazak'},
  {p:'na', meaning:'početak / dovršenje'},
  {p:'o', meaning:'oko, obuhvat'},
  {p:'ob', meaning:'okolo, obuhvat'},
  {p:'s', meaning:'zajedno, dolje'},
  {p:'z', meaning:'s + zvučno'},
];

// ========== SUFIKSI baza (tvorbeni) ==========
const MS_NOUN_SUFFIXES = [
  {s:'ost', type:'imenica ž.r.', meaning:'apstraktna osobina (ljep-ost, dobr-ost)'},
  {s:'oća', type:'imenica ž.r.', meaning:'apstraktna osobina (čist-oća)'},
  {s:'stvo', type:'imenica sr.r.', meaning:'skupina / svojstvo (pjesn-ištvo, druš-tvo)'},
  {s:'ica', type:'imenica ž.r.', meaning:'osoba/mala stvar (učen-ica, knjiž-ica)'},
  {s:'telj', type:'imenica m.r.', meaning:'vršitelj radnje (uči-telj, pisa-telj)'},
  {s:'ač', type:'imenica m.r.', meaning:'vršitelj radnje (voz-ač, pjev-ač)'},
  {s:'ar', type:'imenica m.r.', meaning:'zanimanje (knjiž-ar, mlin-ar)'},
  {s:'nik', type:'imenica m.r.', meaning:'osoba (rad-nik, putnik)'},
  {s:'ica', type:'imenica ž.r.', meaning:'osoba ž.r. / umanjenice (učen-ica, kuć-ica)'},
  {s:'anje', type:'imenica sr.r. (glagolska)', meaning:'od glagola -ati (pis-anje, čit-anje)'},
  {s:'enje', type:'imenica sr.r. (glagolska)', meaning:'od glagola -iti/-eti (vođ-enje)'},
  {s:'onja', type:'imenica m.r.', meaning:'osobina (crn-onja, tvrd-oglavonja)'},
  {s:'lo', type:'imenica sr.r.', meaning:'sredstvo/rezultat (peri-lo, kup-alo)'},
];

const MS_ADJ_SUFFIXES = [
  {s:'an', type:'pridjev (neodr.)', meaning:'opisni (lijep-an? hlad-an)'},
  {s:'ni', type:'pridjev (određ.)', meaning:'opisni određeni (jutar-nji)'},
  {s:'ski', type:'pridjev', meaning:'pripadnost/odnos (škol-ski, grad-ski)'},
  {s:'čki', type:'pridjev', meaning:'pripadnost (junač-ki)'},
  {s:'ov', type:'pridjev posvojni', meaning:'pripadnost m.r. (oč-ev, brat-ov)'},
  {s:'ev', type:'pridjev posvojni', meaning:'pripadnost (otač-ev varianta)'},
  {s:'in', type:'pridjev posvojni', meaning:'pripadnost ž.r. (majč-in, Anin)'},
  {s:'ji', type:'pridjev posvojni', meaning:'pripadnost (pas-ji, božji)'},
];

const MS_VERB_SUFFIXES = [
  {s:'nuti', type:'glagol (II. vrsta, svršeni)', meaning:'trenutna radnja (klik-nuti)'},
  {s:'avati', type:'glagol (nesvršeni)', meaning:'ponavljanje (pis-avati, ud-arati)'},
  {s:'ivati', type:'glagol (nesvršeni)', meaning:'ponavljanje (propov-ijedati)'},
  {s:'ovati', type:'glagol', meaning:'radnja (rad-ovati, kup-ovati)'},
  {s:'jeti', type:'glagol', meaning:'stanje (vid-jeti, bol-jeti)'},
];

// ========== PADEŽNI NASTAVCI ==========
const MS_CASE_ENDINGS = {
  // e-vrsta ž.r.
  'e-vrsta': {
    'a': {padez:'N jd.', info:'nominativ jednine'},
    'e': {padez:'G jd. / N mn.', info:'genitiv jd. ili nominativ mn.'},
    'i': {padez:'D/L jd.', info:'dativ ili lokativ jednine'},
    'u': {padez:'A jd.', info:'akuzativ jednine'},
    'o': {padez:'V jd.', info:'vokativ jednine'},
    'om': {padez:'I jd.', info:'instrumental jednine'},
    'ama': {padez:'D/L/I mn.', info:'dativ/lokativ/instrumental množine'},
    'ima': {padez:'D/L/I mn.', info:'dativ/lokativ/instrumental množine'},
  },
  // a-vrsta m.r.
  'a-vrsta': {
    'a': {padez:'G/A jd. (živo)', info:'genitiv/akuzativ jednine (za živo)'},
    'u': {padez:'D/L jd.', info:'dativ ili lokativ jednine'},
    'e': {padez:'V jd. (palat.) / A mn.', info:'vokativ ili akuzativ množine'},
    'om': {padez:'I jd.', info:'instrumental jednine'},
    'em': {padez:'I jd. (palat.)', info:'instrumental jednine palatalna osnova'},
    'i': {padez:'N/V mn.', info:'nominativ ili vokativ množine'},
    'ima': {padez:'D/L/I mn.', info:'dativ/lokativ/instrumental množine'},
  }
};

// ========== GLAGOLSKI NASTAVCI ==========
const MS_VERB_ENDINGS = [
  {end:'ati', form:'infinitiv'},
  {end:'iti', form:'infinitiv'},
  {end:'eti', form:'infinitiv'},
  {end:'jeti', form:'infinitiv'},
  {end:'nuti', form:'infinitiv'},
  {end:'ći', form:'infinitiv'},
  // Prezent
  {end:'am', form:'prezent 1. l. jd.'},
  {end:'aš', form:'prezent 2. l. jd.'},
  {end:'a', form:'prezent 3. l. jd.'},
  {end:'amo', form:'prezent 1. l. mn.'},
  {end:'ate', form:'prezent 2. l. mn.'},
  {end:'aju', form:'prezent 3. l. mn.'},
  {end:'im', form:'prezent 1. l. jd.'},
  {end:'iš', form:'prezent 2. l. jd.'},
  {end:'imo', form:'prezent 1. l. mn.'},
  {end:'ite', form:'prezent 2. l. mn.'},
  {end:'e', form:'prezent 3. l. jd. (tip -em) ili imperativ'},
  {end:'em', form:'prezent 1. l. jd.'},
  {end:'eš', form:'prezent 2. l. jd.'},
  {end:'emo', form:'prezent 1. l. mn.'},
  {end:'ete', form:'prezent 2. l. mn.'},
  {end:'u', form:'prezent 3. l. mn.'},
  // Glagolski pridjev radni
  {end:'ao', form:'glag. pridjev radni m.r. jd.'},
  {end:'la', form:'glag. pridjev radni ž.r. jd.'},
  {end:'lo', form:'glag. pridjev radni sr.r. jd.'},
  {end:'li', form:'glag. pridjev radni m.r. mn.'},
  {end:'le', form:'glag. pridjev radni ž.r. mn.'},
  {end:'io', form:'glag. pridjev radni m.r. jd. (od -ieti)'},
  // Imperativ
  {end:'ajte', form:'imperativ 2. l. mn.'},
  {end:'aj', form:'imperativ 2. l. jd.'},
  {end:'ajmo', form:'imperativ 1. l. mn.'},
  {end:'ite', form:'imperativ 2. l. mn.'},
  {end:'i', form:'imperativ 2. l. jd.'},
];

// ========== ANALIZA ==========
function msAnalyzeWord(word){
  const w = word.toLowerCase().trim();
  const result = {
    word: w,
    prefix: [],
    root: w,
    suffix: [],
    ending: '',
    wordClass: null,
    categories: {},
    lemma: w,
    note: '',
    confidence: 'medium'
  };
  
  // STEP 0: LEXICON CHECKS (highest confidence)
  
  // Check pronouns
  if(MS_PRONOUNS[w]){
    result.wordClass = 'zamjenica';
    result.categories.type = MS_PRONOUNS[w].type;
    if(MS_PRONOUNS[w].person) result.categories.person = MS_PRONOUNS[w].person + '. lice';
    if(MS_PRONOUNS[w].number) result.categories.number = MS_PRONOUNS[w].number;
    if(MS_PRONOUNS[w].gender) result.categories.gender = MS_PRONOUNS[w].gender + '.r.';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check numerals
  if(MS_NUMERALS[w]){
    result.wordClass = 'broj';
    result.categories.type = MS_NUMERALS[w].type + ' broj';
    result.categories.value = MS_NUMERALS[w].value;
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check particles
  if(MS_PARTICLES.includes(w)){
    result.wordClass = 'čestica';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    if(w === 'ne') result.categories.type = 'niječna';
    else if(w === 'da') result.categories.type = 'potvrdna (ovisno o kontekstu)';
    else if(w === 'li') result.categories.type = 'upitna';
    else if(['evo','eto','eno'].includes(w)) result.categories.type = 'pokazna';
    else if(['možda','neka','nek'].includes(w)) result.categories.type = 'modalna/poticajna';
    return result;
  }
  
  // Check interjections
  if(MS_INTERJECTIONS.includes(w)){
    result.wordClass = 'uzvik';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check prepositions
  if(MS_PREPOSITIONS.includes(w)){
    result.wordClass = 'prijedlog';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check conjunctions
  if(MS_CONJUNCTIONS.includes(w)){
    result.wordClass = 'veznik';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    if(['i','pa','te','ni','niti','ali','no','nego','već','ili','a'].includes(w)) result.categories.type = 'nezavisni';
    else result.categories.type = 'zavisni';
    return result;
  }
  
  // Check adverbs (whitelist)
  if(MS_ADVERBS.includes(w)){
    result.wordClass = 'prilog';
    result.lemma = w;
    result.root = w;
    result.confidence = 'high';
    return result;
  }
  
  // Check verb lexicon
  if(MS_VERB_LEXICON[w]){
    result.wordClass = 'glagol';
    result.lemma = MS_VERB_LEXICON[w];
    result.root = MS_VERB_LEXICON[w].slice(0, -2); // remove -ti
    result.confidence = 'high';
    // Try to determine form heuristically
    if(/m$/.test(w)) result.categories.form = 'prezent 1. l. jd.';
    else if(/š$/.test(w)) result.categories.form = 'prezent 2. l. jd.';
    else if(/mo$/.test(w)) result.categories.form = 'prezent 1. l. mn.';
    else if(/te$/.test(w)) result.categories.form = 'prezent 2. l. mn.';
    return result;
  }
  
  // Check noun lexicon (irregular)
  if(MS_NOUN_LEXICON[w]){
    result.wordClass = 'imenica';
    result.lemma = MS_NOUN_LEXICON[w];
    result.note = 'Nepravilna množina (lemma: ' + MS_NOUN_LEXICON[w] + ').';
    result.confidence = 'high';
    return result;
  }
  
  // STEP 1: Heuristic analysis (existing logic)
  let remaining = w;
  
  // Detect prefixes (longest match first)
  const sortedPrefixes = [...MS_PREFIXES].sort((a, b) => b.p.length - a.p.length);
  for(let p of sortedPrefixes){
    if(remaining.startsWith(p.p) && remaining.length > p.p.length + 2){
      result.prefix.push(p);
      remaining = remaining.slice(p.p.length);
      // Try second prefix
      for(let p2 of sortedPrefixes){
        if(remaining.startsWith(p2.p) && remaining.length > p2.p.length + 2){
          result.prefix.push(p2);
          remaining = remaining.slice(p2.p.length);
          break;
        }
      }
      break;
    }
  }
  
  // Try verb endings (longest first)
  const sortedVerbEndings = [...MS_VERB_ENDINGS].sort((a, b) => b.end.length - a.end.length);
  let verbMatch = null;
  for(let ve of sortedVerbEndings){
    if(remaining.endsWith(ve.end) && remaining.length > ve.end.length + 1){
      verbMatch = ve;
      break;
    }
  }
  
  // Try suffixes
  let foundSuffix = null;
  let suffixType = null;
  
  // Noun suffixes
  const sortedNounSfx = [...MS_NOUN_SUFFIXES].sort((a, b) => b.s.length - a.s.length);
  for(let sf of sortedNounSfx){
    if(remaining.includes(sf.s)){
      const sfIdx = remaining.lastIndexOf(sf.s);
      if(sfIdx > 0 && sfIdx <= remaining.length - sf.s.length){
        const afterSf = remaining.slice(sfIdx + sf.s.length);
        if(afterSf.length <= 3 && /^[aeiouima]*$/.test(afterSf)){
          foundSuffix = sf;
          suffixType = 'noun';
          result.root = remaining.slice(0, sfIdx);
          result.suffix.push(sf);
          result.ending = afterSf;
          break;
        }
      }
    }
  }
  
  // Adjective suffixes
  if(!foundSuffix){
    const sortedAdjSfx = [...MS_ADJ_SUFFIXES].sort((a, b) => b.s.length - a.s.length);
    for(let sf of sortedAdjSfx){
      if(remaining.includes(sf.s)){
        const sfIdx = remaining.lastIndexOf(sf.s);
        if(sfIdx > 0 && sfIdx <= remaining.length - sf.s.length){
          const afterSf = remaining.slice(sfIdx + sf.s.length);
          if(afterSf.length <= 3 && /^[aeiouh]*$/.test(afterSf)){
            foundSuffix = sf;
            suffixType = 'adj';
            result.root = remaining.slice(0, sfIdx);
            result.suffix.push(sf);
            result.ending = afterSf;
            break;
          }
        }
      }
    }
  }
  
  // Classify
  if(verbMatch){
    result.wordClass = 'glagol';
    result.categories.form = verbMatch.form;
    let stem = remaining.slice(0, remaining.length - verbMatch.end.length);
    
    if(verbMatch.form.startsWith('infinitiv')){
      result.lemma = remaining;
    } else if(verbMatch.form.startsWith('prezent')){
      if(verbMatch.end.match(/^a[mš]?$|^am$|^aš$|^amo$|^ate$|^aju$/)) result.lemma = stem + 'ati';
      else if(verbMatch.end.match(/^i[mš]?$|^im$|^iš$|^imo$|^ite$/)) result.lemma = stem + 'iti';
      else if(verbMatch.end.match(/^e[mš]?$|^em$|^eš$|^emo$|^ete$|^u$/)) result.lemma = stem + 'ti';
    } else if(verbMatch.form.startsWith('glag. pridjev radni')){
      if(verbMatch.end === 'ao' || verbMatch.end === 'io') result.lemma = stem + (verbMatch.end === 'ao' ? 'ati' : 'iti');
      else if(['la','lo','li','le'].includes(verbMatch.end)) result.lemma = stem + 'ti';
    } else if(verbMatch.form.startsWith('imperativ')){
      if(['aj','ajte','ajmo'].includes(verbMatch.end)) result.lemma = stem + 'ati';
      else if(['i','ite'].includes(verbMatch.end)) result.lemma = stem + 'iti';
    }
    
    const hasPerfectivePrefix = result.prefix.some(p => ['na','pro','po','do','u','iz','is','pre','za','raz'].includes(p.p));
    result.categories.vid = hasPerfectivePrefix ? 'svršeni' : 'nesvršeni';
  } else if(foundSuffix && suffixType === 'noun'){
    result.wordClass = 'imenica';
    result.categories.type = foundSuffix.type;
    const e = result.ending;
    const declType = foundSuffix.type.includes('ž.r.') ? 'e-vrsta' : 'a-vrsta';
    if(MS_CASE_ENDINGS[declType] && MS_CASE_ENDINGS[declType][e]){
      result.categories.padezAndBroj = MS_CASE_ENDINGS[declType][e].padez;
    } else if(e === ''){
      result.categories.padezAndBroj = 'N/V jd.';
    }
    if(foundSuffix.type.includes('ž.r.')) result.lemma = result.root + foundSuffix.s + 'a';
    else if(foundSuffix.type.includes('sr.r.')) result.lemma = result.root + foundSuffix.s + 'o';
    else result.lemma = result.root + foundSuffix.s;
  } else if(foundSuffix && suffixType === 'adj'){
    result.wordClass = 'pridjev';
    result.categories.type = foundSuffix.type;
    result.lemma = result.root + foundSuffix.s;
    if(result.prefix.some(p => p.p === 'naj')) result.categories.stupanj = 'superlativ';
    else if(w.endsWith('ji') || w.endsWith('iji')) result.categories.stupanj = 'komparativ';
    else result.categories.stupanj = 'pozitiv';
  } else {
    // Heuristic noun fallback
    if(/[aeiou]$/.test(w) || /[aeiou]ma$/.test(w) || /ima$/.test(w)){
      result.wordClass = 'imenica (moguća)';
      const declType = w.endsWith('a') ? 'e-vrsta' : 'a-vrsta';
      result.categories.declType = declType;
      result.confidence = 'low';
      if(MS_CASE_ENDINGS[declType]){
        for(let end in MS_CASE_ENDINGS[declType]){
          if(w.endsWith(end) && (w.length > end.length)){
            result.categories.padezAndBroj = MS_CASE_ENDINGS[declType][end].padez;
            result.ending = end;
            result.root = w.slice(0, w.length - end.length);
            break;
          }
        }
      }
      if(declType === 'e-vrsta') result.lemma = result.root + 'a';
      else result.lemma = result.root;
    } else {
      result.wordClass = '?';
      result.note = 'Teško prepoznati vrstu — provjeri svojim znanjem.';
      result.confidence = 'low';
    }
  }
  
  if(!result.root || result.root.length < 2){
    let fallback = w;
    for(let p of result.prefix){
      fallback = fallback.slice(p.p.length);
    }
    result.root = fallback;
  }
  
  return result;
}

function morfoAnalyze(){
  const input = document.getElementById('ms-input');
  const out = document.getElementById('ms-results');
  if(!input || !out) return;
  
  const word = input.value.trim().toLowerCase();
  if(!word){ out.innerHTML = ''; return; }
  
  if(!/^[a-zčćđšž\\s]+$/.test(word)){
    out.innerHTML = '<div class="box-warn"><div class="bw-body"><div class="bw-txt">Samo hrv. slova (a-ž), bez razmaka ili brojeva.</div></div></div>';
    return;
  }
  
  // Multi-word support — analyze each word separately
  const words = word.split(/\\s+/).filter(w => w.length > 0);
  
  if(words.length > 1){
    // Multi-word — show each
    let allHtml = '<div style="margin-bottom:14px;font-family:var(--mono);font-size:11px;color:var(--t2);text-align:center">📝 ANALIZA RAZINA: ' + words.length + ' riječi</div>';
    words.forEach((w, idx) => {
      const a = msAnalyzeWord(w);
      allHtml += renderMsResult(a, idx === 0);
      if(idx < words.length - 1){
        allHtml += '<div style="height:24px"></div>';
      }
    });
    out.innerHTML = allHtml;
  } else {
    const a = msAnalyzeWord(words[0]);
    out.innerHTML = renderMsResult(a, true);
  }
  
  // Save to history
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.scanner_hist')||'[]');
    // Only save valid words (no special chars)
    if(/^[a-zčćđšžA-ZČĆĐŠŽ\\s]+$/.test(word) && word.length < 50){
      hist.push({word, date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h21.scanner_hist', JSON.stringify(hist.slice(-20)));
    }
  } catch(e){}
}

function renderMsResult(a, showHeader){
  const word = a.word;
  
  // Build morpheme display
  let morphBuild = '';
  a.prefix.forEach(p => {
    morphBuild += \`<span style="display:inline-block;padding:6px 12px;background:rgba(74,144,217,.15);border:1.5px solid var(--blue);border-radius:var(--r1);color:var(--blue);font-weight:700;font-family:var(--mono);margin:2px">\${p.p}-</span>\`;
  });
  morphBuild += \`<span style="display:inline-block;padding:6px 12px;background:rgba(233,180,70,.15);border:1.5px solid var(--gold);border-radius:var(--r1);color:var(--gold);font-weight:700;font-family:var(--mono);margin:2px">\${a.root}</span>\`;
  a.suffix.forEach(sf => {
    morphBuild += \`<span style="display:inline-block;padding:6px 12px;background:rgba(176,107,33,.15);border:1.5px solid var(--bronze);border-radius:var(--r1);color:var(--bronze);font-weight:700;font-family:var(--mono);margin:2px">-\${sf.s}-</span>\`;
  });
  if(a.ending){
    morphBuild += \`<span style="display:inline-block;padding:6px 12px;background:rgba(224,82,82,.15);border:1.5px solid var(--red);border-radius:var(--r1);color:var(--red);font-weight:700;font-family:var(--mono);margin:2px">-\${a.ending}</span>\`;
  }
  
  // Classification summary  
  let classSummary = '';
  if(a.wordClass){
    classSummary = a.wordClass;
    if(a.categories.type) classSummary += \` · \${a.categories.type}\`;
    if(a.categories.declType) classSummary += \` · \${a.categories.declType}\`;
    if(a.categories.stupanj) classSummary += \` · \${a.categories.stupanj}\`;
    if(a.categories.form) classSummary += \` · \${a.categories.form}\`;
    if(a.categories.vid) classSummary += \` · \${a.categories.vid} vid\`;
    if(a.categories.padezAndBroj) classSummary += \` · \${a.categories.padezAndBroj}\`;
    if(a.categories.person) classSummary += \` · \${a.categories.person}\`;
    if(a.categories.number) classSummary += \` · \${a.categories.number}\`;
    if(a.categories.gender) classSummary += \` · \${a.categories.gender}\`;
  }
  
  // Confidence badge
  const confColors = {high: 'var(--green)', medium: 'var(--gold)', low: 'var(--red)'};
  const confLabels = {high: '🟢 VISOKA', medium: '🟡 SREDNJA', low: '🔴 NISKA'};
  const confColor = confColors[a.confidence] || 'var(--t3)';
  const confLabel = confLabels[a.confidence] || a.confidence;
  
  return \`
    <!-- HEADER -->
    <div style="padding:18px;background:linear-gradient(135deg,rgba(233,180,70,.08),transparent);border:1px solid rgba(233,180,70,.3);border-radius:var(--r2);margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">
        <div>
          <div style="font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:2px">MORFEMSKA ANALIZA</div>
          <div style="font-family:var(--display);font-size:32px;font-weight:700;color:var(--gold);margin-top:4px">\${word}</div>
        </div>
        <div style="text-align:right">
          <div style="font-family:var(--mono);font-size:11px;color:var(--t2)">\${classSummary || '—'}</div>
          <div style="font-family:var(--mono);font-size:9px;color:\${confColor};margin-top:4px;letter-spacing:1px">SIGURNOST: \${confLabel}</div>
        </div>
      </div>
    </div>

    <!-- MORPHEMES -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">🧩 Morfemska struktura</div><div class="sec-line"></div></div>
    <div style="padding:24px;background:var(--ele);border:1px solid var(--bd);border-radius:var(--r1);margin:12px 0;text-align:center">
      <div style="display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px;margin-bottom:14px">\${morphBuild}</div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;font-family:var(--mono);font-size:10px">
        \${a.prefix.length > 0 ? '<span style="padding:3px 8px;background:rgba(74,144,217,.1);color:var(--blue);border-radius:12px">prefiks</span>' : ''}
        <span style="padding:3px 8px;background:rgba(233,180,70,.1);color:var(--gold);border-radius:12px">korijen</span>
        \${a.suffix.length > 0 ? '<span style="padding:3px 8px;background:rgba(176,107,33,.1);color:var(--bronze);border-radius:12px">sufiks</span>' : ''}
        \${a.ending ? '<span style="padding:3px 8px;background:rgba(224,82,82,.1);color:var(--red);border-radius:12px">nastavak</span>' : ''}
      </div>
    </div>

    <!-- CLASSIFICATION TABLE -->
    <div class="sec-hdr" style="margin-top:20px"><div class="sec-line"></div><div class="sec-badge">📋 Analiza</div><div class="sec-line"></div></div>
    <div class="table-wrap" style="overflow-x:auto;margin:12px 0">
      <table style="width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12px">
        <tbody>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3);width:40%">Vrsta riječi</td><td style="padding:10px;color:var(--t1);font-weight:700">\${a.wordClass || '—'}</td></tr>
          <tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Osnovni oblik (lema)</td><td style="padding:10px;color:var(--gold);font-weight:700">\${a.lemma}</td></tr>
          \${a.categories.form ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Oblik glagola</td><td style="padding:10px;color:var(--t1)">\${a.categories.form}</td></tr>\` : ''}
          \${a.categories.vid ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Glagolski vid</td><td style="padding:10px;color:var(--t1)">\${a.categories.vid}</td></tr>\` : ''}
          \${a.categories.type ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Tip (podvrsta)</td><td style="padding:10px;color:var(--t1)">\${a.categories.type}</td></tr>\` : ''}
          \${a.categories.declType ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Deklinacijska vrsta</td><td style="padding:10px;color:var(--t1)">\${a.categories.declType}</td></tr>\` : ''}
          \${a.categories.padezAndBroj ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Padež / broj</td><td style="padding:10px;color:var(--t1);font-weight:700">\${a.categories.padezAndBroj}</td></tr>\` : ''}
          \${a.categories.person ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Lice / broj</td><td style="padding:10px;color:var(--t1)">\${a.categories.person}\${a.categories.number ? ' · ' + a.categories.number : ''}</td></tr>\` : ''}
          \${a.categories.gender ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Rod</td><td style="padding:10px;color:var(--t1)">\${a.categories.gender}</td></tr>\` : ''}
          \${a.categories.stupanj ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Stupanj</td><td style="padding:10px;color:var(--t1)">\${a.categories.stupanj}</td></tr>\` : ''}
          \${a.categories.value ? \`<tr style="border-bottom:1px solid var(--bd)"><td style="padding:10px;color:var(--t3)">Vrijednost</td><td style="padding:10px;color:var(--t1)">\${a.categories.value}</td></tr>\` : ''}
          <tr><td style="padding:10px;color:var(--t3)">Korijen</td><td style="padding:10px;color:var(--t1);font-weight:700">\${a.root}</td></tr>
        </tbody>
      </table>
    </div>

    \${a.prefix.length > 0 || a.suffix.length > 0 ? \`
      <div class="sec-hdr" style="margin-top:20px"><div class="sec-line"></div><div class="sec-badge">🏗 Tvorbena analiza</div><div class="sec-line"></div></div>
      <div style="margin:12px 0">
        \${a.prefix.map(p => \`
          <div style="padding:12px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--blue);border-radius:var(--r1);margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;gap:10px;align-items:start">
              <div>
                <div style="font-family:var(--mono);font-size:10px;color:var(--blue);letter-spacing:1px;margin-bottom:4px">PREFIKS</div>
                <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:16px">\${p.p}-</div>
                <div style="font-size:12px;color:var(--t2);margin-top:4px">\${p.meaning}</div>
              </div>
            </div>
          </div>
        \`).join('')}
        \${a.suffix.map(sf => \`
          <div style="padding:12px;background:var(--ele);border:1px solid var(--bd);border-left:3px solid var(--bronze);border-radius:var(--r1);margin-bottom:8px">
            <div style="display:flex;justify-content:space-between;gap:10px;align-items:start">
              <div>
                <div style="font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1px;margin-bottom:4px">SUFIKS</div>
                <div style="font-family:var(--display);font-weight:700;color:var(--t1);font-size:16px">-\${sf.s}</div>
                <div style="font-size:12px;color:var(--t2);margin-top:4px">\${sf.meaning}</div>
              </div>
            </div>
          </div>
        \`).join('')}
      </div>
    \` : ''}

    \${a.note ? \`
      <div class="box-warn" style="margin:12px 0"><div class="bw-body"><div class="bw-ttl" style="color:var(--gold)">💡 Napomena</div><div class="bw-txt">\${a.note}</div></div></div>
    \` : ''}

    \${a.confidence === 'low' ? \`<div style="font-family:var(--mono);font-size:10px;color:var(--red);text-align:center;margin-top:8px">⚠ Niska sigurnost — Scanner koristi heuristiku, provjeri svojim znanjem</div>\` : ''}
  \`;
}

function msExample(word){
  const input = document.getElementById('ms-input');
  if(input){
    input.value = word;
    morfoAnalyze();
    input.scrollIntoView({behavior:'smooth', block:'center'});
  }
}



function msShowHistory(){
  const div = document.getElementById('ms-history');
  if(!div) return;
  if(div.style.display !== 'none' && div.innerHTML !== ''){
    div.style.display = 'none';
    return;
  }
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.scanner_hist')||'[]');
    if(hist.length === 0){
      div.innerHTML = '<span style="color:var(--t3)">Još nema analiziranih riječi.</span>';
    } else {
      div.innerHTML = '<div style="margin-bottom:8px;color:var(--t3);letter-spacing:1px">ZADNJIH ' + hist.length + ' (klikni za ponovnu analizu):</div>' +
        hist.slice().reverse().map(h => {
        const safeWord = String(h.word||'').replace(/['"\\\\<>&]/g, c => ({"'":'\\\\\\'',
'"':'&quot;','\\\\':'\\\\\\\\','<':'&lt;','>':'&gt;','&':'&amp;'}[c]||c));
        const displayWord = String(h.word||'').replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));
        return \`<button class="nb-btn" style="padding:4px 8px;font-size:11px;margin:2px" onclick="msExample('\${safeWord}')">\${displayWord}</button>\`;
      }).join('');
    }
    div.style.display = 'block';
  } catch(e){
    div.innerHTML = '<span style="color:var(--t3)">Greška u učitavanju.</span>';
    div.style.display = 'block';
  }
}

function msClear(){
  const input = document.getElementById('ms-input');
  const out = document.getElementById('ms-results');
  const hist = document.getElementById('ms-history');
  if(input) input.value = '';
  if(out) out.innerHTML = '';
  if(hist){ hist.style.display = 'none'; hist.innerHTML = ''; }
  input?.focus();
}

// === DECLINER UPGRADES: COPY RESULT FUNCTION ===
function declineCopyTable(){
  const tbl = document.querySelector('#decl-results table');
  if(!tbl) return;
  
  const rows = Array.from(tbl.querySelectorAll('tr'));
  let csv = rows.map(r => 
    Array.from(r.querySelectorAll('th, td'))
      .map(c => c.textContent.trim())
      .join('\\t')
  ).join('\\n');
  
  navigator.clipboard.writeText(csv).then(() => {
    const btn = document.getElementById('decl-copy-btn');
    if(btn){
      const orig = btn.textContent;
      btn.textContent = '✓ Kopirano!';
      btn.style.background = 'var(--green)';
      btn.style.color = '#0F0605';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        btn.style.color = '';
      }, 1500);
    }
  }).catch(() => alert('Greška pri kopiranju.'));
}

// === SCANNER COPY FUNCTION ===
function msCopyResult(){
  const out = document.getElementById('ms-results');
  if(!out) return;
  const text = out.innerText.trim();
  if(!text) return;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('ms-copy-btn');
    if(btn){
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ Kopirano';
      setTimeout(() => btn.innerHTML = orig, 1500);
    }
  });
}



function declHistory(){
  const div = document.getElementById('decl-history');
  if(!div) return;
  if(div.style.display !== 'none' && div.innerHTML !== ''){
    div.style.display = 'none';
    return;
  }
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.decl_hist')||'[]');
    if(hist.length === 0){
      div.innerHTML = '<span style="color:var(--t3)">Još nema sklanjanih riječi.</span>';
    } else {
      div.innerHTML = '<div style="margin-bottom:8px;color:var(--t3);letter-spacing:1px">ZADNJIH ' + hist.length + ':</div>' +
        hist.slice().reverse().map(h => {
        const safeWord = String(h.word||'').replace(/['"\\\\<>&]/g, c => ({"'":'\\\\\\'',
'"':'&quot;','\\\\':'\\\\\\\\','<':'&lt;','>':'&gt;','&':'&amp;'}[c]||c));
        const displayWord = String(h.word||'').replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));
        return \`<button class="nb-btn" style="padding:4px 8px;font-size:11px;margin:2px" onclick="declineExample('\${safeWord}')">\${displayWord}</button>\`;
      }).join('');
    }
    div.style.display = 'block';
  } catch(e){}
}

function declClear(){
  const input = document.getElementById('decl-input');
  const out = document.getElementById('decl-results');
  const hist = document.getElementById('decl-history');
  if(input) input.value = '';
  if(out) out.innerHTML = '';
  if(hist){ hist.style.display = 'none'; hist.innerHTML = ''; }
  input?.focus();
}



// ═══════════════════════════════════
// RANDOM WORD — surprise me feature
// ═══════════════════════════════════
const RANDOM_SCANNER_WORDS = [
  'nepredvidljivosti','najmoćniji','prijateljica','knjižarstvo','čitateljica',
  'nepismenima','učiteljica','upoznavati','pročitanima','razgovaraju',
  'postojanost','opisivanje','ozdravlje','razumijevanje','najljepše',
  'protunapadom','međurazinski','nadmašiti','potpomognuti','predviđanju',
  'iskreno','iako','protiv','vrlo','preko','čovjek','dijete','kost',
  'vrijeme','volim','imam','idu','jedan','peti','dvoje','svoj','ovaj','netko'
];

const RANDOM_DECLINER_WORDS = [
  'stol','knjiga','prijatelj','učenica','grad','more','selo','noć','riječ',
  'pjesma','sestra','učitelj','dječak','majka','brat','sin','kuća','ime',
  'jaje','dan','put','pas','čovjek','dijete','oko','uho','noga','ruka',
  'kost','ljubav','stvar','tata','sokol','zec','stvarnost','radost'
];

function msRandom(){
  const w = RANDOM_SCANNER_WORDS[Math.floor(Math.random() * RANDOM_SCANNER_WORDS.length)];
  msExample(w);
}

function declRandom(){
  const w = RANDOM_DECLINER_WORDS[Math.floor(Math.random() * RANDOM_DECLINER_WORDS.length)];
  declineExample(w);
}



// ═══════════════════════════════════
// TAB 1 · KLIK-IDENTIFIKACIJA REČENIČNIH ČLANOVA
// ═══════════════════════════════════

const RC_OPTIONS = [
  {key:'subjekt', label:'Subjekt', color:'var(--blue)', short:'S'},
  {key:'predikat', label:'Predikat', color:'var(--red)', short:'P'},
  {key:'objekt', label:'Objekt', color:'var(--green)', short:'O'},
  {key:'atribut', label:'Atribut', color:'var(--bronze)', short:'A'},
  {key:'apozicija', label:'Apozicija', color:'#9b59b6', short:'Ap'},
  {key:'priložna oznaka', label:'Priložna oznaka', color:'#e67e22', short:'P.O.'},
];

const RC_SENTENCES = [
  {
    tokens:['Marija','čita','zanimljivu','knjigu','.'],
    targetIdx:0,
    correct:'subjekt',
    explanation:'„Marija" je u nominativu (1. padež) i odgovara na pitanje „tko čita?". To je subjekt — nositelj radnje.',
    diff:'easy'
  },
  {
    tokens:['Ivan','čita','zanimljivu','knjigu','.'],
    targetIdx:1,
    correct:'predikat',
    explanation:'„Čita" je glagol u 3. licu jednine prezenta. Odgovara na „što radi Ivan?" → predikat (glagolski).',
    diff:'easy'
  },
  {
    tokens:['Marija','čita','zanimljivu','knjigu','.'],
    targetIdx:3,
    correct:'objekt',
    explanation:'„Knjigu" je u akuzativu (A) — odgovara na „što čita?". To je IZRAVNI objekt (cilj radnje).',
    diff:'easy'
  },
  {
    tokens:['Marija','čita','zanimljivu','knjigu','.'],
    targetIdx:2,
    correct:'atribut',
    explanation:'„Zanimljivu" je pridjev koji opisuje imenicu „knjigu". Pitanje: „kakvu knjigu?". Slaže se s imenicom u A jd. ž. → sročni atribut.',
    diff:'easy'
  },
  {
    tokens:['Učim','u','knjižnici','.'],
    targetIdx:2,
    correct:'priložna oznaka',
    explanation:'„U knjižnici" (prijedlog + L) — pitanje „gdje učim?". To je priložna oznaka MJESTA (M iz MVNU).',
    diff:'easy'
  },
  {
    tokens:['Pomažem','svom','prijatelju','.'],
    targetIdx:2,
    correct:'objekt',
    explanation:'„Prijatelju" je u dativu (D). Glagol „pomagati" zahtijeva DATIV (ne A!). To je NEIZRAVNI objekt.',
    diff:'medium'
  },
  {
    tokens:['Marija',',','moja','sestra',',','čita','knjigu','.'],
    targetIdx:3,
    correct:'apozicija',
    explanation:'„Moja sestra" je imenica (+ atribut „moja") koja bliže objašnjava imenicu „Marija". Odvojena je zarezima → apozicija.',
    diff:'medium'
  },
  {
    tokens:['Sjećam','se','prošlog','ljeta','.'],
    targetIdx:3,
    correct:'objekt',
    explanation:'„Ljeta" je u genitivu (G). Glagol „sjećati se" zahtijeva GENITIV. To je NEIZRAVNI objekt. Pitanje: „čega se sjećam?".',
    diff:'medium'
  },
  {
    tokens:['Trči','jako','brzo','.'],
    targetIdx:2,
    correct:'priložna oznaka',
    explanation:'„Brzo" je prilog koji odgovara na pitanje „kako trči?". To je priložna oznaka NAČINA (N iz MVNU).',
    diff:'easy'
  },
  {
    tokens:['Tri','studenta','su','položila','ispit','.'],
    targetIdx:1,
    correct:'subjekt',
    explanation:'„(Tri) studenta" je gramatički subjekt — odgovara na pitanje „tko je položio?". Iako je u G jd. (paukal nakon broja 3), funkcija je subjekt.',
    diff:'hard'
  },
  {
    tokens:['Plače','od','sreće','.'],
    targetIdx:2,
    correct:'priložna oznaka',
    explanation:'„Od sreće" (prijedlog + G) odgovara na pitanje „zašto plače?". To je priložna oznaka UZROKA (U iz MVNU).',
    diff:'medium'
  },
  {
    tokens:['Zagreb',',','glavni','grad','Hrvatske',',','ima','milijun','stanovnika','.'],
    targetIdx:3,
    correct:'apozicija',
    explanation:'„Glavni grad Hrvatske" je imenska sintagma koja objašnjava „Zagreb". Odvojena je zarezima i u istom je padežu (N) → apozicija.',
    diff:'medium'
  },
  {
    tokens:['Pročitao','je','knjigu','svog','brata','.'],
    targetIdx:4,
    correct:'atribut',
    explanation:'„Brata" je imenica u genitivu (G) koja označava pripadnost imenici „knjigu" — pitanje „čiju knjigu?". To je NESROČNI atribut (G pripadnosti).',
    diff:'hard'
  },
  {
    tokens:['Sutra','ćemo','raditi','do','kasna','.'],
    targetIdx:0,
    correct:'priložna oznaka',
    explanation:'„Sutra" je prilog koji odgovara na „kada ćemo raditi?". To je priložna oznaka VREMENA (V iz MVNU).',
    diff:'easy'
  },
  {
    tokens:['Učenici','su','dobili','nagrade','za','trud','.'],
    targetIdx:0,
    correct:'subjekt',
    explanation:'„Učenici" su u nominativu (N mn.) i izvršavaju radnju. Pitanje: „tko je dobio?". → subjekt.',
    diff:'easy'
  }
];

let rcIdx = 0;
let rcScore = 0;
let rcAnswers = [];

function rcRender(){
  const out = document.getElementById('rc-exercise');
  if(!out) return;
  
  if(rcIdx >= RC_SENTENCES.length){
    return rcResult();
  }
  
  const item = RC_SENTENCES[rcIdx];
  const diffColor = {easy:'var(--green)', medium:'var(--gold)', hard:'var(--red)'}[item.diff] || 'var(--t3)';
  const diffLabel = {easy:'LAKO', medium:'SREDNJE', hard:'TEŠKO'}[item.diff] || '';
  
  // Build sentence with highlighted target
  const sentenceHtml = item.tokens.map((tok, i) => {
    if(i === item.targetIdx){
      return \`<span class="rc-target">\${tok}</span>\`;
    }
    if(tok === ',' || tok === '.') return \`<span class="rc-punct">\${tok}</span>\`;
    return \`<span class="rc-word">\${tok}</span>\`;
  }).join(' ');
  
  out.innerHTML = \`
    <div class="rc-card">
      <div class="rc-meta">
        <span class="rc-progress">Rečenica <strong>\${rcIdx+1}</strong> / \${RC_SENTENCES.length}</span>
        <span class="rc-diff" style="color:\${diffColor};border-color:\${diffColor}">\${diffLabel}</span>
        <span class="rc-score">Točno: <strong>\${rcScore}</strong> / \${rcIdx}</span>
      </div>
      
      <div class="rc-question">
        Identificiraj rečenični član za <strong style="color:var(--gold)">označenu riječ</strong>:
      </div>
      
      <div class="rc-sentence">\${sentenceHtml}</div>
      
      <div class="rc-options">
        \${RC_OPTIONS.map(o => \`
          <button class="rc-opt" onclick="rcAnswer('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
            <span class="rc-opt-short">\${o.short}</span>
            <span class="rc-opt-label">\${o.label}</span>
          </button>
        \`).join('')}
      </div>
      
      <div id="rc-feedback" class="rc-feedback"></div>
    </div>
  \`;
}

function rcAnswer(key, btn){
  const item = RC_SENTENCES[rcIdx];
  const isCorrect = key === item.correct;
  
  // Disable all option buttons
  document.querySelectorAll('.rc-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.correct){
      b.classList.add('rc-correct');
    } else if(b === btn){
      b.classList.add('rc-wrong');
    }
  });
  
  if(isCorrect){
    rcScore++;
    if(typeof addXP === 'function') addXP(5, 'Točan odgovor');
  }
  
  rcAnswers.push({idx:rcIdx, correct:isCorrect, given:key});
  
  const fb = document.getElementById('rc-feedback');
  if(fb){
    fb.style.display = 'block';
    fb.className = 'rc-feedback ' + (isCorrect ? 'rc-fb-correct' : 'rc-fb-wrong');
    fb.innerHTML = \`
      <div class="rc-fb-head">
        \${isCorrect ? '✅ <strong>Točno!</strong>' : \`❌ <strong>Pogrešno.</strong> Točan odgovor: <strong style="color:var(--gold)">\${RC_OPTIONS.find(o=>o.key===item.correct).label}</strong>\`}
      </div>
      <div class="rc-fb-exp">\${item.explanation}</div>
      <div class="rc-fb-actions">
        <button class="nb-btn primary" onclick="rcNext()">\${rcIdx+1 < RC_SENTENCES.length ? 'Sljedeća rečenica →' : 'Pogledaj rezultat →'}</button>
      </div>
    \`;
    fb.scrollIntoView({behavior:'smooth', block:'nearest'});
  }
}

function rcNext(){
  rcIdx++;
  rcRender();
  // Scroll to top of exercise
  setTimeout(() => {
    const ex = document.getElementById('rc-exercise');
    if(ex) ex.scrollIntoView({behavior:'smooth', block:'start'});
  }, 50);
}

function rcReset(){
  rcIdx = 0;
  rcScore = 0;
  rcAnswers = [];
  document.getElementById('rc-result').style.display = 'none';
  rcRender();
}

function rcResult(){
  const out = document.getElementById('rc-exercise');
  const res = document.getElementById('rc-result');
  if(!out || !res) return;
  
  const total = RC_SENTENCES.length;
  const pct = Math.round(rcScore / total * 100);
  
  let msg = '', emoji = '', color = '';
  if(pct >= 90){ msg = 'Izvrsno! Spreman/na si za maturu iz rečeničnih članova.'; emoji = '🏆'; color = 'var(--gold)'; }
  else if(pct >= 70){ msg = 'Dobro! Pogledaj objašnjenja za pogreške i ponovi.'; emoji = '🎯'; color = 'var(--green)'; }
  else if(pct >= 50){ msg = 'OK, ali treba još rada. Vrati se na scene cards iznad i ponovi vježbu.'; emoji = '📚'; color = 'var(--bronze)'; }
  else { msg = 'Treba više učenja. Pažljivo prouči svih 6 članova (SPO-AAP), pa ponovi.'; emoji = '💪'; color = 'var(--red)'; }
  
  // Achievement check
  if(pct === 100 && typeof addXP === 'function') addXP(50, '15/15 — perfektno!');
  if(pct >= 80 && typeof recordTabVisit === 'function') recordTabVisit(1);
  
  // Save history
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.rc_hist') || '[]');
    hist.push({score:rcScore, total, pct, date: new Date().toISOString()});
    localStorage.setItem('mt.hrv.h21.rc_hist', JSON.stringify(hist.slice(-10)));
  } catch(e){}
  
  // Show wrong answers detail
  const wrongAnswers = rcAnswers.filter(a => !a.correct);
  const wrongHtml = wrongAnswers.length > 0 ? \`
    <details class="rc-detail-wrong" style="margin-top:14px">
      <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--red);font-size:13px">
        ❌ Pogledaj svoje pogreške (\${wrongAnswers.length}) ▾
      </summary>
      <div style="margin-top:10px;display:grid;gap:8px">
        \${wrongAnswers.map(a => {
          const item = RC_SENTENCES[a.idx];
          const sent = item.tokens.map((t,i) => i===item.targetIdx ? \`<strong style="color:var(--gold)">\${t}</strong>\` : t).join(' ');
          return \`
            <div style="padding:10px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1);font-size:12.5px">
              <div style="font-style:italic;color:var(--t1);margin-bottom:4px">\${sent}</div>
              <div style="color:var(--t3);font-size:11px">Tvoj odgovor: <strong style="color:var(--red)">\${a.given}</strong> · Točno: <strong style="color:var(--green)">\${item.correct}</strong></div>
              <div style="color:var(--t2);font-size:12px;margin-top:4px;line-height:1.5">\${item.explanation}</div>
            </div>
          \`;
        }).join('')}
      </div>
    </details>
  \` : '';
  
  out.innerHTML = '';
  res.style.display = 'block';
  res.innerHTML = \`
    <div class="rc-result-card" style="border-left:3px solid \${color}">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);margin-bottom:4px">
        Rezultat: \${rcScore} / \${total} <span style="color:\${color}">(\${pct}%)</span>
      </div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:18px">\${msg}</div>
      
      <div class="rc-result-bar">
        <div class="rc-result-fill" style="width:\${pct}%;background:\${color}"></div>
      </div>
      
      \${wrongHtml}
      
      <div style="margin-top:18px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="nb-btn primary" onclick="rcReset()">🔁 Ponovi vježbu</button>
        <button class="nb-btn" onclick="sw(2)">📐 Vrste rečenica →</button>
      </div>
    </div>
  \`;
}

// Auto-init when Tab 1 visible / on load
function rcInit(){
  if(document.getElementById('rc-exercise')){
    rcRender();
  }
}

// Init on DOMContentLoaded + fallback
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(rcInit, 100));
} else {
  setTimeout(rcInit, 100);
}



// ═══════════════════════════════════
// TAB 2 · KLASIFIKACIJA REČENICA
// ═══════════════════════════════════

const VR_OPT_SASTAV = [
  {key:'prosta', label:'Prosta', short:'Pr', color:'var(--green)'},
  {key:'nezavisna', label:'Složena nezav.', short:'Nz', color:'var(--gold)'},
  {key:'zavisna', label:'Složena zav.', short:'Zv', color:'var(--bronze)'},
];
const VR_OPT_SVRHA = [
  {key:'izjavna', label:'Izjavna', short:'.', color:'var(--green)'},
  {key:'upitna', label:'Upitna', short:'?', color:'var(--blue)'},
  {key:'usklicna', label:'Usklična', short:'!', color:'var(--red)'},
  {key:'zapovjedna', label:'Zapovjedna', short:'⚡', color:'var(--bronze)'},
  {key:'zelja', label:'Želja', short:'🌟', color:'#9b59b6'},
];

const VR_SENTENCES = [
  // EASY (5)
  {text:'Marija čita zanimljivu knjigu.', sastav:'prosta', svrha:'izjavna', exp_s:'1 predikat (čita) → prosta.', exp_v:'Točka na kraju + iznosi obavijest → izjavna.'},
  {text:'Hoćeš li doći sutra?', sastav:'prosta', svrha:'upitna', exp_s:'1 predikat (hoćeš), inf. „doći" NE računa → prosta.', exp_v:'Čestica „li" + upitnik → upitna potpuna.'},
  {text:'Kako je lijepo!', sastav:'prosta', svrha:'usklicna', exp_s:'1 predikat (je) → prosta.', exp_v:'Uskličnik + jaka emocija (oduševljenje) → usklična.'},
  {text:'Zatvori vrata!', sastav:'prosta', svrha:'zapovjedna', exp_s:'1 predikat (zatvori, imperativ) → prosta.', exp_v:'Glagol u imperativu + naredba → zapovjedna.'},
  {text:'Sretan put!', sastav:'prosta', svrha:'zelja', exp_s:'Bezglagolska, ali se podrazumijeva „neka bude" → prosta.', exp_v:'Izriče želju → optativna.'},
  
  // MEDIUM (10)
  {text:'Učim, a moj brat spava.', sastav:'nezavisna', svrha:'izjavna', exp_s:'2 predikata (učim, spava) + nezav. veznik „a" → složena nezavisna suprotna.', exp_v:'Točka + obavijest → izjavna.'},
  {text:'Marija piše domaću zadaću jer mora učiti za maturu.', sastav:'zavisna', svrha:'izjavna', exp_s:'2 predikata (piše, mora) + zav. veznik „jer" → složena zavisna uzročna.', exp_v:'Točka + obavijest → izjavna.'},
  {text:'Tko je zadnji izašao?', sastav:'prosta', svrha:'upitna', exp_s:'1 predikat (je izašao) → prosta.', exp_v:'Upitna riječ „tko" + upitnik → upitna nepotpuna.'},
  {text:'Idi i kupi mi mlijeko!', sastav:'nezavisna', svrha:'zapovjedna', exp_s:'2 predikata (idi, kupi) + veznik „i" → složena nezavisna sastavna.', exp_v:'Imperativ + uskličnik → zapovjedna.'},
  {text:'Ne vidim ga nigdje.', sastav:'prosta', svrha:'izjavna', exp_s:'1 predikat (vidim) → prosta. Niječna (ne, nigdje), ali to je značenje.', exp_v:'Točka + obavijest → izjavna.'},
  {text:'Knjiga koju čitam je odlična.', sastav:'zavisna', svrha:'izjavna', exp_s:'2 predikata (čitam, je) + zav. zamjenica „koju" → složena zavisna atributna.', exp_v:'Točka + obavijest → izjavna.'},
  {text:'Hoću čokoladu!', sastav:'prosta', svrha:'usklicna', exp_s:'1 predikat (hoću) → prosta.', exp_v:'Uskličnik + zahtjev s emocijom → usklična.'},
  {text:'Kad budeš išao u trgovinu, kupi i kruh.', sastav:'zavisna', svrha:'zapovjedna', exp_s:'2 predikata (budeš išao, kupi) + zav. veznik „kad" → složena zavisna vremenska.', exp_v:'Glavna je u imperativu („kupi") → zapovjedna.'},
  {text:'Ili ćeš učiti ili nećeš položiti.', sastav:'nezavisna', svrha:'izjavna', exp_s:'2 predikata (ćeš učiti, nećeš položiti) + nezav. veznik „ili" → složena nezavisna rastavna.', exp_v:'Točka + tvrdnja → izjavna.'},
  {text:'Da je samo nedjelja!', sastav:'prosta', svrha:'zelja', exp_s:'1 predikat (je) → prosta.', exp_v:'„Da" + uskličnik → izriče želju (optativna).'},
  
  // HARD (5)
  {text:'Iako sam umorna, idem trčati.', sastav:'zavisna', svrha:'izjavna', exp_s:'2 predikata (sam, idem) + zav. veznik „iako" → složena zavisna dopusna.', exp_v:'Točka + obavijest → izjavna.'},
  {text:'Misliš li da će sutra padati kiša?', sastav:'zavisna', svrha:'upitna', exp_s:'2 predikata (misliš, će padati) + zav. veznik „da" → složena zavisna objektna. Uz to „li".', exp_v:'„Li" + upitnik → upitna potpuna.'},
  {text:'Učim, a vrijeme prolazi, i vani je već mrak.', sastav:'nezavisna', svrha:'izjavna', exp_s:'3 predikata (učim, prolazi, je) + nezav. veznici „a" i „i" → složena nezavisna (suprotna + sastavna).', exp_v:'Točka + obavijest → izjavna.'},
  {text:'Reci mi gdje si bio.', sastav:'zavisna', svrha:'zapovjedna', exp_s:'2 predikata (reci, si bio) + zav. zamj. „gdje" → složena zavisna objektna.', exp_v:'Glavna „reci" je u imperativu → zapovjedna.'},
  {text:'Zar je moguće da to nije istina!?', sastav:'zavisna', svrha:'usklicna', exp_s:'2 predikata (je, nije) + zav. veznik „da" → složena zavisna objektna.', exp_v:'Retoričko „zar" + uskličnik → usklična (ne traži pravi odgovor).'},
];

let vrIdx = 0;
let vrScore = 0;
let vrAnswers = [];
let vrSastavGiven = null;
let vrSvrhaGiven = null;

function vrRender(){
  const out = document.getElementById('vr-exercise');
  if(!out) return;
  
  if(vrIdx >= VR_SENTENCES.length){
    return vrResult();
  }
  
  const item = VR_SENTENCES[vrIdx];
  vrSastavGiven = null;
  vrSvrhaGiven = null;
  
  out.innerHTML = \`
    <div class="vr-card">
      <div class="vr-meta">
        <span class="vr-progress">Rečenica <strong>\${vrIdx+1}</strong> / \${VR_SENTENCES.length}</span>
        <span class="vr-score">Točno: <strong>\${vrScore}</strong> / \${vrIdx*2}</span>
      </div>
      
      <div class="vr-sentence">\${item.text}</div>
      
      <!-- Q1: Sastav -->
      <div class="vr-q-block">
        <div class="vr-q-label">
          <span class="vr-q-num">1</span>
          <span>Po SASTAVU rečenica je:</span>
        </div>
        <div class="vr-options vr-options-3">
          \${VR_OPT_SASTAV.map(o => \`
            <button class="vr-opt" onclick="vrAnswerSastav('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
              <span class="vr-opt-short">\${o.short}</span>
              <span class="vr-opt-label">\${o.label}</span>
            </button>
          \`).join('')}
        </div>
        <div id="vr-fb-sastav" class="vr-fb"></div>
      </div>
      
      <!-- Q2: Svrha -->
      <div class="vr-q-block">
        <div class="vr-q-label">
          <span class="vr-q-num">2</span>
          <span>Po PRIOPĆAJNOJ SVRSI rečenica je:</span>
        </div>
        <div class="vr-options vr-options-5">
          \${VR_OPT_SVRHA.map(o => \`
            <button class="vr-opt" onclick="vrAnswerSvrha('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
              <span class="vr-opt-short">\${o.short}</span>
              <span class="vr-opt-label">\${o.label}</span>
            </button>
          \`).join('')}
        </div>
        <div id="vr-fb-svrha" class="vr-fb"></div>
      </div>
      
      <div id="vr-next-wrap" style="display:none;text-align:center;margin-top:14px">
        <button class="nb-btn primary" onclick="vrNext()">\${vrIdx+1 < VR_SENTENCES.length ? 'Sljedeća rečenica →' : 'Pogledaj rezultat →'}</button>
      </div>
    </div>
  \`;
}

function vrAnswerSastav(key, btn){
  if(vrSastavGiven) return;
  vrSastavGiven = key;
  
  const item = VR_SENTENCES[vrIdx];
  const isCorrect = key === item.sastav;
  
  document.querySelectorAll('.vr-options-3 .vr-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.sastav) b.classList.add('vr-correct');
    else if(b === btn) b.classList.add('vr-wrong');
  });
  
  if(isCorrect){
    vrScore++;
    if(typeof addXP === 'function') addXP(3);
  }
  
  const fb = document.getElementById('vr-fb-sastav');
  fb.style.display = 'block';
  fb.className = 'vr-fb ' + (isCorrect ? 'vr-fb-correct' : 'vr-fb-wrong');
  fb.innerHTML = \`\${isCorrect?'✅':'❌'} <strong>\${isCorrect?'Točno!':'Pogrešno.'}</strong> \${item.exp_s}\`;
  
  vrCheckBoth();
}

function vrAnswerSvrha(key, btn){
  if(vrSvrhaGiven) return;
  vrSvrhaGiven = key;
  
  const item = VR_SENTENCES[vrIdx];
  const isCorrect = key === item.svrha;
  
  document.querySelectorAll('.vr-options-5 .vr-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.svrha) b.classList.add('vr-correct');
    else if(b === btn) b.classList.add('vr-wrong');
  });
  
  if(isCorrect){
    vrScore++;
    if(typeof addXP === 'function') addXP(3);
  }
  
  const fb = document.getElementById('vr-fb-svrha');
  fb.style.display = 'block';
  fb.className = 'vr-fb ' + (isCorrect ? 'vr-fb-correct' : 'vr-fb-wrong');
  fb.innerHTML = \`\${isCorrect?'✅':'❌'} <strong>\${isCorrect?'Točno!':'Pogrešno.'}</strong> \${item.exp_v}\`;
  
  vrCheckBoth();
}

function vrCheckBoth(){
  if(vrSastavGiven && vrSvrhaGiven){
    vrAnswers.push({
      idx: vrIdx,
      sastav: {given: vrSastavGiven, correct: vrSastavGiven === VR_SENTENCES[vrIdx].sastav},
      svrha: {given: vrSvrhaGiven, correct: vrSvrhaGiven === VR_SENTENCES[vrIdx].svrha}
    });
    document.getElementById('vr-next-wrap').style.display = 'block';
  }
}

function vrNext(){
  vrIdx++;
  vrRender();
  setTimeout(() => {
    const ex = document.getElementById('vr-exercise');
    if(ex) ex.scrollIntoView({behavior:'smooth', block:'start'});
  }, 50);
}

function vrReset(){
  vrIdx = 0;
  vrScore = 0;
  vrAnswers = [];
  document.getElementById('vr-result').style.display = 'none';
  vrRender();
}

function vrResult(){
  const out = document.getElementById('vr-exercise');
  const res = document.getElementById('vr-result');
  if(!out || !res) return;
  
  const total = VR_SENTENCES.length * 2;
  const pct = Math.round(vrScore / total * 100);
  
  let msg = '', emoji = '', color = '';
  if(pct >= 90){ msg = 'Izvrsno! Klasifikacija ti je u malom prstu.'; emoji = '🏆'; color = 'var(--gold)'; }
  else if(pct >= 70){ msg = 'Dobro! Pogledaj objašnjenja za pogreške i ponovi.'; emoji = '🎯'; color = 'var(--green)'; }
  else if(pct >= 50){ msg = 'OK, treba još rada. Vrati se na decision tree iznad.'; emoji = '📚'; color = 'var(--bronze)'; }
  else { msg = 'Treba više učenja. Pažljivo prouči 3 kriterija (sastav · svrha · značenje).'; emoji = '💪'; color = 'var(--red)'; }
  
  if(pct === 100 && typeof addXP === 'function') addXP(75, '40/40 — perfektno!');
  if(pct >= 80 && typeof recordTabVisit === 'function') recordTabVisit(2);
  
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.vr_hist') || '[]');
    hist.push({score:vrScore, total, pct, date: new Date().toISOString()});
    localStorage.setItem('mt.hrv.h21.vr_hist', JSON.stringify(hist.slice(-10)));
  } catch(e){}
  
  // Wrong answers detail
  const wrongAnswers = vrAnswers.filter(a => !a.sastav.correct || !a.svrha.correct);
  const wrongHtml = wrongAnswers.length > 0 ? \`
    <details class="rc-detail-wrong" style="margin-top:14px;text-align:left">
      <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--red);font-size:13px">
        ❌ Pogledaj svoje pogreške (\${wrongAnswers.length}) ▾
      </summary>
      <div style="margin-top:10px;display:grid;gap:8px">
        \${wrongAnswers.map(a => {
          const item = VR_SENTENCES[a.idx];
          let errors = [];
          if(!a.sastav.correct) errors.push(\`<div>• Sastav — tvoj: <strong style="color:var(--red)">\${a.sastav.given}</strong>, točno: <strong style="color:var(--green)">\${item.sastav}</strong>. \${item.exp_s}</div>\`);
          if(!a.svrha.correct) errors.push(\`<div>• Svrha — tvoja: <strong style="color:var(--red)">\${a.svrha.given}</strong>, točno: <strong style="color:var(--green)">\${item.svrha}</strong>. \${item.exp_v}</div>\`);
          return \`
            <div style="padding:10px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1);font-size:12.5px">
              <div style="font-style:italic;color:var(--t1);margin-bottom:6px">"\${item.text}"</div>
              <div style="color:var(--t2);font-size:12px;line-height:1.6">\${errors.join('')}</div>
            </div>
          \`;
        }).join('')}
      </div>
    </details>
  \` : '';
  
  out.innerHTML = '';
  res.style.display = 'block';
  res.innerHTML = \`
    <div class="rc-result-card" style="border-left:3px solid \${color}">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);margin-bottom:4px">
        Rezultat: \${vrScore} / \${total} <span style="color:\${color}">(\${pct}%)</span>
      </div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:18px">\${msg}</div>
      
      <div class="rc-result-bar">
        <div class="rc-result-fill" style="width:\${pct}%;background:\${color}"></div>
      </div>
      
      \${wrongHtml}
      
      <div style="margin-top:18px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="nb-btn primary" onclick="vrReset()">🔁 Ponovi vježbu</button>
        <button class="nb-btn" onclick="sw(3)">🔗 Složene rečenice →</button>
      </div>
    </div>
  \`;
}

function vrInit(){
  if(document.getElementById('vr-exercise')){
    vrRender();
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(vrInit, 100));
} else {
  setTimeout(vrInit, 150);
}



// ═══════════════════════════════════
// TAB 3 · KLASIFIKACIJA SLOŽENIH REČENICA
// ═══════════════════════════════════

// Step 1: nezavisno vs zavisno (3 options including "prosta" trap)
const SS_OPT_TIP = [
  {key:'prosta', label:'Prosta', short:'Pr', color:'var(--t3)'},
  {key:'nezavisna', label:'Nezavisna', short:'Nz', color:'var(--gold)'},
  {key:'zavisna', label:'Zavisna', short:'Zv', color:'var(--bronze)'},
];

// Step 2a: nezavisno vrsta (6)
const SS_OPT_NZ = [
  {key:'sastavna', label:'Sastavna', color:'var(--green)'},
  {key:'rastavna', label:'Rastavna', color:'var(--blue)'},
  {key:'suprotna', label:'Suprotna', color:'var(--red)'},
  {key:'zakljucna', label:'Zaključna', color:'var(--bronze)'},
  {key:'izuzetna', label:'Izuzetna', color:'#9b59b6'},
  {key:'objasnidbena', label:'Objasnidbena', color:'#e67e22'},
];

// Step 2b: zavisno vrsta (12)
const SS_OPT_ZV = [
  {key:'subjektna', label:'Subjektna', color:'var(--blue)', g:'imen'},
  {key:'predikatna', label:'Predikatna', color:'var(--red)', g:'imen'},
  {key:'objektna', label:'Objektna', color:'var(--green)', g:'imen'},
  {key:'atributna', label:'Atributna', color:'var(--bronze)', g:'imen'},
  {key:'mjesna', label:'Mjesna', color:'#e67e22', g:'pril'},
  {key:'vremenska', label:'Vremenska', color:'#e67e22', g:'pril'},
  {key:'nacinska', label:'Načinska', color:'#e67e22', g:'pril'},
  {key:'uzrocna', label:'Uzročna', color:'#e67e22', g:'pril'},
  {key:'posljedicna', label:'Posljedična', color:'#e67e22', g:'pril'},
  {key:'namjerna', label:'Namjerna', color:'#e67e22', g:'pril'},
  {key:'pogodbena', label:'Pogodbena', color:'#e67e22', g:'pril'},
  {key:'dopusna', label:'Dopusna', color:'#e67e22', g:'pril'},
];

const SS_SENTENCES = [
  // === EASY (8) — basic recognition ===
  {text:'Učim, ali sam umoran.', tip:'nezavisna', vrsta:'suprotna', exp_t:'2 predikata (učim, sam) + nezav. veznik „ali" → nezavisna.', exp_v:'„Ali" iznosi suprotnost → suprotna.'},
  {text:'Marija piše i Ivan čita.', tip:'nezavisna', vrsta:'sastavna', exp_t:'2 predikata + nezav. veznik „i" → nezavisna.', exp_v:'„I" zbraja/dodaje → sastavna.'},
  {text:'Učim, jer želim položiti.', tip:'zavisna', vrsta:'uzrocna', exp_t:'2 predikata + zav. veznik „jer" → zavisna.', exp_v:'„Jer" iznosi uzrok („zašto učim?") → uzročna.'},
  {text:'Idem ili ostajem.', tip:'nezavisna', vrsta:'rastavna', exp_t:'2 predikata + nezav. veznik „ili" → nezavisna.', exp_v:'„Ili" iznosi izbor → rastavna.'},
  {text:'Pada kiša, zato ne idem van.', tip:'nezavisna', vrsta:'zakljucna', exp_t:'2 predikata + nezav. veznik „zato" → nezavisna.', exp_v:'„Zato" iznosi zaključak/posljedicu → zaključna.'},
  {text:'Vjerujem da si u pravu.', tip:'zavisna', vrsta:'objektna', exp_t:'2 predikata + zav. veznik „da" → zavisna.', exp_v:'Pitanje: vjerujem ŠTO? → objektna („da" zamjenjuje objekt).'},
  {text:'Knjiga koju čitam je odlična.', tip:'zavisna', vrsta:'atributna', exp_t:'2 predikata + zav. zamj. „koju" → zavisna.', exp_v:'Opisuje imenicu „knjiga" — koja knjiga? → atributna.'},
  {text:'Ako budeš učio, položit ćeš.', tip:'zavisna', vrsta:'pogodbena', exp_t:'2 predikata + zav. veznik „ako" → zavisna.', exp_v:'„Ako" iznosi uvjet → pogodbena.'},
  
  // === MEDIUM (10) — discrimination needed ===
  {text:'Iako sam umorna, idem trčati.', tip:'zavisna', vrsta:'dopusna', exp_t:'2 predikata + zav. veznik „iako" → zavisna.', exp_v:'„Iako" iznosi dopust („usprkos") → dopusna.'},
  {text:'Dođi kad budeš mogao.', tip:'zavisna', vrsta:'vremenska', exp_t:'2 predikata + zav. veznik „kad" → zavisna.', exp_v:'„Kad" iznosi vrijeme („kada dođi?") → vremenska.'},
  {text:'Učim da položim maturu.', tip:'zavisna', vrsta:'namjerna', exp_t:'2 predikata + zav. veznik „da" → zavisna.', exp_v:'Pitanje: zašto učim? — radi cilja/namjere → namjerna.'},
  {text:'Toliko sam umoran da spavam stojeći.', tip:'zavisna', vrsta:'posljedicna', exp_t:'2 predikata + zav. veznik „da" uz „toliko" → zavisna.', exp_v:'„Da" uz „toliko/tako" iznosi posljedicu → posljedična.'},
  {text:'Otišao sam u kino, pa sam večerao.', tip:'nezavisna', vrsta:'sastavna', exp_t:'2 predikata + nezav. veznik „pa" → nezavisna.', exp_v:'„Pa" iznosi redoslijed/dodavanje → sastavna.'},
  {text:'Idem gdje me vode.', tip:'zavisna', vrsta:'mjesna', exp_t:'2 predikata + zav. zamj. „gdje" → zavisna.', exp_v:'„Gdje" iznosi mjesto („kamo idem?") → mjesna.'},
  {text:'Radi kako sam ti rekao.', tip:'zavisna', vrsta:'nacinska', exp_t:'2 predikata + zav. veznik „kako" → zavisna.', exp_v:'„Kako" iznosi način („kako radi?") → načinska.'},
  {text:'Sve je dobro, samo me boli glava.', tip:'nezavisna', vrsta:'izuzetna', exp_t:'2 predikata + nezav. veznik „samo" → nezavisna.', exp_v:'„Samo" iznosi iznimku → izuzetna.'},
  {text:'Tko rano rani, dvije sreće grabi.', tip:'zavisna', vrsta:'subjektna', exp_t:'2 predikata + zav. zamj. „tko" → zavisna.', exp_v:'„Tko rano rani" funkcionira kao subjekt glagola „grabi" → subjektna.'},
  {text:'Reci mi gdje si bio.', tip:'zavisna', vrsta:'objektna', exp_t:'2 predikata + zav. zamj. „gdje" → zavisna.', exp_v:'Pitanje: reci mi ŠTO? — odgovor je „gdje si bio" → objektna (ne mjesna!).'},
  
  // === HARD (7) — tricky cases ===
  {text:'Hoću čokoladu.', tip:'prosta', vrsta:null, exp_t:'1 predikat (hoću) → PROSTA. Ovo je zamka — nema 2 predikata.', exp_v:null},
  {text:'Sretna sam što si došao.', tip:'zavisna', vrsta:'uzrocna', exp_t:'2 predikata + zav. veznik „što" → zavisna.', exp_v:'„Što" ovdje uvodi uzrok („zašto sam sretna?") → uzročna (ne objektna!).'},
  {text:'Mislim, dakle jesam.', tip:'nezavisna', vrsta:'zakljucna', exp_t:'2 predikata + nezav. veznik „dakle" → nezavisna.', exp_v:'„Dakle" iznosi zaključak → zaključna (Descartes!).'},
  {text:'Vjerujem da bi mi pomogao da imaš vremena.', tip:'zavisna', vrsta:'objektna', exp_t:'3 predikata, više zavisnih. Glavni veznik „da" iza „vjerujem" → objektna.', exp_v:'Glavna zavisna je objektna („vjerujem ŠTO?"). Druga „da" (kondicional) je pogodbena unutar.'},
  {text:'Da imam novca, kupio bih auto.', tip:'zavisna', vrsta:'pogodbena', exp_t:'2 predikata + zav. veznik „da" + kondicional → zavisna.', exp_v:'„Da" + kondicional („bih") → pogodbena (NE objektna!). Pitanje: pod kojim uvjetom?'},
  {text:'Naime, situacija je drugačija nego što misliš.', tip:'nezavisna', vrsta:'objasnidbena', exp_t:'„Naime" je nezav. veznik koji uvodi pojašnjenje. 2 predikata.', exp_v:'„Naime" objašnjava → objasnidbena.'},
  {text:'Knjiga koju je napisao njegov brat osvojila je nagradu.', tip:'zavisna', vrsta:'atributna', exp_t:'2 predikata + zav. zamj. „koju" → zavisna.', exp_v:'„Koju je napisao brat" opisuje imenicu „knjiga" → atributna.'},
];

let ssIdx = 0;
let ssScore = 0;
let ssAnswers = [];
let ssTipGiven = null;
let ssVrstaGiven = null;
let ssMaxScore = 0; // 1 for tip + 1 for vrsta where applicable

function ssRender(){
  const out = document.getElementById('ss-exercise');
  if(!out) return;
  
  if(ssIdx >= SS_SENTENCES.length){
    return ssResult();
  }
  
  const item = SS_SENTENCES[ssIdx];
  ssTipGiven = null;
  ssVrstaGiven = null;
  
  out.innerHTML = \`
    <div class="ss-card">
      <div class="vr-meta">
        <span class="vr-progress">Rečenica <strong>\${ssIdx+1}</strong> / \${SS_SENTENCES.length}</span>
        <span class="vr-score">Točno: <strong>\${ssScore}</strong> / \${ssMaxScore}</span>
      </div>
      
      <div class="vr-sentence">\${item.text}</div>
      
      <!-- Q1: Tip (prosta/nezavisna/zavisna) -->
      <div class="vr-q-block">
        <div class="vr-q-label">
          <span class="vr-q-num">1</span>
          <span>Rečenica je:</span>
        </div>
        <div class="vr-options vr-options-3">
          \${SS_OPT_TIP.map(o => \`
            <button class="vr-opt" onclick="ssAnswerTip('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
              <span class="vr-opt-short">\${o.short}</span>
              <span class="vr-opt-label">\${o.label}</span>
            </button>
          \`).join('')}
        </div>
        <div id="ss-fb-tip" class="vr-fb"></div>
      </div>
      
      <!-- Q2 placeholder — appears after Q1 if applicable -->
      <div id="ss-q2-wrap" style="display:none"></div>
      
      <div id="ss-next-wrap" style="display:none;text-align:center;margin-top:14px">
        <button class="nb-btn primary" onclick="ssNext()">\${ssIdx+1 < SS_SENTENCES.length ? 'Sljedeća →' : 'Pogledaj rezultat →'}</button>
      </div>
    </div>
  \`;
}

function ssAnswerTip(key, btn){
  if(ssTipGiven) return;
  ssTipGiven = key;
  
  const item = SS_SENTENCES[ssIdx];
  const isCorrect = key === item.tip;
  ssMaxScore++;
  
  document.querySelectorAll('.vr-options-3 .vr-opt').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.tip) b.classList.add('vr-correct');
    else if(b === btn) b.classList.add('vr-wrong');
  });
  
  if(isCorrect){
    ssScore++;
    if(typeof addXP === 'function') addXP(3);
  }
  
  const fb = document.getElementById('ss-fb-tip');
  fb.style.display = 'block';
  fb.className = 'vr-fb ' + (isCorrect ? 'vr-fb-correct' : 'vr-fb-wrong');
  fb.innerHTML = \`\${isCorrect?'✅':'❌'} <strong>\${isCorrect?'Točno!':'Pogrešno.'}</strong> \${item.exp_t}\`;
  
  // If "prosta" — no Q2, just show next
  if(item.tip === 'prosta'){
    ssAnswers.push({idx: ssIdx, tip:{given:ssTipGiven, correct:isCorrect}, vrsta:null});
    document.getElementById('ss-next-wrap').style.display = 'block';
    return;
  }
  
  // Otherwise, show Q2 (vrsta) — based on tip given (not correct, so even if wrong gets to try Q2)
  // But use the CORRECT tip to show right options (more educational)
  const correctTip = item.tip;
  const opts = correctTip === 'nezavisna' ? SS_OPT_NZ : SS_OPT_ZV;
  const optClass = correctTip === 'nezavisna' ? 'ss-opt-grid-nz' : 'ss-opt-grid-zv';
  
  ssMaxScore++; // Q2 will count
  
  const q2 = document.getElementById('ss-q2-wrap');
  q2.style.display = 'block';
  q2.innerHTML = \`
    <div class="vr-q-block">
      <div class="vr-q-label">
        <span class="vr-q-num">2</span>
        <span>Vrsta \${correctTip === 'nezavisna' ? 'nezavisne' : 'zavisne'} rečenice:</span>
      </div>
      <div class="vr-options \${optClass}">
        \${opts.map(o => \`
          <button class="vr-opt vr-opt-vrsta" onclick="ssAnswerVrsta('\${o.key}', this)" data-key="\${o.key}" style="--opt-color:\${o.color}">
            <span class="vr-opt-label" style="font-size:11px;color:var(--t1);font-weight:600">\${o.label}</span>
          </button>
        \`).join('')}
      </div>
      <div id="ss-fb-vrsta" class="vr-fb"></div>
    </div>
  \`;
  
  // Smooth scroll to Q2
  setTimeout(() => q2.scrollIntoView({behavior:'smooth', block:'nearest'}), 100);
}

function ssAnswerVrsta(key, btn){
  if(ssVrstaGiven) return;
  ssVrstaGiven = key;
  
  const item = SS_SENTENCES[ssIdx];
  const isCorrect = key === item.vrsta;
  
  document.querySelectorAll('.vr-opt-vrsta').forEach(b => {
    b.disabled = true;
    if(b.dataset.key === item.vrsta) b.classList.add('vr-correct');
    else if(b === btn) b.classList.add('vr-wrong');
  });
  
  if(isCorrect){
    ssScore++;
    if(typeof addXP === 'function') addXP(5); // Higher reward for Q2
  }
  
  const fb = document.getElementById('ss-fb-vrsta');
  fb.style.display = 'block';
  fb.className = 'vr-fb ' + (isCorrect ? 'vr-fb-correct' : 'vr-fb-wrong');
  fb.innerHTML = \`\${isCorrect?'✅':'❌'} <strong>\${isCorrect?'Točno!':'Pogrešno.'}</strong> \${item.exp_v}\`;
  
  ssAnswers.push({
    idx: ssIdx,
    tip: {given: ssTipGiven, correct: ssTipGiven === item.tip},
    vrsta: {given: ssVrstaGiven, correct: isCorrect}
  });
  
  document.getElementById('ss-next-wrap').style.display = 'block';
}

function ssNext(){
  ssIdx++;
  ssRender();
  setTimeout(() => {
    const ex = document.getElementById('ss-exercise');
    if(ex) ex.scrollIntoView({behavior:'smooth', block:'start'});
  }, 50);
}

function ssReset(){
  ssIdx = 0;
  ssScore = 0;
  ssMaxScore = 0;
  ssAnswers = [];
  document.getElementById('ss-result').style.display = 'none';
  ssRender();
}

function ssResult(){
  const out = document.getElementById('ss-exercise');
  const res = document.getElementById('ss-result');
  if(!out || !res) return;
  
  const total = ssMaxScore;
  const pct = total > 0 ? Math.round(ssScore / total * 100) : 0;
  
  let msg = '', emoji = '', color = '';
  if(pct >= 90){ msg = 'Izvrsno! Najteža sintaktička tema ti je u malom prstu. Spreman/na za maturu!'; emoji = '🏆'; color = 'var(--gold)'; }
  else if(pct >= 70){ msg = 'Dobro! Ovo je teška tema — pogledaj objašnjenja za pogreške.'; emoji = '🎯'; color = 'var(--green)'; }
  else if(pct >= 50){ msg = 'OK, treba još rada. Vrati se na tablicu veznika i ključne zamke iznad.'; emoji = '📚'; color = 'var(--bronze)'; }
  else { msg = 'Treba puno više učenja. Pažljivo prouči 6 nezavisnih + 12 zavisnih + sve tri zamke.'; emoji = '💪'; color = 'var(--red)'; }
  
  if(pct === 100 && typeof addXP === 'function') addXP(100, 'Sintaktički ekspert!');
  if(pct >= 80 && typeof recordTabVisit === 'function') recordTabVisit(3);
  
  try {
    const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.ss_hist') || '[]');
    hist.push({score:ssScore, total, pct, date: new Date().toISOString()});
    localStorage.setItem('mt.hrv.h21.ss_hist', JSON.stringify(hist.slice(-10)));
  } catch(e){}
  
  // Wrong answers detail
  const wrong = ssAnswers.filter(a => !a.tip.correct || (a.vrsta && !a.vrsta.correct));
  const wrongHtml = wrong.length > 0 ? \`
    <details class="rc-detail-wrong" style="margin-top:14px;text-align:left">
      <summary style="cursor:pointer;font-family:var(--display);font-weight:700;color:var(--red);font-size:13px">
        ❌ Pogledaj svoje pogreške (\${wrong.length}) ▾
      </summary>
      <div style="margin-top:10px;display:grid;gap:8px">
        \${wrong.map(a => {
          const item = SS_SENTENCES[a.idx];
          let errors = [];
          if(!a.tip.correct) errors.push(\`<div>• Tip — tvoj: <strong style="color:var(--red)">\${a.tip.given}</strong>, točno: <strong style="color:var(--green)">\${item.tip}</strong>. \${item.exp_t}</div>\`);
          if(a.vrsta && !a.vrsta.correct) errors.push(\`<div>• Vrsta — tvoja: <strong style="color:var(--red)">\${a.vrsta.given}</strong>, točno: <strong style="color:var(--green)">\${item.vrsta}</strong>. \${item.exp_v}</div>\`);
          return \`
            <div style="padding:10px;background:var(--bg);border:1px solid var(--bd);border-left:3px solid var(--red);border-radius:var(--r1);font-size:12.5px">
              <div style="font-style:italic;color:var(--t1);margin-bottom:6px">"\${item.text}"</div>
              <div style="color:var(--t2);font-size:12px;line-height:1.6">\${errors.join('')}</div>
            </div>
          \`;
        }).join('')}
      </div>
    </details>
  \` : '';
  
  out.innerHTML = '';
  res.style.display = 'block';
  res.innerHTML = \`
    <div class="rc-result-card" style="border-left:3px solid \${color}">
      <div style="font-size:48px;margin-bottom:8px">\${emoji}</div>
      <div style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);margin-bottom:4px">
        Rezultat: \${ssScore} / \${total} <span style="color:\${color}">(\${pct}%)</span>
      </div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:18px">\${msg}</div>
      
      <div class="rc-result-bar">
        <div class="rc-result-fill" style="width:\${pct}%;background:\${color}"></div>
      </div>
      
      \${wrongHtml}
      
      <div style="margin-top:18px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="nb-btn primary" onclick="ssReset()">🔁 Ponovi vježbu</button>
        <button class="nb-btn" onclick="sw(4)">📚 Pojmovnik →</button>
      </div>
    </div>
  \`;
}

function ssInit(){
  if(document.getElementById('ss-exercise')){
    ssRender();
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(ssInit, 100));
} else {
  setTimeout(ssInit, 200);
}



// ═══════════════════════════════════
// TAB 5 · SINTAKTIČKI PARSER
// ═══════════════════════════════════

// ───────────────────────────────────
// LEXICONS
// ───────────────────────────────────

// Veznici po vrstama
const PARSER_VEZNICI = {
  // Nezavisni
  'sastavna':      ['i','pa','te','ni','niti'],
  'rastavna':      ['ili'],
  'suprotna':      ['a','ali','no','nego','već'],
  'zakljucna':     ['zato','stoga','dakle','prema tome'],
  'izuzetna':      ['samo','jedino','osim'],
  'objasnidbena':  ['naime','to jest','tj','i to'],
  // Zavisni
  'subjektna':     ['tko','što (=tko/što)'],  // — kontekstualno
  'predikatna':    ['kakav','kakva','kakvo','kakvi'],  // rijetko
  'objektna':      ['da','što','kako','gdje','tko','li'],
  'atributna':     ['koji','koja','koje','koju','kojeg','kojem','kojom','kojoj','kojima','kojima','čiji','čija','čije','čiju','čiji'],
  'mjesna':        ['gdje','kamo','kuda','odakle','dokle'],
  'vremenska':     ['kad','kada','dok','otkad','čim','dok god','prije nego','nakon što'],
  'nacinska':      ['kao','kao da','kao što','poput'],
  'uzrocna':       ['jer','zato što','budući da','pošto'],
  'posljedicna':   ['toliko da','tako da','te'],  // discriminator: toliko/tako pred
  'namjerna':      ['da (cilj)','kako bi','da bi'],  // s kondicionalom
  'pogodbena':     ['ako','kad bi','da (uvjet)','ukoliko'],
  'dopusna':       ['iako','premda','mada','makar','i ako','ma koliko']
};

// Reverse lookup — veznik → vrsta(e)
const VEZNIK_TO_TYPE = {
  // Nezavisni
  'i':'sastavna','pa':'sastavna','te':'sastavna','ni':'sastavna','niti':'sastavna',
  'ili':'rastavna',
  'a':'suprotna','ali':'suprotna','no':'suprotna','nego':'suprotna','već':'suprotna',
  'zato':'zakljucna','stoga':'zakljucna','dakle':'zakljucna',
  'samo':'izuzetna','jedino':'izuzetna',
  'naime':'objasnidbena',
  // Zavisni — neki imaju multiple types
  'jer':['uzrocna'],
  'da':['objektna','namjerna','posljedicna','pogodbena','subjektna'],
  'ako':['pogodbena'],
  'kad':['vremenska','pogodbena'],
  'kada':['vremenska'],
  'dok':['vremenska'],
  'iako':['dopusna'],
  'premda':['dopusna'],
  'mada':['dopusna'],
  'makar':['dopusna'],
  'kao':['nacinska'],
  'tko':['subjektna','objektna'],
  'što':['objektna','subjektna','atributna','uzrocna'],
  'kako':['nacinska','objektna','uzrocna'],
  'gdje':['mjesna','objektna'],
  'kamo':['mjesna'],
  'kuda':['mjesna'],
  'koji':['atributna'],'koja':['atributna'],'koje':['atributna'],'koju':['atributna'],
  'kojeg':['atributna'],'kojem':['atributna'],'kojom':['atributna'],'kojoj':['atributna'],
  'čiji':['atributna'],'čija':['atributna'],'čije':['atributna'],
  'kakav':['predikatna','atributna'],'kakva':['predikatna'],
  'budući':['uzrocna'], // budući da
  'čim':['vremenska'],
  'otkad':['vremenska']
};

// Klasifikacija veznika kao nezavisni vs zavisni
const NEZAVISNI = new Set(['i','pa','te','ni','niti','ili','a','ali','no','nego','već','zato','stoga','dakle','samo','jedino','naime']);
const ZAVISNI = new Set(['jer','da','ako','kad','kada','dok','iako','premda','mada','makar','kao','tko','što','kako','gdje','kamo','kuda','čim','otkad','budući','koji','koja','koje','koju','kojeg','kojem','kojom','kojoj','kojima','čiji','čija','čije','kakav','kakva','kakvo']);

// Prijedlozi (za detekciju priložnih oznaka)
const PRIJEDLOZI = new Set(['u','na','pod','nad','pred','za','kroz','mimo','oko','o','od','do','iz','bez','s','sa','k','ka','prema','među','niz','uz','po','nakon','prije','tijekom','radi','zbog','protiv','umjesto','poput','iznad','ispod','ispred','iza','blizu','daleko','nasuprot','usprkos']);

// Pomoćni i kopulativni glagoli
const GLAGOLI_KOPULA = new Set(['je','su','sam','si','smo','ste','jesam','jesi','jest','jesmo','jeste','jesu','bio','bila','bilo','bili','bile','bila','bit','biti','bude','budem','budeš','budemo','budete','budu','budi','bih','bi','bismo','biste','nije','nisu','nisam','nisi','nismo','niste']);

const GLAGOLI_HTJETI = new Set(['hoću','hoćeš','hoće','hoćemo','hoćete','ću','ćeš','će','ćemo','ćete','neću','nećeš','neće','htio','htjela','htjeli','htjele']);

// Lični glagoli — sufiksi za prepoznavanje
const VERB_ENDINGS_PREZENT = ['am','aš','a','amo','ate','aju','em','eš','e','emo','ete','eju','im','iš','i','imo','ite','iju'];
const VERB_ENDINGS_PERFEKT = ['ao','la','lo','li','le','la']; // glagolski pridjev radni

// Imenske riječi sufikse (heuristika za N — subjekt)
const IMENICA_SUFFIX_N = ['a','o','e','i']; // većina imenica završava ovima u N

// ───────────────────────────────────
// TOKENIZATION
// ───────────────────────────────────
function parserTokenize(text){
  // Normalize — lowercase za analizu, ali sačuvaj original za prikaz
  const cleaned = text.trim().replace(/[\\u201C\\u201D„""]/g, '"').replace(/[\\u2018\\u2019]/g, "'");
  
  // Split keeping punctuation as separate tokens
  const tokens = [];
  const regex = /([a-zčćđšžA-ZČĆĐŠŽ0-9'-]+)|([.,!?;:])/g;
  let m;
  while ((m = regex.exec(cleaned)) !== null) {
    if (m[1]) tokens.push({type:'word', text:m[1], lower:m[1].toLowerCase(), idx:tokens.length});
    if (m[2]) tokens.push({type:'punct', text:m[2], idx:tokens.length});
  }
  return tokens;
}

// ───────────────────────────────────
// VEZNIK DETECTION
// ───────────────────────────────────
function parserDetectVeznici(tokens){
  const veznici = [];
  for(let i = 0; i < tokens.length; i++){
    const t = tokens[i];
    if(t.type !== 'word') continue;
    
    // Multi-word veznici (do 3 riječi)
    const next1 = i+2 < tokens.length ? tokens[i+2] : null;
    const next2 = i+4 < tokens.length ? tokens[i+4] : null;
    
    // Try 3-word phrases
    if(i+2 < tokens.length){
      // Tokens at positions [i], [i+1], [i+2] (could be punct between words)
      const candidate = [i, i+1, i+2].filter(idx => tokens[idx]?.type === 'word').slice(0, 3);
      if(candidate.length >= 2){
        const wordTokens = candidate.map(idx => tokens[idx].lower);
        const phrase2 = wordTokens.slice(0, 2).join(' ');
        const phrase3 = wordTokens.length >= 3 ? wordTokens.slice(0, 3).join(' ') : null;
        
        // 3-word phrases
        if(phrase3){
          if(phrase3 === 'prije nego što' || phrase3 === 'nakon što je'){
            veznici.push({pos:i, end:candidate[2]+1, text:phrase3, classification:'zavisni', vrsta:'vremenska'});
            i = candidate[2]; continue;
          }
          if(phrase3 === 'osim što je' || phrase3 === 'osim što su'){
            veznici.push({pos:i, end:candidate[2]+1, text:phrase3, classification:'nezavisni', vrsta:'izuzetna'});
            i = candidate[2]; continue;
          }
        }
      }
    }
    
    // Try 2-word
    if(next1 && next1.type === 'word'){
      const phrase = \`\${t.lower} \${next1.lower}\`;
      if(phrase === 'zato što'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'uzrocna'}); i += 2; continue; }
      if(phrase === 'budući da'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'uzrocna'}); i += 2; continue; }
      if(phrase === 'kao da'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'nacinska'}); i += 2; continue; }
      if(phrase === 'kao što'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'nacinska'}); i += 2; continue; }
      if(phrase === 'kad bi'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'pogodbena'}); i += 2; continue; }
      if(phrase === 'da bi' || phrase === 'kako bi'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'namjerna'}); i += 2; continue; }
      if(phrase === 'prema tome'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'nezavisni', vrsta:'zakljucna'}); i += 2; continue; }
      if(phrase === 'to jest' || phrase === 'i to'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'nezavisni', vrsta:'objasnidbena'}); i += 2; continue; }
      if(phrase === 'ma koliko' || phrase === 'i ako'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'dopusna'}); i += 2; continue; }
      if(phrase === 'samo što' || phrase === 'osim što'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'nezavisni', vrsta:'izuzetna'}); i += 2; continue; }
      if(phrase === 'nakon što' || phrase === 'prije nego'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'vremenska'}); i += 2; continue; }
      if(phrase === 'dok god' || phrase === 'sve dok'){ veznici.push({pos:i, end:i+2, text:phrase, classification:'zavisni', vrsta:'vremenska'}); i += 2; continue; }
    }
    
    // Single word
    const w = t.lower;
    if(NEZAVISNI.has(w)){
      // Skip if it's the first word (could be just sentence start, e.g. "I" in "I tako")
      if(i === 0) continue;
      // Skip "i" / "pa" / "te" / "ili" if preceded by ( or no comma — heuristic
      const prevPunct = i > 0 && tokens[i-1].type === 'punct' ? tokens[i-1].text : null;
      veznici.push({pos:i, end:i+1, text:w, classification:'nezavisni', vrsta:VEZNIK_TO_TYPE[w] || 'sastavna', precededByComma: prevPunct === ','});
    } else if(ZAVISNI.has(w)){
      const types = VEZNIK_TO_TYPE[w];
      let vrsta = Array.isArray(types) ? types[0] : types || 'objektna';
      
      // Disambiguation for ambiguous veznici
      if(w === 'da'){
        // Look for "toliko/tako" before → posljedična
        const prevWords = tokens.slice(Math.max(0,i-5), i).filter(x => x.type === 'word').map(x => x.lower);
        if(prevWords.includes('toliko') || prevWords.includes('tako')) vrsta = 'posljedicna';
        // Look for "bih/bi/bismo" after → namjerna or pogodbena
        else {
          const nextWords = tokens.slice(i+1, Math.min(tokens.length, i+5)).filter(x => x.type === 'word').map(x => x.lower);
          if(nextWords.some(w2 => ['bih','bi','bismo','biste'].includes(w2))){
            // Position decides: "Da" at start = pogodbena. Inside = namjerna.
            vrsta = i === 0 ? 'pogodbena' : 'namjerna';
          }
          // Default after "vjerujem/mislim/znam/kažem/pitam/vidim/čujem/reci..." = objektna
          else if(prevWords.length > 0){
            const verbBefore = prevWords[prevWords.length-1];
            if(['vjerujem','mislim','znam','kažem','rekao','rekla','pitam','vidim','čujem','reci','tvrdim','znaj','kaži','pitao','znao'].some(v => verbBefore.startsWith(v.slice(0,4)))) vrsta = 'objektna';
            else vrsta = 'objektna'; // safest default
          }
        }
      }
      else if(w === 'što'){
        // After verbs like "znati/vjerovati" → objektna
        // After noun → atributna (rare with "što")
        // After "sretna/tužna sam" → uzročna
        const prevWords = tokens.slice(Math.max(0,i-3), i).filter(x => x.type === 'word').map(x => x.lower);
        if(prevWords.some(w2 => ['sretan','sretna','tužan','tužna','ljut','ljuta','žao','drago'].includes(w2))) vrsta = 'uzrocna';
      }
      else if(w === 'kako'){
        // Default: načinska. After verbs of speaking/perception → objektna.
        const prevWords = tokens.slice(Math.max(0,i-3), i).filter(x => x.type === 'word').map(x => x.lower);
        if(prevWords.some(w2 => ['pitao','znam','vidim','čujem','reci','znaj'].includes(w2))) vrsta = 'objektna';
      }
      else if(w === 'gdje'){
        // After verbs of perception → objektna
        const prevWords = tokens.slice(Math.max(0,i-3), i).filter(x => x.type === 'word').map(x => x.lower);
        if(prevWords.some(w2 => ['pitao','znam','reci','znaj'].includes(w2))) vrsta = 'objektna';
      }
      else if(w === 'tko'){
        // At start = subjektna. After verb of speaking = objektna.
        if(i === 0) vrsta = 'subjektna';
      }
      else if(w === 'kad' || w === 'kada'){
        // Mostly vremenska. Sometimes pogodbena uz kondicional.
        const nextWords = tokens.slice(i+1, Math.min(tokens.length, i+5)).filter(x => x.type === 'word').map(x => x.lower);
        if(nextWords.some(w2 => ['bih','bi','bismo'].includes(w2))) vrsta = 'pogodbena';
      }
      
      veznici.push({pos:i, end:i+1, text:w, classification:'zavisni', vrsta:vrsta});
    }
  }
  return veznici;
}

// ───────────────────────────────────
// PREDIKAT DETECTION
// ───────────────────────────────────
function isVerbForm(token){
  if(token.type !== 'word') return false;
  const w = token.lower;
  // Pomoćni
  if(GLAGOLI_KOPULA.has(w) || GLAGOLI_HTJETI.has(w)) return true;
  // Glagolski pridjev radni
  if(/[aeio][olm][ao]?$/.test(w) && w.length >= 4) {
    const ends = ['ao','la','lo','li','le','no','na'];
    if(ends.some(e => w.endsWith(e))) return true;
  }
  // Prezent endings
  const endings = ['am','aš','amo','ate','aju','em','eš','emo','ete','eju','im','iš','imo','ite','iju'];
  for(const e of endings){
    if(w.endsWith(e) && w.length >= e.length + 2) return true;
  }
  // Imperativ — često završava na -j, -i, -te, -mo
  if(/[jit][eo]?$/.test(w) && w.length >= 3 && !w.endsWith('e')) return true;
  return false;
}

function parserDetectPredicates(tokens){
  const preds = [];
  const seen = new Set();
  
  for(let i = 0; i < tokens.length; i++){
    if(tokens[i].type !== 'word') continue;
    const w = tokens[i].lower;
    
    // Check for compound predicate "je + pridjev radni" / "ću + infinitiv" etc
    if(GLAGOLI_KOPULA.has(w) || GLAGOLI_HTJETI.has(w)){
      // Look for next verb form (pridjev radni)
      let j = i + 1;
      while(j < tokens.length && j < i + 4 && tokens[j].type === 'word'){
        const w2 = tokens[j].lower;
        if(['ao','la','lo','li','le','no','na','ti'].some(e => w2.endsWith(e)) && w2.length >= 3){
          preds.push({pos:i, end:j+1, text:tokens[i].text + ' ' + tokens[j].text, type:'compound'});
          seen.add(i); seen.add(j);
          i = j; // skip
          break;
        }
        j++;
      }
      if(seen.has(i)) continue;
      
      // Standalone kopula = imenski predikat (start)
      preds.push({pos:i, end:i+1, text:tokens[i].text, type:'kopula'});
      seen.add(i);
    } else if(isVerbForm(tokens[i]) && !seen.has(i)){
      preds.push({pos:i, end:i+1, text:tokens[i].text, type:'glagolski'});
      seen.add(i);
    }
  }
  return preds;
}

// ───────────────────────────────────
// SUBJEKT / OBJEKT detection (heuristic)
// ───────────────────────────────────
function parserDetectMembers(tokens, predicates){
  const members = []; // {pos, end, type, text, conf}
  
  // Strategy: For each predicate, look for nearby N (subject) before it
  // and A (object) after it.
  
  // Find candidate nominatives — words that look like nouns/proper nouns
  // Heuristic: capitalized in middle = proper noun (subject candidate)
  for(let i = 0; i < tokens.length; i++){
    if(tokens[i].type !== 'word') continue;
    const t = tokens[i];
    const w = t.text;
    const wl = t.lower;
    
    // Skip predicates and veznici
    if(predicates.some(p => p.pos === i)) continue;
    if(NEZAVISNI.has(wl) || ZAVISNI.has(wl)) continue;
    if(PRIJEDLOZI.has(wl)) continue;
    if(GLAGOLI_KOPULA.has(wl) || GLAGOLI_HTJETI.has(wl)) continue;
    
    // Check capitalization — proper noun (likely subject)
    const isProper = /^[A-ZČĆĐŠŽ]/.test(w) && i > 0 && tokens[i-1].type !== 'punct';
    const isStartCapital = /^[A-ZČĆĐŠŽ]/.test(w) && i === 0;
    
    // Check preposition before — if so, it's part of PO or neizravni objekt
    const prevToken = i > 0 ? tokens[i-1] : null;
    const hasPrep = prevToken && prevToken.type === 'word' && PRIJEDLOZI.has(prevToken.lower);
    
    if(hasPrep){
      // It's part of a prepositional phrase — likely PO (priložna oznaka)
      members.push({pos:i-1, end:i+1, type:'priložna oznaka', text: prevToken.text + ' ' + w, conf:0.7});
    }
  }
  
  // Find subject candidates: noun-like word in N before/at predicate, NOT after preposition
  predicates.forEach((pred, predIdx) => {
    // Look for subject candidate before this predicate (within 3 words)
    for(let i = Math.max(0, pred.pos - 3); i < pred.pos; i++){
      if(tokens[i].type !== 'word') continue;
      const t = tokens[i];
      const wl = t.lower;
      
      // Skip if already classified or not eligible
      if(predicates.some(p => p.pos === i)) continue;
      if(NEZAVISNI.has(wl) || ZAVISNI.has(wl) || PRIJEDLOZI.has(wl)) continue;
      
      // Check no preposition before
      const prevToken = i > 0 ? tokens[i-1] : null;
      const hasPrep = prevToken && prevToken.type === 'word' && PRIJEDLOZI.has(prevToken.lower);
      if(hasPrep) continue;
      
      // Check if it's already in members
      if(members.some(m => m.pos === i)) continue;
      
      // Heuristics for subject — look like noun/zamjenica
      const isProper = /^[A-ZČĆĐŠŽ]/.test(t.text);
      const looksNoun = /[aeoi]$/.test(wl) && wl.length >= 3;
      const isPersonalPron = ['ja','ti','on','ona','ono','mi','vi','oni','one','ona'].includes(wl);
      
      if(isProper || isPersonalPron || looksNoun){
        members.push({pos:i, end:i+1, type:'subjekt', text:t.text, conf: isProper || isPersonalPron ? 0.85 : 0.6, predRef:predIdx});
        break;
      }
    }
    
    // Look for object after predicate
    for(let i = pred.end; i < Math.min(tokens.length, pred.end + 4); i++){
      if(tokens[i].type !== 'word') continue;
      const t = tokens[i];
      const wl = t.lower;
      
      if(predicates.some(p => p.pos === i)) continue;
      if(NEZAVISNI.has(wl) || ZAVISNI.has(wl)) continue;
      if(PRIJEDLOZI.has(wl)) continue;
      if(members.some(m => m.pos === i)) continue;
      
      // Check if preceded by preposition (then PO)
      const prevToken = i > 0 ? tokens[i-1] : null;
      if(prevToken && prevToken.type === 'word' && PRIJEDLOZI.has(prevToken.lower)) continue;
      
      // Heuristic — accusative ending or noun-like
      const looksAccusative = /[uo]$/.test(wl) || /e$/.test(wl);
      const looksNoun = /[aeoi]$/.test(wl) && wl.length >= 3;
      
      if(looksAccusative || looksNoun){
        members.push({pos:i, end:i+1, type:'objekt', text:t.text, conf: looksAccusative ? 0.7 : 0.5, predRef:predIdx});
        break;
      }
    }
  });
  
  // Detect adjectives = atributi (positioned right before nouns we identified)
  members.forEach(m => {
    if(m.type === 'subjekt' || m.type === 'objekt'){
      // Check word right before
      const prev = m.pos - 1;
      if(prev >= 0 && tokens[prev].type === 'word'){
        const t = tokens[prev];
        const wl = t.lower;
        if(NEZAVISNI.has(wl) || ZAVISNI.has(wl) || PRIJEDLOZI.has(wl)) return;
        if(predicates.some(p => p.pos === prev)) return;
        if(members.some(m2 => m2.pos === prev)) return;
        
        // Heuristic for adjective: ends in adjective endings, lowercase
        const adjEndings = ['i','a','o','e','u','om','og','oj','im','ima'];
        if(adjEndings.some(e => wl.endsWith(e)) && wl.length >= 4 && !/^[A-ZČĆĐŠŽ]/.test(t.text)){
          members.push({pos:prev, end:prev+1, type:'atribut', text:t.text, conf:0.6});
        }
      }
    }
  });
  
  return members;
}

// ───────────────────────────────────
// SENTENCE TYPE CLASSIFICATION
// ───────────────────────────────────
function parserClassifyType(tokens, predicates, veznici){
  const numPred = predicates.length;
  
  // Confidence base
  let conf = 0.8;
  
  if(numPred === 0){
    return {type:'nekompletno', detail:'Nije pronađen predikat — možda nepotpuna rečenica.', conf:0.3};
  }
  
  if(numPred === 1){
    return {type:'prosta', detail:\`1 predikat (\${predicates[0].text}) → prosta rečenica.\`, conf:0.85};
  }
  
  // Multiple predicates — check veznici
  if(veznici.length === 0){
    return {type:'asindetska', detail:\`\${numPred} predikata bez veznika — asindetska (povezana zarezima).\`, conf:0.7};
  }
  
  const firstVeznik = veznici[0];
  if(firstVeznik.classification === 'zavisni'){
    return {
      type:'zavisno složena',
      vrsta:firstVeznik.vrsta,
      veznik:firstVeznik.text,
      detail:\`\${numPred} predikata + zavisni veznik „\${firstVeznik.text}" → zavisno složena (\${firstVeznik.vrsta}).\`,
      conf:0.85
    };
  } else {
    return {
      type:'nezavisno složena',
      vrsta:firstVeznik.vrsta,
      veznik:firstVeznik.text,
      detail:\`\${numPred} predikata + nezavisni veznik „\${firstVeznik.text}" → nezavisno složena (\${firstVeznik.vrsta}).\`,
      conf:0.85
    };
  }
}

// ───────────────────────────────────
// PRIOPĆAJNA SVRHA
// ───────────────────────────────────
function parserDetectSvrha(tokens, text){
  const lastChar = text.trim().slice(-1);
  const lower = text.toLowerCase();
  
  if(lastChar === '?') return {tip:'upitna', detail:'Završava upitnikom.'};
  if(lastChar === '!'){
    // Imperatives often end with !
    if(/\\b(idi|dođi|piši|čitaj|reci|zatvori|otvori|sjedni|stani|dosta|prestani)\\b/i.test(lower)) return {tip:'zapovjedna', detail:'Glagol u imperativu + uskličnik.'};
    if(/\\b(neka|sretan|dobar dan)\\b/i.test(lower)) return {tip:'želja (optativna)', detail:'Izraz želje s uskličnikom.'};
    return {tip:'usklična', detail:'Završava uskličnikom (jaka emocija).'};
  }
  // Imperative even without ! 
  if(/^(idi|dođi|piši|čitaj|reci|zatvori|otvori)\\b/i.test(lower)) return {tip:'zapovjedna', detail:'Glagol u imperativu na početku.'};
  
  return {tip:'izjavna', detail:'Završava točkom — iznosi obavijest.'};
}

// ───────────────────────────────────
// MAIN PARSE FUNCTION
// ───────────────────────────────────
function parserParse(text){
  if(!text || text.trim().length < 2) return null;
  
  const tokens = parserTokenize(text);
  if(tokens.length === 0) return null;
  
  const veznici = parserDetectVeznici(tokens);
  const predicates = parserDetectPredicates(tokens);
  const members = parserDetectMembers(tokens, predicates);
  const sentenceType = parserClassifyType(tokens, predicates, veznici);
  const svrha = parserDetectSvrha(tokens, text);
  
  // Calculate overall confidence
  let conf = sentenceType.conf || 0.7;
  if(members.length === 0) conf -= 0.2;
  if(predicates.length === 0) conf -= 0.3;
  conf = Math.max(0.3, Math.min(1, conf));
  
  return {
    text, tokens, veznici, predicates, members, sentenceType, svrha,
    confidence: conf
  };
}

// ───────────────────────────────────
// RENDERING
// ───────────────────────────────────
const MEMBER_COLORS = {
  'subjekt': 'var(--blue)',
  'predikat': 'var(--red)',
  'objekt': 'var(--green)',
  'atribut': 'var(--bronze)',
  'apozicija': '#9b59b6',
  'priložna oznaka': '#e67e22'
};

const MEMBER_SHORT = {
  'subjekt': 'S',
  'predikat': 'P',
  'objekt': 'O',
  'atribut': 'A',
  'apozicija': 'Ap',
  'priložna oznaka': 'P.O.'
};

function parserRenderTokens(result){
  // Build annotated sentence
  return result.tokens.map((t, i) => {
    if(t.type === 'punct') return \`<span class="prs-punct">\${t.text}</span>\`;
    
    // Find which group this token belongs to
    const member = result.members.find(m => m.pos <= i && i < m.end);
    const pred = result.predicates.find(p => p.pos <= i && i < p.end);
    const veznik = result.veznici.find(v => v.pos <= i && i < v.end);
    
    if(member){
      const color = MEMBER_COLORS[member.type] || 'var(--t1)';
      return \`<span class="prs-tok prs-member" style="--mc:\${color}" data-type="\${member.type}" title="\${member.type}">\${t.text}</span>\`;
    }
    if(pred){
      return \`<span class="prs-tok prs-pred" data-type="predikat" title="predikat (\${pred.type})">\${t.text}</span>\`;
    }
    if(veznik){
      return \`<span class="prs-tok prs-veznik" data-type="veznik" title="\${veznik.classification} veznik · \${veznik.vrsta||''}">\${t.text}</span>\`;
    }
    return \`<span class="prs-tok-plain">\${t.text}</span>\`;
  }).join(' ').replace(/\\s+([.,!?;:])/g, '$1');
}

function parserRenderTree(result){
  // Build SVG tree visualization
  // Root: sentence type
  // Branches: predicate(s), and under each predicate: subject, object, etc.
  
  const w = 600;
  const padX = 30, padY = 20;
  const rootY = 40;
  const predY = 130;
  const memberY = 230;
  
  const numPred = result.predicates.length;
  const usableW = w - 2 * padX;
  
  let svg = \`<svg viewBox="0 0 \${w} 320" xmlns="http://www.w3.org/2000/svg" class="prs-tree-svg">\`;
  
  // Root
  svg += \`<g><rect x="\${w/2 - 90}" y="\${rootY - 18}" width="180" height="32" rx="6" fill="rgba(233,180,70,.15)" stroke="var(--gold)" stroke-width="1.5"/>\`;
  svg += \`<text x="\${w/2}" y="\${rootY + 3}" text-anchor="middle" fill="var(--gold)" font-family="var(--mono)" font-size="11" font-weight="700">\${(result.sentenceType.type||'?').toUpperCase()}</text></g>\`;
  
  if(numPred === 0){
    svg += \`<text x="\${w/2}" y="\${predY + 20}" text-anchor="middle" fill="var(--t3)" font-family="var(--mono)" font-size="11">nema predikata</text>\`;
    svg += \`</svg>\`;
    return svg;
  }
  
  // Predicates (one or multiple)
  const predX = numPred === 1 ? [w/2] : Array.from({length:numPred}, (_,i) => padX + (usableW / (numPred-1 || 1)) * i);
  
  result.predicates.forEach((pred, idx) => {
    const x = predX[idx] || w/2;
    
    // Line from root to predicate
    svg += \`<line x1="\${w/2}" y1="\${rootY + 14}" x2="\${x}" y2="\${predY - 18}" stroke="var(--bd)" stroke-width="1.5"/>\`;
    
    // Predicate node
    const predText = pred.text.length > 18 ? pred.text.slice(0, 16) + '...' : pred.text;
    const boxW = Math.max(80, predText.length * 8 + 16);
    svg += \`<g><rect x="\${x - boxW/2}" y="\${predY - 18}" width="\${boxW}" height="32" rx="6" fill="rgba(224,82,82,.12)" stroke="var(--red)" stroke-width="1.5"/>\`;
    svg += \`<text x="\${x}" y="\${predY - 4}" text-anchor="middle" fill="var(--red)" font-family="var(--mono)" font-size="9" font-weight="700">P</text>\`;
    svg += \`<text x="\${x}" y="\${predY + 9}" text-anchor="middle" fill="var(--t1)" font-family="var(--display)" font-size="11" font-weight="600">\${predText}</text></g>\`;
    
    // Members linked to this predicate
    const linkedMembers = result.members.filter(m => m.predRef === idx || (m.predRef === undefined && idx === 0));
    if(linkedMembers.length > 0){
      const memberSpacing = 110;
      const totalW = (linkedMembers.length - 1) * memberSpacing;
      const startMX = x - totalW / 2;
      
      linkedMembers.forEach((mem, mIdx) => {
        const mx = startMX + mIdx * memberSpacing;
        const color = MEMBER_COLORS[mem.type] || 'var(--t1)';
        const short = MEMBER_SHORT[mem.type] || '?';
        const memText = mem.text.length > 14 ? mem.text.slice(0, 12) + '..' : mem.text;
        const memBoxW = Math.max(70, memText.length * 7 + 16);
        
        // Line
        svg += \`<line x1="\${x}" y1="\${predY + 14}" x2="\${mx}" y2="\${memberY - 18}" stroke="var(--bd)" stroke-width="1"/>\`;
        
        // Member node
        svg += \`<g><rect x="\${mx - memBoxW/2}" y="\${memberY - 18}" width="\${memBoxW}" height="32" rx="6" fill="rgba(255,255,255,.03)" stroke="\${color}" stroke-width="1.5"/>\`;
        svg += \`<text x="\${mx}" y="\${memberY - 4}" text-anchor="middle" fill="\${color}" font-family="var(--mono)" font-size="9" font-weight="700">\${short}</text>\`;
        svg += \`<text x="\${mx}" y="\${memberY + 9}" text-anchor="middle" fill="var(--t1)" font-family="var(--display)" font-size="10" font-weight="500">\${memText}</text></g>\`;
      });
    }
  });
  
  svg += \`</svg>\`;
  return svg;
}

function parserRenderResult(result){
  if(!result){
    return \`<div style="padding:18px;color:var(--t3);text-align:center;font-style:italic">Upiši rečenicu i klikni "Analiziraj" za rezultat.</div>\`;
  }
  
  const conf = result.confidence;
  const confColor = conf >= 0.8 ? 'var(--green)' : conf >= 0.6 ? 'var(--gold)' : 'var(--red)';
  const confLabel = conf >= 0.8 ? 'visoka' : conf >= 0.6 ? 'srednja' : 'niska';
  
  // Annotated sentence
  const annotated = parserRenderTokens(result);
  
  // Type info
  const typeInfo = result.sentenceType;
  const svrhaInfo = result.svrha;
  
  // Members list
  const memberList = result.members.map(m => 
    \`<span class="prs-chip" style="--mc:\${MEMBER_COLORS[m.type]||'var(--t3)'}"><span class="prs-chip-tag">\${MEMBER_SHORT[m.type]||'?'}</span> \${m.text}</span>\`
  ).join('');
  
  const predList = result.predicates.map(p => 
    \`<span class="prs-chip" style="--mc:var(--red)"><span class="prs-chip-tag">P</span> \${p.text}</span>\`
  ).join('');
  
  const veznikList = result.veznici.length > 0 ? result.veznici.map(v => 
    \`<span class="prs-chip" style="--mc:\${v.classification==='nezavisni' ? 'var(--gold)' : 'var(--bronze)'}"><span class="prs-chip-tag">\${v.classification[0].toUpperCase()}</span> „\${v.text}" → \${v.vrsta||'?'}</span>\`
  ).join('') : '<span style="color:var(--t3);font-size:12px;font-style:italic">Nema veznika.</span>';
  
  // Tree
  const tree = parserRenderTree(result);
  
  return \`
    <div class="prs-result">
      
      <!-- Annotated sentence -->
      <div class="prs-section">
        <div class="prs-section-lbl">📝 OZNAČENA REČENICA</div>
        <div class="prs-sentence">\${annotated}</div>
        <div class="prs-legend">
          <span class="prs-leg" style="--mc:var(--blue)"><span class="prs-leg-dot"></span>S subjekt</span>
          <span class="prs-leg" style="--mc:var(--red)"><span class="prs-leg-dot"></span>P predikat</span>
          <span class="prs-leg" style="--mc:var(--green)"><span class="prs-leg-dot"></span>O objekt</span>
          <span class="prs-leg" style="--mc:var(--bronze)"><span class="prs-leg-dot"></span>A atribut</span>
          <span class="prs-leg" style="--mc:#e67e22"><span class="prs-leg-dot"></span>P.O. priložna</span>
          <span class="prs-leg" style="--mc:var(--gold)"><span class="prs-leg-dot"></span>veznik</span>
        </div>
      </div>
      
      <!-- Type analysis -->
      <div class="prs-section">
        <div class="prs-section-lbl">📊 ANALIZA</div>
        <div class="prs-grid">
          <div class="prs-info-card">
            <div class="prs-info-lbl">PO SASTAVU</div>
            <div class="prs-info-val">\${typeInfo.type||'?'}\${typeInfo.vrsta ? \` · \${typeInfo.vrsta}\` : ''}</div>
            <div class="prs-info-detail">\${typeInfo.detail||''}</div>
          </div>
          <div class="prs-info-card">
            <div class="prs-info-lbl">PO SVRSI</div>
            <div class="prs-info-val">\${svrhaInfo.tip}</div>
            <div class="prs-info-detail">\${svrhaInfo.detail}</div>
          </div>
          <div class="prs-info-card">
            <div class="prs-info-lbl">CONFIDENCE</div>
            <div class="prs-info-val" style="color:\${confColor}">\${Math.round(conf*100)}% · \${confLabel}</div>
            <div class="prs-info-detail">\${conf >= 0.8 ? 'Pouzdano!' : conf >= 0.6 ? 'Provjeri ručno.' : 'Niska — koristi AI tutora.'}</div>
          </div>
        </div>
      </div>
      
      <!-- Members detected -->
      <div class="prs-section">
        <div class="prs-section-lbl">🏗️ REČENIČNI ČLANOVI</div>
        <div class="prs-chips-row">
          \${predList}
          \${memberList}
        </div>
      </div>
      
      <!-- Veznici -->
      <div class="prs-section">
        <div class="prs-section-lbl">🔗 VEZNICI</div>
        <div class="prs-chips-row">\${veznikList}</div>
      </div>
      
      <!-- Tree -->
      <div class="prs-section">
        <div class="prs-section-lbl">🌳 STABLO ZAVISNOSTI</div>
        <div class="prs-tree-wrap">\${tree}</div>
      </div>
      
      <!-- Disclaimer -->
      <div style="margin-top:14px;padding:10px 12px;background:rgba(74,144,217,.05);border-left:3px solid var(--blue);border-radius:var(--r1);font-size:11.5px;color:var(--t2);line-height:1.5">
        <strong style="color:var(--blue)">⚠ Napomena:</strong> Parser radi heuristički — nije savršen. Za teške rečenice koristi AI tutora ispod ili provjeri ručno koristeći Tab 1-3.
      </div>
      
    </div>
  \`;
}

function parserAnalyze(){
  const input = document.getElementById('parser-input');
  const output = document.getElementById('parser-output');
  if(!input || !output) return;
  
  const text = input.value.trim();
  if(!text){
    output.innerHTML = \`<div style="padding:14px;color:var(--red);text-align:center;font-size:13px">⚠ Upiši rečenicu prvo.</div>\`;
    return;
  }
  
  const result = parserParse(text);
  output.innerHTML = parserRenderResult(result);
  
  // Save history (XSS-safe)
  if(/^[a-zA-ZčćđšžČĆĐŠŽ0-9\\s.,!?;:'-]+$/.test(text) && text.length < 200){
    try {
      const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.parser_hist') || '[]');
      hist.push({text, date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h21.parser_hist', JSON.stringify(hist.slice(-15)));
    } catch(e){}
  }
  
  if(typeof addXP === 'function') addXP(2);
  if(typeof recordTabVisit === 'function') recordTabVisit(5);
}

function parserExample(text){
  const input = document.getElementById('parser-input');
  if(input){
    input.value = text;
    parserAnalyze();
  }
}

const PARSER_RANDOM_SENTENCES = [
  // EASY (10) — proste i osnovne nezavisno složene
  {text:'Marija čita zanimljivu knjigu.', diff:'easy', type:'prosta'},
  {text:'Ivan voli svoju sestru.', diff:'easy', type:'prosta'},
  {text:'Pada kiša.', diff:'easy', type:'prosta'},
  {text:'Djeca trče po dvorištu.', diff:'easy', type:'prosta'},
  {text:'Učim hrvatski jezik svaki dan.', diff:'easy', type:'prosta'},
  {text:'Učim i pišem zadaću.', diff:'easy', type:'sastavna'},
  {text:'Učim, ali sam jako umoran.', diff:'easy', type:'suprotna'},
  {text:'Idem ili ostajem.', diff:'easy', type:'rastavna'},
  {text:'Pada kiša, zato ostajem doma.', diff:'easy', type:'zaključna'},
  {text:'Marija piše, a Ivan čita.', diff:'easy', type:'suprotna'},
  
  // MEDIUM (15) — zavisno složene, jasne
  {text:'Vjerujem da si u pravu.', diff:'medium', type:'objektna'},
  {text:'Učim jer želim položiti maturu.', diff:'medium', type:'uzročna'},
  {text:'Knjiga koju mi je dala je odlična.', diff:'medium', type:'atributna'},
  {text:'Ako budeš učio, položit ćeš.', diff:'medium', type:'pogodbena'},
  {text:'Iako sam umoran, idem na trening.', diff:'medium', type:'dopusna'},
  {text:'Dok si učio, ja sam spavao.', diff:'medium', type:'vremenska'},
  {text:'Sretna sam što si došao.', diff:'medium', type:'uzročna'},
  {text:'Idem gdje me vode.', diff:'medium', type:'mjesna'},
  {text:'Reci mi kako si.', diff:'medium', type:'objektna'},
  {text:'Učim da bih položio maturu.', diff:'medium', type:'namjerna'},
  {text:'Tko rano rani, dvije sreće grabi.', diff:'medium', type:'subjektna'},
  {text:'Marija, moja sestra, čita knjigu.', diff:'medium', type:'apozicija'},
  {text:'Pomažem svom prijatelju s domaćom zadaćom.', diff:'medium', type:'P.O.'},
  {text:'Mislim, dakle jesam.', diff:'medium', type:'zaključna'},
  {text:'Toliko sam umoran da spavam stojeći.', diff:'medium', type:'posljedična'},
  
  // HARD (10) — kompleksne, zamke
  {text:'Da imam novca, kupio bih auto.', diff:'hard', type:'pogodbena'},
  {text:'Misliš li da će padati kiša sutra?', diff:'hard', type:'objektna+upitna'},
  {text:'Ne znam tko je to rekao.', diff:'hard', type:'objektna'},
  {text:'Pala je kiša, vjetar je puhao, hladnoća je zavladala.', diff:'hard', type:'asindetska'},
  {text:'Sve znam, samo ovo poglavlje ne.', diff:'hard', type:'izuzetna'},
  {text:'Naime, situacija je drugačija nego što misliš.', diff:'hard', type:'objasnidbena'},
  {text:'Iako pada kiša, ostajemo na klupi gdje se uvijek nalazimo.', diff:'hard', type:'višestruka zavisna'},
  {text:'Tko rano rani, dvije sreće grabi, kažu naši stari.', diff:'hard', type:'višestruka'},
  {text:'Učim, jer želim položiti, da se mama ne mora brinuti.', diff:'hard', type:'lančana zavisna'},
  {text:'Marija, koja je moja najbolja prijateljica, sutra ide u Zagreb.', diff:'hard', type:'umetnuta atributna'},
  
  // EXPERT (5) — vrlo teške, klasici
  {text:'Tko bi rekao da će se to dogoditi.', diff:'expert', type:'subjektna+objektna'},
  {text:'Premda je oblačno, ljudi se kupaju, jer je vruće.', diff:'expert', type:'dopusna+uzročna'},
  {text:'Kupio sam knjigu o kojoj sam ti pričao.', diff:'expert', type:'atributna+P.O.'},
  {text:'Onaj koji puno radi, taj puno i postiže.', diff:'expert', type:'subjektna+atributna'},
  {text:'Govorim ti to, kako bi razumio, što sam htio reći.', diff:'expert', type:'namjerna+objektna'},
];

let parserRandomHistory = [];
let parserDiffFilter = 'all';

function parserRandom(){
  // Filter by current difficulty preference
  let pool = PARSER_RANDOM_SENTENCES;
  if(parserDiffFilter !== 'all'){
    pool = pool.filter(s => s.diff === parserDiffFilter);
  }
  if(pool.length === 0) pool = PARSER_RANDOM_SENTENCES;
  
  // Avoid recent (last 5) selections
  let candidates = pool.filter(s => !parserRandomHistory.includes(s.text));
  if(candidates.length === 0){
    parserRandomHistory = []; // reset if all used
    candidates = pool;
  }
  
  const picked = candidates[Math.floor(Math.random() * candidates.length)];
  parserRandomHistory.push(picked.text);
  if(parserRandomHistory.length > 5) parserRandomHistory.shift();
  
  parserExample(picked.text);
}

function parserSetDiff(diff, btn){
  parserDiffFilter = diff;
  document.querySelectorAll('.parser-diff-btn').forEach(b => b.classList.remove('on'));
  if(btn) btn.classList.add('on');
}

// ═══════════════════════════════════
// AI TUTOR — SINTAKSA
// ═══════════════════════════════════
async function aiAsk(){
  const inputEl = document.getElementById('ai-input');
  const answerEl = document.getElementById('ai-answer');
  const answerTextEl = document.getElementById('ai-answer-text');
  if(!inputEl || !answerEl || !answerTextEl) return;
  
  const question = inputEl.value.trim();
  if(!question){
    alert('Upiši pitanje prvo.');
    return;
  }
  
  // Show loading state
  answerEl.style.display = 'block';
  answerTextEl.innerHTML = \`<div style="text-align:center;padding:20px;color:var(--t3)"><div class="ai-spinner"></div> AI razmišlja...</div>\`;
  answerEl.scrollIntoView({behavior:'smooth', block:'nearest'});
  
  try {
    // 🚨 PRODUCTION TODO: Move this fetch to backend proxy (Next.js /api/ai-feedback)

    // Current: API call from browser would expose API key in production.

    // Plan: Next.js API route → Supabase tier check → proxy to Anthropic API → return result

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: \`Ti si AI profesor hrvatskog jezika specijaliziran za SINTAKSU za srednjoškolce pred maturom. Odgovaraj točno, jasno, s konkretnim primjerima na hrvatskom. Strukturiraj odgovor: 1) kratka definicija, 2) ključno pravilo, 3) 2-3 primjera s objašnjenjima, 4) trik za maturu. Maksimalno 200 riječi. Koristi <strong> za naglašavanje, <em> za primjere. Ne koristi markdown ## ili **. Specijalizacija: rečenični članovi (SPO-AAP), vrste rečenica, složene rečenice (nezavisno + zavisno, 6+12 vrsta), interpunkcija, veznici.\`,
        messages: [{role: "user", content: question}]
      })
    });
    
    if(!response.ok){
      throw new Error(\`API error: \${response.status}\`);
    }
    
    const data = await response.json();
    const text = data.content
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('\\n');
    
    // Safe render — only allow specific HTML tags
    const safe = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/&lt;strong&gt;/g, '<strong>').replace(/&lt;\\/strong&gt;/g, '</strong>')
      .replace(/&lt;em&gt;/g, '<em>').replace(/&lt;\\/em&gt;/g, '</em>')
      .replace(/&lt;br\\s*\\/?&gt;/g, '<br>')
      .replace(/\\n/g, '<br>');
    
    answerTextEl.innerHTML = safe;
    
    // Save history
    try {
      const hist = JSON.parse(localStorage.getItem('mt.hrv.h21.ai_hist') || '[]');
      hist.push({q: question, a: text.slice(0, 500), date: new Date().toISOString()});
      localStorage.setItem('mt.hrv.h21.ai_hist', JSON.stringify(hist.slice(-10)));
    } catch(e){}
    
    if(typeof addXP === 'function') addXP(5, 'AI tutor pitanje');
    
  } catch(err){
    answerTextEl.innerHTML = \`<div style="color:var(--red);padding:12px;background:rgba(224,82,82,.06);border-left:3px solid var(--red);border-radius:var(--r1)">
      <strong>⚠ Greška:</strong> AI tutor trenutno nije dostupan. Pokušaj ponovo za nekoliko sekundi.<br>
      Ako problem potraje, koristi <strong>Sintaktički parser</strong> iznad ili se obrati na Maturiraj.hr help.
    </div>\`;
    console.error('AI error:', err);
  }
}

function aiAskExample(q){
  const input = document.getElementById('ai-input');
  if(input){
    input.value = q;
    aiAsk();
  }
}

function aiCopy(btn){
  const ans = document.getElementById('ai-answer-text');
  if(!ans) return;
  const text = ans.innerText.trim();
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ Kopirano';
    setTimeout(() => btn.textContent = orig, 1500);
  }).catch(() => alert('Greška pri kopiranju.'));
}

function aiShare(){
  const ans = document.getElementById('ai-answer-text');
  const input = document.getElementById('ai-input');
  if(!ans) return;
  
  const text = \`Pitanje: \${input?.value || ''}\\n\\nOdgovor (Maturiraj.hr H21 Sintaksa):\\n\${ans.innerText.trim()}\\n\\n→ maturiraj.hr/h21\`;
  
  if(navigator.share){
    navigator.share({
      title: 'Maturiraj.hr — H21 Sintaksa',
      text: text,
      url: 'https://maturiraj.hr/hrvatski/h21-sintaksa'
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('Kopirano! Sad zalijepi u poruku/email.');
    });
  }
}

// Init
function parserInit(){
  if(document.getElementById('parser-output')){
    document.getElementById('parser-output').innerHTML = \`<div style="padding:18px;color:var(--t3);text-align:center;font-style:italic">Upiši rečenicu i klikni "🔬 Analiziraj" za rezultat.<br><br>Možeš i kliknuti jedan od primjera iznad.</div>\`;
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(parserInit, 100));
} else {
  setTimeout(parserInit, 200);
}



// ═══════════════════════════════════
// TAB 4 · POJMOVNIK SINTAKSE
// ═══════════════════════════════════

let pojmActiveCat = 'all';
let pojmStars = {};

// Load stars from localStorage
try { pojmStars = JSON.parse(localStorage.getItem('mt.hrv.h21.cit_stars') || '{}'); } catch(e){ pojmStars = {}; }

const KAT_LABELS = {
  'clanovi': 'Rečenični članovi',
  'vrste': 'Vrste rečenica',
  'nezavisno': 'Nezavisno složene',
  'zavisno': 'Zavisno složene',
  'veznici': 'Veznici i interpunkcija',
  'sintagme': 'Sintagme i ostalo'
};

const KAT_COLORS = {
  'clanovi': 'var(--blue)',
  'vrste': 'var(--green)',
  'nezavisno': 'var(--gold)',
  'zavisno': 'var(--bronze)',
  'veznici': '#9b59b6',
  'sintagme': '#e67e22'
};

function pojmEscapeHtml(s){
  return String(s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function pojmHighlight(text, query){
  if(!query || query.length < 2) return text;
  const safe = pojmEscapeHtml(text);
  const safeQ = query.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
  return safe.replace(new RegExp('(' + safeQ + ')', 'gi'), '<mark style="background:rgba(233,180,70,.25);color:var(--gold);padding:0 2px;border-radius:3px">$1</mark>');
}

function pojm2Render(){
  const grid = document.getElementById('pojm-grid2');
  const countEl = document.getElementById('pojm-count');
  if(!grid || typeof POJM_DATA2 === 'undefined') return;
  
  const searchEl = document.getElementById('pojm-search');
  const query = (searchEl?.value || '').trim().toLowerCase();
  
  // Filter by category + search
  let filtered = POJM_DATA2.filter(p => {
    if(pojmActiveCat === 'star'){
      if(!p.star) return false;
    } else if(pojmActiveCat !== 'all'){
      if(p.kat !== pojmActiveCat) return false;
    }
    if(query){
      return p.term.toLowerCase().includes(query) || p.def.toLowerCase().includes(query);
    }
    return true;
  });
  
  if(countEl){
    const totalInCat = pojmActiveCat === 'all' ? POJM_DATA2.length :
                       pojmActiveCat === 'star' ? POJM_DATA2.filter(p => p.star).length :
                       POJM_DATA2.filter(p => p.kat === pojmActiveCat).length;
    countEl.textContent = query 
      ? \`\${filtered.length} od \${totalInCat} pojmova (filter: "\${query}")\`
      : \`\${filtered.length} pojmova\${pojmActiveCat !== 'all' ? ' u kategoriji "' + (KAT_LABELS[pojmActiveCat] || pojmActiveCat) + '"' : ''}\`;
  }
  
  if(filtered.length === 0){
    grid.innerHTML = \`<div style="grid-column:1/-1;padding:40px;text-align:center;color:var(--t3);font-style:italic">
      \${query ? \`Nema rezultata za "<strong>\${pojmEscapeHtml(query)}</strong>". Pokušaj kraću ili drugačiju riječ.\` : 'Nema pojmova u ovoj kategoriji.'}
    </div>\`;
    return;
  }
  
  grid.innerHTML = filtered.map((p, idx) => {
    const id = \`\${p.kat}_\${idx}\`;
    const isStar = pojmStars[p.term] ? true : false;
    const color = KAT_COLORS[p.kat] || 'var(--t3)';
    const term = pojmHighlight(p.term, query);
    const def = pojmHighlight(p.def, query);
    
    return \`
      <div class="pojm-card-h21" style="--pc:\${color}">
        <div class="pojm-card-head">
          <div class="pojm-card-meta">
            <span class="pojm-card-cat">\${KAT_LABELS[p.kat] || p.kat}</span>
            \${p.star ? '<span class="pojm-card-ncvvo">★ NCVVO</span>' : ''}
            \${p.tag ? \`<span class="pojm-card-tag">\${p.tag}</span>\` : ''}
          </div>
          <button class="pojm-card-star \${isStar ? 'on' : ''}" 
                  onclick="pojmToggleStar('\${pojmEscapeHtml(p.term).replace(/'/g, "\\\\'")}', this)" 
                  title="\${isStar ? 'Ukloni iz mojih' : 'Spremi za učenje'}">
            \${isStar ? '★' : '☆'}
          </button>
        </div>
        <div class="pojm-card-term">\${term}</div>
        <div class="pojm-card-def">\${def}</div>
      </div>
    \`;
  }).join('');
}

function pojmFilter(cat, btn){
  pojmActiveCat = cat;
  document.querySelectorAll('.pojm-filter').forEach(b => b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  pojm2Render();
}

function pojmClearSearch(){
  const inp = document.getElementById('pojm-search');
  if(inp){ inp.value = ''; pojm2Render(); }
}

function pojmToggleStar(term, btn){
  if(pojmStars[term]){
    delete pojmStars[term];
    btn.textContent = '☆';
    btn.classList.remove('on');
    btn.title = 'Spremi za učenje';
  } else {
    pojmStars[term] = true;
    btn.textContent = '★';
    btn.classList.add('on');
    btn.title = 'Ukloni iz mojih';
    if(typeof addXP === 'function') addXP(1);
  }
  try { localStorage.setItem('mt.hrv.h21.cit_stars', JSON.stringify(pojmStars)); } catch(e){}
}

// Init when Tab 4 loads
function pojmInit2(){
  if(document.getElementById('pojm-grid2')){
    pojm2Render();
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => setTimeout(pojmInit2, 150));
} else {
  setTimeout(pojmInit2, 250);
}



// ═══════════════════════════════════
// TAB 7 · REFERENTNA TABLICA
// ═══════════════════════════════════
function refToggleScale(btn){
  const sheet = document.querySelector('.ref-sheet');
  if(!sheet) return;
  sheet.classList.toggle('zoomed');
  if(btn) btn.textContent = sheet.classList.contains('zoomed') ? '📐 Vrati' : '📐 Zoom';
}




// ═══════════════════════════════════
// PARSER · RECENT HISTORY
// ═══════════════════════════════════
function parserShowHistory(){
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem('mt.hrv.h21.parser_hist') || '[]'); } catch(e){}
  
  const dropdown = document.getElementById('parser-history-list');
  if(!dropdown) return;
  
  if(hist.length === 0){
    dropdown.innerHTML = '<div class="parser-history-item" style="color:var(--t3);font-style:italic;cursor:default">Nema povijesti — analiziraj prvu rečenicu!</div>';
    dropdown.style.display = 'block';
    return;
  }
  
  // Show last 5, most recent first
  const recent = hist.slice(-5).reverse();
  dropdown.innerHTML = \`
    <div style="font-family:var(--mono);font-size:9.5px;letter-spacing:1.5px;color:var(--gold);margin-bottom:8px;display:flex;justify-content:space-between;align-items:center">
      <span>📜 ZADNJIH \${recent.length} ANALIZA</span>
      <button class="nb-btn" style="padding:2px 8px;font-size:9.5px" onclick="parserClearHistory()">🗑 Obriši</button>
    </div>
    \${recent.map(h => \`
      <div class="parser-history-item" onclick="parserExample('\${h.text.replace(/'/g, "\\\\'")}'); document.getElementById('parser-history-list').style.display='none'">
        <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\${h.text}</span>
        <span style="color:var(--t3);font-size:10px;flex-shrink:0;margin-left:10px">\${new Date(h.date).toLocaleDateString('hr-HR', {day:'numeric', month:'numeric'})}</span>
      </div>
    \`).join('')}
  \`;
  dropdown.style.display = 'block';
}

function parserHideHistory(){
  const dropdown = document.getElementById('parser-history-list');
  if(dropdown) dropdown.style.display = 'none';
}

function parserClearHistory(){
  if(confirm('Obrisati svu povijest analiza?')){
    try { localStorage.removeItem('mt.hrv.h21.parser_hist'); } catch(e){}
    parserShowHistory();
  }
}


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
  const _d0=document.getElementById('diag0');if(_d0)_d0.dataset.state='dismissed';
}
function diag0Start(){
  d0idx=0;d0score=0;
  const _d0=document.getElementById('diag0');if(_d0)_d0.dataset.state='quiz';
  d0Show();
}
function d0Show(){
  if(d0idx>=DIAG0_Q.length){diag0End();return;}
  const q=DIAG0_Q[d0idx];
  const fill=document.getElementById('d0fill');
  if(fill)fill.style.width=((d0idx/DIAG0_Q.length)*100)+'%';
  const num=document.getElementById('d0num');
  if(num)num.textContent=\`Pitanje \${d0idx+1} / \${DIAG0_Q.length}\`;
  const text=document.getElementById('d0text');
  if(text)text.textContent=q.q;
  const opts=document.getElementById('d0opts');
  if(!opts)return;
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
  const _d0=document.getElementById('diag0');if(_d0)_d0.dataset.state='result';
  const pct=Math.round(d0score/DIAG0_Q.length*100);
  let msg='', btnTxt='', btnTab=1;
  if(pct>=80){
    msg='<strong>Odlično!</strong> Osnove H21 imaš savladane. Preporučujem Referentnu tablicu — svi ključni podaci o morfologiji na jednom mjestu za brzu provjeru.';
    btnTxt='📊 Referentna tablica →'; btnTab=7;
  } else if(pct>=60){
    msg='<strong>Dobro!</strong> Nekoliko rupa postoji — provjeri Tab 1-4 za vrste riječi, padeže, glagolske oblike i tvorbu.';
    btnTxt='📚 Promjenjive riječi →'; btnTab=1;
  } else {
    msg='<strong>Kreni od osnova.</strong> Preporučujem: Teorija (Tab 0) + Promjenjive riječi (Tab 1). 6 rečeničnih članova (SPO-AAP), vrste rečenica i veznici su temelj sintakse — sigurno ih nauči napamet.';
    btnTxt='📖 Teorija →'; btnTab=0;
  }
  (document.getElementById('d0rtitle')||{}).textContent=\`\${d0score} / \${DIAG0_Q.length} — \${pct}%\`;
  (document.getElementById('d0rdesc')||{}).innerHTML=msg;
  const btn=document.getElementById('d0rbtn');
  if(btn){btn.textContent=btnTxt;btn.onclick=()=>sw(btnTab);}
}
function diag0Reset(){const _d0=document.getElementById('diag0');if(_d0)_d0.dataset.state='intro';}

/* ═══════════════════════════════════
   CITATNIK
═══════════════════════════════════ */
const CAT_COLORS={alegorija:'p-go',vjera:'p-t',judita:'p-br',holofern:'p-r',domoljublje:'p-g',stih:'p-pa'};
let citStars={};
try{citStars=JSON.parse(localStorage.getItem('mt.hrv.h21.cit_stars')||'{}')}catch(e){}
let citActive='sve';

function togStar(i,el){
  citStars[i]=!citStars[i];
  el.classList.toggle('starred',!!citStars[i]);
  try{localStorage.setItem('mt.hrv.h21.cit_stars',JSON.stringify(citStars))}catch(e){}
}

/* ═══════════════════════════════════
   POJMOVNIK
═══════════════════════════════════ */
let pojActive='sve';

/* ═══════════════════════════════════
   ESEJ ALAT
═══════════════════════════════════ */
function alTab(btn,pane){
  document.querySelectorAll('.alat-tab').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.alat-pane').forEach(p=>p.classList.remove('on'));
  if(btn)btn.classList.add('on');
  const p=document.getElementById(pane);
  if(p)p.classList.add('on');
}
function cpyTeza(el){
  navigator.clipboard.writeText(el.textContent.trim()).catch(()=>{});
  el.classList.add('copied');
  setTimeout(()=>el.classList.remove('copied'),1500);
}

/* Scanner */
function scannerUpdate(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  const txt=ta.value;
  const words=txt.trim()?txt.trim().split(/\\s+/).length:0;
  const lines=txt.split('\\n').filter(function(l){return l.trim().length>0;}).length;
  const syl=words>0?Math.round(txt.replace(/[^aeiouAEIOUčšžđćČŠŽĐĆ]/g,'').length/Math.max(words,1)*10)/10:0;
  const we=document.getElementById('sc-words');
  if(we){const wn=we.querySelector('.wc-stat-num');if(wn)wn.textContent=words;}
  const le=document.getElementById('sc-lines');
  if(le){const ln=le.querySelector('.wc-stat-num');if(ln)ln.textContent=lines;}
  const se=document.getElementById('sc-syl');
  if(se){const sn=se.querySelector('.wc-stat-num');if(sn)sn.textContent=syl||'—';}
  try{localStorage.setItem('mt.hrv.h21.wc_text',txt);}catch(e){}
}
(function(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h21.wc_text');if(sv){ta.value=sv;scannerUpdate();}}catch(e){}
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
  el.innerHTML=\`<div class="qz-start" style="text-align:center;padding:40px 24px;background:linear-gradient(135deg, rgba(233,180,70,.05) 0%, transparent 100%);border:1px solid var(--bd);border-radius:var(--r2)">
    <div style="font-size:56px;margin-bottom:16px">🧠</div>
    <h3 style="font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);margin:0 0 12px 0">25 pitanja · H20 Morfologija</h3>
    <p style="font-size:14px;line-height:1.6;color:var(--t2);max-width:560px;margin:0 auto 24px">Pitanja pokrivaju sve teme: <strong>vrste riječi, padeži, glagolski oblici, sklanjanje, tvorba</strong>. Svako pitanje daje <em>konkretan primjer</em> — analiziraj, prepoznaj, objasni. Na kraju dobivaš ocjenu i objašnjenja.</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:20px">
      <div style="padding:8px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:20px;font-family:var(--mono);font-size:11px;color:var(--t2)">📚 10 vrsta riječi</div>
      <div style="padding:8px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:20px;font-family:var(--mono);font-size:11px;color:var(--t2)">📐 7 padeža</div>
      <div style="padding:8px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:20px;font-family:var(--mono);font-size:11px;color:var(--t2)">⚙️ Glagolski oblici</div>
      <div style="padding:8px 14px;background:var(--ele);border:1px solid var(--bd);border-radius:20px;font-family:var(--mono);font-size:11px;color:var(--t2)">🏗 Tvorba riječi</div>
    </div>
    <button class="nb-btn primary" style="font-size:14px;padding:14px 28px" onclick="qzStart()">Započni kviz →</button>
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
    <div style="text-align:right;margin-top:12px"><button class="nb-btn primary qz-next" id="qz-next" onclick="qzNext()" style="display:none">Sljedeće →</button></div>
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
  if(pct>=90){grade='ODLIČAN';msg='Spreman/na si za maturu iz H21 — razumiješ sve vrste riječi, padeže i glagolske oblike.';ico='🏆';}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno znanje. Provjeri neispravne odgovore i ponovi Tab 1-4.';ico='💪';}
  else if(pct>=60){grade='DOBAR';msg='Ponoviti: rečenične članove, vrste rečenica i složene rečenice (vidi Tab 7 Referentna tablica).';ico='📚';}
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
      <button class="nb-btn primary" onclick="qzStart()">🔁 Ponovo</button>
      <button class="nb-btn" onclick="sw(4)">📚 Pojmovnik</button>
      <button class="nb-btn" onclick="sw(7)">📊 Referentna tablica</button>
    </div>
    \${wrongHtml}
  </div>\`;

  saveScoreHistory(qzScore,KVIZ_Q.length);
  markTab(6);
  if(typeof recordQuizResult === 'function') recordQuizResult(qzScore, KVIZ_Q.length);
}

/* ═══════════════════════════════════
   CHECKPOINT
═══════════════════════════════════ */
let CP_STATE={done:{}};
try{const s=localStorage.getItem('mt.hrv.h21.cp');if(s)CP_STATE=JSON.parse(s);}catch(e){}

const CP_HINTS=['Tab 0','Tab 0','Tab 0','Tab 1','Tab 1','Tab 1','Tab 1','Tab 2','Tab 3','Tab 3'];
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
  try{localStorage.setItem('mt.hrv.h21.cp',JSON.stringify(CP_STATE));}catch(e){}
  cpRender();
  if(typeof updateDashboard === 'function') updateDashboard();
  if(CP_STATE.done[i] && typeof addXP === 'function') addXP(5, 'Checkpoint savladan');
}
function cpUpdateProgress(){
  const done=Object.values(CP_STATE.done).filter(Boolean).length;
  const total=CP_ITEMS.length;
  const pct=Math.round(done/total*100);
  (document.getElementById('cp-pct')||{}).textContent=\`\${done} / \${total}\`;
  (document.getElementById('cp-bar')||{style:{}}).style.width=pct+'%';
  (document.getElementById('sb-prog-bar')||{style:{}}).style.width=pct+'%';
  (document.getElementById('sb-prog-pct')||{}).textContent=pct+'%';
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
    else if(pct>=40)msg='<strong>Napredak!</strong> Nastavak: koristi Sintaktički parser (Tab 5) i radi kviz ponovno dok ne dobiješ 85%+.';
    else msg='Još je posla. Počni s Teorijom (Tab 0) i prođi sve sekcije.';
    sumTxt.innerHTML=msg;
  }
}
function cpReset(){
  CP_STATE={done:{}};
  try{localStorage.removeItem('mt.hrv.h21.cp');}catch(e){}
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
try{TAB_DONE=JSON.parse(localStorage.getItem('mt.hrv.h21.tab_done')||'{}')}catch(e){}

function markTab(n){
  TAB_DONE[n]=true;
  try{localStorage.setItem('mt.hrv.h21.tab_done',JSON.stringify(TAB_DONE))}catch(e){}
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
  '💡 <strong>Tab 0 tip:</strong> Sintaksa je o odnosima riječi u rečenici. Razina: riječ → sintagma → rečenica → tekst.',
  '💡 <strong>Tab 1 tip:</strong> 6 rečeničnih članova (SPO-AAP): subjekt, predikat, objekt, atribut, apozicija, priložne oznake.',
  '💡 <strong>Tab 2 tip:</strong> Prosta (1 predikat) vs. složena (2+ predikata). Infinitiv NE računa kao predikat!',
  '💡 <strong>Tab 3 tip:</strong> Nezavisno složene: ravnopravne (i, ali, ili). Zavisno složene: jedna ovisi o drugoj (da, jer, ako).',
  '💡 <strong>Tab 4 tip:</strong> 70 pojmova — filtriraj po kategoriji. Crvene zvjezdice = najčešće NCVVO pitanja.',
  '💡 <strong>Tab 5 tip:</strong> Sintaktički parser identificira rečenične članove i tip rečenice. Tree visualizer daje vizualni prikaz!',
  '💡 <strong>Tab 6 tip:</strong> 30 kviz pitanja pokrivaju sve teme sintakse. Cilj: 85%+ prije mature.',
  '💡 <strong>Tab 7 tip:</strong> Referentna tablica s veznicima i pravilima interpunkcije — isprintaj i drži uz sebe.',
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
    const names={H11:'H11 · Stari hrv. pisci',H12:'H12 · Marulić · Judita',H13:'H13 · Gundulić · Dubravka',H14:'H14 · Preporod · Mažuranić',H15:'H15 · Šenoa · Prijan Lovro',H16:'H16 · Krleža · Glembajevi',H17:'H17 · Stilske figure',H19:'H19 · Fonetika',H20:'H20 · Morfologija'};
    const el=document.getElementById('from-banner');
    const txt=document.getElementById('from-txt');
    if(el&&txt){
      txt.textContent='📎 Nastaviš učenje iz '+(names[from]||from)+' → H21 · Sintaksa';
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h21.kviz_hist')||'[]');
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h21.kviz_hist')||'[]');
    hist.push({score,total,date:new Date().toISOString()});
    localStorage.setItem('mt.hrv.h21.kviz_hist',JSON.stringify(hist.slice(-10)));
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
  easy:[
    {a:'Imenica',b:'tko? što? (žena, stol)'},
    {a:'Glagol',b:'radnja/stanje (pisati, trčati)'},
    {a:'Pridjev',b:'kakav? čiji? (lijep, majčin)'},
    {a:'Prilog',b:'opisuje glagol (brzo, ovdje)'},
  ],
  medium:[
    {a:'Nominativ',b:'1. padež · subjekt · tko? što?'},
    {a:'Akuzativ',b:'4. padež · izravni objekt · koga? što?'},
    {a:'Lokativ',b:'6. padež · mjesto · UVIJEK s prijedlogom'},
    {a:'Instrumental',b:'7. padež · sredstvo · s kim? s čim?'},
  ],
  hard:[
    {a:'Povratno-posvojna',b:'Zamjenica SVOJ — pripadnost subjektu'},
    {a:'Svršeni vid',b:'Glagol završene radnje — s prefiksom (napisati)'},
    {a:'Paukal',b:'Oblik imenice uz 2, 3, 4 — kao G jd. (dva stola)'},
    {a:'Pluralia tantum',b:'Imenice samo u množini (vrata, novine)'},
  ]
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
    easy:'📚 Vrste riječi → pitanje (4 osnovna)',
    medium:'📐 Padeži → funkcija (4 ključna)',
    hard:'🔧 Napredni pojmovi (4 zamke)'
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
      <button class="fcb \${activeClass('easy')}" onclick="mgInit('easy')" style="margin:3px" title="Vrste riječi i pitanja">📚 Lagano (4)</button>
      <button class="fcb \${activeClass('medium')}" onclick="mgInit('medium')" style="margin:3px" title="Padeži i funkcije">📐 Srednje (4)</button>
      <button class="fcb \${activeClass('hard')}" onclick="mgInit('hard')" style="margin:3px" title="Napredni pojmovi i zamke">🔧 Teško (4)</button>
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
  // === MORFEMI (5) ===
  {t:'Morfem',d:'Najmanja jezična jedinica sa značenjem ili gramatičkom funkcijom. Primjer: ljep-ot-a = 3 morfema (korijen + sufiks + nastavak).',kat:'morfem'},
  {t:'Korijen (osnova)',d:'Središnji morfem riječi koji nosi leksičko značenje. Zajednički je srodnim riječima (ljep- u ljepota, ljepši, uljepšati).',kat:'morfem'},
  {t:'Prefiks',d:'Morfem ispred korijena koji mijenja značenje. Hrv.: na-, do-, iz-, pre-, uz-, pod-, nad-, ne-, protu-, među-.',kat:'morfem'},
  {t:'Sufiks',d:'Tvorbeni morfem iza korijena koji stvara novu riječ. Razlika od nastavka: sufiks NE mijenja se, nastavak DA.',kat:'morfem'},
  {t:'Nastavak',d:'Gramatički morfem na kraju — označava padež (-a, -e, -om), lice (-m, -š), rod/broj. Mijenja se kroz oblike.',kat:'morfem'},
  
  // === VRSTE RIJEČI (5) ===
  {t:'10 vrsta riječi',d:'5 PROMJENJIVIH: imenice, pridjevi, zamjenice, brojevi, glagoli. 5 NEPROMJENJIVIH: prilozi, prijedlozi, veznici, uzvici, čestice.',kat:'vrste'},
  {t:'Imenica vs. pridjev',d:'Imenica = tko/što? (stvar). Pridjev = kakav/čiji? (svojstvo). Pridjev se slaže s imenicom u rodu/broju/padežu.',kat:'vrste'},
  {t:'Zamjenice — 7 vrsta',d:'Osobne, povratne (se), posvojne (moj), povratno-posvojna (svoj), pokazne (ovaj), upitne/odnosne (tko), neodređene (netko).',kat:'vrste'},
  {t:'Svoj vs. njegov',d:'„Ivan uzima SVOJU knjigu" = Ivanovu (povratno-posvojna). „Ivan uzima NJEGOVU knjigu" = nečiju drugu (posvojna).',kat:'vrste'},
  {t:'Prilog vs. pridjev',d:'Prilog opisuje glagol (trči BRZO). Pridjev opisuje imenicu (BRZI vlak). Test: dodaj imenicu → ako radi, pridjev.',kat:'vrste'},
  
  // === PADEŽI (5) ===
  {t:'7 padeža (NADIVLA)',d:'N (tko?), G (čega? posvojni), D (komu?), A (koga? objekt), V (dozivanje), L (gdje? tema), I (čime?). Mnemotehnika: NADIVLA.',kat:'padez'},
  {t:'A vs. L razlika',d:'Isti prijedlozi (u, na, pod, nad): A = kretanje (u ŠKOLU, kamo?), L = mirovanje (u ŠKOLI, gdje?).',kat:'padez'},
  {t:'Prijedlozi uz G',d:'od, do, iz, bez, kod, preko, pokraj, poslije, prije, radi, zbog, protiv, između. G je najbogatiji padež prijedlozima.',kat:'padez'},
  {t:'Vokativ (V)',d:'Padež dozivanja. Često s 1. palatalizacijom: Ivan → Ivane, čovjek → čovječe, Bog → Bože, majka → majko!',kat:'padez'},
  {t:'Instrumental (I)',d:'Sredstvo (BEZ prijedloga: pišem OLOVKOM) vs. društvo (S + I: s PRIJATELJEM). Različito značenje!',kat:'padez'},
  
  // === GLAGOLI (5) ===
  {t:'7 glagolskih vremena',d:'Prezent, perfekt (sam čitao), aorist, imperfekt, pluskvamperfekt, futur I (čitat ću), futur II (budem čitao).',kat:'glagol'},
  {t:'Glagolski vid',d:'Svršeni (napisati — završeno) vs. nesvršeni (pisati — u tijeku). Prefiksi perfektiviziraju: pisati → NApisati.',kat:'glagol'},
  {t:'Futur I tvorba',d:'Infinitiv (bez -i) + nenaglašeni „htjeti" (ću, ćeš, će...). Primjer: čitati → čitat ću, vidjeti → vidjet ću.',kat:'glagol'},
  {t:'Perfekt tvorba',d:'Nenaglašeni prezent „biti" (sam, si, je, smo, ste, su) + glagolski pridjev radni. Primjer: čitao SAM, pročitala JE.',kat:'glagol'},
  {t:'Imperativ',d:'Zapovijedni način. 3 oblika: 2. jd. (čitaj!), 1. mn. (čitajmo!), 2. mn. (čitajte!). Samo u 3 lica.',kat:'glagol'},
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
  (document.getElementById('fc-prev-dyn')||{}).disabled=(fcIdx===0);
  (document.getElementById('fc-next-dyn')||{}).disabled=(fcIdx===FC_DATA.length-1);
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
   CHECKLIST (Esej alat AT7)
═══════════════════════════════════ */
/* ═══════════════════════════════════
   CHECKPOINT WRITER
═══════════════════════════════════ */
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

/* ═══════════════════════════════════
   POJMOVNIK FLASHCARD MODE (H11 pj2*)
═══════════════════════════════════ */


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

function pj2Next(){
  if(pj2Idx < pj2Data.length-1){ pj2Idx++; pj2Render(); }
}

function pj2Prev(){
  if(pj2Idx > 0){ pj2Idx--; pj2Render(); }
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
    
    // Tab-specific shortcuts
    if(activeTab === 5){ // Scanner tab
      if(e.key === 's' || e.key === 'S'){ e.preventDefault(); document.getElementById('ms-input')?.focus(); return; }
      if(e.key === 'a' || e.key === 'A'){ e.preventDefault(); document.getElementById('ai-input')?.focus(); return; }
    }
    if(activeTab === 3){ // Decliner tab
      if(e.key === 'd' || e.key === 'D'){ e.preventDefault(); document.getElementById('decl-input')?.focus(); return; }
    }
    
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
          <span style="grid-column:1/-1;height:1px;background:var(--bd);margin:6px 0"></span>
          <span style="grid-column:1/-1;font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--gold)">PO TABOVIMA</span>
          <span><span class="kbd">D</span></span><span>Tab 3 — fokus složene rečenice</span>
          <span><span class="kbd">S</span></span><span>Tab 5 — fokus Sintaktički parser</span>
          <span><span class="kbd">A</span></span><span>Tab 5 — fokus AI tutor</span>
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



// (Removed: Gamification — XP, Streak, Achievements per user request)
// Stub no-op functions to prevent broken callers
function addXP(){}
function recordTabVisit(){}
function recordQuizResult(){}
function recordScan(){}
function recordDecline(){}
function recordParserUse(){}
function updateStreak(){}
function updateDashboard(){}

// (Removed: Quick Search Cmd+K — restored to classic H19/H18 style)
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
  try { localStorage.setItem('mt.hrv.h21.prog', p); } catch(e){}
}`;

export default function H21Chapter() {
  const containerRef = useRef(null);
  const stylesInjectedRef = useRef(false);
  const scriptsExecutedRef = useRef(false);

  useEffect(() => {
    // Inject styles (once per page mount)
    if (!stylesInjectedRef.current && STYLES_CSS) {
      const styleEl = document.createElement('style');
      styleEl.id = `chapter-styles-H21`;
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
        console.error(`[H21] Script execution error:`, err);
      }
    }

    return () => {
      // Cleanup on unmount
      const styleEl = document.getElementById(`chapter-styles-H21`);
      if (styleEl) styleEl.remove();
      stylesInjectedRef.current = false;
      scriptsExecutedRef.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="chapter-h21"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}
export const HRV_POGAVLJE_21 = null
