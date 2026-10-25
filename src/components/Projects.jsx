import { ExternalLink, Info } from 'lucide-react'
import Section from './Section'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="05 / Projects" title="Projects">
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.title} className="card project-card">
            <header>
              <span className="badge">{p.type}</span>
              <h3>{p.title}</h3>
              <p className="muted small">{p.subtitle}</p>
            </header>

            <dl className="project-facts">
              <div>
                <dt>Problem</dt>
                <dd>{p.problem}</dd>
              </div>
              <div>
                <dt>Purpose</dt>
                <dd>{p.purpose}</dd>
              </div>
              <div>
                <dt>My contribution</dt>
                <dd>{p.contribution}</dd>
              </div>
            </dl>

            <div>
              <p className="mini-label">{p.techLabel || 'Technologies'}</p>
              <div className="chip-row">
                {p.technologies.map((t) => (
                  <span key={t} className="chip mono">{t}</span>
                ))}
              </div>
            </div>

            {p.note && (
              <p className="note">
                <Info size={16} aria-hidden="true" /> <span>{p.note}</span>
              </p>
            )}

            {p.link && (
              <a className="btn btn-secondary btn-sm" href={p.link.href} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} aria-hidden="true" /> {p.link.label}
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
