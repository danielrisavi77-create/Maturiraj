-- ───────────────────────── FAKULTETI ─────────────────────────
insert into public.fakulteti (id, short, name, grad, sveuciliste, sym, color, glyph_bg, web_url, sort_order) values
  ('mef_zg',  'MEF',   'Medicinski fakultet Zagreb',   'Zagreb', 'Sveučilište u Zagrebu', '🩺', '#f87171', 'linear-gradient(135deg,rgba(248,113,113,.22),rgba(248,113,113,.06))', 'https://mef.unizg.hr/upisi', 10),
  ('sfzg',    'SFZG',  'Stomatološki fakultet Zagreb', 'Zagreb', 'Sveučilište u Zagrebu', '🦷', '#2dd4bf', 'linear-gradient(135deg,rgba(45,212,191,.22),rgba(45,212,191,.06))',   'https://www.sfzg.unizg.hr', 20),
  ('vef',     'VEF',   'Veterinarski fakultet Zagreb', 'Zagreb', 'Sveučilište u Zagrebu', '🐾', '#f59e0b', 'linear-gradient(135deg,rgba(245,158,11,.22),rgba(245,158,11,.06))',   'https://www.vef.unizg.hr', 30),
  ('kif',     'KIF',   'Kineziološki fakultet Zagreb', 'Zagreb', 'Sveučilište u Zagrebu', '🏃', '#3ecf6e', 'linear-gradient(135deg,rgba(62,207,110,.22),rgba(62,207,110,.06))',   'https://www.kif.unizg.hr', 40),
  ('afz',     'AFZ',   'Arhitektonski fakultet Zagreb','Zagreb', 'Sveučilište u Zagrebu', '🏛', '#fb923c', 'linear-gradient(135deg,rgba(251,146,60,.22),rgba(251,146,60,.06))',   'https://www.arhitekt.hr/hr/nastava/upisi/', 50),
  ('adu',     'ADU',   'Akademija dramske umjetnosti', 'Zagreb', 'Sveučilište u Zagrebu', '🎭', '#e879f9', 'linear-gradient(135deg,rgba(232,121,249,.22),rgba(232,121,249,.06))', 'https://www.adu.unizg.hr', 60),
  ('medri',   'MedRi', 'Medicinski fakultet Rijeka',   'Rijeka', 'Sveučilište u Rijeci',  '🏥', '#fda4af', 'linear-gradient(135deg,rgba(253,164,175,.22),rgba(253,164,175,.06))', 'https://medri.uniri.hr/obrazovanje/upisi/', 70)
on conflict (id) do update set
  short = excluded.short, name = excluded.name, grad = excluded.grad,
  sym = excluded.sym, color = excluded.color, glyph_bg = excluded.glyph_bg, web_url = excluded.web_url;

-- ───────────────────────── STUDIJI ─────────────────────────
-- MEF Zagreb
insert into public.studiji (id, fakultet_id, naziv, short, trajanje_god, upisnih_mjesta, tip_upisa, tip_upisa_label, popularnost, opis, predmeti, gradivo, prijava_od, prijava_do, prijava_do_iso, ispit, ispit_iso, cijena, napomena, kalk) values
(
  'mef_zg__medicina', 'mef_zg', 'Medicina', 'Medicina', 6, 300, 'klasicni', 'Klasični prijemni', 95,
  'Najzahtjevniji prijemni u RH — 120 pitanja (40 biologija, 40 kemija, 40 fizika), svako 5 bodova = max 600 bod. Razredbeni prag: 55% ukupno i 40% po predmetu. Prijemni nosi 60% ukupnih bodova.',
  ARRAY['Biologija','Kemija','Fizika'],
  ARRAY['Stanična biologija i genetika','Anatomija i fiziologija','Evolucija i ekologija','Anorganska kemija','Organska kemija','Stehiometrija','Mehanika','Elektromagnetizam','Termodinamika'],
  'travanj 2026', '~6. lipnja 2026', '2026-06-06', '~3. srpnja 2026', '2026-07-03', '65 €',
  'Prijava isključivo online putem prijemni.mef.hr. Uz prijavu obavezno poslati liječničku potvrdu i izjavu o psihofizičkim sposobnostima.',
  '{"ocjene_max":160,"polja":[{"id":"hrv","label":"Hrvatski (A)","razina":"A","max":80},{"id":"mat","label":"Matematika (A)","razina":"A","max":80},{"id":"eng","label":"Strani jezik (A)","razina":"A","max":80}],"posebno":{"label":"Prijemni (bio + kem + fiz)","max":600,"napomena":"Unesi ukupan % riješenosti prijemnog. Prag: min 55% ukupno i 40% po predmetu."}}'::jsonb
),
(
  'mef_zg__sanitarno', 'mef_zg', 'Sanitarno inženjerstvo', 'Sanitarno', 3, 40, 'klasicni', 'Klasični prijemni', 45,
  'Preddiplomski studij. Prijemni je zajednički s medicinom — isti test, različiti prag. Upis 40 studenata godišnje.',
  ARRAY['Biologija','Kemija','Fizika'],
  ARRAY['Mikrobiologija i parazitologija','Kemija okoliša','Toksikologija','Sanitarna epidemiologija','Higijena hrane i vode'],
  'travanj 2026', '~6. lipnja 2026', '2026-06-06', '~3. srpnja 2026', '2026-07-03', '65 €',
  'Prijava kroz isti sustav kao medicina. Mogućnost paralelne prijave.',
  '{"ocjene_max":160,"polja":[{"id":"hrv","label":"Hrvatski (A)","razina":"A","max":80},{"id":"mat","label":"Matematika (B)","razina":"B","max":80},{"id":"eng","label":"Strani jezik (B)","razina":"B","max":80}],"posebno":{"label":"Prijemni","max":600,"napomena":"Unesi % riješenosti. Prag: min 40% ukupno."}}'::jsonb
),
(
  'mef_zg__medlab', 'mef_zg', 'Medicinsko-laboratorijska dijagnostika', 'MLD', 3, 30, 'klasicni', 'Klasični prijemni', 35,
  'Preddiplomski studij. Prijemni je zajednički s medicinom i sanitarnim. Upis 30 studenata godišnje.',
  ARRAY['Biologija','Kemija','Fizika'],
  ARRAY['Laboratorijska hematologija','Klinička biokemija','Medicinska mikrobiologija','Imunološka dijagnostika'],
  'travanj 2026', '~6. lipnja 2026', '2026-06-06', '~3. srpnja 2026', '2026-07-03', '65 €',
  null,
  '{"ocjene_max":160,"polja":[{"id":"hrv","label":"Hrvatski (A)","razina":"A","max":80},{"id":"mat","label":"Matematika (B)","razina":"B","max":80},{"id":"eng","label":"Strani jezik (B)","razina":"B","max":80}],"posebno":{"label":"Prijemni","max":600,"napomena":"Unesi % riješenosti."}}'::jsonb
),

-- SFZG
(
  'sfzg__dentalna', 'sfzg', 'Dentalna medicina', 'DM', 6, 85, 'elim_test', 'Matura + eliminirajući test', 88,
  'Uz test znanja (kemija i biologija iz mature), SFZG provodi obaveznu provjeru psihomotornih sposobnosti — preciznost pokreta šake. Bez prolaska psihomotorike nema upisa.',
  ARRAY['Kemija','Biologija','Psihomotorika'],
  ARRAY['Organska kemija','Biokemija','Stanična biologija','Fiziologija čovjeka'],
  'svibanj 2026', '~lipanj 2026', null, '~lipanj/srpanj 2026', '2026-06-28', 'varijabilno',
  'Prijava direktno SFZG-u. Test psihomotorike je eliminacijski — bez prolaska nema bodovnog rangiranja.',
  null
),

-- VEF
(
  'vef__vet', 'vef', 'Veterinarska medicina', 'VET', 6, 134, 'elim_test', 'Matura + eliminirajući test', 78,
  'VEF od 2018. provodi provjeru psihomotoričkih sposobnosti. Upis 134 studenta godišnje. Eliminacijski uvjet: 2 godine biologije, fizike i kemije u SŠ.',
  ARRAY['Biologija','Kemija','Psihomotorika'],
  ARRAY['Stanična biologija i genetika','Fiziologija životinja','Anatomija','Organska i anorganska kemija','Biokemija','Mikrobiologija (uvod)'],
  'svibanj 2026', '~lipanj 2026', null, 'lipanj/srpanj 2026', '2026-06-30', 'varijabilno',
  'Provjera psihomotorike je eliminacijska. Pratiti web VEF-a za točne rokove.',
  null
),

-- KIF
(
  'kif__kineziologija', 'kif', 'Kineziologija', 'KIN', 5, 120, 'elim_test', 'Matura + motorički test', 72,
  'KIF ima dvostupanjsku provjeru: motorički test i pisani test znanja iz kineziologije. Bez prolaska motoričkog testa nema upisa.',
  ARRAY['Motoričke sposobnosti','Tjelesna kultura'],
  ARRAY['Osnove kineziologije','Sportska medicina','Biomehanika','Fiziologija sporta','Metodika sportskog treninga'],
  'travanj/svibanj 2026', '~lipanj 2026', null, 'lipanj 2026', '2026-06-15', 'varijabilno',
  'Motorički test se provodi u lipnju. Bez prolaska motorike nema upisa bez obzira na bodove mature.',
  null
),

-- AFZ
(
  'afz__arhitektura', 'afz', 'Arhitektura i urbanizam', 'Arhitektura', 5, 120, 'elim_test', 'Matura + provjera (ZVS)', 82,
  'Arhitektonski provodi obaveznu Dodatnu provjeru (ZVS) — crtački zadatak + test prostorne percepcije + opća kultura. Provjera nosi 60% ukupnih bodova.',
  ARRAY['Prostorno mišljenje','Matematika A'],
  ARRAY['Prostorna geometrija','Analitička geometrija','Zlatni rez i proporcije','Perspektiva i slobodno crtanje','Arhitektonski stilovi'],
  '~20. svibnja 2026', '~6. lipnja 2026', '2026-06-06', '~27. lipnja 2026', '2026-06-27', 'varijabilno',
  'Prijava elektronički putem web obrasca AFZ-a. Uz prijavu obavezna i prijava u Postani student. Naknadne prijave nisu moguće.',
  '{"ocjene_max":400,"polja":[{"id":"mat","label":"Matematika (A)","razina":"A","max":150}],"posebno":{"label":"Provjera ZVS (crtanje + prostorno + kultura)","max":450,"napomena":"Unesi % uspjeha na provjeri ZVS."}}'::jsonb
),

-- ADU
(
  'adu__gluma', 'adu', 'Gluma', 'Gluma', 4, 12, 'audicija', 'Audicija', 92,
  'Audicija s monologom kroz više eliminacijskih krugova. Jedan od najkonkurentnijih upisa u RH — 300+ prijavljenih na 12 mjesta.',
  ARRAY['Gluma','Opća kultura'],
  ARRAY['Klasična i suvremena drama','Teorija glume','Hrvatska i svjetska drama','Dramska analiza teksta'],
  'travanj/svibanj 2026', '~lipanj 2026', null, 'lipanj–srpanj 2026 (više krugova)', '2026-06-20', 'varijabilno',
  'Svaki krug je eliminacijski. Priprema monologa i pjesme obavezna.',
  null
),
(
  'adu__reziija', 'adu', 'Kazališna režija i radiofonija', 'Režija', 5, 5, 'audicija', 'Pisane i usmene provjere', 68,
  'Pisane i usmene provjere u više krugova. Fokus na dramsku analizu, osobnu redateljsku viziju i opću kulturu.',
  ARRAY['Režija','Dramaturgija','Opća kultura'],
  ARRAY['Teorija režije','Povijest kazališta','Analiza dramskih tekstova','Suvremeni hrvatski teatar'],
  'travanj/svibanj 2026', '~lipanj 2026', null, 'lipanj–srpanj 2026', '2026-06-20', 'varijabilno',
  null, null
),
(
  'adu__dramaturgija', 'adu', 'Dramaturgija', 'Dramaturgija', 5, 5, 'audicija', 'Pisane i usmene provjere', 55,
  'Pisane provjere (analiza teksta, vlastiti literarni rad) + usmeni razgovor. Očekuju se visoke vještine pisanja i poznavanje drame.',
  ARRAY['Dramaturgija','Književnost','Opća kultura'],
  ARRAY['Aristotelova poetika','Moderna dramska teorija','Hrvatska i svjetska dramska književnost'],
  'travanj/svibanj 2026', '~lipanj 2026', null, 'lipanj–srpanj 2026', '2026-06-20', 'varijabilno',
  null, null
),

-- MedRi
(
  'medri__medicina', 'medri', 'Medicina', 'Medicina', 6, 110, 'matura', 'Matura + eliminirajući test', 85,
  'Upis kroz maturu (Bio, Kem, Fiz — svaki 30%). Od 2025. eliminirajući test situacijske prosudbe (~10 min, ne donosi bodove, ali isključujući).',
  ARRAY['Biologija','Kemija','Fizika'],
  ARRAY['Stanična biologija','Genetika','Imunološki sustav','Anorganska i organska kemija','Biokemija','Fiziologija čovjeka'],
  'veljača 2026 (Postani student)', '1. srpnja 2026', '2026-07-01', 'Test situacijske prosudbe — lipanj/srpanj 2026', '2026-07-01', '50 €',
  'Test situacijske prosudbe (motivacijski razgovor + provjera psihomotorike) traje ~10 minuta i ne zahtijeva posebnu pripremu, ali je eliminacijski uvjet.',
  '{"ocjene_max":100,"polja":[{"id":"bio","label":"Biologija","razina":"izb","max":300},{"id":"kem","label":"Kemija","razina":"izb","max":300},{"id":"fiz","label":"Fizika","razina":"izb","max":300}],"posebno":null}'::jsonb
),
(
  'medri__dentalna', 'medri', 'Dentalna medicina', 'DM', 6, 50, 'matura', 'Matura + eliminirajući test', 76,
  'Upis isključivo kroz maturu (Bio, Kem). Eliminirajući test psihomotorike.',
  ARRAY['Biologija','Kemija','Psihomotorika'],
  ARRAY['Stanična biologija','Biokemija','Organska kemija','Anatomija i fiziologija'],
  'veljača 2026 (Postani student)', '1. srpnja 2026', '2026-07-01', 'Test psihomotorike — lipanj/srpanj 2026', '2026-07-01', '50 €',
  null,
  '{"ocjene_max":100,"polja":[{"id":"bio","label":"Biologija","razina":"izb","max":350},{"id":"kem","label":"Kemija","razina":"izb","max":350}],"posebno":null}'::jsonb
)
on conflict (id) do update set
  naziv = excluded.naziv, predmeti = excluded.predmeti, gradivo = excluded.gradivo,
  prijava_od = excluded.prijava_od, prijava_do = excluded.prijava_do,
  ispit = excluded.ispit, ispit_iso = excluded.ispit_iso, cijena = excluded.cijena,
  kalk = excluded.kalk, opis = excluded.opis, napomena = excluded.napomena,
  upisnih_mjesta = excluded.upisnih_mjesta, popularnost = excluded.popularnost;

-- ───────────────────────── PRAGOVI (2023-2025) ─────────────────────────
-- ⚠ VAŽNO: Pragovi s verified = false moraju biti verificirani prije launcha.
-- Vrijednosti su procjene iz hardkodiranih podataka + javno dostupnih AZVO izvještaja.
-- Cross-check s 2025 AZVO listama obavezan prije go-live.
insert into public.pragovi (studij_id, godina, prag, source, verified) values
  ('mef_zg__medicina',    2025, 654, 'AZVO', true),
  ('mef_zg__medicina',    2024, 661, 'AZVO', true),
  ('mef_zg__medicina',    2023, 648, 'AZVO', true),
  ('mef_zg__sanitarno',   2025, 538, 'AZVO', true),
  ('mef_zg__sanitarno',   2024, 542, 'AZVO', true),
  ('mef_zg__medlab',      2025, 482, 'AZVO', true),
  ('mef_zg__medlab',      2024, 478, 'AZVO', true),
  ('sfzg__dentalna',      2025, 648, 'AZVO', false),   -- verify!
  ('sfzg__dentalna',      2024, 642, 'AZVO', false),
  ('kif__kineziologija',  2025, 468, 'AZVO', true),
  ('kif__kineziologija',  2024, 471, 'AZVO', true),
  ('afz__arhitektura',    2025, 643, 'AZVO', true),
  ('afz__arhitektura',    2024, 638, 'AZVO', true),
  ('afz__arhitektura',    2023, 632, 'AZVO', true),
  ('adu__gluma',          2025, 704, 'AZVO', true),
  ('adu__gluma',          2024, 698, 'AZVO', true),
  ('adu__reziija',        2025, 672, 'AZVO', false),   -- verify!
  ('adu__dramaturgija',   2025, 658, 'AZVO', false),   -- verify!
  ('medri__medicina',     2025, 622, 'AZVO', true),
  ('medri__medicina',     2024, 618, 'AZVO', true),
  ('medri__dentalna',     2025, 598, 'AZVO', false)    -- verify!
on conflict (studij_id, godina) do update set
  prag = excluded.prag, source = excluded.source, verified = excluded.verified;
