-- ───────────────────────── FAKULTETI ─────────────────────────
create table if not exists public.fakulteti (
  id          text primary key,           -- 'mef_zg', 'afz', 'medri'...
  short       text not null,              -- 'MEF', 'AFZ'
  name        text not null,              -- 'Medicinski fakultet Zagreb'
  grad        text not null,              -- 'Zagreb', 'Rijeka'
  sveuciliste text,                       -- 'Sveučilište u Zagrebu'
  sym         text,                       -- '🩺'
  color       text not null,              -- '#f87171'
  glyph_bg    text,                       -- CSS gradient string
  web_url     text,
  opis        text,                       -- kratki opis fakulteta
  sort_order  int default 100,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- ───────────────────────── STUDIJI ─────────────────────────
create table if not exists public.studiji (
  id                text primary key,     -- 'mef_zg__medicina', 'afz__arh'
  fakultet_id       text not null references public.fakulteti(id) on delete cascade,
  naziv             text not null,        -- 'Medicina', 'Dentalna medicina'
  short             text,                 -- 'Medicina', 'DM'
  trajanje_god      int,                  -- 6, 5, 3
  upisnih_mjesta    int,                  -- 300
  tip_upisa         text not null,        -- 'klasicni' | 'elim_test' | 'audicija' | 'matura'
  tip_upisa_label   text not null,        -- 'Klasični prijemni', 'Matura + eliminirajući test'
  popularnost       int default 0,        -- 0-100, za "Traženo" badge
  opis              text,                 -- detaljan opis procesa upisa
  predmeti          text[] not null default '{}',  -- ['Biologija','Kemija','Fizika']
  gradivo           text[] not null default '{}',
  napomena          text,                 -- ispod datuma — "prijava je eliminacijska..."

  -- Datumi (nullable dok se ne objave)
  prijava_od        text,                 -- user-friendly: "travanj 2026"
  prijava_do        text,
  prijava_do_iso    date,                 -- stvarni ISO za countdown
  ispit             text,                 -- "~3. srpnja 2026"
  ispit_iso         date,                 -- stvarni ISO
  cijena            text,                 -- "65 €"

  -- Kalkulator formula (JSON — fleksibilno)
  -- null = "kalkulator nije dostupan" (audicije, psihomotorika)
  kalk              jsonb,
  /* format:
     {
       "ocjene_max": 160,
       "polja": [{"id":"mat","label":"Matematika (A)","razina":"A","max":80}],
       "posebno": {"label":"Prijemni","max":600,"napomena":"..."}
     }
  */

  created_at        timestamptz default now(),
  updated_at        timestamptz default now()
);

create index if not exists idx_studiji_fakultet    on public.studiji(fakultet_id);
create index if not exists idx_studiji_tip         on public.studiji(tip_upisa);
create index if not exists idx_studiji_popularnost on public.studiji(popularnost desc);

-- ───────────────────────── PRAGOVI HISTORY ─────────────────────────
-- Svaki prag po godini → omogućuje trend line chart i audit
create table if not exists public.pragovi (
  id           bigserial primary key,
  studij_id    text not null references public.studiji(id) on delete cascade,
  godina       int  not null,
  prag         int,                -- min bodovi zadnjeg upisanog
  prijavljenih int,               -- broj prijavljenih (opcionalno)
  upisanih     int,               -- broj upisanih
  source       text,              -- 'AZVO', 'fakultet_web'
  source_url   text,
  verified     boolean default false,
  updated_at   timestamptz default now(),
  unique(studij_id, godina)
);

create index if not exists idx_pragovi_studij_god on public.pragovi(studij_id, godina desc);

-- ───────────────────────── VIEWS za frontend ─────────────────────────
-- View koji spaja studij + zadnja 3 praga + fakultet info
create or replace view public.studiji_view as
select
  s.*,
  f.short    as fak_short,
  f.name     as fak_name,
  f.grad,
  f.sym,
  f.color,
  f.glyph_bg,
  f.web_url,
  (select prag from public.pragovi where studij_id = s.id and godina = 2025) as prag_2025,
  (select prag from public.pragovi where studij_id = s.id and godina = 2024) as prag_2024,
  (select prag from public.pragovi where studij_id = s.id and godina = 2023) as prag_2023
from public.studiji s
join public.fakulteti f on f.id = s.fakultet_id;

-- ───────────────────────── RLS ─────────────────────────
alter table public.fakulteti enable row level security;
alter table public.studiji   enable row level security;
alter table public.pragovi   enable row level security;

-- Public read (svi mogu čitati — content je javan)
drop policy if exists "fakulteti_public_read" on public.fakulteti;
create policy "fakulteti_public_read" on public.fakulteti for select using (true);

drop policy if exists "studiji_public_read" on public.studiji;
create policy "studiji_public_read" on public.studiji for select using (true);

drop policy if exists "pragovi_public_read" on public.pragovi;
create policy "pragovi_public_read" on public.pragovi for select using (true);

-- Write restricted na service role (za seed/admin)
-- (nemoj kreirati policy za insert/update/delete za authenticated — ostaje default deny)

-- ───────────────────────── updated_at trigger ─────────────────────────
create or replace function public.tg_set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

drop trigger if exists trg_fakulteti_upd on public.fakulteti;
create trigger trg_fakulteti_upd before update on public.fakulteti
  for each row execute function public.tg_set_updated_at();

drop trigger if exists trg_studiji_upd on public.studiji;
create trigger trg_studiji_upd before update on public.studiji
  for each row execute function public.tg_set_updated_at();

drop trigger if exists trg_pragovi_upd on public.pragovi;
create trigger trg_pragovi_upd before update on public.pragovi
  for each row execute function public.tg_set_updated_at();
