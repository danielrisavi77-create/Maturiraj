/**
 * shared-base-styles.js — JEDAN IZVOR ISTINE za dizajn-tokene hrvatskih skripti.
 *
 * Sadrži kanonski `:root{}` blok (boje, površine, tekstualne tonove, FONT STACK,
 * radijuse, z-index slojeve) koji dijele OBJE obitelji poglavlja:
 *   • shared-lit-styles.js  (književnost, h01–h16)
 *   • shared-lang-styles.js (jezik/pisanje, h17–h28)
 *
 * Ranije je svaki shared file imao vlastiti `:root` → rizik drifta tokena.
 * Sada se tokeni definiraju SAMO ovdje i interpoliraju u oba sloja, pa su
 * fontovi i boje zajamčeno identični u svih 28 poglavlja.
 *
 * Napomena: ovo je superset (uključuje --red-l/--green-l/--dark i --z-* tokene
 * koje je jezični sloj prije izostavljao); time se usput popravljaju i dva
 * latentna undefined-var slučaja u jezičnom sloju (var(--green-l), var(--z-raised)).
 */
export const SHARED_BASE_TOKENS = `:root{
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
  /* ── Z-INDEX LAYERS (semantic tokens) ── */
  --z-bg:-1;--z-base:1;--z-raised:10;--z-float:100;--z-overlay-low:200;--z-sidebar:300;--z-sidebar-ctrl:400;--z-tooltip:500;--z-modal:600;
}`;
