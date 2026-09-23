-- ════════════════════════════════════════════════════════════════════════════
-- sim_progress RLS: korisnik smije čitati i dodavati svoje retke, ali ne mijenjati
-- ni brisati ih (ADR-001)
--
-- Zatečena politika "sim_progress own" bila je `for all`, dakle i UPDATE i
-- DELETE. Redci te tablice su POVIJEST POKUŠAJA: iz njih se računa napredak i
-- percentil (app/api/discere/percentile/route.js), pa je mogućnost da ih vlasnik
-- retroaktivno mijenja ili briše bila tiha rupa — dovoljno je iz konzole
-- preglednika (anon klijent je u bundleu) obrisati vlastite retke pa da povijest
-- i svaki brojač nad njom krenu ispočetka.
--
-- Nijedan klijentski put ne radi update ni delete nad ovom tablicom
-- (lib/sim-progress.ts i lib/discere/progress.js samo insert, dashboard select),
-- pa je suženje bez posljedica za aplikaciju. Administrativne ispravke idu
-- service-role ključem, koji RLS ionako zaobilazi.
--
-- Idempotentno; pokreni u Supabase SQL editoru.
-- ════════════════════════════════════════════════════════════════════════════

drop policy if exists "sim_progress own" on public.sim_progress;
drop policy if exists "sim_progress select own" on public.sim_progress;
drop policy if exists "sim_progress insert own" on public.sim_progress;

create policy "sim_progress select own" on public.sim_progress
  for select using (auth.uid() = user_id);

create policy "sim_progress insert own" on public.sim_progress
  for insert with check (auth.uid() = user_id);
