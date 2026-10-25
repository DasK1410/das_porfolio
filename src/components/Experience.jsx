import { Briefcase, CheckCircle2 } from 'lucide-react'
import Section from './Section'
import { engagements, experience } from '../data/content'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 / Experience" title="Professional Experience">
      <ol className="timeline">
        <li className="timeline-item">
          <span className="timeline-marker" aria-hidden="true">
            <Briefcase size={16} />
          </span>
          <article className="card">
            <header className="card-head">
              <div>
                <h3>{experience.position}</h3>
                <p className="muted">{experience.company}</p>
              </div>
              <span className="badge badge-live">{experience.period}</span>
            </header>
            <ul className="check-list">
              {experience.responsibilities.map((r) => (
                <li key={r}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="chip-row">
              {experience.techStack.map((t) => (
                <span key={t} className="chip mono">{t}</span>
              ))}
            </div>
          </article>
        </li>
      </ol>

      <h3 className="subhead">Client Engagements</h3>
      <div className="two-col">
        {engagements.map((e, i) => (
          <article key={e.title} className="card engagement">
            <header className="card-head">
              <div>
                <p className="eyebrow mono">Engagement {i + 1}</p>
                <h4>{e.title}</h4>
                <p className="muted small">{e.duration}</p>
              </div>
              <span className={`badge ${e.status === 'Ongoing' ? 'badge-live' : ''}`}>{e.status}</span>
            </header>
            <ul className="check-list">
              {e.responsibilities.map((r) => (
                <li key={r}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            {e.technologies.length > 0 && (
              <div className="chip-row">
                {e.technologies.map((t) => (
                  <span key={t} className="chip mono">{t}</span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
