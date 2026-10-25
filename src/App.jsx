import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import BackToTop from './components/BackToTop'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import { profile } from './data/content'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* storage unavailable */
  }
  return 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <BackToTop />
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {profile.name}. Built with React and Vite.</p>
        </div>
      </footer>
    </>
  )
}
