# Design System: spotify.com

> Created with UIDrop — uidrop.site

---

## 1. Design Language Overview

**Vibe:** Dark · Vibrant · Modern
**Built with:** Custom design system

**Design rhythm:** 4px grid · pill buttons · soft elevation · 1.5× line-height

---

## 2. Color System

| Role     | Hex       | Usage |
|----------|-----------|-------|
| Primary  | `#1DB954` | CTAs, active states, brand |
| Accent   | `#1ED760` | Hover states, highlights |
| Surface  | `#121212` | Main background |
| Elevated | `#282828` | Cards, modals, player |
| Text     | `#FFFFFF` | All primary text |
| Muted    | `#B3B3B3` | Secondary text, metadata |
| Border   | `#333333` | Dividers, hairlines |

---

## 3. Typography

- **Display:** Circular Std 800 — hero headings
- **Heading:** Circular Std 700 — section titles
- **Body:** Circular Std 400 · 14px · line-height 1.5
- **Scale:** 48 / 32 / 24 / 16 / 14 / 12px

---

## 4. Spacing & Layout

- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48px
- **Border radius:** pill buttons (500px), cards (8px), inputs (4px)
- **Radius vocabulary:** button → pill, card → 8px, album art → 4px

---

## 5. Effects

### Shadows
- **subtle** — `rgba(0,0,0,0.3) 0px 4px 12px 0px`
- **medium** — `rgba(0,0,0,0.5) 0px 8px 24px 0px`

---

## 6. Component Specs

### Button (Primary)
- bg: #1DB954 · color: #000 · radius: 500px · px: 32px · py: 14px · font: 700 14px

### Card (Album/Playlist)
- bg: #181818 · radius: 8px · p: 16px · hover: bg #282828

### Input
- bg: #333333 · border: none · radius: 4px · h: 40px

---

## 7. Implementation Rules

**DO:**
- Use `#1DB954` only for primary CTAs and active/playing indicators
- Keep backgrounds very dark — surface `#121212`, elevated `#282828`
- Use Circular Std or a geometric sans-serif at multiple weights
- Pill shape on all primary buttons — this is Spotify's signature

**DON'T:**
- Copy Spotify's brand, album art, or identity
- Use green for anything other than the primary action
- Add heavy borders — Spotify separates elements with elevation, not lines

---

*Snapped via UIDrop — uidrop.site · Don't copy, use these tokens to build original UI with the same feel.*
