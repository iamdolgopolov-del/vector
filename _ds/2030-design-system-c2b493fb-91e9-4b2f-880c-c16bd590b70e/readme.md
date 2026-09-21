# Иллюстратор 2030 — Design System

Design system for **«Иллюстратор 2030»** — a practical online course by **Школа Риты Стой** that turns a beginner into a *commercial* illustrator wanted by brands and agencies. The flagship surface is a long Russian-language conversion landing page for the course **«Коммерческий иллюстратор»** (6 months, from zero to first paid orders).

> The product voice is Russian. All copy, labels and components ship Cyrillic text.

## Sources
- **Figma:** "Курс Риты Стой.fig" (mounted virtual file). The macro design lives on `Page-1`, frame **«Дизайн-макет»** (`27:16`, 1366px wide, ~17 660px tall) with two near-identical variants (frames 4 & 5). Frame **«Структура сайта»** (`13:5`) is the project sitemap. There were **no Figma components or Variables** in the file — it is built from raw frames — so tokens and components here were reconstructed from the rendered design, not extracted from a published library.
- No codebase or live URL was provided.

---

## Content fundamentals (voice & copy)

- **Language:** Russian throughout. Numbers use a thin space as the thousands separator and a trailing ₽ (`95 000 ₽`).
- **Address:** the reader as **вы** (lower-case, informal-respectful). Warm, encouraging, never corporate. "Наши ученики получают заказы во время обучения."
- **Tone:** confident and reassuring — sells a *career outcome*, not a hobby. Leans on concrete proof (income figures, timeframes, student stories) over hype.
- **Headlines:** short, declarative, sentence case — "Первые заказы уже во время курса", "Выберите тариф обучения", "Появились вопросы?". No ALL-CAPS, no exclamation spam.
- **Body:** plain, second-person, benefit-led. Often set at **80 % opacity** of ink — a deliberate soft-contrast reading tone (see `--text-secondary`).
- **Eyebrows / chips:** 1–2 words — "Авторский курс", "6 месяцев", "Тарифы", "Программа".
- **CTAs:** verbs of low-friction commitment — "Оставить заявку", "Задать вопрос", "Подробнее о курсе", "Выбрать тариф". The riskiest action ("Записаться сейчас") is the only place red is used on a button.
- **No emoji.** None appear in the source design; do not introduce them.

---

## Visual foundations

**Palette.** A cool, calm canvas with one strong brand colour and two high-energy accents.
- **Canvas** `#EEF1F5` — the page never sits on pure white; cards are white *on* the grey.
- **Brand indigo** `#434373` (deep `#2B2B61`) — full-bleed section bands, primary buttons, featured tariff, footer. Reversed text on indigo runs white at ~80 % opacity.
- **Green** `#3DB83D` — confirmation, inclusion checkmarks, monetization cues, the iMessage-style chat bubbles.
- **Red** `#FF2D44` — sparingly, for urgency / discount badges and a single hot CTA.
- **Text** `#181818`; muted/borders `#6B6B6B`; hairlines `#C7C3C3`.

**Type.** **Onest** is the entire system — headings at weight **500 (Medium)** with `-0.01em` tracking, body at **400 (Regular)**, **700 (Bold)** reserved for the wordmark and tiny eyebrow labels. **Manrope** is a secondary face for dense utility text. Display 58 → H1 50 → H2 30 → H3 22 → lead 20 → body 16 → 14 → 12 → 11.

**Shape & elevation.** Generously rounded: chips 7px, inputs 10px, nested 15px, cards **20px**, hero imagery & big panels **30px**, pills fully round. Shadows are **light and low-spread** — `0 4px 4px rgba(0,0,0,.1)` is the workhorse card shadow; many "borders" are actually hairline *inset* rings rather than strokes.

**Imagery.** Two registers, both warm: (1) **vibrant digital illustrations** — children's-book / character style, saturated, soft-grain (student & mentor work, e.g. the jellyfish piece, before/after pieces, grayscale portrait studies); (2) **warm real photographs** of the mentor working on an iPad. The hero image sits under a **red→blue 30 % diagonal wash** (`--wash-hero`) that ties imagery to the brand accents.

**Signature motifs.**
- **Glass pills** — white `rgba(255,255,255,.85)` chips with `backdrop-filter: blur(10px)`, floating over imagery as eyebrows / tariff selectors. Selected → solid indigo.
- **Green-check feature lists** — filled `#3DB83D` circle-tick rows for "что входит".
- **Full-bleed indigo bands** alternating with the grey canvas for rhythm (mentor block, lead form, footer).
- **Inputs on dark** — deep-indigo `#2B2B61` filled fields inside indigo sections.

**Layout.** 1286px content column inside a 40px page gutter; ~80px between sections. Cards laid out on CSS grid with `gap`.

**Motion & states.** Restrained. Buttons darken via `brightness(0.92)` on hover and scale to `0.97` on press; cards lift `-3px` with a deeper shadow when `interactive`. Accordions expand via a `grid-template-rows 0fr→1fr` transition. Standard easing `cubic-bezier(.22,.61,.36,1)`, ~200ms. No bounces, no infinite loops, no decorative parallax.

---

## Iconography

The source design has **no icon font and no shared icon set** — icons are one-off vectors: a filled green **circle-check** (feature lists / tariff inclusions), simple **chevrons** (accordion / dropdowns), and small UI glyphs. This system bakes the brand check and chevrons directly into the components (`FeatureItem`, `Accordion`, `Checkbox`) as inline SVG so they always match.

For anything beyond those, use **[Lucide](https://lucide.dev)** at a **2px stroke** (link from CDN) — it matches the thin, rounded line quality of the few UI glyphs in the design. **⚠️ Substitution flag:** Lucide is *our* choice, not an asset from the file; swap it if the brand later standardises on a specific set. **No emoji, no Unicode dingbats** as icons.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link only this). `@import`s the four token files + base.
- `tokens/` — `fonts.css` (Onest + Manrope via Google Fonts), `colors.css`, `typography.css`, `spacing.css` (radii/shadows/motion), `base.css` (element resets + `.ds-*` helpers).
- `assets/images/` — hero wash background, mentor photos, before/after, student illustrations, grayscale portrait, chat screenshot, certificate.
- `SKILL.md` — Agent-Skills-compatible entry for downloaded use.

**Components** (`window.Ds2030DesignSystem_c2b493`)
- `components/core/` — **Button, Pill, Badge, Card, Avatar**
- `components/forms/` — **Input, Textarea, Checkbox**
- `components/feedback/` — **Accordion**
- `components/navigation/` — **NavBar, Tabs**
- `components/marketing/` — **SectionHeading, StatCard, FeatureItem, Testimonial, PriceCard**

**Foundation cards** — `guidelines/` (Colors ×3, Type ×3, Spacing ×3, Brand ×3).

**UI kit** — `ui_kits/landing/` — full click-through recreation of the course landing page (`index.html` + `Hero.jsx`, `Sections.jsx`, `Sections2.jsx`).

Every component directory ships `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md` and one `@dsCard` HTML. The `_ds_bundle.js`, `_ds_manifest.json` and `_adherence.oxlintrc.json` files are generated automatically — do not edit them.
