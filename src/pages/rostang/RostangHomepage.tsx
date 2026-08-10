import { Link } from 'react-router-dom'
import RostangHeader from '../../components/rostang/RostangHeader/RostangHeader'
import RostangFooter from '../../components/rostang/RostangFooter/RostangFooter'
import {
  heroContent,
  situationContent,
  managerContent,
  diagnosticContent,
  projectsContent,
  humanContent,
  resourcesContent,
  finalCtaContent,
} from '../../data/rostangHomepage'
import './RostangHomepage.css'

/* ── Reusable decorative grid lines ──────────────────────────────── */
function GridLines({ count = 12, variant = 'dark' }: { count?: number; variant?: 'dark' | 'light' }) {
  return (
    <div className={`rostang-grid-lines rostang-grid-lines--${variant}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rostang-grid-line" />
      ))}
    </div>
  )
}

/* ── Reusable section number ─────────────────────────────────────── */
function SectionNumber({ num, variant = 'dark' }: { num: string; variant?: 'dark' | 'light' }) {
  return (
    <span className={`rostang-section-number rostang-section-number--${variant}`} aria-hidden="true">
      {num}
    </span>
  )
}

export default function RostangHomepage() {
  return (
    <div className="rostang-site">
      <RostangHeader />
      <main id="main-content">

        {/* ═══ SECTION 1 — HERO ═══════════════════════════════════════ */}
        <section className="rostang-hero" aria-labelledby="rostang-hero-heading">
          <GridLines count={12} variant="dark" />
          <span className="rostang-hero__rail" aria-hidden="true">Accueil</span>
          <span className="rostang-hero__big-number" aria-hidden="true">01</span>
          <div className="rostang-hero__inner">
            <div className="rostang-hero__content">
              <p className="rostang-hero__eyebrow">{heroContent.eyebrow}</p>
              <h1 id="rostang-hero-heading" className="rostang-hero__h1">
                {heroContent.h1}
              </h1>
              <p className="rostang-hero__body">{heroContent.body}</p>
              <div className="rostang-hero__actions">
                <Link to={heroContent.ctaPrimary.path} className="rostang-btn rostang-btn--primary">
                  {heroContent.ctaPrimary.label}
                </Link>
                <Link to={heroContent.ctaSecondary.path} className="rostang-btn rostang-btn--ghost">
                  {heroContent.ctaSecondary.label}
                </Link>
              </div>
              <p className="rostang-hero__microcopy">{heroContent.microcopy}</p>
            </div>
          </div>
        </section>

        {/* SECTION 2 - SITUATION */}
        <section className="rostang-section rostang-situation" aria-labelledby="rostang-situation-heading">
          <GridLines count={12} variant="light" />
          <SectionNumber num="02" variant="light" />
          <div className="rostang-section__inner">
            <div className="rostang-situation__header">
              <h2 id="rostang-situation-heading" className="rostang-section__h2">
                {situationContent.heading}
              </h2>
              <p className="rostang-section__intro">{situationContent.introduction}</p>
            </div>
            <ul className="rostang-situation__signals">
              {situationContent.signals.map((signal, i) => (
                <li key={i} className="rostang-situation__signal">
                  <span className="rostang-situation__signal-index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="rostang-situation__signal-text">{signal}</span>
                </li>
              ))}
            </ul>
            <div className="rostang-situation__footer">
              <p className="rostang-situation__closing">{situationContent.closing}</p>
              <Link to={situationContent.contextualLink.path} className="rostang-link">
                {situationContent.contextualLink.label}
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3 - RESPONSABLE DIGITAL SENIOR */}
        <section className="rostang-section rostang-section--dark rostang-manager" aria-labelledby="rostang-manager-heading">
          <GridLines count={12} variant="dark" />
          <SectionNumber num="03" variant="dark" />
          <div className="rostang-section__inner">
            <div className="rostang-manager__header">
              <h2 id="rostang-manager-heading" className="rostang-section__h2 rostang-section__h2--light">
                {managerContent.heading}
              </h2>
              <p className="rostang-section__intro rostang-section__intro--light">{managerContent.introduction}</p>
            </div>
            <ol className="rostang-manager__matrix">
              {managerContent.responsibilities.map((resp, i) => (
                <li key={i} className="rostang-manager__cell">
                  <span className="rostang-manager__cell-index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="rostang-manager__cell-title">{resp.title}</h3>
                  <p className="rostang-manager__cell-body">{resp.body}</p>
                </li>
              ))}
            </ol>
            <div className="rostang-manager__actions">
              <Link to={managerContent.ctaPrimary.path} className="rostang-btn rostang-btn--primary">
                {managerContent.ctaPrimary.label}
              </Link>
              <Link to={managerContent.ctaSecondary.path} className="rostang-link rostang-link--light">
                {managerContent.ctaSecondary.label}
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4 - DIAGNOSTIC */}
        <section className="rostang-section rostang-diagnostic" aria-labelledby="rostang-diagnostic-heading">
          <GridLines count={12} variant="dark" />
          <SectionNumber num="04" variant="dark" />
          <div className="rostang-section__inner">
            <div className="rostang-diagnostic__header">
              <h2 id="rostang-diagnostic-heading" className="rostang-section__h2 rostang-section__h2--light">
                {diagnosticContent.heading}
              </h2>
              <p className="rostang-section__intro rostang-section__intro--light">{diagnosticContent.coreText}</p>
            </div>
            <div className="rostang-diagnostic__price-row">
              <span className="rostang-diagnostic__price" aria-hidden="true">500&euro;</span>
              <span className="rostang-diagnostic__price-label">HT</span>
            </div>
            <div className="rostang-diagnostic__grid">
              <div className="rostang-diagnostic__panel">
                <h3 className="rostang-diagnostic__panel-title">Livrables</h3>
                <ul className="rostang-diagnostic__deliverables">
                  {diagnosticContent.deliverables.map((d, i) => (
                    <li key={i} className="rostang-diagnostic__deliverable">{d}</li>
                  ))}
                </ul>
              </div>
              <div className="rostang-diagnostic__panel">
                <h3 className="rostang-diagnostic__panel-title">D&eacute;lai</h3>
                <p className="rostang-diagnostic__timing">{diagnosticContent.timing}</p>
              </div>
              <div className="rostang-diagnostic__panel rostang-diagnostic__panel--highlight">
                <h3 className="rostang-diagnostic__panel-title">D&eacute;duction</h3>
                <p className="rostang-diagnostic__deduction">{diagnosticContent.deductionRule}</p>
              </div>
            </div>
            <div className="rostang-diagnostic__actions">
              <Link to={diagnosticContent.cta.path} className="rostang-btn rostang-btn--primary">
                {diagnosticContent.cta.label}
              </Link>
              <p className="rostang-diagnostic__microcopy">{diagnosticContent.microcopy}</p>
            </div>
          </div>
        </section>

        {/* SECTION 5 - PROJECT FAMILIES */}
        <section className="rostang-section rostang-section--light rostang-projects" aria-labelledby="rostang-projects-heading">
          <GridLines count={12} variant="light" />
          <SectionNumber num="05" variant="light" />
          <div className="rostang-section__inner">
            <div className="rostang-projects__header">
              <h2 id="rostang-projects-heading" className="rostang-section__h2">
                {projectsContent.heading}
              </h2>
              <p className="rostang-section__intro">{projectsContent.introduction}</p>
            </div>
            <div className="rostang-projects__grid">
              {projectsContent.cards.map((card, i) => (
                <article key={i} className="rostang-projects__card">
                  <span className="rostang-projects__card-index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="rostang-projects__card-title">{card.title}</h3>
                  <p className="rostang-projects__card-body">{card.body}</p>
                  <Link to={card.path} className="rostang-link rostang-projects__card-link">
                    {card.link}
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </article>
              ))}
            </div>
            <div className="rostang-projects__cta">
              <Link to={projectsContent.cta.path} className="rostang-btn rostang-btn--secondary">
                {projectsContent.cta.label}
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6 - STEERING CYCLE */}
        <section className="rostang-section rostang-human" aria-labelledby="rostang-human-heading">
          <GridLines count={12} variant="light" />
          <SectionNumber num="06" variant="light" />
          <div className="rostang-section__inner">
            <div className="rostang-human__header">
              <h2 id="rostang-human-heading" className="rostang-section__h2">
                {humanContent.heading}
              </h2>
              <p className="rostang-section__intro">{humanContent.body}</p>
            </div>
            <ol className="rostang-human__cycle">
              {humanContent.cycle.map((step, i) => (
                <li key={i} className="rostang-human__cycle-step">
                  <span className="rostang-human__cycle-number" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="rostang-human__cycle-text">{step}</span>
                </li>
              ))}
            </ol>
            <Link to={humanContent.cta.path} className="rostang-btn rostang-btn--secondary">
              {humanContent.cta.label}
            </Link>
          </div>
        </section>

        {/* SECTION 7 - RESOURCES */}
        <section className="rostang-section rostang-section--bluegrey rostang-resources" aria-labelledby="rostang-resources-heading">
          <GridLines count={12} variant="light" />
          <SectionNumber num="07" variant="light" />
          <span className="rostang-resources__ghost-word" aria-hidden="true">Ressources</span>
          <div className="rostang-section__inner">
            <div className="rostang-resources__content">
              <h2 id="rostang-resources-heading" className="rostang-section__h2">
                {resourcesContent.heading}
              </h2>
              <p className="rostang-section__intro">{resourcesContent.body}</p>
              <Link to={resourcesContent.cta.path} className="rostang-btn rostang-btn--secondary">
                {resourcesContent.cta.label}
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8 - FINAL CTA */}
        <section className="rostang-section rostang-section--dark rostang-final-cta" aria-labelledby="rostang-final-cta-heading">
          <GridLines count={12} variant="dark" />
          <SectionNumber num="08" variant="dark" />
          <div className="rostang-section__inner">
            <div className="rostang-final-cta__content">
              <h2 id="rostang-final-cta-heading" className="rostang-section__h2 rostang-section__h2--light rostang-final-cta__heading">
                {finalCtaContent.heading}
              </h2>
              <p className="rostang-section__intro rostang-section__intro--light">{finalCtaContent.body}</p>
              <div className="rostang-final-cta__actions">
                <Link to={finalCtaContent.ctaPrimary.path} className="rostang-btn rostang-btn--primary">
                  {finalCtaContent.ctaPrimary.label}
                </Link>
                <Link to={finalCtaContent.ctaSecondary.path} className="rostang-btn rostang-btn--ghost">
                  {finalCtaContent.ctaSecondary.label}
                </Link>
              </div>
              <p className="rostang-final-cta__microcopy">{finalCtaContent.microcopy}</p>
            </div>
          </div>
        </section>

      </main>
      <RostangFooter />
    </div>
  )
}
