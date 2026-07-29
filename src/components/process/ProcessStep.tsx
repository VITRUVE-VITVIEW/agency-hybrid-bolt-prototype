import type { ProcessStep as ProcessStepType } from '../../types'
import { resolveAccent } from '../../utils/accentTheme'
import './ProcessStep.css'

interface ProcessStepProps {
  step: ProcessStepType
  /** When true, renders as <li> for use inside ProcessTimeline's <ol> */
  asList?: boolean
}

export default function ProcessStep({ step, asList = false }: ProcessStepProps) {
  const accentColor = step.theme ? resolveAccent(step.theme) : 'var(--color-text-muted)'

  const accentStyle = {
    '--step-accent': accentColor,
  } as React.CSSProperties

  const content = (
    <div className="process-step" style={accentStyle}>
      <div className="process-step__number display-editorial" aria-hidden="true">
        {String(step.number).padStart(2, '0')}
      </div>

      <h3 className="process-step__title">{step.title}</h3>

      <p className="process-step__description">{step.description}</p>

      {step.durationLabel && (
        <span className="process-step__duration label">{step.durationLabel}</span>
      )}

      {step.deliverables && step.deliverables.length > 0 && (
        <ul className="process-step__deliverables">
          {step.deliverables.map((d, i) => (
            <li key={i} className="process-step__deliverable label">{d}</li>
          ))}
        </ul>
      )}
    </div>
  )

  if (asList) {
    return <li className="process-timeline__item">{content}</li>
  }

  return content
}
