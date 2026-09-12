import { expect, it } from 'vitest'
import { scoreQuestion } from '../../lib/discere/scoring'
import { validateQuestionSet } from '../../lib/discere/exam-schema'
import { parsePolynomial } from '../../lib/discere/algebra-answer'

const question = (key='x^2-2x-3') => ({id:'algebra',type:'short',prompt:'Odredi polinom.',points:2,assets:[],topic:'functions',sourceRef:{task:'test'},answer:{kind:'text',source:'none',accepted:[key],algebra:{kind:'polynomial',variable:'x'}}})
it.each(['(x-3)(x+1)','(x-1)^2-4','x²−2x−3','x*x-2*x-3'])('scores an exact equivalent polynomial %s', response=>{
  expect(scoreQuestion(question(),response).earned).toBe(2)
})
it('compares rational coefficients exactly and respects unary minus precedence',()=>{
  expect(scoreQuestion(question('x/2+2'),'0,5x+2').earned).toBe(2)
  expect(scoreQuestion(question('-x^2'),'-(x*x)').earned).toBe(2)
  expect(scoreQuestion(question('-x^2'),'(-x)^2').earned).toBe(0)
  expect(scoreQuestion(question('x/2'),'0.50000000000000000001x').earned).toBe(0)
})
it.each(['(x^3-2x^2-3x)/x','x^2-2x-3+1/(x-x)','x^2-2x-3junk','x^2-2x-3+sin(x)','x^999','x^-1','1 2','x^2-2x-3=0',''])('rejects unsupported or domain-changing input %s',response=>{
  expect(scoreQuestion(question(),response).earned).toBe(0)
})
it('validates explicit matching policies and preserves ordinary text behavior',()=>{
  expect(validateQuestionSet([question()]).valid).toBe(true)
  for(const modify of [q=>q.answer.algebra.variable='y',q=>q.answer.algebra.extra=true,q=>q.answer.numeric={},q=>q.answer.accepted=['1/x'],q=>q.type='essay']) {
    const q=question();modify(q);expect(validateQuestionSet([q]).valid).toBe(false)
  }
  const q=question();delete q.answer.algebra
  expect(scoreQuestion(q,'(x-3)(x+1)').earned).toBe(0)
})
it('proves identities by coefficients even when unequal expressions share several sampled roots',()=>{
  expect(scoreQuestion(question('0'),'x(x-1)(x+1)(x-2)(x+2)').earned).toBe(0)
  for(let a=-3;a<=3;a++) for(let b=-3;b<=3;b++) {
    expect(scoreQuestion(question(`x^2+(${a+b})x+(${a*b})`),`(x+(${a}))(x+(${b}))`).earned).toBe(2)
  }
})
it.each(['x^2^3','x^9','x'.repeat(257),'('.repeat(25)+'x'+')'.repeat(25),'1e999x','1/0','(x-1)/(x-1)','x/2x','x+'])('bounds or rejects ambiguous unsupported input %s',value=>{
  if(value==='x/2x') expect(scoreQuestion(question('1/2'),value).earned).toBe(0)
  else expect(parsePolynomial(value)).toBeNull()
})
