/**
 * H03 — Maturiraj.hr — Hrvatski · H03 · Renesansa (europska)
 * Auto-generated from Maturiraj_Hrvatski_H03.html
 * 
 * Strategy: Hybrid HTML-in-JSX (Strategy C)
 * - Body HTML rendered via dangerouslySetInnerHTML
 * - Inline <style> blocks injected at mount
 * - Inline <script> blocks executed at mount
 * - All onclick/oninput/etc. handlers preserved
 * - SEO via Next.js Metadata API (in page.jsx)
 */
'use client';

import ChapterWrapper from './ChapterWrapper';
import { SHARED_LIT_CSS } from './shared-lit-styles';
import { useState, useEffect } from 'react';
import CitatnikH03 from './H03_CitatnikTab';
import H03PojmovnikTab from './H03_PojmovnikTab';
import { createPortal } from 'react-dom';
import {
  TimelineRenesansa, AuthorCardShakespeare, TimelineShakespeare,
  AccordionCetiriTragedije, AuthorCardCervantes, PopKulturaBlok,
  HeroQuoteBitiIliNeBiti, StatCardsHamlet, TimelineRadnja,
  SVGLikoviElsinore, AccordionSukobi, AccordionKljucneScene,
  SVGTheGlobe, UsporedbaHamletRomeo, UsporedbaHamletAntigona,
  AccordionEsejTezeH03,
} from './H03_Components';

const BODY_HTML = `<a href="#main" class="skip-link">Preskači na sadržaj</a>
<!-- Scroll progress bar (v2 upgrade) -->
<div class="scroll-progress" id="scroll-progress" aria-hidden="true"></div>

<!-- SVG tooltip (v3.5) -->
<div class="svg-tt" id="svg-tt" role="tooltip" aria-hidden="true">
  <div class="svg-tt-ttl" id="svg-tt-ttl"></div>
  <div class="svg-tt-txt" id="svg-tt-txt"></div>
</div>

<!-- Back-to-top floating button -->
<button class="btt" id="btt" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh" title="Natrag na vrh">↑</button>



<!-- Feedback / bug report modal (v3.6.1) -->
<div class="modal-backdrop" id="fb-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="fb-modal-title" onclick="if(event.target===this)closeFeedbackModal()">
  <div class="modal" role="document">
    <button class="modal-close" onclick="closeFeedbackModal()" aria-label="Zatvori">✕</button>
    <div class="modal-ico">📝</div>
    <div class="modal-eye">PRIJAVA / PRIJEDLOG</div>
    <div class="modal-title" id="fb-modal-title">Javi nam što ne valja</div>
    <div class="modal-desc">Uočio si grešku u sadržaju, bug u aplikaciji ili imaš prijedlog? <strong>Opiši ovdje</strong> — čitamo svaku poruku.</div>

    <div class="modal-msg" id="fb-msg"></div>

    <form class="fb-form" id="fb-form" onsubmit="return submitFeedback(event)">
      <!-- Tip -->
      <label class="fb-label">Vrsta poruke</label>
      <div class="fb-types" role="radiogroup" aria-label="Vrsta poruke">
        <label class="fb-type-opt"><input type="radio" name="fb-type" value="content_error" checked><span>📖 Greška u sadržaju</span></label>
        <label class="fb-type-opt"><input type="radio" name="fb-type" value="bug"><span>🐛 Bug u aplikaciji</span></label>
        <label class="fb-type-opt"><input type="radio" name="fb-type" value="suggestion"><span>💡 Prijedlog</span></label>
        <label class="fb-type-opt"><input type="radio" name="fb-type" value="praise"><span>💚 Pohvala</span></label>
      </div>

      <!-- Poruka -->
      <label class="fb-label" for="fb-message">Poruka <span class="fb-req">*</span></label>
      <textarea id="fb-message" class="fb-textarea" required minlength="3" maxlength="5000" rows="5" placeholder="Opiši što si uočio — što detaljnije, lakše ćemo popraviti. Npr. 'U kvizu pitanje 3 ima grešku: točan odgovor je X, a ne Y.'"></textarea>
      <div class="fb-counter"><span id="fb-char-count">0</span> / 5000</div>

      <!-- Email (optional) -->
      <label class="fb-label" for="fb-email">Tvoj e-mail <span class="fb-hint">(neobavezno — samo ako želiš odgovor)</span></label>
      <input type="email" id="fb-email" class="modal-input" placeholder="tvoj@email.hr" autocomplete="email">

      <button type="submit" class="modal-submit" id="fb-submit" style="width:100%;margin-top:14px">Pošalji ›</button>
      <div class="modal-small" style="margin-top:10px">Tvoj e-mail čuvamo samo za odgovor. Ne šaljemo ništa drugo.</div>
    </form>
  </div>
</div>

<div class="sb-hamburger" id="hamburger" onclick="toggleSidebar()" aria-label="Otvori izbornik"><span></span><span></span><span></span></div>
<div class="sb-overlay" id="overlay" onclick="closeSidebar()"></div>

<div class="shell">

<!-- == SIDEBAR == -->
<nav class="sidebar" id="sidebar">
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
    <div class="sb-prog-label"><span>napredak</span><span id="prog-pct">0%</span></div>
    <div class="sb-prog-track"><div class="sb-prog-bar" id="prog-bar" style="width:0%"></div></div>
  </div>

  <!-- == SVJETSKA KNJIŽEVNOST == -->
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

  <!-- == HRVATSKA KNJIŽEVNOST == -->
  <div class="sb-era">// Hrvatska književnost</div>
  <a class="sb-item" data-code="h11" href="/skripte/hrv/h11"><span class="sb-dot"></span>H11 · Stari hrv. pisci</a>
  <a class="sb-item" data-code="h12" href="/skripte/hrv/h12"><span class="sb-dot"></span>H12 · Marulić i hrv. rens.</a>
  <a class="sb-item" data-code="h13" href="/skripte/hrv/h13"><span class="sb-dot"></span>H13 · Hrv. barok — Gundulić</a>
  <a class="sb-item" data-code="h14" href="/skripte/hrv/h14"><span class="sb-dot"></span>H14 · Preporod</a>
  <a class="sb-item" data-code="h15" href="/skripte/hrv/h15"><span class="sb-dot"></span>H15 · Šenoa i realizam</a>
  <a class="sb-item" data-code="h16" href="/skripte/hrv/h16"><span class="sb-dot"></span>H16 · Krleža i moderna</a>

  <!-- == STIL I IZRAZ == -->
  <div class="sb-era">// Stil i izraz</div>
  <a class="sb-item" data-code="h17" href="/skripte/hrv/h17"><span class="sb-dot"></span>H17 · Stilske figure</a>
  <a class="sb-item" data-code="h18" href="/skripte/hrv/h18"><span class="sb-dot"></span>H18 · Versifikacija</a>

  <!-- == JEZIKOSLOVLJE == -->
  <div class="sb-era">// Jezikoslovlje</div>
  <a class="sb-item" data-code="h19" href="/skripte/hrv/h19"><span class="sb-dot"></span>H19 · Fonetika i fonologija</a>
  <a class="sb-item" data-code="h20" href="/skripte/hrv/h20"><span class="sb-dot"></span>H20 · Morfologija</a>
  <a class="sb-item" data-code="h21" href="/skripte/hrv/h21"><span class="sb-dot"></span>H21 · Sintaksa</a>
  <a class="sb-item" data-code="h22" href="/skripte/hrv/h22"><span class="sb-dot"></span>H22 · Leksikologija</a>
  <a class="sb-item" data-code="h23" href="/skripte/hrv/h23"><span class="sb-dot"></span>H23 · Povijest hrv. jezika</a>
  <a class="sb-item" data-code="h24" href="/skripte/hrv/h24"><span class="sb-dot"></span>H24 · Hrv. narječja</a>

  <!-- == PRAVOPIS == -->
  <div class="sb-era">// Pravopis</div>
  <a class="sb-item" data-code="h25" href="/skripte/hrv/h25"><span class="sb-dot"></span>H25 · Pravopisna pravila</a>
  <a class="sb-item" data-code="h26" href="/skripte/hrv/h26"><span class="sb-dot"></span>H26 · Interpunkcija</a>

  <!-- == PISANJE == -->
  <div class="sb-era">// Pisanje</div>
  <a class="sb-item" data-code="h27" href="/skripte/hrv/h27"><span class="sb-dot"></span>H27 · Školski esej</a>
  <a class="sb-item" data-code="h28" href="/skripte/hrv/h28"><span class="sb-dot"></span>H28 · Sažetak</a>

  <!-- == DODATNO — obvezatna djela (deep-dive za esej 2026 + čitanje) == -->
  <div class="sb-era sb-era-d">// Dodatno · obvezatna djela</div>
  <div class="sb-d-meta">Deep-dive za esej (30 bod) + čitanje (20 bod)</div>

  <a class="sb-item sb-d" data-code="d01" href="/skripte/hrv"><span class="sb-dot"></span>D01 · Sofoklo · Antigona</a>
  <a class="sb-item sb-d" data-code="d02" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D02 · Petrarca · izbor</a>
  <a class="sb-item sb-d" data-code="d03" href="/skripte/hrv"><span class="sb-dot"></span>D03 · Shakespeare · Hamlet</a>
  <a class="sb-item sb-d" data-code="d04" data-star="2026" href="/skripte/hrv"><span class="sb-dot"></span>D04 · Calderón · Život je san</a>
  <a class="sb-item sb-d" data-code="d05" href="/skripte/hrv"><span class="sb-dot"></span>D05 · Moliere · Škrtac</a>
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
    <span id="sb-footer-pos">03 / 28</span> · <span id="sb-footer-title">renesansa</span>
    <br>maturiraj.hr · hrvatski · v2
  </div>
</nav>

<!-- == MAIN == -->
<main class="main" id="main">
<div class="content-wrap">
  <div class="bc">
    <a class="bc-link" href="/">maturiraj.hr</a><span class="bc-sep">/</span>
    <a class="bc-link" href="/skripte/hrv">hrvatski</a><span class="bc-sep">/</span>
    <span class="bc-cur">H03 · Renesansa (europska)</span>
    <span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-tab" id="bc-tab">Teorija</span>
  </div>

  <!-- V3: RESTORE BANNER (unutar content-wrap) -->
  <div class="restore-banner" id="restore-banner">
    <div class="rb-txt">💾 Imaš <strong id="rb-progress-txt">spremljen napredak</strong> iz zadnje sesije</div>
    <div class="rb-actions">
      <button class="rb-btn primary" onclick="restoreProgress()">Nastavi gdje si stao</button>
      <button class="rb-btn secondary" onclick="dismissRestore()">Ispočetka</button>
    </div>
  </div>

  <!-- HERO -->
  <div class="hero">
    <div class="hero-orb-a"></div><div class="hero-orb-b"></div>
    <div class="hero-chapter">H03 &nbsp;·&nbsp; Svjetska književnost &nbsp;·&nbsp; Renesansa</div>
    <div class="hero-title">Renesansa<br><span>(europska)</span></div>
    <div class="hero-sub">Od <strong>Shakespeareova Hamleta</strong>, preko <em>Romea i Julije</em>, do Cervantesova Don Quijotea i Petrarcine lirike. Epoha u kojoj se svijet okreće od Boga prema čovjeku — i u kojoj nastaje najdublja tragedija europske književnosti. <b>Hamlet je obvezatno čitanje po NCVVO katalogu 2026.</b></div>
    <div class="hero-meta">
      <span class="hchip br">⏱️ 60 min</span>
      <span class="hchip go">🎯 Fokus: Hamlet (Shakespeare)</span>
      <span class="hchip te">📚 H03 renesansa</span>
    </div>
    <div class="hero-progress-row">
      <div class="pt"><div class="pb" id="hero-pb" style="width:5%"></div></div>
      <span class="prog-label" id="hero-prog-lbl">5% završeno</span>
    </div>
  </div>

  <!-- == SOCIAL PROOF + COUNTDOWN =================
       Playbook P5.1 + P5.2 — trust + urgency
       Brojevi se renderiraju iz JS-a (vidi renderSocialProof)
  =================================================== -->
  <div class="social-proof" id="social-proof" aria-label="Statistika platforme"></div>

  <!-- Countdown se dinamički renderira iz JS-a -->
  <div class="countdown" id="countdown" aria-label="Do mature" style="display:none"></div>
  <!-- Print / dijeli (ujednačeno; PDF-export kartica i signup uklonjeni) -->
  <div class="mt-print-row" style="display:flex;gap:8px;flex-wrap:wrap;margin:0 0 16px">
    <button class="fcb" onclick="window.print()" style="font-size:10px" title="Ispis / Spremi kao PDF (Ctrl+P)">🖨 Ispis / PDF</button>
    <button class="fcb" onclick="navigator.share?navigator.share({title:document.title,url:window.location.href}):navigator.clipboard.writeText(window.location.href)" style="font-size:10px" title="Podijeli">📤 Dijeli</button>
  </div>

  <!-- TABS -->
  <div class="tabs" role="tablist" aria-label="Dijelovi poglavlja">
    <button class="tab on" onclick="sw(0)" role="tab" aria-selected="true" aria-controls="l0">📖 Teorija</button>
    <button class="tab" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">📖 Hamlet</button>
    <button class="tab" onclick="sw(2)" role="tab" aria-selected="false" aria-controls="l2">✍️ Esej alat</button>
    <button class="tab" onclick="sw(3)" role="tab" aria-selected="false" aria-controls="l3">💬 Citatnik</button>
    <button class="tab" onclick="sw(4)" role="tab" aria-selected="false" aria-controls="l4">📚 Pojmovnik</button>
    <button class="tab" onclick="sw(5)" role="tab" aria-selected="false" aria-controls="l5">⚡ Drill<span class="tab-lock">PRO</span></button>
    <button class="tab" onclick="sw(6)" role="tab" aria-selected="false" aria-controls="l6">🧠 Kviz<span class="tab-lock">PRO</span></button>
    <button class="tab" onclick="sw(7)" role="tab" aria-selected="false" aria-controls="l7">✅ Checkpoint<span class="tab-lock">PRO</span></button>
  </div>

  <!-- ========================
       CONTENT LAYERS — 7 TABS
       ======================== -->
  <!-- ========================
       TAB 0 · TEORIJA
       ======================== -->
  <div class="layer on" id="l0" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">hamlet</span>
      <span class="pill p-go">shakespeare</span>
      <span class="pill p-t">tragedija</span>
      <span class="pill p-r">obvezatno čitanje 2026</span>
      <span class="pill p-pa">humanizam · sonet</span>
    </div>

    <div class="slbl">01 · Zašto uopće ovo učimo</div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Renesansa — od Elsinora do Verone</div>
      <div class="box-int-txt">
        Renesansa (14.–17. st.) nije samo „razdoblje književnosti” — to je <em>prijelom u načinu mišljenja</em>.
        Bog se povlači iz središta, čovjek preuzima scenu. U srcu epohe stoji <strong>Shakespeareov Hamlet</strong> —
        najutjecajnija tragedija europske književnosti i <em>obvezatno čitanje po NCVVO ispitnom katalogu za 2026.</em>
        Oko njega: <em>Romeo i Julija</em> (najpoznatija ljubavna tragedija), <em>Don Quijote</em> (prvi moderni roman),
        Petrarcini soneti i Boccacciov Dekameron. <strong>Sve kasnije književnosti grade se na temeljima koje ovdje postavljaju.</strong>
      </div>
    </div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">Hamlet — obvezatno čitanje za maturu 2026</div>
        <div class="bw-txt"><strong>Hamlet</strong> je <em>obvezatno čitanje</em> po NCVVO ispitnom katalogu za 2026. godinu. To znači da <b>može biti ispitno djelo za školski esej (30 bodova, 27% mature)</b>, a pojmovi vezani uz Hamleta (revenge tragedy, blank verse, solilokvij, antic disposition, Elsinor) redovito ulaze u <b>teoriju književnosti (12 bodova)</b>. Uz Hamleta, korisno je znati i Shakespeareova ostala djela (R&J, Othello, Macbeth), Cervantesova Don Quijotea i Petrarcine sonete.</div>
      </div>
    </div>

    <!-- Soft kontekst hint — Hamlet na prošlim maturama -->
    <div class="soft-hint">
      <div class="soft-hint-ico">💡</div>
      <div class="soft-hint-body">
        <b>Hamlet i Shakespeare</b> pojavljuju se gotovo svake godine — bilo kao ispitno djelo (Hamlet, R&amp;J), bilo u teoriji (sonet, blank verse, tragedija, solilokvij).
      </div>
      <a href="/discere?q=hamlet&ctx=h03_soft_hint" class="soft-hint-link" onclick="track('upsell_click',{ctx:'soft_hint_hamlet',target:'discere'},'conversion')">Pogledaj u Discere ›</a>
    </div>

    <!-- == MINI-DIJAGNOSTIKA "Mogu li ovo na maturi?" == -->
    <div class="diag" id="diag" data-state="intro">
      <!-- Stanje 1: Intro -->
      <div class="diag-intro">
        <div class="diag-eye">🎯 DIJAGNOSTIKA · 60 SEKUNDI</div>
        <div class="diag-ttl">Mogu li ovo na maturi?</div>
        <div class="diag-desc">5 brzih pitanja iz H03. Saznaj <strong>gdje stojiš prije nego što počneš učiti</strong> — fokusiraj se samo na ono što ti zaista treba.</div>
        <div class="diag-actions">
          <button type="button" class="diag-btn diag-btn-primary" onclick="diagStart()">▶ Pokreni dijagnostiku</button>
          <button type="button" class="diag-btn diag-btn-ghost" onclick="diagSkip()">Preskoči — odmah na sadržaj ↓</button>
        </div>
      </div>

      <!-- Stanje 2: Quiz -->
      <div class="diag-quiz">
        <div class="diag-progress">
          <div class="diag-prog-bar"><div class="diag-prog-fill" id="diag-fill"></div></div>
          <div class="diag-prog-txt">Pitanje <span id="diag-cur">1</span> od 5</div>
        </div>
        <div class="diag-q" id="diag-q"></div>
        <div class="diag-opts" id="diag-opts"></div>
        <div class="diag-skip-row">
          <button type="button" class="diag-skip-q" onclick="diagAnswer(null)">Ne znam — sljedeće</button>
        </div>
      </div>

      <!-- Stanje 3: Rezultat -->
      <div class="diag-result">
        <div class="diag-res-score">
          <div class="diag-res-num"><span id="diag-correct">0</span>/5</div>
          <div class="diag-res-lbl">točnih</div>
        </div>
        <div class="diag-res-msg" id="diag-msg"></div>
        <div class="diag-res-rec" id="diag-rec"></div>
        <div class="diag-actions">
          <button type="button" class="diag-btn diag-btn-primary" onclick="diagDismiss()">✅ Razumijem — počinjem učiti</button>
          <button type="button" class="diag-btn diag-btn-ghost" onclick="diagRestart()">🔁 Ponovi dijagnostiku</button>
        </div>
      </div>
    </div>

    <!-- BODOVI NA MATURI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Bodovi na maturi iz Hrvatskog</div><div class="sec-line"></div></div>

    <div class="prose">Ukupno <strong>110 bodova</strong>. Renesansa (osobito Shakespeare) pojavljuje se u <em>najviše cjelina</em> — esej, teorija i čitanje književnog teksta. Investicija u ovo poglavlje se zaista isplati.</div>

    <div class="tbl">
      <table>
        <thead><tr><th>Cjelina</th><th>Bodovi</th><th>%</th><th>Gdje ulazi renesansa</th></tr></thead>
        <tbody>
          <tr><td><b>Školski esej</b></td><td>30</td><td>27%</td><td><strong>Hamlet (Shakespeare) — obvezatno čitanje 2026</strong></td></tr>
          <tr><td><b>Čitanje knjiž. teksta</b></td><td>20</td><td>18%</td><td>Ulomci iz Shakespearea, Cervantesa, Petrarce</td></tr>
          <tr><td>Sažetak</td><td>18</td><td>16%</td><td>—</td></tr>
          <tr><td>Ustroj hrv. jezika</td><td>15</td><td>14%</td><td>—</td></tr>
          <tr><td><b>Teorija i povijest knjiž.</b></td><td>12</td><td>11%</td><td>Humanizam, sonet, blank verse, tragedija, komedija</td></tr>
          <tr><td>Čitanje neknj. teksta</td><td>10</td><td>9%</td><td>Ulomci o renesansi, humanizmu, Shakespeareu</td></tr>
          <tr><td>Primjena ustroja</td><td>5</td><td>5%</td><td>—</td></tr>
        </tbody>
      </table>
    </div>

    <!-- SEKCIJA 03: KONTEKST RENESANSE -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Kontekst renesanse — prijelom u mišljenju</div><div class="sec-line"></div></div>

    <div class="prose">Riječ „renesansa” (fr. <em>renaissance</em>) znači <strong>preporod</strong> — preporod antičke kulture koja je „zaboravljena” u srednjem vijeku. Ali pravi preporod bio je dublji: <em>čovjek se vraća u središte slike svijeta</em>. Evo 5 okvira koji definiraju epohu:</div>

    <div class="con">
      <div class="cr"><div class="ck br">14.–17. st.</div><div class="cv"><b>Vremenski okvir.</b> Počinje u Italiji (Firenca) u 14. st. s Petrarcom, širi se preko Europe. <em>Rana renesansa</em> (14.–15. st., Petrarca, Boccaccio, Donatello) · <em>Zrela renesansa</em> (15.–16. st., Leonardo, Michelangelo, Rafael) · <em>Kasna / sjeverna</em> (16.–17. st., Shakespeare, Cervantes).</div></div>
      <div class="cr"><div class="ck go">ANTROPOCENTRIZAM</div><div class="cv"><b>Čovjek u središtu.</b> Za razliku od srednjovjekovnog <em>teocentrizma</em>, renesansa vraća čovjeka kao mjeru svih stvari. Shakespeare: „What a piece of work is a man!” Čovjek je vrijedan sam po sebi, ne zbog odnosa prema Bogu.</div></div>
      <div class="cr"><div class="ck pa">HUMANIZAM</div><div class="cv"><b>Povratak antičkim autorima.</b> Humanisti (<em>studia humanitatis</em>) traže rukopise po europskim samostanima. Vraćaju Platona, Aristotela, Cicerona. Petrarca osobno prepisuje Homera. Latinski se „čisti” do klasične forme.</div></div>
      <div class="cr"><div class="ck te">TISKARSKI STROJ</div><div class="cv"><b>1440., Gutenberg.</b> Tiskarski stroj s pokretnim slovima mijenja sve — knjiga postaje dostupna. Prije Gutenberga Europa je imala oko 30 000 knjiga, do 1500. preko 9 milijuna. <em>Shakespeareove drame mogu se tiskati i proširiti — nemoguće prije.</em></div></div>
      <div class="cr"><div class="ck re">REFORMACIJA</div><div class="cv"><b>1517., Luther.</b> Martin Luther objavljuje 95 teza — početak protestantske reformacije. Cijepa se katolička Europa. Engleska prelazi u protestantizam (pod Henrikom VIII., 1534.) — to je kontekst u kojem Shakespeare piše.</div></div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">🔑 Ključna razlika — srednji vijek vs renesansa</div>
      <div class="box-key-txt">
        <strong>Srednji vijek pita:</strong> „<em>Kakva je moja duša pred Bogom?</em>” (teocentrizam).<br>
        <strong>Renesansa pita:</strong> „<em>Tko sam ja kao pojedinac — kao čovjek?</em>” (antropocentrizam).<br>
        Shakespeareov Hamlet — čovjek koji pita o vlastitoj egzistenciji. Cervantesov Don Quijote — pojedinac koji stvara vlastitu stvarnost. To nije moglo nastati u srednjem vijeku.
      </div>
    </div>

    <div id="h03-react-timeline-renesansa"></div>

    <!-- SEKCIJA 04: SHAKESPEARE KAO AUTOR -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · William Shakespeare — autor i opus</div><div class="sec-line"></div></div>

    <div id="h03-react-author-shakespeare"></div>

    <div class="prose"><strong>William Shakespeare (1564.–1616.)</strong> je najveći dramatičar engleske i svjetske književnosti. Rođen u Stratford-upon-Avon, neprepoznato srednjoklasno podrijetlo, no u zrelim godinama suvlasnik kazališta <em>The Globe</em> u Londonu. Napisao <strong>38 drama</strong> i <strong>154 soneta</strong> — sve u 20-ak godina aktivnog rada.</div>

    <div class="sg">
      <div class="sc"><span class="sc-ico si-br">DOBA</span><div class="sc-name">Elizabetansko doba</div><div class="sc-desc">Vladavina Elizabete I. (1558.–1603.). Engleska — trgovačka sila, otkriva Novi svijet, podiže kazalište na umjetničku razinu. Najproduktivnije razdoblje engleske književnosti.</div></div>
      <div class="sc"><span class="sc-ico si-go">KAZALIŠTE</span><div class="sc-name">The Globe</div><div class="sc-desc">Okruglo javno kazalište u Londonu (1599.). Publika od 3000 ljudi — od plemića u ložama do pučana koji stoje u jami. Shakespeare pisao za <em>sve slojeve istovremeno</em>.</div></div>
      <div class="sc"><span class="sc-ico si-r">STIH</span><div class="sc-name">Blank verse</div><div class="sc-desc">Nerimovani <em>jampski pentametar</em> — 5 jambskih stopa po stihu (kratak-dug, 5 puta). Standard Shakespeareovih drama. Plemići govore u stihu, obični ljudi u prozi — to je <b>znak klase</b>.</div></div>
      <div class="sc"><span class="sc-ico si-t">OPUS</span><div class="sc-name">38 drama + 154 soneta</div><div class="sc-desc">Tri faze: rano razdoblje (komedije + kraljevske drame), zrelo razdoblje (velike tragedije), kasno razdoblje (romance). Ukupno: 37–39 drama (točan broj sporan).</div></div>
    </div>

    <div id="h03-react-timeline-shakespeare"></div>

    <div class="box-20">
      <div class="b20-lbl">📌 Shakespeareovi žanrovi — što piše kada</div>
      <ol class="b20-list b20-numbered">
        <li class="b20-item"><span class="b20-num">1</span><div class="b20-txt"><b>KOMEDIJE (rano).</b> <em>San ljetne noći</em>, <em>Mnogo vike ni za što</em>, <em>Dvanaesta noć</em>, <em>Ukroćena goropadnica</em>. Ljubav, zabune, sretni završetak. Testiranje konvencija renesansne komedije.</div></li>
        <li class="b20-item"><span class="b20-num">2</span><div class="b20-txt"><b>KRALJEVSKE DRAME (rano-srednje).</b> <em>Henrik IV., V., VI.</em>, <em>Rikard II., III.</em>. Povijesne drame o engleskim kraljevima. Politika, moć, nacionalni identitet.</div></li>
        <li class="b20-item"><span class="b20-num">3</span><div class="b20-txt"><b>VELIKE TRAGEDIJE (zrelo doba).</b> <em>Hamlet</em> (~1601.), <em>Othello</em> (~1603.), <em>Kralj Lear</em> (~1606.), <em>Macbeth</em> (~1606.). Psihološka dubina, moralna ambivalentnost. <em>Romeo i Julija</em> (~1595.) je ranija — ljubavna, ne egzistencijalna tragedija.</div></li>
        <li class="b20-item"><span class="b20-num">4</span><div class="b20-txt"><b>ROMANCE (kasno).</b> <em>Zimska priča</em>, <em>Oluja</em> (1611., njegovo posljednje djelo). Mješavina komedije i tragedije, magijski elementi, refleksija o umjetnosti.</div></li>
      </ol>
    </div>

    <!-- SEKCIJA 05: SHAKESPEARE — OSTALE VELIKE DRAME I SONETI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Shakespeareova druga velika djela</div><div class="sec-line"></div></div>

    <div class="prose">Hamlet dobiva poseban tab (Tab 1) jer je obvezatno čitanje 2026. Ovdje je pregled <em>ostalih Shakespeareovih djela</em> koja su korisna za kontekst i komparaciju u eseju:</div>

    <div id="h03-react-cetiri-tragedije"></div>

    <div class="box-tip">
      <div class="bt-title">📌 SHAKESPEAREOV vs PETRARKIN SONET</div>
      <div class="bt-txt">
        <strong>Petrarkin sonet:</strong> 2 kvartine (ABBA ABBA) + 2 tercete (CDE CDE ili sl.) = <em>8+6</em>. Nagli zaokret u misli („volta”) između 8. i 9. stiha.<br>
        <strong>Shakespeareov sonet:</strong> 3 kvartine (ABAB CDCD EFEF) + 1 distih (GG) = <em>12+2</em>. „Volta” prije završnog distiha. Distih daje <em>pointu</em> ili paradoks. Formalno fleksibilniji.
      </div>
    </div>

    <!-- SEKCIJA 06: OSTALI EUROPSKI RENESANSNI AUTORI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · Cervantes, Petrarca, Boccaccio — ostali renesansni autori</div><div class="sec-line"></div></div>

    <div id="h03-react-author-cervantes"></div>

    <div class="prose">Shakespeare nije sam. Renesansa proizvodi još tri ključna autora koje maturant mora znati. <em>Petrarca i Boccaccio</em> — talijanski ranorenesansni pisci (kontekst iz H02 — „pretece renesanse”); ovdje ih gledamo kao potpune renesansne autore. <em>Cervantes</em> — španjolski, kasnorenesansni.</div>

    <div class="sg">
      <div class="sc"><span class="sc-ico si-br">CERVANTES</span><div class="sc-name">Don Quijote (1605./1615.)</div><div class="sc-desc"><b>Miguel de Cervantes (1547.–1616.)</b> — španjolski pisac. <em>Don Quijote od Manche</em> u 2 dijela. Osiromašeni plemić čita previše viteških romana, poludi i krene „vitezovati” — uvjeren da su vjetrenjače divovi, a seoska djevojka plemenita dama Dulcineja. <b>Parodija viteškog romana koja postaje prvi moderni roman.</b> Tema: sukob ideala i stvarnosti.</div></div>
      <div class="sc"><span class="sc-ico si-go">PETRARCA</span><div class="sc-name">Kanconijer (Canzoniere)</div><div class="sc-desc"><b>Francesco Petrarca (1304.–1374.)</b> — talijanski humanist. <em>Kanconijer</em> — zbirka od 366 pjesama (većinom soneta) posvećenih <em>Lauri</em> (umrla u kugi 1348.). <b>Petrarkizam</b> — stil koji 300 godina dominira europskom ljubavnom lirikom: idealizirana dama, unutarnji sukob pjesnika, antiteze (oganj/led, život/smrt).</div></div>
      <div class="sc"><span class="sc-ico si-r">BOCCACCIO</span><div class="sc-name">Dekameron (1348.–1353.)</div><div class="sc-desc"><b>Giovanni Boccaccio (1313.–1375.)</b> — talijanski humanist, Petrarkin prijatelj. <em>Dekameron</em> — zbirka od <b>100 novela</b>. 10 mladih ljudi bježi iz okužene Firence, pričaju priče 10 dana. <b>Prvi zbirka novela u europskoj književnosti.</b> Tema: ljubav, lukavost, ljudske mane — <em>bez religijske pouke</em>.</div></div>
      <div class="sc"><span class="sc-ico si-t">RABELAIS</span><div class="sc-name">Gargantua i Pantagruel</div><div class="sc-desc"><b>François Rabelais (~1494.–1553.)</b> — francuski renesansni pisac, bivši redovnik. Satirična pentalogija o dva divovska kralja. Humor, jezična igra, parodija srednjovjekovne učenosti. Rabelaisov stil = <em>rableovski humor</em> (grubi, tjelesni, prepun parodije).</div></div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 RENESANSNI ŽANROVI — što je novo u ovom razdoblju</div>
      <div class="box-signal-txt">
        Renesansa <strong>izmišlja ili preoblikuje</strong> sljedeće žanrove koji traju do danas:<br>
        <b>1. Moderni roman</b> (Cervantes, <em>Don Quijote</em>) · <b>2. Novela kao kratka priča</b> (Boccaccio, <em>Dekameron</em>) ·
        <b>3. Sonet</b> (Petrarca standardizira, Shakespeare modificira) · <b>4. Psihološka tragedija</b> (Shakespeare, <em>Hamlet</em>) ·
        <b>5. Commedia dell'arte</b> (talijanska improvizacijska komedija, 16. st.).
      </div>
    </div>

    <!-- AUTHORITY BOX — link na službeni NCVVO katalog (v3.6) -->
    <div class="auth-box">
      <div class="auth-ico">🏛️</div>
      <div class="auth-body">
        <div class="auth-ttl">Usklađeno s NCVVO ispitnim katalogom</div>
        <div class="auth-txt">Sadržaj ove skripte prati službeni <strong>Ispitni katalog za državnu maturu — Hrvatski jezik</strong> koji izdaje Nacionalni centar za vanjsko vrednovanje obrazovanja.</div>
        <div class="auth-links">
          <a href="https://www.ncvvo.hr/ispitni-katalozi-za-drzavnu-maturu-2025-2026/" target="_blank" rel="noopener noreferrer" class="auth-link" onclick="track('ext_link_click',{target:'ncvvo_katalozi'},'engagement')">
            Svi katalozi 2025/2026 ›
          </a>
          <a href="https://www.ncvvo.hr/wp-content/uploads/2025/09/HRV-2026.pdf" target="_blank" rel="noopener noreferrer" class="auth-link" onclick="track('ext_link_click',{target:'ncvvo_hrv_pdf'},'engagement')">
            Hrvatski jezik · PDF ›
          </a>
        </div>
      </div>
    </div>

    <!-- == QUICK REFERENCE CARD (cheat sheet za pred-ispit) == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · Pred-ispit cheat sheet</div><div class="sec-line"></div></div>

    <div class="cheat-card">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">QUICK REFERENCE · 30 MIN PRIJE ISPITA</div>
          <div class="cheat-ttl">Sve što moraš pamtiti — H03</div>
        </div>
        <button class="cheat-print" onclick="printCheatSheet()" aria-label="Ispiši cheat sheet">🖨️ Ispiši</button>
      </div>

      <div class="cheat-grid">
        <!-- Datumi & autori -->
        <div class="cheat-col">
          <div class="cheat-col-ttl">📅 Datumi & autori</div>
          <table class="cheat-tbl">
            <tr><td><b>14. st.</b></td><td>Petrarca · <em>Kanconijer</em></td></tr>
            <tr><td><b>1348.–53.</b></td><td>Boccaccio · <em>Dekameron</em></td></tr>
            <tr><td><b>1440.</b></td><td>Gutenbergov tiskarski stroj</td></tr>
            <tr><td><b>1517.</b></td><td>Luther · reformacija</td></tr>
            <tr><td><b>1564.–1616.</b></td><td>Shakespeare</td></tr>
            <tr><td><b>~1595.</b></td><td><em>Romeo i Julija</em></td></tr>
            <tr><td><b>1547.–1616.</b></td><td>Cervantes</td></tr>
            <tr><td><b>1605./1615.</b></td><td><em>Don Quijote</em> (prvi moderni roman)</td></tr>
            <tr><td><b>~1601.</b></td><td><em>Hamlet</em></td></tr>
            <tr><td><b>1609.</b></td><td>Shakespeareovi <em>Soneti</em> · 154 komada</td></tr>
          </table>
        </div>

        <!-- Pojmovi koji najčešće dolaze -->
        <div class="cheat-col">
          <div class="cheat-col-ttl">📌 Top pojmovi (često na maturi)</div>
          <ul class="cheat-list">
            <li><b>Humanizam</b> = kulturni pokret, povratak antici</li>
            <li><b>Antropocentrizam</b> = čovjek u središtu (renesansa)</li>
            <li><b>Blank verse</b> = nerimovani jampski pentametar</li>
            <li><b>Jampski pentametar</b> = 5 jambskih stopa po stihu</li>
            <li><b>Petrarkin sonet</b> = 8+6, rima ABBA ABBA CDE CDE</li>
            <li><b>Shakespeareov sonet</b> = 12+2, rima ABAB CDCD EFEF GG</li>
            <li><b>Petrarkizam</b> = stil idealizirane ljubavi (oganj/led)</li>
            <li><b>Tragedija</b> = pad junaka, 5 činova, aristotelovska forma</li>
            <li><b>Commedia dell'arte</b> = talijanska improvizacijska komedija</li>
            <li><b>Novela</b> = kratka pripovijetka (Boccaccio)</li>
            <li><b>Moderni roman</b> = prvi je <em>Don Quijote</em> (1605.)</li>
            <li><b>Star-crossed lovers</b> = ljubavnici protiv kojih su zvijezde</li>
          </ul>
        </div>

        <!-- Hamlet — esencijalno -->
        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">📖 Hamlet — esencijalno za esej (obvezatno 2026)</div>
          <div class="cheat-grid-inner">
            <div>
              <div class="cheat-mini-ttl">Autor · godina · vrsta</div>
              <div class="cheat-mini-txt"><b>Shakespeare, ~1600./1601.</b> Tragedija u 5 činova. Blank verse (jampski pentametar) + proza za niže likove. Izvor: Saxo Grammaticus › Belleforest.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Mjesto · protagonist</div>
              <div class="cheat-mini-txt"><b>Elsinor (Helsingör)</b>, danski kraljevski dvor. <b>Princ Hamlet</b> — student iz Wittenberga. Otac ubijen od strica Klaudija.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">5 centralnih sukoba</div>
              <div class="cheat-mini-txt">
                1. <em>Osveta</em> vs <em>moralnost</em><br>
                2. <em>Razum</em> vs <em>strast</em> (Hamletova dilema)<br>
                3. <em>Stvarnost</em> vs <em>pretvaranje</em> (Elsinor kao kazalište)<br>
                4. <em>Život</em> vs <em>smrt</em> (memento mori)<br>
                5. <em>Pojedinac</em> vs <em>korumpirani svijet</em>
              </div>
            </div>
            <div>
              <div class="cheat-mini-ttl">3 paralelne obitelji — osvetnici</div>
              <div class="cheat-mini-txt">
                1. <em>Hamlet</em> — oklijeva, analizira<br>
                2. <em>Laert</em> — odmah djeluje<br>
                3. <em>Fortinbras</em> — čeka, strategija<br>
                <b>Jedini preživjeli: Fortinbras</b>
              </div>
            </div>
          </div>
        </div>

        <!-- Shakespeare — ostala djela -->
        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">📌 Shakespeare — ostale velike drame</div>
          <div class="cheat-grid-inner">
            <div>
              <div class="cheat-mini-ttl">Romeo i Julija (~1595.)</div>
              <div class="cheat-mini-txt"><em>Star-crossed lovers.</em> Verona, dvije zavađene obitelji. Ljubavna, ne egzistencijalna tragedija. Kontrast Hamletu.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Othello (~1603.)</div>
              <div class="cheat-mini-txt">Tragedija ljubomore. Mletački general ubija ženu zbog manipulacije Jaga. Tema rasizma, povjerenja.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Macbeth (~1606.)</div>
              <div class="cheat-mini-txt">„Škotska tragedija”. Ambicija vodi u ubojstvo kralja. Lady Macbeth — kompleksan ženski lik.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Soneti (1609.) · Kralj Lear (~1606.)</div>
              <div class="cheat-mini-txt"><b>154 soneta.</b> Fair Youth (1–126), Dark Lady (127–154). Kralj Lear — tragedija ludila, izdaja kćeri.</div>
            </div>
          </div>
        </div>

        <!-- Esej struktura -->
        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">📌 Esej — struktura u 6 koraka</div>
          <ol class="cheat-steps">
            <li><b>Uvod</b> — kontekst djela + autora + jasna teza (1 rečenica)</li>
            <li><b>Razrada 1</b> — povijesni kontekst renesanse + povezivanje s tezom</li>
            <li><b>Razrada 2</b> — centralni sukob ili scena (Hamlet: „Biti ili ne biti”, Yorick, Mišolovka) + citat</li>
            <li><b>Razrada 3</b> — povezivanje s drugim djelom (R&J, Othello) ili razdobljem (antika, barok)</li>
            <li><b>Zaključak</b> — odgovor na polazno pitanje, povratak na tezu</li>
            <li><b>Provjera</b> — minimum 440 riječi, slijed teze, gramatika, HR navodnici</li>
          </ol>
        </div>

        <!-- Što NE smiješ -->
        <div class="cheat-col cheat-col-wide cheat-col-warn">
          <div class="cheat-col-ttl">📌 Što NE smiješ na ispitu</div>
          <ul class="cheat-list cheat-list-warn">
            <li>Reći da Hamlet oklijeva iz <em>kukavičluka</em> — oklijeva iz <b>moralne savjesti</b>. On sam kaže: „Tako savjest čini kukavice od svih nas”</li>
            <li>Brkati <b>Hamleta (sina, princa)</b> i <b>Hamleta (oca, Duha)</b> — oba se zovu Hamlet, precizno imenuj koga misliš</li>
            <li>Izjednačavati Hamletovo <em>glumljeno ludilo</em> (antic disposition) s Ofelijinim <b>stvarnim ludilom</b></li>
            <li>Ignorirati <b>Fortinbrasa</b> — on je treći osvetnik i jedini preživjeli, dobiva dansko prijestolje</li>
            <li>Brkati <b>petrarkin sonet</b> (8+6, ABBA ABBA) s <b>Shakespeareovim sonetom</b> (12+2, ABAB CDCD EFEF GG)</li>
            <li>Reći da je Shakespeare pisao na <em>srednjoenglještini</em> — pisao je na <b>ranomodernom engleskom</b></li>
            <li>Pisati esej kraći od 440 riječi (esej se NE vrednuje)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">🇭🇷 HRVATSKA PARALELA — renesansa u Dalmaciji (› H12)</div>
      <div class="box-signal-txt">
        Dok Shakespeare piše <em>Hamleta</em> u Londonu (1601.), <strong>Marulić</strong> je sto godina ranije napisao <strong>Juditu</strong> (1501.) u Splitu — prvi veliki ep na hrvatskom jeziku i najranije djelo europskog humanizma nastalo u Hrvatskoj. Hrvatska renesansa nije zakašnjela kopija; razvija se paralelno, s vlastitim temama: <b>kršćanska etika + turska prijetnja + dubrovačka sloboda</b>.<br><br>
        <b>Za esej:</b> Judita nije na popisu 2026. ispitnih djela — ali kao kontekstualni argument uz Petrarcu ili Shakespearea nosi bonus bodove. Detaljno: <b>H12 · Marulić i hrvatska renesansa</b>.
      </div>
    </div>

    <div id="h03-react-pop-kultura"></div>

    <div class="nav-row">
      <span class="nb off">‹ Prethodno</span>
      <span class="nb primary" onclick="sw(1)">📖 Hamlet deep-dive ›</span>
    </div>
  </div>
  <!-- ========================
       TAB 1 · ROMEO I JULIJA DEEP-DIVE
       ======================== -->
  <div class="layer" id="l1" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">~1601. godina</span>
      <span class="pill p-go">tragedija · 5 činova</span>
      <span class="pill p-r">blank verse</span>
      <span class="pill p-t">obvezatno čitanje 2026</span>
      <span class="pill p-pa">Shakespeare</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Zašto Hamlet zaslužuje poseban tab</div>
      <div class="box-int-txt">
        <strong>Hamlet</strong> (oko 1600./1601.) je <strong>obvezatno čitanje po NCVVO ispitnom katalogu za 2026.</strong> Najpoznatija i najutjecajnija tragedija Williama Shakespearea, i vjerojatno najčešće analizirano djelo svjetske književnosti. Kroz sudbinu danskog kraljevića koji mora osvetiti ubijenoga oca, Shakespeare postavlja pitanja <em>osvete i moralne odgovornosti, smrti i besmrtnosti, razuma i strasti, ludila i pretvaranja</em>. Monolog „<b>Biti ili ne biti</b>” postao je sinonim za egzistencijalnu dilemu čovjeka uopće. Ovaj tab je tvoj kompletan vodič kroz sve što moraš znati za maturu.
      </div>
    </div>

    <div id="h03-react-hero-quote"></div>

    <!-- SEKCIJA 01: OSNOVNI PODACI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Osnovni podaci</div><div class="sec-line"></div></div>

    <div class="sg">
      <div class="sc"><span class="sc-ico si-br">AUTOR</span><div class="sc-name">William Shakespeare</div><div class="sc-desc">(1564. Stratford-upon-Avon – 1616.) Engleski dramatičar i pjesnik, najutjecajniji autor na engleskom jeziku. <em>Napisao oko 39 drama i 154 soneta.</em> Glumac i suvlasnik družine <b>Lord Chamberlain's Men</b> (od 1603. <b>King's Men</b>). Izvodili u kazalištu <em>The Globe</em> na obali Temze. Hamlet nastaje u vrhuncu njegovog stvaralaštva — 4 velike tragedije (Hamlet, Othello, Kralj Lear, Macbeth).</div></div>
      <div class="sc"><span class="sc-ico si-go">GODINA</span><div class="sc-name">~1600./1601.</div><div class="sc-desc">Napisano između 1599. i 1601. Prvo objavljeno u <b>Q1</b> (First Quarto) 1603. — kraća, nekvalitetna verzija (tzv. „bad quarto”). <em>Q2</em> (1604./05.) je autoritativno izdanje, najduža od Shakespeareovih drama (~4000 stihova, 4 sata izvedbe). <b>First Folio</b> (1623.) posmrtno konsolidira tekst.</div></div>
      <div class="sc"><span class="sc-ico si-r">VRSTA</span><div class="sc-name">Tragedija u 5 činova</div><div class="sc-desc">Klasična struktura u 5 činova (act). <b>Revenge tragedy</b> — tradicija osvetničke tragedije (uzori Seneka, Thomas Kyd <em>The Spanish Tragedy</em>). Shakespeare uzor preradio — osveta postaje <em>filozofski problem</em>, ne samo akcija. Mješavina tragedije, filozofske meditacije i crne komedije (grobari, Osric).</div></div>
      <div class="sc"><span class="sc-ico si-t">MJESTO RADNJE</span><div class="sc-name">Elsinor (Helsingör), Danska</div><div class="sc-desc">Danski kraljevski dvor u Elsinoru. Stvarna tvrđava <em>Kronborg</em> u danskom gradu Helsingöru. Shakespeare vjerojatno nikad nije bio tamo. Kontrastna mjesta: <b>dvor</b> (spletke, moć), <b>bedemi dvorca</b> (Duh, moralne odluke), <b>groblje</b> (smrt, Yorick), <b>Ofelijina soba / plemićki vrt</b> (intima, špijunaža).</div></div>
      <div class="sc"><span class="sc-ico si-pa">STIL</span><div class="sc-name">Blank verse + proza</div><div class="sc-desc">Dominira <b>blank verse</b> — nerimovan jampski pentametar (10 slogova). Monolozi, plemićki govori. Proza se koristi za komične i niže likove (grobari, Rosencrantz, Guildenstern), te kad Hamlet glumi ludilo. <em>Stih vs proza nosi dramsko značenje.</em></div></div>
      <div class="sc"><span class="sc-ico si-re">IZVOR</span><div class="sc-name">Amleth — nordijska legenda</div><div class="sc-desc">Shakespearev izvor: <b>Saxo Grammaticus</b> (<em>Gesta Danorum</em>, 12. st.), preko <b>Françoisa de Belleforesta</b> (<em>Histoires tragiques</em>, 1570.). Amleth (Hamlet) je legendarni danski princ koji osvećuje oca glumeći ludilo. <em>Shakespeare uzeo obrazac, dodao psihološku dubinu, Duha, Mišolovku, monologe.</em> Postoji i raniji <b>„Ur-Hamlet”</b> (možda Kydov, izgubljen).</div></div>
    </div>

    <div id="h03-react-stat-cards-hamlet"></div>

    <div class="box-signal">
      <div class="box-signal-lbl">🧠 POVIJESNI KONTEKST — kasna renesansa u Engleskoj</div>
      <div class="box-signal-txt">
        Hamlet nastaje na kraju vladavine <strong>Elizabete I.</strong> (†1603.). Engleska je renesansa u punom zamahu — <b>Marlowe</b>, <b>Ben Jonson</b>, <b>Spenser</b>. Ali iza sjaja je nesigurnost: <em>Elizabeta nema nasljednika, nizozemski ratovi, prijetnja Armade, katoličke zavjere</em>. Engleska je napeta, paranoiidna, politički opasna — <b>Hamletov Elsinor zrcali to raspoloženje</b>. Špijunaža, dvorske intrige, neizvjesnost tko će naslijediti prijestolje — sve je tu.
      </div>
    </div>

    <!-- SEKCIJA 02: RADNJA U 7 ETAPA -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Radnja — 5 činova, 7 ključnih etapa</div><div class="sec-line"></div></div>

    <div class="prose">Hamlet je kompleksan — ali strukturalno jasan. Radnja se može sažeti u <strong>7 ključnih etapa</strong> raspoređenih kroz 5 činova.</div>

    <div id="h03-react-timeline-radnja"></div>

    <!-- SEKCIJA 03: DRAMATIS PERSONAE -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Likovi — tko je tko u Elsinoru</div><div class="sec-line"></div></div>

    <div id="h03-react-svg-likovi"></div>

    <div class="prose">Hamlet ima <strong>veliki ansambl</strong>, ali za maturu moraš poznavati <em>10 ključnih likova</em> i njihove odnose. Drama je <b>o obitelji</b> — 3 obitelji koje se sudaraju.</div>

    <div class="tbl">
      <table>
        <thead><tr><th>Lik</th><th>Uloga</th><th>Karakterizacija · Simbolika</th></tr></thead>
        <tbody>
          <tr><td><b>Hamlet</b></td><td>Danski princ, protagonist</td><td><em>Mladić ~30 godina</em>, student iz Wittenberga (protestantski grad — Luther). Inteligentan, filozofski, melankoličan. <b>Centralna odlika: oklijevanje</b> („<em>Hamletova dilema</em>”). Dok Laert odmah djeluje, Hamlet analizira. <em>Renesansni čovjek</em> — misli previše da bi brzo djelovao.</td></tr>
          <tr><td><b>Duh oca (Hamlet stariji)</b></td><td>Otac-duh</td><td>Pokojni kralj Hamlet, otrovan od svojeg brata. <em>Ambivalentan lik</em>: je li to stvarno otac, ili Đavao koji kuša Hamleta? Dolazi u čistilište — katoličko učenje (u protestantskoj Engleskoj kontroverzno). <b>Pokretač osvete i cijele radnje</b>.</td></tr>
          <tr><td><b>Klaudije</b></td><td>Stric, novi kralj, antagonist</td><td>Hamletov stric — ubio brata, oženio udovicu Gertrudu. <em>Nije jednodimenzionalni zlikovac</em> — sposoban za ljubav (prema Gertrudi), kajanje (molitva u III činu). Vješt političar, makijavelistički. <b>„Osmjehnuti zlikovac” — smješka se dok intrigira.</b></td></tr>
          <tr><td><b>Gertruda</b></td><td>Majka, kraljica</td><td>Hamletova majka, udata za Klaudija dva mjeseca nakon muževljeve smrti. <em>Moralno dvosmislena.</em> Je li znala za ubojstvo? Shakespeare namjerno ne odgovara jasno. Voli Hamleta. <b>U finalu ispije otrov namijenjen sinu</b> — tragična ironija.</td></tr>
          <tr><td><b>Ofelija</b></td><td>Polonijeva kći, Hamletova ljubav</td><td>Mlada, nježna, poslušna ocu i bratu. Odbija Hamleta po očevoj zapovjedi. <em>Najčistija žrtva drame</em> — muški likovi je koriste u svojim planovima. <b>Stvarno poludi</b> (za razliku od Hamletovog glumljenog ludila), utapa se. Simbol nevinosti slomljene spletkama.</td></tr>
          <tr><td><b>Polonije</b></td><td>Kraljev komornik, Ofelijin otac</td><td>Starac, dvorski savjetnik. <em>Smatra se mudrim, ali je komičan</em> — dugotrajan, gleda kroz sebe. Šalje špijune svuda (čak na svoga sina Laerta). Hamlet ga ubija iza zavjese. <b>Simbol korumpirane dvorske politike</b>.</td></tr>
          <tr><td><b>Laert</b></td><td>Polonijev sin, Hamletov dvojnik</td><td>Ofelijin brat, student u Parizu. <em>Hamletov kontrast</em>: dok Hamlet oklijeva, Laert odmah djeluje — čim čuje za oca, vraća se u Dansku tražiti osvetu. <b>Oba traže osvetu za oca, oba umiru.</b> Laert je Hamletov „mogao bih biti” — čovjek akcije.</td></tr>
          <tr><td><b>Horacije</b></td><td>Hamletov najbolji prijatelj</td><td>Student iz Wittenberga, racionalni. Jedini kojem Hamlet vjeruje. <em>Nije princ, nije intrigant</em> — obični učeni čovjek. <b>Preživljava dramu</b> — njegova zadaća je ispričati priču svijetu. <em>„Goodnight, sweet prince.”</em></td></tr>
          <tr><td><b>Rosencrantz & Guildenstern</b></td><td>Lažni prijatelji-špijuni</td><td>Hamletovi stari školski prijatelji — Klaudije ih poziva u Elsinor da špijuniraju Hamleta. <em>Služe vlasti, ne prijateljstvu.</em> Hamlet ih pošalje u smrt u Englesku zamjenjujući Klaudijev nalog. <b>Simbol prodavanja integriteta moći.</b></td></tr>
          <tr><td><b>Fortinbras</b></td><td>Norveški princ</td><td>Junačiji princ susjedne zemlje — <em>Hamletov drugi dvojnik</em> (nakon Laerta). Otac mu je također ubijen (od Hamletovog oca), on već 20 godina sprema osvetu. <b>Dobiva dansko prijestolje na kraju</b> — jedini uspješni osvetnik. Shakespearova poruka: pravda dolazi, ali ne uvijek iz prave strane.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box-tip">
      <div class="bt-title">📌 3 PARALELNE OBITELJI — strukturalni ključ drame</div>
      <div class="bt-txt">
        Hamlet ima <strong>3 sina koji osvećuju oca</strong>:<br>
        <b>Hamlet (sin)</b> — otac ubijen od strica Klaudija. <em>Oklijeva, misli, sumnja.</em><br>
        <b>Laert (sin)</b> — otac Polonije ubijen od Hamleta. <em>Odmah djeluje, bez razmišljanja.</em><br>
        <b>Fortinbras (sin)</b> — otac Fortinbras stariji ubijen od Hamleta starijeg. <em>Čeka 20 godina, strategijski.</em><br>
        <b>Tri različita stava prema osveti</b> — Shakespeare kroz tri dvojnika ispituje što je ispravno. Na eseju: ako pitanje dotiče osvetu, ovaj okvir je zlato.
      </div>
    </div>

    <!-- SEKCIJA 04: CENTRALNI SUKOBI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Centralni sukobi — filozofske dileme drame</div><div class="sec-line"></div></div>

    <div class="prose">Hamlet je <em>tragedija misli, ne akcije</em>. Shakespeare postavlja 5 filozofskih sukoba koja drama istražuje.</div>

    <div id="h03-react-accordion-sukobi"></div>

    <div class="box-warn">
      <div class="bw-ico">📌</div>
      <div class="bw-body">
        <div class="bw-title">HAMLETOVA DILEMA — pojam koji moraš znati</div>
        <div class="bw-txt"><strong>„Hamletova dilema”</strong> ušla je u kulturu kao sinonim za <em>paralizu zbog prekomjernog razmišljanja</em>. Psihologija, filozofija, politika — svi koriste pojam. Shakespeare stvara arhetip. Na eseju: kad govoriš o modernom čovjeku koji oklijeva, može se povezati s Hamletovom dilemom. <b>T.S. Eliot je čak rekao: „Hamlet je Mona Liza književnosti” — vječita zagonetka.</b></div>
      </div>
    </div>

    <!-- SEKCIJA 05: KLJUČNE SCENE -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Ključne scene — što moraš pamtiti</div><div class="sec-line"></div></div>

    <div class="prose">Ako imaš 10 minuta pred maturu, ponovi ovih šest scena. Iz njih se može argumentirati bilo koja teza.</div>

    <div id="h03-react-accordion-kljucne"></div>

    <div class="box-signal">
      <div class="box-signal-lbl">💡 SIMBOLI DRAME — čitaj kao šifru</div>
      <div class="box-signal-txt">
        <b>Lubanja (Yorick)</b> — memento mori, demokratizacija smrti.<br>
        <b>Otrov u uhu</b> — izdaja kroz riječ. Klaudije ubija ocem + zavodi Gertrudu „otrovnim riječima”.<br>
        <b>Zavjesa (arras)</b> — špijunaža, skrivanje. Iza nje gine Polonije, iz njih Shakespeare crpi napetost.<br>
        <b>Ogledalo</b> — Hamlet glumcima: „<em>to hold the mirror up to nature</em>”. Umjetnost kao zrcalo stvarnosti.<br>
        <b>Cvijeće (Ofelija)</b> — ruzmarin za sjećanje, ljubica za vjernost. Ofelija dijeli cvijeće u ludilu.<br>
        <b>Pismo</b> — Klaudijev tajni nalog; Hamlet ga mijenja i spašava se.<br>
        <b>Duh</b> — prošlost koja progoni sadašnjost. Je li stvaran? Dvosmisleno.
      </div>
    </div>

    <!-- SEKCIJA 06: TEME I MOTIVI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · Teme i motivi</div><div class="sec-line"></div></div>

    <div class="prose">Ako esej pita o temi ili motivu, Hamlet ti daje pet sigurnih pravaca.</div>

    <div class="con">
      <div class="cr"><div class="ck br">OSVETA</div><div class="cv"><b>Centralna tema.</b> Tri sina osvećuju oca (Hamlet, Laert, Fortinbras) — tri različita pristupa. Shakespeare ne glorificira osvetu — <em>svi osvetnici pate</em>. Klaudije preuzima prijestolje ubojstvom, Laert umire od vlastitog otrova, Hamlet umire upravo kad uspije. <b>Osveta kao ciklus smrti.</b></div></div>
      <div class="cr"><div class="ck go">OKLIJEVANJE</div><div class="cv"><b>„Hamletova dilema”.</b> Princ <em>previše misli da bi brzo djelovao</em>. Shakespeare kroz to istražuje moderni razum — onaj koji je svjestan moralnih posljedica i zato paraliziran. <em>„Tako savjest čini kukavice od svih nas”</em> — Hamletova reflekcija. Arhetip za 20. st. (Dostojevski, Kafka, Camus).</div></div>
      <div class="cr"><div class="ck pa">LJUDSKA PRIRODA I IZDAJA</div><div class="cv"><b>Svi izdaju.</b> Klaudije izdaje brata. Gertruda izdaje uspomenu muža. Polonije izdaje Ofeliju. Rosencrantz i Guildenstern izdaju Hamleta. Jedino Horacije ostaje vjeran. <em>Shakespeare postavlja pitanje:</em> <b>je li ljudska priroda iskonski korumpirana?</b> Odgovor drame je turoban.</div></div>
      <div class="cr"><div class="ck t">LUDILO — glumljeno i pravo</div><div class="cv"><b>Dva ludila.</b> <em>Hamletovo</em> je glumljeno (<em>antic disposition</em>) — strategijska maska. <em>Ofelijino</em> je pravo — ishod traume (mrtvi otac, Hamletovo odbacivanje). <b>Ironija:</b> Hamlet koji glumi ludilo preživljava duže od Ofelije koja je iskrena. Shakespeare kritizira društvo koje uništava iskrene.</div></div>
      <div class="cr"><div class="ck re">SMRT I BESMRTNOST</div><div class="cv"><b>Memento mori u renesansi.</b> Od Duha u I činu do Yorickove lubanje u V činu, drama je <em>preokupirana smrću</em>. Hamlet razmatra samoubojstvo, što se događa nakon smrti, čega se trebamo bojati. <b>Hamletova zadnja riječ: „The rest is silence”</b> — smrt kao tišina. Horacije zahtijeva priču — <em>besmrtnost kroz naraciju</em>.</div></div>
    </div>

    <!-- SEKCIJA 07: HAMLET KAO RENESANSNO DJELO -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">07 · Hamlet kao renesansno djelo — kontekst i značaj</div><div class="sec-line"></div></div>

    <div class="prose">Zašto je Hamlet renesansna tragedija, a ne srednjovjekovna niti klasicistička? Pet ključnih obilježja:</div>

    <div class="box-20">
      <div class="b20-lbl">📖 Hamlet kao vrhunac renesansne drame</div>
      <ol class="b20-list b20-numbered">
        <li class="b20-item"><span class="b20-num">1</span><div class="b20-txt"><b>ANTROPOCENTRIZAM.</b> U središtu je <em>čovjek, a ne Bog</em>. Hamlet ne pita Boga što raditi — <b>pita samog sebe</b>. Monolozi su unutrašnji dijalog, ne molitve. Renesansni humanizam u najčišćem obliku.</div></li>
        <li class="b20-item"><span class="b20-num">2</span><div class="b20-txt"><b>PSIHOLOŠKA DUBINA.</b> Shakespeare <em>stvara moderni subjekt</em>. Srednjovjekovni likovi su tipovi (vitez, svetac), Hamlet je individua sa svojim mislima, sumnjama, oklijevanjem. Harold Bloom je napisao da je „<em>Shakespeare izumio čovjeka</em>” — misleći na Hamleta.</div></li>
        <li class="b20-item"><span class="b20-num">3</span><div class="b20-txt"><b>MJEŠAVINA STILOVA.</b> Renesansno slobodno miješanje tragičnog i komičnog (grobari, Osric, Polonijeve glupavosti). <em>Klasicizam to ne bi dopustio</em> (strogo odvajanje žanrova). Shakespearova fleksibilnost › moderna drama.</div></li>
        <li class="b20-item"><span class="b20-num">4</span><div class="b20-txt"><b>NEPOŠTIVANJE 3 JEDINSTAVA.</b> Radnja traje <em>više mjeseci</em>, kreće se između Elsinora, Engleske, mora. Velik broj likova. Shakespeare slijedi engleski renesansni model, ne aristotelovsko-klasicistički. <b>Kontrast sa kasnijim Racineom i Corneilleom.</b></div></li>
        <li class="b20-item"><span class="b20-num">5</span><div class="b20-txt"><b>INDIVIDUALNO NASUPROT KOLEKTIVNO.</b> Hamlet je <em>protiv cijelog dvora</em> — protiv Klaudija, protiv majke, protiv lažnih prijatelja. Renesansni pojedinac stoji sam. Suprotstavljeno srednjem vijeku, gdje je čovjek definiran pripadnošću (viteški red, ceh, crkva).</div></li>
      </ol>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">💡 HAMLET I NAKNADNA KULTURA — zašto je važan danas</div>
      <div class="box-key-txt">
        Hamlet je <strong>najadaptiranije djelo svjetske književnosti</strong>. Utjecao je na:<br>
        <b>Romantizam (H06):</b> Byron, Goethe (Faust); svi romantičari tretiraju Hamleta kao „moderne junake”.<br>
        <b>19. st.:</b> Dostojevski (braća Karamazov — ubojstvo oca, osveta), Ibsen (Peer Gynt).<br>
        <b>20. st.:</b> Freud (Oedipov kompleks — Hamlet kao primjer), Joyce (Ulysses), T.S. Eliot (<em>The Love Song of J. Alfred Prufrock</em> kao „moderni Hamlet”).<br>
        <b>Filmovi:</b> Laurence Olivier (1948., Oscar), Kenneth Branagh (1996., 4 sata), Disney „Lion King” (slobodna adaptacija — Simba = Hamlet).<br>
        <b>Poznata parola:</b> „Biti ili ne biti” ušla u sve jezike.
      </div>
    </div>

    <div id="h03-react-usporedba-romeo"></div>
    <div id="h03-react-usporedba-antigona"></div>

    <!-- SEKCIJA 08: SHAKESPEAREOV OPUS + VIDEO RESURSI -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">08 · Shakespeareov opus i video resursi</div><div class="sec-line"></div></div>

    <div id="h03-react-svg-globe"></div>

    <div class="prose">Shakespeare je napisao ~39 drama. Za maturu moraš znati ove osnovne kategorije:</div>

    <div class="box-key">
      <div class="box-key-lbl">💡 Shakespeareov opus — 4 faze i ključna djela</div>
      <div class="box-key-txt">
        <strong>1. Rane komedije (1590-e):</strong> <em>San ivanjske noći</em>, <em>Mletački trgovac</em>, <em>Mnogo vike ni za što</em>, <em>Kako vam drago</em>. Lakoća, ljubav, zabuna.<br>
        <strong>2. Povijesne drame (1590-e):</strong> <em>Richard III</em>, <em>Henry V</em>, <em>Julije Cezar</em>. Engleska i rimska povijest, moć.<br>
        <strong>3. Velike tragedije (1599.–1607.):</strong> <em>Hamlet</em> (~1601.), <em>Othello</em> (~1603.), <em>Kralj Lear</em> (~1606.), <em>Macbeth</em> (~1606.). Vrhunac. Psihološka dubina, moralna ambivalentnost. <b>Hamlet je najraniji i najutjecajniji.</b><br>
        <strong>4. Kasne romance (1608.–1613.):</strong> <em>Oluja</em>, <em>Zimska priča</em>, <em>Cymbeline</em>. Magija, pomirenje, oprost. <em>Oluja</em> je Shakespearov oproštaj s teatrom.<br>
        <strong>+ Soneti:</strong> 154 soneta (objavljeni 1609.). Najpoznatiji: <em>Sonet 18</em> („<em>Shall I compare thee to a summer's day?</em>”).
      </div>
    </div>

    <div class="prose">Video i tekstualni resursi za dublje razumijevanje:</div>

    <div class="yt-grid">
      <a href="https://www.lektire.hr/hamlet/" target="_blank" rel="noopener noreferrer" class="yt-card" onclick="track('ext_link_click',{target:'lektire_hamlet'},'engagement')">
        <div class="yt-thumb">▶</div>
        <div class="yt-body">
          <div class="yt-title">Lektire.hr — Hamlet</div>
          <div class="yt-desc">Hrvatski kratki sadržaj, analiza likova, ključni citati. Najdetaljniji resurs na hrvatskom.</div>
          <div class="yt-meta"><span>🌐 Web</span><span>🇭🇷 Hrvatski</span></div>
        </div>
      </a>
      <a href="https://hr.wikipedia.org/wiki/Hamlet" target="_blank" rel="noopener noreferrer" class="yt-card" onclick="track('ext_link_click',{target:'wiki_hamlet'},'engagement')">
        <div class="yt-thumb">▶</div>
        <div class="yt-body">
          <div class="yt-title">Wikipedia — Hamlet</div>
          <div class="yt-desc">Koncizni pregled radnje, likova i tema. Dobro za brzu reviziju osnovnih činjenica pred ispit.</div>
          <div class="yt-meta"><span>📚 Enciklopedija</span><span>🇭🇷 Hrvatski</span></div>
        </div>
      </a>
      <a href="https://www.youtube.com/results?search_query=hamlet+shakespeare+analiza+lektira+hrvatski" target="_blank" rel="noopener noreferrer" class="yt-card" onclick="track('ext_link_click',{target:'yt_hamlet_hr'},'engagement')">
        <div class="yt-thumb">▶</div>
        <div class="yt-body">
          <div class="yt-title">YouTube analize na hrvatskom</div>
          <div class="yt-desc">Video analize i pregledi drame. Korisno za dopunu čitanja ili brzo ponavljanje pred maturu.</div>
          <div class="yt-meta"><span>▶ Video</span><span>🇭🇷 Hrvatski</span></div>
        </div>
      </a>
      <a href="https://www.youtube.com/results?search_query=hamlet+to+be+or+not+to+be+olivier+branagh" target="_blank" rel="noopener noreferrer" class="yt-card" onclick="track('ext_link_click',{target:'yt_hamlet_films'},'engagement')">
        <div class="yt-thumb">▶</div>
        <div class="yt-body">
          <div class="yt-title">Monolog „Biti ili ne biti” — filmske izvedbe</div>
          <div class="yt-desc">Laurence Olivier (1948.), Kenneth Branagh (1996.), Mel Gibson, David Tennant. Sluša se kako veliki glumci izgovaraju monolog — idealno za pamćenje.</div>
          <div class="yt-meta"><span>🎬 Filmovi</span><span>🇬🇧 Engleski</span></div>
        </div>
      </a>
    </div>

    <!-- TAB NAV -->
    <div class="nav-row">
      <span class="nb" onclick="sw(0)">‹ 📚 Teorija</span>
      <span class="nb primary" onclick="sw(2)">✍️ Esej alat ›</span>
    </div>
  </div>


  <!-- ========================
       TAB 2 · ESEJ ALAT
       ======================== -->
  <div class="layer" id="l2" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">5 teza</span>
      <span class="pill p-go">model uvoda</span>
      <span class="pill p-r">5 grešaka</span>
      <span class="pill p-t">checklist</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Kako se piše esej o Hamletu</div>
      <div class="box-int-txt">
        <strong>Hamlet je obvezatno čitanje po NCVVO ispitnom katalogu 2026.</strong> Najčešće ispitno djelo za školski esej (30 bodova, 27%). Ovdje imaš <em>5 provjerenih teza</em> koje pokrivaju gotovo sve tipove zadataka, <em>model uvoda</em> koji možeš adaptirati, i <em>5 tipičnih grešaka</em> koje gube bodove. Esej mora imati <strong>minimum 440 riječi</strong>, trodijelnu strukturu (uvod-razrada-zaključak) i jasno razrađenu središnju tvrdnju.
      </div>
    </div>

    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · 5 provjerenih teza za esej</div><div class="sec-line"></div></div>

    <div class="prose">Svaka teza je formulirana kao <em>central thesis</em> — rečenica koja odgovara na polazno pitanje. Ispod svake — <b>3 argumenta</b> koja je podupiru i <b>1 ključna scena</b> koja je ilustrira.</div>

    <div id="h03-react-accordion-teze"></div>

    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Model uvoda — adaptabilan šablon</div><div class="sec-line"></div></div>

    <div class="prose">Uvod mora imati <strong>3 elementa:</strong> (a) kratko predstavljanje autora i djela, (b) književnopovijesni kontekst, (c) jasnu središnju tvrdnju koja odgovara na polazno pitanje. Evo modela koji možeš adaptirati.</div>

    <div class="box-key">
      <div class="box-key-lbl">🔑 MODEL UVODA · tema: Hamletova dilema i oklijevanje</div>
      <div class="box-key-txt">
        <em>William Shakespeare (1564.–1616.), najveći dramatičar engleske renesanse, oko 1601. godine napisao je tragediju „Hamlet” — djelo koje se danas smatra <b>najutjecajnijom tragedijom europske književnosti</b>. Kroz priču o danskom kraljeviću koji mora osvetiti ubijenog oca, Shakespeare postavlja pitanja koja definiraju renesansnog čovjeka: odnos razuma i djelovanja, moralne odgovornosti i osvete, života i smrti, pojedinca i korumpiranog svijeta. Tragedija, strukturirana u <b>pet činova</b> i pisana pretežno u <b>blank verseu</b> (nerimovanom jampskom pentametru), kombinira tradiciju srednjovjekovne osvetničke drame s novom psihološkom dubinom renesanse. Hamletov monolog „Biti ili ne biti” ušao je u kulturu kao sinonim za egzistencijalnu dilemu. <strong>U ovom ću eseju pokazati da Hamletova tragedija nije u tome što ne može djelovati, već u tome što previše misli — Shakespeare kroz Hamleta dijagnosticira modernu bolest u kojoj razum svjestan moralnih posljedica postaje vlastiti zatvor.</strong></em>
      </div>
    </div>

    <div class="box-tip">
      <div class="bt-title">📌 KAKO ADAPTIRATI MODEL UVODA</div>
      <div class="bt-txt">
        Struktura ostaje: <b>autor+djelo › kontekst › teza</b>. Mijenjaj:<br>
        <b>(a) Autor+djelo</b> — Shakespeare, 1564.–1616., ~1601., tragedija, 5 činova, Elsinor, princ Hamlet<br>
        <b>(b) Kontekst</b> — renesansa, Elizabetino doba, revenge tragedy, blank verse, humanizam<br>
        <b>(c) Teza</b> — adaptiraj prema pitanju. Ako pitaju o osveti › Teza 1. Ako pitaju o oklijevanju › Teza 2. Ako pitaju o smrti › Teza 3. Ako pitaju o svijetu/društvu › Teza 4. Ako pitaju o kontekstu › Teza 5.
      </div>
    </div>

    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · 5 tipičnih grešaka — izbjegavaj</div><div class="sec-line"></div></div>

    <div class="prose">Svaka od ovih grešaka gubi <em>1–3 boda u ocjenjivanju eseja</em>. Pročitaj prije pisanja.</div>

    <div class="con">
      <div class="cr"><div class="ck r">GREŠKA 1</div><div class="cv"><b>Svesti Hamleta na „kukavicu” ili „slabića”.</b> <em>Hamlet ne oklijeva iz straha — oklijeva iz savjesti.</em> Monolog „Biti ili ne biti” pokazuje da je svjestan svih moralnih dimenzija. Svesti ga na psihološku slabost znači promašiti filozofsku dimenziju drame. Shakespeare kreira <b>novu vrstu junaka</b> — onaj koji razmišlja.</div></div>
      <div class="cr"><div class="ck r">GREŠKA 2</div><div class="cv"><b>Brkati Hamleta (sina) i Hamleta (oca, Duha).</b> Oba se zovu Hamlet — izvor konfuzije. <em>Mladi Hamlet</em> je protagonist, princ, ~30 godina. <em>Stari Hamlet</em> je Duh, pokojni kralj, otac protagonista. <b>U eseju uvijek preciziraj</b> koji Hamlet — ili koristi „princ” za mladog, „kralj” za starog.</div></div>
      <div class="cr"><div class="ck r">GREŠKA 3</div><div class="cv"><b>Tvrditi da Hamlet glumi ludilo uspješno, a Ofelija „pretjeruje”.</b> <em>Naopako.</em> Hamletovo ludilo (<b>antic disposition</b>) je glumljeno, strategijsko — u Ofeliji imamo <b>pravo ludilo</b>, posljedicu traume. Ironija drame: Ofelija, jedina koja je iskrena, pati najgore. Nije „slabija” od Hamleta — drugačija je situacija.</div></div>
      <div class="cr"><div class="ck r">GREŠKA 4</div><div class="cv"><b>Ignorirati Fortinbrasa.</b> Lako ga je preskočiti — pojavljuje se kratko. Ali <em>Fortinbras je treći osvetnik</em> i <b>jedini preživjeli</b> od osvetnika. Shakespeare mu daje dansko prijestolje na kraju. <em>Zašto?</em> Jer je čekao, planirao, djelovao strategijski. Fortinbras je <b>alternativa</b> Hamletu i Laertu.</div></div>
      <div class="cr"><div class="ck r">GREŠKA 5</div><div class="cv"><b>Izjednačavati Hamleta s Romeom (ili drugim tragičnim junacima).</b> <em>Romeo i Julija</em> je ranija Shakespeareova tragedija — <b>ljubavna, ne egzistencijalna</b>. Romeo je impulsivan, Hamlet je refleksivan. Romeo umire zbog ljubavi, Hamlet zbog osvete i savjesti. Ako u eseju izjednačiš Romeovu impulzivnost i Hamletovu dilemu, gubiš poantu.</div></div>
    </div>

    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Pred-predaja checklist</div><div class="sec-line"></div></div>

    <div class="box-signal">
      <div class="box-signal-lbl">🧠 CHECKLIST — provjeri prije predaje</div>
      <div class="box-signal-txt">
        ? Esej ima <b>minimum 440 riječi</b> (kraće se ne vrednuje)<br>
        ? <b>Trodijelna struktura</b> — uvod, razrada, zaključak (jasno odvojeni)<br>
        ? <b>Središnja tvrdnja</b> formulirana u 1 jasnoj rečenici u uvodu<br>
        ? Razrada ima <b>2–3 argumenta</b> koja obrazlažu tvrdnju<br>
        ? Svaki argument <b>potkrijepljen</b> primjerom iz djela (scena, citat, parafraza)<br>
        ? <b>Zaključak</b> se vraća na tvrdnju, ne uvodi nove ideje<br>
        ? <b>Hrvatski navodnici</b> („…”) u cijelom tekstu<br>
        ? Provjerena <b>pravopis i gramatika</b> (naglasak, interpunkcija)<br>
        ? Tekst koristi <b>književnopovijesne pojmove</b> (renesansa, revenge tragedy, blank verse, humanizam, monolog)<br>
        ? <b>Kontekst epohe</b> (kasna renesansa, Elizabetino doba, ~1601.) — barem spomenut
      </div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(1)">‹ 📖 Hamlet</span>
      <span class="nb primary" onclick="sw(3)">💬 Citatnik ›</span>
    </div>
  
    <!-- == BROJAČ ESEJA (auto-injected) == -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Brojač eseja</div><div class="sec-line"></div></div>
    
    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">Provjeri svoj esej prije predaje</div>
        <div class="bw-txt">Cilj: <strong>min. 440 riječi</strong>. Optimalno 500–700. Tekst ostaje u tvom pregledniku.</div>
      </div>
    </div>

    <div class="wc-box">
      <div class="wc-hdr">
        <div class="wc-ttl">🧮 Brojač eseja · cilj: min. 440 riječi · optimalno 500–700</div>
      </div>
      <textarea class="wc-textarea" id="wc-ta" placeholder="Zalijepi ili upiši tekst eseja ovdje…" oninput="wcUpdate()"></textarea>
      <div class="wc-stats">
        <div class="wc-stat" id="wc-words"><div class="wc-stat-num">0</div><div class="wc-stat-lbl">RIJEČI</div></div>
        <div class="wc-stat" id="wc-chars"><div class="wc-stat-num">0</div><div class="wc-stat-lbl">ZNAKOVA</div></div>
        <div class="wc-stat" id="wc-nospace"><div class="wc-stat-num">0</div><div class="wc-stat-lbl">BEZ RAZMAKA</div></div>
        <div class="wc-stat" id="wc-para"><div class="wc-stat-num">0</div><div class="wc-stat-lbl">ODLOMAKA</div></div>
        <div class="wc-stat" id="wc-read"><div class="wc-stat-num">0 min</div><div class="wc-stat-lbl">ČITANJE</div></div>
      </div>
      <div class="wc-progress" id="wc-prog">
        <div class="wc-progress-bar-wrap"><div class="wc-progress-bar" id="wc-bar" style="width:0%"></div></div>
        <div class="wc-progress-lbl" id="wc-lbl">CILJ 440 · 0 / 440</div>
      </div>
      <div class="wc-actions">
        <button type="button" class="wc-btn" onclick="document.getElementById('wc-ta').value='';wcUpdate()">🧹 Očisti</button>
        <button type="button" class="wc-btn" onclick="navigator.clipboard.writeText(document.getElementById('wc-ta').value)">📋 Kopiraj</button>
      </div>
      <div class="wc-hint">📌 <b>Tip:</b> 5 odlomaka × 6 rečenica × 18 riječi ? 540 riječi. Drži se TEZA strukture.</div>
    </div>

    </div>

  <!-- ========================
       TAB 3 · CITATNIK
       ======================== -->
  <div class="layer" id="l3" role="tabpanel" tabindex="0">
    <div id="h03-react-citatnik"></div>
  </div>

  <!-- ========================
       TAB 4 · POJMOVNIK
       ======================== -->
  <div class="layer" id="l4" role="tabpanel" tabindex="0">
    <div id="h03-react-pojmovnik"></div>
  </div>
  <!-- ========================
       TAB 5 · DRILL
       ======================== -->
  <div class="layer" id="l5" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">flashcards</span>
      <span class="pill p-go">spari</span>
      <span class="pill p-r">brzo učenje</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Drill — aktivno učenje</div>
      <div class="box-int-txt">
        <strong>Flashcards</strong> za pojmove + <strong>matching</strong> (djelo › autor). Brže od pasivnog čitanja, direktno priprema za teoriju književnosti i 12 bodova.
      </div>
    </div>

    <!-- FLASHCARDS -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Flashcards · okreni karticu</div><div class="sec-line"></div></div>

    <style>
      .fc-wrap{display:flex;flex-direction:column;align-items:center;gap:18px;margin:16px 0 24px}
      .fc-counter{font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase}
      .fc-counter b{color:var(--bronze-l)}
      .fc{width:100%;max-width:520px;min-height:220px;perspective:1500px;cursor:pointer}
      .fc-inner{position:relative;width:100%;height:100%;min-height:220px;transition:transform .6s cubic-bezier(.4,0,.2,1);transform-style:preserve-3d}
      .fc.flipped .fc-inner{transform:rotateY(180deg)}
      .fc-front,.fc-back{position:absolute;inset:0;min-height:220px;padding:40px 32px;border-radius:var(--r4);backface-visibility:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border:1px solid var(--bdm)}
      .fc-front{background:linear-gradient(135deg,var(--card),var(--ele))}
      .fc-back{background:linear-gradient(135deg,rgba(220,50,47,.12),rgba(232,201,122,.05));border-color:var(--bd-br);transform:rotateY(180deg)}
      .fc-cat{font-family:var(--mono);font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--bronze);margin-bottom:12px}
      .fc-term{font-family:var(--display);font-size:30px;font-weight:700;color:var(--t1);letter-spacing:1px}
      .fc-hint{font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:22px;letter-spacing:1px}
      .fc-def{font-family:var(--serif);font-size:16px;line-height:1.65;color:var(--t1);max-width:420px}
      .fc-controls{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
      .fcb{padding:10px 20px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t2);font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s}
      .fcb:hover{border-color:var(--bd-br);color:var(--bronze-l)}
      .fcb.primary{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--bronze)}
      .fcb.know{border-color:var(--bd-g);color:var(--green)}
      .fcb.know:hover{background:var(--dim-g)}
      .fcb.dont{border-color:var(--bd-r);color:var(--red)}
      .fcb.dont:hover{background:var(--dim-r)}
      .fc-stats{display:flex;gap:20px;margin-top:10px;font-family:var(--mono);font-size:11px}
      .fc-stats span{color:var(--t3)}
      .fc-stats b{color:var(--green)}
      .fc-stats i{color:var(--red);font-style:normal}
    </style>

    <div class="fc-wrap">
      <div class="fc-counter"><span id="fc-num"><b>1</b> / 20</span></div>
      <div class="fc" id="fc-card" onclick="fcFlip()">
        <div class="fc-inner" id="fc-inner">
          <div class="fc-front">
            <div class="fc-cat" id="fc-cat-f">HAMLET</div>
            <div class="fc-term" id="fc-term">Hamlet (princ)</div>
            <div class="fc-hint">Klikni za okretanje ?</div>
          </div>
          <div class="fc-back">
            <div class="fc-cat" id="fc-cat-b">DEFINICIJA</div>
            <div class="fc-def" id="fc-def">Glavni lik tragedije — mladi danski kraljević, student iz Wittenberga. Inteligentan, filozofski, melankoličan. Otac mu je ubijen od strica Klaudija. Arhetip modernog refleksivnog subjekta — misli previše da bi brzo djelovao.</div>
          </div>
        </div>
      </div>
      <div class="fc-controls">
        <button class="fcb dont" onclick="fcMark(0)">❌ Ne znam</button>
        <button class="fcb know" onclick="fcMark(1)">✅ Znam</button>
        <button class="fcb" onclick="fcSkip()">Preskoči ›</button>
        <button class="fcb primary" onclick="fcReset()">🔁 Reset</button>
      </div>
      <div class="fc-stats"><span>točno: <b id="fc-right">0</b></span><span>krivo: <i id="fc-wrong">0</i></span></div>
    </div>

    <!-- MATCHING -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Spari · djelo › autor</div><div class="sec-line"></div></div>

    <style>
      .mg-intro{font-family:var(--serif);font-size:14px;color:var(--t2);margin-bottom:16px}
      .mg-board{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:18px 0}
      .mg-col{display:flex;flex-direction:column;gap:8px}
      .mg-col-label{font-family:var(--mono);font-size:9px;letter-spacing:2px;color:var(--t3);text-transform:uppercase;text-align:center;margin-bottom:4px}
      .mg-item{padding:12px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:14px;color:var(--t1);cursor:pointer;transition:all .18s;text-align:center;line-height:1.4;min-height:48px;display:flex;align-items:center;justify-content:center}
      .mg-item:hover{border-color:var(--bd-br);transform:translateX(2px)}
      .mg-item.sel{border-color:var(--bronze);background:var(--dim-br);color:var(--bronze-l);font-weight:600}
      .mg-item.ok{border-color:var(--green);background:var(--dim-g);color:var(--green);opacity:.6;pointer-events:none}
      .mg-item.err{border-color:var(--red);background:var(--dim-r);color:var(--red);animation:shake .4s}
      @keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
      .mg-stats{display:flex;gap:20px;justify-content:center;margin-top:14px;font-family:var(--mono);font-size:11px;color:var(--t3)}
      .mg-stats b{color:var(--green)}
      .mg-done{text-align:center;padding:22px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r3);font-family:var(--display);font-size:16px;color:var(--green);font-weight:700;letter-spacing:1px}
    </style>

    <div class="mg-intro">Klikni jedan element s lijeve strane, pa njegov par s desne. Pogrešne veze se resetiraju.</div>

    <div class="pro-gate" data-feature="drill-matching">
      <div class="mg-board" id="mg-board"></div>
    <div class="mg-stats"><span>spareno: <b id="mg-score">0</b> / <span id="mg-total">7</span></span></div>
      <div class="pro-gate-overlay">
        <div class="pro-gate-fade"></div>
        <div class="pro-gate-cta">
          <div class="pro-gate-label">9 <b>pair matching</b> vježbi — djelo › autor · pojam › epoha · stil › autor</div>
          <a class="pro-gate-btn" href="/pricing?ctx=drill_matching_h03">Otključaj — 9,99€/mj</a>
          <div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>
        </div>
      </div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(4)">‹ Pojmovnik</span>
      <span class="nb primary" onclick="sw(6)">🧠 Kviz ›</span>
    </div>
  </div>
  <!-- ========================
       TAB 6 · KVIZ
       ======================== -->
  <div class="layer" id="l6" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">20 pitanja</span>
      <span class="pill p-go">višestruki izbor</span>
      <span class="pill p-r">bez limita vremena</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Kviz — testiraj znanje iz cijelog poglavlja</div>
      <div class="box-int-txt">
        Format identičan maturi — zadaci višestrukog izbora s 4 odgovora. Pokriva sve dijelove: Hamlet (obvezatno čitanje 2026), renesansa kao epoha, humanizam, Shakespeare (Hamlet, R&J, Othello, soneti), Cervantes (Don Quijote), Petrarca i Boccaccio. Na kraju dobivaš ocjenu + pregled promašenih pitanja.
      </div>
    </div>

    <style>
      .qz-wrap{max-width:700px;margin:0 auto}
      .qz-prog{display:flex;justify-content:space-between;font-family:var(--mono);font-size:10px;letter-spacing:1.5px;color:var(--t3);text-transform:uppercase;margin-bottom:8px}
      .qz-prog b{color:var(--bronze-l)}
      .qz-bar{height:4px;background:var(--bd);border-radius:2px;overflow:hidden;margin-bottom:32px}
      .qz-bar-f{height:100%;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));transition:width .5s cubic-bezier(.4,0,.2,1)}
      .qz-q{font-family:var(--serif);font-size:20px;font-weight:600;line-height:1.4;color:var(--t1);margin-bottom:22px}
      .qz-opts{display:flex;flex-direction:column;gap:10px}
      .qz-opt{padding:14px 18px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:14px;font-family:var(--serif);font-size:14.5px;color:var(--t1);text-align:left;width:100%}
      .qz-opt:hover:not(:disabled){border-color:var(--bd-br);background:var(--hov)}
      .qz-key{width:28px;height:28px;border-radius:var(--r1);background:var(--ele);display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);flex-shrink:0}
      .qz-opt.ok{border-color:var(--green);background:var(--dim-g)}
      .qz-opt.ok .qz-key{background:var(--green);color:#0F0605}
      .qz-opt.ng{border-color:var(--red);background:var(--dim-r)}
      .qz-opt.ng .qz-key{background:var(--red);color:#F5E6D3}
      .qz-opt:disabled{cursor:default}
      .qz-fb{margin-top:16px;padding:14px 18px;border-radius:var(--r3);font-family:var(--serif);font-size:14px;line-height:1.6;display:none}
      .qz-fb.show{display:block}
      .qz-fb.ok{background:var(--dim-g);border:1px solid var(--bd-g);color:var(--green)}
      .qz-fb.ng{background:var(--dim-r);border:1px solid var(--bd-r);color:var(--red)}
      .qz-fb b{color:inherit;font-weight:700}
      .qz-nav{display:flex;justify-content:flex-end;margin-top:24px}
      .qz-start{text-align:center;padding:36px 20px}
      .qz-start-ico{font-size:48px;margin-bottom:10px}
      .qz-start h3{font-family:var(--display);font-size:22px;color:var(--t1);letter-spacing:1px;margin-bottom:10px}
      .qz-start p{font-family:var(--serif);font-size:14.5px;color:var(--t2);max-width:440px;margin:0 auto 22px;line-height:1.65}
      .qz-result{text-align:center;padding:40px 24px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4)}
      .qz-score{font-family:var(--display);font-size:68px;font-weight:700;background:linear-gradient(135deg,var(--bronze),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;margin-bottom:8px}
      .qz-grade{font-family:var(--display);font-size:18px;color:var(--t1);letter-spacing:1.5px;margin-bottom:6px}
      .qz-msg{font-family:var(--serif);font-size:14px;color:var(--t2);margin-bottom:24px}
      .qz-wrong-item{padding:14px 18px;background:var(--card);border:1px solid var(--bdm);border-left:3px solid var(--red);border-radius:var(--r2);margin-bottom:8px;text-align:left}
      .qz-wrong-q{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;margin-bottom:4px}
      .qz-wrong-a{font-family:var(--serif);font-size:13px;color:var(--t2)}
      .qz-wrong-a b{color:var(--bronze-l)}
    </style>

    <div class="qz-wrap" id="qz-app"></div>

    <div class="nav-row" style="margin-top:30px">
      <span class="nb" onclick="sw(5)">‹ Drill</span>
      <span class="nb primary" onclick="sw(7)">✅ Checkpoint ›</span>
    </div>
  </div>

  <!-- ========================
       TAB 7 · CHECKPOINT
       ======================== -->
  <div class="layer" id="l7" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-g">završetak poglavlja</span>
      <span class="pill p-go">self-check</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Provjera — što zaista znaš?</div>
      <div class="box-int-txt">
        Označi stavke koje si <em>stvarno</em> usvojio. Ne žuri — ako nešto nisi siguran, vrati se na odgovarajući tab. <strong>Cilj: svih 10 označeno prije prelaska na H04 — Barok i klasicizam.</strong>
      </div>
    </div>

    <style>
      .cp-grid{display:flex;flex-direction:column;gap:8px;margin:18px 0 24px}
      .cp-item{display:flex;align-items:center;gap:14px;padding:16px 20px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);cursor:pointer;transition:all .2s;font-family:var(--serif);font-size:15px;color:var(--t1);line-height:1.5}
      .cp-item:hover{border-color:var(--bd-br);transform:translateX(4px)}
      .cp-box{width:24px;height:24px;border-radius:6px;border:2px solid var(--bdl);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:14px;color:transparent;transition:all .2s;background:var(--inp)}
      .cp-item.done{border-color:var(--bd-g);background:var(--dim-g)}
      .cp-item.done .cp-box{background:var(--green);border-color:var(--green);color:#0F0605;font-weight:700}
      .cp-hint{font-family:var(--mono);font-size:10px;color:var(--t3);margin-left:auto;text-transform:uppercase;letter-spacing:1px;flex-shrink:0}
      .cp-summary{display:flex;justify-content:space-between;align-items:center;padding:18px 22px;background:linear-gradient(135deg,var(--dim-go),rgba(232,201,122,.03));border:1px solid var(--bd-go);border-radius:var(--r3);margin:20px 0 24px}
      .cp-sum-txt{font-family:var(--serif);font-size:14.5px;color:var(--t1)}
      .cp-sum-txt b{color:var(--gold)}
      .cp-sum-pct{font-family:var(--display);font-size:28px;font-weight:700;color:var(--gold);letter-spacing:1px}
      .cp-final{padding:26px;background:linear-gradient(135deg,var(--dim-g),rgba(107,148,100,.04));border:1px solid var(--bd-g);border-radius:var(--r4);text-align:center;display:none;margin-top:20px}
      .cp-final.show{display:block;animation:fadeUp .5s ease}
      .cp-final-ico{font-size:48px;margin-bottom:8px}
      .cp-final-title{font-family:var(--display);font-size:20px;font-weight:700;color:var(--green);letter-spacing:1px;margin-bottom:6px}
      .cp-final-msg{font-family:var(--serif);font-size:14.5px;color:var(--t1);margin-bottom:18px;line-height:1.6}
      .cp-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
      /* PDF export box */
      .pdf-export{display:flex;gap:14px;margin-top:20px;padding:18px 20px;background:linear-gradient(135deg,var(--dim-t),rgba(91,192,190,.03));border:1px solid var(--bd-t);border-radius:var(--r3);text-align:left}
      .pdf-export-ico{font-size:32px;flex-shrink:0;line-height:1}
      .pdf-export-body{flex:1;min-width:0}
      .pdf-export-ttl{font-family:var(--display);font-size:12px;font-weight:700;color:var(--teal);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px}
      .pdf-export-txt{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.55;margin-bottom:12px}
      .pdf-export-txt strong{color:var(--t1)}
      .pdf-actions{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px}
      .pdf-export-btn{padding:11px 18px;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .15s;display:inline-flex;align-items:center;gap:6px}
      .pdf-primary{background:var(--teal);color:var(--bg);min-width:200px;justify-content:center}
      .pdf-primary:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 4px 14px rgba(91,192,190,.35)}
      .pdf-secondary{background:transparent;color:var(--t2);border:1px solid var(--bdm)}
      .pdf-secondary:hover:not(:disabled){color:var(--teal);border-color:var(--bd-t)}
      .pdf-export-btn:disabled{opacity:.6;cursor:wait}
      .pdf-beta{padding:1px 5px;background:rgba(232,201,122,.15);color:var(--gold);border-radius:3px;font-size:8.5px;letter-spacing:.5px;font-weight:700}
      .pdf-export-hint{margin-top:6px;font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.3px;line-height:1.6}
      .pdf-export-hint strong{color:var(--t2);font-weight:700}
      .pdf-export-hint em{color:var(--bronze-l);font-style:normal}
      .pdf-export-hint kbd{display:inline-block;padding:1px 5px;background:var(--inp);border:1px solid var(--bdm);border-radius:3px;font-family:var(--mono);font-size:10px;color:var(--t2);margin:0 1px}
      @media(max-width:560px){
        .pdf-export{flex-direction:column;gap:10px;padding:16px}
        .pdf-actions{flex-direction:column}
        .pdf-export-btn{width:100%;justify-content:center}
    }

/* CHAPTER NAVIGATION (auto-injected) */
.chapter-nav-wrap {
  max-width: 880px;
  margin: 40px auto 28px;
  padding: 0 18px;
}

.chapter-nav-hdr {
  text-align: center;
  margin-bottom: 22px;
}

.chapter-nav-title {
  font-family: var(--display, 'Fraunces', serif);
  font-size: 22px;
  font-weight: 700;
  color: var(--t1, #f4ede5);
  margin-bottom: 4px;
}

.chapter-nav-sub {
  font-size: 13px;
  color: var(--t3, #8a7a6e);
}

.chapter-nav-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 22px;
}

.chapter-nav-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  background: var(--ele, #1f1414);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 14px;
  text-decoration: none;
  color: var(--t1, #f4ede5);
  transition: all 0.15s ease;
}

.chapter-nav-card:hover {
  border-color: var(--gold, #e9b446);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.3);
}

.chapter-nav-prev {
  flex-direction: row;
}

.chapter-nav-next {
  flex-direction: row;
}

.chapter-nav-arrow {
  font-size: 28px;
  color: var(--gold, #e9b446);
  flex-shrink: 0;
  font-family: var(--display, serif);
}

.chapter-nav-meta {
  flex: 1;
}

.chapter-nav-pill {
  display: inline-block;
  padding: 3px 8px;
  background: rgba(74,144,217,0.1);
  color: var(--blue, #4a90d9);
  border-radius: 10px;
  font-family: var(--mono, monospace);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.2px;
  margin-bottom: 6px;
}

.chapter-nav-pill-next {
  background: rgba(233,180,70,0.1);
  color: var(--gold, #e9b446);
}

.chapter-nav-name {
  font-family: var(--display, serif);
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 4px;
}

.chapter-nav-desc {
  font-size: 12px;
  color: var(--t3, #8a7a6e);
  line-height: 1.5;
}

.chapter-nav-related {
  padding: 18px 22px;
  background: var(--ele, #1f1414);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 14px;
}

.chapter-nav-related-ttl {
  font-family: var(--display, serif);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--t1, #f4ede5);
}

.chapter-nav-related-grid {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.chapter-nav-mini {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--bg2, #1a1010);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 10px;
  text-decoration: none;
  color: var(--t1, #f4ede5);
  transition: all 0.15s ease;
}

.chapter-nav-mini:hover {
  border-color: var(--gold, #e9b446);
  transform: translateY(-1px);
}

.chapter-nav-mini-code {
  font-family: var(--mono, monospace);
  font-size: 10px;
  font-weight: 800;
  color: var(--gold, #e9b446);
  letter-spacing: 0.8px;
}

.chapter-nav-mini-name {
  font-size: 12px;
  color: var(--t2, #c5b8aa);
}

@media (max-width: 720px) {
  .chapter-nav-grid {
    grid-template-columns: 1fr;
  }
}


/* TIER_SYSTEM_CSS_INJECTED */
/* ===================================================
   MATURIRAJ.HR — TIER SYSTEM CSS
   Paywall modal + sidebar badge + tier indicators
   =================================================== */

/* ¦¦¦¦¦¦¦¦¦ PAYWALL OVERLAY ¦¦¦¦¦¦¦¦¦ */
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

/* ¦¦¦¦¦¦¦¦¦ PAYWALL MODAL ¦¦¦¦¦¦¦¦¦ */
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

/* ¦¦¦¦¦¦¦¦¦ PAYWALL HEADER ¦¦¦¦¦¦¦¦¦ */
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

/* ¦¦¦¦¦¦¦¦¦ PAYWALL TIERS ¦¦¦¦¦¦¦¦¦ */
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

/* ¦¦¦¦¦¦¦¦¦ CTA BUTTONS ¦¦¦¦¦¦¦¦¦ */
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

/* ¦¦¦¦¦¦¦¦¦ PAYWALL FOOTER ¦¦¦¦¦¦¦¦¦ */
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

/* ¦¦¦¦¦¦¦¦¦ SIDEBAR TIER BADGE ¦¦¦¦¦¦¦¦¦ */
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

/* ¦¦¦¦¦¦¦¦¦ MOBILE ¦¦¦¦¦¦¦¦¦ */
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


/* WC-BOX (auto-injected) */
.wc-box{background:var(--card,#1a1010);border:1px solid var(--bdm,#2c1f1f);border-radius:14px;padding:20px;margin:18px 0}
.wc-hdr{margin-bottom:14px}
.wc-ttl{font-family:var(--serif,'Fraunces',serif);font-size:15px;font-weight:700;color:var(--t1,#f4ede5)}
.wc-textarea{width:100%;min-height:280px;padding:14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px;line-height:1.7;resize:vertical;box-sizing:border-box}
.wc-textarea:focus{outline:none;border-color:var(--gold,#e9b446)}
.wc-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin-top:12px}
.wc-stat{padding:10px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;text-align:center}
.wc-stat-num{font-family:var(--mono,monospace);font-size:18px;font-weight:800;color:var(--t1,#f4ede5)}
.wc-stat-lbl{font-family:var(--mono,monospace);font-size:9px;color:var(--t3,#8a7a6e);letter-spacing:1px;margin-top:2px}
.wc-stat.ok .wc-stat-num{color:var(--green,#50c878)}
.wc-stat.critical .wc-stat-num{color:var(--red,#e05252)}
.wc-progress{margin-top:14px}
.wc-progress-bar-wrap{height:8px;background:var(--inp,#0F0605);border-radius:4px;overflow:hidden;border:1px solid var(--bdl,#2c1f1f)}
.wc-progress-bar{height:100%;background:linear-gradient(90deg,var(--blue,#4a90d9),var(--gold,#e9b446));transition:width .3s}
.wc-progress.pass .wc-progress-bar{background:var(--green,#50c878)}
.wc-progress-lbl{font-family:var(--mono,monospace);font-size:11px;color:var(--t3,#8a7a6e);margin-top:6px;text-align:center;letter-spacing:1px}
.wc-actions{display:flex;gap:8px;margin-top:12px}
.wc-btn{flex:1;padding:8px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);font-family:var(--mono,monospace);font-size:11px;letter-spacing:0.8px;cursor:pointer;transition:all .15s}
.wc-btn:hover{border-color:var(--gold,#e9b446);color:var(--gold,#e9b446)}
.wc-hint{margin-top:12px;padding:10px 12px;background:var(--inp,#0F0605);border-radius:8px;font-size:12px;color:var(--t2,#c5b8aa);line-height:1.5}

  </style>

    <div class="cp-summary">
      <div class="cp-sum-txt">Napredak · <b id="cp-done">0</b> / 10 stavki</div>
        <div class="cp-actions" style="margin-top:18px;display:flex;gap:10px;justify-content:center">
          <button type="button" class="fcb" onclick="cpReset()" style="padding:8px 16px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);font-family:var(--mono,monospace);font-size:11px;letter-spacing:0.8px;cursor:pointer">🔁 Resetiraj</button>
          <button type="button" class="fcb primary" onclick="sw(6)" style="padding:8px 16px;background:var(--gold,#e9b446);color:#0F0605;border:none;border-radius:8px;font-family:var(--mono,monospace);font-size:11px;font-weight:800;letter-spacing:0.8px;cursor:pointer">🧠 Idi na kviz</button>
        </div>

      <div class="cp-sum-pct" id="cp-pct">0%</div>
    </div>

    <style>
      .exam-prompt{margin:18px 0 22px;padding:20px 22px;background:linear-gradient(135deg,var(--dim-r) 0%,rgba(224,82,82,.04) 100%);border:1px solid var(--bd-r);border-radius:var(--r3);position:relative}
      .exam-prompt::before{content:'NCVVO · ŠKOLSKI ESEJ';position:absolute;top:-9px;left:18px;padding:2px 10px;background:var(--bg);color:var(--red-l);font-family:var(--mono);font-size:9px;letter-spacing:2px;font-weight:700;border:1px solid var(--bd-r);border-radius:3px}
      .exam-prompt-ttl{font-family:var(--display);font-size:14.5px;font-weight:700;color:var(--red-l);letter-spacing:.8px;margin-bottom:10px}
      .exam-prompt-task{font-family:var(--serif);font-size:14.5px;line-height:1.6;color:var(--t1);font-style:italic;padding:14px 16px;background:var(--card);border-left:3px solid var(--red);border-radius:0 var(--r2) var(--r2) 0;margin-bottom:14px}
      .exam-prompt-tips{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:14px}
      .exam-tip{padding:10px 12px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:12.5px;line-height:1.5;color:var(--t2)}
      .exam-tip b{display:block;font-family:var(--mono);font-size:9px;color:var(--bronze-l);letter-spacing:1.5px;font-weight:700;text-transform:uppercase;margin-bottom:5px}
      .minirev{margin:20px 0 24px;padding:0;background:var(--card);border:1px solid var(--bd-go);border-radius:var(--r3);overflow:hidden}
      .minirev-head{padding:14px 18px;background:linear-gradient(135deg,var(--dim-go),rgba(232,201,122,.04));border-bottom:1px solid var(--bd-go);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}
      .minirev-ttl{font-family:var(--display);font-size:13.5px;font-weight:700;color:var(--gold);letter-spacing:1px;text-transform:uppercase}
      .minirev-time{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1.5px;padding:3px 9px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px}
      .minirev-body{padding:18px}
      .minirev-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:14px}
      .minirev-card{padding:12px 14px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2)}
      .minirev-card-lbl{font-family:var(--mono);font-size:9.5px;color:var(--bronze-l);letter-spacing:1.5px;font-weight:700;text-transform:uppercase;margin-bottom:5px}
      .minirev-card-val{font-family:var(--serif);font-size:13.5px;color:var(--t1);line-height:1.5}
      .minirev-card-val b{color:var(--gold)}
      .minirev-quotes{padding:12px 14px;background:var(--sur);border-left:3px solid var(--bd-go);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1)}
      .minirev-quotes ol{margin:0;padding-left:20px}
      .minirev-quotes li{margin:4px 0;font-style:italic}
      .minirev-quotes li b{font-style:normal;color:var(--gold)}
      @media (max-width:600px){.minirev-head{padding:12px 14px}.minirev-body{padding:14px}.minirev-card-val{font-size:13px}}
    </style>

    <style>
      .minirev{background:var(--card,rgba(255,255,255,.03));border:1px solid var(--bd-go,rgba(232,201,122,.30));border-radius:var(--r3,12px)}
      .minirev-head{background:linear-gradient(135deg,var(--dim-go,rgba(232,201,122,.12)),rgba(232,201,122,.04));border-bottom:1px solid var(--bd-go,rgba(232,201,122,.30))}
      .minirev-card,.minirev-quotes,.exam-tip,.exam-prompt-task{background:var(--sur,rgba(255,255,255,.02));border-color:var(--bdm,rgba(255,255,255,.12))}
      .minirev-card,.exam-tip{border-radius:var(--r2,10px)}
      .minirev-quotes,.exam-prompt-task{border-radius:0 var(--r2,10px) var(--r2,10px) 0}
      .minirev-ttl,.minirev-card-val b,.minirev-quotes li b{color:var(--gold,#e9b446)}
      .exam-prompt{background:linear-gradient(135deg,var(--dim-r,rgba(192,66,68,.12)) 0%,rgba(224,82,82,.04) 100%);border:1px solid var(--bd-r,rgba(192,66,68,.28));border-radius:var(--r3,12px)}
      .exam-prompt::before{background:var(--bg,#0f0b10);color:var(--red-l,#f0a8a8);border-color:var(--bd-r,rgba(192,66,68,.28))}
    </style>

    <div class="minirev">
      <div class="minirev-head"><div class="minirev-ttl">🧭 Mini-revizija — sve u 3 minute</div><div class="minirev-time">~3 min čitanja</div></div>
      <div class="minirev-body">
        <div class="minirev-grid">
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Djelo i korpus</div><div class="minirev-card-val"><b>Hamlet</b> (obvezatno 2026), Petrarkini soneti i renesansni modeli čovjeka i svijeta.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Kontekst</div><div class="minirev-card-val"><b>Renesansa</b> vraća antiku, afirmira iskustvo i čovjeka kao mjeru razumijevanja stvarnosti.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Likovi</div><div class="minirev-card-val"><b>Hamlet, Klaudije, Gertruda, Ofelija, Laert, Horacije</b> — mreža moći, savjesti i osvete.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Središnji sukob</div><div class="minirev-card-val"><b>Dužnost osvete vs moralna savjest</b>; djelovanje i oklijevanje kao jezgra Hamletove tragedije.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Pojmovi</div><div class="minirev-card-val"><b>humanizam, antropocentrizam, sonet, petrarkizam, renesansna tragedija</b>.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Simboli</div><div class="minirev-card-val"><b>kazalište u kazalištu, lubanja, duh, trula Danska</b> — simbolički kod za analizu eseja.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Most</div><div class="minirev-card-val">› <b>H04 Barok i klasicizam</b> — od renesansne ravnoteže prema pojačanoj napetosti forme i svijeta.</div></div>
          <div class="minirev-card"><div class="minirev-card-lbl">📌 Najveća greška</div><div class="minirev-card-val">Hamleta prikazati kao „neodlučnog slabića”. On je <b>etički kompleksan junak</b>, ne karikatura pasivnosti.</div></div>
        </div>
        <div class="minirev-quotes"><b style="display:block;font-family:var(--mono);font-size:9.5px;color:var(--bronze-l);letter-spacing:1.5px;font-weight:700;text-transform:uppercase;margin-bottom:8px">3 citata napamet</b><ol><li>„Biti ili ne biti — u tome je pitanje.” <b>(Shakespeare)</b></li><li>„Nešto je trulo u državi Danskoj.” <b>(Marcellus)</b></li><li>„Blažen tko ima tako slatku bol.” <b>(petrarkistička formula)</b></li></ol></div>
      </div>
    </div>

    <div class="exam-prompt">
      <div class="exam-prompt-ttl">📌 Kako se renesansa može pojaviti na ispitu</div>
      <div class="exam-prompt-task">Analiziraj kako renesansni pogled na čovjeka oblikuje sukob, likove i poetiku u odabranim djelima. Usporedi barem dva autora (npr. Shakespeare i Petrarca) te pokaži prijelaz iz srednjovjekovnog u novovjekovni model mišljenja.</div>
      <div class="exam-prompt-tips"><div class="exam-tip"><b>📌 Struktura eseja</b>Uvod (50-60 r.) · 3 razradna odlomka (~120 r. svaki: kontekst, analiza djela, usporedba) · zaključak (60-70 r.) = ~470 r.</div><div class="exam-tip"><b>📌 Citati</b>Uključi 2-3 citata: „Biti ili ne biti”, „Nešto je trulo...”, jedna petrarkistička formula ili stih iz soneta.</div><div class="exam-tip"><b>📌 Povezivanje</b>Naglasi kontrast H02↔H03: teocentrizam nasuprot humanizmu; pripremi most prema H04.</div><div class="exam-tip"><b>📚 Pojmovi</b>Humanizam · antropocentrizam · renesansna tragedija · petrarkizam · sonet · motiv osvete.</div></div>
    </div>

    <div class="pro-gate" data-feature="checkpoint-tracking">
      <div class="cp-grid" id="cp-grid">
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Znam tko je napisao <b>Hamleta</b> i kada (Shakespeare, ~1601., tragedija u 5 činova)</div><span class="cp-hint">Hamlet</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Mogu ispričati <b>radnju Hamleta u 7 etapa</b> (Duh › glumljeno ludilo › Biti ili ne biti › Mišolovka › Polonije › groblje › finale)</div><span class="cp-hint">Hamlet</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Znam ključne likove — <b>Hamlet, Klaudije, Gertruda, Ofelija, Polonije, Laert, Horacije, Fortinbras</b></div><span class="cp-hint">Hamlet</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Razumijem <b>Hamletovu dilemu</b> (oklijevanje kao moralna savjest, ne kukavičluk)</div><span class="cp-hint">Hamlet</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Znam što su <b>revenge tragedy, antic disposition, Mišolovka, Elsinor, blank verse</b></div><span class="cp-hint">Pojmovnik</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Imam <b>barem 2 teze</b> za esej o Hamletu (osveta, dilema, smrt, korupcija, renesansa)</div><span class="cp-hint">Esej</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Znam <b>3 citata</b> napamet (npr. „Biti ili ne biti”, „Nešto je trulo u državi Danskoj”, „Jao, jadni Yorick”)</div><span class="cp-hint">Citatnik</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Razumijem <b>3 paralelne obitelji — Hamlet, Laert, Fortinbras</b> kao 3 osvetnika</div><span class="cp-hint">Hamlet</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Prepoznajem <b>Shakespeareov opus</b> (R&J, Othello, Macbeth, Kralj Lear, Soneti)</div><span class="cp-hint">Teorija</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">?</div><div>Kviz <b>prošao s 75%+</b></div><span class="cp-hint">Kviz</span></div>
    </div>
      <div class="pro-gate-overlay">
        <div class="pro-gate-fade"></div>
        <div class="pro-gate-cta">
          <div class="pro-gate-label"><b>Checkpoint tracking</b> kroz sva 28+22 poglavlja · napredak se sprema · graf spremnosti za maturu</div>
          <a class="pro-gate-btn" href="/pricing?ctx=checkpoint_h03">Otključaj — 9,99€/mj</a>
          <div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>
        </div>
      </div>
    </div>

    <div class="cp-final" id="cp-final">
      <div class="cp-final-ico">🎉</div>
      <div class="cp-final-title">H03 ZAVRŠENO!</div>
      <div class="cp-final-msg">
        Savladao si europsku renesansu. <strong>Hamlet — obvezatno čitanje 2026 — u džepu.</strong> Spreman si za H04 — barok i klasicizam, razdoblje u kojem nastaju Calderón i njegov <em>Život je san</em> (ispitno djelo 2026) te Moliere, Racine i francuski klasicistički teatar s pravilima 3 jedinstava.
      </div>
      <div class="cp-actions">
        <button class="fcb primary">H04 · Barok i klasicizam ›</button>
        <button class="fcb" onclick="sw(0)">🔁 Ponovi H03</button>
      </div>

      

      <!-- UPSELL: Discere nakon završenog poglavlja -->
      <div class="upsell" style="margin-top:24px;text-align:left" data-upsell-ctx="checkpoint_finale" data-upsell-target="discere" data-upsell-id="cp_discere">
        <div class="upsell-ico wordmark">Discere</div>
        <div class="upsell-body">
          <div class="upsell-title">Simulator mature <span class="upsell-badge standard">STANDARD</span> <span class="upsell-badge" style="color:var(--t3);border-color:var(--bdm);background:transparent;font-size:8px">9,99 €/mj · uklj. u PRO</span></div>
          <div class="upsell-desc"><strong>Završio si H03 — sada testiraj u stvarnim uvjetima.</strong> Hamlet je <em>obvezatno čitanje 2026</em>. Renesansa i Shakespeare pojavljuju se u školskom eseju, teoriji književnosti i čitanju književnog teksta. Riješi ih s timerom i automatskim ocjenjivanjem.</div>
        </div>
        <a href="/discere?subject=hrvatski&topic=hamlet&ctx=h03_checkpoint" class="upsell-cta" onclick="track('upsell_click',{ctx:'checkpoint_finale',target:'discere'},'conversion')">Isprobaj ›</a>
      </div>
    </div>

    <div class="nav-row" style="margin-top:30px">
      <span class="nb" onclick="sw(6)">‹ Kviz</span>
      <span class="nb off">H04 (uskoro) ›</span>
    </div>
  </div>

  <div class="chapter-nav-wrap">
    <div class="chapter-nav-hdr">
      <div class="chapter-nav-title">📚 Sljedeća poglavlja</div>
      <div class="chapter-nav-sub">Nastavi učiti — povezana poglavlja u Maturiraj knjižnici</div>
    </div>
    
    <div class="chapter-nav-grid">
      <a class="chapter-nav-card chapter-nav-prev" href="/skripte/hrv/h02">
        <div class="chapter-nav-arrow">‹</div>
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill">PRETHODNO</div>
          <div class="chapter-nav-name">H02 · Srednji vijek i pismenost</div>
          <div class="chapter-nav-desc">Bašćanska ploča · glagoljica</div>
        </div>
      </a>

      <a class="chapter-nav-card chapter-nav-next" href="/skripte/hrv/h04">
        <div class="chapter-nav-meta">
          <div class="chapter-nav-pill chapter-nav-pill-next">SLJEDEĆE</div>
          <div class="chapter-nav-name">H04 · Barok i klasicizam</div>
          <div class="chapter-nav-desc">Milton · Moliere · kontrareformacija</div>
        </div>
        <div class="chapter-nav-arrow">›</div>
      </a>
    </div>

    <div class="chapter-nav-related">
      <div class="chapter-nav-related-ttl">🔗 Povezana poglavlja</div>
      <div class="chapter-nav-related-grid">
        <a class="chapter-nav-mini" href="/skripte/hrv/h11">
          <span class="chapter-nav-mini-code">H11</span>
          <span class="chapter-nav-mini-name">Stari hrv. pisci</span>
        </a>
        <a class="chapter-nav-mini" href="/skripte/hrv/h12">
          <span class="chapter-nav-mini-code">H12</span>
          <span class="chapter-nav-mini-name">Marulić i Judita</span>
        </a>
      </div>
    </div>
  </div>

  <!-- == MODULE FOOTER (v3.6) == -->
  <footer class="mod-foot" role="contentinfo">
    <div class="foot-line"><b>Maturiraj.hr</b> · Hrvatski · H01 Temelji civilizacije i antika</div>
    <div class="foot-line">Autorski sadržaj · Usklađeno s <a href="https://www.ncvvo.hr/ispitni-katalozi-za-drzavnu-maturu-2025-2026/" target="_blank" rel="noopener noreferrer" onclick="track('ext_link_click',{target:'ncvvo_footer'},'engagement')">NCVVO</a> ispitnim katalogom · Ažurirano <time datetime="2026-04-18">travanj 2026.</time></div>
    <div class="foot-line foot-feedback">
      <span class="foot-fb-q">Imaš prijedlog ili si uočio grešku?</span>
      <button type="button" class="foot-fb-btn" onclick="openFeedbackModal()">📝 Prijavi ›</button>
      <span class="foot-fb-or">ili e-mail</span>
      <a href="mailto:maturirajgreske@gmail.com?subject=H01%20%E2%80%94%20prijava%20gre%C5%A1ke&amp;body=Poglavlje%3A%20H01%20Temelji%20civilizacije%20i%20antika%0ATab%3A%20%0A%0AOpis%3A%0A" class="foot-fb-mail" onclick="track('ext_link_click',{target:'mailto_feedback'},'engagement')">maturirajgreske@gmail.com</a>
    </div>
  </footer>

</div>
</main>
</div><!-- /shell -->









`;

const CHAPTER_CSS_DELTA = `
/* ══ KEYFRAMES ══ */
@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}

@keyframes fadeIn{from{opacity:0}to{opacity:1}}

@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(220,50,47,.3)}50%{box-shadow:0 0 0 8px rgba(220,50,47,.0)}}

@keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}

@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}

@keyframes orbA{0%,100%{transform:scale(1) translate(0,0)}50%{transform:scale(1.15) translate(20px,-10px)}}

@keyframes orbB{0%,100%{transform:scale(1) translate(0,0)}50%{transform:scale(0.9) translate(-15px,12px)}}

@keyframes scanline{0%{top:-2px}100%{top:100%}}

@media(max-width:560px){.bc-tab-sep, .bc-tab{display:none}}

@media(max-width:560px){.auth-box{flex-direction:column;gap:8px}.auth-txt{font-size:13px}.auth-links{flex-direction:column}.auth-link{text-align:center}}

@keyframes diagFade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}


@media(max-width:560px){
  .diag-intro, .diag-quiz, .diag-result{padding:18px 18px}
  .diag-ttl{font-size:17px}
  .diag-q{font-size:14.5px}
  .diag-actions{flex-direction:column;align-items:stretch}
  .diag-btn{text-align:center;width:100%}
  .diag-res-num{font-size:36px}
}

@media(max-width:680px){
  .cmp-tbl, .cmp-tbl thead, .cmp-tbl tbody, .cmp-tbl th, .cmp-tbl td, .cmp-tbl tr{display:block}
  .cmp-tbl thead{display:none}
  .cmp-tbl tr{padding:10px 0;border-bottom:1px solid var(--bd)}
  .cmp-tbl tr:last-child{border-bottom:none}
  .cmp-tbl td{padding:6px 16px;border-bottom:none}
  .cmp-tbl .cmp-cat{width:auto;background:transparent;color:var(--bronze);font-size:9.5px;padding-bottom:0;padding-top:8px}
  .cmp-tbl td:nth-of-type(2)::before{content:'⚪ Glagoljica: ';color:var(--red-l);font-family:var(--mono);font-size:10px;font-weight:700}
  .cmp-tbl td:nth-of-type(3)::before{content:'⚫ Latinica: ';color:var(--bronze-l);font-family:var(--mono);font-size:10px;font-weight:700}
  .cmp-conc::before{content:''!important}
}

@media(max-width:760px){
  .cheat-grid{grid-template-columns:1fr}
  .cheat-col-wide{grid-column:auto}
  .cheat-grid-inner{grid-template-columns:1fr}
}

@media(max-width:560px){
  .cheat-hdr{padding:12px 16px}
  .cheat-col{padding:14px 16px}
  .cheat-ttl{font-size:15px}
}

@media(max-width:560px){
  .foot-feedback{gap:6px;flex-direction:column}
  .foot-fb-or{display:none}
}

@media(max-width:560px){
  .b20-item{font-size:13.5px;gap:11px;padding:10px 0}
  .b20-num{width:24px;height:24px;font-size:10.5px}
  .box-20{padding:16px 18px}
}

}
/* ══════════════════════════════════════════════════
   DESIGN SYSTEM v2 UPGRADE — SHARED ACROSS CHAPTERS
   ══════════════════════════════════════════════════ */

/* Scroll progress bar at top of page */
.scroll-progress{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,var(--bronze),var(--gold));z-index:9999;width:0%;transition:width .1s linear;pointer-events:none;box-shadow:0 0 8px rgba(232,201,122,.4)}

/* Smooth scroll behavior */
html{scroll-behavior:smooth}

/* Enhanced focus states for accessibility */
button:focus-visible,a:focus-visible,.tab:focus-visible,.cp-item:focus-visible,.pojm-filter:focus-visible,.cit-fbtn:focus-visible,.diag-opt:focus-visible,.nb:focus-visible{
  outline:2px solid var(--gold)!important;outline-offset:3px;border-radius:4px
}

/* Better hover states on cards */
.sc{transition:all .25s cubic-bezier(.4,0,.2,1)}
.sc:hover{transform:translateY(-3px);box-shadow:0 8px 22px rgba(220,50,47,.06),0 0 0 1px var(--bd-br);border-color:var(--bd-br)}

.cr{transition:all .2s ease}
.cr:hover{transform:translateX(2px);border-color:var(--bd-br)}

/* Quote card (citatnik) premium hover */
.cit-card{transition:all .22s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden}
.cit-card:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(232,201,122,.08)}
.cit-card::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:2px;background:linear-gradient(90deg,transparent,var(--gold),transparent);transition:left .6s ease}
.cit-card:hover::before{left:100%}

/* Flashcard 3d feel */
.fc{will-change:transform;backface-visibility:hidden}

/* Print: hide scroll-progress */
@media print{
  .scroll-progress{display:none!important}

}

/* Animated gradient border for feature callouts */
@keyframes gradient-border{0%{background-position:0% 50%}
100%{background-position:0% 50%}
}
.feature-callout{position:relative;padding:20px;margin:18px 0;border-radius:var(--r3);background:var(--card);overflow:hidden}
.feature-callout::before{content:'';position:absolute;inset:-2px;border-radius:var(--r3);padding:2px;background:linear-gradient(90deg,var(--bronze),var(--gold),var(--red),var(--gold),var(--bronze));background-size:300% 100%;animation:gradient-border 8s linear infinite;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}

/* Count-up micro-animation */
@keyframes count-up{from{opacity:0;transform:translateY(8px)}
}
.stat-badge{animation:count-up .4s ease-out}


/* ══════════════════════════════════════════════════════════════
   SIDEBAR v2 — extensions za 28 H + D01–D22
   
   Dodaje se u postojeći CSS blok poglavlja. Nadograđuje postojeće
   .sb-era, .sb-item, .sb-footer — ne rušeći ih.
   ══════════════════════════════════════════════════════════════ */

/* Nova data-code bazirana identifikacija (bolja od href-a) */
.sb-item[data-code].active{color:var(--gold);background:var(--dim-go);border-left-color:var(--gold);font-weight:600}

/* ══ DODATNO sekcija — vizualno odvojena ══ */
.sb-era.sb-era-d{
  color:var(--gold);
  border-top:1px solid var(--bd-go);
  margin-top:8px;
  padding-top:14px;
}
.sb-d-meta{
  font-family:var(--serif);
  font-size:10px;
  font-style:italic;
  color:var(--t3);
  padding:0 14px 8px;
  line-height:1.4;
  letter-spacing:.1px;
}

/* D-poglavlja — subtilno drugačija od H-poglavlja */
.sb-item.sb-d{
  padding-left:14px;
  font-family:var(--serif);
  font-size:11px;
  line-height:1.4;
  color:var(--t2);
  position:relative;
}
.sb-item.sb-d .sb-dot{
  background:var(--bronze-d);
  opacity:.6;
}
.sb-item.sb-d:hover:not(.disabled){color:var(--gold);background:var(--dim-go)}
.sb-item.sb-d:hover:not(.disabled) .sb-dot{background:var(--gold);opacity:1}
.sb-item.sb-d.active{color:var(--gold);background:var(--dim-go);border-left-color:var(--gold);font-weight:600}
.sb-item.sb-d.active .sb-dot{background:var(--gold);opacity:1}

/* ★ marker za esejska djela 2026 */
.sb-item[data-star="2026"]::after{
  content:'★ 2026';
  position:absolute;
  right:10px;top:50%;
  transform:translateY(-50%);
  font-family:var(--mono);
  font-size:7.5px;
  font-weight:700;
  letter-spacing:.8px;
  color:var(--red-l,#FF5A54);
  background:rgba(220,50,47,.14);
  padding:2px 5px;
  border-radius:var(--r1);
  border:1px solid rgba(220,50,47,.26);
  line-height:1;
  pointer-events:none;
}
.sb-item[data-star="2026"]{padding-right:58px}

/* Mobile — sidebar je u drawer-u, padding treba biti veći za tap target */
@media(max-width:900px){
  .sb-item.sb-d{padding:7px 14px;font-size:12px}

    

/* CHAPTER NAVIGATION (auto-injected) */
.chapter-nav-wrap {
  max-width: 880px;
  margin: 40px auto 28px;
  padding: 0 18px;
}


.chapter-nav-hdr {
  text-align: center;
  margin-bottom: 22px;
}


.chapter-nav-title {
  font-family: var(--display, 'Fraunces', serif);
  font-size: 22px;
  font-weight: 700;
  color: var(--t1, #f4ede5);
  margin-bottom: 4px;
}


.chapter-nav-sub {
  font-size: 13px;
  color: var(--t3, #8a7a6e);
}


.chapter-nav-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 22px;
}


.chapter-nav-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  background: var(--ele, #1f1414);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 14px;
  text-decoration: none;
  color: var(--t1, #f4ede5);
  transition: all 0.15s ease;
}


.chapter-nav-card:hover {
  border-color: var(--gold, #e9b446);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.3);
}


.chapter-nav-prev {
  flex-direction: row;
}


.chapter-nav-next {
  flex-direction: row;
}


.chapter-nav-arrow {
  font-size: 28px;
  color: var(--gold, #e9b446);
  flex-shrink: 0;
  font-family: var(--display, serif);
}


.chapter-nav-meta {
  flex: 1;
}


.chapter-nav-pill {
  display: inline-block;
  padding: 3px 8px;
  background: rgba(74,144,217,0.1);
  color: var(--blue, #4a90d9);
  border-radius: 10px;
  font-family: var(--mono, monospace);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.2px;
  margin-bottom: 6px;
}


.chapter-nav-pill-next {
  background: rgba(233,180,70,0.1);
  color: var(--gold, #e9b446);
}


.chapter-nav-name {
  font-family: var(--display, serif);
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 4px;
}


.chapter-nav-desc {
  font-size: 12px;
  color: var(--t3, #8a7a6e);
  line-height: 1.5;
}


.chapter-nav-related {
  padding: 18px 22px;
  background: var(--ele, #1f1414);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 14px;
}


.chapter-nav-related-ttl {
  font-family: var(--display, serif);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--t1, #f4ede5);
}


.chapter-nav-related-grid {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}


.chapter-nav-mini {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--bg2, #1a1010);
  border: 1px solid var(--bd, #2c1f1f);
  border-radius: 10px;
  text-decoration: none;
  color: var(--t1, #f4ede5);
  transition: all 0.15s ease;
}


.chapter-nav-mini:hover {
  border-color: var(--gold, #e9b446);
  transform: translateY(-1px);
}


.chapter-nav-mini-code {
  font-family: var(--mono, monospace);
  font-size: 10px;
  font-weight: 800;
  color: var(--gold, #e9b446);
  letter-spacing: 0.8px;
}


.chapter-nav-mini-name {
  font-size: 12px;
  color: var(--t2, #c5b8aa);
}


@media (max-width: 720px) {
  .chapter-nav-grid {
    grid-template-columns: 1fr;
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


.mt-paywall-subtitle {
  font-size: 14px;
  color: var(--t2, #aaa);
  line-height: 1.5;
  max-width: 520px;
  margin: 0 auto;
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



/* WC-BOX (auto-injected) */
.wc-box{background:var(--card,#1a1010);border:1px solid var(--bdm,#2c1f1f);border-radius:14px;padding:20px;margin:18px 0}

.wc-hdr{margin-bottom:14px}

.wc-ttl{font-family:var(--serif,'Fraunces',serif);font-size:15px;font-weight:700;color:var(--t1,#f4ede5)}

.wc-textarea{width:100%;min-height:280px;padding:14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px;line-height:1.7;resize:vertical;box-sizing:border-box}

.wc-textarea:focus{outline:none;border-color:var(--gold,#e9b446)}

.wc-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px;margin-top:12px}

.wc-stat{padding:10px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;text-align:center}

.wc-stat-num{font-family:var(--mono,monospace);font-size:18px;font-weight:800;color:var(--t1,#f4ede5)}

.wc-stat-lbl{font-family:var(--mono,monospace);font-size:9px;color:var(--t3,#8a7a6e);letter-spacing:1px;margin-top:2px}

.wc-stat.ok .wc-stat-num{color:var(--green,#50c878)}

.wc-stat.critical .wc-stat-num{color:var(--red,#e05252)}

.wc-progress{margin-top:14px}

.wc-progress-bar-wrap{height:8px;background:var(--inp,#0F0605);border-radius:4px;overflow:hidden;border:1px solid var(--bdl,#2c1f1f)}

.wc-progress-bar{height:100%;background:linear-gradient(90deg,var(--blue,#4a90d9),var(--gold,#e9b446));transition:width .3s}

.wc-progress.pass .wc-progress-bar{background:var(--green,#50c878)}

.wc-progress-lbl{font-family:var(--mono,monospace);font-size:11px;color:var(--t3,#8a7a6e);margin-top:6px;text-align:center;letter-spacing:1px}

.wc-actions{display:flex;gap:8px;margin-top:12px}

.wc-btn{flex:1;padding:8px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);font-family:var(--mono,monospace);font-size:11px;letter-spacing:0.8px;cursor:pointer;transition:all .15s}

.wc-btn:hover{border-color:var(--gold,#e9b446);color:var(--gold,#e9b446)}

.wc-hint{margin-top:12px;padding:10px 12px;background:var(--inp,#0F0605);border-radius:8px;font-size:12px;color:var(--t2,#c5b8aa);line-height:1.5}
`;
const STYLES_CSS = SHARED_LIT_CSS + '\n' + CHAPTER_CSS_DELTA;
const SCRIPTS_JS = `/* ===========================================
   HRVATSKI H01 — JS
   Tabs · Pojmovnik search · Flashcards · Matching · Kviz
   Email capture · Back-to-top · Event tracking
   =========================================== */

/* == SUPABASE CONFIG ==
   ZAMIJENITI prije deploya u production:
   1. SUPABASE_URL      › tvoj Supabase project URL
   2. SUPABASE_ANON_KEY › anon public key iz Settings > API

   Za lokalni test — ostavi placeholder, modal/track će raditi u offline modu.
============================================= */
var SUPABASE_URL = 'https://your-project.supabase.co';
var SUPABASE_ANON_KEY = 'your-anon-key-here';

var CURRENT_CHAPTER = {
  subject: 'hrvatski',
  code: 'h03',
  title: 'Renesansa (europska)'
};

/* == COUNTDOWN — sljedeći maturalni rok ==
   Konfigurabilno: promijeni datum ovdje za različite sezone.
   Ljetni rok 2026: 8. lipnja 2026 (približno — NCVVO objavljuje točan datum)
============================================= */
var MATURA_NEXT = new Date('2026-06-08T08:00:00+02:00');
var MATURA_LABEL = 'Ljetna matura 2026';

function daysToMatura(){
  var now = new Date();
  var ms = MATURA_NEXT - now;
  return Math.max(0, Math.ceil(ms / (1000*60*60*24)));
}

function renderCountdown(targetId){
  var el = document.getElementById(targetId);
  if(!el) return;
  var days = daysToMatura();
  var urgency = days <= 60;
  el.innerHTML = \`
    <div class="cd-ico">⏰</div>
    <div class="cd-body">
      <div class="cd-label">\${urgency ? 'Peak urgency' : 'Do mature'}</div>
      <div class="cd-main"><b>\${days}</b> \${days===1?'dan':(days<5?'dana':'dana')}</div>
      <div class="cd-sub">\${MATURA_LABEL} · \${urgency ? 'svaki dan bez vježbe = izgubljeni bodovi' : 'još ima vremena — pametno uči'}</div>
    </div>
  \`;
}

/* == SOCIAL PROOF ==
   Brojeve puni iz Supabase view-a u produkciji. Sad — placeholder "uskoro".
   Kad budeš imao stvarne brojeve, zamijeni _renderSocialProof.
============================================= */
var SOCIAL_PROOF = {
  active_learners: null,       // "1.247" kad bude podataka
  avg_rating: null,            // 4.8
  review_count: null,          // 312
  avg_improvement: null,       // "+23 boda"
  is_placeholder: true         // toggle na false kad stvarni brojevi stignu
};

function renderSocialProof(targetId, variant){
  var el = document.getElementById(targetId);
  if(!el) return;
  variant = variant || 'full';

  if(SOCIAL_PROOF.is_placeholder){
    // Dok nemamo stvarne korisnike — umjesto laži, prikaži mission signal
    el.innerHTML = \`
      <div class="sp-item">🆓 <b>Besplatno</b> za sve maturante</div>
      <div class="sp-divider"></div>
      <div class="sp-item">✅ Usklađeno s <b>NCVVO</b> katalogom</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ Do mature <b>\${daysToMatura()}</b> dana</div>
    \`;
    return;
  }

  // Kad Supabase stigne — realni brojevi
  if(variant === 'compact'){
    el.innerHTML = \`
      <div class="sp-item">📌 <b>\${SOCIAL_PROOF.active_learners}</b> uči trenutno</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ <b>\${daysToMatura()}</b> dana do mature</div>
    \`;
  } else {
    el.innerHTML = \`
      <div class="sp-item">📌 <b>\${SOCIAL_PROOF.active_learners}</b> maturanata uči</div>
      <div class="sp-divider"></div>
      <div class="sp-item">⭐ <b>\${SOCIAL_PROOF.avg_rating}/5</b> (\${SOCIAL_PROOF.review_count} recenzija)</div>
      <div class="sp-divider"></div>
      <div class="sp-item">📌 prosječno <b>\${SOCIAL_PROOF.avg_improvement}</b> nakon 2 mj</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ <b>\${daysToMatura()}</b> dana do mature</div>
    \`;
  }
}

/* == EVENT TRACKING == */
var TRACK_SESSION_ID = null;
var TRACK_ANON_ID = null;

function _uuid(){
  // RFC4122 v4 (browser-safe, bez crypto.randomUUID za Safari < 15.4)
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
    var r = Math.random()*16|0, v = c==='x'?r:(r&0x3|0x8);
    return v.toString(16);
  });
}

function _initTracking(){
  // Session ID — jedna sesija = jedan tab
  TRACK_SESSION_ID = sessionStorage.getItem('mt.session_id');
  if(!TRACK_SESSION_ID){
    TRACK_SESSION_ID = _uuid();
    try{sessionStorage.setItem('mt.session_id', TRACK_SESSION_ID)}catch(e){}
  }
  // Anon ID — perzistentan preko sesija
  TRACK_ANON_ID = lsLoad('mt.anon_id', null);
  if(!TRACK_ANON_ID){
    TRACK_ANON_ID = _uuid();
    lsSave('mt.anon_id', TRACK_ANON_ID);
  }
}

function track(eventName, props, category){
  if(!TRACK_SESSION_ID) _initTracking();
  var payload = {
    p_session_id: TRACK_SESSION_ID,
    p_event_name: eventName,
    p_event_category: category || 'general',
    p_subject: CURRENT_CHAPTER.subject,
    p_chapter_code: CURRENT_CHAPTER.code,
    p_tab_index: (typeof props === 'object' && props && 'tab' in props) ? props.tab : null,
    p_props: props || {},
    p_anon_id: TRACK_ANON_ID,
    p_url: window.location.href,
    p_viewport_width: window.innerWidth,
    p_viewport_height: window.innerHeight
  };

  // Offline mode: samo log u console kad nije deployano
  if(SUPABASE_URL.indexOf('your-project') >= 0){
    // Tiho — previše noisy u konzoli inače
    // console.debug('[track]', eventName, props);
    return;
  }

  // Fire-and-forget — ne blokiraj UI ako network padne
  try{
    fetch(SUPABASE_URL + '/rest/v1/rpc/track_event', {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      keepalive: true  // omogućuje slanje čak i ako user napusti stranicu
    }).catch(function(){}); // tiho propasti
  }catch(e){}
}

/* == SUPABASE SIGNUP == */


/* == MODAL == */







/* == FULL SCRIPT PRINT (preporučeno, 100% pouzdano) ==
   Koristi postojeći @media print stylesheet — sve tabove vidljive, svijetla pozadina.
   Korisnik u print dijalogu može odabrati "Save as PDF" kao printer. */


/* == CHEAT SHEET: ISOLATED PRINT ==
   Klik na "Ispiši" u cheat kartici › printa SAMO cheat sheet, ne cijelu skriptu */
function printCheatSheet(){
  document.body.classList.add('print-cheat-only');
  // Browser print dialog je sinkron za većinu, ali Safari može biti async — pa dvostruka safety
  setTimeout(function(){
    window.print();
    // Cleanup nakon print dialoga (i ako korisnik cancela)
    setTimeout(function(){
      document.body.classList.remove('print-cheat-only');
    }, 500);
  }, 50);
  track('cheat_sheet_print', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}
// afterprint event je čišćiji način za cleanup
if(typeof window !== 'undefined'){
  window.addEventListener('afterprint', function(){
    document.body.classList.remove('print-cheat-only');
  });
}

/* == MINI-DIJAGNOSTIKA "Mogu li ovo na maturi?" ==
   5 strateški odabranih pitanja koja pokrivaju širok spektar H01 gradiva.
   Cilj: korisnik za 60s zna gdje stoji prije nego krene učiti. */
var DIAG_QUESTIONS = [
  {
    q: "Tko je autor tragedije Hamlet?",
    opts: ["Christopher Marlowe", "William Shakespeare", "Miguel de Cervantes", "Thomas Kyd"],
    correct: 1,
    topic: "Shakespeare — Hamlet"
  },
  {
    q: "Gdje se odvija radnja tragedije Hamlet?",
    opts: [
      "U Veroni",
      "U Elsinoru, danskom kraljevskom dvoru",
      "U Londonu",
      "U Veneciji"
    ],
    correct: 1,
    topic: "Hamlet — mjesto radnje"
  },
  {
    q: "Tko je ubio Hamletovog oca?",
    opts: [
      "Fortinbras, norveški princ",
      "Klaudije, Hamletov stric",
      "Laert, Polonijev sin",
      "Polonije, kraljev komornik"
    ],
    correct: 1,
    topic: "Hamlet — radnja"
  },
  {
    q: 'Što je „revenge tragedy”?',
    opts: [
      "Lirska pjesma o ljubavi",
      "Engleska osvetnička tragedija — žanr 16./17. st., uzori Seneka i Thomas Kyd",
      "Vrsta renesansnog soneta",
      "Politička satira na dvoru Elizabete I."
    ],
    correct: 1,
    topic: "Revenge tragedy"
  },
  {
    q: "Što je blank verse?",
    opts: [
      "Stih koji se ne rimuje s ostalima u strofi",
      "Nerimovani jampski pentametar — standardni stih Shakespeareovih drama",
      "Slobodni stih bez ikakvog metra",
      "Stih s prekinutim krajem"
    ],
    correct: 1,
    topic: "Blank verse"
  }
];

var diagState = {
  idx: 0,
  correct: 0,
  answered: [],
  started: 0
};

function diagStart(){
  diagState.idx = 0;
  diagState.correct = 0;
  diagState.answered = [];
  diagState.started = Date.now();
  document.getElementById('diag').setAttribute('data-state', 'quiz');
  diagRender();
  track('diag_start', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}

function diagSkip(){
  document.getElementById('diag').setAttribute('data-state', 'dismissed');
  try{ sessionStorage.setItem('mt.hrv.h03.diag', 'skipped') }catch(e){}
  track('diag_skip', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}

function diagDismiss(){
  document.getElementById('diag').setAttribute('data-state', 'dismissed');
  try{
    sessionStorage.setItem('mt.hrv.h03.diag', JSON.stringify({
      done: true,
      score: diagState.correct,
      ts: Date.now()
    }));
  }catch(e){}
}

function diagRestart(){
  diagStart();
}

function diagRender(){
  var q = DIAG_QUESTIONS[diagState.idx];
  if(!q) return diagFinish();
  var qEl = document.getElementById('diag-q');
  var optsEl = document.getElementById('diag-opts');
  var curEl = document.getElementById('diag-cur');
  var fillEl = document.getElementById('diag-fill');
  if(qEl) qEl.textContent = q.q;
  if(curEl) curEl.textContent = (diagState.idx + 1);
  if(fillEl) fillEl.style.width = (((diagState.idx + 1) / DIAG_QUESTIONS.length) * 100) + '%';
  if(optsEl){
    optsEl.innerHTML = '';
    q.opts.forEach(function(opt, i){
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'diag-opt';
      btn.textContent = opt;
      btn.onclick = function(){ diagAnswer(i) };
      optsEl.appendChild(btn);
    });
  }
}

function diagAnswer(answerIdx){
  var q = DIAG_QUESTIONS[diagState.idx];
  var isCorrect = (answerIdx === q.correct);
  diagState.answered.push({
    topic: q.topic,
    correct: isCorrect,
    skipped: (answerIdx === null)
  });
  if(isCorrect) diagState.correct++;

  // Visual feedback
  var optsEl = document.getElementById('diag-opts');
  if(optsEl && answerIdx !== null){
    var buttons = optsEl.querySelectorAll('.diag-opt');
    buttons.forEach(function(b, i){
      b.disabled = true;
      if(i === q.correct) b.classList.add('diag-correct');
      else if(i === answerIdx) b.classList.add('diag-wrong');
    });
    if(isCorrect) soundOk(); else soundNg();
    // 1.2s delay pa sljedeće
    setTimeout(function(){
      diagState.idx++;
      diagRender();
      if(diagState.idx >= DIAG_QUESTIONS.length) diagFinish();
    }, 1200);
  } else {
    // Skipped — odmah sljedeće
    diagState.idx++;
    if(diagState.idx >= DIAG_QUESTIONS.length) diagFinish();
    else diagRender();
  }
}

function diagFinish(){
  var n = diagState.correct;
  var msgEl = document.getElementById('diag-msg');
  var recEl = document.getElementById('diag-rec');
  var corEl = document.getElementById('diag-correct');
  if(corEl) corEl.textContent = n;

  // Personalizirana poruka i preporuka
  var msg, rec;
  if(n === 5){
    msg = '🏆 Već vladaš H03 — bravo!';
    rec = 'Tvoj fokus: <b>esej alat</b> i <b>citatnik</b> za Hamleta. Pređi na simulaciju u <a href="/discere?subject=hrvatski&topic=hamlet&ctx=h03_diag_top" onclick="track(\\'upsell_click\\',{ctx:\\'diag_top_score\\',target:\\'discere\\'},\\'conversion\\')">Discere simulatoru</a> da provjeriš pod uvjetima ispita.';
  } else if(n === 4){
    msg = '🌟 Odlično — solidne osnove.';
    rec = 'Imaš većinu, ali jedna rupica. Preporučujemo: <b>Hamlet deep-dive</b> + <b>Pojmovnik</b> kao revizija. Preskoči duga čitanja, idi direktno na <b>Citatnik</b> i <b>Drill</b>.';
  } else if(n === 3){
    msg = '📚 Dobre osnove — treba malo više rada.';
    rec = 'Imaš osnovni pregled, ali ti fali sigurnost u detaljima. Plan: <b>(1)</b> proradi cijelu Teoriju, <b>(2)</b> Hamlet deep-dive, <b>(3)</b> Drill flashcards 2× prije Kviza.';
  } else if(n === 2){
    msg = '💪 Tu smo da ti pomognemo — krenimo od početka.';
    rec = 'Ne brini — zato si tu. Idi <b>tab po tab redom</b> (Teorija › Hamlet › Esej alat). Ne preskači. Završi s <b>Drillom i Kvizom</b> kao provjera.';
  } else {
    msg = '🎯 Početna točka — sve je pred tobom.';
    rec = 'Hamlet je obvezatno čitanje 2026 — vrijedi se potruditi. Prati redoslijed tabova, ne žuri. <b>Cilj #1:</b> razumjeti Hamletovu dilemu i 5 centralnih sukoba (sekcija 02–04 u Hamlet tabu). Kad to imaš, sve ostalo dolazi prirodno.';
  }
  if(msgEl) msgEl.textContent = msg;
  if(recEl) recEl.innerHTML = rec;

  document.getElementById('diag').setAttribute('data-state', 'result');

  var duration = Date.now() - diagState.started;
  track('diag_complete', {
    chapter: CURRENT_CHAPTER.code,
    score: n,
    total: DIAG_QUESTIONS.length,
    duration_ms: duration,
    weak_topics: diagState.answered.filter(function(a){return !a.correct}).map(function(a){return a.topic})
  }, 'engagement');
}

/* Restore dismissed state na load */
function _diagRestore(){
  try{
    var s = sessionStorage.getItem('mt.hrv.h03.diag');
    if(s){
      document.getElementById('diag').setAttribute('data-state', 'dismissed');
    }
  }catch(e){}
}

/* == PDF EXPORT (v3.6.1) ==
   Lazy-loadan html2pdf.js (CDN). Ako library load ili PDF generacija zakaže,
   fallbackamo na window.print() koji koristi naš print stylesheet. */







/* == FEEDBACK MODAL (v3.6.1) == */
function openFeedbackModal(){
  var bd = document.getElementById('fb-modal-backdrop');
  if(!bd) return;
  // Reset state
  var form = document.getElementById('fb-form');
  if(form) form.reset();
  // Default type selection — content_error
  var defaultRadio = document.querySelector('input[name="fb-type"][value="content_error"]');
  if(defaultRadio) defaultRadio.checked = true;
  var msg = document.getElementById('fb-msg');
  if(msg){msg.className='modal-msg'; msg.textContent=''}
  var counter = document.getElementById('fb-char-count');
  if(counter) counter.textContent = '0';
  var btn = document.getElementById('fb-submit');
  if(btn){btn.disabled=false; btn.textContent='Pošalji ›'}
  if(form) form.style.display = 'flex';

  bd.classList.add('show');
  setTimeout(function(){
    var ta = document.getElementById('fb-message');
    if(ta) ta.focus();
  }, 100);

  track('feedback_modal_open', {
    tab: lsLoad('mt.hrv.h03.tab', 0)
  }, 'engagement');
}

function closeFeedbackModal(){
  var bd = document.getElementById('fb-modal-backdrop');
  if(bd) bd.classList.remove('show');
}

function submitFeedback(ev){
  ev.preventDefault();
  var msgEl = document.getElementById('fb-message');
  var emailEl = document.getElementById('fb-email');
  var btn = document.getElementById('fb-submit');
  var fbMsg = document.getElementById('fb-msg');
  var typeEl = document.querySelector('input[name="fb-type"]:checked');

  var message = (msgEl && msgEl.value || '').trim();
  var email = (emailEl && emailEl.value || '').trim().toLowerCase();
  var feedbackType = (typeEl && typeEl.value) || 'general';

  // Validacija
  if(message.length < 3){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ Poruka mora imati barem 3 znaka.'}
    return false;
  }
  if(message.length > 5000){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ Poruka ne smije biti duža od 5000 znakova.'}
    return false;
  }
  if(email && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$/i.test(email)){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ E-mail adresa nije valjana (ostavi prazno ako ne želiš odgovor).'}
    return false;
  }

  btn.disabled = true;
  btn.textContent = 'Šaljem...';
  if(fbMsg){fbMsg.className='modal-msg'}

  var payload = {
    p_message: message,
    p_feedback_type: feedbackType,
    p_email: email || null,
    p_subject: CURRENT_CHAPTER.subject,
    p_chapter_code: CURRENT_CHAPTER.code,
    p_tab_index: lsLoad('mt.hrv.h03.tab', 0),
    p_url: window.location.href,
    p_viewport_width: window.innerWidth,
    p_viewport_height: window.innerHeight
  };

  // Offline / placeholder mode — simulate success
  if(SUPABASE_URL.indexOf('your-project') >= 0){
    setTimeout(function(){
      if(fbMsg){fbMsg.className='modal-msg show success'; fbMsg.textContent='✓ Hvala! Poruka primljena. (Offline način — nije stvarno poslano)'}
      var form = document.getElementById('fb-form');
      if(form) form.style.display = 'none';
      track('feedback_submit', {type: feedbackType, offline: true}, 'engagement');
      soundOk();
      setTimeout(closeFeedbackModal, 2400);
    }, 600);
    return false;
  }

  fetch(SUPABASE_URL + '/rest/v1/rpc/submit_feedback', {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(function(r){return r.json()}).then(function(res){
    if(res && res.success){
      if(fbMsg){fbMsg.className='modal-msg show success'; fbMsg.textContent='✓ '+(res.message || 'Hvala! Primili smo tvoju poruku.')}
      var form = document.getElementById('fb-form');
      if(form) form.style.display = 'none';
      track('feedback_submit', {type: feedbackType, has_email: !!email}, 'engagement');
      soundOk();
      setTimeout(closeFeedbackModal, 2400);
    } else {
      if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ '+((res && res.message) || 'Nešto je pošlo krivo. Pokušaj ponovo ili pošalji e-mail direktno.')}
      btn.disabled = false;
      btn.textContent = 'Pošalji ›';
      soundNg();
    }
  }).catch(function(){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ Greška u mreži. Pošalji e-mail na maturirajgreske@gmail.com'}
    btn.disabled = false;
    btn.textContent = 'Pošalji ›';
  });

  return false;
}

/* == LOCKED SIDEBAR LINK › OPEN MODAL == */


/* == SVG HOTSPOT TOOLTIP (v3.5) == */
var _svgTtEl = null;
var _svgTtTtl = null;
var _svgTtTxt = null;
var _svgTtHideTimer = null;
var _svgTtLastClicked = null;

function _svgTtInit(){
  _svgTtEl = document.getElementById('svg-tt');
  _svgTtTtl = document.getElementById('svg-tt-ttl');
  _svgTtTxt = document.getElementById('svg-tt-txt');
  if(!_svgTtEl) return;

  var hotspots = document.querySelectorAll('.svg-hs');
  hotspots.forEach(function(hs){
    hs.addEventListener('mouseenter', function(e){ _svgTtShow(hs, e) });
    hs.addEventListener('mouseleave', _svgTtScheduleHide);
    hs.addEventListener('focus', function(e){ _svgTtShow(hs, e) });
    hs.addEventListener('blur', _svgTtScheduleHide);
    // Click/tap toggle (mobilni)
    hs.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      if(_svgTtLastClicked === hs && _svgTtEl.classList.contains('show')){
        _svgTtHide();
        _svgTtLastClicked = null;
      } else {
        _svgTtShow(hs, e);
        _svgTtLastClicked = hs;
      }
    });
    // Keyboard — Enter/Space
    hs.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        _svgTtShow(hs, e);
        _svgTtLastClicked = hs;
      } else if(e.key === 'Escape'){
        _svgTtHide();
        hs.blur();
      }
    });
  });

  // Close on outside click (mobile)
  document.addEventListener('click', function(e){
    if(_svgTtLastClicked && !e.target.closest('.svg-hs') && !e.target.closest('.svg-tt')){
      _svgTtHide();
      _svgTtLastClicked = null;
    }
  });

  // Close on scroll (inače tooltip visi iznad sadržaja)
  window.addEventListener('scroll', function(){
    if(_svgTtEl && _svgTtEl.classList.contains('show')){
      _svgTtHide();
      _svgTtLastClicked = null;
    }
  }, {passive: true});
}

function _svgTtShow(hs, ev){
  if(!_svgTtEl) return;
  clearTimeout(_svgTtHideTimer);

  var ttl = hs.getAttribute('data-tip-ttl') || '';
  var txt = hs.getAttribute('data-tip-txt') || '';
  _svgTtTtl.textContent = ttl;
  _svgTtTxt.innerHTML = txt; // HTML jer ima <em>
  _svgTtEl.setAttribute('aria-hidden', 'false');

  // Pozicioniranje: blizu bounding boxa hotspota
  var rect = hs.getBoundingClientRect();
  var ttRect = _svgTtEl.getBoundingClientRect();
  // Prvo placement: ispod hotspota, centrirano
  var ttW = 280; // max-width iz CSS-a
  var margin = 12;
  var vw = window.innerWidth;
  var vh = window.innerHeight;

  var anchorX = rect.left + rect.width / 2;
  var anchorY = rect.bottom + 10;

  // Ako ide izvan ekrana vodoravno — korigiraj
  var left = anchorX - ttW / 2;
  if(left + ttW + margin > vw) left = vw - ttW - margin;
  if(left < margin) left = margin;

  // Ako nema mjesta ispod — stavi iznad
  var top = anchorY;
  // Moramo znati height tooltipa — nakon što sadržaj stigne
  _svgTtEl.style.left = left + 'px';
  _svgTtEl.style.top = top + 'px';
  _svgTtEl.classList.add('show');

  // Sad kad ima sadržaj, provjeri preklapa li dno ekrana
  requestAnimationFrame(function(){
    var realRect = _svgTtEl.getBoundingClientRect();
    if(realRect.bottom + margin > vh && rect.top > realRect.height + 20){
      // Stavi iznad hotspota
      top = rect.top - realRect.height - 10;
      _svgTtEl.style.top = top + 'px';
      // Obrni strelicu
      _svgTtEl.classList.add('above');
    } else {
      _svgTtEl.classList.remove('above');
    }
  });

  track('svg_hotspot_view', {hotspot: ttl.toLowerCase().replace(/\\s+/g,'_')}, 'engagement');
}

function _svgTtScheduleHide(){
  clearTimeout(_svgTtHideTimer);
  _svgTtHideTimer = setTimeout(function(){
    if(_svgTtLastClicked) return; // pinned preko click-a, ne zatvaraj
    _svgTtHide();
  }, 180);
}

function _svgTtHide(){
  if(!_svgTtEl) return;
  _svgTtEl.classList.remove('show');
  _svgTtEl.setAttribute('aria-hidden', 'true');
}

/* == CITATNIK SEARCH + FILTER (v3.5) == */
var CIT_STATE = {q: '', src: 'all'};
var CIT_ITEMS_CACHE = null;

function _citItems(){
  if(!CIT_ITEMS_CACHE){
    CIT_ITEMS_CACHE = Array.prototype.slice.call(
      document.querySelectorAll('#l3 [data-q-src]')
    );
  }
  return CIT_ITEMS_CACHE;
}
function _citSections(){
  return Array.prototype.slice.call(
    document.querySelectorAll('#l3 [data-cit-section]')
  );
}

function _normalize(s){
  // Normaliziraj hrvatske znakove za search (č›c, š›s itd.)
  return (s||'').toLowerCase()
    .replace(/č|ć/g,'c').replace(/š/g,'s').replace(/ž/g,'z')
    .replace(/đ/g,'d').replace(/[„”"'']/g,'');
}

function _citApplyFilters(){
  var items = _citItems();
  var q = _normalize(CIT_STATE.q);
  var src = CIT_STATE.src;
  var shown = 0;
  var shownBySection = {};

  items.forEach(function(el){
    var itemSrc = el.getAttribute('data-q-src');
    var searchText = _normalize(
      (el.getAttribute('data-q-text')||'') + ' ' + (el.textContent||'')
    );
    var matchesSrc = (src === 'all' || itemSrc === src);
    var matchesQ = (!q || searchText.indexOf(q) !== -1);
    var visible = matchesSrc && matchesQ;
    el.classList.toggle('cit-hidden', !visible);
    if(q && visible){
      el.classList.add('cit-highlight');
    } else {
      el.classList.remove('cit-highlight');
    }
    if(visible){
      shown++;
      shownBySection[itemSrc] = (shownBySection[itemSrc]||0) + 1;
    }
  });

  // Hide prazne sekcije
  _citSections().forEach(function(sec){
    var secSrc = sec.getAttribute('data-cit-section');
    if(secSrc === 'index') return;
    var hasItems = shownBySection[secSrc] > 0;
    var hide = !hasItems || (src !== 'all' && src !== secSrc);
    sec.classList.toggle('cit-hidden', hide);
  });

  // Tematski index vidljiv samo ako nema search query
  var indexSec = document.querySelector('#l3 [data-cit-section="index"]');
  if(indexSec){
    var hideIndex = q || src !== 'all';
    indexSec.classList.toggle('cit-hidden', hideIndex);
    var next = indexSec.nextElementSibling;
    while(next && !next.classList.contains('nav-row')){
      if(next.classList.contains('prose') || next.classList.contains('tbl')){
        next.classList.toggle('cit-hidden', hideIndex);
      }
      next = next.nextElementSibling;
    }
  }

  // Stats
  var stats = document.getElementById('cit-stats');
  if(stats){
    if(q || src !== 'all'){
      stats.textContent = shown + ' ' + (shown===1?'citat':(shown<5?'citata':'citata')) + ' pronađeno';
    } else {
      stats.textContent = items.length + ' citata ukupno';
    }
  }

  var nr = document.getElementById('cit-no-results');
  if(nr){
    nr.classList.toggle('show', shown === 0 && (q || src !== 'all'));
  }

  var clr = document.getElementById('cit-clear');
  if(clr) clr.classList.toggle('show', !!q);
}

function citFilter(src){
  CIT_STATE.src = src;
  document.querySelectorAll('.cit-filter').forEach(function(btn){
    btn.classList.toggle('active', btn.getAttribute('data-src') === src);
    btn.setAttribute('aria-pressed', btn.getAttribute('data-src') === src ? 'true' : 'false');
  });
  _citApplyFilters();
  track('cit_filter', {src: src}, 'engagement');
}

function citClear(){
  CIT_STATE.q = '';
  var inp = document.getElementById('cit-search');
  if(inp){ inp.value = ''; inp.focus(); }
  _citApplyFilters();
}

function _citInit(){
  var inp = document.getElementById('cit-search');
  if(!inp) return;
  var timer = null;
  inp.addEventListener('input', function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
      CIT_STATE.q = inp.value.trim();
      _citApplyFilters();
      if(CIT_STATE.q.length >= 2){
        track('cit_search', {q_length: CIT_STATE.q.length}, 'engagement');
      }
    }, 150);
  });
  var tools = document.querySelector('.cit-tools');
  if(tools && !document.getElementById('cit-no-results')){
    var nr = document.createElement('div');
    nr.id = 'cit-no-results';
    nr.className = 'cit-no-results';
    nr.innerHTML = 'Nema citata za taj upit. Pokušaj s drugom riječi ili filterom.';
    tools.parentNode.insertBefore(nr, tools.nextSibling);
  }
}

/* == TABS == */
var quizInited=false, drillInited=false;
var VISITED_TABS={};
var QUIZ_PASSED=false; // nakon kviza ?60%
var _tabStartTime = Date.now();

/* Breadcrumb tab labele (v3.6) */
var TAB_LABELS = ['Teorija','Hamlet','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];

/* == SIDEBAR + PROGATE JS (v2) == */
/* ==============================================================
   SIDEBAR + PROGATE JS — Maturiraj Hrvatski v2
   
   Ubacuje se u glavni <script> blok poglavlja (prije sw() funkcije).
   Ovisi o CURRENT_CHAPTER.code (string, npr. 'h11' ili 'd10').
   ============================================================== */

/* == SIDEBAR ACTIVATION ==
   Označava trenutno poglavlje s active klasom i disables sve koja
   još nisu objavljena (nemaju HTML fajl).
*/
var PUBLISHED_CHAPTERS = {
  /* Lista objavljenih poglavlja. Update-a se kako izlaze nova.
     U production okolini ovo se može dohvatiti iz Supabase publish tablice. */
  h01: true, h02: true, h03: true, h04: true, h05: true,
  h06: true, h07: true, h08: true, h09: true, h10: true,
  h11: true, h12: true, h13: true, h14: true, h15: true, h16: true,
  h17: true, h18: true,
  h19: true, h20: true, h21: true, h22: true, h23: true, h24: true,
  h25: true, h26: true, h27: true, h28: true,
  /* D-poglavlja */
  d01: false, d02: false, d03: false, d04: true,  d05: false,
  d06: false, d07: false, d08: false, d09: false, d10: true,
  d11: false, d12: false, d13: false, d14: false, d15: false,
  d16: false, d17: false, d18: false, d19: false, d20: false,
  d21: false, d22: false
};

/* Chapter titles za sb-footer meta */
var CHAPTER_TITLES = {
  h01:'temelji i antika', h02:'srednji vijek', h03:'renesansa',
  h04:'barok i klasicizam', h05:'prosvjetiteljstvo', h06:'romantizam',
  h07:'realizam', h08:'moderna', h09:'avangarda i 20. st.', h10:'postmoderna',
  h11:'stari hrv. pisci', h12:'Marulić i hrv. rens.', h13:'hrv. barok — Gundulić',
  h14:'preporod', h15:'Šenoa i realizam', h16:'Krleža i moderna',
  h17:'stilske figure', h18:'versifikacija',
  h19:'fonetika i fonologija', h20:'morfologija', h21:'sintaksa',
  h22:'leksikologija', h23:'povijest hrv. jezika', h24:'hrv. narječja',
  h25:'pravopisna pravila', h26:'interpunkcija',
  h27:'školski esej', h28:'sažetak',
  d01:'Antigona', d02:'Petrarca · izbor', d03:'Hamlet', d04:'Život je san',
  d05:'Škrtac', d06:'Werther', d07:'Zločin i kazna', d08:'Preobražaj',
  d09:'Stranac', d10:'Cvjetovi zla', d11:'Novela od Stanca', d12:'Judita',
  d13:'Dubravka', d14:'Smail-aga', d15:'Prijan Lovro', d16:'Posljednji Stipančići',
  d17:'Kranjčević · poezija', d18:'Matoš · izbor', d19:'Nazor · poezija',
  d20:'Šimić · poezija', d21:'Glembajevi', d22:'Kiklop'
};

function initSidebar(){
  var currentCode = (CURRENT_CHAPTER && CURRENT_CHAPTER.code) || '';
  var items = document.querySelectorAll('.sb-item[data-code]');
  items.forEach(function(item){ item.classList.remove('active','completed','disabled'); });
  var currentIdx = -1;
  var totalMain = 28; /* H-poglavlja samo, za footer "N / 28" */

  items.forEach(function(item){
    var code = item.getAttribute('data-code');
    var isCurrent = code === currentCode;
    var isPublished = PUBLISHED_CHAPTERS[code] === true;

    /* Active state */
    if(isCurrent){
      item.classList.add('active');
      item.setAttribute('aria-current','page');
      if(code.indexOf('h')===0){
        currentIdx = parseInt(code.slice(1),10);
      }
    }

    /* Disabled state + modal za coming soon */
    if(!isPublished && !isCurrent){
      item.classList.add('disabled');
      item.setAttribute('aria-disabled','true');
      item.setAttribute('title','Klikni da te obavijestimo kad izađe');
      item.removeAttribute('href');
      item.addEventListener('click', function(e){
        e.preventDefault();
        var title = (item.textContent||'').replace(/^[hd]\\d\\d\\s·\\s/i,'').trim();
        /* signup uklonjen */
        return false;
      });
    } else if (isPublished) {
      /* Only mark completed if user finished all checkpoints for this chapter */
      try {
        var cpKey = 'mt.hrv.' + code + '.cp';
        var cpRaw = localStorage.getItem(cpKey);
        if (cpRaw) {
          var cpArr = JSON.parse(cpRaw);
          if (Array.isArray(cpArr) && cpArr.length > 0 && cpArr.every(function(v){ return v === true; })) {
            item.classList.add('completed');
          }
        }
      } catch(e) {}
    }
  });

  /* Footer meta */
  var footPos = document.getElementById('sb-footer-pos');
  var footTitle = document.getElementById('sb-footer-title');
  if(footPos){
    if(currentCode.indexOf('d')===0){
      footPos.textContent = currentCode.toUpperCase() + ' · dodatno';
    } else if(currentIdx > 0){
      footPos.textContent = String(currentIdx).padStart(2,'0') + ' / ' + totalMain;
    }
  }
  if(footTitle){
    footTitle.textContent = CHAPTER_TITLES[currentCode] || '';
  }

  /* Progress bar — broji completed H-poglavlja */
  var doneH = Object.keys(PUBLISHED_CHAPTERS).filter(function(k){
    return k.indexOf('h')===0 && PUBLISHED_CHAPTERS[k];
  }).length;
  var pct = Math.round((doneH / totalMain) * 100);
  var progBar = document.getElementById('prog-bar');
  var progPct = document.getElementById('prog-pct');
  if(progBar) progBar.style.width = pct + '%';
  if(progPct) progPct.textContent = pct + '%';
}

/* == TIER DETECTION + PROGATE ==
   Čita user tier iz localStorage (dev/free preview) ili Supabase session
   (production). Postavlja body[data-tier] atribut koji CSS-om kontrolira
   sve .pro-gate wrapere.
*/
function detectTier(){
  /* Production: dohvati iz Supabase sessije (async, cachea rezultat) */
  /* Development: localStorage override za testing */
  var override = null;
  try { override = localStorage.getItem('mt.user.tier'); } catch(e){}
  return override || 'free';
}

function applyTier(){
  var tier = detectTier();
  document.body.setAttribute('data-tier', tier);
  /* Progate CTA linkove obogaćujemo s kontekstom (koji feature je gated) */
  document.querySelectorAll('.pro-gate').forEach(function(gate){
    var feat = gate.getAttribute('data-feature') || 'generic';
    var btn = gate.querySelector('.pro-gate-btn');
    if(btn && !btn.href.includes('ctx=')){
      var sep = btn.href.indexOf('?') >= 0 ? '&' : '?';
      btn.href = btn.href + sep + 'ctx=' + feat + '_' +
                 ((typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || 'unknown');
    }
    /* Track impression — koji gate je viđen */
    if(tier === 'free'){
      track('paywall_impression', {
        feature: feat,
        chapter: (typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || ''
      }, 'conversion');
    }
  });
}

/* Pomoćno za testing iz konzole: setTier('standard') */
function setTierLegacy(t){
  try { localStorage.setItem('mt.user.tier', t); } catch(e){}
  applyTier();
}

/* Init kaskada */
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', function(){
    initSidebar();
    applyTier();
  });
} else {
  initSidebar();
  applyTier();
}



/* == MUST-KNOW BOX — expand/collapse == */
function mkToggle(el){
  if(!el) return;
  var isOpen = el.classList.toggle('mk-open');
  el.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  var lbl = (el.querySelector('.mk-lbl')||{}).textContent || '';
  if(typeof track === 'function'){
    track('must_know_expand', {
      chapter: (typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || '',
      row: lbl.trim(), opened: isOpen
    }, 'engagement');
  }
}
document.addEventListener('keydown', function(e){
  if(e.key !== 'Enter' && e.key !== ' ') return;
  var el = document.activeElement;
  if(el && el.classList && el.classList.contains('mk-row')){
    e.preventDefault();
    mkToggle(el);
  }
});

/* == FC (Flashcards) paywall — free tier limit == */
var FC_FREE_LIMIT = 5;
function fcIsPaid(){
  var t = (document.body.getAttribute('data-tier')||'free');
  return t === 'standard' || t === 'pro';
}
function fcShowPaywall(){
  var wrap = document.querySelector('.fc-wrap');
  if(!wrap) return;
  var existing = document.getElementById('fc-paywall');
  if(existing){existing.scrollIntoView({behavior:'smooth',block:'center'});return;}
  var chapter = (typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || 'unknown';
  var html = '<div id="fc-paywall" class="drill-paywall" data-feature="drill-flashcards">' +
             '<div class="drill-paywall-ico">🔒</div>' +
             '<div class="drill-paywall-title">15 više kartica + Matching + Spaced repetition</div>' +
             '<div class="drill-paywall-sub">Drill je aktivno učenje — 4× efikasnije od pasivnog čitanja. Svih 20 kartica + 9 pair matchingov.</div>' +
             '<a class="pro-gate-btn" href="/pricing?ctx=drill_flashcards_' + chapter + '">Otključaj — 9,99€/mj</a>' +
             '<div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>' +
             '</div>';
  wrap.insertAdjacentHTML('afterend', html);
  if(typeof track === 'function'){
    track('paywall_impression', {feature:'drill-flashcards', chapter:chapter, at_card:fcIdx}, 'conversion');
  }
}

/* == Quiz paywall — free tier limit == */
var QZ_FREE_LIMIT = 5;
function qzIsPaid(){
  var t = (document.body.getAttribute('data-tier')||'free');
  return t === 'standard' || t === 'pro';
}
function qzShowPaywall(){
  var app = document.getElementById('qz-app');
  if(!app) return;
  var chapter = (typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || 'unknown';
  app.innerHTML = '<div class="qz-paywall"><div class="qz-paywall-ico">🔒</div>' +
    '<div class="qz-paywall-label">Odgovorio si ' + qzState.score + ' / ' + QZ_FREE_LIMIT + ' pitanja u free verziji</div>' +
    '<div class="qz-paywall-sub">Standard tier otključava svih <b>20 pitanja</b> + <b>score tracking</b> + <b>wrong answers review</b>.</div>' +
    '<a class="pro-gate-btn" href="/pricing?ctx=quiz_full_' + chapter + '">Otključaj kviz — 9,99€/mj</a>' +
    '<div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div></div>';
  if(typeof track === 'function'){
    track('paywall_impression', {feature:'quiz-full', chapter:chapter, at_q:qzState.idx}, 'conversion');
  }
}



/* Override applyTier — direktan atribut-toggle umjesto CSS cascade ovisnosti
   (jsdom CSS parser ne parsa sva pravila u nekim velikim fajlovima) */
var _origApplyTier = typeof applyTier === 'function' ? applyTier : null;
function applyGateState(){
  var tier = (document.body.getAttribute('data-tier')||'free');
  var hidden = tier === 'standard' || tier === 'pro';
  document.querySelectorAll('.pro-gate-overlay').forEach(function(ov){
    ov.setAttribute('data-gate-state', hidden ? 'hidden' : 'visible');
  });
}
/* Wrap original applyTier da nakon tier promjene toggle-a gate state */
applyTier = function(){
  if(_origApplyTier) _origApplyTier.apply(this, arguments);
  applyGateState();
};
/* Apply na load */
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', applyGateState);
} else {
  applyGateState();
}

function sw(i){
  // Track prethodni tab duration
  var prevTab = lsLoad('mt.hrv.h03.tab', null);
  if(prevTab !== null && prevTab !== i){
    var dur = Date.now() - _tabStartTime;
    if(dur > 300) track('tab_leave', {tab: prevTab, duration_ms: dur}, 'navigation');
  }
  _tabStartTime = Date.now();

  var allTabs=document.querySelectorAll('[onclick^="sw("]');
  allTabs.forEach(function(t,idx){
    var active=idx===i;
    t.classList.toggle('on',active);
    if(t.hasAttribute('role')&&t.getAttribute('role')==='tab'){
      t.setAttribute('aria-selected',active?'true':'false');
    }
  });
  document.querySelectorAll('.layer').forEach(function(l,idx){l.classList.toggle('on',idx===i)});
  if(i===5&&!drillInited){initDrill();initMatch();drillInited=true;}
  if(i===6&&!quizInited){renderQuizIntro();quizInited=true;}
  lsSave('mt.hrv.h03.tab',i);

  VISITED_TABS[i]=true;
  lsSave('mt.hrv.h03.visited',VISITED_TABS);
  recomputeProgress();
  updateTabBadges();

  // Breadcrumb update (v3.6)
  var bcTab = document.getElementById('bc-tab');
  if(bcTab && TAB_LABELS[i]) bcTab.textContent = TAB_LABELS[i];

  track('tab_view', {tab: i, first_visit: Object.keys(VISITED_TABS).length===1}, 'navigation');

  window.scrollTo({top:0,behavior:'smooth'});
}

// FIX v3: jedinstveni izvor istine za progress
// Tab posjete (0-40%) + Kviz polazak (0-20%) + Checkpoint stavke (0-40%) = 100%
function recomputeProgress(){
  var visitedCount=Object.keys(VISITED_TABS).length;
  var tabPct=Math.round((visitedCount/8)*40);
  var quizPct=QUIZ_PASSED?20:0;
  var cpItems=document.querySelectorAll('.cp-item');
  var cpDone=document.querySelectorAll('.cp-item.done').length;
  var cpPct=cpItems.length>0?Math.round((cpDone/cpItems.length)*40):0;
  var total=Math.max(5,Math.min(100,tabPct+quizPct+cpPct));
  updateProgress(total);
}

function updateTabBadges(){
  var allTabs=document.querySelectorAll('[onclick^="sw("]');
  allTabs.forEach(function(t,idx){
    var existing=t.querySelector('.tab-badge');
    if(VISITED_TABS[idx]){
      if(!existing){
        var b=document.createElement('span');
        b.className='tab-badge';
        b.style.display='none';
        b.textContent='?';
        t.appendChild(b);
      }
    } else {
      if(existing) existing.remove();
    }
  });
}

/* == SIDEBAR == */
function toggleSidebar(){var s=document.getElementById('sidebar'),o=document.getElementById('overlay');s.classList.toggle('mobile-open');o.classList.toggle('show')}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show')}

/* == LOCALSTORAGE == */
function lsSave(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function lsLoad(k,def){try{var v=localStorage.getItem(k);return v!==null?JSON.parse(v):def}catch(e){return def}}

/* == SOUND == */
function beep(f,d,v,t){try{var c=new(window.AudioContext||window.webkitAudioContext)(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=f;o.type=t||'sine';g.gain.setValueAtTime(v||0.08,c.currentTime);g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+d);o.start(c.currentTime);o.stop(c.currentTime+d)}catch(e){}}
function soundOk(){beep(660,.1,.08,'sine');setTimeout(function(){beep(880,.14,.07,'sine')},110)}
function soundNg(){beep(200,.18,.08,'sawtooth')}
function soundDone(){[440,550,660,880].forEach(function(f,i){setTimeout(function(){beep(f,.18,.07,'sine')},i*90)})}

/* == PROGRESS == */
function updateProgress(pct){
  var p=Math.max(5,pct);
  var pb=document.getElementById('prog-bar'); if(pb) pb.style.width=p+'%';
  var pct2=document.getElementById('prog-pct'); if(pct2) pct2.textContent=p+'%';
  var hp=document.getElementById('hero-pb'); if(hp) hp.style.width=p+'%';
  var hl=document.getElementById('hero-prog-lbl'); if(hl) hl.textContent=p+'% završeno';
  lsSave('mt.hrv.h03.prog',p);
}

/* == RESTORE BANNER == */
function checkRestore(){
  var prog=lsLoad('mt.hrv.h03.prog',null);
  var tab=lsLoad('mt.hrv.h03.tab',null);
  var cp=lsLoad('mt.hrv.h03.cp',null);
  var visited=lsLoad('mt.hrv.h03.visited',null);
  if(!prog&&tab===null&&!cp&&!visited)return;
  var banner=document.getElementById('restore-banner');
  var txt=document.getElementById('rb-progress-txt');
  var cpDone=cp?cp.filter(Boolean).length:0;
  var tabCount=visited?Object.keys(visited).length:0;
  if(prog>5||cpDone>0||tabCount>1){
    var bits=[];
    if(prog) bits.push(prog+'% napretka');
    if(tabCount>1) bits.push(tabCount+'/8 tabova');
    if(cpDone>0) bits.push(cpDone+'/10 checkpoint');
    txt.textContent=bits.join(' · ');
    banner.classList.add('show');
  }
}
function restoreProgress(){
  document.getElementById('restore-banner').classList.remove('show');
  var tab=lsLoad('mt.hrv.h03.tab',0);
  var prog=lsLoad('mt.hrv.h03.prog',5);
  var visited=lsLoad('mt.hrv.h03.visited',{});
  VISITED_TABS=visited;
  if(prog) updateProgress(prog);
  updateTabBadges();
  cpLoad();
  if(tab!==null) sw(parseInt(tab));
}
function dismissRestore(){
  document.getElementById('restore-banner').classList.remove('show');
  ['mt.hrv.h03.prog','mt.hrv.h03.tab','mt.hrv.h03.cp','mt.hrv.h03.visited','mt.hrv.h03.quiz_passed'].forEach(function(k){try{localStorage.removeItem(k)}catch(e){}});
  VISITED_TABS={0:true};
  QUIZ_PASSED=false;
  document.querySelectorAll('.cp-item.done').forEach(function(el){el.classList.remove('done')});
  updateTabBadges();
  recomputeProgress();
  cpUpdate();
}

/* ===========================================
   POJMOVNIK — LIVE SEARCH + FILTER
   =========================================== */
(function initPojmovnik(){
  function filter(){
    var search=document.getElementById('pojm-search');
    var filters=document.getElementById('pojm-filters');
    if(!search||!filters)return;
    var q=search.value.toLowerCase().trim();
    var activeBtn=filters.querySelector('.pojm-filter.on');
    var cat=activeBtn?activeBtn.dataset.cat:'all';
    var items=document.querySelectorAll('.pojm');
    var shown=0;
    items.forEach(function(el){
      var kw=(el.dataset.kw||'').toLowerCase();
      var elCat=el.dataset.cat;
      var matchesSearch=q===''||kw.indexOf(q)!==-1||el.textContent.toLowerCase().indexOf(q)!==-1;
      var matchesCat=cat==='all'||elCat===cat;
      if(matchesSearch&&matchesCat){el.classList.remove('hidden');shown++}
      else el.classList.add('hidden');
    });
    var c=document.getElementById('pojm-count');
    if(c) c.textContent=shown+' '+(shown===1?'pojam':(shown<5?'pojma':'pojmova'))+' prikazano';
  }
  document.addEventListener('DOMContentLoaded',function(){
    var search=document.getElementById('pojm-search');
    if(search) search.addEventListener('input',filter);
    var filterBtns=document.querySelectorAll('.pojm-filter');
    filterBtns.forEach(function(b){
      b.addEventListener('click',function(){
        filterBtns.forEach(function(x){x.classList.remove('on')});
        b.classList.add('on');
        filter();
      });
    });
  });
})();

/* ===========================================
   FLASHCARDS
   =========================================== */
var FC_CARDS=[
  {cat:'HAMLET',term:'Hamlet (princ)',def:'Glavni lik tragedije — mladi danski kraljević, student iz Wittenberga. Inteligentan, filozofski, melankoličan. Otac mu je ubijen od strica Klaudija. Arhetip modernog refleksivnog subjekta — misli previše da bi brzo djelovao.'},
  {cat:'HAMLET',term:'Klaudije (Claudius)',def:'Hamletov stric — ubio brata (starog kralja), oženio udovicu Gertrudu, uzurpirao prijestolje. „Osmjehnuti zlikovac”. Nije jednodimenzionalan — sposoban za ljubav (Gertruda) i kajanje (molitva u III činu).'},
  {cat:'HAMLET',term:'Gertruda (Gertrude)',def:'Hamletova majka, danska kraljica. Udala se za Klaudija dva mjeseca nakon muževljeve smrti. Moralno dvosmislena: je li znala za ubojstvo? U finalu pije otrov namijenjen sinu — tragička ironija.'},
  {cat:'HAMLET',term:'Ofelija (Ophelia)',def:'Polonijeva kći, Hamletova ljubav. Odbija Hamleta po očevoj naredbi. Stvarno poludi (za razliku od Hamletovog glumljenog ludila) — dijeli cvijeće, utapa se. Simbol nevinosti slomljene spletkama.'},
  {cat:'HAMLET',term:'Polonije (Polonius)',def:'Kraljev komornik, Ofelijin i Laertov otac. Smatra se mudrim, zapravo je komičan i govorljiv. Šalje špijune. Hamlet ga ubije zabunom iza zavjese. Simbol korumpirane dvorske politike.'},
  {cat:'HAMLET',term:'Laert (Laertes)',def:'Polonijev sin, Ofelijin brat. Hamletov dvojnik — dok Hamlet oklijeva, Laert ODMAH djeluje čim čuje za očevu smrt. Umire od vlastitog otrovanog mača u finalnom dvoboju.'},
  {cat:'HAMLET',term:'Horacije (Horatio)',def:'Hamletov najbolji prijatelj, student iz Wittenberga. Jedini kojem Hamlet vjeruje. Jedini od glavnih likova preživljava dramu — njegova zadaća je ispričati priču svijetu.'},
  {cat:'HAMLET',term:'Fortinbras',def:'Norveški princ, treći osvetnik u drami. Otac mu ubijen od starog Hamleta. Čeka 20 godina, strategijski djeluje. Jedini preživjeli osvetnik — dobiva dansko prijestolje u finalu.'},
  {cat:'HAMLET',term:'Duh oca (stari Hamlet)',def:'Pokojni kralj, otac protagonista. Pojavljuje se u I činu, traži osvetu. Ambivalentan — je li stvarno otac, ili Đavao koji kuša Hamleta? Mišolovka dokazuje istinitost Duhovog svjedočenja.'},
  {cat:'HAMLET',term:'Elsinor (Helsingör)',def:'Danski kraljevski dvor — mjesto radnje. Stvarna tvrđava Kronborg. Elsinor kao metafora korumpiranog svijeta — „Nešto je trulo u državi Danskoj”.'},
  {cat:'HAMLET',term:'„Biti ili ne biti”',def:'Najpoznatiji monolog svjetske književnosti (III/1). Hamlet razmatra samoubojstvo kao izlaz iz patnje. Zaključuje: strah od „undiscovered country” (neizvjesnog nakon smrti) drži nas u životu.'},
  {cat:'HAMLET',term:'Mišolovka (Umorstvo Gonzaga)',def:'Predstava u predstavi u III činu. Hamlet poručuje glumcima da izvedu scenu identičnu Duhovom opisu ubojstva. Klaudijeva reakcija dokazuje krivnju. Metateatar.'},
  {cat:'HAMLET',term:'Yorick',def:'Kraljev šaljivac iz Hamletova djetinjstva — sad samo lubanja na groblju (V/1). „Jao, jadni Yorick! Poznavao sam ga, Horacije.” Vizualna ikona drame — memento mori scena.'},
  {cat:'HAMLET',term:'Antic disposition',def:'Engleska fraza = „glumljeno ludilo, luđačka maska”. Hamletova strategija — hiniti ludilo da prikrije pravu namjeru. Kontrast: Ofelijino stvarno ludilo.'},
  {cat:'HAMLET',term:'Revenge tragedy',def:'Engleska osvetnička tragedija 16./17. st. Uzori: Seneka, Thomas Kyd. Formula: duh, glumljeno ludilo, masovna smrt. Shakespeare žanr transformira — osveta postaje filozofski problem.'},
  {cat:'AUTOR',term:'William Shakespeare',def:'(1564. Stratford-upon-Avon — 1616.) Najutjecajniji autor na engleskom jeziku. ~39 drama + 154 soneta. Glumac i suvlasnik King\\u2019s Men. Hamlet (~1601.) u vrhuncu opusa — 4 velike tragedije.'},
  {cat:'RENESANSA',term:'Blank verse',def:'Nerimovani jampski pentametar — standardni stih Shakespeareovih drama. Plemići govore u stihu, posluga u prozi — razlika nosi dramsko značenje.'},
  {cat:'RENESANSA',term:'Solilokvij',def:'Monolog u kojem lik sam publici govori misli. „Biti ili ne biti” je najpoznatiji. Shakespeare ga koristi za unutrašnji dijalog — novi književni oblik.'},
  {cat:'RENESANSA',term:'Humanizam',def:'Kulturni pokret 14.–16. st. U središte vraća čovjeka i antičke autore. Otac: Petrarca. Hamlet je vrhunski humanistički subjekt — student iz Wittenberga.'},
  {cat:'RENESANSA',term:'Shakespeareov sonet',def:'14 stihova: 3 kvartine (ABAB CDCD EFEF) + distih (GG). Distih daje pointu. Razlikuje se od petrarkistov (2 kvartine + 2 tercete).'}
];
var fcIdx=0, fcKnown=0, fcUnknown=0, fcOrder=[];

/* == DRILL STATE PERSISTENCE (v3.5) ==
   Pamti kartice i progress dok se korisnik mota kroz tabove.
   sessionStorage — resetira se na novi tab/window (svjesno, da ne
   blokira "novi krug" između dana). Za cross-session, switch na lsSave.
============================================= */
var DRILL_SS_KEY = 'mt.hrv.h03.drill';

function _drillSave(){
  try{
    sessionStorage.setItem(DRILL_SS_KEY, JSON.stringify({
      idx: fcIdx,
      known: fcKnown,
      unknown: fcUnknown,
      order: fcOrder,
      ts: Date.now()
    }));
  }catch(e){}
}

function _drillRestore(){
  try{
    var raw = sessionStorage.getItem(DRILL_SS_KEY);
    if(!raw) return false;
    var s = JSON.parse(raw);
    // Valjanost: order mora odgovarati trenutnom FC_CARDS setu
    if(!s || !Array.isArray(s.order) || s.order.length !== FC_CARDS.length) return false;
    fcIdx = s.idx || 0;
    fcKnown = s.known || 0;
    fcUnknown = s.unknown || 0;
    fcOrder = s.order;
    // Sync counter UI
    var r = document.getElementById('fc-right'); if(r) r.textContent = fcKnown;
    var w = document.getElementById('fc-wrong'); if(w) w.textContent = fcUnknown;
    return true;
  }catch(e){ return false }
}

function fcShuffle(){
  fcOrder=FC_CARDS.map(function(_,i){return i});
  for(var i=fcOrder.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=fcOrder[i];fcOrder[i]=fcOrder[j];fcOrder[j]=t}
}
function fcRender(){
  if(fcOrder.length===0) fcShuffle();
  if(!fcIsPaid() && fcIdx >= FC_FREE_LIMIT){
    var term=document.getElementById('fc-term'),cf=document.getElementById('fc-cat-f'),def=document.getElementById('fc-def'),cb=document.getElementById('fc-cat-b'),num=document.getElementById('fc-num');
    if(term) term.textContent='Otključaj svih 20 kartica';
    if(cf) cf.textContent='FREE TIER — 5 / 20';
    if(def) def.textContent='Pridruži se Standard planu za svih 20 flashcards + Matching igru + Spaced Repetition. Učenje je 4× brže s aktivnim drillom.';
    if(cb) cb.textContent='UPGRADE';
    if(num) num.innerHTML='<b>'+FC_FREE_LIMIT+'</b> / 20 · <span style="color:var(--gold)">Free limit</span>';
    fcShowPaywall();
    return;
  }
  if(fcIdx>=fcOrder.length){
    document.getElementById('fc-term').textContent='Gotovo! ✅';
    document.getElementById('fc-cat-f').textContent='RESULT';
    document.getElementById('fc-def').textContent='Točno: '+fcKnown+' / Krivo: '+fcUnknown+'. Klikni Reset za novi krug.';
    document.getElementById('fc-cat-b').textContent='REZULTAT';
    return;
  }
  var c=FC_CARDS[fcOrder[fcIdx]];
  var card=document.getElementById('fc-card');
  card.classList.remove('flipped');
  document.getElementById('fc-cat-f').textContent=c.cat;
  document.getElementById('fc-cat-b').textContent='DEFINICIJA';
  document.getElementById('fc-term').textContent=c.term;
  document.getElementById('fc-def').textContent=c.def;
  document.getElementById('fc-num').innerHTML='<b>'+(fcIdx+1)+'</b> / '+fcOrder.length;
}
function fcFlip(){document.getElementById('fc-card').classList.toggle('flipped')}
function fcMark(known){
  if(known){fcKnown++;soundOk()}
  else{fcUnknown++;soundNg()}
  document.getElementById('fc-right').textContent=fcKnown;
  document.getElementById('fc-wrong').textContent=fcUnknown;
  fcIdx++;
  _drillSave();
  setTimeout(fcRender,180);
}
function fcSkip(){fcIdx++;_drillSave();fcRender()}
function fcReset(){
  fcIdx=0;fcKnown=0;fcUnknown=0;
  fcShuffle();
  try{sessionStorage.removeItem(DRILL_SS_KEY)}catch(e){}
  document.getElementById('fc-right').textContent=0;
  document.getElementById('fc-wrong').textContent=0;
  fcRender();
  track('drill_reset', {}, 'engagement');
}
function initDrill(){
  // Pokušaj restore iz sessionStorage prije nego shuffle novog seta
  if(!_drillRestore()){
    fcShuffle();
  }
  fcRender();
}

/* ===========================================
   MATCHING GAME — djelo › autor
   =========================================== */
var MG_PAIRS=[
  {l:'Hamlet',r:'~1601. · Shakespeare · tragedija'},
  {l:'Romeo i Julija',r:'~1595. · Shakespeare · ljubavna trag.'},
  {l:'Othello',r:'~1603. · Shakespeare · ljubomora'},
  {l:'Macbeth',r:'~1606. · Shakespeare · ambicija'},
  {l:'Kralj Lear',r:'~1606. · Shakespeare · ludilo'},
  {l:'Don Quijote',r:'1605./1615. · Cervantes · moderni roman'},
  {l:'Kanconijer',r:'Petrarca · 366 pjesama · Laura'},
  {l:'Dekameron',r:'Boccaccio · 100 novela · 1348.'},
  {l:'Gargantua i Pantagruel',r:'François Rabelais · 1532.'}
];
var mgSelected=null, mgDone=0;

function initMatch(){
  var board=document.getElementById('mg-board');
  if(!board)return;
  mgDone=0;mgSelected=null;
  document.getElementById('mg-score').textContent=0;
  document.getElementById('mg-total').textContent=MG_PAIRS.length;

  var left=MG_PAIRS.map(function(p,i){return {text:p.l,key:i,side:'l'}});
  var right=MG_PAIRS.map(function(p,i){return {text:p.r,key:i,side:'r'}});
  // shuffle right
  for(var i=right.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=right[i];right[i]=right[j];right[j]=t}

  var html='<div class="mg-col"><div class="mg-col-label">Djelo</div>';
  left.forEach(function(it){html+='<button class="mg-item" data-key="'+it.key+'" data-side="l">'+it.text+'</button>'});
  html+='</div><div class="mg-col"><div class="mg-col-label">Autor</div>';
  right.forEach(function(it){html+='<button class="mg-item" data-key="'+it.key+'" data-side="r">'+it.text+'</button>'});
  html+='</div>';
  board.innerHTML=html;

  board.querySelectorAll('.mg-item').forEach(function(el){
    el.addEventListener('click',function(){mgClick(el)});
  });
}

function mgClick(el){
  if(el.classList.contains('ok'))return;
  if(!mgSelected){
    mgSelected=el;
    el.classList.add('sel');
    return;
  }
  if(mgSelected===el){el.classList.remove('sel');mgSelected=null;return}
  if(mgSelected.dataset.side===el.dataset.side){
    mgSelected.classList.remove('sel');
    mgSelected=el;
    el.classList.add('sel');
    return;
  }
  // compare
  if(mgSelected.dataset.key===el.dataset.key){
    mgSelected.classList.remove('sel');
    mgSelected.classList.add('ok');
    el.classList.add('ok');
    mgDone++;
    soundOk();
    document.getElementById('mg-score').textContent=mgDone;
    mgSelected=null;
    if(mgDone===MG_PAIRS.length){
      soundDone();
      setTimeout(function(){
        var board=document.getElementById('mg-board');
        board.insertAdjacentHTML('afterend','<div class="mg-done" id="mg-done">✅ SVI PAROVI SPARENI!</div>');
        setTimeout(function(){var d=document.getElementById('mg-done');if(d)d.remove()},3500);
      },400);
    }
  } else {
    el.classList.add('err');
    mgSelected.classList.add('err');
    soundNg();
    var s=mgSelected;
    setTimeout(function(){s.classList.remove('err','sel');el.classList.remove('err')},450);
    mgSelected=null;
  }
}

/* ===========================================
   KVIZ
   =========================================== */
var QUIZ=[
  {q:\`Tko je autor tragedije Hamlet?\`,opts:[\`Christopher Marlowe\`,\`William Shakespeare\`,\`Ben Jonson\`,\`Thomas Kyd\`],correct:1,exp:\`William Shakespeare (1564.–1616.) napisao je Hamleta oko 1600./1601. godine. Jedna od 4 velike tragedije u vrhuncu njegovog opusa, uz Othella, Kralja Leara i Macbetha.\`},
  {q:\`Kada je napisana tragedija Hamlet?\`,opts:[\`~1595. godine\`,\`~1601. godine\`,\`~1613. godine\`,\`~1623. godine\`],correct:1,exp:\`Hamlet je napisan između 1599. i 1601. godine. Prvo objavljen u Q1 (1603., loša verzija), zatim u Q2 (1604./05., autoritativno izdanje). First Folio (1623.) posmrtno konsolidira tekst.\`},
  {q:\`Koja je vrsta djela Hamlet?\`,opts:[\`Komedija u 3 čina\`,\`Tragedija u 5 činova\`,\`Povijesna drama u 4 čina\`,\`Sonet\`],correct:1,exp:\`Hamlet je tragedija u 5 činova, u tradiciji revenge tragedy (osvetničke tragedije). Najduža Shakespeareova drama — ~4000 stihova, ~4 sata izvedbe. Pisana pretežno u blank verseu.\`},
  {q:\`Gdje se odvija radnja tragedije Hamlet?\`,opts:[\`U Veroni\`,\`U Elsinoru, danskom kraljevskom dvoru\`,\`U Londonu\`,\`U Veneciji\`],correct:1,exp:\`Radnja je smještena na danski kraljevski dvor u Elsinoru (Helsingör), stvarnoj tvrđavi Kronborg. Shakespeare vjerojatno nikad nije bio tamo. Elsinor postaje metafora korumpiranog svijeta.\`},
  {q:\`Tko je glavni lik tragedije Hamlet?\`,opts:[\`Kralj Klaudije\`,\`Princ Hamlet, danski kraljević\`,\`Horacije\`,\`Fortinbras\`],correct:1,exp:\`Princ Hamlet — mladi danski kraljević, student iz Wittenberga. Inteligentan, filozofski, melankoličan. Otac mu je ubijen od strica Klaudija. Arhetip modernog refleksivnog subjekta.\`},
  {q:\`Tko je ubio Hamletovog oca?\`,opts:[\`Fortinbras\`,\`Klaudije, Hamletov stric\`,\`Laert\`,\`Polonije\`],correct:1,exp:\`Klaudije, Hamletov stric, ubio je brata (starog kralja Hamleta) ulivajući mu otrov u uho dok je spavao u vrtu. Nakon toga je oženio udovicu Gertrudu i uzurpirao prijestolje. Duh otkriva istinu Hamletu u I činu.\`},
  {q:\`Što Hamlet odlučuje raditi da prikrije svoj plan osvete?\`,opts:[\`Bježi u Englesku\`,\`Glumiti ludilo (antic disposition)\`,\`Zavesti Ofeliju\`,\`Pisati dnevnik\`],correct:1,exp:\`Hamlet odlučuje hiniti ludilo („antic disposition”) da prikrije pravu namjeru i provjeri istinitost Duhovog svjedočenja. Kontrast s Ofelijinim stvarnim ludilom koje dolazi iz traume.\`},
  {q:\`Što je „Mišolovka” (Umorstvo Gonzaga) u drami?\`,opts:[\`Lov u šumi\`,\`Predstava u predstavi — Hamlet je koristi da dokaže Klaudijevu krivnju\`,\`Zatvorska ćelija\`,\`Ime Hamletovog oca\`],correct:1,exp:\`„Mišolovka” (Umorstvo Gonzaga) je predstava u predstavi u III činu. Hamlet poručuje glumcima da izvedu scenu identičnu Duhovom opisu ubojstva. Klaudijeva reakcija — bježi — dokazuje krivnju. Metateatar.\`},
  {q:\`Koja je najpoznatija rečenica iz Hamleta?\`,opts:[\`„Život je san”\`,\`„Biti ili ne biti — to je pitanje”\`,\`„Veni, vidi, vici”\`,\`„Cogito, ergo sum”\`],correct:1,exp:\`„Biti ili ne biti — to je pitanje” („To be, or not to be — that is the question”). Monolog u III/1. Najpoznatiji stih svjetske književnosti. Hamlet razmatra samoubojstvo, smrt i strah od neizvjesnog.\`},
  {q:\`Što Hamlet drži u ruci u čuvenoj sceni na groblju?\`,opts:[\`Mač\`,\`Lubanju Yoricka, kraljevog šaljivca iz djetinjstva\`,\`Ljubavno pismo Ofeliji\`,\`Očev portret\`],correct:1,exp:\`U V/1 Hamlet drži Yorickovu lubanju i meditira o smrti: „Jao, jadni Yorick! Poznavao sam ga, Horacije.” Memento mori scena — demokratizacija smrti: kraljevi i šaljivci završavaju isto. Vizualna ikona drame.\`},
  {q:\`Tko je Ofelija?\`,opts:[\`Hamletova majka\`,\`Polonijeva kći, Hamletova ljubav\`,\`Klaudijeva supruga\`,\`Služavka na dvoru\`],correct:1,exp:\`Ofelija — Polonijeva kći, Hamletova ljubav. Odbija Hamleta po očevoj naredbi. Nakon što Hamlet ubije njenog oca, stvarno poludi (za razliku od Hamletovog glumljenog ludila) — utapa se. Simbol nevinosti slomljene spletkama.\`},
  {q:\`Kako Polonije umire u drami?\`,opts:[\`Od otrova u vinu\`,\`Hamlet ga slučajno probode iza zavjese misleći da je Klaudije\`,\`Ofelija ga ubije iz osvete\`,\`Bori se u dvoboju s Laertom\`],correct:1,exp:\`U III/4 Polonije se sakrije iza zavjese (arras) u Gertrudinoj sobi da prisluškuje. Hamlet čuje šum i zabode mač kroz zavjesu misleći da je Klaudije. Prvo ubojstvo u drami — prekretnica koja pokreće Laertovu osvetu.\`},
  {q:\`Tko je Laert?\`,opts:[\`Hamletov brat\`,\`Polonijev sin, Ofelijin brat — Hamletov dvojnik i suparnik u osveti\`,\`Klaudijev sluga\`,\`Norveški vojnik\`],correct:1,exp:\`Laert — Polonijev sin, Ofelijin brat. Student u Parizu. Hamletov dvojnik: dok Hamlet oklijeva, Laert odmah djeluje čim čuje za očevu smrt. Tri sina osvećuju oca — Hamlet, Laert, Fortinbras — tri različita pristupa.\`},
  {q:\`Tko preživljava dramu od glavnih likova?\`,opts:[\`Samo Hamlet\`,\`Nitko, svi umiru\`,\`Horacije i Fortinbras\`,\`Klaudije i Gertruda\`],correct:2,exp:\`Hamlet, Klaudije, Gertruda, Laert, Ofelija, Polonije — svi umiru. Horacije preživljava kako bi ispričao priču svijetu. Fortinbras ulazi u Dansku u zadnjem činu i dobiva prijestolje. Jedini preživjeli osvetnik.\`},
  {q:\`Kakvo je Hamletovo oklijevanje?\`,opts:[\`Kukavičluk i strah\`,\`Moralna savjest — „savjest čini kukavice od svih nas”\`,\`Fizička slabost\`,\`Luđačka stupor\`],correct:1,exp:\`Hamlet sam u monologu „Biti ili ne biti” objašnjava: „Tako savjest čini kukavice od svih nas”. Nije oklijevanje iz straha — iz moralne savjesti. Kontrast Laertu koji djeluje bez analize. Arhetip „Hamletove dileme”.\`},
  {q:\`Koji je Hamletov najbolji prijatelj?\`,opts:[\`Rosencrantz\`,\`Guildenstern\`,\`Horacije\`,\`Laert\`],correct:2,exp:\`Horacije — student iz Wittenberga, jedini kojem Hamlet vjeruje. Racionalni, nekompromitirani. Jedini od glavnih likova preživljava dramu — njegova zadaća je ispričati priču. Nad mrtvim Hamletom: „Laku noć, slatki prinče.”\`},
  {q:\`Što znači citat „Nešto je trulo u državi Danskoj”?\`,opts:[\`Lošu žetvu u Danskoj\`,\`Korupciju u cijelom društvu — Elsinor kao metafora truloga svijeta\`,\`Bolest kralja Klaudija\`,\`Pobunu seljaka\`],correct:1,exp:\`Marcellov stih u I činu — „Nešto je trulo u državi Danskoj” (Something is rotten in the state of Denmark). Citat je ušao u kulturu kao formula za sustavnu korupciju. Elsinor nije samo dvor, to je slika cijelog svijeta u raspadu.\`},
  {q:\`Što je „revenge tragedy”?\`,opts:[\`Lirska pjesma o ljubavi\`,\`Engleska osvetnička tragedija — žanr 16./17. st., uzori Seneka i Thomas Kyd\`,\`Vrsta soneta\`,\`Politička satira\`],correct:1,exp:\`Revenge tragedy — engleska osvetnička tragedija. Popularan žanr na prijelazu 16./17. st. Uzori: Seneka, Thomas Kyd (The Spanish Tragedy). Formula: duh traži osvetu, glumljeno ludilo, masovna smrt. Shakespeare žanr transformira filozofski.\`},
  {q:\`Koja je razlika između Hamleta i Romea (kao tragičnih likova)?\`,opts:[\`Nema razlike — isti su\`,\`Romeo je impulsivan i umire zbog ljubavi; Hamlet je refleksivan i umire zbog osvete i savjesti\`,\`Hamlet je žena\`,\`Romeo ima više monologa\`],correct:1,exp:\`Romeo i Julija (~1595.) je ranija Shakespeareova tragedija — ljubavna, ne egzistencijalna. Romeo djeluje impulsivno iz strasti. Hamlet (~1601.) predstavlja refleksivnog junaka — umire zbog moralne savjesti, ne strasti.\`},
  {q:\`Što je renesansa?\`,opts:[\`Religijski pokret unutar katoličke crkve\`,\`Kulturno razdoblje 14.–17. st. u kojem se obnavlja antika i čovjek postaje središte\`,\`Filozofija koja niječe postojanje Boga\`,\`Politička ideologija 18. stoljeća\`],correct:1,exp:\`Renesansa — kulturno razdoblje od 14. do 17. st. Počinje u Italiji. „Preporod” antičke kulture + novi pogled na čovjeka (antropocentrizam, humanizam). Hamlet je vrhunac renesansne drame.\`}
];
var QUIZ_SHUFFLED=QUIZ.slice();
var qzState={idx:0,score:0,answered:[]};

function renderQuizIntro(){
  var el=document.getElementById('qz-app');
  el.innerHTML=\`
    <div class="qz-start">
      <div class="qz-start-ico">🧠</div>
      <h3>20 pitanja · bez vremena</h3>
      <p>Pitanja pokrivaju cijelo poglavlje: Hamlet (obvezatno čitanje 2026), renesansa, humanizam, Shakespeare, Cervantes, Petrarca i Boccaccio. Na kraju dobivaš ocjenu i objašnjenja.</p>
      <button class="fcb primary" onclick="qzStart()">Započni kviz ›</button>
    </div>
  \`;
}
function qzStart(){
  qzState={idx:0,score:0,answered:[]};
  QUIZ_SHUFFLED=QUIZ.slice();
  for(var i=QUIZ_SHUFFLED.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var t=QUIZ_SHUFFLED[i];QUIZ_SHUFFLED[i]=QUIZ_SHUFFLED[j];QUIZ_SHUFFLED[j]=t;
  }
  track('quiz_start', {total_questions: QUIZ.length}, 'engagement');
  qzRender();
}
function qzRender(){
  var q=QUIZ_SHUFFLED[qzState.idx];
  var pct=(qzState.idx/QUIZ.length)*100;
  var html=\`
    <div class="qz-prog"><span>pitanje <b>\${qzState.idx+1}</b> / \${QUIZ.length}</span><span>bodova: <b>\${qzState.score}</b></span></div>
    <div class="qz-bar"><div class="qz-bar-f" style="width:\${pct}%"></div></div>
    <div class="qz-q">\${q.q}</div>
    <div class="qz-opts">
  \`;
  q.opts.forEach(function(o,i){
    html+=\`<button class="qz-opt" data-i="\${i}"><span class="qz-key">\${String.fromCharCode(65+i)}</span><span>\${o}</span></button>\`;
  });
  html+=\`</div><div class="qz-fb" id="qz-fb"></div><div class="qz-nav" id="qz-nav"></div>\`;
  document.getElementById('qz-app').innerHTML=html;
  document.querySelectorAll('.qz-opt').forEach(function(b){
    b.addEventListener('click',function(){qzAnswer(parseInt(b.dataset.i))});
  });
}
function qzAnswer(sel){
  var q=QUIZ_SHUFFLED[qzState.idx];
  var ok=sel===q.correct;
  if(ok){qzState.score++;soundOk()} else soundNg();
  qzState.answered.push({q:q.q,sel:sel,correct:q.correct,ok:ok,opts:q.opts,exp:q.exp});
  var opts=document.querySelectorAll('.qz-opt');
  opts.forEach(function(o,i){
    o.disabled=true;
    if(i===q.correct) o.classList.add('ok');
    if(i===sel&&!ok) o.classList.add('ng');
  });
  var fb=document.getElementById('qz-fb');
  fb.className='qz-fb show '+(ok?'ok':'ng');
  fb.innerHTML=\`<b>\${ok?'? Točno!':'? Pogrešno.'}</b> \${q.exp}\`;
  var isLast=qzState.idx===QUIZ.length-1;
  document.getElementById('qz-nav').innerHTML=\`<button class="fcb primary" onclick="qzNext()">\${isLast?'Prikaži rezultat':'Sljedeće pitanje'} ›</button>\`;
}
function qzNext(){
  if(!qzIsPaid() && qzState.idx >= QZ_FREE_LIMIT - 1){
    qzShowPaywall();
    return;
  }
  if(qzState.idx===QUIZ.length-1){qzResult();return}
  qzState.idx++;
  qzRender();
}

/* == SHARE == */
function qzShare(pct,score){
  var url='https://maturiraj.hr/skripte/hrv/h03';
  var text='Prošao/la sam kviz iz H03 · Renesansa (europska) na maturiraj.hr — '+score+'/'+QUIZ.length+' ('+pct+'%) 🎓';
  var fb=document.getElementById('qz-share-fb');

  // Try Web Share API (mobile)
  if(navigator.share){
    navigator.share({title:'Maturiraj.hr · H03 Kviz',text:text,url:url})
      .then(function(){if(fb)fb.textContent='Podijeljeno ?'})
      .catch(function(){/* user cancelled, silent */});
    return;
  }
  // Fallback: copy to clipboard
  var full=text+'\\n'+url;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(full).then(function(){
      if(fb){fb.textContent='? Link kopiran! Zalijepi u WhatsApp/Instagram';setTimeout(function(){fb.textContent=''},3500)}
    }).catch(function(){shareManual(full)});
  } else {
    shareManual(full);
  }
}
function shareManual(text){
  // Final fallback: prompt
  window.prompt('Kopiraj i zalijepi:',text);
}
function qzResult(){
  soundDone();
  var pct=Math.round((qzState.score/QUIZ.length)*100);
  var grade,msg,ico,scoreBand;
  if(pct>=90){grade='ODLIČAN';msg='Spreman si za Hamlet esej na maturi.';ico='🏆';scoreBand='great'}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno poznaješ gradivo. Doradi par tema.';ico='💪';scoreBand='good'}
  else if(pct>=60){grade='DOBAR';msg='Dobra osnova. Ponovi pojmovnik i Hamlet deep-dive.';ico='📚';scoreBand='good'}
  else if(pct>=45){grade='DOVOLJAN';msg='Osnove su tu — trebaš više vježbe.';ico='🔁';scoreBand='low'}
  else{grade='NEDOVOLJAN';msg='Vrati se na početak i pođi polako.';ico='🎯';scoreBand='low'}
  var wrong=qzState.answered.filter(function(a){return !a.ok});

  track('quiz_complete', {
    score: qzState.score,
    total: QUIZ.length,
    pct: pct,
    band: scoreBand,
    wrong_count: wrong.length
  }, 'conversion');

  var html=\`
    <div class="qz-result">
      <div style="font-size:48px;margin-bottom:8px">\${ico}</div>
      <div class="qz-score">\${pct}%</div>
      <div class="qz-grade">\${grade}</div>
      <div class="qz-msg">\${qzState.score} / \${QUIZ.length} točnih · \${msg}</div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="fcb primary" onclick="qzStart()">🔁 Ponovo</button>
        <button class="fcb" onclick="qzShare(\${pct},\${qzState.score})">📤 Podijeli</button>
        <button class="fcb" onclick="sw(1)">‹ Hamlet</button>
        <button class="fcb" onclick="sw(4)">📚 Pojmovnik</button>
      </div>
      <div id="qz-share-fb" style="margin-top:14px;font-family:var(--mono);font-size:11px;color:var(--green);min-height:16px"></div>
    </div>
  \`;

  // === PLAYBOOK P3.2: REZULTAT REVEAL — najvažnija konverzijska taktika ===
  // Vidljivo: osnovni rezultat + promašeni. Zakljucano: AI analiza, plan, vježbe.
  // Očekivani ROI iz playbooka: 12–18% Standard › Pro konverzija.
  if(wrong.length > 0 || pct < 90){
    html += \`
      <div class="reveal-lock" data-band="\${scoreBand}">
        <div class="reveal-lock-head">
          <div class="reveal-lock-eye">🔒 OTKLJUČAJ PUNU ANALIZU</div>
          <div class="reveal-lock-title">Shvati svaku grešku — s AI profesorom</div>
        </div>
        <div class="reveal-lock-items">
          <div class="reveal-lock-item">
            <div class="rli-ico">🤖</div>
            <div class="rli-body">
              <div class="rli-title">Zašto si pogriješio u svakom pitanju?</div>
              <div class="rli-desc">AI profesor ti objasni tvojim riječima, korak po korak. \${wrong.length} \${wrong.length===1?'pitanje':(wrong.length<5?'pitanja':'pitanja')} za analizu.</div>
            </div>
            <div class="rli-lock"><span class="rli-badge pro">PRO</span></div>
          </div>
          <div class="reveal-lock-item">
            <div class="rli-ico">📋</div>
            <div class="rli-body">
              <div class="rli-title">Personalizirani plan popravka</div>
              <div class="rli-desc">Točno što treba ponoviti ove tjedne da skočiš s \${pct}% na 85%+.</div>
            </div>
            <div class="rli-lock"><span class="rli-badge pro">PRO</span></div>
          </div>
          <div class="reveal-lock-item">
            <div class="rli-ico">🎯</div>
            <div class="rli-body">
              <div class="rli-title">Slična pitanja iz prošlih matura</div>
              <div class="rli-desc">Discere arhiva: \${wrong.length>0?wrong.length*3:15} sličnih pitanja iz 70 matura, grupiranih po tvojim slabim točkama.</div>
            </div>
            <div class="rli-lock"><span class="rli-badge standard">STANDARD</span></div>
          </div>
        </div>
        <div class="reveal-lock-cta">
          <a href="/cijene?ctx=quiz_reveal&band=\${scoreBand}" class="reveal-lock-btn" onclick="track('upsell_click',{ctx:'quiz_reveal',band:'\${scoreBand}',target:'pricing'},'conversion')">
            Otključaj sve — 19,99 €/mj
          </a>
          <div class="reveal-lock-sub">Otkaži bilo kada · Bez obveze</div>
        </div>
      </div>
    \`;
    setTimeout(function(){track('upsell_view',{ctx:'quiz_reveal',band:scoreBand},'conversion')}, 100);
  }

  // Wrong questions preview — bez eksplikacija (te su zaključane)
  if(wrong.length>0){
    html+=\`<div style="margin-top:28px"><div class="slbl">Promašena pitanja (\${wrong.length})</div>\`;
    wrong.forEach(function(a){
      html+=\`<div class="qz-wrong-item"><div class="qz-wrong-q">\${a.q}</div><div class="qz-wrong-a">Točan odgovor: <b>\${a.opts[a.correct]}</b></div></div>\`;
    });
    html+=\`</div>\`;
  }

  // Update progress via flag + recompute
  if(qzState.score>=QUIZ.length*0.6){QUIZ_PASSED=true;lsSave('mt.hrv.h03.quiz_passed',true)}
  recomputeProgress();
  document.getElementById('qz-app').innerHTML=html;
}

/* ===========================================
   CHECKPOINT
   =========================================== */
function cpToggle(el){
  el.classList.toggle('done');
  cpSave();
  cpUpdate();
  if(el.classList.contains('done')) soundOk();
}
function cpSave(){
  var states=[];
  document.querySelectorAll('.cp-item').forEach(function(el){states.push(el.classList.contains('done'))});
  lsSave('mt.hrv.h03.cp',states);
}
function cpLoad(){
  var states=lsLoad('mt.hrv.h03.cp',null);
  if(!states)return;
  var items=document.querySelectorAll('.cp-item');
  items.forEach(function(el,i){if(states[i]) el.classList.add('done')});
  cpUpdate();
}
function cpUpdate(){
  var items=document.querySelectorAll('.cp-item');
  var done=document.querySelectorAll('.cp-item.done').length;
  var total=items.length;
  var pct=Math.round(done/total*100);
  var doneEl=document.getElementById('cp-done');
  var pctEl=document.getElementById('cp-pct');
  var finalEl=document.getElementById('cp-final');
  if(doneEl) doneEl.textContent=done;
  if(pctEl) pctEl.textContent=pct+'%';
  if(finalEl){
    if(done===total){finalEl.classList.add('show');soundDone();markChapterDone()}
    else finalEl.classList.remove('show');
  }
  recomputeProgress();
}
function markChapterDone(){
  // Sidebar marker
  var activeItem=document.querySelector('.sb-item.active');
  if(activeItem) activeItem.classList.add('done-chapter');
}

/* == INIT == */
document.addEventListener('DOMContentLoaded',function(){
  _initTracking();
  track('page_view', {chapter: CURRENT_CHAPTER.code, days_to_matura: daysToMatura()}, 'navigation');

  checkRestore();
  cpLoad();
  var visited=lsLoad('mt.hrv.h03.visited',null);
  if(visited){VISITED_TABS=visited}
  QUIZ_PASSED=lsLoad('mt.hrv.h03.quiz_passed',false);
  VISITED_TABS[0]=true;
  updateTabBadges();
  recomputeProgress();

  // Breadcrumb: reflect current tab (v3.6)
  var currentTab = lsLoad('mt.hrv.h03.tab', 0);
  var bcTab = document.getElementById('bc-tab');
  if(bcTab && TAB_LABELS[currentTab]) bcTab.textContent = TAB_LABELS[currentTab];

  // Social proof + countdown
  renderSocialProof('social-proof', 'full');
  var daysLeft = daysToMatura();
  if(daysLeft <= 60 && daysLeft > 0){
    var cd = document.getElementById('countdown');
    if(cd){cd.style.display='flex';renderCountdown('countdown')}
  }

  // Citatnik search + filter
  _citInit();

  // SVG hotspot tooltips
  _svgTtInit();

  // Mini-dijagnostika: restore dismissed state
  _diagRestore();

  /* == FEEDBACK MODAL: char counter == */
  var fbTa = document.getElementById('fb-message');
  var fbCnt = document.getElementById('fb-char-count');
  if(fbTa && fbCnt){
    fbTa.addEventListener('input', function(){
      var len = fbTa.value.length;
      fbCnt.textContent = len;
      fbCnt.parentElement.classList.toggle('over', len > 5000);
    });
  }

  /* == UPSELL IMPRESSION TRACKING (IntersectionObserver) == */
  if('IntersectionObserver' in window){
    var seen = {};
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          var el = entry.target;
          var key = el.dataset.upsellId || el.className;
          if(seen[key]) return;
          seen[key] = true;
          var ctx = el.dataset.upsellCtx || 'unknown';
          var target = el.dataset.upsellTarget || 'unknown';
          track('upsell_view', {ctx: ctx, target: target}, 'conversion');
        }
      });
    }, {threshold: 0.5, rootMargin: '0px 0px -50px 0px'});
    // Observer zakači se na sve upsell blokove koji imaju data-upsell-ctx
    setTimeout(function(){
      document.querySelectorAll('[data-upsell-ctx]').forEach(function(el){observer.observe(el)});
    }, 500);
  }

  /* == BACK-TO-TOP SCROLL LISTENER == */
  var btt=document.getElementById('btt');
  if(btt){
    var ticking=false;
    window.addEventListener('scroll',function(){
      if(!ticking){
        window.requestAnimationFrame(function(){
          if(window.scrollY>600) btt.classList.add('show');
          else btt.classList.remove('show');
          ticking=false;
        });
        ticking=true;
      }
    },{passive:true});
  }

  /* == KEYBOARD NAV == */
  document.addEventListener('keydown',function(e){
    // Esc: zatvori modal ili sidebar
    if(e.key==='Escape'){
      var fbModal=document.getElementById('fb-modal-backdrop');
      if(fbModal&&fbModal.classList.contains('show')){closeFeedbackModal();return}
      var sb=document.getElementById('sidebar');
      if(sb&&sb.classList.contains('mobile-open')){closeSidebar();return}
    }
    // Ctrl+K / Cmd+K › focus pojmovnik search
    if((e.ctrlKey||e.metaKey)&&e.key==='k'){
      e.preventDefault();
      sw(4);
      setTimeout(function(){var s=document.getElementById('pojm-search');if(s)s.focus()},250);
      return;
    }
    var tag=(e.target&&e.target.tagName||'').toLowerCase();
    if(tag==='input'||tag==='textarea')return;
    if(e.target.classList&&e.target.classList.contains('tab')){
      if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
        e.preventDefault();
        var curr=parseInt(lsLoad('mt.hrv.h03.tab',0));
        var nxt=e.key==='ArrowRight'?Math.min(7,curr+1):Math.max(0,curr-1);
        sw(nxt);
        var tabs=document.querySelectorAll('[role="tab"]');
        if(tabs[nxt])tabs[nxt].focus();
      }
    }
    if(e.key>='1'&&e.key<='8'&&!e.ctrlKey&&!e.metaKey&&!e.altKey){
      sw(parseInt(e.key)-1);
    }
  });

  if(!lsLoad('mt.hrv.h03.hinted',false)){
    setTimeout(function(){lsSave('mt.hrv.h03.hinted',true)},3000);
  }
});

/* == SCROLL PROGRESS BAR (v2 upgrade) == */
(function(){
  var bar = document.getElementById('scroll-progress');
  if(!bar) return;
  var ticking = false;
  function updateProgress_2(){
    var h = document.documentElement;
    var scrolled = h.scrollTop;
    var total = h.scrollHeight - h.clientHeight;
    var pct = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = pct + '%';
    ticking = false;
  }
  window.addEventListener('scroll', function(){
    if(!ticking){
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, {passive: true});
  updateProgress();
})();
;
/* TIER_SYSTEM_JS_INJECTED */
/**
 * Maturiraj.hr — Tier Helper Module
 * 
 * Globalni JS modul za upravljanje tier sustavom (Free / Standard / Pro).
 * Koristi se u svim chapterima i pricing page-u.
 * 
 * TODO:
 * - Tier provjera mora ići preko Supabase (auth.uid() › user_subscriptions tablica)
 * - Trenutno mock kroz localStorage 'mt.pro_mode' = 'free' | 'standard' | 'pro'
 * - Dnevni limiti se moraju validirati na backendu
 * 
 * Verzija: 1.0
 * Autor: Maturiraj.hr team
 */

(function(window) {
  'use strict';

  // ================================================
  // CONFIG — Tier Definicija
  // ================================================
  
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
      label: '? Standard',
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

  // ================================================
  // STORAGE KEYS
  // ================================================
  
  const STORAGE_KEYS = {
    tier: 'mt.pro_mode',
    daily_usage: 'mt.daily_usage',
    weekly_usage: 'mt.weekly_usage',
  };

  // ================================================
  // CORE API
  // ================================================
  
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
   * Toggle tier (free › standard › pro › free)
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

  // ================================================
  // USAGE TRACKING
  // ================================================
  
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

  // ================================================
  // PAYWALL MODAL
  // ================================================
  
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
              <li>✅ Bez AI features</li>
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
              <li>• <strong>🤖 AI Profesor (chat) — 30/dan</strong></li>
              <li>• <strong>🧠 AI Feedback za eseje + sažetke — 20/dan</strong></li>
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
          <a href="/pretplata" class="mt-paywall-link">Vidi sve tier opcije ›</a>
          <span class="mt-paywall-divider">·</span>
          <button type="button" class="mt-paywall-link mt-paywall-link-btn" onclick="MT.Tier.toggleTierDevMode()">📌 Dev: Toggle tier (trenutno: \${getTier().toUpperCase()})
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
    // TODO: Stripe Checkout integration
    alert(\`Info: Pretplata u izradi.\\n\\nUskoro: Stripe Checkout za \${tier === 'pro' ? 'Pro 19,99€' : 'Standard 9,99€'}/mj\\n\\n(Mock: postavljen tier na \${tier.toUpperCase()})\`);
    setTier(tier);
    closePaywall();
    location.reload();
  }

  function toggleTierDevMode() {
    const next = toggleTier();
    alert(\`Info: Dev mode — tier postavljen na: \${next.toUpperCase()}\`);
    closePaywall();
    location.reload();
  }

  // ================================================
  // SIDEBAR TIER BADGE
  // ================================================
  
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
      \${tier === 'free' ? '<button type="button" class="mt-tier-badge-cta" onclick="MT.Tier.openPricing()">Upgrade ›</button>' : ''}
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
    location.href = '/pretplata';
  }

  // ================================================
  // PUBLIC API
  // ================================================
  
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
/* WC_UPDATE_INJECTED */

function wcUpdate(){
  var ta = document.getElementById('wc-ta');
  if(!ta) return;
  var txt = ta.value;
  var words = txt.trim() ? txt.trim().split(/\\s+/).length : 0;
  var chars = txt.length;
  var nospace = txt.replace(/\\s/g,'').length;
  var para = txt.trim() ? txt.split(/\\n\\s*\\n/).filter(function(p){return p.trim();}).length : 0;
  var readMin = Math.max(1, Math.round(words / 200));
  var el = function(id){ return document.getElementById(id); };
  var statNum = function(id, val){
    var s = el(id); if(!s) return;
    var n = s.querySelector('.wc-stat-num'); if(n) n.textContent = val;
  };
  statNum('wc-words', words);
  statNum('wc-chars', chars);
  statNum('wc-nospace', nospace);
  statNum('wc-para', para);
  statNum('wc-read', readMin + ' min');
  var goal = 440;
  var pct = Math.min(100, Math.round(words / goal * 100));
  var bar = el('wc-bar'); if(bar) bar.style.width = pct + '%';
  var lbl = el('wc-lbl'); if(lbl) lbl.textContent = 'CILJ ' + goal + ' · ' + words + ' / ' + goal;
  var prog = el('wc-prog');
  if(prog){ prog.classList.toggle('pass', words >= goal); }
  ['wc-words','wc-chars','wc-nospace','wc-para','wc-read'].forEach(function(id){
    var s = el(id); if(!s) return;
    s.classList.toggle('ok', words >= goal);
    s.classList.toggle('critical', words > 0 && words < 200);
  });
}
;
/* CP_RESET_INJECTED */

function cpReset(){
  if(!confirm('Resetiraj sve označene stavke?')) return;
  var items = document.querySelectorAll('.cp-item');
  items.forEach(function(it){ it.classList.remove('done'); });
  try { localStorage.removeItem('mt.hrv.h03.cp'); } catch(e){}
  // Update counter
  var done = document.getElementById('cp-done');
  if(done) done.textContent = '0';
  var pct = document.getElementById('cp-pct');
  if(pct) pct.textContent = '0%';
  var sb = document.getElementById('cp-summary-box');
  if(sb) sb.style.display = 'none';
  var fb = document.getElementById('cp-final');
  if(fb) fb.style.display = 'none';
}
;
/* CIT_SEARCH_UNIVERSAL */

function citSearch(query){
  var q = (query || '').toLowerCase().trim();
  // Get current Citatnik tab (l3)
  var l3 = document.getElementById('l3');
  if(!l3) return;
  
  // Search ALL quote types
  var selectors = ['.featured-quote', '.cit-card', '.box-key', '.cr'];
  var visible = 0;
  selectors.forEach(function(sel){
    var items = l3.querySelectorAll(sel);
    items.forEach(function(item){
      var text = item.textContent.toLowerCase();
      var match = !q || text.indexOf(q) !== -1;
      item.style.display = match ? '' : 'none';
      if (match) visible++;
    });
  });
  
  // Update count if present
  var counter = document.getElementById('cit-stats');
  if (counter && q) counter.textContent = visible + ' citata pronađeno';
}`;


function H03ReactLayers() {
  const [anchors, setAnchors] = useState({});
  useEffect(() => {
    setAnchors({
      timelineRenesansa:   document.getElementById('h03-react-timeline-renesansa'),
      authorShakespeare:   document.getElementById('h03-react-author-shakespeare'),
      timelineShakespeare: document.getElementById('h03-react-timeline-shakespeare'),
      cetiriTragedije:     document.getElementById('h03-react-cetiri-tragedije'),
      authorCervantes:     document.getElementById('h03-react-author-cervantes'),
      popKultura:          document.getElementById('h03-react-pop-kultura'),
      heroQuote:           document.getElementById('h03-react-hero-quote'),
      statCards:           document.getElementById('h03-react-stat-cards-hamlet'),
      timelineRadnja:      document.getElementById('h03-react-timeline-radnja'),
      svgLikovi:           document.getElementById('h03-react-svg-likovi'),
      sukobi:              document.getElementById('h03-react-accordion-sukobi'),
      kljucneScene:        document.getElementById('h03-react-accordion-kljucne'),
      usporedbaRomeo:      document.getElementById('h03-react-usporedba-romeo'),
      usporedbaAntigona:   document.getElementById('h03-react-usporedba-antigona'),
      svgGlobe:            document.getElementById('h03-react-svg-globe'),
      esejTeze:            document.getElementById('h03-react-accordion-teze'),
      citatnik:            document.getElementById('h03-react-citatnik'),
      pojmovnik:           document.getElementById('h03-react-pojmovnik'),
    });
  }, []);
  return (
    <>
      {anchors.timelineRenesansa   && createPortal(<TimelineRenesansa />,             anchors.timelineRenesansa)}
      {anchors.authorShakespeare   && createPortal(<AuthorCardShakespeare />,         anchors.authorShakespeare)}
      {anchors.timelineShakespeare && createPortal(<TimelineShakespeare />,           anchors.timelineShakespeare)}
      {anchors.cetiriTragedije     && createPortal(<AccordionCetiriTragedije />,      anchors.cetiriTragedije)}
      {anchors.authorCervantes     && createPortal(<AuthorCardCervantes />,           anchors.authorCervantes)}
      {anchors.popKultura          && createPortal(<PopKulturaBlok />,                anchors.popKultura)}
      {anchors.heroQuote           && createPortal(<HeroQuoteBitiIliNeBiti />,        anchors.heroQuote)}
      {anchors.statCards           && createPortal(<StatCardsHamlet />,              anchors.statCards)}
      {anchors.timelineRadnja      && createPortal(<TimelineRadnja />,               anchors.timelineRadnja)}
      {anchors.svgLikovi           && createPortal(<SVGLikoviElsinore />,            anchors.svgLikovi)}
      {anchors.sukobi              && createPortal(<AccordionSukobi />,              anchors.sukobi)}
      {anchors.kljucneScene        && createPortal(<AccordionKljucneScene />,        anchors.kljucneScene)}
      {anchors.usporedbaRomeo      && createPortal(<UsporedbaHamletRomeo />,         anchors.usporedbaRomeo)}
      {anchors.usporedbaAntigona   && createPortal(<UsporedbaHamletAntigona />,      anchors.usporedbaAntigona)}
      {anchors.svgGlobe            && createPortal(<SVGTheGlobe />,                  anchors.svgGlobe)}
      {anchors.esejTeze            && createPortal(<AccordionEsejTezeH03 />,         anchors.esejTeze)}
      {anchors.citatnik            && createPortal(
        <CitatnikH03
          onBack={() => window.sw && window.sw(2)}
          onNext={() => window.sw && window.sw(4)}
        />,
        anchors.citatnik
      )}
    </>
  );
}

export default function H03Chapter() {
  return (
    <>
      <ChapterWrapper
        chapterId="H03"
        bodyHtml={BODY_HTML}
        stylesCss={STYLES_CSS}
        scriptsJs={SCRIPTS_JS}
      />
      <H03ReactLayers />
    </>
  );
}

export const HRV_POGAVLJE_03 = null
