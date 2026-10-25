import { Languages } from 'lucide-react'
import Section from './Section'
import { about } from '../data/content'

export default function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="About Me">
      <div className="about-grid">
        <div className="about-text">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="muted small">
            <Languages size={16} className="inline-icon" aria-hidden="true" /> Languages: {about.languages.join(', ')}
          </p>
        </div>
        <ul className="strength-list">
          {about.strengths.map((s) => (
            <li key={s.label} className="card strength">
              <h3>{s.label}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
