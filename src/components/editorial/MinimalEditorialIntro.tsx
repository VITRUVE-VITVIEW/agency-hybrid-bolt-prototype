import { Link } from 'react-router-dom'
import type { MinimalEditorialIntroData } from '../../data/editorialSections'
import './MinimalEditorialIntro.css'

interface MinimalEditorialIntroProps {
  data: MinimalEditorialIntroData
  showRail?: boolean
}

export default function MinimalEditorialIntro({ data }: MinimalEditorialIntroProps) {
  return (
    <section className="minimal-intro" aria-label={data.eyebrow}>
      <div className="minimal-intro__inner container--reading">
        <p className="minimal-intro__eyebrow label">{data.eyebrow}</p>
        <p className="minimal-intro__statement">{data.boldStatement}</p>
        <p className="minimal-intro__body">{data.body}</p>
        <Link to={data.linkPath} className="minimal-intro__link">
          {data.linkLabel}
          <span aria-hidden="true" className="minimal-intro__arrow"> →</span>
        </Link>
      </div>
    </section>
  )
}
