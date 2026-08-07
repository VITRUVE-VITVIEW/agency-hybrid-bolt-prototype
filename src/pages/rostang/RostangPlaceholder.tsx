import { Link } from 'react-router-dom'
import './RostangPlaceholder.css'

interface RostangPlaceholderProps {
  pageTitle: string
}

export default function RostangPlaceholder({ pageTitle }: RostangPlaceholderProps) {
  return (
    <div className="rostang-site">
      <div className="rostang-placeholder">
        <div className="rostang-placeholder__inner">
          <p className="rostang-placeholder__label">En préparation</p>
          <h1 className="rostang-placeholder__title">{pageTitle}</h1>
          <p className="rostang-placeholder__message">
            Cette page sera disponible dans une prochaine phase du prototype ROSTANG.
          </p>
          <Link to="/" className="rostang-btn rostang-btn--secondary">
            &larr; Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
