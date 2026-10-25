import { useRef, useState } from 'react'
import { Award, ExternalLink, ImagePlus, ZoomIn } from 'lucide-react'
import Section from './Section'
import Lightbox from './Lightbox'
import { certifications } from '../data/content'

// The upload button only exists in the local dev server (npm run dev). It previews an image in this
// browser only. Public visitors cannot upload anything; deployed images come from content.js.
const IS_DEV = import.meta.env.DEV
const storageKey = (title) => `cert-preview:${title}`

function readPreview(title) {
  if (!IS_DEV) return ''
  try {
    return localStorage.getItem(storageKey(title)) || ''
  } catch {
    return ''
  }
}

function CertCard({ cert, onView }) {
  const inputRef = useRef(null)
  const [preview, setPreview] = useState(() => readPreview(cert.title))
  const [error, setError] = useState('')
  const src = cert.image || preview

  const onFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setError('')
    if (!file.type.startsWith('image/')) return setError('Please choose an image file.')
    if (file.size > 1.5 * 1024 * 1024) return setError('Image is over 1.5 MB. Use a smaller file for the preview.')
    const reader = new FileReader()
    reader.onload = () => {
      try {
        localStorage.setItem(storageKey(cert.title), String(reader.result))
      } catch {
        setError('Could not store the preview in this browser.')
      }
      setPreview(String(reader.result))
    }
    reader.readAsDataURL(file)
  }

  return (
    <article className="card cert-card">
      <Award size={22} className="cert-icon" aria-hidden="true" />
      <h3>{cert.title}</h3>
      <p className="muted">{cert.issuer}</p>
      <p className="small">{[cert.detail, cert.date].filter(Boolean).join(' · ')}</p>

      {src && (
        <button type="button" className="cert-thumb" onClick={() => onView(src)} aria-label={`View certificate image: ${cert.title}`}>
          <img src={src} alt={`Certificate for ${cert.title}`} loading="lazy" />
          <span className="gallery-zoom" aria-hidden="true"><ZoomIn size={18} /></span>
        </button>
      )}

      {cert.link && (
        <a className="btn btn-secondary btn-sm" href={cert.link} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={16} aria-hidden="true" /> Verify credential
        </a>
      )}

      {IS_DEV && (
        <div className="dev-upload">
          <input ref={inputRef} type="file" accept="image/*" onChange={onFile} hidden />
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => inputRef.current?.click()}>
            <ImagePlus size={16} aria-hidden="true" /> {src ? 'Replace image (preview)' : 'Upload image (preview)'}
          </button>
          <p className="small muted">
            Dev only: preview stays in this browser. To publish, save the file in <code>public/certificates/</code> and set
            <code> image</code> in <code>content.js</code>.
          </p>
          {error && <p className="small error" role="alert">{error}</p>}
        </div>
      )}
    </article>
  )
}

export default function Certifications() {
  const [viewer, setViewer] = useState(null)

  return (
    <Section id="certifications" eyebrow="06 / Learning" title="Certifications & Learning">
      <div className="cert-grid">
        {certifications.map((c) => (
          <CertCard
            key={c.title}
            cert={c}
            onView={(src) => setViewer({ src, alt: `Certificate for ${c.title}`, caption: c.title })}
          />
        ))}
      </div>
      <Lightbox
        images={viewer ? [viewer] : []}
        index={viewer ? 0 : null}
        onClose={() => setViewer(null)}
        onChange={() => {}}
      />
    </Section>
  )
}
