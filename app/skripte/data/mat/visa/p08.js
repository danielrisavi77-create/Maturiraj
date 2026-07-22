/**
 * Maturiraj.hr — Mat A · P08
 * Maturiraj.hr — Mat A · P08 · Eksponencijalna i Logaritamska Funkcija
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
.graph-canvas{display:block;width:100%;height:220px}
.graph-controls{display:flex;align-items:center;gap:10px;padding:10px 14px;flex-wrap:wrap;border-top:1px solid var(--bd)}
.graph-ctrl-lbl{font-family:var(--mono);font-size:10px;color:var(--t3);min-width:32px}
.graph-ctrl-val{font-family:var(--mono);font-size:11px;color:var(--cyan);font-weight:700;min-width:36px;text-align:right}
input[type=range].graph-slider{-webkit-appearance:none;appearance:none;height:3px;border-radius:2px;background:var(--bdm);outline:none;flex:1;cursor:pointer;min-width:80px}
input[type=range].graph-slider::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--amber);cursor:pointer;border:2px solid var(--bg)}
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
.si-r{background:var(--dim-r);color:var(--red)}
.eq-s-result{font-family:var(--mono);font-size:13px;color:var(--cyan);padding:8px 12px;background:var(--inp);border:1px solid var(--bd);border-radius:var(--r2);margin-top:4px;min-height:28px;line-height:1.6}`;
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
  <button class="sb-item" onclick="navigateChapter('p07')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>07 · Linearna i kvadratna f.</button>
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>08 · Eksponencijalna i log.</button>
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
  <span class="bc-cur">eksponencijalna-logaritamska-funkcija</span>
</div>

<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>

<!-- ═══════════════════ L0 ═══════════════════ -->
<div class="layer on" id="l0">
  <div class="hero">
    <div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 08 od 21 · A razina · funkcije</div>
    <h1 class="hero-title">Eksponencijalna i<br><span>Logaritamska Funkcija</span></h1>
    <p class="hero-sub">Inverz koji mijenja pravila — logaritam je jedini alat koji "skida" eksponent i otvara vrata svim exponencijalnim jednadžbama</p>
    <div class="hero-meta">
      <span class="hchip b">3 koncepta</span>
      <span class="hchip a">⭐ Pojavljuje se na svim A razina ispitima</span>
      <span class="hchip c">~40 min</span>
    </div>
    <div class="pt"><div class="pb" style="width:41%"></div></div>
  </div>

  <div class="tags">
    <span class="pill p-b">f(x) = aˣ</span>
    <span class="pill p-c">Baza a &gt; 0, a ≠ 1</span>
    <span class="pill p-i">log_a(x) — definicija</span>
    <span class="pill p-a">Pravila logaritama</span>
    <span class="pill p-v">Eksponenc. jednadžbe</span>
    <span class="pill p-r">Logaritamske jednadžbe</span>
  </div>

  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int">
    <div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">
      Eksponencijalna i logaritamska funkcija su inverzi — ako razumiješ jednu, razumiješ drugu. Logaritam je jedini način da "spustiš eksponent dolje" i riješiš jednadžbu poput 2ˣ = 5.<br><br>
      Na A razini, svaki drugi zadatak iz funkcija koristi ln ili log₁₀. Derivacija eˣ (P17), integrali (P18), kompleksne jednadžbe — sve ovisi o vladanju P08.<br><br>
      <strong>Bez logaritama ne možeš riješiti eksponencijalne jednadžbe. Bez eksponencijalnih ne možeš razumjeti rast, pad, kamate, radioaktivni raspad.</strong>
    </div>
  </div>

  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">aˣ</div><div class="sc-name">Eksponencijalna f.</div><div class="sc-desc">a&gt;1: rastuća. 0&lt;a&lt;1: padajuća. Uvijek prolazi kroz (0,1). D=ℝ, Sv=(0,+∞).</div></div>
    <div class="sc"><div class="sc-ico si-c">log_a</div><div class="sc-name">Logaritamska f.</div><div class="sc-desc">Inverz od aˣ. D=(0,+∞), Sv=ℝ. Prolazi kroz (1,0) i (a,1).</div></div>
    <div class="sc"><div class="sc-ico si-i">ln</div><div class="sc-name">Prirodni logaritam</div><div class="sc-desc">ln = log_e, e ≈ 2.718. Najvažnija baza u kalkulus — derivacija ln(x)=1/x.</div></div>
    <div class="sc"><div class="sc-ico si-a">log mn</div><div class="sc-name">Pravila logaritama</div><div class="sc-desc">Zbroj, razlika, potencija. log(mn)=log m+log n. log(mⁿ)=n·log m.</div></div>
    <div class="sc"><div class="sc-ico si-v">aˣ=b</div><div class="sc-name">Eksp. jednadžbe</div><div class="sc-desc">Svedi na istu bazu ili logaritmiraj obje strane. aˣ=b → x=log_a(b).</div></div>
    <div class="sc"><div class="sc-ico si-r">log x=b</div><div class="sc-name">Log. jednadžbe</div><div class="sc-desc">Pretvori u eksponencijalnu: log_a(x)=b ↔ x=aᵇ. Uvijek provjeri uvjet x&gt;0!</div></div>
  </div>

  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">f(x) = aˣ</div><div class="cv">a&gt;1: rastuća, asimptota y=0 (lijevo). 0&lt;a&lt;1: padajuća, asimptota y=0 (desno). Uvijek f(0)=1.</div></div>
    <div class="cr"><div class="ck b">D i Sv eksp.</div><div class="cv">D(aˣ) = ℝ. Sv(aˣ) = (0,+∞). Graf nikad ne dotiče x-os!</div></div>
    <div class="cr"><div class="ck c">log_a(x) = y ↔ aʸ = x</div><div class="cv">Definicija logaritma. Logaritam je eksponent na koji treba podići bazu da se dobije x.</div></div>
    <div class="cr"><div class="ck c">D i Sv log.</div><div class="cv">D(log_a) = (0,+∞). Sv(log_a) = ℝ. Graf ne postoji za x ≤ 0!</div></div>
    <div class="cr"><div class="ck i">log(mn) = log m + log n</div><div class="cv">Množenje → zbrajanje logaritama.</div></div>
    <div class="cr"><div class="ck i">log(<span class="frac"><span class="num">m</span><span class="den">n</span></span>) = log m − log n</div><div class="cv">Dijeljenje → oduzimanje logaritama.</div></div>
    <div class="cr"><div class="ck i">log(mⁿ) = n · log m</div><div class="cv">Potencija izlazi ispred — ključno za eksponencijalne jednadžbe!</div></div>
    <div class="cr"><div class="ck r">Zamka</div><div class="cv">log_a(x+y) ≠ log_a(x) + log_a(y). Logaritam ZBROJA nije zbroj logaritama!</div></div>
  </div>

  <div class="nav-row">
    <button onclick="navigateChapter('p07')" class="nb">← P07 · Lin. i kv. f.</button>
    <span class="nb primary" onclick="sw(1)">Uči detaljno →</span>
  </div>
</div>

<!-- ═══════════════════ L1 ═══════════════════ -->
<div class="layer" id="l1">

  <!-- ══ 01 EKSPONENCIJALNA FUNKCIJA ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · EKSPONENCIJALNA FUNKCIJA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — eksponencijalni rast i pad</div>
    <div class="box-int-txt">
      aˣ je "broj koji se x puta sam množi". Za a=2: 2⁰=1, 2¹=2, 2²=4, 2³=8 — svaki korak <em>množi</em> prethodni s 2. To je eksponencijalni rast.<br><br>
      Za a=1/2: (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)⁰=1, (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)¹=0.5, (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)²=0.25 — svaki korak <em>dijeli</em> s 2. To je eksponencijalni pad (radioaktivni raspad, hlađenje...).<br><br>
      <strong>Ključno: aˣ je UVIJEK pozitivan! Graf nikad ne dotiče niti ne prelazi x-os — asimptota y=0.</strong>
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">EKSPONENCIJALNA FUNKCIJA — svojstva</span>
    <span class="val">f(x) = aˣ</span> <span class="cmt">· uvjet: a &gt; 0, a ≠ 1</span><br>
    <span class="val">D = ℝ</span> · <span class="val">Sv = (0, +∞)</span> <span class="cmt">— uvijek pozitivna!</span><br>
    <span class="val">f(0) = 1</span> <span class="cmt">— prolazi kroz (0,1) za svaki a</span><br>
    <span class="val">a &gt; 1:</span> rastuća · <span class="val">0 &lt; a &lt; 1:</span> padajuća<br>
    <span class="cmt">Horizontalna asimptota: y = 0 (x-os). Nema vertikalne asimptote.</span>
  </div>

  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c">
      <div class="cmp-h b">a &gt; 1 (rastuća)</div>
      <div class="cmp-body">
        <div class="cmp-row">Graf ide <b>gore-desno</b></div>
        <div class="cmp-row">Asimptota y=0 <b>lijevo</b></div>
        <div class="cmp-row">f(1) = a &gt; 1</div>
        <div class="cmp-row">Primjer: 2ˣ, eˣ, 10ˣ</div>
      </div>
    </div>
    <div class="cmp-c">
      <div class="cmp-h c">0 &lt; a &lt; 1 (padajuća)</div>
      <div class="cmp-body">
        <div class="cmp-row">Graf ide <b>dolje-desno</b></div>
        <div class="cmp-row">Asimptota y=0 <b>desno</b></div>
        <div class="cmp-row">f(1) = a &lt; 1</div>
        <div class="cmp-row">Primjer: (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)ˣ, (0.3)ˣ</div>
      </div>
    </div>
  </div>

  <!-- EXP EXPLORER -->
  <div class="disc-wrap">
    <div class="disc-head">
      <span class="disc-title">// Eksponencijalni Explorer — upiši bazu a</span>
    </div>
    <div class="disc-body">
      <div class="disc-row">
        <span class="disc-lbl">f(x) =</span>
        <input class="disc-in" id="exp-a" type="number" value="2" step="0.5" min="0.01" max="20" placeholder="a">
        <span class="disc-lbl">ˣ</span>
        <button class="disc-btn" onclick="analyzeExp()">Analiziraj →</button>
      </div>
      <div class="disc-result" id="exp-result" style="display:none"></div>
      <div class="graph-wrap">
        <canvas class="graph-canvas" id="exp-canvas" width="600" height="220"></canvas>
        <div class="graph-controls">
          <span class="graph-ctrl-lbl">baza a</span>
          <input type="range" class="graph-slider" id="exp-sa" min="1.1" max="5" step="0.1" value="2" oninput="syncExp()">
          <span class="graph-ctrl-val" id="exp-va">2</span>
          <span class="graph-ctrl-lbl">· aˣ</span>
        </div>
        <div class="graph-controls" style="border-top:none;padding-top:0">
          <span class="graph-ctrl-lbl">e^(kx)</span>
          <input type="range" class="graph-slider" id="exp-sk" min="-2" max="2" step="0.1" value="1" oninput="syncExp()">
          <span class="graph-ctrl-val" id="exp-vk">k=1</span>
        </div>
        <div class="graph-info" id="exp-info">f(x) = 2ˣ · prolazi kroz (0,1) · rastuća · asimptota y=0</div>
      </div>
    </div>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — zrcalna slika oko y-osi</div>
    <div class="box-men-txt">
      (<span class="frac"><span class="num">1</span><span class="den">a</span></span>)ˣ = a⁻ˣ — to je eksponencijalna s bazom a <em>reflektirana na y-os</em>.<br>
      Graf (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)ˣ je identičan grafu 2ˣ, samo zrcaljen po y-osi.<br>
      <strong>Svaka padajuća eksponencijalna je samo rastuća gledana "unatrag".</strong>
    </div>
  </div>

  <!-- STEP REVEAL 1 -->
  <div class="sr" id="sr1">
    <div class="sr-head">
      <div class="sr-title">Eksponencijalna jednadžba — korak po korak</div>
      <div class="sr-task">Riješi: 4ˣ = 8</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr1s1">
        <div class="sr-step-in"><div class="sr-num">1</div>
          <div class="sr-body"><div class="sr-stitle">Svedi na istu bazu</div>
            <div class="sr-txt">4 = 2² · 8 = 2³<br>(2²)ˣ = 2³ → 2²ˣ = 2³</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s2">
        <div class="sr-step-in"><div class="sr-num">2</div>
          <div class="sr-body"><div class="sr-stitle">Iste baze → jednaki eksponenti</div>
            <div class="sr-txt">2x = 3 → <strong>x = 3/2</strong></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s3">
        <div class="sr-step-in"><div class="sr-num">3</div>
          <div class="sr-body"><div class="sr-stitle">Provjera</div>
            <div class="sr-txt">4^(<span class="frac"><span class="num">3</span><span class="den">2</span></span>) = (4^(<span class="frac"><span class="num">1</span><span class="den">2</span></span>))³ = 2³ = 8 ✓
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Riješi: 9ˣ = 27</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try1" type="text" placeholder="x = ?" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try1','try1-fb','3/2','exp1')">Provjeri</button>
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
    <div class="bug-head">🐛 prepoznaj grešku — eksponencijalna</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik rješava 2ˣ = −4:</p>
      <div class="bug-task">x = log₂(−4) = <span class="wrong">−2</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno, log₂(−4) = −2</div>
        <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška: 2ˣ &gt; 0 uvijek → 2ˣ = −4 nema rješenja u ℝ!</div>
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška: x = −2 jer 2⁻² = −4</div>
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Greška: treba koristiti ln</div>
      </div>
      <div class="bug-expl" id="b1e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — eksponencijalna</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>aˣ &gt; 0 uvijek! Nema negativnih vrijednosti → aˣ = negativan broj: nema rješenja</li>
      <li class="b20-item"><div class="b20-dot"></div>Iste baze → jednaki eksponenti: aᵐ = aⁿ ↔ m = n</li>
      <li class="b20-item"><div class="b20-dot"></div>D = ℝ, Sv = (0,+∞), f(0) = 1, asimptota y = 0</li>
    </ul>
  </div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — eksponencijalna jednadžba</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješite: 2^(x+1) = 32</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Izrazi 32 kao potenciju baze 2: 32 = <strong>2⁵</strong></div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Jednadžba: 2^(x+1) = 2⁵ → <strong>x + 1 = 5</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">x = 4</div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Maturalni obrazac: uvijek izrazi obje strane s istom bazom → izjednači eksponente</div></div>
      </div>
      <div class="combo-ans">x = 4 &nbsp;·&nbsp; Isti baza → izjednači eksponate. Ako baze nisu iste: logaritmira!</div>
    </div>
  </div>

  <!-- ICP 1 -->
  <div class="inline-cp" id="icp1">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — eksponencijalna</span>
      <span class="icp-score" id="icp1-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp1q1">
        <div class="icp-q-text">Skup vrijednosti f(x) = 3ˣ je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">ℝ</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">⟨0, +∞)</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">(0, +∞)</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">(1, +∞)</div>
        </div>
        <div class="icp-fb" id="icp1q1fb"></div>
      </div>
      <div class="icp-q" id="icp1q2">
        <div class="icp-q-text">f(x) = (<span class="frac"><span class="num">1</span><span class="den">3</span></span>)ˣ je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">rastuća</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">padajuća</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">konstantna</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">ni rastuća ni padajuća</div>
        </div>
        <div class="icp-fb" id="icp1q2fb"></div>
      </div>
      <div class="icp-q" id="icp1q3">
        <div class="icp-q-text">Rješenje jednadžbe 2ˣ = 32 je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">x = 4</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">x = 5</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">x = 16</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">x = 6</div>
        </div>
        <div class="icp-fb" id="icp1q3fb"></div>
      </div>
      <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na logaritme →</div>
      <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- ══ 02 LOGARITAMSKA FUNKCIJA ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · LOGARITAMSKA FUNKCIJA I PRAVILA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — logaritam kao "inverz eksponencijale"</div>
    <div class="box-int-txt">
      log_a(x) pita: "na koji eksponent treba podići a da se dobije x?"<br>
      log₂(8) = 3 jer 2³ = 8. log₁₀(1000) = 3 jer 10³ = 1000.<br><br>
      Logaritam je <em>inverz eksponencijalne</em> — to znači da im se grafovi preslikavaju refleksijom po y=x. Što eksponencijalna "radi" x-u, logaritam "poništava".<br><br>
      <strong>Ključni uvjet: argument logaritma mora biti STROGO pozitivan! log_a(x) ne postoji za x ≤ 0.</strong>
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">DEFINICIJA I PRAVILA LOGARITAMA</span>
    <span class="val">log_a(x) = y ↔ aʸ = x</span> <span class="cmt">— definicija</span><br>
    <span class="val">log_a(mn) = log_a(m) + log_a(n)</span> <span class="cmt">— množenje → zbrajanje</span><br>
    <span class="val">log_a(<span class="frac"><span class="num">m</span><span class="den">n</span></span>) = log_a(m) − log_a(n)</span> <span class="cmt">— dijeljenje → oduzimanje</span><br>
    <span class="val">log_a(mⁿ) = n · log_a(m)</span> <span class="cmt">— potencija izlazi ispred</span><br>
    <span class="val">log_a(a) = 1</span> · <span class="val">log_a(1) = 0</span> · <span class="val">a^(log_a(x)) = x</span><br>
    <span class="cmt">Promjena baze: log_a(x) = log_b(x) / log_b(a) — koristi za kalkulator</span>
  </div>

  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c">
      <div class="cmp-h i">Eksponencijalna aˣ</div>
      <div class="cmp-body">
        <div class="cmp-row">D = ℝ</div>
        <div class="cmp-row">Sv = (0, +∞)</div>
        <div class="cmp-row">Prolazi kroz (0, 1)</div>
        <div class="cmp-row">Asimptota: y = 0</div>
      </div>
    </div>
    <div class="cmp-c">
      <div class="cmp-h a">Logaritamska log_a(x)</div>
      <div class="cmp-body">
        <div class="cmp-row">D = (0, +∞)</div>
        <div class="cmp-row">Sv = ℝ</div>
        <div class="cmp-row">Prolazi kroz (1, 0)</div>
        <div class="cmp-row">Asimptota: x = 0</div>
      </div>
    </div>
  </div>

  <!-- LOG CALCULATOR -->
  <div class="disc-wrap">
    <div class="disc-head">
      <span class="disc-title">// Log Kalkulator — primijeni pravila</span>
    </div>
    <div class="disc-body">
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px">
        <button class="disc-btn on" id="log-b1" onclick="setLog(1,this)">log(mn)</button>
        <button class="disc-btn" id="log-b2" onclick="setLog(2,this)">log(<span class="frac"><span class="num">m</span><span class="den">n</span></span>)</button>
        <button class="disc-btn" id="log-b3" onclick="setLog(3,this)">log(mⁿ)</button>
        <button class="disc-btn" id="log-b4" onclick="setLog(4,this)">log_a(a)</button>
        <button class="disc-btn" id="log-b5" onclick="setLog(5,this)">promjena baze</button>
      </div>
      <div class="eq-s-result" id="log-rule" style="font-size:15px;font-weight:700;color:var(--cyan);margin-bottom:8px"></div>
      <div id="log-example" style="font-family:var(--mono);font-size:12px;color:var(--t2);line-height:2"></div>
      <div id="log-trap" style="font-family:var(--mono);font-size:11px;color:var(--red);margin-top:8px"></div>
    </div>
  </div>

<!-- LOG GRAF -->
<div class="disc-wrap" style="margin-top:10px">
  <div class="disc-head"><span class="disc-title">// Log/Exp Graf — vizualiziraj ovisnost baze</span></div>
  <div class="disc-body">
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">
      <button class="disc-btn on" id="lg-mode0" onclick="setLogMode(0,this)">aˣ (eksp.)</button>
      <button class="disc-btn" id="lg-mode1" onclick="setLogMode(1,this)">logₐ(x) (log.)</button>
      <button class="disc-btn" id="lg-mode2" onclick="setLogMode(2,this)">Oboje + inverz</button>
    </div>
    <div class="graph-wrap">
      <canvas class="graph-canvas" id="log-canvas" width="600" height="220"></canvas>
      <div class="graph-controls">
        <span class="graph-ctrl-lbl">baza a</span>
        <input type="range" class="graph-slider" id="log-sa" min="1.2" max="5" step="0.1" value="2" oninput="syncLogGraph()">
        <span class="graph-ctrl-val" id="log-va">a=2</span>
      </div>
      <div class="graph-info" id="log-info">f(x)=2ˣ · (0,1) fiksna točka · asimptota y=0 · D=ℝ, Cd=(0,+∞)</div>
    </div>
  </div>
</div>

  <div class="box-for">
    <span class="box-for-lbl">PRIRODNI LOGARITAM ln I BROJ e</span>
    <span class="val">e ≈ 2.71828...</span> <span class="cmt">— Eulerova konstanta, "prirodna" baza</span><br>
    <span class="val">ln(x) = log_e(x)</span> <span class="cmt">— prirodni logaritam, baza e</span><br>
    <span class="val">ln(e) = 1</span> · <span class="val">ln(1) = 0</span> · <span class="val">e^(ln x) = x</span><br>
    <span class="val">ln(eˣ) = x</span> <span class="cmt">— ključni identitet za derivacije i integrale</span><br>
    <span class="cmt">Zašto e? Jedina baza za koju je (aˣ)' = aˣ — derivacija jednaka funkciji!</span>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — logaritam kao "potencija u pitanju"</div>
    <div class="box-men-txt">
      Svaki put kad vidiš log_a(x), pita se: "2 na što = x? 10 na što = x?"<br>
      log₂(32) = ? → 2 na što je 32? → 2⁵=32 → log₂(32)=5.<br>
      <strong>Svako pravilo logaritama dolazi iz pravila potencija: log(mn)=log m+log n jer aᵐ·aⁿ=aᵐ⁺ⁿ.</strong>
    </div>
  </div>

  <!-- STEP REVEAL 2 -->
  <div class="sr" id="sr2">
    <div class="sr-head">
      <div class="sr-title">Logaritamska jednadžba — korak po korak</div>
      <div class="sr-task">Riješi: log₂(x) + log₂(x−2) = 3</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr2s1">
        <div class="sr-step-in"><div class="sr-num">1</div>
          <div class="sr-body"><div class="sr-stitle">Uvjet definiranosti PRVO</div>
            <div class="sr-txt">x &gt; 0 i x−2 &gt; 0 → <strong>x &gt; 2</strong></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s2">
        <div class="sr-step-in"><div class="sr-num">2</div>
          <div class="sr-body"><div class="sr-stitle">Primijeni pravilo: log + log = log(mn)</div>
            <div class="sr-txt">log₂(x(x−2)) = 3<br>x(x−2) = 2³ = 8</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s3">
        <div class="sr-step-in"><div class="sr-num">3</div>
          <div class="sr-body"><div class="sr-stitle">Riješi kvadratnu, provjeri uvjet</div>
            <div class="sr-txt">x²−2x−8=0 → (x−4)(x+2)=0 → x=4 ili x=−2<br>Uvjet x&gt;2: x=−2 ✗ → <strong>x=4</strong>
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Provjeri: log₂(4)+log₂(2)=?</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try2" type="text" placeholder="= ?" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try2','try2-fb','3','log1')">Provjeri</button>
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
    <div class="bug-head">🐛 prepoznaj grešku — logaritmi</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa log₂(4+4):</p>
      <div class="bug-task">log₂(4+4) = log₂(4) + log₂(4) = <span class="wrong">2+2 = 4</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno, log se raspodjeljuje po zbrajanju</div>
        <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška: log(a+b) ≠ log a + log b. log₂(8) = 3, ne 4!</div>
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Greška: log₂(4+4) = log₂(4)·log₂(4) = 4</div>
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Greška: rezultat je 8</div>
      </div>
      <div class="bug-expl" id="b2e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — logaritmi</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>log(mn) = log m + log n · log(<span class="frac"><span class="num">m</span><span class="den">n</span></span>) = log m − log n · log(mⁿ) = n·log m</li>
      <li class="b20-item"><div class="b20-dot"></div>log(m+n) ≠ log m + log n ← najtipičnija greška!</li>
      <li class="b20-item"><div class="b20-dot"></div>Uvjet: argument logaritma UVIJEK &gt; 0. Provjeri rješenja!</li>
    </ul>
  </div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — logaritamski izraz</div></div>
    <div class="combo-body">
      <div class="combo-task">Izračunaj: log₂(16) + log₂(8) − log₂(4)</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">log₂(16) = log₂(2⁴) = <strong>4</strong></div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">log₂(8) = log₂(2³) = <strong>3</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">log₂(4) = log₂(2²) = <strong>2</strong></div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Zbroji: 4 + 3 − 2 = <strong>5</strong> &nbsp;·&nbsp; Ili: log₂(16·8/4) = log₂(32) = 5</div></div>
      </div>
      <div class="combo-ans">log₂(16)+log₂(8)−log₂(4) = 5 &nbsp;·&nbsp; Pravila: log(a·b) = log a + log b, log(a/b) = log a − log b</div>
    </div>
  </div>

  <!-- ICP 2 -->
  <div class="inline-cp" id="icp2">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — logaritmi</span>
      <span class="icp-score" id="icp2-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp2q1">
        <div class="icp-q-text">log₂(8) + log₂(4) = ?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">7</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">5</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">12</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">6</div>
        </div>
        <div class="icp-fb" id="icp2q1fb"></div>
      </div>
      <div class="icp-q" id="icp2q2">
        <div class="icp-q-text">log₃(81) = ?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">3</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">4</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">27</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">9</div>
        </div>
        <div class="icp-fb" id="icp2q2fb"></div>
      </div>
      <div class="icp-q" id="icp2q3">
        <div class="icp-q-text">log_a(x) = 0 znači da je x:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">x = 0</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">x = 1</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">x = a</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">x = −1</div>
        </div>
        <div class="icp-fb" id="icp2q3fb"></div>
      </div>
      <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na jednadžbe →</div>
      <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- ══ 03 JEDNADŽBE ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · EKSPONENCIJALNE I LOGARITAMSKE JEDNADŽBE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — strategija rješavanja</div>
    <div class="box-int-txt">
      <strong>Eksponencijalna jednadžba</strong> (nepoznanica u eksponentu):<br>
      1. Pokušaj svesti na istu bazu (brže). 2. Ako ne ide, logaritmiraj obje strane.<br><br>
      <strong>Logaritamska jednadžba</strong> (nepoznanica pod logaritmom):<br>
      1. Svedite sve na jedan logaritam. 2. Pretvori u eksponencijalnu (zapiši definiciju).<br>
      3. <em>Uvijek provjeri uvjet definiranosti!</em> Rješenje koje ne zadovoljava uvjet se odbacuje.
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">METODE RJEŠAVANJA</span>
    <span class="val">aˣ = aⁿ</span> → <span class="val">x = n</span> <span class="cmt">— iste baze</span><br>
    <span class="val">aˣ = b</span> → <span class="val">x = log_a(b)</span> <span class="cmt">— logaritmiranje</span><br>
    <span class="val">aˣ = b</span> → <span class="val">x = ln(b)/ln(a)</span> <span class="cmt">— promjena baze (za kalkulator)</span><br>
    <span class="val">log_a(f(x)) = n</span> → <span class="val">f(x) = aⁿ</span> <span class="cmt">— pretvori u ekspon.</span><br>
    <span class="cmt">UVIJEK: provjeri da su argumenti log-a pozitivni i uvrsti rješenje!</span>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — trik s promjenom baze</div>
    <div class="box-men-txt">
      Ako se ne mogu svesti na istu bazu: logaritmiraj obje strane s ln ili log₁₀.<br>
      2ˣ = 5 → ln(2ˣ) = ln(5) → x·ln(2) = ln(5) → x = ln(5)/ln(2) ≈ 2.322.<br>
      <strong>Potencija "siđe" kao faktor — to je najmoćnija primjena pravila log(mⁿ) = n·log(m).</strong>
    </div>
  </div>

  <!-- STEP REVEAL 3 -->
  <div class="sr" id="sr3">
    <div class="sr-head">
      <div class="sr-title">Eksponencijalna jednadžba — logaritmiranjem</div>
      <div class="sr-task">Riješi: 3ˣ⁺¹ = 7</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr3s1">
        <div class="sr-step-in"><div class="sr-num">1</div>
          <div class="sr-body"><div class="sr-stitle">Ne mogu se svesti na istu bazu → logaritmiraj</div>
            <div class="sr-txt">ln(3ˣ⁺¹) = ln(7)<br>(x+1)·ln(3) = ln(7)</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s2">
        <div class="sr-step-in"><div class="sr-num">2</div>
          <div class="sr-body"><div class="sr-stitle">Izolirati x</div>
            <div class="sr-txt">x+1 = ln(7)/ln(3)<br>x = ln(7)/ln(3) − 1</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s3">
        <div class="sr-step-in"><div class="sr-num">3</div>
          <div class="sr-body"><div class="sr-stitle">Alternativni zapis</div>
            <div class="sr-txt">x = log₃(7) − 1 ≈ 1.771 − 1 = 0.771
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Koji je korak ključan za "spuštanje" eksponenta?</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try3" type="text" placeholder="pravilo: log(mⁿ)=..." autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try3','try3-fb','n·log(m)','log2')">Provjeri</button>
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
    <div class="bug-head">🐛 prepoznaj grešku — logaritamska jednadžba</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik rješava log₂(x−3) = 2:</p>
      <div class="bug-task">x − 3 = 2 → x = <span class="wrong">5</span> (zaboravio 2²)</div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno, x = 5</div>
        <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Greška: log₂(x−3)=2 → x−3=2²=4 → x=7, ne 5!</div>
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: x − 3 = 2² → x = 7, ali uvjet nije zadovoljen</div>
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Greška: treba logaritmirati obje strane</div>
      </div>
      <div class="bug-expl" id="b3e"></div>
    </div>
  </div>

  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — log(x·y) uvjet</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik primjenjuje log(xy)=log x+log y:</p>
      <div class="bug-task">log(−2·−3) = log(−2)+log(−3) = <span class="wrong">log 2+log 3</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">A) Točno, negativni predznaci se poništavaju u logaritmu</div>
        <div class="bug-opt" onclick="bug(this,'b4',true,'b4e')">B) Greška: log(−2) ne postoji! ✓ Direktno: log(6), jer −2·(−3)=6&gt;0</div>
        <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">C) Greška: log(xy)=log x+log y vrijedi za sve x,y</div>
        <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">D) Greška: rezultat je log(−6)</div>
      </div>
      <div class="bug-expl" id="b4e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — jednadžbe</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>Eksp. jednadžba: ista baza → jednaki eksponenti. Ili: logaritmiraj obje strane</li>
      <li class="b20-item"><div class="b20-dot"></div>Log. jednadžba: log_a(x)=b → x=aᵇ (definicija!)</li>
      <li class="b20-item"><div class="b20-dot"></div>UVIJEK provjeri uvjet (argumenti &gt; 0) i uvrsti rješenje!</li>
    </ul>
  </div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — logaritamska jednadžba</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješite: log₂(x) + log₂(x − 2) = 3</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Uvjet definiranosti: x &gt; 0 i x−2 &gt; 0 → <strong>x &gt; 2</strong></div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Primijeni pravilo zbroja: log₂(x(x−2)) = 3 → <strong>x(x−2) = 2³ = 8</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">x² − 2x − 8 = 0 → (x−4)(x+2) = 0 → x=4 ili x=−2</div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Provjera uvjeta: x=−2 ne zadovoljava x&gt;2 → <strong>x = 4</strong></div></div>
      </div>
      <div class="combo-ans">x = 4 &nbsp;·&nbsp; Uvijek provjeri uvjete! Negativna rješenja česta zamka na maturi.</div>
    </div>
  </div>

  <!-- ICP 3 -->
  <div class="inline-cp" id="icp3">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — jednadžbe</span>
      <span class="icp-score" id="icp3-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp3q1">
        <div class="icp-q-text">Rješenje 2ˣ = 64 je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">x = 5</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">x = 6</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">x = 32</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">x = 7</div>
        </div>
        <div class="icp-fb" id="icp3q1fb"></div>
      </div>
      <div class="icp-q" id="icp3q2">
        <div class="icp-q-text">Rješenje log₅(x) = 3 je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">x = 15</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">x = 8</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">x = 125</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">x = 243</div>
        </div>
        <div class="icp-fb" id="icp3q2fb"></div>
      </div>
      <div class="icp-q" id="icp3q3">
        <div class="icp-q-text">log₂(x) = −3 daje x = ?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">x = −8</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">x = −6</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">x = 1/8</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">nema rješenja</div>
        </div>
        <div class="icp-fb" id="icp3q3fb"></div>
      </div>
      <div class="icp-done" id="icp3-done">✓ Izvrsno! Nastavi na kombinirane zadatke →</div>
      <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- A RAZINA -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>

  <div class="combo">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — supstitucija u eksp. jednadžbi</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješi: 4ˣ − 3·2ˣ − 4 = 0</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">4ˣ = (2²)ˣ = (2ˣ)². Supstitucija: t = 2ˣ &gt; 0</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">t² − 3t − 4 = 0 → (t−4)(t+1) = 0 → t=4 ili t=−1</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">t = 2ˣ &gt; 0 → t=−1 odbacujemo. t=4 → 2ˣ=4 → x=2</div></div>
      </div>
      <div class="combo-ans">x = 2. Provjera: 4²−3·4−4=16−12−4=0 ✓</div>
    </div>
  </div>

  <div class="combo" style="margin-top:10px">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — logaritamska nejednadžba</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješi: log₂(x−1) &gt; 2</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Uvjet definiranosti: x−1 &gt; 0 → x &gt; 1</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">log₂(x−1) &gt; 2. Baza a=2 &gt; 1 → logaritam rastuć → nejednakost se ne obrće</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">x−1 &gt; 2² = 4 → x &gt; 5. Presjek s uvjetom: x &gt; 5</div></div>
      </div>
      <div class="combo-ans">x ∈ (5, +∞). Napomena: za 0&lt;a&lt;1 smjer nejednakosti bi se obrnuo!</div>
    </div>
  </div>

  <div class="combo" style="margin-top:10px">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — eksponencijalna i logaritamska zajedno</div></div>
    <div class="combo-body">
      <div class="combo-task">Dokaži: log_a(aˣ) = x za svaki x ∈ ℝ i a &gt; 0, a ≠ 1</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Koristimo pravilo: log_a(mⁿ) = n·log_a(m)</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">log_a(aˣ) = x·log_a(a)</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">log_a(a) = 1 (jer a¹ = a) → log_a(aˣ) = x·1 = x ✓</div></div>
      </div>
      <div class="combo-ans">log_a(aˣ) = x — logaritam i eksponencijalna su inverzi</div>
    </div>
  </div>

  <div class="combo" style="margin-top:10px">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A4 — sustav s eksponencijalnim</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješi sustav: 2ˣ · 3ʸ = 72 i 2ˣ/3ʸ = 8/9</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Supstitucija: u=2ˣ, v=3ʸ. Sustav: u·v=72 i <span class="frac"><span class="num">u</span><span class="den">v</span></span>=8/9</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Pomnoži: u²=72·(<span class="frac"><span class="num">8</span><span class="den">9</span></span>)=64 → u=8 (u&gt;0). v=72/8=9</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">2ˣ=8=2³ → x=3. 3ʸ=9=3² → y=2</div></div>
      </div>
      <div class="combo-ans">x=3, y=2. Provjera: 8·9=72 ✓ i <span class="frac"><span class="num">8</span><span class="den">9</span></span>=8/9 ✓</div>
    </div>
  </div>

  <!-- C-TIP ZADACI -->
  <div class="sec-hdr" style="margin-top:28px"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--rose);border-color:var(--bd-r);background:var(--dim-r)">C-TIP · TEŽI KOMBINIRANI ZADACI</h2><span class="sec-time">~15 min</span><div class="sec-line"></div></div>
  <div class="box-warn" style="margin-bottom:16px"><span class="bw-ico">⚠️</span><div class="bw-body"><div class="bw-title">C-tip = rijetko na maturi, ali moguće</div><div class="bw-txt">Ovi zadaci pojavljuju se u 10–15% ispita. Zahtijevaju kombinaciju više tehnika. Preskoci ako nisi siguran u A-tip.</div></div></div>
  <div class="combo" style="margin-top:10px">
    <div class="combo-head"><div class="combo-badge">C-TIP · C1 — log i expo u istoj jednadžbi</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješi: log₂(2ˣ − 3) = 3</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Primjeni definiciju logaritma: 2ˣ − 3 = 2³ = 8</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">2ˣ = 11. Logaritmiraj: x·log2 = log11</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">x = log11/log2 = log₂11 ≈ 3,459</div></div>
      </div>
      <div class="combo-ans">x = log₂11 ≈ 3,46. Provjera: log₂(2^(log₂11) − 3) = log₂(11−3) = log₂8 = 3 ✓</div>
    </div>
  </div>
  <div class="combo" style="margin-top:10px">
    <div class="combo-head"><div class="combo-badge">C-TIP · C2 — eksponencijalna nejednadžba s promjenom baze</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješi: 4ˣ &lt; 2ˣ⁺³</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Prepiši na istu bazu: 4ˣ = (2²)ˣ = 2²ˣ. Dakle: 2²ˣ &lt; 2ˣ⁺³</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Baza 2 &gt; 1 → rastući, smjer se NE obrće: 2x &lt; x + 3</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">x &lt; 3</div></div>
      </div>
      <div class="combo-ans">x ∈ (−∞, 3). Zamka: tko zaboravi prebaciti na istu bazu, krivo logaritmira.</div>
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
      <div class="drill-q" id="dr-q">log₂(8) = 3</div>
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

  <!-- NCVVO -->
  <div class="ncvvo-real">
    <div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div>
    <div class="ncvvo-real-body">
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Eksp. jednadžba · ~40% netočnih<span class="ncvvo-live-stat neutral" id="nlive-exp">eksp. jed.</span></div>
        <div class="ncvvo-real-q">Riješi: 9ˣ − 4·3ˣ + 3 = 0</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>ne prepoznaju supstituciju t=3ˣ i pokušavaju logaritmirati direktno</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">9ˣ=(3ˣ)². t=3ˣ: t²−4t+3=0 → (t−1)(t−3)=0 → t=1 ili t=3<br>3ˣ=1=3⁰→x=0. 3ˣ=3→x=1. <strong>x=0 ili x=1</strong></div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Log. jednadžba · ~55% netočnih<span class="ncvvo-live-stat neutral" id="nlive-log">log. jed.</span></div>
        <div class="ncvvo-real-q">Riješi: log₃(x+2) + log₃(x−4) = 3</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>ne provjeravaju uvjet definiranosti i prihvaćaju negativno rješenje</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">Uvjet: x&gt;4. log₃((x+2)(x−4))=3 → (x+2)(x−4)=27<br>x²−2x−8=27 → x²−2x−35=0 → x=7 ili x=−5<br>Uvjet x&gt;4: x=−5✗ → <strong>x=7</strong></div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Log. pravila · ~45% netočnih<span class="ncvvo-live-stat neutral" id="nlive-pr">pravila</span></div>
        <div class="ncvvo-real-q">Pojednostavni: log₂(8√2)</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>ne prepoznaju da je √2 = 2^(<span class="frac"><span class="num">1</span><span class="den">2</span></span>) i ne mogu primijeniti pravilo</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">8√2 = 2³·2^(<span class="frac"><span class="num">1</span><span class="den">2</span></span>) = 2^(<span class="frac"><span class="num">7</span><span class="den">2</span></span>)<br>log₂(2^(<span class="frac"><span class="num">7</span><span class="den">2</span></span>)) = <strong>7/2</strong></div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Eksp. nejednadžba · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-nj">eksp. nj.</span></div>
        <div class="ncvvo-real-q">Riješi: (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)ˣ &lt; 8</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>ne obraćaju pažnju na to da je baza &lt;1 pa se obrće smjer pri logaritmiranju</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)ˣ = 2⁻ˣ &lt; 8 = 2³ → −x &lt; 3 → x &gt; −3<br>Ili: baza <span class="frac"><span class="num">1</span><span class="den">2</span></span>&lt;1 → padajuća → log obrće: x &gt; log_(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)(8) = −3<br><strong>x ∈ (−3, +∞)</strong></div>
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
      <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>aˣ &gt; 0 uvijek · a&gt;1 raste · 0&lt;a&lt;1 pada · f(0)=1</li>
      <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>log_a(x)=y ↔ aʸ=x. D=(0,+∞), Sv=ℝ</li>
      <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>log(mn)=log m+log n · log(mⁿ)=n·log m · log(m+n) ≠ log m+log n!</li>
      <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>Eksp. jednadžba: svedi na istu bazu ili logaritmiraj</li>
      <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Log. jednadžba: pretvori u eksp., provjeri uvjet definiranosti!</li>
    </ul>
    <div class="cp-footer">
      <span id="cp-txt">0 / 5 potvrđeno</span>
      <span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za Poglavlje 09!</span>
    </div>
  </div>

  <div class="matura-block">
    <div class="matura-hd">⭐ matura fokus — automatski refleks</div>
    <ul class="matura-list">
      <li class="mi"><div class="mi-dot"></div><span><b>aˣ &gt; 0 uvijek.</b> Jednadžba aˣ=negativan → nema rješenja!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>log_a(x)=b → x=aᵇ.</b> Definicija — nauči je napamet!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>log(m+n) ≠ log m + log n.</b> Najčešća greška na maturi!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Supstitucija t=aˣ</b> za jednadžbe oblika a²ˣ + c·aˣ + d = 0.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Uvijek provjeri uvjet</b> (argument log &gt; 0) i uvrsti rješenje!</span></li>
    </ul>
  </div>

  <div class="connect-next">
    <div class="cn-head"><span class="cn-icon">🔗</span>
      <div><div class="cn-title">Gdje ćeš ovo koristiti?</div>
        <div class="cn-sub">P08 je temelj za 4 ključna poglavlja</div>
      </div>
    </div>
    <div class="cn-grid">
      <div class="cn-item">
        <div class="cn-item-head"><span class="cn-badge b">P09</span><span class="cn-item-title">Trigonometrija</span></div>
        <div class="cn-item-desc">Eksponencijalni i logaritamski identiteti pojavljuju se u složenim trig. jednadžbama.</div>
        <div class="cn-item-arrow">→ jednadžbe s log i eksp.</div>
      </div>
      <div class="cn-item">
        <div class="cn-item-head"><span class="cn-badge c">P17</span><span class="cn-item-title">Derivacije</span></div>
        <div class="cn-item-desc">(eˣ)' = eˣ i (ln x)' = <span class="frac"><span class="num">1</span><span class="den">x</span></span> — najvažnije derivacije na maturi, direktno iz P08.</div>
        <div class="cn-item-arrow">→ derivacija eˣ i ln(x)</div>
      </div>
      <div class="cn-item">
        <div class="cn-item-head"><span class="cn-badge i">P18</span><span class="cn-item-title">Integrali</span></div>
        <div class="cn-item-desc">∫eˣdx = eˣ + C i ∫(<span class="frac"><span class="num">1</span><span class="den">x</span></span>)dx = ln|x| + C — standardni integrali iz P08.</div>
        <div class="cn-item-arrow">→ integrali eˣ i 1/x</div>
      </div>
      <div class="cn-item">
        <div class="cn-item-head"><span class="cn-badge a">P14</span><span class="cn-item-title">Nizovi</span></div>
        <div class="cn-item-desc">Geometrijski niz i kamatni račun — eksponencijalni rast u primjeni.</div>
        <div class="cn-item-arrow">→ eksponencijalni rast</div>
      </div>
    </div>
  </div>


<div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
<div class="con" style="margin-bottom:20px">
  <div class="cr"><div class="ck b">Pravila logaritama</div><div class="cv">log(xy) = log(x)+log(y), &nbsp; log(x/y) = log(x)&minus;log(y), &nbsp; log(x<sup>k</sup>) = k&cdot;log(x)</div></div>
  <div class="cr"><div class="ck c">Promjena baze</div><div class="cv">log<sub>a</sub>(b) = log(b)/log(a) = ln(b)/ln(a). Uvijek je moguće!</div></div>
  <div class="cr"><div class="ck i">Jednadžbe</div><div class="cv">a<sup>x</sup>=b &rarr; x=log<sub>a</sub>(b). &nbsp; log<sub>a</sub>(x)=b &rarr; x=a<sup>b</sup>. Provjeri: x mora biti u D (tj. x>0 za log).</div></div>
  <div class="cr"><div class="ck a">Eksponencijalne jednadžbe</div><div class="cv">Složene: uvedi supstituciju t=a<sup>x</sup> pa rješavaj kvadratnu za t. Uvjet: t>0.</div></div>
  <div class="cr"><div class="ck r">Zamka</div><div class="cv">log(a&middot;b) &ne; log(a)&middot;log(b)! &nbsp; log<sub>a</sub>(x) definiran samo za x>0 i a>0, a&ne;1. Provjeri domenu!</div></div>
</div>

<div class="slbl" style="margin-top:28px">// ncvvo anti-primjeri — najčešće greške u log i eksp. zadacima</div>
<div class="anti-wrap">
  <div class="anti-hdr">❌ 3 greške koje najčešće koštaju bodova</div>
  <div class="anti-item">
    <div><div class="anti-badge ng">GREŠKA 01 · log jednadžba</div></div>
    <div class="anti-wrong">log₃(2x−1) + log₃(x) = 2 &nbsp;→&nbsp; Učenik piše: (2x−1)+(x)=2 i dobiva x=1.</div>
    <div class="anti-why">⚠ Zbroj logaritama ≠ zbroj argumenata. Ne postoji pravilo log(a)+log(b)=a+b.</div>
    <div><div class="anti-badge ok">TOČNO</div></div>
    <div class="anti-right">log₃((2x−1)·x) = 2 → x(2x−1) = 9 → 2x²−x−9=0. Uvjet: x>1/2. x=(1+√73)/4 ≈ 2,39.</div>
  </div>
  <div class="anti-item">
    <div><div class="anti-badge ng">GREŠKA 02 · eksponencijalna nejednadžba</div></div>
    <div class="anti-wrong">(1/2)ˣ &lt; 4 → učenik logaritmira i piše: x &lt; log₁/₂(4) = −2 → ne obrće smjer.</div>
    <div class="anti-why">⚠ Kad je baza &lt; 1, logaritamska funkcija je PADAJUĆA → smjer nejednadžbe se obrće!</div>
    <div><div class="anti-badge ok">TOČNO</div></div>
    <div class="anti-right">(1/2)ˣ &lt; 4 = (1/2)⁻² → budući da je 1/2 &lt; 1, vrijedi: x &gt; −2. Rješenje: x ∈ (−2, +∞).</div>
  </div>
  <div class="anti-item">
    <div><div class="anti-badge ng">GREŠKA 03 · eksp. jednadžba sa supstitucijom</div></div>
    <div class="anti-wrong">9ˣ − 3·3ˣ − 4 = 0 → učenik ne prepoznaje supstituciju i pokušava logaritmirati direktno.</div>
    <div class="anti-why">⚠ Signal: kad se pojavi kvadrat baze (9ˣ=(3ˣ)²), zamjena t=3ˣ svodi na kvadratnu jednadžbu.</div>
    <div><div class="anti-badge ok">TOČNO</div></div>
    <div class="anti-right">t=3ˣ: t²−3t−4=0 → (t−4)(t+1)=0 → t=4 (t&gt;0). 3ˣ=4 → x=log₃4.</div>
  </div>
</div>
  <div class="nav-row">
    <span class="nb" onclick="sw(0)">← Pregled</span>
    <span class="nb primary" onclick="sw(2)">Vježbaj →</span>
  </div>
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
      <li class="mi"><div class="mi-dot"></div><span><b>aˣ &gt; 0 uvijek.</b> D=ℝ, Sv=(0,+∞), f(0)=1.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>log_a(x)=b ↔ x=aᵇ.</b> D=(0,+∞), Sv=ℝ.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>log(mn)=log m+log n · log(mⁿ)=n·log m.</b></span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>log(m+n) ≠ log m+log n</b> — najtipičnija greška!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Provjeri uvjet</b> (argument &gt; 0) i uvrsti rješenje!</span></li>
    </ul>
  </div>
  <div class="slbl" style="margin-top:28px">// bonus — popuni prazninu</div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · vrijednost logaritma</div><div class="fitb-sent">log₂(32) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="= ?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','5','log3')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · eksponencijalna jednadžba</div><div class="fitb-sent">3ˣ = 81 → x = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="x = ?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','4','exp2')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · logaritamska jednadžba</div><div class="fitb-sent">log₄(x) = 2 → x = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="x = ?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','16','log4')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · pravila logaritama</div><div class="fitb-sent">log₂(16) − log₂(4) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="= ?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','2','log5')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>
  <div class="cmp">
    <div class="cmp-c">
      <div class="cmp-h b">Ista baza</div>
      <div class="cmp-body">
        <strong>Kad vidiš</strong> aˣ = aʸ<br>
        → izjednači eksponente: <strong>x = y</strong><br>
        Npr. 2²ˣ⁺¹ = 2⁵ → 2x+1 = 5 → x = 2
      </div>
    </div>
    <div class="cmp-c">
      <div class="cmp-h c">Različita baza</div>
      <div class="cmp-body">
        <strong>Kad vidiš</strong> aˣ = b (a ≠ b)<br>
        → logaritmiraj obje strane:<br>
        <strong>x = log<sub>a</sub>b = ln b / ln a</strong><br>
        Npr. 3ˣ = 7 → x = ln 7 / ln 3 ≈ 1.77
      </div>
    </div>
  </div>
  <div class="box-warn">
    <span class="bw-ico">⚡</span>
    <div class="bw-body">
      <div class="bw-title">MATURA LOGIKA — eksponencijalne jednadžbe</div>
      <div class="bw-txt">
        Uvijek pitaj: <em>„Mogu li svesti obje strane na istu bazu?"</em><br>
        Da → izjednači eksponente. Ne → logaritmiraj.
      </div>
    </div>
  </div>
  <div class="nav-row">
    <span class="nb" onclick="sw(1)">← Uči</span>
    <button onclick="navigateChapter('p09')" class="nb primary">Sljedeće poglavlje →</button>
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
var tabProgress=[41,50,88];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i);});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i);});
  var p=tabProgress[i];
  document.getElementById('prog-bar').style.width=p+'%';
  document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p08_tab',i);}catch(e){}
}

/* ── EXP EXPLORER ── */
function analyzeExp(){
  var a=parseFloat(document.getElementById('exp-a').value);
  var r=document.getElementById('exp-result');
  if(isNaN(a)||a<=0||a===1){r.innerHTML='<span style="color:var(--red)">Baza mora biti a &gt; 0 i a ≠ 1.</span>';return;}
  var fmt=function(x){return Math.round(x*1000)/1000;};
  var smjer=a>1?'↗ rastuća (a&gt;1)':'↘ padajuća (0&lt;a&lt;1)';
  var asim=a>1?'lijevo (x→−∞)':'desno (x→+∞)';
  r.innerHTML='f(x) = <strong>'+fmt(a)+'ˣ</strong> — '+smjer+'<br>'+
    'f(0)=1 · f(1)='+fmt(a)+' · f(−1)='+fmt(1/a)+'<br>'+
    'Asimptota y=0 '+asim+'<br>'+
    'D=ℝ · Sv=(0,+∞)';
}

/* ── LOG CALCULATOR ── */
var logData={
  1:{rule:'log_a(mn) = log_a(m) + log_a(n)',example:'log₂(16·4) = log₂(16) + log₂(4) = 4 + 2 = 6\\nProof: 16·4 = 64 = 2⁶ ✓',trap:'⚠ log_a(m+n) ≠ log_a(m) + log_a(n) ← česta greška!'},
  2:{rule:'log_a(m/n) = log_a(m) − log_a(n)',example:'log₂(32/4) = log₂(32) − log₂(4) = 5 − 2 = 3\\nProof: 32/4 = 8 = 2³ ✓',trap:'⚠ log_a(m−n) ≠ log_a(m) − log_a(n)'},
  3:{rule:'log_a(mⁿ) = n · log_a(m)',example:'log₂(8³) = 3·log₂(8) = 3·3 = 9\\nProof: 8³ = 512 = 2⁹ ✓\\nKoristimo za eksp. jednadžbe: 2ˣ=5 → x·ln2=ln5',trap:'⚠ Ovo je ključno: eksponent "siđe" kao faktor!'},
  4:{rule:'log_a(a) = 1  i  log_a(1) = 0',example:'log₃(3) = 1 (jer 3¹=3)\\nlog₃(1) = 0 (jer 3⁰=1)\\na^(log_a(x)) = x (inverz)',trap:'⚠ log_a(0) nije definirano! Argument mora biti >0.'},
  5:{rule:'log_a(x) = log_b(x) / log_b(a)',example:'log₂(7) = ln(7)/ln(2) ≈ 1.946/0.693 ≈ 2.807\\nKorisno za kalkulator: log_a(x) = log(x)/log(a)',trap:'⚠ Baza se mijenja u nazivniku, ne u brojevniku!'}
};
function setLog(k,btn){
  document.querySelectorAll('[id^="log-b"]').forEach(function(b){b.classList.remove('on');});
  btn.classList.add('on');
  var d=logData[k];
  document.getElementById('log-rule').textContent=d.rule;
  document.getElementById('log-example').innerHTML=d.example.replace(/\\n/g,'<br>');
  document.getElementById('log-trap').textContent=d.trap;
}
setLog(1,document.getElementById('log-b1'));

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
  if(prog)prog.textContent='0 / '+tot;
  document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});
  document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false;});
  document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb';});
}

/* ── TRY-IT ── */
var tryExp={
  exp1:'9ˣ=27 → (3²)ˣ=3³ → 2x=3 → x=3/2. Provjera: 9^(3/2)=(√9)³=3³=27 ✓',
  log1:'log₂(4)+log₂(2)=log₂(4·2)=log₂(8)=3 ✓. Ili: 2+1=3 ✓',
  log2:'Pravilo log(mⁿ)=n·log(m). Potencija "siđe" kao faktor — ključ za eksp. jednadžbe!'
};
function tryIt(iid,fid,ans,key){
  var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();
  if(!v)return;
  inp.disabled=true;
  var btn=inp.parentElement.querySelector('.sr-try-btn');if(btn)btn.disabled=true;
  var norm=function(s){return s.replace(/\\s/g,'').toLowerCase().replace(/·/g,'*');};
  var ok=norm(v)===norm(ans);
  inp.classList.add(ok?'ok':'fail');
  fb.className='sr-try-fb show '+(ok?'ok':'fail');
  fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];
}

/* ── RAPID FIRE DRILL ── */
var drData=[
  {q:'log₂(8) = 3',ans:true,tag:'logaritam',exp:'Točno! 2³=8 → log₂(8)=3 ✓'},
  {q:'log₂(4+4) = log₂(4) + log₂(4)',ans:false,tag:'pravila',exp:'Netočno! log(a+b) ≠ log a + log b. log₂(8)=3, ali log₂(4)+log₂(4)=2+2=4 ≠ 3!'},
  {q:'Sv(2ˣ) = ℝ',ans:false,tag:'eksp.',exp:'Netočno! Sv(2ˣ) = (0,+∞). Eksponencijalna je uvijek pozitivna — nikad ne dotiče x-os!'},
  {q:'log_a(a²) = 2',ans:true,tag:'logaritam',exp:'Točno! log_a(aⁿ)=n → log_a(a²)=2 ✓'},
  {q:'Jednadžba 3ˣ = −9 nema rješenja',ans:true,tag:'eksp.',exp:'Točno! 3ˣ>0 uvijek → 3ˣ=−9 je nemoguće u ℝ ✓'},
  {q:'log₂(16/2) = log₂(16) − log₂(2) = 3',ans:true,tag:'pravila',exp:'Točno! log₂(16/2)=log₂(8)=3. Ili: log₂(16)−log₂(2)=4−1=3 ✓'},
  {q:'D(log₂(x)) = ℝ',ans:false,tag:'logaritam',exp:'Netočno! D(log₂(x)) = (0,+∞). Argument mora biti STROGO pozitivan!'},
  {q:'2ˣ = 2⁵ → x = 5',ans:true,tag:'eksp.',exp:'Točno! Iste baze → jednaki eksponenti: 2ˣ=2⁵ → x=5 ✓'},
  {q:'log₃(x) = −2 → x = −9',ans:false,tag:'logaritam',exp:'Netočno! log₃(x)=−2 → x=3⁻²=1/9. Logaritam daje negativni eksponent, ne negativni x!'},
  {q:'ln(eˣ) = x',ans:true,tag:'prirodni log',exp:'Točno! ln=log_e i eˣ su inverzi → ln(eˣ)=x ✓'},
  {q:'log₂(8·4) = log₂(8) · log₂(4)',ans:false,tag:'pravila',exp:'Netočno! log(mn)=log m + log n (zbrajanje, ne množenje!). log₂(32)=5, ali 3·2=6≠5.'},
  {q:'(1/2)ˣ pada za veće x',ans:true,tag:'eksp.',exp:'Točno! Baza 1/2 < 1 → padajuća eksponencijalna ✓'}
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
  b1:'✓ Točno! aˣ>0 za svaki x i svaki a>0. Jednadžba aˣ=negativan broj NEMA rješenja u ℝ!',
  b2:'✓ Točno! log(a+b) ≠ log a + log b. Pravilo množenja vrijedi: log(ab)=log a+log b. log₂(8)=3.',
  b3:'✓ Točno! log_a(x)=b → x=aᵇ. log₂(x−3)=2 → x−3=2²=4 → x=7. Uvjet: x−3>0 → x>3 ✓'
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
    q1:{ok:'✓ Točno! aˣ>0 uvijek → Sv=(0,+∞). Graf nikad ne dotiče niti ne prelazi x-os.',ng:'✗ Netočno. aˣ je uvijek STROGO pozitivan → Sv=(0,+∞). Rub 0 nije uključen!'},
    q2:{ok:'✓ Točno! 0<1/3<1 → padajuća eksponencijalna',ng:'✗ Netočno. Baza a=1/3<1 → padajuća. Za a>1 bila bi rastuća.'},
    q3:{ok:'✓ Točno! 2⁵=32 → x=5',ng:'✗ Netočno. 2ˣ=32=2⁵ → iste baze, jednaki eksponenti: x=5'}
  },
  icp2:{
    q1:{ok:'✓ Točno! log₂(8)+log₂(4)=log₂(32)=5. Ili: 3+2=5.',ng:'✗ Netočno. log₂(8)=3, log₂(4)=2. Zbroj=5. Ili: log₂(8·4)=log₂(32)=5.'},
    q2:{ok:'✓ Točno! 3⁴=81 → log₃(81)=4',ng:'✗ Netočno. log₃(81)=? → 3 na što je 81? 3⁴=81 → log₃(81)=4'},
    q3:{ok:'✓ Točno! log_a(x)=0 → x=a⁰=1. Svaki logaritam od 1 je 0!',ng:'✗ Netočno. log_a(x)=0 → x=a⁰=1. To vrijedi za svaku bazu a!'}
  },
  icp3:{
    q1:{ok:'✓ Točno! 2⁶=64 → x=6',ng:'✗ Netočno. 2ˣ=64=2⁶ → x=6'},
    q2:{ok:'✓ Točno! log₅(x)=3 → x=5³=125',ng:'✗ Netočno. log_a(x)=b → x=aᵇ. log₅(x)=3 → x=5³=125'},
    q3:{ok:'✓ Točno! log₂(x)=−3 → x=2⁻³=1/8. Negativni eksponent = reciproka vrijednost!',ng:'✗ Netočno. log₂(x)=−3 → x=2⁻³=1/8. Logaritam može biti negativan, ali x mora biti >0!'}
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
var topicErrors={eksp:0,log:0,pravila:0,jednadzbe:0};
var topicHints={
  eksp:'Greške s eksponencijalnom! aˣ>0 uvijek. Ista baza → jednaki eksponenti.',
  log:'Greške s logaritmom! log_a(x)=b ↔ x=aᵇ. D=(0,+∞).',
  pravila:'Greške s pravilima! log(mn)=log m+log n. log(m+n) ≠ log m+log n!',
  jednadzbe:'Greške s jednadžbama! Provjeri uvjet i uvrsti rješenje!'
};
var qTopics={q1:'eksp',q2:'eksp',q3:'log',q4:'log',q5:'pravila',q6:'pravila',q7:'jednadzbe',q8:'jednadzbe',q9:'eksp',q10:'pravila',q11:'log',q12:'jednadzbe'};
var ncvvoTopicMap={'nlive-exp':['q1','q2','q9'],'nlive-log':['q3','q4','q11'],'nlive-pr':['q5','q6','q10'],'nlive-nj':['q7','q8','q12']};
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
  tabProgress[1]=Math.min(41+drillPts+icpPts+cpPts,50);
  tabProgress[2]=Math.min(41+drillPts+icpPts+cpPts+quizPts,100);
  var curTab=document.querySelector('.tab.on');
  var curIdx=curTab?Array.from(document.querySelectorAll('.tab')).indexOf(curTab):0;
  var p=tabProgress[curIdx];
  document.getElementById('prog-bar').style.width=p+'%';
  document.getElementById('prog-pct').textContent=p+'%';
  try{localStorage.setItem('maturiraj_p08_prog',p);}catch(e){}
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
  {id:'q1',topic:'eksp',meta:'svojstva eksponencijalne',
   text:'Koji od sljedećih iskaza o f(x)=2ˣ je NETOČAN?',
   opts:[{t:'D(f) = ℝ',ok:false},{t:'Sv(f) = (0,+∞)',ok:false},{t:'f je rastuća',ok:false},{t:'f(0) = 0',ok:true}],
   c:'✓ Točno. f(0) = 2⁰ = 1, ne 0! Sve eksponencijalne prolaze kroz (0,1).',
   w:'✗ Netočno. Provjeri: D=ℝ ✓, Sv=(0,+∞) ✓, rastuća (a=2>1) ✓, ali f(0)=1 ne 0!',
   proof:['2⁰ = 1 (svaki broj na 0 = 1)','f(0) = 2⁰ = 1 ≠ 0','f(0)=0 je NETOČNO']},
  {id:'q2',topic:'eksp',meta:'eksponencijalna jednadžba',
   text:'Rješenje jednadžbe 8ˣ = 2 je:',
   opts:[{t:'x = 4',ok:false},{t:'x = 1/3',ok:true},{t:'x = 1/4',ok:false},{t:'x = 3',ok:false}],
   c:'✓ Točno. 8ˣ=(2³)ˣ=2³ˣ=2¹ → 3x=1 → x=1/3.',
   w:'✗ Netočno. 8=2³ → (2³)ˣ=2³ˣ=2¹ → 3x=1 → x=1/3.',
   proof:['8 = 2³','(2³)ˣ = 2³ˣ = 2¹','3x=1 → x=1/3']},
  {id:'q3',topic:'log',meta:'definicija logaritma',
   text:'log₄(64) = ?',
   opts:[{t:'2',ok:false},{t:'16',ok:false},{t:'3',ok:true},{t:'8',ok:false}],
   c:'✓ Točno. 4³=64 → log₄(64)=3.',
   w:'✗ Netočno. log₄(64)=? → 4 na što je 64? 4¹=4, 4²=16, 4³=64 → log₄(64)=3.',
   proof:['4¹=4, 4²=16, 4³=64','log₄(64)=3','Provjera: 4³=64 ✓']},
  {id:'q4',topic:'log',meta:'domena logaritma',
   text:'Domena f(x) = log₂(3x−6) je:',
   opts:[{t:'x > 6',ok:false},{t:'x > 2',ok:true},{t:'x ≥ 2',ok:false},{t:'ℝ',ok:false}],
   c:'✓ Točno. 3x−6 > 0 → 3x > 6 → x > 2. Strogi uvjet!',
   w:'✗ Netočno. Argument mora biti >0: 3x−6>0 → x>2 (strogo, ne ≥).',
   proof:['Uvjet: 3x−6 > 0','3x > 6','x > 2 → D=(2,+∞)']},
  {id:'q5',topic:'pravila',meta:'pravilo množenja',
   text:'log₃(27) + log₃(3) = ?',
   opts:[{t:'log₃(30)',ok:false},{t:'4',ok:true},{t:'9',ok:false},{t:'log₃(9)',ok:false}],
   c:'✓ Točno. 3+1=4. Ili: log₃(27·3)=log₃(81)=4.',
   w:'✗ Netočno. log₃(27)=3, log₃(3)=1. Zbroj=4. Ili: log₃(81)=4 (81=3⁴).',
   proof:['log₃(27)=3, log₃(3)=1','3+1=4','Ili: log₃(27·3)=log₃(81)=4']},
  {id:'q6',topic:'pravila',meta:'pravilo potencije',
   text:'log₂(64^(1/2)) = ?',
   opts:[{t:'32',ok:false},{t:'3',ok:true},{t:'1/2',ok:false},{t:'6',ok:false}],
   c:'✓ Točno. log₂(64^(1/2)) = (1/2)·log₂(64) = (1/2)·6 = 3.',
   w:'✗ Netočno. Pravilo: log(mⁿ)=n·log(m). (1/2)·log₂(64)=(1/2)·6=3.',
   proof:['log₂(64^(1/2)) = (1/2)·log₂(64)','log₂(64) = 6 (jer 2⁶=64)','(1/2)·6 = 3']},
  {id:'q7',topic:'jednadzbe',meta:'logaritamska jednadžba',
   text:'Rješenje log₃(2x+1) = 2 je:',
   opts:[{t:'x = 4',ok:true},{t:'x = 5',ok:false},{t:'x = 3',ok:false},{t:'x = 9',ok:false}],
   c:'✓ Točno. 2x+1=3²=9 → 2x=8 → x=4. Uvjet: 2·4+1=9>0 ✓',
   w:'✗ Netočno. log₃(2x+1)=2 → 2x+1=3²=9 → x=4.',
   proof:['log₃(2x+1)=2 → 2x+1=3²=9','2x=8 → x=4','Uvjet: 9>0 ✓']},
  {id:'q8',topic:'jednadzbe',meta:'eksp. jednadžba logaritmiranjem',
   text:'Jednadžba 5ˣ = 12 daje x = ?',
   opts:[{t:'log₁₀(5)/log₁₀(12)',ok:false},{t:'log₅(12)',ok:true},{t:'12/5',ok:false},{t:'log₁₂(5)',ok:false}],
   c:'✓ Točno. 5ˣ=12 → x=log₅(12). Ili: x=ln(12)/ln(5).',
   w:'✗ Netočno. aˣ=b → x=log_a(b). 5ˣ=12 → x=log₅(12).',
   proof:['5ˣ=12 → log₅(5ˣ)=log₅(12)','x=log₅(12)','Ili: x=ln(12)/ln(5) ≈ 1.544']},
  {id:'q9',topic:'eksp',meta:'usporedba eksponencijalnih',
   text:'Koja od ovih funkcija je padajuća?',
   opts:[{t:'f(x) = 3ˣ',ok:false},{t:'f(x) = eˣ',ok:false},{t:'f(x) = (2/3)ˣ',ok:true},{t:'f(x) = 10ˣ',ok:false}],
   c:'✓ Točno. Baza 2/3 < 1 → padajuća eksponencijalna.',
   w:'✗ Netočno. Padajuća: 0<a<1. Samo (2/3)ˣ ima bazu <1.',
   proof:['a=2/3, 0<2/3<1','Baza<1 → padajuća','3ˣ, eˣ, 10ˣ imaju bazu>1 → rastuće']},
  {id:'q10',topic:'pravila',meta:'A razina · promjena baze',
   text:'log₄(8) = ? (koristiti bazu 2)',
   opts:[{t:'1',ok:false},{t:'3/2',ok:true},{t:'2',ok:false},{t:'2/3',ok:false}],
   c:'✓ Točno. log₄(8) = log₂(8)/log₂(4) = 3/2.',
   w:'✗ Netočno. Promjena baze: log₄(8)=log₂(8)/log₂(4)=3/2.',
   proof:['log₄(8) = log₂(8)/log₂(4)','= 3/2','Provjera: 4^(3/2)=(√4)³=8 ✓']},
  {id:'q11',topic:'log',meta:'A razina · logaritamska nejednadžba',
   text:'Rješenje log₂(x) > 3 je:',
   opts:[{t:'x > 6',ok:false},{t:'x > 8',ok:true},{t:'x > 3',ok:false},{t:'0<x<8',ok:false}],
   c:'✓ Točno. Baza 2>1 → log rastuć → nejednakost se ne obrće. x>2³=8.',
   w:'✗ Netočno. a=2>1 → log₂ rastuć → log₂(x)>3 → x>2³=8.',
   proof:['a=2>1 → log₂ rastuća','log₂(x)>3 → x>2³','x>8 → D=(8,+∞)']},
  {id:'q12',topic:'jednadzbe',meta:'A razina · supstitucija',
   text:'Rješenje 4ˣ − 5·2ˣ + 4 = 0 je:',
   opts:[{t:'x=0',ok:false},{t:'x=2',ok:false},{t:'x=0 ili x=2',ok:true},{t:'x=1 ili x=4',ok:false}],
   c:'✓ Točno. t=2ˣ: t²−5t+4=0 → (t−1)(t−4)=0 → t=1→x=0, t=4→x=2.',
   w:'✗ Netočno. t=2ˣ: t²−5t+4=0 → (t−1)(t−4)=0. 2ˣ=1→x=0, 2ˣ=4→x=2.',
   proof:['4ˣ=(2ˣ)²; t=2ˣ','t²−5t+4=(t−1)(t−4)=0','t=1→x=0, t=4→x=2']}
];

var FExp={
  log3:'2⁵=32 → log₂(32)=5',
  exp2:'3⁴=81 → 3ˣ=81 → x=4',
  log4:'log₄(x)=2 → x=4²=16',
  log5:'log₂(16)−log₂(4)=log₂(16/4)=log₂(4)=2'
};

function renderQuiz(){
  var cont=document.getElementById('quiz-container');var html='';
  ALL_QUESTIONS.forEach(function(q){
    var optsHtml=q.opts.map(function(o,i){return '<div class="qo" onclick="qa(\\''+q.id+'\\','+i+','+o.ok+',\\''+q.id+'e\\')">'+o.t+'</div>';}).join('');
    html+='<div class="qb" id="qb-'+q.id+'"><div class="qm">'+q.meta+'</div><div class="qq">'+q.text+'</div><div class="qb-opts">'+optsHtml+'</div><div class="qe" id="'+q.id+'e"></div></div>';
  });
  cont.innerHTML=html;total=ALL_QUESTIONS.length;
}

function qa(qid,idx,ok,eid){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;
  if(ok){correct++;soundCorrect();}else soundWrong();
  var qdata=ALL_QUESTIONS.find(function(q){return q.id===qid;});
  if(!qdata)return;
  document.querySelectorAll('#qb-'+qid+' .qo').forEach(function(o,i){o.classList.add('dis');if(i===idx)o.classList.add(ok?'ok':'ng');if(!ok&&qdata.opts[i].ok)o.classList.add('ok');});
  var e=document.getElementById(eid);
  var proofHtml='';
  if(!ok&&qdata.proof){proofHtml='<div class="mini-proof"><div class="mini-proof-lbl">→ Mini dokaz</div>'+qdata.proof.map(function(s,i){return '<div class="step"><span class="sn">'+(i+1)+'</span><span class="st">'+s+'</span></div>';}).join('')+'</div>';}
  e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>'+proofHtml;
  e.classList.add('show');
  checkAdaptive(qid,ok);
  if(examMode!=='normal')stopTimer();
  if(examMode!=='normal'&&Object.keys(answered).length<total)startTimer();
  if(Object.keys(answered).length===total){
    var s=document.getElementById('score');
    document.getElementById('snum').textContent=correct+'/'+total;
    var pct=Math.round(correct/total*100);
    document.getElementById('slbl').textContent=pct>=80?'Izvrsno! Spreman si za P09 →':pct>=60?'Dobro! Ponovi slabe točke.':'Ponovi gradivo P08 prije nastavka.';
    if(s)s.classList.add('show');soundComplete();updateProgress();
  }
  updateProgress();
}

function chkf(iid,fid,ans,key){
  var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();
  var btn=inp.parentElement.querySelector('.fitb-btn');if(!v)return;
  inp.disabled=true;if(btn)btn.disabled=true;fb.classList.add('show');
  var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};
  var ok=norm(v)===norm(ans);
  inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');
  fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];
}

/* ══════════════════════════════════════════════
   INTERAKTIVNI GRAFOVI — P08
   ══════════════════════════════════════════════ */
function fmtN7(x){return Number.isInteger(x)||Math.abs(x-Math.round(x))<0.001?Math.round(x):Math.round(x*100)/100;}
function drawGrid7(ctx,W,H,ox,oy,sc){
  ctx.strokeStyle='rgba(245,158,11,0.07)';ctx.lineWidth=1;
  for(var i=-20;i<=20;i++){var x=ox+i*sc;if(x>=0&&x<=W){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}}
  for(var i=-20;i<=20;i++){var y=oy+i*sc;if(y>=0&&y<=H){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}}
}
function drawAxes7(ctx,W,H,ox,oy,sc){
  ctx.strokeStyle='rgba(245,158,11,0.3)';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(0,oy);ctx.lineTo(W,oy);ctx.stroke();
  ctx.beginPath();ctx.moveTo(ox,0);ctx.lineTo(ox,H);ctx.stroke();
  ctx.fillStyle='rgba(150,120,60,0.8)';ctx.font='9px monospace';ctx.textAlign='center';
  for(var i=-8;i<=8;i++){if(i===0)continue;
    var px=ox+i*sc;if(px>8&&px<W-8)ctx.fillText(i,px,oy+11);
    var py=oy-i*sc;if(py>8&&py<H-8){ctx.textAlign='right';ctx.fillText(i,ox-4,py+3);}
    ctx.textAlign='center';
  }
}

/* ── EKSPONENCIJALA ── */
var expA=2,expK=1,expLogMode=0;
function syncExp(){
  expA=parseFloat(document.getElementById('exp-sa').value)||2;
  expK=parseFloat(document.getElementById('exp-sk').value)||1;
  document.getElementById('exp-va').textContent=fmtN7(expA);
  document.getElementById('exp-vk').textContent='k='+fmtN7(expK);
  drawExp();
}
function drawExp(){
  var cnv=document.getElementById('exp-canvas');if(!cnv)return;
  var ctx=cnv.getContext('2d');
  var W=cnv.offsetWidth||600,H=cnv.offsetHeight||220;
  cnv.width=W;cnv.height=H;
  var ox=W*0.4,oy=H*0.7,sc=36;
  ctx.fillStyle='#0a0f1a';ctx.fillRect(0,0,W,H);
  drawGrid7(ctx,W,H,ox,oy,sc);
  drawAxes7(ctx,W,H,ox,oy,sc);
  /* asimptota y=0 označena */
  ctx.strokeStyle='rgba(245,158,11,0.2)';ctx.lineWidth=1;ctx.setLineDash([4,4]);
  ctx.beginPath();ctx.moveTo(0,oy);ctx.lineTo(W,oy);ctx.stroke();
  ctx.setLineDash([]);
  /* f(x) = a^(kx) */
  ctx.strokeStyle='#F59E0B';ctx.lineWidth=2.5;ctx.beginPath();
  var first=true;
  for(var px=0;px<=W;px++){
    var xv=(px-ox)/sc,yv=Math.pow(expA,expK*xv);
    if(yv>200||yv<-200){first=true;continue;}
    var py=oy-yv*sc;
    if(first){ctx.moveTo(px,py);first=false;}else ctx.lineTo(px,py);
  }
  ctx.stroke();
  /* točka (0,1) */
  ctx.fillStyle='#22D3EE';ctx.beginPath();ctx.arc(ox,oy-sc,5,0,Math.PI*2);ctx.fill();
  ctx.font='bold 10px monospace';ctx.fillStyle='#22D3EE';ctx.textAlign='left';
  ctx.fillText('(0,1)',ox+7,oy-sc-5);
  var rast=expK>0?(expA>1?'rastuća':'padajuća'):(expA>1?'padajuća':'rastuća');
  document.getElementById('exp-info').innerHTML=
    'f(x) = '+fmtN7(expA)+'<sup>'+fmtN7(expK)+'x</sup>'+
    ' &nbsp;·&nbsp; prolazi kroz (0,1)'+
    ' &nbsp;·&nbsp; '+rast+
    ' &nbsp;·&nbsp; asimptota y=0'+
    ' &nbsp;·&nbsp; D=ℝ, Cd=(0,+∞)';
}

/* ── LOG/EXP DUAL GRAF ── */
var lgBase=2,lgMode=0;
function setLogMode(m,btn){
  lgMode=m;
  document.querySelectorAll('[id^="lg-mode"]').forEach(function(b){b.classList.remove('on');});
  btn.classList.add('on');
  drawLogGraph();
}
function syncLogGraph(){
  lgBase=parseFloat(document.getElementById('log-sa').value)||2;
  document.getElementById('log-va').textContent='a='+fmtN7(lgBase);
  drawLogGraph();
}
function drawLogGraph(){
  var cnv=document.getElementById('log-canvas');if(!cnv)return;
  var ctx=cnv.getContext('2d');
  var W=cnv.offsetWidth||600,H=cnv.offsetHeight||220;
  cnv.width=W;cnv.height=H;
  var ox=W*0.35,oy=H*0.55,sc=40;
  ctx.fillStyle='#0a0f1a';ctx.fillRect(0,0,W,H);
  drawGrid7(ctx,W,H,ox,oy,sc);
  drawAxes7(ctx,W,H,ox,oy,sc);
  /* simetrala y=x za mode 2 */
  if(lgMode===2){
    ctx.strokeStyle='rgba(100,100,100,0.3)';ctx.lineWidth=1;ctx.setLineDash([4,4]);
    ctx.beginPath();ctx.moveTo(0,oy+ox);ctx.lineTo(Math.min(W,H),oy-(Math.min(W,H)-ox));ctx.stroke();
    ctx.setLineDash([]);
  }
  /* eksponencijala */
  if(lgMode===0||lgMode===2){
    ctx.strokeStyle='#F59E0B';ctx.lineWidth=2.5;ctx.beginPath();
    var first=true;
    for(var px=0;px<=W;px++){
      var xv=(px-ox)/sc,yv=Math.pow(lgBase,xv);
      if(yv>100||yv<-100){first=true;continue;}
      var py=oy-yv*sc;
      if(first){ctx.moveTo(px,py);first=false;}else ctx.lineTo(px,py);
    }
    ctx.stroke();
    ctx.fillStyle='#F59E0B';ctx.beginPath();ctx.arc(ox,oy-sc,4,0,Math.PI*2);ctx.fill();
    ctx.font='9px monospace';ctx.fillStyle='#F59E0B';ctx.textAlign='left';
    if(lgMode===2)ctx.fillText(fmtN7(lgBase)+'ˣ',ox+5,oy-sc-5);
  }
  /* logaritam */
  if(lgMode===1||lgMode===2){
    ctx.strokeStyle='#22D3EE';ctx.lineWidth=2.5;ctx.beginPath();
    var first2=true;
    for(var px2=1;px2<=W;px2++){
      var xv2=(px2-ox)/sc;
      if(xv2<=0){continue;}
      var yv2=Math.log(xv2)/Math.log(lgBase);
      if(Math.abs(yv2)>100){first2=true;continue;}
      var py2=oy-yv2*sc;
      if(first2){ctx.moveTo(px2,py2);first2=false;}else ctx.lineTo(px2,py2);
    }
    ctx.stroke();
    /* točka (1,0) */
    ctx.fillStyle='#22D3EE';ctx.beginPath();ctx.arc(ox+sc,oy,4,0,Math.PI*2);ctx.fill();
    ctx.font='9px monospace';ctx.fillStyle='#22D3EE';ctx.textAlign='left';
    if(lgMode===2)ctx.fillText('log'+fmtN7(lgBase)+'(x)',ox+sc+5,oy-8);
  }
  var modeDesc=['f(x)='+fmtN7(lgBase)+'ˣ — eksp. · (0,1) fiksna · asimptota y=0',
    'f(x)=log_'+fmtN7(lgBase)+'(x) — log. · (1,0) fiksna · asimptota x=0',
    'Oboje: log i eksp. su zrcalno simetrični oko y=x!'];
  document.getElementById('log-info').innerHTML=modeDesc[lgMode];
}

(function(){setTimeout(function(){drawExp();drawLogGraph();},120);})();

/* ── RESTORE TAB (mora biti na kraju, iza svih definicija) ── */
(function(){try{var s=sessionStorage.getItem('p08_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){
  try{
    var saved=localStorage.getItem('maturiraj_p08_prog');
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
const meta = {id:'P08',pidLower:'p08',title:"Maturiraj.hr \u2014 Mat A \u00b7 P08 \u00b7 Eksponencijalna i Logaritamska Funkcija",subject:'matematika-a',lsKey:'maturiraj_p08_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p08');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P08] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p08"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p08_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p08_prog',String(pct));}catch(e){}}
// -- Complete page for MatChapterViewer (iframe srcDoc)
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'*\');}}\\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'*\')}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P08 \u00b7 Eksponencijalna i Logaritam</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';
export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};