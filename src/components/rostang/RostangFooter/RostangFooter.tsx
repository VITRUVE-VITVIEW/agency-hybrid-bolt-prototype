import { Link } from 'react-router-dom'
import { rostangPrimaryCta } from '../../../data/rostangNavigation'
import './RostangFooter.css'

export default function RostangFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="rostang-footer" role="contentinfo">
      <div className="rostang-footer__inner">
        {/* CTA strip */}
        <div className="rostang-footer__cta-strip">
          <div>
            <p className="rostang-footer__cta-label">Besoin de clarifier votre situation ?</p>
            <p className="rostang-footer__cta-text">
              Commencez par le Diagnostic digital à 500 &euro; HT.
            </p>
          </div>
          <Link to={rostangPrimaryCta.path} className="rostang-btn rostang-btn--primary">
            {rostangPrimaryCta.label}
          </Link>
        </div>

        {/* Link groups */}
        <div className="rostang-footer__groups">
          <nav className="rostang-footer__group" aria-label="Pilotage">
            <h2 className="rostang-footer__group-title">Pilotage</h2>
            <ul>
              <li><Link to="/pilotage-digital-externalise/">Pilotage digital</Link></li>
              <li><Link to="/diagnostic-digital/">Diagnostic digital</Link></li>
            </ul>
          </nav>

          <nav className="rostang-footer__group" aria-label="Projets">
            <h2 className="rostang-footer__group-title">Projets</h2>
            <ul>
              <li><Link to="/projets-digitaux/">Projets digitaux</Link></li>
              <li><Link to="/sites-internet/">Sites internet</Link></li>
              <li><Link to="/seo-google-ads/">SEO et Google Ads</Link></li>
              <li><Link to="/ia-automatisation/">IA et automatisation</Link></li>
              <li><Link to="/formation/">Formation</Link></li>
            </ul>
          </nav>

          <nav className="rostang-footer__group" aria-label="ROSTANG">
            <h2 className="rostang-footer__group-title">ROSTANG</h2>
            <ul>
              <li><Link to="/cas-clients/">Cas clients</Link></li>
              <li><Link to="/ressources/">Ressources</Link></li>
              <li><Link to="/a-propos/">&Agrave; propos</Link></li>
              <li><Link to="/contact/">Contact</Link></li>
            </ul>
          </nav>

          <nav className="rostang-footer__group" aria-label="Mentions légales">
            <h2 className="rostang-footer__group-title">Legal</h2>
            <ul>
              <li><Link to="/mentions-legales/">Mentions légales</Link></li>
              <li><Link to="/confidentialite/">Confidentialité et cookies</Link></li>
              <li>
                <button type="button" className="rostang-footer__cookie-pref">
                  Cookie preferences
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="rostang-footer__bottom">
          <p className="rostang-footer__brand">ROSTANG</p>
          <p className="rostang-footer__copyright">
            &copy; {year} ROSTANG. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
