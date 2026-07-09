import DemoFrame from '../../components/DemoFrame/DemoFrame'
import ProjectEditorialSplit from '../../components/projects/ProjectEditorialSplit'
import ProjectTypographyFeature from '../../components/projects/ProjectTypographyFeature'
import CaseStudyCarousel from '../../components/projects/CaseStudyCarousel'
import PortfolioGrid from '../../components/projects/PortfolioGrid'
import MinimalEditorialIntro from '../../components/editorial/MinimalEditorialIntro'
import DarkEditorialIntro from '../../components/editorial/DarkEditorialIntro'
import StatementSection from '../../components/editorial/StatementSection'
import NumberedEditorialSection from '../../components/editorial/NumberedEditorialSection'
import ImageTextSplit from '../../components/editorial/ImageTextSplit'
import caseStudies, { caseStudyMedia } from '../../data/projects'
import portfolioItems, { portfolioMedia } from '../../data/portfolio'
import {
  minimalEditorialIntroData,
  darkEditorialIntroData,
  statementDarkData,
  statementColorData,
  numberedEditorialData,
  imageTextSplitLeftData,
  imageTextSplitRightData,
} from '../../data/editorialSections'

/* ── Carousel slide config ────────────── */
const carouselSlides = caseStudies.map((cs) => ({
  data: cs,
  media: caseStudyMedia[cs.imagePlaceholder],
  ctaPath: `/realisations/cas-clients/${cs.slug}`,
}))

/* ── Portfolio grid config ────────────── */
const portfolioGridItems = portfolioItems.map((item) => ({
  data: item,
  media: portfolioMedia[item.imagePlaceholder],
  ctaPath: `/realisations/portfolio/${item.slug}`,
}))

/* ── Typography feature data ──────────── */
const typoFeatureOutlineOnly = {
  accessibleTitle: 'Accélération IA — Nova Finance',
  titleWords: ['Accélération', 'IA'],
  client: 'Nova Finance',
  category: 'Intelligence Artificielle',
  media: caseStudyMedia['nova'],
}

const typoFeatureMixed = {
  accessibleTitle: 'Stratégie de marque — Lumia Studio',
  titleWords: ['Stratégie', 'de', 'Marque'],
  client: 'Lumia Studio',
  category: 'Image de marque',
  media: caseStudyMedia['lumia'],
}

export default function StyleLabProjectsSection() {
  return (
    <section className="style-lab__section style-lab__section--full-bleed" id="section-projets">
      <h2 className="style-lab__section-title">Projets &amp; contenus éditoriaux</h2>

      <div className="style-lab__section-body">

        {/* ── PROJECT COMPOSITIONS ────────── */}
        <h3 className="style-lab__subsection-title">Compositions de projets</h3>

        <DemoFrame
          label="ProjectEditorialSplit — content-left — Esprit 01 — Héros de cas client / Réalisations — Difficulté Elementor : Élevée"
          background="dark"
        >
          <ProjectEditorialSplit
            data={caseStudies[0]}
            media={caseStudyMedia[caseStudies[0].imagePlaceholder]}
            layout="content-left"
            headingLevel={3}
            accent="digital"
            outlineWordIndex={0}
            ctaPath={`/realisations/cas-clients/${caseStudies[0].slug}`}
          />
        </DemoFrame>

        <DemoFrame
          label="ProjectEditorialSplit — content-right — Esprit 01 — Variante miroir — Difficulté Elementor : Élevée"
          background="dark"
        >
          <ProjectEditorialSplit
            data={caseStudies[1]}
            media={caseStudyMedia[caseStudies[1].imagePlaceholder]}
            layout="content-right"
            headingLevel={3}
            accent="ia"
            outlineWordIndex={1}
            ctaPath={`/realisations/cas-clients/${caseStudies[1].slug}`}
          />
        </DemoFrame>

        <DemoFrame
          label="ProjectTypographyFeature — outline-only — Esprit 01 — Déclaration typographique projet — Difficulté Elementor : Élevée"
          background="dark"
        >
          <ProjectTypographyFeature
            accessibleTitle={typoFeatureOutlineOnly.accessibleTitle}
            titleWords={typoFeatureOutlineOnly.titleWords}
            outlineMode="outline-only"
            accent="ia"
            client={typoFeatureOutlineOnly.client}
            category={typoFeatureOutlineOnly.category}
            media={typoFeatureOutlineOnly.media}
            headingLevel={3}
          />
        </DemoFrame>

        <DemoFrame
          label="ProjectTypographyFeature — mixed (contour + plein) — Esprit 01 — Titre mixte — Difficulté Elementor : Élevée"
          background="dark"
        >
          <ProjectTypographyFeature
            accessibleTitle={typoFeatureMixed.accessibleTitle}
            titleWords={typoFeatureMixed.titleWords}
            outlineMode="mixed"
            outlineSplitIndex={0}
            accent="magenta"
            client={typoFeatureMixed.client}
            category={typoFeatureMixed.category}
            media={typoFeatureMixed.media}
            headingLevel={3}
          />
        </DemoFrame>

        <DemoFrame
          label="CaseStudyCarousel — Esprit 02 — Carrousel de cas clients — Difficulté Elementor : Élevée"
          background="dark"
        >
          <CaseStudyCarousel
            slides={carouselSlides}
            archivePath="/realisations/cas-clients"
          />
        </DemoFrame>

        <DemoFrame
          label="PortfolioGrid — Esprit 01/02 — Grille de portfolio éditoriale — Difficulté Elementor : Moyenne"
          background="dark"
        >
          <PortfolioGrid items={portfolioGridItems} />
        </DemoFrame>

        {/* ── EDITORIAL CONTENT ───────────── */}
        <h3 className="style-lab__subsection-title">Contenu éditorial</h3>

        <DemoFrame
          label="MinimalEditorialIntro — Esprit 02 — Introduction éditoriale minimale fond blanc — Difficulté Elementor : Faible"
          background="light"
        >
          <MinimalEditorialIntro data={minimalEditorialIntroData} />
        </DemoFrame>

        <DemoFrame
          label="DarkEditorialIntro — Esprit 01 — Introduction éditoriale sombre avec média — Difficulté Elementor : Faible"
          background="dark"
        >
          <DarkEditorialIntro data={darkEditorialIntroData} headingLevel={3} />
        </DemoFrame>

        <DemoFrame
          label="StatementSection dark — Esprit 01 — Grande déclaration fond sombre — Difficulté Elementor : Faible"
          background="dark"
        >
          <StatementSection data={statementDarkData} headingLevel={3} />
        </DemoFrame>

        <DemoFrame
          label="StatementSection color (blue) — Esprit 02 — Grande déclaration appel à l'action — Difficulté Elementor : Faible"
          background="dark"
        >
          <StatementSection data={statementColorData} headingLevel={3} />
        </DemoFrame>

        <DemoFrame
          label="NumberedEditorialSection — Esprit 01/02 — Section numérotée avec liste et média — Difficulté Elementor : Moyenne"
          background="dark"
        >
          <NumberedEditorialSection data={numberedEditorialData} headingLevel={3} />
        </DemoFrame>

        <DemoFrame
          label="ImageTextSplit — media-left — Esprit 02 — Split image à gauche — Difficulté Elementor : Moyenne"
          background="light"
        >
          <ImageTextSplit
            data={imageTextSplitLeftData}
            mediaPosition="left"
            ratio="balanced"
            headingLevel={3}
          />
        </DemoFrame>

        <DemoFrame
          label="ImageTextSplit — media-right — Esprit 02 — Split image à droite — Difficulté Elementor : Moyenne"
          background="light"
        >
          <ImageTextSplit
            data={imageTextSplitRightData}
            mediaPosition="right"
            ratio="balanced"
            headingLevel={3}
          />
        </DemoFrame>

      </div>
    </section>
  )
}
