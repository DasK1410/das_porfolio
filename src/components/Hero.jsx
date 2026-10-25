import { useEffect, useState } from 'react'
import { Download, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/content'

function useRotating(items, ms = 2600) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || items.length < 2) return
    const t = setInterval(() => setI((n) => (n + 1) % items.length), ms)
    return () => clearInterval(t)
  }, [items, ms])
  return items[i]
}

export default function Hero() {
  const focus = useRotating(profile.focusAreas)

  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow mono">
            <span className="status-dot" aria-hidden="true" /> Open to opportunities
          </p>
          <h1>
            Hi, I'm <span className="accent">{profile.name}</span>
          </h1>
          <p className="hero-title">{profile.title}</p>
          <p className="focus-line mono" aria-hidden="true">
            Focus: <span key={focus} className="focus-word">{focus}</span>
          </p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="btn-row">
            <a className="btn btn-primary" href={profile.resumePath} target="_blank" rel="noopener noreferrer">
              <FileText size={18} aria-hidden="true" /> View Resume
            </a>
            <a className="btn btn-secondary" href={profile.resumePath} download>
              <Download size={18} aria-hidden="true" /> Download Resume
            </a>
            <a className="btn btn-ghost" href="#contact">
              <Mail size={18} aria-hidden="true" /> Contact Me
            </a>
          </div>

          {(profile.githubUrl || profile.linkedinUrl) && (
            <div className="social-row">
              {profile.linkedinUrl && (
                <a className="social-link" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} aria-hidden="true" /> LinkedIn
                </a>
              )}
              {profile.githubUrl && (
                <a className="social-link" href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={18} aria-hidden="true" /> GitHub
                </a>
              )}
            </div>
          )}
        </div>

        <aside className="hero-card" aria-label="Profile summary">
          {profile.photo ? (
            <img className="avatar avatar-photo" src={profile.photo} alt={`Portrait of ${profile.name}`} width="132" height="132" />
          ) : (
            <div className="avatar" role="img" aria-label={`${profile.name} initials avatar`}>
              {profile.initials}
            </div>
          )}
          <h2 className="hero-card-name">{profile.name}</h2>
          <p className="hero-card-role">Support Engineer I</p>
          <ul className="hero-meta">
            <li>
              <MapPin size={16} aria-hidden="true" /> {profile.location}
            </li>
            <li>
              <Mail size={16} aria-hidden="true" /> {profile.email}
            </li>
          </ul>
          <div className="chip-row chip-center">
            {['Linux', 'Git', 'Docker', 'Kubernetes', 'Azure', 'AWS'].map((t) => (
              <span key={t} className="chip mono">{t}</span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
