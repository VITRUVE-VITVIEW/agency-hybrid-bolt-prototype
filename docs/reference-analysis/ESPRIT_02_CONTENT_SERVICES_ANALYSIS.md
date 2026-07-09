# ESPRIT 02 — Content and Services Analysis

## Scope
References analyzed:
- `esprit02-02-content.png`
- `esprit02-02-content-square.png`
- `esprit02-03-section01.png`
- `esprit02-03-section02.png`

## `esprit02-02-content.png`
- Minimal white editorial introduction.
- Bold opening sentence, broad body paragraph, underlined text link.
- Very generous vertical whitespace.
- Deep navy text, pink/red rail accent.
- Elementor transfer: **Low**.
- Component: `MinimalEditorialIntro`.

## `esprit02-02-content-square.png`
- Toolkit grid with two rows of four equal cards.
- Thin blue borders, centered logos and descriptions.
- No visible shadows or rounded corners.
- Responsive target: 4 columns desktop, 2 tablet, 1 mobile.
- Elementor transfer: **Low**.
- Components: `ToolkitGrid`, `ToolkitCard`.

## `esprit02-03-section01.png`
- Brand Strategy split section.
- White content area plus purple right panel.
- Large print mockup overlaps the boundary.
- Number, title, copy, and underlined link on left.
- Elementor transfer: **Medium**.
- Components: `ExpertiseSplitSection`, `NumberedServiceIntro`, `PrintMockupPanel`.

## `esprit02-03-section02.png`
- UX/UI split section.
- White content area plus green right panel.
- Large angled phone mockup.
- Shared structure with the Brand Strategy section.
- Elementor transfer: **Medium**.
- Components: `ExpertiseSplitSection`, `DeviceMockupPanel`.

# Shared Split-Service System
- One reusable template with:
  - number;
  - title;
  - description;
  - CTA;
  - accent color;
  - image;
  - crop/alignment;
  - overlap amount.
- Desktop near-full-height.
- Tablet reduces overlap.
- Mobile stacks copy then full-width color/image panel.

# Responsive Safeguards
- Hide rails when crowded.
- Use stable image aspect ratios.
- Keep links at least 44px high.
- Reduce decorative whitespace on mobile.
- Do not force equal card heights on narrow screens.

# Style Lab Components
`MinimalEditorialIntro`, `EditorialTextLink`, `ToolkitGrid`, `ToolkitCard`, `ExpertiseSplitSection`, `NumberedServiceIntro`, `DeviceMockupPanel`, `PrintMockupPanel`.
