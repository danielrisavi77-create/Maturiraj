/**
 * H18 — Maturiraj.hr — Maturiraj.hr
 * Auto-generated from Maturiraj_Hrvatski_H18.html
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
  code: 'H18',
  title: 'Maturiraj.hr — Maturiraj.hr',
  description: 'Kompletna versifikacija hrvatskog stiha — tipovi stihova (deseterac, dvanaesterac, osmerac), metrički sustavi, rima, strofa.',
  canonical: 'https://maturiraj.hr/hrvatski/h18',
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
  <a class="sb-item" data-code="h16" href="/skripte/hrv/h16"><span class="sb-dot"></span>H16 · Krleža i moderna</a>

  <!-- ══ STIL I IZRAZ ══ -->
  <div class="sb-era">// Stil i izraz</div>
  <a class="sb-item" data-code="h17" href="/skripte/hrv/h17"><span class="sb-dot"></span>H17 · Stilske figure</a>
  <a class="sb-item active" data-code="h18" href="/skripte/hrv/h18"><span class="sb-dot"></span>H18 · Versifikacija</a>

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
  <a class="sb-item sb-d" data-code="d21" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D21 · Krleža · Glembajevi</a>
  <a class="sb-item sb-d" data-code="d22" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D22 · Marinković · Kiklop</a>

  <div class="sb-footer" id="sb-footer">
    <span id="sb-footer-pos">18 / 28</span> · <span id="sb-footer-title">versifikacija</span>
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
    <span class="bc-cur">H18 · Versifikacija</span>
    <span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-tab" id="bc-tab">Teorija</span>
  </div>

  <!-- COUNTDOWN + ACTIONS -->
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:20px">
    <div class="countdown" style="margin-bottom:0">
      ⏳ Do ispita HRV: <strong id="cd-days">—</strong> dana &nbsp;<span style="font-size:9px;color:var(--t3)">(15. 6. 2026.)</span>
    </div>
    <button class="fcb" onclick="window.print()" style="font-size:10px" title="Print / PDF (Ctrl+P)">🖨 Print</button>
    <button class="fcb" onclick="navigator.share?navigator.share({title:'H18 · Versifikacija',url:window.location.href}):navigator.clipboard.writeText(window.location.href)" style="font-size:10px" title="Podijeli">📤 Dijeli</button>
    <span style="font-family:var(--mono);font-size:9px;color:var(--t3);margin-left:auto">
      <span class="kbd">←</span> <span class="kbd">→</span> tabovi · <span class="kbd">?</span> pomoć
    </span>
  </div>

  <!-- HERO -->
  <header class="hero">
    <div class="hero-chapter">H18 &nbsp;·&nbsp; Stil i izraz &nbsp;·&nbsp; Versifikacija · Stih i metrika</div>
    <h1 class="hero-title">Versifikacija<br><span>stih, metar, rima</span></h1>
    <p class="hero-sub">
      <strong>Sustavni priručnik hrvatske versifikacije.</strong> <em>Tipovi stihova</em> (deseterac, dvanaesterac, osmerac, aleksandrinac, jedanaesterac, slobodni), <em>metrički sustavi</em>, <em>rima i strofa</em>. Primjeri od Marulića do Ujevića. <strong>Metrički scanner</strong> s audio čitanjem, <strong>povijesna tablica</strong> hrv. stiha kroz stoljeća.
    </p>
    <div class="hero-chips">
      <span class="hchip br">▶ H18 versifikacija</span>
      <span class="hchip go">🎵 6 tipova stihova</span>
      <span class="hchip te">📏 Metrički scanner</span>
      <span class="hchip pa">📊 Povijesna tablica</span>
      <span class="hchip re">🔊 Audio čitanje (eksp.)</span>
    </div>
  </header>

  <!-- TABS -->
  <div class="tabs" role="tablist" aria-label="Dijelovi poglavlja">
    <button class="tab on" id="tab0" onclick="sw(0)" role="tab" aria-selected="true" aria-controls="l0">📖 Teorija<span class="tab-done" id="td0"></span></button>
    <button class="tab" id="tab1" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">📏 Tipovi stihova<span class="tab-done" id="td1"></span></button>
    <button class="tab" id="tab2" onclick="sw(2)" role="tab" aria-selected="false" aria-controls="l2">🎵 Metar i ritam<span class="tab-done" id="td2"></span></button>
    <button class="tab" id="tab3" onclick="sw(3)" role="tab" aria-selected="false" aria-controls="l3">🎯 Rima<span class="tab-done" id="td3"></span></button>
    <button class="tab" id="tab4" onclick="sw(4)" role="tab" aria-selected="false" aria-controls="l4">📦 Strofa<span class="tab-done" id="td4"></span></button>
    <button class="tab" id="tab5" onclick="sw(5)" role="tab" aria-selected="false" aria-controls="l5">⚡ Scanner+Drill<span class="tab-lock">PRO</span></button>
    <button class="tab" id="tab6" onclick="sw(6)" role="tab" aria-selected="false" aria-controls="l6">🧠 Kviz<span class="tab-badge">20</span><span class="tab-done" id="td6"></span></button>
    <button class="tab" id="tab7" onclick="sw(7)" role="tab" aria-selected="false" aria-controls="l7">📊 Povijesna tablica</button>
  </div>

  <!-- ══════════════════════════════════════
       TAB 0 · TEORIJA
  ══════════════════════════════════════ -->
  <div class="layer on" id="l0" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa">Versifikacija</span>
      <span class="pill p-br">Stih i metrika</span>
      <span class="pill p-go">Hrv. tradicija</span>
      <span class="pill p-t">Slogovno-akcenatski</span>
      <span class="pill p-r">Od Marulića do Ujevića</span>
    </div>

    <!-- DIJAGNOSTIKA -->
    <div class="box-int" style="margin-bottom:20px">
      <div class="box-int-lbl">🎯 Brza dijagnostika H18 — 5 pitanja</div>
      <div class="diag" data-state="intro" id="diag0" style="">
      <style>#diag0[data-state="dismissed"]{display:none}</style>
        <div class="diag-intro">
          <div class="diag-intro-icon">🎯</div>
          <div class="diag-intro-body">
            <h4>Provjeri gdje si s hrv. versifikacijom</h4>
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
          <button class="fcb primary" id="d0rbtn" onclick="sw(1)">→ Tipovi stihova</button>
        </div>
      </div>
    </div>

    <!-- STATUS BOX -->
    <div class="box-warn" style="margin-bottom:20px;display:flex;gap:14px;align-items:flex-start">
      <div class="bw-ico">🎵</div>
      <div class="bw-body">
        <div class="bw-title">H18 je priručnik o stihu — nadograđuje H17</div>
        <div class="bw-txt">
          H17 je pokrio <em>figure zvuka</em> (aliteracija, asonanca, rima, opkoračenje, cezura) na razini pojedinih figura.<br>
          <strong>H18 produbljuje:</strong> <em>cijeli sustav organizacije stiha</em> — kako hrv. pjesnici grade ritam kroz broj slogova, cezure, rime i strofe. Od Marulićevog dvanaesterca (1501.) do Ujevićevog slobodnog stiha (20. st.).<br><br>
          <strong>Razlika:</strong> H17 pita „koja figura?", H18 pita „kakva metrika?". Za dobro razumijevanje poezije trebaš oboje.
        </div>
      </div>
    </div>

    <!-- SEC 01 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Što je versifikacija i zašto postoji</div><div class="sec-line"></div></div>

    <p><strong>Versifikacija</strong> (lat. <em>versus</em> = stih + <em>facere</em> = praviti) je <strong>sustav organizacije stiha</strong>. Poezija nije samo tekst u redovima — ona ima <em>ritmičku strukturu</em> koja stvara glazbu riječi. Versifikacija odgovara na pitanja:</p>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Što proučava versifikacija?</div>
      <div class="box-key-txt">
        <strong>1. Stih</strong> — koliko slogova ima redak? Gdje je pauza (cezura)?<br>
        <strong>2. Metar</strong> — kakav ritam (naglašeni vs. nenaglašeni slogovi)?<br>
        <strong>3. Rima</strong> — podudaraju li se krajevi stihova? Kojim obrascem?<br>
        <strong>4. Strofa</strong> — koliko stihova zajedno tvori jedinicu (distih, kvartet, sonet)?
      </div>
    </div>

    <!-- SEC 02 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · 3 metrička sustava u svjetskoj poeziji</div><div class="sec-line"></div></div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip br">hrvatski standard</span>
        <div class="sc-name">🔢 Silabički sustav</div>
        <div class="sc-desc">Broji se <strong>samo broj slogova</strong> u stihu. Naglasci nisu važni. Ritam dolazi iz <em>cezure</em> (fiksne pauze unutar stiha). <em>Karakterističan za hrvatsku, francusku, talijansku, poljsku poeziju.</em></div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip go">klasična grčka + rimska</span>
        <div class="sc-name">⏱ Kvantitativni (metrički) sustav</div>
        <div class="sc-desc">Broji se <strong>dužina slogova</strong> (dugi ⎼ vs. kratki ∪). Klasični Homer, Vergilije, Ovidije. Temelji se na prirodnoj dužini vokala. <em>Ne funkcionira u hrv. jer hrvatski nema razliku dugo/kratko fonološki aktivnu na toj razini.</em></div>
      </div>
      <div class="sc">
        <span class="sc-ico hchip te">engleski, njemački</span>
        <div class="sc-name">📢 Akcenatski sustav</div>
        <div class="sc-desc">Broji se <strong>raspored naglašenih (⎼) i nenaglašenih (∪)</strong> slogova. Dominira germanskim jezicima. <em>U hrvatskom se javlja kao silabičko-akcenatski u nekim razdobljima (npr. moderna).</em></div>
      </div>
    </div>

    <div class="box-int" style="margin-top:14px">
      <div class="box-int-lbl">🇭🇷 Hrv. versifikacija — mješavina</div>
      <div class="box-int-txt">Hrvatska je pretežno <strong>silabička</strong> (od Marulića do današnjih dana), ali su u modernoj i suvremenoj poeziji prisutni i akcenatski elementi (<em>silabičko-akcenatski sustav</em>). Važno: <em>klasične grčko-rimske stope (jamb, trohej, daktil) u hrvatskom rade samo kao tendencije, ne strogo pravilo</em>. Mažuranić, Gundulić i Marulić pišu silabički — broje slogove, cezuru poštuju strogo.</div>
    </div>

    <!-- SEC 03 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · 4 elementa versifikacije</div><div class="sec-line"></div></div>

    <div class="sc" style="border-left:3px solid var(--blue-l);cursor:pointer" onclick="sw(1)">
      <div class="sc-name">📏 1. STIH — broj slogova (Tab 1)</div>
      <div class="sc-desc">
        Osnovna jedinica pjesme. U hrv. tradiciji <strong>7 najvažnijih stihova:</strong> deseterac (4+6) — <em>narodni/Mažuranić</em>; dvanaesterac (6+6) — <em>Marulić</em>; osmerac (4+4) — <em>Gundulić</em>; aleksandrinac (6+6) — <em>francuski utjecaj</em>; jedanaesterac — <em>Kranjčević, moderna</em>; deseterac kraći — <em>lirika</em>; <strong>slobodni stih</strong> — <em>Ujević, Šimić, moderni</em>.
      </div>
    </div>
    <div class="sc" style="border-left:3px solid var(--gold);cursor:pointer" onclick="sw(2)">
      <div class="sc-name">🎵 2. METAR — raspored slogova (Tab 2)</div>
      <div class="sc-desc">
        Ritam stiha. Klasično se izražava kroz <strong>stope</strong>: <em>jamb</em> (∪ ⎼), <em>trohej</em> (⎼ ∪), <em>daktil</em> (⎼ ∪ ∪), <em>anapest</em> (∪ ∪ ⎼). U hrv. su tendencije, ne strogi metar. Kombinirano s <em>cezurom</em> (pauza unutar stiha) gradi glavni ritmički obrazac.
      </div>
    </div>
    <div class="sc" style="border-left:3px solid var(--violet);cursor:pointer" onclick="sw(3)">
      <div class="sc-name">🎯 3. RIMA — podudaranje krajeva stihova (Tab 3)</div>
      <div class="sc-desc">
        <strong>Po poziciji:</strong> parna (AABB), ukrštena (ABAB), obgrljena (ABBA), slobodni stih (bez). <strong>Po podudarnosti:</strong> čista vs. nepotpuna, muška (jedan slog) vs. ženska (dva sloga). <strong>Unutarnja rima</strong> — unutar istog stiha. Modernisti (Ujević, Šimić) napuštaju rimu.
      </div>
    </div>
    <div class="sc" style="border-left:3px solid var(--green);cursor:pointer" onclick="sw(4)">
      <div class="sc-name">📦 4. STROFA — grupa stihova (Tab 4)</div>
      <div class="sc-desc">
        Od najmanje <strong>distih</strong> (2 stiha), preko <strong>tercet</strong> (3), <strong>kvartet/katren</strong> (4), <strong>kvintet</strong> (5), <strong>sestet</strong> (6), <strong>sedmet</strong> (7), <strong>oktava</strong> (8) do <strong>soneta</strong> (14, posebna struktura 4+4+3+3). Gundulićev <em>oktavac</em> je hrv. specifična strofa.
      </div>
    </div>

    <!-- SEC 04 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Hrvatska versifikacija kroz stoljeća</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Stoljeće</th><th>Dominantan stih</th><th>Predstavnici</th><th>Obilježja</th></tr></thead>
        <tbody>
          <tr><td><strong>15.–16.</strong></td><td>Dvanaesterac (6+6)</td><td>Marulić (Judita, 1501.)</td><td>Dvostruko rimovani dvanaesterac. Hrv. humanizam.</td></tr>
          <tr><td><strong>17.</strong></td><td>Osmerac (4+4)</td><td>Gundulić (Dubravka, Osman)</td><td>Barokni stih, pastoralna i epska lirika. Oktavac kao strofa.</td></tr>
          <tr><td><strong>18.</strong></td><td>Mješano</td><td>Relković, Kačić Miošić</td><td>Prelazno razdoblje, utjecaj narodne epike.</td></tr>
          <tr><td><strong>19. (1. pol.)</strong></td><td>Deseterac (4+6)</td><td>Mažuranić (Smail-aga, 1846.)</td><td>Narodni stih u umjetničkoj poeziji. Hrv. preporod.</td></tr>
          <tr><td><strong>19. (2. pol.)</strong></td><td>Aleksandrinac, jedanaesterac</td><td>Kranjčević, Šenoa, Preradović</td><td>Europski utjecaji, realizam u poeziji.</td></tr>
          <tr><td><strong>20. (moderna)</strong></td><td>Slobodni stih</td><td>Matoš, Ujević, A. B. Šimić</td><td>Napuštanje fiksnih metrika. Ekspresionizam.</td></tr>
          <tr><td><strong>20.–21. (suvremena)</strong></td><td>Mješano</td><td>Krleža, Mihalić, Slamnig, Slaviček</td><td>Eklektika, slobodni stih dominira.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 Ključno za maturu</div>
      <div class="box-signal-txt">
        Na ispitu se najčešće pita <strong>3 stiha</strong>: <em>deseterac (4+6)</em> za Mažuranića i narodne pjesme, <em>dvanaesterac (6+6)</em> za Marulića, <em>osmerac (4+4)</em> za Gundulića. <strong>Slobodni stih</strong> za modernu poeziju (bez fiksnog broja slogova).
      </div>
    </div>

    <!-- SEC 05 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Kako skenirati stih — praktična taktika</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Korak</th><th>Što radiš</th><th>Što mjeriš</th></tr></thead>
        <tbody>
          <tr><td><strong>1. Broj slogova</strong></td><td>Izbroji slogove u stihu naglas</td><td>Deseterac=10, Dvanaesterac=12, Osmerac=8, itd.</td></tr>
          <tr><td><strong>2. Cezura</strong></td><td>Primijeti gdje prirodno praviš pauzu</td><td>4+6 (deseterac), 6+6 (dvanaesterac), 4+4 (osmerac)</td></tr>
          <tr><td><strong>3. Rima</strong></td><td>Pogledaj krajeve stihova</td><td>AABB, ABAB, ABBA, slobodna</td></tr>
          <tr><td><strong>4. Strofa</strong></td><td>Koliko stihova tvori jedinicu?</td><td>Distih (2), tercet (3), kvartet (4), sonet (14)...</td></tr>
          <tr><td><strong>5. Ritam (napredno)</strong></td><td>Označi naglašene i nenaglašene slogove</td><td>Jamb, trohej, daktil — tendencije</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Primjer: „Oj, Hrvatska, mati naša..."</div>
      <div class="box-key-txt">
        <strong>1.</strong> Broj slogova: 8 (Oj, Hr-vat-ska, ma-ti na-ša) → <strong>osmerac</strong><br>
        <strong>2.</strong> Cezura: nakon 4. sloga („Oj, Hrvatska / mati naša") → <strong>4+4</strong><br>
        <strong>3.</strong> Rima: treba vidjeti krajeve susjednih stihova<br>
        <strong>4.</strong> Strofa: ovisi o cijeloj pjesmi<br>
        <strong>5.</strong> Ritam: tendencija trohej (⎼∪) — „Oj" naglašen, „Hr" nenaglašen, „vat" naglašen
      </div>
    </div>

    <!-- SEC 06 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · H18 ↔ H17 — kako se spajaju</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>H17 Figure zvuka</th><th>H18 Versifikacija</th></tr></thead>
        <tbody>
          <tr><td>Aliteracija (ponavljanje suglasnika)</td><td>Unutarnji zvučni element stiha</td></tr>
          <tr><td>Asonanca (ponavljanje samoglasnika)</td><td>Može graditi nepotpunu rimu</td></tr>
          <tr><td>Rima (opći pojam)</td><td><strong>Podrobna analiza</strong> — tipovi po poziciji i podudarnosti (Tab 3)</td></tr>
          <tr><td>Cezura (pauza unutar stiha)</td><td><strong>Središnja za definiciju stiha</strong> (4+6, 6+6, 4+4)</td></tr>
          <tr><td>Opkoračenje (prelaz kroz stih)</td><td>Moderna versifikacijska tehnika</td></tr>
          <tr><td>Onomatopeja</td><td>Lokalna, nije sistemska (H17)</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 07 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · Mapa tabova H18</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Tab</th><th>Sadržaj</th><th>Kad koristiti</th></tr></thead>
        <tbody>
          <tr><td><strong>0. Teorija</strong></td><td>Orijentacija — 3 sustava, 4 elementa, povijest</td><td>Prvi put, za sustavan pregled</td></tr>
          <tr><td><strong>1. Tipovi stihova</strong></td><td>6 glavnih stihova hrv. tradicije</td><td>Kad analiziraš konkretnu pjesmu</td></tr>
          <tr><td><strong>2. Metar i ritam</strong></td><td>3 metrička sustava + klasične stope</td><td>Kad trebaš objasniti ritam</td></tr>
          <tr><td><strong>3. Rima</strong></td><td>Tipovi rime po poziciji i podudarnosti</td><td>Kad analiziraš rimsku shemu</td></tr>
          <tr><td><strong>4. Strofa</strong></td><td>Od distiha do soneta</td><td>Kad prepoznaješ formu pjesme</td></tr>
          <tr><td><strong>5. Scanner + Drill</strong></td><td>Metrički scanner, flashcards, matching</td><td>Trening i provjera</td></tr>
          <tr><td><strong>6. Kviz</strong></td><td>25 pitanja s primjerima stihova</td><td>Provjera znanja prije ispita</td></tr>
          <tr><td><strong>7. Povijesna tablica</strong></td><td>Kronološki pregled hrv. stiha</td><td>Referenca za esej ili komparaciju</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEC 08 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">08 · Top 5 primjera — sva djela iz H12-H16</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Djelo</th><th>Stih</th><th>Strofa</th><th>Rima</th></tr></thead>
        <tbody>
          <tr><td><strong>Marulić, Judita</strong> (H12)</td><td>Dvostruko rimovani dvanaesterac (6+6)</td><td>Distih (2 stiha)</td><td>AA BB — parna</td></tr>
          <tr><td><strong>Gundulić, Dubravka</strong> (H13)</td><td>Osmerac (4+4)</td><td>Kvartet, strofa iz komedije</td><td>Ukrštena ili parna</td></tr>
          <tr><td><strong>Mažuranić, Smail-aga</strong> (H14)</td><td>Deseterac (4+6) — narodni stih</td><td>Bez strofe (niz stihova)</td><td>Bez rime (ili slobodna)</td></tr>
          <tr><td><strong>Šenoa, Prijan Lovro</strong> (H15)</td><td>Proza (nije stih)</td><td>—</td><td>—</td></tr>
          <tr><td><strong>Krleža, Glembajevi</strong> (H16)</td><td>Dramski dijalog (nije stih)</td><td>—</td><td>—</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 H18 fokus na poeziji</div>
      <div class="box-signal-txt">
        Versifikacija se primjenjuje <strong>samo na poeziju</strong> — ne na prozu ni dramu. H15 (Šenoa) i H16 (Krleža) su proza/drama pa H18 na njih ne utječe. Fokus: <strong>H12 Marulić, H13 Gundulić, H14 Mažuranić</strong> — plus hrv. moderna (Matoš, Ujević, A. B. Šimić, Kranjčević).
      </div>
    </div>

    <!-- SEC 09 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">09 · Recap u 5 rečenica</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">⚡ Recap u 5 rečenica</div>
      <div class="box-key-txt">
        <strong>1.</strong> Versifikacija je <em>sustav organizacije stiha</em> — broj slogova, ritam, rima, strofa.<br>
        <strong>2.</strong> Hrvatska koristi <em>silabički sustav</em> (broji se broj slogova, ne trajanje kao klasični grčki).<br>
        <strong>3.</strong> <strong>3 glavna hrv. stiha:</strong> dvanaesterac (Marulić, 6+6), osmerac (Gundulić, 4+4), deseterac (Mažuranić, 4+6).<br>
        <strong>4.</strong> Moderna poezija (Matoš, Ujević, Šimić) napušta fiksne metre → <em>slobodni stih</em>.<br>
        <strong>5.</strong> <strong>Za analizu:</strong> izbroji slogove → pronađi cezuru → prepoznaj rimu → identificiraj strofu.
      </div>
    </div>

    <div class="nav-row">
      <span class="nb-btn off">← Početak</span>
      <span class="nb-btn primary" onclick="sw(1)">🎵 Tipovi stihova →</span>
    </div>

  
    <div class="cheat-card" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">SLJEDEĆE</div>
          <div class="cheat-ttl">Tab 1 · Tipovi stihova — od slobodnog do soneta</div>
        </div>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col cheat-col-wide" style="font-family:var(--serif,Fraunces,serif);font-size:13.5px;color:var(--t2,#c5b8aa);line-height:1.65">
          <p style="margin:0">Sada kad znaš versifikaciju — <b>Tab 1</b> donosi tipove stihova: deseterac, jedanaesterac, dvanaesterac, slobodni stih. Svaki s primjerom i tipom za prepoznati u maturi.</p>
        </div>
      </div>
    </div>

    </div><!-- /l0 -->

  <div class="layer" id="l1" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa">6 tipova stihova</span>
      <span class="pill p-br">hrv. tradicija</span>
      <span class="pill p-go">silabički sustav</span>
      <span class="pill p-t">🔊 Audio čitanje</span>
      <span class="pill p-r">od 15. do 21. st.</span>
    </div>

    <div class="box-int" style="margin-bottom:20px">
      <div class="box-int-lbl">🎵 6 tipova stihova u hrv. književnosti</div>
      <div class="box-int-txt">Klikni na stih za detalje — broj slogova, cezura, povijest, djela, <strong>audio čitanje</strong>. Stihovi poredani kronološki: od najstarijeg (Marulićev dvanaesterac 1501.) do modernog slobodnog stiha (20. st.).</div>
    </div>

    <div class="box-signal" style="margin-bottom:20px">
      <div class="box-signal-lbl">🔊 Audio čitanje (eksperimentalno)</div>
      <div class="box-signal-txt">Gumb 🔊 koristi <strong>Web Speech API</strong> — browser čita stih naglas. Radi u Chrome, Edge, Safari. Kvaliteta glasa ovisi o OS-u. Cilj: <em>čuti ritam, naglaske, cezuru</em>. Ne zamjenjuje samostalno čitanje — služi kao polazna točka.</div>
    </div>

    <div class="scene-list">

      <!-- 01 DVANAESTERAC -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">01</div>
          <div class="scene-ttl">Dvostruko rimovani dvanaesterac (6+6) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ RENESANSA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Stih od 12 slogova</strong> s <strong>cezurom nakon 6. sloga (6+6)</strong> i <strong>rimom u oba polustiha</strong>. Specifično hrv. obilježje — nije isti kao francuski aleksandrinac.<br><br>
            
            <b>Shema:</b> <code>U U U U U U | U U U U U U</code> (cezura u sredini)<br>
            <strong>Rima:</strong> Rimuju se i prva i druga polustiha između dva stiha (<em>4 rime ukupno u distihu</em>).<br><br>

            <b>Primjer — Marulić, Judita (1501.) [H12]:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Svih svitljih <strong>kraljica</strong> | nebeska <strong>carica</strong>,<br>
              božjih <strong>puk</strong> izdrica | bila si <strong>pomoćnica</strong>.
            </div>
            <button class="fcb" onclick="speakVerse('Svih svitljih kraljica nebeska carica, božjih puk izdrica bila si pomoćnica.',0.8)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Metrika:</b> 12 slogova | 6 slogova + 6 slogova | rima <em>-ica / -ica</em> (obje polustihe)<br><br>

            <b>Povijest:</b> Marulić (1501.) postaje <em>utemeljitelj hrv. književnosti</em> Juditom. Ovaj tip stiha preuzima iz latinskih i talijanskih uzora (Dante, Petrarca). Dvanaesterac dominira hrv. renesansom.<br><br>

            <b>Djela koja ga koriste:</b><br>
            • Marko Marulić — <strong>Judita</strong> (1501., H12) — temelj hrv. književnog stiha<br>
            • Hanibal Lucić — <em>Robinja</em><br>
            • Petar Zoranić — <em>Planine</em><br>
            • Šiško Menčetić i Džore Držić — ljubavna lirika<br><br>

            <b>Zašto je važan?</b> Marulić piše na <em>hrvatskom jeziku</em> (ne latinskom) u pučkom stihu. Spojio je narodnu tradiciju (deseterac) s učenom kulturom (latinska heksametrija) u jedan hrv. umjetnički stih.
          </div>
        </div>
      </div>

      <!-- 02 OSMERAC -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">02</div>
          <div class="scene-ttl">Osmerac (4+4) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ BAROK</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Stih od 8 slogova</strong> s <strong>cezurom nakon 4. sloga (4+4)</strong>. Lakiji i brži od dvanaesterca — pogodan za lirsku poeziju, pastoralu, glazbeni stih.<br><br>
            
            <b>Shema:</b> <code>U U U U | U U U U</code><br>
            <strong>Rima:</strong> Tipično ukrštena (ABAB) ili parna (AABB).<br><br>

            <b>Primjer — Gundulić, Osman (oko 1626.) [parallel H13]:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Ah, čijem si <strong>se zahvalila</strong>,<br>
              tašta ljudska <strong>oholasti?</strong>
            </div>
            <button class="fcb" onclick="speakVerse('Ah, čijem si se zahvalila, tašta ljudska oholasti?',0.8)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Primjer — Gundulić, Dubravka [H13]:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              O lijepa, o <strong>draga</strong>,<br>
              o slatka <strong>slobodo</strong>!
            </div>
            <button class="fcb" onclick="speakVerse('O lijepa, o draga, o slatka slobodo!',0.8)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Metrika:</b> 8 slogova | 4+4 s cezurom | ukrštena ili parna rima<br><br>

            <b>Povijest:</b> Dominantan u hrv. baroku (17. st.). Ivan Gundulić razvija oktavac — strofu od 8 osmeraca (ABABABCC) — u epu <strong>Osman</strong>. Izniman ritmički uzorak koji pojedinac nasljeđuje iz talijanske tradicije (Tasso).<br><br>

            <b>Djela koja ga koriste:</b><br>
            • Ivan Gundulić — <strong>Dubravka</strong> (H13), <em>Osman</em>, <em>Suze sina razmetnoga</em><br>
            • Ivan Bunić Vučić — <em>Plandovanja</em><br>
            • Junije Palmotić — dramske rečenice<br>
            • Hrv. lirska poezija 18. i 19. st.<br><br>

            <b>Specifičnost — Gundulićev oktavac:</b> Strofa od 8 osmeraca s shemom ABABABCC. 6 stihova ukrštene rime + 2 zaključna distiha (paralelna). Prestižna forma hrv. baroka.
          </div>
        </div>
      </div>

      <!-- 03 DESETERAC -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">03</div>
          <div class="scene-ttl">Deseterac (4+6) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ NARODNI</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Stih od 10 slogova</strong> s <strong>cezurom nakon 4. sloga (4+6)</strong>. Tzv. <em>epski deseterac</em> — osnova hrv. narodne epike.<br><br>
            
            <b>Shema:</b> <code>U U U U | U U U U U U</code><br>
            <strong>Rima:</strong> Najčešće <em>bez rime</em> (narodni stil). U umjetničkoj poeziji može imati parnu rimu.<br><br>

            <b>Primjer — Narodna balada, Hasanaginica:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Što se <strong>bijeli</strong> | u gori <strong>zelenoj?</strong><br>
              Al' su <strong>snjezi</strong>, | al' su <strong>labudovi?</strong>
            </div>
            <button class="fcb" onclick="speakVerse('Što se bijeli u gori zelenoj? Al su snjezi, al su labudovi?',0.75)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Primjer — Mažuranić, Smrt Smail-age Čengića (1846.) [H14]:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Sluge <strong>zove</strong> | Smail-aga <strong>Čengić</strong>,<br>
              Usred <strong>Stoca</strong>, | grada <strong>bijeloga</strong>.
            </div>
            <button class="fcb" onclick="speakVerse('Sluge zove Smail-aga Čengić, Usred Stoca, grada bijeloga.',0.8)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Metrika:</b> 10 slogova | cezura fiksno 4+6 | često bez rime<br><br>

            <b>Povijest:</b> Osnovni stih <em>južnoslavenske usmene epike</em> (Kraljević Marko, Hasanaginica, Kosovski ciklus). <strong>Ivan Mažuranić</strong> (1814.-1890.) u razdoblju hrv. preporoda (ilirski pokret) <em>preuzima deseterac iz narodne tradicije</em> za umjetničko pisanje — Smrt Smail-age Čengića (1846.) je remek-djelo tog spoja.<br><br>

            <b>Djela koja ga koriste:</b><br>
            • Narodna epika — <em>Kraljević Marko, Hasanaginica, Sinovi Jugovića</em><br>
            • Ivan Mažuranić — <strong>Smrt Smail-age Čengića</strong> (H14)<br>
            • Andrija Kačić Miošić — <em>Razgovor ugodni naroda slovinskoga</em><br>
            • Petar Preradović — dijelom<br><br>

            <b>Specifičnost — tropismeni cezura:</b> Cezura nakon 4. sloga nikada se ne narušava. Kad bi se narušila (rekli bi „Sluge zove Smail | -aga Čengić"), ritam bi bio pokvaren i stih ne bi bio deseterac.
          </div>
        </div>
      </div>

      <!-- 04 ALEKSANDRINAC -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">04</div>
          <div class="scene-ttl">Aleksandrinac (6+6)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Stih od 12 slogova</strong> s cezurom 6+6 — <em>isti broj slogova kao hrv. dvanaesterac, ali drugačije porijeklo i funkcija</em>. Aleksandrinac je <strong>francuski klasični stih</strong> (Racine, Corneille, Molière) koji hrv. pjesnici preuzimaju u 19. st.<br><br>
            
            <b>Shema:</b> <code>U U U U U U | U U U U U U</code><br>
            <strong>Rima:</strong> Parna AABB ili ukrštena ABAB — klasični pristup.<br><br>

            <b>Primjer — hrv. moderna (tipski):</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Gdje <strong>zora</strong> svijetli | u <strong>domu</strong> mome <strong>bijelom,</strong><br>
              Gdje <strong>majka</strong> šuti | u <strong>dvoru</strong> kog <strong>želim.</strong>
            </div>
            <button class="fcb" onclick="speakVerse('Gdje zora svijetli u domu mome bijelom, Gdje majka šuti u dvoru kog želim.',0.8)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Razlika od hrv. dvanaesterca:</b><br>
            • <em>Hrv. dvanaesterac</em> (Marulić) = dvostruko rimovan (4 rime u distihu)<br>
            • <em>Aleksandrinac</em> = rimuje samo krajeve stihova (2 rime)<br><br>

            <b>Povijest:</b> Stiže u hrv. književnost kroz <em>utjecaj francuske klasike</em> u 19. st. Kranjčević, Šenoa, Preradović — koriste aleksandrinac za didaktičku i refleksivnu poeziju.<br><br>

            <b>Djela:</b><br>
            • Silvije Strahimir Kranjčević — <em>dijelovi poezije</em><br>
            • Petar Preradović — <em>rodoljubna lirika</em><br>
            • August Šenoa — <em>pjesme</em><br><br>

            <b>Za maturu:</b> Manje se traži od dvanaesterca/deseterca/osmerca, ali <em>treba razlikovati od dvostruko rimovanog dvanaesterca</em>.
          </div>
        </div>
      </div>

      <!-- 05 JEDANAESTERAC -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">05</div>
          <div class="scene-ttl">Jedanaesterac (endecasillabo)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Stih od 11 slogova</strong> — talijanski klasični stih (Dante, Petrarca, Tasso). Cezura je <em>varijabilna</em>: 5+6 ili 6+5 ili 4+7. <em>Nema fiksne cezure</em> kao deseterac/dvanaesterac.<br><br>
            
            <b>Shema:</b> <code>U U U U U U U U U U U</code> (cezura pomična)<br>
            <strong>Rima:</strong> Razne sheme — često ukrštena ili u sonetu ABBA ABBA CDC DCD.<br><br>

            <b>Primjer — Šiško Menčetić (15. st.), hrv. lirika:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Moja draga, srce i duša moja,<br>
              Očima mi tvoja slika ne sidi.
            </div>
            <button class="fcb" onclick="speakVerse('Moja draga, srce i duša moja, Očima mi tvoja slika ne sidi.',0.8)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Povijest:</b> Jedanaesterac je <em>klasični stih talijanske renesanse</em>. U hrv. književnosti ga koriste Dubrovčani od 15. st. Posebno važan u <strong>sonetu</strong> — najprestižnija forma talijanske i hrv. poezije. Silvije Strahimir Kranjčević, Antun Gustav Matoš, Tin Ujević — pišu sonete u jedanaestercima.<br><br>

            <b>Djela:</b><br>
            • <strong>Sonetna forma</strong> (14 jedanaeseteraca)<br>
            • Kranjčević, Matoš, Ujević — moderna lirika<br>
            • Dubrovačka lirika (Menčetić, Držić, Bunić)<br><br>

            <b>Specifičnost — Sonet:</b> Tipična struktura talijanskog soneta je <em>2 katrene (4+4) + 2 terceta (3+3) = 14 jedanaeseteraca</em>. Rimska shema: ABBA ABBA CDC DCD (ili varijacije). Cjelokupna pjesma: 154 sloga za tradicionalni sonet.
          </div>
        </div>
      </div>

      <!-- 06 SLOBODNI STIH -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">06</div>
          <div class="scene-ttl">Slobodni stih (versus liber) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ MODERNA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Stih bez fiksnog broja slogova, bez obavezne cezure, često bez rime</strong>. Radikalan otklon od tradicije. Ritam dolazi iz <em>unutarnjih ponavljanja, ekspresivnosti riječi, značenjskih napetosti</em>.<br><br>
            
            <b>Shema:</b> <code>bez fiksne sheme</code><br>
            <strong>Rima:</strong> Najčešće <em>bez rime</em>. Ako se pojavi, nije sustavna.<br><br>

            <b>Primjer — A. B. Šimić, „Opomena":</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Čovječe pazi<br>
              da ne ideš malen<br>
              ispod zvijezda!
            </div>
            <button class="fcb" onclick="speakVerse('Čovječe pazi, da ne ideš malen ispod zvijezda.',0.75)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Primjer — Tin Ujević:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Od svagdar sam u srcu ovu ranu ljuljao,<br>
              sluteći da ja idem kroz svoj vječni jad.
            </div>
            <button class="fcb" onclick="speakVerse('Od svagdar sam u srcu ovu ranu ljuljao, sluteći da ja idem kroz svoj vječni jad.',0.8)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Povijest:</b> Razvija se u <strong>hrv. moderni i avangardi</strong> (kraj 19. st., 20. st.). Međunarodno — uzori Walt Whitman (<em>Leaves of Grass</em>, 1855.), francuski simbolisti. U hrv. Antun Gustav <strong>Matoš</strong>, Tin <strong>Ujević</strong>, Antun Branko <strong>Šimić</strong>, Miroslav <strong>Krleža</strong> (Balade Petrice Kerempuha).<br><br>

            <b>Djela:</b><br>
            • A. G. Matoš — lirika (Camao, Cvijet sa raskršća)<br>
            • Tin Ujević — <strong>Kolajna, Lelek sebra, Žedan kamen na studencu</strong><br>
            • A. B. Šimić — <strong>Preobraženja</strong>, <em>Opomena, Hercegovina</em><br>
            • Miroslav Krleža — <strong>Balade Petrice Kerempuha</strong> (kajkavski)<br>
            • Moderni i suvremeni pjesnici: Mihalić, Slamnig, Slaviček<br><br>

            <b>Zašto slobodni stih?</b> Modernisti odbacuju <em>fiksnu metriku</em> kao tradiciju koja ograničava izraz. Slobodni stih omogućava:<br>
            • Intenzivnije emocionalno izražavanje (ekspresionizam)<br>
            • Ekonomiju izraza (Šimić — kratke pjesme)<br>
            • Prilagodbu ritma značenju (ritam prati misao)<br>
            • Napuštanje tradicionalne ljepote radi istine izraza
          </div>
        </div>
      </div>

    </div><!-- /scene-list -->

    <!-- SINTEZA -->
    <div class="sec-hdr" style="margin-top:32px"><div class="sec-line"></div><div class="sec-badge">★ Sinteza — 6 stihova u usporedbi</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Stih</th><th>Slogovi</th><th>Cezura</th><th>Glavno djelo</th><th>Razdoblje</th></tr></thead>
        <tbody>
          <tr><td><strong>Dvostruko rim. dvanaesterac</strong></td><td>12</td><td>6+6 (sred.)</td><td>Marulić, Judita (H12)</td><td>Renesansa (16.)</td></tr>
          <tr><td><strong>Osmerac</strong></td><td>8</td><td>4+4 (sred.)</td><td>Gundulić, Dubravka (H13)</td><td>Barok (17.)</td></tr>
          <tr><td><strong>Deseterac</strong></td><td>10</td><td>4+6 (epski)</td><td>Mažuranić, Smail-aga (H14)</td><td>Preporod (19.)</td></tr>
          <tr><td><strong>Aleksandrinac</strong></td><td>12</td><td>6+6 (franc.)</td><td>Kranjčević, Preradović</td><td>Realizam (19.)</td></tr>
          <tr><td><strong>Jedanaesterac</strong></td><td>11</td><td>pomična</td><td>Menčetić, Matoš, Ujević</td><td>Renes./Moderna</td></tr>
          <tr><td><strong>Slobodni stih</strong></td><td>varijabilno</td><td>bez</td><td>Ujević, Šimić, Krleža</td><td>Moderna (20.)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Top 3 stiha koje MORAŠ znati</div>
      <div class="box-key-txt">
        <strong>1. Deseterac (4+6)</strong> — narodni stih + Mažuranić. 90% ispitnih pitanja o metrici narodne epike.<br>
        <strong>2. Dvanaesterac (6+6)</strong> — Marulićeva Judita. Prva hrv. umjetnička pjesma.<br>
        <strong>3. Osmerac (4+4)</strong> — Gundulićeva Dubravka. Barokni hrv. stih.<br><br>
        <em>S ova 3 stiha + prepoznavanjem slobodnog stiha (moderna) pokrivaš 95% maturalnih pitanja o versifikaciji.</em>
      </div>
    </div>

    <!-- DISCERE -->
    <div class="discere-banner" style="margin-top:18px" onclick="window.location.href='#discere'">
      <div class="discere-ico">🎵</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · AI Verse Detector</div>
        <div class="discere-sub">Zalijepi pjesmu — AI prepoznaje stih, broji slogove, identificira cezuru, imenuje formu · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row">
      <span class="nb-btn" onclick="sw(0)">← Teorija</span>
      <span class="nb-btn primary" onclick="sw(2)">🎼 Metar i ritam →</span>
    </div>

  </div><!-- /l1 -->

  <div class="layer" id="l2" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa">Metar i ritam</span>
      <span class="pill p-br">3 sustava</span>
      <span class="pill p-go">4 klasične stope</span>
      <span class="pill p-t">Jamb, trohej, daktil, anapest</span>
      <span class="pill p-r">Akcenti u hrv.</span>
    </div>

    <div class="box-int" style="margin-bottom:20px">
      <div class="box-int-lbl">🎼 Metar i ritam — mjera stiha</div>
      <div class="box-int-txt">
        <strong>Metar</strong> je <em>mjera stiha</em> — kako su naglašeni i nenaglašeni slogovi organizirani u ritmički uzorak. <strong>Ritam</strong> je <em>dojam</em> koji tako organizirani slogovi stvaraju kada se čitaju naglas.<br><br>
        <em>Važno za hrv.:</em> klasične stope (jamb, trohej, daktil) rade u hrv. kao <strong>tendencije</strong>, ne kao strogi metar. Naš glavni sustav je silabički (broj slogova), a stope su dodatak za analizu ritma.
      </div>
    </div>

    <!-- SEC 01 — 3 METRIČKA SUSTAVA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · 3 metrička sustava — detaljna razrada</div><div class="sec-line"></div></div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip br">hrvatski standard</span>
        <div class="sc-name">🔢 Silabički sustav</div>
        <div class="sc-desc">
          <strong>Broji se broj slogova.</strong> Ritam dolazi iz cezure (fiksna pauza) i podudaranja dužina stihova.<br><br>
          <em>Primjer:</em> deseterac uvijek ima 10 slogova s cezurom nakon 4. Dvanaesterac uvijek 12 s cezurom nakon 6.<br><br>
          <strong>Zašto radi u hrv.:</strong> Hrvatski ima <em>slobodnu akcenaciju</em> (naglasak može biti na raznim slogovima), ali zvuk riječi ostaje predvidljiv po broju slogova.<br><br>
          <strong>Primjeri:</strong> Marulić (H12), Gundulić (H13), Mažuranić (H14), narodna epika.
        </div>
      </div>
      
      <div class="sc">
        <span class="sc-ico hchip go">klasika</span>
        <div class="sc-name">⏱ Kvantitativni (metrički)</div>
        <div class="sc-desc">
          <strong>Broji se dužina slogova.</strong> Klasični grčki i latinski jezici imaju fonološki aktivnu razliku između <em>dugih</em> (⎼) i <em>kratkih</em> (∪) slogova.<br><br>
          <em>Primjer:</em> Homerov heksametar = 6 daktila (⎼∪∪) s tolerantim varijacijama.<br><br>
          <strong>Zašto NE radi u hrv.:</strong> U hrvatskom razlika dugo/kratko nije sustavna metrički — imamo naglaske (uzlazni, silazni, dug, kratak), ali ne klasične stope kao princip.<br><br>
          <strong>Primjeri:</strong> Homer (Ilijada, Odiseja), Vergilije (Eneida), Ovidije (Metamorfoze).
        </div>
      </div>
      
      <div class="sc">
        <span class="sc-ico hchip te">germanski</span>
        <div class="sc-name">📢 Akcenatski (silabičko-akcenatski)</div>
        <div class="sc-desc">
          <strong>Broji se raspored naglašenih (⎼) i nenaglašenih (∪) slogova.</strong> Engleska i njemačka poezija funkcionira na tom principu.<br><br>
          <em>Primjer:</em> Shakespeareov jambski peterostopnik (iambic pentameter) = 5 jambova po stihu.<br><br>
          <strong>Djelomično radi u hrv.:</strong> U modernoj hrv. poeziji (Matoš, Ujević) ritam se oslanja i na akcente — zato govorimo o <em>silabičko-akcenatskom</em> sustavu. To je hibrid.<br><br>
          <strong>Primjeri:</strong> Shakespeare (soneti), Goethe (Faust), hrv. moderna.
        </div>
      </div>
    </div>

    <div class="box-signal" style="margin-top:14px">
      <div class="box-signal-lbl">💡 Hrv. stvarnost</div>
      <div class="box-signal-txt">
        Hrvatski jezik je <strong>silabički</strong> (osnovni) s <strong>akcenatskim tendencijama</strong> (modernisti). <em>Klasične stope</em> (jamb, trohej, daktil) postoje kao <strong>opisne kategorije</strong> — možemo ih prepoznati u stihu kao tendenciju, ali stih ne „počinje" kao klasični metrički, već kao silabički (broj slogova).
      </div>
    </div>

    <!-- SEC 02 — KLASIČNE STOPE -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · 4 klasične stope — oznake i primjeri</div><div class="sec-line"></div></div>

    <div class="box-int" style="margin-bottom:14px">
      <div class="box-int-lbl">📖 Konvencije označavanja</div>
      <div class="box-int-txt">
        <strong>⎼</strong> = <em>naglašen (dug)</em> slog &nbsp;·&nbsp; <strong>∪</strong> = <em>nenaglašen (kratak)</em> slog<br>
        <em>Stopa</em> = osnovna metrička jedinica (2-3 sloga). Svaki stih ima više stopa.
      </div>
    </div>

    <div class="scene-list">

      <!-- 01 JAMB -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">01</div>
          <div class="scene-ttl">Jamb (∪ ⎼) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ NAJČEŠĆI</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Struktura:</b> <code>∪ ⎼</code> — <strong>nenaglašen + naglašen</strong> (rastući ritam, „penje se")<br><br>
            
            <b>Shema stiha:</b> <code>∪ ⎼ ∪ ⎼ ∪ ⎼ ∪ ⎼ ∪ ⎼</code> (jambski peterostopnik, 10 slogova)<br><br>

            <b>Primjer — hrv. moderna (tipski):</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              u <strong>snu</strong> je <strong>svi</strong>t po<strong>stal</strong> lje<strong>pši</strong><br>
              <span style="color:var(--t2);font-family:var(--mono);font-size:12px">∪  ⎼    ∪  ⎼   ∪  ⎼    ∪  ⎼    ∪ ⎼</span>
            </div>
            <button class="fcb" onclick="speakVerse('u snu je svit postal ljepši',0.8)" style="font-size:11px">🔊 Poslušaj ritam</button><br><br>

            <b>Primjer — Shakespeare, Sonet 18:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:14px;line-height:1.9;font-style:italic">
              Shall I com-pare thee to a sum-mer's day?<br>
              <span style="color:var(--t2);font-family:var(--mono);font-size:11px;font-style:normal">∪  ⎼    ∪   ⎼   ∪  ∪  ⎼  ∪   ⎼    ⎼</span>
            </div>

            <b>Gdje se javlja u hrv.:</b><br>
            • <strong>Moderna poezija</strong> (Matoš, Ujević) — tendencija, ne pravilo<br>
            • <em>Dramski stih</em> — Krleža u Kraljevskom kolu<br>
            • Prijevodi Shakespearea (Nazor, Šoljan) — jambski peterostopnik<br><br>

            <b>Efekt:</b> <em>Uzlazni ritam</em> daje stihu dinamiku prema naprijed — često se koristi za pripovjedačke i filozofske stihove. Jamb „vuče" čitatelja dalje.<br><br>

            <b>Kako prepoznati:</b> Pročitaj stih naglas. Ako ritam kreće od <em>nenaglašenog prema naglašenom</em> slogu i to se ponavlja → jamb.
          </div>
        </div>
      </div>

      <!-- 02 TROHEJ -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">02</div>
          <div class="scene-ttl">Trohej (⎼ ∪) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ HRV. TENDENCIJA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Struktura:</b> <code>⎼ ∪</code> — <strong>naglašen + nenaglašen</strong> (silazni ritam, „pada")<br><br>
            
            <b>Shema stiha:</b> <code>⎼ ∪ ⎼ ∪ ⎼ ∪ ⎼ ∪</code> (trohejski četverostopnik, 8 slogova)<br><br>

            <b>Primjer — Hasanaginica (deseterac):</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              <strong>Što</strong> se <strong>bi</strong>je-<strong>li</strong> u <strong>go</strong>-ri <strong>ze</strong>-le-<strong>noj</strong><br>
              <span style="color:var(--t2);font-family:var(--mono);font-size:12px">⎼   ∪  ⎼   ∪   ⎼   ∪   ⎼   ∪   ⎼</span>
            </div>
            <button class="fcb" onclick="speakVerse('Što se bijeli u gori zelenoj',0.8)" style="font-size:11px">🔊 Poslušaj ritam</button><br><br>

            <b>Primjer — „Oj, Hrvatska, mati naša":</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              <strong>Oj</strong>, Hr-<strong>vat</strong>-ska, <strong>ma</strong>-ti <strong>na</strong>-ša<br>
              <span style="color:var(--t2);font-family:var(--mono);font-size:12px">⎼   ∪    ⎼     ∪    ⎼   ∪   ⎼   ∪</span>
            </div>
            <button class="fcb" onclick="speakVerse('Oj, Hrvatska, mati naša',0.8)" style="font-size:11px">🔊 Poslušaj ritam</button><br><br>

            <b>Gdje se javlja u hrv.:</b><br>
            • <strong>Narodna poezija</strong> — deseterac često ima trohejsku tendenciju<br>
            • <strong>Mažuranić</strong>, Smail-aga (H14) — deseterački stih<br>
            • <strong>Osmerac</strong> (Gundulić, H13) — često trohejski<br>
            • Rodoljubne pjesme (hrv. himna)<br><br>

            <b>Efekt:</b> <em>Silazni ritam</em> daje stihu svečanost i težinu — koristi se za epiku i rodoljubnu poeziju. Trohej zvuči „junački" i odrezano.<br><br>

            <b>Specifičnost za hrv.:</b> Mnogi hrv. stihovi tendiraju trohejskoj kadenci jer u hrvatskom naglasak često pada na <em>prvi slog</em> riječi, što prirodno stvara trohejski uzorak.
          </div>
        </div>
      </div>

      <!-- 03 DAKTIL -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">03</div>
          <div class="scene-ttl">Daktil (⎼ ∪ ∪)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Struktura:</b> <code>⎼ ∪ ∪</code> — <strong>naglašen + 2 nenaglašena</strong> (valoviti ritam, „tečni")<br><br>
            
            <b>Shema stiha:</b> <code>⎼ ∪ ∪ ⎼ ∪ ∪ ⎼ ∪ ∪ ⎼ ∪ ∪</code> (klasični heksametar ima 6 daktila)<br><br>

            <b>Primjer — Homerov stih (Ilijada, prijevod Maretić):</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              <strong>Gnjev</strong> mi pje-<strong>vaj</strong>, bo-gi-<strong>njo</strong>, A-<strong>hi</strong>-le-ja <strong>Pe</strong>-le-ji-<strong>du</strong><br>
              <span style="color:var(--t2);font-family:var(--mono);font-size:11px">⎼   ∪  ∪     ⎼   ∪  ∪   ⎼   ∪  ∪   ⎼   ∪  ∪    ⎼  ∪</span>
            </div>
            <button class="fcb" onclick="speakVerse('Gnjev mi pjevaj boginjo Ahileja Pelejidu',0.75)" style="font-size:11px">🔊 Poslušaj ritam</button><br><br>

            <b>Primjer — hrv. moderna (tipski):</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              <strong>Ti</strong>ho se <strong>spu</strong>šta ve-<strong>čer</strong> na <strong>ze</strong>mlju<br>
              <span style="color:var(--t2);font-family:var(--mono);font-size:12px">⎼   ∪  ∪    ⎼   ∪  ∪   ⎼    ∪   ⎼  ∪</span>
            </div><br>

            <b>Gdje se javlja u hrv.:</b><br>
            • <strong>Prijevodi klasike</strong> — Homerove Ilijade (Maretić), Vergilijeva Eneida<br>
            • <strong>Heksametar</strong> — rijedak u hrv. izvornoj poeziji<br>
            • Lirika s valovitim ritmom — Matoš, Jakšić<br><br>

            <b>Efekt:</b> <em>Tečni, valoviti ritam</em> — daktil je osnovna stopa klasične epike jer oponaša ritam hoda ili jahanja. Svečan je i svečan.<br><br>

            <b>Važno:</b> Hrv. daktilski stih je rijetkost — ne očekuj da pišeš esej o daktilskom stihu u hrv. izvornoj poeziji. Korisno znanje za prijevode klasike.
          </div>
        </div>
      </div>

      <!-- 04 ANAPEST -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">04</div>
          <div class="scene-ttl">Anapest (∪ ∪ ⎼)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Struktura:</b> <code>∪ ∪ ⎼</code> — <strong>2 nenaglašena + naglašen</strong> (suprotnost daktilu)<br><br>
            
            <b>Shema stiha:</b> <code>∪ ∪ ⎼ ∪ ∪ ⎼ ∪ ∪ ⎼</code> (anapestijski trostopnik)<br><br>

            <b>Primjer — hrv. moderna (tipski):</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              u ti-<strong>ši</strong>-ni gra-<strong>da</strong> sre-<strong>ćem</strong>-li tvoj <strong>glas</strong><br>
              <span style="color:var(--t2);font-family:var(--mono);font-size:12px">∪  ∪   ⎼   ∪   ∪   ⎼     ∪  ∪   ⎼  ∪   ⎼</span>
            </div><br>

            <b>Primjer — Byron, Assiria (prijevod):</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:14px;line-height:1.9">
              Kô na stadô vuk na-<strong>leti</strong><br>
              <span style="color:var(--t2);font-family:var(--mono);font-size:11px">∪   ∪   ⎼   ∪   ∪    ⎼    ∪</span>
            </div>

            <b>Gdje se javlja u hrv.:</b><br>
            • Prijevodi engleske i njemačke poezije (Byron, Goethe)<br>
            • Rjeđe u izvornoj hrv. poeziji — moguće kao tendencija<br>
            • Dramski stih u kombinaciji s drugima<br><br>

            <b>Efekt:</b> <em>Galopirajući ritam</em> — anapest daje stihu osjećaj pokreta, žurbe. Byron ga je koristio za prikaz konjanika u napadu („The Assyrian came down...").<br><br>

            <b>Za maturu:</b> Najrjeđa stopa u hrv. tradiciji. Poznavanje daktila (suprotnog ritma) je važnije.
          </div>
        </div>
      </div>

    </div><!-- /scene-list -->

    <!-- SEC 03 — AKCENTI U HRV. -->
    <div class="sec-hdr" style="margin-top:24px"><div class="sec-line"></div><div class="sec-badge">03 · Akcenti u hrvatskom — zašto hrv. metar nije kao klasični</div><div class="sec-line"></div></div>

    <p>Hrvatski jezik ima <strong>4 tipa naglasaka</strong>:</p>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Naglasak</th><th>Oznaka</th><th>Primjer</th><th>Karakteristika</th></tr></thead>
        <tbody>
          <tr><td><strong>Kratkosilazni</strong></td><td>\`̏ (dvostruki gravis)</td><td>pȁs, kȕća</td><td>Kratak, pada</td></tr>
          <tr><td><strong>Dugosilazni</strong></td><td>\`̑ (kapa)</td><td>pȃs, grȃd</td><td>Dug, pada</td></tr>
          <tr><td><strong>Kratkouzlazni</strong></td><td>\`̀ (gravis)</td><td>sèstra, mòmak</td><td>Kratak, penje se</td></tr>
          <tr><td><strong>Dugouzlazni</strong></td><td>´ (akut)</td><td>májka, rúka</td><td>Dug, penje se</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-int" style="margin-top:14px">
      <div class="box-int-lbl">💡 Zašto je to važno za metriku?</div>
      <div class="box-int-txt">
        U klasičnoj grčkoj dugi i kratki slogovi funkcioniraju kao <em>metrička osnova</em>. U hrv. naglasci imaju <strong>leksičku</strong> funkciju (razlikuju značenja: pȁs = životinja, pȃs = pojas), ali <strong>ne metričku</strong> — nema sustavnog pravila koje određuje gdje mora biti dug/kratak slog u stihu.<br><br>
        <em>Posljedica:</em> hrv. stih se mjeri po broju slogova (silabički), a ritam se analizira naknadno kao tendencija stope (trohej, jamb).
      </div>
    </div>

    <!-- SEC 04 — PRAKTIČAN PRIMJER SKENIRANJA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Praktično skeniranje — 3 hrv. primjera</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Primjer 1 — Marulić, Judita (H12)</div>
      <div class="box-key-txt" style="font-family:var(--serif);line-height:2">
        „<strong>Svih</strong> svit-<strong>ljih</strong> kra-<strong>lji</strong>-ca | ne-<strong>be</strong>-ska <strong>ca</strong>-ri-<strong>ca</strong>"<br>
        <span style="color:var(--t2);font-family:var(--mono);font-size:11px">⎼    ∪    ⎼     ∪    ⎼     ∪    |   ∪   ⎼    ∪    ⎼   ∪    ⎼</span><br><br>
        <strong>Analiza:</strong> 12 slogova · cezura 6+6 · tendencija trohej (⎼∪) u prvom polustihu, jamb (∪⎼) u drugom.<br>
        <em>Mješovit ritam — silabika dominira, stopa varira.</em>
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Primjer 2 — Mažuranić, Smail-aga (H14)</div>
      <div class="box-key-txt" style="font-family:var(--serif);line-height:2">
        „<strong>Slu</strong>-ge <strong>zo</strong>-ve | <strong>Smail</strong>-a-<strong>ga</strong> <strong>Čen</strong>-gić"<br>
        <span style="color:var(--t2);font-family:var(--mono);font-size:11px">⎼   ∪   ⎼    ∪   |    ⎼    ∪   ⎼    ∪   ⎼   ∪</span><br><br>
        <strong>Analiza:</strong> 10 slogova · cezura 4+6 · dominantan trohej (⎼∪).<br>
        <em>Tipičan trohejski deseterac narodne epike — svečani ritam.</em>
      </div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Primjer 3 — Šimić, „Opomena"</div>
      <div class="box-key-txt" style="font-family:var(--serif);line-height:2">
        „Čov-<strong>je</strong>-če <strong>pa</strong>-zi / da ne i-<strong>deš</strong> <strong>ma</strong>-len"<br><br>
        <strong>Analiza:</strong> 5 slogova + 8 slogova · <em>neujednačen broj</em> · bez rime · bez fiksne cezure.<br>
        <em>Slobodni stih — nema klasičnog metra. Ritam dolazi iz značenjskih naglasaka, ne iz brojanja slogova.</em>
      </div>
    </div>

    <!-- SEC 05 — HRV. MODERNA SPECIFIČNOST -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Hrv. moderna — silabičko-akcenatski sustav</div><div class="sec-line"></div></div>

    <p>U <strong>hrv. moderni</strong> (kraj 19., 20. st.) pjesnici kombiniraju <em>silabičnu strukturu</em> (broj slogova) s <em>akcenatskom tendencijom</em> (raspored naglasaka). To je <strong>silabičko-akcenatski sustav</strong> — hibrid.</p>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Pjesnik</th><th>Stih</th><th>Metrička tendencija</th></tr></thead>
        <tbody>
          <tr><td><strong>A. G. Matoš</strong></td><td>Jedanaesterac, sonetni</td><td>Jambska tendencija</td></tr>
          <tr><td><strong>Tin Ujević</strong></td><td>Slobodni stih / mješano</td><td>Značenjski ritam</td></tr>
          <tr><td><strong>A. B. Šimić</strong></td><td>Slobodni stih (kratki)</td><td>Ekspresionistički ritam</td></tr>
          <tr><td><strong>S. S. Kranjčević</strong></td><td>Jedanaesterac, aleksandrinac</td><td>Jambska / mješano</td></tr>
          <tr><td><strong>M. Krleža</strong> (Balade)</td><td>Kajkavski slobodni stih</td><td>Tradicijski + moderni spoj</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SINTEZA -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">★ Sinteza — 4 stope na jednoj slici</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Stopa</th><th>Shema</th><th>Ritam</th><th>Gdje se koristi</th></tr></thead>
        <tbody>
          <tr><td><strong>Jamb</strong></td><td>∪ ⎼</td><td>Uzlazni („penje se")</td><td>Moderna hrv., Shakespeare, prijevodi</td></tr>
          <tr><td><strong>Trohej</strong></td><td>⎼ ∪</td><td>Silazni („pada")</td><td>Narodna epika, Mažuranić (H14), rodoljubne</td></tr>
          <tr><td><strong>Daktil</strong></td><td>⎼ ∪ ∪</td><td>Valoviti</td><td>Klasična epika (Homer), prijevodi</td></tr>
          <tr><td><strong>Anapest</strong></td><td>∪ ∪ ⎼</td><td>Galopirajući</td><td>Rijetko u hrv., Byron prijevodi</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">🎯 Ključno za maturu</div>
      <div class="box-signal-txt">
        <strong>Jamb i trohej</strong> su najvažnije stope za hrv. poeziju. Jamb (moderna), trohej (narodna + deseterac). Daktil i anapest su rijetki — dobro ih prepoznati, ali nisu prioritet. <em>U analizi hrv. stiha uvijek krećeš od broja slogova i cezure (silabika), pa onda dodaješ stopu kao tendenciju.</em>
      </div>
    </div>

    <!-- DISCERE -->
    <div class="discere-banner" style="margin-top:18px" onclick="window.location.href='#discere'">
      <div class="discere-ico">🎼</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Metrical AI Analyzer</div>
        <div class="discere-sub">AI analizira metriku, prepoznaje stope, označava naglaske, vizualizira ritam · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row">
      <span class="nb-btn" onclick="sw(1)">← Tipovi stihova</span>
      <span class="nb-btn primary" onclick="sw(3)">🎯 Rima →</span>
    </div>

  </div><!-- /l2 -->

  <div class="layer" id="l3" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa">Rima — zvučno podudaranje</span>
      <span class="pill p-br">4 sheme po poziciji</span>
      <span class="pill p-go">4 tipa po podudarnosti</span>
      <span class="pill p-t">★ ABAB najčešća u hrv.</span>
    </div>

    <div class="box-int" style="margin-bottom:20px">
      <div class="box-int-lbl">🎯 Rima — definicija</div>
      <div class="box-int-txt">
        <strong>Rima</strong> je zvučno podudaranje krajeva stihova — <em>počevši od zadnjeg naglašenog vokala pa do kraja stiha</em>. Rima se klasificira na <strong>2 načina</strong>:<br>
        <strong>1. Po poziciji</strong> u strofi — kakav obrazac (shemu) stihovi formiraju (AABB, ABAB, ABBA, bez).<br>
        <strong>2. Po podudarnosti</strong> — kvaliteta zvučnog sklada (čista, nepotpuna, muška, ženska).
      </div>
    </div>

    <!-- =============================================
         DIO 1: Rima po poziciji (4 sheme)
    ============================================== -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">DIO 1 · Rima po poziciji — 4 sheme</div><div class="sec-line"></div></div>

    <p>Položaj rime u strofi određuje <strong>shemu</strong>. Označavamo slovima: <em>prvi novi zvuk = A, drugi novi zvuk = B, treći = C...</em> itd.</p>

    <div class="scene-list">

      <!-- 01 PARNA (AABB) -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">01</div>
          <div class="scene-ttl">Parna rima (AABB) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ DIDAKTIČKA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Shema:</b> <code>A A B B</code> — prvi i drugi stih se rimuju, treći i četvrti se rimuju.<br><br>
            
            <b>Primjer — tipična parna rima:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Sunce žarko nebom <strong>ide</strong>,    <span style="color:var(--t2);font-family:var(--mono);font-size:12px">A</span><br>
              svuda svjetlom polja <strong>cide</strong>.   <span style="color:var(--t2);font-family:var(--mono);font-size:12px">A</span><br>
              Tiho tiho noć se <strong>spušta</strong>,   <span style="color:var(--t2);font-family:var(--mono);font-size:12px">B</span><br>
              zvuk u travi više <strong>nema</strong>.   <span style="color:var(--t2);font-family:var(--mono);font-size:12px">B</span>
            </div>
            <button class="fcb" onclick="speakVerse('Sunce žarko nebom ide, svuda svjetlom polja cide. Tiho tiho noć se spušta, zvuk u travi više nema.',0.8)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Gdje se javlja:</b><br>
            • <strong>Didaktičke pjesme</strong> — parna rima laka za pamćenje<br>
            • <strong>Dječja poezija</strong><br>
            • <strong>Narodna epika</strong> (kada se uopće rimuje)<br>
            • <strong>Marulićeva Judita</strong> (H12) — dvostruko rimovana parna (AABB) u dvanaestercu<br><br>

            <b>Efekt:</b> Jednostavna, ritmički snažna. Lako se pamti. <em>Može biti i monotona</em> ako se previše koristi — pa hrv. pjesnici često prelaze na ukrštenu rimu za veću sofisticiranost.
          </div>
        </div>
      </div>

      <!-- 02 UKRŠTENA (ABAB) -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">02</div>
          <div class="scene-ttl">Ukrštena rima (ABAB) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ NAJČEŠĆA U HRV.</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Shema:</b> <code>A B A B</code> — prvi i treći se rimuju, drugi i četvrti se rimuju.<br><br>
            
            <b>Primjer — tipična ukrštena rima:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Plava noć nad gradom <strong>sije</strong>,   <span style="color:var(--t2);font-family:var(--mono);font-size:12px">A</span><br>
              mjesec bijeli sjaji <strong>nad</strong>,      <span style="color:var(--t2);font-family:var(--mono);font-size:12px">B</span><br>
              tihi vjetar polja <strong>mije</strong>,      <span style="color:var(--t2);font-family:var(--mono);font-size:12px">A</span><br>
              snivaju u snu moj <strong>grad</strong>.       <span style="color:var(--t2);font-family:var(--mono);font-size:12px">B</span>
            </div>
            <button class="fcb" onclick="speakVerse('Plava noć nad gradom sije, mjesec bijeli sjaji nad, tihi vjetar polja mije, snivaju u snu moj grad.',0.8)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Gdje se javlja:</b><br>
            • <strong>Lirska poezija</strong> — najčešća shema u hrv. modernoj lirici<br>
            • <strong>Matoš, Ujević, Nazor</strong> — soneti i lirika<br>
            • <strong>Preradović, Kranjčević</strong> — rodoljubna lirika<br>
            • <strong>Gundulić</strong> (H13) u Dubravki — često ABAB<br><br>

            <b>Efekt:</b> <em>Isprepletenost</em> — ritam nije monoton kao kod parne, ali je i dalje jasan. Daje lirsku glazbenost. Najbolji omjer strukture i slobode.
          </div>
        </div>
      </div>

      <!-- 03 OBGRLJENA (ABBA) -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">03</div>
          <div class="scene-ttl">Obgrljena rima (ABBA) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ SONETNA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Shema:</b> <code>A B B A</code> — prvi i četvrti se rimuju („zagrljuju" sredinu), drugi i treći se rimuju.<br><br>
            
            <b>Primjer — tipična obgrljena rima:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Tiho pada zimski <strong>sniježak</strong>,    <span style="color:var(--t2);font-family:var(--mono);font-size:12px">A</span><br>
              prekrio je sav moj <strong>grad</strong>,      <span style="color:var(--t2);font-family:var(--mono);font-size:12px">B</span><br>
              zaboravio vjetar <strong>mlad</strong>,        <span style="color:var(--t2);font-family:var(--mono);font-size:12px">B</span><br>
              nestao je svaki <strong>težak</strong>.        <span style="color:var(--t2);font-family:var(--mono);font-size:12px">A</span>
            </div>
            <button class="fcb" onclick="speakVerse('Tiho pada zimski sniježak, prekrio je sav moj grad, zaboravio vjetar mlad, nestao je svaki težak.',0.8)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Gdje se javlja:</b><br>
            • <strong>Sonet</strong> — katrene (prve dvije strofe) često ABBA ABBA<br>
            • <strong>Talijanski sonet</strong> (Petrarca) — ABBA ABBA CDC DCD<br>
            • <strong>Hrv. sonet</strong> — Matoš, Ujević, Kranjčević<br>
            • <strong>Svečane, refleksivne pjesme</strong><br><br>

            <b>Efekt:</b> Sofisticirana shema — rima obgrljuje sredinu strofe. Daje dojam <em>zatvorenosti</em> (pjesma se vraća na početak). Popularna u Petrarkinim sonetima, otuda i u hrv. modernoj.
          </div>
        </div>
      </div>

      <!-- 04 SLOBODNI STIH (bez rime) -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">04</div>
          <div class="scene-ttl">Slobodni stih (bez rime) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ MODERNA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Shema:</b> <code>—</code> — <strong>nema sustavne rime</strong>. Mogu se pojaviti slučajne rime, ali nisu organizacijska načela.<br><br>
            
            <b>Primjer — Šimić, „Opomena":</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Čovječe <strong>pazi</strong><br>
              da ne ideš <strong>malen</strong><br>
              ispod <strong>zvijezda!</strong>
            </div>
            <em>Nema rime — zadnji vokali: „pazi" (i), „malen" (e), „zvijezda" (a).</em><br><br>
            <button class="fcb" onclick="speakVerse('Čovječe pazi, da ne ideš malen ispod zvijezda!',0.75)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Gdje se javlja:</b><br>
            • <strong>Moderna poezija</strong> — Matoš (dijelom), Ujević, Šimić<br>
            • <strong>Krleža, Balade Petrice Kerempuha</strong> — kajkavski slobodni stih<br>
            • <strong>Narodna epika</strong> (deseterac) — često bez rime<br>
            • <strong>Suvremena poezija</strong> — Mihalić, Slamnig, Slaviček<br><br>

            <b>Efekt:</b> Potpuna sloboda izraza — ritam dolazi iz <em>značenjskih naglasaka, ponavljanja riječi, zvučnih figura (aliteracija, asonanca)</em>. Omogućava intenzivniju ekspresivnost, ali zahtijeva pjesničku disciplinu.<br><br>

            <b>Zašto napustiti rimu?</b> Modernisti smatraju rimu <em>ograničenjem</em> koje prisiljava pjesnika da bira riječi po zvuku, a ne po značenju. Slobodni stih daje primat <em>sadržaju</em>.
          </div>
        </div>
      </div>

    </div><!-- /scene-list -->

    <!-- =============================================
         DIO 2: Rima po podudarnosti
    ============================================== -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">DIO 2 · Rima po podudarnosti — 4 tipa kvalitete</div><div class="sec-line"></div></div>

    <p>Osim pozicije, rima se klasificira i <strong>po kvaliteti zvučnog sklada</strong> — koliko se točno podudaraju glasovi na kraju stihova.</p>

    <div class="scene-list">

      <!-- 05 ČISTA RIMA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">05</div>
          <div class="scene-ttl">Čista (potpuna) rima <span style="color:var(--gold);font-size:11px;margin-left:8px">★ KLASIČNA</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Potpuno zvučno podudaranje</strong> — od zadnjeg naglašenog vokala do kraja stiha poklapaju se i samoglasnici I suglasnici.<br><br>
            
            <b>Primjeri čiste rime:</b><br>
            • <em>krila / stila</em> (podudaraju se: i-l-a)<br>
            • <em>cvijet / svijet</em> (podudaraju se: ije-t)<br>
            • <em>noći / moći</em> (podudaraju se: o-ć-i)<br>
            • <em>grada / glada</em> (podudaraju se: a-d-a)<br><br>

            <b>Gdje se javlja:</b><br>
            • <strong>Klasična hrv. poezija</strong> — Marulić, Gundulić<br>
            • <strong>Lirska moderna</strong> — Matoš, Ujević<br>
            • <strong>Rodoljubna lirika</strong> — Preradović, Kranjčević<br><br>

            <b>Efekt:</b> <em>Savršena harmonija</em> — čista rima stvara snažan zvučni dojam. Tradicionalno se smatra „pravom" rimom.
          </div>
        </div>
      </div>

      <!-- 06 NEPOTPUNA / ASONANCIJSKA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">06</div>
          <div class="scene-ttl">Nepotpuna (asonancijska) rima</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Samo samoglasnici se podudaraju</strong>, suglasnici nisu isti (ili su približni). Zove se i <em>asonancijska rima</em> jer koristi asonancu.<br><br>
            
            <b>Primjeri nepotpune rime:</b><br>
            • <em>zemlja / vrela</em> (samo vokali e-a / e-a)<br>
            • <em>more / koze</em> (samo vokali o-e / o-e)<br>
            • <em>noć / most</em> (samo vokal o)<br>
            • <em>srce / duše</em> (samo vokal u zadnjem slogu)<br><br>

            <b>Gdje se javlja:</b><br>
            • <strong>Narodna lirika</strong> — često nepotpune rime<br>
            • <strong>Hrv. moderna</strong> — kao otklon od tradicije<br>
            • <strong>Suvremena poezija</strong> — često prelazi u asonancu<br><br>

            <b>Efekt:</b> <em>Nježnija, slobodnija</em> od čiste rime. Ne zvuči „kao da pjesnik traži rimu po silu". Moderni pjesnici namjerno koriste nepotpunu rimu za prirodniji ton.<br><br>

            <b>Razlika od čiste rime:</b> <strong>Čista</strong> = sve se poklapa (vokali + suglasnici). <strong>Nepotpuna</strong> = samo vokali (asonanca = isto je načelo, ali unutar jedne rečenice, ne na kraju).
          </div>
        </div>
      </div>

      <!-- 07 MUŠKA RIMA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">07</div>
          <div class="scene-ttl">Muška rima (jednosložna)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Rima se svodi na jedan slog</strong> — naglasak je na <em>zadnjem</em> slogu stiha.<br><br>
            
            <b>Primjeri muške rime:</b><br>
            • <em>dán / smán</em> (oba imaju jedan naglašeni slog)<br>
            • <em>rát / zlát</em><br>
            • <em>glás / pás</em><br>
            • <em>svít / míjt</em><br><br>

            <b>Gdje se javlja:</b><br>
            • <strong>Klasični sonet</strong> — završni stihovi tercetki<br>
            • <strong>Shakespeareova poezija</strong> (engleski je naglasno jezik)<br>
            • <strong>Svečana hrv. poezija</strong> — rodoljubne himne<br>
            • <strong>Slabe u hrv.</strong> — naš jezik tendira duljim riječima<br><br>

            <b>Efekt:</b> <em>Odrezan, odlučan</em> ritam — muška rima zvuči „kao udar". Daje dramski dojam.<br><br>

            <b>Važno za hrv.:</b> Muška rima je <strong>rjeđa u hrv.</strong> nego u engleskom ili njemačkom jer hrvatski rijetko ima jednosložne naglašene riječi na kraju stiha. Kad se pojavi, snažno djeluje.
          </div>
        </div>
      </div>

      <!-- 08 ŽENSKA RIMA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">08</div>
          <div class="scene-ttl">Ženska rima (dvosložna) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ ČESTA U HRV.</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Rima se proteže na dva sloga</strong> — naglasak je na <em>pretposljednjem</em> slogu, pa u rimu ulaze posljednja dva sloga stiha.<br><br>
            
            <b>Primjeri ženske rime:</b><br>
            • <em>cvíjete / svíjete</em> (ije-te)<br>
            • <em>nóći / móći</em> (ó-ći)<br>
            • <em>mílena / zlílena</em> (í-lena)<br>
            • <em>snóva / glóva</em> (ó-va)<br><br>

            <b>Gdje se javlja:</b><br>
            • <strong>Tipična hrv. rima</strong> — najčešća zbog strukture hrv. jezika (naglasci često na pretposljednjem slogu)<br>
            • <strong>Lirska poezija</strong> — Matoš, Ujević, Preradović<br>
            • <strong>Soneti</strong> — katrene<br>
            • <strong>Narodne pjesme</strong> — rijetko rimuju, ali kad da, onda često ženski<br><br>

            <b>Efekt:</b> <em>Melodiozna, tečna</em> — ženska rima zvuči „mekša" od muške. Daje lirski, glazbeni dojam.<br><br>

            <b>Zašto je česta u hrv.?</b> Hrvatski je jezik s <em>pokretnim naglaskom</em> koji često pada na drugi ili treći slog od kraja. Riječi kao „zemlja, more, zora, duša" imaju naglasak na pretposljednjem — prirodno stvaraju žensku rimu.
          </div>
        </div>
      </div>

    </div><!-- /scene-list -->

    <!-- =============================================
         DIO 3: Posebni tipovi rime
    ============================================== -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">DIO 3 · Posebni tipovi rime (3)</div><div class="sec-line"></div></div>

    <div class="scene-list">

      <!-- 09 UNUTARNJA RIMA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">09</div>
          <div class="scene-ttl">Unutarnja rima (srok)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Rima se nalazi unutar istog stiha</strong> — najčešće podudaranje <em>zadnjeg sloga prije cezure</em> s <em>zadnjim slogom stiha</em>.<br><br>
            
            <b>Primjer — dvostruko rimovani dvanaesterac (Marulić):</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Svih svitljih <strong>kraljica</strong> | nebeska <strong>carica</strong>
            </div>
            <em>Rima: "kraljica" (prije cezure) + "carica" (na kraju stiha) — <strong>unutarnja rima u istom stihu</strong>.</em><br><br>

            <b>Gdje se javlja:</b><br>
            • <strong>Dvostruko rimovani dvanaesterac</strong> — Marulićeva Judita (H12)<br>
            • <strong>Hanibal Lucić, Zoranić, Menčetić</strong> — hrv. humanizam<br>
            • <strong>Dekorativna poezija</strong> — barok, manirizam<br><br>

            <b>Efekt:</b> <em>Dvostruka glazbenost</em> — stih zvuči bogatije. Unutarnja rima je prestižno obilježje hrv. renesansne poezije.<br><br>

            <b>Zašto je važno za maturu?</b> Marulićeva Judita je <strong>H12 obvezatno djelo</strong> — znat razlikovati dvostruko rimovani dvanaesterac od običnog aleksandrinca (oba imaju 12 slogova i 6+6 cezuru, ali samo Marulićev ima unutarnju rimu).
          </div>
        </div>
      </div>

      <!-- 10 SROK (POLUUNUTARNJA) -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">10</div>
          <div class="scene-ttl">Asonancijska rima</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Definicija:</b> <strong>Podudaranje samo samoglasnika</strong> — isto kao asonanca, ali na krajevima stihova. U tradiciji označeno kao <em>slaba rima</em> (moderni pjesnici ju smatraju stilskim izborom).<br><br>
            
            <b>Primjeri asonancijske rime:</b><br>
            • <em>more / polje</em> (o-e / o-e)<br>
            • <em>zima / mina</em> (i-a / i-a)<br>
            • <em>zora / more</em> (o-a / o-e — djelomično)<br><br>

            <b>Gdje se javlja:</b><br>
            • <strong>Moderna i suvremena poezija</strong> — kao namjerno slabljenje tradicije<br>
            • <strong>Narodna poezija</strong> — često se zadovoljava asonancijom<br>
            • <strong>Slobodni stih s djelomičnom rimom</strong><br><br>

            <b>Efekt:</b> <em>Nenapadno, prirodno</em> zvučanje. Moderno kritičko stajalište: asonancijska rima nije „slabija" — samo drugačija estetika.
          </div>
        </div>
      </div>

      <!-- 11 STALNA VS POKRETNA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">11</div>
          <div class="scene-ttl">Stalna vs. pokretna rima</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Stalna rima:</b> Ista shema rime kroz <em>cijelu pjesmu</em> — sve strofe se rimuju po istom obrascu.<br>
            <em>Primjer:</em> sonet s ABBA ABBA CDC DCD kroz 14 stihova — shema je fiksna.<br><br>

            <b>Pokretna (promjenjiva) rima:</b> Shema rime se <em>mijenja</em> unutar pjesme — različite strofe imaju različite sheme.<br>
            <em>Primjer:</em> prva strofa AABB, druga ABAB, treća ABBA — pjesnik varira ritam za raznolikost.<br><br>

            <b>Gdje se javlja stalna:</b><br>
            • <strong>Sonet</strong> — tradicionalno fiksna shema<br>
            • <strong>Klasična lirika</strong> — Marulić, Gundulić<br>
            • <strong>Oktavac (Gundulić)</strong> — 8 stihova s fiksnom ABABABCC<br><br>

            <b>Gdje se javlja pokretna:</b><br>
            • <strong>Duga narativna poezija</strong> — ep, balada<br>
            • <strong>Moderna eksperimentalna lirika</strong><br>
            • <strong>Neslobodni stih kao hibrid</strong> — zadržava rimu, ali varira shemu<br><br>

            <b>Za maturu:</b> Nije presudno znati razliku — ali ako analiziraš sonet, shema je <em>uvijek stalna</em>. Ako analiziraš ep (npr. Osman), može biti <em>pokretna</em>.
          </div>
        </div>
      </div>

    </div><!-- /scene-list -->

    <!-- SINTEZA -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">★ Sinteza — rimske sheme i tipovi</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Shema</th><th>Oznaka</th><th>Kad se koristi</th><th>Primjer iz hrv.</th></tr></thead>
        <tbody>
          <tr><td><strong>Parna</strong></td><td>AABB</td><td>Didaktika, dječja, narodna</td><td>Marulićeva Judita (H12)</td></tr>
          <tr><td><strong>Ukrštena</strong></td><td>ABAB</td><td>Najčešća u hrv. lirici</td><td>Matoš, Ujević, Preradović</td></tr>
          <tr><td><strong>Obgrljena</strong></td><td>ABBA</td><td>Sonet (Petrarkin stil)</td><td>Hrv. moderna (Kranjčević, Matoš)</td></tr>
          <tr><td><strong>Slobodni stih</strong></td><td>—</td><td>Moderna, suvremena</td><td>Šimić, Ujević, Krleža</td></tr>
        </tbody>
      </table>
    </div>

    <div class="tbl-wrap" style="margin-top:14px">
      <table class="tbl">
        <thead><tr><th>Tip po podudarnosti</th><th>Karakteristika</th><th>Efekt</th></tr></thead>
        <tbody>
          <tr><td><strong>Čista</strong></td><td>Vokali + suglasnici se poklapaju</td><td>Savršena harmonija</td></tr>
          <tr><td><strong>Nepotpuna</strong></td><td>Samo vokali (asonancijska)</td><td>Prirodna, moderna</td></tr>
          <tr><td><strong>Muška</strong></td><td>Jedan slog, naglasak na zadnjem</td><td>Odrezan, svečan</td></tr>
          <tr><td><strong>Ženska</strong></td><td>Dva sloga, naglasak na pretposljednjem</td><td>Melodiozna, tečna</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-key" style="margin-top:16px">
      <div class="box-key-lbl">🎯 Top 3 stvari o rimi za maturu</div>
      <div class="box-key-txt">
        <strong>1. Prepoznaj shemu</strong> (AABB, ABAB, ABBA, bez) — <em>najčešće pitanje</em>.<br>
        <strong>2. Ženska rima</strong> dominira u hrv. — nauči razliku od muške.<br>
        <strong>3. Marulićeva Judita</strong> ima <em>dvostruko rimovani dvanaesterac</em> (unutarnja rima + rima na kraju) — specifičnost H12.
      </div>
    </div>

    <!-- DISCERE -->
    <div class="discere-banner" style="margin-top:18px" onclick="window.location.href='#discere'">
      <div class="discere-ico">🎯</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Rhyme Scheme Detector</div>
        <div class="discere-sub">AI analizira pjesmu, označava shemu rime, klasificira tip · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row">
      <span class="nb-btn" onclick="sw(2)">← Metar i ritam</span>
      <span class="nb-btn primary" onclick="sw(4)">📦 Strofa →</span>
    </div>

  </div><!-- /l3 -->

  <div class="layer" id="l4" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-pa">📦 Strofa</span>
      <span class="pill p-br">7 osnovnih</span>
      <span class="pill p-go">★ Sonet</span>
      <span class="pill p-t">Hrv. specifične</span>
      <span class="pill p-r">Od distiha do stance</span>
    </div>

    <div class="box-int" style="margin-bottom:20px">
      <div class="box-int-lbl">📦 Strofa — grupa stihova kao jedinica</div>
      <div class="box-int-txt">
        <strong>Strofa</strong> (grč. <em>strophē</em> = okret) je <em>grupa stihova koja tvori sadržajnu i formalnu cjelinu</em>. U pisanom tekstu strofe se najčešće razdvajaju <strong>bijelim prostorom</strong> — to je najočitiji znak prelaska u novu strofu.<br><br>
        <strong>Zašto su strofe važne?</strong> Stihovi + rima + metar grade mikro-ritam. Strofe grade <em>makro-ritam</em> — organizaciju cijele pjesme. <em>Različite strofe stvaraju različite pjesničke forme</em>: sonet ima uvijek 14 stihova, elegija tradicionalno parne strofe, haiku 3 stiha (klasični japanski).
      </div>
    </div>

    <!-- SEC 01 -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Osnovne strofe — od distiha do oktave</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Strofa</th><th>Br. stihova</th><th>Karakteristika</th><th>Tipične rime</th><th>Primjer</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Distih</strong></td>
            <td>2</td>
            <td>Najkraća strofa — 2 stiha koja čine cjelinu</td>
            <td>AA (parna)</td>
            <td><em>Marulićeva Judita (H12) — uzastopni distisi u dvanaestercu</em></td>
          </tr>
          <tr>
            <td><strong>Tercet (tercina)</strong></td>
            <td>3</td>
            <td>Danteova terza rima: ABA BCB CDC...</td>
            <td>ABA (ili AAA)</td>
            <td><em>Dante, Božanstvena komedija; hrv. prijevodi</em></td>
          </tr>
          <tr>
            <td><strong>Kvartet / katren</strong> ★</td>
            <td>4</td>
            <td>Najčešća strofa u hrv. i europskoj poeziji</td>
            <td>ABAB, ABBA, AABB</td>
            <td><em>Matoš, Ujević, Preradović — gotovo sve hrv. lirike</em></td>
          </tr>
          <tr>
            <td><strong>Kvintet (kvintina)</strong></td>
            <td>5</td>
            <td>Rijetka strofa, asimetrična</td>
            <td>ABABA ili ABBAA</td>
            <td><em>Srednjovjekovna lirika, neke narodne pjesme</em></td>
          </tr>
          <tr>
            <td><strong>Sestet (seksina)</strong></td>
            <td>6</td>
            <td>Druga polovica soneta (2 terceta)</td>
            <td>CDC DCD, CDE CDE</td>
            <td><em>Sonet — druga polovica; rijetko samostalno</em></td>
          </tr>
          <tr>
            <td><strong>Septet</strong></td>
            <td>7</td>
            <td>Vrlo rijetka, često u baladama</td>
            <td>ABABBCC</td>
            <td><em>Chaucer, Thomas Wyatt; rijetko u hrv.</em></td>
          </tr>
          <tr>
            <td><strong>Oktava (oktet)</strong></td>
            <td>8</td>
            <td>Prva polovica soneta (2 katrena) ili samostalna</td>
            <td>ABABABCC (Gundulić), ABBA ABBA (sonet)</td>
            <td><em>Gundulićev Osman, Tassov Oslobođeni Jeruzalem</em></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="box-signal" style="margin-top:14px">
      <div class="box-signal-lbl">💡 Katren dominira hrv. poezijom</div>
      <div class="box-signal-txt">
        <strong>Kvartet (katren)</strong> je apsolutno najčešća strofa u hrv. književnoj tradiciji. Pogodan je jer: (1) ima dovoljno stihova za razvoj ideje, (2) ne postaje dosadan ili opširan, (3) omogućava razne rimske sheme (ABAB, ABBA, AABB). Ako analiziraš hrv. pjesmu i ne znaš koju strofu ima — <em>vjerojatno je katren</em>.
      </div>
    </div>

    <!-- SEC 02 — POSEBNE STROFE -->
    <div class="sec-hdr" style="margin-top:24px"><div class="sec-line"></div><div class="sec-badge">02 · Posebne strofe — sonet i hrv. tradicija</div><div class="sec-line"></div></div>

    <p>Osim jednostavnih kategorija po broju stihova, postoje <strong>fiksne pjesničke forme</strong> s preciznim pravilima organizacije. Klikni za detalje.</p>

    <div class="scene-list">

      <!-- 01 SONET -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">01</div>
          <div class="scene-ttl">Sonet (14 stihova, 4+4+3+3) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ NAJPRESTIŽNIJI</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Struktura:</b> <strong>14 stihova</strong> u 4 strofe: <em>2 katrena (4+4) + 2 terceta (3+3)</em>. Ili u engleskom stilu 3 katrena + završni distih.<br><br>
            
            <b>Talijanski (Petrarkin) sonet — rima:</b><br>
            <code>ABBA ABBA CDC DCD</code> (ili <code>CDE CDE</code>)<br>
            <em>Katrene rimuju ABBA, terceti imaju 2 nove rime (C, D, E).</em><br><br>

            <b>Engleski (Shakespeareov) sonet — rima:</b><br>
            <code>ABAB CDCD EFEF GG</code><br>
            <em>3 katrena s različitim rimama + završni distih (pointa, „volta").</em><br><br>

            <b>Primjer — tipska struktura talijanskog soneta:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:14px;line-height:1.9">
              <strong>I katren (ABBA):</strong><br>
              <em>Kad sunce zađe nad daleko more,</em> <span style="color:var(--t2);font-family:var(--mono)">A</span><br>
              <em>nebesa bude nova svjetlost sjati,</em> <span style="color:var(--t2);font-family:var(--mono)">B</span><br>
              <em>tišina dolazi, pjesma počne stati,</em> <span style="color:var(--t2);font-family:var(--mono)">B</span><br>
              <em>mir sretnih dana nedjelje hode.</em> <span style="color:var(--t2);font-family:var(--mono)">A</span><br><br>
              <strong>II katren (ABBA):</strong><br>
              <em>Duše se vraćaju tihoj slobodi,</em> <span style="color:var(--t2);font-family:var(--mono)">A</span><br>
              <em>gdje misli tiho prolaze kao brod,</em> <span style="color:var(--t2);font-family:var(--mono)">B</span><br>
              <em>i sretno je srce, nije samotan Bog,</em> <span style="color:var(--t2);font-family:var(--mono)">B</span><br>
              <em>u ljepoti koja ne prolazi kroz plodi.</em> <span style="color:var(--t2);font-family:var(--mono)">A</span><br><br>
              <strong>I tercet (CDC):</strong><br>
              <em>Zora dolazi i dan se gubi,</em> <span style="color:var(--t2);font-family:var(--mono)">C</span><br>
              <em>ali svjetlost sjaji u srcima nas,</em> <span style="color:var(--t2);font-family:var(--mono)">D</span><br>
              <em>ona se nikada ne sruši.</em> <span style="color:var(--t2);font-family:var(--mono)">C</span><br><br>
              <strong>II tercet (DCD):</strong><br>
              <em>Vječnost traje, vrijeme teče,</em> <span style="color:var(--t2);font-family:var(--mono)">D</span><br>
              <em>ali srce vjerno uvijek brodi,</em> <span style="color:var(--t2);font-family:var(--mono)">C</span><br>
              <em>u slobodi ljubavi svoje.</em> <span style="color:var(--t2);font-family:var(--mono)">D</span>
            </div>

            <b>Metar:</b> Klasično <em>jedanaesterac (endecasillabo)</em> u talijanskoj tradiciji. U engleskom: <em>jambski peterostopnik (iambic pentameter)</em>. U hrv. moderni razno — Matoš često dvanaesterac, Ujević slobodniji.<br><br>

            <b>Zlatno pravilo soneta — volta:</b><br>
            Sonet ima <em>obrat</em> (volta) nakon 8. stiha — <strong>katreni postavljaju problem, terceti donose rješenje ili refleksiju</strong>. Napetost cijele pjesme leži u tom prijelazu.<br><br>

            <b>Hrv. soneti — ključna djela:</b><br>
            • <strong>A. G. Matoš</strong> — <em>Notturno, Stara pjesma, Za mnom u brzovlak</em><br>
            • <strong>Tin Ujević</strong> — <em>Svakidašnja jadikovka, Visoki jablani</em><br>
            • <strong>Silvije Strahimir Kranjčević</strong> — <em>Moj dom</em><br>
            • <strong>Vladimir Nazor</strong> — <em>ciklus soneta</em><br><br>

            <b>Zašto je sonet važan?</b> Najprestižnija europska fiksna forma (od Petrarca, 14. st.). Hrv. pjesnici dokazuju majstorstvo pisanjem soneta. <strong>Za maturu:</strong> znati prepoznati 14 stihova + 4+4+3+3 strukturu + bilo koju rimsku shemu (ABBA ABBA ili ABAB ABAB).
          </div>
        </div>
      </div>

      <!-- 02 GUNDULIĆEV OKTAVAC -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">02</div>
          <div class="scene-ttl">Gundulićev oktavac (8 osmeraca, ABABABCC) <span style="color:var(--gold);font-size:11px;margin-left:8px">★ HRV. SPECIFIČNOST</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Struktura:</b> <strong>8 stihova</strong>, svaki je <em>osmerac (4+4)</em>. Rima: <code>ABABABCC</code> — 6 stihova s ukrštenom rimom + 2 završna distiha.<br><br>
            
            <b>Shema vizualno:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:14px;line-height:2">
              Stih 1 (osmerac) <span style="color:var(--t2);font-family:var(--mono)">A</span><br>
              Stih 2 (osmerac) <span style="color:var(--t2);font-family:var(--mono)">B</span><br>
              Stih 3 (osmerac) <span style="color:var(--t2);font-family:var(--mono)">A</span><br>
              Stih 4 (osmerac) <span style="color:var(--t2);font-family:var(--mono)">B</span><br>
              Stih 5 (osmerac) <span style="color:var(--t2);font-family:var(--mono)">A</span><br>
              Stih 6 (osmerac) <span style="color:var(--t2);font-family:var(--mono)">B</span><br>
              Stih 7 (osmerac) <span style="color:var(--t2);font-family:var(--mono)">C</span><br>
              Stih 8 (osmerac) <span style="color:var(--t2);font-family:var(--mono)">C</span>
            </div>

            <b>Porijeklo:</b> <strong>Ivan Gundulić</strong> u epu <em>Osman</em> (17. st.) savršenstvuje ovu strofu kao hrv. specifičnu formu. Inspiriran je talijanskom <em>ottava rima</em> (ABABABCC, Boccaccio, Tasso), ali Gundulić koristi <em>osmerac</em> umjesto talijanskog jedanaesterca.<br><br>

            <b>Zašto je važan?</b> <strong>Gundulićev oktavac</strong> je najpoznatija hrv. originalna strofa. Spaja:<br>
            • <em>Ritmičnost osmerca</em> (4+4) — lak i brz stih<br>
            • <em>Ukrštena rima</em> u 6 stihova — isprepletenost<br>
            • <em>Završni distih (CC)</em> — zaključak, aforizam, pouka<br><br>

            <b>Djela s Gundulićevim oktavcem:</b><br>
            • <strong>Ivan Gundulić, Osman</strong> (1626.) — glavno djelo<br>
            • Kasnije hrv. epike u 17./18. st.<br>
            • Didaktička poezija<br><br>

            <b>Primjer — Osman (početak):</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:14px;line-height:1.9">
              <em>Ah, čijem si se zahvalila,</em> <span style="color:var(--t2);font-family:var(--mono)">A</span><br>
              <em>tašta ljudska oholasti?</em> <span style="color:var(--t2);font-family:var(--mono)">B</span><br>
              <em>Sve što višje stereš krila,</em> <span style="color:var(--t2);font-family:var(--mono)">A</span><br>
              <em>sve ćeš paka niže pasti.</em> <span style="color:var(--t2);font-family:var(--mono)">B</span><br>
              <em>...</em>
            </div>
            <button class="fcb" onclick="speakVerse('Ah čijem si se zahvalila, tašta ljudska oholasti? Sve što višje stereš krila, sve ćeš paka niže pasti.',0.8)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Za maturu:</b> H13 Gundulićeva Dubravka koristi različite strofe (komedija nije Osman), ali je Gundulićev oktavac ikona hrv. barokne poezije.
          </div>
        </div>
      </div>

      <!-- 03 MARULIĆEVA STROFA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">03</div>
          <div class="scene-ttl">Marulićev distih — dvostruko rimovani dvanaesterac <span style="color:var(--gold);font-size:11px;margin-left:8px">★ H12</span></div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Struktura:</b> <strong>Distih (2 stiha)</strong>, svaki je <em>dvostruko rimovani dvanaesterac</em>. Strofa se često naziva i <em>dvanaesteračka dvosihina</em>.<br><br>

            <b>Dvostruko rimovanje (srok):</b><br>
            Svaki stih ima <em>12 slogova, cezuru nakon 6. sloga</em>, i rimu <em>i na kraju prvog polustihha I na kraju stiha</em>. Dakle u 2 stiha imamo <strong>4 rime</strong>.<br><br>

            <b>Primjer — Marulić, Judita (H12):</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:15px;line-height:2">
              Svih svitljih <strong>kraljica</strong> | nebeska <strong>carica</strong>,<br>
              božjih puk <strong>izdrica</strong> | bila si <strong>pomoćnica</strong>.
            </div>
            <em>Rime: kraljica/izdrica (unutarnje, prije cezure) + carica/pomoćnica (na krajevima stihova) = <strong>4 podudaranja</strong>.</em><br><br>
            <button class="fcb" onclick="speakVerse('Svih svitljih kraljica nebeska carica, božjih puk izdrica bila si pomoćnica.',0.8)" style="font-size:11px">🔊 Poslušaj</button><br><br>

            <b>Rimska shema u distihu:</b><br>
            <code>A(unutarnja) A(kraj) — A(unutarnja) A(kraj)</code><br>
            <em>Svi 4 rime su istog zvuka.</em><br><br>

            <b>Zašto je specifična?</b><br>
            • <strong>Hrv. originalnost</strong> — ne postoji u drugim europskim književnostima 16. st.<br>
            • <strong>Spoj narodne i učene tradicije</strong> — deseterac (narodni) + latinska metrika<br>
            • <strong>Didaktička funkcija</strong> — rima pomaže pamćenju, strofa čini tekst ritmičkim za recitaciju<br><br>

            <b>Djela koja ju koriste:</b><br>
            • <strong>Marko Marulić, Judita</strong> (1501., H12) — prvi umjetnički ep na hrv.<br>
            • <strong>Hanibal Lucić, Robinja</strong> (16. st.)<br>
            • <strong>Petar Zoranić, Planine</strong><br>
            • <strong>Šiško Menčetić, Džore Držić</strong> — ljubavna lirika<br><br>

            <b>Razlika od aleksandrinca (isti broj slogova):</b><br>
            Oba imaju 12 slogova i cezuru 6+6, ali <strong>aleksandrinac</strong> ima samo rimu na kraju stiha (AA ili AB), <strong>Marulićev dvostruko rimovani dvanaesterac</strong> ima 4 rime (2 unutarnje + 2 krajnje). To je ključna razlika koja se testira na maturi.
          </div>
        </div>
      </div>

      <!-- 04 STANCA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">04</div>
          <div class="scene-ttl">Stanca (Spencerova strofa, 9 stihova)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Struktura:</b> <strong>9 stihova</strong> — prvih 8 je <em>jambski peterostopnik</em>, deveti je <em>aleksandrinac</em> (6 stopa). Rimska shema: <code>ABABBCBCC</code>.<br><br>
            
            <b>Porijeklo:</b> Engleski pjesnik <strong>Edmund Spenser</strong> (1552.-1599.) izmislio je ovu strofu za svoj ep <em>The Faerie Queene</em> (1590.). Odatle i naziv <em>Spencerova strofa</em>.<br><br>

            <b>Zašto 9 stihova?</b> Spenser želi strofu koja:<br>
            • Ima dovoljno prostora za razvoj slike/ideje (8 peterostopnika)<br>
            • Završava svečano (aleksandrinac je duži, daje težinu)<br>
            • Ima složenu rimu (isprepletene sheme)<br><br>

            <b>U hrv. književnosti:</b><br>
            • <strong>Rijetka</strong> — nije tradicionalna hrv. forma<br>
            • Može se pojaviti u <em>prijevodima</em> engleske poezije<br>
            • Za maturu: znati da postoji kao alternativa sonetu za duže ep-lirske pjesme<br><br>

            <b>Zašto je uopće spominjem?</b> Dobar je primjer <em>kako pjesnici izmišljaju nove strofe</em> — forma nije statična. Spenser je kombinirao katren (ABAB) i sestet (CBCC) s dodatnim drugom stupnjem (BB) i dobio originalnu strofu. To pokazuje da je strofa živa kategorija.
          </div>
        </div>
      </div>

      <!-- 05 TERZA RIMA -->
      <div class="scene-card" onclick="togScene(this)">
        <div class="scene-hdr">
          <div class="scene-num">05</div>
          <div class="scene-ttl">Terza rima (Danteova, 3 stiha s ulanjenjem)</div>
          <div class="scene-arr">▶</div>
        </div>
        <div class="scene-body">
          <div class="scene-why">
            <b>Struktura:</b> Niz <strong>terceta</strong> (po 3 stiha) gdje se rime <em>ulanjuju</em> kroz cijelu pjesmu: <code>ABA BCB CDC DED...</code><br><br>
            
            <b>Kako funkcionira ulanjenje:</b><br>
            <div style="background:var(--dim-br);padding:12px;border-radius:var(--r1);margin:10px 0;font-family:var(--serif);font-size:14px;line-height:1.9">
              Stih 1 <span style="color:var(--t2);font-family:var(--mono)">A</span> &nbsp;&nbsp; Stih 4 <span style="color:var(--t2);font-family:var(--mono)">B</span><br>
              Stih 2 <span style="color:var(--t2);font-family:var(--mono)">B</span> &nbsp;&nbsp; Stih 5 <span style="color:var(--t2);font-family:var(--mono)">C</span><br>
              Stih 3 <span style="color:var(--t2);font-family:var(--mono)">A</span> &nbsp;&nbsp; Stih 6 <span style="color:var(--t2);font-family:var(--mono)">B</span><br>
            </div>
            <em>Rima B iz prvog terceta se „ulanjuje" u drugi tercet (kao druga rima). Svaka nova strofa naslućuje rimu iz prethodne.</em><br><br>

            <b>Porijeklo:</b> <strong>Dante Alighieri</strong> izmislio je terza rimu za <em>Božanstvenu komediju</em> (14. st.). Stih je <em>jedanaesterac</em>.<br><br>

            <b>Efekt:</b> <em>Neprekidno kretanje naprijed</em> — ulanjenje rime čini da strofe nisu zatvorene jedinice, nego dio većeg toka. Idealno za dugu narativnu poeziju (Dante prepričava putovanje kroz pakao, čistilište, raj).<br><br>

            <b>U hrv. književnosti:</b><br>
            • Najpoznatiji <strong>hrv. prijevodi Dantea</strong> (Kombol, Maroević) — zadržavaju terza rimu<br>
            • <em>Rijetko u izvornoj hrv. poeziji</em><br>
            • Kad se koristi — daje dantesknu svečanost
          </div>
        </div>
      </div>

    </div><!-- /scene-list -->

    <!-- SEC 03 — STROFE U PJESMAMA H12-H17 -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">03 · Strofe u hrv. djelima H12-H17</div><div class="sec-line"></div></div>

    <div class="tbl-wrap">
      <table class="tbl">
        <thead><tr><th>Djelo</th><th>Strofa</th><th>Stih</th><th>Specifičnost</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Marulić, Judita</strong> (H12)</td>
            <td>Distih (2)</td>
            <td>Dvostruko rimovani dvanaesterac</td>
            <td>Unutarnja rima (4 podudaranja u distihu)</td>
          </tr>
          <tr>
            <td><strong>Gundulić, Dubravka</strong> (H13)</td>
            <td>Varira (kvartet, seksetina)</td>
            <td>Osmerac (4+4)</td>
            <td>Dramska komedija — strofa ovisi o liku/sceni</td>
          </tr>
          <tr>
            <td><strong>Gundulić, Osman</strong></td>
            <td>Gundulićev oktavac (8)</td>
            <td>Osmerac (4+4)</td>
            <td>ABABABCC — hrv. specifična strofa</td>
          </tr>
          <tr>
            <td><strong>Mažuranić, Smail-aga</strong> (H14)</td>
            <td>Bez fiksne strofe</td>
            <td>Deseterac (4+6)</td>
            <td>Niz stihova, podjela prema sadržajnim cjelinama</td>
          </tr>
          <tr>
            <td><strong>Šenoa, Prijan Lovro</strong> (H15)</td>
            <td>— (proza)</td>
            <td>— (proza)</td>
            <td>Nije poezija</td>
          </tr>
          <tr>
            <td><strong>Krleža, Glembajevi</strong> (H16)</td>
            <td>— (drama)</td>
            <td>— (proza/dijalog)</td>
            <td>Nije poezija</td>
          </tr>
          <tr>
            <td><strong>A. G. Matoš</strong> (moderna)</td>
            <td>Kvartet ili sonet</td>
            <td>Jedanaesterac ili dvanaesterac</td>
            <td>Nekoliko najpoznatijih hrv. soneta</td>
          </tr>
          <tr>
            <td><strong>Tin Ujević</strong> (moderna)</td>
            <td>Kvartet ili slobodno</td>
            <td>Varira</td>
            <td>Često slobodni stih, mješovite strofe</td>
          </tr>
          <tr>
            <td><strong>A. B. Šimić</strong> (moderna)</td>
            <td>Tercet ili slobodno (kratko)</td>
            <td>Slobodni stih</td>
            <td>Ekspresionistička ekonomija izraza</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SINTEZA -->
    <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><div class="sec-badge">★ Sinteza — 3 strofe koje MORAŠ znati</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">🎯 Top 3 strofe za maturu</div>
      <div class="box-key-txt">
        <strong>1. Kvartet (katren, 4 stiha)</strong> — apsolutno najčešća u hrv. Rima ABAB (ukrštena), ABBA (obgrljena) ili AABB (parna). <em>Ako ne znaš koju strofu ima, obično je katren.</em><br><br>
        <strong>2. Sonet (14 stihova, 4+4+3+3)</strong> — najprestižnija forma. Rima ABBA ABBA CDC DCD (talijanski) ili ABAB CDCD EFEF GG (engleski). Matoš, Ujević, Kranjčević, Nazor pišu sonete.<br><br>
        <strong>3. Gundulićev oktavac (8 osmeraca, ABABABCC)</strong> — hrv. specifična strofa. Ivan Gundulić u <em>Osmanu</em> (17. st.). <strong>Znak hrv. baroka.</strong>
      </div>
    </div>

    <div class="box-signal" style="margin-top:14px">
      <div class="box-signal-lbl">💡 Strofa + rima + metar = pjesnička forma</div>
      <div class="box-signal-txt">
        Za potpunu analizu pjesme trebaš <strong>3 elementa zajedno</strong>: (1) <em>stih</em> — koliko slogova, cezura; (2) <em>rima</em> — shema po poziciji i podudarnosti; (3) <em>strofa</em> — koliko stihova, koja forma. Tek kad sva tri imaš → možeš reći „pjesma je sonet s ABBA ABBA CDC DCD rimom u jedanaestercima".
      </div>
    </div>

    <!-- DISCERE -->
    <div class="discere-banner" style="margin-top:18px" onclick="window.location.href='#discere'">
      <div class="discere-ico">📦</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Poetic Form Identifier</div>
        <div class="discere-sub">AI prepoznaje strofu, shemu rime, tip metra i imenuje pjesničku formu (sonet, elegija, ep...) · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row">
      <span class="nb-btn" onclick="sw(3)">← Rima</span>
      <span class="nb-btn primary" onclick="sw(5)">⚡ Scanner+Drill →</span>
    </div>

  </div><!-- /l4 -->

  <div class="layer" id="l5" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">20 flashcards</span>
      <span class="pill p-go">3 razine matching</span>
      <span class="pill p-te">Demo slobodan</span>
      <span class="pill p-r">Puno PRO</span>
    </div>

        <!-- SCANNER — AI detekcija figura u ulomku -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">🔍 Scanner — AI detekcija figura u ulomku</div><div class="sec-line"></div></div>

    <div class="box-int" style="margin-bottom:12px">
      <div class="box-int-lbl">🎯 Kako koristiti metrički scanner</div>
      <div class="box-int-txt">Zalijepi pjesmu (ili ulomak s nekoliko stihova). AI algoritam mjeri: <strong>(1) broj slogova</strong> po stihu, <strong>(2) poziciju cezure</strong>, <strong>(3) shemu rime</strong> (AABB/ABAB/ABBA), <strong>(4) broj stihova po strofi</strong>, <strong>(5) identifikaciju tipa stiha</strong> (deseterac, dvanaesterac, osmerac, itd.). <em>Radi po obrascima — uvijek provjeri ručno, posebno za klasične stope.</em></div>
    </div>

    <textarea id="scanner-in" oninput="scannerCount()" placeholder="Zalijepi pjesmu. Svaki stih u novom retku. Scanner će izmjeriti slogove, cezuru, rimu i prepoznati tip stiha (deseterac/dvanaesterac/osmerac/...)." style="width:100%;min-height:160px;padding:14px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--txt);font-family:var(--serif);font-size:14px;resize:vertical;line-height:1.6"></textarea>

    <div style="display:flex;gap:12px;align-items:center;margin-top:10px;flex-wrap:wrap">
      <button class="fcb primary" onclick="scannerGo()">▶ Skeniraj figure</button>
      <button class="fcb" onclick="scannerClear()">↩ Obriši</button>
      <button class="fcb" onclick="scannerDemo()" title="Učitaj uzorak">📋 Demo ulomak</button>
      <div style="font-family:var(--mono);font-size:11px;color:var(--t2);margin-left:auto">
        <span id="scanner-chars">0</span> znakova · <span id="scanner-words">0</span> riječi
      </div>
    </div>

    <div id="scanner-out"></div>

    <div class="discere-banner" style="margin-top:20px" onclick="window.location.href='#discere'">
      <div class="discere-ico">🔍</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · AI Figure Detector Pro</div>
        <div class="discere-sub">Napredni detektor s kontekstualnim razumijevanjem (ironija, paradoks) + funkcijske interpretacije · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <!-- FLASHCARDS — demo funkcionalan -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Flashcards — pojam / definicija · Demo (20 karata)</div><div class="sec-line"></div></div>

    <div class="fc-cat-label">H18 · VERSIFIKACIJA — Leksikon</div>
    <div class="fc-wrap">
      <div class="fc-inner" id="fc-card-dyn" onclick="fcFlip()">
        <div class="fc-front">
          <div class="fc-label">POJAM · klikni za definiciju</div>
          <div class="fc-term">Deseterac (4+6)</div>
          <div class="fc-cat">stih · klikni za definiciju</div>
        </div>
        <div class="fc-back">
          <div class="fc-label">DEFINICIJA</div>
          <div class="fc-def">Stih od 10 slogova, cezura nakon 4. sloga. Osnovni stih hrv. narodne epike. Mažuranić u Smrti Smail-age Čengića (H14). Hasanaginica.</div>
          <div class="fc-cat">stih</div>
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
      <span class="nb-btn" onclick="sw(4)">← Strofa</span>
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
      <span class="nb-btn" onclick="sw(5)">← Scanner+Drill</span>
      <span class="nb-btn primary" onclick="sw(7)">📊 Povijesna tablica →</span>
    </div>
  </div>

  <!-- ══════════════════════════════════════
       TAB 7 · CHECKPOINT
  ══════════════════════════════════════ -->
  <div class="layer" id="l7" role="tabpanel" tabindex="0">
    <div class="tags no-print">
      <span class="pill p-pa">📊 Povijesna tablica</span>
      <span class="pill p-br">5 stoljeća hrv. stiha</span>
      <span class="pill p-go">A4 printabilan</span>
      <span class="pill p-t">Od Marulića do Slameniga</span>
    </div>

    <div class="box-int no-print" style="margin-bottom:20px">
      <div class="box-int-lbl">📊 Povijesna tablica hrv. versifikacije</div>
      <div class="box-int-txt">
        <strong>Ne cheat sheet, nego kronološki pregled.</strong> Kako se hrv. stih mijenjao kroz <em>5 stoljeća</em> — od Marulićevog dvostruko rimovanog dvanaesterca (1501.) do suvremene poezije. <strong>Idealno za školski esej, usporedne analize i brzu referencu pri radu s pjesmom.</strong><br><br>
        <strong>Kako koristiti:</strong>
        <strong>1.</strong> Klikni <em>🖨 Printaj</em> za A4 verziju · 
        <strong>2.</strong> Koristi kao referencu uz bilo koju pjesmu · 
        <strong>3.</strong> Za esej — citiraj razvoj hrv. versifikacije.
      </div>
    </div>

    <div class="no-print" style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap">
      <button class="fcb primary" onclick="window.print()" style="font-size:14px">🖨 Printaj tablicu</button>
      <button class="fcb" onclick="window.scrollTo({top:document.getElementById('pov-tablica').offsetTop-20,behavior:\\'smooth\\'})">⬇ Skoči na sadržaj</button>
    </div>

    <!-- =====================================================
         POVIJESNA TABLICA — printabilni sadržaj
    ====================================================== -->
    <div id="pov-tablica" class="pov-sheet">
      <div class="ps-header">
        <div class="ps-title">MATURIRAJ.HR · H18 · Povijesna tablica hrv. versifikacije</div>
        <div class="ps-subtitle">Razvoj hrv. stiha od 1501. do danas — 5 stoljeća</div>
      </div>

      <!-- ERA 1: RENESANSA -->
      <div class="ps-era">
        <div class="ps-era-hdr">
          <div class="ps-era-num">I</div>
          <div class="ps-era-info">
            <div class="ps-era-name">RENESANSA · 15.–16. st.</div>
            <div class="ps-era-stih">Dvostruko rimovani dvanaesterac (6+6) · Jedanaesterac (talijanski)</div>
          </div>
        </div>
        <div class="ps-era-body">
          <div class="ps-works">
            <div class="ps-work"><b>Marko Marulić, Judita</b> (1501.) <span class="ps-h">H12</span> — prvi umjetnički ep na hrv. Dvostruko rimovani dvanaesterac.</div>
            <div class="ps-work"><b>Hanibal Lucić, Robinja</b> — dvanaesterac, drama.</div>
            <div class="ps-work"><b>Petar Zoranić, Planine</b> — pastoralni roman u dvanaestercu.</div>
            <div class="ps-work"><b>Šiško Menčetić, Džore Držić</b> — ljubavna lirika, jedanaesterac (talijanski utjecaj).</div>
          </div>
          <div class="ps-key">
            <strong>Ključ:</strong> Hrv. kreiraju <em>vlastiti umjetnički stih</em> (dvostruko rimovan dvanaesterac — 4 rime u distihu) umjesto preuzimanja talijanskog. Spoj narodne tradicije (deseterac) i učene kulture (latinska metrika).
          </div>
        </div>
      </div>

      <!-- ERA 2: BAROK -->
      <div class="ps-era">
        <div class="ps-era-hdr">
          <div class="ps-era-num">II</div>
          <div class="ps-era-info">
            <div class="ps-era-name">BAROK · 17. st.</div>
            <div class="ps-era-stih">Osmerac (4+4) · Gundulićev oktavac (ABABABCC)</div>
          </div>
        </div>
        <div class="ps-era-body">
          <div class="ps-works">
            <div class="ps-work"><b>Ivan Gundulić, Dubravka</b> (1628.) <span class="ps-h">H13</span> — pastirska komedija u osmercima.</div>
            <div class="ps-work"><b>Ivan Gundulić, Osman</b> (1626.) — ep u <strong>Gundulićevom oktavcu</strong> (8 osmeraca, ABABABCC). Hrv. nacionalna forma.</div>
            <div class="ps-work"><b>Ivan Gundulić, Suze sina razmetnoga</b> — religiozna poema, osmerac.</div>
            <div class="ps-work"><b>Ivan Bunić Vučić, Plandovanja</b> — pastoralna lirika, osmerac.</div>
            <div class="ps-work"><b>Junije Palmotić</b> — dramska poezija, varira.</div>
          </div>
          <div class="ps-key">
            <strong>Ključ:</strong> Dubrovačka književnost je u zenitu. Gundulić savršenstvuje hrv. specifičnu strofu (oktavac) kao adaptaciju talijanske <em>ottava rima</em> na osmerac (umjesto jedanaesterca). Pastirska idila i barokna religioznost.
          </div>
        </div>
      </div>

      <!-- ERA 3: PROSVJETITELJSTVO -->
      <div class="ps-era">
        <div class="ps-era-hdr">
          <div class="ps-era-num">III</div>
          <div class="ps-era-info">
            <div class="ps-era-name">PROSVJETITELJSTVO · 18. st.</div>
            <div class="ps-era-stih">Deseterac (4+6) · miješani stihovi</div>
          </div>
        </div>
        <div class="ps-era-body">
          <div class="ps-works">
            <div class="ps-work"><b>Andrija Kačić Miošić, Razgovor ugodni naroda slovinskoga</b> (1756.) — ep u narodnom desetercu, simulira usmenu predaju.</div>
            <div class="ps-work"><b>Matija Antun Reljković, Satir iliti divji čovik</b> (1762.) — didaktički ep, mješovit stih.</div>
            <div class="ps-work"><b>Antun Kanižlić, Sveta Rožalija</b> — religiozna poezija.</div>
          </div>
          <div class="ps-key">
            <strong>Ključ:</strong> Prijelazno razdoblje. Kačić Miošić namjerno imitira narodnu epiku — koristi deseterac da približi umjetničku poeziju puku. Naglasak na didaktici i prosvjetiteljstvu. Početak modernog hrv. književnog jezika.
          </div>
        </div>
      </div>

      <!-- ERA 4: PREPOROD + REALIZAM -->
      <div class="ps-era">
        <div class="ps-era-hdr">
          <div class="ps-era-num">IV</div>
          <div class="ps-era-info">
            <div class="ps-era-name">PREPOROD + REALIZAM · 19. st.</div>
            <div class="ps-era-stih">Deseterac · Aleksandrinac · Jedanaesterac</div>
          </div>
        </div>
        <div class="ps-era-body">
          <div class="ps-works">
            <div class="ps-work"><b>Ivan Mažuranić, Smrt Smail-age Čengića</b> (1846.) <span class="ps-h">H14</span> — deseterac narodnog stiha, vrhunac ilirskog preporoda.</div>
            <div class="ps-work"><b>Petar Preradović, Putnik</b> — rodoljubna lirika, varira deseterac/aleksandrinac.</div>
            <div class="ps-work"><b>August Šenoa, Prijan Lovro</b> <span class="ps-h">H15</span> — proza (nije poezija), ali značajan za hrv. književnost.</div>
            <div class="ps-work"><b>Silvije Strahimir Kranjčević, Mojsije, Gospodskom Kastoru</b> — aleksandrinac, jedanaesterac, refleksivna poezija.</div>
          </div>
          <div class="ps-key">
            <strong>Ključ:</strong> Preporod preuzima deseterac iz narodne epike za umjetničko pisanje (Mažuranić). Realizam uvodi europske stihove (aleksandrinac). Kranjčević prelazi u modernu s refleksivnim sonetima.
          </div>
        </div>
      </div>

      <!-- ERA 5: MODERNA + AVANGARDA -->
      <div class="ps-era">
        <div class="ps-era-hdr">
          <div class="ps-era-num">V</div>
          <div class="ps-era-info">
            <div class="ps-era-name">MODERNA + AVANGARDA · 20. st.</div>
            <div class="ps-era-stih">Slobodni stih · Sonet u jedanaestercima · Kajkavski slobodni stih</div>
          </div>
        </div>
        <div class="ps-era-body">
          <div class="ps-works">
            <div class="ps-work"><b>Antun Gustav Matoš, Notturno, 1909</b> — sonet u jedanaestercima, vrhunac hrv. moderne.</div>
            <div class="ps-work"><b>Vladimir Nazor, Slavenska legenda</b> — soneti i slobodni stih.</div>
            <div class="ps-work"><b>Tin Ujević, Kolajna, Lelek sebra</b> — slobodni stih + soneti, filozofska lirika.</div>
            <div class="ps-work"><b>Antun Branko Šimić, Preobraženja</b> (1920.) — ekspresionistički slobodni stih, kratke pjesme.</div>
            <div class="ps-work"><b>Miroslav Krleža, Balade Petrice Kerempuha</b> (1936.) — kajkavski slobodni stih, spoj tradicije i moderne.</div>
            <div class="ps-work"><b>Miroslav Krleža, Glembajevi</b> <span class="ps-h">H16</span> — drama (nije poezija), ali važna za cjelokupnu moderna.</div>
          </div>
          <div class="ps-key">
            <strong>Ključ:</strong> Radikalan otklon od tradicije — modernisti napuštaju fiksne metre (Šimić, Ujević). Sonetna forma ostaje kao prestižna referenca (Matoš). Krleža spaja arhaičnu kajkavštinu sa suvremenim slobodnim stihom.
          </div>
        </div>
      </div>

      <!-- ERA 6: SUVREMENA -->
      <div class="ps-era">
        <div class="ps-era-hdr">
          <div class="ps-era-num">VI</div>
          <div class="ps-era-info">
            <div class="ps-era-name">SUVREMENA · 20.–21. st.</div>
            <div class="ps-era-stih">Slobodni stih dominira · eksperimentalne forme</div>
          </div>
        </div>
        <div class="ps-era-body">
          <div class="ps-works">
            <div class="ps-work"><b>Slavko Mihalić</b> — slobodni stih, filozofska refleksija.</div>
            <div class="ps-work"><b>Ivan Slamnig</b> — postmoderna igra s tradicijom, soneti + slobodno.</div>
            <div class="ps-work"><b>Milan Milišić, Dragutin Tadijanović, Dobriša Cesarić</b> — tradicionalniji pristup, lirizam.</div>
            <div class="ps-work"><b>Slavko Jendričko, Dragojla Jarnević</b> — uvode nove teme, varija stihovi.</div>
            <div class="ps-work"><b>Danijel Dragojević, Anka Žagar</b> — suvremena lirika, eksperimentira s formom.</div>
          </div>
          <div class="ps-key">
            <strong>Ključ:</strong> Slobodni stih ostaje dominantan, ali se javljaju nove tendencije — postmoderna (Slamnig), povratak na tradiciju (Tadijanović), uvode se nove teme (feminizam, urbani svakidašnji život, ekologija).
          </div>
        </div>
      </div>

      <!-- PREGLED STIHOVA KROZ VRIJEME -->
      <div class="ps-matrix">
        <div class="ps-matrix-title">📊 Matrica stihova kroz 5 stoljeća</div>
        <table class="ps-matrix-tbl">
          <thead>
            <tr><th>Stih</th><th>16.</th><th>17.</th><th>18.</th><th>19.</th><th>20.</th><th>21.</th></tr>
          </thead>
          <tbody>
            <tr><td><b>Dvanaesterac</b> (6+6)</td><td>●●●</td><td>●</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
            <tr><td><b>Osmerac</b> (4+4)</td><td>●</td><td>●●●</td><td>●</td><td>●</td><td>—</td><td>—</td></tr>
            <tr><td><b>Deseterac</b> (4+6)</td><td>●</td><td>—</td><td>●●</td><td>●●●</td><td>—</td><td>—</td></tr>
            <tr><td><b>Aleksandrinac</b></td><td>—</td><td>—</td><td>—</td><td>●●</td><td>●</td><td>—</td></tr>
            <tr><td><b>Jedanaesterac</b></td><td>●</td><td>—</td><td>—</td><td>●</td><td>●●</td><td>●</td></tr>
            <tr><td><b>Slobodni stih</b></td><td>—</td><td>—</td><td>—</td><td>—</td><td>●●●</td><td>●●●</td></tr>
          </tbody>
        </table>
        <div class="ps-matrix-key">Intenzitet: ● rijedak · ●● čest · ●●● dominantan</div>
      </div>

      <!-- TOP TAKTIKE -->
      <div class="ps-tips">
        <div class="ps-tips-title">🎯 TOP TAKTIKE ZA ESEJ / ANALIZU</div>
        <div class="ps-tips-body">
          <strong>1.</strong> Identificiraj stoljeće djela → očekuj dominantan stih za to razdoblje · 
          <strong>2.</strong> Za H12 (Marulić) = dvostruko rimovani dvanaesterac · 
          <strong>3.</strong> Za H13 (Gundulić) = osmerac (+ oktavac u Osmanu) · 
          <strong>4.</strong> Za H14 (Mažuranić) = deseterac · 
          <strong>5.</strong> Za modernu (Matoš/Ujević/Šimić) = slobodni stih ili sonet · 
          <strong>6.</strong> U esejima koristi <em>razvojnu liniju</em> hrv. stiha kao kontekst.
        </div>
      </div>

      <!-- FOOTER -->
      <div class="ps-footer">
        <span>Maturiraj.hr · H18 · Povijesna tablica · matura 2026</span>
        <span>5 stoljeća hrv. stiha: Marulić → Gundulić → Mažuranić → Kranjčević → Matoš → Ujević → Krleža → suvremeni</span>
      </div>
    </div>

    <!-- CSS za povijesnu tablicu + print -->
    <style>
      .pov-sheet { background: var(--sur); color: var(--txt); border: 1px solid var(--bd); border-radius: var(--r2); padding: 22px; max-width: 100%; font-family: var(--fb, 'DM Sans', sans-serif); }
      .ps-header { text-align:center; padding-bottom:14px; border-bottom:2px solid var(--bd); margin-bottom:22px; }
      .ps-title { font-family: var(--fh, 'Fraunces', serif); font-size: 22px; font-weight:700; color:var(--txt); }
      .ps-subtitle { font-size:13px; color:var(--muted); margin-top:4px; }
      .ps-era { margin-bottom:20px; border:1px solid var(--bdm); border-radius: var(--r1); overflow:hidden; }
      .ps-era-hdr { display:flex; align-items:center; gap:14px; padding:12px 14px; background:var(--dim-br); border-bottom:1px solid var(--bdm); }
      .ps-era-num { font-family:var(--fh); font-size:22px; color:var(--gold); font-weight:700; }
      .ps-era-info { flex:1; }
      .ps-era-name { font-family:var(--fh); font-weight:700; font-size:16px; color:var(--txt); }
      .ps-era-stih { font-size:12px; color:var(--muted); margin-top:2px; }
      .ps-era-body { padding:14px; }
      .ps-works { display:grid; grid-template-columns:1fr 1fr; gap:6px 14px; margin-bottom:10px; }
      .ps-work { font-size:12px; line-height:1.5; padding:4px 0; border-bottom:1px dotted var(--bdm); }
      .ps-work b { color:var(--gold); font-weight:700; }
      .ps-h { display:inline-block; background:var(--blue-l); color:#fff; padding:1px 6px; border-radius:3px; font-size:10px; font-weight:600; margin-left:4px; }
      .ps-key { padding:10px; background:var(--sur); border-left:3px solid var(--gold); border-radius:var(--r1); font-size:12px; line-height:1.6; color:var(--txt); }
      .ps-key strong { color:var(--gold); }
      .ps-matrix { margin-top:24px; padding:16px; background:var(--dim-br); border-radius:var(--r1); }
      .ps-matrix-title { font-weight:700; font-size:14px; margin-bottom:10px; color:var(--gold); }
      .ps-matrix-tbl { width:100%; border-collapse:collapse; font-size:12px; }
      .ps-matrix-tbl th, .ps-matrix-tbl td { padding:6px 10px; border-bottom:1px solid var(--bdm); text-align:center; }
      .ps-matrix-tbl th { background:var(--sur); font-weight:700; color:var(--txt); }
      .ps-matrix-tbl td:first-child { text-align:left; color:var(--txt); }
      .ps-matrix-key { font-size:10px; color:var(--muted); margin-top:8px; text-align:center; }
      .ps-tips { margin-top:18px; padding:12px 14px; background:var(--dim-br); border-left:3px solid var(--gold); border-radius:var(--r1); }
      .ps-tips-title { font-weight:700; font-size:13px; margin-bottom:8px; color:var(--gold); }
      .ps-tips-body { font-size:11.5px; line-height:1.6; color:var(--txt); }
      .ps-footer { margin-top:18px; padding-top:12px; border-top:1px solid var(--bd); display:flex; justify-content:space-between; font-size:9.5px; color:var(--muted); gap:10px; flex-wrap:wrap; }

      @media print {
        body { background: white !important; color: black !important; font-size: 9pt; }
        .sidebar, .hero, .topbar, .tabs-menu, .nav-row, .box-int, .tags, .no-print, .discere-banner, footer { display: none !important; }
        .content-wrap, main, .layer { display: block !important; padding: 0 !important; margin: 0 !important; max-width: 100% !important; }
        .layer { opacity: 1 !important; transform:none !important; }
        .pov-sheet { border:none !important; padding:6mm !important; background:white !important; color:black !important; max-width: 210mm; }
        .ps-title { color:#000 !important; font-size:16pt !important; }
        .ps-subtitle { color:#555 !important; font-size:9pt !important; }
        .ps-era { border:0.5pt solid #999 !important; margin-bottom:3mm !important; page-break-inside: avoid; }
        .ps-era-hdr { background:#f0f0f0 !important; padding:2mm 3mm !important; border-bottom:0.5pt solid #999 !important; }
        .ps-era-num { color:#000 !important; font-size:14pt !important; }
        .ps-era-name { color:#000 !important; font-size:11pt !important; }
        .ps-era-stih { color:#555 !important; font-size:8pt !important; }
        .ps-era-body { padding:2mm 3mm !important; }
        .ps-works { grid-template-columns: 1fr 1fr !important; gap: 1mm 3mm !important; margin-bottom:2mm !important; }
        .ps-work { font-size:7.5pt !important; color:#000 !important; padding:1pt 0 !important; border-bottom:0.3pt dotted #999 !important; }
        .ps-work b { color:#000 !important; }
        .ps-h { background:#000 !important; color:#fff !important; font-size:7pt !important; }
        .ps-key { background:#f8f8f8 !important; border-left:1pt solid #000 !important; font-size:7.5pt !important; padding:2mm !important; color:#000 !important; }
        .ps-key strong { color:#000 !important; }
        .ps-matrix { background:#f0f0f0 !important; padding:3mm !important; margin-top:4mm !important; }
        .ps-matrix-title { color:#000 !important; font-size:10pt !important; }
        .ps-matrix-tbl { font-size:8pt !important; }
        .ps-matrix-tbl th { background:#fff !important; color:#000 !important; }
        .ps-matrix-tbl td { color:#000 !important; }
        .ps-matrix-key { color:#555 !important; font-size:7pt !important; }
        .ps-tips { background:#f8f8f8 !important; border-left:1pt solid #000 !important; font-size:8pt !important; padding:2mm 3mm !important; }
        .ps-tips-title { color:#000 !important; font-size:9pt !important; }
        .ps-tips-body { color:#000 !important; font-size:7.5pt !important; }
        .ps-footer { border-top:0.3pt solid #000 !important; color:#555 !important; font-size:6.5pt !important; }
        @page { size: A4 portrait; margin: 8mm 6mm; }
      }

      @media (max-width: 640px) {
        .ps-works { grid-template-columns: 1fr !important; }
      }
    

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

    <div class="discere-banner no-print" style="margin-top:20px" onclick="window.location.href=\\'#discere\\'">
      <div class="discere-ico">📊</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Poetski vremeplov — interaktivni pregled</div>
        <div class="discere-sub">Vizualna timeline hrv. versifikacije + audio čitanje svih razdoblja + kvizovi po stoljeću · <strong>Pro plan</strong></div>
      </div>
      <div class="discere-arrow">→</div>
    </div>

    <div class="nav-row no-print">
      <span class="nb-btn" onclick="sw(6)">← Kviz</span>
      <span class="nb-btn primary" onclick="window.print()">🖨 Printaj tablicu</span>
    </div>

  </div><!-- /l7 -->

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
      <a class="chapter-nav-card chapter-nav-prev" href="/skripte/hrv/h17">
        <div class="chapter-nav-arrow">←</div>
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill">PRETHODNO</div>
          <div class="chapter-nav-name">H17 · Stilske figure</div>
          <div class="chapter-nav-desc">Leksikon i primjeri</div>
        </div>
      </a>

      <a class="chapter-nav-card chapter-nav-next" href="/skripte/hrv/h19">
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill chapter-nav-pill-next">SLJEDEĆE</div>
          <div class="chapter-nav-name">H19 · Fonologija i pravopis</div>
          <div class="chapter-nav-desc">Glasovi, naglasci, pravopis</div>
        </div>
        <div class="chapter-nav-arrow">→</div>
      </a>
</div>

    <div class="chapter-nav-related">
      <div class="chapter-nav-related-ttl">🔗 Povezana poglavlja</div>
      <div class="chapter-nav-related-grid">
        <a class="chapter-nav-mini" href="/skripte/hrv/h17">
          <span class="chapter-nav-mini-code">H17</span>
          <span class="chapter-nav-mini-name">Stilske figure</span>
        </a>
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
      </div>
    </div>
  </div>



  </main>
</div><!-- /shell -->
<script>
/* ═══════════════════════════════════
   GLOBALS & DATA
═══════════════════════════════════ */


const KVIZ_Q=[
  {q:'„Sluge zove Smail-aga Čengić, Usred Stoca grada bijeloga" (Mažuranić, H14) — koji je stih?',o:['Osmerac (4+4)','Jedanaesterac','Deseterac (4+6)','Dvanaesterac (6+6)'],t:2,e:'Deseterac — 10 slogova s cezurom nakon 4. sloga. Mažuranićev Smail-aga (H14) je pisan u narodnom desetercu. "Sluge zove | Smail-aga Čengić" = 4+6.'},
  {q:'„Svih svitljih kraljica, nebeska carica" (Marulić, Judita, H12) — koji je stih?',o:['Dvostruko rimovani dvanaesterac (6+6)','Osmerac (4+4)','Aleksandrinac (6+6)','Deseterac (4+6)'],t:0,e:'Dvostruko rimovani dvanaesterac — 12 slogova, cezura 6+6, s rimama i na krajevima polustihova i stihova (4 rime u distihu). Marulićeva specifičnost.'},
  {q:'„Ah, čijem si se zahvalila, tašta ljudska oholasti?" (Gundulić, Osman) — koji je stih?',o:['Deseterac (4+6)','Dvanaesterac (6+6)','Osmerac (4+4)','Jedanaesterac'],t:2,e:'Osmerac — 8 slogova, cezura nakon 4. sloga. Gundulićev standardni stih u baroku. Dubravka (H13) i Osman koriste osmerac.'},
  {q:'„Što se bijeli u gori zelenoj?" (Hasanaginica, narodna balada) — koji je stih?',o:['Slobodni stih','Deseterac (4+6)','Osmerac (4+4)','Jedanaesterac'],t:1,e:'Deseterac (4+6) — osnovni stih narodne epike. "Što se bijeli | u gori zelenoj" = 4+6. Hasanaginica je klasičan primjer hrv. narodnog deseterca sa slavenskom antitezom.'},
  {q:'„Čovječe pazi / da ne ideš malen / ispod zvijezda!" (A. B. Šimić) — koji je stih?',o:['Slobodni stih','Osmerac','Jedanaesterac','Deseterac'],t:0,e:'Slobodni stih — bez fiksnog broja slogova (5+7+7 ili različito), bez obavezne cezure, bez rime. Šimićev ekspresionistički stil. Moderna hrv. poezija napušta fiksne metre.'},
  {q:'Po čemu se razlikuje Marulićev dvostruko rimovani dvanaesterac od aleksandrinca?',o:['Marulić ima 10 slogova, aleksandrinac 12','Marulić ima cezuru 4+8, aleksandrinac 6+6','Nema razlike — to su isti stihovi','Marulić ima 4 rime u distihu (2 unutarnje + 2 krajnje); aleksandrinac samo 2 rime (krajeve stihova)'],t:3,e:'Oba imaju 12 slogova i cezuru 6+6, ALI Marulićev dvostruko rimovani dvanaesterac ima rimu i na kraju polustihova (npr. "kraljica | carica") I na kraju stihova — 4 rime ukupno. Aleksandrinac rimuje samo krajeve stihova.'},
  {q:'Talijanski sonet Petrarce koristi koji stih?',o:['Aleksandrinac','Jedanaesterac (endecasillabo)','Deseterac','Osmerac'],t:1,e:'Jedanaesterac — klasični stih talijanske renesanse (Dante, Petrarca, Tasso). U sonetu 14 stihova × 11 slogova. U hrv. modernu preuzimaju Matoš, Ujević, Kranjčević za hrv. sonete.'},
  {q:'Shema AABB označava koju rimu?',o:['Obgrljenu rimu','Parnu rimu','Ukrštenu rimu','Slobodnu rimu'],t:1,e:'Parna rima — prvi i drugi stih se rimuju, treći i četvrti se rimuju. Jednostavna, ritmična, česta u didaktici i dječjoj poeziji. Marulićeva Judita (H12) u distisima AABB.'},
  {q:'Koja je najčešća shema rime u hrv. lirskoj poeziji?',o:['Obgrljena (ABBA)','Slobodna (bez rime)','Ukrštena (ABAB)','Parna (AABB)'],t:2,e:'Ukrštena rima (ABAB) — najčešća u hrv. lirici. Matoš, Ujević, Preradović većinom koriste ABAB jer daje ritmičku isprepletenost bez monotonije parne rime.'},
  {q:'Petrarkin (talijanski) sonet ima rimu:',o:['ABAB ABAB CDC DCD','ABBA ABBA CDC DCD','AABB CCDD EEFF GG','ABAB CDCD EFEF GG'],t:1,e:'Talijanski sonet ima 2 obgrljena katrena (ABBA ABBA) + 2 terceta (CDC DCD ili CDE CDE). Engleski (Shakespeareov) ima ABAB CDCD EFEF GG — 3 ukrštena katrena + distih.'},
  {q:'Ženska rima je:',o:['Rima od 2 sloga s naglaskom na pretposljednjem (cvijete/svijete)','Rima od 1 sloga s naglaskom na zadnjem (dán/smán)','Rima koju pišu žene','Rima samo u vokalima (zemlja/vrela)'],t:0,e:'Ženska rima — dvosložna, naglasak na pretposljednjem slogu. Dominira hrv. jer naš jezik ima pokretni naglasak na pretposljednjem slogu mnogih riječi. Muška je jednosložna (dán/smán).'},
  {q:'„zemlja / vrela" — kakva je to rima?',o:['Nepotpuna (asonancijska) — samo vokali se podudaraju','Čista rima','Unutarnja rima','Ženska rima'],t:0,e:'Nepotpuna rima (asonancijska) — podudaraju se samo samoglasnici (e-a), ali suglasnici (mlj vs. rl) nisu isti. Moderni pjesnici namjerno koriste za prirodniji zvuk.'},
  {q:'Koliko stihova ima sonet?',o:['10 (2 kvinteta)','16 (2 oktave)','12 (3 kvarteta)','14 (4+4+3+3)'],t:3,e:'Sonet ima 14 stihova organizirani kao 2 katrena + 2 terceta (talijanski) ili 3 katrena + distih (engleski). Voli (obrat) nakon 8. stiha. Najprestižnija europska fiksna forma.'},
  {q:'Gundulićev oktavac ima koliko stihova i kakvu rimu?',o:['8 osmeraca s rimom ABABABCC','6 osmeraca s rimom ABABCC','8 dvanaesteraca s rimom ABCABCDD','4 osmerca s rimom AABB'],t:0,e:'Gundulićev oktavac — 8 osmeraca (svaki 4+4 sloga), rima ABABABCC. Gundulić u Osmanu (17. st.) usavršio ovu strofu kao hrv. specifičnost. Adaptacija talijanske ottava rime.'},
  {q:'Marulićev distih u Juditi (H12) čine:',o:['Varijabilan broj slobodnih stihova','4 stiha osmerca','2 stiha dvostruko rimovanog dvanaesterca','3 stiha deseterca'],t:2,e:'Marulićeva Judita koristi distih (2 stiha) sa dvostruko rimovanim dvanaestercem — svaki stih 12 slogova s cezurom 6+6 i 4 rime u distihu.'},
  {q:'Šimićeva pjesma „Opomena" (3 stiha: Čovječe pazi / da ne ideš malen / ispod zvijezda!) ima strofu:',o:['Klasični tercet s terza rimom','Slobodni tercet','Distih','Kvartet'],t:1,e:'Slobodni tercet — 3 stiha, ali bez terza rime (ABA BCB) i bez fiksnog metra. Šimić koristi tercet kao ekspresionističku minimalnu jedinicu. Ekonomija izraza.'},
  {q:'Klasični heksametar (Homer, Ilijada) koristi koju stopu?',o:['Jamb (∪ ⎼)','Trohej (⎼ ∪)','Anapest (∪ ∪ ⎼)','Daktil (⎼ ∪ ∪)'],t:3,e:'Daktil (⎼ ∪ ∪) — naglašen + 2 nenaglašena sloga. Klasični heksametar ima 6 daktila po stihu (s varijacijama). Homer (Ilijada, Odiseja), Vergilije (Eneida).'},
  {q:'„Što se bijeli u gori zelenoj" (Hasanaginica) pokazuje tendenciju koje stope?',o:['Daktil (⎼ ∪ ∪)','Jamb (∪ ⎼)','Trohej (⎼ ∪)','Anapest (∪ ∪ ⎼)'],t:2,e:'Trohej (⎼ ∪) — naglašen + nenaglašen slog. Hrv. narodni deseterac tendira trohejskoj kadenci jer naglasci često padaju na prve slogove riječi (Što / se, bi-jeli). Mažuranić (H14) preuzima ovaj ritam.'},
  {q:'Koja metrička sustav dominira hrv. poezijom?',o:['Silabički (broji se broj slogova)','Kvantitativni (dugi vs. kratki slogovi)','Mješoviti kvantitativno-akcenatski','Akcenatski (raspored naglasaka)'],t:0,e:'Silabički sustav — hrv. broji samo broj slogova, cezura je ključna za ritam. Kvantitativni (klasični grčki) ne radi u hrv. jer nemamo fonološki aktivnu razliku dugo/kratko. U moderni su prisutni silabičko-akcenatski elementi.'},
  {q:'Shakespeareov jambski peterostopnik ima koliko stopa po stihu?',o:['3 jamba (6 slogova)','6 jambova (12 slogova)','4 jamba (8 slogova)','5 jambova (10 slogova)'],t:3,e:'Iambic pentameter — 5 jambova (∪⎼ ∪⎼ ∪⎼ ∪⎼ ∪⎼) = 10 slogova po stihu. Osnovni stih Shakespeareovih sonetova i drama. U hrv. moderni (Matoš, Ujević) također tendira jambska kadenca.'},
  {q:'U kojem stihu je cezura nakon 4. sloga?',o:['Samo aleksandrinac (6+6)','Deseterac (4+6) i osmerac (4+4)','Samo deseterac (4+6)','Samo dvanaesterac (6+6)'],t:1,e:'Cezura nakon 4. sloga javlja se u desetercu (4+6, Mažuranić H14) i u osmercu (4+4, Gundulić H13). U dvanaestercu (Marulić, H12) i aleksandrincu cezura je nakon 6. sloga.'},
  {q:'Što je cezura?',o:['Pauza između stihova','Broj slogova u stihu','Fiksna stanka (pauza) unutar stiha','Rima na kraju stiha'],t:2,e:'Cezura je ritmička stanka UNUTAR stiha — pauza koja dijeli stih na polustihove. U narodnom desetercu uvijek nakon 4. sloga. Različito od opkoračenja (prijelaz između stihova).'},
  {q:'Ako pjesma ima strofu od 8 stihova s rimom ABABABCC i osmeračkim stihom — koja je to forma?',o:['Sonet','Spenserova stanca','Ottava rima (talijanska)','Gundulićev oktavac'],t:3,e:'Gundulićev oktavac — 8 osmeraca s ABABABCC rimom. Specifična hrv. barokna forma iz Osmana (17. st.). Spenserova stanca ima 9 stihova. Ottava rima (talijanska) ima 11-sloge, ne 8-sloge.'},
  {q:'Koje je prvo hrv. umjetničko djelo na hrvatskom jeziku s vlastitom versifikacijom?',o:['Mažuranić, Smail-aga — deseterac','Marulić, Judita (1501.) — dvostruko rimovani dvanaesterac','Kačić Miošić, Razgovor ugodni — deseterac','Gundulić, Osman — osmerac'],t:1,e:'Marulićeva Judita (1501.) je prva hrv. umjetnička pjesma na hrvatskom (ne latinskom) jeziku. Marulić spaja narodnu tradiciju (deseterac) s učenom kulturom (latinska metrika) i stvara novi stih — dvostruko rimovani dvanaesterac.'},
  {q:'Slobodni stih u hrv. književnosti dominira kod:',o:['Mažuranić, Kačić (preporod)','Kranjčević, Preradović (realizam)','Marulić, Gundulić (renesansa i barok)','Ujević, Šimić, Matoš (moderna, 20. st.)'],t:3,e:'Slobodni stih je obilježje hrv. moderne i avangarde. Tin Ujević (Kolajna), A. B. Šimić (Preobraženja), A. G. Matoš, M. Krleža (Balade Petrice Kerempuha). Radikalno odbacuju fiksne metre tradicije.'},
];

const CP_ITEMS=[
  'Razumijem 3 metrička sustava: silabički (hrvatski), klasični kvantitativni (Homer), akcenatski (engleski/njemački).',
  'Znam 3 glavna hrv. stiha: deseterac (4+6, Mažuranić, H14), dvanaesterac (6+6, Marulić, H12), osmerac (4+4, Gundulić, H13).',
  'Razumijem pojam cezure — fiksna stanka unutar stiha (deseterac 4+6, dvanaesterac 6+6, osmerac 4+4).',
  'Znam 4 glavne rimske sheme: parna (AABB), ukrštena (ABAB), obgrljena (ABBA), slobodni stih (bez rime).',
  'Razumijem razliku između muške rime (naglasak na zadnjem slogu) i ženske rime (na pretposljednjem).',
  'Znam strofe od distiha (2) do soneta (14) — i posebnu strukturu soneta (4+4+3+3).',
  'Razumijem osnovne klasične stope: jamb (∪⎼), trohej (⎼∪), daktil (⎼∪∪), anapest (∪∪⎼).',
  'Mogu skenirati stih: izbrojiti slogove, pronaći cezuru, prepoznati rimu, identificirati strofu.',
  'Znam razvoj hrv. versifikacije kroz stoljeća: dvanaesterac (16.) → osmerac (17.) → deseterac (19.) → slobodni stih (20.).',
  'Mogu primijeniti versifikacijsku analizu na konkretnu pjesmu (Marulić, Gundulić, Mažuranić, Matoš, Ujević, Šimić).',
];

const DIAG0_Q=[
  {q:'Koji stih ima 10 slogova s cezurom nakon 4. sloga?',o:['Deseterac (4+6)','Dvanaesterac (6+6)','Osmerac (4+4)','Aleksandrinac'],t:0},
  {q:'Koji stih koristi Marulić u Juditi?',o:['Osmerac','Dvanaesterac (6+6)','Deseterac','Slobodni stih'],t:1},
  {q:'Koja je najčešća rima u hrv. lirskoj poeziji?',o:['AABB (parna)','ABAB (ukrštena)','ABBA (obgrljena)','Sve tri su podjednako česte'],t:1},
  {q:'Što je sonet?',o:['Strofa od 8 stihova','Pjesma od 14 stihova (4+4+3+3)','Vrsta rime','Vrsta cezure'],t:1},
  {q:'Koji pjesnici koriste slobodni stih u hrv. književnosti?',o:['Marulić i Gundulić','Mažuranić i Šenoa','Matoš, Ujević, A. B. Šimić','Svi pjesnici'],t:2}
];
const TAB_NAMES=['Teorija','Tipovi stihova','Metar i ritam','Rima','Strofa','Scanner+Drill','Kviz','Povijesna tablica'];
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
    msg='<strong>Odlično!</strong> Osnove H18 imaš savladane. Preporučujem Povijesnu tablicu — pregled hrv. stiha kroz 5 stoljeća.';
    btnTxt='📊 Povijesna tablica →'; btnTab=7;
  } else if(pct>=60){
    msg='<strong>Dobro!</strong> Nekoliko rupa postoji — provjeri Tab 1-4 za detalje o stihovima, metru, rimi i strofi.';
    btnTxt='🎨 Tropi →'; btnTab=1;
  } else {
    msg='<strong>Kreni od osnova.</strong> Preporučujem: Teorija (Tab 0) + Tipovi stihova (Tab 1). Deseterac, dvanaesterac i osmerac su ključni — sigurno ih nauči napamet.';
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
try{citStars=JSON.parse(localStorage.getItem('mt.hrv.h18.cit_stars')||'{}')}catch(e){}
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
  try{localStorage.setItem('mt.hrv.h18.cit_stars',JSON.stringify(citStars))}catch(e){}
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

function scannerDemo(){
  const ta = document.getElementById('scanner-in');
  if(!ta) return;
  ta.value = \`Sluge zove Smail-aga Čengić\\nUsred Stoca grada bijeloga\\nAl ti sluge ni hrana ni kruha\\nVeć snijegom zemlja odjenula\`;
  scannerCount();
  scannerGo();
}
  if(out) out.innerHTML = '';
}

function scannerGo(){
  const ta = document.getElementById('scanner-in');
  const out = document.getElementById('scanner-out');
  if(!ta || !out) return;
  const txt = ta.value.trim();
  if(!txt){
    out.innerHTML = '<div class="box-warn" style="margin-top:10px"><div class="bw-body"><div class="bw-txt">Zalijepi pjesmu da scanner izmjeri metriku. Svaki stih u novi red.</div></div></div>';
    return;
  }

  // === METRIČKI SCANNER ===
  
  // Slogovno brojanje za hrv.: broji samoglasnike + slogotvorno r (između konsonanata)
  function countSyllables(line){
    const s = line.toLowerCase()
      .replace(/[^a-zščćžđéáíóúăâ\\s]/g, '') // ukloni punctuation
      .replace(/\\s+/g, ' ')
      .trim();
    if(!s) return 0;
    // Vokali: a e i o u (+ rij kao sufiks često diftong, ali brojimo osnovno)
    // Brojanje: iteriraj po char-ovima
    let count = 0;
    let prevWasVowel = false;
    const vowels = 'aeiouáéíóúăâ';
    for(let i = 0; i < s.length; i++){
      const c = s[i];
      if(c === ' '){
        prevWasVowel = false;
        continue;
      }
      const isVowel = vowels.includes(c);
      if(isVowel && !prevWasVowel){
        count++;
      }
      prevWasVowel = isVowel;
    }
    // Slogotvorno "r" — kada je između 2 konsonanta (npr. "prst", "crvena")
    // Jednostavna aproksimacija: ako riječ nema vokala ali ima "r", dodaj 1 po riječi
    const words = s.split(/\\s+/);
    for(const w of words){
      const hasVowel = /[aeiouáéíóúăâ]/.test(w);
      if(!hasVowel && w.includes('r')){
        count++;
      }
    }
    return count;
  }

  // Detekcija tipa stiha po broju slogova
  function identifyVerseType(syllables){
    if(syllables === 8) return {name:'Osmerac', cezura:'4+4', ex:'Gundulić, Dubravka (H13)'};
    if(syllables === 10) return {name:'Deseterac', cezura:'4+6', ex:'Mažuranić, Smail-aga (H14); narodni stih'};
    if(syllables === 11) return {name:'Jedanaesterac', cezura:'pomična (5+6 ili 6+5)', ex:'Sonet, Matoš, Ujević'};
    if(syllables === 12) return {name:'Dvanaesterac / Aleksandrinac', cezura:'6+6', ex:'Marulić (H12) ili aleksandrinac (Kranjčević)'};
    if(syllables === 6) return {name:'Šesterac', cezura:'3+3', ex:'lirska poezija, dječje pjesme'};
    if(syllables === 7) return {name:'Sedmerac', cezura:'varijabilna', ex:'rijetko'};
    if(syllables === 9) return {name:'Deveterac', cezura:'4+5', ex:'rijetko u hrv.'};
    return null;
  }

  // Rima — usporedi krajeve (zadnja 2-3 znaka)
  function getRhyme(line){
    const cleaned = line.toLowerCase().replace(/[^a-zščćžđ]/g, '').trim();
    return cleaned.slice(-3);
  }

  function detectRhymeScheme(lines){
    if(lines.length < 2) return {scheme:'—', name:'prekratko za shemu'};
    const endings = lines.map(getRhyme);
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const map = {};
    const scheme = [];
    let letterIdx = 0;
    for(const e of endings){
      // Find if matches any existing rhyme (last 2-3 chars)
      let found = null;
      for(const [key, letter] of Object.entries(map)){
        if(key === e || (key.length >= 2 && e.length >= 2 && key.slice(-2) === e.slice(-2))){
          found = letter;
          break;
        }
      }
      if(found){
        scheme.push(found);
      } else {
        const letter = letters[letterIdx++] || 'X';
        map[e] = letter;
        scheme.push(letter);
      }
    }
    const schemeStr = scheme.join('');
    let name = 'bez jasne rime';
    if(schemeStr.startsWith('AABB') || schemeStr === 'AA') name = 'parna (AABB)';
    else if(schemeStr.startsWith('ABAB')) name = 'ukrštena (ABAB)';
    else if(schemeStr.startsWith('ABBA')) name = 'obgrljena (ABBA)';
    else if(schemeStr.startsWith('ABABABCC')) name = 'Gundulićev oktavac (ABABABCC)';
    else if(/^[ABCDEFG]*$/.test(schemeStr) && new Set(scheme).size === scheme.length) name = 'slobodni stih (bez rime)';
    return {scheme:schemeStr, name:name};
  }

  // PARSE: split into lines
  const allLines = txt.split('\\n').map(l => l.trim()).filter(l => l.length > 0);
  if(allLines.length === 0){
    out.innerHTML = '<div class="box-warn"><div class="bw-body"><div class="bw-txt">Nema stihova za analizu.</div></div></div>';
    return;
  }

  // Split into strophes — blank lines as separators
  const rawLines = txt.split('\\n');
  const strophes = [];
  let current = [];
  for(const l of rawLines){
    if(l.trim() === ''){
      if(current.length > 0){ strophes.push(current); current = []; }
    } else {
      current.push(l.trim());
    }
  }
  if(current.length > 0) strophes.push(current);

  // Analyze each line
  const analyses = allLines.map(line => {
    const syll = countSyllables(line);
    const type = identifyVerseType(syll);
    return {line:line, syllables:syll, type:type};
  });

  // Stats
  const syllableCounts = analyses.map(a => a.syllables);
  const avgSyll = (syllableCounts.reduce((s,c)=>s+c, 0) / syllableCounts.length).toFixed(1);
  const allSame = new Set(syllableCounts).size === 1;
  const mostCommon = syllableCounts.sort((a,b) => syllableCounts.filter(v => v===a).length - syllableCounts.filter(v => v===b).length).pop();

  // Rhyme scheme
  const rhyme = detectRhymeScheme(allLines);

  // Strophe analysis
  const strophDesc = strophes.map(st => st.length === 2 ? 'distih' : st.length === 3 ? 'tercet' : st.length === 4 ? 'kvartet' : st.length === 8 ? 'oktava' : \`\${st.length}-stih\`);

  // === RENDER ===
  let h = '<div class="box-int" style="margin-top:10px"><div class="box-int-lbl">🎼 Metrička analiza</div><div class="box-int-txt">';
  
  h += \`<p><strong>Broj stihova:</strong> \${allLines.length} · <strong>Prosječno slogova:</strong> \${avgSyll} · <strong>Najčešće:</strong> \${mostCommon} slogova</p>\`;

  // Verse type identification
  if(allSame && identifyVerseType(mostCommon)){
    const t = identifyVerseType(mostCommon);
    h += \`<p style="margin-top:10px"><b>🎯 Prepoznati stih: \${t.name}</b><br>\`;
    h += \`• Slogova: \${mostCommon} · Cezura: \${t.cezura}<br>\`;
    h += \`• Primjer iz hrv. književnosti: <em>\${t.ex}</em></p>\`;
  } else if(identifyVerseType(mostCommon)){
    const t = identifyVerseType(mostCommon);
    h += \`<p style="margin-top:10px"><b>🎯 Vjerojatan stih: \${t.name}</b> (dominantan broj slogova: \${mostCommon})<br>\`;
    h += \`• Neke stihove imaju različit broj slogova — <em>provjeri je li pjesma nekonzistentna ili sam algoritam pogriješio brojanje</em>.</p>\`;
  } else {
    h += \`<p style="margin-top:10px"><b>🎯 Vjerojatno slobodni stih</b> — broj slogova varira (\${Math.min(...syllableCounts)}–\${Math.max(...syllableCounts)}).</p>\`;
  }

  // Rhyme
  h += \`<p style="margin-top:10px"><b>🎵 Shema rime:</b> <code style="font-family:var(--mono);background:var(--dim-br);padding:2px 6px;border-radius:3px">\${rhyme.scheme}</code> — <em>\${rhyme.name}</em></p>\`;

  // Strophes
  if(strophes.length > 1){
    h += \`<p style="margin-top:10px"><b>📦 Strofe:</b> \${strophes.length} strofa — \${strophDesc.join(', ')}.</p>\`;
  } else {
    h += \`<p style="margin-top:10px"><b>📦 Strofa:</b> 1 strofa (ili nije odvojena blank redovima) — \${strophDesc[0]}.</p>\`;
  }

  // Line-by-line table
  h += \`<details style="margin-top:10px"><summary style="cursor:pointer;color:var(--gold);font-weight:600">📋 Detaljan pregled svakog stiha (klikni)</summary>\`;
  h += \`<table class="tbl" style="margin-top:8px;font-size:12px"><thead><tr><th>#</th><th>Stih</th><th>Slogova</th><th>Prepoznato</th></tr></thead><tbody>\`;
  analyses.forEach((a, idx) => {
    const typeName = a.type ? a.type.name : '—';
    h += \`<tr><td>\${idx+1}</td><td style="font-family:var(--serif)">\${a.line}</td><td>\${a.syllables}</td><td>\${typeName}</td></tr>\`;
  });
  h += '</tbody></table></details>';

  // Final advice
  h += \`<p style="margin-top:14px;padding-top:10px;border-top:1px dashed var(--bd)"><b>🎯 Sljedeći korak:</b> Nakon metričke identifikacije, (1) provjeri cezuru čitanjem naglas, (2) pročitaj naglas radi ritma (jamb/trohej), (3) identificiraj pjesničku formu (sonet, ep, lirika) iz kombinacije strofe + stiha + rime.</p>\`;
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
  try{localStorage.setItem('mt.hrv.h18.wc_text',txt);}catch(e){}
}
(function(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h18.wc_text');if(sv){ta.value=sv;scannerUpdate();}}catch(e){}
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
    <h3>25 pitanja · H18 Versifikacija</h3>
    <p>Pitanja pokrivaju sve 4 teme versifikacije: <strong>stih, metar, rima, strofa</strong>. Svako pitanje daje <em>stvarni stih iz hrv. književnosti</em> — prepoznaj tip. Primjeri iz H12-H16 + moderna + klasici. Na kraju dobivaš ocjenu i objašnjenja.</p>
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
  if(pct>=90){grade='ODLIČAN';msg='Spreman/na si za maturu iz H18 — metriku pjesme skeniraš brzo i točno.';ico='🏆';}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno znanje. Provjeri neispravne odgovore i ponovi Tab 1-4.';ico='💪';}
  else if(pct>=60){grade='DOBAR';msg='Ponoviti: 3 glavna hrv. stiha (deseterac 4+6, dvanaesterac 6+6, osmerac 4+4) + sheme rime (AABB, ABAB, ABBA).';ico='📚';}
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
      <button class="fcb" onclick="sw(4)">📦 Strofa</button>
      <button class="fcb" onclick="sw(7)">📊 Povijesna tablica</button>
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
try{const s=localStorage.getItem('mt.hrv.h18.cp');if(s)CP_STATE=JSON.parse(s);}catch(e){}

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
  try{localStorage.setItem('mt.hrv.h18.cp',JSON.stringify(CP_STATE));}catch(e){}
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
    else if(pct>=40)msg='<strong>Napredak!</strong> Nastavak: vježbaj na metričkom scanneru (Tab 5) i radi kviz ponovno dok ne dobiješ 80%+.';
    else msg='Još je posla. Počni s Teorijom (Tab 0) i prođi sve sekcije.';
    sumTxt.innerHTML=msg;
  }
}
function cpReset(){
  CP_STATE={done:{}};
  try{localStorage.removeItem('mt.hrv.h18.cp');}catch(e){}
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
try{TAB_DONE=JSON.parse(localStorage.getItem('mt.hrv.h18.tab_done')||'{}')}catch(e){}

function markTab(n){
  TAB_DONE[n]=true;
  try{localStorage.setItem('mt.hrv.h18.tab_done',JSON.stringify(TAB_DONE))}catch(e){}
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
  '💡 <strong>Tab 0 tip:</strong> Fokus na 3 hrv. stiha: deseterac (Mažuranić), dvanaesterac (Marulić), osmerac (Gundulić). S njima pokrivaš 80% ispita.',
  '💡 <strong>Tab 1 tip:</strong> Klikni na stih za detalje — broj slogova, cezura, primjer iz hrv. književnosti, audio čitanje.',
  '💡 <strong>Tab 2 tip:</strong> Klasične stope (jamb, trohej, daktil) u hrv. su tendencije, ne strogi metar. Fokus na silabički sustav.',
  '💡 <strong>Tab 3 tip:</strong> Ukrštena rima (ABAB) je najčešća u hrv. lirici. Razlikuj muška (jedan slog) od ženske (dva sloga).',
  '💡 <strong>Tab 4 tip:</strong> Sonet (14 stihova, 4+4+3+3) je najprestižnija forma. Nauči 3 glavna hrv. pjesnika soneta: Matoš, Ujević, Kranjčević.',
  '💡 <strong>Tab 5 tip:</strong> Metrički scanner broji slogove, traži cezuru i rimu. Kombinirano s audio čitanjem — najbolji način za učenje ritma.',
  '💡 <strong>Tab 6 tip:</strong> Kviz ima stvarne stihove iz hrv. tradicije — trening je skeniranje u realnim uvjetima.',
  '💡 <strong>Tab 7 tip:</strong> Povijesna tablica daje ti pregled kako se hrv. stih mijenjao kroz 5 stoljeća — savršena referenca za školski esej.'
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
    const names={H11:'H11 · Stari hrv. pisci',H12:'H12 · Marulić · Judita',H13:'H13 · Gundulić · Dubravka',H14:'H14 · Preporod · Mažuranić',H15:'H15 · Šenoa · Prijan Lovro',H16:'H16 · Krleža · Glembajevi',H17:'H17 · Stilske figure'};
    const el=document.getElementById('from-banner');
    const txt=document.getElementById('from-txt');
    if(el&&txt){
      txt.textContent='📎 Nastaviš učenje iz '+(names[from]||from)+' → H18 · Versifikacija';
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h18.kviz_hist')||'[]');
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h18.kviz_hist')||'[]');
    hist.push({score,total,date:new Date().toISOString()});
    localStorage.setItem('mt.hrv.h18.kviz_hist',JSON.stringify(hist.slice(-10)));
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
  // EASY — 4 osnovna tipa stihova + broj slogova
  easy:[
    {a:'Deseterac',b:'10 slogova (4+6)'},
    {a:'Dvanaesterac',b:'12 slogova (6+6)'},
    {a:'Osmerac',b:'8 slogova (4+4)'},
    {a:'Jedanaesterac',b:'11 slogova (pomična cezura)'},
  ],
  // MEDIUM — 6 rimskih shema + klasičnih stopa
  medium:[
    {a:'AABB',b:'Parna rima'},
    {a:'ABAB',b:'Ukrštena rima (najčešća u hrv.)'},
    {a:'ABBA',b:'Obgrljena rima (sonetna)'},
    {a:'Jamb (∪⎼)',b:'Uzlazni ritam — moderna, Shakespeare'},
    {a:'Trohej (⎼∪)',b:'Silazni ritam — narodna epika, Mažuranić'},
    {a:'Daktil (⎼∪∪)',b:'Valoviti ritam — klasični heksametar (Homer)'},
  ],
  // HARD — 8 djela ↔ stih/forma
  hard:[
    {a:'Marulić, Judita (H12)',b:'Dvostruko rimovani dvanaesterac'},
    {a:'Gundulić, Dubravka (H13)',b:'Osmerac (4+4) u komediji'},
    {a:'Gundulić, Osman',b:'Gundulićev oktavac (ABABABCC)'},
    {a:'Mažuranić, Smail-aga (H14)',b:'Deseterac narodnog stiha'},
    {a:'Hasanaginica',b:'Narodni deseterac + slavenska antiteza'},
    {a:'Matoš, Notturno',b:'Sonet u jedanaestercima'},
    {a:'Šimić, Opomena',b:'Slobodni stih (ekspresionizam)'},
    {a:'Dante, Komedija',b:'Tercet s terza rimom (ABA BCB)'},
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
    easy:'📏 Tipovi stihova (4 osnovna)',
    medium:'🎯 Rime i klasične stope (6)',
    hard:'📚 Djela i forme (8 naprednih)'
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
  // === STIHOVI (6) ===
  {t:'Dvanaesterac (6+6)',d:'Stih od 12 slogova s cezurom nakon 6. sloga. Marulić u Juditi (H12) koristi dvostruko rimovan dvanaesterac — 4 rime u distihu.',kat:'stih'},
  {t:'Osmerac (4+4)',d:'Stih od 8 slogova s cezurom u sredini. Gundulićeva Dubravka (H13) i Osman. Osnova Gundulićevog oktavca.',kat:'stih'},
  {t:'Deseterac (4+6)',d:'Stih od 10 slogova, cezura nakon 4. sloga. Narodni stih + Mažuranić, Smrt Smail-age (H14). Hasanaginica.',kat:'stih'},
  {t:'Aleksandrinac (6+6)',d:'12 slogova, francuski utjecaj. Različit od Marulićevog dvanaesterca — aleksandrinac ima samo 2 rime, Marulić 4.',kat:'stih'},
  {t:'Jedanaesterac',d:'Talijanski stih od 11 slogova (Dante, Petrarca). Osnova soneta. Koriste ga Matoš, Ujević, Kranjčević u modernoj.',kat:'stih'},
  {t:'Slobodni stih',d:'Bez fiksnog broja slogova, bez obavezne cezure, često bez rime. Moderna — Ujević, Šimić, Krleža.',kat:'stih'},

  // === METAR (4) ===
  {t:'Jamb (∪ ⎼)',d:'Nenaglašen + naglašen. Uzlazni ritam. Dominanta u modernoj hrv. poeziji (Matoš), Shakespeareovim sonetima.',kat:'metar'},
  {t:'Trohej (⎼ ∪)',d:'Naglašen + nenaglašen. Silazni ritam. Dominira narodnom epikom i Mažuranićem (H14). Hrv. tendencija.',kat:'metar'},
  {t:'Daktil (⎼ ∪ ∪)',d:'Naglašen + 2 nenaglašena. Valoviti ritam. Osnova klasičnog heksametra (Homer, Vergilije). Rijetko u hrv.',kat:'metar'},
  {t:'Anapest (∪ ∪ ⎼)',d:'2 nenaglašena + naglašen. Galopirajući ritam. Byron („Assyrian came down..."). Najrjeđa stopa u hrv.',kat:'metar'},

  // === RIMA (6) ===
  {t:'Parna rima (AABB)',d:'Prvi i drugi + treći i četvrti stih se rimuju. Didaktika, dječja poezija, Marulićeva Judita (H12).',kat:'rima'},
  {t:'Ukrštena rima (ABAB)',d:'Prvi i treći + drugi i četvrti. Najčešća u hrv. lirici — Matoš, Ujević, Preradović.',kat:'rima'},
  {t:'Obgrljena rima (ABBA)',d:'Prvi i četvrti + drugi i treći. Sonetna shema (talijanski sonet ABBA ABBA CDC DCD).',kat:'rima'},
  {t:'Čista rima',d:'Potpuno zvučno podudaranje — vokali I suglasnici (krila/stila, cvijet/svijet, noći/moći).',kat:'rima'},
  {t:'Ženska rima',d:'Naglasak na pretposljednjem slogu, rima obuhvaća 2 sloga (cvíjete/svíjete). Dominantna u hrv.',kat:'rima'},
  {t:'Unutarnja rima (srok)',d:'Rima unutar istog stiha — prije cezure i na kraju. Marulićev dvostruko rimovani dvanaesterac (H12).',kat:'rima'},

  // === STROFA (4) ===
  {t:'Kvartet (katren)',d:'4 stiha. Najčešća strofa u hrv. poeziji. Rima ABAB, ABBA ili AABB. Matoš, Ujević, Preradović.',kat:'strofa'},
  {t:'Sonet (14 stihova)',d:'4+4+3+3 = 14 stihova. Talijanski (ABBA ABBA CDC DCD) ili engleski (ABAB CDCD EFEF GG). Volta nakon 8. stiha.',kat:'strofa'},
  {t:'Gundulićev oktavac',d:'8 osmeraca, shema ABABABCC. Gundulić u Osmanu (17. st.). Hrv. specifična barokna strofa.',kat:'strofa'},
  {t:'Distih',d:'2 stiha kao cjelina. Marulićeva Judita (H12) — niz distiha u dvanaestercu s dvostrukim rimovanjem.',kat:'strofa'},
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
  {q: 'Razumijem razliku između 3 metrička sustava: silabički (hrv.), klasični kvantitativni, akcenatski.', k: 'sustavi'},
  {q: 'Znam najvažnija 3 hrv. stiha: deseterac (4+6), dvanaesterac (6+6), osmerac (4+4) — i njihove predstavnike.', k: 'stihovi'},
  {q: 'Razumijem rimske sheme: AABB (parna), ABAB (ukrštena), ABBA (obgrljena), slobodni stih.', k: 'rima'},
  {q: 'Mogu imenovati strofe od distiha (2) do soneta (14).', k: 'strofa'},
  {q: 'Znam 5-korak taktiku za skeniranje stiha (broj slogova → cezura → rima → strofa → ritam).', k: 'taktika'}
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
  if (pct >= 100) { msg = '🏆 Odlično! Spreman/na si za sve što NCVVO može pitati iz H18 — metričku analizu bilo koje pjesme.'; color = 'var(--green)'; }
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
  try { localStorage.setItem('mt.hrv.h18.prog', p); } catch(e){}
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


      .pov-sheet { background: var(--sur); color: var(--txt); border: 1px solid var(--bd); border-radius: var(--r2); padding: 22px; max-width: 100%; font-family: var(--fb, 'DM Sans', sans-serif); }
      .ps-header { text-align:center; padding-bottom:14px; border-bottom:2px solid var(--bd); margin-bottom:22px; }
      .ps-title { font-family: var(--fh, 'Fraunces', serif); font-size: 22px; font-weight:700; color:var(--txt); }
      .ps-subtitle { font-size:13px; color:var(--muted); margin-top:4px; }
      .ps-era { margin-bottom:20px; border:1px solid var(--bdm); border-radius: var(--r1); overflow:hidden; }
      .ps-era-hdr { display:flex; align-items:center; gap:14px; padding:12px 14px; background:var(--dim-br); border-bottom:1px solid var(--bdm); }
      .ps-era-num { font-family:var(--fh); font-size:22px; color:var(--gold); font-weight:700; }
      .ps-era-info { flex:1; }
      .ps-era-name { font-family:var(--fh); font-weight:700; font-size:16px; color:var(--txt); }
      .ps-era-stih { font-size:12px; color:var(--muted); margin-top:2px; }
      .ps-era-body { padding:14px; }
      .ps-works { display:grid; grid-template-columns:1fr 1fr; gap:6px 14px; margin-bottom:10px; }
      .ps-work { font-size:12px; line-height:1.5; padding:4px 0; border-bottom:1px dotted var(--bdm); }
      .ps-work b { color:var(--gold); font-weight:700; }
      .ps-h { display:inline-block; background:var(--blue-l); color:#fff; padding:1px 6px; border-radius:3px; font-size:10px; font-weight:600; margin-left:4px; }
      .ps-key { padding:10px; background:var(--sur); border-left:3px solid var(--gold); border-radius:var(--r1); font-size:12px; line-height:1.6; color:var(--txt); }
      .ps-key strong { color:var(--gold); }
      .ps-matrix { margin-top:24px; padding:16px; background:var(--dim-br); border-radius:var(--r1); }
      .ps-matrix-title { font-weight:700; font-size:14px; margin-bottom:10px; color:var(--gold); }
      .ps-matrix-tbl { width:100%; border-collapse:collapse; font-size:12px; }
      .ps-matrix-tbl th, .ps-matrix-tbl td { padding:6px 10px; border-bottom:1px solid var(--bdm); text-align:center; }
      .ps-matrix-tbl th { background:var(--sur); font-weight:700; color:var(--txt); }
      .ps-matrix-tbl td:first-child { text-align:left; color:var(--txt); }
      .ps-matrix-key { font-size:10px; color:var(--muted); margin-top:8px; text-align:center; }
      .ps-tips { margin-top:18px; padding:12px 14px; background:var(--dim-br); border-left:3px solid var(--gold); border-radius:var(--r1); }
      .ps-tips-title { font-weight:700; font-size:13px; margin-bottom:8px; color:var(--gold); }
      .ps-tips-body { font-size:11.5px; line-height:1.6; color:var(--txt); }
      .ps-footer { margin-top:18px; padding-top:12px; border-top:1px solid var(--bd); display:flex; justify-content:space-between; font-size:9.5px; color:var(--muted); gap:10px; flex-wrap:wrap; }

      @media print {
        body { background: white !important; color: black !important; font-size: 9pt; }
        .sidebar, .hero, .topbar, .tabs-menu, .nav-row, .box-int, .tags, .no-print, .discere-banner, footer { display: none !important; }
        .content-wrap, main, .layer { display: block !important; padding: 0 !important; margin: 0 !important; max-width: 100% !important; }
        .layer { opacity: 1 !important; transform:none !important; }
        .pov-sheet { border:none !important; padding:6mm !important; background:white !important; color:black !important; max-width: 210mm; }
        .ps-title { color:#000 !important; font-size:16pt !important; }
        .ps-subtitle { color:#555 !important; font-size:9pt !important; }
        .ps-era { border:0.5pt solid #999 !important; margin-bottom:3mm !important; page-break-inside: avoid; }
        .ps-era-hdr { background:#f0f0f0 !important; padding:2mm 3mm !important; border-bottom:0.5pt solid #999 !important; }
        .ps-era-num { color:#000 !important; font-size:14pt !important; }
        .ps-era-name { color:#000 !important; font-size:11pt !important; }
        .ps-era-stih { color:#555 !important; font-size:8pt !important; }
        .ps-era-body { padding:2mm 3mm !important; }
        .ps-works { grid-template-columns: 1fr 1fr !important; gap: 1mm 3mm !important; margin-bottom:2mm !important; }
        .ps-work { font-size:7.5pt !important; color:#000 !important; padding:1pt 0 !important; border-bottom:0.3pt dotted #999 !important; }
        .ps-work b { color:#000 !important; }
        .ps-h { background:#000 !important; color:#fff !important; font-size:7pt !important; }
        .ps-key { background:#f8f8f8 !important; border-left:1pt solid #000 !important; font-size:7.5pt !important; padding:2mm !important; color:#000 !important; }
        .ps-key strong { color:#000 !important; }
        .ps-matrix { background:#f0f0f0 !important; padding:3mm !important; margin-top:4mm !important; }
        .ps-matrix-title { color:#000 !important; font-size:10pt !important; }
        .ps-matrix-tbl { font-size:8pt !important; }
        .ps-matrix-tbl th { background:#fff !important; color:#000 !important; }
        .ps-matrix-tbl td { color:#000 !important; }
        .ps-matrix-key { color:#555 !important; font-size:7pt !important; }
        .ps-tips { background:#f8f8f8 !important; border-left:1pt solid #000 !important; font-size:8pt !important; padding:2mm 3mm !important; }
        .ps-tips-title { color:#000 !important; font-size:9pt !important; }
        .ps-tips-body { color:#000 !important; font-size:7.5pt !important; }
        .ps-footer { border-top:0.3pt solid #000 !important; color:#555 !important; font-size:6.5pt !important; }
        @page { size: A4 portrait; margin: 8mm 6mm; }
      }

      @media (max-width: 640px) {
        .ps-works { grid-template-columns: 1fr !important; }
      }
    

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


const KVIZ_Q=[
  {q:'„Sluge zove Smail-aga Čengić, Usred Stoca grada bijeloga" (Mažuranić, H14) — koji je stih?',o:['Osmerac (4+4)','Jedanaesterac','Deseterac (4+6)','Dvanaesterac (6+6)'],t:2,e:'Deseterac — 10 slogova s cezurom nakon 4. sloga. Mažuranićev Smail-aga (H14) je pisan u narodnom desetercu. "Sluge zove | Smail-aga Čengić" = 4+6.'},
  {q:'„Svih svitljih kraljica, nebeska carica" (Marulić, Judita, H12) — koji je stih?',o:['Dvostruko rimovani dvanaesterac (6+6)','Osmerac (4+4)','Aleksandrinac (6+6)','Deseterac (4+6)'],t:0,e:'Dvostruko rimovani dvanaesterac — 12 slogova, cezura 6+6, s rimama i na krajevima polustihova i stihova (4 rime u distihu). Marulićeva specifičnost.'},
  {q:'„Ah, čijem si se zahvalila, tašta ljudska oholasti?" (Gundulić, Osman) — koji je stih?',o:['Deseterac (4+6)','Dvanaesterac (6+6)','Osmerac (4+4)','Jedanaesterac'],t:2,e:'Osmerac — 8 slogova, cezura nakon 4. sloga. Gundulićev standardni stih u baroku. Dubravka (H13) i Osman koriste osmerac.'},
  {q:'„Što se bijeli u gori zelenoj?" (Hasanaginica, narodna balada) — koji je stih?',o:['Slobodni stih','Deseterac (4+6)','Osmerac (4+4)','Jedanaesterac'],t:1,e:'Deseterac (4+6) — osnovni stih narodne epike. "Što se bijeli | u gori zelenoj" = 4+6. Hasanaginica je klasičan primjer hrv. narodnog deseterca sa slavenskom antitezom.'},
  {q:'„Čovječe pazi / da ne ideš malen / ispod zvijezda!" (A. B. Šimić) — koji je stih?',o:['Slobodni stih','Osmerac','Jedanaesterac','Deseterac'],t:0,e:'Slobodni stih — bez fiksnog broja slogova (5+7+7 ili različito), bez obavezne cezure, bez rime. Šimićev ekspresionistički stil. Moderna hrv. poezija napušta fiksne metre.'},
  {q:'Po čemu se razlikuje Marulićev dvostruko rimovani dvanaesterac od aleksandrinca?',o:['Marulić ima 10 slogova, aleksandrinac 12','Marulić ima cezuru 4+8, aleksandrinac 6+6','Nema razlike — to su isti stihovi','Marulić ima 4 rime u distihu (2 unutarnje + 2 krajnje); aleksandrinac samo 2 rime (krajeve stihova)'],t:3,e:'Oba imaju 12 slogova i cezuru 6+6, ALI Marulićev dvostruko rimovani dvanaesterac ima rimu i na kraju polustihova (npr. "kraljica | carica") I na kraju stihova — 4 rime ukupno. Aleksandrinac rimuje samo krajeve stihova.'},
  {q:'Talijanski sonet Petrarce koristi koji stih?',o:['Aleksandrinac','Jedanaesterac (endecasillabo)','Deseterac','Osmerac'],t:1,e:'Jedanaesterac — klasični stih talijanske renesanse (Dante, Petrarca, Tasso). U sonetu 14 stihova × 11 slogova. U hrv. modernu preuzimaju Matoš, Ujević, Kranjčević za hrv. sonete.'},
  {q:'Shema AABB označava koju rimu?',o:['Obgrljenu rimu','Parnu rimu','Ukrštenu rimu','Slobodnu rimu'],t:1,e:'Parna rima — prvi i drugi stih se rimuju, treći i četvrti se rimuju. Jednostavna, ritmična, česta u didaktici i dječjoj poeziji. Marulićeva Judita (H12) u distisima AABB.'},
  {q:'Koja je najčešća shema rime u hrv. lirskoj poeziji?',o:['Obgrljena (ABBA)','Slobodna (bez rime)','Ukrštena (ABAB)','Parna (AABB)'],t:2,e:'Ukrštena rima (ABAB) — najčešća u hrv. lirici. Matoš, Ujević, Preradović većinom koriste ABAB jer daje ritmičku isprepletenost bez monotonije parne rime.'},
  {q:'Petrarkin (talijanski) sonet ima rimu:',o:['ABAB ABAB CDC DCD','ABBA ABBA CDC DCD','AABB CCDD EEFF GG','ABAB CDCD EFEF GG'],t:1,e:'Talijanski sonet ima 2 obgrljena katrena (ABBA ABBA) + 2 terceta (CDC DCD ili CDE CDE). Engleski (Shakespeareov) ima ABAB CDCD EFEF GG — 3 ukrštena katrena + distih.'},
  {q:'Ženska rima je:',o:['Rima od 2 sloga s naglaskom na pretposljednjem (cvijete/svijete)','Rima od 1 sloga s naglaskom na zadnjem (dán/smán)','Rima koju pišu žene','Rima samo u vokalima (zemlja/vrela)'],t:0,e:'Ženska rima — dvosložna, naglasak na pretposljednjem slogu. Dominira hrv. jer naš jezik ima pokretni naglasak na pretposljednjem slogu mnogih riječi. Muška je jednosložna (dán/smán).'},
  {q:'„zemlja / vrela" — kakva je to rima?',o:['Nepotpuna (asonancijska) — samo vokali se podudaraju','Čista rima','Unutarnja rima','Ženska rima'],t:0,e:'Nepotpuna rima (asonancijska) — podudaraju se samo samoglasnici (e-a), ali suglasnici (mlj vs. rl) nisu isti. Moderni pjesnici namjerno koriste za prirodniji zvuk.'},
  {q:'Koliko stihova ima sonet?',o:['10 (2 kvinteta)','16 (2 oktave)','12 (3 kvarteta)','14 (4+4+3+3)'],t:3,e:'Sonet ima 14 stihova organizirani kao 2 katrena + 2 terceta (talijanski) ili 3 katrena + distih (engleski). Voli (obrat) nakon 8. stiha. Najprestižnija europska fiksna forma.'},
  {q:'Gundulićev oktavac ima koliko stihova i kakvu rimu?',o:['8 osmeraca s rimom ABABABCC','6 osmeraca s rimom ABABCC','8 dvanaesteraca s rimom ABCABCDD','4 osmerca s rimom AABB'],t:0,e:'Gundulićev oktavac — 8 osmeraca (svaki 4+4 sloga), rima ABABABCC. Gundulić u Osmanu (17. st.) usavršio ovu strofu kao hrv. specifičnost. Adaptacija talijanske ottava rime.'},
  {q:'Marulićev distih u Juditi (H12) čine:',o:['Varijabilan broj slobodnih stihova','4 stiha osmerca','2 stiha dvostruko rimovanog dvanaesterca','3 stiha deseterca'],t:2,e:'Marulićeva Judita koristi distih (2 stiha) sa dvostruko rimovanim dvanaestercem — svaki stih 12 slogova s cezurom 6+6 i 4 rime u distihu.'},
  {q:'Šimićeva pjesma „Opomena" (3 stiha: Čovječe pazi / da ne ideš malen / ispod zvijezda!) ima strofu:',o:['Klasični tercet s terza rimom','Slobodni tercet','Distih','Kvartet'],t:1,e:'Slobodni tercet — 3 stiha, ali bez terza rime (ABA BCB) i bez fiksnog metra. Šimić koristi tercet kao ekspresionističku minimalnu jedinicu. Ekonomija izraza.'},
  {q:'Klasični heksametar (Homer, Ilijada) koristi koju stopu?',o:['Jamb (∪ ⎼)','Trohej (⎼ ∪)','Anapest (∪ ∪ ⎼)','Daktil (⎼ ∪ ∪)'],t:3,e:'Daktil (⎼ ∪ ∪) — naglašen + 2 nenaglašena sloga. Klasični heksametar ima 6 daktila po stihu (s varijacijama). Homer (Ilijada, Odiseja), Vergilije (Eneida).'},
  {q:'„Što se bijeli u gori zelenoj" (Hasanaginica) pokazuje tendenciju koje stope?',o:['Daktil (⎼ ∪ ∪)','Jamb (∪ ⎼)','Trohej (⎼ ∪)','Anapest (∪ ∪ ⎼)'],t:2,e:'Trohej (⎼ ∪) — naglašen + nenaglašen slog. Hrv. narodni deseterac tendira trohejskoj kadenci jer naglasci često padaju na prve slogove riječi (Što / se, bi-jeli). Mažuranić (H14) preuzima ovaj ritam.'},
  {q:'Koja metrička sustav dominira hrv. poezijom?',o:['Silabički (broji se broj slogova)','Kvantitativni (dugi vs. kratki slogovi)','Mješoviti kvantitativno-akcenatski','Akcenatski (raspored naglasaka)'],t:0,e:'Silabički sustav — hrv. broji samo broj slogova, cezura je ključna za ritam. Kvantitativni (klasični grčki) ne radi u hrv. jer nemamo fonološki aktivnu razliku dugo/kratko. U moderni su prisutni silabičko-akcenatski elementi.'},
  {q:'Shakespeareov jambski peterostopnik ima koliko stopa po stihu?',o:['3 jamba (6 slogova)','6 jambova (12 slogova)','4 jamba (8 slogova)','5 jambova (10 slogova)'],t:3,e:'Iambic pentameter — 5 jambova (∪⎼ ∪⎼ ∪⎼ ∪⎼ ∪⎼) = 10 slogova po stihu. Osnovni stih Shakespeareovih sonetova i drama. U hrv. moderni (Matoš, Ujević) također tendira jambska kadenca.'},
  {q:'U kojem stihu je cezura nakon 4. sloga?',o:['Samo aleksandrinac (6+6)','Deseterac (4+6) i osmerac (4+4)','Samo deseterac (4+6)','Samo dvanaesterac (6+6)'],t:1,e:'Cezura nakon 4. sloga javlja se u desetercu (4+6, Mažuranić H14) i u osmercu (4+4, Gundulić H13). U dvanaestercu (Marulić, H12) i aleksandrincu cezura je nakon 6. sloga.'},
  {q:'Što je cezura?',o:['Pauza između stihova','Broj slogova u stihu','Fiksna stanka (pauza) unutar stiha','Rima na kraju stiha'],t:2,e:'Cezura je ritmička stanka UNUTAR stiha — pauza koja dijeli stih na polustihove. U narodnom desetercu uvijek nakon 4. sloga. Različito od opkoračenja (prijelaz između stihova).'},
  {q:'Ako pjesma ima strofu od 8 stihova s rimom ABABABCC i osmeračkim stihom — koja je to forma?',o:['Sonet','Spenserova stanca','Ottava rima (talijanska)','Gundulićev oktavac'],t:3,e:'Gundulićev oktavac — 8 osmeraca s ABABABCC rimom. Specifična hrv. barokna forma iz Osmana (17. st.). Spenserova stanca ima 9 stihova. Ottava rima (talijanska) ima 11-sloge, ne 8-sloge.'},
  {q:'Koje je prvo hrv. umjetničko djelo na hrvatskom jeziku s vlastitom versifikacijom?',o:['Mažuranić, Smail-aga — deseterac','Marulić, Judita (1501.) — dvostruko rimovani dvanaesterac','Kačić Miošić, Razgovor ugodni — deseterac','Gundulić, Osman — osmerac'],t:1,e:'Marulićeva Judita (1501.) je prva hrv. umjetnička pjesma na hrvatskom (ne latinskom) jeziku. Marulić spaja narodnu tradiciju (deseterac) s učenom kulturom (latinska metrika) i stvara novi stih — dvostruko rimovani dvanaesterac.'},
  {q:'Slobodni stih u hrv. književnosti dominira kod:',o:['Mažuranić, Kačić (preporod)','Kranjčević, Preradović (realizam)','Marulić, Gundulić (renesansa i barok)','Ujević, Šimić, Matoš (moderna, 20. st.)'],t:3,e:'Slobodni stih je obilježje hrv. moderne i avangarde. Tin Ujević (Kolajna), A. B. Šimić (Preobraženja), A. G. Matoš, M. Krleža (Balade Petrice Kerempuha). Radikalno odbacuju fiksne metre tradicije.'},
];

const CP_ITEMS=[
  'Razumijem 3 metrička sustava: silabički (hrvatski), klasični kvantitativni (Homer), akcenatski (engleski/njemački).',
  'Znam 3 glavna hrv. stiha: deseterac (4+6, Mažuranić, H14), dvanaesterac (6+6, Marulić, H12), osmerac (4+4, Gundulić, H13).',
  'Razumijem pojam cezure — fiksna stanka unutar stiha (deseterac 4+6, dvanaesterac 6+6, osmerac 4+4).',
  'Znam 4 glavne rimske sheme: parna (AABB), ukrštena (ABAB), obgrljena (ABBA), slobodni stih (bez rime).',
  'Razumijem razliku između muške rime (naglasak na zadnjem slogu) i ženske rime (na pretposljednjem).',
  'Znam strofe od distiha (2) do soneta (14) — i posebnu strukturu soneta (4+4+3+3).',
  'Razumijem osnovne klasične stope: jamb (∪⎼), trohej (⎼∪), daktil (⎼∪∪), anapest (∪∪⎼).',
  'Mogu skenirati stih: izbrojiti slogove, pronaći cezuru, prepoznati rimu, identificirati strofu.',
  'Znam razvoj hrv. versifikacije kroz stoljeća: dvanaesterac (16.) → osmerac (17.) → deseterac (19.) → slobodni stih (20.).',
  'Mogu primijeniti versifikacijsku analizu na konkretnu pjesmu (Marulić, Gundulić, Mažuranić, Matoš, Ujević, Šimić).',
];

const DIAG0_Q=[
  {q:'Koji stih ima 10 slogova s cezurom nakon 4. sloga?',o:['Deseterac (4+6)','Dvanaesterac (6+6)','Osmerac (4+4)','Aleksandrinac'],t:0},
  {q:'Koji stih koristi Marulić u Juditi?',o:['Osmerac','Dvanaesterac (6+6)','Deseterac','Slobodni stih'],t:1},
  {q:'Koja je najčešća rima u hrv. lirskoj poeziji?',o:['AABB (parna)','ABAB (ukrštena)','ABBA (obgrljena)','Sve tri su podjednako česte'],t:1},
  {q:'Što je sonet?',o:['Strofa od 8 stihova','Pjesma od 14 stihova (4+4+3+3)','Vrsta rime','Vrsta cezure'],t:1},
  {q:'Koji pjesnici koriste slobodni stih u hrv. književnosti?',o:['Marulić i Gundulić','Mažuranić i Šenoa','Matoš, Ujević, A. B. Šimić','Svi pjesnici'],t:2}
];
const TAB_NAMES=['Teorija','Tipovi stihova','Metar i ritam','Rima','Strofa','Scanner+Drill','Kviz','Povijesna tablica'];
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
    msg='<strong>Odlično!</strong> Osnove H18 imaš savladane. Preporučujem Povijesnu tablicu — pregled hrv. stiha kroz 5 stoljeća.';
    btnTxt='📊 Povijesna tablica →'; btnTab=7;
  } else if(pct>=60){
    msg='<strong>Dobro!</strong> Nekoliko rupa postoji — provjeri Tab 1-4 za detalje o stihovima, metru, rimi i strofi.';
    btnTxt='🎨 Tropi →'; btnTab=1;
  } else {
    msg='<strong>Kreni od osnova.</strong> Preporučujem: Teorija (Tab 0) + Tipovi stihova (Tab 1). Deseterac, dvanaesterac i osmerac su ključni — sigurno ih nauči napamet.';
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
try{citStars=JSON.parse(localStorage.getItem('mt.hrv.h18.cit_stars')||'{}')}catch(e){}
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
  try{localStorage.setItem('mt.hrv.h18.cit_stars',JSON.stringify(citStars))}catch(e){}
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

function scannerDemo(){
  const ta = document.getElementById('scanner-in');
  if(!ta) return;
  ta.value = \`Sluge zove Smail-aga Čengić\\nUsred Stoca grada bijeloga\\nAl ti sluge ni hrana ni kruha\\nVeć snijegom zemlja odjenula\`;
  scannerCount();
  scannerGo();
}
  if(out) out.innerHTML = '';
}

function scannerGo(){
  const ta = document.getElementById('scanner-in');
  const out = document.getElementById('scanner-out');
  if(!ta || !out) return;
  const txt = ta.value.trim();
  if(!txt){
    out.innerHTML = '<div class="box-warn" style="margin-top:10px"><div class="bw-body"><div class="bw-txt">Zalijepi pjesmu da scanner izmjeri metriku. Svaki stih u novi red.</div></div></div>';
    return;
  }

  // === METRIČKI SCANNER ===
  
  // Slogovno brojanje za hrv.: broji samoglasnike + slogotvorno r (između konsonanata)
  function countSyllables(line){
    const s = line.toLowerCase()
      .replace(/[^a-zščćžđéáíóúăâ\\s]/g, '') // ukloni punctuation
      .replace(/\\s+/g, ' ')
      .trim();
    if(!s) return 0;
    // Vokali: a e i o u (+ rij kao sufiks često diftong, ali brojimo osnovno)
    // Brojanje: iteriraj po char-ovima
    let count = 0;
    let prevWasVowel = false;
    const vowels = 'aeiouáéíóúăâ';
    for(let i = 0; i < s.length; i++){
      const c = s[i];
      if(c === ' '){
        prevWasVowel = false;
        continue;
      }
      const isVowel = vowels.includes(c);
      if(isVowel && !prevWasVowel){
        count++;
      }
      prevWasVowel = isVowel;
    }
    // Slogotvorno "r" — kada je između 2 konsonanta (npr. "prst", "crvena")
    // Jednostavna aproksimacija: ako riječ nema vokala ali ima "r", dodaj 1 po riječi
    const words = s.split(/\\s+/);
    for(const w of words){
      const hasVowel = /[aeiouáéíóúăâ]/.test(w);
      if(!hasVowel && w.includes('r')){
        count++;
      }
    }
    return count;
  }

  // Detekcija tipa stiha po broju slogova
  function identifyVerseType(syllables){
    if(syllables === 8) return {name:'Osmerac', cezura:'4+4', ex:'Gundulić, Dubravka (H13)'};
    if(syllables === 10) return {name:'Deseterac', cezura:'4+6', ex:'Mažuranić, Smail-aga (H14); narodni stih'};
    if(syllables === 11) return {name:'Jedanaesterac', cezura:'pomična (5+6 ili 6+5)', ex:'Sonet, Matoš, Ujević'};
    if(syllables === 12) return {name:'Dvanaesterac / Aleksandrinac', cezura:'6+6', ex:'Marulić (H12) ili aleksandrinac (Kranjčević)'};
    if(syllables === 6) return {name:'Šesterac', cezura:'3+3', ex:'lirska poezija, dječje pjesme'};
    if(syllables === 7) return {name:'Sedmerac', cezura:'varijabilna', ex:'rijetko'};
    if(syllables === 9) return {name:'Deveterac', cezura:'4+5', ex:'rijetko u hrv.'};
    return null;
  }

  // Rima — usporedi krajeve (zadnja 2-3 znaka)
  function getRhyme(line){
    const cleaned = line.toLowerCase().replace(/[^a-zščćžđ]/g, '').trim();
    return cleaned.slice(-3);
  }

  function detectRhymeScheme(lines){
    if(lines.length < 2) return {scheme:'—', name:'prekratko za shemu'};
    const endings = lines.map(getRhyme);
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const map = {};
    const scheme = [];
    let letterIdx = 0;
    for(const e of endings){
      // Find if matches any existing rhyme (last 2-3 chars)
      let found = null;
      for(const [key, letter] of Object.entries(map)){
        if(key === e || (key.length >= 2 && e.length >= 2 && key.slice(-2) === e.slice(-2))){
          found = letter;
          break;
        }
      }
      if(found){
        scheme.push(found);
      } else {
        const letter = letters[letterIdx++] || 'X';
        map[e] = letter;
        scheme.push(letter);
      }
    }
    const schemeStr = scheme.join('');
    let name = 'bez jasne rime';
    if(schemeStr.startsWith('AABB') || schemeStr === 'AA') name = 'parna (AABB)';
    else if(schemeStr.startsWith('ABAB')) name = 'ukrštena (ABAB)';
    else if(schemeStr.startsWith('ABBA')) name = 'obgrljena (ABBA)';
    else if(schemeStr.startsWith('ABABABCC')) name = 'Gundulićev oktavac (ABABABCC)';
    else if(/^[ABCDEFG]*$/.test(schemeStr) && new Set(scheme).size === scheme.length) name = 'slobodni stih (bez rime)';
    return {scheme:schemeStr, name:name};
  }

  // PARSE: split into lines
  const allLines = txt.split('\\n').map(l => l.trim()).filter(l => l.length > 0);
  if(allLines.length === 0){
    out.innerHTML = '<div class="box-warn"><div class="bw-body"><div class="bw-txt">Nema stihova za analizu.</div></div></div>';
    return;
  }

  // Split into strophes — blank lines as separators
  const rawLines = txt.split('\\n');
  const strophes = [];
  let current = [];
  for(const l of rawLines){
    if(l.trim() === ''){
      if(current.length > 0){ strophes.push(current); current = []; }
    } else {
      current.push(l.trim());
    }
  }
  if(current.length > 0) strophes.push(current);

  // Analyze each line
  const analyses = allLines.map(line => {
    const syll = countSyllables(line);
    const type = identifyVerseType(syll);
    return {line:line, syllables:syll, type:type};
  });

  // Stats
  const syllableCounts = analyses.map(a => a.syllables);
  const avgSyll = (syllableCounts.reduce((s,c)=>s+c, 0) / syllableCounts.length).toFixed(1);
  const allSame = new Set(syllableCounts).size === 1;
  const mostCommon = syllableCounts.sort((a,b) => syllableCounts.filter(v => v===a).length - syllableCounts.filter(v => v===b).length).pop();

  // Rhyme scheme
  const rhyme = detectRhymeScheme(allLines);

  // Strophe analysis
  const strophDesc = strophes.map(st => st.length === 2 ? 'distih' : st.length === 3 ? 'tercet' : st.length === 4 ? 'kvartet' : st.length === 8 ? 'oktava' : \`\${st.length}-stih\`);

  // === RENDER ===
  let h = '<div class="box-int" style="margin-top:10px"><div class="box-int-lbl">🎼 Metrička analiza</div><div class="box-int-txt">';
  
  h += \`<p><strong>Broj stihova:</strong> \${allLines.length} · <strong>Prosječno slogova:</strong> \${avgSyll} · <strong>Najčešće:</strong> \${mostCommon} slogova</p>\`;

  // Verse type identification
  if(allSame && identifyVerseType(mostCommon)){
    const t = identifyVerseType(mostCommon);
    h += \`<p style="margin-top:10px"><b>🎯 Prepoznati stih: \${t.name}</b><br>\`;
    h += \`• Slogova: \${mostCommon} · Cezura: \${t.cezura}<br>\`;
    h += \`• Primjer iz hrv. književnosti: <em>\${t.ex}</em></p>\`;
  } else if(identifyVerseType(mostCommon)){
    const t = identifyVerseType(mostCommon);
    h += \`<p style="margin-top:10px"><b>🎯 Vjerojatan stih: \${t.name}</b> (dominantan broj slogova: \${mostCommon})<br>\`;
    h += \`• Neke stihove imaju različit broj slogova — <em>provjeri je li pjesma nekonzistentna ili sam algoritam pogriješio brojanje</em>.</p>\`;
  } else {
    h += \`<p style="margin-top:10px"><b>🎯 Vjerojatno slobodni stih</b> — broj slogova varira (\${Math.min(...syllableCounts)}–\${Math.max(...syllableCounts)}).</p>\`;
  }

  // Rhyme
  h += \`<p style="margin-top:10px"><b>🎵 Shema rime:</b> <code style="font-family:var(--mono);background:var(--dim-br);padding:2px 6px;border-radius:3px">\${rhyme.scheme}</code> — <em>\${rhyme.name}</em></p>\`;

  // Strophes
  if(strophes.length > 1){
    h += \`<p style="margin-top:10px"><b>📦 Strofe:</b> \${strophes.length} strofa — \${strophDesc.join(', ')}.</p>\`;
  } else {
    h += \`<p style="margin-top:10px"><b>📦 Strofa:</b> 1 strofa (ili nije odvojena blank redovima) — \${strophDesc[0]}.</p>\`;
  }

  // Line-by-line table
  h += \`<details style="margin-top:10px"><summary style="cursor:pointer;color:var(--gold);font-weight:600">📋 Detaljan pregled svakog stiha (klikni)</summary>\`;
  h += \`<table class="tbl" style="margin-top:8px;font-size:12px"><thead><tr><th>#</th><th>Stih</th><th>Slogova</th><th>Prepoznato</th></tr></thead><tbody>\`;
  analyses.forEach((a, idx) => {
    const typeName = a.type ? a.type.name : '—';
    h += \`<tr><td>\${idx+1}</td><td style="font-family:var(--serif)">\${a.line}</td><td>\${a.syllables}</td><td>\${typeName}</td></tr>\`;
  });
  h += '</tbody></table></details>';

  // Final advice
  h += \`<p style="margin-top:14px;padding-top:10px;border-top:1px dashed var(--bd)"><b>🎯 Sljedeći korak:</b> Nakon metričke identifikacije, (1) provjeri cezuru čitanjem naglas, (2) pročitaj naglas radi ritma (jamb/trohej), (3) identificiraj pjesničku formu (sonet, ep, lirika) iz kombinacije strofe + stiha + rime.</p>\`;
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
  try{localStorage.setItem('mt.hrv.h18.wc_text',txt);}catch(e){}
}
(function(){
  const ta=document.getElementById('scanner-in');
  if(!ta)return;
  try{const sv=localStorage.getItem('mt.hrv.h18.wc_text');if(sv){ta.value=sv;scannerUpdate();}}catch(e){}
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
    <h3>25 pitanja · H18 Versifikacija</h3>
    <p>Pitanja pokrivaju sve 4 teme versifikacije: <strong>stih, metar, rima, strofa</strong>. Svako pitanje daje <em>stvarni stih iz hrv. književnosti</em> — prepoznaj tip. Primjeri iz H12-H16 + moderna + klasici. Na kraju dobivaš ocjenu i objašnjenja.</p>
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
  if(pct>=90){grade='ODLIČAN';msg='Spreman/na si za maturu iz H18 — metriku pjesme skeniraš brzo i točno.';ico='🏆';}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno znanje. Provjeri neispravne odgovore i ponovi Tab 1-4.';ico='💪';}
  else if(pct>=60){grade='DOBAR';msg='Ponoviti: 3 glavna hrv. stiha (deseterac 4+6, dvanaesterac 6+6, osmerac 4+4) + sheme rime (AABB, ABAB, ABBA).';ico='📚';}
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
      <button class="fcb" onclick="sw(4)">📦 Strofa</button>
      <button class="fcb" onclick="sw(7)">📊 Povijesna tablica</button>
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
try{const s=localStorage.getItem('mt.hrv.h18.cp');if(s)CP_STATE=JSON.parse(s);}catch(e){}

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
  try{localStorage.setItem('mt.hrv.h18.cp',JSON.stringify(CP_STATE));}catch(e){}
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
    else if(pct>=40)msg='<strong>Napredak!</strong> Nastavak: vježbaj na metričkom scanneru (Tab 5) i radi kviz ponovno dok ne dobiješ 80%+.';
    else msg='Još je posla. Počni s Teorijom (Tab 0) i prođi sve sekcije.';
    sumTxt.innerHTML=msg;
  }
}
function cpReset(){
  CP_STATE={done:{}};
  try{localStorage.removeItem('mt.hrv.h18.cp');}catch(e){}
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
try{TAB_DONE=JSON.parse(localStorage.getItem('mt.hrv.h18.tab_done')||'{}')}catch(e){}

function markTab(n){
  TAB_DONE[n]=true;
  try{localStorage.setItem('mt.hrv.h18.tab_done',JSON.stringify(TAB_DONE))}catch(e){}
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
  '💡 <strong>Tab 0 tip:</strong> Fokus na 3 hrv. stiha: deseterac (Mažuranić), dvanaesterac (Marulić), osmerac (Gundulić). S njima pokrivaš 80% ispita.',
  '💡 <strong>Tab 1 tip:</strong> Klikni na stih za detalje — broj slogova, cezura, primjer iz hrv. književnosti, audio čitanje.',
  '💡 <strong>Tab 2 tip:</strong> Klasične stope (jamb, trohej, daktil) u hrv. su tendencije, ne strogi metar. Fokus na silabički sustav.',
  '💡 <strong>Tab 3 tip:</strong> Ukrštena rima (ABAB) je najčešća u hrv. lirici. Razlikuj muška (jedan slog) od ženske (dva sloga).',
  '💡 <strong>Tab 4 tip:</strong> Sonet (14 stihova, 4+4+3+3) je najprestižnija forma. Nauči 3 glavna hrv. pjesnika soneta: Matoš, Ujević, Kranjčević.',
  '💡 <strong>Tab 5 tip:</strong> Metrički scanner broji slogove, traži cezuru i rimu. Kombinirano s audio čitanjem — najbolji način za učenje ritma.',
  '💡 <strong>Tab 6 tip:</strong> Kviz ima stvarne stihove iz hrv. tradicije — trening je skeniranje u realnim uvjetima.',
  '💡 <strong>Tab 7 tip:</strong> Povijesna tablica daje ti pregled kako se hrv. stih mijenjao kroz 5 stoljeća — savršena referenca za školski esej.'
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
    const names={H11:'H11 · Stari hrv. pisci',H12:'H12 · Marulić · Judita',H13:'H13 · Gundulić · Dubravka',H14:'H14 · Preporod · Mažuranić',H15:'H15 · Šenoa · Prijan Lovro',H16:'H16 · Krleža · Glembajevi',H17:'H17 · Stilske figure'};
    const el=document.getElementById('from-banner');
    const txt=document.getElementById('from-txt');
    if(el&&txt){
      txt.textContent='📎 Nastaviš učenje iz '+(names[from]||from)+' → H18 · Versifikacija';
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h18.kviz_hist')||'[]');
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
    const hist=JSON.parse(localStorage.getItem('mt.hrv.h18.kviz_hist')||'[]');
    hist.push({score,total,date:new Date().toISOString()});
    localStorage.setItem('mt.hrv.h18.kviz_hist',JSON.stringify(hist.slice(-10)));
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
  // EASY — 4 osnovna tipa stihova + broj slogova
  easy:[
    {a:'Deseterac',b:'10 slogova (4+6)'},
    {a:'Dvanaesterac',b:'12 slogova (6+6)'},
    {a:'Osmerac',b:'8 slogova (4+4)'},
    {a:'Jedanaesterac',b:'11 slogova (pomična cezura)'},
  ],
  // MEDIUM — 6 rimskih shema + klasičnih stopa
  medium:[
    {a:'AABB',b:'Parna rima'},
    {a:'ABAB',b:'Ukrštena rima (najčešća u hrv.)'},
    {a:'ABBA',b:'Obgrljena rima (sonetna)'},
    {a:'Jamb (∪⎼)',b:'Uzlazni ritam — moderna, Shakespeare'},
    {a:'Trohej (⎼∪)',b:'Silazni ritam — narodna epika, Mažuranić'},
    {a:'Daktil (⎼∪∪)',b:'Valoviti ritam — klasični heksametar (Homer)'},
  ],
  // HARD — 8 djela ↔ stih/forma
  hard:[
    {a:'Marulić, Judita (H12)',b:'Dvostruko rimovani dvanaesterac'},
    {a:'Gundulić, Dubravka (H13)',b:'Osmerac (4+4) u komediji'},
    {a:'Gundulić, Osman',b:'Gundulićev oktavac (ABABABCC)'},
    {a:'Mažuranić, Smail-aga (H14)',b:'Deseterac narodnog stiha'},
    {a:'Hasanaginica',b:'Narodni deseterac + slavenska antiteza'},
    {a:'Matoš, Notturno',b:'Sonet u jedanaestercima'},
    {a:'Šimić, Opomena',b:'Slobodni stih (ekspresionizam)'},
    {a:'Dante, Komedija',b:'Tercet s terza rimom (ABA BCB)'},
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
    easy:'📏 Tipovi stihova (4 osnovna)',
    medium:'🎯 Rime i klasične stope (6)',
    hard:'📚 Djela i forme (8 naprednih)'
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
  // === STIHOVI (6) ===
  {t:'Dvanaesterac (6+6)',d:'Stih od 12 slogova s cezurom nakon 6. sloga. Marulić u Juditi (H12) koristi dvostruko rimovan dvanaesterac — 4 rime u distihu.',kat:'stih'},
  {t:'Osmerac (4+4)',d:'Stih od 8 slogova s cezurom u sredini. Gundulićeva Dubravka (H13) i Osman. Osnova Gundulićevog oktavca.',kat:'stih'},
  {t:'Deseterac (4+6)',d:'Stih od 10 slogova, cezura nakon 4. sloga. Narodni stih + Mažuranić, Smrt Smail-age (H14). Hasanaginica.',kat:'stih'},
  {t:'Aleksandrinac (6+6)',d:'12 slogova, francuski utjecaj. Različit od Marulićevog dvanaesterca — aleksandrinac ima samo 2 rime, Marulić 4.',kat:'stih'},
  {t:'Jedanaesterac',d:'Talijanski stih od 11 slogova (Dante, Petrarca). Osnova soneta. Koriste ga Matoš, Ujević, Kranjčević u modernoj.',kat:'stih'},
  {t:'Slobodni stih',d:'Bez fiksnog broja slogova, bez obavezne cezure, često bez rime. Moderna — Ujević, Šimić, Krleža.',kat:'stih'},

  // === METAR (4) ===
  {t:'Jamb (∪ ⎼)',d:'Nenaglašen + naglašen. Uzlazni ritam. Dominanta u modernoj hrv. poeziji (Matoš), Shakespeareovim sonetima.',kat:'metar'},
  {t:'Trohej (⎼ ∪)',d:'Naglašen + nenaglašen. Silazni ritam. Dominira narodnom epikom i Mažuranićem (H14). Hrv. tendencija.',kat:'metar'},
  {t:'Daktil (⎼ ∪ ∪)',d:'Naglašen + 2 nenaglašena. Valoviti ritam. Osnova klasičnog heksametra (Homer, Vergilije). Rijetko u hrv.',kat:'metar'},
  {t:'Anapest (∪ ∪ ⎼)',d:'2 nenaglašena + naglašen. Galopirajući ritam. Byron („Assyrian came down..."). Najrjeđa stopa u hrv.',kat:'metar'},

  // === RIMA (6) ===
  {t:'Parna rima (AABB)',d:'Prvi i drugi + treći i četvrti stih se rimuju. Didaktika, dječja poezija, Marulićeva Judita (H12).',kat:'rima'},
  {t:'Ukrštena rima (ABAB)',d:'Prvi i treći + drugi i četvrti. Najčešća u hrv. lirici — Matoš, Ujević, Preradović.',kat:'rima'},
  {t:'Obgrljena rima (ABBA)',d:'Prvi i četvrti + drugi i treći. Sonetna shema (talijanski sonet ABBA ABBA CDC DCD).',kat:'rima'},
  {t:'Čista rima',d:'Potpuno zvučno podudaranje — vokali I suglasnici (krila/stila, cvijet/svijet, noći/moći).',kat:'rima'},
  {t:'Ženska rima',d:'Naglasak na pretposljednjem slogu, rima obuhvaća 2 sloga (cvíjete/svíjete). Dominantna u hrv.',kat:'rima'},
  {t:'Unutarnja rima (srok)',d:'Rima unutar istog stiha — prije cezure i na kraju. Marulićev dvostruko rimovani dvanaesterac (H12).',kat:'rima'},

  // === STROFA (4) ===
  {t:'Kvartet (katren)',d:'4 stiha. Najčešća strofa u hrv. poeziji. Rima ABAB, ABBA ili AABB. Matoš, Ujević, Preradović.',kat:'strofa'},
  {t:'Sonet (14 stihova)',d:'4+4+3+3 = 14 stihova. Talijanski (ABBA ABBA CDC DCD) ili engleski (ABAB CDCD EFEF GG). Volta nakon 8. stiha.',kat:'strofa'},
  {t:'Gundulićev oktavac',d:'8 osmeraca, shema ABABABCC. Gundulić u Osmanu (17. st.). Hrv. specifična barokna strofa.',kat:'strofa'},
  {t:'Distih',d:'2 stiha kao cjelina. Marulićeva Judita (H12) — niz distiha u dvanaestercu s dvostrukim rimovanjem.',kat:'strofa'},
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
  {q: 'Razumijem razliku između 3 metrička sustava: silabički (hrv.), klasični kvantitativni, akcenatski.', k: 'sustavi'},
  {q: 'Znam najvažnija 3 hrv. stiha: deseterac (4+6), dvanaesterac (6+6), osmerac (4+4) — i njihove predstavnike.', k: 'stihovi'},
  {q: 'Razumijem rimske sheme: AABB (parna), ABAB (ukrštena), ABBA (obgrljena), slobodni stih.', k: 'rima'},
  {q: 'Mogu imenovati strofe od distiha (2) do soneta (14).', k: 'strofa'},
  {q: 'Znam 5-korak taktiku za skeniranje stiha (broj slogova → cezura → rima → strofa → ritam).', k: 'taktika'}
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
  if (pct >= 100) { msg = '🏆 Odlično! Spreman/na si za sve što NCVVO može pitati iz H18 — metričku analizu bilo koje pjesme.'; color = 'var(--green)'; }
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
  try { localStorage.setItem('mt.hrv.h18.prog', p); } catch(e){}
}`;

export default function H18Chapter() {
  const containerRef = useRef(null);
  const stylesInjectedRef = useRef(false);
  const scriptsExecutedRef = useRef(false);

  useEffect(() => {
    // Inject styles (once per page mount)
    if (!stylesInjectedRef.current && STYLES_CSS) {
      const styleEl = document.createElement('style');
      styleEl.id = `chapter-styles-H18`;
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
        console.error(`[H18] Script execution error:`, err);
      }
    }

    return () => {
      // Cleanup on unmount
      const styleEl = document.getElementById(`chapter-styles-H18`);
      if (styleEl) styleEl.remove();
      stylesInjectedRef.current = false;
      scriptsExecutedRef.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="chapter-h18"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}
export const HRV_POGAVLJE_18 = null
