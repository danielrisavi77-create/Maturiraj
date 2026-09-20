// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   renderOptText/renderQText i SVG prikaz razlomaka/formula (parseMath obitelj je
   dalje izdvojena u ./parseMath.mjs). */
import React from 'react';
const{createElement:e,Fragment}=React;

// parseMath obitelj zivi u parseMath.mjs (dijeli se s content/simulator/mat/mat-shared-svg.mjs,
// koji se ucitava i obicnim Node importom) — ovdje se uvozi i dalje izvozi nepromijenjena.
import { mfracEl, mexpFracEl, msupEl, msubEl, wrapMath, parseMath } from './parseMath.mjs';

function renderOptText(text){var __r=__renderOptTextRaw(text);if(__r==null)return null;if(Array.isArray(__r))return e(React.Fragment,{key:"rot"},__r);if(React.isValidElement(__r))return __r.key!=null?__r:React.cloneElement(__r,{key:"rot"});return __r;}
function __renderOptTextRaw(text){
  if(text==null) return null;
  // Ako dobijemo objekt {txt,...} — izvuci txt
  if(typeof text==="object") text=text.txt||String(text);
  if(typeof text!=="string") text=String(text);
  // Ako sadrži bilo koji tag ([FRAC:], [B:], [SYS:], [BLOCK:]) → renderQText (full nested support)
  if(/\[(?:BLOCK|SYS|FRAC|B):/.test(text)) return renderQText(text);
  // FIX: pre-process (n)/(d) tags i convert to inline fraction elements
  if(text.indexOf("(") !== -1){
    return processFracTags(text);
  }
  // Prvo pokušaj prepoznati razlomke (vertikalni prikaz)
  const frac = parseStringForFractions(text);
  if(frac) return frac;
  // Inače običan math parser
  return wrapMath(parseMath(text));
}
function processFracTags(s){
  if(!s) return null;
  const parts = [];
  let i = 0;
  while(i < s.length){
    const fracIdx = s.indexOf("[FRAC:", i);
    if(fracIdx === -1){
      if(i < s.length) parts.push({type:"text", val: s.substring(i)});
      break;
    }
    if(fracIdx > i){
      parts.push({type:"text", val: s.substring(i, fracIdx)});
    }
    const closeIdx = s.indexOf("]", fracIdx);
    if(closeIdx === -1){
      parts.push({type:"text", val: s.substring(i)});
      break;
    }
    const inner = s.substring(fracIdx+6, closeIdx);
    const pipeIdx = inner.indexOf("|");
    if(pipeIdx === -1){
      parts.push({type:"text", val: s.substring(fracIdx, closeIdx+1)});
    } else {
      parts.push({type:"frac", num: inner.substring(0, pipeIdx).trim(), den: inner.substring(pipeIdx+1).trim()});
    }
    i = closeIdx + 1;
  }
  // Convert to React elements
  const els = parts.map((p, idx) => {
    if(p.type === "text"){
      // Run through parseStringForFractions for n/m parsing in text
      if(!p.val) return null;
      const sub = parseStringForFractions(p.val);
      if(sub) return React.cloneElement(sub, {key: "tp"+idx});
      const mp = parseMath(p.val);
      if(mp) return e("span", {key:"tp"+idx, style:{display:"inline-flex",alignItems:"center"}}, mp);
      return e("span", {key:"tp"+idx}, p.val);
    } else {
      // FRAC: inline mini-fraction
      const numEl = (function(){
        const sub = parseStringForFractions(p.num);
        if(sub) return sub;
        const mp = parseMath(p.num);
        if(mp) return mp;
        return p.num;
      })();
      const denEl = (function(){
        const sub = parseStringForFractions(p.den);
        if(sub) return sub;
        const mp = parseMath(p.den);
        if(mp) return mp;
        return p.den;
      })();
      return e("span", {key:"fp"+idx, className:"mfrac inlfrac", style:{
        display:"inline-flex", flexDirection:"column", alignItems:"center",
        verticalAlign:"middle", margin:"0 3px", lineHeight:1
      }},
        e("span", {className:"mfrac-num", style:{fontSize:"0.88em", padding:"0 3px"}}, numEl),
        e("span", {className:"mfrac-bar", style:{
          borderTop:"1.3px solid currentColor", width:"100%", minWidth:"0.9em",
          margin:"1px 0"
        }}),
        e("span", {className:"mfrac-den", style:{fontSize:"0.88em", padding:"0 3px"}}, denEl)
      );
    }
  });
  return e("span", {style:{display:"inline-flex", alignItems:"center", flexWrap:"wrap", gap:0}}, els);
}
function EquationSystemSVG({equations}){
  if(!equations||equations.length<2) return null;
  // Renderira sustav jednadžbi s vitičastom zagradom { ; svaka jednadžba prolazi
  // kroz renderQText (podržava nested [FRAC:], [B:] tagove).
  const renderEq = eq => {
    // Ako sadrži tagove → renderQText (nested support)
    if(/\[(?:BLOCK|SYS|FRAC|B):/.test(eq)) return renderQText(eq);
    const fp = parseStringForFractions ? parseStringForFractions(eq) : null;
    if(fp) return fp;
    const mp = parseMath(eq);
    return mp ? e("span",null,...mp) : eq;
  };
  return e("span",{style:{
    display:"inline-flex",alignItems:"stretch",
    margin:"0 6px",verticalAlign:"middle",
    fontFamily:"'DM Sans','Cambria Math',serif",fontSize:14
  }},
    // Vitičasta zagrada — SVG pretty render
    e("svg",{
      viewBox:"0 0 10 50",preserveAspectRatio:"none",
      style:{width:10,alignSelf:"stretch",marginRight:6,flex:"0 0 auto"}
    },
      e("path",{
        d:"M 8 2 Q 4 2 4 12 L 4 22 Q 4 25 1 25 Q 4 25 4 28 L 4 38 Q 4 48 8 48",
        fill:"none",stroke:"var(--text)",strokeWidth:1.2,strokeLinecap:"round",vectorEffect:"non-scaling-stroke"
      })
    ),
    // Stacked equations preko parseMath
    e("span",{style:{
      display:"flex",flexDirection:"column",justifyContent:"center",
      gap:"4px",lineHeight:1.4
    }},
      ...equations.map((eq,i)=>e("span",{
        key:"eq"+i,
        style:{display:"inline-block",whiteSpace:"nowrap"}
      },renderEq(eq)))
    )
  );
}
function parseBalancedTags(text){
  const TAG_PREFIXES=[
    {tag:"BLOCK",prefix:"[BLOCK:"},
    {tag:"SYS",  prefix:"[SYS:"},
    {tag:"FRAC", prefix:"[FRAC:"},
    {tag:"B",    prefix:"[B:"}
  ];
  const result=[];
  let buf="";
  let i=0;
  while(i<text.length){
    let matched=null;
    for(const tp of TAG_PREFIXES){
      if(text.startsWith(tp.prefix,i)){ matched=tp; break; }
    }
    if(!matched){
      buf+=text[i];
      i++;
      continue;
    }
    // Find matching ] s balansiranjem
    let depth=1;
    let j=i+matched.prefix.length;
    while(j<text.length && depth>0){
      if(text[j]==="["){ depth++; }
      else if(text[j]==="]"){
        depth--;
        if(depth===0) break;
      }
      j++;
    }
    if(depth!==0){
      // Nematched — treat as plain text
      buf+=text[i];
      i++;
      continue;
    }
    // Flush text buffer
    if(buf){ result.push({type:"text",content:buf}); buf=""; }
    const innerContent=text.substring(i+matched.prefix.length, j);
    result.push({type:"tag",tag:matched.tag,content:innerContent});
    i=j+1;
  }
  if(buf) result.push({type:"text",content:buf});
  return result;
}
function splitTopLevel(text,sep){
  const parts=[];
  let depth=0,last=0;
  for(let k=0;k<text.length;k++){
    if(text[k]==="[") depth++;
    else if(text[k]==="]") depth--;
    else if(depth===0 && text[k]===sep){
      parts.push(text.slice(last,k));
      last=k+1;
    }
  }
  parts.push(text.slice(last));
  return parts;
}
function renderQText(text){
  if(!text) return null;
  // Parse balanced tags (podržava nested)
  const blocks=parseBalancedTags(text);
  const elems=[];
  blocks.forEach((b,bi)=>{
    if(b.type==="tag"){
      if(b.tag==="BLOCK"){
        elems.push(e("div",{key:"bl"+bi,className:"formula-block"},b.content));
      } else if(b.tag==="SYS"){
        // Sustav jednadžbi: split top-level po | (NE inside nested tagova)
        const eqs=splitTopLevel(b.content,"|");
        elems.push(e(EquationSystemSVG,{key:"sys"+bi,equations:eqs}));
      } else if(b.tag==="B"){
        // Bold emphasis: ako inner ima tagove → recursive; inače plain (no wrapper)
        const hasNested=/\[(?:BLOCK|SYS|FRAC|B):/.test(b.content);
        elems.push(e("strong",{key:"b"+bi,style:{fontWeight:700}},
          hasNested ? renderQText(b.content) : b.content));
      } else if(b.tag==="FRAC"){
        // Stacked fraction: [FRAC:num|den], oba inner-a podržavaju nested tagove
        const pipeParts=splitTopLevel(b.content,"|");
        const numText=pipeParts[0]||"";
        const denText=pipeParts.slice(1).join("|");
        const renderInner=t=>{
          // Ako sadrži tagove → recursive renderQText
          if(/\[(?:BLOCK|SYS|FRAC|B):/.test(t)) return renderQText(t);
          const parsed=parseStringForFractions(t);
          if(parsed) return parsed;
          const mp=parseMath(t);
          return mp?e("span",null,...mp):t;
        };
        elems.push(e("span",{key:"frac"+bi,style:{display:"inline-flex",flexDirection:"column",alignItems:"stretch",verticalAlign:"middle",margin:"0 6px",lineHeight:1.1,minWidth:"fit-content"}},
          e("span",{style:{display:"flex",justifyContent:"center",padding:"0 8px 2px"}},renderInner(numText)),
          e("span",{style:{height:"1.5px",background:"currentColor"}}),
          e("span",{style:{display:"flex",justifyContent:"center",padding:"3px 8px 0"}},renderInner(denText))
        ));
      }
    } else {
      // Plain text — same logic as prije
      const txt=b.content;
      const hasExponent=/\^\(/.test(txt);
      if(hasExponent){
        const parsed=parseMath(txt);
        if(parsed && parsed.length>0){
          parsed.forEach((p,pi)=>elems.push(React.cloneElement(p,{key:"b"+bi+"p"+pi})));
          return;
        }
      }
      const fracParsed=parseStringForFractions(txt);
      if(fracParsed){
        elems.push(React.cloneElement(fracParsed,{key:"bf"+bi}));
      } else {
        const parsed=parseMath(txt);
        if(parsed) parsed.forEach((p,pi)=>elems.push(React.cloneElement(p,{key:"b"+bi+"p"+pi})));
      }
    }
  });
  return elems.length===0 ? null
    : e("span",{style:{display:"inline",lineHeight:2.2}},elems);
}
function FractionSVG({fracs, ops, pre, post}){
  const mf={fontFamily:"'DM Sans',sans-serif",fontSize:14,letterSpacing:".02em",fontFeatureSettings:"'tnum' 1"};
  const fracEl=(num,den,i)=>e("span",{key:"f"+i,className:"mfrac"},
    e("span",{className:"mfrac-num",style:mf},num),
    e("span",{className:"mfrac-bar"}),
    e("span",{className:"mfrac-den",style:mf},den)
  );
  const opEl=(op,i)=>e("span",{key:"op"+i,className:"mfrac-op",style:{...mf,fontSize:15}},op);
  const txtEl=(t,k)=>t?e("span",{key:k,className:"mfrac-txt",style:{...mf,fontSize:15}},t):null;
  return e("span",{className:"mfrac-row"},
    txtEl(pre,"pre"),
    fracs.map(([num,den],i)=>e(React.Fragment,{key:i},
      fracEl(num,den,i),
      i<(ops||[]).length?opEl(ops[i],i):null
    )),
    txtEl(post,"post")
  );
}
function FormulaBlock({lines, label}){
  if(!lines||!lines.length) return null;
  return e("div",{style:{
    margin:"10px 0 16px",
    background:"var(--s2)",
    border:"1px solid var(--bdr2)",
    borderLeft:"3px solid var(--blue)",
    borderRadius:"0 var(--r) var(--r) 0",
    padding:"14px 22px",
    display:"inline-block",
    minWidth:180,
    maxWidth:"100%",
    boxShadow:"0 1px 4px rgba(0,0,0,.08)"
  }},
    label&&e("div",{style:{
      fontSize:10,fontWeight:700,letterSpacing:".08em",
      textTransform:"uppercase",color:"var(--blue)",marginBottom:10
    }},label),
    lines.map((line,i)=>{
      if(line==="") return e("div",{key:i,style:{height:8}});
      const isInlineCtx=lines.length>1&&lines.some(l=>typeof l==="object"&&l.frac);
      if(typeof line==="object"&&line.frac){
        return e(isInlineCtx?"span":"div",{key:i,style:{display:"inline-flex",alignItems:"center",verticalAlign:"middle",margin:"0 2px"}},
          e(FractionSVG,{fracs:line.frac,ops:line.ops,pre:line.pre,post:line.post})
        );
      }
      if(typeof line==="object"&&!line.frac){
        const txt=(line.pre||"")+(line.post||"");
        const hasSup=line.sup;
        if(hasSup){
          return e(isInlineCtx?"span":"div",{key:i,style:{fontFamily:"'DM Sans',sans-serif",fontSize:15,color:"var(--text)",display:isInlineCtx?"inline":"block"}},
            txt||null,
            e("sup",{style:{fontSize:"0.7em",verticalAlign:"super",lineHeight:0}},line.sup)
          );
        }
        return e(isInlineCtx?"span":"div",{key:i,style:{fontFamily:"'DM Sans',sans-serif",fontSize:15,color:"var(--text)",display:isInlineCtx?"inline":"block"}},txt||null);
      }
      return e("div",{key:i,style:{
        fontFamily:"'DM Sans',sans-serif",
        fontSize:15,
        lineHeight:1.9,
        color:"var(--text)",
      }},line);
    })
  );
}
function renderOptContent(opt){
  if(!opt) return e("span",null, "");
  // Ako sadrži [FRAC:], [B:], [SYS:], [BLOCK:] → renderQText (full tag support)
  if(typeof opt === "string" && /\[(?:BLOCK|SYS|FRAC|B):/.test(opt)) return renderQText(opt);
  // String s processFracTags za zagrade
  if(typeof opt === "string" && opt.indexOf("(") !== -1){
    return processFracTags(opt);
  }
  // Object with explicit frac structure
  if(typeof opt === "object"){
    if(opt.svg) return e("div",{style:{margin:"4px 0"}}, opt.svg());
    return e("span",{style:{display:"inline-flex",alignItems:"center",gap:4,flexWrap:"wrap"}},
      opt.pre&&e("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14}},opt.pre),
      opt.frac&&e(FractionSVG,{fracs:opt.frac, ops:opt.ops||[], pre:"", post:""}),
      opt.post&&e("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14}},opt.post)
    );
  }
  if(typeof opt !== "string") return e("span",null, String(opt));
  // Prefer parseMath when has exponents
  if(/\^\(/.test(opt)){
    const mp = parseMath(opt);
    if(mp && mp.length > 0){
      return e("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,display:"inline-flex",alignItems:"center",gap:2,flexWrap:"wrap"}}, ...mp);
    }
  }
  // String — try to auto-detect simple fraction pattern n/m or (...)/(...) or with prefix
  const parsed = parseStringForFractions(opt);
  if(parsed) return parsed;
  // Fallback: render as plain styled text
  return e("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14}}, opt);
}
function parseStringForFractions(s){
  if(!s) return null;
  // Tokenize string with recursive support for nested parens
  function parseTokens(str){
    const tokens=[];
    let i=0;
    const n=str.length;
    while(i<n){
      let unitEnd=-1, unitContent="", unitType="";
      if(str[i]==="("){
        // Find matching close paren
        let depth=0;
        for(let j=i;j<n;j++){
          if(str[j]==="(") depth++;
          else if(str[j]===")"){ depth--; if(depth===0){ unitEnd=j+1; unitContent=str.substring(i+1,j); break; }}
        }
        if(unitEnd===-1){ tokens.push({type:"text",val:str[i]}); i++; continue; }
        unitType="paren";
      } else if(/\s/.test(str[i])){
        // whitespace
        tokens.push({type:"text",val:str[i]});
        i++;
        continue;
      } else {
        // atom: greedy non-space, non-/, non-(), non-operators
        const m=str.substring(i).match(/^[^\s\/()=+,−\-]+/);
        if(m){
          unitContent=m[0];
          unitEnd=i+m[0].length;
          unitType="atom";
        } else {
          // single operator/separator char
          tokens.push({type:"text",val:str[i]});
          i++;
          continue;
        }
      }
      // After unit: check for / (fraction)
      if(unitEnd<n && str[unitEnd]==="/"){
        let denStart=unitEnd+1, denEnd=-1, denContent="", denType="";
        if(str[denStart]==="("){
          let depth=0;
          for(let j=denStart;j<n;j++){
            if(str[j]==="(") depth++;
            else if(str[j]===")"){ depth--; if(depth===0){ denEnd=j+1; denContent=str.substring(denStart+1,j); break; }}
          }
          denType="paren";
        } else {
          const m=str.substring(denStart).match(/^[^\s\/()=+,−\-]+/);
          if(m){
            denContent=m[0];
            denEnd=denStart+m[0].length;
            denType="atom";
          }
        }
        if(denEnd!==-1){
          // Both numerator and denominator: strip outer parens (vertical bar makes them redundant)
          tokens.push({type:"frac",num:unitContent,den:denContent});
          i=denEnd;
          continue;
        }
      }
      // No fraction follows — render unit as text or recursive group
      if(unitType==="paren"){
        const innerTokens=parseTokens(unitContent);
        const hasFrac=(function check(toks){
          return toks.some(t=>t.type==="frac"||(t.type==="group"&&check(t.inner)));
        })(innerTokens);
        if(hasFrac){
          tokens.push({type:"group",inner:innerTokens});
        } else {
          tokens.push({type:"text",val:"("+unitContent+")"});
        }
      } else {
        tokens.push({type:"text",val:unitContent});
      }
      i=unitEnd;
    }
    return tokens;
  }
  
  function renderTokens(tokens){
    const out=[];
    for(let i=0;i<tokens.length;i++){
      const tok=tokens[i];
      if(tok.type==="frac"){
        out.push(e(FractionSVG,{key:"f"+i,fracs:[[tok.num,tok.den]],ops:[],pre:"",post:""}));
      } else if(tok.type==="group"){
        out.push(e("span",{key:"g"+i,style:{display:"inline-flex",alignItems:"center",gap:2}},
          e("span",{key:"o"},"("),
          ...renderTokens(tok.inner),
          e("span",{key:"c"},")")
        ));
      } else {
        out.push(e("span",{key:"t"+i},tok.val));
      }
    }
    return out;
  }
  
  const tokens=parseTokens(s);
  const hasFracTop=(function check(toks){
    return toks.some(t=>t.type==="frac"||(t.type==="group"&&check(t.inner)));
  })(tokens);
  if(!hasFracTop) return null;
  return e("span",{style:{display:"inline-flex",alignItems:"center",gap:2,flexWrap:"wrap",fontFamily:"'DM Sans',sans-serif",fontSize:14}},
    ...renderTokens(tokens)
  );
}

export { mfracEl, mexpFracEl, msupEl, msubEl, wrapMath, parseMath, renderOptText, __renderOptTextRaw, processFracTags, EquationSystemSVG, parseBalancedTags, splitTopLevel, renderQText, FractionSVG, FormulaBlock, renderOptContent, parseStringForFractions };
