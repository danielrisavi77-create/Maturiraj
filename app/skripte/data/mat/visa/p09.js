/**
 * Maturiraj.hr — Mat A · P09
 * Maturiraj.hr — Mat A · P09 · Trigonometrija
 * ES6 module v3 — s kompletnim CSS-om, razlomcima, responsive, JS bugfix
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

/* ── NCVVO ANTI-PRIMJERI ── */
.anti-wrap{margin:24px 0}
.anti-hdr{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:2px;color:var(--red);text-transform:uppercase;padding:10px 16px;border:1px solid var(--bd-r);border-radius:var(--r2) var(--r2) 0 0;background:rgba(248,113,113,0.06);display:flex;align-items:center;gap:8px}
.anti-item{border:1px solid var(--bd);border-top:none;padding:18px 18px 16px;background:var(--sur)}
.anti-item:last-child{border-radius:0 0 var(--r2) var(--r2)}
.anti-wrong{font-size:13px;line-height:1.7;color:var(--t2);padding:10px 13px;background:rgba(248,113,113,0.07);border-left:3px solid var(--red);border-radius:0 var(--r1) var(--r1) 0;margin-bottom:8px}
.anti-why{font-family:var(--mono);font-size:11.5px;color:var(--amber);margin-bottom:8px;padding:0 4px}
.anti-right{font-size:13px;line-height:1.7;color:var(--t2);padding:10px 13px;background:rgba(52,211,153,0.07);border-left:3px solid var(--green);border-radius:0 var(--r1) var(--r1) 0}
.anti-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;padding:2px 7px;border-radius:3px;margin-bottom:6px;display:inline-block}
.anti-badge.ng{background:rgba(248,113,113,0.15);color:var(--red);border:1px solid var(--bd-r)}
.anti-badge.ok{background:rgba(52,211,153,0.15);color:var(--green);border:1px solid var(--bd-g)}

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
/* ── P04 SPECIFIC ── */
.eq-solver,.disc-wrap{background:var(--card);border:1px solid var(--bd-b);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.eq-s-head,.disc-head{padding:11px 17px;border-bottom:1px solid var(--bd)}
.eq-s-title,.disc-title{font-family:var(--mono);font-size:10.5px;color:var(--blue);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.eq-s-body,.disc-body{padding:16px 17px}
.eq-s-row,.disc-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:12px}
.eq-s-lbl,.disc-lbl{font-family:var(--mono);font-size:13px;color:var(--t2)}
.eq-s-in,.disc-in{font-family:var(--mono);font-size:15px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);padding:7px 10px;outline:none;width:65px;text-align:center;transition:border-color .15s;-webkit-appearance:none}
.eq-s-in:focus,.disc-in:focus{border-color:var(--blue)}
.eq-s-btn,.disc-btn{padding:7px 16px;border:1px solid var(--bd-b);background:var(--dim-b);color:var(--blue);border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;cursor:pointer;transition:all .15s}
.eq-s-btn:hover,.disc-btn:hover{background:var(--blue);color:#060910}
.eq-s-result,.disc-result{font-family:var(--mono);font-size:14px;color:var(--t2);text-align:center;min-height:24px;line-height:1.8}
.eq-s-result strong,.disc-result strong{color:var(--cyan);font-size:18px}

/* ── CONTEXTUAL FROM-BANNER ── */
.ctx-banner{display:none;position:fixed;bottom:20px;left:50%;transform:translateX(-50%);
  background:var(--ele);border:1px solid var(--bd-c);border-radius:var(--r3);
  padding:10px 18px 10px 14px;font-family:var(--mono);font-size:11px;color:var(--cyan);
  z-index:200;box-shadow:0 4px 20px rgba(0,0,0,0.4);display:flex;align-items:center;gap:10px;
  animation:ctxSlide .3s ease}
@keyframes ctxSlide{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
.ctx-banner-close{cursor:pointer;color:var(--t3);font-size:14px;line-height:1;margin-left:4px}
.ctx-banner-close:hover{color:var(--t1)}

.graph-wrap{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin-top:12px}
.graph-canvas{display:block;width:100%;height:260px}
.graph-controls{display:flex;align-items:center;gap:10px;padding:10px 14px;flex-wrap:wrap;border-top:1px solid var(--bd)}
.graph-ctrl-lbl{font-family:var(--mono);font-size:10px;color:var(--t3);min-width:32px}
.graph-ctrl-val{font-family:var(--mono);font-size:11px;color:var(--cyan);font-weight:700;min-width:48px}
input[type=range].graph-slider{-webkit-appearance:none;appearance:none;height:3px;border-radius:2px;background:var(--bdm);outline:none;flex:1;cursor:pointer;min-width:80px}
input[type=range].graph-slider::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--indigo);cursor:pointer;border:2px solid var(--bg)}
.graph-info{font-family:var(--mono);font-size:10.5px;color:var(--t2);padding:8px 14px;line-height:2;border-top:1px solid var(--bd);background:rgba(0,0,0,0.15)}


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
.si-r{background:var(--dim-r);color:var(--red)}
.eq-s-result{font-family:var(--mono);font-size:13px;color:var(--cyan);padding:8px 12px;background:var(--inp);border:1px solid var(--bd);border-radius:var(--r2);margin-top:4px;min-height:28px;line-height:1.6}`;
const _bodyHTML = `<div class="shell">

<div class="sb-hamburger" id="hamburger" onclick="toggleSidebar()"><span></span><span></span><span></span></div>
<div class="sb-overlay" id="overlay" onclick="closeSidebar()"></div>

<nav class="sidebar" id="sidebar">
  <div class="sb-brand"><div class="sb-logo"><svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="#060910" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><div class="sb-name">Maturiraj.hr</div><div class="sb-sub">MAT A razina</div></div></div>
  <div class="sb-prog-wrap"><div class="sb-prog-label"><span>napredak</span><span id="prog-pct">0%</span></div><div class="sb-prog-track"><div class="sb-prog-bar" id="prog-bar" style="width:0%"></div></div></div>
  <button class="sb-item" onclick="backToList()" style="padding:7px 14px;border:none;border-bottom:1px solid var(--bd);font-size:11px;color:var(--t3);font-family:var(--mono);letter-spacing:.3px;background:transparent;cursor:pointer;width:100%;text-align:left">← Sva poglavlja</button>
  <div class="sb-lbl">// Uvod</div>
  <button class="sb-item" onclick="navigateChapter('p00a')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>00A · Kako koristiti skripte</button>
  <button class="sb-item" onclick="navigateChapter('p00b')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>00B · Što te čeka na Maturi</button>
  <div class="sb-lbl">// Temelji</div>
  <button class="sb-item" onclick="navigateChapter('p01')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>01 · Skupovi, Brojevi, |x|</button>
  <button class="sb-item" onclick="navigateChapter('p02')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>02 · Potencije i korijeni</button>
  <button class="sb-item" onclick="navigateChapter('p03')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>03 · Polinomi i izrazi</button>
  <button class="sb-item" onclick="navigateChapter('p04')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>04 · Jednadžbe i nejednadžbe</button>
  <button class="sb-item" onclick="navigateChapter('p05')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>05 · Kompleksni brojevi</button>
  <div class="sb-lbl">// Funkcije</div>
  <button class="sb-item" onclick="navigateChapter('p06')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>06 · Funkcija — temelj mature</button>
  <button class="sb-item" onclick="navigateChapter('p07')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>07 · Linearna i kvadratna f.</button>
  <button class="sb-item" onclick="navigateChapter('p08')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>08 · Eksponencijalna i log.</button>
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>09 · Trigonometrija</button>
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

<main class="main"><div class="content-wrap">
<div class="bc"><span>← poglavlja</span><span class="bc-sep">/</span><span>a-razina</span><span class="bc-sep">/</span><span class="bc-cur">trigonometrija-jednadžbe-identiteti</span></div>
<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>
<!-- L0 -->
<div class="layer on" id="l0">
  <div class="hero"><div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 09 od 21 · A razina · funkcije</div>
    <h1 class="hero-title">Trigonometrija —<br><span>Sin, Cos, Tan i Kružnica</span></h1>
    <p class="hero-sub">Periodične funkcije koje opisuju valove, kutove i kružno gibanje — temelj fizike, inženjerstva i analize</p>
    <div class="hero-meta"><span class="hchip b">4 koncepta</span><span class="hchip a">⭐ Visoka maturalna frekvencija</span><span class="hchip c">~45 min</span></div>
    <div class="pt"><div class="pb" style="width:47%"></div></div>
  </div>
  <div class="tags">
    <span class="pill p-b">Jedinična kružnica</span><span class="pill p-c">sin, cos, tan, cot</span>
    <span class="pill p-i">Osnovni identiteti</span><span class="pill p-a">Adicijske formule</span>
    <span class="pill p-v">Trig. jednadžbe</span><span class="pill p-r">Periodičnost i grafovi</span>
  </div>
  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int"><div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">Trigonometrija je jedino poglavlje gdje morate znati <em>egzaktne vrijednosti napamet</em> — sin(30°), cos(45°), tan(60°)... NCVVO ne da kalkulator za ove vrijednosti.<br><br>Jednadžbe sin(x)=a i cos(x)=a imaju beskonačno rješenja — morate znati kako ih zapisati kompaktno. Adicijske formule su potrebne za svođenje složenih izraza.<br><br><strong>Bez jedinične kružnice nema ničega — ona je "cheat sheet" za sve vrijednosti i simetrije.</strong></div>
  </div>
  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">sin α</div><div class="sc-name">Sinus</div><div class="sc-desc">y-koordinata na jediničnoj kružnici. sin²α+cos²α=1. Period 2π.</div></div>
    <div class="sc"><div class="sc-ico si-c">cos α</div><div class="sc-name">Kosinus</div><div class="sc-desc">x-koordinata na jediničnoj kružnici. Parna funkcija: cos(−α)=cos(α).</div></div>
    <div class="sc"><div class="sc-ico si-i">tan α</div><div class="sc-name">Tangens</div><div class="sc-desc">sin/cos. Nije definiran za cos=0 (α=π/2+kπ). Period π.</div></div>
    <div class="sc"><div class="sc-ico si-a">30-45-60</div><div class="sc-name">Egzaktne vrijednosti</div><div class="sc-desc">Napamet: sin30°=1/2, sin45°=√<span class="frac"><span class="num">2</span><span class="den">2</span></span>, sin60°=√<span class="frac"><span class="num">3</span><span class="den">2</span></span>. Cos ide obratno!</div></div>
    <div class="sc"><div class="sc-ico si-v">sin x=a</div><div class="sc-name">Trig. jednadžbe</div><div class="sc-desc">Opće rješenje: x=arcsin(a)+2kπ ili x=π−arcsin(a)+2kπ (k∈ℤ).</div></div>
    <div class="sc"><div class="sc-ico si-r">sin(α+β)</div><div class="sc-name">Adicijske formule</div><div class="sc-desc">sin(α±β)=sinα·cosβ±cosα·sinβ. Za dvostruke kutove i svođenje.</div></div>
  </div>
  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">Jedinična kružnica</div><div class="cv">Kružnica r=1 s ishodištem u (0,0). Točka na kutu α je (cos α, sin α).</div></div>
    <div class="cr"><div class="ck b">Pitagorin identitet</div><div class="cv">sin²α+cos²α=1 — uvijek vrijedi! Dijeli s cos²: tan²α+1=1/cos²α.</div></div>
    <div class="cr"><div class="ck c">Egzaktne vrijednosti</div><div class="cv">0°:(1,0) · 30°:(<span class="frac"><span class="num">√3</span><span class="den">2</span></span>,<span class="frac"><span class="num">1</span><span class="den">2</span></span>) · 45°:(<span class="frac"><span class="num">√2</span><span class="den">2</span></span>,<span class="frac"><span class="num">√2</span><span class="den">2</span></span>) · 60°:(<span class="frac"><span class="num">1</span><span class="den">2</span></span>,<span class="frac"><span class="num">√3</span><span class="den">2</span></span>) · 90°:(0,1)</div></div>
    <div class="cr"><div class="ck c">Kvadranti i predznaci</div><div class="cv">I: sin+,cos+ · II: sin+,cos− · III: sin−,cos− · IV: sin−,cos+</div></div>
    <div class="cr"><div class="ck i">Adicijske formule</div><div class="cv">sin(α±β)=sinα·cosβ±cosα·sinβ<br>cos(α±β)=cosα·cosβ∓sinα·sinβ</div></div>
    <div class="cr"><div class="ck i">Dvostruki kut</div><div class="cv">sin(2α)=2sinα·cosα · cos(2α)=cos²α−sin²α=1−2sin²α=2cos²α−1</div></div>
    <div class="cr"><div class="ck a">sin x=a rješenje</div><div class="cv">x=arcsin(a)+2kπ ili x=π−arcsin(a)+2kπ (k∈ℤ, |a|≤1)</div></div>
    <div class="cr"><div class="ck r">Zamka</div><div class="cv">sin(α+β) ≠ sinα+sinβ! Adicijska formula se mora primijeniti.</div></div>
  </div>
  <div class="nav-row"><button onclick="navigateChapter('p08')" class="nb">← P08 · Eksp. i log.</button><span class="nb primary" onclick="sw(1)">Uči detaljno →</span></div>
</div>
<!-- L1 -->
<div class="layer" id="l1">
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · JEDINIČNA KRUŽNICA I EGZAKTNE VRIJEDNOSTI</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
  <div class="box-int"><div class="box-int-lbl">INTUITIVNO — kružnica kao "trig. tablica"</div>
    <div class="box-int-txt">Zamislite kazaljku sata koja se vrti suprotno od kazaljke sata, duljine 1. Kut α je mjera rotacije od pozitivne x-osi.<br><br>Gdje god kazaljka stane, njezin <em>x-koordinata je cos α</em>, a <em>y-koordinata je sin α</em>. To je sve što trebate znati!<br><br><strong>Egzaktne vrijednosti nisu za pamćenje — nacrtajte kružnicu i pročitajte koordinate. 30-45-60 dolaze iz jednakostraničnog i jednakokračnog pravokutnog trokuta.</strong></div>
  </div>
  <div class="box-for"><span class="box-for-lbl">EGZAKTNE VRIJEDNOSTI — napamet!</span>
    <span class="val">sin 0°=0 · sin 30°=1/2 · sin 45°=√<span class="frac"><span class="num">2</span><span class="den">2</span></span> · sin 60°=√<span class="frac"><span class="num">3</span><span class="den">2</span></span> · sin 90°=1</span><br>
    <span class="val">cos 0°=1 · cos 30°=√<span class="frac"><span class="num">3</span><span class="den">2</span></span> · cos 45°=√<span class="frac"><span class="num">2</span><span class="den">2</span></span> · cos 60°=1/2 · cos 90°=0</span><br>
    <span class="val">tan 30°=√<span class="frac"><span class="num">3</span><span class="den">3</span></span> · tan 45°=1 · tan 60°=√3</span><br>
    <span class="cmt">Trik: sin raste od 0 do 1 (0→30→45→60→90), cos je zrcalo sinu!</span>
  </div>
  <div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Kružnica Explorer — klikni kut</span></div>
    <div class="disc-body">
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px">
        <button class="disc-btn on" id="uc-b0" onclick="setUC(0,this)">0°</button>
        <button class="disc-btn" id="uc-b30" onclick="setUC(30,this)">30°</button>
        <button class="disc-btn" id="uc-b45" onclick="setUC(45,this)">45°</button>
        <button class="disc-btn" id="uc-b60" onclick="setUC(60,this)">60°</button>
        <button class="disc-btn" id="uc-b90" onclick="setUC(90,this)">90°</button>
        <button class="disc-btn" id="uc-b120" onclick="setUC(120,this)">120°</button>
        <button class="disc-btn" id="uc-b135" onclick="setUC(135,this)">135°</button>
        <button class="disc-btn" id="uc-b150" onclick="setUC(150,this)">150°</button>
        <button class="disc-btn" id="uc-b180" onclick="setUC(180,this)">180°</button>
        <button class="disc-btn" id="uc-b270" onclick="setUC(270,this)">270°</button>
      </div>
      <div class="eq-s-result" id="uc-angle" style="font-size:16px;font-weight:700;color:var(--cyan);margin-bottom:8px">α = 0° = 0 rad</div>
      <div id="uc-vals" style="font-family:var(--mono);font-size:13px;color:var(--t2);line-height:2.2"></div>
    </div>
  </div>
  

<!-- JEDINIČNA KRUŽNICA GRAF -->
<div class="graph-wrap" style="margin-top:12px">
  <canvas class="graph-canvas" id="uc-canvas" width="600" height="260"></canvas>
  <div class="graph-controls">
    <span class="graph-ctrl-lbl">kut α</span>
    <input type="range" class="graph-slider" id="uc-slider" min="0" max="360" step="1" value="45" oninput="syncUCSlider()">
    <span class="graph-ctrl-val" id="uc-sl-val">45°</span>
  </div>
  <div class="graph-info" id="uc-graph-info">α=45° · sin=√<span class="frac"><span class="num">2</span><span class="den">2</span></span>≈0.707 · cos=√<span class="frac"><span class="num">2</span><span class="den">2</span></span>≈0.707 · tan=1</div>
</div>
<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — kvadranti i predznaci</div>
    <div class="box-men-txt">Pamti: <strong>"SVi SOvi Telefoniraju Crno"</strong> — čita se od I. do IV. kvadranta:<br>I: <b>SV</b>e pozitivno · II: samo <b>S</b>in pozitivan · III: samo <b>T</b>an pozitivan · IV: samo <b>C</b>os pozitivan<br>Za kutove &gt;90°: sin(180°−α)=sinα · cos(180°−α)=−cosα</div>
  </div>
  <div class="sr" id="sr1">
    <div class="sr-head"><div class="sr-title">Egzaktne vrijednosti — korak po korak</div><div class="sr-task">Izračunaj sin(150°) i cos(210°) bez kalkulatora</div></div>
    <div class="sr-steps">
      <div class="sr-step" id="sr1s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">sin(150°) — II. kvadrant</div><div class="sr-txt">150°=180°−30° → II. kv., sin pozitivan<br>sin(150°)=sin(30°)=<strong>1/2</strong></div></div></div></div>
      <div class="sr-step" id="sr1s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">cos(210°) — III. kvadrant</div><div class="sr-txt">210°=180°+30° → III. kv., cos negativan<br>cos(210°)=−cos(30°)=<strong>−√3/2</strong></div></div></div></div>
      <div class="sr-step" id="sr1s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Provjera i prečac</div><div class="sr-txt">Nacrtaj kružnicu, označi kut, procijeni predznak iz kvadranta.
        <div class="sr-tryit"><div class="sr-try-lbl">↳ Izračunaj tan(135°)</div>
          <div class="sr-try-row"><input class="sr-try-in" id="try1" type="text" placeholder="tan(135°)=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try1','try1-fb','-1','tan1')">Provjeri</button></div>
          <div class="sr-try-fb" id="try1-fb"></div></div></div></div></div></div>
    </div>
    <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr1',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr1',3)">↺ Resetiraj</button><span class="sr-prog" id="sr1p">0 / 3</span></div>
  </div>
  <div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — egzaktne vrijednosti</div><div class="bug-body">
    <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa sin(120°):</p>
    <div class="bug-task">sin(120°)=sin(60°+60°)=sin(60°)+sin(60°)=<span class="wrong">√3</span></div>
    <div class="bug-opts">
      <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno, sin se raspodjeljuje po zbrajanju</div>
      <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška: sin(α+β)≠sinα+sinβ. sin(120°)=sin(180°−60°)=sin(60°)=√3/2</div>
      <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška: sin(120°)=−√3/2</div>
      <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Greška: sin(120°)=1/2</div>
    </div><div class="bug-expl" id="b1e"></div>
  </div></div>
  <div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — kružnica</div><ul class="b20-list">
    <li class="b20-item"><div class="b20-dot"></div>sin=y-koordinata · cos=x-koordinata na jediničnoj kružnici</li>
    <li class="b20-item"><div class="b20-dot"></div>sin raste 0→<span class="frac"><span class="num">1</span><span class="den">2</span></span>→<span class="frac"><span class="num">√2</span><span class="den">2</span></span>→<span class="frac"><span class="num">√3</span><span class="den">2</span></span>→1 za 0°→30°→45°→60°→90°</li>
    <li class="b20-item"><div class="b20-dot"></div>Kvadranti: "SVi SOvi Telefoniraju Crno" — I(sve+), II(sin+), III(tan+), IV(cos+)</li>
  </ul></div>

  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — egzaktne vrijednosti</div></div>
    <div class="combo-body">
      <div class="combo-task">Nađi sin(5π/6) i cos(5π/6) bez kalkulatora</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Prepoznaj kut: 5π/6 = 150° → drugi kvadrant (sin+, cos−)</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Referentni kut: 180°−150° = 30° → sin(30°) = 1/2, cos(30°) = √3/2</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Primijeni predznak: sin(150°) = <strong>+1/2</strong>, cos(150°) = <strong>−√3/2</strong></div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Maturalni obrazac: referentni kut + predznak prema kvadrantu (SSCT pravilo)</div></div>
      </div>
      <div class="combo-ans">sin(5π/6) = 1/2 · cos(5π/6) = −√3/2 &nbsp;·&nbsp; Kvadrant → predznak; referentni kut → vrijednost</div>
    </div>
  </div>

  <div class="inline-cp" id="icp1">
    <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — kružnica</span><span class="icp-score" id="icp1-sc">0 / 3</span></div>
    <div class="icp-body">
      <div class="icp-q" id="icp1q1"><div class="icp-q-text">cos(60°) = ?</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">√3/2</div>
        <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">1/2</div>
        <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">√2/2</div>
        <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">1</div>
      </div><div class="icp-fb" id="icp1q1fb"></div></div>
      <div class="icp-q" id="icp1q2"><div class="icp-q-text">sin(330°) = ? (IV. kvadrant)</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">1/2</div>
        <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">√3/2</div>
        <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">−1/2</div>
        <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">−√3/2</div>
      </div><div class="icp-fb" id="icp1q2fb"></div></div>
      <div class="icp-q" id="icp1q3"><div class="icp-q-text">tan(45°) = ?</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">√3</div>
        <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">√3/2</div>
        <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">1</div>
        <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">1/2</div>
      </div><div class="icp-fb" id="icp1q3fb"></div></div>
      <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na identitete →</div>
      <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
    </div>
  </div>
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · TRIGONOMETRIJSKI IDENTITETI I FORMULE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
  <div class="box-int"><div class="box-int-lbl">INTUITIVNO — identiteti kao "prečaci"</div>
    <div class="box-int-txt">Trigonometrijski identiteti su jednakosti koje vrijede za <em>svaki kut</em>. Koristimo ih za pojednostavljivanje izraza, dokazivanje i rješavanje jednadžbi.<br><br>Pitagorin identitet sin²α+cos²α=1 je temelj svega — iz njega slijede svi ostali.<br><br><strong>Adicijske formule su "generator" svih ostalih: dvostruki kut, polovični kut — sve dolazi odavde.</strong></div>
  </div>
  <div class="box-for"><span class="box-for-lbl">TEMELJNI IDENTITETI</span>
    <span class="val">sin²α+cos²α=1</span> <span class="cmt">— Pitagorin (uvijek!)</span><br>
    <span class="val">tanα=sinα/cosα</span> · <span class="val">cotα=cosα/sinα</span> · <span class="val">tanα·cotα=1</span><br>
    <span class="val">sin(−α)=−sinα</span> <span class="cmt">— neparna</span> · <span class="val">cos(−α)=cosα</span> <span class="cmt">— parna</span><br>
    <span class="val">sin(<span class="frac"><span class="num">π</span><span class="den">2</span></span>−α)=cosα</span> · <span class="val">cos(<span class="frac"><span class="num">π</span><span class="den">2</span></span>−α)=sinα</span> <span class="cmt">— komplementarni kutovi</span>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">PERIODIČNOST I GRAFOVI — ključna svojstva</span>
    <span class="val">sin x</span>: period <span class="val">2π</span> · D=ℝ · Sv=[−1,1] · nulovi: x=kπ · maksimum 1 na <span class="frac"><span class="num">π</span><span class="den">2</span></span>+2kπ<br>
    <span class="val">cos x</span>: period <span class="val">2π</span> · D=ℝ · Sv=[−1,1] · nulovi: x=π/2+kπ · maksimum 1 na 2kπ<br>
    <span class="val">tan x</span>: period <span class="val">π</span> · D=ℝ\\{<span class="frac"><span class="num">π</span><span class="den">2</span></span>+kπ} · Sv=ℝ · nulovi: x=kπ<br>
    <span class="val">cot x</span>: period <span class="val">π</span> · D=ℝ\\{kπ} · Sv=ℝ · nulovi: x=π/2+kπ<br>
    <span class="cmt">Transformacije: a·sin(bx+c)+d → amplituda |a|, period 2π/|b|, pomak −<span class="frac"><span class="num">c</span><span class="den">b</span></span>, vertikalni pomak d</span>
  </div>
  <div class="box-for"><span class="box-for-lbl">ADICIJSKE FORMULE I DVOSTRUKI KUT</span>
    <span class="val">sin(α±β)=sinα·cosβ±cosα·sinβ</span><br>
    <span class="val">cos(α±β)=cosα·cosβ∓sinα·sinβ</span><br>
    <span class="val">sin(2α)=2·sinα·cosα</span><br>
    <span class="val">cos(2α)=cos²α−sin²α=1−2sin²α=2cos²α−1</span><br>
    <span class="cmt">Iz cos(2α): sin²α=(1−cos2α)/2 · cos²α=(1+cos2α)/2</span>
  </div>
  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c"><div class="cmp-h b">Sinus — period 2π, neparan</div><div class="cmp-body">
      <div class="cmp-row">sin(−α)=<b>−sinα</b></div>
      <div class="cmp-row">sin(π−α)=sinα · sin(π+α)=−sinα</div>
      <div class="cmp-row">Max=1 na <span class="frac"><span class="num">π</span><span class="den">2</span></span> · Min=−1 na 3π/2</div>
      <div class="cmp-row">Nulovi: x=kπ</div>
    </div></div>
    <div class="cmp-c"><div class="cmp-h c">Kosinus — period 2π, paran</div><div class="cmp-body">
      <div class="cmp-row">cos(−α)=<b>cosα</b></div>
      <div class="cmp-row">cos(π−α)=−cosα · cos(π+α)=−cosα</div>
      <div class="cmp-row">Max=1 na 2kπ · Min=−1 na π+2kπ</div>
      <div class="cmp-row">Nulovi: x=π/2+kπ</div>
    </div></div>
  </div>
  <div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — Pitagorin identitet kao alat</div>
    <div class="box-men-txt">sin²α+cos²α=1 — ako znaš sin, možeš naći cos (i obratno)!<br>Ako sinα=3/5, onda cos²α=1−<span class="frac"><span class="num">9</span><span class="den">25</span></span>=16/25 → cosα=±<span class="frac"><span class="num">4</span><span class="den">5</span></span> (predznak iz kvadranta).<br><strong>Podjeli s cos²α: tan²α+1=sec²α. Podjeli s sin²α: 1+cot²α=csc²α.</strong></div>
  </div>
  <div class="sr" id="sr2">
    <div class="sr-head"><div class="sr-title">Adicijska formula — korak po korak</div><div class="sr-task">Izračunaj sin(75°) egzaktno</div></div>
    <div class="sr-steps">
      <div class="sr-step" id="sr2s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Rastavni na poznate kutove</div><div class="sr-txt">75°=45°+30°</div></div></div></div>
      <div class="sr-step" id="sr2s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Primijeni adicijsku formulu</div><div class="sr-txt">sin(45°+30°)=sin45°·cos30°+cos45°·sin30°<br>=(<span class="frac"><span class="num">√2</span><span class="den">2</span></span>)·(<span class="frac"><span class="num">√3</span><span class="den">2</span></span>)+(<span class="frac"><span class="num">√2</span><span class="den">2</span></span>)·(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)</div></div></div></div>
      <div class="sr-step" id="sr2s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Izračunaj</div><div class="sr-txt">=√<span class="frac"><span class="num">6</span><span class="den">4</span></span>+<span class="frac"><span class="num">√2</span><span class="den">4</span></span>=<strong>(√6+√2)/4</strong>
        <div class="sr-tryit"><div class="sr-try-lbl">↳ Izračunaj cos(75°)=cos(45°+30°)</div>
          <div class="sr-try-row"><input class="sr-try-in" id="try2" type="text" placeholder="=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try2','try2-fb','(√6-√2)/4','add1')">Provjeri</button></div>
          <div class="sr-try-fb" id="try2-fb"></div></div></div></div></div></div>
    </div>
    <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr2',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr2',3)">↺ Resetiraj</button><span class="sr-prog" id="sr2p">0 / 3</span></div>
  </div>
  <div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — identiteti</div><div class="bug-body">
    <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik dokazuje: sin²α=1−cos²α pa zaključuje:</p>
    <div class="bug-task">sinα=<span class="wrong">√(1−cos²α)</span> (uvijek)</div>
    <div class="bug-opts">
      <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno, sinα je uvijek pozitivan</div>
      <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška: sinα=±√(1−cos²α) — predznak ovisi o kvadrantu!</div>
      <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Greška: treba biti sinα=1−cosα</div>
      <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Točno, √ uvijek daje pozitivan rezultat</div>
    </div><div class="bug-expl" id="b2e"></div>
  </div></div>
  <div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — identiteti</div><ul class="b20-list">
    <li class="b20-item"><div class="b20-dot"></div>sin²+cos²=1 — temelj svega! Iz njega sve slijedi.</li>
    <li class="b20-item"><div class="b20-dot"></div>sin(α±β)=sinαcosβ±cosαsinβ — napameti! Nikad raspoređivanje!</li>
    <li class="b20-item"><div class="b20-dot"></div>sin(2α)=2sinαcosα · cos(2α)=cos²α−sin²α</li>
  </ul></div>

  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — trig identitet u primjени</div></div>
    <div class="combo-body">
      <div class="combo-task">sin²x + cos²x = 1. Nađi sin x ako cos x = 3/5 i x ∈ I. kvadrant</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Iz temeljnog identiteta: sin²x = 1 − cos²x = 1 − 9/25 = <strong>16/25</strong></div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">sin x = ±4/5, ali x ∈ I. kvadrant → sin x &gt; 0 → <strong>sin x = 4/5</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Bonus: tan x = sin x / cos x = (4/5)/(3/5) = <strong>4/3</strong></div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Maturalni obrazac: uvijek navedi kvadrant → određuje predznak!</div></div>
      </div>
      <div class="combo-ans">sin x = 4/5, tan x = 4/3 &nbsp;·&nbsp; sin²+cos²=1 je najvažniji trig identitet — uvijek na maturi</div>
    </div>
  </div>

  <div class="inline-cp" id="icp2">
    <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — identiteti</span><span class="icp-score" id="icp2-sc">0 / 3</span></div>
    <div class="icp-body">
      <div class="icp-q" id="icp2q1"><div class="icp-q-text">Ako cosα=3/5 (I. kvadrant), sinα=?</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">3/4</div>
        <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">4/5</div>
        <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">−4/5</div>
        <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">5/3</div>
      </div><div class="icp-fb" id="icp2q1fb"></div></div>
      <div class="icp-q" id="icp2q2"><div class="icp-q-text">sin(2·30°)=2·sin30°·cos30°=?</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">1/2</div>
        <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">√3/2</div>
        <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">√3</div>
        <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">1</div>
      </div><div class="icp-fb" id="icp2q2fb"></div></div>
      <div class="icp-q" id="icp2q3"><div class="icp-q-text">cos(π−α)=?</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">cosα</div>
        <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">sinα</div>
        <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">−cosα</div>
        <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">−sinα</div>
      </div><div class="icp-fb" id="icp2q3fb"></div></div>
      <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na jednadžbe →</div>
      <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
    </div>
  </div>
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · TRIGONOMETRIJSKE JEDNADŽBE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
  <div class="box-int"><div class="box-int-lbl">INTUITIVNO — beskonačno rješenja zbog periodičnosti</div>
    <div class="box-int-txt">sin(x)=1/2 ima <em>beskonačno rješenja</em> jer sin je periodičan s periodom 2π. Na kružnici, sin=1/2 na <em>dva mjesta</em>: x=π/6 i x=5π/6. Nakon svake pune rotacije (2kπ), ponovo dolazimo u ista mjesta.<br><br>Opće rješenje mora uhvatiti <em>sva</em> ta mjesta kompaktno s parametrom k∈ℤ.<br><br><strong>Uvijek pitaj: "Na kojim mjestima na kružnici je sin/cos/tan jednak zadanoj vrijednosti?"</strong></div>
  </div>
  <div class="box-for"><span class="box-for-lbl">OPĆA RJEŠENJA TRIGONOMETRIJSKIH JEDNADŽBI</span>
    <span class="val">sinx=a</span> (|a|≤1): <span class="val">x=arcsin(a)+2kπ</span> ili <span class="val">x=π−arcsin(a)+2kπ</span><br>
    <span class="val">cosx=a</span> (|a|≤1): <span class="val">x=±arccos(a)+2kπ</span><br>
    <span class="val">tanx=a</span>: <span class="val">x=arctan(a)+kπ</span> <span class="cmt">(period π!)</span><br>
    <span class="cmt">Posebno: sinx=0→x=kπ · cosx=0→x=π/2+kπ · sinx=1→x=π/2+2kπ</span>
  </div>
  
<!-- KPi vs 2KPi WARNING -->
<div class="box-warn" style="margin-bottom:16px">
  <span class="bw-ico">⚠️</span>
  <div class="bw-body">
    <div class="bw-title">KRITIČNA RAZLIKA — kπ vs 2kπ (najčešća greška na maturi!)</div>
    <div class="bw-txt">
      <table style="font-size:12px;border-collapse:collapse;width:100%;margin:6px 0">
        <tr><th style="padding:4px 10px;border:1px solid var(--bd);background:var(--inp)">Funkcija</th><th style="padding:4px 10px;border:1px solid var(--bd);background:var(--inp)">Period</th><th style="padding:4px 10px;border:1px solid var(--bd);background:var(--inp)">Opće rješenje f(x)=a</th></tr>
        <tr><td style="padding:4px 10px;border:1px solid var(--bd)">sin x</td><td style="padding:4px 10px;border:1px solid var(--bd)">2π</td><td style="padding:4px 10px;border:1px solid var(--bd);color:var(--blue)">x = arcsin(a) + <strong>2k</strong>π &nbsp;ili&nbsp; x = π − arcsin(a) + <strong>2k</strong>π</td></tr>
        <tr><td style="padding:4px 10px;border:1px solid var(--bd)">cos x</td><td style="padding:4px 10px;border:1px solid var(--bd)">2π</td><td style="padding:4px 10px;border:1px solid var(--bd);color:var(--blue)">x = ±arccos(a) + <strong>2k</strong>π</td></tr>
        <tr><td style="padding:4px 10px;border:1px solid var(--bd);color:var(--gold);font-weight:700">tan x</td><td style="padding:4px 10px;border:1px solid var(--bd);color:var(--gold);font-weight:700">π !</td><td style="padding:4px 10px;border:1px solid var(--bd);color:var(--gold);font-weight:700">x = arctan(a) + <strong>k</strong>π &nbsp;(SAMO kπ!)</td></tr>
        <tr><td style="padding:4px 10px;border:1px solid var(--bd);color:var(--gold);font-weight:700">cot x</td><td style="padding:4px 10px;border:1px solid var(--bd);color:var(--gold);font-weight:700">π !</td><td style="padding:4px 10px;border:1px solid var(--bd);color:var(--gold);font-weight:700">x = arccot(a) + <strong>k</strong>π &nbsp;(SAMO kπ!)</td></tr>
      </table>
      <strong>Konkretan primjer:</strong> tan x = 1<br>
      ❌ Učenička greška: x = π/4 + <strong>2k</strong>π &nbsp;→&nbsp; propušta rješenja x = π/4 + π = 5π/4, ...<br>
      ✓ Ispravno: x = π/4 + <strong>k</strong>π (k∈ℤ) &nbsp;→&nbsp; rješenja: ..., −3π/4, π/4, 5π/4, 9π/4, ...
    </div>
  </div>
</div>

<div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c"><div class="cmp-h b">sinx=a (period 2π)</div><div class="cmp-body">
      <div class="cmp-row">Dva mjesta na kružnici</div><div class="cmp-row">x₁=arcsin(a)+2kπ</div>
      <div class="cmp-row">x₂=π−arcsin(a)+2kπ</div><div class="cmp-row">Simetrija: desna i lijeva</div>
    </div></div>
    <div class="cmp-c"><div class="cmp-h c">cosx=a (period 2π)</div><div class="cmp-body">
      <div class="cmp-row">Dva mjesta na kružnici</div><div class="cmp-row">x=±arccos(a)+2kπ</div>
      <div class="cmp-row">Kompaktni zapis s ±</div><div class="cmp-row">Simetrija: gornja i donja</div>
    </div></div>
  </div>
  <div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — kružnica kao "rješavač"</div>
    <div class="box-men-txt">Za sinx=1/2: na kružnici, y=1/2 u I. kvadrantu (x=π/6) i II. kvadrantu (x=5π/6=π−<span class="frac"><span class="num">π</span><span class="den">6</span></span>).<br>Za cosx=−<span class="frac"><span class="num">1</span><span class="den">2</span></span>: x=−<span class="frac"><span class="num">1</span><span class="den">2</span></span> u II. kvadrantu (x=2π/3) i III. kvadrantu (x=4π/3).<br><strong>Nacrtaj kružnicu, povuci horizontalnu (sin) ili vertikalnu (cos) liniju — presjeci su rješenja.</strong></div>
  </div>
  <div class="sr" id="sr3">
    <div class="sr-head"><div class="sr-title">Trigonometrijska jednadžba — korak po korak</div><div class="sr-task">Riješi: 2sin²x−sinx−1=0, x∈[0,2π)</div></div>
    <div class="sr-steps">
      <div class="sr-step" id="sr3s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Supstitucija t=sinx</div><div class="sr-txt">2t²−t−1=0 → (2t+1)(t−1)=0<br>t=−<span class="frac"><span class="num">1</span><span class="den">2</span></span> ili t=1</div></div></div></div>
      <div class="sr-step" id="sr3s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Riješi sinx=−<span class="frac"><span class="num">1</span><span class="den">2</span></span> na [0,2π)</div><div class="sr-txt">III. i IV. kvadrant (sin negativan)<br>x=π+<span class="frac"><span class="num">π</span><span class="den">6</span></span>=7π/6 · x=2π−<span class="frac"><span class="num">π</span><span class="den">6</span></span>=11π/6</div></div></div></div>
      <div class="sr-step" id="sr3s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Riješi sinx=1 na [0,2π)</div><div class="sr-txt">x=π/2
        <div class="sr-tryit"><div class="sr-try-lbl">↳ Ukupno rješenja na [0,2π):</div>
          <div class="sr-try-row"><input class="sr-try-in" id="try3" type="text" placeholder="x=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try3','try3-fb','π/2,<span class="frac"><span class="num">7π</span><span class="den">6</span></span>,11π/6','trig1')">Provjeri</button></div>
          <div class="sr-try-fb" id="try3-fb"></div></div></div></div></div></div>
    </div>
    <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr3',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr3',3)">↺ Resetiraj</button><span class="sr-prog" id="sr3p">0 / 3</span></div>
  </div>
  <div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — trig. jednadžba</div><div class="bug-body">
    <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik rješava sinx=√<span class="frac"><span class="num">3</span><span class="den">2</span></span>:</p>
    <div class="bug-task">x=π/3 <span class="wrong">(samo jedno rješenje)</span></div>
    <div class="bug-opts">
      <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno, arcsin(<span class="frac"><span class="num">√3</span><span class="den">2</span></span>)=π/3</div>
      <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Greška: sin=√<span class="frac"><span class="num">3</span><span class="den">2</span></span> i u II. kvadrantu → x=π−<span class="frac"><span class="num">π</span><span class="den">3</span></span>=2π/3 je drugo rješenje!</div>
      <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: x=π/3+2kπ je jedino opće rješenje</div>
      <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Greška: x=π/6</div>
    </div><div class="bug-expl" id="b3e"></div>
  </div></div>
  <div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — jednadžbe</div><ul class="b20-list">
    <li class="b20-item"><div class="b20-dot"></div>sinx=a: UVIJEK dva skupa rješenja (arcsin+π−arcsin), osim za ±1</li>
    <li class="b20-item"><div class="b20-dot"></div>cosx=a: kompaktno ±arccos(a)+2kπ</li>
    <li class="b20-item"><div class="b20-dot"></div>tanx=a: jedno opće rješenje, period π (ne 2π!)</li>
  </ul></div>

  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — trigonometrijska jednadžba</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješite sin x = √3/2 za x ∈ [0, 2π]</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Pozitivna vrijednost → sin &gt; 0 → rješenja u I. i II. kvadrantu</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Osnovno rješenje: arcsin(√3/2) = π/3 → x₁ = <strong>π/3</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Drugo rješenje: x₂ = π − π/3 = <strong>2π/3</strong></div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Maturalni obrazac: sin x = k → x = arcsin(k) + 2kπ ili x = π−arcsin(k) + 2kπ</div></div>
      </div>
      <div class="combo-ans">x = π/3 ili x = 2π/3 &nbsp;·&nbsp; Na maturi uvijek navedi SVA rješenja u zadanom intervalu!</div>
    </div>
  </div>

  <div class="inline-cp" id="icp3">
    <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — jednadžbe</span><span class="icp-score" id="icp3-sc">0 / 3</span></div>
    <div class="icp-body">
      <div class="icp-q" id="icp3q1"><div class="icp-q-text">Opće rješenje sinx=0 je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">x=π/2+2kπ</div>
        <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">x=kπ</div>
        <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">x=2kπ</div>
        <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">x=π+2kπ</div>
      </div><div class="icp-fb" id="icp3q1fb"></div></div>
      <div class="icp-q" id="icp3q2"><div class="icp-q-text">Broj rješenja cosx=1/2 na [0,2π) je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">1</div>
        <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">2</div>
        <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">4</div>
        <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">beskonačno</div>
      </div><div class="icp-fb" id="icp3q2fb"></div></div>
      <div class="icp-q" id="icp3q3"><div class="icp-q-text">tanx=1 → x=? (opće rješenje)</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">π/4+2kπ</div>
        <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">π/4+kπ</div>
        <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">π/4 ili 5π/4</div>
        <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">±<span class="frac"><span class="num">π</span><span class="den">4</span></span>+2kπ</div>
      </div><div class="icp-fb" id="icp3q3fb"></div></div>
      <div class="icp-done" id="icp3-done">✓ Izvrsno! Nastavi na kombinirane zadatke →</div>
      <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
    </div>
  </div>
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>
  <div class="combo"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — dokazivanje identiteta</div></div><div class="combo-body">
    <div class="combo-task">Dokaži: (sinα+cosα)²=1+sin(2α)</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Razvij lijevu stranu: sin²α+2sinα·cosα+cos²α</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">sin²α+cos²α=1 (Pitagorin identitet)</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">2sinα·cosα=sin(2α) (formula dvostrukog kuta) → ukupno: 1+sin(2α) ✓</div></div>
    </div><div class="combo-ans">(sinα+cosα)²=sin²α+2sinαcosα+cos²α=1+sin(2α) ✓</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — kvadratna trig. jednadžba</div></div><div class="combo-body">
    <div class="combo-task">Riješi: cos(2x)+cosx=0, x∈[0,2π)</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Zamijeni cos(2x)=2cos²x−1</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">2cos²x−1+cosx=0 → (2cosx−1)(cosx+1)=0</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">cosx=1/2 → x=π/3 ili x=5π/3. cosx=−1 → x=π</div></div>
    </div><div class="combo-ans">x∈{<span class="frac"><span class="num">π</span><span class="den">3</span></span>, π, <span class="frac"><span class="num">5π</span><span class="den">3</span></span>}</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — sin i cos iz poznatih vrijednosti</div></div><div class="combo-body">
    <div class="combo-task">sinα=5/13, α u II. kvadrantu. Nađi cosα, tanα i sin(2α).</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">cos²α=1−<span class="frac"><span class="num">25</span><span class="den">169</span></span>=144/169 → cosα=−<span class="frac"><span class="num">12</span><span class="den">13</span></span> (II. kv., cos negativan)</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">tanα=sinα/cosα=(<span class="frac"><span class="num">5</span><span class="den">13</span></span>)/(−<span class="frac"><span class="num">12</span><span class="den">13</span></span>)=−5/12</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">sin(2α)=2·(<span class="frac"><span class="num">5</span><span class="den">13</span></span>)·(−<span class="frac"><span class="num">12</span><span class="den">13</span></span>)=−120/169</div></div>
    </div><div class="combo-ans">cosα=−<span class="frac"><span class="num">12</span><span class="den">13</span></span> · tanα=−<span class="frac"><span class="num">5</span><span class="den">12</span></span> · sin(2α)=−120/169</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A4 — parametarska trig. jednadžba</div></div><div class="combo-body">
    <div class="combo-task">Za koje k∈ℝ jednadžba sinx=k ima rješenja?</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">sinx∈[−1,1] za sve x∈ℝ</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Jednadžba sinx=k ima rješenja ↔ k∈[−1,1]</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Za k=±1: jedno rješenje po periodu. Za |k|&lt;1: dva rješenja po periodu.</div></div>
    </div><div class="combo-ans">k∈[−1,1]. Za k=±1: jedno rješenje. Za |k|&lt;1: dva po periodu.</div>
  </div></div>
  <!-- C-TIP ZADACI -->
  <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--rose);border-color:var(--bd-r);background:var(--dim-r)">C-TIP · TEŽI KOMBINIRANI ZADACI</h2><span class="sec-time">~15 min</span><div class="sec-line"></div></div>
  <div class="box-warn" style="margin-bottom:16px"><span class="bw-ico">⚠️</span><div class="bw-body"><div class="bw-title">C-tip = rijetko na maturi, ali moguće</div><div class="bw-txt">Ovi zadaci pojavljuju se u 10–15% ispita. Zahtijevaju kombinaciju više tehnika. Preskoci ako nisi siguran u A-tip.</div></div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">C-TIP · C1 — trig. jednadžba s dvostrukim kutom</div></div><div class="combo-body">
    <div class="combo-task">Riješi: sin(2x) = sinx, x∈[0, 2π)</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Primjeni sin(2x)=2sinx·cosx: 2sinx·cosx − sinx = 0</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Izluči: sinx(2cosx − 1) = 0</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">sinx=0 → x=0, π. Ili 2cosx−1=0 → cosx=1/2 → x=π/3, 5π/3</div></div>
    </div><div class="combo-ans">x ∈ {0, π/3, π, 5π/3}. Zamka: zaboraviti sin(2x)=2sinx·cosx i pisati dvostruki kut direktno.</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">C-TIP · C2 — kvadratna jednadžba u sin i cos zajedno</div></div><div class="combo-body">
    <div class="combo-task">Riješi: 2sin²x − cosx − 1 = 0</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Zamijeni sin²x=1−cos²x: 2(1−cos²x) − cosx − 1 = 0</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Sredi: −2cos²x − cosx + 1 = 0 → 2cos²x + cosx − 1 = 0</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">t=cosx: 2t²+t−1=0 → (2t−1)(t+1)=0 → t=1/2 ili t=−1</div></div>
      <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">cosx=1/2: x=π/3+2kπ ili x=5π/3+2kπ. cosx=−1: x=π+2kπ</div></div>
    </div><div class="combo-ans">x=π/3+2kπ; x=5π/3+2kπ; x=π+2kπ, k∈ℤ. Ključ: uvijek svesti na jednu trig. funkciju!</div>
  </div></div>

  <div class="drill"><div class="drill-head"><span class="drill-title">// Brzi refleks — Točno ili Netočno?</span><span class="drill-score" id="dr-sc">0 / 0</span></div>
    <div class="drill-body">
      <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
      <div class="drill-q" id="dr-q">sin(30°) = 1/2</div>
      <div class="drill-opts"><div class="drill-opt" onclick="drill(this,true)">✓ Točno</div><div class="drill-opt" onclick="drill(this,false)">✗ Netočno</div></div>
      <div class="drill-fb" id="dr-fb"></div>
      <div class="drill-ctrl"><button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeće →</button></div>
      <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
    </div>
  </div>
  <div class="ncvvo-real"><div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div><div class="ncvvo-real-body">
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Egzaktne vrijednosti · ~40% netočnih<span class="ncvvo-live-stat neutral" id="nlive-ev">egzaktne vr.</span></div>
      <div class="ncvvo-real-q">Izračunaj: cos(315°) i sin(−<span class="frac"><span class="num">π</span><span class="den">6</span></span>)</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>ne primjenjuju simetrije kružnice, gube predznak</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">315°=360°−45° (IV.kv.): cos(315°)=cos(45°)=√<span class="frac"><span class="num">2</span><span class="den">2</span></span>.<br>sin(−<span class="frac"><span class="num">π</span><span class="den">6</span></span>)=−sin(<span class="frac"><span class="num">π</span><span class="den">6</span></span>)=−<span class="frac"><span class="num">1</span><span class="den">2</span></span> (sin neparna). <strong>√<span class="frac"><span class="num">2</span><span class="den">2</span></span> i −1/2</strong></div>
    </div>
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Trig. jednadžba · ~55% netočnih<span class="ncvvo-live-stat neutral" id="nlive-jed">jednadžba</span></div>
      <div class="ncvvo-real-q">Opće rješenje: 2cos²x−1=0</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>zaboravljaju da cos ima dva presjeka po periodu</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">cos²x=1/2 → cosx=±√2/2<br>cosx=√<span class="frac"><span class="num">2</span><span class="den">2</span></span> → x=±<span class="frac"><span class="num">π</span><span class="den">4</span></span>+2kπ · cosx=−<span class="frac"><span class="num">√2</span><span class="den">2</span></span> → x=±<span class="frac"><span class="num">3π</span><span class="den">4</span></span>+2kπ<br><strong>x=π/4+<span class="frac"><span class="num">kπ</span><span class="den">2</span></span>, k∈ℤ</strong></div>
    </div>
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Adicijska formula · ~45% netočnih<span class="ncvvo-live-stat neutral" id="nlive-add">adicijska f.</span></div>
      <div class="ncvvo-real-q">sinα=3/5 (I.kv.), sinβ=5/13 (I.kv.). Izračunaj sin(α+β).</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>ne nađu cosα i cosβ iz Pitagorinog identiteta</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">cosα=4/5, cosβ=12/13 (I.kv.)<br>sin(α+β)=(<span class="frac"><span class="num">3</span><span class="den">5</span></span>)(<span class="frac"><span class="num">12</span><span class="den">13</span></span>)+(<span class="frac"><span class="num">4</span><span class="den">5</span></span>)(<span class="frac"><span class="num">5</span><span class="den">13</span></span>)=36/65+<span class="frac"><span class="num">20</span><span class="den">65</span></span>=<strong>56/65</strong></div>
    </div>
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Identiteti · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-id">identiteti</span></div>
      <div class="ncvvo-real-q">Pojednostavni: (1−cos²α)/sinα</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>ne prepoznaju 1−cos²α=sin²α</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">1−cos²α=sin²α (Pitagorin)<br>sin²α/sinα=<strong>sinα</strong></div>
    </div>
  </div></div>
  <div class="checkpoint" id="cp"><div class="cp-head"><span class="cp-icon">✅</span><div><div class="cp-title">Checkpoint — jesi li spreman za dalje?</div><div class="cp-sub">Potvrdi što znaš</div></div></div>
    <ul class="cp-list">
      <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>Egzaktne vrijednosti sin/cos za 0°,30°,45°,60°,90° napamet</li>
      <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>Kvadranti i predznaci: "SVi SOvi Telefoniraju Crno"</li>
      <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>sin²+cos²=1 · adicijska formula sin(α±β) napamet</li>
      <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>sinx=a: dva opća rješenja · cosx=a: ±arccos · tanx=a: period π</li>
      <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Kvadratna trig. jednadžba: supstitucija t=sinx ili t=cosx</li>
    </ul>
    <div class="cp-footer"><span id="cp-txt">0 / 5 potvrđeno</span><span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za Poglavlje 10!</span></div>
  </div>
  <div class="matura-block"><div class="matura-hd">⭐ matura fokus — automatski refleks</div><ul class="matura-list">
    <li class="mi"><div class="mi-dot"></div><span><b>Egzaktne vrijednosti napamet!</b> NCVVO ne da kalkulator.</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>sin(α+β)≠sinα+sinβ.</b> Adicijska formula!</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>sinx=a: dva rješenja</b> (arcsin+2kπ i π−arcsin+2kπ).</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>sin²+cos²=1.</b> Sve ostalo slijedi!</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>Kvadranti:</b> "SVi SOvi Telefoniraju Crno".</span></li>
  </ul></div>
  <div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Gdje ćeš ovo koristiti?</div><div class="cn-sub">Trigonometrija se pojavljuje u 4 poglavlja</div></div></div>
    <div class="cn-grid">
      <div class="cn-item"><div class="cn-item-head"><span class="cn-badge b">P10</span><span class="cn-item-title">Analitička geometrija</span></div><div class="cn-item-desc">Kut između pravaca i vektora računa se trigonometrijski.</div><div class="cn-item-arrow">→ sin, cos, tan kuta</div></div>
      <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P17</span><span class="cn-item-title">Derivacije</span></div><div class="cn-item-desc">(sinx)'=cosx i (cosx)'=−sinx — standardne derivacije.</div><div class="cn-item-arrow">→ derivacije sin i cos</div></div>
      <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P18</span><span class="cn-item-title">Integrali</span></div><div class="cn-item-desc">∫sinx dx=−cosx+C i ∫cosx dx=sinx+C.</div><div class="cn-item-arrow">→ integrali sin i cos</div></div>
      <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P11</span><span class="cn-item-title">Geometrija prostora</span></div><div class="cn-item-desc">Sinusov poučak i poučak o kosinusu — primjena u trokutu.</div><div class="cn-item-arrow">→ sinusov, kosinusov poučak</div></div>
    </div>
  </div>

<div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
<div class="con" style="margin-bottom:20px">
  <div class="cr"><div class="ck b">Egzaktne vrijednosti</div><div class="cv">sin(30°)=1/2, sin(45°)=&radic;2/2, sin(60°)=&radic;3/2. cos(x)=sin(90°&minus;x). tan(x)=sin(x)/cos(x).</div></div>
  <div class="cr"><div class="ck c">Jednadžba sin(x)=a</div><div class="cv">x = arcsin(a)+2k&pi; &nbsp; ili &nbsp; x = &pi;&minus;arcsin(a)+2k&pi;, &nbsp; k&isin;&integers;. Uvjet: |a|&le;1!</div></div>
  <div class="cr"><div class="ck i">Jednadžba cos(x)=a</div><div class="cv">x = &plusmn;arccos(a)+2k&pi;, &nbsp; k&isin;&integers;. &nbsp; tan(x)=a: x = arctan(a)+k&pi;.</div></div>
  <div class="cr"><div class="ck a">Adicijske formule</div><div class="cv">sin(a+b) = sin(a)cos(b)+cos(a)sin(b). &nbsp; cos(a+b) = cos(a)cos(b)&minus;sin(a)sin(b).</div></div>
  <div class="cr"><div class="ck r">Zamka</div><div class="cv">sin(x)>1 — nema rješenja! Periodi: sin/cos: 2&pi;, tan/cot: &pi;. k&pi; vs 2k&pi; — pazi na pravi period!</div></div>
</div>
  
<div class="slbl" style="margin-top:28px">// ncvvo anti-primjeri — najčešće greške u trigonometriji</div>
<div class="anti-wrap">
  <div class="anti-hdr">❌ 3 greške koje najčešće koštaju bodova</div>
  <div class="anti-item">
    <div><div class="anti-badge ng">GREŠKA 01 · adicijska formula</div></div>
    <div class="anti-wrong">sin(α+β) → učenik piše: sinα + sinβ (razvija kao zbroj).</div>
    <div class="anti-why">⚠ sin(α+β) ≠ sinα + sinβ. Adicijska formula se ne "razvija" kao distribucija.</div>
    <div><div class="anti-badge ok">TOČNO</div></div>
    <div class="anti-right">sin(α+β) = sinα·cosβ + cosα·sinβ. Pamti: "sin·cos + cos·sin".</div>
  </div>
  <div class="anti-item">
    <div><div class="anti-badge ng">GREŠKA 02 · opća rješenja jednadžbe</div></div>
    <div class="anti-wrong">sinx = 1/2 → učenik piše samo: x = π/6 + 2kπ (zaboravlja drugo rješenje).</div>
    <div class="anti-why">⚠ Sinusova krivulja siječe horizontalu y=1/2 u DVIJE točke po periodu (π/6 i 5π/6).</div>
    <div><div class="anti-badge ok">TOČNO</div></div>
    <div class="anti-right">x = π/6 + 2kπ &nbsp;ILI&nbsp; x = π − π/6 + 2kπ = 5π/6 + 2kπ, k∈ℤ.</div>
  </div>
  <div class="anti-item">
    <div><div class="anti-badge ng">GREŠKA 03 · kvadrantni predznak</div></div>
    <div class="anti-wrong">cos(300°) — učenik gleda 300°=360°−60° i piše cos(300°) = −cos(60°) = −1/2.</div>
    <div class="anti-why">⚠ 300° je u IV. kvadrantu gdje cosinus ima pozitivan predznak (ne negativan).</div>
    <div><div class="anti-badge ok">TOČNO</div></div>
    <div class="anti-right">cos(300°) = cos(360°−60°) = +cos(60°) = +1/2. Kvadrant IV: cos &gt; 0. "SVi SOvi Tel Crno".</div>
  </div>
</div>

<div class="nav-row"><span class="nb" onclick="sw(0)">← Pregled</span><span class="nb primary" onclick="sw(2)">Vježbaj →</span></div>
</div>
<!-- L2 -->
<div class="layer" id="l2">
  <div class="exam-mode-wrap" id="exam-mode-wrap"><div class="exam-mode-head">// odaberi mod vježbanja</div><div class="exam-mode-opts">
    <div class="exam-mode-opt active" onclick="setExamMode('normal',this)"><div class="em-icon">📖</div><div class="em-name">Standardni</div><div class="em-desc">s objašnjenjima · bez pritiska</div></div>
    <div class="exam-mode-opt" onclick="setExamMode('timed',this)"><div class="em-icon">⏱</div><div class="em-name">Ispitni</div><div class="em-desc">90 sek po pitanju · kao NCVVO</div></div>
    <div class="exam-mode-opt" onclick="setExamMode('blitz',this)"><div class="em-icon">⚡</div><div class="em-name">Blitz</div><div class="em-desc">30 sek po pitanju · maksimalni pritisak</div></div>
  </div></div>
  <div class="adaptive-banner" id="adaptive-banner" style="display:none"><div class="ab-icon">🎯</div><div class="ab-body"><div class="ab-title" id="ab-title">Prijedlog za ponavljanje</div><div class="ab-text" id="ab-text"></div></div><button class="ab-close" onclick="document.getElementById('adaptive-banner').style.display='none'">×</button></div>
  <div class="exam-timer" id="exam-timer" style="display:none"><div class="et-circle"><canvas id="timer-canvas" width="64" height="64"></canvas><span class="et-num" id="et-num">90</span></div><div class="et-info"><div class="et-label">Preostalo</div><div class="et-q" id="et-q-label">Pitanje 1</div></div><div class="et-streak" id="et-streak">Niz: 0 ✓</div></div>
  <div class="quiz-intro"><strong>// ispitni mod</strong> · 12 pitanja · svako s objašnjenjem · target: <strong>10/12</strong></div>
  <div id="quiz-container"></div>
  <div class="score-box" id="score"><div class="score-num" id="snum">0/12</div><div class="score-lbl" id="slbl"></div></div>
  <div class="cta"><div><div class="cta-e">discere archive</div><div class="cta-t">Vježbaj sa stvarnim zadacima mature</div><div class="cta-s">Svi NCVVO zadaci 2010.–2026. uz detaljna objašnjenja.</div></div><a href="https://maturiraj.hr" class="cta-btn">Otvori Discere →</a></div>
  <div class="matura-block"><div class="matura-hd">⭐ za ispit</div><ul class="matura-list">
    <li class="mi"><div class="mi-dot"></div><span><b>sin30°=1/2 · sin45°=√<span class="frac"><span class="num">2</span><span class="den">2</span></span> · sin60°=√<span class="frac"><span class="num">3</span><span class="den">2</span></span>.</b> Cos je zrcalo!</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>sin²+cos²=1.</b> Predznak iz kvadranta!</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>sinx=a → dva rješenja.</b> Ne zaboravi x=π−arcsin(a)+2kπ!</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>sin(α+β)≠sinα+sinβ.</b> Adicijska formula!</span></li>
  </ul></div>
  <div class="slbl" style="margin-top:28px">// bonus — popuni prazninu</div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · egzaktna vrijednost</div><div class="fitb-sent">sin(45°) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','√2/2','ev1')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · kvadrant i predznak</div><div class="fitb-sent">cos(210°) = ___ (III. kvadrant)</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','-√3/2','kv1')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · Pitagorin identitet</div><div class="fitb-sent">sin²(70°)+cos²(70°) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','1','pit1')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · dvostruki kut</div><div class="fitb-sent">sin(2α) = 2·sin(α)·___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','cos(α)','dk1')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>
  <!-- sr4 — cos(2α) technique: reducing to single trig function -->
  <div class="sr" id="sr4" style="margin-top:11px">
    <div class="sr-head">
      <div class="sr-title">Riješeni primjer — cos(2α) svoñenjem na sinα</div>
      <div class="sr-task">Zna se da je sinα = 3/5 i α ∈ (0°, 90°). Izračunaj cos(2α) i sin(2α).</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr4s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Nađi cosα Pitagorinim identitetom</div>
            <div class="sr-txt">sin²α + cos²α = 1 → cos²α = 1 − 9/25 = 16/25<br>α ∈ I. kvadrant → cosα &gt; 0 → <strong>cosα = 4/5</strong></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Primijeni cos(2α) = 1 − 2sin²α</div>
            <div class="sr-txt">cos(2α) = 1 − 2·(3/5)² = 1 − 2·<span class="frac"><span class="num">9</span><span class="den">25</span></span> = 1 − <span class="frac"><span class="num">18</span><span class="den">25</span></span> = <strong><span class="frac"><span class="num">7</span><span class="den">25</span></span></strong><br><em>Koristimo 1−2sin²α kad znamo sinα — ne trebamo cosα!</em></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Izračunaj sin(2α) = 2sinα·cosα</div>
            <div class="sr-txt">sin(2α) = 2 · <span class="frac"><span class="num">3</span><span class="den">5</span></span> · <span class="frac"><span class="num">4</span><span class="den">5</span></span> = <strong><span class="frac"><span class="num">24</span><span class="den">25</span></span></strong><br>Provjera: sin²(2α)+cos²(2α) = 576/625 + 49/625 = 625/625 = 1 ✓</div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr4',3)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr4',3)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr4p">0 / 3</span>
    </div>
  </div>
  <div class="cmp">
    <div class="cmp-c">
      <div class="cmp-h b">sin x = a</div>
      <div class="cmp-body">
        x = arcsin(a) + 2kπ<br>
        x = π − arcsin(a) + 2kπ<br>
        <em>(k ∈ ℤ)</em>
      </div>
    </div>
    <div class="cmp-c">
      <div class="cmp-h c">cos x = a</div>
      <div class="cmp-body">
        x = ±arccos(a) + 2kπ<br>
        <em>(k ∈ ℤ)</em>
      </div>
    </div>
    <div class="cmp-c">
      <div class="cmp-h b">tan x = a</div>
      <div class="cmp-body">
        x = arctan(a) + kπ<br>
        <em>(k ∈ ℤ)</em>
      </div>
    </div>
  </div>
  <div class="box-warn">
    <span class="bw-ico">⚡</span>
    <div class="bw-body">
      <div class="bw-title">MATURA LOGIKA — trig. jednadžbe</div>
      <div class="bw-txt">
        Svedi na sin/cos/tan jednog kuta → primijeni opći oblik → provjeri
        koji rješenja padaju u traženi interval (tipično 0 ≤ x &lt; 2π).
      </div>
    </div>
  </div>
  <div class="nav-row"><span class="nb" onclick="sw(1)">← Uči</span><button onclick="navigateChapter('p10')" class="nb primary">Sljedeće poglavlje →</button></div>
</div>
</div></main></div>`;
const js = `function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}
function toggleSidebar(){var s=document.getElementById('sidebar');var o=document.getElementById('overlay');var open=s.classList.toggle('mobile-open');o.classList.toggle('show',open);}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}
var tabProgress=[47,50,88];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i);});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i);});
  var p=tabProgress[i];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p09_tab',i);}catch(e){}
}
var ucData={
  0:{deg:'0°',rad:'0',sin:'0',cos:'1',tan:'0'},
  30:{deg:'30°',rad:'π/6',sin:'1/2',cos:'√3/2',tan:'√3/3'},
  45:{deg:'45°',rad:'π/4',sin:'√2/2',cos:'√2/2',tan:'1'},
  60:{deg:'60°',rad:'π/3',sin:'√3/2',cos:'1/2',tan:'√3'},
  90:{deg:'90°',rad:'π/2',sin:'1',cos:'0',tan:'nedefinirano'},
  120:{deg:'120°',rad:'2π/3',sin:'√3/2',cos:'−1/2',tan:'−√3'},
  135:{deg:'135°',rad:'3π/4',sin:'√2/2',cos:'−√2/2',tan:'−1'},
  150:{deg:'150°',rad:'5π/6',sin:'1/2',cos:'−√3/2',tan:'−√3/3'},
  180:{deg:'180°',rad:'π',sin:'0',cos:'−1',tan:'0'},
  270:{deg:'270°',rad:'3π/2',sin:'−1',cos:'0',tan:'nedefinirano'}
};
function setUC(deg,btn){
  document.querySelectorAll('[id^="uc-b"]').forEach(function(b){b.classList.remove('on');});
  if(btn&&btn.classList)btn.classList.add('on');
  var d=ucData[deg];
  if(!d){
    /* Nije standardni kut — samo ažuriraj kut tekst i grafiku */
    var el=document.getElementById('uc-angle');
    if(el)el.textContent='α='+deg+'°='+Math.round(Math.PI*deg/180*100)/100+' rad';
    return;
  }
  document.getElementById('uc-angle').textContent='α='+d.deg+'='+d.rad+' rad';
  var q=deg<90?'I':deg<180?'II':deg<270?'III':'IV';if(deg===0||deg===90||deg===180||deg===270)q='os';
  document.getElementById('uc-vals').innerHTML='sinα=<strong style="color:var(--green)">'+d.sin+'</strong><br>cosα=<strong style="color:var(--blue)">'+d.cos+'</strong><br>tanα=<strong style="color:var(--cyan)">'+d.tan+'</strong><br><span style="color:var(--t3);font-size:10px">Kvadrant: '+q+'</span>';
}
setUC(0,document.getElementById('uc-b0'));
var stepSt={};
function nxtStep(id,tot){if(!stepSt[id])stepSt[id]=0;stepSt[id]=Math.min(stepSt[id]+1,tot);for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}var prog=document.getElementById(id+'p');if(prog)prog.textContent=stepSt[id]+' / '+tot;var ns=document.getElementById(id+'s'+stepSt[id]);if(ns){setTimeout(function(){ns.scrollIntoView({behavior:'smooth',block:'nearest'});},60);}}
function rstStep(id,tot){stepSt[id]=0;for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}var prog=document.getElementById(id+'p');if(prog)prog.textContent='0 / '+tot;document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb';});}
var tryExp={tan1:'135°=180°−45° → II.kv., tan negativan. tan(135°)=−tan(45°)=−1',add1:'cos(45°+30°)=cos45°cos30°−sin45°sin30°=(√2/2)(√3/2)−(√2/2)(1/2)=(√6−√2)/4',trig1:'sinx=−1/2 → x=7π/6 i x=11π/6. sinx=1 → x=π/2. Ukupno 3 rješenja.'};
function tryIt(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();if(!v)return;inp.disabled=true;var btn=inp.parentElement.querySelector('.sr-try-btn');if(btn)btn.disabled=true;var norm=function(s){return s.replace(/\\s/g,'').toLowerCase().replace(/π/g,'pi');};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.className='sr-try-fb show '+(ok?'ok':'fail');fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];}
var drData=[
  {q:'sin(30°) = 1/2',ans:true,tag:'egzaktne vr.',exp:'Točno! sin raste: 0→1/2→√2/2→√3/2→1 za 0°→30°→45°→60°→90° ✓'},
  {q:'cos(60°) = √3/2',ans:false,tag:'egzaktne vr.',exp:'Netočno! cos je zrcalo sina: cos(60°)=1/2. cos(30°)=√3/2!'},
  {q:'tan(90°) je nedefinirano',ans:true,tag:'tan',exp:'Točno! cos(90°)=0 → tan=sin/cos → dijeljenje s nulom ✓'},
  {q:'sin²α+cos²α=1 za sve α',ans:true,tag:'identiteti',exp:'Točno! Pitagorin identitet — vrijedi bez iznimke ✓'},
  {q:'sin(α+β) = sinα+sinβ',ans:false,tag:'adicijska f.',exp:'Netočno! sin(α+β)=sinαcosβ+cosαsinβ. Adicijska formula!'},
  {q:'sin(150°) = 1/2',ans:true,tag:'egzaktne vr.',exp:'Točno! 150°=180°−30° → II.kv., sin+. sin(150°)=sin(30°)=1/2 ✓'},
  {q:'cos(−α) = −cosα',ans:false,tag:'parnost',exp:'Netočno! cos je PARNA: cos(−α)=cosα. sin je neparna: sin(−α)=−sinα.'},
  {q:'tan(x) ima period 2π',ans:false,tag:'tan',exp:'Netočno! tan ima period π. Opće rješenje: x=arctan(a)+kπ!'},
  {q:'sinx=2 nema rješenja',ans:true,tag:'jednadžbe',exp:'Točno! sinx∈[−1,1]. sinx=2>1 → nema rješenja u ℝ ✓'},
  {q:'cos(180°) = −1',ans:true,tag:'egzaktne vr.',exp:'Točno! Točka (−1,0) na kružnici → cos(180°)=−1 ✓'},
  {q:'sin(2α) = sin²α−cos²α',ans:false,tag:'dvostruki kut',exp:'Netočno! sin(2α)=2sinαcosα. sin²α−cos²α=−cos(2α)!'},
  {q:'sin(π/2) = 1',ans:true,tag:'egzaktne vr.',exp:'Točno! 90°=π/2 → točka (0,1) → sin(π/2)=y=1 ✓'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){if(drDone)return;drDone=true;drTot++;var d=drData[drIdx];var ok=chosen===d.ans;if(ok)drOk++;el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById('dr-fb');var tagHtml='<span style="font-family:var(--mono);font-size:9px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:700;margin-right:7px;background:'+(ok?'var(--dim-g)':'var(--dim-r)')+';color:'+(ok?'var(--green)':'var(--red)')+';border-color:'+(ok?'var(--bd-g)':'var(--bd-r)')+'">'+d.tag+'</span>';fb.innerHTML=tagHtml+(ok?'✓ ':'✗ ')+d.exp;fb.className='drill-fb '+(ok?'ok':'ng');document.getElementById('dr-sc').textContent=drOk+' / '+drTot;document.getElementById('dr-next').style.display='inline-flex';document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';updateProgress();}
function nextDrill(){drIdx=(drIdx+1)%drData.length;drDone=false;var q=document.getElementById('dr-q');q.style.opacity='0';setTimeout(function(){q.textContent=drData[drIdx].q;q.style.opacity='1';},150);document.getElementById('dr-fb').className='drill-fb';document.getElementById('dr-next').style.display='none';document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});updateProgress();}
var bugDone={};var bugExp={b1:'✓ Točno! sin(α+β)≠sinα+sinβ. 120°=180°−60° → II.kv., sin+. sin(120°)=sin(60°)=√3/2',b2:'✓ Točno! sinα=±√(1−cos²α). Predznak ovisi o kvadrantu! U III.kv. sin je negativan.',b3:'✓ Točno! sin=√3/2 i u II.kvadrantu (x=π−π/3=2π/3). Uvijek dva rješenja!'};
function bug(el,id,ok,eid){if(bugDone[id])return;bugDone[id]=true;el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');});}var expl=document.getElementById(eid);expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];expl.className='bug-expl show '+(ok?'ok':'ng');}
var icpAnswered={};var icpFeedback={
  icp1:{q1:{ok:'✓ Točno! cos(60°)=1/2. cos je zrcalo sina: cos(60°)=sin(30°)=1/2',ng:'✗ Netočno. cos(60°)=1/2. sin(60°)=√3/2 — ne miješaj!'},q2:{ok:'✓ Točno! 330°=360°−30° → IV.kv.(sin−). sin(330°)=−sin(30°)=−1/2',ng:'✗ Netočno. 330°=360°−30° → IV.kv.(sin−). sin(330°)=−1/2'},q3:{ok:'✓ Točno! tan(45°)=sin/cos=(√2/2)/(√2/2)=1',ng:'✗ Netočno. tan(45°)=sin(45°)/cos(45°)=(√2/2)/(√2/2)=1'}},
  icp2:{q1:{ok:'✓ Točno! sin²α=1−9/25=16/25 → sinα=4/5 (I.kv., +)',ng:'✗ Netočno. sin²=1−cos²=1−9/25=16/25 → sinα=4/5 (I.kv., +)'},q2:{ok:'✓ Točno! 2·(1/2)·(√3/2)=√3/2 ✓',ng:'✗ Netočno. 2·sin30°·cos30°=2·(1/2)·(√3/2)=√3/2'},q3:{ok:'✓ Točno! cos(π−α)=−cosα. II.kv.: cos negativan!',ng:'✗ Netočno. cos(π−α)=cosπcosα+sinπsinα=−cosα'}},
  icp3:{q1:{ok:'✓ Točno! sinx=0 za x=0,π,2π,... → x=kπ',ng:'✗ Netočno. sinx=0 za x=0,π,2π,... → x=kπ (k∈ℤ)'},q2:{ok:'✓ Točno! cos=1/2 u I.(x=π/3) i IV.(x=5π/3) → 2 rješenja',ng:'✗ Netočno. cos+ u I. i IV.kv. → x=π/3 i x=5π/3 → 2 rješenja'},q3:{ok:'✓ Točno! tan ima period π → x=π/4+kπ',ng:'✗ Netočno. tan ima period π (ne 2π!). x=π/4+kπ, k∈ℤ'}}
};
function icp(icpId,qId,el,ok,fbId){var key=icpId+'_'+qId;if(icpAnswered[key])return;icpAnswered[key]=ok;el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById(fbId);var msgs=icpFeedback[icpId]&&icpFeedback[icpId][qId];fb.textContent=msgs?(ok?msgs.ok:msgs.ng):(ok?'✓ Točno!':'✗ Netočno.');fb.className='icp-fb show '+(ok?'ok':'ng');var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});if(allDone){var done=document.getElementById(icpId+'-done');if(done)done.classList.add('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.add('show');var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent=score+' / 3';updateProgress();}}
function retryIcp(icpId){['q1','q2','q3'].forEach(function(q){delete icpAnswered[icpId+'_'+q];});var done=document.getElementById(icpId+'-done');if(done)done.classList.remove('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.remove('show');var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent='0 / 3';document.querySelectorAll('#'+icpId+' .icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});document.querySelectorAll('#'+icpId+' .icp-fb').forEach(function(f){f.className='icp-fb';f.textContent='';});}
var cpState={};
function toggleCP(n){cpState[n]=!cpState[n];var el=document.getElementById('cp'+n);if(el)el.classList.toggle('done',cpState[n]);var done=Object.values(cpState).filter(Boolean).length;var txt=document.getElementById('cp-txt');if(txt)txt.textContent=done+' / 5 potvrđeno';var ready=document.getElementById('cp-ready');if(ready)ready.style.display=done>=5?'inline':'none';updateProgress();}
function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}
var topicErrors={egzaktne:0,identiteti:0,jednadžbe:0,adicijska:0};
var topicHints={egzaktne:'Greške s egzaktnim vrijednostima! sin raste 0→1/2→√2/2→√3/2→1. Cos je zrcalo!',identiteti:'Greške s identitetima! sin²+cos²=1. sin(−α)=−sinα, cos(−α)=cosα.',jednadžbe:'Greške s jednadžbama! sinx=a ima UVIJEK dva rješenja (osim ±1). Ne zaboravi x=π−arcsin+2kπ!',adicijska:'Greška: sin(α+β)≠sinα+sinβ! Adicijska formula: sinαcosβ±cosαsinβ.'};
var qTopics={q1:'egzaktne',q2:'egzaktne',q3:'identiteti',q4:'identiteti',q5:'jednadžbe',q6:'jednadžbe',q7:'adicijska',q8:'adicijska',q9:'egzaktne',q10:'identiteti',q11:'jednadžbe',q12:'adicijska'};
var ncvvoTopicMap={'nlive-ev':['q1','q2','q9'],'nlive-jed':['q5','q6','q11'],'nlive-add':['q7','q8','q12'],'nlive-id':['q3','q4','q10']};
var streak=0,currentQ=1;
function checkAdaptive(qid,ok){var topic=qTopics[qid];if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}if(ok)streak++;else streak=0;updateTimerLabel();if(examMode!=='normal'&&Object.keys(answered).length<total){currentQ=Object.keys(answered).length+1;timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);updateTimerLabel();}updateNcvvoLiveStats();}
function showAdaptiveBanner(topic){var b=document.getElementById('adaptive-banner');var t=document.getElementById('ab-title');var x=document.getElementById('ab-text');if(!b||!t||!x)return;t.textContent='Prijedlog — ponovi: '+topic;x.innerHTML=topicHints[topic];b.style.display='flex';b.scrollIntoView({behavior:'smooth',block:'nearest'});}
function updateNcvvoLiveStats(){Object.keys(ncvvoTopicMap).forEach(function(id){var el=document.getElementById(id);if(!el)return;var qs=ncvvoTopicMap[id];var done=qs.filter(function(q){return answered[q]!==undefined;});if(done.length===0)return;var ok=qs.filter(function(q){return answered[q]===true;}).length;var pct=Math.round(ok/qs.length*100);el.className='ncvvo-live-stat '+(pct>=80?'good':pct>=50?'neutral':'bad');el.textContent=(pct>=80?'✓ ':pct>=50?'~ ':'✗ ')+pct+'% točno';});}
function updateProgress(){var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*8),8):0;var cpDone=Object.values(cpState).filter(Boolean).length;var cpPts=Math.round(cpDone/5*8);var icpPts=0;['icp1','icp2','icp3'].forEach(function(icp){var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;icpPts+=Math.round(done/3*4);});var quizPts=Object.keys(answered).length>0?Math.round(correct/total*16):0;tabProgress[1]=Math.min(47+drillPts+icpPts+cpPts,50);tabProgress[2]=Math.min(47+drillPts+icpPts+cpPts+quizPts,100);var curTab=document.querySelector('.tab.on');var curIdx=curTab?Array.from(document.querySelectorAll('.tab')).indexOf(curTab):0;var p=tabProgress[curIdx];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';try{localStorage.setItem('maturiraj_p09_prog',p);}catch(e){}}
var audioCtx=null;
function getAudio(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return audioCtx;}
function playTone(freq,dur,vol,type){var ctx=getAudio();if(!ctx)return;var osc=ctx.createOscillator();var gain=ctx.createGain();osc.connect(gain);gain.connect(ctx.destination);osc.type=type||'sine';osc.frequency.setValueAtTime(freq,ctx.currentTime);gain.gain.setValueAtTime(vol||0.15,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+dur);osc.start(ctx.currentTime);osc.stop(ctx.currentTime+dur);}
function soundCorrect(){playTone(880,0.12,0.12,'sine');setTimeout(function(){playTone(1100,0.15,0.10,'sine');},80);}
function soundWrong(){playTone(220,0.25,0.12,'sawtooth');}
function soundTick(){playTone(440,0.05,0.05,'square');}
function soundTimeUp(){playTone(180,0.4,0.15,'sawtooth');setTimeout(function(){playTone(120,0.5,0.12,'sawtooth');},200);}
function soundComplete(){[523,659,784,1047].forEach(function(f,i){setTimeout(function(){playTone(f,0.2,0.12,'sine');},i*100);});}
var examMode='normal',timerInterval=null,timerSeconds=90,timerMax=90;
function setExamMode(mode,el){examMode=mode;document.querySelectorAll('.exam-mode-opt').forEach(function(o){o.classList.remove('active');});el.classList.add('active');if(mode!=='normal'){timerMax=mode==='timed'?90:30;document.getElementById('exam-timer').style.display='flex';startTimer();}else{document.getElementById('exam-timer').style.display='none';stopTimer();}}
function drawTimerCanvas(secs,max){var c=document.getElementById('timer-canvas');if(!c)return;var ctx=c.getContext('2d');var r=28,cx=32,cy=32;ctx.clearRect(0,0,64,64);ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(77,158,255,0.12)';ctx.lineWidth=4;ctx.stroke();var pct=secs/max;var col=pct>0.4?'rgba(77,158,255,0.85)':pct>0.2?'rgba(245,158,11,0.9)':'rgba(248,113,113,0.9)';ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+pct*Math.PI*2);ctx.strokeStyle=col;ctx.lineWidth=4;ctx.lineCap='round';ctx.stroke();var numEl=document.getElementById('et-num');if(numEl)numEl.textContent=secs;var wrap=document.getElementById('exam-timer');if(wrap){wrap.classList.toggle('warn',pct<=0.4&&pct>0.2);wrap.classList.toggle('urgent',pct<=0.2);}}
function startTimer(){stopTimer();timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);timerInterval=setInterval(function(){timerSeconds--;drawTimerCanvas(timerSeconds,timerMax);if(timerSeconds>0&&timerSeconds<=10)soundTick();if(timerSeconds<=0){stopTimer();soundTimeUp();}},1000);}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function updateTimerLabel(){var l=document.getElementById('et-q-label');var s=document.getElementById('et-streak');if(l)l.textContent='Pitanje '+currentQ+' / 12';if(s)s.textContent='Niz: '+streak+' ✓';}
var quizInited=false,answered={},correct=0,total=0;
var ALL_QUESTIONS=[
  {id:'q1',topic:'egzaktne',meta:'egzaktna vrijednost',text:'sin(60°) = ?',opts:[{t:'1/2',ok:false},{t:'√2/2',ok:false},{t:'√3/2',ok:true},{t:'1',ok:false}],c:'✓ Točno. sin(60°)=√3/2. Pamti: sin raste 1/2→√2/2→√3/2 za 30°→45°→60°.',w:'✗ Netočno. sin(60°)=√3/2. Ne miješaj sa cos(60°)=1/2!',proof:['sin raste: 30°→1/2, 45°→√2/2, 60°→√3/2','cos pada: 30°→√3/2, 45°→√2/2, 60°→1/2','sin(60°)=√3/2']},
  {id:'q2',topic:'egzaktne',meta:'kut u II. kvadrantu',text:'cos(120°) = ?',opts:[{t:'1/2',ok:false},{t:'√3/2',ok:false},{t:'−1/2',ok:true},{t:'−√3/2',ok:false}],c:'✓ Točno. 120°=180°−60° → II.kv., cos−. cos(120°)=−cos(60°)=−1/2.',w:'✗ Netočno. 120°=180°−60° → II.kv.(cos−). cos(120°)=−1/2.',proof:['120°=180°−60°','II. kvadrant → cos negativan','cos(120°)=−cos(60°)=−1/2']},
  {id:'q3',topic:'identiteti',meta:'Pitagorin identitet',text:'Ako sinα=5/13 (I.kv.), cosα=?',opts:[{t:'8/13',ok:false},{t:'12/13',ok:true},{t:'−12/13',ok:false},{t:'5/12',ok:false}],c:'✓ Točno. cos²α=1−25/169=144/169 → cosα=12/13 (I.kv., +).',w:'✗ Netočno. sin²+cos²=1 → cos²=144/169 → cosα=12/13.',proof:['cos²α=1−sin²α=1−25/169=144/169','cosα=±12/13','I.kv. → cosα=+12/13']},
  {id:'q4',topic:'identiteti',meta:'simetrije trig. funkcija',text:'sin(π−α) = ?',opts:[{t:'−sinα',ok:false},{t:'cosα',ok:false},{t:'sinα',ok:true},{t:'−cosα',ok:false}],c:'✓ Točno. sin(π−α)=sinα. II.kv.: sin+, referentni kut α.',w:'✗ Netočno. sin(π−α)=sinπcosα−cosπsinα=0−(−1)sinα=sinα.',proof:['sin(π−α)=sinπcosα−cosπsinα','=0·cosα−(−1)·sinα','=sinα']},
  {id:'q5',topic:'jednadžbe',meta:'rješenje na [0,2π)',text:'Rješenja sinx=√2/2 na [0,2π) su:',opts:[{t:'x=π/4',ok:false},{t:'x=π/4 i 3π/4',ok:true},{t:'x=π/4 i 5π/4',ok:false},{t:'x=3π/4',ok:false}],c:'✓ Točno. sin=√2/2>0 → I. i II.kv. x=π/4 i x=π−π/4=3π/4.',w:'✗ Netočno. sin=+√2/2 → I.i II.kv.(sin+). x=π/4 i x=3π/4.',proof:['sin=√2/2>0 → I. i II.kv.','x₁=π/4 (I.kv.)','x₂=π−π/4=3π/4 (II.kv.)']},
  {id:'q6',topic:'jednadžbe',meta:'jednadžba cos',text:'Opće rješenje cosx=0 je:',opts:[{t:'x=kπ',ok:false},{t:'x=π/2+kπ',ok:true},{t:'x=π/2+2kπ',ok:false},{t:'x=±π/2',ok:false}],c:'✓ Točno. cos=0 za x=π/2,3π/2,... → x=π/2+kπ.',w:'✗ Netočno. cos=0 na osi y: π/2,3π/2,... → x=π/2+kπ.',proof:['cosx=0 na osi y kružnice','x=π/2,3π/2,...','Opće: x=π/2+kπ, k∈ℤ']},
  {id:'q7',topic:'adicijska',meta:'adicijska formula',text:'sin(π/4+π/4)=?',opts:[{t:'√2/2',ok:false},{t:'2·(√2/2)²',ok:false},{t:'1',ok:true},{t:'√2',ok:false}],c:'✓ Točno. sin(π/2)=1. Ili: 2sin(π/4)cos(π/4)=2·(√2/2)²=1.',w:'✗ Netočno. sin(π/4+π/4)=sin(π/2)=1. Ili adicijskom: 1.',proof:['sin(π/4+π/4)=sin(π/2)=1','Ili: 2sin(π/4)cos(π/4)','=2·(√2/2)·(√2/2)=2·1/2=1']},
  {id:'q8',topic:'adicijska',meta:'dvostruki kut',text:'cos(2α) gdje cosα=3/5 (I.kv.)=?',opts:[{t:'9/25',ok:false},{t:'−7/25',ok:true},{t:'7/25',ok:false},{t:'24/25',ok:false}],c:'✓ Točno. cos(2α)=2cos²α−1=18/25−1=−7/25.',w:'✗ Netočno. cos(2α)=2cos²α−1=2(9/25)−1=18/25−25/25=−7/25.',proof:['cos(2α)=2cos²α−1','=2·(3/5)²−1=2·9/25−1','=18/25−25/25=−7/25']},
  {id:'q9',topic:'egzaktne',meta:'kut u III. kvadrantu',text:'tan(225°)=?',opts:[{t:'−1',ok:false},{t:'1',ok:true},{t:'√3',ok:false},{t:'−√3',ok:false}],c:'✓ Točno. 225°=180°+45° → III.kv., tan+. tan(225°)=tan(45°)=1.',w:'✗ Netočno. 225°=180°+45° → III.kv.(tan+). tan(225°)=+tan(45°)=1.',proof:['225°=180°+45°','III.kv. → tan pozitivan!','tan(225°)=tan(45°)=1']},
  {id:'q10',topic:'identiteti',meta:'A razina · kombinacija identiteta',text:'sin²α−cos²α=?',opts:[{t:'1',ok:false},{t:'−cos(2α)',ok:true},{t:'cos(2α)',ok:false},{t:'sin(2α)',ok:false}],c:'✓ Točno. sin²α−cos²α=−(cos²α−sin²α)=−cos(2α).',w:'✗ Netočno. cos(2α)=cos²α−sin²α → sin²α−cos²α=−cos(2α).',proof:['cos(2α)=cos²α−sin²α','sin²α−cos²α=−(cos²α−sin²α)','=−cos(2α)']},
  {id:'q11',topic:'jednadžbe',meta:'A razina · kvadratna trig.',text:'Broj rješenja 2sin²x−1=0 na [0,2π) je:',opts:[{t:'1',ok:false},{t:'2',ok:false},{t:'4',ok:true},{t:'beskonačno',ok:false}],c:'✓ Točno. sin²x=1/2 → sinx=±√2/2. Svaka daje 2 rješenja → 4.',w:'✗ Netočno. sinx=√2/2 (x=π/4,3π/4) ili sinx=−√2/2 (x=5π/4,7π/4) → 4.',proof:['2sin²x=1 → sin²x=1/2','sinx=√2/2 → x=π/4, 3π/4','sinx=−√2/2 → x=5π/4, 7π/4 → ukupno 4']},
  {id:'q12',topic:'adicijska',meta:'A razina · adicijska primjena',text:'sin(α+β) gdje sinα=3/5, cosα=4/5, sinβ=5/13, cosβ=12/13=?',opts:[{t:'33/65',ok:false},{t:'56/65',ok:true},{t:'16/65',ok:false},{t:'63/65',ok:false}],c:'✓ Točno. (3/5)(12/13)+(4/5)(5/13)=36/65+20/65=56/65.',w:'✗ Netočno. sin(α+β)=sinαcosβ+cosαsinβ=(36+20)/65=56/65.',proof:['sin(α+β)=sinαcosβ+cosαsinβ','=(3/5)(12/13)+(4/5)(5/13)','=36/65+20/65=56/65']}
];
var FExp={ev1:'sin(45°)=√2/2≈0.707. Jednakostraničan pravokutni trokut s katetama 1:1.',kv1:'210°=180°+30° → III.kv., cos−. cos(210°)=−cos(30°)=−√3/2.',pit1:'sin²α+cos²α=1 za svaki α — Pitagorin identitet je uvijek točan!',dk1:'sin(2α)=2sinαcosα — formula dvostrukog kuta. Iz adicijske za sin(α+α).'};
function renderQuiz(){var cont=document.getElementById('quiz-container');var html='';ALL_QUESTIONS.forEach(function(q){var optsHtml=q.opts.map(function(o,i){return '<div class="qo" onclick="qa(\\''+q.id+'\\','+i+','+o.ok+',\\''+q.id+'e\\')">'+o.t+'</div>';}).join('');html+='<div class="qb" id="qb-'+q.id+'"><div class="qm">'+q.meta+'</div><div class="qq">'+q.text+'</div><div class="qb-opts">'+optsHtml+'</div><div class="qe" id="'+q.id+'e"></div></div>';});cont.innerHTML=html;total=ALL_QUESTIONS.length;}
function qa(qid,idx,ok,eid){if(answered[qid]!==undefined)return;answered[qid]=ok;if(ok){correct++;soundCorrect();}else soundWrong();var qdata=ALL_QUESTIONS.find(function(q){return q.id===qid;});if(!qdata)return;document.querySelectorAll('#qb-'+qid+' .qo').forEach(function(o,i){o.classList.add('dis');if(i===idx)o.classList.add(ok?'ok':'ng');if(!ok&&qdata.opts[i].ok)o.classList.add('ok');});var e=document.getElementById(eid);var proofHtml='';if(!ok&&qdata.proof){proofHtml='<div class="mini-proof"><div class="mini-proof-lbl">→ Mini dokaz</div>'+qdata.proof.map(function(s,i){return '<div class="step"><span class="sn">'+(i+1)+'</span><span class="st">'+s+'</span></div>';}).join('')+'</div>';}e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>'+proofHtml;e.classList.add('show');checkAdaptive(qid,ok);if(examMode!=='normal')stopTimer();if(examMode!=='normal'&&Object.keys(answered).length<total)startTimer();if(Object.keys(answered).length===total){var s=document.getElementById('score');document.getElementById('snum').textContent=correct+'/'+total;var pct=Math.round(correct/total*100);document.getElementById('slbl').textContent=pct>=80?'Izvrsno! Spreman si za P10 →':pct>=60?'Dobro! Ponovi slabe točke.':'Ponovi gradivo P09 prije nastavka.';if(s)s.classList.add('show');soundComplete();updateProgress();}updateProgress();}
function chkf(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();var btn=inp.parentElement.querySelector('.fitb-btn');if(!v)return;inp.disabled=true;if(btn)btn.disabled=true;fb.classList.add('show');var norm=function(s){return s.replace(/\\s/g,'').toLowerCase().replace(/°/g,'').replace(/α/g,'a');};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];}

/* ══════════════════════════════════════════════
   INTERAKTIVNA JEDINIČNA KRUŽNICA — P09
   ══════════════════════════════════════════════ */
var ucDeg=45;
/* Egzaktne vrijednosti za standardne kutove */
var UC_EXACT={
  0:  {s:'0',      c:'1',       t:'0'},
  30: {s:'1/2',    c:'√3/2',    t:'√3/3'},
  45: {s:'√2/2',   c:'√2/2',    t:'1'},
  60: {s:'√3/2',   c:'1/2',     t:'√3'},
  90: {s:'1',      c:'0',       t:'±∞'},
  120:{s:'√3/2',   c:'-1/2',    t:'-√3'},
  135:{s:'√2/2',   c:'-√2/2',   t:'-1'},
  150:{s:'1/2',    c:'-√3/2',   t:'-√3/3'},
  180:{s:'0',      c:'-1',      t:'0'},
  210:{s:'-1/2',   c:'-√3/2',   t:'√3/3'},
  225:{s:'-√2/2',  c:'-√2/2',   t:'1'},
  240:{s:'-√3/2',  c:'-1/2',    t:'√3'},
  270:{s:'-1',     c:'0',       t:'±∞'},
  300:{s:'-√3/2',  c:'1/2',     t:'-√3'},
  315:{s:'-√2/2',  c:'√2/2',    t:'-1'},
  330:{s:'-1/2',   c:'√3/2',    t:'-√3/3'},
  360:{s:'0',      c:'1',       t:'0'}
};
function syncUCSlider(){
  ucDeg=parseInt(document.getElementById('uc-slider').value);
  document.getElementById('uc-sl-val').textContent=ucDeg+'°';
  /* Ažuriraj i gumbe (makni active) */
  document.querySelectorAll('[id^="uc-b"]').forEach(function(b){b.classList.remove('on');});
  var btn=document.getElementById('uc-b'+ucDeg);
  if(btn)btn.classList.add('on');
  drawUnitCircle(ucDeg);
  /* Ažuriraj setUC output */
  if(typeof setUC==='function')setUC(ucDeg,{});
}
/* Override setUC da i ažurira slider i canvas */
var _origSetUC=typeof setUC!=='undefined'?setUC:null;
function setUC(deg,btn){
  ucDeg=deg;
  var sl=document.getElementById('uc-slider');
  if(sl)sl.value=deg;
  var lbl=document.getElementById('uc-sl-val');
  if(lbl)lbl.textContent=deg+'°';
  document.querySelectorAll('[id^="uc-b"]').forEach(function(b){b.classList.remove('on');});
  if(btn&&btn.classList)btn.classList.add('on');
  drawUnitCircle(deg);
  /* Originalna logika za uc-vals */
  var r=Math.PI*deg/180;
  var sv=Math.round(Math.sin(r)*10000)/10000;
  var cv=Math.round(Math.cos(r)*10000)/10000;
  var tv=Math.abs(Math.cos(r))<0.0001?'undefined':Math.round(Math.tan(r)*10000)/10000;
  var ex=UC_EXACT[deg]||null;
  var exStr=ex?'<br><span style="color:var(--amber)">Egzaktno: sin='+ex.s+' · cos='+ex.c+' · tan='+ex.t+'</span>':'';
  var angleEl=document.getElementById('uc-angle');
  if(angleEl)angleEl.innerHTML='α = '+deg+'° = '+(Math.round(Math.PI*deg/180*100)/100)+' rad';
  var valsEl=document.getElementById('uc-vals');
  if(valsEl)valsEl.innerHTML='sin('+deg+'°) = <strong style="color:var(--cyan)">'+sv+'</strong>&nbsp;&nbsp;cos('+deg+'°) = <strong style="color:var(--amber)">'+cv+'</strong>&nbsp;&nbsp;tan('+deg+'°) = <strong style="color:var(--green)">'+tv+'</strong>'+exStr;
}
function drawUnitCircle(deg){
  var cnv=document.getElementById('uc-canvas');if(!cnv)return;
  var ctx=cnv.getContext('2d');
  var W=cnv.offsetWidth||600,H=cnv.offsetHeight||260;
  cnv.width=W;cnv.height=H;
  var cx=W/2,cy=H/2,R=Math.min(W,H)*0.38;
  ctx.fillStyle='#0a0f1a';ctx.fillRect(0,0,W,H);
  /* Grid */
  ctx.strokeStyle='rgba(129,140,248,0.07)';ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke();
  ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.stroke();
  /* Kružnica */
  ctx.strokeStyle='rgba(129,140,248,0.35)';ctx.lineWidth=2;
  ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);ctx.stroke();
  /* Oznake kutova na kružnici */
  var stdAngles=[0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330];
  ctx.fillStyle='rgba(100,90,160,0.6)';ctx.font='8px monospace';ctx.textAlign='center';
  stdAngles.forEach(function(a){
    var r=a*Math.PI/180;
    var px=cx+R*Math.cos(-r),py=cy+R*Math.sin(-r);
    var lx=cx+(R+14)*Math.cos(-r),ly=cy+(R+14)*Math.sin(-r);
    ctx.fillText(a+'°',lx,ly+3);
    ctx.fillStyle='rgba(129,140,248,0.3)';ctx.beginPath();ctx.arc(px,py,2,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='rgba(100,90,160,0.6)';
  });
  /* Radijus vektor */
  var rad=deg*Math.PI/180;
  var px=cx+R*Math.cos(-rad),py=cy+R*Math.sin(-rad);
  /* sin - vertikalna linija */
  ctx.strokeStyle='rgba(34,211,238,0.8)';ctx.lineWidth=2;ctx.setLineDash([3,3]);
  ctx.beginPath();ctx.moveTo(px,cy);ctx.lineTo(px,py);ctx.stroke();
  /* cos - horizontalna linija */
  ctx.strokeStyle='rgba(245,158,11,0.8)';
  ctx.beginPath();ctx.moveTo(cx,py);ctx.lineTo(px,py);ctx.stroke();
  ctx.setLineDash([]);
  /* Radijus */
  ctx.strokeStyle='#818CF8';ctx.lineWidth=2.5;
  ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(px,py);ctx.stroke();
  /* Kut arc */
  ctx.strokeStyle='rgba(129,140,248,0.5)';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.arc(cx,cy,R*0.18,0,-rad,rad<0);ctx.stroke();
  /* Točka na kružnici */
  ctx.fillStyle='#818CF8';ctx.beginPath();ctx.arc(px,py,6,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(px,py,2.5,0,Math.PI*2);ctx.fill();
  /* Labels */
  var sv=Math.round(Math.sin(rad)*1000)/1000;
  var cv=Math.round(Math.cos(rad)*1000)/1000;
  ctx.font='bold 10px monospace';
  /* sin label */
  ctx.fillStyle='#22D3EE';ctx.textAlign=px>cx?'left':'right';
  var slx=px+(px>cx?6:-6),sly=(cy+py)/2;
  ctx.fillText('sin='+sv,slx,sly);
  /* cos label */
  ctx.fillStyle='#F59E0B';ctx.textAlign='center';
  ctx.fillText('cos='+cv,cx+(px-cx)*0.5,py+(py<cy?-6:14));
  /* Koordinate na točki */
  ctx.fillStyle='#fff';ctx.font='9px monospace';
  ctx.textAlign=px>cx?'left':'right';
  ctx.fillText('('+cv+','+sv+')',px+(px>cx?8:-8),py+(py>cy?12:-8));
  /* ishodište */
  ctx.fillStyle='rgba(129,140,248,0.6)';ctx.beginPath();ctx.arc(cx,cy,3,0,Math.PI*2);ctx.fill();
  /* Kvadrant boje */
  var kvad=deg<90?'I':deg<180?'II':deg<270?'III':'IV';
  ctx.font='bold 11px monospace';ctx.fillStyle='rgba(129,140,248,0.4)';ctx.textAlign='center';
  ctx.fillText('Q'+kvad,cx+(deg<180?1:-1)*(R*0.6),cy+(deg%360<180||deg===0?-1:1)*(R*0.5));
  /* info */
  var ex=UC_EXACT[deg];
  var infoStr=ex?
    'α='+deg+'° · sin=<strong style="color:#22D3EE">'+ex.s+'</strong> · cos=<strong style="color:#F59E0B">'+ex.c+'</strong> · tan=<strong style="color:#34D399">'+ex.t+'</strong>':
    'α='+deg+'° · sin≈'+sv+' · cos≈'+cv;
  var gi=document.getElementById('uc-graph-info');
  if(gi)gi.innerHTML=infoStr;
}
(function(){setTimeout(function(){drawUnitCircle(45);},150);})();

/* ── RESTORE TAB (mora biti na kraju) ── */
(function(){try{var s=sessionStorage.getItem('p09_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){try{var saved=localStorage.getItem('maturiraj_p09_prog');if(saved!==null){var pct=parseInt(saved);if(pct>0){var bar=document.getElementById('prog-bar');var lbl=document.getElementById('prog-pct');if(bar)bar.style.width=pct+'%';if(lbl)lbl.textContent=pct+'%';}}}catch(e){}})(  );

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
const meta = {id:'P09',pidLower:'p09',title:"Maturiraj.hr \u2014 Mat A \u00b7 P09 \u00b7 Trigonometrija",subject:'matematika-a',lsKey:'maturiraj_p09_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p09');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P09] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p09"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p09_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p09_prog',String(pct));}catch(e){}}
// �� Complete page for MatChapterViewer (iframe srcDoc) ����������������������
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'*\');}}\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'*\')}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P09 · Trigonometrija</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';

export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};