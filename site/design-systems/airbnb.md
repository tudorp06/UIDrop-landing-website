# Design System: airbnb.com

> Created with UIDrop — uidrop.site

---

## 1. Design Language Overview

**Vibe:** Light · Warm · Rounded
**Design rhythm:** 8px grid · rounded · soft shadows · warm palette

---

## 2. Color System

| Role     | Hex       | Usage |
|----------|-----------|-------|
| Primary  | `#FF385C` | Brand coral-red, primary CTAs |
| Accent   | `#008489` | Secondary actions, links |
| Surface  | `#FFFFFF` | Page background |
| Elevated | `#F7F7F7` | Card backgrounds, input fills |
| Text     | `#222222` | All primary text |
| Muted    | `#717171` | Descriptions, metadata |
| Border   | `#DDDDDD` | Inputs, card outlines |

---

## 3. Typography

- **Heading:** Cereal / Circular 700 — all headings
- **Body:** Cereal / Circular 400 · 16px · line-height 1.5
- **Price:** Cereal 600 — pricing emphasis
- **Scale:** 40 / 28 / 22 / 18 / 16 / 14px

---

## 4. Spacing & Layout

- **Spacing scale:** 8 / 16 / 24 / 32 / 48 / 64px
- **Border radius:** 12px standard, 999px for pill search bar
- **Radius vocabulary:** button → 8px, card → 12px, search → pill (999px)

---

## 5. Effects

### Shadows
- **card** — `rgba(0,0,0,0.12) 0px 6px 16px`
- **modal** — `rgba(0,0,0,0.20) 0px 8px 28px`

---

## 6. Component Specs

### Button (Primary)
- bg: linear-gradient(#FF385C, #E31C5F) · color: #fff · radius: 8px · px: 24px · py: 14px · font: 600 16px

### Search Bar
- bg: #fff · border: 1px solid #DDDDDD · radius: 999px · shadow: card · height: 66px

### Card (Listing)
- bg: #fff · radius: 12px · shadow: card · overflow: hidden · no explicit border

### Input
- bg: #fff · border: 1px solid #DDDDDD · focus-border: #222 · radius: 8px · h: 56px

---

## 7. Implementation Rules

**DO:**
- Use the warm coral-red exclusively for the primary CTA — it's the brand's soul
- Keep cards with shadow not border — Airbnb elevates with depth not outline
- The pill search bar is the signature shape — use it for any global search

**DON'T:**
- Use cool or neutral reds — the coral warmth is intentional
- Add borders to cards — shadow is the container
- Over-round components beyond 12px except for the search pill

---

*Snapped via UIDrop — uidrop.site · Don't copy, use these tokens to build original UI with the same feel.*
