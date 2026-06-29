-- A/B test: onboarding flow length
-- A: 4 koraka (Razred → Interesi → Profil → Preporuka) — kontrolna varijanta
-- B: 2 koraka (Razred → Interesi) — skip prosjek i grad, idi ravno na listu
--
-- Primarni metric: onboarding_completed rate
-- Sekundarni: downstream engagement (matcher_open, kalkulator_result, target_added)
-- Pobjednički kriterij: variant B bolji ≥15% na completion uz isti downstream engagement

INSERT INTO ab_experiments (
  id,
  name,
  description,
  variants,
  weights,
  status,
  started_at
)
VALUES (
  'onboarding_length',
  'Onboarding: 4 koraka vs 2 koraka',
  'A: klasični tok (Razred → Interesi → Profil → Preporuka). '
  'B: kratki tok (Razred → Interesi) — skip prosjek i grad, odmah personalizirana lista. '
  'Mjeri: completion rate i downstream engagement (matcher, kalkulator, target).',
  ARRAY['a', 'b'],
  ARRAY[50, 50],
  'active',
  now()
)
ON CONFLICT (id) DO NOTHING;
