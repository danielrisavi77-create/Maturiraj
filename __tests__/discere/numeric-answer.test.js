import { expect, it } from 'vitest'
import { scoreQuestion } from '../../lib/discere/scoring'
import { validateQuestionSet } from '../../lib/discere/exam-schema'
import { prepareAssessmentAttempt } from '../../lib/learning/attempt-service'

const question = (accepted=['0.5'],numeric={}) => ({id:'numeric-pilot',type:'short',prompt:'Odredi vrijednost.',points:1,assets:[],topic:'functions',sourceRef:{task:'test'},answer:{kind:'text',source:'none',accepted,numeric}})
it.each(['1/2','2 / 4','0,5','.5','+0.500','5e-1','1,5 / 3'])('accepts complete equivalent numeric input %s', value => {
  expect(scoreQuestion(question(),value).earned).toBe(1)
})
it.each(['1','0.5garbage','0.5+0','1/0','NaN','Infinity','1 2','1,2.3','0.50000000000000000000000001','1e999','', '   '])('does not accept prefix/invalid/unequal input %s',value=>{
  expect(scoreQuestion(question(),value).earned).toBe(0)
})
it('applies explicit absolute tolerance without rounding or hidden global tolerance',()=>{
  expect(scoreQuestion(question(['0.5'],{absoluteTolerance:'0.01'}),'0.51').earned).toBe(1)
  expect(scoreQuestion(question(['0.5'],{absoluteTolerance:'0.01'}),'0.51000000000000000001').earned).toBe(0)
  expect(scoreQuestion(question(['0.5']),'0.501').earned).toBe(0)
})
it('rejects domain exclusions even when a candidate lies inside numeric tolerance',()=>{
  const q=question(['1'],{absoluteTolerance:'1',domain:{minimum:'0',minimumInclusive:false,maximum:'2',maximumInclusive:true,excluded:['2']}})
  expect(scoreQuestion(q,'0').earned).toBe(0)
  expect(scoreQuestion(q,'2').earned).toBe(0)
  expect(scoreQuestion(q,'1.5').earned).toBe(1)
})
it('requires the declared unit and does not silently convert another unit',()=>{
  const q=question(['0.5'],{unit:{label:'cm',aliases:['cm','centimetara'],required:true}})
  expect(scoreQuestion(q,'1/2 cm').earned).toBe(1)
  expect(scoreQuestion(q,'0,5centimetara').earned).toBe(1)
  expect(scoreQuestion(q,'0.5').earned).toBe(0)
  expect(scoreQuestion(q,'0.5 m').earned).toBe(0)
})
it('keeps ordinary short answers as text unless numeric matching is explicitly requested',()=>{
  const q=question();delete q.answer.numeric
  expect(scoreQuestion(q,'1/2').earned).toBe(0)
  expect(scoreQuestion(q,'0.5').earned).toBe(1)
})
it.each([
  q=>{q.answer.accepted=['0.5junk']},
  q=>{q.answer.numeric.absoluteTolerance='-0.1'},
  q=>{q.answer.numeric.domain={minimum:'1',maximum:'0'}},
  q=>{q.answer.numeric.domain={excluded:['0.5']}},
  q=>{q.answer.numeric.unit={label:'cm',aliases:[],required:true}},
])('rejects an invalid numeric key or policy (%#)',mutate=>{
  const q=question();mutate(q)
  expect(validateQuestionSet([q]).valid).toBe(false)
})
it('accepts a valid explicit policy',()=>expect(validateQuestionSet([question()]).valid).toBe(true))
it('does not silently ignore a numeric policy attached to an incompatible question type',()=>{
  const q={...question(),type:'essay',answer:{kind:'rubric',source:'none',rubric:[{id:'r',text:'Ručno',points:1}],numeric:{}}}
  expect(validateQuestionSet([q]).valid).toBe(false)
})
it.each(['A','B'])('uses identical numeric scoring on server level %s and keeps receipts JSON-safe',level=>{
  const q={...question(),version:'numeric-v1',outcomeIds:[]}
  const set={id:'mat:numeric:questions',assessmentId:'mat:numeric',version:q.version,subjectId:'mat',level,questions:[q]}
  const session={id:'session',userId:'owner',kind:'assessment',status:'active',assessmentId:set.assessmentId,questionSetId:set.id,questionVersion:set.version,subjectId:'mat',level,startedAt:'2026-09-11T10:00:00Z',expiresAt:'2026-09-11T11:00:00Z'}
  const prepared=prepareAssessmentAttempt({userId:'owner',session,questionSet:set,receivedAt:'2026-09-11T10:01:00Z',event:{eventId:'event',sessionId:session.id,questionId:q.id,questionVersion:q.version,response:'1/2',helpUsed:false}})
  expect(prepared.result).toEqual({earned:1,possible:1,status:'scored'})
  expect(JSON.parse(JSON.stringify(prepared)).event.response).toBe('1/2')
  expect(prepared.masteryEligible).toBe(false)
  expect(()=>prepareAssessmentAttempt({userId:'owner',session:{...session,level:level==='A'?'B':'A'},questionSet:set,receivedAt:'2026-09-11T10:01:00Z',event:prepared.event})).toThrow('SESSION_CONTENT_MISMATCH')
})
