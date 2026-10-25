import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

// images: [{ src, alt, caption }], index: number | null
export default function Lightbox({ images, index, onClose, onChange }) {
  const closeRef = useRef(null)
  const open = index !== null && index !== undefined

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      previouslyFocused?.focus?.()
    }
  }, [open, index, images.length, onClose, onChange])

  if (!open) return null
  const img = images[index]
  const many = images.length > 1

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={onClose}>
      <button ref={closeRef} type="button" className="lightbox-btn lightbox-close" onClick={onClose} aria-label="Close image viewer">
        <X size={22} />
      </button>
      {many && (
        <button
          type="button"
          className="lightbox-btn lightbox-prev"
          onClick={(e) => {
            e.stopPropagation()
            onChange((index - 1 + images.length) % images.length)
          }}
          aria-label="Previous image"
        >
          <ChevronLeft size={26} />
        </button>
      )}
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} />
        {img.caption && (
          <figcaption>
            {img.caption}
            {many && <span className="muted"> ({index + 1} / {images.length})</span>}
          </figcaption>
        )}
      </figure>
      {many && (
        <button
          type="button"
          className="lightbox-btn lightbox-next"
          onClick={(e) => {
            e.stopPropagation()
            onChange((index + 1) % images.length)
          }}
          aria-label="Next image"
        >
          <ChevronRight size={26} />
        </button>
      )}
    </div>
  )
}
