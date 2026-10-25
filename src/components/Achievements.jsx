import { useState } from 'react'
import { CalendarDays, Clock, MapPin, Mic2, ZoomIn } from 'lucide-react'
import Section from './Section'
import Lightbox from './Lightbox'
import { achievements } from '../data/content'

export default function Achievements() {
  const [open, setOpen] = useState({ id: null, index: null })
  const active = achievements.find((a) => a.id === open.id)

  return (
    <Section id="achievements" eyebrow="04 / Achievements" title="Company Achievements">
      {achievements.map((a) => (
        <article key={a.id} className="card achievement">
          <div className="achievement-body">
            <p className="eyebrow mono">
              <Mic2 size={14} className="inline-icon" aria-hidden="true" /> Internal tech talk
            </p>
            <h3>{a.title}</h3>
            <ul className="meta-row">
              <li><CalendarDays size={16} aria-hidden="true" /> {a.date}</li>
              <li><Clock size={16} aria-hidden="true" /> {a.time}</li>
              <li><MapPin size={16} aria-hidden="true" /> {a.venue}</li>
            </ul>
            <p className="muted">{a.summary}</p>
            <ul className="check-list">
              {a.highlights.map((h) => (
                <li key={h}>
                  <span className="bullet" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <p className="note note-info">{a.takeaway}</p>
            <div className="chip-row">
              {a.tags.map((t) => (
                <span key={t} className="chip mono">#{t.replace(/\s+/g, '')}</span>
              ))}
            </div>
          </div>

          <div className="gallery" aria-label="Tech talk photos">
            {a.images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className={`gallery-item${i === 0 ? ' gallery-item-lead' : ''}`}
                onClick={() => setOpen({ id: a.id, index: i })}
                aria-label={`View larger: ${img.caption}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <span className="gallery-zoom" aria-hidden="true"><ZoomIn size={18} /></span>
              </button>
            ))}
          </div>
        </article>
      ))}

      <Lightbox
        images={active ? active.images : []}
        index={active ? open.index : null}
        onClose={() => setOpen({ id: null, index: null })}
        onChange={(i) => setOpen((o) => ({ ...o, index: i }))}
      />
    </Section>
  )
}
