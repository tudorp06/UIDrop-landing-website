# Design System: stripe.com

> Created with UIDrop — uidrop.site

---

## 1. Design Language Overview

**Vibe:** Light · Corporate · Soft-rounded
**Design rhythm:** 8px grid · soft corners · layered elevation · generous line-height

---

## 2. Color System

| Role     | Hex       | Usage |
|----------|-----------|-------|
| Primary  | `#635BFF` | All primary CTAs and brand moments |
| Accent   | `#00D4AA` | Success states, growth indicators |
| Surface  | `#FFFFFF` | Main page background |
| Elevated | `#F6F9FC` | Subtle surface tint, code blocks |
| Text     | `#0A2540` | All headings and body text |
| Muted    | `#425466` | Secondary text, descriptions |
| Border   | `#E3E8EE` | All dividers and input borders |

---

## 3. Typography

- **Heading:** Inter 700 — all display and section titles
- **Body:** Inter 400 · 16px · line-height 1.6
- **Code:** SF Mono / Roboto Mono — API docs, code samples
- **Scale:** 48 / 32 / 20 / 16 / 14px

---

## 4. Spacing & Layout

- **Spacing scale:** 8 / 16 / 24 / 32 / 48 / 64 / 96px
- **Border radius:** 8px buttons, 12px cards, 16px modals
- **Radius vocabulary:** button → 8px, card → 12px, input → 6px

---

## 5. Effects

### Shadows
- **subtle** — `rgba(0,0,0,0.05) 0px 1px 3px, rgba(0,0,0,0.1) 0px 1px 2px`
- **card** — `rgba(0,0,0,0.08) 0px 4px 24px`
- **elevated** — `rgba(99,91,255,0.08) 0px 8px 40px`

---

## 6. Component Specs

### Button (Primary)
- bg: #635BFF · color: #fff · radius: 8px · px: 24px · py: 12px · font: 600 15px

### Card
- bg: #fff · border: 1px solid #E3E8EE · radius: 12px · p: 24px · shadow: subtle

### Input
- bg: #fff · border: 1px solid #E3E8EE · focus-border: #635BFF · radius: 6px · h: 44px

---

## 7. Implementation Rules

**DO:**
- Use `#635BFF` exclusively for the single most important action on the page
- Keep the surface clean white with elevation through shadow, not background color
- Generous whitespace — Stripe's layouts breathe, nothing is cramped

**DON'T:**
- Use purple for decorative elements or illustrations — it dilutes the CTA signal
- Add dark backgrounds in the main UI — Stripe is a light-mode design system
- Skip the shadow on cards — elevation is how Stripe creates depth

---

*Snapped via UIDrop — uidrop.site · Don't copy, use these tokens to build original UI with the same feel.*
