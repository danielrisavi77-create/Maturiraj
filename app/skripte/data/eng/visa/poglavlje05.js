import React, { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════
   MATURIRAJ.HR — ENGLESKI VIŠA RAZINA · POGLAVLJE 05 — CONDITIONALS
   Complete React Component (standalone)
═══════════════════════════════════════════════════════════════ */

const CSS = `
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
.shell{display:flex;min-height:100vh}
.union-bar{display:none}
.sidebar{width:var(--sidebar);flex-shrink:0;background:var(--bg-surface);border-right:1px solid var(--bd);position:sticky;top:58px;height:calc(100vh - 58px);overflow-y:auto;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--bd-mid) transparent}
.sidebar::-webkit-scrollbar{width:3px}.sidebar::-webkit-scrollbar-thumb{background:var(--bd-mid);border-radius:2px}
.sb-brand{padding:22px 18px 16px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.sb-logo{width:30px;height:30px;background:linear-gradient(135deg,var(--union-red),var(--blue));border-radius:var(--r1);display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;overflow:hidden}
.sb-logo::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 13h30M13 0v30M0 0l30 30M30 0L0 30' stroke='rgba(255,255,255,0.4)' stroke-width='2'/%3E%3C/path%3E%3C/svg%3E") center/cover}
.sb-logo svg{width:16px;height:16px;position:relative}
.sb-name{font-family:var(--serif);font-size:14px;font-weight:700;color:var(--t1)}
.sb-sub{font-size:10px;color:var(--blue);margin-top:1px;font-family:var(--mono);letter-spacing:.5px}
.sb-label{font-family:var(--mono);font-size:9px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;padding:16px 18px 5px}
.sb-item{display:flex;align-items:center;gap:9px;padding:7px 18px;font-size:12.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.3}
.sb-item:hover{color:var(--t1);background:var(--bg-hover)}
.sb-item.active{color:var(--blue);background:var(--blue-glow);border-left-color:var(--blue)}
.sb-item.done-ch{color:var(--brit-green)}.sb-item.done-ch .sb-dot{background:var(--brit-green);opacity:1}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.5}
.sb-footer{margin-top:auto;padding:12px 18px;border-top:1px solid var(--bd);font-size:10px;color:var(--t3);line-height:1.6;font-family:var(--mono)}
.main{flex:1;min-width:0}
.content-wrap{max-width:820px;width:100%;margin:0 auto;padding:8px 48px 100px}
.breadcrumb{display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--t3);margin-bottom:28px;font-family:var(--mono)}
.bc-sep{opacity:.3}.bc-active{color:var(--blue)}
.tabs-wrap{display:flex;gap:0;margin-bottom:6px;background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:4px;width:fit-content}
.tab{display:flex;align-items:center;gap:6px;padding:8px 20px;font-size:12.5px;font-weight:500;color:var(--t2);cursor:pointer;border-radius:var(--r1);transition:all .15s;white-space:nowrap;font-family:var(--mono)}
.tab:hover{color:var(--t1)}.tab.active{background:var(--blue);color:#fff;font-weight:700}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#060810;font-weight:700;flex-shrink:0}
.tab.done-tab .tab-check{display:inline-flex}
.layer{display:none}.layer.active{display:block;animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:6px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--blue);background:var(--blue-dim);border-color:var(--blue-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero{margin-bottom:32px;padding:36px 40px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--union-red) 0%,var(--union-red) 25%,#fff 25%,#fff 30%,var(--blue) 30%,var(--blue) 70%,#fff 70%,#fff 75%,var(--union-red) 75%)}
.hero::after{content:'05';position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:112px;font-weight:900;font-family:var(--serif);color:rgba(255,255,255,.025);pointer-events:none;user-select:none;line-height:1}
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
.tags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:28px}
.pill{display:inline-flex;align-items:center;padding:4px 12px;border-radius:var(--r1);font-size:11.5px;font-weight:600;font-family:var(--mono);border:1px solid}
.pill-blue{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.pill-green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.pill-gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.pill-red{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.pill-violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.pill-amber{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.pill-cream{background:var(--cream-dim);color:var(--cream);border-color:var(--cream-bd)}
.sec-label{font-family:var(--mono);font-size:9.5px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--bd)}
.stat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(172px,1fr));gap:10px;margin-bottom:28px}
.stat-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px;transition:border-color .15s,transform .15s}
.stat-card:hover{border-color:var(--bd-light);transform:translateY(-1px)}
.stat-icon{font-family:var(--mono);font-size:10px;font-weight:500;padding:3px 8px;border-radius:var(--r1);display:inline-flex;margin-bottom:10px}
.stat-icon.blue{background:var(--blue-dim);color:var(--blue)}.stat-icon.green{background:var(--brit-green-dim);color:var(--brit-green)}
.stat-icon.gold{background:var(--gold-dim);color:var(--gold)}.stat-icon.violet{background:var(--violet-dim);color:var(--violet)}
.stat-icon.amber{background:var(--amber-dim);color:var(--amber)}.stat-icon.red{background:var(--union-red-dim);color:var(--union-red)}
.stat-name{font-size:13px;font-weight:600;color:var(--t1);margin-bottom:5px;line-height:1.3}
.stat-desc{font-size:12px;color:var(--t2);line-height:1.5;font-family:var(--mono)}
.prose{font-size:14.5px;line-height:1.85;color:rgba(238,240,248,.82);margin-bottom:16px}
.prose b,.prose strong{color:var(--t1);font-weight:600}.prose em{color:var(--blue);font-style:normal}
.cond-block{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.cond-head{display:flex;align-items:center;gap:14px;padding:16px 22px;border-bottom:1px solid var(--bd);background:var(--bg-surface)}
.cond-type{font-family:var(--mono);font-size:11px;font-weight:700;padding:5px 12px;border-radius:var(--r1);border:1px solid;letter-spacing:.5px}
.cond-type.zero{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.cond-type.first{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.cond-type.second{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.cond-type.third{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.cond-type.mixed{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.cond-head-text{flex:1}
.cond-title{font-size:15px;font-weight:600;color:var(--t1);font-family:var(--serif)}
.cond-sub{font-size:11px;color:var(--t3);font-family:var(--mono);margin-top:2px}
.cond-body{padding:20px 24px}
.formula-row{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;margin:12px 0;font-family:var(--mono);font-size:13px}
.formula-row .clause{display:flex;flex-direction:column;gap:4px}
.formula-row .clause-lbl{font-size:9.5px;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);font-weight:500}
.formula-row .clause-val{font-size:13px;font-weight:600}
.formula-row .clause-val.blue{color:var(--blue)}.formula-row .clause-val.green{color:var(--brit-green)}
.formula-row .clause-val.gold{color:var(--gold)}.formula-row .clause-val.red{color:var(--union-red)}
.formula-row .clause-val.violet{color:var(--violet)}
.formula-row .plus{font-size:18px;color:var(--t3);font-weight:300;align-self:center}
.exs{margin:14px 0 18px}
.ex{display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:start;padding:9px 0;border-bottom:1px solid var(--bd)}
.ex:last-child{border-bottom:none}
.ex-en{font-size:14px;color:var(--t1);line-height:1.5}
.ex-en b.blue{color:var(--blue);font-weight:600}.ex-en b.green{color:var(--brit-green);font-weight:600}
.ex-en b.gold{color:var(--gold);font-weight:600}.ex-en b.red{color:var(--union-red);font-weight:600}
.ex-en b.violet{color:var(--violet);font-weight:600}
.ex-arr{color:var(--t3);font-size:12px;padding-top:2px}
.ex-hr{font-size:12.5px;color:var(--t2);line-height:1.5;font-family:var(--mono)}
.callout{display:flex;gap:12px;padding:14px 16px;border-radius:var(--r3);margin:14px 0;border:1px solid}
.callout-warn{background:var(--red-dim);border-color:var(--red-border)}
.callout-tip{background:var(--amber-dim);border-color:var(--amber-border)}
.callout-info{background:var(--blue-dim);border-color:var(--blue-border)}
.callout-green{background:var(--brit-green-dim);border-color:var(--brit-green-bd)}
.callout-violet{background:var(--violet-dim);border-color:var(--violet-border)}
.callout-icon{font-size:15px;flex-shrink:0;margin-top:1px}
.callout-body{flex:1}
.callout-title{font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:5px}
.callout-warn .callout-title{color:var(--red)}.callout-tip .callout-title{color:var(--amber)}
.callout-info .callout-title{color:var(--blue)}.callout-green .callout-title{color:var(--brit-green)}
.callout-violet .callout-title{color:var(--violet)}
.callout-text{font-size:13px;line-height:1.7;color:var(--t2)}.callout-text b{color:var(--t1)}
.panic-box{background:linear-gradient(135deg,rgba(79,123,232,.05),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:24px 0}
.panic-hd{background:linear-gradient(90deg,var(--union-red),#1C3A8A);padding:11px 20px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:#fff;text-transform:uppercase}
.panic-body{padding:18px 20px}
.panic-step{display:flex;align-items:flex-start;gap:14px;padding:9px 0;border-bottom:1px solid rgba(79,123,232,.10)}
.panic-step:last-child{border-bottom:none}
.panic-num{width:24px;height:24px;border-radius:50%;background:var(--blue);color:#fff;font-family:var(--mono);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.panic-text{font-size:13px;color:rgba(238,240,248,.85);line-height:1.65}.panic-text b{color:var(--t1)}
.reveal-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:8px;cursor:pointer;transition:border-color .15s}
.reveal-card:hover{border-color:var(--bd-light)}
.reveal-q{display:flex;align-items:center;justify-content:space-between;padding:13px 16px;font-size:13.5px;font-weight:600;color:var(--t1);gap:12px;user-select:none}
.rq-icon{font-size:16px;flex-shrink:0}
.reveal-arrow{font-size:11px;color:var(--t3);transition:transform .2s;flex-shrink:0}
.reveal-card.open .reveal-arrow{transform:rotate(180deg)}
.reveal-ans{max-height:0;overflow:hidden;padding:0 16px;font-size:13px;color:var(--t2);line-height:1.7;background:var(--bg-surface);font-family:var(--mono);transition:max-height .28s ease,padding .28s ease;border-top:1px solid transparent}
.reveal-card.open .reveal-ans{max-height:600px;padding:14px 16px;border-top-color:var(--bd)}
.reveal-ans b{color:var(--t1)}.reveal-ans .ok{color:var(--green)}.reveal-ans .bad{color:var(--red)}.reveal-ans .note{color:var(--blue)}
.cond-table{width:100%;border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:16px 0 24px;border-collapse:separate;border-spacing:0}
.cond-table th{background:var(--bg-surface);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:10px 14px;border-bottom:1px solid var(--bd-mid);text-align:left}
.cond-table td{padding:11px 14px;font-size:13px;border-bottom:1px solid var(--bd);vertical-align:top;line-height:1.55}
.cond-table tr:last-child td{border-bottom:none}
.cond-table tr:nth-child(even) td{background:rgba(255,255,255,.015)}
.cond-table .type-cell{font-family:var(--mono);font-size:11px;font-weight:700;white-space:nowrap}
.type-cell.zero{color:var(--blue)}.type-cell.first{color:var(--brit-green)}
.type-cell.second{color:var(--gold)}.type-cell.third{color:var(--union-red)}.type-cell.mixed{color:var(--violet)}
.cond-table .meaning{color:var(--t2)}.cond-table .example{color:var(--t1);font-style:italic}
.cond-table code{font-family:var(--mono);font-size:11.5px;background:var(--bg-input);padding:1px 6px;border-radius:var(--r1);color:var(--amber)}
.tip-bar{position:sticky;top:3px;z-index:90;background:var(--bg-surface);border-bottom:1px solid var(--bd);padding:8px 0;margin:-4px 0 24px;display:flex;gap:0;overflow-x:auto;scrollbar-width:none}
.tip-bar::-webkit-scrollbar{display:none}
.tip-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10.5px;color:var(--t3);white-space:nowrap;padding:4px 14px;cursor:pointer;transition:color .15s;flex-shrink:0}
.tip-item:hover{color:var(--t2)}.tip-item.done{color:var(--green)}.tip-item.done .tip-dot{background:var(--green)}
.tip-dot{width:6px;height:6px;border-radius:50%;background:var(--t3);flex-shrink:0;transition:background .15s}
.tip-sep{color:var(--t3);opacity:.25;flex-shrink:0;align-self:center;font-size:11px}
.quiz-intro{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;font-size:13px;color:var(--t2);margin-bottom:22px;font-family:var(--mono);line-height:1.65}
.quiz-intro strong{color:var(--blue)}
.q-block{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:12px}
.q-head{padding:14px 18px;border-bottom:1px solid var(--bd)}
.q-meta{font-family:var(--mono);font-size:9.5px;color:var(--t3);font-weight:500;letter-spacing:.5px;margin-bottom:6px;text-transform:uppercase}
.q-text{font-size:14.5px;font-weight:600;color:var(--t1);line-height:1.5}
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
.sd-intro{font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:14px;padding:10px 14px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2)}
.sd-progress{display:flex;gap:5px;margin-bottom:16px;flex-wrap:wrap}
.sd-dot{width:10px;height:10px;border-radius:2px;background:var(--bg-elevated);border:1px solid var(--bd-mid);transition:all .2s}
.sd-dot.ok{background:var(--green);border-color:var(--green)}.sd-dot.no{background:var(--red);border-color:var(--red)}.sd-dot.cur{border-color:var(--blue);background:var(--blue-dim)}
.sd-q{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:18px 20px;margin-bottom:14px}
.sd-sent{font-size:15px;font-weight:600;color:var(--t1);margin-bottom:14px;line-height:1.45;font-family:var(--serif)}
.sd-sent code{font-family:var(--mono);font-size:14px;background:var(--bg-input);padding:1px 8px;border-radius:var(--r1);color:var(--amber);font-weight:400}
.sd-btns{display:flex;gap:8px;flex-wrap:wrap}
.sd-btn{flex:1;text-align:center;padding:9px 14px;border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;cursor:pointer;border:1px solid;transition:all .15s;user-select:none;min-width:100px}
.sd-btn.opt-blue{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.sd-btn.opt-green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.sd-btn.opt-gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.sd-btn.opt-red{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.sd-btn.opt-violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.sd-btn:hover:not(.picked){opacity:.75;transform:translateY(-1px)}
.sd-btn.correct-pick{background:var(--green);color:#060810;border-color:var(--green);pointer-events:none}
.sd-btn.wrong-pick{background:var(--red-dim);color:var(--red);border-color:var(--red-border);pointer-events:none}
.sd-btn.reveal-correct{background:var(--green-dim);color:var(--green);border-color:var(--green-border);pointer-events:none}
.sd-fb{display:none;margin-top:10px;font-family:var(--mono);font-size:12px;line-height:1.6;padding:9px 12px;border-radius:var(--r2)}
.sd-fb.show{display:block}.sd-fb.ok{background:var(--green-dim);color:var(--green);border:1px solid var(--green-border)}.sd-fb.no{background:var(--red-dim);color:var(--red);border:1px solid var(--red-border)}
.sd-score{text-align:center;padding:28px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);display:none}
.sd-score.show{display:block}
.sd-score-num{font-size:48px;font-weight:700;color:var(--blue);font-family:var(--serif);letter-spacing:-2px}
.sd-score-lbl{font-size:13px;color:var(--t2);margin-top:6px}
.sd-retry{margin-top:14px;padding:9px 20px;background:var(--blue);color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer}
.err-drill{margin:18px 0}
.err-item{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:10px}
.err-sent{padding:14px 18px;font-size:14.5px;font-weight:600;color:var(--red);letter-spacing:-0.1px;border-bottom:1px solid var(--bd);font-family:var(--serif)}
.err-btn{display:block;width:100%;text-align:left;padding:10px 18px;font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t3);background:transparent;border:none;cursor:pointer;transition:color .12s}
.err-btn:hover{color:var(--amber)}
.err-fix{display:none;padding:12px 18px;font-family:var(--mono);font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);background:var(--bg-surface)}
.err-fix.show{display:block}.err-fix .correct{color:var(--green);font-weight:600}.err-fix .explain{color:var(--t2);font-size:12px;margin-top:4px;display:block}
.checkpoint-gate{background:var(--bg-card);border:2px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:28px 0}
.cg-hd{background:linear-gradient(90deg,var(--blue-dim),transparent);padding:14px 20px;border-bottom:1px solid var(--blue-border);display:flex;align-items:center;gap:10px}
.cg-icon{font-size:18px}.cg-title{font-family:var(--serif);font-size:15px;font-weight:700;color:var(--t1)}
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
.cg-unlock:hover{opacity:.88}.cg-unlock.show{display:block}
.discere-box{background:linear-gradient(135deg,rgba(79,123,232,.08),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:28px 0 0}
.discere-hd{background:var(--blue-dim);border-bottom:1px solid var(--blue-border);padding:11px 20px;display:flex;align-items:center;gap:10px}
.discere-hd-icon{font-size:16px}.discere-hd-text{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase}
.discere-body{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.discere-desc{font-size:13px;color:var(--t2);line-height:1.6;flex:1;min-width:180px}.discere-desc b{color:var(--t1)}
.discere-btn{font-family:var(--mono);font-size:12px;font-weight:700;padding:10px 20px;border-radius:var(--r2);background:var(--blue);color:#fff;border:none;cursor:pointer;white-space:nowrap;transition:opacity .15s;text-decoration:none;display:inline-block}
.discere-btn:hover{opacity:.85}
.nav-row{display:flex;justify-content:space-between;align-items:center;padding:24px 0 0;border-top:1px solid var(--bd);margin-top:28px;flex-wrap:wrap;gap:10px}
.nav-btn{font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t2);padding:9px 18px;border-radius:var(--r2);border:1px solid var(--bd-mid);cursor:pointer;transition:all .15s;background:var(--bg-card);text-decoration:none;display:inline-block}
.nav-btn:hover{color:var(--t1);border-color:var(--bd-light)}.nav-btn.primary{background:var(--blue);color:#fff;border-color:var(--blue)}.nav-btn.primary:hover{opacity:.88}
@keyframes confettiFall{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(110vh) rotate(720deg);opacity:0}}
.confetti-piece{position:fixed;top:-10px;width:8px;height:8px;border-radius:2px;pointer-events:none;z-index:9999;animation:confettiFall linear forwards}
.quiz-export-btn{display:inline-flex;align-items:center;gap:7px;padding:7px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--t2);cursor:pointer;transition:all .15s;margin-top:10px}
.quiz-export-btn:hover{color:var(--t1);border-color:var(--bd-light)}
.back-top{position:fixed;bottom:86px;right:24px;z-index:200;width:38px;height:38px;border-radius:50%;background:var(--bg-card);border:1px solid var(--bd-mid);color:var(--t3);font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;pointer-events:none;transition:opacity .2s,transform .2s,color .15s;box-shadow:0 2px 12px rgba(0,0,0,.3)}
.back-top.show{opacity:1;pointer-events:auto}.back-top:hover{color:var(--blue);border-color:var(--blue-border);transform:translateY(-2px)}
@media(min-width:721px){.back-top{right:32px;bottom:32px}}
.hamburger{display:none;position:fixed;bottom:22px;right:22px;z-index:300;width:50px;height:50px;background:var(--blue);border-radius:50%;border:none;cursor:pointer;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(79,123,232,.4);transition:transform .15s}
.hamburger:hover{transform:scale(1.08)}.hamburger svg{width:20px;height:20px}
.mob-drawer{display:none;position:fixed;inset:0;z-index:250;background:rgba(6,8,16,.95);backdrop-filter:blur(8px);flex-direction:column;padding:28px 24px;overflow-y:auto}
.mob-drawer.open{display:flex}
.mob-drawer-close{align-self:flex-end;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:8px 18px;font-family:var(--mono);font-size:12px;color:var(--t2);cursor:pointer;margin-bottom:20px}
.mob-drawer .sb-label{padding:14px 0 5px}.mob-drawer .sb-item{padding:10px 0;border-left:none;border-bottom:1px solid var(--bd)}
@media(max-width:720px){.hamburger{display:flex}.sidebar{display:none}}
@media(max-width:640px){.formula-row{grid-template-columns:1fr;gap:6px}.formula-row .plus{display:none}}
@media(max-width:520px){.content-wrap{padding:24px 20px 80px}.sd-btns{flex-direction:column}.sd-btn{flex:none;min-width:0}}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}
/* ══════ PREMIUM GATES ══════ */
.pg-ai{position:relative;margin:24px 0;padding:22px 22px 20px;background:linear-gradient(135deg,rgba(79,123,232,0.06),rgba(167,139,250,0.06));border:1px solid transparent;border-radius:16px;overflow:hidden;isolation:isolate}
.pg-ai::before{content:"";position:absolute;inset:0;border-radius:16px;padding:1px;background:linear-gradient(135deg,#4F7BE8,#A78BFA,#4F7BE8);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;background-size:200% 200%;animation:pg-border 4s linear infinite;z-index:-1}
@keyframes pg-border{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.pg-ai-hd{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.pg-ai-ico{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#4F7BE8,#A78BFA);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;animation:pg-pulse 2s ease-in-out infinite}
@keyframes pg-pulse{0%{box-shadow:0 0 0 0 rgba(167,139,250,0.5)}70%{box-shadow:0 0 0 14px rgba(167,139,250,0)}100%{box-shadow:0 0 0 0 rgba(167,139,250,0)}}
.pg-ai-ttl{font-family:var(--mono);font-size:12px;font-weight:700;color:#A78BFA;letter-spacing:2px;text-transform:uppercase}
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
.pg-disc-ico{width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#4CAF7D,#34D399);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
.pg-disc-ttl{font-family:var(--mono);font-size:12px;font-weight:700;color:#4CAF7D;letter-spacing:2px;text-transform:uppercase}
.pg-disc-sub{font-size:13px;color:var(--t2);line-height:1.5;margin-top:4px}
.pg-disc-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:linear-gradient(135deg,#4CAF7D,#34D399);color:#060810;border:none;border-radius:10px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;box-shadow:0 4px 18px rgba(76,175,125,0.3)}
.pg-disc-cta:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(76,175,125,0.4)}
.pg-disc-badge{font-family:var(--mono);font-size:9px;color:#4CAF7D;padding:3px 8px;background:rgba(76,175,125,0.12);border:1px solid rgba(76,175,125,0.3);border-radius:999px;letter-spacing:1.5px;margin-left:10px}
.paywall-overlay{position:fixed;inset:0;z-index:9999;background:rgba(6,8,16,0.88);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;padding:20px}
.paywall-card{background:var(--bg-surface);border:1px solid rgba(201,162,39,0.3);border-radius:16px;max-width:440px;width:100%;padding:28px 24px;position:relative;animation:pwSlide 0.25s ease-out}
@keyframes pwSlide{from{transform:translateY(16px);opacity:0}to{transform:translateY(0);opacity:1}}
.paywall-close{position:absolute;top:12px;right:12px;background:transparent;border:none;color:var(--t2);font-size:20px;cursor:pointer;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center}
.paywall-close:hover{background:var(--bg-elevated);color:var(--t1)}
.paywall-h{font-size:20px;font-weight:800;color:var(--t1);margin-bottom:6px;padding-right:32px}
.paywall-sub{color:var(--t2);font-size:13px;line-height:1.55;margin-bottom:18px}
.paywall-tiers{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:18px}
.paywall-tier{padding:14px 12px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r3);position:relative;cursor:pointer;transition:all 0.15s}
.paywall-tier.popular{border-color:rgba(201,162,39,0.4);background:linear-gradient(135deg,rgba(201,162,39,0.05),rgba(207,20,43,0.05))}
.paywall-tier-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px}
.paywall-tier-price{font-family:var(--mono);font-size:16px;font-weight:800;color:var(--gold)}
.paywall-tier-price .per{font-size:10px;color:var(--t3);font-weight:400}
.paywall-tier-feat{font-size:10.5px;color:var(--t2);margin-top:8px;line-height:1.5}
.paywall-cta-btn{width:100%;padding:12px 18px;background:linear-gradient(135deg,#C9A227,#CF142B);color:#fff;border:none;border-radius:var(--r3);font-family:var(--mono);font-size:13px;font-weight:800;letter-spacing:0.03em;text-transform:uppercase;cursor:pointer;transition:all 0.2s}
.paywall-cta-btn:hover{transform:translateY(-1px);box-shadow:0 4px 18px rgba(201,162,39,0.4)}
.paywall-cta-disc{width:100%;padding:12px 18px;background:linear-gradient(135deg,#4CAF7D,#34D399);color:#060810;border:none;border-radius:var(--r3);font-family:var(--mono);font-size:13px;font-weight:800;letter-spacing:0.03em;text-transform:uppercase;cursor:pointer;transition:all 0.2s}
.paywall-note{text-align:center;font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:10px}
.paywall-note strong{color:#4CAF7D}
`;

// ═══ DATA ═══
const PAGE_KEY = 'maturiraj_en_visa_p05';

const DRILL_DATA = [
  {q:'<b>If</b> water <code>___</code> to 100°C, it boils. (opća istina)',opts:['is heated','will be heated','were heated','had been heated'],correct:0,colors:['blue','green','gold','red'],fb:'<b>Točan odgovor: is heated (Zero Conditional)</b> — Opća istina → Zero: if + PS (Passive PS ovdje), PS. / General truth → Zero Conditional.'},
  {q:'<b>If</b> it <code>___</code> tomorrow, we\'ll postpone the match.',opts:['will rain','rains','rained','had rained'],correct:1,colors:['green','blue','gold','red'],fb:'<b>Točan odgovor: rains (First Conditional)</b> — Realna mogućnost u budućnosti → First: if + PS → will. Will nikad u if-klauzuli! / Real possibility → if + Present Simple.'},
  {q:'What <code>___</code> you do if you <b>found</b> a wallet on the street?',opts:['will','would','had','should'],correct:1,colors:['green','blue','gold','red'],fb:'<b>Točan odgovor: would (Second Conditional)</b> — "Found" (Past Simple) u if-klauzuli → Second Conditional. Would u glavnoj klauzuli. / Past Simple in if-clause → would in main clause.'},
  {q:'<b>If</b> she <code>___</code> the application earlier, she would have got the job.',opts:['sent','sends','had sent','would send'],correct:2,colors:['gold','blue','green','red'],fb:'<b>Točan odgovor: had sent (Third Conditional)</b> — "Would have got" u glavnoj klauzuli → Third: if + Past Perfect (had sent). / Would have in main → Past Perfect in if-clause.'},
  {q:'<b>If</b> he <code>___</code> the training last year, he would be a manager now.',opts:['completed','had completed','would complete','completes'],correct:1,colors:['gold','violet','green','blue'],fb:'<b>Točan odgovor: had completed (Mixed Conditional)</b> — Prošla radnja (last year) → sadašnja posljedica (now). Mixed Tip A: if + Past Perfect → would (sada). / Past action → present result.'},
  {q:'Unless she <code>___</code> her mind, the deal will fall through.',opts:['changes','will change','changed','had changed'],correct:0,colors:['green','blue','gold','red'],fb:'<b>Točan odgovor: changes (First Conditional + unless)</b> — Unless = if...not. Unless + PS → will (First Conditional). Will nikad uz unless u unless-klauzuli. / Unless + Present Simple → will.'},
  {q:'<b>Were</b> I in your position, I <code>___</code> a lawyer immediately.',opts:['will consult','would consult','would have consulted','had consulted'],correct:1,colors:['green','gold','red','blue'],fb:'<b>Točan odgovor: would consult (Second Conditional — inverzija)</b> — "Were I" = "If I were" → inverzija Second Conditional. Were = PS u if-klauzuli → would u glavnoj. / Were I = If I were → Second Conditional.'},
  {q:'<b>If</b> I <code>___</code> more time, I would have proofread my essay.',opts:['had','have had','had had','would have had'],correct:2,colors:['gold','blue','green','red'],fb:'<b>Točan odgovor: had had (Third Conditional)</b> — "Would have proofread" u glavnoj → Third: if + Past Perfect. "Had had" = Past Perfect of "have". Would have nikad u if-klauzuli. / Would have in main → Past Perfect in if-clause.'},
  {q:'<b>Had</b> they <code>___</code> the warning, the accident could have been avoided.',opts:['heeded','heed','would heed','have heeded'],correct:0,colors:['red','blue','gold','green'],fb:'<b>Točan odgovor: heeded (Third Conditional — inverzija)</b> — "Had they heeded" = inverzija Third Conditional (If they had heeded). Had + subjekt + past participle = formalna inverzija. / Had + subject + past participle = formal inversion of Third Conditional.'},
];

const QUIZ_DATA = [
  {id:'q1',meta:'pitanje 01 · zero vs first conditional',text:'If you _____ metal, it expands. (opća istina)',opts:[{l:'A',t:'heat',c:true},{l:'B',t:'will heat',c:false},{l:'C',t:'heated',c:false},{l:'D',t:'would heat',c:false}],expl:'✓ Točno — "expands" u glavnoj klauzuli = Present Simple → Zero Conditional. Opće istine koriste PS + PS. Will ne ide u if-klauzulu.'},
  {id:'q2',meta:'pitanje 02 · first conditional · unless',text:'Unless you _____ harder, you _____ the deadline.',opts:[{l:'A',t:'work / miss',c:false},{l:'B',t:'work / will miss',c:true},{l:'C',t:'will work / will miss',c:false},{l:'D',t:'worked / would miss',c:false}],expl:'✓ Točno — Unless = if...not. "Unless you work harder" = "If you don\'t work harder". First Conditional: unless + PS → will + inf. A nema will u glavnoj (nepotpuno). C stavlja will u unless-klauzulu (greška). D je Second Conditional.'},
  {id:'q3',meta:'pitanje 03 · second conditional',text:'If I _____ a million euros, I _____ around the world.',opts:[{l:'A',t:'have / will travel',c:false},{l:'B',t:'had had / would have travelled',c:false},{l:'C',t:'had / would travel',c:true},{l:'D',t:'would have / travelled',c:false}],expl:'✓ Točno — hipotetična situacija u sadašnjosti (nema milijun eura) → Second Conditional: if + Past Simple (had) → would + inf (would travel). B bi bio Third Conditional.'},
  {id:'q4',meta:'pitanje 04 · third conditional',text:'If she _____ the map, she _____ lost.',opts:[{l:'A',t:'checked / wouldn\'t get',c:false},{l:'B',t:'had checked / wouldn\'t get',c:false},{l:'C',t:'had checked / wouldn\'t have got',c:true},{l:'D',t:'would have checked / wouldn\'t have got',c:false}],expl:'✓ Točno — Third Conditional: if + Past Perfect (had checked) → would have + 3. stupanj (wouldn\'t have got). Sve je u prošlosti i hipotetično. D je greška — would have nikad u if-klauzuli.'},
  {id:'q5',meta:'pitanje 05 · mixed conditional · tip A',text:'If he _____ that investment five years ago, he _____ very wealthy now.',opts:[{l:'A',t:'made / would be',c:false},{l:'B',t:'had made / would be',c:true},{l:'C',t:'had made / would have been',c:false},{l:'D',t:'made / would have been',c:false}],expl:'✓ Točno — Mixed Conditional Tip A: prošla radnja (hadn\'t made) → sadašnja posljedica (isn\'t wealthy now). If + Past Perfect (had made) → would + inf (would be). "Now" potvrđuje da je posljedica u sadašnjosti.'},
  {id:'q6',meta:'pitanje 06 · inverzija',text:'_____ I known about the problem earlier, I could have helped.',opts:[{l:'A',t:'Should',c:false},{l:'B',t:'Were',c:false},{l:'C',t:'Had',c:true},{l:'D',t:'If',c:false}],expl:'✓ Točno — inverzija Third Conditional: "Had I known" = "If I had known". Had + subjekt + past participle je inverzija bez "if". Should = First inverzija, Were = Second inverzija.'},
  {id:'q7',meta:'pitanje 07 · prepoznavanje vrste',text:'"If I were better at maths, I would have chosen engineering." — koji je ovo conditional?',opts:[{l:'A',t:'Second Conditional',c:false},{l:'B',t:'Third Conditional',c:false},{l:'C',t:'Mixed Conditional Tip B (sadašnje stanje → prošla posljedica)',c:true},{l:'D',t:'Mixed Conditional Tip A (prošla radnja → sadašnja posljedica)',c:false}],expl:'✓ Točno — If I were (Past Simple = sadašnje stanje, 2nd) → would have chosen (would have + 3. st. = prošla posljedica, 3rd). Sadašnje stanje uzrokuje prošlu posljedicu → Mixed Tip B.'},
  {id:'q8',meta:'pitanje 08 · KWT — inverzija second conditional',text:'Rewrite using the word WERE so that the meaning stays the same.\nOriginal: If I were in your position, I would ask for help.\nWERE: __________ in your position, I would ask for help.',opts:[{l:'A',t:'If were I',c:false},{l:'B',t:'Were I',c:true},{l:'C',t:'Were me',c:false},{l:'D',t:'I were',c:false}],expl:'✓ Točno — Were I in your position... Inverzija Second Conditional: "If I were" → "Were I" — glagol dolazi ispred subjekta, "if" se izostavlja. A) "If were I" zadržava "if" i invertirani red — dvostruka greška. C) "Were me" — pogrešan padež (subjektni oblik, ne objektni). D) "I were" — bez inverzije, samo izostavlja "if" ali zadržava normalni red.'},
  {id:'q9',meta:'pitanje 09 · KWT — inverzija third conditional',text:'Rewrite using the word HAD so that the meaning stays the same.\nOriginal: If they had read the instructions, they wouldn\'t have made that mistake.\nHAD: __________ the instructions, they wouldn\'t have made that mistake.',opts:[{l:'A',t:'Had they been reading',c:false},{l:'B',t:'If had they read',c:false},{l:'C',t:'Had they read',c:true},{l:'D',t:'They had read',c:false}],expl:'✓ Točno — Had they read the instructions... Inverzija Third Conditional: "If they had read" → "Had they read" — HAD se pomiče ispred subjekta, "if" nestaje, ostatak ostaje isti. A) "Had they been reading" — Past Perfect Continuous umjesto Past Perfect, mijenja fokus (trajanje vs radnja). B) "If had they read" — "if" ostaje + inverzija = dvostruka greška. D) "They had read" — nema inverzije, samo izostavlja "if".'},
];

const ERROR_ITEMS = [
  {sent:'If it will rain tomorrow, we will cancel the picnic.',correct:'If it rains tomorrow, we will cancel the picnic.',explain:'Will se nikad ne stavlja u if-klauzulu. If + Present Simple → will (First Conditional).'},
  {sent:'If I was you, I would apologise immediately.',correct:'If I were you, I would apologise immediately.',explain:'U Second Conditional na ispitu uvijek "were" za sve subjekte, ne "was". "If I were you" je standardna idiomatska fraza.'},
  {sent:'If I would have known about the party, I would have come.',correct:'If I had known about the party, I would have come.',explain:'Would se ne stavlja u if-klauzulu ni u Third Conditional. If-klauzula = Past Perfect (had known).'},
  {sent:'She would pass the exam if she will study more.',correct:'She would pass the exam if she studied more.',explain:'Would u glavnoj klauzuli signalizira Second Conditional → if-klauzula treba Past Simple (studied), ne will study.'},
  {sent:'If you heat water, it will boil.',correct:'If you heat water, it boils.',explain:'Ovo je opća istina / zakon prirode → Zero Conditional (Present Simple, Present Simple). "Will boil" bi bio First Conditional — realna mogućnost, ne opća istina.'},
  {sent:'If I would be richer, I could travel more often.',correct:'If I were richer, I could travel more often.',explain:'Second Conditional: if-klauzula treba Past Simple, ne "would be". Would se nikad ne stavlja u if-klauzulu. Uz to: "were", ne "was" (premda je ovdje "would be" veći problem).'},
];

// ═══ COMPONENT ═══
export default function EngP05Conditionals({ onBack, onNext, onPrev, onDiscere, onNavigate }) {
  const [activeTab, setActiveTab] = useState(0);
  const [tabsDone, setTabsDone] = useState({});
  const [revealOpen, setRevealOpen] = useState({});
  const [cgAnswered, setCgAnswered] = useState(false);
  const [cgPassed, setCgPassed] = useState(false);
  const [mobDrawerOpen, setMobDrawerOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  
  // Drill state
  const [drillIdx, setDrillIdx] = useState(0);
  const [drillScore, setDrillScore] = useState(0);
  const [drillResults, setDrillResults] = useState([]);
  const [drillAnswered, setDrillAnswered] = useState(false);
  const [drillShowFb, setDrillShowFb] = useState(false);
  const [drillDone, setDrillDone] = useState(false);
  const [drillPickedIdx, setDrillPickedIdx] = useState(null);
  const [showExport, setShowExport] = useState(false);
  
  // Error drill state
  const [errOpen, setErrOpen] = useState({});
  const [errCount, setErrCount] = useState(0);
  
  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCorrect, setQuizCorrect] = useState(0);
  
  // Tip bar visited
  const [tipDone, setTipDone] = useState({});
  // Paywall modals
  const [showPaywall, setShowPaywall] = useState(false);
  const [showDiscereModal, setShowDiscereModal] = useState(false);

  // Load/save progress
  useEffect(() => {
    try {
      const d = JSON.parse(localStorage.getItem(PAGE_KEY) || '{}');
      if (d.tabs) setTabsDone(d.tabs);
      if (d.cgPassed) setCgPassed(true);
      if (d.drillDone) {
        setDrillDone(true);
        setDrillScore(d.drillScore || 0);
        setDrillResults(d.drillResults || []);
        setShowExport(true);
      }
    } catch(e){}
    
    const handleScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, {passive:true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const saveProgress = (key, val) => {
    try {
      const d = JSON.parse(localStorage.getItem(PAGE_KEY) || '{}');
      d[key] = val;
      localStorage.setItem(PAGE_KEY, JSON.stringify(d));
    } catch(e){}
  };

  const switchTab = (i) => {
    setActiveTab(i);
    if (i > 0) {
      setTabsDone(p => ({...p, [i-1]: true}));
      saveProgress('tabs', {...tabsDone, [i-1]: true});
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const goCheckout = () => {
    setShowPaywall(false);
    setShowDiscereModal(false);
    onNavigate?.('/pro');
  };

  const toggleReveal = (id) => setRevealOpen(p => ({...p, [id]: !p[id]}));

  const handleCgAnswer = (isCorrect) => {
    if (cgAnswered) return;
    setCgAnswered(true);
    if (isCorrect) {
      setCgPassed(true);
      saveProgress('cgPassed', true);
    } else {
      setTimeout(() => setCgAnswered(false), 2800);
    }
  };

  // Drill handlers
  const handleDrillPick = (idx) => {
    if (drillAnswered) return;
    setDrillAnswered(true);
    setDrillPickedIdx(idx);
    const isCorrect = idx === DRILL_DATA[drillIdx].correct;
    const newResults = [...drillResults, isCorrect];
    setDrillResults(newResults);
    if (isCorrect) setDrillScore(s => s + 1);
    setDrillShowFb(true);
    
    setTimeout(() => {
      if (drillIdx + 1 < DRILL_DATA.length) {
        setDrillIdx(i => i + 1);
        setDrillAnswered(false);
        setDrillShowFb(false);
        setDrillPickedIdx(null);
      } else {
        setDrillDone(true);
        setShowExport(true);
        const finalScore = isCorrect ? drillScore + 1 : drillScore;
        saveProgress('drillDone', true);
        saveProgress('drillScore', finalScore);
        saveProgress('drillResults', newResults);
        if (finalScore >= 8) launchConfetti();
      }
    }, 1600);
  };

  const resetDrill = () => {
    setDrillIdx(0);
    setDrillScore(0);
    setDrillResults([]);
    setDrillAnswered(false);
    setDrillShowFb(false);
    setDrillDone(false);
    setDrillPickedIdx(null);
    setShowExport(false);
    try {
      const d = JSON.parse(localStorage.getItem(PAGE_KEY) || '{}');
      delete d.drillDone;
      delete d.drillScore;
      delete d.drillResults;
      localStorage.setItem(PAGE_KEY, JSON.stringify(d));
    } catch(e){}
  };

  // Error drill
  const toggleErr = (idx) => {
    if (!errOpen[idx]) {
      setErrOpen(p => ({...p, [idx]: true}));
      setErrCount(c => Math.min(c + 1, ERROR_ITEMS.length));
    } else {
      setErrOpen(p => ({...p, [idx]: !p[idx]}));
    }
  };

  // Quiz
  const handleQuizAnswer = (qId, optIdx, isCorrect) => {
    if (quizAnswers[qId] !== undefined) return;
    setQuizAnswers(p => ({...p, [qId]: {picked: optIdx, correct: isCorrect}}));
    if (isCorrect) {
      const newCount = quizCorrect + 1;
      setQuizCorrect(newCount);
      if (newCount === QUIZ_DATA.length) launchConfetti();
    }
  };

  const launchConfetti = () => {
    const colors = ['#4F7BE8','#CF142B','#52D688','#E8A838','#A78BFA','#C9A227'];
    for (let i = 0; i < 55; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-piece';
      p.style.cssText = `left:${Math.random()*100}vw;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${2+Math.random()*2}s;animation-delay:${Math.random()*.8}s;width:${6+Math.random()*6}px;height:${6+Math.random()*6}px;border-radius:${Math.random()>.5?'50%':'2px'}`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 4000);
    }
  };

  const exportResults = () => {
    const W = 480, H = 240;
    const canvas = document.createElement('canvas');
    canvas.width = W * 2;
    canvas.height = H * 2;
    const ctx = canvas.getContext('2d');
    ctx.scale(2, 2);
    ctx.fillStyle = '#0A0D18';
    ctx.fillRect(0, 0, W, H);
    const segs = [{c:'#CF142B',x:0,w:W*.3},{c:'#fff',x:W*.3,w:W*.04},{c:'#4F7BE8',x:W*.34,w:W*.32},{c:'#fff',x:W*.66,w:W*.04},{c:'#CF142B',x:W*.7,w:W*.3}];
    segs.forEach(s => { ctx.fillStyle = s.c; ctx.fillRect(s.x, 0, s.w, 4); });
    ctx.fillStyle = '#EEF0F8';
    ctx.font = 'bold 20px serif';
    ctx.fillText('Maturiraj.hr', 24, 44);
    ctx.fillStyle = '#4A5580';
    ctx.font = '12px monospace';
    ctx.fillText('Poglavlje 05 · Conditionals', 24, 62);
    ctx.fillStyle = '#4F7BE8';
    ctx.font = 'bold 64px serif';
    ctx.fillText(String(drillScore), 24, 148);
    ctx.fillStyle = '#8A95B8';
    ctx.font = '14px monospace';
    ctx.fillText('/ ' + DRILL_DATA.length + ' bodova · drill', 90, 148);
    drillResults.forEach((ok, i) => {
      const x = 24 + i * 20, y = 168;
      ctx.fillStyle = ok ? '#52D688' : 'rgba(232,96,96,0.6)';
      ctx.beginPath();
      ctx.roundRect(x, y, 16, 16, 3);
      ctx.fill();
    });
    ctx.fillStyle = 'rgba(74,85,128,0.5)';
    ctx.font = '10px monospace';
    ctx.fillText('maturiraj.hr', W - 85, H - 12);
    canvas.toBlob(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'maturiraj-pogl05-' + drillScore + 'od' + DRILL_DATA.length + '.png';
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }, 'image/png');
  };

  const tipScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth'});
  };

  const getDrillLbl = () => {
    if (drillScore >= 8) return 'Izvrsno! Nastavi na kviz pitanja.';
    if (drillScore >= 6) return 'Dobro — provjeri greške pa radi kviz.';
    return 'Vrati se na Tab Gramatika i ponovi conditionals gdje griješiš.';
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: CSS}} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />
      
      <div className="union-bar" />
      
      {/* Hamburger */}
      <button className="hamburger" onClick={() => setMobDrawerOpen(true)} aria-label="Otvori navigaciju">
        <svg viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
      </button>
      
      {/* Mobile Drawer */}
      <div className={`mob-drawer ${mobDrawerOpen ? 'open' : ''}`} onClick={(e) => {if(e.target===e.currentTarget) setMobDrawerOpen(false)}}>
        <button className="mob-drawer-close" onClick={() => setMobDrawerOpen(false)}>✕ Zatvori</button>
        <div onClick={() => {setMobDrawerOpen(false); onBack?.()}} style={{display:'flex',alignItems:'center',gap:'8px',padding:'10px 0',fontSize:'12px',fontFamily:'var(--mono)',color:'var(--t3)',cursor:'pointer',borderBottom:'1px solid var(--bd)',marginBottom:'8px'}}><span>←</span> Sva poglavlja</div>
        <div className="sb-label">// Blok 1 — Start + Ispit</div>
        <div className="sb-item done-ch" onClick={() => {setMobDrawerOpen(false); onNavigate?.(1)}}><span className="sb-dot"></span>01 · Kako izgleda Engleski A</div>
        <div className="sb-item done-ch" onClick={() => {setMobDrawerOpen(false); onNavigate?.(2)}}><span className="sb-dot"></span>02 · Kako koristiti skriptu</div>
        <div className="sb-label">// Blok 2 — Grammar Core</div>
        <div className="sb-item done-ch" onClick={() => {setMobDrawerOpen(false); onNavigate?.(3)}}><span className="sb-dot"></span>03 · Vremena koja se miješaju</div>
        <div className="sb-item done-ch" onClick={() => {setMobDrawerOpen(false); onNavigate?.(4)}}><span className="sb-dot"></span>04 · Perfect vremena</div>
        <div className="sb-item active"><span className="sb-dot"></span>05 · Conditionals</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(6)}}><span className="sb-dot"></span>06 · Passive, Reported Speech</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(7)}}><span className="sb-dot"></span>07 · Modals, Articles, Quantifiers</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(8)}}><span className="sb-dot"></span>08 · Prepositions i Linkers</div>
        <div className="sb-label">// Blok 3 — Use of English</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(9)}}><span className="sb-dot"></span>09 · Što zadatak testira</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(10)}}><span className="sb-dot"></span>10 · Gap fill i MCQ</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(11)}}><span className="sb-dot"></span>11 · Word formation</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(12)}}><span className="sb-dot"></span>12 · Najčešće zamke</div>
        <div className="sb-label">// Blok 4 — Writing</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(13)}}><span className="sb-dot"></span>13 · Dobar maturalni esej</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(14)}}><span className="sb-dot"></span>14 · Struktura eseja</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(15)}}><span className="sb-dot"></span>15 · Linking words i vocabulary</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(16)}}><span className="sb-dot"></span>16 · Greške + model essay</div>
        <div className="sb-label">// Blok 5 — Reading + Listening</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(17)}}><span className="sb-dot"></span>17 · Reading strategije</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(18)}}><span className="sb-dot"></span>18 · Listening strategije</div>
        <div className="sb-label">// Blok 6 — Vocab + Exam</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(19)}}><span className="sb-dot"></span>19 · Vocabulary for Matura</div>
        <div className="sb-item" onClick={() => {setMobDrawerOpen(false); onNavigate?.(20)}}><span className="sb-dot"></span>20 · Final Exam Survival</div>
      </div>

      {/* Sidebar */}
      <div className="shell">
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-logo"><svg viewBox="0 0 14 14" fill="none"><path d="M2 3h10M2 7h7M2 11h5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg></div>
          <div><div className="sb-name">Maturiraj.hr</div><div className="sb-sub">EN · viša razina</div></div>
        </div>
        <div onClick={() => onBack?.()} style={{display:'flex',alignItems:'center',gap:'8px',padding:'9px 18px',fontSize:'11.5px',fontFamily:'var(--mono)',color:'var(--t3)',cursor:'pointer',borderBottom:'1px solid var(--bd)',transition:'color .12s'}} onMouseOver={e=>e.currentTarget.style.color='var(--t1)'} onMouseOut={e=>e.currentTarget.style.color='var(--t3)'}><span style={{fontSize:'10px'}}>←</span> Sva poglavlja</div>
        <div className="sb-label">// Blok 1 — Start + Ispit</div>
        <div className="sb-item done-ch" style={{cursor:'pointer'}} onClick={() => onNavigate?.(1)}><span className="sb-dot"></span>01 · Kako izgleda Engleski A</div>
        <div className="sb-item done-ch" style={{cursor:'pointer'}} onClick={() => onNavigate?.(2)}><span className="sb-dot"></span>02 · Kako koristiti skriptu</div>
        <div className="sb-label">// Blok 2 — Grammar Core</div>
        <div className="sb-item done-ch" style={{cursor:'pointer'}} onClick={() => onNavigate?.(3)}><span className="sb-dot"></span>03 · Vremena koja se miješaju</div>
        <div className="sb-item done-ch" style={{cursor:'pointer'}} onClick={() => onNavigate?.(4)}><span className="sb-dot"></span>04 · Perfect vremena</div>
        <div className="sb-item active"><span className="sb-dot"></span>05 · Conditionals</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(6)}><span className="sb-dot"></span>06 · Passive, Reported Speech</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(7)}><span className="sb-dot"></span>07 · Modals, Articles, Quantifiers</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(8)}><span className="sb-dot"></span>08 · Prepositions i Linkers</div>
        <div className="sb-label">// Blok 3 — Use of English</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(9)}><span className="sb-dot"></span>09 · Što zadatak testira</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(10)}><span className="sb-dot"></span>10 · Gap fill i MCQ</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(11)}><span className="sb-dot"></span>11 · Word formation</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(12)}><span className="sb-dot"></span>12 · Najčešće zamke</div>
        <div className="sb-label">// Blok 4 — Writing</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(13)}><span className="sb-dot"></span>13 · Dobar maturalni esej</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(14)}><span className="sb-dot"></span>14 · Struktura eseja</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(15)}><span className="sb-dot"></span>15 · Linking words i vocabulary</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(16)}><span className="sb-dot"></span>16 · Greške + model essay</div>
        <div className="sb-label">// Blok 5 — Reading + Listening</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(17)}><span className="sb-dot"></span>17 · Reading strategije</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(18)}><span className="sb-dot"></span>18 · Listening strategije</div>
        <div className="sb-label">// Blok 6 — Vocab + Exam</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(19)}><span className="sb-dot"></span>19 · Vocabulary for Matura</div>
        <div className="sb-item" style={{cursor:'pointer'}} onClick={() => onNavigate?.(20)}><span className="sb-dot"></span>20 · Final Exam Survival</div>
        <div className="sb-footer">05 / 20 · grammar core<br/>maturiraj.hr</div>
      </nav>
      
      {/* Back to top */}
      <button className={`back-top ${showBackTop ? 'show' : ''}`} onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Natrag na vrh">↑</button>

      <main className="main">
        <div className="content-wrap">
          <div className="breadcrumb">
            <span style={{cursor:'pointer'}} onClick={onBack}>← chapters</span>
            <span className="bc-sep">/</span>
            <span>blok-2</span>
            <span className="bc-sep">/</span>
            <span className="bc-active">conditionals</span>
          </div>

          {/* Tabs */}
          <div className="tabs-wrap">
            <div className={`tab ${activeTab===0?'active':''} ${tabsDone[0]?'done-tab':''}`} onClick={() => switchTab(0)}>⚡ 2 min<span className="tab-check">✓</span></div>
            <div className={`tab ${activeTab===1?'active':''} ${tabsDone[1]?'done-tab':''}`} onClick={() => switchTab(1)}>📖 Gramatika<span className="tab-check">✓</span></div>
            <div className={`tab ${activeTab===2?'active':''} ${tabsDone[2]?'done-tab':''}`} onClick={() => switchTab(2)}>✍️ Vježbaj<span className="tab-check">✓</span></div>
          </div>
          <div className="tab-progress-row">
            <div className={`tab-prog-item ${activeTab===0?'active':''}`} onClick={() => switchTab(0)}><span className="tp-dot"></span>Pregled</div>
            <span className="tp-arrow">→</span>
            <div className={`tab-prog-item ${activeTab===1?'active':''} ${activeTab>1?'done':''}`} onClick={() => switchTab(1)}><span className="tp-dot"></span>Gramatika u detalju</div>
            <span className="tp-arrow">→</span>
            <div className={`tab-prog-item ${activeTab===2?'active':''}`} onClick={() => switchTab(2)}><span className="tp-dot"></span>Drill + kviz</div>
            <div className="time-est">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{opacity:.5}}><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              ~35 min
            </div>
          </div>

          {/* ═══ LAYER 0 — 2 MIN ═══ */}
          <div className={`layer ${activeTab===0?'active':''}`}>
            <div className="hero">
              <div className="hero-eyebrow">chapter 05 of 20 · blok 2 — grammar core</div>
              <h1 className="hero-title">Conditionals<br/><span>od nule do mixed</span></h1>
              <div className="hero-meta">
                <span className="hero-badge hb-time">⏱ ~2 min</span>
                <span className="hero-badge hb-level">viša razina</span>
                <span className="hero-badge hb-chapter">05 / 20</span>
              </div>
              <p className="hero-sub">Zero · First · Second · Third · Mixed conditionals · Inverzija</p>
              <div className="progress-track"><div className="progress-bar" style={{width:'25%'}}></div></div>
            </div>
            <div className="tags">
              <span className="pill pill-blue">Zero conditional</span>
              <span className="pill pill-green">First conditional</span>
              <span className="pill pill-gold">Second conditional</span>
              <span className="pill pill-red">Third conditional</span>
              <span className="pill pill-violet">Mixed conditional</span>
              <span className="pill pill-cream">Inverzija</span>
            </div>

            <div className="sec-label">// pet vrsta na jednom pogledu</div>
            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-icon blue">ZERO</div>
                <div className="stat-name">Zero Conditional</div>
                <div className="stat-desc"><b style={{color:'var(--blue)'}}>if + PS, PS</b> — opće istine, zakoni prirode, uvijek točno</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon green">1ST</div>
                <div className="stat-name">First Conditional</div>
                <div className="stat-desc"><b style={{color:'var(--brit-green)'}}>if + PS, will</b> — realna mogućnost u sadašnjosti/budućnosti</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon gold">2ND</div>
                <div className="stat-name">Second Conditional</div>
                <div className="stat-desc"><b style={{color:'var(--gold)'}}>if + Past Simple, would</b> — hipotetično, nerealno ili malo vjerojatno SADA</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon red">3RD</div>
                <div className="stat-name">Third Conditional</div>
                <div className="stat-desc"><b style={{color:'var(--union-red)'}}>if + Past Perfect, would have</b> — nerealno u PROŠLOSTI, žaljenje</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon violet">MIX</div>
                <div className="stat-name">Mixed Conditional</div>
                <div className="stat-desc"><b style={{color:'var(--violet)'}}>PP + would</b> ili <b style={{color:'var(--violet)'}}>PS + would have</b> — miješanje prošlosti i sadašnjosti</div>
              </div>
            </div>

            <div className="sec-label">// 5 panic-proof pravila</div>
            <div className="panic-box">
              <div className="panic-hd">🇬🇧 conditionals essentials — zapamti ovo pet</div>
              <div className="panic-body">
                <div className="panic-step"><div className="panic-num" style={{background:'var(--blue)'}}>1</div><div className="panic-text"><b>NIKAD &quot;will&quot; u if-klauzuli!</b> If I <span style={{color:'var(--red)'}}>will go</span> → If I <span style={{color:'var(--green)'}}>go</span>. Ovo je najčešća greška na ispitu. Will ide samo u glavnu rečenicu.</div></div>
                <div className="panic-step"><div className="panic-num" style={{background:'var(--brit-green)'}}>2</div><div className="panic-text"><b>Realno ili hipotetično?</b> Misliš da se može dogoditi → First (will). Misliš da je malo vjerojatno ili zamišljaš nerealno → Second (would). Greška: miješanje would u First ili will u Second.</div></div>
                <div className="panic-step"><div className="panic-num" style={{background:'var(--gold)'}}>3</div><div className="panic-text"><b>Third = prošlost koja se ne može promijeniti.</b> If + had done → would have done. Oba su &quot;u prošlosti&quot; i oba su hipotetična. Signal: &quot;žao mi je što...&quot;, &quot;da sam samo...&quot;</div></div>
                <div className="panic-step"><div className="panic-num" style={{background:'var(--union-red)'}}>4</div><div className="panic-text"><b>Second conditional: were, ne was!</b> U formalnom pisanju i na ispitu: &quot;If I <span style={{color:'var(--green)'}}>were</span> you...&quot; ne &quot;If I <span style={{color:'var(--red)'}}>was</span> you&quot;. Were za sve subjekte u if-klauzuli.</div></div>
                <div className="panic-step"><div className="panic-num" style={{background:'var(--violet)'}}>5</div><div className="panic-text"><b>Mixed = jedan dio prošlost, drugi sadašnjost.</b> &quot;If I had studied medicine (3rd), I would be a doctor now (2nd).&quot; Prošla radnja → sadašnja posljedica.</div></div>
              </div>
            </div>

            <div className="sec-label">// brzi pregled — klikni i provjeri</div>
            {[
              {id:'r0',icon:'🔵',title:'Zero vs First — kada koji?',content:<><b>Zero:</b> uvijek točno, zakoni, navike, opće istine → <span className="ok">If you heat water to 100°C, it boils.</span><br/><b>First:</b> realna mogućnost u budućnosti → <span className="ok">If it rains, I will take an umbrella.</span><br/><br/>Razlika: Zero = <b>uvijek</b> se dogodi. First = <b>možda</b> se dogodi.</>},
              {id:'r1',icon:'🟡',title:'Second conditional — hipotetično, were, would',content:<><b>Forma:</b> If + Past Simple, would + infinitiv<br/><span className="ok">If I won the lottery, I would travel the world.</span> (nerealno — nisam na putu da pobjedim)<br/><br/><b>Were za sve subjekte:</b> <span className="ok">If she were taller...</span> / <span className="ok">If I were you...</span><br/><span className="bad">Zamka:</span> <span style={{color:'var(--red)'}}>If I would have money</span> → <span className="ok">If I had money</span> — would se nikad ne stavlja u if-klauzulu!</>},
              {id:'r2',icon:'🔴',title:'Third conditional — prošlost koja se nije dogodila',content:<><b>Forma:</b> If + Past Perfect (had done), would have + past participle<br/><span className="ok">If I had studied harder, I would have passed the exam.</span><br/>(= nisam učio dovoljno, nisam položio — sve u prošlosti, sve hipotetično)<br/><br/><b>Signal:</b> žaljenje, &quot;da sam samo...&quot;, &quot;da nisam...&quot;<br/><span className="bad">Zamka:</span> <span style={{color:'var(--red)'}}>If I would have studied</span> → <span className="ok">If I had studied</span></>},
              {id:'r3',icon:'🟣',title:'Mixed conditional — miješanje vremena',content:<><b>Tip A (prošla radnja → sadašnja posljedica):</b><br/><span className="ok">If I had taken the job (3rd — prošlost), I would be rich now (2nd — sadašnjost).</span><br/><br/><b>Tip B (sadašnje stanje → prošla posljedica):</b><br/><span className="ok">If I were more organised (2nd — stanje sada), I would have finished on time (3rd — prošlost).</span><br/><br/><span className="note">Ključ: if-klauzula i main klauzula ne moraju biti isti tip!</span></>}
            ].map(r => (
              <div key={r.id} className={`reveal-card ${revealOpen[r.id]?'open':''}`} onClick={() => toggleReveal(r.id)}>
                <div className="reveal-q"><span className="rq-icon">{r.icon}</span><span>{r.title}</span><span className="reveal-arrow">▼</span></div>
                <div className="reveal-ans">{r.content}</div>
              </div>
            ))}

            {/* Checkpoint */}
            {!cgPassed && (
              <div className="checkpoint-gate" style={{marginTop:28}}>
                <div className="cg-hd">
                  <div className="cg-icon">🔐</div>
                  <div>
                    <div className="cg-title">Checkpoint — prolaznica</div>
                    <div className="cg-sub">Odgovori točno da otključaš Gramatiku u detalju</div>
                  </div>
                </div>
                <div className="cg-body">
                  <div className="cg-question">&quot;If she _____ harder, she _____ the exam.&quot; — koji par je točan za Third Conditional?</div>
                  <div className="cg-opts">
                    {[
                      {l:'A',t:'studies / will pass',c:false},
                      {l:'B',t:'studied / would pass',c:false},
                      {l:'C',t:'had studied / would have passed',c:true},
                      {l:'D',t:'would have studied / had passed',c:false}
                    ].map((opt,i) => (
                      <div key={i} className={`cg-opt ${cgAnswered?(opt.c?'cg-correct':'cg-wrong'):''}${cgAnswered?'cg-disabled':''}`} onClick={() => handleCgAnswer(opt.c)}>
                        <div className="cg-letter">{opt.l}</div>{opt.t}
                      </div>
                    ))}
                  </div>
                  <div className={`cg-feedback ${cgAnswered?'show':''} ${cgPassed?'pass':'fail'}`}>
                    {cgPassed 
                      ? '✓ Točno! Third Conditional = if + Past Perfect → would have + 3. stupanj. A = First, B = Second, D = greška (would have nikad u if-klauzuli).'
                      : '✗ Netočno. Third Conditional: if + Past Perfect (had studied) → would have + 3. stupanj (would have passed). Would se nikad ne stavlja u if-klauzulu.'
                    }
                  </div>
                  <button className={`cg-unlock ${cgPassed?'show':''}`} onClick={() => switchTab(1)}>Nastavi na Gramatiku u detalju →</button>
                </div>
              </div>
            )}

            <div className="nav-row">
              <span className="nav-btn" onClick={onPrev}>← Poglavlje 04</span>
              <span className="nav-btn primary" onClick={() => switchTab(1)}>Gramatika u detalju →</span>
            </div>
          </div>

          {/* ═══ LAYER 1 — GRAMATIKA ═══ */}
          <div className={`layer ${activeTab===1?'active':''}`}>
            <div className="tip-bar">
              {['Pregled svih','Zero','First','Unless','Second','Third','Mixed','Inverzija','Decision tree'].map((t,i) => (
                <React.Fragment key={i}>
                  <div className={`tip-item ${tipDone[i]?'done':''}`} onClick={() => {setTipDone(p=>({...p,[i]:true})); tipScroll(`sec-${['overview','zero','first','unless','second','third','mixed','inversion','dtree'][i]}`)}}>
                    <span className="tip-dot"></span>{t}
                  </div>
                  {i < 8 && <span className="tip-sep">›</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Overview Table */}
            <div id="sec-overview" className="sec-label">// svih 5 vrsta — usporedna tablica</div>
            <table className="cond-table">
              <thead><tr><th>Vrsta</th><th>if-klauzula</th><th>Glavna klauzula</th><th>Značenje</th></tr></thead>
              <tbody>
                <tr><td className="type-cell zero">Zero</td><td><code>if + Present Simple</code></td><td><code>Present Simple</code></td><td className="meaning">Opće istine, zakoni prirode</td></tr>
                <tr><td className="type-cell first">First</td><td><code>if + Present Simple</code></td><td><code>will + infinitiv</code></td><td className="meaning">Realna mogućnost u budućnosti</td></tr>
                <tr><td className="type-cell second">Second</td><td><code>if + Past Simple</code></td><td><code>would + infinitiv</code></td><td className="meaning">Hipotetično, nerealno SADA</td></tr>
                <tr><td className="type-cell third">Third</td><td><code>if + Past Perfect</code></td><td><code>would have + 3. st.</code></td><td className="meaning">Nerealno u PROŠLOSTI, žaljenje</td></tr>
                <tr><td className="type-cell mixed">Mixed</td><td><code>if + Past Perfect</code></td><td><code>would + infinitiv</code></td><td className="meaning">Prošla uzrok → sadašnja posljedica</td></tr>
              </tbody>
            </table>

            {/* Zero Conditional */}
            <div id="sec-zero" className="sec-label" style={{marginTop:36}}>// zero conditional — opće istine i navike</div>
            <div className="cond-block">
              <div className="cond-head">
                <div className="cond-type zero">ZERO</div>
                <div className="cond-head-text">
                  <div className="cond-title">Zero Conditional</div>
                  <div className="cond-sub">if + Present Simple → Present Simple · uvijek točno</div>
                </div>
              </div>
              <div className="cond-body">
                <div className="formula-row">
                  <div className="clause"><span className="clause-lbl">IF-klauzula</span><span className="clause-val blue">If + Present Simple</span></div>
                  <div className="plus">,</div>
                  <div className="clause"><span className="clause-lbl">Glavna klauzula</span><span className="clause-val blue">Present Simple</span></div>
                </div>
                <div className="exs">
                  <div className="ex"><div className="ex-en"><b className="blue">If</b> you <b className="blue">heat</b> water to 100°C, it <b className="blue">boils</b>.</div><div className="ex-arr">→</div><div className="ex-hr">Zakon prirode — uvijek vrijedi</div></div>
                  <div className="ex"><div className="ex-en"><b className="blue">If</b> I <b className="blue">drink</b> coffee late, I <b className="blue">can&apos;t sleep</b>.</div><div className="ex-arr">→</div><div className="ex-hr">Osobna navika — uvijek se dogodi</div></div>
                  <div className="ex"><div className="ex-en"><b className="blue">When</b> it <b className="blue">rains</b>, the ground <b className="blue">gets</b> wet.</div><div className="ex-arr">→</div><div className="ex-hr">When = if u Zero conditional</div></div>
                </div>
                <div className="callout callout-info">
                  <div className="callout-icon">💡</div>
                  <div className="callout-body">
                    <div className="callout-title">Zero ili First?</div>
                    <div className="callout-text">Zamijeni &quot;if&quot; s &quot;whenever&quot; (kad god). Ako rečenica još uvijek ima smisla → Zero. Ako zvuči čudno → First. &quot;Whenever you heat water to 100°C, it boils.&quot; ✓ → Zero.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* First Conditional */}
            <div id="sec-first" className="sec-label" style={{marginTop:36}}>// first conditional — realna mogućnost</div>
            <div className="cond-block">
              <div className="cond-head">
                <div className="cond-type first">FIRST</div>
                <div className="cond-head-text">
                  <div className="cond-title">First Conditional</div>
                  <div className="cond-sub">if + Present Simple → will + infinitiv · realna budućnost</div>
                </div>
              </div>
              <div className="cond-body">
                <div className="formula-row">
                  <div className="clause"><span className="clause-lbl">IF-klauzula</span><span className="clause-val green">If + Present Simple</span></div>
                  <div className="plus">,</div>
                  <div className="clause"><span className="clause-lbl">Glavna klauzula</span><span className="clause-val green">will + infinitiv</span></div>
                </div>
                <div className="exs">
                  <div className="ex"><div className="ex-en"><b className="green">If</b> it <b className="green">rains</b> tomorrow, I <b className="green">will stay</b> at home.</div><div className="ex-arr">→</div><div className="ex-hr">Može se dogoditi — realna mogućnost</div></div>
                  <div className="ex"><div className="ex-en"><b className="green">If</b> you <b className="green">study</b> hard, you <b className="green">will pass</b>.</div><div className="ex-arr">→</div><div className="ex-hr">Realan uvjet → realan rezultat</div></div>
                  <div className="ex"><div className="ex-en">Unless she <b className="green">calls</b>, I <b className="green">won&apos;t wait</b> for her.</div><div className="ex-arr">→</div><div className="ex-hr">Unless = if...not</div></div>
                </div>
                <div className="callout callout-warn">
                  <div className="callout-icon">🚫</div>
                  <div className="callout-body">
                    <div className="callout-title">Will NIKAD u if-klauzuli</div>
                    <div className="callout-text">
                      <span style={{color:'var(--red)'}}>✗ If it will rain, I will stay home.</span><br/>
                      <span style={{color:'var(--green)'}}>✓ If it rains, I will stay home.</span><br/>
                      If-klauzula ide u Present Simple (ili Present Perfect za naglasak na dovršenosti), nikad will.
                    </div>
                  </div>
                </div>
                <div className="callout callout-tip">
                  <div className="callout-icon">💡</div>
                  <div className="callout-body">
                    <div className="callout-title">Varijante u glavnoj klauzuli — ne samo will</div>
                    <div className="callout-text">Uz will mogu stajati: <b>can, may, might, should, must</b>.<br/>
                    &quot;If you finish early, you <b>can leave</b>.&quot; / &quot;If it rains, you <b>might need</b> an umbrella.&quot;</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Unless section */}
            <div id="sec-unless" className="sec-label" style={{marginTop:36}}>// unless · provided · as long as — varijante if-a</div>
            <p className="prose">Na ispitu se uz standardni <em>if</em> pojavljuju i drugi veznici koji uvode kondicionalne klauze. Svi funkcioniraju po istim pravilima — <strong>nikad will iza njih</strong>.</p>
            <div style={{background:'var(--bg-card)',border:'1px solid var(--bd-mid)',borderRadius:'var(--r3)',overflow:'hidden',margin:'14px 0 20px'}}>
              {[
                {color:'var(--brit-green)',bg:'var(--brit-green-dim)',word:'unless',meaning:'= if...not — negativni uvjet. Unless you hurry, you\'ll be late. = If you don\'t hurry...'},
                {color:'var(--blue)',bg:'var(--blue-dim)',word:'provided (that)',meaning:'= if and only if — uvjet je neophodan. You can go, provided you finish first.'},
                {color:'var(--gold)',bg:'var(--gold-dim)',word:'as long as',meaning:'= pod uvjetom da — trajni uvjet. You can borrow it as long as you return it.'},
                {color:'var(--amber)',bg:'var(--amber-dim)',word:'in case',meaning:'= za slučaj da — preventivna akcija. Take an umbrella in case it rains. (≠ if!)'}
              ].map((item, i, arr) => (
                <div key={i} style={{display:'grid',gridTemplateColumns:'160px 1fr',borderBottom:i<arr.length-1?'1px solid var(--bd)':'none'}}>
                  <div style={{padding:'11px 14px',fontFamily:'var(--mono)',fontSize:12,fontWeight:700,color:item.color,borderRight:'1px solid var(--bd)',background:item.bg}}>{item.word}</div>
                  <div style={{padding:'11px 14px',fontSize:13,color:'var(--t2)'}} dangerouslySetInnerHTML={{__html: item.meaning.replace(/\*\*(.*?)\*\*/g, '<b style="color:var(--t1)">$1</b>')}}></div>
                </div>
              ))}
            </div>
            <div className="callout callout-warn">
              <div className="callout-icon">⚠️</div>
              <div className="callout-body">
                <div className="callout-title">Unless ≠ if not u svim slučajevima</div>
                <div className="callout-text">Unless se koristi kad negativni uvjet uvodi <b>izuzetak</b> — &quot;osim ako&quot;. Ne može zamijeniti svaki &quot;if not&quot;:<br/>
                <span style={{color:'var(--green)'}}>✓ Unless it rains, we&apos;ll go.</span> (= osim ako ne padne kiša)<br/>
                <span style={{color:'var(--red)'}}>✗ Unless you study, you won&apos;t fail.</span> → mora biti: <span style={{color:'var(--green)'}}>If you don&apos;t study, you&apos;ll fail.</span><br/>
                Zamka: unless već ima negativno značenje — nemoj dodavati &quot;not&quot;: <span style={{color:'var(--red)'}}>unless you don&apos;t hurry</span> → <span style={{color:'var(--green)'}}>unless you hurry</span></div>
              </div>
            </div>

            {/* Second Conditional */}
            <div id="sec-second" className="sec-label" style={{marginTop:36}}>// second conditional — hipotetično i nerealno</div>
            <div className="cond-block">
              <div className="cond-head">
                <div className="cond-type second">SECOND</div>
                <div className="cond-head-text">
                  <div className="cond-title">Second Conditional</div>
                  <div className="cond-sub">if + Past Simple → would + infinitiv · hipotetično sada</div>
                </div>
              </div>
              <div className="cond-body">
                <div className="formula-row">
                  <div className="clause"><span className="clause-lbl">IF-klauzula</span><span className="clause-val gold">If + Past Simple</span></div>
                  <div className="plus">,</div>
                  <div className="clause"><span className="clause-lbl">Glavna klauzula</span><span className="clause-val gold">would + infinitiv</span></div>
                </div>
                <div className="exs">
                  <div className="ex"><div className="ex-en"><b className="gold">If</b> I <b className="gold">had</b> more money, I <b className="gold">would travel</b> the world.</div><div className="ex-arr">→</div><div className="ex-hr">Nemam — hipotetično, nerealno</div></div>
                  <div className="ex"><div className="ex-en"><b className="gold">If</b> I <b className="gold">were</b> you, I <b className="gold">would apologise</b>.</div><div className="ex-arr">→</div><div className="ex-hr">Were (ne was!) za sve subjekte</div></div>
                  <div className="ex"><div className="ex-en">What <b className="gold">would</b> you do if you <b className="gold">lost</b> your job?</div><div className="ex-arr">→</div><div className="ex-hr">Inverzija glavne i if-klauzule — OK!</div></div>
                </div>
                <div className="callout callout-warn">
                  <div className="callout-icon">⚠️</div>
                  <div className="callout-body">
                    <div className="callout-title">were, ne was — na ispitu uvijek were</div>
                    <div className="callout-text">
                      <span style={{color:'var(--red)'}}>✗ If she was taller, she would play basketball.</span><br/>
                      <span style={{color:'var(--green)'}}>✓ If she were taller, she would play basketball.</span><br/>
                      Gramatički se &quot;was&quot; tolerira u govoru, ali na pisanom ispitu uvijek koristiti <b>were</b>.
                    </div>
                  </div>
                </div>
                <div className="callout callout-tip">
                  <div className="callout-icon">💡</div>
                  <div className="callout-body">
                    <div className="callout-title">First ili Second — test realnosti</div>
                    <div className="callout-text">Pitaj se: je li ovo <b>realno moguće</b>? Ako da → First. Ako je malo vjerojatno ili potpuno nerealno → Second.<br/>
                    &quot;If I study, I&apos;ll pass.&quot; (realno, mogu studirati) → First<br/>
                    &quot;If I were Einstein, I&apos;d solve it.&quot; (nerealno) → Second</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Conditional */}
            <div id="sec-third" className="sec-label" style={{marginTop:36}}>// third conditional — prošlost koja se nije dogodila</div>
            <div className="cond-block">
              <div className="cond-head">
                <div className="cond-type third">THIRD</div>
                <div className="cond-head-text">
                  <div className="cond-title">Third Conditional</div>
                  <div className="cond-sub">if + Past Perfect → would have + 3. stupanj · prošlo, nerealno</div>
                </div>
              </div>
              <div className="cond-body">
                <div className="formula-row">
                  <div className="clause"><span className="clause-lbl">IF-klauzula</span><span className="clause-val red">If + Past Perfect (had done)</span></div>
                  <div className="plus">,</div>
                  <div className="clause"><span className="clause-lbl">Glavna klauzula</span><span className="clause-val red">would have + 3. stupanj</span></div>
                </div>
                <div className="exs">
                  <div className="ex"><div className="ex-en"><b className="red">If</b> I <b className="red">had studied</b> harder, I <b className="red">would have passed</b>.</div><div className="ex-arr">→</div><div className="ex-hr">Nisam učio, nisam prošao — žaljenje</div></div>
                  <div className="ex"><div className="ex-en"><b className="red">If</b> she <b className="red">hadn&apos;t missed</b> the bus, she <b className="red">would have arrived</b> on time.</div><div className="ex-arr">→</div><div className="ex-hr">Nije stigla — negacija u if-klauzuli</div></div>
                  <div className="ex"><div className="ex-en"><b className="red">Had</b> I <b className="red">known</b>, I <b className="red">would have helped</b>. (inverzija)</div><div className="ex-arr">→</div><div className="ex-hr">Formalna inverzija bez &quot;if&quot;</div></div>
                </div>
                <div className="callout callout-warn">
                  <div className="callout-icon">🚫</div>
                  <div className="callout-body">
                    <div className="callout-title">Would have NIKAD u if-klauzuli</div>
                    <div className="callout-text">
                      <span style={{color:'var(--red)'}}>✗ If I would have studied, I would have passed.</span><br/>
                      <span style={{color:'var(--green)'}}>✓ If I had studied, I would have passed.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mixed Conditional */}
            <div id="sec-mixed" className="sec-label" style={{marginTop:36}}>// mixed conditional — miješanje prošlosti i sadašnjosti</div>
            <p className="prose">Mixed conditional nastaje kad if-klauzula i glavna klauzula ne govore o istom vremenskom okviru.</p>
            <div className="cond-block">
              <div className="cond-head">
                <div className="cond-type mixed">MIXED A</div>
                <div className="cond-head-text">
                  <div className="cond-title">Tip A: prošla uzrok → sadašnja posljedica</div>
                  <div className="cond-sub">if + Past Perfect (3rd) → would + inf (2nd)</div>
                </div>
              </div>
              <div className="cond-body">
                <div className="formula-row">
                  <div className="clause"><span className="clause-lbl">IF — prošlost (3rd)</span><span className="clause-val violet">If + had done</span></div>
                  <div className="plus">,</div>
                  <div className="clause"><span className="clause-lbl">Glavna — sada (2nd)</span><span className="clause-val violet">would + infinitiv</span></div>
                </div>
                <div className="exs">
                  <div className="ex"><div className="ex-en"><b className="violet">If</b> I <b className="violet">had taken</b> that job, I <b className="violet">would be</b> rich now.</div><div className="ex-arr">→</div><div className="ex-hr">Nisam uzeo posao (prošlost) → nisam bogat sada</div></div>
                  <div className="ex"><div className="ex-en"><b className="violet">If</b> she <b className="violet">had studied</b> medicine, she <b className="violet">would be</b> a doctor now.</div><div className="ex-arr">→</div><div className="ex-hr">Nije studirala (prošlost) → nije doktor sada</div></div>
                </div>
              </div>
            </div>

            {/* Mixed B */}
            <div className="cond-block" style={{marginTop:12}}>
              <div className="cond-head">
                <div className="cond-type mixed">MIXED B</div>
                <div className="cond-head-text">
                  <div className="cond-title">Tip B: sadašnje stanje → prošla posljedica</div>
                  <div className="cond-sub">if + Past Simple (2nd) → would have + 3. st. (3rd)</div>
                </div>
              </div>
              <div className="cond-body">
                <div className="formula-row">
                  <div className="clause"><span className="clause-lbl">IF — stanje sada (2nd)</span><span className="clause-val violet">If + Past Simple</span></div>
                  <div className="plus">,</div>
                  <div className="clause"><span className="clause-lbl">Glavna — prošlost (3rd)</span><span className="clause-val violet">would have + 3. st.</span></div>
                </div>
                <div className="exs">
                  <div className="ex"><div className="ex-en"><b className="violet">If</b> I <b className="violet">were</b> more careful, I <b className="violet">wouldn&apos;t have made</b> that mistake.</div><div className="ex-arr">→</div><div className="ex-hr">Nisam pažljiv (sada) → napravio grešku (prošlost)</div></div>
                  <div className="ex"><div className="ex-en"><b className="violet">If</b> she <b className="violet">were</b> a native speaker, she <b className="violet">would have understood</b> the joke.</div><div className="ex-arr">→</div><div className="ex-hr">Nije izvorni govornik (stanje) → nije razumjela (prošlost)</div></div>
                </div>
              </div>
            </div>

            {/* Inversion */}
            <div id="sec-inversion" className="sec-label" style={{marginTop:36}}>// inverzija — formalni conditional bez &quot;if&quot;</div>
            <p className="prose">U formalnom pisanju, &quot;if&quot; se može izostaviti inverzijom (zamjenom mjesta subjekta i pomoćnog glagola).</p>
            <table className="cond-table">
              <thead><tr><th>Tip</th><th>S &quot;if&quot;</th><th>Inverzija (bez &quot;if&quot;)</th></tr></thead>
              <tbody>
                <tr><td className="type-cell first">First</td><td><em>If you should need help...</em></td><td><em><b>Should</b> you need help...</em></td></tr>
                <tr><td className="type-cell second">Second</td><td><em>If I were you...</em></td><td><em><b>Were</b> I you...</em></td></tr>
                <tr><td className="type-cell third">Third</td><td><em>If I had known...</em></td><td><em><b>Had</b> I known...</em></td></tr>
              </tbody>
            </table>
            <div className="callout callout-info">
              <div className="callout-icon">📝</div>
              <div className="callout-body">
                <div className="callout-title">Inverzija na ispitu — prepoznavanje</div>
                <div className="callout-text">Vidiš rečenicu koja počinje s <b>Had, Were</b> ili <b>Should</b> bez subjekta odmah — to je inverzija. Prepoznaj je i prevedi u normalnu if-formu da provjeriš značenje: &quot;Had I known&quot; = &quot;If I had known&quot;.</div>
              </div>
            </div>

            {/* Decision Tree */}
            <div id="sec-dtree" className="sec-label" style={{marginTop:36}}>// decision tree — koji conditional odabrati</div>
            <p style={{fontSize:13,color:'var(--t2)',marginBottom:16,fontFamily:'var(--mono)'}}>Tri pitanja, jedan odgovor.</p>
            <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:24}}>
              <div style={{background:'var(--bg-card)',border:'1px solid var(--bd-mid)',borderRadius:'var(--r3)',padding:'13px 16px',fontSize:13,fontWeight:600,color:'var(--t1)'}}>⏰ Govoriš li o PROŠLOSTI koja se nije dogodila (žaljenje)?</div>
              <div style={{paddingLeft:20,borderLeft:'2px solid var(--union-red)',marginLeft:8}}>
                <div style={{fontFamily:'var(--mono)',fontSize:11,color:'var(--t3)',marginBottom:6}}>DA →</div>
                <div style={{background:'var(--union-red-dim)',border:'1px solid var(--union-red-bd)',borderRadius:'var(--r3)',padding:'11px 14px',color:'var(--union-red)',fontSize:13,fontWeight:600}}>→ <b>Third Conditional</b>: if + had done, would have done</div>
              </div>
              <div style={{background:'var(--bg-card)',border:'1px solid var(--bd-mid)',borderRadius:'var(--r3)',padding:'13px 16px',fontSize:13,fontWeight:600,color:'var(--t1)',marginTop:4}}>💭 Govoriš li o nečemu HIPOTETIČNOM ili NEREALNOM sada?</div>
              <div style={{paddingLeft:20,borderLeft:'2px solid var(--gold)',marginLeft:8}}>
                <div style={{fontFamily:'var(--mono)',fontSize:11,color:'var(--t3)',marginBottom:6}}>DA →</div>
                <div style={{background:'var(--gold-dim)',border:'1px solid var(--gold-bd)',borderRadius:'var(--r3)',padding:'11px 14px',color:'var(--gold)',fontSize:13,fontWeight:600}}>→ <b>Second Conditional</b>: if + Past Simple, would + inf</div>
              </div>
              <div style={{background:'var(--bg-card)',border:'1px solid var(--bd-mid)',borderRadius:'var(--r3)',padding:'13px 16px',fontSize:13,fontWeight:600,color:'var(--t1)',marginTop:4}}>✅ Je li situacija REALNA i MOGUĆA u budućnosti?</div>
              <div style={{paddingLeft:20,borderLeft:'2px solid var(--brit-green)',marginLeft:8}}>
                <div style={{fontFamily:'var(--mono)',fontSize:11,color:'var(--t3)',marginBottom:6}}>DA →</div>
                <div style={{background:'var(--brit-green-dim)',border:'1px solid var(--brit-green-bd)',borderRadius:'var(--r3)',padding:'11px 14px',color:'var(--brit-green)',fontSize:13,fontWeight:600}}>→ <b>First Conditional</b>: if + Present Simple, will + inf</div>
              </div>
              <div style={{background:'var(--bg-card)',border:'1px solid var(--bd-mid)',borderRadius:'var(--r3)',padding:'13px 16px',fontSize:13,fontWeight:600,color:'var(--t1)',marginTop:4}}>🔄 Je li uvijek točno — zakon, navika, opća istina?</div>
              <div style={{paddingLeft:20,borderLeft:'2px solid var(--blue)',marginLeft:8}}>
                <div style={{fontFamily:'var(--mono)',fontSize:11,color:'var(--t3)',marginBottom:6}}>DA →</div>
                <div style={{background:'var(--blue-dim)',border:'1px solid var(--blue-border)',borderRadius:'var(--r3)',padding:'11px 14px',color:'var(--blue)',fontSize:13,fontWeight:600}}>→ <b>Zero Conditional</b>: if + Present Simple, Present Simple</div>
              </div>
              <div style={{background:'var(--violet-dim)',border:'1px solid var(--violet-border)',borderRadius:'var(--r3)',padding:'11px 14px',color:'var(--violet)',fontSize:13,fontWeight:600,marginTop:4}}>⚡ Prošla uzrok + sadašnja posljedica (ili obratno)? → <b>Mixed Conditional</b></div>
            </div>

            <div className="discere-box">
              <div className="discere-hd"><div className="discere-hd-icon">🎯</div><div className="discere-hd-text">Discere — vježbaj conditionals</div></div>
              <div className="discere-body">
                <div className="discere-desc">Filter: <b>conditionals</b> → 8–10 zadataka. Griješiš na Second vs Third? Vrati se na decision tree i ponovi sekciju.</div>
                <button type="button" className="discere-btn" onClick={() => setShowDiscereModal(true)}>Otvori Discere →</button>
              </div>
            </div>
            <div className="nav-row">
              <span className="nav-btn" onClick={() => switchTab(0)}>← Pregled</span>
              <span className="nav-btn primary" onClick={() => switchTab(2)}>Vježbaj →</span>
            </div>
          </div>

          {/* ═══ LAYER 2 — VJEŽBAJ ═══ */}
          <div className={`layer ${activeTab===2?'active':''}`}>
            <div className="sec-label">// speed drill — koji conditional?</div>
            <div className="sd-intro">9 zadataka — svaki testira drugačiju distinkciju. Odaberi točan glagolski oblik u praznini.</div>
            
            {/* Progress dots */}
            <div className="sd-progress">
              {DRILL_DATA.map((_, i) => (
                <div key={i} className={`sd-dot ${i === drillIdx && !drillDone ? 'cur' : ''} ${drillResults[i] === true ? 'ok' : drillResults[i] === false ? 'no' : ''}`}></div>
              ))}
            </div>

            {/* Drill Question */}
            {!drillDone && drillIdx < DRILL_DATA.length && (
              <div className="sd-q">
                <div className="sd-sent" dangerouslySetInnerHTML={{__html: DRILL_DATA[drillIdx].q}}></div>
                <div className="sd-btns">
                  {DRILL_DATA[drillIdx].opts.map((opt, i) => {
                    const isCorrect = i === DRILL_DATA[drillIdx].correct;
                    const wasPicked = drillPickedIdx === i;
                    const userGotItRight = drillResults[drillIdx] === true;
                    
                    let btnClass = `sd-btn opt-${DRILL_DATA[drillIdx].colors[i]}`;
                    if (drillAnswered) {
                      btnClass += ' picked disabled';
                      if (wasPicked && userGotItRight) {
                        btnClass += ' correct-pick';
                      } else if (wasPicked && !userGotItRight) {
                        btnClass += ' wrong-pick';
                      } else if (isCorrect && !userGotItRight) {
                        btnClass += ' reveal-correct';
                      }
                    }
                    
                    return (
                      <button
                        key={i}
                        className={btnClass}
                        onClick={() => handleDrillPick(i)}
                        disabled={drillAnswered}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {drillShowFb && (
                  <div className={`sd-fb show ${drillResults[drillIdx] ? 'ok' : 'no'}`} dangerouslySetInnerHTML={{__html: (drillResults[drillIdx] ? '✓ ' : '✗ ') + DRILL_DATA[drillIdx].fb}}></div>
                )}
              </div>
            )}

            {/* Drill Score */}
            {drillDone && (
              <div className="sd-score show">
                <div className="sd-score-num">{drillScore}/{DRILL_DATA.length}</div>
                <div className="sd-score-lbl">{getDrillLbl()}</div>
                <button className="sd-retry" onClick={resetDrill}>↺ Ponovi drill</button>
                {showExport && (
                  <button className="quiz-export-btn" style={{marginTop:10}} onClick={exportResults}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v7M4 6l2.5 2.5L9 6M2 10h9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Spremi rezultate kao sliku
                  </button>
                )}
              </div>
            )}

            {/* Error Drill */}
            <div className="sec-label" style={{marginTop:36}}>// ispravi grešku</div>
            <p style={{fontSize:'12.5px',color:'var(--t2)',marginBottom:14,fontFamily:'var(--mono)'}}>Svaka rečenica ima točno jednu grešku. Pronađi je, pa provjeri.</p>
            <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14,fontFamily:'var(--mono)',fontSize:11,color:'var(--t3)'}}>
              Otvoreno ispravaka: <span style={{color:'var(--blue)',fontWeight:700}}>{errCount < ERROR_ITEMS.length ? `${errCount} / ${ERROR_ITEMS.length}` : ''}</span>
              {errCount >= ERROR_ITEMS.length && <span style={{color:'var(--green)',fontWeight:700}}>✓ Sve provjeri!</span>}
            </div>
            <div className="err-drill">
              {ERROR_ITEMS.map((item, i) => (
                <div key={i} className="err-item">
                  <div className="err-sent">{item.sent}</div>
                  <button className="err-btn" onClick={() => toggleErr(i)}>{errOpen[i] ? '▼ Sakrij ispravak' : '▶ Pokaži ispravak'}</button>
                  <div className={`err-fix ${errOpen[i] ? 'show' : ''}`}>
                    <span className="correct">{item.correct}</span>
                    <span className="explain">{item.explain}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quiz */}
            <div className="sec-label" style={{marginTop:36}}>// kviz — odaberi točan odgovor</div>
            <div className="quiz-intro"><strong>9 pitanja</strong> — Zero, First, Second, Third, Mixed, inverzija i unless. Svako ima objašnjenje.</div>

            {QUIZ_DATA.map((q) => (
              <div key={q.id} className="q-block">
                <div className="q-head">
                  <div className="q-meta">{q.meta}</div>
                  <div className="q-text" style={{whiteSpace:'pre-line'}}>{q.text}</div>
                </div>
                <div className="q-opts">
                  {q.opts.map((opt, i) => {
                    const answered = quizAnswers[q.id] !== undefined;
                    const isCorrect = opt.c;
                    const wasPicked = answered && quizAnswers[q.id].picked === i;
                    return (
                      <div
                        key={i}
                        className={`q-opt ${answered ? 'disabled' : ''} ${answered && isCorrect ? 'correct' : ''} ${wasPicked && !isCorrect ? 'wrong' : ''}`}
                        onClick={() => handleQuizAnswer(q.id, i, opt.c)}
                      >
                        <div className="q-letter">{opt.l}</div>{opt.t}
                      </div>
                    );
                  })}
                </div>
                <div className={`q-expl ${quizAnswers[q.id] !== undefined ? 'show' : ''}`}>
                  <div className="expl-ok">{q.expl}</div>
                </div>
              </div>
            ))}

            <div className="discere-box" style={{marginTop:32}}>
              <div className="discere-hd"><div className="discere-hd-icon">🚀</div><div className="discere-hd-text">Spreman si za pravu vježbu</div></div>
              <div className="discere-body">
                <div className="discere-desc">Završio si Poglavlje 5. Otvori Discere → filter <b>conditionals</b> → 10 zadataka. Poglavlje 6 pokriva: <b>Passive Voice i Reported Speech</b>.</div>
                <button type="button" className="discere-btn" onClick={() => setShowDiscereModal(true)}>Otvori Discere →</button>
              </div>
            </div>

            {/* ═══ PREMIUM GATE: AI PROFESSOR ═══ */}
            <div className="pg-ai">
              <div className="pg-ai-hd">
                <div className="pg-ai-ico">🤖</div>
                <div style={{flex:1,minWidth:0}}>
                  <div className="pg-ai-ttl">AI Profesor <span className="pg-ai-badge">PRO · 200 msg/dan</span></div>
                  <div className="pg-ai-sub">Imaš pitanje o gramatici, pisanju eseja ili strategiji ispita? Pitaj me — odgovorim odmah.</div>
                </div>
              </div>
              <div className="pg-ai-chips">
                <span className="pg-ai-chip" onClick={() => setShowPaywall(true)}>💬 Kako pisati esej na C1/C2 razini?</span>
                <span className="pg-ai-chip" onClick={() => setShowPaywall(true)}>💬 Top 5 grešaka na engleskom ispitu</span>
                <span className="pg-ai-chip" onClick={() => setShowPaywall(true)}>💬 Plan učenja za 3 tjedna do mature</span>
              </div>
              <div className="pg-ai-bubble">
                Conditionals, Passive, Reported Speech, esej struktura — <strong>AI profesor odgovara 24/7</strong><span className="pg-ai-typing"><span></span><span></span><span></span></span>
              </div>
              <button type="button" className="pg-ai-cta" onClick={() => setShowPaywall(true)}>Otključaj AI profesora →</button>
            </div>

            {/* ═══ PREMIUM GATE: DISCERE SIMULATOR ═══ */}
            <div className="pg-disc">
              <div className="pg-disc-hd">
                <div className="pg-disc-ico">🎯</div>
                <div style={{flex:1,minWidth:0}}>
                  <div className="pg-disc-ttl">Discere Simulator <span className="pg-disc-badge">STANDARD</span></div>
                  <div className="pg-disc-sub">Pravi ispit uvjeti — tajmer, bodovi, feedback. Provjeri se na 40+ stvarnih ENJ ispita.</div>
                </div>
              </div>
              <button type="button" className="pg-disc-cta" onClick={() => setShowDiscereModal(true)}>Pokreni simulator →</button>
            </div>

            <div className="nav-row">
              <span className="nav-btn" onClick={() => switchTab(1)}>← Gramatika</span>
              <span className="nav-btn primary" onClick={onNext}>Poglavlje 06: Passive →</span>
            </div>
          </div>
        </div>
      </main>
      </div>

      {/* ═══ PAYWALL MODAL ═══ */}
      {showPaywall && (
        <div className="paywall-overlay" onClick={e => { if(e.target===e.currentTarget) setShowPaywall(false); }}>
          <div className="paywall-card">
            <button type="button" className="paywall-close" onClick={() => setShowPaywall(false)}>×</button>
            <div className="paywall-h">💎 Otključaj <span style={{background:'linear-gradient(135deg,#C9A227,#CF142B)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Pro</span></div>
            <div className="paywall-sub">AI profesor pomaže s gramatikom, strukturom eseja i strategijom ispita — personalizirano za tebe.</div>
            <div className="paywall-tiers">
              <div className="paywall-tier">
                <div className="paywall-tier-lbl">Standard</div>
                <div className="paywall-tier-price">9,99€<span className="per"> /mj</span></div>
                <div className="paywall-tier-feat">• Svi Discere simulatori<br />• Sva gradiva u skriptama<br />• AI: 30 poruka/dan</div>
              </div>
              <div className="paywall-tier popular">
                <div className="paywall-tier-lbl">Pro</div>
                <div className="paywall-tier-price">19,99€<span className="per"> /mj</span></div>
                <div className="paywall-tier-feat">• Sve iz Standard<br />• AI: 200 poruka/dan<br />• AI plan učenja<br />• Prijemni priprema</div>
              </div>
            </div>
            <button type="button" className="paywall-cta-btn" onClick={goCheckout}>Nastavi s Pro →</button>
            <div className="paywall-note"><strong>7 dana besplatno</strong> · otkaži bilo kada · bez obveze</div>
          </div>
        </div>
      )}

      {/* ═══ DISCERE MODAL ═══ */}
      {showDiscereModal && (
        <div className="paywall-overlay" onClick={e => { if(e.target===e.currentTarget) setShowDiscereModal(false); }}>
          <div className="paywall-card">
            <button type="button" className="paywall-close" onClick={() => setShowDiscereModal(false)}>×</button>
            <div className="paywall-h">🎯 Discere — <span style={{background:'linear-gradient(135deg,#4CAF7D,#34D399)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Simulator</span></div>
            <div className="paywall-sub">Simuliraj pravi ENJ viša ispit. Dostupno uz Standard plan.</div>
            <div className="paywall-tiers">
              <div className="paywall-tier popular">
                <div className="paywall-tier-lbl">Standard</div>
                <div className="paywall-tier-price">9,99€<span className="per"> /mj</span></div>
              </div>
              <div className="paywall-tier">
                <div className="paywall-tier-lbl">Pro</div>
                <div className="paywall-tier-price">19,99€<span className="per"> /mj</span></div>
              </div>
            </div>
            <button type="button" className="paywall-cta-disc" onClick={goCheckout}>Otključaj Discere →</button>
            <div className="paywall-note"><strong>7 dana besplatno</strong> · otkaži bilo kada</div>
          </div>
        </div>
      )}
    </>
  );
}

export { EngP05Conditionals as ENG_VISA_CH05 }