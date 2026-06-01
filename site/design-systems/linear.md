# Design System: linear.app

> Created with UIDrop — uidrop.site

---

## 1. Design Language Overview

**Vibe:** Dark · Minimal · Sharp
**Design rhythm:** 4px grid · sharp corners · flat (no shadows) · tight line-height

---

## 2. Color System

| Role     | Hex       | Usage |
|----------|-----------|-------|
| Primary  | `#5E6AD2` | CTAs, links, active items |
| Accent   | `#5E6AD2` | Same as primary — monochromatic |
| Surface  | `#0F0F13` | Main background |
| Elevated | `#1C1C21` | Sidebar, modals, cards |
| Text     | `#F7F8F8` | All primary text |
| Muted    | `#858699` | Labels, metadata, disabled |
| Border   | `#1E1E26` | All hairlines and dividers |

---

## 3. Typography

- **Heading:** Inter 600 — all UI headings
- **Body:** Inter 400 · 14px · line-height 1.45
- **Code/Mono:** SF Mono / JetBrains Mono — issue IDs, shortcuts
- **Scale:** 32 / 20 / 16 / 14 / 12px

---

## 4. Spacing & Layout

- **Spacing scale:** 4 / 8 / 12 / 16 / 20 / 24 / 32px
- **Border radius:** 6px universal — buttons, inputs, badges
- **Radius vocabulary:** everything → 6px (Linear's signature: consistent low radius)

---

## 5. Effects

Linear is deliberately flat — no visible shadows in the main UI. Elevation is expressed through background color changes only.

---

## 6. Component Specs

### Button (Primary)
- bg: #5E6AD2 · color: #fff · radius: 6px · px: 12px · py: 7px · font: 500 13px

### Issue Row (Card equivalent)
- bg: transparent · hover: bg #1C1C21 · border-bottom: 1px solid #1E1E26

### Input
- bg: #1C1C21 · border: 1px solid #2E2E36 · radius: 6px · h: 32px · px: 8px

### Badge/Label
- bg: rgba(94,106,210,0.15) · color: #5E6AD2 · radius: 4px · px: 8px · py: 2px

---

## 7. Implementation Rules

**DO:**
- Keep everything on the same dark palette — no light surfaces anywhere
- Use the 6px radius universally for consistency
- Express hierarchy through typography weight and color opacity, not shadows
- Keep density high — Linear packs a lot in small space

**DON'T:**
- Add box shadows — Linear's signature is flat depth via bg color
- Use the purple for decorative elements — only CTAs and active states
- Break the tight spacing scale with arbitrary values

---

*Snapped via UIDrop — uidrop.site · Don't copy, use these tokens to build original UI with the same feel.*
