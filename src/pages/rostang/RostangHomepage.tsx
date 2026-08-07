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

export default function RostangHomepage() {
  return (
    <div className="rostang-site">
      <RostangHeader />
      <main id="main-content">

        {/* ── Section 1: Hero ─────────────────────────────────────── */}
        <section className="rostang-hero" aria-labelledby="rostang-hero-heading">
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
                <Link to={heroContent.ctaSecondary.path} className="rostang-btn rostang-btn--secondary">
                  {heroContent.ctaSecondary.label}
                </Link>
              </div>
              <p className="rostang-hero__microcopy">{heroContent.microcopy}</p>
            </div>
            <div className="rostang-hero__visual" aria-hidden="true">
              <div className="rostang-hero__visual-grid">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                  <div key={i} className={`rostang-hero__visual-cell rostang-hero__visual-cell--${i}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Situation ────────────────────────────────── */}
        <section className="rostang-section rostang-situation" aria-labelledby="rostang-situation-heading">
          <div className="rostang-section__inner">
            <div className="rostang-section__header">
              <h2 id="rostang-situation-heading" className="rostang-section__h2">
                {situationContent.heading}
              </h2>
              <p className="rostang-section__intro">{situationContent.introduction}</p>
            </div>
            <ul className="rostang-situation__signals">
              {situationContent.signals.map((signal, i) => (
                <li key={i} className="rostang-situation__signal">
                  <span className="rostang-situation__signal-marker" aria-hidden="true">{i + 1}</span>
                  <span className="rostang-situation__signal-text">{signal}</span>
                </li>
              ))}
            </ul>
            <p className="rostang-situation__closing">{situationContent.closing}</p>
            <Link to={situationContent.contextualLink.path} className="rostang-link rostang-situation__link">
              {situationContent.contextualLink.label}
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </section>

        {/* ── Section 3: Senior manager ───────────────────────────── */}
        <section className="rostang-section rostang-section--light rostang-manager" aria-labelledby="rostang-manager-heading">
          <div className="rostang-section__inner">
            <div className="rostang-section__header">
              <h2 id="rostang-manager-heading" className="rostang-section__h2">
                {managerContent.heading}
              </h2>
              <p className="rostang-section__intro">{managerContent.introduction}</p>
            </div>
            <ol className="rostang-manager__list">
              {managerContent.responsibilities.map((resp, i) => (
                <li key={i} className="rostang-manager__item">
                  <span className="rostang-manager__number">{i + 1}</span>
                  <h3 className="rostang-manager__item-title">{resp.title}</h3>
                  <p className="rostang-manager__item-body">{resp.body}</p>
                </li>
              ))}
            </ol>
            <div className="rostang-manager__actions">
              <Link to={managerContent.ctaPrimary.path} className="rostang-btn rostang-btn--primary">
                {managerContent.ctaPrimary.label}
              </Link>
              <Link to={managerContent.ctaSecondary.path} className="rostang-link">
                {managerContent.ctaSecondary.label}
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 4: Diagnostic ───────────────────────────────── */}
        <section className="rostang-section rostang-diagnostic" aria-labelledby="rostang-diagnostic-heading">
          <div className="rostang-section__inner">
            <div className="rostang-section__header">
              <h2 id="rostang-diagnostic-heading" className="rostang-section__h2">
                {diagnosticContent.heading}
              </h2>
              <p className="rostang-section__intro">{diagnosticContent.coreText}</p>
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
                <h3 className="rostang-diagnostic__panel-title">Délai</h3>
                <p className="rostang-diagnostic__timing">{diagnosticContent.timing}</p>
              </div>
              <div className="rostang-diagnostic__panel rostang-diagnostic__panel--highlight">
                <h3 className="rostang-diagnostic__panel-title">Déduction</h3>
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

        {/* ── Section 5: Project families ─────────────────────────── */}
        <section className="rostang-section rostang-section--light rostang-projects" aria-labelledby="rostang-projects-heading">
          <div className="rostang-section__inner">
            <div className="rostang-section__header">
              <h2 id="rostang-projects-heading" className="rostang-section__h2">
                {projectsContent.heading}
              </h2>
              <p className="rostang-section__intro">{projectsContent.introduction}</p>
            </div>
            <div className="rostang-projects__grid">
              {projectsContent.cards.map((card, i) => (
                <article key={i} className="rostang-projects__card">
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

        {/* ── Section 6: Human block ──────────────────────────────── */}
        <section className="rostang-section rostang-human" aria-labelledby="rostang-human-heading">
          <div className="rostang-section__inner">
            <div className="rostang-section__header">
              <h2 id="rostang-human-heading" className="rostang-section__h2">
                {humanContent.heading}
              </h2>
              <p className="rostang-section__intro">{humanContent.body}</p>
            </div>
            <ol className="rostang-human__cycle">
              {humanContent.cycle.map((step, i) => (
                <li key={i} className="rostang-human__cycle-step">
                  <span className="rostang-human__cycle-number">{i + 1}</span>
                  <span className="rostang-human__cycle-text">{step}</span>
                </li>
              ))}
            </ol>
            <Link to={humanContent.cta.path} className="rostang-btn rostang-btn--secondary">
              {humanContent.cta.label}
            </Link>
          </div>
        </section>

        {/* ── Section 7: Resources ────────────────────────────────── */}
        <section className="rostang-section rostang-section--light rostang-resources" aria-labelledby="rostang-resources-heading">
          <div className="rostang-section__inner rostang-resources__inner">
            <h2 id="rostang-resources-heading" className="rostang-section__h2">
              {resourcesContent.heading}
            </h2>
            <p className="rostang-section__intro">{resourcesContent.body}</p>
            <Link to={resourcesContent.cta.path} className="rostang-btn rostang-btn--secondary">
              {resourcesContent.cta.label}
            </Link>
          </div>
        </section>

        {/* ── Section 8: Final CTA ────────────────────────────────── */}
        <section className="rostang-section rostang-final-cta" aria-labelledby="rostang-final-cta-heading">
          <div className="rostang-section__inner">
            <h2 id="rostang-final-cta-heading" className="rostang-section__h2">
              {finalCtaContent.heading}
            </h2>
            <p className="rostang-section__intro">{finalCtaContent.body}</p>
            <div className="rostang-final-cta__actions">
              <Link to={finalCtaContent.ctaPrimary.path} className="rostang-btn rostang-btn--primary">
                {finalCtaContent.ctaPrimary.label}
              </Link>
              <Link to={finalCtaContent.ctaSecondary.path} className="rostang-btn rostang-btn--secondary">
                {finalCtaContent.ctaSecondary.label}
              </Link>
            </div>
            <p className="rostang-final-cta__microcopy">{finalCtaContent.microcopy}</p>
          </div>
        </section>

      </main>
      <RostangFooter />
    </div>
  )
}
