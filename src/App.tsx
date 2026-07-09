import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RoutePlaceholder from './pages/RoutePlaceholder'
import StyleLab from './pages/StyleLab'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── Level 1 — Main pages ─────────────────────────────────────── */}
        <Route path="/" element={<RoutePlaceholder pageTitle="Accueil" />} />
        <Route path="/methode" element={<RoutePlaceholder pageTitle="Méthode" />} />
        <Route path="/blog" element={<RoutePlaceholder pageTitle="Blog" />} />
        <Route path="/agence" element={<RoutePlaceholder pageTitle="Agence" />} />
        <Route path="/contact" element={<RoutePlaceholder pageTitle="Contact" />} />

        {/* ── Expertises ───────────────────────────────────────────────── */}
        <Route path="/expertises" element={<RoutePlaceholder pageTitle="Expertises" />} />
        <Route path="/expertises/digital" element={<RoutePlaceholder pageTitle="Expertises — Digital" />} />
        <Route path="/expertises/ia" element={<RoutePlaceholder pageTitle="Expertises — Intelligence Artificielle" />} />
        <Route path="/expertises/conseil" element={<RoutePlaceholder pageTitle="Expertises — Conseil" />} />

        {/* Digital expertise pages */}
        <Route path="/expertises/digital/creation-site-internet" element={<RoutePlaceholder pageTitle="Création de site internet" />} />
        <Route path="/expertises/digital/refonte-site-internet" element={<RoutePlaceholder pageTitle="Refonte de site internet" />} />
        <Route path="/expertises/digital/optimisation-conversions" element={<RoutePlaceholder pageTitle="Optimisation des conversions" />} />
        <Route path="/expertises/digital/strategie-digitale" element={<RoutePlaceholder pageTitle="Stratégie digitale" />} />

        {/* IA expertise pages */}
        <Route path="/expertises/ia/ia-pour-les-entreprises" element={<RoutePlaceholder pageTitle="IA pour les entreprises" />} />
        <Route path="/expertises/ia/automatisation-ia" element={<RoutePlaceholder pageTitle="Automatisation IA" />} />
        <Route path="/expertises/ia/formation-ia" element={<RoutePlaceholder pageTitle="Formation IA" />} />

        {/* Conseil expertise pages */}
        <Route path="/expertises/conseil/conseil-positionnement" element={<RoutePlaceholder pageTitle="Conseil & positionnement" />} />
        <Route path="/expertises/conseil/image-de-marque" element={<RoutePlaceholder pageTitle="Image de marque" />} />
        <Route path="/expertises/conseil/innovation" element={<RoutePlaceholder pageTitle="Innovation" />} />
        <Route path="/expertises/conseil/accompagnement-equipes" element={<RoutePlaceholder pageTitle="Accompagnement des équipes" />} />

        {/* ── Réalisations ─────────────────────────────────────────────── */}
        <Route path="/realisations" element={<RoutePlaceholder pageTitle="Réalisations" />} />
        <Route path="/realisations/cas-clients" element={<RoutePlaceholder pageTitle="Cas clients" />} />
        <Route path="/realisations/portfolio" element={<RoutePlaceholder pageTitle="Portfolio" />} />

        {/* Dynamic detail templates */}
        <Route path="/realisations/cas-clients/:slug" element={<RoutePlaceholder pageTitle="Cas client — détail" />} />
        <Route path="/realisations/portfolio/:slug" element={<RoutePlaceholder pageTitle="Portfolio — détail" />} />
        <Route path="/blog/:slug" element={<RoutePlaceholder pageTitle="Article — détail" />} />

        {/* ── Private ──────────────────────────────────────────────────── */}
        <Route path="/style-lab" element={<StyleLab />} />

        {/* ── Wildcard — unknown URLs only ─────────────────────────────── */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}
