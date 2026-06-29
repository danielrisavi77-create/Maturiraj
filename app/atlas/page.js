'use client'
import { useState } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import UpgradePrompt from '@/components/shared/UpgradePrompt'
import NavUserChip from '@/components/layout/NavUserChip'

// ─── Atlas data — all 18 chapters: formulas, traps, 1 example ─────────────────
const ATLAS = [
  {
    id: 'p01', title: 'Skupovi i Brojevi', icon: '🔢',
    formulas: [
      { f: 'A∪B, A∩B, A\\B', d: 'Unija, presjek, razlika skupova' },
      { f: 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ', d: 'Hijerarhija skupova brojeva' },
      { f: '|a| = a (a≥0), −a (a<0)', d: 'Apsolutna vrijednost' },
      { f: '√a · √b = √(ab)', d: 'Produkt korijena (a,b ≥ 0)' },
    ],
    traps: ['|a+b| ≤ |a|+|b| — trokutna nejednakost, ne jednakost', 'ℚ i (ℝ\\ℚ) zajedno grade ℝ'],
    primer: 'A={1,2,3,4}, B={2,4,6} → A∩B={2,4}, A∪B={1,2,3,4,6}, A\\B={1,3}',
  },
  {
    id: 'p02', title: 'Potencije i Korijeni', icon: '⚡',
    formulas: [
      { f: 'aᵐ·aⁿ = aᵐ⁺ⁿ', d: 'Produkt istih baza' },
      { f: '(aᵐ)ⁿ = aᵐⁿ', d: 'Potencija potencije' },
      { f: 'ⁿ√aᵐ = aᵐ/ⁿ', d: 'Koren kao potencija' },
      { f: 'a⁻ⁿ = 1/aⁿ', d: 'Negativni eksponent' },
    ],
    traps: ['(a+b)² ≠ a²+b² — razviti kvadrat binoma!', 'ⁿ√(aⁿ) = |a| za parni n'],
    primer: '8^(2/3) = (⁸√8)² — Iskoristi ⁸√8 = 2, dakle 2² = 4.',
  },
  {
    id: 'p03', title: 'Polinomi', icon: '📐',
    formulas: [
      { f: '(a+b)² = a²+2ab+b²', d: 'Kvadrat zbroja' },
      { f: '(a−b)(a+b) = a²−b²', d: 'Razlika kvadrata' },
      { f: '(a+b)³ = a³+3a²b+3ab²+b³', d: 'Kub zbroja' },
      { f: 'p(a)=0 → (x−a) | p(x)', d: 'Bézetov teorem' },
    ],
    traps: ['(a+b+c)² = a²+b²+c²+2ab+2ac+2bc — tri mješovita člana!', 'Nultočka polinom ≠ nultočka ulomka (pogledaj uvjet def.)'],
    primer: 'x³−8 = (x−2)(x²+2x+4). Primjena razlike kubova: a=x, b=2.',
  },
  {
    id: 'p04', title: 'Jednadžbe', icon: '⚖️',
    formulas: [
      { f: 'ax²+bx+c=0: x=(−b±√D)/2a', d: 'Kvadratna jednadžba, D=b²−4ac' },
      { f: 'D>0: 2 rjš | D=0: 1 rjš | D<0: 0 rjš', d: 'Broj rješenja po D' },
      { f: 'x₁+x₂=−b/a, x₁·x₂=c/a', d: 'Vièteovi teoremi' },
      { f: '|ax+b|=c → ax+b=±c', d: 'Jednadžba s aps. vrijednosti' },
    ],
    traps: ['D<0 za realne x — ali kompleksna rješenja postoje!', 'Provjeri uvjete definiranosti kod ulomačnih jednadžbi'],
    primer: 'x²−5x+6=0: D=25−24=1. x₁=(5+1)/2=3, x₂=(5−1)/2=2.',
  },
  {
    id: 'p05', title: 'Funkcija — pojam', icon: '📊',
    formulas: [
      { f: 'Domena (D_f) i kodomena', d: 'f:D_f→ℝ' },
      { f: '(f∘g)(x) = f(g(x))', d: 'Kompozicija funkcija' },
      { f: 'f⁻¹: ako f injektivna', d: 'Inverzna funkcija' },
      { f: 'y=kx+l: linearna', d: 'Nagib k, ishodišna ordinata l' },
    ],
    traps: ['f(a+b) ≠ f(a)+f(b) osim za linearne', 'Graf f⁻¹ je simetrala od grafa f s obzirom na y=x'],
    primer: 'f(x)=2x+1, g(x)=x². (f∘g)(3)=f(9)=19. (g∘f)(3)=f(3)²=7²=49.',
  },
  {
    id: 'p06', title: 'Kvadratna funkcija', icon: '∪',
    formulas: [
      { f: 'f(x)=ax²+bx+c, tjeme: x_t=−b/2a', d: 'Tjeme parabole' },
      { f: 'y_t = f(x_t) = c − b²/4a', d: 'Min (a>0) ili max (a<0)' },
      { f: 'Nulišta: diskriminanta D=b²−4ac', d: 'Presjeci s x-osi' },
      { f: 'f(x)=a(x−p)²+q', d: 'Tjemeni oblik — tjeme (p,q)' },
    ],
    traps: ['a<0: parabolaid je okrenuta — MAX, ne minimum', 'Tjemeni oblik: a(x−p)²+q, ne a(x+p)²+q'],
    primer: 'f(x)=x²−4x+3: x_t=2, y_t=4−8+3=−1. Tjeme: (2,−1). Nulišta: D=4. x=1,3.',
  },
  {
    id: 'p07', title: 'Eksponencijalne i Log. funkcije', icon: '📈',
    formulas: [
      { f: 'aˣ · aʸ = aˣ⁺ʸ', d: 'Produkt eksp. iste baze' },
      { f: 'logₐ(xy) = logₐx + logₐy', d: 'Log produkta' },
      { f: 'logₐ(xⁿ) = n·logₐx', d: 'Log potencije' },
      { f: 'logₐb = log(b)/log(a)', d: 'Promjena baze' },
    ],
    traps: ['Baza a>0, a≠1. Argument mora biti >0!', 'Baza <1 → opadajuća funkcija → smjer nejednakosti se obrće!'],
    primer: 'log₂(8) + log₂(4) = log₂(32) = 5. Ili: log₂(8·4)=log₂(32)=5.',
  },
  {
    id: 'p08', title: 'Trigonometrija', icon: '🔄',
    formulas: [
      { f: 'sin²x+cos²x=1', d: 'Pitagorin identitet (najvažniji!)' },
      { f: 'sin(α±β)=sinα·cosβ±cosα·sinβ', d: 'Adicijska formula za sin' },
      { f: 'cos(α±β)=cosα·cosβ∓sinα·sinβ', d: 'Adicijska formula za cos' },
      { f: 'sinx=a → x=arcsin(a)+2kπ | π−arcsin(a)+2kπ', d: 'Opće rješenje sin' },
    ],
    traps: ['sin(α+β) ≠ sinα+sinβ. Adicijska formula je neophodna.', 'Dva rješenja po periodu za sin i cos. Za tan: jedan po periodu.'],
    primer: 'sin(75°)=sin(45°+30°)=sin45·cos30+cos45·sin30=√6/4+√2/4=(√6+√2)/4.',
  },
  {
    id: 'p09', title: 'Analitička geometrija', icon: '📍',
    formulas: [
      { f: 'd(A,B)=√((x₂−x₁)²+(y₂−y₁)²)', d: 'Udaljenost točaka' },
      { f: 'Pravac: y=kx+l ili ax+by+c=0', d: 'Jednadžba pravca' },
      { f: 'k = tan(φ), k₁⊥k₂ → k₁·k₂=−1', d: 'Nagib i okomitost' },
      { f: 'd(T,p)=|ax₀+by₀+c|/√(a²+b²)', d: 'Udaljenost točke od pravca' },
    ],
    traps: ['Paralelni pravci: jednaki nagibi, različite ishodišne ordinate.', 'Kružnica: središte nije (x, y) iz jednadžbe direktno!'],
    primer: 'Pravac kroz A(1,2) s nagibom k=3: y−2=3(x−1) → y=3x−1.',
  },
  {
    id: 'p10', title: 'Geometrija prostora', icon: '🧊',
    formulas: [
      { f: 'V_kocka=a³, S=6a²', d: 'Kocka — volumen i površina' },
      { f: 'V_valjak=πr²h, S_bočna=2πrh', d: 'Valjak' },
      { f: 'V_stožac=πr²h/3, l=√(r²+h²)', d: 'Stožac, l=izvodnica' },
      { f: 'V_sfera=4πr³/3, S=4πr²', d: 'Sfera' },
    ],
    traps: ['Bočna površina ≠ ukupna površina. Dodaj osnovu!', 'Visina pravilne piramide ≠ izvodnica.'],
    primer: 'Valjak r=3, h=5: V=π·9·5=45π. S_ukupna=2πrh+2πr²=30π+18π=48π.',
  },
  {
    id: 'p11', title: 'Nizovi', icon: '🔢',
    formulas: [
      { f: 'aₙ=a₁+(n−1)d', d: 'n-ti član aritmet. niza, razlika d' },
      { f: 'Sₙ=n(a₁+aₙ)/2', d: 'Suma prvih n članova (arit.)' },
      { f: 'aₙ=a₁·qⁿ⁻¹', d: 'n-ti član geom. niza, kvocijent q' },
      { f: 'Sₙ=a₁(qⁿ−1)/(q−1), q≠1', d: 'Suma geo. niza (q≠1)' },
    ],
    traps: ['Arit. niz: razlika d=aₙ₊₁−aₙ je KONSTANTA.', 'Geom. suma za |q|<1 konvergira: S∞=a₁/(1−q).'],
    primer: 'a₁=2, d=3, n=10: a₁₀=2+9·3=29. S₁₀=10(2+29)/2=155.',
  },
  {
    id: 'p12', title: 'Kombinatorika i Vjerojatnost', icon: '🎲',
    formulas: [
      { f: 'P(n)=n!', d: 'Permutacije n elemenata' },
      { f: 'C(n,k)=n!/(k!(n−k)!)', d: 'Kombinacije (binomni koef.)' },
      { f: 'P(A)=m/n', d: 'Klasična definicija vjerojatnosti' },
      { f: 'P(A∪B)=P(A)+P(B)−P(A∩B)', d: 'Zbrajanje vjerojatnosti' },
    ],
    traps: ['C(n,k)=C(n,n−k). Koristiti ovo smijatelji ili k je veće od n/2!', '0! = 1 po definiciji.'],
    primer: 'C(6,2)=6!/(2!4!)=15. Vjerojatnost izvlačenja 2 karte od srca iz 52: 13/52·12/51.',
  },
  {
    id: 'p13', title: 'Granice funkcija', icon: '∞',
    formulas: [
      { f: 'lim(x→a) f(x)=L', d: 'Definicija limesa' },
      { f: 'Oblik 0/0: faktorizacija ili L\'Hôpital', d: 'Neodređeni oblik' },
      { f: 'lim(x→∞) P(x)/Q(x): djeli s xⁿ (n=vedeg stupnja)', d: 'Limes racioanalne funkcije' },
      { f: 'L\'Hôpital: lim f/g = lim f\'/g\' (za 0/0 ili ∞/∞)', d: 'L\'Hôpitalovo pravilo' },
    ],
    traps: ['0/0 nije rezultat — signal za algebarsku obradu!', 'L\'Hôpital: primjenjivo SAMO za 0/0 ili ∞/∞.'],
    primer: 'lim(x→2)(x²−4)/(x−2): faktorizacija → (x+2)(x−2)/(x−2) = x+2 → 4.',
  },
  {
    id: 'p14', title: 'Derivacije', icon: "f'(x)",
    formulas: [
      { f: '(xⁿ)\'=nxⁿ⁻¹, (sin x)\'=cos x, (eˣ)\'=eˣ', d: 'Osnovne derivacije' },
      { f: '(u·v)\'=u\'v+uv\'', d: 'Pravilo produkta' },
      { f: '(u/v)\'=(u\'v−uv\')/v²', d: 'Pravilo kvocijenta' },
      { f: '(f(g(x)))\'=f\'(g(x))·g\'(x)', d: 'Lančano pravilo' },
    ],
    traps: ['(u·v)\' ≠ u\'·v\'. Uvijek primijeni pravilo produkta!', 'Lančano: vanjska × derivacija unutarnje.'],
    primer: 'f(x)=(3x+1)⁵: f\'=5(3x+1)⁴·3=15(3x+1)⁴. (lančano pravilo)',
  },
  {
    id: 'p15', title: 'Integrali', icon: '∫',
    formulas: [
      { f: '∫xⁿ dx=xⁿ⁺¹/(n+1)+C, n≠−1', d: 'Osnovna tablica' },
      { f: '∫ₐᵇ f(x)dx = F(b)−F(a)', d: 'Newton-Leibniz' },
      { f: 'Supstitucija: u=g(x), du=g\'dx', d: 'Smjena varijable' },
      { f: '∫u dv = uv − ∫v du', d: 'Integracija po dijelovima' },
    ],
    traps: ['Površina < 0 nije moguća — razdvoji interval po nultočkama!', 'Supstitucija: OBAVEZNO zamijeni i dx!'],
    primer: '∫2x(x²+1)³dx: u=x²+1, du=2x dx → ∫u³du=(x²+1)⁴/4+C.',
  },
  {
    id: 'p16', title: 'Složeni maturalni zadaci', icon: '🎯',
    formulas: [
      { f: 'Max/Min na [a,b]: f\'=0 + f(a), f(b)', d: 'Globalni ekstrem: rubovi + stacionarne!' },
      { f: 'Površina: P=∫ₐᵇ(gornja−donja)dx', d: 'Između grafova — uvijek gornja−donja' },
      { f: 'Parametar: napiši uvjet → jednadžba', d: 'Prevesti tekst u matematički uvjet' },
      { f: 'Optimizacija: F(x)=... → F\'=0', d: 'Svesti na jednu varijablu' },
    ],
    traps: ['Na intervalu: UVIJEK provjeri rubove a i b!', 'Površina negativna → kriv redoslijed ili kriva metoda.'],
    primer: 'f(x)=x³−3x na [0,2]: f\'=3x²−3=0→x=1. Usporedi f(0)=0, f(1)=−2, f(2)=2. Max=2.',
  },
  {
    id: 'p17', title: 'Završna sistematizacija', icon: '🏆',
    formulas: [
      { f: 'Pregled svih poglavlja P01–P16', d: 'Consolidacija znanja' },
      { f: 'A razina: C+B+A zadaci u miks', d: 'Kompleksni kombinirani zadaci' },
    ],
    traps: ['Pročitaj zadatak 2× — što točno traži?', 'Provjera: odgovara li broj tekstu zadatka?'],
    primer: 'Strategija ispita: 1. Prepoznaj temu 2. Odaberi metodu 3. Provjeri uvjete 4. Napiši rješenje',
  },
  {
    id: 'p18', title: 'Statistika i Vjerojatnost', icon: '📊',
    formulas: [
      { f: 'P(A)=m/n, P(A̅)=1−P(A)', d: 'Vjerojatnost i komplement' },
      { f: 'P(A∩B)=P(A)·P(B|A)', d: 'Uvjetna vjerojatnost' },
      { f: 'Binomna raspodjela: P(X=k)=C(n,k)pᵏ(1−p)ⁿ⁻ᵏ', d: 'Binomna distribucija' },
      { f: 'M(x̄)=Σxᵢ/n, medijan, mod', d: 'Mjere centralne tendencije' },
    ],
    traps: ['Neovisni eventi: P(A∩B)=P(A)·P(B). Provjeriti neovisnost!', 'Binomna: svaki pokušaj isti p, nezavisni!'],
    primer: 'kovanica 3x, P(≥2 glave)=P(2)+P(3)=C(3,2)(0.5)²(0.5)+C(3,3)(0.5)³=3/8+1/8=1/2.',
  },
]

// ─── UI tokens ────────────────────────────────────────────────────────────────
const C = {
  bg: '#060910', bgSurface: '#0A0E1A', bgCard: '#0E1422',
  t1: '#E4EDFF', t2: '#7A90BB', t3: '#364060',
  blue: '#4D9EFF', cyan: '#22D3EE', green: '#34D399',
  amber: '#F59E0B', red: '#F87171', indigo: '#818CF8', violet: '#C084FC',
  bdm: 'rgba(77,158,255,.13)', bd: 'rgba(77,158,255,.07)',
  mono: "'JetBrains Mono',monospace",
}

const PRINT_CSS = `
@media print {
  body { background: white !important; color: #111 !important; }
  .no-print { display: none !important; }
  .atlas-page { background: white !important; }
  .atlas-chapter { break-inside: avoid; page-break-inside: avoid; margin-bottom: 18px !important; border: 1px solid #ddd !important; background: white !important; }
  .atlas-chapter-title { color: #111 !important; background: #f5f5f5 !important; }
  .atlas-formula-row { border-color: #ddd !important; }
  .atlas-formula-f { color: #000 !important; }
  .atlas-formula-d { color: #555 !important; }
  .atlas-trap { color: #c00 !important; background: #fff0f0 !important; }
  .atlas-example { color: #006600 !important; background: #f0fff0 !important; }
  @page { margin: 18mm 16mm; size: A4; }
}

@media screen {
  .atlas-page { max-width: 920px; margin: 0 auto; padding: 32px 24px 100px; }
}
`

export default function AtlasPage() {
  const { user, isPro, loading } = useAuth()
  const [filter, setFilter] = useState('all')

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: C.t3, fontFamily: C.mono, fontSize: 12 }}>Učitavam...</div>
      </div>
    )
  }

  // ── Pro gate ──────────────────────────────────────────────────────────────
  if (!isPro) {
    return (
      <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', flexDirection: 'column' }}>
        {/* Nav stub */}
        <div style={{ padding: '12px 24px', borderBottom: `1px solid ${C.bd}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: C.mono, fontSize: 12, color: C.t2 }}>
            <a href="/skripte" style={{ color: C.t3, textDecoration: 'none' }}>← Skripte</a>
            <span style={{ margin: '0 8px', opacity: .4 }}>/</span>
            <span style={{ color: C.blue }}>Maturalni Atlas</span>
          </div>
          <NavUserChip />
        </div>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div style={{ maxWidth: 520 }}>
            {/* Preview */}
            <div style={{ marginBottom: 32, padding: 24, background: C.bgSurface, border: `1px solid ${C.bdm}`, borderRadius: 16 }}>
              <div style={{ fontFamily: C.mono, fontSize: 10, color: C.violet, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>
                Preview — Maturalni Atlas
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                {ATLAS.slice(0, 4).map(ch => (
                  <div key={ch.id} style={{ padding: '8px 10px', background: C.bgCard, borderRadius: 8, border: `1px solid ${C.bd}` }}>
                    <div style={{ fontSize: 16, marginBottom: 4 }}>{ch.icon}</div>
                    <div style={{ fontFamily: C.mono, fontSize: 10, color: C.t2, fontWeight: 700 }}>{ch.title}</div>
                    <div style={{ fontFamily: C.mono, fontSize: 9, color: C.t3, marginTop: 3 }}>
                      {ch.formulas.length} formula · {ch.traps.length} zamke
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12, textAlign: 'center', fontFamily: C.mono, fontSize: 10, color: C.t3 }}>
                + još {ATLAS.length - 4} poglavlja, ukupno {ATLAS.reduce((s,c)=>s+c.formulas.length,0)} formula
              </div>
            </div>

            <UpgradePrompt
              feature="Maturalni Atlas"
              target="pro"
              from="atlas"
              description="Sve formule, zamke i primjeri sva 18 poglavlja na jednom listu. Spremi kao PDF."
              bullets={[
                `${ATLAS.reduce((s,c)=>s+c.formulas.length,0)} formula iz svih poglavlja`,
                `${ATLAS.reduce((s,c)=>s+c.traps.length,0)} najčešćih zamki`,
                'Printaj ili spremi kao PDF za 5 minuta ponavljanja',
                'Filtriraj po poglavlju',
              ]}
              ctaText="Otključaj Atlas →"
            />
          </div>
        </div>
      </div>
    )
  }

  // ── Atlas view (Pro) ────────────────────────────────────────────────────────
  const visible = filter === 'all' ? ATLAS : ATLAS.filter(c => c.id === filter)

  return (
    <>
      <style>{PRINT_CSS}</style>

      <div style={{ minHeight: '100vh', background: C.bg, color: C.t1 }}>

        {/* Header */}
        <div className="no-print" style={{ padding: '12px 24px', borderBottom: `1px solid ${C.bd}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, background: C.bgSurface, position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(8px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="/skripte" style={{ fontFamily: C.mono, fontSize: 12, color: C.t3, textDecoration: 'none' }}>← Skripte</a>
            <span style={{ fontFamily: C.mono, fontSize: 13, color: C.violet, fontWeight: 700 }}>Maturalni Atlas</span>
            <span style={{ fontFamily: C.mono, fontSize: 10, color: C.t3, padding: '2px 8px', border: `1px solid ${C.bdm}`, borderRadius: 10 }}>
              {ATLAS.reduce((s,c)=>s+c.formulas.length,0)} formula · 18 poglavlja
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              style={{ padding: '6px 12px', background: C.bgCard, border: `1px solid ${C.bdm}`, borderRadius: 8, color: C.t1, fontFamily: C.mono, fontSize: 11, cursor: 'pointer' }}
            >
              <option value="all">Sva poglavlja</option>
              {ATLAS.map(c => <option key={c.id} value={c.id}>{c.id.toUpperCase()} · {c.title}</option>)}
            </select>
            <button
              onClick={() => window.print()}
              style={{ padding: '8px 18px', background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`, border: 'none', borderRadius: 8, color: '#060910', fontFamily: C.mono, fontSize: 11, fontWeight: 700, cursor: 'pointer', letterSpacing: .5 }}
            >
              🖨 Spremi kao PDF
            </button>
            <NavUserChip />
          </div>
        </div>

        {/* Atlas content */}
        <div className="atlas-page">
          {/* Print header */}
          <div style={{ display: 'none' }} className="print-only">
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <h1 style={{ fontSize: 22, fontWeight: 800 }}>Maturalni Atlas · Matematika A razina</h1>
              <p style={{ fontSize: 11, color: '#666' }}>maturiraj.hr · {new Date().getFullYear()}</p>
            </div>
          </div>

          {/* Chapter grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: 16 }}>
            {visible.map(ch => (
              <div
                key={ch.id}
                className="atlas-chapter"
                style={{ background: C.bgSurface, border: `1px solid ${C.bdm}`, borderRadius: 12, overflow: 'hidden' }}
              >
                {/* Chapter header */}
                <div
                  className="atlas-chapter-title"
                  style={{ padding: '10px 14px', background: 'rgba(77,158,255,.06)', borderBottom: `1px solid ${C.bd}`, display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <span style={{ fontSize: 16 }}>{ch.icon}</span>
                  <div>
                    <div style={{ fontFamily: C.mono, fontSize: 8, color: C.blue, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 2 }}>
                      {ch.id.toUpperCase()}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.t1 }}>{ch.title}</div>
                  </div>
                </div>

                <div style={{ padding: '12px 14px' }}>
                  {/* Formulas */}
                  <div style={{ fontFamily: C.mono, fontSize: 8, fontWeight: 700, letterSpacing: 2, color: C.t3, textTransform: 'uppercase', marginBottom: 6 }}>
                    FORMULE
                  </div>
                  {ch.formulas.map((row, i) => (
                    <div
                      key={i}
                      className="atlas-formula-row"
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '5px 0', borderBottom: `1px solid ${C.bd}` }}
                    >
                      <code
                        className="atlas-formula-f"
                        style={{ fontFamily: C.mono, fontSize: 12, color: C.cyan, fontWeight: 600, flexShrink: 0, minWidth: 180 }}
                      >
                        {row.f}
                      </code>
                      <span className="atlas-formula-d" style={{ fontSize: 11, color: C.t2, lineHeight: 1.5 }}>{row.d}</span>
                    </div>
                  ))}

                  {/* Traps */}
                  <div style={{ fontFamily: C.mono, fontSize: 8, fontWeight: 700, letterSpacing: 2, color: C.t3, textTransform: 'uppercase', marginTop: 10, marginBottom: 5 }}>
                    ZAMKE
                  </div>
                  {ch.traps.map((trap, i) => (
                    <div
                      key={i}
                      className="atlas-trap"
                      style={{ fontSize: 11, color: C.red, padding: '4px 8px', background: 'rgba(248,113,113,.07)', borderLeft: `2px solid ${C.red}`, marginBottom: 4, lineHeight: 1.55 }}
                    >
                      ⚠ {trap}
                    </div>
                  ))}

                  {/* Example */}
                  <div
                    className="atlas-example"
                    style={{ marginTop: 8, padding: '6px 10px', background: 'rgba(52,211,153,.07)', borderLeft: `2px solid ${C.green}`, fontSize: 11, color: C.t2, lineHeight: 1.6, fontFamily: C.mono }}
                  >
                    <span style={{ color: C.green, fontWeight: 700 }}>→ </span>{ch.primer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="no-print" style={{ marginTop: 32, textAlign: 'center', fontFamily: C.mono, fontSize: 10, color: C.t3 }}>
            maturiraj.hr Pro · Maturalni Atlas · {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </>
  )
}
