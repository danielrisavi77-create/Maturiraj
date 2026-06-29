/**
 * Maturiraj.hr — Mat A · P17
 * Maturiraj.hr — Mat A · P17 · Derivacije
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
  <button class="sb-item" onclick="navigateChapter('p12')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>12 · Vektori</button>
  <button class="sb-item" onclick="navigateChapter('p13')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>13 · Planimetrija</button>
  <button class="sb-item" onclick="navigateChapter('p14')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>14 · Nizovi</button>
  <button class="sb-item" onclick="navigateChapter('p15')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>15 · Kombinatorika</button>
  <div class="sb-lbl">// Kalkulus</div>
  <button class="sb-item" onclick="navigateChapter('p16')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>16 · Granice</button>
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>17 · Derivacije</button>
  <button class="sb-item" onclick="navigateChapter('p18')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>18 · Integrali</button>
  <button class="sb-item" onclick="navigateChapter('p19')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>19 · Složeni maturalni zadaci</button>
  <button class="sb-item" onclick="navigateChapter('p20')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>20 · Završna sistematizacija</button>
  <div class="sb-lbl">// Bonus</div>
  <button class="sb-item" onclick="navigateChapter('p21')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>21 · Vjerojatnost</button>
  <div class="sb-footer">uvod · kako koristiti<br>maturiraj.hr · A razina</div>
</nav>
<main class="main"><div class="content-wrap">
<div class="bc"><span>← poglavlja</span><span class="bc-sep">/</span><span>a-razina</span><span class="bc-sep">/</span><span class="bc-cur">derivacije-promjena-ekstremi-tangenta</span></div>
<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>

<!-- ═══ L0 ═══ -->
<div class="layer on" id="l0">
  <div class="hero"><div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 17 od 21 · A razina · kalkulus</div>
    <h1 class="hero-title">Derivacije<br><span>Promjena i nagib</span></h1>
    <p class="hero-sub">Kako funkcija raste, pada i gdje se lomi njezino ponašanje — tangenta, monotonost, ekstremi i optimizacija</p>
    <div class="hero-meta"><span class="hchip b">5 tema</span><span class="hchip a">⭐ Jedno od najvažnijih poglavlja mature</span><span class="hchip c">~55 min</span></div>
    <div class="pt"><div class="pb" style="width:82%"></div></div>
  </div>
  <div class="tags">
    <span class="pill p-b">Definicija derivacije</span><span class="pill p-c">Pravila deriviranja</span>
    <span class="pill p-i">Tangenta i normala</span><span class="pill p-a">Monotonost i ekstremi</span>
    <span class="pill p-v">Optimizacija</span><span class="pill p-r">Najčešće NCVVO zamke</span>
  </div>
  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int"><div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">Derivacija je tema u kojoj se algebra pretvara u <em>analizu ponašanja funkcije</em>. Ne računaš više samo izraz — gledaš gdje funkcija raste, gdje pada, gdje ima vrh, dno ili vodoravnu tangentu.<br><br>Na maturi se derivacije često pojavljuju u tri oblika: <strong>izračunaj derivaciju</strong>, <strong>odredi tangentu</strong> i <strong>nađi maksimume/minimume</strong>. Ako znaš čitati znak derivacije, pola zadatka je već riješeno.<br><br><strong>Najveća greška:</strong> učenik izvede derivaciju točno, ali ne zna što s njom dalje. Derivacija nije cilj — derivacija je alat.</div>
  </div>
  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">Δy/Δx</div><div class="sc-name">Ideja</div><div class="sc-desc">Derivacija mjeri trenutačnu promjenu i nagib tangente.</div></div>
    <div class="sc"><div class="sc-ico si-c">xⁿ</div><div class="sc-name">Osnovno pravilo</div><div class="sc-desc">(xⁿ)' = n·xⁿ⁻¹. Eksponent siđe dolje i smanji se za 1.</div></div>
    <div class="sc"><div class="sc-ico si-i">f+g</div><div class="sc-name">Zbroj i razlika</div><div class="sc-desc">(f±g)'=f'±g'. Deriviraš član po član.</div></div>
    <div class="sc"><div class="sc-ico si-a">fg</div><div class="sc-name">Produkt</div><div class="sc-desc">(fg)' = f'g + fg'. Ne deriviraš "oba odjednom".</div></div>
    <div class="sc"><div class="sc-ico si-v">f/g</div><div class="sc-name">Kvocijent</div><div class="sc-desc">(<span class="frac"><span class="num">f</span><span class="den">g</span></span>)' = (f'g-fg')/g². Minus u brojniku je česta zamka.</div></div>
    <div class="sc"><div class="sc-ico si-r">f′=0</div><div class="sc-name">Ekstremi</div><div class="sc-desc">Stacionarna točka je kandidat za maksimum ili minimum.</div></div>
  </div>
  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">Definicija</div><div class="cv">f′(x)=lim<code>h→0</code> [f(x+h)-f(x)]/h — formalna definicija derivacije.</div></div>
    <div class="cr"><div class="ck c">Tangenta</div><div class="cv">Nagib tangente u točki x₀ je <code>f′(x₀)</code>. Jednadžba: <code>y-y₀=f′(x₀)(x-x₀)</code>.</div></div>
    <div class="cr"><div class="ck i">Monotonost</div><div class="cv">Ako je <code>f′(x)&gt;0</code>, funkcija raste. Ako je <code>f′(x)&lt;0</code>, funkcija pada.</div></div>
    <div class="cr"><div class="ck a">Ekstrem</div><div class="cv">Najprije riješiš <code>f′(x)=0</code>, a zatim ispitaš promjenu predznaka derivacije.</div></div>
    <div class="cr"><div class="ck v">Produkt / kvocijent</div><div class="cv">Kod umnoška i razlomka moraš koristiti pravilo — ne smiješ derivirati "preko crtice".</div></div>
    <div class="cr"><div class="ck r">Zamka</div><div class="cv"><code>(x²)'</code> nije <code>x</code>, nego <code>2x</code>. Također, <code>(<span class="frac"><span class="num">1</span><span class="den">x</span></span>)'=-1/x²</code>.</div></div>
  </div>
  <div class="nav-row"><span class="nb" onclick="sw(1)">Uči detaljno →</span><span class="nb primary" onclick="sw(2)">Vježbaj →</span></div>
</div>
<!-- ═══ L1 ═══ -->
<div class="layer" id="l1">

<!-- 01 DEFINICIJA I INTUICIJA -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · ŠTO DERIVACIJA STVARNO ZNAČI</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — od sekante do tangente</div>
  <div class="box-int-txt">Ako uzmeš dvije bliske točke na grafu, dobiješ <em>sekantu</em>. Njezin nagib je prosječna promjena. Kad te dvije točke "stisneš" jednu uz drugu, sekanta prelazi u <strong>tangentu</strong> — a njezin nagib postaje derivacija.<br><br>Drugim riječima: derivacija mjeri <strong>trenutačnu brzinu promjene</strong>. U fizici je to brzina, u ekonomiji marginalni porast, a u matematici alat za proučavanje funkcije.<br><br><strong>Formula izgleda strašno, ali ideja je jednostavna: koliko se y promijeni kad se x jako malo promijeni.</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">DEFINICIJA DERIVACIJE</span>
  <span class="val">f′(x)=lim<sub>h→0</sub> [f(x+h)-f(x)] / h</span><br>
  <span class="cmt">To je granična vrijednost kvocijenta razlika — prosječna promjena prelazi u trenutačnu promjenu.</span>
</div>
<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — derivacija kao brzinomjer</div>
  <div class="box-men-txt">Ako je funkcija <strong>put</strong>, derivacija je <strong>brzina</strong>. Kad je brzina pozitivna, ideš naprijed. Kad je negativna, vraćaš se. Kad je 0, u tom trenutku "stojiš" — to često znači vrh ili dno funkcije.</div>
</div>
<div class="sr" id="sr1">
  <div class="sr-head"><div class="sr-title">Definicija na jednostavnom primjeru</div><div class="sr-task">Za f(x)=x² iz definicije izvedi f′(x).</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr1s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Uvrsti u definiciju</div><div class="sr-txt">f(x+h)=(x+h)²=x²+2xh+h² pa je brojnik: <strong>x²+2xh+h²-x²</strong></div></div></div></div>
    <div class="sr-step" id="sr1s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Skrati</div><div class="sr-txt">[2xh+h²]/h = <strong>2x+h</strong></div></div></div></div>
    <div class="sr-step" id="sr1s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Pusti h → 0</div><div class="sr-txt">lim(2x+h)=<strong>2x</strong>. Dakle <strong>f′(x)=2x</strong>.
      <div class="sr-tryit"><div class="sr-try-lbl">↳ Ako je f(x)=x³, derivacija je?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try1" type="text" placeholder="f′(x)=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try1','try1-fb','3x²','d1')">Provjeri</button></div>
        <div class="sr-try-fb" id="try1-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr1',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr1',3)">↺ Resetiraj</button><span class="sr-prog" id="sr1p">0 / 3</span></div>
</div>
<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — što je derivacija?</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik kaže: "Derivacija je samo još jedan novi izraz bez značenja."</p>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno — derivacija nema geometrijsko značenje</div>
    <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Netočno — derivacija je nagib tangente i trenutačna promjena</div>
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Točno — derivacija služi samo za crtanje funkcija</div>
  </div><div class="bug-expl" id="b1e"></div>
</div></div>
<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — definicija</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>Derivacija = trenutačna promjena</li>
  <li class="b20-item"><div class="b20-dot"></div>Geometrijski: nagib tangente</li>
  <li class="b20-item"><div class="b20-dot"></div>Za x² vrijedi: f′(x)=2x</li>
</ul></div>
<div class="inline-cp" id="icp1">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — definicija</span><span class="icp-score" id="icp1-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp1q1"><div class="icp-q-text">Derivacija geometrijski predstavlja:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">nagib tangente</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">površinu ispod grafa</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">presjek s osi y</div>
    </div><div class="icp-fb" id="icp1q1fb"></div></div>
    <div class="icp-q" id="icp1q2"><div class="icp-q-text">Ako je f′(x)&gt;0, funkcija:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">raste</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">pada</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">ima minimum</div>
    </div><div class="icp-fb" id="icp1q2fb"></div></div>
    <div class="icp-q" id="icp1q3"><div class="icp-q-text">Derivacija funkcije x² je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">x</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">2x</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">2</div>
    </div><div class="icp-fb" id="icp1q3fb"></div></div>
    <div class="icp-done" id="icp1-done">✓ Odlično! Idemo na pravila deriviranja.</div>
    <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
  </div>
</div>

<!-- 02 PRAVILA DERIVIRANJA -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · PRAVILA DERIVIRANJA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — ne moraš svaki put ići iz definicije</div>
  <div class="box-int-txt">Na maturi derivaciju gotovo nikad ne izvodiš iz definicije do kraja. Umjesto toga koristiš <strong>pravila deriviranja</strong>. Najvažnije je pravilo za potenciju, a zatim zbroj, produkt i kvocijent.<br><br>Kad vidiš polinom, ideš član po član. Kad vidiš umnožak dviju funkcija, pali se pravilo za produkt. Kad vidiš razlomak funkcija, pali se kvocijentno pravilo.<br><br><strong>Ključno je prvo prepoznati tip izraza, pa tek onda derivirati.</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">NAJVAŽNIJA PRAVILA</span>
  <span class="val">(c)' = 0</span><br>
  <span class="val">(xⁿ)' = n·xⁿ⁻¹</span><br>
  <span class="val">(f±g)' = f'±g'</span><br>
  <span class="val">(fg)' = f'g + fg'</span><br>
  <span class="val">(<span class="frac"><span class="num">f</span><span class="den">g</span></span>)' = (f'g-fg') / g²</span><br>
  <span class="cmt">Eksponent dolazi dolje, umnožak traži dva člana, a kvocijent u brojniku ima minus.</span>
</div>
<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Polinom</div><div class="cmp-body">
    <div class="cmp-row"><b>f(x)=3x⁴-2x²+7x-5</b> ideš član po član</div>
    <div class="cmp-row">f′(x)=12x³-4x+7</div>
    <div class="cmp-row">Konstanta nestaje</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Produkt / kvocijent</div><div class="cmp-body">
    <div class="cmp-row"><b>(x²)(x+1)</b> → produkt</div>
    <div class="cmp-row"><b>(x²+1)/(x-2)</b> → kvocijent</div>
    <div class="cmp-row">Najčešća greška: zaboravljen drugi član</div>
  </div></div>
</div>
<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — check-list prije deriviranja</div>
  <div class="box-men-txt">1. Je li izraz polinom? 2. Ima li umnožak? 3. Ima li razlomak? 4. Možeš li prije pojednostavniti?<br><strong>Jedna sekunda prepoznavanja često spasi bodove.</strong></div>
</div>
<div class="sr" id="sr2">
  <div class="sr-head"><div class="sr-title">Polinom — korak po korak</div><div class="sr-task">Deriviraj f(x)=4x³-5x²+2x-9.</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr2s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Deriviraj svaki član</div><div class="sr-txt">(4x³)'=12x², (-5x²)'=-10x, (2x)'=2, (-9)'=0</div></div></div></div>
    <div class="sr-step" id="sr2s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Spoji rezultat</div><div class="sr-txt">f′(x)=<strong>12x²-10x+2</strong></div></div></div></div>
    <div class="sr-step" id="sr2s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Brza provjera</div><div class="sr-txt">Stupanj se smanjio za 1 — to je dobar znak kod polinoma.
      <div class="sr-tryit"><div class="sr-try-lbl">↳ Derivacija 7x⁵ je?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try2" type="text" placeholder="f′(x)=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try2','try2-fb','35x⁴','d2')">Provjeri</button></div>
        <div class="sr-try-fb" id="try2-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr2',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr2',3)">↺ Resetiraj</button><span class="sr-prog" id="sr2p">0 / 3</span></div>
</div>
<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — kvocijentno pravilo</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik tvrdi da je derivacija <code>(x+1)/(x-2)</code> jednaka <code>1/1</code>.</p>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno — derivira se brojnik i nazivnik odvojeno</div>
    <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Netočno — moraš koristiti kvocijentno pravilo</div>
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Točno — rezultat je uvijek 1 ako su obje derivacije 1</div>
  </div><div class="bug-expl" id="b2e"></div>
</div></div>
<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — pravila</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>(xⁿ)' = n·xⁿ⁻¹</li>
  <li class="b20-item"><div class="b20-dot"></div>(fg)' = f'g + fg'</li>
  <li class="b20-item"><div class="b20-dot"></div>(<span class="frac"><span class="num">f</span><span class="den">g</span></span>)' = (f'g-fg')/g²</li>
</ul></div>
<div class="inline-cp" id="icp2">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — pravila deriviranja</span><span class="icp-score" id="icp2-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp2q1"><div class="icp-q-text">Derivacija od x⁵ je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">5x⁵</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">5x⁴</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">x⁴</div>
    </div><div class="icp-fb" id="icp2q1fb"></div></div>
    <div class="icp-q" id="icp2q2"><div class="icp-q-text">Derivacija konstante 12 je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">12</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">0</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">1</div>
    </div><div class="icp-fb" id="icp2q2fb"></div></div>
    <div class="icp-q" id="icp2q3"><div class="icp-q-text">Kod produkta fg vrijedi:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">(fg)'=f'g'</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">(fg)'=f'g+fg'</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">(fg)'=fg</div>
    </div><div class="icp-fb" id="icp2q3fb"></div></div>
    <div class="icp-done" id="icp2-done">✓ Super! Sada ide tangenta i interpretacija.</div>
    <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
  </div>
</div>

<!-- 03 TANGENTA, MONOTONOST, EKSTREMI -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · TANGENTA, MONOTONOST I EKSTREMI</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — što radi funkcija?</div>
  <div class="box-int-txt">Kad izračunaš derivaciju, tek tad kreće zanimljivi dio. Iz <strong>znaka derivacije</strong> čitaš raste li funkcija ili pada. Iz jednadžbe <strong>f′(x)=0</strong> dobivaš kandidate za ekstrem. A iz vrijednosti <strong>f′(x₀)</strong> dobivaš nagib tangente u određenoj točki.<br><br>To je razlog zašto je derivacija toliko moćna: jednim izrazom dobiješ informaciju o <strong>lokalnom ponašanju cijele funkcije</strong>.</div>
</div>
<div class="box-for"><span class="box-for-lbl">NAJVAŽNIJE VEZE</span>
  <span class="val">f′(x)&gt;0 → funkcija raste</span><br>
  <span class="val">f′(x)&lt;0 → funkcija pada</span><br>
  <span class="val">f′(x)=0 → kandidat za ekstrem</span><br>
  <span class="val">Tangenta u x₀: y-y₀=f′(x₀)(x-x₀)</span><br>
  <span class="cmt">Nije svaka točka s f′=0 automatski maksimum ili minimum — trebaš provjeriti promjenu predznaka.</span>
</div>
<div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Kalkulator tangente</span></div>
  <div class="disc-body">
    <div class="disc-row" style="flex-wrap:wrap;gap:6px">
      <span class="disc-lbl">Za f(x)=x², uzmi x₀=</span><input class="disc-in" id="tan-x0" type="number" value="2" style="width:70px">
      <button class="disc-btn" onclick="calcTangenta()">Izračunaj →</button>
    </div>
    <div class="disc-result" id="tan-result">Upiši x₀ i klikni Izračunaj</div>
  </div>
</div>
<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Ako derivacija mijenja znak</div><div class="cmp-body">
    <div class="cmp-row"><b>+ → -</b> lokalni maksimum</div>
    <div class="cmp-row"><b>- → +</b> lokalni minimum</div>
    <div class="cmp-row"><b>bez promjene</b> nije ekstrem</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Tangenta</div><div class="cmp-body">
    <div class="cmp-row"><b>Nagib</b> = f′(x₀)</div>
    <div class="cmp-row"><b>Točka</b> = (x₀, f(x₀))</div>
    <div class="cmp-row"><b>Jednadžba</b> y-y₀=m(x-x₀)</div>
  </div></div>
</div>
<div class="sr" id="sr3">
  <div class="sr-head"><div class="sr-title">Ekstrem — korak po korak</div><div class="sr-task">Nađi ekstrem funkcije f(x)=x²-4x+1.</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr3s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Izvedi derivaciju</div><div class="sr-txt">f′(x)=<strong>2x-4</strong></div></div></div></div>
    <div class="sr-step" id="sr3s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Riješi f′(x)=0</div><div class="sr-txt">2x-4=0 → <strong>x=2</strong></div></div></div></div>
    <div class="sr-step" id="sr3s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Odredi vrijednost funkcije</div><div class="sr-txt">f(2)=4-8+1=<strong>-3</strong>. Budući da parabola ide prema gore, to je lokalni minimum u točki <strong>(2,-3)</strong>.
      <div class="sr-tryit"><div class="sr-try-lbl">↳ Za f(x)=x²-6x, stacionarna x-koordinata je?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try3" type="text" placeholder="x=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try3','try3-fb','3','d3')">Provjeri</button></div>
        <div class="sr-try-fb" id="try3-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr3',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr3',3)">↺ Resetiraj</button><span class="sr-prog" id="sr3p">0 / 3</span></div>
</div>
<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — ekstrem</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik kaže: "Ako je f′(x)=0, to je uvijek maksimum."</p>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno — nula znači vrh</div>
    <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Netočno — može biti maksimum, minimum ili ništa</div>
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Točno — nula znači minimum</div>
  </div><div class="bug-expl" id="b3e"></div>
</div></div>
<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — infleksija vs ekstrem</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik analizira f(x)=x³ u točki x=0:</p>
  <div class="bug-task">f′(0)=0 → x=0 je <span class="wrong">ekstrem</span></div>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">A) Točno — nula derivacije znači ekstrem</div>
    <div class="bug-opt" onclick="bug(this,'b4',true,'b4e')">B) Greška: f′(x)=3x²≥0 svugdje, predznak se ne mijenja → x=0 je infleksija, ne ekstrem!</div>
    <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">C) Greška: x=0 je minimum jer f(0)=0</div>
    <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">D) Greška: f(x)=x³ nema stacionarne točke</div>
  </div><div class="bug-expl" id="b4e"></div>
</div></div>
<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — interpretacija</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>f′&gt;0 → raste</li>
  <li class="b20-item"><div class="b20-dot"></div>f′&lt;0 → pada</li>
  <li class="b20-item"><div class="b20-dot"></div>f′=0 → kandidat za ekstrem</li>
</ul></div>

<!-- RIJEŠENI PRIMJER — TABLICA PREDZNAKA (uvijek vidljivo) -->
<div class="combo">
  <div class="combo-head"><div class="combo-badge">MATURA ALGORITAM — tablica predznaka f′(x) za ekstremi</div></div>
  <div class="combo-body">
    <div class="combo-task">Nađi lokalne ekstremi f(x) = x³ − 3x² i klasificiraj ih tablicm predznaka.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt"><strong>Deriviraj:</strong> f′(x) = 3x² − 6x = 3x(x − 2) &nbsp;→&nbsp; nultočke: <strong>x = 0</strong> i <strong>x = 2</strong></div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt"><strong>Tablica predznaka</strong> (uzmi testne točke x = −1, 1, 3):<br>
        <table style="font-size:12px;border-collapse:collapse;margin:8px 0;width:100%">
          <tr><th style="padding:3px 8px;border:1px solid var(--bd);background:var(--inp)">x</th><th style="padding:3px 8px;border:1px solid var(--bd);background:var(--inp)">(−∞, 0)</th><th style="padding:3px 8px;border:1px solid var(--bd);background:var(--inp)">0</th><th style="padding:3px 8px;border:1px solid var(--bd);background:var(--inp)">(0, 2)</th><th style="padding:3px 8px;border:1px solid var(--bd);background:var(--inp)">2</th><th style="padding:3px 8px;border:1px solid var(--bd);background:var(--inp)">(2, +∞)</th></tr>
          <tr><td style="padding:3px 8px;border:1px solid var(--bd)">f′(x)</td><td style="padding:3px 8px;border:1px solid var(--bd);color:var(--green)">+</td><td style="padding:3px 8px;border:1px solid var(--bd)">0</td><td style="padding:3px 8px;border:1px solid var(--bd);color:var(--red)">−</td><td style="padding:3px 8px;border:1px solid var(--bd)">0</td><td style="padding:3px 8px;border:1px solid var(--bd);color:var(--green)">+</td></tr>
          <tr><td style="padding:3px 8px;border:1px solid var(--bd)">f(x)</td><td style="padding:3px 8px;border:1px solid var(--bd)">↗</td><td style="padding:3px 8px;border:1px solid var(--bd);color:var(--gold)">MAX</td><td style="padding:3px 8px;border:1px solid var(--bd)">↘</td><td style="padding:3px 8px;border:1px solid var(--bd);color:var(--blue)">min</td><td style="padding:3px 8px;border:1px solid var(--bd)">↗</td></tr>
        </table>
        Provjera: f′(−1) = 3·1+6 = 9 &gt; 0 ✓ &nbsp; f′(1) = 3−6 = −3 &lt; 0 ✓ &nbsp; f′(3) = 27−18 = 9 &gt; 0 ✓</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt"><strong>Klasificirај:</strong> x=0: f′ mijenja + → − → <span style="color:var(--gold)">lokalni MAKSIMUM</span> · f(0) = <strong>0</strong><br>x=2: f′ mijenja − → + → <span style="color:var(--blue)">lokalni MINIMUM</span> · f(2) = 8−12 = <strong>−4</strong></div></div>
      <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt"><strong>Pravilo koje uvijek radi:</strong><br>
        <span style="color:var(--green)">+</span> → 0 → <span style="color:var(--red)">−</span> &nbsp; lokalni MAKSIMUM &nbsp;|&nbsp;
        <span style="color:var(--red)">−</span> → 0 → <span style="color:var(--green)">+</span> &nbsp; lokalni MINIMUM &nbsp;|&nbsp;
        isti predznak → <strong>infleksija</strong> (nije ekstrem!)</div></div>
    </div>
    <div class="combo-ans">Maks u (0, 0) · Min u (2, −4) &nbsp;·&nbsp; Tablicа predznaka radi za SVAKU f(x), ne samo parabole!</div>
  </div>
</div>

<div class="inline-cp" id="icp3">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — tangenta i ekstremi</span><span class="icp-score" id="icp3-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp3q1"><div class="icp-q-text">Ako je f′(x)&lt;0 na intervalu, funkcija:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">raste</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">pada</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">ima maksimum</div>
    </div><div class="icp-fb" id="icp3q1fb"></div></div>
    <div class="icp-q" id="icp3q2"><div class="icp-q-text">Za f(x)=x²-4x+1 stacionarna točka ima x=</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">1</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">2</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">4</div>
    </div><div class="icp-fb" id="icp3q2fb"></div></div>
    <div class="icp-q" id="icp3q3"><div class="icp-q-text">Nagib tangente u točki x₀ jednak je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">f′(x₀)</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">f(x₀)</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">0 uvijek</div>
    </div><div class="icp-fb" id="icp3q3fb"></div></div>
    <div class="icp-done" id="icp3-done">✓ Odlično! Sad možeš na kombinirane zadatke.</div>
    <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
  </div>
</div>

<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>
<div class="combo"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — tangenta</div></div><div class="combo-body">
  <div class="combo-task">Odredi jednadžbu tangente na graf funkcije f(x)=x² u točki x₀=1.</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">f′(x)=2x pa je nagib u x₀=1: <strong>m=f′(1)=2</strong></div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Točka na grafu je (1,f(1))=(1,1)</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Tangenta: y-1=2(x-1) → <strong>y=2x-1</strong></div></div>
  </div><div class="combo-ans">Tangenta: y=2x-1</div>
</div></div>
<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — maksimum/minimum</div></div><div class="combo-body">
  <div class="combo-task">Nađi ekstrem funkcije f(x)=-x²+4x+5.</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">f′(x)=-2x+4</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">-2x+4=0 → x=2</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">f(2)=-4+8+5=9. Kako parabola ide prema dolje, to je <strong>maksimum</strong>.</div></div>
  </div><div class="combo-ans">Maksimum u točki (2,9)</div>
</div></div>
<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — optimizacija</div></div><div class="combo-body">
  <div class="combo-task">Pravokutnik ima opseg 20. Za koje stranice ima najveću površinu?</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Ako su stranice x i y, vrijedi 2x+2y=20 → y=10-x</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Površina A(x)=x(10-x)=10x-x²</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">A′(x)=10-2x=0 → x=5 pa je i y=5. Najveću površinu ima <strong>kvadrat</strong>.</div></div>
  </div><div class="combo-ans">Najveća površina za stranice 5 i 5</div>
</div></div>
<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A4 — monotonost i infleksija</div></div><div class="combo-body">
  <div class="combo-task">f(x) = x³ − 3x. Nađi intervale monotonosti i točku infleksije.</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">f′(x)=3x²−3=3(x−1)(x+1)=0 → kritične točke: <strong>x=−1</strong> i <strong>x=1</strong></div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Predznak f′: (+) za x&lt;−1 → rastuća · (−) za −1&lt;x&lt;1 → padajuća · (+) za x&gt;1 → rastuća</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">f″(x)=6x=0 → x=0. Predznak f″ mijenja se u x=0 → <strong>infleksija u (0, 0)</strong></div></div>
  </div><div class="combo-ans">Rastuća: (−∞,−1) ∪ (1,+∞) · Padajuća: (−1,1) · Infleksija: (0, 0)</div>
</div></div>

<div class="drill"><div class="drill-head"><span class="drill-title">// Brzi refleks — Točno ili Netočno?</span><span class="drill-score" id="dr-sc">0 / 0</span></div>
  <div class="drill-body">
    <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
    <div class="drill-q" id="dr-q">Derivacija funkcije x² je 2x</div>
    <div class="drill-opts"><div class="drill-opt" onclick="drill(this,true)">✓ Točno</div><div class="drill-opt" onclick="drill(this,false)">✗ Netočno</div></div>
    <div class="drill-fb" id="dr-fb"></div>
    <div class="drill-ctrl"><button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeće →</button></div>
    <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
  </div>
</div>

<div class="ncvvo-real"><div class="ncvvo-real-hd">📊 stvarni tipovi zadataka — gdje učenici gube bodove</div><div class="ncvvo-real-body">
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Polinom · ~45% netočnih<span class="ncvvo-live-stat neutral" id="nlive-pol">polinom</span></div>
    <div class="ncvvo-real-q">Deriviraj f(x)=3x⁴-2x+7.</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>konstantu 7 ne ostave na 0, nego je prepisuju dalje</strong>.</div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">f′(x)=12x³-2. Konstanta nestaje.</div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Tangenta · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-tan">tangenta</span></div>
    <div class="ncvvo-real-q">Odredi tangentu na f(x)=x² u točki x₀=2.</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>nađu nagib, ali zaborave točku na grafu</strong>.</div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">f′(x)=2x, pa je m=f′(2)=4. Točka je (2,4). Tangenta: y-4=4(x-2) → y=4x-4.</div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Ekstrem · ~55% netočnih<span class="ncvvo-live-stat neutral" id="nlive-ext">ekstrem</span></div>
    <div class="ncvvo-real-q">Nađi lokalni minimum funkcije f(x)=x²-6x+8.</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>riješe f′(x)=0, ali ne izračunaju vrijednost funkcije u toj točki</strong>.</div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">f′(x)=2x-6=0 → x=3. f(3)=9-18+8=-1. Minimum je u točki (3,-1).</div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Optimizacija · ~60% netočnih<span class="ncvvo-live-stat neutral" id="nlive-opt">optimizacija</span></div>
    <div class="ncvvo-real-q">Pravokutnik opsega 24 ima najveću površinu kad je:</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>ne izraze jednu varijablu preko druge prije deriviranja</strong>.</div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">Za opseg 24 vrijedi x+y=12. Površina A=x(12-x). A′=12-2x=0 → x=6, y=6. Najveća površina kad je kvadrat.</div>
  </div>
</div></div>

<div class="checkpoint" id="cp"><div class="cp-head"><span class="cp-icon">✅</span><div><div class="cp-title">Checkpoint — jesi li spreman?</div><div class="cp-sub">Potvrdi što znaš</div></div></div>
  <ul class="cp-list">
    <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>Znam osnovno pravilo: (xⁿ)' = n·xⁿ⁻¹</li>
    <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>Znam razliku između polinoma, produkta i kvocijenta</li>
    <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>Znam odrediti tangentu u zadanoj točki</li>
    <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>Znam riješiti f′(x)=0 i naći ekstrem</li>
    <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Znam ideju optimizacije pomoću derivacije</li>
  </ul>
  <div class="cp-footer"><span id="cp-txt">0 / 5 potvrđeno</span><span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za Poglavlje 18!</span></div>
</div>
<div class="matura-block"><div class="matura-hd">⭐ matura fokus</div><ul class="matura-list">
  <li class="mi"><div class="mi-dot"></div><span><b>Polinom:</b> prvo savladaj brzo i sigurno deriviranje član po član.</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>Tangenta:</b> trebaš i nagib i točku.</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>Ekstrem:</b> nije dovoljno samo riješiti f′(x)=0 — trebaš interpretaciju.</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>Optimizacija:</b> najprije izrazi funkciju jedne varijable, tek onda deriviraj.</span></li>
</ul></div>
<div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Gdje ćeš ovo koristiti?</div><div class="cn-sub">P17 se nadovezuje na 4 poglavlja</div></div></div>
  <div class="cn-grid">
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge b">P16</span><span class="cn-item-title">Granice</span></div><div class="cn-item-desc">Definicija derivacije koristi granicu kvocijenta razlika.</div><div class="cn-item-arrow">→ teorijska baza derivacije</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P06</span><span class="cn-item-title">Funkcija</span></div><div class="cn-item-desc">Derivacijom proučavaš ponašanje funkcije, graf i promjenu.</div><div class="cn-item-arrow">→ analiza funkcije</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P18</span><span class="cn-item-title">Integrali</span></div><div class="cn-item-desc">Integral je obrnuta priča — ono što derivacija rastavlja, integral vraća natrag.</div><div class="cn-item-arrow">→ velika veza kalkulusa</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P19</span><span class="cn-item-title">Složeni zadaci</span></div><div class="cn-item-desc">Optimizacija i tangente često se pojavljuju u kombiniranim zadacima.</div><div class="cn-item-arrow">→ primjena na maturi</div></div>
  </div>
</div>

<div class="slbl" style="margin-top:28px">// ncvvo anti-primjeri — najčešće greške u derivacijama</div>
<div class="anti-wrap">
  <div class="anti-hdr">❌ 3 greške koje najčešće koštaju bodova</div>
  <div class="anti-item">
    <div><div class="anti-badge ng">GREŠKA 01 · lančano pravilo</div></div>
    <div class="anti-wrong">f(x) = (3x+1)⁵ → učenik piše: f'(x) = 5(3x+1)⁴ (zaboravlja množiti s derivacijom unutarnje).</div>
    <div class="anti-why">⚠ Pravilo lanca: (g(h(x)))' = g'(h(x)) · h'(x). Uvijek množiš s derivacijom unutarnje funkcije!</div>
    <div><div class="anti-badge ok">TOČNO</div></div>
    <div class="anti-right">f'(x) = 5(3x+1)⁴ · 3 = 15(3x+1)⁴.</div>
  </div>
  <div class="anti-item">
    <div><div class="anti-badge ng">GREŠKA 02 · derivacija produkta</div></div>
    <div class="anti-wrong">h(x) = x²·sin(x) → učenik piše: h'(x) = 2x·cos(x) (derivira oba faktora zasebno i množi).</div>
    <div class="anti-why">⚠ (u·v)' = u'v + uv'. Ne možeš derivirati faktore zasebno i množiti — to je česta i skupa greška!</div>
    <div><div class="anti-badge ok">TOČNO</div></div>
    <div class="anti-right">h'(x) = (x²)'·sin(x) + x²·(sin(x))' = 2x·sin(x) + x²·cos(x).</div>
  </div>
  <div class="anti-item">
    <div><div class="anti-badge ng">GREŠKA 03 · ekstrem vs. stacionarna točka</div></div>
    <div class="anti-wrong">f'(x₀)=0 → učenik odmah zaključuje "x₀ je lokalni ekstrem" bez provjere predznaka.</div>
    <div class="anti-why">⚠ f'(x₀)=0 znači samo da je x₀ stacionarna točka. Može biti infleksija sa horizontalnom tangentom!</div>
    <div><div class="anti-badge ok">TOČNO</div></div>
    <div class="anti-right">Provjeri predznak f' s obje strane x₀: mijenja li se + → − (max) ili − → + (min) ili ostaje isti (infleksija).</div>
  </div>
</div>

<div class="nav-row"><span class="nb" onclick="sw(0)">← Pregled</span><span class="nb primary" onclick="sw(2)">Vježbaj →</span></div>
</div>
<!-- ═══ L2 ═══ -->
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
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · polinom</div><div class="fitb-sent">Derivacija funkcije x³ je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="f′(x)=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','3x²','f1')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · tangenta</div><div class="fitb-sent">Za f(x)=x² vrijedi f′(2)= ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="m=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','4','f2')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · ekstrem</div><div class="fitb-sent">Za f(x)=x²-6x stacionarna x-koordinata je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="x=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','3','f3')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · konstanta</div><div class="fitb-sent">Derivacija konstante 9 je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="f′(x)=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','0','f4')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>
  <!-- sr4 — sign table method: what to do AFTER f'(x)=0 -->
  <div class="sr" id="sr4" style="margin-top:11px">
    <div class="sr-head">
      <div class="sr-title">Riješeni primjer — tablica predznaka f′(x) → klasifikacija ekstrema</div>
      <div class="sr-task">Nañi lokalni ekstrem funkcije f(x) = x³ − 3x + 2 i odredi radi li se o maksimumu ili minimumu.</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr4s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Deriviraj i postavi f′(x) = 0</div>
            <div class="sr-txt">f′(x) = 3x² − 3 = 3(x−1)(x+1)<br>f′(x) = 0 → <strong>x₁ = −1, &nbsp; x₂ = 1</strong><br><em>Ovo su kandidati za ekstrem — još ne znamo jesu li to max ili min!</em></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Napravi tablicu predznaka f′(x)</div>
            <div class="sr-txt">
              <table style="font-size:12px;border-collapse:collapse;margin:6px 0">
                <tr><th style="padding:2px 8px;border:1px solid var(--bd)">x</th><th style="padding:2px 8px;border:1px solid var(--bd)">−∞</th><th style="padding:2px 8px;border:1px solid var(--bd)">−1</th><th style="padding:2px 8px;border:1px solid var(--bd)">1</th><th style="padding:2px 8px;border:1px solid var(--bd)">+∞</th></tr>
                <tr><td style="padding:2px 8px;border:1px solid var(--bd)">f′(x)</td><td style="padding:2px 8px;border:1px solid var(--bd)">+</td><td style="padding:2px 8px;border:1px solid var(--bd)">0</td><td style="padding:2px 8px;border:1px solid var(--bd)">−</td><td style="padding:2px 8px;border:1px solid var(--bd)">0</td><td style="padding:2px 8px;border:1px solid var(--bd)">+</td></tr>
                <tr><td style="padding:2px 8px;border:1px solid var(--bd)">f(x)</td><td style="padding:2px 8px;border:1px solid var(--bd)">↗</td><td style="padding:2px 8px;border:1px solid var(--bd)">max</td><td style="padding:2px 8px;border:1px solid var(--bd)">↘</td><td style="padding:2px 8px;border:1px solid var(--bd)">min</td><td style="padding:2px 8px;border:1px solid var(--bd)">↗</td></tr>
              </table>
              <em>Provjeri predznak lijevog susjedstva: f′(−2) = 3·4−3 = 9 &gt; 0 ✓ &nbsp; f′(0) = −3 &lt; 0 ✓ &nbsp; f′(2) = 9 &gt; 0 ✓</em>
            </div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Očitaj klasifikaciju i izračunaj vrijednost</div>
            <div class="sr-txt">
              <strong>x = −1:</strong> f′ mijenja + → − → <span style="color:var(--gold)">lokalni MAKSIMUM</span><br>
              f(−1) = −1 + 3 + 2 = <strong>4</strong> &nbsp; → &nbsp; lokalni max u <strong>(−1, 4)</strong><br><br>
              <strong>x = 1:</strong> f′ mijenja − → + → <span style="color:var(--blue)">lokalni MINIMUM</span><br>
              f(1) = 1 − 3 + 2 = <strong>0</strong> &nbsp; → &nbsp; lokalni min u <strong>(1, 0)</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s4">
        <div class="sr-step-in">
          <div class="sr-num">4</div>
          <div class="sr-body">
            <div class="sr-stitle">Pravilo koje uvijek radi (ne samo za parabole!)</div>
            <div class="sr-txt">
              <span class="val">+ → 0 → −</span> &nbsp; lokalni <strong>MAKSIMUM</strong><br>
              <span class="val">− → 0 → +</span> &nbsp; lokalni <strong>MINIMUM</strong><br>
              <span class="val">isti predznak</span> &nbsp; <strong>nije ekstrem</strong> (infleksija)<br>
              <em>Tablica predznaka radi za SVAKU funkciju — za parabolu vrijedi uvijek, ali za kubnu i složenije moras ju provjeriti.</em>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr4',4)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr4',4)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr4p">0 / 4</span>
    </div>
  </div>

  <div class="box-warn">
    <span class="bw-ico">⚡</span>
    <div class="bw-body">
      <div class="bw-title">MATURA LOGIKA — ekstremi derivacijom</div>
      <div class="bw-txt">
        <strong>Algoritam (3 koraka):</strong><br>
        1. Izračunaj f'(x) i postavi f'(x) = 0 → nađi kritične točke x₀<br>
        2. Napravi tablicu predznaka f'(x) lijevo i desno od x₀:<br>
        &nbsp;&nbsp;• (−) → (+): lokalni <strong>minimum</strong><br>
        &nbsp;&nbsp;• (+) → (−): lokalni <strong>maksimum</strong><br>
        &nbsp;&nbsp;• isti predznak: <strong>infleksija</strong> (nije ekstrem!)<br>
        3. Vrijednost ekstrema: f(x₀)
      </div>
    </div>
  </div>
  <div class="nav-row"><span class="nb" onclick="sw(1)">← Uči</span><button onclick="navigateChapter('p18')" class="nb primary">Sljedeće poglavlje →</button></div>
</div>
</div></main></div>`;
const js = `function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}
function toggleSidebar(){var s=document.getElementById('sidebar');var o=document.getElementById('overlay');var open=s.classList.toggle('mobile-open');o.classList.toggle('show',open);}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}
var tabProgress=[82,86,94];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i);});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i);});
  var p=tabProgress[i];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p17_tab',i);}catch(e){}
}
function calcTangenta(){
  var x0=parseFloat(document.getElementById('tan-x0').value),res=document.getElementById('tan-result');
  if(isNaN(x0)){res.innerHTML='<span style="color:var(--red)">Upiši broj.</span>';return;}
  var y0=x0*x0,m=2*x0,b=y0-m*x0;
  var btxt=(b>=0?'+ ':'- ')+Math.abs(Math.round(b*100)/100);
  res.innerHTML='Za f(x)=x²: f′(x)=2x pa je m=f′('+x0+')=<strong>'+m+'</strong>. Točka je <strong>('+x0+','+y0+')</strong>. Tangenta: <strong>y='+m+'x '+(b>=0?'+ ':'- ')+Math.abs(b)+'</strong>';
}
var stepSt={};
function nxtStep(id,tot){if(!stepSt[id])stepSt[id]=0;stepSt[id]=Math.min(stepSt[id]+1,tot);for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}var prog=document.getElementById(id+'p');if(prog)prog.textContent=stepSt[id]+' / '+tot;}
function rstStep(id,tot){stepSt[id]=0;for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}var prog=document.getElementById(id+'p');if(prog)prog.textContent='0 / '+tot;document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb';f.textContent='';});}
var tryExp={d1:'Za x³ vrijedi pravilo potencije: (x³)′=3x².',d2:'Eksponent 5 silazi dolje: (7x⁵)′=7·5x⁴=35x⁴.',d3:'f′(x)=2x-6, pa 2x-6=0 daje x=3.'};
function normMath(s){return s.replace(/\\s/g,'').toLowerCase().replace(/²/g,'^2').replace(/⁴/g,'^4').replace(/π/g,'pi');}
function tryIt(iid,fid,ans,key){var inp=document.getElementById(iid),fb=document.getElementById(fid);var v=inp.value.trim();if(!v)return;inp.disabled=true;var btn=inp.parentElement.querySelector('.sr-try-btn');if(btn)btn.disabled=true;var ok=normMath(v)===normMath(ans);inp.classList.add(ok?'ok':'fail');fb.className='sr-try-fb show '+(ok?'ok':'fail');fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];}
var bugDone={};var bugExp={b1:'✓ Točno! Derivacija ima i geometrijsko i analitičko značenje: nagib tangente i trenutačna promjena.',b2:'✓ Točno! Kod razlomka funkcija moraš koristiti kvocijentno pravilo, ne derivirati brojnik i nazivnik odvojeno "preko crte".',b3:'✓ Točno! f′(x)=0 samo daje stacionarnu točku. Tek analiza znaka ili drugi argument pokazuje je li maksimum, minimum ili ništa.'};
function bug(el,id,ok,eid){if(bugDone[id])return;bugDone[id]=true;el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');});}var expl=document.getElementById(eid);expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];expl.className='bug-expl show '+(ok?'ok':'ng');}
var icpAnswered={};var icpFeedback={
  icp1:{q1:{ok:'✓ Točno! Derivacija geometrijski daje nagib tangente.',ng:'✗ Netočno. Površina ispod grafa je tema integrala, ne derivacije.'},q2:{ok:'✓ Točno! Pozitivna derivacija znači da funkcija raste.',ng:'✗ Netočno. Ako je f′(x)>0, funkcija raste.'},q3:{ok:'✓ Točno! (x²)′=2x.',ng:'✗ Netočno. Po pravilu potencije (x²)′=2x.'}},
  icp2:{q1:{ok:'✓ Točno! Eksponent 5 siđe dolje, ostane x⁴.',ng:'✗ Netočno. (x⁵)′=5x⁴.'},q2:{ok:'✓ Točno! Derivacija konstante je 0.',ng:'✗ Netočno. Svaka konstanta derivira u 0.'},q3:{ok:'✓ Točno! Produkt: (fg)′=f′g+fg′.',ng:'✗ Netočno. Produktno pravilo traži dva člana: f′g + fg′.'}},
  icp3:{q1:{ok:'✓ Točno! Negativna derivacija znači da funkcija pada.',ng:'✗ Netočno. Ako je f′(x)<0, funkcija pada.'},q2:{ok:'✓ Točno! 2x-4=0 daje x=2.',ng:'✗ Netočno. Stacionarna točka dobije se iz 2x-4=0 → x=2.'},q3:{ok:'✓ Točno! Nagib tangente u x₀ je f′(x₀).',ng:'✗ Netočno. f(x₀) je ordinata točke, a ne nagib.'}}
};
function icp(icpId,qId,el,ok,fbId){var key=icpId+'_'+qId;if(icpAnswered[key]!==undefined)return;icpAnswered[key]=ok;el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById(fbId),msgs=icpFeedback[icpId][qId];fb.textContent=ok?msgs.ok:msgs.ng;fb.className='icp-fb show '+(ok?'ok':'ng');var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});if(allDone){document.getElementById(icpId+'-done').classList.add('show');document.getElementById(icpId+'-retry').classList.add('show');var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;document.getElementById(icpId+'-sc').textContent=score+' / 3';updateProgress();}}
function retryIcp(icpId){['q1','q2','q3'].forEach(function(q){delete icpAnswered[icpId+'_'+q];});document.getElementById(icpId+'-done').classList.remove('show');document.getElementById(icpId+'-retry').classList.remove('show');document.getElementById(icpId+'-sc').textContent='0 / 3';document.querySelectorAll('#'+icpId+' .icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});document.querySelectorAll('#'+icpId+' .icp-fb').forEach(function(f){f.className='icp-fb';f.textContent='';});}
var cpState={};
function toggleCP(n){cpState[n]=!cpState[n];var el=document.getElementById('cp'+n);if(el)el.classList.toggle('done-item',cpState[n]);var ck=el.querySelector('.cp-check');if(ck)ck.classList.toggle('done',cpState[n]);var done=Object.values(cpState).filter(Boolean).length;document.getElementById('cp-txt').textContent=done+' / 5 potvrđeno';document.getElementById('cp-ready').style.display=done>=5?'inline':'none';updateProgress();}
function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}
var drData=[
  {q:'Derivacija funkcije x² je 2x',ans:true,tag:'osnovno',exp:'Točno! Pravilo potencije daje (x²)′=2x.'},
  {q:'Derivacija konstante 5 je 5',ans:false,tag:'konstanta',exp:'Netočno! Derivacija svake konstante je 0.'},
  {q:'Ako je f′(x)>0, funkcija raste',ans:true,tag:'monotonost',exp:'Točno! Pozitivna derivacija znači rast funkcije.'},
  {q:'Ako je f′(x)=0, to je uvijek maksimum',ans:false,tag:'ekstrem',exp:'Netočno! Može biti maksimum, minimum ili točka bez ekstrema.'},
  {q:'Kod produkta vrijedi (fg)′=f′g+fg′',ans:true,tag:'produkt',exp:'Točno! To je produktno pravilo.'},
  {q:'Kod kvocijenta u brojniku je plus',ans:false,tag:'kvocijent',exp:'Netočno! U brojniku ide minus: f′g-fg′.'},
  {q:'Nagib tangente u x₀ jednak je f′(x₀)',ans:true,tag:'tangenta',exp:'Točno! To je geometrijsko značenje derivacije.'},
  {q:'Optimizacija često traži maksimum ili minimum funkcije',ans:true,tag:'optimizacija',exp:'Točno! Upravo zato koristiš derivaciju.'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){if(drDone)return;drDone=true;drTot++;var d=drData[drIdx];var ok=chosen===d.ans;if(ok)drOk++;el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById('dr-fb');fb.innerHTML=(ok?'✓ ':'✗ ')+d.exp;fb.className='drill-fb '+(ok?'ok':'ng');document.getElementById('dr-sc').textContent=drOk+' / '+drTot;document.getElementById('dr-next').style.display='inline-flex';document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';updateProgress();}
function nextDrill(){drIdx=(drIdx+1)%drData.length;drDone=false;document.getElementById('dr-q').textContent=drData[drIdx].q;document.getElementById('dr-fb').className='drill-fb';document.getElementById('dr-fb').textContent='';document.getElementById('dr-next').style.display='none';document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});}
var topicErrors={osnovno:0,tangenta:0,ekstrem:0,optimizacija:0};
var topicHints={osnovno:'Ponovi osnovna pravila: konstanta → 0, (xⁿ)′=n·xⁿ⁻¹.',tangenta:'Kod tangente trebaju ti i nagib i točka na grafu.',ekstrem:'Kod ekstrema nije dosta riješiti f′(x)=0 — treba interpretacija.',optimizacija:'Najprije napiši funkciju jedne varijable, pa tek onda deriviraj.'};
var qTopics={q1:'osnovno',q2:'osnovno',q3:'osnovno',q4:'osnovno',q5:'osnovno',q6:'tangenta',q7:'tangenta',q8:'ekstrem',q9:'ekstrem',q10:'ekstrem',q11:'optimizacija',q12:'optimizacija'};
var ncvvoTopicMap={'nlive-pol':['q1','q2','q3','q4','q5'],'nlive-tan':['q6','q7'],'nlive-ext':['q8','q9','q10'],'nlive-opt':['q11','q12']};
var streak=0,currentQ=1,examMode='normal',timerInterval=null,timerSeconds=90,timerMax=90;
function showAdaptiveBanner(topic){var b=document.getElementById('adaptive-banner');document.getElementById('ab-title').textContent='Prijedlog — ponovi: '+topic;document.getElementById('ab-text').innerHTML=topicHints[topic];b.style.display='flex';}
function checkAdaptive(qid,ok){var topic=qTopics[qid];if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}if(ok)streak++;else streak=0;updateTimerLabel();updateNcvvoLiveStats();}
function updateNcvvoLiveStats(){Object.keys(ncvvoTopicMap).forEach(function(id){var el=document.getElementById(id);if(!el)return;var qs=ncvvoTopicMap[id];var done=qs.filter(function(q){return answered[q]!==undefined;});if(done.length===0)return;var ok=qs.filter(function(q){return answered[q]===true;}).length;var pct=Math.round(ok/done.length*100);el.className='ncvvo-live-stat '+(pct>=80?'good':pct>=50?'neutral':'bad');el.textContent=(pct>=80?'✓ ':pct>=50?'~ ':'✗ ')+pct+'% točno';});}
function updateProgress(){var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*8),8):0;var cpDone=Object.values(cpState).filter(Boolean).length;var cpPts=Math.round(cpDone/5*6);var icpPts=0;['icp1','icp2','icp3'].forEach(function(icp){var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;icpPts+=Math.round(done/3*3);});var quizPts=Object.keys(answered).length>0?Math.round(correct/total*12):0;tabProgress[1]=Math.min(86+drillPts+icpPts+cpPts,92);tabProgress[2]=Math.min(88+drillPts+icpPts+cpPts+quizPts,100);var curIdx=Array.from(document.querySelectorAll('.tab')).findIndex(function(t){return t.classList.contains('on');});var p=tabProgress[curIdx<0?0:curIdx];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';try{localStorage.setItem('maturiraj_p17_prog',p);}catch(e){}}
function getAudio(){return null;} function soundCorrect(){} function soundWrong(){} function soundTick(){} function soundTimeUp(){} function soundComplete(){}
function setExamMode(mode,el){examMode=mode;document.querySelectorAll('.exam-mode-opt').forEach(function(o){o.classList.remove('active');});el.classList.add('active');if(mode!=='normal'){timerMax=mode==='timed'?90:30;document.getElementById('exam-timer').style.display='flex';startTimer();}else{document.getElementById('exam-timer').style.display='none';stopTimer();}}
function drawTimerCanvas(secs,max){var c=document.getElementById('timer-canvas');if(!c)return;var ctx=c.getContext('2d'),r=28,cx=32,cy=32;ctx.clearRect(0,0,64,64);ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(77,158,255,0.12)';ctx.lineWidth=4;ctx.stroke();var pct=secs/max;var col=pct>0.4?'rgba(77,158,255,0.85)':pct>0.2?'rgba(245,158,11,0.9)':'rgba(248,113,113,0.9)';ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+pct*Math.PI*2);ctx.strokeStyle=col;ctx.lineWidth=4;ctx.lineCap='round';ctx.stroke();document.getElementById('et-num').textContent=secs;}
function startTimer(){stopTimer();timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);timerInterval=setInterval(function(){timerSeconds--;drawTimerCanvas(timerSeconds,timerMax);if(timerSeconds<=0){stopTimer();}},1000);}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function updateTimerLabel(){document.getElementById('et-q-label').textContent='Pitanje '+currentQ+' / 12';document.getElementById('et-streak').textContent='Niz: '+streak+' ✓';}
var quizInited=false,answered={},correct=0,total=0;
var ALL_QUESTIONS=[
  {id:'q1',meta:'osnovno — potencija',text:'Derivacija funkcije 5x⁴ je:',opts:[{t:'20x³',ok:true},{t:'5x³',ok:false},{t:'4x⁵',ok:false},{t:'20x⁴',ok:false}],c:'✓ Točno. (5x⁴)′=20x³.',w:'✗ Netočno. Po pravilu potencije: 5·4x³=20x³.'},
  {id:'q2',meta:'osnovno — konstanta',text:'Derivacija funkcije f(x)=7 je:',opts:[{t:'7',ok:false},{t:'1',ok:false},{t:'0',ok:true},{t:'x',ok:false}],c:'✓ Točno. Svaka konstanta derivira u 0.',w:'✗ Netočno. Konstanta nema promjenu pa je derivacija 0.'},
  {id:'q3',meta:'osnovno — polinom',text:'Derivacija funkcije 3x²-4x+9 je:',opts:[{t:'6x-4',ok:true},{t:'6x+9',ok:false},{t:'3x-4',ok:false},{t:'6x-4+9',ok:false}],c:'✓ Točno. (3x²)′=6x, (-4x)′=-4, 9′=0.',w:'✗ Netočno. Točan rezultat je 6x-4.'},
  {id:'q4',meta:'produkt',text:'Ako je f(x)=x(x+2), tada je f′(x):',opts:[{t:'2x+2',ok:true},{t:'1',ok:false},{t:'x²+2',ok:false},{t:'2x',ok:false}],c:'✓ Točno. Produktno pravilo ili razvijanje daju 2x+2.',w:'✗ Netočno. x(x+2)=x²+2x pa je derivacija 2x+2.'},
  {id:'q5',meta:'kvocijent',text:'Kod kvocijentnog pravila u brojniku stoji:',opts:[{t:'f′g+fg′',ok:false},{t:'f′g-fg′',ok:true},{t:'fg',ok:false},{t:'g²',ok:false}],c:'✓ Točno. U brojniku ide f′g-fg′.',w:'✗ Netočno. Kvocijentno pravilo ima minus u brojniku.'},
  {id:'q6',meta:'tangenta',text:'Za f(x)=x² vrijedi f′(3)=',opts:[{t:'3',ok:false},{t:'6',ok:true},{t:'9',ok:false},{t:'2',ok:false}],c:'✓ Točno. f′(x)=2x pa je f′(3)=6.',w:'✗ Netočno. Najprije izvedi: f′(x)=2x, zatim uvrsti x=3.'},
  {id:'q7',meta:'tangenta',text:'Tangenta na f(x)=x² u x₀=1 ima nagib:',opts:[{t:'1',ok:false},{t:'2',ok:true},{t:'0',ok:false},{t:'-2',ok:false}],c:'✓ Točno. Nagib tangente je f′(1)=2.',w:'✗ Netočno. Za x² je derivacija 2x, pa u x=1 nagib iznosi 2.'},
  {id:'q8',meta:'ekstrem',text:'Stacionarne točke dobivamo iz jednadžbe:',opts:[{t:'f(x)=0',ok:false},{t:'f′(x)=0',ok:true},{t:'f′′(x)=0',ok:false},{t:'x=0',ok:false}],c:'✓ Točno. Prvi korak je rješavanje f′(x)=0.',w:'✗ Netočno. Stacionarne točke dobivamo iz f′(x)=0.'},
  {id:'q9',meta:'ekstrem',text:'Za f(x)=x²-6x stacionarna x-koordinata je:',opts:[{t:'6',ok:false},{t:'3',ok:true},{t:'-3',ok:false},{t:'0',ok:false}],c:'✓ Točno. 2x-6=0 daje x=3.',w:'✗ Netočno. f′(x)=2x-6 pa je x=3.'},
  {id:'q10',meta:'ekstrem',text:'Ako derivacija mijenja znak iz + u -, funkcija ima:',opts:[{t:'minimum',ok:false},{t:'maksimum',ok:true},{t:'točku infleksije',ok:false},{t:'ništa',ok:false}],c:'✓ Točno. + pa - znači lokalni maksimum.',w:'✗ Netočno. Promjena iz + u - daje maksimum.'},
  {id:'q11',meta:'optimizacija',text:'U optimizaciji najprije treba:',opts:[{t:'odmah derivirati sve što vidiš',ok:false},{t:'napisati funkciju jedne varijable',ok:true},{t:'uvijek nacrtati kružnicu',ok:false},{t:'riješiti integral',ok:false}],c:'✓ Točno. Bez funkcije jedne varijable nema deriviranja za optimum.',w:'✗ Netočno. Najprije problem pretvaraš u funkciju jedne varijable.'},
  {id:'q12',meta:'optimizacija',text:'Pravokutnik zadanog opsega ima najveću površinu kad je:',opts:[{t:'vrlo dug i uzak',ok:false},{t:'kvadrat',ok:true},{t:'trokut',ok:false},{t:'bilo kakav',ok:false}],c:'✓ Točno. Maksimum površine dobiva se za kvadrat.',w:'✗ Netočno. Za zadani opseg najveću površinu ima kvadrat.'}
];
function renderQuiz(){var cont=document.getElementById('quiz-container');cont.innerHTML=ALL_QUESTIONS.map(function(q){return '<div class="qb" id="qb-'+q.id+'"><div class="qm">'+q.meta+'</div><div class="qq">'+q.text+'</div><div class="qb-opts">'+q.opts.map(function(o,i){return '<div class="qo" onclick="qa(\\''+q.id+'\\','+i+','+o.ok+',\\''+q.id+'e\\')">'+o.t+'</div>';}).join('')+'</div><div class="qe" id="'+q.id+'e"></div></div>';}).join('');total=ALL_QUESTIONS.length;}
function qa(qid,idx,ok,eid){if(answered[qid]!==undefined)return;answered[qid]=ok;if(ok)correct++;var qdata=ALL_QUESTIONS.find(function(q){return q.id===qid;});if(!qdata)return;document.querySelectorAll('#qb-'+qid+' .qo').forEach(function(o,i){o.classList.add('dis');if(i===idx)o.classList.add(ok?'correct':'wrong');if(!ok&&qdata.opts[i].ok)o.classList.add('correct');});var e=document.getElementById(eid);e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>';e.classList.add('show');currentQ=Object.keys(answered).length+1;checkAdaptive(qid,ok);if(Object.keys(answered).length===total){document.getElementById('score').classList.add('show');document.getElementById('snum').textContent=correct+'/'+total;document.getElementById('slbl').textContent=correct>=10?'Izvrsno! Spreman si za integrale.':correct>=7?'Dobro! Ponovi tangente i ekstreme.':'Ponovi osnovna pravila prije nastavka.';}updateProgress();}
var FExp={f1:'Pravilo potencije: (x³)′=3x².',f2:'Za x² vrijedi f′(x)=2x pa je f′(2)=4.',f3:'f′(x)=2x-6. Iz 2x-6=0 dobiješ x=3.',f4:'Konstanta nema promjenu, zato je derivacija 0.'};
function chkf(iid,fid,ans,key){var inp=document.getElementById(iid),fb=document.getElementById(fid),v=inp.value.trim();if(!v)return;inp.disabled=true;inp.parentElement.querySelector('.fitb-btn').disabled=true;var ok=normMath(v)===normMath(ans);inp.classList.add(ok?'ok':'fail');fb.className='fitb-fb show '+(ok?'ok':'fail');fb.innerHTML=(ok?'✓ Točno: ':'✗ Točno je: ')+'<strong>'+ans+'</strong> — '+FExp[key];}
(function(){try{var s=sessionStorage.getItem('p17_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE TAB (mora biti na kraju) ── */
(function(){try{var s=sessionStorage.getItem('p17_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();   

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){try{var saved=localStorage.getItem('maturiraj_p17_prog');if(saved!==null){var pct=parseInt(saved);if(pct>0){var bar=document.getElementById('prog-bar');var lbl=document.getElementById('prog-pct');if(bar)bar.style.width=pct+'%';if(lbl)lbl.textContent=pct+'%';}}}catch(e){}})(  );

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
const meta = {id:'P17',pidLower:'p17',title:"Maturiraj.hr \u2014 Mat A \u00b7 P17 \u00b7 Derivacije",subject:'matematika-a',lsKey:'maturiraj_p17_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p17');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P17] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p17"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p17_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p17_prog',String(pct));}catch(e){}}
// ── Complete page for MatChapterViewer (iframe srcDoc) ───────────────────────
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'*\');}}\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'*\')}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P17 · Derivacije</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';

export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};