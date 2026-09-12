import { parseRational } from './numeric-answer.js'

// Exact coefficient arithmetic. Limits apply to intermediate expressions too.
const zero = {n:0n,d:1n}
const one = {n:1n,d:1n}
function rational(n,d) {
  if (!d || n.toString().length>512 || d.toString().length>512) throw new Error('coefficient limit')
  if(d<0n) {n=-n;d=-d}
  let a=n<0n?-n:n,b=d
  while(b) {const r=a%b;a=b;b=r}
  return {n:n/a,d:d/a}
}
const add = (a,b) => rational(a.n*b.d+b.n*a.d,a.d*b.d)
const multiply = (a,b) => rational(a.n*b.n,a.d*b.d)
function trim(p) {
  while(p.length>1 && p.at(-1).n===0n) p.pop()
  return p
}
function sum(a,b,sign=1n) {
  return trim(Array.from({length:Math.max(a.length,b.length)},(_,i)=>add(a[i]||zero,multiply(b[i]||zero,{n:sign,d:1n}))))
}
function product(a,b) {
  if(a.length+b.length-2>8) throw new Error('degree limit')
  const result=Array.from({length:a.length+b.length-1},()=>zero)
  a.forEach((v,i)=>b.forEach((w,j)=>{result[i+j]=add(result[i+j],multiply(v,w))}))
  return trim(result)
}
export function parsePolynomial(input) {
  if(typeof input!=='string'||!input.trim()||input.length>256) return null
  try {
    const source=input.replaceAll('−','-').replaceAll('²','^2').replaceAll('³','^3').replaceAll('·','*').replaceAll('×','*')
    const tokens=[]
    let offset=0
    while(offset<source.length) {
      const match=/^(\s+|(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:[eE][+-]?\d+)?|[x()+*/^\-])/.exec(source.slice(offset))
      if(!match) return null
      offset+=match[0].length
      if(!/^\s+$/.test(match[0])) tokens.push(match[0])
    }
    if(tokens.length>128) return null
    let at=0,depth=0
    function atom() {
      if(++depth>24) throw new Error('depth limit')
      const token=tokens[at++]
      let value
      if(token==='x') value=[zero,one]
      else if(token==='(') {
        value=expression()
        if(tokens[at++]!==')') throw new Error('missing parenthesis')
      } else {
        const number=parseRational(token)
        if(!number) throw new Error('number required')
        value=[number]
      }
      if(tokens[at]==='^') {
        at++
        const power=tokens[at++]
        if(!/^[0-8]$/.test(power||'')) throw new Error('power limit')
        const base=value
        value=[one]
        for(let i=0;i<Number(power);i++) value=product(value,base)
      }
      depth--
      return value
    }
    function unary() {
      if(tokens[at]==='+'||tokens[at]==='-') {
        const sign=tokens[at++]==='-'?-1n:1n
        return product([{n:sign,d:1n}],unary())
      }
      return atom()
    }
    function term() {
      let value=unary()
      while(tokens[at]==='*'||tokens[at]==='/'||tokens[at]==='x'||tokens[at]==='(') {
        const operator=tokens[at]
        if(operator==='*'||operator==='/') at++
        const right=unary()
        if(operator==='/') {
          // Variable denominators are outside this polynomial grammar. Never
          // cancel them and silently erase a hole in the original domain.
          if(right.length!==1||right[0].n===0n) throw new Error('constant denominator required')
          value=product(value,[rational(right[0].d,right[0].n)])
        } else value=product(value,right)
      }
      return value
    }
    function expression() {
      let value=term()
      while(tokens[at]==='+'||tokens[at]==='-') {
        const sign=tokens[at++]==='-'?-1n:1n
        value=sum(value,term(),sign)
      }
      return value
    }
    const result=expression()
    return at===tokens.length?result:null
  } catch { return null }
}
export function isAlgebraAnswer(answer) {
  const rule=answer?.algebra
  return answer?.numeric===undefined && rule!==null && typeof rule==='object' &&
    Object.getPrototypeOf(rule)===Object.prototype && Object.keys(rule).length===2 &&
    rule.kind==='polynomial' && rule.variable==='x' && Array.isArray(answer.accepted) &&
    answer.accepted.length>0 && answer.accepted.every(value=>parsePolynomial(value)!==null)
}
export function matchesAlgebraAnswer(response,answer) {
  if(!isAlgebraAnswer(answer)) return false
  const actual=parsePolynomial(response)
  return actual!==null && answer.accepted.some(value=>{
    const expected=parsePolynomial(value)
    return actual.length===expected.length && actual.every((v,i)=>v.n===expected[i].n&&v.d===expected[i].d)
  })
}
