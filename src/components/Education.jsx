import { GraduationCap } from 'lucide-react'
import Section from './Section'
import { education } from '../data/content'

export default function Education() {
  return (
    <Section id="education" eyebrow="07 / Education" title="Education">
      <ul className="edu-list">
        {education.map((e) => (
          <li key={e.degree} className="card edu-item">
            <GraduationCap size={22} className="cert-icon" aria-hidden="true" />
            <div>
              <h3>{e.degree}</h3>
              <p className="muted">{e.school}</p>
            </div>
            <span className="badge">{e.period}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
