import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { navigation, teamMembers, contactEmail } from './data/siteData'
import { AboutPage, ContactPage, FaqPage, HomePage, LegalPage, LocationPage, MemberPage, ServicesPage, TeamPage } from './pages/PublicPages'

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (!section) return

  const headerOffset = 72
  const targetTop = sectionId === 'home' ? 0 : Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerOffset)
  const startTop = window.scrollY
  const distance = targetTop - startTop
  const duration = 280
  const startTime = performance.now()

  function animate(currentTime) {
    const elapsed = Math.min((currentTime - startTime) / duration, 1)
    const eased = 1 - Math.pow(1 - elapsed, 3)
    window.scrollTo(0, startTop + distance * eased)
    if (elapsed < 1) requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
}

function App() {
  const [activeView, setActiveView] = useState('home')
  const [selectedMember, setSelectedMember] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const navigationLock = useRef(false)
  const unlockTimer = useRef(null)

  useEffect(() => {
    if (!['home', 'about', 'team', 'services', 'location', 'contact'].includes(activeView)) return

    const sectionIds = navigation.map(({ id }) => id)
    const observer = new IntersectionObserver((entries) => {
      if (navigationLock.current) return
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)
      if (visible.length > 0 && sectionIds.includes(visible[0].target.id)) setActiveView(visible[0].target.id)
    }, { rootMargin: '-72px 0px -55% 0px', threshold: 0 })

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [activeView])

  function navigateTo(view) {
    navigationLock.current = true
    window.clearTimeout(unlockTimer.current)
    setActiveView(view)
    setMenuOpen(false)
    setFormStatus('')

    if (view === 'faqs' || view === 'legal' || view === 'member') {
      unlockTimer.current = window.setTimeout(() => {
        navigationLock.current = false
      }, 350)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    requestAnimationFrame(() => {
      scrollToSection(view)
      unlockTimer.current = window.setTimeout(() => {
        navigationLock.current = false
      }, 350)
    })
  }

  function selectMember(index) {
    navigationLock.current = true
    window.clearTimeout(unlockTimer.current)
    setSelectedMember(teamMembers[index])
    setActiveView('member')
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    unlockTimer.current = window.setTimeout(() => {
      navigationLock.current = false
    }, 350)
  }

  function handleContactSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    if (formData.get('website')) {
      setFormStatus('Unable to prepare your message. Please try again.')
      return
    }

    const subject = `COMPASS inquiry: ${formData.get('category')}`
    const body = [`Name: ${formData.get('name') || 'Not provided'}`, `Email: ${formData.get('email') || 'Not provided'}`, '', String(formData.get('message') || '')].join('\n')
    setFormStatus('Opening your email app with your message. Please review and send it there.')
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="app-shell">
      <Header activeView={activeView} menuOpen={menuOpen} onNavigate={navigateTo} onToggleMenu={() => setMenuOpen((open) => !open)} />
      <main className="view-container">
        {activeView === 'member' && selectedMember ? (
          <div id="member"><MemberPage member={selectedMember} onBack={() => navigateTo('team')} onContact={() => navigateTo('contact')} /></div>
        ) : activeView === 'faqs' ? (
          <FaqPage />
        ) : activeView === 'legal' ? (
          <LegalPage />
        ) : (
          <>
            <div id="home"><HomePage onNavigate={navigateTo} /></div>
            <div id="about"><AboutPage /></div>
            <div id="team"><TeamPage onSelectMember={selectMember} /></div>
            <div id="services"><ServicesPage /></div>
            <div id="location"><LocationPage /></div>
            <div id="contact"><ContactPage status={formStatus} onSubmit={handleContactSubmit} /></div>
          </>
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  )
}

export default App
