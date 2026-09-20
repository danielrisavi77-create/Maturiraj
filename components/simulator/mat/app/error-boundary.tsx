// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Zadnja crta obrane: neuhvacena greska u enginu pokazuje poruku umjesto bijelog ekrana. */
import React from 'react';
const{createElement:e}=React;
class ErrorBoundary extends React.Component{
  constructor(props){super(props);this.state={err:false};}
  static getDerivedStateFromError(){return {err:true};}
  componentDidCatch(er,inf){try{console.error("Sim error:",er,inf);}catch(_){}}
  render(){
    if(this.state.err){
      return e("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24,background:"var(--bg)",fontFamily:"var(--fb)"}},
        e("div",{style:{maxWidth:380,textAlign:"center",background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:16,padding:"32px 26px",boxShadow:"var(--shadow-lg)"}},
          e("div",{style:{fontSize:42,marginBottom:12}},"\uD83D\uDE15"),
          e("div",{style:{fontFamily:"var(--fh)",fontSize:22,color:"var(--text)",marginBottom:8}},"Ups \u2014 ne\u0161to je zapelo"),
          e("div",{style:{fontSize:13.5,color:"var(--muted)",lineHeight:1.6,marginBottom:20}},"Dogodila se neo\u010dekivana gre\u0161ka. Tvoj napredak je spremljen. Osvje\u017ei stranicu da nastavi\u0161."),
          e("button",{onClick:function(){location.reload();},style:{background:"var(--blue)",color:"#fff",border:"none",fontFamily:"var(--fb)",fontSize:14,fontWeight:700,padding:"11px 24px",borderRadius:10,cursor:"pointer"}},"\u21bb Osvje\u017ei stranicu")
        ));
    }
    return this.props.children;
  }
}
export { ErrorBoundary };
