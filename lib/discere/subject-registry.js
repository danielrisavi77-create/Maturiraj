const ACTIVE = 'active'
const QA = 'qa'
const SOON = 'soon'

const SUBJECT_DEFINITIONS = [
  { id:'hrv', slug:'hrvatski', name:'Hrvatski jezik', sym:'✍', color:'#f87171', group:'Obvezni', status:ACTIVE, runtime:'legacy', renderer:'legacy', levels:['single'], route:'/discere/hrvatski/simulator' },
  { id:'mat', slug:'matematika', name:'Matematika', sym:'π', color:'#818cf8', group:'Obvezni', status:ACTIVE, runtime:'legacy', renderer:'math', levels:['A','B'], route:'/discere/matematika' },

  { id:'eng', slug:'engleski', name:'Engleski jezik', sym:'En', color:'#c084fc', group:'Strani jezici', status:ACTIVE, runtime:'legacy', renderer:'language', levels:['A','B'], route:'/discere/engleski/simulator' },
  { id:'nje', slug:'njemacki', name:'Njemački jezik', sym:'De', color:'#a78bfa', group:'Strani jezici', status:SOON, runtime:'canonical', renderer:'language', levels:['A','B'], route:'/discere/njemacki' },
  { id:'fra', slug:'francuski', name:'Francuski jezik', sym:'Fr', color:'#60a5fa', group:'Strani jezici', status:SOON, runtime:'canonical', renderer:'language', levels:['A','B'], route:'/discere/francuski' },
  { id:'tal', slug:'talijanski', name:'Talijanski jezik', sym:'It', color:'#34d399', group:'Strani jezici', status:SOON, runtime:'canonical', renderer:'language', levels:['A','B'], route:'/discere/talijanski' },
  { id:'spn', slug:'spanjolski', name:'Španjolski jezik', sym:'Es', color:'#fb923c', group:'Strani jezici', status:SOON, runtime:'canonical', renderer:'language', levels:['A','B'], route:'/discere/spanjolski' },

  { id:'lat', slug:'latinski', name:'Latinski jezik', sym:'Lat', color:'#ff6b2b', group:'Klasični jezici', status:SOON, runtime:'canonical', renderer:'language', levels:['A','B'], route:'/discere/latinski' },
  { id:'grk', slug:'grcki', name:'Grčki jezik', sym:'Grk', color:'#fbbf24', group:'Klasični jezici', status:SOON, runtime:'canonical', renderer:'language', levels:['single'], route:'/discere/grcki' },

  { id:'bio', slug:'biologija', name:'Biologija', sym:'⊕', color:'#2dd4bf', group:'Prirodoslovno', status:QA, runtime:'canonical', renderer:'generic', levels:['single'], route:'/discere/biologija' },
  { id:'kem', slug:'kemija', name:'Kemija', sym:'⚗', color:'#34d399', group:'Prirodoslovno', status:SOON, runtime:'canonical', renderer:'generic', levels:['single'], route:'/discere/kemija' },
  { id:'fiz', slug:'fizika', name:'Fizika', sym:'⚡', color:'#fbbf24', group:'Prirodoslovno', status:SOON, runtime:'canonical', renderer:'generic', levels:['single'], route:'/discere/fizika' },
  { id:'inf', slug:'informatika', name:'Informatika', sym:'⌨', color:'#818cf8', group:'Prirodoslovno', status:SOON, runtime:'canonical', renderer:'generic', levels:['single'], route:'/discere/informatika' },

  { id:'pov', slug:'povijest', name:'Povijest', sym:'📜', color:'#fb923c', group:'Društveno', status:SOON, runtime:'canonical', renderer:'generic', levels:['single'], route:'/discere/povijest' },
  { id:'geo', slug:'geografija', name:'Geografija', sym:'◉', color:'#38bdf8', group:'Društveno', status:SOON, runtime:'canonical', renderer:'generic', levels:['single'], route:'/discere/geografija' },
  { id:'soc', slug:'sociologija', name:'Sociologija', sym:'⚖', color:'#ff6b2b', group:'Društveno', status:ACTIVE, runtime:'legacy', renderer:'legacy', levels:['single'], route:'/discere/sociologija' },
  { id:'psi', slug:'psihologija', name:'Psihologija', sym:'🧠', color:'#a78bfa', group:'Društveno', status:SOON, runtime:'canonical', renderer:'generic', levels:['single'], route:'/discere/psihologija' },
  { id:'pig', slug:'politika-i-gospodarstvo', name:'Politika i gospodarstvo', sym:'🏛', color:'#60a5fa', group:'Društveno', status:SOON, runtime:'canonical', renderer:'generic', levels:['single'], route:'/discere/politika-i-gospodarstvo' },
  { id:'fil', slug:'filozofija', name:'Filozofija', sym:'φ', color:'#f0abfc', group:'Društveno', status:SOON, runtime:'canonical', renderer:'generic', levels:['single'], route:'/discere/filozofija' },
  { id:'log', slug:'logika', name:'Logika', sym:'∴', color:'#7dd3fc', group:'Društveno', status:SOON, runtime:'canonical', renderer:'generic', levels:['single'], route:'/discere/logika' },

  { id:'lik', slug:'likovna-umjetnost', name:'Likovna umjetnost', sym:'🎨', color:'#f472b6', group:'Umjetnički', status:SOON, runtime:'canonical', renderer:'media', levels:['single'], route:'/discere/likovna-umjetnost' },
  { id:'gla', slug:'glazbena-umjetnost', name:'Glazbena umjetnost', sym:'♪', color:'#c084fc', group:'Umjetnički', status:SOON, runtime:'canonical', renderer:'media', levels:['single'], route:'/discere/glazbena-umjetnost' },

  { id:'eti', slug:'etika', name:'Etika', sym:'◇', color:'#6ee7b7', group:'Ostali izborni', status:SOON, runtime:'canonical', renderer:'generic', levels:['single'], route:'/discere/etika' },
  { id:'vje', slug:'vjeronauk', name:'Vjeronauk', sym:'✝', color:'#fcd34d', group:'Ostali izborni', status:SOON, runtime:'canonical', renderer:'generic', levels:['single'], route:'/discere/vjeronauk' },
]

export const DISCERE_SUBJECTS = SUBJECT_DEFINITIONS.map(subject => {
  const record=inventory.subjects.find(entry=>entry.id===subject.id)
  if(!record) throw new Error(`Missing subject inventory: ${subject.id}`)
  return {...subject,capabilities:record.capabilities,catalogue:record.catalogue}
})

export function getDiscereSubject(idOrSlug) {
  return DISCERE_SUBJECTS.find((subject) => subject.id === idOrSlug || subject.slug === idOrSlug) ?? null
}

export function getDiscereGroups() {
  return [...new Set(DISCERE_SUBJECTS.map((subject) => subject.group))]
}
import inventory from '../../content/learning/subject-inventory.json' with { type:'json' }
