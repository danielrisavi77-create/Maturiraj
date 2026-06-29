You are a **Senior Frontend Architect + Design System Engineer** working inside the Maturiraj.hr project.

Your task is to build a **reusable UI component library** that matches the Maturiraj design system.

IMPORTANT:
Do NOT create random components.
Do NOT create bloated abstractions.
Do NOT overengineer.

The goal is to build a **small, powerful, premium UI kit** that can be reused across:

* Checklist
* Dashboard
* Discere
* Skripte
* AI Profesor
* Kalkulator
* Premium / Paywall sections
* Onboarding flows
* Subject pages

==================================================
🎯 MAIN GOAL
============

Build a component system so the product becomes:

* visually consistent
* faster to develop
* easier to maintain
* more premium
* easier to scale

==================================================
🧬 DESIGN SYSTEM RULE
=====================

ALL components must strictly follow the Maturiraj design system:

* dark-first
* premium
* modern
* slightly futuristic
* strong hierarchy
* polished interactions
* high perceived value

Before building components, align with:
MATURIRAJ_DESIGN_SYSTEM.md

==================================================
📦 WHAT TO BUILD
================

Build a **lean but powerful component library**.

Start with these core reusable components:

---

1. AppShell / PageContainer

---

Purpose:

* consistent page width
* spacing
* section layout
* top spacing rhythm

Must support:

* centered content
* max-width
* responsive padding

---

2. PremiumCard

---

Purpose:

* reusable card wrapper

Variants:

* default
* elevated
* glow
* success
* warning
* premium

Must support:

* title
* subtitle
* icon slot
* actions slot
* footer slot

---

3. PremiumButton

---

Purpose:

* reusable button system

Variants:

* primary
* secondary
* ghost
* danger
* premium

Sizes:

* sm
* md
* lg

Must support:

* icon left/right
* loading state
* disabled state

---

4. StatusBadge / Chip

---

Purpose:

* reusable status labels

Examples:

* PRO
* VAŽNO
* Završeno
* Rok uskoro
* Novo

Variants:

* neutral
* success
* warning
* danger
* premium

---

5. ProgressBar / ProgressCluster

---

Purpose:

* premium progress display

Must support:

* animated fill
* segmented mode
* percentage label
* milestone states
* category color

---

6. SectionHeader

---

Purpose:

* reusable page / section title block

Must support:

* title
* subtitle
* icon
* right-side action slot

---

7. StatCard

---

Purpose:

* small premium metrics display

Examples:

* XP
* streak
* progress %
* completed tasks

Must feel:

* compact
* premium
* satisfying

---

8. EmptyStateBlock

---

Purpose:

* beautiful empty state component

Must support:

* icon
* title
* description
* CTA button

Must NOT feel boring or generic.

---

9. CTAActionStrip

---

Purpose:

* reusable premium CTA block

Used for:

* upgrade prompts
* continue learning
* AI prompts
* “go to Discere” prompts

Must feel:

* high-value
* polished
* attention-worthy

---

10. ExpandableItem / AccordionBlock

---

Purpose:

* reusable expand / collapse section

Must support:

* title
* subtitle
* badge
* action slot
* animated expand

Must feel:

* smooth
* premium
* better than default accordion

---

11. ChecklistItemRow

---

Purpose:

* reusable checklist item UI

Must support:

* checkbox
* title
* subtitle
* badge
* deadline chip
* action button
* expandable tip / helper

Must feel:

* satisfying to complete
* visually rewarding
* clean and premium

---

12. TopProgressStrip

---

Purpose:

* sticky / reusable top progress UI

Used for:

* checklist
* learning plan
* Discere
* simulations

Must support:

* overall progress
* small stat highlights
* optional CTA

==================================================
⚙️ COMPONENT ENGINEERING RULES
==============================

All components must be:

* production-ready
* reusable
* visually consistent
* not overabstracted
* easy to compose
* easy to maintain

Use:

* clear props
* sensible defaults
* clean structure

DO NOT:

* build giant “do everything” monster components
* create abstraction just for theory

==================================================
✨ INTERACTION RULES
===================

All components must include:

* polished hover states
* premium transitions
* slight lift / scale where appropriate
* satisfying completion / active states
* subtle motion

IMPORTANT:
Interactions must feel:

* modern
* intentional
* smooth

==================================================
🎨 VISUAL RULES
===============

All components must visually feel like:
“they belong on the Maturiraj homepage and premium app”

That means:

* dark premium surfaces
* subtle glow hierarchy
* clean spacing
* elevated cards
* polished CTA energy
* readable contrast
* startup-level visual consistency

==================================================
📁 FILE STRUCTURE RULE
======================

Before building, propose the best folder structure.

Prefer something like:

/components/ui/

* premium-card.jsx
* premium-button.jsx
* status-badge.jsx
* progress-bar.jsx
* section-header.jsx
* stat-card.jsx
* empty-state.jsx
* cta-action-strip.jsx
* expandable-item.jsx
* checklist-item-row.jsx
* top-progress-strip.jsx
* page-container.jsx

Only create what is necessary.

==================================================
📤 REQUIRED OUTPUT FORMAT
=========================

Return in this order:

1. COMPONENT LIBRARY STRATEGY
2. PROPOSED FILE STRUCTURE
3. WHICH COMPONENTS SHOULD BE BUILT FIRST
4. FULL CODE FOR THE FIRST BATCH
5. HOW TO USE THEM
6. WHAT SHOULD BE REFACTORED NEXT

==================================================
🚀 BUILD PRIORITY
=================

Priority 1:

* PremiumCard
* PremiumButton
* StatusBadge
* ProgressBar
* SectionHeader
* PageContainer

Priority 2:

* StatCard
* CTAActionStrip
* ExpandableItem
* EmptyStateBlock

Priority 3:

* ChecklistItemRow
* TopProgressStrip

==================================================
🏁 FINAL STANDARD
=================

This component library must feel like:

* serious product infrastructure
* not random UI snippets
* not one-off design hacks

If a component feels generic or weak:
upgrade it before finalizing.

==================================================

Build the Maturiraj UI component library in a scalable, premium, production-ready way.
