import './CarouselPagination.css'

interface CarouselPaginationProps {
  total: number
  activeIndex: number
  onChange: (index: number) => void
}

export default function CarouselPagination({
  total,
  activeIndex,
  onChange,
}: CarouselPaginationProps) {
  if (total <= 1) return null

  return (
    <div className="carousel-pagination" role="group" aria-label="Pagination du carrousel">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className={`carousel-pagination__dot${i === activeIndex ? ' carousel-pagination__dot--active' : ''}`}
          onClick={() => onChange(i)}
          aria-label={`Aller à la slide ${i + 1}`}
          aria-pressed={i === activeIndex}
        />
      ))}
    </div>
  )
}
