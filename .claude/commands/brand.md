# Cliqology Brand Identity Guide (2026)

This is the source of truth for the Cliqology brand. Apply these specifications to all UI/UX development, copy, and content generation on this project.

---

## Brand Philosophy

Cliqology represents the "logic of the clique" — the intersection of human connection and technical integration. The 2026 identity is **minimalist, geometric, and high-contrast**, using a vibrant Miami Dolphins-inspired palette to stand out in professional digital workspaces.

---

## Color Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary | Miami Aqua | `#008E97` | Backgrounds, accents, secondary buttons |
| Action | Sunset Coral | `#FC4C02` | Logo accent, CTAs, important links |
| Typography | Deep Marine | `#005778` | Primary text, bold headings |
| Base | Paper White | `#F5F5F0` | Page backgrounds, email canvas |

### Tailwind / CSS Variables
```css
:root {
  --cliq-aqua:  #008E97;
  --cliq-coral: #FC4C02;
  --cliq-navy:  #005778;
  --cliq-white: #F5F5F0;
}
```

> **Note:** The current site uses Tailwind's built-in `indigo-600` and `zinc-950`. When making brand-aligned updates, migrate toward the official Cliqology palette above.

---

## Logo

- **Mark:** Five-pointed asterisk. Top arm in Sunset Coral (`#FC4C02`), remaining four arms in Deep Marine (`#005778`).
- **Wordmark:** "Cliq" in Deep Marine, "ology" in Miami Aqua — clean geometric sans-serif (Inter, Montserrat, or Jost).
- **Clear zone:** Always maintain whitespace around the logo equal to 50% of its width. Never crowd it.

### Logo Variants
| Variant | Description |
|---|---|
| Website Header | Full wordmark with split-color asterisk to the left |
| Avatar / Workspace Icon | Deep Marine asterisk centered on Miami Aqua rounded square (squircle) |
| Favicon / Icon | Deep Marine asterisk centered on Miami Aqua circle |
| Email Signature | Coral asterisk + "Cliqology" in Deep Marine, name/title/links below |

---

## Typography

- **Headings:** Sans-serif, Bold (700). Letter-spacing: `-0.02em`.
- **Body:** Sans-serif, Regular (400). Line-height: `1.6`.
- **Code / Technical:** Monospace (e.g. Fira Code) in Deep Marine.

---

## Tone of Voice

- **Professional yet vibrant.** Grounded in logic (the "-ology"), energized by connection (the "Cliq").
- **Concise.** No fluff. Direct, active verbs.
- **Operator-first.** Written for founders and operators — not analysts or academics.

---

## Email Signature Format

- Layout: Horizontal — logo left, text right.
- Name: Deep Marine, Bold
- Title: Miami Aqua, Regular
- Links: Sunset Coral
