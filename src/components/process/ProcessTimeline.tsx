import type { ProcessStep as ProcessStepType } from '../../types'
import ProcessStep from './ProcessStep'
import './ProcessTimeline.css'

interface ProcessTimelineProps {
  steps: ProcessStepType[]
  /** Accessible label for the list */
  ariaLabel?: string
}

export default function ProcessTimeline({
  steps,
  ariaLabel = 'Étapes de notre méthode',
}: ProcessTimelineProps) {
  return (
    <section className="process-timeline">
      <div className="process-timeline__inner container--wide">
        <ol className="process-timeline__list" aria-label={ariaLabel}>
          {steps.map(step => (
            <ProcessStep key={step.number} step={step} asList />
          ))}
        </ol>
      </div>
    </section>
  )
}
