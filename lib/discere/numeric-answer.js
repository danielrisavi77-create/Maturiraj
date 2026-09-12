// Exact finite-decimal/fraction matching. No eval, prefix parsing or implicit
// tolerance. BigInts stay internal; response and receipt contracts remain JSON.
const plain = value => value !== null && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype
const keys = (value, allowed) => plain(value) && Object.keys(value).every(key => allowed.includes(key))
const absolute = value => value < 0n ? -value : value
const compare = (a,b) => a.n*b.d-b.n*a.d
const zero = {n:0n,d:1n}
function reduce(n,d) {
  if(d===0n) return null
  if(d<0n) {n=-n;d=-d}
  let a=absolute(n),b=d
  while(b) {const remainder=a%b;a=b;b=remainder}
  return {n:n/a,d:d/a}
}
function decimal(value) {
  if(!/^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:[eE][+-]?\d+)?$/.test(value)) return null
  const [mantissa,power='0']=value.toLowerCase().split('e')
  const exponent=Number(power)
  if(!Number.isInteger(exponent)||Math.abs(exponent)>100) return null
  const negative=mantissa.startsWith('-'), unsigned=mantissa.replace(/^[+-]/,'').replace(',','.')
  const [integer='',fraction='']=unsigned.split('.')
  let n=BigInt(integer+fraction)*(negative?-1n:1n),d=10n**BigInt(fraction.length)
  if(exponent>=0) n*=10n**BigInt(exponent)
  else d*=10n**BigInt(-exponent)
  return reduce(n,d)
}
export function parseRational(input) {
  if(typeof input!=='string'||input.length>128) return null
  const parts=input.trim().replaceAll('−','-').split('/')
  if(parts.length>2) return null
  const a=decimal(parts[0].trim())
  if(!a) return null
  if(parts.length===1) return a
  const b=decimal(parts[1].trim())
  return b&&reduce(a.n*b.d,a.d*b.n)
}
function inDomain(value,domain) {
  if(!domain) return true
  if(domain.minimum!==undefined) {
    const delta=compare(value,parseRational(domain.minimum))
    if(delta<0n||(delta===0n&&domain.minimumInclusive===false)) return false
  }
  if(domain.maximum!==undefined) {
    const delta=compare(value,parseRational(domain.maximum))
    if(delta>0n||(delta===0n&&domain.maximumInclusive===false)) return false
  }
  return !(domain.excluded||[]).some(excluded=>compare(value,parseRational(excluded))===0n)
}
export function isNumericAnswer(answer) {
  const rule=answer?.numeric
  if(!keys(rule,['absoluteTolerance','domain','unit'])||!Array.isArray(answer.accepted)||!answer.accepted.length||answer.accepted.some(value=>!parseRational(value))) return false
  const tolerance=parseRational(rule.absoluteTolerance??'0')
  if(!tolerance||tolerance.n<0n) return false
  const domain=rule.domain
  if(domain!==undefined) {
    if(!keys(domain,['minimum','maximum','minimumInclusive','maximumInclusive','excluded'])||
      ['minimum','maximum'].some(key=>domain[key]!==undefined&&!parseRational(domain[key]))||
      ['minimumInclusive','maximumInclusive'].some(key=>domain[key]!==undefined&&typeof domain[key]!=='boolean')||
      (domain.excluded!==undefined&&(!Array.isArray(domain.excluded)||domain.excluded.length>50||domain.excluded.some(value=>!parseRational(value))))) return false
    if(domain.minimum!==undefined&&domain.maximum!==undefined&&compare(parseRational(domain.minimum),parseRational(domain.maximum))>0n) return false
    if(answer.accepted.some(value=>!inDomain(parseRational(value),domain))) return false
  }
  const unit=rule.unit
  if(unit!==undefined&&(!keys(unit,['label','aliases','required'])||typeof unit.label!=='string'||typeof unit.required!=='boolean'||
    !Array.isArray(unit.aliases)||!unit.aliases.length||unit.aliases.length>20||!unit.aliases.includes(unit.label)||
    unit.aliases.some(alias=>typeof alias!=='string'||alias.length>30||! /^[\p{L}°%][\p{L}\p{M}²³°%/·^0-9 -]*$/u.test(alias)))) return false
  return true
}
export function matchesNumericAnswer(response,answer) {
  if(typeof response!=='string'||response.length>160||!isNumericAnswer(answer)) return false
  const rule=answer.numeric
  let input=response.trim()
  if(rule.unit) {
    const alias=[...rule.unit.aliases].sort((a,b)=>b.length-a.length).find(value=>input.endsWith(value))
    if(alias) input=input.slice(0,-alias.length).trim()
    else if(rule.unit.required) return false
  }
  const value=parseRational(input)
  if(!value||!inDomain(value,rule.domain)) return false
  const tolerance=parseRational(rule.absoluteTolerance??'0')??zero
  return answer.accepted.some(key=>{
    const expected=parseRational(key)
    const difference={n:absolute(compare(value,expected)),d:value.d*expected.d}
    return compare(difference,tolerance)<=0n
  })
}
