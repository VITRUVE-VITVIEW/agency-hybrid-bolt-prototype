import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import type { CaseStudy } from '../../types'
import type { ProjectMedia } from '../../types'
import CaseStudySlide from './CaseStudySlide'
import CarouselControls from './CarouselControls'
import CarouselPagination from './CarouselPagination'
import './CaseStudyCarousel.css'

interface CaseStudyCarouselProps {
  slides: Array<{ data: CaseStudy; media: ProjectMedia; ctaPath: string }>
  headingLevel?: 2 | 3
  archivePath?: string
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function CaseStudyCarousel({
  slides,
  headingLevel: _headingLevel = 2,
  archivePath = '/realisations/cas-clients',
}: CaseStudyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLElement | null)[]>([])
  const rafRef = useRef<number | null>(null)

  /* Calculate the real scrollLeft target for a given slide */
  const getSlideTarget = useCallback((index: number): number => {
    const container = containerRef.current
    const slide = slideRefs.current[index]
    if (!container || !slide) return 0
    return (
      slide.getBoundingClientRect().left -
      container.getBoundingClientRect().left +
      container.scrollLeft
    )
  }, [])

  /* Scroll programmatically to a slide */
  const scrollToSlide = useCallback((index: number) => {
    const container = containerRef.current
    if (!container) return
    const target = getSlideTarget(index)
    container.scrollTo({ left: target, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }, [getSlideTarget])

  /* Navigate to index — updates state and scrolls */
  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, slides.length - 1))
    setActiveIndex(clamped)
    scrollToSlide(clamped)
  }, [slides.length, scrollToSlide])

  /* Sync activeIndex from native scroll / touch / trackpad */
  const handleScroll = useCallback(() => {
    const container = containerRef.current
    if (!container || slides.length <= 1) return

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const currentScroll = container.scrollLeft
      let nearestIndex = 0
      let nearestDist = Infinity

      for (let i = 0; i < slides.length; i++) {
        const slide = slideRefs.current[i]
        if (!slide) continue
        const target =
          slide.getBoundingClientRect().left -
          container.getBoundingClientRect().left +
          container.scrollLeft
        const dist = Math.abs(currentScroll - target)
        if (dist < nearestDist) {
          nearestDist = dist
          nearestIndex = i
        }
      }

      setActiveIndex(prev => (prev !== nearestIndex ? nearestIndex : prev))
    })
  }, [slides.length])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('scroll', handleScroll, { passive: true })

    /* Resize: re-align to active slide */
    const ro = new ResizeObserver(() => {
      const target = getSlideTarget(activeIndex)
      container.scrollTo({ left: target, behavior: 'auto' })
    })
    ro.observe(container)

    return () => {
      container.removeEventListener('scroll', handleScroll)
      ro.disconnect()
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [handleScroll, getSlideTarget, activeIndex])

  if (slides.length === 0) return null

  return (
    <section className="cs-carousel" aria-label="Cas clients">
      <div className="cs-carousel__header container--wide">
        <div className="cs-carousel__header-text">
          <p className="cs-carousel__eyebrow label">Réalisations</p>
          <p className="cs-carousel__headline display-editorial">
            Nos projets
          </p>
        </div>
        <div className="cs-carousel__header-actions">
          <CarouselControls
            onPrev={() => goTo(activeIndex - 1)}
            onNext={() => goTo(activeIndex + 1)}
            isPrevDisabled={activeIndex === 0}
            isNextDisabled={activeIndex === slides.length - 1}
          />
          <Link to={archivePath} className="btn btn--light">
            Tous les cas clients
          </Link>
        </div>
      </div>

      <div
        ref={containerRef}
        className="cs-carousel__track"
        role="region"
        aria-label="Slides de cas clients"
        tabIndex={0}
      >
        {slides.map((slide, i) => (
          <CaseStudySlide
            key={slide.data.slug}
            ref={(el) => { slideRefs.current[i] = el }}
            data={slide.data}
            media={slide.media}
            index={i}
            ctaPath={slide.ctaPath}
            isActive={i === activeIndex}
          />
        ))}
      </div>

      <div className="cs-carousel__footer container--wide">
        <CarouselPagination
          total={slides.length}
          activeIndex={activeIndex}
          onChange={goTo}
        />
        <p className="cs-carousel__counter label" aria-live="polite" aria-atomic="true">
          {activeIndex + 1} / {slides.length}
        </p>
      </div>
    </section>
  )
}
