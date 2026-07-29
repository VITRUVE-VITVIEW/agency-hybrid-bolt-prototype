import { useRef, useState, useCallback } from 'react'
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
import StyleLabProjectsSection from './style-lab/StyleLabProjectsSection'
import StyleLabExpertiseProcessSection from './style-lab/StyleLabExpertiseProcessSection'

import navigation from '../data/navigation'
import agencyConfig from '../config/agency.config'
import { heroDarkEditorialData, heroGradientData, heroHybridData } from '../data/heroData'

const primaryNavItems = navigation.map(item => ({ path: item.path, label: item.label }))

const socialEntries = [
  { platform: 'linkedin' as const, url: agencyConfig.social.linkedin },
  { platform: 'instagram' as const, url: agencyConfig.social.instagram },
  { platform: 'twitter' as const, url: agencyConfig.social.twitter },
]

const fullscreenNavItems = navigation.map(item => ({
  path: item.path,
  label: item.label,
  pillar: item.pillar,
}))

const mobileNavItems = navigation.map(item => ({
  path: item.path,
  label: item.label,
  children: item.children?.map(child => ({
    path: child.path,
    label: child.label,
  })),
}))

export default function StyleLab() {
  const [fullscreenOpen, setFullscreenOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const fullscreenTriggerRef = useRef<HTMLButtonElement>(null)
  const mobileTriggerRef = useRef<HTMLButtonElement>(null)
  const modalTriggerRef = useRef<HTMLButtonElement>(null)

  const openFullscreen = useCallback(() => setFullscreenOpen(true), [])
  const closeFullscreen = useCallback(() => setFullscreenOpen(false), [])
  const openMobileMenu = useCallback(() => setMobileMenuOpen(true), [])
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [])
  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  return (
    <div className="style-lab">
      <a id="page-top" tabIndex={-1} className="sr-only" aria-hidden="true">Haut de page</a>

      <header className="style-lab__header">
        <div className="style-lab__header-inner">
          <p className="label style-lab__badge">Usage interne — Phase 3</p>
          <h1 id="style-lab-title" className="style-lab__title" tabIndex={-1}>Style Lab</h1>
          <p className="style-lab__subtitle">
            Surface de comparaison et de validation des composants globaux, héros, projets et contenus éditoriaux.
          </p>
          <nav className="style-lab__toc" aria-label="Navigation Style Lab">
            <ul className="style-lab__toc-list" role="list">
              {[
                { id: 'section-global',     label: 'Global' },
                { id: 'section-heros',      label: 'Héros' },
                { id: 'section-projets',    label: 'Projets & contenus' },
                { id: 'section-expertises', label: 'Expertises, Outils & Méthode' },
                { id: 'section-composants', label: 'Composants d\'appui' },
              ].map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className="style-lab__toc-link label">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="style-lab__main">

        {/* ── GLOBAL ──────────────────────────────────────────── */}
        <section className="style-lab__section" id="section-global">
          <h2 className="style-lab__section-title">Global</h2>
          <div className="style-lab__section-body">

            <DemoFrame label="En-tête — Variante A (minimale, recommandée)" height="72px" background="dark" clip>
              <HeaderMinimal
                logoText={agencyConfig.logoText}
                contactLabel="Contact"
                contactPath="/contact"
                onMenuOpen={openFullscreen}
                variant="solid-dark"
                demoMode
              />
            </DemoFrame>

            <DemoFrame label="En-tête — Variante B (navigation horizontale + CTA contact)" height="72px" background="dark" clip>
              <HeaderNavigation
                logoText={agencyConfig.logoText}
                primaryNav={primaryNavItems}
                contactLabel="Contact"
                contactPath="/contact"
                onMenuOpen={openFullscreen}
                variant="solid-dark"
                demoMode
              />
            </DemoFrame>

            <DemoFrame label="En-tête transparent — sur surface dégradée (Esprit 02)" height="72px" background="gradient-ia" clip>
              <HeaderNavigation
                logoText={agencyConfig.logoText}
                primaryNav={primaryNavItems}
                contactLabel="Contact"
                contactPath="/contact"
                onMenuOpen={openFullscreen}
                variant="transparent"
                demoMode
              />
            </DemoFrame>

            <DemoFrame label="Menu plein écran éditorial — cliquer pour ouvrir" background="dark">
              <div className="style-lab__demo-pad">
                <p className="style-lab__demo-hint text-sm">
                  Menu plein écran Esprit 01 — navigation par clavier, touche Échap, restauration du focus.
                </p>
                <IconButton
                  ref={fullscreenTriggerRef}
                  variant="menu"
                  label="Ouvrir le menu plein écran"
                  tone="light"
                  onClick={openFullscreen}
                >
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </IconButton>
              </div>
            </DemoFrame>

            <DemoFrame label="Menu mobile — aperçu dans un cadre téléphone" background="light">
              <div className="style-lab__demo-pad">
                <p className="style-lab__demo-hint-light text-sm">
                  Menu latéral mobile avec accordéons Digital / IA / Conseil.
                  Forçage de visibilité desktop (forceDemoMode=true).
                  Navigation clavier + touche Échap fonctionnelles.
                </p>
                <div className="style-lab__phone-frame">
                  <div className="style-lab__phone-header">
                    <span className="label style-lab__phone-logo">{agencyConfig.logoText}</span>
                    <IconButton
                      ref={mobileTriggerRef}
                      variant="menu"
                      label="Ouvrir le menu mobile"
                      tone="dark"
                      onClick={openMobileMenu}
                    >
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </IconButton>
                  </div>
                  <div className="style-lab__phone-body">
                    <p className="style-lab__phone-placeholder text-sm">
                      Surface page mobile — appuyer sur l'icône menu
                    </p>
                  </div>
                </div>
              </div>
            </DemoFrame>

            <DemoFrame label="Rail vertical — indicateur de section (demo mode)" height="200px" background="dark" clip>
              <VerticalRail sectionLabel="Accueil" demoMode />
            </DemoFrame>

            <DemoFrame label="Rail social — icônes SVG internes, cibles 44×44 px" height="200px" background="dark" clip>
              <SocialRail entries={socialEntries} demoMode />
            </DemoFrame>

            <DemoFrame label="Indicateur de défilement" background="dark">
              <div className="style-lab__demo-pad">
                <ScrollIndicator targetId="section-heros" label="Découvrir" />
              </div>
            </DemoFrame>

            <DemoFrame label="Retour en haut — apparaît après 400 px de défilement (bouton en bas à droite)" background="dark">
              <div className="style-lab__demo-pad">
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Le bouton fixe apparaît en bas à droite de la page.
                  Il restitue le focus sur le titre Style Lab.
                </p>
              </div>
            </DemoFrame>

            <DemoFrame label="Variantes de boutons — primaire, secondaire, light, dark, éditorial" background="dark">
              <div className="style-lab__demo-pad style-lab__demo-row">
                <Button variant="primary">Primaire</Button>
                <Button variant="secondary">Secondaire</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="editorial">Éditorial</Button>
              </div>
            </DemoFrame>

            <DemoFrame label="Modale accessible — focus trap, Échap, restauration du focus" background="light">
              <div className="style-lab__demo-pad">
                <button ref={modalTriggerRef} className="btn btn--primary" onClick={openModal}>
                  Ouvrir la modale
                </button>
              </div>
            </DemoFrame>

          </div>
        </section>

        {/* ── HÉROS ───────────────────────────────────────────── */}
        <section className="style-lab__section" id="section-heros">
          <h2 className="style-lab__section-title">Héros</h2>
          <div className="style-lab__section-body">

            <DemoFrame label="Héros éditorial sombre — Esprit 01 (Barlow Condensed, contour, grille)">
              <HeroDarkEditorial
                data={heroDarkEditorialData}
                headingLevel={2}
                isDemo
                accessibleLabel="Démonstration : Héros éditorial sombre Esprit 01"
                scrollTargetId="section-projets"
                showRail
                sectionLabel="Accueil"
              />
            </DemoFrame>

            <DemoFrame label="Héros dégradé — Esprit 02 (Space Grotesk, rail vertical + social, play)">
              <HeroGradient
                data={heroGradientData}
                headingLevel={2}
                isDemo
                accessibleLabel="Démonstration : Héros dégradé Esprit 02"
                scrollTargetId="section-projets"
                showRail
                sectionLabel="Accueil"
                socialEntries={socialEntries}
              />
            </DemoFrame>

            <DemoFrame label="Héros hybride recommandé (Space Grotesk + segment contour Barlow, gradient violet)">
              <HeroHybrid
                data={heroHybridData}
                headingLevel={2}
                isDemo
                accessibleLabel="Démonstration : Héros hybride recommandé"
                scrollTargetId="section-expertises"
                showRail
                sectionLabel="Accueil"
              />
            </DemoFrame>

          </div>
        </section>

        {/* ── PROJETS & CONTENUS ÉDITORIAUX ───────────────────── */}
        <StyleLabProjectsSection />

        {/* ── EXPERTISES, OUTILS & MÉTHODE ────────────────────── */}
        <StyleLabExpertiseProcessSection />

        {/* ── COMPOSANTS D'APPUI ──────────────────────────────── */}
        <section className="style-lab__section" id="section-composants">
          <h2 className="style-lab__section-title">Composants d'appui</h2>
          <div className="style-lab__section-body">
            <StyleLabSlot label="Grille Insights / Blog" />
            <StyleLabSlot label="Témoignage" />
            <StyleLabSlot label="Accordéon FAQ" />
            <StyleLabSlot label="Formulaire de contact" />
            <StyleLabSlot label="Appel à l'action couleur pleine hauteur" />
            <StyleLabSlot label="Pied de page — fond sombre" />
            <StyleLabSlot label="Pied de page — fond clair" />
          </div>
        </section>

      </main>

      <BackToTop topAnchorId="style-lab-title" />

      <FullscreenMenu
        isOpen={fullscreenOpen}
        onClose={closeFullscreen}
        triggerRef={fullscreenTriggerRef}
        navItems={fullscreenNavItems}
        logoText={agencyConfig.logoText}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        triggerRef={mobileTriggerRef}
        navItems={mobileNavItems}
        logoText={agencyConfig.logoText}
        forceDemoMode
      />

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
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
        <span>Composant à construire en Phase 3B+</span>
      </div>
    </div>
  )
}
