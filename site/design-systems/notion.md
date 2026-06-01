# Design System: notion.so

> Created with UIDrop — uidrop.site

---

## 1. Design Language Overview

**Vibe:** Light · Minimal · Editorial
**Design rhythm:** 4px grid · barely-there radius · flat · document-first density

---

## 2. Color System

| Role     | Hex       | Usage |
|----------|-----------|-------|
| Primary  | `#000000` | All interactive elements |
| Accent   | `#2EAADC` | Links, mentions, highlights |
| Surface  | `#FFFFFF` | Page background |
| Elevated | `#F1F1EF` | Hover states, inline code bg |
| Text     | `#37352F` | All content text |
| Muted    | `#9B9A97` | Placeholders, breadcrumbs |
| Border   | `rgba(55,53,47,0.09)` | Barely visible dividers |

---

## 3. Typography

- **Heading:** ui-sans-serif / Inter 700 — page titles
- **Body:** ui-sans-serif / Inter 400 · 16px · line-height 1.5
- **Mono:** SFMono / Consolas — inline code
- **Scale:** 32 / 24 / 20 / 16 / 14px

---

## 4. Spacing & Layout

- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32px
- **Border radius:** 3px standard — almost sharp
- **Radius vocabulary:** button → 3px, card → 3px, callout → 3px

---

## 5. Effects

Notion is entirely flat. No box shadows except for the sidebar toggle. Depth expressed through background tints and hover states.

---

## 6. Component Specs

### Button
- bg: rgba(55,53,47,0.08) · color: #37352F · radius: 3px · px: 8px · py: 4px · font: 500 14px

### Block/Card
- bg: #F1F1EF · radius: 3px · p: 12px · no border · no shadow

### Callout
- bg: rgba(241,241,239,1) · border-left: none · radius: 3px · p: 16px · icon: emoji

### Input
- bg: rgba(255,255,255,0.9) · border: 1px solid rgba(55,53,47,0.16) · radius: 3px

---

## 7. Implementation Rules

**DO:**
- Keep radius at 3px everywhere — Notion's near-flat corners are the signature
- Use color only for semantic meaning (blue = link, yellow = highlight)
- Let content breathe with generous vertical margins between blocks

**DON'T:**
- Add shadows — Notion doesn't use them
- Use colorful backgrounds — the palette is intentionally restrained
- Round corners more than 4px — it breaks the document aesthetic

---

*Snapped via UIDrop — uidrop.site · Don't copy, use these tokens to build original UI with the same feel.*
