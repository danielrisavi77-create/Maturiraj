/**
 * Maturiraj.hr — Mat A · P15
 * Maturiraj.hr — Mat A · P15 · Kombinatorika
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
  <button class="sb-item" onclick="navigateChapter('p12')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>12 · Vektori</button>
  <button class="sb-item" onclick="navigateChapter('p13')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>13 · Planimetrija</button>
  <button class="sb-item" onclick="navigateChapter('p14')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>14 · Nizovi</button>
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>15 · Kombinatorika</button>
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
<div class="bc"><span>← poglavlja</span><span class="bc-sep">/</span><span>a-razina</span><span class="bc-sep">/</span><span class="bc-cur">kombinatorika-permutacije-kombinacije-binomni</span></div>
<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>
<!-- L0 -->
<div class="layer on" id="l0">
  <div class="hero"><div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 15 od 21 · A razina · diskretna matematika</div>
    <h1 class="hero-title">Kombinatorika —<br><span>Permutacije, Kombinacije, Binomni</span></h1>
    <p class="hero-sub">Prebrojavanje mogućnosti, vjerojatnost i binomni teorem — matematika izbora i rasporeda</p>
    <div class="hero-meta"><span class="hchip b">3 teme</span><span class="hchip a">⭐ Redovito na NCVVO ispitu</span><span class="hchip c">~40 min</span></div>
    <div class="pt"><div class="pb" style="width:71%"></div></div>
  </div>
  <div class="tags">
    <span class="pill p-b">Faktorijel i pravilo</span><span class="pill p-c">Permutacije</span>
    <span class="pill p-i">Varijacije</span><span class="pill p-a">Kombinacije</span>
    <span class="pill p-v">Binomni teorem</span><span class="pill p-r">Pascalov trokut</span>
  </div>
  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int"><div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">Kombinatorika je "matematika izbora" — koliko načina možeš odabrati, rasporediti ili kombinirati elemente? Ključno pitanje uvijek je: <em>je li redoslijed bitan?</em><br><br>Ako DA → permutacije/varijacije. Ako NE → kombinacije. Ova razlika određuje sve.<br><br><strong>Binomni teorem je most između kombinatorike i algebre — razvoj (a+b)ⁿ direktno koristi binomne koeficijente C(n,k). Na maturi se redovito traži specifičan član razvoja!</strong></div>
  </div>
  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">n!</div><div class="sc-name">Faktorijel</div><div class="sc-desc">n!=1·2·3·...·n. 0!=1. Temelj svega u kombinatorici.</div></div>
    <div class="sc"><div class="sc-ico si-c">Pₙ=n!</div><div class="sc-name">Permutacije</div><div class="sc-desc">Rasporedi n razl. elemenata. Redoslijed bitan. Pₙ=n!</div></div>
    <div class="sc"><div class="sc-ico si-i">Vⁿₖ</div><div class="sc-name">Varijacije</div><div class="sc-desc">k elemenata iz n, redoslijed bitan. Vⁿₖ=n!/(n−k)!</div></div>
    <div class="sc"><div class="sc-ico si-a">C(n,k)</div><div class="sc-name">Kombinacije</div><div class="sc-desc">k elemenata iz n, redoslijed NE bitan. C(n,k)=n!/(k!(n−k)!)</div></div>
    <div class="sc"><div class="sc-ico si-v">(a+b)ⁿ</div><div class="sc-name">Binomni teorem</div><div class="sc-desc">(a+b)ⁿ=Σ C(n,k)·aⁿ⁻ᵏ·bᵏ. k-ti član: C(n,k−1)·aⁿ⁻ᵏ⁺¹·bᵏ⁻¹.</div></div>
    <div class="sc"><div class="sc-ico si-r">Pascalov △</div><div class="sc-name">Pascalov trokut</div><div class="sc-desc">C(n,k)=C(n−1,k−1)+C(n−1,k). Svaki broj = zbroj dva iznad.</div></div>
  </div>
  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">Faktorijel n!</div><div class="cv">0!=1 · 1!=1 · 2!=2 · 3!=6 · 4!=24 · 5!=120 · n!=n·(n−1)!</div></div>
    <div class="cr"><div class="ck b">Pravilo množenja</div><div class="cv">Neovisni izbori: m₁·m₂·...·mₖ načina. "Za svaki od A načina, B mogućnosti."</div></div>
    <div class="cr"><div class="ck c">Permutacije Pₙ=n!</div><div class="cv">Svih n elemenata u svim redoslijedima. Pₙ=n! Permutacije s ponavljanjem: n!/(n₁!n₂!...)</div></div>
    <div class="cr"><div class="ck i">Varijacije Vⁿₖ=n!/(n−k)!</div><div class="cv">k od n, redoslijed bitan. Bez ponavljanja. S ponavljanjem: nᵏ.</div></div>
    <div class="cr"><div class="ck a">Kombinacije C(n,k)</div><div class="cv">C(n,k)=n!/(k!(n−k)!) · C(n,0)=C(n,n)=1 · C(n,k)=C(n,n−k)</div></div>
    <div class="cr"><div class="ck v">Binomni teorem</div><div class="cv">(a+b)ⁿ=Σₖ₌₀ⁿ C(n,k)·aⁿ⁻ᵏ·bᵏ · (k+1)-ti član: C(n,k)·aⁿ⁻ᵏ·bᵏ</div></div>
    <div class="cr"><div class="ck r">Zamka</div><div class="cv">Varijacije ≠ Kombinacije! Redoslijed ABC≠BCA za varijacije, ali isto za kombinacije.</div></div>
    <div class="cr"><div class="ck r">Zamka 2</div><div class="cv">k-ti član binomnog razvoja: C(n,k−1)·aⁿ⁻ᵏ⁺¹·bᵏ⁻¹. Indeks počinje od 1, ne 0!</div></div>
  </div>
  <div class="nav-row"><button onclick="navigateChapter('p14')" class="nb">← P14 · Nizovi</button><span class="nb primary" onclick="sw(1)">Uči detaljno →</span></div>
</div>
<!-- L1 -->
<div class="layer" id="l1">

<!-- 01 PERMUTACIJE I VARIJACIJE -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · PERMUTACIJE I VARIJACIJE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — "koliko rasporeda postoji?"</div>
  <div class="box-int-txt">Permutacija je raspored svih elemenata — koliko načina možeš posložiti 5 knjiga na polici? 5! = 120.<br><br>Varijacija je odabir k od n elemenata kad je redoslijed bitan — koliko troznamenkastih brojeva od znamenki 1-9 (bez ponavljanja)? 9·8·7 = V⁹₃ = 504.<br><br><strong>Ključ: ako je redoslijed bitan i biram sve → permutacija (n!). Ako biram samo k od n → varijacija (n!/(n−k)!).</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">FAKTORIJEL I PERMUTACIJE</span>
  <span class="val">n! = n·(n−1)·(n−2)·...·2·1</span> · <span class="val">0! = 1</span><br>
  <span class="val">Permutacije Pₙ = n!</span> <span class="cmt">— rasporedi n različitih elemenata</span><br>
  <span class="val">Permutacije s ponavljanjem: n!/(n₁!·n₂!·...·nₖ!)</span> <span class="cmt">— kad ima jednakih</span><br>
  <span class="cmt">Primjer: rasporedi MAMA = 4!/(2!·2!) = 6</span>
</div>
<div class="box-for"><span class="box-for-lbl">VARIJACIJE</span>
  <span class="val">Vⁿₖ = n·(n−1)·...·(n−k+1) = n!/(n−k)!</span> <span class="cmt">— bez ponavljanja</span><br>
  <span class="val">Varijacije s ponavljanjem: nᵏ</span> <span class="cmt">— svaki put biraš od svih n</span><br>
  <span class="cmt">Primjer: 3-znamen. brojevi od {1,...,9} bez ponav. = V⁹₃ = 9·8·7 = 504</span><br>
  <span class="cmt">Primjer: PIN od {0,...,9} s ponav. = 10³ = 1000</span>
</div>

<!-- KALKULATOR -->
<div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Kombinatorički kalkulator</span></div>
  <div class="disc-body">
    <div class="disc-row" style="flex-wrap:wrap;gap:6px;margin-bottom:8px">
      <button class="disc-btn on" id="kk-perm" onclick="setKK('perm',this)">n!</button>
      <button class="disc-btn" id="kk-var" onclick="setKK('var',this)">Vⁿₖ</button>
      <button class="disc-btn" id="kk-komb" onclick="setKK('komb',this)">C(n,k)</button>
    </div>
    <div class="disc-row" style="flex-wrap:wrap;gap:6px">
      <span class="disc-lbl">n=</span><input class="disc-in" id="kk-n" type="number" value="5" min="0" style="width:55px">
      <span class="disc-lbl" id="kk-k-lbl">k=</span><input class="disc-in" id="kk-k" type="number" value="3" min="0" style="width:55px">
      <button class="disc-btn" onclick="calcKK()">Izračunaj →</button>
    </div>
    <div class="disc-result" id="kk-result">Odaberi tip i klikni Izračunaj</div>
  </div>
</div>

<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Permutacije Pₙ=n!</div><div class="cmp-body">
    <div class="cmp-row">Svih n elemenata</div>
    <div class="cmp-row">Redoslijed bitan</div>
    <div class="cmp-row">Bez ponavljanja</div>
    <div class="cmp-row">Npr. 4 knjige: 4!=24</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Varijacije Vⁿₖ=n!/(n−k)!</div><div class="cmp-body">
    <div class="cmp-row">k od n elemenata</div>
    <div class="cmp-row">Redoslijed bitan</div>
    <div class="cmp-row">S/bez ponavljanja</div>
    <div class="cmp-row">Npr. V⁵₃=60</div>
  </div></div>
</div>

<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — "punjenje mjesta"</div>
  <div class="box-men-txt">Za varijacije: zamisli k praznih mjesta. Prvo mjesto: n izbora. Drugo: n−1 (bez prvog). k-to: n−k+1.<br>Ukupno: n·(n−1)·...·(n−k+1) = n!/(n−k)!<br><strong>Pamtiti: Vⁿₖ = "n puta nadolje k koraka" = n·(n−1)·...·(n−k+1). Uvijek k faktora u produktu!</strong></div>
</div>

<div class="sr" id="sr1">
  <div class="sr-head"><div class="sr-title">Permutacije i varijacije — korak po korak</div><div class="sr-task">Na koliko načina može 5 trkača završiti utrku? Na koliko načina se može dodijeliti zlato, srebro, bronca?</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr1s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Permutacije — svih 5 trkača</div><div class="sr-txt">Redoslijed bitan, svi elementi. P₅=5!=120 načina</div></div></div></div>
    <div class="sr-step" id="sr1s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Varijacije — samo 3 od 5</div><div class="sr-txt">Redoslijed bitan (zlato≠srebro≠bronca), k=3 od n=5<br>V⁵₃=5·4·3=60 ili 5!/(5−3)!=120/2=<strong>60</strong></div></div></div></div>
    <div class="sr-step" id="sr1s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Provjera odnosa</div><div class="sr-txt">P₅/V⁵₃=120/60=2!=2! — upravo broj rasporeda preostalih 2 trkača ✓
      <div class="sr-tryit"><div class="sr-try-lbl">↳ Na koliko načina 8 osoba može sjesti na 3 stolice?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try1" type="text" placeholder="V⁸₃=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try1','try1-fb','336','var1')">Provjeri</button></div>
        <div class="sr-try-fb" id="try1-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr1',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr1',3)">↺ Resetiraj</button><span class="sr-prog" id="sr1p">0 / 3</span></div>
</div>

<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — permutacije vs varijacije</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik broji rasporede slova A, B, C, D, E u grupe od 3:</p>
  <div class="bug-task">Rezultat: C(5,3) = <span class="wrong">10</span></div>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno, biramo 3 od 5</div>
    <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška: redoslijed slova je bitan (ABC≠BAC) → varijacije V⁵₃=60, ne kombinacije!</div>
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška: treba P₅=120</div>
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Greška: treba 5³=125</div>
  </div><div class="bug-expl" id="b1e"></div>
</div></div>

<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — permutacije i varijacije</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>Pₙ=n! — svi elementi, redoslijed bitan</li>
  <li class="b20-item"><div class="b20-dot"></div>Vⁿₖ=n!/(n−k)! — k od n, redoslijed bitan. Uvijek k faktora!</li>
  <li class="b20-item"><div class="b20-dot"></div>S ponavljanjem: nᵏ (svaki put n izbora)</div></li>
</ul></div>


<!-- RIJEŠENI PRIMJER -->
<div class="combo">
  <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — permutacije i varijacije</div></div>
  <div class="combo-body">
    <div class="combo-task">Koliko načina možemo rasporediti 5 različitih knjiga u niz?</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Pitanje: raspoređivanje SVIH elemenata → <strong>permutacija</strong></div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">P₅ = 5! = 5·4·3·2·1 = <strong>120</strong></div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Bonus: ako se biraju samo 3 od 5 → varijacija: V(5,3) = 5!/(5−3)! = 5·4·3 = <strong>60</strong></div></div>
      <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Maturalni ključ: redoslijed bitan + SVE → permutacija; redoslijed bitan + DIO → varijacija</div></div>
    </div>
    <div class="combo-ans">P₅ = 120 &nbsp;·&nbsp; P=sve, V=dio s redoslijedom, C=dio bez redoslijeda</div>
  </div>
</div>

<div class="inline-cp" id="icp1">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — permutacije i varijacije</span><span class="icp-score" id="icp1-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp1q1"><div class="icp-q-text">4! = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">12</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">16</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">24</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">8</div>
    </div><div class="icp-fb" id="icp1q1fb"></div></div>
    <div class="icp-q" id="icp1q2"><div class="icp-q-text">V⁶₂ = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">15</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">30</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">12</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">36</div>
    </div><div class="icp-fb" id="icp1q2fb"></div></div>
    <div class="icp-q" id="icp1q3"><div class="icp-q-text">Na koliko načina 3 osobe mogu sjesti u red?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">3</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">9</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">6</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">27</div>
    </div><div class="icp-fb" id="icp1q3fb"></div></div>
    <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na kombinacije →</div>
    <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
  </div>
</div>
<!-- 02 KOMBINACIJE -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · KOMBINACIJE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — "odabir bez reda"</div>
  <div class="box-int-txt">Kombinacije su varijacije podijeljene s brojem rasporeda odabranih elemenata — jer za kombinacije {A,B,C} je isto {B,A,C}, {C,A,B} itd.<br><br>C(n,k) = Vⁿₖ / k! = [n!/(n−k)!] / k! = n!/(k!(n−k)!)<br><br><strong>Simetrija C(n,k)=C(n,n−k) je ključna: C(10,7)=C(10,3) — uvijek računaj manji od k i n−k!</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">KOMBINACIJE — formule i svojstva</span>
  <span class="val">C(n,k) = n! / (k! · (n−k)!)</span> <span class="cmt">— binomni koeficijent, čitaj "n nad k"</span><br>
  <span class="val">C(n,0) = C(n,n) = 1</span> · <span class="val">C(n,1) = n</span> · <span class="val">C(n,2) = n(n−1)/2</span><br>
  <span class="val">C(n,k) = C(n,n−k)</span> <span class="cmt">— simetrija! Uvijek koristi manji eksponent</span><br>
  <span class="val">C(n,k) = C(n−1,k−1) + C(n−1,k)</span> <span class="cmt">— Pascalov identitet</span><br>
  <span class="cmt">Suma svih: C(n,0)+C(n,1)+...+C(n,n) = 2ⁿ (ukupno podskupova skupa od n elemenata)</span>
</div>

<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Varijacije Vⁿₖ</div><div class="cmp-body">
    <div class="cmp-row">Redoslijed <b>bitan</b></div>
    <div class="cmp-row">ABC ≠ BAC ≠ CAB</div>
    <div class="cmp-row">n!/(n−k)!</div>
    <div class="cmp-row">Npr. V⁵₃ = 60</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Kombinacije C(n,k)</div><div class="cmp-body">
    <div class="cmp-row">Redoslijed <b>nije bitan</b></div>
    <div class="cmp-row">{A,B,C} = {B,A,C} = {C,A,B}</div>
    <div class="cmp-row">n!/(k!(n−k)!)</div>
    <div class="cmp-row">Npr. C(5,3) = 10</div>
  </div></div>
</div>

<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — Pascalov trokut</div>
  <div class="box-men-txt">
    <pre style="font-family:var(--mono);font-size:12px;line-height:1.9;color:var(--t2);text-align:center;margin:0 0 10px;background:none;border:none;padding:0">n=0:          1
n=1:        1   1
n=2:      1   2   1
n=3:    1   3   3   1
n=4:  1   4   6   4   1
n=5: 1  5  10  10   5  1</pre>
    <strong>Svaki broj = zbroj dva iznad. Red n = koeficijenti (a+b)ⁿ. Rub uvijek 1!</strong><br>
    <span style="color:var(--t3);font-size:11px">Npr. C(5,2)=10 — treći element reda n=5 ✓</span>
  </div>
</div>

<div class="sr" id="sr2">
  <div class="sr-head"><div class="sr-title">Kombinacije — korak po korak</div><div class="sr-task">Iz 10 igrača treba odabrati 4 za tim. Na koliko načina?</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr2s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Prepoznaj tip</div><div class="sr-txt">Redoslijed u timu nije bitan (nije važno tko je "1." odabran) → kombinacije</div></div></div></div>
    <div class="sr-step" id="sr2s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Primijeni formulu</div><div class="sr-txt">C(10,4) = 10!/(4!·6!) = (10·9·8·7)/(4·3·2·1) = <span class="frac"><span class="num">5040</span><span class="den">24</span></span> = <strong>210</strong></div></div></div></div>
    <div class="sr-step" id="sr2s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Provjera simetrijom</div><div class="sr-txt">C(10,4) = C(10,6) = 210 ✓ — isti rezultat!
      <div class="sr-tryit"><div class="sr-try-lbl">↳ C(8,3) = ?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try2" type="text" placeholder="C(8,3)=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try2','try2-fb','56','kom1')">Provjeri</button></div>
        <div class="sr-try-fb" id="try2-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr2',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr2',3)">↺ Resetiraj</button><span class="sr-prog" id="sr2p">0 / 3</span></div>
</div>

<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — kombinacije</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa C(10,8):</p>
  <div class="bug-task">C(10,8) = 10!/(8!) = <span class="wrong">90</span></div>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno, dijelimo s 8!</div>
    <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška: C(10,8)=10!/(8!·2!)=45. Nedostaje k! u nazivniku! Ili: C(10,8)=C(10,2)=45.</div>
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Greška: C(10,8)=C(8,10) — ne postoji</div>
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Greška: C(10,8)=10·9·8·...·3</div>
  </div><div class="bug-expl" id="b2e"></div>
</div></div>

<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — kombinacije</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>C(n,k)=n!/(k!(n−k)!) — oba faktora u nazivniku!</li>
  <li class="b20-item"><div class="b20-dot"></div>C(n,k)=C(n,n−k) — uvijek računaj s manjim k</li>
  <li class="b20-item"><div class="b20-dot"></div>C(n,0)=C(n,n)=1 · C(n,1)=n · C(n,2)=n(n−1)/2</li>
</ul></div>


<!-- RIJEŠENI PRIMJER -->
<div class="combo">
  <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — kombinacije</div></div>
  <div class="combo-body">
    <div class="combo-task">Iz 10 studenata odaberi odbor od 3. Koliko mogućnosti?</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Pitanje: odabir bez redoslijeda → <strong>kombinacija</strong></div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">C(10,3) = 10! / (3! · 7!) = (10·9·8) / (3·2·1) = 720/6 = <strong>120</strong></div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Provjera: C(n,k) = C(n,n−k) → C(10,7) = 120 ✓</div></div>
      <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Maturalni ključ: "odbor", "tim", "izbor" bez reda → uvijek kombinacija C(n,k)</div></div>
    </div>
    <div class="combo-ans">C(10,3) = 120 &nbsp;·&nbsp; Kombinacija = odabir bez obzira na redoslijed</div>
  </div>
</div>

<div class="inline-cp" id="icp2">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — kombinacije</span><span class="icp-score" id="icp2-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp2q1"><div class="icp-q-text">C(6,2) = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">12</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">15</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">30</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">6</div>
    </div><div class="icp-fb" id="icp2q1fb"></div></div>
    <div class="icp-q" id="icp2q2"><div class="icp-q-text">C(7,5) = C(7,2) = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">21</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">35</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">42</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">14</div>
    </div><div class="icp-fb" id="icp2q2fb"></div></div>
    <div class="icp-q" id="icp2q3"><div class="icp-q-text">Iz 5 osoba biramo odbor od 3. Načina:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">60</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">20</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">10</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">15</div>
    </div><div class="icp-fb" id="icp2q3fb"></div></div>
    <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na binomni teorem →</div>
    <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
  </div>
</div>
<!-- 03 BINOMNI TEOREM -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · BINOMNI TEOREM</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — "razvoj potencije binoma"</div>
  <div class="box-int-txt">(a+b)² = a² + 2ab + b². Koeficijenti 1,2,1 su C(2,0),C(2,1),C(2,2).<br>(a+b)³ = a³+3a²b+3ab²+b³. Koeficijenti 1,3,3,1 — red 3 Pascalovog trokuta!<br><br>Za opći n: (a+b)ⁿ = Σₖ₌₀ⁿ C(n,k)·aⁿ⁻ᵏ·bᵏ<br><br><strong>Na maturi: traži se (k+1)-ti član razvoja = C(n,k)·aⁿ⁻ᵏ·bᵏ. Pazi — indeks člana počinje od 1!</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">BINOMNI TEOREM</span>
  <span class="val">(a+b)ⁿ = Σₖ₌₀ⁿ C(n,k)·aⁿ⁻ᵏ·bᵏ</span><br>
  <span class="val">(k+1)-ti član: T_{k+1} = C(n,k)·aⁿ⁻ᵏ·bᵏ</span> <span class="cmt">— k počinje od 0!</span><br>
  <span class="cmt">Alternativno: m-ti član = C(n,m−1)·aⁿ⁻ᵐ⁺¹·bᵐ⁻¹</span><br>
  <span class="val">Suma koeficijenata: (1+1)ⁿ = 2ⁿ</span><br>
  <span class="val">Alternacija znakova: (1−1)ⁿ = 0 → C(n,0)−C(n,1)+...=0</span>
</div>
<div class="box-for"><span class="box-for-lbl">POSEBNI SLUČAJEVI — brze provjere</span>
  <span class="val">(a+b)² = a²+2ab+b²</span><br>
  <span class="val">(a+b)³ = a³+3a²b+3ab²+b³</span><br>
  <span class="val">(a−b)³ = a³−3a²b+3ab²−b³</span><br>
  <span class="cmt">Za (a−b)ⁿ: znakovi naizmjenični +−+−... jer b je zamijenjen s (−b)</span>
</div>

<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Konačna suma C(n,0)+...+C(n,n)</div><div class="cmp-body">
    <div class="cmp-row">= 2ⁿ</div>
    <div class="cmp-row">Jer (1+1)ⁿ=2ⁿ</div>
    <div class="cmp-row">n=3: 1+3+3+1=8=2³ ✓</div>
    <div class="cmp-row">n=4: 1+4+6+4+1=16 ✓</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Alternacija C(n,0)−C(n,1)+...</div><div class="cmp-body">
    <div class="cmp-row">= 0</div>
    <div class="cmp-row">Jer (1−1)ⁿ=0ⁿ=0</div>
    <div class="cmp-row">Koristiti za dokaze</div>
    <div class="cmp-row">n=3: 1−3+3−1=0 ✓</div>
  </div></div>
</div>

<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — kako naći k-ti član</div>
  <div class="box-men-txt">Traži se 4. član razvoja (x+2)⁶.<br>4. član → m=4 → k=m−1=3. T₄=C(6,3)·x⁶⁻³·2³=20·x³·8=<strong>160x³</strong>.<br><strong>Provjera eksponente: eksponent a + eksponent b = n uvijek! Ovdje: 3+3=6 ✓</strong></div>
</div>

<div class="sr" id="sr3">
  <div class="sr-head"><div class="sr-title">Binomni teorem — korak po korak</div><div class="sr-task">Razvij (2x−1)⁴ i nađi koeficijent uz x².</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr3s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Postavi a=2x, b=−1, n=4</div><div class="sr-txt">T_{k+1}=C(4,k)·(2x)⁴⁻ᵏ·(−1)ᵏ</div></div></div></div>
    <div class="sr-step" id="sr3s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Nađi k za x²</div><div class="sr-txt">Eksponent x: 4−k=2 → k=2<br>T₃=C(4,2)·(2x)²·(−1)²=6·4x²·1=<strong>24x²</strong></div></div></div></div>
    <div class="sr-step" id="sr3s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Koeficijent uz x²</div><div class="sr-txt">Koeficijent = <strong>24</strong>. Provjera: 4−2+2=4 ✓
      <div class="sr-tryit"><div class="sr-try-lbl">↳ Koeficijent uz x³ u razvoju (x+2)⁵?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try3" type="text" placeholder="koef=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try3','try3-fb','40','bin1')">Provjeri</button></div>
        <div class="sr-try-fb" id="try3-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr3',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr3',3)">↺ Resetiraj</button><span class="sr-prog" id="sr3p">0 / 3</span></div>
</div>

<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — k-ti član binomnog razvoja</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik traži 3. član razvoja (a+b)⁵:</p>
  <div class="bug-task">T₃ = C(5,3)·a²·b³ = <span class="wrong">10a²b³</span></div>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno, k=3 za treći član</div>
    <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Greška: 3. član ima k=2 (ne k=3)! T₃=C(5,2)·a³·b²=10a³b². Indeks kreće od k=0!</div>
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: T₃=C(5,3)·a³·b³ — eksponenti ne zbrajaju do n</div>
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Točno, formula je T_m=C(n,m)·aⁿ⁻ᵐ·bᵐ</div>
  </div><div class="bug-expl" id="b3e"></div>
</div></div>

<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — binomni teorem</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>(k+1)-ti član: C(n,k)·aⁿ⁻ᵏ·bᵏ — k počinje od 0!</li>
  <li class="b20-item"><div class="b20-dot"></div>Provjera: eksponent a + eksponent b = n uvijek</li>
  <li class="b20-item"><div class="b20-dot"></div>Suma koef. = 2ⁿ · Koef. uz srednji član za parni n: C(n,<span class="frac"><span class="num">n</span><span class="den">2</span></span>)</li>
</ul></div>


<!-- RIJEŠENI PRIMJER -->
<div class="combo">
  <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — binomni teorem</div></div>
  <div class="combo-body">
    <div class="combo-task">Razvij (x + 2)³ binomnim teoremom</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Binomni teorem: (a+b)³ = C(3,0)a³ + C(3,1)a²b + C(3,2)ab² + C(3,3)b³</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Uvrstime a=x, b=2: <strong>1·x³ + 3·x²·2 + 3·x·4 + 1·8</strong></div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Izračunaj: <strong>x³ + 6x² + 12x + 8</strong></div></div>
      <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Maturalni obrazac: k-ti clan = C(n,k−1)·aⁿ⁻ᵏ⁺¹·bᵏ⁻¹ (k kreće od 1!)</div></div>
    </div>
    <div class="combo-ans">(x+2)³ = x³+6x²+12x+8 &nbsp;·&nbsp; Pascalov trokut: 1, 3, 3, 1 za n=3</div>
  </div>
</div>

<div class="inline-cp" id="icp3">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — binomni teorem</span><span class="icp-score" id="icp3-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp3q1"><div class="icp-q-text">2. član razvoja (a+b)⁴ je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">C(4,2)a²b²</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">4a³b</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">4ab³</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">6a²b²</div>
    </div><div class="icp-fb" id="icp3q1fb"></div></div>
    <div class="icp-q" id="icp3q2"><div class="icp-q-text">Koeficijent uz x² u (x+1)⁵ je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">5</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">20</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">10</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">1</div>
    </div><div class="icp-fb" id="icp3q2fb"></div></div>
    <div class="icp-q" id="icp3q3"><div class="icp-q-text">Suma svih koeficijenata (a+b)⁶ je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">32</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">64</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">36</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">48</div>
    </div><div class="icp-fb" id="icp3q3fb"></div></div>
    <div class="icp-done" id="icp3-done">✓ Izvrsno! Nastavi na kombinirane zadatke →</div>
    <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
  </div>
</div>
<!-- A RAZINA -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>
<div class="combo"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — lozinka i pravilo množenja</div></div><div class="combo-body">
  <div class="combo-task">Lozinka: 2 slova (A-Z, 26 slova) i 3 znamenke (0-9), bez ponavljanja u svakoj grupi. Koliko lozinki?</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Slova (2 od 26, redoslijed bitan): V²⁶₂=26·25=650</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Znamenke (3 od 10, redoslijed bitan): V¹⁰₃=10·9·8=720</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Ukupno (neovisni izbori): 650·720=468 000</div></div>
  </div><div class="combo-ans">468 000 različitih lozinki</div>
</div></div>

<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — odbor s uvjetom</div></div><div class="combo-body">
  <div class="combo-task">Iz 6 žena i 4 muškarca biramo odbor od 4. Koliko odbora ima točno 2 žene i 2 muškarca?</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Odabir 2 žene od 6: C(6,2)=15</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Odabir 2 muškarca od 4: C(4,2)=6</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Ukupno: 15·6=90</div></div>
  </div><div class="combo-ans">90 odbora. Provjera: C(10,4)=210 (ukupno), 90&lt;210 ✓</div>
</div></div>

<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — binomni teorem s konkretnim brojevima</div></div><div class="combo-body">
  <div class="combo-task">U razvoju (2x−3)⁵ nađi koeficijent uz x³.</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">a=2x, b=−3, n=5. Eksponent x=3 → eksponent a=3 → 5−k=3 → k=2</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">T₃=C(5,2)·(2x)³·(−3)²=10·8x³·9=720x³</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Koeficijent uz x³ = 720. Provjera: 3+2=5 ✓</div></div>
  </div><div class="combo-ans">Koeficijent uz x³ = 720</div>
</div></div>

<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A4 — Pascalov identitet i dokaz</div></div><div class="combo-body">
  <div class="combo-task">Dokaži: C(n,k)+C(n,k+1)=C(n+1,k+1)</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">C(n,k)=n!/(k!(n−k)!) i C(n,k+1)=n!/((k+1)!(n−k−1)!)</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Zajednički nazivnik (k+1)!(n−k)!: C(n,k)=(n!(n−k))/((k+1)!(n−k)!) i C(n,k+1)=n!(k+1)/((k+1)!(n−k)!)</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Zbroj: n!·(n−k+k+1)/((k+1)!(n−k)!)=n!·(n+1)/((k+1)!(n−k)!)=(n+1)!/((k+1)!(n−k)!)=C(n+1,k+1) ✓</div></div>
  </div><div class="combo-ans">Pascalov identitet — osnova Pascalovog trokuta!</div>
</div></div>

<!-- DRILL -->
<div class="drill"><div class="drill-head"><span class="drill-title">// Brzi refleks — Točno ili Netočno?</span><span class="drill-score" id="dr-sc">0 / 0</span></div>
  <div class="drill-body">
    <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
    <div class="drill-q" id="dr-q">5! = 120</div>
    <div class="drill-opts"><div class="drill-opt" onclick="drill(this,true)">✓ Točno</div><div class="drill-opt" onclick="drill(this,false)">✗ Netočno</div></div>
    <div class="drill-fb" id="dr-fb"></div>
    <div class="drill-ctrl"><button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeće →</button></div>
    <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
  </div>
</div>

<!-- NCVVO -->
<div class="ncvvo-real"><div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div><div class="ncvvo-real-body">
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Kombinacije · ~45% netočnih<span class="ncvvo-live-stat neutral" id="nlive-kom">kombinacije</span></div>
    <div class="ncvvo-real-q">Iz grupe od 9 osoba biramo predsjednika, dopredsjednika i tajnika. Koliko načina?</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>koriste kombinacije umjesto varijacija — redoslijed je bitan (predsj.≠dopredsj.)</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">Redoslijed bitan → varijacije V⁹₃=9·8·7=<strong>504</strong>. Ne C(9,3)=84!</div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Binomni teorem · ~55% netočnih<span class="ncvvo-live-stat neutral" id="nlive-bin">binomni</span></div>
    <div class="ncvvo-real-q">Nađi 4. član razvoja (x+y)⁶.</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>uzimaju k=4 umjesto k=3 — miješaju redni broj člana i indeks k</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">4. član: k=3. T₄=C(6,3)·x³·y³=20x³y³. <strong>T₄=20x³y³</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Permutacije s ponav. · ~40% netočnih<span class="ncvvo-live-stat neutral" id="nlive-per">permutacije</span></div>
    <div class="ncvvo-real-q">Na koliko načina se mogu rasporediti slova u riječi MISSISSIPPI?</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>ne dijele s faktorjelima ponavljajućih slova</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">M:1, I:4, S:4, P:2 → 11!/(1!·4!·4!·2!)=34 650</div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>C(n,k) simetrija · ~35% netočnih<span class="ncvvo-live-stat neutral" id="nlive-sim">simetrija</span></div>
    <div class="ncvvo-real-q">Izračunaj C(20,17) bez kalkulatora.</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>ne primjenjuju simetriju C(n,k)=C(n,n−k)</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">C(20,17)=C(20,3)=20·19·18/(3·2·1)=<strong>1140</strong></div>
  </div>
</div></div>

<!-- CHECKPOINT -->
<div class="checkpoint" id="cp"><div class="cp-head"><span class="cp-icon">✅</span><div><div class="cp-title">Checkpoint — jesi li spreman?</div><div class="cp-sub">Potvrdi što znaš</div></div></div>
  <ul class="cp-list">
    <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>Pₙ=n!, Vⁿₖ=n!/(n−k)! — redoslijed bitan</li>
    <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>C(n,k)=n!/(k!(n−k)!) — redoslijed nije bitan</li>
    <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>C(n,k)=C(n,n−k) — uvijek koristi manji eksponent</li>
    <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>(k+1)-ti član binomnog razvoja: C(n,k)·aⁿ⁻ᵏ·bᵏ</li>
    <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Suma koef. binomnog razvoja = 2ⁿ</li>
  </ul>
  <div class="cp-footer"><span id="cp-txt">0 / 5 potvrđeno</span><span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za Poglavlje 16!</span></div>
</div>
<div class="matura-block"><div class="matura-hd">⭐ matura fokus</div><ul class="matura-list">
  <li class="mi"><div class="mi-dot"></div><span><b>Redoslijed bitan → varijacije. Nije bitan → kombinacije.</b> Ovo je najvažnija razlika!</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>C(n,k)=C(n,n−k).</b> C(20,17)=C(20,3). Uvijek smanji!</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>(k+1)-ti član: k počinje od 0.</b> 3. član → k=2!</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>Permutacije s ponavljanjem:</b> n!/(n₁!n₂!...). MAMA=4!/(2!2!)=6.</span></li>
</ul></div>
<div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Gdje ćeš ovo koristiti?</div><div class="cn-sub">Kombinatorika u 4 poglavlja</div></div></div>
  <div class="cn-grid">
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge b">P14</span><span class="cn-item-title">Nizovi</span></div><div class="cn-item-desc">Binomni koeficijenti su koeficijenti geometrijske sume za n→∞.</div><div class="cn-item-arrow">→ binomna suma</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P16</span><span class="cn-item-title">Granice</span></div><div class="cn-item-desc">Stirlingova aproksimacija n!≈(<span class="frac"><span class="num">n</span><span class="den">e</span></span>)ⁿ√(2πn) — limes faktorijela.</div><div class="cn-item-arrow">→ limes n!</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P18</span><span class="cn-item-title">Integrali</span></div><div class="cn-item-desc">Binomni razvoj pomaže u integriranju racionalizacijom.</div><div class="cn-item-arrow">→ razvoj integranda</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P21</span><span class="cn-item-title">Vjerojatnost</span></div><div class="cn-item-desc">Vjerojatnost = povoljni/ukupni ishodi — direktno koristi kombinatoriku iz P15.</div><div class="cn-item-arrow">→ klasična vjerojatnost</div></div>
  </div>
</div>

<div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
<div class="con" style="margin-bottom:20px">
  <div class="cr"><div class="ck b">Permutacije i varijacije</div><div class="cv">P(n) = n! (bez ponav). P<sub>k</sub>(n)=n!/(n&minus;k)! (varijacije bez ponav, poredanim). k! = k&middot;(k&minus;1)&middot;...&middot;1.</div></div>
  <div class="cr"><div class="ck c">Kombinacije</div><div class="cv">C(n,k) = <sup>n</sup>C<sub>k</sub> = n!/(k!(n&minus;k)!). C(n,k)=C(n,n&minus;k). C(n,0)=C(n,n)=1.</div></div>
  <div class="cr"><div class="ck i">Binomni teorem</div><div class="cv">(a+b)<sup>n</sup> = &sum;<sub>k=0</sub><sup>n</sup> C(n,k)&middot;a<sup>n&minus;k</sup>&middot;b<sup>k</sup>. Koeficijenti iz Pascalovog trokuta.</div></div>
  <div class="cr"><div class="ck a">Tipični zadaci</div><div class="cv">Odabir k iz n bez redosljeda: C(n,k). S redoslijedom: P(n,k). Koliko permutacija? n!.</div></div>
  <div class="cr"><div class="ck r">Zamka</div><div class="cv">C(n,k) = C(n,n&minus;k) — iste kombinacije! &nbsp; Pascalov trokut: C(n,k)=C(n&minus;1,k&minus;1)+C(n&minus;1,k).</div></div>
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
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · faktorijel</div><div class="fitb-sent">6! = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','720','fak1')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · kombinacije</div><div class="fitb-sent">C(9,2) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','36','kom2')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · binomni teorem</div><div class="fitb-sent">Koeficijent uz x⁰ u (x+2)³ je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','8','bin2')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · simetrija kombinacija</div><div class="fitb-sent">C(12,10) = C(12,___)</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','2','sim1')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>
  <div class="nav-row"><span class="nb" onclick="sw(1)">← Uči</span><button onclick="navigateChapter('p16')" class="nb primary">Sljedeće poglavlje →</button></div>
</div>
</div></main></div>`;
const js = `function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}
function toggleSidebar(){var s=document.getElementById('sidebar');var o=document.getElementById('overlay');var open=s.classList.toggle('mobile-open');o.classList.toggle('show',open);}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}
var tabProgress=[71,74,88];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i);});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i);});
  var p=tabProgress[i];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p15_tab',i);}catch(e){}
}
/* KOMBINATORIČKI KALKULATOR */
var kkTip='perm';
function setKK(t,btn){
  kkTip=t;
  document.querySelectorAll('[id^="kk-"]').forEach(function(b){if(b.tagName==='BUTTON')b.classList.remove('on');});
  btn.classList.add('on');
  var kl=document.getElementById('kk-k-lbl'),ki=document.getElementById('kk-k');
  kl.style.display=t==='perm'?'none':'';ki.style.display=t==='perm'?'none':'';
}
function fact(n){if(n<=1)return 1;var r=1;for(var i=2;i<=n;i++)r*=i;return r;}
function calcKK(){
  var n=parseInt(document.getElementById('kk-n').value);
  var k=parseInt(document.getElementById('kk-k').value);
  var r=document.getElementById('kk-result');
  var fmt=function(v){return v.toLocaleString('hr');};
  if(isNaN(n)||n<0){r.innerHTML='<span style="color:var(--red)">Upiši n≥0.</span>';return;}
  if(kkTip==='perm'){
    var v=fact(n);
    r.innerHTML='P'+n+'='+n+'!=<strong>'+fmt(v)+'</strong>';
  } else if(kkTip==='var'){
    if(isNaN(k)||k<0||k>n){r.innerHTML='<span style="color:var(--red)">Treba 0≤k≤n.</span>';return;}
    var v=fact(n)/fact(n-k);
    r.innerHTML='V<sup>'+n+'</sup>'+k+'='+n+'!/'+(n-k)+'!=<strong>'+fmt(v)+'</strong>';
  } else {
    if(isNaN(k)||k<0||k>n){r.innerHTML='<span style="color:var(--red)">Treba 0≤k≤n.</span>';return;}
    var v=fact(n)/(fact(k)*fact(n-k));
    r.innerHTML='C('+n+','+k+')='+n+'!/('+k+'!·'+(n-k)+'!)=<strong>'+fmt(v)+'</strong>';
  }
}
/* STEP REVEAL */
var stepSt={};
function nxtStep(id,tot){if(!stepSt[id])stepSt[id]=0;stepSt[id]=Math.min(stepSt[id]+1,tot);for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}var prog=document.getElementById(id+'p');if(prog)prog.textContent=stepSt[id]+' / '+tot;var ns=document.getElementById(id+'s'+stepSt[id]);if(ns){setTimeout(function(){ns.scrollIntoView({behavior:'smooth',block:'nearest'});},60);}}
function rstStep(id,tot){stepSt[id]=0;for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}var prog=document.getElementById(id+'p');if(prog)prog.textContent='0 / '+tot;document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb';});}
var tryExp={
  var1:'V⁸₃=8·7·6=336. Tri mjesta: 8 izbora·7·6=336.',
  kom1:'C(8,3)=8!/(3!·5!)=8·7·6/(3·2·1)=336/6=56.',
  bin1:'(x+2)⁵: eksponent x=3 → 5−k=3 → k=2. T₃=C(5,2)·x³·2²=10·x³·4=40x³. Koef=40.'
};
function tryIt(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();if(!v)return;inp.disabled=true;var btn=inp.parentElement.querySelector('.sr-try-btn');if(btn)btn.disabled=true;var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.className='sr-try-fb show '+(ok?'ok':'fail');fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];}
/* DRILL */
var drData=[
  {q:'5! = 120',ans:true,tag:'faktorijel',exp:'Točno! 5!=5·4·3·2·1=120 ✓'},
  {q:'0! = 0',ans:false,tag:'faktorijel',exp:'Netočno! 0!=1 po definiciji. Ovo je konvencija koja čini kombinatoričke formule konzistentnim.'},
  {q:'C(n,k) = C(n,n−k)',ans:true,tag:'kombinacije',exp:'Točno! Simetrija binomnih koef. C(10,7)=C(10,3). Uvijek koristi manji! ✓'},
  {q:'Varijacije i kombinacije razlikuju se u tome je li redoslijed bitan',ans:true,tag:'var vs komb',exp:'Točno! Redoslijed bitan → varijacije. Nije bitan → kombinacije. ✓'},
  {q:'V⁵₃ = C(5,3)',ans:false,tag:'varijacije',exp:'Netočno! V⁵₃=60, C(5,3)=10. V⁵₃=C(5,3)·3!=60. Razlika je k!=6.'},
  {q:'C(n,0) = 1 za sve n≥0',ans:true,tag:'kombinacije',exp:'Točno! C(n,0)=n!/(0!·n!)=1. Jedan način da ne odaberemo ništa. ✓'},
  {q:'Suma svih koef. (a+b)⁵ je 32',ans:true,tag:'binomni',exp:'Točno! Suma=2⁵=32. Ili: (1+1)⁵=2⁵=32 ✓'},
  {q:'3. član razvoja (a+b)⁴ je C(4,3)·ab³',ans:false,tag:'binomni',exp:'Netočno! 3. član: k=2. T₃=C(4,2)·a²·b²=6a²b². (C(4,3) bi bio 4. član)'},
  {q:'Permutacije s ponavljanjem: ANNA ima 4!/(2!·2!) = 6 rasporeda',ans:true,tag:'permutacije',exp:'Točno! ANNA: A(2×), N(2×) → 4!/(2!·2!)=24/4=6 rasporeda ✓'},
  {q:'C(6,2) = 15',ans:true,tag:'kombinacije',exp:'Točno! C(6,2)=6·5/(2·1)=30/2=15 ✓'},
  {q:'(k+1)-ti član binomnog razvoja je C(n,k)·aⁿ⁻ᵏ·bᵏ',ans:true,tag:'binomni',exp:'Točno! Indeks k ide od 0 do n. (k+1)-ti po redu, k-ti po indeksu. ✓'},
  {q:'C(7,3) = C(7,4)',ans:true,tag:'kombinacije',exp:'Točno! C(7,3)=C(7,7−3)=C(7,4)=35 ✓'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){if(drDone)return;drDone=true;drTot++;var d=drData[drIdx];var ok=chosen===d.ans;if(ok)drOk++;el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById('dr-fb');var tagHtml='<span style="font-family:var(--mono);font-size:9px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:700;margin-right:7px;background:'+(ok?'var(--dim-g)':'var(--dim-r)')+';color:'+(ok?'var(--green)':'var(--red)')+';border-color:'+(ok?'var(--bd-g)':'var(--bd-r)')+'">'+d.tag+'</span>';fb.innerHTML=tagHtml+(ok?'✓ ':'✗ ')+d.exp;fb.className='drill-fb '+(ok?'ok':'ng');document.getElementById('dr-sc').textContent=drOk+' / '+drTot;document.getElementById('dr-next').style.display='inline-flex';document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';updateProgress();}
function nextDrill(){drIdx=(drIdx+1)%drData.length;drDone=false;var q=document.getElementById('dr-q');q.style.opacity='0';setTimeout(function(){q.textContent=drData[drIdx].q;q.style.opacity='1';},150);document.getElementById('dr-fb').className='drill-fb';document.getElementById('dr-next').style.display='none';document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});updateProgress();}
/* BUG */
var bugDone={};
var bugExp={
  b1:'✓ Točno! "Rasporedi slova u grupe od 3" — redoslijed slova unutar grupe je bitan (ABC≠BAC). Treba V⁵₃=5·4·3=60.',
  b2:'✓ Točno! C(n,k)=n!/(k!·(n−k)!). Nedostaje k!=2! u nazivniku. C(10,8)=C(10,2)=10·9/2=45.',
  b3:'✓ Točno! (k+1)-ti član: k=m−1 gdje je m redni broj člana. 3. član → k=2. T₃=C(5,2)·a³·b²=10a³b².'
};
function bug(el,id,ok,eid){if(bugDone[id])return;bugDone[id]=true;el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');});}var expl=document.getElementById(eid);expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];expl.className='bug-expl show '+(ok?'ok':'ng');}
/* ICP */
var icpAnswered={};
var icpFeedback={
  icp1:{
    q1:{ok:'✓ Točno! 4!=4·3·2·1=24',ng:'✗ Netočno. 4!=4·3·2·1=24. Ne 4·3=12 ni 4²=16.'},
    q2:{ok:'✓ Točno! V⁶₂=6·5=30. Dva mjesta: 6 izbora za prvo, 5 za drugo.',ng:'✗ Netočno. V⁶₂=6·5=30. Dva faktora jer k=2.'},
    q3:{ok:'✓ Točno! P₃=3!=6. Tri osobe: 3·2·1=6 rasporeda.',ng:'✗ Netočno. P₃=3!=3·2·1=6.'}
  },
  icp2:{
    q1:{ok:'✓ Točno! C(6,2)=6·5/(2·1)=15',ng:'✗ Netočno. C(6,2)=6!/(2!·4!)=6·5/2=15.'},
    q2:{ok:'✓ Točno! C(7,5)=C(7,2)=7·6/2=21. Simetrija!',ng:'✗ Netočno. C(7,5)=C(7,2) simetrijom. C(7,2)=7·6/2=21.'},
    q3:{ok:'✓ Točno! Redoslijed nije bitan → C(5,3)=10',ng:'✗ Netočno. Odbor → redoslijed nije bitan → kombinacije C(5,3)=10.'}
  },
  icp3:{
    q1:{ok:'✓ Točno! 2. član: k=1. T₂=C(4,1)·a³·b=4a³b',ng:'✗ Netočno. 2. član: k=1. T₂=C(4,1)·a⁴⁻¹·b¹=4a³b.'},
    q2:{ok:'✓ Točno! x²: 5−k=2→k=3. T₄=C(5,3)·x²·1³=10x². Koef=10.',ng:'✗ Netočno. Eksponent x=2: 5−k=2→k=3. T₄=C(5,3)·x²=10x².'},
    q3:{ok:'✓ Točno! Suma=2⁶=64. (1+1)⁶=2⁶=64.',ng:'✗ Netočno. Suma svih koef.=(1+1)ⁿ=2ⁿ=2⁶=64.'}
  }
};
function icp(icpId,qId,el,ok,fbId){var key=icpId+'_'+qId;if(icpAnswered[key])return;icpAnswered[key]=ok;el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById(fbId);var msgs=icpFeedback[icpId]&&icpFeedback[icpId][qId];fb.textContent=msgs?(ok?msgs.ok:msgs.ng):(ok?'✓ Točno!':'✗ Netočno.');fb.className='icp-fb show '+(ok?'ok':'ng');var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});if(allDone){var done=document.getElementById(icpId+'-done');if(done)done.classList.add('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.add('show');var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent=score+' / 3';updateProgress();}}
function retryIcp(icpId){['q1','q2','q3'].forEach(function(q){delete icpAnswered[icpId+'_'+q];});var done=document.getElementById(icpId+'-done');if(done)done.classList.remove('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.remove('show');var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent='0 / 3';document.querySelectorAll('#'+icpId+' .icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});document.querySelectorAll('#'+icpId+' .icp-fb').forEach(function(f){f.className='icp-fb';f.textContent='';})}
/* CHECKPOINT */
var cpState={};
function toggleCP(n){cpState[n]=!cpState[n];var el=document.getElementById('cp'+n);if(el)el.classList.toggle('done',cpState[n]);var done=Object.values(cpState).filter(Boolean).length;var txt=document.getElementById('cp-txt');if(txt)txt.textContent=done+' / 5 potvrđeno';var ready=document.getElementById('cp-ready');if(ready)ready.style.display=done>=5?'inline':'none';updateProgress();}
function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}
/* ADAPTIVE */
var topicErrors={perm:0,komb:0,bin:0,fak:0};
var topicHints={perm:'Greška s permutacijama/varijacijama! Redoslijed bitan→Vⁿₖ=n!/(n−k)!. Svi→n!.',komb:'Greška s kombinacijama! C(n,k)=n!/(k!(n−k)!). Simetrija: C(n,k)=C(n,n−k)!',bin:'Greška s binomnim! (k+1)-ti član=C(n,k)·aⁿ⁻ᵏ·bᵏ. k počinje od 0! Provjeri: eksp.a+eksp.b=n.',fak:'Greška s faktorjelom! 0!=1! n!=(n−1)!·n. Permutacije s ponav.: n!/(n₁!n₂!...)'};
var qTopics={q1:'fak',q2:'perm',q3:'komb',q4:'komb',q5:'bin',q6:'bin',q7:'perm',q8:'komb',q9:'bin',q10:'perm',q11:'komb',q12:'bin'};
var ncvvoTopicMap={'nlive-kom':['q3','q4','q8'],'nlive-bin':['q5','q6','q9','q12'],'nlive-per':['q2','q7','q10'],'nlive-sim':['q11']};
var streak=0,currentQ=1;
function checkAdaptive(qid,ok){var topic=qTopics[qid];if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}if(ok)streak++;else streak=0;updateTimerLabel();if(examMode!=='normal'&&Object.keys(answered).length<total){currentQ=Object.keys(answered).length+1;timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);updateTimerLabel();}updateNcvvoLiveStats();}
function showAdaptiveBanner(topic){var b=document.getElementById('adaptive-banner');var t=document.getElementById('ab-title');var x=document.getElementById('ab-text');if(!b||!t||!x)return;t.textContent='Prijedlog — ponovi: '+topic;x.innerHTML=topicHints[topic];b.style.display='flex';b.scrollIntoView({behavior:'smooth',block:'nearest'});}
function updateNcvvoLiveStats(){Object.keys(ncvvoTopicMap).forEach(function(id){var el=document.getElementById(id);if(!el)return;var qs=ncvvoTopicMap[id];var done=qs.filter(function(q){return answered[q]!==undefined;});if(done.length===0)return;var ok=qs.filter(function(q){return answered[q]===true;}).length;var pct=Math.round(ok/qs.length*100);el.className='ncvvo-live-stat '+(pct>=80?'good':pct>=50?'neutral':'bad');el.textContent=(pct>=80?'✓ ':pct>=50?'~ ':'✗ ')+pct+'% točno';});}
function updateProgress(){var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*8),8):0;var cpDone=Object.values(cpState).filter(Boolean).length;var cpPts=Math.round(cpDone/5*8);var icpPts=0;['icp1','icp2','icp3'].forEach(function(icp){var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;icpPts+=Math.round(done/3*4);});var quizPts=Object.keys(answered).length>0?Math.round(correct/total*16):0;tabProgress[1]=Math.min(71+drillPts+icpPts+cpPts,80);tabProgress[2]=Math.min(71+drillPts+icpPts+cpPts+quizPts,100);var curTab=document.querySelector('.tab.on');var curIdx=curTab?Array.from(document.querySelectorAll('.tab')).indexOf(curTab):0;var p=tabProgress[curIdx];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';try{localStorage.setItem('maturiraj_p15_prog',p);}catch(e){}}
/* SOUND */
var audioCtx=null;
function getAudio(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return audioCtx;}
function playTone(f,d,v,t){var ctx=getAudio();if(!ctx)return;var o=ctx.createOscillator();var g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type=t||'sine';o.frequency.setValueAtTime(f,ctx.currentTime);g.gain.setValueAtTime(v||0.15,ctx.currentTime);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+d);o.start(ctx.currentTime);o.stop(ctx.currentTime+d);}
function soundCorrect(){playTone(880,0.12,0.12);setTimeout(function(){playTone(1100,0.15,0.10);},80);}
function soundWrong(){playTone(220,0.25,0.12,'sawtooth');}
function soundTick(){playTone(440,0.05,0.05,'square');}
function soundTimeUp(){playTone(180,0.4,0.15,'sawtooth');setTimeout(function(){playTone(120,0.5,0.12,'sawtooth');},200);}
function soundComplete(){[523,659,784,1047].forEach(function(f,i){setTimeout(function(){playTone(f,0.2,0.12);},i*100);});}
/* TIMER */
var examMode='normal',timerInterval=null,timerSeconds=90,timerMax=90;
function setExamMode(mode,el){examMode=mode;document.querySelectorAll('.exam-mode-opt').forEach(function(o){o.classList.remove('active');});el.classList.add('active');if(mode!=='normal'){timerMax=mode==='timed'?90:30;document.getElementById('exam-timer').style.display='flex';startTimer();}else{document.getElementById('exam-timer').style.display='none';stopTimer();}}
function drawTimerCanvas(secs,max){var c=document.getElementById('timer-canvas');if(!c)return;var ctx=c.getContext('2d');var r=28,cx=32,cy=32;ctx.clearRect(0,0,64,64);ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(77,158,255,0.12)';ctx.lineWidth=4;ctx.stroke();var pct=secs/max;var col=pct>0.4?'rgba(77,158,255,0.85)':pct>0.2?'rgba(245,158,11,0.9)':'rgba(248,113,113,0.9)';ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+pct*Math.PI*2);ctx.strokeStyle=col;ctx.lineWidth=4;ctx.lineCap='round';ctx.stroke();var numEl=document.getElementById('et-num');if(numEl)numEl.textContent=secs;var wrap=document.getElementById('exam-timer');if(wrap){wrap.classList.toggle('warn',pct<=0.4&&pct>0.2);wrap.classList.toggle('urgent',pct<=0.2);}}
function startTimer(){stopTimer();timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);timerInterval=setInterval(function(){timerSeconds--;drawTimerCanvas(timerSeconds,timerMax);if(timerSeconds>0&&timerSeconds<=10)soundTick();if(timerSeconds<=0){stopTimer();soundTimeUp();}},1000);}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function updateTimerLabel(){var l=document.getElementById('et-q-label');var s=document.getElementById('et-streak');if(l)l.textContent='Pitanje '+currentQ+' / 12';if(s)s.textContent='Niz: '+streak+' ✓';}
/* QUIZ */
var quizInited=false,answered={},correct=0,total=0;
var ALL_QUESTIONS=[
  {id:'q1',topic:'fak',meta:'faktorijel',text:'3! + 2! = ?',opts:[{t:'10',ok:false},{t:'8',ok:true},{t:'12',ok:false},{t:'5',ok:false}],c:'✓ Točno. 3!+2!=6+2=8.',w:'✗ Netočno. 3!=6, 2!=2. Zbroj=8.',proof:['3!=3·2·1=6','2!=2·1=2','3!+2!=8']},
  {id:'q2',topic:'perm',meta:'varijacije',text:'V⁷₂ = ?',opts:[{t:'21',ok:false},{t:'42',ok:true},{t:'14',ok:false},{t:'49',ok:false}],c:'✓ Točno. V⁷₂=7·6=42.',w:'✗ Netočno. V⁷₂=7·6=42. Dva faktora jer k=2.',proof:['V⁷₂=7!/(7−2)!=7!/5!','=7·6','=42']},
  {id:'q3',topic:'komb',meta:'kombinacije',text:'C(5,2) = ?',opts:[{t:'20',ok:false},{t:'10',ok:true},{t:'5',ok:false},{t:'15',ok:false}],c:'✓ Točno. C(5,2)=5·4/(2·1)=10.',w:'✗ Netočno. C(5,2)=5!/(2!·3!)=5·4/2=10.',proof:['C(5,2)=5!/(2!·3!)','=5·4/(2·1)','=10']},
  {id:'q4',topic:'komb',meta:'simetrija kombinacija',text:'C(8,6) = C(8,?) = ?',opts:[{t:'C(8,4)=70',ok:false},{t:'C(8,2)=28',ok:true},{t:'C(8,3)=56',ok:false},{t:'C(8,1)=8',ok:false}],c:'✓ Točno. C(8,6)=C(8,2)=8·7/2=28.',w:'✗ Netočno. C(n,k)=C(n,n−k). C(8,6)=C(8,2)=28.',proof:['C(8,6)=C(8,8−6)=C(8,2)','=8·7/(2·1)','=28']},
  {id:'q5',topic:'bin',meta:'binomni — koeficijent',text:'Koeficijent uz ab³ u (a+b)⁴ je:',opts:[{t:'6',ok:false},{t:'3',ok:false},{t:'4',ok:true},{t:'1',ok:false}],c:'✓ Točno. ab³: eksponent b=3→k=3. C(4,3)=4.',w:'✗ Netočno. Eksponent b=3→k=3. T₄=C(4,3)·a¹·b³=4ab³.',proof:['eksponent b=3 → k=3','T₄=C(4,3)·a¹·b³','C(4,3)=4']},
  {id:'q6',topic:'bin',meta:'binomni — n-ti član',text:'3. član razvoja (x+y)⁵ je:',opts:[{t:'10x³y²',ok:true},{t:'10x²y³',ok:false},{t:'5x⁴y',ok:false},{t:'10xy⁴',ok:false}],c:'✓ Točno. 3. član: k=2. T₃=C(5,2)·x³·y²=10x³y².',w:'✗ Netočno. 3. član: k=2. T₃=C(5,2)·x⁵⁻²·y²=10x³y².',proof:['3. član → k=2','T₃=C(5,2)·x³·y²','=10x³y²']},
  {id:'q7',topic:'perm',meta:'permutacije s ponavljanjem',text:'Broj rasporeda slova MAMA je:',opts:[{t:'24',ok:false},{t:'12',ok:false},{t:'6',ok:true},{t:'4',ok:false}],c:'✓ Točno. 4!/(2!·2!)=24/4=6.',w:'✗ Netočno. M(×2), A(×2): 4!/(2!·2!)=6.',proof:['4 slova: M(2×), A(2×)','4!/(2!·2!)=24/4','=6']},
  {id:'q8',topic:'komb',meta:'kombinacije — odbor',text:'Iz 7 kandidata biramo odbor od 3. Načina:',opts:[{t:'210',ok:false},{t:'35',ok:true},{t:'21',ok:false},{t:'42',ok:false}],c:'✓ Točno. Odbor: redoslijed nije bitan. C(7,3)=35.',w:'✗ Netočno. Odbor→kombinacije. C(7,3)=7·6·5/(3·2·1)=35.',proof:['Odbor → C(7,3)','=7·6·5/(3·2·1)=210/6','=35']},
  {id:'q9',topic:'bin',meta:'A razina · binomni teorem',text:'Koeficijent uz x² u (2x+1)⁴ je:',opts:[{t:'12',ok:false},{t:'24',ok:true},{t:'6',ok:false},{t:'48',ok:false}],c:'✓ Točno. x²: 4−k=2→k=2. C(4,2)·(2x)²·1²=6·4=24.',w:'✗ Netočno. x²: k=2. T₃=C(4,2)·(2)²·x²=6·4·x²=24x². Koef=24.',proof:['eksponent x=2: 4−k=2 → k=2','T₃=C(4,2)·(2x)²·1²','=6·4x²=24x² → koef=24']},
  {id:'q10',topic:'perm',meta:'A razina · varijacije s uvjetom',text:'Troznamenkasti brojevi bez ponavljanja od {1,2,3,4,5} ima ih:',opts:[{t:'125',ok:false},{t:'60',ok:true},{t:'10',ok:false},{t:'120',ok:false}],c:'✓ Točno. V⁵₃=5·4·3=60.',w:'✗ Netočno. Redoslijed bitan, bez ponavljanja: V⁵₃=5·4·3=60.',proof:['Redoslijed bitan → V⁵₃','=5·4·3','=60']},
  {id:'q11',topic:'komb',meta:'A razina · C(n,k) simetrija',text:'C(15,12) = ?',opts:[{t:'455',ok:true},{t:'1365',ok:false},{t:'105',ok:false},{t:'3003',ok:false}],c:'✓ Točno. C(15,12)=C(15,3)=15·14·13/6=455.',w:'✗ Netočno. C(15,12)=C(15,3)=15·14·13/(3·2·1)=455.',proof:['C(15,12)=C(15,3)','=15·14·13/6','=2730/6=455']},
  {id:'q12',topic:'bin',meta:'A razina · slobodni koef.',text:'Slobodni koef. (bez x) u razvoju (x−2)³ je:',opts:[{t:'8',ok:false},{t:'−8',ok:true},{t:'−6',ok:false},{t:'6',ok:false}],c:'✓ Točno. Slobodni: k=3, T₄=C(3,3)·x⁰·(−2)³=1·(−8)=−8.',w:'✗ Netočno. Slobodni član: x⁰→k=3. T₄=C(3,3)·(−2)³=−8.',proof:['Slobodni (x⁰): 3−k=0 → k=3','T₄=C(3,3)·x⁰·(−2)³','=1·(−8)=−8']}
];
var FExp={fak1:'6!=6·5·4·3·2·1=720.',kom2:'C(9,2)=9·8/(2·1)=72/2=36.',bin2:'x⁰ u (x+2)³: k=3. T₄=C(3,3)·x⁰·2³=1·8=8.',sim1:'C(12,10)=C(12,12−10)=C(12,2).'};
function renderQuiz(){var cont=document.getElementById('quiz-container');var html='';ALL_QUESTIONS.forEach(function(q){var optsHtml=q.opts.map(function(o,i){return '<div class="qo" onclick="qa(\\''+q.id+'\\','+i+','+o.ok+',\\''+q.id+'e\\')">'+o.t+'</div>';}).join('');html+='<div class="qb" id="qb-'+q.id+'"><div class="qm">'+q.meta+'</div><div class="qq">'+q.text+'</div><div class="qb-opts">'+optsHtml+'</div><div class="qe" id="'+q.id+'e"></div></div>';});cont.innerHTML=html;total=ALL_QUESTIONS.length;}
function qa(qid,idx,ok,eid){if(answered[qid]!==undefined)return;answered[qid]=ok;if(ok){correct++;soundCorrect();}else soundWrong();var qdata=ALL_QUESTIONS.find(function(q){return q.id===qid;});if(!qdata)return;document.querySelectorAll('#qb-'+qid+' .qo').forEach(function(o,i){o.classList.add('dis');if(i===idx)o.classList.add(ok?'ok':'ng');if(!ok&&qdata.opts[i].ok)o.classList.add('ok');});var e=document.getElementById(eid);var proofHtml='';if(!ok&&qdata.proof){proofHtml='<div class="mini-proof"><div class="mini-proof-lbl">→ Mini dokaz</div>'+qdata.proof.map(function(s,i){return '<div class="step"><span class="sn">'+(i+1)+'</span><span class="st">'+s+'</span></div>';}).join('')+'</div>';}e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>'+proofHtml;e.classList.add('show');checkAdaptive(qid,ok);if(examMode!=='normal')stopTimer();if(examMode!=='normal'&&Object.keys(answered).length<total)startTimer();if(Object.keys(answered).length===total){var s=document.getElementById('score');document.getElementById('snum').textContent=correct+'/'+total;var pct=Math.round(correct/total*100);document.getElementById('slbl').textContent=pct>=80?'Izvrsno! Spreman si za P16 →':pct>=60?'Dobro! Ponovi slabe točke.':'Ponovi gradivo P15 prije nastavka.';if(s)s.classList.add('show');soundComplete();updateProgress();}updateProgress();}
function chkf(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();var btn=inp.parentElement.querySelector('.fitb-btn');if(!v)return;inp.disabled=true;if(btn)btn.disabled=true;fb.classList.add('show');var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];}
/* RESTORE TAB (mora biti na kraju) */
(function(){try{var s=sessionStorage.getItem('p15_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){try{var saved=localStorage.getItem('maturiraj_p15_prog');if(saved!==null){var pct=parseInt(saved);if(pct>0){var bar=document.getElementById('prog-bar');var lbl=document.getElementById('prog-pct');if(bar)bar.style.width=pct+'%';if(lbl)lbl.textContent=pct+'%';}}}catch(e){}})(  );

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
const meta = {id:'P15',pidLower:'p15',title:"Maturiraj.hr \u2014 Mat A \u00b7 P15 \u00b7 Kombinatorika",subject:'matematika-a',lsKey:'maturiraj_p15_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p15');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P15] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p15"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p15_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p15_prog',String(pct));}catch(e){}}
// ── Complete page for MatChapterViewer (iframe srcDoc) ───────────────────────
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'*\');}}\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'*\')}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P15 · Kombinatorika</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';

export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};