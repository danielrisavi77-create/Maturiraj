/**
 * Maturiraj.hr — Mat A · P10
 * Maturiraj.hr — Mat A · P10 · Analitička Geometrija
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
.si-r{background:var(--dim-r);color:var(--red)}`;
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
  <button class="sb-item" onclick="navigateChapter('p09')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>09 · Trigonometrija</button>
  <div class="sb-lbl">// Geometrija i Analiza</div>
  <button class="sb-item" onclick="navigateChapter('p10')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>10 · Analitička geometrija</button>
  <button class="sb-item" onclick="navigateChapter('p11')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>11 · Geometrija prostora</button>
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>12 · Vektori</button>
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
<div class="bc"><span>← poglavlja</span><span class="bc-sep">/</span><span>a-razina</span><span class="bc-sep">/</span><span class="bc-cur">vektori-skalarni-i-vektorski-produkt</span></div>
<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>
<!-- L0 -->
<div class="layer on" id="l0">
  <div class="hero"><div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 12 · A razina · geometrija</div>
    <h1 class="hero-title">Vektori<br><span>u ravnini i prostoru</span></h1>
    <p class="hero-sub">Komponente, duljina, skalarni i vektorski produkt — algebra usmjerenih dužina koja opisuje smjer, kut i površinu</p>
    <div class="hero-meta"><span class="hchip b">3 teme</span><span class="hchip a">⭐ Redovito na NCVVO ispitu</span><span class="hchip c">~40 min</span></div>
    <div class="pt"><div class="pb" style="width:53%"></div></div>
  </div>
  <div class="tags">
    <span class="pill p-b">Komponente i duljina</span><span class="pill p-c">Zbrajanje i skalar</span>
    <span class="pill p-i">Kolinearnost</span><span class="pill p-a">Skalarni produkt</span>
    <span class="pill p-v">Kut i okomitost</span><span class="pill p-r">Vektorski produkt</span>
  </div>
  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int"><div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">Vektor je usmjerena dužina — ima <strong>duljinu i smjer</strong>, ali ne i fiksni položaj. Zapisujemo ga komponentama: a=(x,y) u ravnini, a=(x,y,z) u prostoru.<br><br>Dvije operacije nose gotovo sve maturalne zadatke: <strong>skalarni produkt</strong> (daje kut i okomitost) i <strong>vektorski produkt</strong> (daje okomiti vektor i površinu).<br><br><strong>Na maturi A razine: skalarni produkt, kut između vektora i uvjet okomitosti pojavljuju se redovito.</strong></div>
  </div>
  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">a=(x,y)</div><div class="sc-name">Komponente vektora</div><div class="sc-desc">Iz točaka: AB=B−A. U prostoru a=(x,y,z). Vektor = smjer + duljina, bez fiksnog položaja.</div></div>
    <div class="sc"><div class="sc-ico si-c">|a|</div><div class="sc-name">Duljina (modul)</div><div class="sc-desc">|a|=√(x²+y²) u ravnini, √(x²+y²+z²) u prostoru. Jedinični vektor: a₀=a/|a|.</div></div>
    <div class="sc"><div class="sc-ico si-i">a+b, λa</div><div class="sc-name">Operacije</div><div class="sc-desc">Zbrajanje po komponentama; množenje skalarom rasteže/okreće. Kolinearni: a=λb.</div></div>
    <div class="sc"><div class="sc-ico si-a">a·b</div><div class="sc-name">Skalarni produkt</div><div class="sc-desc">a·b=x₁x₂+y₁y₂=|a||b|cosφ. Rezultat je BROJ. a·b=0 ⇔ a⊥b.</div></div>
    <div class="sc"><div class="sc-ico si-v">cosφ</div><div class="sc-name">Kut između vektora</div><div class="sc-desc">cosφ=(a·b)/(|a||b|). Iz skalarnog produkta direktno čitamo kut.</div></div>
    <div class="sc"><div class="sc-ico si-r">a×b</div><div class="sc-name">Vektorski produkt</div><div class="sc-desc">Samo 3D. |a×b|=|a||b|sinφ = površina paralelograma. a×b ⊥ a i b.</div></div>
  </div>
  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">Komponente i duljina</div><div class="cv">AB=B−A=(xв−xа, yв−yа). |a|=√(x²+y²). Jedinični: a₀=a/|a|, |a₀|=1.</div></div>
    <div class="cr"><div class="ck b">Operacije po komponentama</div><div class="cv">a±b=(x₁±x₂, y₁±y₂) · λa=(λx, λy). Geometrijski: pravilo trokuta/paralelograma.</div></div>
    <div class="cr"><div class="ck c">Kolinearnost</div><div class="cv">a ∥ b ⇔ a=λb ⇔ x₁y₂−x₂y₁=0 (determinanta komponenti je nula).</div></div>
    <div class="cr"><div class="ck i">Skalarni produkt</div><div class="cv">a·b=x₁x₂+y₁y₂ (=x₁x₂+y₁y₂+z₁z₂ u 3D) =|a||b|cosφ. Rezultat je SKALAR (broj)!</div></div>
    <div class="cr"><div class="ck a">Kut i okomitost</div><div class="cv">cosφ=(a·b)/(|a||b|). a⊥b ⇔ a·b=0. a·a=|a|².</div></div>
    <div class="cr"><div class="ck v">Vektorski produkt (3D)</div><div class="cv">|a×b|=|a||b|sinφ = površina paralelograma. a×b je okomit na obje. Površina △ = ½|a×b|.</div></div>
    <div class="cr"><div class="ck r">Zamka</div><div class="cv">Skalarni produkt daje BROJ (kut/okomitost); vektorski produkt daje VEKTOR (površina/okomica). Ne miješaj!</div></div>
  </div>
  <div class="nav-row"><button onclick="navigateChapter('p11')" class="nb">← P11 · Geometrija prostora</button><span class="nb primary" onclick="sw(1)">Uči detaljno →</span></div>
</div>
<!-- L1 -->
<div class="layer" id="l1">
  <!-- 01 -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · VEKTOR, KOMPONENTE I OPERACIJE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
  <div class="box-int"><div class="box-int-lbl">INTUITIVNO — vektor kao "pomak"</div>
    <div class="box-int-txt">Vektor je usmjerena dužina — opisuje POMAK: koliko desno i koliko gore. Nema fiksni početak, pa ga slobodno pomičemo.<br><br>Zapis komponentama: a=(x,y). Iz dviju točaka: AB=B−A (kraj minus početak). Duljina je Pitagora u koordinatama: |a|=√(x²+y²).<br><br><strong>U prostoru sve isto, samo s tri komponente: a=(x,y,z), |a|=√(x²+y²+z²).</strong></div>
  </div>
  <div class="box-for"><span class="box-for-lbl">KOMPONENTE, DULJINA, JEDINIČNI VEKTOR</span>
    <span class="val">AB = B − A = (xв−xа, yв−yа)</span> <span class="cmt">— vektor iz dviju točaka</span><br>
    <span class="val">|a| = √(x²+y²)</span> <span class="cmt">— duljina (modul); u prostoru √(x²+y²+z²)</span><br>
    <span class="val">a₀ = a/|a|</span> <span class="cmt">— jedinični vektor (duljine 1) u smjeru a</span>
  </div>
  <div class="box-for"><span class="box-for-lbl">OPERACIJE S VEKTORIMA</span>
    <span class="val">a ± b = (x₁±x₂, y₁±y₂)</span> <span class="cmt">— zbrajanje/oduzimanje po komponentama</span><br>
    <span class="val">λa = (λx, λy)</span> <span class="cmt">— množenje skalarom (rasteže/okreće)</span><br>
    <span class="val">a ∥ b ⇔ x₁y₂ − x₂y₁ = 0</span> <span class="cmt">— kolinearnost (a=λb)</span>
  </div>
  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c"><div class="cmp-h b">Pravilo trokuta</div><div class="cmp-body">
      <div class="cmp-row">Nadoveži b na kraj a</div>
      <div class="cmp-row">a+b ide od početka a</div>
      <div class="cmp-row">do kraja b</div>
      <div class="cmp-row">Dobro za niz pomaka</div>
    </div></div>
    <div class="cmp-c"><div class="cmp-h c">Pravilo paralelograma</div><div class="cmp-body">
      <div class="cmp-row">a i b iz iste točke</div>
      <div class="cmp-row">a+b je dijagonala</div>
      <div class="cmp-row">a−b je druga dijagonala</div>
      <div class="cmp-row">Dobro za sile</div>
    </div></div>
  </div>
  <div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Kalkulator duljine — upiši komponente vektora</span></div>
    <div class="disc-body">
      <div class="disc-row" style="flex-wrap:wrap;gap:6px">
        <span class="disc-lbl">a = (</span>
        <input class="disc-in" id="mag-x" type="number" value="3" style="width:55px">
        <span class="disc-lbl">,</span>
        <input class="disc-in" id="mag-y" type="number" value="4" style="width:55px">
        <span class="disc-lbl">)</span>
        <button class="disc-btn" onclick="calcMag()">Izračunaj →</button>
      </div>
      <div class="disc-result" id="mag-result">Upiši komponente pa klikni Izračunaj</div>
    </div>
  </div>
  <div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — duljina je Pitagora</div>
    <div class="box-men-txt">Komponente (x,y) su katete pravokutnog trokuta; duljina |a| je hipotenuza, pa |a|=√(x²+y²).<br>Za a=(3,4): |a|=√(9+16)=√25=5 — klasična trojka 3-4-5.<br><strong>Jedinični vektor: SVAKU komponentu podijeli s |a|. Smjer ostaje, duljina postaje 1.</strong></div>
  </div>
  <div class="sr" id="sr1">
    <div class="sr-head"><div class="sr-title">Vektor iz točaka i njegova duljina — korak po korak</div><div class="sr-task">Za A(1,2), B(4,6) nađi AB i |AB|</div></div>
    <div class="sr-steps">
      <div class="sr-step" id="sr1s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Komponente vektora AB</div><div class="sr-txt">AB = B − A = (4−1, 6−2) = <strong>(3, 4)</strong></div></div></div></div>
      <div class="sr-step" id="sr1s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Duljina</div><div class="sr-txt">|AB| = √(3² + 4²) = √(9+16) = √25 = <strong>5</strong></div></div></div></div>
      <div class="sr-step" id="sr1s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Jedinični vektor</div><div class="sr-txt">a₀ = AB/|AB| = (3/5, 4/5). Provjera: √((3/5)²+(4/5)²)=√(25/25)=1 ✓
        <div class="sr-tryit"><div class="sr-try-lbl">↳ Duljina vektora a=(5,12)?</div>
          <div class="sr-try-row"><input class="sr-try-in" id="try1" type="text" placeholder="|a|=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try1','try1-fb','13','ud1')">Provjeri</button></div>
          <div class="sr-try-fb" id="try1-fb"></div></div></div></div></div></div>
    </div>
    <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr1',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr1',3)">↺ Resetiraj</button><span class="sr-prog" id="sr1p">0 / 3</span></div>
  </div>
  <div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — duljina vektora</div><div class="bug-body">
    <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa duljinu vektora a=(6,8):</p>
    <div class="bug-task">|a| = <span class="wrong">6 + 8 = 14</span></div>
    <div class="bug-opts">
      <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno, duljina je zbroj komponenti</div>
      <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška: |a|=√(6²+8²)=√100=10. Kvadriraj komponente pa korjenuj!</div>
      <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška: |a|=6·8=48</div>
      <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Greška: |a|=(6+8)/2=7</div>
    </div><div class="bug-expl" id="b1e"></div>
  </div></div>
  <div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — komponente i duljina</div><ul class="b20-list">
    <li class="b20-item"><div class="b20-dot"></div>AB = B − A (kraj minus početak), ne obrnuto!</li>
    <li class="b20-item"><div class="b20-dot"></div>|a| = √(x²+y²) — kvadriraj komponente pa korjenuj</li>
    <li class="b20-item"><div class="b20-dot"></div>Jedinični a₀ = a/|a|, uvijek duljine 1</li>
  </ul></div>
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — kolinearnost</div></div>
    <div class="combo-body">
      <div class="combo-task">Jesu li a=(2,−3) i b=(−4,6) kolinearni? Ako jesu, nađi λ takav da je b=λa.</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Uvjet: x₁y₂ − x₂y₁ = 2·6 − (−4)·(−3) = 12 − 12 = <strong>0</strong> → kolinearni</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Nađi λ: b=λa → (−4,6)=λ(2,−3). Iz prve komponente: −4=2λ → λ=−2</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Provjera druge komponente: −2·(−3)=6 ✓</div></div>
      </div>
      <div class="combo-ans">Kolinearni su; b = −2a. (Kolinearnost ⇔ determinanta komponenti = 0.)</div>
    </div>
  </div>
  <div class="inline-cp" id="icp1">
    <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — komponente i operacije</span><span class="icp-score" id="icp1-sc">0 / 3</span></div>
    <div class="icp-body">
      <div class="icp-q" id="icp1q1"><div class="icp-q-text">Vektor AB za A(1,−1), B(5,3) je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">(4,4)</div>
        <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">(6,2)</div>
        <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">(−4,−4)</div>
        <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">(4,2)</div>
      </div><div class="icp-fb" id="icp1q1fb"></div></div>
      <div class="icp-q" id="icp1q2"><div class="icp-q-text">Duljina vektora a=(6,8) je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">14</div>
        <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">10</div>
        <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">48</div>
        <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">√14</div>
      </div><div class="icp-fb" id="icp1q2fb"></div></div>
      <div class="icp-q" id="icp1q3"><div class="icp-q-text">Za a=(2,1), b=(1,3): 2a − b =</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">(3,−1)</div>
        <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">(5,5)</div>
        <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">(3,5)</div>
        <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">(1,−1)</div>
      </div><div class="icp-fb" id="icp1q3fb"></div></div>
      <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na skalarni produkt →</div>
      <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
    </div>
  </div>
  <!-- 02 -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · SKALARNI PRODUKT, KUT I OKOMITOST</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
  <div class="box-int"><div class="box-int-lbl">INTUITIVNO — koliko dva vektora "gledaju u isti smjer"</div>
    <div class="box-int-txt">Skalarni produkt mjeri koliko su dva vektora poravnata: velik pozitivan → isti smjer; nula → okomiti; negativan → suprotni smjerovi.<br><br>Dvije formule, isti rezultat (BROJ): preko komponenti a·b=x₁x₂+y₁y₂, i preko kuta a·b=|a||b|cosφ. Izjednačavanjem dobivamo kut.<br><br><strong>Najvažnija posljedica: a·b=0 ⇔ vektori su okomiti — alat za okomitost na maturi.</strong></div>
  </div>
  <div class="box-for"><span class="box-for-lbl">SKALARNI PRODUKT</span>
    <span class="val">a·b = x₁x₂ + y₁y₂</span> <span class="cmt">— preko komponenti (+ z₁z₂ u 3D)</span><br>
    <span class="val">a·b = |a||b| cosφ</span> <span class="cmt">— preko kuta; rezultat je BROJ (skalar)</span><br>
    <span class="val">cosφ = (a·b)/(|a||b|)</span> <span class="cmt">— kut između vektora</span><br>
    <span class="val">a⊥b ⇔ a·b = 0</span> <span class="cmt">— uvjet okomitosti · a·a = |a|²</span>
  </div>
  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c"><div class="cmp-h b">Skalarni produkt a·b</div><div class="cmp-body">
      <div class="cmp-row">Rezultat: BROJ</div>
      <div class="cmp-row">a·b = x₁x₂+y₁y₂</div>
      <div class="cmp-row">Daje kut i okomitost</div>
      <div class="cmp-row">Komutativan: a·b=b·a</div>
    </div></div>
    <div class="cmp-c"><div class="cmp-h c">Vektorski produkt a×b</div><div class="cmp-body">
      <div class="cmp-row">Rezultat: VEKTOR</div>
      <div class="cmp-row">Samo u 3D</div>
      <div class="cmp-row">Daje površinu i okomicu</div>
      <div class="cmp-row">Antikomutativan: a×b=−b×a</div>
    </div></div>
  </div>
  <div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Kalkulator skalarnog produkta i kuta</span></div>
    <div class="disc-body">
      <div class="disc-row" style="flex-wrap:wrap;gap:6px">
        <span class="disc-lbl">a = (</span>
        <input class="disc-in" id="dot-ax" type="number" value="2" style="width:50px">
        <span class="disc-lbl">,</span>
        <input class="disc-in" id="dot-ay" type="number" value="3" style="width:50px">
        <span class="disc-lbl">) &nbsp; b = (</span>
        <input class="disc-in" id="dot-bx" type="number" value="1" style="width:50px">
        <span class="disc-lbl">,</span>
        <input class="disc-in" id="dot-by" type="number" value="-1" style="width:50px">
        <span class="disc-lbl">)</span>
        <button class="disc-btn" onclick="calcDot()">Izračunaj →</button>
      </div>
      <div class="disc-result" id="dot-result">Upiši komponente pa klikni Izračunaj</div>
    </div>
  </div>
  <div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — a·a = |a|²</div>
    <div class="box-men-txt">Skalarni produkt vektora sa samim sobom daje kvadrat duljine: a·a = x²+y² = |a|² (kut 0°, cos0°=1).<br>Zato je |a| = √(a·a).<br><strong>Trik za okomitost: ne računaj kut — samo provjeri je li a·b = 0.</strong></div>
  </div>
  <div class="sr" id="sr2">
    <div class="sr-head"><div class="sr-title">Skalarni produkt i kut — korak po korak</div><div class="sr-task">Za a=(3,−2), b=(1,2) nađi a·b i kut φ</div></div>
    <div class="sr-steps">
      <div class="sr-step" id="sr2s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Skalarni produkt po komponentama</div><div class="sr-txt">a·b = 3·1 + (−2)·2 = 3 − 4 = <strong>−1</strong></div></div></div></div>
      <div class="sr-step" id="sr2s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Duljine</div><div class="sr-txt">|a|=√(9+4)=√13, &nbsp; |b|=√(1+4)=√5</div></div></div></div>
      <div class="sr-step" id="sr2s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Kut</div><div class="sr-txt">cosφ = (a·b)/(|a||b|) = −1/√65 ≈ −0,124 → φ ≈ <strong>97°</strong> (tup, jer a·b&lt;0)
        <div class="sr-tryit"><div class="sr-try-lbl">↳ a·b za a=(2,3), b=(1,−1)?</div>
          <div class="sr-try-row"><input class="sr-try-in" id="try2" type="text" placeholder="a·b=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try2','try2-fb','-1','kru1')">Provjeri</button></div>
          <div class="sr-try-fb" id="try2-fb"></div></div></div></div></div></div>
    </div>
    <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr2',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr2',3)">↺ Resetiraj</button><span class="sr-prog" id="sr2p">0 / 3</span></div>
  </div>
  <div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — skalarni produkt</div><div class="bug-body">
    <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa a·b za a=(2,3), b=(1,−1):</p>
    <div class="bug-task">a·b = 2·1 + 3·1 = <span class="wrong">5</span></div>
    <div class="bug-opts">
      <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno, a·b=5</div>
      <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška: druga komponenta b je −1, pa a·b=2·1+3·(−1)=2−3=−1</div>
      <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Greška: a·b je vektor (2,−3)</div>
      <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Greška: a·b=2·1·3·(−1)=−6</div>
    </div><div class="bug-expl" id="b2e"></div>
  </div></div>
  <div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — skalarni produkt</div><ul class="b20-list">
    <li class="b20-item"><div class="b20-dot"></div>a·b = x₁x₂+y₁y₂ — rezultat je BROJ, ne vektor!</li>
    <li class="b20-item"><div class="b20-dot"></div>cosφ = (a·b)/(|a||b|) — DIJELI, ne množi</li>
    <li class="b20-item"><div class="b20-dot"></div>a⊥b ⇔ a·b=0 · a·a=|a|²</li>
  </ul></div>
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — kut između vektora</div></div>
    <div class="combo-body">
      <div class="combo-task">Nađi kut između a=(1,2) i b=(3,1).</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">a·b = 1·3 + 2·1 = 5</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">|a|=√5, |b|=√10 → |a||b|=√50=5√2</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">cosφ = 5/(5√2) = 1/√2 = √2/2 → φ = <strong>45°</strong></div></div>
      </div>
      <div class="combo-ans">φ = 45°. (cosφ = (a·b)/(|a||b|).)</div>
    </div>
  </div>
  <div class="inline-cp" id="icp2">
    <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — skalarni produkt</span><span class="icp-score" id="icp2-sc">0 / 3</span></div>
    <div class="icp-body">
      <div class="icp-q" id="icp2q1"><div class="icp-q-text">Za a=(2,3), b=(−1,2): a·b =</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">4</div>
        <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">−4</div>
        <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">8</div>
        <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">(−2,6)</div>
      </div><div class="icp-fb" id="icp2q1fb"></div></div>
      <div class="icp-q" id="icp2q2"><div class="icp-q-text">Za koji k su a=(3,−6) i b=(2,k) okomiti?</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">k=1</div>
        <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">k=−1</div>
        <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">k=4</div>
        <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">k=−4</div>
      </div><div class="icp-fb" id="icp2q2fb"></div></div>
      <div class="icp-q" id="icp2q3"><div class="icp-q-text">Ako je a·b=0 (a,b≠0), kut između njih je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">0°</div>
        <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">90°</div>
        <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">180°</div>
        <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">45°</div>
      </div><div class="icp-fb" id="icp2q3fb"></div></div>
      <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na vektorski produkt →</div>
      <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
    </div>
  </div>
  <!-- 03 -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · VEKTORSKI PRODUKT I POVRŠINA (3D)</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
  <div class="box-int"><div class="box-int-lbl">INTUITIVNO — produkt koji daje okomicu i površinu</div>
    <div class="box-int-txt">Vektorski produkt a×b (samo u prostoru) daje NOVI vektor okomit na oba. Njegova duljina jednaka je površini paralelograma razapetog vektorima a i b.<br><br>|a×b| = |a||b| sinφ. Kad su a i b paralelni (φ=0), površina je 0; kad su okomiti (φ=90°), maksimalna je |a||b|.<br><strong>Površina trokuta = polovica paralelograma: P△ = ½|a×b|.</strong></div>
  </div>
  <div class="box-for"><span class="box-for-lbl">VEKTORSKI PRODUKT (3D)</span>
    <span class="val">a×b ⊥ a &nbsp; i &nbsp; a×b ⊥ b</span> <span class="cmt">— rezultat je vektor okomit na obje</span><br>
    <span class="val">|a×b| = |a||b| sinφ</span> <span class="cmt">— = površina paralelograma (a,b)</span><br>
    <span class="val">P△ = ½ |a×b|</span> <span class="cmt">— površina trokuta razapetog s a i b</span><br>
    <span class="cmt">a×b = (a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁)</span>
  </div>
  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c"><div class="cmp-h b">Paralelogram</div><div class="cmp-body">
      <div class="cmp-row">P = |a×b|</div>
      <div class="cmp-row">= |a||b| sinφ</div>
      <div class="cmp-row">Razapet s a i b</div>
      <div class="cmp-row">0 kad su kolinearni</div>
    </div></div>
    <div class="cmp-c"><div class="cmp-h c">Trokut</div><div class="cmp-body">
      <div class="cmp-row">P△ = ½|a×b|</div>
      <div class="cmp-row">Polovica paralelograma</div>
      <div class="cmp-row">a=AB, b=AC</div>
      <div class="cmp-row">Vrhovi A, B, C</div>
    </div></div>
  </div>
  <div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — sinus mjeri "razmaknutost" smjerova</div>
    <div class="box-men-txt">Skalarni produkt koristi cosφ (najveći kad su vektori paralelni); vektorski koristi sinφ (najveći kad su okomiti).<br>Zato paralelni vektori daju a×b=0 (nema površine), a okomiti najveću površinu.<br><strong>Na maturi se najčešće traži POVRŠINA trokuta zadanog vrhovima — preko ½|AB×AC|.</strong></div>
  </div>
  <div class="sr" id="sr3">
    <div class="sr-head"><div class="sr-title">Površina trokuta preko vektorskog produkta — korak po korak</div><div class="sr-task">Nađi površinu trokuta A(0,0,0), B(3,0,0), C(0,4,0)</div></div>
    <div class="sr-steps">
      <div class="sr-step" id="sr3s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Vektori stranica</div><div class="sr-txt">AB = B−A = (3,0,0), &nbsp; AC = C−A = (0,4,0)</div></div></div></div>
      <div class="sr-step" id="sr3s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Vektorski produkt</div><div class="sr-txt">AB×AC = (0·0−0·4, &nbsp; 0·0−3·0, &nbsp; 3·4−0·0) = (0,0,12), &nbsp; |AB×AC| = 12</div></div></div></div>
      <div class="sr-step" id="sr3s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Površina trokuta</div><div class="sr-txt">P△ = ½|AB×AC| = ½·12 = <strong>6</strong>
        <div class="sr-tryit"><div class="sr-try-lbl">↳ Površina trokuta s AB=(2,0,0), AC=(0,3,0)?</div>
          <div class="sr-try-row"><input class="sr-try-in" id="try3" type="text" placeholder="P=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try3','try3-fb','3','tan1')">Provjeri</button></div>
          <div class="sr-try-fb" id="try3-fb"></div></div></div></div></div></div>
    </div>
    <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr3',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr3',3)">↺ Resetiraj</button><span class="sr-prog" id="sr3p">0 / 3</span></div>
  </div>
  <div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — okomitost</div><div class="bug-body">
    <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik traži k tako da a=(4,k) i b=(2,−1) budu okomiti:</p>
    <div class="bug-task">a·b = 8 + k = 0 → <span class="wrong">k = −8</span></div>
    <div class="bug-opts">
      <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno, a·b = 4·2 + k·1 = 8+k → k=−8</div>
      <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Greška: druga komponenta b je −1, pa a·b = 4·2 + k·(−1) = 8−k = 0 → k=8</div>
      <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: a·b = 4·2·k·(−1) = 0 → k=0</div>
      <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Greška: okomiti su za svaki k</div>
    </div><div class="bug-expl" id="b3e"></div>
  </div></div>
  <div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — vektorski produkt</div><ul class="b20-list">
    <li class="b20-item"><div class="b20-dot"></div>|a×b| = |a||b|sinφ = površina PARALELOGRAMA</li>
    <li class="b20-item"><div class="b20-dot"></div>Površina TROKUTA = ½|a×b| (=½|AB×AC|)</li>
    <li class="b20-item"><div class="b20-dot"></div>a×b je okomit na a i na b; a×b = −b×a</li>
  </ul></div>
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — površina trokuta u ravnini</div></div>
    <div class="combo-body">
      <div class="combo-task">Nađi površinu trokuta A(1,1), B(4,1), C(2,5).</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">AB = (3,0), AC = (1,4) (gledamo ih kao 3D s z=0)</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">z-komponenta od AB×AC: 3·4 − 0·1 = 12</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">P△ = ½|12| = <strong>6</strong></div></div>
      </div>
      <div class="combo-ans">P△ = 6. U ravnini: P△ = ½|x₁y₂ − x₂y₁| za AB=(x₁,y₁), AC=(x₂,y₂).</div>
    </div>
  </div>
  <div class="inline-cp" id="icp3">
    <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — vektorski produkt</span><span class="icp-score" id="icp3-sc">0 / 3</span></div>
    <div class="icp-body">
      <div class="icp-q" id="icp3q1"><div class="icp-q-text">|a×b| jednako je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">opsegu paralelograma</div>
        <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">površini paralelograma (a,b)</div>
        <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">skalarnom produktu a·b</div>
        <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">|a|+|b|</div>
      </div><div class="icp-fb" id="icp3q1fb"></div></div>
      <div class="icp-q" id="icp3q2"><div class="icp-q-text">Površina trokuta razapetog vektorima a i b je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">|a×b|</div>
        <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">½|a×b|</div>
        <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">2|a×b|</div>
        <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">a·b</div>
      </div><div class="icp-fb" id="icp3q2fb"></div></div>
      <div class="icp-q" id="icp3q3"><div class="icp-q-text">Vektor a×b je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">u ravnini vektora a i b</div>
        <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">okomit na a i na b</div>
        <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">paralelan s a</div>
        <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">jednak b×a</div>
      </div><div class="icp-fb" id="icp3q3fb"></div></div>
      <div class="icp-done" id="icp3-done">✓ Izvrsno! Nastavi na kombinirane zadatke →</div>
      <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
    </div>
  </div>
  <!-- A RAZINA -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>
  <div class="combo"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — kut u trokutu</div></div><div class="combo-body">
    <div class="combo-task">Za trokut A(1,1), B(4,2), C(2,5) nađi kut pri vrhu A.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">AB = (3,1), AC = (1,4)</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">AB·AC = 3·1+1·4 = 7; &nbsp; |AB|=√10, |AC|=√17</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">cosα = 7/(√10·√17) = 7/√170 ≈ 0,537 → α ≈ <strong>57,5°</strong></div></div>
    </div><div class="combo-ans">α ≈ 57,5°. Kut pri vrhu = kut između vektora dviju stranica iz tog vrha.</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — okomitost i parametar</div></div><div class="combo-body">
    <div class="combo-task">Odredi m tako da a=(m,2) bude okomit na b=(3,−6).</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Uvjet okomitosti: a·b = 0</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">m·3 + 2·(−6) = 0 → 3m − 12 = 0</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">m = <strong>4</strong></div></div>
    </div><div class="combo-ans">m = 4. Provjera: (4,2)·(3,−6)=12−12=0 ✓</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — površina trokuta</div></div><div class="combo-body">
    <div class="combo-task">Nađi površinu trokuta s vrhovima A(0,0), B(5,0), C(2,4).</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">AB = (5,0), AC = (2,4)</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">z-komponenta od AB×AC: 5·4 − 0·2 = 20</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">P△ = ½|20| = <strong>10</strong></div></div>
    </div><div class="combo-ans">P△ = 10. (Provjera: ½ · baza · visina = ½·5·4 = 10 ✓)</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A4 — rastav vektora po bazi</div></div><div class="combo-body">
    <div class="combo-task">Prikaži c=(7,4) kao linearnu kombinaciju a=(1,0) i b=(1,2): c=αa+βb.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">α(1,0)+β(1,2) = (α+β, 2β) = (7,4)</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">2β = 4 → β=2; &nbsp; α+β = 7 → α=5</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">c = 5a + 2b. Provjera: 5(1,0)+2(1,2)=(5,0)+(2,4)=(7,4) ✓</div></div>
    </div><div class="combo-ans">c = 5a + 2b. Rastav po bazi = rješavanje sustava po komponentama.</div>
  </div></div>
  <!-- DRILL -->
  <div class="drill"><div class="drill-head"><span class="drill-title">// Brzi refleks — Točno ili Netočno?</span><span class="drill-score" id="dr-sc">0 / 0</span></div>
    <div class="drill-body">
      <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
      <div class="drill-q" id="dr-q">Duljina vektora a=(3,4) je 5</div>
      <div class="drill-opts"><div class="drill-opt" onclick="drill(this,true)">✓ Točno</div><div class="drill-opt" onclick="drill(this,false)">✗ Netočno</div></div>
      <div class="drill-fb" id="dr-fb"></div>
      <div class="drill-ctrl"><button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeće →</button></div>
      <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
    </div>
  </div>
  <!-- NCVVO -->
  <div class="ncvvo-real"><div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div><div class="ncvvo-real-body">
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Duljina i jedinični vektor · ~45% netočnih<span class="ncvvo-live-stat neutral" id="nlive-ud">duljina</span></div>
      <div class="ncvvo-real-q">Nađi jedinični vektor u smjeru a=(−6,8)</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>zaborave podijeliti s |a| ili krivo računaju |a|</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">|a|=√(36+64)=√100=10 → a₀=(−6/10, 8/10)=<strong>(−3/5, 4/5)</strong></div>
    </div>
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Kolinearnost · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-kru">kolinearnost</span></div>
      <div class="ncvvo-real-q">Za koji m su a=(3,6) i b=(2,m) kolinearni?</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>postave krivu proporciju komponenti</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">a∥b ⇔ x₁y₂−x₂y₁=0 → 3·m − 2·6 = 0 → 3m=12 → <strong>m=4</strong></div>
    </div>
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Skalarni produkt i kut · ~55% netočnih<span class="ncvvo-live-stat neutral" id="nlive-tan">skalarni</span></div>
      <div class="ncvvo-real-q">Nađi kut između a=(1,1) i b=(0,1)</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>množe |a||b| umjesto da dijele a·b s |a||b|</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">a·b = 0·1+1·1 = 1; |a|=√2, |b|=1 → cosφ=1/√2=√2/2 → <strong>φ=45°</strong></div>
    </div>
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Površina trokuta · ~40% netočnih<span class="ncvvo-live-stat neutral" id="nlive-sj">površina</span></div>
      <div class="ncvvo-real-q">Površina trokuta A(0,0), B(4,0), C(1,3)</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>zaborave faktor ½ (računaju paralelogram)</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">AB=(4,0), AC=(1,3); z(AB×AC)=4·3−0·1=12 → P△=½·12=<strong>6</strong></div>
    </div>
  </div></div>
  <!-- CHECKPOINT -->
  <div class="checkpoint" id="cp"><div class="cp-head"><span class="cp-icon">✅</span><div><div class="cp-title">Checkpoint — jesi li spreman?</div><div class="cp-sub">Potvrdi što znaš</div></div></div>
    <ul class="cp-list">
      <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>AB=B−A · |a|=√(x²+y²) · jedinični a₀=a/|a|</li>
      <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>Operacije po komponentama · kolinearnost x₁y₂−x₂y₁=0</li>
      <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>Skalarni produkt a·b=x₁x₂+y₁y₂=|a||b|cosφ (BROJ)</li>
      <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>Okomitost a⊥b ⇔ a·b=0 · kut cosφ=(a·b)/(|a||b|)</li>
      <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Vektorski produkt: |a×b| = površina ▱ · P△=½|a×b|</li>
    </ul>
    <div class="cp-footer"><span id="cp-txt">0 / 5 potvrđeno</span><span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za Poglavlje 13!</span></div>
  </div>
  <div class="matura-block"><div class="matura-hd">⭐ matura fokus</div><ul class="matura-list">
    <li class="mi"><div class="mi-dot"></div><span><b>|a|=√(x²+y²)</b> · jedinični a₀=a/|a|.</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>a·b=x₁x₂+y₁y₂=|a||b|cosφ</b> — rezultat je BROJ.</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>a⊥b ⇔ a·b=0</b> — alat za okomitost.</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>P△=½|a×b|</b> — površina trokuta iz vektora stranica.</span></li>
  </ul></div>
  <div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Gdje ćeš ovo koristiti?</div><div class="cn-sub">Veze s ostalim poglavljima</div></div></div>
  <div class="cn-grid">
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P10</span><span class="cn-item-title">Analitička geometrija</span></div><div class="cn-item-desc">Normalni i smjerni vektor pravca, udaljenosti — vektori u koordinatama.</div><div class="cn-item-arrow">→ pravac i kružnica</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P11</span><span class="cn-item-title">Geometrija prostora</span></div><div class="cn-item-desc">Vektori u 3D, površine i volumeni preko vektorskog produkta.</div><div class="cn-item-arrow">→ tijela u prostoru</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P09</span><span class="cn-item-title">Trigonometrija</span></div><div class="cn-item-desc">Kut između vektora preko cosφ; sinφ u površini paralelograma.</div><div class="cn-item-arrow">→ sin i cos</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P13</span><span class="cn-item-title">Planimetrija</span></div><div class="cn-item-desc">Površine likova i odnosi u trokutu — vektorski pristup.</div><div class="cn-item-arrow">→ trokut i kružnica</div></div>
  </div>
  </div>
  <div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
  <div class="con" style="margin-bottom:20px">
    <div class="cr"><div class="ck b">Komponente i duljina</div><div class="cv">AB=B−A. |a|=√(x²+y²) (3D: √(x²+y²+z²)). Jedinični a₀=a/|a|.</div></div>
    <div class="cr"><div class="ck c">Operacije</div><div class="cv">a±b po komponentama · λa=(λx,λy) · kolinearnost x₁y₂−x₂y₁=0.</div></div>
    <div class="cr"><div class="ck i">Skalarni produkt</div><div class="cv">a·b=x₁x₂+y₁y₂=|a||b|cosφ. cosφ=(a·b)/(|a||b|). a⊥b ⇔ a·b=0.</div></div>
    <div class="cr"><div class="ck a">Vektorski produkt</div><div class="cv">|a×b|=|a||b|sinφ = površina ▱. P△=½|a×b|. a×b ⊥ a,b.</div></div>
    <div class="cr"><div class="ck r">Zamka</div><div class="cv">Skalarni produkt je BROJ (kut/okomitost); vektorski je VEKTOR (površina). Ne miješaj!</div></div>
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
  <div class="slbl" style="margin-top:28px">// bonus — popuni prazninu</div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · duljina vektora</div><div class="fitb-sent">|AB| za A(0,0), B(5,12) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="|AB|=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','13','ud2')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · jedinični vektor</div><div class="fitb-sent">Jedinični vektor smjera a=(−3,4) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="(x,y)" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','(-3/5,4/5)','kru2')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · kolinearnost</div><div class="fitb-sent">a=(3,6), b=(2,m) kolinearni → m = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="m=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','4','tan2')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · skalarni produkt</div><div class="fitb-sent">a·b za a=(2,−2), b=(1,−2) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="a·b=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','6','ud3')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>
  <!-- sr4 — line-circle intersection -->
  <div class="sr" id="sr4" style="margin-top:11px">
    <div class="sr-head">
      <div class="sr-title">Riješeni primjer — okomitost i duljine</div>
      <div class="sr-task">Pokaži da su a=(2,1) i b=(−1,2) okomiti te nađi |a| i |b|.</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr4s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Skalarni produkt</div><div class="sr-txt">a·b = 2·(−1) + 1·2 = −2 + 2 = 0 → vektori su OKOMITI ✓</div></div></div></div>
      <div class="sr-step" id="sr4s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Duljine</div><div class="sr-txt">|a| = √(2²+1²) = √5, &nbsp; |b| = √((−1)²+2²) = √5</div></div></div></div>
      <div class="sr-step" id="sr4s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Kut</div><div class="sr-txt">cosφ = (a·b)/(|a||b|) = 0/5 = 0 → φ = <strong>90°</strong>, što potvrđuje okomitost.</div></div></div></div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr4',3)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr4',3)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr4p">0 / 3</span>
    </div>
  </div>
  <div class="nav-row"><span class="nb" onclick="sw(1)">← Uči</span><button onclick="navigateChapter('p13')" class="nb primary">Sljedeće poglavlje →</button></div>
</div>
</div></main></div>`;
const js = `function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}
function toggleSidebar(){var s=document.getElementById('sidebar');var o=document.getElementById('overlay');var open=s.classList.toggle('mobile-open');o.classList.toggle('show',open);}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}
var tabProgress=[53,50,88];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i);});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i);});
  var p=tabProgress[i];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p12_tab',i);}catch(e){}
}
function calcMag(){var x=parseFloat(document.getElementById('mag-x').value),y=parseFloat(document.getElementById('mag-y').value);var r=document.getElementById('mag-result');if([x,y].some(isNaN)){r.innerHTML='<span style="color:var(--red)">Upiši x i y.</span>';return;}var fmt=function(v){return Math.round(v*1000)/1000;};var m=Math.sqrt(x*x+y*y);if(m===0){r.innerHTML='Nul-vektor — jedinični vektor nije definiran.';return;}r.innerHTML='|a| = √('+fmt(x*x)+'+'+fmt(y*y)+') = <strong>'+fmt(m)+'</strong><br>jedinični a₀ = ('+fmt(x/m)+', '+fmt(y/m)+')';}
function calcDot(){var ax=parseFloat(document.getElementById('dot-ax').value),ay=parseFloat(document.getElementById('dot-ay').value),bx=parseFloat(document.getElementById('dot-bx').value),by=parseFloat(document.getElementById('dot-by').value);var r=document.getElementById('dot-result');if([ax,ay,bx,by].some(isNaN)){r.innerHTML='<span style="color:var(--red)">Upiši komponente oba vektora.</span>';return;}var fmt=function(v){return Math.round(v*1000)/1000;};var dot=ax*bx+ay*by;var ma=Math.sqrt(ax*ax+ay*ay),mb=Math.sqrt(bx*bx+by*by);var html='a·b = ('+fmt(ax)+')·('+fmt(bx)+') + ('+fmt(ay)+')·('+fmt(by)+') = <strong>'+fmt(dot)+'</strong>';if(ma>0&&mb>0){var cos=dot/(ma*mb);cos=Math.max(-1,Math.min(1,cos));var deg=Math.acos(cos)*180/Math.PI;html+='<br>cosφ = '+fmt(cos)+' → φ ≈ <strong>'+fmt(deg)+'°</strong>';if(Math.abs(dot)<1e-9)html+='<br><strong>a·b = 0 → vektori su OKOMITI</strong>';}r.innerHTML=html;}
var stepSt={};
function nxtStep(id,tot){if(!stepSt[id])stepSt[id]=0;stepSt[id]=Math.min(stepSt[id]+1,tot);for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}var prog=document.getElementById(id+'p');if(prog)prog.textContent=stepSt[id]+' / '+tot;var ns=document.getElementById(id+'s'+stepSt[id]);if(ns){setTimeout(function(){ns.scrollIntoView({behavior:'smooth',block:'nearest'});},60);}}
function rstStep(id,tot){stepSt[id]=0;for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}var prog=document.getElementById(id+'p');if(prog)prog.textContent='0 / '+tot;document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb';});}
var tryExp={ud1:'|a|=√(5²+12²)=√169=13 — poznata trojka 5-12-13!',kru1:'a·b=2·1+3·(−1)=2−3=−1. Negativan → kut je tup (>90°).',tan1:'P△=½|AB×AC|; AB=(2,0,0), AC=(0,3,0) → AB×AC=(0,0,6) → P=½·6=3.'};
function tryIt(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();if(!v)return;inp.disabled=true;var btn=inp.parentElement.querySelector('.sr-try-btn');if(btn)btn.disabled=true;var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.className='sr-try-fb show '+(ok?'ok':'fail');fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];}
var drData=[
  {q:'Duljina vektora a=(3,4) je 5',ans:true,tag:'duljina',exp:'Točno! |a|=√(9+16)=√25=5 ✓'},
  {q:'Skalarni produkt a·b je vektor',ans:false,tag:'skalarni',exp:'Netočno! Skalarni produkt je BROJ (skalar): a·b=x₁x₂+y₁y₂.'},
  {q:'a⊥b vrijedi ako je a·b=0',ans:true,tag:'okomitost',exp:'Točno! Okomiti vektori imaju skalarni produkt nula ✓'},
  {q:'AB=A−B za točke A i B',ans:false,tag:'komponente',exp:'Netočno! AB=B−A (kraj minus početak).'},
  {q:'Za a=(1,2), b=(2,4) vrijedi a∥b',ans:true,tag:'kolinearnost',exp:'Točno! b=2a → kolinearni; 1·4−2·2=0 ✓'},
  {q:'|a×b| jednako je površini paralelograma',ans:true,tag:'vektorski',exp:'Točno! |a×b|=|a||b|sinφ = površina paralelograma ✓'},
  {q:'cosφ=(a·b)·|a||b|',ans:false,tag:'kut',exp:'Netočno! cosφ=(a·b)/(|a||b|) — DIJELI se, ne množi.'},
  {q:'3·(2,−1)=(6,−3)',ans:true,tag:'operacije',exp:'Točno! Skalar množi obje komponente ✓'},
  {q:'a·a=|a|²',ans:true,tag:'skalarni',exp:'Točno! a·a=x²+y²=|a|² ✓'},
  {q:'Vektorski produkt postoji i u ravnini (2D)',ans:false,tag:'vektorski',exp:'Netočno! Vektorski produkt definiran je u prostoru (3D); u 2D koristimo determinantu x₁y₂−x₂y₁.'},
  {q:'Jedinični vektor ima duljinu 1',ans:true,tag:'duljina',exp:'Točno! a₀=a/|a|, |a₀|=1 ✓'},
  {q:'Ako je a·b>0, kut između a i b je tup',ans:false,tag:'kut',exp:'Netočno! a·b>0 → cosφ>0 → kut je ŠILJAST (<90°).'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){if(drDone)return;drDone=true;drTot++;var d=drData[drIdx];var ok=chosen===d.ans;if(ok)drOk++;el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById('dr-fb');var tagHtml='<span style="font-family:var(--mono);font-size:9px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:700;margin-right:7px;background:'+(ok?'var(--dim-g)':'var(--dim-r)')+';color:'+(ok?'var(--green)':'var(--red)')+';border-color:'+(ok?'var(--bd-g)':'var(--bd-r)')+'">'+d.tag+'</span>';fb.innerHTML=tagHtml+(ok?'✓ ':'✗ ')+d.exp;fb.className='drill-fb '+(ok?'ok':'ng');document.getElementById('dr-sc').textContent=drOk+' / '+drTot;document.getElementById('dr-next').style.display='inline-flex';document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';updateProgress();}
function nextDrill(){drIdx=(drIdx+1)%drData.length;drDone=false;var q=document.getElementById('dr-q');q.style.opacity='0';setTimeout(function(){q.textContent=drData[drIdx].q;q.style.opacity='1';},150);document.getElementById('dr-fb').className='drill-fb';document.getElementById('dr-next').style.display='none';document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});updateProgress();}
var bugDone={};var bugExp={b1:'✓ Točno! |a|=√(x²+y²)=√(6²+8²)=√100=10, ne 6+8=14. Kvadriraj pa korjenuj!',b2:'✓ Točno! a·b=x₁x₂+y₁y₂=2·1+3·(−1)=2−3=−1. Druga komponenta je negativna — pazi na predznak!',b3:'✓ Točno! a⊥b ⇔ a·b=0: 4·2+k·(−1)=0 → 8−k=0 → k=8.'};
function bug(el,id,ok,eid){if(bugDone[id])return;bugDone[id]=true;el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');});}var expl=document.getElementById(eid);expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];expl.className='bug-expl show '+(ok?'ok':'ng');}
var icpAnswered={};var icpFeedback={
  icp1:{q1:{ok:'✓ Točno! AB=B−A=(5−1, 3−(−1))=(4,4).',ng:'✗ Netočno. AB=B−A=(4,4).'},q2:{ok:'✓ Točno! |a|=√(6²+8²)=√100=10.',ng:'✗ Netočno. |a|=√(36+64)=√100=10.'},q3:{ok:'✓ Točno! 2a−b=(4,2)−(1,3)=(3,−1).',ng:'✗ Netočno. 2a=(4,2); 2a−b=(4−1, 2−3)=(3,−1).'}},
  icp2:{q1:{ok:'✓ Točno! a·b=2·(−1)+3·2=−2+6=4.',ng:'✗ Netočno. a·b=x₁x₂+y₁y₂=−2+6=4.'},q2:{ok:'✓ Točno! a·b=0: 3·2+(−6)·k=0 → k=1.',ng:'✗ Netočno. Okomiti ⇔ a·b=0 → 6−6k=0 → k=1.'},q3:{ok:'✓ Točno! cosφ=(a·b)/(|a||b|)=0 → φ=90°.',ng:'✗ Netočno. a·b=0 → cosφ=0 → φ=90°.'}},
  icp3:{q1:{ok:'✓ Točno! |a×b|=|a||b|sinφ = površina paralelograma.',ng:'✗ Netočno. |a×b| je površina paralelograma razapetog s a i b.'},q2:{ok:'✓ Točno! P△=½|a×b|.',ng:'✗ Netočno. Površina trokuta je POLOVICA paralelograma: ½|a×b|.'},q3:{ok:'✓ Točno! a×b je okomit na ravninu vektora a i b.',ng:'✗ Netočno. Vektorski produkt daje vektor OKOMIT na obje.'}}
};
function icp(icpId,qId,el,ok,fbId){var key=icpId+'_'+qId;if(icpAnswered[key])return;icpAnswered[key]=ok;el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById(fbId);var msgs=icpFeedback[icpId]&&icpFeedback[icpId][qId];fb.textContent=msgs?(ok?msgs.ok:msgs.ng):(ok?'✓ Točno!':'✗ Netočno.');fb.className='icp-fb show '+(ok?'ok':'ng');var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});if(allDone){var done=document.getElementById(icpId+'-done');if(done)done.classList.add('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.add('show');var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent=score+' / 3';updateProgress();}}
function retryIcp(icpId){['q1','q2','q3'].forEach(function(q){delete icpAnswered[icpId+'_'+q];});var done=document.getElementById(icpId+'-done');if(done)done.classList.remove('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.remove('show');var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent='0 / 3';document.querySelectorAll('#'+icpId+' .icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});document.querySelectorAll('#'+icpId+' .icp-fb').forEach(function(f){f.className='icp-fb';f.textContent='';})}
var cpState={};
function toggleCP(n){cpState[n]=!cpState[n];var el=document.getElementById('cp'+n);if(el)el.classList.toggle('done',cpState[n]);var done=Object.values(cpState).filter(Boolean).length;var txt=document.getElementById('cp-txt');if(txt)txt.textContent=done+' / 5 potvrđeno';var ready=document.getElementById('cp-ready');if(ready)ready.style.display=done>=5?'inline':'none';updateProgress();}
function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}
var topicErrors={komponente:0,skalarni:0,okomitost:0,vektorski:0};
var topicHints={komponente:'Greške s komponentama! AB=B−A. |a|=√(x²+y²). Jedinični: a/|a|.',skalarni:'Greške sa skalarnim produktom! a·b=x₁x₂+y₁y₂ — rezultat je BROJ. a·a=|a|².',okomitost:'Greške s okomitošću! a⊥b ⇔ a·b=0. cosφ=(a·b)/(|a||b|).',vektorski:'Greške s vektorskim produktom! |a×b|=|a||b|sinφ = površina paralelograma; P△=½|a×b|.'};
var qTopics={q1:'komponente',q2:'komponente',q3:'komponente',q4:'komponente',q5:'skalarni',q6:'okomitost',q7:'okomitost',q8:'komponente',q9:'vektorski',q10:'vektorski',q11:'komponente',q12:'skalarni'};
var ncvvoTopicMap={'nlive-ud':['q1','q2','q11'],'nlive-kru':['q3','q4','q8'],'nlive-tan':['q5','q6','q12'],'nlive-sj':['q9','q10','q7']};
var streak=0,currentQ=1;
function checkAdaptive(qid,ok){var topic=qTopics[qid];if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}if(ok)streak++;else streak=0;updateTimerLabel();if(examMode!=='normal'&&Object.keys(answered).length<total){currentQ=Object.keys(answered).length+1;timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);updateTimerLabel();}updateNcvvoLiveStats();}
function showAdaptiveBanner(topic){var b=document.getElementById('adaptive-banner');var t=document.getElementById('ab-title');var x=document.getElementById('ab-text');if(!b||!t||!x)return;t.textContent='Prijedlog — ponovi: '+topic;x.innerHTML=topicHints[topic];b.style.display='flex';b.scrollIntoView({behavior:'smooth',block:'nearest'});}
function updateNcvvoLiveStats(){Object.keys(ncvvoTopicMap).forEach(function(id){var el=document.getElementById(id);if(!el)return;var qs=ncvvoTopicMap[id];var done=qs.filter(function(q){return answered[q]!==undefined;});if(done.length===0)return;var ok=qs.filter(function(q){return answered[q]===true;}).length;var pct=Math.round(ok/qs.length*100);el.className='ncvvo-live-stat '+(pct>=80?'good':pct>=50?'neutral':'bad');el.textContent=(pct>=80?'✓ ':pct>=50?'~ ':'✗ ')+pct+'% točno';});}
function updateProgress(){var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*8),8):0;var cpDone=Object.values(cpState).filter(Boolean).length;var cpPts=Math.round(cpDone/5*8);var icpPts=0;['icp1','icp2','icp3'].forEach(function(icp){var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;icpPts+=Math.round(done/3*4);});var quizPts=Object.keys(answered).length>0?Math.round(correct/total*16):0;tabProgress[1]=Math.min(53+drillPts+icpPts+cpPts,60);tabProgress[2]=Math.min(53+drillPts+icpPts+cpPts+quizPts,100);var curTab=document.querySelector('.tab.on');var curIdx=curTab?Array.from(document.querySelectorAll('.tab')).indexOf(curTab):0;var p=tabProgress[curIdx];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';try{localStorage.setItem('maturiraj_p12_prog',p);}catch(e){}}
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
  {id:'q1',topic:'komponente',meta:'komponente iz točaka',text:'Vektor AB za A(1,2), B(4,6) je:',opts:[{t:'(3,4)',ok:true},{t:'(5,8)',ok:false},{t:'(−3,−4)',ok:false},{t:'(3,8)',ok:false}],c:'✓ Točno. AB=B−A=(4−1, 6−2)=(3,4).',w:'✗ Netočno. AB=B−A=(4−1,6−2)=(3,4), ne A−B.',proof:['AB=B−A','=(4−1, 6−2)','=(3,4)']},
  {id:'q2',topic:'duljina',meta:'duljina vektora (3D)',text:'Duljina vektora a=(2,−1,2) je:',opts:[{t:'3',ok:true},{t:'5',ok:false},{t:'√5',ok:false},{t:'√7',ok:false}],c:'✓ Točno. |a|=√(4+1+4)=√9=3.',w:'✗ Netočno. |a|=√(2²+(−1)²+2²)=√9=3.',proof:['|a|=√(x²+y²+z²)','=√(4+1+4)=√9','=3']},
  {id:'q3',topic:'operacije',meta:'zbrajanje vektora',text:'Za a=(1,2), b=(3,−1): a+b =',opts:[{t:'(4,1)',ok:true},{t:'(4,3)',ok:false},{t:'(−2,3)',ok:false},{t:'(3,−2)',ok:false}],c:'✓ Točno. a+b=(1+3, 2−1)=(4,1).',w:'✗ Netočno. Zbrajaj po komponentama: (1+3, 2+(−1))=(4,1).',proof:['a+b=(x₁+x₂, y₁+y₂)','=(1+3, 2−1)','=(4,1)']},
  {id:'q4',topic:'operacije',meta:'množenje skalarom',text:'Za a=(2,−1): 3a =',opts:[{t:'(6,−3)',ok:true},{t:'(6,−1)',ok:false},{t:'(5,2)',ok:false},{t:'(6,3)',ok:false}],c:'✓ Točno. 3a=(3·2, 3·(−1))=(6,−3).',w:'✗ Netočno. Pomnoži OBJE komponente: (6,−3).',proof:['λa=(λx, λy)','=(3·2, 3·(−1))','=(6,−3)']},
  {id:'q5',topic:'skalarni',meta:'skalarni produkt',text:'Za a=(2,3), b=(1,−1): a·b =',opts:[{t:'−1',ok:true},{t:'5',ok:false},{t:'1',ok:false},{t:'(2,−3)',ok:false}],c:'✓ Točno. a·b=2·1+3·(−1)=2−3=−1.',w:'✗ Netočno. a·b=x₁x₂+y₁y₂=2−3=−1 (broj, ne vektor!).',proof:['a·b=x₁x₂+y₁y₂','=2·1+3·(−1)','=2−3=−1']},
  {id:'q6',topic:'okomitost',meta:'uvjet okomitosti',text:'Za koji k su a=(2,k) i b=(3,−6) okomiti?',opts:[{t:'k=1',ok:true},{t:'k=−1',ok:false},{t:'k=4',ok:false},{t:'k=−4',ok:false}],c:'✓ Točno. a·b=0: 6−6k=0 → k=1.',w:'✗ Netočno. a⊥b ⇔ a·b=0: 2·3+k·(−6)=0 → 6−6k=0 → k=1.',proof:['a⊥b ⇔ a·b=0','2·3+k·(−6)=0','6−6k=0 → k=1']},
  {id:'q7',topic:'kut',meta:'kut između vektora',text:'Kut između a=(1,0) i b=(1,1) je:',opts:[{t:'45°',ok:true},{t:'30°',ok:false},{t:'60°',ok:false},{t:'90°',ok:false}],c:'✓ Točno. cosφ=(1)/(1·√2)=√2/2 → φ=45°.',w:'✗ Netočno. cosφ=(a·b)/(|a||b|)=1/(1·√2)=√2/2 → 45°.',proof:['a·b=1·1+0·1=1','cosφ=1/(1·√2)=√2/2','φ=45°']},
  {id:'q8',topic:'kolinearnost',meta:'uvjet kolinearnosti',text:'Za koji m su a=(2,4) i b=(3,m) kolinearni?',opts:[{t:'6',ok:true},{t:'5',ok:false},{t:'8',ok:false},{t:'2',ok:false}],c:'✓ Točno. a∥b: x₁y₂−x₂y₁=0 → 2m−12=0 → m=6.',w:'✗ Netočno. Kolinearni ⇔ 2·m−3·4=0 → 2m=12 → m=6.',proof:['a∥b ⇔ x₁y₂−x₂y₁=0','2·m−3·4=0','2m=12 → m=6']},
  {id:'q9',topic:'vektorski',meta:'A razina · vektorski produkt',text:'|a×b| za a=(1,0,0), b=(0,1,0) je:',opts:[{t:'1',ok:true},{t:'0',ok:false},{t:'√2',ok:false},{t:'2',ok:false}],c:'✓ Točno. a×b=(0,0,1), |a×b|=1 = površina jediničnog kvadrata.',w:'✗ Netočno. |a×b|=|a||b|sin90°=1·1·1=1.',proof:['a⊥b, φ=90°','|a×b|=|a||b|sinφ=1·1·1','=1']},
  {id:'q10',topic:'vektorski',meta:'A razina · površina trokuta',text:'Površina △ABC s AB=(2,0,0), AC=(0,3,0):',opts:[{t:'3',ok:true},{t:'6',ok:false},{t:'2',ok:false},{t:'3/2',ok:false}],c:'✓ Točno. P=½|AB×AC|=½·6=3.',w:'✗ Netočno. |AB×AC|=|(0,0,6)|=6; P△=½·6=3.',proof:['AB×AC=(0,0,2·3)=(0,0,6)','|AB×AC|=6','P△=½·6=3']},
  {id:'q11',topic:'duljina',meta:'A razina · jedinični vektor',text:'Jedinični vektor u smjeru a=(3,4) je:',opts:[{t:'(3/5, 4/5)',ok:true},{t:'(3,4)',ok:false},{t:'(1/3, 1/4)',ok:false},{t:'(4/5, 3/5)',ok:false}],c:'✓ Točno. |a|=5 → a₀=a/|a|=(3/5, 4/5).',w:'✗ Netočno. a₀=a/|a|, |a|=√(9+16)=5 → (3/5, 4/5).',proof:['|a|=√(3²+4²)=5','a₀=a/|a|','=(3/5, 4/5)']},
  {id:'q12',topic:'skalarni',meta:'A razina · skalarni produkt preko kuta',text:'|a|=2, |b|=3, φ=60°. a·b =',opts:[{t:'3',ok:true},{t:'6',ok:false},{t:'3√3',ok:false},{t:'1',ok:false}],c:'✓ Točno. a·b=|a||b|cosφ=2·3·½=3.',w:'✗ Netočno. a·b=|a||b|cos60°=2·3·0,5=3.',proof:['a·b=|a||b|cosφ','=2·3·cos60°=6·½','=3']}
];
var FExp={ud2:'|AB|=√(5²+12²)=√169=13 — trojka 5-12-13.',kru2:'|a|=√((−3)²+4²)=√25=5; jedinični a₀=(−3/5, 4/5).',tan2:'a∥b ⇔ x₁y₂−x₂y₁=0 → 3·m−6·2=0 → m=4.',ud3:'a·b=2·1+(−2)·(−2)=2+4=6.'};
function renderQuiz(){var cont=document.getElementById('quiz-container');var html='';ALL_QUESTIONS.forEach(function(q){var optsHtml=q.opts.map(function(o,i){return '<div class="qo" onclick="qa(\\''+q.id+'\\','+i+','+o.ok+',\\''+q.id+'e\\')">'+o.t+'</div>';}).join('');html+='<div class="qb" id="qb-'+q.id+'"><div class="qm">'+q.meta+'</div><div class="qq">'+q.text+'</div><div class="qb-opts">'+optsHtml+'</div><div class="qe" id="'+q.id+'e"></div></div>';});cont.innerHTML=html;total=ALL_QUESTIONS.length;}
function qa(qid,idx,ok,eid){if(answered[qid]!==undefined)return;answered[qid]=ok;if(ok){correct++;soundCorrect();}else soundWrong();var qdata=ALL_QUESTIONS.find(function(q){return q.id===qid;});if(!qdata)return;document.querySelectorAll('#qb-'+qid+' .qo').forEach(function(o,i){o.classList.add('dis');if(i===idx)o.classList.add(ok?'ok':'ng');if(!ok&&qdata.opts[i].ok)o.classList.add('ok');});var e=document.getElementById(eid);var proofHtml='';if(!ok&&qdata.proof){proofHtml='<div class="mini-proof"><div class="mini-proof-lbl">→ Mini dokaz</div>'+qdata.proof.map(function(s,i){return '<div class="step"><span class="sn">'+(i+1)+'</span><span class="st">'+s+'</span></div>';}).join('')+'</div>';}e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>'+proofHtml;e.classList.add('show');checkAdaptive(qid,ok);if(examMode!=='normal')stopTimer();if(examMode!=='normal'&&Object.keys(answered).length<total)startTimer();if(Object.keys(answered).length===total){var s=document.getElementById('score');document.getElementById('snum').textContent=correct+'/'+total;var pct=Math.round(correct/total*100);document.getElementById('slbl').textContent=pct>=80?'Izvrsno! Spreman si za P13 · Planimetrija →':pct>=60?'Dobro! Ponovi slabe točke.':'Ponovi gradivo Vektori prije nastavka.';if(s)s.classList.add('show');soundComplete();updateProgress();}updateProgress();}
function chkf(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();var btn=inp.parentElement.querySelector('.fitb-btn');if(!v)return;inp.disabled=true;if(btn)btn.disabled=true;fb.classList.add('show');var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];}
/* ── RESTORE TAB (mora biti na kraju) ── */
(function(){try{var s=sessionStorage.getItem('p12_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){try{var saved=localStorage.getItem('maturiraj_p12_prog');if(saved!==null){var pct=parseInt(saved);if(pct>0){var bar=document.getElementById('prog-bar');var lbl=document.getElementById('prog-pct');if(bar)bar.style.width=pct+'%';if(lbl)lbl.textContent=pct+'%';}}}catch(e){}})(  );

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
const meta = {id:'P12',pidLower:'p12',title:"Maturiraj.hr \u2014 Mat A \u00b7 P12 \u00b7 Vektori",subject:'matematika-a',lsKey:'maturiraj_p12_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p10');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P12] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p12"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p12_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p12_prog',String(pct));}catch(e){}}
// �� Complete page for MatChapterViewer (iframe srcDoc) ����������������������
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'*\');}}\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'*\')}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P12 · Vektori</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';

export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};