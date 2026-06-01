# Design System: vercel.com

> Created with UIDrop — uidrop.site

---

## 1. Design Language Overview

**Vibe:** Dark · Minimal · Sharp
**Built with:** Custom / Geist design system
**Design rhythm:** 8px grid · sharp corners · flat · mono type accents

---

## 2. Color System

| Role     | Hex       | Usage |
|----------|-----------|-------|
| Primary  | `#FFFFFF` | Main CTAs (inverted on dark) |
| Accent   | `#0070F3` | Links, hover states, focus |
| Surface  | `#000000` | Main background |
| Elevated | `#111111` | Cards, drawers, elevated panels |
| Text     | `#EDEDED` | Primary text |
| Muted    | `#888888` | Labels, metadata, placeholders |
| Border   | `#333333` | All hairlines |

---

## 3. Typography

- **Heading:** Geist 700 — all headings
- **Body:** Geist 400 · 15px · line-height 1.5
- **Mono:** Geist Mono — code, terminal output, file paths
- **Scale:** 48 / 32 / 24 / 15 / 13px

---

## 4. Spacing & Layout

- **Spacing scale:** 8 / 16 / 24 / 32 / 48 / 64px
- **Border radius:** 8px — nearly everything
- **Radius vocabulary:** button → 8px, card → 8px, input → 8px (extremely consistent)

---

## 5. Effects

Vercel is mostly flat. Key surfaces use subtle borders, not shadows. The triangle logo is the only decorative element.

---

## 6. Component Specs

### Button (Primary)
- bg: #fff · color: #000 · radius: 8px · px: 16px · py: 9px · font: 500 14px · border: none

### Button (Secondary)
- bg: transparent · color: #fff · border: 1px solid #333 · radius: 8px · same padding

### Card
- bg: #111 · border: 1px solid #333 · radius: 8px · p: 24px

### Input
- bg: #000 · border: 1px solid #333 · focus-border: #fff · radius: 8px · h: 40px

---

## 7. Implementation Rules

**DO:**
- Invert the primary button — white on black is Vercel's signature
- Keep the radius at 8px for everything — don't vary it
- Use Geist or a clean geometric sans at consistent weights

**DON'T:**
- Add gradients — Vercel is purely monochromatic
- Use colour for branding — the system communicates through contrast only
- Add decorative elements — extremely clean, zero noise

---

*Snapped via UIDrop — uidrop.site · Don't copy, use these tokens to build original UI with the same feel.*
