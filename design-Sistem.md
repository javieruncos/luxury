# DESIGN SYSTEM — Pentco Architectural Luxury

## 01. Design Direction

### Core Identity

The visual direction is **architectural luxury + contemporary editorial design + refined modernism**.

The interface must communicate:

* quiet luxury
* architectural precision
* exclusivity
* cinematic atmosphere
* editorial sophistication
* contemporary minimalism
* strong visual hierarchy
* intentional asymmetry

The design should feel closer to a **high-end architectural portfolio or luxury property publication** than to a conventional real-estate SaaS website.

### Primary Visual References

The file located at:

`/reference/`

contains the visual reference used to establish the project's art direction.

Treat this reference as an authoritative source for:

* composition
* visual hierarchy
* image treatment
* spatial relationships
* density
* proportions
* atmosphere
* alignment
* visual rhythm

Do not reproduce the reference literally when its content is specific to another project.

Instead, extract its visual principles and apply them consistently throughout the website.

---

# 02. Visual Principles

## Principle 1 — Sophisticated Asymmetry

Prefer asymmetric compositions over rigid symmetrical layouts.

Use the grid to create intentional visual tension.

Avoid automatically centering every element.

Preferred:

* offset headlines
* unequal column widths
* visual elements extending across grid boundaries
* asymmetric image/text relationships
* controlled negative space

Avoid:

* repetitive centered sections
* identical three-column layouts
* symmetrical card grids without a clear purpose

---

## Principle 2 — Editorial Composition

Each section should feel art-directed rather than assembled from generic UI components.

Every section should establish:

1. a dominant visual element
2. a clear secondary element
3. supporting information
4. intentional whitespace

Do not give every element equal visual importance.

---

## Principle 3 — Photography as Architecture

Photography should be treated as a compositional element rather than a decorative asset.

Prefer:

* large imagery
* cinematic crops
* architectural perspectives
* strong contrast
* intentional framing
* full-bleed compositions when appropriate

Avoid:

* collections of small generic thumbnails
* image grids without hierarchy
* decorative imagery with no relationship to the composition

---

## Principle 4 — Material Restraint

Use visual effects sparingly.

Depth should primarily come from:

* photography
* contrast
* translucency
* layering
* subtle borders
* atmospheric overlays

Avoid excessive:

* shadows
* gradients
* glow effects
* decorative effects
* glassmorphism

Glass effects are allowed only when they support the established floating-dock language.

---

# 03. Color System

## Core Palette

### Canvas

```text
Surface: #F8F9FA
White: #FFFFFF
Surface dim: #D9DADB
```

### Structural Surfaces

```text
Surface container low: #F3F4F5
Surface container: #EDEEEF
Surface container high: #E7E8E9
Surface container highest: #E1E3E4
```

### Typography

```text
Primary text: #191C1D
Secondary text: #464834
Muted text: #666666
```

### Accent

```text
Primary accent: #D8F235
Accent dark: #586400
```

The chartreuse/lime accent is a **high-priority visual signal**.

Use it selectively for:

* primary CTAs
* active states
* important navigation indicators
* critical interaction points
* selected visual hooks

Do not use the accent as a dominant page background unless the composition specifically requires it.

### Dark Surfaces

```text
Carbon: #111111
Obsidian: #1A1A1A
```

Use dark surfaces for:

* hero overlays
* secondary CTAs
* floating dark elements
* contrast sections
* image overlays

---

# 04. Typography

## Font Family

Primary:

```text
Plus Jakarta Sans
```

The typography must feel:

* geometric
* modern
* architectural
* precise
* editorial

## Display Hero

```text
font-size: 5rem
font-weight: 600
line-height: 5.25rem
letter-spacing: -0.035em
```

Mobile:

```text
font-size: 2.75rem
font-weight: 600
line-height: 3rem
letter-spacing: -0.03em
```

## Headline XL

Desktop:

```text
font-size: 3.5rem
font-weight: 600
line-height: 3.75rem
letter-spacing: -0.03em
```

Mobile:

```text
font-size: 2.25rem
font-weight: 600
line-height: 2.5rem
letter-spacing: -0.025em
```

## Headline LG

```text
font-size: 2.25rem
font-weight: 600
line-height: 2.5rem
letter-spacing: -0.02em
```

## Headline SM

```text
font-size: 1.25rem
font-weight: 500
line-height: 1.6rem
letter-spacing: -0.015em
```

## Body Large

```text
font-size: 1.125rem
font-weight: 400
line-height: 1.75rem
letter-spacing: -0.01em
```

## Body Medium

```text
font-size: 0.9375rem
font-weight: 400
line-height: 1.5rem
letter-spacing: 0
```

## Body Small

```text
font-size: 0.8125rem
font-weight: 400
line-height: 1.25rem
letter-spacing: 0.01em
```

## Labels

```text
font-size: 0.875rem
font-weight: 600
line-height: 1rem
letter-spacing: 0.01em
```

### Typography Rules

Headlines should use tight tracking.

Line breaks are part of the composition.

Do not allow headlines to wrap arbitrarily when a deliberate line break improves the visual structure.

Avoid excessive text width.

Body copy should remain readable and comparatively restrained.

---

# 05. Layout & Grid

## Desktop

Use a fluid 12-column grid.

Maximum content width:

```text
1440px
```

Outer margin:

```text
56px
```

Column gutter:

```text
24px
```

Use asymmetric column distribution.

Examples:

```text
7 columns / 4 columns
8 columns / 3 columns
6 columns / 5 columns
```

Do not force every section into the same column structure.

The grid is an **art-direction tool**, not merely a technical layout system.

---

## Tablet

```text
8 columns
32px outer margin
20px gutters
```

Large floating elements may extend or scroll horizontally when visually appropriate.

---

## Mobile

```text
4 columns
20px outer margin
16px gutters
```

Stack content vertically while preserving hierarchy.

Do not simply shrink the desktop composition.

---

# 06. Spacing

## Core Tokens

```text
gutter: 24px
gutter-mobile: 16px

margin: 56px
margin-mobile: 20px

space-xs: 6px
space-sm: 12px
space-md: 20px
space-lg: 32px
space-xl: 56px
space-2xl: 80px
```

## Section Rhythm

Major sections should generally use:

```text
80px — 112px
```

of vertical separation depending on visual density.

Do not add spacing merely to reach a fixed rhythm.

Whitespace is part of the composition.

---

# 07. Shape Language

## Pills

Use full-radius shapes for:

* navigation docks
* buttons
* tags
* filters
* search controls
* floating actions

```text
border-radius: 9999px
```

## Architectural Frames

Use softened rectangular geometry for:

* photography
* property previews
* project cards
* large content frames

Typical range:

```text
16px — 24px
```

Avoid excessive rounding.

The visual language should balance:

**hyper-rounded interactions**

with

**soft architectural frames**.

---

# 08. Surfaces & Elevation

## Level 0

Flat surfaces:

```text
#FFFFFF
#F8F9FA
```

or cinematic photography.

## Level 1 — Floating Elements

Use:

```text
backdrop-filter: blur(16px)
```

Light:

```text
rgba(255,255,255,0.92)
```

Dark:

```text
rgba(17,17,17,0.72)
```

Border:

```text
1px
```

with subtle opacity.

## Level 2 — Floating Preview Elements

Use subtle atmospheric depth.

Example shadow:

```text
0 20px 40px -15px rgba(0,0,0,0.25)
```

Avoid heavy shadows.

Depth should feel physical and atmospheric rather than decorative.

---

# 09. Navigation

## Floating Island Dock

The main navigation should behave as a detached floating element.

Characteristics:

* centered horizontally
* approximately 20px from the top
* pill-shaped
* compact
* high visual polish
* subtle translucency
* subtle border
* restrained shadow

Light mode:

```text
background: rgba(255,255,255,0.95)
border: rgba(0,0,0,0.08)
```

Navigation text:

```text
#111111
```

Weight:

```text
500
```

Muted contact metadata:

```text
#666666
```

Avoid underlined navigation links.

---

# 10. Buttons

## Primary CTA

```text
background: #D8F235
color: #111111
border-radius: 9999px
font-weight: 600
padding-inline: 32px
padding-block: 14px
```

Hover:

* subtle scale
* slight luminance increase

Do not exaggerate interaction animations.

## Secondary CTA

```text
background: #1A1A1A
color: #FFFFFF
border-radius: 9999px
```

## Ghost / Glass CTA

```text
background: rgba(255,255,255,0.15)
border: 1px solid rgba(255,255,255,0.3)
backdrop-filter: blur(...)
color: #FFFFFF
```

Use only where appropriate to the visual context.

---

# 11. Photography & Cards

## Hero Photography

Hero photography should be:

* cinematic
* architectural
* immersive
* high quality
* carefully cropped

Use overlays when necessary to maintain text contrast.

Preferred overlay:

```text
linear-gradient(
  180deg,
  rgba(0,0,0,0.45) 0%,
  rgba(0,0,0,0.2) 40%,
  rgba(0,0,0,0.65) 100%
)
```

Do not obscure the image unnecessarily.

---

## Preview Dock

Floating preview trays may contain:

* compact property previews
* small image tiles
* location
* property name
* concise metadata

Use:

* rounded structural container
* frosted surface
* compact internal spacing
* high information density
* clear hierarchy

---

## Project Cards

Preferred aspect ratios:

```text
4:5
16:10
```

Use full-bleed photography.

Labels should generally sit outside the image rather than becoming large overlays.

---

# 12. Metrics & Social Proof

Metrics should be visually restrained.

Primary metric:

```text
3.5rem
font-weight: 500
letter-spacing: -0.04em
```

Secondary denominator:

```text
/5.0
```

Use muted grey.

Supporting explanation should use small body text.

Do not manufacture statistics.

Only use metrics when actual project content provides them.

---

# 13. Composition Rules

These rules have higher visual priority than generic component conventions.

### Rule 1

Every section must have one dominant focal point.

### Rule 2

Do not distribute elements evenly simply because the grid allows it.

### Rule 3

Preserve intentional negative space.

### Rule 4

Prefer asymmetric compositions when consistent with the reference.

### Rule 5

Use scale differences to establish hierarchy.

### Rule 6

Allow imagery to dominate when photography is the primary storytelling element.

### Rule 7

Avoid repetitive section structures.

### Rule 8

Do not turn every piece of content into a card.

### Rule 9

Use the grid to create visual tension.

### Rule 10

A section should feel composed before it feels complete.

---

# 14. Visual Fidelity

The reference image located inside `/reference/` is the primary visual reference for the project's art direction.

Use it to determine:

* composition
* proportions
* hierarchy
* visual density
* image placement
* negative space
* typography scale
* atmospheric treatment
* alignment
* visual rhythm

`DESIGN.md` defines the reusable design system.

The reference image defines the visual composition and art direction.

When the reference contains a distinctive visual decision that is not explicitly described in this document, do not automatically replace it with a conventional UI pattern.

Do not redesign the reference into a generic modern website.

The goal is to **extend the visual language**, not normalize it.

---

# 15. Content Rules

Content should support the visual hierarchy.

Do not invent:

* fake clients
* fake awards
* fake testimonials
* fake statistics
* fake certifications
* fake partnerships
* fake business claims

When real content is unavailable, use clearly intentional placeholder content that preserves the visual structure without presenting fabricated facts as real.

---

# 16. Anti-Patterns

Do NOT introduce:

* generic SaaS layouts
* dashboard interfaces
* repetitive card grids
* unnecessary three-column sections
* excessive glassmorphism
* decorative blobs
* random gradients
* floating circles without purpose
* excessive iconography
* excessive pills
* oversized shadows
* excessive borders
* arbitrary decorative elements
* dense walls of text
* excessive UI chrome
* symmetrical layouts when asymmetry is appropriate
* arbitrary centered content
* excessive animation
* visual noise

Do not fill whitespace simply because it exists.

Do not add components merely to make a section appear more complete.

---

# 17. Responsive Rules

Responsive behavior must preserve:

* hierarchy
* visual identity
* composition logic
* typography character
* image prominence
* CTA visibility

### Desktop

Use asymmetry and expansive composition.

### Tablet

Reduce complexity while preserving hierarchy.

### Mobile

Recompose rather than simply resize.

Prioritize:

1. primary message
2. primary visual
3. primary action
4. supporting information

Avoid:

* horizontal overflow
* tiny typography
* excessively compressed spacing
* broken image crops
* buttons becoming difficult to interact with
* desktop compositions forced into narrow screens

---

# 18. Motion

Motion should be subtle and purposeful.

Preferred behavior:

* smooth reveals
* restrained opacity transitions
* subtle translation
* gentle scale
* atmospheric image movement

Avoid:

* excessive parallax
* constant movement
* distracting hover effects
* exaggerated spring animations
* animation for every element

Motion should reinforce hierarchy rather than compete with it.

Respect `prefers-reduced-motion`.

---

# 19. Accessibility

Maintain:

* sufficient text contrast
* visible focus states
* semantic HTML
* accessible interactive elements
* keyboard navigation
* meaningful alt text
* readable body text
* sufficient touch target size

Visual sophistication must not compromise usability.

---

# 20. Implementation Priority

When making implementation decisions, use this priority order:

```text
1. Visual hierarchy
2. Reference composition
3. Design system consistency
4. Typography
5. Spacing
6. Imagery
7. Component consistency
8. Motion
9. Decorative details
```

Do not sacrifice composition to satisfy a generic component pattern.

Do not introduce implementation decisions that significantly alter the established visual direction.

---

# 21. Final Quality Check

Before considering a page complete, verify:

### Composition

* Does every section have a clear focal point?
* Is negative space intentional?
* Does the composition retain the reference's visual character?
* Are asymmetric layouts actually being used where appropriate?

### Typography

* Are headline proportions correct?
* Is tracking intentional?
* Are line breaks visually controlled?
* Is body text restrained?

### Color

* Is the lime accent being used selectively?
* Are neutral surfaces consistent?
* Is contrast sufficient?

### Components

* Are buttons consistent?
* Are floating elements coherent?
* Are cards being used only where necessary?
* Are radii consistent?

### Responsive

* Does mobile feel designed rather than compressed?
* Is the visual hierarchy preserved?
* Are image crops intentional?
* Is there any horizontal overflow?

### Overall

The page should feel like a **single art-directed experience**, not a collection of independently generated sections.
