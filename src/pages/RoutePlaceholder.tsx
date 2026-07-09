import { Link } from 'react-router-dom'
import './RoutePlaceholder.css'

interface RoutePlaceholderProps {
  pageTitle: string
  showStyleLabLink?: boolean
}

export default function RoutePlaceholder({ pageTitle, showStyleLabLink = true }: RoutePlaceholderProps) {
  return (
    <div className="route-placeholder">
      <div className="route-placeholder__inner">
        <p className="route-placeholder__label label">En préparation</p>
        <h1 className="route-placeholder__title">{pageTitle}</h1>
        <p className="route-placeholder__message">
          Cette page est en cours de développement. Elle sera disponible dans une prochaine phase du projet.
        </p>
        <div className="route-placeholder__links">
          <Link to="/" className="route-placeholder__link">
            ← Retour à l'accueil
          </Link>
          {showStyleLabLink && (
            <Link to="/style-lab" className="route-placeholder__link route-placeholder__link--secondary">
              Ouvrir le Style Lab
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
