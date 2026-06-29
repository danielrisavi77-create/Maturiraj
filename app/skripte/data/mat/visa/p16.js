/**
 * Maturiraj.hr — Mat A · P16
 * Maturiraj.hr — Mat A · P16 · Granice Funkcija
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
@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
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
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>16 · Granice</button>
  <button class="sb-item" onclick="navigateChapter('p17')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>17 · Derivacije</button>
  <button class="sb-item" onclick="navigateChapter('p18')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>18 · Integrali</button>
  <button class="sb-item" onclick="navigateChapter('p19')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>19 · Složeni maturalni zadaci</button>
  <button class="sb-item" onclick="navigateChapter('p20')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>20 · Završna sistematizacija</button>
  <div class="sb-lbl">// Bonus</div>
  <button class="sb-item" onclick="navigateChapter('p21')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>21 · Vjerojatnost</button>
  <div class="sb-footer">uvod · kako koristiti<br>maturiraj.hr · A razina</div>
</nav>
<main class="main"><div class="content-wrap">
<div class="bc"><span>← poglavlja</span><span class="bc-sep">/</span><span>a-razina</span><span class="bc-sep">/</span><span class="bc-cur">granice-funkcija-neprekidnost-asimptote</span></div>
<div class="tabs" role="tablist">
  <div class="tab on" id="tab0" role="tab" tabindex="0" aria-controls="l0" aria-selected="true" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" id="tab1" role="tab" tabindex="-1" aria-controls="l1" aria-selected="false" onclick="sw(1)">📐 Uči</div>
  <div class="tab" id="tab2" role="tab" tabindex="-1" aria-controls="l2" aria-selected="false" onclick="sw(2)">🧠 Vježbaj</div>
</div>

<!-- L0 -->
<div class="layer on" id="l0" role="tabpanel" aria-labelledby="tab0">
  <div class="hero"><div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 16 od 21 · A razina · kalkulus</div>
    <h1 class="hero-title">Granice —<br><span>Limes Funkcije i Neprekidnost</span></h1>
    <p class="hero-sub">Temelj cijelog kalkulusa — što se događa s funkcijom kad se x neograničeno približava nekoj vrijednosti?</p>
    <div class="hero-meta"><span class="hchip b">3 teme</span><span class="hchip a">⭐ Temelj derivacija i integrala</span><span class="hchip c">~45 min</span></div>
    <div class="pt"><div class="pb" style="width:76%"></div></div>
  </div>
  <div class="tags">
    <span class="pill p-b">Limes funkcije</span><span class="pill p-c">Jednostrani limesi</span>
    <span class="pill p-i">Nedeterminirani oblici</span><span class="pill p-a">Neprekidnost</span>
    <span class="pill p-v">Asimptote</span><span class="pill p-r">Limes u ±∞</span>
  </div>
  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int"><div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">Granica (limes) je odgovor na pitanje: "Čemu se f(x) <em>bliži</em> kad x→a?" — ne što je f(a), nego kamo funkcija <em>teži</em>.<br><br>Bez limesa nema derivacije (derivacija je limes razlomka!), a bez derivacije nema integrala. Sve što dolazi u P17 i P18 direktno ovisi o razumijevanju ovog poglavlja.<br><br><strong>Nedeterminirani oblici <span class="frac"><span class="num">0</span><span class="den">0</span></span> i ∞/∞ su ključ maturalnih zadataka — uvijek se rješavaju faktorizacijom, kraćenjem ili L'Hôpitalovim pravilom.</strong></div>
  </div>
  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">lim f(x)</div><div class="sc-name">Limes funkcije</div><div class="sc-desc">lim(x→a) f(x)=L: f(x) se bliži L kad x→a. Neovisno o f(a)!</div></div>
    <div class="sc"><div class="sc-ico si-c">0/0</div><div class="sc-name">Nedeterminirani oblici</div><div class="sc-desc">0/0, ∞/∞, 0·∞, ∞−∞: faktoriziraj, pokrati, primijeni pravilo.</div></div>
    <div class="sc"><div class="sc-ico si-i">x→±∞</div><div class="sc-name">Limes u beskonačnosti</div><div class="sc-desc">Dijeli s n^k. Stupanj br.>naz.→∞, br.&lt;naz.→0, jednaki→omjer koef.</div></div>
    <div class="sc"><div class="sc-ico si-a">f(a)=L</div><div class="sc-name">Neprekidnost</div><div class="sc-desc">f neprekidna u a ↔ lim(x→a)f(x)=f(a). Tri uvjeta: postoji f(a), postoji limes, jednaki su.</div></div>
    <div class="sc"><div class="sc-ico si-v">y=b, x=a</div><div class="sc-name">Asimptote</div><div class="sc-desc">Horizontalna: lim(x→±∞)f(x)=b. Vertikalna: lim(x→a)f(x)=±∞.</div></div>
    <div class="sc"><div class="sc-ico si-r">sin x/x</div><div class="sc-name">Važni limesi</div><div class="sc-desc">lim(x→0)sinx/x=1 · lim(x→0)(1−cosx)/x²=1/2 · lim(x→0)(eˣ−1)/x=1</div></div>
  </div>
  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">Definicija limesa</div><div class="cv">lim(x→a)f(x)=L: za svaki ε>0 postoji δ>0 t.d. |x−a|&lt;δ → |f(x)−L|&lt;ε</div></div>
    <div class="cr"><div class="ck b">Jednostrani limesi</div><div class="cv">lim(x→a⁺): x→a s desna · lim(x→a⁻): x→a s lijeva. Limes postoji ↔ lijevostrani=desnostrani.</div></div>
    <div class="cr"><div class="ck c">Nedeterminirani oblici</div><div class="cv">0/0: faktoriziraj i pokrati. ∞/∞: podijeli s dominantnim. 0·∞: prepiši kao razlomak.</div></div>
    <div class="cr"><div class="ck i">Limes u ±∞</div><div class="cv">Stupanj br.>naz.→±∞ · br.&lt;naz.→0 · isti stupnjevi→omjer vodećih koef.</div></div>
    <div class="cr"><div class="ck a">Neprekidnost</div><div class="cv">f neprekidna u a: (1) f(a) definirana, (2) lim postoji, (3) lim=f(a). Sva tri uvjeta!</div></div>
    <div class="cr"><div class="ck v">Horizontalna asimptota</div><div class="cv">y=b ako lim(x→+∞)f(x)=b ili lim(x→−∞)f(x)=b.</div></div>
    <div class="cr"><div class="ck r">Vertikalna asimptota</div><div class="cv">x=a ako lim(x→a)f(x)=±∞. Nastaje kad nazivnik→0 a brojnik≠0.</div></div>
    <div class="cr"><div class="ck r">Zamka</div><div class="cv">lim(x→a)f(x) ne ovisi o f(a)! Limes može postojati i kad f(a) nije definirana.</div></div>
  </div>
  <div class="nav-row"><button onclick="navigateChapter('p15')" class="nb">← P15 · Kombinatorika</button><span class="nb primary" onclick="sw(1)">Uči detaljno →</span></div>
</div>
<!-- L1 -->
<div class="layer" id="l1" role="tabpanel" aria-labelledby="tab1">

<!-- 01 LIMES FUNKCIJE -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · LIMES FUNKCIJE I NEDETERMINIRANI OBLICI</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — "čemu se funkcija bliži, ne što jest"</div>
  <div class="box-int-txt">Limes pita: ako x postaje sve bliži vrijednosti a (ali nikad nije baš a), čemu se f(x) bliži?<br><br>Klasičan primjer: f(x)=(x²−1)/(x−1). Za x=1: <span class="frac"><span class="num">0</span><span class="den">0</span></span> (nije definirano!). Ali za x→1: (x²−1)/(x−1)=(x+1)(x−1)/(x−1)=x+1→2. Limes je 2, iako f(1) ne postoji.<br><br><strong>0/0 nije "nula" — to je signal da treba faktorizirati i pokratiti! Tek nakon pokraćivanja uvrstiti x=a.</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">PRAVILA ZA RAČUNANJE LIMESA</span>
  <span class="val">lim(f±g) = lim f ± lim g</span> · <span class="val">lim(f·g) = lim f · lim g</span><br>
  <span class="val">lim(<span class="frac"><span class="num">f</span><span class="den">g</span></span>) = lim f / lim g</span> <span class="cmt">— samo ako lim g ≠ 0!</span><br>
  <span class="val">lim c = c</span> · <span class="val">lim x = a</span> · <span class="val">lim xⁿ = aⁿ</span><br>
  <span class="cmt">Nedeterminirani oblici: <span class="frac"><span class="num">0</span><span class="den">0</span></span>, ∞/∞, 0·∞, ∞−∞, 1^∞, 0⁰, ∞⁰</span>
</div>
<div class="box-for"><span class="box-for-lbl">METODE ZA NEDETERMINIRANE OBLIKE</span>
  <span class="val">0/0: faktoriziraj brojnik i/ili nazivnik, pokrati zajednički faktor</span><br>
  <span class="val">∞/∞: podijeli s najvećom potencijom x u nazivniku</span><br>
  <span class="val">0·∞: prepiši kao <span class="frac"><span class="num">f</span><span class="den">g</span></span> ili <span class="frac"><span class="num">g</span><span class="den">f</span></span> i primijeni ∞/∞ ili 0/0</span><br>
  <span class="val">∞−∞: pomnoži s konjugatom (a−b)(a+b) = a²−b²</span><br>
  <span class="cmt">Konjugat: lim(√(x+1)−√x) → pomnoži s (√(x+1)+√x)/(√(x+1)+√x)</span>
</div>

<!-- LIMES EXPLORER -->
<div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Limes Explorer — odaberi tip</span></div>
  <div class="disc-body">
    <div class="disc-row" style="flex-wrap:wrap;gap:6px;margin-bottom:10px">
      <button class="disc-btn on" id="lim-b0" onclick="setLim(0,this)">0/0 tip</button>
      <button class="disc-btn" id="lim-b1" onclick="setLim(1,this)">∞/∞ tip</button>
      <button class="disc-btn" id="lim-b2" onclick="setLim(2,this)">x→∞</button>
      <button class="disc-btn" id="lim-b3" onclick="setLim(3,this)">Konjugat</button>
    </div>
    <div id="lim-display" style="font-family:var(--mono);font-size:13px;color:var(--t2);line-height:2"></div>
  </div>
</div>

<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Oblik 0/0</div><div class="cmp-body">
    <div class="cmp-row">Signal: faktoriziraj!</div>
    <div class="cmp-row">Pokrati zajednički (x−a)</div>
    <div class="cmp-row">Tek onda uvrsti x=a</div>
    <div class="cmp-row">Npr. (x²−4)/(x−2)→x+2=4</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Oblik ∞/∞</div><div class="cmp-body">
    <div class="cmp-row">Signal: podijeli s n^k!</div>
    <div class="cmp-row">k = stupanj nazivnika</div>
    <div class="cmp-row">Isti stupnjevi→omjer koef.</div>
    <div class="cmp-row">Npr. (3x²+1)/(x²−2)→3</div>
  </div></div>
</div>

<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — limes ≠ vrijednost u točki</div>
  <div class="box-men-txt">Limes opisuje <em>ponašanje</em> funkcije oko točke, ne <em>vrijednost</em> u točki.<br>f(x)=(x²−1)/(x−1) nema vrijednost za x=1, ali limes za x→1 je 2.<br><strong>Vizualizacija: graf ima "rupu" u točki (1,2), ali se linija prema njoj bliži. Limes postoji, f(1) ne.</strong></div>
</div>

<div class="sr" id="sr1">
  <div class="sr-head"><div class="sr-title">Nedeterminirani oblik <span class="frac"><span class="num">0</span><span class="den">0</span></span> — korak po korak</div><div class="sr-task">lim(x→3) (x²−9)/(x−3)</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr1s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Provjeri — uvrstimo x=3</div><div class="sr-txt">(9−9)/(3−3)=0/0 → nedeterminirani oblik → faktorizacija!</div></div></div></div>
    <div class="sr-step" id="sr1s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Faktoriziraj brojnik</div><div class="sr-txt">x²−9=(x+3)(x−3) → lim(x→3) (x+3)(x−3)/(x−3)</div></div></div></div>
    <div class="sr-step" id="sr1s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Pokrati i uvrsti</div><div class="sr-txt">= lim(x→3) (x+3) = 3+3 = <strong>6</strong>
      <div class="sr-tryit"><div class="sr-try-lbl">↳ lim(x→2) (x²−4)/(x−2) = ?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try1" type="text" placeholder="lim=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try1','try1-fb','4','lim1')">Provjeri</button></div>
        <div class="sr-try-fb" id="try1-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr1',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr1',3)">↺ Resetiraj</button><span class="sr-prog" id="sr1p">0 / 3</span></div>
</div>

<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — nedeterminirani oblik</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa lim(x→2) (x²−4)/(x−2):</p>
  <div class="bug-task">lim = (4−4)/(2−2) = <span class="frac"><span class="num">0</span><span class="den">0</span></span> = <span class="wrong">0</span></div>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno, <span class="frac"><span class="num">0</span><span class="den">0</span></span> = 0</div>
    <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška: <span class="frac"><span class="num">0</span><span class="den">0</span></span> je nedeterminirani oblik — treba faktorizirati! x²−4=(x+2)(x−2) → lim=x+2=4</div>
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška: <span class="frac"><span class="num">0</span><span class="den">0</span></span> = 1</div>
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Greška: limes ne postoji jer nazivnik→0</div>
  </div><div class="bug-expl" id="b1e"></div>
</div></div>

<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — limes funkcije</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>lim ≠ vrijednost u točki. Limes opisuje ponašanje oko točke.</li>
  <li class="b20-item"><div class="b20-dot"></div>0/0 → faktoriziraj i pokrati. ∞/∞ → podijeli s n^k.</li>
  <li class="b20-item"><div class="b20-dot"></div>Tek nakon algebarskog sređivanja — uvrsti x=a!</li>
</ul></div>

<div class="inline-cp" id="icp1">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — limes</span><span class="icp-score" id="icp1-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp1q1"><div class="icp-q-text">lim(x→3) (x²−9)/(x−3) = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">0</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">3</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">6</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">ne postoji</div>
    </div><div class="icp-fb" id="icp1q1fb"></div></div>
    <div class="icp-q" id="icp1q2"><div class="icp-q-text">lim(x→0) (sin x)/x = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">0</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">1</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">∞</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">ne postoji</div>
    </div><div class="icp-fb" id="icp1q2fb"></div></div>
    <div class="icp-q" id="icp1q3"><div class="icp-q-text">lim(x→1) (x³−1)/(x−1) = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">0</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">1</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">3</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">∞</div>
    </div><div class="icp-fb" id="icp1q3fb"></div></div>
    <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na limes u beskonačnosti →</div>
    <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
  </div>
</div>
<!-- 02 LIMES U BESKONAČNOSTI I ASIMPTOTE -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · LIMES U BESKONAČNOSTI I ASIMPTOTE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — "što se događa za jako veliki ili mali x?"</div>
  <div class="box-int-txt">Kad x→+∞, što dominira? Uvijek viša potencija! 3x²+100x+99999 → za dovoljno veliki x, 3x² je daleko najveći člen.<br><br>Horizontalna asimptota je "granica" kojoj se graf bliži ali je nikad ne dostiže (ili dostiže). Vertikalna asimptota je gdje funkcija "eksplodira".<br><br><strong>Kosa (kosa) asimptota y=ax+b: a=lim(x→∞)f(x)/x, b=lim(x→∞)[f(x)−ax]. Pojavljuje se kad stupanj brojnika = stupanj nazivnika + 1.</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">LIMES U BESKONAČNOSTI — pravila</span>
  <span class="val">lim(x→∞) <span class="frac"><span class="num">1</span><span class="den">xⁿ</span></span> = 0</span> za n>0 · <span class="val">lim(x→∞) c = c</span><br>
  <span class="val">Razlomci: podijeli s xᵏ</span> gdje je k = stupanj nazivnika<br>
  <span class="val">Br. > Naz.</span>: lim = ±∞ · <span class="val">Br. &lt; Naz.</span>: lim = 0 · <span class="val">Isti stup.</span>: lim = omjer vodećih koef.<br>
  <span class="cmt">Primjer: lim(3x²+2x)/(x²−1) = <span class="frac"><span class="num">3</span><span class="den">1</span></span> = 3 (isti stupanj, omjer koef.)</span>
</div>
<div class="box-for"><span class="box-for-lbl">ASIMPTOTE — definicije i kako naći</span>
  <span class="val">Horizontalna y=b</span>: b = lim(x→±∞) f(x)<br>
  <span class="val">Vertikalna x=a</span>: lim(x→a) |f(x)| = ∞ (nazivnik→0, brojnik≠0)<br>
  <span class="val">Kosa y=ax+b</span>: a = lim(x→∞) f(x)/x, b = lim(x→∞) [f(x)−ax]<br>
  <span class="cmt">Kosa asimptota postoji samo ako nema horizontalne (stupanj br. = naz.+1)</span>
</div>

<!-- ASIMPTOTE KALKULATOR -->
<div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Asimptote Explorer — racionalne funkcije</span></div>
  <div class="disc-body">
    <div class="disc-row" style="flex-wrap:wrap;gap:6px;margin-bottom:8px">
      <button class="disc-btn on" id="as-b0" onclick="setAs(0,this)">x/(x+1)</button>
      <button class="disc-btn" id="as-b1" onclick="setAs(1,this)">(x²+1)/x</button>
      <button class="disc-btn" id="as-b2" onclick="setAs(2,this)">1/(x−2)²</button>
      <button class="disc-btn" id="as-b3" onclick="setAs(3,this)">(2x²−1)/(x²+3)</button>
    </div>
    <div id="as-display" style="font-family:var(--mono);font-size:12.5px;color:var(--t2);line-height:2.1"></div>
  </div>
</div>

<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Horizontalna asimptota</div><div class="cmp-body">
    <div class="cmp-row">lim(x→±∞)f(x)=b</div>
    <div class="cmp-row">Stupanj br. ≤ stupanj naz.</div>
    <div class="cmp-row">y=b je HA</div>
    <div class="cmp-row">Može biti i y=0</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Vertikalna asimptota</div><div class="cmp-body">
    <div class="cmp-row">lim(x→a)|f(x)|=∞</div>
    <div class="cmp-row">Nazivnik=0, brojnik≠0</div>
    <div class="cmp-row">x=a je VA</div>
    <div class="cmp-row">Pazi: možda i nema (pokrata)!</div>
  </div></div>
</div>

<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — asimptote kao "rubovi grafa"</div>
  <div class="box-men-txt">Horizontalna asimptota: graf se "stanjuje" prema vodoravnoj liniji. f(x)=x/(x+1)→1 jer za veliki x: x/(x+1)≈<span class="frac"><span class="num">x</span><span class="den">x</span></span>=1.<br>Vertikalna: gdje graf "eksplodira". f(x)=1/(x−2): za x→2, nazivnik→0 → f→±∞.<br><strong>Trik: vertikalna asimptota x=a postoji samo ako se (x−a) NE pokraćuje iz brojnika!</strong></div>
</div>

<div class="sr" id="sr2">
  <div class="sr-head"><div class="sr-title">Asimptote — korak po korak</div><div class="sr-task">Nađi asimptote f(x)=(2x+1)/(x−3).</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr2s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Vertikalna asimptota</div><div class="sr-txt">Nazivnik=0: x−3=0 → x=3. Brojnik: 2·3+1=7≠0. → VA: <strong>x=3</strong></div></div></div></div>
    <div class="sr-step" id="sr2s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Horizontalna asimptota</div><div class="sr-txt">lim(x→∞)(2x+1)/(x−3): isti stupanj 1 → omjer vodećih koef: <span class="frac"><span class="num">2</span><span class="den">1</span></span>=2 → HA: <strong>y=2</strong></div></div></div></div>
    <div class="sr-step" id="sr2s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Provjera i kosa asimptota</div><div class="sr-txt">Ima HA (y=2) → nema kose asimptote. Isti stupnjevi → HA uvijek!
      <div class="sr-tryit"><div class="sr-try-lbl">↳ Horizontalna asimptota f(x)=(3x²−1)/(x²+2)?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try2" type="text" placeholder="y=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try2','try2-fb','3','as1')">Provjeri</button></div>
        <div class="sr-try-fb" id="try2-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr2',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr2',3)">↺ Resetiraj</button><span class="sr-prog" id="sr2p">0 / 3</span></div>
</div>

<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — vertikalna asimptota</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik traži VA od f(x)=(x²−4)/(x−2):</p>
  <div class="bug-task">VA: <span class="wrong">x=2</span> jer nazivnik=0</div>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno, nazivnik=0 za x=2</div>
    <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška: x²−4=(x−2)(x+2) → pokrata! f(x)=x+2 (x≠2). Nema VA, samo rupa u grafu!</div>
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Greška: VA je x=−2</div>
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Greška: VA je y=2</div>
  </div><div class="bug-expl" id="b2e"></div>
</div></div>

<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — asimptote</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>HA y=b: lim(x→∞)f(x)=b. Isti stupnjevi → omjer vodećih koef.</li>
  <li class="b20-item"><div class="b20-dot"></div>VA x=a: nazivnik=0 i NE pokraćuje se s brojnikom!</li>
  <li class="b20-item"><div class="b20-dot"></div>Kosa asimptota: samo kad stupanj br.=stupanj naz.+1</li>
</ul></div>

<div class="inline-cp" id="icp2">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — asimptote</span><span class="icp-score" id="icp2-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp2q1"><div class="icp-q-text">lim(x→∞) (5x²+3)/(2x²−1) = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">0</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">∞</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">5/2</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">3</div>
    </div><div class="icp-fb" id="icp2q1fb"></div></div>
    <div class="icp-q" id="icp2q2"><div class="icp-q-text">Vertikalna asimptota f(x)=1/(x+4) je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">x=1</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">x=−4</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">y=0</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">x=4</div>
    </div><div class="icp-fb" id="icp2q2fb"></div></div>
    <div class="icp-q" id="icp2q3"><div class="icp-q-text">Horizontalna asimptota f(x)=3x/(x²+1) je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">y=3</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">y=0</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">y=1</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">nema</div>
    </div><div class="icp-fb" id="icp2q3fb"></div></div>
    <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na neprekidnost →</div>
    <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
  </div>
</div>
<!-- 03 NEPREKIDNOST -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · NEPREKIDNOST FUNKCIJE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — "možeš li nacrtati bez podizanja olovke?"</div>
  <div class="box-int-txt">Neprekidna funkcija je ona čiji graf možeš nacrtati od jednog kraja do drugog bez podizanja olovke — nema "skokova", "rupa" ni "prekida".<br><br>Formalno, tri uvjeta moraju biti ispunjena: f(a) definirana, lim(x→a)f(x) postoji, i limes jednak f(a).<br><br><strong>Najčešći prekid na maturi: komadna (piecewise) funkcija — treba provjeriti neprekidnost u točki spajanja!</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">NEPREKIDNOST — tri uvjeta</span>
  <span class="val">f je neprekidna u a ako i samo ako:</span><br>
  <span class="val">1. f(a) je definirana</span> <span class="cmt">— točka postoji</span><br>
  <span class="val">2. lim(x→a) f(x) postoji</span> <span class="cmt">— lijevi i desni limes su jednaki</span><br>
  <span class="val">3. lim(x→a) f(x) = f(a)</span> <span class="cmt">— limes = vrijednost</span><br>
  <span class="cmt">Sva tri uvjeta su neophodna! Nedostaje jedan → prekid.</span>
</div>
<div class="box-for"><span class="box-for-lbl">TIPOVI PREKIDA</span>
  <span class="val">Uklonjivi prekid</span>: lim postoji ali ≠ f(a) ili f(a) nije definirano. Može se "popraviti".<br>
  <span class="val">Skokni prekid</span>: lijevi limes ≠ desni limes. Funkcija skače.<br>
  <span class="val">Neograničeni prekid</span>: lim = ±∞. Vertikalna asimptota.<br>
  <span class="cmt">Neprekidne na ℝ: polinomi, sin, cos, eˣ. Racionalne: svugdje osim gdje je naz.=0.</span>
</div>

<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Neprekidna u a</div><div class="cmp-body">
    <div class="cmp-row">f(a) postoji ✓</div>
    <div class="cmp-row">lim(x→a) f(x) postoji ✓</div>
    <div class="cmp-row">lim = f(a) ✓</div>
    <div class="cmp-row">Graf: bez rupa i skokova</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Prekid u a</div><div class="cmp-body">
    <div class="cmp-row">f(a) ne postoji, ili</div>
    <div class="cmp-row">lim ne postoji, ili</div>
    <div class="cmp-row">lim ≠ f(a)</div>
    <div class="cmp-row">Graf: rupa, skok ili ∞</div>
  </div></div>
</div>

<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — komadna funkcija</div>
  <div class="box-men-txt">f(x) = { x+1 za x&lt;2; 5 za x=2; x²−1 za x>2 }<br>Neprekidnost u x=2: f(2)=5. Lim s lijeva: x+1→3. Lim s desna: x²−1→3. Lim=3≠f(2)=5 → <strong>prekid!</strong><br>Kad bi f(2)=3, funkcija bi bila neprekidna. Ovako ima skokni prekid.</div>
</div>

<div class="sr" id="sr3">
  <div class="sr-head"><div class="sr-title">Neprekidnost — korak po korak</div><div class="sr-task">f(x)={x²+a za x≤1; 3x−1 za x>1}. Nađi a da f bude neprekidna.</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr3s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Uvjet neprekidnosti u x=1</div><div class="sr-txt">Treba: lim(x→1⁻)f(x) = lim(x→1⁺)f(x) = f(1)</div></div></div></div>
    <div class="sr-step" id="sr3s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Izračunaj oba jednostrana limesa</div><div class="sr-txt">Lijevo: lim(x→1⁻) x²+a = 1+a<br>Desno: lim(x→1⁺) 3x−1 = 2<br>f(1)=1²+a=1+a</div></div></div></div>
    <div class="sr-step" id="sr3s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Postavi jednadžbu i riješi</div><div class="sr-txt">1+a = 2 → <strong>a = 1</strong>
      <div class="sr-tryit"><div class="sr-try-lbl">↳ Je li f(x)=(x²−1)/(x−1) neprekidna u x=1?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try3" type="text" placeholder="da/ne" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try3','try3-fb','ne','nep1')">Provjeri</button></div>
        <div class="sr-try-fb" id="try3-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr3',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr3',3)">↺ Resetiraj</button><span class="sr-prog" id="sr3p">0 / 3</span></div>
</div>

<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — neprekidnost</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik tvrdi: "f(x)=(x²−4)/(x−2) je neprekidna na ℝ jer lim(x→2)=4"</p>
  <div class="bug-task">Zaključak: <span class="wrong">f neprekidna svuda</span></div>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno, limes postoji pa je neprekidna</div>
    <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Greška: f(2) nije definirana! Limes=4 ali f(2) ne postoji → uklonjivi prekid u x=2.</div>
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: limes ne postoji za x→2</div>
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Točno, pokrata uklanja prekid</div>
  </div><div class="bug-expl" id="b3e"></div>
</div></div>

<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — neprekidnost</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>Tri uvjeta: f(a) definirana + lim postoji + lim=f(a). Sva tri!</li>
  <li class="b20-item"><div class="b20-dot"></div>Komadna funkcija: provjeri jednostrane limese u točki spajanja.</li>
  <li class="b20-item"><div class="b20-dot"></div>Uklonjivi prekid: lim postoji ali f(a) nije definirano ili ≠ lim.</li>
</ul></div>

<div class="inline-cp" id="icp3">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — neprekidnost</span><span class="icp-score" id="icp3-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp3q1"><div class="icp-q-text">Koliko uvjeta mora biti ispunjeno za neprekidnost u točki?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">1</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">2</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">3</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">4</div>
    </div><div class="icp-fb" id="icp3q1fb"></div></div>
    <div class="icp-q" id="icp3q2"><div class="icp-q-text">f(x)=1/x je neprekidna:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">svuda na ℝ</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">svuda osim x=0</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">samo za x>0</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">nigdje</div>
    </div><div class="icp-fb" id="icp3q2fb"></div></div>
    <div class="icp-q" id="icp3q3"><div class="icp-q-text">Tip prekida f(x)=(x²−9)/(x−3) u x=3 je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">uklonjivi</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">skokni</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">neograničeni</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">nema prekida</div>
    </div><div class="icp-fb" id="icp3q3fb"></div></div>
    <div class="icp-done" id="icp3-done">✓ Izvrsno! Nastavi na kombinirane zadatke →</div>
    <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
  </div>
</div>
<!-- A RAZINA -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>
<div class="combo"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — oblik <span class="frac"><span class="num">0</span><span class="den">0</span></span> s kvadratnim korijenom</div></div><div class="combo-body">
  <div class="combo-task">lim(x→0) (√(x+4)−2)/x</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Oblik <span class="frac"><span class="num">0</span><span class="den">0</span></span>. Pomnoži s konjugatom: (√(x+4)+2)/(√(x+4)+2)</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Brojnik: (√(x+4))²−2²=x+4−4=x. Nazivnik: x·(√(x+4)+2)</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">= x/(x·(√(x+4)+2)) = 1/(√(x+4)+2) → 1/(2+2) = 1/4</div></div>
  </div><div class="combo-ans">lim = 1/4</div>
</div></div>

<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — kosa asimptota</div></div><div class="combo-body">
  <div class="combo-task">Nađi kosu asimptotu f(x)=(x²+2x−1)/(x+1).</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Stupanj br.=2, naz.=1 → stupanj br.=naz.+1 → kosa asimptota postoji</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">a=lim f(x)/x=lim(x²+2x−1)/(x²+x)=1. b=lim[f(x)−x]=lim(x²+2x−1−x²−x)/(x+1)=lim(x−1)/(x+1)=1</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Ili: dijeli x²+2x−1 s x+1 → x+1 ostatak −2 → f(x)=x+1−2/(x+1)</div></div>
  </div><div class="combo-ans">Kosa asimptota: y=x+1</div>
</div></div>

<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — parametar za neprekidnost</div></div><div class="combo-body">
  <div class="combo-task">f(x)={ax²+b za x≤2; x+5 za x>2} neprekidna i diferencijabilna u x=2. Nađi a i b.</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Neprekidnost: 4a+b=2+5=7 (lim s lijeva=lim s desna)</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Diferencijabilnost: f'ₗ=2ax|_{x=2}=4a. f'ᵣ=1. → 4a=1 → a=1/4</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Iz 1. uvjeta: 4·(<span class="frac"><span class="num">1</span><span class="den">4</span></span>)+b=7 → 1+b=7 → b=6</div></div>
  </div><div class="combo-ans">a=1/4, b=6</div>
</div></div>

<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A4 — važni trigonometrijski limesi</div></div><div class="combo-body">
  <div class="combo-task">Izračunaj: (a) lim(x→0) sin(3x)/x (b) lim(x→0) (1−cos x)/x²</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">(a) sin(3x)/x = 3·sin(3x)/(3x) → 3·1 = 3. Koristimo lim sin(t)/t=1 za t→0.</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">(b) Poznati limes: lim(x→0)(1−cosx)/x²=1/2. Dokaz: pomnoži s (1+cosx)/(1+cosx).</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">(1−cos²x)/(x²(1+cosx))=sin²x/(x²(1+cosx))→1·<span class="frac"><span class="num">1</span><span class="den">2</span></span>=1/2</div></div>
  </div><div class="combo-ans">(a) 3 · (b) 1/2</div>
</div></div>

<!-- DRILL -->
<div class="drill"><div class="drill-head"><span class="drill-title">// Brzi refleks — Točno ili Netočno?</span><span class="drill-score" id="dr-sc">0 / 0</span></div>
  <div class="drill-body">
    <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
    <div class="drill-q" id="dr-q">lim(x→2) (x²−4)/(x−2) = 4</div>
    <div class="drill-opts"><div class="drill-opt" onclick="drill(this,true)">✓ Točno</div><div class="drill-opt" onclick="drill(this,false)">✗ Netočno</div></div>
    <div class="drill-fb" id="dr-fb"></div>
    <div class="drill-ctrl"><button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeće →</button></div>
    <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
  </div>
</div>

<!-- NCVVO -->
<div class="ncvvo-real"><div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div><div class="ncvvo-real-body">
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Oblik <span class="frac"><span class="num">0</span><span class="den">0</span></span> · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-00">0/0</span></div>
    <div class="ncvvo-real-q">lim(x→1) (x³−1)/(x²−1)</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>direktno uvrštavaju x=1 i dobivaju <span class="frac"><span class="num">0</span><span class="den">0</span></span>, ne faktoriziraju dalje</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">x³−1=(x−1)(x²+x+1), x²−1=(x−1)(x+1)<br>lim=(x²+x+1)/(x+1)→<span class="frac"><span class="num">3</span><span class="den">2</span></span>=<strong>3/2</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Asimptote · ~45% netočnih<span class="ncvvo-live-stat neutral" id="nlive-as">asimptote</span></div>
    <div class="ncvvo-real-q">Nađi sve asimptote f(x)=(x²−x)/(x²−4)</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>zaborave jednu od dviju VA, ili ne provjere pokratu</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">HA: lim→1 → y=1. VA: x²−4=0 → x=±2. Provjera: za x=2: br.=2·(2−1)=2≠0 ✓, za x=−2: br.=(−2)(−3)=6≠0 ✓. <strong>VA: x=2 i x=−2. HA: y=1.</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Neprekidnost · ~55% netočnih<span class="ncvvo-live-stat neutral" id="nlive-nep">neprekidnost</span></div>
    <div class="ncvvo-real-q">f(x)={2x+1 za x&lt;1; k za x=1; x²+2 za x>1}. Nađi k za neprekidnost.</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>provjeravaju samo jedan jednostrani limes</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">Lim s lijeva: 2·1+1=3. Lim s desna: 1+2=3. Oba=3 → <strong>k=3</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Limes u ∞ · ~35% netočnih<span class="ncvvo-live-stat neutral" id="nlive-inf">lim u ∞</span></div>
    <div class="ncvvo-real-q">lim(x→∞) (2x³−x+1)/(3x³+x²)</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>gledaju sve koeficijente, ne samo vodeće</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">Isti stupanj x³ → omjer vodećih koef: <span class="frac"><span class="num">2</span><span class="den">3</span></span>. Dijeli s x³: (2−<span class="frac"><span class="num">1</span><span class="den">x²</span></span>+<span class="frac"><span class="num">1</span><span class="den">x³</span></span>)/(3+<span class="frac"><span class="num">1</span><span class="den">x</span></span>) → <strong>2/3</strong></div>
  </div>
</div></div>

<!-- CHECKPOINT -->
<div class="checkpoint" id="cp"><div class="cp-head"><span class="cp-icon">✅</span><div><div class="cp-title">Checkpoint — jesi li spreman?</div><div class="cp-sub">Potvrdi što znaš</div></div></div>
  <ul class="cp-list">
    <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>0/0 → faktoriziraj i pokrati, tek onda uvrsti</li>
    <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>∞/∞ → podijeli s n^k, isti stupnjevi → omjer koef.</li>
    <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>VA: nazivnik=0 i ne pokraćuje se s brojnikom</li>
    <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>Neprekidnost: sva 3 uvjeta — f(a), lim, lim=f(a)</li>
    <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>lim(x→0)sinx/x=1 · lim(x→0)(1−cosx)/x²=1/2</li>
  </ul>
  <div class="cp-footer"><span id="cp-txt">0 / 5 potvrđeno</span><span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za Poglavlje 17!</span></div>
</div>
<div class="matura-block"><div class="matura-hd">⭐ matura fokus</div><ul class="matura-list">
  <li class="mi"><div class="mi-dot"></div><span><b>0/0 ≠ 0.</b> Uvijek faktoriziraj i pokrati! Tek onda uvrsti.</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>VA postoji samo ako se nazivnik NE pokraćuje</b> s brojnikom.</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>Komadna funkcija:</b> provjeri oba jednostrana limesa u točki spajanja.</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>lim(x→0)sinx/x=1</b> — napamet! Temelj za derivaciju sin.</span></li>
</ul></div>
<div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Gdje ćeš ovo koristiti?</div><div class="cn-sub">Granice su temelj cijelog kalkulusa</div></div></div>
  <div class="cn-grid">
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge b">P17</span><span class="cn-item-title">Derivacije</span></div><div class="cn-item-desc">Derivacija = lim(h→0)[f(x+h)−f(x)]/h — direktno koristi limes!</div><div class="cn-item-arrow">→ definicija derivacije</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P18</span><span class="cn-item-title">Integrali</span></div><div class="cn-item-desc">Integral = limes Riemannovih suma. Bez limesa nema integrala.</div><div class="cn-item-arrow">→ Riemannova suma</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P14</span><span class="cn-item-title">Nizovi</span></div><div class="cn-item-desc">Limes niza je specijalni slučaj limesa funkcije za n→∞.</div><div class="cn-item-arrow">→ limes niza vs funkcije</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P07</span><span class="cn-item-title">Racionalne funkcije</span></div><div class="cn-item-desc">Asimptote racionalnih funkcija — direktna primjena limesa.</div><div class="cn-item-arrow">→ grafovi i asimptote</div></div>
  </div>
</div>

<div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
<div class="con" style="margin-bottom:20px">
  <div class="cr"><div class="ck b">Nedeterminirani oblici</div><div class="cv">0/0 i &infin;/&infin; su signal — uvrstit ne možeš! Korak 1: faktoriziraj i pokrati. Korak 2: L'H&ocirc;pital.</div></div>
  <div class="cr"><div class="ck c">Limes u &infin; — polinomi</div><div class="cv">Isti stupanj: omjer vodećih koef. Veći stupanj u brojevniku: &plusmn;&infin;. U nazivniku: 0.</div></div>
  <div class="cr"><div class="ck i">Asimptote</div><div class="cv">VA: lim(x&rarr;a)f(x)=&plusmn;&infin; &rarr; x=a. HA: lim(x&rarr;&infin;)f(x)=L &rarr; y=L.</div></div>
  <div class="cr"><div class="ck a">Neprekidnost</div><div class="cv">f neprekidna u a &harr; lim(x&rarr;a)f(x) = f(a). Prekidna: skok, uklonljiv ili pol.</div></div>
  <div class="cr"><div class="ck r">Zamka</div><div class="cv">L'H&ocirc;pital: samo za 0/0 ili &infin;/&infin;! Primijeni UVJET prije. Limes 0/&infin; &ne; 0/0 — uvrsti direktno!</div></div>
</div>

<div class="slbl" style="margin-top:28px">// ncvvo anti-primjeri — najčešće greške u granicama</div>
<div class="anti-wrap">
  <div class="anti-hdr">❌ 3 greške koje najčešće koštaju bodova</div>
  <div class="anti-item">
    <div><div class="anti-badge ng">GREŠKA 01 · direktno uvrštavanje 0/0</div></div>
    <div class="anti-wrong">lim(x→2) (x²−4)/(x−2) → učenik uvrsti x=2 i piše: 0/0 = 1 (ili "nema limesa").</div>
    <div class="anti-why">⚠ 0/0 nije rezultat — to je signal za faktorizaciju. Oblici 0/0 i ∞/∞ traže algebarsku obradu.</div>
    <div><div class="anti-badge ok">TOČNO</div></div>
    <div class="anti-right">Faktoriziraj: (x²−4)=(x−2)(x+2). Kraćenje: lim(x→2)(x+2) = 4.</div>
  </div>
  <div class="anti-item">
    <div><div class="anti-badge ng">GREŠKA 02 · limes kvocijenta polinoma</div></div>
    <div class="anti-wrong">lim(x→∞) (3x²+x)/(x²−2) → učenik dijeli samo prve članove: 3x²/x² = 3. Ostalo ignorira.</div>
    <div class="anti-why">⚠ Ovaj put je odgovor točan, ali metoda "ignoriraj ostalo" može biti kriva za slučajeve nižih stupnjeva.</div>
    <div><div class="anti-badge ok">TOČNO</div></div>
    <div class="anti-right">Pravi postupak: podijeli s x² (visoki stupanj): (3+1/x)/(1−2/x²) → 3/1 = 3 ✓</div>
  </div>
  <div class="anti-item">
    <div><div class="anti-badge ng">GREŠKA 03 · L'Hôpital bez provjere uvjeta</div></div>
    <div class="anti-wrong">Učenik primijeni L'Hôpital na lim(x→2) (x²−4)/(x−2) i derivira i brojnik i nazivnik.</div>
    <div class="anti-why">⚠ L'Hôpital se smije koristiti samo kad je limes oblika 0/0 ili ∞/∞. Ovdje se možete i faktorizirati.</div>
    <div><div class="anti-badge ok">TOČNO</div></div>
    <div class="anti-right">Faktorizacija je pouzdanija. L'Hôpital: dL/dx = 2x, d(x−2)/dx = 1 → lim = 2·2/1 = 4 ✓ (obje metode daju isti rezultat, ali L'Hôpital ne zamjenjuje provjeru uvjeta).</div>
  </div>
</div>

<div class="nav-row"><span class="nb" onclick="sw(0)">← Pregled</span><span class="nb primary" onclick="sw(2)">Vježbaj →</span></div>
</div>
<!-- L2 -->
<div class="layer" id="l2" role="tabpanel" aria-labelledby="tab2">
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
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · oblik 0/0</div><div class="fitb-sent">lim(x→1) (x²−1)/(x−1) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="lim=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','2','lim2')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · limes u ∞</div><div class="fitb-sent">lim(x→∞) (4x+1)/(2x−3) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="lim=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','2','inf1')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · važan limes</div><div class="fitb-sent">lim(x→0) sin(x)/x = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="lim=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','1','trig1')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · horizontalna asimptota</div><div class="fitb-sent">HA od f(x)=2x/(x+5) je y=___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="y=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','2','ha1')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>
  <!-- sr4 — L'Hôpital's rule -->
  <div class="sr" id="sr4" style="margin-top:11px">
    <div class="sr-head">
      <div class="sr-title">Riješeni primjer — L'Hôpitalovo pravilo (oblik 0/0)</div>
      <div class="sr-task">Izračunaj: lim(x→0) (eˣ − 1) / x &nbsp; i &nbsp; lim(x→0) sin(x) / x koristeći L'Hôpitala.</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr4s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Provjeri uvjet — oblik 0/0</div>
            <div class="sr-txt">Uvrsti x=0: (e⁰−1)/0 = (1−1)/0 = <strong>0/0</strong> ✓ Nedeterminirani oblik!<br>L'Hôpitalovo pravilo: ako f(a)=g(a)=0, tada lim f/g = lim f'/g' (ako taj limes postoji).</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Deriviraj brojnik i nazivnik zasebno</div>
            <div class="sr-txt">(eˣ−1)' = eˣ &nbsp;|&nbsp; (x)' = 1<br>lim(x→0) eˣ/1 = e⁰ = <strong>1</strong><br>Dakle: lim(x→0) (eˣ−1)/x = 1</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Primijeni isti postupak za sin(x)/x</div>
            <div class="sr-txt">Oblik 0/0 ✓ &nbsp;|&nbsp; (sin x)' = cos x &nbsp;|&nbsp; (x)' = 1<br>lim(x→0) cos(x)/1 = cos(0) = <strong>1</strong><br>Oba poznata limesa dobivena istim alatom!</div>
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
<div class="combo" style="margin-top:11px;margin-bottom:10px">
  <div class="combo-head"><div class="combo-badge">MATURA TIP · LIMES 0/0 — faktorizacijom i L’Hôpitalovim pravilom</div></div>
  <div class="combo-body">
    <div class="combo-task">Izračunaj lim(x→2) (x²−4)/(x−2).</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt"><strong>Provjeri:</strong> uvrsti x=2 → (4−4)/(2−2) = 0/0 ← nedeterminirani oblik!</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt"><strong>Faktoriziraj:</strong> x²−4 = (x+2)(x−2) → kratiš (x−2) → ostaje x+2</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">lim(x→2)(x+2) = <strong>4</strong>  ·  L’Hôpital provjera: (x²−4)′/(x−2)′ = 2x/1 → 4 ✓</div></div>
    </div>
    <div class="combo-ans">Limes = 4  ·  Savjet: uvijek najprije pokušaj faktorizirati — brže od L’Hôpitala!</div>
  </div>
</div>
<div class="combo" style="margin-top:10px;margin-bottom:10px">
  <div class="combo-head"><div class="combo-badge">MATURA TIP · LIMES ∞/∞ — polinomi pri x→∞</div></div>
  <div class="combo-body">
    <div class="combo-task">Izračunaj lim(x→∞) (3x²+x)/(x²−2).</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt"><strong>Oblik ∞/∞</strong> — oba polinoma stupnja 2</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt"><strong>Podijeli sve s x²:</strong> (3+1/x)/(1−2/x²) → za x→∞: 1/x→0 i 2/x²→0</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Limes = 3/1 = <strong>3</strong>  ·  Pravilo: isti stupanj → omjer vodećih koef. (3/1)</div></div>
    </div>
    <div class="combo-ans">Limes = 3  ·  Brzo pravilo: isti stupanj polinoma → omjer vodećih koeficijenata</div>
  </div>
</div>
  <div class="cmp">
    <div class="cmp-c">
      <div class="cmp-h b">Oblik 0/0</div>
      <div class="cmp-body">
        <strong>Kad vidiš:</strong> lim f(x)/g(x) gdje obje → 0<br>
        → <strong>faktoriziraj</strong> i skrati, ili<br>
        → L'Hôpital: lim f'(x)/g'(x)
      </div>
    </div>
    <div class="cmp-c">
      <div class="cmp-h c">Oblik ∞/∞</div>
      <div class="cmp-body">
        <strong>Kad vidiš:</strong> lim (polinom)/(polinom) pri x → ∞<br>
        → <strong>podijeli sve</strong> s xⁿ gdje je n = najveća potencija<br>
        → ostali članovi → 0, ostaje omjer vodećih koef.
      </div>
    </div>
  </div>
  <div class="box-warn">
    <span class="bw-ico">⚡</span>
    <div class="bw-body">
      <div class="bw-title">MATURA LOGIKA — limesi</div>
      <div class="bw-txt">
        Uvijek najprije uvrsti x direktno. Ako dobiješ broj → to je limes.<br>
        Ako dobiješ 0/0 ili ∞/∞ → tek tada primijeni tehniku za otklanjanje neodređenosti.
      </div>
    </div>
  </div>
  <div class="nav-row"><span class="nb" onclick="sw(1)">← Uči</span><button onclick="navigateChapter('p17')" class="nb primary">Sljedeće poglavlje →</button></div>
</div>
</div></main></div>`;
const js = `var _PM_TARGET=(function(){try{var o=window.location.origin;return(o&&o!=='null'&&o!=='about:blank')?o:'https://maturiraj.hr';}catch(e){return 'https://maturiraj.hr';}}());
function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},_PM_TARGET);}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},_PM_TARGET);}}
function toggleSidebar(){var s=document.getElementById('sidebar');var o=document.getElementById('overlay');var open=s.classList.toggle('mobile-open');o.classList.toggle('show',open);}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}
var tabProgress=[76,79,88];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i);t.setAttribute('aria-selected',j===i?'true':'false');t.setAttribute('tabindex',j===i?'0':'-1');});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i);});
  var p=tabProgress[i];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p16_tab',i);}catch(e){}
}
/* LIMES EXPLORER */
var limData=[
  {label:'0/0 → faktorizacija',lines:['Primjer: lim(x→2) (x²−4)/(x−2)','Uvrstimo: (4−4)/(2−2) = 0/0 ← signal!','Faktoriziramo: (x+2)(x−2)/(x−2)','Pokratimo: lim(x→2)(x+2)','Rezultat: 2+2 = <strong style="color:var(--cyan)">4</strong>']},
  {label:'∞/∞ → dijeli s xⁿ',lines:['Primjer: lim(x→∞) (3x²+x)/(x²−2)','Isti stupanj x² → omjer vodećih koef.','Dijeli s x²: (3+1/x)/(1−2/x²)','Za x→∞: 1/x→0, 2/x²→0','Rezultat: <strong style="color:var(--cyan)">3/1 = 3</strong>']},
  {label:'x→∞ razlomak s korijenom',lines:['Primjer: lim(x→∞) x/√(x²+1)','Dijeli s x (= √x² za x>0): 1/√(1+1/x²)','Za x→∞: 1/x²→0','Rezultat: <strong style="color:var(--cyan)">1/√1 = 1</strong>']},
  {label:'∞−∞ → konjugat',lines:['Primjer: lim(x→∞) (√(x+1)−√x)','Pomnoži s (√(x+1)+√x)/(√(x+1)+√x)','Brojnik: (x+1)−x = 1','Nazivnik: √(x+1)+√x → ∞','Rezultat: <strong style="color:var(--cyan)">1/∞ = 0</strong>']}
];
var limIdx=0;
function setLim(i,btn){
  limIdx=i;
  document.querySelectorAll('[id^="lim-b"]').forEach(function(b){b.classList.remove('on');});
  btn.classList.add('on');
  renderLim();
}
function renderLim(){
  var d=limData[limIdx];
  var html='<div style="color:var(--cyan);font-size:10px;font-weight:700;letter-spacing:1px;margin-bottom:8px">'+d.label+'</div>';
  d.lines.forEach(function(l,i){html+='<div style="padding:2px 0;color:'+(i===d.lines.length-1?'var(--t1)':'var(--t2)')+'">'+l+'</div>';});
  document.getElementById('lim-display').innerHTML=html;
}
renderLim();
/* ASIMPTOTE EXPLORER */
var asData=[
  {f:'f(x)=x/(x+1)',ha:'y=1 (lim→1, isti stupanj)',va:'x=−1 (naz.=0, br.=−1≠0)',kosa:'nema (ima HA)',extra:'Provjera HA: lim x/(x+1) = lim 1/(1+1/x) = 1/1 = 1'},
  {f:'f(x)=(x²+1)/x',ha:'nema (stupanj br.>naz.)',va:'x=0 (naz.=0, br.=1≠0)',kosa:'y=x (a=lim f/x=1, b=lim(f−x)=lim 1/x=0)',extra:'f(x)=x+1/x → kosa asimptota y=x'},
  {f:'f(x)=1/(x−2)²',ha:'y=0 (stupanj br.<naz.)',va:'x=2 (naz.=0, br.=1≠0)',kosa:'nema',extra:'Obje strane x=2: lim→+∞ (kvadrat u naz.)'},
  {f:'f(x)=(2x²−1)/(x²+3)',ha:'y=2 (isti stupanj, koef. 2/1=2)',va:'nema (x²+3>0 uvijek)',kosa:'nema (ima HA)',extra:'Provjera: x²+3=0 nema realnih rješenja → nema VA'}
];
var asIdx=0;
function setAs(i,btn){
  asIdx=i;
  document.querySelectorAll('[id^="as-b"]').forEach(function(b){b.classList.remove('on');});
  btn.classList.add('on');
  renderAs();
}
function renderAs(){
  var d=asData[asIdx];
  document.getElementById('as-display').innerHTML=
    '<span style="color:var(--cyan);font-weight:700">'+d.f+'</span><br>'+
    '→ HA: <strong>'+d.ha+'</strong><br>'+
    '→ VA: <strong>'+d.va+'</strong><br>'+
    '→ Kosa: <strong>'+d.kosa+'</strong><br>'+
    '<span style="color:var(--t3);font-size:11px">'+d.extra+'</span>';
}
renderAs();
/* STEP REVEAL */
var stepSt={};
function nxtStep(id,tot){if(!stepSt[id])stepSt[id]=0;stepSt[id]=Math.min(stepSt[id]+1,tot);for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}var prog=document.getElementById(id+'p');if(prog)prog.textContent=stepSt[id]+' / '+tot;var ns=document.getElementById(id+'s'+stepSt[id]);if(ns){setTimeout(function(){ns.scrollIntoView({behavior:'smooth',block:'nearest'});},60);}}
function rstStep(id,tot){stepSt[id]=0;for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}var prog=document.getElementById(id+'p');if(prog)prog.textContent='0 / '+tot;document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb';});}
var tryExp={
  lim1:'x²−4=(x+2)(x−2). lim(x→2)(x+2)(x−2)/(x−2)=lim(x+2)=4.',
  as1:'Isti stupanj x² → omjer vodećih koef: 3/1=3. HA: y=3.',
  nep1:'f(1) nije definirana (0/0). Limes postoji (=2), ali f(1) ne → uklonjivi prekid. Nije neprekidna!'
};
function tryIt(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();if(!v)return;inp.disabled=true;var btn=inp.parentElement.querySelector('.sr-try-btn');if(btn)btn.disabled=true;var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.className='sr-try-fb show '+(ok?'ok':'fail');fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];}
/* DRILL */
var drData=[
  {q:'lim(x→2) (x²−4)/(x−2) = 4',ans:true,tag:'0/0',exp:'Točno! (x²−4)=(x+2)(x−2) → lim(x+2)=4 ✓'},
  {q:'0/0 je nedeterminirani oblik koji znači da limes ne postoji',ans:false,tag:'0/0',exp:'Netočno! 0/0 znači da treba algebarski srediti (faktorizirati). Limes može postojati!'},
  {q:'lim(x→∞) 1/x² = 0',ans:true,tag:'lim u ∞',exp:'Točno! Svaki 1/xⁿ→0 za n>0 kad x→∞. ✓'},
  {q:'Horizontalna asimptota y=3 znači da f(x)=3 za dovoljno veliki x',ans:false,tag:'asimptote',exp:'Netočno! HA znači da se f(x) BLIŽI 3 ali je nikad ne dostiže (osim eventualno u konačnom x).'},
  {q:'Funkcija može biti neprekidna u točki gdje nije definirana',ans:false,tag:'neprekidnost',exp:'Netočno! Uvjet 1: f(a) mora biti definirana. Bez toga ne može biti neprekidna.'},
  {q:'lim(x→0) sin(x)/x = 1',ans:true,tag:'trig. limes',exp:'Točno! Fundamentalni trigonometrijski limes — napamet! Temelj za derivaciju sin. ✓'},
  {q:'lim(x→∞)(3x²+5)/(x²−1) = 3',ans:true,tag:'lim u ∞',exp:'Točno! Isti stupanj x² → omjer vodećih koef: 3/1=3 ✓'},
  {q:'Vertikalna asimptota x=2 uvijek postoji ako je f(2) nedefinirana',ans:false,tag:'asimptote',exp:'Netočno! VA postoji samo ako se faktori (x−2) NE pokraćuju. Moguća je samo rupa u grafu!'},
  {q:'Lim(x→a)f(x) može postojati i ako f(a) ne postoji',ans:true,tag:'definicija',exp:'Točno! Limes opisuje ponašanje oko a, neovisno o f(a). Npr. lim(x²−1)/(x−1)=2 ali f(1) ne postoji. ✓'},
  {q:'lim(x→∞) x/(x+1) = 0',ans:false,tag:'lim u ∞',exp:'Netočno! Isti stupanj → omjer koef: 1/1=1. lim=1, ne 0.'},
  {q:'Neprekidna funkcija nema vertikalnih asimptota',ans:true,tag:'neprekidnost',exp:'Točno! VA znači lim=±∞ što krši neprekidnost. Neprekidna funkcija je ograničena u okolini svake točke. ✓'},
  {q:'lim(x→∞)(2x³)/(x²+1) = ∞',ans:true,tag:'lim u ∞',exp:'Točno! Stupanj br.(3) > stupanj naz.(2) → lim=+∞ ✓'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){if(drDone)return;drDone=true;drTot++;var d=drData[drIdx];var ok=chosen===d.ans;if(ok)drOk++;el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById('dr-fb');var tagHtml='<span style="font-family:var(--mono);font-size:9px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:700;margin-right:7px;background:'+(ok?'var(--dim-g)':'var(--dim-r)')+';color:'+(ok?'var(--green)':'var(--red)')+';border-color:'+(ok?'var(--bd-g)':'var(--bd-r)')+'">'+d.tag+'</span>';fb.innerHTML=tagHtml+(ok?'✓ ':'✗ ')+d.exp;fb.className='drill-fb '+(ok?'ok':'ng');document.getElementById('dr-sc').textContent=drOk+' / '+drTot;document.getElementById('dr-next').style.display='inline-flex';document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';updateProgress();}
function nextDrill(){drIdx=(drIdx+1)%drData.length;drDone=false;var q=document.getElementById('dr-q');q.style.opacity='0';setTimeout(function(){q.textContent=drData[drIdx].q;q.style.opacity='1';},150);document.getElementById('dr-fb').className='drill-fb';document.getElementById('dr-next').style.display='none';document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});updateProgress();}
/* BUG */
var bugDone={};
var bugExp={
  b1:'✓ Točno! 0/0 je signal za faktorizaciju. x²−4=(x+2)(x−2) → pokrati (x−2) → lim=x+2=4.',
  b2:'✓ Točno! (x²−4)=(x−2)(x+2) → pokrata eliminira (x−2). f(x)=x+2 za x≠2. Samo rupa, nema VA!',
  b3:'✓ Točno! Uvjet 1 nije ispunjen: f(2) nije definirana (0/0 u točki). Limes=4, ali f(2) ne postoji → uklonjivi prekid.'
};
function bug(el,id,ok,eid){if(bugDone[id])return;bugDone[id]=true;el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');});}var expl=document.getElementById(eid);expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];expl.className='bug-expl show '+(ok?'ok':'ng');}
/* ICP */
var icpAnswered={};
var icpFeedback={
  icp1:{
    q1:{ok:'✓ Točno! (x²−9)=(x+3)(x−3). lim(x+3)=6.',ng:'✗ Netočno. (x²−9)=(x+3)(x−3) → pokrati → lim(x+3)=6.'},
    q2:{ok:'✓ Točno! Fundamentalni limes: lim(x→0)sinx/x=1. Napamet!',ng:'✗ Netočno. lim(x→0)sinx/x=1 — ovo je definicijski limes, napamet!'},
    q3:{ok:'✓ Točno! x³−1=(x−1)(x²+x+1). lim(x²+x+1)=3.',ng:'✗ Netočno. x³−1=(x−1)(x²+x+1). Pokrati → lim(x²+x+1)|_{x=1}=3.'}
  },
  icp2:{
    q1:{ok:'✓ Točno! Isti stupanj x² → omjer vodećih koef: 5/2.',ng:'✗ Netočno. Isti stupanj → omjer vodećih koef: 5/2.'},
    q2:{ok:'✓ Točno! x+4=0 → x=−4. VA: x=−4.',ng:'✗ Netočno. Nazivnik=0: x+4=0 → x=−4.'},
    q3:{ok:'✓ Točno! Stupanj br.(1) < stupanj naz.(2) → lim=0. HA: y=0.',ng:'✗ Netočno. Stupanj brojnika(1)<stupanj nazivnika(2) → lim=0 → y=0.'}
  },
  icp3:{
    q1:{ok:'✓ Točno! Sva 3 uvjeta: f(a) definirana, lim postoji, lim=f(a).',ng:'✗ Netočno. Trebaju sva 3 uvjeta: f(a) definirana + lim postoji + lim=f(a).'},
    q2:{ok:'✓ Točno! 1/x nije definirana za x=0 → prekid samo u x=0.',ng:'✗ Netočno. 1/x je neprekidna svuda gdje je definirana — samo x=0 je problem.'},
    q3:{ok:'✓ Točno! Limes=6 postoji, ali f(3) nije definirana → uklonjivi prekid.',ng:'✗ Netočno. Limes(x→3)=6 postoji, ali f(3) nije definirano → uklonjivi prekid.'}
  }
};
function icp(icpId,qId,el,ok,fbId){var key=icpId+'_'+qId;if(icpAnswered[key])return;icpAnswered[key]=ok;el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById(fbId);var msgs=icpFeedback[icpId]&&icpFeedback[icpId][qId];fb.textContent=msgs?(ok?msgs.ok:msgs.ng):(ok?'✓ Točno!':'✗ Netočno.');fb.className='icp-fb show '+(ok?'ok':'ng');var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});if(allDone){var done=document.getElementById(icpId+'-done');if(done)done.classList.add('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.add('show');var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent=score+' / 3';updateProgress();}}
function retryIcp(icpId){['q1','q2','q3'].forEach(function(q){delete icpAnswered[icpId+'_'+q];});var done=document.getElementById(icpId+'-done');if(done)done.classList.remove('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.remove('show');var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent='0 / 3';document.querySelectorAll('#'+icpId+' .icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});document.querySelectorAll('#'+icpId+' .icp-fb').forEach(function(f){f.className='icp-fb';f.textContent='';})}
/* CHECKPOINT */
var cpState={};
function toggleCP(n){cpState[n]=!cpState[n];var el=document.getElementById('cp'+n);if(el)el.classList.toggle('done',cpState[n]);var done=Object.values(cpState).filter(Boolean).length;var txt=document.getElementById('cp-txt');if(txt)txt.textContent=done+' / 5 potvrđeno';var ready=document.getElementById('cp-ready');if(ready)ready.style.display=done>=5?'inline':'none';updateProgress();}
function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}
/* ADAPTIVE */
var topicErrors={'00':0,as:0,nep:0,inf:0};
var topicHints={'00':'Greška 0/0! Faktoriziraj i pokrati zajednički faktor. Tek onda uvrsti x=a!',as:'Greška s asimptotama! VA: nazivnik=0 i ne pokraćuje se. HA: lim(x→∞)=b.',nep:'Greška s neprekidnošću! Trebaju sva 3 uvjeta: f(a), lim, lim=f(a). Komadna: provjeri oba limesa!',inf:'Greška lim u ∞! Isti stupnjevi → omjer koef. Br.>Naz.→∞. Br.<Naz.→0.'};
var qTopics={q1:'00',q2:'00',q3:'inf',q4:'inf',q5:'as',q6:'as',q7:'nep',q8:'nep',q9:'00',q10:'as',q11:'nep',q12:'inf'};
var ncvvoTopicMap={'nlive-00':['q1','q2','q9'],'nlive-as':['q5','q6','q10'],'nlive-nep':['q7','q8','q11'],'nlive-inf':['q3','q4','q12']};
var streak=0,currentQ=1;
function checkAdaptive(qid,ok){var topic=qTopics[qid];if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}if(ok)streak++;else streak=0;updateTimerLabel();if(examMode!=='normal'&&Object.keys(answered).length<total){currentQ=Object.keys(answered).length+1;timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);updateTimerLabel();}updateNcvvoLiveStats();}
function showAdaptiveBanner(topic){var b=document.getElementById('adaptive-banner');var t=document.getElementById('ab-title');var x=document.getElementById('ab-text');if(!b||!t||!x)return;t.textContent='Prijedlog — ponovi: '+topic;x.innerHTML=topicHints[topic];b.style.display='flex';b.scrollIntoView({behavior:'smooth',block:'nearest'});}
function updateNcvvoLiveStats(){Object.keys(ncvvoTopicMap).forEach(function(id){var el=document.getElementById(id);if(!el)return;var qs=ncvvoTopicMap[id];var done=qs.filter(function(q){return answered[q]!==undefined;});if(done.length===0)return;var ok=qs.filter(function(q){return answered[q]===true;}).length;var pct=Math.round(ok/qs.length*100);el.className='ncvvo-live-stat '+(pct>=80?'good':pct>=50?'neutral':'bad');el.textContent=(pct>=80?'✓ ':pct>=50?'~ ':'✗ ')+pct+'% točno';});}
function updateProgress(){var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*8),8):0;var cpDone=Object.values(cpState).filter(Boolean).length;var cpPts=Math.round(cpDone/5*8);var icpPts=0;['icp1','icp2','icp3'].forEach(function(icp){var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;icpPts+=Math.round(done/3*4);});var quizPts=Object.keys(answered).length>0?Math.round(correct/total*16):0;tabProgress[1]=Math.min(76+drillPts+icpPts+cpPts,85);tabProgress[2]=Math.min(76+drillPts+icpPts+cpPts+quizPts,100);var curTab=document.querySelector('.tab.on');var curIdx=curTab?Array.from(document.querySelectorAll('.tab')).indexOf(curTab):0;var p=tabProgress[curIdx];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';try{localStorage.setItem('maturiraj_p16_prog',p);}catch(e){}}
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
window.addEventListener('beforeunload',function(){stopTimer();});
function updateTimerLabel(){var l=document.getElementById('et-q-label');var s=document.getElementById('et-streak');if(l)l.textContent='Pitanje '+currentQ+' / 12';if(s)s.textContent='Niz: '+streak+' ✓';}
/* QUIZ */
var quizInited=false,answered={},correct=0,total=0;
var ALL_QUESTIONS=[
  {id:'q1',topic:'00',meta:'oblik 0/0 — faktorizacija',text:'lim(x→1) (x²−1)/(x−1) = ?',opts:[{t:'0',ok:false},{t:'1',ok:false},{t:'2',ok:true},{t:'∞',ok:false}],c:'✓ Točno. x²−1=(x+1)(x−1) → lim(x+1)=2.',w:'✗ Netočno. Faktoriziraj: (x+1)(x−1)/(x−1) → lim(x+1)=2.',proof:['x²−1=(x+1)(x−1)','Pokrati (x−1)','lim(x→1)(x+1)=2']},
  {id:'q2',topic:'00',meta:'oblik 0/0 — kvadratna',text:'lim(x→−1) (x²+3x+2)/(x+1) = ?',opts:[{t:'1',ok:true},{t:'0',ok:false},{t:'2',ok:false},{t:'−1',ok:false}],c:'✓ Točno. x²+3x+2=(x+1)(x+2) → lim(x+2)=1.',w:'✗ Netočno. x²+3x+2=(x+1)(x+2) → lim(x+2)|_{x=−1}=1.',proof:['x²+3x+2=(x+1)(x+2)','Pokrati (x+1)','lim(x→−1)(x+2)=1']},
  {id:'q3',topic:'inf',meta:'limes u beskonačnosti',text:'lim(x→∞) (x+1)/(2x−3) = ?',opts:[{t:'0',ok:false},{t:'1/2',ok:true},{t:'1',ok:false},{t:'∞',ok:false}],c:'✓ Točno. Isti stupanj → omjer koef: 1/2.',w:'✗ Netočno. Isti stupanj x → omjer vodećih koef: 1/2.',proof:['Isti stupanj x','Omjer vodećih koef.','1/2']},
  {id:'q4',topic:'inf',meta:'limes u beskonačnosti — stupnjevi',text:'lim(x→∞) (x+1)/(x²+1) = ?',opts:[{t:'1',ok:false},{t:'∞',ok:false},{t:'0',ok:true},{t:'1/2',ok:false}],c:'✓ Točno. Stupanj br.(1) < naz.(2) → lim=0.',w:'✗ Netočno. Stupanj br.<stupanj naz. → lim=0.',proof:['Stupanj br.=1, naz.=2','Br. < Naz. → lim=0','Dijeli s x²: (1/x+1/x²)/(1+1/x²) → 0']},
  {id:'q5',topic:'as',meta:'horizontalna asimptota',text:'HA od f(x)=(4x−1)/(2x+3) je:',opts:[{t:'y=4',ok:false},{t:'y=2',ok:true},{t:'y=−1/3',ok:false},{t:'nema',ok:false}],c:'✓ Točno. Isti stupanj → lim=4/2=2. HA: y=2.',w:'✗ Netočno. Isti stupanj → omjer vodećih koef: 4/2=2.',proof:['Isti stupanj x','lim(x→∞)(4x−1)/(2x+3)=4/2','HA: y=2']},
  {id:'q6',topic:'as',meta:'vertikalna asimptota',text:'VA od f(x)=(x+1)/(x²−4) su:',opts:[{t:'x=2',ok:false},{t:'x=−2',ok:false},{t:'x=2 i x=−2',ok:true},{t:'nema VA',ok:false}],c:'✓ Točno. x²−4=(x−2)(x+2)=0 → x=±2. Provjera: br.≠0 za x=±2. Dvije VA!',w:'✗ Netočno. x²−4=(x−2)(x+2). Naz.=0 za x=2 i x=−2. Oba su VA!',proof:['x²−4=(x−2)(x+2)=0','x=2: br.=3≠0 → VA','x=−2: br.=−1≠0 → VA']},
  {id:'q7',topic:'nep',meta:'neprekidnost — uvjeti',text:'f(x)=(x²−9)/(x−3) ima u x=3:',opts:[{t:'neprekidnost',ok:false},{t:'skokni prekid',ok:false},{t:'uklonjivi prekid',ok:true},{t:'neograničeni prekid',ok:false}],c:'✓ Točno. Limes=6 postoji, ali f(3) nije definirana → uklonjivi prekid.',w:'✗ Netočno. Limes=6 postoji (faktorizacija), ali f(3)=0/0 nije def. → uklonjivi prekid.',proof:['Lim(x→3)=x+3=6 (postoji)','f(3) nije definirana (0/0)','Uklonjivi prekid']},
  {id:'q8',topic:'nep',meta:'komadna funkcija — neprekidnost',text:'f(x)={x+2 za x≤1; 2x+k za x>1} neprekidna za k=',opts:[{t:'1',ok:true},{t:'0',ok:false},{t:'−1',ok:false},{t:'2',ok:false}],c:'✓ Točno. Lim s lijeva=3, lim s desna=2+k. Jednakost: k=1.',w:'✗ Netočno. Lim(x→1⁻)=1+2=3. Lim(x→1⁺)=2+k. 3=2+k → k=1.',proof:['Lim lijevo: 1+2=3','Lim desno: 2(1)+k=2+k','3=2+k → k=1']},
  {id:'q9',topic:'00',meta:'A razina · oblik 0/0 složeniji',text:'lim(x→2) (x³−8)/(x−2) = ?',opts:[{t:'4',ok:false},{t:'8',ok:false},{t:'12',ok:true},{t:'0',ok:false}],c:'✓ Točno. x³−8=(x−2)(x²+2x+4) → lim(x²+2x+4)=12.',w:'✗ Netočno. x³−8=(x−2)(x²+2x+4). lim(x²+2x+4)|_{x=2}=4+4+4=12.',proof:['x³−8=(x−2)(x²+2x+4)','Pokrati (x−2)','lim(x²+2x+4)|_{x=2}=12']},
  {id:'q10',topic:'as',meta:'A razina — sve asimptote',text:'f(x)=x/(x²−1): broj asimptota je:',opts:[{t:'1',ok:false},{t:'2',ok:false},{t:'3',ok:true},{t:'0',ok:false}],c:'✓ Točno. HA: y=0 (stupanj br.<naz.). VA: x=1 i x=−1. Ukupno 3.',w:'✗ Netočno. HA: y=0. x²−1=(x−1)(x+1), br.=x≠0 za x=±1 → VA: x=1, x=−1. 3 asimptote.',proof:['HA: stupanj br.(1)<naz.(2) → y=0','VA: x²−1=0 → x=±1','Ukupno: 1 HA + 2 VA = 3']},
  {id:'q11',topic:'nep',meta:'A razina — tip prekida',text:'f(x)=|x|/x je u x=0:',opts:[{t:'neprekidna',ok:false},{t:'ima uklonjivi prekid',ok:false},{t:'ima skokni prekid',ok:true},{t:'ima neograničeni prekid',ok:false}],c:'✓ Točno. Lim(x→0⁺)=1, lim(x→0⁻)=−1. Lijevi≠desni → skokni prekid.',w:'✗ Netočno. Za x>0: f=1. Za x<0: f=−1. Lim s desna=1≠lim s lijeva=−1 → skokni prekid.',proof:['x>0: |x|/x=1 → lim(x→0⁺)=1','x<0: |x|/x=−1 → lim(x→0⁻)=−1','1≠−1 → skokni prekid']},
  {id:'q12',topic:'inf',meta:'A razina — limes s korijenom',text:'lim(x→∞) (√(x²+x)−x) = ?',opts:[{t:'0',ok:false},{t:'∞',ok:false},{t:'1/2',ok:true},{t:'1',ok:false}],c:'✓ Točno. Pomnoži konjugatom: x/(√(x²+x)+x)=1/(√(1+1/x)+1)→1/2.',w:'✗ Netočno. Pomnoži s (√(x²+x)+x): x/(√(x²+x)+x)→1/(1+1)=1/2.',proof:['Pomnoži s konjugatom','Brojnik: (x²+x)−x²=x','Nazivnik: √(x²+x)+x≈2x → lim=1/2']}
];
var FExp={lim2:'x²−1=(x+1)(x−1). Pokrati → lim(x+1)=2.',inf1:'Isti stupanj x → omjer koef: 4/2=2.',trig1:'Fundamentalni limes — napamet! Temelj derivacije sin.',ha1:'Isti stupanj x → omjer vodećih koef: 2/1=2. HA: y=2.'};
function renderQuiz(){var cont=document.getElementById('quiz-container');var html='';ALL_QUESTIONS.forEach(function(q){var optsHtml=q.opts.map(function(o,i){return '<div class="qo" onclick="qa(\\''+q.id+'\\','+i+','+o.ok+',\\''+q.id+'e\\')">'+o.t+'</div>';}).join('');html+='<div class="qb" id="qb-'+q.id+'"><div class="qm">'+q.meta+'</div><div class="qq">'+q.text+'</div><div class="qb-opts">'+optsHtml+'</div><div class="qe" id="'+q.id+'e"></div></div>';});cont.innerHTML=html;total=ALL_QUESTIONS.length;}
function qa(qid,idx,ok,eid){if(answered[qid]!==undefined)return;answered[qid]=ok;if(ok){correct++;soundCorrect();}else soundWrong();var qdata=ALL_QUESTIONS.find(function(q){return q.id===qid;});if(!qdata)return;document.querySelectorAll('#qb-'+qid+' .qo').forEach(function(o,i){o.classList.add('dis');if(i===idx)o.classList.add(ok?'ok':'ng');if(!ok&&qdata.opts[i].ok)o.classList.add('ok');});var e=document.getElementById(eid);var proofHtml='';if(!ok&&qdata.proof){proofHtml='<div class="mini-proof"><div class="mini-proof-lbl">→ Mini dokaz</div>'+qdata.proof.map(function(s,i){return '<div class="step"><span class="sn">'+(i+1)+'</span><span class="st">'+s+'</span></div>';}).join('')+'</div>';}e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>'+proofHtml;e.classList.add('show');checkAdaptive(qid,ok);if(examMode!=='normal')stopTimer();if(examMode!=='normal'&&Object.keys(answered).length<total)startTimer();if(Object.keys(answered).length===total){var s=document.getElementById('score');document.getElementById('snum').textContent=correct+'/'+total;var pct=Math.round(correct/total*100);document.getElementById('slbl').textContent=pct>=80?'Izvrsno! Spreman si za P17 →':pct>=60?'Dobro! Ponovi slabe točke.':'Ponovi gradivo P16 prije nastavka.';if(s)s.classList.add('show');soundComplete();updateProgress();}updateProgress();}
function chkf(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();var btn=inp.parentElement.querySelector('.fitb-btn');if(!v)return;inp.disabled=true;if(btn)btn.disabled=true;fb.classList.add('show');var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];}
/* RESTORE TAB (mora biti na kraju) */
(function(){try{var s=sessionStorage.getItem('p16_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){try{var saved=localStorage.getItem('maturiraj_p16_prog');if(saved!==null){var pct=parseInt(saved);if(pct>0){var bar=document.getElementById('prog-bar');var lbl=document.getElementById('prog-pct');if(bar)bar.style.width=pct+'%';if(lbl)lbl.textContent=pct+'%';}}}catch(e){}})(  );

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
const meta = {id:'P16',pidLower:'p16',title:"Maturiraj.hr \u2014 Mat A \u00b7 P16 \u00b7 Granice Funkcija",subject:'matematika-a',lsKey:'maturiraj_p16_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p16');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P16] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p16"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p16_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p16_prog',String(pct));}catch(e){}}
// ── Complete page for MatChapterViewer (iframe srcDoc) ───────────────────────
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'https://maturiraj.hr\');}}\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'https://maturiraj.hr\')}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P16 · Granice Funkcija</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';

export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};