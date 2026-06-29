// Maturiraj.hr — Engleski viša razina
// Poglavlje 02: Kako koristitiovu skriptu
// Auto-generirano — ne editirati ručno

export const meta = {
  id: 2,
  slug: "poglavlje02",
  title: "Kako koristitiovu skriptu",
  subtitle: "Redoslijed u\u010denja \u00b7 mini drillovi \u00b7 aktivno ponavljanje \u00b7 navike koje daju rezultate",
  blok: 1,
  blokNaziv: "Uvod i orijentacija",
  prev: 1,
  next: 3,
};

export const html = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maturiraj.hr — Engleski viša razina · Poglavlje 2</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
<style>

/* ─── BRITISH DESIGN TOKENS ──────────────────────────────────────── */
:root {
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
  --union-red:     #CF142B;
  --union-red-dim: rgba(207,20,43,0.12);
  --union-red-bd:  rgba(207,20,43,0.28);
  --gold:          #C9A227;
  --gold-dim:      rgba(201,162,39,0.12);
  --gold-bd:       rgba(201,162,39,0.28);
  --cream:         #B8B9E2;
  --cream-dim:     rgba(184,185,226,0.10);
  --cream-bd:      rgba(184,185,226,0.22);
  --blue:          #4F7BE8;
  --blue-dim:      rgba(79,123,232,0.12);
  --blue-border:   rgba(79,123,232,0.28);
  --blue-glow:     rgba(79,123,232,0.05);
  --brit-green:    #4CAF7D;
  --brit-green-dim:rgba(76,175,125,0.12);
  --brit-green-bd: rgba(76,175,125,0.28);
  --amber:         #E8A838;
  --amber-dim:     rgba(232,168,56,0.12);
  --amber-border:  rgba(232,168,56,0.28);
  --red:           #E86060;
  --red-dim:       rgba(232,96,96,0.12);
  --red-border:    rgba(232,96,96,0.28);
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

/* ── UNION JACK BAR ── */
.union-bar{height:3px;background:linear-gradient(90deg,var(--union-red) 0%,var(--union-red) 30%,#fff 30%,#fff 34%,var(--blue) 34%,var(--blue) 66%,#fff 66%,#fff 70%,var(--union-red) 70%,var(--union-red) 100%);position:fixed;top:0;left:0;right:0;z-index:999}

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
.hero::after{content:'02';position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:112px;font-weight:900;font-family:var(--serif);color:rgba(255,255,255,.025);pointer-events:none;user-select:none;line-height:1}
.hero-eyebrow{font-family:var(--mono);font-size:10px;color:var(--blue);letter-spacing:2px;margin-bottom:12px;text-transform:uppercase}
.hero-title{font-size:32px;font-weight:900;font-family:var(--serif);color:var(--t1);letter-spacing:-0.5px;line-height:1.1;margin-bottom:10px}
.hero-title span{background:linear-gradient(135deg,var(--blue),var(--cream));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.hb-level{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.hb-chapter{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.hero-sub{font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:18px}
.progress-track{height:3px;background:var(--bd-mid);border-radius:2px;overflow:hidden;width:100%;max-width:420px}
.progress-bar{height:100%;background:linear-gradient(90deg,var(--union-red),var(--blue));border-radius:2px}

/* ── TAGS / PILLS ── */
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
.stat-icon.cream {background:var(--cream-dim); color:var(--cream)}
.stat-name{font-size:13px;font-weight:600;color:var(--t1);margin-bottom:5px;line-height:1.3}
.stat-desc{font-size:12px;color:var(--t2);line-height:1.5;font-family:var(--mono)}

/* ── PROSE ── */
.prose{font-size:14.5px;line-height:1.85;color:rgba(238,240,248,.82);margin-bottom:16px}
.prose b,.prose strong{color:var(--t1);font-weight:600}
.prose em{color:var(--blue);font-style:normal}

/* ── PANIC BOX ── */
.panic-box{background:linear-gradient(135deg,rgba(79,123,232,.05),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:24px 0}
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
.callout-green {background:var(--brit-green-dim);border-color:var(--brit-green-bd)}
.callout-icon{font-size:15px;flex-shrink:0;margin-top:1px}
.callout-body{flex:1}
.callout-title{font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:5px}
.callout-warn  .callout-title{color:var(--red)}
.callout-tip   .callout-title{color:var(--amber)}
.callout-info  .callout-title{color:var(--blue)}
.callout-royal .callout-title{color:var(--cream)}
.callout-green .callout-title{color:var(--brit-green)}
.callout-text{font-size:13px;line-height:1.7;color:var(--t2)}

/* ── REVEAL CARDS ── */
.reveal-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:8px;cursor:pointer;transition:border-color .15s}
.reveal-card:hover{border-color:var(--bd-light)}
.reveal-q{display:flex;align-items:center;justify-content:space-between;padding:13px 16px;font-size:13.5px;font-weight:600;color:var(--t1);gap:12px;user-select:none}
.reveal-q .rq-icon{font-size:16px;flex-shrink:0}
.reveal-arrow{font-size:11px;color:var(--t3);transition:transform .2s;flex-shrink:0}
.reveal-card.open .reveal-arrow{transform:rotate(180deg)}
.reveal-ans{max-height:0;overflow:hidden;padding:0 16px;font-size:13px;color:var(--t2);line-height:1.7;background:var(--bg-surface);font-family:var(--mono);transition:max-height .28s ease,padding .28s ease;border-top:1px solid transparent}
.reveal-card.open .reveal-ans{max-height:500px;padding:14px 16px;border-top-color:var(--bd)}
.reveal-ans b,.reveal-ans strong{color:var(--t1)}
.reveal-ans .ok{color:var(--green)}
.reveal-ans .bad{color:var(--red)}
.reveal-ans .note{color:var(--blue)}

/* ── CONCEPTS TABLE ── */
.concepts{border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px}
.concept-row{display:grid;grid-template-columns:minmax(180px,38%) 1fr;border-bottom:1px solid var(--bd);transition:background .1s}
.concept-row:last-child{border-bottom:none}
.concept-row:nth-child(even){background:rgba(255,255,255,.015)}
.concept-row:hover{background:var(--bg-hover)}
.ck{padding:11px 14px;font-family:var(--mono);font-size:12px;font-weight:500;border-right:1px solid var(--bd);position:relative;padding-left:18px}
.ck::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:0 2px 2px 0}
.ck.blue{color:var(--blue)}.ck.blue::before{background:var(--blue)}
.ck.red{color:var(--union-red)}.ck.red::before{background:var(--union-red)}
.ck.gold{color:var(--gold)}.ck.gold::before{background:var(--gold)}
.ck.green{color:var(--brit-green)}.ck.green::before{background:var(--brit-green)}
.ck.amber{color:var(--amber)}.ck.amber::before{background:var(--amber)}
.ck.cream{color:var(--cream)}.ck.cream::before{background:var(--cream)}
.cv{padding:11px 16px;font-size:13px;color:var(--t2);line-height:1.6}
.cv code{font-family:var(--mono);font-size:11.5px;background:var(--bg-input);padding:1px 6px;border-radius:var(--r1);color:var(--blue)}
.cv b{color:var(--t1)}

/* ── TIMELINE ── */
.timeline{margin:20px 0 28px;position:relative;padding-left:28px}
.timeline::before{content:'';position:absolute;left:10px;top:8px;bottom:8px;width:2px;background:linear-gradient(180deg,var(--blue),var(--union-red),var(--gold));border-radius:2px;opacity:.4}
.tl-item{position:relative;margin-bottom:20px}
.tl-item:last-child{margin-bottom:0}
.tl-dot{position:absolute;left:-22px;top:4px;width:12px;height:12px;border-radius:50%;border:2px solid var(--bg-base);flex-shrink:0}
.tl-dot.blue{background:var(--blue)}
.tl-dot.red{background:var(--union-red)}
.tl-dot.gold{background:var(--gold)}
.tl-dot.green{background:var(--brit-green)}
.tl-dot.amber{background:var(--amber)}
.tl-dot.cream{background:var(--cream)}
.tl-head{display:flex;align-items:center;gap:10px;margin-bottom:6px;flex-wrap:wrap}
.tl-label{font-family:var(--mono);font-size:10px;font-weight:700;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.tl-label.blue{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.tl-label.red{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.tl-label.gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.tl-label.green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.tl-label.amber{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.tl-label.cream{background:var(--cream-dim);color:var(--cream);border-color:var(--cream-bd)}
.tl-title{font-size:14px;font-weight:600;color:var(--t1)}
.tl-body{font-size:13px;color:var(--t2);line-height:1.65}
.tl-body b{color:var(--t1)}

/* ── LEARNING SCHEDULE GRID ── */
.schedule-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin:16px 0 24px}
.sched-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;transition:border-color .15s,transform .15s}
.sched-card:hover{border-color:var(--bd-light);transform:translateY(-1px)}
.sched-hd{padding:10px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--bd)}
.sched-hd.phase-1{background:var(--blue-dim);color:var(--blue);border-bottom-color:var(--blue-border)}
.sched-hd.phase-2{background:var(--gold-dim);color:var(--gold);border-bottom-color:var(--gold-bd)}
.sched-hd.phase-3{background:var(--union-red-dim);color:var(--union-red);border-bottom-color:var(--union-red-bd)}
.sched-hd.phase-4{background:var(--brit-green-dim);color:var(--brit-green);border-bottom-color:var(--brit-green-bd)}
.sched-hd.phase-5{background:var(--amber-dim);color:var(--amber);border-bottom-color:var(--amber-border)}
.sched-hd.phase-6{background:var(--cream-dim);color:var(--cream);border-bottom-color:var(--cream-bd)}
.sched-body{padding:12px 14px}
.sched-chapter{font-size:12.5px;color:var(--t2);line-height:1.8;font-family:var(--mono)}
.sched-chapter b{color:var(--t1)}

/* ── METHOD CARDS ── */
.method-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0 24px}
.method-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px;transition:border-color .15s}
.method-card:hover{border-color:var(--bd-light)}
.method-icon{font-size:22px;margin-bottom:10px;display:block}
.method-title{font-size:14px;font-weight:700;color:var(--t1);margin-bottom:6px;font-family:var(--serif)}
.method-desc{font-size:12.5px;color:var(--t2);line-height:1.65}
.method-desc b{color:var(--t1)}
@media(max-width:560px){.method-grid{grid-template-columns:1fr}}

/* ── INTERACTIVE HABIT TRACKER ── */
.habit-tracker{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.ht-hd{background:linear-gradient(90deg,var(--blue-dim),transparent);border-bottom:1px solid var(--bd);padding:14px 20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.ht-title{font-family:var(--serif);font-size:15px;font-weight:700;color:var(--t1)}
.ht-streak{font-family:var(--mono);font-size:11px;color:var(--amber);display:flex;align-items:center;gap:6px}
.ht-body{padding:18px 20px}
.ht-days{display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap}
.ht-day{width:32px;height:32px;border-radius:var(--r2);border:1px solid var(--bd-mid);background:var(--bg-input);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:9px;color:var(--t3);cursor:pointer;transition:all .15s;user-select:none;flex-direction:column;gap:1px}
.ht-day:hover{border-color:var(--blue-border);color:var(--blue)}
.ht-day.done{background:var(--green-dim);border-color:var(--green-border);color:var(--green)}
.ht-day.today{border-color:var(--blue);color:var(--blue);font-weight:700}
.ht-day-num{font-size:10px;font-weight:600}
.ht-day-lbl{font-size:7px;opacity:.6}
.ht-legend{font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:14px}
.ht-habits{display:flex;flex-direction:column;gap:8px}
.ht-habit{display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--bg-surface);border:1px solid var(--bd);border-radius:var(--r2);cursor:pointer;transition:background .15s,border-color .15s,transform .12s;user-select:none}
.ht-habit:hover{border-color:var(--bd-mid);background:var(--bg-hover)}
.ht-habit.checked{background:var(--green-dim);border-color:var(--green-border)}
.ht-habit.just-checked{animation:habitPop .32s cubic-bezier(.34,1.56,.64,1)}
@keyframes habitPop{0%{transform:scale(1)}40%{transform:scale(1.025)}100%{transform:scale(1)}}
.ht-cb{width:18px;height:18px;border-radius:4px;border:1.5px solid var(--bd-mid);background:var(--bg-input);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:10px;color:transparent;transition:background .15s,border-color .15s,transform .2s}
.ht-habit.checked .ht-cb{background:var(--green);border-color:var(--green);color:#060810;transform:scale(1.1)}
.ht-habit.just-checked .ht-cb{animation:cbPop .3s cubic-bezier(.34,1.56,.64,1)}
@keyframes cbPop{0%{transform:scale(0.6)}60%{transform:scale(1.25)}100%{transform:scale(1.1)}}
.ht-habit-text{font-size:13px;color:var(--t2);line-height:1.4;flex:1;transition:color .15s}
.ht-habit.checked .ht-habit-text{color:var(--t1)}
.ht-score{text-align:center;padding:14px;background:var(--bg-surface);border-radius:var(--r2);border:1px solid var(--bd);margin-top:14px;transition:border-color .3s}
.ht-score.perfect{border-color:var(--green-border);background:var(--green-dim)}
.ht-score-num{font-family:var(--serif);font-size:36px;font-weight:900;color:var(--blue);letter-spacing:-1px;transition:color .3s}
.ht-score.perfect .ht-score-num{color:var(--green)}
.ht-score-lbl{font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:2px;letter-spacing:1px;transition:color .3s}
.ht-score.perfect .ht-score-lbl{color:var(--green)}

/* ── STREAK EXPORT BUTTON ── */
.streak-export-btn{display:flex;align-items:center;gap:7px;padding:7px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--t2);cursor:pointer;transition:all .15s;margin-top:10px;width:fit-content}
.streak-export-btn:hover{color:var(--t1);border-color:var(--bd-light);background:var(--bg-hover)}
.streak-export-btn svg{width:13px;height:13px;opacity:.6}

/* ── WEEKS CALCULATOR ── */
.weeks-calc{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:0 0 20px}
.wc-hd{background:linear-gradient(90deg,rgba(207,20,43,.08),rgba(79,123,232,.08));border-bottom:1px solid var(--bd);padding:13px 20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.wc-title{font-family:var(--serif);font-size:14px;font-weight:700;color:var(--t1)}
.wc-badge{font-family:var(--mono);font-size:10px;padding:3px 10px;border-radius:var(--r1);border:1px solid;background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.wc-body{padding:16px 20px}
.wc-row{display:flex;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap}
.wc-label{font-family:var(--mono);font-size:11px;color:var(--t2);flex-shrink:0}
.wc-input{background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:7px 12px;font-family:var(--mono);font-size:13px;color:var(--t1);width:160px;outline:none;transition:border-color .15s}
.wc-input:focus{border-color:var(--blue-border)}
.wc-result{background:var(--bg-surface);border:1px solid var(--bd);border-radius:var(--r2);padding:12px 16px;font-family:var(--mono);font-size:12.5px;color:var(--t2);line-height:1.7}
.wc-result b{color:var(--t1)}
.wc-result .phase-now{color:var(--blue);font-weight:700}
.wc-result .phase-warn{color:var(--amber);font-weight:700}
.wc-result .phase-crit{color:var(--union-red);font-weight:700}

/* ── QUIZ ── */
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
.q-opt.wrong{background:var(--red-dim);border-color:var(--red-border);color:var(--red)}
.q-opt.disabled{cursor:default;pointer-events:none}
.q-letter{width:22px;height:22px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3)}
.q-expl{display:none;padding:12px 18px;font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);font-family:var(--mono)}
.q-expl.show{display:block}
.expl-ok{background:var(--green-dim);border:1px solid var(--green-border);color:var(--green);padding:10px 14px;border-radius:var(--r2)}
.expl-no{background:var(--red-dim);border:1px solid var(--red-border);color:var(--red);padding:10px 14px;border-radius:var(--r2)}

/* ── CHECKPOINT ── */
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

/* ── STICKY IN-TAB PROGRESS ── */
.tip-bar{position:sticky;top:3px;z-index:90;background:var(--bg-surface);border-bottom:1px solid var(--bd);padding:8px 0;margin:-4px 0 24px;display:flex;gap:0;overflow-x:auto;scrollbar-width:none}
.tip-bar::-webkit-scrollbar{display:none}
.tip-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10.5px;color:var(--t3);white-space:nowrap;padding:4px 14px;cursor:pointer;transition:color .15s;flex-shrink:0}
.tip-item:hover{color:var(--t2)}
.tip-item.done{color:var(--green)}
.tip-item.done .tip-dot{background:var(--green)}
.tip-dot{width:6px;height:6px;border-radius:50%;background:var(--t3);flex-shrink:0;transition:background .15s}
.tip-sep{color:var(--t3);opacity:.25;flex-shrink:0;align-self:center;font-size:11px}

/* ── DISCERE BOX ── */
.discere-box{background:linear-gradient(135deg,rgba(79,123,232,.08),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:28px 0 0}
.discere-hd{background:var(--blue-dim);border-bottom:1px solid var(--blue-border);padding:11px 20px;display:flex;align-items:center;gap:10px}
.discere-hd-icon{font-size:16px}
.discere-hd-text{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase}
.discere-body{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.discere-desc{font-size:13px;color:var(--t2);line-height:1.6;flex:1;min-width:180px}
.discere-desc b{color:var(--t1)}
.discere-btn{font-family:var(--mono);font-size:12px;font-weight:700;padding:10px 20px;border-radius:var(--r2);background:var(--blue);color:#fff;border:none;cursor:pointer;white-space:nowrap;transition:opacity .15s;text-decoration:none;display:inline-block}
.discere-btn:hover{opacity:.85}

/* ── NAV ROW ── */
.nav-row{display:flex;justify-content:space-between;align-items:center;padding:24px 0 0;border-top:1px solid var(--bd);margin-top:28px;flex-wrap:wrap;gap:10px}
.nav-btn{font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t2);padding:9px 18px;border-radius:var(--r2);border:1px solid var(--bd-mid);cursor:pointer;transition:all .15s;background:var(--bg-card);text-decoration:none;display:inline-block}
.nav-btn:hover{color:var(--t1);border-color:var(--bd-light)}
.nav-btn.primary{background:var(--blue);color:#fff;border-color:var(--blue)}
.nav-btn.primary:hover{opacity:.88}

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
@media(max-width:680px){.method-grid{grid-template-columns:1fr}.schedule-grid{grid-template-columns:1fr 1fr}}
@media(max-width:460px){.schedule-grid{grid-template-columns:1fr}.content-wrap{padding:24px 20px 80px}}
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
<div class="union-bar"></div>

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
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(1)" style="cursor:pointer"><span class="sb-dot"></span> 01 · Kako izgleda Engleski A</div>
  <div class="sb-item active" onclick="closeMobDrawer();navigateChapter(2)" style="cursor:pointer"><span class="sb-dot"></span> 02 · Kako koristiti skriptu</div>
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
  <div class="sb-item done-ch" onclick="navigateChapter(1)" style="cursor:pointer"><span class="sb-dot"></span>01 · Kako izgleda Engleski A</div>
  <div class="sb-item active" onclick="navigateChapter(2)" style="cursor:pointer"><span class="sb-dot"></span>02 · Kako koristiti skriptu</div>
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
<div class="sb-footer">02 / 20 · kako koristiti skriptu<br>maturiraj.hr</div>
</nav>




<!-- BACK TO TOP -->
<button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh">↑</button>

<!-- MAIN -->
<main class="main">
<div class="content-wrap">

  <div class="breadcrumb">
    <span style="cursor:pointer" onclick="backToList()">← chapters</span>
    <span class="bc-sep">/</span>
    <span>blok-1</span>
    <span class="bc-sep">/</span>
    <span class="bc-active">kako-koristiti-skriptu</span>
  </div>

  <div class="tabs-wrap" role="tablist" aria-label="Navigacija tabovima">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" onkeydown="tabKey(event,0)" tabindex="0">⚡ 2 min<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" onkeydown="tabKey(event,1)" tabindex="-1">📖 Razumjeti<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" onkeydown="tabKey(event,2)" tabindex="-1">✍️ Provjeri se<span class="tab-check">✓</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Pregled</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Razumjeti sustav</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Provjeri se</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~20 min
    </div>
  </div>

  <!-- ══════════ LAYER 0 — 2 MIN ══════════ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 02 of 20 · blok 1 — start + plan</div>
      <h1 class="hero-title">Kako koristiti<br><span>ovu skriptu</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~2 min</span>
        <span class="hero-badge hb-level">viša razina</span>
        <span class="hero-badge hb-chapter">02 / 20</span>
      </div>
      <p class="hero-sub">Redoslijed učenja · mini drillovi · aktivno ponavljanje · navike koje daju rezultate</p>
      <div class="progress-track"><div class="progress-bar" style="width:10%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-blue">Redoslijed učenja</span>
      <span class="pill pill-gold">Mini drillovi</span>
      <span class="pill pill-green">Aktivno ponavljanje</span>
      <span class="pill pill-cream">Navike</span>
      <span class="pill pill-amber">Plan</span>
    </div>

    <div class="sec-label">// zašto je redoslijed važan</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon blue">01</div><div class="stat-name">Čitaj linearno</div><div class="stat-desc">Poglavlja su složena po ispitnoj logici — svako gradi na prethodnom. <b style="color:var(--blue)">Ne preskaći.</b></div></div>
      <div class="stat-card"><div class="stat-icon gold">02</div><div class="stat-name">Radi drillove odmah</div><div class="stat-desc">Nakon svakog poglavlja postoji mini drill. <b style="color:var(--gold)">Ne ostavljaj ih za kraj</b> — odmah primijeni što si pročitao.</div></div>
      <div class="stat-card"><div class="stat-icon green">03</div><div class="stat-name">Ponovi aktivno</div><div class="stat-desc">Nakon svakog poglavlja napiši 3 stvari koje si naučio. <b style="color:var(--brit-green)">Aktivno prisjecanje</b> — ne pasivno čitanje — jedino gradi dugoročno znanje.</div></div>
      <div class="stat-card"><div class="stat-icon amber">04</div><div class="stat-name">Povrati se</div><div class="stat-desc">Checkpoint kvizovi govore ti točno <b style="color:var(--amber)">gdje imaš rupe</b>. Vrati se na poglavlje, ne ignoriraj greške.</div></div>
    </div>

    <div class="sec-label">// 3 najčešće greške učenika s ovakvim skriptama</div>
    <div class="panic-box">
      <div class="panic-hd">⚠️ anti-patterns — nemoj ovo raditi</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num" style="background:var(--union-red)">1</div><div class="panic-text"><b>Čitaš bez drillova.</b> Pasivno čitanje daje lažan osjećaj da znaš gradivo. Tek kad pišeš ili biraš odgovor, mozak stvarno procesira. Bez drilla nema usvajanja.</div></div>
        <div class="panic-step"><div class="panic-num" style="background:var(--union-red)">2</div><div class="panic-text"><b>Preskačeš na "zanimljivo" gradivo.</b> Writing se čini daleko važnijim od articles — ali greške na articles padaju u bodovanje gramatike. Nema malog gradiva.</div></div>
        <div class="panic-step"><div class="panic-num" style="background:var(--union-red)">3</div><div class="panic-text"><b>Učiš maratonski jednom tjedno.</b> 20 minuta dnevno svaki dan daje daleko bolje rezultate od 3 sata subotom. Skripta je dizajnirana za kratke, česte sesije.</div></div>
      </div>
    </div>

    <!-- CHECKPOINT -->
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
        <div class="cg-question">Koji je optimalan ritam učenja s ovom skriptom?</div>
        <div class="cg-opts" role="group" aria-label="Odaberi odgovor">
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">A</div>3 sata subotom — maratonska sesija jednom tjedno</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">B</div>Čitati bez drillova, drillove ostaviti za kraj</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,true)" onkeydown="if(event.key==='Enter')cgAnswer(this,true)"><div class="cg-letter">C</div>20 minuta dnevno — kratke, česte sesije s drillovima odmah</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">D</div>Preskočiti na poglavlja koja izgledaju zanimljivo</div>
        </div>
        <div class="cg-feedback" id="cgFb" aria-live="polite"></div>
        <button class="cg-unlock" id="cgBtn" onclick="switchTab(1)">Nastavi na Razumjeti sustav →</button>
      </div>
    </div>

    <div class="nav-row">
      <button class="nav-btn" onclick="navigateChapter(1)">← Poglavlje 01</button>
      <span class="nav-btn primary" onclick="switchTab(1)">Razumjeti sustav →</span>
    </div>
  </div><!-- /l0 -->

  <!-- ══════════ LAYER 1 — RAZUMJETI ══════════ -->
  <div class="layer" id="l1">

    <!-- STICKY IN-TAB PROGRESS -->
    <div class="tip-bar" id="tipBar">
      <div class="tip-item" id="tip-0" onclick="tipScroll('sec-redoslijed')"><span class="tip-dot"></span>Redoslijed</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-1" onclick="tipScroll('sec-faze')"><span class="tip-dot"></span>6 faza</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-2" onclick="tipScroll('sec-ritam')"><span class="tip-dot"></span>Ritam sesije</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-3" onclick="tipScroll('sec-drill')"><span class="tip-dot"></span>Kako raditi drill</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-4" onclick="tipScroll('sec-navike')"><span class="tip-dot"></span>Navike i plan</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-5" onclick="tipScroll('sec-navike')"><span class="tip-dot"></span>Navike</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-6" onclick="tipScroll('sec-tracker')"><span class="tip-dot"></span>Habit tracker</div>
    </div>

    <div id="sec-redoslijed" class="sec-label">// zašto redoslijed poglavlja nije slučajan</div>
    <p class="prose">Ova skripta nije zbirka tema — to je <strong>sustav</strong>. Svako poglavlje pretpostavlja da si pročitao prethodno. Gramatika u Bloku 2 direktno podupire Use of English u Bloku 3. Writing u Bloku 4 zahtijeva i gramatičku preciznost i dobro razvijen vokabular — oba dolaze iz prethodnih blokova. Reading strategije u Bloku 5 primjenjuju sve što si naučio od Bloka 2 nadalje. <em>Ako preskočiš poglavlja, gradit ćeš na nestabilnim temeljima.</em></p>

    <div class="callout callout-info">
      <div class="callout-icon">🧠</div>
      <div class="callout-body">
        <div class="callout-title">Zašto kratke sesije pobjeđuju maratone</div>
        <div class="callout-text">Istraživanja o usvajanju jezika pokazuju da je <b>raspoređeno ponavljanje</b> (spaced repetition) daleko učinkovitije od masovnog učenja. 20 minuta danas + 20 minuta sutra bolje usvaja gradivo od 40 minuta u jednoj sjednici. Skripta je strukturirana u kratka poglavlja upravo zbog toga.</div>
      </div>
    </div>

    <!-- 6 PHASES TIMELINE -->
    <div id="sec-faze" class="sec-label" style="margin-top:36px">// 6 faza učenja — preporučeni redoslijed</div>
    <p style="font-size:13px;color:var(--t2);margin-bottom:20px;font-family:var(--mono)">Ovo nije školska logika "od početka do kraja" — ovo je ispitna logika. Svaka faza gradi na prethodnoj.</p>

    <div class="timeline">
      <div class="tl-item">
        <div class="tl-dot blue"></div>
        <div class="tl-head"><span class="tl-label blue">Faza 1 — Orijentacija</span></div>
        <div class="tl-title">Poglavlja 01–02 · <span style="color:var(--t3);font-size:13px;font-family:var(--mono)">upravo ste ovdje</span></div>
        <div class="tl-body" style="margin-top:6px">Razumiješ igru i znaš kako igrati. Bez ovoga sve ostalo je nasumično. <b>Cilj:</b> osjećaj kontrole i jasnog plana.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot gold"></div>
        <div class="tl-head"><span class="tl-label gold">Faza 2 — Gramatički temelj</span></div>
        <div class="tl-title">Poglavlja 03–08 · Grammar Core</div>
        <div class="tl-body" style="margin-top:6px">Najvažnija vremena, conditionals, passive, reported speech, articles, prepositions. <b>Ne ide se dalje dok ovo nije stabilno</b> — sve ostalo pada bez temelja.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot union-red" style="background:var(--union-red)"></div>
        <div class="tl-head"><span class="tl-label red">Faza 3 — Ispitna mehanika</span></div>
        <div class="tl-title">Poglavlja 09–12 · Use of English</div>
        <div class="tl-body" style="margin-top:6px">Naučiš <b>što zadatak zapravo traži</b> — gap fill, MCQ, word formation, collocations. Ovo je most između gramatike i bodova.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot" style="background:var(--union-red)"></div>
        <div class="tl-head"><span class="tl-label red">Faza 4 — Najveći lift</span></div>
        <div class="tl-title">Poglavlja 13–16 · Writing Master System</div>
        <div class="tl-body" style="margin-top:6px">Writing nosi ~40% bodova. Ovaj blok zahtijeva <b>nekoliko tjedana vježbe</b> — ne može se naučiti za jedan dan. Počni što ranije.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot green"></div>
        <div class="tl-head"><span class="tl-label green">Faza 5 — Strategije</span></div>
        <div class="tl-title">Poglavlja 17–18 · Reading + Listening</div>
        <div class="tl-body" style="margin-top:6px">Sada kada imaš gramatiku i writing, <b>strategije za reading i listening</b> imaju puno više smisla — vidiš zašto se neke zamke postavljaju upravo tu.</div>
      </div>
      <div class="tl-item">
        <div class="tl-dot amber"></div>
        <div class="tl-head"><span class="tl-label amber">Faza 6 — Finalizacija</span></div>
        <div class="tl-title">Poglavlja 19–20 · Vocab + Exam Survival</div>
        <div class="tl-body" style="margin-top:6px">Vocabulary upgrade i finalni plan za zadnje tjedne. <b>Diskretni bodovi</b> koji dijele odličan od vrlo dobrog rezultata.</div>
      </div>
    </div>

    <!-- SCHEDULE CARDS -->
    <div class="sec-label" style="margin-top:36px">// preporučeni raspored po fazama</div>
    <div class="schedule-grid">
      <div class="sched-card">
        <div class="sched-hd phase-1">📍 Faza 1 · 1 dan</div>
        <div class="sched-body"><div class="sched-chapter"><b>Pogl. 01</b> — Struktura ispita<br><b>Pogl. 02</b> — Ova skripta<br><span style="color:var(--t3)">~20 min po poglavlju</span></div></div>
      </div>
      <div class="sched-card">
        <div class="sched-hd phase-2">📚 Faza 2 · 2–3 tjedna</div>
        <div class="sched-body"><div class="sched-chapter"><b>Pogl. 03–04</b> — Vremena<br><b>Pogl. 05</b> — Conditionals<br><b>Pogl. 06–08</b> — Passive, modals...<br><span style="color:var(--t3)">~1 poglavlje svaki drugi dan</span></div></div>
      </div>
      <div class="sched-card">
        <div class="sched-hd phase-3">🔧 Faza 3 · 1 tjedan</div>
        <div class="sched-body"><div class="sched-chapter"><b>Pogl. 09–10</b> — Gap fill, MCQ<br><b>Pogl. 11–12</b> — Word formation<br><span style="color:var(--t3)">~1 poglavlje dnevno</span></div></div>
      </div>
      <div class="sched-card">
        <div class="sched-hd phase-4">✍️ Faza 4 · 3–4 tjedna</div>
        <div class="sched-body"><div class="sched-chapter"><b>Pogl. 13–14</b> — Esej osnove<br><b>Pogl. 15–16</b> — Jezik + modeli<br><span style="color:var(--union-red)">+ 1 esej svaka 3 dana!</span></div></div>
      </div>
      <div class="sched-card">
        <div class="sched-hd phase-5">🎯 Faza 5 · 1 tjedan</div>
        <div class="sched-body"><div class="sched-chapter"><b>Pogl. 17</b> — Reading<br><b>Pogl. 18</b> — Listening<br><span style="color:var(--t3)">~2–3 dana po poglavlju</span></div></div>
      </div>
      <div class="sched-card">
        <div class="sched-hd phase-6">🏁 Faza 6 · zadnja 2 tj.</div>
        <div class="sched-body"><div class="sched-chapter"><b>Pogl. 19</b> — Vocabulary<br><b>Pogl. 20</b> — Exam survival<br><span style="color:var(--amber)">Samo ponavljanje!</span></div></div>
      </div>
    </div>

    <!-- RITAM SESIJE -->
    <div id="sec-ritam" class="sec-label" style="margin-top:36px">// kako izgleda dobra sesija — 20 minuta</div>
    <div class="method-grid">
      <div class="method-card">
        <span class="method-icon">⏱️</span>
        <div class="method-title">Minuta 1–2: Pregled</div>
        <div class="method-desc">Otvori poglavlje. Pročitaj <b>samo headinge i stat kartice</b>. Dobij sliku što te čeka — ne čitaj odmah sve. Mozak bolje usvaja kad ima shemu.</div>
      </div>
      <div class="method-card">
        <span class="method-icon">📖</span>
        <div class="method-title">Minuta 3–12: Čitanje</div>
        <div class="method-desc">Čitaj Tab 1 (Razumjeti) <b>aktivno</b> — kad naiđeš na primjer, zaustavi se i razmisli koji bi odgovor bio prije nego skrollaš dalje. Ne čitaj pasivno.</div>
      </div>
      <div class="method-card">
        <span class="method-icon">✍️</span>
        <div class="method-title">Minuta 13–17: Drill</div>
        <div class="method-desc">Radi sve kviz pitanja i speed drill <b>bez vraćanja natrag</b>. Greška je informacija — nemoj je ignorirati, pročitaj objašnjenje do kraja.</div>
      </div>
      <div class="method-card">
        <span class="method-icon">🎯</span>
        <div class="method-title">Minuta 18–20: Aktivno ponavljanje</div>
        <div class="method-desc">Zatvori skriptu i iz glave reci 3 ključna pravila poglavlja. <b>Active recall</b> — prisjecanje bez gledanja — jedina je provjera je li teorija iz skripte stvarno usvojena.</div>
      </div>
    </div>

    <!-- KAKO RADITI DRILL -->
    <div id="sec-drill" class="sec-label" style="margin-top:36px">// kako pravilno raditi drill — nije sve jednako</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck blue">Reveal kartice</div><div class="cv">Pokušaj odgovoriti <b>u glavi prije</b> nego klikneš. Ako odmah klikneš bez razmišljanja, kartica ti ne pomaže — samo skrollaš kroz sadržaj.</div></div>
      <div class="concept-row"><div class="ck gold">MCQ kviz pitanja</div><div class="cv">Čitaj <b>sve opcije</b> prije nego odabereš. Čak i kad "odmah znaš" — na maturi su distractori dizajnirani da izgledaju točno. Uvježbaj disciplinu čitanja svih opcija.</div></div>
      <div class="concept-row"><div class="ck green">Speed drill</div><div class="cv">Ovdje je <b>brzina namjerna</b>. Nije to test znanja — to je test brzine aktivacije znanja. Ako moraš dugo razmišljati, gradivo nije dovoljno usvojeno.</div></div>
      <div class="concept-row"><div class="ck red">Greške u drillu</div><div class="cv"><b>Ne preskaći objašnjenje greške.</b> Pročitaj ga u cijelosti. Greška je najvrjednija informacija u drillu — točni odgovori ti ne govore ništa novo.</div></div>
      <div class="concept-row"><div class="ck amber">Checkpoint</div><div class="cv">Checkpoint nije ukras — to je <b>prolaznica</b>. Ako ne znaš odgovoriti, gradivo nije usvojeno. Vrati se na Tab 1, pročitaj relevantnu sekciju, pokušaj opet.</div></div>
      <div class="concept-row"><div class="ck cream">Kad ponoviš drill</div><div class="cv">Ako si već riješio drill i dobiješ dobru ocjenu, <b>ne treba ga ponavljati odmah</b>. Vrati se za 3–5 dana — testiraš dugoročno pamćenje, ne kratkoročno.</div></div>
    </div>

    <!-- DISCERE INTEGRACIJA -->
    <div id="sec-discere" class="sec-label" style="margin-top:36px">// kako stvarno usvojiti gradivo — aktivno ponavljanje</div>
    <p class="prose">Pasivno čitanje daje lažan osjećaj da znaš gradivo. Tek kad pokušaš primijeniti — bez gledanja u bilješke — mozak stvarno procesira. Ovo se zove <em>active recall</em> i jedina je tehnika dokazana za dugoročno usvajanje jezika pod vremenskim pritiskom ispita.</p>

    <div class="callout callout-green">
      <div class="callout-icon">🔗</div>
      <div class="callout-body">
        <div class="callout-title">Optimalni tok — kako koristiti svako poglavlje</div>
        <div class="callout-text">
          <b>1.</b> Pročitaj poglavlje (teorija + primjeri)<br>
          <b>2.</b> Odmah napravi drill u Tab ✍️ — bez preskakanja<br>
          <b>3.</b> Zatvori skriptu i u glavi reci 3 ključna pravila (active recall)<br>
          <b>4.</b> Ako si pogriješio više od 30% — vrati se na konkretnu sekciju<br>
          <b>5.</b> Nakon 3 dana otvori Tab ⚡ i provjeri pamtiš li još uvijek
        </div>
      </div>
    </div>

    <!-- ACTIVE RECALL EXAMPLE -->
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:16px 0 20px">
      <div style="background:var(--bg-surface);border-bottom:1px solid var(--bd);padding:10px 16px;font-family:var(--mono);font-size:9.5px;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase">Primjer — Poglavlje 05 · Conditionals · Active Recall u praksi</div>
      <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
        <div style="font-family:var(--mono);font-size:12.5px;color:var(--t2);line-height:1.7">
          <b style="color:var(--t1)">1.</b> Pročitaš Poglavlje 05 — naučiš razliku između Zero, First, Second i Third conditional.<br>
          <b style="color:var(--t1)">2.</b> Radiš drill u Tab ✍️ — 7 pitanja, dobijete 5/7.<br>
          <b style="color:var(--t1)">3.</b> Zatvoriš skriptu. U glavi kažeš: <em>"Second conditional = If + Past Simple + would. Situacija nerealna."</em><br>
          <b style="color:var(--t1)">4.</b> Ako ne možeš — vratiš se na sekciju "Second conditional" u Tab 📖.<br>
          <b style="color:var(--t1)">5.</b> Za 3 dana otvoriš Tab ⚡ i provjeriš: pamtiš li još uvijek 5 panic-proof pravila?
        </div>
        <div style="background:var(--bg-input);border:1px solid var(--bd);border-radius:var(--r2);padding:10px 14px;font-family:var(--mono);font-size:12px;color:var(--t3)">
          Rezultat: <span style="color:var(--brit-green);font-weight:600">Gradivo je usvojeno — ne samo pročitano.</span>
        </div>
      </div>
    
</div>

    <div class="callout callout-warn">
      <div class="callout-icon">⚠️</div>
      <div class="callout-body">
        <div class="callout-title">Najčešća greška s ovakvim skriptama</div>
        <div class="callout-text">Ne otvori reveal odmah bez pokušaja. Ne čitaj gradivo pasivno kao roman. Ne preskači drill jer "znaš tu temu". Drill nije provjera — drill je samo učenje koje djeluje.</div>
      </div>
    </div>

    <!-- NAVIKE -->
    <div id="sec-navike" class="sec-label" style="margin-top:36px">// navike koje razlikuju dobrog od odličnog učenika</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🌅</span><span>Jutarnja rutina — 5 minuta koje mijenjaju dan</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">Svako jutro, <b>prije telefona</b>, otvori jedno poglavlje skripte i pročitaj samo stat kartice i panic box (2 minute). To aktivira gradivo u radnoj memoriji i priprema mozak za pasivno usvajanje kroz dan. Zvuči trivijalno — ali je jedna od najefikasnijih tehnika za dugoročno pamćenje.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">📝</span><span>Greška kao alat — kako bilježiti što ne znaš</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">Svaki put kad pogrešno odgovoriš na drill pitanje, zapiši ga negdje (notes app, bilježnica). <b>Ne gradivo — samo rečenicu o grešci</b>: "Miješam Present Perfect i Past Simple — signal word 'already' ide s PP, ne PS". Taj zapis pregledaj dan prije mature — to je tvoj osobni error log.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">⏰</span><span>Kako odrediti koliko vremena posvetiti svakom bloku</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        Gruba formula po tjednima do mature:<br>
        <span class="ok">8+ tjedana</span> → sve faze normalnim tempom<br>
        <span style="color:var(--amber)">4–7 tjedana</span> → fokus na Blok 2, 4 i 5 — preskoči sitne detalje Bloka 3<br>
        <span class="bad">1–3 tjedna</span> → samo Writing (Blok 4) i Reading strategije (Pogl. 17) — tamo su najveći bodovi za brzo poboljšanje
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🔁</span><span>Kada se vraćati na prethodna poglavlja</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">Postoje tri situacije kada se <b>moraš</b> vratiti:<br>
        1. Griješiš više od 40% na drillovima tog tipa<br>
        2. U novom poglavlju naiđeš na nešto što pretpostavlja gradivo koje ne znaš<br>
        3. Prošlo je više od 2 tjedna od kad si radio poglavlje — repeat je obavezan<br>
        <b>Nije to poraz — to je sustav.</b>
      </div>
    </div>

    <!-- WEEKS TO MATURA CALCULATOR -->
    <div class="weeks-calc">
      <div class="wc-hd">
        <div class="wc-title">Koliko tjedana imam do mature?</div>
        <div class="wc-badge">📅 plan kalkulator</div>
      </div>
      <div class="wc-body">
        <div class="wc-row">
          <div class="wc-label">Datum mature:</div>
          <input type="date" class="wc-input" id="wcDate" oninput="updateWeeksCalc()" aria-label="Datum mature">
        </div>
        <div class="wc-result" id="wcResult" style="display:none"></div>
      </div>
    </div>

    <!-- HABIT TRACKER -->
    <div id="sec-tracker" class="sec-label" style="margin-top:36px">// dnevni habit tracker — označi što si danas napravio</div>
    <div class="habit-tracker">
      <div class="ht-hd">
        <div>
          <div class="ht-title">Moj plan za danas</div>
          <div id="htTodayLabel" style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:3px"></div>
        </div>
        <div class="ht-streak" id="streakDisplay">🔥 Streak: <span id="streakNum">0</span> dana</div>
      </div>
      <div class="ht-body">
        <!-- MONTH CALENDAR -->
        <div style="margin-bottom:16px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
            <button onclick="calNav(-1)" style="background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:5px 12px;color:var(--t2);cursor:pointer;font-family:var(--mono);font-size:12px;transition:all .15s" onmouseover="this.style.color='var(--t1)'" onmouseout="this.style.color='var(--t2)'">‹ Prethodni</button>
            <div id="calMonthLabel" style="font-family:var(--serif);font-size:14px;font-weight:700;color:var(--t1)"></div>
            <button onclick="calNav(1)" id="calNextBtn" style="background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:5px 12px;color:var(--t2);cursor:pointer;font-family:var(--mono);font-size:12px;transition:all .15s" onmouseover="this.style.color='var(--t1)'" onmouseout="this.style.color='var(--t2)'">Sljedeći ›</button>
          </div>
          <!-- Day-of-week headers -->
          <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:3px">
            <div style="text-align:center;font-family:var(--mono);font-size:9px;color:var(--t3);padding:2px">Po</div>
            <div style="text-align:center;font-family:var(--mono);font-size:9px;color:var(--t3);padding:2px">Ut</div>
            <div style="text-align:center;font-family:var(--mono);font-size:9px;color:var(--t3);padding:2px">Sr</div>
            <div style="text-align:center;font-family:var(--mono);font-size:9px;color:var(--t3);padding:2px">Če</div>
            <div style="text-align:center;font-family:var(--mono);font-size:9px;color:var(--t3);padding:2px">Pe</div>
            <div style="text-align:center;font-family:var(--mono);font-size:9px;color:var(--t3);padding:2px" style="color:var(--amber)">Su</div>
            <div style="text-align:center;font-family:var(--mono);font-size:9px;color:var(--t3);padding:2px" style="color:var(--amber)">Ne</div>
          </div>
          <div id="calGrid" style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px"></div>
          <div style="display:flex;gap:14px;margin-top:10px;font-family:var(--mono);font-size:10px;color:var(--t3);flex-wrap:wrap">
            <span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;background:var(--brit-green-dim);border:1px solid var(--brit-green-bd);border-radius:3px;display:inline-flex;align-items:center;justify-content:center;color:var(--brit-green);font-size:9px">✓</span> Završeno</span>
            <span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;background:var(--red-dim);border:1px solid var(--red-border);border-radius:3px;display:inline-flex;align-items:center;justify-content:center;color:var(--red);font-size:9px;font-weight:700">×</span> Propušteno</span>
            <span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border:1.5px solid var(--blue);border-radius:3px;display:inline-block"></span> Danas</span>
            <span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;background:var(--bg-input);border:1px solid var(--bd);border-radius:3px;display:inline-block"></span> Prazno</span>
            <span style="color:var(--t3);font-size:10px">Klik: prazno → ✓ → × → prazno</span>
          </div>
        </div>

        <div id="htTodayHabitLabel" style="font-family:var(--mono);font-size:10.5px;color:var(--t3);margin-bottom:14px"></div>
        <div class="ht-habits" id="htHabits">
          <div class="ht-habit" id="h0" role="checkbox" aria-checked="false" tabindex="0" onclick="toggleHabit(0)" onkeydown="if(event.key==='Enter'||event.key===' ')toggleHabit(0)">
            <div class="ht-cb">✓</div>
            <div class="ht-habit-text">📖 Pročitao sam jedno poglavlje skripte</div>
          </div>
          <div class="ht-habit" id="h1" role="checkbox" aria-checked="false" tabindex="0" onclick="toggleHabit(1)" onkeydown="if(event.key==='Enter'||event.key===' ')toggleHabit(1)">
            <div class="ht-cb">✓</div>
            <div class="ht-habit-text">✍️ Riješio sam mini drill i kviz pitanja</div>
          </div>
          <div class="ht-habit" id="h2" role="checkbox" aria-checked="false" tabindex="0" onclick="toggleHabit(2)" onkeydown="if(event.key==='Enter'||event.key===' ')toggleHabit(2)">
            <div class="ht-cb">✓</div>
            <div class="ht-habit-text">🎯 Active recall — u glavi rekao 3 ključna pravila poglavlja</div>
          </div>
          <div class="ht-habit" id="h3" role="checkbox" aria-checked="false" tabindex="0" onclick="toggleHabit(3)" onkeydown="if(event.key==='Enter'||event.key===' ')toggleHabit(3)">
            <div class="ht-cb">✓</div>
            <div class="ht-habit-text">📝 Zapisao sam greške iz drilla u bilježnicu</div>
          </div>
          <div class="ht-habit" id="h4" role="checkbox" aria-checked="false" tabindex="0" onclick="toggleHabit(4)" onkeydown="if(event.key==='Enter'||event.key===' ')toggleHabit(4)">
            <div class="ht-cb">✓</div>
            <div class="ht-habit-text">🔁 Ponovio sam gradivo od jučer (5 minuta)</div>
          </div>
        </div>
        <div class="ht-score" id="htScore">
          <div class="ht-score-num" id="htScoreNum">0/5</div>
          <div class="ht-score-lbl" id="htScoreLbl">Označi aktivnosti koje si završio</div>
        </div>
        <button class="streak-export-btn" onclick="exportStreak()" aria-label="Spremi streak kao sliku">
          <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 1v7M4 6l2.5 2.5L9 6M2 10h9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Spremi streak kao sliku
        </button>
      </div>
    </div>

    <!-- DISCERE LINK -->
    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🚀</div><div class="discere-hd-text">Spreman si — kreni na Poglavlje 03</div></div>
      <div class="discere-body">
        <div class="discere-desc">Razumiješ sustav, znaš active recall i kako raditi drillove. Poglavlje 03 je prvi pravi korak — <b>Vremena koja se miješaju</b>.</div>
        <button class="discere-btn" onclick="navigateChapter(3)">Poglavlje 03: Vremena →</button>
      </div>
    </div>>

    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">← Pregled</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Provjeri se →</span>
    </div>
  </div><!-- /l1 -->

  <!-- ══════════ LAYER 2 — PROVJERI SE ══════════ -->
  <div class="layer" id="l2">

    <div class="quiz-intro">
      Provjeri razumiješ li sustav učenja prije nego kreneš u gradivo. <strong>Svako pitanje ima objašnjenje odmah nakon odgovora.</strong>
    </div>

    <!-- Q1 -->
    <div class="q-block" id="q1">
      <div class="q-head">
        <div class="q-meta">pitanje 01 · redoslijed</div>
        <div class="q-text">Zašto je redoslijed poglavlja u skripti važan?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">A</div>Nije važan — možeš početi od bilo kojeg poglavlja</div>
        <div class="q-opt" onclick="answer(this,'q1','correct')"><div class="q-letter">B</div>Svako poglavlje gradi na prethodnom — preskakanje stvara rupe</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">C</div>Važan je samo za gramatička poglavlja, writing možeš raditi kad hoćeš</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">D</div>Redoslijed je samo preporuka, nije obavezan</div>
      </div>
      <div class="q-expl" id="qe1"><div class="expl-ok">✓ Točno — skripta je sustav, ne zbirka tema. Gramatika podupire Use of English, Use of English podupire Writing, Writing pretpostavlja Reading strategije. Sve je međusobno vezano.</div></div>
    </div>

    <!-- Q2 -->
    <div class="q-block" id="q2">
      <div class="q-head">
        <div class="q-meta">pitanje 02 · drill tehnika</div>
        <div class="q-text">Što trebaš napraviti PRIJE nego klikneš na reveal karticu?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">A</div>Odmah kliknuti — čitanje odgovora je sam cilj</div>
        <div class="q-opt" onclick="answer(this,'q2','correct')"><div class="q-letter">B</div>Pokušati odgovoriti u glavi — kartica je provjera, ne izvor informacije</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">C</div>Zapisati pitanje u bilježnicu pa onda kliknuti</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">D</div>Pročitati cijelo poglavlje još jednom pa onda kliknuti</div>
      </div>
      <div class="q-expl" id="qe2"><div class="expl-ok">✓ Točno — reveal kartica je alat za aktivno prisjecanje (active recall). Samo ako pokušaš odgovoriti sam mozak zaista procesira gradivo. Pasivno čitanje odgovora nema skoro nikakav efekt na dugoročno pamćenje.</div></div>
    </div>

    <!-- Q3 -->
    <div class="q-block" id="q3">
      <div class="q-head">
        <div class="q-meta">pitanje 03 · active recall tehnika</div>
        <div class="q-text">Što dokazano najviše pomaže dugoročnom pamćenju gradiva?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">A</div>Čitanje poglavlja više puta bez prekida</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">B</div>Podvlačenje i ispisivanje ključnih dijelova</div>
        <div class="q-opt" onclick="answer(this,'q3','correct')"><div class="q-letter">C</div>Prisjecanje gradiva bez gledanja — pa onda provjera</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">D</div>Slušanje predavanja ili YouTube objašnjenja</div>
      </div>
      <div class="q-expl" id="qe3"><div class="expl-ok">✓ Točno — active recall (prisjecanje bez gledanja) je najistraženija tehnika za dugoročno usvajanje. Svaki drill u ovoj skripti funkcionira na tom principu — pokušaj odgovoriti, pa provjeri. To je najdjelotvorniji trenutak: teorija je svježa, pa pravi zadatak potvrđuje ili otkriva rupe dok ih još možeš popuniti.</div></div>
    </div>

    <!-- Q4 -->
    <div class="q-block" id="q4">
      <div class="q-head">
        <div class="q-meta">pitanje 04 · greške</div>
        <div class="q-text">Što trebaš napraviti kada pogrešno odgovoriš na drill pitanje?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">A</div>Preskočiti — greške su normalne, ne treba ih analizirati</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">B</div>Odmah ponavljati drill dok ne dobiješ točan odgovor</div>
        <div class="q-opt" onclick="answer(this,'q4','correct')"><div class="q-letter">C</div>Pročitati objašnjenje greške i zapisati je u osobni error log</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">D</div>Odmah se vratiti na početak poglavlja i čitati sve ispočetka</div>
      </div>
      <div class="q-expl" id="qe4"><div class="expl-ok">✓ Točno — greška je najvrjednija informacija u učenju. Pročitaj objašnjenje do kraja i zapiši grešku u bilježnicu ili notes app kao kratku napomenu. Taj osobni error log je zlata vrijedan dan prije mature.</div></div>
    </div>

    <!-- Q5 -->
    <div class="q-block" id="q5">
      <div class="q-head">
        <div class="q-meta">pitanje 05 · plan · hitno</div>
        <div class="q-text">Imaš samo 2 tjedna do mature. Koja su dva prioritetna bloka?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">A</div>Blok 2 (Gramatika) i Blok 3 (Use of English)</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">B</div>Blok 3 (Use of English) i Blok 6 (Vocabulary)</div>
        <div class="q-opt" onclick="answer(this,'q5','correct')"><div class="q-letter">C</div>Blok 4 (Writing) i Poglavlje 17 (Reading strategije)</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">D</div>Blok 5 (Reading + Listening) i Blok 6 (Vocabulary)</div>
      </div>
      <div class="q-expl" id="qe5"><div class="expl-ok">✓ Točno — Writing nosi ~40% bodova i najbrže se poboljšava s jasnom strategijom. Reading strategije (Pogl. 17) direktno utječu na točnost u reading cjelini. To su dva mjesta s najvećim potencijalom za brzo poboljšanje u kratkom vremenu.</div></div>
    </div>

    <!-- DISCERE -->
    <div class="discere-box" style="margin-top:32px">
      <div class="discere-hd"><div class="discere-hd-icon">🚀</div><div class="discere-hd-text">Spreman si — Poglavlje 03 čeka</div></div>
      <div class="discere-body">
        <div class="discere-desc">Razumiješ sustav učenja i active recall tehniku. Sad je pravo vrijeme za <b>Poglavlje 03 · Vremena koja se miješaju</b>.</div>
        <button class="discere-btn" onclick="navigateChapter(3)">Poglavlje 03: Vremena →</button>
      </div>
    </div>>


    <!-- DISCERE LINK -->
    <div class="discere-box" style="margin-top:28px">
      <div class="discere-hd"><div class="discere-hd-icon">🚀</div><div class="discere-hd-text">Vježbaj na Discere</div></div>
      <div class="discere-body">
        <div class="discere-desc">Uvježbao/la si sva vremena. Provjeri ih na <b>stvarnim maturalnim zadacima</b> — gap fill, multiple choice i error correction iz arhive.</div>
        <button class="discere-btn" onclick="openDiscere()">Otvori Discere →</button>
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
      <button class="nav-btn primary" onclick="navigateChapter(3)">Poglavlje 03: Gramatika →</button>
    </div>
  </div><!-- /l2 -->

</div><!-- /content-wrap -->
</main>
</div><!-- /shell -->

<script>
const PAGE_KEY='maturiraj_en_visa_p02';

/* ─── LOCALSTORAGE ─────────────────────────────── */
function saveProgress(i){
  try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d['tab_'+i]=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
}
function loadProgress(){
  try{
    const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');
    document.querySelectorAll('.tab').forEach((t,i)=>{if(d['tab_'+i])t.classList.add('done-tab');});
    if(d.cgPassed){const cg=document.getElementById('cgBlock');if(cg)cg.style.display='none';}
    // restore matura date
    if(d.maturaDate){
      const inp=document.getElementById('wcDate');
      if(inp){inp.value=d.maturaDate;updateWeeksCalc();}
    }
  }catch(e){}
  loadHabits();
}

/* ─── TABS ─────────────────────────────────────── */
function switchTab(i){
  document.querySelectorAll('.tab').forEach((t,j)=>t.classList.toggle('active',j===i));
  document.querySelectorAll('.tab').forEach((t,j)=>{t.setAttribute('aria-selected',j===i);t.tabIndex=j===i?0:-1;});
  document.querySelectorAll('.layer').forEach((l,j)=>l.classList.toggle('active',j===i));
  document.querySelectorAll('.tab-prog-item').forEach((t,j)=>{t.classList.toggle('active',j===i);if(j<i)t.classList.add('done');else t.classList.remove('done');});
  if(i>0){document.querySelectorAll('.tab')[i-1].classList.add('done-tab');saveProgress(i-1);}
  window.scrollTo({top:0,behavior:'smooth'});
}
function tabKey(e,i){
  if(e.key==='Enter'||e.key===' '){e.preventDefault();switchTab(i);}
  else if(e.key==='ArrowRight'){e.preventDefault();switchTab(Math.min(i+1,2));}
  else if(e.key==='ArrowLeft'){e.preventDefault();switchTab(Math.max(i-1,0));}
}

/* ─── REVEAL CARDS ─────────────────────────────── */
function toggleReveal(el){
  el.classList.toggle('open');
  el.setAttribute('aria-expanded',el.classList.contains('open'));
}
document.querySelectorAll('.reveal-card').forEach(c=>{
  c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleReveal(c);}});
});

/* ─── QUIZ ─────────────────────────────────────── */
function answer(opt,qId,result){
  const block=document.getElementById(qId);
  if(block.dataset.answered) return;
  block.dataset.answered='1';
  block.querySelectorAll('.q-opt').forEach(o=>o.classList.add('disabled'));
  opt.classList.add(result==='correct'?'correct':'wrong');
  if(result==='wrong'){
    block.querySelectorAll('.q-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes("'correct'"))o.classList.add('correct');});
  }
  const expl=document.getElementById('qe'+qId.replace('q',''));
  if(expl){expl.classList.add('show');expl.scrollIntoView({behavior:'smooth',block:'nearest'});}
}

/* ─── CHECKPOINT ────────────────────────────────── */
let cgAnswered=false;
function cgAnswer(opt,isCorrect){
  if(cgAnswered) return;
  cgAnswered=true;
  document.querySelectorAll('.cg-opt').forEach(o=>o.classList.add('cg-disabled'));
  const fb=document.getElementById('cgFb');
  const btn=document.getElementById('cgBtn');
  if(isCorrect){
    opt.classList.add('cg-correct');
    fb.className='cg-feedback show pass';
    fb.innerHTML='✓ Točno! Kratke, česte sesije su ključ — mozak usvaja gradivo bolje kada je ponavljanje raspoređeno kroz vrijeme, a ne nabijeno u jednu dugačku sesiju.';
    btn.classList.add('show');
    try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.cgPassed=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
  } else {
    opt.classList.add('cg-wrong');
    document.querySelectorAll('.cg-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes('true'))o.classList.add('cg-correct');});
    fb.className='cg-feedback show fail';
    fb.innerHTML='✗ Netočno. Pogledaj sekciju "3 najčešće greške" — maratonske sesije i čitanje bez drillova su anti-patterns koje ova skripta savjetuje izbjegavati.';
    setTimeout(()=>{cgAnswered=false;document.querySelectorAll('.cg-opt').forEach(o=>o.classList.remove('cg-disabled','cg-wrong','cg-correct'));fb.className='cg-feedback';btn.classList.remove('show');},2800);
  }
}

/* ─── STICKY TIP BAR ────────────────────────────── */
const tipSections=['sec-redoslijed','sec-faze','sec-ritam','sec-drill','sec-navike','sec-tracker'];
function tipScroll(id){
  const el=document.getElementById(id);
  if(!el) return;
  window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-60,behavior:'smooth'});
}
const tipObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){const idx=tipSections.indexOf(e.target.id);for(let j=0;j<=idx;j++){const p=document.getElementById('tip-'+j);if(p)p.classList.add('done');}}});
},{rootMargin:'-20% 0px -70% 0px'});
tipSections.forEach(id=>{const el=document.getElementById(id);if(el)tipObs.observe(el);});

/* ─── HABIT TRACKER — MONTHLY CALENDAR ─────────── */
const HABIT_KEY='maturiraj_habits';
const HR_MONTHS=['Siječanj','Veljača','Ožujak','Travanj','Svibanj','Lipanj','Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'];

let calYear, calMonth;

function getHabitData(){
  try{
    const raw=JSON.parse(localStorage.getItem(HABIT_KEY)||'{"days":{},"todayDate":"","todayHabits":[]}');
    // migrate old format (flat 'today' array) → date-keyed
    if(raw.today&&!raw.todayHabits){raw.todayHabits=raw.today;raw.todayDate=todayKey();delete raw.today;}
    // reset habits if it's a new day
    if(raw.todayDate!==todayKey()){raw.todayHabits=[];raw.todayDate=todayKey();}
    return raw;
  }catch(e){return{days:{},todayDate:todayKey(),todayHabits:[]};}
}
function saveHabitData(data){
  try{localStorage.setItem(HABIT_KEY,JSON.stringify(data));}catch(e){}
}
function todayKey(){
  const d=new Date();
  return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
}

function initCal(){
  const now=new Date();
  calYear=now.getFullYear();
  calMonth=now.getMonth();
  // populate today labels
  const dayNames=['nedjelja','ponedjeljak','utorak','srijeda','četvrtak','petak','subota'];
  const todayStr=dayNames[now.getDay()]+', '+now.getDate()+'. '+HR_MONTHS[now.getMonth()]+' '+now.getFullYear()+'.';
  const tl=document.getElementById('htTodayLabel');
  if(tl) tl.textContent=todayStr;
  const hl=document.getElementById('htTodayHabitLabel');
  if(hl) hl.textContent='Označi što si danas napravio — '+now.getDate()+'. '+HR_MONTHS[now.getMonth()]+' (sprema se lokalno):';
  renderCal();
}

function calNav(dir){
  calMonth+=dir;
  if(calMonth>11){calMonth=0;calYear++;}
  if(calMonth<0){calMonth=11;calYear--;}
  // disable "next" if we're already at current month
  const now=new Date();
  const nextBtn=document.getElementById('calNextBtn');
  if(nextBtn) nextBtn.disabled=(calYear===now.getFullYear()&&calMonth>=now.getMonth());
  renderCal();
}

function renderCal(){
  const data=getHabitData();
  const now=new Date();

  document.getElementById('calMonthLabel').textContent=HR_MONTHS[calMonth]+' '+calYear;

  const nextBtn=document.getElementById('calNextBtn');
  if(nextBtn) nextBtn.disabled=(calYear===now.getFullYear()&&calMonth>=now.getMonth());

  const grid=document.getElementById('calGrid');
  grid.innerHTML='';

  const firstDay=new Date(calYear,calMonth,1).getDay();
  const startOffset=(firstDay===0)?6:firstDay-1;
  const daysInMonth=new Date(calYear,calMonth+1,0).getDate();

  for(let i=0;i<startOffset;i++){
    const empty=document.createElement('div');
    empty.style.cssText='height:32px';
    grid.appendChild(empty);
  }

  for(let d=1;d<=daysInMonth;d++){
    const key=calYear+'-'+(calMonth+1)+'-'+d;
    const isToday=(calYear===now.getFullYear()&&calMonth===now.getMonth()&&d===now.getDate());
    const isFuture=new Date(calYear,calMonth,d)>now;
    const state=data.days[key]; // true = done, 'skip' = skipped, undefined = empty

    const cell=document.createElement('div');
    cell.style.cssText=\`height:32px;border-radius:var(--r2);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:11px;font-weight:\${isToday?'700':'500'};transition:all .15s;position:relative;user-select:none;\`;

    if(isFuture){
      cell.style.cssText+=\`background:transparent;border:1px solid var(--bd);color:var(--t3);cursor:default;opacity:.4;\`;
      cell.innerHTML=\`\${d}\`;
      cell.title='Budući dan';
    } else if(state===true){
      // DONE — green ✓, click → skip
      cell.style.cssText+=\`background:var(--brit-green-dim);border:1px solid var(--brit-green-bd);color:var(--brit-green);cursor:pointer;\`;
      cell.innerHTML=\`<span style="font-size:15px;line-height:1">✓</span>\`;
      cell.title='Sesija završena — klikni za propušteno';
      cell.onmouseover=()=>{cell.style.opacity='.75';};
      cell.onmouseout=()=>{cell.style.opacity='1';};
      const k=key;cell.onclick=()=>cycleDay(k);
    } else if(state==='skip'){
      // SKIPPED — red ×, click → empty
      cell.style.cssText+=\`background:var(--red-dim);border:1px solid var(--red-border);color:var(--red);cursor:pointer;\`;
      cell.innerHTML=\`<span style="font-size:15px;line-height:1;font-weight:700">×</span>\`;
      cell.title='Propušteno — klikni za ukloni oznaku';
      cell.onmouseover=()=>{cell.style.opacity='.75';};
      cell.onmouseout=()=>{cell.style.opacity='1';};
      const k=key;cell.onclick=()=>cycleDay(k);
    } else if(isToday){
      // TODAY — empty, click → done
      cell.style.cssText+=\`background:var(--blue-dim);border:1.5px solid var(--blue);color:var(--blue);cursor:pointer;\`;
      cell.innerHTML=\`\${d}\`;
      cell.title='Danas — klikni za ✓ završeno';
      cell.onmouseover=()=>{cell.style.background='rgba(79,123,232,.2)';};
      cell.onmouseout=()=>{cell.style.background='var(--blue-dim)';};
      cell.onclick=()=>cycleDay(key);
    } else {
      // PAST EMPTY — click → done
      cell.style.cssText+=\`background:var(--bg-input);border:1px solid var(--bd);color:var(--t3);cursor:pointer;\`;
      cell.innerHTML=\`\${d}\`;
      cell.title='Klikni: ✓ završeno → × propušteno → prazno';
      cell.onmouseover=()=>{cell.style.borderColor='var(--bd-mid)';cell.style.color='var(--t2)';};
      cell.onmouseout=()=>{cell.style.borderColor='var(--bd)';cell.style.color='var(--t3)';};
      const k=key;cell.onclick=()=>cycleDay(k);
    }

    grid.appendChild(cell);
  }
}

function cycleDay(key){
  const data=getHabitData();
  const state=data.days[key];
  // cycle: undefined → true → 'skip' → undefined
  if(!state)          data.days[key]=true;
  else if(state===true) data.days[key]='skip';
  else                delete data.days[key];
  saveHabitData(data);
  renderCal();
  updateStreak(data);
}

function markToday(){
  const data=getHabitData();
  data.days[todayKey()]=true;
  saveHabitData(data);
  renderCal();
  updateStreak(data);
}

function toggleHabit(idx){
  const data=getHabitData();
  const key=todayKey();
  if(!data.todayHabits) data.todayHabits=[];
  const i=data.todayHabits.indexOf(idx);
  const wasChecked=i!==-1;
  if(wasChecked){data.todayHabits.splice(i,1);}else{data.todayHabits.push(idx);}
  if(data.todayHabits.length>=5){data.days[key]=true;}
  saveHabitData(data);
  if(!wasChecked){
    const el=document.getElementById('h'+idx);
    if(el){
      el.classList.remove('just-checked');
      void el.offsetWidth;
      el.classList.add('just-checked');
      el.addEventListener('animationend',()=>el.classList.remove('just-checked'),{once:true});
    }
  }
  renderHabits(data);
  renderCal();
}

function loadHabits(){
  initCal();
  const data=getHabitData();
  renderHabits(data);
}

function renderHabits(data){
  const today=data.todayHabits||[];
  [0,1,2,3,4].forEach(i=>{
    const el=document.getElementById('h'+i);
    if(!el) return;
    const done=today.includes(i);
    el.classList.toggle('checked',done);
    el.setAttribute('aria-checked',done);
  });
  const count=today.length;
  document.getElementById('htScoreNum').textContent=count+'/5';
  const lbl=document.getElementById('htScoreLbl');
  const scoreEl=document.getElementById('htScore');
  if(count===0){lbl.textContent='Označi aktivnosti koje si završio';scoreEl.classList.remove('perfect');}
  else if(count<3){lbl.textContent='Dobar početak — nastavi!';scoreEl.classList.remove('perfect');}
  else if(count<5){lbl.textContent='Odlično — još malo!';scoreEl.classList.remove('perfect');}
  else{lbl.textContent='Savršena sesija! 🇬🇧';scoreEl.classList.add('perfect');}
  updateStreak(data);
}

function updateStreak(data){
  const days=data.days||{};
  let streak=0;
  const now=new Date();
  for(let i=0;i<90;i++){
    const d=new Date(now);
    d.setDate(now.getDate()-i);
    const key=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    if(days[key]===true) streak++;
    else if(i>0) break; // 'skip' or undefined breaks the streak
  }
  document.getElementById('streakNum').textContent=streak;
}

/* ─── BACK TO TOP ────────────────────────────────── */
window.addEventListener('scroll',()=>{
  const btn=document.getElementById('backTop');
  if(btn) btn.classList.toggle('show',window.scrollY>400);
},{passive:true});

/* ─── MOBILE DRAWER ─────────────────────────────── */
function openMobDrawer(){document.getElementById('mobDrawer').classList.add('open');document.body.style.overflow='hidden';}
function closeMobDrawer(){document.getElementById('mobDrawer').classList.remove('open');document.body.style.overflow='';}
document.getElementById('mobDrawer').addEventListener('click',e=>{if(e.target===e.currentTarget)closeMobDrawer();});

/* ─── WEEKS TO MATURA CALCULATOR ─────────────────── */
function updateWeeksCalc(){
  const inp=document.getElementById('wcDate');
  const res=document.getElementById('wcResult');
  if(!inp.value){res.style.display='none';return;}
  const matura=new Date(inp.value);
  const now=new Date();
  now.setHours(0,0,0,0);
  const diff=Math.ceil((matura-now)/(1000*60*60*24));
  if(diff<0){res.style.display='block';res.innerHTML='<span style="color:var(--t3)">Taj datum je u prošlosti.</span>';return;}
  const weeks=Math.floor(diff/7);
  const days=diff%7;
  res.style.display='block';
  let phase='',phaseClass='phase-now',advice='';
  if(weeks>=8){
    phase='Faza 1–2';phaseClass='phase-now';
    advice='Imaš dovoljno vremena za sve faze normalnim tempom. Počni od Faze 1 i ne žuri.';
  } else if(weeks>=5){
    phase='Faza 2–3';phaseClass='phase-now';
    advice='Preskoci Fazu 1 — ideš ravno u Grammar Core. Tempo: jedno poglavlje svaki drugi dan.';
  } else if(weeks>=3){
    phase='Faza 3–4';phaseClass='phase-warn';
    advice='Fokus na Writing (Blok 4) i Reading strategije (Pogl. 17). Preskoci sitne detalje Bloka 3.';
  } else if(weeks>=1){
    phase='Krizni plan';phaseClass='phase-crit';
    advice='Samo Writing (Pogl. 13–14) i Reading (Pogl. 17). To su najveći bodovi. Sve ostalo je sekundarno.';
  } else {
    phase='Zadnji dani';phaseClass='phase-crit';
    advice='Nemoj učiti novo gradivo. Ponavljaj greške iz drillova i pogledaj Poglavlje 20 — Exam Survival.';
  }
  res.innerHTML=\`
    <b>\${diff} dana</b> (\${weeks} \${weeks===1?'tjedan':weeks<5?'tjedna':'tjedana'}\${days>0?', '+days+' '+(days===1?'dan':'dana'):''}) do mature<br>
    <span class="\${phaseClass}">Preporučena faza: \${phase}</span><br>
    <span style="color:var(--t2)">\${advice}</span>
  \`;
  // persist date
  try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.maturaDate=inp.value;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
}

/* ─── STREAK EXPORT (CANVAS) ─────────────────────── */
function exportStreak(){
  const data=getHabitData();
  const days=data.days||{};
  const streak=+document.getElementById('streakNum').textContent;

  const W=480,H=260;
  const canvas=document.createElement('canvas');
  canvas.width=W*2;canvas.height=H*2; // 2x for retina
  const ctx=canvas.getContext('2d');
  ctx.scale(2,2);

  // background
  ctx.fillStyle='#0A0D18';
  ctx.fillRect(0,0,W,H);

  // union jack top bar
  const barH=4;
  const segments=[
    {c:'#CF142B',x:0,w:W*0.3},{c:'#fff',x:W*0.3,w:W*0.04},
    {c:'#4F7BE8',x:W*0.34,w:W*0.32},{c:'#fff',x:W*0.66,w:W*0.04},
    {c:'#CF142B',x:W*0.7,w:W*0.3}
  ];
  segments.forEach(s=>{ctx.fillStyle=s.c;ctx.fillRect(s.x,0,s.w,barH);});

  // title
  ctx.fillStyle='#EEF0F8';
  ctx.font='bold 22px serif';
  ctx.fillText('Maturiraj.hr', 24, 44);

  // subtitle
  ctx.fillStyle='#4A5580';
  ctx.font='12px monospace';
  ctx.fillText('Engleski A · viša razina', 24, 62);

  // streak number — big
  ctx.fillStyle='#E8A838';
  ctx.font='bold 72px serif';
  ctx.fillText(streak, 24, 150);

  // streak label
  ctx.fillStyle='#8A95B8';
  ctx.font='13px monospace';
  ctx.fillText(streak===1?'dan zaredom':'dana zaredom', 24, 172);

  // draw last 30 days as small squares
  const now=new Date();
  const sqSize=16,sqGap=4,sqCols=15,sqRows=2;
  const startX=24,startY=195;
  for(let i=sqCols*sqRows-1;i>=0;i--){
    const d=new Date(now);
    d.setDate(now.getDate()-(sqCols*sqRows-1-i));
    const key=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    const col=i%sqCols,row=Math.floor(i/sqCols);
    const x=startX+col*(sqSize+sqGap);
    const y=startY+row*(sqSize+sqGap);
    const isToday=i===sqCols*sqRows-1;
    const state=days[key];
    ctx.fillStyle=state===true?'#4CAF7D':state==='skip'?'rgba(232,96,96,0.5)':isToday?'rgba(79,123,232,0.4)':'#0F1422';
    ctx.strokeStyle=isToday?'#4F7BE8':'transparent';
    ctx.lineWidth=1.5;
    ctx.beginPath();
    ctx.roundRect(x,y,sqSize,sqSize,3);
    ctx.fill();
    if(isToday) ctx.stroke();
    // draw × symbol for skipped
    if(state==='skip'){
      ctx.fillStyle='rgba(232,96,96,0.9)';
      ctx.font='bold 10px monospace';
      ctx.textAlign='center';
      ctx.fillText('×',x+sqSize/2,y+sqSize/2+4);
      ctx.textAlign='left';
    }
  }

  // maturiraj.hr watermark
  ctx.fillStyle='rgba(74,85,128,0.5)';
  ctx.font='10px monospace';
  ctx.fillText('maturiraj.hr', W-85, H-12);

  // download
  canvas.toBlob(blob=>{
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;a.download='maturiraj-streak-'+streak+'dana.png';
    a.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  },'image/png');
}

/* ─── INIT ─────────────────────────────────────── */
loadProgress();

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