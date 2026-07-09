import { useRef, useState } from 'react'
import './StyleLab.css'

import DemoFrame from '../components/DemoFrame/DemoFrame'
import HeaderMinimal from '../components/Header/HeaderMinimal'
import HeaderNavigation from '../components/Header/HeaderNavigation'
import FullscreenMenu from '../components/FullscreenMenu/FullscreenMenu'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import VerticalRail from '../components/VerticalRail/VerticalRail'
import SocialRail from '../components/SocialRail/SocialRail'
import ScrollIndicator from '../components/ScrollIndicator/ScrollIndicator'
import BackToTop from '../components/BackToTop/BackToTop'
import Button from '../components/Button/Button'
import IconButton from '../components/Button/IconButton'
import Modal from '../components/Modal/Modal'
import HeroDarkEditorial from '../components/Hero/HeroDarkEditorial'
import HeroGradient from '../components/Hero/HeroGradient'
import HeroHybrid from '../components/Hero/HeroHybrid'

import navigation from '../data/navigation'
import agencyConfig from '../config/agency.config'
import { heroDarkEditorialData, heroGradientData, heroHybridData } from '../data/heroData'

/* Flatten top-level navigation items for the header nav demo */
const primaryNavItems = navigation
  .filter(item => !item.children)
  .map(item => ({ path: item.path, label: item.label }))

/* Social entries for the rail demo */
const socialEntries = [
  { platform: 'LinkedIn', url: agencyConfig.social.linkedin },
  { platform: 'Instagram', url: agencyConfig.social.instagram },
  { platform: 'Twitter', url: agencyConfig.social.twitter },
]

export default function StyleLab() {
  const [fullscreenOpen, setFullscreenOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const fullscreenTriggerRef = useRef<HTMLButtonElement>(null)
  const mobileTriggerRef = useRef<HTMLButtonElement>(null)
  const modalTriggerRef = useRef<HTMLButtonElement>(null)

  /* Flat nav for fullscreen menu */
  const fullscreenNavItems = navigation.map(item => ({
    path: item.path,
    label: item.label,
    pillar: item.pillar,
  }))

  /* Nested nav for mobile menu */
  const mobileNavItems = navigation.map(item => ({
    path: item.path,
    label: item.label,
    children: item.children?.map(child => ({
      path: child.path,
      label: child.label,
    })),
  }))

  return (
    <div className="style-lab">
      {/* Single top anchor for BackToTop focus */}
      <a id="page-top" tabIndex={-1} className="sr-only" aria-hidden="true">Haut de page</a>

      <header className="style-lab__header">
        <div className="style-lab__header-inner">
          <p className="label style-lab__badge">Usage interne — Phase 2</p>
          <h1 id="style-lab-title" className="style-lab__title" tabIndex={-1}>Style Lab</h1>
          <p className="style-lab__subtitle">
            Surface de comparaison et de validation des composants globaux et des héros.
          </p>
        </div>
      </header>

      <main className="style-lab__main">

        {/* ── GLOBAL ─────────────────────────────────────────── */}
        <section className="style-lab__section" id="section-global">
          <h2 className="style-lab__section-title">Global</h2>
          <div className="style-lab__section-body">

            {/* Header Variant A */}
            <DemoFrame label="En-tête — Variante A (minimale, recommandée)" height="72px" background="dark" clip>
              <HeaderMinimal
                logoText={agencyConfig.logoText}
                onMenuOpen={() => setFullscreenOpen(true)}
                variant="solid-dark"
                demoMode
              />
            </DemoFrame>

            {/* Header Variant B */}
            <DemoFrame label="En-tête — Variante B (navigation horizontale)" height="72px" background="dark" clip>
              <HeaderNavigation
                logoText={agencyConfig.logoText}
                primaryNav={primaryNavItems}
                onMenuOpen={() => setFullscreenOpen(true)}
                variant="solid-dark"
                demoMode
              />
            </DemoFrame>

            {/* Header transparent */}
            <DemoFrame label="En-tête transparent sur dégradé" height="72px" background="dark" clip>
              <HeaderNavigation
                logoText={agencyConfig.logoText}
                primaryNav={primaryNavItems}
                onMenuOpen={() => setFullscreenOpen(true)}
                variant="transparent"
                demoMode
              />
            </DemoFrame>

            {/* Fullscreen menu trigger */}
            <DemoFrame label="Menu plein écran éditorial" background="dark">
              <div className="style-lab__demo-pad">
                <p className="text-sm style-lab__demo-hint">
                  Cliquer sur le bouton pour ouvrir le menu plein écran.
                </p>
                <IconButton
                  ref={fullscreenTriggerRef}
                  variant="menu"
                  label="Ouvrir le menu plein écran"
                  tone="light"
                  onClick={() => setFullscreenOpen(true)}
                >
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </IconButton>
              </div>
            </DemoFrame>

            {/* Mobile menu demo */}
            <DemoFrame label="Menu mobile (forceDemoMode — visible à toutes largeurs)" background="light">
              <div className="style-lab__demo-pad">
                <p className="text-sm" style={{ color: 'var(--color-text-body)', marginBottom: 'var(--space-md)' }}>
                  Cliquer sur le bouton pour ouvrir le menu mobile.
                </p>
                <IconButton
                  ref={mobileTriggerRef}
                  variant="menu"
                  label="Ouvrir le menu mobile"
                  tone="dark"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </IconButton>
              </div>
            </DemoFrame>

            {/* Vertical rail */}
            <DemoFrame label="Rail vertical" height="200px" background="dark" clip>
              <VerticalRail sectionLabel="Accueil" demoMode />
            </DemoFrame>

            {/* Social rail */}
            <DemoFrame label="Rail social" height="200px" background="dark" clip>
              <SocialRail entries={socialEntries} demoMode />
            </DemoFrame>

            {/* Scroll indicator */}
            <DemoFrame label="Indicateur de défilement" background="dark">
              <div className="style-lab__demo-pad">
                <ScrollIndicator targetId="section-heros" label="Découvrir" />
              </div>
            </DemoFrame>

            {/* BackToTop — single instance attached to the Style Lab viewport */}
            <DemoFrame label="Retour en haut (actif après défilement — bouton en bas à droite)" background="dark">
              <div className="style-lab__demo-pad">
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Le bouton apparaît en bas à droite après avoir défilé de 400px.
                  Il repositionne le focus sur le titre de cette page.
                </p>
              </div>
            </DemoFrame>

            {/* Buttons */}
            <DemoFrame label="Variantes de boutons principaux" background="dark">
              <div className="style-lab__demo-pad style-lab__demo-row">
                <Button variant="primary">Primaire</Button>
                <Button variant="secondary">Secondaire</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="editorial">Éditorial</Button>
              </div>
            </DemoFrame>

            {/* Modal trigger */}
            <DemoFrame label="Modale — déclencheur et comportement" background="light">
              <div className="style-lab__demo-pad">
                <button
                  ref={modalTriggerRef}
                  className="btn btn--primary"
                  onClick={() => setModalOpen(true)}
                >
                  Ouvrir la modale
                </button>
              </div>
            </DemoFrame>

          </div>
        </section>

        {/* ── HÉROS ──────────────────────────────────────────── */}
        <section className="style-lab__section" id="section-heros">
          <h2 className="style-lab__section-title">Héros</h2>
          <div className="style-lab__section-body">

            <DemoFrame label="Héros éditorial sombre — Esprit 01" clip>
              <HeroDarkEditorial
                data={heroDarkEditorialData}
                headingLevel={2}
                isDemo
                accessibleLabel="Démonstration : Héros éditorial sombre Esprit 01"
                scrollTargetId="section-projets"
              />
            </DemoFrame>

            <DemoFrame label="Héros dégradé — Esprit 02" clip>
              <HeroGradient
                data={heroGradientData}
                headingLevel={2}
                isDemo
                accessibleLabel="Démonstration : Héros dégradé Esprit 02"
                scrollTargetId="section-contenu"
              />
            </DemoFrame>

            <DemoFrame label="Héros hybride recommandé" clip>
              <HeroHybrid
                data={heroHybridData}
                headingLevel={2}
                isDemo
                accessibleLabel="Démonstration : Héros hybride recommandé"
                scrollTargetId="section-expertises"
              />
            </DemoFrame>

          </div>
        </section>

        {/* ── PROJETS ────────────────────────────────────────── */}
        <section className="style-lab__section" id="section-projets">
          <h2 className="style-lab__section-title">Projets</h2>
          <div className="style-lab__section-body">
            <StyleLabSlot label="Composition projet sombre — contenu à gauche" />
            <StyleLabSlot label="Composition projet sombre — contenu à droite" />
            <StyleLabSlot label="Titre géant en contour seul" />
            <StyleLabSlot label="Titre mixte contour et plein" />
            <StyleLabSlot label="Carrousel horizontal de cas clients" />
            <StyleLabSlot label="Grille portfolio éditorial" />
            <StyleLabSlot label="États de survol des cartes projets" />
          </div>
        </section>

        {/* ── CONTENU ────────────────────────────────────────── */}
        <section className="style-lab__section" id="section-contenu">
          <h2 className="style-lab__section-title">Contenu</h2>
          <div className="style-lab__section-body">
            <StyleLabSlot label="Introduction éditoriale minimale — fond blanc" />
            <StyleLabSlot label="Introduction éditoriale — fond sombre" />
            <StyleLabSlot label="Grande déclaration" />
            <StyleLabSlot label="Section éditoriale numérotée" />
            <StyleLabSlot label="Image et texte en split" />
          </div>
        </section>

        {/* ── EXPERTISES ─────────────────────────────────────── */}
        <section className="style-lab__section" id="section-expertises">
          <h2 className="style-lab__section-title">Expertises</h2>
          <div className="style-lab__section-body">
            <StyleLabSlot label="Section split colorée — Digital (bleu électrique)" />
            <StyleLabSlot label="Section split colorée — IA (violet / magenta)" />
            <StyleLabSlot label="Section split colorée — Conseil (corail / rouge)" />
            <StyleLabSlot label="Section service éditorial sombre" />
            <StyleLabSlot label="Cartes de catégorie d'expertise" />
            <StyleLabSlot label="Héros de page d'expertise détail" />
            <StyleLabSlot label="Grille de boîte à outils" />
          </div>
        </section>

        {/* ── COMPOSANTS D'APPUI ─────────────────────────────── */}
        <section className="style-lab__section" id="section-composants">
          <h2 className="style-lab__section-title">Composants d'appui</h2>
          <div className="style-lab__section-body">
            <StyleLabSlot label="Grille Insights / Blog" />
            <StyleLabSlot label="Section processus" />
            <StyleLabSlot label="Témoignage" />
            <StyleLabSlot label="Accordéon FAQ" />
            <StyleLabSlot label="Formulaire de contact" />
            <StyleLabSlot label="Appel à l'action couleur pleine hauteur" />
            <StyleLabSlot label="Pied de page — fond sombre" />
            <StyleLabSlot label="Pied de page — fond clair" />
          </div>
        </section>

      </main>

      {/* Single BackToTop instance — attached to the Style Lab viewport */}
      <BackToTop topAnchorId="style-lab-title" />

      {/* Overlays — rendered outside the main content */}
      <FullscreenMenu
        isOpen={fullscreenOpen}
        onClose={() => setFullscreenOpen(false)}
        triggerRef={fullscreenTriggerRef}
        navItems={fullscreenNavItems}
        logoText={agencyConfig.logoText}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        triggerRef={mobileTriggerRef}
        navItems={mobileNavItems}
        logoText={agencyConfig.logoText}
        forceDemoMode
      />

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        triggerRef={modalTriggerRef}
        title="Exemple de modale"
      >
        <p style={{ color: 'var(--color-text-body)', lineHeight: 'var(--leading-body)' }}>
          Voici un exemple de contenu dans une modale. La navigation au clavier est piégée
          à l'intérieur du dialogue. La touche Échap ferme la modale et restitue le focus
          au déclencheur.
        </p>
      </Modal>
    </div>
  )
}

function StyleLabSlot({ label }: { label: string }) {
  return (
    <div className="style-lab__slot">
      <p className="style-lab__slot-label label">{label}</p>
      <div className="style-lab__slot-placeholder">
        <span>Composant à construire en Phase 3</span>
      </div>
    </div>
  )
}
