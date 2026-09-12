const plain=value=>value!==null&&typeof value==='object'&&Object.getPrototypeOf(value)===Object.prototype
const text=value=>typeof value==='string'&&value.trim().length>0
export function isListeningStimulus(value) {
  return plain(value)&&Object.keys(value).every(k=>['title','language','synthetic','durationSec','maxPlays','transcript'].includes(k))&&
    text(value.title)&&value.title.length<=200&&typeof value.language==='string'&&/^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(value.language)&&
    typeof value.synthetic==='boolean'&&Number.isFinite(value.durationSec)&&value.durationSec>0&&value.durationSec<=7200&&
    Number.isInteger(value.maxPlays)&&value.maxPlays>=1&&value.maxPlays<=5&&
    Array.isArray(value.transcript)&&value.transcript.length>0&&value.transcript.length<=100&&
    value.transcript.every(s=>plain(s)&&Object.keys(s).every(k=>['id','text'].includes(k))&&text(s.id)&&s.id.length<=100&&text(s.text)&&s.text.length<=4000)&&
    new Set(value.transcript.map(s=>s.id)).size===value.transcript.length
}
export const emptyPlayback=()=>({started:0,completed:0,position:0,active:false,failed:false})
export function isPlayback(policy,state) {
  return isListeningStimulus(policy)&&plain(state)&&Object.keys(state).length===5&&
    Number.isInteger(state.started)&&state.started>=0&&state.started<=policy.maxPlays&&
    Number.isInteger(state.completed)&&state.completed>=0&&state.completed<=state.started&&
    typeof state.active==='boolean'&&typeof state.failed==='boolean'&&
    state.started===state.completed+(state.active?1:0)&&
    Number.isFinite(state.position)&&state.position>=0&&state.position<=policy.durationSec+0.5&&
    (state.active||state.position===0)
}
export function advancePlayback(policy,previous,action) {
  if(!isPlayback(policy,previous)||!plain(action)) throw new Error('Invalid listening state')
  const next={...previous}
  switch(action.type) {
    case 'start':
      if(next.failed) throw new Error('Listening media is unavailable')
      if(!next.active) {
        if(next.started>=policy.maxPlays) throw new Error('Listening replay limit reached')
        next.started++;next.active=true;next.position=0
      }
      break
    case 'position':
      if(!next.active||!Number.isFinite(action.position)||action.position<0||action.position>policy.durationSec+0.5) throw new Error('Invalid listening position')
      next.position=action.position
      break
    case 'finish':
      if(!next.active||next.failed) throw new Error('No active listening pass')
      next.completed++;next.active=false;next.position=0
      break
    case 'failure': next.failed=true;break
    case 'ready': next.failed=false;break
    default: throw new Error('Unknown listening action')
  }
  return next
}
export function listeningQuestions(questions) {
  return (questions||[]).flatMap(q=>[...(q.type==='audio_group'&&q.stimulus?.listening?[q]:[]),...listeningQuestions(q.children)])
}
export function isPlaybackMap(questions,states) {
  const available=listeningQuestions(questions)
  return plain(states)&&Object.entries(states).every(([id,state])=>isPlayback(available.find(q=>q.id===id)?.stimulus.listening,state))
}
export function canSubmitListening(questions,states={}) {
  return listeningQuestions(questions).every(q=>{
    const state=states[q.id]
    return isPlayback(q.stimulus.listening,state)&&state.completed>0&&!state.failed
  })
}
