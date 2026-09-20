# Plan i program popravaka — Maturiraj

**Projekt:** maturiraj.hr + Discere  
**Datum:** 20. rujna 2026.  
**Faza:** pre-launch hardening (ne širenje proizvoda)  
**Pravilo:** nula novih featurea dok se ovaj program ne zatvori.

Cilj programa nije “više aplikacije”. Cilj je:

> Korisnik se može prijaviti, platiti točno ono što vidi, dobiti ono što je platio, riješiti jedan ispit i znati što dalje — bez curenja podataka i bez slijepih ulica.

---

## 0. Pravila izvođenja

1. Jedan tok rada u trenutku. Ne paralelno Game Mode + roditelji + novi predmeti.
2. Svaki task ima **kriterij gotovosti**. Nije gotovo dok se to ne može pokazati.
3. Svaka izmjena entitlements / baze / Stripe ide prvo na **test** (Stripe test mode + staging baza).
4. Ne dirati `HrvatskiSimulator.jsx` (~20k linija) osim ako task to izričito zahtijeva zbog crasha.
5. Nakon svakog većeg bloka: login, logout, free / starter / pro, jedan simulator, mobitel.
6. Dokumentacija (`agents/FIX_SESSION.md`, `agents/bugs.md`) se ažurira istog dana.

### Što je izvan ovog programa

- Novi predmeti (24/24)
- Game Mode proširenje
- Roditeljski portal u produkciji
- Novi AI agenti
- Rebrand / veliki UI redesign
- Referral, offline, push u produkciji
- Medicinar / atlas kao prioritet

---

## Program u 4 tjedna

| Tjedan | Ime | Ishod |
|---|---|---|
| T1 | Novac i podaci | Baza ne curi. Checkout se smije uključiti. Cijena na ekranu = cijena na Stripeu. |
| T2 | Pristup i API | Free ne vidi paid. API ne zaobilazi paywall. Rute su usklađene. |
| T3 | Jedan korisnički krug | Prijava → dashboard → jedan simulator → rezultat → sljedeći korak. Radi na mobitelu. |
| T4 | AI Pro + čišćenje | Pro chat radi. Nema retired modela. Nema mrtvog koda na ulazu. Launch checklist prođen. |

Ako T1 nije zatvoren, T2–T4 se ne počinju “usput”.

Puni taskovi T1.1–T4.4 i dnevni ritam ostaju u ovom fileu kako su definirani 20. rujna 2026. Aktivni pokazivač sesije je `agents/FIX_SESSION.md` — čitaj njega prvo, ovaj file samo za aktivni task.
