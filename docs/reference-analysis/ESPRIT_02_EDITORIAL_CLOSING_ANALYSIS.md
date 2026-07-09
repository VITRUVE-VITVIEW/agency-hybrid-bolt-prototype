# ESPRIT 02 — Editorial and Closing Analysis

## Scope
References analyzed:
- `esprit02-03-section03.png`
- `esprit02-03-section04.png`
- `esprit02-04-partie-blog.png`
- `esprit02-05-footer.png`

## `esprit02-03-section03.png`
- Web Design and Development split service.
- White left area, saturated red right panel.
- Large angled laptop crosses the boundary.
- Shared numbered service structure.
- Elementor transfer: **Medium to High**.
- Components: `ExpertiseSplitSection`, `LaptopMockupPanel`.

## `esprit02-03-section04.png`
- App Development split service.
- White left area, magenta right panel.
- Large angled phone.
- Elementor transfer: **Medium**.
- Components: `ExpertiseSplitSection`, `PhoneMockupPanel`.

## `esprit02-04-partie-blog.png`
- Editorial Insights preview section.
- Massive background heading.
- Three staggered article cards with different image heights.
- Article titles and category metadata.
- Responsive: 3 columns desktop, 2 tablet, 1 mobile.
- Preserve DOM order when simplifying stagger.
- Elementor transfer: **Medium**.
- Components: `InsightsGrid`, `ArticleCard`, `OversizedSectionTitle`.

## `esprit02-05-footer.png`
- Full-height electric-blue closing section.
- Small intro line, oversized white headline, large negative space.
- Functions more like a closing CTA than a utility footer.
- Final implementation should separate:
  1. `FullHeightColoredCTA`
  2. `UtilityFooter`
- Elementor transfer: **Low to Medium**.

# Service Pattern
Use one data-driven `ExpertiseSplitSection` with device/image variants and color tokens.

# Insights Pattern
- Oversized decorative title.
- Staggered article grid.
- Multiple image ratios.
- Simplified responsive grid.
- Optional filtering is not visible and should not be assumed.

# Closing Pattern
- Saturated full-height field.
- Short intro.
- Large action-oriented title.
- Add an explicit accessible CTA in the real implementation.

# Mobile Adaptations
- Stack service copy and image panel.
- Remove fixed rails.
- One-column Insights.
- Scale oversized headings safely.
- Reduce closing section height if needed.
- Keep touch targets at least 44px.

# Style Lab Components
`ExpertiseSplitSection`, `LaptopMockupPanel`, `PhoneMockupPanel`, `InsightsGrid`, `ArticleCard`, `OversizedSectionTitle`, `FullHeightColoredCTA`, `UtilityFooter`.
