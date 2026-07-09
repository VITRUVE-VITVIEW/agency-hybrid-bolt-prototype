# ESPRIT 01 — Reference Analysis

## Scope
References analyzed:
- `esprit01-homepage.jpg`
- `esprit01-aboutpage.jpg`
- `esprit01-encart-service01.jpg`
- `esprit01-encart-service02.jpg`

The analysis distinguishes **visible**, **inferred**, and **unknown** information.

## `esprit01-homepage.jpg`
### Type and purpose
- **Visible:** complete dark, portfolio-led agency homepage.
- **Inferred:** showcase selected work before detailed service content.

### Layout and grid
- Near-black background with thin vertical grid lines.
- Repeating near-full-height project sections.
- Central or offset landscape imagery.
- Alternating left/right copy.
- Giant display words layered around images.
- Vertical numbering and side indicators.
- Minimal header and footer.
- Suitable reconstruction: 12-column editorial grid plus a wide container.

### Hierarchy and typography
1. Oversized condensed display words.
2. Project image.
3. Project title.
4. Metadata and sequence number.
5. Supporting copy.
6. Minimal CTA.
- Mix of solid and outlined uppercase display text.
- Smaller geometric sans-serif for body and interface copy.
- Exact fonts are unknown.

### Spacing, color, imagery
- Large vertical gaps and generous desktop margins.
- Near-black, charcoal, white, muted gray, and project-specific accent colors.
- Large rectangular images with deliberate crop and overlap.

### Interactions
- Visible: burger menu, read-more buttons, progress markers, social links, back-to-top.
- Inferred: fullscreen menu, project links, subtle scroll reveals, optional active-section tracking.

### Implementation
- Desktop risks: large type clipping, fragile overlaps, grid consistency.
- Mobile: simplify grid, stack image and copy, hide rails, reduce overlap.
- Elementor transfer: **High difficulty**.
- Custom CSS: Grid, `clamp()`, text stroke, decorative absolute positioning.
- Optional JS: menu, reveal, active progress, back-to-top.

### Components
`DarkEditorialProjectSection`, `OutlinedDisplayHeading`, `ProjectSequenceIndicator`, `EditorialGridBackground`, `MinimalReadMoreButton`, `DarkFullscreenMenu`, `DarkEditorialFooter`.

## `esprit01-aboutpage.jpg`
### Type and purpose
- **Visible:** complete dark About/Agency page.
- **Inferred:** present people, philosophy, capabilities, and service approach.

### Layout
- Alternating image/text sections.
- Large editorial statement.
- Varied photographic blocks.
- Capability lists.
- Minimal legal/social footer.

### Visual system
- Wide asymmetric grid.
- Condensed uppercase statements.
- Bold sans-serif subheads and compact body copy.
- Near-black background with photography providing most color.

### Interactions and implementation
- Visible: menu, footer links, contact CTA, social links, back-to-top.
- Inferred: service links and subtle scroll reveals.
- Elementor transfer: **Medium to High**.
- Main risks: maintaining variation across a long dark page and controlling line length.
- Mobile: stack alternations, simplify lists, reduce statement scale.

### Components
`AgencyEditorialIntro`, `ImageTextStorySection`, `LargeStatementSection`, `CapabilitiesList`, `AgencyPhotoGrid`, `MinimalDarkFooter`.

## `esprit01-encart-service01.jpg`
### Structure
- Near-black background.
- Central device image.
- Giant outlined word plus large solid blue word.
- Copy on the right.
- Offset white CTA.
- Vertical progress indicator.

### Implementation
- Strong asymmetric grid and deliberate layering.
- Elementor transfer: **High**.
- Custom CSS: text stroke, CSS Grid, fluid offsets, responsive stacking.
- Mobile: title above image, copy below, inline CTA, hide progress rail.

### Components
`DarkProjectFeatureRight`, `GiantOutlineSolidTitle`, `ProjectProgressRail`, `OffsetCTA`.

## `esprit01-encart-service02.jpg`
### Structure
- Near-black background.
- Wide action image.
- Giant outlined plus warm-beige display title.
- Copy on the left.
- CTA overlaps image boundary.
- Sequence marker on the left.

### Implementation
- Elementor transfer: **High**.
- Main challenge: avoid title/image collision at intermediate widths.
- Mobile: title, image, copy, and CTA should become a logical stacked flow.

### Components
`DarkProjectFeatureLeft`, `WarmAccentDisplayHeading`, `OffsetImageCTA`, `ProjectSequenceLabel`.

# Shared Esprit 01 Principles
- Dark editorial foundation.
- Portfolio-first storytelling.
- Deliberate asymmetry.
- Giant condensed typography.
- Outlined text.
- Project-specific accents.
- Thin structural grid lines.
- Minimal interface chrome.
- Photography and mockups as narrative devices.

# Recommended Uses
- Réalisations hub.
- Case-study heroes.
- Homepage featured project.
- Agence page.
- Dark interludes.
- Premium proof and statement sections.

# Style Lab Inventory
- Left/right project compositions.
- Outline, solid, and mixed title treatments.
- Project progress rail.
- Full dark homepage sequence.
- About-page statement system.
- Minimal dark footer.

# Safeguards
- Use `clamp()` for display type.
- Keep absolute positioning decorative, not structural.
- Stack before overlaps become unstable.
- Hide side rails below desktop.
- Use stable image aspect ratios.
- Preserve DOM reading order.
- Avoid global `overflow: hidden`.

# Proposed Tokens
- Colors: near black, charcoal, deep navy, white, muted gray, electric blue, warm beige, coral, green, yellow.
- Type: condensed display + geometric sans.
- Layout: 12-column editorial grid, wide container, reading column, side rail, large spacing scale.
- Motion: short reveal, subtle translation, reduced-motion fallback.
