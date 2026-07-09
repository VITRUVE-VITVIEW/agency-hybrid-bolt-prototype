import type { DarkEditorialIntroData } from '../../data/editorialSections'
import MediaPlaceholder from '../media/MediaPlaceholder'
import './DarkEditorialIntro.css'

interface DarkEditorialIntroProps {
  data: DarkEditorialIntroData
  headingLevel?: 2 | 3
}

export default function DarkEditorialIntro({
  data,
  headingLevel = 3,
}: DarkEditorialIntroProps) {
  const Tag = `h${headingLevel}` as 'h2' | 'h3'

  return (
    <section className="dark-intro">
      <div className="dark-intro__inner container--wide">
        <div className="dark-intro__content">
          <p className="dark-intro__eyebrow label">{data.eyebrow}</p>
          <Tag className="dark-intro__title">{data.title}</Tag>
          <p className="dark-intro__body">{data.body}</p>
        </div>

        {data.media && (
          <div className="dark-intro__media">
            <MediaPlaceholder media={data.media} />
          </div>
        )}
      </div>
    </section>
  )
}
