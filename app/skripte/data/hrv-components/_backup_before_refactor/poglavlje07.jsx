/**
 * H07 — Maturiraj.hr — Hrvatski · H07 · Realizam + Dostojevski
 * Auto-generated from Maturiraj_Hrvatski_H07.html
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
  code: 'H07',
  title: 'Maturiraj.hr — Hrvatski · H07 · Realizam + Dostojevski',
  description: 'Interaktivna skripta za maturu — Realizam i Dostojevski: Zločin i kazna (obvezatno 2026). Raskoljnikov, Sonja, Porfirij, teorija nadčovjeka, psihološki realizam. Kviz, flashcards, esej alat.',
  canonical: 'https://maturiraj.hr/hrvatski/h07',
  ogImage: '',
};

const BODY_HTML = `<!-- Scroll progress bar (v2 upgrade) -->
<div class="scroll-progress" id="scroll-progress" aria-hidden="true"></div>

<!-- SVG tooltip (v3.5) -->
<div class="svg-tt" id="svg-tt" role="tooltip" aria-hidden="true">
  <div class="svg-tt-ttl" id="svg-tt-ttl"></div>
  <div class="svg-tt-txt" id="svg-tt-txt"></div>
</div>

<!-- Back-to-top floating button -->
<button class="btt" id="btt" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh" title="Natrag na vrh">↑</button>

<!-- Email capture modal -->
<div class="modal-backdrop" id="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title" onclick="if(event.target===this)closeModal()">
  <div class="modal" role="document">
    <button class="modal-close" onclick="closeModal()" aria-label="Zatvori">✕</button>
    <div class="modal-ico" id="modal-ico">📖</div>
    <div class="modal-eye" id="modal-eye">POGLAVLJE U IZRADI</div>
    <div class="modal-title" id="modal-title">H07 · Realizam — uskoro!</div>
    <div class="modal-desc" id="modal-desc">
      Radi se na ovom poglavlju. <strong>Ostavi svoj e-mail</strong> i javit ćemo ti čim izađe. Bez spama, bez newslettera — samo jedan e-mail kad je gotovo.
    </div>
    <div class="modal-preview" id="modal-preview">
      <strong>Sadržaj H07</strong>
      Bašćanska ploča · glagoljica i hrvatski počeci · Marulićeva <em>Judita</em> · Zoranić · Držić · humanizam i renesansa u Hrvatskoj
    </div>
    <div class="modal-msg" id="modal-msg"></div>
    <form class="modal-form" id="modal-form" onsubmit="return submitSignup(event)">
      <input type="email" class="modal-input" id="modal-email" placeholder="tvoj@email.hr" required autocomplete="email" aria-label="Tvoj e-mail">
      <button type="submit" class="modal-submit" id="modal-submit">Javi mi →</button>
    </form>
    <div class="modal-small">Otkaži s jednim klikom. Tvoj e-mail ne dijelimo ni s kim.</div>
  </div>
</div>

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

      <button type="submit" class="modal-submit" id="fb-submit" style="width:100%;margin-top:14px">Pošalji →</button>
      <div class="modal-small" style="margin-top:10px">Tvoj e-mail čuvamo samo za odgovor. Ne šaljemo ništa drugo.</div>
    </form>
  </div>
</div>

<div class="sb-hamburger" id="hamburger" onclick="toggleSidebar()" aria-label="Otvori izbornik"><span></span><span></span><span></span></div>
<div class="sb-overlay" id="overlay" onclick="closeSidebar()"></div>

<div class="shell">

<!-- ══ SIDEBAR ══ -->
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
    <span id="sb-footer-pos">07 / 28</span> · <span id="sb-footer-title">realizam</span>
    <br>maturiraj.hr · hrvatski · v2
  </div>
</nav>

<!-- ══ MAIN ══ -->
<main class="main">
<div class="content-wrap">
  <div class="bc">
    <a class="bc-link" href="/">maturiraj.hr</a><span class="bc-sep">/</span>
    <a class="bc-link" href="/skripte/hrv">hrvatski</a><span class="bc-sep">/</span>
    <span class="bc-cur">H07 · Realizam + Dostojevski</span>
    <span class="bc-sep bc-tab-sep">/</span>
    <span class="bc-tab" id="bc-tab">Teorija</span>
  </div>

  <!-- V3: RESTORE BANNER (unutar content-wrap) -->
  <div class="restore-banner" id="restore-banner">
    <div class="rb-txt">📖 Imaš <strong id="rb-progress-txt">spremljen napredak</strong> iz zadnje sesije</div>
    <div class="rb-actions">
      <button class="rb-btn primary" onclick="restoreProgress()">Nastavi gdje si stao</button>
      <button class="rb-btn secondary" onclick="dismissRestore()">Ispočetka</button>
    </div>
  </div>

  <!-- HERO -->
  <div class="hero">
    <div class="hero-orb-a"></div><div class="hero-orb-b"></div>
    <div class="hero-chapter">H07 &nbsp;·&nbsp; Svjetska književnost &nbsp;·&nbsp; Realizam + Dostojevski</div>
    <h1 class="hero-title">Doba istine<br><span>i savjesti</span></h1>
    <div class="hero-sub">Od <strong>Balzacovih socijalnih freski</strong> i Flaubertove <em>Madame Bovary</em>, preko Dickensova Londona, do <strong>Dostojevskog — Zločin i kazna</strong> <span style="color:var(--bronze-l)">(obvezatno čitanje 2026)</span>. Realizam (~1830.–1895.) <em>prikazuje svijet onakvim kakav jest</em> — društvo, savjest, bijedu, kriminal. Dostojevski dodaje <em>psihološki realizam</em> — ulazi u glavu lika. Raskoljnikov, Sonja, Porfirij — upoznaj ih kao stvarne ljude prije ispita.</div>
    <div class="hero-meta">
      <span class="hchip br">⏱ 75 min</span>
      <span class="hchip go">📖 Fokus: Zločin i kazna (obvezatno 2026)</span>
      <span class="hchip te">▶ H07 realizam</span>
    </div>
    <div class="hero-progress-row">
      <div class="pt"><div class="pb" id="hero-pb" style="width:5%"></div></div>
      <span class="prog-label" id="hero-prog-lbl">5% završeno</span>
    </div>
  </div>

  <!-- ══ SOCIAL PROOF + COUNTDOWN ═════════════════
       Playbook P5.1 + P5.2 — trust + urgency
       Brojevi se renderiraju iz JS-a (vidi renderSocialProof)
  ═══════════════════════════════════════════════════ -->
  <div class="social-proof" id="social-proof" aria-label="Statistika platforme"></div>

  <!-- Countdown se dinamički renderira iz JS-a -->
  <div class="countdown" id="countdown" aria-label="Do mature" style="display:none"></div>

  <!-- TABS -->
  <div class="tabs" role="tablist" aria-label="Dijelovi poglavlja">
    <button class="tab on" onclick="sw(0)" role="tab" aria-selected="true" aria-controls="l0">📖 Teorija</button>
    <button class="tab" onclick="sw(1)" role="tab" aria-selected="false" aria-controls="l1">📖 Zločin i kazna</button>
    <button class="tab" onclick="sw(2)" role="tab" aria-selected="false" aria-controls="l2">✍ Esej alat</button>
    <button class="tab" onclick="sw(3)" role="tab" aria-selected="false" aria-controls="l3">💬 Citatnik</button>
    <button class="tab" onclick="sw(4)" role="tab" aria-selected="false" aria-controls="l4">📚 Pojmovnik</button>
    <button class="tab" onclick="sw(5)" role="tab" aria-selected="false" aria-controls="l5">⚡ Drill<span class="tab-lock">PRO</span></button>
    <button class="tab" onclick="sw(6)" role="tab" aria-selected="false" aria-controls="l6">🧠 Kviz<span class="tab-lock">PRO</span></button>
    <button class="tab" onclick="sw(7)" role="tab" aria-selected="false" aria-controls="l7">✅ Checkpoint<span class="tab-lock">PRO</span></button>
  </div>

  <!-- ════════════════════════
       CONTENT LAYERS — 7 TABS
       ════════════════════════ -->
    <!-- ════════════════════════
       TAB 0 · TEORIJA
       ════════════════════════ -->
  <div class="layer on" id="l0" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">epoha</span>
      <span class="pill p-go">Dostojevski</span>
      <span class="pill p-r">obvezatno 2026</span>
      <span class="pill p-t">psihološki realizam</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">🏛 Realizam — doba istine, društva i psihologije</div>
      <div class="box-int-txt">
        <strong>Realizam</strong> (oko <b>1830.–1895.</b>) je književna epoha koja odbacuje romantičku idealizaciju i <em>prikazuje svijet „onakvim kakav jest”</em>: obične ljude, socijalnu nejednakost, mehaniku društva. Najvažniji oblik je <b>roman</b>. Ključni autor za maturu 2026: <strong>Fjodor Mihajlovič Dostojevski — Zločin i kazna</strong> (obvezatno čitanje). Dostojevski stvara <em>psihološki realizam</em> — ulazi u <b>unutarnji svijet lika</b>, prati strah, savjest, paranoju, grižnju. Sonja, Raskoljnikov, Porfirije, Dunja — upoznaj ih kao stvarne ljude prije ispita.
      </div>
    </div>

    <!-- Soft kontekst hint — exam frequency -->
    <div class="soft-hint">
      <div class="soft-hint-ico">💡</div>
      <div class="soft-hint-body">
        Tema <b>realizam + Dostojevski / Zločin i kazna</b> pojavila se na MAT 2023. i MAT 2025. — Raskoljnikov i Sonja su <b>najčešći esejski likovi zadnjih 4 godine</b>.
      </div>
    </div>

    <!-- DIAGNOSTIC QUIZ — redirect to diag function already in JS -->
    <div class="diag" id="diag" data-state="intro">
      <div class="diag-intro">
        <div class="diag-eye">⚡ DIJAGNOSTIKA · 60 SEKUNDI</div>
        <div class="diag-ttl">Mogu li ovo na maturi?</div>
        <div class="diag-desc">5 brzih pitanja iz H07. Saznaj <strong>gdje stojiš prije nego što počneš učiti</strong> o Realizmu i Dostojevskom — fokusiraj se samo na ono što ti zaista treba.</div>
        <div class="diag-actions">
          <button type="button" class="diag-btn diag-btn-primary" onclick="diagStart()">▶ Pokreni dijagnostiku</button>
          <button type="button" class="diag-btn diag-btn-ghost" onclick="diagSkip()">Preskoči — odmah na sadržaj ↓</button>
        </div>
      </div>
      <div class="diag-question" hidden>
        <div class="diag-q-head">
          <span class="diag-q-count">Pitanje <span id="diag-idx">1</span>/<span id="diag-total">5</span></span>
          <span class="diag-q-topic" id="diag-topic">—</span>
        </div>
        <div class="diag-q-text" id="diag-q">—</div>
        <div class="diag-opts" id="diag-opts"></div>
        <div class="diag-skip-q-row">
          <button type="button" class="diag-skip-q" onclick="diagAnswer(null)">Ne znam — sljedeće</button>
        </div>
        <div class="diag-explain" id="diag-explain" hidden></div>
      </div>
      <div class="diag-result" hidden>
        <div class="diag-res-header">
          <div class="diag-res-ico" id="diag-res-ico">🎯</div>
          <div>
            <div class="diag-res-title" id="diag-res-title">Tvoj rezultat</div>
            <div class="diag-res-msg" id="diag-res-msg">—</div>
          </div>
          <div class="diag-res-num"><span id="diag-correct">0</span>/5</div>
        </div>
        <div class="diag-res-body">
          <div class="diag-res-rec" id="diag-rec"></div>
          <div class="diag-res-cta">
            <button type="button" class="diag-btn diag-btn-primary" onclick="sw(1); track('diag_to_content',{},'navigation')">▶ Kreni na sadržaj</button>
            <button type="button" class="diag-btn diag-btn-ghost" onclick="diagRestart()">🔁 Ponovi dijagnostiku</button>
          </div>
        </div>
      </div>
    </div>

    <!-- SEC 01 — Što je realizam -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Što je realizam i kada nastaje</div><div class="sec-line"></div></div>

    <div class="tbl">
      <div class="cr"><div class="ck br">DEFINICIJA</div><div class="cv"><b>Realizam</b> je književna epoha (oko <em>1830.–1895.</em>) koja teži <em>objektivnom prikazu stvarnosti</em> — društva, karaktera, svakodnevnice. Odbacuje romantičku idealizaciju. Glavni oblik: <b>roman</b>.</div></div>
      <div class="cr"><div class="ck go">OKIDAČ</div><div class="cv">Revolucije <b>1848.</b> („proljeće naroda”), industrijalizacija, pojava građanskog društva i socijalnih pitanja. Znanstveni napredak (Darwin 1859., Comte — pozitivizam) traži sličan pristup umjetnosti: <em>promatraj i opisuj, ne zamišljaj</em>.</div></div>
      <div class="cr"><div class="ck t">3 STRUJE</div><div class="cv"><b>(1)</b> Francuski — Balzac <em>Ljudska komedija</em>, Flaubert <em>Madame Bovary</em>. <b>(2)</b> Engleski — Dickens <em>David Copperfield, Oliver Twist</em>. <b>(3)</b> Ruski — <em>psihološki realizam</em>: Dostojevski, Tolstoj, Gogolj, Turgenjev, Čehov.</div></div>
      <div class="cr"><div class="ck re">KLJUČNE ČRTE</div><div class="cv"><em>Tipski likovi</em> (trgovac, službenik, studenti), <em>socijalna pitanja</em>, <em>sveznajući pripovjedač</em>, <em>detaljni opisi</em> (ambijent, izgled), <em>psihologizacija</em> (posebno ruski realizam), <em>dijalog</em> kao nositelj karakterizacije.</div></div>
      <div class="cr"><div class="ck pa">NASUPROT ROMANTIZMU</div><div class="cv">Romantizam: osjećaj, priroda, egzotika, junak-pojedinac. <b>Realizam</b>: razum, grad, svakodnevica, lik kao <em>produkt društva</em>. Gdje romantik piše o „duši”, realist piše o novcu, stanu, ugovoru, službi.</div></div>
    </div>

    <div class="box-key">
      <div class="box-key-lbl">💡 Ključna fraza za esej</div>
      <div class="box-key-txt">
        <em>„Realizam nastoji prikazati svijet onakvim kakav jest — bez idealizacije i mitologizacije. Dostojevski tom pristupu dodaje <b>psihološki realizam</b> — lik nije samo produkt društva, nego i svoj unutarnji kaos.”</em>
      </div>
    </div>

    <!-- SEC 02 — Dostojevski život -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Fjodor Mihajlovič Dostojevski (1821.–1881.)</div><div class="sec-line"></div></div>

    <div class="box-20">
      <div class="b20-lbl">📖 10 ključnih činjenica o Dostojevskom</div>
      <ul class="b20-list b20-numbered">
        <li class="b20-item"><div class="b20-num">1</div><div class="b20-txt"><b>Rođen 1821. u Moskvi</b>, otac liječnik (okrutan, poslije ubijen od kmetova), majka nježna i vjernica — <em>dihotomija koja se ponavlja u njegovim likovima</em>.</div></li>
        <li class="b20-item"><div class="b20-num">2</div><div class="b20-txt"><b>Studirao vojno inženjerstvo</b> u Sankt-Peterburgu, ali ga književnost zaokupljuje — 1846. objavljuje <em>Bijedne ljude</em>, odmah je slavan.</div></li>
        <li class="b20-item"><div class="b20-num">3</div><div class="b20-txt"><b>1849. uhićen</b> zbog sudjelovanja u <em>Petraševskom kružoku</em> (socijalisti). Osuđen na smrt strijeljanjem — <b>pomilovan na strelištu u posljednjem trenutku</b>. Taj događaj mu ostaje trauma.</div></li>
        <li class="b20-item"><div class="b20-num">4</div><div class="b20-txt"><b>4 godine Sibira</b> (Omsk, robijaški logor) + 4 godine vojne službe. Iskustvo opisuje u <em>Zapisima iz Mrtvog doma</em> (1861.).</div></li>
        <li class="b20-item"><div class="b20-num">5</div><div class="b20-txt"><b>Epilepsija</b> ga prati cijeli život. Daje je Mišku u <em>Idiotu</em> i Smerdjakovu u <em>Braći Karamazovima</em>.</div></li>
        <li class="b20-item"><div class="b20-num">6</div><div class="b20-txt"><b>Kockarska ovisnost</b>. Piše <em>Kockara</em> (1866.) u 26 dana da otplati dugove. Tada upoznaje svoju drugu ženu, stenografkinju Anu Snitkinu.</div></li>
        <li class="b20-item"><div class="b20-num">7</div><div class="b20-txt"><b>1866. — Zločin i kazna</b> izlazi serijalno u časopisu <em>Ruski vjesnik</em>. Postaje odmah kulturni događaj — svi raspravljaju o Raskoljnikovu.</div></li>
        <li class="b20-item"><div class="b20-num">8</div><div class="b20-txt"><b>Veliki romani</b> nakon 1866.: <em>Idiot</em> (1868.), <em>Zli dusi</em> (1872.), <em>Mladić</em> (1875.), <em>Braća Karamazovi</em> (1880.). Svaki roman propituje veliko filozofsko-moralno pitanje.</div></li>
        <li class="b20-item"><div class="b20-num">9</div><div class="b20-txt"><b>Pravoslavni vjernik</b> — vjera je centralna u njegovim romanima. <em>Sonja Marmeladova</em> je simbol kršćanske ljubavi i žrtve.</div></li>
        <li class="b20-item"><div class="b20-num">10</div><div class="b20-txt"><b>Umro 28.1.1881.</b> u Sankt-Peterburgu. Pokopan u Aleksandro-Nevskoj lavri. Danas najutjecajniji ruski autor u svijetu (Nietzsche, Freud, Kafka, Camus — svi ga čitaju).</div></li>
      </ul>
    </div>

    <!-- SEC 03 — Psihološki realizam -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Psihološki realizam — Dostojevski specifičnost</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">🧠 Što znači „psihološki realizam"</div>
      <div class="box-int-txt">
        Dok Balzac i Flaubert opisuju <em>društveni realizam</em> (lik je određen staležom, novcem, poslovnim ugovorima), <b>Dostojevski ulazi u glavu lika</b>. Raskoljnikov nije samo bivši student — <em>on je psihološki slučaj</em>: paranoja, grižnja savjesti, intelektualna gordost, fiziološka iscrpljenost. Dostojevski koristi <b>polifoniju</b> (Bahtin) — <em>glasovi različitih likova ravnopravno se sukobljavaju</em>, autor ne daje konačnu riječ. Zločin i kazna je <em>roman ideja</em> koliko i roman radnje.
      </div>
    </div>

    <div class="tbl">
      <div class="cr"><div class="ck br">POLIFONIJA</div><div class="cv">Pojam Mihaila <b>Bahtina</b>: u Dostojevskog <em>svaki lik ima svoj nezavisni glas i ideju</em> — autor ne filtrira. Sonja, Raskoljnikov, Porfirije, Marmeladov, Svidrigajlov — svi su „ravnopravni glasovi" u romanu.</div></div>
      <div class="cr"><div class="ck go">UNUTARNJI MONOLOG</div><div class="cv">Tehnika u kojoj pratimo <em>lik iznutra</em> — njegove strahove, sumnje, racionalizacije. Raskoljnikov stalno razgovara sam sa sobom, ispravlja se, sebe optužuje. Prethodnica <em>stream of consciousness</em> (Joyce, Woolf).</div></div>
      <div class="cr"><div class="ck t">DVOJNIK</div><div class="cv">Dostojevski često koristi <em>dvojnike</em> — likovi koji utjelovljuju dvije strane jedne ideje. <b>Raskoljnikov + Svidrigajlov</b> = dvije verzije „nadčovjeka": R. se vraća k Bogu, S. se ubija. <b>Sonja + Dunja</b> = dvije žene koje žrtvuju sebe za druge.</div></div>
      <div class="cr"><div class="ck re">ISPOVIJED</div><div class="cv">Likovi kod Dostojevskog <em>ispovijedaju se</em> jedni drugima — Marmeladov Raskoljnikovu, Raskoljnikov Sonji, Svidrigajlov Dunji. <b>Ispovijed je trenutak istine</b> — otkriva pravu narav lika. Često prekretnica radnje.</div></div>
      <div class="cr"><div class="ck pa">HRIŠĆANSKA NADA</div><div class="cv">Kroz sve patnje Dostojevski <em>zadržava vjeru</em>: iskupljenje je moguće. Sonja čita Raskoljnikovu evanđelje (uskrsnuće Lazara). Kraj Zločina i kazne: Raskoljnikov u Sibiru, Sonja s njim, <em>„uskrsnuće novog čovjeka”</em>.</div></div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">🔗 EVOLUCIJSKI LANAC — „Junak s greškom" kroz epohe</div>
      <div class="box-signal-txt">
        Raskoljnikov nije prvi tragički protagonist koji propada zbog vlastite greške. To je jedan od najstarijih književnih obrazaca — prati ga kroz povijest:<br><br>
        <b>H01 · Antigona (Sofoklo)</b> — <em>hybris</em> (gordost, prekoračenje granica); tragički finale kao kazna za kršenje zakona<br>
        <b>H03 · Hamlet (Shakespeare)</b> — <em>neodlučnost i melankolija</em>; intelektualac koji ne može djelovati dok nije prekasno<br>
        <b>H05 · Werther (Goethe)</b> — <em>sentimentalna isključivost</em>; junak koji sam sebe uništava jer ne može podnijeti stvarnost<br>
        <b>H06 · Onjegin (Puškin)</b> — <em>egotizam i dosada</em> (spleenisme); junak koji shvati što je izgubio tek kada više nema povratka<br>
        <b>H07 · Raskoljnikov (Dostojevski)</b> — <em>intelektualna gordost</em>; teorija nadčovjeka razbija se o savjest i ljudsku nesposobnost za hladno ubojstvo<br>
        <b>H09 · Meursault (Camus)</b> — <em>emocionalna odsutnost i apsurd</em>; junak koji ne osjeća ono što društvo od njega očekuje
      </div>
    </div>

    <!-- SEC 04 — Kontekst: Rusija 1860-ih -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Rusija 1860-ih — društveni kontekst</div><div class="sec-line"></div></div> <b>ukidanje kmetstva 1861.</b> (car Aleksandar II.), reforme Zemstva, uspon intelektualaca-radikala, „ljudi iz podzemlja", dolazak <em>nihilizma</em>. Sankt-Peterburg — prijestolnica — simbolizira <b>grad kontradikcija</b>: bogatstvo palača i bijeda sjenovite četvrti Sennaja ploščadj gdje živi Raskoljnikov.</p>
      
      <p><b>Nihilizam</b> (od lat. <em>nihil</em> = „ništa”) — filozofski stav pokreta 1860-ih ruske omladine: odbacivanje svih tradicionalnih vrijednosti (crkva, država, obitelj, moral). Ikona pokreta: <em>Bazarov</em> iz Turgenjevljevog <em>Oci i sinovi</em> (1862.). Raskoljnikovljeva <b>teorija nadčovjeka</b> je intelektualni proizvod ovog duha vremena.</p>
      
      <p><em>Dostojevski piše Zločin i kaznu kao odgovor nihilizmu:</em> pokazuje što se događa kad se osnovna moralna pravila odbace — pojedinac ubija, ali <b>savjest ga proganja</b>, postaje „odrezan" od svijeta, dolazi do rubа ludila. Samo kroz <em>patnju, ispovijed i ljubav</em> (Sonja) moguće je spasenje.</p>
    </div>

    <div class="box-warn">
      <div class="bw-ico">⚠️</div>
      <div class="bw-body">
        <div class="bw-title">Ne brkati — nihilizam ≠ anarhija</div>
        <div class="bw-txt">Nihilizam nije <em>anarhija</em>. Nihilisti odbacuju moralne norme ali žele <b>racionalno reorganizirati društvo</b> (utilitarizam, socijalizam, pozitivizam). Raskoljnikov se služi <em>utilitarnom logikom</em>: „lihvarica je parazit, ubijem jednu, pomognem stotinama siromaha". Dostojevski pokazuje — <strong>ta logika ne funkcionira psihološki</strong>.</div>
      </div>
    </div>

    <!-- AUTHORITY BOX -->
    <div class="auth-box">
      <div class="auth-ico">🇭🇷</div>
      <div class="auth-body">
        <div class="auth-ttl">Usklađeno s NCVVO ispitnim katalogom</div>
        <div class="auth-txt">Sadržaj ove skripte prati službeni <strong>Ispitni katalog za državnu maturu — Hrvatski jezik</strong>. Zločin i kazna je obvezatno ispitno djelo za 2026.</div>
        <div class="auth-links">
          <a href="https://www.ncvvo.hr/ispitni-katalozi-za-drzavnu-maturu-2025-2026/" target="_blank" rel="noopener noreferrer" class="auth-link" onclick="track('ext_link_click',{target:'ncvvo_katalozi'},'engagement')">Svi katalozi 2025/2026 →</a>
          <a href="https://www.ncvvo.hr/wp-content/uploads/2025/09/HRV-2026.pdf" target="_blank" rel="noopener noreferrer" class="auth-link" onclick="track('ext_link_click',{target:'ncvvo_hrv_pdf'},'engagement')">Hrvatski jezik · PDF →</a>
        </div>
      </div>
    </div>

    <!-- CHEAT SHEET -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Pred-ispit cheat sheet</div><div class="sec-line"></div></div>

    <div class="cheat-card">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">QUICK REFERENCE · 30 MIN PRIJE ISPITA</div>
          <div class="cheat-ttl">Sve što moraš pamtiti — H07</div>
        </div>
        <button class="cheat-print" onclick="printCheatSheet()" aria-label="Ispiši cheat sheet">🖨 Ispiši</button>
      </div>

      <div class="cheat-grid">
        <div class="cheat-col">
          <div class="cheat-col-ttl">📅 Datumi &amp; autori</div>
          <table class="cheat-tbl">
            <tr><td><b>1799.–1850.</b></td><td>Honoré de Balzac</td></tr>
            <tr><td><b>1812.–1870.</b></td><td>Charles Dickens</td></tr>
            <tr><td><b>1821.–1881.</b></td><td><strong>Fjodor Dostojevski</strong></td></tr>
            <tr><td><b>1828.–1910.</b></td><td>Lav Tolstoj</td></tr>
            <tr><td><b>1829.–1884.</b></td><td>Gustave Flaubert</td></tr>
            <tr><td><b>1830.–1895.</b></td><td>Realizam kao epoha</td></tr>
            <tr><td><b>1830.</b></td><td>Stendhal · <em>Crveno i crno</em></td></tr>
            <tr><td><b>1835.</b></td><td>Balzac · <em>Otac Goriot</em></td></tr>
            <tr><td><b>1857.</b></td><td>Flaubert · <em>Madame Bovary</em></td></tr>
            <tr><td><b>1862.</b></td><td>Turgenjev · <em>Oci i sinovi</em> (nihilizam)</td></tr>
            <tr><td><b>1866.</b></td><td><strong>Dostojevski · Zločin i kazna ★ 2026</strong></td></tr>
            <tr><td><b>1869.</b></td><td>Tolstoj · <em>Rat i mir</em></td></tr>
            <tr><td><b>1880.</b></td><td>Dostojevski · <em>Braća Karamazovi</em></td></tr>
          </table>
        </div>

        <div class="cheat-col">
          <div class="cheat-col-ttl">🎯 Top pojmovi (često na maturi)</div>
          <ul class="cheat-list">
            <li><b>Realizam</b> = prikazivanje stvarnosti onakvom kakva jest (~1830.–1895.)</li>
            <li><b>Psihološki realizam</b> = Dostojevski — savjest kao protagonist, iznutra</li>
            <li><b>Polifonija</b> = (Bahtin) svaki lik ima nezavisan glas, autor ne filtrira</li>
            <li><b>Unutarnji monolog</b> = praćenje lika iznutra, preteča stream of consciousness</li>
            <li><b>Dvojnik</b> = lik koji utjelovljuje drugu stranu protagonista (Svidrigajlov)</li>
            <li><b>Ispovijed</b> = trenutak istine, prekretnica radnje (Raskoljnikov Sonji)</li>
            <li><b>Teorija nadčovjeka</b> = „izvanredni" smiju kršiti moral za viši cilj</li>
            <li><b>Nihilizam</b> = odbacivanje tradicije i morala (Turgenjev, Bazarov)</li>
            <li><b>Suvišan čovjek</b> = junak koji se ne uklapa (Onjegin → Raskoljnikov)</li>
            <li><b>Determinizam</b> = društvo/biologija određuju sudbinu (Balzac, Zola)</li>
            <li><b>Naturalizam</b> = ekstremni realizam — biološki determinizam (Zola)</li>
            <li><b>Bildungsroman</b> = roman sazrijevanja (paralelno s realizmom)</li>
          </ul>
        </div>

        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">🔪 Zločin i kazna — esencijalno za esej</div>
          <div class="cheat-grid-inner">
            <div>
              <div class="cheat-mini-ttl">Autor · godina · vrsta</div>
              <div class="cheat-mini-txt"><b>Dostojevski, 1866.</b> Psihološki roman u <b>6 dijelova + epilog</b>. Izlazi serijalno u <em>Ruskom vjesniku</em>. Obvezatno čitanje 2026. Sankt-Peterburg.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Teorija nadčovjeka</div>
              <div class="cheat-mini-txt">Raskoljnikov dijeli ljude na <b>„obične"</b> i <b>„izvanredne"</b>. Napoleon kao uzor. <em>Dostojevski pobija teoriju: savjest je jača od razuma.</em></div>
            </div>
            <div>
              <div class="cheat-mini-ttl">4 centralna sukoba</div>
              <div class="cheat-mini-txt">
                1. <em>Razum</em> (teorija) vs <em>savjest</em> (grižnja)<br>
                2. <em>Individualizam</em> vs <em>kršćanska ljubav</em> (Sonja)<br>
                3. <em>Zločin</em> (ubojstvo) vs <em>kazna</em> (psihološka)<br>
                4. <em>Gordost</em> (nadčovjek) vs <em>poniznost</em> (iskupljenje)
              </div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Raskoljnikova transformacija</div>
              <div class="cheat-mini-txt">
                <b>Teorija</b> → <b>ubojstvo</b> → <b>paranoja i grižnja</b> → <b>ispovijed Sonji</b> → <b>predaja</b> → <b>Sibir + iskupljenje</b>. <em>„Nova priča počinje."</em>
              </div>
            </div>
          </div>
        </div>

        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">👥 8 ključnih likova — tko je tko</div>
          <div class="cheat-grid-inner">
            <div>
              <div class="cheat-mini-ttl">Raskoljnikov · Sonja</div>
              <div class="cheat-mini-txt"><b>Raskoljnikov</b> — bivši student prava, ubojica lihvarice, teorija nadčovjeka. <b>Sonja</b> — prostitutka iz bijede, moralna vertikala, prati u Sibir.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Porfirij · Svidrigajlov</div>
              <div class="cheat-mini-txt"><b>Porfirij</b> — istražni sudac, psihološki duelist, 3 susreta. <b>Svidrigajlov</b> — Raskoljnikov alter ego: nadčovjek bez morala, ubija se.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Dunja · Razumihin</div>
              <div class="cheat-mini-txt"><b>Dunja</b> — Raskoljnikova sestra, odbija Svidrigajlova. <b>Razumihin</b> — jedini prijatelj, pozitivan, ženi se Dunjom.</div>
            </div>
            <div>
              <div class="cheat-mini-ttl">Marmeladov · Katerina · Aljona</div>
              <div class="cheat-mini-txt"><b>Marmeladov</b> — Sonjin otac, alkoholičar. <b>Katerina</b> — Sonjina maćeha, gordost i tuberkuloza. <b>Aljona Ivanovna</b> — lihvarica, žrtva.</div>
            </div>
          </div>
        </div>

        <div class="cheat-col cheat-col-wide">
          <div class="cheat-col-ttl">✍ Esej — struktura u 6 koraka</div>
          <ol class="cheat-steps">
            <li><b>Uvod</b> — kontekst (Dostojevski, 1866., psihološki realizam) + jasna teza (1 rečenica)</li>
            <li><b>Razrada 1</b> — teorija nadčovjeka: zašto Raskoljnikov ubija, tko su „izvanredni"</li>
            <li><b>Razrada 2</b> — psihološki slom: 3 susreta s Porfirijem, grižnja savjesti, Sonjina uloga</li>
            <li><b>Razrada 3</b> — iskupljenje ili kontekst epohe (nihilizam, Rusija 1860-ih, psihološki realizam)</li>
            <li><b>Zaključak</b> — odgovor na tezu, Dostojevskijeva poruka (savjest nadvladava razum)</li>
            <li><b>Provjera</b> — min 440 riječi, trodijelna struktura, HR navodnici, književni pojmovi</li>
          </ol>
        </div>

        <div class="cheat-col cheat-col-wide cheat-col-warn">
          <div class="cheat-col-ttl">⚠ Što NE smiješ na ispitu</div>
          <ul class="cheat-list cheat-list-warn">
            <li>Reći da Raskoljnikov ubija iz <b>bijede ili očaja</b> — ubija iz <em>ideologije</em> (teorija nadčovjeka). Bijeda je kontekst, ne uzrok.</li>
            <li>Brkati <b>Svidrigajlova</b> i <b>Porfirija</b> — Svidrigajlov = alter ego (ubija se); Porfirij = istražni sudac koji psihološki lovi Raskoljnikova</li>
            <li>Reći da <b>Sonja</b> spašava Raskoljnikova pritiskom — ona ga spašava <em>ljubavlju i primjerom</em>. On se sam predaje.</li>
            <li>Tvrditi da roman ima <b>sretan kraj</b> — završetak je otvoren. Iskupljenje <em>počinje</em> u Sibiru. „To je već druga priča."</li>
            <li>Brkati <b>Marmeladova</b> (Sonjin alkoholičarski otac) s <b>Razumihin</b>om (Raskoljnikov jedini prijatelj, pozitivan)</li>
            <li>Reći da Dostojevski <b>opravdava</b> teoriju nadčovjeka — cijela drama dokazuje suprotno</li>
            <li>Zanemariti <b>simboliku broja 7</b> — 6 dijelova + epilog = 7; Sonja živi u sobi broj 7</li>
            <li>Pisati esej kraći od 440 riječi (esej se NE vrednuje)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="box-signal">
      <div class="box-signal-lbl">🇭🇷 HRVATSKA PARALELA — realizam i Šenoa (→ H15)</div>
      <div class="box-signal-txt">
        Dok Dostojevski piše <em>Zločin i kazna</em> (1866.) u Rusiji, <strong>August Šenoa</strong> u Zagrebu piše <em>Prijan Lovro</em> (1873.) — oba su realisti iste epohe. <b>Ključna usporedba:</b> Dostojevski daje psihološki portret kriminalca koji se iskupljuje; Šenoa daje socijalni portret propale intelektualne nade u zaostaloj hrv. sredini. Obojica kritiziraju društvo kroz lik koji propada. → <b>H15 · Šenoa / Prijan Lovro</b>
      </div>
    </div>

    <!-- Navigation -->
    <div class="nav-row">
      <span class="nb" onclick="location.href='/skripte/hrv/h06'">← H06 · Romantizam</span>
      <span class="nb primary" onclick="sw(1)">📖 Zločin i kazna — deep dive →</span>
    </div>
  </div>

  <!-- ════════════════════════
       TAB 1 · ZLOČIN I KAZNA
       ════════════════════════ -->
  <div class="layer" id="l1" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">obvezatno 2026</span>
      <span class="pill p-go">psihološki roman</span>
      <span class="pill p-r">6 dijelova + epilog</span>
      <span class="pill p-t">Raskoljnikov · Sonja · Porfirije</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">📖 Zašto Zločin i kazna zaslužuje deep dive</div>
      <div class="box-int-txt">
        <strong>Zločin i kazna</strong> (1866.) je <em>obvezatno čitanje za maturu 2026.</em> Ispit će provjeriti znanje <b>likova</b>, <b>kompozicije (6 dijelova + epilog)</b>, <b>teorije nadčovjeka</b>, <b>simbolike broja 7</b>, <b>Sonjine uloge</b>, <b>kraja (iskupljenje)</b>. Ovo je <em>najvažniji tab cijelog H07</em>. Budi siguran da znaš: zašto Raskoljnikov ubija, što mu Porfirije kaže u 3 susreta, kako Sonja čita Bibliju, zašto se predaje, kako završava roman.
      </div>
    </div>

    <!-- SEC 01 — Radnja u 6 dijelova -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Kompozicija — 6 dijelova + Epilog</div><div class="sec-line"></div></div>

    <div class="box-20">
      <div class="b20-lbl">📚 Struktura romana</div>
      <ul class="b20-list b20-numbered">
        <li class="b20-item"><div class="b20-num">1</div><div class="b20-txt"><b>I. dio</b> — <em>Priprema i zločin</em>. Raskoljnikov živi u kukavičjem stanu u Peterburgu, siromah, bolestan. Razmišlja o „probi". Upoznajemo ga: student prava koji je napustio studij. Susreće pijanog Marmeladova — sazna za Sonju. Prima majčino pismo (Dunja se treba udati za Lužina). Ubija <b>Alonu Ivanovnu</b> (lihvaricu) i njezinu polusestru <b>Lizavetu</b> (slučajno zatekla — svjedok). Nakon ubojstva — trauma, groznica.</div></li>
        <li class="b20-item"><div class="b20-num">2</div><div class="b20-txt"><b>II. dio</b> — <em>Bolest i paranoja</em>. Raskoljnikov u groznici. Posjeti policije (poziv zbog duga). Vrati blago na mjesto pod kamen. Dolazi prijatelj <b>Razumihin</b> (pomaže). Prvi susret s <b>Porfirijem Petrovičem</b> (istražitelj) u Razumihinovom stanu. Zosimov liječnik. Marmeladov umire pregažen konjima — Raskoljnikov predaje sve novca Katerini Ivanovnoj. Sonja ga vidi.</div></li>
        <li class="b20-item"><div class="b20-num">3</div><div class="b20-txt"><b>III. dio</b> — <em>Intelektualna igra</em>. Dolazi majka i Dunja u Peterburg. Raskoljnikov odbija njihovu pomoć. <b>Drugi susret s Porfirijem</b> — Porfirije citira Raskoljnikovljev članak „O zločinu" (teorija nadčovjeka). Igra mačke i miša. Svidrigajlov se pojavljuje.</div></li>
        <li class="b20-item"><div class="b20-num">4</div><div class="b20-txt"><b>IV. dio</b> — <em>Sonja</em>. Raskoljnikov ide Sonji. <em>Ona mu čita ulomak o uskrsnuću Lazara iz Ivanovog evanđelja</em>. Scena prekretnica. Raskoljnikov odlučuje reći joj sve. <b>Treći susret s Porfirijem</b> — Porfirije priznaje da zna, ali daje mu priliku da se sam prijavi. Pojava <em>Mikolke</em> (ličar koji „priznaje" ubojstvo).</div></li>
        <li class="b20-item"><div class="b20-num">5</div><div class="b20-txt"><b>V. dio</b> — <em>Priznanje Sonji</em>. Lužin optužuje Sonju krađe (podmetanje). Razotkrivanje. Raskoljnikov <b>priznaje Sonji</b> da je ubio. Ona plače, prihvaća ga. Reci mu: <em>„Otići ćemo zajedno u patnju."</em> Savjetuje predaju.</div></li>
        <li class="b20-item"><div class="b20-num">6</div><div class="b20-txt"><b>VI. dio</b> — <em>Rastanak i predaja</em>. Svidrigajlov ucjenjuje Dunju (zna za ubojstvo). Dunja ga ne voli — Svidrigajlov je <b>pusta</b>, ide na groblje, <em>ubija se</em>. Raskoljnikov ide Sonji — daje joj križ. <b>Predaje se</b> policiji.</div></li>
        <li class="b20-item"><div class="b20-num">+</div><div class="b20-txt"><b>Epilog</b> — <em>Sibirska tamnica, 1,5 godina kasnije</em>. 8 godina katorge. Sonja ga prati. Raskoljnikov još odbija — "nije griješio". Bolest. <em>San o bezumnim bakterijama</em> (ljudi ubijaju jedni druge u ideološkom ludilu). <b>Buđenje</b>: gleda Sonju, <em>pada joj pred noge, plače, ljubav</em>. Kraj — <b>„nova priča, priča o postupnom preporodu čovjeka"</b>. Dostojevski obećava nastavak (nikad ga ne napiše).</div></li>
      </ul>
    </div>

    <!-- SEC 02 — Glavni likovi -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Glavni likovi — karakterizacija</div><div class="sec-line"></div></div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip br">PROTAGONIST</span>
        <div class="sc-name">Rodion Romanovič Raskoljnikov</div>
        <div class="sc-desc">23 godine, bivši student prava. Napustio studij zbog siromaštva. Bolestan, iscrpljen, intelektualno arogantan. Piše članak <em>„O zločinu"</em> — teorija o „običnim" i „neobičnim" ljudima (tj. nadčovjecima). Ubija iz kombinacije <b>utilitarne logike</b> (pomoći siromasima) i <b>intelektualnog eksperimenta</b> („jesam li Napoleon ili vaš?"). Nakon ubojstva: paranoja, samoća, grižnja. Ime od rus. <em>raskoljnik</em> = <b>raskolnik, skismaatik</b>.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip go">MORALNA VERTIKALA</span>
        <div class="sc-name">Sonja Semjonovna Marmeladova</div>
        <div class="sc-desc">18 godina. Kći pijanca Marmeladova. <em>Žuta kartica</em> — prisiljena na prostituciju da prehrani obitelj (Katerina Ivanovna + 3 polubrata). Duboko <b>pravoslavna</b>. Raskoljnikovu čita <em>Evanđelje po Ivanu — uskrsnuće Lazara</em>. Njen poziv: <em>„Pati — to je put."</em> <b>Simbol kršćanske ljubavi i iskupljenja.</b> Slijedi Raskoljnikova u Sibir. <em>Moralna vertikala romana</em> (<b>paralela s Tatjanom iz H06 Onjegina</b> — obje moralne vertikale kroz žrtvu).</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip t">ISTRAŽITELJ</span>
        <div class="sc-name">Porfirij Petrovič</div>
        <div class="sc-desc">Istražitelj u policiji. Lukav, psihološki profinjen. <em>Zna da je Raskoljnikov ubojica</em> već od prvog susreta, ali nema dokaz. Igra <b>mačke i miša</b> kroz 3 susreta — provocira, citira Raskoljnikovljev članak, postavlja pitanja. U 3. susretu savjetuje da se <em>sam preda</em> — dobit će lakšu kaznu. <b>Jedini lik s kojim Raskoljnikov vodi intelektualni dvoboj</b>.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip re">DVOJNIK</span>
        <div class="sc-name">Arkadij Svidrigajlov</div>
        <div class="sc-desc">Oko 50 godina, bivši poslodavac Dunje. <em>Proganja je.</em> Cinik, razvratnik, možda je otrovao svoju ženu Marfu Petrovnu. <b>Raskoljnikovljev dvojnik</b> — također „nadčovjek" po logici, ali <em>bez moralne grižnje</em>. Prisluškuje Sonju kad R. priznaje — pokušava ucijeniti Dunju. Dunja ga gađa pistoljem, promašuje. Svidrigajlov — svjesan da je gotov — <b>ubija se na mostu</b>. Njegov kraj = <em>što bi se Raskoljnikovu dogodilo bez Sonje</em>.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip pa">SESTRA</span>
        <div class="sc-name">Avdotja Romanovna „Dunja" Raskoljnikova</div>
        <div class="sc-desc">Raskoljnikovljeva sestra. Lijepa, ponosna, obrazovana. Namjerava se udati za <b>Petra Petroviča Lužina</b> (odvjetnik, koristoljubiv, želi ženu „podreðenu") <em>samo radi brata</em> — da osigura njegov studij. Raskoljnikov odbija tu žrtvu. Dunja raskida s Lužinom. Na kraju se udaje za <b>Razumihina</b> (R.-ov odani prijatelj). Paralela Sonji: <em>obje žrtvuju sebe za druge</em>.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip br">PRIJATELJ</span>
        <div class="sc-name">Dmitrij Prokofjič Razumihin</div>
        <div class="sc-desc">Student, Raskoljnikovljev odani prijatelj. <b>Razum</b> (ruski <em>razum</em> = razum, pamet) — u imenu. Zdrav, radišan, veseo — <em>antiteza Raskoljnikovu</em>. Brine o njemu dok je bolestan. Na kraju se ženi Dunjom. Predstavlja <b>alternativu</b>: što bi Raskoljnikov mogao biti bez teorije nadčovjeka.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip go">MUČENICA</span>
        <div class="sc-name">Katerina Ivanovna Marmeladova</div>
        <div class="sc-desc">Sonjina maćeha, druga žena pijanca Marmeladova. Nekad plemkinja, obrazovana, sada živi u ekstremnoj bijedi s <em>tuberkulozom</em>. Ponosan, ludi pomalo od siromaštva. Nagovara Sonju na „žutu karticu" kad više nema što za jelo. <em>Na kraju ludi, iskašljava krv</em>, umire na ulici. Simbol <b>sloma dostojanstva pod bijedom</b>.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip re">ŽRTVA</span>
        <div class="sc-name">Alona Ivanovna i Lizaveta</div>
        <div class="sc-desc"><b>Alona</b> — lihvarica, škrta, okrutna prema sestri. Raskoljnikov je vidi kao <em>„štetnu vaš"</em> — ubija je sjekirom. <b>Lizaveta</b> — njena polusestra, dobra, krotka, jednostavno duhovna. Neplanirana žrtva — Raskoljnikov ju ubija jer ga je vidjela. <em>Dvije žrtve</em> = ubijajući Alonu, ubio je i nevin život. <b>Lizaveta i Sonja su bile prijateljice</b> — ironična koincidencija.</div>
      </div>
    </div>

    <!-- RELATION GRAPH — interaktivna karta odnosa -->

    <div class="rel-graph">
      <div class="rel-graph-hdr">
        <span class="rel-graph-ttl">🕸 Karta odnosa</span>
        <span class="rel-graph-sub">Klikni na lik za kratki opis — pomoć pri pamćenju strukture romana</span>
      </div>
      <div class="rel-svg-wrap">
        <svg class="rel-svg" viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="relgTitle">
          <title id="relgTitle">Karta odnosa likova u Zločinu i kazni</title>
          
          <!-- EDGES — drawn FIRST so nodes overlay -->
          <!-- Raskolj — Sonja: LJUBAV (moralna vertikala) -->
          <line class="rel-edge love" x1="280" y1="210" x2="165" y2="100"/>
          <text class="rel-edge-label" x="216" y="152">ljubav</text>
          <!-- Raskolj — Porfirij: LOV -->
          <line class="rel-edge hunt" x1="280" y1="210" x2="395" y2="100"/>
          <text class="rel-edge-label" x="344" y="152">istraga</text>
          <!-- Raskolj — Svidrigajlov: DVOJNIK -->
          <line class="rel-edge double" x1="280" y1="210" x2="460" y2="270"/>
          <text class="rel-edge-label" x="376" y="234">dvojnik</text>
          <!-- Raskolj — Dunja: OBITELJ -->
          <line class="rel-edge family" x1="280" y1="210" x2="100" y2="270"/>
          <text class="rel-edge-label" x="188" y="234">brat/sestra</text>
          <!-- Raskolj — Alona + Lizaveta: UBIJA -->
          <line class="rel-edge kill" x1="280" y1="210" x2="280" y2="360"/>
          <text class="rel-edge-label" x="296" y="290">ubija</text>
          <!-- Sonja — Marmeladov: kći -->
          <line class="rel-edge family" x1="165" y1="100" x2="55" y2="80"/>
          <text class="rel-edge-label" x="108" y="78">kći</text>
          <!-- Marmeladov — Katerina: ŽENA -->
          <line class="rel-edge family" x1="55" y1="80" x2="55" y2="170"/>
          <!-- Svidrigajlov — Dunja: PROGANJA -->
          <line class="rel-edge hunt" x1="460" y1="270" x2="100" y2="270"/>
          <text class="rel-edge-label" x="280" y="262">proganja</text>
          <!-- Dunja — Razumihin: ŽENI SE -->
          <line class="rel-edge marry" x1="100" y1="270" x2="100" y2="355"/>
          <text class="rel-edge-label" x="130" y="316">ženi se</text>
          
          <!-- NODES -->
          <!-- Raskolj (center) -->
          <g class="rel-node" data-char="raskolj" onclick="relSel('raskolj',this)" tabindex="0" role="button" aria-label="Raskoljnikov">
            <circle class="rel-node-bg" cx="280" cy="210" r="42"/>
            <text class="rel-node-label" x="280" y="205">RASKOLJ-</text>
            <text class="rel-node-label" x="280" y="218">NIKOV</text>
          </g>
          <!-- Sonja (upper left) -->
          <g class="rel-node" data-char="sonja" onclick="relSel('sonja',this)" tabindex="0" role="button" aria-label="Sonja">
            <circle class="rel-node-bg" cx="165" cy="100" r="34"/>
            <text class="rel-node-label" x="165" y="104">SONJA</text>
          </g>
          <!-- Porfirij (upper right) -->
          <g class="rel-node" data-char="porfirije" onclick="relSel('porfirije',this)" tabindex="0" role="button" aria-label="Porfirij">
            <circle class="rel-node-bg" cx="395" cy="100" r="34"/>
            <text class="rel-node-label" x="395" y="104">PORFIRIJ</text>
          </g>
          <!-- Svidrigajlov (right mid) -->
          <g class="rel-node" data-char="svidri" onclick="relSel('svidri',this)" tabindex="0" role="button" aria-label="Svidrigajlov">
            <circle class="rel-node-bg" cx="460" cy="270" r="36"/>
            <text class="rel-node-label" x="460" y="267">SVIDRI-</text>
            <text class="rel-node-label" x="460" y="278">GAJLOV</text>
          </g>
          <!-- Dunja (left mid) -->
          <g class="rel-node" data-char="dunja" onclick="relSel('dunja',this)" tabindex="0" role="button" aria-label="Dunja">
            <circle class="rel-node-bg" cx="100" cy="270" r="30"/>
            <text class="rel-node-label" x="100" y="274">DUNJA</text>
          </g>
          <!-- Razumihin (bottom left) -->
          <g class="rel-node" data-char="razumihin" onclick="relSel('razumihin',this)" tabindex="0" role="button" aria-label="Razumihin">
            <circle class="rel-node-bg" cx="100" cy="380" r="30"/>
            <text class="rel-node-label" x="100" y="377">RAZUMI-</text>
            <text class="rel-node-label" x="100" y="388">HIN</text>
          </g>
          <!-- Marmeladov (upper far-left) -->
          <g class="rel-node" data-char="marmeladov" onclick="relSel('marmeladov',this)" tabindex="0" role="button" aria-label="Marmeladov">
            <circle class="rel-node-bg" cx="55" cy="80" r="26"/>
            <text class="rel-node-label" x="55" y="77">MARME-</text>
            <text class="rel-node-label" x="55" y="88">LADOV</text>
          </g>
          <!-- Katerina (far-left mid) -->
          <g class="rel-node" data-char="katerina" onclick="relSel('katerina',this)" tabindex="0" role="button" aria-label="Katerina">
            <circle class="rel-node-bg" cx="55" cy="170" r="26"/>
            <text class="rel-node-label" x="55" y="167">KATE-</text>
            <text class="rel-node-label" x="55" y="178">RINA</text>
          </g>
          <!-- Alona + Lizaveta (bottom) -->
          <g class="rel-node" data-char="alona" onclick="relSel('alona',this)" tabindex="0" role="button" aria-label="Alona i Lizaveta">
            <circle class="rel-node-bg" cx="280" cy="385" r="28"/>
            <text class="rel-node-label" x="280" y="382">ALONA +</text>
            <text class="rel-node-label" x="280" y="393">LIZAVETA</text>
          </g>
        </svg>
      </div>

      <div class="rel-panel" id="rel-panel">
        <div class="rel-panel-empty">↑ Klikni na bilo koji lik za kratki opis njegove uloge u romanu</div>
      </div>

      <div class="rel-legend">
        <span class="rel-legend-item"><span class="rel-legend-line" style="background:var(--gold)"></span>ljubav</span>
        <span class="rel-legend-item"><span class="rel-legend-line" style="background:var(--teal);background-image:repeating-linear-gradient(90deg,var(--teal) 0,var(--teal) 2px,transparent 2px,transparent 4px)"></span>lov/istraga</span>
        <span class="rel-legend-item"><span class="rel-legend-line" style="background:#a88;background-image:repeating-linear-gradient(90deg,#a88 0,#a88 6px,transparent 6px,transparent 9px)"></span>dvojnik</span>
        <span class="rel-legend-item"><span class="rel-legend-line" style="background:var(--green)"></span>obitelj</span>
        <span class="rel-legend-item"><span class="rel-legend-line" style="background:var(--red);background-image:repeating-linear-gradient(90deg,var(--red) 0,var(--red) 4px,transparent 4px,transparent 7px)"></span>ubija</span>
        <span class="rel-legend-item"><span class="rel-legend-line" style="background:var(--green-l);height:3px"></span>brak</span>
      </div>
    </div>
    <script>
      (function initRelGraph(){
        var REL_INFO={
          raskolj:{name:'Rodion Raskoljnikov',desc:'Protagonist. 23 godine, bivši student prava. Autor teorije nadčovjeka. Ubija Alonu i Lizavetu. Prolazi kroz paranoju, priznaje Sonji, predaje se, ide u Sibir — iskupljenje.'},
          sonja:{name:'Sonja Marmeladova',desc:'Moralna vertikala. 18 godina, prostitutka iz nužde, pravoslavna. Čita Raskoljnikovu evanđelje (uskrsnuće Lazara). Zove ga na pokoru („Pati — to je put"). Prati ga u Sibir.'},
          porfirije:{name:'Porfirij Petrovič',desc:'Istražitelj. Zna od početka — kroz 3 psihološka susreta vodi Raskoljnikova do priznanja. Intelektualni dvojnik. Savjetuje: sam se predaj — dobit ćeš blaže.'},
          svidri:{name:'Svidrigajlov',desc:'Cinični dvojnik Raskoljnikovljev — ista filozofija, bez grižnje savjesti. Bivši Dunjin poslodavac. Ucjenjuje je. Pokušaj silovanja. Ubija se na mostu — njegov kraj je što bi R. bio bez Sonje.'},
          dunja:{name:'Avdotja „Dunja" Raskoljnikova',desc:'Raskoljnikovljeva sestra. Pristaje na brak s Lužinom zbog brata. Gađa Svidrigajlova pistoljem. Udaje se za Razumihina. Paralela Sonji — aktivna moralnost.'},
          razumihin:{name:'Dmitrij Razumihin',desc:'Raskoljnikovljev odani prijatelj, student. Ime od rus. razum. Zdrav, radišan — antiteza Raskoljnikovu. Ženi se Dunjom. Alternativa teoriji nadčovjeka.'},
          marmeladov:{name:'Semjon Marmeladov',desc:'Sonjin otac. Bivši činovnik, propio se. Pijani monolog u kafani otvara roman. Umire pregažen konjima. Simbol sloma dostojanstva pod siromaštvom.'},
          katerina:{name:'Katerina Ivanovna',desc:'Sonjina maćeha. Nekad plemkinja, sada tuberkuloza i bijeda. Nagovara Sonju na žutu karticu. Umire na ulici iskašljujući krv — „Umrijet ću kao pas!"'},
          alona:{name:'Alona Ivanovna + Lizaveta',desc:'Žrtve zločina. Alona — škrta lihvarica (planirana žrtva). Lizaveta — njena krotka polusestra (neplanirana, Sonjina prijateljica). Dvije žrtve: Raskoljnikov nije računao s nevinim životom.'}
        };
        function relSel(key, node){
          var panel=document.getElementById('rel-panel');
          if(!panel) return;
          var info=REL_INFO[key];
          if(!info) return;
          panel.innerHTML='<div class="rel-panel-name">'+info.name+'</div><div class="rel-panel-desc">'+info.desc+'</div>';
          // Highlight active node
          document.querySelectorAll('.rel-node').forEach(function(n){ n.classList.remove('active'); });
          if(node) node.classList.add('active');
          if(typeof track==='function') track('rel_graph_node',{char:key},'engagement');
        }
        // Expose globally
        window.relSel=relSel;
        // Keyboard support
        document.querySelectorAll('.rel-node').forEach(function(n){
          n.addEventListener('keydown',function(e){
            if(e.key==='Enter'||e.key===' '){ e.preventDefault(); n.click(); }
          });
        });
      })();
    </script>

    <!-- SEC 03 — Teorija nadčovjeka -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · Teorija nadčovjeka — Raskoljnikovljev članak</div><div class="sec-line"></div></div>

    <div class="box-int">
      <div class="box-int-lbl">💡 „O zločinu" — Raskoljnikovljev esej</div>
      <div class="box-int-txt">
        Raskoljnikov je <em>pol godine prije ubojstva</em> objavio članak <b>„O zločinu"</b> u časopisu. U članku tvrdi: <em>ljudi se dijele na „obične" (većina) i „neobične" (nadčovjeci)</em>. Nadčovjeci imaju pravo <b>prekršiti zakon i moralne norme</b> ako vjeruju da time služe višem cilju. Primjeri: Napoleon, Muhamed, Newton. <em>„Napoleon je preko trupa prešao do svoje ideje — i sad ga zovemo velikim."</em> Raskoljnikov primjenjuje tu logiku na sebe: <b>„Jesam li ja vaš ili sam Napoleon?"</b>
      </div>
    </div>

    <div class="tbl">
      <div class="cr"><div class="ck br">UTILITARNI ARGUMENT</div><div class="cv"><em>„Lihvarica Alona je parazit — sisa krv siromasima. Ako je ubijem, imam njen novac → mogu nastaviti studij → mogu služiti društvu. Jedan zločin = stotinu dobrih djela."</em> Utilitarna matematika: 1 loš život < 100 spašenih.</div></div>
      <div class="cr"><div class="ck go">INTELEKTUALNI ARGUMENT</div><div class="cv"><em>„Je li zakon apsolutan? Ili je napravljen samo za obične ljude?"</em> Raskoljnikov želi <b>testirati sebe</b> — je li nadčovjek ili nije. Ubojstvo nije samo čin, nego <em>filozofski eksperiment</em>.</div></div>
      <div class="cr"><div class="ck t">POSTNAPOLEONSKI KOMPLEKS</div><div class="cv">Raskoljnikov pri kraju priznaje Sonji: <em>„Želio sam biti Napoleon — to je sve."</em> Zločin nije bio za novac (nije ga ni iskoristio), nego <b>za samopotvrdu</b>. Kad shvati da je <em>obični ubojica</em>, a ne nadčovjek, slama se.</div></div>
      <div class="cr"><div class="ck re">DOSTOJEVSKOV ODGOVOR</div><div class="cv"><b>Teorija ne funkcionira.</b> Raskoljnikov <em>psihološki ne može</em> nositi ubojstvo — savjest ga pokazuje. Čak i nadčovjek ima dušu koja se buni. <em>Čovjek nije samo intelekt</em> — ima osjećaje, vjeru, grižnju. Odbacivanjem moralnih normi, uništava i sebe (Svidrigajlov = self-destruct).</div></div>
      <div class="cr"><div class="ck pa">NIETZSCHEOVA VEZA</div><div class="cv"><b>Raskoljnikovljeva teorija anticipira Nietzscheovog Übermensch-a</b> (<em>„Tako je govorio Zaratustra"</em>, 1883.). Ironija: Nietzsche je bio obožavatelj Dostojevskog („najdublji psiholog"). <em>Dostojevski kritizira nadčovjeka PRIJE nego ga Nietzsche formulira.</em></div></div>
    </div>

    <!-- 3 PORFIRIJEVA SUSRETA — interaktivni timeline -->

    <div class="porf-box">
      <div class="porf-hdr">
        <span class="porf-ttl">🔍 Tri Porfirijeva susreta — mačka i miš</span>
        <span class="porf-sub">klikni za fokus — svaki susret ima drukčiju funkciju u radnji</span>
      </div>
      <div class="porf-tabs" role="tablist">
        <button type="button" class="porf-tab on" role="tab" aria-selected="true" onclick="porfSel(1,this)">
          <span class="porf-tab-num">1</span><span class="porf-tab-ttl">Prvi susret</span>
          <span class="porf-tab-when">II. dio — Razumihinov stan</span>
        </button>
        <button type="button" class="porf-tab" role="tab" aria-selected="false" onclick="porfSel(2,this)">
          <span class="porf-tab-num">2</span><span class="porf-tab-ttl">Drugi susret</span>
          <span class="porf-tab-when">III. dio — policijska postaja</span>
        </button>
        <button type="button" class="porf-tab" role="tab" aria-selected="false" onclick="porfSel(3,this)">
          <span class="porf-tab-num">3</span><span class="porf-tab-ttl">Treći susret</span>
          <span class="porf-tab-when">IV. dio — R.-ov stan</span>
        </button>
      </div>
      <div class="porf-content" id="porf-content" role="tabpanel">
        <!-- Populated by JS -->
      </div>
    </div>
    <script>
      (function initPorfirij(){
        var DATA={
          1:{title:'I. susret — Razumihinov stan (II. dio)',body:'Raskoljnikov po prvi put susreće Porfirija u stanu kod Razumihina. Situacija je naoko <em>slučajna</em> — Porfirij je navodno došao Razumihinu kao prijatelj. <b>Zapravo se već informirao</b> o Raskoljnikovljevom članku „O zločinu". Tijekom običnog razgovora <em>podbada</em> ga s navodno „nevinim" pitanjima o teoriji. R. je oprezan, <b>ali već upadne u dijalog</b> — ne može odoljeti filozofskoj raspravi. Porfirij <em>sluša, smije se, i tiho sprema hvataljku</em>.',quote:'„Ah, vaš je članak toliko zanimljiv, gospodine Raskoljnikov, toliko zanimljiv…"',takeaway:'<b>Funkcija:</b> ekspozicija — Porfirij uspostavlja da zna R.-ovu teoriju. <b>Psihološki pritisak:</b> R. shvaća da njegov tekst <em>više nije privatni</em>. Prvi trag u istrazi.'},
          2:{title:'II. susret — Policijska postaja (III. dio)',body:'Raskoljnikov sam dolazi k Porfirija. <em>Misli da kontrolira situaciju</em> — da će odigrati „obranu". Porfirij postavlja klopku: <b>pretvara se da je nesiguran u svoje zaključke</b>, citira R.-ov članak naglas, provocira ga protivargumentima. R. je <b>bijesan</b>, jer vidi da Porfirij zna. Unutarnji monolog: <em>„Zna! Sve zna! Ali ne može dokazati."</em> Porfirij izvlači temu o <em>zvonu</em> — priča priču o njemu da ga destabilizira. Na kraju se pojavi <b>Mikolka</b> koji „priznaje" ubojstvo — R. je zbunjen.',quote:'„Rečem vam, naš čovjek je mladi, bolestan, pročitao knjigu — pa sad je vjerovao da je Napoleon."',takeaway:'<b>Funkcija:</b> intelektualni dvoboj — Porfirij kao <em>dvojnik R.-ovog razuma</em>. <b>Psihološki pritisak:</b> R. gubi iluziju kontrole. Mikolkino priznanje = <em>red herring</em> koji Porfirij koristi za daljnji pritisak.'},
          3:{title:'III. susret — Raskoljnikovljev stan (IV. dio)',body:'Porfirij <em>dolazi k Raskoljnikovu</em> — obrat. Više nema pretvaranja. <b>Porfirij priznaje: znam da si ti ubojica</b>, ali nemam dovoljno dokaza za osudu. Zatim savjetuje: <em>„Predajte se sami. Dobit ćete lakšu kaznu. Patnja je velika stvar."</em> Nudi <b>psihološki spas</b>, ne pravni. R. je šokiran — Porfirij je <em>suviše ljudski</em>, suviše blizak. Ovaj susret <b>priprema R. za Sonjin poziv na predaju</b> u V. dijelu.',quote:'„Vi ste ubili, Rodion Romanoviču. Ali predajte se — dobit ćete blaže. Ja vam savjetujem. Patnja je velika stvar."',takeaway:'<b>Funkcija:</b> pragmatični očinski savjet — Porfirij kao <em>sekularni savjetnik paralelno Sonji (duhovnom)</em>. <b>Psihološki pritisak:</b> nestao, zamijenjen <em>razumijevanjem</em>. R. je razoružan. Put do predaje otvoren.'}
        };
        function render(n){
          var d=DATA[n];
          if(!d) return;
          var html='<div class="porf-content-ttl">'+d.title+'</div>';
          html+='<div class="porf-content-body">'+d.body+'</div>';
          html+='<div class="porf-content-quote">'+d.quote+'</div>';
          html+='<div class="porf-content-takeaway">'+d.takeaway+'</div>';
          var el=document.getElementById('porf-content');
          if(el) el.innerHTML=html;
        }
        window.porfSel=function(n,btn){
          document.querySelectorAll('.porf-tab').forEach(function(t){
            t.classList.remove('on');
            t.setAttribute('aria-selected','false');
          });
          if(btn){ btn.classList.add('on'); btn.setAttribute('aria-selected','true'); }
          render(n);
          if(typeof track==='function') track('porf_tab',{n:n},'engagement');
        };
        render(1);
      })();
    </script>

    <!-- SEC 04 — Simbolika -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Simbolika — broj 7, križ, žuta boja, Lazar</div><div class="sec-line"></div></div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip go">BROJ 7</span>
        <div class="sc-name">Struktura u sedmicama</div>
        <div class="sc-desc"><em>Broj 7 prati cijeli roman</em>. Raskoljnikov ubija <b>u 7:00h</b>, čeka <b>7 dana</b> na odluku, ide do Alone <b>730 koraka</b>. Sedmica je biblijski broj — <em>dani stvaranja, savršenost</em>. Dostojevski koristi simboliku za <em>kosmičku ironiju</em>: čin razdvajanja (ubojstvo) događa se u biblijski broj cjeline.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip re">ŽUTA BOJA</span>
        <div class="sc-name">Žuta = bolest, grad, prostitucija</div>
        <div class="sc-desc"><em>Žuta je dominantna boja romana</em>. Raskoljnikovljev stan — žute tapete (<b>„sobica kao lijes"</b>). Aloni žuta haljina. Sonja ima <em>„žutu karticu"</em> (registracija prostitutki u carskoj Rusiji). Peterburg u ljetnoj vrućini — žuti prah. <b>Žuto = grad koji truje, truli, iscrpljuje.</b> Suprotnost: Sibir ima <em>bijele noći</em> i čist zrak.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip t">KRIŽ</span>
        <div class="sc-name">Križ kao znak iskupljenja</div>
        <div class="sc-desc">Sonja ima <em>dva križa</em> — vlastiti (ciprisov) i Lizavetin (mjedeni). Kad se Raskoljnikov predaje, <b>Sonja mu daje Lizavetin križ</b> — simbolično: <em>njegova žrtva mora nositi težinu svih njegovih žrtava</em> (Lizaveta je bila nevina). Križ je ujedno <b>kršćanska obveza</b> — prihvaćanje patnje kao puta k uskrsnuću.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip br">USKRSNUĆE LAZARA</span>
        <div class="sc-name">Evanđelje po Ivanu, 11</div>
        <div class="sc-desc">Centralna biblijska scena. Sonja čita Raskoljnikovu <em>ulomak o uskrsnuću Lazara</em> — Lazar je umro, Krist ga zove iz groba. <b>Paralela s Raskoljnikovim</b>: on je „mrtav duhovno", treba mu uskrsnuće. <em>Scena je prekretnica romana</em> — Raskoljnikov spušta obranu, Sonja postaje njegov put.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip pa">SIBIR</span>
        <div class="sc-name">Sibir kao prostor iskupljenja</div>
        <div class="sc-desc">Epilog se odvija u <em>Sibiru</em> — suprotnost Peterburgu. <b>Hladno, bijelo, prostrano</b>. Raskoljnikov u katorgi — ali ne trpi još duhovno. Tek nakon sna o bezumnim bakterijama i susreta sa Sonjom kraj rijeke — <b>duhovno uskrsnuće</b>. Sibir = <em>prostor u kojem se vrijeme zaustavlja i čovjek susreće samog sebe</em>.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip go">PETERBURG</span>
        <div class="sc-name">Grad kao kažnjenik</div>
        <div class="sc-desc">Peterburg u Zločinu i kazni <em>nije pozadina — on je lik</em>. <b>Duševni stisak</b> uskih ulica, vrućina, smrad (Sennaja ploščadj). Dostojevski piše o <em>„najviše apstraktnom gradu na svijetu"</em> — grad koji <b>stvara</b> Raskoljnikovu teoriju, <b>pojačava</b> njegovu paranoju. <em>Peterburg kao ambijent grijeha</em>.</div>
      </div>
    </div>

    <!-- SEC 05 — Žene u romanu -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Žene u Zločinu i kazni — esej primjer (NCVVO 2020)</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">📝 Esejska teza (na osnovu NCVVO primjera)</div>
      <div class="box-key-txt">
        <strong>„Dostojevski u svojemu romanu Zločin i kazna u skladu s realističkom poetikom daje psihološke i socijalne portrete ženskih likova <em>Sonje i Dunje</em> s naglaskom na njihovu plemenitost i žrtvu koju su spremne podnijeti zbog vlastitih obitelji."</strong>
        <br><br>
        Ovo je <em>stvarna teza iz NCVVO vodiča za esej</em> — pokazuje što očekuju na maturi. Teza ima <b>3 dijela</b>: (1) realistička poetika, (2) psihološki + socijalni portret, (3) plemenitost + žrtva zbog obitelji.
      </div>
    </div>

    <div class="prose">
      <p><b>Sonja</b> i <b>Dunja</b> su <em>paralelni ženski likovi</em> — obje žrtvuju <em>svoje tijelo i čast</em> za muške članove obitelji.</p>
      
      <p><b>Sonja</b> — <em>prostitucija zbog obitelji</em>. Katerina (maćeha) je tjera na „žutu karticu" jer nema za kruh. Sonja pristaje <b>zbog pokornosti, dobrote, i bijede</b>. Njezin odnos prema Raskoljnikovu je <em>spiritualan, ne seksualan</em> — čita mu Bibliju. Ona je <b>njegov moralni vodič</b>.</p>
      
      <p><b>Dunja</b> — <em>brak bez ljubavi zbog obitelji</em>. Pristaje na Lužina samo da brat završi studij. Raskoljnikov odbija tu žrtvu — <em>„ne želim da ti budeš moja žrtva."</em> Dunja je <b>ponosnija</b> od Sonje — gađa Svidrigajlova pištoljem kad je ucjenjuje. <em>Aktivnija otpornost</em> nego Sonja, ali jednaka žrtvenost.</p>
      
      <p><b>Povezivanje</b>: <em>Sonja i Dunja su dvije strane iste ideje</em> — žrtva zbog ljubavi prema bližnjima. Za Dostojevskog, to je <b>najviša vrlina</b>. Obje su moralne vertikale — ali Sonja utjelovljuje <em>kršćansku pasivnu žrtvu</em>, Dunja <em>aktivnu moralnost</em>.</p>
    </div>

    <!-- SEC 06 — Kraj i iskupljenje -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">06 · Epilog — Sibirsko iskupljenje</div><div class="sec-line"></div></div>

    <div class="prose">
      <p>Epilog se odvija <b>1,5 godinu nakon predaje</b>. Raskoljnikov u Sibirskoj katorgi — <em>8 godina</em> kazne. Sonja je došla za njim, radi kao krojačica u obližnjem gradu. Prati ga.</p>
      
      <p><b>Ključni trenutak:</b> Raskoljnikov <em>još uvijek odbija</em> priznati zločin kao zločin. Misli: <em>„Nisam pogriješio — pogriješio sam samo što me savjest uhvatila. Jači čovjek bi izdržao."</em> Preziru ga drugi robijaši. On ih ne razumije. <b>Potpuna alienacija.</b></p>
      
      <p><em>Bolest.</em> U groznici — <b>san o bezumnim bakterijama</b>. Sanjа da je svijet zaražen sitnim bićima koja nose „vlastitu istinu" — svi se <b>uvjeravaju da su u pravu, i međusobno ubijaju</b>. <em>Ovo je Dostojevskoveva proročanska kritika nihilizma, kasnije ideoloških totalitarizama 20. st.</em></p>
      
      <p><b>Buđenje.</b> Izlazi iz bolnice. Susreće Sonju kraj Sibirske rijeke. <em>Pada joj pred noge, plače</em>. Prvi put osjeća ljubav umjesto teorije. Sonja osmjehuje, plače. <b>Iskupljenje počinje</b>. Raskoljnikov pokazuje Evanđelje pod jastukom — još nije ga otvorio, ali <em>zna da hoće</em>.</p>
      
      <p>Kraj: <b><em>„Nova priča počinje, priča o postupnom preporodu čovjeka... No to je već druga priča."</em></b> — Dostojevski obećava nastavak koji nikad ne piše. <em>Kraj je otvoren ali simbolično završen</em>.</p>
    </div>

    <!-- Feature callout: bridge to H08 -->
    <div class="cheat-card" style="margin-top:24px">
      <div class="cheat-hdr">
        <div class="cheat-hdr-l">
          <div class="cheat-eye">H08 PREVIEW</div>
          <div class="cheat-ttl">Dostojevski → moderna književnost</div>
        </div>
      </div>
      <div class="cheat-grid">
        <div class="cheat-col cheat-col-wide" style="font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.65">
          <p style="margin:0"><em>Dostojevski je most između realizma i moderne.</em> Psihološki realizam (unutarnji monolog, paranoja, savjest kao protagonist) <b>prethodi stream of consciousness</b> (Joyce), <b>freudovskoj psihoanalizi</b> (Freud ga čita), <b>egzistencijalizmu</b> (Camus, Sartre), <b>Kafkinoj paranoji</b>.</p>
          <p style="margin:10px 0 0"><em>Kad čitaš Kafkin Preobražaj (obvezatno 2026),</em> pitaj se: <b>Gregor Samsa i Raskoljnikov — što imaju zajedničko?</b> (Alijenacija, neprepoznavanje sebe, transformacija iznutra, svijet koji ih više ne razumije.)</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="nav-row">
      <span class="nb" onclick="sw(0)">← 🏛 Teorija</span>
      <span class="nb primary" onclick="sw(2)">✍ Esej alat →</span>
    </div>
  </div>

  <!-- ════════════════════════
       TAB 2 · ESEJ ALAT
       ════════════════════════ -->
  <div class="layer" id="l2" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">7 teza</span>
      <span class="pill p-go">model uvoda</span>
      <span class="pill p-r">5 grešaka</span>
      <span class="pill p-t">10-checklist</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">✍ Kako se piše esej o Zločinu i kazni</div>
      <div class="box-int-txt">
        Esej na maturi = <b>min. 440 riječi</b>, <b>uvod-razrada-zaključak</b>, <em>jasna središnja tvrdnja</em>, barem <b>1 citat</b>, barem <b>1 književnoteorijski pojam</b>, povezivanje s drugim djelima. Ovdje imaš <b>7 probranih teza</b> + model uvoda + 5 najčešćih grešaka + 10-točka checklist.
      </div>
    </div>

    <!-- SEC 01 — 7 teza -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · 7 teza za esej</div><div class="sec-line"></div></div>

    <div class="sc-grid">
      <div class="sc">
        <span class="sc-ico hchip br">TEZA 1</span>
        <div class="sc-name">Raskoljnikov kao tragičan junak</div>
        <div class="sc-desc">Dostojevski prikazuje <em>Raskoljnikova kao tragičnog junaka</em> — njegova intelektualna gordost (teorija nadčovjeka) vodi ga do ubojstva, a zatim do <b>psihološkog raspada</b>. Kao i antički tragični junak (Oidip, Hamlet), pada <b>jer je velik</b> — njegova tragedija je filozofska, ne samo moralna. <em>Citati:</em> „Jesam li vaš ili Napoleon?", „Želio sam biti Napoleon — to je sve."</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip go">TEZA 2</span>
        <div class="sc-name">Sonja kao moralna vertikala</div>
        <div class="sc-desc"><em>Sonja utjelovljuje kršćansku ljubav, žrtvu i iskupljenje.</em> Iako je <b>prostitutka</b> po društvenom statusu, ona je <em>duhovno najčistiji lik</em> u romanu. Čita Raskoljnikovu evanđelje, savjetuje mu predaju, ide s njim u Sibir. <b>Paralela s Tatjanom iz Onjegina</b> (H06 — Puškin) — obje žene žrtvuju sebe za ljubav, obje su moralne vertikale svojih romana. <em>Citat:</em> „Pati — to je put."</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip t">TEZA 3</span>
        <div class="sc-name">Kritika nihilizma i teorije nadčovjeka</div>
        <div class="sc-desc">Zločin i kazna je <b>Dostojevski odgovor na ruski nihilizam 1860-ih</b>. Pokazuje: <em>odbacivanje moralnih normi = psihološki raspad</em>. Raskoljnikov teoretski dokazuje da smije ubiti — ali <b>savjest ga zaustavlja</b>. <em>Teorija ne funkcionira u praksi.</em> Anticipira Nietzscheovog Übermensch-a (1883.), kritizira ga 17 godina prije.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip re">TEZA 4</span>
        <div class="sc-name">Psihološki realizam — inovacija</div>
        <div class="sc-desc">Dostojevski transformira realizam. Gdje Balzac i Flaubert opisuju <em>društvo izvana</em>, Dostojevski ulazi <b>iznutra</b>. Paranoja, grižnja, samoosuda — Raskoljnikov je <em>roman o glavi</em> koliko i o ubojstvu. <b>Polifonija</b> (Bahtin): svaki lik ima nezavisan glas. <em>Prethodnica stream of consciousness i psihoanalize.</em></div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip pa">TEZA 5</span>
        <div class="sc-name">Peterburg kao lik</div>
        <div class="sc-desc">Grad u romanu <em>nije pozadina — on je aktivan</em>. Uske ulice, vrućina, smrad, bijeda, <b>žute tapete</b>. Peterburg <em>generira</em> Raskoljnikovu teoriju — u tom gradu ideja ubojstva postaje logička. <b>Gradski realizam</b> (urbani roman) kao nova forma. Suprotnost: Sibir — prostor bijele čistote i duhovnog uskrsnuća.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip br">TEZA 6</span>
        <div class="sc-name">Sonja i Dunja — žensko žrtvovanje</div>
        <div class="sc-desc">Obje žrtvuju sebe za obitelj: <b>Sonja</b> prostitucijom (zbog Katerine i djece), <b>Dunja</b> brakom s Lužinom (zbog brata). <em>Dostojevski kritizira društvo</em> u kojemu žene moraju prodavati tijelo ili čast za opstanak obitelji. <b>Tema NCVVO primjera eseja 2020.</b> — verbatim preuzeta s ispita.</div>
      </div>

      <div class="sc">
        <span class="sc-ico hchip go">TEZA 7</span>
        <div class="sc-name">Iskupljenje kroz patnju</div>
        <div class="sc-desc">Središnja Dostojevska ideja: <em>„Tko ne trpi, ne može uskrsnuti."</em> Raskoljnikov mora <b>kroz Sibir</b> (patnju) da bi se duhovno rodio. Sonja mu pokazuje put. <b>Uskrsnuće Lazara</b> kao biblijska paralela. <em>Kraj romana</em> nije happy end — nego obećanje novog čovjeka. Dostojevski kao <b>pravoslavni pisac</b>.</div>
      </div>
    </div>

    <!-- SEC 02 — Model uvoda -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Model uvoda eseja</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">📝 Primjer uvoda (za Tezu 2 — Sonja kao moralna vertikala)</div>
      <div class="box-key-txt">
        <em>„Fjodor Mihajlovič Dostojevski (1821.–1881.), ruski realist i preteča moderne psihološke proze, u svom najpoznatijem djelu <b>Zločin i kazna</b> (1866.) daje ne samo sliku prestupničke psihe nego i jasnu moralnu vertikalu kroz lik <b>Sonje Semjonovne Marmeladove</b>. Iako po društvenom statusu prostitutka, Sonja je duhovno najčistiji lik romana — utjelovljenje kršćanske ljubavi, žrtve i iskupljenja. Svojim čitanjem evanđelja i pozivom na patnju Sonja postaje Raskoljnikovu duhovni vodič koji ga vodi od intelektualne gordosti prema iskupljenju. U ovom eseju pokazat ću zašto je Sonja moralna vertikala romana i kako Dostojevski, u skladu s realističkom poetikom, gradi njen psihološki i socijalni portret."</em>
      </div>
    </div>

    <!-- SEC 03 — 5 grešaka -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · 5 najčešćih grešaka u eseju</div><div class="sec-line"></div></div>

    <div class="con">
      <div class="cr"><div class="ck br">GREŠKA 1</div><div class="cv"><b>Svoditi Raskoljnikova na „običnog kriminalca".</b> Raskoljnikov nije ubio <em>radi novca</em> (novac ni ne iskoristi). Ubio je <em>radi teorije</em> — da potvrdi sebi da je nadčovjek. To je <b>intelektualno ubojstvo</b>. Pisati o „pohlepi" = odmah crvena zastava za ocjenjivača.</div></div>
      <div class="cr"><div class="ck go">GREŠKA 2</div><div class="cv"><b>Pisati da je Sonja „grešnica" ili „moralno problematična".</b> <em>Dostojevski eksplicitno obrće</em> — Sonja je prostitutka <b>iz ljubavi prema obitelji</b>, ne iz izbora. <em>Moralna je vertikala</em>, ne mrlja. Svođenje Sonje na prostituciju = neshvaćanje djela.</div></div>
      <div class="cr"><div class="ck pa">GREŠKA 3</div><div class="cv"><b>Tvrditi da je kraj „happy end".</b> Epilog nije sretan kraj — Raskoljnikov tek počinje <em>postupno</em> se probuđivati. <b>Otvoreni kraj</b>. <em>„Nova priča počinje…"</em>. Dostojevski obećava nastavak kojeg nikad ne piše. <em>Iskupljenje je proces, ne događaj.</em></div></div>
      <div class="cr"><div class="ck t">GREŠKA 4</div><div class="cv"><b>Brkati Raskoljnikova i Svidrigajlova.</b> Obojica su <em>„nadčovjeci" po logici</em>, ali <b>različiti ishodi</b>. Raskoljnikov ima <em>savjest</em> — pati, priznaje, spašen je. Svidrigajlov je <em>potpuni cinik</em> — ne pati, ubija se. <b>Svidrigajlov je dvojnik — ono što bi Raskoljnikov bio bez Sonje.</b></div></div>
      <div class="cr"><div class="ck re">GREŠKA 5</div><div class="cv"><b>Ignorirati Porfirijevu ulogu.</b> Porfirij Petrovič nije samo <em>sporedni istražitelj</em> — on je <b>intelektualni dvojnik Raskoljnikovu</b>. Vodi ga kroz 3 psihološka susreta. Savjetuje mu predaju <em>prije</em> nego otkriju dokaze. Porfirij = <b>razum koji zna granicu zakona i duše</b>.</div></div>
    </div>

    <!-- SEC 3.5 — Esej word counter -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · Brojač riječi i znakova</div><div class="sec-line"></div></div>


    <div class="wc-box">
      <div class="wc-hdr">
        <span class="wc-ttl">📝 Vježbaj esej — brojač</span>
        <span class="wc-sub">Piši esej i prati minimum 440 riječi (pravilo NCVVO)</span>
      </div>
      <textarea class="wc-textarea" id="wc-input" placeholder="Ovdje piši svoj esej o Zločinu i kazni. Cilj: minimum 440 riječi, jasna središnja tvrdnja, 3 odlomka, barem 1 citat, barem 1 književnoteorijski pojam…" aria-label="Polje za pisanje eseja"></textarea>
      <div class="wc-stats">
        <div class="wc-stat" id="wc-stat-words"><div class="wc-stat-num" id="wc-words">0</div><div class="wc-stat-lbl">riječi</div></div>
        <div class="wc-stat"><div class="wc-stat-num" id="wc-chars">0</div><div class="wc-stat-lbl">znakova</div></div>
        <div class="wc-stat"><div class="wc-stat-num" id="wc-sentences">0</div><div class="wc-stat-lbl">rečenica</div></div>
        <div class="wc-stat"><div class="wc-stat-num" id="wc-paragraphs">0</div><div class="wc-stat-lbl">odlomaka</div></div>
      </div>
      <div class="wc-progress" id="wc-progress">
        <div class="wc-progress-bar-wrap"><div class="wc-progress-bar" id="wc-progress-bar"></div></div>
        <div class="wc-progress-lbl" id="wc-progress-lbl">0 / 440 min</div>
      </div>
      <div class="wc-actions">
        <button type="button" class="wc-btn" onclick="wcClear()">🗑 Obriši</button>
        <button type="button" class="wc-btn" onclick="wcCopy()" id="wc-copy-btn">📋 Kopiraj</button>
        <button type="button" class="wc-btn" onclick="wcSave()">💾 Spremi lokalno</button>
      </div>
      <div class="wc-hint">
        <b>Minimum 440 riječi</b> — ispod toga esej se NE vrednuje. Preporučeno: <em>450–600 riječi</em>. Napisani esej se automatski sprema lokalno u pregledniku — možeš se vratiti i nastaviti.
      </div>
    </div>

    <script>
      (function initWordCounter(){
        var input=document.getElementById('wc-input');
        if(!input) return;
        var MIN_WORDS=440;
        
        // Load saved draft
        try {
          var saved=localStorage.getItem('mt.hrv.h07.essay_draft');
          if(saved){ input.value=saved; }
        } catch(e){}
        
        function count(){
          var text=input.value;
          var words=text.trim()?text.trim().split(/\\s+/).length:0;
          var chars=text.length;
          var sentences=(text.match(/[.!?]+\\s*(?=[A-ZČĆŠŽĐ]|$)/g)||[]).length;
          var paragraphs=text.split(/\\n\\s*\\n/).filter(function(p){return p.trim()}).length;
          
          document.getElementById('wc-words').textContent=words;
          document.getElementById('wc-chars').textContent=chars;
          document.getElementById('wc-sentences').textContent=sentences;
          document.getElementById('wc-paragraphs').textContent=paragraphs;
          
          var pct=Math.min(100,(words/MIN_WORDS)*100);
          var bar=document.getElementById('wc-progress-bar');
          var lbl=document.getElementById('wc-progress-lbl');
          var progress=document.getElementById('wc-progress');
          var statWords=document.getElementById('wc-stat-words');
          
          if(bar) bar.style.width=pct+'%';
          
          if(words>=MIN_WORDS){
            if(lbl) lbl.textContent='✓ '+words+' / '+MIN_WORDS+' min';
            if(progress) progress.classList.add('pass');
            if(statWords){ statWords.classList.remove('critical'); statWords.classList.add('ok'); }
          } else if(words===0){
            if(lbl) lbl.textContent='0 / '+MIN_WORDS+' min';
            if(progress) progress.classList.remove('pass');
            if(statWords){ statWords.classList.remove('critical'); statWords.classList.remove('ok'); }
          } else {
            if(lbl) lbl.textContent=words+' / '+MIN_WORDS+' min (-'+(MIN_WORDS-words)+')';
            if(progress) progress.classList.remove('pass');
            if(statWords){ statWords.classList.add('critical'); statWords.classList.remove('ok'); }
          }
        }
        
        var debounce;
        input.addEventListener('input',function(){
          clearTimeout(debounce);
          debounce=setTimeout(count,80);
          // Auto-save draft
          try { localStorage.setItem('mt.hrv.h07.essay_draft',input.value); } catch(e){}
        });
        count();
        
        // Expose actions
        window.wcClear=function(){
          if(!confirm('Obrisati cijeli esej?')) return;
          input.value='';
          try { localStorage.removeItem('mt.hrv.h07.essay_draft'); } catch(e){}
          count();
          input.focus();
          if(typeof track==='function') track('wc_clear',{},'engagement');
        };
        window.wcCopy=function(){
          if(!input.value.trim()) return;
          if(navigator.clipboard && navigator.clipboard.writeText){
            navigator.clipboard.writeText(input.value).then(function(){
              var btn=document.getElementById('wc-copy-btn');
              if(btn){ var orig=btn.innerHTML; btn.innerHTML='✓ Kopirano'; setTimeout(function(){btn.innerHTML=orig;},1500); }
            });
          } else {
            input.select(); document.execCommand('copy');
          }
          if(typeof track==='function') track('wc_copy',{words:input.value.trim().split(/\\s+/).length},'engagement');
        };
        window.wcSave=function(){
          try {
            localStorage.setItem('mt.hrv.h07.essay_draft',input.value);
            var btn=event.currentTarget;
            if(btn){ var orig=btn.innerHTML; btn.innerHTML='✓ Spremljeno'; setTimeout(function(){btn.innerHTML=orig;},1500); }
          } catch(e){}
          if(typeof track==='function') track('wc_save',{words:input.value.trim().split(/\\s+/).length},'engagement');
        };
      })();
    </script>

    <!-- SEC 05 — Checklist -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">05 · Checklist prije predaje eseja</div><div class="sec-line"></div></div>

    <div class="box-key">
      <div class="box-key-lbl">✅ 10 provjera prije predaje</div>
      <div class="box-key-txt">
        <ol style="margin:0;padding-left:20px;line-height:1.8">
          <li><b>Minimum 440 riječi.</b> Ako je kraći, esej se NE vrednuje.</li>
          <li><b>Uvod-razrada-zaključak.</b> Središnja tvrdnja u uvodu, 2–3 argumenta u razradi, zaključak koji vraća na tezu.</li>
          <li><b>Jasna središnja tvrdnja.</b> 1 rečenica u uvodu — ne više, ne manje.</li>
          <li><b>Kontekst autora i djela.</b> Dostojevski (1821.–1881.), <em>Zločin i kazna</em> (1866.), psihološki realizam, 6 dijelova + epilog.</li>
          <li><b>Bar 1 citat.</b> „Pati — to je put." / „Jesam li vaš ili Napoleon?" / „Nova priča počinje…"</li>
          <li><b>Bar 1 književnoteorijski pojam.</b> <em>Psihološki realizam / polifonija / dvojnik / ispovijed / unutarnji monolog / nihilizam / suvišan čovjek / roman ideja</em>.</li>
          <li><b>Povezivanje s drugim djelom.</b> Onjegin (H06, Tatjana → Sonja kao moralna vertikala), Werther (H05, suvišan čovjek), Hamlet (H03, unutarnji monolog), Kafka Preobražaj (H08 ako dolazi, alijenacija).</li>
          <li><b>Hrvatski pravopis.</b> <em>Navodnici „…"</em>, ne ""\\". Dostojevski, ne Dostoyevsky. Raskoljnikov, ne Raskolnikov.</li>
          <li><b>Odlomci.</b> Minimum 3 odlomka (uvod, razrada, zaključak). Preporučno 4–5.</li>
          <li><b>Gramatika.</b> Kratki pregled: kongruencija, pravopis, interpunkcija.</li>
        </ol>
      </div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(1)">← 📖 Zločin i kazna</span>
      <span class="nb primary" onclick="sw(3)">💬 Citatnik →</span>
    </div>
  </div>

  <!-- ════════════════════════
       TAB 3 · CITATNIK
       ════════════════════════ -->
  <div class="layer" id="l3" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">arsenal</span>
      <span class="pill p-go">35 citata</span>
      <span class="pill p-r">napamet</span>
      <span class="pill p-t">tez + razina + random</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💬 Citati — arsenal za esej o Dostojevskom</div>
      <div class="box-int-txt">
        <em>Citat u pravom trenutku vrijedi 1–2 boda</em> u argumentaciji eseja. <b>35 probranih citata</b> iz <em>Zločina i kazne</em>: Raskoljnikov (15), Sonja (6), Porfirij (3), Svidrigajlov (2), Dunja (2), Marmeladov (2), Katerina (1), plus <b>4 meta-citata</b> (Balzac, Bahtin, Nietzsche, Camus). <strong>Filtriraj po tezi</strong> (T1–T7), <strong>po razini</strong> (osnovno/napredno), ili pokreni <em>🎲 Random</em>. <b>8 must-know citata</b> označeno je <em>★ Napamet</em>.
      </div>
    </div>

    <div class="cit-filters">
      <button class="cit-fbtn active" data-filter="all" onclick="citFilter('all', this)">Svi (35)</button>
      <button class="cit-fbtn fspec" data-filter="must" onclick="citFilter('must', this)">★ Napamet (8)</button>
      <button class="cit-fbtn" data-filter="raskolj" onclick="citFilter('raskolj', this)">🔴 Raskoljnikov (15)</button>
      <button class="cit-fbtn" data-filter="sonja" onclick="citFilter('sonja', this)">✨ Sonja (6)</button>
      <button class="cit-fbtn" data-filter="porfirije" onclick="citFilter('porfirije', this)">🔍 Porfirij (3)</button>
      <button class="cit-fbtn" data-filter="svidri" onclick="citFilter('svidri', this)">🌑 Svidrigajlov (2)</button>
      <button class="cit-fbtn" data-filter="dunja" onclick="citFilter('dunja', this)">💚 Dunja (2)</button>
      <button class="cit-fbtn" data-filter="marm" onclick="citFilter('marm', this)">🍶 Marmeladov (2)</button>
      <button class="cit-fbtn" data-filter="katerina" onclick="citFilter('katerina', this)">🕯 Katerina (1)</button>
      <button class="cit-fbtn" data-filter="kontekst" onclick="citFilter('kontekst', this)">💭 Kontekst (4)</button>
    </div>

    

    <div class="cit-subfilters" role="group" aria-label="Dodatni filteri">
      <span class="cit-sublbl">Tez:</span>
      <button type="button" class="cit-diffbtn active" data-tez="all" onclick="citFilterByTez('all', this)">Sve</button>
      <button type="button" class="cit-diffbtn" data-tez="1" onclick="citFilterByTez(1, this)">T1</button>
      <button type="button" class="cit-diffbtn" data-tez="2" onclick="citFilterByTez(2, this)">T2</button>
      <button type="button" class="cit-diffbtn" data-tez="3" onclick="citFilterByTez(3, this)">T3</button>
      <button type="button" class="cit-diffbtn" data-tez="4" onclick="citFilterByTez(4, this)">T4</button>
      <button type="button" class="cit-diffbtn" data-tez="5" onclick="citFilterByTez(5, this)">T5</button>
      <button type="button" class="cit-diffbtn" data-tez="6" onclick="citFilterByTez(6, this)">T6</button>
      <button type="button" class="cit-diffbtn" data-tez="7" onclick="citFilterByTez(7, this)">T7</button>
      <span class="cit-sublbl" style="margin-left:12px">Razina:</span>
      <button type="button" class="cit-diffbtn active" data-diff="all" onclick="citFilterByDiff('all', this)">Sve</button>
      <button type="button" class="cit-diffbtn" data-diff="basic" onclick="citFilterByDiff('basic', this)">Osnovno</button>
      <button type="button" class="cit-diffbtn" data-diff="advanced" onclick="citFilterByDiff('advanced', this)">Napredno</button>
      <button type="button" class="cit-diffbtn" id="cit-favonly-btn" onclick="citToggleFavOnly()" aria-label="Prikaži samo favorite" title="Prikaži samo favorite">☆ Favoriti (<span id="cit-fav-count">0</span>)</button>
      <button type="button" class="cit-random" onclick="citRandom()" aria-label="Slučajan citat">🎲 Random</button>
    </div>

    <div class="cit-count" aria-live="polite">
      <span><b id="cit-visible">35</b> od <span id="cit-total">35</span> citata prikazano</span>
      <button type="button" class="cit-count-clear" id="cit-count-clear" onclick="citClearFilters()">Resetiraj filtere</button>
    </div>

    <div class="cit-empty" id="cit-empty">
      <b>Nema rezultata</b>Niti jedan citat ne zadovoljava trenutne filtere. Probaj drugu kombinaciju ili resetiraj filtere.
    </div>

    
    <div class="cit-search-row" style="margin:14px 0 16px;display:flex;gap:8px;align-items:center">
      <label for="cit-search" class="sr-only" style="position:absolute;left:-9999px">Pretraži citate</label>
      <span style="font-size:18px;color:var(--gold,#e9b446)">🔍</span>
      <input type="search" id="cit-search" class="cit-search" placeholder="Pretraži citate (npr. Dostojevski, Raskoljnikov, Sonja, zločin)…" aria-label="Pretraži citate" autocomplete="off"
        style="flex:1;padding:10px 14px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:10px;color:var(--t1,#f4ede5);font-family:var(--mono,monospace);font-size:13px"
        oninput="citSearch(this.value)">
      <button type="button" class="cit-clear" onclick="document.getElementById('cit-search').value='';citSearch('')" aria-label="Očisti pretragu" title="Očisti"
        style="padding:8px 12px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);cursor:pointer;font-size:14px">✕</button>
    </div>
<div class="cit-grid">
      <!-- RASKOLJNIKOV -->
      <div class="cit-card must-know" data-cat="raskolj" data-cit-id="h07c01" data-diff="basic" data-tez="1,3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-must">Napamet</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, I dio — Raskoljnikovljeva teorija</span>
        </div>
        <div class="cit-txt">„Običan čovjek je dužan biti poslušan — nema prava prekršiti zakon. A neobičan čovjek ima pravo… pravo prolaziti preko leša u ime svoje ideje."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(1, this)">T1</button><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <b>temeljni citat za Tezu 1 i 3</b> — teorija nadčovjeka. Raskoljnikov u članku „O zločinu" dijeli ljude na obične i neobične. <em>Anticipira Nietzscheovog Übermensch-a.</em> Neizostavan za esej o teoriji.</div>
      </div>

      <div class="cit-card must-know" data-cat="raskolj" data-cit-id="h07c02" data-diff="basic" data-tez="1,3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-must">Napamet</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, III dio — Porfirijev drugi susret</span>
        </div>
        <div class="cit-txt">„Jesam li vaš ili Napoleon?"</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(1, this)">T1</button><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <b>formula Raskoljnikovljevog identitetskog eksperimenta</b>. Pita sam sebe. <em>Definirajući citat</em> — ubojstvo je bio test. Najpoznatiji citat iz djela. Za Tezu 1 i 3.</div>
      </div>

      <div class="cit-card must-know" data-cat="raskolj" data-cit-id="h07c03" data-diff="basic" data-tez="1">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-must">Napamet</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, V dio — priznanje Sonji</span>
        </div>
        <div class="cit-txt">„Želio sam biti Napoleon — to je sve. Nisam ubio zbog novca. Htio sam saznati mogu li se usuditi."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(1, this)">T1</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Raskoljnikov <em>priznaje</em> Sonji pravi motiv. Nije novac, nije pomoć obitelji — <b>samodokazivanje</b>. Centralni citat za Tezu 1 (tragični junak) — trenutak samosvijesti. Must-know.</div>
      </div>

      <div class="cit-card must-know" data-cat="raskolj" data-cit-id="h07c04" data-diff="basic" data-tez="4">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-must">Napamet</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, I dio — nakon ubojstva</span>
        </div>
        <div class="cit-txt">„Jesam li ubio staricu? Sebe sam ubio, a ne staricu."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(4, this)">T4</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Raskoljnikov odmah nakon ubojstva. <em>Psihološki centralni</em> — zločin nije samo protiv drugog, nego protiv sebe. <b>Dostojevski suština psihološkog realizma</b>: rana je iznutra. Za Tezu 4.</div>
      </div>

      <div class="cit-card must-know" data-cat="raskolj" data-cit-id="h07c09" data-diff="basic" data-tez="7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-must">Napamet</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, epilog — posljednja rečenica</span>
        </div>
        <div class="cit-txt">„Ali tu počinje nova povijest, povijest o postupnom preporodu čovjeka… No to je već druga priča."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(7, this)">T7</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <b>zadnja rečenica romana</b>. Za Tezu 7 (iskupljenje). Dostojevski ne piše nastavak — kraj je <em>obećanje, a ne zaključak</em>. Otvoren kraj = put, ne cilj. Must-know za svaki esej.</div>
      </div>

      <div class="cit-card" data-cat="raskolj" data-cit-id="h07c05" data-diff="advanced" data-tez="1,3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, VI dio — prije predaje</span>
        </div>
        <div class="cit-txt">„Morao sam saznati, i saznati hitno, jesam li vaš kao svi ostali, ili sam čovjek."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(1, this)">T1</button><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button></div>
        <div class="cit-use"><b>Kada koristiti</b> nakon Sonjine intervencije. <em>„Vaš"</em> = kao drugi obični ljudi. <em>„Čovjek"</em> = kao nadčovjek. Ironija: Raskoljnikov misli da je slabost biti „obični", ali Dostojevski pokazuje da je <b>to baš pravi humanitet</b>.</div>
      </div>

      <div class="cit-card" data-cat="raskolj" data-cit-id="h07c06" data-diff="advanced" data-tez="4,5">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, I dio — Raskoljnikovljev stan</span>
        </div>
        <div class="cit-txt">„Njegova je sobica bila tako mala da je ličila na lijes."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(4, this)">T4</button><button type="button" class="cit-tez" onclick="citFilterByTez(5, this)">T5</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <em>ambijent kao lik</em>. Za Tezu 5 (Peterburg kao lik). Dostojevski opisuje stan <b>žutim tapetama</b>, veličina lijesa — <em>prostor u kojem se misao o smrti rađa</em>. Realistički detalj s simboličkim učinkom.</div>
      </div>

      <div class="cit-card" data-cat="raskolj" data-cit-id="h07c07" data-diff="advanced" data-tez="4">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, II dio — paranoja</span>
        </div>
        <div class="cit-txt">„Ako čovjek može izdržati sve, dogodila mu se najgora stvar."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(4, this)">T4</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Raskoljnikov o svojoj <em>izolaciji</em> nakon zločina. <b>Postubilačka paranoja</b> — centralna tema psihološkog realizma. Za Tezu 4.</div>
      </div>

      <div class="cit-card" data-cat="raskolj" data-cit-id="h07c08" data-diff="advanced" data-tez="3,7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, epilog — san o bakterijama</span>
        </div>
        <div class="cit-txt">„Ljudi su se međusobno pobili u nekoj besmislenoj mržnji. Svatko je mislio da samo on zna istinu."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button><button type="button" class="cit-tez" onclick="citFilterByTez(7, this)">T7</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Raskoljnikovljev proročanski san u Sibiru. <em>Dostojevski predviđa ideološki fanatizam 20. st.</em> (totalitarizmi). Za Tezu 3 (kritika nihilizma) i Tezu 7 (iskupljenje kroz patnju).</div>
      </div>

      <div class="cit-card" data-cat="raskolj" data-cit-id="h07c10" data-diff="advanced" data-tez="3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, III dio — drugi susret s Porfirijem</span>
        </div>
        <div class="cit-txt">„Ali pravi nadljudi — oni bi rekli: ubij! I ubili bi bez grižnje."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Raskoljnikov objašnjava teoriju Porfiriju. <em>Ironija</em>: on sam NE MOŽE ubiti bez grižnje — to je dokaz da NIJE nadčovjek. Porfirij to odmah vidi. Za Tezu 3.</div>
      </div>

      <div class="cit-card" data-cat="raskolj" data-cit-id="h07c11" data-diff="advanced" data-tez="1">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, IV dio — Raskoljnikov Sonji</span>
        </div>
        <div class="cit-txt">„Nisam ubio da pomognem majci — to je laž. Nisam ubio zbog novca — to je druga laž. Ubio sam za sebe, za sebe jedinog."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(1, this)">T1</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Raskoljnikovljevo <em>razotkrivanje svih samoilujija</em>. <b>Trenutak istine</b>. Citat pokazuje progresiju psihologije: od utilitarnog argumenta (pomoći siromasima) do intelektualnog (test) do golog egoizma. Teza 1.</div>
      </div>

      <div class="cit-card" data-cat="raskolj" data-cit-id="h07c12" data-diff="advanced" data-tez="7,2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, epilog — Sibir</span>
        </div>
        <div class="cit-txt">„Pala mu je pred noge, plakao je i grlio je koljena. Prvog trenutka pomislila je da je lud od radosti."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(7, this)">T7</button><button type="button" class="cit-tez" onclick="citFilterByTez(2, this)">T2</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <em>trenutak buđenja</em>. Raskoljnikov nakon sna — prvi put osjeća ljubav umjesto teorije. <b>Početak iskupljenja</b>. Za Tezu 7. Sonjina reakcija — suzdržana radost — pokazuje da je ona <em>strpljivo čekala ovaj trenutak</em>.</div>
      </div>

      <div class="cit-card" data-cat="raskolj" data-cit-id="h07c33" data-diff="advanced" data-tez="2,7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, IV dio — Raskoljnikov Sonji</span>
        </div>
        <div class="cit-txt">„Slušaj, Sonja, ja nisam pred tobom pao, pred cijelom ljudskom patnjom sam pao."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(2, this)">T2</button><button type="button" class="cit-tez" onclick="citFilterByTez(7, this)">T7</button></div>
        <div class="cit-use"><b>Kada koristiti</b> prvi trenutak intimnosti R. i Sonje. <em>Sonja postaje simbol univerzalnog ljudskog trpljenja</em>. Za Tezu 2 i 7. Jedan od najljepših citata u romanu.</div>
      </div>

      <div class="cit-card" data-cat="raskolj" data-cit-id="h07c34" data-diff="advanced" data-tez="1,3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, I dio — misao o lihvarici</span>
        </div>
        <div class="cit-txt">„Zašto bi trebala živjeti ova smrdljiva starica? Kad bi umrla, stotine bi mladih živjele normalno."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(1, this)">T1</button><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <em>utilitarni argument</em>. Raskoljnikov racionalizira zločin. Dostojevski pokazuje kako <b>hladna logika</b> može opravdati ubojstvo — ali <em>psiha se buni</em>. Za Tezu 1 i 3.</div>
      </div>

      <div class="cit-card" data-cat="raskolj" data-cit-id="h07c35" data-diff="advanced" data-tez="4">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">RASKOLJNIKOV</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, II dio — paranoja</span>
        </div>
        <div class="cit-txt">„Bio sam svjestan svega — čak i svijetle točke na stropu — ali se uopće nisam mogao pomaknuti."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(4, this)">T4</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <em>psihosomatska paraliza</em> nakon zločina. <b>Vrh psihološkog realizma</b> — tijelo reagira na moralnu krivnju. Anticipira psihoanalizu. Za Tezu 4.</div>
      </div>


      <!-- SONJA -->
      <div class="cit-card must-know" data-cat="sonja" data-cit-id="h07c13" data-diff="basic" data-tez="2,7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">SONJA</span>
          <span class="cit-must">Napamet</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, V dio — Sonjin savjet</span>
        </div>
        <div class="cit-txt">„Idi smjesta, sad odmah. Stani na raskršću, pokloni se narodu do zemlje i poljubi zemlju. Prvu stvar, poljubi zemlju. Jer si i pred njom sagriješio."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(2, this)">T2</button><button type="button" class="cit-tez" onclick="citFilterByTez(7, this)">T7</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Sonjin <em>poziv na javnu ispovijed</em>. Za Tezu 2. <b>Zemlja kao majčinska, sveta</b> — ruski pravoslavni simbol. Sonja ga usmjerava na <em>tradicionalnu rusku pokoru</em>. Citat posebno voljen od ocjenjivača.</div>
      </div>

      <div class="cit-card must-know" data-cat="sonja" data-cit-id="h07c18" data-diff="basic" data-tez="2,6,7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">SONJA</span>
          <span class="cit-must">Napamet</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, VI dio — Sonja Raskoljnikovu</span>
        </div>
        <div class="cit-txt">„Otići ćemo zajedno u patnju."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(2, this)">T2</button><button type="button" class="cit-tez" onclick="citFilterByTez(6, this)">T6</button><button type="button" class="cit-tez" onclick="citFilterByTez(7, this)">T7</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <b>formula Sonjine žrtve</b>. Obećanje da ide s njim u Sibir. Za Tezu 2, 6, 7. <em>„Zajedno u patnju"</em> je osnovna dostojevska ideja iskupljenja. Paralela s Raskoljnikovljevom rečenicom „Sebe sam ubio".</div>
      </div>

      <div class="cit-card" data-cat="sonja" data-cit-id="h07c14" data-diff="basic" data-tez="2,7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">SONJA</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, IV dio — čitanje Lazara</span>
        </div>
        <div class="cit-txt">„I vikne glasom velikim: Lazare, izađi van. I izađe mrtvac povezan po rukama i nogama pogrebnim zavojima."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(2, this)">T2</button><button type="button" class="cit-tez" onclick="citFilterByTez(7, this)">T7</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <em>uskrsnuće Lazara</em> (Ivanovo evanđelje, 11). Sonja čita Raskoljnikovu. <b>Paralela</b>: Raskoljnikov je duhovni mrtvac, Sonja ga „poziva". Prekretnica romana. Za Tezu 2 i 7.</div>
      </div>

      <div class="cit-card" data-cat="sonja" data-cit-id="h07c15" data-diff="basic" data-tez="2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">SONJA</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, IV dio — Sonja odgovara Raskoljnikovu</span>
        </div>
        <div class="cit-txt">„A što bih bila da nije bilo Boga?"</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(2, this)">T2</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Raskoljnikov pita Sonju kako preživljava. Ona odgovara jednostavno: Bog je sve. <em>Dostojevski kroz Sonju potvrđuje vjeru kao jedini odgovor na bijedu</em>. Za Tezu 2 (moralna vertikala) i pravoslavne vrijednosti.</div>
      </div>

      <div class="cit-card" data-cat="sonja" data-cit-id="h07c16" data-diff="advanced" data-tez="2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">SONJA</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, V dio — Sonja Raskoljnikovu</span>
        </div>
        <div class="cit-txt">„Ti si samoga sebe ubio. Ti si nevinoga čovjeka iznutra ubio. Idi priznati."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(2, this)">T2</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Sonja <em>prvi put formalno osuđuje</em> Raskoljnikova, ali <em>sa ljubavlju</em>. Vidi ga kao bolesnog, ne zločinca. <b>Njena moralna jasnost</b>. Za Tezu 2 (vertikala) i Tezu 6 (Sonja kao kritika društva kroz svoju dobrotu).</div>
      </div>

      <div class="cit-card" data-cat="sonja" data-cit-id="h07c17" data-diff="basic" data-tez="2">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">SONJA</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, V dio — Sonja prihvaća</span>
        </div>
        <div class="cit-txt">„Ne, ne, nema nesretnije osobe na svijetu od tebe!"</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(2, this)">T2</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Sonjin prvi reaktion na Raskoljnikovljevo priznanje. <em>Ne osuda nego samilost</em>. <b>Dostojevski kroz Sonju pokazuje ideal kršćanske ljubavi</b> — suditi ali ne prezirati. Za Tezu 2.</div>
      </div>


      <!-- PORFIRIJ -->
      <div class="cit-card" data-cat="porfirije" data-cit-id="h07c19" data-diff="basic" data-tez="4">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">PORFIRIJ</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, IV dio — treći susret</span>
        </div>
        <div class="cit-txt">„Vi ste ubili, Rodion Romanoviču. Ali predajte se — dobit ćete blaže. Ja vam savjetujem."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(4, this)">T4</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <b>Porfirijev najvažniji iskaz</b>. Zna sve, ali mu daje priliku. <em>Psihološki genij istraga</em>. Za Tezu 4 (psihološki realizam) — Porfirij <b>razumije</b> Raskoljnikova bolje nego on sebe.</div>
      </div>

      <div class="cit-card" data-cat="porfirije" data-cit-id="h07c20" data-diff="advanced" data-tez="3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">PORFIRIJ</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, III dio — drugi susret</span>
        </div>
        <div class="cit-txt">„Rečem vam, naš čovjek je mladi, bolestan, pročitao knjigu — pa sad je vjerovao da je Napoleon."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Porfirij <em>ironično citira</em> Raskoljnikovljev članak. Dostojevski kroz Porfirija <b>dekonstruira teoriju iznutra</b> — smije se joj. Za Tezu 3 (kritika nihilizma).</div>
      </div>

      <div class="cit-card" data-cat="porfirije" data-cit-id="h07c21" data-diff="advanced" data-tez="7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">PORFIRIJ</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, IV dio — savjet</span>
        </div>
        <div class="cit-txt">„Patnja je velika stvar. U patnji leži ideja, ne bojte se."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(7, this)">T7</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Porfirijev filozofski savjet. <em>Porfirij i Sonja govore istu poruku</em> — kroz patnju do istine. <b>Dostojevski pokazuje</b> da <em>razum</em> (Porfirij) i <em>vjera</em> (Sonja) dolaze do istog zaključka. Za Tezu 7.</div>
      </div>


      <!-- SVIDRIGAJLOV -->
      <div class="cit-card" data-cat="svidri" data-cit-id="h07c22" data-diff="advanced" data-tez="3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">SVIDRIGAJLOV</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, IV dio — Svidrigajlov Raskoljnikovu</span>
        </div>
        <div class="cit-txt">„Svi smo mi malo glupi. Samo neki to priznaju, drugi ne."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Svidrigajlovljev cinizam. <em>Raskoljnikovljev dvojnik</em> — jednaka filozofija, <b>ali bez savjesti</b>. Za Tezu 3 (kritika nihilizma) — Svidrigajlov je <em>logička posljedica</em> teorije bez granica. Završava samoubojstvom.</div>
      </div>

      <div class="cit-card" data-cat="svidri" data-cit-id="h07c23" data-diff="advanced" data-tez="3,7">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">SVIDRIGAJLOV</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, VI dio — prije samoubojstva</span>
        </div>
        <div class="cit-txt">„Vječnost je za nas kao malena sobica, znate, seoska — i u svakom kutku pauci."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button><button type="button" class="cit-tez" onclick="citFilterByTez(7, this)">T7</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Svidrigajlovljev <em>nihilistička vizija zagrobja</em>. Zagrobje = ružan, siromašan prostor. Nema nade, nema Boga. <b>Suprotnost Sonjinom uskrsnuću</b>. Za Tezu 3 (što se dogodi bez vjere).</div>
      </div>


      <!-- DUNJA -->
      <div class="cit-card" data-cat="dunja" data-cit-id="h07c24" data-diff="basic" data-tez="6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">DUNJA</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, III dio — pismo majke</span>
        </div>
        <div class="cit-txt">„Ona se odlučila žrtvovati za tebe, brate. Za tvoje studije."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(6, this)">T6</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <em>Dunjina žrtva</em> — brak s Lužinom da brat studira. Za Tezu 6 (paralela Sonjinoj žrtvi). <b>Dvije žene žrtvuju se za muškarce</b> — Dostojevski pokazuje strukturu društva.</div>
      </div>

      <div class="cit-card" data-cat="dunja" data-cit-id="h07c25" data-diff="advanced" data-tez="6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">DUNJA</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, VI dio — Dunja Svidrigajlovu</span>
        </div>
        <div class="cit-txt">„Ne možete me primorati, makar me zaključali. Vičem, ljudi će doći!"</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(6, this)">T6</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Dunja gađa Svidrigajlova pištoljem. <em>Aktivna otpornost</em> (za razliku od Sonjine pasivne žrtve). Za Tezu 6 — <b>dvije modaliteta ženskog žrtvovanja</b>: Sonjina pokornost vs Dunjin ponos.</div>
      </div>


      <!-- MARMELADOV -->
      <div class="cit-card must-know" data-cat="marm" data-cit-id="h07c27" data-diff="basic" data-tez="2,6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">MARMELADOV</span>
          <span class="cit-must">Napamet</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, I dio — Marmeladov o Sonji</span>
        </div>
        <div class="cit-txt">„Ona je ustala, bez riječi, uzela maramu svoju, pokrila glavu i tiho otišla. A vratila se u šest i pol donijevši nam srebrni rubalj."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(2, this)">T2</button><button type="button" class="cit-tez" onclick="citFilterByTez(6, this)">T6</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <em>prvi spomen Sonjine žrtve</em>. Marmeladov priča o danu kad je Sonja prvi put izišla „na ulicu". <b>Tihost čina</b> — bez riječi, s maramom. Za Tezu 2 i 6. Dostojevski kroz oca otkriva kći.</div>
      </div>

      <div class="cit-card" data-cat="marm" data-cit-id="h07c26" data-diff="advanced" data-tez="5,6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">MARMELADOV</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, I dio — Marmeladov Raskoljnikovu</span>
        </div>
        <div class="cit-txt">„Treba čovjeku mjesto kamo može otići. Inače je sam pred njim Gospodin."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(5, this)">T5</button><button type="button" class="cit-tez" onclick="citFilterByTez(6, this)">T6</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Marmeladov (Sonjin otac) u kafani — pijani monolog. <em>Bijeda izolira</em>. Društveni realizam. Dostojevski <b>otvara roman</b> ovim sudbinom da postavi temu: grad uništava obitelj.</div>
      </div>


      <!-- KATERINA -->
      <div class="cit-card" data-cat="katerina" data-cit-id="h07c28" data-diff="advanced" data-tez="5,6">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">KATERINA</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Dostojevski</span>
          <span class="cit-src-work">Zločin i kazna, II dio — Katerina Ivanovna</span>
        </div>
        <div class="cit-txt">„Umrijet ću kao pas! Kao pas pod ogradom!"</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(5, this)">T5</button><button type="button" class="cit-tez" onclick="citFilterByTez(6, this)">T6</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Katerina u delirju pred smrt. <b>Vrh socijalne tragedije</b>. Tuberkuloza, siromaštvo, nerješivi pritisak. Za Tezu 5 i 6 — <em>Peterburg kao ubojica dostojanstva</em>.</div>
      </div>


      <!-- KONTEKST / META -->
      <div class="cit-card" data-cat="kontekst" data-cit-id="h07c29" data-diff="basic" data-tez="4">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">KONTEKST</span>
          
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Honoré de Balzac</span>
          <span class="cit-src-work">Otac Goriot (1835.) — motto</span>
        </div>
        <div class="cit-txt">„Sve je istina."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(4, this)">T4</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <em>motto realizma</em>. Balzac, utemeljitelj realizma. <b>Dostojevski čita Balzaca</b> — piše diplomski rad o <em>Ocu Goriotu</em>. Za povezivanje H07 s francuskim realizmom. Definicija poetike epohe.</div>
      </div>

      <div class="cit-card" data-cat="kontekst" data-cit-id="h07c30" data-diff="advanced" data-tez="4">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">KONTEKST</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Mihail Bahtin</span>
          <span class="cit-src-work">Problemi poetike Dostojevskog (1929.)</span>
        </div>
        <div class="cit-txt">„Dostojevski je tvorac polifonijskog romana. U njegovom romanu svaki glas ima vlastitu ideju."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(4, this)">T4</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <b>ključna interpretacija</b>. Bahtin — ruski književni teoretičar. <em>Polifonija</em> = centralni pojam za razumijevanje Dostojevskog. Citat pokazuje teorijsku zrelost. Za Tezu 4. Za esejsku kompetenciju.</div>
      </div>

      <div class="cit-card" data-cat="kontekst" data-cit-id="h07c31" data-diff="advanced" data-tez="3,4">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">KONTEKST</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Friedrich Nietzsche</span>
          <span class="cit-src-work">O Dostojevskom (1887.)</span>
        </div>
        <div class="cit-txt">„Dostojevski je jedini psiholog od kojeg sam nešto naučio."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button><button type="button" class="cit-tez" onclick="citFilterByTez(4, this)">T4</button></div>
        <div class="cit-use"><b>Kada koristiti</b> <em>Nietzsche o Dostojevskom</em>. Ironija: Dostojevski kritizira <b>nadčovjeka prije</b> nego Nietzsche ga formulira. Nietzsche priznaje njegov utjecaj. Za Tezu 3 i Tezu 4. <em>Most prema modernoj filozofiji</em>.</div>
      </div>

      <div class="cit-card" data-cat="kontekst" data-cit-id="h07c32" data-diff="advanced" data-tez="3">
        <div class="cit-actions">
          <button type="button" class="cit-btn fav" onclick="citToggleFav(this)" aria-label="Dodaj u favorite" title="Dodaj u favorite">☆</button>
          <button type="button" class="cit-btn copy" data-count="0" onclick="citCopy(this)" aria-label="Kopiraj citat" title="Kopiraj citat">📋</button>
        </div>
        <div class="cit-meta">
          <span class="cit-eye">KONTEKST</span>
          <span class="cit-diff adv">NAPREDNI</span>
        </div>
        <div class="cit-src">
          <span class="cit-src-author">Albert Camus</span>
          <span class="cit-src-work">Pobunjeni čovjek (1951.)</span>
        </div>
        <div class="cit-txt">„Ivan Karamazov i Raskoljnikov — dva lica iste pobune. Ali Dostojevski zna da pobuna bez ljubavi postaje destrukcija."</div>
        <div class="cit-tez-row"><button type="button" class="cit-tez" onclick="citFilterByTez(3, this)">T3</button></div>
        <div class="cit-use"><b>Kada koristiti</b> Camus <em>povezuje Dostojevskog s egzistencijalizmom 20. st</em>. <b>Stranac</b> (Camus, obvezatno 2026 za maturu, H10 moguće) ima slične teme. Za Tezu 3 i 7 — Dostojevski kao proročanski pisac. Napredno za esejsku širinu.</div>
      </div>


    </div>

    <div class="cit-toast" id="cit-toast" role="status" aria-live="polite">📋 Citat kopiran u clipboard</div>

    <div class="nav-row">
      <span class="nb" onclick="sw(2)">← ✍ Esej alat</span>
      <span class="nb primary" onclick="sw(4)">📚 Pojmovnik →</span>
    </div>
  </div>

  <!-- ════════════════════════
       TAB 4 · POJMOVNIK
       ════════════════════════ -->
  <div class="layer" 
  <div class="layer" id="l4" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">55 pojmova</span>
      <span class="pill p-go">Dostojevski</span>
      <span class="pill p-r">realizam</span>
      <span class="pill p-t">filter po kategoriji</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">📚 Pojmovnik — realizam + Dostojevski pojmovi</div>
      <div class="box-int-txt">
        <b>55 ključnih pojmova</b>: (1) djelo <em>Zločin i kazna</em> — likovi, kompozicija, simbolika, (2) Dostojevski autor, (3) epoha realizma, (4) ruski kontekst 1860-ih. Koristi filter.
      </div>
    </div>



    <div class="pojm-search-wrap">
      <span class="pojm-search-ico">🔍</span>
      <input type="search" class="pojm-search-input" id="pojm-search" placeholder="Pretraži pojmove (npr. nihilizam, Sonja, polifonija)…" aria-label="Pretraži pojmovnik">
      <span class="pojm-kbd-hint">Ctrl + K</span>
      <button type="button" class="pojm-search-clear" id="pojm-search-clear" onclick="pojmClear()" aria-label="Obriši pretragu">×</button>
    </div>

    <div class="pojm-filters" id="pojm-filters">
      <button class="pojm-filter on" data-cat="all">Sve</button>
      <button class="pojm-filter" data-cat="djelo">Zločin i kazna</button>
      <button class="pojm-filter" data-cat="autor">Dostojevski</button>
      <button class="pojm-filter" data-cat="realizam">Realizam</button>
      <button class="pojm-filter" data-cat="rusija">Ruski kontekst</button>
    </div>

    <div class="pojm-count" id="pojm-count">55 pojmova prikazano</div>

    <div class="pojm-grid" id="pojm-grid">

      <!-- DJELO: ZLOČIN I KAZNA (17) -->
      <div class="pojm" data-cat="djelo" data-kw="raskoljnikov protagonist student nadcovjek teorija"><span class="pojm-cat">djelo</span><div class="pojm-word">Rodion Raskoljnikov</div><div class="pojm-def">Protagonist Zločina i kazne. 23 godine, bivši student prava iz Peterburga. Siromah, bolestan, intelektualno arogantan. Autor članka <em>„O zločinu"</em> — teorija o „običnim" i „neobičnim" (nadčovjeci) ljudima. Ubija lihvaricu Alonu Ivanovnu i njezinu polusestru Lizavetu. <b>Arhetip „suvišnog čovjeka"</b> (nastavak Onjegina). Ime: rus. <em>raskoljnik</em> = <b>raskolnik, skismaatik</b>.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="sonja marmeladova prostitutka moralna vertikala"><span class="pojm-cat">djelo</span><div class="pojm-word">Sonja Marmeladova</div><div class="pojm-def">Sonja Semjonovna Marmeladova, 18 godina. Kći pijanca Marmeladova. Prisiljena na prostituciju (<em>„žuta kartica"</em>) da prehrani maćehu Katerinu i polubraću. Duboko <b>pravoslavna</b>. Čita Raskoljnikovu <em>Evanđelje po Ivanu</em> (uskrsnuće Lazara). <b>Moralna vertikala romana</b> — simbol kršćanske ljubavi i iskupljenja. Ide s Raskoljnikovim u Sibir.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="porfirij istrazitelj psiholog"><span class="pojm-cat">djelo</span><div class="pojm-word">Porfirij Petrovič</div><div class="pojm-def">Istražitelj u Zločinu i kazni. Lukav, psihološki profinjen. <em>Zna da je Raskoljnikov ubojica</em> od prvog susreta, ali nema dokaz. Kroz <b>3 psihološka susreta</b> vodi ga do priznanja. Citira njegov članak, igra mačke i miša. Savjetuje mu <em>da se sam preda</em> (lakša kazna). <b>Intelektualni dvojnik Raskoljnikovu</b>.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="svidrigajlov dvojnik nadcovjek cinik"><span class="pojm-cat">djelo</span><div class="pojm-word">Svidrigajlov</div><div class="pojm-def">Arkadij Ivanovič Svidrigajlov, oko 50. Bivši Dunjin poslodavac, proganja je. Cinik, razvratnik. Možda je otrovao ženu Marfu. <b>Raskoljnikovljev dvojnik</b> — jednaka filozofija <em>bez moralne grižnje</em>. Prisluškuje priznanje. Pokušava ucijeniti Dunju — ona ga gađa pistoljem. <b>Ubija se na mostu</b>. Njegov kraj = ono što bi Raskoljnikov bio bez Sonje.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="dunja raskoljnikova sestra luzin razumihin"><span class="pojm-cat">djelo</span><div class="pojm-word">Avdotja „Dunja" Raskoljnikova</div><div class="pojm-def">Raskoljnikovljeva sestra. Lijepa, ponosna, obrazovana. Namjerava se udati za <b>Lužina</b> (koristoljubiv odvjetnik) <em>samo radi brata</em> — da osigura mu studij. Raskoljnikov odbija tu žrtvu. Raskida s Lužinom. Na kraju se udaje za <b>Razumihina</b>. <em>Paralela Sonji</em>: obje žrtvuju sebe.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="razumihin prijatelj razum student"><span class="pojm-cat">djelo</span><div class="pojm-word">Dmitrij Razumihin</div><div class="pojm-def">Raskoljnikovljev odani prijatelj. <b>Razum</b> (rus. <em>razum</em> = pamet) — u imenu. Zdrav, radišan, veseo — <em>antiteza Raskoljnikovu</em>. Brine o njemu dok je bolestan. Ženi se Dunjom. Predstavlja <b>alternativu</b>: što Raskoljnikov može biti bez teorije nadčovjeka.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="marmeladov pijanac otac sonjin"><span class="pojm-cat">djelo</span><div class="pojm-word">Semjon Marmeladov</div><div class="pojm-def">Sonjin otac. Bivši činovnik, otpušten zbog pijanstva. Uskrsne, pa ga opet otpuste. <b>Oslobodilačka ispovijed</b> u kafani Raskoljnikovu otvara roman. Umire pregažen konjima. Simbolizira <em>raspad dostojanstva pod siromaštvom i alkoholom</em>.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="katerina ivanovna maceha tuberkuloza"><span class="pojm-cat">djelo</span><div class="pojm-word">Katerina Ivanovna</div><div class="pojm-def">Sonjina maćeha, druga žena Marmeladova. Nekad plemkinja, sada u ekstremnoj bijedi s <em>tuberkulozom</em>. Ponosna, polu-luda. <b>Nagovara Sonju na žutu karticu</b>. Na kraju ludi, iskašljava krv, umire na ulici. Simbol sloma dostojanstva.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="luzin petar petrovic odvjetnik"><span class="pojm-cat">djelo</span><div class="pojm-word">Petar Lužin</div><div class="pojm-def">Odvjetnik. Dunjin zaručnik. Koristoljubiv, želi ženu <em>podreðenu</em> (jer će ovisiti o njemu). Podmeće Sonji krađu u V. dijelu da je diskreditira. Raskinut s Dunjom. <b>Utjelovljuje utilitaran buržoaski moral</b> — laž u odijelu pristojnosti.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="alona lihvarica zrtva"><span class="pojm-cat">djelo</span><div class="pojm-word">Alona Ivanovna</div><div class="pojm-def">Lihvarica, škrta i okrutna prema sestri Lizaveti. Raskoljnikov je vidi kao <em>„štetnu vaš"</em> koju treba ukloniti. <b>Prva žrtva</b> — sjekirom po glavi. Utilitarni argument: ubojstvom jedne pomoći stotinama siromaha.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="lizaveta nevina sestra alona zrtva"><span class="pojm-cat">djelo</span><div class="pojm-word">Lizaveta Ivanovna</div><div class="pojm-def">Alonina polusestra. Krotka, jednostavno duhovna, gotovo sveta. <b>Druga žrtva</b> — Raskoljnikov je ubija jer ga je zatekla. <em>Neplanirana žrtva razotkriva teoriju</em> — ne može se „odabrati" koga se ubija. Bila je <b>Sonjina prijateljica</b> — ironična koincidencija.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="teorija nadcovjeka nap oleon clanak zlocin"><span class="pojm-cat">djelo</span><div class="pojm-word">Teorija nadčovjeka</div><div class="pojm-def">Raskoljnikovljeva teorija iz članka <em>„O zločinu"</em> (objavljen 6 mjeseci prije ubojstva). Ljudi se dijele na <b>„obične"</b> (poslušni, masa) i <b>„neobične"</b> (nadčovjeci: Napoleon, Muhamed, Newton). Neobični imaju pravo <em>prekršiti zakon radi više ideje</em>. <b>Anticipira Nietzscheovog Übermensch-a</b> (1883.).</div></div>
      <div class="pojm" data-cat="djelo" data-kw="zuta boja tapete kartica"><span class="pojm-cat">djelo</span><div class="pojm-word">Žuta boja</div><div class="pojm-def">Dominantna boja romana. <em>Žute tapete</em> u Raskoljnikovljevom stanu („sobica kao lijes"). Alonina žuta haljina. Sonjina <em>„žuta kartica"</em> — registracija prostitutki. Peterburg u ljetnoj vrućini. <b>Žuto = grad koji truje</b>.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="broj 7 sedam simbolika"><span class="pojm-cat">djelo</span><div class="pojm-word">Broj 7 (simbolika)</div><div class="pojm-def">Broj 7 prati cijeli roman — <em>biblijski simbol savršenstva</em> (dani stvaranja). Raskoljnikov ubija <b>u 7:00h</b>, čeka <b>7 dana</b>, ide <b>730 koraka</b>. Ironija: čin razdvajanja u broj cjeline. Sonja je <em>18 godina</em> (3×6 ili 7+7+4 — broj nesavršenosti).</div></div>
      <div class="pojm" data-cat="djelo" data-kw="uskrsnuce lazara ivanovo evandjelje sonja"><span class="pojm-cat">djelo</span><div class="pojm-word">Uskrsnuće Lazara</div><div class="pojm-def">Scena iz <em>Ivanovog evanđelja, 11. glava</em>. Lazar mrtav 4 dana, Krist ga zove iz groba. <b>Sonja čita Raskoljnikovu</b> u IV. dijelu romana. Prekretnica radnje. <em>Raskoljnikov je „duhovno mrtav"</em> — treba mu uskrsnuće. Biblijski model Raskoljnikovljevog puta.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="epilog sibir iskupljenje san"><span class="pojm-cat">djelo</span><div class="pojm-word">Epilog (Sibir)</div><div class="pojm-def">Zadnji dio romana, 1,5 godinu nakon predaje. Raskoljnikov u <em>katorgi</em> (8 godina). Sonja ga prati. Bolest — <b>san o bezumnim bakterijama</b> (proročanstvo ideoloških totalitarizama 20. st.). Buđenje — suze, ljubav Sonji. <em>„Nova priča počinje, priča o postupnom preporodu čovjeka."</em> Otvoren kraj.</div></div>
      <div class="pojm" data-cat="djelo" data-kw="peterburg grad sennaja plostad atmosfera"><span class="pojm-cat">djelo</span><div class="pojm-word">Sankt-Peterburg (u romanu)</div><div class="pojm-def">Ruska prijestolnica. U romanu nije pozadina — <em>aktivan lik</em>. <b>Duševni stisak</b> uskih ulica, vrućina, smrad. Sennaja ploščadj — trgovska četvrt bijede. Peterburg <em>generira</em> Raskoljnikovu teoriju. Dostojevski ga opisuje kao <b>„najapstraktniji grad na svijetu"</b>.</div></div>

      <!-- AUTOR: DOSTOJEVSKI (10) -->
      <div class="pojm" data-cat="autor" data-kw="dostojevski fjodor mihajlovic autor"><span class="pojm-cat">autor</span><div class="pojm-word">F. M. Dostojevski</div><div class="pojm-def">Fjodor Mihajlovič Dostojevski (1821.–1881.). Ruski pisac, <b>utemeljitelj psihološkog realizma</b>. Veliki romani: <em>Zločin i kazna</em> (1866.), <em>Idiot</em> (1868.), <em>Zli dusi</em> (1872.), <em>Braća Karamazovi</em> (1880.). Sin liječnika. Osuđen na smrt 1849. — pomilovan na strelištu. 4 godine Sibira. Epilepsija. Najutjecajniji ruski autor u svijetu.</div></div>
      <div class="pojm" data-cat="autor" data-kw="psiholoski realizam dostojevski"><span class="pojm-cat">autor</span><div class="pojm-word">Psihološki realizam</div><div class="pojm-def">Dostojevski specifičnost. Gdje Balzac opisuje <em>društvo izvana</em>, Dostojevski ulazi <b>u glavu lika</b>: paranoja, strah, savjest, racionalizacija. <em>Unutarnji monolog</em> kao tehnika. <b>Roman kao psihološki slučaj</b>, ne samo radnja. Prethodnica <em>stream of consciousness</em> (Joyce) i <em>freudovske psihoanalize</em>.</div></div>
      <div class="pojm" data-cat="autor" data-kw="polifonija bahtin glasovi"><span class="pojm-cat">autor</span><div class="pojm-word">Polifonija</div><div class="pojm-def">Pojam <b>Mihaila Bahtina</b> (1929., <em>Problemi poetike Dostojevskog</em>). U Dostojevskog <em>svaki lik ima svoj nezavisni glas i ideju</em> — autor ne daje konačnu riječ. Raskoljnikov, Sonja, Porfirij, Marmeladov, Svidrigajlov su „ravnopravni glasovi". <b>Suprotnost monologičkom romanu</b> (Tolstoj).</div></div>
      <div class="pojm" data-cat="autor" data-kw="dvojnik par likovi raskolj svidrigajlov"><span class="pojm-cat">autor</span><div class="pojm-word">Dvojnik</div><div class="pojm-def">Česta tehnika Dostojevskog — <em>dva lika koji utjelovljuju dvije strane iste ideje</em>. <b>Raskoljnikov + Svidrigajlov</b> = dvije verzije „nadčovjeka" (R. se vraća k Bogu, S. ubija se). <b>Sonja + Dunja</b> = dvije žene koje žrtvuju sebe. Dostojevski napisao roman <em>„Dvojnik"</em> (1846.) — rani primjer.</div></div>
      <div class="pojm" data-cat="autor" data-kw="ispovijed moralna istina"><span class="pojm-cat">autor</span><div class="pojm-word">Ispovijed</div><div class="pojm-def">Centralni narativni postupak Dostojevskog. Likovi se <em>ispovijedaju</em> jedni drugima: Marmeladov Raskoljnikovu, Raskoljnikov Sonji, Svidrigajlov Dunji. <b>Ispovijed je trenutak istine</b> — razotkriva pravu narav lika. <em>Suprotno pravnoj, ali izmiruje psihu</em>. Pravoslavna tradicija ispovijedi kao iscjeljenja.</div></div>
      <div class="pojm" data-cat="autor" data-kw="unutarnji monolog stream consciousness"><span class="pojm-cat">autor</span><div class="pojm-word">Unutarnji monolog</div><div class="pojm-def">Tehnika: pratimo <em>misli lika direktno</em>, bez autorova filtra. Raskoljnikov neprestano razgovara sam sa sobom — ispravlja se, sumnja, racionalizira. <b>Prethodnica stream of consciousness</b> (Joyce, Woolf) i <b>slobodnog neupravnog govora</b>. Kod Dostojevskog <em>paranoja, grižnja, intelektualna igra</em> — sve u glavi lika.</div></div>
      <div class="pojm" data-cat="autor" data-kw="roman ideja filozofski"><span class="pojm-cat">autor</span><div class="pojm-word">Roman ideja</div><div class="pojm-def">Dostojevski oblik: <em>roman u kojem se sukobljavaju velike ideje</em> (vjera vs nihilizam, moralna sloboda vs predestinacija). Likovi nisu samo karakteri — oni su <b>utjelovljenja filozofskih stajališta</b>. Raskoljnikov = nihilistička teorija. Sonja = kršćanska žrtva. Porfirij = razum. Svidrigajlov = cinizam.</div></div>
      <div class="pojm" data-cat="autor" data-kw="petraševski kruzok socijalizam osuda"><span class="pojm-cat">autor</span><div class="pojm-word">Petraševski kružok</div><div class="pojm-def">Grupa ruskih socijalista-utopijaca oko <em>Mihaila Petraševskog</em>. Dostojevski bio član. <b>1849. uhićen</b>, osuđen na smrt. <em>Pomilovan na strelištu u posljednjem trenutku</em> — to iskustvo obilježi ga za život. 4 godine Sibira (Omsk) + 4 vojne službe. Opisano u <em>Zapisima iz Mrtvog doma</em> (1861.).</div></div>
      <div class="pojm" data-cat="autor" data-kw="epilepsija miskin smerdjakov"><span class="pojm-cat">autor</span><div class="pojm-word">Epilepsija</div><div class="pojm-def">Bolest koja prati Dostojevskog cijeli život. <em>Mistična iskustva prije napada</em> opisuje kao trenutke „kozmičke svijesti". Ugrađuje bolest u likove: <b>Knez Miškin</b> (<em>Idiot</em>) i <b>Smerdjakov</b> (<em>Braća Karamazovi</em>) imaju epilepsiju. Dostojevski koristi bolest kao <em>metaforu za duhovno rastrojstvo</em>.</div></div>
      <div class="pojm" data-cat="autor" data-kw="pravoslavlje vjera krscanstvo"><span class="pojm-cat">autor</span><div class="pojm-word">Pravoslavlje (kod Dostojevskog)</div><div class="pojm-def">Dostojevski je duboki <em>pravoslavni vjernik</em>. Vjera je središnja tema njegovih romana. <b>Sonja Marmeladova</b> utjelovljuje kršćansku ljubav i žrtvu. Slavna misao: <em>„Ako Bog ne postoji, sve je dopušteno"</em> (Braća Karamazovi). Dostojevski kritizira <b>zapadni racionalizam</b> nauku uskrsnuća i patnje.</div></div>

      <!-- REALIZAM / POETIKA (15) -->
      <div class="pojm" data-cat="realizam" data-kw="realizam epoha 19 stoljece"><span class="pojm-cat">realizam</span><div class="pojm-word">Realizam</div><div class="pojm-def">Književna epoha ≈ 1830.–1895. Teži <em>objektivnom prikazu stvarnosti</em> — društva, karaktera, svakodnevnice. Odbacuje romantičku idealizaciju. Glavni oblik: <b>roman</b>. 3 struje: francuski (Balzac, Flaubert), engleski (Dickens), ruski (Dostojevski, Tolstoj, Turgenjev, Čehov).</div></div>
      <div class="pojm" data-cat="realizam" data-kw="balzac ljudska komedija francuski realizam"><span class="pojm-cat">realizam</span><div class="pojm-word">Honoré de Balzac</div><div class="pojm-def">(1799.–1850.) Francuski utemeljitelj realizma. <em>Ljudska komedija</em> — ciklus od 90 romana koji slika cijelo francusko društvo. <b>Otac Goriot</b> (1835.) — obvezatno za hrvatsku maturu u nekim godinama. Geslo: <em>„Sve je istina"</em>. Dostojevski ga čita i prevodi.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="flaubert madame bovary le mot juste"><span class="pojm-cat">realizam</span><div class="pojm-word">Gustave Flaubert</div><div class="pojm-def">(1821.–1880.) Francuski realist. <em>Madame Bovary</em> (1857.) — bovarizam (bijeg u mašte). <em>Sentimentalno obrazovanje</em>. Stil: <b>le mot juste</b> (točna riječ). Impersonalna naracija. <b>Sudski proces</b> 1857. za nemoral — postao skandal.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="dickens david copperfield engleski realizam"><span class="pojm-cat">realizam</span><div class="pojm-word">Charles Dickens</div><div class="pojm-def">(1812.–1870.) Engleski realist. Romani: <em>Oliver Twist</em>, <em>David Copperfield</em>, <em>Velika očekivanja</em>, <em>Mali Dorrit</em>. <b>Socijalni realizam</b> — kritika industrijskog Londona, sirotišta, dugova. Serijalno objavljivanje u časopisima. Dostojevski ga čita kao uzor.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="tolstoj rat i mir ana karenjina"><span class="pojm-cat">realizam</span><div class="pojm-word">Lav Tolstoj</div><div class="pojm-def">(1828.–1910.) Drugi veliki ruski realist uz Dostojevskog. <em>Rat i mir</em> (1869.) — epska kronika napoleonskih ratova. <em>Ana Karenjina</em> (1877.) — psihološki roman o preljubu. <b>Monologički roman</b> (suprotnost Dostojevskog polifoniji — Bahtin). Manje unutarnjeg kaosa, više povijesne panorame.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="tipski lik tip karakter"><span class="pojm-cat">realizam</span><div class="pojm-word">Tipski lik</div><div class="pojm-def">Lik koji utjelovljuje <em>socijalni ili psihološki tip</em> — ne individualac, nego <b>reprezentativan predstavnik</b>. Raskoljnikov = „suvišan čovjek", Lužin = „buržoaski oportunist", Marmeladov = „propao činovnik". Dostojevski ga nadilazi <em>individualizacijom</em> — svaki tip ima dubinsku psihologiju.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="sveznajuci pripovjedac treca osoba"><span class="pojm-cat">realizam</span><div class="pojm-word">Sveznajući pripovjedač</div><div class="pojm-def">Dominantna narativna tehnika realizma. Pripovjedač u <em>3. licu</em>, zna sve o likovima (misli, prošlost, motivacije). <b>Kod Dostojevskog se modificira</b> — sveznajući pripovjedač često se <em>udaljava</em> od lika, daje mu prostor za unutarnji monolog. Bahtin: polifonija ga razbija.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="objektivan opis detalji opisnost"><span class="pojm-cat">realizam</span><div class="pojm-word">Objektivan opis</div><div class="pojm-def">Realistička tehnika: <em>detaljan opis prostora, odjeće, ambijenta</em>, bez autorova komentara. Kod Dostojevskog opis je <b>psihološki simbol</b> — „žute tapete" Raskoljnikova stana, sennaja ploščadj Peterburga. <em>Atmosfera = karakterizacija.</em></div></div>
      <div class="pojm" data-cat="realizam" data-kw="roman forma epoha glavni oblik"><span class="pojm-cat">realizam</span><div class="pojm-word">Roman (realizam)</div><div class="pojm-def">Centralni književni oblik realizma. Proza, duža priča (obično 300+ stranica). Oblici: <em>obiteljski roman</em>, <em>psihološki roman</em>, <em>društveni roman</em>, <em>bildungsroman</em> (roman odgoja). <b>Zločin i kazna</b> = psihološki + socijalni + filozofski roman.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="bildungsroman odgoj razvoj"><span class="pojm-cat">realizam</span><div class="pojm-word">Bildungsroman</div><div class="pojm-def">Roman odgoja — prati <em>razvoj protagonista od mladosti do zrelosti</em>. Njemačka tradicija (Goethe <em>Wilhelm Meister</em>). Klasici: Dickens <em>David Copperfield</em>, Flaubert <em>Sentimentalno obrazovanje</em>. <b>Zločin i kazna je „antibildungsroman"</b> — Raskoljnikov ne sazrijeva kroz uspjehe, nego kroz zločin i iskupljenje.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="socijalni roman drustvo kritika"><span class="pojm-cat">realizam</span><div class="pojm-word">Socijalni roman</div><div class="pojm-def">Realistički oblik koji <em>kritizira društvo</em>. Prikazuje socijalnu nejednakost, bijedu, korupciju. Dickens (<em>Oliver Twist</em>), Dostojevski (<em>Zločin i kazna</em>). <b>Zločin i kazna ima socijalne dimenzije</b> — Marmeladov, Katerina, Sonja, Dunja su <em>produkt siromaštva</em>.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="naturalism zola emile darwin"><span class="pojm-cat">realizam</span><div class="pojm-word">Naturalizam</div><div class="pojm-def">Radikalni oblik realizma, kraj 19. st. <em>Émile Zola</em> (1840.–1902.) — glavni predstavnik. Lik je <b>produkt naslijeđa i miljea</b> (darvinistički utjecaj). Ciklus <em>Rougon-Macquart</em>. Dostojevski <em>nije naturalist</em> — zadržava duhovnu dimenziju. Ali dijele prikaz bijede.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="pozitivizam comte razum znanost"><span class="pojm-cat">realizam</span><div class="pojm-word">Pozitivizam</div><div class="pojm-def">Filozofska struja, <em>August Comte</em> (1830-ih). <b>Samo znanstveno provjerljivo ima vrijednost</b>. Odbacuje metafiziku, religiju. Realizam u književnosti je <em>pozitivistički pristup</em> — promatraj, opisuj, analiziraj. <b>Dostojevski je anti-pozitivist</b> — kritizira racionalni redukcionizam.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="milje okolina naturalizam"><span class="pojm-cat">realizam</span><div class="pojm-word">Milje</div><div class="pojm-def">Francuski pojam: <em>„okolina"</em>. Lik je <b>produkt svoje sredine</b> — siromaštva, obitelji, grada. Kod Raskoljnikova: <em>Peterburg kao milje koji rađa teoriju</em>. Milje je ujedno <b>uzrok i izgovor</b> — Dostojevski pokazuje da lik ima <em>moralnu slobodu</em> unatoč okolini.</div></div>
      <div class="pojm" data-cat="realizam" data-kw="satira ironija kritika"><span class="pojm-cat">realizam</span><div class="pojm-word">Satira (realizam)</div><div class="pojm-def">Oštra kritika društvenih pojava kroz <em>humor i ironiju</em>. Dickens satira: advokati, birokracija, sirotišta. Gogolj <em>Mrtve duše</em> — satira ruske provincije. <b>Dostojevski ima tamnu ironiju</b> — Lužin kao karikatura buržoaskog oportunizma; Porfirij se <em>smije teoriji</em> nadčovjeka.</div></div>

      <!-- RUSKI KONTEKST 1860ih (13) -->
      <div class="pojm" data-cat="rusija" data-kw="nihilizam ruski 1860 radikalci"><span class="pojm-cat">rusija</span><div class="pojm-word">Nihilizam (ruski)</div><div class="pojm-def">Filozofski stav ruske omladine 1860-ih. Od lat. <em>nihil</em> = „ništa". <b>Odbacivanje svih tradicionalnih vrijednosti</b> — crkve, države, obitelji, morala. Ikona: <em>Bazarov</em> (Turgenjev, <em>Oci i sinovi</em>, 1862.). <b>Raskoljnikovljeva teorija = nihilistička</b>. Dostojevski piše Zločin i kaznu kao odgovor.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="ukidanje kmetstva aleksandar 1861"><span class="pojm-cat">rusija</span><div class="pojm-word">Ukidanje kmetstva (1861.)</div><div class="pojm-def">Car <b>Aleksandar II.</b> oslobađa kmetove 19.2.1861. Prekretnica ruske povijesti — <em>23 milijuna seljaka slobodno</em>. Ali reforma loše izvedena — seljaci u dugu, bez zemlje. Uzrokuje socijalne tenzije. <b>Zločin i kazna (1866.) nastaje u ovom pokmetskom kaosu</b> — Raskoljnikovljevo i Sonjino siromaštvo produkt su te tranzicije.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="ubermensch nadcovjek nietzsche"><span class="pojm-cat">rusija</span><div class="pojm-word">Übermensch (nadčovjek)</div><div class="pojm-def">Njemački pojam Friedricha Nietzschea: <em>„Tako je govorio Zaratustra"</em> (1883.). Čovjek budućnosti koji <b>prelazi moralne vrijednosti</b>. <em>Ironija: Dostojevski anticipira i kritizira koncept 17 godina prije</em> Nietzschea. Raskoljnikovljeva teorija je <b>rani oblik nadčovjeka</b> — Dostojevski pokazuje zašto ne funkcionira.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="suvisan covjek pecorin onjegin"><span class="pojm-cat">rusija</span><div class="pojm-word">Suvišan čovjek</div><div class="pojm-def">Tip lika u ruskoj književnosti 19. st. — <em>talentiran, obrazovan plemić bez svrhe</em>. Puškinov <b>Onjegin</b> prvi. Slijede: Pečorin (Ljermontov), Rudin (Turgenjev), Oblomov (Gončarov), <b>Raskoljnikov</b> (Dostojevski). Karakteristike: dosada, otuđenost, cinizam. <em>Raskoljnikov je suvišan čovjek doveden do kriminala</em>.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="turgenjev oci sinovi bazarov"><span class="pojm-cat">rusija</span><div class="pojm-word">Ivan Turgenjev</div><div class="pojm-def">(1818.–1883.) Ruski realist. <em>Oci i sinovi</em> (1862.) — roman o sukobu generacija, <b>Bazarov</b> kao prvi „nihilist" u ruskoj književnosti. <em>Lovčevi zapisi</em> — kritika kmetstva. Prevoditelj. Mostovi između ruske i zapadne kulture.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="gogolj mrtve duse peterburg pripovijesti"><span class="pojm-cat">rusija</span><div class="pojm-word">Nikolaj Gogolj</div><div class="pojm-def">(1809.–1852.) Preteča realizma. <em>Mrtve duše</em> (1842.) — satira provincije. <em>Peterburške pripovijesti</em> (<em>Nevski prospekt</em>, <em>Nos</em>, <em>Šinjel</em>). Dostojevski: <em>„Svi smo izašli iz Gogoljeva Šinjela"</em>. Gogolj utemeljuje <b>tradiciju „malog čovjeka"</b> — tip propalog činovnika (Marmeladov).</div></div>
      <div class="pojm" data-cat="rusija" data-kw="razum razumihin ime simbolika"><span class="pojm-cat">rusija</span><div class="pojm-word">Razum (ime Razumihin)</div><div class="pojm-def">Rusko <em>razum</em> = pamet, racionalnost. Razumihin kao <em>personifikacija zdravog razuma</em> nasuprot Raskoljnikovljevom <b>bolesnom intelektu</b>. Ime = program. Dostojevski često koristi <em>govoreća imena</em>: <b>Lužin</b> (od „luža" = lokva), <b>Svidrigajlov</b> (zvučna pejorativna riječ).</div></div>
      <div class="pojm" data-cat="rusija" data-kw="raskol raskoljnik rus crkvena povijest"><span class="pojm-cat">rusija</span><div class="pojm-word">Raskol (crkveni)</div><div class="pojm-def"><em>„Raskoljnik"</em> — u rus. <b>onaj koji se odvojio od pravoslavne crkve</b>. Povijesni raskol 1650-ih: <em>staroobredici</em> (Avvakum) odvajaju se od službene crkve (Nikon). Raskoljnikov <b>nije staroobredeni</b> — ime je simbol <em>odvajanja od zajednice, Boga, morala</em>.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="kaznena katorga sibir"><span class="pojm-cat">rusija</span><div class="pojm-word">Katorga</div><div class="pojm-def">Ruski kazneni sistem — <em>prisilni rad u Sibiru</em>. Teške fizičke kazne, hladnoća, izolacija. Dostojevski je bio u <b>Omskoj katorgi</b> 1850.–1854. — opisuje u <em>Zapisima iz Mrtvog doma</em> (1861.). <b>Raskoljnikov ide u katorgu na 8 godina</b>. Sibir = prostor duhovnog iskupljenja u Epilogu.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="zuta kartica prostitucija rusija"><span class="pojm-cat">rusija</span><div class="pojm-word">Žuta kartica</div><div class="pojm-def">Registracija prostitutki u carskoj Rusiji. Žena koja prodaje tijelo mora predati osobne dokumente i dobiti <em>žutu knjižicu</em> (kod liječničkog nadzora, lokacije, etc.). <b>Sonja ima žutu karticu</b>. Fizički predmet ponižavanja. Za Dostojevskog simbol <em>društva koje pretvara žrtvu u grijeh</em>.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="slavjanofili zapadnjaci ideologija"><span class="pojm-cat">rusija</span><div class="pojm-word">Slavjanofili / Zapadnjaci</div><div class="pojm-def">Dva intelektualna pokreta ruskog 19. st. <b>Slavjanofili</b> (Homjakov, Aksakov): Rusija ima poseban put, pravoslavlje + komuna. <b>Zapadnjaci</b> (Herzen, Belinski): Rusija mora slijediti Zapad — liberalizam, industrija. <em>Dostojevski bliži slavjanofilstvu</em>, ali kritičan prema objema stranama.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="belinski kritika vissarion realizam"><span class="pojm-cat">rusija</span><div class="pojm-word">Visarion Belinski</div><div class="pojm-def">(1811.–1848.) Najvažniji ruski književni kritičar. Otkriva Dostojevskog — hvali <em>Bijedne ljude</em> (1846.). Belinski promovira <b>realistički, socijalno angažiran pristup</b>. Autor <em>„enciklopedija ruskog života"</em> (o Onjeginu). Za Dostojevskog: <em>„dao mi je život"</em>. Umire mlad od tuberkuloze.</div></div>
      <div class="pojm" data-cat="rusija" data-kw="mali covjek tip akakij bashmachkin"><span class="pojm-cat">rusija</span><div class="pojm-word">Mali čovjek</div><div class="pojm-def">Tip lika ruske književnosti. <em>Siromašan činovnik na dnu birokratske hijerarhije</em>. Prvi: <b>Akakij Bašmačkin</b> (Gogolj <em>Šinjel</em>, 1842.). Marmeladov je Dostojevska verzija. <b>Tema suosjećanja prema nemoćnima</b>. Dostojevski proširuje na <em>malu ženu</em> (Sonja) i <em>malog studenta</em> (Raskoljnikov).</div></div>
    </div>

    <script>
    (function initPojmovnikH07(){
      var searchInput=document.getElementById('pojm-search');
      var clearBtn=document.getElementById('pojm-search-clear');
      
      function normalize(s){
        return (s||'').toLowerCase()
          .replace(/č|ć/g,'c').replace(/š/g,'s').replace(/ž/g,'z').replace(/đ/g,'d')
          .trim();
      }
      
      function highlightMatches(el, query){
        // Remove prior highlights
        el.querySelectorAll('mark').forEach(function(m){
          var tn=document.createTextNode(m.textContent);
          m.parentNode.replaceChild(tn,m);
        });
        el.normalize();
        if(!query||query.length<2) return;
        // Only highlight in .pojm-word and .pojm-def; use simple text match
        var targets=[el.querySelector('.pojm-word'),el.querySelector('.pojm-def')];
        targets.forEach(function(t){
          if(!t) return;
          walkText(t, query);
        });
      }
      
      function walkText(node, query){
        if(node.nodeType===3){
          // Text node
          var lower=normalize(node.nodeValue);
          var idx=lower.indexOf(query);
          if(idx===-1) return;
          // Find original case position (approximation: indices align because normalize doesn't shrink text)
          var origText=node.nodeValue;
          var before=origText.substring(0,idx);
          var match=origText.substring(idx,idx+query.length);
          var after=origText.substring(idx+query.length);
          var mark=document.createElement('mark');
          mark.textContent=match;
          var parent=node.parentNode;
          parent.insertBefore(document.createTextNode(before),node);
          parent.insertBefore(mark,node);
          parent.insertBefore(document.createTextNode(after),node);
          parent.removeChild(node);
          // Don't recurse — one match per node is enough for first hit
        } else if(node.nodeType===1 && node.childNodes){
          var children=Array.prototype.slice.call(node.childNodes);
          children.forEach(function(c){ walkText(c, query); });
        }
      }
      
      function filter(){
        var activeBtn=document.querySelector('#pojm-filters .pojm-filter.on');
        var cat=activeBtn?activeBtn.getAttribute('data-cat'):'all';
        var query=searchInput?normalize(searchInput.value):'';
        var items=document.querySelectorAll('#pojm-grid .pojm');
        var shown=0;
        items.forEach(function(item){
          var itemCat=item.getAttribute('data-cat');
          var kw=item.getAttribute('data-kw')||'';
          var txt=normalize(item.textContent);
          var matchCat=(cat==='all'||itemCat===cat);
          var matchQuery=(!query || txt.indexOf(query)!==-1 || normalize(kw).indexOf(query)!==-1);
          var visible=matchCat && matchQuery;
          item.classList.toggle('hidden',!visible);
          if(visible){
            shown++;
            highlightMatches(item, query);
          } else {
            highlightMatches(item, '');
          }
        });
        var countEl=document.getElementById('pojm-count');
        if(countEl){
          if(query){
            countEl.innerHTML='<b>'+shown+'</b> '+(shown===1?'pojam':(shown>=2 && shown<=4?'pojma':'pojmova'))+' za \\''+query+'\\'';
          } else {
            countEl.textContent=shown+' '+(shown===1?'pojam':(shown>=2 && shown<=4?'pojma':'pojmova'))+' prikazano';
          }
        }
        if(clearBtn) clearBtn.classList.toggle('on', !!query);
      }
      
      // Filter buttons
      var filterBtns=document.querySelectorAll('#pojm-filters .pojm-filter');
      filterBtns.forEach(function(btn){
        btn.addEventListener('click',function(){
          filterBtns.forEach(function(b){b.classList.remove('on');});
          btn.classList.add('on');
          filter();
          if(typeof track==='function') track('pojm_filter',{cat:btn.getAttribute('data-cat')},'engagement');
        });
      });
      
      // Search input
      if(searchInput){
        var debounce;
        searchInput.addEventListener('input',function(){
          clearTimeout(debounce);
          debounce=setTimeout(function(){
            filter();
            if(searchInput.value && typeof track==='function'){
              track('pojm_search',{q:searchInput.value.substring(0,30)},'engagement');
            }
          },150);
        });
        // Enter key on empty = focus back
        searchInput.addEventListener('keydown',function(e){
          if(e.key==='Escape'){ window.pojmClear(); searchInput.blur(); }
        });
      }
      
      // Expose clear globally
      window.pojmClear=function(){
        if(searchInput){ searchInput.value=''; filter(); searchInput.focus(); }
      };
    })();
    </script>

    <div class="nav-row">
      <span class="nb" onclick="sw(3)">← 💬 Citatnik</span>
      <span class="nb primary" onclick="sw(5)">⚡ Drill →</span>
    </div>
  </div>

<!-- ════════════════════════
       TAB 5 · DRILL
       ════════════════════════ -->
  <div class="layer" id="l5" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">flashcards</span>
      <span class="pill p-go">spari</span>
      <span class="pill p-r">brzo učenje</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">⚡ Drill — aktivno učenje</div>
      <div class="box-int-txt">
        <strong>Flashcards</strong> za pojmove + <strong>matching</strong> (djelo → autor). Brže od pasivnog čitanja, direktno priprema za teoriju književnosti i 12 bodova.
      </div>
    </div>

    <!-- FLASHCARDS -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · Flashcards · okreni karticu</div><div class="sec-line"></div></div>


    <div class="fc-wrap">
      <div class="fc-counter"><span id="fc-num"><b>1</b> / 20</span></div>
      <div class="fc" id="fc-card" onclick="fcFlip()">
        <div class="fc-inner" id="fc-inner">
          <div class="fc-front">
            <div class="fc-cat" id="fc-cat-f">ONJEGIN</div>
            <div class="fc-term" id="fc-term">Rodion Raskoljnikov</div>
            <div class="fc-hint">Klikni za okretanje ↻</div>
          </div>
          <div class="fc-back">
            <div class="fc-cat" id="fc-cat-b">DEFINICIJA</div>
            <div class="fc-def" id="fc-def">Protagonist Dostojevskog djela (1866.). 23 godine, bivši student prava iz Peterburga. Inteligoslen. Zasićen svjetovnim životom, ciničan. Odbija Tatjanu, ubije Lenskog u duelu, na kraju pada ničice pred Tatjanom. Arhetip „suvišnog čovjeka” — uzor za Pečorina, Oblomova, Raskoljnikova.</div>
          </div>
        </div>
      </div>
      <div class="fc-controls">
        <button class="fcb dont" onclick="fcMark(0)">✗ Ne znam</button>
        <button class="fcb know" onclick="fcMark(1)">✓ Znam</button>
        <button class="fcb" onclick="fcSkip()">Preskoči →</button>
        <button class="fcb primary" onclick="fcReset()">🔁 Reset</button>
      </div>
      <div class="fc-stats"><span>točno: <b id="fc-right">0</b></span><span>krivo: <i id="fc-wrong">0</i></span></div>
    </div>

    <!-- MATCHING -->
    <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · Spari · djelo → autor</div><div class="sec-line"></div></div>


    <div class="mg-intro">Klikni jedan element s lijeve strane, pa njegov par s desne. Pogrešne veze se resetiraju.</div>

    <div class="pro-gate" data-feature="drill-matching">
      <div class="mg-board" id="mg-board"></div>
    <div class="mg-stats"><span>spareno: <b id="mg-score">0</b> / <span id="mg-total">7</span></span></div>
      <div class="pro-gate-overlay">
        <div class="pro-gate-fade"></div>
        <div class="pro-gate-cta">
          <div class="pro-gate-label">9 <b>pair matching</b> vježbi — djelo → autor · pojam → epoha · stil → autor</div>
          <a class="pro-gate-btn" href="/pricing?ctx=drill_matching_h07">Otključaj — 9,99€/mj</a>
          <div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>
        </div>
      </div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(4)">← Pojmovnik</span>
      <span class="nb primary" onclick="sw(6)">🧠 Kviz →</span>
    </div>
  </div>
  <!-- ════════════════════════
       TAB 6 · KVIZ
       ════════════════════════ -->
  <div class="layer" id="l6" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-br">20 pitanja</span>
      <span class="pill p-go">višestruki izbor</span>
      <span class="pill p-r">bez limita vremena</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">🧠 Kviz — testiraj znanje iz cijelog poglavlja</div>
      <div class="box-int-txt">
        Format identičan maturi — zadaci višestrukog izbora s 4 odgovora. Pokriva sve dijelove: Dostojevski i Zločin i kazna (likovi, radnja, teorija nadčovjeka, Sonja kao moralna vertikala), realizam kao epoha (polifonija, psihološki realizam, dvojnik, ispovijed), i kontekst (Balzac, Flaubert, Dickens, Tolstoj, nihilizam). Na kraju dobivaš ocjenu + pregled promašenih pitanja.
      </div>
    </div>


    <div class="qz-wrap" id="qz-app"></div>

    <div class="nav-row" style="margin-top:30px">
      <span class="nb" onclick="sw(5)">← Drill</span>
      <span class="nb primary" onclick="sw(7)">✅ Checkpoint →</span>
    </div>
  </div>

  <!-- ════════════════════════
       TAB 7 · CHECKPOINT
       ════════════════════════ -->
  <div class="layer" id="l7" role="tabpanel" tabindex="0">
    <div class="tags">
      <span class="pill p-g">završetak poglavlja</span>
      <span class="pill p-go">self-check</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">✅ Provjera — što zaista znaš?</div>
      <div class="box-int-txt">
        Označi stavke koje si <em>stvarno</em> usvojio. Ne žuri — ako nešto nisi siguran, vrati se na odgovarajući tab. <strong>Cilj: svih 10 označeno prije prelaska na H08 — Kafka Preobražaj.</strong>
      </div>
    </div>


    <div class="cp-summary">
      <div class="cp-sum-txt">Napredak · <b id="cp-done">0</b> / 10 stavki</div>
        <div class="cp-actions" style="margin-top:18px;display:flex;gap:10px;justify-content:center">
          <button type="button" class="fcb" onclick="cpReset()" style="padding:8px 16px;background:var(--inp,#0F0605);border:1px solid var(--bdl,#2c1f1f);border-radius:8px;color:var(--t2,#c5b8aa);font-family:var(--mono,monospace);font-size:11px;letter-spacing:0.8px;cursor:pointer">↩ Resetiraj</button>
          <button type="button" class="fcb primary" onclick="sw(6)" style="padding:8px 16px;background:var(--gold,#e9b446);color:#0F0605;border:none;border-radius:8px;font-family:var(--mono,monospace);font-size:11px;font-weight:800;letter-spacing:0.8px;cursor:pointer">🧠 Idi na kviz</button>
        </div>

      <div class="cp-sum-pct" id="cp-pct">0%</div>
    </div>

    <div class="pro-gate" data-feature="checkpoint-tracking">
      <div class="cp-grid" id="cp-grid">
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Znam tko je napisao <b>Zločin i kaznu</b> i kada (Dostojevski, 1866., obvezatno čitanje 2026)</div><span class="cp-hint">Dostojevski</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Mogu ispričati <b>kompoziciju u 6 dijelova + Epilog</b> (zločin → paranoja → Porfirij → Sonja → priznanje → predaja → Sibir)</div><span class="cp-hint">Zločin i kazna</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Znam ključne likove — <b>Raskoljnikov, Sonja, Porfirij, Svidrigajlov, Dunja, Razumihin, Marmeladov, Katerina</b></div><span class="cp-hint">Likovi</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Razumijem <b>teoriju nadčovjeka</b> — obični vs neobični, Napoleon, utilitarni argument, anticipacija Nietzschea</div><span class="cp-hint">Teorija</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Znam što je <b>psihološki realizam, polifonija, dvojnik, ispovijed</b> (Dostojevski specifičnosti)</div><span class="cp-hint">Pojmovnik</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Razumijem <b>simboliku</b> — broj 7, žuta boja, uskrsnuće Lazara, Peterburg vs Sibir, križ</div><span class="cp-hint">Simbolika</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Imam <b>barem 2 teze</b> za esej (Raskoljnikov kao tragičan junak, Sonja moralna vertikala, kritika nihilizma, psihološki realizam, Sonja+Dunja žensko žrtvovanje)</div><span class="cp-hint">Esej</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Znam <b>3 citata</b> napamet („Jesam li vaš ili Napoleon?", „Pati — to je put", „Nova priča počinje...")</div><span class="cp-hint">Citatnik</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Prepoznajem <b>kontekst realizma</b> — Balzac, Flaubert, Dickens, Tolstoj, nihilizam, suvišan čovjek (Onjegin → Raskoljnikov)</div><span class="cp-hint">Realizam</span></div>
      <div class="cp-item" onclick="cpToggle(this)"><div class="cp-box">✓</div><div>Kviz <b>prošao s 75%+</b></div><span class="cp-hint">Kviz</span></div>
    </div>
      <div class="pro-gate-overlay">
        <div class="pro-gate-fade"></div>
        <div class="pro-gate-cta">
          <div class="pro-gate-label"><b>Checkpoint tracking</b> kroz sva 28+22 poglavlja · napredak se sprema · graf spremnosti za maturu</div>
          <a class="pro-gate-btn" href="/pricing?ctx=checkpoint_h07">Otključaj — 9,99€/mj</a>
          <div class="pro-gate-meta">Otkaži bilo kad · Free trial 7 dana</div>
        </div>
      </div>
    </div>

    <div class="cp-final" id="cp-final">
      <div class="cp-final-ico">🎉</div>
      <div class="cp-final-title">H07 ZAVRŠENO!</div>
      <div class="cp-final-msg">
        Savladao si <strong>Realizam + Dostojevskog</strong>. <em>Zločin i kazna</em> — obvezatno čitanje 2026 — u džepu. Teorija nadčovjeka, psihološki realizam, polifonija, Sonja kao moralna vertikala, Epilog u Sibiru — sve ti je jasno. Sljedeći korak: <b>H08 — Kafka Preobražaj</b> (također obvezatno 2026). Od Raskoljnikova (čovjek koji misli da je nadčovjek) do Gregora Samse (čovjek koji se budi kao kukac) — <em>alijenacija, transformacija, svijet koji više ne razumije</em>. Moderna književnost nastavlja Dostojevski put unutra.
      </div>
      <div class="cp-actions">
        <button class="fcb primary" onclick="openChapterModal('h08','Kafka — Preobražaj','20. st. · moderna, obvezatno 2026','Franz Kafka — Preobražaj (1915.). Gregor Samsa se budi kao kukac. Alijenacija, obitelj, birokratska moderna. Nastavak Dostojevskog psihološkog realizma. Obvezatno čitanje NCVVO 2026.')">H08 · Kafka Preobražaj →</button>
        <button class="fcb" onclick="sw(0)">🔁 Ponovi H07</button>
      </div>

      <!-- PDF / PRINT EXPORT — offline ponavljanje pred ispit -->
      <div class="pdf-export">
        <div class="pdf-export-ico">📄</div>
        <div class="pdf-export-body">
          <div class="pdf-export-ttl">Preuzmi cijelu skriptu kao PDF</div>
          <div class="pdf-export-txt">Sve što si prošao — Teorija, Zločin i kazna, Esej alat, Citatnik, Pojmovnik, Drill, Kviz — u jednom dokumentu. <strong>Idealno za ponavljanje pred ispit</strong> ili ispis na papir.</div>
          <div class="pdf-actions">
            <button type="button" class="pdf-export-btn pdf-primary" id="pdf-print-btn" onclick="printFullScript()">
              🖨 Otvori za ispis / Spremi kao PDF
            </button>
            <button type="button" class="pdf-export-btn pdf-secondary" id="pdf-export-btn" onclick="generatePDF()">
              <span id="pdf-btn-label">📥 Direktan PDF</span> <span class="pdf-beta">BETA</span>
            </button>
          </div>
          <div class="pdf-export-hint">
            <strong>Preporučeno:</strong> klikni "Otvori za ispis" → u dijalogu odaberi <em>"Save as PDF"</em> kao printer.<br>
            Direktan PDF je eksperimentalni i može zakazati zbog kompleksnih grafova.
          </div>
        </div>
      </div>

      <!-- UPSELL: Discere nakon završenog poglavlja -->
      <div class="upsell" style="margin-top:24px;text-align:left" data-upsell-ctx="checkpoint_finale" data-upsell-target="discere" data-upsell-id="cp_discere">
        <div class="upsell-ico wordmark">Discere</div>
        <div class="upsell-body">
          <div class="upsell-title">Simulator mature <span class="upsell-badge standard">STANDARD</span> <span class="upsell-badge" style="color:var(--t3);border-color:var(--bdm);background:transparent;font-size:8px">9,99 €/mj · uklj. u PRO</span></div>
          <div class="upsell-desc"><strong>Završio si H07 — sada testiraj u stvarnim uvjetima.</strong> Dostojevski, Zločin i kazna, teorija nadčovjeka, realizam kao epoha, psihološki realizam — sve se pojavljuje u školskom eseju i čitanju neknjiževnog teksta. <em>Zločin i kazna = obvezatno čitanje 2026.</em> Riješi simulaciju s timerom i automatskim ocjenjivanjem.</div>
        </div>
        <a href="/discere?subject=hrvatski&topic=dostojevski&ctx=h07_checkpoint" class="upsell-cta" onclick="track('upsell_click',{ctx:'checkpoint_finale',target:'discere'},'conversion')">Isprobaj →</a>
      </div>
    </div>

    <div class="nav-row" style="margin-top:30px">
      <span class="nb" onclick="sw(6)">← Kviz</span>
      <span class="nb off">H08 · Kafka (uskoro) →</span>
    </div>
  </div>

  <!-- ══ MODULE FOOTER (v3.6) ══ -->
  <footer class="mod-foot" role="contentinfo">
    <div class="foot-line"><b>Maturiraj.hr</b> · Hrvatski · H07 Realizam + Dostojevski</div>
    <div class="foot-line">Autorski sadržaj · Usklađeno s <a href="https://www.ncvvo.hr/ispitni-katalozi-za-drzavnu-maturu-2025-2026/" target="_blank" rel="noopener noreferrer" onclick="track('ext_link_click',{target:'ncvvo_footer'},'engagement')">NCVVO</a> ispitnim katalogom · Ažurirano <time datetime="2026-04-19">travanj 2026.</time></div>
    <div class="foot-line foot-feedback">
      <span class="foot-fb-q">Imaš prijedlog ili si uočio grešku?</span>
      <button type="button" class="foot-fb-btn" onclick="openFeedbackModal()">📝 Prijavi →</button>
      <span class="foot-fb-or">ili e-mail</span>
      <a href="mailto:maturirajgreske@gmail.com?subject=H07%20%E2%80%94%20prijava%20gre%C5%A1ke&amp;body=Poglavlje%3A%20H07%20Realizam%20%2B%20Dostojevski%0ATab%3A%20%0A%0AOpis%3A%0A" class="foot-fb-mail" onclick="track('ext_link_click',{target:'mailto_feedback'},'engagement')">maturirajgreske@gmail.com</a>
    </div>
  </footer>

</div>
</div>
</main>
</div><!-- /shell -->

<script>
/* ═══════════════════════════════════════════
   HRVATSKI H07 — JS
   Tabs · Pojmovnik search · Flashcards · Matching · Kviz
   Email capture · Back-to-top · Event tracking
   ═══════════════════════════════════════════ */

/* ══ SUPABASE CONFIG ══
   ZAMIJENITI prije deploya u production:
   1. SUPABASE_URL      → tvoj Supabase project URL
   2. SUPABASE_ANON_KEY → anon public key iz Settings > API

   Za lokalni test — ostavi placeholder, modal/track će raditi u offline modu.
═════════════════════════════════════════════ */
var SUPABASE_URL = 'https://your-project.supabase.co';
var SUPABASE_ANON_KEY = 'your-anon-key-here';

var CURRENT_CHAPTER = {
  subject: 'hrvatski',
  code: 'h07',
  title: 'Realizam + Dostojevski'
};

/* ══ COUNTDOWN — sljedeći maturalni rok ══
   Konfigurabilno: promijeni datum ovdje za različite sezone.
   Ljetni rok 2026: 8. lipnja 2026 (približno — NCVVO objavljuje točan datum)
═════════════════════════════════════════════ */
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

/* ══ SOCIAL PROOF ══
   Brojeve puni iz Supabase view-a u produkciji. Sad — placeholder "uskoro".
   Kad budeš imao stvarne brojeve, zamijeni _renderSocialProof.
═════════════════════════════════════════════ */
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
      <div class="sp-item">🇭🇷 <b>Besplatno</b> za sve maturante</div>
      <div class="sp-divider"></div>
      <div class="sp-item">📚 Usklađeno s <b>NCVVO</b> katalogom</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ Do mature <b>\${daysToMatura()}</b> dana</div>
    \`;
    return;
  }

  // Kad Supabase stigne — realni brojevi
  if(variant === 'compact'){
    el.innerHTML = \`
      <div class="sp-item">🔥 <b>\${SOCIAL_PROOF.active_learners}</b> uči trenutno</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ <b>\${daysToMatura()}</b> dana do mature</div>
    \`;
  } else {
    el.innerHTML = \`
      <div class="sp-item">🔥 <b>\${SOCIAL_PROOF.active_learners}</b> maturanata uči</div>
      <div class="sp-divider"></div>
      <div class="sp-item">⭐ <b>\${SOCIAL_PROOF.avg_rating}/5</b> (\${SOCIAL_PROOF.review_count} recenzija)</div>
      <div class="sp-divider"></div>
      <div class="sp-item">📈 prosječno <b>\${SOCIAL_PROOF.avg_improvement}</b> nakon 2 mj</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ <b>\${daysToMatura()}</b> dana do mature</div>
    \`;
  }
}

/* ══ EVENT TRACKING ══ */
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

/* ══ SUPABASE SIGNUP ══ */
function supabaseSignup(email, source, chapterCode, meta){
  // Client-only offline fallback: ako URL još nije postavljen, simuliraj success
  if(SUPABASE_URL.indexOf('your-project')>=0){
    return new Promise(function(resolve){
      setTimeout(function(){
        resolve({success:true, already_signed:false, message:'Prijavljen! (Offline način — email nije poslan)'});
      }, 700);
    });
  }
  return fetch(SUPABASE_URL+'/rest/v1/rpc/signup_newsletter',{
    method:'POST',
    headers:{
      'apikey':SUPABASE_ANON_KEY,
      'Authorization':'Bearer '+SUPABASE_ANON_KEY,
      'Content-Type':'application/json',
      'Prefer':'return=representation'
    },
    body:JSON.stringify({
      p_email:email,
      p_source:source,
      p_subject:CURRENT_CHAPTER.subject,
      p_chapter_code:chapterCode||null,
      p_meta:meta||{}
    })
  }).then(function(r){return r.json()}).catch(function(err){
    console.error('Supabase signup error:',err);
    return {success:false, error:'network', message:'Greška u mreži — pokušaj ponovo.'};
  });
}

/* ══ MODAL ══ */
var MODAL_CONTEXT = {source:'other', chapter_code:null};

function openModal(config){
  MODAL_CONTEXT.source = config.source || 'other';
  MODAL_CONTEXT.chapter_code = config.chapter_code || null;
  if(config.ico) document.getElementById('modal-ico').textContent=config.ico;
  if(config.eye) document.getElementById('modal-eye').textContent=config.eye;
  if(config.title) document.getElementById('modal-title').textContent=config.title;
  if(config.desc) document.getElementById('modal-desc').innerHTML=config.desc;
  if(config.preview_title && config.preview_body){
    var p=document.getElementById('modal-preview');
    p.innerHTML='<strong>'+config.preview_title+'</strong>'+config.preview_body;
    p.style.display='block';
  } else {
    document.getElementById('modal-preview').style.display='none';
  }
  document.getElementById('modal-email').value='';
  document.getElementById('modal-submit').disabled=false;
  document.getElementById('modal-submit').textContent='Javi mi →';
  document.getElementById('modal-msg').className='modal-msg';
  document.getElementById('modal-form').style.display='flex';

  var bd=document.getElementById('modal-backdrop');
  bd.classList.add('show');
  setTimeout(function(){document.getElementById('modal-email').focus()},100);

  track('modal_open', {source: MODAL_CONTEXT.source, chapter_code: MODAL_CONTEXT.chapter_code}, 'engagement');
}

function closeModal(){
  document.getElementById('modal-backdrop').classList.remove('show');
}

function submitSignup(ev){
  ev.preventDefault();
  var email=document.getElementById('modal-email').value.trim().toLowerCase();
  var btn=document.getElementById('modal-submit');
  var msg=document.getElementById('modal-msg');

  // Validate
  var rx=/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$/i;
  if(!rx.test(email)){
    msg.className='modal-msg show error';
    msg.textContent='✗ E-mail adresa nije valjana.';
    return false;
  }

  btn.disabled=true;
  btn.textContent='Šaljem...';
  msg.className='modal-msg';

  supabaseSignup(email, MODAL_CONTEXT.source, MODAL_CONTEXT.chapter_code, {
    current_chapter:CURRENT_CHAPTER.code,
    ts:new Date().toISOString()
  }).then(function(res){
    if(res.success){
      msg.className='modal-msg show success';
      msg.textContent = res.already_signed
        ? '✓ Već si prijavljen — javit ćemo ti se!'
        : '✓ Prijavljen! Poslat ćemo ti e-mail čim bude spremno.';
      document.getElementById('modal-form').style.display='none';
      lsSave('mt.hrv.newsletter_signed', true);
      track('signup_success', {
        source: MODAL_CONTEXT.source,
        chapter_code: MODAL_CONTEXT.chapter_code,
        already_signed: res.already_signed || false
      }, 'conversion');
      soundOk();
      setTimeout(closeModal, 2200);
    } else {
      msg.className='modal-msg show error';
      msg.textContent = '✗ '+(res.message||'Nešto je pošlo krivo. Pokušaj ponovo.');
      btn.disabled=false;
      btn.textContent='Javi mi →';
      track('signup_fail', {
        source: MODAL_CONTEXT.source,
        error: res.error || 'unknown'
      }, 'error');
      soundNg();
    }
  });

  return false;
}

/* ══ FULL SCRIPT PRINT (preporučeno, 100% pouzdano) ══
   Koristi postojeći @media print stylesheet — sve tabove vidljive, svijetla pozadina.
   Korisnik u print dijalogu može odabrati "Save as PDF" kao printer. */
function printFullScript(){
  track('full_print_start', {chapter: CURRENT_CHAPTER.code}, 'engagement');
  // Mali delay za feedback prije print dialoga
  var btn = document.getElementById('pdf-print-btn');
  if(btn){
    var originalText = btn.textContent;
    btn.textContent = '🖨 Otvaram dijalog...';
    btn.disabled = true;
    setTimeout(function(){
      window.print();
      setTimeout(function(){
        btn.textContent = originalText;
        btn.disabled = false;
      }, 500);
    }, 100);
  } else {
    window.print();
  }
}

/* ══ CHEAT SHEET: ISOLATED PRINT ══
   Klik na "Ispiši" u cheat kartici → printa SAMO cheat sheet, ne cijelu skriptu */
// afterprint event je čišćiji način za cleanup
if(typeof window !== 'undefined'){
  window.addEventListener('afterprint', function(){
    document.body.classList.remove('print-cheat-only');
  });
}

/* ══ MINI-DIJAGNOSTIKA "Mogu li ovo na maturi?" ══
   5 strateški odabranih pitanja koja pokrivaju širok spektar H07 gradiva.
   Cilj: korisnik za 60s zna gdje stoji prije nego krene učiti. */
var DIAG_QUESTIONS = [
  {
    q: "Tko je autor romana Zločin i kazna?",
    opts: ["Lav Tolstoj", "Ivan Turgenjev", "Fjodor Dostojevski", "Nikolaj Gogolj"],
    correct: 2,
    topic: "Dostojevski — autor"
  },
  {
    q: "Koja je kompozicija Zločina i kazne?",
    opts: [
      "5 činova i epilog",
      "6 dijelova i epilog",
      "12 poglavlja",
      "8 knjiga u stihovima"
    ],
    correct: 1,
    topic: "Kompozicija romana"
  },
  {
    q: "Kako se zove Raskoljnikovljeva teorija?",
    opts: [
      "Teorija utilitarizma",
      "Teorija revolucije",
      "Teorija nadčovjeka (O zločinu)",
      "Teorija altruizma"
    ],
    correct: 2,
    topic: "Teorija nadčovjeka"
  },
  {
    q: 'Koju scenu Sonja čita Raskoljnikovu?',
    opts: [
      "Prispodobu o izgubljenom sinu",
      "Uskrsnuće Lazara (Ivanovo evanđelje)",
      "Govor na gori",
      "Posljednju večeru"
    ],
    correct: 1,
    topic: "Biblijska simbolika"
  },
  {
    q: "Tko je Raskoljnikovljev 'dvojnik' u romanu?",
    opts: [
      "Porfirij Petrovič",
      "Razumihin",
      "Svidrigajlov",
      "Marmeladov"
    ],
    correct: 2,
    topic: "Dvojnik"
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
  try{ sessionStorage.setItem('mt.hrv.h07.diag', 'skipped') }catch(e){}
  track('diag_skip', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}

function diagRestart(){
  diagStart();
}

function diagRender(){
  var q = DIAG_QUESTIONS[diagState.idx];
  if(!q) return diagFinish();
  var qEl = document.getElementById('diag-q');
  var optsEl = document.getElementById('diag-opts');
  var idxEl = document.getElementById('diag-idx');
  var topicEl = document.getElementById('diag-topic');
  if(qEl) qEl.textContent = q.q;
  if(idxEl) idxEl.textContent = (diagState.idx + 1);
  if(topicEl) topicEl.textContent = q.topic || '—';
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
  var msgEl = document.getElementById('diag-res-msg');
  var recEl = document.getElementById('diag-rec');
  var corEl = document.getElementById('diag-correct');
  if(corEl) corEl.textContent = n;

  // Personalizirana poruka i preporuka
  var msg, rec;
  if(n === 5){
    msg = '🏆 Već vladaš H07 — bravo!';
    rec = 'Tvoj fokus: <b>esej alat</b> i <b>citatnik</b> za Dostojgina. Pređi na simulaciju u <a href="/discere?subject=hrvatski&topic=onjegin&ctx=h07_diag_top" onclick="track(\\'upsell_click\\',{ctx:\\'diag_top_score\\',target:\\'discere\\'},\\'conversion\\')">Discere simulatoru</a> da provjeriš pod uvjetima ispita.';
  } else if(n === 4){
    msg = '🎯 Odlično — solidne osnove.';
    rec = 'Imaš većinu, ali jedna rupica. Preporučujemo: <b>Zločin i kazna deep-dive</b> (Tab 1) + <b>Pojmovnik</b> kao revizija. Preskoči duga čitanja, idi direktno na <b>Citatnik</b> i <b>Drill</b>.';
  } else if(n === 3){
    msg = '👍 Dobre osnove — treba malo više rada.';
    rec = 'Imaš osnovni pregled, ali ti fali sigurnost u detaljima. Plan: <b>(1)</b> proradi cijelu Teoriju, <b>(2)</b> Zločin i kazna deep-dive, <b>(3)</b> Drill flashcards 2× prije Kviza.';
  } else if(n === 2){
    msg = '📚 Tu smo da ti pomognemo — krenimo od početka.';
    rec = 'Ne brini — zato si tu. Idi <b>tab po tab redom</b> (Teorija → Zločin i kazna → Esej alat). Ne preskači. Završi s <b>Drillom i Kvizom</b> kao provjera.';
  } else {
    msg = '🌱 Početna točka — sve je pred tobom.';
    rec = 'Realizam je zahtjevna epoha, ali strukturirana — Dostojevski kao centar, Balzac i Flaubert kao kontekst. Prati redoslijed tabova, ne žuri. <b>Cilj #1:</b> razumjeti Raskoljnikova — 8 likova, 6 dijelova kompozicije, teoriju nadčovjeka, Sonju kao moralnu vertikalu (Tab 1, sekcije 01–05). Kad to imaš, sve ostalo dolazi prirodno.';
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
    var s = sessionStorage.getItem('mt.hrv.h07.diag');
    if(s){
      document.getElementById('diag').setAttribute('data-state', 'dismissed');
    }
  }catch(e){}
}

/* ══ PDF EXPORT (v3.6.1) ══
   Lazy-loadan html2pdf.js (CDN). Ako library load ili PDF generacija zakaže,
   fallbackamo na window.print() koji koristi naš print stylesheet. */

var _html2pdfLoading = false;
var _html2pdfReady = (typeof html2pdf !== 'undefined');

function _loadHtml2Pdf(callback){
  if(_html2pdfReady || typeof html2pdf !== 'undefined'){
    _html2pdfReady = true;
    callback(null);
    return;
  }
  if(_html2pdfLoading){
    // Already loading — poll
    var pollAttempts = 0;
    var poll = setInterval(function(){
      pollAttempts++;
      if(typeof html2pdf !== 'undefined'){
        clearInterval(poll);
        _html2pdfReady = true;
        callback(null);
      } else if(pollAttempts > 50){ // 10s max wait
        clearInterval(poll);
        callback(new Error('Library load timeout'));
      }
    }, 200);
    return;
  }
  _html2pdfLoading = true;
  var s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
  s.async = true;
  s.onload = function(){
    _html2pdfReady = true;
    _html2pdfLoading = false;
    callback(null);
  };
  s.onerror = function(){
    _html2pdfLoading = false;
    callback(new Error('CDN failed to load'));
  };
  document.head.appendChild(s);
}

function _pdfFallbackPrint(reason){
  // Loš path — koristimo browser print kao fallback
  if(reason) console.warn('PDF export fallback to print:', reason);
  var btn = document.getElementById('pdf-export-btn');
  var label = document.getElementById('pdf-btn-label');
  if(label) label.textContent = '🖨 Otvaram dijalog za ispis...';
  setTimeout(function(){
    window.print();
    if(btn) btn.disabled = false;
    if(label) label.textContent = '📥 Preuzmi PDF';
  }, 400);
  track('pdf_fallback_print', {reason: String(reason || 'unknown').substring(0,80)}, 'engagement');
}

function generatePDF(){
  var btn = document.getElementById('pdf-export-btn');
  var label = document.getElementById('pdf-btn-label');
  if(btn) btn.disabled = true;
  if(label) label.textContent = '⏳ Učitavam alat...';

  track('pdf_export_start', {chapter: CURRENT_CHAPTER.code}, 'engagement');

  _loadHtml2Pdf(function(err){
    if(err){
      // CDN failed → use native print
      _pdfFallbackPrint('cdn_load_failed');
      return;
    }
    if(label) label.textContent = '⏳ Generiram PDF... (10-20s)';

    // Pamti trenutno stanje tabova
    var layers = document.querySelectorAll('.layer');
    var originalState = [];
    layers.forEach(function(l, i){
      originalState[i] = {
        hasOn: l.classList.contains('on'),
        display: l.style.display
      };
      l.classList.add('on');
      l.style.display = 'block';
    });

    // Sakrij elemente koji ne idu u PDF
    var hideSelectors = [
      '.sidebar', '.sb-hamburger', '.sb-overlay', '.btt',
      '.tabs', '.upsell', '.reveal-lock', '.countdown', '.social-proof',
      '.restore-banner', '.cit-tools', '.soft-hint', '.frustration',
      '.fc-controls', '.mg-board', '.mg-score', '.drill-stats',
      '.yt-grid', '.svg-tt', '.cp-actions', '.pdf-export',
      '#fb-modal-backdrop', '#modal-backdrop', '.foot-feedback',
      '.nav-row', '#qz-app'
    ];
    var hidden = [];
    hideSelectors.forEach(function(sel){
      document.querySelectorAll(sel).forEach(function(el){
        hidden.push({el: el, display: el.style.display});
        el.style.display = 'none';
      });
    });

    document.body.classList.add('pdf-exporting');

    var restoreState = function(){
      layers.forEach(function(l, i){
        if(!originalState[i].hasOn) l.classList.remove('on');
        l.style.display = originalState[i].display || '';
      });
      hidden.forEach(function(h){ h.el.style.display = h.display });
      document.body.classList.remove('pdf-exporting');
    };

    var targetElement = document.querySelector('.content-wrap') || document.body;

    var opt = {
      margin:       [10, 10, 12, 10],
      filename:     'Maturiraj_Hrvatski_H07_Realizam_Dostojevski.pdf',
      image:        {type: 'jpeg', quality: 0.92},
      html2canvas:  {
        scale: 1.3,
        useCORS: false,        // Google Fonts ne podržava CORS za CSS — disable
        allowTaint: true,      // ako resource taintira canvas, pusti — ne baci error
        backgroundColor: '#ffffff',
        logging: false,
        foreignObjectRendering: false,  // SVG <foreignObject> podrška (problematično u Safariju)
        removeContainer: true,
        imageTimeout: 8000,    // 8s timeout za pojedini image (umjesto default 15s)
        ignoreElements: function(el){
          if(!el || !el.tagName) return false;
          var t = el.tagName.toLowerCase();
          // Skip vanjske resource elemente
          if(t === 'iframe' || t === 'video' || t === 'audio' || t === 'embed' || t === 'object') return true;
          // Skip <link> tagove osim print stylesheeta (govori html2canvas da ne fetch-a Google Fonts)
          if(t === 'link' && el.rel === 'stylesheet') return true;
          if(el.classList){
            if(el.classList.contains('svg-tt')) return true;
            if(el.classList.contains('modal-backdrop')) return true;
            if(el.classList.contains('svg-hs-ring')) return true;  // animation može lupiti canvas
            if(el.classList.contains('svg-hint')) return true;
          }
          // Skip ::before/::after pseudo-elementi koji generiraju content (Hero orbs)
          if(el.classList && (el.classList.contains('hero-orb-a') || el.classList.contains('hero-orb-b'))) return true;
          return false;
        }
      },
      jsPDF:        {unit: 'mm', format: 'a4', orientation: 'portrait', compress: true, hotfixes: ['px_scaling']},
      pagebreak:    {mode: ['css', 'legacy'], avoid: ['.cr', '.box-int', '.box-key', '.sc', '.cmp-c', '.yt-card', '.cp-item', '.b20-item']}
    };

    try {
      html2pdf().set(opt).from(targetElement).save().then(function(){
        restoreState();
        if(btn) btn.disabled = false;
        if(label) label.textContent = '✓ Preuzeto!';
        setTimeout(function(){
          if(label) label.textContent = '📥 Preuzmi PDF';
        }, 2400);
        track('pdf_export_success', {chapter: CURRENT_CHAPTER.code}, 'engagement');
        soundOk();
      }).catch(function(genErr){
        console.error('PDF generation failed:', genErr);
        restoreState();
        track('pdf_export_fail', {error: String(genErr).substring(0,100)}, 'error');
        // Fallback: native print
        _pdfFallbackPrint('generation_error');
      });
    } catch(syncErr){
      console.error('PDF sync error:', syncErr);
      restoreState();
      track('pdf_export_fail', {error: 'sync: ' + String(syncErr).substring(0,80)}, 'error');
      _pdfFallbackPrint('sync_error');
    }
  });
}

/* ══ FEEDBACK MODAL (v3.6.1) ══ */
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
  if(btn){btn.disabled=false; btn.textContent='Pošalji →'}
  if(form) form.style.display = 'flex';

  bd.classList.add('show');
  setTimeout(function(){
    var ta = document.getElementById('fb-message');
    if(ta) ta.focus();
  }, 100);

  track('feedback_modal_open', {
    tab: lsLoad('mt.hrv.h07.tab', 0)
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
    p_tab_index: lsLoad('mt.hrv.h07.tab', 0),
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
      btn.textContent = 'Pošalji →';
      soundNg();
    }
  }).catch(function(){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ Greška u mreži. Pošalji e-mail na maturirajgreske@gmail.com'}
    btn.disabled = false;
    btn.textContent = 'Pošalji →';
  });

  return false;
}

/* ══ LOCKED SIDEBAR LINK → OPEN MODAL ══ */
function openChapterModal(chapterCode, chapterTitle, era, previewBody){
  openModal({
    ico:'📖',
    eye:'POGLAVLJE U IZRADI · '+era,
    title:chapterCode.toUpperCase()+' · '+chapterTitle+' — uskoro!',
    desc:'Radi se na ovom poglavlju. <strong>Ostavi svoj e-mail</strong> i javit ćemo ti čim izađe. Bez spama, bez newslettera — samo jedan e-mail kad je gotovo.',
    preview_title:'Pregled sadržaja',
    preview_body:previewBody,
    source:'locked_chapter',
    chapter_code:chapterCode.toLowerCase()
  });
}

/* ══ SVG HOTSPOT TOOLTIP (v3.5) ══ */
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

var CIT_STATE = {
  q: '',               // search query
  src: 'all',          // active category filter
  tez: 'all',          // thesis filter (1-7 or 'all')
  diff: 'all',         // difficulty filter (basic/advanced/all)
  favOnly: false,      // show only favorites
  favs: {},            // {id: true} map
  copyCount: {}        // {id: count} map — tracks per-card copy count
};
var CIT_ITEMS_CACHE = null;

function _citItems(){
  if(!CIT_ITEMS_CACHE){
    CIT_ITEMS_CACHE = Array.prototype.slice.call(
      document.querySelectorAll('#l3 .cit-card')
    );
  }
  return CIT_ITEMS_CACHE;
}

function _citNormalize(s){
  return (s||'').toLowerCase()
    .replace(/č|ć/g,'c').replace(/š/g,'s').replace(/ž/g,'z')
    .replace(/đ/g,'d').replace(/[„”"''“”„]/g,'')
    .trim();
}

function _citLoadFavs(){
  try {
    var raw = localStorage.getItem('mt.hrv.h07.cit_favs');
    CIT_STATE.favs = raw ? JSON.parse(raw) : {};
  } catch(e){ CIT_STATE.favs = {}; }
}

function _citSaveFavs(){
  try {
    localStorage.setItem('mt.hrv.h07.cit_favs', JSON.stringify(CIT_STATE.favs));
  } catch(e){}
}

function _citLoadCopyCount(){
  try {
    var raw = localStorage.getItem('mt.hrv.h07.cit_copy');
    CIT_STATE.copyCount = raw ? JSON.parse(raw) : {};
  } catch(e){ CIT_STATE.copyCount = {}; }
}

function _citSaveCopyCount(){
  try {
    localStorage.setItem('mt.hrv.h07.cit_copy', JSON.stringify(CIT_STATE.copyCount));
  } catch(e){}
}

function _citHasActiveFilters(){
  return CIT_STATE.src !== 'all' || CIT_STATE.tez !== 'all' ||
         CIT_STATE.diff !== 'all' || CIT_STATE.favOnly || CIT_STATE.q;
}

function _citApplyFilters(){
  var items = _citItems();
  var q = _citNormalize(CIT_STATE.q);
  var src = CIT_STATE.src;
  var tez = CIT_STATE.tez;
  var diff = CIT_STATE.diff;
  var favOnly = CIT_STATE.favOnly;
  var visibleCount = 0;

  items.forEach(function(el){
    var cat = el.getAttribute('data-cat') || '';
    var id = el.getAttribute('data-cit-id') || '';
    var cardDiff = el.getAttribute('data-diff') || 'basic';
    var cardTez = (el.getAttribute('data-tez') || '').split(',').filter(Boolean);
    var textNode = el.querySelector('.cit-txt');
    var srcNode = el.querySelector('.cit-src');
    var useNode = el.querySelector('.cit-use');
    var haystack = _citNormalize(
      (srcNode ? srcNode.textContent : '') + ' ' +
      (textNode ? textNode.textContent : '') + ' ' +
      (useNode ? useNode.textContent : '')
    );

    var isMustKnow = el.classList.contains('must-know');
    var matchesCat = (src === 'all' || cat === src || (src === 'must' && isMustKnow));
    var matchesTez = (tez === 'all' || cardTez.indexOf(String(tez)) !== -1);
    var matchesDiff = (diff === 'all' || cardDiff === diff);
    var matchesQuery = (!q || haystack.indexOf(q) !== -1);
    var matchesFav = (!favOnly || CIT_STATE.favs[id]);
    var visible = matchesCat && matchesTez && matchesDiff && matchesQuery && matchesFav;

    el.classList.toggle('cit-hidden', !visible);
    if(visible) visibleCount++;
  });

  // Empty state toggle (when filter hides everything)
  var empty = document.getElementById('cit-empty');
  if(empty){
    if(visibleCount === 0){
      empty.classList.add('on');
    } else {
      empty.classList.remove('on');
    }
  }


  // Update count badge
  var vEl = document.getElementById('cit-visible');
  if(vEl) vEl.textContent = visibleCount;

  // Show/hide reset button based on whether filters are active
  var clearBtn = document.getElementById('cit-count-clear');
  if(clearBtn) clearBtn.classList.toggle('on', _citHasActiveFilters());
}

/* Public API — called from onclick handlers in HTML */
function citFilter(src, btnEl){
  CIT_STATE.src = src;
  document.querySelectorAll('#l3 .cit-fbtn').forEach(function(btn){
    var isActive = btn.getAttribute('data-filter') === src;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  _citApplyFilters();
  if(typeof track === 'function') track('cit_filter', {src: src}, 'engagement');
}

function citToggleFav(btnEl){
  var card = btnEl.closest('.cit-card');
  if(!card) return;
  var id = card.getAttribute('data-cit-id');
  if(!id) return;
  var isFav = !!CIT_STATE.favs[id];
  if(isFav){
    delete CIT_STATE.favs[id];
    btnEl.classList.remove('on');
    btnEl.textContent = '☆';
    btnEl.setAttribute('aria-label','Dodaj u favorite');
    btnEl.setAttribute('title','Dodaj u favorite');
  } else {
    CIT_STATE.favs[id] = true;
    btnEl.classList.add('on');
    btnEl.textContent = '★';
    btnEl.setAttribute('aria-label','Ukloni iz favorita');
    btnEl.setAttribute('title','Ukloni iz favorita');
  }
  _citSaveFavs();
  _citUpdateFavCount();
  // If viewing "favorites only", refresh list
  if(CIT_STATE.favOnly) _citApplyFilters();
  if(typeof track === 'function') track('cit_fav', {action: isFav?'remove':'add', id: id}, 'engagement');
}

function citCopy(btnEl){
  var card = btnEl.closest('.cit-card');
  if(!card) return;
  var txtEl = card.querySelector('.cit-txt');
  var srcEl = card.querySelector('.cit-src');
  if(!txtEl) return;
  var id = card.getAttribute('data-cit-id') || '';
  // Build copy text
  var quote = (txtEl.textContent || '').trim();
  var attribution = (srcEl ? srcEl.textContent.replace(/^[^\\w]+\\s*/,'').trim() : '');
  var fullText = attribution ? (quote + '  — ' + attribution) : quote;

  function showToast(msg){
    var toast = document.getElementById('cit-toast');
    if(!toast) return;
    if(msg) toast.textContent = msg;
    toast.classList.add('on');
    clearTimeout(toast._t);
    toast._t = setTimeout(function(){ toast.classList.remove('on'); }, 1800);
  }
  function incrementCount(){
    if(!id) return;
    CIT_STATE.copyCount[id] = (CIT_STATE.copyCount[id] || 0) + 1;
    _citSaveCopyCount();
    btnEl.setAttribute('data-count', CIT_STATE.copyCount[id]);
  }
  function mark(){
    btnEl.classList.add('copied');
    btnEl.textContent = '✓';
    incrementCount();
    setTimeout(function(){
      btnEl.classList.remove('copied');
      btnEl.textContent = '📋';
    }, 1500);
    showToast('📋 Citat kopiran');
  }

  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(fullText).then(mark).catch(function(){
      _citFallbackCopy(fullText); mark();
    });
  } else {
    _citFallbackCopy(fullText); mark();
  }
  if(typeof track === 'function'){
    track('cit_copy', {id: id, count: CIT_STATE.copyCount[id] || 1}, 'engagement');
  }
}

function _citFallbackCopy(text){
  try {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly','');
    ta.style.position='absolute'; ta.style.left='-9999px';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  } catch(e){}
}

/* Thesis filter */
function citFilterByTez(tez, btnEl){
  CIT_STATE.tez = tez;
  document.querySelectorAll('#l3 .cit-diffbtn[data-tez]').forEach(function(b){
    var isActive = String(b.getAttribute('data-tez')) === String(tez);
    b.classList.toggle('active', isActive);
  });
  // If triggered from a tez tag inside a card, also highlight the tez sub-filter button
  _citApplyFilters();
  if(typeof track === 'function') track('cit_filter_tez', {tez: tez}, 'engagement');
}

/* Difficulty filter */
function citFilterByDiff(diff, btnEl){
  CIT_STATE.diff = diff;
  document.querySelectorAll('#l3 .cit-diffbtn[data-diff]').forEach(function(b){
    var isActive = b.getAttribute('data-diff') === diff;
    b.classList.toggle('active', isActive);
  });
  _citApplyFilters();
  if(typeof track === 'function') track('cit_filter_diff', {diff: diff}, 'engagement');
}

/* Random citat — scroll to and highlight */
function citRandom(){
  var visible = _citItems().filter(function(el){ return !el.classList.contains('cit-hidden'); });
  if(!visible.length) return;
  var pick = visible[Math.floor(Math.random() * visible.length)];
  // Remove focus class from all
  _citItems().forEach(function(el){ el.classList.remove('cit-focus'); });
  // Add + scroll
  pick.classList.add('cit-focus');
  pick.scrollIntoView({behavior: 'smooth', block: 'center'});
  setTimeout(function(){ pick.classList.remove('cit-focus'); }, 1300);
  // Toast
  var toast = document.getElementById('cit-toast');
  if(toast){
    toast.textContent = '🎲 Slučajan citat';
    toast.classList.add('on');
    clearTimeout(toast._t);
    toast._t = setTimeout(function(){ toast.classList.remove('on'); }, 1500);
  }
  if(typeof track === 'function') track('cit_random', {id: pick.getAttribute('data-cit-id')}, 'engagement');
}

/* Toggle "only favorites" view */
function citToggleFavOnly(){
  CIT_STATE.favOnly = !CIT_STATE.favOnly;
  var btn = document.getElementById('cit-favonly-btn');
  if(btn){
    btn.classList.toggle('active', CIT_STATE.favOnly);
    // Update only the star icon (text node before the count span)
    btn.childNodes[0].nodeValue = (CIT_STATE.favOnly ? '★' : '☆') + ' Favoriti (';
  }
  _citApplyFilters();
  if(typeof track === 'function') track('cit_fav_only', {on: CIT_STATE.favOnly}, 'engagement');
}

function _citUpdateFavCount(){
  var el = document.getElementById('cit-fav-count');
  if(el) el.textContent = Object.keys(CIT_STATE.favs).length;
}

/* Clear all filters */
function citClearFilters(){
  CIT_STATE.src = 'all';
  CIT_STATE.tez = 'all';
  CIT_STATE.diff = 'all';
  CIT_STATE.q = '';
  CIT_STATE.favOnly = false;

  // Reset UI
  document.querySelectorAll('#l3 .cit-fbtn').forEach(function(b){
    b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
  });
  document.querySelectorAll('#l3 .cit-diffbtn').forEach(function(b){
    var isAll = b.getAttribute('data-tez') === 'all' || b.getAttribute('data-diff') === 'all';
    b.classList.toggle('active', isAll);
  });
  var favBtn = document.getElementById('cit-favonly-btn');
  if(favBtn){
    favBtn.classList.remove('active');
    favBtn.childNodes[0].nodeValue = '☆ Favoriti (';
  }
  _citApplyFilters();
  if(typeof track === 'function') track('cit_clear_filters', {}, 'engagement');
}

/* Scroll to specific citat (from pinned top 5) */
function citScrollTo(cid){
  var card=document.querySelector('[data-cit-id="'+cid+'"]');
  if(!card) return;
  // Reset filters if card is hidden
  if(card.classList.contains('cit-hidden')){
    citClearFilters();
  }
  // Remove focus from all
  _citItems().forEach(function(el){ el.classList.remove('cit-focus'); });
  // Scroll + animate
  card.classList.add('cit-focus');
  card.scrollIntoView({behavior:'smooth',block:'center'});
  setTimeout(function(){ card.classList.remove('cit-focus'); },1300);
  if(typeof track==='function') track('cit_pinned_click',{id:cid},'engagement');
}

/* Toggle pinned top 5 visibility */
function citPinnedToggle(){
  var panel=document.getElementById('cit-pinned');
  if(!panel) return;
  var isCollapsed=panel.classList.toggle('collapsed');
  var btn=panel.querySelector('.cit-pinned-toggle');
  if(btn) btn.textContent=isCollapsed?'▼ Prikaži top 5':'▲ Sakrij top 5';
  try { localStorage.setItem('mt.hrv.h07.pinned_collapsed', isCollapsed?'1':'0'); } catch(e){}
  if(typeof track==='function') track('cit_pinned_toggle',{collapsed:isCollapsed},'engagement');
}

function _citInit(){
  _citLoadFavs();
  _citLoadCopyCount();
  // Restore pinned collapsed state
  try {
    var pinned=document.getElementById('cit-pinned');
    if(pinned && localStorage.getItem('mt.hrv.h07.pinned_collapsed')==='1'){
      pinned.classList.add('collapsed');
      var btn=pinned.querySelector('.cit-pinned-toggle');
      if(btn) btn.textContent='▼ Prikaži top 5';
    }
  } catch(e){}
  // Mark existing favorites visually + restore copy count badges
  _citItems().forEach(function(card){
    var id = card.getAttribute('data-cit-id');
    if(id && CIT_STATE.favs[id]){
      var favBtn = card.querySelector('.cit-btn.fav');
      if(favBtn){
        favBtn.classList.add('on');
        favBtn.textContent = '★';
        favBtn.setAttribute('aria-label','Ukloni iz favorita');
        favBtn.setAttribute('title','Ukloni iz favorita');
      }
    }
    if(id && CIT_STATE.copyCount[id]){
      var copyBtn = card.querySelector('.cit-btn.copy');
      if(copyBtn){
        copyBtn.setAttribute('data-count', CIT_STATE.copyCount[id]);
      }
    }
  });
  // Set total count + fav count
  var totalEl = document.getElementById('cit-total');
  if(totalEl) totalEl.textContent = _citItems().length;
  _citUpdateFavCount();
  _citApplyFilters();
}

/* ══ TABS ══ */
var quizInited=false, drillInited=false;
var VISITED_TABS={};
var QUIZ_PASSED=false; // nakon kviza ≥60%
var _tabStartTime = Date.now();

/* Breadcrumb tab labele (v3.6) */
var TAB_LABELS = ['Teorija','Zločin i kazna','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];

/* ══ SIDEBAR + PROGATE JS (v2) ══ */
/* ══════════════════════════════════════════════════════════════
   SIDEBAR + PROGATE JS — Maturiraj Hrvatski v2
   
   Ubacuje se u glavni <script> blok poglavlja (prije sw() funkcije).
   Ovisi o CURRENT_CHAPTER.code (string, npr. 'h11' ili 'd10').
   ══════════════════════════════════════════════════════════════ */

/* ══ SIDEBAR ACTIVATION ══
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
        openChapterModal(code, title, code.indexOf('d')===0?'Obvezatno djelo':'Poglavlje',
                         'Još u pripremi. Ostavi e-mail i javit ćemo ti kad izađe.');
        return false;
      });
    } else {
      item.classList.add('completed');
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

/* ══ TIER DETECTION + PROGATE ══
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



/* ══ MUST-KNOW BOX — expand/collapse ══ */
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

/* ══ FC (Flashcards) paywall — free tier limit ══ */
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
             '<div class="drill-paywall-ico">🔓</div>' +
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

/* ══ Quiz paywall — free tier limit ══ */
var QZ_FREE_LIMIT = 5;
function qzIsPaid(){
  var t = (document.body.getAttribute('data-tier')||'free');
  return t === 'standard' || t === 'pro';
}
function qzShowPaywall(){
  var app = document.getElementById('qz-app');
  if(!app) return;
  var chapter = (typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || 'unknown';
  app.innerHTML = '<div class="qz-paywall"><div class="qz-paywall-ico">🎯</div>' +
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
  var prevTab = lsLoad('mt.hrv.h07.tab', null);
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
  if(i===3){CIT_ITEMS_CACHE=null;_citApplyFilters();}
  if(i===5&&!drillInited){initDrill();initMatch();drillInited=true;}
  if(i===6&&!quizInited){renderQuizIntro();quizInited=true;}
  lsSave('mt.hrv.h07.tab',i);

  VISITED_TABS[i]=true;
  lsSave('mt.hrv.h07.visited',VISITED_TABS);
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
        b.textContent='✓';
        t.appendChild(b);
      }
    } else {
      if(existing) existing.remove();
    }
  });
}

/* ══ SIDEBAR ══ */
function toggleSidebar(){var s=document.getElementById('sidebar'),o=document.getElementById('overlay');s.classList.toggle('mobile-open');o.classList.toggle('show')}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show')}

/* ══ LOCALSTORAGE ══ */
function lsSave(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function lsLoad(k,def){try{var v=localStorage.getItem(k);return v!==null?JSON.parse(v):def}catch(e){return def}}

/* ══ SOUND ══ */
function beep(f,d,v,t){try{var c=new(window.AudioContext||window.webkitAudioContext)(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=f;o.type=t||'sine';g.gain.setValueAtTime(v||0.08,c.currentTime);g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+d);o.start(c.currentTime);o.stop(c.currentTime+d)}catch(e){}}
function soundOk(){beep(660,.1,.08,'sine');setTimeout(function(){beep(880,.14,.07,'sine')},110)}
function soundNg(){beep(200,.18,.08,'sawtooth')}
function soundDone(){[440,550,660,880].forEach(function(f,i){setTimeout(function(){beep(f,.18,.07,'sine')},i*90)})}

/* ══ PROGRESS ══ */
function updateProgress(pct){
  var p=Math.max(5,pct);
  var pb=document.getElementById('prog-bar'); if(pb) pb.style.width=p+'%';
  var pct2=document.getElementById('prog-pct'); if(pct2) pct2.textContent=p+'%';
  var hp=document.getElementById('hero-pb'); if(hp) hp.style.width=p+'%';
  var hl=document.getElementById('hero-prog-lbl'); if(hl) hl.textContent=p+'% završeno';
  lsSave('mt.hrv.h07.prog',p);
}

/* ══ RESTORE BANNER ══ */
function checkRestore(){
  var prog=lsLoad('mt.hrv.h07.prog',null);
  var tab=lsLoad('mt.hrv.h07.tab',null);
  var cp=lsLoad('mt.hrv.h07.cp',null);
  var visited=lsLoad('mt.hrv.h07.visited',null);
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
  var tab=lsLoad('mt.hrv.h07.tab',0);
  var prog=lsLoad('mt.hrv.h07.prog',5);
  var visited=lsLoad('mt.hrv.h07.visited',{});
  VISITED_TABS=visited;
  if(prog) updateProgress(prog);
  updateTabBadges();
  cpLoad();
  if(tab!==null) sw(parseInt(tab));
}
function dismissRestore(){
  document.getElementById('restore-banner').classList.remove('show');
  ['mt.hrv.h07.prog','mt.hrv.h07.tab','mt.hrv.h07.cp','mt.hrv.h07.visited','mt.hrv.h07.quiz_passed'].forEach(function(k){try{localStorage.removeItem(k)}catch(e){}});
  VISITED_TABS={0:true};
  QUIZ_PASSED=false;
  document.querySelectorAll('.cp-item.done').forEach(function(el){el.classList.remove('done')});
  updateTabBadges();
  recomputeProgress();
  cpUpdate();
}

/* ═══════════════════════════════════════════
   POJMOVNIK — replaced by Tab 4 IIFE (initPojmovnikH07)
   ═══════════════════════════════════════════ */
/* Old live-search logic removed — H07 uses new initPojmovnikH07 in Tab 4 */



/* ═══════════════════════════════════════════
   FLASHCARDS
   ═══════════════════════════════════════════ */
var FC_CARDS=[
  {front:'Kako se zove protagonist Zločina i kazne?',back:'<b>Rodion Romanovič Raskoljnikov</b> — 23 godine, bivši student prava iz Peterburga. Ime od rus. <em>raskoljnik</em> = raskolnik, skismaatik — <b>onaj koji se odvojio od zajednice i Boga</b>.'},
  {front:'Koju teoriju Raskoljnikov razvija?',back:'<b>Teorija nadčovjeka</b> iz članka <em>„O zločinu"</em>. Ljudi se dijele na <em>obične</em> (poslušni masi) i <em>neobične</em> (nadčovjeci — Napoleon, Muhamed, Newton). Neobični imaju pravo <b>prekršiti zakon radi više ideje</b>. Anticipira Nietzscheovog Übermensch-a.'},
  {front:'Koga ubija Raskoljnikov?',back:'<b>Alonu Ivanovnu</b> (lihvaricu) sjekirom — planirana žrtva. <b>Lizavetu</b> (Aloninu polusestru) — neplanirana, jer ga je zatekla. Ironija: Lizaveta je bila Sonjina prijateljica.'},
  {front:'Tko je Sonja Marmeladova?',back:'<b>Sonja Semjonovna</b>, 18 godina. Kći pijanca Marmeladova. Prisiljena na prostituciju (žuta kartica) da prehrani obitelj. Duboko pravoslavna. <em>Moralna vertikala romana</em> — čita Raskoljnikovu evanđelje, savjetuje predaju, ide u Sibir.'},
  {front:'Koju biblijsku scenu Sonja čita?',back:'<b>Uskrsnuće Lazara</b> iz <em>Ivanovog evanđelja, 11. glava</em>. Lazar je mrtav 4 dana, Krist ga zove iz groba. <em>Paralela: Raskoljnikov je duhovno mrtav — treba mu uskrsnuće</em>. Scena prekretnica (IV. dio).'},
  {front:'Koliko dijelova ima Zločin i kazna?',back:'<b>6 dijelova + Epilog</b>. I–II: zločin i paranoja. III–IV: intelektualna igra s Porfirijem + Sonja. V: priznanje Sonji. VI: rastanak i predaja. Epilog: Sibir, iskupljenje.'},
  {front:'Tko je Porfirij Petrovič?',back:'<b>Istražitelj</b>. Lukav, psihološki profinjen. Zna da je Raskoljnikov ubojica od prvog susreta. Kroz <em>3 susreta</em> vodi ga do priznanja. Savjetuje: <b>sam se predaj — dobit ćeš blaže</b>. <em>Intelektualni dvojnik Raskoljnikovu</em>.'},
  {front:'Tko je Svidrigajlov?',back:'<b>Bivši Dunjin poslodavac</b>. Oko 50 godina. Cinik, razvratnik, možda otrovao ženu. <em>Raskoljnikovljev dvojnik</em> — jednaka filozofija, bez savjesti. Pokušava ucijeniti Dunju. <b>Ubija se na mostu</b>. Njegov kraj = što R. bez Sonje.'},
  {front:'Tko je Dunja?',back:'<b>Avdotja Raskoljnikova</b>, bratova sestra. Lijepa, ponosna, obrazovana. Namjerava se udati za Lužina (koristoljubivog odvjetnika) <em>zbog brata</em>. Raskoljnikov odbija. Raskida s Lužinom. Udaje se za <b>Razumihina</b>.'},
  {front:'Tko je Razumihin?',back:'<b>Raskoljnikovljev odani prijatelj</b>, student. Ime od rus. <em>razum</em> = pamet. Zdrav, radišan — <em>antiteza Raskoljnikovu</em>. Brine o njemu dok je bolestan. Ženi se Dunjom. <b>Alternativa Raskoljnikovljevoj teoriji</b>.'},
  {front:'Što je polifonija (Bahtin)?',back:'Mihail <b>Bahtin</b> (1929., <em>Problemi poetike Dostojevskog</em>): u Dostojevskog <em>svaki lik ima svoj nezavisni glas i ideju</em> — autor ne daje konačnu riječ. Raskoljnikov, Sonja, Porfirij, Svidrigajlov su „ravnopravni glasovi".'},
  {front:'Što je psihološki realizam?',back:'Dostojevski specifičnost. Gdje Balzac opisuje društvo izvana, <b>Dostojevski ulazi u glavu lika</b>: paranoja, savjest, racionalizacija. Unutarnji monolog. <em>Prethodnica stream of consciousness i psihoanalize</em>.'},
  {front:'Zašto je žuta boja važna?',back:'Dominantna boja romana. <b>Raskoljnikovljev stan — žute tapete</b> („sobica kao lijes"). <b>Sonjina žuta kartica</b> (registracija prostitutki). Alonin žuti kaput. <em>Žuto = grad koji truje, trpi, iscrpljuje</em>.'},
  {front:'Koje je značenje broja 7?',back:'<b>Broj 7 — biblijski simbol savršenstva</b> (dani stvaranja). R. ubija u 7:00h, čeka 7 dana, ide 730 koraka. <em>Ironija: čin razdvajanja u broj cjeline</em>. Sonja ima 18 (3×6, broj nesavršenosti).'},
  {front:'Koji je ključni citat Sonjin savjet?',back:'<em>„Idi smjesta, sad odmah. Stani na raskršću, pokloni se narodu do zemlje i poljubi zemlju. Jer si i pred njom sagriješio."</em> — V. dio. Sonja poziva Raskoljnikova na <b>javnu ispovijed i pokoru</b>.'},
  {front:'Što R. priznaje Sonji o motivu?',back:'<em>„Želio sam biti Napoleon — to je sve. Nisam ubio zbog novca."</em> — V. dio. Priznanje: motiv nije bio utilitarni niti egzistencijalni, nego <b>samodokazivanje</b>. <em>Trenutak istine</em>.'},
  {front:'Kako završava roman?',back:'<b>Epilog u Sibiru</b>, 1,5 godinu nakon predaje. R. u katorgi (8 god.). Sonja ga prati. <em>San o bezumnim bakterijama</em> — proročanstvo totalitarizama 20. st. Buđenje: pada Sonji pred noge, plače. <em>„Nova priča počinje, priča o postupnom preporodu čovjeka."</em>'},
  {front:'Što je nihilizam u Rusiji 1860-ih?',back:'Filozofski stav omladine: <em>odbacivanje svih tradicionalnih vrijednosti</em> (crkva, država, obitelj, moral). Od lat. <em>nihil</em> = ništa. Ikona: <b>Bazarov</b> (Turgenjev, <em>Oci i sinovi</em>, 1862.). <b>Raskoljnikovljeva teorija je nihilistička</b>.'},
  {front:"Što je 'suvišan čovjek'?",back:'Tip lika ruske književnosti 19. st. — <em>talentirani, obrazovan plemić bez svrhe</em>. Onjegin prvi (H06). Slijede: Pečorin, Rudin, Oblomov, <b>Raskoljnikov</b>. Karakteristike: dosada, otuđenost. <em>R. je suvišni čovjek doveden do kriminala</em>.'},
  {front:'Koji je most H07 → H08?',back:'<b>Kafka — Preobražaj</b> (obvezatno 2026). Gregor Samsa i Raskoljnikov imaju: <em>alijenaciju</em>, <em>neprepoznavanje sebe</em>, <em>transformaciju iznutra</em>, <em>svijet koji ih više ne razumije</em>. Dostojevski kao preteča modernog proznog pisma.'}
];
var fcIdx=0, fcKnown=0, fcUnknown=0, fcOrder=[];

/* ══ DRILL STATE PERSISTENCE (v3.5) ══
   Pamti kartice i progress dok se korisnik mota kroz tabove.
   sessionStorage — resetira se na novi tab/window (svjesno, da ne
   blokira "novi krug" između dana). Za cross-session, switch na lsSave.
═════════════════════════════════════════════ */
var DRILL_SS_KEY = 'mt.hrv.h07.drill';

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
    document.getElementById('fc-term').textContent='Gotovo! 🎉';
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

/* ═══════════════════════════════════════════
   MATCHING GAME — djelo → autor
   ═══════════════════════════════════════════ */
var MG_PAIRS=[
  {l:'Raskoljnikov', r:"Bivši student, 'nadčovjek' po teoriji"},
  {l:'Sonja', r:'Moralna vertikala, čita evanđelje'},
  {l:'Porfirij', r:'Istražitelj, psihološki dvojnik'},
  {l:'Svidrigajlov', r:'Cinični dvojnik, ubija se'},
  {l:'Dunja', r:'Sestra, žrtvuje se za brata'},
  {l:'Razumihin', r:"Odani prijatelj, 'razum'"},
  {l:'Lužin', r:'Koristoljubivi odvjetnik'},
  {l:'Marmeladov', r:'Sonjin otac, pijani monolog'},
  {l:'Katerina', r:'Maćeha, tuberkuloza, ludi'}
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
        board.insertAdjacentHTML('afterend','<div class="mg-done" id="mg-done">🏆 SVI PAROVI SPARENI!</div>');
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

/* ═══════════════════════════════════════════
   KVIZ
   ═══════════════════════════════════════════ */
var QUIZ=[
  {q:'Tko je autor romana Zločin i kazna?', opts:['Lav Tolstoj','Ivan Turgenjev','Fjodor Dostojevski','Aleksandar Puškin'], correct:2, exp:'Fjodor Mihajlovič <b>Dostojevski</b> (1821.–1881.), veliki ruski realist i utemeljitelj psihološkog realizma.'},
  {q:'Kada izlazi roman Zločin i kazna?', opts:['1849.','1856.','1866.','1881.'], correct:2, exp:'<b>1866.</b> — serijalno objavljen u časopisu <em>Ruski vjesnik</em>.'},
  {q:'Koja je kompozicija Zločina i kazne?', opts:['5 činova + proslov','6 dijelova + epilog','7 poglavlja','4 knjige + pogovor'], correct:1, exp:'<b>6 dijelova + Epilog</b>. I–II: zločin i paranoja. III–IV: intelektualna igra i Sonja. V: priznanje. VI: predaja. Epilog: Sibir.'},
  {q:'Koga ubija Raskoljnikov sjekirom?', opts:['Svidrigajlova','Alonu Ivanovnu i Lizavetu','Porfirija','Lužina'], correct:1, exp:'<b>Alonu Ivanovnu</b> (planirano — lihvarica) i <b>Lizavetu</b> (neplanirano — zatekla ga je). Ironija: Lizaveta je bila Sonjina prijateljica.'},
  {q:"Kako se zove teorija u Raskoljnikovljevom članku 'O zločinu'?", opts:['Teorija revolucije','Teorija klase','Teorija nadčovjeka (obični vs neobični)','Teorija altruizma'], correct:2, exp:'<b>Teorija nadčovjeka</b>: obični ljudi su poslušni zakonu, neobični (Napoleon, Muhamed) imaju pravo prekršiti ga radi više ideje. <em>Anticipira Nietzschea 17 godina prije.</em>'},
  {q:'Što znači Raskoljnikov u prijevodu?', opts:['Vještak','Raskolnik, skismaatik','Razbojnik','Revolucionar'], correct:1, exp:'Od rus. <em>raskol</em> = razdvajanje. <b>Raskoljnik = onaj koji se odvojio</b> — od crkve, zajednice, Boga. Ime je program.'},
  {q:'Tko je Sonja Marmeladova?', opts:['Raskoljnikovljeva sestra','Prostitutka iz nužde, moralna vertikala','Alonina polusestra','Porfirijeva kći'], correct:1, exp:'<b>Sonja</b>, 18 godina, kći pijanca Marmeladova. Prisiljena na prostituciju da prehrani maćehu i polubraću. <em>Duboko pravoslavna — moralna vertikala romana</em>.'},
  {q:'Koju biblijsku scenu Sonja čita Raskoljnikovu?', opts:['Izgubljeni sin','Govor na gori','Uskrsnuće Lazara','Posljednja večera'], correct:2, exp:'<b>Uskrsnuće Lazara</b> (Ivanovo evanđelje, 11). <em>Lazar mrtav 4 dana — Krist ga zove iz groba</em>. Paralela: Raskoljnikov je duhovno mrtav.'},
  {q:"Tko je Raskoljnikovljev 'dvojnik' u romanu?", opts:['Porfirij','Razumihin','Svidrigajlov','Marmeladov'], correct:2, exp:'<b>Svidrigajlov</b> — ista filozofija „nadčovjeka", ali bez grižnje. <em>Ubija se — njegov kraj je što bi Raskoljnikov bio bez Sonje</em>.'},
  {q:'Tko je Porfirij Petrovič?', opts:['Raskoljnikovljev prijatelj','Istražitelj policije','Lužinov partner','Sonjin stric'], correct:1, exp:'<b>Porfirij</b> — istražitelj. Lukav. Zna od početka da je R. ubojica. Kroz <em>3 psihološka susreta</em> vodi ga do predaje. Savjetuje: sam se predaj.'},
  {q:'Što je polifonija?', opts:['Više glasova u horu','Bahtinov pojam: svaki lik nezavisan glas','Stihotvorba','Tipski likovi'], correct:1, exp:'<b>Mihail Bahtin</b> (1929.): u Dostojevskog <em>svaki lik ima nezavisni glas i ideju</em> — autor ne daje konačnu riječ. Suprotno monologičkom romanu.'},
  {q:'Koja je dominantna boja u romanu?', opts:['Crvena','Plava','Žuta','Zelena'], correct:2, exp:'<b>Žuta</b>: R.-ov stan („sobica kao lijes" s žutim tapetama), Sonjina žuta kartica, Alonin kaput, Peterburg u vrućini. <em>Grad koji truje</em>.'},
  {q:"Što je Sonjina 'žuta kartica'?", opts:['Diplomatska putovnica','Registracija prostitutki u carskoj Rusiji','Kreditna kartica','Ulaznica za kazalište'], correct:1, exp:'<b>Žuta kartica</b> — službena registracija prostitutki: osobni dokumenti, liječnički nadzor, lokacija. Fizički predmet ponižavanja.'},
  {q:'Gdje završava radnja u Epilogu?', opts:['Moskva','Sankt-Peterburg','Sibir','Odessa'], correct:2, exp:'<b>Sibir</b> — katorga (8 god.). Sonja ga prati. Pada joj pred noge, plače. <em>Suprotnost Peterburgu</em>: hladno, bijelo, čisto.'},
  {q:'Što R. sanja u Sibiru (prije buđenja)?', opts:['Ubojstvo lihvarice','Svoju majku','Bezumne bakterije — ideološki fanatizam','Katerinu'], correct:2, exp:'<b>San o bezumnim bakterijama</b>: ljudi se pobijaju u besmislenoj mržnji, svatko misli da zna istinu. <em>Dostojevski proročki predviđa totalitarizme 20. st.</em>'},
  {q:'Koji je ključni citat Sonje?', opts:["'Sve je dopušteno'","'Pati — to je put'","'Ja sam Napoleon'","'Patnja je besmislena'"], correct:1, exp:'Sonja <em>savjetuje patnju kao put iskupljenja</em>. <b>Ključno za Tezu 2 i 7</b>. Pravoslavna tradicija patnje kao duhovnog puta.'},
  {q:"Što je 'suvišan čovjek' u ruskoj književnosti?", opts:['Suvišak u romanu','Tip talentirana, bezciljnog plemića','Nepotreban dokument','Plesač u baletu'], correct:1, exp:'Tip: <em>talentirani, obrazovan plemić bez svrhe</em>. Prvi Onjegin (Puškin, H06). Slijede: Pečorin, Oblomov, <b>Raskoljnikov</b>. <em>R. je suvišan čovjek doveden do kriminala</em>.'},
  {q:'Što anticipira Raskoljnikovljeva teorija?', opts:['Marxizam','Nietzscheovog Übermensch-a (1883.)','Freudovu psihoanalizu','Darvinizam'], correct:1, exp:'<b>Nietzscheov Übermensch</b> (Tako je govorio Zaratustra, 1883.). Dostojevski kritizira nadčovjeka <em>17 godina prije</em> Nietzschea. Nietzsche: „Dostojevski je jedini psiholog od kojeg sam nešto naučio."'},
  {q:'Koja je posljednja rečenica romana?', opts:["'Život je san'","'Vrijeme je završilo'","'Ali tu počinje nova povijest... No to je već druga priča'","'Svi smo umrli'"], correct:2, exp:'<b>Otvoreni kraj</b>: <em>„No to je već druga priča"</em>. Dostojevski obećava nastavak o preporodu čovjeka — <b>nikada ga ne piše</b>. Iskupljenje je proces, ne događaj.'},
  {q:'Što je glavna razlika Dostojevskog od Tolstoja?', opts:['D. piše kraće romane','D. ima psihološki realizam + polifoniju; T. monološki epski roman','D. živi u Moskvi, T. u Peterburgu','D. je ateist, T. vjernik'], correct:1, exp:'<b>Dostojevski</b>: psihološki realizam, polifonija (svaki lik glas), introspektivno. <b>Tolstoj</b>: monološki epski roman (Rat i mir), društvena panorama, autoritativni narator.'}
];
var QUIZ_SHUFFLED=QUIZ.slice();
var qzState={idx:0,score:0,answered:[]};

function renderQuizIntro(){
  var el=document.getElementById('qz-app');
  el.innerHTML=\`
    <div class="qz-start">
      <div class="qz-start-ico">🧠</div>
      <h3>20 pitanja · bez vremena</h3>
      <p>Pitanja pokrivaju cijelo poglavlje: Dostojevski (Zločin i kazna), realizam kao epoha, teorija nadčovjeka, Sonja kao moralna vertikala, psihološki realizam, te ostali realisti (Balzac, Flaubert, Dickens, Tolstoj). Na kraju dobivaš ocjenu i objašnjenja.</p>
      <button class="fcb primary" onclick="qzStart()">Započni kviz →</button>
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
  fb.innerHTML=\`<b>\${ok?'✓ Točno!':'✗ Pogrešno.'}</b> \${q.exp}\`;
  var isLast=qzState.idx===QUIZ.length-1;
  document.getElementById('qz-nav').innerHTML=\`<button class="fcb primary" onclick="qzNext()">\${isLast?'Prikaži rezultat':'Sljedeće pitanje'} →</button>\`;
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

/* ══ SHARE ══ */
function qzShare(pct,score){
  var url='https://maturiraj.hr/skripte/hrvatski/h07';
  var text='Prošao/la sam kviz iz H07 · Realizam + Dostojevski na maturiraj.hr — '+score+'/'+QUIZ.length+' ('+pct+'%) 🌹';
  var fb=document.getElementById('qz-share-fb');

  // Try Web Share API (mobile)
  if(navigator.share){
    navigator.share({title:'Maturiraj.hr · H07 Kviz',text:text,url:url})
      .then(function(){if(fb)fb.textContent='Podijeljeno ✓'})
      .catch(function(){/* user cancelled, silent */});
    return;
  }
  // Fallback: copy to clipboard
  var full=text+'\\n'+url;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(full).then(function(){
      if(fb){fb.textContent='✓ Link kopiran! Zalijepi u WhatsApp/Instagram';setTimeout(function(){fb.textContent=''},3500)}
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
  if(pct>=90){grade='ODLIČAN';msg='Spreman si za esej o Zločinu i kazni — teorija i citati u rukama.';ico='🏆';scoreBand='great'}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno poznaješ gradivo. Doradi par tema.';ico='💪';scoreBand='good'}
  else if(pct>=60){grade='DOBAR';msg='Dobra osnova. Ponovi pojmovnik i Zločin i kazna deep-dive.';ico='📚';scoreBand='good'}
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
        <button class="fcb" onclick="sw(1)">← Zločin i kazna</button>
        <button class="fcb" onclick="sw(4)">📚 Pojmovnik</button>
      </div>
      <div id="qz-share-fb" style="margin-top:14px;font-family:var(--mono);font-size:11px;color:var(--green);min-height:16px"></div>
    </div>
  \`;

  // ═══ PLAYBOOK P3.2: REZULTAT REVEAL — najvažnija konverzijska taktika ═══
  // Vidljivo: osnovni rezultat + promašeni. Zakljucano: AI analiza, plan, vježbe.
  // Očekivani ROI iz playbooka: 12–18% Standard → Pro konverzija.
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
  if(qzState.score>=QUIZ.length*0.6){QUIZ_PASSED=true;lsSave('mt.hrv.h07.quiz_passed',true)}
  recomputeProgress();
  document.getElementById('qz-app').innerHTML=html;
}

/* ═══════════════════════════════════════════
   CHECKPOINT
   ═══════════════════════════════════════════ */
function cpToggle(el){
  el.classList.toggle('done');
  cpSave();
  cpUpdate();
  if(el.classList.contains('done')) soundOk();
}
function cpSave(){
  var states=[];
  document.querySelectorAll('.cp-item').forEach(function(el){states.push(el.classList.contains('done'))});
  lsSave('mt.hrv.h07.cp',states);
}
function cpLoad(){
  var states=lsLoad('mt.hrv.h07.cp',null);
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

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded',function(){
  // Explicitly hide cit-empty on load (CSS failsafe)
  var ce = document.getElementById('cit-empty');
  if(ce){ ce.style.display = 'none'; ce.classList.remove('on'); }
  _initTracking();
  track('page_view', {chapter: CURRENT_CHAPTER.code, days_to_matura: daysToMatura()}, 'navigation');

  checkRestore();
  cpLoad();
  var visited=lsLoad('mt.hrv.h07.visited',null);
  if(visited){VISITED_TABS=visited}
  QUIZ_PASSED=lsLoad('mt.hrv.h07.quiz_passed',false);
  VISITED_TABS[0]=true;
  updateTabBadges();
  recomputeProgress();

  // Breadcrumb: reflect current tab (v3.6)
  var currentTab = lsLoad('mt.hrv.h07.tab', 0);
  var bcTab = document.getElementById('bc-tab');
  if(bcTab && TAB_LABELS[currentTab]) bcTab.textContent = TAB_LABELS[currentTab];

  // Social proof + countdown
  renderSocialProof('social-proof', 'full');
  var daysLeft = daysToMatura();
  if(daysLeft <= 60 && daysLeft > 0){
    var cd = document.getElementById('countdown');
    if(cd){cd.style.display='flex';renderCountdown('countdown')}
  }

  // Citatnik search + filter — init BEFORE tab restore to populate cache
  _citInit();

  // Tab restore disabled — uzrokovalo timing probleme s _citInit()
  // Korisnik uvijek počinje na Tab 0

  // SVG hotspot tooltips
  _svgTtInit();

  // Mini-dijagnostika: restore dismissed state
  _diagRestore();

  /* ══ FEEDBACK MODAL: char counter ══ */
  var fbTa = document.getElementById('fb-message');
  var fbCnt = document.getElementById('fb-char-count');
  if(fbTa && fbCnt){
    fbTa.addEventListener('input', function(){
      var len = fbTa.value.length;
      fbCnt.textContent = len;
      fbCnt.parentElement.classList.toggle('over', len > 5000);
    });
  }

  /* ══ UPSELL IMPRESSION TRACKING (IntersectionObserver) ══ */
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

  /* ══ BACK-TO-TOP SCROLL LISTENER ══ */
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

  /* ══ KEYBOARD NAV ══ */
  document.addEventListener('keydown',function(e){
    // Esc: zatvori modal ili sidebar
    if(e.key==='Escape'){
      var fbModal=document.getElementById('fb-modal-backdrop');
      if(fbModal&&fbModal.classList.contains('show')){closeFeedbackModal();return}
      var modal=document.getElementById('modal-backdrop');
      if(modal&&modal.classList.contains('show')){closeModal();return}
      var sb=document.getElementById('sidebar');
      if(sb&&sb.classList.contains('mobile-open')){closeSidebar();return}
    }
    // Ctrl+K / Cmd+K → switch to Pojmovnik tab + focus search
    if((e.ctrlKey||e.metaKey)&&e.key==='k'){
      e.preventDefault();
      sw(4);
      setTimeout(function(){
        var s=document.getElementById('pojm-search');
        if(s){ s.focus(); s.select(); }
      },250);
      return;
    }
    var tag=(e.target&&e.target.tagName||'').toLowerCase();
    if(tag==='input'||tag==='textarea')return;
    if(e.target.classList&&e.target.classList.contains('tab')){
      if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
        e.preventDefault();
        var curr=parseInt(lsLoad('mt.hrv.h07.tab',0));
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

  if(!lsLoad('mt.hrv.h07.hinted',false)){
    setTimeout(function(){lsSave('mt.hrv.h07.hinted',true)},3000);
  }
});

/* ══ SCROLL PROGRESS BAR (H06 v2 upgrade) ══ */
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

</script>

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
    alert(\`🚧 Pretplata u izradi.\\n\\nUskoro: Stripe Checkout za \${tier === 'pro' ? 'Pro 19,99€' : 'Standard 9,99€'}/mj\\n\\n(Mock: postavljen tier na \${tier.toUpperCase()})\`);
    setTier(tier);
    closePaywall();
    location.reload();
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
/* CP_RESET_INJECTED */

function cpReset(){
  if(!confirm('Resetiraj sve označene stavke?')) return;
  var items = document.querySelectorAll('.cp-item');
  items.forEach(function(it){ it.classList.remove('done'); });
  try { localStorage.removeItem('mt.hrv.h07.cp'); } catch(e){}
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

</script>

<script>
/* WC_UPDATE_FALLBACK */

function wcUpdate(){
  var ta = document.getElementById('wc-ta') || document.getElementById('wc-textarea') || document.getElementById('wc-input');
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

</script>

<script>
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
}

</script>`;

const STYLES_CSS = `
/* ═══════════════════════════════════════════
   HRVATSKI DESIGN SYSTEM v1 — KRVAVO CRVENA
   Knjizevna, dramaticna, literary-editorial
   ═══════════════════════════════════════════ */
:root{
  /* ── BASE SURFACES: duboko crni/vinski ── */
  --bg:#0F0605;--sur:#180A08;--ele:#20100D;--card:#2A1612;--hov:#351B16;--inp:#180A08;
  --bd:rgba(220,50,47,.10);--bdm:rgba(220,50,47,.18);--bdl:rgba(220,50,47,.32);

  /* ── PRIMARY: KRVAVO CRVENA (zamjenjuje bronze) ── */
  --bronze:#DC322F;--bronze-l:#FF5A54;--bronze-d:#8B1E1B;
  --bd-br:rgba(220,50,47,.28);--dim-br:rgba(220,50,47,.10);--glow-br:rgba(220,50,47,.06);

  /* ── ACCENT: CREAM / PARCHMENT (zamjenjuje gold) ── */
  --gold:#E8C97A;--bd-go:rgba(232,201,122,.26);--dim-go:rgba(232,201,122,.09);

  /* ── PARCHMENT: starija kremastija nijansa ── */
  --parchment:#D4B98C;--bd-pa:rgba(212,185,140,.22);--dim-pa:rgba(212,185,140,.08);

  /* ── SECONDARY ACCENTS ── */
  --teal:#6B8E7F;--bd-t:rgba(107,142,127,.22);--dim-t:rgba(107,142,127,.09);
  --red:#C04244;--bd-r:rgba(192,66,68,.22);--dim-r:rgba(192,66,68,.10);--red-l:#E06264;
  --green:#6B9464;--bd-g:rgba(107,148,100,.22);--dim-g:rgba(107,148,100,.09);--green-l:#8BB584;
  --sienna:#A85940;--bd-s:rgba(168,89,64,.22);--dim-s:rgba(168,89,64,.10);--dark:#0F0605;

  /* ── TEXT TONES ── */
  --t1:#F5E6D3;   /* krem — glavni tekst */
  --t2:#B09684;   /* mekani smeđi — secondary */
  --t3:#6B5A4E;   /* pridjušeni — meta */
  --t4:#3A2A22;

  /* ── FONT STACK ── */
  --font:'Plus Jakarta Sans',system-ui,sans-serif;
  --serif:'Crimson Text',Georgia,serif;
  --display:'Cinzel',serif;
  --mono:'JetBrains Mono',monospace;

  --r1:4px;--r2:8px;--r3:12px;--r4:16px;--r5:24px;--sb:258px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{color:inherit;text-decoration:none}

/* ── ANIMIRANI BG: suptilni subtle kvadrati + glow ── */
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
.shell,.sidebar,.main{position:relative;z-index:1}
.shell{display:flex;min-height:100vh}

/* ══ KEYFRAMES ══ */
@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(220,50,47,.3)}50%{box-shadow:0 0 0 8px rgba(220,50,47,.0)}}
@keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes orbA{0%,100%{transform:scale(1) translate(0,0)}50%{transform:scale(1.15) translate(20px,-10px)}}
@keyframes orbB{0%,100%{transform:scale(1) translate(0,0)}50%{transform:scale(0.9) translate(-15px,12px)}}
@keyframes scanline{0%{top:-2px}100%{top:100%}}

/* ══ SIDEBAR ══ */
.sidebar{
  width:var(--sb);flex-shrink:0;background:var(--sur);
  border-right:1px solid var(--bdm);
  position:sticky;top:0;height:100vh;overflow-y:auto;
  display:flex;flex-direction:column;
  scrollbar-width:thin;scrollbar-color:var(--bdm) transparent;
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
  display:none;position:fixed;top:12px;left:12px;z-index:200;
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
.sb-item.completed{color:var(--green-l);position:relative}
.sb-item.completed::after{content:'✓';position:absolute;right:14px;font-family:var(--mono);font-size:11px;color:var(--green);opacity:.7}
.sb-item.completed:hover{background:var(--dim-g);border-left-color:var(--green)}
.sb-item.disabled{opacity:.35;cursor:not-allowed;position:relative}
.sb-item.disabled::after{content:'uskoro';position:absolute;right:12px;font-family:var(--mono);font-size:8px;letter-spacing:1px;color:var(--t3);text-transform:uppercase;background:var(--ele);padding:2px 6px;border-radius:3px;opacity:0;transition:opacity .2s}
.sb-item.disabled:hover::after{opacity:1}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.35}
.sb-item.active .sb-dot{opacity:1;box-shadow:0 0 4px currentColor}
.sb-item.done-chapter{color:var(--green)!important;border-left-color:var(--green)!important}
.sb-item.done-chapter .sb-dot{background:var(--green);opacity:1}
.sb-item.done-chapter::after{content:'✓';font-size:10px;margin-left:auto;color:var(--green);font-weight:700}
.sb-footer{margin-top:auto;padding:10px 14px;border-top:1px solid var(--bd);font-size:9px;color:var(--t3);line-height:1.75;font-family:var(--mono)}

/* ══ MAIN ══ */
.main{flex:1;min-width:0}
.content-wrap{max-width:860px;width:100%;margin:0 auto;padding:32px 44px 120px;animation:fadeUp .4s ease both}
.bc{display:flex;align-items:center;gap:8px;font-size:11px;color:var(--t3);margin-bottom:24px;font-family:var(--mono);flex-wrap:wrap}
.bc-sep{opacity:.3}.bc-cur{color:var(--bronze)}.bc-link{color:inherit;text-decoration:none}.bc-link:hover{opacity:.7}
.bc-tab{color:var(--gold);font-weight:600;padding:2px 8px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);letter-spacing:.3px}
@media(max-width:560px){.bc-tab-sep, .bc-tab{display:none}}

/* ══ AUTHORITY BOX (v3.6) ══
   NCVVO / authorship trust signal */
.auth-box{display:flex;gap:14px;padding:16px 18px;background:linear-gradient(135deg,rgba(80,200,120,.04),rgba(91,192,190,.04));border:1px solid var(--bd-g);border-left:3px solid var(--green);border-radius:var(--r3);margin:22px 0}
.auth-ico{font-size:26px;flex-shrink:0}
.auth-body{flex:1;min-width:0}
.auth-ttl{font-family:var(--display);font-size:12px;font-weight:700;color:var(--green);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px}
.auth-txt{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.55;margin-bottom:10px}
.auth-txt strong{color:var(--t1)}
.auth-link{display:inline-block;font-family:var(--mono);font-size:10.5px;color:var(--teal);text-decoration:none;padding:5px 11px;border:1px solid var(--bd-t);border-radius:var(--r1);letter-spacing:.5px;font-weight:600;transition:all .15s}
.auth-link:hover{background:var(--dim-t);transform:translateX(2px)}
.auth-links{display:flex;gap:8px;flex-wrap:wrap}
@media(max-width:560px){.auth-box{flex-direction:column;gap:8px}.auth-txt{font-size:13px}.auth-links{flex-direction:column}.auth-link{text-align:center}}

/* ══ MINI-DIJAGNOSTIKA "Mogu li ovo na maturi?" ══ */
.diag{margin:18px 0;border:1px solid var(--bd-go);border-radius:var(--r4);background:linear-gradient(135deg,var(--dim-go),rgba(232,201,122,.02));overflow:hidden;position:relative}
.diag::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(180deg,var(--gold),var(--bronze))}
.diag-intro, .diag-quiz, .diag-result{display:none;padding:22px 26px;animation:diagFade .35s ease}
.diag[data-state="intro"] .diag-intro{display:block}
.diag[data-state="quiz"] .diag-quiz{display:block}
.diag[data-state="result"] .diag-result{display:block}
.diag[data-state="dismissed"]{display:none}
@keyframes diagFade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
.diag-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:6px}
.diag-ttl{font-family:var(--display);font-size:19px;font-weight:600;color:var(--t1);letter-spacing:.4px;margin-bottom:8px}
.diag-desc{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.55;margin-bottom:16px}
.diag-desc strong{color:var(--gold)}
.diag-actions{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.diag-btn{padding:10px 18px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-radius:var(--r2);cursor:pointer;transition:all .18s;border:1px solid transparent}
.diag-btn-primary{background:linear-gradient(135deg,var(--gold),var(--bronze));color:var(--bg);border-color:var(--gold)}
.diag-btn-primary:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(232,201,122,.3)}
.diag-btn-ghost{background:transparent;color:var(--t3);border-color:var(--bd)}
.diag-btn-ghost:hover{color:var(--t1);border-color:var(--bd-br)}

/* QUIZ stanje */
.diag-progress{display:flex;align-items:center;gap:14px;margin-bottom:16px}
.diag-prog-bar{flex:1;height:4px;background:var(--bd);border-radius:2px;overflow:hidden}
.diag-prog-fill{height:100%;background:linear-gradient(90deg,var(--gold),var(--bronze));width:20%;transition:width .3s ease}
.diag-prog-txt{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px;white-space:nowrap}
.diag-q{font-family:var(--display);font-size:16px;font-weight:600;color:var(--t1);line-height:1.45;margin-bottom:14px;letter-spacing:.2px}
.diag-opts{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}
.diag-opt{padding:11px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);font-family:var(--serif);font-size:13.5px;text-align:left;cursor:pointer;transition:all .15s;line-height:1.45}
.diag-opt:hover{border-color:var(--bd-br);background:var(--hov);transform:translateX(2px)}
.diag-opt:disabled{cursor:default;transform:none}
.diag-opt.diag-correct{background:var(--dim-g);border-color:var(--green);color:var(--green-l)}
.diag-opt.diag-wrong{background:var(--dim-r);border-color:var(--red);color:var(--red-l);opacity:.85}
.diag-opt.diag-correct::after{content:' ✓';color:var(--green);font-weight:700;font-family:var(--mono)}
.diag-opt.diag-wrong::after{content:' ✗';color:var(--red);font-weight:700;font-family:var(--mono)}
.diag-skip-row{text-align:right}
.diag-skip-q{background:transparent;border:none;color:var(--t3);font-family:var(--mono);font-size:10px;letter-spacing:.5px;cursor:pointer;text-decoration:underline;text-decoration-style:dotted;text-underline-offset:3px;padding:4px 0}
.diag-skip-q:hover{color:var(--t2)}

/* REZULTAT stanje */
.diag-res-score{display:flex;align-items:baseline;gap:10px;margin-bottom:14px}
.diag-res-num{font-family:var(--display);font-size:42px;font-weight:700;color:var(--gold);letter-spacing:1px;line-height:1}
.diag-res-lbl{font-family:var(--mono);font-size:11px;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase}
.diag-res-msg{font-family:var(--display);font-size:16px;color:var(--t1);margin-bottom:8px;letter-spacing:.3px}
.diag-res-rec{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6;margin-bottom:18px;padding:12px 14px;background:var(--bg);border-left:2px solid var(--bronze);border-radius:0 var(--r2) var(--r2) 0}
.diag-res-rec b{color:var(--bronze-l);font-weight:600}
.diag-res-rec a{color:var(--bronze-l);text-decoration:none;border-bottom:1px dashed var(--bd-br)}
.diag-res-rec a:hover{color:var(--gold);border-bottom-color:var(--gold);cursor:pointer}

@media(max-width:560px){
  .diag-intro, .diag-quiz, .diag-result{padding:18px 18px}
  .diag-ttl{font-size:17px}
  .diag-q{font-size:14.5px}
  .diag-actions{flex-direction:column;align-items:stretch}
  .diag-btn{text-align:center;width:100%}
  .diag-res-num{font-size:36px}
}

/* ══ ANTIGONA vs KREONT — comparison table ══ */
.cmp-tbl-wrap{margin:18px 0;border:1px solid var(--bd);border-radius:var(--r4);overflow:hidden;background:var(--sur)}
.cmp-tbl-hint{padding:12px 18px;background:var(--dim-go);border-bottom:1px solid var(--bd-go);font-family:var(--serif);font-size:13px;color:var(--t1);line-height:1.5}
.cmp-tbl-hint b{color:var(--gold);font-weight:600}
.cmp-tbl{width:100%;border-collapse:collapse;font-family:var(--serif)}
.cmp-tbl th, .cmp-tbl td{padding:11px 16px;text-align:left;font-size:13.5px;line-height:1.55;border-bottom:1px solid var(--bd);vertical-align:top}
.cmp-tbl th{font-family:var(--display);font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t2);background:var(--bg);border-bottom:2px solid var(--bd)}
.cmp-th-cat{width:140px;color:var(--t3)!important;font-size:9.5px!important;letter-spacing:1.8px!important}
.cmp-th-a{color:var(--red-l)!important;border-bottom-color:var(--red)!important}
.cmp-th-b{color:var(--bronze-l)!important;border-bottom-color:var(--bronze)!important}
.cmp-tbl .cmp-cat{color:var(--t3);font-family:var(--mono);font-size:10.5px;letter-spacing:.5px;text-transform:uppercase;font-weight:700;background:var(--bg);width:140px;white-space:nowrap}
.cmp-tbl td b{color:var(--gold);font-weight:600}
.cmp-tbl td em{color:var(--bronze-l);font-style:italic}
.cmp-tbl tbody tr:last-child td{border-bottom:none}
.cmp-tbl tbody tr:hover{background:var(--card)}
.cmp-conc{background:linear-gradient(135deg,var(--dim-r),rgba(220,50,47,.02))!important;color:var(--t1)!important;font-style:italic;text-align:center;padding:14px 18px!important}
.cmp-conc em{color:var(--red-l)!important;font-weight:600}
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

/* ══ QUICK REFERENCE / CHEAT CARD ══
   Pred-ispit ponavljanje, kompaktni printable summary */
.cheat-card{background:linear-gradient(135deg,rgba(232,201,122,.04),rgba(220,50,47,.02));border:1px solid var(--bd-go);border-radius:var(--r4);padding:0;margin:18px 0;overflow:hidden}
.cheat-hdr{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:14px 22px;background:linear-gradient(135deg,var(--dim-go),rgba(232,201,122,.04));border-bottom:1px solid var(--bd-go);flex-wrap:wrap}
.cheat-hdr-l{flex:1;min-width:0}
.cheat-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:3px}
.cheat-ttl{font-family:var(--display);font-size:17px;font-weight:600;color:var(--t1);letter-spacing:.4px}
.cheat-print{padding:8px 14px;background:transparent;color:var(--gold);border:1px solid var(--bd-go);border-radius:var(--r1);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .15s;white-space:nowrap;flex-shrink:0}
.cheat-print:hover{background:var(--dim-go);transform:translateY(-1px)}
.cheat-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--bd)}
.cheat-col{padding:16px 22px;background:var(--sur)}
.cheat-col-wide{grid-column:1 / -1}
.cheat-col-warn{background:linear-gradient(135deg,rgba(220,50,47,.04),transparent)}
.cheat-col-ttl{font-family:var(--display);font-size:11px;font-weight:600;letter-spacing:1.5px;color:var(--bronze-l);text-transform:uppercase;margin-bottom:11px;padding-bottom:7px;border-bottom:1px dashed var(--bd-br)}
.cheat-col-warn .cheat-col-ttl{color:var(--red-l);border-bottom-color:rgba(220,50,47,.25)}
.cheat-tbl{width:100%;border-collapse:collapse;font-family:var(--serif);font-size:13px;color:var(--t1)}
.cheat-tbl td{padding:5px 0;border-bottom:1px dashed rgba(180,160,130,.12);vertical-align:top}
.cheat-tbl td:first-child{padding-right:14px;color:var(--gold);font-family:var(--mono);font-size:11px;white-space:nowrap;width:1%}
.cheat-tbl tr:last-child td{border-bottom:none}
.cheat-list{list-style:none;display:flex;flex-direction:column;gap:6px;padding:0;margin:0;font-family:var(--serif);font-size:13.5px;color:var(--t1);line-height:1.55}
.cheat-list li{padding-left:14px;position:relative}
.cheat-list li::before{content:'▸';position:absolute;left:0;color:var(--bronze-l);font-size:10px;top:1px}
.cheat-list b{color:var(--gold);font-weight:600}
.cheat-list-warn li::before{content:'✗';color:var(--red-l)}
.cheat-grid-inner{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.cheat-mini-ttl{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;color:var(--bronze);text-transform:uppercase;margin-bottom:5px}
.cheat-mini-txt{font-family:var(--serif);font-size:13px;color:var(--t1);line-height:1.55}
.cheat-mini-txt b{color:var(--gold)}
.cheat-vs{display:inline-block;padding:1px 6px;background:var(--dim-r);color:var(--red-l);font-family:var(--mono);font-size:9px;font-weight:700;border-radius:3px;margin:0 4px;letter-spacing:.5px}
.cheat-steps{list-style:none;counter-reset:cheat-step;padding:0;margin:0;display:flex;flex-direction:column;gap:7px;font-family:var(--serif);font-size:13.5px;color:var(--t1);line-height:1.5}
.cheat-steps li{counter-increment:cheat-step;padding-left:30px;position:relative}
.cheat-steps li::before{content:counter(cheat-step);position:absolute;left:0;top:1px;width:22px;height:22px;display:flex;align-items:center;justify-content:center;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:50%;font-family:var(--mono);font-size:10.5px;font-weight:700;color:var(--gold)}
.cheat-steps b{color:var(--gold);font-weight:600}
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

/* ══ MODULE FOOTER — authorship + last updated (v3.6) ══ */
.mod-foot{margin-top:48px;padding:20px 0 10px;border-top:1px solid var(--bd);text-align:center;font-family:var(--mono);font-size:10.5px;color:var(--t3);letter-spacing:.3px;line-height:1.7}
.mod-foot b{color:var(--t2);font-weight:600}
.mod-foot a{color:var(--bronze-l);text-decoration:none;border-bottom:1px dashed var(--bd-br);transition:all .15s}
.mod-foot a:hover{color:var(--gold);border-bottom-color:var(--gold)}
.mod-foot .foot-line{margin:2px 0}
.foot-feedback{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:10px!important;padding-top:10px;border-top:1px dashed var(--bd)}
.foot-fb-q{color:var(--t2)}
.foot-fb-btn{padding:5px 11px;background:var(--dim-br);color:var(--bronze-l);border:1px solid var(--bd-br);border-radius:var(--r1);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.5px;cursor:pointer;transition:all .15s}
.foot-fb-btn:hover{background:var(--hov);color:var(--gold);border-color:var(--bd-go)}
.foot-fb-or{color:var(--t3);opacity:.8}
.foot-fb-mail{color:var(--teal)!important;border-bottom-color:var(--bd-t)!important}
.foot-fb-mail:hover{color:var(--teal)!important}
@media(max-width:560px){
  .foot-feedback{gap:6px;flex-direction:column}
  .foot-fb-or{display:none}
}

/* ══ TABS ══ */
.tabs{display:flex;gap:0;margin-bottom:28px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);padding:3px;width:fit-content;position:relative;max-width:100%;overflow-x:auto;scrollbar-width:none}
.tabs::-webkit-scrollbar{display:none}
.tab{padding:7px 16px;font-size:11px;font-weight:600;color:var(--t2);cursor:pointer;border-radius:5px;transition:all .18s;white-space:nowrap;font-family:var(--mono);position:relative;z-index:1;background:transparent;border:none;line-height:normal}
.tab:hover{color:var(--t1)}
.tab:focus-visible{outline:2px solid var(--bronze);outline-offset:2px}
.tab.on{background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));color:#0F0605;font-weight:700;box-shadow:0 2px 18px rgba(220,50,47,.32)}
.tab-badge{display:inline-flex;align-items:center;justify-content:center;margin-left:5px;font-size:9px;color:var(--green);opacity:.9;font-weight:700}
.tab.on .tab-badge{color:#0F0605;opacity:.55}
.layer{display:none;animation:fadeUp .25s ease both}.layer.on{display:block}

/* ══ HERO ══ */
.hero{
  margin-bottom:28px;padding:36px 40px;
  background:var(--card);border:1px solid var(--bdm);
  border-radius:22px;position:relative;overflow:hidden;
}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--bronze-d),var(--bronze),var(--gold),var(--parchment),transparent)}
.hero::after{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--bronze-d),var(--bronze),var(--gold),var(--parchment),transparent);filter:blur(8px);opacity:.5}
.hero-orb-a{position:absolute;top:-80px;right:-60px;width:360px;height:360px;background:radial-gradient(circle,rgba(220,50,47,.07) 0%,transparent 65%);border-radius:50%;pointer-events:none;animation:orbA 8s ease-in-out infinite}
.hero-orb-b{position:absolute;bottom:-60px;left:10%;width:260px;height:260px;background:radial-gradient(circle,rgba(232,201,122,.04) 0%,transparent 65%);border-radius:50%;pointer-events:none;animation:orbB 10s ease-in-out infinite}
.hero-chapter{
  display:inline-flex;align-items:center;gap:8px;
  font-family:var(--mono);font-size:9px;color:var(--bronze);
  letter-spacing:3px;margin-bottom:14px;text-transform:uppercase;
}
.hero-chapter::before{content:'';display:inline-block;width:24px;height:1px;background:var(--bronze);opacity:.5}
.hero-chapter::after{content:'';display:inline-block;width:24px;height:1px;background:var(--bronze);opacity:.5}
.hero-title{font-family:var(--display);font-size:30px;font-weight:700;color:var(--t1);letter-spacing:.5px;line-height:1.12;margin-bottom:10px}
.hero-title span{background:linear-gradient(135deg,var(--bronze-l),var(--gold),var(--parchment));background-size:200% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 4s linear infinite}
.hero-sub{font-family:var(--serif);font-size:15.5px;color:var(--t2);margin-bottom:20px;line-height:1.8;font-style:italic;max-width:580px}
.hero-meta{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px}
.hchip{font-family:var(--mono);font-size:9.5px;padding:4px 11px;border-radius:var(--r1);border:1px solid;letter-spacing:.5px;font-weight:600}
.hchip.br{background:var(--dim-br);color:var(--bronze-l);border-color:var(--bd-br)}
.hchip.go{background:var(--dim-go);color:var(--gold);border-color:var(--bd-go)}
.hchip.te{background:var(--dim-t);color:var(--teal);border-color:var(--bd-t)}
.hero-progress-row{display:flex;align-items:center;gap:12px}
.pt{height:3px;background:var(--bd);border-radius:2px;overflow:visible;flex:1;max-width:400px;position:relative}
.pb{height:100%;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));background-size:200% 100%;border-radius:2px;transition:width .8s cubic-bezier(.4,0,.2,1);animation:shimmer 2.5s linear infinite;position:relative}
.pb::after{content:'';position:absolute;right:-4px;top:-4px;width:10px;height:10px;background:var(--gold);border-radius:50%;box-shadow:0 0 12px var(--gold),0 0 4px #fff}
.prog-label{font-family:var(--mono);font-size:10px;color:var(--t3)}

/* ══ PILLS ══ */
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:22px}
.pill{display:inline-flex;align-items:center;padding:3px 10px;border-radius:var(--r1);font-size:10px;font-weight:700;font-family:var(--mono);border:1px solid;letter-spacing:.5px}
.p-br{background:var(--dim-br);color:var(--bronze-l);border-color:var(--bd-br)}
.p-go{background:var(--dim-go);color:var(--gold);border-color:var(--bd-go)}
.p-t{background:var(--dim-t);color:var(--teal);border-color:var(--bd-t)}
.p-r{background:var(--dim-r);color:var(--red);border-color:var(--bd-r)}
.p-g{background:var(--dim-g);color:var(--green);border-color:var(--bd-g)}
.p-pa{background:var(--dim-pa);color:var(--parchment);border-color:var(--bd-pa)}

/* ══ LAYOUT UTILS ══ */
.slbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:3px;color:var(--t3);text-transform:uppercase;margin-bottom:13px;padding-bottom:8px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:8px}
.slbl::before{content:'//';color:var(--bronze-d)}
.divider{border:none;border-top:1px solid var(--bd);margin:28px 0}
.prose{font-family:var(--serif);font-size:15.5px;line-height:1.95;color:rgba(245,230,211,.82);margin-bottom:14px}
.prose b,.prose strong{color:var(--t1);font-weight:600}
.prose em{color:var(--bronze-l);font-style:italic}
.sec-hdr{display:flex;align-items:center;gap:14px;margin:32px 0 18px}
.sec-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
.sec-badge{font-family:var(--display);font-size:9px;font-weight:600;letter-spacing:2px;color:var(--bronze);text-transform:uppercase;padding:5px 16px;border:1px solid var(--bd-br);border-radius:20px;background:var(--dim-br);white-space:nowrap}

/* ══ STAT GRID ══ */
.sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(165px,1fr));gap:10px;margin-bottom:24px}
.sc{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:15px 16px;transition:border-color .15s,transform .2s,box-shadow .2s;cursor:default}
.sc:hover{border-color:var(--bd-br);transform:translateY(-3px);box-shadow:0 8px 24px rgba(220,50,47,.08)}
.sc-ico{font-family:var(--mono);font-size:9.5px;font-weight:700;padding:3px 9px;border-radius:var(--r1);display:inline-flex;margin-bottom:11px}
.si-br{background:var(--dim-br);color:var(--bronze)}.si-go{background:var(--dim-go);color:var(--gold)}
.si-t{background:var(--dim-t);color:var(--teal)}.si-g{background:var(--dim-g);color:var(--green)}
.si-r{background:var(--dim-r);color:var(--red)}.si-s{background:var(--dim-s);color:var(--sienna)}
.sc-name{font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.3;font-family:var(--serif)}
.sc-desc{font-size:11px;color:var(--t2);line-height:1.55;font-family:var(--mono)}

/* ══ BOX TYPES ══ */
.box-int{background:linear-gradient(135deg,rgba(220,50,47,.08),rgba(232,201,122,.03));border:1px solid var(--bd-br);border-radius:var(--r4);padding:18px 22px;margin:14px 0;position:relative;overflow:hidden}
.box-int::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(180deg,var(--bronze),var(--gold));border-radius:2px 0 0 2px}
.box-int-lbl{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2.5px;color:var(--bronze);text-transform:uppercase;margin-bottom:9px;display:flex;align-items:center;gap:8px}
.box-int-txt{font-family:var(--serif);font-size:14.5px;color:var(--t1);line-height:1.9}
.box-int-txt em{color:var(--bronze-l);font-style:italic}.box-int-txt strong{color:var(--gold);font-weight:600}

.box-key{background:linear-gradient(135deg,rgba(212,185,140,.08),rgba(220,50,47,.02));border:1px solid var(--bd-pa);border-radius:var(--r4);padding:17px 22px;margin:14px 0;position:relative;overflow:hidden}
.box-key::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--parchment);border-radius:2px 0 0 2px}
.box-key-lbl{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2.5px;color:var(--parchment);text-transform:uppercase;margin-bottom:9px;display:flex;align-items:center;gap:8px}
.box-key-txt{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.85}
.box-key-txt strong{color:var(--parchment)}

.box-warn{background:rgba(192,66,68,.07);border:1px solid var(--bd-r);border-radius:var(--r3);padding:14px 18px;margin:13px 0;display:flex;gap:13px;position:relative;overflow:hidden}
.box-warn::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--red)}
.bw-ico{font-size:17px;flex-shrink:0;margin-top:1px}.bw-body{flex:1}
.bw-title{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--red);margin-bottom:5px}
.bw-txt{font-family:var(--serif);font-size:13.5px;line-height:1.78;color:var(--t2)}.bw-txt strong{color:var(--red)}

.box-signal{background:linear-gradient(135deg,rgba(232,201,122,.08),rgba(220,50,47,.03));border:1px solid var(--bd-go);border-radius:var(--r4);padding:16px 22px;margin:14px 0;position:relative;overflow:hidden}
.box-signal::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--gold)}
.box-signal-lbl{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2.5px;color:var(--gold);text-transform:uppercase;margin-bottom:9px;display:flex;align-items:center;gap:8px}
.box-signal-txt{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.85}
.box-signal-txt strong{color:var(--gold)}

.box-20{background:linear-gradient(135deg,rgba(107,148,100,.08),rgba(107,142,127,.03));border:1px solid var(--bd-g);border-radius:var(--r4);padding:20px 24px;margin:16px 0;position:relative;overflow:hidden}
.box-20::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--green)}
.b20-lbl{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2.5px;color:var(--green);text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:8px;padding-bottom:11px;border-bottom:1px solid var(--bd-g)}
.b20-list{list-style:none;display:flex;flex-direction:column;gap:0;margin:0;padding:0;counter-reset:b20-counter}
.b20-list.b20-numbered{gap:0}
.b20-item{display:flex;align-items:flex-start;gap:13px;font-family:var(--serif);font-size:14.5px;color:var(--t1);line-height:1.65;padding:11px 0;border-bottom:1px dashed rgba(107,148,100,.18)}
.b20-item:last-child{border-bottom:none;padding-bottom:2px}
.b20-item:first-child{padding-top:2px}
.b20-dot{width:6px;height:6px;background:var(--green);border-radius:1px;flex-shrink:0;margin-top:8px;transform:rotate(45deg)}
.b20-num{flex-shrink:0;width:26px;height:26px;display:flex;align-items:center;justify-content:center;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:50%;font-family:var(--mono);font-size:11px;font-weight:700;color:var(--green);letter-spacing:0;margin-top:1px}
.b20-txt{flex:1;min-width:0}
.b20-txt b{color:var(--gold);font-weight:600}
.b20-txt em{color:var(--bronze-l);font-style:italic}
@media(max-width:560px){
  .b20-item{font-size:13.5px;gap:11px;padding:10px 0}
  .b20-num{width:24px;height:24px;font-size:10.5px}
  .box-20{padding:16px 18px}
}

.box-tip{background:rgba(107,142,127,.07);border:1px solid var(--bd-t);border-radius:var(--r3);padding:14px 18px;margin:13px 0;display:flex;gap:13px;position:relative;overflow:hidden}
.box-tip::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--teal)}
.bt-ico{font-size:16px;flex-shrink:0;margin-top:1px}.bt-body{flex:1}
.bt-title{font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--teal);margin-bottom:5px}
.bt-txt{font-family:var(--serif);font-size:13.5px;line-height:1.78;color:var(--t2)}.bt-txt strong{color:var(--teal)}

/* ══ CONCEPTS TABLE ══ */
.con{border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin:13px 0 22px}
.cr{display:grid;grid-template-columns:minmax(160px,36%) 1fr;border-bottom:1px solid var(--bd);transition:background .1s}
.cr:last-child{border-bottom:none}.cr:nth-child(even){background:rgba(220,50,47,.02)}
.cr:hover{background:var(--hov)}
.ck{padding:11px 14px;font-family:var(--mono);font-size:11px;font-weight:600;border-right:1px solid var(--bd);position:relative;padding-left:19px}
.ck::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:0 2px 2px 0}
.ck.br{color:var(--bronze-l)}.ck.br::before{background:var(--bronze)}
.ck.go{color:var(--gold)}.ck.go::before{background:var(--gold)}
.ck.te{color:var(--teal)}.ck.te::before{background:var(--teal)}
.ck.re{color:var(--red)}.ck.re::before{background:var(--red)}
.ck.ge{color:var(--green)}.ck.ge::before{background:var(--green)}
.ck.pa{color:var(--parchment)}.ck.pa::before{background:var(--parchment)}
.cv{padding:11px 16px;font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.65}

/* ══ TABLE ══ */
.tbl{overflow-x:auto;margin:12px 0 18px;border:1px solid var(--bdm);border-radius:var(--r3)}
table{width:100%;border-collapse:collapse;font-size:13px}
th{padding:9px 14px;background:var(--sur);color:var(--bronze);font-family:var(--display);font-size:8px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;text-align:left;border-bottom:1px solid var(--bdm);white-space:nowrap}
td{padding:10px 14px;color:var(--t2);border-bottom:1px solid var(--bd);line-height:1.65;vertical-align:top;font-family:var(--serif);font-size:13.5px}
tr:last-child td{border-bottom:none}
tr:nth-child(even) td{background:rgba(220,50,47,.018)}
tr:hover td{background:var(--hov)}
td b{color:var(--t1)}

/* ══ COMPARE ══ */
.cmp{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:13px 0 20px}
.cmp-c{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;transition:border-color .15s}
.cmp-c:hover{border-color:var(--bd-br)}
.cmp-h{padding:10px 14px;font-family:var(--display);font-size:8.5px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;border-bottom:1px solid var(--bd)}
.cmp-h.br{background:var(--dim-br);color:var(--bronze);border-bottom-color:var(--bd-br)}
.cmp-h.go{background:var(--dim-go);color:var(--gold);border-bottom-color:var(--bd-go)}
.cmp-h.te{background:var(--dim-t);color:var(--teal);border-bottom-color:var(--bd-t)}
.cmp-h.re{background:var(--dim-r);color:var(--red);border-bottom-color:var(--bd-r)}
.cmp-h.ge{background:var(--dim-g);color:var(--green);border-bottom-color:var(--bd-g)}

/* ══ TIMELINE ══ */

/* ══ SVG CANVAS ══ */
  background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r4);
  padding:22px;margin:15px 0;display:flex;flex-direction:column;align-items:center;gap:14px;
  position:relative;overflow:hidden;
}

/* ══ MATURA BLOCK ══ */

/* ══ CHECKPOINT ══ */
.cp-item{display:flex;align-items:flex-start;gap:11px;font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6;cursor:pointer;transition:color .15s;user-select:none}
.cp-item:hover{color:var(--t1)}
.cp-item.done{color:var(--green)}
.cp-item.done .cp-check{background:var(--green);border-color:var(--green)}
.cp-item.done .cp-check::after{content:'✓';font-size:11px;color:#0F0605;font-weight:700}
.cp-pct{font-size:13px;font-weight:700;color:var(--green);font-family:var(--mono)}

/* ══ QUIZ ══ */

/* ══ DRILL ══ */

/* ══ PRIORITY RADAR ══ */

/* ══ STRATEGY CARDS ══ */

/* ══ CONNECT NEXT ══ */

/* ══ CTA ══ */

/* ══ NAV BUTTONS ══ */
.nav-row{display:flex;justify-content:space-between;align-items:center;margin-top:32px;padding-top:20px;border-top:1px solid var(--bd)}
.nb{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t2);cursor:pointer;padding:9px 14px;border:1px solid var(--bdm);border-radius:var(--r2);background:transparent;transition:all .15s}
.nb:hover{color:var(--t1);background:var(--card);border-color:var(--bdl)}
.nb.primary{background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));color:#0F0605;border-color:transparent;font-weight:700;box-shadow:0 3px 16px rgba(220,50,47,.24)}
.nb.primary:hover{opacity:.88;transform:translateY(-1px)}

/* ══ ACCESSIBILITY: SR-only utility ══ */
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}

/* ══ ACCESSIBILITY: reduced motion ══ */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .pb, .sb-prog-bar, .qz-bar-f {
    animation: none !important;
  }
}

/* ══ BACK-TO-TOP FLOATING BUTTON ══ */
.btt{
  position:fixed;right:24px;bottom:24px;z-index:90;
  width:44px;height:44px;border-radius:50%;
  background:linear-gradient(135deg,var(--bronze-d),var(--bronze));
  border:none;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  font-family:var(--mono);font-size:18px;font-weight:700;color:#0F0605;
  box-shadow:0 6px 24px rgba(220,50,47,.3),0 2px 8px rgba(0,0,0,.4);
  opacity:0;visibility:hidden;transform:translateY(12px) scale(.9);
  transition:all .25s cubic-bezier(.4,0,.2,1);
}
.btt.show{opacity:1;visibility:visible;transform:translateY(0) scale(1)}
.btt:hover{transform:translateY(-2px) scale(1.05);box-shadow:0 10px 30px rgba(220,50,47,.4)}
.btt:active{transform:translateY(0) scale(.95)}
@media(max-width:720px){.btt{right:16px;bottom:16px;width:40px;height:40px;font-size:16px}}

/* ══ MODAL (email capture) ══ */
.modal-backdrop{position:fixed;inset:0;background:rgba(15,6,5,.82);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);z-index:300;display:none;align-items:center;justify-content:center;padding:20px}
.modal-backdrop.show{display:flex;animation:fadeIn .2s ease}
.modal{max-width:460px;width:100%;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);padding:32px 30px;position:relative;box-shadow:0 30px 80px rgba(0,0,0,.5);animation:fadeUp .3s ease}
.modal::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,var(--bronze),var(--gold),transparent);border-radius:var(--r4) var(--r4) 0 0}
.modal-close{position:absolute;top:14px;right:14px;width:30px;height:30px;border:none;background:transparent;color:var(--t3);cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;border-radius:50%;transition:all .15s}
.modal-close:hover{background:var(--hov);color:var(--t1)}
.modal-ico{width:52px;height:52px;border-radius:var(--r3);background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:16px;box-shadow:0 4px 18px rgba(220,50,47,.2)}
.modal-eye{font-family:var(--mono);font-size:9.5px;letter-spacing:2.5px;text-transform:uppercase;color:var(--bronze);margin-bottom:6px;display:flex;align-items:center;gap:7px}
.modal-eye::before{content:'';display:inline-block;width:20px;height:1px;background:var(--bronze);opacity:.5}
.modal-title{font-family:var(--display);font-size:22px;font-weight:700;color:var(--t1);letter-spacing:.3px;line-height:1.2;margin-bottom:10px}
.modal-desc{font-family:var(--serif);font-size:14.5px;color:var(--t2);line-height:1.6;margin-bottom:20px}
.modal-desc strong{color:var(--t1)}
.modal-form{display:flex;gap:8px;margin-bottom:14px}
.modal-input{flex:1;padding:12px 14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);font-family:var(--font);font-size:14px;outline:none;transition:border-color .2s}
.modal-input:focus{border-color:var(--bd-br)}
.modal-input::placeholder{color:var(--t3)}
.modal-submit{padding:12px 20px;background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;white-space:nowrap;box-shadow:0 3px 12px rgba(220,50,47,.24)}
.modal-submit:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 5px 18px rgba(220,50,47,.32)}
.modal-submit:disabled{opacity:.5;cursor:not-allowed}
.modal-preview{padding:12px 14px;background:var(--sur);border:1px solid var(--bd);border-radius:var(--r2);font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5;margin-bottom:14px}
.modal-preview strong{color:var(--gold);display:block;margin-bottom:4px;font-family:var(--display);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;font-weight:700}
.modal-small{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.3px;text-align:center}
.modal-msg{padding:10px 14px;border-radius:var(--r2);font-family:var(--serif);font-size:13.5px;text-align:center;margin-bottom:12px;display:none}
.modal-msg.show{display:block}
.modal-msg.success{background:var(--dim-g);border:1px solid var(--bd-g);color:var(--green)}
.modal-msg.error{background:var(--dim-r);border:1px solid var(--bd-r);color:var(--red)}
@media(max-width:560px){
  .modal{padding:26px 22px}
  .modal-form{flex-direction:column}
  .modal-submit{width:100%}
}

/* ══ REZULTAT REVEAL (playbook P3.2) ══ */
.reveal-lock{margin-top:28px;background:linear-gradient(135deg,rgba(220,50,47,.08),rgba(232,201,122,.04));border:1px solid var(--bd-br);border-radius:var(--r4);padding:28px;position:relative;overflow:hidden}
.reveal-lock::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold),var(--bronze-d))}
.reveal-lock[data-band="low"]{background:linear-gradient(135deg,rgba(220,50,47,.12),rgba(220,50,47,.04));border-color:var(--bd-r)}
.reveal-lock-head{text-align:center;margin-bottom:20px}
.reveal-lock-eye{font-family:var(--mono);font-size:10px;letter-spacing:3px;color:var(--bronze);text-transform:uppercase;margin-bottom:8px;font-weight:700}
.reveal-lock-title{font-family:var(--display);font-size:20px;font-weight:700;color:var(--t1);letter-spacing:.3px;line-height:1.3}
.reveal-lock-items{display:flex;flex-direction:column;gap:10px;margin-bottom:22px}
.reveal-lock-item{display:flex;align-items:center;gap:14px;padding:14px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);position:relative;opacity:.95}
.reveal-lock-item::before{content:'';position:absolute;top:0;left:0;bottom:0;width:3px;background:var(--bronze);border-radius:var(--r2) 0 0 var(--r2);opacity:.6}
.rli-ico{font-size:22px;flex-shrink:0;filter:grayscale(.3) opacity(.8)}
.rli-body{flex:1;min-width:0}
.rli-title{font-family:var(--serif);font-size:14.5px;font-weight:600;color:var(--t1);margin-bottom:3px;line-height:1.35}
.rli-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5}
.rli-lock{flex-shrink:0}
.rli-badge{display:inline-flex;align-items:center;padding:3px 9px;border-radius:var(--r1);font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;border:1px solid}
.rli-badge.pro{background:var(--dim-br);color:var(--bronze-l);border-color:var(--bd-br)}
.rli-badge.standard{background:var(--dim-t);color:var(--teal);border-color:var(--bd-t)}
.reveal-lock-cta{text-align:center}
.reveal-lock-btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 28px;background:linear-gradient(135deg,var(--bronze-d),var(--bronze),var(--gold));color:#0F0605;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;transition:all .25s;text-decoration:none;box-shadow:0 6px 22px rgba(220,50,47,.3)}
.reveal-lock-btn:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(220,50,47,.4)}
.reveal-lock-sub{margin-top:10px;font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px}
@media(max-width:560px){
  .reveal-lock{padding:22px 18px}
  .reveal-lock-item{flex-wrap:wrap}
  .rli-lock{margin-left:36px}
  .reveal-lock-btn{width:100%;padding:13px 18px;font-size:11px}
}

/* ══ SOCIAL PROOF WIDGET (playbook P5.1) ══ */
.social-proof{display:flex;gap:14px;padding:14px 18px;background:var(--sur);border:1px solid var(--bd);border-radius:var(--r3);margin:18px 0;flex-wrap:wrap;align-items:center;justify-content:center}
.sp-item{display:flex;align-items:center;gap:8px;font-family:var(--mono);font-size:11px;color:var(--t2);letter-spacing:.3px}
.sp-item b{color:var(--t1);font-weight:700;font-family:var(--display);font-size:13px}
.sp-item.urgency b{color:var(--red)}
.sp-divider{width:1px;height:14px;background:var(--bdm)}
@media(max-width:560px){
  .social-proof{gap:10px;padding:12px 14px}
  .sp-divider{display:none}
  .sp-item{font-size:10px}
  .sp-item b{font-size:12px}
}

/* ══ COUNTDOWN BANNER (playbook P5.2) ══ */
.countdown{display:flex;align-items:center;gap:14px;padding:14px 18px;background:linear-gradient(135deg,rgba(220,50,47,.08),rgba(220,50,47,.02));border:1px solid var(--bd-r);border-radius:var(--r3);margin:18px 0;position:relative;overflow:hidden}
.countdown::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--red)}
.cd-ico{font-size:24px;flex-shrink:0}
.cd-body{flex:1}
.cd-label{font-family:var(--mono);font-size:9.5px;letter-spacing:2px;color:var(--red);text-transform:uppercase;margin-bottom:2px;font-weight:700}
.cd-main{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);letter-spacing:.3px}
.cd-main b{color:var(--red);font-size:24px;margin-right:4px}
.cd-sub{font-family:var(--serif);font-size:12.5px;color:var(--t2);margin-top:2px}
@media(max-width:560px){
  .countdown{padding:12px 14px}
  .cd-main{font-size:15px}
  .cd-main b{font-size:20px}
  .cd-sub{font-size:12px}
}

/* ══ SOFT HINT — "ovo je palo na MAT 2022" (playbook P4.2) ══ */
.soft-hint{display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(232,201,122,.06);border:1px solid var(--bd-go);border-left:3px solid var(--gold);border-radius:var(--r2);margin:14px 0;font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.5}
.soft-hint-ico{font-size:16px;flex-shrink:0}
.soft-hint-body{flex:1}
.soft-hint b{color:var(--gold)}
.soft-hint-link{color:var(--bronze-l);text-decoration:none;font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;padding:4px 10px;border:1px solid var(--bd-br);border-radius:var(--r1);transition:all .15s;flex-shrink:0}
.soft-hint-link:hover{background:var(--dim-br);color:var(--gold)}

/* ══ FRUSTRATION HINT — "Zapeo si? Pitaj AI" (playbook P4.3) ══ */
.frustration{display:flex;align-items:center;gap:12px;padding:12px 16px;background:linear-gradient(135deg,rgba(220,50,47,.06),rgba(232,201,122,.02));border:1px dashed var(--bd-br);border-radius:var(--r3);margin:18px 0;font-family:var(--serif);font-size:13.5px;color:var(--t1)}
.fr-ico{font-size:20px;flex-shrink:0}
.fr-body{flex:1;line-height:1.5}
.fr-body b{color:var(--bronze-l)}
.fr-cta{padding:7px 14px;background:transparent;border:1px solid var(--bd-br);color:var(--bronze-l);border-radius:var(--r1);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:all .15s;white-space:nowrap;flex-shrink:0}
.fr-cta:hover{background:var(--dim-br);transform:translateX(2px)}
@media(max-width:560px){
  .frustration{flex-wrap:wrap}
  .fr-body{flex:1 1 100%}
  .fr-cta{width:100%;text-align:center}
}

/* ══ FEEDBACK FORM (v3.6.1) ══ */
.fb-form{display:flex;flex-direction:column;gap:0}
.fb-label{font-family:var(--mono);font-size:10px;letter-spacing:1.2px;color:var(--t3);text-transform:uppercase;margin-top:14px;margin-bottom:6px;font-weight:700}
.fb-req{color:var(--red)}
.fb-hint{font-family:var(--serif);font-size:11.5px;text-transform:none;letter-spacing:.3px;color:var(--t3);font-weight:400;font-style:italic;margin-left:4px}
.fb-types{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:2px}
.fb-type-opt{display:flex;align-items:center;gap:7px;padding:9px 11px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);cursor:pointer;font-family:var(--serif);font-size:13px;color:var(--t2);transition:all .15s}
.fb-type-opt:hover{border-color:var(--bd-br);color:var(--t1)}
.fb-type-opt input[type="radio"]{accent-color:var(--bronze);margin:0;flex-shrink:0}
.fb-type-opt:has(input:checked){background:var(--dim-br);border-color:var(--bd-br);color:var(--bronze-l)}
.fb-textarea{width:100%;padding:11px 14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);font-family:var(--serif);font-size:14px;outline:none;transition:border-color .2s;resize:vertical;min-height:100px;line-height:1.5;box-sizing:border-box}
.fb-textarea:focus{border-color:var(--bd-br)}
.fb-textarea::placeholder{color:var(--t3);font-style:italic}
.fb-counter{text-align:right;font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:4px;letter-spacing:.3px}
.fb-counter.over{color:var(--red)}
@media(max-width:560px){
  .fb-types{grid-template-columns:1fr}
}

/* ══ SVG HOTSPOTS + TOOLTIP (v3.5) ══ */
.svg-hs{cursor:help;pointer-events:all;transition:opacity .2s}
.svg-hs circle, .svg-hs rect{fill:transparent;stroke:transparent;stroke-width:1}
.svg-hs:hover circle, .svg-hs:hover rect, .svg-hs:focus-visible circle, .svg-hs:focus-visible rect{fill:rgba(232,201,122,.1);stroke:var(--gold);stroke-dasharray:3 3}
.svg-hs-ring{fill:none;stroke:var(--gold);stroke-width:1;stroke-dasharray:3 3;opacity:0;animation:hsPulse 2.5s ease-in-out infinite}
@keyframes hsPulse{0%,100%{opacity:0}50%{opacity:.35}}
.svg-container{position:relative}
.svg-container:hover .svg-hs-ring{opacity:.5}

.svg-tt{position:fixed;z-index:250;max-width:280px;background:var(--card);border:1px solid var(--bd-go);border-radius:var(--r3);padding:14px 16px;box-shadow:0 12px 40px rgba(0,0,0,.6),0 2px 8px rgba(232,201,122,.15);font-family:var(--serif);pointer-events:none;opacity:0;transform:translateY(6px) scale(.96);transition:all .18s cubic-bezier(.4,0,.2,1);visibility:hidden}
.svg-tt.show{opacity:1;transform:translateY(0) scale(1);visibility:visible}
.svg-tt::before{content:'';position:absolute;top:-3px;left:20px;width:10px;height:10px;background:var(--card);border-top:1px solid var(--bd-go);border-left:1px solid var(--bd-go);transform:rotate(45deg)}
.svg-tt.above::before{top:auto;bottom:-3px;border-top:none;border-left:none;border-bottom:1px solid var(--bd-go);border-right:1px solid var(--bd-go)}
.svg-tt-ttl{font-family:var(--display);font-size:11.5px;font-weight:700;color:var(--gold);letter-spacing:1.2px;text-transform:uppercase;margin-bottom:6px}
.svg-tt-txt{font-size:13.5px;color:var(--t1);line-height:1.5}
.svg-tt-txt em{color:var(--bronze-l);font-style:italic}
.svg-hint{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px;margin-top:8px;padding:4px 10px;border:1px dashed var(--bdm);border-radius:var(--r1);background:var(--sur)}
.svg-hint::before{content:'';width:6px;height:6px;background:var(--gold);border-radius:50%;animation:hsPulse 1.8s ease-in-out infinite;animation-direction:alternate}

/* ══ YOUTUBE RESOURCES (v3.5) ══ */
.yt-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:16px 0}
.yt-card{display:flex;flex-direction:column;background:var(--sur);border:1px solid var(--bd);border-radius:var(--r3);overflow:hidden;text-decoration:none;transition:all .2s;position:relative}
.yt-card:hover{border-color:var(--bd-br);transform:translateY(-2px);box-shadow:0 8px 22px rgba(0,0,0,.25)}
.yt-thumb{height:72px;position:relative;display:flex;align-items:center;justify-content:center}
.yt-thumb::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(0,0,0,0) 0%,rgba(0,0,0,.3) 100%)}
.yt-play{width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.95);color:#0F0605;font-size:13px;display:flex;align-items:center;justify-content:center;padding-left:3px;box-shadow:0 3px 10px rgba(0,0,0,.35);position:relative;z-index:2;transition:transform .2s}
.yt-card:hover .yt-play{transform:scale(1.1)}
.yt-body{padding:12px 14px;flex:1}
.yt-lang{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1.2px;margin-bottom:6px;display:flex;align-items:center;gap:5px;text-transform:uppercase;font-weight:600}
.yt-flag{font-size:12px}
.yt-title{font-family:var(--display);font-size:13.5px;font-weight:700;color:var(--t1);margin-bottom:6px;line-height:1.3}
.yt-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5}
@media(max-width:720px){
  .yt-grid{grid-template-columns:1fr}
  .yt-thumb{height:64px}
}

/* ══ PDF EXPORT STATE (v3.6.1) ══
   Dok html2pdf renderira, privremeno dark → light theme da PDF bude čitljiv */
body.pdf-exporting{background:#fff!important;color:#000!important}
body.pdf-exporting *{background:transparent!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}
body.pdf-exporting .hero{background:#fff!important;border:2px solid #000!important}
body.pdf-exporting .hero::before, body.pdf-exporting .hero::after, body.pdf-exporting .hero-orb-a, body.pdf-exporting .hero-orb-b{display:none!important}
body.pdf-exporting .box-int, body.pdf-exporting .box-key, body.pdf-exporting .box-signal, body.pdf-exporting .box-warn, body.pdf-exporting .box-tip, body.pdf-exporting .box-20, body.pdf-exporting .sc, body.pdf-exporting .cr, body.pdf-exporting .cmp-c{background:#fff!important;border:1px solid #999!important}
body.pdf-exporting th, body.pdf-exporting td{border:1px solid #999!important}
body.pdf-exporting .pill, body.pdf-exporting .hchip{background:#fff!important;color:#000!important;border:1px solid #999!important}
body.pdf-exporting .svg-hs-ring, body.pdf-exporting .svg-hint{display:none!important}
body.pdf-exporting .layer{display:block!important;visibility:visible!important;page-break-before:always;margin-bottom:18pt}
body.pdf-exporting .layer:first-of-type{page-break-before:auto}
body.pdf-exporting .sidebar, body.pdf-exporting .sb-hamburger{display:none!important}
body.pdf-exporting .content-wrap{max-width:100%!important;padding:0!important;margin:0!important}


/* ══ CTA UPSELL (suptilni, premium) ══ */.upsell{display:flex;align-items:center;gap:16px;padding:18px 22px;background:linear-gradient(135deg,rgba(232,201,122,.07),rgba(220,50,47,.04));border:1px solid var(--bd-go);border-radius:var(--r3);margin:22px 0;position:relative;overflow:hidden}
.upsell::before{content:'';position:absolute;top:0;left:0;bottom:0;width:3px;background:linear-gradient(180deg,var(--bronze),var(--gold))}
.upsell-ico{width:44px;height:44px;flex-shrink:0;border-radius:var(--r2);background:linear-gradient(135deg,var(--bronze-d),var(--gold));display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 4px 14px rgba(232,201,122,.25)}
/* Wordmark varijanta — za Discere (brand-name umjesto emoji) */
.upsell-ico.wordmark{width:auto;min-width:88px;padding:0 16px;font-family:var(--display);font-size:15px;font-weight:700;letter-spacing:1.5px;color:#0F0605;text-transform:uppercase;background:linear-gradient(135deg,var(--bronze),var(--gold));border-radius:var(--r2);height:44px}
.upsell-body{flex:1;min-width:0}
.upsell-title{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.upsell-badge{font-family:var(--mono);font-size:8.5px;padding:2px 7px;border:1px solid var(--bd-go);background:var(--dim-go);border-radius:var(--r1);letter-spacing:1px;font-weight:600}
.upsell-badge.standard{color:var(--teal);border-color:var(--bd-t);background:var(--dim-t)}
.upsell-badge.pro{color:var(--bronze-l);border-color:var(--bd-br);background:var(--dim-br)}
.upsell-desc{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.55}
.upsell-desc strong{color:var(--t1)}
.upsell-cta{padding:10px 18px;background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;white-space:nowrap;flex-shrink:0;box-shadow:0 3px 12px rgba(220,50,47,.24);text-decoration:none;display:inline-flex;align-items:center;gap:6px}
.upsell-cta:hover{transform:translateY(-1px);box-shadow:0 5px 18px rgba(220,50,47,.32);opacity:.95}
@media(max-width:560px){.upsell{flex-direction:column;align-items:flex-start;gap:12px}.upsell-ico.wordmark{align-self:flex-start}.upsell-cta{width:100%;justify-content:center}}
.nb.off{opacity:.2;pointer-events:none}

/* ══ ESSAY BUILDER ══ */

/* ══ MATCH GAME ══ */
.mg-score{font-family:var(--mono);font-size:10.5px;color:var(--t3)}
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}

/* ══ RESPONSIVE ══════════════════════════════════
   4 breakpointa:
   - default (≥1200px): full desktop, sve u svojoj glavi
   - ≤1100px: kompaktni desktop (narrow content-wrap)
   - ≤900px: tablet (sidebar pojmljen, single-col u marquee)
   - ≤720px: mobile (hamburger, sve 1 col)
   - ≤480px: small mobile (vertical nav, stacked hero)
═════════════════════════════════════════════════ */

/* Desktop polish — široki ekrani */
@media(min-width:1200px){
  .content-wrap{max-width:920px;padding:40px 52px 120px}
  .hero{padding:44px 48px}
  .hero-title{font-size:34px}
}

/* Kompaktni desktop / laptop */
@media(max-width:1100px){
  .content-wrap{padding:32px 36px 100px}
  .sg{grid-template-columns:repeat(auto-fill,minmax(180px,1fr))}
}

/* Tablet */
@media(max-width:900px){
  .content-wrap{padding:28px 24px 80px}
  .pojm-grid{grid-template-columns:1fr 1fr}
  .cmp[style*="grid-template-columns:repeat(3"]{grid-template-columns:repeat(2,1fr)!important}
}

/* Mobile */
@media(max-width:720px){
  .sidebar{display:none;position:fixed;z-index:160;height:100vh;transform:translateX(-100%);transition:transform .25s}
  .sidebar.mobile-open{display:flex;transform:translateX(0)}.sb-hamburger{display:flex}
  .content-wrap{padding:60px 16px 80px}
  .bc{font-size:10.5px}
  .hero{padding:24px 20px}
  .hero-title{font-size:22px}
  .hero-sub{font-size:14px}
  .cmp{grid-template-columns:1fr!important}
  .sg{grid-template-columns:1fr 1fr}
  .cr{grid-template-columns:1fr}.ck{border-right:none;border-bottom:1px solid var(--bd)}
  .tabs{width:100%;max-width:100%;overflow-x:auto;padding:2px}
  .tab{flex:0 0 auto;font-size:10px;padding:7px 10px;white-space:nowrap}
  /* Matching game */
  .mg-board{grid-template-columns:1fr!important;gap:14px}
  .mg-col-label{margin-top:10px}
  /* Pojmovnik */
  .pojm-grid{grid-template-columns:1fr}
  .pojm-filter{font-size:9px;padding:5px 11px}
  /* Flashcards */
  .fc{max-width:100%}
  .fc-term{font-size:24px!important}
  .fc-def{font-size:14px!important}
  .fc-controls{flex-wrap:wrap;gap:8px;width:100%}
  .fcb{flex:1;min-width:fit-content;font-size:10px;padding:9px 12px}
  /* Kviz */
  .qz-q{font-size:17px!important}
  .qz-opt{padding:12px 14px!important;font-size:13.5px!important}
  .qz-opt-key,.qz-key{width:26px;height:26px;font-size:12px}
  /* Hero */
  .hero-meta{gap:6px}
  .hchip{font-size:9px;padding:3px 9px}
  /* Checkpoint */
  .cp-item{padding:13px 15px;font-size:14px}
  .cp-hint{display:none}
  .cp-summary{padding:14px 16px;flex-direction:column;align-items:flex-start;gap:6px}
  .cp-sum-pct{font-size:22px}
  /* Restore banner */
  .restore-banner{flex-direction:column;align-items:stretch;gap:10px}
  .rb-actions{justify-content:flex-end}
  /* Section headers kompaktniji */
  .sec-hdr{margin:24px 0 14px}
  .sec-badge{font-size:8px;padding:4px 12px}
  /* Content wrap sc cards */
  .sc{padding:13px 14px}
  .sc-name{font-size:12.5px}
  /* Tables */
  .tbl{font-size:12px}
  td,th{padding:8px 10px;font-size:12.5px}
  /* Upsell */
  .upsell{padding:16px 18px;gap:12px}
  .upsell-desc{font-size:13px}
  /* Box helpers */
  .box-int,.box-key,.box-signal,.box-20{padding:16px 18px}
  .box-int-txt,.box-key-txt,.box-signal-txt{font-size:13.5px}
}

/* Small mobile — iPhone SE class */
@media(max-width:480px){
  .sg{grid-template-columns:1fr}
  .hero-title{font-size:19px}
  .hero-meta{flex-direction:column;align-items:flex-start;gap:4px}
  .nav-row{flex-direction:column;gap:8px}
  .nav-row .nb{width:100%;justify-content:center}
  .d1,.d2{font-size:28px}
  .tab{font-size:9.5px;padding:6px 9px;letter-spacing:0}
  .bc{display:none}
}

/* ══ PRINT STYLESHEET (v3.6) ══
   Optimiziran ispis skripte na papir — svi tabovi vidljivi,
   bez sidebara/CTA/modala, svijetla pozadina, čitljive boje.
═════════════════════════════════════════════ */
@media print{
  /* Reset tama → svijetla pozadina za uštedu tinte */
  html, body{background:#fff!important;color:#000!important;font-size:10pt}
  *, *::before, *::after{
    background:transparent!important;
    color:#000!important;
    box-shadow:none!important;
    text-shadow:none!important;
    animation:none!important;
    transition:none!important
  }
  /* Sakrij UI chrome */
  .sidebar, .sb-hamburger, .sb-overlay, .btt, .modal-backdrop,
  .tabs, .upsell, .reveal-lock, .countdown, .social-proof,
  .restore-banner, .cit-tools, .soft-hint, .frustration,
  .fc-controls, .fc, .mg-board, .mg-score, .drill-stats,
  .yt-grid, .svg-tt, #svg-tt, .cp-actions, .cp-summary,
  .foot-feedback, #pdf-export-btn, #fb-modal-backdrop,
  .svg-hs-ring, .svg-hint, nav.sidebar{display:none!important;visibility:hidden!important}
  /* Svi tabovi VIDLJIVI — jaki override */
  .layer{
    display:block!important;
    visibility:visible!important;
    opacity:1!important;
    position:static!important;
    page-break-before:always;
    padding:0;
    margin-bottom:20pt
  }
  .layer:first-of-type{page-break-before:auto}
  .layer.on{display:block!important}
  /* Svi layers se tiskaju */
  #l0, #l1, #l2, #l3, #l4, #l5, #l6, #l7{
    display:block!important;
    visibility:visible!important
  }
  /* Tipografija za papir */
  .content-wrap{max-width:100%!important;padding:0!important;margin:0!important}
  .main{margin:0!important}
  body, .hero-sub, .box-int-txt, .box-key-txt, .sc-desc, .cv, .prose, p, li{
    color:#000!important;font-size:10.5pt!important;line-height:1.45!important
  }
  h1, h2, h3, h4, .hero-title, .box-int-lbl, .box-key-lbl, .sec-badge, .slbl, .box-signal-lbl, .box-warn .bw-title, .bt-title, .b20-title{
    color:#000!important;page-break-after:avoid;break-after:avoid
  }
  /* Boxes */
  .box-int, .box-key, .box-signal, .box-warn, .box-tip, .box-20{
    background:#fff!important;border:1px solid #999!important;color:#000!important;
    page-break-inside:avoid;break-inside:avoid;margin:6pt 0;padding:7pt
  }
  .box-int-lbl, .box-key-lbl, .box-signal-lbl, .bw-title, .bt-title, .b20-title{color:#000!important}
  /* Tablice */
  .tbl, table{border-collapse:collapse;width:100%;page-break-inside:avoid}
  th, td{border:1px solid #999!important;padding:3pt 5pt!important;color:#000!important}
  /* Dramatis personae, citati, konflikti */
  .con .cr{page-break-inside:avoid;break-inside:avoid}
  .cr{border:1px solid #bbb!important;margin:3pt 0}
  .ck{color:#000!important;font-weight:700}
  .sg, .cmp{display:block}
  .sc, .cmp-c{background:#fff!important;border:1px solid #bbb!important;color:#000!important;margin:3pt 0;padding:5pt;page-break-inside:avoid}
  /* Pills — jednostavni */
  .pill, .hchip{background:#fff!important;color:#000!important;border:1px solid #999!important}
  /* Hero bez blokova */
  .hero{background:#fff!important;border:2px solid #000!important;padding:10pt!important;margin-bottom:10pt}
  .hero::before, .hero::after, .hero-orb-a, .hero-orb-b{display:none!important}
  /* URL header na prvoj stranici */
  .bc{font-family:sans-serif;font-size:9pt;color:#666!important;padding-bottom:4pt;border-bottom:1px solid #999;margin-bottom:8pt}
  .bc-tab{background:transparent!important;border:none!important;padding:0!important}
  /* SVG dijagram — crna na bijeloj, ostaje vidljiv */
  .svg-container{background:#fff!important;border:1px solid #999!important;page-break-inside:avoid;padding:8pt}
  .svg-container svg{max-width:100%}
  /* Kvizovi — sakrij interaktivne dijelove, ali pitanja NEKA ostanu statična */
  .qz-intro, .qz-start-btn, .qz-opts, .qz-next, #qz-app{display:none!important}
  /* Module footer */
  .mod-foot{margin-top:15pt;padding-top:8pt;border-top:1px solid #999;font-size:8.5pt!important;color:#666!important}
  /* Linkovi — pokaži URL u parentezi */
  a[href^="http"]:after{content:" (" attr(href) ")";font-size:8pt;color:#666!important;word-break:break-all}
  a[href^="mailto"]:after{content:" (" attr(href) ")";font-size:8pt;color:#666!important}
  a[href^="#"]:after{content:""}
  /* Sprečava ugly page-break usred kartice */
  .yt-card, .reveal-lock-item, .cp-item{page-break-inside:avoid}
  /* Print-only helper — instrukcija za studenta */
  body::before{
    content:"Maturiraj.hr · H04 Barok i klasicizam · 8 tabova · Svrha: priprema za državnu maturu iz Hrvatskog jezika 2025/2026";
    display:block;
    font-family:sans-serif;
    font-size:8.5pt;
    color:#666!important;
    padding:4pt 0;
    border-bottom:1px dashed #999;
    margin-bottom:8pt;
    text-align:center
  }
}

/* ══ V3: SVG TOOLTIP ══ */

/* ══ V3: MATCH DIFFICULTY + TIMER ══ */

/* ══ V3: QUIZ SCORE HISTORY ══ */

/* ══ V3: QUIZ RETRY ERRORS ══ */

/* ══ V3: RESTORE BANNER ══ */
.restore-banner{display:none;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r3);margin-bottom:18px;flex-wrap:wrap}
.restore-banner.show{display:flex;animation:fadeUp .3s ease}
.rb-txt{font-family:var(--serif);font-size:13.5px;color:var(--t2)}
.rb-txt strong{color:var(--gold)}
.rb-actions{display:flex;gap:8px}
.rb-btn{padding:6px 14px;border-radius:var(--r2);font-family:var(--mono);font-size:10.5px;font-weight:700;cursor:pointer;border:1px solid;transition:all .15s}
.rb-btn.primary{background:var(--bronze);color:#0F0605;border-color:var(--bronze)}
.rb-btn.secondary{background:transparent;color:var(--t2);border-color:var(--bdm)}
.rb-btn.secondary:hover{border-color:var(--bd-br);color:var(--bronze-l)}

/* ══ PRINT MODE: SAMO CHEAT SHEET (kad korisnik klikne Ispiši na kartici) ══ */
body.print-cheat-only @media print{
  /* nothing — handled by media query below */
}
@media print{
  body.print-cheat-only{background:#fff!important;color:#000!important}
  body.print-cheat-only > *{display:none!important;visibility:hidden!important}
  body.print-cheat-only .cheat-card,
  body.print-cheat-only .cheat-card *{display:block!important;visibility:visible!important;color:#000!important}
  body.print-cheat-only .cheat-card{
    display:block!important;
    position:absolute!important;
    left:0!important;top:0!important;
    width:100%!important;
    background:#fff!important;
    border:1px solid #000!important;
    page-break-inside:auto;
    box-shadow:none!important
  }
  body.print-cheat-only .cheat-grid{display:grid!important;grid-template-columns:1fr 1fr!important}
  body.print-cheat-only .cheat-col-wide{grid-column:1 / -1!important}
  body.print-cheat-only .cheat-grid-inner{display:grid!important;grid-template-columns:1fr 1fr!important}
  body.print-cheat-only .cheat-col, body.print-cheat-only .cheat-hdr{background:#fff!important;border-color:#999!important}
  body.print-cheat-only .cheat-print{display:none!important}
  body.print-cheat-only .cheat-eye, body.print-cheat-only .cheat-col-ttl{color:#444!important}
  body.print-cheat-only .cheat-tbl td:first-child, body.print-cheat-only .cheat-list b, body.print-cheat-only .cheat-mini-txt b, body.print-cheat-only .cheat-steps b{color:#000!important;font-weight:700}
  body.print-cheat-only .cheat-tbl td{border-bottom:1px solid #ddd!important}
  body.print-cheat-only .cheat-list li::before{color:#666!important}
  body.print-cheat-only .cheat-list-warn li::before{color:#000!important}
  body.print-cheat-only .cheat-steps li::before{background:#fff!important;border:1px solid #000!important;color:#000!important}
  body.print-cheat-only .cheat-vs{background:#eee!important;color:#000!important;border:1px solid #999}
  body.print-cheat-only .cheat-mini-ttl{color:#444!important}
  /* Helper header */
  body.print-cheat-only::before{
    content:"Maturiraj.hr · H01 · Cheat sheet za pred-ispit ponavljanje";
    display:block!important;visibility:visible!important;
    position:absolute;top:-22pt;left:0;width:100%;
    font-family:sans-serif;font-size:8.5pt;color:#666!important;
    text-align:center;padding-bottom:4pt;border-bottom:1px dashed #999
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

/* Flashcard 3d feel */
.fc{will-change:transform;backface-visibility:hidden}

/* Print: hide scroll-progress */
@media print{
  .scroll-progress{display:none!important}
  html{scroll-behavior:auto}
}

/* Animated gradient border for feature callouts */
@keyframes gradient-border{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.feature-callout{position:relative;padding:20px;margin:18px 0;border-radius:var(--r3);background:var(--card);overflow:hidden}
.feature-callout::before{content:'';position:absolute;inset:-2px;border-radius:var(--r3);padding:2px;background:linear-gradient(90deg,var(--bronze),var(--gold),var(--red),var(--gold),var(--bronze));background-size:300% 100%;animation:gradient-border 8s linear infinite;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}

/* Count-up micro-animation */
@keyframes count-up{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.stat-badge{animation:count-up .4s ease-out}


/* ══════════════════════════════════════════════════════════════════
   CITATNIK v9 — SMART CITATION INDEX
   Design: editorial, dark-only, mirrors .pojm / .sc / .box-20 system.
   Features: thesis tags, difficulty indicators, random pick, counter,
             must-know badges, category + thesis + difficulty filters.
   No white/light bg anywhere. All tokens from existing design system.
   ══════════════════════════════════════════════════════════════════ */

/* Filter pills container — single row */
.cit-filters{display:flex;gap:6px;flex-wrap:wrap;margin:18px 0 10px;padding:0;align-items:center}
.cit-fbtn{padding:6px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--card);color:var(--t2);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .18s;display:inline-flex;align-items:center;gap:5px;line-height:1.4}
.cit-fbtn:hover{color:var(--t1);border-color:var(--bd-br)}
.cit-fbtn.active{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--bronze);font-weight:700;box-shadow:0 2px 10px rgba(220,50,47,.15)}
.cit-fbtn.fspec{background:var(--dim-go);color:var(--gold);border-color:var(--bd-go)}
.cit-fbtn.fspec:hover{background:var(--dim-go);color:var(--t1);border-color:var(--gold)}
.cit-fbtn.fspec.active{background:linear-gradient(135deg,var(--gold),#d4b980);color:#0F0605;border-color:var(--gold)}

/* Secondary filter row — difficulty + random */
.cit-subfilters{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 14px;padding:10px 14px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);align-items:center}
.cit-sublbl{font-family:var(--mono);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);font-weight:700;margin-right:4px}
.cit-diffbtn{padding:4px 10px;font-family:var(--mono);font-size:9.5px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;background:transparent;color:var(--t3);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .15s}
.cit-diffbtn:hover{color:var(--t1);border-color:var(--bd-br)}
.cit-diffbtn.active{background:var(--dim-br);color:var(--bronze-l);border-color:var(--bd-br)}
.cit-random{padding:4px 12px;font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--dim-go);color:var(--gold);border:1px solid var(--bd-go);border-radius:var(--r1);cursor:pointer;transition:all .15s;margin-left:auto;display:inline-flex;align-items:center;gap:5px}
.cit-random:hover{background:var(--hov);color:var(--gold)}

/* Count row */
.cit-count{font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:14px;letter-spacing:.3px;display:flex;align-items:center;gap:10px}
.cit-count b{color:var(--bronze-l);font-weight:700}
.cit-count-clear{font-family:var(--mono);font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--t3);background:transparent;border:1px dashed var(--bdm);border-radius:var(--r1);padding:3px 9px;cursor:pointer;transition:all .15s;display:none}
.cit-count-clear.on{display:inline-flex}
.cit-count-clear:hover{color:var(--t1);border-color:var(--bd-br)}

/* Grid */
.cit-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px;margin-top:4px}

/* ══ CARD — editorial, mirrors .sc/.pojm ══ */
.cit-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:18px 20px 16px 22px;transition:all .22s cubic-bezier(.4,0,.2,1);position:relative;display:flex;flex-direction:column;overflow:hidden}
.cit-card:hover{border-color:var(--bd-br);transform:translateY(-2px);box-shadow:0 8px 24px rgba(220,50,47,.08)}

/* Subtle category left stripe (integrated, not aggressive) */
.cit-card::before{content:'';position:absolute;left:0;top:14px;bottom:14px;width:2px;background:var(--bronze);opacity:.4;border-radius:0 2px 2px 0;transition:opacity .22s,width .22s}
.cit-card:hover::before{opacity:.9;width:3px}
.cit-card[data-cat="barok-drama"]::before{background:var(--gold)}
.cit-card[data-cat="moliere"]::before{background:var(--red)}
.cit-card[data-cat="klasika"]::before{background:var(--teal)}
.cit-card[data-cat="barok"]::before{background:#c5a1d9}

/* Top meta row: category eye + must-know badge */
.cit-meta{display:flex;align-items:center;gap:6px;margin-bottom:10px;padding-right:68px;flex-wrap:wrap}
.cit-eye{font-family:var(--mono);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:2px 7px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r1);font-weight:700}
.cit-card[data-cat="barok-drama"] .cit-eye{color:var(--gold);background:var(--dim-go);border-color:var(--bd-go)}
.cit-card[data-cat="moliere"] .cit-eye{color:var(--red-l);background:var(--dim-r);border-color:var(--bd-r)}
.cit-card[data-cat="klasika"] .cit-eye{color:var(--teal);background:var(--dim-t);border-color:var(--bd-t)}
.cit-card[data-cat="barok"] .cit-eye{color:#c5a1d9;background:rgba(197,161,217,.12);border-color:rgba(197,161,217,.25)}

.cit-must{font-family:var(--mono);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);padding:2px 7px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);font-weight:700;display:inline-flex;align-items:center;gap:3px;box-shadow:0 0 10px rgba(232,201,122,.12)}
.cit-must::before{content:'★';font-size:9px}

.cit-diff{font-family:var(--mono);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;padding:2px 7px;background:transparent;border:1px solid var(--bdm);border-radius:var(--r1);font-weight:700;color:var(--t3)}
.cit-diff.adv{color:var(--bronze-l);border-color:var(--bd-br);background:var(--dim-br)}

/* Source: author + work */
.cit-src{margin-bottom:4px}
.cit-src-author{font-family:var(--display);font-size:13.5px;font-weight:700;color:var(--bronze-l);letter-spacing:.4px;line-height:1.3;display:block}
.cit-src-work{display:block;font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.7px;color:var(--t3);margin-top:3px;line-height:1.5;text-transform:uppercase;opacity:.85}

/* Quote text — THE HERO ELEMENT */
.cit-txt{font-family:'EB Garamond',Georgia,serif;font-size:16px;font-weight:400;font-style:italic;color:var(--t1);line-height:1.55;margin:12px 0 14px;padding:0;letter-spacing:.15px;position:relative}

/* Thesis tags row */
.cit-tez-row{display:flex;gap:4px;flex-wrap:wrap;margin:0 0 12px}
.cit-tez{font-family:var(--mono);font-size:8.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--teal);background:var(--dim-t);border:1px solid var(--bd-t);border-radius:var(--r1);padding:2px 8px;cursor:pointer;transition:all .15s}
.cit-tez:hover{background:var(--hov);color:var(--t1);border-color:var(--teal)}

/* Use context */
.cit-use{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.6;padding-top:10px;border-top:1px solid var(--bdm);margin:0}
.cit-use b:first-child{font-family:var(--mono);font-size:8.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--bronze-l);display:block;margin-bottom:5px}
.cit-use b:not(:first-child){color:var(--t1);font-weight:600;font-family:var(--serif)}
.cit-use em{color:var(--t1);font-style:italic}

/* Action buttons — bottom-right, ghost */
.cit-actions{position:absolute;top:14px;right:14px;display:flex;gap:3px;z-index:3;opacity:0;transition:opacity .22s}
.cit-card:hover .cit-actions,.cit-card:focus-within .cit-actions{opacity:1}
.cit-card:has(.cit-btn.fav.on) .cit-actions{opacity:1}
.cit-btn{width:26px;height:26px;border-radius:50%;border:1px solid var(--bdm);background:var(--ele);color:var(--t3);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:11px;transition:all .15s;padding:0}
.cit-btn:hover{background:var(--hov);color:var(--t1);border-color:var(--bd-br);transform:scale(1.06)}
.cit-btn.fav.on{color:var(--gold);background:var(--dim-go);border-color:var(--bd-go);opacity:1}
.cit-btn.copy.copied{color:var(--green-l);background:var(--dim-g);border-color:var(--bd-g)}
.cit-btn[data-count]::after{content:attr(data-count);position:absolute;top:-5px;right:-5px;background:var(--dim-br);color:var(--bronze-l);font-size:7px;font-weight:700;padding:1px 4px;border-radius:7px;border:1px solid var(--bd-br);font-family:var(--mono);line-height:1;min-width:12px;text-align:center;letter-spacing:0}
.cit-btn[data-count="0"]::after{display:none}

/* Empty state */
.cit-empty{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:32px 20px;text-align:center;font-family:var(--serif);font-size:13.5px;color:var(--t3);font-style:italic;margin:16px 0;display:none}
.cit-empty.on{display:block}
.cit-empty b{color:var(--bronze-l);font-style:normal;font-family:var(--mono);font-size:9px;letter-spacing:2px;text-transform:uppercase;font-weight:700;display:block;margin-bottom:8px}

.cit-hidden{display:none!important}

/* Focus card animation — for random pick */
.cit-focus{animation:citFocus 1.2s cubic-bezier(.25,.8,.25,1)}
@keyframes citFocus{
  0%{transform:scale(1);box-shadow:0 0 0 rgba(232,201,122,0)}
  20%{transform:scale(1.03);box-shadow:0 0 0 3px var(--gold),0 12px 32px rgba(232,201,122,.35)}
  100%{transform:scale(1);box-shadow:0 0 0 rgba(232,201,122,0)}
}

/* Toast */
.cit-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(16px);background:var(--card);color:var(--t1);padding:10px 18px;border-radius:var(--r2);border:1px solid var(--bd-go);font-family:var(--serif);font-size:13px;font-style:italic;box-shadow:0 10px 32px rgba(0,0,0,.45);opacity:0;visibility:hidden;transition:all .25s cubic-bezier(.4,0,.2,1);z-index:9999;pointer-events:none}
.cit-toast.on{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}



/* ══ v9.1 POLISH ══ */
/* Keyboard focus for filter buttons — clear outline */
.cit-fbtn:focus-visible,.cit-diffbtn:focus-visible,.cit-random:focus-visible,.cit-tez:focus-visible,.cit-count-clear:focus-visible,.cit-btn:focus-visible{outline:2px solid var(--gold);outline-offset:2px;border-radius:var(--r1)}

/* Card focus via keyboard navigation */
.cit-card:focus-within{border-color:var(--bronze)}

/* Highlight on quote hover — subtle */
.cit-card:hover .cit-txt{color:#fef3e2}

/* Smooth cit-hidden transition (reduce jarring) */
.cit-card{will-change:transform}
.cit-hidden{display:none!important}

/* Print-friendly: show all citati, hide filters */
@media print{
  .cit-filters,.cit-subfilters,.cit-count,.cit-actions{display:none!important}
  .cit-card{break-inside:avoid;page-break-inside:avoid;margin-bottom:12px;border:1px solid #333;background:#fff;color:#000}
  .cit-txt{color:#000}
  .cit-use{color:#222}
  .cit-src-author{color:#000}
  .cit-hidden{display:block!important}
}

/* Reduce motion for users who prefer */
@media (prefers-reduced-motion:reduce){
  .cit-card,.cit-fbtn,.cit-btn,.cit-random{transition:none!important;animation:none!important}
  .cit-focus{animation:none!important}
}

/* Mobile */
@media (max-width:600px){
  .cit-grid{grid-template-columns:1fr;gap:12px}
  .cit-card{padding:16px 16px 14px 18px}
  .cit-subfilters{padding:8px 10px;gap:6px}
  .cit-random{padding:4px 10px;font-size:9px}
  .cit-txt{font-size:15px}
  .cit-src-author{font-size:13px}
  .cit-actions{opacity:1}
}

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
  .sb-item[data-star="2026"]::after{font-size:7px;padding:2px 4px}
}


/* ══════════════════════════════════════════════════════════════
   PROGATE — reusable paywall wrapper za gated utility
   
   Primjena: wrappa blok sadržaja (Drill, Kviz, Matching...).
   Ako korisnik nema potreban tier → prikazuje prve 5 stavki + fade + CTA.
   Ako ima tier → overlay se skriva (JS toggleProGates()).
   ══════════════════════════════════════════════════════════════ */

.pro-gate{
  position:relative;
  overflow:hidden;
  --gate-preview-height:360px;   /* koliko content-a je vidljivo prije fade-a */
}

/* Free state — limitira visinu + overlay */
body[data-tier="free"] .pro-gate,
.pro-gate.force-gated{
  max-height:var(--gate-preview-height);
}

body[data-tier="free"] .pro-gate-overlay,
.pro-gate.force-gated .pro-gate-overlay{
  display:flex;
}

/* Authed state — ubija gate */
body[data-tier="standard"] .pro-gate,
body[data-tier="pro"] .pro-gate{
  max-height:none;
}
body[data-tier="standard"] .pro-gate-overlay,
body[data-tier="pro"] .pro-gate-overlay{
  display:none;
}

/* Overlay: fade + CTA */
.pro-gate-overlay{
  display:none;     /* default — overridan po body[data-tier] */
  position:absolute;
  inset:0;
  flex-direction:column;
  justify-content:flex-end;
  pointer-events:none;   /* inner elements će re-enable */
}

.pro-gate-fade{
  height:180px;
  background:linear-gradient(
    to bottom,
    rgba(15,6,5,0) 0%,
    rgba(15,6,5,.85) 55%,
    rgba(15,6,5,.98) 100%
  );
}

.pro-gate-cta{
  background:rgba(15,6,5,.98);
  padding:18px 22px 22px;
  text-align:center;
  pointer-events:auto;
  border-top:1px solid var(--bd-go);
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
}

.pro-gate-label{
  font-family:var(--serif);
  font-size:14px;
  color:var(--t1);
  line-height:1.5;
  max-width:460px;
}
.pro-gate-label b{color:var(--gold);font-weight:600}

.pro-gate-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:7px;
  font-family:var(--mono);
  font-size:11px;
  font-weight:700;
  letter-spacing:1.2px;
  text-transform:uppercase;
  color:#0F0605;
  background:linear-gradient(135deg,var(--gold),#d4b980);
  border:1px solid var(--gold);
  border-radius:var(--r2);
  padding:11px 22px;
  text-decoration:none;
  cursor:pointer;
  transition:transform .18s,box-shadow .18s,filter .18s;
  box-shadow:0 4px 16px rgba(232,201,122,.18);
}
.pro-gate-btn:hover{
  transform:translateY(-1px);
  filter:brightness(1.08);
  box-shadow:0 6px 22px rgba(232,201,122,.28);
}
.pro-gate-btn::before{content:'🔓';font-size:13px}

.pro-gate-meta{
  font-family:var(--mono);
  font-size:9.5px;
  color:var(--t3);
  letter-spacing:.8px;
  text-transform:uppercase;
}

/* Inline lock badge za tab header kad je content gated */
.tab-lock{
  display:inline-flex;
  align-items:center;
  gap:4px;
  font-family:var(--mono);
  font-size:8px;
  font-weight:700;
  letter-spacing:1px;
  color:var(--gold);
  background:var(--dim-go);
  border:1px solid var(--bd-go);
  border-radius:var(--r1);
  padding:2px 6px;
  margin-left:6px;
  vertical-align:middle;
  text-transform:uppercase;
}
.tab-lock::before{content:'🔒';font-size:9px}

body[data-tier="standard"] .tab-lock,
body[data-tier="pro"] .tab-lock{display:none}

/* Reduced motion */
@media(prefers-reduced-motion:reduce){
  .pro-gate-btn{transition:none}
}

@media(max-width:680px){
  .pro-gate{--gate-preview-height:280px}
  .pro-gate-fade{height:140px}
  .pro-gate-cta{padding:14px 16px 18px;gap:8px}
  .pro-gate-label{font-size:13px}
  .pro-gate-btn{font-size:10.5px;padding:10px 18px}
  .pro-gate-meta{font-size:9px}
}



/* ══════════════════════════════════════════════════════════════
   MUST-KNOW BOX — "Minimum za maturu" (v2)
   ══════════════════════════════════════════════════════════════ */
.must-know{
  background:linear-gradient(135deg,rgba(232,201,122,.06),rgba(220,50,47,.03));
  border:1px solid rgba(232,201,122,.22);
  border-left:3px solid var(--gold);
  border-radius:var(--r3);
  padding:18px 22px 16px;
  margin:18px 0 22px;
  position:relative;
}
.must-know-header{display:flex;align-items:center;gap:10px;margin-bottom:4px}
.must-know-ico{font-size:15px;line-height:1}
.must-know-title{
  font-family:var(--mono);font-size:10.5px;font-weight:700;
  letter-spacing:2px;text-transform:uppercase;color:var(--gold);
  flex:1;min-width:0;
}
.must-know-time{
  font-family:var(--mono);font-size:9.5px;color:var(--t3);
  letter-spacing:1.2px;text-transform:uppercase;
  padding:3px 8px;border:1px solid var(--bdm);border-radius:var(--r1);
  white-space:nowrap;
}
.must-know-subtitle{
  font-family:var(--serif);font-size:13px;font-style:italic;
  color:var(--t2);margin:2px 0 14px;line-height:1.45;
}
.must-know-grid{display:flex;flex-direction:column;gap:0}
.mk-row{
  display:grid;grid-template-columns:130px 1fr;gap:14px;
  padding:9px 0;border-bottom:1px solid rgba(255,255,255,.035);
  cursor:pointer;transition:background .15s;align-items:start;position:relative;
}
.mk-row:last-of-type{border-bottom:none}
.mk-row:hover{background:rgba(232,201,122,.025)}
.mk-row::after{
  content:'+';position:absolute;right:2px;top:8px;
  font-family:var(--mono);font-size:13px;color:var(--t3);
  transition:transform .2s,color .15s;line-height:1;
}
.mk-row.mk-open::after{content:'−';color:var(--gold);transform:rotate(180deg)}
.mk-row:hover::after{color:var(--gold)}
.mk-lbl{
  font-family:var(--mono);font-size:9.5px;font-weight:700;
  color:var(--bronze-l);letter-spacing:1.5px;text-transform:uppercase;
  padding-top:3px;display:flex;align-items:center;gap:5px;user-select:none;
}
.mk-val{
  font-family:var(--serif);font-size:14.5px;color:var(--t1);
  line-height:1.5;padding-right:18px;
}
.mk-val b{color:var(--gold);font-weight:600}
.mk-val em{color:var(--t2);font-style:italic}
.mk-more{
  grid-column:1 / -1;max-height:0;overflow:hidden;
  transition:max-height .3s ease, padding .25s, margin .25s;
  font-family:var(--serif);font-size:13.5px;line-height:1.6;
  color:var(--t2);padding:0 18px 0 0;margin-top:0;
}
.mk-row.mk-open .mk-more{
  max-height:400px;padding:8px 18px 6px 0;margin-top:6px;
  border-top:1px dashed rgba(232,201,122,.18);
}
.mk-more b{color:var(--t1);font-weight:600}
.mk-more em{color:var(--gold);font-style:italic}
.must-know-footer{
  margin-top:14px;padding-top:12px;
  border-top:1px dashed rgba(232,201,122,.2);
  font-family:var(--serif);font-size:12.5px;color:var(--t2);
  line-height:1.55;font-style:italic;
}
.must-know-footer b{color:var(--gold);font-style:normal;font-weight:600}
@media(max-width:680px){
  .must-know{padding:14px 16px 14px;margin:14px 0 20px}
  .must-know-title{font-size:10px;letter-spacing:1.6px}
  .must-know-time{font-size:9px;padding:2px 7px}
  .must-know-subtitle{font-size:12.5px;margin-bottom:11px}
  .mk-row{grid-template-columns:100px 1fr;gap:10px;padding:8px 0}
  .mk-lbl{font-size:9px;letter-spacing:1.2px}
  .mk-val{font-size:13.5px;padding-right:16px}
  .mk-more{font-size:12.5px}
  .must-know-footer{font-size:12px}
  .mk-row::after{font-size:12px;right:0;top:7px}
}
@media(prefers-reduced-motion:reduce){.mk-row,.mk-row::after,.mk-more{transition:none}}

/* Drill/Quiz inline paywall (JS-injected) */
.drill-paywall, .qz-paywall{
  max-width:520px;margin:24px auto;padding:28px 24px;
  background:linear-gradient(135deg,rgba(232,201,122,.08),rgba(220,50,47,.04));
  border:1px solid var(--bd-go);border-left:3px solid var(--gold);
  border-radius:var(--r4);text-align:center;
  display:flex;flex-direction:column;align-items:center;gap:10px;
}
.drill-paywall-ico, .qz-paywall-ico{font-size:34px;line-height:1}
.drill-paywall-title, .qz-paywall-label{
  font-family:var(--display);font-size:16px;font-weight:700;
  color:var(--gold);letter-spacing:.8px;line-height:1.4;
}
.drill-paywall-sub, .qz-paywall-sub{
  font-family:var(--serif);font-size:14px;color:var(--t2);
  line-height:1.55;max-width:440px;margin-bottom:6px;
}
.drill-paywall-sub b, .qz-paywall-sub b{color:var(--gold);font-weight:600}
@media(max-width:680px){
  .drill-paywall, .qz-paywall{padding:22px 18px}
  .drill-paywall-title, .qz-paywall-label{font-size:14.5px}
  .drill-paywall-sub, .qz-paywall-sub{font-size:13px}
}


/* ══ ProGate tier toggle (JS-based, bypass CSS cascade issues) ══ */
.pro-gate-overlay[data-gate-state="hidden"]{display:none}
.pro-gate-overlay[data-gate-state="visible"]{display:flex;position:absolute;inset:0;flex-direction:column;justify-content:flex-end;pointer-events:none}

/* ══ DIAG — dijagnostički kviz elementi (fallback styling) ══ */
.diag-question{padding:18px 22px}
.diag-q-head{display:flex;align-items:center;gap:10px;margin-bottom:10px;flex-wrap:wrap}
.diag-q-count{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--bronze-l);text-transform:uppercase}
.diag-q-topic{font-family:var(--mono);font-size:9.5px;letter-spacing:1.2px;color:var(--t3);text-transform:uppercase;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r1)}
.diag-q-text{font-family:var(--serif);font-size:16.5px;line-height:1.5;color:var(--t1);margin-bottom:14px;font-weight:500}
.diag-intro-body{padding:18px 22px}
.diag-intro-icon{font-size:32px;line-height:1;margin-bottom:8px;text-align:center}
.diag-intro-title{font-family:var(--display);font-size:18px;font-weight:700;color:var(--bronze-l);letter-spacing:.8px;text-align:center;margin-bottom:8px}
.diag-intro-desc{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.55;text-align:center;max-width:440px;margin:0 auto 14px}
.diag-res-body{padding:20px 22px;text-align:center}
.diag-res-header{display:flex;flex-direction:column;align-items:center;gap:6px;margin-bottom:12px}
.diag-res-ico{font-size:32px;line-height:1}
.diag-res-title{font-family:var(--display);font-size:17px;font-weight:700;color:var(--bronze-l);letter-spacing:.5px}
.diag-res-cta{margin-top:14px}
.diag-explain{font-family:var(--serif);font-size:13px;color:var(--t2);font-style:italic;line-height:1.5;padding:10px 14px;background:var(--card);border-left:3px solid var(--bronze-d);border-radius:var(--r1);margin-top:10px}
.diag-skip-q-row{display:flex;justify-content:center;margin-top:10px}

/* ══ WIDGET CSS (moved from inline) ══ */

      .pojm-filter{padding:6px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--card);color:var(--t2);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .18s}
      .pojm-filter:hover{color:var(--t1);border-color:var(--bd-br)}
      .pojm-filter.on{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--bronze);font-weight:700}
      .pojm-count{font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:12px}
      .pojm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px}
      .pojm{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 16px;transition:all .2s;position:relative}
      .pojm:hover{border-color:var(--bd-br);transform:translateY(-2px);box-shadow:0 6px 20px rgba(220,50,47,.08)}
      .pojm-cat{position:absolute;top:12px;right:12px;font-family:var(--mono);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:2px 7px;background:var(--ele);border-radius:var(--r1)}
      .pojm-word{font-family:var(--display);font-size:15px;font-weight:600;color:var(--bronze-l);letter-spacing:.5px;margin-bottom:6px;padding-right:70px}
      .pojm-def{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.65}
      .pojm.hidden{display:none}
    

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
    

      .rel-graph{margin:28px 0 20px;padding:24px 20px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);position:relative}
      .rel-graph-hdr{display:flex;align-items:baseline;gap:10px;margin-bottom:18px;flex-wrap:wrap}
      .rel-graph-ttl{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);letter-spacing:1.5px;text-transform:uppercase}
      .rel-graph-sub{font-family:var(--serif);font-size:12.5px;color:var(--t3);font-style:italic}
      .rel-svg-wrap{width:100%;max-width:560px;margin:0 auto;position:relative;aspect-ratio:560/420}
      .rel-svg{width:100%;height:100%;display:block}
      .rel-node{cursor:pointer;transition:transform .18s}
      .rel-node:hover{transform:scale(1.08);transform-origin:center}
      .rel-node-bg{fill:var(--card);stroke:var(--bdm);stroke-width:1.5;transition:all .18s}
      .rel-node.active .rel-node-bg,.rel-node:hover .rel-node-bg{stroke-width:2.5;filter:drop-shadow(0 0 8px rgba(220,50,47,.25))}
      .rel-node[data-char="raskolj"] .rel-node-bg{fill:var(--dim-r);stroke:var(--red-l)}
      .rel-node[data-char="sonja"] .rel-node-bg{fill:var(--dim-go);stroke:var(--gold)}
      .rel-node[data-char="porfirije"] .rel-node-bg{fill:var(--dim-t);stroke:var(--teal)}
      .rel-node[data-char="svidri"] .rel-node-bg{fill:rgba(107,85,85,.2);stroke:#8b7878}
      .rel-node[data-char="dunja"] .rel-node-bg{fill:var(--dim-g);stroke:var(--green-l)}
      .rel-node[data-char="razumihin"] .rel-node-bg{fill:var(--dim-g);stroke:var(--green-l)}
      .rel-node[data-char="marmeladov"] .rel-node-bg{fill:rgba(201,168,120,.15);stroke:#c9a878}
      .rel-node[data-char="katerina"] .rel-node-bg{fill:rgba(201,168,120,.15);stroke:#c9a878}
      .rel-node[data-char="alona"] .rel-node-bg{fill:rgba(107,85,85,.15);stroke:#6b5555}
      .rel-node[data-char="lizaveta"] .rel-node-bg{fill:rgba(107,85,85,.15);stroke:#6b5555}
      .rel-node-label{font-family:var(--mono);font-size:9.5px;font-weight:700;fill:var(--t1);text-anchor:middle;pointer-events:none;letter-spacing:.3px}
      .rel-edge{stroke:var(--bdm);stroke-width:1.2;fill:none;transition:stroke .2s,stroke-width .2s;opacity:.7}
      .rel-edge.love{stroke:var(--gold);stroke-width:1.5}
      .rel-edge.kill{stroke:var(--red);stroke-width:1.5;stroke-dasharray:4 3}
      .rel-edge.double{stroke:#a88;stroke-width:1.5;stroke-dasharray:6 3}
      .rel-edge.family{stroke:var(--green);stroke-width:1.3}
      .rel-edge.hunt{stroke:var(--teal);stroke-width:1.5;stroke-dasharray:2 2}
      .rel-edge.marry{stroke:var(--green-l);stroke-width:2}
      .rel-edge-label{font-family:var(--mono);font-size:7.5px;fill:var(--t3);text-anchor:middle;letter-spacing:.5px;text-transform:uppercase;pointer-events:none}
      .rel-panel{margin-top:14px;padding:14px 16px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);min-height:56px;transition:all .2s}
      .rel-panel-empty{font-family:var(--serif);font-size:13px;color:var(--t3);font-style:italic;text-align:center;padding:8px 0}
      .rel-panel-name{font-family:var(--display);font-size:14px;font-weight:700;color:var(--bronze-l);margin-bottom:6px;letter-spacing:.4px}
      .rel-panel-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.55}
      .rel-legend{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;padding-top:12px;border-top:1px solid var(--bdm);font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
      .rel-legend-item{display:inline-flex;align-items:center;gap:5px}
      .rel-legend-line{display:inline-block;width:18px;height:2px;border-radius:1px}
      @media(max-width:500px){
        .rel-graph{padding:16px 10px}
        .rel-node-label{font-size:8.5px}
        .rel-edge-label{font-size:6.5px}
      }
    

      .porf-box{margin:26px 0 20px;padding:22px 20px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3)}
      .porf-hdr{display:flex;align-items:baseline;gap:10px;margin-bottom:14px;flex-wrap:wrap}
      .porf-ttl{font-family:var(--display);font-size:13px;font-weight:700;color:var(--teal);letter-spacing:1.5px;text-transform:uppercase}
      .porf-sub{font-family:var(--serif);font-size:12.5px;color:var(--t3);font-style:italic}
      .porf-tabs{display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap}
      .porf-tab{flex:1;min-width:150px;padding:12px 14px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);cursor:pointer;transition:all .18s;text-align:left;font-family:var(--serif);color:var(--t2);line-height:1.45}
      .porf-tab:hover{border-color:var(--bd-t);color:var(--t1)}
      .porf-tab.on{background:var(--dim-t);border-color:var(--teal);color:var(--t1);box-shadow:0 2px 12px rgba(91,192,190,.15)}
      .porf-tab-num{display:inline-block;width:22px;height:22px;border-radius:50%;background:var(--bg);color:var(--t3);font-family:var(--mono);font-size:10px;font-weight:700;text-align:center;line-height:22px;margin-right:8px;border:1px solid var(--bdm);vertical-align:middle}
      .porf-tab.on .porf-tab-num{background:var(--teal);color:var(--bg);border-color:var(--teal)}
      .porf-tab-ttl{font-size:12.5px;font-weight:700;font-family:var(--display);display:inline;letter-spacing:.3px}
      .porf-tab-when{display:block;margin-top:3px;margin-left:30px;font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
      .porf-content{padding:16px 18px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);min-height:140px;font-family:var(--serif);color:var(--t2);line-height:1.7;font-size:13.5px}
      .porf-content-ttl{font-family:var(--display);font-size:13px;font-weight:700;color:var(--teal);letter-spacing:.5px;margin-bottom:8px;text-transform:uppercase}
      .porf-content-body{margin-bottom:0}
      .porf-content-body em{color:var(--t1)}
      .porf-content-quote{margin-top:12px;padding:10px 14px;background:var(--card);border-left:2px solid var(--bronze);border-radius:0 var(--r2) var(--r2) 0;font-family:'EB Garamond',Georgia,serif;font-style:italic;color:var(--t1);font-size:14px;line-height:1.55}
      .porf-content-takeaway{margin-top:10px;padding:8px 12px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r2);font-family:var(--mono);font-size:10.5px;color:var(--gold);letter-spacing:.3px;line-height:1.55}
      .porf-content-takeaway b{color:#f5e0a0}
    

      .wc-box{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:20px;margin:14px 0 20px}
      .wc-hdr{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px;flex-wrap:wrap;gap:8px}
      .wc-ttl{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);letter-spacing:1px;text-transform:uppercase}
      .wc-sub{font-family:var(--serif);font-size:12px;color:var(--t3);font-style:italic}
      .wc-textarea{width:100%;min-height:200px;padding:14px;background:var(--inp);color:var(--t1);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:14.5px;line-height:1.65;resize:vertical;outline:none;transition:border-color .2s;box-sizing:border-box}
      .wc-textarea:focus{border-color:var(--bronze);box-shadow:0 0 0 3px rgba(220,50,47,.1)}
      .wc-stats{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
      .wc-stat{flex:1;min-width:80px;padding:10px 14px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);text-align:center}
      .wc-stat-num{font-family:var(--display);font-size:22px;font-weight:700;color:var(--bronze-l);letter-spacing:.5px;line-height:1.2}
      .wc-stat-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-top:3px}
      .wc-stat.critical .wc-stat-num{color:var(--red-l)}
      .wc-stat.ok .wc-stat-num{color:var(--green-l)}
      .wc-progress{margin-top:14px;padding:12px 14px;background:var(--dim-br);border:1px solid var(--bd-br);border-radius:var(--r2);display:flex;align-items:center;gap:14px}
      .wc-progress-bar-wrap{flex:1;height:8px;background:var(--ele);border-radius:4px;overflow:hidden}
      .wc-progress-bar{height:100%;background:linear-gradient(90deg,var(--red) 0%,var(--bronze) 60%,var(--green) 100%);border-radius:4px;transition:width .3s ease;width:0%}
      .wc-progress-lbl{font-family:var(--mono);font-size:10px;color:var(--t2);letter-spacing:.5px;min-width:80px;text-align:right}
      .wc-progress.pass{background:var(--dim-g);border-color:var(--bd-g)}
      .wc-progress.pass .wc-progress-lbl{color:var(--green-l);font-weight:700}
      .wc-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
      .wc-btn{padding:7px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--card);color:var(--t2);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .15s}
      .wc-btn:hover{color:var(--t1);border-color:var(--bd-br)}
      .wc-hint{margin-top:10px;padding:10px 14px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
      .wc-hint b{color:var(--t1)}
    

      .cit-pinned{margin:4px 0 18px;padding:16px 18px;background:linear-gradient(135deg,var(--dim-go) 0%,rgba(232,201,122,.04) 100%);border:1px solid var(--bd-go);border-radius:var(--r3);position:relative;overflow:hidden}
      .cit-pinned::before{content:'';position:absolute;top:0;right:0;width:80px;height:80px;background:radial-gradient(circle at top right,rgba(232,201,122,.15) 0%,transparent 70%);pointer-events:none}
      .cit-pinned-hdr{display:flex;align-items:center;gap:10px;margin-bottom:12px;position:relative}
      .cit-pinned-ico{font-size:14px}
      .cit-pinned-ttl{font-family:var(--display);font-size:11px;font-weight:700;color:var(--gold);letter-spacing:1.8px;text-transform:uppercase}
      .cit-pinned-sub{font-family:var(--serif);font-size:11.5px;color:var(--t3);font-style:italic;margin-left:auto;font-weight:400}
      .cit-pinned-list{display:flex;flex-direction:column;gap:8px;position:relative}
      .cit-pinned-item{display:flex;align-items:center;gap:10px;padding:8px 12px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5;cursor:pointer;transition:all .15s;text-align:left}
      .cit-pinned-item:hover{border-color:var(--bd-go);background:var(--ele);transform:translateX(3px)}
      .cit-pinned-num{flex-shrink:0;width:22px;height:22px;border-radius:50%;background:var(--dim-go);color:var(--gold);font-family:var(--mono);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;border:1px solid var(--bd-go)}
      .cit-pinned-txt{flex:1;min-width:0;font-style:italic;color:var(--t1)}
      .cit-pinned-who{flex-shrink:0;font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase;white-space:nowrap}
      .cit-pinned-collapse{margin-top:10px;text-align:center}
      .cit-pinned-toggle{padding:4px 12px;font-family:var(--mono);font-size:9.5px;font-weight:600;letter-spacing:1px;text-transform:uppercase;background:transparent;color:var(--t3);border:1px dashed var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .15s}
      .cit-pinned-toggle:hover{color:var(--gold);border-color:var(--bd-go)}
      .cit-pinned.collapsed .cit-pinned-list{display:none}
      .cit-pinned.collapsed{padding:12px 18px}
      .cit-pinned.collapsed .cit-pinned-collapse{margin-top:0}
    

      .pojm-filter{padding:6px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--card);color:var(--t2);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .18s}
      .pojm-filter:hover{color:var(--t1);border-color:var(--bd-br)}
      .pojm-filter.on{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--bronze);font-weight:700}
    

      .pojm-search-wrap{position:relative;margin-bottom:12px}
      .pojm-search-input{width:100%;padding:12px 40px 12px 42px;background:var(--card);color:var(--t1);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--serif);font-size:14px;transition:all .18s;outline:none;box-sizing:border-box}
      .pojm-search-input:focus{border-color:var(--bronze);background:var(--ele);box-shadow:0 0 0 3px rgba(220,50,47,.12)}
      .pojm-search-input::placeholder{color:var(--t3);font-style:italic}
      .pojm-search-ico{position:absolute;left:15px;top:50%;transform:translateY(-50%);font-size:15px;color:var(--t3);pointer-events:none}
      .pojm-search-clear{position:absolute;right:12px;top:50%;transform:translateY(-50%);width:22px;height:22px;border-radius:50%;background:var(--hov);border:none;color:var(--t2);cursor:pointer;display:none;font-size:12px;line-height:1;font-weight:700;padding:0}
      .pojm-search-clear.on{display:flex;align-items:center;justify-content:center}
      .pojm-search-clear:hover{background:var(--dim-br);color:var(--t1)}
      .pojm-kbd-hint{position:absolute;right:40px;top:50%;transform:translateY(-50%);font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;pointer-events:none;padding:2px 6px;background:var(--ele);border:1px solid var(--bdm);border-radius:3px;opacity:.8}
      .pojm-search-input:focus~.pojm-kbd-hint,.pojm-search-clear.on~.pojm-kbd-hint{display:none}
      .pojm mark{background:var(--dim-go);color:var(--gold);padding:1px 3px;border-radius:3px;font-weight:600}
    

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

`;

const SCRIPTS_JS = `(function initRelGraph(){
        var REL_INFO={
          raskolj:{name:'Rodion Raskoljnikov',desc:'Protagonist. 23 godine, bivši student prava. Autor teorije nadčovjeka. Ubija Alonu i Lizavetu. Prolazi kroz paranoju, priznaje Sonji, predaje se, ide u Sibir — iskupljenje.'},
          sonja:{name:'Sonja Marmeladova',desc:'Moralna vertikala. 18 godina, prostitutka iz nužde, pravoslavna. Čita Raskoljnikovu evanđelje (uskrsnuće Lazara). Zove ga na pokoru („Pati — to je put"). Prati ga u Sibir.'},
          porfirije:{name:'Porfirij Petrovič',desc:'Istražitelj. Zna od početka — kroz 3 psihološka susreta vodi Raskoljnikova do priznanja. Intelektualni dvojnik. Savjetuje: sam se predaj — dobit ćeš blaže.'},
          svidri:{name:'Svidrigajlov',desc:'Cinični dvojnik Raskoljnikovljev — ista filozofija, bez grižnje savjesti. Bivši Dunjin poslodavac. Ucjenjuje je. Pokušaj silovanja. Ubija se na mostu — njegov kraj je što bi R. bio bez Sonje.'},
          dunja:{name:'Avdotja „Dunja" Raskoljnikova',desc:'Raskoljnikovljeva sestra. Pristaje na brak s Lužinom zbog brata. Gađa Svidrigajlova pistoljem. Udaje se za Razumihina. Paralela Sonji — aktivna moralnost.'},
          razumihin:{name:'Dmitrij Razumihin',desc:'Raskoljnikovljev odani prijatelj, student. Ime od rus. razum. Zdrav, radišan — antiteza Raskoljnikovu. Ženi se Dunjom. Alternativa teoriji nadčovjeka.'},
          marmeladov:{name:'Semjon Marmeladov',desc:'Sonjin otac. Bivši činovnik, propio se. Pijani monolog u kafani otvara roman. Umire pregažen konjima. Simbol sloma dostojanstva pod siromaštvom.'},
          katerina:{name:'Katerina Ivanovna',desc:'Sonjina maćeha. Nekad plemkinja, sada tuberkuloza i bijeda. Nagovara Sonju na žutu karticu. Umire na ulici iskašljujući krv — „Umrijet ću kao pas!"'},
          alona:{name:'Alona Ivanovna + Lizaveta',desc:'Žrtve zločina. Alona — škrta lihvarica (planirana žrtva). Lizaveta — njena krotka polusestra (neplanirana, Sonjina prijateljica). Dvije žrtve: Raskoljnikov nije računao s nevinim životom.'}
        };
        function relSel(key, node){
          var panel=document.getElementById('rel-panel');
          if(!panel) return;
          var info=REL_INFO[key];
          if(!info) return;
          panel.innerHTML='<div class="rel-panel-name">'+info.name+'</div><div class="rel-panel-desc">'+info.desc+'</div>';
          // Highlight active node
          document.querySelectorAll('.rel-node').forEach(function(n){ n.classList.remove('active'); });
          if(node) node.classList.add('active');
          if(typeof track==='function') track('rel_graph_node',{char:key},'engagement');
        }
        // Expose globally
        window.relSel=relSel;
        // Keyboard support
        document.querySelectorAll('.rel-node').forEach(function(n){
          n.addEventListener('keydown',function(e){
            if(e.key==='Enter'||e.key===' '){ e.preventDefault(); n.click(); }
          });
        });
      })();
;
(function initPorfirij(){
        var DATA={
          1:{title:'I. susret — Razumihinov stan (II. dio)',body:'Raskoljnikov po prvi put susreće Porfirija u stanu kod Razumihina. Situacija je naoko <em>slučajna</em> — Porfirij je navodno došao Razumihinu kao prijatelj. <b>Zapravo se već informirao</b> o Raskoljnikovljevom članku „O zločinu". Tijekom običnog razgovora <em>podbada</em> ga s navodno „nevinim" pitanjima o teoriji. R. je oprezan, <b>ali već upadne u dijalog</b> — ne može odoljeti filozofskoj raspravi. Porfirij <em>sluša, smije se, i tiho sprema hvataljku</em>.',quote:'„Ah, vaš je članak toliko zanimljiv, gospodine Raskoljnikov, toliko zanimljiv…"',takeaway:'<b>Funkcija:</b> ekspozicija — Porfirij uspostavlja da zna R.-ovu teoriju. <b>Psihološki pritisak:</b> R. shvaća da njegov tekst <em>više nije privatni</em>. Prvi trag u istrazi.'},
          2:{title:'II. susret — Policijska postaja (III. dio)',body:'Raskoljnikov sam dolazi k Porfirija. <em>Misli da kontrolira situaciju</em> — da će odigrati „obranu". Porfirij postavlja klopku: <b>pretvara se da je nesiguran u svoje zaključke</b>, citira R.-ov članak naglas, provocira ga protivargumentima. R. je <b>bijesan</b>, jer vidi da Porfirij zna. Unutarnji monolog: <em>„Zna! Sve zna! Ali ne može dokazati."</em> Porfirij izvlači temu o <em>zvonu</em> — priča priču o njemu da ga destabilizira. Na kraju se pojavi <b>Mikolka</b> koji „priznaje" ubojstvo — R. je zbunjen.',quote:'„Rečem vam, naš čovjek je mladi, bolestan, pročitao knjigu — pa sad je vjerovao da je Napoleon."',takeaway:'<b>Funkcija:</b> intelektualni dvoboj — Porfirij kao <em>dvojnik R.-ovog razuma</em>. <b>Psihološki pritisak:</b> R. gubi iluziju kontrole. Mikolkino priznanje = <em>red herring</em> koji Porfirij koristi za daljnji pritisak.'},
          3:{title:'III. susret — Raskoljnikovljev stan (IV. dio)',body:'Porfirij <em>dolazi k Raskoljnikovu</em> — obrat. Više nema pretvaranja. <b>Porfirij priznaje: znam da si ti ubojica</b>, ali nemam dovoljno dokaza za osudu. Zatim savjetuje: <em>„Predajte se sami. Dobit ćete lakšu kaznu. Patnja je velika stvar."</em> Nudi <b>psihološki spas</b>, ne pravni. R. je šokiran — Porfirij je <em>suviše ljudski</em>, suviše blizak. Ovaj susret <b>priprema R. za Sonjin poziv na predaju</b> u V. dijelu.',quote:'„Vi ste ubili, Rodion Romanoviču. Ali predajte se — dobit ćete blaže. Ja vam savjetujem. Patnja je velika stvar."',takeaway:'<b>Funkcija:</b> pragmatični očinski savjet — Porfirij kao <em>sekularni savjetnik paralelno Sonji (duhovnom)</em>. <b>Psihološki pritisak:</b> nestao, zamijenjen <em>razumijevanjem</em>. R. je razoružan. Put do predaje otvoren.'}
        };
        function render(n){
          var d=DATA[n];
          if(!d) return;
          var html='<div class="porf-content-ttl">'+d.title+'</div>';
          html+='<div class="porf-content-body">'+d.body+'</div>';
          html+='<div class="porf-content-quote">'+d.quote+'</div>';
          html+='<div class="porf-content-takeaway">'+d.takeaway+'</div>';
          var el=document.getElementById('porf-content');
          if(el) el.innerHTML=html;
        }
        window.porfSel=function(n,btn){
          document.querySelectorAll('.porf-tab').forEach(function(t){
            t.classList.remove('on');
            t.setAttribute('aria-selected','false');
          });
          if(btn){ btn.classList.add('on'); btn.setAttribute('aria-selected','true'); }
          render(n);
          if(typeof track==='function') track('porf_tab',{n:n},'engagement');
        };
        render(1);
      })();
;
(function initWordCounter(){
        var input=document.getElementById('wc-input');
        if(!input) return;
        var MIN_WORDS=440;
        
        // Load saved draft
        try {
          var saved=localStorage.getItem('mt.hrv.h07.essay_draft');
          if(saved){ input.value=saved; }
        } catch(e){}
        
        function count(){
          var text=input.value;
          var words=text.trim()?text.trim().split(/\\s+/).length:0;
          var chars=text.length;
          var sentences=(text.match(/[.!?]+\\s*(?=[A-ZČĆŠŽĐ]|$)/g)||[]).length;
          var paragraphs=text.split(/\\n\\s*\\n/).filter(function(p){return p.trim()}).length;
          
          document.getElementById('wc-words').textContent=words;
          document.getElementById('wc-chars').textContent=chars;
          document.getElementById('wc-sentences').textContent=sentences;
          document.getElementById('wc-paragraphs').textContent=paragraphs;
          
          var pct=Math.min(100,(words/MIN_WORDS)*100);
          var bar=document.getElementById('wc-progress-bar');
          var lbl=document.getElementById('wc-progress-lbl');
          var progress=document.getElementById('wc-progress');
          var statWords=document.getElementById('wc-stat-words');
          
          if(bar) bar.style.width=pct+'%';
          
          if(words>=MIN_WORDS){
            if(lbl) lbl.textContent='✓ '+words+' / '+MIN_WORDS+' min';
            if(progress) progress.classList.add('pass');
            if(statWords){ statWords.classList.remove('critical'); statWords.classList.add('ok'); }
          } else if(words===0){
            if(lbl) lbl.textContent='0 / '+MIN_WORDS+' min';
            if(progress) progress.classList.remove('pass');
            if(statWords){ statWords.classList.remove('critical'); statWords.classList.remove('ok'); }
          } else {
            if(lbl) lbl.textContent=words+' / '+MIN_WORDS+' min (-'+(MIN_WORDS-words)+')';
            if(progress) progress.classList.remove('pass');
            if(statWords){ statWords.classList.add('critical'); statWords.classList.remove('ok'); }
          }
        }
        
        var debounce;
        input.addEventListener('input',function(){
          clearTimeout(debounce);
          debounce=setTimeout(count,80);
          // Auto-save draft
          try { localStorage.setItem('mt.hrv.h07.essay_draft',input.value); } catch(e){}
        });
        count();
        
        // Expose actions
        window.wcClear=function(){
          if(!confirm('Obrisati cijeli esej?')) return;
          input.value='';
          try { localStorage.removeItem('mt.hrv.h07.essay_draft'); } catch(e){}
          count();
          input.focus();
          if(typeof track==='function') track('wc_clear',{},'engagement');
        };
        window.wcCopy=function(){
          if(!input.value.trim()) return;
          if(navigator.clipboard && navigator.clipboard.writeText){
            navigator.clipboard.writeText(input.value).then(function(){
              var btn=document.getElementById('wc-copy-btn');
              if(btn){ var orig=btn.innerHTML; btn.innerHTML='✓ Kopirano'; setTimeout(function(){btn.innerHTML=orig;},1500); }
            });
          } else {
            input.select(); document.execCommand('copy');
          }
          if(typeof track==='function') track('wc_copy',{words:input.value.trim().split(/\\s+/).length},'engagement');
        };
        window.wcSave=function(){
          try {
            localStorage.setItem('mt.hrv.h07.essay_draft',input.value);
            var btn=event.currentTarget;
            if(btn){ var orig=btn.innerHTML; btn.innerHTML='✓ Spremljeno'; setTimeout(function(){btn.innerHTML=orig;},1500); }
          } catch(e){}
          if(typeof track==='function') track('wc_save',{words:input.value.trim().split(/\\s+/).length},'engagement');
        };
      })();
;
(function initPojmovnikH07(){
      var searchInput=document.getElementById('pojm-search');
      var clearBtn=document.getElementById('pojm-search-clear');
      
      function normalize(s){
        return (s||'').toLowerCase()
          .replace(/č|ć/g,'c').replace(/š/g,'s').replace(/ž/g,'z').replace(/đ/g,'d')
          .trim();
      }
      
      function highlightMatches(el, query){
        // Remove prior highlights
        el.querySelectorAll('mark').forEach(function(m){
          var tn=document.createTextNode(m.textContent);
          m.parentNode.replaceChild(tn,m);
        });
        el.normalize();
        if(!query||query.length<2) return;
        // Only highlight in .pojm-word and .pojm-def; use simple text match
        var targets=[el.querySelector('.pojm-word'),el.querySelector('.pojm-def')];
        targets.forEach(function(t){
          if(!t) return;
          walkText(t, query);
        });
      }
      
      function walkText(node, query){
        if(node.nodeType===3){
          // Text node
          var lower=normalize(node.nodeValue);
          var idx=lower.indexOf(query);
          if(idx===-1) return;
          // Find original case position (approximation: indices align because normalize doesn't shrink text)
          var origText=node.nodeValue;
          var before=origText.substring(0,idx);
          var match=origText.substring(idx,idx+query.length);
          var after=origText.substring(idx+query.length);
          var mark=document.createElement('mark');
          mark.textContent=match;
          var parent=node.parentNode;
          parent.insertBefore(document.createTextNode(before),node);
          parent.insertBefore(mark,node);
          parent.insertBefore(document.createTextNode(after),node);
          parent.removeChild(node);
          // Don't recurse — one match per node is enough for first hit
        } else if(node.nodeType===1 && node.childNodes){
          var children=Array.prototype.slice.call(node.childNodes);
          children.forEach(function(c){ walkText(c, query); });
        }
      }
      
      function filter(){
        var activeBtn=document.querySelector('#pojm-filters .pojm-filter.on');
        var cat=activeBtn?activeBtn.getAttribute('data-cat'):'all';
        var query=searchInput?normalize(searchInput.value):'';
        var items=document.querySelectorAll('#pojm-grid .pojm');
        var shown=0;
        items.forEach(function(item){
          var itemCat=item.getAttribute('data-cat');
          var kw=item.getAttribute('data-kw')||'';
          var txt=normalize(item.textContent);
          var matchCat=(cat==='all'||itemCat===cat);
          var matchQuery=(!query || txt.indexOf(query)!==-1 || normalize(kw).indexOf(query)!==-1);
          var visible=matchCat && matchQuery;
          item.classList.toggle('hidden',!visible);
          if(visible){
            shown++;
            highlightMatches(item, query);
          } else {
            highlightMatches(item, '');
          }
        });
        var countEl=document.getElementById('pojm-count');
        if(countEl){
          if(query){
            countEl.innerHTML='<b>'+shown+'</b> '+(shown===1?'pojam':(shown>=2 && shown<=4?'pojma':'pojmova'))+' za \\''+query+'\\'';
          } else {
            countEl.textContent=shown+' '+(shown===1?'pojam':(shown>=2 && shown<=4?'pojma':'pojmova'))+' prikazano';
          }
        }
        if(clearBtn) clearBtn.classList.toggle('on', !!query);
      }
      
      // Filter buttons
      var filterBtns=document.querySelectorAll('#pojm-filters .pojm-filter');
      filterBtns.forEach(function(btn){
        btn.addEventListener('click',function(){
          filterBtns.forEach(function(b){b.classList.remove('on');});
          btn.classList.add('on');
          filter();
          if(typeof track==='function') track('pojm_filter',{cat:btn.getAttribute('data-cat')},'engagement');
        });
      });
      
      // Search input
      if(searchInput){
        var debounce;
        searchInput.addEventListener('input',function(){
          clearTimeout(debounce);
          debounce=setTimeout(function(){
            filter();
            if(searchInput.value && typeof track==='function'){
              track('pojm_search',{q:searchInput.value.substring(0,30)},'engagement');
            }
          },150);
        });
        // Enter key on empty = focus back
        searchInput.addEventListener('keydown',function(e){
          if(e.key==='Escape'){ window.pojmClear(); searchInput.blur(); }
        });
      }
      
      // Expose clear globally
      window.pojmClear=function(){
        if(searchInput){ searchInput.value=''; filter(); searchInput.focus(); }
      };
    })();
;
/* ═══════════════════════════════════════════
   HRVATSKI H07 — JS
   Tabs · Pojmovnik search · Flashcards · Matching · Kviz
   Email capture · Back-to-top · Event tracking
   ═══════════════════════════════════════════ */

/* ══ SUPABASE CONFIG ══
   ZAMIJENITI prije deploya u production:
   1. SUPABASE_URL      → tvoj Supabase project URL
   2. SUPABASE_ANON_KEY → anon public key iz Settings > API

   Za lokalni test — ostavi placeholder, modal/track će raditi u offline modu.
═════════════════════════════════════════════ */
var SUPABASE_URL = 'https://your-project.supabase.co';
var SUPABASE_ANON_KEY = 'your-anon-key-here';

var CURRENT_CHAPTER = {
  subject: 'hrvatski',
  code: 'h07',
  title: 'Realizam + Dostojevski'
};

/* ══ COUNTDOWN — sljedeći maturalni rok ══
   Konfigurabilno: promijeni datum ovdje za različite sezone.
   Ljetni rok 2026: 8. lipnja 2026 (približno — NCVVO objavljuje točan datum)
═════════════════════════════════════════════ */
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

/* ══ SOCIAL PROOF ══
   Brojeve puni iz Supabase view-a u produkciji. Sad — placeholder "uskoro".
   Kad budeš imao stvarne brojeve, zamijeni _renderSocialProof.
═════════════════════════════════════════════ */
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
      <div class="sp-item">🇭🇷 <b>Besplatno</b> za sve maturante</div>
      <div class="sp-divider"></div>
      <div class="sp-item">📚 Usklađeno s <b>NCVVO</b> katalogom</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ Do mature <b>\${daysToMatura()}</b> dana</div>
    \`;
    return;
  }

  // Kad Supabase stigne — realni brojevi
  if(variant === 'compact'){
    el.innerHTML = \`
      <div class="sp-item">🔥 <b>\${SOCIAL_PROOF.active_learners}</b> uči trenutno</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ <b>\${daysToMatura()}</b> dana do mature</div>
    \`;
  } else {
    el.innerHTML = \`
      <div class="sp-item">🔥 <b>\${SOCIAL_PROOF.active_learners}</b> maturanata uči</div>
      <div class="sp-divider"></div>
      <div class="sp-item">⭐ <b>\${SOCIAL_PROOF.avg_rating}/5</b> (\${SOCIAL_PROOF.review_count} recenzija)</div>
      <div class="sp-divider"></div>
      <div class="sp-item">📈 prosječno <b>\${SOCIAL_PROOF.avg_improvement}</b> nakon 2 mj</div>
      <div class="sp-divider"></div>
      <div class="sp-item urgency">⏰ <b>\${daysToMatura()}</b> dana do mature</div>
    \`;
  }
}

/* ══ EVENT TRACKING ══ */
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

/* ══ SUPABASE SIGNUP ══ */
function supabaseSignup(email, source, chapterCode, meta){
  // Client-only offline fallback: ako URL još nije postavljen, simuliraj success
  if(SUPABASE_URL.indexOf('your-project')>=0){
    return new Promise(function(resolve){
      setTimeout(function(){
        resolve({success:true, already_signed:false, message:'Prijavljen! (Offline način — email nije poslan)'});
      }, 700);
    });
  }
  return fetch(SUPABASE_URL+'/rest/v1/rpc/signup_newsletter',{
    method:'POST',
    headers:{
      'apikey':SUPABASE_ANON_KEY,
      'Authorization':'Bearer '+SUPABASE_ANON_KEY,
      'Content-Type':'application/json',
      'Prefer':'return=representation'
    },
    body:JSON.stringify({
      p_email:email,
      p_source:source,
      p_subject:CURRENT_CHAPTER.subject,
      p_chapter_code:chapterCode||null,
      p_meta:meta||{}
    })
  }).then(function(r){return r.json()}).catch(function(err){
    console.error('Supabase signup error:',err);
    return {success:false, error:'network', message:'Greška u mreži — pokušaj ponovo.'};
  });
}

/* ══ MODAL ══ */
var MODAL_CONTEXT = {source:'other', chapter_code:null};

function openModal(config){
  MODAL_CONTEXT.source = config.source || 'other';
  MODAL_CONTEXT.chapter_code = config.chapter_code || null;
  if(config.ico) document.getElementById('modal-ico').textContent=config.ico;
  if(config.eye) document.getElementById('modal-eye').textContent=config.eye;
  if(config.title) document.getElementById('modal-title').textContent=config.title;
  if(config.desc) document.getElementById('modal-desc').innerHTML=config.desc;
  if(config.preview_title && config.preview_body){
    var p=document.getElementById('modal-preview');
    p.innerHTML='<strong>'+config.preview_title+'</strong>'+config.preview_body;
    p.style.display='block';
  } else {
    document.getElementById('modal-preview').style.display='none';
  }
  document.getElementById('modal-email').value='';
  document.getElementById('modal-submit').disabled=false;
  document.getElementById('modal-submit').textContent='Javi mi →';
  document.getElementById('modal-msg').className='modal-msg';
  document.getElementById('modal-form').style.display='flex';

  var bd=document.getElementById('modal-backdrop');
  bd.classList.add('show');
  setTimeout(function(){document.getElementById('modal-email').focus()},100);

  track('modal_open', {source: MODAL_CONTEXT.source, chapter_code: MODAL_CONTEXT.chapter_code}, 'engagement');
}

function closeModal(){
  document.getElementById('modal-backdrop').classList.remove('show');
}

function submitSignup(ev){
  ev.preventDefault();
  var email=document.getElementById('modal-email').value.trim().toLowerCase();
  var btn=document.getElementById('modal-submit');
  var msg=document.getElementById('modal-msg');

  // Validate
  var rx=/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$/i;
  if(!rx.test(email)){
    msg.className='modal-msg show error';
    msg.textContent='✗ E-mail adresa nije valjana.';
    return false;
  }

  btn.disabled=true;
  btn.textContent='Šaljem...';
  msg.className='modal-msg';

  supabaseSignup(email, MODAL_CONTEXT.source, MODAL_CONTEXT.chapter_code, {
    current_chapter:CURRENT_CHAPTER.code,
    ts:new Date().toISOString()
  }).then(function(res){
    if(res.success){
      msg.className='modal-msg show success';
      msg.textContent = res.already_signed
        ? '✓ Već si prijavljen — javit ćemo ti se!'
        : '✓ Prijavljen! Poslat ćemo ti e-mail čim bude spremno.';
      document.getElementById('modal-form').style.display='none';
      lsSave('mt.hrv.newsletter_signed', true);
      track('signup_success', {
        source: MODAL_CONTEXT.source,
        chapter_code: MODAL_CONTEXT.chapter_code,
        already_signed: res.already_signed || false
      }, 'conversion');
      soundOk();
      setTimeout(closeModal, 2200);
    } else {
      msg.className='modal-msg show error';
      msg.textContent = '✗ '+(res.message||'Nešto je pošlo krivo. Pokušaj ponovo.');
      btn.disabled=false;
      btn.textContent='Javi mi →';
      track('signup_fail', {
        source: MODAL_CONTEXT.source,
        error: res.error || 'unknown'
      }, 'error');
      soundNg();
    }
  });

  return false;
}

/* ══ FULL SCRIPT PRINT (preporučeno, 100% pouzdano) ══
   Koristi postojeći @media print stylesheet — sve tabove vidljive, svijetla pozadina.
   Korisnik u print dijalogu može odabrati "Save as PDF" kao printer. */
function printFullScript(){
  track('full_print_start', {chapter: CURRENT_CHAPTER.code}, 'engagement');
  // Mali delay za feedback prije print dialoga
  var btn = document.getElementById('pdf-print-btn');
  if(btn){
    var originalText = btn.textContent;
    btn.textContent = '🖨 Otvaram dijalog...';
    btn.disabled = true;
    setTimeout(function(){
      window.print();
      setTimeout(function(){
        btn.textContent = originalText;
        btn.disabled = false;
      }, 500);
    }, 100);
  } else {
    window.print();
  }
}

/* ══ CHEAT SHEET: ISOLATED PRINT ══
   Klik na "Ispiši" u cheat kartici → printa SAMO cheat sheet, ne cijelu skriptu */
// afterprint event je čišćiji način za cleanup
if(typeof window !== 'undefined'){
  window.addEventListener('afterprint', function(){
    document.body.classList.remove('print-cheat-only');
  });
}

/* ══ MINI-DIJAGNOSTIKA "Mogu li ovo na maturi?" ══
   5 strateški odabranih pitanja koja pokrivaju širok spektar H07 gradiva.
   Cilj: korisnik za 60s zna gdje stoji prije nego krene učiti. */
var DIAG_QUESTIONS = [
  {
    q: "Tko je autor romana Zločin i kazna?",
    opts: ["Lav Tolstoj", "Ivan Turgenjev", "Fjodor Dostojevski", "Nikolaj Gogolj"],
    correct: 2,
    topic: "Dostojevski — autor"
  },
  {
    q: "Koja je kompozicija Zločina i kazne?",
    opts: [
      "5 činova i epilog",
      "6 dijelova i epilog",
      "12 poglavlja",
      "8 knjiga u stihovima"
    ],
    correct: 1,
    topic: "Kompozicija romana"
  },
  {
    q: "Kako se zove Raskoljnikovljeva teorija?",
    opts: [
      "Teorija utilitarizma",
      "Teorija revolucije",
      "Teorija nadčovjeka (O zločinu)",
      "Teorija altruizma"
    ],
    correct: 2,
    topic: "Teorija nadčovjeka"
  },
  {
    q: 'Koju scenu Sonja čita Raskoljnikovu?',
    opts: [
      "Prispodobu o izgubljenom sinu",
      "Uskrsnuće Lazara (Ivanovo evanđelje)",
      "Govor na gori",
      "Posljednju večeru"
    ],
    correct: 1,
    topic: "Biblijska simbolika"
  },
  {
    q: "Tko je Raskoljnikovljev 'dvojnik' u romanu?",
    opts: [
      "Porfirij Petrovič",
      "Razumihin",
      "Svidrigajlov",
      "Marmeladov"
    ],
    correct: 2,
    topic: "Dvojnik"
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
  try{ sessionStorage.setItem('mt.hrv.h07.diag', 'skipped') }catch(e){}
  track('diag_skip', {chapter: CURRENT_CHAPTER.code}, 'engagement');
}

function diagRestart(){
  diagStart();
}

function diagRender(){
  var q = DIAG_QUESTIONS[diagState.idx];
  if(!q) return diagFinish();
  var qEl = document.getElementById('diag-q');
  var optsEl = document.getElementById('diag-opts');
  var idxEl = document.getElementById('diag-idx');
  var topicEl = document.getElementById('diag-topic');
  if(qEl) qEl.textContent = q.q;
  if(idxEl) idxEl.textContent = (diagState.idx + 1);
  if(topicEl) topicEl.textContent = q.topic || '—';
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
  var msgEl = document.getElementById('diag-res-msg');
  var recEl = document.getElementById('diag-rec');
  var corEl = document.getElementById('diag-correct');
  if(corEl) corEl.textContent = n;

  // Personalizirana poruka i preporuka
  var msg, rec;
  if(n === 5){
    msg = '🏆 Već vladaš H07 — bravo!';
    rec = 'Tvoj fokus: <b>esej alat</b> i <b>citatnik</b> za Dostojgina. Pređi na simulaciju u <a href="/discere?subject=hrvatski&topic=onjegin&ctx=h07_diag_top" onclick="track(\\'upsell_click\\',{ctx:\\'diag_top_score\\',target:\\'discere\\'},\\'conversion\\')">Discere simulatoru</a> da provjeriš pod uvjetima ispita.';
  } else if(n === 4){
    msg = '🎯 Odlično — solidne osnove.';
    rec = 'Imaš većinu, ali jedna rupica. Preporučujemo: <b>Zločin i kazna deep-dive</b> (Tab 1) + <b>Pojmovnik</b> kao revizija. Preskoči duga čitanja, idi direktno na <b>Citatnik</b> i <b>Drill</b>.';
  } else if(n === 3){
    msg = '👍 Dobre osnove — treba malo više rada.';
    rec = 'Imaš osnovni pregled, ali ti fali sigurnost u detaljima. Plan: <b>(1)</b> proradi cijelu Teoriju, <b>(2)</b> Zločin i kazna deep-dive, <b>(3)</b> Drill flashcards 2× prije Kviza.';
  } else if(n === 2){
    msg = '📚 Tu smo da ti pomognemo — krenimo od početka.';
    rec = 'Ne brini — zato si tu. Idi <b>tab po tab redom</b> (Teorija → Zločin i kazna → Esej alat). Ne preskači. Završi s <b>Drillom i Kvizom</b> kao provjera.';
  } else {
    msg = '🌱 Početna točka — sve je pred tobom.';
    rec = 'Realizam je zahtjevna epoha, ali strukturirana — Dostojevski kao centar, Balzac i Flaubert kao kontekst. Prati redoslijed tabova, ne žuri. <b>Cilj #1:</b> razumjeti Raskoljnikova — 8 likova, 6 dijelova kompozicije, teoriju nadčovjeka, Sonju kao moralnu vertikalu (Tab 1, sekcije 01–05). Kad to imaš, sve ostalo dolazi prirodno.';
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
    var s = sessionStorage.getItem('mt.hrv.h07.diag');
    if(s){
      document.getElementById('diag').setAttribute('data-state', 'dismissed');
    }
  }catch(e){}
}

/* ══ PDF EXPORT (v3.6.1) ══
   Lazy-loadan html2pdf.js (CDN). Ako library load ili PDF generacija zakaže,
   fallbackamo na window.print() koji koristi naš print stylesheet. */

var _html2pdfLoading = false;
var _html2pdfReady = (typeof html2pdf !== 'undefined');

function _loadHtml2Pdf(callback){
  if(_html2pdfReady || typeof html2pdf !== 'undefined'){
    _html2pdfReady = true;
    callback(null);
    return;
  }
  if(_html2pdfLoading){
    // Already loading — poll
    var pollAttempts = 0;
    var poll = setInterval(function(){
      pollAttempts++;
      if(typeof html2pdf !== 'undefined'){
        clearInterval(poll);
        _html2pdfReady = true;
        callback(null);
      } else if(pollAttempts > 50){ // 10s max wait
        clearInterval(poll);
        callback(new Error('Library load timeout'));
      }
    }, 200);
    return;
  }
  _html2pdfLoading = true;
  var s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
  s.async = true;
  s.onload = function(){
    _html2pdfReady = true;
    _html2pdfLoading = false;
    callback(null);
  };
  s.onerror = function(){
    _html2pdfLoading = false;
    callback(new Error('CDN failed to load'));
  };
  document.head.appendChild(s);
}

function _pdfFallbackPrint(reason){
  // Loš path — koristimo browser print kao fallback
  if(reason) console.warn('PDF export fallback to print:', reason);
  var btn = document.getElementById('pdf-export-btn');
  var label = document.getElementById('pdf-btn-label');
  if(label) label.textContent = '🖨 Otvaram dijalog za ispis...';
  setTimeout(function(){
    window.print();
    if(btn) btn.disabled = false;
    if(label) label.textContent = '📥 Preuzmi PDF';
  }, 400);
  track('pdf_fallback_print', {reason: String(reason || 'unknown').substring(0,80)}, 'engagement');
}

function generatePDF(){
  var btn = document.getElementById('pdf-export-btn');
  var label = document.getElementById('pdf-btn-label');
  if(btn) btn.disabled = true;
  if(label) label.textContent = '⏳ Učitavam alat...';

  track('pdf_export_start', {chapter: CURRENT_CHAPTER.code}, 'engagement');

  _loadHtml2Pdf(function(err){
    if(err){
      // CDN failed → use native print
      _pdfFallbackPrint('cdn_load_failed');
      return;
    }
    if(label) label.textContent = '⏳ Generiram PDF... (10-20s)';

    // Pamti trenutno stanje tabova
    var layers = document.querySelectorAll('.layer');
    var originalState = [];
    layers.forEach(function(l, i){
      originalState[i] = {
        hasOn: l.classList.contains('on'),
        display: l.style.display
      };
      l.classList.add('on');
      l.style.display = 'block';
    });

    // Sakrij elemente koji ne idu u PDF
    var hideSelectors = [
      '.sidebar', '.sb-hamburger', '.sb-overlay', '.btt',
      '.tabs', '.upsell', '.reveal-lock', '.countdown', '.social-proof',
      '.restore-banner', '.cit-tools', '.soft-hint', '.frustration',
      '.fc-controls', '.mg-board', '.mg-score', '.drill-stats',
      '.yt-grid', '.svg-tt', '.cp-actions', '.pdf-export',
      '#fb-modal-backdrop', '#modal-backdrop', '.foot-feedback',
      '.nav-row', '#qz-app'
    ];
    var hidden = [];
    hideSelectors.forEach(function(sel){
      document.querySelectorAll(sel).forEach(function(el){
        hidden.push({el: el, display: el.style.display});
        el.style.display = 'none';
      });
    });

    document.body.classList.add('pdf-exporting');

    var restoreState = function(){
      layers.forEach(function(l, i){
        if(!originalState[i].hasOn) l.classList.remove('on');
        l.style.display = originalState[i].display || '';
      });
      hidden.forEach(function(h){ h.el.style.display = h.display });
      document.body.classList.remove('pdf-exporting');
    };

    var targetElement = document.querySelector('.content-wrap') || document.body;

    var opt = {
      margin:       [10, 10, 12, 10],
      filename:     'Maturiraj_Hrvatski_H07_Realizam_Dostojevski.pdf',
      image:        {type: 'jpeg', quality: 0.92},
      html2canvas:  {
        scale: 1.3,
        useCORS: false,        // Google Fonts ne podržava CORS za CSS — disable
        allowTaint: true,      // ako resource taintira canvas, pusti — ne baci error
        backgroundColor: '#ffffff',
        logging: false,
        foreignObjectRendering: false,  // SVG <foreignObject> podrška (problematično u Safariju)
        removeContainer: true,
        imageTimeout: 8000,    // 8s timeout za pojedini image (umjesto default 15s)
        ignoreElements: function(el){
          if(!el || !el.tagName) return false;
          var t = el.tagName.toLowerCase();
          // Skip vanjske resource elemente
          if(t === 'iframe' || t === 'video' || t === 'audio' || t === 'embed' || t === 'object') return true;
          // Skip <link> tagove osim print stylesheeta (govori html2canvas da ne fetch-a Google Fonts)
          if(t === 'link' && el.rel === 'stylesheet') return true;
          if(el.classList){
            if(el.classList.contains('svg-tt')) return true;
            if(el.classList.contains('modal-backdrop')) return true;
            if(el.classList.contains('svg-hs-ring')) return true;  // animation može lupiti canvas
            if(el.classList.contains('svg-hint')) return true;
          }
          // Skip ::before/::after pseudo-elementi koji generiraju content (Hero orbs)
          if(el.classList && (el.classList.contains('hero-orb-a') || el.classList.contains('hero-orb-b'))) return true;
          return false;
        }
      },
      jsPDF:        {unit: 'mm', format: 'a4', orientation: 'portrait', compress: true, hotfixes: ['px_scaling']},
      pagebreak:    {mode: ['css', 'legacy'], avoid: ['.cr', '.box-int', '.box-key', '.sc', '.cmp-c', '.yt-card', '.cp-item', '.b20-item']}
    };

    try {
      html2pdf().set(opt).from(targetElement).save().then(function(){
        restoreState();
        if(btn) btn.disabled = false;
        if(label) label.textContent = '✓ Preuzeto!';
        setTimeout(function(){
          if(label) label.textContent = '📥 Preuzmi PDF';
        }, 2400);
        track('pdf_export_success', {chapter: CURRENT_CHAPTER.code}, 'engagement');
        soundOk();
      }).catch(function(genErr){
        console.error('PDF generation failed:', genErr);
        restoreState();
        track('pdf_export_fail', {error: String(genErr).substring(0,100)}, 'error');
        // Fallback: native print
        _pdfFallbackPrint('generation_error');
      });
    } catch(syncErr){
      console.error('PDF sync error:', syncErr);
      restoreState();
      track('pdf_export_fail', {error: 'sync: ' + String(syncErr).substring(0,80)}, 'error');
      _pdfFallbackPrint('sync_error');
    }
  });
}

/* ══ FEEDBACK MODAL (v3.6.1) ══ */
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
  if(btn){btn.disabled=false; btn.textContent='Pošalji →'}
  if(form) form.style.display = 'flex';

  bd.classList.add('show');
  setTimeout(function(){
    var ta = document.getElementById('fb-message');
    if(ta) ta.focus();
  }, 100);

  track('feedback_modal_open', {
    tab: lsLoad('mt.hrv.h07.tab', 0)
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
    p_tab_index: lsLoad('mt.hrv.h07.tab', 0),
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
      btn.textContent = 'Pošalji →';
      soundNg();
    }
  }).catch(function(){
    if(fbMsg){fbMsg.className='modal-msg show error'; fbMsg.textContent='✗ Greška u mreži. Pošalji e-mail na maturirajgreske@gmail.com'}
    btn.disabled = false;
    btn.textContent = 'Pošalji →';
  });

  return false;
}

/* ══ LOCKED SIDEBAR LINK → OPEN MODAL ══ */
function openChapterModal(chapterCode, chapterTitle, era, previewBody){
  openModal({
    ico:'📖',
    eye:'POGLAVLJE U IZRADI · '+era,
    title:chapterCode.toUpperCase()+' · '+chapterTitle+' — uskoro!',
    desc:'Radi se na ovom poglavlju. <strong>Ostavi svoj e-mail</strong> i javit ćemo ti čim izađe. Bez spama, bez newslettera — samo jedan e-mail kad je gotovo.',
    preview_title:'Pregled sadržaja',
    preview_body:previewBody,
    source:'locked_chapter',
    chapter_code:chapterCode.toLowerCase()
  });
}

/* ══ SVG HOTSPOT TOOLTIP (v3.5) ══ */
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

var CIT_STATE = {
  q: '',               // search query
  src: 'all',          // active category filter
  tez: 'all',          // thesis filter (1-7 or 'all')
  diff: 'all',         // difficulty filter (basic/advanced/all)
  favOnly: false,      // show only favorites
  favs: {},            // {id: true} map
  copyCount: {}        // {id: count} map — tracks per-card copy count
};
var CIT_ITEMS_CACHE = null;

function _citItems(){
  if(!CIT_ITEMS_CACHE){
    CIT_ITEMS_CACHE = Array.prototype.slice.call(
      document.querySelectorAll('#l3 .cit-card')
    );
  }
  return CIT_ITEMS_CACHE;
}

function _citNormalize(s){
  return (s||'').toLowerCase()
    .replace(/č|ć/g,'c').replace(/š/g,'s').replace(/ž/g,'z')
    .replace(/đ/g,'d').replace(/[„”"''“”„]/g,'')
    .trim();
}

function _citLoadFavs(){
  try {
    var raw = localStorage.getItem('mt.hrv.h07.cit_favs');
    CIT_STATE.favs = raw ? JSON.parse(raw) : {};
  } catch(e){ CIT_STATE.favs = {}; }
}

function _citSaveFavs(){
  try {
    localStorage.setItem('mt.hrv.h07.cit_favs', JSON.stringify(CIT_STATE.favs));
  } catch(e){}
}

function _citLoadCopyCount(){
  try {
    var raw = localStorage.getItem('mt.hrv.h07.cit_copy');
    CIT_STATE.copyCount = raw ? JSON.parse(raw) : {};
  } catch(e){ CIT_STATE.copyCount = {}; }
}

function _citSaveCopyCount(){
  try {
    localStorage.setItem('mt.hrv.h07.cit_copy', JSON.stringify(CIT_STATE.copyCount));
  } catch(e){}
}

function _citHasActiveFilters(){
  return CIT_STATE.src !== 'all' || CIT_STATE.tez !== 'all' ||
         CIT_STATE.diff !== 'all' || CIT_STATE.favOnly || CIT_STATE.q;
}

function _citApplyFilters(){
  var items = _citItems();
  var q = _citNormalize(CIT_STATE.q);
  var src = CIT_STATE.src;
  var tez = CIT_STATE.tez;
  var diff = CIT_STATE.diff;
  var favOnly = CIT_STATE.favOnly;
  var visibleCount = 0;

  items.forEach(function(el){
    var cat = el.getAttribute('data-cat') || '';
    var id = el.getAttribute('data-cit-id') || '';
    var cardDiff = el.getAttribute('data-diff') || 'basic';
    var cardTez = (el.getAttribute('data-tez') || '').split(',').filter(Boolean);
    var textNode = el.querySelector('.cit-txt');
    var srcNode = el.querySelector('.cit-src');
    var useNode = el.querySelector('.cit-use');
    var haystack = _citNormalize(
      (srcNode ? srcNode.textContent : '') + ' ' +
      (textNode ? textNode.textContent : '') + ' ' +
      (useNode ? useNode.textContent : '')
    );

    var isMustKnow = el.classList.contains('must-know');
    var matchesCat = (src === 'all' || cat === src || (src === 'must' && isMustKnow));
    var matchesTez = (tez === 'all' || cardTez.indexOf(String(tez)) !== -1);
    var matchesDiff = (diff === 'all' || cardDiff === diff);
    var matchesQuery = (!q || haystack.indexOf(q) !== -1);
    var matchesFav = (!favOnly || CIT_STATE.favs[id]);
    var visible = matchesCat && matchesTez && matchesDiff && matchesQuery && matchesFav;

    el.classList.toggle('cit-hidden', !visible);
    if(visible) visibleCount++;
  });

  // Empty state toggle (when filter hides everything)
  var empty = document.getElementById('cit-empty');
  if(empty){
    if(visibleCount === 0){
      empty.classList.add('on');
    } else {
      empty.classList.remove('on');
    }
  }


  // Update count badge
  var vEl = document.getElementById('cit-visible');
  if(vEl) vEl.textContent = visibleCount;

  // Show/hide reset button based on whether filters are active
  var clearBtn = document.getElementById('cit-count-clear');
  if(clearBtn) clearBtn.classList.toggle('on', _citHasActiveFilters());
}

/* Public API — called from onclick handlers in HTML */
function citFilter(src, btnEl){
  CIT_STATE.src = src;
  document.querySelectorAll('#l3 .cit-fbtn').forEach(function(btn){
    var isActive = btn.getAttribute('data-filter') === src;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  _citApplyFilters();
  if(typeof track === 'function') track('cit_filter', {src: src}, 'engagement');
}

function citToggleFav(btnEl){
  var card = btnEl.closest('.cit-card');
  if(!card) return;
  var id = card.getAttribute('data-cit-id');
  if(!id) return;
  var isFav = !!CIT_STATE.favs[id];
  if(isFav){
    delete CIT_STATE.favs[id];
    btnEl.classList.remove('on');
    btnEl.textContent = '☆';
    btnEl.setAttribute('aria-label','Dodaj u favorite');
    btnEl.setAttribute('title','Dodaj u favorite');
  } else {
    CIT_STATE.favs[id] = true;
    btnEl.classList.add('on');
    btnEl.textContent = '★';
    btnEl.setAttribute('aria-label','Ukloni iz favorita');
    btnEl.setAttribute('title','Ukloni iz favorita');
  }
  _citSaveFavs();
  _citUpdateFavCount();
  // If viewing "favorites only", refresh list
  if(CIT_STATE.favOnly) _citApplyFilters();
  if(typeof track === 'function') track('cit_fav', {action: isFav?'remove':'add', id: id}, 'engagement');
}

function citCopy(btnEl){
  var card = btnEl.closest('.cit-card');
  if(!card) return;
  var txtEl = card.querySelector('.cit-txt');
  var srcEl = card.querySelector('.cit-src');
  if(!txtEl) return;
  var id = card.getAttribute('data-cit-id') || '';
  // Build copy text
  var quote = (txtEl.textContent || '').trim();
  var attribution = (srcEl ? srcEl.textContent.replace(/^[^\\w]+\\s*/,'').trim() : '');
  var fullText = attribution ? (quote + '  — ' + attribution) : quote;

  function showToast(msg){
    var toast = document.getElementById('cit-toast');
    if(!toast) return;
    if(msg) toast.textContent = msg;
    toast.classList.add('on');
    clearTimeout(toast._t);
    toast._t = setTimeout(function(){ toast.classList.remove('on'); }, 1800);
  }
  function incrementCount(){
    if(!id) return;
    CIT_STATE.copyCount[id] = (CIT_STATE.copyCount[id] || 0) + 1;
    _citSaveCopyCount();
    btnEl.setAttribute('data-count', CIT_STATE.copyCount[id]);
  }
  function mark(){
    btnEl.classList.add('copied');
    btnEl.textContent = '✓';
    incrementCount();
    setTimeout(function(){
      btnEl.classList.remove('copied');
      btnEl.textContent = '📋';
    }, 1500);
    showToast('📋 Citat kopiran');
  }

  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(fullText).then(mark).catch(function(){
      _citFallbackCopy(fullText); mark();
    });
  } else {
    _citFallbackCopy(fullText); mark();
  }
  if(typeof track === 'function'){
    track('cit_copy', {id: id, count: CIT_STATE.copyCount[id] || 1}, 'engagement');
  }
}

function _citFallbackCopy(text){
  try {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly','');
    ta.style.position='absolute'; ta.style.left='-9999px';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  } catch(e){}
}

/* Thesis filter */
function citFilterByTez(tez, btnEl){
  CIT_STATE.tez = tez;
  document.querySelectorAll('#l3 .cit-diffbtn[data-tez]').forEach(function(b){
    var isActive = String(b.getAttribute('data-tez')) === String(tez);
    b.classList.toggle('active', isActive);
  });
  // If triggered from a tez tag inside a card, also highlight the tez sub-filter button
  _citApplyFilters();
  if(typeof track === 'function') track('cit_filter_tez', {tez: tez}, 'engagement');
}

/* Difficulty filter */
function citFilterByDiff(diff, btnEl){
  CIT_STATE.diff = diff;
  document.querySelectorAll('#l3 .cit-diffbtn[data-diff]').forEach(function(b){
    var isActive = b.getAttribute('data-diff') === diff;
    b.classList.toggle('active', isActive);
  });
  _citApplyFilters();
  if(typeof track === 'function') track('cit_filter_diff', {diff: diff}, 'engagement');
}

/* Random citat — scroll to and highlight */
function citRandom(){
  var visible = _citItems().filter(function(el){ return !el.classList.contains('cit-hidden'); });
  if(!visible.length) return;
  var pick = visible[Math.floor(Math.random() * visible.length)];
  // Remove focus class from all
  _citItems().forEach(function(el){ el.classList.remove('cit-focus'); });
  // Add + scroll
  pick.classList.add('cit-focus');
  pick.scrollIntoView({behavior: 'smooth', block: 'center'});
  setTimeout(function(){ pick.classList.remove('cit-focus'); }, 1300);
  // Toast
  var toast = document.getElementById('cit-toast');
  if(toast){
    toast.textContent = '🎲 Slučajan citat';
    toast.classList.add('on');
    clearTimeout(toast._t);
    toast._t = setTimeout(function(){ toast.classList.remove('on'); }, 1500);
  }
  if(typeof track === 'function') track('cit_random', {id: pick.getAttribute('data-cit-id')}, 'engagement');
}

/* Toggle "only favorites" view */
function citToggleFavOnly(){
  CIT_STATE.favOnly = !CIT_STATE.favOnly;
  var btn = document.getElementById('cit-favonly-btn');
  if(btn){
    btn.classList.toggle('active', CIT_STATE.favOnly);
    // Update only the star icon (text node before the count span)
    btn.childNodes[0].nodeValue = (CIT_STATE.favOnly ? '★' : '☆') + ' Favoriti (';
  }
  _citApplyFilters();
  if(typeof track === 'function') track('cit_fav_only', {on: CIT_STATE.favOnly}, 'engagement');
}

function _citUpdateFavCount(){
  var el = document.getElementById('cit-fav-count');
  if(el) el.textContent = Object.keys(CIT_STATE.favs).length;
}

/* Clear all filters */
function citClearFilters(){
  CIT_STATE.src = 'all';
  CIT_STATE.tez = 'all';
  CIT_STATE.diff = 'all';
  CIT_STATE.q = '';
  CIT_STATE.favOnly = false;

  // Reset UI
  document.querySelectorAll('#l3 .cit-fbtn').forEach(function(b){
    b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
  });
  document.querySelectorAll('#l3 .cit-diffbtn').forEach(function(b){
    var isAll = b.getAttribute('data-tez') === 'all' || b.getAttribute('data-diff') === 'all';
    b.classList.toggle('active', isAll);
  });
  var favBtn = document.getElementById('cit-favonly-btn');
  if(favBtn){
    favBtn.classList.remove('active');
    favBtn.childNodes[0].nodeValue = '☆ Favoriti (';
  }
  _citApplyFilters();
  if(typeof track === 'function') track('cit_clear_filters', {}, 'engagement');
}

/* Scroll to specific citat (from pinned top 5) */
function citScrollTo(cid){
  var card=document.querySelector('[data-cit-id="'+cid+'"]');
  if(!card) return;
  // Reset filters if card is hidden
  if(card.classList.contains('cit-hidden')){
    citClearFilters();
  }
  // Remove focus from all
  _citItems().forEach(function(el){ el.classList.remove('cit-focus'); });
  // Scroll + animate
  card.classList.add('cit-focus');
  card.scrollIntoView({behavior:'smooth',block:'center'});
  setTimeout(function(){ card.classList.remove('cit-focus'); },1300);
  if(typeof track==='function') track('cit_pinned_click',{id:cid},'engagement');
}

/* Toggle pinned top 5 visibility */
function citPinnedToggle(){
  var panel=document.getElementById('cit-pinned');
  if(!panel) return;
  var isCollapsed=panel.classList.toggle('collapsed');
  var btn=panel.querySelector('.cit-pinned-toggle');
  if(btn) btn.textContent=isCollapsed?'▼ Prikaži top 5':'▲ Sakrij top 5';
  try { localStorage.setItem('mt.hrv.h07.pinned_collapsed', isCollapsed?'1':'0'); } catch(e){}
  if(typeof track==='function') track('cit_pinned_toggle',{collapsed:isCollapsed},'engagement');
}

function _citInit(){
  _citLoadFavs();
  _citLoadCopyCount();
  // Restore pinned collapsed state
  try {
    var pinned=document.getElementById('cit-pinned');
    if(pinned && localStorage.getItem('mt.hrv.h07.pinned_collapsed')==='1'){
      pinned.classList.add('collapsed');
      var btn=pinned.querySelector('.cit-pinned-toggle');
      if(btn) btn.textContent='▼ Prikaži top 5';
    }
  } catch(e){}
  // Mark existing favorites visually + restore copy count badges
  _citItems().forEach(function(card){
    var id = card.getAttribute('data-cit-id');
    if(id && CIT_STATE.favs[id]){
      var favBtn = card.querySelector('.cit-btn.fav');
      if(favBtn){
        favBtn.classList.add('on');
        favBtn.textContent = '★';
        favBtn.setAttribute('aria-label','Ukloni iz favorita');
        favBtn.setAttribute('title','Ukloni iz favorita');
      }
    }
    if(id && CIT_STATE.copyCount[id]){
      var copyBtn = card.querySelector('.cit-btn.copy');
      if(copyBtn){
        copyBtn.setAttribute('data-count', CIT_STATE.copyCount[id]);
      }
    }
  });
  // Set total count + fav count
  var totalEl = document.getElementById('cit-total');
  if(totalEl) totalEl.textContent = _citItems().length;
  _citUpdateFavCount();
  _citApplyFilters();
}

/* ══ TABS ══ */
var quizInited=false, drillInited=false;
var VISITED_TABS={};
var QUIZ_PASSED=false; // nakon kviza ≥60%
var _tabStartTime = Date.now();

/* Breadcrumb tab labele (v3.6) */
var TAB_LABELS = ['Teorija','Zločin i kazna','Esej alat','Citatnik','Pojmovnik','Drill','Kviz','Checkpoint'];

/* ══ SIDEBAR + PROGATE JS (v2) ══ */
/* ══════════════════════════════════════════════════════════════
   SIDEBAR + PROGATE JS — Maturiraj Hrvatski v2
   
   Ubacuje se u glavni <script> blok poglavlja (prije sw() funkcije).
   Ovisi o CURRENT_CHAPTER.code (string, npr. 'h11' ili 'd10').
   ══════════════════════════════════════════════════════════════ */

/* ══ SIDEBAR ACTIVATION ══
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
        openChapterModal(code, title, code.indexOf('d')===0?'Obvezatno djelo':'Poglavlje',
                         'Još u pripremi. Ostavi e-mail i javit ćemo ti kad izađe.');
        return false;
      });
    } else {
      item.classList.add('completed');
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

/* ══ TIER DETECTION + PROGATE ══
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



/* ══ MUST-KNOW BOX — expand/collapse ══ */
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

/* ══ FC (Flashcards) paywall — free tier limit ══ */
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
             '<div class="drill-paywall-ico">🔓</div>' +
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

/* ══ Quiz paywall — free tier limit ══ */
var QZ_FREE_LIMIT = 5;
function qzIsPaid(){
  var t = (document.body.getAttribute('data-tier')||'free');
  return t === 'standard' || t === 'pro';
}
function qzShowPaywall(){
  var app = document.getElementById('qz-app');
  if(!app) return;
  var chapter = (typeof CURRENT_CHAPTER !== 'undefined' && CURRENT_CHAPTER.code) || 'unknown';
  app.innerHTML = '<div class="qz-paywall"><div class="qz-paywall-ico">🎯</div>' +
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
  var prevTab = lsLoad('mt.hrv.h07.tab', null);
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
  if(i===3){CIT_ITEMS_CACHE=null;_citApplyFilters();}
  if(i===5&&!drillInited){initDrill();initMatch();drillInited=true;}
  if(i===6&&!quizInited){renderQuizIntro();quizInited=true;}
  lsSave('mt.hrv.h07.tab',i);

  VISITED_TABS[i]=true;
  lsSave('mt.hrv.h07.visited',VISITED_TABS);
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
        b.textContent='✓';
        t.appendChild(b);
      }
    } else {
      if(existing) existing.remove();
    }
  });
}

/* ══ SIDEBAR ══ */
function toggleSidebar(){var s=document.getElementById('sidebar'),o=document.getElementById('overlay');s.classList.toggle('mobile-open');o.classList.toggle('show')}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show')}

/* ══ LOCALSTORAGE ══ */
function lsSave(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function lsLoad(k,def){try{var v=localStorage.getItem(k);return v!==null?JSON.parse(v):def}catch(e){return def}}

/* ══ SOUND ══ */
function beep(f,d,v,t){try{var c=new(window.AudioContext||window.webkitAudioContext)(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=f;o.type=t||'sine';g.gain.setValueAtTime(v||0.08,c.currentTime);g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+d);o.start(c.currentTime);o.stop(c.currentTime+d)}catch(e){}}
function soundOk(){beep(660,.1,.08,'sine');setTimeout(function(){beep(880,.14,.07,'sine')},110)}
function soundNg(){beep(200,.18,.08,'sawtooth')}
function soundDone(){[440,550,660,880].forEach(function(f,i){setTimeout(function(){beep(f,.18,.07,'sine')},i*90)})}

/* ══ PROGRESS ══ */
function updateProgress(pct){
  var p=Math.max(5,pct);
  var pb=document.getElementById('prog-bar'); if(pb) pb.style.width=p+'%';
  var pct2=document.getElementById('prog-pct'); if(pct2) pct2.textContent=p+'%';
  var hp=document.getElementById('hero-pb'); if(hp) hp.style.width=p+'%';
  var hl=document.getElementById('hero-prog-lbl'); if(hl) hl.textContent=p+'% završeno';
  lsSave('mt.hrv.h07.prog',p);
}

/* ══ RESTORE BANNER ══ */
function checkRestore(){
  var prog=lsLoad('mt.hrv.h07.prog',null);
  var tab=lsLoad('mt.hrv.h07.tab',null);
  var cp=lsLoad('mt.hrv.h07.cp',null);
  var visited=lsLoad('mt.hrv.h07.visited',null);
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
  var tab=lsLoad('mt.hrv.h07.tab',0);
  var prog=lsLoad('mt.hrv.h07.prog',5);
  var visited=lsLoad('mt.hrv.h07.visited',{});
  VISITED_TABS=visited;
  if(prog) updateProgress(prog);
  updateTabBadges();
  cpLoad();
  if(tab!==null) sw(parseInt(tab));
}
function dismissRestore(){
  document.getElementById('restore-banner').classList.remove('show');
  ['mt.hrv.h07.prog','mt.hrv.h07.tab','mt.hrv.h07.cp','mt.hrv.h07.visited','mt.hrv.h07.quiz_passed'].forEach(function(k){try{localStorage.removeItem(k)}catch(e){}});
  VISITED_TABS={0:true};
  QUIZ_PASSED=false;
  document.querySelectorAll('.cp-item.done').forEach(function(el){el.classList.remove('done')});
  updateTabBadges();
  recomputeProgress();
  cpUpdate();
}

/* ═══════════════════════════════════════════
   POJMOVNIK — replaced by Tab 4 IIFE (initPojmovnikH07)
   ═══════════════════════════════════════════ */
/* Old live-search logic removed — H07 uses new initPojmovnikH07 in Tab 4 */



/* ═══════════════════════════════════════════
   FLASHCARDS
   ═══════════════════════════════════════════ */
var FC_CARDS=[
  {front:'Kako se zove protagonist Zločina i kazne?',back:'<b>Rodion Romanovič Raskoljnikov</b> — 23 godine, bivši student prava iz Peterburga. Ime od rus. <em>raskoljnik</em> = raskolnik, skismaatik — <b>onaj koji se odvojio od zajednice i Boga</b>.'},
  {front:'Koju teoriju Raskoljnikov razvija?',back:'<b>Teorija nadčovjeka</b> iz članka <em>„O zločinu"</em>. Ljudi se dijele na <em>obične</em> (poslušni masi) i <em>neobične</em> (nadčovjeci — Napoleon, Muhamed, Newton). Neobični imaju pravo <b>prekršiti zakon radi više ideje</b>. Anticipira Nietzscheovog Übermensch-a.'},
  {front:'Koga ubija Raskoljnikov?',back:'<b>Alonu Ivanovnu</b> (lihvaricu) sjekirom — planirana žrtva. <b>Lizavetu</b> (Aloninu polusestru) — neplanirana, jer ga je zatekla. Ironija: Lizaveta je bila Sonjina prijateljica.'},
  {front:'Tko je Sonja Marmeladova?',back:'<b>Sonja Semjonovna</b>, 18 godina. Kći pijanca Marmeladova. Prisiljena na prostituciju (žuta kartica) da prehrani obitelj. Duboko pravoslavna. <em>Moralna vertikala romana</em> — čita Raskoljnikovu evanđelje, savjetuje predaju, ide u Sibir.'},
  {front:'Koju biblijsku scenu Sonja čita?',back:'<b>Uskrsnuće Lazara</b> iz <em>Ivanovog evanđelja, 11. glava</em>. Lazar je mrtav 4 dana, Krist ga zove iz groba. <em>Paralela: Raskoljnikov je duhovno mrtav — treba mu uskrsnuće</em>. Scena prekretnica (IV. dio).'},
  {front:'Koliko dijelova ima Zločin i kazna?',back:'<b>6 dijelova + Epilog</b>. I–II: zločin i paranoja. III–IV: intelektualna igra s Porfirijem + Sonja. V: priznanje Sonji. VI: rastanak i predaja. Epilog: Sibir, iskupljenje.'},
  {front:'Tko je Porfirij Petrovič?',back:'<b>Istražitelj</b>. Lukav, psihološki profinjen. Zna da je Raskoljnikov ubojica od prvog susreta. Kroz <em>3 susreta</em> vodi ga do priznanja. Savjetuje: <b>sam se predaj — dobit ćeš blaže</b>. <em>Intelektualni dvojnik Raskoljnikovu</em>.'},
  {front:'Tko je Svidrigajlov?',back:'<b>Bivši Dunjin poslodavac</b>. Oko 50 godina. Cinik, razvratnik, možda otrovao ženu. <em>Raskoljnikovljev dvojnik</em> — jednaka filozofija, bez savjesti. Pokušava ucijeniti Dunju. <b>Ubija se na mostu</b>. Njegov kraj = što R. bez Sonje.'},
  {front:'Tko je Dunja?',back:'<b>Avdotja Raskoljnikova</b>, bratova sestra. Lijepa, ponosna, obrazovana. Namjerava se udati za Lužina (koristoljubivog odvjetnika) <em>zbog brata</em>. Raskoljnikov odbija. Raskida s Lužinom. Udaje se za <b>Razumihina</b>.'},
  {front:'Tko je Razumihin?',back:'<b>Raskoljnikovljev odani prijatelj</b>, student. Ime od rus. <em>razum</em> = pamet. Zdrav, radišan — <em>antiteza Raskoljnikovu</em>. Brine o njemu dok je bolestan. Ženi se Dunjom. <b>Alternativa Raskoljnikovljevoj teoriji</b>.'},
  {front:'Što je polifonija (Bahtin)?',back:'Mihail <b>Bahtin</b> (1929., <em>Problemi poetike Dostojevskog</em>): u Dostojevskog <em>svaki lik ima svoj nezavisni glas i ideju</em> — autor ne daje konačnu riječ. Raskoljnikov, Sonja, Porfirij, Svidrigajlov su „ravnopravni glasovi".'},
  {front:'Što je psihološki realizam?',back:'Dostojevski specifičnost. Gdje Balzac opisuje društvo izvana, <b>Dostojevski ulazi u glavu lika</b>: paranoja, savjest, racionalizacija. Unutarnji monolog. <em>Prethodnica stream of consciousness i psihoanalize</em>.'},
  {front:'Zašto je žuta boja važna?',back:'Dominantna boja romana. <b>Raskoljnikovljev stan — žute tapete</b> („sobica kao lijes"). <b>Sonjina žuta kartica</b> (registracija prostitutki). Alonin žuti kaput. <em>Žuto = grad koji truje, trpi, iscrpljuje</em>.'},
  {front:'Koje je značenje broja 7?',back:'<b>Broj 7 — biblijski simbol savršenstva</b> (dani stvaranja). R. ubija u 7:00h, čeka 7 dana, ide 730 koraka. <em>Ironija: čin razdvajanja u broj cjeline</em>. Sonja ima 18 (3×6, broj nesavršenosti).'},
  {front:'Koji je ključni citat Sonjin savjet?',back:'<em>„Idi smjesta, sad odmah. Stani na raskršću, pokloni se narodu do zemlje i poljubi zemlju. Jer si i pred njom sagriješio."</em> — V. dio. Sonja poziva Raskoljnikova na <b>javnu ispovijed i pokoru</b>.'},
  {front:'Što R. priznaje Sonji o motivu?',back:'<em>„Želio sam biti Napoleon — to je sve. Nisam ubio zbog novca."</em> — V. dio. Priznanje: motiv nije bio utilitarni niti egzistencijalni, nego <b>samodokazivanje</b>. <em>Trenutak istine</em>.'},
  {front:'Kako završava roman?',back:'<b>Epilog u Sibiru</b>, 1,5 godinu nakon predaje. R. u katorgi (8 god.). Sonja ga prati. <em>San o bezumnim bakterijama</em> — proročanstvo totalitarizama 20. st. Buđenje: pada Sonji pred noge, plače. <em>„Nova priča počinje, priča o postupnom preporodu čovjeka."</em>'},
  {front:'Što je nihilizam u Rusiji 1860-ih?',back:'Filozofski stav omladine: <em>odbacivanje svih tradicionalnih vrijednosti</em> (crkva, država, obitelj, moral). Od lat. <em>nihil</em> = ništa. Ikona: <b>Bazarov</b> (Turgenjev, <em>Oci i sinovi</em>, 1862.). <b>Raskoljnikovljeva teorija je nihilistička</b>.'},
  {front:"Što je 'suvišan čovjek'?",back:'Tip lika ruske književnosti 19. st. — <em>talentirani, obrazovan plemić bez svrhe</em>. Onjegin prvi (H06). Slijede: Pečorin, Rudin, Oblomov, <b>Raskoljnikov</b>. Karakteristike: dosada, otuđenost. <em>R. je suvišni čovjek doveden do kriminala</em>.'},
  {front:'Koji je most H07 → H08?',back:'<b>Kafka — Preobražaj</b> (obvezatno 2026). Gregor Samsa i Raskoljnikov imaju: <em>alijenaciju</em>, <em>neprepoznavanje sebe</em>, <em>transformaciju iznutra</em>, <em>svijet koji ih više ne razumije</em>. Dostojevski kao preteča modernog proznog pisma.'}
];
var fcIdx=0, fcKnown=0, fcUnknown=0, fcOrder=[];

/* ══ DRILL STATE PERSISTENCE (v3.5) ══
   Pamti kartice i progress dok se korisnik mota kroz tabove.
   sessionStorage — resetira se na novi tab/window (svjesno, da ne
   blokira "novi krug" između dana). Za cross-session, switch na lsSave.
═════════════════════════════════════════════ */
var DRILL_SS_KEY = 'mt.hrv.h07.drill';

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
    document.getElementById('fc-term').textContent='Gotovo! 🎉';
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

/* ═══════════════════════════════════════════
   MATCHING GAME — djelo → autor
   ═══════════════════════════════════════════ */
var MG_PAIRS=[
  {l:'Raskoljnikov', r:"Bivši student, 'nadčovjek' po teoriji"},
  {l:'Sonja', r:'Moralna vertikala, čita evanđelje'},
  {l:'Porfirij', r:'Istražitelj, psihološki dvojnik'},
  {l:'Svidrigajlov', r:'Cinični dvojnik, ubija se'},
  {l:'Dunja', r:'Sestra, žrtvuje se za brata'},
  {l:'Razumihin', r:"Odani prijatelj, 'razum'"},
  {l:'Lužin', r:'Koristoljubivi odvjetnik'},
  {l:'Marmeladov', r:'Sonjin otac, pijani monolog'},
  {l:'Katerina', r:'Maćeha, tuberkuloza, ludi'}
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
        board.insertAdjacentHTML('afterend','<div class="mg-done" id="mg-done">🏆 SVI PAROVI SPARENI!</div>');
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

/* ═══════════════════════════════════════════
   KVIZ
   ═══════════════════════════════════════════ */
var QUIZ=[
  {q:'Tko je autor romana Zločin i kazna?', opts:['Lav Tolstoj','Ivan Turgenjev','Fjodor Dostojevski','Aleksandar Puškin'], correct:2, exp:'Fjodor Mihajlovič <b>Dostojevski</b> (1821.–1881.), veliki ruski realist i utemeljitelj psihološkog realizma.'},
  {q:'Kada izlazi roman Zločin i kazna?', opts:['1849.','1856.','1866.','1881.'], correct:2, exp:'<b>1866.</b> — serijalno objavljen u časopisu <em>Ruski vjesnik</em>.'},
  {q:'Koja je kompozicija Zločina i kazne?', opts:['5 činova + proslov','6 dijelova + epilog','7 poglavlja','4 knjige + pogovor'], correct:1, exp:'<b>6 dijelova + Epilog</b>. I–II: zločin i paranoja. III–IV: intelektualna igra i Sonja. V: priznanje. VI: predaja. Epilog: Sibir.'},
  {q:'Koga ubija Raskoljnikov sjekirom?', opts:['Svidrigajlova','Alonu Ivanovnu i Lizavetu','Porfirija','Lužina'], correct:1, exp:'<b>Alonu Ivanovnu</b> (planirano — lihvarica) i <b>Lizavetu</b> (neplanirano — zatekla ga je). Ironija: Lizaveta je bila Sonjina prijateljica.'},
  {q:"Kako se zove teorija u Raskoljnikovljevom članku 'O zločinu'?", opts:['Teorija revolucije','Teorija klase','Teorija nadčovjeka (obični vs neobični)','Teorija altruizma'], correct:2, exp:'<b>Teorija nadčovjeka</b>: obični ljudi su poslušni zakonu, neobični (Napoleon, Muhamed) imaju pravo prekršiti ga radi više ideje. <em>Anticipira Nietzschea 17 godina prije.</em>'},
  {q:'Što znači Raskoljnikov u prijevodu?', opts:['Vještak','Raskolnik, skismaatik','Razbojnik','Revolucionar'], correct:1, exp:'Od rus. <em>raskol</em> = razdvajanje. <b>Raskoljnik = onaj koji se odvojio</b> — od crkve, zajednice, Boga. Ime je program.'},
  {q:'Tko je Sonja Marmeladova?', opts:['Raskoljnikovljeva sestra','Prostitutka iz nužde, moralna vertikala','Alonina polusestra','Porfirijeva kći'], correct:1, exp:'<b>Sonja</b>, 18 godina, kći pijanca Marmeladova. Prisiljena na prostituciju da prehrani maćehu i polubraću. <em>Duboko pravoslavna — moralna vertikala romana</em>.'},
  {q:'Koju biblijsku scenu Sonja čita Raskoljnikovu?', opts:['Izgubljeni sin','Govor na gori','Uskrsnuće Lazara','Posljednja večera'], correct:2, exp:'<b>Uskrsnuće Lazara</b> (Ivanovo evanđelje, 11). <em>Lazar mrtav 4 dana — Krist ga zove iz groba</em>. Paralela: Raskoljnikov je duhovno mrtav.'},
  {q:"Tko je Raskoljnikovljev 'dvojnik' u romanu?", opts:['Porfirij','Razumihin','Svidrigajlov','Marmeladov'], correct:2, exp:'<b>Svidrigajlov</b> — ista filozofija „nadčovjeka", ali bez grižnje. <em>Ubija se — njegov kraj je što bi Raskoljnikov bio bez Sonje</em>.'},
  {q:'Tko je Porfirij Petrovič?', opts:['Raskoljnikovljev prijatelj','Istražitelj policije','Lužinov partner','Sonjin stric'], correct:1, exp:'<b>Porfirij</b> — istražitelj. Lukav. Zna od početka da je R. ubojica. Kroz <em>3 psihološka susreta</em> vodi ga do predaje. Savjetuje: sam se predaj.'},
  {q:'Što je polifonija?', opts:['Više glasova u horu','Bahtinov pojam: svaki lik nezavisan glas','Stihotvorba','Tipski likovi'], correct:1, exp:'<b>Mihail Bahtin</b> (1929.): u Dostojevskog <em>svaki lik ima nezavisni glas i ideju</em> — autor ne daje konačnu riječ. Suprotno monologičkom romanu.'},
  {q:'Koja je dominantna boja u romanu?', opts:['Crvena','Plava','Žuta','Zelena'], correct:2, exp:'<b>Žuta</b>: R.-ov stan („sobica kao lijes" s žutim tapetama), Sonjina žuta kartica, Alonin kaput, Peterburg u vrućini. <em>Grad koji truje</em>.'},
  {q:"Što je Sonjina 'žuta kartica'?", opts:['Diplomatska putovnica','Registracija prostitutki u carskoj Rusiji','Kreditna kartica','Ulaznica za kazalište'], correct:1, exp:'<b>Žuta kartica</b> — službena registracija prostitutki: osobni dokumenti, liječnički nadzor, lokacija. Fizički predmet ponižavanja.'},
  {q:'Gdje završava radnja u Epilogu?', opts:['Moskva','Sankt-Peterburg','Sibir','Odessa'], correct:2, exp:'<b>Sibir</b> — katorga (8 god.). Sonja ga prati. Pada joj pred noge, plače. <em>Suprotnost Peterburgu</em>: hladno, bijelo, čisto.'},
  {q:'Što R. sanja u Sibiru (prije buđenja)?', opts:['Ubojstvo lihvarice','Svoju majku','Bezumne bakterije — ideološki fanatizam','Katerinu'], correct:2, exp:'<b>San o bezumnim bakterijama</b>: ljudi se pobijaju u besmislenoj mržnji, svatko misli da zna istinu. <em>Dostojevski proročki predviđa totalitarizme 20. st.</em>'},
  {q:'Koji je ključni citat Sonje?', opts:["'Sve je dopušteno'","'Pati — to je put'","'Ja sam Napoleon'","'Patnja je besmislena'"], correct:1, exp:'Sonja <em>savjetuje patnju kao put iskupljenja</em>. <b>Ključno za Tezu 2 i 7</b>. Pravoslavna tradicija patnje kao duhovnog puta.'},
  {q:"Što je 'suvišan čovjek' u ruskoj književnosti?", opts:['Suvišak u romanu','Tip talentirana, bezciljnog plemića','Nepotreban dokument','Plesač u baletu'], correct:1, exp:'Tip: <em>talentirani, obrazovan plemić bez svrhe</em>. Prvi Onjegin (Puškin, H06). Slijede: Pečorin, Oblomov, <b>Raskoljnikov</b>. <em>R. je suvišan čovjek doveden do kriminala</em>.'},
  {q:'Što anticipira Raskoljnikovljeva teorija?', opts:['Marxizam','Nietzscheovog Übermensch-a (1883.)','Freudovu psihoanalizu','Darvinizam'], correct:1, exp:'<b>Nietzscheov Übermensch</b> (Tako je govorio Zaratustra, 1883.). Dostojevski kritizira nadčovjeka <em>17 godina prije</em> Nietzschea. Nietzsche: „Dostojevski je jedini psiholog od kojeg sam nešto naučio."'},
  {q:'Koja je posljednja rečenica romana?', opts:["'Život je san'","'Vrijeme je završilo'","'Ali tu počinje nova povijest... No to je već druga priča'","'Svi smo umrli'"], correct:2, exp:'<b>Otvoreni kraj</b>: <em>„No to je već druga priča"</em>. Dostojevski obećava nastavak o preporodu čovjeka — <b>nikada ga ne piše</b>. Iskupljenje je proces, ne događaj.'},
  {q:'Što je glavna razlika Dostojevskog od Tolstoja?', opts:['D. piše kraće romane','D. ima psihološki realizam + polifoniju; T. monološki epski roman','D. živi u Moskvi, T. u Peterburgu','D. je ateist, T. vjernik'], correct:1, exp:'<b>Dostojevski</b>: psihološki realizam, polifonija (svaki lik glas), introspektivno. <b>Tolstoj</b>: monološki epski roman (Rat i mir), društvena panorama, autoritativni narator.'}
];
var QUIZ_SHUFFLED=QUIZ.slice();
var qzState={idx:0,score:0,answered:[]};

function renderQuizIntro(){
  var el=document.getElementById('qz-app');
  el.innerHTML=\`
    <div class="qz-start">
      <div class="qz-start-ico">🧠</div>
      <h3>20 pitanja · bez vremena</h3>
      <p>Pitanja pokrivaju cijelo poglavlje: Dostojevski (Zločin i kazna), realizam kao epoha, teorija nadčovjeka, Sonja kao moralna vertikala, psihološki realizam, te ostali realisti (Balzac, Flaubert, Dickens, Tolstoj). Na kraju dobivaš ocjenu i objašnjenja.</p>
      <button class="fcb primary" onclick="qzStart()">Započni kviz →</button>
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
  fb.innerHTML=\`<b>\${ok?'✓ Točno!':'✗ Pogrešno.'}</b> \${q.exp}\`;
  var isLast=qzState.idx===QUIZ.length-1;
  document.getElementById('qz-nav').innerHTML=\`<button class="fcb primary" onclick="qzNext()">\${isLast?'Prikaži rezultat':'Sljedeće pitanje'} →</button>\`;
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

/* ══ SHARE ══ */
function qzShare(pct,score){
  var url='https://maturiraj.hr/skripte/hrvatski/h07';
  var text='Prošao/la sam kviz iz H07 · Realizam + Dostojevski na maturiraj.hr — '+score+'/'+QUIZ.length+' ('+pct+'%) 🌹';
  var fb=document.getElementById('qz-share-fb');

  // Try Web Share API (mobile)
  if(navigator.share){
    navigator.share({title:'Maturiraj.hr · H07 Kviz',text:text,url:url})
      .then(function(){if(fb)fb.textContent='Podijeljeno ✓'})
      .catch(function(){/* user cancelled, silent */});
    return;
  }
  // Fallback: copy to clipboard
  var full=text+'\\n'+url;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(full).then(function(){
      if(fb){fb.textContent='✓ Link kopiran! Zalijepi u WhatsApp/Instagram';setTimeout(function(){fb.textContent=''},3500)}
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
  if(pct>=90){grade='ODLIČAN';msg='Spreman si za esej o Zločinu i kazni — teorija i citati u rukama.';ico='🏆';scoreBand='great'}
  else if(pct>=75){grade='VRLO DOBAR';msg='Solidno poznaješ gradivo. Doradi par tema.';ico='💪';scoreBand='good'}
  else if(pct>=60){grade='DOBAR';msg='Dobra osnova. Ponovi pojmovnik i Zločin i kazna deep-dive.';ico='📚';scoreBand='good'}
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
        <button class="fcb" onclick="sw(1)">← Zločin i kazna</button>
        <button class="fcb" onclick="sw(4)">📚 Pojmovnik</button>
      </div>
      <div id="qz-share-fb" style="margin-top:14px;font-family:var(--mono);font-size:11px;color:var(--green);min-height:16px"></div>
    </div>
  \`;

  // ═══ PLAYBOOK P3.2: REZULTAT REVEAL — najvažnija konverzijska taktika ═══
  // Vidljivo: osnovni rezultat + promašeni. Zakljucano: AI analiza, plan, vježbe.
  // Očekivani ROI iz playbooka: 12–18% Standard → Pro konverzija.
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
  if(qzState.score>=QUIZ.length*0.6){QUIZ_PASSED=true;lsSave('mt.hrv.h07.quiz_passed',true)}
  recomputeProgress();
  document.getElementById('qz-app').innerHTML=html;
}

/* ═══════════════════════════════════════════
   CHECKPOINT
   ═══════════════════════════════════════════ */
function cpToggle(el){
  el.classList.toggle('done');
  cpSave();
  cpUpdate();
  if(el.classList.contains('done')) soundOk();
}
function cpSave(){
  var states=[];
  document.querySelectorAll('.cp-item').forEach(function(el){states.push(el.classList.contains('done'))});
  lsSave('mt.hrv.h07.cp',states);
}
function cpLoad(){
  var states=lsLoad('mt.hrv.h07.cp',null);
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

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded',function(){
  // Explicitly hide cit-empty on load (CSS failsafe)
  var ce = document.getElementById('cit-empty');
  if(ce){ ce.style.display = 'none'; ce.classList.remove('on'); }
  _initTracking();
  track('page_view', {chapter: CURRENT_CHAPTER.code, days_to_matura: daysToMatura()}, 'navigation');

  checkRestore();
  cpLoad();
  var visited=lsLoad('mt.hrv.h07.visited',null);
  if(visited){VISITED_TABS=visited}
  QUIZ_PASSED=lsLoad('mt.hrv.h07.quiz_passed',false);
  VISITED_TABS[0]=true;
  updateTabBadges();
  recomputeProgress();

  // Breadcrumb: reflect current tab (v3.6)
  var currentTab = lsLoad('mt.hrv.h07.tab', 0);
  var bcTab = document.getElementById('bc-tab');
  if(bcTab && TAB_LABELS[currentTab]) bcTab.textContent = TAB_LABELS[currentTab];

  // Social proof + countdown
  renderSocialProof('social-proof', 'full');
  var daysLeft = daysToMatura();
  if(daysLeft <= 60 && daysLeft > 0){
    var cd = document.getElementById('countdown');
    if(cd){cd.style.display='flex';renderCountdown('countdown')}
  }

  // Citatnik search + filter — init BEFORE tab restore to populate cache
  _citInit();

  // Tab restore disabled — uzrokovalo timing probleme s _citInit()
  // Korisnik uvijek počinje na Tab 0

  // SVG hotspot tooltips
  _svgTtInit();

  // Mini-dijagnostika: restore dismissed state
  _diagRestore();

  /* ══ FEEDBACK MODAL: char counter ══ */
  var fbTa = document.getElementById('fb-message');
  var fbCnt = document.getElementById('fb-char-count');
  if(fbTa && fbCnt){
    fbTa.addEventListener('input', function(){
      var len = fbTa.value.length;
      fbCnt.textContent = len;
      fbCnt.parentElement.classList.toggle('over', len > 5000);
    });
  }

  /* ══ UPSELL IMPRESSION TRACKING (IntersectionObserver) ══ */
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

  /* ══ BACK-TO-TOP SCROLL LISTENER ══ */
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

  /* ══ KEYBOARD NAV ══ */
  document.addEventListener('keydown',function(e){
    // Esc: zatvori modal ili sidebar
    if(e.key==='Escape'){
      var fbModal=document.getElementById('fb-modal-backdrop');
      if(fbModal&&fbModal.classList.contains('show')){closeFeedbackModal();return}
      var modal=document.getElementById('modal-backdrop');
      if(modal&&modal.classList.contains('show')){closeModal();return}
      var sb=document.getElementById('sidebar');
      if(sb&&sb.classList.contains('mobile-open')){closeSidebar();return}
    }
    // Ctrl+K / Cmd+K → switch to Pojmovnik tab + focus search
    if((e.ctrlKey||e.metaKey)&&e.key==='k'){
      e.preventDefault();
      sw(4);
      setTimeout(function(){
        var s=document.getElementById('pojm-search');
        if(s){ s.focus(); s.select(); }
      },250);
      return;
    }
    var tag=(e.target&&e.target.tagName||'').toLowerCase();
    if(tag==='input'||tag==='textarea')return;
    if(e.target.classList&&e.target.classList.contains('tab')){
      if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
        e.preventDefault();
        var curr=parseInt(lsLoad('mt.hrv.h07.tab',0));
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

  if(!lsLoad('mt.hrv.h07.hinted',false)){
    setTimeout(function(){lsSave('mt.hrv.h07.hinted',true)},3000);
  }
});

/* ══ SCROLL PROGRESS BAR (H06 v2 upgrade) ══ */
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
    alert(\`🚧 Pretplata u izradi.\\n\\nUskoro: Stripe Checkout za \${tier === 'pro' ? 'Pro 19,99€' : 'Standard 9,99€'}/mj\\n\\n(Mock: postavljen tier na \${tier.toUpperCase()})\`);
    setTier(tier);
    closePaywall();
    location.reload();
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
/* CP_RESET_INJECTED */

function cpReset(){
  if(!confirm('Resetiraj sve označene stavke?')) return;
  var items = document.querySelectorAll('.cp-item');
  items.forEach(function(it){ it.classList.remove('done'); });
  try { localStorage.removeItem('mt.hrv.h07.cp'); } catch(e){}
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
/* WC_UPDATE_FALLBACK */

function wcUpdate(){
  var ta = document.getElementById('wc-ta') || document.getElementById('wc-textarea') || document.getElementById('wc-input');
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

export default function H07Chapter() {
  const containerRef = useRef(null);
  const stylesInjectedRef = useRef(false);
  const scriptsExecutedRef = useRef(false);

  useEffect(() => {
    // Inject styles (once per page mount)
    if (!stylesInjectedRef.current && STYLES_CSS) {
      const styleEl = document.createElement('style');
      styleEl.id = `chapter-styles-H07`;
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
        console.error(`[H07] Script execution error:`, err);
      }
    }

    return () => {
      // Cleanup on unmount
      const styleEl = document.getElementById(`chapter-styles-H07`);
      if (styleEl) styleEl.remove();
      stylesInjectedRef.current = false;
      scriptsExecutedRef.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="chapter-h07"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}
export const HRV_POGAVLJE_07 = null
