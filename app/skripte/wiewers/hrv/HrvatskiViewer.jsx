'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  HRV_POGAVLJA_META,
} from '../../data/hrv-components'
import H06OnjeginTab from '../../data/hrv-components/H06_OnjeginTab'

const SECTION_ORDER = [
  'Književnost',
  'Stilska izražajna sredstva',
  'Jezikoslovlje',
  'Pravopis',
  'Pisanje',
]

function groupChapters(meta = []) {
  return SECTION_ORDER.map((section) => ({
    section,
    items: meta.filter((item) => item.sekcija === section),
  }))
}

function html(text) {
  return { __html: text || '' }
}

function normalizeTagClass(input) {
  if (!input) return 'tag-amber'
  if (input.startsWith('tag-')) return input
  return input
}

function normalizeConceptTone(input) {
  if (!input) return 'ck-grey'
  return input
}

function normalizeQuickCard(item = {}) {
  return {
    name: item.name || item.ime || '',
    sub: item.sub || item.opis || '',
    icon: item.icon || item.inicijali || '•',
    iconStyle:
      item.iconStyle || {
        background: 'rgba(184, 114, 10, 0.12)',
        borderColor: 'rgba(184, 114, 10, 0.25)',
        color: '#e09030',
      },
  }
}

function normalizeWork(work = {}) {
  const paragraphs = Array.isArray(work.proza)
    ? work.proza
    : work.text
      ? [work.text]
      : []

  return {
    title: work.title || work.naslov || '',
    paragraphs,
    quote: work.quote || work.citat
      ? {
          text: work.quote?.text || work.citat?.tekst || '',
          src: work.quote?.src || work.citat?.izvor || '',
        }
      : null,
    concepts: Array.isArray(work.concepts)
      ? work.concepts
      : Array.isArray(work.pojmovi)
        ? work.pojmovi.map((p) => ({
            label: p.label || p.kljuc || '',
            value: p.value || p.vrijednost || '',
            tone: normalizeConceptTone(p.tone || p.kljucStil),
          }))
        : [],
  }
}

function normalizeAuthor(author = {}) {
  const worksFromOld = Array.isArray(author.works) ? author.works : []
  const worksFromNew = Array.isArray(author.djela) ? author.djela : []
  const works = [...worksFromOld, ...worksFromNew].map(normalizeWork)

  const authorConcepts =
    Array.isArray(author.concepts)
      ? author.concepts
      : []

  const fromNewConcepts = Array.isArray(author.pojmovi)
    ? author.pojmovi.map((p) => ({
        label: p.label || p.kljuc || '',
        value: p.value || p.vrijednost || '',
        tone: normalizeConceptTone(p.tone || p.kljucStil),
      }))
    : []

  const normalizedConcepts =
    authorConcepts.length > 0
      ? authorConcepts
      : fromNewConcepts

  return {
    name: author.name || author.ime || '',
    meta: author.meta || '',
    badge: author.badge || author.inicijali || '•',
    badgeStyle:
      author.badgeStyle || {
        background: author.boja || '#2A6AB0',
        border: `1px solid ${author.boja || '#2A6AB0'}`,
      },
    paragraphs: Array.isArray(author.paragraphs)
      ? author.paragraphs
      : Array.isArray(author.proza)
        ? author.proza
        : [],
    works,
    quote: author.quote || author.citat
      ? {
          text: author.quote?.text || author.citat?.tekst || '',
          src: author.quote?.src || author.citat?.izvor || '',
        }
      : null,
    concepts: normalizedConcepts,
    conceptsTitle: author.conceptsTitle || 'Ključni pojmovi',
    callout: author.callout || null,
  }
}

function normalizeLearningUnit(unit = {}) {
  return {
    naziv: unit.naziv || '',
    definicija: unit.definicija || '',
    kakoPrepoznati: unit.kakoPrepoznati || '',
    primjeri: Array.isArray(unit.primjeri) ? unit.primjeri : [],
    razlika: unit.razlika || '',
    zamka: unit.zamka || '',
  }
}

function normalizeQuizItem(item = {}) {
  const optionsOld = Array.isArray(item.options) ? item.options : []
  const optionsNew = Array.isArray(item.opcije) ? item.opcije : []

  const options = (optionsOld.length ? optionsOld : optionsNew).map((option) => ({
    label: option.label || option.slovo || '',
    text: option.text || option.tekst || '',
    correct:
      typeof option.correct === 'boolean'
        ? option.correct
        : !!option.tocno,
  }))

  return {
    id: item.id || `q-${Math.random()}`,
    meta:
      item.meta ||
      [item.kategorija, item.tip].filter(Boolean).join(' · ') ||
      'Pitanje',
    text: item.text || item.pitanje || '',
    options,
    explanationCorrect:
      item.explanationCorrect || item.objasnjenje?.tocno || '',
    explanationWrong:
      item.explanationWrong || item.objasnjenje?.netocno || '',
  }
}

function normalizePracticeQuestion(item = {}, index = 0) {
  const offered = Array.isArray(item.ponudeniOdgovori) ? item.ponudeniOdgovori : []

  const options = offered.map((tekst, i) => ({
    label: String.fromCharCode(65 + i),
    text: tekst,
    correct: i === item.tocanOdgovor,
  }))

  return {
    id: item.id || `practice-${index + 1}`,
    meta: 'Pitanje za vježbu',
    text: item.pitanje || '',
    options,
    explanationCorrect: item.objasnjenje || 'Točno.',
    explanationWrong: item.objasnjenje || 'Pogledaj ponovno objašnjenje i gradivo.',
  }
}

function normalizeWritingGuide(raw = {}) {
  return {
    koraciPisanja: Array.isArray(raw.koraciPisanja) ? raw.koraciPisanja : [],
    strukturaEseja: raw.strukturaEseja || null,
    kakoNapisati: raw.kakoNapisati || null,
    kakoPlaniratiNaIspitu: raw.kakoPlaniratiNaIspitu || null,
    kakoNapisatiUvod: raw.kakoNapisatiUvod || null,
    kakoPostavitiTezu: raw.kakoPostavitiTezu || null,
    kakoPisatiRazradu: raw.kakoPisatiRazradu || null,
    kakoKoristitiPrimjereIzDjela: raw.kakoKoristitiPrimjereIzDjela || null,
    interpretacijaVsPrepricavanje: raw.interpretacijaVsPrepricavanje || null,
    kakoPisatiJasno: raw.kakoPisatiJasno || null,
    kakoNapisatiZakljucak: raw.kakoNapisatiZakljucak || null,
    kakoOdreditiTemu: raw.kakoOdreditiTemu || null,
    kakoOdreditiGlavnuMisao: raw.kakoOdreditiGlavnuMisao || null,
    kakoIzdvojitiBitno: raw.kakoIzdvojitiBitno || null,
    kakoPreoblikovati: raw.kakoPreoblikovati || null,
    objektivnost: raw.objektivnost || null,
    kakoPovezatiRecenice: raw.kakoPovezatiRecenice || raw.povezivanjeRecenica || null,
    kakoSkratitiBezGubitkaSmisla: raw.kakoSkratitiBezGubitkaSmisla || raw.skracivanjeTeksta || null,
    stoJeSazetak: raw.stoJeSazetak || null,
    stoNijeSazetak: raw.stoNijeSazetak || null,
    stoUlaziUSazetak: raw.stoUlaziUSazetak || null,
    stoNeUlaziUSazetak: raw.stoNeUlaziUSazetak || null,
    alatiPisanja: raw.alatiPisanja || null,
    modelSazimanja: raw.modelSazimanja || null,
    primjerDobrogSazetka: raw.primjerDobrogSazetka || null,
    primjerLosegSazetka: raw.primjerLosegSazetka || null,
    dobarOdlomakModel: raw.dobarOdlomakModel || null,
    losOdlomakModel: raw.losOdlomakModel || null,
    checklista: raw.checklista || null,
  }
}

function normalizeChapter(chapter, chapterMeta) {
  if (!chapter) return null

  const tags = Array.isArray(chapter.tagovi)
    ? chapter.tagovi.map((tag) => ({
        text: tag.text || tag.tekst || '',
        className: normalizeTagClass(tag.className || tag.stil),
      }))
    : []

  const quickCardsOld = Array.isArray(chapter.quickCards) ? chapter.quickCards : []
  const quickCardsNew = Array.isArray(chapter.brzoUci?.qkartice)
    ? chapter.brzoUci.qkartice
    : []

  const quickCards = (quickCardsOld.length ? quickCardsOld : quickCardsNew).map(normalizeQuickCard)

  const introOld = Array.isArray(chapter.uvod) ? chapter.uvod : []
  const introNew = chapter.gradivo?.uvod?.tekst ? [chapter.gradivo.uvod.tekst] : []

  const authorsOld = Array.isArray(chapter.autori) ? chapter.autori : []
  const authorsNew = Array.isArray(chapter.gradivo?.autori) ? chapter.gradivo.autori : []

  const learningUnits = Array.isArray(chapter.gradivo?.cjeline)
    ? chapter.gradivo.cjeline.map(normalizeLearningUnit)
    : []

  const commonTraps = Array.isArray(chapter.gradivo?.zajednickeZamke?.stavke)
    ? chapter.gradivo.zajednickeZamke.stavke
    : []

  const miniExercises = Array.isArray(chapter.gradivo?.miniVjezbe?.zadaci)
    ? chapter.gradivo.miniVjezbe.zadaci
    : []

  const noteOld = chapter.napomena || null
  const noteNew = chapter.brzoUci?.callout || chapter.gradivo?.uvod
    ? {
        title: chapter.brzoUci?.callout?.naslov || chapter.gradivo?.uvod?.naslov || 'Napomena',
        text: chapter.brzoUci?.callout?.tekst || '',
      }
    : null

  const otherAuthorsOld = Array.isArray(chapter.ostaliAutori) ? chapter.ostaliAutori : []
  const sharedConceptsNew = Array.isArray(chapter.gradivo?.zajednickiPojmovi?.pojmovi)
    ? chapter.gradivo.zajednickiPojmovi.pojmovi.map((p) => ({
        label: p.label || p.kljuc || '',
        value: p.value || p.vrijednost || '',
        tone: normalizeConceptTone(p.tone || p.kljucStil),
      }))
    : []

  const quizOld = Array.isArray(chapter.quiz) ? chapter.quiz : []
  const quizNew = Array.isArray(chapter.ispit?.kviz) ? chapter.ispit.kviz : []

  const practiceQuestions = Array.isArray(chapter.ispit?.pitanjaZaVjezbu?.pitanja)
    ? chapter.ispit.pitanjaZaVjezbu.pitanja.map(normalizePracticeQuestion)
    : []

  const mergedQuiz = [
    ...practiceQuestions,
    ...(quizOld.length ? quizOld : quizNew).map(normalizeQuizItem),
  ]

  const najcescaPitanja = Array.isArray(chapter.ispit?.najcescaPitanja?.pitanja)
    ? chapter.ispit.najcescaPitanja.pitanja
    : []

  const maturaHint = chapter.ispit?.maturaHint || null
  const esejReady = chapter.ispit?.esejReady || null

  const ctaOld = chapter.cta || null
  const ctaNew = {
    eyebrow: 'Discere',
    title: 'Nastavi vježbati u punoj verziji',
    sub: 'Više pitanja\nViše predmeta\nPametnije ponavljanje',
    button: 'Otvori Discere',
    href: '#',
  }

  const maturaOld = Array.isArray(chapter.zaMaturuTrebaZnati)
    ? chapter.zaMaturuTrebaZnati
    : []
  const maturaNew = Array.isArray(chapter.ispit?.matura)
    ? chapter.ispit.matura
    : []

  const tabsOld = Array.isArray(chapter.tabs) ? chapter.tabs : []
  const tabsFromLabels = chapter.tabLabels
    ? [
        chapter.tabLabels.tab0 || 'Brzi pregled',
        chapter.tabLabels.tab1 || 'Gradivo',
        chapter.tabLabels.tab2 || 'Ispit',
      ]
    : []

  const tabs = tabsOld.length
    ? tabsOld
    : tabsFromLabels.length
      ? tabsFromLabels
      : ['Brzi pregled', 'Gradivo', 'Ispit']

  return {
    id: chapter.id || chapterMeta?.id || '',
    redniBroj: chapter.redniBroj || chapter.broj || chapterMeta?.broj || 1,
    naslov: chapter.naslov || chapter.naziv || chapterMeta?.naslov || 'Poglavlje',
    naziv: chapter.naziv || chapter.naslov || chapterMeta?.naslov || 'Poglavlje',
    breadcrumb:
      Array.isArray(chapter.breadcrumb) && chapter.breadcrumb.length >= 2
        ? chapter.breadcrumb
        : ['Hrvatski jezik', chapter.naziv || chapter.naslov || chapterMeta?.naslov || 'Poglavlje'],
    period: chapter.period || '',
    tabs,
    tagovi: tags,
    quickCards,
    uvod: introOld.length ? introOld : introNew,
    hrvatskaPismenost: Array.isArray(chapter.hrvatskaPismenost) ? chapter.hrvatskaPismenost : [],
    autori: (authorsOld.length ? authorsOld : authorsNew).map(normalizeAuthor),
    cjeline: learningUnits,
    zajednickeZamkeNaslov:
      chapter.gradivo?.zajednickeZamke?.naslov || 'Najčešće zamke',
    zajednickeZamke: commonTraps,
    miniVjezbeNaslov:
      chapter.gradivo?.miniVjezbe?.naslov || 'Mini vježbe',
    miniVjezbe: miniExercises,
    napomena: noteOld || noteNew || { title: 'Napomena', text: '' },
    ostaliAutori: otherAuthorsOld.length
      ? otherAuthorsOld
      : sharedConceptsNew,
    quizIntro:
      chapter.quizIntro ||
      'Odgovori na pitanja i provjeri koliko si spreman za ispit.',
    quiz: mergedQuiz,
    cta: ctaOld || ctaNew,
    zaMaturuTrebaZnati: maturaOld.length ? maturaOld : maturaNew,
    ispitNajcescaPitanja: najcescaPitanja,
    ispitMaturaHint: maturaHint,
    ispitEsejReady: esejReady,
    pisanje: normalizeWritingGuide(chapter.gradivo || {}),
    pravopis: {
      pravila: Array.isArray(chapter.gradivo?.pravila) ? chapter.gradivo.pravila : [],
      najcesceGreske: chapter.gradivo?.najcesceGreske || null,
      tocnoNetocno: chapter.gradivo?.tocnoNetocno || null,
      miniTablice: Array.isArray(chapter.gradivo?.miniTablice) ? chapter.gradivo.miniTablice : [],
      dodatneZamke: chapter.gradivo?.dodatneZamke || null,
    },
  }
}

function Tag({ children, className = '' }) {
  return <span className={`tag ${className}`}>{children}</span>
}

function HtmlBlock({ text, className }) {
  return <div className={className} dangerouslySetInnerHTML={html(text)} />
}

function QuickCard({ item }) {
  return (
    <div className="qcard">
      <div className="qcard-top">
        <div className="qcard-icon" style={item.iconStyle}>
          {item.icon}
        </div>
        <div className="qcard-name">{item.name}</div>
      </div>
      <div className="qcard-sub">{item.sub}</div>
    </div>
  )
}

function ConceptRow({ label, value, tone = 'ck-grey' }) {
  return (
    <div className="concept-row">
      <div className={`concept-key ${tone}`}>
        <div className="concept-key-text">{label}</div>
      </div>
      <div className="concept-val" dangerouslySetInnerHTML={html(value)} />
    </div>
  )
}

function AuthorBlock({ author }) {
  return (
    <div className="author-block">
      <div className="author-header">
        <div className="author-badge" style={author.badgeStyle}>
          {author.badge}
        </div>
        <div>
          <div className="author-name">{author.name}</div>
          <div className="author-meta">{author.meta}</div>
        </div>
      </div>

      <div className="author-body">
        {(author.paragraphs || []).map((p, i) => (
          <HtmlBlock className="prose" text={p} key={i} />
        ))}

        {(author.works || []).map((work) => (
          <div key={work.title}>
            <span className="work-title">{work.title}</span>

            {(work.paragraphs || []).map((p, i) => (
              <HtmlBlock className="prose" text={p} key={`${work.title}-${i}`} />
            ))}

            {work.quote && (
              <div className="quote-box">
                <div className="quote-text" dangerouslySetInnerHTML={html(work.quote.text)} />
                <div className="quote-src" dangerouslySetInnerHTML={html(work.quote.src)} />
              </div>
            )}

            {(work.concepts || []).length > 0 && (
              <>
                <div className="sec-label" style={{ marginTop: 20 }}>
                  Ključni pojmovi
                </div>
                <div className="pojam-table">
                  {work.concepts.map((item) => (
                    <ConceptRow
                      key={`${work.title}-${item.label}`}
                      label={item.label}
                      value={item.value}
                      tone={item.tone}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}

        {author.quote && (
          <div className="quote-box">
            <div className="quote-text" dangerouslySetInnerHTML={html(author.quote.text)} />
            <div className="quote-src" dangerouslySetInnerHTML={html(author.quote.src)} />
          </div>
        )}

        {(author.concepts || []).length > 0 && (
          <>
            <div className="sec-label" style={{ marginTop: 20 }}>
              {author.conceptsTitle || 'Ključni pojmovi'}
            </div>
            <div className="pojam-table">
              {author.concepts.map((item) => (
                <ConceptRow
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  tone={item.tone}
                />
              ))}
            </div>
          </>
        )}

        {author.callout?.tekst && (
          <div className="callout callout-info" style={{ marginTop: 16 }}>
            <span className="callout-icon">{author.callout.ikona || 'ℹ'}</span>
            <div className="callout-body">
              <div className="callout-title">{author.callout.naslov || 'Napomena'}</div>
              <div className="callout-text" dangerouslySetInnerHTML={html(author.callout.tekst)} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function LearningUnitBlock({ unit }) {
  return (
    <div className="author-block">
      <div className="author-header">
        <div
          className="author-badge"
          style={{
            background: '#b8720a',
            border: '1px solid #b8720a',
          }}
        >
          {unit.naziv?.slice(0, 2).toUpperCase() || '•'}
        </div>
        <div>
          <div className="author-name">{unit.naziv}</div>
          <div className="author-meta">
            Figura riječi · definicija, prepoznavanje i ispitne zamke
          </div>
        </div>
      </div>

      <div className="author-body">
        {unit.definicija && (
          <>
            <div className="sec-label" style={{ marginTop: 0 }}>Definicija</div>
            <div className="prose">{unit.definicija}</div>
          </>
        )}

        {unit.kakoPrepoznati && (
          <>
            <div className="sec-label" style={{ marginTop: 20 }}>Kako prepoznati</div>
            <div className="prose">{unit.kakoPrepoznati}</div>
          </>
        )}

        {(unit.primjeri || []).length > 0 && (
          <>
            <div className="sec-label" style={{ marginTop: 20 }}>Primjeri</div>
            <div className="pojam-table">
              {unit.primjeri.map((primjer, i) => (
                <div className="concept-row" key={i}>
                  <div className="concept-key ck-amber">
                    <div className="concept-key-text">Primjer {i + 1}</div>
                  </div>
                  <div className="concept-val">{primjer}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {unit.razlika && (
          <>
            <div className="sec-label" style={{ marginTop: 20 }}>
              Razlika / ne brkaj s...
            </div>
            <div className="prose">{unit.razlika}</div>
          </>
        )}

        {unit.zamka && (
          <div className="callout callout-info" style={{ marginTop: 20 }}>
            <span className="callout-icon">⚠</span>
            <div className="callout-body">
              <div className="callout-title">Ispitna zamka</div>
              <div className="callout-text">{unit.zamka}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function QuizBlock({ item, answer, onAnswer }) {
  return (
    <div className="q-block">
      <div className="q-header">
        <div className="q-meta">{item.meta}</div>
        <div className="q-text">{item.text}</div>
      </div>

      <div className="q-options">
        {(item.options || []).map((option) => {
          const isAnswered = !!answer
          const isChosen = answer?.selected === option.label
          const isCorrect = option.correct

          let className = 'q-opt'
          if (isAnswered) {
            className += ' disabled'
            if (isCorrect) className += ' correct'
            if (isChosen && !isCorrect) className += ' wrong'
          }

          return (
            <button
              key={option.label}
              type="button"
              className={className}
              onClick={() => onAnswer(item.id, option.label, option.correct)}
            >
              <span className="q-letter">{option.label}</span>
              {option.text}
            </button>
          )
        })}
      </div>

      {answer && (
        <div className="q-expl">
          <div className={answer.correct ? 'expl-c' : 'expl-w'}>
            {answer.correct ? item.explanationCorrect : item.explanationWrong}
          </div>
        </div>
      )}
    </div>
  )
}

function WritingChecklist({ title, items }) {
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <>
      <hr className="divider" />
      <div className="sec-label">{title}</div>
      <div className="matura-box" style={{ marginTop: 0 }}>
        <div className="matura-header">{title}</div>
        <ul className="matura-list">
          {items.map((item, index) => (
            <li className="matura-item" key={`${title}-${index}`}>
              <div className="mi-diamond" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

function WritingKeyValueCards({ title, items, leftKey = 'naziv', rightKey = 'opis' }) {
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <>
      <hr className="divider" />
      <div className="sec-label">{title}</div>
      <div className="pojam-table">
        {items.map((item, index) => (
          <div className="concept-row" key={`${title}-${index}`}>
            <div className="concept-key ck-teal">
              <div className="concept-key-text">{item[leftKey]}</div>
            </div>
            <div className="concept-val">{item[rightKey]}</div>
          </div>
        ))}
      </div>
    </>
  )
}

function WritingStepCards({ title, items }) {
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <>
      <hr className="divider" />
      <div className="sec-label">{title}</div>
      <div className="writing-grid">
        {items.map((item, index) => (
          <div className="writing-card" key={`${title}-${index}`}>
            <div className="writing-card-title">{item.naziv}</div>
            {item.stoRadis && <div className="writing-card-text">{item.stoRadis}</div>}
            {item.zamka && (
              <div className="writing-mini-callout">
                <strong>Zamka:</strong> {item.zamka}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

function WritingStructureBlock({ block }) {
  if (!block?.dijelovi?.length) return null

  return (
    <>
      <hr className="divider" />
      <div className="sec-label">{block.naslov || 'Struktura'}</div>
      <div className="writing-grid">
        {block.dijelovi.map((item, index) => (
          <div className="writing-card" key={`${block.naslov}-${index}`}>
            <div className="writing-card-title">{item.dio}</div>
            {item.svrha && (
              <div className="writing-card-meta">
                <strong>Svrha:</strong> {item.svrha}
              </div>
            )}
            {item.stoSadrzi && <div className="writing-card-text">{item.stoSadrzi}</div>}
          </div>
        ))}
      </div>
    </>
  )
}

function WritingGuideSection({ section }) {
  if (!section) return null

  const listFields = [
    ['savjeti', 'Savjeti'],
    ['formula', 'Formula'],
    ['tehnike', 'Tehnike'],
    ['planModel', 'Model plana'],
    ['stoZadrzati', 'Što zadržati'],
    ['stoIzbaciti', 'Što izbaciti'],
    ['dobriPrimjeri', 'Dobri primjeri'],
    ['losiPrimjeri', 'Loši primjeri'],
    ['tocno', 'Točno'],
    ['netocno', 'Netočno'],
    ['stavke', 'Stavke'],
  ]

  return (
    <>
      <hr className="divider" />
      <div className="sec-label">{section.naslov || 'Vodič'}</div>

      {section.tekst && <div className="prose">{section.tekst}</div>}

      {Array.isArray(section.koraci) && section.koraci.length > 0 && (
        <div className="writing-grid">
          {section.koraci.map((item, index) => (
            <div className="writing-card" key={`${section.naslov}-korak-${index}`}>
              <div className="writing-card-title">{item.korak}</div>
              <div className="writing-card-text">{item.objasnjenje}</div>
            </div>
          ))}
        </div>
      )}

      {listFields.map(([field, label]) =>
        Array.isArray(section[field]) && section[field].length > 0 ? (
          <div key={`${section.naslov}-${field}`} style={{ marginTop: 18 }}>
            <div className="subsec-label">{label}</div>
            <ul className="writing-list">
              {section[field].map((item, index) => (
                <li key={`${field}-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null
      )}

      {section.model && (
        <div className="quote-box" style={{ marginTop: 18 }}>
          <div className="quote-text">{section.model}</div>
        </div>
      )}

      {section.miniPravilo && (
        <div className="callout callout-info" style={{ marginTop: 18 }}>
          <span className="callout-icon">ℹ</span>
          <div className="callout-body">
            <div className="callout-title">Mini pravilo</div>
            <div className="callout-text">{section.miniPravilo}</div>
          </div>
        </div>
      )}

      {section.upozorenje && (
        <div className="callout callout-info" style={{ marginTop: 18 }}>
          <span className="callout-icon">⚠</span>
          <div className="callout-body">
            <div className="callout-title">Upozorenje</div>
            <div className="callout-text">{section.upozorenje}</div>
          </div>
        </div>
      )}

      {section.zamka && (
        <div className="callout callout-info" style={{ marginTop: 18 }}>
          <span className="callout-icon">⚠</span>
          <div className="callout-body">
            <div className="callout-title">Najčešća zamka</div>
            <div className="callout-text">{section.zamka}</div>
          </div>
        </div>
      )}

      {Array.isArray(section.usporedba) && section.usporedba.length > 0 && (
        <div className="writing-grid" style={{ marginTop: 18 }}>
          {section.usporedba.map((item, index) => (
            <div className="writing-card" key={`${section.naslov}-usporedba-${index}`}>
              {item.prepricavanje && (
                <>
                  <div className="writing-card-meta"><strong>Prepričavanje</strong></div>
                  <div className="writing-card-text">{item.prepricavanje}</div>
                </>
              )}
              {item.interpretacija && (
                <>
                  <div className="writing-card-meta" style={{ marginTop: 12 }}>
                    <strong>Interpretacija</strong>
                  </div>
                  <div className="writing-card-text">{item.interpretacija}</div>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {section.primjer && (
        <div className="quote-box" style={{ marginTop: 18 }}>
          <div className="quote-text">{section.primjer}</div>
          {section.objasnjenje && <div className="quote-src">{section.objasnjenje}</div>}
        </div>
      )}
    </>
  )
}

function WritingTabContent({ chapter }) {
  const writing = chapter.pisanje || {}

  return (
    <div className="layer">
      {(chapter.uvod || []).length > 0 && (
        <>
          <div className="sec-label">Uvod u gradivo</div>
          {(chapter.uvod || []).map((p, i) => (
            <HtmlBlock className="prose" text={p} key={i} />
          ))}
        </>
      )}

      <WritingStepCards title="Koraci pisanja" items={writing.koraciPisanja} />
      <WritingStructureBlock block={writing.strukturaEseja} />

      <WritingGuideSection section={writing.kakoNapisati} />
      <WritingGuideSection section={writing.kakoPlaniratiNaIspitu} />
      <WritingGuideSection section={writing.kakoNapisatiUvod} />
      <WritingGuideSection section={writing.kakoPostavitiTezu} />
      <WritingGuideSection section={writing.kakoPisatiRazradu} />
      <WritingGuideSection section={writing.kakoKoristitiPrimjereIzDjela} />
      <WritingGuideSection section={writing.interpretacijaVsPrepricavanje} />
      <WritingGuideSection section={writing.kakoPisatiJasno} />
      <WritingGuideSection section={writing.kakoNapisatiZakljucak} />
      <WritingGuideSection section={writing.stoJeSazetak} />
      <WritingGuideSection section={writing.stoNijeSazetak} />
      <WritingGuideSection section={writing.stoUlaziUSazetak} />
      <WritingGuideSection section={writing.stoNeUlaziUSazetak} />
      <WritingGuideSection section={writing.kakoOdreditiTemu} />
      <WritingGuideSection section={writing.kakoOdreditiGlavnuMisao} />
      <WritingGuideSection section={writing.kakoIzdvojitiBitno} />
      <WritingGuideSection section={writing.kakoPreoblikovati} />
      <WritingGuideSection section={writing.objektivnost} />
      <WritingGuideSection section={writing.kakoPovezatiRecenice} />
      <WritingGuideSection section={writing.kakoSkratitiBezGubitkaSmisla} />
      <WritingGuideSection section={writing.modelSazimanja} />

      <WritingKeyValueCards
        title={writing.alatiPisanja?.naslov || 'Alati za pisanje'}
        items={writing.alatiPisanja?.stavke}
      />

      {writing.dobarOdlomakModel && <WritingGuideSection section={writing.dobarOdlomakModel} />}
      {writing.losOdlomakModel && <WritingGuideSection section={writing.losOdlomakModel} />}
      {writing.primjerDobrogSazetka && <WritingGuideSection section={writing.primjerDobrogSazetka} />}
      {writing.primjerLosegSazetka && <WritingGuideSection section={writing.primjerLosegSazetka} />}

      {chapter.zajednickeZamke?.length > 0 && (
        <WritingChecklist
          title={chapter.zajednickeZamkeNaslov || 'Najčešće zamke'}
          items={chapter.zajednickeZamke}
        />
      )}

      {writing.checklista?.stavke?.length > 0 && (
        <WritingChecklist
          title={writing.checklista.naslov || 'Checklista'}
          items={writing.checklista.stavke}
        />
      )}

      <div className="nav-row">
        <button
          type="button"
          className="nav-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑ Na vrh
        </button>
      </div>
    </div>
  )
}

function PravopisTabContent({ chapter, setActiveTab }) {
  const pravopis = chapter.pravopis || {}

  return (
    <div className="layer">
      {(chapter.uvod || []).length > 0 && (
        <>
          <div className="sec-label">Uvod u gradivo</div>
          {(chapter.uvod || []).map((p, i) => (
            <HtmlBlock className="prose" text={p} key={i} />
          ))}
        </>
      )}

      {Array.isArray(pravopis.pravila) && pravopis.pravila.length > 0 && (
        <>
          <hr className="divider" />
          <div className="sec-label">Pravopisna pravila</div>

          <div className="writing-grid">
            {pravopis.pravila.map((rule, index) => (
              <div className="writing-card" key={`pravilo-${index}`}>
                <div className="writing-card-title">{rule.naziv}</div>

                {rule.pravilo && (
                  <div className="writing-card-text" style={{ marginBottom: 12 }}>
                    {rule.pravilo}
                  </div>
                )}

                {Array.isArray(rule.tocno) && rule.tocno.length > 0 && (
                  <>
                    <div className="subsec-label">Točno</div>
                    <ul className="writing-list">
                      {rule.tocno.map((item, i) => (
                        <li key={`tocno-${index}-${i}`}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {Array.isArray(rule.netocno) && rule.netocno.length > 0 && (
                  <>
                    <div className="subsec-label">Netočno</div>
                    <ul className="writing-list">
                      {rule.netocno.map((item, i) => (
                        <li key={`netocno-${index}-${i}`}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {rule.zamka && (
                  <div className="writing-mini-callout">
                    <strong>Zamka:</strong> {rule.zamka}
                  </div>
                )}

                {rule.miniNapomena && (
                  <div className="writing-mini-callout" style={{ marginTop: 10 }}>
                    <strong>Napomena:</strong> {rule.miniNapomena}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {pravopis.najcesceGreske?.stavke?.length > 0 && (
        <>
          <hr className="divider" />
          <div className="sec-label">
            {pravopis.najcesceGreske.naslov || 'Najčešće greške'}
          </div>

          <div className="pojam-table">
            {pravopis.najcesceGreske.stavke.map((item, index) => (
              <div className="concept-row" key={`greska-${index}`}>
                <div className="concept-key ck-rose">
                  <div className="concept-key-text">{item.pogresno}</div>
                </div>
                <div className="concept-val">
                  <div><strong>Pravilno:</strong> {item.pravilno}</div>
                  {item.zasto && (
                    <div style={{ marginTop: 8 }}>
                      <strong>Zašto:</strong> {item.zasto}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {pravopis.tocnoNetocno?.primjeri?.length > 0 && (
        <>
          <hr className="divider" />
          <div className="sec-label">
            {pravopis.tocnoNetocno.naslov || 'Točno i netočno'}
          </div>

          <div className="pojam-table">
            {pravopis.tocnoNetocno.primjeri.map((item, index) => (
              <div className="concept-row" key={`tn-${index}`}>
                <div className="concept-key ck-teal">
                  <div className="concept-key-text">{item.tocno}</div>
                </div>
                <div className="concept-val">
                  <strong>Netočno:</strong> {item.netocno}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {Array.isArray(pravopis.miniTablice) && pravopis.miniTablice.length > 0 && (
        <>
          {pravopis.miniTablice.map((table, tableIndex) => (
            <div key={`mini-tablica-${tableIndex}`}>
              <hr className="divider" />
              <div className="sec-label">{table.naslov || 'Mini tablica'}</div>

              <div className="pojam-table">
                {(table.redovi || []).map((row, rowIndex) => (
                  <div className="concept-row" key={`row-${tableIndex}-${rowIndex}`}>
                    <div className="concept-key ck-amber">
                      <div className="concept-key-text">{row[0]}</div>
                    </div>
                    <div className="concept-val">
                      {row.slice(1).map((cell, i) => (
                        <div key={i} style={{ marginBottom: i === row.length - 2 ? 0 : 6 }}>
                          {cell}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}

      {pravopis.dodatneZamke?.stavke?.length > 0 && (
        <>
          <hr className="divider" />
          <div className="sec-label">
            {pravopis.dodatneZamke.naslov || 'Brze zamke za maturu'}
          </div>

          <div className="matura-box" style={{ marginTop: 0 }}>
            <div className="matura-header">
              {pravopis.dodatneZamke.naslov || 'Brze zamke za maturu'}
            </div>
            <ul className="matura-list">
              {pravopis.dodatneZamke.stavke.map((item, index) => (
                <li className="matura-item" key={`dz-${index}`}>
                  <div className="mi-diamond" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {(chapter.miniVjezbe || []).length > 0 && (
        <>
          <hr className="divider" />
          <div className="sec-label">{chapter.miniVjezbeNaslov || 'Mikro vježbe'}</div>
          <div className="pojam-table">
            {(chapter.miniVjezbe || []).map((item, i) => (
              <div className="concept-row" key={i}>
                <div className="concept-key ck-teal">
                  <div className="concept-key-text">Rješenje</div>
                </div>
                <div className="concept-val">
                  <div><strong>{item.tekst}</strong></div>
                  <div style={{ marginTop: 6, opacity: 0.85 }}>{item.pitanje}</div>
                  <div style={{ marginTop: 10 }}>
                    <strong>Odgovor:</strong> {item.odgovor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="nav-row">
        <button
          type="button"
          className="nav-btn"
          onClick={() => setActiveTab(0)}
        >
          ← Brzi pregled
        </button>
        <button
          type="button"
          className="nav-btn primary"
          onClick={() => setActiveTab(2)}
        >
          Vježbaj za ispit →
        </button>
      </div>
    </div>
  )
}

function OverviewPanel({ chapters, groupedSections, onChapterClick, onChapterPrefetch }) {
  const implementedCount = chapters.filter((c) => c.implemented).length
  return (
    <div className="overview-panel">
      <div className="overview-eyebrow">📚 Pregled sadržaja</div>
      <h1 className="overview-title">Hrvatski jezik — Skripte</h1>
      <p className="overview-sub">
        {implementedCount} od {chapters.length} poglavlja dostupno ·{' '}
        Književnost · Stilska sredstva · Jezikoslovlje · Pravopis · Pisanje
      </p>
      <div className="overview-sections">
        {groupedSections.map((group) => (
          <div key={group.section} className="overview-group">
            <div className="overview-group-title">{group.section}</div>
            <div className="overview-chapter-list">
              {group.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`overview-ch-btn ${!item.implemented ? 'dim' : ''}`}
                  onClick={() => item.implemented && onChapterClick(item.id)}
                  onMouseEnter={() => onChapterPrefetch?.(item.id)}
                  onFocus={() => onChapterPrefetch?.(item.id)}
                  disabled={!item.implemented}
                >
                  <span className="overview-ch-num">{item.broj}</span>
                  <div className="overview-ch-info">
                    <span className="overview-ch-title">{item.naslov}</span>
                    <span className="overview-ch-opis">{item.opis}</span>
                  </div>
                  {item.implemented
                    ? <span className="overview-ch-arrow">→</span>
                    : <span className="overview-ch-soon">Uskoro</span>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

async function handlePricingCheckout(tier) {
  if (tier === 'free') { window.location.href = '/skripte'; return }
  const plan = tier === 'standard' ? 'starter' : 'pro'
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan }),
  })
  const data = await res.json()
  if (data.url) { window.location.href = data.url }
  else if (data.error === 'Nisi prijavljen') { window.location.href = '/auth' }
  else { alert('Greška: ' + data.error) }
}

const PRICING_TIERS = [
  {
    id: 'free', name: '🆓 Free', tagline: 'Učenje teorije + osnovni alati',
    price: '0€', per: '/uvijek', color: '#4aad72', colorRgb: '74,173,114',
    ctaText: 'Krenuti besplatno', ctaFill: false,
    features: [
      { ok:true,  icon:'✅', t:'Cijela teorija — sve skripte i kvizovi' },
      { ok:true,  icon:'✅', t:'NCVVO greške + cheat-sheet' },
      { ok:true,  icon:'✅', t:'Pojmovnici i mnemotehnike' },
      { ok:true,  icon:'✅', t:'Kalkulator bodova' },
      { ok:true,  icon:'✅', t:'Speed Drill + Proofreading game' },
      { ok:true,  icon:'✅', t:'Plagijat + objektivnost detektor' },
      { ok:true,  icon:'⭐', t:'1 esej + 1 sažetak Workspace' },
      { ok:false, icon:'❌', t:'Discere simulatori (svih 70)' },
      { ok:false, icon:'❌', t:'Modelne eseje + sažetke' },
      { ok:false, icon:'❌', t:'Parent dashboard + statistika' },
      { ok:false, icon:'❌', t:'AI features' },
    ],
  },
  {
    id: 'standard', name: '⭐ Standard', tagline: 'Vježbanje + alati za roditelje',
    price: '9,99€', per: '/mj', color: '#ff6b2b', colorRgb: '255,107,43',
    ctaText: 'Pretplati se na Standard', ctaFill: true,
    features: [
      { ok:true,  icon:'✅', t:'Sve iz Free' },
      { ok:true,  icon:'⭐', t:'70 Discere simulatora' },
      { ok:true,  icon:'⭐', t:'Neograničeno u Workspace' },
      { ok:true,  icon:'✅', t:'Svih 9 modelnih eseja (H27)' },
      { ok:true,  icon:'✅', t:'Svih 10 modelnih sažetaka (H28)' },
      { ok:true,  icon:'✅', t:'Export u clipboard / .txt' },
      { ok:true,  icon:'⭐', t:'Parent dashboard' },
      { ok:true,  icon:'✅', t:'Streak + heatmap + statistika' },
      { ok:true,  icon:'✅', t:'Plan učenja (full)' },
      { ok:false, icon:'❌', t:'AI features' },
    ],
  },
  {
    id: 'pro', name: '💎 Pro', tagline: 'AI personalizacija — kao osobni tutor',
    price: '19,99€', per: '/mj', color: '#4b7bff', colorRgb: '75,123,255',
    recommended: true, ctaText: 'Pretplati se na Pro', ctaFill: true,
    features: [
      { ok:true, icon:'✅', t:'Sve iz Standard' },
      { ok:true, icon:'🤖', t:'AI Profesor (chat) — 30 poruka/dan' },
      { ok:true, icon:'🤖', t:'AI Feedback za eseje (H27)' },
      { ok:true, icon:'🤖', t:'AI Feedback za sažetke (H28)' },
      { ok:true, icon:'🤖', t:'20 AI feedbackova / dan' },
      { ok:true, icon:'⭐', t:'Personalizirani plan učenja' },
      { ok:true, icon:'⭐', t:'Prijemni priprema' },
      { ok:true, icon:'✅', t:'Priority AI queue + email support' },
    ],
  },
]

const PRICING_FAQ = [
  { q:'Mogu li otkazati pretplatu kad god?', a:'Da, pretplatu možeš otkazati u bilo koje vrijeme kroz profil. Zadržavaš pristup do kraja platnog razdoblja, a zatim se vraćaš na Free tier. Bez kazni, bez skrivenih troškova.' },
  { q:'Što ako želim probati Pro samo na kratko?', a:'Pretplata je mjesečna — pretplati se za 1 mjesec, isprobaj AI Profesor i AI Feedback, pa otkaži ako ne želiš nastaviti. Bez ugovora i bez minimalnog razdoblja.' },
  { q:'Što je razlika između AI Profesora i AI Feedbacka?', a:'AI Profesor (chat) je interaktivni asistent kojemu možeš postavljati pitanja 24/7. AI Feedback analizira tvoj esej ili sažetak po 4–5 kriterija (struktura, argumentacija, stil, pismenost) i daje konkretne preporuke + procjenu ocjene.' },
  { q:'Što je „Prijemni" u Pro tieru?', a:'Pro tier uključuje pripremu za fakultetske prijemne ispite (medicina, pravo, FER, FSB, Filozofski, Ekonomski…). Sadržaj se temelji na arhivi prijemnih ispita iz prošlih godina + AI personalizirani plan vježbanja.' },
  { q:'Mogu li promijeniti tier?', a:'Da, u bilo koje vrijeme. Prelazak sa Standard na Pro obračunava razliku proporcionalno. Povratak na niži tier vrijedi od sljedećeg mjeseca.' },
]

function PricingPanel() {
  return (
    <div className="pricing-panel">

      {/* ── HERO ──────────────────────────────────────────── */}
      <div className="pricing-panel-eyebrow">💎 Pretplata · Tier opcije</div>
      <h1 className="pricing-panel-title">
        Sve što ti treba za{' '}
        <span style={{ color: 'var(--amber)' }}>maturu</span>
      </h1>
      <p className="pricing-panel-sub">
        Od besplatne teorije do AI personalizacije. Odaberi tier koji ti odgovara —
        možeš nadograditi ili otkazati u bilo koje vrijeme.
      </p>
      <div className="pricing-hero-badges">
        <span className="pricing-hero-badge">✓ Bez ugovora</span>
        <span className="pricing-hero-badge">✓ Otkaži kad god</span>
        <span className="pricing-hero-badge">✓ Pravi nastavnici</span>
        <span className="pricing-hero-badge">✓ AI Profesor 24/7</span>
      </div>

      {/* ── TIER KARTICE ──────────────────────────────────── */}
      <div className="pricing-cards-grid">

        {/* FREE */}
        <div className="pricing-card" style={{ borderColor:'rgba(74,173,114,0.25)', background:'linear-gradient(135deg,rgba(74,173,114,0.07) 0%,var(--bg-elevated) 100%)' }}>
          <div className="pricing-card-name" style={{ color:'#4aad72' }}>🆓 Free</div>
          <div className="pricing-card-tagline">Učenje teorije + osnovni alati</div>
          <div className="pricing-card-price">0€<span className="pricing-card-per">/mj</span></div>
          <button type="button" className="pricing-card-cta" onClick={() => handlePricingCheckout('free')}
            style={{ background:'transparent', color:'var(--text-primary)', border:'1px solid var(--border-mid)' }}>
            Krenuti besplatno
          </button>
          <ul className="pricing-feats">
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span><strong>Cijela teorija</strong> — sve skripte i kvizovi</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>NCVVO greške + cheat-sheet</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Pojmovnici i mnemotehnike</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Kalkulator bodova</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Speed Drill (200 pravopisnih pitanja)</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Proofreading game (interpunkcija)</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Plagijat detektor (sažetak)</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Objektivnost detektor (sažetak)</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">⭐</span><span><strong>1 esej + 1 sažetak Workspace</strong></span></li>
            <li className="pricing-feat feat-dim"><span className="pricing-feat-icon">❌</span><span>Discere simulatori (svih 70)</span></li>
            <li className="pricing-feat feat-dim"><span className="pricing-feat-icon">❌</span><span>Sve modelne eseje + sažetke</span></li>
            <li className="pricing-feat feat-dim"><span className="pricing-feat-icon">❌</span><span>Parent dashboard + statistika</span></li>
            <li className="pricing-feat feat-dim"><span className="pricing-feat-icon">❌</span><span>AI features</span></li>
          </ul>
        </div>

        {/* STANDARD */}
        <div className="pricing-card pricing-sparkle-std" style={{ borderColor:'rgba(255,107,43,0.35)', background:'linear-gradient(135deg,rgba(255,107,43,0.09) 0%,var(--bg-elevated) 100%)' }}>
          <span className="sparkle-dot std-1" aria-hidden="true">✦</span>
          <span className="sparkle-dot std-2" aria-hidden="true">✦</span>
          <span className="sparkle-dot std-3" aria-hidden="true">✦</span>
          <div className="pricing-card-name" style={{ color:'#ff6b2b' }}>⭐ Standard</div>
          <div className="pricing-card-tagline">Vježbanje + alati za roditelje</div>
          <div className="pricing-card-price">9,99€<span className="pricing-card-per">/mj</span></div>
          <button type="button" className="pricing-card-cta" onClick={() => handlePricingCheckout('standard')}
            style={{ background:'#ff6b2b', color:'#1a0a00', border:'none' }}>
            Pretplati se na Standard
          </button>
          <ul className="pricing-feats">
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span><strong>Sve iz Free</strong></span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">⭐</span><span><strong>70 Discere simulatora</strong></span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">⭐</span><span><strong>Neograničeno u Workspace</strong></span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Svih 9 modelnih eseja (H27)</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Svih 10 modelnih sažetaka (H28)</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Export u clipboard / .txt</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">⭐</span><span><strong>Parent dashboard</strong></span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Streak + heatmap</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Statistika napretka</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Plan učenja (full)</span></li>
            <li className="pricing-feat feat-dim"><span className="pricing-feat-icon">❌</span><span>AI features</span></li>
          </ul>
        </div>

        {/* PRO */}
        <div className="pricing-card pricing-sparkle-pro" style={{ borderColor:'rgba(75,123,255,0.7)', background:'linear-gradient(135deg,rgba(75,123,255,0.09) 0%,var(--bg-elevated) 100%)', boxShadow:'0 0 0 1px rgba(75,123,255,0.3),0 16px 48px rgba(75,123,255,0.15)' }}>
          <span className="sparkle-dot pro-1" aria-hidden="true">✦</span>
          <span className="sparkle-dot pro-2" aria-hidden="true">✦</span>
          <span className="sparkle-dot pro-3" aria-hidden="true">✦</span>
          <span className="sparkle-dot pro-4" aria-hidden="true">✦</span>
          <div className="pricing-recommended" style={{ background:'#4b7bff' }}>Najpopularniji</div>
          <div className="pricing-card-name" style={{ color:'#4b7bff' }}>💎 Pro</div>
          <div className="pricing-card-tagline">AI personalizacija — kao osobni tutor</div>
          <div className="pricing-card-price">19,99€<span className="pricing-card-per">/mj</span></div>
          <button type="button" className="pricing-card-cta" onClick={() => handlePricingCheckout('pro')}
            style={{ background:'#4b7bff', color:'#fff', border:'none' }}>
            Pretplati se na Pro
          </button>
          <ul className="pricing-feats">
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span><strong>Sve iz Standard</strong></span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">🤖</span><span><strong>AI Profesor (chat) — 30 poruka/dan</strong></span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">🤖</span><span><strong>AI Feedback za eseje (H27)</strong></span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">🤖</span><span><strong>AI Feedback za sažetke (H28)</strong></span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">🤖</span><span><strong>20 AI feedbackova / dan</strong></span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">⭐</span><span><strong>Personalizirani plan učenja</strong></span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">⭐</span><span><strong>Prijemni priprema</strong></span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Priority AI queue</span></li>
            <li className="pricing-feat"><span className="pricing-feat-icon">✅</span><span>Email support</span></li>
          </ul>
        </div>

      </div>

      {/* ── TABLICA USPOREDBE ──────────────────────────────── */}
      <div className="pricing-comparison">
        <div className="pricing-section-title">Detaljna usporedba</div>
        <div className="pricing-section-subtitle">Pogledaj sve što dobiješ u svakoj pretplati</div>
        <div className="pricing-comparison-wrap">
          <table className="pricing-comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="tier-col" style={{ color:'#4aad72' }}>🆓 Free</th>
                <th className="tier-col" style={{ color:'#ff6b2b' }}>⭐ Standard<br /><span style={{ fontSize:'11px', color:'var(--text-muted)', fontWeight:400 }}>9,99€/mj</span></th>
                <th className="tier-col" style={{ color:'#4b7bff' }}>💎 Pro<br /><span style={{ fontSize:'11px', color:'var(--text-muted)', fontWeight:400 }}>19,99€/mj</span></th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-section"><td colSpan="4">📚 Teorija</td></tr>
              <tr><td className="cell-feature">Cijela teorija (skripte)</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>
              <tr><td className="cell-feature">Inline kvizovi</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>
              <tr><td className="cell-feature">NCVVO greške + cheat-sheet</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>
              <tr><td className="cell-feature">Pojmovnici + mnemotehnike</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>
              <tr><td className="cell-feature">Dijagnostika</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>

              <tr className="row-section"><td colSpan="4">🛠 Alati</td></tr>
              <tr><td className="cell-feature">Kalkulator bodova</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>
              <tr><td className="cell-feature">Plagijat detektor (H28)</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>
              <tr><td className="cell-feature">Objektivnost detektor (H28)</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>
              <tr><td className="cell-feature">Speed Drill (H25)</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>
              <tr><td className="cell-feature">Proofreading game (H26)</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>

              <tr className="row-section"><td colSpan="4">📝 Workspace (Esej + Sažetak)</td></tr>
              <tr><td className="cell-feature">Workspace pristup</td><td className="cell-tier ppartial">1 esej + 1 sažetak</td><td className="cell-tier pcheck">∞</td><td className="cell-tier pcheck">∞</td></tr>
              <tr><td className="cell-feature">Modelne eseje (9)</td><td className="cell-tier ppartial">1 vidljiv</td><td className="cell-tier pcheck">Sve 9</td><td className="cell-tier pcheck">Sve 9</td></tr>
              <tr><td className="cell-feature">Modelne sažetke (10)</td><td className="cell-tier ppartial">1 vidljiv</td><td className="cell-tier pcheck">Sve 10</td><td className="cell-tier pcheck">Sve 10</td></tr>
              <tr><td className="cell-feature">Auto-save</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>
              <tr><td className="cell-feature">Export (clipboard / .txt)</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>

              <tr className="row-section"><td colSpan="4">🎯 Discere Simulatori</td></tr>
              <tr><td className="cell-feature">Maturalni simulatori</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">70 ispita</td><td className="cell-tier pcheck">70 ispita</td></tr>
              <tr><td className="cell-feature">Statistika rezultata</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>

              <tr className="row-section"><td colSpan="4">📊 Plan učenja</td></tr>
              <tr><td className="cell-feature">Statični raspored</td><td className="cell-tier ppartial">Pregled (blur)</td><td className="cell-tier pcheck">Puni</td><td className="cell-tier pcheck">Puni</td></tr>
              <tr><td className="cell-feature">Streak tracking</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>
              <tr><td className="cell-feature">Heatmap</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>
              <tr><td className="cell-feature">Analiza napretka po predmetima</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>

              <tr className="row-section"><td colSpan="4">👨‍👩‍👦 Parent Dashboard</td></tr>
              <tr><td className="cell-feature">Praćenje napretka djeteta</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>
              <tr><td className="cell-feature">Tjedni izvještaji</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">✓</td><td className="cell-tier pcheck">✓</td></tr>

              <tr className="row-section"><td colSpan="4">🤖 AI Features (samo Pro)</td></tr>
              <tr><td className="cell-feature">AI Profesor (chat)</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">30 / dan</td></tr>
              <tr><td className="cell-feature">AI Feedback za eseje</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">20 / dan</td></tr>
              <tr><td className="cell-feature">AI Feedback za sažetke</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">20 / dan</td></tr>
              <tr><td className="cell-feature">Personalizirani plan učenja</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">✓</td></tr>
              <tr><td className="cell-feature">Priority AI queue</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">✓</td></tr>

              <tr className="row-section"><td colSpan="4">🎓 Prijemni</td></tr>
              <tr><td className="cell-feature">Priprema za fakultetske prijemne</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcross">✗</td><td className="cell-tier pcheck">✓</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <div className="pricing-faq-section">
        <div className="pricing-section-title">Često pitana pitanja</div>
        <div className="pricing-section-subtitle">Sve što trebaš znati o pretplati</div>

        <details className="pricing-faq-item">
          <summary className="pricing-faq-q">Mogu li otkazati pretplatu kad god?</summary>
          <div className="pricing-faq-a">Da, pretplatu možeš otkazati u bilo koje vrijeme kroz profil. Nakon otkazivanja zadržavaš pristup do kraja platnog razdoblja, a zatim se vraćaš na Free tier. Bez kazni, bez skrivenih troškova.</div>
        </details>
        <details className="pricing-faq-item">
          <summary className="pricing-faq-q">Što ako želim probati Pro samo na kratko?</summary>
          <div className="pricing-faq-a">Pretplata je <strong>mjesečna</strong> — možeš se pretplatiti za 1 mjesec, isprobati AI Profesor i AI Feedback, pa otkazati ako ne želiš nastaviti. Bez ugovora i bez minimalnog razdoblja.</div>
        </details>
        <details className="pricing-faq-item">
          <summary className="pricing-faq-q">Koliko poruka mogu poslati AI Profesoru u Pro?</summary>
          <div className="pricing-faq-a">Pro tier ima <strong>30 poruka dnevno</strong> za AI Profesora i <strong>20 AI Feedbackova dnevno</strong> (za eseje + sažetke). Ovi limiti su više nego dovoljni za intenzivno učenje (prosjek aktivnih studenata je 5–10 poruka/dan).</div>
        </details>
        <details className="pricing-faq-item">
          <summary className="pricing-faq-q">Što ako moja škola ima cijelu pretplatu?</summary>
          <div className="pricing-faq-a">Ako tvoja škola ili razred ima Maturiraj.hr Edu pretplatu, dobit ćeš pristupne podatke od profesora. Edu pretplate uključuju Pro tier za sve učenike + dashboard za nastavnike. Kontaktiraj nas za više informacija.</div>
        </details>
        <details className="pricing-faq-item">
          <summary className="pricing-faq-q">Mogu li promijeniti tier nakon pretplate?</summary>
          <div className="pricing-faq-a">Da, u bilo koje vrijeme. Ako prelaziš sa Standard na Pro, razlika u cijeni se obračunava proporcionalno. Ako se vraćaš na niži tier, promjena vrijedi od sljedećeg mjeseca.</div>
        </details>
        <details className="pricing-faq-item">
          <summary className="pricing-faq-q">Što je razlika između AI Profesora i AI Feedbacka?</summary>
          <div className="pricing-faq-a"><strong>AI Profesor (chat)</strong> je interaktivni asistent kojem možeš postavljati pitanja iz hrvatskog jezika 24/7. <strong>AI Feedback</strong> analizira tvoj esej ili sažetak po 4–5 kriterija (struktura, argumentacija, stil, pismenost) i daje konkretne preporuke za poboljšanje + procjenu ocjene.</div>
        </details>
        <details className="pricing-faq-item">
          <summary className="pricing-faq-q">Je li Workspace ograničen u Free verziji?</summary>
          <div className="pricing-faq-a">Free tier ti dopušta da kreiraš <strong>1 esej i 1 sažetak</strong> u Workspace-u (idealno za testiranje). Standard i Pro tier su neograničeni — možeš raditi na onoliko eseja i sažetaka koliko ti treba.</div>
        </details>
        <details className="pricing-faq-item">
          <summary className="pricing-faq-q">Plagijat detektor je u Free? Stvarno?</summary>
          <div className="pricing-faq-a">Da! Naš plagijat detektor (5+ uzastopnih riječi iz polaznog teksta) i objektivnost detektor su <strong>besplatni za sve</strong>. Vjerujemo da bi svaki student trebao imati pristup ovim alatima neovisno o pretplati.</div>
        </details>
        <details className="pricing-faq-item">
          <summary className="pricing-faq-q">Kako radi Parent Dashboard?</summary>
          <div className="pricing-faq-a">Roditelji mogu kreirati svoj račun i povezati se s djetetovim profilom (uz djetetovo dopuštenje). U dashboardu vide vrijeme učenja, napredak po predmetima, rezultate dijagnostika i tjedne sažetke. Dostupno u Standard i Pro tieru.</div>
        </details>
        <details className="pricing-faq-item">
          <summary className="pricing-faq-q">Što je „Prijemni" u Pro tieru?</summary>
          <div className="pricing-faq-a">Pored mature, Pro tier uključuje pripremu za <strong>fakultetske prijemne ispite</strong> (medicina, pravo, FER, FSB, Filozofski, Ekonomski…). Sadržaj se temelji na arhivi prijemnih ispita iz prošlih godina + AI personalizirani plan vježbanja.</div>
        </details>
      </div>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <div className="pricing-final-cta">
        <div className="pricing-final-title">Spreman za maturu? 💪</div>
        <div className="pricing-final-sub">Krenuti je besplatno. Bez kreditne kartice.</div>
        <div className="pricing-final-btns">
          <button type="button" className="pricing-card-cta"
            style={{ background:'#4aad72', color:'#fff', border:'none' }}
            onClick={() => handlePricingCheckout('free')}>
            🚀 Krenuti besplatno
          </button>
          <button type="button" className="pricing-card-cta"
            style={{ background:'#4b7bff', color:'#fff', border:'none' }}
            onClick={() => handlePricingCheckout('pro')}>
            💎 Direktno na Pro
          </button>
        </div>
      </div>

      {/* ── FOOTER NAPOMENA ───────────────────────────────── */}
      <div className="pricing-footer-note">
        🚧 Pretplata u izradi — Stripe Checkout uskoro.
      </div>

    </div>
  )
}

export default function HrvatskiViewer({ onBack }) {
  const router = useRouter()
  const groupedSections = groupChapters(HRV_POGAVLJA_META)

  const firstImplementedId =
    HRV_POGAVLJA_META.find((item) => item.implemented)?.id || 'poglavlje-01'

  const [activeChapterId, setActiveChapterId] = useState('overview')
  const [activeTab, setActiveTab] = useState(98)
  const [answers, setAnswers] = useState({})
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Lazy-load chapter data on demand — cache to avoid re-fetching
  const chapterCache = useRef({})

  useEffect(() => {
    if (!sessionStorage.getItem('hrv_pricing_seen')) {
      sessionStorage.setItem('hrv_pricing_seen', '1')
      setActiveChapterId('pretplata')
      setActiveTab(99)
    }
  }, [])

  const chapterMeta = null
  const chapter = null

  const total = chapter?.quiz?.length || 0

  const correctCount = useMemo(
    () => Object.values(answers).filter((a) => a.correct).length,
    [answers]
  )

  const allAnswered = total > 0 && Object.keys(answers).length === total

  function handleAnswer(questionId, selected, correct) {
    setAnswers((prev) => {
      if (prev[questionId]) return prev
      return {
        ...prev,
        [questionId]: { selected, correct },
      }
    })
  }

  function changeChapter(chapterId) {
    const selected = HRV_POGAVLJA_META.find((item) => item.id === chapterId)
    if (!selected?.implemented) return

    // Chapters are now Strategy C standalone pages — redirect to the new route
    const slug = 'h' + chapterId.replace('poglavlje-', '')
    router.push(`/skripte/hrv/${slug}`)
  }

  // Zagrij rutu poglavlja na hover/fokus → klik je bez „loading" spinnera
  // (router.prefetch dohvati RSC + chunkove rute prije navigacije).
  function prefetchChapter(chapterId) {
    const selected = HRV_POGAVLJA_META.find((item) => item.id === chapterId)
    if (!selected?.implemented) return
    const slug = 'h' + chapterId.replace('poglavlje-', '')
    try { router.prefetch(`/skripte/hrv/${slug}`) } catch (e) {}
  }

  function scoreLabel() {
    const labels = rawChapter?.ispit?.scoreOpisi

    if (labels) {
      if (correctCount === total) return labels.savrseno
      if (correctCount >= Math.max(1, total - 1)) return labels.odlicno
      if (correctCount >= Math.ceil(total / 2)) return labels.dobro
      return labels.ponovi
    }

    if (correctCount === total) return 'Savršeno! Spreman si za ovo poglavlje.'
    if (correctCount >= Math.max(1, total - 2)) return 'Odlično! Provjeri još jednom pogrešne odgovore.'
    if (correctCount >= Math.ceil(total / 2)) return 'Dobro, ali pogledaj još jednom gradivo.'
    return 'Preporučujemo da prođeš kroz gradivo još jednom.'
  }

  function goToNextImplemented() {
    const implemented = HRV_POGAVLJA_META.filter((item) => item.implemented)
    const currentIndex = implemented.findIndex((item) => item.id === activeChapterId)
    const next = implemented[currentIndex + 1]
    if (next) changeChapter(next.id)
  }

  if (activeChapterId !== 'pretplata' && activeChapterId !== 'overview' && chapterLoading) {
    return (
      <div className="subject-view-shell">
        <button type="button" className="inline-back-btn" onClick={onBack}>
          ← Natrag na sve predmete
        </button>
        <div style={{ padding: 40, color: 'var(--muted)', textAlign: 'center' }}>
          <div style={{ fontSize: 28, marginBottom: 12 }}>⏳</div>
          Učitavam poglavlje...
        </div>
      </div>
    )
  }

  if (activeChapterId !== 'pretplata' && activeChapterId !== 'overview' && (!chapter || !chapterMeta)) {
    return (
      <div className="subject-view-shell">
        <button type="button" className="inline-back-btn" onClick={onBack}>
          ← Natrag na sve predmete
        </button>
        <div style={{ padding: 40, color: 'white' }}>Poglavlje nije dostupno.</div>
      </div>
    )
  }

  return (
    <div className="subject-view-shell">
      <div className={`shell ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <nav className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sid-brand">
            <button type="button" className="sid-back-btn" onClick={onBack}>
              ← Natrag na predmete
            </button>
            <div className="sid-brand-name">Hrvatski jezik</div>
            <div className="sid-brand-sub">Skripta za državnu maturu</div>
          </div>

          <button
            type="button"
            className={`sid-overview-btn ${activeChapterId === 'overview' ? 'active' : ''}`}
            onClick={() => { setActiveChapterId('overview'); setActiveTab(98) }}
          >
            📚 Pregled svih poglavlja
          </button>

          {groupedSections.map((group) => (
            <div key={group.section}>
              <div className="sid-section">
                {group.section}
                <span className="sid-section-count">{group.items.length}</span>
              </div>

              {group.items.map((item) => {
                const isActive = activeChapterId === item.id
                const isDisabled = !item.implemented

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`sid-item ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}
                    onClick={() => changeChapter(item.id)}
                    onMouseEnter={() => {
                      if (!isDisabled && !chapterCache.current[item.id]) {
                        const num = item.id.replace('poglavlje-', '')
                        import(`../../data/hrv-components/poglavlje${num}.jsx`)
                          .then(mod => { chapterCache.current[item.id] = mod[`HRV_POGAVLJE_${num}`] })
                          .catch(() => {})
                      }
                    }}
                    disabled={isDisabled}
                    title={item.opis}
                  >
                    <span className={`sid-dot ${isActive ? '' : 'off'}`} />
                    <span className="sid-item-text">
                      <span className="sid-item-number">{item.broj}.</span>
                      <span>{item.naslov}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          ))}

          <div className="sid-pricing-wrap">
            <button
              type="button"
              className={`sid-pricing-btn ${activeChapterId === 'pretplata' ? 'active' : ''}`}
              onClick={() => { setActiveChapterId('pretplata'); setActiveTab(99) }}
            >
              💎 Pretplata
            </button>
          </div>

          <div className="sid-footer">
            {chapter && chapterMeta ? (
              <>{`Poglavlje ${chapter.redniBroj} od 28 · ${chapterMeta.sekcija}`}<br /></>
            ) : null}
            maturiraj.hr
          </div>
        </nav>

        <main className="main">
          <div className="main-topbar">
            <button
              type="button"
              className="sidebar-toggle-btn"
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              {sidebarOpen ? '← Sakrij poglavlja' : '☰ Prikaži poglavlja'}
            </button>
          </div>

          <div className="content-wrap">
            {activeChapterId === 'pretplata' && <PricingPanel />}
            {activeChapterId === 'overview' && (
              <OverviewPanel
                chapters={HRV_POGAVLJA_META}
                groupedSections={groupedSections}
                onChapterClick={changeChapter}
                onChapterPrefetch={prefetchChapter}
              />
            )}
            {activeChapterId !== 'pretplata' && activeChapterId !== 'overview' && <>
            <div className="breadcrumb">
              <span>← {chapter?.breadcrumb?.[0] || 'Natrag'}</span>
              <span className="bc-sep"></span>
              <span className="bc-active">
                {chapter?.breadcrumb?.[1] || chapter?.naziv || 'Poglavlje'}
              </span>
            </div>

            <div className="tabs-wrap">
              {(chapter?.tabs || []).map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className={`tab ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
            </>}

            {activeTab === 0 && (
              <div className="layer">
                <div className="hero-label">
                  Poglavlje {chapter.redniBroj} od 28 · {chapterMeta.sekcija}
                </div>

                <h1 className="hero-title">{chapter.naslov}</h1>
                <p className="hero-period">{chapter.period}</p>

                <div className="progress-wrap">
                  <div
                    className="progress-fill"
                    style={{ width: `${(chapter.redniBroj / 28) * 100}%` }}
                  />
                </div>

                <div className="block-tags">
                  {(chapter.tagovi || []).map((tag) => (
                    <Tag key={tag.text} className={tag.className}>
                      {tag.text}
                    </Tag>
                  ))}
                </div>

                <div className="accent-rule" />

                <div className="block-quick-grid">
                  {(chapter.quickCards || []).map((item) => (
                    <QuickCard key={`${item.name}-${item.sub}`} item={item} />
                  ))}
                </div>

                <div className="nav-row">
                  <span className="nav-btn disabled">← Prethodno</span>
                  <button
                    type="button"
                    className="nav-btn primary"
                    onClick={() => setActiveTab(1)}
                  >
                    Produbi razumijevanje →
                  </button>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              activeChapterId === 'poglavlje-09' ? (
                <H06OnjeginTab onPrev={() => setActiveTab(0)} onNext={() => setActiveTab(2)} />
              ) : chapterMeta.sekcija === 'Pisanje' ? (
                <WritingTabContent chapter={chapter} />
              ) : chapterMeta.sekcija === 'Pravopis' ? (
                <PravopisTabContent chapter={chapter} setActiveTab={setActiveTab} />
              ) : (
                <div className="layer">
                  {(chapter.uvod || []).length > 0 && (
                    <>
                      <div className="sec-label">
                        {(chapter.cjeline || []).length > 0 ? 'Uvod u gradivo' : 'Kontekst razdoblja'}
                      </div>
                      {(chapter.uvod || []).map((p, i) => (
                        <HtmlBlock className="prose" text={p} key={i} />
                      ))}
                    </>
                  )}

                  {(chapter.hrvatskaPismenost || []).length > 0 && (
                    <>
                      <div className="subsec-label">Hrvatska rana pismenost</div>
                      {(chapter.hrvatskaPismenost || []).map((p, i) => (
                        <HtmlBlock className="prose" text={p} key={i} />
                      ))}
                    </>
                  )}

                  {(chapter.cjeline || []).length > 0 ? (
                    <>
                      {(chapter.cjeline || []).map((unit) => (
                        <LearningUnitBlock key={unit.naziv} unit={unit} />
                      ))}

                      {(chapter.zajednickeZamke || []).length > 0 && (
                        <>
                          <hr className="divider" />
                          <div className="sec-label">{chapter.zajednickeZamkeNaslov}</div>
                          <div className="pojam-table">
                            {(chapter.zajednickeZamke || []).map((item, i) => (
                              <div className="concept-row" key={i}>
                                <div className="concept-key ck-rose">
                                  <div className="concept-key-text">Zamka {i + 1}</div>
                                </div>
                                <div className="concept-val">{item}</div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {(chapter.miniVjezbe || []).length > 0 && (
                        <>
                          <hr className="divider" />
                          <div className="sec-label">{chapter.miniVjezbeNaslov}</div>
                          <div className="pojam-table">
                            {(chapter.miniVjezbe || []).map((item, i) => (
                              <div className="concept-row" key={i}>
                                <div className="concept-key ck-teal">
                                  <div className="concept-key-text">Rješenje</div>
                                </div>
                                <div className="concept-val">
                                  <div><strong>{item.tekst}</strong></div>
                                  <div style={{ marginTop: 6, opacity: 0.85 }}>
                                    {item.pitanje}
                                  </div>
                                  <div style={{ marginTop: 10 }}>
                                    <strong>Odgovor:</strong> {item.odgovor}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {(chapter.autori || []).length > 0 && <hr className="divider" />}

                      {(chapter.autori || []).map((author) => (
                        <AuthorBlock key={author.name} author={author} />
                      ))}

                      {(chapter.napomena?.text || (chapter.ostaliAutori || []).length > 0) && (
                        <>
                          <hr className="divider" />
                          <div className="sec-label">Ostali važni autori i pojmovi</div>

                          {chapter.napomena?.text && (
                            <div className="callout callout-info">
                              <span className="callout-icon">ℹ</span>
                              <div className="callout-body">
                                <div className="callout-title">{chapter.napomena.title}</div>
                                <div
                                  className="callout-text"
                                  dangerouslySetInnerHTML={html(chapter.napomena.text)}
                                />
                              </div>
                            </div>
                          )}

                          {(chapter.ostaliAutori || []).length > 0 && (
                            <div className="pojam-table" style={{ marginTop: 14 }}>
                              {(chapter.ostaliAutori || []).map((item) => (
                                <ConceptRow
                                  key={item.label}
                                  label={item.label}
                                  value={item.value}
                                  tone={item.tone}
                                />
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}

                  <div className="nav-row">
                    <button
                      type="button"
                      className="nav-btn"
                      onClick={() => setActiveTab(0)}
                    >
                      ← Brzi pregled
                    </button>
                    <button
                      type="button"
                      className="nav-btn primary"
                      onClick={() => setActiveTab(2)}
                    >
                      Vježbaj za ispit →
                    </button>
                  </div>
                </div>
              )
            )}

            {activeTab === 2 && (
              <div className="layer">
                <div className="quiz-intro">{chapter.quizIntro}</div>

                {(chapter.ispitNajcescaPitanja || []).length > 0 && (
                  <div className="matura-box" style={{ marginBottom: 24 }}>
                    <div className="matura-header">Najčešća ispitna pitanja</div>
                    <div style={{ padding: '16px 18px' }}>
                      {chapter.ispitNajcescaPitanja.map((item, index) => (
                        <div
                          key={index}
                          style={{
                            padding: '14px 0',
                            borderBottom:
                              index !== chapter.ispitNajcescaPitanja.length - 1
                                ? '1px solid var(--border)'
                                : 'none',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '14px',
                              fontWeight: 700,
                              marginBottom: 8,
                              color: 'var(--text-primary)',
                            }}
                          >
                            {item.q}
                          </div>
                          <div
                            style={{
                              fontFamily: 'var(--font-serif)',
                              fontSize: '13.5px',
                              lineHeight: 1.7,
                              color: 'rgba(240, 242, 248, 0.82)',
                            }}
                          >
                            {item.a}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {(chapter.quiz || []).map((item) => (
                  <QuizBlock
                    key={item.id}
                    item={item}
                    answer={answers[item.id]}
                    onAnswer={handleAnswer}
                  />
                ))}

                {allAnswered && total > 0 && (
                  <div className="score-box">
                    <div className="score-num">
                      {correctCount}/{total}
                    </div>
                    <div className="score-label">{scoreLabel()}</div>
                  </div>
                )}

                {chapter.cta && (
                  <div className="discere-cta">
                    <div>
                      <div className="cta-eyebrow">{chapter.cta.eyebrow}</div>
                      <div className="cta-title">{chapter.cta.title}</div>
                      <div className="cta-sub">
                        {(chapter.cta.sub || '').split('\n').map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>
                    <a href={chapter.cta.href || '#'} className="cta-btn">
                      {chapter.cta.button || 'Otvori'}
                    </a>
                  </div>
                )}

                {(chapter.zaMaturuTrebaZnati || []).length > 0 && (
                  <div className="matura-box">
                    <div className="matura-header">Za maturu treba znati</div>
                    <ul className="matura-list">
                      {(chapter.zaMaturuTrebaZnati || []).map((item) => (
                        <li className="matura-item" key={item}>
                          <div className="mi-diamond" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {chapter.ispitMaturaHint?.tekst && (
                  <div className="callout callout-info" style={{ marginTop: 24 }}>
                    <span className="callout-icon">
                      {chapter.ispitMaturaHint.ikona || '🎯'}
                    </span>
                    <div className="callout-body">
                      <div className="callout-title">
                        {chapter.ispitMaturaHint.naslov || 'Matura hint'}
                      </div>
                      <div
                        className="callout-text"
                        dangerouslySetInnerHTML={html(chapter.ispitMaturaHint.tekst)}
                      />
                    </div>
                  </div>
                )}

                {Array.isArray(chapter.ispitEsejReady?.savjeti) &&
                  chapter.ispitEsejReady.savjeti.length > 0 && (
                    <div className="matura-box" style={{ marginTop: 24 }}>
                      <div className="matura-header">
                        {chapter.ispitEsejReady.naslov || 'Kako ovo ubaciti u školski esej'}
                      </div>
                      <ul className="matura-list">
                        {chapter.ispitEsejReady.savjeti.map((item) => (
                          <li className="matura-item" key={item}>
                            <div className="mi-diamond" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                <div className="nav-row">
                  <button
                    type="button"
                    className="nav-btn"
                    onClick={() => setActiveTab(1)}
                  >
                    ← Gradivo
                  </button>
                  <button
                    type="button"
                    className="nav-btn primary"
                    onClick={goToNextImplemented}
                  >
                    Sljedeće poglavlje →
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <style jsx global>{`
        :root {
          --bg-base: #0c0e14;
          --bg-surface: #121520;
          --bg-elevated: #1a1d2e;
          --bg-hover: #1f2338;
          --bg-input: #161928;
          --border: rgba(255, 255, 255, 0.07);
          --border-mid: rgba(255, 255, 255, 0.12);
          --border-light: rgba(255, 255, 255, 0.18);
          --text-primary: #f0f2f8;
          --text-secondary: #8b90a8;
          --text-muted: #525870;
          --accent: #b8720a;
          --accent-b: rgba(184, 114, 10, 0.28);
          --accent-3: #e09030;
          --amber: #d4890a;
          --amber-l: rgba(212, 137, 10, 0.12);
          --amber-b: rgba(212, 137, 10, 0.25);
          --teal-l: rgba(26, 154, 122, 0.14);
          --coral-l: rgba(192, 64, 48, 0.15);
          --purple-l: rgba(122, 110, 221, 0.15);
          --green-l: rgba(42, 122, 74, 0.15);
          --info-l: rgba(42, 106, 176, 0.15);
          --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          --font-serif: Georgia, 'Times New Roman', serif;
          --r-md: 10px;
          --r-lg: 14px;
          --r-xl: 20px;
          --sidebar-w: 330px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        html, body {
          width: 100%;
          min-height: 100%;
          overflow-x: hidden;
        }

        body {
          font-family: var(--font-sans);
          background: var(--bg-base);
          color: var(--text-primary);
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        a { color: inherit; text-decoration: none; }
        button { font: inherit; }

        .subject-view-shell {
          min-height: 100vh;
          width: 100vw;
          max-width: 100vw;
          margin: 0;
          padding-top: 58px; /* Nav height — prevents back button hiding behind fixed Nav */
        }

        .inline-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 24px 44px 0;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid var(--border-mid);
          background: var(--bg-elevated);
          color: var(--text-primary);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .inline-back-btn:hover {
          background: var(--bg-hover);
          border-color: var(--border-light);
        }

        .shell {
          display: flex;
          min-height: calc(100vh - 70px);
          width: 100vw;
          max-width: 100vw;
        }

        .sidebar {
          flex-shrink: 0;
          background: var(--bg-surface);
          border-right: 1px solid var(--border);
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          transition: width 0.28s ease, min-width 0.28s ease, max-width 0.28s ease, opacity 0.2s ease;
        }

        .sidebar.open {
          width: var(--sidebar-w);
          min-width: var(--sidebar-w);
          max-width: var(--sidebar-w);
          opacity: 1;
        }

        .sidebar.closed {
          width: 0;
          min-width: 0;
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          border-right: none;
        }

        .sid-brand {
          padding: 20px 18px 16px;
          border-bottom: 1px solid var(--border);
        }

        .sid-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
          padding: 0;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.15s;
        }
        .sid-back-btn:hover { color: var(--text-primary); }

        .sid-brand-name { font-size: 16px; font-weight: 700; }
        .sid-brand-sub { font-size: 10px; color: var(--text-muted); margin-top: 3px; }

        .sid-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.7px;
          color: var(--text-muted);
          text-transform: uppercase;
          padding: 18px 18px 8px;
        }

        .sid-section-count {
          font-size: 10px;
          letter-spacing: 0;
          opacity: 0.7;
        }

        .sid-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          width: 100%;
          padding: 10px 18px;
          font-size: 12.5px;
          color: var(--text-secondary);
          border: none;
          border-left: 2px solid transparent;
          background: transparent;
          text-align: left;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          outline: none;
        }

        .sid-item:hover:not(.disabled) {
          color: var(--text-primary);
          background: var(--bg-hover);
        }

        .sid-item.active {
          color: var(--text-primary);
          background: var(--bg-elevated);
          border-left-color: var(--accent-3);
        }

        .sid-item.disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .sid-dot {
          width: 6px;
          height: 6px;
          min-width: 6px;
          border-radius: 50%;
          background: var(--accent-3);
          margin-top: 5px;
          flex-shrink: 0;
        }

        .sid-dot.off {
          background: var(--text-muted);
          opacity: 0.45;
        }

        .sid-item-text { display: flex; gap: 6px; line-height: 1.35; }
        .sid-item-number { opacity: 0.8; min-width: 18px; }

        .sid-footer {
          margin-top: auto;
          padding: 14px 18px;
          border-top: 1px solid var(--border);
          font-size: 10px;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .main {
          flex: 1;
          min-width: 0;
          width: 100%;
          transition: width 0.28s ease;
        }

        .main-topbar {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 24px 44px 0;
        }

        .sidebar-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid var(--border-mid);
          background: var(--bg-elevated);
          color: var(--text-primary);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .sidebar-toggle-btn:hover {
          background: var(--bg-hover);
          border-color: var(--border-light);
        }

        .content-wrap {
          width: 100%;
          max-width: none;
          margin: 0;
          padding: 24px 44px 100px;
        }

        .layer {
          width: 100%;
          max-width: 1400px;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          color: var(--text-muted);
          margin-bottom: 32px;
        }

        .bc-sep { opacity: 0.4; }
        .bc-active { color: var(--accent-3); font-weight: 600; }

        .tabs-wrap {
          border-bottom: 1px solid var(--border);
          margin-bottom: 36px;
          display: flex;
          gap: 2px;
          overflow-x: auto;
        }

        .tab {
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          border: none;
          background: transparent;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          white-space: nowrap;
          cursor: pointer;
        }

        .tab.active {
          color: var(--text-primary);
          border-bottom-color: var(--accent-3);
        }

        .hero-label {
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 2.2px;
          color: var(--amber);
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .hero-title {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 700;
          font-style: italic;
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .hero-period {
          font-family: var(--font-serif);
          font-size: 13px;
          font-style: italic;
          color: var(--text-muted);
          margin-bottom: 22px;
        }

        .progress-wrap {
          height: 3px;
          background: var(--border);
          border-radius: 2px;
          margin-bottom: 28px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), var(--accent-3));
        }

        .block-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          padding: 5px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid;
        }

        .tag-amber {
          background: var(--amber-l);
          color: var(--accent-3);
          border-color: var(--amber-b);
        }

        .tag-navy {
          background: rgba(42, 92, 154, 0.15);
          color: #6aaade;
          border-color: rgba(42, 92, 154, 0.3);
        }

        .tag-purple {
          background: var(--purple-l);
          color: #a89eed;
          border-color: rgba(122, 110, 221, 0.3);
        }

        .tag-teal {
          background: var(--teal-l);
          color: #3ac0a8;
          border-color: rgba(26, 154, 122, 0.3);
        }

        .tag-rose {
          background: rgba(224, 138, 160, 0.15);
          color: #e08aa0;
          border-color: rgba(224, 138, 160, 0.3);
        }

        .accent-rule {
          height: 2px;
          background: linear-gradient(90deg, var(--accent), transparent);
          border-radius: 2px;
          margin-bottom: 32px;
        }

        .block-quick-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
          width: 100%;
        }

        .qcard {
          background: var(--bg-elevated);
          border: 1px solid var(--border-mid);
          border-radius: var(--r-lg);
          padding: 16px;
        }

        .qcard-top {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 8px;
        }

        .qcard-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          border: 1px solid;
          flex-shrink: 0;
        }

        .qcard-name {
          font-size: 13px;
          font-weight: 600;
        }

        .qcard-sub {
          font-size: 11.5px;
          color: var(--text-secondary);
          line-height: 1.55;
          font-family: var(--font-serif);
        }

        .sec-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2.2px;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--border);
        }

        .subsec-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.8px;
          color: var(--accent-3);
          text-transform: uppercase;
          margin: 24px 0 10px;
        }

        .prose {
          font-family: var(--font-serif);
          font-size: 15.5px;
          line-height: 1.85;
          color: rgba(240, 242, 248, 0.88);
          margin-bottom: 18px;
        }

        .divider {
          border: none;
          border-top: 1px solid var(--border);
          margin: 36px 0;
        }

        .author-block {
          background: var(--bg-elevated);
          border: 1px solid var(--border-mid);
          border-radius: var(--r-xl);
          overflow: hidden;
          margin: 28px 0;
        }

        .author-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 22px;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border);
        }

        .author-badge {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-serif);
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }

        .author-name { font-size: 17px; font-weight: 700; }

        .author-meta {
          font-size: 11px;
          color: var(--text-muted);
          font-style: italic;
          margin-top: 2px;
        }

        .author-body { padding: 22px 24px; }

        .work-title {
          display: block;
          font-family: var(--font-serif);
          font-size: 14px;
          font-weight: 700;
          font-style: italic;
          color: var(--accent-3);
          margin: 18px 0 7px;
        }

        .quote-box {
          margin: 22px 0;
          padding: 18px 22px;
          background: var(--amber-l);
          border-left: 3px solid var(--amber);
          border-radius: 0 var(--r-md) var(--r-md) 0;
        }

        .quote-text {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 14.5px;
          line-height: 1.75;
          color: rgba(240, 242, 248, 0.82);
        }

        .quote-src {
          font-size: 11px;
          color: var(--text-muted);
          margin-top: 10px;
        }

        .pojam-table {
          border: 1px solid var(--border-mid);
          border-radius: var(--r-lg);
          overflow: hidden;
          margin: 16px 0 24px;
          width: 100%;
        }

        .concept-row {
          display: grid;
          grid-template-columns: minmax(180px, 24%) 1fr;
          border-bottom: 1px solid var(--border);
        }

        .concept-row:last-child { border-bottom: none; }

        .concept-key {
          padding: 12px 14px;
          font-size: 12.5px;
          font-weight: 700;
          border-right: 1px solid var(--border);
          position: relative;
        }

        .concept-key::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
        }

        .concept-key-text { padding-left: 10px; }

        .ck-coral { color: #e07080; }
        .ck-coral::before { background: #e07080; }
        .ck-purple { color: #a89eed; }
        .ck-purple::before { background: #a89eed; }
        .ck-navy { color: #6aaade; }
        .ck-navy::before { background: #6aaade; }
        .ck-teal { color: #3ac0a8; }
        .ck-teal::before { background: #3ac0a8; }
        .ck-grey { color: var(--text-secondary); }
        .ck-grey::before { background: var(--border-mid); }
        .ck-amber { color: #e0a23a; }
        .ck-amber::before { background: #e0a23a; }
        .ck-green { color: #4aad72; }
        .ck-green::before { background: #4aad72; }
        .ck-rose { color: #e08aa0; }
        .ck-rose::before { background: #e08aa0; }

        .concept-val {
          padding: 12px 16px;
          font-family: var(--font-serif);
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .callout {
          display: flex;
          gap: 14px;
          padding: 16px 18px;
          border-radius: var(--r-lg);
          margin: 16px 0;
          border: 1px solid;
        }

        .callout-info {
          background: var(--info-l);
          border-color: rgba(42, 106, 176, 0.3);
        }

        .callout-title {
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 5px;
          color: #5a9ae8;
        }

        .callout-text {
          font-family: var(--font-serif);
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--text-secondary);
        }

        .callout-icon {
          font-size: 20px;
          line-height: 1;
          flex-shrink: 0;
        }

        .quiz-intro {
          background: var(--bg-elevated);
          border: 1px solid var(--border-mid);
          border-radius: var(--r-md);
          padding: 14px 18px;
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 24px;
          line-height: 1.65;
        }

        .q-block {
          background: var(--bg-elevated);
          border: 1px solid var(--border-mid);
          border-radius: var(--r-lg);
          overflow: hidden;
          margin-bottom: 16px;
        }

        .q-header {
          padding: 16px 20px;
          border-bottom: 1px solid var(--border);
        }

        .q-meta {
          font-size: 10px;
          color: var(--text-muted);
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 7px;
          text-transform: uppercase;
        }

        .q-text {
          font-size: 14.5px;
          font-weight: 600;
          line-height: 1.5;
        }

        .q-options {
          padding: 14px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .q-opt {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 16px;
          background: var(--bg-input);
          border: 1px solid var(--border-mid);
          border-radius: var(--r-md);
          font-size: 13.5px;
          color: var(--text-secondary);
          cursor: pointer;
          text-align: left;
        }

        .q-opt.correct {
          background: var(--green-l);
          border-color: rgba(42, 122, 74, 0.4);
          color: #4aad72;
        }

        .q-opt.wrong {
          background: var(--coral-l);
          border-color: rgba(192, 64, 48, 0.4);
          color: #e07060;
        }

        .q-opt.disabled {
          cursor: default;
          pointer-events: none;
        }

        .q-letter {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid var(--border-mid);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .q-expl {
          padding: 14px 20px;
          border-top: 1px solid var(--border);
        }

        .expl-c,
        .expl-w {
          padding: 12px 16px;
          border-radius: var(--r-md);
          font-family: var(--font-serif);
          line-height: 1.65;
          font-size: 13px;
        }

        .expl-c {
          background: var(--green-l);
          border: 1px solid rgba(42, 122, 74, 0.25);
          color: #4aad72;
        }

        .expl-w {
          background: var(--coral-l);
          border: 1px solid rgba(192, 64, 48, 0.25);
          color: #e07060;
        }

        .score-box {
          text-align: center;
          padding: 32px 24px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-mid);
          border-radius: var(--r-xl);
          margin-top: 20px;
        }

        .score-num {
          font-size: 52px;
          font-weight: 700;
          letter-spacing: -2px;
        }

        .score-label {
          font-size: 14px;
          color: var(--text-muted);
          margin-top: 8px;
        }

        .discere-cta {
          background: linear-gradient(135deg, var(--bg-elevated) 0%, rgba(184, 114, 10, 0.07) 100%);
          border: 1px solid var(--accent-b);
          border-radius: var(--r-xl);
          padding: 28px;
          margin: 28px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .cta-eyebrow {
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--accent-3);
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .cta-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .cta-sub {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.55;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          padding: 12px 22px;
          background: var(--accent);
          color: #fff;
          font-size: 13.5px;
          font-weight: 700;
          border-radius: var(--r-md);
          border: none;
        }

        .matura-box {
          background: var(--amber-l);
          border: 1px solid var(--amber-b);
          border-radius: var(--r-xl);
          overflow: hidden;
          margin: 28px 0;
        }

        .matura-header {
          background: var(--amber);
          padding: 10px 18px;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #fff;
          text-transform: uppercase;
        }

        .matura-list {
          list-style: none;
          padding: 14px 18px;
        }

        .matura-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: var(--font-serif);
          font-size: 13.5px;
          color: rgba(240, 242, 248, 0.8);
          padding: 7px 0;
          line-height: 1.6;
        }

        .mi-diamond {
          width: 7px;
          height: 7px;
          background: var(--amber);
          transform: rotate(45deg);
          flex-shrink: 0;
          margin-top: 6px;
        }

        .writing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }

        .writing-card {
          background: var(--bg-elevated);
          border: 1px solid var(--border-mid);
          border-radius: var(--r-lg);
          padding: 18px;
        }

        .writing-card-title {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .writing-card-meta {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 8px;
          line-height: 1.6;
        }

        .writing-card-text {
          font-family: var(--font-serif);
          font-size: 13.5px;
          line-height: 1.7;
          color: rgba(240, 242, 248, 0.84);
        }

        .writing-mini-callout {
          margin-top: 12px;
          padding: 10px 12px;
          border-radius: 10px;
          background: rgba(42, 106, 176, 0.12);
          border: 1px solid rgba(42, 106, 176, 0.24);
          font-size: 12.5px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .writing-list {
          list-style: none;
          margin-top: 6px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .writing-list li {
          position: relative;
          padding-left: 18px;
          font-family: var(--font-serif);
          font-size: 14px;
          line-height: 1.75;
          color: rgba(240, 242, 248, 0.84);
        }

        .writing-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          top: 0;
          color: var(--accent-3);
          font-weight: 700;
        }

        .nav-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          gap: 12px;
          flex-wrap: wrap;
        }

        .nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-muted);
          padding: 8px 16px;
          border: 1px solid var(--border-mid);
          border-radius: var(--r-md);
          background: transparent;
          cursor: pointer;
        }

        .nav-btn.primary {
          background: var(--accent);
          color: #fff;
          border-color: var(--accent);
          font-weight: 600;
        }

        .nav-btn.disabled {
          opacity: 0.3;
          pointer-events: none;
        }

        .sid-overview-btn {
          display: flex;
          align-items: center;
          width: calc(100% - 24px);
          margin: 0 12px 8px;
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--text-secondary);
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          cursor: pointer;
          transition: 0.2s ease;
          text-align: left;
          gap: 8px;
        }

        .sid-overview-btn.active,
        .sid-overview-btn:hover {
          background: rgba(255,255,255,0.08);
          border-color: var(--border-mid);
          color: var(--text-primary);
        }

        /* ── Overview Panel ───────────────────────────────── */
        .overview-panel {
          max-width: 900px;
          padding-bottom: 48px;
        }

        .overview-eyebrow {
          display: inline-block;
          padding: 5px 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-mid);
          border-radius: 20px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1.4px;
          color: var(--text-secondary);
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .overview-title {
          font-family: var(--font-serif);
          font-size: clamp(24px,4vw,38px);
          font-weight: 700;
          font-style: italic;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
        }

        .overview-sub {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 36px;
        }

        .overview-sections {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .overview-group-title {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--amber);
          margin-bottom: 10px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border);
        }

        .overview-chapter-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .overview-ch-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--r-md);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          cursor: pointer;
          text-align: left;
          transition: 0.15s ease;
          color: var(--text-primary);
        }

        .overview-ch-btn:hover:not(:disabled) {
          background: var(--bg-hover);
          border-color: var(--border-mid);
        }

        .overview-ch-btn.dim {
          opacity: 0.45;
          cursor: default;
        }

        .overview-ch-num {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.06);
          border-radius: 7px;
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
        }

        .overview-ch-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .overview-ch-title {
          font-size: 13.5px;
          font-weight: 600;
          font-family: var(--font-serif);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .overview-ch-opis {
          font-size: 11.5px;
          color: var(--text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .overview-ch-arrow {
          flex-shrink: 0;
          color: var(--text-muted);
          font-size: 14px;
          transition: transform 0.15s;
        }

        .overview-ch-btn:hover:not(:disabled) .overview-ch-arrow {
          transform: translateX(3px);
          color: var(--text-secondary);
        }

        .overview-ch-soon {
          flex-shrink: 0;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--text-muted);
          background: rgba(255,255,255,0.05);
          padding: 3px 8px;
          border-radius: 8px;
        }

        .sid-pricing-wrap {
          padding: 10px 12px;
          border-top: 1px solid var(--border);
          margin-top: 4px;
        }

        .sid-pricing-btn {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          color: var(--amber);
          background: rgba(212,137,10,0.08);
          border: 1px solid rgba(212,137,10,0.2);
          cursor: pointer;
          transition: 0.2s ease;
          text-align: left;
          gap: 8px;
        }

        .sid-pricing-btn.active,
        .sid-pricing-btn:hover {
          background: rgba(212,137,10,0.16);
          border-color: rgba(212,137,10,0.4);
        }

        .pricing-hero-badges {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .pricing-hero-badge {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .pricing-section-title {
          font-family: var(--font-serif);
          font-size: clamp(18px,3vw,26px);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .pricing-section-subtitle {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        /* ── Comparison Table ─────────────────────────────── */
        .pricing-comparison {
          margin-bottom: 40px;
          max-width: 900px;
        }

        .pricing-comparison-wrap {
          overflow-x: auto;
          border: 1px solid var(--border-mid);
          border-radius: var(--r-lg);
          background: var(--bg-elevated);
        }

        .pricing-comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
          min-width: 600px;
        }

        .pricing-comparison-table thead {
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-mid);
        }

        .pricing-comparison-table th {
          padding: 14px 16px;
          text-align: left;
          font-family: var(--font-serif);
          font-weight: 700;
          color: var(--text-primary);
          font-size: 13px;
        }

        .pricing-comparison-table th:first-child { width: 42%; }
        .tier-col { text-align: center; width: 19%; }

        .pricing-comparison-table td {
          padding: 10px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: var(--text-secondary);
        }

        .cell-feature { color: var(--text-primary); font-weight: 500; }
        .cell-tier { text-align: center; }

        .pricing-comparison-table tr.row-section td {
          background: rgba(255,255,255,0.03);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--amber);
          padding: 8px 16px;
        }

        .pcheck { color: #4aad72; font-weight: 700; }
        .pcross { color: var(--text-muted); opacity: 0.5; }
        .ppartial { color: var(--amber); font-size: 12px; font-weight: 600; }

        /* ── Footer note ──────────────────────────────────── */
        .pricing-footer-note {
          font-size: 11px;
          color: var(--text-muted);
          text-align: center;
          padding: 16px 0 8px;
          letter-spacing: 0.4px;
          border-top: 1px solid var(--border);
          margin-top: 8px;
        }

        /* ── EXISTING pricing CSS below ───────────────────── */
        .pricing-panel {
          max-width: 1200px;
          margin: 0 auto;
          padding-bottom: 48px;
        }

        .pricing-panel-eyebrow {
          display: inline-block;
          padding: 5px 14px;
          background: rgba(212,137,10,0.1);
          border: 1px solid rgba(212,137,10,0.25);
          border-radius: 20px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1.4px;
          color: var(--amber);
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .pricing-panel-title {
          font-family: var(--font-serif);
          font-size: clamp(26px,4vw,40px);
          font-weight: 700;
          font-style: italic;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
        }

        .pricing-panel-sub {
          font-size: 15px;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.65;
          margin-bottom: 36px;
        }

        .pricing-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(270px,1fr));
          gap: 16px;
          margin-bottom: 48px;
        }

        .pricing-card {
          position: relative;
          padding: 24px 22px;
          border: 1px solid;
          border-radius: var(--r-xl);
          transition: transform 0.2s ease;
        }

        .pricing-card:hover { transform: translateY(-2px); }

        @keyframes sparkle-pop {
          0%, 100% { opacity: 0; transform: scale(0.3) rotate(0deg); }
          45% { opacity: 1; transform: scale(1.4) rotate(22deg); }
          65% { opacity: 0.6; transform: scale(0.9) rotate(-8deg); }
        }
        @keyframes sparkle-drift {
          0%, 100% { opacity: 0; transform: translate(0,0) scale(0.4); }
          50% { opacity: 1; transform: translate(2px,-5px) scale(1.1); }
        }
        @keyframes glow-pulse-std {
          0%, 100% { box-shadow: 0 0 8px rgba(255,107,43,0.12), 0 4px 24px rgba(255,107,43,0.07); }
          50% { box-shadow: 0 0 28px rgba(255,107,43,0.28), 0 8px 40px rgba(255,107,43,0.16); }
        }
        @keyframes glow-pulse-pro {
          0%, 100% { box-shadow: 0 0 0 1px rgba(75,123,255,0.3), 0 16px 48px rgba(75,123,255,0.14); }
          50% { box-shadow: 0 0 0 1px rgba(75,123,255,0.6), 0 16px 64px rgba(75,123,255,0.3), 0 0 44px rgba(75,123,255,0.18); }
        }
        @keyframes shimmer-sweep {
          0% { left: -80%; }
          100% { left: 140%; }
        }

        .pricing-sparkle-std {
          overflow: hidden;
          animation: glow-pulse-std 3s ease-in-out infinite;
        }
        .pricing-sparkle-std::after {
          content: '';
          position: absolute;
          top: 0; left: -80%;
          width: 55%;
          height: 100%;
          background: linear-gradient(90deg,transparent 0%,rgba(255,107,43,0.11) 50%,transparent 100%);
          transform: skewX(-18deg);
          animation: shimmer-sweep 4.5s ease-in-out infinite;
          pointer-events: none;
        }

        .pricing-sparkle-pro {
          overflow: hidden;
          padding-top: 22px;
          animation: glow-pulse-pro 2.4s ease-in-out infinite;
        }
        .pricing-sparkle-pro::after {
          content: '';
          position: absolute;
          top: 0; left: -80%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg,transparent 0%,rgba(75,123,255,0.15) 50%,transparent 100%);
          transform: skewX(-18deg);
          animation: shimmer-sweep 3.2s ease-in-out infinite;
          pointer-events: none;
        }

        .sparkle-dot {
          position: absolute;
          pointer-events: none;
          user-select: none;
          line-height: 1;
          z-index: 2;
        }
        .sparkle-dot.std-1 { top: 14px; right: 18px; font-size: 13px; color: #ff6b2b; animation: sparkle-pop 2.8s 0.1s ease-in-out infinite; }
        .sparkle-dot.std-2 { top: 54px; right: 12px; font-size: 8px; color: #ffab85; animation: sparkle-pop 2.8s 1.1s ease-in-out infinite; }
        .sparkle-dot.std-3 { bottom: 64px; right: 16px; font-size: 10px; color: #ff6b2b; animation: sparkle-drift 2.8s 2s ease-in-out infinite; }
        .sparkle-dot.pro-1 { top: 36px; right: 18px; font-size: 14px; color: #4b7bff; animation: sparkle-pop 2.2s 0s ease-in-out infinite; }
        .sparkle-dot.pro-2 { top: 72px; right: 11px; font-size: 9px; color: #8fa8ff; animation: sparkle-drift 2.2s 0.7s ease-in-out infinite; }
        .sparkle-dot.pro-3 { bottom: 88px; right: 15px; font-size: 11px; color: #4b7bff; animation: sparkle-pop 2.2s 1.4s ease-in-out infinite; }
        .sparkle-dot.pro-4 { top: 110px; left: 12px; font-size: 8px; color: #c4d0ff; animation: sparkle-drift 3s 0.3s ease-in-out infinite; }

        .pricing-recommended {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          padding: 4px 14px;
          border-radius: 14px;
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          white-space: nowrap;
          color: #fff;
        }

        .pricing-card-name {
          font-family: var(--font-serif);
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .pricing-card-tagline {
          font-size: 12.5px;
          color: var(--text-muted);
          font-style: italic;
          margin-bottom: 18px;
        }

        .pricing-card-price {
          font-family: var(--font-serif);
          font-size: 38px;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
          margin-bottom: 20px;
        }

        .pricing-card-per {
          font-size: 14px;
          color: var(--text-muted);
          font-weight: 400;
          margin-left: 6px;
          font-family: var(--font-sans);
        }

        .pricing-card-cta {
          display: block;
          width: 100%;
          padding: 12px 18px;
          border-radius: var(--r-md);
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.15s ease, transform 0.15s ease;
          margin-bottom: 20px;
          font-family: var(--font-sans);
        }

        .pricing-card-cta:hover { opacity: 0.88; transform: translateY(-1px); }

        @keyframes cta-glow-std {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,107,43,0); }
          50% { box-shadow: 0 0 16px 3px rgba(255,107,43,0.45), 0 4px 24px rgba(255,107,43,0.25); }
        }
        @keyframes cta-glow-pro {
          0%, 100% { box-shadow: 0 0 0 0 rgba(75,123,255,0); }
          50% { box-shadow: 0 0 20px 4px rgba(75,123,255,0.55), 0 4px 28px rgba(75,123,255,0.3); }
        }

        .pricing-sparkle-std .pricing-card-cta {
          animation: cta-glow-std 2.2s ease-in-out infinite;
        }
        .pricing-sparkle-pro .pricing-card-cta {
          animation: cta-glow-pro 1.8s ease-in-out infinite;
        }

        .pricing-feats {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .pricing-feats li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 5px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .pricing-feats li:last-child { border-bottom: none; }
        .pricing-feats li.feat-dim { opacity: 0.4; }
        .pricing-feat-icon { flex-shrink: 0; line-height: 1.6; }

        .pricing-faq-section {
          max-width: 760px;
          margin-bottom: 40px;
        }

        .pricing-faq-item {
          background: var(--bg-elevated);
          border: 1px solid var(--border-mid);
          border-radius: var(--r-lg);
          overflow: hidden;
          margin-bottom: 8px;
        }

        .pricing-faq-q {
          padding: 14px 20px;
          cursor: pointer;
          font-family: var(--font-serif);
          font-size: 14.5px;
          font-weight: 700;
          color: var(--text-primary);
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: color 0.15s;
        }

        .pricing-faq-q::-webkit-details-marker { display: none; }

        .pricing-faq-q::after {
          content: "+";
          font-size: 20px;
          color: var(--amber);
          font-weight: 300;
          transition: transform 0.2s;
        }

        details[open] .pricing-faq-q::after { transform: rotate(45deg); }
        .pricing-faq-q:hover { color: var(--amber); }

        .pricing-faq-a {
          padding: 0 20px 16px;
          font-family: var(--font-serif);
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .pricing-final-cta {
          background: var(--bg-elevated);
          border: 1px solid var(--border-mid);
          border-radius: var(--r-xl);
          padding: 32px 28px;
          text-align: center;
          max-width: 600px;
        }

        .pricing-final-title {
          font-family: var(--font-serif);
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .pricing-final-sub {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .pricing-final-btns {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .pricing-final-btns .pricing-card-cta {
          display: inline-block;
          width: auto;
          margin-bottom: 0;
        }

        @media (max-width: 720px) {
          .pricing-cards-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 980px) {
          :root { --sidebar-w: 290px; }
        }

        @media (max-width: 720px) {
          .inline-back-btn {
            margin: 18px 18px 0;
            width: calc(100% - 36px);
            justify-content: center;
          }

          .shell {
            flex-direction: column;
            width: 100%;
            max-width: 100%;
          }

          .sidebar {
            position: relative;
            height: auto;
          }

          .sidebar.open {
            width: 100%;
            min-width: 100%;
            max-width: 100%;
            opacity: 1;
          }

          .sidebar.closed {
            width: 0;
            min-width: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            border-right: none;
          }

          .main {
            width: 100%;
          }

          .main-topbar {
            padding: 18px 18px 0;
          }

          .sidebar-toggle-btn {
            width: 100%;
            justify-content: center;
          }

          .content-wrap {
            padding: 24px 18px 80px;
          }

          .hero-title {
            font-size: 26px;
          }

          .block-quick-grid {
            grid-template-columns: 1fr;
          }

          .concept-row {
            grid-template-columns: 1fr;
          }

          .concept-key {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }

          .writing-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ══ H06 ONJEGIN TAB — shared Lit-style classes ══ */

        /* CSS custom properties bridge */
        .layer.on {
          --bronze:   #c87941; --dim-br: rgba(200,121,65,.13); --bd-br: rgba(200,121,65,.28);
          --gold:     #e0a23a; --dim-go: rgba(224,162,58,.12);  --bd-go: rgba(224,162,58,.25);
          --teal:     #3ac0a8; --dim-t:  rgba(58,192,168,.12);  --bd-t:  rgba(58,192,168,.25);
          --green:    #4aad72; --dim-g:  rgba(74,173,114,.12);  --bd-g:  rgba(74,173,114,.25);
          --red:      #c44040; --dim-r:  rgba(196,64,64,.12);   --bd-r:  rgba(196,64,64,.28);
          --sienna:   #c07040; --dim-s:  rgba(192,112,64,.12);
          --parchment:#d4b98c;
          --bd:   var(--border);  --bdm: var(--border-mid);
          --t1:   var(--text-primary); --t2: var(--text-secondary);
          --hov:  var(--bg-hover);
          --r1:6px; --r3:12px; --r4:16px;
          --mono: var(--font-mono, 'JetBrains Mono', monospace);
          --serif: var(--font-serif);
          --display: var(--font-sans, sans-serif);
          --bronze-l: #d89a6a;
        }

        /* Pills */
        .layer.on .tags { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:22px; }
        .layer.on .pill { display:inline-flex; align-items:center; padding:5px 14px; border-radius:20px; font-size:12px; font-weight:600; border:1px solid; }
        .layer.on .pill.p-br { background:var(--dim-br); color:var(--bronze); border-color:var(--bd-br); }
        .layer.on .pill.p-go { background:var(--dim-go); color:var(--gold);   border-color:var(--bd-go); }
        .layer.on .pill.p-r  { background:var(--dim-r);  color:var(--red);    border-color:var(--bd-r);  }
        .layer.on .pill.p-t  { background:var(--dim-t);  color:var(--teal);   border-color:var(--bd-t);  }
        .layer.on .pill.p-pa { background:rgba(212,185,140,.1); color:var(--parchment); border-color:rgba(212,185,140,.22); }

        /* Intro / Signal / Warn / Tip boxes */
        .layer.on .box-int { background:linear-gradient(135deg,rgba(220,50,47,.08),rgba(232,201,122,.03)); border:1px solid var(--bd-br); border-radius:var(--r4); padding:18px 22px; margin:14px 0; position:relative; overflow:hidden; }
        .layer.on .box-int::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:linear-gradient(180deg,var(--bronze),var(--gold)); border-radius:2px 0 0 2px; }
        .layer.on .box-int-lbl { font-size:8.5px; font-weight:600; letter-spacing:2.5px; color:var(--bronze); text-transform:uppercase; margin-bottom:9px; display:flex; align-items:center; gap:8px; }
        .layer.on .box-int-txt { font-family:var(--serif); font-size:14.5px; color:var(--t1); line-height:1.9; }
        .layer.on .box-int-txt em { color:var(--bronze-l); font-style:italic; }
        .layer.on .box-int-txt strong,.layer.on .box-int-txt b { color:var(--gold); font-weight:600; }

        .layer.on .box-warn { background:rgba(192,66,68,.07); border:1px solid var(--bd-r); border-radius:var(--r3); padding:14px 18px; margin:13px 0; display:flex; gap:13px; position:relative; overflow:hidden; }
        .layer.on .box-warn::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:var(--red); }
        .layer.on .bw-ico { font-size:17px; flex-shrink:0; margin-top:1px; }
        .layer.on .bw-body { flex:1; }
        .layer.on .bw-title { font-size:8.5px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:var(--red); margin-bottom:5px; }
        .layer.on .bw-txt { font-family:var(--serif); font-size:13.5px; line-height:1.78; color:var(--t2); }
        .layer.on .bw-txt strong,.layer.on .bw-txt b { color:var(--red); }

        .layer.on .box-signal { background:linear-gradient(135deg,rgba(232,201,122,.08),rgba(220,50,47,.03)); border:1px solid var(--bd-go); border-radius:var(--r4); padding:16px 22px; margin:14px 0; position:relative; overflow:hidden; }
        .layer.on .box-signal::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:var(--gold); }
        .layer.on .box-signal-lbl { font-size:8.5px; font-weight:600; letter-spacing:2.5px; color:var(--gold); text-transform:uppercase; margin-bottom:9px; display:flex; align-items:center; gap:8px; }
        .layer.on .box-signal-txt { font-family:var(--serif); font-size:13.5px; color:var(--t2); line-height:1.85; }
        .layer.on .box-signal-txt strong { color:var(--gold); }

        .layer.on .box-tip { background:rgba(107,142,127,.07); border:1px solid var(--bd-t); border-radius:var(--r3); padding:14px 18px; margin:13px 0; display:flex; gap:13px; position:relative; overflow:hidden; }
        .layer.on .box-tip::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:var(--teal); }
        .layer.on .bt-body { flex:1; }
        .layer.on .bt-title { font-size:8.5px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:var(--teal); margin-bottom:5px; }
        .layer.on .bt-txt { font-family:var(--serif); font-size:13.5px; line-height:1.78; color:var(--t2); }
        .layer.on .bt-txt strong,.layer.on .bt-txt b { color:var(--teal); }

        /* Box-20 numbered list */
        .layer.on .box-20 { background:linear-gradient(135deg,rgba(107,148,100,.08),rgba(107,142,127,.03)); border:1px solid var(--bd-g); border-radius:var(--r4); padding:20px 24px; margin:16px 0; position:relative; overflow:hidden; }
        .layer.on .box-20::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:var(--green); }
        .layer.on .b20-lbl { font-size:8.5px; font-weight:600; letter-spacing:2.5px; color:var(--green); text-transform:uppercase; margin-bottom:14px; display:flex; align-items:center; gap:8px; padding-bottom:11px; border-bottom:1px solid var(--bd-g); }
        .layer.on .b20-list { list-style:none; display:flex; flex-direction:column; gap:0; margin:0; padding:0; }
        .layer.on .b20-item { display:flex; align-items:flex-start; gap:13px; font-family:var(--serif); font-size:14.5px; color:var(--t1); line-height:1.65; padding:11px 0; border-bottom:1px dashed rgba(107,148,100,.18); }
        .layer.on .b20-item:last-child { border-bottom:none; padding-bottom:2px; }
        .layer.on .b20-item:first-child { padding-top:2px; }
        .layer.on .b20-num { flex-shrink:0; width:26px; height:26px; display:flex; align-items:center; justify-content:center; background:var(--dim-g); border:1px solid var(--bd-g); border-radius:50%; font-size:11px; font-weight:700; color:var(--green); margin-top:1px; }
        .layer.on .b20-txt { flex:1; min-width:0; }
        .layer.on .b20-txt b { color:var(--gold); font-weight:600; }
        .layer.on .b20-txt em { color:var(--bronze-l); font-style:italic; }

        /* Section header */
        .layer.on .sec-hdr { display:flex; align-items:center; gap:12px; margin:28px 0 16px; }
        .layer.on .sec-line { flex:1; height:1px; background:var(--border); }
        .layer.on .sec-badge { font-size:9px; font-weight:700; letter-spacing:2.2px; color:var(--text-muted); text-transform:uppercase; white-space:nowrap; }

        /* Stat grid */
        .layer.on .sg { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:14px; margin:0 0 16px; }
        .layer.on .sc { background:var(--bg-elevated); border:1px solid var(--border-mid); border-radius:var(--r3); padding:14px 16px; }
        .layer.on .sc-ico { font-family:var(--mono); font-size:9.5px; font-weight:700; padding:3px 9px; border-radius:6px; display:inline-flex; margin-bottom:11px; }
        .layer.on .sc-name { font-size:13px; font-weight:700; color:var(--t1); margin-bottom:5px; line-height:1.3; }
        .layer.on .sc-desc { font-size:11px; color:var(--t2); line-height:1.55; }
        .layer.on .si-br { background:var(--dim-br); color:var(--bronze); }
        .layer.on .si-go { background:var(--dim-go); color:var(--gold); }
        .layer.on .si-t,.layer.on .si-te  { background:var(--dim-t); color:var(--teal); }
        .layer.on .si-r,.layer.on .si-re  { background:var(--dim-r); color:var(--red); }
        .layer.on .si-pa { background:rgba(212,185,140,.12); color:var(--parchment); }

        /* Concepts table */
        .layer.on .con { border:1px solid var(--bdm); border-radius:var(--r3); overflow:hidden; margin:13px 0 22px; }
        .layer.on .cr  { display:grid; grid-template-columns:minmax(160px,36%) 1fr; border-bottom:1px solid var(--bd); }
        .layer.on .cr:last-child { border-bottom:none; }
        .layer.on .cr:nth-child(even) { background:rgba(220,50,47,.02); }
        .layer.on .cr:hover { background:var(--hov); }
        .layer.on .ck { padding:11px 14px; font-size:11px; font-weight:600; border-right:1px solid var(--bd); position:relative; padding-left:19px; }
        .layer.on .ck::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; border-radius:0 2px 2px 0; }
        .layer.on .ck.br { color:var(--bronze-l); } .layer.on .ck.br::before { background:var(--bronze); }
        .layer.on .ck.go { color:var(--gold); }      .layer.on .ck.go::before { background:var(--gold); }
        .layer.on .ck.t,.layer.on .ck.te { color:var(--teal); }  .layer.on .ck.t::before,.layer.on .ck.te::before { background:var(--teal); }
        .layer.on .ck.re { color:var(--red); }       .layer.on .ck.re::before { background:var(--red); }
        .layer.on .ck.pa { color:var(--parchment); } .layer.on .ck.pa::before { background:var(--parchment); }
        .layer.on .cv { padding:11px 16px; font-family:var(--serif); font-size:13.5px; color:var(--t2); line-height:1.6; }
        .layer.on .cv b,.layer.on .cv strong { font-weight:600; color:var(--t1); }
        .layer.on .cv em { color:var(--bronze-l); font-style:italic; }

        /* Oneginski strofa viz */
        .layer.on .oneginski-viz { background:var(--bg-elevated); border:1px solid var(--border-mid); border-radius:var(--r4); padding:18px 22px; margin:16px 0; font-family:var(--mono); }
        .layer.on .oneginski-viz-caption { font-size:9px; font-weight:700; letter-spacing:2px; color:var(--text-muted); text-transform:uppercase; margin-bottom:14px; }
        .layer.on .oneginski-viz-row { display:flex; align-items:baseline; gap:10px; padding:4px 0; border-bottom:1px dashed rgba(255,255,255,.05); }
        .layer.on .oneginski-viz-row:last-of-type { border-bottom:none; }
        .layer.on .oneginski-viz-num { width:28px; font-size:10px; color:var(--text-muted); text-align:right; flex-shrink:0; }
        .layer.on .oneginski-viz-rhyme { width:18px; text-align:center; font-size:11px; font-weight:700; flex-shrink:0; padding:2px 5px; border-radius:4px; }
        .layer.on .oneginski-viz-rhyme.A { background:var(--dim-br); color:var(--bronze); }
        .layer.on .oneginski-viz-rhyme.B,.layer.on .oneginski-viz-rhyme.lc { background:rgba(255,255,255,.06); color:var(--text-secondary); }
        .layer.on .oneginski-viz-rhyme.C { background:var(--dim-go); color:var(--gold); }
        .layer.on .oneginski-viz-rhyme.d { background:rgba(255,255,255,.06); color:var(--text-secondary); }
        .layer.on .oneginski-viz-rhyme.E { background:var(--dim-t); color:var(--teal); }
        .layer.on .oneginski-viz-rhyme.f { background:rgba(255,255,255,.06); color:var(--text-secondary); }
        .layer.on .oneginski-viz-rhyme.g { background:var(--dim-r); color:var(--red); }
        .layer.on .oneginski-viz-text { font-family:var(--serif); font-size:13px; color:var(--t2); line-height:1.5; }
        .layer.on .oneginski-viz-legend { display:flex; flex-wrap:wrap; gap:16px; margin-top:14px; padding-top:12px; border-top:1px solid var(--border); font-size:11px; color:var(--text-muted); align-items:center; }

        /* Puškin timeline */
        .layer.on .puskin-timeline { display:flex; flex-direction:column; gap:0; margin:14px 0 24px; border:1px solid var(--border-mid); border-radius:var(--r4); overflow:hidden; }
        .layer.on .pt-event { display:grid; grid-template-columns:90px 1fr; border-bottom:1px solid var(--border); }
        .layer.on .pt-event:last-child { border-bottom:none; }
        .layer.on .pt-date { padding:12px 14px; font-family:var(--mono); font-size:11px; font-weight:700; color:var(--text-muted); background:var(--bg-surface,rgba(255,255,255,.03)); border-right:1px solid var(--border); display:flex; align-items:center; justify-content:center; text-align:center; line-height:1.3; }
        .layer.on .pt-date.pt-major { color:var(--bronze); background:var(--dim-br); }
        .layer.on .pt-body { padding:12px 16px; }
        .layer.on .pt-title { font-size:13px; font-weight:700; color:var(--t1); margin-bottom:4px; }
        .layer.on .pt-desc { font-family:var(--serif); font-size:12.5px; color:var(--t2); line-height:1.65; }
        .layer.on .pt-desc b,.layer.on .pt-desc strong { font-weight:600; color:var(--t1); }
        .layer.on .pt-desc em { color:var(--bronze-l); font-style:italic; }

        /* Feature callout */
        .layer.on .feature-callout { background:linear-gradient(135deg,var(--bg-elevated) 0%,rgba(184,114,10,.07) 100%); border:1px solid var(--border-mid); border-radius:var(--r4); padding:22px 26px; margin:24px 0; }

        /* Nav buttons (.nb = nav-button shorthand) */
        .layer.on .nb { display:inline-flex; align-items:center; gap:6px; font-size:13px; color:var(--text-muted); padding:8px 16px; border:1px solid var(--border-mid); border-radius:12px; background:transparent; cursor:pointer; user-select:none; }
        .layer.on .nb.primary { background:var(--accent); color:#fff; border-color:var(--accent); font-weight:600; }
        .layer.on .nb:hover { background:var(--bg-hover); }
        .layer.on .nb.primary:hover { filter:brightness(1.1); }
      `}</style>
    </div>
  )
}