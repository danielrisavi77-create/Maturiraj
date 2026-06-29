// Maturiraj.hr — Engleski viša razina
// Poglavlje 01: Engleski Ana državnoj maturi
// Auto-generirano — ne editirati ručno

export const meta = {
  id: 1,
  slug: "poglavlje01",
  title: "Engleski Ana dr\u017eavnoj maturi",
  subtitle: "Reading \u00b7 Listening \u00b7 Writing \u00b7 bodovni sustav \u00b7 kako pametno u\u0107i u ispit",
  blok: 1,
  blokNaziv: "Uvod i orijentacija",
  prev: null,
  next: 2,
};

export const html = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maturiraj.hr — Engleski viša razina · Poglavlje 1</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
<style>

/* ─── BRITISH DESIGN TOKENS ──────────────────────────────────────── */
:root {
  /* British-inspired dark navy palette */
  --bg-base:       #060810;
  --bg-surface:    #0A0D18;
  --bg-elevated:   #0F1422;
  --bg-card:       #131929;
  --bg-hover:      #192035;
  --bg-input:      #0D1120;
  --bd:            rgba(255,255,255,0.06);
  --bd-mid:        rgba(255,255,255,0.10);
  --bd-light:      rgba(255,255,255,0.18);
  --t1:  #EEF0F8;
  --t2:  #8A95B8;
  --t3:  #4A5580;

  /* Union Jack / British colours */
  --royal:         #1C3A8A;   /* Royal blue */
  --union-red:     #CF142B;   /* Union Jack red */
  --union-red-dim: rgba(207,20,43,0.12);
  --union-red-bd:  rgba(207,20,43,0.28);
  --gold:          #C9A227;   /* British gold */
  --gold-dim:      rgba(201,162,39,0.12);
  --gold-bd:       rgba(201,162,39,0.28);
  --cream:         #B8B9E2;   /* Lavender-cream */
  --cream-dim:     rgba(184,185,226,0.10);
  --cream-bd:      rgba(184,185,226,0.22);

  /* Primary accent: British navy/cobalt */
  --blue:          #4F7BE8;
  --blue-dim:      rgba(79,123,232,0.12);
  --blue-border:   rgba(79,123,232,0.28);
  --blue-glow:     rgba(79,123,232,0.05);

  /* Secondary accent: British green (Wimbledon) */
  --brit-green:    #4CAF7D;
  --brit-green-dim:rgba(76,175,125,0.12);
  --brit-green-bd: rgba(76,175,125,0.28);

  /* Tertiary: Oxford amber */
  --amber:         #E8A838;
  --amber-dim:     rgba(232,168,56,0.12);
  --amber-border:  rgba(232,168,56,0.28);

  /* Danger */
  --red:           #E86060;
  --red-dim:       rgba(232,96,96,0.12);
  --red-border:    rgba(232,96,96,0.28);

  /* Success */
  --green:         #52D688;
  --green-dim:     rgba(82,214,136,0.12);
  --green-border:  rgba(82,214,136,0.28);

  --font:  'DM Sans', system-ui, sans-serif;
  --serif: 'Playfair Display', Georgia, serif;
  --mono:  'DM Mono', 'Fira Code', monospace;
  --r1:4px; --r2:8px; --r3:12px; --r4:18px; --r5:26px;
  --sidebar:248px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg-base);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.shell{display:flex;min-height:100vh}

/* ── UNION JACK ACCENT LINE (top of page) ── */
.union-bar{height:3px;background:linear-gradient(90deg, var(--union-red) 0%, var(--union-red) 30%, #fff 30%, #fff 34%, var(--blue) 34%, var(--blue) 66%, #fff 66%, #fff 70%, var(--union-red) 70%, var(--union-red) 100%);position:fixed;top:0;left:0;right:0;z-index:999}

/* ── SIDEBAR ── */
.sidebar{width:var(--sidebar);flex-shrink:0;background:var(--bg-surface);border-right:1px solid var(--bd);position:fixed;top:3px;left:0;height:calc(100vh - 3px);overflow-y:auto;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--bd-mid) transparent;z-index:100}
.sidebar::-webkit-scrollbar{width:3px}
.sidebar::-webkit-scrollbar-thumb{background:var(--bd-mid);border-radius:2px}
.sb-brand{padding:22px 18px 16px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.sb-logo{width:30px;height:30px;background:linear-gradient(135deg,var(--union-red),var(--blue));border-radius:var(--r1);display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;overflow:hidden}
.sb-logo::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 13h30M13 0v30M0 0l30 30M30 0L0 30' stroke='rgba(255,255,255,0.4)' stroke-width='2'/%3E%3C/path%3E%3C/svg%3E") center/cover}
.sb-logo svg{width:16px;height:16px;position:relative}
.sb-name{font-family:var(--serif);font-size:14px;font-weight:700;color:var(--t1);letter-spacing:-0.2px}
.sb-sub{font-size:10px;color:var(--blue);margin-top:1px;font-family:var(--mono);letter-spacing:.5px}
.sb-label{font-family:var(--mono);font-size:9px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;padding:16px 18px 5px}
.sb-item{display:flex;align-items:center;gap:9px;padding:7px 18px;font-size:12.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.3}
.sb-item:hover{color:var(--t1);background:var(--bg-hover)}
.sb-item.active{color:var(--blue);background:var(--blue-glow);border-left-color:var(--blue)}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.5}
.sb-item.active .sb-dot{opacity:1}
.sb-footer{margin-top:auto;padding:12px 18px;border-top:1px solid var(--bd);font-size:10px;color:var(--t3);line-height:1.6;font-family:var(--mono)}

/* ── MAIN ── */
.main{flex:1;min-width:0;padding-top:3px;margin-left:var(--sidebar)}
.content-wrap{max-width:820px;width:100%;margin:0 auto;padding:36px 48px 100px}

/* ── BREADCRUMB ── */
.breadcrumb{display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--t3);margin-bottom:28px;font-family:var(--mono)}
.bc-sep{opacity:.3}
.bc-active{color:var(--blue)}

/* ── TABS ── */
.tabs-wrap{display:flex;gap:0;margin-bottom:6px;background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:4px;width:fit-content}
.tab{display:flex;align-items:center;gap:6px;padding:8px 20px;font-size:12.5px;font-weight:500;color:var(--t2);cursor:pointer;border-radius:var(--r1);transition:all .15s;white-space:nowrap;font-family:var(--mono)}
.tab:hover{color:var(--t1)}
.tab.active{background:var(--blue);color:#fff;font-weight:700}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#060810;font-weight:700;flex-shrink:0}
.tab.done-tab .tab-check{display:inline-flex}
.layer{display:none}
.layer.active{display:block;animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}

/* ── TAB PROGRESS ── */
.tab-progress-row{display:flex;align-items:center;gap:6px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--blue);background:var(--blue-dim);border-color:var(--blue-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}

/* ── HERO ── */
.hero{margin-bottom:32px;padding:36px 40px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--union-red) 0%,var(--union-red) 25%,#fff 25%,#fff 30%,var(--blue) 30%,var(--blue) 70%,#fff 70%,#fff 75%,var(--union-red) 75%)}
.hero::after{content:'A';position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:128px;font-weight:900;font-family:var(--serif);color:rgba(255,255,255,.025);pointer-events:none;user-select:none;line-height:1}
.hero-eyebrow{font-family:var(--mono);font-size:10px;color:var(--blue);letter-spacing:2px;margin-bottom:12px;text-transform:uppercase}
.hero-title{font-size:34px;font-weight:900;font-family:var(--serif);color:var(--t1);letter-spacing:-0.5px;line-height:1.1;margin-bottom:10px}
.hero-title span{background:linear-gradient(135deg,var(--blue),var(--cream));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.hb-level{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.hb-chapter{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.hero-sub{font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:18px}
.progress-track{height:3px;background:var(--bd-mid);border-radius:2px;overflow:hidden;width:100%;max-width:420px}
.progress-bar{height:100%;background:linear-gradient(90deg,var(--union-red),var(--blue));border-radius:2px}

/* ── TAGS ── */
.tags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:28px}
.pill{display:inline-flex;align-items:center;padding:4px 12px;border-radius:var(--r1);font-size:11.5px;font-weight:600;font-family:var(--mono);border:1px solid;letter-spacing:.2px}
.pill-blue  {background:var(--blue-dim);  color:var(--blue);  border-color:var(--blue-border)}
.pill-red   {background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.pill-gold  {background:var(--gold-dim);  color:var(--gold);  border-color:var(--gold-bd)}
.pill-green {background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.pill-cream {background:var(--cream-dim); color:var(--cream); border-color:var(--cream-bd)}
.pill-amber {background:var(--amber-dim); color:var(--amber); border-color:var(--amber-border)}

/* ── DIVIDER ── */
.divider{border:none;border-top:1px solid var(--bd);margin:32px 0}

/* ── SECTION LABEL ── */
.sec-label{font-family:var(--mono);font-size:9.5px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--bd)}

/* ── STAT GRID ── */
.stat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(172px,1fr));gap:10px;margin-bottom:28px}
.stat-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px;transition:border-color .15s,transform .15s;cursor:default}
.stat-card:hover{border-color:var(--bd-light);transform:translateY(-1px)}
.stat-icon{font-family:var(--mono);font-size:10px;font-weight:500;padding:3px 8px;border-radius:var(--r1);display:inline-flex;margin-bottom:10px}
.stat-icon.blue  {background:var(--blue-dim);  color:var(--blue)}
.stat-icon.red   {background:var(--union-red-dim);color:var(--union-red)}
.stat-icon.gold  {background:var(--gold-dim);  color:var(--gold)}
.stat-icon.green {background:var(--brit-green-dim);color:var(--brit-green)}
.stat-icon.amber {background:var(--amber-dim); color:var(--amber)}
.stat-name{font-size:13px;font-weight:600;color:var(--t1);margin-bottom:5px;line-height:1.3}
.stat-desc{font-size:12px;color:var(--t2);line-height:1.5;font-family:var(--mono)}

/* ── CONCEPTS TABLE ── */
.concepts{border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px}
.concept-row{display:grid;grid-template-columns:minmax(180px,38%) 1fr;border-bottom:1px solid var(--bd);transition:background .1s}
.concept-row:last-child{border-bottom:none}
.concept-row:nth-child(even){background:rgba(255,255,255,.015)}
.concept-row:hover{background:var(--bg-hover)}
.ck{padding:11px 14px;font-family:var(--mono);font-size:12px;font-weight:500;border-right:1px solid var(--bd);position:relative;padding-left:18px}
.ck::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:0 2px 2px 0}
.ck.blue  {color:var(--blue)}  .ck.blue::before  {background:var(--blue)}
.ck.red   {color:var(--union-red)} .ck.red::before {background:var(--union-red)}
.ck.gold  {color:var(--gold)}  .ck.gold::before  {background:var(--gold)}
.ck.green {color:var(--brit-green)} .ck.green::before {background:var(--brit-green)}
.ck.amber {color:var(--amber)} .ck.amber::before {background:var(--amber)}
.ck.cream {color:var(--cream)} .ck.cream::before {background:var(--cream)}
.cv{padding:11px 16px;font-size:13px;color:var(--t2);line-height:1.6}
.cv code{font-family:var(--mono);font-size:11.5px;background:var(--bg-input);padding:1px 6px;border-radius:var(--r1);color:var(--blue)}

/* ── PROSE ── */
.prose{font-size:14.5px;line-height:1.85;color:rgba(238,240,248,.82);margin-bottom:16px}
.prose b,.prose strong{color:var(--t1);font-weight:600}
.prose em{color:var(--blue);font-style:normal}
.prose-serif{font-family:var(--serif);font-size:16px;line-height:1.8;color:rgba(238,240,248,.85);margin-bottom:16px}

/* ── PANIC BOX (British-gold) ── */
.panic-box{background:linear-gradient(135deg,rgba(207,20,43,.05),rgba(79,123,232,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:24px 0}
.panic-hd{background:linear-gradient(90deg,var(--union-red),#1C3A8A);padding:11px 20px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:#fff;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.panic-body{padding:18px 20px}
.panic-step{display:flex;align-items:flex-start;gap:14px;padding:9px 0;border-bottom:1px solid rgba(79,123,232,.10)}
.panic-step:last-child{border-bottom:none}
.panic-num{width:24px;height:24px;border-radius:50%;background:var(--blue);color:#fff;font-family:var(--mono);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.panic-text{font-size:13px;color:rgba(238,240,248,.85);line-height:1.65}
.panic-text b{color:var(--t1)}

/* ── CALLOUT ── */
.callout{display:flex;gap:12px;padding:14px 16px;border-radius:var(--r3);margin:14px 0;border:1px solid}
.callout-warn  {background:var(--red-dim);   border-color:var(--red-border)}
.callout-tip   {background:var(--amber-dim); border-color:var(--amber-border)}
.callout-info  {background:var(--blue-dim);  border-color:var(--blue-border)}
.callout-royal {background:var(--cream-dim); border-color:var(--cream-bd)}
.callout-icon{font-size:15px;flex-shrink:0;margin-top:1px}
.callout-body{flex:1}
.callout-title{font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:5px}
.callout-warn   .callout-title{color:var(--red)}
.callout-tip    .callout-title{color:var(--amber)}
.callout-info   .callout-title{color:var(--blue)}
.callout-royal  .callout-title{color:var(--cream)}
.callout-text{font-size:13px;line-height:1.7;color:var(--t2)}

/* ── REVEAL CARDS ── */
.reveal-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:8px;cursor:pointer;transition:border-color .15s}
.reveal-card:hover{border-color:var(--bd-light)}
.reveal-q{display:flex;align-items:center;justify-content:space-between;padding:13px 16px;font-size:13.5px;font-weight:600;color:var(--t1);gap:12px;user-select:none}
.reveal-q .rq-icon{font-size:16px;flex-shrink:0}
.reveal-arrow{font-size:11px;color:var(--t3);transition:transform .2s;flex-shrink:0}
.reveal-card.open .reveal-arrow{transform:rotate(180deg)}
.reveal-ans{max-height:0;overflow:hidden;padding:0 16px;font-size:13px;color:var(--t2);line-height:1.7;background:var(--bg-surface);font-family:var(--mono);transition:max-height .28s ease,padding .28s ease;border-top:1px solid transparent}
.reveal-card.open .reveal-ans{max-height:400px;padding:14px 16px;border-top-color:var(--bd)}
.reveal-ans b,.reveal-ans strong{color:var(--t1)}
.reveal-ans .ok{color:var(--green)}
.reveal-ans .bad{color:var(--red)}
.reveal-ans .note{color:var(--blue)}

/* ── GRAM BLOCK ── */
.gram{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.gram-head{display:flex;align-items:center;gap:12px;padding:14px 20px;border-bottom:1px solid var(--bd);background:var(--bg-surface)}
.gram-badge{font-family:var(--mono);font-size:11px;font-weight:500;padding:4px 10px;border-radius:var(--r1);border:1px solid}
.gram-badge.reading{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.gram-badge.writing{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.gram-badge.listening{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.gram-badge.grammar{background:var(--cream-dim);color:var(--cream);border-color:var(--cream-bd)}
.gram-title{font-size:15px;font-weight:600;color:var(--t1);font-family:var(--serif)}
.gram-sub{font-size:11px;color:var(--t3);font-family:var(--mono);margin-top:1px}
.gram-body{padding:20px 24px}

/* ── FORMULA ── */
.formula{background:var(--bg-input);border:1px solid var(--bd-mid);border-left:3px solid var(--blue);border-radius:0 var(--r2) var(--r2) 0;padding:12px 16px;margin:12px 0;font-family:var(--mono);font-size:13px;line-height:2;position:relative}
.formula.red{border-left-color:var(--union-red)}
.formula.gold{border-left-color:var(--gold)}
.formula.green{border-left-color:var(--brit-green)}
.formula .lbl{color:var(--t1);font-weight:500}
.formula .sub{color:var(--t3)}
.formula .val{color:var(--blue)}
.formula.red .val{color:var(--union-red)}
.formula.gold .val{color:var(--gold)}
.formula.green .val{color:var(--brit-green)}
.formula .kw{color:var(--amber)}

/* ── EXAMPLES ── */
.exs{margin:14px 0 20px}
.ex{display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:start;padding:9px 0;border-bottom:1px solid var(--bd)}
.ex:last-child{border-bottom:none}
.ex-en{font-size:14px;color:var(--t1);line-height:1.5}
.ex-en b{color:var(--blue);font-weight:600}
.ex-en b.red{color:var(--union-red)}
.ex-en b.gold{color:var(--gold)}
.ex-arr{color:var(--t3);font-size:12px;padding-top:2px}
.ex-hr{font-size:12.5px;color:var(--t2);line-height:1.5;font-family:var(--mono)}

/* ── COMPARE GRID ── */
.compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0 24px}
.compare-3{grid-template-columns:1fr 1fr 1fr}
.cmp-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden}
.cmp-head{padding:10px 14px;font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--bd)}
.cmp-head.blue  {background:var(--blue-dim);  color:var(--blue);  border-bottom-color:var(--blue-border)}
.cmp-head.red   {background:var(--union-red-dim);color:var(--union-red);border-bottom-color:var(--union-red-bd)}
.cmp-head.gold  {background:var(--gold-dim);  color:var(--gold);  border-bottom-color:var(--gold-bd)}
.cmp-head.green {background:var(--brit-green-dim);color:var(--brit-green);border-bottom-color:var(--brit-green-bd)}
.cmp-body{padding:12px 14px}
.cmp-row{font-size:12.5px;color:var(--t2);padding:6px 0;border-bottom:1px solid var(--bd);line-height:1.5}
.cmp-row:last-child{border-bottom:none}
.cmp-row b{color:var(--t1);display:block;font-size:12px;margin-bottom:1px}

/* ── CHIPS ── */
.chips{display:flex;flex-wrap:wrap;gap:5px;margin:8px 0}
.chip{font-family:var(--mono);font-size:11.5px;padding:3px 9px;border-radius:var(--r1);border:1px solid;transition:all .12s;cursor:default}
.chip:hover{transform:translateY(-1px)}
.chip.blue  {background:var(--blue-dim);  color:var(--blue);  border-color:var(--blue-border)}
.chip.red   {background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.chip.gold  {background:var(--gold-dim);  color:var(--gold);  border-color:var(--gold-bd)}
.chip.green {background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.chip.amber {background:var(--amber-dim); color:var(--amber); border-color:var(--amber-border)}

/* ── SIGNAL GRID ── */
.signal-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 22px}
.sig-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px}
.sig-head{font-family:var(--mono);font-size:10px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--bd)}
.sig-head.blue{color:var(--blue)}
.sig-head.red{color:var(--union-red)}
.sig-head.gold{color:var(--gold)}
.sig-head.green{color:var(--brit-green)}

/* ── TABLE ── */
.tbl-wrap{overflow-x:auto;margin:14px 0 22px;border:1px solid var(--bd-mid);border-radius:var(--r3)}
table{width:100%;border-collapse:collapse;font-size:13px}
th{padding:10px 14px;background:var(--bg-surface);color:var(--t3);font-family:var(--mono);font-size:10px;font-weight:500;letter-spacing:1.2px;text-transform:uppercase;text-align:left;border-bottom:1px solid var(--bd-mid);white-space:nowrap}
td{padding:10px 14px;color:var(--t2);border-bottom:1px solid var(--bd);line-height:1.55;vertical-align:top}
tr:last-child td{border-bottom:none}
tr:nth-child(even) td{background:rgba(255,255,255,.015)}
tr:hover td{background:var(--bg-hover)}
td code{font-family:var(--mono);font-size:11.5px;background:var(--bg-input);padding:1px 5px;border-radius:var(--r1);color:var(--blue)}
td b{color:var(--t1)}

/* ── QUIZ / Q-BLOCK ── */
.quiz-intro{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;font-size:13px;color:var(--t2);margin-bottom:22px;font-family:var(--mono);line-height:1.65}
.quiz-intro strong{color:var(--blue)}
.q-block{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:12px;transition:border-color .15s}
.q-head{padding:14px 18px;border-bottom:1px solid var(--bd)}
.q-meta{font-family:var(--mono);font-size:9.5px;color:var(--t3);font-weight:500;letter-spacing:.5px;margin-bottom:6px;text-transform:uppercase}
.q-text{font-size:14.5px;font-weight:600;color:var(--t1);line-height:1.5;letter-spacing:-0.1px}
.q-opts{padding:12px 18px;display:flex;flex-direction:column;gap:6px}
.q-opt{display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-size:13.5px;color:var(--t2);cursor:pointer;transition:all .12s;user-select:none;font-family:var(--mono)}
.q-opt:hover:not(.disabled){background:var(--bg-hover);border-color:var(--bd-light);color:var(--t1)}
.q-opt.correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green)}
.q-opt.wrong  {background:var(--red-dim);  border-color:var(--red-border);  color:var(--red)}
.q-opt.disabled{cursor:default;pointer-events:none}
.q-letter{width:22px;height:22px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3)}
.q-expl{display:none;padding:12px 18px;font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);font-family:var(--mono)}
.q-expl.show{display:block}
.expl-ok{background:var(--green-dim);border:1px solid var(--green-border);color:var(--green);padding:10px 14px;border-radius:var(--r2)}
.expl-no{background:var(--red-dim);  border:1px solid var(--red-border);  color:var(--red);  padding:10px 14px;border-radius:var(--r2)}

/* ── SPEED DRILL ── */
.speed-drill-wrap{margin:18px 0}
.sd-intro{font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:14px;padding:10px 14px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2)}
.sd-q{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:18px 20px;margin-bottom:14px}
.sd-sent{font-size:15px;font-weight:600;color:var(--t1);margin-bottom:14px;letter-spacing:-0.1px;line-height:1.4;font-family:var(--serif)}
.sd-btns{display:flex;gap:10px;flex-wrap:wrap}
.sd-btn{flex:1;text-align:center;padding:10px 18px;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;border:1px solid;transition:all .15s;user-select:none}
.sd-btn.opt-a{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.sd-btn.opt-b{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.sd-btn.opt-c{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.sd-btn:hover:not(.picked){opacity:.75;transform:translateY(-1px)}
.sd-btn.correct-pick{background:var(--green);color:#060810;border-color:var(--green);pointer-events:none}
.sd-btn.wrong-pick{background:var(--red-dim);color:var(--red);border-color:var(--red-border);pointer-events:none}
.sd-btn.reveal-correct{background:var(--green-dim);color:var(--green);border-color:var(--green-border);pointer-events:none}
.sd-fb{display:none;margin-top:10px;font-family:var(--mono);font-size:12px;line-height:1.6;padding:9px 12px;border-radius:var(--r2)}
.sd-fb.show{display:block}
.sd-fb.ok{background:var(--green-dim);color:var(--green);border:1px solid var(--green-border)}
.sd-fb.no{background:var(--red-dim);color:var(--red);border:1px solid var(--red-border)}
.sd-progress{display:flex;gap:5px;margin-bottom:16px;flex-wrap:wrap}
.sd-dot{width:10px;height:10px;border-radius:2px;background:var(--bg-elevated);border:1px solid var(--bd-mid);transition:all .2s}
.sd-dot.ok{background:var(--green);border-color:var(--green)}
.sd-dot.no{background:var(--red);border-color:var(--red)}
.sd-dot.cur{border-color:var(--blue);background:var(--blue-dim)}
.sd-score{text-align:center;padding:28px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);display:none}
.sd-score.show{display:block}
.sd-score-num{font-size:48px;font-weight:700;color:var(--blue);font-family:var(--serif);letter-spacing:-2px}
.sd-score-lbl{font-size:13px;color:var(--t2);margin-top:6px}
.sd-retry{margin-top:14px;padding:9px 20px;background:var(--blue);color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer}

/* ── RADAR BOX ── */
.radar{border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:22px 0}
.radar-hd{background:var(--blue-dim);border-bottom:1px solid var(--blue-border);padding:10px 18px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase}
.radar-body{padding:6px 0}
.radar-item{display:flex;align-items:flex-start;gap:12px;padding:11px 18px;border-bottom:1px solid var(--bd)}
.radar-item:last-child{border-bottom:none}
.radar-badge{font-family:var(--mono);font-size:9.5px;font-weight:700;padding:3px 8px;border-radius:var(--r1);flex-shrink:0;margin-top:1px;letter-spacing:.5px;text-transform:uppercase}
.rb-trap{background:var(--red-dim);color:var(--red);border:1px solid var(--red-border)}
.rb-where{background:var(--blue-dim);color:var(--blue);border:1px solid var(--blue-border)}
.rb-mark{background:var(--gold-dim);color:var(--gold);border:1px solid var(--gold-bd)}
.radar-text{font-size:13px;color:var(--t2);line-height:1.6}
.radar-text b{color:var(--t1)}
.radar-text em{color:var(--blue);font-style:normal}

/* ── NAV ROW ── */
.nav-row{display:flex;justify-content:space-between;align-items:center;padding:24px 0 0;border-top:1px solid var(--bd);margin-top:28px;flex-wrap:wrap;gap:10px}
.nav-btn{font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t2);padding:9px 18px;border-radius:var(--r2);border:1px solid var(--bd-mid);cursor:pointer;transition:all .15s;background:var(--bg-card)}
.nav-btn:hover{color:var(--t1);border-color:var(--bd-light)}
.nav-btn.primary{background:var(--blue);color:#fff;border-color:var(--blue);cursor:pointer}
.nav-btn.primary:hover{opacity:.88}

/* ── BAR CHART ── */
.bar-chart{margin:20px 0 28px}
.bar-row{display:flex;align-items:center;gap:12px;margin-bottom:10px}
.bar-label{font-family:var(--mono);font-size:11px;color:var(--t2);width:100px;flex-shrink:0;text-align:right}
.bar-track{flex:1;height:26px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);overflow:hidden;position:relative}
.bar-fill{height:100%;border-radius:var(--r2);display:flex;align-items:center;padding-left:10px;transition:width 1s cubic-bezier(.4,0,.2,1)}
.bar-fill.blue{background:linear-gradient(90deg,var(--blue),rgba(79,123,232,.6))}
.bar-fill.red{background:linear-gradient(90deg,var(--union-red),rgba(207,20,43,.5))}
.bar-fill.gold{background:linear-gradient(90deg,var(--gold),rgba(201,162,39,.5))}
.bar-fill.green{background:linear-gradient(90deg,var(--brit-green),rgba(76,175,125,.5))}
.bar-fill.amber{background:linear-gradient(90deg,var(--amber),rgba(232,168,56,.5))}
.bar-pct{font-family:var(--mono);font-size:10px;font-weight:700;color:rgba(255,255,255,.9)}
.bar-val{font-family:var(--mono);font-size:10.5px;color:var(--t2);width:38px;text-align:right;flex-shrink:0}

/* ── SCORE DONUT ── */
.donut-wrap{display:flex;align-items:center;gap:28px;margin:20px 0 28px;flex-wrap:wrap}
.donut-svg{flex-shrink:0}
.donut-legend{flex:1;min-width:200px}
.donut-item{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.donut-swatch{width:12px;height:12px;border-radius:3px;flex-shrink:0}
.donut-name{font-size:13px;color:var(--t2);flex:1}
.donut-num{font-family:var(--mono);font-size:12px;color:var(--t1);font-weight:600}

/* ── OXFORD BLOCKQUOTE ── */
.bq{border-left:3px solid var(--blue);padding:14px 18px;background:var(--bg-card);border-radius:0 var(--r3) var(--r3) 0;margin:16px 0;font-family:var(--serif);font-size:15px;font-style:italic;color:var(--t2);line-height:1.7}
.bq cite{display:block;font-style:normal;font-family:var(--mono);font-size:10.5px;color:var(--t3);margin-top:8px;letter-spacing:.5px}

/* ── ESSAY SCORE CARD ── */
.score-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.score-card-hd{background:linear-gradient(90deg,rgba(79,123,232,.15),rgba(207,20,43,.08));border-bottom:1px solid var(--bd-mid);padding:14px 20px;display:flex;align-items:center;gap:12px}
.sc-title{font-family:var(--serif);font-size:16px;font-weight:700;color:var(--t1)}
.sc-badge{font-family:var(--mono);font-size:10px;padding:3px 10px;border-radius:var(--r1);border:1px solid;background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.score-grid{display:grid;grid-template-columns:1fr 1fr;gap:0}
.score-item{padding:16px 20px;border-right:1px solid var(--bd);border-bottom:1px solid var(--bd)}
.score-item:nth-child(even){border-right:none}
.score-item:nth-last-child(-n+2){border-bottom:none}
.si-label{font-family:var(--mono);font-size:9.5px;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);margin-bottom:8px}
.si-name{font-size:14px;font-weight:600;color:var(--t1);margin-bottom:4px}
.si-desc{font-size:12px;color:var(--t2);line-height:1.55}
.si-pct{font-family:var(--mono);font-size:22px;font-weight:700;color:var(--blue);float:right;margin-top:-2px}

/* ── TIMER SIMULATOR ── */
.timer-sim{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.timer-sim-hd{background:linear-gradient(90deg,rgba(79,123,232,.15),rgba(207,20,43,.08));border-bottom:1px solid var(--bd-mid);padding:14px 20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
.tsim-title{font-family:var(--serif);font-size:15px;font-weight:700;color:var(--t1)}
.tsim-badge{font-family:var(--mono);font-size:10px;padding:3px 10px;border-radius:var(--r1);border:1px solid;background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.timer-sim-body{padding:20px 24px}
.tsim-sliders{display:flex;flex-direction:column;gap:18px;margin-bottom:20px}
.tsim-row{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.tsim-label{font-family:var(--mono);font-size:11px;color:var(--t2);width:80px;flex-shrink:0}
.tsim-slider{flex:1;min-width:120px;-webkit-appearance:none;appearance:none;height:4px;border-radius:2px;outline:none;cursor:pointer}
.tsim-slider.rd{background:linear-gradient(90deg,var(--blue) 0%,var(--blue) var(--pct,37%),var(--bg-hover) var(--pct,37%),var(--bg-hover) 100%)}
.tsim-slider.wr{background:linear-gradient(90deg,var(--union-red) 0%,var(--union-red) var(--pct,42%),var(--bg-hover) var(--pct,42%),var(--bg-hover) 100%)}
.tsim-slider.li{background:linear-gradient(90deg,var(--gold) 0%,var(--gold) var(--pct,21%),var(--bg-hover) var(--pct,21%),var(--bg-hover) 100%)}
.tsim-slider::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;cursor:pointer;border:2px solid var(--bg-base)}
.tsim-slider.rd::-webkit-slider-thumb{background:var(--blue)}
.tsim-slider.wr::-webkit-slider-thumb{background:var(--union-red)}
.tsim-slider.li::-webkit-slider-thumb{background:var(--gold)}
.tsim-val{font-family:var(--mono);font-size:13px;font-weight:700;width:50px;text-align:right;flex-shrink:0}
.tsim-val.rd{color:var(--blue)}
.tsim-val.wr{color:var(--union-red)}
.tsim-val.li{color:var(--gold)}
.tsim-total{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-radius:var(--r3);border:1px solid var(--bd-mid);margin-bottom:16px;font-family:var(--mono);font-size:12px;color:var(--t2)}
.tsim-total-num{font-size:20px;font-weight:700;font-family:var(--serif)}
.tsim-total-num.ok{color:var(--green)}
.tsim-total-num.warn{color:var(--amber)}
.tsim-total-num.over{color:var(--red)}
.tsim-feedback{font-size:12.5px;color:var(--t2);line-height:1.65;padding:10px 14px;background:var(--bg-surface);border-radius:var(--r2);border:1px solid var(--bd);font-family:var(--mono)}
.tsim-feedback b{color:var(--t1)}
.tsim-feedback .ok{color:var(--green)}
.tsim-feedback .warn{color:var(--amber)}
.tsim-feedback .bad{color:var(--red)}

/* ── FLOWCHART ── */
.flowchart{margin:20px 0}
.fc-node{border-radius:var(--r3);padding:12px 16px;margin-bottom:6px;font-size:13px;font-weight:600;line-height:1.4;border:1px solid}
.fc-node.start{background:linear-gradient(90deg,var(--union-red-dim),var(--blue-dim));border-color:var(--bd-mid);color:var(--t1);font-family:var(--serif);font-size:15px}
.fc-node.question{background:var(--bg-card);border-color:var(--bd-mid);color:var(--t1)}
.fc-node.action{background:var(--blue-dim);border-color:var(--blue-border);color:var(--blue);font-family:var(--mono);font-size:12px;font-weight:500}
.fc-node.action.red{background:var(--union-red-dim);border-color:var(--union-red-bd);color:var(--union-red)}
.fc-node.action.gold{background:var(--gold-dim);border-color:var(--gold-bd);color:var(--gold)}
.fc-node.action.green{background:var(--brit-green-dim);border-color:var(--brit-green-bd);color:var(--brit-green)}
.fc-node.result{background:var(--green-dim);border-color:var(--green-border);color:var(--green);font-family:var(--mono);font-size:12px}
.fc-arrow{text-align:center;font-size:11px;color:var(--t3);margin:2px 0;display:flex;align-items:center;justify-content:center;gap:8px}
.fc-arrow span{font-family:var(--mono);font-size:10px;padding:2px 8px;border-radius:var(--r1);border:1px solid var(--bd-mid);background:var(--bg-surface);color:var(--t3)}
.fc-branch{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:6px 0}
.fc-indent{padding-left:20px;border-left:2px solid var(--bd-mid);margin-left:8px}

/* ── ESSAY COMPARE (weak vs strong) ── */
.essay-compare{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0 24px}
.essay-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden}
.essay-card-hd{padding:10px 14px;font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:8px}
.essay-card-hd.weak{background:var(--red-dim);color:var(--red);border-bottom-color:var(--red-border)}
.essay-card-hd.strong{background:var(--green-dim);color:var(--green);border-bottom-color:var(--green-border)}
.essay-card-body{padding:14px}
.essay-text{font-size:13px;line-height:1.75;color:var(--t2);font-style:italic;border-radius:var(--r2);padding:10px 12px;background:var(--bg-surface);border:1px solid var(--bd)}
.essay-text .hl-bad{color:var(--red);font-weight:600;text-decoration:underline;text-decoration-color:rgba(232,96,96,.4)}
.essay-text .hl-good{color:var(--green);font-weight:600}
.essay-note{margin-top:10px;font-family:var(--mono);font-size:11px;color:var(--t3);line-height:1.6}
.essay-note b{color:var(--t2)}
@media(max-width:600px){.essay-compare{grid-template-columns:1fr}}

/* ── CHECKPOINT GATE ── */
.checkpoint-gate{background:var(--bg-card);border:2px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:28px 0}
.cg-hd{background:linear-gradient(90deg,var(--blue-dim),transparent);padding:14px 20px;border-bottom:1px solid var(--blue-border);display:flex;align-items:center;gap:10px}
.cg-icon{font-size:18px}
.cg-title{font-family:var(--serif);font-size:15px;font-weight:700;color:var(--t1)}
.cg-sub{font-family:var(--mono);font-size:10px;color:var(--blue);margin-top:2px}
.cg-body{padding:20px 24px}
.cg-question{font-size:15px;font-weight:600;color:var(--t1);margin-bottom:16px;line-height:1.4}
.cg-opts{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}
.cg-opt{display:flex;align-items:center;gap:10px;padding:11px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-size:13px;color:var(--t2);cursor:pointer;transition:all .12s;user-select:none}
.cg-opt:hover:not(.cg-disabled){background:var(--bg-hover);border-color:var(--bd-light);color:var(--t1)}
.cg-opt.cg-correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green);pointer-events:none}
.cg-opt.cg-wrong{background:var(--red-dim);border-color:var(--red-border);color:var(--red);pointer-events:none}
.cg-opt.cg-disabled{pointer-events:none}
.cg-letter{width:22px;height:22px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3);font-family:var(--mono)}
.cg-feedback{display:none;padding:12px 14px;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;line-height:1.65;margin-top:4px}
.cg-feedback.show{display:block}
.cg-feedback.pass{background:var(--green-dim);border:1px solid var(--green-border);color:var(--green)}
.cg-feedback.fail{background:var(--red-dim);border:1px solid var(--red-border);color:var(--red)}
.cg-unlock{display:none;margin-top:14px;padding:11px 20px;background:var(--blue);color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;width:100%;transition:opacity .15s}
.cg-unlock:hover{opacity:.88}
.cg-unlock.show{display:block}

/* ── SCORE CALCULATOR ── */
.calc-wrap{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.calc-hd{background:linear-gradient(90deg,rgba(201,162,39,.12),rgba(79,123,232,.08));border-bottom:1px solid var(--bd-mid);padding:14px 20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.calc-title{font-family:var(--serif);font-size:15px;font-weight:700;color:var(--t1)}
.calc-badge{font-family:var(--mono);font-size:10px;padding:3px 10px;border-radius:var(--r1);border:1px solid;background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.calc-body{padding:20px 24px}
.calc-sliders{display:flex;flex-direction:column;gap:20px;margin-bottom:20px}
.calc-row{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.calc-label{font-size:12px;font-weight:600;color:var(--t1);width:90px;flex-shrink:0;line-height:1.3}
.calc-sub{font-family:var(--mono);font-size:10px;color:var(--t3);display:block;font-weight:400}
.calc-slider{flex:1;min-width:120px;-webkit-appearance:none;appearance:none;height:4px;border-radius:2px;outline:none;cursor:pointer;background:var(--bg-hover)}
.calc-slider::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:var(--blue);cursor:pointer;border:2px solid var(--bg-base)}
.calc-pct{font-family:var(--mono);font-size:13px;font-weight:700;color:var(--blue);width:36px;text-align:right;flex-shrink:0}
.calc-result{padding:18px;background:var(--bg-surface);border-radius:var(--r3);border:1px solid var(--bd-mid);text-align:center;margin-bottom:14px}
.calc-grade-num{font-family:var(--serif);font-size:48px;font-weight:900;line-height:1;letter-spacing:-2px}
.calc-grade-lbl{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase;margin-top:4px}
.calc-tips{display:flex;flex-direction:column;gap:8px}
.calc-tip{display:flex;align-items:flex-start;gap:10px;padding:9px 12px;border-radius:var(--r2);border:1px solid var(--bd);background:var(--bg-input);font-size:12px;color:var(--t2);line-height:1.55}
.calc-tip-icon{font-size:13px;flex-shrink:0}
.calc-tip b{color:var(--t1)}

/* ── TAB PROGRESS PERSISTENCE ── */
.tab.saved-done .tab-check{display:inline-flex}

/* ── STICKY IN-TAB PROGRESS ── */
.tab-inner-progress{position:sticky;top:3px;z-index:90;background:var(--bg-surface);border-bottom:1px solid var(--bd);padding:8px 0;margin:-4px 0 24px;display:flex;gap:0;overflow-x:auto;scrollbar-width:none}
.tab-inner-progress::-webkit-scrollbar{display:none}
.tip-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10.5px;color:var(--t3);white-space:nowrap;padding:4px 14px;cursor:pointer;transition:color .15s;flex-shrink:0}
.tip-item:hover{color:var(--t2)}
.tip-item.done{color:var(--green)}
.tip-item.done .tip-dot{background:var(--green)}
.tip-dot{width:6px;height:6px;border-radius:50%;background:var(--t3);flex-shrink:0;transition:background .15s}
.tip-sep{color:var(--t3);opacity:.25;flex-shrink:0;align-self:center}

/* ── DISCERE LINK ── */
.discere-box{background:linear-gradient(135deg,rgba(79,123,232,.08),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:28px 0 0}
.discere-hd{background:var(--blue-dim);border-bottom:1px solid var(--blue-border);padding:11px 20px;display:flex;align-items:center;gap:10px}
.discere-hd-icon{font-size:16px}
.discere-hd-text{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase}
.discere-body{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.discere-desc{font-size:13px;color:var(--t2);line-height:1.6;flex:1;min-width:180px}
.discere-desc b{color:var(--t1)}
.discere-btn{font-family:var(--mono);font-size:12px;font-weight:700;padding:10px 20px;border-radius:var(--r2);background:var(--blue);color:#fff;border:none;cursor:pointer;white-space:nowrap;transition:opacity .15s;text-decoration:none;display:inline-block}
.discere-btn:hover{opacity:.85}

/* ── BACK TO TOP ── */
.back-top{position:fixed;bottom:86px;right:24px;z-index:200;width:38px;height:38px;border-radius:50%;background:var(--bg-card);border:1px solid var(--bd-mid);color:var(--t3);font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;pointer-events:none;transition:opacity .2s,transform .2s,color .15s;box-shadow:0 2px 12px rgba(0,0,0,.3)}
.back-top.show{opacity:1;pointer-events:auto}
.back-top:hover{color:var(--blue);border-color:var(--blue-border);transform:translateY(-2px)}
@media(min-width:721px){.back-top{right:32px;bottom:32px}}

/* ── MOBILE ── */
.hamburger{display:none;position:fixed;bottom:22px;right:22px;z-index:300;width:50px;height:50px;background:var(--blue);border-radius:50%;border:none;cursor:pointer;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(79,123,232,.4);transition:transform .15s}
.hamburger:hover{transform:scale(1.08)}
.hamburger svg{width:20px;height:20px}
.mob-drawer{display:none;position:fixed;inset:0;z-index:250;background:rgba(6,8,16,.95);backdrop-filter:blur(8px);flex-direction:column;padding:28px 24px;overflow-y:auto}
.mob-drawer.open{display:flex}
.mob-drawer-close{align-self:flex-end;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:8px 18px;font-family:var(--mono);font-size:12px;color:var(--t2);cursor:pointer;margin-bottom:20px}
.mob-drawer .sb-label{padding:14px 0 5px}
.mob-drawer .sb-item{padding:10px 0;border-left:none;border-bottom:1px solid var(--bd)}
@media(max-width:720px){.hamburger{display:flex}.sidebar{display:none}.main{margin-left:0}}
@media(max-width:680px){.compare{grid-template-columns:1fr}.compare-3{grid-template-columns:1fr}.signal-grid{grid-template-columns:1fr}.score-grid{grid-template-columns:1fr}.score-item:nth-child(even){border-right:none}.score-item{border-right:none}}
@media(max-width:520px){.stat-grid{grid-template-columns:1fr 1fr}.content-wrap{padding:24px 20px 80px}.sd-btns{flex-direction:column}.sd-btn{flex:none}}
@media(max-width:400px){.stat-grid{grid-template-columns:1fr}.tabs-wrap{flex-direction:column;width:100%}}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}

/* ══════ PREMIUM GATES ══════ */
.pg-ai{position:relative;margin:24px 0;padding:22px 22px 20px;background:linear-gradient(135deg,rgba(79,123,232,0.06),rgba(167,139,250,0.06));border:1px solid transparent;border-radius:16px;overflow:hidden;isolation:isolate}
.pg-ai::before{content:"";position:absolute;inset:0;border-radius:16px;padding:1px;background:linear-gradient(135deg,#4F7BE8,#A78BFA,#4F7BE8);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;background-size:200% 200%;animation:pg-border 4s linear infinite;z-index:-1}
@keyframes pg-border{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.pg-ai-hd{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.pg-ai-ico{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#4F7BE8,#A78BFA);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;box-shadow:0 0 0 0 rgba(167,139,250,0.5);animation:pg-pulse 2s ease-in-out infinite}
@keyframes pg-pulse{0%{box-shadow:0 0 0 0 rgba(167,139,250,0.5)}70%{box-shadow:0 0 0 14px rgba(167,139,250,0)}100%{box-shadow:0 0 0 0 rgba(167,139,250,0)}}
.pg-ai-ttl{font-family:var(--mono);font-size:12px;font-weight:700;color:#A78BFA;letter-spacing:2px;text-transform:uppercase;line-height:1.2}
.pg-ai-sub{font-size:13px;color:var(--t2);line-height:1.5;margin-top:4px}
.pg-ai-chips{display:flex;flex-wrap:wrap;gap:6px;margin:14px 0 12px}
.pg-ai-chip{font-family:var(--mono);font-size:10.5px;padding:6px 10px;background:rgba(79,123,232,0.08);border:1px solid rgba(79,123,232,0.25);border-radius:999px;color:#4F7BE8;cursor:pointer;transition:all .15s}
.pg-ai-chip:hover{background:rgba(79,123,232,0.15);transform:translateY(-1px)}
.pg-ai-bubble{background:rgba(6,8,16,0.6);border:1px solid rgba(167,139,250,0.2);border-radius:12px;padding:12px 14px;margin-bottom:14px;position:relative;font-size:12.5px;color:var(--t2);line-height:1.55}
.pg-ai-bubble::before{content:"AI";position:absolute;top:-10px;left:12px;background:linear-gradient(135deg,#4F7BE8,#A78BFA);color:#fff;font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 7px;border-radius:4px;letter-spacing:1px}
.pg-ai-typing{display:inline-flex;gap:3px;margin-left:4px;vertical-align:middle}
.pg-ai-typing span{width:5px;height:5px;border-radius:50%;background:#A78BFA;animation:pg-typing 1.4s ease-in-out infinite}
.pg-ai-typing span:nth-child(2){animation-delay:0.2s}
.pg-ai-typing span:nth-child(3){animation-delay:0.4s}
@keyframes pg-typing{0%,60%,100%{opacity:0.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-3px)}}
.pg-ai-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:linear-gradient(135deg,#4F7BE8,#A78BFA);color:#fff;border:none;border-radius:10px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;box-shadow:0 4px 18px rgba(79,123,232,0.3)}
.pg-ai-cta:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(79,123,232,0.4)}
.pg-ai-badge{font-family:var(--mono);font-size:9px;color:#A78BFA;padding:3px 8px;background:rgba(167,139,250,0.1);border:1px solid rgba(167,139,250,0.3);border-radius:999px;letter-spacing:1.5px;margin-left:10px}
.pg-disc{position:relative;margin:24px 0;padding:22px;background:linear-gradient(135deg,rgba(76,175,125,0.05),rgba(52,211,153,0.05));border:1px solid rgba(76,175,125,0.25);border-radius:16px;overflow:hidden}
.pg-disc::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#4CAF7D,#34D399,#4CAF7D);background-size:200% 100%;animation:pg-slide 3s linear infinite}
@keyframes pg-slide{0%{background-position:0% 0}100%{background-position:200% 0}}
.pg-disc-hd{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.pg-disc-ico{width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#4CAF7D,#34D399);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;position:relative}
.pg-disc-ico::after{content:"";position:absolute;inset:-3px;border:2px solid rgba(76,175,125,0.4);border-radius:14px;animation:pg-ring 2s ease-in-out infinite}
@keyframes pg-ring{0%,100%{transform:scale(1);opacity:0.6}50%{transform:scale(1.1);opacity:0}}
.pg-disc-ttl{font-family:var(--mono);font-size:12px;font-weight:700;color:#4CAF7D;letter-spacing:2px;text-transform:uppercase}
.pg-disc-sub{font-size:13px;color:var(--t2);line-height:1.5;margin-top:4px}
.pg-disc-split{display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:center;margin:16px 0;padding:12px;background:rgba(6,8,16,0.5);border:1px solid rgba(76,175,125,0.15);border-radius:12px}
.pg-disc-col{text-align:center}
.pg-disc-col-ttl{font-family:var(--mono);font-size:8.5px;color:var(--t3);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px}
.pg-disc-col-val{font-size:22px;font-weight:700;color:var(--t2);line-height:1}
.pg-disc-col.on .pg-disc-col-val{background:linear-gradient(135deg,#4CAF7D,#34D399);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.pg-disc-col-sub{font-size:10px;color:var(--t3);margin-top:3px}
.pg-disc-arrow{font-size:16px;color:#4CAF7D;font-weight:700}
.pg-disc-stats{display:flex;gap:16px;margin:12px 0 16px;flex-wrap:wrap}
.pg-disc-stat{display:flex;align-items:baseline;gap:6px}
.pg-disc-stat-n{font-size:19px;font-weight:700;color:#4CAF7D}
.pg-disc-stat-l{font-size:10.5px;color:var(--t3);font-family:var(--mono);text-transform:uppercase;letter-spacing:1px}
.pg-disc-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:linear-gradient(135deg,#4CAF7D,#34D399);color:#060810;border:none;border-radius:10px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;box-shadow:0 4px 18px rgba(76,175,125,0.3)}
.pg-disc-cta:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(76,175,125,0.4)}
.pg-disc-badge{font-family:var(--mono);font-size:9px;color:#4CAF7D;padding:3px 8px;background:rgba(76,175,125,0.12);border:1px solid rgba(76,175,125,0.3);border-radius:999px;letter-spacing:1.5px;margin-left:10px}
.paywall-modal{position:fixed;inset:0;z-index:9999;background:rgba(6,8,16,0.88);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:20px}
.paywall-modal.show{display:flex}
.paywall-card{background:var(--bg-surface);border:1px solid rgba(201,162,39,0.3);border-radius:16px;max-width:440px;width:100%;padding:28px 24px;position:relative;animation:pwSlide 0.25s ease-out}
@keyframes pwSlide{from{transform:translateY(16px);opacity:0}to{transform:translateY(0);opacity:1}}
.paywall-close{position:absolute;top:12px;right:12px;background:transparent;border:none;color:var(--t2);font-size:20px;cursor:pointer;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center}
.paywall-close:hover{background:var(--bg-elevated);color:var(--t1)}
.paywall-h{font-size:20px;font-weight:800;color:var(--t1);margin-bottom:6px;padding-right:32px}
.paywall-sub{color:var(--t2);font-size:13px;line-height:1.55;margin-bottom:18px}
.paywall-tiers{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:18px}
.paywall-tier{padding:14px 12px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r3);position:relative;cursor:pointer;transition:all 0.15s}
.paywall-tier.pro{border-color:rgba(201,162,39,0.4);background:linear-gradient(135deg,rgba(201,162,39,0.05),rgba(207,20,43,0.05))}
.paywall-tier.pro::before{content:"POPULAR";position:absolute;top:-8px;right:10px;background:linear-gradient(135deg,#C9A227,#CF142B);color:#fff;font-family:var(--mono);font-size:8px;font-weight:800;padding:2px 8px;border-radius:999px;letter-spacing:0.1em}
.paywall-tier-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px}
.paywall-tier-name{font-size:14px;font-weight:700;color:var(--t1);margin-bottom:2px}
.paywall-tier-price{font-family:var(--mono);font-size:16px;font-weight:800;color:var(--gold)}
.paywall-tier-price .per{font-size:10px;color:var(--t3);font-weight:400}
.paywall-tier-feat{font-size:10.5px;color:var(--t2);margin-top:8px;line-height:1.5}
.paywall-cta{width:100%;padding:12px 18px;background:linear-gradient(135deg,#C9A227,#CF142B);color:#fff;border:none;border-radius:var(--r3);font-family:var(--mono);font-size:13px;font-weight:800;letter-spacing:0.03em;text-transform:uppercase;cursor:pointer;transition:all 0.2s}
.paywall-cta:hover{transform:translateY(-1px);box-shadow:0 4px 18px rgba(201,162,39,0.4)}
.paywall-note{text-align:center;font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:10px}
.paywall-note strong{color:#4CAF7D}
</style>
</head>
<body>
<!-- British colour bar -->
<div class="union-bar"></div>
<!-- Back to top -->
<button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh">↑</button>

<!-- HAMBURGER -->
<button class="hamburger" onclick="openMobDrawer()" aria-label="Otvori navigaciju">
  <svg viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
</button>
<div class="mob-drawer" id="mobDrawer" role="dialog" aria-modal="true">
  <button class="mob-drawer-close" onclick="closeMobDrawer()">✕ Zatvori</button>
  <div onclick="closeMobDrawer();backToList()" style="display:flex;align-items:center;gap:8px;padding:10px 0;font-size:12px;font-family:var(--mono);color:var(--t3);cursor:pointer;border-bottom:1px solid var(--bd);margin-bottom:8px">
    <span>←</span> Sva poglavlja
  </div>
  <div class="sb-label">// Blok 1 — Start + Ispit</div>
  <div class="sb-item active" onclick="closeMobDrawer();navigateChapter(1)" style="cursor:pointer"><span class="sb-dot"></span> 01 · Kako izgleda Engleski A</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(2)" style="cursor:pointer"><span class="sb-dot"></span> 02 · Kako koristiti skriptu</div>
  <div class="sb-label">// Blok 2 — Grammar Core</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(3)" style="cursor:pointer"><span class="sb-dot"></span> 03 · Vremena koja se miješaju</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(4)" style="cursor:pointer"><span class="sb-dot"></span> 04 · Perfect vremena</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(5)" style="cursor:pointer"><span class="sb-dot"></span> 05 · Conditionals</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(6)" style="cursor:pointer"><span class="sb-dot"></span> 06 · Passive, Reported Speech</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(7)" style="cursor:pointer"><span class="sb-dot"></span> 07 · Modals, Articles, Quantifiers</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(8)" style="cursor:pointer"><span class="sb-dot"></span> 08 · Prepositions i Linkers</div>
  <div class="sb-label">// Blok 3 — Use of English</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(9)" style="cursor:pointer"><span class="sb-dot"></span> 09 · Što zadatak testira</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(10)" style="cursor:pointer"><span class="sb-dot"></span> 10 · Gap fill i MCQ</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(11)" style="cursor:pointer"><span class="sb-dot"></span> 11 · Word formation</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(12)" style="cursor:pointer"><span class="sb-dot"></span> 12 · Najčešće zamke</div>
  <div class="sb-label">// Blok 4 — Writing</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(13)" style="cursor:pointer"><span class="sb-dot"></span> 13 · Dobar maturalni esej</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(14)" style="cursor:pointer"><span class="sb-dot"></span> 14 · Struktura eseja</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(15)" style="cursor:pointer"><span class="sb-dot"></span> 15 · Linking words i vocabulary</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(16)" style="cursor:pointer"><span class="sb-dot"></span> 16 · Greške + model essay</div>
  <div class="sb-label">// Blok 5 — Reading + Listening</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(17)" style="cursor:pointer"><span class="sb-dot"></span> 17 · Reading strategije</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(18)" style="cursor:pointer"><span class="sb-dot"></span> 18 · Listening strategije</div>
  <div class="sb-label">// Blok 6 — Vocab + Exam</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(19)" style="cursor:pointer"><span class="sb-dot"></span> 19 · Vocabulary for Matura</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(20)" style="cursor:pointer"><span class="sb-dot"></span> 20 · Final Exam Survival</div>
</div>




<!-- SIDEBAR -->



<nav class="sidebar" aria-label="Navigacija poglavljima">
  <div class="sb-brand">
    <div class="sb-logo" aria-hidden="true">
      <svg viewBox="0 0 14 14" fill="none"><path d="M2 3h10M2 7h7M2 11h5" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
    </div>
  </div>
  <div class="sb-back-btn" onclick="backToList()" style="display:flex;align-items:center;gap:8px;padding:9px 18px;font-size:11.5px;font-family:var(--mono);color:var(--t3);cursor:pointer;border-bottom:1px solid var(--bd);transition:color .12s" onmouseover="this.style.color='var(--t1)'" onmouseout="this.style.color='var(--t3)'">
    <span style="font-size:10px">←</span> Sva poglavlja
  </div>
  <div class="sb-label">// Blok 1 — Start + Ispit</div>
  <div class="sb-item active" onclick="navigateChapter(1)" style="cursor:pointer"><span class="sb-dot"></span>01 · Kako izgleda Engleski A</div>
  <div class="sb-item" onclick="navigateChapter(2)" style="cursor:pointer"><span class="sb-dot"></span>02 · Kako koristiti skriptu</div>
  <div class="sb-label">// Blok 2 — Grammar Core</div>
  <div class="sb-item" onclick="navigateChapter(3)" style="cursor:pointer"><span class="sb-dot"></span>03 · Vremena koja se miješaju</div>
  <div class="sb-item" onclick="navigateChapter(4)" style="cursor:pointer"><span class="sb-dot"></span>04 · Perfect vremena</div>
  <div class="sb-item" onclick="navigateChapter(5)" style="cursor:pointer"><span class="sb-dot"></span>05 · Conditionals</div>
  <div class="sb-item" onclick="navigateChapter(6)" style="cursor:pointer"><span class="sb-dot"></span>06 · Passive, Reported Speech</div>
  <div class="sb-item" onclick="navigateChapter(7)" style="cursor:pointer"><span class="sb-dot"></span>07 · Modals, Articles, Quantifiers</div>
  <div class="sb-item" onclick="navigateChapter(8)" style="cursor:pointer"><span class="sb-dot"></span>08 · Prepositions i Linkers</div>
  <div class="sb-label">// Blok 3 — Use of English</div>
  <div class="sb-item" onclick="navigateChapter(9)" style="cursor:pointer"><span class="sb-dot"></span>09 · Što zadatak testira</div>
  <div class="sb-item" onclick="navigateChapter(10)" style="cursor:pointer"><span class="sb-dot"></span>10 · Gap fill i MCQ</div>
  <div class="sb-item" onclick="navigateChapter(11)" style="cursor:pointer"><span class="sb-dot"></span>11 · Word formation</div>
  <div class="sb-item" onclick="navigateChapter(12)" style="cursor:pointer"><span class="sb-dot"></span>12 · Najčešće zamke</div>
  <div class="sb-label">// Blok 4 — Writing</div>
  <div class="sb-item" onclick="navigateChapter(13)" style="cursor:pointer"><span class="sb-dot"></span>13 · Dobar maturalni esej</div>
  <div class="sb-item" onclick="navigateChapter(14)" style="cursor:pointer"><span class="sb-dot"></span>14 · Struktura eseja</div>
  <div class="sb-item" onclick="navigateChapter(15)" style="cursor:pointer"><span class="sb-dot"></span>15 · Linking words i vocabulary</div>
  <div class="sb-item" onclick="navigateChapter(16)" style="cursor:pointer"><span class="sb-dot"></span>16 · Greške + model essay</div>
  <div class="sb-label">// Blok 5 — Reading + Listening</div>
  <div class="sb-item" onclick="navigateChapter(17)" style="cursor:pointer"><span class="sb-dot"></span>17 · Reading strategije</div>
  <div class="sb-item" onclick="navigateChapter(18)" style="cursor:pointer"><span class="sb-dot"></span>18 · Listening strategije</div>
  <div class="sb-label">// Blok 6 — Vocab + Exam</div>
  <div class="sb-item" onclick="navigateChapter(19)" style="cursor:pointer"><span class="sb-dot"></span>19 · Vocabulary for Matura</div>
  <div class="sb-item" onclick="navigateChapter(20)" style="cursor:pointer"><span class="sb-dot"></span>20 · Final Exam Survival</div>
<div class="sb-footer">01 / 20 · kako izgleda engleski a<br>maturiraj.hr</div>
</nav>




<!-- MAIN -->
<main class="main">
<div class="content-wrap">

  <div class="breadcrumb">
    <span style="cursor:pointer" onclick="backToList()">← chapters</span>
    <span class="bc-sep">/</span>
    <span>blok-1</span>
    <span class="bc-sep">/</span>
    <span class="bc-active">engleski-a-na-maturi</span>
  </div>

  <div class="tabs-wrap" role="tablist" aria-label="Navigacija tabovima">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" onkeydown="tabKey(event,0)" tabindex="0">⚡ 2 min<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" onkeydown="tabKey(event,1)" tabindex="-1">📖 Razumjeti<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" onkeydown="tabKey(event,2)" tabindex="-1">✍️ Provjeri se<span class="tab-check">✓</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Pregled</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Razumjeti ispit</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Provjeri znanje</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~25 min
    </div>
  </div>

  <!-- ══════════ LAYER 0 — 2 MIN ══════════ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 01 of 20 · blok 1 — start + exam mapa</div>
      <h1 class="hero-title">Engleski A<br><span>na državnoj maturi</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~2 min</span>
        <span class="hero-badge hb-level">viša razina</span>
        <span class="hero-badge hb-chapter">01 / 20</span>
      </div>
      <p class="hero-sub">Reading · Listening · Writing · bodovni sustav · kako pametno ući u ispit</p>
      <div class="progress-track"><div class="progress-bar" style="width:5%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-blue">Reading</span>
      <span class="pill pill-red">Writing</span>
      <span class="pill pill-gold">Listening</span>
      <span class="pill pill-green">Bodovni sustav</span>
      <span class="pill pill-cream">Strategija</span>
      <span class="pill pill-amber">Exam traps</span>
    </div>

    <!-- 3 cards: the game in 30 seconds -->
    <div class="sec-label">// ispit u 30 sekundi — što te čeka</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon blue">RD</div><div class="stat-name">Reading</div><div class="stat-desc">Više tipova teksta · skimming · inference · parafraziranje · <b style="color:var(--blue)">~35% bodova</b></div></div>
      <div class="stat-card"><div class="stat-icon red">WR</div><div class="stat-name">Writing</div><div class="stat-desc">Esej <b style="color:var(--union-red)">200–250 riječi</b> · raspravljački tekst · 4 kriterija · <b style="color:var(--union-red)">~40% bodova</b></div></div>
      <div class="stat-card"><div class="stat-icon gold">LI</div><div class="stat-name">Listening</div><div class="stat-desc">Snimke · specifične informacije · distractori · <b style="color:var(--gold)">~25% bodova</b></div></div>
    </div>

    <!-- 3 rules -->
    <div class="sec-label">// 3 pravila koja mijenjaju sve</div>
    <div class="panic-box">
      <div class="panic-hd">🇬🇧 exam essentials — zapamti ovo prije svega drugog</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Writing nosi najviše bodova</b> — esej se vrednuje prema 4 kriterija. Bez dobre strukture izgubiš bodove na dva kriterija odjednom. Ovdje je najveći lift.</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Reading nije "čitanje" — to je pretraživanje</b>. Trebaš prepoznati parafrazu i ignorirati distractore. Odgovor nikad nije doslovno prepisan iz teksta.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Listening: čitaj pitanja PRIJE snimke</b>. Znaš što tražiš → slušaš s ciljem. Speaker često mijenja mišljenje — točan odgovor je uvijek finalni, ne inicijalni.</div></div>
      </div>
    </div>

    <!-- CHECKPOINT GATE — question from THIS chapter's content -->
    <div class="sec-label" style="margin-top:28px">// checkpoint — provjeri se prije nego nastaviš</div>
    <div class="checkpoint-gate" id="cgBlock">
      <div class="cg-hd">
        <div class="cg-icon">🔐</div>
        <div>
          <div class="cg-title">Checkpoint — prolaznica</div>
          <div class="cg-sub">Odgovori točno da otključaš sljedeći tab</div>
        </div>
      </div>
      <div class="cg-body">
        <div class="cg-question">Koja cjelina ispita nosi <b>najviše bodova</b> na višoj razini Engleskog?</div>
        <div class="cg-opts" role="group" aria-label="Odaberi odgovor">
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">A</div>Reading — jer ima najviše zadataka</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,true)" onkeydown="if(event.key==='Enter')cgAnswer(this,true)"><div class="cg-letter">B</div>Writing — esej donosi ~40% ukupnih bodova</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">C</div>Listening — jer ga ne možeš ponoviti</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">D</div>Sve cjeline nose jednako</div>
        </div>
        <div class="cg-feedback" id="cgFb" aria-live="polite"></div>
        <button class="cg-unlock" id="cgBtn" onclick="unlockNext()">Nastavi na Razumjeti ispit →</button>
      </div>
    </div>

    <div class="nav-row">
      <span></span>
      <span class="nav-btn primary" onclick="switchTab(1)">Razumjeti ispit →</span>
    </div>
  </div><!-- /l0 -->

  <!-- ══════════ LAYER 1 — RAZUMJETI ══════════ -->
  <div class="layer" id="l1">

    <!-- STICKY IN-TAB PROGRESS -->
    <div class="tab-inner-progress" id="tipBar">
      <div class="tip-item" id="tip-0" onclick="tipScroll('sec-mjeri')"><span class="tip-dot"></span>Što mjeri ispit</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-1" onclick="tipScroll('sec-bodovi')"><span class="tip-dot"></span>Raspodjela bodova</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-2" onclick="tipScroll('sec-writing')"><span class="tip-dot"></span>Writing kriteriji</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-3" onclick="tipScroll('sec-reading')"><span class="tip-dot"></span>Reading tipovi</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-4" onclick="tipScroll('sec-listening')"><span class="tip-dot"></span>Listening vs Reading</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-5" onclick="tipScroll('sec-signals')"><span class="tip-dot"></span>Signal words</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-6" onclick="tipScroll('sec-timer')"><span class="tip-dot"></span>Time manager</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-7" onclick="tipScroll('sec-flowchart')"><span class="tip-dot"></span>Flowchart</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-8" onclick="tipScroll('sec-recall')"><span class="tip-dot"></span>5-sec recall</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-9" onclick="tipScroll('sec-essay')"><span class="tip-dot"></span>Uvod eseja</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-10" onclick="tipScroll('sec-calc')"><span class="tip-dot"></span>Kalkulator</div>
    </div>

    <div id="sec-mjeri" class="sec-label">// što ispit zapravo mjeri</div>
    <div class="bq">
      "The higher level examination tests not just knowledge of English, but the ability to use it effectively under time pressure — to read between the lines, to structure an argument, and to select the right word, not just a correct one."
      <cite>— princip više razine ispita (NCVVO)</cite>
    </div>
    <p class="prose">Viša razina nije teža samo zbog gramatike. Teža je jer zahtijeva <strong>jezičnu fleksibilnost</strong>: čitanje implicitnog, prepoznavanje nijansi, pisanje strukturiranog argumenta — sve pod vremenskim pritiskom. Ova skripta te priprema za točno to.</p>

    <!-- DONUT + BAR CHARTS -->
    <div id="sec-bodovi" class="sec-label" style="margin-top:32px">// raspodjela bodova + gdje učenici gube poene</div>
    <div class="donut-wrap">
      <svg class="donut-svg" width="140" height="140" viewBox="0 0 140 140" role="img" aria-label="Kružni grafikon raspodjele bodova: Reading 35%, Writing 40%, Listening 25%">
        <circle cx="70" cy="70" r="54" fill="none" stroke="var(--bg-card)" stroke-width="22"/>
        <circle cx="70" cy="70" r="54" fill="none" stroke="var(--blue)" stroke-width="22"
          stroke-dasharray="125.4 213.6" stroke-dashoffset="0" stroke-linecap="butt"
          style="transform:rotate(-90deg);transform-origin:70px 70px"/>
        <circle cx="70" cy="70" r="54" fill="none" stroke="var(--union-red)" stroke-width="22"
          stroke-dasharray="135.7 203.3" stroke-dashoffset="-125.4" stroke-linecap="butt"
          style="transform:rotate(-90deg);transform-origin:70px 70px"/>
        <circle cx="70" cy="70" r="54" fill="none" stroke="var(--gold)" stroke-width="22"
          stroke-dasharray="77.9 261.1" stroke-dashoffset="-261.1" stroke-linecap="butt"
          style="transform:rotate(-90deg);transform-origin:70px 70px"/>
        <text x="70" y="66" text-anchor="middle" font-family="'Playfair Display',serif" font-size="20" font-weight="900" fill="var(--t1)">100</text>
        <text x="70" y="80" text-anchor="middle" font-family="'DM Mono',monospace" font-size="9" fill="var(--t3)" letter-spacing="1">BODOVA</text>
      </svg>
      <div class="donut-legend">
        <div class="donut-item"><div class="donut-swatch" style="background:var(--blue)"></div><div class="donut-name">Reading (čitanje)</div><div class="donut-num">~35%</div></div>
        <div class="donut-item"><div class="donut-swatch" style="background:var(--union-red)"></div><div class="donut-name">Writing (pisanje)</div><div class="donut-num">~40%</div></div>
        <div class="donut-item"><div class="donut-swatch" style="background:var(--gold)"></div><div class="donut-name">Listening (slušanje)</div><div class="donut-num">~25%</div></div>
        <div style="margin-top:12px;font-family:var(--mono);font-size:11px;color:var(--t3);line-height:1.7">Pisanje nosi <b style="color:var(--union-red)">najviše bodova po zadatku</b>.<br>Ne možeš ga preskočiti ili naknadno riješiti.</div>
      </div>
    </div>
    <div class="bar-chart" id="barChart">
      <div style="font-family:var(--mono);font-size:10.5px;color:var(--t3);margin-bottom:14px">Gdje maturanti najčešće gube bodove — relativna rizičnost po tipu zadatka</div>
      <div class="bar-row"><div class="bar-label">Esej (WR)</div><div class="bar-track"><div class="bar-fill red" style="width:0%" data-w="78%"><span class="bar-pct">visok rizik</span></div></div><div class="bar-val" style="color:var(--union-red)">↑ visok</div></div>
      <div class="bar-row"><div class="bar-label">Inference (RD)</div><div class="bar-track"><div class="bar-fill blue" style="width:0%" data-w="62%"><span class="bar-pct">znatan rizik</span></div></div><div class="bar-val" style="color:var(--blue)">↑ znatan</div></div>
      <div class="bar-row"><div class="bar-label">Distractor (LI)</div><div class="bar-track"><div class="bar-fill gold" style="width:0%" data-w="54%"><span class="bar-pct">srednji rizik</span></div></div><div class="bar-val" style="color:var(--gold)">srednji</div></div>
      <div class="bar-row"><div class="bar-label">Collocations</div><div class="bar-track"><div class="bar-fill green" style="width:0%" data-w="47%"><span class="bar-pct">srednji rizik</span></div></div><div class="bar-val" style="color:var(--brit-green)">srednji</div></div>
      <div class="bar-row"><div class="bar-label">Articles</div><div class="bar-track"><div class="bar-fill amber" style="width:0%" data-w="38%"><span class="bar-pct">manji rizik</span></div></div><div class="bar-val" style="color:var(--amber)">↓ manji</div></div>
    </div>
    <div style="font-family:var(--mono);font-size:10.5px;color:var(--t3);margin-top:-10px;margin-bottom:28px">* Relativna procjena rizičnosti na temelju analize NCVVO ispitnih obrazaca i iskustva predavača — poredak je konzistentan, proporcije su indikativne.</div>

    <!-- WRITING score card -->
    <div id="sec-writing" class="sec-label" style="margin-top:32px">// cjelina 1 — writing · 4 kriterija bodovanja</div>
    <div class="score-card">
      <div class="score-card-hd">
        <div class="sc-title">Raspravljački esej — 4 kriterija bodovanja</div>
        <div class="sc-badge">200–250 words</div>
      </div>
      <div class="score-grid">
        <div class="score-item"><div class="si-pct" style="color:var(--union-red)">25%</div><div class="si-label">kriterij 1</div><div class="si-name">Task Achievement</div><div class="si-desc">Jesi li odgovorio na temu? Jesi li zauzeo jasan stav? Jesi li pisao u pravom žanru i dužini?</div></div>
        <div class="score-item"><div class="si-pct" style="color:var(--blue)">25%</div><div class="si-label">kriterij 2</div><div class="si-name">Coherence &amp; Cohesion</div><div class="si-desc">Logički slijed misli, jasna struktura odlomaka, linking words, referencing — čitatelj ne smije biti zbunjen.</div></div>
        <div class="score-item"><div class="si-pct" style="color:var(--gold)">25%</div><div class="si-label">kriterij 3</div><div class="si-name">Vocabulary</div><div class="si-desc">Raznolik i precizan vokabular. Nije dovoljno samo "correct" — treba biti "appropriate". Kolokacije, register, napredni glagoli.</div></div>
        <div class="score-item"><div class="si-pct" style="color:var(--brit-green)">25%</div><div class="si-label">kriterij 4</div><div class="si-name">Grammar Accuracy</div><div class="si-desc">Točnost i raspon gramatičkih struktura. Sustavne greške spuštaju razinu. Raznolikost diže — complex sentences, passive, conditionals.</div></div>
      </div>
    </div>
    <div class="callout callout-warn">
      <div class="callout-icon">🎯</div>
      <div class="callout-body">
        <div class="callout-title">Task Achievement — najčešća greška</div>
        <div class="callout-text">Učenici pišu dobro, ali <b>ne odgovaraju na temu</b>. Ili pišu opis umjesto rasprave. Ili ne zauzmu stav. Ili napišu 180 riječi. U svim tim slučajevima automatski padaju bodovi za kriterij 1 — a loša ocjena na jednom kriteriju povlači i pad ukupne ocjene. Uvijek čitaj temu dva puta.</div>
      </div>
    </div>

    <!-- READING strategy -->
    <div id="sec-reading" class="sec-label" style="margin-top:36px">// cjelina 2 — reading · tipovi pitanja i strategije</div>
    <p class="prose">Reading cjelina na višoj razini ne testira samo <em>razumijevanje</em> — testira <strong>preciznost</strong>. Svaki netočan odgovor izgleda gotovo točno. Cilj je naučiti prepoznati <em>parafrazu</em>, locirati je u tekstu i odbaciti zamke.</p>
    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge reading">RD</div>
        <div><div class="gram-title">Tipovi Reading zadataka — viša razina</div><div class="gram-sub">svaki tip ima svoju strategiju</div></div>
      </div>
      <div class="gram-body">
        <div class="concepts" style="margin:0">
          <div class="concept-row"><div class="ck blue">Main idea / gist</div><div class="cv">Skim tekst prije čitanja pitanja. Odgovor je u <b>cijelom odlomku</b>, ne u jednoj rečenici. Distractori su točni za <em>detalj</em>, ali ne za <em>glavnu misao</em>.</div></div>
          <div class="concept-row"><div class="ck gold">Detail questions</div><div class="cv">Scan tekst za ključnu riječ iz pitanja. Pronađi rečenicu — provjeri <b>prije i poslije</b> za kontekst. Odgovor je parafraziran, nikad doslovan.</div></div>
          <div class="concept-row"><div class="ck red">Inference questions</div><div class="cv">Odgovor <b>nije napisan</b> u tekstu. Izvodi se iz tona, izbora riječi, konteksta. Traži: "Što ovo implicira?" ne "Što piše?"</div></div>
          <div class="concept-row"><div class="ck amber">Vocabulary in context</div><div class="cv">Zamijeni podvučenu riječ s opcijama — <b>u istoj rečenici</b>. Pitaj se: Mijenja li se smisao? Jedna opcija savršeno "sjeda" u kontekst.</div></div>
          <div class="concept-row"><div class="ck green">Matching / headings</div><div class="cv">Čitaj <b>samo prvu i posljednju rečenicu</b> svakog odlomka. Tema odlomka je tamo. Nemoj čitati cijeli tekst za svako pitanje.</div></div>
          <div class="concept-row"><div class="ck cream">True/False/Not given</div><div class="cv"><b>Not given ≠ False.</b> False = tekst kaže suprotno. Not given = tekst <em>uopće ne spominje</em> tu informaciju. To je najteži tip — ne nagađaj!</div></div>
        </div>
      </div>
    </div>

    <!-- LISTENING strategy -->
    <div id="sec-listening" class="sec-label" style="margin-top:36px">// cjelina 3 — listening · kako se razlikuje od readinga</div>
    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head blue">📖 Reading — imaš tekst</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Možeš se vratiti</b>Možeš pročitati istu rečenicu opet ako nešto nisi razumio</div>
          <div class="cmp-row"><b>Vlastiti tempo</b>Sam biraš koliko dugo gledaš svaki dio</div>
          <div class="cmp-row"><b>Vizualni signali</b>Paragrafi, naslovi, bold = struktura vidljiva</div>
          <div class="cmp-row"><b>Provjera odgovora</b>Možeš polako provjeriti sve opcije i vratiti se</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head gold">🎧 Listening — snimka</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Nema povratka</b>Propustiš li informaciju — otišla je (ili trebaš 2. slušanje)</div>
          <div class="cmp-row"><b>Tempo govora</b>Speaker određuje tempo — moraš pratiti</div>
          <div class="cmp-row"><b>Zvučni signali</b>However, but, actually = signal promjene smjera</div>
          <div class="cmp-row"><b>Distractori su zvučni</b>Čuješ prvu opciju — ali speaker je može opovrgnuti</div>
        </div>
      </div>
    </div>
    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">Listening Gold Rule — čitaj pitanja UNAPRIJED</div>
        <div class="callout-text">Uvijek imaš kratko vrijeme između upute i snimke — <b>iskoristi ga da čitaš pitanja i podvlačiš ključne riječi</b>. Tako slušaš s ciljem, ne nasumično. Predviđaš što ćeš čuti i u kojoj formi (broj, ime, detalj, mišljenje).</div>
      </div>
    </div>

    <!-- SIGNAL WORDS -->
    <div id="sec-signals" class="sec-label" style="margin-top:32px">// signal words koje se moraju prepoznati odmah</div>
    <div class="signal-grid">
      <div class="sig-card"><div class="sig-head blue">Reading — discourse signals</div><div class="chips"><span class="chip blue">however</span><span class="chip blue">despite</span><span class="chip blue">although</span><span class="chip blue">whereas</span><span class="chip blue">on the other hand</span><span class="chip blue">in contrast</span><span class="chip blue">therefore</span><span class="chip blue">as a result</span><span class="chip blue">consequently</span><span class="chip blue">furthermore</span></div></div>
      <div class="sig-card"><div class="sig-head gold">Listening — speaker signals</div><div class="chips"><span class="chip gold">actually</span><span class="chip gold">in fact</span><span class="chip gold">but</span><span class="chip gold">well</span><span class="chip gold">I mean</span><span class="chip gold">to be honest</span><span class="chip gold">having said that</span><span class="chip gold">mind you</span><span class="chip gold">then again</span><span class="chip gold">what I really think</span></div></div>
      <div class="sig-card"><div class="sig-head red">Writing — essay connectors</div><div class="chips"><span class="chip red">firstly</span><span class="chip red">furthermore</span><span class="chip red">in addition</span><span class="chip red">moreover</span><span class="chip red">nevertheless</span><span class="chip red">in conclusion</span><span class="chip red">to sum up</span><span class="chip red">while it is true that</span><span class="chip red">it can be argued that</span></div></div>
      <div class="sig-card"><div class="sig-head green">Exam — upozorenja koja ne smiješ propustiti</div><div class="chips"><span class="chip green">NOT GIVEN</span><span class="chip green">EXCEPT</span><span class="chip green">ALL OF THE FOLLOWING</span><span class="chip green">BEST</span><span class="chip green">MAIN idea</span><span class="chip green">MOST likely</span><span class="chip green">ACCORDING to</span><span class="chip green">IMPLIES</span></div></div>
    </div>

    <!-- MATURA RADAR -->
    <div class="radar">
      <div class="radar-hd">🎯 Exam traps — zamke specifične za višu razinu</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">TRAP</div><div class="radar-text"><b>Doslovna parafraziranost u MCQ</b> — Opcija koja <em>doslovno ponavlja</em> frazu iz teksta često je distractor. Točan odgovor je <em>parafraziran drukčijim riječima</em>.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">TRAP</div><div class="radar-text"><b>Esej koji je priča umjesto rasprave</b> — Tema: "Should social media be regulated?" → pisati primjere nije rasprava. Treba <b>argument + protuargument + zaključak</b>.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">TRAP</div><div class="radar-text"><b>Listening: prvi odgovor = distractor</b> — Speaker često <em>prvo kaže nešto</em>, pa se <b>ispravlja ili modificira</b> stavom. Točan odgovor je onaj <em>finalni</em>, ne inicijalni.</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">WHERE</div><div class="radar-text"><b>Inference pitanja su u Reading</b> — pojavljuju se u svakom setu reading pitanja, obično kao <em>posljednje 1–2 pitanja</em>. Formulirano kao: <em>"It can be inferred that..."</em></div></div>
        <div class="radar-item"><div class="radar-badge rb-mark">MARKS</div><div class="radar-text"><b>Esej — dužina je kriterij</b> — ispod 200 ili iznad 250 riječi direktno utječe na <b>task achievement</b>. Procjenjuj dužinu bez brojanja (~1 odlomak = 60–80 riječi).</div></div>
      </div>
    </div>

    <!-- TIMER SIMULATOR -->
    <div id="sec-timer" class="sec-label" style="margin-top:36px">// raspodjeli 120 minuta — interaktivni simulator</div>
    <div class="timer-sim">
      <div class="timer-sim-hd">
        <div class="tsim-title">Exam Time Manager</div>
        <div class="tsim-badge">⏱ 120 min ukupno</div>
      </div>
      <div class="timer-sim-body">
        <p style="font-size:13px;color:var(--t2);margin-bottom:18px;font-family:var(--mono)">Povuci klizače i vidi koliko vremena ostaje — i što savjetujemo za svaki raspored.</p>
        <div class="tsim-sliders">
          <div class="tsim-row"><div class="tsim-label" style="color:var(--blue)">📖 Reading</div><input type="range" class="tsim-slider rd" id="slRd" min="20" max="70" value="45" aria-label="Reading minutaze" oninput="updateTimer()"><div class="tsim-val rd" id="valRd">45 min</div></div>
          <div class="tsim-row"><div class="tsim-label" style="color:var(--union-red)">✍️ Writing</div><input type="range" class="tsim-slider wr" id="slWr" min="20" max="70" value="50" aria-label="Writing minutaze" oninput="updateTimer()"><div class="tsim-val wr" id="valWr">50 min</div></div>
          <div class="tsim-row"><div class="tsim-label" style="color:var(--gold)">🎧 Listening</div><input type="range" class="tsim-slider li" id="slLi" min="10" max="40" value="25" aria-label="Listening minutaze" oninput="updateTimer()"><div class="tsim-val li" id="valLi">25 min</div></div>
        </div>
        <div class="tsim-total"><span>Ukupno iskorišteno:</span><span class="tsim-total-num ok" id="timerTotal">120 / 120 min</span></div>
        <div class="tsim-feedback" id="timerFb" aria-live="polite"><span class="ok">✓ Savršen raspored!</span> Reading 45 min, Writing 50 min, Listening 25 min — preporučena distribucija za višu razinu.</div>
      </div>
    </div>

    <!-- FLOWCHART -->
    <div id="sec-flowchart" class="sec-label" style="margin-top:36px">// kako pristupiti temi eseja — vizualni algoritam</div>
    <p style="font-size:13px;color:var(--t2);margin-bottom:16px;font-family:var(--mono)">Tema: <b style="color:var(--t1)">"Should social media be regulated by governments?"</b></p>
    <div class="flowchart" role="list" aria-label="Koraci pristupa temi eseja">
      <div class="fc-node start" role="listitem">📋 Dobivaš temu eseja</div>
      <div class="fc-arrow">↓ korak 1</div>
      <div class="fc-node question" role="listitem">Čitam temu — koje su ključne riječi? <span style="color:var(--blue);font-family:var(--mono);font-weight:700">"regulated" · "governments" · "social media"</span></div>
      <div class="fc-arrow">↓ korak 2</div>
      <div class="fc-node question" role="listitem">Je li ovo rasprava (za/protiv) ili diskusija (prednosti/nedostaci)?</div>
      <div class="fc-branch">
        <div><div class="fc-arrow"><span>za/protiv → zauzmi stav</span></div><div class="fc-node action" role="listitem">Odlučujem: JA sam ZA ili PROTIV regulacije → biram jasniji stav</div></div>
        <div><div class="fc-arrow"><span>diskusija → obje strane</span></div><div class="fc-node action gold" role="listitem">Navodim prednosti I nedostatke — ne moram birati stranu</div></div>
      </div>
      <div class="fc-arrow">↓ korak 3 — 3 minute planiranja</div>
      <div class="fc-node question" role="listitem">Smislim <b>2 argumenta</b> + <b>1 protuargument</b> + kratki zaključak</div>
      <div class="fc-branch">
        <div><div class="fc-node action" role="listitem">Argument 1:<br>→ spreads misinformation</div></div>
        <div><div class="fc-node action" role="listitem">Argument 2:<br>→ mental health impact</div></div>
      </div>
      <div class="fc-arrow">↓ korak 4</div>
      <div class="fc-node action red" role="listitem">Protuargument: Freedom of speech — ali odmah ga pobijam</div>
      <div class="fc-arrow">↓ korak 5 — počinjem pisati</div>
      <div class="fc-node result" role="listitem">✓ Uvod (stav) → Body 1 (arg 1) → Body 2 (arg 2 + counterarg) → Zaključak</div>
    </div>

    <!-- 5-SECOND RECALL -->
    <div id="sec-recall" class="sec-label" style="margin-top:36px">// 5-second recall — klikni i provjeri</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false"><div class="reveal-q"><span class="rq-icon">📝</span><span>Koliko cjelina ima Engleski A ispit?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>Tri cjeline:</b> <span class="ok">Reading</span>, <span class="note">Listening</span>, <span style="color:var(--union-red)">Writing</span>.<br>Gramatika i vokabular prožimaju sve zadatke — nisu zasebna cjelina, ali greške u gramatici i vokabularu padaju u svaku sekciju bodovanja. Ukupno ~100 bodova.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false"><div class="reveal-q"><span class="rq-icon">✍️</span><span>Što točno znači "raspravljački esej" na maturi?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans">Esej mora imati <b>jasno mišljenje (stance)</b>, argumentaciju s primjerima i logički slijed — uvod → razrada (2 body paragrafa) → zaključak.<br>Nije priča ni opis. <b>Svaki odlomak ima jednu jasnu misao.</b><br><span class="ok">200–250 riječi</span> — previše ili premalo = gubitak bodova za task achievement.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false"><div class="reveal-q"><span class="rq-icon">🎧</span><span>Kako pristupiti Listening cjelini pametno?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>Prije snimke:</b> Čitaj pitanja. Podvuci ključne riječi. Predvidi što ćeš čuti.<br><b>Za vrijeme:</b> Slušaj signal words — <span class="ok">however, but, actually, in fact</span> (promjena smjera!).<br><b>Zamka:</b> Distractori — prvi odgovor koji čuješ često <span class="bad">nije točan</span>. Speaker može promijeniti mišljenje. Čekaj do kraja iskaza.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false"><div class="reveal-q"><span class="rq-icon">📖</span><span>Što je "inference" i zašto pada toliko učenika?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans">Inference = <b>zaključak koji nije doslovno napisan</b> u tekstu, ali logički slijedi iz onoga što jest.<br>Primjer: tekst kaže "She hesitated before answering." → pitanje "How did she feel?" → odgovor <span class="ok">nervous/uncertain</span> nigdje nije napisan, ali se <b>mora izvesti iz konteksta</b>.<br>Zamka: učenici traže <span class="bad">doslovan odgovor</span>. Viša razina = manje doslovnih, više zaključivanja.</div></div>

    <!-- ESSAY COMPARE -->
    <div id="sec-essay" class="sec-label" style="margin-top:36px">// slab uvod vs jak uvod — razlika na prvu rečenicu</div>
    <p style="font-size:13px;color:var(--t2);margin-bottom:16px;font-family:var(--mono)">Tema: <b style="color:var(--t1)">"Should homework be banned in schools?"</b> — isti učenik, isti stav, dva pristupa</p>
    <div class="essay-compare">
      <div class="essay-card">
        <div class="essay-card-hd weak">✗ Slab uvod — gubi bodove</div>
        <div class="essay-card-body">
          <div class="essay-text"><span class="hl-bad">In my essay I will write about</span> homework and whether it should be banned. <span class="hl-bad">I think</span> homework is a very important topic. <span class="hl-bad">There are many opinions</span> about this. <span class="hl-bad">Some people think</span> it is good and some people think it is bad. <span class="hl-bad">In this essay I will discuss</span> both sides.</div>
          <div class="essay-note"><b>Problemi:</b><br>— "In my essay I will write about" = nosi 0 informacija<br>— "I think" = neformalan registar, prenizak za višu razinu<br>— Nema jasnog stava — ispitivač ne zna što autor misli<br>— Ponavljanje "some people think" = nema vlastitog glasa<br>— 48 riječi, a ništa nije rečeno</div>
        </div>
      </div>
      <div class="essay-card">
        <div class="essay-card-hd strong">✓ Jak uvod — osvaja bodove</div>
        <div class="essay-card-body">
          <div class="essay-text"><span class="hl-good">The debate over whether homework should be abolished</span> has gained significant attention in recent years. <span class="hl-good">While proponents argue</span> that it reinforces learning, <span class="hl-good">I strongly believe</span> that the negative impact on students' well-being far outweighs any academic benefits. <span class="hl-good">This essay will examine</span> the key arguments on both sides before presenting a clear conclusion.</div>
          <div class="essay-note"><b>Zašto radi:</b><br>— Odmah uvodi temu bez "In my essay..."<br>— "I strongly believe" = jasan stav, akademski ton<br>— "far outweighs" = precizna kolokacija, diže vocabulary ocjenu<br>— Anticipira strukturu eseja<br>— 52 riječi, svaka nosi informaciju</div>
        </div>
      </div>
    </div>
    <div class="callout callout-royal"><div class="callout-icon">📐</div><div class="callout-body"><div class="callout-title">Formula jakog uvoda — 3 elementa</div><div class="callout-text"><b>1. Hook/kontekstualizacija</b> — uvedi temu (ne "In my essay")<br><b>2. Stav</b> — jasno reci što misliš (I strongly believe / It is my firm conviction...)<br><b>3. Road map</b> — najavi strukturu (This essay will examine / argue / explore...)</div></div></div>
    <div class="callout callout-info"><div class="callout-icon">🇬🇧</div><div class="callout-body"><div class="callout-title">Oxford Rule of Thumb — pisanje je nepovratno</div><div class="callout-text">Za razliku od readinga, esej ne možeš retroaktivno dopuniti. <b>Planiranju eseja posveti 3–5 minuta — ta ulaganja vraćaju se višestruko</b> jer pišeš ravno, bez zastajkivanja i bez rušenja strukture usred pisanja.</div></div></div>

    <!-- SCORE CALCULATOR -->
    <div id="sec-calc" class="sec-label" style="margin-top:36px">// kalkulator bodova — procijeni svoj potencijal</div>
    <div class="calc-wrap">
      <div class="calc-hd"><div class="calc-title">Bodovni kalkulator</div><div class="calc-badge">procjena · nije službeno</div></div>
      <div class="calc-body">
        <p style="font-size:12.5px;color:var(--t2);margin-bottom:18px;font-family:var(--mono)">Koliko bodova misliš da možeš skupiti iz svakog dijela? Pomakni klizač — vidi ukupnu ocjenu i gdje je tvoj potencijal rasta najveći.</p>
        <div class="calc-sliders">
          <div class="calc-row"><div class="calc-label" style="color:var(--blue)">Reading<span class="calc-sub">max ~35 bod.</span></div><input type="range" class="calc-slider" id="cRd" min="0" max="35" value="22" aria-label="Reading bodovi" oninput="updateCalc()"><div class="calc-pct" id="cRdV">22</div></div>
          <div class="calc-row"><div class="calc-label" style="color:var(--union-red)">Writing<span class="calc-sub">max ~40 bod.</span></div><input type="range" class="calc-slider" id="cWr" min="0" max="40" value="24" aria-label="Writing bodovi" oninput="updateCalc()"><div class="calc-pct" id="cWrV">24</div></div>
          <div class="calc-row"><div class="calc-label" style="color:var(--gold)">Listening<span class="calc-sub">max ~25 bod.</span></div><input type="range" class="calc-slider" id="cLi" min="0" max="25" value="16" aria-label="Listening bodovi" oninput="updateCalc()"><div class="calc-pct" id="cLiV">16</div></div>
        </div>
        <div class="calc-result">
          <div class="calc-grade-num" id="calcGrade" style="color:var(--amber)">62%</div>
          <div class="calc-grade-lbl" id="calcLabel">Dobar (3) · 62/100 bodova</div>
        </div>
        <div class="calc-tips" id="calcTips"></div>
      </div>
    </div>

    <!-- DISCERE LINK -->
    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🎯</div><div class="discere-hd-text">Discere — pravi ispitni zadaci</div></div>
      <div class="discere-body">
        <div class="discere-desc">Naučio si logiku ispita. Sad je pravo vrijeme da vidiš <b>stvarne maturalne zadatke</b> — reading tekstove, listening vježbe i writing promptove iz arhive mature.</div>
        <button class="discere-btn" onclick="openDiscere()">Otvori Discere →</button>
      </div>
    </div>

    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">← Pregled</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Provjeri se →</span>
    </div>
  </div><!-- /l1 -->

  <!-- ══════════ LAYER 2 — PROVJERI SE ══════════ -->
  <div class="layer" id="l2">

    <div class="quiz-intro">
      Provjeri razumiješ li strukturu ispita prije nego nastaviš s gramatičkim poglavljima.<br>
      <strong>Svako pitanje ima objašnjenje odmah nakon odgovora.</strong> Nema smisla pogađati — razmisli.
    </div>

    <!-- Q1 -->
    <div class="q-block" id="q1">
      <div class="q-head">
        <div class="q-meta">pitanje 01 · struktura ispita</div>
        <div class="q-text">Koliko se kriterija koristi za bodovanje eseja na višoj razini Engleskog?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">A</div>2 kriterija — sadržaj i gramatika</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">B</div>3 kriterija — uvod, body, zaključak</div>
        <div class="q-opt" onclick="answer(this,'q1','correct')"><div class="q-letter">C</div>4 kriterija — task achievement, cohesion, vocabulary, grammar</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">D</div>5 kriterija — svaki odlomak posebno</div>
      </div>
      <div class="q-expl" id="qe1">
        <div class="expl-ok">✓ Točno — 4 kriterija: Task Achievement, Coherence & Cohesion, Vocabulary, Grammar Accuracy. Svaki nosi ~25% esejskog dijela bodova.</div>
      </div>
    </div>

    <!-- Q2 -->
    <div class="q-block" id="q2">
      <div class="q-head">
        <div class="q-meta">pitanje 02 · writing</div>
        <div class="q-text">Koliko riječi treba imati maturalni esej na višoj razini?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">A</div>150–200 riječi</div>
        <div class="q-opt" onclick="answer(this,'q2','correct')"><div class="q-letter">B</div>200–250 riječi</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">C</div>250–300 riječi</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">D</div>Nije određeno — pišeš koliko hoćeš</div>
      </div>
      <div class="q-expl" id="qe2">
        <div class="expl-ok">✓ Točno — 200–250 riječi. Previše ili premalo direktno ugrožava kriterij Task Achievement. Nauči procijeniti dužinu otprilike — 1 odlomak ≈ 60–80 riječi.</div>
      </div>
    </div>

    <!-- Q3 -->
    <div class="q-block" id="q3">
      <div class="q-head">
        <div class="q-meta">pitanje 03 · reading · inference</div>
        <div class="q-text">Što znači "inference question" u Reading cjelini?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">A</div>Pitanje u kojemu se odgovor doslovno nalazi u tekstu</div>
        <div class="q-opt" onclick="answer(this,'q3','correct')"><div class="q-letter">B</div>Pitanje gdje moraš zaključiti nešto što nije izravno napisano</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">C</div>Pitanje o vokabularu — što znači određena riječ</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">D</div>Pitanje o tome tko je autor teksta</div>
      </div>
      <div class="q-expl" id="qe3">
        <div class="expl-ok">✓ Točno — Inference = zaključivanje iz konteksta, ne pronalaženje doslovnog odgovora. Viša razina ima više ovakvog tipa pitanja nego niža. Tražiš implicitnu poruku.</div>
      </div>
    </div>

    <!-- Q4 -->
    <div class="q-block" id="q4">
      <div class="q-head">
        <div class="q-meta">pitanje 04 · listening · taktika</div>
        <div class="q-text">Što je NAJVAŽNIJA stvar napraviti PRIJE nego počne listening snimka?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">A</div>Napisati sve moguće odgovore da budeš spreman</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">B</div>Zatvoriti oči i fokusirati se na slušanje</div>
        <div class="q-opt" onclick="answer(this,'q4','correct')"><div class="q-letter">C</div>Pročitati pitanja i podvući ključne riječi</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">D</div>Ništa — čekaš snimku da vidiš o čemu se radi</div>
      </div>
      <div class="q-expl" id="qe4">
        <div class="expl-ok">✓ Točno — uvijek čitaj pitanja unaprijed. Znaš što tražiš → slušaš s ciljem, a ne pasivno. Podvuci ključne riječi u pitanjima kako bi znao na što se fokusirati.</div>
      </div>
    </div>

    <!-- Q5 -->
    <div class="q-block" id="q5">
      <div class="q-head">
        <div class="q-meta">pitanje 05 · listening · distractor</div>
        <div class="q-text">U listening zadatku, speaker kaže: "I thought the museum was a bit boring, but actually it turned out to be fascinating." Koji je točan odgovor?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">A</div>Speaker smatra da je muzej dosadan</div>
        <div class="q-opt" onclick="answer(this,'q5','correct')"><div class="q-letter">B</div>Speaker je bio ugodno iznenađen muzejom</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">C</div>Speaker preporučuje da se izbjegne muzej</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">D</div>Speaker nije posjetio muzej</div>
      </div>
      <div class="q-expl" id="qe5">
        <div class="expl-ok">✓ Točno — "actually it turned out to be fascinating" = speaker je promijenio mišljenje. "Boring" je distractor — prvo mišljenje, ali NIJE finalno. Ključna riječ: <b>actually</b> = obrat!</div>
      </div>
    </div>

    <!-- SPEED DRILL — exam map -->
    <div class="sec-label" style="margin-top:32px">// speed drill — provjeri logiku ispita</div>
    <div class="speed-drill-wrap" id="examDrill">
      <div class="sd-intro">Odaberi točan odgovor. Ovo su konceptualna pitanja — nema vremenskog pritiska, ali razmišljaj brzo.</div>
      <div class="sd-progress" id="drillDots"></div>
      <div id="drillQ"></div>
      <div class="sd-score" id="drillScore">
        <div class="sd-score-num" id="drillNum">0/5</div>
        <div class="sd-score-lbl">Gotov si! Provjeri greške gore, pa idi na Poglavlje 2.</div>
        <button class="sd-retry" onclick="resetDrill()">↺ Ponovi drill</button>
      </div>
    </div>

    <!-- DISCERE LINK — Tab 2 -->
    <div class="discere-box" style="margin-top:32px">
      <div class="discere-hd">
        <div class="discere-hd-icon">🚀</div>
        <div class="discere-hd-text">Spreman si za pravu vježbu</div>
      </div>
      <div class="discere-body">
        <div class="discere-desc">Prošao si kviz i razumiješ strukturu ispita. Sljedeći korak: <b>stvarni maturalni zadaci iz arhive</b> — reading tekstovi, listening isječci i writing promptovi s ocjenama.</div>
        <button class="discere-btn" onclick="openDiscere()">Vježbaj na Discere →</button>
      </div>
    </div>

    
<!-- ═══ PREMIUM GATE: AI PROFESSOR ═══ -->
<div class="pg-ai">
  <div class="pg-ai-hd">
    <div class="pg-ai-ico">🤖</div>
    <div style="flex:1;min-width:0">
      <div class="pg-ai-ttl">AI Profesor <span class="pg-ai-badge">PRO · 200 msg/dan</span></div>
      <div class="pg-ai-sub">Imaš pitanje o gramatici, pisanju eseja ili strategiji ispita? Pitaj me — odgovorim odmah, korak po korak.</div>
    </div>
  </div>
  <div class="pg-ai-chips">
    <span class="pg-ai-chip" onclick="openPaywall('ai')">&#128172; Kako pisati esej na C1/C2 razini?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">&#128172; Top 5 grešaka na engleskom ispitu</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">&#128172; Plan učenja za 3 tjedna do mature</span>
  </div>
  <div class="pg-ai-bubble">
    Gramatika, esej struktura, linking words, strategija za reading i listening — <strong>AI profesor odgovara 24/7</strong><span class="pg-ai-typing"><span></span><span></span><span></span></span>
  </div>
  <button class="pg-ai-cta" onclick="openPaywall('ai')">Otključaj AI profesora &#8594;</button>
</div>

<!-- ═══ PREMIUM GATE: DISCERE SIMULATOR ═══ -->
<div class="pg-disc">
  <div class="pg-disc-hd">
    <div class="pg-disc-ico">&#127919;</div>
    <div style="flex:1;min-width:0">
      <div class="pg-disc-ttl">Discere Simulator <span class="pg-disc-badge">STANDARD</span></div>
      <div class="pg-disc-sub">Pravi ispit uvjeti — tajmer, bodovi, feedback. Provjeri se na 40+ stvarnih ENJ ispita.</div>
    </div>
  </div>
  <div class="pg-disc-split">
    <div class="pg-disc-col">
      <div class="pg-disc-col-ttl">Samo skripta</div>
      <div class="pg-disc-col-val">&#128218;</div>
      <div class="pg-disc-col-sub">pasivno čitanje</div>
    </div>
    <div class="pg-disc-arrow">&#8594;</div>
    <div class="pg-disc-col on">
      <div class="pg-disc-col-ttl">Discere simulacija</div>
      <div class="pg-disc-col-val">&#9201; 120:00</div>
      <div class="pg-disc-col-sub">pravi ispit iskustvo</div>
    </div>
  </div>
  <div class="pg-disc-stats">
    <div class="pg-disc-stat"><span class="pg-disc-stat-n">40+</span><span class="pg-disc-stat-l">ispita ENJ viša</span></div>
    <div class="pg-disc-stat"><span class="pg-disc-stat-n">100%</span><span class="pg-disc-stat-l">feedback</span></div>
    <div class="pg-disc-stat"><span class="pg-disc-stat-n">9,99€</span><span class="pg-disc-stat-l">/mjesec</span></div>
  </div>
  <button class="pg-disc-cta" onclick="openDiscereModal()">Pokreni simulator &#8594;</button>
</div>

<div class="nav-row">
      <span class="nav-btn" onclick="switchTab(1)">← Razumjeti</span>
      <button class="nav-btn primary" onclick="navigateChapter(2)">Poglavlje 02: Gramatika →</button>
    </div>

  </div><!-- /l2 -->

</div><!-- /content-wrap -->
</main>
</div><!-- /shell -->

<script>
const PAGE_KEY = 'maturiraj_en_visa_p01';

/* ─── LOCALSTORAGE PROGRESS ─────────────────────── */
function saveProgress(tabIdx){
  try{
    const d = JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');
    d['tab_'+tabIdx] = true;
    localStorage.setItem(PAGE_KEY, JSON.stringify(d));
  }catch(e){}
}

/* ─── TAB SWITCHING + KEYBOARD NAV ──────────────── */
function switchTab(i){
  const tabs=document.querySelectorAll('.tab');
  const layers=document.querySelectorAll('.layer');
  tabs.forEach((t,j)=>{
    t.classList.toggle('active',j===i);
    t.setAttribute('aria-selected',j===i?'true':'false');
    t.setAttribute('tabindex',j===i?'0':'-1');
  });
  layers.forEach((l,j)=>l.classList.toggle('active',j===i));
  document.querySelectorAll('.tab-prog-item').forEach((t,j)=>{
    t.classList.toggle('active',j===i);
    if(j<i) t.classList.add('done'); else t.classList.remove('done');
  });
  if(i>0){
    tabs[i-1].classList.add('done-tab');
    saveProgress(i-1);
  }
  // trigger bar chart animation when tab 1 opens
  if(i===1) animateBars();
  window.scrollTo({top:0,behavior:'smooth'});
}

function tabKey(e,i){
  const tabs=document.querySelectorAll('.tab');
  if(e.key==='Enter'||e.key===' '){e.preventDefault();switchTab(i);tabs[i].focus();}
  else if(e.key==='ArrowRight'){e.preventDefault();const n=Math.min(i+1,tabs.length-1);switchTab(n);tabs[n].focus();}
  else if(e.key==='ArrowLeft'){e.preventDefault();const n=Math.max(i-1,0);switchTab(n);tabs[n].focus();}
  else if(e.key==='Home'){e.preventDefault();switchTab(0);tabs[0].focus();}
  else if(e.key==='End'){e.preventDefault();const last=tabs.length-1;switchTab(last);tabs[last].focus();}
}

/* ─── REVEAL CARDS ─────────────────────────────── */
function toggleReveal(el){
  el.classList.toggle('open');
  el.setAttribute('aria-expanded', el.classList.contains('open'));
}
document.querySelectorAll('.reveal-card').forEach(c=>{
  c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleReveal(c);}});
});

/* ─── QUIZ ANSWERS ─────────────────────────────── */
function answer(opt, qId, result){
  const block = document.getElementById(qId);
  if(block.dataset.answered) return;
  block.dataset.answered = '1';
  block.querySelectorAll('.q-opt').forEach(o=>o.classList.add('disabled'));
  opt.classList.add(result==='correct'?'correct':'wrong');
  if(result==='wrong'){
    block.querySelectorAll('.q-opt').forEach(o=>{
      if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes("'correct'")) o.classList.add('correct');
    });
  }
  const expl = document.getElementById('qe'+qId.replace('q',''));
  if(expl){ expl.classList.add('show'); expl.scrollIntoView({behavior:'smooth',block:'nearest'}); }
}

/* ─── SPEED DRILL ─────────────────────────────── */
const drillData = [
  {q:"Koji tip pitanja u Reading zadatku testira implicitnu poruku?", opts:["Detail question","Vocabulary question","Inference question","True/False"], correct:2},
  {q:"Esej na višoj razini treba imati koliko odlomaka minimalno?", opts:["Jedan dugačak odlomak","Tri — uvod, body, zaključak","Dva — uvod i zaključak","Pet odlomaka"], correct:1},
  {q:"Koji signal word u Listeningu najčešće najavljuje PROMJENU mišljenja?", opts:["furthermore","therefore","actually","similarly"], correct:2},
  {q:"Što znači 'Not Given' u True/False/Not Given zadatku?", opts:["Tekst kaže suprotno","Tekst ne spominje tu informaciju","Autor ne zna odgovor","Pitanje je neispravno"], correct:1},
  {q:"Koji kriterij pisanja se odnosi na logički slijed i connecting words?", opts:["Task Achievement","Grammar Accuracy","Vocabulary","Coherence & Cohesion"], correct:3}
];

let drillIdx=0, drillScore=0;

function buildDots(){
  const d=document.getElementById('drillDots'); d.innerHTML='';
  drillData.forEach((_,i)=>{
    const s=document.createElement('div');
    s.className='sd-dot'+(i===drillIdx?' cur':'');
    d.appendChild(s);
  });
}

function renderDrillQ(){
  const d=drillData[drillIdx];
  const el=document.getElementById('drillQ');
  const letters=['A','B','C','D'];
  el.innerHTML=\`
    <div class="sd-q">
      <div class="sd-sent">\${d.q}</div>
      <div class="sd-btns">
        \${d.opts.map((o,i)=>\`<button class="sd-btn opt-\${['a','b','c','d'][i]}" onclick="pickDrill(this,\${i})">\${letters[i]}. \${o}</button>\`).join('')}
      </div>
      <div class="sd-fb" id="dfb"></div>
    </div>\`;
  buildDots();
}

function pickDrill(btn,idx){
  const d=drillData[drillIdx];
  const btns=document.querySelectorAll('#drillQ .sd-btn');
  btns.forEach(b=>b.classList.add('picked','disabled'));
  const fb=document.getElementById('dfb');
  if(idx===d.correct){
    btn.classList.add('correct-pick');
    drillScore++;
    fb.className='sd-fb show ok'; fb.textContent='✓ Točno!';
  } else {
    btn.classList.add('wrong-pick');
    btns[d.correct].classList.add('reveal-correct');
    fb.className='sd-fb show no'; fb.textContent='✗ Netočno. Provjeri objašnjenje gore.';
  }
  const dots=document.querySelectorAll('#drillDots .sd-dot');
  if(dots[drillIdx]) dots[drillIdx].className='sd-dot '+(idx===d.correct?'ok':'no');
  setTimeout(()=>{
    drillIdx++;
    if(drillIdx<drillData.length){ renderDrillQ(); }
    else { showDrillScore(); }
  }, 1400);
}

function showDrillScore(){
  document.getElementById('drillQ').innerHTML='';
  const sc=document.getElementById('drillScore');
  sc.classList.add('show');
  document.getElementById('drillNum').textContent=drillScore+'/'+drillData.length;
  buildDots();
  saveProgress(2);
  // persist drill result
  try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.drillDone=true;d.drillScore=drillScore;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
}

function resetDrill(){
  drillIdx=0; drillScore=0;
  document.getElementById('drillScore').classList.remove('show');
  renderDrillQ();
}

renderDrillQ();

/* ─── BAR CHART ANIMATION ─────────────────────── */
let barsAnimated=false;
function animateBars(){
  if(barsAnimated) return;
  document.querySelectorAll('.bar-fill[data-w]').forEach(bar=>{
    bar.style.width=bar.dataset.w;
  });
  barsAnimated=true;
}

/* ─── TIMER SIMULATOR ─────────────────────────── */
function updateTimer(){
  const rd=+document.getElementById('slRd').value;
  const wr=+document.getElementById('slWr').value;
  const li=+document.getElementById('slLi').value;
  const total=rd+wr+li;
  document.getElementById('valRd').textContent=rd+' min';
  document.getElementById('valWr').textContent=wr+' min';
  document.getElementById('valLi').textContent=li+' min';
  // update slider track fill
  ['Rd','Wr','Li'].forEach(k=>{
    const el=document.getElementById('sl'+k);
    const min=+el.min, max=+el.max, val=+el.value;
    const pct=((val-min)/(max-min)*100).toFixed(1)+'%';
    el.style.setProperty('--pct',pct);
  });
  const numEl=document.getElementById('timerTotal');
  numEl.textContent=total+' / 120 min';
  numEl.className='tsim-total-num '+(total===120?'ok':total<110?'warn':'over');
  const fb=document.getElementById('timerFb');
  let msg='';
  if(total<100){
    msg=\`<span class="warn">⚠ Ostaje ti \${120-total} minuta neiskorištenih.</span> Razmisli — možeš li više vremena dati writingu ili readingu? Ne ostavljaj prazan prostor.\`;
  } else if(total>125){
    msg=\`<span class="bad">✗ Prekoračuješ za \${total-120} minuta.</span> Nešto moraš skratiti. Najčešća greška: previše vremena na reading → premalo za esej.\`;
  } else if(wr<35){
    msg=\`<span class="warn">⚠ Writing ima samo \${wr} minuta.</span> Esej od 200–250 riječi zahtijeva planiranje + pisanje + provjeru. Manje od 35 minuta za writing je rizično — tu su najveći bodovi.\`;
  } else if(rd>55){
    msg=\`<span class="warn">⚠ Reading ima \${rd} minuta</span> — to je previše. Nema smisla trošiti više od 50 minuta na reading kad writing nosi više bodova. Prerasporedi.\`;
  } else if(total===120 && wr>=40 && rd>=40 && li>=20){
    msg=\`<span class="ok">✓ Odličan raspored!</span> Writing \${wr} min, Reading \${rd} min, Listening \${li} min — ovo dobro pokriva sve cjeline uz prikladnu težinu.\`;
  } else {
    msg=\`<span class="ok">✓ Prihvatljiv raspored</span> (\${total}/120 min). Provjeri još: esej treba minimalno 40 minuta, reading može ići brže s dobrom strategijom.\`;
  }
  fb.innerHTML=msg;
}
updateTimer();

/* ─── CHECKPOINT GATE ─────────────────────────── */
let cgAnswered=false;
function cgAnswer(opt, isCorrect){
  if(cgAnswered) return;
  cgAnswered=true;
  document.querySelectorAll('.cg-opt').forEach(o=>o.classList.add('cg-disabled'));
  const fb=document.getElementById('cgFb');
  const btn=document.getElementById('cgBtn');
  if(isCorrect){
    opt.classList.add('cg-correct');
    fb.className='cg-feedback show pass';
    fb.innerHTML='✓ Točno! Not Given = tekst uopće <b>ne navodi</b> tu informaciju. False = tekst kaže <b>suprotno</b>. Ovo je jedna od najčešćih zbrki na ispitu.';
    btn.classList.add('show');
    try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.cgPassed=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
  } else {
    opt.classList.add('cg-wrong');
    document.querySelectorAll('.cg-opt').forEach(o=>{
      if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes('true')) o.classList.add('cg-correct');
    });
    fb.className='cg-feedback show fail';
    fb.innerHTML='✗ Netočno. Not Given nije isto što i "nisam siguran". Not Given znači da tekst <b>uopće ne spominje</b> tu informaciju — ni potvrdno, ni negativno. Pročitaj poglavlje 17 — Reading strategije.';
    setTimeout(()=>{cgAnswered=false; document.querySelectorAll('.cg-opt').forEach(o=>o.classList.remove('cg-disabled','cg-wrong','cg-correct')); fb.className='cg-feedback'; btn.classList.remove('show');},2800);
  }
}

function unlockNext(){
  switchTab(1);
}

/* ─── STICKY IN-TAB PROGRESS ─────────────────────── */
const tipSections=['sec-mjeri','sec-bodovi','sec-writing','sec-reading','sec-listening','sec-signals','sec-timer','sec-flowchart','sec-recall','sec-essay','sec-calc'];

function tipScroll(id){
  const el=document.getElementById(id);
  if(!el) return;
  const top=el.getBoundingClientRect().top+window.scrollY-60;
  window.scrollTo({top,behavior:'smooth'});
}

// Mark tip items as done as user scrolls past sections
const tipObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){const idx=tipSections.indexOf(e.target.id);for(let j=0;j<=idx;j++){const p=document.getElementById('tip-'+j);if(p)p.classList.add('done');}}});
},{rootMargin:'-20% 0px -70% 0px'});
tipSections.forEach(id=>{const el=document.getElementById(id);if(el)tipObs.observe(el);});

/* ─── SCORE CALCULATOR + LOCALSTORAGE ─────────────── */
const grades=[
  {min:90,label:'Odličan (5)',color:'var(--green)'},
  {min:75,label:'Vrlo dobar (4)',color:'var(--blue)'},
  {min:55,label:'Dobar (3)',color:'var(--amber)'},
  {min:40,label:'Dovoljan (2)',color:'var(--gold)'},
  {min:0, label:'Nedovoljan (1)',color:'var(--red)'}
];

function updateCalc(save){
  const rd=+document.getElementById('cRd').value;
  const wr=+document.getElementById('cWr').value;
  const li=+document.getElementById('cLi').value;
  document.getElementById('cRdV').textContent=rd;
  document.getElementById('cWrV').textContent=wr;
  document.getElementById('cLiV').textContent=li;
  const total=rd+wr+li;
  const pct=Math.round(total);
  const g=grades.find(g=>pct>=g.min)||grades[grades.length-1];
  document.getElementById('calcGrade').textContent=pct+'%';
  document.getElementById('calcGrade').style.color=g.color;
  document.getElementById('calcLabel').textContent=g.label+' · '+total+'/100 bodova';
  const rdMax=35,wrMax=40,liMax=25;
  const rdPct=Math.round(rd/rdMax*100),wrPct=Math.round(wr/wrMax*100),liPct=Math.round(li/liMax*100);
  const tips=[];
  const weakest=[['Reading',rdPct,'Poglavlje 17 — Reading strategije: inference i parafraziranje su tvoji prioriteti.'],
                  ['Writing',wrPct,'Poglavlje 13–16 — Writing modul: esej struktura + linking words + model essay.'],
                  ['Listening',liPct,'Poglavlje 18 — Listening strategije: čitanje pitanja unaprijed i prepoznavanje distractora.']];
  weakest.sort((a,b)=>a[1]-b[1]);
  weakest.slice(0,2).forEach(([name,pct,tip])=>{
    const icon=pct<50?'🔴':pct<70?'🟡':'🟢';
    tips.push(\`<div class="calc-tip"><div class="calc-tip-icon">\${icon}</div><div><b>\${name} — \${pct}% potencijala iskorišteno</b><br>\${tip}</div></div>\`);
  });
  if(pct>=80) tips.push(\`<div class="calc-tip"><div class="calc-tip-icon">⭐</div><div><b>Odličan si!</b><br>Na ovoj razini fokusiraj se na nijanse: vocabulary upgrade, sofisticiraniji linking, napredne gramatičke strukture u eseju.</div></div>\`);
  document.getElementById('calcTips').innerHTML=tips.join('');
  // persist slider values
  if(save!==false){try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.calc={rd,wr,li};localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}}
}
updateCalc();

/* ─── MOBILE DRAWER ─────────────────────────────── */
function openMobDrawer(){document.getElementById('mobDrawer').classList.add('open');document.body.style.overflow='hidden';}
function closeMobDrawer(){document.getElementById('mobDrawer').classList.remove('open');document.body.style.overflow='';}
document.getElementById('mobDrawer').addEventListener('click',e=>{if(e.target===e.currentTarget)closeMobDrawer();});

/* ─── BACK TO TOP ────────────────────────────────── */
window.addEventListener('scroll',()=>{
  const btn=document.getElementById('backTop');
  if(btn) btn.classList.toggle('show',window.scrollY>400);
},{passive:true});

/* ─── INIT ─────────────────────────────────────── */
function loadProgress(){
  try{
    const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');
    document.querySelectorAll('.tab').forEach((t,i)=>{
      if(d['tab_'+i]) t.classList.add('done-tab');
    });
    if(d.cgPassed){
      const cg=document.getElementById('cgBlock');
      if(cg) cg.style.display='none';
    }
    // restore calculator sliders
    if(d.calc){
      const {rd,wr,li}=d.calc;
      const r=document.getElementById('cRd'),w=document.getElementById('cWr'),l=document.getElementById('cLi');
      if(r&&w&&l){r.value=rd;w.value=wr;l.value=li;updateCalc(false);}
    }
    // restore completed drill state
    if(d.drillDone){
      drillScore=d.drillScore||0;
      drillIdx=drillData.length;
      const dots=document.getElementById('drillDots');
      if(dots){
        dots.innerHTML='';
        drillData.forEach(()=>{const s=document.createElement('div');s.className='sd-dot ok';dots.appendChild(s);});
      }
      document.getElementById('drillQ').innerHTML='';
      const sc=document.getElementById('drillScore');
      if(sc){sc.classList.add('show');document.getElementById('drillNum').textContent=drillScore+'/'+drillData.length;}
    }
  }catch(e){}
}
loadProgress();

/* ─── DISCERE BRIDGE ──────────────────────── */
function openDiscere(){ openDiscereModal(); }


/* ═══ PREMIUM GATES JS ═══ */
window.__pwTier = 'pro';
function openPaywall(feature) {
  var sub = document.getElementById('pw-sub');
  if (sub) {
    var msgs = {
      'ai': 'AI profesor pomaže s gramatikom, strukturom eseja i strategijom ispita — personalizirano za tebe.',
      'default': 'Pristupi AI profesoru, Discere simulatoru i personaliziranom planu učenja.'
    };
    sub.textContent = msgs[feature] || msgs['default'];
  }
  var m = document.getElementById('paywall-modal');
  if (m) m.classList.add('show');
}
function closePaywall() {
  var m = document.getElementById('paywall-modal');
  if (m) m.classList.remove('show');
}
function openDiscereModal() {
  var m = document.getElementById('discere-modal');
  if (m) m.classList.add('show');
}
function closeDiscereModal() {
  var m = document.getElementById('discere-modal');
  if (m) m.classList.remove('show');
}
function selectTier(t) {
  window.__pwTier = t;
  document.querySelectorAll('.paywall-tier').forEach(function(el) {
    if (el.textContent.toLowerCase().indexOf(t) !== -1) el.classList.add('pro');
    else el.classList.remove('pro');
  });
  var n = document.getElementById('pw-tier-name');
  if (n) n.textContent = t === 'pro' ? 'Pro' : 'Standard';
}
function goCheckout() {
  closePaywall();
  closeDiscereModal();
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({type: 'maturiraj:navigateUrl', url: '/pro'}, '*');
  }
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closePaywall(); closeDiscereModal(); }
});

function navigateChapter(n){
  if(window.parent && window.parent !== window){
    window.parent.postMessage({type:'maturiraj:navigateChapter',chapter:n},'*');
  }

function backToList(){
  if(window.parent && window.parent !== window){
    window.parent.postMessage({type:'maturiraj:backToList'},'*');
  }
}
}
</script>

<div class="paywall-modal" id="paywall-modal" onclick="if(event.target===this)closePaywall()" role="dialog" aria-modal="true" aria-labelledby="pw-h">
  <div class="paywall-card">
    <button class="paywall-close" onclick="closePaywall()" aria-label="Zatvori">&#215;</button>
    <div class="paywall-h" id="pw-h">&#128142; Otključaj <span style="background:linear-gradient(135deg,#C9A227,#CF142B);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Pro</span></div>
    <div class="paywall-sub" id="pw-sub">Pristupi AI profesoru, Discere simulatoru i personaliziranom planu učenja. Otkazivanje bilo kad.</div>
    <div class="paywall-tiers">
      <div class="paywall-tier" onclick="selectTier('standard')">
        <div class="paywall-tier-lbl">Standard</div>
        <div class="paywall-tier-name">Za samostalno učenje</div>
        <div class="paywall-tier-price">9,99&#8364;<span class="per"> /mj</span></div>
        <div class="paywall-tier-feat">&#8226; Svi Discere simulatori<br>&#8226; Sva gradiva u skriptama<br>&#8226; AI profesor: 30 poruka/dan</div>
      </div>
      <div class="paywall-tier pro" onclick="selectTier('pro')">
        <div class="paywall-tier-lbl">Pro</div>
        <div class="paywall-tier-name">Za maksimalan uspjeh</div>
        <div class="paywall-tier-price">19,99&#8364;<span class="per"> /mj</span></div>
        <div class="paywall-tier-feat">&#8226; Sve iz Standard<br>&#8226; AI: 200 poruka/dan<br>&#8226; Prijemni priprema<br>&#8226; AI plan učenja</div>
      </div>
    </div>
    <button class="paywall-cta" onclick="goCheckout()">Nastavi s <span id="pw-tier-name">Pro</span> &#8594;</button>
    <div class="paywall-note"><strong>7 dana besplatno</strong> &#183; otkaži bilo kada &#183; bez obveze</div>
  </div>
</div>
<div class="paywall-modal" id="discere-modal" onclick="if(event.target===this)closeDiscereModal()" role="dialog" aria-modal="true">
  <div class="paywall-card">
    <button class="paywall-close" onclick="closeDiscereModal()">&#215;</button>
    <div class="paywall-h">&#127919; Discere &#8212; <span style="background:linear-gradient(135deg,#4CAF7D,#34D399);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Simulator</span></div>
    <div class="paywall-sub">Simuliraj pravi ENJ viša ispit. Dostupno uz Standard plan.</div>
    <div class="paywall-tiers">
      <div class="paywall-tier pro"><div class="paywall-tier-lbl">Standard</div><div class="paywall-tier-price">9,99&#8364;<span class="per"> /mj</span></div></div>
      <div class="paywall-tier"><div class="paywall-tier-lbl">Pro</div><div class="paywall-tier-price">19,99&#8364;<span class="per"> /mj</span></div></div>
    </div>
    <button class="paywall-cta" style="background:linear-gradient(135deg,#4CAF7D,#34D399)" onclick="goCheckout()">Otključaj Discere &#8594;</button>
    <div class="paywall-note"><strong>7 dana besplatno</strong> &#183; otkaži bilo kada</div>
  </div>
</div>
</body>
</html>
`;

export default { meta, html };