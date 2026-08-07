import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RostangHomepage from './pages/rostang/RostangHomepage'
import RostangPlaceholder from './pages/rostang/RostangPlaceholder'
import StyleLab from './pages/StyleLab'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── Implemented ─────────────────────────────────────────── */}
        <Route path="/" element={<RostangHomepage />} />

        {/* ── Public placeholders ─────────────────────────────────── */}
        <Route path="/pilotage-digital-externalise/" element={<RostangPlaceholder pageTitle="Pilotage digital externalisé" />} />
        <Route path="/diagnostic-digital/" element={<RostangPlaceholder pageTitle="Diagnostic digital" />} />
        <Route path="/projets-digitaux/" element={<RostangPlaceholder pageTitle="Projets digitaux" />} />
        <Route path="/sites-internet/" element={<RostangPlaceholder pageTitle="Sites internet" />} />
        <Route path="/seo-google-ads/" element={<RostangPlaceholder pageTitle="SEO et Google Ads" />} />
        <Route path="/ia-automatisation/" element={<RostangPlaceholder pageTitle="IA et automatisation" />} />
        <Route path="/formation/" element={<RostangPlaceholder pageTitle="Formation" />} />
        <Route path="/cas-clients/" element={<RostangPlaceholder pageTitle="Cas clients" />} />
        <Route path="/cas-clients/sanibio/" element={<RostangPlaceholder pageTitle="Cas client — Sanibio" />} />
        <Route path="/cas-clients/villa-mont-liban/" element={<RostangPlaceholder pageTitle="Cas client — Villa Mont-Liban" />} />
        <Route path="/ressources/" element={<RostangPlaceholder pageTitle="Ressources" />} />
        <Route path="/a-propos/" element={<RostangPlaceholder pageTitle="À propos" />} />
        <Route path="/contact/" element={<RostangPlaceholder pageTitle="Contact" />} />
        <Route path="/merci/" element={<RostangPlaceholder pageTitle="Merci" />} />
        <Route path="/mentions-legales/" element={<RostangPlaceholder pageTitle="Mentions légales" />} />
        <Route path="/confidentialite/" element={<RostangPlaceholder pageTitle="Confidentialité et cookies" />} />

        {/* ── Secondary (not in main navigation) ──────────────────── */}
        <Route path="/consultant-digital-martigues/" element={<RostangPlaceholder pageTitle="Consultant digital — Martigues" />} />

        {/* ── Private ──────────────────────────────────────────────── */}
        <Route path="/style-lab" element={<StyleLab />} />

        {/* ── Wildcard — unknown URLs only ────────────────────────── */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}
