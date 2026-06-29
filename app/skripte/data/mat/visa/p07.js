/**
 * Maturiraj.hr — Mat A · P07
 * Maturiraj.hr — Mat A · P07 · Linearna i Kvadratna Funkcija
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

/* ── INTERACTIVE GRAPHS ── */
.graph-wrap{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);padding:0;overflow:hidden;margin-top:12px}
.graph-canvas{display:block;width:100%;height:220px}
.graph-controls{display:flex;align-items:center;gap:10px;padding:10px 14px;flex-wrap:wrap;border-top:1px solid var(--bd)}
.graph-ctrl-lbl{font-family:var(--mono);font-size:10px;color:var(--t3);min-width:28px}
.graph-ctrl-val{font-family:var(--mono);font-size:11px;color:var(--cyan);font-weight:700;min-width:36px;text-align:right}
input[type=range].graph-slider{-webkit-appearance:none;appearance:none;height:3px;border-radius:2px;background:var(--bdm);outline:none;flex:1;cursor:pointer;min-width:80px}
input[type=range].graph-slider::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--blue);cursor:pointer;border:2px solid var(--bg)}
.graph-info{font-family:var(--mono);font-size:10.5px;color:var(--t2);padding:8px 14px;line-height:1.8;border-top:1px solid var(--bd);background:rgba(0,0,0,0.15)}


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

<div class="sb-hamburger" id="hamburger" onclick="toggleSidebar()">
  <span></span><span></span><span></span>
</div>
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
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>07 · Linearna i kvadratna f.</button>
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

<main class="main">
<div class="content-wrap">

<div class="bc">
  <span>← poglavlja</span><span class="bc-sep">/</span>
  <span>a-razina</span><span class="bc-sep">/</span>
  <span class="bc-cur">linearna-kvadratna-funkcija-parabola</span>
</div>

<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>

<!-- ═══════════════════ L0 — QUICK VIEW ═══════════════════ -->
<div class="layer on" id="l0">
  <div class="hero">
    <div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 07 od 21 · A razina · funkcije</div>
    <h1 class="hero-title">Linearna i<br><span>Kvadratna Funkcija</span></h1>
    <p class="hero-sub">Pravac i parabola — dva najvažnija grafa na maturi, temelj analitičke geometrije i derivacija</p>
    <div class="hero-meta">
      <span class="hchip b">2 tipa + sustavi</span>
      <span class="hchip a">⭐ Pojavljuje se na svakom ispitu</span>
      <span class="hchip c">~35 min</span>
    </div>
    <div class="pt"><div class="pb" style="width:35%"></div></div>
  </div>

  <div class="tags">
    <span class="pill p-b">f(x) = kx + l</span>
    <span class="pill p-c">Nagib i odsječak</span>
    <span class="pill p-i">f(x) = ax² + bx + c</span>
    <span class="pill p-a">Tjeme i os simetrije</span>
    <span class="pill p-v">Nultočke i diskriminanta</span>
    <span class="pill p-r">Kvadratne nejednadžbe grafom</span>
  </div>

  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int">
    <div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">
      Svaki zadatak iz analitičke geometrije (P10) koristi jednadžbu pravca. Svaki zadatak s derivacijom ekstremnih vrijednosti (P17) traži tjemet parabole. Kvadratne nejednadžbe iz P04 najlakše se rješavaju grafom parabole.<br><br>
      Linearnu funkciju možeš nacrtati s dvije točke za 10 sekundi. Kvadratnu možeš analizirati za 30 sekundi: tjeme, os simetrije, nultočke, smjer otvaranja.<br><br>
      <strong>Ovo nije samo "nacrtaj graf" — ovo je alat koji ubrzava svaki zadatak koji slijedi.</strong>
    </div>
  </div>

  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">kx+l</div><div class="sc-name">Linearna funkcija</div><div class="sc-desc">Pravac. k=nagib (smjer), l=y-odsječak. k>0 raste, k&lt;0 pada, k=0 konstantna.</div></div>
    <div class="sc"><div class="sc-ico si-c">Δy/Δx</div><div class="sc-name">Nagib pravca</div><div class="sc-desc">k = (y₂−y₁)/(x₂−x₁). Paralelni pravci: k₁=k₂. Okomiti: k₁·k₂=−1.</div></div>
    <div class="sc"><div class="sc-ico si-i">ax²+bx+c</div><div class="sc-name">Kvadratna funkcija</div><div class="sc-desc">Parabola. a>0: otvara gore ∪. a&lt;0: otvara dolje ∩. Tjeme na osi simetrije.</div></div>
    <div class="sc"><div class="sc-ico si-a">T(xₜ,yₜ)</div><div class="sc-name">Tjeme parabole</div><div class="sc-desc">xₜ = −b/2a. yₜ = f(xₜ) = c − b²/4a. Minimum (a>0) ili maksimum (a&lt;0).</div></div>
    <div class="sc"><div class="sc-ico si-v">D=b²−4ac</div><div class="sc-name">Nultočke parabole</div><div class="sc-desc">D>0: dva presjeka s x-osi. D=0: tangenta. D&lt;0: nema presjeka.</div></div>
    <div class="sc"><div class="sc-ico si-r">vertex form</div><div class="sc-name">Tjemeni oblik</div><div class="sc-desc">f(x) = a(x−xₜ)² + yₜ. Direktno čitaš tjeme i transformacije od x².</div></div>
  </div>

  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">f(x) = kx + l</div><div class="cv">k = nagib (koliko y raste kad x poraste za 1). l = y-odsječak (gdje siječe y-os). D = ℝ, Sv = ℝ.</div></div>
    <div class="cr"><div class="ck b">Jednadžba pravca</div><div class="cv">Kroz točku (x₀,y₀) s nagibom k: <strong>y − y₀ = k(x − x₀)</strong>. Najkorisnija forma!</div></div>
    <div class="cr"><div class="ck c">Paralelni/okomiti</div><div class="cv">Paralelni: k₁ = k₂ (isti nagib, različit l). Okomiti: k₁ · k₂ = −1.</div></div>
    <div class="cr"><div class="ck i">f(x) = ax²+bx+c</div><div class="cv">a ≠ 0. a>0: parabola ∪ (min. tjeme). a&lt;0: parabola ∩ (maks. tjeme). D = ℝ.</div></div>
    <div class="cr"><div class="ck i">Tjeme T(xₜ, yₜ)</div><div class="cv">xₜ = −b/(2a). yₜ = f(xₜ). Os simetrije: x = xₜ. Ovo je ekstremat funkcije!</div></div>
    <div class="cr"><div class="ck a">Tjemeni oblik</div><div class="cv">f(x) = a(x − p)² + q gdje je T(p, q). Lako prepoznaš pomake i transformacije.</div></div>
    <div class="cr"><div class="ck v">Skup vrijednosti</div><div class="cv">a>0: Sv = ⟨yₜ, +∞). a&lt;0: Sv = (−∞, yₜ⟩. Tjeme je granica!</div></div>
    <div class="cr"><div class="ck r">Zamka</div><div class="cv">Nultočke ≠ tjeme. x-koordinata tjemena je xₜ = −b/2a, ne nultočka!</div></div>
  </div>

  <div class="nav-row">
    <button onclick="navigateChapter('p06')" class="nb">← P06 · Funkcija</button>
    <span class="nb primary" onclick="sw(1)">Uči detaljno →</span>
  </div>
</div>

<!-- ═══════════════════ L1 — LEARN ═══════════════════ -->
<div class="layer" id="l1">

  <!-- ══ 01 LINEARNA FUNKCIJA ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · LINEARNA FUNKCIJA — PRAVAC</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — nagib kao "strmina ceste"</div>
    <div class="box-int-txt">
      Linearna funkcija f(x) = kx + l crta pravac. Nagib k govori koliko strmino — za svaki korak udesno (Δx=1), y se poveća za k.<br><br>
      k = 2: za svaki korak desno, idi 2 gore. k = −<span class="frac"><span class="num">1</span><span class="den">2</span></span>: za svaki korak desno, idi <span class="frac"><span class="num">1</span><span class="den">2</span></span> dolje.<br><br>
      <strong>l je gdje pravac sijece y-os. Uvijek počni crtanje od te točke!</strong>
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">LINEARNA FUNKCIJA — sve forme</span>
    <span class="val">f(x) = kx + l</span> <span class="cmt">— nagibno-odsječni oblik</span><br>
    <span class="val">y − y₀ = k(x − x₀)</span> <span class="cmt">— točka-nagib oblik (najkorisniji!)</span><br>
    <span class="val">k = (y₂ − y₁) / (x₂ − x₁)</span> <span class="cmt">— nagib iz dviju točaka</span><br>
    <span class="val">Paralelni: k₁ = k₂</span> · <span class="val">Okomiti: k₁ · k₂ = −1</span><br>
    <span class="cmt">D = ℝ, Sv = ℝ (osim k=0: konstantna funkcija, Sv = {l})</span>
  </div>

  <!-- LINEAR EXPLORER -->
  <div class="disc-wrap">
    <div class="disc-head">
      <span class="disc-title">// Linearni Explorer — mijenjaj k i l</span>
    </div>
    <div class="disc-body">
      <div class="disc-row">
        <span class="disc-lbl">f(x) =</span>
        <input class="disc-in" id="lin-k" type="number" value="2" step="0.5" placeholder="k">
        <span class="disc-lbl">· x +</span>
        <input class="disc-in" id="lin-l" type="number" value="1" step="0.5" placeholder="l">
        <button class="disc-btn" onclick="analyzeLinear()">Analiziraj →</button>
      </div>
      <div class="disc-result" id="lin-result" style="display:none"></div>
      <div class="graph-wrap">
        <canvas class="graph-canvas" id="lin-canvas" width="600" height="220"></canvas>
        <div class="graph-controls">
          <span class="graph-ctrl-lbl">k</span>
          <input type="range" class="graph-slider" id="lin-sk" min="-4" max="4" step="0.25" value="1" oninput="syncLin()">
          <span class="graph-ctrl-val" id="lin-vk">1</span>
          <span class="graph-ctrl-lbl">l</span>
          <input type="range" class="graph-slider" id="lin-sl" min="-5" max="5" step="0.5" value="0" oninput="syncLin()">
          <span class="graph-ctrl-val" id="lin-vl">0</span>
        </div>
        <div class="graph-info" id="lin-info">y = 1·x + 0 · Nagib k=1 · Sjecište (0, 0) · Nultočka x=0</div>
      </div>
    </div>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — nagib i kutovi</div>
    <div class="box-men-txt">
      k > 0: pravac raste (ide gore-desno). k &lt; 0: pravac pada (ide dolje-desno). k = 0: horizontalni pravac.<br>
      Veći |k|: strmiji pravac. |k| = 1: kut 45°. |k| → ∞: skoro vertikalan (ali nikad savršeno).<br>
      <strong>Jednadžba x = a nije funkcija — vertikalni pravac ne prolazi vertikalnim testom!</strong>
    </div>
  </div>

  <!-- STEP REVEAL 1 -->
  <div class="sr" id="sr1">
    <div class="sr-head">
      <div class="sr-title">Jednadžba pravca — korak po korak</div>
      <div class="sr-task">Nađi jednadžbu pravca kroz (1, 3) i (4, 9)</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr1s1">
        <div class="sr-step-in"><div class="sr-num">1</div>
          <div class="sr-body"><div class="sr-stitle">Izračunaj nagib</div>
            <div class="sr-txt">k = (y₂−y₁)/(x₂−x₁) = (9−3)/(4−1) = <span class="frac"><span class="num">6</span><span class="den">3</span></span> = <strong>2</strong></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s2">
        <div class="sr-step-in"><div class="sr-num">2</div>
          <div class="sr-body"><div class="sr-stitle">Primijeni točka-nagib formu</div>
            <div class="sr-txt">y − 3 = 2(x − 1)<br>y − 3 = 2x − 2<br>y = 2x + 1</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s3">
        <div class="sr-step-in"><div class="sr-num">3</div>
          <div class="sr-body"><div class="sr-stitle">Provjeri obje točke</div>
            <div class="sr-txt">f(1) = 2+1 = 3 ✓ · f(4) = 8+1 = 9 ✓
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Koji je y-odsječak pravca kroz (2,5) i (6,9)?</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try1" type="text" placeholder="l = ?" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try1','try1-fb','3','lin1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try1-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr1',3)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr1',3)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr1p">0 / 3</span>
    </div>
  </div>

  <!-- BUG 1 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — linearna funkcija</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik tvrdi: pravci y=3x+1 i y=3x−4 su okomiti.</p>
      <div class="bug-task">k₁·k₂ = <span class="wrong">3·3 = 9, okomiti su</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno, isti koeficijent znači okomitost</div>
        <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška: k₁=k₂=3 → paralelni, ne okomiti! Okomiti zahtijeva k₁·k₂=−1</div>
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška: trebalo bi biti k₁·k₂=1</div>
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Greška: pravci su identični</div>
      </div>
      <div class="bug-expl" id="b1e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — linearna</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>k>0: raste · k&lt;0: pada · k=0: konstantna (horizontalan)</li>
      <li class="b20-item"><div class="b20-dot"></div>Paralelni: isti k · Okomiti: k₁·k₂ = −1</li>
      <li class="b20-item"><div class="b20-dot"></div>Kroz točku (x₀,y₀) s nagibom k: y−y₀ = k(x−x₀)</li>
    </ul>
  </div>

  <!-- ICP 1 -->
  <div class="inline-cp" id="icp1">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — linearna</span>
      <span class="icp-score" id="icp1-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp1q1">
        <div class="icp-q-text">Nagib pravca kroz (0,2) i (3,8) je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">k = 3</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">k = 2</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">k = 1/2</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">k = 6</div>
        </div>
        <div class="icp-fb" id="icp1q1fb"></div>
      </div>
      <div class="icp-q" id="icp1q2">
        <div class="icp-q-text">Pravac okomit na y=2x+1 ima nagib:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">k = 2</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">k = −2</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">k = −1/2</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">k = 1/2</div>
        </div>
        <div class="icp-fb" id="icp1q2fb"></div>
      </div>
      <div class="icp-q" id="icp1q3">
        <div class="icp-q-text">Y-odsječak pravca y = −3x + 7 je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">x = 7/3</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">−3</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">7</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">0</div>
        </div>
        <div class="icp-fb" id="icp1q3fb"></div>
      </div>
      <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na kvadratnu funkciju →</div>
      <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- ══ 02 KVADRATNA FUNKCIJA ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · KVADRATNA FUNKCIJA — PARABOLA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — parabola kao "kanta" ili "planina"</div>
    <div class="box-int-txt">
      Kvadratna funkcija f(x) = ax²+bx+c crta parabolu. Znak koeficijenta a određuje sve:<br><br>
      a > 0: parabola ∪ ("kanta") — otvara gore, tjeme je minimum.<br>
      a &lt; 0: parabola ∩ ("planina") — otvara dolje, tjeme je maksimum.<br><br>
      <strong>Tjeme T(xₜ, yₜ) je najvažnija točka: xₜ = −b/2a. Sve ostalo se čita iz tjemena!</strong>
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">KVADRATNA FUNKCIJA — formule</span>
    <span class="val">f(x) = ax² + bx + c</span> <span class="cmt">— standardni oblik</span><br>
    <span class="val">f(x) = a(x − p)² + q</span> <span class="cmt">— tjemeni oblik, T(p, q)</span><br>
    <span class="val">xₜ = −b / (2a)</span> <span class="cmt">— x-koordinata tjemena = os simetrije</span><br>
    <span class="val">yₜ = f(xₜ) = c − b²/(4a)</span> <span class="cmt">— y-koordinata tjemena</span><br>
    <span class="val">Sv(f) = ⟨yₜ, +∞)</span> <span class="cmt">za a>0 · </span><span class="val">Sv(f) = (−∞, yₜ⟩</span> <span class="cmt">za a&lt;0</span>
  </div>

  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c">
      <div class="cmp-h b">a > 0 (parabola ∪)</div>
      <div class="cmp-body">
        <div class="cmp-row">Otvara se <b>gore</b></div>
        <div class="cmp-row">Tjeme = <b>minimum</b></div>
        <div class="cmp-row">Sv = ⟨yₜ, +∞)</div>
        <div class="cmp-row">Primjer: x², 2x²+1</div>
      </div>
    </div>
    <div class="cmp-c">
      <div class="cmp-h r">a &lt; 0 (parabola ∩)</div>
      <div class="cmp-body">
        <div class="cmp-row">Otvara se <b>dolje</b></div>
        <div class="cmp-row">Tjeme = <b>maksimum</b></div>
        <div class="cmp-row">Sv = (−∞, yₜ⟩</div>
        <div class="cmp-row">Primjer: −x², −x²+4</div>
      </div>
    </div>
  </div>

  <!-- PARABOLA EXPLORER -->
  <div class="disc-wrap">
    <div class="disc-head">
      <span class="disc-title">// Parabola Explorer — upiši a, b, c</span>
    </div>
    <div class="disc-body">
      <div class="disc-row">
        <span class="disc-lbl">f(x) =</span>
        <input class="disc-in" id="par-a" type="number" value="1" step="0.5" placeholder="a">
        <span class="disc-lbl">x² +</span>
        <input class="disc-in" id="par-b" type="number" value="-4" step="1" placeholder="b">
        <span class="disc-lbl">x +</span>
        <input class="disc-in" id="par-c" type="number" value="3" step="1" placeholder="c">
        <button class="disc-btn" onclick="analyzeParabola()">Analiziraj →</button>
      </div>
      <div class="graph-wrap">
        <canvas class="graph-canvas" id="par-canvas" width="600" height="220"></canvas>
        <div class="graph-controls">
          <span class="graph-ctrl-lbl">a</span>
          <input type="range" class="graph-slider" id="par-sa" min="-3" max="3" step="0.1" value="1" oninput="syncPar()">
          <span class="graph-ctrl-val" id="par-va">1</span>
          <span class="graph-ctrl-lbl">b</span>
          <input type="range" class="graph-slider" id="par-sb" min="-6" max="6" step="0.5" value="-4" oninput="syncPar()">
          <span class="graph-ctrl-val" id="par-vb">−4</span>
          <span class="graph-ctrl-lbl">c</span>
          <input type="range" class="graph-slider" id="par-sc" min="-8" max="8" step="0.5" value="3" oninput="syncPar()">
          <span class="graph-ctrl-val" id="par-vc">3</span>
        </div>
        <div class="graph-info" id="par-info">f(x) = x² − 4x + 3 · Tjeme: T(2, −1) · D=4 · x₁=1, x₂=3</div>
      </div>
    </div>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — 5 koraka analize parabole</div>
    <div class="box-men-txt">
      1. <strong>Smjer:</strong> a>0 (gore ∪) ili a&lt;0 (dolje ∩)?<br>
      2. <strong>Tjeme:</strong> xₜ = −b/2a, yₜ = f(xₜ)<br>
      3. <strong>Nultočke:</strong> D = b²−4ac → D>0: dvije, D=0: jedna, D&lt;0: nema<br>
      4. <strong>Y-odsječak:</strong> f(0) = c<br>
      5. <strong>Skup vrijednosti:</strong> od yₜ do +∞ (a>0) ili −∞ do yₜ (a&lt;0)
    </div>
  </div>

  <!-- STEP REVEAL 2 -->
  <div class="sr" id="sr2">
    <div class="sr-head">
      <div class="sr-title">Analiza parabole — korak po korak</div>
      <div class="sr-task">f(x) = x² − 4x + 3: nađi tjeme, nultočke, Sv</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr2s1">
        <div class="sr-step-in"><div class="sr-num">1</div>
          <div class="sr-body"><div class="sr-stitle">Smjer i tjeme</div>
            <div class="sr-txt">a=1>0 → parabola ∪ (minimum)<br>xₜ = −(−4)/(2·1) = <strong>2</strong><br>yₜ = f(2) = 4−8+3 = <strong>−1</strong> → T(2, −1)</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s2">
        <div class="sr-step-in"><div class="sr-num">2</div>
          <div class="sr-body"><div class="sr-stitle">Nultočke</div>
            <div class="sr-txt">D = 16−12 = 4 → √D = 2<br>x₁ = (4−2)/2 = 1 · x₂ = (4+2)/2 = 3</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s3">
        <div class="sr-step-in"><div class="sr-num">3</div>
          <div class="sr-body"><div class="sr-stitle">Tjemeni oblik i Sv</div>
            <div class="sr-txt">f(x) = (x−2)² − 1<br>Sv = ⟨−1, +∞) (od tjemena gore)
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Minimum vrijednosti f je:</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try2" type="text" placeholder="min = ?" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try2','try2-fb','-1','par1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try2-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr2',3)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr2',3)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr2p">0 / 3</span>
    </div>
  </div>

  <!-- BUG 2 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — kvadratna funkcija</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Za f(x) = x²−6x+8, učenik tvrdi da je tjeme T(3, 8).</p>
      <div class="bug-task">xₜ = −b/2a = <span class="frac"><span class="num">6</span><span class="den">2</span></span> = 3. yₜ = <span class="wrong">c = 8</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno, c je y-vrijednost tjemena</div>
        <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška: yₜ = f(xₜ) = f(3) = 9−18+8 = −1. Tjeme je T(3, −1)!</div>
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Greška: xₜ = 6 (nije dijeljeno s 2a)</div>
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Greška: xₜ = −3</div>
      </div>
      <div class="bug-expl" id="b2e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — kvadratna</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>xₜ = −b/2a · yₜ = f(xₜ) — UVRSTITI u funkciju, ne koristiti c!</li>
      <li class="b20-item"><div class="b20-dot"></div>a>0: min. na tjemenu · a&lt;0: maks. na tjemenu</li>
      <li class="b20-item"><div class="b20-dot"></div>Sv: od tjemena do ±∞ (ovisno o a)</li>
    </ul>
  </div>

  <!-- ICP 2 -->
  <div class="inline-cp" id="icp2">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — kvadratna</span>
      <span class="icp-score" id="icp2-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp2q1">
        <div class="icp-q-text">X-koordinata tjemena f(x) = 2x²−8x+5 je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">xₜ = −4</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">xₜ = 2</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">xₜ = 4</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">xₜ = −2</div>
        </div>
        <div class="icp-fb" id="icp2q1fb"></div>
      </div>
      <div class="icp-q" id="icp2q2">
        <div class="icp-q-text">Skup vrijednosti f(x) = −x²+4 je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">⟨4, +∞)</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">(−∞, 4⟩</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">ℝ</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">(−∞, 0⟩</div>
        </div>
        <div class="icp-fb" id="icp2q2fb"></div>
      </div>
      <div class="icp-q" id="icp2q3">
        <div class="icp-q-text">f(x) = (x−3)²+1 ima tjeme:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">T(−3, 1)</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">T(3, −1)</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">T(3, 1)</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">T(0, 10)</div>
        </div>
        <div class="icp-fb" id="icp2q3fb"></div>
      </div>
      <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na tjemeni oblik i Sv →</div>
      <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- ══ 03 TJEMENI OBLIK I TRANSFORMACIJE ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · TJEMENI OBLIK I TRANSFORMACIJE PARABOLE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — sve je transformacija od x²</div>
    <div class="box-int-txt">
      Svaka kvadratna funkcija je samo transformirana osnovna parabola x².<br><br>
      f(x) = a(x−p)²+q: tjeme je T(p, q). Parabola x² je pomaknuta za p desno i q gore, skalirana faktorom a.<br><br>
      <strong>Konverzija: standardni → tjemeni = dopuni kvadrat. Tjemeni → standardni = razvij zagradu.</strong>
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">TJEMENI OBLIK — konverzija</span>
    <span class="val">ax² + bx + c = a(x − p)² + q</span><br>
    <span class="val">p = −b/2a</span> · <span class="val">q = c − b²/4a</span><br>
    <span class="cmt">Ili: dovršavanje kvadrata → a(x²+(<span class="frac"><span class="num">b</span><span class="den">a</span></span>)x)+c → a(x+b/2a)²+c−b²/4a</span><br>
    <span class="cmt">Provjera: razvij tjemeni oblik → mora dati standardni!</span>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — čitanje tjemenog oblika</div>
    <div class="box-men-txt">
      f(x) = 2(x−3)²+1: tjeme T(3, 1), a=2>0 → minimum, skaliranje x2.<br>
      <strong>Pazi na predznak</strong>: (x−3)² → p=3 (pozitivno!). (x+2)² = (x−(−2))² → p=−2.<br>
      Zbroj u zagradi → tjeme je s negativnim predznakom od broja u zagradi.
    </div>
  </div>

  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c">
      <div class="cmp-h b">Standardni oblik ax²+bx+c</div>
      <div class="cmp-body">
        <div class="cmp-row">Y-odsječak: <b>c = f(0)</b></div>
        <div class="cmp-row">Tjeme: xₜ=−b/2a, yₜ=f(xₜ)</div>
        <div class="cmp-row">Nultočke: x=(−b±√D)/2a</div>
        <div class="cmp-row">Lako za nultočke i y-odsj.</div>
      </div>
    </div>
    <div class="cmp-c">
      <div class="cmp-h i">Tjemeni oblik a(x−p)²+q</div>
      <div class="cmp-body">
        <div class="cmp-row">Tjeme: <b>T(p, q)</b> odmah!</div>
        <div class="cmp-row">Sv odmah: ⟨q,+∞) ili (−∞,q⟩</div>
        <div class="cmp-row">Pomaci: p desno, q gore</div>
        <div class="cmp-row">Lako za tjeme i transformacije</div>
      </div>
    </div>
  </div>

  <!-- STEP REVEAL 3 -->
  <div class="sr" id="sr3">
    <div class="sr-head">
      <div class="sr-title">Dopunjavanje kvadrata — korak po korak</div>
      <div class="sr-task">Pretvori u tjemeni oblik: f(x) = 2x² − 8x + 5</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr3s1">
        <div class="sr-step-in"><div class="sr-num">1</div>
          <div class="sr-body"><div class="sr-stitle">Izvuci a ispred x² i x članova</div>
            <div class="sr-txt">f(x) = 2(x² − 4x) + 5</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s2">
        <div class="sr-step-in"><div class="sr-num">2</div>
          <div class="sr-body"><div class="sr-stitle">Dopuni kvadrat unutar zagrade</div>
            <div class="sr-txt">x²−4x = (x−2)²−4<br>f(x) = 2[(x−2)²−4]+5<br>f(x) = 2(x−2)²−8+5</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s3">
        <div class="sr-step-in"><div class="sr-num">3</div>
          <div class="sr-body"><div class="sr-stitle">Konačni tjemeni oblik</div>
            <div class="sr-txt">f(x) = 2(x−2)² − 3 → T(2, −3)
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Koja je y-koordinata tjemena?</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try3" type="text" placeholder="yₜ = ?" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try3','try3-fb','-3','cv1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try3-fb"></div>
              </div>
            </div>
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

  <!-- BUG 3 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — tjemeni oblik</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik čita tjeme iz f(x) = (x+3)²−2:</p>
      <div class="bug-task">Tjeme: T(<span class="wrong">3, −2</span>)</div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno, x+3 znači p=3</div>
        <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Greška: (x+3)²=(x−(−3))² → p=−3. Tjeme je T(−3, −2)!</div>
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: tjeme je T(3, 2)</div>
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Greška: tjeme je T(−3, 2)</div>
      </div>
      <div class="bug-expl" id="b3e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — tjemeni oblik</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>a(x−p)²+q → T(p, q). PAZI: (x+3) znači p=−3, ne +3!</li>
      <li class="b20-item"><div class="b20-dot"></div>Konverzija: p=−b/2a · q=c−b²/4a (ili uvrstiti xₜ u f)</li>
      <li class="b20-item"><div class="b20-dot"></div>Provjeri: razvij tjemeni oblik → mora dati standardni</li>
    </ul>
  </div>

  <!-- ICP 3 -->
  <div class="inline-cp" id="icp3">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — tjemeni oblik</span>
      <span class="icp-score" id="icp3-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp3q1">
        <div class="icp-q-text">Tjeme od f(x) = (x−5)²+2 je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">T(−5, 2)</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">T(5, 2)</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">T(5, −2)</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">T(2, 5)</div>
        </div>
        <div class="icp-fb" id="icp3q1fb"></div>
      </div>
      <div class="icp-q" id="icp3q2">
        <div class="icp-q-text">f(x) = x²+6x+5 u tjemenom obliku je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">(x+6)²+5</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">(x+3)²−4</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">(x+3)²+5</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">(x−3)²−4</div>
        </div>
        <div class="icp-fb" id="icp3q2fb"></div>
      </div>
      <div class="icp-q" id="icp3q3">
        <div class="icp-q-text">Maksimum funkcije f(x) = −(x−1)²+9 je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">nema maksimuma</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">1</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">9</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">−9</div>
        </div>
        <div class="icp-fb" id="icp3q3fb"></div>
      </div>
      <div class="icp-done" id="icp3-done">✓ Izvrsno! Nastavi na primjene →</div>
      <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- A RAZINA KOMBINIRANI -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>

  <div class="combo">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — kvadratna nejednadžba grafom</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješi grafom: x² − 5x + 6 &lt; 0</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Parabola a=1>0 (∪). Nultočke: D=25−24=1 → x=2 i x=3</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Parabola ∪ je &lt;0 (ispod x-osi) između nultočaka</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Rješenje: x ∈ (2, 3)</div></div>
      </div>
      <div class="combo-ans">x ∈ (2, 3) — između nultočaka jer a > 0</div>
    </div>
  </div>

  <div class="combo" style="margin-top:10px">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — parametar iz tjemena</div></div>
    <div class="combo-body">
      <div class="combo-task">Parabola ima tjeme T(2, −3) i prolazi kroz točku (4, 5). Nađi a i jednadžbu parabole.</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Tjemeni oblik: f(x) = a(x−2)² − 3</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Uvrsti točku (4,5): a(4−2)²−3 = 5 → 4a = 8 → a = 2</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">f(x) = 2(x−2)²−3. Razvij: 2x²−8x+8−3 = 2x²−8x+5</div></div>
      </div>
      <div class="combo-ans">f(x) = 2(x−2)²−3 = 2x²−8x+5. Provjera: f(4)=2·4−8+5=8−8+5=5 ✓</div>
    </div>
  </div>

  <div class="combo" style="margin-top:10px">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — presjek pravca i parabole</div></div>
    <div class="combo-body">
      <div class="combo-task">Nađi presjek f(x) = x²−2x i g(x) = x</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">f(x) = g(x): x²−2x = x</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">x²−3x = 0 → x(x−3) = 0 → x=0 ili x=3</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Točke presjeka: (0, g(0))=(0,0) i (3, g(3))=(3,3)</div></div>
      </div>
      <div class="combo-ans">Presjeci: (0, 0) i (3, 3)</div>
    </div>
  </div>

  <div class="combo" style="margin-top:10px">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A4 — tangenta pravca na parabolu</div></div>
    <div class="combo-body">
      <div class="combo-task">Za koji k pravac y = kx − 1 tangira parabolu y = x²?</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Sustav: x² = kx−1 → x²−kx+1 = 0. Tangenta ↔ D = 0</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">D = k²−4·1·1 = k²−4 = 0 → k² = 4 → k = ±2</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Za k=2: x²−2x+1=(x−1)²=0 → x=1, y=1. Za k=−2: x²+2x+1=(x+1)²=0 → x=−1, y=1</div></div>
      </div>
      <div class="combo-ans">k = 2 (tangenta u točki (1,1)) i k = −2 (tangenta u točki (−1,1))</div>
    </div>
  </div>

  <!-- RAPID FIRE DRILL -->
  <div class="drill">
    <div class="drill-head">
      <span class="drill-title">// Brzi refleks — Točno ili Netočno?</span>
      <span class="drill-score" id="dr-sc">0 / 0</span>
    </div>
    <div class="drill-body">
      <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
      <div class="drill-q" id="dr-q">Nagib pravca y=3x−2 je 3</div>
      <div class="drill-opts">
        <div class="drill-opt" onclick="drill(this,true)">✓ Točno</div>
        <div class="drill-opt" onclick="drill(this,false)">✗ Netočno</div>
      </div>
      <div class="drill-fb" id="dr-fb"></div>
      <div class="drill-ctrl">
        <button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeće →</button>
      </div>
      <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
    </div>
  </div>

  <!-- NCVVO BLOK -->
  <div class="ncvvo-real">
    <div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div>
    <div class="ncvvo-real-body">
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Tjeme parabole · ~45% netočnih<span class="ncvvo-live-stat neutral" id="nlive-tj">tjeme</span></div>
        <div class="ncvvo-real-q">f(x) = 2x²−12x+10. Nađi tjeme i skup vrijednosti.</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>koriste c=10 kao y-koordinatu tjemena umjesto da uvrstite xₜ</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">xₜ=−(−12)/(2·2)=3. yₜ=f(3)=18−36+10=−8. T(3,−8).<br>a=2>0 → minimum. <strong>Sv = ⟨−8, +∞)</strong></div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Jednadžba pravca · ~35% netočnih<span class="ncvvo-live-stat neutral" id="nlive-pr">pravac</span></div>
        <div class="ncvvo-real-q">Nađi jednadžbu pravca okomitog na y=3x+1 koji prolazi kroz (6, 2).</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>uzimaju isti nagib umjesto negativnog reciproka</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">Okomit: k=−<span class="frac"><span class="num">1</span><span class="den">3</span></span>. Kroz (6,2): y−2=−<span class="frac"><span class="num">1</span><span class="den">3</span></span>(x−6) → y=−<span class="frac"><span class="num">x</span><span class="den">3</span></span>+4.<br><strong>y = −<span class="frac"><span class="num">x</span><span class="den">3</span></span> + 4</strong></div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Presjek pravac+parabola · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-ps">presjek</span></div>
        <div class="ncvvo-real-q">Ima li pravac y=2x+5 zajedničkih točaka s parabolom y=x²+x+4?</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>ne koriste diskriminantu za određivanje broja presjeka</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">x²+x+4=2x+5 → x²−x−1=0. D=1+4=5>0 → <strong>dva presjeka</strong></div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Tjemeni oblik · ~40% netočnih<span class="ncvvo-live-stat neutral" id="nlive-cv">tjemeni oblik</span></div>
        <div class="ncvvo-real-q">Pretvori u tjemeni oblik: f(x) = 3x²+6x−1</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>zaborave množiti korekcijski član s a pri dopunjavanju kvadrata</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">3(x²+2x)−1 = 3(x+1)²−3−1 = 3(x+1)²−4.<br><strong>f(x) = 3(x+1)²−4, T(−1, −4)</strong></div>
      </div>
    </div>
  </div>

  <!-- CHECKPOINT -->
  <div class="checkpoint" id="cp">
    <div class="cp-head">
      <span class="cp-icon">✅</span>
      <div>
        <div class="cp-title">Checkpoint — jesi li spreman za dalje?</div>
        <div class="cp-sub">Potvrdi što znaš — klikni kad si siguran</div>
      </div>
    </div>
    <ul class="cp-list">
      <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>Linearnu funkciju znam nacrtati iz k i l, nađi jednadžbu iz dviju točaka</li>
      <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>Paralelni: k₁=k₂ · Okomiti: k₁·k₂=−1</li>
      <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>Tjeme: xₜ=−b/2a, yₜ=f(xₜ) — UVRSTITI, ne koristiti c!</li>
      <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>Tjemeni oblik a(x−p)²+q: T(p,q). Pazi na predznak p!</li>
      <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Sv: a>0 → ⟨yₜ,+∞) · a&lt;0 → (−∞,yₜ⟩</li>
    </ul>
    <div class="cp-footer">
      <span id="cp-txt">0 / 5 potvrđeno</span>
      <span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za Poglavlje 08!</span>
    </div>
  </div>

  <div class="matura-block">
    <div class="matura-hd">⭐ matura fokus — automatski refleks</div>
    <ul class="matura-list">
      <li class="mi"><div class="mi-dot"></div><span><b>Nagib:</b> k=(y₂−y₁)/(x₂−x₁). Okomiti: k₁·k₂=−1. Paralelni: k₁=k₂.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Tjeme:</b> xₜ=−b/2a · yₜ=f(xₜ). Ne koristiti c kao yₜ!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Tjemeni oblik a(x−p)²+q:</b> T(p,q). (x+3)→p=−3!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Sv:</b> a>0→minimum od yₜ · a&lt;0→maksimum od yₜ.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Presjek pravac+parabola:</b> postavi jednadžbu i koristi D.</span></li>
    </ul>
  </div>

  <div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Gdje ćeš ovo koristiti?</div><div class="cn-sub">Veze s ostalim poglavljima</div></div></div>
  <div class="cn-grid">
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P10</span><span class="cn-item-title">Analitička geometrija</span></div><div class="cn-item-desc">Jednadžba pravca je temelj — udaljenost točke od pravca koristi P07.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P10_FINAL.html?from=P07" style="color:inherit;text-decoration:none">→ pravac i parabola</a></div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P17</span><span class="cn-item-title">Derivacije</span></div><div class="cn-item-desc">Tjeme parabole x=−b/2a je poseban slučaj derivacije f'(x)=0.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P17_FINAL.html?from=P07" style="color:inherit;text-decoration:none">→ ekstremne vrijednosti</a></div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge b">P04</span><span class="cn-item-title">Jednadžbe i nejednadžbe</span></div><div class="cn-item-desc">Grafičko rješavanje kvadratnih nejednadžbi — direktna primjena P07.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P04_FINAL.html?from=P07" style="color:inherit;text-decoration:none">→ kvadratne nejednadžbe</a></div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P08</span><span class="cn-item-title">Eksponencijalna i log.</span></div><div class="cn-item-desc">Kvadratna supstitucija: a²ˣ+aˣ−2=0 → t=aˣ → kvadratna jednadžba.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P08_FINAL.html?from=P07" style="color:inherit;text-decoration:none">→ supstitucija t=aˣ</a></div></div>
  </div>
</div>


<div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
<div class="con" style="margin-bottom:20px">
  <div class="cr"><div class="ck b">Pravac</div><div class="cv">y = kx + l. Nagib k = (y&sub2;&minus;y&sub1;)/(x&sub2;&minus;x&sub1;). Paralelni: k&sub1;=k&sub2;. Okomiti: k&sub1;&middot;k&sub2;=&minus;1.</div></div>
  <div class="cr"><div class="ck c">Standardni oblik parabole</div><div class="cv">y = ax&sup2;+bx+c. Tjeme: x<sub>v</sub> = &minus;b/2a, y<sub>v</sub> = f(x<sub>v</sub>). Os simetrije: x = x<sub>v</sub>.</div></div>
  <div class="cr"><div class="ck i">Tjemeni oblik</div><div class="cv">y = a(x&minus;p)&sup2;+q. Tjeme (p,q). Pretvori: p=&minus;b/2a, q=c&minus;b&sup2;/4a.</div></div>
  <div class="cr"><div class="ck a">Sjecišta s osima</div><div class="cv">S osi x: f(x)=0 (diskriminanta). S osi y: f(0)=c. Najmanji/najveći: tjeme (a<0: max, a>0: min).</div></div>
  <div class="cr"><div class="ck r">Zamka</div><div class="cv">Tjemeni oblik y=a(x<strong>&minus;</strong>p)&sup2;+q: pazite na predznak! (x&minus;3)&sup2; znači pomak 3 DESNO, ne lijevo!</div></div>
</div>
  <div class="nav-row">
    <span class="nb" onclick="sw(0)">← Pregled</span>
    <span class="nb primary" onclick="sw(2)">Vježbaj →</span>
  </div>
</div>

<!-- ═══════════════════ L2 — PRACTICE ═══════════════════ -->
<div class="layer" id="l2">
  <div class="exam-mode-wrap" id="exam-mode-wrap">
    <div class="exam-mode-head">// odaberi mod vježbanja</div>
    <div class="exam-mode-opts">
      <div class="exam-mode-opt active" onclick="setExamMode('normal',this)"><div class="em-icon">📖</div><div class="em-name">Standardni</div><div class="em-desc">s objašnjenjima · bez pritiska</div></div>
      <div class="exam-mode-opt" onclick="setExamMode('timed',this)"><div class="em-icon">⏱</div><div class="em-name">Ispitni</div><div class="em-desc">90 sek po pitanju · kao NCVVO</div></div>
      <div class="exam-mode-opt" onclick="setExamMode('blitz',this)"><div class="em-icon">⚡</div><div class="em-name">Blitz</div><div class="em-desc">30 sek po pitanju · maksimalni pritisak</div></div>
    </div>
  </div>
  <div class="adaptive-banner" id="adaptive-banner" style="display:none">
    <div class="ab-icon">🎯</div>
    <div class="ab-body"><div class="ab-title" id="ab-title">Prijedlog za ponavljanje</div><div class="ab-text" id="ab-text"></div></div>
    <button class="ab-close" onclick="document.getElementById('adaptive-banner').style.display='none'">×</button>
  </div>
  <div class="exam-timer" id="exam-timer" style="display:none">
    <div class="et-circle"><canvas id="timer-canvas" width="64" height="64"></canvas><span class="et-num" id="et-num">90</span></div>
    <div class="et-info"><div class="et-label">Preostalo</div><div class="et-q" id="et-q-label">Pitanje 1</div></div>
    <div class="et-streak" id="et-streak">Niz: 0 ✓</div>
  </div>
  <div class="quiz-intro"><strong>// ispitni mod</strong> · 12 pitanja · svako s objašnjenjem · target: <strong>10/12</strong></div>
  <div id="quiz-container"></div>
  <div class="score-box" id="score"><div class="score-num" id="snum">0/12</div><div class="score-lbl" id="slbl"></div></div>
  <div class="cta">
    <div><div class="cta-e">discere archive</div><div class="cta-t">Vježbaj sa stvarnim zadacima mature</div><div class="cta-s">Svi NCVVO zadaci 2010.–2026. uz detaljna objašnjenja.</div></div>
    <a href="https://maturiraj.hr" class="cta-btn">Otvori Discere →</a>
  </div>
  <div class="matura-block">
    <div class="matura-hd">⭐ za ispit — ključne točke</div>
    <ul class="matura-list">
      <li class="mi"><div class="mi-dot"></div><span><b>Nagib:</b> k=(<span class="frac"><span class="num">Δy</span><span class="den">Δx</span></span>). Paralelni: k₁=k₂. Okomiti: k₁·k₂=−1.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Tjeme:</b> xₜ=−b/2a · yₜ=f(xₜ). Ne uzimaj c!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>a>0: min · a&lt;0: maks.</b> Sv kreće od yₜ.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>(x+p)² → tjeme na −p!</b> Pazi na predznak.</span></li>
    </ul>
  </div>
  <div class="slbl" style="margin-top:28px">// bonus — popuni prazninu</div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · nagib</div><div class="fitb-sent">Nagib pravca kroz (1,3) i (5,11) je k = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="k = ..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','2','ng1')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · tjeme</div><div class="fitb-sent">X-koordinata tjemena f(x) = x²−10x+3 je xₜ = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="xₜ = ..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','5','tj1')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · tjemeni oblik</div><div class="fitb-sent">Tjeme od f(x) = (x+4)²−7 je T(___,___)</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="(x,y)" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','(-4,-7)','tv1')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · skup vrijednosti</div><div class="fitb-sent">Skup vrijednosti f(x) = −2(x−1)²+3 je Sv = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="Sv = ..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','(-∞,3⟩','sv1')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>
  <div class="nav-row">
    <span class="nb" onclick="sw(1)">← Uči</span>
    <button onclick="navigateChapter('p08')" class="nb primary">Sljedeće poglavlje →</button>
  </div>
</div>

</div>
</main>
</div>`;
const js = `function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}
/* ── SIDEBAR ── */
function toggleSidebar(){var s=document.getElementById('sidebar');var o=document.getElementById('overlay');var open=s.classList.toggle('mobile-open');o.classList.toggle('show',open);}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}

/* ── TABS ── */
var tabProgress=[35,50,88];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i);});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i);});
  var p=tabProgress[i];
  document.getElementById('prog-bar').style.width=p+'%';
  document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p07_tab',i);}catch(e){}
}


/* ── LINEAR EXPLORER ── */
function analyzeLinear(){
  var k=parseFloat(document.getElementById('lin-k').value);
  var l=parseFloat(document.getElementById('lin-l').value);
  var r=document.getElementById('lin-result');
  if(isNaN(k)||isNaN(l)){r.innerHTML='<span style="color:var(--red)">Upiši valjane koeficijente.</span>';return;}
  var fmt=function(x){return Number.isInteger(x)?x:Math.round(x*1000)/1000;};
  var xNull=k!==0?-l/k:null;
  var smjer=k>0?'↗ rastuća':k<0?'↘ padajuća':'→ konstantna';
  var okHTML=k!==0?'Okomiti nagib: k⊥ = '+fmt(-1/k):'(horizontalan — okomiti je x = konstanta)';
  r.innerHTML='<strong>f(x) = '+fmt(k)+'x + '+fmt(l)+'</strong><br>'+
    'Smjer: <strong>'+smjer+'</strong> · y-odsječak: <strong>'+fmt(l)+'</strong><br>'+
    (xNull!==null?'Nultočka (x-odsječak): <strong>x = '+fmt(xNull)+'</strong><br>':'')+
    okHTML;
}

/* ── PARABOLA EXPLORER ── */
function analyzeParabola(){
  var a=parseFloat(document.getElementById('par-a').value);
  var b=parseFloat(document.getElementById('par-b').value);
  var c=parseFloat(document.getElementById('par-c').value);
  var r=document.getElementById('par-result');
  if(isNaN(a)||isNaN(b)||isNaN(c)||a===0){r.innerHTML='<span style="color:var(--red)">Upiši valjane koeficijente (a ≠ 0).</span>';return;}
  var fmt=function(x){return Number.isInteger(x)?x:Math.round(x*100)/100;};
  var xt=-b/(2*a);
  var yt=a*xt*xt+b*xt+c;
  var D=b*b-4*a*c;
  var smjer=a>0?'∪ gore (minimum)':'∩ dolje (maksimum)';
  var sv=a>0?'⟨'+fmt(yt)+', +∞)':'(−∞, '+fmt(yt)+'⟩';
  var nulHTML='';
  if(D>0){var x1=(-b-Math.sqrt(D))/(2*a);var x2=(-b+Math.sqrt(D))/(2*a);nulHTML='Nultočke: x₁='+fmt(x1)+', x₂='+fmt(x2);}
  else if(D===0){nulHTML='Nultočka (dvostruka): x='+fmt(xt);}
  else{nulHTML='Nema realnih nultočaka (D='+fmt(D)+'&lt;0)';}
  r.innerHTML='Smjer: <strong>'+smjer+'</strong> · Tjeme: <strong>T('+fmt(xt)+', '+fmt(yt)+')</strong><br>'+
    'Tjemeni oblik: <strong>'+fmt(a)+'(x−'+fmt(xt)+')²+'+fmt(yt)+'</strong><br>'+
    nulHTML+'<br>Sv = <strong>'+sv+'</strong>';
}

/* ── STEP REVEAL ── */
var stepSt={};
function nxtStep(id,tot){
  if(!stepSt[id])stepSt[id]=0;
  stepSt[id]=Math.min(stepSt[id]+1,tot);
  for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}
  var prog=document.getElementById(id+'p');
  if(prog)prog.textContent=stepSt[id]+' / '+tot;
  var ns=document.getElementById(id+'s'+stepSt[id]);
  if(ns){setTimeout(function(){ns.scrollIntoView({behavior:'smooth',block:'nearest'});},60);}
}
function rstStep(id,tot){
  stepSt[id]=0;
  for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}
  var prog=document.getElementById(id+'p');
  if(prog){prog.textContent='0 / '+tot;}
  document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});
  document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false;});
  document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb';});
}

/* ── TRY-IT ── */
var tryExp={
  lin1:'k=(9−5)/(6−2)=4/4=1. y−5=1(x−2) → y=x+3. y-odsječak=3.',
  par1:'Minimum je y-vrijednost tjemena = −1. To je najmanji mogući izlaz funkcije.',
  cv1:'yₜ = −3. Provjera: razvij 2(x−2)²−3=2x²−8x+8−3=2x²−8x+5 ✓'
};
function tryIt(iid,fid,ans,key){
  var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();
  if(!v)return;
  inp.disabled=true;
  var btn=inp.parentElement.querySelector('.sr-try-btn');if(btn)btn.disabled=true;
  var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};
  var ok=norm(v)===norm(ans);
  inp.classList.add(ok?'ok':'fail');
  fb.className='sr-try-fb show '+(ok?'ok':'fail');
  fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];
}

/* ── RAPID FIRE DRILL ── */
var drData=[
  {q:'Nagib pravca y=3x−2 je 3',ans:true,tag:'linearna',exp:'Točno! f(x)=kx+l → k=3 je nagib, l=−2 je y-odsječak ✓'},
  {q:'Paralelni pravci imaju produkt nagiba jednak −1',ans:false,tag:'linearna',exp:'Netočno! Paralelni imaju ISTI nagib (k₁=k₂). Produkt −1 je uvjet za OKOMITOST!'},
  {q:'Tjeme parabole f(x)=x²−4x+7 je T(2,3)',ans:true,tag:'kvadratna',exp:'Točno! xₜ=4/2=2, yₜ=f(2)=4−8+7=3 ✓'},
  {q:'Y-koordinata tjemena je uvijek jednaka c',ans:false,tag:'kvadratna',exp:'Netočno! yₜ=f(xₜ) — moraš uvrstiti xₜ. c=f(0) je y-odsječak, ne tjeme!'},
  {q:'Parabola a=−2 otvara se prema dolje',ans:true,tag:'kvadratna',exp:'Točno! a&lt;0 → parabola ∩ (prema dolje) → tjeme je maksimum ✓'},
  {q:'f(x)=3(x+2)²−5 ima tjeme T(2,−5)',ans:false,tag:'tjemeni',exp:'Netočno! (x+2)²=(x−(−2))² → p=−2. Tjeme je T(−2,−5)!'},
  {q:'Skup vrijednosti f(x)=x²−3 je ⟨−3,+∞)',ans:true,tag:'kvadratna',exp:'Točno! a=1>0, tjeme T(0,−3) → min. je −3 → Sv=⟨−3,+∞) ✓'},
  {q:'Nagib okomitog na pravac nagiba 4 je −4',ans:false,tag:'linearna',exp:'Netočno! Okomiti: k₁·k₂=−1 → k₂=−1/4, ne −4!'},
  {q:'Parabola x²−6x+9=(x−3)² ima jedno nultočku',ans:true,tag:'kvadratna',exp:'Točno! D=36−36=0 → jedna dvostruka nultočka x=3. Ili: (x−3)²=0 → x=3 ✓'},
  {q:'Linearna funkcija k=0 ima Sv=ℝ',ans:false,tag:'linearna',exp:'Netočno! k=0 → f(x)=l → konstantna funkcija → Sv={l} (samo jedna vrijednost)!'},
  {q:'Tjeme parabole leži na osi simetrije x=xₜ',ans:true,tag:'kvadratna',exp:'Točno! Os simetrije parabole je x=xₜ — parabola je simetrična na tu os ✓'},
  {q:'Pravci y=2x+1 i y=2x−3 su okomiti',ans:false,tag:'linearna',exp:'Netočno! Imaju isti nagib k=2 → PARALELNI, ne okomiti! Okomiti zahtijeva k₁·k₂=−1.'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){
  if(drDone)return;drDone=true;drTot++;
  var d=drData[drIdx];var ok=chosen===d.ans;if(ok)drOk++;
  el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis');});
  el.classList.add(ok?'ok':'ng');
  var fb=document.getElementById('dr-fb');
  var tagHtml='<span style="font-family:var(--mono);font-size:9px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:700;margin-right:7px;background:'+(ok?'var(--dim-g)':'var(--dim-r)')+';color:'+(ok?'var(--green)':'var(--red)')+';border-color:'+(ok?'var(--bd-g)':'var(--bd-r)')+'">'+d.tag+'</span>';
  fb.innerHTML=tagHtml+(ok?'✓ ':'✗ ')+d.exp;
  fb.className='drill-fb '+(ok?'ok':'ng');
  document.getElementById('dr-sc').textContent=drOk+' / '+drTot;
  document.getElementById('dr-next').style.display='inline-flex';
  document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';
  updateProgress();
}
function nextDrill(){
  drIdx=(drIdx+1)%drData.length;drDone=false;
  var q=document.getElementById('dr-q');q.style.opacity='0';
  setTimeout(function(){q.textContent=drData[drIdx].q;q.style.opacity='1';},150);
  document.getElementById('dr-fb').className='drill-fb';
  document.getElementById('dr-next').style.display='none';
  document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});
  updateProgress();
}

/* ── BUG FINDER ── */
var bugDone={};
var bugExp={
  b1:'✓ Točno! k₁=k₂=3 → PARALELNI. Okomitost zahtijeva k₁·k₂=−1, što ovdje daje 9≠−1!',
  b2:'✓ Točno! yₜ = f(xₜ) = f(3) = 9−18+8 = −1. c=8 je y-odsječak (gdje sijece y-os), ne tjeme!',
  b3:'✓ Točno! (x+3)² = (x−(−3))² → p=−3. Zbroj u zagradi → p je negativan!'
};
function bug(el,id,ok,eid){
  if(bugDone[id])return;bugDone[id]=true;
  el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis');});
  el.classList.add(ok?'ok':'ng');
  if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');});}
  var expl=document.getElementById(eid);
  expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];
  expl.className='bug-expl show '+(ok?'ok':'ng');
}

/* ── ICP ── */
var icpAnswered={};
var icpFeedback={
  icp1:{
    q1:{ok:'✓ Točno! k=(8−2)/(3−0)=6/3=2',ng:'✗ Netočno. k=(y₂−y₁)/(x₂−x₁)=(8−2)/(3−0)=6/3=2'},
    q2:{ok:'✓ Točno! Okomiti: k·2=−1 → k=−1/2',ng:'✗ Netočno. Okomiti uvjet: k₁·k₂=−1. 2·k=−1 → k=−1/2'},
    q3:{ok:'✓ Točno! l=7 — y-odsječak je slobodni član u f(x)=kx+l',ng:'✗ Netočno. y-odsječak = l = 7. To je f(0)=−3·0+7=7.'}
  },
  icp2:{
    q1:{ok:'✓ Točno! xₜ=−(−8)/(2·2)=8/4=2',ng:'✗ Netočno. xₜ=−b/2a=−(−8)/(2·2)=8/4=2'},
    q2:{ok:'✓ Točno! a=−1&lt;0 → parabola ∩ → maksimum na tjemenu T(0,4) → Sv=(−∞,4⟩',ng:'✗ Netočno. a=−1&lt;0 (parabola ∩) → maksimum = tjeme yₜ=4 → Sv=(−∞,4⟩'},
    q3:{ok:'✓ Točno! Tjemeni oblik a(x−p)²+q → p=3, q=1 → T(3,1)',ng:'✗ Netočno. (x−3)²+1: p=3 (pozitivno!), q=1 → T(3,1)'}
  },
  icp3:{
    q1:{ok:'✓ Točno! (x−5)²+2: p=5, q=2 → T(5,2)',ng:'✗ Netočno. (x−5)² → p=5 (pazi: minus u zagradi!). T(5,2).'},
    q2:{ok:'✓ Točno! x²+6x=(x+3)²−9 → (x+3)²−9+5=(x+3)²−4',ng:'✗ Netočno. x²+6x+9=(x+3)², pa x²+6x=(x+3)²−9. f=(x+3)²−9+5=(x+3)²−4'},
    q3:{ok:'✓ Točno! a=−1&lt;0 → maksimum na tjemenu. Tjeme T(1,9) → maksimum = 9',ng:'✗ Netočno. a=−1&lt;0 → parabola ∩ → tjeme je MAKSIMUM. Tjeme: T(1,9) → maks=9'}
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
    var done=document.getElementById(icpId+'-done');if(done)done.classList.add('show');
    var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.add('show');
    var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;
    var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent=score+' / 3';
    updateProgress();
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

/* ── CHECKPOINT ── */
var cpState={};
function toggleCP(n){
  cpState[n]=!cpState[n];
  var el=document.getElementById('cp'+n);if(el)el.classList.toggle('done',cpState[n]);
  var done=Object.values(cpState).filter(Boolean).length;
  var txt=document.getElementById('cp-txt');if(txt)txt.textContent=done+' / 5 potvrđeno';
  var ready=document.getElementById('cp-ready');if(ready)ready.style.display=done>=5?'inline':'none';
  updateProgress();
}

/* ── SHOW ANS ── */
function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}

/* ── ADAPTIVE + NCVVO ── */
var topicErrors={linearna:0,kvadratna:0,tjeme:0,tjemeniOblik:0};
var topicHints={
  linearna:'Greške s linearnom funkcijom! Pazi: paralelni=isti k, okomiti k₁·k₂=−1.',
  kvadratna:'Greške s kvadratnom! xₜ=−b/2a · yₜ=f(xₜ). Ne koristi c kao yₜ!',
  tjeme:'Greške s tjemenom! yₜ se uvrstava u f, nije jednak c.',
  tjemeniOblik:'Greške s tjemenim oblikom! (x+p)→tjeme na −p. Pazi na predznak!'
};
var qTopics={q1:'linearna',q2:'linearna',q3:'kvadratna',q4:'kvadratna',q5:'tjeme',q6:'tjeme',q7:'tjemeniOblik',q8:'tjemeniOblik',q9:'linearna',q10:'kvadratna',q11:'tjeme',q12:'tjemeniOblik'};
var ncvvoTopicMap={'nlive-tj':['q5','q6','q11'],'nlive-pr':['q1','q2','q9'],'nlive-ps':['q3','q4'],'nlive-cv':['q7','q8','q12']};
var streak=0,currentQ=1;
function checkAdaptive(qid,ok){
  var topic=qTopics[qid];
  if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}
  if(ok)streak++;else streak=0;
  updateTimerLabel();
  if(examMode!=='normal'&&Object.keys(answered).length<total){currentQ=Object.keys(answered).length+1;timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);updateTimerLabel();}
  updateNcvvoLiveStats();
}
function showAdaptiveBanner(topic){
  var b=document.getElementById('adaptive-banner');var t=document.getElementById('ab-title');var x=document.getElementById('ab-text');
  if(!b||!t||!x)return;
  t.textContent='Prijedlog — ponovi: '+topic;x.innerHTML=topicHints[topic];
  b.style.display='flex';b.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function updateNcvvoLiveStats(){
  Object.keys(ncvvoTopicMap).forEach(function(id){
    var el=document.getElementById(id);if(!el)return;
    var qs=ncvvoTopicMap[id];
    var done=qs.filter(function(q){return answered[q]!==undefined;});
    if(done.length===0)return;
    var ok=qs.filter(function(q){return answered[q]===true;}).length;
    var pct=Math.round(ok/qs.length*100);
    el.className='ncvvo-live-stat '+(pct>=80?'good':pct>=50?'neutral':'bad');
    el.textContent=(pct>=80?'✓ ':pct>=50?'~ ':'✗ ')+pct+'% točno';
  });
}

/* ── UPDATE PROGRESS ── */
function updateProgress(){
  var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*8),8):0;
  var cpDone=Object.values(cpState).filter(Boolean).length;
  var cpPts=Math.round(cpDone/5*8);
  var icpPts=0;
  ['icp1','icp2','icp3'].forEach(function(icp){
    var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;
    icpPts+=Math.round(done/3*4);
  });
  var quizPts=Object.keys(answered).length>0?Math.round(correct/total*16):0;
  tabProgress[1]=Math.min(35+drillPts+icpPts+cpPts,50);
  tabProgress[2]=Math.min(35+drillPts+icpPts+cpPts+quizPts,100);
  var curTab=document.querySelector('.tab.on');
  var curIdx=curTab?Array.from(document.querySelectorAll('.tab')).indexOf(curTab):0;
  var p=tabProgress[curIdx];
  document.getElementById('prog-bar').style.width=p+'%';
  document.getElementById('prog-pct').textContent=p+'%';
  try{localStorage.setItem('maturiraj_p07_prog',p);}catch(e){}
}

/* ── SOUND ── */
var audioCtx=null;
function getAudio(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return audioCtx;}
function playTone(freq,dur,vol,type){var ctx=getAudio();if(!ctx)return;var osc=ctx.createOscillator();var gain=ctx.createGain();osc.connect(gain);gain.connect(ctx.destination);osc.type=type||'sine';osc.frequency.setValueAtTime(freq,ctx.currentTime);gain.gain.setValueAtTime(vol||0.15,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+dur);osc.start(ctx.currentTime);osc.stop(ctx.currentTime+dur);}
function soundCorrect(){playTone(880,0.12,0.12,'sine');setTimeout(function(){playTone(1100,0.15,0.10,'sine');},80);}
function soundWrong(){playTone(220,0.25,0.12,'sawtooth');}
function soundTick(){playTone(440,0.05,0.05,'square');}
function soundTimeUp(){playTone(180,0.4,0.15,'sawtooth');setTimeout(function(){playTone(120,0.5,0.12,'sawtooth');},200);}
function soundComplete(){[523,659,784,1047].forEach(function(f,i){setTimeout(function(){playTone(f,0.2,0.12,'sine');},i*100);});}

/* ── TIMER ── */
var examMode='normal',timerInterval=null,timerSeconds=90,timerMax=90;
function setExamMode(mode,el){examMode=mode;document.querySelectorAll('.exam-mode-opt').forEach(function(o){o.classList.remove('active');});el.classList.add('active');if(mode!=='normal'){timerMax=mode==='timed'?90:30;document.getElementById('exam-timer').style.display='flex';startTimer();}else{document.getElementById('exam-timer').style.display='none';stopTimer();}}
function drawTimerCanvas(secs,max){var c=document.getElementById('timer-canvas');if(!c)return;var ctx=c.getContext('2d');var r=28,cx=32,cy=32;ctx.clearRect(0,0,64,64);ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(77,158,255,0.12)';ctx.lineWidth=4;ctx.stroke();var pct=secs/max;var col=pct>0.4?'rgba(77,158,255,0.85)':pct>0.2?'rgba(245,158,11,0.9)':'rgba(248,113,113,0.9)';ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+pct*Math.PI*2);ctx.strokeStyle=col;ctx.lineWidth=4;ctx.lineCap='round';ctx.stroke();var numEl=document.getElementById('et-num');if(numEl)numEl.textContent=secs;var wrap=document.getElementById('exam-timer');if(wrap){wrap.classList.toggle('warn',pct<=0.4&&pct>0.2);wrap.classList.toggle('urgent',pct<=0.2);}}
function startTimer(){stopTimer();timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);timerInterval=setInterval(function(){timerSeconds--;drawTimerCanvas(timerSeconds,timerMax);if(timerSeconds>0&&timerSeconds<=10)soundTick();if(timerSeconds<=0){stopTimer();soundTimeUp();}},1000);}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function updateTimerLabel(){var l=document.getElementById('et-q-label');var s=document.getElementById('et-streak');if(l)l.textContent='Pitanje '+currentQ+' / 12';if(s)s.textContent='Niz: '+streak+' ✓';}

/* ── QUIZ ── */
var quizInited=false,answered={},correct=0,total=0;
var ALL_QUESTIONS=[
  {id:'q1',topic:'linearna',meta:'nagib i y-odsječak',
   text:'Pravac y = −2x + 5 ima nagib i y-odsječak:',
   opts:[{t:'k=5, l=−2',ok:false},{t:'k=−2, l=5',ok:true},{t:'k=2, l=−5',ok:false},{t:'k=−2, l=−5',ok:false}],
   c:'✓ Točno. y=kx+l: k=−2 (nagib), l=5 (y-odsječak).',
   w:'✗ Netočno. f(x)=kx+l → k=−2, l=5. Nagib je koeficijent uz x!',
   proof:['y = −2x + 5 → f(x) = kx+l','k = −2 (koef. uz x)','l = 5 (slobodni član)']},
  {id:'q2',topic:'linearna',meta:'paralelni i okomiti',
   text:'Pravac okomit na y=4x−3 ima nagib:',
   opts:[{t:'k = 4',ok:false},{t:'k = −4',ok:false},{t:'k = 1/4',ok:false},{t:'k = −1/4',ok:true}],
   c:'✓ Točno. Okomiti: k₁·k₂=−1 → 4·k=−1 → k=−1/4.',
   w:'✗ Netočno. Okomiti uvjet: k₁·k₂=−1. 4·k=−1 → k=−1/4.',
   proof:['k₁ = 4','k₁·k₂ = −1','k₂ = −1/4']},
  {id:'q3',topic:'kvadratna',meta:'smjer parabole',
   text:'Parabola f(x) = −3x²+2x−1 otvara se:',
   opts:[{t:'Gore (∪)',ok:false},{t:'Dolje (∩)',ok:true},{t:'Lijevo',ok:false},{t:'Ovisi o x',ok:false}],
   c:'✓ Točno. a=−3&lt;0 → parabola ∩ (otvara dolje), tjeme je maksimum.',
   w:'✗ Netočno. a=−3&lt;0 → parabola ∩. a&lt;0 uvijek daje parabolu prema dolje.',
   proof:['a = −3','a < 0 → parabola ∩','otvara se dolje, tjeme = maksimum']},
  {id:'q4',topic:'kvadratna',meta:'nultočke i D',
   text:'Parabola f(x)=x²+2x+1 i x-os:',
   opts:[{t:'Dvije zajedničke točke',ok:false},{t:'Jedna zajednička točka',ok:true},{t:'Nema zajedničkih točaka',ok:false},{t:'Beskonačno točaka',ok:false}],
   c:'✓ Točno. D=4−4=0 → jedna dvostruka nultočka (tangira x-os).',
   w:'✗ Netočno. D=b²−4ac=4−4=0 → D=0 → jedna dvostruka nultočka.',
   proof:['D = 4−4·1·1 = 0','D=0 → jedna dvostruka nultočka','f(x) = (x+1)² — tangira x-os u x=−1']},
  {id:'q5',topic:'tjeme',meta:'x-koordinata tjemena',
   text:'X-koordinata tjemena f(x)=3x²−12x+7 je:',
   opts:[{t:'xₜ = −2',ok:false},{t:'xₜ = 2',ok:true},{t:'xₜ = 4',ok:false},{t:'xₜ = 7',ok:false}],
   c:'✓ Točno. xₜ=−b/2a=12/6=2.',
   w:'✗ Netočno. xₜ=−b/(2a)=−(−12)/(2·3)=12/6=2.',
   proof:['xₜ = −b/2a','= −(−12)/(2·3) = 12/6','= 2']},
  {id:'q6',topic:'tjeme',meta:'y-koordinata tjemena',
   text:'Tjeme f(x)=x²−4x+8 je:',
   opts:[{t:'T(2, 8)',ok:false},{t:'T(2, 4)',ok:true},{t:'T(−2, 4)',ok:false},{t:'T(4, 2)',ok:false}],
   c:'✓ Točno. xₜ=2, yₜ=f(2)=4−8+8=4. T(2,4).',
   w:'✗ Netočno. xₜ=4/2=2. yₜ=f(2)=4−8+8=4. Ne koristi c=8!',
   proof:['xₜ = −(−4)/2 = 2','yₜ = f(2) = 4−8+8 = 4','T(2, 4)']},
  {id:'q7',topic:'tjemeniOblik',meta:'čitanje tjemena',
   text:'Tjeme f(x)=2(x+1)²−3 je:',
   opts:[{t:'T(1, −3)',ok:false},{t:'T(−1, −3)',ok:true},{t:'T(1, 3)',ok:false},{t:'T(−1, 3)',ok:false}],
   c:'✓ Točno. (x+1)²=(x−(−1))² → p=−1. T(−1, −3).',
   w:'✗ Netočno. (x+1)²=(x−(−1))² → p=−1 (ne +1!). T(−1, −3).',
   proof:['(x+1)² = (x−(−1))²','p = −1 (pazi na predznak!)','T(p, q) = T(−1, −3)']},
  {id:'q8',topic:'tjemeniOblik',meta:'konverzija u tjemeni oblik',
   text:'f(x)=x²+4x+1 u tjemenom obliku je:',
   opts:[{t:'(x+4)²+1',ok:false},{t:'(x+2)²+1',ok:false},{t:'(x+2)²−3',ok:true},{t:'(x−2)²−3',ok:false}],
   c:'✓ Točno. x²+4x=(x+2)²−4. f=(x+2)²−4+1=(x+2)²−3.',
   w:'✗ Netočno. x²+4x+4=(x+2)², pa x²+4x=(x+2)²−4. f=(x+2)²−4+1=(x+2)²−3.',
   proof:['x²+4x = (x+2)²−4','f = (x+2)²−4+1','= (x+2)²−3, T(−2,−3)']},
  {id:'q9',topic:'linearna',meta:'jednadžba pravca',
   text:'Jednadžba pravca kroz (0,3) i (2,7) je:',
   opts:[{t:'y = x+3',ok:false},{t:'y = 2x+3',ok:true},{t:'y = 2x+7',ok:false},{t:'y = 3x+2',ok:false}],
   c:'✓ Točno. k=(7−3)/(2−0)=2. l=y-odsječak=3 (prolazi kroz (0,3)).',
   w:'✗ Netočno. k=(7−3)/(2−0)=2. (0,3) je y-odsječak → l=3. y=2x+3.',
   proof:['k = (7−3)/(2−0) = 2','(0,3) → y-odsječak l=3','y = 2x+3']},
  {id:'q10',topic:'kvadratna',meta:'skup vrijednosti',
   text:'Skup vrijednosti f(x)=−x²+6x−5 je:',
   opts:[{t:'⟨−5, +∞)',ok:false},{t:'ℝ',ok:false},{t:'(−∞, 4⟩',ok:true},{t:'(−∞, 6⟩',ok:false}],
   c:'✓ Točno. a=−1&lt;0 → maks. xₜ=3, yₜ=−9+18−5=4. Sv=(−∞,4⟩.',
   w:'✗ Netočno. a=−1&lt;0 → maksimum. xₜ=3, yₜ=f(3)=−9+18−5=4. Sv=(−∞,4⟩.',
   proof:['a=−1<0 → maksimum na tjemenu','xₜ=3, yₜ=f(3)=4','Sv=(−∞, 4⟩']},
  {id:'q11',topic:'tjeme',meta:'A razina · parametar',
   text:'Parabola f(x)=x²+bx+1 ima minimum u x=3. Koliko je b?',
   opts:[{t:'b = 3',ok:false},{t:'b = −6',ok:true},{t:'b = 6',ok:false},{t:'b = −3',ok:false}],
   c:'✓ Točno. xₜ=−b/2=3 → b=−6.',
   w:'✗ Netočno. xₜ=−b/(2·1)=−b/2=3 → −b=6 → b=−6.',
   proof:['xₜ = −b/2a = −b/2 = 3','−b = 6','b = −6']},
  {id:'q12',topic:'tjemeniOblik',meta:'A razina · min/maks iz tjemenog oblika',
   text:'Maksimalna vrijednost f(x)=−2(x+4)²+7 je:',
   opts:[{t:'−2',ok:false},{t:'4',ok:false},{t:'7',ok:true},{t:'nema maksimuma',ok:false}],
   c:'✓ Točno. a=−2&lt;0 → maksimum = q = 7 (y-koordinata tjemena).',
   w:'✗ Netočno. a=−2&lt;0 → tjeme je maksimum. q=7 → maks = 7.',
   proof:['a=−2<0 → tjeme je maksimum','Tjeme: T(−4, 7)','Maks. vrijednost = q = 7']}
];

var FExp={
  ng1:'k=(y₂−y₁)/(x₂−x₁)=(11−3)/(5−1)=8/4=2.',
  tj1:'xₜ=−b/2a=−(−10)/2=5.',
  tv1:'(x+4)²=(x−(−4))² → p=−4. q=−7. T(−4,−7).',
  sv1:'a=−2&lt;0 → maksimum na tjemenu T(1,3). Sv=(−∞,3⟩.'
};

function renderQuiz(){
  var cont=document.getElementById('quiz-container');
  var html='';
  ALL_QUESTIONS.forEach(function(q){
    var optsHtml=q.opts.map(function(o,i){
      return '<div class="qo" onclick="qa(\\''+q.id+'\\','+i+','+o.ok+',\\''+q.id+'e\\')">'+o.t+'</div>';
    }).join('');
    html+='<div class="qb" id="qb-'+q.id+'"><div class="qm">'+q.meta+'</div><div class="qq">'+q.text+'</div><div class="qb-opts">'+optsHtml+'</div><div class="qe" id="'+q.id+'e"></div></div>';
  });
  cont.innerHTML=html;
  total=ALL_QUESTIONS.length;
}

function qa(qid,idx,ok,eid){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;
  if(ok){correct++;soundCorrect();}else soundWrong();
  var qdata=ALL_QUESTIONS.find(function(q){return q.id===qid;});
  if(!qdata)return;
  document.querySelectorAll('#qb-'+qid+' .qo').forEach(function(o,i){
    o.classList.add('dis');
    if(i===idx)o.classList.add(ok?'ok':'ng');
    if(!ok&&qdata.opts[i].ok)o.classList.add('ok');
  });
  var e=document.getElementById(eid);
  var proofHtml='';
  if(!ok&&qdata.proof){
    proofHtml='<div class="mini-proof"><div class="mini-proof-lbl">→ Mini dokaz</div>'+
      qdata.proof.map(function(s,i){return '<div class="step"><span class="sn">'+(i+1)+'</span><span class="st">'+s+'</span></div>';}).join('')+'</div>';
  }
  e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>'+proofHtml;
  e.classList.add('show');
  checkAdaptive(qid,ok);
  if(examMode!=='normal')stopTimer();
  if(examMode!=='normal'&&Object.keys(answered).length<total)startTimer();
  if(Object.keys(answered).length===total){
    var s=document.getElementById('score');
    document.getElementById('snum').textContent=correct+'/'+total;
    var pct=Math.round(correct/total*100);
    document.getElementById('slbl').textContent=pct>=80?'Izvrsno! Spreman si za P08 →':pct>=60?'Dobro! Ponovi slabe točke.':'Ponovi gradivo P07 prije nastavka.';
    if(s)s.classList.add('show');
    soundComplete();
    updateProgress();
  }
  updateProgress();
}

function chkf(iid,fid,ans,key){
  var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();
  var btn=inp.parentElement.querySelector('.fitb-btn');if(!v)return;
  inp.disabled=true;if(btn)btn.disabled=true;fb.classList.add('show');
  var norm=function(s){return s.replace(/\\s/g,'').toLowerCase().replace(/[⟨⟩]/g,function(c){return c==='⟨'?'[':']';});};
  var ok=norm(v)===norm(ans);
  inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');
  fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];
}

/* ══════════════════════════════════════════════
   INTERAKTIVNI GRAFOVI — P07
   ══════════════════════════════════════════════ */

/* ── Helpers ── */
function fmtN(x){return Number.isInteger(x)||Math.abs(x-Math.round(x))<0.001?Math.round(x):Math.round(x*100)/100;}
function drawGrid(ctx,W,H,ox,oy,sc){
  ctx.strokeStyle='rgba(77,158,255,0.08)';ctx.lineWidth=1;
  for(var i=-20;i<=20;i++){var x=ox+i*sc;if(x>=0&&x<=W){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}}
  for(var i=-20;i<=20;i++){var y=oy+i*sc;if(y>=0&&y<=H){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}}
}
function drawAxes(ctx,W,H,ox,oy,sc){
  ctx.strokeStyle='rgba(77,158,255,0.35)';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(0,oy);ctx.lineTo(W,oy);ctx.stroke();
  ctx.beginPath();ctx.moveTo(ox,0);ctx.lineTo(ox,H);ctx.stroke();
  /* pips + labels */
  ctx.fillStyle='rgba(100,130,180,0.7)';ctx.font='9px monospace';ctx.textAlign='center';
  for(var i=-10;i<=10;i++){if(i===0)continue;
    var px=ox+i*sc; if(px>8&&px<W-8){ctx.fillText(i,px,oy+11);}
    var py=oy-i*sc; if(py>8&&py<H-8){ctx.textAlign='right';ctx.fillText(i,ox-4,py+3);}
    ctx.textAlign='center';
  }
}

/* ── PARABOLA ── */
var parA=1,parB=-4,parC=3;
function syncPar(){
  parA=parseFloat(document.getElementById('par-sa').value)||1;
  parB=parseFloat(document.getElementById('par-sb').value)||0;
  parC=parseFloat(document.getElementById('par-sc').value)||0;
  var va=fmtN(parA),vb=fmtN(parB),vc=fmtN(parC);
  document.getElementById('par-va').textContent=va;
  document.getElementById('par-vb').textContent=(vb>=0?'+':'')+vb;
  document.getElementById('par-vc').textContent=(vc>=0?'+':'')+vc;
  drawParabola();
}
function drawParabola(){
  var cnv=document.getElementById('par-canvas');if(!cnv)return;
  var ctx=cnv.getContext('2d');
  var W=cnv.offsetWidth||600,H=cnv.offsetHeight||220;
  cnv.width=W;cnv.height=H;
  var ox=W/2,oy=H/2,sc=30;
  ctx.fillStyle='#0a0f1a';ctx.fillRect(0,0,W,H);
  drawGrid(ctx,W,H,ox,oy,sc);
  drawAxes(ctx,W,H,ox,oy,sc);
  /* graf */
  ctx.strokeStyle='#4D9EFF';ctx.lineWidth=2.5;ctx.beginPath();
  var first=true;
  for(var px=0;px<=W;px++){
    var xv=(px-ox)/sc,yv=parA*xv*xv+parB*xv+parC;
    var py=oy-yv*sc;
    if(py<-50||py>H+50){first=true;continue;}
    if(first){ctx.moveTo(px,py);first=false;}else{ctx.lineTo(px,py);}
  }
  ctx.stroke();
  /* tjeme */
  var xt=-parB/(2*parA),yt=parA*xt*xt+parB*xt+parC;
  var tx=ox+xt*sc,ty=oy-yt*sc;
  if(tx>-10&&tx<W+10&&ty>-10&&ty<H+10){
    ctx.fillStyle='#22D3EE';ctx.beginPath();ctx.arc(tx,ty,5,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#22D3EE';ctx.font='bold 10px monospace';ctx.textAlign='left';
    ctx.fillText('T('+fmtN(xt)+','+fmtN(yt)+')',tx+7,ty-5);
  }
  /* nultočke */
  var D=parB*parB-4*parA*parC;
  if(D>=0){
    var x1=(-parB-Math.sqrt(D))/(2*parA),x2=(-parB+Math.sqrt(D))/(2*parA);
    [x1,x2].forEach(function(x){
      var px2=ox+x*sc,py2=oy;
      ctx.fillStyle='#34D399';ctx.beginPath();ctx.arc(px2,py2,4,0,Math.PI*2);ctx.fill();
    });
  }
  /* info */
  var sign=function(n,first){var s=fmtN(n);return first?s:(n>=0?'+'+s:''+s);};
  var nulTxt=D>0?'x₁='+fmtN((-parB-Math.sqrt(D))/(2*parA))+', x₂='+fmtN((-parB+Math.sqrt(D))/(2*parA)):D===0?'x='+fmtN(xt)+' (dvostruka)':'nema realnih';
  document.getElementById('par-info').innerHTML=
    'f(x) = '+sign(parA,true)+'x² '+sign(parB,false)+'x '+sign(parC,false)+
    ' &nbsp;·&nbsp; T('+fmtN(xt)+', '+fmtN(yt)+')'+
    ' &nbsp;·&nbsp; D='+fmtN(D)+
    ' &nbsp;·&nbsp; nultočke: '+nulTxt;
  /* updateProgress ako postoji */
  if(typeof updateProgress==='function')updateProgress();
}

/* ── LINEARNA ── */
var linK=1,linL=0;
function syncLin(){
  linK=parseFloat(document.getElementById('lin-sk').value)||0;
  linL=parseFloat(document.getElementById('lin-sl').value)||0;
  document.getElementById('lin-vk').textContent=fmtN(linK);
  document.getElementById('lin-vl').textContent=(linL>=0?'+':'')+fmtN(linL);
  drawLinear();
}
function drawLinear(){
  var cnv=document.getElementById('lin-canvas');if(!cnv)return;
  var ctx=cnv.getContext('2d');
  var W=cnv.offsetWidth||600,H=cnv.offsetHeight||220;
  cnv.width=W;cnv.height=H;
  var ox=W/2,oy=H/2,sc=30;
  ctx.fillStyle='#0a0f1a';ctx.fillRect(0,0,W,H);
  drawGrid(ctx,W,H,ox,oy,sc);
  drawAxes(ctx,W,H,ox,oy,sc);
  /* pravac */
  ctx.strokeStyle='#22D3EE';ctx.lineWidth=2.5;ctx.beginPath();
  var xL=(0-oy)/(-linK*sc)-ox/sc;var xR=(H-oy)/(-linK*sc)-ox/sc;
  var y0=oy-(linK*((0-ox)/sc)+linL)*sc;
  var yW=oy-(linK*((W-ox)/sc)+linL)*sc;
  ctx.moveTo(0,y0);ctx.lineTo(W,yW);ctx.stroke();
  /* sjecište s y-osi (0, l) */
  var syX=ox,syY=oy-linL*sc;
  if(syY>5&&syY<H-5){ctx.fillStyle='#22D3EE';ctx.beginPath();ctx.arc(syX,syY,4,0,Math.PI*2);ctx.fill();}
  /* nultočka */
  if(linK!==0){var nx0=-linL/linK,npx=ox+nx0*sc;
    if(npx>5&&npx<W-5){ctx.fillStyle='#34D399';ctx.beginPath();ctx.arc(npx,oy,4,0,Math.PI*2);ctx.fill();}
  }
  var nulTxt=linK!==0?'nultočka x='+fmtN(-linL/linK):'nema nultočke';
  document.getElementById('lin-info').innerHTML=
    'y = '+fmtN(linK)+'x '+(linL>=0?'+':'')+fmtN(linL)+
    ' &nbsp;·&nbsp; nagib k='+fmtN(linK)+
    ' &nbsp;·&nbsp; '+nulTxt+
    ' &nbsp;·&nbsp; y(0)='+fmtN(linL);
}

/* Init grafove pri učitavanju */
(function(){
  setTimeout(function(){drawParabola();drawLinear();},100);
})();

/* ── RESTORE TAB ── */
(function(){try{var s=sessionStorage.getItem('p07_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){
  try{
    var saved=localStorage.getItem('maturiraj_p07_prog');
    if(saved!==null){
      var pct=parseInt(saved);
      if(pct>0){
        var bar=document.getElementById('prog-bar');
        var lbl=document.getElementById('prog-pct');
        if(bar)bar.style.width=pct+'%';
        if(lbl)lbl.textContent=pct+'%';
      }
    }
  }catch(e){}
})();

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
const meta = {id:'P07',pidLower:'p07',title:"Maturiraj.hr \u2014 Mat A \u00b7 P07 \u00b7 Linearna i Kvadratna Funkcija",subject:'matematika-a',lsKey:'maturiraj_p07_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p07');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P07] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p07"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p07_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p07_prog',String(pct));}catch(e){}}
// -- Complete page for MatChapterViewer (iframe srcDoc)
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'*\');}}\\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'*\')}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P07 \u00b7 Kvadratna Funkcija</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';
export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};