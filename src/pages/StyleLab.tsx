import './StyleLab.css'

export default function StyleLab() {
  return (
    <div className="style-lab">
      <header className="style-lab__header">
        <div className="style-lab__header-inner">
          <p className="label style-lab__badge">Usage interne — Phase 1</p>
          <h1 className="style-lab__title">Style Lab</h1>
          <p className="style-lab__subtitle">
            Surface de comparaison et de validation des composants. Les sections ci-dessous seront peuplées en Phase 3.
          </p>
        </div>
      </header>

      <main className="style-lab__main">

        {/* ── GLOBAL ─────────────────────────────────────────── */}
        <section className="style-lab__section">
          <h2 className="style-lab__section-title">Global</h2>
          <div className="style-lab__section-body">
            <StyleLabSlot label="En-tête — Variante A (minimale, recommandée)" />
            <StyleLabSlot label="En-tête — Variante B (navigation horizontale)" />
            <StyleLabSlot label="En-tête transparent sur dégradé" />
            <StyleLabSlot label="Menu plein écran éditorial" />
            <StyleLabSlot label="Menu mobile" />
            <StyleLabSlot label="Rail vertical" />
            <StyleLabSlot label="Rail social" />
            <StyleLabSlot label="Indicateur de défilement" />
            <StyleLabSlot label="Retour en haut" />
            <StyleLabSlot label="Variantes de boutons principaux" />
            <StyleLabSlot label="Variantes de liens textuels" />
          </div>
        </section>

        {/* ── HÉROS ──────────────────────────────────────────── */}
        <section className="style-lab__section">
          <h2 className="style-lab__section-title">Héros</h2>
          <div className="style-lab__section-body">
            <StyleLabSlot label="Héros éditorial sombre — Esprit 01" />
            <StyleLabSlot label="Héros dégradé — Esprit 02" />
            <StyleLabSlot label="Héros hybride recommandé" />
          </div>
        </section>

        {/* ── PROJETS ────────────────────────────────────────── */}
        <section className="style-lab__section">
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
        <section className="style-lab__section">
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
        <section className="style-lab__section">
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
        <section className="style-lab__section">
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
    </div>
  )
}

/* Internal slot placeholder rendered for each unbuilt component */
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
