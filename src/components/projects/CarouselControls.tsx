import './CarouselControls.css'

interface CarouselControlsProps {
  onPrev: () => void
  onNext: () => void
  isPrevDisabled: boolean
  isNextDisabled: boolean
}

export default function CarouselControls({
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
}: CarouselControlsProps) {
  return (
    <div className="carousel-controls" role="group" aria-label="Navigation du carrousel">
      <button
        className="carousel-controls__btn"
        onClick={onPrev}
        disabled={isPrevDisabled}
        aria-label="Slide précédente"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        className="carousel-controls__btn"
        onClick={onNext}
        disabled={isNextDisabled}
        aria-label="Slide suivante"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
