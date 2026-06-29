'use client'
import { useState } from 'react'
import { usePageTracking } from '@/lib/hooks/usePageTracking'

const FORMULE_DATA = [
  {
    id:"mat", name:"Matematika", sym:"π", color:"#818cf8",
    kategorije:[
      {naziv:"Algebra i skupovi", formule:[
        {ime:"Kvadrat sume/razlike",       f:"(a±b)² = a² ± 2ab + b²",                      opis:"Razvijanje kvadrata binoma"},
        {ime:"Razlika kvadrata",           f:"a² - b² = (a+b)(a-b)",                          opis:"Faktorizacija razlike kvadrata"},
        {ime:"Kvadratna formula",          f:"x = (-b ± √(b²-4ac)) / 2a",                    opis:"Rješenja ax²+bx+c=0, D=b²-4ac"},
        {ime:"Viètove formule",            f:"x₁+x₂ = -b/a,   x₁·x₂ = c/a",                 opis:"Veza korijena i koeficijenata"},
        {ime:"Binomni koeficijent",        f:"C(n,k) = n! / (k!(n-k)!)",                     opis:"Broj kombinacija k od n elemenata"},
        {ime:"Binomni teorem",             f:"(a+b)ⁿ = Σ C(n,k)·aⁿ⁻ᵏ·bᵏ",                  opis:"Razvoj potencije binoma"},
      ]},
      {naziv:"Nizovi i redovi", formule:[
        {ime:"Aritmetički niz — n-ti član",f:"aₙ = a₁ + (n-1)·d",                            opis:"d = zajednička razlika"},
        {ime:"Aritmetički niz — suma",     f:"Sₙ = n(a₁+aₙ)/2",                              opis:"Suma prvih n članova"},
        {ime:"Geometrijski niz — n-ti",    f:"aₙ = a₁·qⁿ⁻¹",                                 opis:"q = zajednički omjer"},
        {ime:"Geometrijski niz — suma",    f:"Sₙ = a₁(qⁿ-1)/(q-1),  q≠1",                   opis:"Suma prvih n članova"},
        {ime:"Beskonačni geometrijski red",f:"S = a₁/(1-q),  |q|<1",                         opis:"Suma beskonačnog niza"},
      ]},
      {naziv:"Trigonometrija", formule:[
        {ime:"Osnovni identitet",          f:"sin²x + cos²x = 1",                             opis:"Pitagorin poučak na jediničnoj kružnici"},
        {ime:"Tangenta i kotangenta",      f:"tgx = sinx/cosx,   ctgx = cosx/sinx",           opis:"Definicije kroz sinus i kosinus"},
        {ime:"Adicijske formule",          f:"sin(α±β) = sinα·cosβ ± cosα·sinβ",              opis:"Sinus zbroja/razlike"},
        {ime:"Adicijska — kosinus",        f:"cos(α±β) = cosα·cosβ ∓ sinα·sinβ",              opis:"Kosinus zbroja/razlike"},
        {ime:"Dvostruki kut",              f:"sin2x = 2sinx·cosx,   cos2x = cos²x-sin²x",     opis:"Formule dvostrukog kuta"},
        {ime:"Poučak sinusa",              f:"a/sinα = b/sinβ = c/sinγ = 2R",                  opis:"R = polumjer opisane kružnice"},
        {ime:"Poučak kosinusa",            f:"c² = a² + b² - 2ab·cosγ",                       opis:"Generalizacija Pitagorinog poučka"},
      ]},
      {naziv:"Analitička geometrija", formule:[
        {ime:"Udaljenost dviju točaka",    f:"d = √((x₂-x₁)² + (y₂-y₁)²)",                  opis:"Euklidska udaljenost u ravnini"},
        {ime:"Polovište dužine",           f:"M = ((x₁+x₂)/2, (y₁+y₂)/2)",                   opis:"Koordinate polovišta"},
        {ime:"Jednadžba pravca",           f:"y = kx + l,   k = tgα",                         opis:"Eksplicitni oblik jednadžbe pravca"},
        {ime:"Jednadžba kružnice",         f:"(x-p)² + (y-q)² = r²",                         opis:"Središte (p,q), polumjer r"},
        {ime:"Udaljenost točke od pravca", f:"d = |ax₀+by₀+c| / √(a²+b²)",                  opis:"Za pravac ax+by+c=0"},
      ]},
      {naziv:"Derivacije i integrali", formule:[
        {ime:"Definicija derivacije",      f:"f'(x) = lim(Δx→0) [f(x+Δx)-f(x)]/Δx",         opis:"Trenutna brzina promjene funkcije"},
        {ime:"Pravilo potencije",          f:"(xⁿ)' = n·xⁿ⁻¹",                               opis:"Derivacija potencijalne funkcije"},
        {ime:"Derivacija produkta",        f:"(u·v)' = u'v + uv'",                            opis:"Leibnizovo pravilo"},
        {ime:"Derivacija kvocijenta",      f:"(u/v)' = (u'v - uv') / v²",                    opis:"Za v≠0"},
        {ime:"Lančano pravilo",            f:"[f(g(x))]' = f'(g(x))·g'(x)",                  opis:"Derivacija složene funkcije"},
        {ime:"Osnovna pravila integracije",f:"∫xⁿdx = xⁿ⁺¹/(n+1)+C,  n≠-1",                 opis:"∫(1/x)dx = ln|x|+C"},
        {ime:"Newton-Leibnizov poučak",    f:"∫ₐᵇ f(x)dx = F(b) - F(a)",                     opis:"F je primitivna funkcija od f"},
      ]},
      {naziv:"Kompleksni brojevi i matrice", formule:[
        {ime:"Algebarski oblik",           f:"z = a + bi,   i² = -1",                         opis:"a = realni dio, b = imaginarni dio"},
        {ime:"Modul kompleksnog broja",    f:"|z| = √(a² + b²)",                              opis:"Udaljenost od ishodišta"},
        {ime:"Konjugat",                   f:"z̄ = a - bi,   z·z̄ = |z|²",                    opis:"Konjugat kompleksnog broja"},
        {ime:"De Moivreov poučak",         f:"(cosφ+i·sinφ)ⁿ = cos(nφ)+i·sin(nφ)",           opis:"Potenciranje u trigonometrijskom obliku"},
        {ime:"Determinanta 2×2",           f:"det[[a,b],[c,d]] = ad - bc",                    opis:"Za matricu 2. reda"},
      ]},
      {naziv:"Kombinatorika i vjerojatnost", formule:[
        {ime:"Permutacije",                f:"Pₙ = n!",                                        opis:"Broj rasporeda n različitih elemenata"},
        {ime:"Kombinacije",                f:"C(n,k) = n! / (k!(n-k)!)",                     opis:"Broj k-članih podskupova"},
        {ime:"Klasična vjerojatnost",      f:"P(A) = m/n",                                    opis:"m = povoljni, n = ukupni ishodi"},
        {ime:"Komplement događaja",        f:"P(Ā) = 1 - P(A)",                               opis:"Vjerojatnost suprotnog događaja"},
        {ime:"Multiplikativni poučak",     f:"P(A∩B) = P(A)·P(B|A)",                         opis:"Za uvjetnu vjerojatnost"},
      ]},
    ]
  },
  {
    id:"fiz", name:"Fizika", sym:"⚡", color:"#fbbf24",
    kategorije:[
      {naziv:"Mehanika — kinematika", formule:[
        {ime:"Jednoliko gibanje",          f:"s = v·t,   v = const",                          opis:"Put = brzina × vrijeme"},
        {ime:"Jednoliko ubrzano gibanje",  f:"v = v₀ + a·t,   s = v₀t + ½at²",               opis:"Konstantno ubrzanje a"},
        {ime:"Veza puta i brzine",         f:"v² = v₀² + 2as",                                opis:"Bez vremena"},
        {ime:"Slobodan pad",               f:"h = ½gt²,   v = gt",                            opis:"g ≈ 9.81 m/s²"},
        {ime:"Kružno gibanje",             f:"v = ωr,   a = v²/r = ω²r",                      opis:"ω = kutna brzina [rad/s]"},
        {ime:"Period i frekvencija",       f:"T = 1/f,   ω = 2π/T = 2πf",                    opis:"T [s], f [Hz], ω [rad/s]"},
      ]},
      {naziv:"Mehanika — dinamika", formule:[
        {ime:"2. Newtonov zakon",          f:"F = m·a",                                        opis:"Sila = masa × ubrzanje [N]"},
        {ime:"3. Newtonov zakon",          f:"F₁₂ = -F₂₁",                                    opis:"Akcija i reakcija"},
        {ime:"Gravitacijska sila",         f:"F = G·m₁m₂/r²",                                 opis:"G = 6.674×10⁻¹¹ N·m²/kg²"},
        {ime:"Težina tijela",              f:"G = m·g",                                        opis:"g = 9.81 m/s²"},
        {ime:"Sila trenja",                f:"F_tr = μ·N",                                    opis:"μ = koeficijent trenja"},
        {ime:"Centripetalna sila",         f:"F_c = mv²/r = mω²r",                            opis:"Sila prema centru kružnice"},
      ]},
      {naziv:"Rad, energija, snaga", formule:[
        {ime:"Rad sile",                   f:"W = F·s·cosα",                                  opis:"α = kut između sile i pomaka [J]"},
        {ime:"Kinetička energija",         f:"E_k = ½mv²",                                    opis:"Energija gibanja [J]"},
        {ime:"Potencijalna energija",      f:"E_p = mgh",                                     opis:"Energija položaja"},
        {ime:"Zakon očuvanja energije",    f:"E_k + E_p = const",                             opis:"U konzervativnom sustavu"},
        {ime:"Snaga",                      f:"P = W/t = F·v",                                 opis:"[W = J/s]"},
        {ime:"Učinkovitost",               f:"η = P_korisna/P_ukupna · 100%",                 opis:"Omjer korisnog i utrošenog rada"},
      ]},
      {naziv:"Termodinamika", formule:[
        {ime:"Idealni plin",               f:"pV = nRT = NkT",                                opis:"R=8.314 J/(mol·K)"},
        {ime:"1. zakon termodinamike",     f:"ΔU = Q - W",                                    opis:"Unutarnja energija = toplina - rad"},
        {ime:"Toplinska kapaciteta",       f:"Q = m·c·ΔT",                                    opis:"c = specifični toplinski kapacitet"},
        {ime:"Latentna toplina",           f:"Q = m·L",                                       opis:"L = specifična latentna toplina"},
        {ime:"Celzij ↔ Kelvin",           f:"T[K] = t[°C] + 273.15",                         opis:"Apsolutna temperatura"},
      ]},
      {naziv:"Elektromagnetizam", formule:[
        {ime:"Coulombov zakon",            f:"F = k·q₁q₂/r²",                                opis:"k = 9×10⁹ N·m²/C²"},
        {ime:"Električno polje",           f:"E = F/q = k·Q/r²",                              opis:"[N/C = V/m]"},
        {ime:"Ohmov zakon",                f:"U = I·R",                                        opis:"Napon = struja × otpor [V = A·Ω]"},
        {ime:"Električna snaga",           f:"P = UI = I²R = U²/R",                          opis:"[W = V·A]"},
        {ime:"Faradayev zakon indukcije",  f:"ε = -dΦ/dt",                                    opis:"Inducirani EMF"},
      ]},
      {naziv:"Valovi i optika", formule:[
        {ime:"Brzina vala",                f:"v = λ·f = λ/T",                                 opis:"λ = valna duljina [m]"},
        {ime:"Snellov zakon",              f:"n₁·sinα₁ = n₂·sinα₂",                          opis:"Lom svjetlosti"},
        {ime:"Indeks loma",                f:"n = c/v",                                        opis:"c = 3×10⁸ m/s"},
        {ime:"Jednadžba tanke leće",       f:"1/f = 1/d_o + 1/d_i",                           opis:"f = žarišna daljina"},
      ]},
      {naziv:"Moderna fizika", formule:[
        {ime:"Fotoelektrični efekt",       f:"E = hf = hc/λ",                                 opis:"h = 6.626×10⁻³⁴ J·s"},
        {ime:"Masa i energija",            f:"E = mc²",                                        opis:"Einsteinova formula"},
        {ime:"Heisenbergov princip",       f:"Δx·Δp ≥ ℏ/2",                                  opis:"ℏ = h/2π"},
        {ime:"Radioaktivni raspad",        f:"N(t) = N₀·e^(-λt)",                             opis:"λ = konstanta raspada"},
        {ime:"Poluvrijeme raspada",        f:"T₁/₂ = ln2/λ ≈ 0.693/λ",                       opis:"Vrijeme za smanjenje na pola"},
      ]},
    ]
  },
  {
    id:"kem", name:"Kemija", sym:"⚗", color:"#34d399",
    kategorije:[
      {naziv:"Osnove kemije", formule:[
        {ime:"Molarna masa",               f:"M = m/n  [g/mol]",                              opis:"m = masa [g], n = količina [mol]"},
        {ime:"Avogadrova konstanta",       f:"Nₐ = 6.022×10²³ mol⁻¹",                        opis:"Broj čestica u molu"},
        {ime:"Molarni volumen (STP)",      f:"Vm = 22.4 L/mol  (0°C, 1 atm)",                opis:"Za idealni plin pri STP"},
        {ime:"Gustoća",                    f:"ρ = m/V  [g/cm³]",                              opis:"Masa po volumenu"},
      ]},
      {naziv:"Stehiometrija i otopine", formule:[
        {ime:"Maseni udio",                f:"w = m_otopljene/m_otopine · 100%",              opis:"Postotak mase otopljene tvari"},
        {ime:"Množinska koncentracija",    f:"c = n/V  [mol/L]",                              opis:"Mol po litri (molarnost)"},
        {ime:"Razrjeđivanje",              f:"c₁·V₁ = c₂·V₂",                                opis:"Količina tvari se čuva"},
        {ime:"Prinos reakcije",            f:"η = n_stvarno/n_teorijsko · 100%",              opis:"Stvarni vs. teoretski prinos"},
      ]},
      {naziv:"Kiseline, baze i pH", formule:[
        {ime:"pH definicija",              f:"pH = -log[H⁺]",                                 opis:"[H⁺] u mol/L, pH ∈ (0,14)"},
        {ime:"pOH i veza s pH",            f:"pOH = -log[OH⁻],   pH + pOH = 14",             opis:"Na 25°C"},
        {ime:"Ionski produkt vode",        f:"Kw = [H⁺][OH⁻] = 10⁻¹⁴  (25°C)",              opis:"Kw = 10⁻¹⁴ pri 25°C"},
        {ime:"Neutralizacija",             f:"kiselina + baza → sol + voda",                  opis:"HCl + NaOH → NaCl + H₂O"},
      ]},
      {naziv:"Elektrokemija i ravnoteža", formule:[
        {ime:"Faradayev zakon elektrolize",f:"m = M·I·t / (F·z)",                             opis:"F = 96485 C/mol"},
        {ime:"Konstanta kemijske ravnoteže",f:"Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ",                  opis:"Za aA + bB ⇌ cC + dD"},
        {ime:"Le Chatelierov princip",     f:"Ravnoteža se pomiče suprotno promjeni",         opis:"T↑ → egzotermna se pomiče lijevo"},
      ]},
      {naziv:"Organska kemija", formule:[
        {ime:"Stupnjevi nezasićenosti",    f:"DBE = (2C + 2 + N - H - X) / 2",               opis:"C=ugljik, H=vodik, N=dušik, X=halogen"},
        {ime:"Esterifikacija",             f:"R-COOH + R'OH ⇌ R-COO-R' + H₂O",              opis:"Reverzibilna reakcija"},
        {ime:"Saponifikacija",             f:"R-COO-R' + NaOH → R-COONa + R'OH",             opis:"Hidroliza estera bazom"},
      ]},
      {naziv:"Termokemija", formule:[
        {ime:"Hessov zakon",               f:"ΔH = Σ ΔHf(produkti) - Σ ΔHf(reaktanti)",      opis:"Standardne entalpije nastajanja"},
        {ime:"Toplina reakcije",           f:"q = m·c·ΔT = n·ΔH",                            opis:"Kalorimetrija"},
        {ime:"Egzotermna reakcija",        f:"ΔH < 0 — oslobađa toplinu",                     opis:"Gorenje, neutralizacija..."},
        {ime:"Endotermna reakcija",        f:"ΔH > 0 — prima toplinu",                        opis:"Fotosinteza, topljenje..."},
      ]},
    ]
  },
  {
    id:"bio", name:"Biologija", sym:"⊕", color:"#2dd4bf",
    kategorije:[
      {naziv:"Stanična biologija", formule:[
        {ime:"Mitoza",                     f:"G1 → S → G2 → M (profaza → metafaza → anafaza → telofaza)", opis:"Rezultat: 2 identične diploidne stanice"},
        {ime:"Mejoza",                     f:"Mejoza I + Mejoza II → 4 haploidne stanice",   opis:"Smanjuje broj kromosoma na pola"},
        {ime:"Osmotski tlak",              f:"π = cRT",                                        opis:"c = molarna konc., R = 8.314, T = K"},
      ]},
      {naziv:"Genetika i nasljeđivanje", formule:[
        {ime:"Mendel I",                   f:"Aa × Aa → 1AA : 2Aa : 1aa",                    opis:"Fenotipski omjer 3:1 za dominantnost"},
        {ime:"Mendel II",                  f:"AaBb × AaBb → 9A_B_ : 3A_bb : 3aaB_ : 1aabb", opis:"Za gene na različitim kromosomima"},
        {ime:"Hardy-Weinberg ravnoteža",   f:"p² + 2pq + q² = 1,   p + q = 1",              opis:"p = učestalost dominantnog alela"},
        {ime:"Centralna dogma",            f:"DNA → mRNA → Protein",                          opis:"Tok genetske informacije"},
      ]},
      {naziv:"Metabolizam i energija", formule:[
        {ime:"Fotosinteza",                f:"6CO₂ + 6H₂O + svjetlo → C₆H₁₂O₆ + 6O₂",      opis:"Ukupna reakcija fotosinteze"},
        {ime:"Aerobno disanje",            f:"C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 36-38 ATP",   opis:"Glikoliza + Krebsov ciklus + oksid. fosforilacija"},
        {ime:"Anaerobno disanje",          f:"C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + 2 ATP",          opis:"Alkoholna fermentacija"},
        {ime:"Respiratorni kvocijent",     f:"RQ = CO₂ oslobođen / O₂ potrošen",             opis:"Ugljikohidrati: RQ=1; masti: RQ≈0.7"},
      ]},
      {naziv:"Ekologija i evolucija", formule:[
        {ime:"Eksponencijalni rast",       f:"dN/dt = r·N,   N(t) = N₀·eʳᵗ",                opis:"r = stopa rasta, N = veličina populacije"},
        {ime:"Logistički rast",            f:"dN/dt = r·N·(K-N)/K",                          opis:"K = kapacitet okoliša"},
        {ime:"Pravilo 10%",                f:"≈ 10% energije prelazi na viši trofički nivo",  opis:"Gubici u hranidbenom lancu"},
        {ime:"Hardy-Weinberg",             f:"p + q = 1,   p² + 2pq + q² = 1",              opis:"Ravnoteža frekvencija alela"},
      ]},
      {naziv:"Fiziologija čovjeka", formule:[
        {ime:"BMI",                        f:"BMI = m[kg] / h²[m]",                           opis:"<18.5 pothranj., 18.5-25 normalno, >25 prekomjerno"},
        {ime:"Srčani minutni volumen",     f:"CO = HR × SV",                                  opis:"HR = otkucaji/min, SV = udarni volumen"},
        {ime:"Ventilacija pluća",          f:"MV = TV × RR",                                  opis:"TV = dišni volumen (~500mL)"},
      ]},
    ]
  },
]

export default function Formule() {
  usePageTracking('formule')
  const [selPred, setSelPred] = useState("mat")
  const [selKat, setSelKat]   = useState(0)
  const [search, setSearch]   = useState("")

  const pred = FORMULE_DATA.find(p => p.id === selPred)

  const filtered = search.trim()
    ? pred.kategorije.map(k => ({
        ...k,
        formule: k.formule.filter(f =>
          f.ime.toLowerCase().includes(search.toLowerCase()) ||
          f.f.toLowerCase().includes(search.toLowerCase()) ||
          f.opis.toLowerCase().includes(search.toLowerCase())
        )
      })).filter(k => k.formule.length > 0)
    : [pred.kategorije[selKat]]

  const allFormule = pred.kategorije.reduce((a,k) => a+k.formule.length, 0)

  return (
    <div style={{minHeight:"100vh", background:"var(--bg)"}}>

      <div style={{paddingTop:78, maxWidth:960, margin:"0 auto", padding:"78px 24px 80px"}}>

        {/* Header */}
        <div style={{marginBottom:28}}>
          <div style={{fontSize:11, fontWeight:600, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", marginBottom:8}}>Besplatno · bez registracije</div>
          <h1 style={{fontFamily:"var(--fh)", fontSize:"clamp(28px,4vw,48px)", fontWeight:900, marginBottom:8}}>Formule za maturu</h1>
          <p style={{color:"var(--muted)", fontSize:15, lineHeight:1.7}}>Sve formule na jednom mjestu. Matematika, Fizika, Kemija i Biologija.</p>
        </div>

        {/* Predmet tabovi */}
        <div style={{display:"flex", gap:8, marginBottom:24, flexWrap:"wrap"}}>
          {FORMULE_DATA.map(p => (
            <button key={p.id} onClick={() => { setSelPred(p.id); setSelKat(0); setSearch("") }} style={{
              padding:"9px 20px", borderRadius:99, fontFamily:"var(--fb)", fontSize:14, fontWeight:600, cursor:"pointer", transition:"all .18s",
              display:"flex", alignItems:"center", gap:7,
              border:`1px solid ${selPred === p.id ? p.color+"66" : "var(--bdr)"}`,
              background: selPred === p.id ? p.color+"18" : "transparent",
              color: selPred === p.id ? p.color : "var(--muted)"
            }}>
              <span>{p.sym}</span>{p.name}
            </button>
          ))}
        </div>

        <div style={{display:"grid", gridTemplateColumns:"220px 1fr", gap:20, alignItems:"start"}}>

          {/* Sidebar */}
          <div style={{background:"var(--s1)", border:"1px solid var(--bdr)", borderRadius:14, padding:"14px", position:"sticky", top:78}}>
            <div style={{fontSize:11, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", marginBottom:12, paddingLeft:4}}>
              {pred.name} · {allFormule} formula
            </div>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Traži formulu..."
              style={{width:"100%", padding:"8px 12px", borderRadius:9, border:"1px solid var(--bdr)", background:"var(--s2)", color:"var(--text)", fontFamily:"var(--fb)", fontSize:13, outline:"none", marginBottom:10, boxSizing:"border-box"}}
              onFocus={e => e.target.style.borderColor = pred.color}
              onBlur={e => e.target.style.borderColor = "var(--bdr)"}
            />
            {pred.kategorije.map((k, i) => (
              <button key={i} onClick={() => { setSelKat(i); setSearch("") }} style={{
                width:"100%", padding:"8px 10px", borderRadius:9, border:"none",
                background: selKat === i && !search ? "rgba(255,255,255,.06)" : "transparent",
                color: selKat === i && !search ? pred.color : "var(--muted)",
                fontFamily:"var(--fb)", fontSize:13, fontWeight: selKat === i && !search ? 700 : 400,
                cursor:"pointer", textAlign:"left", transition:"all .15s",
                display:"flex", alignItems:"center", gap:7, marginBottom:2
              }}>
                <span style={{color:pred.color, fontSize:11, opacity:.7}}>■</span>
                {k.naziv}
              </button>
            ))}
          </div>

          {/* Sadržaj */}
          <div style={{display:"flex", flexDirection:"column", gap:12}}>
            {filtered.map((kat, ki) => (
              <div key={ki}>
                {(search || filtered.length > 1) && (
                  <div style={{fontSize:11, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:pred.color, marginBottom:10, marginTop:ki>0?8:0}}>{kat.naziv}</div>
                )}
                {kat.formule.map((f, fi) => (
                  <div key={fi} style={{background:"var(--s1)", border:`1px solid ${pred.color}22`, borderRadius:14, padding:"18px 20px", marginBottom:10, transition:"border-color .18s"}}
                    onMouseEnter={e => e.currentTarget.style.borderColor = pred.color+"55"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = pred.color+"22"}
                  >
                    <div style={{display:"flex", alignItems:"flex-start", gap:14, flexWrap:"wrap"}}>
                      <div style={{flex:1, minWidth:200}}>
                        <div style={{fontWeight:700, fontSize:14, color:"var(--text)", marginBottom:8}}>{f.ime}</div>
                        <div style={{fontFamily:"'Courier New',monospace", fontSize:15, fontWeight:700, color:pred.color, background:pred.color+"0d", border:`1px solid ${pred.color}22`, borderRadius:9, padding:"10px 14px", letterSpacing:".02em", lineHeight:1.7}}>{f.f}</div>
                      </div>
                      <div style={{maxWidth:260, padding:"8px 12px", borderRadius:9, background:"var(--s2)", border:"1px solid var(--bdr)", fontSize:12, color:"var(--muted)", lineHeight:1.6, flexShrink:0}}>
                        {f.opis}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{textAlign:"center", padding:"48px 20px", color:"var(--muted)"}}>
                <div style={{fontSize:32, marginBottom:12}}>🔍</div>
                <div style={{fontWeight:600}}>Nema rezultata za "{search}"</div>
                <div style={{fontSize:13, marginTop:6}}>Pokušaj drugačiji izraz</div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={{marginTop:28, padding:"16px 20px", borderRadius:12, background:"var(--s1)", border:"1px solid var(--bdr)", fontSize:13, color:"var(--muted)", textAlign:"center", lineHeight:1.65}}>
          📐 Sve formule su besplatne i dostupne bez registracije · Za detaljne skripte i Discere arhivu pogledaj planove
        </div>
      </div>
    </div>
  )
}