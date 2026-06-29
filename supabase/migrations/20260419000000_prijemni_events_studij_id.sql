alter table public.prijemni_events
  add column if not exists studij_id text references public.studiji(id);

create index if not exists idx_prijemni_events_studij
  on public.prijemni_events(studij_id);
