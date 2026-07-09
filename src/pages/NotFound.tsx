import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__inner">
        <p className="not-found__code label">404</p>
        <h1 className="not-found__title">Page introuvable</h1>
        <p className="not-found__message">
          L'adresse que vous avez saisie ne correspond à aucune page de ce site.
        </p>
        <Link to="/" className="not-found__link">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
