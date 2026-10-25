import { useState } from 'react'
import { Check, Copy, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Section from './Section'
import { contactMessage, profile } from '../data/content'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable: the email link above still works */
    }
  }

  return (
    <Section id="contact" eyebrow="08 / Contact" title="Get in Touch">
      <div className="card contact-card">
        <p className="contact-message">{contactMessage}</p>
        <ul className="contact-list">
          <li>
            <Mail size={18} aria-hidden="true" />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button type="button" className="copy-btn" onClick={copyEmail} aria-label="Copy email address">
              {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </li>
          <li>
            <MapPin size={18} aria-hidden="true" />
            <span>{profile.location}</span>
          </li>
        </ul>
        <div className="btn-row">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" /> Email Me
          </a>
          <a className="btn btn-secondary" href={profile.resumePath} download>
            <Download size={18} aria-hidden="true" /> Download Resume
          </a>
          {profile.linkedinUrl && (
            <a className="btn btn-ghost" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} aria-hidden="true" /> LinkedIn
            </a>
          )}
          {profile.githubUrl && (
            <a className="btn btn-ghost" href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={18} aria-hidden="true" /> GitHub
            </a>
          )}
        </div>
      </div>
    </Section>
  )
}
