// Maturiraj.hr — Engleski viša razina
// Poglavlje 16: Članak iRecenzija
// Auto-generirano — ne editirati ručno

export const meta = {
  id: 16,
  slug: "poglavlje16",
  title: "\u010clanak iRecenzija",
  subtitle: "Cjeline 2 i 3 \u00b7 180\u2013200 words \u00b7 engaging stil \u00b7 hook \u00b7 evaluacija \u00b7 preporuka",
  blok: 4,
  blokNaziv: "Writing",
  prev: 15,
  next: 17,
};

export const html = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maturiraj.hr — Engleski viša razina · Poglavlje 16</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
<style>
:root{
  --bg-base:#060810;--bg-surface:#0A0D18;--bg-elevated:#0F1422;--bg-card:#131929;--bg-hover:#192035;--bg-input:#0D1120;
  --bd:rgba(255,255,255,0.06);--bd-mid:rgba(255,255,255,0.10);--bd-light:rgba(255,255,255,0.18);
  --t1:#EEF0F8;--t2:#8A95B8;--t3:#4A5580;
  --union-red:#CF142B;--union-red-dim:rgba(207,20,43,0.12);--union-red-bd:rgba(207,20,43,0.28);
  --gold:#C9A227;--gold-dim:rgba(201,162,39,0.12);--gold-bd:rgba(201,162,39,0.28);
  --cream:#B8B9E2;--cream-dim:rgba(184,185,226,0.10);--cream-bd:rgba(184,185,226,0.22);
  --blue:#4F7BE8;--blue-dim:rgba(79,123,232,0.12);--blue-border:rgba(79,123,232,0.28);--blue-glow:rgba(79,123,232,0.05);
  --brit-green:#4CAF7D;--brit-green-dim:rgba(76,175,125,0.12);--brit-green-bd:rgba(76,175,125,0.28);
  --amber:#E8A838;--amber-dim:rgba(232,168,56,0.12);--amber-border:rgba(232,168,56,0.28);
  --red:#E86060;--red-dim:rgba(232,96,96,0.12);--red-border:rgba(232,96,96,0.28);
  --green:#52D688;--green-dim:rgba(82,214,136,0.12);--green-border:rgba(82,214,136,0.28);
  --violet:#A78BFA;--violet-dim:rgba(167,139,250,0.12);--violet-border:rgba(167,139,250,0.28);
  --font:'DM Sans',system-ui,sans-serif;--serif:'Playfair Display',Georgia,serif;--mono:'DM Mono','Fira Code',monospace;
  --r1:4px;--r2:8px;--r3:12px;--r4:18px;--sidebar:248px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg-base);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.union-bar{height:3px;background:linear-gradient(90deg,var(--union-red) 0%,var(--union-red) 30%,#fff 30%,#fff 34%,var(--blue) 34%,var(--blue) 66%,#fff 66%,#fff 70%,var(--union-red) 70%,var(--union-red) 100%);position:fixed;top:0;left:0;right:0;z-index:999}
.sidebar{width:var(--sidebar);background:var(--bg-surface);border-right:1px solid var(--bd);position:fixed;top:3px;left:0;height:calc(100vh - 3px);overflow-y:auto;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--bd-mid) transparent;z-index:100}
.sidebar::-webkit-scrollbar{width:3px}.sidebar::-webkit-scrollbar-thumb{background:var(--bd-mid);border-radius:2px}
.sb-brand{padding:22px 18px 16px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.sb-logo{width:30px;height:30px;background:linear-gradient(135deg,var(--union-red),var(--blue));border-radius:var(--r1);position:relative;overflow:hidden;flex-shrink:0}
.sb-logo::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 13h30M13 0v30M0 0l30 30M30 0L0 30' stroke='rgba(255,255,255,0.4)' stroke-width='2'/%3E%3C/path%3E%3C/svg%3E") center/cover}
.sb-name{font-family:var(--serif);font-size:14px;font-weight:700;color:var(--t1)}
.sb-sub{font-size:10px;color:var(--blue);margin-top:1px;font-family:var(--mono);letter-spacing:.5px}
.sb-label{font-family:var(--mono);font-size:9px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;padding:16px 18px 5px}
.sb-item{display:flex;align-items:center;gap:9px;padding:7px 18px;font-size:12.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.3}
.sb-item:hover{color:var(--t1);background:var(--bg-hover)}.sb-item.active{color:var(--blue);background:var(--blue-glow);border-left-color:var(--blue)}
.sb-item.done-ch{color:var(--brit-green)}.sb-item.done-ch .sb-dot{background:var(--brit-green);opacity:1}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.5}
.sb-footer{margin-top:auto;padding:12px 18px;border-top:1px solid var(--bd);font-size:10px;color:var(--t3);line-height:1.6;font-family:var(--mono)}
.main{margin-left:var(--sidebar);padding-top:3px}
.content-wrap{max-width:820px;margin:0 auto;padding:36px 48px 100px}
.breadcrumb{display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--t3);margin-bottom:28px;font-family:var(--mono)}
.bc-sep{opacity:.3}.bc-active{color:var(--blue)}
.tabs-wrap{display:flex;margin-bottom:6px;background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:4px;width:fit-content}
.tab{display:flex;align-items:center;gap:6px;padding:8px 20px;font-size:12.5px;font-weight:500;color:var(--t2);cursor:pointer;border-radius:var(--r1);transition:all .15s;white-space:nowrap;font-family:var(--mono)}
.tab:hover{color:var(--t1)}.tab.active{background:var(--blue);color:#fff;font-weight:700}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#060810;font-weight:700;flex-shrink:0}
.tab.done-tab .tab-check{display:inline-flex}
.layer{display:none}.layer.active{display:block;animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:6px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}.tab-prog-item.active{color:var(--blue);background:var(--blue-dim);border-color:var(--blue-border)}.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero{margin-bottom:32px;padding:36px 40px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--union-red) 0%,var(--union-red) 25%,#fff 25%,#fff 30%,var(--blue) 30%,var(--blue) 70%,#fff 70%,#fff 75%,var(--union-red) 75%)}
.hero::after{content:'16';position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:112px;font-weight:900;font-family:var(--serif);color:rgba(255,255,255,.025);pointer-events:none;user-select:none;line-height:1}
.hero-eyebrow{font-family:var(--mono);font-size:10px;color:var(--blue);letter-spacing:2px;margin-bottom:12px;text-transform:uppercase}
.hero-title{font-size:32px;font-weight:900;font-family:var(--serif);color:var(--t1);letter-spacing:-.5px;line-height:1.1;margin-bottom:10px}
.hero-title span{background:linear-gradient(135deg,var(--blue),var(--cream));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}.hb-level{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}.hb-chapter{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.hero-sub{font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:18px}
.progress-track{height:3px;background:var(--bd-mid);border-radius:2px;overflow:hidden;width:100%;max-width:420px}
.progress-bar{height:100%;background:linear-gradient(90deg,var(--union-red),var(--blue));border-radius:2px}
.tags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:28px}
.pill{display:inline-flex;align-items:center;padding:4px 12px;border-radius:var(--r1);font-size:11.5px;font-weight:600;font-family:var(--mono);border:1px solid}
.pill-blue{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}.pill-green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}.pill-gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}.pill-red{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}.pill-violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}.pill-amber{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.sec-label{font-family:var(--mono);font-size:9.5px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--bd)}
.stat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(172px,1fr));gap:10px;margin-bottom:28px}
.stat-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px;transition:border-color .15s,transform .15s}
.stat-card:hover{border-color:var(--bd-light);transform:translateY(-1px)}
.stat-icon{font-family:var(--mono);font-size:10px;font-weight:500;padding:3px 8px;border-radius:var(--r1);display:inline-flex;margin-bottom:10px}
.stat-icon.blue{background:var(--blue-dim);color:var(--blue)}.stat-icon.green{background:var(--brit-green-dim);color:var(--brit-green)}.stat-icon.gold{background:var(--gold-dim);color:var(--gold)}.stat-icon.red{background:var(--union-red-dim);color:var(--union-red)}.stat-icon.amber{background:var(--amber-dim);color:var(--amber)}.stat-icon.violet{background:var(--violet-dim);color:var(--violet)}
.stat-name{font-size:13px;font-weight:600;color:var(--t1);margin-bottom:5px;line-height:1.3}
.stat-desc{font-size:12px;color:var(--t2);line-height:1.5;font-family:var(--mono)}
.prose{font-size:14.5px;line-height:1.85;color:rgba(238,240,248,.82);margin-bottom:16px}
.prose b,.prose strong{color:var(--t1)}.prose em{color:var(--blue);font-style:normal}
/* CALLOUT */
.callout{display:flex;gap:12px;padding:14px 16px;border-radius:var(--r3);margin:14px 0;border:1px solid}
.callout-warn{background:var(--red-dim);border-color:var(--red-border)}.callout-tip{background:var(--amber-dim);border-color:var(--amber-border)}.callout-info{background:var(--blue-dim);border-color:var(--blue-border)}.callout-green{background:var(--brit-green-dim);border-color:var(--brit-green-bd)}
.callout-icon{font-size:15px;flex-shrink:0;margin-top:1px}.callout-body{flex:1}
.callout-title{font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:5px}
.callout-warn .callout-title{color:var(--red)}.callout-tip .callout-title{color:var(--amber)}.callout-info .callout-title{color:var(--blue)}.callout-green .callout-title{color:var(--brit-green)}
.callout-text{font-size:13px;line-height:1.7;color:var(--t2)}.callout-text b{color:var(--t1)}
/* PANIC */
.panic-box{background:linear-gradient(135deg,rgba(79,123,232,.05),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:24px 0}
.panic-hd{background:linear-gradient(90deg,var(--union-red),#1C3A8A);padding:11px 20px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:#fff;text-transform:uppercase}
.panic-body{padding:18px 20px}
.panic-step{display:flex;align-items:flex-start;gap:14px;padding:9px 0;border-bottom:1px solid rgba(79,123,232,.10)}
.panic-step:last-child{border-bottom:none}
.panic-num{width:24px;height:24px;border-radius:50%;background:var(--blue);color:#fff;font-family:var(--mono);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.panic-text{font-size:13px;color:rgba(238,240,248,.85);line-height:1.65}.panic-text b{color:var(--t1)}
/* REVEAL */
.reveal-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:8px;cursor:pointer;transition:border-color .15s}
.reveal-card:hover{border-color:var(--bd-light)}
.reveal-q{display:flex;align-items:center;justify-content:space-between;padding:13px 16px;font-size:13.5px;font-weight:600;color:var(--t1);gap:12px;user-select:none}
.rq-icon{font-size:16px;flex-shrink:0}.reveal-arrow{font-size:11px;color:var(--t3);transition:transform .2s;flex-shrink:0}
.reveal-card.open .reveal-arrow{transform:rotate(180deg)}
.reveal-ans{max-height:0;overflow:hidden;padding:0 16px;font-size:13px;color:var(--t2);line-height:1.7;background:var(--bg-surface);font-family:var(--mono);transition:max-height .3s ease,padding .3s ease;border-top:1px solid transparent}
.reveal-card.open .reveal-ans{max-height:700px;padding:14px 16px;border-top-color:var(--bd)}
.reveal-ans b{color:var(--t1)}.reveal-ans .ok{color:var(--green)}.reveal-ans .bad{color:var(--red)}.reveal-ans .note{color:var(--blue)}
/* CHECKPOINT */
.checkpoint-gate{background:var(--bg-card);border:2px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:28px 0}
.cg-hd{background:linear-gradient(90deg,var(--blue-dim),transparent);padding:14px 20px;border-bottom:1px solid var(--blue-border);display:flex;align-items:center;gap:10px}
.cg-icon{font-size:18px}.cg-title{font-family:var(--serif);font-size:15px;font-weight:700;color:var(--t1)}.cg-sub{font-family:var(--mono);font-size:10px;color:var(--blue);margin-top:2px}
.cg-body{padding:20px 24px}.cg-question{font-size:15px;font-weight:600;color:var(--t1);margin-bottom:16px;line-height:1.4}
.cg-opts{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}
.cg-opt{display:flex;align-items:center;gap:10px;padding:11px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-size:13px;color:var(--t2);cursor:pointer;transition:all .12s;user-select:none}
.cg-opt:hover:not(.cg-disabled){background:var(--bg-hover);border-color:var(--bd-light);color:var(--t1)}
.cg-opt.cg-correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green);pointer-events:none}.cg-opt.cg-wrong{background:var(--red-dim);border-color:var(--red-border);color:var(--red);pointer-events:none}.cg-opt.cg-disabled{pointer-events:none}
.cg-letter{width:22px;height:22px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3);font-family:var(--mono)}
.cg-feedback{display:none;padding:12px 14px;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;line-height:1.65;margin-top:4px}
.cg-feedback.show{display:block}.cg-feedback.pass{background:var(--green-dim);border:1px solid var(--green-border);color:var(--green)}.cg-feedback.fail{background:var(--red-dim);border:1px solid var(--red-border);color:var(--red)}
.cg-unlock{display:none;margin-top:14px;padding:11px 20px;background:var(--blue);color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;width:100%;transition:opacity .15s}
.cg-unlock:hover{opacity:.88}.cg-unlock.show{display:block}
/* TIP BAR */
.tip-bar{position:sticky;top:3px;z-index:90;background:var(--bg-surface);border-bottom:1px solid var(--bd);padding:8px 0;margin:-4px 0 24px;display:flex;overflow-x:auto;scrollbar-width:none}
.tip-bar::-webkit-scrollbar{display:none}
.tip-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10.5px;color:var(--t3);white-space:nowrap;padding:4px 14px;cursor:pointer;transition:color .15s;flex-shrink:0}
.tip-item:hover{color:var(--t2)}.tip-item.done{color:var(--green)}.tip-item.done .tip-dot{background:var(--green)}
.tip-dot{width:6px;height:6px;border-radius:50%;background:var(--t3);flex-shrink:0}
.tip-sep{color:var(--t3);opacity:.25;flex-shrink:0;align-self:center;font-size:11px}
/* ARTICLE/REVIEW MOCKUP */
.text-mockup{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:16px 0 24px}
.tm-header{background:var(--bg-surface);padding:14px 22px;border-bottom:1px solid var(--bd)}
.tm-pub{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:6px}
.tm-title{font-size:20px;font-weight:700;color:var(--t1);font-family:var(--serif);line-height:1.3;margin-bottom:6px}
.tm-meta{font-family:var(--mono);font-size:11px;color:var(--t3);display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.tm-stars{color:var(--gold);letter-spacing:2px}
.tm-body{padding:20px 24px;font-size:14px;line-height:1.85;font-family:var(--serif);color:rgba(238,240,248,.85)}
.tm-para{margin-bottom:12px}
.tm-annot{display:inline;font-family:var(--mono);font-size:9.5px;font-weight:700;padding:1px 5px;border-radius:var(--r1);vertical-align:middle;margin-left:4px}
.tm-annot.hook{background:var(--blue-dim);color:var(--blue)}
.tm-annot.desc{background:var(--brit-green-dim);color:var(--brit-green)}
.tm-annot.eval{background:var(--gold-dim);color:var(--gold)}
.tm-annot.rec{background:var(--violet-dim);color:var(--violet)}
.tm-annot.concl{background:var(--union-red-dim);color:var(--union-red)}
/* STRUCTURE TABLE */
.struct-table{width:100%;border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px;border-collapse:separate;border-spacing:0}
.struct-table th{background:var(--bg-surface);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:9px 14px;border-bottom:1px solid var(--bd-mid);text-align:left}
.struct-table td{padding:10px 14px;font-size:13px;border-bottom:1px solid var(--bd);vertical-align:top;line-height:1.6}
.struct-table tr:last-child td{border-bottom:none}
.struct-table tr:nth-child(even) td{background:rgba(255,255,255,.015)}
/* PHRASE BANK */
.phrase-bank{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px}
.pb-head{padding:10px 16px;background:var(--bg-surface);border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);text-transform:uppercase}
.pb-body{padding:14px 16px;display:flex;flex-direction:column;gap:8px}
.pb-item{display:flex;gap:10px;align-items:flex-start}
.pb-fn{font-family:var(--mono);font-size:10px;font-weight:700;padding:2px 7px;border-radius:var(--r1);flex-shrink:0;margin-top:2px}
.pb-fn.hook{background:var(--blue-dim);color:var(--blue)}.pb-fn.desc{background:var(--brit-green-dim);color:var(--brit-green)}.pb-fn.eval{background:var(--gold-dim);color:var(--gold)}.pb-fn.rec{background:var(--violet-dim);color:var(--violet)}.pb-fn.concl{background:var(--union-red-dim);color:var(--union-red)}.pb-fn.neg{background:var(--amber-dim);color:var(--amber)}
.pb-phrases{font-size:13px;color:var(--t2);line-height:1.7;font-family:var(--mono)}.pb-phrases b{color:var(--t1)}
/* CHECKLIST */
.checklist{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px 20px;margin:14px 0 24px}
.cl-item{display:flex;align-items:flex-start;gap:10px;padding:7px 0;border-bottom:1px solid var(--bd);cursor:pointer;user-select:none}
.cl-item:last-child{border-bottom:none}
.cl-box{width:18px;height:18px;border-radius:4px;border:1px solid var(--bd-light);flex-shrink:0;margin-top:1px;display:flex;align-items:center;justify-content:center;font-size:11px;transition:all .15s;color:transparent}
.cl-item.checked .cl-box{background:var(--brit-green);border-color:var(--brit-green);color:#060810}
.cl-text{font-size:13px;color:var(--t2);line-height:1.55}
.cl-item.checked .cl-text{color:var(--t3);text-decoration:line-through}
/* QUIZ */
.q-block{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:12px}
.q-head{padding:14px 18px;border-bottom:1px solid var(--bd)}
.q-meta{font-family:var(--mono);font-size:9.5px;color:var(--t3);font-weight:500;letter-spacing:.5px;margin-bottom:6px;text-transform:uppercase}
.q-text{font-size:14.5px;font-weight:600;color:var(--t1);line-height:1.5}
.q-opts{padding:12px 18px;display:flex;flex-direction:column;gap:6px}
.q-opt{display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-size:13.5px;color:var(--t2);cursor:pointer;transition:all .12s;user-select:none;font-family:var(--mono)}
.q-opt:hover:not(.disabled){background:var(--bg-hover);border-color:var(--bd-light);color:var(--t1)}
.q-opt.correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green)}.q-opt.wrong{background:var(--red-dim);border-color:var(--red-border);color:var(--red)}.q-opt.disabled{pointer-events:none}
.q-letter{width:22px;height:22px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3)}
.q-expl{display:none;padding:12px 18px;font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);font-family:var(--mono)}
.q-expl.show{display:block}
.expl-ok{background:var(--green-dim);border:1px solid var(--green-border);color:var(--green);padding:10px 14px;border-radius:var(--r2)}
/* MISC */
.discere-box{background:linear-gradient(135deg,rgba(79,123,232,.08),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:28px 0 0}
.discere-hd{background:var(--blue-dim);border-bottom:1px solid var(--blue-border);padding:11px 20px;display:flex;align-items:center;gap:10px}
.discere-hd-icon{font-size:16px}.discere-hd-text{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase}
.discere-body{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.discere-desc{font-size:13px;color:var(--t2);line-height:1.6;flex:1;min-width:180px}.discere-desc b{color:var(--t1)}
.discere-btn{font-family:var(--mono);font-size:12px;font-weight:700;padding:10px 20px;border-radius:var(--r2);background:var(--blue);color:#fff;border:none;cursor:pointer;text-decoration:none;display:inline-block}.discere-btn:hover{opacity:.85}
.nav-row{display:flex;justify-content:space-between;align-items:center;padding:24px 0 0;border-top:1px solid var(--bd);margin-top:28px;flex-wrap:wrap;gap:10px}
.nav-btn{font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t2);padding:9px 18px;border-radius:var(--r2);border:1px solid var(--bd-mid);cursor:pointer;transition:all .15s;background:var(--bg-card);text-decoration:none;display:inline-block}
.nav-btn:hover{color:var(--t1);border-color:var(--bd-light)}.nav-btn.primary{background:var(--blue);color:#fff;border-color:var(--blue)}.nav-btn.primary:hover{opacity:.88}
@keyframes confettiFall{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(110vh) rotate(720deg);opacity:0}}
.confetti-piece{position:fixed;top:-10px;pointer-events:none;z-index:9999;animation:confettiFall linear forwards}
.back-top{position:fixed;bottom:86px;right:24px;z-index:200;width:38px;height:38px;border-radius:50%;background:var(--bg-card);border:1px solid var(--bd-mid);color:var(--t3);font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;pointer-events:none;transition:opacity .2s,transform .2s,color .15s;box-shadow:0 2px 12px rgba(0,0,0,.3)}
.back-top.show{opacity:1;pointer-events:auto}.back-top:hover{color:var(--blue);border-color:var(--blue-border);transform:translateY(-2px)}
@media(min-width:721px){.back-top{right:32px;bottom:32px}}
.hamburger{display:none;position:fixed;bottom:22px;right:22px;z-index:300;width:50px;height:50px;background:var(--blue);border-radius:50%;border:none;cursor:pointer;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(79,123,232,.4);transition:transform .15s}
.hamburger:hover{transform:scale(1.08)}.hamburger svg{width:20px;height:20px}
.mob-drawer{display:none;position:fixed;inset:0;z-index:250;background:rgba(6,8,16,.95);backdrop-filter:blur(8px);flex-direction:column;padding:28px 24px;overflow-y:auto}
.mob-drawer.open{display:flex}
.mob-drawer-close{align-self:flex-end;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:8px 18px;font-family:var(--mono);font-size:12px;color:var(--t2);cursor:pointer;margin-bottom:20px}
.mob-drawer .sb-label{padding:14px 0 5px}.mob-drawer .sb-item{padding:10px 0;border-left:none;border-bottom:1px solid var(--bd)}
@media(max-width:720px){.hamburger{display:flex}.sidebar{display:none}.main{margin-left:0}}
@media(max-width:520px){.content-wrap{padding:24px 20px 80px}}
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
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(2)" style="cursor:pointer"><span class="sb-dot"></span> 02 · Kako koristiti skriptu</div>
  <div class="sb-label">// Blok 2 — Grammar Core</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(3)" style="cursor:pointer"><span class="sb-dot"></span> 03 · Vremena koja se miješaju</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(4)" style="cursor:pointer"><span class="sb-dot"></span> 04 · Perfect vremena</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(5)" style="cursor:pointer"><span class="sb-dot"></span> 05 · Conditionals</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(6)" style="cursor:pointer"><span class="sb-dot"></span> 06 · Passive, Reported Speech</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(7)" style="cursor:pointer"><span class="sb-dot"></span> 07 · Modals, Articles, Quantifiers</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(8)" style="cursor:pointer"><span class="sb-dot"></span> 08 · Prepositions i Linkers</div>
  <div class="sb-label">// Blok 3 — Use of English</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(9)" style="cursor:pointer"><span class="sb-dot"></span> 09 · Što zadatak testira</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(10)" style="cursor:pointer"><span class="sb-dot"></span> 10 · Gap fill i MCQ</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(11)" style="cursor:pointer"><span class="sb-dot"></span> 11 · Word formation</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(12)" style="cursor:pointer"><span class="sb-dot"></span> 12 · Najčešće zamke</div>
  <div class="sb-label">// Blok 4 — Writing</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(13)" style="cursor:pointer"><span class="sb-dot"></span> 13 · Dobar maturalni esej</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(14)" style="cursor:pointer"><span class="sb-dot"></span> 14 · Struktura eseja</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(15)" style="cursor:pointer"><span class="sb-dot"></span> 15 · Linking words i vocabulary</div>
  <div class="sb-item active" onclick="closeMobDrawer();navigateChapter(16)" style="cursor:pointer"><span class="sb-dot"></span> 16 · Greške + model essay</div>
  <div class="sb-label">// Blok 5 — Reading + Listening</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(17)" style="cursor:pointer"><span class="sb-dot"></span> 17 · Reading strategije</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(18)" style="cursor:pointer"><span class="sb-dot"></span> 18 · Listening strategije</div>
  <div class="sb-label">// Blok 6 — Vocab + Exam</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(19)" style="cursor:pointer"><span class="sb-dot"></span> 19 · Vocabulary for Matura</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(20)" style="cursor:pointer"><span class="sb-dot"></span> 20 · Final Exam Survival</div>
</div>




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
  <div class="sb-item done-ch" onclick="navigateChapter(2)" style="cursor:pointer"><span class="sb-dot"></span>02 · Kako koristiti skriptu</div>
  <div class="sb-label">// Blok 2 — Grammar Core</div>
  <div class="sb-item done-ch" onclick="navigateChapter(3)" style="cursor:pointer"><span class="sb-dot"></span>03 · Vremena koja se miješaju</div>
  <div class="sb-item done-ch" onclick="navigateChapter(4)" style="cursor:pointer"><span class="sb-dot"></span>04 · Perfect vremena</div>
  <div class="sb-item done-ch" onclick="navigateChapter(5)" style="cursor:pointer"><span class="sb-dot"></span>05 · Conditionals</div>
  <div class="sb-item done-ch" onclick="navigateChapter(6)" style="cursor:pointer"><span class="sb-dot"></span>06 · Passive, Reported Speech</div>
  <div class="sb-item done-ch" onclick="navigateChapter(7)" style="cursor:pointer"><span class="sb-dot"></span>07 · Modals, Articles, Quantifiers</div>
  <div class="sb-item done-ch" onclick="navigateChapter(8)" style="cursor:pointer"><span class="sb-dot"></span>08 · Prepositions i Linkers</div>
  <div class="sb-label">// Blok 3 — Use of English</div>
  <div class="sb-item done-ch" onclick="navigateChapter(9)" style="cursor:pointer"><span class="sb-dot"></span>09 · Što zadatak testira</div>
  <div class="sb-item done-ch" onclick="navigateChapter(10)" style="cursor:pointer"><span class="sb-dot"></span>10 · Gap fill i MCQ</div>
  <div class="sb-item done-ch" onclick="navigateChapter(11)" style="cursor:pointer"><span class="sb-dot"></span>11 · Word formation</div>
  <div class="sb-item done-ch" onclick="navigateChapter(12)" style="cursor:pointer"><span class="sb-dot"></span>12 · Najčešće zamke</div>
  <div class="sb-label">// Blok 4 — Writing</div>
  <div class="sb-item done-ch" onclick="navigateChapter(13)" style="cursor:pointer"><span class="sb-dot"></span>13 · Dobar maturalni esej</div>
  <div class="sb-item done-ch" onclick="navigateChapter(14)" style="cursor:pointer"><span class="sb-dot"></span>14 · Struktura eseja</div>
  <div class="sb-item done-ch" onclick="navigateChapter(15)" style="cursor:pointer"><span class="sb-dot"></span>15 · Linking words i vocabulary</div>
  <div class="sb-item active" onclick="navigateChapter(16)" style="cursor:pointer"><span class="sb-dot"></span>16 · Greške + model essay</div>
  <div class="sb-label">// Blok 5 — Reading + Listening</div>
  <div class="sb-item" onclick="navigateChapter(17)" style="cursor:pointer"><span class="sb-dot"></span>17 · Reading strategije</div>
  <div class="sb-item" onclick="navigateChapter(18)" style="cursor:pointer"><span class="sb-dot"></span>18 · Listening strategije</div>
  <div class="sb-label">// Blok 6 — Vocab + Exam</div>
  <div class="sb-item" onclick="navigateChapter(19)" style="cursor:pointer"><span class="sb-dot"></span>19 · Vocabulary for Matura</div>
  <div class="sb-item" onclick="navigateChapter(20)" style="cursor:pointer"><span class="sb-dot"></span>20 · Final Exam Survival</div>
<div class="sb-footer">16 / 20 · greške + model essay<br>maturiraj.hr</div>
</nav>


<button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh">↑</button>
<main class="main">
<div class="content-wrap">
  <div class="breadcrumb">
    <span style="cursor:pointer" onclick="backToList()">← chapters</span>
    <span class="bc-sep">/</span><span>blok-4</span>
    <span class="bc-sep">/</span><span class="bc-active">clanak-i-recenzija</span>
  </div>
  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" onkeydown="tabKey(event,0)" tabindex="0">⚡ 2 min<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" onkeydown="tabKey(event,1)" tabindex="-1">📖 Strategija<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" onkeydown="tabKey(event,2)" tabindex="-1">✍️ Primjeri i kviz<span class="tab-check">✓</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Pregled</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Strategija i fraze</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Primjeri i kviz</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~35 min
    </div>
  </div>
  <!-- ═══ LAYER 0 ═══ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 16 of 20 · blok 4 — writing · završno poglavlje</div>
      <h1 class="hero-title">Članak i<br><span>Recenzija</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~2 min</span>
        <span class="hero-badge hb-level">viša razina</span>
        <span class="hero-badge hb-chapter">16 / 20</span>
      </div>
      <p class="hero-sub">Cjeline 2 i 3 · 180–200 words · engaging stil · hook · evaluacija · preporuka</p>
      <div class="progress-track"><div class="progress-bar" style="width:80%"></div></div>
    </div>
    <div class="tags">
      <span class="pill pill-blue">Članak — struktura</span>
      <span class="pill pill-green">Recenzija — evaluacija</span>
      <span class="pill pill-gold">Hook rečenica</span>
      <span class="pill pill-violet">Upitne rečenice</span>
      <span class="pill pill-amber">Preporuka</span>
      <span class="pill pill-red">Razlika esej vs članak</span>
    </div>
    <div class="sec-label">// članak vs recenzija — ključne razlike</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon blue">članak</div><div class="stat-name">Članak (article)</div><div class="stat-desc">Pišeš za časopis, blog ili školu. <b>Naslova obavezan.</b> Ton može biti živahniji, s pitanjima i izravnim obraćanjem čitatelju</div></div>
      <div class="stat-card"><div class="stat-icon green">recenz.</div><div class="stat-name">Recenzija (review)</div><div class="stat-desc">Ocjenjuješ film, restoran, knjigu, igru... <b>Naslova obavezan.</b> Mora sadržavati opis + evaluaciju + preporuku</div></div>
      <div class="stat-card"><div class="stat-icon gold">hook</div><div class="stat-name">Hook rečenica</div><div class="stat-desc">I članak i recenzija počinju udarnom rečenicom koja privlači pažnju — pitanje, iznenađujuća tvrdnja, ili živa slika</div></div>
      <div class="stat-card"><div class="stat-icon violet">≠ esej</div><div class="stat-name">Nije esej!</div><div class="stat-desc">Za razliku od eseja, članak/recenzija može koristiti <b>upitne rečenice</b>, <b>"you"</b>, <b>živopisan vokabular</b> i osoban ton</div></div>
    </div>
    <div class="sec-label">// 5 panic-proof pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🇬🇧 članak i recenzija — 5 ključnih pravila</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Naslov je obavezan.</b> Bez naslova = automatski -1 za zadatak. Naslov mora biti upečatljiv i ne smije biti ista rečenica kao uvod.</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Počni s hook rečenicom.</b> "Have you ever wondered...?" / "Imagine..." / "Every year, millions of people..." — privlači pažnju odmah. Dosadan uvod = loš dojam.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Za recenziju: uvijek opis + evaluacija + preporuka.</b> Bez evaluacije (je li dobro ili loše i zašto?) nemaš recenziju — imaš samo opis.</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Smije se koristiti "you" i upitne rečenice.</b> "What makes this film so special?" / "You might be surprised to learn..." — to je stil koji ocjenjivači nagrađuju.</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>180–200 words uključuje naslov.</b> Naslov broji kao dio ukupnog broja. Uračunaj ga u planiranje.</div></div>
      </div>
    </div>
    <div class="sec-label">// brzi pregled</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🔵</span><span>Članak — što ga čini dobrim</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Naslov:</b> upečatljiv, ne suhoparan. "Why Social Media Is Changing Our Lives" ne "Social Media"<br>
        <b>Hook:</b> počni pitanjem ili šokantnom činjenicom<br>
        <b>Ton:</b> može biti osoban ("you", "we"), ne previše formalan<br>
        <b>Struktura:</b> uvod (hook + tema) → razvoj (2–3 aspekta) → zaključak (poruka/poziv)<br>
        <b>Vokabular:</b> živopisan, raznolik — ovo nije esej, možeš biti kreativniji<br><br>
        <span class="note">Razlika od eseja: Članak NIJE for-and-against — iznosi temu iz jednog kuta s entuzijazmom.</span>
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟡</span><span>Recenzija — što mora sadržavati</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Naslov:</b> uključuje naziv i tip: "The Dark Knight — A Cinematic Masterpiece"<br>
        <b>Uvod/opis:</b> O čemu je? Tko je stvorio? Kada/gdje?<br>
        <b>Evaluacija:</b> Što je dobro? Što je loše? Zašto? Ovo je srce recenzije!<br>
        <b>Preporuka:</b> Komu biste preporučili? Vrijedi li gledati/čitati/posjetiti?<br><br>
        <span class="bad">Bez preporuke</span> = nepotpuna recenzija → gubiš bodove za sadržaj<br>
        <span class="note">Možeš imati i negativnu preporuku: "Unless you enjoy confusing plots, I would not recommend this film."</span>
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟣</span><span>Hook rečenice — 6 tipova koje rade</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Pitanje:</b> "Have you ever sat in a cinema feeling completely transported to another world?"<br>
        <b>Šokantna činjenica:</b> "Every year, over 2 billion people visit a museum — yet many leave feeling bored."<br>
        <b>Imaginacija:</b> "Imagine a restaurant where every dish tells a story."<br>
        <b>Kontrast:</b> "In a world obsessed with technology, one café has banned smartphones entirely."<br>
        <b>Citat:</b> "As one critic put it, 'this is the book of the decade' — and they were not wrong."<br>
        <b>Izravno obraćanje:</b> "You have probably heard of [tema]. But do you really know what it involves?"
      </div>
    </div>
    <div class="sec-label" style="margin-top:28px">// checkpoint</div>
    <div class="checkpoint-gate" id="cgBlock">
      <div class="cg-hd"><div class="cg-icon">🔐</div><div><div class="cg-title">Checkpoint — prolaznica</div><div class="cg-sub">Odgovori točno da otključaš Strategiju</div></div></div>
      <div class="cg-body">
        <div class="cg-question">Koja NIJE tipična karakteristika članka (za razliku od eseja)?</div>
        <div class="cg-opts" role="group">
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">A</div>Upečatljiv naslov</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">B</div>Upitne rečenice i obraćanje čitatelju</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,true)"><div class="cg-letter">C</div>Strogi for-and-against format s oba stajališta</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">D</div>Hook rečenica na početku</div>
        </div>
        <div class="cg-feedback" id="cgFb" aria-live="polite"></div>
        <button class="cg-unlock" id="cgBtn" onclick="switchTab(1)">Nastavi na Strategiju →</button>
      </div>
    </div>
    <div class="nav-row">
      <a href="poglavlje15.html" class="nav-btn">← Poglavlje 15</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Strategija i fraze →</span>
    </div>
  </div><!-- /l0 -->

  <!-- ═══ LAYER 1 ═══ -->
  <div class="layer" id="l1">
    <div class="tip-bar">
      <div class="tip-item" id="tip-0" onclick="tipScroll('sec-article-struct')"><span class="tip-dot"></span>Struktura članka</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-1" onclick="tipScroll('sec-review-struct')"><span class="tip-dot"></span>Struktura recenzije</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-2" onclick="tipScroll('sec-hooks')"><span class="tip-dot"></span>Hooks i naslovi</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-3" onclick="tipScroll('sec-article-phrases')"><span class="tip-dot"></span>Fraze za članak</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-4" onclick="tipScroll('sec-review-phrases')"><span class="tip-dot"></span>Fraze za recenziju</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-5" onclick="tipScroll('sec-vocab-upgrade')"><span class="tip-dot"></span>Vokabular upgrade</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-6" onclick="tipScroll('sec-vs-essay')"><span class="tip-dot"></span>Vs esej</div>
    </div>

    <!-- STRUKTURA ČLANKA -->
    <div id="sec-article-struct" class="sec-label">// struktura članka — 4 dijela</div>
    <table class="struct-table">
      <thead><tr><th>Dio</th><th>Sadržaj</th><th>Primjer</th><th>~Br. words</th></tr></thead>
      <tbody>
        <tr>
          <td style="font-weight:700;color:var(--t1)">Naslov</td>
          <td style="color:var(--t2)">Upečatljiv, specifičan, ne suhoparan. Smije biti pitanje ili igra riječima.</td>
          <td style="font-style:italic;color:var(--blue);font-size:12.5px">"The Secret Language of Cities"<br>"Why We All Need to Unplug"</td>
          <td style="font-family:var(--mono);color:var(--t3);font-size:12px">3–6</td>
        </tr>
        <tr>
          <td style="font-weight:700;color:var(--t1)">Uvod</td>
          <td style="color:var(--t2)">Hook rečenica + najava teme. Privlači pažnju, uspostavlja ton.</td>
          <td style="font-style:italic;color:var(--blue);font-size:12.5px">"Have you ever wondered why...? Every year, thousands of people..."</td>
          <td style="font-family:var(--mono);color:var(--t3);font-size:12px">30–40</td>
        </tr>
        <tr>
          <td style="font-weight:700;color:var(--t1)">Razvoj</td>
          <td style="color:var(--t2)">2–3 aspekta teme, svaki s elaboracijom i primjerom. Živopisan vokabular.</td>
          <td style="font-style:italic;color:var(--blue);font-size:12.5px">"One of the most fascinating aspects... Furthermore,... Consider, for example,..."</td>
          <td style="font-family:var(--mono);color:var(--t3);font-size:12px">100–120</td>
        </tr>
        <tr>
          <td style="font-weight:700;color:var(--t1)">Zaključak</td>
          <td style="color:var(--t2)">Sažetak poruke + poziv na akciju ili misao za razmišljanje.</td>
          <td style="font-style:italic;color:var(--blue);font-size:12.5px">"Next time you... / Perhaps it is time we all... / The question is not whether, but how..."</td>
          <td style="font-family:var(--mono);color:var(--t3);font-size:12px">25–35</td>
        </tr>
      </tbody>
    </table>

    <!-- STRUKTURA RECENZIJE -->
    <div id="sec-review-struct" class="sec-label" style="margin-top:36px">// struktura recenzije — opis + evaluacija + preporuka</div>
    <table class="struct-table">
      <thead><tr><th>Dio</th><th>Sadržaj</th><th>Primjer</th><th>~Br. words</th></tr></thead>
      <tbody>
        <tr>
          <td style="font-weight:700;color:var(--t1)">Naslov</td>
          <td style="color:var(--t2)">Naziv + podnaslov koji nagovještava ocjenu</td>
          <td style="font-style:italic;color:var(--blue);font-size:12.5px">"The Grand Budapest Hotel — A Visual Feast"<br>"La Piazza — Mixed Feelings"</td>
          <td style="font-family:var(--mono);color:var(--t3);font-size:12px">4–8</td>
        </tr>
        <tr>
          <td style="font-weight:700;color:var(--t1)">Opis</td>
          <td style="color:var(--t2)">Što je predmet recenzije? Kratki kontekst (autor, žanr, vrsta). Bez spoilera!</td>
          <td style="font-style:italic;color:var(--blue);font-size:12.5px">"Set in a fictional European country between the wars, this film follows..."</td>
          <td style="font-family:var(--mono);color:var(--t3);font-size:12px">35–45</td>
        </tr>
        <tr>
          <td style="font-weight:700;color:var(--t1)">Evaluacija +</td>
          <td style="color:var(--t2)">Što je odlično? Specifični razlozi zašto. Primjeri iz sadržaja.</td>
          <td style="font-style:italic;color:var(--blue);font-size:12.5px">"The performances are outstanding, particularly... The soundtrack perfectly captures..."</td>
          <td style="font-family:var(--mono);color:var(--t3);font-size:12px">40–50</td>
        </tr>
        <tr>
          <td style="font-weight:700;color:var(--t1)">Evaluacija −</td>
          <td style="color:var(--t2)">Što je slabije? (Čak i pozitivna recenzija treba jednu slabost za uvjerljivost.)</td>
          <td style="font-style:italic;color:var(--blue);font-size:12.5px">"However, the second half of the film tends to drag somewhat..."</td>
          <td style="font-family:var(--mono);color:var(--t3);font-size:12px">25–35</td>
        </tr>
        <tr>
          <td style="font-weight:700;color:var(--t1)">Preporuka</td>
          <td style="color:var(--t2)">Komu i zašto preporučuješ (ili ne)? Konačna ocjena u riječima.</td>
          <td style="font-style:italic;color:var(--blue);font-size:12.5px">"I would highly recommend this to anyone who... Overall, a must-see for..."</td>
          <td style="font-family:var(--mono);color:var(--t3);font-size:12px">25–30</td>
        </tr>
      </tbody>
    </table>
    <div class="callout callout-warn">
      <div class="callout-icon">⚠️</div>
      <div class="callout-body">
        <div class="callout-title">Recenzija bez evaluacije = samo opis = loš sadržaj</div>
        <div class="callout-text">
          <b>Samo opis:</b> "The restaurant is located in the city centre. It serves Italian food. There are many dishes on the menu." → 2/5 za sadržaj<br>
          <b>Evaluacija:</b> "The pasta dishes were exceptional — cooked to perfection and seasoned with remarkable precision. However, the desserts were disappointingly ordinary." → 4–5/5
        </div>
      </div>
    </div>

    <!-- HOOKS I NASLOVI -->
    <div id="sec-hooks" class="sec-label" style="margin-top:36px">// hooks i naslovi — kako privući pažnju</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 20px">
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--blue);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">NASLOVI — FORMULE</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.9;font-style:italic">
          "<span style="color:var(--t1)">The Art of [topic]</span>"<br>
          "<span style="color:var(--t1)">Why [topic] Matters More Than Ever</span>"<br>
          "<span style="color:var(--t1)">[Title]: A [adj] Experience</span>"<br>
          "<span style="color:var(--t1)">The [adj] Truth About [topic]</span>"<br>
          "<span style="color:var(--t1)">How [topic] Is Changing [area]</span>"<br>
          "<span style="color:var(--t1)">In Praise of [topic]</span>"
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--gold);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">HOOK REČENICE — TIPOVI</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.9">
          <b style="color:var(--t1)">Pitanje:</b> <span style="font-style:italic">Have you ever...?</span><br>
          <b style="color:var(--t1)">Imaginacija:</b> <span style="font-style:italic">Imagine a world where...</span><br>
          <b style="color:var(--t1)">Statistika:</b> <span style="font-style:italic">Every year, over X people...</span><br>
          <b style="color:var(--t1)">Kontrast:</b> <span style="font-style:italic">While most people..., few realise...</span><br>
          <b style="color:var(--t1)">Tvrdnja:</b> <span style="font-style:italic">There is something magical about...</span><br>
          <b style="color:var(--t1)">Obraćanje:</b> <span style="font-style:italic">You have probably heard of...</span>
        </div>
      </div>
    </div>

    <!-- FRAZE ZA ČLANAK -->
    <div id="sec-article-phrases" class="sec-label" style="margin-top:36px">// fraze za članak — po funkciji</div>
    <div class="phrase-bank">
      <div class="pb-head">ARTICLE PHRASES — FUNKCIJAMA ORGANIZIRANE</div>
      <div class="pb-body">
        <div class="pb-item"><span class="pb-fn hook">Hook</span><div class="pb-phrases"><b>Have you ever wondered why...?</b> · Imagine a world where... · There is something truly remarkable about... · Every year, millions of people...</div></div>
        <div class="pb-item"><span class="pb-fn desc">najava</span><div class="pb-phrases"><b>In this article, I will explore...</b> · This is a topic that affects us all. · The following pages will shed light on...</div></div>
        <div class="pb-item"><span class="pb-fn eval">razvoj</span><div class="pb-phrases"><b>One of the most fascinating aspects of X is...</b> · What makes X so remarkable is... · Consider, for example,... · It is perhaps surprising that...</div></div>
        <div class="pb-item"><span class="pb-fn eval">čitatelj</span><div class="pb-phrases"><b>You may be surprised to learn that...</b> · We often take for granted... · Next time you [do X], consider... · Ask yourself: when did you last...?</div></div>
        <div class="pb-item"><span class="pb-fn concl">zaključak</span><div class="pb-phrases"><b>Perhaps it is time we all reconsidered...</b> · The question is not whether, but how... · Next time you..., remember that... · The future of X depends on...</div></div>
      </div>
    </div>

    <!-- FRAZE ZA RECENZIJU -->
    <div id="sec-review-phrases" class="sec-label" style="margin-top:36px">// fraze za recenziju — evaluacija i preporuka</div>
    <div class="phrase-bank">
      <div class="pb-head">REVIEW PHRASES — EVALUACIJA I PREPORUKA</div>
      <div class="pb-body">
        <div class="pb-item"><span class="pb-fn desc">opis</span><div class="pb-phrases"><b>Set in [location/period], this [film/book/restaurant] follows...</b> · Written by / Directed by / Located in... · The story centres on... · The menu offers...</div></div>
        <div class="pb-item"><span class="pb-fn eval">pozitivno</span><div class="pb-phrases"><b>The performances are outstanding, particularly...</b> · One of the highlights is undoubtedly... · What sets X apart is... · The [aspect] is nothing short of brilliant. · Particularly impressive is...</div></div>
        <div class="pb-item"><span class="pb-fn neg">negativno</span><div class="pb-phrases"><b>However, it must be said that...</b> · The [aspect] leaves something to be desired. · Unfortunately, [aspect] tends to... · One minor drawback is... · The [aspect] is somewhat disappointing.</div></div>
        <div class="pb-item"><span class="pb-fn rec">preporuka</span><div class="pb-phrases"><b>I would highly recommend this to anyone who enjoys...</b> · Overall, this is a must-see/read/visit for... · Whether you are a fan of [genre] or not... · For those looking for [experience], look no further.</div></div>
        <div class="pb-item"><span class="pb-fn neg">negativna preporuka</span><div class="pb-phrases"><b>Unless you have a particular interest in [topic], this may not be for you.</b> · Despite its flaws, it is still worth... · While not without its problems, X remains...</div></div>
      </div>
    </div>

    <!-- VOKABULAR UPGRADE -->
    <div id="sec-vocab-upgrade" class="sec-label" style="margin-top:36px">// vokabular upgrade — od prosječnog do izvrsnog</div>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 20px">
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)">
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--red);border-right:1px solid var(--bd);background:var(--bg-surface)">PROSJEČNO</div>
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--brit-green);background:var(--bg-surface)">IZVRSNO</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--red);border-right:1px solid var(--bd);font-family:var(--mono)">The film was very good</div><div style="padding:9px 14px;font-size:13px;color:var(--brit-green);font-family:var(--mono)">The film was utterly captivating / gripping / enthralling</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--red);border-right:1px solid var(--bd);font-family:var(--mono)">The food was bad</div><div style="padding:9px 14px;font-size:13px;color:var(--brit-green);font-family:var(--mono)">The food was a profound disappointment / left much to be desired</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--red);border-right:1px solid var(--bd);font-family:var(--mono)">The book is interesting</div><div style="padding:9px 14px;font-size:13px;color:var(--brit-green);font-family:var(--mono)">The book is thought-provoking / intellectually stimulating</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--red);border-right:1px solid var(--bd);font-family:var(--mono)">I liked the acting</div><div style="padding:9px 14px;font-size:13px;color:var(--brit-green);font-family:var(--mono)">The performances were nothing short of exceptional</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--red);border-right:1px solid var(--bd);font-family:var(--mono)">The restaurant is nice</div><div style="padding:9px 14px;font-size:13px;color:var(--brit-green);font-family:var(--mono)">The atmosphere is warm and inviting / elegant and understated</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr"><div style="padding:9px 14px;font-size:13px;color:var(--red);border-right:1px solid var(--bd);font-family:var(--mono)">You should go</div><div style="padding:9px 14px;font-size:13px;color:var(--brit-green);font-family:var(--mono)">I would wholeheartedly recommend this to anyone seeking...</div></div>
    </div>

    <!-- VS ESEJ -->
    <div id="sec-vs-essay" class="sec-label" style="margin-top:36px">// članak/recenzija vs esej — ključne razlike</div>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px">
      <div style="display:grid;grid-template-columns:160px 1fr 1fr;border-bottom:1px solid var(--bd)">
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);border-right:1px solid var(--bd);background:var(--bg-surface)">ELEMENT</div>
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--blue);border-right:1px solid var(--bd);background:var(--bg-surface)">ESEJ</div>
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--gold);background:var(--bg-surface)">ČLANAK / RECENZIJA</div>
      </div>
      <div style="display:grid;grid-template-columns:160px 1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:12.5px;color:var(--t2);border-right:1px solid var(--bd);font-weight:600">Naslov</div><div style="padding:9px 14px;font-size:13px;color:var(--red);border-right:1px solid var(--bd)">❌ Nema naslova</div><div style="padding:9px 14px;font-size:13px;color:var(--brit-green)">✓ Obavezan naslov</div></div>
      <div style="display:grid;grid-template-columns:160px 1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:12.5px;color:var(--t2);border-right:1px solid var(--bd);font-weight:600">Ton</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd)">Formalan, neutralan</div><div style="padding:9px 14px;font-size:13px;color:var(--t1)">Može biti osoban, živopisan</div></div>
      <div style="display:grid;grid-template-columns:160px 1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:12.5px;color:var(--t2);border-right:1px solid var(--bd);font-weight:600">"You" / pitanja</div><div style="padding:9px 14px;font-size:13px;color:var(--red);border-right:1px solid var(--bd)">❌ Izbjegavaj</div><div style="padding:9px 14px;font-size:13px;color:var(--brit-green)">✓ Preporučuje se</div></div>
      <div style="display:grid;grid-template-columns:160px 1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:12.5px;color:var(--t2);border-right:1px solid var(--bd);font-weight:600">Kontrakcije</div><div style="padding:9px 14px;font-size:13px;color:var(--red);border-right:1px solid var(--bd)">❌ Ne</div><div style="padding:9px 14px;font-size:13px;color:var(--amber)">⚠ Umjereno OK</div></div>
      <div style="display:grid;grid-template-columns:160px 1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:12.5px;color:var(--t2);border-right:1px solid var(--bd);font-weight:600">Struktura</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd)">Za / Kontra / Zaključak</div><div style="padding:9px 14px;font-size:13px;color:var(--t1)">Fleksibilna, fokusirana</div></div>
      <div style="display:grid;grid-template-columns:160px 1fr 1fr"><div style="padding:9px 14px;font-size:12.5px;color:var(--t2);border-right:1px solid var(--bd);font-weight:600">Preporuka</div><div style="padding:9px 14px;font-size:13px;color:var(--red);border-right:1px solid var(--bd)">❌ Nema</div><div style="padding:9px 14px;font-size:13px;color:var(--brit-green)">✓ Obavezna u recenziji</div></div>
    </div>

    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🎯</div><div class="discere-hd-text">Vježbaj pisanje</div></div>
      <div class="discere-body">
        <div class="discere-desc">Napiši članak ili recenziju prema predlošku u Tab Primjeri i kviz. Provjeri s checklistom i usporedi s etalon primjerom.</div>
        <span class="discere-btn" onclick="switchTab(2)" style="cursor:pointer">Primjeri i kviz →</span>
      </div>
    </div>

    <!-- VOCAB BOX -->
    <div style="background:var(--bg-card);border:1px solid var(--gold-bd);border-radius:var(--r4);overflow:hidden;margin:28px 0 8px">
      <div style="padding:10px 16px;background:var(--gold-dim);border-bottom:1px solid var(--gold-bd);display:flex;align-items:center;gap:10px">
        <span style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--gold);text-transform:uppercase">📝 Vokabular za članak i recenzija</span>
        <span style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-left:auto">direktno primjenjivo na ispitu</span>
      </div>
      <div style="padding:4px 16px 14px">
          <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase;margin:10px 0 6px">Hook rečenice — počni upečatljivo</div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">When did you last...?</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">retorično pitanje za hook</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">Few experiences can rival...</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">uvod koji stvara znatiželju</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">It is rare to encounter...</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">sugestija ekskluzivnosti</span>
          </div>
          <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase;margin:10px 0 6px">Evaluacija — nijansirana ocjena</div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">the standout feature is undoubtedly</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">najistaknutija karakteristika je nedvojbeno</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">falls short of expectations in</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">ne ispunjava očekivanja u pogledu</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">leaves something to be desired</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">ostavlja prostora za poboljšanje</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">more than compensates for</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">više nego nadoknađuje</span>
          </div>
          <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase;margin:10px 0 6px">Preporuka</div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">would appeal to anyone who</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">privući će svakoga tko</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">I would wholeheartedly recommend</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">toplo preporučujem</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">is well worth the price of admission</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">vrijedi svake lipe</span>
          </div>
      </div>
      <div style="padding:8px 16px;background:var(--bg-input);border-top:1px solid var(--bd);font-family:var(--mono);font-size:11px;color:var(--t3)">10 izraza za živopisan, engažiran stil</div>
    </div>

    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">← Pregled</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Primjeri i kviz →</span>
    </div>
  </div><!-- /l1 -->
  <!-- ═══ LAYER 2 ═══ -->
  <div class="layer" id="l2">
    <div class="sec-label">// primjer etalon recenzije</div>
    <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:14px">Zadatak: Napiši recenziju filma, knjige ili restorana koji si nedavno posjetio/la za školski časopis.</p>

    <div class="text-mockup">
      <div class="tm-header">
        <div class="tm-pub">School Magazine · Review Section · ~175 words</div>
        <div class="tm-title">The Grand Voyage — A Film Well Worth Your Time</div>
        <div class="tm-meta">
          <span>Film review</span>
          <span class="tm-stars">★★★★☆</span>
          <span>Reviewed by: A. Kovač</span>
        </div>
      </div>
      <div class="tm-body">
        <div class="tm-para">
          Have you ever watched a film that stays with you long after the credits roll? <span class="tm-annot hook">HOOK</span> The Grand Voyage, directed by acclaimed French director Ismaël Ferroukhi, is precisely that kind of film.
        </div>
        <div class="tm-para">
          The story follows Reda, a French teenager of Moroccan descent, who is forced to accompany his elderly father on a pilgrimage from France to Mecca. <span class="tm-annot desc">OPIS</span> What begins as a reluctant road trip gradually transforms into a deeply moving exploration of identity, faith and family bonds.
        </div>
        <div class="tm-para">
          The film's greatest strength lies in its restraint. <span class="tm-annot eval">EVALUACIJA +</span> Rather than resorting to melodrama, Ferroukhi allows the relationship between father and son to develop naturally, resulting in performances of remarkable authenticity. The film is beautifully shot, with the landscapes of southern Europe and North Africa forming a visually striking backdrop.
        </div>
        <div class="tm-para">
          However, some viewers may find the slow pacing challenging, particularly in the first act. <span class="tm-annot eval">EVALUACIJA −</span> Those expecting a fast-moving narrative may be disappointed.
        </div>
        <div class="tm-para">
          Despite this, I would wholeheartedly recommend The Grand Voyage to anyone who appreciates thoughtful, character-driven cinema. <span class="tm-annot rec">PREPORUKA</span> It is a film that lingers in the memory long after the final scene.
        </div>
      </div>
    </div>

    <!-- DRUGI ETALON: RECENZIJA RESTORANA -->
    <div class="sec-label" style="margin-top:28px">// drugi etalon — recenzija restorana</div>
    <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:14px">Isti tip zadatka, drugačija tema — restoran. Prikazuje kako struktura ostaje ista bez obzira na predmet recenzije.</p>

    <div class="text-mockup">
      <div class="tm-header">
        <div class="tm-pub">School Magazine · Review Section · ~155 words</div>
        <div class="tm-title">Konoba Stari Grad — A Hidden Gem Worth Every Kuna</div>
        <div class="tm-meta">
          <span>Restaurant review</span>
          <span class="tm-stars">★★★★★</span>
          <span>Reviewed by: L. Babić</span>
        </div>
      </div>
      <div class="tm-body">
        <div class="tm-para">
          When was the last time a meal made you genuinely forget about everything else? <span class="tm-annot hook">HOOK</span> That is precisely the effect that Konoba Stari Grad — a small, family-run restaurant tucked away in the old quarter of the city — had on me during a recent visit.
        </div>
        <div class="tm-para">
          The menu focuses on traditional Dalmatian cuisine, with an emphasis on locally sourced seafood and seasonal ingredients. <span class="tm-annot desc">OPIS</span> The grilled sea bass, served with a herb-infused olive oil and a side of blitva, was cooked to perfection — fresh, simple and full of flavour.
        </div>
        <div class="tm-para">
          The atmosphere is equally impressive. <span class="tm-annot eval">EVALUACIJA +</span> The stone walls, candlelit tables and soft background music create an intimate setting that feels authentically Mediterranean rather than merely decorative. The service, too, was warm and attentive without being intrusive.
        </div>
        <div class="tm-para">
          The only minor drawback is that the restaurant is quite small, meaning reservations are essential, particularly at weekends. <span class="tm-annot eval-neg" style="background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)">EVALUACIJA −</span>
        </div>
        <div class="tm-para">
          Overall, Konoba Stari Grad offers an exceptional dining experience that I would enthusiastically recommend to anyone seeking authentic local cuisine in an unpretentious setting. <span class="tm-annot rec">PREPORUKA</span> Book well in advance — it is well worth the effort.
        </div>
      </div>
    </div>

    <!-- ANALIZA RECENZIJE RESTORANA -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0 24px">
      <div style="background:var(--bg-card);border:1px solid var(--brit-green-bd);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--brit-green);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">✓ ŠTO RADI DOBRO</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          ✓ Hook s pitanjem — privlači čitatelja odmah<br>
          ✓ Opis je konkretan (sea bass, blitva, olive oil)<br>
          ✓ Evaluacija + i − prisutne (oba su obavezni)<br>
          ✓ "− drawback" je konkretan i realan, ne trivijalan<br>
          ✓ Preporuka s ciljnom publikom ("anyone seeking")<br>
          ✓ Osoban ton ali formalan engleski (bez slanga)<br>
          ✓ Struktura: hook → opis → eval+ → eval− → preporuka
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--gold);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">🔍 KORISNE FRAZE ZA RECENZIJU</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          "<b>tucked away in</b>..." (opis lokacije)<br>
          "<b>with an emphasis on</b>..." (opis koncepta)<br>
          "<b>cooked to perfection</b>" (evaluacija hrane)<br>
          "<b>without being intrusive</b>" (nijansirana pohvala)<br>
          "<b>The only minor drawback is</b>..." (uravnotežena kritika)<br>
          "<b>I would enthusiastically recommend</b>..." (preporuka)<br>
          "<b>well worth the effort</b>" (snažan završetak)
        </div>
      </div>
    </div>

    <!-- USPOREDBA RECENZIJA: FILM VS RESTORAN -->
    <div style="background:var(--blue-dim);border:1px solid var(--blue-border);border-radius:var(--r2);padding:12px 16px;margin-bottom:24px;font-family:var(--mono);font-size:12px;color:var(--t2);line-height:1.8">
      <b style="color:var(--blue)">Ključna sličnost:</b> Obje recenzije koriste <em>istu strukturu</em> — hook → opis → evaluacija+ → evaluacija− → preporuka. Predmet recenzije (film, restoran, knjiga) ne mijenja strukturu.<br>
      <b style="color:var(--blue)">Ključna razlika u vokabularu:</b> Film → "cinematography, pacing, performance, narrative" · Restoran → "atmosphere, service, flavour, setting, cuisine" · Knjiga → "prose style, plot, character development, themes"
    </div>

    <div class="sec-label" style="margin-top:28px">// primjer etalon članka</div>
    <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:14px">Zadatak: Napiši članak za školski časopis o prednostima putovanja i upoznavanja novih kultura.</p>

    <div class="text-mockup">
      <div class="tm-header">
        <div class="tm-pub">School Magazine · Feature Article · ~155 words</div>
        <div class="tm-title">Why Travelling Is the Best Education You Will Ever Receive</div>
        <div class="tm-meta">
          <span>Feature article</span>
          <span>By: M. Perić</span>
        </div>
      </div>
      <div class="tm-body">
        <div class="tm-para">
          Have you ever returned home from a trip and felt, somehow, like a different person? <span class="tm-annot hook">HOOK</span> If so, you are not alone. For millions of young people around the world, travel represents far more than a holiday — it is a transformative experience that no classroom can fully replicate.
        </div>
        <div class="tm-para">
          One of the most remarkable aspects of international travel is the way it challenges our assumptions. <span class="tm-annot eval">RAZVOJ 1</span> When you find yourself navigating an unfamiliar city, communicating in a foreign language or sharing a meal with strangers, you quickly discover resources within yourself that you never knew existed.
        </div>
        <div class="tm-para">
          Furthermore, exposure to different cultures fosters empathy in a way that is difficult to achieve through books alone. <span class="tm-annot eval">RAZVOJ 2</span> Witnessing how differently people live, work and celebrate across the world fundamentally shifts the way we see our own society.
        </div>
        <div class="tm-para">
          Next time you have the opportunity to explore somewhere new, seize it without hesitation. <span class="tm-annot rec">ZAKLJUČAK</span> The world is your classroom — and the lessons it teaches are truly priceless.
        </div>
      </div>
    </div>

    <div class="sec-label" style="margin-top:28px">// checklist — prije predaje</div>
    <div class="checklist" id="writingChecklist">
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Naslov</b> — postoji, upečatljiv, nije ista rečenica kao uvod</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Hook</b> — prva rečenica privlači pažnju (pitanje, imaginacija, statistika...)</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>180–200 words</b> uključujući naslov — prebrojano</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Za recenziju:</b> opis + evaluacija (+ i −) + preporuka — sve tri komponente</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Za članak:</b> tema jasna, razvoj s elaboracijom, zaključak s porukom</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Vokabular</b> — raznolik i živopisan, ne ponavljanje istih pridjeva</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Tonu odgovarajuće</b> — "you", upitne rečenice, osoban ton</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Jasni odlomci</b> s praznim redom između</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Gramatička točnost</b> — provjeri subject-verb agreement, tense konzistentnost</div></div>
    </div>

    <div class="sec-label">// kviz — članak ili recenzija</div>
    <div class="q-block" id="q1">
      <div class="q-head"><div class="q-meta">pitanje 01 · struktura recenzije</div><div class="q-text">Koji element MORA biti u recenziji a nije neophodan u članku?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">A</div>Naslov</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">B</div>Hook rečenica</div>
        <div class="q-opt" onclick="answer(this,'q1','correct')"><div class="q-letter">C</div>Preporuka čitatelju</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">D</div>Jasni odlomci</div>
      </div>
      <div class="q-expl" id="qe1"><div class="expl-ok">✓ Točno — Preporuka (komu i zašto preporučuješ) obavezna je u recenziji. Naslov i hook i odlomci potrebni su u oba formata. Članak nema obavezu davanja preporuke.</div></div>
    </div>

    <div class="q-block" id="q2">
      <div class="q-head"><div class="q-meta">pitanje 02 · hook rečenica</div><div class="q-text">Koja od ovih rečenica je NAJBOLJI hook za članak o prednostima sporta?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">A</div>Sport has many advantages for people.</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">B</div>In this article, I will write about sport.</div>
        <div class="q-opt" onclick="answer(this,'q2','correct')"><div class="q-letter">C</div>When did you last feel truly alive? For millions of people, the answer comes in the form of sport.</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">D</div>Sport is important. It keeps us healthy and happy.</div>
      </div>
      <div class="q-expl" id="qe2"><div class="expl-ok">✓ Točno — C koristi pitanje koje izravno obraća čitatelju i nastavlja s emotivnom tvrdnjom. A i D su dosadni i generički. B je suhoparan najava — najgori mogući uvod za članak.</div></div>
    </div>

    <div class="q-block" id="q3">
      <div class="q-head"><div class="q-meta">pitanje 03 · ton i vokabular</div><div class="q-text">Koji izraz je NEPRIKLADAN za recenziju restorana?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">A</div>The atmosphere is warm and inviting.</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">B</div>The pasta dishes were cooked to perfection.</div>
        <div class="q-opt" onclick="answer(this,'q3','correct')"><div class="q-letter">C</div>The food was nice and we liked it a lot.</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">D</div>The desserts left something to be desired.</div>
      </div>
      <div class="q-expl" id="qe3"><div class="expl-ok">✓ Točno — "nice" i "liked it a lot" su preslabi, generički pridjevi — "prosječni" vokabular koji smanjuje ocjenu. Koristiš specifične, opisne pridjeve: warm and inviting, cooked to perfection, left something to be desired.</div></div>
    </div>

    <div class="q-block" id="q4">
      <div class="q-head"><div class="q-meta">pitanje 04 · razlika esej vs članak</div><div class="q-text">Što je DOZVOLJENO u članku ali NE i u formalnom eseju?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">A</div>Formalni linkers (Furthermore, Moreover)</div>
        <div class="q-opt" onclick="answer(this,'q4','correct')"><div class="q-letter">B</div>Upitne rečenice i izravno obraćanje čitatelju ("you")</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">C</div>Jasna struktura odlomaka</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">D</div>Gramatička točnost</div>
      </div>
      <div class="q-expl" id="qe4"><div class="expl-ok">✓ Točno — "You" i upitne rečenice su karakteristika članaka i recenzija koje ih čine živima. U formalnom eseju ovo se izbjegava. Formalni linkers, odlomci i gramatička točnost potrebni su u oba formata.</div></div>
    </div>

    <div class="q-block" id="q5">
      <div class="q-head"><div class="q-meta">pitanje 05 · preporuka u recenziji</div><div class="q-text">Koja je NAJBOLJА formulacija za preporuku na kraju recenzije?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">A</div>I think you should watch this film.</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">B</div>This film is recommended.</div>
        <div class="q-opt" onclick="answer(this,'q5','correct')"><div class="q-letter">C</div>I would wholeheartedly recommend this film to anyone who appreciates thoughtful, character-driven cinema.</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">D</div>Overall, the film is good and worth seeing.</div>
      </div>
      <div class="q-expl" id="qe5"><div class="expl-ok">✓ Točno — C je specifična preporuka (komu: "anyone who appreciates..."), s bogatim vokabularom (wholeheartedly, character-driven) i jasnom porukom. A je previše neformalan. B je pasivan i suh. D je generički.</div></div>
    </div>

    <div class="sec-label" style="margin-top:28px">// zadaci za vježbu</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:28px">
      <div style="background:var(--bg-card);border:2px solid var(--blue-border);border-radius:var(--r4);overflow:hidden">
        <div style="background:var(--blue-dim);padding:10px 16px;border-bottom:1px solid var(--blue-border);font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase">Zadatak A — Članak</div>
        <div style="padding:14px 16px">
          <div style="font-size:13.5px;font-weight:600;color:var(--t1);font-family:var(--serif);margin-bottom:10px;line-height:1.5">Write an article for your school magazine about the importance of learning foreign languages.</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3)">180–200 words · naslov · hook · osoban ton</div>
        </div>
      </div>
      <div style="background:var(--bg-card);border:2px solid var(--gold-bd);border-radius:var(--r4);overflow:hidden">
        <div style="background:var(--gold-dim);padding:10px 16px;border-bottom:1px solid var(--gold-bd);font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:2px;color:var(--gold);text-transform:uppercase">Zadatak B — Recenzija</div>
        <div style="padding:14px 16px">
          <div style="font-size:13.5px;font-weight:600;color:var(--t1);font-family:var(--serif);margin-bottom:10px;line-height:1.5">Write a review of a book you have read recently for an English-language website.</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3)">180–200 words · opis + evaluacija + preporuka</div>
        </div>
      </div>
    </div>

    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🏆</div><div class="discere-hd-text">Blok 4 — Writing završen!</div></div>
      <div class="discere-body">
        <div class="discere-desc">Svladao si sva 4 Writing formata: <b>Esej · E-mail/Pismo · Članak · Recenzija</b>. Sljedeći je Blok 5 — Reading i Listening.</div>
        <button class="discere-btn" onclick="navigateChapter(17)">Poglavlje 17 →</button>
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
      <span class="nav-btn" onclick="switchTab(1)">← Strategija</span>
      <button class="nav-btn primary" onclick="navigateChapter(17)">Blok 5: Reading i Listening →</button>
    </div>
  </div><!-- /l2 -->
</div>
</main>

<script>
const PAGE_KEY='maturiraj_en_visa_p16';
function saveProgress(i){try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d['tab_'+i]=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}}
function loadProgress(){
  try{
    const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');
    document.querySelectorAll('.tab').forEach((t,i)=>{if(d['tab_'+i])t.classList.add('done-tab');});
    if(d.cgPassed){const cg=document.getElementById('cgBlock');if(cg)cg.style.display='none';}
    if(d.checklist){d.checklist.forEach((v,i)=>{const items=document.querySelectorAll('.cl-item');if(items[i]&&v)items[i].classList.add('checked');});}
  }catch(e){}
}
function switchTab(i){
  document.querySelectorAll('.tab').forEach((t,j)=>{t.classList.toggle('active',j===i);t.setAttribute('aria-selected',j===i);t.tabIndex=j===i?0:-1;});
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
function toggleReveal(el){el.classList.toggle('open');el.setAttribute('aria-expanded',el.classList.contains('open'));}
document.querySelectorAll('.reveal-card').forEach(c=>{
  c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleReveal(c);}});
});
function toggleCheck(el){
  el.classList.toggle('checked');
  try{
    const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');
    d.checklist=Array.from(document.querySelectorAll('.cl-item')).map(i=>i.classList.contains('checked'));
    localStorage.setItem(PAGE_KEY,JSON.stringify(d));
  }catch(e){}
}
let quizCorrectCount=0;
function answer(opt,qId,result){
  const block=document.getElementById(qId);
  if(block.dataset.answered) return;
  block.dataset.answered=result==='correct'?'1':'-1';
  block.querySelectorAll('.q-opt').forEach(o=>o.classList.add('disabled'));
  opt.classList.add(result==='correct'?'correct':'wrong');
  if(result==='wrong'){block.querySelectorAll('.q-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes("'correct'"))o.classList.add('correct');});}
  const expl=document.getElementById('qe'+qId.replace('q',''));
  if(expl){expl.classList.add('show');expl.scrollIntoView({behavior:'smooth',block:'nearest'});}
  if(result==='correct'){quizCorrectCount++;if(quizCorrectCount===document.querySelectorAll('.q-block').length)launchConfetti();}
}
let cgAnswered=false;
function cgAnswer(opt,isCorrect){
  if(cgAnswered) return;
  cgAnswered=true;
  document.querySelectorAll('.cg-opt').forEach(o=>o.classList.add('cg-disabled'));
  const fb=document.getElementById('cgFb'),btn=document.getElementById('cgBtn');
  if(isCorrect){
    opt.classList.add('cg-correct');
    fb.className='cg-feedback show pass';
    fb.innerHTML='✓ Točno! Strogi for-and-against format karakteristika je eseja, ne članka. Članak iznosi temu iz jednog kuta s entuzijazmom — ne mora prikazivati obje strane. Naslov, hook i živopisan ton zajednički su za članak i recenziju.';
    btn.classList.add('show');
    try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.cgPassed=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
  } else {
    opt.classList.add('cg-wrong');
    document.querySelectorAll('.cg-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes('true'))o.classList.add('cg-correct');});
    fb.className='cg-feedback show fail';
    fb.innerHTML='✗ Netočno. C je točno: for-and-against format je karakteristika eseja, ne članka. Članak ima slobodniju strukturu i iznosi temu iz jednog kuta. Naslov i hook su zajednički za oba.';
    setTimeout(()=>{cgAnswered=false;document.querySelectorAll('.cg-opt').forEach(o=>o.classList.remove('cg-disabled','cg-wrong','cg-correct'));fb.className='cg-feedback';btn.classList.remove('show');},2800);
  }
}
const tipSections=['sec-article-struct','sec-review-struct','sec-hooks','sec-article-phrases','sec-review-phrases','sec-vocab-upgrade','sec-vs-essay'];
function tipScroll(id){const el=document.getElementById(id);if(!el)return;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-60,behavior:'smooth'});}
const tipObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){const idx=tipSections.indexOf(e.target.id);for(let j=0;j<=idx;j++){const p=document.getElementById('tip-'+j);if(p)p.classList.add('done');}}});
},{rootMargin:'-10% 0px -60% 0px'});
tipSections.forEach(id=>{const el=document.getElementById(id);if(el)tipObs.observe(el);});
function launchConfetti(){
  const colors=['#4F7BE8','#CF142B','#52D688','#E8A838','#A78BFA','#C9A227'];
  for(let i=0;i<55;i++){
    const p=document.createElement('div');p.className='confetti-piece';
    p.style.cssText=\`left:\${Math.random()*100}vw;background:\${colors[Math.floor(Math.random()*colors.length)]};animation-duration:\${2+Math.random()*2}s;animation-delay:\${Math.random()*.8}s;width:\${6+Math.random()*6}px;height:\${6+Math.random()*6}px;border-radius:\${Math.random()>.5?'50%':'2px'}\`;
    document.body.appendChild(p);setTimeout(()=>p.remove(),4000);
  }
}
window.addEventListener('scroll',()=>{const b=document.getElementById('backTop');if(b)b.classList.toggle('show',window.scrollY>400);},{passive:true});
function openMobDrawer(){document.getElementById('mobDrawer').classList.add('open');document.body.style.overflow='hidden';}
function closeMobDrawer(){document.getElementById('mobDrawer').classList.remove('open');document.body.style.overflow='';}
document.getElementById('mobDrawer').addEventListener('click',e=>{if(e.target===e.currentTarget)closeMobDrawer();});
loadProgress();

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