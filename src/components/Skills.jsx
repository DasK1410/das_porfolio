import { useState } from 'react'
import { Boxes, Cloud, Code2, GitBranch, LifeBuoy, Terminal, Wrench } from 'lucide-react'
import Section from './Section'
import { skillGroups, skillLevels } from '../data/content'

const icons = { Boxes, Cloud, Code2, GitBranch, LifeBuoy, Terminal, Wrench }

export default function Skills() {
  const [filter, setFilter] = useState('all')

  const groups = skillGroups
    .map((g) => ({ ...g, items: g.items.filter((i) => filter === 'all' || i.level === filter) }))
    .filter((g) => g.items.length > 0)

  return (
    <Section id="skills" eyebrow="02 / Skills" title="Technical Skills">
      <div className="filter-bar" role="group" aria-label="Filter skills by level">
        <button type="button" className={`filter-btn${filter === 'all' ? ' active' : ''}`} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
          All
        </button>
        {Object.entries(skillLevels).map(([key, v]) => (
          <button
            key={key}
            type="button"
            className={`filter-btn${filter === key ? ' active' : ''}`}
            aria-pressed={filter === key}
            onClick={() => setFilter(key)}
            title={v.hint}
          >
            <span className={`dot dot-${key}`} aria-hidden="true" /> {v.label}
          </button>
        ))}
      </div>
      <p className="muted small" aria-live="polite">
        {filter === 'all' ? 'Showing every skill. Use the filters to see what I use at work, what I have practised, and what I am learning.' : skillLevels[filter].hint}
      </p>

      <div className="skill-grid">
        {groups.map((group) => {
          const Icon = icons[group.icon] || Code2
          return (
            <article key={group.title} className="card skill-card">
              <h3>
                <Icon size={20} aria-hidden="true" /> {group.title}
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span className={`dot dot-${item.level}`} aria-hidden="true" />
                    <span>
                      {item.name}
                      <span className="sr-only"> ({skillLevels[item.level].label})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
