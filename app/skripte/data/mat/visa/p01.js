/**
 * Maturiraj.hr — Matematika A razina
 * Poglavlje: P01 — Skupovi, Brojevi, Apsolutna Vrijednost
 * Auto-generated ES6 module v2
 *
 * Upotreba:
 *   import chapter from './p01.js'
 *   chapter.mount(document.getElementById('container'))
 *   chapter.unmount(document.getElementById('container'))
 */

const css = `:root{
  --bg:#060910;--sur:#0A0E1A;--ele:#0E1422;--card:#111726;--hov:#17203A;--inp:#0A0F1A;
  --bd:rgba(77,158,255,0.07);--bdm:rgba(77,158,255,0.13);--bdl:rgba(77,158,255,0.22);
  --blue:#4D9EFF;--bd-b:rgba(77,158,255,0.20);--dim-b:rgba(77,158,255,0.09);--glow-b:rgba(77,158,255,0.035);
  --cyan:#22D3EE;--bd-c:rgba(34,211,238,0.20);--dim-c:rgba(34,211,238,0.09);
  --indigo:#818CF8;--bd-i:rgba(129,140,248,0.20);--dim-i:rgba(129,140,248,0.09);
  --amber:#F59E0B;--bd-a:rgba(245,158,11,0.20);--dim-a:rgba(245,158,11,0.09);
  --red:#F87171;--bd-r:rgba(248,113,113,0.20);--dim-r:rgba(248,113,113,0.09);
  --green:#34D399;--bd-g:rgba(52,211,153,0.20);--dim-g:rgba(52,211,153,0.09);
  --violet:#C084FC;--bd-v:rgba(192,132,252,0.20);--dim-v:rgba(192,132,252,0.09);
  --t1:#E4EDFF;--t2:#7A90BB;--t3:#364060;
  --font:'Plus Jakarta Sans',system-ui,sans-serif;--mono:'JetBrains Mono',monospace;
  --r1:4px;--r2:8px;--r3:12px;--r4:16px;--r5:24px;--sb:252px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.shell{display:flex;min-height:100vh}

/* ── SIDEBAR ── */
.sidebar{width:var(--sb);flex-shrink:0;background:var(--sur);border-right:1px solid var(--bd);position:sticky;top:0;height:100vh;overflow-y:auto;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--bdm) transparent}
.sidebar::-webkit-scrollbar{width:3px}.sidebar::-webkit-scrollbar-thumb{background:var(--bdm);border-radius:2px}
.sb-brand{padding:16px 14px 13px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.sb-logo{width:30px;height:30px;background:linear-gradient(135deg,var(--blue),var(--cyan));border-radius:var(--r2);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 0 18px rgba(77,158,255,0.28)}
.sb-logo svg{width:14px;height:14px}
.sb-name{font-size:13px;font-weight:800;color:var(--t1);letter-spacing:-.4px}
.sb-sub{font-size:10px;color:var(--t3);margin-top:1px;font-family:var(--mono)}
.sb-hamburger{display:none;position:fixed;top:12px;left:12px;z-index:200;width:36px;height:36px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);align-items:center;justify-content:center;cursor:pointer;flex-direction:column;gap:4px}
.sb-hamburger span{display:block;width:16px;height:1.5px;background:var(--t2);border-radius:1px;transition:all .2s}
.sb-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:150;backdrop-filter:blur(2px)}
.sb-overlay.show{display:block}
.sidebar.mobile-open{transform:translateX(0)!important}
.sb-prog-wrap{padding:8px 14px;border-bottom:1px solid var(--bd)}
.sb-prog-label{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-bottom:5px;display:flex;justify-content:space-between}
.sb-prog-track{height:3px;background:var(--bd);border-radius:2px;overflow:hidden}
.sb-prog-bar{height:100%;background:linear-gradient(90deg,var(--blue),var(--cyan));border-radius:2px;transition:width .5s cubic-bezier(.4,0,.2,1)}
.sb-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--t3);text-transform:uppercase;padding:15px 14px 5px}
.sb-item{display:flex;align-items:center;gap:9px;padding:6px 14px;font-size:11.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.35}
.sb-item:hover{color:var(--t1);background:var(--hov)}
.sb-item.active{color:var(--blue);background:var(--glow-b);border-left-color:var(--blue);font-weight:600}
.sb-item.done{color:var(--green);opacity:.7}
.sb-item.done .sb-dot{background:var(--green);opacity:.7}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.35}
.sb-item.active .sb-dot{opacity:1}
button.sb-item{font-family:var(--font);outline:none;line-height:1.35}
.sb-footer{margin-top:auto;padding:10px 14px;border-top:1px solid var(--bd);font-size:10px;color:var(--t3);line-height:1.7;font-family:var(--mono)}

/* ── MAIN ── */
.main{flex:1;min-width:0}
.content-wrap{max-width:840px;width:100%;margin:0 auto;padding:32px 44px 120px}

/* ── BREADCRUMB ── */
.bc{display:flex;align-items:center;gap:8px;font-size:11px;color:var(--t3);margin-bottom:22px;font-family:var(--mono)}
.bc-sep{opacity:.3}.bc-cur{color:var(--blue)}

/* ── TABS ── */
.tabs{display:flex;gap:0;margin-bottom:28px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);padding:3px;width:fit-content}
.tab{padding:7px 20px;font-size:12px;font-weight:600;color:var(--t2);cursor:pointer;border-radius:5px;transition:all .18s;white-space:nowrap;font-family:var(--mono)}
.tab:hover{color:var(--t1)}
.tab.on{background:linear-gradient(135deg,var(--blue),var(--cyan));color:#060910;font-weight:700;box-shadow:0 2px 16px rgba(77,158,255,0.3)}
.layer{display:none}.layer.on{display:block}

/* ── HERO ── */
.hero{margin-bottom:26px;padding:30px 34px;background:var(--card);border:1px solid var(--bdm);border-radius:20px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--blue),var(--cyan),var(--indigo),transparent)}
.hero-orb{position:absolute;top:-60px;right:-60px;width:280px;height:280px;background:radial-gradient(circle,rgba(77,158,255,0.055) 0%,transparent 70%);border-radius:50%;pointer-events:none}
.hero-orb2{position:absolute;bottom:-50px;left:20%;width:200px;height:200px;background:radial-gradient(circle,rgba(34,211,238,0.035) 0%,transparent 70%);border-radius:50%;pointer-events:none}
.hero-eyebrow{font-family:var(--mono);font-size:9.5px;color:var(--cyan);letter-spacing:2px;margin-bottom:11px;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.hero-eyebrow::before{content:'';display:inline-block;width:18px;height:1px;background:var(--cyan);opacity:.5}
.hero-title{font-size:27px;font-weight:800;color:var(--t1);letter-spacing:-1px;line-height:1.12;margin-bottom:8px}
.hero-title span{background:linear-gradient(135deg,var(--blue),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:12.5px;color:var(--t2);font-family:var(--mono);margin-bottom:18px;line-height:1.65}
.hero-meta{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px}
.hchip{font-family:var(--mono);font-size:10px;padding:3px 10px;border-radius:var(--r1);border:1px solid;letter-spacing:.3px;font-weight:600}
.hchip.b{background:var(--dim-b);color:var(--blue);border-color:var(--bd-b)}
.hchip.a{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}
.hchip.c{background:var(--dim-c);color:var(--cyan);border-color:var(--bd-c)}
.pt{height:2px;background:var(--bd);border-radius:1px;overflow:visible;width:100%;max-width:360px;position:relative}
.pb{height:100%;background:linear-gradient(90deg,var(--blue),var(--cyan));border-radius:1px;position:relative;transition:width .6s cubic-bezier(.4,0,.2,1)}
.pb::after{content:'';position:absolute;right:-3px;top:-3px;width:8px;height:8px;background:var(--cyan);border-radius:50%;box-shadow:0 0 10px var(--cyan)}

/* ── PILLS ── */
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:24px}
.pill{display:inline-flex;align-items:center;padding:3px 10px;border-radius:var(--r1);font-size:10.5px;font-weight:700;font-family:var(--mono);border:1px solid;letter-spacing:.3px}
.p-b{background:var(--dim-b);color:var(--blue);border-color:var(--bd-b)}.p-c{background:var(--dim-c);color:var(--cyan);border-color:var(--bd-c)}
.p-i{background:var(--dim-i);color:var(--indigo);border-color:var(--bd-i)}.p-a{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}
.p-r{background:var(--dim-r);color:var(--red);border-color:var(--bd-r)}.p-v{background:var(--dim-v);color:var(--violet);border-color:var(--bd-v)}
.p-g{background:var(--dim-g);color:var(--green);border-color:var(--bd-g)}

/* ── MISC ── */
.slbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2.5px;color:var(--t3);text-transform:uppercase;margin-bottom:12px;padding-bottom:7px;border-bottom:1px solid var(--bd)}
.divider{border:none;border-top:1px solid var(--bd);margin:26px 0}
.prose{font-size:14.5px;line-height:1.9;color:rgba(228,237,255,.82);margin-bottom:14px}
.prose b,.prose strong{color:var(--t1);font-weight:700}.prose em{color:var(--cyan);font-style:normal}

/* ── STAT GRID ── */
.sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(168px,1fr));gap:10px;margin-bottom:24px}
.sc{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 15px;transition:border-color .15s,transform .15s,box-shadow .15s}
.sc:hover{border-color:var(--bd-b);transform:translateY(-2px);box-shadow:0 4px 20px rgba(77,158,255,0.07)}
.sc-ico{font-family:var(--mono);font-size:10px;font-weight:700;padding:3px 8px;border-radius:var(--r1);display:inline-flex;margin-bottom:10px}
.si-b{background:var(--dim-b);color:var(--blue)}.si-c{background:var(--dim-c);color:var(--cyan)}
.si-i{background:var(--dim-i);color:var(--indigo)}.si-a{background:var(--dim-a);color:var(--amber)}
.si-g{background:var(--dim-g);color:var(--green)}.si-v{background:var(--dim-v);color:var(--violet)}
.sc-name{font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.3}
.sc-desc{font-size:11px;color:var(--t2);line-height:1.55;font-family:var(--mono)}

/* ── CONCEPTS TABLE ── */
.con{border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin:12px 0 22px}
.cr{display:grid;grid-template-columns:minmax(155px,34%) 1fr;border-bottom:1px solid var(--bd);transition:background .1s}
.cr:last-child{border-bottom:none}.cr:nth-child(even){background:rgba(77,158,255,0.016)}
.cr:hover{background:var(--hov)}
.ck{padding:11px 14px;font-family:var(--mono);font-size:11.5px;font-weight:600;border-right:1px solid var(--bd);position:relative;padding-left:18px}
.ck::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:0 2px 2px 0}
.ck.b{color:var(--blue)}.ck.b::before{background:var(--blue)}
.ck.c{color:var(--cyan)}.ck.c::before{background:var(--cyan)}
.ck.i{color:var(--indigo)}.ck.i::before{background:var(--indigo)}
.ck.a{color:var(--amber)}.ck.a::before{background:var(--amber)}
.ck.r{color:var(--red)}.ck.r::before{background:var(--red)}
.ck.g{color:var(--green)}.ck.g::before{background:var(--green)}
.ck.v{color:var(--violet)}.ck.v::before{background:var(--violet)}
.cv{padding:11px 16px;font-size:13px;color:var(--t2);line-height:1.65}
.cv code{font-family:var(--mono);font-size:11px;background:var(--inp);padding:1px 6px;border-radius:var(--r1);color:var(--blue)}

/* ── BLOCK TYPES ── */
.box-int{background:linear-gradient(135deg,rgba(77,158,255,0.055),rgba(34,211,238,0.03));border:1px solid var(--bd-b);border-radius:var(--r4);padding:17px 20px;margin:13px 0}
.box-int-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:7px}
.box-int-lbl::before{content:'◆';font-size:7px}
.box-int-txt{font-size:14px;color:var(--t1);line-height:1.82;font-weight:500}
.box-int-txt em{color:var(--cyan);font-style:normal;font-weight:600}

.box-for{background:var(--inp);border:1px solid var(--bdm);border-left:3px solid var(--indigo);border-radius:0 var(--r3) var(--r3) 0;padding:15px 20px;margin:13px 0;font-family:var(--mono);font-size:13px;line-height:2.1}
.box-for-lbl{font-size:9px;font-weight:700;letter-spacing:2px;color:var(--indigo);text-transform:uppercase;margin-bottom:9px;display:block}
.box-for .val{color:var(--blue)}.box-for .kw{color:var(--amber)}.box-for .cmt{color:var(--t3)}

.box-men{background:linear-gradient(135deg,rgba(129,140,248,0.065),rgba(192,132,252,0.03));border:1px solid var(--bd-i);border-radius:var(--r4);padding:15px 20px;margin:13px 0}
.box-men-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--indigo);text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:7px}
.box-men-lbl::before{content:'🧠';font-size:11px}
.box-men-txt{font-size:13.5px;color:var(--t2);line-height:1.82}
.box-men-txt strong{color:var(--indigo)}

.box-tak{background:linear-gradient(135deg,rgba(245,158,11,0.065),rgba(251,183,36,0.03));border:1px solid var(--bd-a);border-radius:var(--r4);padding:15px 20px;margin:14px 0}
.box-tak-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--amber);text-transform:uppercase;margin-bottom:9px;display:flex;align-items:center;gap:7px}
.box-tak-lbl::before{content:'⭐';font-size:11px}
.box-tak-txt{font-size:13px;color:var(--t2);line-height:1.82}
.box-tak-txt strong{color:var(--amber)}
.box-tak-txt code{font-family:var(--mono);font-size:11.5px;background:rgba(245,158,11,0.1);padding:1px 7px;border-radius:var(--r1);color:var(--amber)}

.box-warn{background:var(--dim-r);border:1px solid var(--bd-r);border-radius:var(--r3);padding:14px 18px;margin:12px 0;display:flex;gap:12px}
.bw-ico{font-size:16px;flex-shrink:0;margin-top:1px}.bw-body{flex:1}
.bw-title{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--red);margin-bottom:5px}
.bw-txt{font-size:13px;line-height:1.78;color:var(--t2)}
.bw-txt strong{color:var(--red)}.bw-txt code{font-family:var(--mono);font-size:11px;background:var(--dim-r);padding:1px 5px;border-radius:var(--r1);color:var(--red)}

.box-tip{background:var(--dim-c);border:1px solid var(--bd-c);border-radius:var(--r3);padding:14px 18px;margin:12px 0;display:flex;gap:12px}
.bt-ico{font-size:15px;flex-shrink:0;margin-top:1px}.bt-body{flex:1}
.bt-title{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--cyan);margin-bottom:5px}
.bt-txt{font-size:13px;line-height:1.78;color:var(--t2)}.bt-txt strong{color:var(--cyan)}

.box-20{background:linear-gradient(135deg,rgba(52,211,153,0.065),rgba(34,211,238,0.03));border:1px solid var(--bd-g);border-radius:var(--r4);padding:15px 20px;margin:16px 0}
.b20-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--green);text-transform:uppercase;margin-bottom:10px;display:flex;align-items:center;gap:7px}
.b20-lbl::before{content:'⚡';font-size:11px}
.b20-list{list-style:none;display:flex;flex-direction:column;gap:6px}
.b20-item{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--t1);line-height:1.6}
.b20-dot{width:6px;height:6px;background:var(--green);border-radius:1px;flex-shrink:0;margin-top:5px;transform:rotate(45deg)}

.box-alv{background:linear-gradient(135deg,rgba(192,132,252,0.065),rgba(129,140,248,0.03));border:1px solid var(--bd-v);border-radius:var(--r4);padding:15px 20px;margin:14px 0}
.balv-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--violet);text-transform:uppercase;margin-bottom:9px;display:flex;align-items:center;gap:7px}
.balv-lbl::before{content:'🔺';font-size:10px}
.balv-txt{font-size:13px;color:var(--t2);line-height:1.82}.balv-txt strong{color:var(--violet)}

/* ── SECTION HEADER ── */
.sec-hdr{display:flex;align-items:center;gap:14px;margin:30px 0 17px}
.sec-line{flex:1;height:1px;background:var(--bd)}
.sec-badge{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase;padding:4px 12px;border:1px solid var(--bd-b);border-radius:20px;background:var(--dim-b);white-space:nowrap}h2.sec-badge{display:block;margin:0;font-size:9.5px;font-weight:700;}.sec-time{font-family:var(--mono);font-size:9px;color:var(--t3);padding:2px 8px;border:1px solid var(--bd);border-radius:10px;white-space:nowrap;margin-left:6px}

/* ── TABLE ── */
.tbl{overflow-x:auto;margin:12px 0 18px;border:1px solid var(--bdm);border-radius:var(--r3)}
table{width:100%;border-collapse:collapse;font-size:12.5px}
th{padding:9px 14px;background:var(--sur);color:var(--t3);font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-align:left;border-bottom:1px solid var(--bdm);white-space:nowrap}
td{padding:10px 14px;color:var(--t2);border-bottom:1px solid var(--bd);line-height:1.6;vertical-align:top}
tr:last-child td{border-bottom:none}
tr:nth-child(even) td{background:rgba(77,158,255,0.015)}
tr:hover td{background:var(--hov)}
td code{font-family:var(--mono);font-size:11px;background:var(--inp);padding:1px 5px;border-radius:var(--r1);color:var(--blue)}
td b{color:var(--t1)}
.bs{font-family:var(--mono);font-size:9.5px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:600}
.bs-b{background:var(--dim-b);color:var(--blue);border-color:var(--bd-b)}
.bs-r{background:var(--dim-r);color:var(--red);border-color:var(--bd-r)}
.bs-g{background:var(--dim-g);color:var(--green);border-color:var(--bd-g)}
.bs-a{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}

/* ── COMPARE ── */
.cmp{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:13px 0 20px}
.cmp-c{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
.cmp-h{padding:9px 13px;font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--bd)}
.cmp-h.b{background:var(--dim-b);color:var(--blue);border-bottom-color:var(--bd-b)}
.cmp-h.r{background:var(--dim-r);color:var(--red);border-bottom-color:var(--bd-r)}
.cmp-h.g{background:var(--dim-g);color:var(--green);border-bottom-color:var(--bd-g)}
.cmp-h.i{background:var(--dim-i);color:var(--indigo);border-bottom-color:var(--bd-i)}
.cmp-body{padding:12px 13px}
.cmp-row{font-size:12.5px;color:var(--t2);padding:6px 0;border-bottom:1px solid var(--bd);line-height:1.6}
.cmp-row:last-child{border-bottom:none}
.cmp-row b{color:var(--t1);display:block;font-size:11.5px;margin-bottom:2px}

/* ── EXAMPLES ── */
.exs{margin:12px 0 17px}
.ex{display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:start;padding:9px 0;border-bottom:1px solid var(--bd)}
.ex:last-child{border-bottom:none}
.ex-l{font-size:13.5px;color:var(--t1);line-height:1.6;font-family:var(--mono)}
.ex-l b{color:var(--blue)}.ex-l b.r{color:var(--red)}.ex-l b.g{color:var(--green)}
.ex-arr{color:var(--t3);font-size:12px;padding-top:3px}
.ex-r{font-size:12px;color:var(--t2);line-height:1.6;font-family:var(--mono)}

/* ── SUB LABEL ── */
.sub-l{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase;margin:18px 0 10px;display:flex;align-items:center;gap:8px}
.sub-l::before{content:'→';color:var(--t3)}

/* ── STEP REVEAL ── */
.sr{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:15px 0}
.sr-head{padding:12px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.sr-title{font-size:13px;font-weight:700;color:var(--t1)}.sr-task{font-family:var(--mono);font-size:12.5px;color:var(--cyan)}
.sr-steps{padding:0}
.sr-step{border-bottom:1px solid var(--bd);display:none;animation:fadeSlide .25s ease}
.sr-step.show{display:block}
@keyframes fadeSlide{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.sr-step-in{padding:13px 17px;display:flex;gap:13px;align-items:flex-start}
.sr-num{width:24px;height:24px;border-radius:50%;background:var(--dim-b);border:1.5px solid var(--bd-b);color:var(--blue);font-family:var(--mono);font-size:10.5px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.sr-body{flex:1}
.sr-stitle{font-size:12.5px;font-weight:700;color:var(--t1);margin-bottom:4px}
.sr-txt{font-size:12.5px;color:var(--t2);line-height:1.78;font-family:var(--mono)}
.sr-txt strong{color:var(--blue)}.sr-txt em{color:var(--cyan);font-style:normal}
.sr-tryit{margin-top:10px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:10px 13px}
.sr-try-lbl{font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:7px}
.sr-try-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.sr-try-in{font-family:var(--mono);font-size:13px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);padding:6px 12px;outline:none;width:180px;transition:border-color .15s}
.sr-try-in:focus{border-color:var(--blue)}
.sr-try-in.ok{border-color:var(--green);background:var(--dim-g);color:var(--green)}
.sr-try-in.fail{border-color:var(--red);background:var(--dim-r);color:var(--red)}
.sr-try-btn{padding:6px 13px;background:var(--dim-a);border:1px solid var(--bd-a);color:var(--amber);border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:700;cursor:pointer;transition:all .15s}
.sr-try-btn:hover{background:var(--amber);color:#060910}
.sr-try-btn:disabled{opacity:.35;cursor:default}
.sr-try-fb{font-family:var(--mono);font-size:11.5px;margin-top:7px;line-height:1.6;display:none}
.sr-try-fb.show{display:block}
.sr-try-fb.ok{color:var(--green)}.sr-try-fb.fail{color:var(--red)}
.sr-foot{padding:11px 17px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;border-top:1px solid var(--bd)}
.sr-btn{padding:7px 15px;border:1px solid var(--bd-b);background:var(--dim-b);color:var(--blue);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s}
.sr-btn:hover{background:var(--blue);color:#060910}
.sr-btn.rst{border-color:var(--bdm);background:transparent;color:var(--t3)}
.sr-btn.rst:hover{color:var(--t2);background:var(--hov)}
.sr-prog{font-family:var(--mono);font-size:10px;color:var(--t3);margin-left:auto}

/* ── BUG FINDER ── */
.box-bug{background:var(--card);border:1px solid var(--bd-r);border-radius:var(--r4);overflow:hidden;margin:15px 0}
.bug-head{background:var(--dim-r);padding:9px 17px;font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--red);display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--bd-r)}
.bug-body{padding:15px 17px}
.bug-task{font-family:var(--mono);font-size:13.5px;color:var(--t1);background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:12px 15px;margin-bottom:13px;line-height:1.9}
.bug-task .wrong{color:var(--red);text-decoration:line-through;opacity:.75}
.bug-opts{display:flex;flex-direction:column;gap:6px}
.bug-opt{padding:9px 13px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);font-size:13px;color:var(--t2);cursor:pointer;transition:all .13s;font-family:var(--mono)}
.bug-opt:hover:not(.dis){border-color:var(--bd-b);color:var(--t1)}
.bug-opt.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.bug-opt.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.bug-opt.dis{cursor:default;pointer-events:none}
.bug-expl{display:none;margin-top:12px;padding:11px 13px;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;line-height:1.78}
.bug-expl.show{display:block}
.bug-expl.ok{background:var(--dim-g);color:var(--green);border:1px solid var(--bd-g)}
.bug-expl.ng{background:var(--dim-r);color:var(--red);border:1px solid var(--bd-r)}

/* ── RAPID DRILL ── */
.drill{background:var(--card);border:1px solid var(--bd-v);border-radius:var(--r4);overflow:hidden;margin:15px 0}
.drill-head{padding:11px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.drill-title{font-family:var(--mono);font-size:10.5px;color:var(--violet);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.drill-score{font-family:var(--mono);font-size:10px;color:var(--t3)}
.drill-body{padding:18px 17px}
.drill-q{font-size:22px;font-weight:800;color:var(--t1);text-align:center;letter-spacing:-0.5px;margin-bottom:18px;font-family:var(--mono);min-height:36px;transition:opacity .15s}
.drill-opts{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:14px}
.drill-opt{padding:9px 22px;border:1.5px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:13.5px;font-weight:700;cursor:pointer;transition:all .14s}
.drill-opt:hover:not(.dis){border-color:var(--bd-v);color:var(--violet)}
.drill-opt.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.drill-opt.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.drill-opt.dis{cursor:default;pointer-events:none}
.drill-fb{text-align:center;font-family:var(--mono);font-size:12px;color:var(--t2);min-height:20px;margin-bottom:4px}
.drill-fb.ok{color:var(--green)}.drill-fb.ng{color:var(--red)}
.drill-ctrl{display:flex;align-items:center;justify-content:center;gap:10px;margin-top:10px}
.drill-next{padding:7px 18px;border:1px solid var(--bd-v);background:var(--dim-v);color:var(--violet);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s;display:none}
.drill-next:hover{background:var(--violet);color:#060910}
.drill-bar{height:3px;background:var(--bd);border-radius:2px;margin:12px 0 0;overflow:hidden}
.drill-bar-fill{height:100%;background:linear-gradient(90deg,var(--violet),var(--indigo));border-radius:2px;transition:width .3s}

/* ── INLINE CHECKPOINT ── */
.inline-cp{background:linear-gradient(135deg,rgba(245,158,11,0.06),rgba(77,158,255,0.04));border:1px solid var(--bd-a);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.icp-head{padding:10px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.icp-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--amber);text-transform:uppercase;display:flex;align-items:center;gap:7px}
.icp-title::before{content:'🔬';font-size:11px}
.icp-score{font-family:var(--mono);font-size:10px;color:var(--t3)}
.icp-body{padding:14px 17px;display:flex;flex-direction:column;gap:8px}
.icp-q{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
.icp-q-text{padding:10px 14px;font-size:13px;font-weight:700;color:var(--t1);font-family:var(--mono);border-bottom:1px solid var(--bd)}
.icp-opts{padding:8px 14px;display:flex;flex-wrap:wrap;gap:6px}
.icp-opt{padding:6px 14px;border:1px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:600;cursor:pointer;transition:all .13s}
.icp-opt:hover:not(.dis){border-color:var(--bd-a);color:var(--amber)}
.icp-opt.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.icp-opt.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.icp-opt.dis{cursor:default;pointer-events:none}
.icp-fb{display:none;padding:8px 14px;font-family:var(--mono);font-size:12px;line-height:1.7;border-top:1px solid var(--bd)}
.icp-fb.show{display:block}
.icp-fb.ok{color:var(--green);background:var(--dim-g)}
.icp-fb.ng{color:var(--red);background:var(--dim-r)}
.icp-done{display:none;text-align:center;padding:12px;font-family:var(--mono);font-size:12px;color:var(--green);font-weight:700}
.icp-done.show{display:block}
.icp-retry{display:none;margin-top:8px;padding:5px 12px;background:transparent;border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;transition:all .15s}
.icp-retry:hover{border-color:var(--bd-a);color:var(--amber)}
.icp-retry.show{display:inline-flex}

/* ── COMBINED EXAMPLE ── */
.combo{background:linear-gradient(135deg,rgba(77,158,255,0.045),rgba(129,140,248,0.025));border:1px solid var(--bd-i);border-radius:var(--r4);overflow:hidden;margin:10px 0}
.combo-head{padding:10px 17px;border-bottom:1px solid var(--bd);background:rgba(129,140,248,0.04)}
.combo-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--indigo);text-transform:uppercase;display:flex;align-items:center;gap:8px}
.combo-badge::before{content:'🔗';font-size:11px}
.combo-body{padding:15px 17px}
.combo-task{font-family:var(--mono);font-size:13.5px;color:var(--t1);font-weight:700;margin-bottom:13px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:11px 14px}
.combo-steps{display:flex;flex-direction:column;gap:8px}
.combo-step{display:flex;gap:10px;align-items:flex-start}
.combo-n{width:20px;height:20px;border-radius:50%;background:var(--dim-i);border:1px solid var(--bd-i);color:var(--indigo);font-family:var(--mono);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
.combo-txt{font-size:13px;color:var(--t2);line-height:1.72;font-family:var(--mono)}
.combo-txt strong{color:var(--indigo)}.combo-txt em{color:var(--cyan);font-style:normal}
.combo-ans{background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r2);padding:10px 14px;font-family:var(--mono);font-size:13px;color:var(--green);margin-top:12px;font-weight:600}

/* ── NCVVO BLOK ── */
.ncvvo{background:var(--card);border:1px solid var(--bd-i);border-radius:var(--r4);overflow:hidden;margin:13px 0}
.ncvvo-hd{background:var(--dim-i);padding:9px 17px;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--indigo);text-transform:uppercase;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--bd-i)}
.ncvvo-body{padding:13px 17px}
.nci{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--t2);padding:6px 0;border-bottom:1px solid var(--bd);line-height:1.65}
.nci:last-child{border-bottom:none}
.nc-dot{width:5px;height:5px;background:var(--indigo);border-radius:50%;flex-shrink:0;margin-top:6px}
.nci b{color:var(--t1)}

/* ── NCVVO STVARNI ISPIT ── */
.ncvvo-real{background:var(--card);border:1px solid var(--bd-a);border-radius:var(--r4);overflow:hidden;margin:18px 0}
.ncvvo-real-hd{background:var(--amber);padding:9px 17px;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:#060910;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.ncvvo-real-body{padding:14px 17px}
.ncvvo-real-item{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);padding:12px 14px;margin-bottom:8px}
.ncvvo-real-item:last-child{margin-bottom:0}
.ncvvo-real-meta{font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.ncvvo-real-year{background:var(--dim-a);color:var(--amber);border:1px solid var(--bd-a);padding:1px 7px;border-radius:3px;font-size:9px;font-weight:700}
.ncvvo-real-q{font-family:var(--mono);font-size:13px;font-weight:700;color:var(--t1);margin-bottom:8px}
.ncvvo-real-stat{font-size:12px;color:var(--t2);line-height:1.7}
.ncvvo-real-stat strong{color:var(--red)}
.ncvvo-real-ans{margin-top:8px;padding:7px 11px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r2);font-family:var(--mono);font-size:12px;color:var(--green);display:none}
.ncvvo-real-ans.show{display:block}
.ncvvo-real-show{margin-top:8px;padding:5px 12px;background:transparent;border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;transition:all .15s}
.ncvvo-real-show:hover{border-color:var(--bd-a);color:var(--amber)}
.ncvvo-live-stat{font-family:var(--mono);font-size:10px;padding:2px 9px;border-radius:3px;border:1px solid;font-weight:700;margin-left:8px;transition:all .3s}
.ncvvo-live-stat.good{background:var(--dim-g);color:var(--green);border-color:var(--bd-g)}
.ncvvo-live-stat.bad{background:var(--dim-r);color:var(--red);border-color:var(--bd-r)}
.ncvvo-live-stat.neutral{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}

/* ── CHECKPOINT ── */

.checkpoint{background:linear-gradient(135deg,rgba(52,211,153,0.07),rgba(77,158,255,0.04));border:2px solid var(--bd-g);border-radius:var(--r4);padding:20px 22px;margin:24px 0}
.cp-head{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.cp-icon{font-size:20px}
.cp-title{font-size:15px;font-weight:800;color:var(--t1);letter-spacing:-.4px}
.cp-sub{font-size:12px;color:var(--t2);font-family:var(--mono);margin-top:2px}
.cp-list{list-style:none;display:flex;flex-direction:column;gap:7px}
.cp-item{display:flex;align-items:flex-start;gap:10px;font-size:13.5px;color:var(--t2);line-height:1.65}
.cp-check{width:18px;height:18px;border:1.5px solid var(--bd-g);border-radius:var(--r1);flex-shrink:0;margin-top:2px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;background:transparent}
.cp-check.done{background:var(--green);border-color:var(--green)}
.cp-check.done::after{content:'✓';font-size:10px;color:#060910;font-weight:800}
.cp-item.done-item{color:var(--green)}
.cp-footer{margin-top:14px;padding-top:12px;border-top:1px solid var(--bd-g);display:flex;align-items:center;justify-content:space-between;font-family:var(--mono);font-size:11px;color:var(--t3)}
.cp-progress-txt{color:var(--green);font-weight:700}

/* ── CONNECT NEXT ── */
.connect-next{background:linear-gradient(135deg,rgba(77,158,255,0.06),rgba(129,140,248,0.04));border:1px solid var(--bd-b);border-radius:20px;padding:22px 24px;margin:28px 0}
.cn-head{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.cn-icon{font-size:22px}
.cn-title{font-size:15px;font-weight:800;color:var(--t1);letter-spacing:-.4px}
.cn-sub{font-size:12px;color:var(--t2);font-family:var(--mono);margin-top:2px}
.cn-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px}
.cn-item{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:13px 15px;transition:border-color .15s,transform .15s}
.cn-item:hover{border-color:var(--bd-b);transform:translateY(-2px)}
.cn-item-head{display:flex;align-items:center;gap:8px;margin-bottom:7px}
.cn-badge{font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 8px;border-radius:3px;border:1px solid}
.cn-badge.b{background:var(--dim-b);color:var(--blue);border-color:var(--bd-b)}
.cn-badge.i{background:var(--dim-i);color:var(--indigo);border-color:var(--bd-i)}
.cn-badge.c{background:var(--dim-c);color:var(--cyan);border-color:var(--bd-c)}
.cn-badge.v{background:var(--dim-v);color:var(--violet);border-color:var(--bd-v)}
.cn-badge.a{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}
.cn-item-title{font-size:12.5px;font-weight:700;color:var(--t1)}
.cn-item-desc{font-size:11.5px;color:var(--t2);line-height:1.65;font-family:var(--mono)}
.cn-item-arrow{font-size:10px;color:var(--t3);margin-top:5px;font-family:var(--mono)}

/* ── MATURA BLOCK ── */
.matura-block{border:1px solid var(--bd-a);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.matura-hd{background:var(--amber);padding:9px 17px;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:#060910;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.matura-list{list-style:none;padding:12px 17px}
.mi{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:rgba(228,237,255,.82);padding:7px 0;border-bottom:1px solid rgba(245,158,11,.09);line-height:1.65}
.mi:last-child{border-bottom:none}
.mi-dot{width:5px;height:5px;background:var(--amber);border-radius:1px;flex-shrink:0;margin-top:6px;transform:rotate(45deg)}
.mi b{color:var(--t1)}

/* ── QUIZ ── */
.exam-mode-wrap{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin-bottom:20px}
.exam-mode-head{padding:10px 17px;border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);text-transform:uppercase}
.exam-mode-opts{display:grid;grid-template-columns:repeat(3,1fr)}
.exam-mode-opt{padding:14px 16px;cursor:pointer;transition:background .15s;border-right:1px solid var(--bd);text-align:center}
.exam-mode-opt:last-child{border-right:none}
.exam-mode-opt:hover{background:var(--hov)}
.exam-mode-opt.active{background:var(--dim-b);border-bottom:2px solid var(--blue)}
.em-icon{font-size:20px;margin-bottom:6px}
.em-name{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--t1);margin-bottom:3px}
.em-desc{font-family:var(--mono);font-size:10px;color:var(--t3);line-height:1.4}
.exam-mode-opt.active .em-name{color:var(--blue)}
.adaptive-banner{background:linear-gradient(135deg,rgba(192,132,252,0.08),rgba(129,140,248,0.05));border:1px solid var(--bd-v);border-radius:var(--r3);padding:13px 16px;margin-bottom:16px;display:flex;align-items:flex-start;gap:12px}
.ab-icon{font-size:18px;flex-shrink:0;margin-top:1px}.ab-body{flex:1}
.ab-title{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--violet);margin-bottom:5px}
.ab-text{font-size:13px;color:var(--t2);line-height:1.75}
.ab-close{background:none;border:none;color:var(--t3);font-size:18px;cursor:pointer;padding:0 4px;line-height:1;flex-shrink:0}
.ab-close:hover{color:var(--t1)}
.exam-timer{display:flex;align-items:center;gap:14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:12px 18px;margin-bottom:14px}
.et-circle{position:relative;width:64px;height:64px;flex-shrink:0}
#timer-canvas{position:absolute;top:0;left:0}
.et-num{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:var(--mono);font-size:18px;font-weight:800;color:var(--t1);line-height:1}
.et-info{flex:1}.et-label{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--t3);text-transform:uppercase;margin-bottom:4px}
.et-q{font-size:13px;font-weight:700;color:var(--t1)}
.et-streak{font-family:var(--mono);font-size:11px;color:var(--green);font-weight:600;padding:4px 10px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r1)}
.exam-timer.warn .et-num{color:var(--amber)}
.exam-timer.urgent .et-num{color:var(--red);animation:pulse-red .5s infinite alternate}
@keyframes pulse-red{from{opacity:1}to{opacity:.5}}
.quiz-intro{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:12px 17px;font-size:12.5px;color:var(--t2);margin-bottom:18px;font-family:var(--mono);line-height:1.7}
.quiz-intro strong{color:var(--blue)}
.quiz-rerun{display:flex;gap:8px;align-items:center;margin-bottom:14px;flex-wrap:wrap}
.quiz-rerun-btn{padding:7px 16px;border:1px solid var(--bd-v);background:var(--dim-v);color:var(--violet);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s}
.quiz-rerun-btn:hover{background:var(--violet);color:#060910}
.quiz-rerun-info{font-family:var(--mono);font-size:10.5px;color:var(--t3)}
.qb{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin-bottom:9px}
.qb-h{padding:12px 17px;border-bottom:1px solid var(--bd)}
.qb-meta{font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700;letter-spacing:.5px;margin-bottom:5px;text-transform:uppercase}
.qb-text{font-size:14px;font-weight:700;color:var(--t1);line-height:1.5}
.qb-text code{font-family:var(--mono);font-size:12.5px;background:var(--inp);padding:2px 7px;border-radius:var(--r1);color:var(--cyan)}
.qb-opts{padding:10px 17px;display:flex;flex-direction:column;gap:6px}
.qm{font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700;letter-spacing:.5px;padding:10px 17px 0;text-transform:uppercase}
.qq{font-size:14px;font-weight:700;color:var(--t1);line-height:1.5;padding:8px 17px 10px;border-bottom:1px solid var(--bd)}
.qo{display:flex;align-items:center;gap:10px;padding:9px 13px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);font-size:13px;color:var(--t2);cursor:pointer;transition:all .13s;user-select:none;font-family:var(--mono)}
.qo:hover:not(.dis){background:var(--hov);border-color:var(--bd-b);color:var(--t1)}
.qo.correct{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.qo.wrong{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.qo.dis{cursor:default;pointer-events:none}
.ql{width:21px;height:21px;border-radius:var(--r1);border:1px solid var(--bdm);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3)}
.qe{display:none;padding:10px 17px;font-size:12px;line-height:1.78;border-top:1px solid var(--bd);font-family:var(--mono)}
.qe.show{display:block}
.qe-ok{background:var(--dim-g);border:1px solid var(--bd-g);color:var(--green);padding:9px 12px;border-radius:var(--r2)}
.qe-no{background:var(--dim-r);border:1px solid var(--bd-r);color:var(--red);padding:9px 12px;border-radius:var(--r2)}
.mini-proof{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:10px 13px;margin-top:9px;font-family:var(--mono);font-size:12px;line-height:1.9;color:var(--t2)}
.mini-proof-lbl{font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--blue);margin-bottom:6px}
.mini-proof .step{display:flex;gap:8px;align-items:flex-start;padding:3px 0}
.mini-proof .sn{width:16px;height:16px;border-radius:50%;background:var(--dim-b);border:1px solid var(--bd-b);color:var(--blue);font-size:8px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
.mini-proof .st{color:var(--t2)}.mini-proof .st strong{color:var(--blue)}
.score-box{display:none;text-align:center;padding:36px 20px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);margin-top:14px}
.score-box.show{display:block}
.score-num{font-size:54px;font-weight:800;background:linear-gradient(135deg,var(--blue),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-3px;font-family:var(--mono)}
.score-lbl{font-size:13px;color:var(--t2);margin-top:9px;line-height:1.6}

/* ── FITB ── */
.fitb{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin-bottom:9px}
.fitb-h{padding:10px 17px;border-bottom:1px solid var(--bd)}
.fitb-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase;margin-bottom:5px;font-weight:700}
.fitb-sent{font-size:13.5px;font-weight:700;color:var(--t1);font-family:var(--mono)}
.fitb-row{padding:10px 17px;display:flex;align-items:center;gap:9px;flex-wrap:wrap}
.fitb-in{font-family:var(--mono);font-size:13px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);padding:7px 12px;outline:none;width:200px;transition:border-color .15s}
.fitb-in:focus{border-color:var(--blue)}
.fitb-in.ok{border-color:var(--green);background:var(--dim-g);color:var(--green)}
.fitb-in.fail{border-color:var(--red);background:var(--dim-r);color:var(--red)}
.fitb-btn{padding:7px 15px;background:linear-gradient(135deg,var(--blue),var(--cyan));color:#060910;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s;white-space:nowrap}
.fitb-btn:hover{opacity:.88}
.fitb-btn:disabled{opacity:.35;cursor:default}
.fitb-fb{display:none;padding:9px 17px;font-family:var(--mono);font-size:12px;line-height:1.78;border-top:1px solid var(--bd)}
.fitb-fb.show{display:block}
.fitb-fb.ok{color:var(--green);background:var(--dim-g)}
.fitb-fb.fail{color:var(--red);background:var(--dim-r)}

/* ── CTA ── */
.cta{background:var(--card);border:1px solid var(--bd-b);border-radius:20px;padding:22px 26px;margin:24px 0;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;position:relative;overflow:hidden}
.cta::before{content:'';position:absolute;inset:0;background:var(--glow-b);pointer-events:none}
.cta-e{font-family:var(--mono);font-size:9px;color:var(--blue);letter-spacing:1.8px;text-transform:uppercase;margin-bottom:5px}
.cta-t{font-size:16px;font-weight:800;color:var(--t1);margin-bottom:3px;letter-spacing:-.4px}
.cta-s{font-size:12px;color:var(--t2)}
.cta-btn{padding:10px 20px;background:linear-gradient(135deg,var(--blue),var(--cyan));color:#060910;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;flex-shrink:0;box-shadow:0 4px 16px rgba(77,158,255,0.22);display:inline-flex;text-decoration:none}
.cta-btn:hover{opacity:.88;transform:translateY(-1px)}

/* ── NAV ── */
.nav-row{display:flex;justify-content:space-between;align-items:center;margin-top:30px;padding-top:18px;border-top:1px solid var(--bd)}
.nb{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11.5px;color:var(--t2);cursor:pointer;padding:8px 13px;border:1px solid var(--bdm);border-radius:var(--r2);background:transparent;transition:all .15s;font-weight:500}
.nb:hover{color:var(--t1);background:var(--card);border-color:var(--bdl)}
.nb.primary{background:linear-gradient(135deg,var(--blue),var(--cyan));color:#060910;border-color:transparent;font-weight:700;box-shadow:0 3px 14px rgba(77,158,255,0.22)}
.nb.primary:hover{opacity:.88;transform:translateY(-1px)}
.nb.off{opacity:.22;pointer-events:none}

/* ── POLYNOMIAL DEGREE VISUALIZER ── */
.poly-viz{background:var(--card);border:1px solid var(--bd-b);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.pv-head{padding:11px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.pv-title{font-family:var(--mono);font-size:10.5px;color:var(--blue);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.pv-body{padding:16px 17px}
.pv-poly{font-family:var(--mono);font-size:18px;font-weight:700;color:var(--cyan);text-align:center;padding:14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);margin-bottom:14px;letter-spacing:.5px;min-height:52px;transition:all .2s}
.pv-controls{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:12px}
.pv-btn{padding:6px 14px;border:1px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:600;cursor:pointer;transition:all .14s}
.pv-btn:hover{border-color:var(--bd-b);color:var(--blue)}
.pv-btn.on{background:var(--dim-b);border-color:var(--bd-b);color:var(--blue)}
.pv-info{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px}
.pv-stat{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:10px 12px;text-align:center}
.pv-stat-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px}
.pv-stat-val{font-family:var(--mono);font-size:15px;font-weight:700;color:var(--blue)}

/* ── RATIONAL DOMAIN BUILDER ── */
.rdb{background:var(--card);border:1px solid var(--bd-c);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.rdb-head{padding:11px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.rdb-title{font-family:var(--mono);font-size:10.5px;color:var(--cyan);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.rdb-body{padding:16px 17px}
.rdb-expr{font-family:var(--mono);font-size:16px;font-weight:700;color:var(--t1);text-align:center;padding:14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);margin-bottom:14px}
.rdb-steps{display:flex;flex-direction:column;gap:7px;margin-bottom:12px}
.rdb-step{display:flex;gap:10px;align-items:flex-start;padding:8px 10px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2)}
.rdb-sn{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--cyan);flex-shrink:0;margin-top:1px}
.rdb-st{font-family:var(--mono);font-size:12.5px;color:var(--t2);line-height:1.7}
.rdb-st strong{color:var(--cyan)}
.rdb-domain{background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r2);padding:10px 14px;font-family:var(--mono);font-size:13px;color:var(--green);font-weight:600;text-align:center}
.rdb-btns{display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:12px}
.rdb-btn{padding:6px 14px;border:1px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:600;cursor:pointer;transition:all .14s}
.rdb-btn:hover{border-color:var(--bd-c);color:var(--cyan)}
.rdb-btn.on{background:var(--dim-c);border-color:var(--bd-c);color:var(--cyan)}

/* ── RESPONSIVE ── */
@media(max-width:900px){.content-wrap{padding:26px 22px 80px}}
@media(max-width:720px){
  .sidebar{display:none;position:fixed;z-index:160;height:100vh;transform:translateX(-100%);transition:transform .25s}
  .sidebar.mobile-open{display:flex;transform:translateX(0)}
  .sb-hamburger{display:flex}
  .content-wrap{padding:18px 14px 80px}
  .hero{padding:20px 18px}.hero-title{font-size:22px}
  .cmp{grid-template-columns:1fr}.sg{grid-template-columns:1fr 1fr}
  .cr{grid-template-columns:1fr}.ck{border-right:none;border-bottom:1px solid var(--bd)}
  .cta{flex-direction:column}.tabs{width:100%}.tab{flex:1;text-align:center;font-size:11px;padding:7px 5px}
  .exam-mode-opts{grid-template-columns:1fr}
  .exam-mode-opt{border-right:none;border-bottom:1px solid var(--bd)}
  .exam-mode-opt:last-child{border-bottom:none}
  .cn-grid{grid-template-columns:1fr}
  .pv-info{grid-template-columns:1fr 1fr}
}
@media(max-width:480px){.sg{grid-template-columns:1fr}.ex{grid-template-columns:1fr}.ex-arr{display:none}}

/* ── CONTEXTUAL FROM-BANNER ── */
.ctx-banner{display:none;position:fixed;bottom:20px;left:50%;transform:translateX(-50%);
  background:var(--ele);border:1px solid var(--bd-c);border-radius:var(--r3);
  padding:10px 18px 10px 14px;font-family:var(--mono);font-size:11px;color:var(--cyan);
  z-index:200;box-shadow:0 4px 20px rgba(0,0,0,0.4);display:flex;align-items:center;gap:10px;
  animation:ctxSlide .3s ease}
@keyframes ctxSlide{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
.ctx-banner-close{cursor:pointer;color:var(--t3);font-size:14px;line-height:1;margin-left:4px}
.ctx-banner-close:hover{color:var(--t1)}

/* ── RAZLOMCI (frac) ── */
.frac{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px;line-height:1.1}
.frac .num{padding:0 3px 1px;border-bottom:1.5px solid currentColor;text-align:center;min-width:100%}
.frac .den{padding:1px 3px 0;text-align:center;min-width:100%}
.frac.sm{font-size:.85em}

/* ══════════════════════════════════════════════
   RESPONSIVE — TABLET (max 768px)
   ══════════════════════════════════════════════ */
@media(max-width:768px){
  .qo{font-size:12.5px;padding:8px 11px;gap:8px}
  .qb-h{padding:10px 14px}.qb-meta{font-size:8px}.qq{font-size:13px}.qe{font-size:12px;padding:9px 13px}
  .icp-opts{flex-direction:column}.icp-opt{width:100%;text-align:left;font-size:12px}
  .icp-head{padding:8px 12px}.icp-title{font-size:9px}
  .nav-row{flex-direction:column;gap:8px;align-items:stretch}.nb{text-align:center;justify-content:center}
  .ncvvo-real-meta{flex-wrap:wrap;gap:4px;font-size:8px}.ncvvo-real-q{font-size:12px}
  .ncvvo-real-stat{font-size:11px}.ncvvo-real-show{font-size:11px;padding:6px 10px}
  .ncvvo-live-stat{font-size:8px;padding:2px 5px}
  .score-box{padding:24px 16px}.score-num{font-size:36px}
  .exam-timer{padding:10px 14px;gap:10px}.et-q{font-size:10px}
  .drill-q{font-size:13px;padding:14px}.drill-opt{padding:9px 14px;font-size:12px}
  .combo-head{padding:10px 14px}.combo-body{padding:10px 14px}.combo-task{font-size:12px}
  .combo-step{gap:8px}.combo-txt{font-size:12px}.combo-ans{font-size:11.5px}
  .sr-head{padding:12px 14px}.sr-task{font-size:12px}
  .sr-step-in{padding:10px 12px;gap:8px}.sr-body{font-size:12.5px}
  .box-int-txt{font-size:13px}.box-for{font-size:13px}.box-men-txt{font-size:12.5px}
  .box-bug{padding:14px}.bug-head{font-size:10px}.bug-opt{font-size:12px;padding:8px 11px}
  .cp-item{font-size:12px;padding:7px 10px}.cp-footer{padding:8px 12px;font-size:11px}
  .matura-block{padding:14px}.mi{font-size:12px}
  .fitb{padding:0}.fitb-h{padding:8px 12px}.fitb-row{padding:8px 12px;gap:7px}
  .fitb-in{font-size:12px;padding:7px 10px}.fitb-btn{padding:7px 12px;font-size:11px}
  .fitb-fb{padding:6px 12px;font-size:11px}
  .hero-eyebrow{font-size:9px}.hero-sub{font-size:13.5px}
  .hchip{font-size:9px;padding:3px 9px}
  .cr{gap:0}.ck{font-size:10px;padding:6px 10px;min-width:90px}.cv{font-size:12px;padding:6px 10px}
  .sc-ico{font-size:16px;width:36px;height:36px}.sc-name{font-size:12px}.sc-desc{font-size:11.5px}
  .graph-controls{padding:8px 10px;gap:7px}.graph-ctrl-lbl{font-size:9px}
  .graph-ctrl-val{font-size:10px;min-width:28px}.graph-canvas{height:180px}
  .graph-info{font-size:9.5px;padding:6px 10px}
  .cta{padding:16px}.cta-e{font-size:9px}.cta-t{font-size:14px}.cta-s{font-size:12px}
  .cta-btn{padding:10px 18px;font-size:12px}
}
/* ══════════════════════════════════════════════
   RESPONSIVE — MOBILE (max 480px)
   ══════════════════════════════════════════════ */
@media(max-width:480px){
  .tab{font-size:10.5px;padding:6px 4px}
  .qo{font-size:12px;padding:7px 10px}.qq{font-size:12.5px;line-height:1.5}
  .sb-name{font-size:13px}.sb-item{font-size:11px;padding:5px 12px}
  .sb-lbl{font-size:8px;padding:12px 12px 4px}
  .hero-title{font-size:20px;letter-spacing:-1px}.hero-sub{font-size:12.5px}
  .tags{gap:5px}.pill{font-size:9px;padding:3px 9px}
  .b20-item{font-size:12px;gap:8px;padding:6px 0}.b20-dot{width:4px;height:4px;flex-shrink:0}
  .icp-done{font-size:12px}.icp-retry{font-size:11px;padding:5px 12px}.icp-score{font-size:9px}
  .em-icon{font-size:18px}.em-name{font-size:12px}.em-desc{font-size:10px}
  .sr-try-row{flex-direction:column;gap:6px}.sr-try-in{width:100%}.sr-try-btn{width:100%;justify-content:center}
  .adaptive-banner{padding:10px 12px}.ab-title{font-size:11px}.ab-text{font-size:11px}
  .score-num{font-size:32px}.score-lbl{font-size:13px}
  .graph-canvas{height:160px}
  .cn-head{gap:8px}.cn-icon{font-size:18px}.cn-title{font-size:13px}
  .cn-item{padding:10px 12px}.cn-item-title{font-size:12px}.cn-item-desc{font-size:11px}
  .ncvvo-real-hd{padding:7px 12px;font-size:8px}.ncvvo-real-body{padding:10px}
  .ncvvo-real-item{padding:10px 11px;margin-bottom:6px}
  .bc{font-size:9px;gap:5px}
  .cp-head{padding:10px 12px}.cp-icon{font-size:18px}.cp-title{font-size:13px}
  .cp-sub{font-size:10px}.cp-check{width:18px;height:18px}
  .mini-proof{padding:8px 10px}.mini-proof-lbl{font-size:9px}
  .step{gap:6px}.sn{font-size:9px;padding:1px 5px}.st{font-size:11px}
}

/* ── P01 specifične klase ── */

/* ══════════════════════════════════════════════
   P01 INTERAKTIVNE KOMPONENTE
   ══════════════════════════════════════════════ */

/* ── VENNOV DIJAGRAM ── */
.venn-wrap{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:18px 0}
.venn-head{padding:10px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.venn-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase}
.venn-btns{display:flex;gap:5px;flex-wrap:wrap}
.vbtn{font-family:var(--mono);font-size:11px;font-weight:700;padding:4px 11px;border-radius:var(--r2);border:1px solid var(--bdm);background:var(--inp);color:var(--t2);cursor:pointer;transition:all .15s}
.vbtn:hover{border-color:var(--blue);color:var(--blue)}
.vbtn.on{background:var(--dim-b);border-color:var(--bd-b);color:var(--blue)}
.venn-svg-wrap{padding:14px 10px 8px;background:var(--inp);display:flex;justify-content:center}
.venn-svg-wrap canvas{display:block;max-width:100%;height:auto;border-radius:var(--r2)}
.venn-res{padding:10px 17px;font-family:var(--mono);font-size:12px;color:var(--t2);border-top:1px solid var(--bd);line-height:1.7;min-height:36px}

/* ── KLASIFIKATOR ── */
.clf{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:18px 0}
.clf-head{padding:10px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.clf-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--cyan);text-transform:uppercase}
.clf-sc{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);padding:3px 9px;border:1px solid var(--bdm);border-radius:10px}
.clf-body{padding:20px 17px;display:flex;flex-direction:column;align-items:center;gap:12px}
.clf-num{font-family:var(--mono);font-size:32px;font-weight:700;color:var(--t1);background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 28px;letter-spacing:-1px;min-width:120px;text-align:center}
.clf-sets{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.clf-set{font-family:var(--mono);font-size:16px;font-weight:700;padding:10px 20px;border:1px solid var(--bdm);border-radius:var(--r3);background:var(--inp);color:var(--t2);cursor:pointer;transition:all .18s;min-width:60px;text-align:center}
.clf-set:hover{border-color:var(--cyan);color:var(--cyan);background:var(--dim-c)}
.clf-set.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.clf-set.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.clf-set.dis{cursor:default;pointer-events:none;opacity:.5}
.clf-fb{font-family:var(--mono);font-size:11.5px;color:var(--t2);text-align:center;min-height:20px;padding:4px 0;line-height:1.6}
.clf-ctrl{display:flex;gap:8px;justify-content:center;margin-top:4px}
.clf-btn{font-family:var(--mono);font-size:11px;font-weight:700;padding:7px 16px;border-radius:var(--r2);border:1px solid var(--bd-c);background:var(--dim-c);color:var(--cyan);cursor:pointer;transition:all .15s}
.clf-btn:hover{background:var(--cyan);color:var(--bg)}

/* ── APSOLUTNA VRIJEDNOST I VIZUALIZACIJA INTERVALA ── */
.iviz-wrap{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:18px 0}
.iviz-head{padding:10px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.iviz-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--indigo);text-transform:uppercase}
.iviz-btns{display:flex;gap:5px;flex-wrap:wrap}
.ibtn{font-family:var(--mono);font-size:11px;font-weight:700;padding:4px 11px;border-radius:var(--r2);border:1px solid var(--bdm);background:var(--inp);color:var(--t2);cursor:pointer;transition:all .15s}
.ibtn:hover{border-color:var(--indigo);color:var(--indigo)}
.ibtn.on{background:var(--dim-i);border-color:var(--bd-i);color:var(--indigo)}
.iviz-canvas{padding:16px 14px;background:var(--inp);display:flex;justify-content:center;align-items:center}
.iviz-canvas svg{display:block;max-width:100%;height:auto}

/* Broj skupova vizualizacija (bs-c, bs-i, bs-v) */
.bs-c,.bs-i,.bs-v{display:inline-flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:14px;font-weight:700;padding:6px 14px;border-radius:var(--r2);border:1.5px solid;margin:3px;cursor:pointer;transition:all .15s}
.bs-c{background:var(--dim-b);border-color:var(--bd-b);color:var(--blue)}
.bs-i{background:var(--dim-i);border-color:var(--bd-i);color:var(--indigo)}
.bs-v{background:var(--dim-v);border-color:var(--bd-v);color:var(--violet)}

/* ── RESPONSIVE za P01 komponente ── */
@media(max-width:600px){
  .clf-num{font-size:24px;padding:10px 18px}
  .clf-set{font-size:13px;padding:8px 14px;min-width:48px}
  .venn-head{flex-direction:column;align-items:flex-start}
  .iviz-head{flex-direction:column;align-items:flex-start}
  .clf-head{flex-direction:column;align-items:flex-start}
}`;

const _bodyHTML = `<div class="shell">

<!-- ── MOBILE HAMBURGER ── -->
<div class="sb-hamburger" id="hamburger" onclick="toggleSidebar()">
  <span></span><span></span><span></span>
</div>
<div class="sb-overlay" id="overlay" onclick="closeSidebar()"></div>

<!-- ── SIDEBAR ── -->
<nav class="sidebar" id="sidebar">
  <div class="sb-brand"><div class="sb-logo"><svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="#060910" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><div class="sb-name">Maturiraj.hr</div><div class="sb-sub">MAT A razina</div></div></div>
  <div class="sb-prog-wrap"><div class="sb-prog-label"><span>napredak</span><span id="prog-pct">0%</span></div><div class="sb-prog-track"><div class="sb-prog-bar" id="prog-bar" style="width:0%"></div></div></div>
  <button class="sb-item" onclick="backToList()" style="padding:7px 14px;border:none;border-bottom:1px solid var(--bd);font-size:11px;color:var(--t3);font-family:var(--mono);letter-spacing:.3px;background:transparent;cursor:pointer;width:100%;text-align:left">← Sva poglavlja</button>
  <div class="sb-lbl">// Uvod</div>
  <button class="sb-item" onclick="navigateChapter('p00a')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>00A · Kako koristiti skripte</button>
  <button class="sb-item" onclick="navigateChapter('p00b')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>00B · Što te čeka na Maturi</button>
  <div class="sb-lbl">// Temelji</div>
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>01 · Skupovi, Brojevi, |x|</button>
  <button class="sb-item" onclick="navigateChapter('p02')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>02 · Potencije i korijeni</button>
  <button class="sb-item" onclick="navigateChapter('p03')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>03 · Polinomi i izrazi</button>
  <button class="sb-item" onclick="navigateChapter('p04')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>04 · Jednadžbe i nejednadžbe</button>
  <button class="sb-item" onclick="navigateChapter('p05')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>05 · Kompleksni brojevi</button>
  <div class="sb-lbl">// Funkcije</div>
  <button class="sb-item" onclick="navigateChapter('p06')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>06 · Funkcija — temelj mature</button>
  <button class="sb-item" onclick="navigateChapter('p07')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>07 · Linearna i kvadratna f.</button>
  <button class="sb-item" onclick="navigateChapter('p08')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>08 · Eksponencijalna i log.</button>
  <button class="sb-item" onclick="navigateChapter('p09')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>09 · Trigonometrija</button>
  <div class="sb-lbl">// Geometrija i Analiza</div>
  <button class="sb-item" onclick="navigateChapter('p10')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>10 · Analitička geometrija</button>
  <button class="sb-item" onclick="navigateChapter('p11')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>11 · Geometrija prostora</button>
  <button class="sb-item" onclick="navigateChapter('p12')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>12 · Vektori</button>
  <button class="sb-item" onclick="navigateChapter('p13')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>13 · Planimetrija</button>
  <button class="sb-item" onclick="navigateChapter('p14')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>14 · Nizovi</button>
  <button class="sb-item" onclick="navigateChapter('p15')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>15 · Kombinatorika</button>
  <div class="sb-lbl">// Kalkulus</div>
  <button class="sb-item" onclick="navigateChapter('p16')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>16 · Granice</button>
  <button class="sb-item" onclick="navigateChapter('p17')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>17 · Derivacije</button>
  <button class="sb-item" onclick="navigateChapter('p18')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>18 · Integrali</button>
  <button class="sb-item" onclick="navigateChapter('p19')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>19 · Složeni maturalni zadaci</button>
  <button class="sb-item" onclick="navigateChapter('p20')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>20 · Završna sistematizacija</button>
  <div class="sb-lbl">// Bonus</div>
  <button class="sb-item" onclick="navigateChapter('p21')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>21 · Vjerojatnost</button>
  <div class="sb-footer">uvod · kako koristiti<br>maturiraj.hr · A razina</div>
</nav>

<!-- ── MAIN ── -->
<main class="main">
<div class="content-wrap">

<div class="bc">
  <span>← poglavlja</span><span class="bc-sep">/</span>
  <span>a-razina</span><span class="bc-sep">/</span>
  <span class="bc-cur">skupovi-brojevi-apsolutna</span>
</div>

<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>

<!-- ════════════════════════════════ -->
<!-- L0 — QUICK VIEW                  -->
<!-- ════════════════════════════════ -->
<div class="layer on" id="l0">
  <div class="hero">
    <div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 01 od 21 · A razina · temelji</div>
    <h1 class="hero-title">Skupovi, <span>Brojevi</span><br>i Apsolutna Vrijednost</h1>
    <p class="hero-sub">Infrastruktura cijele mature — bez ovoga nema funkcija, derivacija ni integrala</p>
    <div class="hero-meta">
      <span class="hchip b">4 koncepta</span>
      <span class="hchip a">⭐ Visoka maturalna frekvencija</span>
      <span class="hchip c">~25 min</span>
    </div>
    <div class="pt"><div class="pb" style="width:6%"></div></div>
  </div>

  <div class="tags">
    <span class="pill p-b">Skupovi</span>
    <span class="pill p-c">ℕ ℤ ℚ ℝ</span>
    <span class="pill p-i">Apsolutna vrijednost</span>
    <span class="pill p-v">Intervali</span>
    <span class="pill p-a">Matura taktika</span>
    <span class="pill p-r">Top zamke</span>
  </div>

  <div class="slbl">// zašto ne smijete preskočiti ovo poglavlje</div>
  <div class="box-int">
    <div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">
      Ovo nije "uvod koji brzo preskočiš". Skupovi, skupovi brojeva, apsolutna vrijednost i intervali <em>pojavljuju se skriveno u svakom drugom poglavlju</em>.<br><br>
      Kad pišeš domenu funkcije → koristiš intervale. Kad rješavaš nejednadžbu → koristiš skupove. Kad pišeš "x ∈ ℝ, x ≠ 0" → koristiš ovo. Kad izlaziš iz zadatka s derivacijom → pišeš interval monotonosti.<br><br>
      <strong>Ovo je infrastruktura. Bez nje se sve ostalo raspada.</strong>
    </div>
  </div>

  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">∈ ∪</div><div class="sc-name">Skupovi</div><div class="sc-desc">Operacije A∪B, A∩B, A\\B, formula moćnosti</div></div>
    <div class="sc"><div class="sc-ico si-c">ℕ→ℝ</div><div class="sc-name">Skupovi brojeva</div><div class="sc-desc">ℕ⊂ℤ⊂ℚ⊂ℝ — ugniježđeni, mora biti automatski</div></div>
    <div class="sc"><div class="sc-ico si-i">|x|</div><div class="sc-name">Apsolutna vrijednost</div><div class="sc-desc">Udaljenost od nule. Jednadžbe i nejednadžbe — čest tip</div></div>
    <div class="sc"><div class="sc-ico si-a">⟨ ⟩</div><div class="sc-name">Intervali</div><div class="sc-desc">Precizni zapis skupova na ℝ — obavezno za domene</div></div>
  </div>

  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">∪ ∩ \\ operacije</div><div class="cv">Unija (ILI) · Presjek (I) · Razlika (u A ali ne B). Mora biti automatski refleks.</div></div>
    <div class="cr"><div class="ck b">Formula moćnosti</div><div class="cv"><code>|A∪B| = |A| + |B| − |A∩B|</code> — uvijek oduzmi presjek!</div></div>
    <div class="cr"><div class="ck c">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</div><div class="cv">Svaki skup je podskup sljedećeg. Kao ruske lutke — zapamti redoslijed.</div></div>
    <div class="cr"><div class="ck c">Iracionalni 𝕀</div><div class="cv"><code>√2, √3, π, e</code> — nisu razlomci. Dio su ℝ ali ne i ℚ.</div></div>
    <div class="cr"><div class="ck i">|x| — udaljenost</div><div class="cv"><code>|x| = x</code> (x≥0) · <code>|x| = −x</code> (x&lt;0). Uvijek ≥ 0!</div></div>
    <div class="cr"><div class="ck v">Intervali — zagrada</div><div class="cv">⟨ ⟩ = uključen · ( ) = isključen · <strong>∞ nikad uglatom!</strong></div></div>
    <div class="cr"><div class="ck r">Zamka #1</div><div class="cv"><code>√9 = 3 ∈ ℕ</code> — nije iracionalan! Perfektni kvadrati su prirodni brojevi.</div></div>
    <div class="cr"><div class="ck r">Zamka #2</div><div class="cv"><code>|x| = −5</code> → odmah ∅. Apsolutna vrijednost ne može biti negativna.</div></div>
  </div>

  <div class="nav-row">
    <span class="nb off">← prethodno</span>
    <span class="nb primary" onclick="sw(1)">Uči detaljno →</span>
  </div>
</div>

<!-- ════════════════════════════════ -->
<!-- L1 — LEARN                       -->
<!-- ════════════════════════════════ -->
<div class="layer" id="l1">

  <!-- ══ 01 SKUPOVI ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · SKUPOVI</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — što je skup</div>
    <div class="box-int-txt">
      Zamišljaj skup kao <em>košaru</em>. Svaki predmet ili jest u košari ili nije — nema djelomičnog članstva, nema "malo je unutra".<br><br>
      Matematičari su izmislili skupove da mogu <em>precizno</em> govoriti o tome "tko spada gdje". Na maturi to koristiš kad pišeš domenu funkcije, rješenje nejednadžbe ili uvjet definiranosti.
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">FORMALNO</span>
    <span class="val">A = {1, 2, 3}</span> <span class="cmt">— extensivni zapis</span><br>
    <span class="val">A = {x ∈ ℤ | 0 &lt; x &lt; 5}</span> <span class="cmt">— intenzivni zapis → A = {1,2,3,4}</span><br>
    <span class="val">a ∈ A</span> <span class="cmt">— a pripada skupu A</span> &nbsp; <span class="val">b ∉ A</span> <span class="cmt">— b ne pripada</span>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — Vennov dijagram</div>
    <div class="box-men-txt">
      Zamišljaj <strong>dva kruga koji se preklapaju</strong>.<br>
      · <strong>A∪B</strong> = sve što pokrivaš objema rukama (cijela površina oba kruga)<br>
      · <strong>A∩B</strong> = samo gdje se krugovi presijecaju (sredina)<br>
      · <strong>A\\B</strong> = samo lijevim krugom, bez sredine
    </div>
  </div>

  <!-- VENN — Canvas animirani -->
  <div class="venn-wrap">
    <div class="venn-head">
      <span class="venn-title">// Vennov dijagram — A={1,2,3} · B={3,4,5}</span>
      <div class="venn-btns">
        <button class="vbtn on" onclick="venn('union',this)">A∪B</button>
        <button class="vbtn" onclick="venn('inter',this)">A∩B</button>
        <button class="vbtn" onclick="venn('diffAB',this)">A\\B</button>
        <button class="vbtn" onclick="venn('diffBA',this)">B\\A</button>
      </div>
    </div>
    <div class="venn-svg-wrap" style="padding:14px 10px 8px">
      <canvas id="venn-canvas" width="380" height="200" style="max-width:100%;height:auto;display:block;margin:0 auto"></canvas>
    </div>
    <div class="venn-res" id="vr">A∪B = {1, 2, 3, 4, 5} &nbsp;·&nbsp; |A∪B| = 5</div>
  </div>

  <div class="box-tip">
    <span class="bt-ico">💡</span>
    <div class="bt-body">
      <div class="bt-title">Formula moćnosti — obavezno zapamti</div>
      <div class="bt-txt"><strong>|A∪B| = |A| + |B| − |A∩B|</strong><br>Presjek oduzimamo jer smo ga inače prebrojali dva puta. Ova formula dolazi u kombinatorici, statistici i zadacima s tekstom.</div>
    </div>
  </div>

  <div class="box-tak">
    <div class="box-tak-lbl">KAKO PREPOZNATI ZADATAK — skupovi</div>
    <div class="box-tak-txt">
      Vidiš simbole <strong>∈, ∉, ∪, ∩, \\, ⊂</strong> → skupovni zadatak, primijeni operacije.<br>
      Vidiš tekst <strong>"koliko učenika zna oba predmeta"</strong> → presjek + formula moćnosti.<br>
      Vidiš <strong>domenu funkcije ili uvjet definiranosti</strong> → rezultat ćeš pisati kao skup/interval.
    </div>
  </div>

  <!-- BUG 1 — skupovi -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — skupovi</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">A = {2, 4, 6}, B = {4, 6, 8, 10}. Učenik računa:</p>
      <div class="bug-task">|A∪B| = |A| + |B| = 3 + 4 = <span class="wrong">7</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Greška: A i B nemaju isti broj elemenata</div>
        <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška: nije oduzet presjek A∩B = {4,6}, točno je |A∪B| = 5</div>
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška: formula vrijedi samo za disjunktne skupove</div>
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Nema greške, 7 je točno</div>
      </div>
      <div class="bug-expl" id="b1e"></div>
    </div>
  </div>

  <div class="box-warn">
    <span class="bw-ico">⚠</span>
    <div class="bw-body">
      <div class="bw-title">Top zamke — skupovi</div>
      <div class="bw-txt">
        <strong>1.</strong> <code>∅ ≠ {∅}</code> — prazni skup ima 0 elemenata; {∅} ima 1 element (sam prazni skup).<br>
        <strong>2.</strong> <code>|A∪B| ≠ |A|+|B|</code> — uvijek oduzmi presjek!<br>
        <strong>3.</strong> <code>A\\B ≠ B\\A</code> — razlika skupova nije komutativna.<br>
        <strong>4.</strong> A⊂B ne znači A=B — podskup može biti pravi (manji).
      </div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — skupovi</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>∪ = ILI · ∩ = I · \\ = razlika (bez presjeka)</li>
      <li class="b20-item"><div class="b20-dot"></div>|A∪B| = |A| + |B| − |A∩B| — uvijek oduzmi presjek</li>
      <li class="b20-item"><div class="b20-dot"></div>∅ ≠ {0} ≠ {∅} — tri različite stvari</li>
      <li class="b20-item"><div class="b20-dot"></div>A\\B ≠ B\\A — razlika nije komutativna</li>
    </ul>
  </div>


<div class="inline-cp" id="icp1">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — skupovi</span><span class="icp-score" id="icp1-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp1q1"><div class="icp-q-text">A={1,2,3}, B={2,3,4}. |A∪B| = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">3</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">4</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">5</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">6</div>
    </div><div class="icp-fb" id="icp1q1fb"></div></div>
    <div class="icp-q" id="icp1q2"><div class="icp-q-text">A∩B za A={1,3,5} i B={3,5,7} je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">{1,7}</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">{3,5}</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">{1,3,5,7}</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">∅</div>
    </div><div class="icp-fb" id="icp1q2fb"></div></div>
    <div class="icp-q" id="icp1q3"><div class="icp-q-text">Koji iskaz vrijedi za svaki skup A?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">∅ ∈ A</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">∅ ⊆ A</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">A ⊆ ∅</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">A ∈ A</div>
    </div><div class="icp-fb" id="icp1q3fb"></div></div>
    <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na skupove brojeva →</div>
    <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
  </div>
</div>
  <!-- ══ 02 SKUPOVI BROJEVA ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · SKUPOVI BROJEVA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — hijerarhija skupova brojeva</div>
    <div class="box-int-txt">
      Zamišljaj to kao <em>ruske lutke (matrjoške)</em>. Svaki skup je unutar sljedećeg — manji unutar većeg.<br><br>
      ℕ je najmanja lutka (samo pozitivni cijeli). ℤ je sljedeća (dodaješ negativne i nulu). ℚ je još veća (dodaješ razlomke). ℝ je najveća — cijeli brojevni pravac bez rupa.<br><br>
      Na maturi te pitaju: <em>"u koji NAJUŽI skup pripada ovaj broj?"</em> Kreni od ℕ prema gore dok ne nađeš.
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">FORMALNO — ugniježđenost</span>
    <span class="val">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</span> <span class="cmt">← ovo mora biti automatsko</span><br>
    <span class="val">ℝ = ℚ ∪ 𝕀</span> <span class="cmt">← realni = racionalni ∪ iracionalni</span><br>
    <span class="val">ℚ ∩ 𝕀 = ∅</span> <span class="cmt">← racionalni i iracionalni nemaju niti jedan zajednički element</span>
  </div>

  <div class="tbl">
    <table>
      <thead><tr><th>Oznaka</th><th>Naziv</th><th>Elementi</th><th>Primjeri</th><th>Napomena</th></tr></thead>
      <tbody>
        <tr><td><code>ℕ</code></td><td><b>Prirodni</b></td><td>Pozitivni cijeli</td><td><code>1, 2, 17, 1000</code></td><td><span class="bs bs-b">0 ∉ ℕ</span></td></tr>
        <tr><td><code>ℤ</code></td><td><b>Cijeli</b></td><td>Pos., neg. i nula</td><td><code>−5, 0, 3</code></td><td><span class="bs bs-c">0 ∈ ℤ</span></td></tr>
        <tr><td><code>ℚ</code></td><td><b>Racionalni</b></td><td>p/q, q≠0 (uklj. per. dec.)</td><td><code>1/2, −0.75, 0.3̄</code></td><td><span class="bs bs-i">razlomci</span></td></tr>
        <tr><td><code>𝕀</code></td><td><b>Iracionalni</b></td><td>Nisu razlomak, beskonačni decimalni</td><td><code>√2, π, e, √5</code></td><td><span class="bs bs-v">ne-razlomci</span></td></tr>
        <tr><td><code>ℝ</code></td><td><b>Realni</b></td><td>ℚ ∪ 𝕀 = cijeli pravac</td><td><code>svi gore</code></td><td><span class="bs bs-c">bez rupa</span></td></tr>
      </tbody>
    </table>
  </div>

  <!-- CLASSIFIER — 20 pitanja -->
  <div class="clf">
    <div class="clf-head">
      <span class="clf-title">// Klasifikator — u koji NAJUŽI skup?</span>
      <span class="clf-sc" id="clf-sc">0 / 0 točnih</span>
    </div>
    <div class="clf-body">
      <div class="clf-num" id="clf-num">√25</div>
      <p style="font-family:var(--mono);font-size:11.5px;color:var(--t2);text-align:center;margin-bottom:13px">Odaberi najuži skup kojemu broj pripada:</p>
      <div class="clf-sets">
        <div class="clf-set" onclick="classify(this,'ℕ')">ℕ</div>
        <div class="clf-set" onclick="classify(this,'ℤ')">ℤ</div>
        <div class="clf-set" onclick="classify(this,'ℚ')">ℚ</div>
        <div class="clf-set" onclick="classify(this,'𝕀')">𝕀</div>
      </div>
      <div class="clf-fb" id="clf-fb"></div>
      <div class="clf-ctrl">
        <button class="clf-btn" onclick="nextCLF()" id="clf-next" style="display:none">Sljedeći →</button>
        <button class="clf-btn" onclick="restartCLF()" id="clf-restart" style="display:none;background:var(--dim-v);color:var(--violet);border-color:var(--bd-v)">↺ Iznova</button>
      </div>
      <div class="drill-bar" style="margin-top:12px"><div class="drill-bar-fill" id="clf-bar" style="background:linear-gradient(90deg,var(--blue),var(--cyan));width:0%"></div></div>
    </div>
  </div>

  <!-- MENTAL DRILL — rapid fire -->
  <div class="drill">
    <div class="drill-head">
      <span class="drill-title">// Brzi refleks — Da ili Ne? (ℕ?)</span>
      <span class="drill-score" id="dr-sc">0 / 0</span>
    </div>
    <div class="drill-body">
      <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li ovaj broj element skupa ℕ?</p>
      <div class="drill-q" id="dr-q">√36 − 2</div>
      <div class="drill-opts">
        <div class="drill-opt" onclick="drill(this,true)">Da ∈ ℕ</div>
        <div class="drill-opt" onclick="drill(this,false)">Ne ∉ ℕ</div>
      </div>
      <div class="drill-fb" id="dr-fb"></div>
      <div class="drill-ctrl">
        <button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeći →</button>
      </div>
      <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
    </div>
  </div>

  <div class="box-warn">
    <span class="bw-ico">🎯</span>
    <div class="bw-body">
      <div class="bw-title">Top 5 zamki — klasifikacija</div>
      <div class="bw-txt">
        <strong>1. √4 = 2 ∈ ℕ</strong> — perfektni kvadrat nije iracionalan!<br>
        <strong>2. 0 ∉ ℕ</strong> — u HR kurikulumu ℕ počinje od 1.<br>
        <strong>3. 0.333... = <span class="frac"><span class="num">1</span><span class="den">3</span></span> ∈ ℚ</strong> — periodični decimalni = racionalan.<br>
        <strong>4. −<span class="frac"><span class="num">12</span><span class="den">4</span></span> = −3 ∈ ℤ</strong> — uvijek skrati razlomak prvo!<br>
        <strong>5. π ≠ 22/7</strong> — <span class="frac"><span class="num">22</span><span class="den">7</span></span> je aproksimacija; π ∈ 𝕀.
      </div>
    </div>
  </div>

  <!-- BUG 2 — skupovi brojeva -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — klasifikacija</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik tvrdi:</p>
      <div class="bug-task">√4 = 2, ali 2 je <span class="wrong">iracionalan</span> broj jer je dobiven iz korijena.</div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Učenik je u pravu — svi kvadratni korijeni su iracionalni</div>
        <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška: √4 = 2 ∈ ℕ — perfektni kvadrati daju prirodne brojeve</div>
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) √4 je iracionalan, ali 2 je racionalan — to su dvije različite stvari</div>
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Greška je u tome što 2 nije cijeli broj</div>
      </div>
      <div class="bug-expl" id="b2e"></div>
    </div>
  </div>

  <div class="box-alv">
    <div class="balv-lbl">A RAZINA UPGRADE — kad postaje teže</div>
    <div class="balv-txt">
      Na A razini klasifikacija dolazi <strong>skrivena unutar dokazivanja ili algebarskog izračuna</strong>.<br>
      Primjer: <em>"Dokaži da √2 nije racionalan."</em> — to je dokaz kontradikcijom koji pretpostavlja da možeš precizno definirati ℚ.<br>
      Ili: <em>"Za koji n ∈ ℕ je √n ∈ ℕ?"</em> — odgovor: n mora biti perfektan kvadrat (n ∈ {1, 4, 9, 16, 25...}).
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — skupovi brojeva</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ — kao ruske lutke, svaki unutar sljedećeg</li>
      <li class="b20-item"><div class="b20-dot"></div>√n ∈ ℕ samo ako je n perfektan kvadrat (1,4,9,16,25...)</li>
      <li class="b20-item"><div class="b20-dot"></div>0 ∉ ℕ, ali 0 ∈ ℤ — pazi na ℕ!</li>
      <li class="b20-item"><div class="b20-dot"></div>ℚ ∩ 𝕀 = ∅ — racionalni i iracionalni su potpuno odvojeni</li>
    </ul>
  </div>


<div class="inline-cp" id="icp2">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — skupovi brojeva</span><span class="icp-score" id="icp2-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp2q1"><div class="icp-q-text">√49 − 5 pripada najužem skupu:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">ℕ</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">ℤ (ali ne ℕ)</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">ℚ (ali ne ℤ)</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">𝕀</div>
    </div><div class="icp-fb" id="icp2q1fb"></div></div>
    <div class="icp-q" id="icp2q2"><div class="icp-q-text">Koji broj je iracionalan?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">0.333...</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">−7/3</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">√5</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">√36</div>
    </div><div class="icp-fb" id="icp2q2fb"></div></div>
    <div class="icp-q" id="icp2q3"><div class="icp-q-text">Ispravan redoslijed uključivanja skupova:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">ℕ ⊂ ℚ ⊂ ℤ ⊂ ℝ</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">ℤ ⊂ ℕ ⊂ ℚ ⊂ ℝ</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">ℚ ⊂ ℕ ⊂ ℤ ⊂ ℝ</div>
    </div><div class="icp-fb" id="icp2q3fb"></div></div>
    <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na apsolutnu vrijednost →</div>
    <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
  </div>
</div>
  <!-- ══ 03 APSOLUTNA VRIJEDNOST ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · APSOLUTNA VRIJEDNOST</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — što |x| zapravo mjeri</div>
    <div class="box-int-txt">
      Apsolutna vrijednost nije "samo maknuti minus". Ona mjeri <em>udaljenost od nule na brojevnom pravcu</em>.<br><br>
      Koliko je daleko −7 od nule? 7 koraka. Koliko je daleko +7 od nule? 7 koraka. Zato je |−7| = |7| = 7.<br><br>
      <strong>Ključna intuicija:</strong> |x − 3| = 5 znači "x je udaljen 5 koraka od broja 3" → x = 8 ili x = −2. Odmah, bez papira.
    </div>
  </div>

  <!-- ABS VIZ SVG -->
  <div class="iviz-wrap">
    <div class="iviz-head"><span class="iviz-title">// Apsolutna vrijednost — udaljenost od nule</span></div>
    <div class="iviz-canvas">
      <svg width="640" height="105" viewBox="0 0 640 105" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
        <line x1="30" y1="56" x2="600" y2="56" stroke="rgba(77,158,255,0.2)" stroke-width="1.5"/>
        <polygon points="600,52 612,56 600,60" fill="rgba(77,158,255,0.35)"/>
        <polygon points="40,52 28,56 40,60" fill="rgba(77,158,255,0.35)"/>
        <g font-family="JetBrains Mono,monospace" font-size="10.5" text-anchor="middle">
          <line x1="88"  y1="50" x2="88"  y2="62" stroke="rgba(77,158,255,0.28)" stroke-width="1"/><text x="88"  y="76" fill="rgba(122,144,187,0.55)">−5</text>
          <line x1="152" y1="50" x2="152" y2="62" stroke="rgba(77,158,255,0.28)" stroke-width="1"/><text x="152" y="76" fill="rgba(122,144,187,0.55)">−4</text>
          <line x1="216" y1="50" x2="216" y2="62" stroke="rgba(77,158,255,0.28)" stroke-width="1"/><text x="216" y="76" fill="rgba(122,144,187,0.55)">−3</text>
          <line x1="280" y1="50" x2="280" y2="62" stroke="rgba(77,158,255,0.28)" stroke-width="1"/><text x="280" y="76" fill="rgba(122,144,187,0.55)">−2</text>
          <line x1="344" y1="50" x2="344" y2="62" stroke="rgba(77,158,255,0.28)" stroke-width="1"/><text x="344" y="76" fill="rgba(122,144,187,0.55)">−1</text>
          <line x1="408" y1="44" x2="408" y2="64" stroke="rgba(77,158,255,0.55)" stroke-width="2"/><text x="408" y="78" fill="rgba(77,158,255,0.9)" font-weight="700" font-size="11">0</text>
          <line x1="472" y1="50" x2="472" y2="62" stroke="rgba(77,158,255,0.28)" stroke-width="1"/><text x="472" y="76" fill="rgba(122,144,187,0.55)">1</text>
          <line x1="536" y1="50" x2="536" y2="62" stroke="rgba(77,158,255,0.28)" stroke-width="1"/><text x="536" y="76" fill="rgba(122,144,187,0.55)">2</text>
        </g>
        <path d="M 216 34 Q 312 13 408 34" stroke="rgba(248,113,113,0.75)" stroke-width="1.8" fill="none" stroke-dasharray="5,3"/>
        <polygon points="215,34 207,27 219,25" fill="rgba(248,113,113,0.75)"/>
        <text x="312" y="18" fill="rgba(248,113,113,0.9)" font-family="JetBrains Mono,monospace" font-size="10.5" text-anchor="middle" font-weight="700">|−3| = 3</text>
        <path d="M 408 40 Q 472 20 536 40" stroke="rgba(77,158,255,0.75)" stroke-width="1.8" fill="none" stroke-dasharray="5,3"/>
        <polygon points="537,40 545,34 533,32" fill="rgba(77,158,255,0.75)"/>
        <text x="474" y="28" fill="rgba(77,158,255,0.9)" font-family="JetBrains Mono,monospace" font-size="10.5" text-anchor="middle" font-weight="700">|2| = 2</text>
        <text x="408" y="97" fill="rgba(77,158,255,0.45)" font-family="JetBrains Mono,monospace" font-size="9" text-anchor="middle">← udaljenost od 0 →</text>
      </svg>
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">FORMALNO</span>
    <span class="val">|x| = x</span> <span class="kw">ako x ≥ 0</span><br>
    <span class="val">|x| = −x</span> <span class="kw">ako x &lt; 0</span> <span class="cmt">(primjer: |−5| = −(−5) = 5 ✓)</span><br><br>
    <span class="kw">Svojstva:</span> <span class="val">|x| ≥ 0</span> · <span class="val">|xy| = |x|·|y|</span> · <span class="val">|x+y| ≤ |x|+|y|</span> · <span class="val">|x|² = x²</span>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — jednadžbe s |x|</div>
    <div class="box-men-txt">
      <strong>|x − a| = b</strong> čitaj kao: "x je udaljen b od broja a".<br>
      Odmah znaš: b koraka desno → x = a+b, b koraka lijevo → x = a−b.<br>
      Primjer: <strong>|x − 3| = 5</strong> → x = 8 ili x = −2. Bez pisanja, za 3 sekunde.
    </div>
  </div>

  <!-- STEP REVEAL 1 — jednadžba -->
  <div class="sr" id="sr1">
    <div class="sr-head">
      <div class="sr-title">Riješeni primjer — korak po korak</div>
      <div class="sr-task">|2x − 3| = 7</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr1s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Provjeri desnu stranu PRVO</div>
            <div class="sr-txt">7 &gt; 0 → jednadžba <em>ima rješenja</em>. Ako bi desna strana bila negativna → odmah ∅, ne računaj dalje.</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Rastavamo na dva slučaja</div>
            <div class="sr-txt">
              <strong>Slučaj +:</strong> 2x − 3 = 7 → 2x = 10 → x = 5<br>
              <strong>Slučaj −:</strong> 2x − 3 = −7 → 2x = −4 → x = −2
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Provjeri sebe — korak +</div>
                <p style="font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:7px">Iz 2x − 3 = 7, izolaj x:</p>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try1" type="text" placeholder="x = ?" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try1','try1-fb','5','2x−3=7')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try1-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Provjera — obavezna!</div>
            <div class="sr-txt">|2·5−3| = |7| = 7 <em>✓</em> &nbsp;|&nbsp; |2·(−2)−3| = |−7| = 7 <em>✓</em></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s4">
        <div class="sr-step-in">
          <div class="sr-num">4</div>
          <div class="sr-body">
            <div class="sr-stitle">Zapiši rješenje</div>
            <div class="sr-txt"><strong>x ∈ {−2, 5}</strong></div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr1',4)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr1',4)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr1p">0 / 4</span>
    </div>
  </div>

  <!-- STEP REVEAL 2 — nejednadžba -->
  <div class="sr" id="sr2" style="margin-top:11px">
    <div class="sr-head">
      <div class="sr-title">Riješeni primjer — apsolutna nejednadžba</div>
      <div class="sr-task">|x − 1| &lt; 4</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr2s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Prepoznaj tip — &lt; daje interval!</div>
            <div class="sr-txt">|izraz| &lt; a → razvija se kao <strong>−a &lt; izraz &lt; a</strong><br>Pamti: <em>&lt;</em> → "sandvič" (interval u sredini)</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Primijeni pravilo</div>
            <div class="sr-txt">−4 &lt; x − 1 &lt; 4</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Izolaj x — dodaj 1 svuda</div>
            <div class="sr-txt">−3 &lt; x &lt; 5
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Provjeri — koji je interval?</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try2" type="text" placeholder="interval..." autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try2','try2-fb','(-3,5)','njednadzba')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try2-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s4">
        <div class="sr-step-in">
          <div class="sr-num">4</div>
          <div class="sr-body">
            <div class="sr-stitle">Zapiši kao interval</div>
            <div class="sr-txt"><strong>x ∈ (−3, 5)</strong> — otvoreni jer su stroge nejednakosti &lt;</div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr2',4)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr2',4)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr2p">0 / 4</span>
    </div>
  </div>

  <div class="cmp" style="margin-top:16px">
    <div class="cmp-c">
      <div class="cmp-h b">|x| &lt; a → interval</div>
      <div class="cmp-body">
        <div class="cmp-row"><b>Razvija se:</b>−a &lt; x &lt; a</div>
        <div class="cmp-row"><b>Rješenje:</b>x ∈ (−a, a)</div>
        <div class="cmp-row"><b>Primjer |x|&lt;3:</b>x ∈ (−3, 3)</div>
        <div class="cmp-row"><b>Pamti:</b>&lt; → sandvič, jedna sredina</div>
      </div>
    </div>
    <div class="cmp-c">
      <div class="cmp-h r">|x| &gt; a → unija</div>
      <div class="cmp-body">
        <div class="cmp-row"><b>Razvija se:</b>x&lt;−a ILI x&gt;a</div>
        <div class="cmp-row"><b>Rješenje:</b>x ∈ (−∞,−a)∪(a,+∞)</div>
        <div class="cmp-row"><b>Primjer |x|&gt;3:</b>x ∈ (−∞,−3)∪(3,+∞)</div>
        <div class="cmp-row"><b>Pamti:</b>&gt; → unija, dvije strane</div>
      </div>
    </div>
  </div>

  <!-- BUG 3 — apsolutna nejednadžba -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — apsolutna nejednadžba</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Zadatak: Riješi |x| &gt; 3. Učenik piše:</p>
      <div class="bug-task">Rješenje: x ∈ <span class="wrong">(−3, 3)</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Greška: trebao pisati ⟨−3, 3⟩ s uključenim rubovima</div>
        <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Greška: |x|>a daje uniju, ne interval — točno je (−∞,−3)∪(3,+∞)</div>
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: trebao koristiti ≥ umjesto &gt;</div>
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Nema greške, (−3, 3) je točno rješenje</div>
      </div>
      <div class="bug-expl" id="b3e"></div>
    </div>
  </div>

  <div class="box-tak">
    <div class="box-tak-lbl">MATURA TAKTIKA — apsolutna vrijednost</div>
    <div class="box-tak-txt">
      <strong>Korak 0 (uvijek!):</strong> provjeri desnu stranu PRIJE nego počneš.<br>
      · <code>|izraz| = neg. broj</code> → odmah ∅, bez računanja → bodovi gratis!<br>
      · <code>|izraz| &lt; a</code> → interval · <code>|izraz| &gt; a</code> → unija<br>
      · <strong>Provjera rješenja je obavezna</strong> — NCVVO boduje provjeru posebno.
    </div>
  </div>

  <div class="ncvvo">
    <div class="ncvvo-hd">📋 što NCVVO ovdje najčešće radi</div>
    <div class="ncvvo-body">
      <div class="nci"><div class="nc-dot"></div><span><b>Zamka tipa ∅:</b> |3x+5| = −2 → učenici počnu računati umjesto odmah pisati ∅</span></div>
      <div class="nci"><div class="nc-dot"></div><span><b>Kratki zadatak:</b> Rješenja jednadžbe |2x−1| = 5 su ___ i ___ (dva odgovora)</span></div>
      <div class="nci"><div class="nc-dot"></div><span><b>Nejednadžba:</b> Zapiši rješenje |x+2| &lt; 3 kao interval — testira znaju li &lt; = interval</span></div>
      <div class="nci"><div class="nc-dot"></div><span><b>Kombinacija:</b> Domena f(x) = √(4−|x|) — spaja aps. vrijednost + intervale + korijene</span></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — apsolutna vrijednost</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>|x| = udaljenost od 0. Uvijek ≥ 0.</li>
      <li class="b20-item"><div class="b20-dot"></div>Desna strana negativna → odmah ∅ (štedi vrijeme, daje bod!)</li>
      <li class="b20-item"><div class="b20-dot"></div>|izraz| &lt; a → interval (−a, a) · |izraz| &gt; a → unija</li>
      <li class="b20-item"><div class="b20-dot"></div>|x−a| = b → "x udaljen b od a" → x = a±b</li>
      <li class="b20-item"><div class="b20-dot"></div>Provjera rješenja je OBAVEZNA — uvrsti natrag!</li>
    </ul>
  </div>


<div class="inline-cp" id="icp3">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — apsolutna vrijednost</span><span class="icp-score" id="icp3-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp3q1"><div class="icp-q-text">|−8| + |3| = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">−5</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">5</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">11</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">−11</div>
    </div><div class="icp-fb" id="icp3q1fb"></div></div>
    <div class="icp-q" id="icp3q2"><div class="icp-q-text">Rješenje |x−2|=5 je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">x=3</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">x=7 ili x=−3</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">x=7</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">x=−7</div>
    </div><div class="icp-fb" id="icp3q2fb"></div></div>
    <div class="icp-q" id="icp3q3"><div class="icp-q-text">|x| &lt; 4 ekvivalentno je s:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">x &lt; 4</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">−4 &lt; x &lt; 4</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">x &gt; −4</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">x &lt; −4 ili x &gt; 4</div>
    </div><div class="icp-fb" id="icp3q3fb"></div></div>
    <div class="icp-done" id="icp3-done">✓ Izvrsno! Nastavi na intervale →</div>
    <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
  </div>
</div>
  <!-- ══ 04 INTERVALI ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">04 · INTERVALI</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — što je interval</div>
    <div class="box-int-txt">
      Interval je <em>komad brojevnog pravca</em>. Umjesto da nabraja beskonačno realnih brojeva, kaže "uzmi sve od −2 do 5".<br><br>
      Dva pitanja koja moraš odgovoriti: <em>gdje počinje, gdje završava — i jesu li krajevi unutra ili vani?</em><br><br>
      <strong>Zlatno pravilo:</strong> beskonačnost nikad nema uglastu zagradu — ∞ nije broj koji možeš "dosegnuti".
    </div>
  </div>

  <!-- INTERVAL VIZ -->
  <div class="iviz-wrap">
    <div class="iviz-head">
      <span class="iviz-title">// Vizualizacija intervala — klikni tip</span>
      <div class="iviz-btns">
        <button class="ibtn on" onclick="iviz('closed',this)">⟨a,b⟩</button>
        <button class="ibtn" onclick="iviz('open',this)">(a,b)</button>
        <button class="ibtn" onclick="iviz('halfL',this)">⟨a,b)</button>
        <button class="ibtn" onclick="iviz('halfR',this)">(a,b⟩</button>
        <button class="ibtn" onclick="iviz('inf',this)">⟨a,+∞)</button>
        <button class="ibtn" onclick="iviz('ninf',this)">(−∞,b⟩</button>
      </div>
    </div>
    <div class="iviz-canvas">
      <svg id="isv" width="560" height="80" viewBox="0 0 560 80" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
        <line x1="40" y1="40" x2="510" y2="40" stroke="rgba(77,158,255,0.18)" stroke-width="1.5"/>
        <polygon points="510,36 520,40 510,44" fill="rgba(77,158,255,0.33)"/>
        <polygon points="50,36 40,40 50,44" fill="rgba(77,158,255,0.33)"/>
        <g font-family="JetBrains Mono,monospace" font-size="10" text-anchor="middle" fill="rgba(122,144,187,0.5)">
          <line x1="106" y1="34" x2="106" y2="46" stroke="rgba(77,158,255,0.25)" stroke-width="1"/>
          <text x="106" y="60">−3</text>
          <line x1="184" y1="34" x2="184" y2="46" stroke="rgba(77,158,255,0.25)" stroke-width="1"/>
          <text x="184" y="60">−1</text>
          <line x1="262" y1="34" x2="262" y2="46" stroke="rgba(77,158,255,0.25)" stroke-width="1"/>
          <text x="262" y="60">1</text>
          <line x1="340" y1="34" x2="340" y2="46" stroke="rgba(77,158,255,0.25)" stroke-width="1"/>
          <text x="340" y="60">3</text>
          <line x1="418" y1="34" x2="418" y2="46" stroke="rgba(77,158,255,0.25)" stroke-width="1"/>
          <text x="418" y="60">5</text>
        </g>
        <g id="iviz-g"></g>
        <text id="iviz-lbl" x="280" y="16" fill="rgba(34,211,238,0.9)" font-family="JetBrains Mono,monospace" font-size="11" text-anchor="middle" font-weight="700">⟨−1, 3⟩ — zatvoren · −1 ≤ x ≤ 3</text>
      </svg>
    </div>
  </div>

  <div class="tbl">
    <table>
      <thead><tr><th>Naziv</th><th>Zapis</th><th>Nejednakost</th><th>Rubovi</th></tr></thead>
      <tbody>
        <tr><td><b>Zatvoreni</b></td><td><code>⟨a, b⟩</code></td><td><code>a ≤ x ≤ b</code></td><td>Oba uključena (●●)</td></tr>
        <tr><td><b>Otvoreni</b></td><td><code>(a, b)</code></td><td><code>a &lt; x &lt; b</code></td><td>Oba isključena (○○)</td></tr>
        <tr><td><b>Poluzatvoreni L</b></td><td><code>⟨a, b)</code></td><td><code>a ≤ x &lt; b</code></td><td>a uključen, b isključen (●○)</td></tr>
        <tr><td><b>Poluzatvoreni R</b></td><td><code>(a, b⟩</code></td><td><code>a &lt; x ≤ b</code></td><td>a isključen, b uključen (○●)</td></tr>
        <tr><td><b>Beskonačan +</b></td><td><code>⟨a, +∞)</code></td><td><code>x ≥ a</code></td><td>∞ UVIJEK okrugla!</td></tr>
        <tr><td><b>Beskonačan −</b></td><td><code>(−∞, b⟩</code></td><td><code>x ≤ b</code></td><td>∞ UVIJEK okrugla!</td></tr>
        <tr><td><b>Cijeli ℝ</b></td><td><code>(−∞, +∞)</code></td><td><code>x ∈ ℝ</code></td><td>Oba ∞ okrugla</td></tr>
      </tbody>
    </table>
  </div>

  <div class="sub-l">→ Automatski prijevodi — mora biti refleks</div>
  <div class="exs">
    <div class="ex"><div class="ex-l"><b>x ≥ 3</b></div><span class="ex-arr">→</span><div class="ex-r">⟨3, +∞)</div></div>
    <div class="ex"><div class="ex-l"><b>−1 &lt; x ≤ 5</b></div><span class="ex-arr">→</span><div class="ex-r">(−1, 5⟩</div></div>
    <div class="ex"><div class="ex-l"><b>|x| &lt; 3</b></div><span class="ex-arr">→</span><div class="ex-r">(−3, 3)</div></div>
    <div class="ex"><div class="ex-l"><b>|x| &gt; 2</b></div><span class="ex-arr">→</span><div class="ex-r">(−∞,−2) ∪ (2,+∞)</div></div>
    <div class="ex"><div class="ex-l"><b>x ∈ ℝ</b></div><span class="ex-arr">→</span><div class="ex-r">(−∞, +∞)</div></div>
  </div>

  <!-- BUG 4 — intervali -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — intervali</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik zapisuje domenu funkcije f(x) = √x:</p>
      <div class="bug-task">D(f) = <span class="wrong">⟨0, +∞⟩</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">A) Greška: domena je (0, +∞), 0 treba biti isključen</div>
        <div class="bug-opt" onclick="bug(this,'b4',true,'b4e')">B) Greška: +∞ nikad nema uglastu zagradu — točno je ⟨0, +∞)</div>
        <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">C) Greška: domena je cijeli ℝ jer √ može biti negativan</div>
        <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">D) Nema greške, ⟨0, +∞⟩ je točan zapis</div>
      </div>
      <div class="bug-expl" id="b4e"></div>
    </div>
  </div>

  <!-- KOMBINIRANI PRIMJER — spoj sve 4 teme -->
  <div class="combo">
    <div class="combo-head">
      <div class="combo-badge">KOMBINIRANI PRIMJER — spaja skupove, aps. vrijednost i intervale</div>
    </div>
    <div class="combo-body">
      <div class="combo-task">Nađi domenu funkcije f(x) = √(9 − |x|)</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Uvjet: argument korijena mora biti ≥ 0 → <strong>9 − |x| ≥ 0</strong></div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Iz toga: <strong>|x| ≤ 9</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">|x| ≤ 9 → apsolutna nejednadžba tipa ≤ → interval: <strong>−9 ≤ x ≤ 9</strong></div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Prepiši kao interval: ≤ → uglatom → <strong>D(f) = ⟨−9, 9⟩</strong></div></div>
      </div>
      <div class="combo-ans">D(f) = ⟨−9, 9⟩ &nbsp;·&nbsp; Ovo kombinira: uvjet korijena + aps. vrijednost + interval</div>
    </div>
  </div>

  <div class="box-alv">
    <div class="balv-lbl">A RAZINA UPGRADE — intervali u složenijim kontekstima</div>
    <div class="balv-txt">
      Na A razini domena dolazi kao <strong>unija više intervala</strong>.<br>
      Primjer: f(x) = 1/(x²−1) → trebamo x²−1 ≠ 0 → x ≠ ±1 → D = <strong>(−∞,−1) ∪ (−1,1) ∪ (1,+∞)</strong>.<br>
      Ili rješenje nejednadžbe x²−4 &gt; 0 → (x−2)(x+2) &gt; 0 → <strong>x ∈ (−∞,−2) ∪ (2,+∞)</strong>.
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — intervali</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>⟨ ⟩ = uključen (●) · ( ) = isključen (○)</li>
      <li class="b20-item"><div class="b20-dot"></div>∞ UVIJEK okrugla — bez iznimke, bez rasprave</li>
      <li class="b20-item"><div class="b20-dot"></div>≤ / ≥ → uglatom · &lt; / &gt; → okruglom</li>
      <li class="b20-item"><div class="b20-dot"></div>Domenu uvijek pisati kao interval(e) — to je A razina standard</li>
    </ul>
  </div>

  <!-- CHECKPOINT -->
  <!-- ══ KOMBINIRANI PRIMJERI A RAZINA ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>

  <p class="prose">Ovi zadaci kombiniraju skupove, skupove brojeva, apsolutnu vrijednost i intervale <strong>u jednom zadatku</strong> — upravo kao na A razini mature.</p>

  <!-- Kombinirani A1 -->
  <div class="combo">
    <div class="combo-head">
      <div class="combo-badge">KOMBINIRANI · tip A1 — domena s aps. vr. i razlomkom</div>
    </div>
    <div class="combo-body">
      <div class="combo-task">Nađi domenu: f(x) = 1 / √(|x| − 2)</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Uvjet 1 — nazivnik razlomka ≠ 0: √(|x|−2) ≠ 0 → <strong>|x| − 2 ≠ 0 → |x| ≠ 2 → x ≠ ±2</strong></div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Uvjet 2 — argument korijena > 0 (jer je u nazivniku, mora biti strogo pozitivan): <strong>|x| − 2 &gt; 0 → |x| &gt; 2</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Riješimo |x| &gt; 2 → <strong>x &lt; −2 ILI x &gt; 2</strong> → unija</div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Uvjet x ≠ ±2 je <em>već uključen</em> u uvjet 2 (stroga nejednakost isključuje ±2 automatski)</div></div>
      </div>
      <div class="combo-ans">D(f) = (−∞, −2) ∪ (2, +∞)</div>
    </div>
  </div>

  <!-- Kombinirani A2 -->
  <div class="combo" style="margin-top:10px">
    <div class="combo-head">
      <div class="combo-badge">KOMBINIRANI · tip A2 — tekstualni zadatak sa skupovima</div>
    </div>
    <div class="combo-body">
      <div class="combo-task">U razredu 28 učenika: 18 zna voziti bicikl (skup B), 12 zna plivati (skup P), a 5 zna oboje. Koliko učenika ne zna ni voziti ni plivati?</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Prepoznaj tip: tekstualni zadatak s "koliko ih ima u oba" → skupovni, primijeni moćnost</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">|B∪P| = |B| + |P| − |B∩P| = 18 + 12 − 5 = <strong>25</strong> (znaju barem jedno)</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Ne znaju ni jedno = ukupno − |B∪P| = 28 − 25 = <strong>3</strong></div></div>
      </div>
      <div class="combo-ans">3 učenika ne znaju ni voziti bicikl ni plivati</div>
    </div>
  </div>

  <!-- Kombinirani A3 — najteži -->
  <div class="combo" style="margin-top:10px">
    <div class="combo-head">
      <div class="combo-badge">KOMBINIRANI · tip A3 — aps. nejednadžba + klasifikacija rješenja</div>
    </div>
    <div class="combo-body">
      <div class="combo-task">Riješi nejednakost |2x − 4| ≤ 6, a zatim reci: pripada li rješenje skupu ℕ, ℤ, ℚ ili ℝ?</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">|2x−4| ≤ 6 → tip ≤ → interval: <strong>−6 ≤ 2x−4 ≤ 6</strong></div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Dodaj 4 svuda: <strong>−2 ≤ 2x ≤ 10</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Podijeli s 2: <strong>−1 ≤ x ≤ 5</strong> → interval <strong>⟨−1, 5⟩</strong></div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Klasifikacija: skup rješenja je interval ⟨−1, 5⟩ ⊂ ℝ. Npr. x = 0.5 ∈ ℚ, x = √2 ∈ 𝕀 — rješenje je podskup <strong>ℝ</strong></div></div>
      </div>
      <div class="combo-ans">x ∈ ⟨−1, 5⟩ ⊂ ℝ  ·  Rješenje nije nužno u ℕ ili ℤ — to je skup realnih brojeva!</div>
    </div>
  </div>


<div class="ncvvo-real"><div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div><div class="ncvvo-real-body">
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Skupovi brojeva · ~45% netočnih<span class="ncvvo-live-stat neutral" id="nlive-br">skupovi br.</span></div>
    <div class="ncvvo-real-q">U koji najuži skup pripada broj √49 − 5?</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>ne izračunaju √49=7 pa kažu 𝕀 jer vide korijen</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">√49=7. 7−5=2. Broj 2 ∈ ℕ. Najuži skup: <strong>ℕ (prirodni)</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Apsolutna vrijednost · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-av">aps. vrijednost</span></div>
    <div class="ncvvo-real-q">Rijesi jednadžbu: |x + 3| = 5</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>nalaze samo jedno rješenje (x=2), zaboravljaju x=−8</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">x+3=5 → x=2 · x+3=−5 → x=−8. Rješenja: <strong>x=2 ili x=−8</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Intervali · ~40% netočnih<span class="ncvvo-live-stat neutral" id="nlive-int">intervali</span></div>
    <div class="ncvvo-real-q">Zapiši skup rješenja nejednakosti |2x − 1| ≤ 5 kao interval.</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>krivo postavljaju dvostruku nejednakost ili grube zagrade</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">−5≤2x−1≤5 → −4≤2x≤6 → −2≤x≤3. Rješenje: <strong>⟨−2, 3⟩</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Skupovi — operacije · ~35% netočnih<span class="ncvvo-live-stat neutral" id="nlive-sk">skupovi</span></div>
    <div class="ncvvo-real-q">A={1,2,3,4,5}, B={2,4,6}. Koliko elemenata ima (A∪B) \\ (A∩B)?</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>ne izračunaju presjek i uniju prije razlike</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">A∪B={1,2,3,4,5,6}, A∩B={2,4}. (A∪B)\\(A∩B)={1,3,5,6}. <strong>4 elementa</strong></div>
  </div>
</div></div>
  <div class="checkpoint" id="cp">
    <div class="cp-head">
      <span class="cp-icon">✅</span>
      <div>
        <div class="cp-title">Checkpoint — jesi li spreman za dalje?</div>
        <div class="cp-sub">Potvrdi što znaš — klikni svaku stavku kad si siguran</div>
      </div>
    </div>
    <ul class="cp-list">
      <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>Znam što su skupovne operacije ∪, ∩, \\ i primijenim formulu |A∪B|</li>
      <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>Znam klasificirati broj u ℕ, ℤ, ℚ, 𝕀 ili ℝ bez oklijevanja</li>
      <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>Riješavam |izraz| = a i |izraz| &lt; a i |izraz| &gt; a</li>
      <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>Znam pretvoriti nejednakost u interval i nikad ne stavljam ∞ s uglatom zagradom</li>
      <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Mogu naći domenu funkcije tipa √(izraz) i 1/(izraz) i zapisati je kao interval</li>
    </ul>
    <div class="cp-footer">
      <span id="cp-txt">0 / 5 potvrđeno</span>
      <span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za Poglavlje 02!</span>
    </div>
  </div>

  <div class="matura-block">
    <div class="matura-hd">⭐ matura fokus — automatski refleks</div>
    <ul class="matura-list">
      <li class="mi"><div class="mi-dot"></div><span><b>Klasifikacija:</b> uvijek pitaj koji je NAJUŽI skup. Kreni od ℕ prema gore.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>√n ∈ ℕ</b> samo ako je n perfektan kvadrat (1,4,9,16,25,36...).</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>|izraz| = negativan →</b> odmah ∅. Ovo štedi vrijeme i daje bod.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>&lt; → interval · &gt; → unija.</b> Mora biti refleks, ne razmišljanje.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>∞ nikad uglatom.</b> Automatski gubiš bod ako ovo zaboraviš.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>|A∪B| = |A|+|B|−|A∩B|.</b> Presjek se uvijek oduzima.</span></li>
    </ul>
  </div>

    <div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Gdje ćeš ovo koristiti?</div><div class="cn-sub">Skupovi i apsolutna vrijednost — temelj svakog poglavlja</div></div></div>
    <div class="cn-grid">
      <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P03</span><span class="cn-item-title">Polinomi i izrazi</span></div><div class="cn-item-desc">Uvjeti definiranosti razlomaka i korijena koriste skupovne uvjete.</div><div class="cn-item-arrow">→ x≠0, x>0, x≥0</div></div>
      <div class="cn-item"><div class="cn-item-head"><span class="cn-badge b">P04</span><span class="cn-item-title">Jednadžbe</span></div><div class="cn-item-desc">|x|=a, |x|>a — rješavaju se skupovnom logikom intervala.</div><div class="cn-item-arrow">→ apsolutna vrijednost</div></div>
      <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P06</span><span class="cn-item-title">Funkcija — temelj</span></div><div class="cn-item-desc">Domena i kodomena funkcije su skupovi — ℝ, ℕ, intervali.</div><div class="cn-item-arrow">→ D(f) i C(f) kao skupovi</div></div>
      <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P17</span><span class="cn-item-title">Derivacije</span></div><div class="cn-item-desc">Intervali monotonosti i konkavnosti su skupovi na kojima f'>0.</div><div class="cn-item-arrow">→ intervali monotonosti</div></div>
    </div>
  </div>
<div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
<div class="con" style="margin-bottom:20px">
  <div class="cr"><div class="ck b">Skupovne operacije</div><div class="cv">A∪B (unija), A∩B (presjek), A\B (razlika), komplement A′ = Ω\A. ℕ⊂ℤ⊂ℚ⊂ℝ.</div></div>
  <div class="cr"><div class="ck c">Apsolutna vrijednost</div><div class="cv">|x|&lt;a ↔ −a&lt;x&lt;a &nbsp;·&nbsp; |x|&gt;a ↔ x&lt;−a ili x&gt;a &nbsp;·&nbsp; |x|=√x²</div></div>
  <div class="cr"><div class="ck i">Intervali</div><div class="cv">(a,b) otvoren, [a,b] zatvoren, [a,b) poluotvoren. Presjek i unija: iscrtaj na brojevnom pravcu!</div></div>
  <div class="cr"><div class="ck a">Skupovi brojeva</div><div class="cv">ℕ⊂ℤ⊂ℚ⊂ℝ. ℕ={0,1,2,…} bez negativnih. ℤ sadrži negativne. ℚ=svi razlomci p/q.</div></div>
  <div class="cr"><div class="ck r">Zamka</div><div class="cv">|x+1|&lt;3 ≠ x&lt;2! Razvij: −3&lt;x+1&lt;3 → −4&lt;x&lt;2. Uvijek obradi obje strane jednako!</div></div>
</div>
<div class="nav-row">
    <span class="nb" onclick="sw(0)">← Pregled</span>
    <span class="nb primary" onclick="sw(2)">Vježbaj →</span>
  </div>
</div>

<!-- ════════════════════════════════ -->
<!-- L2 — PRACTICE                    -->
<!-- ════════════════════════════════ -->
<div class="layer" id="l2">
  <!-- EXAM MODE SELECTOR -->
  <div class="exam-mode-wrap" id="exam-mode-wrap">
    <div class="exam-mode-head">
      <span class="exam-mode-title">// odaberi mod vježbanja</span>
    </div>
    <div class="exam-mode-opts">
      <div class="exam-mode-opt active" onclick="setExamMode('normal',this)">
        <div class="em-icon">📖</div>
        <div class="em-name">Standardni</div>
        <div class="em-desc">s objašnjenjima · bez pritiska</div>
      </div>
      <div class="exam-mode-opt" onclick="setExamMode('timed',this)">
        <div class="em-icon">⏱</div>
        <div class="em-name">Ispitni</div>
        <div class="em-desc">90 sek po pitanju · kao NCVVO</div>
      </div>
      <div class="exam-mode-opt" onclick="setExamMode('blitz',this)">
        <div class="em-icon">⚡</div>
        <div class="em-name">Blitz</div>
        <div class="em-desc">30 sek po pitanju · maksimalni pritisak</div>
      </div>
    </div>
  </div>

  <!-- ADAPTIVE HINT BANNER (pojavljuje se dinamički) -->
  <div class="adaptive-banner" id="adaptive-banner" style="display:none">
    <div class="ab-icon">🎯</div>
    <div class="ab-body">
      <div class="ab-title" id="ab-title">Prijedlog za ponavljanje</div>
      <div class="ab-text" id="ab-text"></div>
    </div>
    <button class="ab-close" onclick="document.getElementById('adaptive-banner').style.display='none'">×</button>
  </div>

  <!-- TIMER (vidljiv samo u ispitnom/blitz modu) -->
  <div class="exam-timer" id="exam-timer" style="display:none">
    <div class="et-circle">
      <canvas id="timer-canvas" width="64" height="64"></canvas>
      <span class="et-num" id="et-num">90</span>
    </div>
    <div class="et-info">
      <div class="et-label">Preostalo</div>
      <div class="et-q" id="et-q-label">Pitanje 1</div>
    </div>
    <div class="et-streak" id="et-streak">Niz: 0 ✓</div>
  </div>

  <div class="quiz-intro"><strong>// ispitni mod</strong> · 12 pitanja · svako s objašnjenjem · target: <strong>10/12</strong></div>

  <div class="qb" id="q1"><div class="qb-h"><div class="qb-meta">01 / 12 · klasifikacija · √</div><div class="qb-text">U koji najuži skup pripada <code>√49 − 5</code>?</div></div><div class="qb-opts"><div class="qo" onclick="qa(this,'q1',true)"><span class="ql">A</span>ℕ</div><div class="qo" onclick="qa(this,'q1',false)"><span class="ql">B</span>ℤ (ali ne ℕ)</div><div class="qo" onclick="qa(this,'q1',false)"><span class="ql">C</span>𝕀</div><div class="qo" onclick="qa(this,'q1',false)"><span class="ql">D</span>ℚ (ali ne ℤ)</div></div><div class="qe" id="q1e"></div></div>

  <div class="qb" id="q2"><div class="qb-h"><div class="qb-meta">02 / 12 · skupovi · moćnost</div><div class="qb-text">A = {1,2,3,4,5,6}, B = {4,5,6,7,8}. Koliko je |A∪B|?</div></div><div class="qb-opts"><div class="qo" onclick="qa(this,'q2',false)"><span class="ql">A</span>11</div><div class="qo" onclick="qa(this,'q2',true)"><span class="ql">B</span>8</div><div class="qo" onclick="qa(this,'q2',false)"><span class="ql">C</span>3</div><div class="qo" onclick="qa(this,'q2',false)"><span class="ql">D</span>9</div></div><div class="qe" id="q2e"></div></div>

  <div class="qb" id="q3"><div class="qb-h"><div class="qb-meta">03 / 12 · aps. vrijednost · zamka ∅</div><div class="qb-text">Koliko rješenja ima jednadžba <code>|5x − 2| = −3</code>?</div></div><div class="qb-opts"><div class="qo" onclick="qa(this,'q3',false)"><span class="ql">A</span>Dva rješenja</div><div class="qo" onclick="qa(this,'q3',false)"><span class="ql">B</span>Jedno: x = 1</div><div class="qo" onclick="qa(this,'q3',true)"><span class="ql">C</span>Nema rješenja — ∅</div><div class="qo" onclick="qa(this,'q3',false)"><span class="ql">D</span>Beskonačno mnogo</div></div><div class="qe" id="q3e"></div></div>

  <div class="qb" id="q4"><div class="qb-h"><div class="qb-meta">04 / 12 · intervali · ∞ pravilo</div><div class="qb-text">Koji zapis je <b>neispravan</b>?</div></div><div class="qb-opts"><div class="qo" onclick="qa(this,'q4',false)"><span class="ql">A</span>(−∞, 7⟩</div><div class="qo" onclick="qa(this,'q4',true)"><span class="ql">B</span>⟨−∞, 7⟩</div><div class="qo" onclick="qa(this,'q4',false)"><span class="ql">C</span>(3, +∞)</div><div class="qo" onclick="qa(this,'q4',false)"><span class="ql">D</span>⟨1, 9)</div></div><div class="qe" id="q4e"></div></div>

  <div class="qb" id="q5"><div class="qb-h"><div class="qb-meta">05 / 12 · aps. nejednadžba</div><div class="qb-text">Rješenje <code>|x − 3| &lt; 5</code> je:</div></div><div class="qb-opts"><div class="qo" onclick="qa(this,'q5',false)"><span class="ql">A</span>(−∞,−2) ∪ (8,+∞)</div><div class="qo" onclick="qa(this,'q5',false)"><span class="ql">B</span>⟨−2, 8⟩</div><div class="qo" onclick="qa(this,'q5',true)"><span class="ql">C</span>(−2, 8)</div><div class="qo" onclick="qa(this,'q5',false)"><span class="ql">D</span>(−8, 2)</div></div><div class="qe" id="q5e"></div></div>

  <div class="qb" id="q6"><div class="qb-h"><div class="qb-meta">06 / 12 · klasifikacija · periodični decimalni</div><div class="qb-text">U koji najuži skup pripada <code>0.4̄ (= 0.444...)</code>?</div></div><div class="qb-opts"><div class="qo" onclick="qa(this,'q6',false)"><span class="ql">A</span>𝕀 (iracionalni)</div><div class="qo" onclick="qa(this,'q6',true)"><span class="ql">B</span>ℚ (racionalni)</div><div class="qo" onclick="qa(this,'q6',false)"><span class="ql">C</span>ℤ (cijeli)</div><div class="qo" onclick="qa(this,'q6',false)"><span class="ql">D</span>ℕ (prirodni)</div></div><div class="qe" id="q6e"></div></div>

  <div class="qb" id="q7"><div class="qb-h"><div class="qb-meta">07 / 12 · aps. jednadžba · rješavanje</div><div class="qb-text">Skup rješenja <code>|3x + 6| = 9</code> je:</div></div><div class="qb-opts"><div class="qo" onclick="qa(this,'q7',false)"><span class="ql">A</span>{1}</div><div class="qo" onclick="qa(this,'q7',true)"><span class="ql">B</span>{1, −5}</div><div class="qo" onclick="qa(this,'q7',false)"><span class="ql">C</span>{−1, 5}</div><div class="qo" onclick="qa(this,'q7',false)"><span class="ql">D</span>{−5}</div></div><div class="qe" id="q7e"></div></div>

  <div class="qb" id="q8"><div class="qb-h"><div class="qb-meta">08 / 12 · intervali · prijevod</div><div class="qb-text">Koji interval odgovara uvjetu <code>−5 ≤ x &lt; 2</code>?</div></div><div class="qb-opts"><div class="qo" onclick="qa(this,'q8',false)"><span class="ql">A</span>⟨−5, 2⟩</div><div class="qo" onclick="qa(this,'q8',false)"><span class="ql">B</span>(−5, 2)</div><div class="qo" onclick="qa(this,'q8',true)"><span class="ql">C</span>⟨−5, 2)</div><div class="qo" onclick="qa(this,'q8',false)"><span class="ql">D</span>(−5, 2⟩</div></div><div class="qe" id="q8e"></div></div>

  <div class="qb" id="q9"><div class="qb-h"><div class="qb-meta">09 / 12 · aps. nejednadžba · unija</div><div class="qb-text">Rješenje <code>|2x| &gt; 6</code> je:</div></div><div class="qb-opts"><div class="qo" onclick="qa(this,'q9',false)"><span class="ql">A</span>(−3, 3)</div><div class="qo" onclick="qa(this,'q9',false)"><span class="ql">B</span>⟨−3, 3⟩</div><div class="qo" onclick="qa(this,'q9',true)"><span class="ql">C</span>(−∞, −3) ∪ (3, +∞)</div><div class="qo" onclick="qa(this,'q9',false)"><span class="ql">D</span>(−∞, 3)</div></div><div class="qe" id="q9e"></div></div>

  <div class="qb" id="q10"><div class="qb-h"><div class="qb-meta">10 / 12 · skupovi · razlika</div><div class="qb-text">A = {1,2,3,4}, B = {3,4,5,6}. Što je A\\B?</div></div><div class="qb-opts"><div class="qo" onclick="qa(this,'q10',false)"><span class="ql">A</span>{3, 4}</div><div class="qo" onclick="qa(this,'q10',true)"><span class="ql">B</span>{1, 2}</div><div class="qo" onclick="qa(this,'q10',false)"><span class="ql">C</span>{5, 6}</div><div class="qo" onclick="qa(this,'q10',false)"><span class="ql">D</span>{1, 2, 5, 6}</div></div><div class="qe" id="q10e"></div></div>

  <div class="qb" id="q11"><div class="qb-h"><div class="qb-meta">11 / 12 · A razina · domena s aps. vr.</div><div class="qb-text">Domena funkcije <code>f(x) = √(16 − x²)</code> je:</div></div><div class="qb-opts"><div class="qo" onclick="qa(this,'q11',false)"><span class="ql">A</span>(−4, 4)</div><div class="qo" onclick="qa(this,'q11',true)"><span class="ql">B</span>⟨−4, 4⟩</div><div class="qo" onclick="qa(this,'q11',false)"><span class="ql">C</span>(−∞,−4) ∪ (4,+∞)</div><div class="qo" onclick="qa(this,'q11',false)"><span class="ql">D</span>⟨0, 4⟩</div></div><div class="qe" id="q11e"></div></div>

  <div class="qb" id="q12"><div class="qb-h"><div class="qb-meta">12 / 12 · A razina · kombinirani</div><div class="qb-text">Domena <code>f(x) = √(4 − |x|)</code> je:</div></div><div class="qb-opts"><div class="qo" onclick="qa(this,'q12',false)"><span class="ql">A</span>(−4, 4)</div><div class="qo" onclick="qa(this,'q12',true)"><span class="ql">B</span>⟨−4, 4⟩</div><div class="qo" onclick="qa(this,'q12',false)"><span class="ql">C</span>⟨0, 4⟩</div><div class="qo" onclick="qa(this,'q12',false)"><span class="ql">D</span>(−∞,−4) ∪ (4,+∞)</div></div><div class="qe" id="q12e"></div></div>

  <div class="score-box" id="score">
    <div class="score-num" id="snum">0/12</div>
    <div class="score-lbl" id="slbl"></div>
  </div>

  <div class="cta">
    <div>
      <div class="cta-e">discere archive</div>
      <div class="cta-t">Vježbaj sa stvarnim zadacima mature</div>
      <div class="cta-s">Svi NCVVO zadaci 2010.–2026. uz detaljna objašnjenja.</div>
    </div>
    <a href="https://maturiraj.hr" class="cta-btn">Otvori Discere →</a>
  </div>

  <div class="matura-block">
    <div class="matura-hd">⭐ za ispit — ključne točke</div>
    <ul class="matura-list">
      <li class="mi"><div class="mi-dot"></div><span><b>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.</b> Ako je u ℕ, onda je i u svim većim skupovima.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>√n ∈ ℕ</b> samo za perfektne kvadrate. √4=2 ∈ ℕ. √5 ∈ 𝕀.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>|izraz| = negativan → ∅.</b> Ovo te štedi i daje bod bez računanja.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>&lt; → interval · &gt; → unija.</b> Bez oklijevanja.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>∞ nikad uglatom.</b> Automatski gubitak boda ako zaboraviš.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Provjera aps. jednadžbe je obavezna</b> — uvrsti rješenja natrag!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>|A∪B| = |A|+|B|−|A∩B|.</b> Presjek se oduzima uvijek.</span></li>
    </ul>
  </div>

  <div class="slbl" style="margin-top:28px">// bonus — popuni prazninu</div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · interval · prijevod</div><div class="fitb-sent">Uvjet x &gt; −5 kao interval: ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="upiši interval..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','(-5,+∞)','i1')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · aps. jednadžba</div><div class="fitb-sent">Manji korijen jednadžbe |x + 5| = 8 je x = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="x = ..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','-13','a1')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · moćnost skupova</div><div class="fitb-sent">|A| = 20, |B| = 13, |A∩B| = 7. Koliko je |A∪B| = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="broj..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','26','c1')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · klasifikacija · zamka</div><div class="fitb-sent">Je li <span class="frac"><span class="num">√100</span><span class="den">10</span></span> prirodan broj? Upiši: da ili ne</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="da ili ne" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','da','k1')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>

  <!-- sr3 — union formula worked example -->
  <div class="sr" id="sr3" style="margin-top:11px">
    <div class="sr-head">
      <div class="sr-title">Riješeni primjer — |A∪B| = |A|+|B|−|A∩B|</div>
      <div class="sr-task">U razredu 30 učenika: 18 svira klavir, 12 svira gitaru, 7 svira oboje. Koliko svira barem jedan instrument?</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr3s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Identificiraj tri podatka</div>
            <div class="sr-txt">|K| = 18 &nbsp;(samo klavir + oboje) &nbsp;|&nbsp; |G| = 12 &nbsp;(samo gitara + oboje) &nbsp;|&nbsp; |K∩G| = 7 &nbsp;(oboje)<br><em>Ključno: |K| i |G| već uključuju presjek!</em></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Primijeni formulu</div>
            <div class="sr-txt">|K∪G| = |K| + |G| − |K∩G| = 18 + 12 − 7 = <strong>23</strong><br>Bez oduzimanja presjeka brojali bismo 7 učenika dvaput!</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Provjeri Vennovim dijagramom</div>
            <div class="sr-txt">Samo klavir: 18−7 = 11 &nbsp;|&nbsp; Samo gitara: 12−7 = 5 &nbsp;|&nbsp; Oboje: 7<br>Ukupno: 11 + 5 + 7 = <strong>23 ✓</strong> &nbsp;— Ni jedan instrument: 30−23 = 7</div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr3',3)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr3',3)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr3p">0 / 3</span>
    </div>
  </div>

  <div class="nav-row">
    <span class="nb" onclick="sw(1)">← Uči</span>
    <button onclick="navigateChapter('p02')" class="nb primary">Sljedeće poglavlje →</button>
  </div>
</div>

</div>
</main>
</div>`;

const js = `function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}
/* ── MOBILE SIDEBAR ── */
function toggleSidebar(){
  var s=document.getElementById('sidebar');
  var o=document.getElementById('overlay');
  var open=s.classList.toggle('mobile-open');
  o.classList.toggle('show',open);
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('overlay').classList.remove('show');
}

/* ── TABS + PROGRESS ── */
var tabProgress=[6,45,85];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i)});
  var p=tabProgress[i];
  document.getElementById('prog-bar').style.width=p+'%';
  document.getElementById('prog-pct').textContent=p+'%';
  try{localStorage.setItem('maturiraj_p01_prog',p);}catch(e){}
  try{sessionStorage.setItem('p01_tab',i);}catch(e){}
}

/* ── VENN CANVAS ── */
var vennState='union';
var vennAnimFrame=null;
var vennTargets={
  union:{aAlpha:0.18,bAlpha:0.15,iAlpha:0.20,res:'A∪B = {1, 2, 3, 4, 5}  ·  |A∪B| = 5'},
  inter:{aAlpha:0,bAlpha:0,iAlpha:0.55,res:'A∩B = {3}  ·  |A∩B| = 1'},
  diffAB:{aAlpha:0.28,bAlpha:0,iAlpha:0,res:'A\\\\B = {1, 2}  ·  |A\\\\B| = 2'},
  diffBA:{aAlpha:0,bAlpha:0.28,iAlpha:0,res:'B\\\\A = {4, 5}  ·  |B\\\\A| = 2'}
};
var vennCurrent={aAlpha:0.18,bAlpha:0.15,iAlpha:0.20};
function vennDraw(aA,bA,iA){
  var c=document.getElementById('venn-canvas');
  if(!c)return;
  var ctx=c.getContext('2d');
  var W=c.width,H=c.height;
  ctx.clearRect(0,0,W,H);
  var cx1=W*0.42,cx2=W*0.58,cy=H*0.5,r=H*0.38;
  // fill A
  if(aA>0){
    ctx.save();
    ctx.beginPath();ctx.arc(cx1,cy,r,0,Math.PI*2);
    ctx.clip();
    ctx.beginPath();ctx.arc(cx1,cy,r,0,Math.PI*2);
    ctx.fillStyle='rgba(77,158,255,'+aA+')';ctx.fill();
    // subtract intersection from A-only fill
    if(iA<aA){
      ctx.globalCompositeOperation='destination-out';
      ctx.beginPath();ctx.arc(cx2,cy,r,0,Math.PI*2);
      ctx.fillStyle='rgba(0,0,0,'+(aA-iA)*0.5+')';ctx.fill();
      ctx.globalCompositeOperation='source-over';
    }
    ctx.restore();
  }
  // fill B
  if(bA>0){
    ctx.save();
    ctx.beginPath();ctx.arc(cx2,cy,r,0,Math.PI*2);
    ctx.clip();
    ctx.beginPath();ctx.arc(cx2,cy,r,0,Math.PI*2);
    ctx.fillStyle='rgba(34,211,238,'+bA+')';ctx.fill();
    if(iA<bA){
      ctx.globalCompositeOperation='destination-out';
      ctx.beginPath();ctx.arc(cx1,cy,r,0,Math.PI*2);
      ctx.fillStyle='rgba(0,0,0,'+(bA-iA)*0.5+')';ctx.fill();
      ctx.globalCompositeOperation='source-over';
    }
    ctx.restore();
  }
  // fill intersection
  if(iA>0){
    ctx.save();
    ctx.beginPath();ctx.arc(cx1,cy,r,0,Math.PI*2);
    ctx.clip();
    ctx.beginPath();ctx.arc(cx2,cy,r,0,Math.PI*2);
    ctx.fillStyle='rgba(129,140,248,'+iA+')';ctx.fill();
    ctx.restore();
  }
  // stroke circles
  ctx.beginPath();ctx.arc(cx1,cy,r,0,Math.PI*2);
  ctx.strokeStyle='rgba(77,158,255,0.5)';ctx.lineWidth=1.5;ctx.stroke();
  ctx.beginPath();ctx.arc(cx2,cy,r,0,Math.PI*2);
  ctx.strokeStyle='rgba(34,211,238,0.5)';ctx.lineWidth=1.5;ctx.stroke();
  // labels
  ctx.font='bold 16px JetBrains Mono,monospace';
  ctx.fillStyle='rgba(77,158,255,0.9)';ctx.fillText('A',cx1-r*0.7,cy+5);
  ctx.fillStyle='rgba(34,211,238,0.9)';ctx.fillText('B',cx2+r*0.5,cy+5);
  ctx.font='11px JetBrains Mono,monospace';
  ctx.fillStyle='rgba(228,237,255,0.65)';
  ctx.textAlign='center';
  ctx.fillText('1, 2',cx1-r*0.32,cy+4);
  ctx.fillText('3',(cx1+cx2)/2,cy+4);
  ctx.fillText('4, 5',cx2+r*0.32,cy+4);
  ctx.textAlign='left';
}
function vennAnimateTo(target){
  if(vennAnimFrame)cancelAnimationFrame(vennAnimFrame);
  var tgt=vennTargets[target];
  var startA=vennCurrent.aAlpha,startB=vennCurrent.bAlpha,startI=vennCurrent.iAlpha;
  var endA=tgt.aAlpha,endB=tgt.bAlpha,endI=tgt.iAlpha;
  var start=null,dur=320;
  function ease(t){return t<0.5?2*t*t:1-Math.pow(-2*t+2,2)/2;}
  function step(ts){
    if(!start)start=ts;
    var p=Math.min((ts-start)/dur,1);
    var e=ease(p);
    vennCurrent.aAlpha=startA+(endA-startA)*e;
    vennCurrent.bAlpha=startB+(endB-startB)*e;
    vennCurrent.iAlpha=startI+(endI-startI)*e;
    vennDraw(vennCurrent.aAlpha,vennCurrent.bAlpha,vennCurrent.iAlpha);
    if(p<1)vennAnimFrame=requestAnimationFrame(step);
    else{vennCurrent={aAlpha:endA,bAlpha:endB,iAlpha:endI};}
  }
  requestAnimationFrame(step);
}
function venn(op,btn){
  btn.parentElement.querySelectorAll('.vbtn').forEach(function(b){b.classList.remove('on')});
  btn.classList.add('on');
  vennState=op;
  var res=document.getElementById('vr');
  res.style.opacity='0';
  vennAnimateTo(op);
  setTimeout(function(){res.textContent=vennTargets[op].res;res.style.opacity='1';},160);
}
// Init canvas venn on load
window.addEventListener('load',function(){vennDraw(0.18,0.15,0.20);});

/* ── INTERVAL VIZ ── */
var ivData={
  closed:{x1:184,x2:340,f1:true,f2:true,lbl:'⟨−1, 3⟩ — zatvoren · −1 ≤ x ≤ 3'},
  open:  {x1:184,x2:340,f1:false,f2:false,lbl:'(−1, 3) — otvoren · −1 < x < 3'},
  halfL: {x1:184,x2:340,f1:true,f2:false,lbl:'⟨−1, 3) — poluzatvoren · −1 ≤ x < 3'},
  halfR: {x1:184,x2:340,f1:false,f2:true,lbl:'(−1, 3⟩ — poluzatvoren · −1 < x ≤ 3'},
  inf:   {x1:184,x2:null,f1:true,lbl:'⟨−1, +∞) — beskonačan · x ≥ −1'},
  ninf:  {x1:null,x2:340,f2:true,lbl:'(−∞, 3⟩ — beskonačan lijevo · x ≤ 3'}
};
function iviz(type,btn){
  btn.parentElement.querySelectorAll('.ibtn').forEach(function(b){b.classList.remove('on')});
  btn.classList.add('on');
  var g=document.getElementById('iviz-g');
  var lbl=document.getElementById('iviz-lbl');
  g.innerHTML='';
  var d=ivData[type];
  lbl.textContent=d.lbl;
  var ns='http://www.w3.org/2000/svg';
  function ln(x1,x2){var l=document.createElementNS(ns,'line');l.setAttribute('x1',x1);l.setAttribute('y1',40);l.setAttribute('x2',x2);l.setAttribute('y2',40);l.setAttribute('stroke','rgba(34,211,238,0.85)');l.setAttribute('stroke-width','4');g.appendChild(l);}
  function pt(x,f){var c=document.createElementNS(ns,'circle');c.setAttribute('cx',x);c.setAttribute('cy',40);c.setAttribute('r',7);c.setAttribute('fill',f?'rgba(34,211,238,0.9)':'#060910');c.setAttribute('stroke','rgba(34,211,238,0.9)');c.setAttribute('stroke-width','2');g.appendChild(c);}
  function arr(dir,x){var p=document.createElementNS(ns,'polygon');if(dir==='r')p.setAttribute('points',(x-6)+',36 '+(x+11)+',40 '+(x-6)+',44');else p.setAttribute('points',(x+6)+',36 '+(x-11)+',40 '+(x+6)+',44');p.setAttribute('fill','rgba(34,211,238,0.85)');g.appendChild(p);}
  if(type==='inf'){ln(d.x1,480);arr('r',480);pt(d.x1,d.f1);}
  else if(type==='ninf'){ln(80,d.x2);arr('l',80);pt(d.x2,d.f2);}
  else{ln(d.x1,d.x2);pt(d.x1,d.f1);pt(d.x2,d.f2);}
}
iviz('closed',document.querySelector('.ibtn.on'));

/* ── STEP REVEAL ── */
var stepSt={};
function nxtStep(id,tot){
  if(!stepSt[id])stepSt[id]=0;
  stepSt[id]=Math.min(stepSt[id]+1,tot);
  for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}
  document.getElementById(id+'p').textContent=stepSt[id]+' / '+tot;
}
function rstStep(id,tot){
  stepSt[id]=0;
  for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}
  document.getElementById(id+'p').textContent='0 / '+tot;
  // reset try-its inside
  document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){
    inp.value='';inp.className='sr-try-in';inp.disabled=false;
  });
  document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false});
  document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb'});
}

/* ── TRY-IT inside steps ── */
var tryExp={
  '2x−3=7':'2x=10 → x=5. Iz 2x−3=7 dodaj 3 na obje strane pa podijeli s 2.',
  'njednadzba':'Stroge nejednakosti &lt; → otvoreni interval. Dakle (−3, 5).'
};
function tryIt(iid,fid,ans,key){
  var inp=document.getElementById(iid);
  var fb=document.getElementById(fid);
  var v=inp.value.trim();
  if(!v)return;
  inp.disabled=true;
  var btn=inp.parentElement.querySelector('.sr-try-btn');
  if(btn)btn.disabled=true;
  var ok=v.replace(/\\s/g,'')===ans.replace(/\\s/g,'');
  inp.classList.add(ok?'ok':'fail');
  fb.className='sr-try-fb show '+(ok?'ok':'fail');
  fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. ')+tryExp[key];
}

/* ── CLASSIFIER ── */
var clfData=[
  {n:'√25',ans:'ℕ',exp:'√25=5 ∈ ℕ. Perfektan kvadrat → prirodan broj!'},
  {n:'−7',ans:'ℤ',exp:'−7 ∈ ℤ. Negativan → nije u ℕ. Najuži: ℤ.'},
  {n:'√3',ans:'𝕀',exp:'3 nije perfektan kvadrat → √3 ∈ 𝕀.'},
  {n:'2/3',ans:'ℚ',exp:'2/3 je razlomak → ℚ. Nije cijeli broj.'},
  {n:'√36−4',ans:'ℕ',exp:'√36=6, 6−4=2 ∈ ℕ. Uvijek izračunaj!'},
  {n:'0.3̄',ans:'ℚ',exp:'0.333...=1/3 → periodični decimal = racionalan = ℚ.'},
  {n:'π',ans:'𝕀',exp:'π je iracionalan — ne može se zapisati kao razlomak.'},
  {n:'−15/3',ans:'ℤ',exp:'−15/3=−5 ∈ ℤ. Uvijek skrati razlomak!'},
  {n:'√8',ans:'𝕀',exp:'8 nije perfektan kvadrat → √8=2√2 ∈ 𝕀.'},
  {n:'144',ans:'ℕ',exp:'144=12² ∈ ℕ. Pozitivan cijeli broj.'},
  {n:'√4/2',ans:'ℕ',exp:'√4=2, 2/2=1 ∈ ℕ. Svedi i provjeri!'},
  {n:'−√9',ans:'ℤ',exp:'√9=3, ali −3 ∈ ℤ (nije ℕ jer je negativan).'},
  {n:'22/7',ans:'ℚ',exp:'22/7 je razlomak → ℚ. (π ≠ 22/7 — to je samo aproksimacija!)'},
  {n:'√0',ans:'ℕ',exp:'√0=0. A 0? U HR kurikulumu 0 ∉ ℕ, ali 0 ∈ ℤ! Najuži: ℤ.'},
  {n:'e',ans:'𝕀',exp:'Eulerova konstanta e ∈ 𝕀 — iracionalan i transcendentan.'},
  {n:'−49/7',ans:'ℤ',exp:'−49/7=−7 ∈ ℤ. Negativan cijeli broj.'},
  {n:'√121−11',ans:'ℤ',exp:'√121=11, 11−11=0. A 0 ∉ ℕ, ali 0 ∈ ℤ!'},
  {n:'5²/5',ans:'ℕ',exp:'25/5=5 ∈ ℕ.'},
  {n:'1/3+2/3',ans:'ℕ',exp:'1/3+2/3=1 ∈ ℕ. Zbroji i provjeri!'},
  {n:'−√16',ans:'ℤ',exp:'−√16 = −4 ∈ ℤ. Predznak je ISPRED korijena, a 16>0 → korijen je definiran. Zamka A razine.'}
];
var clfIdx=0,clfDone=false,clfOk=0,clfTot=0;
function classify(el,ch){
  if(clfDone)return;
  clfDone=true;clfTot++;
  var d=clfData[clfIdx];
  var ok=ch===d.ans;
  if(ok)clfOk++;
  el.closest('.clf-sets').querySelectorAll('.clf-set').forEach(function(s){s.classList.add('dis')});
  el.classList.add(ok?'ok':'ng');
  if(!ok){el.closest('.clf-sets').querySelectorAll('.clf-set').forEach(function(s){if(s.textContent.trim()===d.ans)s.classList.add('ok');});}
  var fb=document.getElementById('clf-fb');
  fb.textContent=(ok?'✓ ':'✗ ')+d.exp;
  fb.className='clf-fb show '+(ok?'ok':'ng');
  document.getElementById('clf-sc').textContent=clfOk+' / '+clfTot+' točnih';
  document.getElementById('clf-next').style.display='inline-flex';
  if(clfIdx===clfData.length-1)document.getElementById('clf-restart').style.display='inline-flex';
  document.getElementById('clf-bar').style.width=((clfIdx+1)/clfData.length*100)+'%';
}
function nextCLF(){
  if(clfIdx<clfData.length-1){clfIdx++;clfDone=false;}
  document.getElementById('clf-num').textContent=clfData[clfIdx].n;
  document.getElementById('clf-fb').className='clf-fb';
  document.getElementById('clf-next').style.display='none';
  document.querySelectorAll('.clf-set').forEach(function(s){s.classList.remove('ok','ng','dis');});
}
function restartCLF(){
  clfIdx=0;clfDone=false;clfOk=0;clfTot=0;
  document.getElementById('clf-num').textContent=clfData[0].n;
  document.getElementById('clf-fb').className='clf-fb';
  document.getElementById('clf-next').style.display='none';
  document.getElementById('clf-restart').style.display='none';
  document.getElementById('clf-sc').textContent='0 / 0 točnih';
  document.getElementById('clf-bar').style.width='0%';
  document.querySelectorAll('.clf-set').forEach(function(s){s.classList.remove('ok','ng','dis');});
}
document.getElementById('clf-num').textContent=clfData[0].n;

/* ── MENTAL DRILL ── */
var drData=[
  {q:'√36 − 2',ans:true,exp:'√36=6, 6−2=4 ∈ ℕ ✓'},
  {q:'−3',ans:false,exp:'−3 ∈ ℤ, ali ∉ ℕ (negativan)'},
  {q:'√49',ans:true,exp:'√49=7 ∈ ℕ ✓'},
  {q:'0',ans:false,exp:'0 ∉ ℕ u HR kurikulumu (0 ∈ ℤ)'},
  {q:'2.5',ans:false,exp:'2.5 = 5/2 ∈ ℚ, ali ∉ ℕ'},
  {q:'100/4',ans:true,exp:'100/4=25 ∈ ℕ ✓'},
  {q:'√2',ans:false,exp:'√2 ∈ 𝕀, ∉ ℕ'},
  {q:'3² − 5',ans:true,exp:'9−5=4 ∈ ℕ ✓'},
  {q:'−√1',ans:false,exp:'−√1=−1 ∈ ℤ, ali ∉ ℕ'},
  {q:'√16/√4',ans:true,exp:'4/2=2 ∈ ℕ ✓'},
  {q:'π − 2',ans:false,exp:'π−2 ∈ 𝕀, ∉ ℕ'},
  {q:'1000',ans:true,exp:'1000 ∈ ℕ ✓'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){
  if(drDone)return;drDone=true;drTot++;
  var d=drData[drIdx];
  var ok=chosen===d.ans;
  if(ok)drOk++;
  el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis')});
  el.classList.add(ok?'ok':'ng');
  var fb=document.getElementById('dr-fb');
  fb.textContent=(ok?'✓ ':'✗ ')+d.exp;
  fb.className='drill-fb '+(ok?'ok':'ng');
  document.getElementById('dr-sc').textContent=drOk+' / '+drTot;
  document.getElementById('dr-next').style.display='inline-flex';
  document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';
}
function nextDrill(){
  drIdx=(drIdx+1)%drData.length;drDone=false;
  document.getElementById('dr-q').style.opacity='0';
  setTimeout(function(){
    document.getElementById('dr-q').textContent=drData[drIdx].q;
    document.getElementById('dr-q').style.opacity='1';
  },150);
  document.getElementById('dr-fb').className='drill-fb';
  document.getElementById('dr-next').style.display='none';
  document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});
}
document.getElementById('dr-q').textContent=drData[0].q;

/* ── BUG FINDER ── */
var bugDone={};
var bugExp={
  b1:'✓ Točno! |A∪B|=|A|+|B|−|A∩B|=3+4−2=5. Presjek {4,6} je prebrojan dva puta!',
  b2:'✓ Točno! √4=2 — perfektni kvadrat daje prirodan broj. Nije svaki korijen iracionalan!',
  b3:'✓ Točno! |x|>a daje UNIJU: (−∞,−3)∪(3,+∞). Interval (−3,3) bi bio rješenje |x|<3.',
  b4:'✓ Točno! +∞ nikad nema uglastu zagradu. Ispravno: ⟨0, +∞). √x≥0 pa je 0 uključen.'
};
function bug(el,id,ok,eid){
  if(bugDone[id])return;bugDone[id]=true;
  el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis')});
  el.classList.add(ok?'ok':'ng');
  if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){
    if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');
  });}
  var expl=document.getElementById(eid);
  expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];
  expl.className='bug-expl show '+(ok?'ok':'ng');
}

/* ── CHECKPOINT ── */
var cpState={1:false,2:false,3:false,4:false,5:false};
function toggleCP(n){
  cpState[n]=!cpState[n];
  var item=document.getElementById('cp'+n);
  var check=item.querySelector('.cp-check');
  check.classList.toggle('done',cpState[n]);
  item.classList.toggle('done-item',cpState[n]);
  var done=Object.values(cpState).filter(Boolean).length;
  document.getElementById('cp-txt').textContent=done+' / 5 potvrđeno';
  var ready=document.getElementById('cp-ready');
  ready.style.display=done===5?'inline':'none';
}

/* ── QUIZ ── */
var answered={},correct=0,total=12;
var E={
  q1:{c:'✓ Točno. √49=7, 7−5=2 ∈ ℕ. Perfektan kvadrat → izračunaj, pa klasificiraj.',w:'✗ Netočno. √49=7 (perfektan kvadrat!), pa 7−5=2 ∈ ℕ. Uvijek prvo izračunaj.'},
  q2:{c:'✓ Točno. |A∪B|=6+5−3=8. Presjek A∩B={4,5,6}, |A∩B|=3.',w:'✗ Netočno. Primijeni formulu: 6+5−|A∩B|. A∩B={4,5,6}, pa |A∪B|=6+5−3=8.'},
  q3:{c:'✓ Odmah ∅! Desna strana −3<0. Aps. vrijednost je uvijek ≥0 → nema rješenja.',w:'✗ Netočno. Provjeri desnu stranu: −3<0. |izraz|≥0 uvijek → nema rješenja → ∅.'},
  q4:{c:'✓ Točno. ⟨−∞, 7⟩ je neispravan — beskonačnost nikad ne može biti uključena!',w:'✗ Netočno. Neispravan je ⟨−∞, 7⟩ jer −∞ nikad nema uglastu zagradu. Uvijek (−∞,...).'},
  q5:{c:'✓ Točno. |x−3|<5 → −5<x−3<5 → −2<x<8 → (−2,8). Stroge nejednakosti → otvoreni!',w:'✗ Netočno. |x−3|<5 → dodaj 3 svuda: −2<x<8 → (−2,8). Stroge < → okrugla zagrada.'},
  q6:{c:'✓ Točno. 0.444... = 4/9 — periodični decimal → ℚ (racionalan).',w:'✗ Netočno. Svaki periodični decimal je racionalan (može se pisati kao razlomak). 0.4̄=4/9 ∈ ℚ.'},
  q7:{c:'✓ Točno. 3x+6=9→x=1 i 3x+6=−9→x=−5. Provjera: |9|=9✓ i |−9|=9✓.',w:'✗ Netočno. Dva slučaja: 3x+6=9→x=1 i 3x+6=−9→x=−5. Skup rješenja: {1,−5}.'},
  q8:{c:'✓ Točno. −5 je UKLJUČEN (≤ → uglatom), 2 je ISKLJUČEN (< → okruglom). Dakle ⟨−5,2).',w:'✗ Netočno. ≤ → uglatom (uključen). < → okruglom (isključen). Rezultat: ⟨−5, 2).'},
  q9:{c:'✓ Točno. |2x|>6 → |x|>3 → unija: (−∞,−3)∪(3,+∞). > → unija, dvije strane!',w:'✗ Netočno. |2x|>6 → |x|>3. > daje UNIJU: (−∞,−3)∪(3,+∞). Ne interval!'},
  q10:{c:'✓ Točno. A\\\\B = elementi A koji nisu u B. Iz A={1,2,3,4} micamo 3,4 (koji su i u B).',w:'✗ Netočno. A\\\\B = elementi koji su u A ali nisu u B. Micamo presjek {3,4} iz A → A\\\\B={1,2}.'},
  q11:{c:'✓ Točno. √(16−x²)≥0 → 16−x²≥0 → x²≤16 → |x|≤4 → ⟨−4,4⟩. ≤ → uglatom!',w:'✗ Netočno. Uvjet: 16−x²≥0 → x²≤16 → −4≤x≤4 → ⟨−4,4⟩. ≤ → zatvoreni interval.'},
  q12:{c:'✓ Točno. 4−|x|≥0 → |x|≤4 → −4≤x≤4 → ⟨−4,4⟩. Kombinacija aps. vr. + korijeni.',w:'✗ Netočno. Uvjet korijena: 4−|x|≥0 → |x|≤4 → ≤4 → interval ⟨−4,4⟩ (zatvoren!).'}
};
function qa(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;if(ok)correct++;
  el.closest('.qb-opts').querySelectorAll('.qo').forEach(function(o){o.classList.add('dis')});
  el.classList.add(ok?'correct':'wrong');
  var e=document.getElementById(qid+'e');
  e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  e.classList.add('show');
  if(Object.keys(answered).length===total){
    var s=document.getElementById('score');
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Savršen rezultat! Ovo poglavlje si potpuno svladao. 🎉':
      correct>=11?'Odlično! Jedno pitanje — pogledaj zašto.':
      correct>=9?'Solidno. Provjeri aps. vrijednost i intervale.':
      correct>=7?'Vrati se u Uči tab i prođi sporije kroz primjere.':
      'Prođi polako kroz sve step-by-step primjere u Uči tabu.';
    s.classList.add('show');
    tabProgress[2]=Math.round(70+correct/total*30);
  }
}

/* ── FITB ── */
var FExp={
  i1:'x>−5 → stroga nejednakost → okrugla, beskonačno → okrugla → (−5,+∞).',
  a1:'|x+5|=8 → x+5=8→x=3 i x+5=−8→x=−13. Manji: −13.',
  c1:'|A∪B|=20+13−7=26. Presjek se uvijek oduzima!',
  k1:'√100=10, 10/10=1 ∈ ℕ. Perfektan kvadrat i djeljivo → prirodan broj!'
};
function chkf(iid,fid,ans,key){
  var inp=document.getElementById(iid);
  var fb=document.getElementById(fid);
  var v=inp.value.trim();
  var btn=inp.parentElement.querySelector('.fitb-btn');
  if(!v)return;
  inp.disabled=true;btn.disabled=true;fb.classList.add('show');
  var norm=function(s){return s.replace(/\\s/g,'').toLowerCase()};
  var ok=norm(v)===norm(ans);
  inp.classList.add(ok?'ok':'fail');
  fb.classList.add(ok?'ok':'fail');
  fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];
}

/* ── EXAM MODE + TIMER ── */
var examMode='normal';
var timerInterval=null;
var timerSeconds=90;
var timerMax=90;
var currentQ=1;
var streak=0;
var missedTopics=[];

function setExamMode(mode,el){
  examMode=mode;
  document.querySelectorAll('.exam-mode-opt').forEach(function(o){o.classList.remove('active')});
  el.classList.add('active');
  if(mode!=='normal'){
    timerMax=mode==='timed'?90:30;
    document.getElementById('exam-timer').style.display='flex';
    startTimer();
  } else {
    document.getElementById('exam-timer').style.display='none';
    stopTimer();
  }
}

function drawTimerCanvas(secs,max){
  var c=document.getElementById('timer-canvas');
  if(!c)return;
  var ctx=c.getContext('2d');
  var W=64,H=64,r=28,cx=32,cy=32;
  ctx.clearRect(0,0,W,H);
  // bg track
  ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);
  ctx.strokeStyle='rgba(77,158,255,0.12)';ctx.lineWidth=4;ctx.stroke();
  // progress arc
  var pct=secs/max;
  var col=pct>0.4?'rgba(77,158,255,0.85)':pct>0.2?'rgba(245,158,11,0.9)':'rgba(248,113,113,0.9)';
  ctx.beginPath();
  ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+pct*Math.PI*2);
  ctx.strokeStyle=col;ctx.lineWidth=4;ctx.lineCap='round';ctx.stroke();
  // urgency glow
  if(pct<=0.2){
    ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);
    ctx.strokeStyle='rgba(248,113,113,0.15)';ctx.lineWidth=8;ctx.stroke();
  }
  // update number color
  var numEl=document.getElementById('et-num');
  if(numEl)numEl.textContent=secs;
  var wrap=document.getElementById('exam-timer');
  if(wrap){
    wrap.classList.toggle('warn',pct<=0.4&&pct>0.2);
    wrap.classList.toggle('urgent',pct<=0.2);
  }
}

function startTimer(){
  stopTimer();
  timerSeconds=timerMax;
  drawTimerCanvas(timerSeconds,timerMax);
  timerInterval=setInterval(function(){
    timerSeconds--;
    drawTimerCanvas(timerSeconds,timerMax);
    if(timerSeconds<=0){
      stopTimer();
      // auto-advance — mark as wrong if not answered
      var q='q'+currentQ;
      if(answered[q]===undefined){
        // flash timer red
        document.getElementById('exam-timer').style.background='rgba(248,113,113,0.08)';
        setTimeout(function(){
          if(document.getElementById('exam-timer'))
            document.getElementById('exam-timer').style.background='';
        },600);
      }
    }
  },1000);
}

function stopTimer(){
  if(timerInterval){clearInterval(timerInterval);timerInterval=null;}
}

function updateTimerLabel(){
  var lbl=document.getElementById('et-q-label');
  var str=document.getElementById('et-streak');
  if(lbl)lbl.textContent='Pitanje '+currentQ+' / 12';
  if(str)str.textContent='Niz: '+streak+' ✓';
}

/* ── ADAPTIVE FEEDBACK ENGINE ── */
var topicErrors={klasifikacija:0,skupovi:0,apsolutna:0,intervali:0};
var topicHints={
  klasifikacija:'Pogrešaka u klasifikaciji! Vrati se na Klasifikator u Uči tabu — fokusiraj se na perfektne kvadrate i periodične decimale.',
  skupovi:'Pogrešaka u skupovima! Provjeri formulu moćnosti: |A∪B| = |A|+|B|−|A∩B|.',
  apsolutna:'Pogrešaka s apsolutnom vrijednošću! Pamti: desna strana negativna → odmah ∅. < → interval, > → unija.',
  intervali:'Pogrešaka s intervalima! Provjeri tablicu intervala u Uči tabu. ∞ nikad uglatom!'
};
var qTopics={
  q1:'klasifikacija',q2:'skupovi',q3:'apsolutna',q4:'intervali',
  q5:'apsolutna',q6:'klasifikacija',q7:'apsolutna',q8:'intervali',
  q9:'apsolutna',q10:'skupovi',q11:'apsolutna',q12:'apsolutna'
};

function checkAdaptive(qid,ok){
  var topic=qTopics[qid];
  if(!ok&&topic){
    topicErrors[topic]=(topicErrors[topic]||0)+1;
    if(topicErrors[topic]>=2){
      showAdaptiveBanner(topic);
    }
  }
  if(ok)streak++; else streak=0;
  updateTimerLabel();
  // reset timer for next question
  if(examMode!=='normal'&&Object.keys(answered).length<total){
    currentQ=Object.keys(answered).length+1;
    timerSeconds=timerMax;
    drawTimerCanvas(timerSeconds,timerMax);
    updateTimerLabel();
  }
}

function showAdaptiveBanner(topic){
  var banner=document.getElementById('adaptive-banner');
  var title=document.getElementById('ab-title');
  var text=document.getElementById('ab-text');
  if(!banner||!title||!text)return;
  title.textContent='Prijedlog — pogrešaka u: '+topic;
  text.textContent=topicHints[topic];
  banner.style.display='flex';
  // scroll to it
  banner.scrollIntoView({behavior:'smooth',block:'nearest'});
}

/* ── OVERRIDE qa to hook into adaptive + timer ── */
var _origQa=qa;
qa=function(el,qid,ok){
  _origQa(el,qid,ok);
  checkAdaptive(qid,ok);
  if(examMode!=='normal')stopTimer();
};



/* ── ICP (Inline Check Points) ── */
var icpAnswered={};
var icpFeedback={
  icp1:{
    q1:{ok:'✓ Točno! A∪B={1,2,3,4}=4 elementa. Presjek {2,3} se broji jednom!',ng:'✗ Netočno. A∪B={1,2,3,4}→4 elementa. |A∪B|=|A|+|B|−|A∩B|=3+3−2=4.'},
    q2:{ok:'✓ Točno! A∩B={3,5} — elementi koji su u oba skupa.',ng:'✗ Netočno. Presjek = zajednički elementi. {1,3,5}∩{3,5,7}={3,5}.'},
    q3:{ok:'✓ Točno! Prazan skup je podskup svakog skupa: ∅⊆A uvijek!',ng:'✗ Netočno. ∅⊆A vrijedi za svaki A. ∅∈A nije uvijek točno (∅ nije element svakog skupa).'}
  },
  icp2:{
    q1:{ok:'✓ Točno! √49=7, 7−5=2∈ℕ. Ne treba se bojati korijena ako je rezultat cijeli!',ng:'✗ Netočno. √49=7 (ne iracionalan!). 7−5=2∈ℕ. Najuži skup je ℕ.'},
    q2:{ok:'✓ Točno! √5 nije racionalan broj — ne može se zapisati kao p/q.',ng:'✗ Netočno. 0.333...=1/3∈ℚ, −7/3∈ℚ, √36=6∈ℕ. Samo √5∈𝕀.'},
    q3:{ok:'✓ Točno! ℕ⊂ℤ⊂ℚ⊂ℝ — svaki prirodni je cijeli, svaki cijeli je racionalan...',ng:'✗ Netočno. Redoslijed: ℕ⊂ℤ⊂ℚ⊂ℝ. Prirodni ⊂ Cijeli ⊂ Racionalni ⊂ Realni.'}
  },
  icp3:{
    q1:{ok:'✓ Točno! |−8|=8, |3|=3. 8+3=11.',ng:'✗ Netočno. Apsolutna vrijednost je uvijek ≥0. |−8|=8, |3|=3. Zbroj=11.'},
    q2:{ok:'✓ Točno! |x−2|=5 → x−2=5 (x=7) ili x−2=−5 (x=−3). Uvijek 2 rješenja!',ng:'✗ Netočno. |x−2|=5 → x−2=±5 → x=7 ili x=−3. Ne zaboravi negativnu stranu!'},
    q3:{ok:'✓ Točno! |x|<4 ↔ −4<x<4. Opći oblik: |x|<a ↔ −a<x<a.',ng:'✗ Netočno. |x|<a ↔ −a<x<a. Dakle |x|<4 ↔ −4<x<4.'}
  }
};
function icp(icpId,qId,el,ok,fbId){
  var key=icpId+'_'+qId;
  if(icpAnswered[key])return;
  icpAnswered[key]=ok;
  el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis');});
  el.classList.add(ok?'ok':'ng');
  var fb=document.getElementById(fbId);
  var msgs=icpFeedback[icpId]&&icpFeedback[icpId][qId];
  fb.textContent=msgs?(ok?msgs.ok:msgs.ng):(ok?'✓ Točno!':'✗ Netočno.');
  fb.className='icp-fb show '+(ok?'ok':'ng');
  var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});
  if(allDone){
    var done=document.getElementById(icpId+'-done');
    if(done)done.classList.add('show');
    var retry=document.getElementById(icpId+'-retry');
    if(retry)retry.classList.add('show');
    var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;
    var sc=document.getElementById(icpId+'-sc');
    if(sc)sc.textContent=score+' / 3';
  }
}
function retryIcp(icpId){
  ['q1','q2','q3'].forEach(function(q){delete icpAnswered[icpId+'_'+q];});
  var done=document.getElementById(icpId+'-done');if(done)done.classList.remove('show');
  var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.remove('show');
  var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent='0 / 3';
  document.querySelectorAll('#'+icpId+' .icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});
  document.querySelectorAll('#'+icpId+' .icp-fb').forEach(function(f){f.className='icp-fb';f.textContent='';});
}


function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){try{var saved=localStorage.getItem('maturiraj_p01_prog');if(saved!==null){var pct=parseInt(saved);if(pct>0){var bar=document.getElementById('prog-bar');var lbl=document.getElementById('prog-pct');if(bar)bar.style.width=pct+'%';if(lbl)lbl.textContent=pct+'%';}}}catch(e){}})();
/* ── RESTORE TAB (mora biti na kraju) ── */
(function(){try{var s=sessionStorage.getItem('p01_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── CONTEXTUAL FROM-BANNER ── */
(function(){
  try{
    var params=new URLSearchParams(window.location.search);
    var from=params.get('from');
    if(!from)return;
    var names={"P01": "Skupovi i Brojevi", "P02": "Potencije i Korijeni", "P03": "Polinomi", "P04": "Jednadžbe", "P06": "Funkcija — pojam", "P07": "Kvadratna funkcija", "P08": "Eksponencijalna i Log.", "P09": "Trigonometrija", "P10": "Analitička geometrija", "P11": "Geometrija prostora", "P14": "Nizovi", "P15": "Kombinatorika", "P16": "Granice funkcija", "P17": "Derivacije", "P18": "Integrali", "P19": "Složeni zadaci", "P20": "Sistematizacija", "P21": "Vjerojatnost"};
    var name=names[from]||from;
    var banner=document.createElement('div');
    banner.className='ctx-banner';
    banner.id='ctx-banner';
    banner.innerHTML='<span>← Dolaziš iz <strong>'+from+' · '+name+'</strong></span>'
      +'<a href="Maturiraj_MatA_'+from+'_FINAL.html" style="color:var(--cyan);text-decoration:none;font-weight:700">← Vrati se</a>'
      +'<span class="ctx-banner-close" onclick="document.getElementById(\\'ctx-banner\\').style.display=\\'none\\'">×</span>';
    document.body.appendChild(banner);
    banner.style.display='flex';
    setTimeout(function(){if(banner)banner.style.opacity='0';setTimeout(function(){if(banner)banner.style.display='none';},400);},6000);
  }catch(e){}
})();`;

const meta = {
  id: 'P01',
  pidLower: 'p01',
  title: "Maturiraj.hr \u2014 Mat A \u00b7 P02 \u00b7 Potencije, Racionalni i Iracionalni Izrazi",
  subject: 'matematika-a',
  lsKey: 'maturiraj_p01_prog',
};

let _styleEl = null;
let _mounted = false;


function mount(container, options = {}) {
  if (_mounted) unmount(container);

  _styleEl = document.createElement('style');
  _styleEl.setAttribute('data-chapter', 'p01');
  _styleEl.textContent = css;
  document.head.appendChild(_styleEl);

  container.innerHTML = html;

  if (options.fromChapter) {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('from', options.fromChapter);
      window.history.replaceState(null, '', url.toString());
    } catch(e) {}
  }

  try {
    new Function(js)();
  } catch(e) {
    console.error('[P01] Script error:', e);
  }

  _mounted = true;
}

function unmount(container) {
  const existing = document.querySelector('style[data-chapter="p01"]');
  if (existing) existing.remove();
  _styleEl = null;
  if (container) container.innerHTML = '';
  _mounted = false;
}

function getProgress() {
  try { return parseInt(localStorage.getItem('maturiraj_p01_prog') || '0'); } catch(e) { return 0; }
}

function setProgress(pct) {
  try { localStorage.setItem('maturiraj_p01_prog', String(pct)); } catch(e) {}
}

// ── Complete page for MatChapterViewer (iframe srcDoc) ───────────────────────
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'*\');}}\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'*\')}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P01 \u00b7 Skupovi, Brojevi, Apsolutna Vrijednost</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';

export default { mount, unmount, getProgress, setProgress, meta, css, html };
export { mount, unmount, getProgress, setProgress, meta };