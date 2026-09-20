-- Percentil (/api/discere/percentile) filtrira po subject + exam_key + exam_mode + created_at,
-- bez user_id-a. Sva tri postojeca indeksa iz 20260627000000_sim_progress.sql vode s user_id,
-- pa ih planer ne moze iskoristiti i ide na sekvencijalni scan cijele tablice.
create index if not exists sim_progress_exam_percentile_idx
  on public.sim_progress (subject, exam_key, exam_mode, created_at desc);
