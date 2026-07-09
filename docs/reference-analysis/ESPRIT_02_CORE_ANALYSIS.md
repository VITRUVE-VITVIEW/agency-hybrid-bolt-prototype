# ESPRIT 02 — Core Reference Analysis

## Scope
References analyzed:
- `esprit02-fullpage_working.jpg`
- `esprit02-fullpage_services.jpg`
- `esprit02-00-hero_version01.png`
- `esprit02-01-horizontal-slider.png`

## `esprit02-fullpage_working.jpg`
- **Visible:** complete light-and-color agency homepage.
- Sequence: gradient hero, dark work slider, white introduction, four split services, Insights grid, electric-blue closing section.
- Shared frame: left vertical rail, right social rail, bottom scroll controls.
- Typography: bold geometric sans, large display headings, small vertical labels.
- Palette: magenta/purple, navy, white, blue, green, red.
- Elementor transfer: **Medium**.
- Components: `GradientHero`, `HorizontalCaseStudyCarousel`, `MinimalEditorialIntro`, `ColoredExpertiseSplit`, `InsightsGrid`, `FullHeightBlueCTA`.

## `esprit02-fullpage_services.jpg`
- **Visible:** process/services page.
- Sequence: dark intro, blue-purple strategy section, white toolkit grid, electric-blue closing statement.
- Toolkit uses four equal cards per row on desktop.
- Elementor transfer: **Low to Medium**.
- Components: `ProcessIntro`, `StrategySection`, `ToolkitGrid`, `FullHeightBlueCTA`.

## `esprit02-00-hero_version01.png`
### Structure
- Full-viewport magenta-to-purple hero.
- Burger and logo top-left.
- Contact link top-right.
- Left vertical label and line.
- Large headline and intro.
- Circular play button.
- Social icons right.
- Down arrow bottom-right.

### Interactions
- Visible: menu, contact, play, social, scroll.
- Inferred: fullscreen menu, video modal, smooth scroll.

### Responsive
- Scale headline with `clamp()`.
- Hide or simplify rails on tablet/mobile.
- Keep menu and CTA reachable.
- Elementor transfer: **Medium**.

### Components
`GradientHero`, `HeroPlayButton`, `VerticalRail`, `SocialRail`, `ScrollIndicator`, `HeaderContactLink`.

## `esprit02-01-horizontal-slider.png`
### Structure
- Deep navy full-width section.
- Giant low-contrast background word.
- Large active project image.
- White title overlapping image.
- Project metadata and copy.
- Partial next slide visible.
- Pagination dots and archive CTA.

### Interactions
- Accessible carousel controls.
- Touch drag/swipe.
- Keyboard navigation.
- Pagination state.
- Autoplay should not be assumed.

### Responsive
- Desktop: partial next slide.
- Tablet/mobile: scroll-snap or accessible swipe carousel.
- Reduce title overlap.
- Elementor transfer: **Medium to High**.

### Components
`HorizontalCaseStudyCarousel`, `CaseStudySlide`, `CarouselPagination`, `CaseStudiesCTA`.

# Global Esprit 02 Rhythm
- Alternate dark, white, and saturated color sections.
- Use full-height or near-full-height pacing.
- Preserve negative space.
- Keep consistent side utilities and typography across modes.

# Navigation and Rails
- Desktop burger remains visible.
- Left page label and right social rail unify sections.
- Hide or simplify rails below large desktop.

# Recommended Style Lab Components
- Gradient hero.
- Dark work carousel.
- Vertical and social rails.
- Minimal white intro.
- Colored service split.
- Process intro.
- Toolkit grid.
- Full-height colored CTA.
