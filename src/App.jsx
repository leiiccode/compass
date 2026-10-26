import { useState } from 'react'
import mariaPhoto from './assets/maria-santos.jpg'
import juanPhoto from './assets/juan-dela-cruz.png'
import elenaPhoto from './assets/elena-reyes.png'
import anaPhoto from './assets/ana-villanueva.png'
import carmenPhoto from './assets/carmen-ramos.png'
import rosaPhoto from './assets/rosa-gonzales.png'
import teresaPhoto from './assets/teresa-aquino.png'
import teamPhoto from './assets/compass-team.jpg'
import compassLogo from './assets/compass-logo-white.png'
import './App.css'

const contactEmail = 'support@compass-guidance.site'

const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'team', label: 'Our Team' },
  { id: 'services', label: 'Services' },
  { id: 'location', label: 'Location' },
  { id: 'contact', label: 'Contact' },
]

const teamMembers = [
  {
    name: 'Ms. Maria Santos',
    photo: mariaPhoto,
    photoScale: 2.1,
    specialization: 'Academic Counseling & Student Support',
    summary: 'Dedicated to helping students navigate academic milestones with empathy.',
    bio: 'Ms. Maria Santos brings over 10 years of experience helping students navigate academic milestones, time management, and personal growth with empathy and actionable advice.',
  },
  {
    name: 'Mr. Juan Dela Cruz',
    photo: juanPhoto,
    photoScale: 2.1,
    specialization: 'Leadership & Career Pathing',
    summary: 'Focuses on leadership development, career pathing, and community support.',
    bio: 'Mr. Juan Dela Cruz focuses on leadership development, career pathing, and building strong peer support communities for young adults.',
  },
  {
    name: 'Ms. Elena Reyes',
    photo: elenaPhoto,
    photoScale: 1.25,
    specialization: 'Student Welfare & Positive Encouragement',
    summary: 'Specializes in student welfare, academic planning, and positive encouragement.',
    bio: 'Ms. Elena Reyes specializes in student welfare, academic planning, and cultivating positive emotional resilience.',
  },
  {
    name: 'Ms. Ana Villanueva',
    photo: anaPhoto,
    photoScale: 1.8,
    specialization: 'Personal Growth & Emotional Resilience',
    summary: 'Provides a compassionate ear for personal growth and emotional resilience.',
    bio: 'Ms. Ana Villanueva provides a compassionate ear for personal growth, mindfulness, and overcoming everyday stress.',
  },
  {
    name: 'Ms. Carmen Ramos',
    photo: carmenPhoto,
    photoScale: 1.8,
    specialization: 'Mindful Reflection & Goal Setting',
    summary: 'Passionate about mindful reflection, counseling support, and goal setting.',
    bio: 'Ms. Carmen Ramos is passionate about mindful reflection, counseling support, and helping individuals set achievable life goals.',
  },
  {
    name: 'Ms. Rosa Gonzales',
    photo: rosaPhoto,
    photoScale: 1.8,
    specialization: 'Stress Management & Daily Routines',
    summary: 'Assists individuals with stress management and positive daily routines.',
    bio: 'Ms. Rosa Gonzales assists individuals with stress management techniques, relaxation, and establishing healthy daily routines.',
  },
  {
    name: 'Ms. Teresa Aquino',
    photo: teresaPhoto,
    photoScale: 1.2,
    specialization: 'Student Advocacy & Empowerment',
    summary: 'Dedicated to student advocacy, peer support, and personal empowerment.',
    bio: 'Ms. Teresa Aquino is dedicated to student advocacy, peer support programs, and empowering individuals to discover their strengths.',
  },
]

const services = [
  {
    icon: 'message',
    title: 'Counseling',
    description: 'One-on-one sessions offering professional support, clarity, and personalized coping strategies.',
    status: 'Available',
  },
  {
    icon: 'compass',
    title: 'Guidance',
    description: 'Directional mentoring for students and adults navigating life choices and personal milestones.',
    status: 'Available',
  },
  {
    icon: 'heart',
    title: 'Marital Therapy',
    description: 'Couples counseling designed to restore communication, trust, and relationship harmony.',
    status: 'Specialized',
  },
  {
    icon: 'people',
    title: 'Family Counseling',
    description: 'Support for families to resolve conflict, understand dynamics, and strengthen bonds.',
    status: 'Specialized',
  },
  {
    icon: 'brain',
    title: 'Psychological Trauma Therapy',
    description: 'Safe, evidence-based trauma healing and emotional recovery with licensed care.',
    status: 'Professional Care',
  },
  {
    icon: 'leaf',
    title: 'Acupuncture for Stress Relief',
    description: 'Holistic somatic therapy to release physical tension, lower cortisol, and calm anxiety.',
    status: 'Holistic Wellness',
  },
]

const faqs = [
  {
    question: 'How can I book a counseling session?',
    answer: 'Reach out through our contact form by selecting your preferred topic, or visit our office at AMA Computer College – Bitas, Cabanatuan City.',
  },
  {
    question: 'Are my inquiries confidential?',
    answer: 'Professional counseling sessions and inquiries are handled with respect for privacy and confidentiality in accordance with professional ethical standards.',
  },
  {
    question: 'What are your office hours?',
    answer: 'We are open Monday through Friday, 9:00 AM to 5:00 PM.',
  },
]

function Icon({ name, size = 18 }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    back: <path d="m15 18-6-6 6-6M9 12h11" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m16.2 7.8-2.5 5.9-5.9 2.5 2.5-5.9 5.9-2.5Z" /></>,
    message: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" /><path d="M8 12h8m-8-4h5" /></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.9M14 3.1a4 4 0 0 1 0 7.8" /><circle cx="10" cy="7" r="4" /></>,
    brain: <><path d="M12 18V5a3 3 0 0 0-5.8-1A4 4 0 0 0 4 11a4 4 0 0 0 2 7.5A3.5 3.5 0 0 0 12 18Zm0-13a3 3 0 0 1 5.8-1A4 4 0 0 1 20 11a4 4 0 0 1-2 7.5A3.5 3.5 0 0 1 12 18" /><path d="M8 8h.01M16 8h.01M7 13h.01M17 13h.01" /></>,
    leaf: <><path d="M20 4c-8 0-14 2-14 9a7 7 0 0 0 7 7c7 0 7-8 7-16Z" /><path d="M4 21c2-5 6-8 12-11" /></>,
    sparkle: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" /></>,
    external: <><path d="M14 3h7v7m0-7-11 11" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
  }

  return (
    <svg
      aria-hidden="true"
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] ?? paths.compass}
    </svg>
  )
}

function ButtonLink({ children, onClick, secondary = false, small = false, type = 'button' }) {
  const className = ['button', secondary && 'button--secondary', small && 'button--small']
    .filter(Boolean)
    .join(' ')

  return <button className={className} type={type} onClick={onClick}>{children}</button>
}

function Header({ activeView, menuOpen, onNavigate, onToggleMenu }) {
  return (
    <header className="site-header">
      <div className="nav container">
        <button className="brand" onClick={() => onNavigate('home')} aria-label="COMPASS home">
          <span className="brand-content">
            <img className="brand-logo" src={compassLogo} alt="" />
            <span className="brand-name" aria-hidden="true">
              <strong>COMPASS</strong>
              <small>FINDING DIRECTION</small>
            </span>
          </span>
        </button>
        <nav className={`nav-links${menuOpen ? ' nav-links--open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <button
              key={item.id}
              className={activeView === item.id ? 'nav-link nav-link--active' : 'nav-link'}
              aria-current={activeView === item.id ? 'page' : undefined}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="nav-actions">
          <ButtonLink small onClick={() => onNavigate('contact')}>Get in Touch</ButtonLink>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={onToggleMenu}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>
}

function HomePage({ onNavigate }) {
  const principles = [
    { icon: 'heart', title: 'Listen', description: 'We listen first.' },
    { icon: 'sparkle', title: 'Care', description: 'People come first.' },
    { icon: 'arrow', title: 'Grow', description: 'Take simple steps.' },
    { icon: 'compass', title: 'Direction', description: 'Find your way.' },
  ]

  return (
    <section className="page">
      <div className="hero-grid">
        <div className="hero-copy">
          <Eyebrow>COMPASS · Support</Eyebrow>
          <h1>Here to guide you.</h1>
          <p className="lead">Every person deserves a safe space to be heard and supported. Compass helps you explore resources and find your next steps easily.</p>
          <div className="button-row">
            <ButtonLink onClick={() => onNavigate('services')}>View Services <Icon name="arrow" /></ButtonLink>
            <ButtonLink secondary onClick={() => onNavigate('team')}>Our Team</ButtonLink>
          </div>
          <p className="small-copy">Just start with what you feel. You are welcome here.</p>
        </div>
        <img
          className="hero-image"
          src={teamPhoto}
          alt="The COMPASS counselors together"
        />
      </div>

      <div className="principle-grid">
        {principles.map((principle) => (
          <article className="principle-card" key={principle.title}>
            <span className="principle-icon"><Icon name={principle.icon} /></span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function AboutPage() {
  const commitments = [
    ['01', 'Our Mission', 'To make guidance simple and encourage personal growth.'],
    ['02', 'Our Vision', 'A community where everyone feels heard and supported.'],
    ['03', 'Our Promise', 'To communicate clearly and share helpful resources.'],
  ]

  return (
    <section className="page about-page">
      <div className="about-highlight">
        <Eyebrow>Who we are</Eyebrow>
        <h1>A steady guide when the path is unclear.</h1>
        <p>Compass helps you find your direction while letting you choose your own path. We offer simple guidance and support.</p>
      </div>
      <div className="about-details">
        <Eyebrow>About Us</Eyebrow>
        <h2>Guidance to help you move forward.</h2>
        <p>A welcoming space where anyone can explore information and find support.</p>
        <div className="commitment-list">
          {commitments.map(([number, title, description]) => (
            <div className="commitment" key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamPage({ onSelectMember }) {
  return (
    <section className="page">
      <div className="team-banner">
        <div>
          <Eyebrow>Meet Our Team</Eyebrow>
          <h1>The People Behind Compass</h1>
          <p>A dedicated group of guidance counselors committed to support, empower, and walk with you in your journey.</p>
        </div>
        <img className="team-banner-photo" src={teamPhoto} alt="COMPASS counselors together" />
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <button className="member-card" key={member.name} onClick={() => onSelectMember(index)}>
            <span className="member-photo">
              <img
                src={member.photo}
                alt={`${member.name}, Guidance Counselor`}
                style={{ '--photo-scale': member.photoScale }}
              />
            </span>
            <span className="member-content">
              <span className="member-role">Guidance Counselor</span>
              <strong>{member.name}</strong>
              <span className="member-summary">{member.summary}</span>
              <span className="member-action">View Full Profile <Icon name="arrow" size={15} /></span>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

function MemberPage({ member, onBack, onContact }) {
  if (!member) return null

  return (
    <section className="page member-page">
      <ButtonLink secondary small onClick={onBack}><Icon name="back" /> Back to Team</ButtonLink>
      <article className="member-profile">
        <span className="profile-photo">
          <img
            src={member.photo}
            alt={`${member.name}, Guidance Counselor`}
            style={{ '--photo-scale': member.photoScale }}
          />
        </span>
        <Eyebrow>Guidance Counselor</Eyebrow>
        <h1>{member.name}</h1>
        <span className="specialization">{member.specialization}</span>
        <div className="profile-bio">
          <h2>Professional Background & Biography</h2>
          <p>{member.bio}</p>
          <div className="profile-cta">
            <div><strong>Need a session?</strong><span>Reach out via our contact form.</span></div>
            <ButtonLink small onClick={onContact}>Contact Counselor</ButtonLink>
          </div>
        </div>
      </article>
    </section>
  )
}

function ServicesPage() {
  return (
    <section className="page">
      <div className="page-heading">
        <Eyebrow>Professional Care</Eyebrow>
        <h1>Our Counseling & Therapy Services</h1>
        <p>Specialized therapeutic and guidance services tailored to your emotional, mental, and relational well-being.</p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon"><Icon name={service.icon} size={21} /></span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <span className="service-status">{service.status}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function LocationPage() {
  return (
    <section className="page">
      <div className="page-heading">
        <Eyebrow>Location</Eyebrow>
        <h1>Find us here.</h1>
        <p>Visit our campus location below.</p>
      </div>
      <div className="location-grid">
        <iframe
          className="location-map"
          title="Map to AMA Computer College – Bitas, Cabanatuan City"
          loading="lazy"
          src="https://maps.google.com/maps?q=AMA%20Computer%20College%20Bitas%20Cabanatuan%20City%20Nueva%20Ecija&t=&z=14&ie=UTF8&iwloc=&output=embed"
        />
        <div className="location-card">
          <Eyebrow>Office</Eyebrow>
          <h2>Visit Compass</h2>
          <p><strong>AMA Computer College – Bitas</strong><br />Cabanatuan City, Nueva Ecija, Philippines</p>
          <a className="button" href="https://www.google.com/maps/search/?api=1&query=AMA+Computer+College+Bitas+Cabanatuan+City+Nueva+Ecija" target="_blank" rel="noopener noreferrer">
            Open Maps <Icon name="external" />
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactPage({ status, onSubmit }) {
  return (
    <section className="page">
      <div className="contact-grid">
        <div className="contact-intro">
          <Eyebrow>Get in Touch</Eyebrow>
          <h1>You are not alone.</h1>
          <p>Send us a quick message or ask a question. We are here to listen.</p>
          <div className="contact-details">
            <div><strong>Email</strong><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div>
            <div><strong>Location</strong><span>Cabanatuan City</span></div>
            <div><strong>Hours</strong><span>Mon - Fri, 9am - 5pm</span></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <h2>Send a Message</h2>
          <p>Fill out the form below to reach out. Your email app will open with your message ready to send.</p>
          <div className="form-row">
            <label>Name<input name="name" autoComplete="name" placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
          </div>
          <label>Topic
            <select name="category" required defaultValue="">
              <option value="" disabled>Select topic</option>
              <option>Counseling & Therapy</option>
              <option>Marital & Family Therapy</option>
              <option>Trauma Support</option>
              <option>Stress Relief & Acupuncture</option>
              <option>Other</option>
            </select>
          </label>
          <label>Message
            <textarea name="message" required maxLength={2000} placeholder="How can we help you?" />
          </label>
          <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <ButtonLink type="submit">Send Message <Icon name="arrow" /></ButtonLink>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  )
}

function LegalPage() {
  return (
    <section className="page narrow-page">
      <Eyebrow>Legal Information</Eyebrow>
      <h1>Privacy Policy & Terms of Service</h1>
      <article className="info-card">
        <h2>Privacy Policy</h2>
        <p>At COMPASS, we respect and protect your personal information. Any data or message submitted through our inquiry forms is handled with strict confidentiality. We do not sell, rent, or share visitor data with third parties.</p>
        <p>We use your information solely to respond to your inquiries and provide relevant guidance and counseling information.</p>
      </article>
      <article className="info-card">
        <h2>Terms of Service</h2>
        <p>By accessing and using this website, you agree to abide by these terms. COMPASS provides informational guidance and support services. Our online tools and contact forms are not emergency or crisis hotlines.</p>
        <p>All content, imagery, and resources provided on this platform are protected under copyright law and belong to COMPASS.</p>
      </article>
    </section>
  )
}

function FaqPage() {
  return (
    <section className="page narrow-page">
      <Eyebrow>Customer Support</Eyebrow>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faq-list">
        {faqs.map(({ question, answer }) => (
          <article className="info-card" key={question}>
            <h2>{question}</h2>
            <p>{answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Footer({ onNavigate }) {
  const footerLinks = [
    ['About Us', 'about'],
    ['Services', 'services'],
    ['Our Team', 'team'],
    ['Customer Support & FAQs', 'faqs'],
    ['Privacy Policy', 'legal'],
    ['Terms of Service', 'legal'],
  ]

  return (
    <footer className="site-footer">
      <div className="copyright"><strong>© {new Date().getFullYear()} COMPASS.</strong><span>All rights reserved.</span></div>
      <nav className="footer-links" aria-label="Footer navigation">
        {footerLinks.map(([label, view]) => (
          <button key={label} onClick={() => onNavigate(view)}>{label}</button>
        ))}
      </nav>
      <div className="social-links" aria-label="Social links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
      </div>
    </footer>
  )
}

function App() {
  const [activeView, setActiveView] = useState('home')
  const [selectedMember, setSelectedMember] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  function navigateTo(view) {
    setActiveView(view)
    setMenuOpen(false)
    setFormStatus('')
  }

  function selectMember(index) {
    setSelectedMember(teamMembers[index])
    navigateTo('member')
  }

  function handleContactSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    if (formData.get('website')) {
      setFormStatus('Unable to prepare your message. Please try again.')
      return
    }

    const subject = `COMPASS inquiry: ${formData.get('category')}`
    const body = [
      `Name: ${formData.get('name') || 'Not provided'}`,
      `Email: ${formData.get('email') || 'Not provided'}`,
      '',
      String(formData.get('message') || ''),
    ].join('\n')

    setFormStatus('Opening your email app with your message. Please review and send it there.')
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const pages = {
    home: <HomePage onNavigate={navigateTo} />,
    about: <AboutPage />,
    team: <TeamPage onSelectMember={selectMember} />,
    member: <MemberPage member={selectedMember} onBack={() => navigateTo('team')} onContact={() => navigateTo('contact')} />,
    services: <ServicesPage />,
    location: <LocationPage />,
    contact: <ContactPage status={formStatus} onSubmit={handleContactSubmit} />,
    legal: <LegalPage />,
    faqs: <FaqPage />,
  }

  return (
    <div className="app-shell">
      <Header
        activeView={activeView}
        menuOpen={menuOpen}
        onNavigate={navigateTo}
        onToggleMenu={() => setMenuOpen((open) => !open)}
      />
      <main className="view-container" key={activeView}>
        {pages[activeView] ?? pages.home}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  )
}

export default App
