import DemoFrame from '../../components/DemoFrame/DemoFrame'
import ExpertiseCategoryGrid from '../../components/expertise/ExpertiseCategoryGrid'
import ExpertiseSplitSection from '../../components/expertise/ExpertiseSplitSection'
import DarkExpertiseSection from '../../components/expertise/DarkExpertiseSection'
import ExpertiseDetailHero from '../../components/expertise/ExpertiseDetailHero'
import NumberedServiceIntro from '../../components/expertise/NumberedServiceIntro'
import ToolkitGrid from '../../components/toolkit/ToolkitGrid'
import ProcessIntro from '../../components/process/ProcessIntro'
import ProcessTimeline from '../../components/process/ProcessTimeline'
import StrategyFeatureSection from '../../components/process/StrategyFeatureSection'
import expertiseCategories from '../../data/expertiseCategories'
import expertisePages from '../../data/expertisePages'
import toolkit from '../../data/toolkit'
import processSteps from '../../data/process'
import type { ProjectMedia } from '../../types'

/* ── Reusable media configs ────────────── */

const mediaDigital: ProjectMedia = {
  variant: 'device-frame',
  ratio: '4/3',
  label: 'Aperçu interface digitale — maquette de site internet',
  accent: 'digital',
}

const mediaIA: ProjectMedia = {
  variant: 'gradient-ia',
  ratio: '4/3',
  label: 'Tableau de bord intelligence artificielle',
  accent: 'ia',
}

const mediaConseil: ProjectMedia = {
  variant: 'gradient-conseil',
  ratio: '4/3',
  label: 'Livrable conseil stratégique — aperçu document',
  accent: 'conseil',
}

const mediaDarkService: ProjectMedia = {
  variant: 'abstract-grid',
  ratio: '3/4',
  label: 'Grille de données — représentation abstraite',
  accent: 'digital',
}

const mediaProcess: ProjectMedia = {
  variant: 'gradient-neutral',
  ratio: '4/3',
  label: 'Visualisation de la méthode de l\'agence',
  accent: 'ia',
}

/* ── Resolved priority pages for hero demos ─ */
const refontePageData  = expertisePages.find(p => p.slug === 'refonte-site-internet')!
const iaEntreprisePage = expertisePages.find(p => p.slug === 'ia-pour-les-entreprises')!
const formationIaPage  = expertisePages.find(p => p.slug === 'formation-ia')!

export default function StyleLabExpertiseProcessSection() {
  return (
    <section
      className="style-lab__section style-lab__section--full-bleed"
      id="section-expertises"
    >
      <h2 className="style-lab__section-title">
        Expertises, Outils &amp; Méthode
      </h2>

      <div className="style-lab__section-body">

        {/* ── CATEGORY CARDS ─────────────────── */}
        <h3 className="style-lab__subsection-title">Cartes de catégorie</h3>

        <DemoFrame
          label="ExpertiseCategoryGrid — light — Esprit 02 — Cartes piliers claires avec preuve, fond blanc — Difficulté Elementor : Faible"
          background="light"
        >
          <p className="style-lab__demo-hint-light text-sm">
            Variant A : Surface blanche, typographie Space Grotesk, barre d'accent colorée,
            preuve métrique, CTA secondaire vers le hub de catégorie.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <ExpertiseCategoryGrid
            categories={expertiseCategories}
            variant="light"
            headingLevel={4}
          />
        </DemoFrame>

        <DemoFrame
          label="ExpertiseCategoryGrid — dark — Esprit 01 — Cartes éditoriales sombres avec index numéroté en contour — Difficulté Elementor : Moyenne"
          background="dark"
        >
          <p className="style-lab__demo-hint text-sm">
            Variant B : Surface charbon, Barlow Condensed uppercase, index en outline via .text-outline,
            accent coloré pilier. Esprit 01 éditorial sombre.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <ExpertiseCategoryGrid
            categories={expertiseCategories}
            variant="dark"
            headingLevel={4}
            showIndex
          />
        </DemoFrame>

        <DemoFrame
          label="ExpertiseCategoryGrid — hybrid — Recommandé production — Bordure gauche colorée, mix Barlow + Space Grotesk — Difficulté Elementor : Moyenne"
          background="light"
        >
          <p className="style-lab__demo-hint-light text-sm">
            Variant C (recommandé) : Bordure gauche accent 4px, titre condensé Barlow + description Space Grotesk.
            Hybridation contrôlée des deux esprits. CTA vers chaque hub.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <ExpertiseCategoryGrid
            categories={expertiseCategories}
            variant="hybrid"
            headingLevel={4}
          />
        </DemoFrame>

        {/* ── SPLIT SECTIONS ─────────────────── */}
        <h3 className="style-lab__subsection-title">Sections split colorées</h3>

        <DemoFrame
          label="ExpertiseSplitSection — Digital — Esprit 02 — Panneau bleu électrique à droite, contenu blanc à gauche — Difficulté Elementor : Moyenne"
          background="light"
        >
          <p className="style-lab__demo-hint-light text-sm">
            Section bi-colonnes : colonne contenu blanc + panneau coloré pilier Digital.
            Overlap contrôlé du média sur le panneau. Mobile : colonne unique, contenu en premier.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <ExpertiseSplitSection
            number={1}
            eyebrow="Digital"
            title="Refontes qui convertissent"
            description="Un site refondé avec méthode génère en moyenne +58 % de conversions dès les trois premiers mois. Nous concevons des expériences digitales où chaque décision de design est ancrée dans un objectif mesurable."
            secondaryParagraph="De l'audit initial au lancement, nous pilotons le projet en transparence avec vos équipes."
            cta={{ label: 'Voir nos expertises digitales', path: '/expertises/digital' }}
            theme="digital"
            media={mediaDigital}
            mediaAlign="right"
            headingLevel={4}
          />
        </DemoFrame>

        <DemoFrame
          label="ExpertiseSplitSection — IA — Esprit 02 — Panneau violet/magenta à gauche, contenu blanc à droite — Difficulté Elementor : Moyenne"
          background="light"
        >
          <p className="style-lab__demo-hint-light text-sm">
            Même composant, thème IA. Panneau à gauche (mediaAlign=left).
            Résolution via resolveAccent('ia') → --color-ia-violet.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <ExpertiseSplitSection
            number={2}
            eyebrow="Intelligence Artificielle"
            title="L'IA au service de vos processus"
            description="Automatisation, agents IA et formation — nous déployons l'intelligence artificielle là où elle crée une valeur opérationnelle concrète et mesurable pour vos équipes."
            cta={{ label: 'Voir nos expertises IA', path: '/expertises/ia' }}
            theme="ia"
            media={mediaIA}
            mediaAlign="left"
            headingLevel={4}
          />
        </DemoFrame>

        <DemoFrame
          label="ExpertiseSplitSection — Conseil — Esprit 02 — Panneau corail à droite, contenu blanc à gauche — Difficulté Elementor : Moyenne"
          background="light"
        >
          <p className="style-lab__demo-hint-light text-sm">
            Même composant, thème Conseil. Résolution via resolveAccent('conseil') → --color-conseil-coral.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <ExpertiseSplitSection
            number={3}
            eyebrow="Conseil"
            title="Stratégie, marque et équipes"
            description="Positionnement clair, image de marque forte, équipes alignées. Nous accompagnons les organisations qui veulent construire une différenciation durable et cohérente."
            cta={{ label: 'Voir nos expertises conseil', path: '/expertises/conseil' }}
            theme="conseil"
            media={mediaConseil}
            mediaAlign="right"
            headingLevel={4}
          />
        </DemoFrame>

        {/* ── DARK EDITORIAL SERVICE ─────────── */}
        <h3 className="style-lab__subsection-title">Section service éditorial sombre</h3>

        <DemoFrame
          label="DarkExpertiseSection — Esprit 01 — Communication de service sombre, titre condensé avec un mot en outline — Difficulté Elementor : Élevée"
          background="dark"
        >
          <p className="style-lab__demo-hint text-sm">
            Distinct de ProjectEditorialSplit : ce composant communique une offre de service,
            pas un projet livré. Barlow Condensed uppercase, grille verticale décorative,
            proof métrique, CTA btn--light. Accent résolu via resolveAccent().
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <DarkExpertiseSection
            number={1}
            categoryLabel="Intelligence Artificielle"
            title="Automatisation IA"
            titleWords={['Automatisation', 'IA']}
            outlineWordIndex={1}
            body="Vos équipes passent trop de temps sur des tâches répétitives à faible valeur. Nous cartographions vos flux, identifions les leviers d'automatisation et déployons des workflows IA supervisés — en quelques semaines, pas en quelques mois."
            proof={{ value: '−40 %', label: 'de temps opérationnel sur les processus automatisés' }}
            cta={{ label: 'Découvrir l\'automatisation IA', path: '/expertises/ia/automatisation-ia' }}
            theme="ia"
            media={mediaDarkService}
            mediaAlign="right"
            gridLines
            headingLevel={4}
          />
        </DemoFrame>

        {/* ── EXPERTISE DETAIL HERO ──────────── */}
        <h3 className="style-lab__subsection-title">Héros de page d'expertise</h3>

        <DemoFrame
          label="ExpertiseDetailHero — light — Esprit 02 — Fond blanc, Space Grotesk, accent pilier, CTA primaire — Difficulté Elementor : Faible"
          background="light"
        >
          <p className="style-lab__demo-hint-light text-sm">
            Héros clair pour pages d'expertise standards. headingLevel=4 en démo (H1 sur la vraie page).
            Contenu depuis expertisePages.ts — aucun texte codé en dur.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <ExpertiseDetailHero
            page={refontePageData}
            variant="light"
            headingLevel={4}
            isDemo
          />
        </DemoFrame>

        <DemoFrame
          label="ExpertiseDetailHero — dark — Esprit 01 — Fond sombre, Barlow Condensed, titre avec mot en outline — Difficulté Elementor : Élevée"
          background="dark"
        >
          <p className="style-lab__demo-hint text-sm">
            Héros sombre éditorial. Deuxième ligne du titre reçoit .text-outline.
            Accent pilier coloré sur le mot en contour.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <ExpertiseDetailHero
            page={iaEntreprisePage}
            variant="dark"
            headingLevel={4}
            isDemo
          />
        </DemoFrame>

        <DemoFrame
          label="ExpertiseDetailHero — priority — Hybride — Fond sombre, badge de preuve quantifiée, accent fort — Difficulté Elementor : Élevée"
          background="dark"
        >
          <p className="style-lab__demo-hint text-sm">
            Héros prioritaire — réservé aux 5 pages confirmées. Badge proof visible uniquement
            si page.priority=true ET page.proof existe dans les données.
            CTA secondaire optionnel vers la méthode.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <ExpertiseDetailHero
            page={formationIaPage}
            variant="priority"
            headingLevel={4}
            isDemo
            secondaryCtaLabel="Notre méthode de formation"
            secondaryCtaPath="/methode"
          />
        </DemoFrame>

        {/* ── NUMBERED SERVICE INTRO ─────────── */}
        <h3 className="style-lab__subsection-title">Introduction numérotée</h3>

        <DemoFrame
          label="NumberedServiceIntro — light — Esprit 02 — Fond blanc, numéro décoratif, titre Space Grotesk — Difficulté Elementor : Faible"
          background="light"
        >
          <p className="style-lab__demo-hint-light text-sm">
            Introduction de section avec numéro surdimensionné décoratif.
            Variant clair : fond blanc, texte marine, CTA secondaire.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <NumberedServiceIntro
            number={1}
            eyebrow="Notre approche"
            title="Une méthode qui s'adapte à votre contexte"
            body="Chaque projet est unique. Nos processus sont structurés, nos livrables clairs et nos sprints courts — pour que vous voyez des résultats rapidement et gardez la maîtrise à chaque étape."
            ctaLabel="Découvrir la méthode"
            ctaPath="/methode"
            variant="light"
            headingLevel={4}
          />
        </DemoFrame>

        <DemoFrame
          label="NumberedServiceIntro — dark — Esprit 01 — Fond sombre, numéro décoratif discret, CTA btn--light — Difficulté Elementor : Faible"
          background="dark"
        >
          <p className="style-lab__demo-hint text-sm">
            Même composant, variant sombre. Fond --color-bg-dark, numéro en bordure sombre.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <NumberedServiceIntro
            number={2}
            eyebrow="Expertise digitale"
            title="Des sites conçus pour convertir"
            body="Nous ne faisons pas de sites vitrines. Chaque projet digital commence par une question : qu'est-ce que ce site doit accomplir pour votre entreprise dans les six prochains mois ?"
            ctaLabel="Voir nos expertises digitales"
            ctaPath="/expertises/digital"
            variant="dark"
            headingLevel={4}
          />
        </DemoFrame>

        {/* ── TOOLKIT GRID ───────────────────── */}
        <h3 className="style-lab__subsection-title">Grille d'outils</h3>

        <DemoFrame
          label="ToolkitGrid — Esprit 02 — 8 groupes, icônes CSS initiales, 4 colonnes desktop, 1 mobile — Difficulté Elementor : Faible"
          background="light"
        >
          <p className="style-lab__demo-hint-light text-sm">
            21 outils répartis en 8 catégories. Icônes en initiales CSS — aucune ressource externe.
            Statuts Actif / Bêta / Partenaire. Liens vers routes enregistrées uniquement.
            4 colonnes → 3 → 2 → 1 selon breakpoints.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <ToolkitGrid items={toolkit} />
        </DemoFrame>

        {/* ── PROCESS ────────────────────────── */}
        <h3 className="style-lab__subsection-title">Méthode &amp; processus</h3>

        <DemoFrame
          label="ProcessIntro — light — Esprit 02 — Introduction méthodologie fond blanc — Difficulté Elementor : Faible"
          background="light"
        >
          <p className="style-lab__demo-hint-light text-sm">
            Introduction de la section méthode. Fond blanc, texte marine, CTA secondaire.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <ProcessIntro
            eyebrow="Notre méthode"
            title="Six étapes pour des projets qui aboutissent"
            body="Nous ne croyons pas aux grands plans bouleversés par la réalité. Notre méthode est conçue pour rester agile à chaque étape — en gardant la clarté sur les objectifs et la confiance dans l'exécution."
            ctaLabel="En savoir plus sur notre approche"
            ctaPath="/methode"
            variant="light"
            headingLevel={4}
          />
        </DemoFrame>

        <DemoFrame
          label="ProcessIntro — dark — Esprit 01 — Introduction méthodologie fond sombre — Difficulté Elementor : Faible"
          background="dark"
        >
          <p className="style-lab__demo-hint text-sm">
            Même composant, variant sombre.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <ProcessIntro
            eyebrow="Notre méthode"
            title="Une rigueur au service de la créativité"
            body="Cadrage, diagnostic, conception, production, mesure — chaque étape a un rôle précis. Nous livrons des résultats parce que nous travaillons avec méthode, pas malgré elle."
            ctaLabel="Découvrir la méthode complète"
            ctaPath="/methode"
            variant="dark"
            headingLevel={4}
          />
        </DemoFrame>

        <DemoFrame
          label="ProcessTimeline — Esprit 02 — Frise 6 étapes, horizontal desktop (6 colonnes), vertical mobile (<ol> sémantique) — Difficulté Elementor : Moyenne"
          background="light"
        >
          <p className="style-lab__demo-hint-light text-sm">
            Structure &lt;ol&gt; + &lt;li&gt; sémantique. Chaque étape a un numéro, titre, description,
            durée et liste de livrables. Accent par step.theme via resolveAccent().
            Horizontal à 1280px+, 3 colonnes à 1024px, vertical à 768px.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <ProcessTimeline steps={processSteps} />
        </DemoFrame>

        {/* ── STRATEGY FEATURE ───────────────── */}
        <h3 className="style-lab__subsection-title">Section stratégie</h3>

        <DemoFrame
          label="StrategyFeatureSection — Esprit 02 — Champ saturé sombre, titre Barlow outline + solide, liste de points, média — Difficulté Elementor : Moyenne"
          background="dark"
        >
          <p className="style-lab__demo-hint text-sm">
            Section de clôture thématique avec fond sombre ou dégradé, titre condensé
            avec mot outline, liste de points forts, CTA btn--light et MediaPlaceholder décoratif.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <StrategyFeatureSection
            eyebrow="Pourquoi nous choisir"
            title="Stratégie exécutée"
            titleWords={['Stratégie', 'exécutée']}
            body="Nous combinons rigueur stratégique et exécution opérationnelle dans un seul engagement. Pas de recommandations sans implémentation. Pas de livrables sans suivi de résultats."
            bullets={[
              'Experts Digital, IA et Conseil sous le même toit',
              'Méthode éprouvée sur +80 projets',
              'Résultats mesurables dès la première livraison',
              'Accompagnement de bout en bout',
            ]}
            cta={{ label: 'Parlons de votre projet', path: '/contact' }}
            theme="ia"
            useGradient={false}
            media={mediaProcess}
            headingLevel={4}
          />
        </DemoFrame>

        <DemoFrame
          label="StrategyFeatureSection — gradient IA — Même composant avec useGradient=true — Difficulté Elementor : Moyenne"
          background="dark"
        >
          <p className="style-lab__demo-hint text-sm">
            Même composant avec useGradient=true — applique --gradient-ia (magenta → violet).
            Évaluer visite quelle surface convient le mieux au contexte de chaque page.
            Implémenté techniquement — validation visuelle humaine en attente.
          </p>
          <StrategyFeatureSection
            eyebrow="Intelligence Artificielle"
            title="L'IA concrète"
            titleWords={['L\'IA', 'concrète']}
            body="Des agents autonomes, des workflows automatisés et des formations qui changent réellement la façon de travailler de vos équipes — pas des démonstrations de laboratoire."
            bullets={[
              'Pilotes opérationnels en 4 semaines',
              'Formation incluse dans chaque déploiement',
              'Supervision et optimisation continues',
            ]}
            cta={{ label: 'Explorer nos expertises IA', path: '/expertises/ia' }}
            theme="ia"
            useGradient
            headingLevel={4}
          />
        </DemoFrame>

      </div>
    </section>
  )
}
